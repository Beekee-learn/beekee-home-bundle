(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var Retry = Package.retry.Retry;
var MongoID = Package['mongo-id'].MongoID;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var ECMAScript = Package.ecmascript.ECMAScript;
var DDPCommon = Package['ddp-common'].DDPCommon;
var DDP = Package['ddp-client'].DDP;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var RoutePolicy = Package.routepolicy.RoutePolicy;
var Hook = Package['callback-hook'].Hook;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var StreamServer, DDPServer, id, Server;

var require = meteorInstall({"node_modules":{"meteor":{"ddp-server":{"stream_server.js":function module(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ddp-server/stream_server.js                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// By default, we use the permessage-deflate extension with default
// configuration. If $SERVER_WEBSOCKET_COMPRESSION is set, then it must be valid
// JSON. If it represents a falsey value, then we do not use permessage-deflate
// at all; otherwise, the JSON value is used as an argument to deflate's
// configure method; see
// https://github.com/faye/permessage-deflate-node/blob/master/README.md
//
// (We do this in an _.once instead of at startup, because we don't want to
// crash the tool during isopacket load if your JSON doesn't parse. This is only
// a problem because the tool has to load the DDP server code just in order to
// be a DDP client; see https://github.com/meteor/meteor/issues/3452 .)
var websocketExtensions = _.once(function () {
  var extensions = [];
  var websocketCompressionConfig = process.env.SERVER_WEBSOCKET_COMPRESSION ? JSON.parse(process.env.SERVER_WEBSOCKET_COMPRESSION) : {};
  if (websocketCompressionConfig) {
    extensions.push(Npm.require('permessage-deflate').configure(websocketCompressionConfig));
  }
  return extensions;
});
var pathPrefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "";
StreamServer = function () {
  var self = this;
  self.registration_callbacks = [];
  self.open_sockets = [];

  // Because we are installing directly onto WebApp.httpServer instead of using
  // WebApp.app, we have to process the path prefix ourselves.
  self.prefix = pathPrefix + '/sockjs';
  RoutePolicy.declare(self.prefix + '/', 'network');

  // set up sockjs
  var sockjs = Npm.require('sockjs');
  var serverOptions = {
    prefix: self.prefix,
    log: function () {},
    // this is the default, but we code it explicitly because we depend
    // on it in stream_client:HEARTBEAT_TIMEOUT
    heartbeat_delay: 45000,
    // The default disconnect_delay is 5 seconds, but if the server ends up CPU
    // bound for that much time, SockJS might not notice that the user has
    // reconnected because the timer (of disconnect_delay ms) can fire before
    // SockJS processes the new connection. Eventually we'll fix this by not
    // combining CPU-heavy processing with SockJS termination (eg a proxy which
    // converts to Unix sockets) but for now, raise the delay.
    disconnect_delay: 60 * 1000,
    // Allow disabling of CORS requests to address
    // https://github.com/meteor/meteor/issues/8317.
    disable_cors: !!process.env.DISABLE_SOCKJS_CORS,
    // Set the USE_JSESSIONID environment variable to enable setting the
    // JSESSIONID cookie. This is useful for setting up proxies with
    // session affinity.
    jsessionid: !!process.env.USE_JSESSIONID
  };

  // If you know your server environment (eg, proxies) will prevent websockets
  // from ever working, set $DISABLE_WEBSOCKETS and SockJS clients (ie,
  // browsers) will not waste time attempting to use them.
  // (Your server will still have a /websocket endpoint.)
  if (process.env.DISABLE_WEBSOCKETS) {
    serverOptions.websocket = false;
  } else {
    serverOptions.faye_server_options = {
      extensions: websocketExtensions()
    };
  }
  self.server = sockjs.createServer(serverOptions);

  // Install the sockjs handlers, but we want to keep around our own particular
  // request handler that adjusts idle timeouts while we have an outstanding
  // request.  This compensates for the fact that sockjs removes all listeners
  // for "request" to add its own.
  WebApp.httpServer.removeListener('request', WebApp._timeoutAdjustmentRequestCallback);
  self.server.installHandlers(WebApp.httpServer);
  WebApp.httpServer.addListener('request', WebApp._timeoutAdjustmentRequestCallback);

  // Support the /websocket endpoint
  self._redirectWebsocketEndpoint();
  self.server.on('connection', function (socket) {
    // sockjs sometimes passes us null instead of a socket object
    // so we need to guard against that. see:
    // https://github.com/sockjs/sockjs-node/issues/121
    // https://github.com/meteor/meteor/issues/10468
    if (!socket) return;

    // We want to make sure that if a client connects to us and does the initial
    // Websocket handshake but never gets to the DDP handshake, that we
    // eventually kill the socket.  Once the DDP handshake happens, DDP
    // heartbeating will work. And before the Websocket handshake, the timeouts
    // we set at the server level in webapp_server.js will work. But
    // faye-websocket calls setTimeout(0) on any socket it takes over, so there
    // is an "in between" state where this doesn't happen.  We work around this
    // by explicitly setting the socket timeout to a relatively large time here,
    // and setting it back to zero when we set up the heartbeat in
    // livedata_server.js.
    socket.setWebsocketTimeout = function (timeout) {
      if ((socket.protocol === 'websocket' || socket.protocol === 'websocket-raw') && socket._session.recv) {
        socket._session.recv.connection.setTimeout(timeout);
      }
    };
    socket.setWebsocketTimeout(45 * 1000);
    socket.send = function (data) {
      socket.write(data);
    };
    socket.on('close', function () {
      self.open_sockets = _.without(self.open_sockets, socket);
    });
    self.open_sockets.push(socket);

    // only to send a message after connection on tests, useful for
    // socket-stream-client/server-tests.js
    if (process.env.TEST_METADATA && process.env.TEST_METADATA !== "{}") {
      socket.send(JSON.stringify({
        testMessageOnConnect: true
      }));
    }

    // call all our callbacks when we get a new socket. they will do the
    // work of setting up handlers and such for specific messages.
    _.each(self.registration_callbacks, function (callback) {
      callback(socket);
    });
  });
};
Object.assign(StreamServer.prototype, {
  // call my callback when a new socket connects.
  // also call it for all current connections.
  register: function (callback) {
    var self = this;
    self.registration_callbacks.push(callback);
    _.each(self.all_sockets(), function (socket) {
      callback(socket);
    });
  },
  // get a list of all sockets
  all_sockets: function () {
    var self = this;
    return _.values(self.open_sockets);
  },
  // Redirect /websocket to /sockjs/websocket in order to not expose
  // sockjs to clients that want to use raw websockets
  _redirectWebsocketEndpoint: function () {
    var self = this;
    // Unfortunately we can't use a connect middleware here since
    // sockjs installs itself prior to all existing listeners
    // (meaning prior to any connect middlewares) so we need to take
    // an approach similar to overshadowListeners in
    // https://github.com/sockjs/sockjs-node/blob/cf820c55af6a9953e16558555a31decea554f70e/src/utils.coffee
    ['request', 'upgrade'].forEach(event => {
      var httpServer = WebApp.httpServer;
      var oldHttpServerListeners = httpServer.listeners(event).slice(0);
      httpServer.removeAllListeners(event);

      // request and upgrade have different arguments passed but
      // we only care about the first one which is always request
      var newListener = function (request /*, moreArguments */) {
        // Store arguments for use within the closure below
        var args = arguments;

        // TODO replace with url package
        var url = Npm.require('url');

        // Rewrite /websocket and /websocket/ urls to /sockjs/websocket while
        // preserving query string.
        var parsedUrl = url.parse(request.url);
        if (parsedUrl.pathname === pathPrefix + '/websocket' || parsedUrl.pathname === pathPrefix + '/websocket/') {
          parsedUrl.pathname = self.prefix + '/websocket';
          request.url = url.format(parsedUrl);
        }
        _.each(oldHttpServerListeners, function (oldListener) {
          oldListener.apply(httpServer, args);
        });
      };
      httpServer.addListener(event, newListener);
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livedata_server.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ddp-server/livedata_server.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let _objectSpread;
module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }
}, 0);
DDPServer = {};
var Fiber = Npm.require('fibers');

// Publication strategies define how we handle data from published cursors at the collection level
// This allows someone to:
// - Choose a trade-off between client-server bandwidth and server memory usage
// - Implement special (non-mongo) collections like volatile message queues
const publicationStrategies = {
  // SERVER_MERGE is the default strategy.
  // When using this strategy, the server maintains a copy of all data a connection is subscribed to.
  // This allows us to only send deltas over multiple publications.
  SERVER_MERGE: {
    useDummyDocumentView: false,
    useCollectionView: true,
    doAccountingForCollection: true
  },
  // The NO_MERGE_NO_HISTORY strategy results in the server sending all publication data
  // directly to the client. It does not remember what it has previously sent
  // to it will not trigger removed messages when a subscription is stopped.
  // This should only be chosen for special use cases like send-and-forget queues.
  NO_MERGE_NO_HISTORY: {
    useDummyDocumentView: false,
    useCollectionView: false,
    doAccountingForCollection: false
  },
  // NO_MERGE is similar to NO_MERGE_NO_HISTORY but the server will remember the IDs it has
  // sent to the client so it can remove them when a subscription is stopped.
  // This strategy can be used when a collection is only used in a single publication.
  NO_MERGE: {
    useDummyDocumentView: false,
    useCollectionView: false,
    doAccountingForCollection: true
  },
  // NO_MERGE_MULTI is similar to `NO_MERGE`, but it does track whether a document is
  // used by multiple publications. This has some memory overhead, but it still does not do
  // diffing so it's faster and slimmer than SERVER_MERGE.
  NO_MERGE_MULTI: {
    useDummyDocumentView: true,
    useCollectionView: true,
    doAccountingForCollection: true
  }
};
DDPServer.publicationStrategies = publicationStrategies;

// This file contains classes:
// * Session - The server's connection to a single DDP client
// * Subscription - A single subscription for a single client
// * Server - An entire server that may talk to > 1 client. A DDP endpoint.
//
// Session and Subscription are file scope. For now, until we freeze
// the interface, Server is package scope (in the future it should be
// exported).
var DummyDocumentView = function () {
  var self = this;
  self.existsIn = new Set(); // set of subscriptionHandle
  self.dataByKey = new Map(); // key-> [ {subscriptionHandle, value} by precedence]
};
Object.assign(DummyDocumentView.prototype, {
  getFields: function () {
    return {};
  },
  clearField: function (subscriptionHandle, key, changeCollector) {
    changeCollector[key] = undefined;
  },
  changeField: function (subscriptionHandle, key, value, changeCollector, isAdd) {
    changeCollector[key] = value;
  }
});

// Represents a single document in a SessionCollectionView
var SessionDocumentView = function () {
  var self = this;
  self.existsIn = new Set(); // set of subscriptionHandle
  self.dataByKey = new Map(); // key-> [ {subscriptionHandle, value} by precedence]
};
DDPServer._SessionDocumentView = SessionDocumentView;
_.extend(SessionDocumentView.prototype, {
  getFields: function () {
    var self = this;
    var ret = {};
    self.dataByKey.forEach(function (precedenceList, key) {
      ret[key] = precedenceList[0].value;
    });
    return ret;
  },
  clearField: function (subscriptionHandle, key, changeCollector) {
    var self = this;
    // Publish API ignores _id if present in fields
    if (key === "_id") return;
    var precedenceList = self.dataByKey.get(key);

    // It's okay to clear fields that didn't exist. No need to throw
    // an error.
    if (!precedenceList) return;
    var removedValue = undefined;
    for (var i = 0; i < precedenceList.length; i++) {
      var precedence = precedenceList[i];
      if (precedence.subscriptionHandle === subscriptionHandle) {
        // The view's value can only change if this subscription is the one that
        // used to have precedence.
        if (i === 0) removedValue = precedence.value;
        precedenceList.splice(i, 1);
        break;
      }
    }
    if (precedenceList.length === 0) {
      self.dataByKey.delete(key);
      changeCollector[key] = undefined;
    } else if (removedValue !== undefined && !EJSON.equals(removedValue, precedenceList[0].value)) {
      changeCollector[key] = precedenceList[0].value;
    }
  },
  changeField: function (subscriptionHandle, key, value, changeCollector, isAdd) {
    var self = this;
    // Publish API ignores _id if present in fields
    if (key === "_id") return;

    // Don't share state with the data passed in by the user.
    value = EJSON.clone(value);
    if (!self.dataByKey.has(key)) {
      self.dataByKey.set(key, [{
        subscriptionHandle: subscriptionHandle,
        value: value
      }]);
      changeCollector[key] = value;
      return;
    }
    var precedenceList = self.dataByKey.get(key);
    var elt;
    if (!isAdd) {
      elt = precedenceList.find(function (precedence) {
        return precedence.subscriptionHandle === subscriptionHandle;
      });
    }
    if (elt) {
      if (elt === precedenceList[0] && !EJSON.equals(value, elt.value)) {
        // this subscription is changing the value of this field.
        changeCollector[key] = value;
      }
      elt.value = value;
    } else {
      // this subscription is newly caring about this field
      precedenceList.push({
        subscriptionHandle: subscriptionHandle,
        value: value
      });
    }
  }
});

/**
 * Represents a client's view of a single collection
 * @param {String} collectionName Name of the collection it represents
 * @param {Object.<String, Function>} sessionCallbacks The callbacks for added, changed, removed
 * @class SessionCollectionView
 */
var SessionCollectionView = function (collectionName, sessionCallbacks) {
  var self = this;
  self.collectionName = collectionName;
  self.documents = new Map();
  self.callbacks = sessionCallbacks;
};
DDPServer._SessionCollectionView = SessionCollectionView;
Object.assign(SessionCollectionView.prototype, {
  isEmpty: function () {
    var self = this;
    return self.documents.size === 0;
  },
  diff: function (previous) {
    var self = this;
    DiffSequence.diffMaps(previous.documents, self.documents, {
      both: _.bind(self.diffDocument, self),
      rightOnly: function (id, nowDV) {
        self.callbacks.added(self.collectionName, id, nowDV.getFields());
      },
      leftOnly: function (id, prevDV) {
        self.callbacks.removed(self.collectionName, id);
      }
    });
  },
  diffDocument: function (id, prevDV, nowDV) {
    var self = this;
    var fields = {};
    DiffSequence.diffObjects(prevDV.getFields(), nowDV.getFields(), {
      both: function (key, prev, now) {
        if (!EJSON.equals(prev, now)) fields[key] = now;
      },
      rightOnly: function (key, now) {
        fields[key] = now;
      },
      leftOnly: function (key, prev) {
        fields[key] = undefined;
      }
    });
    self.callbacks.changed(self.collectionName, id, fields);
  },
  added: function (subscriptionHandle, id, fields) {
    var self = this;
    var docView = self.documents.get(id);
    var added = false;
    if (!docView) {
      added = true;
      if (Meteor.server.getPublicationStrategy(this.collectionName).useDummyDocumentView) {
        docView = new DummyDocumentView();
      } else {
        docView = new SessionDocumentView();
      }
      self.documents.set(id, docView);
    }
    docView.existsIn.add(subscriptionHandle);
    var changeCollector = {};
    _.each(fields, function (value, key) {
      docView.changeField(subscriptionHandle, key, value, changeCollector, true);
    });
    if (added) self.callbacks.added(self.collectionName, id, changeCollector);else self.callbacks.changed(self.collectionName, id, changeCollector);
  },
  changed: function (subscriptionHandle, id, changed) {
    var self = this;
    var changedResult = {};
    var docView = self.documents.get(id);
    if (!docView) throw new Error("Could not find element with id " + id + " to change");
    _.each(changed, function (value, key) {
      if (value === undefined) docView.clearField(subscriptionHandle, key, changedResult);else docView.changeField(subscriptionHandle, key, value, changedResult);
    });
    self.callbacks.changed(self.collectionName, id, changedResult);
  },
  removed: function (subscriptionHandle, id) {
    var self = this;
    var docView = self.documents.get(id);
    if (!docView) {
      var err = new Error("Removed nonexistent document " + id);
      throw err;
    }
    docView.existsIn.delete(subscriptionHandle);
    if (docView.existsIn.size === 0) {
      // it is gone from everyone
      self.callbacks.removed(self.collectionName, id);
      self.documents.delete(id);
    } else {
      var changed = {};
      // remove this subscription from every precedence list
      // and record the changes
      docView.dataByKey.forEach(function (precedenceList, key) {
        docView.clearField(subscriptionHandle, key, changed);
      });
      self.callbacks.changed(self.collectionName, id, changed);
    }
  }
});

/******************************************************************************/
/* Session                                                                    */
/******************************************************************************/

var Session = function (server, version, socket, options) {
  var self = this;
  self.id = Random.id();
  self.server = server;
  self.version = version;
  self.initialized = false;
  self.socket = socket;

  // Set to null when the session is destroyed. Multiple places below
  // use this to determine if the session is alive or not.
  self.inQueue = new Meteor._DoubleEndedQueue();
  self.blocked = false;
  self.workerRunning = false;
  self.cachedUnblock = null;

  // Sub objects for active subscriptions
  self._namedSubs = new Map();
  self._universalSubs = [];
  self.userId = null;
  self.collectionViews = new Map();

  // Set this to false to not send messages when collectionViews are
  // modified. This is done when rerunning subs in _setUserId and those messages
  // are calculated via a diff instead.
  self._isSending = true;

  // If this is true, don't start a newly-created universal publisher on this
  // session. The session will take care of starting it when appropriate.
  self._dontStartNewUniversalSubs = false;

  // When we are rerunning subscriptions, any ready messages
  // we want to buffer up for when we are done rerunning subscriptions
  self._pendingReady = [];

  // List of callbacks to call when this connection is closed.
  self._closeCallbacks = [];

  // XXX HACK: If a sockjs connection, save off the URL. This is
  // temporary and will go away in the near future.
  self._socketUrl = socket.url;

  // Allow tests to disable responding to pings.
  self._respondToPings = options.respondToPings;

  // This object is the public interface to the session. In the public
  // API, it is called the `connection` object.  Internally we call it
  // a `connectionHandle` to avoid ambiguity.
  self.connectionHandle = {
    id: self.id,
    close: function () {
      self.close();
    },
    onClose: function (fn) {
      var cb = Meteor.bindEnvironment(fn, "connection onClose callback");
      if (self.inQueue) {
        self._closeCallbacks.push(cb);
      } else {
        // if we're already closed, call the callback.
        Meteor.defer(cb);
      }
    },
    clientAddress: self._clientAddress(),
    httpHeaders: self.socket.headers
  };
  self.send({
    msg: 'connected',
    session: self.id
  });

  // On initial connect, spin up all the universal publishers.
  Fiber(function () {
    self.startUniversalSubs();
  }).run();
  if (version !== 'pre1' && options.heartbeatInterval !== 0) {
    // We no longer need the low level timeout because we have heartbeats.
    socket.setWebsocketTimeout(0);
    self.heartbeat = new DDPCommon.Heartbeat({
      heartbeatInterval: options.heartbeatInterval,
      heartbeatTimeout: options.heartbeatTimeout,
      onTimeout: function () {
        self.close();
      },
      sendPing: function () {
        self.send({
          msg: 'ping'
        });
      }
    });
    self.heartbeat.start();
  }
  Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("livedata", "sessions", 1);
};
Object.assign(Session.prototype, {
  sendReady: function (subscriptionIds) {
    var self = this;
    if (self._isSending) self.send({
      msg: "ready",
      subs: subscriptionIds
    });else {
      _.each(subscriptionIds, function (subscriptionId) {
        self._pendingReady.push(subscriptionId);
      });
    }
  },
  _canSend(collectionName) {
    return this._isSending || !this.server.getPublicationStrategy(collectionName).useCollectionView;
  },
  sendAdded(collectionName, id, fields) {
    if (this._canSend(collectionName)) this.send({
      msg: "added",
      collection: collectionName,
      id,
      fields
    });
  },
  sendChanged(collectionName, id, fields) {
    if (_.isEmpty(fields)) return;
    if (this._canSend(collectionName)) {
      this.send({
        msg: "changed",
        collection: collectionName,
        id,
        fields
      });
    }
  },
  sendRemoved(collectionName, id) {
    if (this._canSend(collectionName)) this.send({
      msg: "removed",
      collection: collectionName,
      id
    });
  },
  getSendCallbacks: function () {
    var self = this;
    return {
      added: _.bind(self.sendAdded, self),
      changed: _.bind(self.sendChanged, self),
      removed: _.bind(self.sendRemoved, self)
    };
  },
  getCollectionView: function (collectionName) {
    var self = this;
    var ret = self.collectionViews.get(collectionName);
    if (!ret) {
      ret = new SessionCollectionView(collectionName, self.getSendCallbacks());
      self.collectionViews.set(collectionName, ret);
    }
    return ret;
  },
  added(subscriptionHandle, collectionName, id, fields) {
    if (this.server.getPublicationStrategy(collectionName).useCollectionView) {
      const view = this.getCollectionView(collectionName);
      view.added(subscriptionHandle, id, fields);
    } else {
      this.sendAdded(collectionName, id, fields);
    }
  },
  removed(subscriptionHandle, collectionName, id) {
    if (this.server.getPublicationStrategy(collectionName).useCollectionView) {
      const view = this.getCollectionView(collectionName);
      view.removed(subscriptionHandle, id);
      if (view.isEmpty()) {
        this.collectionViews.delete(collectionName);
      }
    } else {
      this.sendRemoved(collectionName, id);
    }
  },
  changed(subscriptionHandle, collectionName, id, fields) {
    if (this.server.getPublicationStrategy(collectionName).useCollectionView) {
      const view = this.getCollectionView(collectionName);
      view.changed(subscriptionHandle, id, fields);
    } else {
      this.sendChanged(collectionName, id, fields);
    }
  },
  startUniversalSubs: function () {
    var self = this;
    // Make a shallow copy of the set of universal handlers and start them. If
    // additional universal publishers start while we're running them (due to
    // yielding), they will run separately as part of Server.publish.
    var handlers = _.clone(self.server.universal_publish_handlers);
    _.each(handlers, function (handler) {
      self._startSubscription(handler);
    });
  },
  // Destroy this session and unregister it at the server.
  close: function () {
    var self = this;

    // Destroy this session, even if it's not registered at the
    // server. Stop all processing and tear everything down. If a socket
    // was attached, close it.

    // Already destroyed.
    if (!self.inQueue) return;

    // Drop the merge box data immediately.
    self.inQueue = null;
    self.collectionViews = new Map();
    if (self.heartbeat) {
      self.heartbeat.stop();
      self.heartbeat = null;
    }
    if (self.socket) {
      self.socket.close();
      self.socket._meteorSession = null;
    }
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("livedata", "sessions", -1);
    Meteor.defer(function () {
      // Stop callbacks can yield, so we defer this on close.
      // sub._isDeactivated() detects that we set inQueue to null and
      // treats it as semi-deactivated (it will ignore incoming callbacks, etc).
      self._deactivateAllSubscriptions();

      // Defer calling the close callbacks, so that the caller closing
      // the session isn't waiting for all the callbacks to complete.
      _.each(self._closeCallbacks, function (callback) {
        callback();
      });
    });

    // Unregister the session.
    self.server._removeSession(self);
  },
  // Send a message (doing nothing if no socket is connected right now).
  // It should be a JSON object (it will be stringified).
  send: function (msg) {
    var self = this;
    if (self.socket) {
      if (Meteor._printSentDDP) Meteor._debug("Sent DDP", DDPCommon.stringifyDDP(msg));
      self.socket.send(DDPCommon.stringifyDDP(msg));
    }
  },
  // Send a connection error.
  sendError: function (reason, offendingMessage) {
    var self = this;
    var msg = {
      msg: 'error',
      reason: reason
    };
    if (offendingMessage) msg.offendingMessage = offendingMessage;
    self.send(msg);
  },
  // Process 'msg' as an incoming message. As a guard against
  // race conditions during reconnection, ignore the message if
  // 'socket' is not the currently connected socket.
  //
  // We run the messages from the client one at a time, in the order
  // given by the client. The message handler is passed an idempotent
  // function 'unblock' which it may call to allow other messages to
  // begin running in parallel in another fiber (for example, a method
  // that wants to yield). Otherwise, it is automatically unblocked
  // when it returns.
  //
  // Actually, we don't have to 'totally order' the messages in this
  // way, but it's the easiest thing that's correct. (unsub needs to
  // be ordered against sub, methods need to be ordered against each
  // other).
  processMessage: function (msg_in) {
    var self = this;
    if (!self.inQueue)
      // we have been destroyed.
      return;

    // Respond to ping and pong messages immediately without queuing.
    // If the negotiated DDP version is "pre1" which didn't support
    // pings, preserve the "pre1" behavior of responding with a "bad
    // request" for the unknown messages.
    //
    // Fibers are needed because heartbeats use Meteor.setTimeout, which
    // needs a Fiber. We could actually use regular setTimeout and avoid
    // these new fibers, but it is easier to just make everything use
    // Meteor.setTimeout and not think too hard.
    //
    // Any message counts as receiving a pong, as it demonstrates that
    // the client is still alive.
    if (self.heartbeat) {
      Fiber(function () {
        self.heartbeat.messageReceived();
      }).run();
    }
    if (self.version !== 'pre1' && msg_in.msg === 'ping') {
      if (self._respondToPings) self.send({
        msg: "pong",
        id: msg_in.id
      });
      return;
    }
    if (self.version !== 'pre1' && msg_in.msg === 'pong') {
      // Since everything is a pong, there is nothing to do
      return;
    }
    self.inQueue.push(msg_in);
    if (self.workerRunning) return;
    self.workerRunning = true;
    var processNext = function () {
      var msg = self.inQueue && self.inQueue.shift();
      if (!msg) {
        self.workerRunning = false;
        return;
      }
      Fiber(function () {
        var blocked = true;
        var unblock = function () {
          if (!blocked) return; // idempotent
          blocked = false;
          processNext();
        };
        self.server.onMessageHook.each(function (callback) {
          callback(msg, self);
          return true;
        });
        if (_.has(self.protocol_handlers, msg.msg)) self.protocol_handlers[msg.msg].call(self, msg, unblock);else self.sendError('Bad request', msg);
        unblock(); // in case the handler didn't already do it
      }).run();
    };
    processNext();
  },
  protocol_handlers: {
    sub: function (msg, unblock) {
      var self = this;

      // cacheUnblock temporarly, so we can capture it later
      // we will use unblock in current eventLoop, so this is safe
      self.cachedUnblock = unblock;

      // reject malformed messages
      if (typeof msg.id !== "string" || typeof msg.name !== "string" || 'params' in msg && !(msg.params instanceof Array)) {
        self.sendError("Malformed subscription", msg);
        return;
      }
      if (!self.server.publish_handlers[msg.name]) {
        self.send({
          msg: 'nosub',
          id: msg.id,
          error: new Meteor.Error(404, "Subscription '".concat(msg.name, "' not found"))
        });
        return;
      }
      if (self._namedSubs.has(msg.id))
        // subs are idempotent, or rather, they are ignored if a sub
        // with that id already exists. this is important during
        // reconnect.
        return;

      // XXX It'd be much better if we had generic hooks where any package can
      // hook into subscription handling, but in the mean while we special case
      // ddp-rate-limiter package. This is also done for weak requirements to
      // add the ddp-rate-limiter package in case we don't have Accounts. A
      // user trying to use the ddp-rate-limiter must explicitly require it.
      if (Package['ddp-rate-limiter']) {
        var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
        var rateLimiterInput = {
          userId: self.userId,
          clientAddress: self.connectionHandle.clientAddress,
          type: "subscription",
          name: msg.name,
          connectionId: self.id
        };
        DDPRateLimiter._increment(rateLimiterInput);
        var rateLimitResult = DDPRateLimiter._check(rateLimiterInput);
        if (!rateLimitResult.allowed) {
          self.send({
            msg: 'nosub',
            id: msg.id,
            error: new Meteor.Error('too-many-requests', DDPRateLimiter.getErrorMessage(rateLimitResult), {
              timeToReset: rateLimitResult.timeToReset
            })
          });
          return;
        }
      }
      var handler = self.server.publish_handlers[msg.name];
      self._startSubscription(handler, msg.id, msg.params, msg.name);

      // cleaning cached unblock
      self.cachedUnblock = null;
    },
    unsub: function (msg) {
      var self = this;
      self._stopSubscription(msg.id);
    },
    method: function (msg, unblock) {
      var self = this;

      // Reject malformed messages.
      // For now, we silently ignore unknown attributes,
      // for forwards compatibility.
      if (typeof msg.id !== "string" || typeof msg.method !== "string" || 'params' in msg && !(msg.params instanceof Array) || 'randomSeed' in msg && typeof msg.randomSeed !== "string") {
        self.sendError("Malformed method invocation", msg);
        return;
      }
      var randomSeed = msg.randomSeed || null;

      // Set up to mark the method as satisfied once all observers
      // (and subscriptions) have reacted to any writes that were
      // done.
      var fence = new DDPServer._WriteFence();
      fence.onAllCommitted(function () {
        // Retire the fence so that future writes are allowed.
        // This means that callbacks like timers are free to use
        // the fence, and if they fire before it's armed (for
        // example, because the method waits for them) their
        // writes will be included in the fence.
        fence.retire();
        self.send({
          msg: 'updated',
          methods: [msg.id]
        });
      });

      // Find the handler
      var handler = self.server.method_handlers[msg.method];
      if (!handler) {
        self.send({
          msg: 'result',
          id: msg.id,
          error: new Meteor.Error(404, "Method '".concat(msg.method, "' not found"))
        });
        fence.arm();
        return;
      }
      var setUserId = function (userId) {
        self._setUserId(userId);
      };
      var invocation = new DDPCommon.MethodInvocation({
        name: msg.method,
        isSimulation: false,
        userId: self.userId,
        setUserId: setUserId,
        unblock: unblock,
        connection: self.connectionHandle,
        randomSeed: randomSeed
      });
      const promise = new Promise((resolve, reject) => {
        // XXX It'd be better if we could hook into method handlers better but
        // for now, we need to check if the ddp-rate-limiter exists since we
        // have a weak requirement for the ddp-rate-limiter package to be added
        // to our application.
        if (Package['ddp-rate-limiter']) {
          var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
          var rateLimiterInput = {
            userId: self.userId,
            clientAddress: self.connectionHandle.clientAddress,
            type: "method",
            name: msg.method,
            connectionId: self.id
          };
          DDPRateLimiter._increment(rateLimiterInput);
          var rateLimitResult = DDPRateLimiter._check(rateLimiterInput);
          if (!rateLimitResult.allowed) {
            reject(new Meteor.Error("too-many-requests", DDPRateLimiter.getErrorMessage(rateLimitResult), {
              timeToReset: rateLimitResult.timeToReset
            }));
            return;
          }
        }
        const getCurrentMethodInvocationResult = () => {
          const currentContext = DDP._CurrentMethodInvocation._setNewContextAndGetCurrent(invocation);
          try {
            let result;
            const resultOrThenable = maybeAuditArgumentChecks(handler, invocation, msg.params, "call to '" + msg.method + "'");
            const isThenable = resultOrThenable && typeof resultOrThenable.then === 'function';
            if (isThenable) {
              result = Promise.await(resultOrThenable);
            } else {
              result = resultOrThenable;
            }
            return result;
          } finally {
            DDP._CurrentMethodInvocation._set(currentContext);
          }
        };
        resolve(DDPServer._CurrentWriteFence.withValue(fence, getCurrentMethodInvocationResult));
      });
      function finish() {
        fence.arm();
        unblock();
      }
      const payload = {
        msg: "result",
        id: msg.id
      };
      promise.then(result => {
        finish();
        if (result !== undefined) {
          payload.result = result;
        }
        self.send(payload);
      }, exception => {
        finish();
        payload.error = wrapInternalException(exception, "while invoking method '".concat(msg.method, "'"));
        self.send(payload);
      });
    }
  },
  _eachSub: function (f) {
    var self = this;
    self._namedSubs.forEach(f);
    self._universalSubs.forEach(f);
  },
  _diffCollectionViews: function (beforeCVs) {
    var self = this;
    DiffSequence.diffMaps(beforeCVs, self.collectionViews, {
      both: function (collectionName, leftValue, rightValue) {
        rightValue.diff(leftValue);
      },
      rightOnly: function (collectionName, rightValue) {
        rightValue.documents.forEach(function (docView, id) {
          self.sendAdded(collectionName, id, docView.getFields());
        });
      },
      leftOnly: function (collectionName, leftValue) {
        leftValue.documents.forEach(function (doc, id) {
          self.sendRemoved(collectionName, id);
        });
      }
    });
  },
  // Sets the current user id in all appropriate contexts and reruns
  // all subscriptions
  _setUserId: function (userId) {
    var self = this;
    if (userId !== null && typeof userId !== "string") throw new Error("setUserId must be called on string or null, not " + typeof userId);

    // Prevent newly-created universal subscriptions from being added to our
    // session. They will be found below when we call startUniversalSubs.
    //
    // (We don't have to worry about named subscriptions, because we only add
    // them when we process a 'sub' message. We are currently processing a
    // 'method' message, and the method did not unblock, because it is illegal
    // to call setUserId after unblock. Thus we cannot be concurrently adding a
    // new named subscription).
    self._dontStartNewUniversalSubs = true;

    // Prevent current subs from updating our collectionViews and call their
    // stop callbacks. This may yield.
    self._eachSub(function (sub) {
      sub._deactivate();
    });

    // All subs should now be deactivated. Stop sending messages to the client,
    // save the state of the published collections, reset to an empty view, and
    // update the userId.
    self._isSending = false;
    var beforeCVs = self.collectionViews;
    self.collectionViews = new Map();
    self.userId = userId;

    // _setUserId is normally called from a Meteor method with
    // DDP._CurrentMethodInvocation set. But DDP._CurrentMethodInvocation is not
    // expected to be set inside a publish function, so we temporary unset it.
    // Inside a publish function DDP._CurrentPublicationInvocation is set.
    DDP._CurrentMethodInvocation.withValue(undefined, function () {
      // Save the old named subs, and reset to having no subscriptions.
      var oldNamedSubs = self._namedSubs;
      self._namedSubs = new Map();
      self._universalSubs = [];
      oldNamedSubs.forEach(function (sub, subscriptionId) {
        var newSub = sub._recreate();
        self._namedSubs.set(subscriptionId, newSub);
        // nb: if the handler throws or calls this.error(), it will in fact
        // immediately send its 'nosub'. This is OK, though.
        newSub._runHandler();
      });

      // Allow newly-created universal subs to be started on our connection in
      // parallel with the ones we're spinning up here, and spin up universal
      // subs.
      self._dontStartNewUniversalSubs = false;
      self.startUniversalSubs();
    });

    // Start sending messages again, beginning with the diff from the previous
    // state of the world to the current state. No yields are allowed during
    // this diff, so that other changes cannot interleave.
    Meteor._noYieldsAllowed(function () {
      self._isSending = true;
      self._diffCollectionViews(beforeCVs);
      if (!_.isEmpty(self._pendingReady)) {
        self.sendReady(self._pendingReady);
        self._pendingReady = [];
      }
    });
  },
  _startSubscription: function (handler, subId, params, name) {
    var self = this;
    var sub = new Subscription(self, handler, subId, params, name);
    let unblockHander = self.cachedUnblock;
    // _startSubscription may call from a lot places
    // so cachedUnblock might be null in somecases
    // assign the cachedUnblock
    sub.unblock = unblockHander || (() => {});
    if (subId) self._namedSubs.set(subId, sub);else self._universalSubs.push(sub);
    sub._runHandler();
  },
  // Tear down specified subscription
  _stopSubscription: function (subId, error) {
    var self = this;
    var subName = null;
    if (subId) {
      var maybeSub = self._namedSubs.get(subId);
      if (maybeSub) {
        subName = maybeSub._name;
        maybeSub._removeAllDocuments();
        maybeSub._deactivate();
        self._namedSubs.delete(subId);
      }
    }
    var response = {
      msg: 'nosub',
      id: subId
    };
    if (error) {
      response.error = wrapInternalException(error, subName ? "from sub " + subName + " id " + subId : "from sub id " + subId);
    }
    self.send(response);
  },
  // Tear down all subscriptions. Note that this does NOT send removed or nosub
  // messages, since we assume the client is gone.
  _deactivateAllSubscriptions: function () {
    var self = this;
    self._namedSubs.forEach(function (sub, id) {
      sub._deactivate();
    });
    self._namedSubs = new Map();
    self._universalSubs.forEach(function (sub) {
      sub._deactivate();
    });
    self._universalSubs = [];
  },
  // Determine the remote client's IP address, based on the
  // HTTP_FORWARDED_COUNT environment variable representing how many
  // proxies the server is behind.
  _clientAddress: function () {
    var self = this;

    // For the reported client address for a connection to be correct,
    // the developer must set the HTTP_FORWARDED_COUNT environment
    // variable to an integer representing the number of hops they
    // expect in the `x-forwarded-for` header. E.g., set to "1" if the
    // server is behind one proxy.
    //
    // This could be computed once at startup instead of every time.
    var httpForwardedCount = parseInt(process.env['HTTP_FORWARDED_COUNT']) || 0;
    if (httpForwardedCount === 0) return self.socket.remoteAddress;
    var forwardedFor = self.socket.headers["x-forwarded-for"];
    if (!_.isString(forwardedFor)) return null;
    forwardedFor = forwardedFor.trim().split(/\s*,\s*/);

    // Typically the first value in the `x-forwarded-for` header is
    // the original IP address of the client connecting to the first
    // proxy.  However, the end user can easily spoof the header, in
    // which case the first value(s) will be the fake IP address from
    // the user pretending to be a proxy reporting the original IP
    // address value.  By counting HTTP_FORWARDED_COUNT back from the
    // end of the list, we ensure that we get the IP address being
    // reported by *our* first proxy.

    if (httpForwardedCount < 0 || httpForwardedCount > forwardedFor.length) return null;
    return forwardedFor[forwardedFor.length - httpForwardedCount];
  }
});

/******************************************************************************/
/* Subscription                                                               */
/******************************************************************************/

// Ctor for a sub handle: the input to each publish function

// Instance name is this because it's usually referred to as this inside a
// publish
/**
 * @summary The server's side of a subscription
 * @class Subscription
 * @instanceName this
 * @showInstanceName true
 */
var Subscription = function (session, handler, subscriptionId, params, name) {
  var self = this;
  self._session = session; // type is Session

  /**
   * @summary Access inside the publish function. The incoming [connection](#meteor_onconnection) for this subscription.
   * @locus Server
   * @name  connection
   * @memberOf Subscription
   * @instance
   */
  self.connection = session.connectionHandle; // public API object

  self._handler = handler;

  // My subscription ID (generated by client, undefined for universal subs).
  self._subscriptionId = subscriptionId;
  // Undefined for universal subs
  self._name = name;
  self._params = params || [];

  // Only named subscriptions have IDs, but we need some sort of string
  // internally to keep track of all subscriptions inside
  // SessionDocumentViews. We use this subscriptionHandle for that.
  if (self._subscriptionId) {
    self._subscriptionHandle = 'N' + self._subscriptionId;
  } else {
    self._subscriptionHandle = 'U' + Random.id();
  }

  // Has _deactivate been called?
  self._deactivated = false;

  // Stop callbacks to g/c this sub.  called w/ zero arguments.
  self._stopCallbacks = [];

  // The set of (collection, documentid) that this subscription has
  // an opinion about.
  self._documents = new Map();

  // Remember if we are ready.
  self._ready = false;

  // Part of the public API: the user of this sub.

  /**
   * @summary Access inside the publish function. The id of the logged-in user, or `null` if no user is logged in.
   * @locus Server
   * @memberOf Subscription
   * @name  userId
   * @instance
   */
  self.userId = session.userId;

  // For now, the id filter is going to default to
  // the to/from DDP methods on MongoID, to
  // specifically deal with mongo/minimongo ObjectIds.

  // Later, you will be able to make this be "raw"
  // if you want to publish a collection that you know
  // just has strings for keys and no funny business, to
  // a DDP consumer that isn't minimongo.

  self._idFilter = {
    idStringify: MongoID.idStringify,
    idParse: MongoID.idParse
  };
  Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("livedata", "subscriptions", 1);
};
Object.assign(Subscription.prototype, {
  _runHandler: function () {
    // XXX should we unblock() here? Either before running the publish
    // function, or before running _publishCursor.
    //
    // Right now, each publish function blocks all future publishes and
    // methods waiting on data from Mongo (or whatever else the function
    // blocks on). This probably slows page load in common cases.

    if (!this.unblock) {
      this.unblock = () => {};
    }
    const self = this;
    let resultOrThenable = null;
    try {
      resultOrThenable = DDP._CurrentPublicationInvocation.withValue(self, () => maybeAuditArgumentChecks(self._handler, self, EJSON.clone(self._params),
      // It's OK that this would look weird for universal subscriptions,
      // because they have no arguments so there can never be an
      // audit-argument-checks failure.
      "publisher '" + self._name + "'"));
    } catch (e) {
      self.error(e);
      return;
    }

    // Did the handler call this.error or this.stop?
    if (self._isDeactivated()) return;

    // Both conventional and async publish handler functions are supported.
    // If an object is returned with a then() function, it is either a promise
    // or thenable and will be resolved asynchronously.
    const isThenable = resultOrThenable && typeof resultOrThenable.then === 'function';
    if (isThenable) {
      Promise.resolve(resultOrThenable).then(function () {
        return self._publishHandlerResult.bind(self)(...arguments);
      }, e => self.error(e));
    } else {
      self._publishHandlerResult(resultOrThenable);
    }
  },
  _publishHandlerResult: function (res) {
    // SPECIAL CASE: Instead of writing their own callbacks that invoke
    // this.added/changed/ready/etc, the user can just return a collection
    // cursor or array of cursors from the publish function; we call their
    // _publishCursor method which starts observing the cursor and publishes the
    // results. Note that _publishCursor does NOT call ready().
    //
    // XXX This uses an undocumented interface which only the Mongo cursor
    // interface publishes. Should we make this interface public and encourage
    // users to implement it themselves? Arguably, it's unnecessary; users can
    // already write their own functions like
    //   var publishMyReactiveThingy = function (name, handler) {
    //     Meteor.publish(name, function () {
    //       var reactiveThingy = handler();
    //       reactiveThingy.publishMe();
    //     });
    //   };

    var self = this;
    var isCursor = function (c) {
      return c && c._publishCursor;
    };
    if (isCursor(res)) {
      try {
        res._publishCursor(self);
      } catch (e) {
        self.error(e);
        return;
      }
      // _publishCursor only returns after the initial added callbacks have run.
      // mark subscription as ready.
      self.ready();
    } else if (_.isArray(res)) {
      // Check all the elements are cursors
      if (!_.all(res, isCursor)) {
        self.error(new Error("Publish function returned an array of non-Cursors"));
        return;
      }
      // Find duplicate collection names
      // XXX we should support overlapping cursors, but that would require the
      // merge box to allow overlap within a subscription
      var collectionNames = {};
      for (var i = 0; i < res.length; ++i) {
        var collectionName = res[i]._getCollectionName();
        if (_.has(collectionNames, collectionName)) {
          self.error(new Error("Publish function returned multiple cursors for collection " + collectionName));
          return;
        }
        collectionNames[collectionName] = true;
      }
      ;
      try {
        _.each(res, function (cur) {
          cur._publishCursor(self);
        });
      } catch (e) {
        self.error(e);
        return;
      }
      self.ready();
    } else if (res) {
      // Truthy values other than cursors or arrays are probably a
      // user mistake (possible returning a Mongo document via, say,
      // `coll.findOne()`).
      self.error(new Error("Publish function can only return a Cursor or " + "an array of Cursors"));
    }
  },
  // This calls all stop callbacks and prevents the handler from updating any
  // SessionCollectionViews further. It's used when the user unsubscribes or
  // disconnects, as well as during setUserId re-runs. It does *NOT* send
  // removed messages for the published objects; if that is necessary, call
  // _removeAllDocuments first.
  _deactivate: function () {
    var self = this;
    if (self._deactivated) return;
    self._deactivated = true;
    self._callStopCallbacks();
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("livedata", "subscriptions", -1);
  },
  _callStopCallbacks: function () {
    var self = this;
    // Tell listeners, so they can clean up
    var callbacks = self._stopCallbacks;
    self._stopCallbacks = [];
    _.each(callbacks, function (callback) {
      callback();
    });
  },
  // Send remove messages for every document.
  _removeAllDocuments: function () {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._documents.forEach(function (collectionDocs, collectionName) {
        collectionDocs.forEach(function (strId) {
          self.removed(collectionName, self._idFilter.idParse(strId));
        });
      });
    });
  },
  // Returns a new Subscription for the same session with the same
  // initial creation parameters. This isn't a clone: it doesn't have
  // the same _documents cache, stopped state or callbacks; may have a
  // different _subscriptionHandle, and gets its userId from the
  // session, not from this object.
  _recreate: function () {
    var self = this;
    return new Subscription(self._session, self._handler, self._subscriptionId, self._params, self._name);
  },
  /**
   * @summary Call inside the publish function.  Stops this client's subscription, triggering a call on the client to the `onStop` callback passed to [`Meteor.subscribe`](#meteor_subscribe), if any. If `error` is not a [`Meteor.Error`](#meteor_error), it will be [sanitized](#meteor_error).
   * @locus Server
   * @param {Error} error The error to pass to the client.
   * @instance
   * @memberOf Subscription
   */
  error: function (error) {
    var self = this;
    if (self._isDeactivated()) return;
    self._session._stopSubscription(self._subscriptionId, error);
  },
  // Note that while our DDP client will notice that you've called stop() on the
  // server (and clean up its _subscriptions table) we don't actually provide a
  // mechanism for an app to notice this (the subscribe onError callback only
  // triggers if there is an error).

  /**
   * @summary Call inside the publish function.  Stops this client's subscription and invokes the client's `onStop` callback with no error.
   * @locus Server
   * @instance
   * @memberOf Subscription
   */
  stop: function () {
    var self = this;
    if (self._isDeactivated()) return;
    self._session._stopSubscription(self._subscriptionId);
  },
  /**
   * @summary Call inside the publish function.  Registers a callback function to run when the subscription is stopped.
   * @locus Server
   * @memberOf Subscription
   * @instance
   * @param {Function} func The callback function
   */
  onStop: function (callback) {
    var self = this;
    callback = Meteor.bindEnvironment(callback, 'onStop callback', self);
    if (self._isDeactivated()) callback();else self._stopCallbacks.push(callback);
  },
  // This returns true if the sub has been deactivated, *OR* if the session was
  // destroyed but the deferred call to _deactivateAllSubscriptions hasn't
  // happened yet.
  _isDeactivated: function () {
    var self = this;
    return self._deactivated || self._session.inQueue === null;
  },
  /**
   * @summary Call inside the publish function.  Informs the subscriber that a document has been added to the record set.
   * @locus Server
   * @memberOf Subscription
   * @instance
   * @param {String} collection The name of the collection that contains the new document.
   * @param {String} id The new document's ID.
   * @param {Object} fields The fields in the new document.  If `_id` is present it is ignored.
   */
  added(collectionName, id, fields) {
    if (this._isDeactivated()) return;
    id = this._idFilter.idStringify(id);
    if (this._session.server.getPublicationStrategy(collectionName).doAccountingForCollection) {
      let ids = this._documents.get(collectionName);
      if (ids == null) {
        ids = new Set();
        this._documents.set(collectionName, ids);
      }
      ids.add(id);
    }
    this._session.added(this._subscriptionHandle, collectionName, id, fields);
  },
  /**
   * @summary Call inside the publish function.  Informs the subscriber that a document in the record set has been modified.
   * @locus Server
   * @memberOf Subscription
   * @instance
   * @param {String} collection The name of the collection that contains the changed document.
   * @param {String} id The changed document's ID.
   * @param {Object} fields The fields in the document that have changed, together with their new values.  If a field is not present in `fields` it was left unchanged; if it is present in `fields` and has a value of `undefined` it was removed from the document.  If `_id` is present it is ignored.
   */
  changed(collectionName, id, fields) {
    if (this._isDeactivated()) return;
    id = this._idFilter.idStringify(id);
    this._session.changed(this._subscriptionHandle, collectionName, id, fields);
  },
  /**
   * @summary Call inside the publish function.  Informs the subscriber that a document has been removed from the record set.
   * @locus Server
   * @memberOf Subscription
   * @instance
   * @param {String} collection The name of the collection that the document has been removed from.
   * @param {String} id The ID of the document that has been removed.
   */
  removed(collectionName, id) {
    if (this._isDeactivated()) return;
    id = this._idFilter.idStringify(id);
    if (this._session.server.getPublicationStrategy(collectionName).doAccountingForCollection) {
      // We don't bother to delete sets of things in a collection if the
      // collection is empty.  It could break _removeAllDocuments.
      this._documents.get(collectionName).delete(id);
    }
    this._session.removed(this._subscriptionHandle, collectionName, id);
  },
  /**
   * @summary Call inside the publish function.  Informs the subscriber that an initial, complete snapshot of the record set has been sent.  This will trigger a call on the client to the `onReady` callback passed to  [`Meteor.subscribe`](#meteor_subscribe), if any.
   * @locus Server
   * @memberOf Subscription
   * @instance
   */
  ready: function () {
    var self = this;
    if (self._isDeactivated()) return;
    if (!self._subscriptionId) return; // Unnecessary but ignored for universal sub
    if (!self._ready) {
      self._session.sendReady([self._subscriptionId]);
      self._ready = true;
    }
  }
});

/******************************************************************************/
/* Server                                                                     */
/******************************************************************************/

Server = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var self = this;

  // The default heartbeat interval is 30 seconds on the server and 35
  // seconds on the client.  Since the client doesn't need to send a
  // ping as long as it is receiving pings, this means that pings
  // normally go from the server to the client.
  //
  // Note: Troposphere depends on the ability to mutate
  // Meteor.server.options.heartbeatTimeout! This is a hack, but it's life.
  self.options = _objectSpread({
    heartbeatInterval: 15000,
    heartbeatTimeout: 15000,
    // For testing, allow responding to pings to be disabled.
    respondToPings: true,
    defaultPublicationStrategy: publicationStrategies.SERVER_MERGE
  }, options);

  // Map of callbacks to call when a new connection comes in to the
  // server and completes DDP version negotiation. Use an object instead
  // of an array so we can safely remove one from the list while
  // iterating over it.
  self.onConnectionHook = new Hook({
    debugPrintExceptions: "onConnection callback"
  });

  // Map of callbacks to call when a new message comes in.
  self.onMessageHook = new Hook({
    debugPrintExceptions: "onMessage callback"
  });
  self.publish_handlers = {};
  self.universal_publish_handlers = [];
  self.method_handlers = {};
  self._publicationStrategies = {};
  self.sessions = new Map(); // map from id to session

  self.stream_server = new StreamServer();
  self.stream_server.register(function (socket) {
    // socket implements the SockJSConnection interface
    socket._meteorSession = null;
    var sendError = function (reason, offendingMessage) {
      var msg = {
        msg: 'error',
        reason: reason
      };
      if (offendingMessage) msg.offendingMessage = offendingMessage;
      socket.send(DDPCommon.stringifyDDP(msg));
    };
    socket.on('data', function (raw_msg) {
      if (Meteor._printReceivedDDP) {
        Meteor._debug("Received DDP", raw_msg);
      }
      try {
        try {
          var msg = DDPCommon.parseDDP(raw_msg);
        } catch (err) {
          sendError('Parse error');
          return;
        }
        if (msg === null || !msg.msg) {
          sendError('Bad request', msg);
          return;
        }
        if (msg.msg === 'connect') {
          if (socket._meteorSession) {
            sendError("Already connected", msg);
            return;
          }
          Fiber(function () {
            self._handleConnect(socket, msg);
          }).run();
          return;
        }
        if (!socket._meteorSession) {
          sendError('Must connect first', msg);
          return;
        }
        socket._meteorSession.processMessage(msg);
      } catch (e) {
        // XXX print stack nicely
        Meteor._debug("Internal exception while processing message", msg, e);
      }
    });
    socket.on('close', function () {
      if (socket._meteorSession) {
        Fiber(function () {
          socket._meteorSession.close();
        }).run();
      }
    });
  });
};
Object.assign(Server.prototype, {
  /**
   * @summary Register a callback to be called when a new DDP connection is made to the server.
   * @locus Server
   * @param {function} callback The function to call when a new DDP connection is established.
   * @memberOf Meteor
   * @importFromPackage meteor
   */
  onConnection: function (fn) {
    var self = this;
    return self.onConnectionHook.register(fn);
  },
  /**
   * @summary Set publication strategy for the given collection. Publications strategies are available from `DDPServer.publicationStrategies`. You call this method from `Meteor.server`, like `Meteor.server.setPublicationStrategy()`
   * @locus Server
   * @alias setPublicationStrategy
   * @param collectionName {String}
   * @param strategy {{useCollectionView: boolean, doAccountingForCollection: boolean}}
   * @memberOf Meteor.server
   * @importFromPackage meteor
   */
  setPublicationStrategy(collectionName, strategy) {
    if (!Object.values(publicationStrategies).includes(strategy)) {
      throw new Error("Invalid merge strategy: ".concat(strategy, " \n        for collection ").concat(collectionName));
    }
    this._publicationStrategies[collectionName] = strategy;
  },
  /**
   * @summary Gets the publication strategy for the requested collection. You call this method from `Meteor.server`, like `Meteor.server.getPublicationStrategy()`
   * @locus Server
   * @alias getPublicationStrategy
   * @param collectionName {String}
   * @memberOf Meteor.server
   * @importFromPackage meteor
   * @return {{useCollectionView: boolean, doAccountingForCollection: boolean}}
   */
  getPublicationStrategy(collectionName) {
    return this._publicationStrategies[collectionName] || this.options.defaultPublicationStrategy;
  },
  /**
   * @summary Register a callback to be called when a new DDP message is received.
   * @locus Server
   * @param {function} callback The function to call when a new DDP message is received.
   * @memberOf Meteor
   * @importFromPackage meteor
   */
  onMessage: function (fn) {
    var self = this;
    return self.onMessageHook.register(fn);
  },
  _handleConnect: function (socket, msg) {
    var self = this;

    // The connect message must specify a version and an array of supported
    // versions, and it must claim to support what it is proposing.
    if (!(typeof msg.version === 'string' && _.isArray(msg.support) && _.all(msg.support, _.isString) && _.contains(msg.support, msg.version))) {
      socket.send(DDPCommon.stringifyDDP({
        msg: 'failed',
        version: DDPCommon.SUPPORTED_DDP_VERSIONS[0]
      }));
      socket.close();
      return;
    }

    // In the future, handle session resumption: something like:
    //  socket._meteorSession = self.sessions[msg.session]
    var version = calculateVersion(msg.support, DDPCommon.SUPPORTED_DDP_VERSIONS);
    if (msg.version !== version) {
      // The best version to use (according to the client's stated preferences)
      // is not the one the client is trying to use. Inform them about the best
      // version to use.
      socket.send(DDPCommon.stringifyDDP({
        msg: 'failed',
        version: version
      }));
      socket.close();
      return;
    }

    // Yay, version matches! Create a new session.
    // Note: Troposphere depends on the ability to mutate
    // Meteor.server.options.heartbeatTimeout! This is a hack, but it's life.
    socket._meteorSession = new Session(self, version, socket, self.options);
    self.sessions.set(socket._meteorSession.id, socket._meteorSession);
    self.onConnectionHook.each(function (callback) {
      if (socket._meteorSession) callback(socket._meteorSession.connectionHandle);
      return true;
    });
  },
  /**
   * Register a publish handler function.
   *
   * @param name {String} identifier for query
   * @param handler {Function} publish handler
   * @param options {Object}
   *
   * Server will call handler function on each new subscription,
   * either when receiving DDP sub message for a named subscription, or on
   * DDP connect for a universal subscription.
   *
   * If name is null, this will be a subscription that is
   * automatically established and permanently on for all connected
   * client, instead of a subscription that can be turned on and off
   * with subscribe().
   *
   * options to contain:
   *  - (mostly internal) is_auto: true if generated automatically
   *    from an autopublish hook. this is for cosmetic purposes only
   *    (it lets us determine whether to print a warning suggesting
   *    that you turn off autopublish).
   */

  /**
   * @summary Publish a record set.
   * @memberOf Meteor
   * @importFromPackage meteor
   * @locus Server
   * @param {String|Object} name If String, name of the record set.  If Object, publications Dictionary of publish functions by name.  If `null`, the set has no name, and the record set is automatically sent to all connected clients.
   * @param {Function} func Function called on the server each time a client subscribes.  Inside the function, `this` is the publish handler object, described below.  If the client passed arguments to `subscribe`, the function is called with the same arguments.
   */
  publish: function (name, handler, options) {
    var self = this;
    if (!_.isObject(name)) {
      options = options || {};
      if (name && name in self.publish_handlers) {
        Meteor._debug("Ignoring duplicate publish named '" + name + "'");
        return;
      }
      if (Package.autopublish && !options.is_auto) {
        // They have autopublish on, yet they're trying to manually
        // pick stuff to publish. They probably should turn off
        // autopublish. (This check isn't perfect -- if you create a
        // publish before you turn on autopublish, it won't catch
        // it, but this will definitely handle the simple case where
        // you've added the autopublish package to your app, and are
        // calling publish from your app code).
        if (!self.warned_about_autopublish) {
          self.warned_about_autopublish = true;
          Meteor._debug("** You've set up some data subscriptions with Meteor.publish(), but\n" + "** you still have autopublish turned on. Because autopublish is still\n" + "** on, your Meteor.publish() calls won't have much effect. All data\n" + "** will still be sent to all clients.\n" + "**\n" + "** Turn off autopublish by removing the autopublish package:\n" + "**\n" + "**   $ meteor remove autopublish\n" + "**\n" + "** .. and make sure you have Meteor.publish() and Meteor.subscribe() calls\n" + "** for each collection that you want clients to see.\n");
        }
      }
      if (name) self.publish_handlers[name] = handler;else {
        self.universal_publish_handlers.push(handler);
        // Spin up the new publisher on any existing session too. Run each
        // session's subscription in a new Fiber, so that there's no change for
        // self.sessions to change while we're running this loop.
        self.sessions.forEach(function (session) {
          if (!session._dontStartNewUniversalSubs) {
            Fiber(function () {
              session._startSubscription(handler);
            }).run();
          }
        });
      }
    } else {
      _.each(name, function (value, key) {
        self.publish(key, value, {});
      });
    }
  },
  _removeSession: function (session) {
    var self = this;
    self.sessions.delete(session.id);
  },
  /**
   * @summary Defines functions that can be invoked over the network by clients.
   * @locus Anywhere
   * @param {Object} methods Dictionary whose keys are method names and values are functions.
   * @memberOf Meteor
   * @importFromPackage meteor
   */
  methods: function (methods) {
    var self = this;
    _.each(methods, function (func, name) {
      if (typeof func !== 'function') throw new Error("Method '" + name + "' must be a function");
      if (self.method_handlers[name]) throw new Error("A method named '" + name + "' is already defined");
      self.method_handlers[name] = func;
    });
  },
  call: function (name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length && typeof args[args.length - 1] === "function") {
      // If it's a function, the last argument is the result callback, not
      // a parameter to the remote method.
      var callback = args.pop();
    }
    return this.apply(name, args, callback);
  },
  // A version of the call method that always returns a Promise.
  callAsync: function (name) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return this.applyAsync(name, args);
  },
  apply: function (name, args, options, callback) {
    // We were passed 3 arguments. They may be either (name, args, options)
    // or (name, args, callback)
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    } else {
      options = options || {};
    }
    const promise = this.applyAsync(name, args, options);

    // Return the result in whichever way the caller asked for it. Note that we
    // do NOT block on the write fence in an analogous way to how the client
    // blocks on the relevant data being visible, so you are NOT guaranteed that
    // cursor observe callbacks have fired when your callback is invoked. (We
    // can change this if there's a real use case).
    if (callback) {
      promise.then(result => callback(undefined, result), exception => callback(exception));
    } else {
      return promise.await();
    }
  },
  // @param options {Optional Object}
  applyAsync: function (name, args, options) {
    // Run the handler
    var handler = this.method_handlers[name];
    if (!handler) {
      return Promise.reject(new Meteor.Error(404, "Method '".concat(name, "' not found")));
    }

    // If this is a method call from within another method or publish function,
    // get the user state from the outer method or publish function, otherwise
    // don't allow setUserId to be called
    var userId = null;
    var setUserId = function () {
      throw new Error("Can't call setUserId on a server initiated method call");
    };
    var connection = null;
    var currentMethodInvocation = DDP._CurrentMethodInvocation.get();
    var currentPublicationInvocation = DDP._CurrentPublicationInvocation.get();
    var randomSeed = null;
    if (currentMethodInvocation) {
      userId = currentMethodInvocation.userId;
      setUserId = function (userId) {
        currentMethodInvocation.setUserId(userId);
      };
      connection = currentMethodInvocation.connection;
      randomSeed = DDPCommon.makeRpcSeed(currentMethodInvocation, name);
    } else if (currentPublicationInvocation) {
      userId = currentPublicationInvocation.userId;
      setUserId = function (userId) {
        currentPublicationInvocation._session._setUserId(userId);
      };
      connection = currentPublicationInvocation.connection;
    }
    var invocation = new DDPCommon.MethodInvocation({
      isSimulation: false,
      userId,
      setUserId,
      connection,
      randomSeed
    });
    return new Promise(resolve => resolve(DDP._CurrentMethodInvocation.withValue(invocation, () => maybeAuditArgumentChecks(handler, invocation, EJSON.clone(args), "internal call to '" + name + "'")))).then(EJSON.clone);
  },
  _urlForSession: function (sessionId) {
    var self = this;
    var session = self.sessions.get(sessionId);
    if (session) return session._socketUrl;else return null;
  }
});
var calculateVersion = function (clientSupportedVersions, serverSupportedVersions) {
  var correctVersion = _.find(clientSupportedVersions, function (version) {
    return _.contains(serverSupportedVersions, version);
  });
  if (!correctVersion) {
    correctVersion = serverSupportedVersions[0];
  }
  return correctVersion;
};
DDPServer._calculateVersion = calculateVersion;

// "blind" exceptions other than those that were deliberately thrown to signal
// errors to the client
var wrapInternalException = function (exception, context) {
  if (!exception) return exception;

  // To allow packages to throw errors intended for the client but not have to
  // depend on the Meteor.Error class, `isClientSafe` can be set to true on any
  // error before it is thrown.
  if (exception.isClientSafe) {
    if (!(exception instanceof Meteor.Error)) {
      const originalMessage = exception.message;
      exception = new Meteor.Error(exception.error, exception.reason, exception.details);
      exception.message = originalMessage;
    }
    return exception;
  }

  // Tests can set the '_expectedByTest' flag on an exception so it won't go to
  // the server log.
  if (!exception._expectedByTest) {
    Meteor._debug("Exception " + context, exception.stack);
    if (exception.sanitizedError) {
      Meteor._debug("Sanitized and reported to the client as:", exception.sanitizedError);
      Meteor._debug();
    }
  }

  // Did the error contain more details that could have been useful if caught in
  // server code (or if thrown from non-client-originated code), but also
  // provided a "sanitized" version with more context than 500 Internal server
  // error? Use that.
  if (exception.sanitizedError) {
    if (exception.sanitizedError.isClientSafe) return exception.sanitizedError;
    Meteor._debug("Exception " + context + " provides a sanitizedError that " + "does not have isClientSafe property set; ignoring");
  }
  return new Meteor.Error(500, "Internal server error");
};

// Audit argument checks, if the audit-argument-checks package exists (it is a
// weak dependency of this package).
var maybeAuditArgumentChecks = function (f, context, args, description) {
  args = args || [];
  if (Package['audit-argument-checks']) {
    return Match._failIfArgumentsAreNotAllChecked(f, context, args, description);
  }
  return f.apply(context, args);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"writefence.js":function module(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ddp-server/writefence.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Future = Npm.require('fibers/future');

// A write fence collects a group of writes, and provides a callback
// when all of the writes are fully committed and propagated (all
// observers have been notified of the write and acknowledged it.)
//
DDPServer._WriteFence = function () {
  var self = this;
  self.armed = false;
  self.fired = false;
  self.retired = false;
  self.outstanding_writes = 0;
  self.before_fire_callbacks = [];
  self.completion_callbacks = [];
};

// The current write fence. When there is a current write fence, code
// that writes to databases should register their writes with it using
// beginWrite().
//
DDPServer._CurrentWriteFence = new Meteor.EnvironmentVariable();
_.extend(DDPServer._WriteFence.prototype, {
  // Start tracking a write, and return an object to represent it. The
  // object has a single method, committed(). This method should be
  // called when the write is fully committed and propagated. You can
  // continue to add writes to the WriteFence up until it is triggered
  // (calls its callbacks because all writes have committed.)
  beginWrite: function () {
    var self = this;
    if (self.retired) return {
      committed: function () {}
    };
    if (self.fired) throw new Error("fence has already activated -- too late to add writes");
    self.outstanding_writes++;
    var committed = false;
    return {
      committed: function () {
        if (committed) throw new Error("committed called twice on the same write");
        committed = true;
        self.outstanding_writes--;
        self._maybeFire();
      }
    };
  },
  // Arm the fence. Once the fence is armed, and there are no more
  // uncommitted writes, it will activate.
  arm: function () {
    var self = this;
    if (self === DDPServer._CurrentWriteFence.get()) throw Error("Can't arm the current fence");
    self.armed = true;
    self._maybeFire();
  },
  // Register a function to be called once before firing the fence.
  // Callback function can add new writes to the fence, in which case
  // it won't fire until those writes are done as well.
  onBeforeFire: function (func) {
    var self = this;
    if (self.fired) throw new Error("fence has already activated -- too late to " + "add a callback");
    self.before_fire_callbacks.push(func);
  },
  // Register a function to be called when the fence fires.
  onAllCommitted: function (func) {
    var self = this;
    if (self.fired) throw new Error("fence has already activated -- too late to " + "add a callback");
    self.completion_callbacks.push(func);
  },
  // Convenience function. Arms the fence, then blocks until it fires.
  armAndWait: function () {
    var self = this;
    var future = new Future();
    self.onAllCommitted(function () {
      future['return']();
    });
    self.arm();
    future.wait();
  },
  _maybeFire: function () {
    var self = this;
    if (self.fired) throw new Error("write fence already activated?");
    if (self.armed && !self.outstanding_writes) {
      function invokeCallback(func) {
        try {
          func(self);
        } catch (err) {
          Meteor._debug("exception in write fence callback", err);
        }
      }
      self.outstanding_writes++;
      while (self.before_fire_callbacks.length > 0) {
        var callbacks = self.before_fire_callbacks;
        self.before_fire_callbacks = [];
        _.each(callbacks, invokeCallback);
      }
      self.outstanding_writes--;
      if (!self.outstanding_writes) {
        self.fired = true;
        var callbacks = self.completion_callbacks;
        self.completion_callbacks = [];
        _.each(callbacks, invokeCallback);
      }
    }
  },
  // Deactivate this fence so that adding more writes has no effect.
  // The fence must have already fired.
  retire: function () {
    var self = this;
    if (!self.fired) throw new Error("Can't retire a fence that hasn't fired.");
    self.retired = true;
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"crossbar.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ddp-server/crossbar.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// A "crossbar" is a class that provides structured notification registration.
// See _match for the definition of how a notification matches a trigger.
// All notifications and triggers must have a string key named 'collection'.

DDPServer._Crossbar = function (options) {
  var self = this;
  options = options || {};
  self.nextId = 1;
  // map from collection name (string) -> listener id -> object. each object has
  // keys 'trigger', 'callback'.  As a hack, the empty string means "no
  // collection".
  self.listenersByCollection = {};
  self.listenersByCollectionCount = {};
  self.factPackage = options.factPackage || "livedata";
  self.factName = options.factName || null;
};
_.extend(DDPServer._Crossbar.prototype, {
  // msg is a trigger or a notification
  _collectionForMessage: function (msg) {
    var self = this;
    if (!_.has(msg, 'collection')) {
      return '';
    } else if (typeof msg.collection === 'string') {
      if (msg.collection === '') throw Error("Message has empty collection!");
      return msg.collection;
    } else {
      throw Error("Message has non-string collection!");
    }
  },
  // Listen for notification that match 'trigger'. A notification
  // matches if it has the key-value pairs in trigger as a
  // subset. When a notification matches, call 'callback', passing
  // the actual notification.
  //
  // Returns a listen handle, which is an object with a method
  // stop(). Call stop() to stop listening.
  //
  // XXX It should be legal to call fire() from inside a listen()
  // callback?
  listen: function (trigger, callback) {
    var self = this;
    var id = self.nextId++;
    var collection = self._collectionForMessage(trigger);
    var record = {
      trigger: EJSON.clone(trigger),
      callback: callback
    };
    if (!_.has(self.listenersByCollection, collection)) {
      self.listenersByCollection[collection] = {};
      self.listenersByCollectionCount[collection] = 0;
    }
    self.listenersByCollection[collection][id] = record;
    self.listenersByCollectionCount[collection]++;
    if (self.factName && Package['facts-base']) {
      Package['facts-base'].Facts.incrementServerFact(self.factPackage, self.factName, 1);
    }
    return {
      stop: function () {
        if (self.factName && Package['facts-base']) {
          Package['facts-base'].Facts.incrementServerFact(self.factPackage, self.factName, -1);
        }
        delete self.listenersByCollection[collection][id];
        self.listenersByCollectionCount[collection]--;
        if (self.listenersByCollectionCount[collection] === 0) {
          delete self.listenersByCollection[collection];
          delete self.listenersByCollectionCount[collection];
        }
      }
    };
  },
  // Fire the provided 'notification' (an object whose attribute
  // values are all JSON-compatibile) -- inform all matching listeners
  // (registered with listen()).
  //
  // If fire() is called inside a write fence, then each of the
  // listener callbacks will be called inside the write fence as well.
  //
  // The listeners may be invoked in parallel, rather than serially.
  fire: function (notification) {
    var self = this;
    var collection = self._collectionForMessage(notification);
    if (!_.has(self.listenersByCollection, collection)) {
      return;
    }
    var listenersForCollection = self.listenersByCollection[collection];
    var callbackIds = [];
    _.each(listenersForCollection, function (l, id) {
      if (self._matches(notification, l.trigger)) {
        callbackIds.push(id);
      }
    });

    // Listener callbacks can yield, so we need to first find all the ones that
    // match in a single iteration over self.listenersByCollection (which can't
    // be mutated during this iteration), and then invoke the matching
    // callbacks, checking before each call to ensure they haven't stopped.
    // Note that we don't have to check that
    // self.listenersByCollection[collection] still === listenersForCollection,
    // because the only way that stops being true is if listenersForCollection
    // first gets reduced down to the empty object (and then never gets
    // increased again).
    _.each(callbackIds, function (id) {
      if (_.has(listenersForCollection, id)) {
        listenersForCollection[id].callback(notification);
      }
    });
  },
  // A notification matches a trigger if all keys that exist in both are equal.
  //
  // Examples:
  //  N:{collection: "C"} matches T:{collection: "C"}
  //    (a non-targeted write to a collection matches a
  //     non-targeted query)
  //  N:{collection: "C", id: "X"} matches T:{collection: "C"}
  //    (a targeted write to a collection matches a non-targeted query)
  //  N:{collection: "C"} matches T:{collection: "C", id: "X"}
  //    (a non-targeted write to a collection matches a
  //     targeted query)
  //  N:{collection: "C", id: "X"} matches T:{collection: "C", id: "X"}
  //    (a targeted write to a collection matches a targeted query targeted
  //     at the same document)
  //  N:{collection: "C", id: "X"} does not match T:{collection: "C", id: "Y"}
  //    (a targeted write to a collection does not match a targeted query
  //     targeted at a different document)
  _matches: function (notification, trigger) {
    // Most notifications that use the crossbar have a string `collection` and
    // maybe an `id` that is a string or ObjectID. We're already dividing up
    // triggers by collection, but let's fast-track "nope, different ID" (and
    // avoid the overly generic EJSON.equals). This makes a noticeable
    // performance difference; see https://github.com/meteor/meteor/pull/3697
    if (typeof notification.id === 'string' && typeof trigger.id === 'string' && notification.id !== trigger.id) {
      return false;
    }
    if (notification.id instanceof MongoID.ObjectID && trigger.id instanceof MongoID.ObjectID && !notification.id.equals(trigger.id)) {
      return false;
    }
    return _.all(trigger, function (triggerValue, key) {
      return !_.has(notification, key) || EJSON.equals(triggerValue, notification[key]);
    });
  }
});

// The "invalidation crossbar" is a specific instance used by the DDP server to
// implement write fence notifications. Listener callbacks on this crossbar
// should call beginWrite on the current write fence before they return, if they
// want to delay the write fence from firing (ie, the DDP method-data-updated
// message from being sent).
DDPServer._InvalidationCrossbar = new DDPServer._Crossbar({
  factName: "invalidation-crossbar-listeners"
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server_convenience.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/ddp-server/server_convenience.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
if (process.env.DDP_DEFAULT_CONNECTION_URL) {
  __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = process.env.DDP_DEFAULT_CONNECTION_URL;
}
Meteor.server = new Server();
Meteor.refresh = function (notification) {
  DDPServer._InvalidationCrossbar.fire(notification);
};

// Proxy the public methods of Meteor.server so they can
// be called directly on Meteor.
_.each(['publish', 'methods', 'call', 'callAsync', 'apply', 'applyAsync', 'onConnection', 'onMessage'], function (name) {
  Meteor[name] = _.bind(Meteor.server[name], Meteor.server);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/ddp-server/stream_server.js");
require("/node_modules/meteor/ddp-server/livedata_server.js");
require("/node_modules/meteor/ddp-server/writefence.js");
require("/node_modules/meteor/ddp-server/crossbar.js");
require("/node_modules/meteor/ddp-server/server_convenience.js");

/* Exports */
Package._define("ddp-server", {
  DDPServer: DDPServer
});

})();

//# sourceURL=meteor://💻app/packages/ddp-server.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZGRwLXNlcnZlci9zdHJlYW1fc2VydmVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtc2VydmVyL2xpdmVkYXRhX3NlcnZlci5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZGRwLXNlcnZlci93cml0ZWZlbmNlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtc2VydmVyL2Nyb3NzYmFyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtc2VydmVyL3NlcnZlcl9jb252ZW5pZW5jZS5qcyJdLCJuYW1lcyI6WyJ3ZWJzb2NrZXRFeHRlbnNpb25zIiwiXyIsIm9uY2UiLCJleHRlbnNpb25zIiwid2Vic29ja2V0Q29tcHJlc3Npb25Db25maWciLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSX1dFQlNPQ0tFVF9DT01QUkVTU0lPTiIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJOcG0iLCJyZXF1aXJlIiwiY29uZmlndXJlIiwicGF0aFByZWZpeCIsIl9fbWV0ZW9yX3J1bnRpbWVfY29uZmlnX18iLCJST09UX1VSTF9QQVRIX1BSRUZJWCIsIlN0cmVhbVNlcnZlciIsInNlbGYiLCJyZWdpc3RyYXRpb25fY2FsbGJhY2tzIiwib3Blbl9zb2NrZXRzIiwicHJlZml4IiwiUm91dGVQb2xpY3kiLCJkZWNsYXJlIiwic29ja2pzIiwic2VydmVyT3B0aW9ucyIsImxvZyIsImhlYXJ0YmVhdF9kZWxheSIsImRpc2Nvbm5lY3RfZGVsYXkiLCJkaXNhYmxlX2NvcnMiLCJESVNBQkxFX1NPQ0tKU19DT1JTIiwianNlc3Npb25pZCIsIlVTRV9KU0VTU0lPTklEIiwiRElTQUJMRV9XRUJTT0NLRVRTIiwid2Vic29ja2V0IiwiZmF5ZV9zZXJ2ZXJfb3B0aW9ucyIsInNlcnZlciIsImNyZWF0ZVNlcnZlciIsIldlYkFwcCIsImh0dHBTZXJ2ZXIiLCJyZW1vdmVMaXN0ZW5lciIsIl90aW1lb3V0QWRqdXN0bWVudFJlcXVlc3RDYWxsYmFjayIsImluc3RhbGxIYW5kbGVycyIsImFkZExpc3RlbmVyIiwiX3JlZGlyZWN0V2Vic29ja2V0RW5kcG9pbnQiLCJvbiIsInNvY2tldCIsInNldFdlYnNvY2tldFRpbWVvdXQiLCJ0aW1lb3V0IiwicHJvdG9jb2wiLCJfc2Vzc2lvbiIsInJlY3YiLCJjb25uZWN0aW9uIiwic2V0VGltZW91dCIsInNlbmQiLCJkYXRhIiwid3JpdGUiLCJ3aXRob3V0IiwiVEVTVF9NRVRBREFUQSIsInN0cmluZ2lmeSIsInRlc3RNZXNzYWdlT25Db25uZWN0IiwiZWFjaCIsImNhbGxiYWNrIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwicmVnaXN0ZXIiLCJhbGxfc29ja2V0cyIsInZhbHVlcyIsImZvckVhY2giLCJldmVudCIsIm9sZEh0dHBTZXJ2ZXJMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsInJlbW92ZUFsbExpc3RlbmVycyIsIm5ld0xpc3RlbmVyIiwicmVxdWVzdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJ1cmwiLCJwYXJzZWRVcmwiLCJwYXRobmFtZSIsImZvcm1hdCIsIm9sZExpc3RlbmVyIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwibW9kdWxlIiwibGluayIsImRlZmF1bHQiLCJ2IiwiRERQU2VydmVyIiwiRmliZXIiLCJwdWJsaWNhdGlvblN0cmF0ZWdpZXMiLCJTRVJWRVJfTUVSR0UiLCJ1c2VEdW1teURvY3VtZW50VmlldyIsInVzZUNvbGxlY3Rpb25WaWV3IiwiZG9BY2NvdW50aW5nRm9yQ29sbGVjdGlvbiIsIk5PX01FUkdFX05PX0hJU1RPUlkiLCJOT19NRVJHRSIsIk5PX01FUkdFX01VTFRJIiwiRHVtbXlEb2N1bWVudFZpZXciLCJleGlzdHNJbiIsIlNldCIsImRhdGFCeUtleSIsIk1hcCIsImdldEZpZWxkcyIsImNsZWFyRmllbGQiLCJzdWJzY3JpcHRpb25IYW5kbGUiLCJrZXkiLCJjaGFuZ2VDb2xsZWN0b3IiLCJ1bmRlZmluZWQiLCJjaGFuZ2VGaWVsZCIsInZhbHVlIiwiaXNBZGQiLCJTZXNzaW9uRG9jdW1lbnRWaWV3IiwiX1Nlc3Npb25Eb2N1bWVudFZpZXciLCJleHRlbmQiLCJyZXQiLCJwcmVjZWRlbmNlTGlzdCIsImdldCIsInJlbW92ZWRWYWx1ZSIsImkiLCJsZW5ndGgiLCJwcmVjZWRlbmNlIiwic3BsaWNlIiwiZGVsZXRlIiwiRUpTT04iLCJlcXVhbHMiLCJjbG9uZSIsImhhcyIsInNldCIsImVsdCIsImZpbmQiLCJTZXNzaW9uQ29sbGVjdGlvblZpZXciLCJjb2xsZWN0aW9uTmFtZSIsInNlc3Npb25DYWxsYmFja3MiLCJkb2N1bWVudHMiLCJjYWxsYmFja3MiLCJfU2Vzc2lvbkNvbGxlY3Rpb25WaWV3IiwiaXNFbXB0eSIsInNpemUiLCJkaWZmIiwicHJldmlvdXMiLCJEaWZmU2VxdWVuY2UiLCJkaWZmTWFwcyIsImJvdGgiLCJiaW5kIiwiZGlmZkRvY3VtZW50IiwicmlnaHRPbmx5IiwiaWQiLCJub3dEViIsImFkZGVkIiwibGVmdE9ubHkiLCJwcmV2RFYiLCJyZW1vdmVkIiwiZmllbGRzIiwiZGlmZk9iamVjdHMiLCJwcmV2Iiwibm93IiwiY2hhbmdlZCIsImRvY1ZpZXciLCJNZXRlb3IiLCJnZXRQdWJsaWNhdGlvblN0cmF0ZWd5IiwiYWRkIiwiY2hhbmdlZFJlc3VsdCIsIkVycm9yIiwiZXJyIiwiU2Vzc2lvbiIsInZlcnNpb24iLCJvcHRpb25zIiwiUmFuZG9tIiwiaW5pdGlhbGl6ZWQiLCJpblF1ZXVlIiwiX0RvdWJsZUVuZGVkUXVldWUiLCJibG9ja2VkIiwid29ya2VyUnVubmluZyIsImNhY2hlZFVuYmxvY2siLCJfbmFtZWRTdWJzIiwiX3VuaXZlcnNhbFN1YnMiLCJ1c2VySWQiLCJjb2xsZWN0aW9uVmlld3MiLCJfaXNTZW5kaW5nIiwiX2RvbnRTdGFydE5ld1VuaXZlcnNhbFN1YnMiLCJfcGVuZGluZ1JlYWR5IiwiX2Nsb3NlQ2FsbGJhY2tzIiwiX3NvY2tldFVybCIsIl9yZXNwb25kVG9QaW5ncyIsInJlc3BvbmRUb1BpbmdzIiwiY29ubmVjdGlvbkhhbmRsZSIsImNsb3NlIiwib25DbG9zZSIsImZuIiwiY2IiLCJiaW5kRW52aXJvbm1lbnQiLCJkZWZlciIsImNsaWVudEFkZHJlc3MiLCJfY2xpZW50QWRkcmVzcyIsImh0dHBIZWFkZXJzIiwiaGVhZGVycyIsIm1zZyIsInNlc3Npb24iLCJzdGFydFVuaXZlcnNhbFN1YnMiLCJydW4iLCJoZWFydGJlYXRJbnRlcnZhbCIsImhlYXJ0YmVhdCIsIkREUENvbW1vbiIsIkhlYXJ0YmVhdCIsImhlYXJ0YmVhdFRpbWVvdXQiLCJvblRpbWVvdXQiLCJzZW5kUGluZyIsInN0YXJ0IiwiUGFja2FnZSIsIkZhY3RzIiwiaW5jcmVtZW50U2VydmVyRmFjdCIsInNlbmRSZWFkeSIsInN1YnNjcmlwdGlvbklkcyIsInN1YnMiLCJzdWJzY3JpcHRpb25JZCIsIl9jYW5TZW5kIiwic2VuZEFkZGVkIiwiY29sbGVjdGlvbiIsInNlbmRDaGFuZ2VkIiwic2VuZFJlbW92ZWQiLCJnZXRTZW5kQ2FsbGJhY2tzIiwiZ2V0Q29sbGVjdGlvblZpZXciLCJ2aWV3IiwiaGFuZGxlcnMiLCJ1bml2ZXJzYWxfcHVibGlzaF9oYW5kbGVycyIsImhhbmRsZXIiLCJfc3RhcnRTdWJzY3JpcHRpb24iLCJzdG9wIiwiX21ldGVvclNlc3Npb24iLCJfZGVhY3RpdmF0ZUFsbFN1YnNjcmlwdGlvbnMiLCJfcmVtb3ZlU2Vzc2lvbiIsIl9wcmludFNlbnRERFAiLCJfZGVidWciLCJzdHJpbmdpZnlERFAiLCJzZW5kRXJyb3IiLCJyZWFzb24iLCJvZmZlbmRpbmdNZXNzYWdlIiwicHJvY2Vzc01lc3NhZ2UiLCJtc2dfaW4iLCJtZXNzYWdlUmVjZWl2ZWQiLCJwcm9jZXNzTmV4dCIsInNoaWZ0IiwidW5ibG9jayIsIm9uTWVzc2FnZUhvb2siLCJwcm90b2NvbF9oYW5kbGVycyIsImNhbGwiLCJzdWIiLCJuYW1lIiwicGFyYW1zIiwiQXJyYXkiLCJwdWJsaXNoX2hhbmRsZXJzIiwiZXJyb3IiLCJjb25jYXQiLCJERFBSYXRlTGltaXRlciIsInJhdGVMaW1pdGVySW5wdXQiLCJ0eXBlIiwiY29ubmVjdGlvbklkIiwiX2luY3JlbWVudCIsInJhdGVMaW1pdFJlc3VsdCIsIl9jaGVjayIsImFsbG93ZWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJ0aW1lVG9SZXNldCIsInVuc3ViIiwiX3N0b3BTdWJzY3JpcHRpb24iLCJtZXRob2QiLCJyYW5kb21TZWVkIiwiZmVuY2UiLCJfV3JpdGVGZW5jZSIsIm9uQWxsQ29tbWl0dGVkIiwicmV0aXJlIiwibWV0aG9kcyIsIm1ldGhvZF9oYW5kbGVycyIsImFybSIsInNldFVzZXJJZCIsIl9zZXRVc2VySWQiLCJpbnZvY2F0aW9uIiwiTWV0aG9kSW52b2NhdGlvbiIsImlzU2ltdWxhdGlvbiIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldEN1cnJlbnRNZXRob2RJbnZvY2F0aW9uUmVzdWx0IiwiY3VycmVudENvbnRleHQiLCJERFAiLCJfQ3VycmVudE1ldGhvZEludm9jYXRpb24iLCJfc2V0TmV3Q29udGV4dEFuZEdldEN1cnJlbnQiLCJyZXN1bHQiLCJyZXN1bHRPclRoZW5hYmxlIiwibWF5YmVBdWRpdEFyZ3VtZW50Q2hlY2tzIiwiaXNUaGVuYWJsZSIsInRoZW4iLCJhd2FpdCIsIl9zZXQiLCJfQ3VycmVudFdyaXRlRmVuY2UiLCJ3aXRoVmFsdWUiLCJmaW5pc2giLCJwYXlsb2FkIiwiZXhjZXB0aW9uIiwid3JhcEludGVybmFsRXhjZXB0aW9uIiwiX2VhY2hTdWIiLCJmIiwiX2RpZmZDb2xsZWN0aW9uVmlld3MiLCJiZWZvcmVDVnMiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiZG9jIiwiX2RlYWN0aXZhdGUiLCJvbGROYW1lZFN1YnMiLCJuZXdTdWIiLCJfcmVjcmVhdGUiLCJfcnVuSGFuZGxlciIsIl9ub1lpZWxkc0FsbG93ZWQiLCJzdWJJZCIsIlN1YnNjcmlwdGlvbiIsInVuYmxvY2tIYW5kZXIiLCJzdWJOYW1lIiwibWF5YmVTdWIiLCJfbmFtZSIsIl9yZW1vdmVBbGxEb2N1bWVudHMiLCJyZXNwb25zZSIsImh0dHBGb3J3YXJkZWRDb3VudCIsInBhcnNlSW50IiwicmVtb3RlQWRkcmVzcyIsImZvcndhcmRlZEZvciIsImlzU3RyaW5nIiwidHJpbSIsInNwbGl0IiwiX2hhbmRsZXIiLCJfc3Vic2NyaXB0aW9uSWQiLCJfcGFyYW1zIiwiX3N1YnNjcmlwdGlvbkhhbmRsZSIsIl9kZWFjdGl2YXRlZCIsIl9zdG9wQ2FsbGJhY2tzIiwiX2RvY3VtZW50cyIsIl9yZWFkeSIsIl9pZEZpbHRlciIsImlkU3RyaW5naWZ5IiwiTW9uZ29JRCIsImlkUGFyc2UiLCJfQ3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbiIsImUiLCJfaXNEZWFjdGl2YXRlZCIsIl9wdWJsaXNoSGFuZGxlclJlc3VsdCIsInJlcyIsImlzQ3Vyc29yIiwiYyIsIl9wdWJsaXNoQ3Vyc29yIiwicmVhZHkiLCJpc0FycmF5IiwiYWxsIiwiY29sbGVjdGlvbk5hbWVzIiwiX2dldENvbGxlY3Rpb25OYW1lIiwiY3VyIiwiX2NhbGxTdG9wQ2FsbGJhY2tzIiwiY29sbGVjdGlvbkRvY3MiLCJzdHJJZCIsIm9uU3RvcCIsImlkcyIsIlNlcnZlciIsImRlZmF1bHRQdWJsaWNhdGlvblN0cmF0ZWd5Iiwib25Db25uZWN0aW9uSG9vayIsIkhvb2siLCJkZWJ1Z1ByaW50RXhjZXB0aW9ucyIsIl9wdWJsaWNhdGlvblN0cmF0ZWdpZXMiLCJzZXNzaW9ucyIsInN0cmVhbV9zZXJ2ZXIiLCJyYXdfbXNnIiwiX3ByaW50UmVjZWl2ZWRERFAiLCJwYXJzZUREUCIsIl9oYW5kbGVDb25uZWN0Iiwib25Db25uZWN0aW9uIiwic2V0UHVibGljYXRpb25TdHJhdGVneSIsInN0cmF0ZWd5IiwiaW5jbHVkZXMiLCJvbk1lc3NhZ2UiLCJzdXBwb3J0IiwiY29udGFpbnMiLCJTVVBQT1JURURfRERQX1ZFUlNJT05TIiwiY2FsY3VsYXRlVmVyc2lvbiIsInB1Ymxpc2giLCJpc09iamVjdCIsImF1dG9wdWJsaXNoIiwiaXNfYXV0byIsIndhcm5lZF9hYm91dF9hdXRvcHVibGlzaCIsImZ1bmMiLCJfbGVuIiwiX2tleSIsInBvcCIsImNhbGxBc3luYyIsIl9sZW4yIiwiX2tleTIiLCJhcHBseUFzeW5jIiwiY3VycmVudE1ldGhvZEludm9jYXRpb24iLCJjdXJyZW50UHVibGljYXRpb25JbnZvY2F0aW9uIiwibWFrZVJwY1NlZWQiLCJfdXJsRm9yU2Vzc2lvbiIsInNlc3Npb25JZCIsImNsaWVudFN1cHBvcnRlZFZlcnNpb25zIiwic2VydmVyU3VwcG9ydGVkVmVyc2lvbnMiLCJjb3JyZWN0VmVyc2lvbiIsIl9jYWxjdWxhdGVWZXJzaW9uIiwiY29udGV4dCIsImlzQ2xpZW50U2FmZSIsIm9yaWdpbmFsTWVzc2FnZSIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwiX2V4cGVjdGVkQnlUZXN0Iiwic3RhY2siLCJzYW5pdGl6ZWRFcnJvciIsImRlc2NyaXB0aW9uIiwiTWF0Y2giLCJfZmFpbElmQXJndW1lbnRzQXJlTm90QWxsQ2hlY2tlZCIsIkZ1dHVyZSIsImFybWVkIiwiZmlyZWQiLCJyZXRpcmVkIiwib3V0c3RhbmRpbmdfd3JpdGVzIiwiYmVmb3JlX2ZpcmVfY2FsbGJhY2tzIiwiY29tcGxldGlvbl9jYWxsYmFja3MiLCJFbnZpcm9ubWVudFZhcmlhYmxlIiwiYmVnaW5Xcml0ZSIsImNvbW1pdHRlZCIsIl9tYXliZUZpcmUiLCJvbkJlZm9yZUZpcmUiLCJhcm1BbmRXYWl0IiwiZnV0dXJlIiwid2FpdCIsImludm9rZUNhbGxiYWNrIiwiX0Nyb3NzYmFyIiwibmV4dElkIiwibGlzdGVuZXJzQnlDb2xsZWN0aW9uIiwibGlzdGVuZXJzQnlDb2xsZWN0aW9uQ291bnQiLCJmYWN0UGFja2FnZSIsImZhY3ROYW1lIiwiX2NvbGxlY3Rpb25Gb3JNZXNzYWdlIiwibGlzdGVuIiwidHJpZ2dlciIsInJlY29yZCIsImZpcmUiLCJub3RpZmljYXRpb24iLCJsaXN0ZW5lcnNGb3JDb2xsZWN0aW9uIiwiY2FsbGJhY2tJZHMiLCJsIiwiX21hdGNoZXMiLCJPYmplY3RJRCIsInRyaWdnZXJWYWx1ZSIsIl9JbnZhbGlkYXRpb25Dcm9zc2JhciIsIkREUF9ERUZBVUxUX0NPTk5FQ1RJT05fVVJMIiwicmVmcmVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLG1CQUFtQixHQUFHQyxDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFZO0VBQzNDLElBQUlDLFVBQVUsR0FBRyxFQUFFO0VBRW5CLElBQUlDLDBCQUEwQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsNEJBQTRCLEdBQ2pFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDQyxHQUFHLENBQUNDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ2pFLElBQUlILDBCQUEwQixFQUFFO0lBQzlCRCxVQUFVLENBQUNPLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsU0FBUyxDQUN6RFQsMEJBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxPQUFPRCxVQUFVO0FBQ25CLENBQUMsQ0FBQztBQUVGLElBQUlXLFVBQVUsR0FBR0MseUJBQXlCLENBQUNDLG9CQUFvQixJQUFLLEVBQUU7QUFFdEVDLFlBQVksR0FBRyxTQUFBQSxDQUFBLEVBQVk7RUFDekIsSUFBSUMsSUFBSSxHQUFHLElBQUk7RUFDZkEsSUFBSSxDQUFDQyxzQkFBc0IsR0FBRyxFQUFFO0VBQ2hDRCxJQUFJLENBQUNFLFlBQVksR0FBRyxFQUFFOztFQUV0QjtFQUNBO0VBQ0FGLElBQUksQ0FBQ0csTUFBTSxHQUFHUCxVQUFVLEdBQUcsU0FBUztFQUNwQ1EsV0FBVyxDQUFDQyxPQUFPLENBQUNMLElBQUksQ0FBQ0csTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUM7O0VBRWpEO0VBQ0EsSUFBSUcsTUFBTSxHQUFHYixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFDbEMsSUFBSWEsYUFBYSxHQUFHO0lBQ2xCSixNQUFNLEVBQUVILElBQUksQ0FBQ0csTUFBTTtJQUNuQkssR0FBRyxFQUFFLFNBQUFBLENBQUEsRUFBVyxDQUFDLENBQUM7SUFDbEI7SUFDQTtJQUNBQyxlQUFlLEVBQUUsS0FBSztJQUN0QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUMsZ0JBQWdCLEVBQUUsRUFBRSxHQUFHLElBQUk7SUFDM0I7SUFDQTtJQUNBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDeEIsT0FBTyxDQUFDQyxHQUFHLENBQUN3QixtQkFBbUI7SUFDL0M7SUFDQTtJQUNBO0lBQ0FDLFVBQVUsRUFBRSxDQUFDLENBQUMxQixPQUFPLENBQUNDLEdBQUcsQ0FBQzBCO0VBQzVCLENBQUM7O0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJM0IsT0FBTyxDQUFDQyxHQUFHLENBQUMyQixrQkFBa0IsRUFBRTtJQUNsQ1IsYUFBYSxDQUFDUyxTQUFTLEdBQUcsS0FBSztFQUNqQyxDQUFDLE1BQU07SUFDTFQsYUFBYSxDQUFDVSxtQkFBbUIsR0FBRztNQUNsQ2hDLFVBQVUsRUFBRUgsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztFQUNIO0VBRUFrQixJQUFJLENBQUNrQixNQUFNLEdBQUdaLE1BQU0sQ0FBQ2EsWUFBWSxDQUFDWixhQUFhLENBQUM7O0VBRWhEO0VBQ0E7RUFDQTtFQUNBO0VBQ0FhLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxjQUFjLENBQzlCLFNBQVMsRUFBRUYsTUFBTSxDQUFDRyxpQ0FBaUMsQ0FBQztFQUN0RHZCLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ00sZUFBZSxDQUFDSixNQUFNLENBQUNDLFVBQVUsQ0FBQztFQUM5Q0QsTUFBTSxDQUFDQyxVQUFVLENBQUNJLFdBQVcsQ0FDM0IsU0FBUyxFQUFFTCxNQUFNLENBQUNHLGlDQUFpQyxDQUFDOztFQUV0RDtFQUNBdkIsSUFBSSxDQUFDMEIsMEJBQTBCLENBQUMsQ0FBQztFQUVqQzFCLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVQyxNQUFNLEVBQUU7SUFDN0M7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUNBLE1BQU0sRUFBRTs7SUFFYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQSxNQUFNLENBQUNDLG1CQUFtQixHQUFHLFVBQVVDLE9BQU8sRUFBRTtNQUM5QyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csUUFBUSxLQUFLLFdBQVcsSUFDL0JILE1BQU0sQ0FBQ0csUUFBUSxLQUFLLGVBQWUsS0FDakNILE1BQU0sQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLEVBQUU7UUFDM0JMLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDTCxPQUFPLENBQUM7TUFDckQ7SUFDRixDQUFDO0lBQ0RGLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUVyQ0QsTUFBTSxDQUFDUSxJQUFJLEdBQUcsVUFBVUMsSUFBSSxFQUFFO01BQzVCVCxNQUFNLENBQUNVLEtBQUssQ0FBQ0QsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDRFQsTUFBTSxDQUFDRCxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDN0IzQixJQUFJLENBQUNFLFlBQVksR0FBR25CLENBQUMsQ0FBQ3dELE9BQU8sQ0FBQ3ZDLElBQUksQ0FBQ0UsWUFBWSxFQUFFMEIsTUFBTSxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUNGNUIsSUFBSSxDQUFDRSxZQUFZLENBQUNWLElBQUksQ0FBQ29DLE1BQU0sQ0FBQzs7SUFFOUI7SUFDQTtJQUNBLElBQUl6QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ29ELGFBQWEsSUFBSXJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0QsYUFBYSxLQUFLLElBQUksRUFBRTtNQUNuRVosTUFBTSxDQUFDUSxJQUFJLENBQUM5QyxJQUFJLENBQUNtRCxTQUFTLENBQUM7UUFBRUMsb0JBQW9CLEVBQUU7TUFBSyxDQUFDLENBQUMsQ0FBQztJQUM3RDs7SUFFQTtJQUNBO0lBQ0EzRCxDQUFDLENBQUM0RCxJQUFJLENBQUMzQyxJQUFJLENBQUNDLHNCQUFzQixFQUFFLFVBQVUyQyxRQUFRLEVBQUU7TUFDdERBLFFBQVEsQ0FBQ2hCLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFFSixDQUFDO0FBRURpQixNQUFNLENBQUNDLE1BQU0sQ0FBQy9DLFlBQVksQ0FBQ2dELFNBQVMsRUFBRTtFQUNwQztFQUNBO0VBQ0FDLFFBQVEsRUFBRSxTQUFBQSxDQUFVSixRQUFRLEVBQUU7SUFDNUIsSUFBSTVDLElBQUksR0FBRyxJQUFJO0lBQ2ZBLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNULElBQUksQ0FBQ29ELFFBQVEsQ0FBQztJQUMxQzdELENBQUMsQ0FBQzRELElBQUksQ0FBQzNDLElBQUksQ0FBQ2lELFdBQVcsQ0FBQyxDQUFDLEVBQUUsVUFBVXJCLE1BQU0sRUFBRTtNQUMzQ2dCLFFBQVEsQ0FBQ2hCLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQ7RUFDQXFCLFdBQVcsRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDdkIsSUFBSWpELElBQUksR0FBRyxJQUFJO0lBQ2YsT0FBT2pCLENBQUMsQ0FBQ21FLE1BQU0sQ0FBQ2xELElBQUksQ0FBQ0UsWUFBWSxDQUFDO0VBQ3BDLENBQUM7RUFFRDtFQUNBO0VBQ0F3QiwwQkFBMEIsRUFBRSxTQUFBQSxDQUFBLEVBQVc7SUFDckMsSUFBSTFCLElBQUksR0FBRyxJQUFJO0lBQ2Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDbUQsT0FBTyxDQUFFQyxLQUFLLElBQUs7TUFDeEMsSUFBSS9CLFVBQVUsR0FBR0QsTUFBTSxDQUFDQyxVQUFVO01BQ2xDLElBQUlnQyxzQkFBc0IsR0FBR2hDLFVBQVUsQ0FBQ2lDLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDakVsQyxVQUFVLENBQUNtQyxrQkFBa0IsQ0FBQ0osS0FBSyxDQUFDOztNQUVwQztNQUNBO01BQ0EsSUFBSUssV0FBVyxHQUFHLFNBQUFBLENBQVNDLE9BQU8sQ0FBQyxzQkFBc0I7UUFDdkQ7UUFDQSxJQUFJQyxJQUFJLEdBQUdDLFNBQVM7O1FBRXBCO1FBQ0EsSUFBSUMsR0FBRyxHQUFHcEUsR0FBRyxDQUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDOztRQUU1QjtRQUNBO1FBQ0EsSUFBSW9FLFNBQVMsR0FBR0QsR0FBRyxDQUFDdEUsS0FBSyxDQUFDbUUsT0FBTyxDQUFDRyxHQUFHLENBQUM7UUFDdEMsSUFBSUMsU0FBUyxDQUFDQyxRQUFRLEtBQUtuRSxVQUFVLEdBQUcsWUFBWSxJQUNoRGtFLFNBQVMsQ0FBQ0MsUUFBUSxLQUFLbkUsVUFBVSxHQUFHLGFBQWEsRUFBRTtVQUNyRGtFLFNBQVMsQ0FBQ0MsUUFBUSxHQUFHL0QsSUFBSSxDQUFDRyxNQUFNLEdBQUcsWUFBWTtVQUMvQ3VELE9BQU8sQ0FBQ0csR0FBRyxHQUFHQSxHQUFHLENBQUNHLE1BQU0sQ0FBQ0YsU0FBUyxDQUFDO1FBQ3JDO1FBQ0EvRSxDQUFDLENBQUM0RCxJQUFJLENBQUNVLHNCQUFzQixFQUFFLFVBQVNZLFdBQVcsRUFBRTtVQUNuREEsV0FBVyxDQUFDQyxLQUFLLENBQUM3QyxVQUFVLEVBQUVzQyxJQUFJLENBQUM7UUFDckMsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUNEdEMsVUFBVSxDQUFDSSxXQUFXLENBQUMyQixLQUFLLEVBQUVLLFdBQVcsQ0FBQztJQUM1QyxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ2hNRixJQUFJVSxhQUFhO0FBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLHNDQUFzQyxFQUFDO0VBQUNDLE9BQU9BLENBQUNDLENBQUMsRUFBQztJQUFDSixhQUFhLEdBQUNJLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFBckdDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFFZCxJQUFJQyxLQUFLLEdBQUdoRixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTWdGLHFCQUFxQixHQUFHO0VBQzVCO0VBQ0E7RUFDQTtFQUNBQyxZQUFZLEVBQUU7SUFDWkMsb0JBQW9CLEVBQUUsS0FBSztJQUMzQkMsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QkMseUJBQXlCLEVBQUU7RUFDN0IsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0FDLG1CQUFtQixFQUFFO0lBQ25CSCxvQkFBb0IsRUFBRSxLQUFLO0lBQzNCQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyx5QkFBeUIsRUFBRTtFQUM3QixDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0FFLFFBQVEsRUFBRTtJQUNSSixvQkFBb0IsRUFBRSxLQUFLO0lBQzNCQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyx5QkFBeUIsRUFBRTtFQUM3QixDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0FHLGNBQWMsRUFBRTtJQUNkTCxvQkFBb0IsRUFBRSxJQUFJO0lBQzFCQyxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCQyx5QkFBeUIsRUFBRTtFQUM3QjtBQUNGLENBQUM7QUFFRE4sU0FBUyxDQUFDRSxxQkFBcUIsR0FBR0EscUJBQXFCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSVEsaUJBQWlCLEdBQUcsU0FBQUEsQ0FBQSxFQUFZO0VBQ2xDLElBQUlsRixJQUFJLEdBQUcsSUFBSTtFQUNmQSxJQUFJLENBQUNtRixRQUFRLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNCcEYsSUFBSSxDQUFDcUYsU0FBUyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUR6QyxNQUFNLENBQUNDLE1BQU0sQ0FBQ29DLGlCQUFpQixDQUFDbkMsU0FBUyxFQUFFO0VBQ3pDd0MsU0FBUyxFQUFFLFNBQUFBLENBQUEsRUFBWTtJQUNyQixPQUFPLENBQUMsQ0FBQztFQUNYLENBQUM7RUFFREMsVUFBVSxFQUFFLFNBQUFBLENBQVVDLGtCQUFrQixFQUFFQyxHQUFHLEVBQUVDLGVBQWUsRUFBRTtJQUM5REEsZUFBZSxDQUFDRCxHQUFHLENBQUMsR0FBR0UsU0FBUztFQUNsQyxDQUFDO0VBRURDLFdBQVcsRUFBRSxTQUFBQSxDQUFVSixrQkFBa0IsRUFBRUMsR0FBRyxFQUFFSSxLQUFLLEVBQzlCSCxlQUFlLEVBQUVJLEtBQUssRUFBRTtJQUM3Q0osZUFBZSxDQUFDRCxHQUFHLENBQUMsR0FBR0ksS0FBSztFQUM5QjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUlFLG1CQUFtQixHQUFHLFNBQUFBLENBQUEsRUFBWTtFQUNwQyxJQUFJaEcsSUFBSSxHQUFHLElBQUk7RUFDZkEsSUFBSSxDQUFDbUYsUUFBUSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQnBGLElBQUksQ0FBQ3FGLFNBQVMsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEZCxTQUFTLENBQUN5QixvQkFBb0IsR0FBR0QsbUJBQW1CO0FBR3BEakgsQ0FBQyxDQUFDbUgsTUFBTSxDQUFDRixtQkFBbUIsQ0FBQ2pELFNBQVMsRUFBRTtFQUV0Q3dDLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDckIsSUFBSXZGLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSW1HLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWm5HLElBQUksQ0FBQ3FGLFNBQVMsQ0FBQ2xDLE9BQU8sQ0FBQyxVQUFVaUQsY0FBYyxFQUFFVixHQUFHLEVBQUU7TUFDcERTLEdBQUcsQ0FBQ1QsR0FBRyxDQUFDLEdBQUdVLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ04sS0FBSztJQUNwQyxDQUFDLENBQUM7SUFDRixPQUFPSyxHQUFHO0VBQ1osQ0FBQztFQUVEWCxVQUFVLEVBQUUsU0FBQUEsQ0FBVUMsa0JBQWtCLEVBQUVDLEdBQUcsRUFBRUMsZUFBZSxFQUFFO0lBQzlELElBQUkzRixJQUFJLEdBQUcsSUFBSTtJQUNmO0lBQ0EsSUFBSTBGLEdBQUcsS0FBSyxLQUFLLEVBQ2Y7SUFDRixJQUFJVSxjQUFjLEdBQUdwRyxJQUFJLENBQUNxRixTQUFTLENBQUNnQixHQUFHLENBQUNYLEdBQUcsQ0FBQzs7SUFFNUM7SUFDQTtJQUNBLElBQUksQ0FBQ1UsY0FBYyxFQUNqQjtJQUVGLElBQUlFLFlBQVksR0FBR1YsU0FBUztJQUM1QixLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsY0FBYyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQzlDLElBQUlFLFVBQVUsR0FBR0wsY0FBYyxDQUFDRyxDQUFDLENBQUM7TUFDbEMsSUFBSUUsVUFBVSxDQUFDaEIsa0JBQWtCLEtBQUtBLGtCQUFrQixFQUFFO1FBQ3hEO1FBQ0E7UUFDQSxJQUFJYyxDQUFDLEtBQUssQ0FBQyxFQUNURCxZQUFZLEdBQUdHLFVBQVUsQ0FBQ1gsS0FBSztRQUNqQ00sY0FBYyxDQUFDTSxNQUFNLENBQUNILENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0I7TUFDRjtJQUNGO0lBQ0EsSUFBSUgsY0FBYyxDQUFDSSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQy9CeEcsSUFBSSxDQUFDcUYsU0FBUyxDQUFDc0IsTUFBTSxDQUFDakIsR0FBRyxDQUFDO01BQzFCQyxlQUFlLENBQUNELEdBQUcsQ0FBQyxHQUFHRSxTQUFTO0lBQ2xDLENBQUMsTUFBTSxJQUFJVSxZQUFZLEtBQUtWLFNBQVMsSUFDMUIsQ0FBQ2dCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDUCxZQUFZLEVBQUVGLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ04sS0FBSyxDQUFDLEVBQUU7TUFDL0RILGVBQWUsQ0FBQ0QsR0FBRyxDQUFDLEdBQUdVLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ04sS0FBSztJQUNoRDtFQUNGLENBQUM7RUFFREQsV0FBVyxFQUFFLFNBQUFBLENBQVVKLGtCQUFrQixFQUFFQyxHQUFHLEVBQUVJLEtBQUssRUFDOUJILGVBQWUsRUFBRUksS0FBSyxFQUFFO0lBQzdDLElBQUkvRixJQUFJLEdBQUcsSUFBSTtJQUNmO0lBQ0EsSUFBSTBGLEdBQUcsS0FBSyxLQUFLLEVBQ2Y7O0lBRUY7SUFDQUksS0FBSyxHQUFHYyxLQUFLLENBQUNFLEtBQUssQ0FBQ2hCLEtBQUssQ0FBQztJQUUxQixJQUFJLENBQUM5RixJQUFJLENBQUNxRixTQUFTLENBQUMwQixHQUFHLENBQUNyQixHQUFHLENBQUMsRUFBRTtNQUM1QjFGLElBQUksQ0FBQ3FGLFNBQVMsQ0FBQzJCLEdBQUcsQ0FBQ3RCLEdBQUcsRUFBRSxDQUFDO1FBQUNELGtCQUFrQixFQUFFQSxrQkFBa0I7UUFDdENLLEtBQUssRUFBRUE7TUFBSyxDQUFDLENBQUMsQ0FBQztNQUN6Q0gsZUFBZSxDQUFDRCxHQUFHLENBQUMsR0FBR0ksS0FBSztNQUM1QjtJQUNGO0lBQ0EsSUFBSU0sY0FBYyxHQUFHcEcsSUFBSSxDQUFDcUYsU0FBUyxDQUFDZ0IsR0FBRyxDQUFDWCxHQUFHLENBQUM7SUFDNUMsSUFBSXVCLEdBQUc7SUFDUCxJQUFJLENBQUNsQixLQUFLLEVBQUU7TUFDVmtCLEdBQUcsR0FBR2IsY0FBYyxDQUFDYyxJQUFJLENBQUMsVUFBVVQsVUFBVSxFQUFFO1FBQzVDLE9BQU9BLFVBQVUsQ0FBQ2hCLGtCQUFrQixLQUFLQSxrQkFBa0I7TUFDL0QsQ0FBQyxDQUFDO0lBQ0o7SUFFQSxJQUFJd0IsR0FBRyxFQUFFO01BQ1AsSUFBSUEsR0FBRyxLQUFLYixjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxNQUFNLENBQUNmLEtBQUssRUFBRW1CLEdBQUcsQ0FBQ25CLEtBQUssQ0FBQyxFQUFFO1FBQ2hFO1FBQ0FILGVBQWUsQ0FBQ0QsR0FBRyxDQUFDLEdBQUdJLEtBQUs7TUFDOUI7TUFDQW1CLEdBQUcsQ0FBQ25CLEtBQUssR0FBR0EsS0FBSztJQUNuQixDQUFDLE1BQU07TUFDTDtNQUNBTSxjQUFjLENBQUM1RyxJQUFJLENBQUM7UUFBQ2lHLGtCQUFrQixFQUFFQSxrQkFBa0I7UUFBRUssS0FBSyxFQUFFQTtNQUFLLENBQUMsQ0FBQztJQUM3RTtFQUVGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlxQixxQkFBcUIsR0FBRyxTQUFBQSxDQUFVQyxjQUFjLEVBQUVDLGdCQUFnQixFQUFFO0VBQ3RFLElBQUlySCxJQUFJLEdBQUcsSUFBSTtFQUNmQSxJQUFJLENBQUNvSCxjQUFjLEdBQUdBLGNBQWM7RUFDcENwSCxJQUFJLENBQUNzSCxTQUFTLEdBQUcsSUFBSWhDLEdBQUcsQ0FBQyxDQUFDO0VBQzFCdEYsSUFBSSxDQUFDdUgsU0FBUyxHQUFHRixnQkFBZ0I7QUFDbkMsQ0FBQztBQUVEN0MsU0FBUyxDQUFDZ0Qsc0JBQXNCLEdBQUdMLHFCQUFxQjtBQUd4RHRFLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDcUUscUJBQXFCLENBQUNwRSxTQUFTLEVBQUU7RUFFN0MwRSxPQUFPLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ25CLElBQUl6SCxJQUFJLEdBQUcsSUFBSTtJQUNmLE9BQU9BLElBQUksQ0FBQ3NILFNBQVMsQ0FBQ0ksSUFBSSxLQUFLLENBQUM7RUFDbEMsQ0FBQztFQUVEQyxJQUFJLEVBQUUsU0FBQUEsQ0FBVUMsUUFBUSxFQUFFO0lBQ3hCLElBQUk1SCxJQUFJLEdBQUcsSUFBSTtJQUNmNkgsWUFBWSxDQUFDQyxRQUFRLENBQUNGLFFBQVEsQ0FBQ04sU0FBUyxFQUFFdEgsSUFBSSxDQUFDc0gsU0FBUyxFQUFFO01BQ3hEUyxJQUFJLEVBQUVoSixDQUFDLENBQUNpSixJQUFJLENBQUNoSSxJQUFJLENBQUNpSSxZQUFZLEVBQUVqSSxJQUFJLENBQUM7TUFFckNrSSxTQUFTLEVBQUUsU0FBQUEsQ0FBVUMsRUFBRSxFQUFFQyxLQUFLLEVBQUU7UUFDOUJwSSxJQUFJLENBQUN1SCxTQUFTLENBQUNjLEtBQUssQ0FBQ3JJLElBQUksQ0FBQ29ILGNBQWMsRUFBRWUsRUFBRSxFQUFFQyxLQUFLLENBQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQ2xFLENBQUM7TUFFRCtDLFFBQVEsRUFBRSxTQUFBQSxDQUFVSCxFQUFFLEVBQUVJLE1BQU0sRUFBRTtRQUM5QnZJLElBQUksQ0FBQ3VILFNBQVMsQ0FBQ2lCLE9BQU8sQ0FBQ3hJLElBQUksQ0FBQ29ILGNBQWMsRUFBRWUsRUFBRSxDQUFDO01BQ2pEO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVERixZQUFZLEVBQUUsU0FBQUEsQ0FBVUUsRUFBRSxFQUFFSSxNQUFNLEVBQUVILEtBQUssRUFBRTtJQUN6QyxJQUFJcEksSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJeUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmWixZQUFZLENBQUNhLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDaEQsU0FBUyxDQUFDLENBQUMsRUFBRTZDLEtBQUssQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7TUFDOUR3QyxJQUFJLEVBQUUsU0FBQUEsQ0FBVXJDLEdBQUcsRUFBRWlELElBQUksRUFBRUMsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDOEIsSUFBSSxFQUFFQyxHQUFHLENBQUMsRUFDMUJILE1BQU0sQ0FBQy9DLEdBQUcsQ0FBQyxHQUFHa0QsR0FBRztNQUNyQixDQUFDO01BQ0RWLFNBQVMsRUFBRSxTQUFBQSxDQUFVeEMsR0FBRyxFQUFFa0QsR0FBRyxFQUFFO1FBQzdCSCxNQUFNLENBQUMvQyxHQUFHLENBQUMsR0FBR2tELEdBQUc7TUFDbkIsQ0FBQztNQUNETixRQUFRLEVBQUUsU0FBQUEsQ0FBUzVDLEdBQUcsRUFBRWlELElBQUksRUFBRTtRQUM1QkYsTUFBTSxDQUFDL0MsR0FBRyxDQUFDLEdBQUdFLFNBQVM7TUFDekI7SUFDRixDQUFDLENBQUM7SUFDRjVGLElBQUksQ0FBQ3VILFNBQVMsQ0FBQ3NCLE9BQU8sQ0FBQzdJLElBQUksQ0FBQ29ILGNBQWMsRUFBRWUsRUFBRSxFQUFFTSxNQUFNLENBQUM7RUFDekQsQ0FBQztFQUVESixLQUFLLEVBQUUsU0FBQUEsQ0FBVTVDLGtCQUFrQixFQUFFMEMsRUFBRSxFQUFFTSxNQUFNLEVBQUU7SUFDL0MsSUFBSXpJLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSThJLE9BQU8sR0FBRzlJLElBQUksQ0FBQ3NILFNBQVMsQ0FBQ2pCLEdBQUcsQ0FBQzhCLEVBQUUsQ0FBQztJQUNwQyxJQUFJRSxLQUFLLEdBQUcsS0FBSztJQUNqQixJQUFJLENBQUNTLE9BQU8sRUFBRTtNQUNaVCxLQUFLLEdBQUcsSUFBSTtNQUNaLElBQUlVLE1BQU0sQ0FBQzdILE1BQU0sQ0FBQzhILHNCQUFzQixDQUFDLElBQUksQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDeEMsb0JBQW9CLEVBQUU7UUFDbEZrRSxPQUFPLEdBQUcsSUFBSTVELGlCQUFpQixDQUFDLENBQUM7TUFDbkMsQ0FBQyxNQUFNO1FBQ0w0RCxPQUFPLEdBQUcsSUFBSTlDLG1CQUFtQixDQUFDLENBQUM7TUFDckM7TUFFQWhHLElBQUksQ0FBQ3NILFNBQVMsQ0FBQ04sR0FBRyxDQUFDbUIsRUFBRSxFQUFFVyxPQUFPLENBQUM7SUFDakM7SUFDQUEsT0FBTyxDQUFDM0QsUUFBUSxDQUFDOEQsR0FBRyxDQUFDeEQsa0JBQWtCLENBQUM7SUFDeEMsSUFBSUUsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUN4QjVHLENBQUMsQ0FBQzRELElBQUksQ0FBQzhGLE1BQU0sRUFBRSxVQUFVM0MsS0FBSyxFQUFFSixHQUFHLEVBQUU7TUFDbkNvRCxPQUFPLENBQUNqRCxXQUFXLENBQ2pCSixrQkFBa0IsRUFBRUMsR0FBRyxFQUFFSSxLQUFLLEVBQUVILGVBQWUsRUFBRSxJQUFJLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0lBQ0YsSUFBSTBDLEtBQUssRUFDUHJJLElBQUksQ0FBQ3VILFNBQVMsQ0FBQ2MsS0FBSyxDQUFDckksSUFBSSxDQUFDb0gsY0FBYyxFQUFFZSxFQUFFLEVBQUV4QyxlQUFlLENBQUMsQ0FBQyxLQUUvRDNGLElBQUksQ0FBQ3VILFNBQVMsQ0FBQ3NCLE9BQU8sQ0FBQzdJLElBQUksQ0FBQ29ILGNBQWMsRUFBRWUsRUFBRSxFQUFFeEMsZUFBZSxDQUFDO0VBQ3BFLENBQUM7RUFFRGtELE9BQU8sRUFBRSxTQUFBQSxDQUFVcEQsa0JBQWtCLEVBQUUwQyxFQUFFLEVBQUVVLE9BQU8sRUFBRTtJQUNsRCxJQUFJN0ksSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJa0osYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJSixPQUFPLEdBQUc5SSxJQUFJLENBQUNzSCxTQUFTLENBQUNqQixHQUFHLENBQUM4QixFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDVyxPQUFPLEVBQ1YsTUFBTSxJQUFJSyxLQUFLLENBQUMsaUNBQWlDLEdBQUdoQixFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQ3hFcEosQ0FBQyxDQUFDNEQsSUFBSSxDQUFDa0csT0FBTyxFQUFFLFVBQVUvQyxLQUFLLEVBQUVKLEdBQUcsRUFBRTtNQUNwQyxJQUFJSSxLQUFLLEtBQUtGLFNBQVMsRUFDckJrRCxPQUFPLENBQUN0RCxVQUFVLENBQUNDLGtCQUFrQixFQUFFQyxHQUFHLEVBQUV3RCxhQUFhLENBQUMsQ0FBQyxLQUUzREosT0FBTyxDQUFDakQsV0FBVyxDQUFDSixrQkFBa0IsRUFBRUMsR0FBRyxFQUFFSSxLQUFLLEVBQUVvRCxhQUFhLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0lBQ0ZsSixJQUFJLENBQUN1SCxTQUFTLENBQUNzQixPQUFPLENBQUM3SSxJQUFJLENBQUNvSCxjQUFjLEVBQUVlLEVBQUUsRUFBRWUsYUFBYSxDQUFDO0VBQ2hFLENBQUM7RUFFRFYsT0FBTyxFQUFFLFNBQUFBLENBQVUvQyxrQkFBa0IsRUFBRTBDLEVBQUUsRUFBRTtJQUN6QyxJQUFJbkksSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJOEksT0FBTyxHQUFHOUksSUFBSSxDQUFDc0gsU0FBUyxDQUFDakIsR0FBRyxDQUFDOEIsRUFBRSxDQUFDO0lBQ3BDLElBQUksQ0FBQ1csT0FBTyxFQUFFO01BQ1osSUFBSU0sR0FBRyxHQUFHLElBQUlELEtBQUssQ0FBQywrQkFBK0IsR0FBR2hCLEVBQUUsQ0FBQztNQUN6RCxNQUFNaUIsR0FBRztJQUNYO0lBQ0FOLE9BQU8sQ0FBQzNELFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQ2xCLGtCQUFrQixDQUFDO0lBQzNDLElBQUlxRCxPQUFPLENBQUMzRCxRQUFRLENBQUN1QyxJQUFJLEtBQUssQ0FBQyxFQUFFO01BQy9CO01BQ0ExSCxJQUFJLENBQUN1SCxTQUFTLENBQUNpQixPQUFPLENBQUN4SSxJQUFJLENBQUNvSCxjQUFjLEVBQUVlLEVBQUUsQ0FBQztNQUMvQ25JLElBQUksQ0FBQ3NILFNBQVMsQ0FBQ1gsTUFBTSxDQUFDd0IsRUFBRSxDQUFDO0lBQzNCLENBQUMsTUFBTTtNQUNMLElBQUlVLE9BQU8sR0FBRyxDQUFDLENBQUM7TUFDaEI7TUFDQTtNQUNBQyxPQUFPLENBQUN6RCxTQUFTLENBQUNsQyxPQUFPLENBQUMsVUFBVWlELGNBQWMsRUFBRVYsR0FBRyxFQUFFO1FBQ3ZEb0QsT0FBTyxDQUFDdEQsVUFBVSxDQUFDQyxrQkFBa0IsRUFBRUMsR0FBRyxFQUFFbUQsT0FBTyxDQUFDO01BQ3RELENBQUMsQ0FBQztNQUVGN0ksSUFBSSxDQUFDdUgsU0FBUyxDQUFDc0IsT0FBTyxDQUFDN0ksSUFBSSxDQUFDb0gsY0FBYyxFQUFFZSxFQUFFLEVBQUVVLE9BQU8sQ0FBQztJQUMxRDtFQUNGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTs7QUFFQSxJQUFJUSxPQUFPLEdBQUcsU0FBQUEsQ0FBVW5JLE1BQU0sRUFBRW9JLE9BQU8sRUFBRTFILE1BQU0sRUFBRTJILE9BQU8sRUFBRTtFQUN4RCxJQUFJdkosSUFBSSxHQUFHLElBQUk7RUFDZkEsSUFBSSxDQUFDbUksRUFBRSxHQUFHcUIsTUFBTSxDQUFDckIsRUFBRSxDQUFDLENBQUM7RUFFckJuSSxJQUFJLENBQUNrQixNQUFNLEdBQUdBLE1BQU07RUFDcEJsQixJQUFJLENBQUNzSixPQUFPLEdBQUdBLE9BQU87RUFFdEJ0SixJQUFJLENBQUN5SixXQUFXLEdBQUcsS0FBSztFQUN4QnpKLElBQUksQ0FBQzRCLE1BQU0sR0FBR0EsTUFBTTs7RUFFcEI7RUFDQTtFQUNBNUIsSUFBSSxDQUFDMEosT0FBTyxHQUFHLElBQUlYLE1BQU0sQ0FBQ1ksaUJBQWlCLENBQUMsQ0FBQztFQUU3QzNKLElBQUksQ0FBQzRKLE9BQU8sR0FBRyxLQUFLO0VBQ3BCNUosSUFBSSxDQUFDNkosYUFBYSxHQUFHLEtBQUs7RUFFMUI3SixJQUFJLENBQUM4SixhQUFhLEdBQUcsSUFBSTs7RUFFekI7RUFDQTlKLElBQUksQ0FBQytKLFVBQVUsR0FBRyxJQUFJekUsR0FBRyxDQUFDLENBQUM7RUFDM0J0RixJQUFJLENBQUNnSyxjQUFjLEdBQUcsRUFBRTtFQUV4QmhLLElBQUksQ0FBQ2lLLE1BQU0sR0FBRyxJQUFJO0VBRWxCakssSUFBSSxDQUFDa0ssZUFBZSxHQUFHLElBQUk1RSxHQUFHLENBQUMsQ0FBQzs7RUFFaEM7RUFDQTtFQUNBO0VBQ0F0RixJQUFJLENBQUNtSyxVQUFVLEdBQUcsSUFBSTs7RUFFdEI7RUFDQTtFQUNBbkssSUFBSSxDQUFDb0ssMEJBQTBCLEdBQUcsS0FBSzs7RUFFdkM7RUFDQTtFQUNBcEssSUFBSSxDQUFDcUssYUFBYSxHQUFHLEVBQUU7O0VBRXZCO0VBQ0FySyxJQUFJLENBQUNzSyxlQUFlLEdBQUcsRUFBRTs7RUFHekI7RUFDQTtFQUNBdEssSUFBSSxDQUFDdUssVUFBVSxHQUFHM0ksTUFBTSxDQUFDaUMsR0FBRzs7RUFFNUI7RUFDQTdELElBQUksQ0FBQ3dLLGVBQWUsR0FBR2pCLE9BQU8sQ0FBQ2tCLGNBQWM7O0VBRTdDO0VBQ0E7RUFDQTtFQUNBekssSUFBSSxDQUFDMEssZ0JBQWdCLEdBQUc7SUFDdEJ2QyxFQUFFLEVBQUVuSSxJQUFJLENBQUNtSSxFQUFFO0lBQ1h3QyxLQUFLLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO01BQ2pCM0ssSUFBSSxDQUFDMkssS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxTQUFBQSxDQUFVQyxFQUFFLEVBQUU7TUFDckIsSUFBSUMsRUFBRSxHQUFHL0IsTUFBTSxDQUFDZ0MsZUFBZSxDQUFDRixFQUFFLEVBQUUsNkJBQTZCLENBQUM7TUFDbEUsSUFBSTdLLElBQUksQ0FBQzBKLE9BQU8sRUFBRTtRQUNoQjFKLElBQUksQ0FBQ3NLLGVBQWUsQ0FBQzlLLElBQUksQ0FBQ3NMLEVBQUUsQ0FBQztNQUMvQixDQUFDLE1BQU07UUFDTDtRQUNBL0IsTUFBTSxDQUFDaUMsS0FBSyxDQUFDRixFQUFFLENBQUM7TUFDbEI7SUFDRixDQUFDO0lBQ0RHLGFBQWEsRUFBRWpMLElBQUksQ0FBQ2tMLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDQyxXQUFXLEVBQUVuTCxJQUFJLENBQUM0QixNQUFNLENBQUN3SjtFQUMzQixDQUFDO0VBRURwTCxJQUFJLENBQUNvQyxJQUFJLENBQUM7SUFBRWlKLEdBQUcsRUFBRSxXQUFXO0lBQUVDLE9BQU8sRUFBRXRMLElBQUksQ0FBQ21JO0VBQUcsQ0FBQyxDQUFDOztFQUVqRDtFQUNBMUQsS0FBSyxDQUFDLFlBQVk7SUFDaEJ6RSxJQUFJLENBQUN1TCxrQkFBa0IsQ0FBQyxDQUFDO0VBQzNCLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUVSLElBQUlsQyxPQUFPLEtBQUssTUFBTSxJQUFJQyxPQUFPLENBQUNrQyxpQkFBaUIsS0FBSyxDQUFDLEVBQUU7SUFDekQ7SUFDQTdKLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBRTdCN0IsSUFBSSxDQUFDMEwsU0FBUyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDO01BQ3ZDSCxpQkFBaUIsRUFBRWxDLE9BQU8sQ0FBQ2tDLGlCQUFpQjtNQUM1Q0ksZ0JBQWdCLEVBQUV0QyxPQUFPLENBQUNzQyxnQkFBZ0I7TUFDMUNDLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVk7UUFDckI5TCxJQUFJLENBQUMySyxLQUFLLENBQUMsQ0FBQztNQUNkLENBQUM7TUFDRG9CLFFBQVEsRUFBRSxTQUFBQSxDQUFBLEVBQVk7UUFDcEIvTCxJQUFJLENBQUNvQyxJQUFJLENBQUM7VUFBQ2lKLEdBQUcsRUFBRTtRQUFNLENBQUMsQ0FBQztNQUMxQjtJQUNGLENBQUMsQ0FBQztJQUNGckwsSUFBSSxDQUFDMEwsU0FBUyxDQUFDTSxLQUFLLENBQUMsQ0FBQztFQUN4QjtFQUVBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUlBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxtQkFBbUIsQ0FDdEUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEdEosTUFBTSxDQUFDQyxNQUFNLENBQUN1RyxPQUFPLENBQUN0RyxTQUFTLEVBQUU7RUFFL0JxSixTQUFTLEVBQUUsU0FBQUEsQ0FBVUMsZUFBZSxFQUFFO0lBQ3BDLElBQUlyTSxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlBLElBQUksQ0FBQ21LLFVBQVUsRUFDakJuSyxJQUFJLENBQUNvQyxJQUFJLENBQUM7TUFBQ2lKLEdBQUcsRUFBRSxPQUFPO01BQUVpQixJQUFJLEVBQUVEO0lBQWUsQ0FBQyxDQUFDLENBQUMsS0FDOUM7TUFDSHROLENBQUMsQ0FBQzRELElBQUksQ0FBQzBKLGVBQWUsRUFBRSxVQUFVRSxjQUFjLEVBQUU7UUFDaER2TSxJQUFJLENBQUNxSyxhQUFhLENBQUM3SyxJQUFJLENBQUMrTSxjQUFjLENBQUM7TUFDekMsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURDLFFBQVFBLENBQUNwRixjQUFjLEVBQUU7SUFDdkIsT0FBTyxJQUFJLENBQUMrQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNqSixNQUFNLENBQUM4SCxzQkFBc0IsQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDdkMsaUJBQWlCO0VBQ2pHLENBQUM7RUFHRDRILFNBQVNBLENBQUNyRixjQUFjLEVBQUVlLEVBQUUsRUFBRU0sTUFBTSxFQUFFO0lBQ3BDLElBQUksSUFBSSxDQUFDK0QsUUFBUSxDQUFDcEYsY0FBYyxDQUFDLEVBQy9CLElBQUksQ0FBQ2hGLElBQUksQ0FBQztNQUFDaUosR0FBRyxFQUFFLE9BQU87TUFBRXFCLFVBQVUsRUFBRXRGLGNBQWM7TUFBRWUsRUFBRTtNQUFFTTtJQUFNLENBQUMsQ0FBQztFQUNyRSxDQUFDO0VBRURrRSxXQUFXQSxDQUFDdkYsY0FBYyxFQUFFZSxFQUFFLEVBQUVNLE1BQU0sRUFBRTtJQUN0QyxJQUFJMUosQ0FBQyxDQUFDMEksT0FBTyxDQUFDZ0IsTUFBTSxDQUFDLEVBQ25CO0lBRUYsSUFBSSxJQUFJLENBQUMrRCxRQUFRLENBQUNwRixjQUFjLENBQUMsRUFBRTtNQUNqQyxJQUFJLENBQUNoRixJQUFJLENBQUM7UUFDUmlKLEdBQUcsRUFBRSxTQUFTO1FBQ2RxQixVQUFVLEVBQUV0RixjQUFjO1FBQzFCZSxFQUFFO1FBQ0ZNO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURtRSxXQUFXQSxDQUFDeEYsY0FBYyxFQUFFZSxFQUFFLEVBQUU7SUFDOUIsSUFBSSxJQUFJLENBQUNxRSxRQUFRLENBQUNwRixjQUFjLENBQUMsRUFDL0IsSUFBSSxDQUFDaEYsSUFBSSxDQUFDO01BQUNpSixHQUFHLEVBQUUsU0FBUztNQUFFcUIsVUFBVSxFQUFFdEYsY0FBYztNQUFFZTtJQUFFLENBQUMsQ0FBQztFQUMvRCxDQUFDO0VBRUQwRSxnQkFBZ0IsRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDNUIsSUFBSTdNLElBQUksR0FBRyxJQUFJO0lBQ2YsT0FBTztNQUNMcUksS0FBSyxFQUFFdEosQ0FBQyxDQUFDaUosSUFBSSxDQUFDaEksSUFBSSxDQUFDeU0sU0FBUyxFQUFFek0sSUFBSSxDQUFDO01BQ25DNkksT0FBTyxFQUFFOUosQ0FBQyxDQUFDaUosSUFBSSxDQUFDaEksSUFBSSxDQUFDMk0sV0FBVyxFQUFFM00sSUFBSSxDQUFDO01BQ3ZDd0ksT0FBTyxFQUFFekosQ0FBQyxDQUFDaUosSUFBSSxDQUFDaEksSUFBSSxDQUFDNE0sV0FBVyxFQUFFNU0sSUFBSTtJQUN4QyxDQUFDO0VBQ0gsQ0FBQztFQUVEOE0saUJBQWlCLEVBQUUsU0FBQUEsQ0FBVTFGLGNBQWMsRUFBRTtJQUMzQyxJQUFJcEgsSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJbUcsR0FBRyxHQUFHbkcsSUFBSSxDQUFDa0ssZUFBZSxDQUFDN0QsR0FBRyxDQUFDZSxjQUFjLENBQUM7SUFDbEQsSUFBSSxDQUFDakIsR0FBRyxFQUFFO01BQ1JBLEdBQUcsR0FBRyxJQUFJZ0IscUJBQXFCLENBQUNDLGNBQWMsRUFDWnBILElBQUksQ0FBQzZNLGdCQUFnQixDQUFDLENBQUMsQ0FBQztNQUMxRDdNLElBQUksQ0FBQ2tLLGVBQWUsQ0FBQ2xELEdBQUcsQ0FBQ0ksY0FBYyxFQUFFakIsR0FBRyxDQUFDO0lBQy9DO0lBQ0EsT0FBT0EsR0FBRztFQUNaLENBQUM7RUFFRGtDLEtBQUtBLENBQUM1QyxrQkFBa0IsRUFBRTJCLGNBQWMsRUFBRWUsRUFBRSxFQUFFTSxNQUFNLEVBQUU7SUFDcEQsSUFBSSxJQUFJLENBQUN2SCxNQUFNLENBQUM4SCxzQkFBc0IsQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDdkMsaUJBQWlCLEVBQUU7TUFDeEUsTUFBTWtJLElBQUksR0FBRyxJQUFJLENBQUNELGlCQUFpQixDQUFDMUYsY0FBYyxDQUFDO01BQ25EMkYsSUFBSSxDQUFDMUUsS0FBSyxDQUFDNUMsa0JBQWtCLEVBQUUwQyxFQUFFLEVBQUVNLE1BQU0sQ0FBQztJQUM1QyxDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNnRSxTQUFTLENBQUNyRixjQUFjLEVBQUVlLEVBQUUsRUFBRU0sTUFBTSxDQUFDO0lBQzVDO0VBQ0YsQ0FBQztFQUVERCxPQUFPQSxDQUFDL0Msa0JBQWtCLEVBQUUyQixjQUFjLEVBQUVlLEVBQUUsRUFBRTtJQUM5QyxJQUFJLElBQUksQ0FBQ2pILE1BQU0sQ0FBQzhILHNCQUFzQixDQUFDNUIsY0FBYyxDQUFDLENBQUN2QyxpQkFBaUIsRUFBRTtNQUN4RSxNQUFNa0ksSUFBSSxHQUFHLElBQUksQ0FBQ0QsaUJBQWlCLENBQUMxRixjQUFjLENBQUM7TUFDbkQyRixJQUFJLENBQUN2RSxPQUFPLENBQUMvQyxrQkFBa0IsRUFBRTBDLEVBQUUsQ0FBQztNQUNwQyxJQUFJNEUsSUFBSSxDQUFDdEYsT0FBTyxDQUFDLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUN5QyxlQUFlLENBQUN2RCxNQUFNLENBQUNTLGNBQWMsQ0FBQztNQUM5QztJQUNGLENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQ3dGLFdBQVcsQ0FBQ3hGLGNBQWMsRUFBRWUsRUFBRSxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQztFQUVEVSxPQUFPQSxDQUFDcEQsa0JBQWtCLEVBQUUyQixjQUFjLEVBQUVlLEVBQUUsRUFBRU0sTUFBTSxFQUFFO0lBQ3RELElBQUksSUFBSSxDQUFDdkgsTUFBTSxDQUFDOEgsc0JBQXNCLENBQUM1QixjQUFjLENBQUMsQ0FBQ3ZDLGlCQUFpQixFQUFFO01BQ3hFLE1BQU1rSSxJQUFJLEdBQUcsSUFBSSxDQUFDRCxpQkFBaUIsQ0FBQzFGLGNBQWMsQ0FBQztNQUNuRDJGLElBQUksQ0FBQ2xFLE9BQU8sQ0FBQ3BELGtCQUFrQixFQUFFMEMsRUFBRSxFQUFFTSxNQUFNLENBQUM7SUFDOUMsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDa0UsV0FBVyxDQUFDdkYsY0FBYyxFQUFFZSxFQUFFLEVBQUVNLE1BQU0sQ0FBQztJQUM5QztFQUNGLENBQUM7RUFFRDhDLGtCQUFrQixFQUFFLFNBQUFBLENBQUEsRUFBWTtJQUM5QixJQUFJdkwsSUFBSSxHQUFHLElBQUk7SUFDZjtJQUNBO0lBQ0E7SUFDQSxJQUFJZ04sUUFBUSxHQUFHak8sQ0FBQyxDQUFDK0gsS0FBSyxDQUFDOUcsSUFBSSxDQUFDa0IsTUFBTSxDQUFDK0wsMEJBQTBCLENBQUM7SUFDOURsTyxDQUFDLENBQUM0RCxJQUFJLENBQUNxSyxRQUFRLEVBQUUsVUFBVUUsT0FBTyxFQUFFO01BQ2xDbE4sSUFBSSxDQUFDbU4sa0JBQWtCLENBQUNELE9BQU8sQ0FBQztJQUNsQyxDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQ7RUFDQXZDLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDakIsSUFBSTNLLElBQUksR0FBRyxJQUFJOztJQUVmO0lBQ0E7SUFDQTs7SUFFQTtJQUNBLElBQUksQ0FBRUEsSUFBSSxDQUFDMEosT0FBTyxFQUNoQjs7SUFFRjtJQUNBMUosSUFBSSxDQUFDMEosT0FBTyxHQUFHLElBQUk7SUFDbkIxSixJQUFJLENBQUNrSyxlQUFlLEdBQUcsSUFBSTVFLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLElBQUl0RixJQUFJLENBQUMwTCxTQUFTLEVBQUU7TUFDbEIxTCxJQUFJLENBQUMwTCxTQUFTLENBQUMwQixJQUFJLENBQUMsQ0FBQztNQUNyQnBOLElBQUksQ0FBQzBMLFNBQVMsR0FBRyxJQUFJO0lBQ3ZCO0lBRUEsSUFBSTFMLElBQUksQ0FBQzRCLE1BQU0sRUFBRTtNQUNmNUIsSUFBSSxDQUFDNEIsTUFBTSxDQUFDK0ksS0FBSyxDQUFDLENBQUM7TUFDbkIzSyxJQUFJLENBQUM0QixNQUFNLENBQUN5TCxjQUFjLEdBQUcsSUFBSTtJQUNuQztJQUVBcEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJQSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsbUJBQW1CLENBQ3RFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0JwRCxNQUFNLENBQUNpQyxLQUFLLENBQUMsWUFBWTtNQUN2QjtNQUNBO01BQ0E7TUFDQWhMLElBQUksQ0FBQ3NOLDJCQUEyQixDQUFDLENBQUM7O01BRWxDO01BQ0E7TUFDQXZPLENBQUMsQ0FBQzRELElBQUksQ0FBQzNDLElBQUksQ0FBQ3NLLGVBQWUsRUFBRSxVQUFVMUgsUUFBUSxFQUFFO1FBQy9DQSxRQUFRLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBNUMsSUFBSSxDQUFDa0IsTUFBTSxDQUFDcU0sY0FBYyxDQUFDdk4sSUFBSSxDQUFDO0VBQ2xDLENBQUM7RUFFRDtFQUNBO0VBQ0FvQyxJQUFJLEVBQUUsU0FBQUEsQ0FBVWlKLEdBQUcsRUFBRTtJQUNuQixJQUFJckwsSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJQSxJQUFJLENBQUM0QixNQUFNLEVBQUU7TUFDZixJQUFJbUgsTUFBTSxDQUFDeUUsYUFBYSxFQUN0QnpFLE1BQU0sQ0FBQzBFLE1BQU0sQ0FBQyxVQUFVLEVBQUU5QixTQUFTLENBQUMrQixZQUFZLENBQUNyQyxHQUFHLENBQUMsQ0FBQztNQUN4RHJMLElBQUksQ0FBQzRCLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDdUosU0FBUyxDQUFDK0IsWUFBWSxDQUFDckMsR0FBRyxDQUFDLENBQUM7SUFDL0M7RUFDRixDQUFDO0VBRUQ7RUFDQXNDLFNBQVMsRUFBRSxTQUFBQSxDQUFVQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFO0lBQzdDLElBQUk3TixJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlxTCxHQUFHLEdBQUc7TUFBQ0EsR0FBRyxFQUFFLE9BQU87TUFBRXVDLE1BQU0sRUFBRUE7SUFBTSxDQUFDO0lBQ3hDLElBQUlDLGdCQUFnQixFQUNsQnhDLEdBQUcsQ0FBQ3dDLGdCQUFnQixHQUFHQSxnQkFBZ0I7SUFDekM3TixJQUFJLENBQUNvQyxJQUFJLENBQUNpSixHQUFHLENBQUM7RUFDaEIsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBeUMsY0FBYyxFQUFFLFNBQUFBLENBQVVDLE1BQU0sRUFBRTtJQUNoQyxJQUFJL04sSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJLENBQUNBLElBQUksQ0FBQzBKLE9BQU87TUFBRTtNQUNqQjs7SUFFRjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJMUosSUFBSSxDQUFDMEwsU0FBUyxFQUFFO01BQ2xCakgsS0FBSyxDQUFDLFlBQVk7UUFDaEJ6RSxJQUFJLENBQUMwTCxTQUFTLENBQUNzQyxlQUFlLENBQUMsQ0FBQztNQUNsQyxDQUFDLENBQUMsQ0FBQ3hDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Y7SUFFQSxJQUFJeEwsSUFBSSxDQUFDc0osT0FBTyxLQUFLLE1BQU0sSUFBSXlFLE1BQU0sQ0FBQzFDLEdBQUcsS0FBSyxNQUFNLEVBQUU7TUFDcEQsSUFBSXJMLElBQUksQ0FBQ3dLLGVBQWUsRUFDdEJ4SyxJQUFJLENBQUNvQyxJQUFJLENBQUM7UUFBQ2lKLEdBQUcsRUFBRSxNQUFNO1FBQUVsRCxFQUFFLEVBQUU0RixNQUFNLENBQUM1RjtNQUFFLENBQUMsQ0FBQztNQUN6QztJQUNGO0lBQ0EsSUFBSW5JLElBQUksQ0FBQ3NKLE9BQU8sS0FBSyxNQUFNLElBQUl5RSxNQUFNLENBQUMxQyxHQUFHLEtBQUssTUFBTSxFQUFFO01BQ3BEO01BQ0E7SUFDRjtJQUVBckwsSUFBSSxDQUFDMEosT0FBTyxDQUFDbEssSUFBSSxDQUFDdU8sTUFBTSxDQUFDO0lBQ3pCLElBQUkvTixJQUFJLENBQUM2SixhQUFhLEVBQ3BCO0lBQ0Y3SixJQUFJLENBQUM2SixhQUFhLEdBQUcsSUFBSTtJQUV6QixJQUFJb0UsV0FBVyxHQUFHLFNBQUFBLENBQUEsRUFBWTtNQUM1QixJQUFJNUMsR0FBRyxHQUFHckwsSUFBSSxDQUFDMEosT0FBTyxJQUFJMUosSUFBSSxDQUFDMEosT0FBTyxDQUFDd0UsS0FBSyxDQUFDLENBQUM7TUFDOUMsSUFBSSxDQUFDN0MsR0FBRyxFQUFFO1FBQ1JyTCxJQUFJLENBQUM2SixhQUFhLEdBQUcsS0FBSztRQUMxQjtNQUNGO01BRUFwRixLQUFLLENBQUMsWUFBWTtRQUNoQixJQUFJbUYsT0FBTyxHQUFHLElBQUk7UUFFbEIsSUFBSXVFLE9BQU8sR0FBRyxTQUFBQSxDQUFBLEVBQVk7VUFDeEIsSUFBSSxDQUFDdkUsT0FBTyxFQUNWLE9BQU8sQ0FBQztVQUNWQSxPQUFPLEdBQUcsS0FBSztVQUNmcUUsV0FBVyxDQUFDLENBQUM7UUFDZixDQUFDO1FBRURqTyxJQUFJLENBQUNrQixNQUFNLENBQUNrTixhQUFhLENBQUN6TCxJQUFJLENBQUMsVUFBVUMsUUFBUSxFQUFFO1VBQ2pEQSxRQUFRLENBQUN5SSxHQUFHLEVBQUVyTCxJQUFJLENBQUM7VUFDbkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxDQUFDO1FBRUYsSUFBSWpCLENBQUMsQ0FBQ2dJLEdBQUcsQ0FBQy9HLElBQUksQ0FBQ3FPLGlCQUFpQixFQUFFaEQsR0FBRyxDQUFDQSxHQUFHLENBQUMsRUFDeENyTCxJQUFJLENBQUNxTyxpQkFBaUIsQ0FBQ2hELEdBQUcsQ0FBQ0EsR0FBRyxDQUFDLENBQUNpRCxJQUFJLENBQUN0TyxJQUFJLEVBQUVxTCxHQUFHLEVBQUU4QyxPQUFPLENBQUMsQ0FBQyxLQUV6RG5PLElBQUksQ0FBQzJOLFNBQVMsQ0FBQyxhQUFhLEVBQUV0QyxHQUFHLENBQUM7UUFDcEM4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDYixDQUFDLENBQUMsQ0FBQzNDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVEeUMsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDO0VBRURJLGlCQUFpQixFQUFFO0lBQ2pCRSxHQUFHLEVBQUUsU0FBQUEsQ0FBVWxELEdBQUcsRUFBRThDLE9BQU8sRUFBRTtNQUMzQixJQUFJbk8sSUFBSSxHQUFHLElBQUk7O01BRWY7TUFDQTtNQUNBQSxJQUFJLENBQUM4SixhQUFhLEdBQUdxRSxPQUFPOztNQUU1QjtNQUNBLElBQUksT0FBUTlDLEdBQUcsQ0FBQ2xELEVBQUcsS0FBSyxRQUFRLElBQzVCLE9BQVFrRCxHQUFHLENBQUNtRCxJQUFLLEtBQUssUUFBUSxJQUM1QixRQUFRLElBQUluRCxHQUFHLElBQUssRUFBRUEsR0FBRyxDQUFDb0QsTUFBTSxZQUFZQyxLQUFLLENBQUUsRUFBRTtRQUN6RDFPLElBQUksQ0FBQzJOLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRXRDLEdBQUcsQ0FBQztRQUM3QztNQUNGO01BRUEsSUFBSSxDQUFDckwsSUFBSSxDQUFDa0IsTUFBTSxDQUFDeU4sZ0JBQWdCLENBQUN0RCxHQUFHLENBQUNtRCxJQUFJLENBQUMsRUFBRTtRQUMzQ3hPLElBQUksQ0FBQ29DLElBQUksQ0FBQztVQUNSaUosR0FBRyxFQUFFLE9BQU87VUFBRWxELEVBQUUsRUFBRWtELEdBQUcsQ0FBQ2xELEVBQUU7VUFDeEJ5RyxLQUFLLEVBQUUsSUFBSTdGLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsbUJBQUEwRixNQUFBLENBQW1CeEQsR0FBRyxDQUFDbUQsSUFBSSxnQkFBYTtRQUFDLENBQUMsQ0FBQztRQUN4RTtNQUNGO01BRUEsSUFBSXhPLElBQUksQ0FBQytKLFVBQVUsQ0FBQ2hELEdBQUcsQ0FBQ3NFLEdBQUcsQ0FBQ2xELEVBQUUsQ0FBQztRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7TUFFRjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSThELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQy9CLElBQUk2QyxjQUFjLEdBQUc3QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzZDLGNBQWM7UUFDL0QsSUFBSUMsZ0JBQWdCLEdBQUc7VUFDckI5RSxNQUFNLEVBQUVqSyxJQUFJLENBQUNpSyxNQUFNO1VBQ25CZ0IsYUFBYSxFQUFFakwsSUFBSSxDQUFDMEssZ0JBQWdCLENBQUNPLGFBQWE7VUFDbEQrRCxJQUFJLEVBQUUsY0FBYztVQUNwQlIsSUFBSSxFQUFFbkQsR0FBRyxDQUFDbUQsSUFBSTtVQUNkUyxZQUFZLEVBQUVqUCxJQUFJLENBQUNtSTtRQUNyQixDQUFDO1FBRUQyRyxjQUFjLENBQUNJLFVBQVUsQ0FBQ0gsZ0JBQWdCLENBQUM7UUFDM0MsSUFBSUksZUFBZSxHQUFHTCxjQUFjLENBQUNNLE1BQU0sQ0FBQ0wsZ0JBQWdCLENBQUM7UUFDN0QsSUFBSSxDQUFDSSxlQUFlLENBQUNFLE9BQU8sRUFBRTtVQUM1QnJQLElBQUksQ0FBQ29DLElBQUksQ0FBQztZQUNSaUosR0FBRyxFQUFFLE9BQU87WUFBRWxELEVBQUUsRUFBRWtELEdBQUcsQ0FBQ2xELEVBQUU7WUFDeEJ5RyxLQUFLLEVBQUUsSUFBSTdGLE1BQU0sQ0FBQ0ksS0FBSyxDQUNyQixtQkFBbUIsRUFDbkIyRixjQUFjLENBQUNRLGVBQWUsQ0FBQ0gsZUFBZSxDQUFDLEVBQy9DO2NBQUNJLFdBQVcsRUFBRUosZUFBZSxDQUFDSTtZQUFXLENBQUM7VUFDOUMsQ0FBQyxDQUFDO1VBQ0Y7UUFDRjtNQUNGO01BRUEsSUFBSXJDLE9BQU8sR0FBR2xOLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ3lOLGdCQUFnQixDQUFDdEQsR0FBRyxDQUFDbUQsSUFBSSxDQUFDO01BRXBEeE8sSUFBSSxDQUFDbU4sa0JBQWtCLENBQUNELE9BQU8sRUFBRTdCLEdBQUcsQ0FBQ2xELEVBQUUsRUFBRWtELEdBQUcsQ0FBQ29ELE1BQU0sRUFBRXBELEdBQUcsQ0FBQ21ELElBQUksQ0FBQzs7TUFFOUQ7TUFDQXhPLElBQUksQ0FBQzhKLGFBQWEsR0FBRyxJQUFJO0lBQzNCLENBQUM7SUFFRDBGLEtBQUssRUFBRSxTQUFBQSxDQUFVbkUsR0FBRyxFQUFFO01BQ3BCLElBQUlyTCxJQUFJLEdBQUcsSUFBSTtNQUVmQSxJQUFJLENBQUN5UCxpQkFBaUIsQ0FBQ3BFLEdBQUcsQ0FBQ2xELEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUR1SCxNQUFNLEVBQUUsU0FBQUEsQ0FBVXJFLEdBQUcsRUFBRThDLE9BQU8sRUFBRTtNQUM5QixJQUFJbk8sSUFBSSxHQUFHLElBQUk7O01BRWY7TUFDQTtNQUNBO01BQ0EsSUFBSSxPQUFRcUwsR0FBRyxDQUFDbEQsRUFBRyxLQUFLLFFBQVEsSUFDNUIsT0FBUWtELEdBQUcsQ0FBQ3FFLE1BQU8sS0FBSyxRQUFRLElBQzlCLFFBQVEsSUFBSXJFLEdBQUcsSUFBSyxFQUFFQSxHQUFHLENBQUNvRCxNQUFNLFlBQVlDLEtBQUssQ0FBRSxJQUNuRCxZQUFZLElBQUlyRCxHQUFHLElBQU0sT0FBT0EsR0FBRyxDQUFDc0UsVUFBVSxLQUFLLFFBQVUsRUFBRTtRQUNuRTNQLElBQUksQ0FBQzJOLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRXRDLEdBQUcsQ0FBQztRQUNsRDtNQUNGO01BRUEsSUFBSXNFLFVBQVUsR0FBR3RFLEdBQUcsQ0FBQ3NFLFVBQVUsSUFBSSxJQUFJOztNQUV2QztNQUNBO01BQ0E7TUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSXBMLFNBQVMsQ0FBQ3FMLFdBQVcsQ0FBRCxDQUFDO01BQ3JDRCxLQUFLLENBQUNFLGNBQWMsQ0FBQyxZQUFZO1FBQy9CO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQUYsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztRQUNkL1AsSUFBSSxDQUFDb0MsSUFBSSxDQUFDO1VBQ1JpSixHQUFHLEVBQUUsU0FBUztVQUFFMkUsT0FBTyxFQUFFLENBQUMzRSxHQUFHLENBQUNsRCxFQUFFO1FBQUMsQ0FBQyxDQUFDO01BQ3ZDLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUkrRSxPQUFPLEdBQUdsTixJQUFJLENBQUNrQixNQUFNLENBQUMrTyxlQUFlLENBQUM1RSxHQUFHLENBQUNxRSxNQUFNLENBQUM7TUFDckQsSUFBSSxDQUFDeEMsT0FBTyxFQUFFO1FBQ1psTixJQUFJLENBQUNvQyxJQUFJLENBQUM7VUFDUmlKLEdBQUcsRUFBRSxRQUFRO1VBQUVsRCxFQUFFLEVBQUVrRCxHQUFHLENBQUNsRCxFQUFFO1VBQ3pCeUcsS0FBSyxFQUFFLElBQUk3RixNQUFNLENBQUNJLEtBQUssQ0FBQyxHQUFHLGFBQUEwRixNQUFBLENBQWF4RCxHQUFHLENBQUNxRSxNQUFNLGdCQUFhO1FBQUMsQ0FBQyxDQUFDO1FBQ3BFRSxLQUFLLENBQUNNLEdBQUcsQ0FBQyxDQUFDO1FBQ1g7TUFDRjtNQUVBLElBQUlDLFNBQVMsR0FBRyxTQUFBQSxDQUFTbEcsTUFBTSxFQUFFO1FBQy9CakssSUFBSSxDQUFDb1EsVUFBVSxDQUFDbkcsTUFBTSxDQUFDO01BQ3pCLENBQUM7TUFFRCxJQUFJb0csVUFBVSxHQUFHLElBQUkxRSxTQUFTLENBQUMyRSxnQkFBZ0IsQ0FBQztRQUM5QzlCLElBQUksRUFBRW5ELEdBQUcsQ0FBQ3FFLE1BQU07UUFDaEJhLFlBQVksRUFBRSxLQUFLO1FBQ25CdEcsTUFBTSxFQUFFakssSUFBSSxDQUFDaUssTUFBTTtRQUNuQmtHLFNBQVMsRUFBRUEsU0FBUztRQUNwQmhDLE9BQU8sRUFBRUEsT0FBTztRQUNoQmpNLFVBQVUsRUFBRWxDLElBQUksQ0FBQzBLLGdCQUFnQjtRQUNqQ2lGLFVBQVUsRUFBRUE7TUFDZCxDQUFDLENBQUM7TUFFRixNQUFNYSxPQUFPLEdBQUcsSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO1FBQy9DO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1VBQy9CLElBQUk2QyxjQUFjLEdBQUc3QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzZDLGNBQWM7VUFDL0QsSUFBSUMsZ0JBQWdCLEdBQUc7WUFDckI5RSxNQUFNLEVBQUVqSyxJQUFJLENBQUNpSyxNQUFNO1lBQ25CZ0IsYUFBYSxFQUFFakwsSUFBSSxDQUFDMEssZ0JBQWdCLENBQUNPLGFBQWE7WUFDbEQrRCxJQUFJLEVBQUUsUUFBUTtZQUNkUixJQUFJLEVBQUVuRCxHQUFHLENBQUNxRSxNQUFNO1lBQ2hCVCxZQUFZLEVBQUVqUCxJQUFJLENBQUNtSTtVQUNyQixDQUFDO1VBQ0QyRyxjQUFjLENBQUNJLFVBQVUsQ0FBQ0gsZ0JBQWdCLENBQUM7VUFDM0MsSUFBSUksZUFBZSxHQUFHTCxjQUFjLENBQUNNLE1BQU0sQ0FBQ0wsZ0JBQWdCLENBQUM7VUFDN0QsSUFBSSxDQUFDSSxlQUFlLENBQUNFLE9BQU8sRUFBRTtZQUM1QnNCLE1BQU0sQ0FBQyxJQUFJNUgsTUFBTSxDQUFDSSxLQUFLLENBQ3JCLG1CQUFtQixFQUNuQjJGLGNBQWMsQ0FBQ1EsZUFBZSxDQUFDSCxlQUFlLENBQUMsRUFDL0M7Y0FBQ0ksV0FBVyxFQUFFSixlQUFlLENBQUNJO1lBQVcsQ0FDM0MsQ0FBQyxDQUFDO1lBQ0Y7VUFDRjtRQUNGO1FBRUEsTUFBTXFCLGdDQUFnQyxHQUFHQSxDQUFBLEtBQU07VUFDN0MsTUFBTUMsY0FBYyxHQUFHQyxHQUFHLENBQUNDLHdCQUF3QixDQUFDQywyQkFBMkIsQ0FDN0VYLFVBQ0YsQ0FBQztVQUVELElBQUk7WUFDRixJQUFJWSxNQUFNO1lBQ1YsTUFBTUMsZ0JBQWdCLEdBQUdDLHdCQUF3QixDQUMvQ2pFLE9BQU8sRUFDUG1ELFVBQVUsRUFDVmhGLEdBQUcsQ0FBQ29ELE1BQU0sRUFDVixXQUFXLEdBQUdwRCxHQUFHLENBQUNxRSxNQUFNLEdBQUcsR0FDN0IsQ0FBQztZQUNELE1BQU0wQixVQUFVLEdBQ2RGLGdCQUFnQixJQUFJLE9BQU9BLGdCQUFnQixDQUFDRyxJQUFJLEtBQUssVUFBVTtZQUNqRSxJQUFJRCxVQUFVLEVBQUU7Y0FDZEgsTUFBTSxHQUFHUixPQUFPLENBQUNhLEtBQUssQ0FBQ0osZ0JBQWdCLENBQUM7WUFDMUMsQ0FBQyxNQUFNO2NBQ0xELE1BQU0sR0FBR0MsZ0JBQWdCO1lBQzNCO1lBQ0EsT0FBT0QsTUFBTTtVQUNmLENBQUMsU0FBUztZQUNSSCxHQUFHLENBQUNDLHdCQUF3QixDQUFDUSxJQUFJLENBQUNWLGNBQWMsQ0FBQztVQUNuRDtRQUNGLENBQUM7UUFFREgsT0FBTyxDQUFDbE0sU0FBUyxDQUFDZ04sa0JBQWtCLENBQUNDLFNBQVMsQ0FBQzdCLEtBQUssRUFBRWdCLGdDQUFnQyxDQUFDLENBQUM7TUFDMUYsQ0FBQyxDQUFDO01BRUYsU0FBU2MsTUFBTUEsQ0FBQSxFQUFHO1FBQ2hCOUIsS0FBSyxDQUFDTSxHQUFHLENBQUMsQ0FBQztRQUNYL0IsT0FBTyxDQUFDLENBQUM7TUFDWDtNQUVBLE1BQU13RCxPQUFPLEdBQUc7UUFDZHRHLEdBQUcsRUFBRSxRQUFRO1FBQ2JsRCxFQUFFLEVBQUVrRCxHQUFHLENBQUNsRDtNQUNWLENBQUM7TUFFRHFJLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDSixNQUFNLElBQUk7UUFDckJTLE1BQU0sQ0FBQyxDQUFDO1FBQ1IsSUFBSVQsTUFBTSxLQUFLckwsU0FBUyxFQUFFO1VBQ3hCK0wsT0FBTyxDQUFDVixNQUFNLEdBQUdBLE1BQU07UUFDekI7UUFDQWpSLElBQUksQ0FBQ29DLElBQUksQ0FBQ3VQLE9BQU8sQ0FBQztNQUNwQixDQUFDLEVBQUdDLFNBQVMsSUFBSztRQUNoQkYsTUFBTSxDQUFDLENBQUM7UUFDUkMsT0FBTyxDQUFDL0MsS0FBSyxHQUFHaUQscUJBQXFCLENBQ25DRCxTQUFTLDRCQUFBL0MsTUFBQSxDQUNpQnhELEdBQUcsQ0FBQ3FFLE1BQU0sTUFDdEMsQ0FBQztRQUNEMVAsSUFBSSxDQUFDb0MsSUFBSSxDQUFDdVAsT0FBTyxDQUFDO01BQ3BCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUVERyxRQUFRLEVBQUUsU0FBQUEsQ0FBVUMsQ0FBQyxFQUFFO0lBQ3JCLElBQUkvUixJQUFJLEdBQUcsSUFBSTtJQUNmQSxJQUFJLENBQUMrSixVQUFVLENBQUM1RyxPQUFPLENBQUM0TyxDQUFDLENBQUM7SUFDMUIvUixJQUFJLENBQUNnSyxjQUFjLENBQUM3RyxPQUFPLENBQUM0TyxDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUVEQyxvQkFBb0IsRUFBRSxTQUFBQSxDQUFVQyxTQUFTLEVBQUU7SUFDekMsSUFBSWpTLElBQUksR0FBRyxJQUFJO0lBQ2Y2SCxZQUFZLENBQUNDLFFBQVEsQ0FBQ21LLFNBQVMsRUFBRWpTLElBQUksQ0FBQ2tLLGVBQWUsRUFBRTtNQUNyRG5DLElBQUksRUFBRSxTQUFBQSxDQUFVWCxjQUFjLEVBQUU4SyxTQUFTLEVBQUVDLFVBQVUsRUFBRTtRQUNyREEsVUFBVSxDQUFDeEssSUFBSSxDQUFDdUssU0FBUyxDQUFDO01BQzVCLENBQUM7TUFDRGhLLFNBQVMsRUFBRSxTQUFBQSxDQUFVZCxjQUFjLEVBQUUrSyxVQUFVLEVBQUU7UUFDL0NBLFVBQVUsQ0FBQzdLLFNBQVMsQ0FBQ25FLE9BQU8sQ0FBQyxVQUFVMkYsT0FBTyxFQUFFWCxFQUFFLEVBQUU7VUFDbERuSSxJQUFJLENBQUN5TSxTQUFTLENBQUNyRixjQUFjLEVBQUVlLEVBQUUsRUFBRVcsT0FBTyxDQUFDdkQsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUM7TUFDSixDQUFDO01BQ0QrQyxRQUFRLEVBQUUsU0FBQUEsQ0FBVWxCLGNBQWMsRUFBRThLLFNBQVMsRUFBRTtRQUM3Q0EsU0FBUyxDQUFDNUssU0FBUyxDQUFDbkUsT0FBTyxDQUFDLFVBQVVpUCxHQUFHLEVBQUVqSyxFQUFFLEVBQUU7VUFDN0NuSSxJQUFJLENBQUM0TSxXQUFXLENBQUN4RixjQUFjLEVBQUVlLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtFQUNBO0VBQ0FpSSxVQUFVLEVBQUUsU0FBQUEsQ0FBU25HLE1BQU0sRUFBRTtJQUMzQixJQUFJakssSUFBSSxHQUFHLElBQUk7SUFFZixJQUFJaUssTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUMvQyxNQUFNLElBQUlkLEtBQUssQ0FBQyxrREFBa0QsR0FDbEQsT0FBT2MsTUFBTSxDQUFDOztJQUVoQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FqSyxJQUFJLENBQUNvSywwQkFBMEIsR0FBRyxJQUFJOztJQUV0QztJQUNBO0lBQ0FwSyxJQUFJLENBQUM4UixRQUFRLENBQUMsVUFBVXZELEdBQUcsRUFBRTtNQUMzQkEsR0FBRyxDQUFDOEQsV0FBVyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBclMsSUFBSSxDQUFDbUssVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSThILFNBQVMsR0FBR2pTLElBQUksQ0FBQ2tLLGVBQWU7SUFDcENsSyxJQUFJLENBQUNrSyxlQUFlLEdBQUcsSUFBSTVFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDdEYsSUFBSSxDQUFDaUssTUFBTSxHQUFHQSxNQUFNOztJQUVwQjtJQUNBO0lBQ0E7SUFDQTtJQUNBNkcsR0FBRyxDQUFDQyx3QkFBd0IsQ0FBQ1UsU0FBUyxDQUFDN0wsU0FBUyxFQUFFLFlBQVk7TUFDNUQ7TUFDQSxJQUFJME0sWUFBWSxHQUFHdFMsSUFBSSxDQUFDK0osVUFBVTtNQUNsQy9KLElBQUksQ0FBQytKLFVBQVUsR0FBRyxJQUFJekUsR0FBRyxDQUFDLENBQUM7TUFDM0J0RixJQUFJLENBQUNnSyxjQUFjLEdBQUcsRUFBRTtNQUV4QnNJLFlBQVksQ0FBQ25QLE9BQU8sQ0FBQyxVQUFVb0wsR0FBRyxFQUFFaEMsY0FBYyxFQUFFO1FBQ2xELElBQUlnRyxNQUFNLEdBQUdoRSxHQUFHLENBQUNpRSxTQUFTLENBQUMsQ0FBQztRQUM1QnhTLElBQUksQ0FBQytKLFVBQVUsQ0FBQy9DLEdBQUcsQ0FBQ3VGLGNBQWMsRUFBRWdHLE1BQU0sQ0FBQztRQUMzQztRQUNBO1FBQ0FBLE1BQU0sQ0FBQ0UsV0FBVyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDOztNQUVGO01BQ0E7TUFDQTtNQUNBelMsSUFBSSxDQUFDb0ssMEJBQTBCLEdBQUcsS0FBSztNQUN2Q3BLLElBQUksQ0FBQ3VMLGtCQUFrQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBeEMsTUFBTSxDQUFDMkosZ0JBQWdCLENBQUMsWUFBWTtNQUNsQzFTLElBQUksQ0FBQ21LLFVBQVUsR0FBRyxJQUFJO01BQ3RCbkssSUFBSSxDQUFDZ1Msb0JBQW9CLENBQUNDLFNBQVMsQ0FBQztNQUNwQyxJQUFJLENBQUNsVCxDQUFDLENBQUMwSSxPQUFPLENBQUN6SCxJQUFJLENBQUNxSyxhQUFhLENBQUMsRUFBRTtRQUNsQ3JLLElBQUksQ0FBQ29NLFNBQVMsQ0FBQ3BNLElBQUksQ0FBQ3FLLGFBQWEsQ0FBQztRQUNsQ3JLLElBQUksQ0FBQ3FLLGFBQWEsR0FBRyxFQUFFO01BQ3pCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEOEMsa0JBQWtCLEVBQUUsU0FBQUEsQ0FBVUQsT0FBTyxFQUFFeUYsS0FBSyxFQUFFbEUsTUFBTSxFQUFFRCxJQUFJLEVBQUU7SUFDMUQsSUFBSXhPLElBQUksR0FBRyxJQUFJO0lBRWYsSUFBSXVPLEdBQUcsR0FBRyxJQUFJcUUsWUFBWSxDQUN4QjVTLElBQUksRUFBRWtOLE9BQU8sRUFBRXlGLEtBQUssRUFBRWxFLE1BQU0sRUFBRUQsSUFBSSxDQUFDO0lBRXJDLElBQUlxRSxhQUFhLEdBQUc3UyxJQUFJLENBQUM4SixhQUFhO0lBQ3RDO0lBQ0E7SUFDQTtJQUNBeUUsR0FBRyxDQUFDSixPQUFPLEdBQUcwRSxhQUFhLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV6QyxJQUFJRixLQUFLLEVBQ1AzUyxJQUFJLENBQUMrSixVQUFVLENBQUMvQyxHQUFHLENBQUMyTCxLQUFLLEVBQUVwRSxHQUFHLENBQUMsQ0FBQyxLQUVoQ3ZPLElBQUksQ0FBQ2dLLGNBQWMsQ0FBQ3hLLElBQUksQ0FBQytPLEdBQUcsQ0FBQztJQUUvQkEsR0FBRyxDQUFDa0UsV0FBVyxDQUFDLENBQUM7RUFDbkIsQ0FBQztFQUVEO0VBQ0FoRCxpQkFBaUIsRUFBRSxTQUFBQSxDQUFVa0QsS0FBSyxFQUFFL0QsS0FBSyxFQUFFO0lBQ3pDLElBQUk1TyxJQUFJLEdBQUcsSUFBSTtJQUVmLElBQUk4UyxPQUFPLEdBQUcsSUFBSTtJQUNsQixJQUFJSCxLQUFLLEVBQUU7TUFDVCxJQUFJSSxRQUFRLEdBQUcvUyxJQUFJLENBQUMrSixVQUFVLENBQUMxRCxHQUFHLENBQUNzTSxLQUFLLENBQUM7TUFDekMsSUFBSUksUUFBUSxFQUFFO1FBQ1pELE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxLQUFLO1FBQ3hCRCxRQUFRLENBQUNFLG1CQUFtQixDQUFDLENBQUM7UUFDOUJGLFFBQVEsQ0FBQ1YsV0FBVyxDQUFDLENBQUM7UUFDdEJyUyxJQUFJLENBQUMrSixVQUFVLENBQUNwRCxNQUFNLENBQUNnTSxLQUFLLENBQUM7TUFDL0I7SUFDRjtJQUVBLElBQUlPLFFBQVEsR0FBRztNQUFDN0gsR0FBRyxFQUFFLE9BQU87TUFBRWxELEVBQUUsRUFBRXdLO0lBQUssQ0FBQztJQUV4QyxJQUFJL0QsS0FBSyxFQUFFO01BQ1RzRSxRQUFRLENBQUN0RSxLQUFLLEdBQUdpRCxxQkFBcUIsQ0FDcENqRCxLQUFLLEVBQ0xrRSxPQUFPLEdBQUksV0FBVyxHQUFHQSxPQUFPLEdBQUcsTUFBTSxHQUFHSCxLQUFLLEdBQzVDLGNBQWMsR0FBR0EsS0FBTSxDQUFDO0lBQ2pDO0lBRUEzUyxJQUFJLENBQUNvQyxJQUFJLENBQUM4USxRQUFRLENBQUM7RUFDckIsQ0FBQztFQUVEO0VBQ0E7RUFDQTVGLDJCQUEyQixFQUFFLFNBQUFBLENBQUEsRUFBWTtJQUN2QyxJQUFJdE4sSUFBSSxHQUFHLElBQUk7SUFFZkEsSUFBSSxDQUFDK0osVUFBVSxDQUFDNUcsT0FBTyxDQUFDLFVBQVVvTCxHQUFHLEVBQUVwRyxFQUFFLEVBQUU7TUFDekNvRyxHQUFHLENBQUM4RCxXQUFXLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFDRnJTLElBQUksQ0FBQytKLFVBQVUsR0FBRyxJQUFJekUsR0FBRyxDQUFDLENBQUM7SUFFM0J0RixJQUFJLENBQUNnSyxjQUFjLENBQUM3RyxPQUFPLENBQUMsVUFBVW9MLEdBQUcsRUFBRTtNQUN6Q0EsR0FBRyxDQUFDOEQsV0FBVyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBQ0ZyUyxJQUFJLENBQUNnSyxjQUFjLEdBQUcsRUFBRTtFQUMxQixDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0FrQixjQUFjLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQzFCLElBQUlsTCxJQUFJLEdBQUcsSUFBSTs7SUFFZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUltVCxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDalUsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFM0UsSUFBSStULGtCQUFrQixLQUFLLENBQUMsRUFDMUIsT0FBT25ULElBQUksQ0FBQzRCLE1BQU0sQ0FBQ3lSLGFBQWE7SUFFbEMsSUFBSUMsWUFBWSxHQUFHdFQsSUFBSSxDQUFDNEIsTUFBTSxDQUFDd0osT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pELElBQUksQ0FBRXJNLENBQUMsQ0FBQ3dVLFFBQVEsQ0FBQ0QsWUFBWSxDQUFDLEVBQzVCLE9BQU8sSUFBSTtJQUNiQSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7SUFFbkQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxJQUFJTixrQkFBa0IsR0FBRyxDQUFDLElBQUlBLGtCQUFrQixHQUFHRyxZQUFZLENBQUM5TSxNQUFNLEVBQ3BFLE9BQU8sSUFBSTtJQUViLE9BQU84TSxZQUFZLENBQUNBLFlBQVksQ0FBQzlNLE1BQU0sR0FBRzJNLGtCQUFrQixDQUFDO0VBQy9EO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSVAsWUFBWSxHQUFHLFNBQUFBLENBQ2Z0SCxPQUFPLEVBQUU0QixPQUFPLEVBQUVYLGNBQWMsRUFBRWtDLE1BQU0sRUFBRUQsSUFBSSxFQUFFO0VBQ2xELElBQUl4TyxJQUFJLEdBQUcsSUFBSTtFQUNmQSxJQUFJLENBQUNnQyxRQUFRLEdBQUdzSixPQUFPLENBQUMsQ0FBQzs7RUFFekI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRXRMLElBQUksQ0FBQ2tDLFVBQVUsR0FBR29KLE9BQU8sQ0FBQ1osZ0JBQWdCLENBQUMsQ0FBQzs7RUFFNUMxSyxJQUFJLENBQUMwVCxRQUFRLEdBQUd4RyxPQUFPOztFQUV2QjtFQUNBbE4sSUFBSSxDQUFDMlQsZUFBZSxHQUFHcEgsY0FBYztFQUNyQztFQUNBdk0sSUFBSSxDQUFDZ1QsS0FBSyxHQUFHeEUsSUFBSTtFQUVqQnhPLElBQUksQ0FBQzRULE9BQU8sR0FBR25GLE1BQU0sSUFBSSxFQUFFOztFQUUzQjtFQUNBO0VBQ0E7RUFDQSxJQUFJek8sSUFBSSxDQUFDMlQsZUFBZSxFQUFFO0lBQ3hCM1QsSUFBSSxDQUFDNlQsbUJBQW1CLEdBQUcsR0FBRyxHQUFHN1QsSUFBSSxDQUFDMlQsZUFBZTtFQUN2RCxDQUFDLE1BQU07SUFDTDNULElBQUksQ0FBQzZULG1CQUFtQixHQUFHLEdBQUcsR0FBR3JLLE1BQU0sQ0FBQ3JCLEVBQUUsQ0FBQyxDQUFDO0VBQzlDOztFQUVBO0VBQ0FuSSxJQUFJLENBQUM4VCxZQUFZLEdBQUcsS0FBSzs7RUFFekI7RUFDQTlULElBQUksQ0FBQytULGNBQWMsR0FBRyxFQUFFOztFQUV4QjtFQUNBO0VBQ0EvVCxJQUFJLENBQUNnVSxVQUFVLEdBQUcsSUFBSTFPLEdBQUcsQ0FBQyxDQUFDOztFQUUzQjtFQUNBdEYsSUFBSSxDQUFDaVUsTUFBTSxHQUFHLEtBQUs7O0VBRW5COztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VqVSxJQUFJLENBQUNpSyxNQUFNLEdBQUdxQixPQUFPLENBQUNyQixNQUFNOztFQUU1QjtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUFqSyxJQUFJLENBQUNrVSxTQUFTLEdBQUc7SUFDZkMsV0FBVyxFQUFFQyxPQUFPLENBQUNELFdBQVc7SUFDaENFLE9BQU8sRUFBRUQsT0FBTyxDQUFDQztFQUNuQixDQUFDO0VBRURwSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUlBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxtQkFBbUIsQ0FDdEUsVUFBVSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVEdEosTUFBTSxDQUFDQyxNQUFNLENBQUM4UCxZQUFZLENBQUM3UCxTQUFTLEVBQUU7RUFDcEMwUCxXQUFXLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO0lBQ3RCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUMsSUFBSSxDQUFDdEUsT0FBTyxFQUFFO01BQ2pCLElBQUksQ0FBQ0EsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCO0lBRUEsTUFBTW5PLElBQUksR0FBRyxJQUFJO0lBQ2pCLElBQUlrUixnQkFBZ0IsR0FBRyxJQUFJO0lBQzNCLElBQUk7TUFDRkEsZ0JBQWdCLEdBQUdKLEdBQUcsQ0FBQ3dELDZCQUE2QixDQUFDN0MsU0FBUyxDQUFDelIsSUFBSSxFQUFFLE1BQ25FbVIsd0JBQXdCLENBQ3RCblIsSUFBSSxDQUFDMFQsUUFBUSxFQUNiMVQsSUFBSSxFQUNKNEcsS0FBSyxDQUFDRSxLQUFLLENBQUM5RyxJQUFJLENBQUM0VCxPQUFPLENBQUM7TUFDekI7TUFDQTtNQUNBO01BQ0EsYUFBYSxHQUFHNVQsSUFBSSxDQUFDZ1QsS0FBSyxHQUFHLEdBQy9CLENBQ0YsQ0FBQztJQUNILENBQUMsQ0FBQyxPQUFPdUIsQ0FBQyxFQUFFO01BQ1Z2VSxJQUFJLENBQUM0TyxLQUFLLENBQUMyRixDQUFDLENBQUM7TUFDYjtJQUNGOztJQUVBO0lBQ0EsSUFBSXZVLElBQUksQ0FBQ3dVLGNBQWMsQ0FBQyxDQUFDLEVBQUU7O0lBRTNCO0lBQ0E7SUFDQTtJQUNBLE1BQU1wRCxVQUFVLEdBQ2RGLGdCQUFnQixJQUFJLE9BQU9BLGdCQUFnQixDQUFDRyxJQUFJLEtBQUssVUFBVTtJQUNqRSxJQUFJRCxVQUFVLEVBQUU7TUFDZFgsT0FBTyxDQUFDQyxPQUFPLENBQUNRLGdCQUFnQixDQUFDLENBQUNHLElBQUksQ0FDcEM7UUFBQSxPQUFhclIsSUFBSSxDQUFDeVUscUJBQXFCLENBQUN6TSxJQUFJLENBQUNoSSxJQUFJLENBQUMsQ0FBQyxHQUFBNEQsU0FBTyxDQUFDO01BQUEsR0FDM0QyUSxDQUFDLElBQUl2VSxJQUFJLENBQUM0TyxLQUFLLENBQUMyRixDQUFDLENBQ25CLENBQUM7SUFDSCxDQUFDLE1BQU07TUFDTHZVLElBQUksQ0FBQ3lVLHFCQUFxQixDQUFDdkQsZ0JBQWdCLENBQUM7SUFDOUM7RUFDRixDQUFDO0VBRUR1RCxxQkFBcUIsRUFBRSxTQUFBQSxDQUFVQyxHQUFHLEVBQUU7SUFDcEM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUEsSUFBSTFVLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSTJVLFFBQVEsR0FBRyxTQUFBQSxDQUFVQyxDQUFDLEVBQUU7TUFDMUIsT0FBT0EsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQWM7SUFDOUIsQ0FBQztJQUNELElBQUlGLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7TUFDakIsSUFBSTtRQUNGQSxHQUFHLENBQUNHLGNBQWMsQ0FBQzdVLElBQUksQ0FBQztNQUMxQixDQUFDLENBQUMsT0FBT3VVLENBQUMsRUFBRTtRQUNWdlUsSUFBSSxDQUFDNE8sS0FBSyxDQUFDMkYsQ0FBQyxDQUFDO1FBQ2I7TUFDRjtNQUNBO01BQ0E7TUFDQXZVLElBQUksQ0FBQzhVLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxNQUFNLElBQUkvVixDQUFDLENBQUNnVyxPQUFPLENBQUNMLEdBQUcsQ0FBQyxFQUFFO01BQ3pCO01BQ0EsSUFBSSxDQUFFM1YsQ0FBQyxDQUFDaVcsR0FBRyxDQUFDTixHQUFHLEVBQUVDLFFBQVEsQ0FBQyxFQUFFO1FBQzFCM1UsSUFBSSxDQUFDNE8sS0FBSyxDQUFDLElBQUl6RixLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUMxRTtNQUNGO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSThMLGVBQWUsR0FBRyxDQUFDLENBQUM7TUFDeEIsS0FBSyxJQUFJMU8sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbU8sR0FBRyxDQUFDbE8sTUFBTSxFQUFFLEVBQUVELENBQUMsRUFBRTtRQUNuQyxJQUFJYSxjQUFjLEdBQUdzTixHQUFHLENBQUNuTyxDQUFDLENBQUMsQ0FBQzJPLGtCQUFrQixDQUFDLENBQUM7UUFDaEQsSUFBSW5XLENBQUMsQ0FBQ2dJLEdBQUcsQ0FBQ2tPLGVBQWUsRUFBRTdOLGNBQWMsQ0FBQyxFQUFFO1VBQzFDcEgsSUFBSSxDQUFDNE8sS0FBSyxDQUFDLElBQUl6RixLQUFLLENBQ2xCLDREQUE0RCxHQUMxRC9CLGNBQWMsQ0FBQyxDQUFDO1VBQ3BCO1FBQ0Y7UUFDQTZOLGVBQWUsQ0FBQzdOLGNBQWMsQ0FBQyxHQUFHLElBQUk7TUFDeEM7TUFBQztNQUVELElBQUk7UUFDRnJJLENBQUMsQ0FBQzRELElBQUksQ0FBQytSLEdBQUcsRUFBRSxVQUFVUyxHQUFHLEVBQUU7VUFDekJBLEdBQUcsQ0FBQ04sY0FBYyxDQUFDN1UsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQyxPQUFPdVUsQ0FBQyxFQUFFO1FBQ1Z2VSxJQUFJLENBQUM0TyxLQUFLLENBQUMyRixDQUFDLENBQUM7UUFDYjtNQUNGO01BQ0F2VSxJQUFJLENBQUM4VSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUMsTUFBTSxJQUFJSixHQUFHLEVBQUU7TUFDZDtNQUNBO01BQ0E7TUFDQTFVLElBQUksQ0FBQzRPLEtBQUssQ0FBQyxJQUFJekYsS0FBSyxDQUFDLCtDQUErQyxHQUM3QyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hEO0VBQ0YsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQWtKLFdBQVcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7SUFDdEIsSUFBSXJTLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSUEsSUFBSSxDQUFDOFQsWUFBWSxFQUNuQjtJQUNGOVQsSUFBSSxDQUFDOFQsWUFBWSxHQUFHLElBQUk7SUFDeEI5VCxJQUFJLENBQUNvVixrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pCbkosT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJQSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsbUJBQW1CLENBQ3RFLFVBQVUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDcEMsQ0FBQztFQUVEaUosa0JBQWtCLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQzlCLElBQUlwVixJQUFJLEdBQUcsSUFBSTtJQUNmO0lBQ0EsSUFBSXVILFNBQVMsR0FBR3ZILElBQUksQ0FBQytULGNBQWM7SUFDbkMvVCxJQUFJLENBQUMrVCxjQUFjLEdBQUcsRUFBRTtJQUN4QmhWLENBQUMsQ0FBQzRELElBQUksQ0FBQzRFLFNBQVMsRUFBRSxVQUFVM0UsUUFBUSxFQUFFO01BQ3BDQSxRQUFRLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtFQUNBcVEsbUJBQW1CLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQy9CLElBQUlqVCxJQUFJLEdBQUcsSUFBSTtJQUNmK0ksTUFBTSxDQUFDMkosZ0JBQWdCLENBQUMsWUFBWTtNQUNsQzFTLElBQUksQ0FBQ2dVLFVBQVUsQ0FBQzdRLE9BQU8sQ0FBQyxVQUFVa1MsY0FBYyxFQUFFak8sY0FBYyxFQUFFO1FBQ2hFaU8sY0FBYyxDQUFDbFMsT0FBTyxDQUFDLFVBQVVtUyxLQUFLLEVBQUU7VUFDdEN0VixJQUFJLENBQUN3SSxPQUFPLENBQUNwQixjQUFjLEVBQUVwSCxJQUFJLENBQUNrVSxTQUFTLENBQUNHLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E5QyxTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ3JCLElBQUl4UyxJQUFJLEdBQUcsSUFBSTtJQUNmLE9BQU8sSUFBSTRTLFlBQVksQ0FDckI1UyxJQUFJLENBQUNnQyxRQUFRLEVBQUVoQyxJQUFJLENBQUMwVCxRQUFRLEVBQUUxVCxJQUFJLENBQUMyVCxlQUFlLEVBQUUzVCxJQUFJLENBQUM0VCxPQUFPLEVBQ2hFNVQsSUFBSSxDQUFDZ1QsS0FBSyxDQUFDO0VBQ2YsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VwRSxLQUFLLEVBQUUsU0FBQUEsQ0FBVUEsS0FBSyxFQUFFO0lBQ3RCLElBQUk1TyxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlBLElBQUksQ0FBQ3dVLGNBQWMsQ0FBQyxDQUFDLEVBQ3ZCO0lBQ0Z4VSxJQUFJLENBQUNnQyxRQUFRLENBQUN5TixpQkFBaUIsQ0FBQ3pQLElBQUksQ0FBQzJULGVBQWUsRUFBRS9FLEtBQUssQ0FBQztFQUM5RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0V4QixJQUFJLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ2hCLElBQUlwTixJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlBLElBQUksQ0FBQ3dVLGNBQWMsQ0FBQyxDQUFDLEVBQ3ZCO0lBQ0Z4VSxJQUFJLENBQUNnQyxRQUFRLENBQUN5TixpQkFBaUIsQ0FBQ3pQLElBQUksQ0FBQzJULGVBQWUsQ0FBQztFQUN2RCxDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRTRCLE1BQU0sRUFBRSxTQUFBQSxDQUFVM1MsUUFBUSxFQUFFO0lBQzFCLElBQUk1QyxJQUFJLEdBQUcsSUFBSTtJQUNmNEMsUUFBUSxHQUFHbUcsTUFBTSxDQUFDZ0MsZUFBZSxDQUFDbkksUUFBUSxFQUFFLGlCQUFpQixFQUFFNUMsSUFBSSxDQUFDO0lBQ3BFLElBQUlBLElBQUksQ0FBQ3dVLGNBQWMsQ0FBQyxDQUFDLEVBQ3ZCNVIsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUVYNUMsSUFBSSxDQUFDK1QsY0FBYyxDQUFDdlUsSUFBSSxDQUFDb0QsUUFBUSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBO0VBQ0E7RUFDQTRSLGNBQWMsRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDMUIsSUFBSXhVLElBQUksR0FBRyxJQUFJO0lBQ2YsT0FBT0EsSUFBSSxDQUFDOFQsWUFBWSxJQUFJOVQsSUFBSSxDQUFDZ0MsUUFBUSxDQUFDMEgsT0FBTyxLQUFLLElBQUk7RUFDNUQsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFckIsS0FBS0EsQ0FBRWpCLGNBQWMsRUFBRWUsRUFBRSxFQUFFTSxNQUFNLEVBQUU7SUFDakMsSUFBSSxJQUFJLENBQUMrTCxjQUFjLENBQUMsQ0FBQyxFQUN2QjtJQUNGck0sRUFBRSxHQUFHLElBQUksQ0FBQytMLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDaE0sRUFBRSxDQUFDO0lBRW5DLElBQUksSUFBSSxDQUFDbkcsUUFBUSxDQUFDZCxNQUFNLENBQUM4SCxzQkFBc0IsQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDdEMseUJBQXlCLEVBQUU7TUFDekYsSUFBSTBRLEdBQUcsR0FBRyxJQUFJLENBQUN4QixVQUFVLENBQUMzTixHQUFHLENBQUNlLGNBQWMsQ0FBQztNQUM3QyxJQUFJb08sR0FBRyxJQUFJLElBQUksRUFBRTtRQUNmQSxHQUFHLEdBQUcsSUFBSXBRLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDNE8sVUFBVSxDQUFDaE4sR0FBRyxDQUFDSSxjQUFjLEVBQUVvTyxHQUFHLENBQUM7TUFDMUM7TUFDQUEsR0FBRyxDQUFDdk0sR0FBRyxDQUFDZCxFQUFFLENBQUM7SUFDYjtJQUVBLElBQUksQ0FBQ25HLFFBQVEsQ0FBQ3FHLEtBQUssQ0FBQyxJQUFJLENBQUN3TCxtQkFBbUIsRUFBRXpNLGNBQWMsRUFBRWUsRUFBRSxFQUFFTSxNQUFNLENBQUM7RUFDM0UsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFSSxPQUFPQSxDQUFFekIsY0FBYyxFQUFFZSxFQUFFLEVBQUVNLE1BQU0sRUFBRTtJQUNuQyxJQUFJLElBQUksQ0FBQytMLGNBQWMsQ0FBQyxDQUFDLEVBQ3ZCO0lBQ0ZyTSxFQUFFLEdBQUcsSUFBSSxDQUFDK0wsU0FBUyxDQUFDQyxXQUFXLENBQUNoTSxFQUFFLENBQUM7SUFDbkMsSUFBSSxDQUFDbkcsUUFBUSxDQUFDNkcsT0FBTyxDQUFDLElBQUksQ0FBQ2dMLG1CQUFtQixFQUFFek0sY0FBYyxFQUFFZSxFQUFFLEVBQUVNLE1BQU0sQ0FBQztFQUM3RSxDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFRCxPQUFPQSxDQUFFcEIsY0FBYyxFQUFFZSxFQUFFLEVBQUU7SUFDM0IsSUFBSSxJQUFJLENBQUNxTSxjQUFjLENBQUMsQ0FBQyxFQUN2QjtJQUNGck0sRUFBRSxHQUFHLElBQUksQ0FBQytMLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDaE0sRUFBRSxDQUFDO0lBRW5DLElBQUksSUFBSSxDQUFDbkcsUUFBUSxDQUFDZCxNQUFNLENBQUM4SCxzQkFBc0IsQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDdEMseUJBQXlCLEVBQUU7TUFDekY7TUFDQTtNQUNBLElBQUksQ0FBQ2tQLFVBQVUsQ0FBQzNOLEdBQUcsQ0FBQ2UsY0FBYyxDQUFDLENBQUNULE1BQU0sQ0FBQ3dCLEVBQUUsQ0FBQztJQUNoRDtJQUVBLElBQUksQ0FBQ25HLFFBQVEsQ0FBQ3dHLE9BQU8sQ0FBQyxJQUFJLENBQUNxTCxtQkFBbUIsRUFBRXpNLGNBQWMsRUFBRWUsRUFBRSxDQUFDO0VBQ3JFLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRTJNLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDakIsSUFBSTlVLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSUEsSUFBSSxDQUFDd1UsY0FBYyxDQUFDLENBQUMsRUFDdkI7SUFDRixJQUFJLENBQUN4VSxJQUFJLENBQUMyVCxlQUFlLEVBQ3ZCLE9BQU8sQ0FBRTtJQUNYLElBQUksQ0FBQzNULElBQUksQ0FBQ2lVLE1BQU0sRUFBRTtNQUNoQmpVLElBQUksQ0FBQ2dDLFFBQVEsQ0FBQ29LLFNBQVMsQ0FBQyxDQUFDcE0sSUFBSSxDQUFDMlQsZUFBZSxDQUFDLENBQUM7TUFDL0MzVCxJQUFJLENBQUNpVSxNQUFNLEdBQUcsSUFBSTtJQUNwQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTs7QUFFQXdCLE1BQU0sR0FBRyxTQUFBQSxDQUFBLEVBQXdCO0VBQUEsSUFBZGxNLE9BQU8sR0FBQTNGLFNBQUEsQ0FBQTRDLE1BQUEsUUFBQTVDLFNBQUEsUUFBQWdDLFNBQUEsR0FBQWhDLFNBQUEsTUFBRyxDQUFDLENBQUM7RUFDN0IsSUFBSTVELElBQUksR0FBRyxJQUFJOztFQUVmO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FBLElBQUksQ0FBQ3VKLE9BQU8sR0FBQXBGLGFBQUE7SUFDVnNILGlCQUFpQixFQUFFLEtBQUs7SUFDeEJJLGdCQUFnQixFQUFFLEtBQUs7SUFDdkI7SUFDQXBCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCaUwsMEJBQTBCLEVBQUVoUixxQkFBcUIsQ0FBQ0M7RUFBWSxHQUMzRDRFLE9BQU8sQ0FDWDs7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBdkosSUFBSSxDQUFDMlYsZ0JBQWdCLEdBQUcsSUFBSUMsSUFBSSxDQUFDO0lBQy9CQyxvQkFBb0IsRUFBRTtFQUN4QixDQUFDLENBQUM7O0VBRUY7RUFDQTdWLElBQUksQ0FBQ29PLGFBQWEsR0FBRyxJQUFJd0gsSUFBSSxDQUFDO0lBQzVCQyxvQkFBb0IsRUFBRTtFQUN4QixDQUFDLENBQUM7RUFFRjdWLElBQUksQ0FBQzJPLGdCQUFnQixHQUFHLENBQUMsQ0FBQztFQUMxQjNPLElBQUksQ0FBQ2lOLDBCQUEwQixHQUFHLEVBQUU7RUFFcENqTixJQUFJLENBQUNpUSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0VBRXpCalEsSUFBSSxDQUFDOFYsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0VBRWhDOVYsSUFBSSxDQUFDK1YsUUFBUSxHQUFHLElBQUl6USxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRTNCdEYsSUFBSSxDQUFDZ1csYUFBYSxHQUFHLElBQUlqVyxZQUFZLENBQUQsQ0FBQztFQUVyQ0MsSUFBSSxDQUFDZ1csYUFBYSxDQUFDaFQsUUFBUSxDQUFDLFVBQVVwQixNQUFNLEVBQUU7SUFDNUM7SUFDQUEsTUFBTSxDQUFDeUwsY0FBYyxHQUFHLElBQUk7SUFFNUIsSUFBSU0sU0FBUyxHQUFHLFNBQUFBLENBQVVDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUU7TUFDbEQsSUFBSXhDLEdBQUcsR0FBRztRQUFDQSxHQUFHLEVBQUUsT0FBTztRQUFFdUMsTUFBTSxFQUFFQTtNQUFNLENBQUM7TUFDeEMsSUFBSUMsZ0JBQWdCLEVBQ2xCeEMsR0FBRyxDQUFDd0MsZ0JBQWdCLEdBQUdBLGdCQUFnQjtNQUN6Q2pNLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDdUosU0FBUyxDQUFDK0IsWUFBWSxDQUFDckMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEekosTUFBTSxDQUFDRCxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVVzVSxPQUFPLEVBQUU7TUFDbkMsSUFBSWxOLE1BQU0sQ0FBQ21OLGlCQUFpQixFQUFFO1FBQzVCbk4sTUFBTSxDQUFDMEUsTUFBTSxDQUFDLGNBQWMsRUFBRXdJLE9BQU8sQ0FBQztNQUN4QztNQUNBLElBQUk7UUFDRixJQUFJO1VBQ0YsSUFBSTVLLEdBQUcsR0FBR00sU0FBUyxDQUFDd0ssUUFBUSxDQUFDRixPQUFPLENBQUM7UUFDdkMsQ0FBQyxDQUFDLE9BQU83TSxHQUFHLEVBQUU7VUFDWnVFLFNBQVMsQ0FBQyxhQUFhLENBQUM7VUFDeEI7UUFDRjtRQUNBLElBQUl0QyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUNBLEdBQUcsQ0FBQ0EsR0FBRyxFQUFFO1VBQzVCc0MsU0FBUyxDQUFDLGFBQWEsRUFBRXRDLEdBQUcsQ0FBQztVQUM3QjtRQUNGO1FBRUEsSUFBSUEsR0FBRyxDQUFDQSxHQUFHLEtBQUssU0FBUyxFQUFFO1VBQ3pCLElBQUl6SixNQUFNLENBQUN5TCxjQUFjLEVBQUU7WUFDekJNLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRXRDLEdBQUcsQ0FBQztZQUNuQztVQUNGO1VBQ0E1RyxLQUFLLENBQUMsWUFBWTtZQUNoQnpFLElBQUksQ0FBQ29XLGNBQWMsQ0FBQ3hVLE1BQU0sRUFBRXlKLEdBQUcsQ0FBQztVQUNsQyxDQUFDLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUM7VUFDUjtRQUNGO1FBRUEsSUFBSSxDQUFDNUosTUFBTSxDQUFDeUwsY0FBYyxFQUFFO1VBQzFCTSxTQUFTLENBQUMsb0JBQW9CLEVBQUV0QyxHQUFHLENBQUM7VUFDcEM7UUFDRjtRQUNBekosTUFBTSxDQUFDeUwsY0FBYyxDQUFDUyxjQUFjLENBQUN6QyxHQUFHLENBQUM7TUFDM0MsQ0FBQyxDQUFDLE9BQU9rSixDQUFDLEVBQUU7UUFDVjtRQUNBeEwsTUFBTSxDQUFDMEUsTUFBTSxDQUFDLDZDQUE2QyxFQUFFcEMsR0FBRyxFQUFFa0osQ0FBQyxDQUFDO01BQ3RFO0lBQ0YsQ0FBQyxDQUFDO0lBRUYzUyxNQUFNLENBQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUM3QixJQUFJQyxNQUFNLENBQUN5TCxjQUFjLEVBQUU7UUFDekI1SSxLQUFLLENBQUMsWUFBWTtVQUNoQjdDLE1BQU0sQ0FBQ3lMLGNBQWMsQ0FBQzFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDYSxHQUFHLENBQUMsQ0FBQztNQUNWO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEM0ksTUFBTSxDQUFDQyxNQUFNLENBQUMyUyxNQUFNLENBQUMxUyxTQUFTLEVBQUU7RUFFOUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRXNULFlBQVksRUFBRSxTQUFBQSxDQUFVeEwsRUFBRSxFQUFFO0lBQzFCLElBQUk3SyxJQUFJLEdBQUcsSUFBSTtJQUNmLE9BQU9BLElBQUksQ0FBQzJWLGdCQUFnQixDQUFDM1MsUUFBUSxDQUFDNkgsRUFBRSxDQUFDO0VBQzNDLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRXlMLHNCQUFzQkEsQ0FBQ2xQLGNBQWMsRUFBRW1QLFFBQVEsRUFBRTtJQUMvQyxJQUFJLENBQUMxVCxNQUFNLENBQUNLLE1BQU0sQ0FBQ3dCLHFCQUFxQixDQUFDLENBQUM4UixRQUFRLENBQUNELFFBQVEsQ0FBQyxFQUFFO01BQzVELE1BQU0sSUFBSXBOLEtBQUssNEJBQUEwRixNQUFBLENBQTRCMEgsUUFBUSxnQ0FBQTFILE1BQUEsQ0FDaEN6SCxjQUFjLENBQUUsQ0FBQztJQUN0QztJQUNBLElBQUksQ0FBQzBPLHNCQUFzQixDQUFDMU8sY0FBYyxDQUFDLEdBQUdtUCxRQUFRO0VBQ3hELENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRXZOLHNCQUFzQkEsQ0FBQzVCLGNBQWMsRUFBRTtJQUNyQyxPQUFPLElBQUksQ0FBQzBPLHNCQUFzQixDQUFDMU8sY0FBYyxDQUFDLElBQzdDLElBQUksQ0FBQ21DLE9BQU8sQ0FBQ21NLDBCQUEwQjtFQUM5QyxDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRWUsU0FBUyxFQUFFLFNBQUFBLENBQVU1TCxFQUFFLEVBQUU7SUFDdkIsSUFBSTdLLElBQUksR0FBRyxJQUFJO0lBQ2YsT0FBT0EsSUFBSSxDQUFDb08sYUFBYSxDQUFDcEwsUUFBUSxDQUFDNkgsRUFBRSxDQUFDO0VBQ3hDLENBQUM7RUFFRHVMLGNBQWMsRUFBRSxTQUFBQSxDQUFVeFUsTUFBTSxFQUFFeUosR0FBRyxFQUFFO0lBQ3JDLElBQUlyTCxJQUFJLEdBQUcsSUFBSTs7SUFFZjtJQUNBO0lBQ0EsSUFBSSxFQUFFLE9BQVFxTCxHQUFHLENBQUMvQixPQUFRLEtBQUssUUFBUSxJQUNqQ3ZLLENBQUMsQ0FBQ2dXLE9BQU8sQ0FBQzFKLEdBQUcsQ0FBQ3FMLE9BQU8sQ0FBQyxJQUN0QjNYLENBQUMsQ0FBQ2lXLEdBQUcsQ0FBQzNKLEdBQUcsQ0FBQ3FMLE9BQU8sRUFBRTNYLENBQUMsQ0FBQ3dVLFFBQVEsQ0FBQyxJQUM5QnhVLENBQUMsQ0FBQzRYLFFBQVEsQ0FBQ3RMLEdBQUcsQ0FBQ3FMLE9BQU8sRUFBRXJMLEdBQUcsQ0FBQy9CLE9BQU8sQ0FBQyxDQUFDLEVBQUU7TUFDM0MxSCxNQUFNLENBQUNRLElBQUksQ0FBQ3VKLFNBQVMsQ0FBQytCLFlBQVksQ0FBQztRQUFDckMsR0FBRyxFQUFFLFFBQVE7UUFDdkIvQixPQUFPLEVBQUVxQyxTQUFTLENBQUNpTCxzQkFBc0IsQ0FBQyxDQUFDO01BQUMsQ0FBQyxDQUFDLENBQUM7TUFDekVoVixNQUFNLENBQUMrSSxLQUFLLENBQUMsQ0FBQztNQUNkO0lBQ0Y7O0lBRUE7SUFDQTtJQUNBLElBQUlyQixPQUFPLEdBQUd1TixnQkFBZ0IsQ0FBQ3hMLEdBQUcsQ0FBQ3FMLE9BQU8sRUFBRS9LLFNBQVMsQ0FBQ2lMLHNCQUFzQixDQUFDO0lBRTdFLElBQUl2TCxHQUFHLENBQUMvQixPQUFPLEtBQUtBLE9BQU8sRUFBRTtNQUMzQjtNQUNBO01BQ0E7TUFDQTFILE1BQU0sQ0FBQ1EsSUFBSSxDQUFDdUosU0FBUyxDQUFDK0IsWUFBWSxDQUFDO1FBQUNyQyxHQUFHLEVBQUUsUUFBUTtRQUFFL0IsT0FBTyxFQUFFQTtNQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3RFMUgsTUFBTSxDQUFDK0ksS0FBSyxDQUFDLENBQUM7TUFDZDtJQUNGOztJQUVBO0lBQ0E7SUFDQTtJQUNBL0ksTUFBTSxDQUFDeUwsY0FBYyxHQUFHLElBQUloRSxPQUFPLENBQUNySixJQUFJLEVBQUVzSixPQUFPLEVBQUUxSCxNQUFNLEVBQUU1QixJQUFJLENBQUN1SixPQUFPLENBQUM7SUFDeEV2SixJQUFJLENBQUMrVixRQUFRLENBQUMvTyxHQUFHLENBQUNwRixNQUFNLENBQUN5TCxjQUFjLENBQUNsRixFQUFFLEVBQUV2RyxNQUFNLENBQUN5TCxjQUFjLENBQUM7SUFDbEVyTixJQUFJLENBQUMyVixnQkFBZ0IsQ0FBQ2hULElBQUksQ0FBQyxVQUFVQyxRQUFRLEVBQUU7TUFDN0MsSUFBSWhCLE1BQU0sQ0FBQ3lMLGNBQWMsRUFDdkJ6SyxRQUFRLENBQUNoQixNQUFNLENBQUN5TCxjQUFjLENBQUMzQyxnQkFBZ0IsQ0FBQztNQUNsRCxPQUFPLElBQUk7SUFDYixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFb00sT0FBTyxFQUFFLFNBQUFBLENBQVV0SSxJQUFJLEVBQUV0QixPQUFPLEVBQUUzRCxPQUFPLEVBQUU7SUFDekMsSUFBSXZKLElBQUksR0FBRyxJQUFJO0lBRWYsSUFBSSxDQUFFakIsQ0FBQyxDQUFDZ1ksUUFBUSxDQUFDdkksSUFBSSxDQUFDLEVBQUU7TUFDdEJqRixPQUFPLEdBQUdBLE9BQU8sSUFBSSxDQUFDLENBQUM7TUFFdkIsSUFBSWlGLElBQUksSUFBSUEsSUFBSSxJQUFJeE8sSUFBSSxDQUFDMk8sZ0JBQWdCLEVBQUU7UUFDekM1RixNQUFNLENBQUMwRSxNQUFNLENBQUMsb0NBQW9DLEdBQUdlLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEU7TUFDRjtNQUVBLElBQUl2QyxPQUFPLENBQUMrSyxXQUFXLElBQUksQ0FBQ3pOLE9BQU8sQ0FBQzBOLE9BQU8sRUFBRTtRQUMzQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUksQ0FBQ2pYLElBQUksQ0FBQ2tYLHdCQUF3QixFQUFFO1VBQ2xDbFgsSUFBSSxDQUFDa1gsd0JBQXdCLEdBQUcsSUFBSTtVQUNwQ25PLE1BQU0sQ0FBQzBFLE1BQU0sQ0FDbkIsdUVBQXVFLEdBQ3ZFLHlFQUF5RSxHQUN6RSx1RUFBdUUsR0FDdkUseUNBQXlDLEdBQ3pDLE1BQU0sR0FDTixnRUFBZ0UsR0FDaEUsTUFBTSxHQUNOLG9DQUFvQyxHQUNwQyxNQUFNLEdBQ04sOEVBQThFLEdBQzlFLHdEQUF3RCxDQUFDO1FBQ3JEO01BQ0Y7TUFFQSxJQUFJZSxJQUFJLEVBQ054TyxJQUFJLENBQUMyTyxnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDLEdBQUd0QixPQUFPLENBQUMsS0FDbkM7UUFDSGxOLElBQUksQ0FBQ2lOLDBCQUEwQixDQUFDek4sSUFBSSxDQUFDME4sT0FBTyxDQUFDO1FBQzdDO1FBQ0E7UUFDQTtRQUNBbE4sSUFBSSxDQUFDK1YsUUFBUSxDQUFDNVMsT0FBTyxDQUFDLFVBQVVtSSxPQUFPLEVBQUU7VUFDdkMsSUFBSSxDQUFDQSxPQUFPLENBQUNsQiwwQkFBMEIsRUFBRTtZQUN2QzNGLEtBQUssQ0FBQyxZQUFXO2NBQ2Y2RyxPQUFPLENBQUM2QixrQkFBa0IsQ0FBQ0QsT0FBTyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDMUIsR0FBRyxDQUFDLENBQUM7VUFDVjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQyxNQUNHO01BQ0Z6TSxDQUFDLENBQUM0RCxJQUFJLENBQUM2TCxJQUFJLEVBQUUsVUFBUzFJLEtBQUssRUFBRUosR0FBRyxFQUFFO1FBQ2hDMUYsSUFBSSxDQUFDOFcsT0FBTyxDQUFDcFIsR0FBRyxFQUFFSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUR5SCxjQUFjLEVBQUUsU0FBQUEsQ0FBVWpDLE9BQU8sRUFBRTtJQUNqQyxJQUFJdEwsSUFBSSxHQUFHLElBQUk7SUFDZkEsSUFBSSxDQUFDK1YsUUFBUSxDQUFDcFAsTUFBTSxDQUFDMkUsT0FBTyxDQUFDbkQsRUFBRSxDQUFDO0VBQ2xDLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFNkgsT0FBTyxFQUFFLFNBQUFBLENBQVVBLE9BQU8sRUFBRTtJQUMxQixJQUFJaFEsSUFBSSxHQUFHLElBQUk7SUFDZmpCLENBQUMsQ0FBQzRELElBQUksQ0FBQ3FOLE9BQU8sRUFBRSxVQUFVbUgsSUFBSSxFQUFFM0ksSUFBSSxFQUFFO01BQ3BDLElBQUksT0FBTzJJLElBQUksS0FBSyxVQUFVLEVBQzVCLE1BQU0sSUFBSWhPLEtBQUssQ0FBQyxVQUFVLEdBQUdxRixJQUFJLEdBQUcsc0JBQXNCLENBQUM7TUFDN0QsSUFBSXhPLElBQUksQ0FBQ2lRLGVBQWUsQ0FBQ3pCLElBQUksQ0FBQyxFQUM1QixNQUFNLElBQUlyRixLQUFLLENBQUMsa0JBQWtCLEdBQUdxRixJQUFJLEdBQUcsc0JBQXNCLENBQUM7TUFDckV4TyxJQUFJLENBQUNpUSxlQUFlLENBQUN6QixJQUFJLENBQUMsR0FBRzJJLElBQUk7SUFDbkMsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEN0ksSUFBSSxFQUFFLFNBQUFBLENBQVVFLElBQUksRUFBVztJQUFBLFNBQUE0SSxJQUFBLEdBQUF4VCxTQUFBLENBQUE0QyxNQUFBLEVBQU43QyxJQUFJLE9BQUErSyxLQUFBLENBQUEwSSxJQUFBLE9BQUFBLElBQUEsV0FBQUMsSUFBQSxNQUFBQSxJQUFBLEdBQUFELElBQUEsRUFBQUMsSUFBQTtNQUFKMVQsSUFBSSxDQUFBMFQsSUFBQSxRQUFBelQsU0FBQSxDQUFBeVQsSUFBQTtJQUFBO0lBQzNCLElBQUkxVCxJQUFJLENBQUM2QyxNQUFNLElBQUksT0FBTzdDLElBQUksQ0FBQ0EsSUFBSSxDQUFDNkMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtNQUM5RDtNQUNBO01BQ0EsSUFBSTVELFFBQVEsR0FBR2UsSUFBSSxDQUFDMlQsR0FBRyxDQUFDLENBQUM7SUFDM0I7SUFFQSxPQUFPLElBQUksQ0FBQ3BULEtBQUssQ0FBQ3NLLElBQUksRUFBRTdLLElBQUksRUFBRWYsUUFBUSxDQUFDO0VBQ3pDLENBQUM7RUFFRDtFQUNBMlUsU0FBUyxFQUFFLFNBQUFBLENBQVUvSSxJQUFJLEVBQVc7SUFBQSxTQUFBZ0osS0FBQSxHQUFBNVQsU0FBQSxDQUFBNEMsTUFBQSxFQUFON0MsSUFBSSxPQUFBK0ssS0FBQSxDQUFBOEksS0FBQSxPQUFBQSxLQUFBLFdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSjlULElBQUksQ0FBQThULEtBQUEsUUFBQTdULFNBQUEsQ0FBQTZULEtBQUE7SUFBQTtJQUNoQyxPQUFPLElBQUksQ0FBQ0MsVUFBVSxDQUFDbEosSUFBSSxFQUFFN0ssSUFBSSxDQUFDO0VBQ3BDLENBQUM7RUFFRE8sS0FBSyxFQUFFLFNBQUFBLENBQVVzSyxJQUFJLEVBQUU3SyxJQUFJLEVBQUU0RixPQUFPLEVBQUUzRyxRQUFRLEVBQUU7SUFDOUM7SUFDQTtJQUNBLElBQUksQ0FBRUEsUUFBUSxJQUFJLE9BQU8yRyxPQUFPLEtBQUssVUFBVSxFQUFFO01BQy9DM0csUUFBUSxHQUFHMkcsT0FBTztNQUNsQkEsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUMsTUFBTTtNQUNMQSxPQUFPLEdBQUdBLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDekI7SUFFQSxNQUFNaUgsT0FBTyxHQUFHLElBQUksQ0FBQ2tILFVBQVUsQ0FBQ2xKLElBQUksRUFBRTdLLElBQUksRUFBRTRGLE9BQU8sQ0FBQzs7SUFFcEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUkzRyxRQUFRLEVBQUU7TUFDWjROLE9BQU8sQ0FBQ2EsSUFBSSxDQUNWSixNQUFNLElBQUlyTyxRQUFRLENBQUNnRCxTQUFTLEVBQUVxTCxNQUFNLENBQUMsRUFDckNXLFNBQVMsSUFBSWhQLFFBQVEsQ0FBQ2dQLFNBQVMsQ0FDakMsQ0FBQztJQUNILENBQUMsTUFBTTtNQUNMLE9BQU9wQixPQUFPLENBQUNjLEtBQUssQ0FBQyxDQUFDO0lBQ3hCO0VBQ0YsQ0FBQztFQUVEO0VBQ0FvRyxVQUFVLEVBQUUsU0FBQUEsQ0FBVWxKLElBQUksRUFBRTdLLElBQUksRUFBRTRGLE9BQU8sRUFBRTtJQUN6QztJQUNBLElBQUkyRCxPQUFPLEdBQUcsSUFBSSxDQUFDK0MsZUFBZSxDQUFDekIsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBRXRCLE9BQU8sRUFBRTtNQUNiLE9BQU91RCxPQUFPLENBQUNFLE1BQU0sQ0FDbkIsSUFBSTVILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsYUFBQTBGLE1BQUEsQ0FBYUwsSUFBSSxnQkFBYSxDQUNwRCxDQUFDO0lBQ0g7O0lBRUE7SUFDQTtJQUNBO0lBQ0EsSUFBSXZFLE1BQU0sR0FBRyxJQUFJO0lBQ2pCLElBQUlrRyxTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO01BQ3pCLE1BQU0sSUFBSWhILEtBQUssQ0FBQyx3REFBd0QsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsSUFBSWpILFVBQVUsR0FBRyxJQUFJO0lBQ3JCLElBQUl5Vix1QkFBdUIsR0FBRzdHLEdBQUcsQ0FBQ0Msd0JBQXdCLENBQUMxSyxHQUFHLENBQUMsQ0FBQztJQUNoRSxJQUFJdVIsNEJBQTRCLEdBQUc5RyxHQUFHLENBQUN3RCw2QkFBNkIsQ0FBQ2pPLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLElBQUlzSixVQUFVLEdBQUcsSUFBSTtJQUNyQixJQUFJZ0ksdUJBQXVCLEVBQUU7TUFDM0IxTixNQUFNLEdBQUcwTix1QkFBdUIsQ0FBQzFOLE1BQU07TUFDdkNrRyxTQUFTLEdBQUcsU0FBQUEsQ0FBU2xHLE1BQU0sRUFBRTtRQUMzQjBOLHVCQUF1QixDQUFDeEgsU0FBUyxDQUFDbEcsTUFBTSxDQUFDO01BQzNDLENBQUM7TUFDRC9ILFVBQVUsR0FBR3lWLHVCQUF1QixDQUFDelYsVUFBVTtNQUMvQ3lOLFVBQVUsR0FBR2hFLFNBQVMsQ0FBQ2tNLFdBQVcsQ0FBQ0YsdUJBQXVCLEVBQUVuSixJQUFJLENBQUM7SUFDbkUsQ0FBQyxNQUFNLElBQUlvSiw0QkFBNEIsRUFBRTtNQUN2QzNOLE1BQU0sR0FBRzJOLDRCQUE0QixDQUFDM04sTUFBTTtNQUM1Q2tHLFNBQVMsR0FBRyxTQUFBQSxDQUFTbEcsTUFBTSxFQUFFO1FBQzNCMk4sNEJBQTRCLENBQUM1VixRQUFRLENBQUNvTyxVQUFVLENBQUNuRyxNQUFNLENBQUM7TUFDMUQsQ0FBQztNQUNEL0gsVUFBVSxHQUFHMFYsNEJBQTRCLENBQUMxVixVQUFVO0lBQ3REO0lBRUEsSUFBSW1PLFVBQVUsR0FBRyxJQUFJMUUsU0FBUyxDQUFDMkUsZ0JBQWdCLENBQUM7TUFDOUNDLFlBQVksRUFBRSxLQUFLO01BQ25CdEcsTUFBTTtNQUNOa0csU0FBUztNQUNUak8sVUFBVTtNQUNWeU47SUFDRixDQUFDLENBQUM7SUFFRixPQUFPLElBQUljLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJQSxPQUFPLENBQ25DSSxHQUFHLENBQUNDLHdCQUF3QixDQUFDVSxTQUFTLENBQ3BDcEIsVUFBVSxFQUNWLE1BQU1jLHdCQUF3QixDQUM1QmpFLE9BQU8sRUFBRW1ELFVBQVUsRUFBRXpKLEtBQUssQ0FBQ0UsS0FBSyxDQUFDbkQsSUFBSSxDQUFDLEVBQ3RDLG9CQUFvQixHQUFHNkssSUFBSSxHQUFHLEdBQ2hDLENBQ0YsQ0FDRixDQUFDLENBQUMsQ0FBQzZDLElBQUksQ0FBQ3pLLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO0VBQ3RCLENBQUM7RUFFRGdSLGNBQWMsRUFBRSxTQUFBQSxDQUFVQyxTQUFTLEVBQUU7SUFDbkMsSUFBSS9YLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSXNMLE9BQU8sR0FBR3RMLElBQUksQ0FBQytWLFFBQVEsQ0FBQzFQLEdBQUcsQ0FBQzBSLFNBQVMsQ0FBQztJQUMxQyxJQUFJek0sT0FBTyxFQUNULE9BQU9BLE9BQU8sQ0FBQ2YsVUFBVSxDQUFDLEtBRTFCLE9BQU8sSUFBSTtFQUNmO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBSXNNLGdCQUFnQixHQUFHLFNBQUFBLENBQVVtQix1QkFBdUIsRUFDdkJDLHVCQUF1QixFQUFFO0VBQ3hELElBQUlDLGNBQWMsR0FBR25aLENBQUMsQ0FBQ21JLElBQUksQ0FBQzhRLHVCQUF1QixFQUFFLFVBQVUxTyxPQUFPLEVBQUU7SUFDdEUsT0FBT3ZLLENBQUMsQ0FBQzRYLFFBQVEsQ0FBQ3NCLHVCQUF1QixFQUFFM08sT0FBTyxDQUFDO0VBQ3JELENBQUMsQ0FBQztFQUNGLElBQUksQ0FBQzRPLGNBQWMsRUFBRTtJQUNuQkEsY0FBYyxHQUFHRCx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7RUFDN0M7RUFDQSxPQUFPQyxjQUFjO0FBQ3ZCLENBQUM7QUFFRDFULFNBQVMsQ0FBQzJULGlCQUFpQixHQUFHdEIsZ0JBQWdCOztBQUc5QztBQUNBO0FBQ0EsSUFBSWhGLHFCQUFxQixHQUFHLFNBQUFBLENBQVVELFNBQVMsRUFBRXdHLE9BQU8sRUFBRTtFQUN4RCxJQUFJLENBQUN4RyxTQUFTLEVBQUUsT0FBT0EsU0FBUzs7RUFFaEM7RUFDQTtFQUNBO0VBQ0EsSUFBSUEsU0FBUyxDQUFDeUcsWUFBWSxFQUFFO0lBQzFCLElBQUksRUFBRXpHLFNBQVMsWUFBWTdJLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDLEVBQUU7TUFDeEMsTUFBTW1QLGVBQWUsR0FBRzFHLFNBQVMsQ0FBQzJHLE9BQU87TUFDekMzRyxTQUFTLEdBQUcsSUFBSTdJLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDeUksU0FBUyxDQUFDaEQsS0FBSyxFQUFFZ0QsU0FBUyxDQUFDaEUsTUFBTSxFQUFFZ0UsU0FBUyxDQUFDNEcsT0FBTyxDQUFDO01BQ2xGNUcsU0FBUyxDQUFDMkcsT0FBTyxHQUFHRCxlQUFlO0lBQ3JDO0lBQ0EsT0FBTzFHLFNBQVM7RUFDbEI7O0VBRUE7RUFDQTtFQUNBLElBQUksQ0FBQ0EsU0FBUyxDQUFDNkcsZUFBZSxFQUFFO0lBQzlCMVAsTUFBTSxDQUFDMEUsTUFBTSxDQUFDLFlBQVksR0FBRzJLLE9BQU8sRUFBRXhHLFNBQVMsQ0FBQzhHLEtBQUssQ0FBQztJQUN0RCxJQUFJOUcsU0FBUyxDQUFDK0csY0FBYyxFQUFFO01BQzVCNVAsTUFBTSxDQUFDMEUsTUFBTSxDQUFDLDBDQUEwQyxFQUFFbUUsU0FBUyxDQUFDK0csY0FBYyxDQUFDO01BQ25GNVAsTUFBTSxDQUFDMEUsTUFBTSxDQUFDLENBQUM7SUFDakI7RUFDRjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUltRSxTQUFTLENBQUMrRyxjQUFjLEVBQUU7SUFDNUIsSUFBSS9HLFNBQVMsQ0FBQytHLGNBQWMsQ0FBQ04sWUFBWSxFQUN2QyxPQUFPekcsU0FBUyxDQUFDK0csY0FBYztJQUNqQzVQLE1BQU0sQ0FBQzBFLE1BQU0sQ0FBQyxZQUFZLEdBQUcySyxPQUFPLEdBQUcsa0NBQWtDLEdBQzNELG1EQUFtRCxDQUFDO0VBQ3BFO0VBRUEsT0FBTyxJQUFJclAsTUFBTSxDQUFDSSxLQUFLLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDO0FBQ3ZELENBQUM7O0FBR0Q7QUFDQTtBQUNBLElBQUlnSSx3QkFBd0IsR0FBRyxTQUFBQSxDQUFVWSxDQUFDLEVBQUVxRyxPQUFPLEVBQUV6VSxJQUFJLEVBQUVpVixXQUFXLEVBQUU7RUFDdEVqVixJQUFJLEdBQUdBLElBQUksSUFBSSxFQUFFO0VBQ2pCLElBQUlzSSxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUNwQyxPQUFPNE0sS0FBSyxDQUFDQyxnQ0FBZ0MsQ0FDM0MvRyxDQUFDLEVBQUVxRyxPQUFPLEVBQUV6VSxJQUFJLEVBQUVpVixXQUFXLENBQUM7RUFDbEM7RUFDQSxPQUFPN0csQ0FBQyxDQUFDN04sS0FBSyxDQUFDa1UsT0FBTyxFQUFFelUsSUFBSSxDQUFDO0FBQy9CLENBQUMsQzs7Ozs7Ozs7Ozs7QUNuNURELElBQUlvVixNQUFNLEdBQUd0WixHQUFHLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E4RSxTQUFTLENBQUNxTCxXQUFXLEdBQUcsWUFBWTtFQUNsQyxJQUFJN1AsSUFBSSxHQUFHLElBQUk7RUFFZkEsSUFBSSxDQUFDZ1osS0FBSyxHQUFHLEtBQUs7RUFDbEJoWixJQUFJLENBQUNpWixLQUFLLEdBQUcsS0FBSztFQUNsQmpaLElBQUksQ0FBQ2taLE9BQU8sR0FBRyxLQUFLO0VBQ3BCbFosSUFBSSxDQUFDbVosa0JBQWtCLEdBQUcsQ0FBQztFQUMzQm5aLElBQUksQ0FBQ29aLHFCQUFxQixHQUFHLEVBQUU7RUFDL0JwWixJQUFJLENBQUNxWixvQkFBb0IsR0FBRyxFQUFFO0FBQ2hDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTdVLFNBQVMsQ0FBQ2dOLGtCQUFrQixHQUFHLElBQUl6SSxNQUFNLENBQUN1USxtQkFBbUIsQ0FBRCxDQUFDO0FBRTdEdmEsQ0FBQyxDQUFDbUgsTUFBTSxDQUFDMUIsU0FBUyxDQUFDcUwsV0FBVyxDQUFDOU0sU0FBUyxFQUFFO0VBQ3hDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQXdXLFVBQVUsRUFBRSxTQUFBQSxDQUFBLEVBQVk7SUFDdEIsSUFBSXZaLElBQUksR0FBRyxJQUFJO0lBRWYsSUFBSUEsSUFBSSxDQUFDa1osT0FBTyxFQUNkLE9BQU87TUFBRU0sU0FBUyxFQUFFLFNBQUFBLENBQUEsRUFBWSxDQUFDO0lBQUUsQ0FBQztJQUV0QyxJQUFJeFosSUFBSSxDQUFDaVosS0FBSyxFQUNaLE1BQU0sSUFBSTlQLEtBQUssQ0FBQyx1REFBdUQsQ0FBQztJQUUxRW5KLElBQUksQ0FBQ21aLGtCQUFrQixFQUFFO0lBQ3pCLElBQUlLLFNBQVMsR0FBRyxLQUFLO0lBQ3JCLE9BQU87TUFDTEEsU0FBUyxFQUFFLFNBQUFBLENBQUEsRUFBWTtRQUNyQixJQUFJQSxTQUFTLEVBQ1gsTUFBTSxJQUFJclEsS0FBSyxDQUFDLDBDQUEwQyxDQUFDO1FBQzdEcVEsU0FBUyxHQUFHLElBQUk7UUFDaEJ4WixJQUFJLENBQUNtWixrQkFBa0IsRUFBRTtRQUN6Qm5aLElBQUksQ0FBQ3laLFVBQVUsQ0FBQyxDQUFDO01BQ25CO0lBQ0YsQ0FBQztFQUNILENBQUM7RUFFRDtFQUNBO0VBQ0F2SixHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ2YsSUFBSWxRLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSUEsSUFBSSxLQUFLd0UsU0FBUyxDQUFDZ04sa0JBQWtCLENBQUNuTCxHQUFHLENBQUMsQ0FBQyxFQUM3QyxNQUFNOEMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO0lBQzVDbkosSUFBSSxDQUFDZ1osS0FBSyxHQUFHLElBQUk7SUFDakJoWixJQUFJLENBQUN5WixVQUFVLENBQUMsQ0FBQztFQUNuQixDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0FDLFlBQVksRUFBRSxTQUFBQSxDQUFVdkMsSUFBSSxFQUFFO0lBQzVCLElBQUluWCxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlBLElBQUksQ0FBQ2laLEtBQUssRUFDWixNQUFNLElBQUk5UCxLQUFLLENBQUMsNkNBQTZDLEdBQzdDLGdCQUFnQixDQUFDO0lBQ25DbkosSUFBSSxDQUFDb1oscUJBQXFCLENBQUM1WixJQUFJLENBQUMyWCxJQUFJLENBQUM7RUFDdkMsQ0FBQztFQUVEO0VBQ0FySCxjQUFjLEVBQUUsU0FBQUEsQ0FBVXFILElBQUksRUFBRTtJQUM5QixJQUFJblgsSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJQSxJQUFJLENBQUNpWixLQUFLLEVBQ1osTUFBTSxJQUFJOVAsS0FBSyxDQUFDLDZDQUE2QyxHQUM3QyxnQkFBZ0IsQ0FBQztJQUNuQ25KLElBQUksQ0FBQ3FaLG9CQUFvQixDQUFDN1osSUFBSSxDQUFDMlgsSUFBSSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBd0MsVUFBVSxFQUFFLFNBQUFBLENBQUEsRUFBWTtJQUN0QixJQUFJM1osSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJNFosTUFBTSxHQUFHLElBQUliLE1BQU0sQ0FBRCxDQUFDO0lBQ3ZCL1ksSUFBSSxDQUFDOFAsY0FBYyxDQUFDLFlBQVk7TUFDOUI4SixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUM7SUFDRjVaLElBQUksQ0FBQ2tRLEdBQUcsQ0FBQyxDQUFDO0lBQ1YwSixNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2YsQ0FBQztFQUVESixVQUFVLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ3RCLElBQUl6WixJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUlBLElBQUksQ0FBQ2laLEtBQUssRUFDWixNQUFNLElBQUk5UCxLQUFLLENBQUMsZ0NBQWdDLENBQUM7SUFDbkQsSUFBSW5KLElBQUksQ0FBQ2daLEtBQUssSUFBSSxDQUFDaFosSUFBSSxDQUFDbVosa0JBQWtCLEVBQUU7TUFDMUMsU0FBU1csY0FBY0EsQ0FBRTNDLElBQUksRUFBRTtRQUM3QixJQUFJO1VBQ0ZBLElBQUksQ0FBQ25YLElBQUksQ0FBQztRQUNaLENBQUMsQ0FBQyxPQUFPb0osR0FBRyxFQUFFO1VBQ1pMLE1BQU0sQ0FBQzBFLE1BQU0sQ0FBQyxtQ0FBbUMsRUFBRXJFLEdBQUcsQ0FBQztRQUN6RDtNQUNGO01BRUFwSixJQUFJLENBQUNtWixrQkFBa0IsRUFBRTtNQUN6QixPQUFPblosSUFBSSxDQUFDb1oscUJBQXFCLENBQUM1UyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVDLElBQUllLFNBQVMsR0FBR3ZILElBQUksQ0FBQ29aLHFCQUFxQjtRQUMxQ3BaLElBQUksQ0FBQ29aLHFCQUFxQixHQUFHLEVBQUU7UUFDL0JyYSxDQUFDLENBQUM0RCxJQUFJLENBQUM0RSxTQUFTLEVBQUV1UyxjQUFjLENBQUM7TUFDbkM7TUFDQTlaLElBQUksQ0FBQ21aLGtCQUFrQixFQUFFO01BRXpCLElBQUksQ0FBQ25aLElBQUksQ0FBQ21aLGtCQUFrQixFQUFFO1FBQzVCblosSUFBSSxDQUFDaVosS0FBSyxHQUFHLElBQUk7UUFDakIsSUFBSTFSLFNBQVMsR0FBR3ZILElBQUksQ0FBQ3FaLG9CQUFvQjtRQUN6Q3JaLElBQUksQ0FBQ3FaLG9CQUFvQixHQUFHLEVBQUU7UUFDOUJ0YSxDQUFDLENBQUM0RCxJQUFJLENBQUM0RSxTQUFTLEVBQUV1UyxjQUFjLENBQUM7TUFDbkM7SUFDRjtFQUNGLENBQUM7RUFFRDtFQUNBO0VBQ0EvSixNQUFNLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO0lBQ2xCLElBQUkvUCxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBRUEsSUFBSSxDQUFDaVosS0FBSyxFQUNkLE1BQU0sSUFBSTlQLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztJQUM1RG5KLElBQUksQ0FBQ2taLE9BQU8sR0FBRyxJQUFJO0VBQ3JCO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDbElGO0FBQ0E7QUFDQTs7QUFFQTFVLFNBQVMsQ0FBQ3VWLFNBQVMsR0FBRyxVQUFVeFEsT0FBTyxFQUFFO0VBQ3ZDLElBQUl2SixJQUFJLEdBQUcsSUFBSTtFQUNmdUosT0FBTyxHQUFHQSxPQUFPLElBQUksQ0FBQyxDQUFDO0VBRXZCdkosSUFBSSxDQUFDZ2EsTUFBTSxHQUFHLENBQUM7RUFDZjtFQUNBO0VBQ0E7RUFDQWhhLElBQUksQ0FBQ2lhLHFCQUFxQixHQUFHLENBQUMsQ0FBQztFQUMvQmphLElBQUksQ0FBQ2thLDBCQUEwQixHQUFHLENBQUMsQ0FBQztFQUNwQ2xhLElBQUksQ0FBQ21hLFdBQVcsR0FBRzVRLE9BQU8sQ0FBQzRRLFdBQVcsSUFBSSxVQUFVO0VBQ3BEbmEsSUFBSSxDQUFDb2EsUUFBUSxHQUFHN1EsT0FBTyxDQUFDNlEsUUFBUSxJQUFJLElBQUk7QUFDMUMsQ0FBQztBQUVEcmIsQ0FBQyxDQUFDbUgsTUFBTSxDQUFDMUIsU0FBUyxDQUFDdVYsU0FBUyxDQUFDaFgsU0FBUyxFQUFFO0VBQ3RDO0VBQ0FzWCxxQkFBcUIsRUFBRSxTQUFBQSxDQUFVaFAsR0FBRyxFQUFFO0lBQ3BDLElBQUlyTCxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBRWpCLENBQUMsQ0FBQ2dJLEdBQUcsQ0FBQ3NFLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRTtNQUM5QixPQUFPLEVBQUU7SUFDWCxDQUFDLE1BQU0sSUFBSSxPQUFPQSxHQUFHLENBQUNxQixVQUFXLEtBQUssUUFBUSxFQUFFO01BQzlDLElBQUlyQixHQUFHLENBQUNxQixVQUFVLEtBQUssRUFBRSxFQUN2QixNQUFNdkQsS0FBSyxDQUFDLCtCQUErQixDQUFDO01BQzlDLE9BQU9rQyxHQUFHLENBQUNxQixVQUFVO0lBQ3ZCLENBQUMsTUFBTTtNQUNMLE1BQU12RCxLQUFLLENBQUMsb0NBQW9DLENBQUM7SUFDbkQ7RUFDRixDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQW1SLE1BQU0sRUFBRSxTQUFBQSxDQUFVQyxPQUFPLEVBQUUzWCxRQUFRLEVBQUU7SUFDbkMsSUFBSTVDLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSW1JLEVBQUUsR0FBR25JLElBQUksQ0FBQ2dhLE1BQU0sRUFBRTtJQUV0QixJQUFJdE4sVUFBVSxHQUFHMU0sSUFBSSxDQUFDcWEscUJBQXFCLENBQUNFLE9BQU8sQ0FBQztJQUNwRCxJQUFJQyxNQUFNLEdBQUc7TUFBQ0QsT0FBTyxFQUFFM1QsS0FBSyxDQUFDRSxLQUFLLENBQUN5VCxPQUFPLENBQUM7TUFBRTNYLFFBQVEsRUFBRUE7SUFBUSxDQUFDO0lBQ2hFLElBQUksQ0FBRTdELENBQUMsQ0FBQ2dJLEdBQUcsQ0FBQy9HLElBQUksQ0FBQ2lhLHFCQUFxQixFQUFFdk4sVUFBVSxDQUFDLEVBQUU7TUFDbkQxTSxJQUFJLENBQUNpYSxxQkFBcUIsQ0FBQ3ZOLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMzQzFNLElBQUksQ0FBQ2thLDBCQUEwQixDQUFDeE4sVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUNqRDtJQUNBMU0sSUFBSSxDQUFDaWEscUJBQXFCLENBQUN2TixVQUFVLENBQUMsQ0FBQ3ZFLEVBQUUsQ0FBQyxHQUFHcVMsTUFBTTtJQUNuRHhhLElBQUksQ0FBQ2thLDBCQUEwQixDQUFDeE4sVUFBVSxDQUFDLEVBQUU7SUFFN0MsSUFBSTFNLElBQUksQ0FBQ29hLFFBQVEsSUFBSW5PLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUMxQ0EsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxLQUFLLENBQUNDLG1CQUFtQixDQUM3Q25NLElBQUksQ0FBQ21hLFdBQVcsRUFBRW5hLElBQUksQ0FBQ29hLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkM7SUFFQSxPQUFPO01BQ0xoTixJQUFJLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO1FBQ2hCLElBQUlwTixJQUFJLENBQUNvYSxRQUFRLElBQUluTyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7VUFDMUNBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxtQkFBbUIsQ0FDN0NuTSxJQUFJLENBQUNtYSxXQUFXLEVBQUVuYSxJQUFJLENBQUNvYSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEM7UUFDQSxPQUFPcGEsSUFBSSxDQUFDaWEscUJBQXFCLENBQUN2TixVQUFVLENBQUMsQ0FBQ3ZFLEVBQUUsQ0FBQztRQUNqRG5JLElBQUksQ0FBQ2thLDBCQUEwQixDQUFDeE4sVUFBVSxDQUFDLEVBQUU7UUFDN0MsSUFBSTFNLElBQUksQ0FBQ2thLDBCQUEwQixDQUFDeE4sVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ3JELE9BQU8xTSxJQUFJLENBQUNpYSxxQkFBcUIsQ0FBQ3ZOLFVBQVUsQ0FBQztVQUM3QyxPQUFPMU0sSUFBSSxDQUFDa2EsMEJBQTBCLENBQUN4TixVQUFVLENBQUM7UUFDcEQ7TUFDRjtJQUNGLENBQUM7RUFDSCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBK04sSUFBSSxFQUFFLFNBQUFBLENBQVVDLFlBQVksRUFBRTtJQUM1QixJQUFJMWEsSUFBSSxHQUFHLElBQUk7SUFFZixJQUFJME0sVUFBVSxHQUFHMU0sSUFBSSxDQUFDcWEscUJBQXFCLENBQUNLLFlBQVksQ0FBQztJQUV6RCxJQUFJLENBQUUzYixDQUFDLENBQUNnSSxHQUFHLENBQUMvRyxJQUFJLENBQUNpYSxxQkFBcUIsRUFBRXZOLFVBQVUsQ0FBQyxFQUFFO01BQ25EO0lBQ0Y7SUFFQSxJQUFJaU8sc0JBQXNCLEdBQUczYSxJQUFJLENBQUNpYSxxQkFBcUIsQ0FBQ3ZOLFVBQVUsQ0FBQztJQUNuRSxJQUFJa08sV0FBVyxHQUFHLEVBQUU7SUFDcEI3YixDQUFDLENBQUM0RCxJQUFJLENBQUNnWSxzQkFBc0IsRUFBRSxVQUFVRSxDQUFDLEVBQUUxUyxFQUFFLEVBQUU7TUFDOUMsSUFBSW5JLElBQUksQ0FBQzhhLFFBQVEsQ0FBQ0osWUFBWSxFQUFFRyxDQUFDLENBQUNOLE9BQU8sQ0FBQyxFQUFFO1FBQzFDSyxXQUFXLENBQUNwYixJQUFJLENBQUMySSxFQUFFLENBQUM7TUFDdEI7SUFDRixDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FwSixDQUFDLENBQUM0RCxJQUFJLENBQUNpWSxXQUFXLEVBQUUsVUFBVXpTLEVBQUUsRUFBRTtNQUNoQyxJQUFJcEosQ0FBQyxDQUFDZ0ksR0FBRyxDQUFDNFQsc0JBQXNCLEVBQUV4UyxFQUFFLENBQUMsRUFBRTtRQUNyQ3dTLHNCQUFzQixDQUFDeFMsRUFBRSxDQUFDLENBQUN2RixRQUFRLENBQUM4WCxZQUFZLENBQUM7TUFDbkQ7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBSSxRQUFRLEVBQUUsU0FBQUEsQ0FBVUosWUFBWSxFQUFFSCxPQUFPLEVBQUU7SUFDekM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksT0FBT0csWUFBWSxDQUFDdlMsRUFBRyxLQUFLLFFBQVEsSUFDcEMsT0FBT29TLE9BQU8sQ0FBQ3BTLEVBQUcsS0FBSyxRQUFRLElBQy9CdVMsWUFBWSxDQUFDdlMsRUFBRSxLQUFLb1MsT0FBTyxDQUFDcFMsRUFBRSxFQUFFO01BQ2xDLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSXVTLFlBQVksQ0FBQ3ZTLEVBQUUsWUFBWWlNLE9BQU8sQ0FBQzJHLFFBQVEsSUFDM0NSLE9BQU8sQ0FBQ3BTLEVBQUUsWUFBWWlNLE9BQU8sQ0FBQzJHLFFBQVEsSUFDdEMsQ0FBRUwsWUFBWSxDQUFDdlMsRUFBRSxDQUFDdEIsTUFBTSxDQUFDMFQsT0FBTyxDQUFDcFMsRUFBRSxDQUFDLEVBQUU7TUFDeEMsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxPQUFPcEosQ0FBQyxDQUFDaVcsR0FBRyxDQUFDdUYsT0FBTyxFQUFFLFVBQVVTLFlBQVksRUFBRXRWLEdBQUcsRUFBRTtNQUNqRCxPQUFPLENBQUMzRyxDQUFDLENBQUNnSSxHQUFHLENBQUMyVCxZQUFZLEVBQUVoVixHQUFHLENBQUMsSUFDOUJrQixLQUFLLENBQUNDLE1BQU0sQ0FBQ21VLFlBQVksRUFBRU4sWUFBWSxDQUFDaFYsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBbEIsU0FBUyxDQUFDeVcscUJBQXFCLEdBQUcsSUFBSXpXLFNBQVMsQ0FBQ3VWLFNBQVMsQ0FBQztFQUN4REssUUFBUSxFQUFFO0FBQ1osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDdEtGLElBQUlqYixPQUFPLENBQUNDLEdBQUcsQ0FBQzhiLDBCQUEwQixFQUFFO0VBQzFDcmIseUJBQXlCLENBQUNxYiwwQkFBMEIsR0FDbEQvYixPQUFPLENBQUNDLEdBQUcsQ0FBQzhiLDBCQUEwQjtBQUMxQztBQUVBblMsTUFBTSxDQUFDN0gsTUFBTSxHQUFHLElBQUl1VSxNQUFNLENBQUQsQ0FBQztBQUUxQjFNLE1BQU0sQ0FBQ29TLE9BQU8sR0FBRyxVQUFVVCxZQUFZLEVBQUU7RUFDdkNsVyxTQUFTLENBQUN5VyxxQkFBcUIsQ0FBQ1IsSUFBSSxDQUFDQyxZQUFZLENBQUM7QUFDcEQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EzYixDQUFDLENBQUM0RCxJQUFJLENBQ0osQ0FDRSxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLEVBQ1gsT0FBTyxFQUNQLFlBQVksRUFDWixjQUFjLEVBQ2QsV0FBVyxDQUNaLEVBQ0QsVUFBUzZMLElBQUksRUFBRTtFQUNiekYsTUFBTSxDQUFDeUYsSUFBSSxDQUFDLEdBQUd6UCxDQUFDLENBQUNpSixJQUFJLENBQUNlLE1BQU0sQ0FBQzdILE1BQU0sQ0FBQ3NOLElBQUksQ0FBQyxFQUFFekYsTUFBTSxDQUFDN0gsTUFBTSxDQUFDO0FBQzNELENBQ0YsQ0FBQyxDIiwiZmlsZSI6Ii9wYWNrYWdlcy9kZHAtc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQnkgZGVmYXVsdCwgd2UgdXNlIHRoZSBwZXJtZXNzYWdlLWRlZmxhdGUgZXh0ZW5zaW9uIHdpdGggZGVmYXVsdFxuLy8gY29uZmlndXJhdGlvbi4gSWYgJFNFUlZFUl9XRUJTT0NLRVRfQ09NUFJFU1NJT04gaXMgc2V0LCB0aGVuIGl0IG11c3QgYmUgdmFsaWRcbi8vIEpTT04uIElmIGl0IHJlcHJlc2VudHMgYSBmYWxzZXkgdmFsdWUsIHRoZW4gd2UgZG8gbm90IHVzZSBwZXJtZXNzYWdlLWRlZmxhdGVcbi8vIGF0IGFsbDsgb3RoZXJ3aXNlLCB0aGUgSlNPTiB2YWx1ZSBpcyB1c2VkIGFzIGFuIGFyZ3VtZW50IHRvIGRlZmxhdGUnc1xuLy8gY29uZmlndXJlIG1ldGhvZDsgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmF5ZS9wZXJtZXNzYWdlLWRlZmxhdGUtbm9kZS9ibG9iL21hc3Rlci9SRUFETUUubWRcbi8vXG4vLyAoV2UgZG8gdGhpcyBpbiBhbiBfLm9uY2UgaW5zdGVhZCBvZiBhdCBzdGFydHVwLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG9cbi8vIGNyYXNoIHRoZSB0b29sIGR1cmluZyBpc29wYWNrZXQgbG9hZCBpZiB5b3VyIEpTT04gZG9lc24ndCBwYXJzZS4gVGhpcyBpcyBvbmx5XG4vLyBhIHByb2JsZW0gYmVjYXVzZSB0aGUgdG9vbCBoYXMgdG8gbG9hZCB0aGUgRERQIHNlcnZlciBjb2RlIGp1c3QgaW4gb3JkZXIgdG9cbi8vIGJlIGEgRERQIGNsaWVudDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL2lzc3Vlcy8zNDUyIC4pXG52YXIgd2Vic29ja2V0RXh0ZW5zaW9ucyA9IF8ub25jZShmdW5jdGlvbiAoKSB7XG4gIHZhciBleHRlbnNpb25zID0gW107XG5cbiAgdmFyIHdlYnNvY2tldENvbXByZXNzaW9uQ29uZmlnID0gcHJvY2Vzcy5lbnYuU0VSVkVSX1dFQlNPQ0tFVF9DT01QUkVTU0lPTlxuICAgICAgICA/IEpTT04ucGFyc2UocHJvY2Vzcy5lbnYuU0VSVkVSX1dFQlNPQ0tFVF9DT01QUkVTU0lPTikgOiB7fTtcbiAgaWYgKHdlYnNvY2tldENvbXByZXNzaW9uQ29uZmlnKSB7XG4gICAgZXh0ZW5zaW9ucy5wdXNoKE5wbS5yZXF1aXJlKCdwZXJtZXNzYWdlLWRlZmxhdGUnKS5jb25maWd1cmUoXG4gICAgICB3ZWJzb2NrZXRDb21wcmVzc2lvbkNvbmZpZ1xuICAgICkpO1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuc2lvbnM7XG59KTtcblxudmFyIHBhdGhQcmVmaXggPSBfX21ldGVvcl9ydW50aW1lX2NvbmZpZ19fLlJPT1RfVVJMX1BBVEhfUFJFRklYIHx8ICBcIlwiO1xuXG5TdHJlYW1TZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5yZWdpc3RyYXRpb25fY2FsbGJhY2tzID0gW107XG4gIHNlbGYub3Blbl9zb2NrZXRzID0gW107XG5cbiAgLy8gQmVjYXVzZSB3ZSBhcmUgaW5zdGFsbGluZyBkaXJlY3RseSBvbnRvIFdlYkFwcC5odHRwU2VydmVyIGluc3RlYWQgb2YgdXNpbmdcbiAgLy8gV2ViQXBwLmFwcCwgd2UgaGF2ZSB0byBwcm9jZXNzIHRoZSBwYXRoIHByZWZpeCBvdXJzZWx2ZXMuXG4gIHNlbGYucHJlZml4ID0gcGF0aFByZWZpeCArICcvc29ja2pzJztcbiAgUm91dGVQb2xpY3kuZGVjbGFyZShzZWxmLnByZWZpeCArICcvJywgJ25ldHdvcmsnKTtcblxuICAvLyBzZXQgdXAgc29ja2pzXG4gIHZhciBzb2NranMgPSBOcG0ucmVxdWlyZSgnc29ja2pzJyk7XG4gIHZhciBzZXJ2ZXJPcHRpb25zID0ge1xuICAgIHByZWZpeDogc2VsZi5wcmVmaXgsXG4gICAgbG9nOiBmdW5jdGlvbigpIHt9LFxuICAgIC8vIHRoaXMgaXMgdGhlIGRlZmF1bHQsIGJ1dCB3ZSBjb2RlIGl0IGV4cGxpY2l0bHkgYmVjYXVzZSB3ZSBkZXBlbmRcbiAgICAvLyBvbiBpdCBpbiBzdHJlYW1fY2xpZW50OkhFQVJUQkVBVF9USU1FT1VUXG4gICAgaGVhcnRiZWF0X2RlbGF5OiA0NTAwMCxcbiAgICAvLyBUaGUgZGVmYXVsdCBkaXNjb25uZWN0X2RlbGF5IGlzIDUgc2Vjb25kcywgYnV0IGlmIHRoZSBzZXJ2ZXIgZW5kcyB1cCBDUFVcbiAgICAvLyBib3VuZCBmb3IgdGhhdCBtdWNoIHRpbWUsIFNvY2tKUyBtaWdodCBub3Qgbm90aWNlIHRoYXQgdGhlIHVzZXIgaGFzXG4gICAgLy8gcmVjb25uZWN0ZWQgYmVjYXVzZSB0aGUgdGltZXIgKG9mIGRpc2Nvbm5lY3RfZGVsYXkgbXMpIGNhbiBmaXJlIGJlZm9yZVxuICAgIC8vIFNvY2tKUyBwcm9jZXNzZXMgdGhlIG5ldyBjb25uZWN0aW9uLiBFdmVudHVhbGx5IHdlJ2xsIGZpeCB0aGlzIGJ5IG5vdFxuICAgIC8vIGNvbWJpbmluZyBDUFUtaGVhdnkgcHJvY2Vzc2luZyB3aXRoIFNvY2tKUyB0ZXJtaW5hdGlvbiAoZWcgYSBwcm94eSB3aGljaFxuICAgIC8vIGNvbnZlcnRzIHRvIFVuaXggc29ja2V0cykgYnV0IGZvciBub3csIHJhaXNlIHRoZSBkZWxheS5cbiAgICBkaXNjb25uZWN0X2RlbGF5OiA2MCAqIDEwMDAsXG4gICAgLy8gQWxsb3cgZGlzYWJsaW5nIG9mIENPUlMgcmVxdWVzdHMgdG8gYWRkcmVzc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL2lzc3Vlcy84MzE3LlxuICAgIGRpc2FibGVfY29yczogISFwcm9jZXNzLmVudi5ESVNBQkxFX1NPQ0tKU19DT1JTLFxuICAgIC8vIFNldCB0aGUgVVNFX0pTRVNTSU9OSUQgZW52aXJvbm1lbnQgdmFyaWFibGUgdG8gZW5hYmxlIHNldHRpbmcgdGhlXG4gICAgLy8gSlNFU1NJT05JRCBjb29raWUuIFRoaXMgaXMgdXNlZnVsIGZvciBzZXR0aW5nIHVwIHByb3hpZXMgd2l0aFxuICAgIC8vIHNlc3Npb24gYWZmaW5pdHkuXG4gICAganNlc3Npb25pZDogISFwcm9jZXNzLmVudi5VU0VfSlNFU1NJT05JRFxuICB9O1xuXG4gIC8vIElmIHlvdSBrbm93IHlvdXIgc2VydmVyIGVudmlyb25tZW50IChlZywgcHJveGllcykgd2lsbCBwcmV2ZW50IHdlYnNvY2tldHNcbiAgLy8gZnJvbSBldmVyIHdvcmtpbmcsIHNldCAkRElTQUJMRV9XRUJTT0NLRVRTIGFuZCBTb2NrSlMgY2xpZW50cyAoaWUsXG4gIC8vIGJyb3dzZXJzKSB3aWxsIG5vdCB3YXN0ZSB0aW1lIGF0dGVtcHRpbmcgdG8gdXNlIHRoZW0uXG4gIC8vIChZb3VyIHNlcnZlciB3aWxsIHN0aWxsIGhhdmUgYSAvd2Vic29ja2V0IGVuZHBvaW50LilcbiAgaWYgKHByb2Nlc3MuZW52LkRJU0FCTEVfV0VCU09DS0VUUykge1xuICAgIHNlcnZlck9wdGlvbnMud2Vic29ja2V0ID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgc2VydmVyT3B0aW9ucy5mYXllX3NlcnZlcl9vcHRpb25zID0ge1xuICAgICAgZXh0ZW5zaW9uczogd2Vic29ja2V0RXh0ZW5zaW9ucygpXG4gICAgfTtcbiAgfVxuXG4gIHNlbGYuc2VydmVyID0gc29ja2pzLmNyZWF0ZVNlcnZlcihzZXJ2ZXJPcHRpb25zKTtcblxuICAvLyBJbnN0YWxsIHRoZSBzb2NranMgaGFuZGxlcnMsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgYXJvdW5kIG91ciBvd24gcGFydGljdWxhclxuICAvLyByZXF1ZXN0IGhhbmRsZXIgdGhhdCBhZGp1c3RzIGlkbGUgdGltZW91dHMgd2hpbGUgd2UgaGF2ZSBhbiBvdXRzdGFuZGluZ1xuICAvLyByZXF1ZXN0LiAgVGhpcyBjb21wZW5zYXRlcyBmb3IgdGhlIGZhY3QgdGhhdCBzb2NranMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzXG4gIC8vIGZvciBcInJlcXVlc3RcIiB0byBhZGQgaXRzIG93bi5cbiAgV2ViQXBwLmh0dHBTZXJ2ZXIucmVtb3ZlTGlzdGVuZXIoXG4gICAgJ3JlcXVlc3QnLCBXZWJBcHAuX3RpbWVvdXRBZGp1c3RtZW50UmVxdWVzdENhbGxiYWNrKTtcbiAgc2VsZi5zZXJ2ZXIuaW5zdGFsbEhhbmRsZXJzKFdlYkFwcC5odHRwU2VydmVyKTtcbiAgV2ViQXBwLmh0dHBTZXJ2ZXIuYWRkTGlzdGVuZXIoXG4gICAgJ3JlcXVlc3QnLCBXZWJBcHAuX3RpbWVvdXRBZGp1c3RtZW50UmVxdWVzdENhbGxiYWNrKTtcblxuICAvLyBTdXBwb3J0IHRoZSAvd2Vic29ja2V0IGVuZHBvaW50XG4gIHNlbGYuX3JlZGlyZWN0V2Vic29ja2V0RW5kcG9pbnQoKTtcblxuICBzZWxmLnNlcnZlci5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAvLyBzb2NranMgc29tZXRpbWVzIHBhc3NlcyB1cyBudWxsIGluc3RlYWQgb2YgYSBzb2NrZXQgb2JqZWN0XG4gICAgLy8gc28gd2UgbmVlZCB0byBndWFyZCBhZ2FpbnN0IHRoYXQuIHNlZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc29ja2pzL3NvY2tqcy1ub2RlL2lzc3Vlcy8xMjFcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWV0ZW9yL21ldGVvci9pc3N1ZXMvMTA0NjhcbiAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuXG4gICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgdGhhdCBpZiBhIGNsaWVudCBjb25uZWN0cyB0byB1cyBhbmQgZG9lcyB0aGUgaW5pdGlhbFxuICAgIC8vIFdlYnNvY2tldCBoYW5kc2hha2UgYnV0IG5ldmVyIGdldHMgdG8gdGhlIEREUCBoYW5kc2hha2UsIHRoYXQgd2VcbiAgICAvLyBldmVudHVhbGx5IGtpbGwgdGhlIHNvY2tldC4gIE9uY2UgdGhlIEREUCBoYW5kc2hha2UgaGFwcGVucywgRERQXG4gICAgLy8gaGVhcnRiZWF0aW5nIHdpbGwgd29yay4gQW5kIGJlZm9yZSB0aGUgV2Vic29ja2V0IGhhbmRzaGFrZSwgdGhlIHRpbWVvdXRzXG4gICAgLy8gd2Ugc2V0IGF0IHRoZSBzZXJ2ZXIgbGV2ZWwgaW4gd2ViYXBwX3NlcnZlci5qcyB3aWxsIHdvcmsuIEJ1dFxuICAgIC8vIGZheWUtd2Vic29ja2V0IGNhbGxzIHNldFRpbWVvdXQoMCkgb24gYW55IHNvY2tldCBpdCB0YWtlcyBvdmVyLCBzbyB0aGVyZVxuICAgIC8vIGlzIGFuIFwiaW4gYmV0d2VlblwiIHN0YXRlIHdoZXJlIHRoaXMgZG9lc24ndCBoYXBwZW4uICBXZSB3b3JrIGFyb3VuZCB0aGlzXG4gICAgLy8gYnkgZXhwbGljaXRseSBzZXR0aW5nIHRoZSBzb2NrZXQgdGltZW91dCB0byBhIHJlbGF0aXZlbHkgbGFyZ2UgdGltZSBoZXJlLFxuICAgIC8vIGFuZCBzZXR0aW5nIGl0IGJhY2sgdG8gemVybyB3aGVuIHdlIHNldCB1cCB0aGUgaGVhcnRiZWF0IGluXG4gICAgLy8gbGl2ZWRhdGFfc2VydmVyLmpzLlxuICAgIHNvY2tldC5zZXRXZWJzb2NrZXRUaW1lb3V0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgIGlmICgoc29ja2V0LnByb3RvY29sID09PSAnd2Vic29ja2V0JyB8fFxuICAgICAgICAgICBzb2NrZXQucHJvdG9jb2wgPT09ICd3ZWJzb2NrZXQtcmF3JylcbiAgICAgICAgICAmJiBzb2NrZXQuX3Nlc3Npb24ucmVjdikge1xuICAgICAgICBzb2NrZXQuX3Nlc3Npb24ucmVjdi5jb25uZWN0aW9uLnNldFRpbWVvdXQodGltZW91dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzb2NrZXQuc2V0V2Vic29ja2V0VGltZW91dCg0NSAqIDEwMDApO1xuXG4gICAgc29ja2V0LnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc29ja2V0LndyaXRlKGRhdGEpO1xuICAgIH07XG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub3Blbl9zb2NrZXRzID0gXy53aXRob3V0KHNlbGYub3Blbl9zb2NrZXRzLCBzb2NrZXQpO1xuICAgIH0pO1xuICAgIHNlbGYub3Blbl9zb2NrZXRzLnB1c2goc29ja2V0KTtcblxuICAgIC8vIG9ubHkgdG8gc2VuZCBhIG1lc3NhZ2UgYWZ0ZXIgY29ubmVjdGlvbiBvbiB0ZXN0cywgdXNlZnVsIGZvclxuICAgIC8vIHNvY2tldC1zdHJlYW0tY2xpZW50L3NlcnZlci10ZXN0cy5qc1xuICAgIGlmIChwcm9jZXNzLmVudi5URVNUX01FVEFEQVRBICYmIHByb2Nlc3MuZW52LlRFU1RfTUVUQURBVEEgIT09IFwie31cIikge1xuICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0ZXN0TWVzc2FnZU9uQ29ubmVjdDogdHJ1ZSB9KSk7XG4gICAgfVxuXG4gICAgLy8gY2FsbCBhbGwgb3VyIGNhbGxiYWNrcyB3aGVuIHdlIGdldCBhIG5ldyBzb2NrZXQuIHRoZXkgd2lsbCBkbyB0aGVcbiAgICAvLyB3b3JrIG9mIHNldHRpbmcgdXAgaGFuZGxlcnMgYW5kIHN1Y2ggZm9yIHNwZWNpZmljIG1lc3NhZ2VzLlxuICAgIF8uZWFjaChzZWxmLnJlZ2lzdHJhdGlvbl9jYWxsYmFja3MsIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soc29ja2V0KTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cbk9iamVjdC5hc3NpZ24oU3RyZWFtU2VydmVyLnByb3RvdHlwZSwge1xuICAvLyBjYWxsIG15IGNhbGxiYWNrIHdoZW4gYSBuZXcgc29ja2V0IGNvbm5lY3RzLlxuICAvLyBhbHNvIGNhbGwgaXQgZm9yIGFsbCBjdXJyZW50IGNvbm5lY3Rpb25zLlxuICByZWdpc3RlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucmVnaXN0cmF0aW9uX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICBfLmVhY2goc2VsZi5hbGxfc29ja2V0cygpLCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICBjYWxsYmFjayhzb2NrZXQpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIGdldCBhIGxpc3Qgb2YgYWxsIHNvY2tldHNcbiAgYWxsX3NvY2tldHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIF8udmFsdWVzKHNlbGYub3Blbl9zb2NrZXRzKTtcbiAgfSxcblxuICAvLyBSZWRpcmVjdCAvd2Vic29ja2V0IHRvIC9zb2NranMvd2Vic29ja2V0IGluIG9yZGVyIHRvIG5vdCBleHBvc2VcbiAgLy8gc29ja2pzIHRvIGNsaWVudHMgdGhhdCB3YW50IHRvIHVzZSByYXcgd2Vic29ja2V0c1xuICBfcmVkaXJlY3RXZWJzb2NrZXRFbmRwb2ludDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIFVuZm9ydHVuYXRlbHkgd2UgY2FuJ3QgdXNlIGEgY29ubmVjdCBtaWRkbGV3YXJlIGhlcmUgc2luY2VcbiAgICAvLyBzb2NranMgaW5zdGFsbHMgaXRzZWxmIHByaW9yIHRvIGFsbCBleGlzdGluZyBsaXN0ZW5lcnNcbiAgICAvLyAobWVhbmluZyBwcmlvciB0byBhbnkgY29ubmVjdCBtaWRkbGV3YXJlcykgc28gd2UgbmVlZCB0byB0YWtlXG4gICAgLy8gYW4gYXBwcm9hY2ggc2ltaWxhciB0byBvdmVyc2hhZG93TGlzdGVuZXJzIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvY2tqcy9zb2NranMtbm9kZS9ibG9iL2NmODIwYzU1YWY2YTk5NTNlMTY1NTg1NTVhMzFkZWNlYTU1NGY3MGUvc3JjL3V0aWxzLmNvZmZlZVxuICAgIFsncmVxdWVzdCcsICd1cGdyYWRlJ10uZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHZhciBodHRwU2VydmVyID0gV2ViQXBwLmh0dHBTZXJ2ZXI7XG4gICAgICB2YXIgb2xkSHR0cFNlcnZlckxpc3RlbmVycyA9IGh0dHBTZXJ2ZXIubGlzdGVuZXJzKGV2ZW50KS5zbGljZSgwKTtcbiAgICAgIGh0dHBTZXJ2ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KTtcblxuICAgICAgLy8gcmVxdWVzdCBhbmQgdXBncmFkZSBoYXZlIGRpZmZlcmVudCBhcmd1bWVudHMgcGFzc2VkIGJ1dFxuICAgICAgLy8gd2Ugb25seSBjYXJlIGFib3V0IHRoZSBmaXJzdCBvbmUgd2hpY2ggaXMgYWx3YXlzIHJlcXVlc3RcbiAgICAgIHZhciBuZXdMaXN0ZW5lciA9IGZ1bmN0aW9uKHJlcXVlc3QgLyosIG1vcmVBcmd1bWVudHMgKi8pIHtcbiAgICAgICAgLy8gU3RvcmUgYXJndW1lbnRzIGZvciB1c2Ugd2l0aGluIHRoZSBjbG9zdXJlIGJlbG93XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIC8vIFRPRE8gcmVwbGFjZSB3aXRoIHVybCBwYWNrYWdlXG4gICAgICAgIHZhciB1cmwgPSBOcG0ucmVxdWlyZSgndXJsJyk7XG5cbiAgICAgICAgLy8gUmV3cml0ZSAvd2Vic29ja2V0IGFuZCAvd2Vic29ja2V0LyB1cmxzIHRvIC9zb2NranMvd2Vic29ja2V0IHdoaWxlXG4gICAgICAgIC8vIHByZXNlcnZpbmcgcXVlcnkgc3RyaW5nLlxuICAgICAgICB2YXIgcGFyc2VkVXJsID0gdXJsLnBhcnNlKHJlcXVlc3QudXJsKTtcbiAgICAgICAgaWYgKHBhcnNlZFVybC5wYXRobmFtZSA9PT0gcGF0aFByZWZpeCArICcvd2Vic29ja2V0JyB8fFxuICAgICAgICAgICAgcGFyc2VkVXJsLnBhdGhuYW1lID09PSBwYXRoUHJlZml4ICsgJy93ZWJzb2NrZXQvJykge1xuICAgICAgICAgIHBhcnNlZFVybC5wYXRobmFtZSA9IHNlbGYucHJlZml4ICsgJy93ZWJzb2NrZXQnO1xuICAgICAgICAgIHJlcXVlc3QudXJsID0gdXJsLmZvcm1hdChwYXJzZWRVcmwpO1xuICAgICAgICB9XG4gICAgICAgIF8uZWFjaChvbGRIdHRwU2VydmVyTGlzdGVuZXJzLCBmdW5jdGlvbihvbGRMaXN0ZW5lcikge1xuICAgICAgICAgIG9sZExpc3RlbmVyLmFwcGx5KGh0dHBTZXJ2ZXIsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBodHRwU2VydmVyLmFkZExpc3RlbmVyKGV2ZW50LCBuZXdMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiRERQU2VydmVyID0ge307XG5cbnZhciBGaWJlciA9IE5wbS5yZXF1aXJlKCdmaWJlcnMnKTtcblxuLy8gUHVibGljYXRpb24gc3RyYXRlZ2llcyBkZWZpbmUgaG93IHdlIGhhbmRsZSBkYXRhIGZyb20gcHVibGlzaGVkIGN1cnNvcnMgYXQgdGhlIGNvbGxlY3Rpb24gbGV2ZWxcbi8vIFRoaXMgYWxsb3dzIHNvbWVvbmUgdG86XG4vLyAtIENob29zZSBhIHRyYWRlLW9mZiBiZXR3ZWVuIGNsaWVudC1zZXJ2ZXIgYmFuZHdpZHRoIGFuZCBzZXJ2ZXIgbWVtb3J5IHVzYWdlXG4vLyAtIEltcGxlbWVudCBzcGVjaWFsIChub24tbW9uZ28pIGNvbGxlY3Rpb25zIGxpa2Ugdm9sYXRpbGUgbWVzc2FnZSBxdWV1ZXNcbmNvbnN0IHB1YmxpY2F0aW9uU3RyYXRlZ2llcyA9IHtcbiAgLy8gU0VSVkVSX01FUkdFIGlzIHRoZSBkZWZhdWx0IHN0cmF0ZWd5LlxuICAvLyBXaGVuIHVzaW5nIHRoaXMgc3RyYXRlZ3ksIHRoZSBzZXJ2ZXIgbWFpbnRhaW5zIGEgY29weSBvZiBhbGwgZGF0YSBhIGNvbm5lY3Rpb24gaXMgc3Vic2NyaWJlZCB0by5cbiAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gb25seSBzZW5kIGRlbHRhcyBvdmVyIG11bHRpcGxlIHB1YmxpY2F0aW9ucy5cbiAgU0VSVkVSX01FUkdFOiB7XG4gICAgdXNlRHVtbXlEb2N1bWVudFZpZXc6IGZhbHNlLFxuICAgIHVzZUNvbGxlY3Rpb25WaWV3OiB0cnVlLFxuICAgIGRvQWNjb3VudGluZ0ZvckNvbGxlY3Rpb246IHRydWUsXG4gIH0sXG4gIC8vIFRoZSBOT19NRVJHRV9OT19ISVNUT1JZIHN0cmF0ZWd5IHJlc3VsdHMgaW4gdGhlIHNlcnZlciBzZW5kaW5nIGFsbCBwdWJsaWNhdGlvbiBkYXRhXG4gIC8vIGRpcmVjdGx5IHRvIHRoZSBjbGllbnQuIEl0IGRvZXMgbm90IHJlbWVtYmVyIHdoYXQgaXQgaGFzIHByZXZpb3VzbHkgc2VudFxuICAvLyB0byBpdCB3aWxsIG5vdCB0cmlnZ2VyIHJlbW92ZWQgbWVzc2FnZXMgd2hlbiBhIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLlxuICAvLyBUaGlzIHNob3VsZCBvbmx5IGJlIGNob3NlbiBmb3Igc3BlY2lhbCB1c2UgY2FzZXMgbGlrZSBzZW5kLWFuZC1mb3JnZXQgcXVldWVzLlxuICBOT19NRVJHRV9OT19ISVNUT1JZOiB7XG4gICAgdXNlRHVtbXlEb2N1bWVudFZpZXc6IGZhbHNlLFxuICAgIHVzZUNvbGxlY3Rpb25WaWV3OiBmYWxzZSxcbiAgICBkb0FjY291bnRpbmdGb3JDb2xsZWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgLy8gTk9fTUVSR0UgaXMgc2ltaWxhciB0byBOT19NRVJHRV9OT19ISVNUT1JZIGJ1dCB0aGUgc2VydmVyIHdpbGwgcmVtZW1iZXIgdGhlIElEcyBpdCBoYXNcbiAgLy8gc2VudCB0byB0aGUgY2xpZW50IHNvIGl0IGNhbiByZW1vdmUgdGhlbSB3aGVuIGEgc3Vic2NyaXB0aW9uIGlzIHN0b3BwZWQuXG4gIC8vIFRoaXMgc3RyYXRlZ3kgY2FuIGJlIHVzZWQgd2hlbiBhIGNvbGxlY3Rpb24gaXMgb25seSB1c2VkIGluIGEgc2luZ2xlIHB1YmxpY2F0aW9uLlxuICBOT19NRVJHRToge1xuICAgIHVzZUR1bW15RG9jdW1lbnRWaWV3OiBmYWxzZSxcbiAgICB1c2VDb2xsZWN0aW9uVmlldzogZmFsc2UsXG4gICAgZG9BY2NvdW50aW5nRm9yQ29sbGVjdGlvbjogdHJ1ZSxcbiAgfSxcbiAgLy8gTk9fTUVSR0VfTVVMVEkgaXMgc2ltaWxhciB0byBgTk9fTUVSR0VgLCBidXQgaXQgZG9lcyB0cmFjayB3aGV0aGVyIGEgZG9jdW1lbnQgaXNcbiAgLy8gdXNlZCBieSBtdWx0aXBsZSBwdWJsaWNhdGlvbnMuIFRoaXMgaGFzIHNvbWUgbWVtb3J5IG92ZXJoZWFkLCBidXQgaXQgc3RpbGwgZG9lcyBub3QgZG9cbiAgLy8gZGlmZmluZyBzbyBpdCdzIGZhc3RlciBhbmQgc2xpbW1lciB0aGFuIFNFUlZFUl9NRVJHRS5cbiAgTk9fTUVSR0VfTVVMVEk6IHtcbiAgICB1c2VEdW1teURvY3VtZW50VmlldzogdHJ1ZSxcbiAgICB1c2VDb2xsZWN0aW9uVmlldzogdHJ1ZSxcbiAgICBkb0FjY291bnRpbmdGb3JDb2xsZWN0aW9uOiB0cnVlXG4gIH1cbn07XG5cbkREUFNlcnZlci5wdWJsaWNhdGlvblN0cmF0ZWdpZXMgPSBwdWJsaWNhdGlvblN0cmF0ZWdpZXM7XG5cbi8vIFRoaXMgZmlsZSBjb250YWlucyBjbGFzc2VzOlxuLy8gKiBTZXNzaW9uIC0gVGhlIHNlcnZlcidzIGNvbm5lY3Rpb24gdG8gYSBzaW5nbGUgRERQIGNsaWVudFxuLy8gKiBTdWJzY3JpcHRpb24gLSBBIHNpbmdsZSBzdWJzY3JpcHRpb24gZm9yIGEgc2luZ2xlIGNsaWVudFxuLy8gKiBTZXJ2ZXIgLSBBbiBlbnRpcmUgc2VydmVyIHRoYXQgbWF5IHRhbGsgdG8gPiAxIGNsaWVudC4gQSBERFAgZW5kcG9pbnQuXG4vL1xuLy8gU2Vzc2lvbiBhbmQgU3Vic2NyaXB0aW9uIGFyZSBmaWxlIHNjb3BlLiBGb3Igbm93LCB1bnRpbCB3ZSBmcmVlemVcbi8vIHRoZSBpbnRlcmZhY2UsIFNlcnZlciBpcyBwYWNrYWdlIHNjb3BlIChpbiB0aGUgZnV0dXJlIGl0IHNob3VsZCBiZVxuLy8gZXhwb3J0ZWQpLlxudmFyIER1bW15RG9jdW1lbnRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZXhpc3RzSW4gPSBuZXcgU2V0KCk7IC8vIHNldCBvZiBzdWJzY3JpcHRpb25IYW5kbGVcbiAgc2VsZi5kYXRhQnlLZXkgPSBuZXcgTWFwKCk7IC8vIGtleS0+IFsge3N1YnNjcmlwdGlvbkhhbmRsZSwgdmFsdWV9IGJ5IHByZWNlZGVuY2VdXG59O1xuXG5PYmplY3QuYXNzaWduKER1bW15RG9jdW1lbnRWaWV3LnByb3RvdHlwZSwge1xuICBnZXRGaWVsZHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcblxuICBjbGVhckZpZWxkOiBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uSGFuZGxlLCBrZXksIGNoYW5nZUNvbGxlY3Rvcikge1xuICAgIGNoYW5nZUNvbGxlY3RvcltrZXldID0gdW5kZWZpbmVkXG4gIH0sXG5cbiAgY2hhbmdlRmllbGQ6IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25IYW5kbGUsIGtleSwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGVjdG9yLCBpc0FkZCkge1xuICAgIGNoYW5nZUNvbGxlY3RvcltrZXldID0gdmFsdWVcbiAgfVxufSk7XG5cbi8vIFJlcHJlc2VudHMgYSBzaW5nbGUgZG9jdW1lbnQgaW4gYSBTZXNzaW9uQ29sbGVjdGlvblZpZXdcbnZhciBTZXNzaW9uRG9jdW1lbnRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZXhpc3RzSW4gPSBuZXcgU2V0KCk7IC8vIHNldCBvZiBzdWJzY3JpcHRpb25IYW5kbGVcbiAgc2VsZi5kYXRhQnlLZXkgPSBuZXcgTWFwKCk7IC8vIGtleS0+IFsge3N1YnNjcmlwdGlvbkhhbmRsZSwgdmFsdWV9IGJ5IHByZWNlZGVuY2VdXG59O1xuXG5ERFBTZXJ2ZXIuX1Nlc3Npb25Eb2N1bWVudFZpZXcgPSBTZXNzaW9uRG9jdW1lbnRWaWV3O1xuXG5cbl8uZXh0ZW5kKFNlc3Npb25Eb2N1bWVudFZpZXcucHJvdG90eXBlLCB7XG5cbiAgZ2V0RmllbGRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBzZWxmLmRhdGFCeUtleS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVjZWRlbmNlTGlzdCwga2V5KSB7XG4gICAgICByZXRba2V5XSA9IHByZWNlZGVuY2VMaXN0WzBdLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgY2xlYXJGaWVsZDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkhhbmRsZSwga2V5LCBjaGFuZ2VDb2xsZWN0b3IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLy8gUHVibGlzaCBBUEkgaWdub3JlcyBfaWQgaWYgcHJlc2VudCBpbiBmaWVsZHNcbiAgICBpZiAoa2V5ID09PSBcIl9pZFwiKVxuICAgICAgcmV0dXJuO1xuICAgIHZhciBwcmVjZWRlbmNlTGlzdCA9IHNlbGYuZGF0YUJ5S2V5LmdldChrZXkpO1xuXG4gICAgLy8gSXQncyBva2F5IHRvIGNsZWFyIGZpZWxkcyB0aGF0IGRpZG4ndCBleGlzdC4gTm8gbmVlZCB0byB0aHJvd1xuICAgIC8vIGFuIGVycm9yLlxuICAgIGlmICghcHJlY2VkZW5jZUxpc3QpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgcmVtb3ZlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlY2VkZW5jZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcmVjZWRlbmNlID0gcHJlY2VkZW5jZUxpc3RbaV07XG4gICAgICBpZiAocHJlY2VkZW5jZS5zdWJzY3JpcHRpb25IYW5kbGUgPT09IHN1YnNjcmlwdGlvbkhhbmRsZSkge1xuICAgICAgICAvLyBUaGUgdmlldydzIHZhbHVlIGNhbiBvbmx5IGNoYW5nZSBpZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyB0aGUgb25lIHRoYXRcbiAgICAgICAgLy8gdXNlZCB0byBoYXZlIHByZWNlZGVuY2UuXG4gICAgICAgIGlmIChpID09PSAwKVxuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHByZWNlZGVuY2UudmFsdWU7XG4gICAgICAgIHByZWNlZGVuY2VMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmVjZWRlbmNlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlbGYuZGF0YUJ5S2V5LmRlbGV0ZShrZXkpO1xuICAgICAgY2hhbmdlQ29sbGVjdG9yW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChyZW1vdmVkVmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIUVKU09OLmVxdWFscyhyZW1vdmVkVmFsdWUsIHByZWNlZGVuY2VMaXN0WzBdLnZhbHVlKSkge1xuICAgICAgY2hhbmdlQ29sbGVjdG9yW2tleV0gPSBwcmVjZWRlbmNlTGlzdFswXS52YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgY2hhbmdlRmllbGQ6IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25IYW5kbGUsIGtleSwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGVjdG9yLCBpc0FkZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBQdWJsaXNoIEFQSSBpZ25vcmVzIF9pZCBpZiBwcmVzZW50IGluIGZpZWxkc1xuICAgIGlmIChrZXkgPT09IFwiX2lkXCIpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBEb24ndCBzaGFyZSBzdGF0ZSB3aXRoIHRoZSBkYXRhIHBhc3NlZCBpbiBieSB0aGUgdXNlci5cbiAgICB2YWx1ZSA9IEVKU09OLmNsb25lKHZhbHVlKTtcblxuICAgIGlmICghc2VsZi5kYXRhQnlLZXkuaGFzKGtleSkpIHtcbiAgICAgIHNlbGYuZGF0YUJ5S2V5LnNldChrZXksIFt7c3Vic2NyaXB0aW9uSGFuZGxlOiBzdWJzY3JpcHRpb25IYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZX1dKTtcbiAgICAgIGNoYW5nZUNvbGxlY3RvcltrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwcmVjZWRlbmNlTGlzdCA9IHNlbGYuZGF0YUJ5S2V5LmdldChrZXkpO1xuICAgIHZhciBlbHQ7XG4gICAgaWYgKCFpc0FkZCkge1xuICAgICAgZWx0ID0gcHJlY2VkZW5jZUxpc3QuZmluZChmdW5jdGlvbiAocHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiBwcmVjZWRlbmNlLnN1YnNjcmlwdGlvbkhhbmRsZSA9PT0gc3Vic2NyaXB0aW9uSGFuZGxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsdCkge1xuICAgICAgaWYgKGVsdCA9PT0gcHJlY2VkZW5jZUxpc3RbMF0gJiYgIUVKU09OLmVxdWFscyh2YWx1ZSwgZWx0LnZhbHVlKSkge1xuICAgICAgICAvLyB0aGlzIHN1YnNjcmlwdGlvbiBpcyBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhpcyBmaWVsZC5cbiAgICAgICAgY2hhbmdlQ29sbGVjdG9yW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsdC52YWx1ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIHN1YnNjcmlwdGlvbiBpcyBuZXdseSBjYXJpbmcgYWJvdXQgdGhpcyBmaWVsZFxuICAgICAgcHJlY2VkZW5jZUxpc3QucHVzaCh7c3Vic2NyaXB0aW9uSGFuZGxlOiBzdWJzY3JpcHRpb25IYW5kbGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgIH1cblxuICB9XG59KTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY2xpZW50J3MgdmlldyBvZiBhIHNpbmdsZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgTmFtZSBvZiB0aGUgY29sbGVjdGlvbiBpdCByZXByZXNlbnRzXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBGdW5jdGlvbj59IHNlc3Npb25DYWxsYmFja3MgVGhlIGNhbGxiYWNrcyBmb3IgYWRkZWQsIGNoYW5nZWQsIHJlbW92ZWRcbiAqIEBjbGFzcyBTZXNzaW9uQ29sbGVjdGlvblZpZXdcbiAqL1xudmFyIFNlc3Npb25Db2xsZWN0aW9uVmlldyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgc2Vzc2lvbkNhbGxiYWNrcykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgc2VsZi5kb2N1bWVudHMgPSBuZXcgTWFwKCk7XG4gIHNlbGYuY2FsbGJhY2tzID0gc2Vzc2lvbkNhbGxiYWNrcztcbn07XG5cbkREUFNlcnZlci5fU2Vzc2lvbkNvbGxlY3Rpb25WaWV3ID0gU2Vzc2lvbkNvbGxlY3Rpb25WaWV3O1xuXG5cbk9iamVjdC5hc3NpZ24oU2Vzc2lvbkNvbGxlY3Rpb25WaWV3LnByb3RvdHlwZSwge1xuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHNlbGYuZG9jdW1lbnRzLnNpemUgPT09IDA7XG4gIH0sXG5cbiAgZGlmZjogZnVuY3Rpb24gKHByZXZpb3VzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIERpZmZTZXF1ZW5jZS5kaWZmTWFwcyhwcmV2aW91cy5kb2N1bWVudHMsIHNlbGYuZG9jdW1lbnRzLCB7XG4gICAgICBib3RoOiBfLmJpbmQoc2VsZi5kaWZmRG9jdW1lbnQsIHNlbGYpLFxuXG4gICAgICByaWdodE9ubHk6IGZ1bmN0aW9uIChpZCwgbm93RFYpIHtcbiAgICAgICAgc2VsZi5jYWxsYmFja3MuYWRkZWQoc2VsZi5jb2xsZWN0aW9uTmFtZSwgaWQsIG5vd0RWLmdldEZpZWxkcygpKTtcbiAgICAgIH0sXG5cbiAgICAgIGxlZnRPbmx5OiBmdW5jdGlvbiAoaWQsIHByZXZEVikge1xuICAgICAgICBzZWxmLmNhbGxiYWNrcy5yZW1vdmVkKHNlbGYuY29sbGVjdGlvbk5hbWUsIGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBkaWZmRG9jdW1lbnQ6IGZ1bmN0aW9uIChpZCwgcHJldkRWLCBub3dEVikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZmllbGRzID0ge307XG4gICAgRGlmZlNlcXVlbmNlLmRpZmZPYmplY3RzKHByZXZEVi5nZXRGaWVsZHMoKSwgbm93RFYuZ2V0RmllbGRzKCksIHtcbiAgICAgIGJvdGg6IGZ1bmN0aW9uIChrZXksIHByZXYsIG5vdykge1xuICAgICAgICBpZiAoIUVKU09OLmVxdWFscyhwcmV2LCBub3cpKVxuICAgICAgICAgIGZpZWxkc1trZXldID0gbm93O1xuICAgICAgfSxcbiAgICAgIHJpZ2h0T25seTogZnVuY3Rpb24gKGtleSwgbm93KSB7XG4gICAgICAgIGZpZWxkc1trZXldID0gbm93O1xuICAgICAgfSxcbiAgICAgIGxlZnRPbmx5OiBmdW5jdGlvbihrZXksIHByZXYpIHtcbiAgICAgICAgZmllbGRzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5jYWxsYmFja3MuY2hhbmdlZChzZWxmLmNvbGxlY3Rpb25OYW1lLCBpZCwgZmllbGRzKTtcbiAgfSxcblxuICBhZGRlZDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkhhbmRsZSwgaWQsIGZpZWxkcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZG9jVmlldyA9IHNlbGYuZG9jdW1lbnRzLmdldChpZCk7XG4gICAgdmFyIGFkZGVkID0gZmFsc2U7XG4gICAgaWYgKCFkb2NWaWV3KSB7XG4gICAgICBhZGRlZCA9IHRydWU7XG4gICAgICBpZiAoTWV0ZW9yLnNlcnZlci5nZXRQdWJsaWNhdGlvblN0cmF0ZWd5KHRoaXMuY29sbGVjdGlvbk5hbWUpLnVzZUR1bW15RG9jdW1lbnRWaWV3KSB7XG4gICAgICAgIGRvY1ZpZXcgPSBuZXcgRHVtbXlEb2N1bWVudFZpZXcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY1ZpZXcgPSBuZXcgU2Vzc2lvbkRvY3VtZW50VmlldygpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmRvY3VtZW50cy5zZXQoaWQsIGRvY1ZpZXcpO1xuICAgIH1cbiAgICBkb2NWaWV3LmV4aXN0c0luLmFkZChzdWJzY3JpcHRpb25IYW5kbGUpO1xuICAgIHZhciBjaGFuZ2VDb2xsZWN0b3IgPSB7fTtcbiAgICBfLmVhY2goZmllbGRzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgZG9jVmlldy5jaGFuZ2VGaWVsZChcbiAgICAgICAgc3Vic2NyaXB0aW9uSGFuZGxlLCBrZXksIHZhbHVlLCBjaGFuZ2VDb2xsZWN0b3IsIHRydWUpO1xuICAgIH0pO1xuICAgIGlmIChhZGRlZClcbiAgICAgIHNlbGYuY2FsbGJhY2tzLmFkZGVkKHNlbGYuY29sbGVjdGlvbk5hbWUsIGlkLCBjaGFuZ2VDb2xsZWN0b3IpO1xuICAgIGVsc2VcbiAgICAgIHNlbGYuY2FsbGJhY2tzLmNoYW5nZWQoc2VsZi5jb2xsZWN0aW9uTmFtZSwgaWQsIGNoYW5nZUNvbGxlY3Rvcik7XG4gIH0sXG5cbiAgY2hhbmdlZDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkhhbmRsZSwgaWQsIGNoYW5nZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNoYW5nZWRSZXN1bHQgPSB7fTtcbiAgICB2YXIgZG9jVmlldyA9IHNlbGYuZG9jdW1lbnRzLmdldChpZCk7XG4gICAgaWYgKCFkb2NWaWV3KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZWxlbWVudCB3aXRoIGlkIFwiICsgaWQgKyBcIiB0byBjaGFuZ2VcIik7XG4gICAgXy5lYWNoKGNoYW5nZWQsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZG9jVmlldy5jbGVhckZpZWxkKHN1YnNjcmlwdGlvbkhhbmRsZSwga2V5LCBjaGFuZ2VkUmVzdWx0KTtcbiAgICAgIGVsc2VcbiAgICAgICAgZG9jVmlldy5jaGFuZ2VGaWVsZChzdWJzY3JpcHRpb25IYW5kbGUsIGtleSwgdmFsdWUsIGNoYW5nZWRSZXN1bHQpO1xuICAgIH0pO1xuICAgIHNlbGYuY2FsbGJhY2tzLmNoYW5nZWQoc2VsZi5jb2xsZWN0aW9uTmFtZSwgaWQsIGNoYW5nZWRSZXN1bHQpO1xuICB9LFxuXG4gIHJlbW92ZWQ6IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25IYW5kbGUsIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkb2NWaWV3ID0gc2VsZi5kb2N1bWVudHMuZ2V0KGlkKTtcbiAgICBpZiAoIWRvY1ZpZXcpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJSZW1vdmVkIG5vbmV4aXN0ZW50IGRvY3VtZW50IFwiICsgaWQpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBkb2NWaWV3LmV4aXN0c0luLmRlbGV0ZShzdWJzY3JpcHRpb25IYW5kbGUpO1xuICAgIGlmIChkb2NWaWV3LmV4aXN0c0luLnNpemUgPT09IDApIHtcbiAgICAgIC8vIGl0IGlzIGdvbmUgZnJvbSBldmVyeW9uZVxuICAgICAgc2VsZi5jYWxsYmFja3MucmVtb3ZlZChzZWxmLmNvbGxlY3Rpb25OYW1lLCBpZCk7XG4gICAgICBzZWxmLmRvY3VtZW50cy5kZWxldGUoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hhbmdlZCA9IHt9O1xuICAgICAgLy8gcmVtb3ZlIHRoaXMgc3Vic2NyaXB0aW9uIGZyb20gZXZlcnkgcHJlY2VkZW5jZSBsaXN0XG4gICAgICAvLyBhbmQgcmVjb3JkIHRoZSBjaGFuZ2VzXG4gICAgICBkb2NWaWV3LmRhdGFCeUtleS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVjZWRlbmNlTGlzdCwga2V5KSB7XG4gICAgICAgIGRvY1ZpZXcuY2xlYXJGaWVsZChzdWJzY3JpcHRpb25IYW5kbGUsIGtleSwgY2hhbmdlZCk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi5jYWxsYmFja3MuY2hhbmdlZChzZWxmLmNvbGxlY3Rpb25OYW1lLCBpZCwgY2hhbmdlZCk7XG4gICAgfVxuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNlc3Npb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgU2Vzc2lvbiA9IGZ1bmN0aW9uIChzZXJ2ZXIsIHZlcnNpb24sIHNvY2tldCwgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuaWQgPSBSYW5kb20uaWQoKTtcblxuICBzZWxmLnNlcnZlciA9IHNlcnZlcjtcbiAgc2VsZi52ZXJzaW9uID0gdmVyc2lvbjtcblxuICBzZWxmLmluaXRpYWxpemVkID0gZmFsc2U7XG4gIHNlbGYuc29ja2V0ID0gc29ja2V0O1xuXG4gIC8vIFNldCB0byBudWxsIHdoZW4gdGhlIHNlc3Npb24gaXMgZGVzdHJveWVkLiBNdWx0aXBsZSBwbGFjZXMgYmVsb3dcbiAgLy8gdXNlIHRoaXMgdG8gZGV0ZXJtaW5lIGlmIHRoZSBzZXNzaW9uIGlzIGFsaXZlIG9yIG5vdC5cbiAgc2VsZi5pblF1ZXVlID0gbmV3IE1ldGVvci5fRG91YmxlRW5kZWRRdWV1ZSgpO1xuXG4gIHNlbGYuYmxvY2tlZCA9IGZhbHNlO1xuICBzZWxmLndvcmtlclJ1bm5pbmcgPSBmYWxzZTtcblxuICBzZWxmLmNhY2hlZFVuYmxvY2sgPSBudWxsO1xuXG4gIC8vIFN1YiBvYmplY3RzIGZvciBhY3RpdmUgc3Vic2NyaXB0aW9uc1xuICBzZWxmLl9uYW1lZFN1YnMgPSBuZXcgTWFwKCk7XG4gIHNlbGYuX3VuaXZlcnNhbFN1YnMgPSBbXTtcblxuICBzZWxmLnVzZXJJZCA9IG51bGw7XG5cbiAgc2VsZi5jb2xsZWN0aW9uVmlld3MgPSBuZXcgTWFwKCk7XG5cbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gbm90IHNlbmQgbWVzc2FnZXMgd2hlbiBjb2xsZWN0aW9uVmlld3MgYXJlXG4gIC8vIG1vZGlmaWVkLiBUaGlzIGlzIGRvbmUgd2hlbiByZXJ1bm5pbmcgc3VicyBpbiBfc2V0VXNlcklkIGFuZCB0aG9zZSBtZXNzYWdlc1xuICAvLyBhcmUgY2FsY3VsYXRlZCB2aWEgYSBkaWZmIGluc3RlYWQuXG4gIHNlbGYuX2lzU2VuZGluZyA9IHRydWU7XG5cbiAgLy8gSWYgdGhpcyBpcyB0cnVlLCBkb24ndCBzdGFydCBhIG5ld2x5LWNyZWF0ZWQgdW5pdmVyc2FsIHB1Ymxpc2hlciBvbiB0aGlzXG4gIC8vIHNlc3Npb24uIFRoZSBzZXNzaW9uIHdpbGwgdGFrZSBjYXJlIG9mIHN0YXJ0aW5nIGl0IHdoZW4gYXBwcm9wcmlhdGUuXG4gIHNlbGYuX2RvbnRTdGFydE5ld1VuaXZlcnNhbFN1YnMgPSBmYWxzZTtcblxuICAvLyBXaGVuIHdlIGFyZSByZXJ1bm5pbmcgc3Vic2NyaXB0aW9ucywgYW55IHJlYWR5IG1lc3NhZ2VzXG4gIC8vIHdlIHdhbnQgdG8gYnVmZmVyIHVwIGZvciB3aGVuIHdlIGFyZSBkb25lIHJlcnVubmluZyBzdWJzY3JpcHRpb25zXG4gIHNlbGYuX3BlbmRpbmdSZWFkeSA9IFtdO1xuXG4gIC8vIExpc3Qgb2YgY2FsbGJhY2tzIHRvIGNhbGwgd2hlbiB0aGlzIGNvbm5lY3Rpb24gaXMgY2xvc2VkLlxuICBzZWxmLl9jbG9zZUNhbGxiYWNrcyA9IFtdO1xuXG5cbiAgLy8gWFhYIEhBQ0s6IElmIGEgc29ja2pzIGNvbm5lY3Rpb24sIHNhdmUgb2ZmIHRoZSBVUkwuIFRoaXMgaXNcbiAgLy8gdGVtcG9yYXJ5IGFuZCB3aWxsIGdvIGF3YXkgaW4gdGhlIG5lYXIgZnV0dXJlLlxuICBzZWxmLl9zb2NrZXRVcmwgPSBzb2NrZXQudXJsO1xuXG4gIC8vIEFsbG93IHRlc3RzIHRvIGRpc2FibGUgcmVzcG9uZGluZyB0byBwaW5ncy5cbiAgc2VsZi5fcmVzcG9uZFRvUGluZ3MgPSBvcHRpb25zLnJlc3BvbmRUb1BpbmdzO1xuXG4gIC8vIFRoaXMgb2JqZWN0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIHRvIHRoZSBzZXNzaW9uLiBJbiB0aGUgcHVibGljXG4gIC8vIEFQSSwgaXQgaXMgY2FsbGVkIHRoZSBgY29ubmVjdGlvbmAgb2JqZWN0LiAgSW50ZXJuYWxseSB3ZSBjYWxsIGl0XG4gIC8vIGEgYGNvbm5lY3Rpb25IYW5kbGVgIHRvIGF2b2lkIGFtYmlndWl0eS5cbiAgc2VsZi5jb25uZWN0aW9uSGFuZGxlID0ge1xuICAgIGlkOiBzZWxmLmlkLFxuICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmNsb3NlKCk7XG4gICAgfSxcbiAgICBvbkNsb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHZhciBjYiA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZm4sIFwiY29ubmVjdGlvbiBvbkNsb3NlIGNhbGxiYWNrXCIpO1xuICAgICAgaWYgKHNlbGYuaW5RdWV1ZSkge1xuICAgICAgICBzZWxmLl9jbG9zZUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHdlJ3JlIGFscmVhZHkgY2xvc2VkLCBjYWxsIHRoZSBjYWxsYmFjay5cbiAgICAgICAgTWV0ZW9yLmRlZmVyKGNiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsaWVudEFkZHJlc3M6IHNlbGYuX2NsaWVudEFkZHJlc3MoKSxcbiAgICBodHRwSGVhZGVyczogc2VsZi5zb2NrZXQuaGVhZGVyc1xuICB9O1xuXG4gIHNlbGYuc2VuZCh7IG1zZzogJ2Nvbm5lY3RlZCcsIHNlc3Npb246IHNlbGYuaWQgfSk7XG5cbiAgLy8gT24gaW5pdGlhbCBjb25uZWN0LCBzcGluIHVwIGFsbCB0aGUgdW5pdmVyc2FsIHB1Ymxpc2hlcnMuXG4gIEZpYmVyKGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLnN0YXJ0VW5pdmVyc2FsU3VicygpO1xuICB9KS5ydW4oKTtcblxuICBpZiAodmVyc2lvbiAhPT0gJ3ByZTEnICYmIG9wdGlvbnMuaGVhcnRiZWF0SW50ZXJ2YWwgIT09IDApIHtcbiAgICAvLyBXZSBubyBsb25nZXIgbmVlZCB0aGUgbG93IGxldmVsIHRpbWVvdXQgYmVjYXVzZSB3ZSBoYXZlIGhlYXJ0YmVhdHMuXG4gICAgc29ja2V0LnNldFdlYnNvY2tldFRpbWVvdXQoMCk7XG5cbiAgICBzZWxmLmhlYXJ0YmVhdCA9IG5ldyBERFBDb21tb24uSGVhcnRiZWF0KHtcbiAgICAgIGhlYXJ0YmVhdEludGVydmFsOiBvcHRpb25zLmhlYXJ0YmVhdEludGVydmFsLFxuICAgICAgaGVhcnRiZWF0VGltZW91dDogb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LFxuICAgICAgb25UaW1lb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgIH0sXG4gICAgICBzZW5kUGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnNlbmQoe21zZzogJ3BpbmcnfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5oZWFydGJlYXQuc3RhcnQoKTtcbiAgfVxuXG4gIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXSAmJiBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICBcImxpdmVkYXRhXCIsIFwic2Vzc2lvbnNcIiwgMSk7XG59O1xuXG5PYmplY3QuYXNzaWduKFNlc3Npb24ucHJvdG90eXBlLCB7XG5cbiAgc2VuZFJlYWR5OiBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uSWRzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLl9pc1NlbmRpbmcpXG4gICAgICBzZWxmLnNlbmQoe21zZzogXCJyZWFkeVwiLCBzdWJzOiBzdWJzY3JpcHRpb25JZHN9KTtcbiAgICBlbHNlIHtcbiAgICAgIF8uZWFjaChzdWJzY3JpcHRpb25JZHMsIGZ1bmN0aW9uIChzdWJzY3JpcHRpb25JZCkge1xuICAgICAgICBzZWxmLl9wZW5kaW5nUmVhZHkucHVzaChzdWJzY3JpcHRpb25JZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgX2NhblNlbmQoY29sbGVjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTZW5kaW5nIHx8ICF0aGlzLnNlcnZlci5nZXRQdWJsaWNhdGlvblN0cmF0ZWd5KGNvbGxlY3Rpb25OYW1lKS51c2VDb2xsZWN0aW9uVmlldztcbiAgfSxcblxuXG4gIHNlbmRBZGRlZChjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcykge1xuICAgIGlmICh0aGlzLl9jYW5TZW5kKGNvbGxlY3Rpb25OYW1lKSlcbiAgICAgIHRoaXMuc2VuZCh7bXNnOiBcImFkZGVkXCIsIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25OYW1lLCBpZCwgZmllbGRzfSk7XG4gIH0sXG5cbiAgc2VuZENoYW5nZWQoY29sbGVjdGlvbk5hbWUsIGlkLCBmaWVsZHMpIHtcbiAgICBpZiAoXy5pc0VtcHR5KGZpZWxkcykpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAodGhpcy5fY2FuU2VuZChjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgIHRoaXMuc2VuZCh7XG4gICAgICAgIG1zZzogXCJjaGFuZ2VkXCIsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25OYW1lLFxuICAgICAgICBpZCxcbiAgICAgICAgZmllbGRzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2VuZFJlbW92ZWQoY29sbGVjdGlvbk5hbWUsIGlkKSB7XG4gICAgaWYgKHRoaXMuX2NhblNlbmQoY29sbGVjdGlvbk5hbWUpKVxuICAgICAgdGhpcy5zZW5kKHttc2c6IFwicmVtb3ZlZFwiLCBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uTmFtZSwgaWR9KTtcbiAgfSxcblxuICBnZXRTZW5kQ2FsbGJhY2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRlZDogXy5iaW5kKHNlbGYuc2VuZEFkZGVkLCBzZWxmKSxcbiAgICAgIGNoYW5nZWQ6IF8uYmluZChzZWxmLnNlbmRDaGFuZ2VkLCBzZWxmKSxcbiAgICAgIHJlbW92ZWQ6IF8uYmluZChzZWxmLnNlbmRSZW1vdmVkLCBzZWxmKVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGVjdGlvblZpZXc6IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmV0ID0gc2VsZi5jb2xsZWN0aW9uVmlld3MuZ2V0KGNvbGxlY3Rpb25OYW1lKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgcmV0ID0gbmV3IFNlc3Npb25Db2xsZWN0aW9uVmlldyhjb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFNlbmRDYWxsYmFja3MoKSk7XG4gICAgICBzZWxmLmNvbGxlY3Rpb25WaWV3cy5zZXQoY29sbGVjdGlvbk5hbWUsIHJldCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgYWRkZWQoc3Vic2NyaXB0aW9uSGFuZGxlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcykge1xuICAgIGlmICh0aGlzLnNlcnZlci5nZXRQdWJsaWNhdGlvblN0cmF0ZWd5KGNvbGxlY3Rpb25OYW1lKS51c2VDb2xsZWN0aW9uVmlldykge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0Q29sbGVjdGlvblZpZXcoY29sbGVjdGlvbk5hbWUpO1xuICAgICAgdmlldy5hZGRlZChzdWJzY3JpcHRpb25IYW5kbGUsIGlkLCBmaWVsZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRBZGRlZChjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcyk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZWQoc3Vic2NyaXB0aW9uSGFuZGxlLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcbiAgICBpZiAodGhpcy5zZXJ2ZXIuZ2V0UHVibGljYXRpb25TdHJhdGVneShjb2xsZWN0aW9uTmFtZSkudXNlQ29sbGVjdGlvblZpZXcpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldENvbGxlY3Rpb25WaWV3KGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgIHZpZXcucmVtb3ZlZChzdWJzY3JpcHRpb25IYW5kbGUsIGlkKTtcbiAgICAgIGlmICh2aWV3LmlzRW1wdHkoKSkge1xuICAgICAgICAgdGhpcy5jb2xsZWN0aW9uVmlld3MuZGVsZXRlKGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kUmVtb3ZlZChjb2xsZWN0aW9uTmFtZSwgaWQpO1xuICAgIH1cbiAgfSxcblxuICBjaGFuZ2VkKHN1YnNjcmlwdGlvbkhhbmRsZSwgY29sbGVjdGlvbk5hbWUsIGlkLCBmaWVsZHMpIHtcbiAgICBpZiAodGhpcy5zZXJ2ZXIuZ2V0UHVibGljYXRpb25TdHJhdGVneShjb2xsZWN0aW9uTmFtZSkudXNlQ29sbGVjdGlvblZpZXcpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldENvbGxlY3Rpb25WaWV3KGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgIHZpZXcuY2hhbmdlZChzdWJzY3JpcHRpb25IYW5kbGUsIGlkLCBmaWVsZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRDaGFuZ2VkKGNvbGxlY3Rpb25OYW1lLCBpZCwgZmllbGRzKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRVbml2ZXJzYWxTdWJzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIE1ha2UgYSBzaGFsbG93IGNvcHkgb2YgdGhlIHNldCBvZiB1bml2ZXJzYWwgaGFuZGxlcnMgYW5kIHN0YXJ0IHRoZW0uIElmXG4gICAgLy8gYWRkaXRpb25hbCB1bml2ZXJzYWwgcHVibGlzaGVycyBzdGFydCB3aGlsZSB3ZSdyZSBydW5uaW5nIHRoZW0gKGR1ZSB0b1xuICAgIC8vIHlpZWxkaW5nKSwgdGhleSB3aWxsIHJ1biBzZXBhcmF0ZWx5IGFzIHBhcnQgb2YgU2VydmVyLnB1Ymxpc2guXG4gICAgdmFyIGhhbmRsZXJzID0gXy5jbG9uZShzZWxmLnNlcnZlci51bml2ZXJzYWxfcHVibGlzaF9oYW5kbGVycyk7XG4gICAgXy5lYWNoKGhhbmRsZXJzLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgc2VsZi5fc3RhcnRTdWJzY3JpcHRpb24oaGFuZGxlcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gRGVzdHJveSB0aGlzIHNlc3Npb24gYW5kIHVucmVnaXN0ZXIgaXQgYXQgdGhlIHNlcnZlci5cbiAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBEZXN0cm95IHRoaXMgc2Vzc2lvbiwgZXZlbiBpZiBpdCdzIG5vdCByZWdpc3RlcmVkIGF0IHRoZVxuICAgIC8vIHNlcnZlci4gU3RvcCBhbGwgcHJvY2Vzc2luZyBhbmQgdGVhciBldmVyeXRoaW5nIGRvd24uIElmIGEgc29ja2V0XG4gICAgLy8gd2FzIGF0dGFjaGVkLCBjbG9zZSBpdC5cblxuICAgIC8vIEFscmVhZHkgZGVzdHJveWVkLlxuICAgIGlmICghIHNlbGYuaW5RdWV1ZSlcbiAgICAgIHJldHVybjtcblxuICAgIC8vIERyb3AgdGhlIG1lcmdlIGJveCBkYXRhIGltbWVkaWF0ZWx5LlxuICAgIHNlbGYuaW5RdWV1ZSA9IG51bGw7XG4gICAgc2VsZi5jb2xsZWN0aW9uVmlld3MgPSBuZXcgTWFwKCk7XG5cbiAgICBpZiAoc2VsZi5oZWFydGJlYXQpIHtcbiAgICAgIHNlbGYuaGVhcnRiZWF0LnN0b3AoKTtcbiAgICAgIHNlbGYuaGVhcnRiZWF0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5zb2NrZXQpIHtcbiAgICAgIHNlbGYuc29ja2V0LmNsb3NlKCk7XG4gICAgICBzZWxmLnNvY2tldC5fbWV0ZW9yU2Vzc2lvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgICAgXCJsaXZlZGF0YVwiLCBcInNlc3Npb25zXCIsIC0xKTtcblxuICAgIE1ldGVvci5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdG9wIGNhbGxiYWNrcyBjYW4geWllbGQsIHNvIHdlIGRlZmVyIHRoaXMgb24gY2xvc2UuXG4gICAgICAvLyBzdWIuX2lzRGVhY3RpdmF0ZWQoKSBkZXRlY3RzIHRoYXQgd2Ugc2V0IGluUXVldWUgdG8gbnVsbCBhbmRcbiAgICAgIC8vIHRyZWF0cyBpdCBhcyBzZW1pLWRlYWN0aXZhdGVkIChpdCB3aWxsIGlnbm9yZSBpbmNvbWluZyBjYWxsYmFja3MsIGV0YykuXG4gICAgICBzZWxmLl9kZWFjdGl2YXRlQWxsU3Vic2NyaXB0aW9ucygpO1xuXG4gICAgICAvLyBEZWZlciBjYWxsaW5nIHRoZSBjbG9zZSBjYWxsYmFja3MsIHNvIHRoYXQgdGhlIGNhbGxlciBjbG9zaW5nXG4gICAgICAvLyB0aGUgc2Vzc2lvbiBpc24ndCB3YWl0aW5nIGZvciBhbGwgdGhlIGNhbGxiYWNrcyB0byBjb21wbGV0ZS5cbiAgICAgIF8uZWFjaChzZWxmLl9jbG9zZUNhbGxiYWNrcywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFVucmVnaXN0ZXIgdGhlIHNlc3Npb24uXG4gICAgc2VsZi5zZXJ2ZXIuX3JlbW92ZVNlc3Npb24oc2VsZik7XG4gIH0sXG5cbiAgLy8gU2VuZCBhIG1lc3NhZ2UgKGRvaW5nIG5vdGhpbmcgaWYgbm8gc29ja2V0IGlzIGNvbm5lY3RlZCByaWdodCBub3cpLlxuICAvLyBJdCBzaG91bGQgYmUgYSBKU09OIG9iamVjdCAoaXQgd2lsbCBiZSBzdHJpbmdpZmllZCkuXG4gIHNlbmQ6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuc29ja2V0KSB7XG4gICAgICBpZiAoTWV0ZW9yLl9wcmludFNlbnRERFApXG4gICAgICAgIE1ldGVvci5fZGVidWcoXCJTZW50IEREUFwiLCBERFBDb21tb24uc3RyaW5naWZ5RERQKG1zZykpO1xuICAgICAgc2VsZi5zb2NrZXQuc2VuZChERFBDb21tb24uc3RyaW5naWZ5RERQKG1zZykpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZW5kIGEgY29ubmVjdGlvbiBlcnJvci5cbiAgc2VuZEVycm9yOiBmdW5jdGlvbiAocmVhc29uLCBvZmZlbmRpbmdNZXNzYWdlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBtc2cgPSB7bXNnOiAnZXJyb3InLCByZWFzb246IHJlYXNvbn07XG4gICAgaWYgKG9mZmVuZGluZ01lc3NhZ2UpXG4gICAgICBtc2cub2ZmZW5kaW5nTWVzc2FnZSA9IG9mZmVuZGluZ01lc3NhZ2U7XG4gICAgc2VsZi5zZW5kKG1zZyk7XG4gIH0sXG5cbiAgLy8gUHJvY2VzcyAnbXNnJyBhcyBhbiBpbmNvbWluZyBtZXNzYWdlLiBBcyBhIGd1YXJkIGFnYWluc3RcbiAgLy8gcmFjZSBjb25kaXRpb25zIGR1cmluZyByZWNvbm5lY3Rpb24sIGlnbm9yZSB0aGUgbWVzc2FnZSBpZlxuICAvLyAnc29ja2V0JyBpcyBub3QgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgc29ja2V0LlxuICAvL1xuICAvLyBXZSBydW4gdGhlIG1lc3NhZ2VzIGZyb20gdGhlIGNsaWVudCBvbmUgYXQgYSB0aW1lLCBpbiB0aGUgb3JkZXJcbiAgLy8gZ2l2ZW4gYnkgdGhlIGNsaWVudC4gVGhlIG1lc3NhZ2UgaGFuZGxlciBpcyBwYXNzZWQgYW4gaWRlbXBvdGVudFxuICAvLyBmdW5jdGlvbiAndW5ibG9jaycgd2hpY2ggaXQgbWF5IGNhbGwgdG8gYWxsb3cgb3RoZXIgbWVzc2FnZXMgdG9cbiAgLy8gYmVnaW4gcnVubmluZyBpbiBwYXJhbGxlbCBpbiBhbm90aGVyIGZpYmVyIChmb3IgZXhhbXBsZSwgYSBtZXRob2RcbiAgLy8gdGhhdCB3YW50cyB0byB5aWVsZCkuIE90aGVyd2lzZSwgaXQgaXMgYXV0b21hdGljYWxseSB1bmJsb2NrZWRcbiAgLy8gd2hlbiBpdCByZXR1cm5zLlxuICAvL1xuICAvLyBBY3R1YWxseSwgd2UgZG9uJ3QgaGF2ZSB0byAndG90YWxseSBvcmRlcicgdGhlIG1lc3NhZ2VzIGluIHRoaXNcbiAgLy8gd2F5LCBidXQgaXQncyB0aGUgZWFzaWVzdCB0aGluZyB0aGF0J3MgY29ycmVjdC4gKHVuc3ViIG5lZWRzIHRvXG4gIC8vIGJlIG9yZGVyZWQgYWdhaW5zdCBzdWIsIG1ldGhvZHMgbmVlZCB0byBiZSBvcmRlcmVkIGFnYWluc3QgZWFjaFxuICAvLyBvdGhlcikuXG4gIHByb2Nlc3NNZXNzYWdlOiBmdW5jdGlvbiAobXNnX2luKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5pblF1ZXVlKSAvLyB3ZSBoYXZlIGJlZW4gZGVzdHJveWVkLlxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gUmVzcG9uZCB0byBwaW5nIGFuZCBwb25nIG1lc3NhZ2VzIGltbWVkaWF0ZWx5IHdpdGhvdXQgcXVldWluZy5cbiAgICAvLyBJZiB0aGUgbmVnb3RpYXRlZCBERFAgdmVyc2lvbiBpcyBcInByZTFcIiB3aGljaCBkaWRuJ3Qgc3VwcG9ydFxuICAgIC8vIHBpbmdzLCBwcmVzZXJ2ZSB0aGUgXCJwcmUxXCIgYmVoYXZpb3Igb2YgcmVzcG9uZGluZyB3aXRoIGEgXCJiYWRcbiAgICAvLyByZXF1ZXN0XCIgZm9yIHRoZSB1bmtub3duIG1lc3NhZ2VzLlxuICAgIC8vXG4gICAgLy8gRmliZXJzIGFyZSBuZWVkZWQgYmVjYXVzZSBoZWFydGJlYXRzIHVzZSBNZXRlb3Iuc2V0VGltZW91dCwgd2hpY2hcbiAgICAvLyBuZWVkcyBhIEZpYmVyLiBXZSBjb3VsZCBhY3R1YWxseSB1c2UgcmVndWxhciBzZXRUaW1lb3V0IGFuZCBhdm9pZFxuICAgIC8vIHRoZXNlIG5ldyBmaWJlcnMsIGJ1dCBpdCBpcyBlYXNpZXIgdG8ganVzdCBtYWtlIGV2ZXJ5dGhpbmcgdXNlXG4gICAgLy8gTWV0ZW9yLnNldFRpbWVvdXQgYW5kIG5vdCB0aGluayB0b28gaGFyZC5cbiAgICAvL1xuICAgIC8vIEFueSBtZXNzYWdlIGNvdW50cyBhcyByZWNlaXZpbmcgYSBwb25nLCBhcyBpdCBkZW1vbnN0cmF0ZXMgdGhhdFxuICAgIC8vIHRoZSBjbGllbnQgaXMgc3RpbGwgYWxpdmUuXG4gICAgaWYgKHNlbGYuaGVhcnRiZWF0KSB7XG4gICAgICBGaWJlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuaGVhcnRiZWF0Lm1lc3NhZ2VSZWNlaXZlZCgpO1xuICAgICAgfSkucnVuKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudmVyc2lvbiAhPT0gJ3ByZTEnICYmIG1zZ19pbi5tc2cgPT09ICdwaW5nJykge1xuICAgICAgaWYgKHNlbGYuX3Jlc3BvbmRUb1BpbmdzKVxuICAgICAgICBzZWxmLnNlbmQoe21zZzogXCJwb25nXCIsIGlkOiBtc2dfaW4uaWR9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGYudmVyc2lvbiAhPT0gJ3ByZTEnICYmIG1zZ19pbi5tc2cgPT09ICdwb25nJykge1xuICAgICAgLy8gU2luY2UgZXZlcnl0aGluZyBpcyBhIHBvbmcsIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmluUXVldWUucHVzaChtc2dfaW4pO1xuICAgIGlmIChzZWxmLndvcmtlclJ1bm5pbmcpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi53b3JrZXJSdW5uaW5nID0gdHJ1ZTtcblxuICAgIHZhciBwcm9jZXNzTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtc2cgPSBzZWxmLmluUXVldWUgJiYgc2VsZi5pblF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAoIW1zZykge1xuICAgICAgICBzZWxmLndvcmtlclJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBGaWJlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBibG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdW5ibG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWJsb2NrZWQpXG4gICAgICAgICAgICByZXR1cm47IC8vIGlkZW1wb3RlbnRcbiAgICAgICAgICBibG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgcHJvY2Vzc05leHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWxmLnNlcnZlci5vbk1lc3NhZ2VIb29rLmVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobXNnLCBzZWxmKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uaGFzKHNlbGYucHJvdG9jb2xfaGFuZGxlcnMsIG1zZy5tc2cpKVxuICAgICAgICAgIHNlbGYucHJvdG9jb2xfaGFuZGxlcnNbbXNnLm1zZ10uY2FsbChzZWxmLCBtc2csIHVuYmxvY2spO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgc2VsZi5zZW5kRXJyb3IoJ0JhZCByZXF1ZXN0JywgbXNnKTtcbiAgICAgICAgdW5ibG9jaygpOyAvLyBpbiBjYXNlIHRoZSBoYW5kbGVyIGRpZG4ndCBhbHJlYWR5IGRvIGl0XG4gICAgICB9KS5ydW4oKTtcbiAgICB9O1xuXG4gICAgcHJvY2Vzc05leHQoKTtcbiAgfSxcblxuICBwcm90b2NvbF9oYW5kbGVyczoge1xuICAgIHN1YjogZnVuY3Rpb24gKG1zZywgdW5ibG9jaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBjYWNoZVVuYmxvY2sgdGVtcG9yYXJseSwgc28gd2UgY2FuIGNhcHR1cmUgaXQgbGF0ZXJcbiAgICAgIC8vIHdlIHdpbGwgdXNlIHVuYmxvY2sgaW4gY3VycmVudCBldmVudExvb3AsIHNvIHRoaXMgaXMgc2FmZVxuICAgICAgc2VsZi5jYWNoZWRVbmJsb2NrID0gdW5ibG9jaztcblxuICAgICAgLy8gcmVqZWN0IG1hbGZvcm1lZCBtZXNzYWdlc1xuICAgICAgaWYgKHR5cGVvZiAobXNnLmlkKSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgIHR5cGVvZiAobXNnLm5hbWUpICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgKCgncGFyYW1zJyBpbiBtc2cpICYmICEobXNnLnBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSkpIHtcbiAgICAgICAgc2VsZi5zZW5kRXJyb3IoXCJNYWxmb3JtZWQgc3Vic2NyaXB0aW9uXCIsIG1zZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxmLnNlcnZlci5wdWJsaXNoX2hhbmRsZXJzW21zZy5uYW1lXSkge1xuICAgICAgICBzZWxmLnNlbmQoe1xuICAgICAgICAgIG1zZzogJ25vc3ViJywgaWQ6IG1zZy5pZCxcbiAgICAgICAgICBlcnJvcjogbmV3IE1ldGVvci5FcnJvcig0MDQsIGBTdWJzY3JpcHRpb24gJyR7bXNnLm5hbWV9JyBub3QgZm91bmRgKX0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9uYW1lZFN1YnMuaGFzKG1zZy5pZCkpXG4gICAgICAgIC8vIHN1YnMgYXJlIGlkZW1wb3RlbnQsIG9yIHJhdGhlciwgdGhleSBhcmUgaWdub3JlZCBpZiBhIHN1YlxuICAgICAgICAvLyB3aXRoIHRoYXQgaWQgYWxyZWFkeSBleGlzdHMuIHRoaXMgaXMgaW1wb3J0YW50IGR1cmluZ1xuICAgICAgICAvLyByZWNvbm5lY3QuXG4gICAgICAgIHJldHVybjtcblxuICAgICAgLy8gWFhYIEl0J2QgYmUgbXVjaCBiZXR0ZXIgaWYgd2UgaGFkIGdlbmVyaWMgaG9va3Mgd2hlcmUgYW55IHBhY2thZ2UgY2FuXG4gICAgICAvLyBob29rIGludG8gc3Vic2NyaXB0aW9uIGhhbmRsaW5nLCBidXQgaW4gdGhlIG1lYW4gd2hpbGUgd2Ugc3BlY2lhbCBjYXNlXG4gICAgICAvLyBkZHAtcmF0ZS1saW1pdGVyIHBhY2thZ2UuIFRoaXMgaXMgYWxzbyBkb25lIGZvciB3ZWFrIHJlcXVpcmVtZW50cyB0b1xuICAgICAgLy8gYWRkIHRoZSBkZHAtcmF0ZS1saW1pdGVyIHBhY2thZ2UgaW4gY2FzZSB3ZSBkb24ndCBoYXZlIEFjY291bnRzLiBBXG4gICAgICAvLyB1c2VyIHRyeWluZyB0byB1c2UgdGhlIGRkcC1yYXRlLWxpbWl0ZXIgbXVzdCBleHBsaWNpdGx5IHJlcXVpcmUgaXQuXG4gICAgICBpZiAoUGFja2FnZVsnZGRwLXJhdGUtbGltaXRlciddKSB7XG4gICAgICAgIHZhciBERFBSYXRlTGltaXRlciA9IFBhY2thZ2VbJ2RkcC1yYXRlLWxpbWl0ZXInXS5ERFBSYXRlTGltaXRlcjtcbiAgICAgICAgdmFyIHJhdGVMaW1pdGVySW5wdXQgPSB7XG4gICAgICAgICAgdXNlcklkOiBzZWxmLnVzZXJJZCxcbiAgICAgICAgICBjbGllbnRBZGRyZXNzOiBzZWxmLmNvbm5lY3Rpb25IYW5kbGUuY2xpZW50QWRkcmVzcyxcbiAgICAgICAgICB0eXBlOiBcInN1YnNjcmlwdGlvblwiLFxuICAgICAgICAgIG5hbWU6IG1zZy5uYW1lLFxuICAgICAgICAgIGNvbm5lY3Rpb25JZDogc2VsZi5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIEREUFJhdGVMaW1pdGVyLl9pbmNyZW1lbnQocmF0ZUxpbWl0ZXJJbnB1dCk7XG4gICAgICAgIHZhciByYXRlTGltaXRSZXN1bHQgPSBERFBSYXRlTGltaXRlci5fY2hlY2socmF0ZUxpbWl0ZXJJbnB1dCk7XG4gICAgICAgIGlmICghcmF0ZUxpbWl0UmVzdWx0LmFsbG93ZWQpIHtcbiAgICAgICAgICBzZWxmLnNlbmQoe1xuICAgICAgICAgICAgbXNnOiAnbm9zdWInLCBpZDogbXNnLmlkLFxuICAgICAgICAgICAgZXJyb3I6IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgICAgICd0b28tbWFueS1yZXF1ZXN0cycsXG4gICAgICAgICAgICAgIEREUFJhdGVMaW1pdGVyLmdldEVycm9yTWVzc2FnZShyYXRlTGltaXRSZXN1bHQpLFxuICAgICAgICAgICAgICB7dGltZVRvUmVzZXQ6IHJhdGVMaW1pdFJlc3VsdC50aW1lVG9SZXNldH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBoYW5kbGVyID0gc2VsZi5zZXJ2ZXIucHVibGlzaF9oYW5kbGVyc1ttc2cubmFtZV07XG5cbiAgICAgIHNlbGYuX3N0YXJ0U3Vic2NyaXB0aW9uKGhhbmRsZXIsIG1zZy5pZCwgbXNnLnBhcmFtcywgbXNnLm5hbWUpO1xuXG4gICAgICAvLyBjbGVhbmluZyBjYWNoZWQgdW5ibG9ja1xuICAgICAgc2VsZi5jYWNoZWRVbmJsb2NrID0gbnVsbDtcbiAgICB9LFxuXG4gICAgdW5zdWI6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgc2VsZi5fc3RvcFN1YnNjcmlwdGlvbihtc2cuaWQpO1xuICAgIH0sXG5cbiAgICBtZXRob2Q6IGZ1bmN0aW9uIChtc2csIHVuYmxvY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gUmVqZWN0IG1hbGZvcm1lZCBtZXNzYWdlcy5cbiAgICAgIC8vIEZvciBub3csIHdlIHNpbGVudGx5IGlnbm9yZSB1bmtub3duIGF0dHJpYnV0ZXMsXG4gICAgICAvLyBmb3IgZm9yd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmICh0eXBlb2YgKG1zZy5pZCkgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICB0eXBlb2YgKG1zZy5tZXRob2QpICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgKCgncGFyYW1zJyBpbiBtc2cpICYmICEobXNnLnBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSkgfHxcbiAgICAgICAgICAoKCdyYW5kb21TZWVkJyBpbiBtc2cpICYmICh0eXBlb2YgbXNnLnJhbmRvbVNlZWQgIT09IFwic3RyaW5nXCIpKSkge1xuICAgICAgICBzZWxmLnNlbmRFcnJvcihcIk1hbGZvcm1lZCBtZXRob2QgaW52b2NhdGlvblwiLCBtc2cpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByYW5kb21TZWVkID0gbXNnLnJhbmRvbVNlZWQgfHwgbnVsbDtcblxuICAgICAgLy8gU2V0IHVwIHRvIG1hcmsgdGhlIG1ldGhvZCBhcyBzYXRpc2ZpZWQgb25jZSBhbGwgb2JzZXJ2ZXJzXG4gICAgICAvLyAoYW5kIHN1YnNjcmlwdGlvbnMpIGhhdmUgcmVhY3RlZCB0byBhbnkgd3JpdGVzIHRoYXQgd2VyZVxuICAgICAgLy8gZG9uZS5cbiAgICAgIHZhciBmZW5jZSA9IG5ldyBERFBTZXJ2ZXIuX1dyaXRlRmVuY2U7XG4gICAgICBmZW5jZS5vbkFsbENvbW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldGlyZSB0aGUgZmVuY2Ugc28gdGhhdCBmdXR1cmUgd3JpdGVzIGFyZSBhbGxvd2VkLlxuICAgICAgICAvLyBUaGlzIG1lYW5zIHRoYXQgY2FsbGJhY2tzIGxpa2UgdGltZXJzIGFyZSBmcmVlIHRvIHVzZVxuICAgICAgICAvLyB0aGUgZmVuY2UsIGFuZCBpZiB0aGV5IGZpcmUgYmVmb3JlIGl0J3MgYXJtZWQgKGZvclxuICAgICAgICAvLyBleGFtcGxlLCBiZWNhdXNlIHRoZSBtZXRob2Qgd2FpdHMgZm9yIHRoZW0pIHRoZWlyXG4gICAgICAgIC8vIHdyaXRlcyB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBmZW5jZS5cbiAgICAgICAgZmVuY2UucmV0aXJlKCk7XG4gICAgICAgIHNlbGYuc2VuZCh7XG4gICAgICAgICAgbXNnOiAndXBkYXRlZCcsIG1ldGhvZHM6IFttc2cuaWRdfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRmluZCB0aGUgaGFuZGxlclxuICAgICAgdmFyIGhhbmRsZXIgPSBzZWxmLnNlcnZlci5tZXRob2RfaGFuZGxlcnNbbXNnLm1ldGhvZF07XG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgc2VsZi5zZW5kKHtcbiAgICAgICAgICBtc2c6ICdyZXN1bHQnLCBpZDogbXNnLmlkLFxuICAgICAgICAgIGVycm9yOiBuZXcgTWV0ZW9yLkVycm9yKDQwNCwgYE1ldGhvZCAnJHttc2cubWV0aG9kfScgbm90IGZvdW5kYCl9KTtcbiAgICAgICAgZmVuY2UuYXJtKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNldFVzZXJJZCA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgICAgICBzZWxmLl9zZXRVc2VySWQodXNlcklkKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBpbnZvY2F0aW9uID0gbmV3IEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uKHtcbiAgICAgICAgbmFtZTogbXNnLm1ldGhvZCxcbiAgICAgICAgaXNTaW11bGF0aW9uOiBmYWxzZSxcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXJJZCxcbiAgICAgICAgc2V0VXNlcklkOiBzZXRVc2VySWQsXG4gICAgICAgIHVuYmxvY2s6IHVuYmxvY2ssXG4gICAgICAgIGNvbm5lY3Rpb246IHNlbGYuY29ubmVjdGlvbkhhbmRsZSxcbiAgICAgICAgcmFuZG9tU2VlZDogcmFuZG9tU2VlZFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIFhYWCBJdCdkIGJlIGJldHRlciBpZiB3ZSBjb3VsZCBob29rIGludG8gbWV0aG9kIGhhbmRsZXJzIGJldHRlciBidXRcbiAgICAgICAgLy8gZm9yIG5vdywgd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgZGRwLXJhdGUtbGltaXRlciBleGlzdHMgc2luY2Ugd2VcbiAgICAgICAgLy8gaGF2ZSBhIHdlYWsgcmVxdWlyZW1lbnQgZm9yIHRoZSBkZHAtcmF0ZS1saW1pdGVyIHBhY2thZ2UgdG8gYmUgYWRkZWRcbiAgICAgICAgLy8gdG8gb3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBpZiAoUGFja2FnZVsnZGRwLXJhdGUtbGltaXRlciddKSB7XG4gICAgICAgICAgdmFyIEREUFJhdGVMaW1pdGVyID0gUGFja2FnZVsnZGRwLXJhdGUtbGltaXRlciddLkREUFJhdGVMaW1pdGVyO1xuICAgICAgICAgIHZhciByYXRlTGltaXRlcklucHV0ID0ge1xuICAgICAgICAgICAgdXNlcklkOiBzZWxmLnVzZXJJZCxcbiAgICAgICAgICAgIGNsaWVudEFkZHJlc3M6IHNlbGYuY29ubmVjdGlvbkhhbmRsZS5jbGllbnRBZGRyZXNzLFxuICAgICAgICAgICAgdHlwZTogXCJtZXRob2RcIixcbiAgICAgICAgICAgIG5hbWU6IG1zZy5tZXRob2QsXG4gICAgICAgICAgICBjb25uZWN0aW9uSWQ6IHNlbGYuaWRcbiAgICAgICAgICB9O1xuICAgICAgICAgIEREUFJhdGVMaW1pdGVyLl9pbmNyZW1lbnQocmF0ZUxpbWl0ZXJJbnB1dCk7XG4gICAgICAgICAgdmFyIHJhdGVMaW1pdFJlc3VsdCA9IEREUFJhdGVMaW1pdGVyLl9jaGVjayhyYXRlTGltaXRlcklucHV0KVxuICAgICAgICAgIGlmICghcmF0ZUxpbWl0UmVzdWx0LmFsbG93ZWQpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgICAgICBcInRvby1tYW55LXJlcXVlc3RzXCIsXG4gICAgICAgICAgICAgIEREUFJhdGVMaW1pdGVyLmdldEVycm9yTWVzc2FnZShyYXRlTGltaXRSZXN1bHQpLFxuICAgICAgICAgICAgICB7dGltZVRvUmVzZXQ6IHJhdGVMaW1pdFJlc3VsdC50aW1lVG9SZXNldH1cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRNZXRob2RJbnZvY2F0aW9uUmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi5fc2V0TmV3Q29udGV4dEFuZEdldEN1cnJlbnQoXG4gICAgICAgICAgICBpbnZvY2F0aW9uXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0T3JUaGVuYWJsZSA9IG1heWJlQXVkaXRBcmd1bWVudENoZWNrcyhcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgaW52b2NhdGlvbixcbiAgICAgICAgICAgICAgbXNnLnBhcmFtcyxcbiAgICAgICAgICAgICAgXCJjYWxsIHRvICdcIiArIG1zZy5tZXRob2QgKyBcIidcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVGhlbmFibGUgPVxuICAgICAgICAgICAgICByZXN1bHRPclRoZW5hYmxlICYmIHR5cGVvZiByZXN1bHRPclRoZW5hYmxlLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICBpZiAoaXNUaGVuYWJsZSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLmF3YWl0KHJlc3VsdE9yVGhlbmFibGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0T3JUaGVuYWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIEREUC5fQ3VycmVudE1ldGhvZEludm9jYXRpb24uX3NldChjdXJyZW50Q29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc29sdmUoRERQU2VydmVyLl9DdXJyZW50V3JpdGVGZW5jZS53aXRoVmFsdWUoZmVuY2UsIGdldEN1cnJlbnRNZXRob2RJbnZvY2F0aW9uUmVzdWx0KSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICBmZW5jZS5hcm0oKTtcbiAgICAgICAgdW5ibG9jaygpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtc2c6IFwicmVzdWx0XCIsXG4gICAgICAgIGlkOiBtc2cuaWRcbiAgICAgIH07XG5cbiAgICAgIHByb21pc2UudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGF5bG9hZC5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zZW5kKHBheWxvYWQpO1xuICAgICAgfSwgKGV4Y2VwdGlvbikgPT4ge1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgcGF5bG9hZC5lcnJvciA9IHdyYXBJbnRlcm5hbEV4Y2VwdGlvbihcbiAgICAgICAgICBleGNlcHRpb24sXG4gICAgICAgICAgYHdoaWxlIGludm9raW5nIG1ldGhvZCAnJHttc2cubWV0aG9kfSdgXG4gICAgICAgICk7XG4gICAgICAgIHNlbGYuc2VuZChwYXlsb2FkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfZWFjaFN1YjogZnVuY3Rpb24gKGYpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5fbmFtZWRTdWJzLmZvckVhY2goZik7XG4gICAgc2VsZi5fdW5pdmVyc2FsU3Vicy5mb3JFYWNoKGYpO1xuICB9LFxuXG4gIF9kaWZmQ29sbGVjdGlvblZpZXdzOiBmdW5jdGlvbiAoYmVmb3JlQ1ZzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIERpZmZTZXF1ZW5jZS5kaWZmTWFwcyhiZWZvcmVDVnMsIHNlbGYuY29sbGVjdGlvblZpZXdzLCB7XG4gICAgICBib3RoOiBmdW5jdGlvbiAoY29sbGVjdGlvbk5hbWUsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSkge1xuICAgICAgICByaWdodFZhbHVlLmRpZmYobGVmdFZhbHVlKTtcbiAgICAgIH0sXG4gICAgICByaWdodE9ubHk6IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgcmlnaHRWYWx1ZSkge1xuICAgICAgICByaWdodFZhbHVlLmRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2NWaWV3LCBpZCkge1xuICAgICAgICAgIHNlbGYuc2VuZEFkZGVkKGNvbGxlY3Rpb25OYW1lLCBpZCwgZG9jVmlldy5nZXRGaWVsZHMoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGxlZnRPbmx5OiBmdW5jdGlvbiAoY29sbGVjdGlvbk5hbWUsIGxlZnRWYWx1ZSkge1xuICAgICAgICBsZWZ0VmFsdWUuZG9jdW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRvYywgaWQpIHtcbiAgICAgICAgICBzZWxmLnNlbmRSZW1vdmVkKGNvbGxlY3Rpb25OYW1lLCBpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIFNldHMgdGhlIGN1cnJlbnQgdXNlciBpZCBpbiBhbGwgYXBwcm9wcmlhdGUgY29udGV4dHMgYW5kIHJlcnVuc1xuICAvLyBhbGwgc3Vic2NyaXB0aW9uc1xuICBfc2V0VXNlcklkOiBmdW5jdGlvbih1c2VySWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodXNlcklkICE9PSBudWxsICYmIHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXRVc2VySWQgbXVzdCBiZSBjYWxsZWQgb24gc3RyaW5nIG9yIG51bGwsIG5vdCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHVzZXJJZCk7XG5cbiAgICAvLyBQcmV2ZW50IG5ld2x5LWNyZWF0ZWQgdW5pdmVyc2FsIHN1YnNjcmlwdGlvbnMgZnJvbSBiZWluZyBhZGRlZCB0byBvdXJcbiAgICAvLyBzZXNzaW9uLiBUaGV5IHdpbGwgYmUgZm91bmQgYmVsb3cgd2hlbiB3ZSBjYWxsIHN0YXJ0VW5pdmVyc2FsU3Vicy5cbiAgICAvL1xuICAgIC8vIChXZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG5hbWVkIHN1YnNjcmlwdGlvbnMsIGJlY2F1c2Ugd2Ugb25seSBhZGRcbiAgICAvLyB0aGVtIHdoZW4gd2UgcHJvY2VzcyBhICdzdWInIG1lc3NhZ2UuIFdlIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2luZyBhXG4gICAgLy8gJ21ldGhvZCcgbWVzc2FnZSwgYW5kIHRoZSBtZXRob2QgZGlkIG5vdCB1bmJsb2NrLCBiZWNhdXNlIGl0IGlzIGlsbGVnYWxcbiAgICAvLyB0byBjYWxsIHNldFVzZXJJZCBhZnRlciB1bmJsb2NrLiBUaHVzIHdlIGNhbm5vdCBiZSBjb25jdXJyZW50bHkgYWRkaW5nIGFcbiAgICAvLyBuZXcgbmFtZWQgc3Vic2NyaXB0aW9uKS5cbiAgICBzZWxmLl9kb250U3RhcnROZXdVbml2ZXJzYWxTdWJzID0gdHJ1ZTtcblxuICAgIC8vIFByZXZlbnQgY3VycmVudCBzdWJzIGZyb20gdXBkYXRpbmcgb3VyIGNvbGxlY3Rpb25WaWV3cyBhbmQgY2FsbCB0aGVpclxuICAgIC8vIHN0b3AgY2FsbGJhY2tzLiBUaGlzIG1heSB5aWVsZC5cbiAgICBzZWxmLl9lYWNoU3ViKGZ1bmN0aW9uIChzdWIpIHtcbiAgICAgIHN1Yi5fZGVhY3RpdmF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsIHN1YnMgc2hvdWxkIG5vdyBiZSBkZWFjdGl2YXRlZC4gU3RvcCBzZW5kaW5nIG1lc3NhZ2VzIHRvIHRoZSBjbGllbnQsXG4gICAgLy8gc2F2ZSB0aGUgc3RhdGUgb2YgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9ucywgcmVzZXQgdG8gYW4gZW1wdHkgdmlldywgYW5kXG4gICAgLy8gdXBkYXRlIHRoZSB1c2VySWQuXG4gICAgc2VsZi5faXNTZW5kaW5nID0gZmFsc2U7XG4gICAgdmFyIGJlZm9yZUNWcyA9IHNlbGYuY29sbGVjdGlvblZpZXdzO1xuICAgIHNlbGYuY29sbGVjdGlvblZpZXdzID0gbmV3IE1hcCgpO1xuICAgIHNlbGYudXNlcklkID0gdXNlcklkO1xuXG4gICAgLy8gX3NldFVzZXJJZCBpcyBub3JtYWxseSBjYWxsZWQgZnJvbSBhIE1ldGVvciBtZXRob2Qgd2l0aFxuICAgIC8vIEREUC5fQ3VycmVudE1ldGhvZEludm9jYXRpb24gc2V0LiBCdXQgRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbiBpcyBub3RcbiAgICAvLyBleHBlY3RlZCB0byBiZSBzZXQgaW5zaWRlIGEgcHVibGlzaCBmdW5jdGlvbiwgc28gd2UgdGVtcG9yYXJ5IHVuc2V0IGl0LlxuICAgIC8vIEluc2lkZSBhIHB1Ymxpc2ggZnVuY3Rpb24gRERQLl9DdXJyZW50UHVibGljYXRpb25JbnZvY2F0aW9uIGlzIHNldC5cbiAgICBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLndpdGhWYWx1ZSh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFNhdmUgdGhlIG9sZCBuYW1lZCBzdWJzLCBhbmQgcmVzZXQgdG8gaGF2aW5nIG5vIHN1YnNjcmlwdGlvbnMuXG4gICAgICB2YXIgb2xkTmFtZWRTdWJzID0gc2VsZi5fbmFtZWRTdWJzO1xuICAgICAgc2VsZi5fbmFtZWRTdWJzID0gbmV3IE1hcCgpO1xuICAgICAgc2VsZi5fdW5pdmVyc2FsU3VicyA9IFtdO1xuXG4gICAgICBvbGROYW1lZFN1YnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViLCBzdWJzY3JpcHRpb25JZCkge1xuICAgICAgICB2YXIgbmV3U3ViID0gc3ViLl9yZWNyZWF0ZSgpO1xuICAgICAgICBzZWxmLl9uYW1lZFN1YnMuc2V0KHN1YnNjcmlwdGlvbklkLCBuZXdTdWIpO1xuICAgICAgICAvLyBuYjogaWYgdGhlIGhhbmRsZXIgdGhyb3dzIG9yIGNhbGxzIHRoaXMuZXJyb3IoKSwgaXQgd2lsbCBpbiBmYWN0XG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHNlbmQgaXRzICdub3N1YicuIFRoaXMgaXMgT0ssIHRob3VnaC5cbiAgICAgICAgbmV3U3ViLl9ydW5IYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWxsb3cgbmV3bHktY3JlYXRlZCB1bml2ZXJzYWwgc3VicyB0byBiZSBzdGFydGVkIG9uIG91ciBjb25uZWN0aW9uIGluXG4gICAgICAvLyBwYXJhbGxlbCB3aXRoIHRoZSBvbmVzIHdlJ3JlIHNwaW5uaW5nIHVwIGhlcmUsIGFuZCBzcGluIHVwIHVuaXZlcnNhbFxuICAgICAgLy8gc3Vicy5cbiAgICAgIHNlbGYuX2RvbnRTdGFydE5ld1VuaXZlcnNhbFN1YnMgPSBmYWxzZTtcbiAgICAgIHNlbGYuc3RhcnRVbml2ZXJzYWxTdWJzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCBzZW5kaW5nIG1lc3NhZ2VzIGFnYWluLCBiZWdpbm5pbmcgd2l0aCB0aGUgZGlmZiBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHN0YXRlIG9mIHRoZSB3b3JsZCB0byB0aGUgY3VycmVudCBzdGF0ZS4gTm8geWllbGRzIGFyZSBhbGxvd2VkIGR1cmluZ1xuICAgIC8vIHRoaXMgZGlmZiwgc28gdGhhdCBvdGhlciBjaGFuZ2VzIGNhbm5vdCBpbnRlcmxlYXZlLlxuICAgIE1ldGVvci5fbm9ZaWVsZHNBbGxvd2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2lzU2VuZGluZyA9IHRydWU7XG4gICAgICBzZWxmLl9kaWZmQ29sbGVjdGlvblZpZXdzKGJlZm9yZUNWcyk7XG4gICAgICBpZiAoIV8uaXNFbXB0eShzZWxmLl9wZW5kaW5nUmVhZHkpKSB7XG4gICAgICAgIHNlbGYuc2VuZFJlYWR5KHNlbGYuX3BlbmRpbmdSZWFkeSk7XG4gICAgICAgIHNlbGYuX3BlbmRpbmdSZWFkeSA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIF9zdGFydFN1YnNjcmlwdGlvbjogZnVuY3Rpb24gKGhhbmRsZXIsIHN1YklkLCBwYXJhbXMsIG5hbWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbihcbiAgICAgIHNlbGYsIGhhbmRsZXIsIHN1YklkLCBwYXJhbXMsIG5hbWUpO1xuXG4gICAgbGV0IHVuYmxvY2tIYW5kZXIgPSBzZWxmLmNhY2hlZFVuYmxvY2s7XG4gICAgLy8gX3N0YXJ0U3Vic2NyaXB0aW9uIG1heSBjYWxsIGZyb20gYSBsb3QgcGxhY2VzXG4gICAgLy8gc28gY2FjaGVkVW5ibG9jayBtaWdodCBiZSBudWxsIGluIHNvbWVjYXNlc1xuICAgIC8vIGFzc2lnbiB0aGUgY2FjaGVkVW5ibG9ja1xuICAgIHN1Yi51bmJsb2NrID0gdW5ibG9ja0hhbmRlciB8fCAoKCkgPT4ge30pO1xuXG4gICAgaWYgKHN1YklkKVxuICAgICAgc2VsZi5fbmFtZWRTdWJzLnNldChzdWJJZCwgc3ViKTtcbiAgICBlbHNlXG4gICAgICBzZWxmLl91bml2ZXJzYWxTdWJzLnB1c2goc3ViKTtcblxuICAgIHN1Yi5fcnVuSGFuZGxlcigpO1xuICB9LFxuXG4gIC8vIFRlYXIgZG93biBzcGVjaWZpZWQgc3Vic2NyaXB0aW9uXG4gIF9zdG9wU3Vic2NyaXB0aW9uOiBmdW5jdGlvbiAoc3ViSWQsIGVycm9yKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHN1Yk5hbWUgPSBudWxsO1xuICAgIGlmIChzdWJJZCkge1xuICAgICAgdmFyIG1heWJlU3ViID0gc2VsZi5fbmFtZWRTdWJzLmdldChzdWJJZCk7XG4gICAgICBpZiAobWF5YmVTdWIpIHtcbiAgICAgICAgc3ViTmFtZSA9IG1heWJlU3ViLl9uYW1lO1xuICAgICAgICBtYXliZVN1Yi5fcmVtb3ZlQWxsRG9jdW1lbnRzKCk7XG4gICAgICAgIG1heWJlU3ViLl9kZWFjdGl2YXRlKCk7XG4gICAgICAgIHNlbGYuX25hbWVkU3Vicy5kZWxldGUoc3ViSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXNwb25zZSA9IHttc2c6ICdub3N1YicsIGlkOiBzdWJJZH07XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlc3BvbnNlLmVycm9yID0gd3JhcEludGVybmFsRXhjZXB0aW9uKFxuICAgICAgICBlcnJvcixcbiAgICAgICAgc3ViTmFtZSA/IChcImZyb20gc3ViIFwiICsgc3ViTmFtZSArIFwiIGlkIFwiICsgc3ViSWQpXG4gICAgICAgICAgOiAoXCJmcm9tIHN1YiBpZCBcIiArIHN1YklkKSk7XG4gICAgfVxuXG4gICAgc2VsZi5zZW5kKHJlc3BvbnNlKTtcbiAgfSxcblxuICAvLyBUZWFyIGRvd24gYWxsIHN1YnNjcmlwdGlvbnMuIE5vdGUgdGhhdCB0aGlzIGRvZXMgTk9UIHNlbmQgcmVtb3ZlZCBvciBub3N1YlxuICAvLyBtZXNzYWdlcywgc2luY2Ugd2UgYXNzdW1lIHRoZSBjbGllbnQgaXMgZ29uZS5cbiAgX2RlYWN0aXZhdGVBbGxTdWJzY3JpcHRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgc2VsZi5fbmFtZWRTdWJzLmZvckVhY2goZnVuY3Rpb24gKHN1YiwgaWQpIHtcbiAgICAgIHN1Yi5fZGVhY3RpdmF0ZSgpO1xuICAgIH0pO1xuICAgIHNlbGYuX25hbWVkU3VicyA9IG5ldyBNYXAoKTtcblxuICAgIHNlbGYuX3VuaXZlcnNhbFN1YnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7XG4gICAgICBzdWIuX2RlYWN0aXZhdGUoKTtcbiAgICB9KTtcbiAgICBzZWxmLl91bml2ZXJzYWxTdWJzID0gW107XG4gIH0sXG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSByZW1vdGUgY2xpZW50J3MgSVAgYWRkcmVzcywgYmFzZWQgb24gdGhlXG4gIC8vIEhUVFBfRk9SV0FSREVEX0NPVU5UIGVudmlyb25tZW50IHZhcmlhYmxlIHJlcHJlc2VudGluZyBob3cgbWFueVxuICAvLyBwcm94aWVzIHRoZSBzZXJ2ZXIgaXMgYmVoaW5kLlxuICBfY2xpZW50QWRkcmVzczogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIEZvciB0aGUgcmVwb3J0ZWQgY2xpZW50IGFkZHJlc3MgZm9yIGEgY29ubmVjdGlvbiB0byBiZSBjb3JyZWN0LFxuICAgIC8vIHRoZSBkZXZlbG9wZXIgbXVzdCBzZXQgdGhlIEhUVFBfRk9SV0FSREVEX0NPVU5UIGVudmlyb25tZW50XG4gICAgLy8gdmFyaWFibGUgdG8gYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBob3BzIHRoZXlcbiAgICAvLyBleHBlY3QgaW4gdGhlIGB4LWZvcndhcmRlZC1mb3JgIGhlYWRlci4gRS5nLiwgc2V0IHRvIFwiMVwiIGlmIHRoZVxuICAgIC8vIHNlcnZlciBpcyBiZWhpbmQgb25lIHByb3h5LlxuICAgIC8vXG4gICAgLy8gVGhpcyBjb3VsZCBiZSBjb21wdXRlZCBvbmNlIGF0IHN0YXJ0dXAgaW5zdGVhZCBvZiBldmVyeSB0aW1lLlxuICAgIHZhciBodHRwRm9yd2FyZGVkQ291bnQgPSBwYXJzZUludChwcm9jZXNzLmVudlsnSFRUUF9GT1JXQVJERURfQ09VTlQnXSkgfHwgMDtcblxuICAgIGlmIChodHRwRm9yd2FyZGVkQ291bnQgPT09IDApXG4gICAgICByZXR1cm4gc2VsZi5zb2NrZXQucmVtb3RlQWRkcmVzcztcblxuICAgIHZhciBmb3J3YXJkZWRGb3IgPSBzZWxmLnNvY2tldC5oZWFkZXJzW1wieC1mb3J3YXJkZWQtZm9yXCJdO1xuICAgIGlmICghIF8uaXNTdHJpbmcoZm9yd2FyZGVkRm9yKSlcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGZvcndhcmRlZEZvciA9IGZvcndhcmRlZEZvci50cmltKCkuc3BsaXQoL1xccyosXFxzKi8pO1xuXG4gICAgLy8gVHlwaWNhbGx5IHRoZSBmaXJzdCB2YWx1ZSBpbiB0aGUgYHgtZm9yd2FyZGVkLWZvcmAgaGVhZGVyIGlzXG4gICAgLy8gdGhlIG9yaWdpbmFsIElQIGFkZHJlc3Mgb2YgdGhlIGNsaWVudCBjb25uZWN0aW5nIHRvIHRoZSBmaXJzdFxuICAgIC8vIHByb3h5LiAgSG93ZXZlciwgdGhlIGVuZCB1c2VyIGNhbiBlYXNpbHkgc3Bvb2YgdGhlIGhlYWRlciwgaW5cbiAgICAvLyB3aGljaCBjYXNlIHRoZSBmaXJzdCB2YWx1ZShzKSB3aWxsIGJlIHRoZSBmYWtlIElQIGFkZHJlc3MgZnJvbVxuICAgIC8vIHRoZSB1c2VyIHByZXRlbmRpbmcgdG8gYmUgYSBwcm94eSByZXBvcnRpbmcgdGhlIG9yaWdpbmFsIElQXG4gICAgLy8gYWRkcmVzcyB2YWx1ZS4gIEJ5IGNvdW50aW5nIEhUVFBfRk9SV0FSREVEX0NPVU5UIGJhY2sgZnJvbSB0aGVcbiAgICAvLyBlbmQgb2YgdGhlIGxpc3QsIHdlIGVuc3VyZSB0aGF0IHdlIGdldCB0aGUgSVAgYWRkcmVzcyBiZWluZ1xuICAgIC8vIHJlcG9ydGVkIGJ5ICpvdXIqIGZpcnN0IHByb3h5LlxuXG4gICAgaWYgKGh0dHBGb3J3YXJkZWRDb3VudCA8IDAgfHwgaHR0cEZvcndhcmRlZENvdW50ID4gZm9yd2FyZGVkRm9yLmxlbmd0aClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIGZvcndhcmRlZEZvcltmb3J3YXJkZWRGb3IubGVuZ3RoIC0gaHR0cEZvcndhcmRlZENvdW50XTtcbiAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTdWJzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gQ3RvciBmb3IgYSBzdWIgaGFuZGxlOiB0aGUgaW5wdXQgdG8gZWFjaCBwdWJsaXNoIGZ1bmN0aW9uXG5cbi8vIEluc3RhbmNlIG5hbWUgaXMgdGhpcyBiZWNhdXNlIGl0J3MgdXN1YWxseSByZWZlcnJlZCB0byBhcyB0aGlzIGluc2lkZSBhXG4vLyBwdWJsaXNoXG4vKipcbiAqIEBzdW1tYXJ5IFRoZSBzZXJ2ZXIncyBzaWRlIG9mIGEgc3Vic2NyaXB0aW9uXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKiBAaW5zdGFuY2VOYW1lIHRoaXNcbiAqIEBzaG93SW5zdGFuY2VOYW1lIHRydWVcbiAqL1xudmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChcbiAgICBzZXNzaW9uLCBoYW5kbGVyLCBzdWJzY3JpcHRpb25JZCwgcGFyYW1zLCBuYW1lKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5fc2Vzc2lvbiA9IHNlc3Npb247IC8vIHR5cGUgaXMgU2Vzc2lvblxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBBY2Nlc3MgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiBUaGUgaW5jb21pbmcgW2Nvbm5lY3Rpb25dKCNtZXRlb3Jfb25jb25uZWN0aW9uKSBmb3IgdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG5hbWUgIGNvbm5lY3Rpb25cbiAgICogQG1lbWJlck9mIFN1YnNjcmlwdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICovXG4gIHNlbGYuY29ubmVjdGlvbiA9IHNlc3Npb24uY29ubmVjdGlvbkhhbmRsZTsgLy8gcHVibGljIEFQSSBvYmplY3RcblxuICBzZWxmLl9oYW5kbGVyID0gaGFuZGxlcjtcblxuICAvLyBNeSBzdWJzY3JpcHRpb24gSUQgKGdlbmVyYXRlZCBieSBjbGllbnQsIHVuZGVmaW5lZCBmb3IgdW5pdmVyc2FsIHN1YnMpLlxuICBzZWxmLl9zdWJzY3JpcHRpb25JZCA9IHN1YnNjcmlwdGlvbklkO1xuICAvLyBVbmRlZmluZWQgZm9yIHVuaXZlcnNhbCBzdWJzXG4gIHNlbGYuX25hbWUgPSBuYW1lO1xuXG4gIHNlbGYuX3BhcmFtcyA9IHBhcmFtcyB8fCBbXTtcblxuICAvLyBPbmx5IG5hbWVkIHN1YnNjcmlwdGlvbnMgaGF2ZSBJRHMsIGJ1dCB3ZSBuZWVkIHNvbWUgc29ydCBvZiBzdHJpbmdcbiAgLy8gaW50ZXJuYWxseSB0byBrZWVwIHRyYWNrIG9mIGFsbCBzdWJzY3JpcHRpb25zIGluc2lkZVxuICAvLyBTZXNzaW9uRG9jdW1lbnRWaWV3cy4gV2UgdXNlIHRoaXMgc3Vic2NyaXB0aW9uSGFuZGxlIGZvciB0aGF0LlxuICBpZiAoc2VsZi5fc3Vic2NyaXB0aW9uSWQpIHtcbiAgICBzZWxmLl9zdWJzY3JpcHRpb25IYW5kbGUgPSAnTicgKyBzZWxmLl9zdWJzY3JpcHRpb25JZDtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLl9zdWJzY3JpcHRpb25IYW5kbGUgPSAnVScgKyBSYW5kb20uaWQoKTtcbiAgfVxuXG4gIC8vIEhhcyBfZGVhY3RpdmF0ZSBiZWVuIGNhbGxlZD9cbiAgc2VsZi5fZGVhY3RpdmF0ZWQgPSBmYWxzZTtcblxuICAvLyBTdG9wIGNhbGxiYWNrcyB0byBnL2MgdGhpcyBzdWIuICBjYWxsZWQgdy8gemVybyBhcmd1bWVudHMuXG4gIHNlbGYuX3N0b3BDYWxsYmFja3MgPSBbXTtcblxuICAvLyBUaGUgc2V0IG9mIChjb2xsZWN0aW9uLCBkb2N1bWVudGlkKSB0aGF0IHRoaXMgc3Vic2NyaXB0aW9uIGhhc1xuICAvLyBhbiBvcGluaW9uIGFib3V0LlxuICBzZWxmLl9kb2N1bWVudHMgPSBuZXcgTWFwKCk7XG5cbiAgLy8gUmVtZW1iZXIgaWYgd2UgYXJlIHJlYWR5LlxuICBzZWxmLl9yZWFkeSA9IGZhbHNlO1xuXG4gIC8vIFBhcnQgb2YgdGhlIHB1YmxpYyBBUEk6IHRoZSB1c2VyIG9mIHRoaXMgc3ViLlxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBBY2Nlc3MgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiBUaGUgaWQgb2YgdGhlIGxvZ2dlZC1pbiB1c2VyLCBvciBgbnVsbGAgaWYgbm8gdXNlciBpcyBsb2dnZWQgaW4uXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG1lbWJlck9mIFN1YnNjcmlwdGlvblxuICAgKiBAbmFtZSAgdXNlcklkXG4gICAqIEBpbnN0YW5jZVxuICAgKi9cbiAgc2VsZi51c2VySWQgPSBzZXNzaW9uLnVzZXJJZDtcblxuICAvLyBGb3Igbm93LCB0aGUgaWQgZmlsdGVyIGlzIGdvaW5nIHRvIGRlZmF1bHQgdG9cbiAgLy8gdGhlIHRvL2Zyb20gRERQIG1ldGhvZHMgb24gTW9uZ29JRCwgdG9cbiAgLy8gc3BlY2lmaWNhbGx5IGRlYWwgd2l0aCBtb25nby9taW5pbW9uZ28gT2JqZWN0SWRzLlxuXG4gIC8vIExhdGVyLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBiZSBcInJhd1wiXG4gIC8vIGlmIHlvdSB3YW50IHRvIHB1Ymxpc2ggYSBjb2xsZWN0aW9uIHRoYXQgeW91IGtub3dcbiAgLy8ganVzdCBoYXMgc3RyaW5ncyBmb3Iga2V5cyBhbmQgbm8gZnVubnkgYnVzaW5lc3MsIHRvXG4gIC8vIGEgRERQIGNvbnN1bWVyIHRoYXQgaXNuJ3QgbWluaW1vbmdvLlxuXG4gIHNlbGYuX2lkRmlsdGVyID0ge1xuICAgIGlkU3RyaW5naWZ5OiBNb25nb0lELmlkU3RyaW5naWZ5LFxuICAgIGlkUGFyc2U6IE1vbmdvSUQuaWRQYXJzZVxuICB9O1xuXG4gIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXSAmJiBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICBcImxpdmVkYXRhXCIsIFwic3Vic2NyaXB0aW9uc1wiLCAxKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oU3Vic2NyaXB0aW9uLnByb3RvdHlwZSwge1xuICBfcnVuSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gWFhYIHNob3VsZCB3ZSB1bmJsb2NrKCkgaGVyZT8gRWl0aGVyIGJlZm9yZSBydW5uaW5nIHRoZSBwdWJsaXNoXG4gICAgLy8gZnVuY3Rpb24sIG9yIGJlZm9yZSBydW5uaW5nIF9wdWJsaXNoQ3Vyc29yLlxuICAgIC8vXG4gICAgLy8gUmlnaHQgbm93LCBlYWNoIHB1Ymxpc2ggZnVuY3Rpb24gYmxvY2tzIGFsbCBmdXR1cmUgcHVibGlzaGVzIGFuZFxuICAgIC8vIG1ldGhvZHMgd2FpdGluZyBvbiBkYXRhIGZyb20gTW9uZ28gKG9yIHdoYXRldmVyIGVsc2UgdGhlIGZ1bmN0aW9uXG4gICAgLy8gYmxvY2tzIG9uKS4gVGhpcyBwcm9iYWJseSBzbG93cyBwYWdlIGxvYWQgaW4gY29tbW9uIGNhc2VzLlxuXG4gICAgaWYgKCF0aGlzLnVuYmxvY2spIHtcbiAgICAgIHRoaXMudW5ibG9jayA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCByZXN1bHRPclRoZW5hYmxlID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0T3JUaGVuYWJsZSA9IEREUC5fQ3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbi53aXRoVmFsdWUoc2VsZiwgKCkgPT5cbiAgICAgICAgbWF5YmVBdWRpdEFyZ3VtZW50Q2hlY2tzKFxuICAgICAgICAgIHNlbGYuX2hhbmRsZXIsXG4gICAgICAgICAgc2VsZixcbiAgICAgICAgICBFSlNPTi5jbG9uZShzZWxmLl9wYXJhbXMpLFxuICAgICAgICAgIC8vIEl0J3MgT0sgdGhhdCB0aGlzIHdvdWxkIGxvb2sgd2VpcmQgZm9yIHVuaXZlcnNhbCBzdWJzY3JpcHRpb25zLFxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhleSBoYXZlIG5vIGFyZ3VtZW50cyBzbyB0aGVyZSBjYW4gbmV2ZXIgYmUgYW5cbiAgICAgICAgICAvLyBhdWRpdC1hcmd1bWVudC1jaGVja3MgZmFpbHVyZS5cbiAgICAgICAgICBcInB1Ymxpc2hlciAnXCIgKyBzZWxmLl9uYW1lICsgXCInXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZWxmLmVycm9yKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERpZCB0aGUgaGFuZGxlciBjYWxsIHRoaXMuZXJyb3Igb3IgdGhpcy5zdG9wP1xuICAgIGlmIChzZWxmLl9pc0RlYWN0aXZhdGVkKCkpIHJldHVybjtcblxuICAgIC8vIEJvdGggY29udmVudGlvbmFsIGFuZCBhc3luYyBwdWJsaXNoIGhhbmRsZXIgZnVuY3Rpb25zIGFyZSBzdXBwb3J0ZWQuXG4gICAgLy8gSWYgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggYSB0aGVuKCkgZnVuY3Rpb24sIGl0IGlzIGVpdGhlciBhIHByb21pc2VcbiAgICAvLyBvciB0aGVuYWJsZSBhbmQgd2lsbCBiZSByZXNvbHZlZCBhc3luY2hyb25vdXNseS5cbiAgICBjb25zdCBpc1RoZW5hYmxlID1cbiAgICAgIHJlc3VsdE9yVGhlbmFibGUgJiYgdHlwZW9mIHJlc3VsdE9yVGhlbmFibGUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoaXNUaGVuYWJsZSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdE9yVGhlbmFibGUpLnRoZW4oXG4gICAgICAgICguLi5hcmdzKSA9PiBzZWxmLl9wdWJsaXNoSGFuZGxlclJlc3VsdC5iaW5kKHNlbGYpKC4uLmFyZ3MpLFxuICAgICAgICBlID0+IHNlbGYuZXJyb3IoZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3B1Ymxpc2hIYW5kbGVyUmVzdWx0KHJlc3VsdE9yVGhlbmFibGUpO1xuICAgIH1cbiAgfSxcblxuICBfcHVibGlzaEhhbmRsZXJSZXN1bHQ6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAvLyBTUEVDSUFMIENBU0U6IEluc3RlYWQgb2Ygd3JpdGluZyB0aGVpciBvd24gY2FsbGJhY2tzIHRoYXQgaW52b2tlXG4gICAgLy8gdGhpcy5hZGRlZC9jaGFuZ2VkL3JlYWR5L2V0YywgdGhlIHVzZXIgY2FuIGp1c3QgcmV0dXJuIGEgY29sbGVjdGlvblxuICAgIC8vIGN1cnNvciBvciBhcnJheSBvZiBjdXJzb3JzIGZyb20gdGhlIHB1Ymxpc2ggZnVuY3Rpb247IHdlIGNhbGwgdGhlaXJcbiAgICAvLyBfcHVibGlzaEN1cnNvciBtZXRob2Qgd2hpY2ggc3RhcnRzIG9ic2VydmluZyB0aGUgY3Vyc29yIGFuZCBwdWJsaXNoZXMgdGhlXG4gICAgLy8gcmVzdWx0cy4gTm90ZSB0aGF0IF9wdWJsaXNoQ3Vyc29yIGRvZXMgTk9UIGNhbGwgcmVhZHkoKS5cbiAgICAvL1xuICAgIC8vIFhYWCBUaGlzIHVzZXMgYW4gdW5kb2N1bWVudGVkIGludGVyZmFjZSB3aGljaCBvbmx5IHRoZSBNb25nbyBjdXJzb3JcbiAgICAvLyBpbnRlcmZhY2UgcHVibGlzaGVzLiBTaG91bGQgd2UgbWFrZSB0aGlzIGludGVyZmFjZSBwdWJsaWMgYW5kIGVuY291cmFnZVxuICAgIC8vIHVzZXJzIHRvIGltcGxlbWVudCBpdCB0aGVtc2VsdmVzPyBBcmd1YWJseSwgaXQncyB1bm5lY2Vzc2FyeTsgdXNlcnMgY2FuXG4gICAgLy8gYWxyZWFkeSB3cml0ZSB0aGVpciBvd24gZnVuY3Rpb25zIGxpa2VcbiAgICAvLyAgIHZhciBwdWJsaXNoTXlSZWFjdGl2ZVRoaW5neSA9IGZ1bmN0aW9uIChuYW1lLCBoYW5kbGVyKSB7XG4gICAgLy8gICAgIE1ldGVvci5wdWJsaXNoKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICB2YXIgcmVhY3RpdmVUaGluZ3kgPSBoYW5kbGVyKCk7XG4gICAgLy8gICAgICAgcmVhY3RpdmVUaGluZ3kucHVibGlzaE1lKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaXNDdXJzb3IgPSBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMgJiYgYy5fcHVibGlzaEN1cnNvcjtcbiAgICB9O1xuICAgIGlmIChpc0N1cnNvcihyZXMpKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXMuX3B1Ymxpc2hDdXJzb3Ioc2VsZik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGYuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIF9wdWJsaXNoQ3Vyc29yIG9ubHkgcmV0dXJucyBhZnRlciB0aGUgaW5pdGlhbCBhZGRlZCBjYWxsYmFja3MgaGF2ZSBydW4uXG4gICAgICAvLyBtYXJrIHN1YnNjcmlwdGlvbiBhcyByZWFkeS5cbiAgICAgIHNlbGYucmVhZHkoKTtcbiAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShyZXMpKSB7XG4gICAgICAvLyBDaGVjayBhbGwgdGhlIGVsZW1lbnRzIGFyZSBjdXJzb3JzXG4gICAgICBpZiAoISBfLmFsbChyZXMsIGlzQ3Vyc29yKSkge1xuICAgICAgICBzZWxmLmVycm9yKG5ldyBFcnJvcihcIlB1Ymxpc2ggZnVuY3Rpb24gcmV0dXJuZWQgYW4gYXJyYXkgb2Ygbm9uLUN1cnNvcnNcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBGaW5kIGR1cGxpY2F0ZSBjb2xsZWN0aW9uIG5hbWVzXG4gICAgICAvLyBYWFggd2Ugc2hvdWxkIHN1cHBvcnQgb3ZlcmxhcHBpbmcgY3Vyc29ycywgYnV0IHRoYXQgd291bGQgcmVxdWlyZSB0aGVcbiAgICAgIC8vIG1lcmdlIGJveCB0byBhbGxvdyBvdmVybGFwIHdpdGhpbiBhIHN1YnNjcmlwdGlvblxuICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lcyA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gcmVzW2ldLl9nZXRDb2xsZWN0aW9uTmFtZSgpO1xuICAgICAgICBpZiAoXy5oYXMoY29sbGVjdGlvbk5hbWVzLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICBzZWxmLmVycm9yKG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUHVibGlzaCBmdW5jdGlvbiByZXR1cm5lZCBtdWx0aXBsZSBjdXJzb3JzIGZvciBjb2xsZWN0aW9uIFwiICtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29sbGVjdGlvbk5hbWVzW2NvbGxlY3Rpb25OYW1lXSA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBfLmVhY2gocmVzLCBmdW5jdGlvbiAoY3VyKSB7XG4gICAgICAgICAgY3VyLl9wdWJsaXNoQ3Vyc29yKHNlbGYpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZi5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5yZWFkeSgpO1xuICAgIH0gZWxzZSBpZiAocmVzKSB7XG4gICAgICAvLyBUcnV0aHkgdmFsdWVzIG90aGVyIHRoYW4gY3Vyc29ycyBvciBhcnJheXMgYXJlIHByb2JhYmx5IGFcbiAgICAgIC8vIHVzZXIgbWlzdGFrZSAocG9zc2libGUgcmV0dXJuaW5nIGEgTW9uZ28gZG9jdW1lbnQgdmlhLCBzYXksXG4gICAgICAvLyBgY29sbC5maW5kT25lKClgKS5cbiAgICAgIHNlbGYuZXJyb3IobmV3IEVycm9yKFwiUHVibGlzaCBmdW5jdGlvbiBjYW4gb25seSByZXR1cm4gYSBDdXJzb3Igb3IgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJhbiBhcnJheSBvZiBDdXJzb3JzXCIpKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGhpcyBjYWxscyBhbGwgc3RvcCBjYWxsYmFja3MgYW5kIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gdXBkYXRpbmcgYW55XG4gIC8vIFNlc3Npb25Db2xsZWN0aW9uVmlld3MgZnVydGhlci4gSXQncyB1c2VkIHdoZW4gdGhlIHVzZXIgdW5zdWJzY3JpYmVzIG9yXG4gIC8vIGRpc2Nvbm5lY3RzLCBhcyB3ZWxsIGFzIGR1cmluZyBzZXRVc2VySWQgcmUtcnVucy4gSXQgZG9lcyAqTk9UKiBzZW5kXG4gIC8vIHJlbW92ZWQgbWVzc2FnZXMgZm9yIHRoZSBwdWJsaXNoZWQgb2JqZWN0czsgaWYgdGhhdCBpcyBuZWNlc3NhcnksIGNhbGxcbiAgLy8gX3JlbW92ZUFsbERvY3VtZW50cyBmaXJzdC5cbiAgX2RlYWN0aXZhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fZGVhY3RpdmF0ZWQpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi5fZGVhY3RpdmF0ZWQgPSB0cnVlO1xuICAgIHNlbGYuX2NhbGxTdG9wQ2FsbGJhY2tzKCk7XG4gICAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgICAgXCJsaXZlZGF0YVwiLCBcInN1YnNjcmlwdGlvbnNcIiwgLTEpO1xuICB9LFxuXG4gIF9jYWxsU3RvcENhbGxiYWNrczogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBUZWxsIGxpc3RlbmVycywgc28gdGhleSBjYW4gY2xlYW4gdXBcbiAgICB2YXIgY2FsbGJhY2tzID0gc2VsZi5fc3RvcENhbGxiYWNrcztcbiAgICBzZWxmLl9zdG9wQ2FsbGJhY2tzID0gW107XG4gICAgXy5lYWNoKGNhbGxiYWNrcywgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFNlbmQgcmVtb3ZlIG1lc3NhZ2VzIGZvciBldmVyeSBkb2N1bWVudC5cbiAgX3JlbW92ZUFsbERvY3VtZW50czogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9kb2N1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29sbGVjdGlvbkRvY3MsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIGNvbGxlY3Rpb25Eb2NzLmZvckVhY2goZnVuY3Rpb24gKHN0cklkKSB7XG4gICAgICAgICAgc2VsZi5yZW1vdmVkKGNvbGxlY3Rpb25OYW1lLCBzZWxmLl9pZEZpbHRlci5pZFBhcnNlKHN0cklkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIG5ldyBTdWJzY3JpcHRpb24gZm9yIHRoZSBzYW1lIHNlc3Npb24gd2l0aCB0aGUgc2FtZVxuICAvLyBpbml0aWFsIGNyZWF0aW9uIHBhcmFtZXRlcnMuIFRoaXMgaXNuJ3QgYSBjbG9uZTogaXQgZG9lc24ndCBoYXZlXG4gIC8vIHRoZSBzYW1lIF9kb2N1bWVudHMgY2FjaGUsIHN0b3BwZWQgc3RhdGUgb3IgY2FsbGJhY2tzOyBtYXkgaGF2ZSBhXG4gIC8vIGRpZmZlcmVudCBfc3Vic2NyaXB0aW9uSGFuZGxlLCBhbmQgZ2V0cyBpdHMgdXNlcklkIGZyb20gdGhlXG4gIC8vIHNlc3Npb24sIG5vdCBmcm9tIHRoaXMgb2JqZWN0LlxuICBfcmVjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oXG4gICAgICBzZWxmLl9zZXNzaW9uLCBzZWxmLl9oYW5kbGVyLCBzZWxmLl9zdWJzY3JpcHRpb25JZCwgc2VsZi5fcGFyYW1zLFxuICAgICAgc2VsZi5fbmFtZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiAgU3RvcHMgdGhpcyBjbGllbnQncyBzdWJzY3JpcHRpb24sIHRyaWdnZXJpbmcgYSBjYWxsIG9uIHRoZSBjbGllbnQgdG8gdGhlIGBvblN0b3BgIGNhbGxiYWNrIHBhc3NlZCB0byBbYE1ldGVvci5zdWJzY3JpYmVgXSgjbWV0ZW9yX3N1YnNjcmliZSksIGlmIGFueS4gSWYgYGVycm9yYCBpcyBub3QgYSBbYE1ldGVvci5FcnJvcmBdKCNtZXRlb3JfZXJyb3IpLCBpdCB3aWxsIGJlIFtzYW5pdGl6ZWRdKCNtZXRlb3JfZXJyb3IpLlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byBwYXNzIHRvIHRoZSBjbGllbnQuXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyT2YgU3Vic2NyaXB0aW9uXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLl9pc0RlYWN0aXZhdGVkKCkpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi5fc2Vzc2lvbi5fc3RvcFN1YnNjcmlwdGlvbihzZWxmLl9zdWJzY3JpcHRpb25JZCwgZXJyb3IpO1xuICB9LFxuXG4gIC8vIE5vdGUgdGhhdCB3aGlsZSBvdXIgRERQIGNsaWVudCB3aWxsIG5vdGljZSB0aGF0IHlvdSd2ZSBjYWxsZWQgc3RvcCgpIG9uIHRoZVxuICAvLyBzZXJ2ZXIgKGFuZCBjbGVhbiB1cCBpdHMgX3N1YnNjcmlwdGlvbnMgdGFibGUpIHdlIGRvbid0IGFjdHVhbGx5IHByb3ZpZGUgYVxuICAvLyBtZWNoYW5pc20gZm9yIGFuIGFwcCB0byBub3RpY2UgdGhpcyAodGhlIHN1YnNjcmliZSBvbkVycm9yIGNhbGxiYWNrIG9ubHlcbiAgLy8gdHJpZ2dlcnMgaWYgdGhlcmUgaXMgYW4gZXJyb3IpLlxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBDYWxsIGluc2lkZSB0aGUgcHVibGlzaCBmdW5jdGlvbi4gIFN0b3BzIHRoaXMgY2xpZW50J3Mgc3Vic2NyaXB0aW9uIGFuZCBpbnZva2VzIHRoZSBjbGllbnQncyBgb25TdG9wYCBjYWxsYmFjayB3aXRoIG5vIGVycm9yLlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyT2YgU3Vic2NyaXB0aW9uXG4gICAqL1xuICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLl9pc0RlYWN0aXZhdGVkKCkpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi5fc2Vzc2lvbi5fc3RvcFN1YnNjcmlwdGlvbihzZWxmLl9zdWJzY3JpcHRpb25JZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiAgUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBtZW1iZXJPZiBTdWJzY3JpcHRpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICBvblN0b3A6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBjYWxsYmFjayA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoY2FsbGJhY2ssICdvblN0b3AgY2FsbGJhY2snLCBzZWxmKTtcbiAgICBpZiAoc2VsZi5faXNEZWFjdGl2YXRlZCgpKVxuICAgICAgY2FsbGJhY2soKTtcbiAgICBlbHNlXG4gICAgICBzZWxmLl9zdG9wQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9LFxuXG4gIC8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBzdWIgaGFzIGJlZW4gZGVhY3RpdmF0ZWQsICpPUiogaWYgdGhlIHNlc3Npb24gd2FzXG4gIC8vIGRlc3Ryb3llZCBidXQgdGhlIGRlZmVycmVkIGNhbGwgdG8gX2RlYWN0aXZhdGVBbGxTdWJzY3JpcHRpb25zIGhhc24ndFxuICAvLyBoYXBwZW5lZCB5ZXQuXG4gIF9pc0RlYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzZWxmLl9kZWFjdGl2YXRlZCB8fCBzZWxmLl9zZXNzaW9uLmluUXVldWUgPT09IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiAgSW5mb3JtcyB0aGUgc3Vic2NyaWJlciB0aGF0IGEgZG9jdW1lbnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHJlY29yZCBzZXQuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG1lbWJlck9mIFN1YnNjcmlwdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb24gVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgbmV3IGRvY3VtZW50LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIG5ldyBkb2N1bWVudCdzIElELlxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRzIFRoZSBmaWVsZHMgaW4gdGhlIG5ldyBkb2N1bWVudC4gIElmIGBfaWRgIGlzIHByZXNlbnQgaXQgaXMgaWdub3JlZC5cbiAgICovXG4gIGFkZGVkIChjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcykge1xuICAgIGlmICh0aGlzLl9pc0RlYWN0aXZhdGVkKCkpXG4gICAgICByZXR1cm47XG4gICAgaWQgPSB0aGlzLl9pZEZpbHRlci5pZFN0cmluZ2lmeShpZCk7XG5cbiAgICBpZiAodGhpcy5fc2Vzc2lvbi5zZXJ2ZXIuZ2V0UHVibGljYXRpb25TdHJhdGVneShjb2xsZWN0aW9uTmFtZSkuZG9BY2NvdW50aW5nRm9yQ29sbGVjdGlvbikge1xuICAgICAgbGV0IGlkcyA9IHRoaXMuX2RvY3VtZW50cy5nZXQoY29sbGVjdGlvbk5hbWUpO1xuICAgICAgaWYgKGlkcyA9PSBudWxsKSB7XG4gICAgICAgIGlkcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRzLnNldChjb2xsZWN0aW9uTmFtZSwgaWRzKTtcbiAgICAgIH1cbiAgICAgIGlkcy5hZGQoaWQpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nlc3Npb24uYWRkZWQodGhpcy5fc3Vic2NyaXB0aW9uSGFuZGxlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiAgSW5mb3JtcyB0aGUgc3Vic2NyaWJlciB0aGF0IGEgZG9jdW1lbnQgaW4gdGhlIHJlY29yZCBzZXQgaGFzIGJlZW4gbW9kaWZpZWQuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG1lbWJlck9mIFN1YnNjcmlwdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb24gVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgY2hhbmdlZCBkb2N1bWVudC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBjaGFuZ2VkIGRvY3VtZW50J3MgSUQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHMgVGhlIGZpZWxkcyBpbiB0aGUgZG9jdW1lbnQgdGhhdCBoYXZlIGNoYW5nZWQsIHRvZ2V0aGVyIHdpdGggdGhlaXIgbmV3IHZhbHVlcy4gIElmIGEgZmllbGQgaXMgbm90IHByZXNlbnQgaW4gYGZpZWxkc2AgaXQgd2FzIGxlZnQgdW5jaGFuZ2VkOyBpZiBpdCBpcyBwcmVzZW50IGluIGBmaWVsZHNgIGFuZCBoYXMgYSB2YWx1ZSBvZiBgdW5kZWZpbmVkYCBpdCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudC4gIElmIGBfaWRgIGlzIHByZXNlbnQgaXQgaXMgaWdub3JlZC5cbiAgICovXG4gIGNoYW5nZWQgKGNvbGxlY3Rpb25OYW1lLCBpZCwgZmllbGRzKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVhY3RpdmF0ZWQoKSlcbiAgICAgIHJldHVybjtcbiAgICBpZCA9IHRoaXMuX2lkRmlsdGVyLmlkU3RyaW5naWZ5KGlkKTtcbiAgICB0aGlzLl9zZXNzaW9uLmNoYW5nZWQodGhpcy5fc3Vic2NyaXB0aW9uSGFuZGxlLCBjb2xsZWN0aW9uTmFtZSwgaWQsIGZpZWxkcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIHRoZSBwdWJsaXNoIGZ1bmN0aW9uLiAgSW5mb3JtcyB0aGUgc3Vic2NyaWJlciB0aGF0IGEgZG9jdW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSByZWNvcmQgc2V0LlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBtZW1iZXJPZiBTdWJzY3JpcHRpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHRoYXQgdGhlIGRvY3VtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgZG9jdW1lbnQgdGhhdCBoYXMgYmVlbiByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlZCAoY29sbGVjdGlvbk5hbWUsIGlkKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVhY3RpdmF0ZWQoKSlcbiAgICAgIHJldHVybjtcbiAgICBpZCA9IHRoaXMuX2lkRmlsdGVyLmlkU3RyaW5naWZ5KGlkKTtcblxuICAgIGlmICh0aGlzLl9zZXNzaW9uLnNlcnZlci5nZXRQdWJsaWNhdGlvblN0cmF0ZWd5KGNvbGxlY3Rpb25OYW1lKS5kb0FjY291bnRpbmdGb3JDb2xsZWN0aW9uKSB7XG4gICAgICAvLyBXZSBkb24ndCBib3RoZXIgdG8gZGVsZXRlIHNldHMgb2YgdGhpbmdzIGluIGEgY29sbGVjdGlvbiBpZiB0aGVcbiAgICAgIC8vIGNvbGxlY3Rpb24gaXMgZW1wdHkuICBJdCBjb3VsZCBicmVhayBfcmVtb3ZlQWxsRG9jdW1lbnRzLlxuICAgICAgdGhpcy5fZG9jdW1lbnRzLmdldChjb2xsZWN0aW9uTmFtZSkuZGVsZXRlKGlkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXNzaW9uLnJlbW92ZWQodGhpcy5fc3Vic2NyaXB0aW9uSGFuZGxlLCBjb2xsZWN0aW9uTmFtZSwgaWQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBDYWxsIGluc2lkZSB0aGUgcHVibGlzaCBmdW5jdGlvbi4gIEluZm9ybXMgdGhlIHN1YnNjcmliZXIgdGhhdCBhbiBpbml0aWFsLCBjb21wbGV0ZSBzbmFwc2hvdCBvZiB0aGUgcmVjb3JkIHNldCBoYXMgYmVlbiBzZW50LiAgVGhpcyB3aWxsIHRyaWdnZXIgYSBjYWxsIG9uIHRoZSBjbGllbnQgdG8gdGhlIGBvblJlYWR5YCBjYWxsYmFjayBwYXNzZWQgdG8gIFtgTWV0ZW9yLnN1YnNjcmliZWBdKCNtZXRlb3Jfc3Vic2NyaWJlKSwgaWYgYW55LlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBtZW1iZXJPZiBTdWJzY3JpcHRpb25cbiAgICogQGluc3RhbmNlXG4gICAqL1xuICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5faXNEZWFjdGl2YXRlZCgpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghc2VsZi5fc3Vic2NyaXB0aW9uSWQpXG4gICAgICByZXR1cm47ICAvLyBVbm5lY2Vzc2FyeSBidXQgaWdub3JlZCBmb3IgdW5pdmVyc2FsIHN1YlxuICAgIGlmICghc2VsZi5fcmVhZHkpIHtcbiAgICAgIHNlbGYuX3Nlc3Npb24uc2VuZFJlYWR5KFtzZWxmLl9zdWJzY3JpcHRpb25JZF0pO1xuICAgICAgc2VsZi5fcmVhZHkgPSB0cnVlO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTZXJ2ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuU2VydmVyID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLy8gVGhlIGRlZmF1bHQgaGVhcnRiZWF0IGludGVydmFsIGlzIDMwIHNlY29uZHMgb24gdGhlIHNlcnZlciBhbmQgMzVcbiAgLy8gc2Vjb25kcyBvbiB0aGUgY2xpZW50LiAgU2luY2UgdGhlIGNsaWVudCBkb2Vzbid0IG5lZWQgdG8gc2VuZCBhXG4gIC8vIHBpbmcgYXMgbG9uZyBhcyBpdCBpcyByZWNlaXZpbmcgcGluZ3MsIHRoaXMgbWVhbnMgdGhhdCBwaW5nc1xuICAvLyBub3JtYWxseSBnbyBmcm9tIHRoZSBzZXJ2ZXIgdG8gdGhlIGNsaWVudC5cbiAgLy9cbiAgLy8gTm90ZTogVHJvcG9zcGhlcmUgZGVwZW5kcyBvbiB0aGUgYWJpbGl0eSB0byBtdXRhdGVcbiAgLy8gTWV0ZW9yLnNlcnZlci5vcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQhIFRoaXMgaXMgYSBoYWNrLCBidXQgaXQncyBsaWZlLlxuICBzZWxmLm9wdGlvbnMgPSB7XG4gICAgaGVhcnRiZWF0SW50ZXJ2YWw6IDE1MDAwLFxuICAgIGhlYXJ0YmVhdFRpbWVvdXQ6IDE1MDAwLFxuICAgIC8vIEZvciB0ZXN0aW5nLCBhbGxvdyByZXNwb25kaW5nIHRvIHBpbmdzIHRvIGJlIGRpc2FibGVkLlxuICAgIHJlc3BvbmRUb1BpbmdzOiB0cnVlLFxuICAgIGRlZmF1bHRQdWJsaWNhdGlvblN0cmF0ZWd5OiBwdWJsaWNhdGlvblN0cmF0ZWdpZXMuU0VSVkVSX01FUkdFLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgLy8gTWFwIG9mIGNhbGxiYWNrcyB0byBjYWxsIHdoZW4gYSBuZXcgY29ubmVjdGlvbiBjb21lcyBpbiB0byB0aGVcbiAgLy8gc2VydmVyIGFuZCBjb21wbGV0ZXMgRERQIHZlcnNpb24gbmVnb3RpYXRpb24uIFVzZSBhbiBvYmplY3QgaW5zdGVhZFxuICAvLyBvZiBhbiBhcnJheSBzbyB3ZSBjYW4gc2FmZWx5IHJlbW92ZSBvbmUgZnJvbSB0aGUgbGlzdCB3aGlsZVxuICAvLyBpdGVyYXRpbmcgb3ZlciBpdC5cbiAgc2VsZi5vbkNvbm5lY3Rpb25Ib29rID0gbmV3IEhvb2soe1xuICAgIGRlYnVnUHJpbnRFeGNlcHRpb25zOiBcIm9uQ29ubmVjdGlvbiBjYWxsYmFja1wiXG4gIH0pO1xuXG4gIC8vIE1hcCBvZiBjYWxsYmFja3MgdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgY29tZXMgaW4uXG4gIHNlbGYub25NZXNzYWdlSG9vayA9IG5ldyBIb29rKHtcbiAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uczogXCJvbk1lc3NhZ2UgY2FsbGJhY2tcIlxuICB9KTtcblxuICBzZWxmLnB1Ymxpc2hfaGFuZGxlcnMgPSB7fTtcbiAgc2VsZi51bml2ZXJzYWxfcHVibGlzaF9oYW5kbGVycyA9IFtdO1xuXG4gIHNlbGYubWV0aG9kX2hhbmRsZXJzID0ge307XG5cbiAgc2VsZi5fcHVibGljYXRpb25TdHJhdGVnaWVzID0ge307XG5cbiAgc2VsZi5zZXNzaW9ucyA9IG5ldyBNYXAoKTsgLy8gbWFwIGZyb20gaWQgdG8gc2Vzc2lvblxuXG4gIHNlbGYuc3RyZWFtX3NlcnZlciA9IG5ldyBTdHJlYW1TZXJ2ZXI7XG5cbiAgc2VsZi5zdHJlYW1fc2VydmVyLnJlZ2lzdGVyKGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAvLyBzb2NrZXQgaW1wbGVtZW50cyB0aGUgU29ja0pTQ29ubmVjdGlvbiBpbnRlcmZhY2VcbiAgICBzb2NrZXQuX21ldGVvclNlc3Npb24gPSBudWxsO1xuXG4gICAgdmFyIHNlbmRFcnJvciA9IGZ1bmN0aW9uIChyZWFzb24sIG9mZmVuZGluZ01lc3NhZ2UpIHtcbiAgICAgIHZhciBtc2cgPSB7bXNnOiAnZXJyb3InLCByZWFzb246IHJlYXNvbn07XG4gICAgICBpZiAob2ZmZW5kaW5nTWVzc2FnZSlcbiAgICAgICAgbXNnLm9mZmVuZGluZ01lc3NhZ2UgPSBvZmZlbmRpbmdNZXNzYWdlO1xuICAgICAgc29ja2V0LnNlbmQoRERQQ29tbW9uLnN0cmluZ2lmeUREUChtc2cpKTtcbiAgICB9O1xuXG4gICAgc29ja2V0Lm9uKCdkYXRhJywgZnVuY3Rpb24gKHJhd19tc2cpIHtcbiAgICAgIGlmIChNZXRlb3IuX3ByaW50UmVjZWl2ZWRERFApIHtcbiAgICAgICAgTWV0ZW9yLl9kZWJ1ZyhcIlJlY2VpdmVkIEREUFwiLCByYXdfbXNnKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIG1zZyA9IEREUENvbW1vbi5wYXJzZUREUChyYXdfbXNnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgc2VuZEVycm9yKCdQYXJzZSBlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnID09PSBudWxsIHx8ICFtc2cubXNnKSB7XG4gICAgICAgICAgc2VuZEVycm9yKCdCYWQgcmVxdWVzdCcsIG1zZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1zZy5tc2cgPT09ICdjb25uZWN0Jykge1xuICAgICAgICAgIGlmIChzb2NrZXQuX21ldGVvclNlc3Npb24pIHtcbiAgICAgICAgICAgIHNlbmRFcnJvcihcIkFscmVhZHkgY29ubmVjdGVkXCIsIG1zZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIEZpYmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuX2hhbmRsZUNvbm5lY3Qoc29ja2V0LCBtc2cpO1xuICAgICAgICAgIH0pLnJ1bigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc29ja2V0Ll9tZXRlb3JTZXNzaW9uKSB7XG4gICAgICAgICAgc2VuZEVycm9yKCdNdXN0IGNvbm5lY3QgZmlyc3QnLCBtc2cpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzb2NrZXQuX21ldGVvclNlc3Npb24ucHJvY2Vzc01lc3NhZ2UobXNnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gWFhYIHByaW50IHN0YWNrIG5pY2VseVxuICAgICAgICBNZXRlb3IuX2RlYnVnKFwiSW50ZXJuYWwgZXhjZXB0aW9uIHdoaWxlIHByb2Nlc3NpbmcgbWVzc2FnZVwiLCBtc2csIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzb2NrZXQuX21ldGVvclNlc3Npb24pIHtcbiAgICAgICAgRmliZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNvY2tldC5fbWV0ZW9yU2Vzc2lvbi5jbG9zZSgpO1xuICAgICAgICB9KS5ydW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5PYmplY3QuYXNzaWduKFNlcnZlci5wcm90b3R5cGUsIHtcblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiBhIG5ldyBERFAgY29ubmVjdGlvbiBpcyBtYWRlIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBERFAgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC5cbiAgICogQG1lbWJlck9mIE1ldGVvclxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gICAqL1xuICBvbkNvbm5lY3Rpb246IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc2VsZi5vbkNvbm5lY3Rpb25Ib29rLnJlZ2lzdGVyKGZuKTtcbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgU2V0IHB1YmxpY2F0aW9uIHN0cmF0ZWd5IGZvciB0aGUgZ2l2ZW4gY29sbGVjdGlvbi4gUHVibGljYXRpb25zIHN0cmF0ZWdpZXMgYXJlIGF2YWlsYWJsZSBmcm9tIGBERFBTZXJ2ZXIucHVibGljYXRpb25TdHJhdGVnaWVzYC4gWW91IGNhbGwgdGhpcyBtZXRob2QgZnJvbSBgTWV0ZW9yLnNlcnZlcmAsIGxpa2UgYE1ldGVvci5zZXJ2ZXIuc2V0UHVibGljYXRpb25TdHJhdGVneSgpYFxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBhbGlhcyBzZXRQdWJsaWNhdGlvblN0cmF0ZWd5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uTmFtZSB7U3RyaW5nfVxuICAgKiBAcGFyYW0gc3RyYXRlZ3kge3t1c2VDb2xsZWN0aW9uVmlldzogYm9vbGVhbiwgZG9BY2NvdW50aW5nRm9yQ29sbGVjdGlvbjogYm9vbGVhbn19XG4gICAqIEBtZW1iZXJPZiBNZXRlb3Iuc2VydmVyXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAgICovXG4gIHNldFB1YmxpY2F0aW9uU3RyYXRlZ3koY29sbGVjdGlvbk5hbWUsIHN0cmF0ZWd5KSB7XG4gICAgaWYgKCFPYmplY3QudmFsdWVzKHB1YmxpY2F0aW9uU3RyYXRlZ2llcykuaW5jbHVkZXMoc3RyYXRlZ3kpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWVyZ2Ugc3RyYXRlZ3k6ICR7c3RyYXRlZ3l9IFxuICAgICAgICBmb3IgY29sbGVjdGlvbiAke2NvbGxlY3Rpb25OYW1lfWApO1xuICAgIH1cbiAgICB0aGlzLl9wdWJsaWNhdGlvblN0cmF0ZWdpZXNbY29sbGVjdGlvbk5hbWVdID0gc3RyYXRlZ3k7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEdldHMgdGhlIHB1YmxpY2F0aW9uIHN0cmF0ZWd5IGZvciB0aGUgcmVxdWVzdGVkIGNvbGxlY3Rpb24uIFlvdSBjYWxsIHRoaXMgbWV0aG9kIGZyb20gYE1ldGVvci5zZXJ2ZXJgLCBsaWtlIGBNZXRlb3Iuc2VydmVyLmdldFB1YmxpY2F0aW9uU3RyYXRlZ3koKWBcbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAYWxpYXMgZ2V0UHVibGljYXRpb25TdHJhdGVneVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUge1N0cmluZ31cbiAgICogQG1lbWJlck9mIE1ldGVvci5zZXJ2ZXJcbiAgICogQGltcG9ydEZyb21QYWNrYWdlIG1ldGVvclxuICAgKiBAcmV0dXJuIHt7dXNlQ29sbGVjdGlvblZpZXc6IGJvb2xlYW4sIGRvQWNjb3VudGluZ0ZvckNvbGxlY3Rpb246IGJvb2xlYW59fVxuICAgKi9cbiAgZ2V0UHVibGljYXRpb25TdHJhdGVneShjb2xsZWN0aW9uTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNhdGlvblN0cmF0ZWdpZXNbY29sbGVjdGlvbk5hbWVdXG4gICAgICB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdFB1YmxpY2F0aW9uU3RyYXRlZ3k7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gYSBuZXcgRERQIG1lc3NhZ2UgaXMgcmVjZWl2ZWQuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBERFAgbWVzc2FnZSBpcyByZWNlaXZlZC5cbiAgICogQG1lbWJlck9mIE1ldGVvclxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gICAqL1xuICBvbk1lc3NhZ2U6IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gc2VsZi5vbk1lc3NhZ2VIb29rLnJlZ2lzdGVyKGZuKTtcbiAgfSxcblxuICBfaGFuZGxlQ29ubmVjdDogZnVuY3Rpb24gKHNvY2tldCwgbXNnKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhlIGNvbm5lY3QgbWVzc2FnZSBtdXN0IHNwZWNpZnkgYSB2ZXJzaW9uIGFuZCBhbiBhcnJheSBvZiBzdXBwb3J0ZWRcbiAgICAvLyB2ZXJzaW9ucywgYW5kIGl0IG11c3QgY2xhaW0gdG8gc3VwcG9ydCB3aGF0IGl0IGlzIHByb3Bvc2luZy5cbiAgICBpZiAoISh0eXBlb2YgKG1zZy52ZXJzaW9uKSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICBfLmlzQXJyYXkobXNnLnN1cHBvcnQpICYmXG4gICAgICAgICAgXy5hbGwobXNnLnN1cHBvcnQsIF8uaXNTdHJpbmcpICYmXG4gICAgICAgICAgXy5jb250YWlucyhtc2cuc3VwcG9ydCwgbXNnLnZlcnNpb24pKSkge1xuICAgICAgc29ja2V0LnNlbmQoRERQQ29tbW9uLnN0cmluZ2lmeUREUCh7bXNnOiAnZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogRERQQ29tbW9uLlNVUFBPUlRFRF9ERFBfVkVSU0lPTlNbMF19KSk7XG4gICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCBoYW5kbGUgc2Vzc2lvbiByZXN1bXB0aW9uOiBzb21ldGhpbmcgbGlrZTpcbiAgICAvLyAgc29ja2V0Ll9tZXRlb3JTZXNzaW9uID0gc2VsZi5zZXNzaW9uc1ttc2cuc2Vzc2lvbl1cbiAgICB2YXIgdmVyc2lvbiA9IGNhbGN1bGF0ZVZlcnNpb24obXNnLnN1cHBvcnQsIEREUENvbW1vbi5TVVBQT1JURURfRERQX1ZFUlNJT05TKTtcblxuICAgIGlmIChtc2cudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgLy8gVGhlIGJlc3QgdmVyc2lvbiB0byB1c2UgKGFjY29yZGluZyB0byB0aGUgY2xpZW50J3Mgc3RhdGVkIHByZWZlcmVuY2VzKVxuICAgICAgLy8gaXMgbm90IHRoZSBvbmUgdGhlIGNsaWVudCBpcyB0cnlpbmcgdG8gdXNlLiBJbmZvcm0gdGhlbSBhYm91dCB0aGUgYmVzdFxuICAgICAgLy8gdmVyc2lvbiB0byB1c2UuXG4gICAgICBzb2NrZXQuc2VuZChERFBDb21tb24uc3RyaW5naWZ5RERQKHttc2c6ICdmYWlsZWQnLCB2ZXJzaW9uOiB2ZXJzaW9ufSkpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gWWF5LCB2ZXJzaW9uIG1hdGNoZXMhIENyZWF0ZSBhIG5ldyBzZXNzaW9uLlxuICAgIC8vIE5vdGU6IFRyb3Bvc3BoZXJlIGRlcGVuZHMgb24gdGhlIGFiaWxpdHkgdG8gbXV0YXRlXG4gICAgLy8gTWV0ZW9yLnNlcnZlci5vcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQhIFRoaXMgaXMgYSBoYWNrLCBidXQgaXQncyBsaWZlLlxuICAgIHNvY2tldC5fbWV0ZW9yU2Vzc2lvbiA9IG5ldyBTZXNzaW9uKHNlbGYsIHZlcnNpb24sIHNvY2tldCwgc2VsZi5vcHRpb25zKTtcbiAgICBzZWxmLnNlc3Npb25zLnNldChzb2NrZXQuX21ldGVvclNlc3Npb24uaWQsIHNvY2tldC5fbWV0ZW9yU2Vzc2lvbik7XG4gICAgc2VsZi5vbkNvbm5lY3Rpb25Ib29rLmVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBpZiAoc29ja2V0Ll9tZXRlb3JTZXNzaW9uKVxuICAgICAgICBjYWxsYmFjayhzb2NrZXQuX21ldGVvclNlc3Npb24uY29ubmVjdGlvbkhhbmRsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgcHVibGlzaCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSB7U3RyaW5nfSBpZGVudGlmaWVyIGZvciBxdWVyeVxuICAgKiBAcGFyYW0gaGFuZGxlciB7RnVuY3Rpb259IHB1Ymxpc2ggaGFuZGxlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fVxuICAgKlxuICAgKiBTZXJ2ZXIgd2lsbCBjYWxsIGhhbmRsZXIgZnVuY3Rpb24gb24gZWFjaCBuZXcgc3Vic2NyaXB0aW9uLFxuICAgKiBlaXRoZXIgd2hlbiByZWNlaXZpbmcgRERQIHN1YiBtZXNzYWdlIGZvciBhIG5hbWVkIHN1YnNjcmlwdGlvbiwgb3Igb25cbiAgICogRERQIGNvbm5lY3QgZm9yIGEgdW5pdmVyc2FsIHN1YnNjcmlwdGlvbi5cbiAgICpcbiAgICogSWYgbmFtZSBpcyBudWxsLCB0aGlzIHdpbGwgYmUgYSBzdWJzY3JpcHRpb24gdGhhdCBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGVzdGFibGlzaGVkIGFuZCBwZXJtYW5lbnRseSBvbiBmb3IgYWxsIGNvbm5lY3RlZFxuICAgKiBjbGllbnQsIGluc3RlYWQgb2YgYSBzdWJzY3JpcHRpb24gdGhhdCBjYW4gYmUgdHVybmVkIG9uIGFuZCBvZmZcbiAgICogd2l0aCBzdWJzY3JpYmUoKS5cbiAgICpcbiAgICogb3B0aW9ucyB0byBjb250YWluOlxuICAgKiAgLSAobW9zdGx5IGludGVybmFsKSBpc19hdXRvOiB0cnVlIGlmIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5XG4gICAqICAgIGZyb20gYW4gYXV0b3B1Ymxpc2ggaG9vay4gdGhpcyBpcyBmb3IgY29zbWV0aWMgcHVycG9zZXMgb25seVxuICAgKiAgICAoaXQgbGV0cyB1cyBkZXRlcm1pbmUgd2hldGhlciB0byBwcmludCBhIHdhcm5pbmcgc3VnZ2VzdGluZ1xuICAgKiAgICB0aGF0IHlvdSB0dXJuIG9mZiBhdXRvcHVibGlzaCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBQdWJsaXNoIGEgcmVjb3JkIHNldC5cbiAgICogQG1lbWJlck9mIE1ldGVvclxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBuYW1lIElmIFN0cmluZywgbmFtZSBvZiB0aGUgcmVjb3JkIHNldC4gIElmIE9iamVjdCwgcHVibGljYXRpb25zIERpY3Rpb25hcnkgb2YgcHVibGlzaCBmdW5jdGlvbnMgYnkgbmFtZS4gIElmIGBudWxsYCwgdGhlIHNldCBoYXMgbm8gbmFtZSwgYW5kIHRoZSByZWNvcmQgc2V0IGlzIGF1dG9tYXRpY2FsbHkgc2VudCB0byBhbGwgY29ubmVjdGVkIGNsaWVudHMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgRnVuY3Rpb24gY2FsbGVkIG9uIHRoZSBzZXJ2ZXIgZWFjaCB0aW1lIGEgY2xpZW50IHN1YnNjcmliZXMuICBJbnNpZGUgdGhlIGZ1bmN0aW9uLCBgdGhpc2AgaXMgdGhlIHB1Ymxpc2ggaGFuZGxlciBvYmplY3QsIGRlc2NyaWJlZCBiZWxvdy4gIElmIHRoZSBjbGllbnQgcGFzc2VkIGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYCwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cy5cbiAgICovXG4gIHB1Ymxpc2g6IGZ1bmN0aW9uIChuYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCEgXy5pc09iamVjdChuYW1lKSkge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmIChuYW1lICYmIG5hbWUgaW4gc2VsZi5wdWJsaXNoX2hhbmRsZXJzKSB7XG4gICAgICAgIE1ldGVvci5fZGVidWcoXCJJZ25vcmluZyBkdXBsaWNhdGUgcHVibGlzaCBuYW1lZCAnXCIgKyBuYW1lICsgXCInXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChQYWNrYWdlLmF1dG9wdWJsaXNoICYmICFvcHRpb25zLmlzX2F1dG8pIHtcbiAgICAgICAgLy8gVGhleSBoYXZlIGF1dG9wdWJsaXNoIG9uLCB5ZXQgdGhleSdyZSB0cnlpbmcgdG8gbWFudWFsbHlcbiAgICAgICAgLy8gcGljayBzdHVmZiB0byBwdWJsaXNoLiBUaGV5IHByb2JhYmx5IHNob3VsZCB0dXJuIG9mZlxuICAgICAgICAvLyBhdXRvcHVibGlzaC4gKFRoaXMgY2hlY2sgaXNuJ3QgcGVyZmVjdCAtLSBpZiB5b3UgY3JlYXRlIGFcbiAgICAgICAgLy8gcHVibGlzaCBiZWZvcmUgeW91IHR1cm4gb24gYXV0b3B1Ymxpc2gsIGl0IHdvbid0IGNhdGNoXG4gICAgICAgIC8vIGl0LCBidXQgdGhpcyB3aWxsIGRlZmluaXRlbHkgaGFuZGxlIHRoZSBzaW1wbGUgY2FzZSB3aGVyZVxuICAgICAgICAvLyB5b3UndmUgYWRkZWQgdGhlIGF1dG9wdWJsaXNoIHBhY2thZ2UgdG8geW91ciBhcHAsIGFuZCBhcmVcbiAgICAgICAgLy8gY2FsbGluZyBwdWJsaXNoIGZyb20geW91ciBhcHAgY29kZSkuXG4gICAgICAgIGlmICghc2VsZi53YXJuZWRfYWJvdXRfYXV0b3B1Ymxpc2gpIHtcbiAgICAgICAgICBzZWxmLndhcm5lZF9hYm91dF9hdXRvcHVibGlzaCA9IHRydWU7XG4gICAgICAgICAgTWV0ZW9yLl9kZWJ1ZyhcbiAgICBcIioqIFlvdSd2ZSBzZXQgdXAgc29tZSBkYXRhIHN1YnNjcmlwdGlvbnMgd2l0aCBNZXRlb3IucHVibGlzaCgpLCBidXRcXG5cIiArXG4gICAgXCIqKiB5b3Ugc3RpbGwgaGF2ZSBhdXRvcHVibGlzaCB0dXJuZWQgb24uIEJlY2F1c2UgYXV0b3B1Ymxpc2ggaXMgc3RpbGxcXG5cIiArXG4gICAgXCIqKiBvbiwgeW91ciBNZXRlb3IucHVibGlzaCgpIGNhbGxzIHdvbid0IGhhdmUgbXVjaCBlZmZlY3QuIEFsbCBkYXRhXFxuXCIgK1xuICAgIFwiKiogd2lsbCBzdGlsbCBiZSBzZW50IHRvIGFsbCBjbGllbnRzLlxcblwiICtcbiAgICBcIioqXFxuXCIgK1xuICAgIFwiKiogVHVybiBvZmYgYXV0b3B1Ymxpc2ggYnkgcmVtb3ZpbmcgdGhlIGF1dG9wdWJsaXNoIHBhY2thZ2U6XFxuXCIgK1xuICAgIFwiKipcXG5cIiArXG4gICAgXCIqKiAgICQgbWV0ZW9yIHJlbW92ZSBhdXRvcHVibGlzaFxcblwiICtcbiAgICBcIioqXFxuXCIgK1xuICAgIFwiKiogLi4gYW5kIG1ha2Ugc3VyZSB5b3UgaGF2ZSBNZXRlb3IucHVibGlzaCgpIGFuZCBNZXRlb3Iuc3Vic2NyaWJlKCkgY2FsbHNcXG5cIiArXG4gICAgXCIqKiBmb3IgZWFjaCBjb2xsZWN0aW9uIHRoYXQgeW91IHdhbnQgY2xpZW50cyB0byBzZWUuXFxuXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lKVxuICAgICAgICBzZWxmLnB1Ymxpc2hfaGFuZGxlcnNbbmFtZV0gPSBoYW5kbGVyO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHNlbGYudW5pdmVyc2FsX3B1Ymxpc2hfaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgLy8gU3BpbiB1cCB0aGUgbmV3IHB1Ymxpc2hlciBvbiBhbnkgZXhpc3Rpbmcgc2Vzc2lvbiB0b28uIFJ1biBlYWNoXG4gICAgICAgIC8vIHNlc3Npb24ncyBzdWJzY3JpcHRpb24gaW4gYSBuZXcgRmliZXIsIHNvIHRoYXQgdGhlcmUncyBubyBjaGFuZ2UgZm9yXG4gICAgICAgIC8vIHNlbGYuc2Vzc2lvbnMgdG8gY2hhbmdlIHdoaWxlIHdlJ3JlIHJ1bm5pbmcgdGhpcyBsb29wLlxuICAgICAgICBzZWxmLnNlc3Npb25zLmZvckVhY2goZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICBpZiAoIXNlc3Npb24uX2RvbnRTdGFydE5ld1VuaXZlcnNhbFN1YnMpIHtcbiAgICAgICAgICAgIEZpYmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZXNzaW9uLl9zdGFydFN1YnNjcmlwdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pLnJ1bigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBfLmVhY2gobmFtZSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICBzZWxmLnB1Ymxpc2goa2V5LCB2YWx1ZSwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIF9yZW1vdmVTZXNzaW9uOiBmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLnNlc3Npb25zLmRlbGV0ZShzZXNzaW9uLmlkKTtcbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgRGVmaW5lcyBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgaW52b2tlZCBvdmVyIHRoZSBuZXR3b3JrIGJ5IGNsaWVudHMuXG4gICAqIEBsb2N1cyBBbnl3aGVyZVxuICAgKiBAcGFyYW0ge09iamVjdH0gbWV0aG9kcyBEaWN0aW9uYXJ5IHdob3NlIGtleXMgYXJlIG1ldGhvZCBuYW1lcyBhbmQgdmFsdWVzIGFyZSBmdW5jdGlvbnMuXG4gICAqIEBtZW1iZXJPZiBNZXRlb3JcbiAgICogQGltcG9ydEZyb21QYWNrYWdlIG1ldGVvclxuICAgKi9cbiAgbWV0aG9kczogZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXy5lYWNoKG1ldGhvZHMsIGZ1bmN0aW9uIChmdW5jLCBuYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCAnXCIgKyBuYW1lICsgXCInIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgIGlmIChzZWxmLm1ldGhvZF9oYW5kbGVyc1tuYW1lXSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBtZXRob2QgbmFtZWQgJ1wiICsgbmFtZSArIFwiJyBpcyBhbHJlYWR5IGRlZmluZWRcIik7XG4gICAgICBzZWxmLm1ldGhvZF9oYW5kbGVyc1tuYW1lXSA9IGZ1bmM7XG4gICAgfSk7XG4gIH0sXG5cbiAgY2FsbDogZnVuY3Rpb24gKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggJiYgdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAvLyBJZiBpdCdzIGEgZnVuY3Rpb24sIHRoZSBsYXN0IGFyZ3VtZW50IGlzIHRoZSByZXN1bHQgY2FsbGJhY2ssIG5vdFxuICAgICAgLy8gYSBwYXJhbWV0ZXIgdG8gdGhlIHJlbW90ZSBtZXRob2QuXG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFwcGx5KG5hbWUsIGFyZ3MsIGNhbGxiYWNrKTtcbiAgfSxcblxuICAvLyBBIHZlcnNpb24gb2YgdGhlIGNhbGwgbWV0aG9kIHRoYXQgYWx3YXlzIHJldHVybnMgYSBQcm9taXNlLlxuICBjYWxsQXN5bmM6IGZ1bmN0aW9uIChuYW1lLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlBc3luYyhuYW1lLCBhcmdzKTtcbiAgfSxcblxuICBhcHBseTogZnVuY3Rpb24gKG5hbWUsIGFyZ3MsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgLy8gV2Ugd2VyZSBwYXNzZWQgMyBhcmd1bWVudHMuIFRoZXkgbWF5IGJlIGVpdGhlciAobmFtZSwgYXJncywgb3B0aW9ucylcbiAgICAvLyBvciAobmFtZSwgYXJncywgY2FsbGJhY2spXG4gICAgaWYgKCEgY2FsbGJhY2sgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuYXBwbHlBc3luYyhuYW1lLCBhcmdzLCBvcHRpb25zKTtcblxuICAgIC8vIFJldHVybiB0aGUgcmVzdWx0IGluIHdoaWNoZXZlciB3YXkgdGhlIGNhbGxlciBhc2tlZCBmb3IgaXQuIE5vdGUgdGhhdCB3ZVxuICAgIC8vIGRvIE5PVCBibG9jayBvbiB0aGUgd3JpdGUgZmVuY2UgaW4gYW4gYW5hbG9nb3VzIHdheSB0byBob3cgdGhlIGNsaWVudFxuICAgIC8vIGJsb2NrcyBvbiB0aGUgcmVsZXZhbnQgZGF0YSBiZWluZyB2aXNpYmxlLCBzbyB5b3UgYXJlIE5PVCBndWFyYW50ZWVkIHRoYXRcbiAgICAvLyBjdXJzb3Igb2JzZXJ2ZSBjYWxsYmFja3MgaGF2ZSBmaXJlZCB3aGVuIHlvdXIgY2FsbGJhY2sgaXMgaW52b2tlZC4gKFdlXG4gICAgLy8gY2FuIGNoYW5nZSB0aGlzIGlmIHRoZXJlJ3MgYSByZWFsIHVzZSBjYXNlKS5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2UudGhlbihcbiAgICAgICAgcmVzdWx0ID0+IGNhbGxiYWNrKHVuZGVmaW5lZCwgcmVzdWx0KSxcbiAgICAgICAgZXhjZXB0aW9uID0+IGNhbGxiYWNrKGV4Y2VwdGlvbilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9taXNlLmF3YWl0KCk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEBwYXJhbSBvcHRpb25zIHtPcHRpb25hbCBPYmplY3R9XG4gIGFwcGx5QXN5bmM6IGZ1bmN0aW9uIChuYW1lLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgLy8gUnVuIHRoZSBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLm1ldGhvZF9oYW5kbGVyc1tuYW1lXTtcbiAgICBpZiAoISBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBNZXRlb3IuRXJyb3IoNDA0LCBgTWV0aG9kICcke25hbWV9JyBub3QgZm91bmRgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbWV0aG9kIGNhbGwgZnJvbSB3aXRoaW4gYW5vdGhlciBtZXRob2Qgb3IgcHVibGlzaCBmdW5jdGlvbixcbiAgICAvLyBnZXQgdGhlIHVzZXIgc3RhdGUgZnJvbSB0aGUgb3V0ZXIgbWV0aG9kIG9yIHB1Ymxpc2ggZnVuY3Rpb24sIG90aGVyd2lzZVxuICAgIC8vIGRvbid0IGFsbG93IHNldFVzZXJJZCB0byBiZSBjYWxsZWRcbiAgICB2YXIgdXNlcklkID0gbnVsbDtcbiAgICB2YXIgc2V0VXNlcklkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIHNldFVzZXJJZCBvbiBhIHNlcnZlciBpbml0aWF0ZWQgbWV0aG9kIGNhbGxcIik7XG4gICAgfTtcbiAgICB2YXIgY29ubmVjdGlvbiA9IG51bGw7XG4gICAgdmFyIGN1cnJlbnRNZXRob2RJbnZvY2F0aW9uID0gRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi5nZXQoKTtcbiAgICB2YXIgY3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbiA9IEREUC5fQ3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbi5nZXQoKTtcbiAgICB2YXIgcmFuZG9tU2VlZCA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRNZXRob2RJbnZvY2F0aW9uKSB7XG4gICAgICB1c2VySWQgPSBjdXJyZW50TWV0aG9kSW52b2NhdGlvbi51c2VySWQ7XG4gICAgICBzZXRVc2VySWQgPSBmdW5jdGlvbih1c2VySWQpIHtcbiAgICAgICAgY3VycmVudE1ldGhvZEludm9jYXRpb24uc2V0VXNlcklkKHVzZXJJZCk7XG4gICAgICB9O1xuICAgICAgY29ubmVjdGlvbiA9IGN1cnJlbnRNZXRob2RJbnZvY2F0aW9uLmNvbm5lY3Rpb247XG4gICAgICByYW5kb21TZWVkID0gRERQQ29tbW9uLm1ha2VScGNTZWVkKGN1cnJlbnRNZXRob2RJbnZvY2F0aW9uLCBuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQdWJsaWNhdGlvbkludm9jYXRpb24pIHtcbiAgICAgIHVzZXJJZCA9IGN1cnJlbnRQdWJsaWNhdGlvbkludm9jYXRpb24udXNlcklkO1xuICAgICAgc2V0VXNlcklkID0gZnVuY3Rpb24odXNlcklkKSB7XG4gICAgICAgIGN1cnJlbnRQdWJsaWNhdGlvbkludm9jYXRpb24uX3Nlc3Npb24uX3NldFVzZXJJZCh1c2VySWQpO1xuICAgICAgfTtcbiAgICAgIGNvbm5lY3Rpb24gPSBjdXJyZW50UHVibGljYXRpb25JbnZvY2F0aW9uLmNvbm5lY3Rpb247XG4gICAgfVxuXG4gICAgdmFyIGludm9jYXRpb24gPSBuZXcgRERQQ29tbW9uLk1ldGhvZEludm9jYXRpb24oe1xuICAgICAgaXNTaW11bGF0aW9uOiBmYWxzZSxcbiAgICAgIHVzZXJJZCxcbiAgICAgIHNldFVzZXJJZCxcbiAgICAgIGNvbm5lY3Rpb24sXG4gICAgICByYW5kb21TZWVkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKFxuICAgICAgRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi53aXRoVmFsdWUoXG4gICAgICAgIGludm9jYXRpb24sXG4gICAgICAgICgpID0+IG1heWJlQXVkaXRBcmd1bWVudENoZWNrcyhcbiAgICAgICAgICBoYW5kbGVyLCBpbnZvY2F0aW9uLCBFSlNPTi5jbG9uZShhcmdzKSxcbiAgICAgICAgICBcImludGVybmFsIGNhbGwgdG8gJ1wiICsgbmFtZSArIFwiJ1wiXG4gICAgICAgIClcbiAgICAgIClcbiAgICApKS50aGVuKEVKU09OLmNsb25lKTtcbiAgfSxcblxuICBfdXJsRm9yU2Vzc2lvbjogZnVuY3Rpb24gKHNlc3Npb25JZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgc2Vzc2lvbiA9IHNlbGYuc2Vzc2lvbnMuZ2V0KHNlc3Npb25JZCk7XG4gICAgaWYgKHNlc3Npb24pXG4gICAgICByZXR1cm4gc2Vzc2lvbi5fc29ja2V0VXJsO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxudmFyIGNhbGN1bGF0ZVZlcnNpb24gPSBmdW5jdGlvbiAoY2xpZW50U3VwcG9ydGVkVmVyc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTdXBwb3J0ZWRWZXJzaW9ucykge1xuICB2YXIgY29ycmVjdFZlcnNpb24gPSBfLmZpbmQoY2xpZW50U3VwcG9ydGVkVmVyc2lvbnMsIGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIF8uY29udGFpbnMoc2VydmVyU3VwcG9ydGVkVmVyc2lvbnMsIHZlcnNpb24pO1xuICB9KTtcbiAgaWYgKCFjb3JyZWN0VmVyc2lvbikge1xuICAgIGNvcnJlY3RWZXJzaW9uID0gc2VydmVyU3VwcG9ydGVkVmVyc2lvbnNbMF07XG4gIH1cbiAgcmV0dXJuIGNvcnJlY3RWZXJzaW9uO1xufTtcblxuRERQU2VydmVyLl9jYWxjdWxhdGVWZXJzaW9uID0gY2FsY3VsYXRlVmVyc2lvbjtcblxuXG4vLyBcImJsaW5kXCIgZXhjZXB0aW9ucyBvdGhlciB0aGFuIHRob3NlIHRoYXQgd2VyZSBkZWxpYmVyYXRlbHkgdGhyb3duIHRvIHNpZ25hbFxuLy8gZXJyb3JzIHRvIHRoZSBjbGllbnRcbnZhciB3cmFwSW50ZXJuYWxFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uLCBjb250ZXh0KSB7XG4gIGlmICghZXhjZXB0aW9uKSByZXR1cm4gZXhjZXB0aW9uO1xuXG4gIC8vIFRvIGFsbG93IHBhY2thZ2VzIHRvIHRocm93IGVycm9ycyBpbnRlbmRlZCBmb3IgdGhlIGNsaWVudCBidXQgbm90IGhhdmUgdG9cbiAgLy8gZGVwZW5kIG9uIHRoZSBNZXRlb3IuRXJyb3IgY2xhc3MsIGBpc0NsaWVudFNhZmVgIGNhbiBiZSBzZXQgdG8gdHJ1ZSBvbiBhbnlcbiAgLy8gZXJyb3IgYmVmb3JlIGl0IGlzIHRocm93bi5cbiAgaWYgKGV4Y2VwdGlvbi5pc0NsaWVudFNhZmUpIHtcbiAgICBpZiAoIShleGNlcHRpb24gaW5zdGFuY2VvZiBNZXRlb3IuRXJyb3IpKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbE1lc3NhZ2UgPSBleGNlcHRpb24ubWVzc2FnZTtcbiAgICAgIGV4Y2VwdGlvbiA9IG5ldyBNZXRlb3IuRXJyb3IoZXhjZXB0aW9uLmVycm9yLCBleGNlcHRpb24ucmVhc29uLCBleGNlcHRpb24uZGV0YWlscyk7XG4gICAgICBleGNlcHRpb24ubWVzc2FnZSA9IG9yaWdpbmFsTWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgfVxuXG4gIC8vIFRlc3RzIGNhbiBzZXQgdGhlICdfZXhwZWN0ZWRCeVRlc3QnIGZsYWcgb24gYW4gZXhjZXB0aW9uIHNvIGl0IHdvbid0IGdvIHRvXG4gIC8vIHRoZSBzZXJ2ZXIgbG9nLlxuICBpZiAoIWV4Y2VwdGlvbi5fZXhwZWN0ZWRCeVRlc3QpIHtcbiAgICBNZXRlb3IuX2RlYnVnKFwiRXhjZXB0aW9uIFwiICsgY29udGV4dCwgZXhjZXB0aW9uLnN0YWNrKTtcbiAgICBpZiAoZXhjZXB0aW9uLnNhbml0aXplZEVycm9yKSB7XG4gICAgICBNZXRlb3IuX2RlYnVnKFwiU2FuaXRpemVkIGFuZCByZXBvcnRlZCB0byB0aGUgY2xpZW50IGFzOlwiLCBleGNlcHRpb24uc2FuaXRpemVkRXJyb3IpO1xuICAgICAgTWV0ZW9yLl9kZWJ1ZygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERpZCB0aGUgZXJyb3IgY29udGFpbiBtb3JlIGRldGFpbHMgdGhhdCBjb3VsZCBoYXZlIGJlZW4gdXNlZnVsIGlmIGNhdWdodCBpblxuICAvLyBzZXJ2ZXIgY29kZSAob3IgaWYgdGhyb3duIGZyb20gbm9uLWNsaWVudC1vcmlnaW5hdGVkIGNvZGUpLCBidXQgYWxzb1xuICAvLyBwcm92aWRlZCBhIFwic2FuaXRpemVkXCIgdmVyc2lvbiB3aXRoIG1vcmUgY29udGV4dCB0aGFuIDUwMCBJbnRlcm5hbCBzZXJ2ZXJcbiAgLy8gZXJyb3I/IFVzZSB0aGF0LlxuICBpZiAoZXhjZXB0aW9uLnNhbml0aXplZEVycm9yKSB7XG4gICAgaWYgKGV4Y2VwdGlvbi5zYW5pdGl6ZWRFcnJvci5pc0NsaWVudFNhZmUpXG4gICAgICByZXR1cm4gZXhjZXB0aW9uLnNhbml0aXplZEVycm9yO1xuICAgIE1ldGVvci5fZGVidWcoXCJFeGNlcHRpb24gXCIgKyBjb250ZXh0ICsgXCIgcHJvdmlkZXMgYSBzYW5pdGl6ZWRFcnJvciB0aGF0IFwiICtcbiAgICAgICAgICAgICAgICAgIFwiZG9lcyBub3QgaGF2ZSBpc0NsaWVudFNhZmUgcHJvcGVydHkgc2V0OyBpZ25vcmluZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIik7XG59O1xuXG5cbi8vIEF1ZGl0IGFyZ3VtZW50IGNoZWNrcywgaWYgdGhlIGF1ZGl0LWFyZ3VtZW50LWNoZWNrcyBwYWNrYWdlIGV4aXN0cyAoaXQgaXMgYVxuLy8gd2VhayBkZXBlbmRlbmN5IG9mIHRoaXMgcGFja2FnZSkuXG52YXIgbWF5YmVBdWRpdEFyZ3VtZW50Q2hlY2tzID0gZnVuY3Rpb24gKGYsIGNvbnRleHQsIGFyZ3MsIGRlc2NyaXB0aW9uKSB7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICBpZiAoUGFja2FnZVsnYXVkaXQtYXJndW1lbnQtY2hlY2tzJ10pIHtcbiAgICByZXR1cm4gTWF0Y2guX2ZhaWxJZkFyZ3VtZW50c0FyZU5vdEFsbENoZWNrZWQoXG4gICAgICBmLCBjb250ZXh0LCBhcmdzLCBkZXNjcmlwdGlvbik7XG4gIH1cbiAgcmV0dXJuIGYuYXBwbHkoY29udGV4dCwgYXJncyk7XG59O1xuIiwidmFyIEZ1dHVyZSA9IE5wbS5yZXF1aXJlKCdmaWJlcnMvZnV0dXJlJyk7XG5cbi8vIEEgd3JpdGUgZmVuY2UgY29sbGVjdHMgYSBncm91cCBvZiB3cml0ZXMsIGFuZCBwcm92aWRlcyBhIGNhbGxiYWNrXG4vLyB3aGVuIGFsbCBvZiB0aGUgd3JpdGVzIGFyZSBmdWxseSBjb21taXR0ZWQgYW5kIHByb3BhZ2F0ZWQgKGFsbFxuLy8gb2JzZXJ2ZXJzIGhhdmUgYmVlbiBub3RpZmllZCBvZiB0aGUgd3JpdGUgYW5kIGFja25vd2xlZGdlZCBpdC4pXG4vL1xuRERQU2VydmVyLl9Xcml0ZUZlbmNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi5hcm1lZCA9IGZhbHNlO1xuICBzZWxmLmZpcmVkID0gZmFsc2U7XG4gIHNlbGYucmV0aXJlZCA9IGZhbHNlO1xuICBzZWxmLm91dHN0YW5kaW5nX3dyaXRlcyA9IDA7XG4gIHNlbGYuYmVmb3JlX2ZpcmVfY2FsbGJhY2tzID0gW107XG4gIHNlbGYuY29tcGxldGlvbl9jYWxsYmFja3MgPSBbXTtcbn07XG5cbi8vIFRoZSBjdXJyZW50IHdyaXRlIGZlbmNlLiBXaGVuIHRoZXJlIGlzIGEgY3VycmVudCB3cml0ZSBmZW5jZSwgY29kZVxuLy8gdGhhdCB3cml0ZXMgdG8gZGF0YWJhc2VzIHNob3VsZCByZWdpc3RlciB0aGVpciB3cml0ZXMgd2l0aCBpdCB1c2luZ1xuLy8gYmVnaW5Xcml0ZSgpLlxuLy9cbkREUFNlcnZlci5fQ3VycmVudFdyaXRlRmVuY2UgPSBuZXcgTWV0ZW9yLkVudmlyb25tZW50VmFyaWFibGU7XG5cbl8uZXh0ZW5kKEREUFNlcnZlci5fV3JpdGVGZW5jZS5wcm90b3R5cGUsIHtcbiAgLy8gU3RhcnQgdHJhY2tpbmcgYSB3cml0ZSwgYW5kIHJldHVybiBhbiBvYmplY3QgdG8gcmVwcmVzZW50IGl0LiBUaGVcbiAgLy8gb2JqZWN0IGhhcyBhIHNpbmdsZSBtZXRob2QsIGNvbW1pdHRlZCgpLiBUaGlzIG1ldGhvZCBzaG91bGQgYmVcbiAgLy8gY2FsbGVkIHdoZW4gdGhlIHdyaXRlIGlzIGZ1bGx5IGNvbW1pdHRlZCBhbmQgcHJvcGFnYXRlZC4gWW91IGNhblxuICAvLyBjb250aW51ZSB0byBhZGQgd3JpdGVzIHRvIHRoZSBXcml0ZUZlbmNlIHVwIHVudGlsIGl0IGlzIHRyaWdnZXJlZFxuICAvLyAoY2FsbHMgaXRzIGNhbGxiYWNrcyBiZWNhdXNlIGFsbCB3cml0ZXMgaGF2ZSBjb21taXR0ZWQuKVxuICBiZWdpbldyaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYucmV0aXJlZClcbiAgICAgIHJldHVybiB7IGNvbW1pdHRlZDogZnVuY3Rpb24gKCkge30gfTtcblxuICAgIGlmIChzZWxmLmZpcmVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmVuY2UgaGFzIGFscmVhZHkgYWN0aXZhdGVkIC0tIHRvbyBsYXRlIHRvIGFkZCB3cml0ZXNcIik7XG5cbiAgICBzZWxmLm91dHN0YW5kaW5nX3dyaXRlcysrO1xuICAgIHZhciBjb21taXR0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWl0dGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb21taXR0ZWQpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29tbWl0dGVkIGNhbGxlZCB0d2ljZSBvbiB0aGUgc2FtZSB3cml0ZVwiKTtcbiAgICAgICAgY29tbWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5vdXRzdGFuZGluZ193cml0ZXMtLTtcbiAgICAgICAgc2VsZi5fbWF5YmVGaXJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICAvLyBBcm0gdGhlIGZlbmNlLiBPbmNlIHRoZSBmZW5jZSBpcyBhcm1lZCwgYW5kIHRoZXJlIGFyZSBubyBtb3JlXG4gIC8vIHVuY29tbWl0dGVkIHdyaXRlcywgaXQgd2lsbCBhY3RpdmF0ZS5cbiAgYXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmID09PSBERFBTZXJ2ZXIuX0N1cnJlbnRXcml0ZUZlbmNlLmdldCgpKVxuICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBhcm0gdGhlIGN1cnJlbnQgZmVuY2VcIik7XG4gICAgc2VsZi5hcm1lZCA9IHRydWU7XG4gICAgc2VsZi5fbWF5YmVGaXJlKCk7XG4gIH0sXG5cbiAgLy8gUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBiZWZvcmUgZmlyaW5nIHRoZSBmZW5jZS5cbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gY2FuIGFkZCBuZXcgd3JpdGVzIHRvIHRoZSBmZW5jZSwgaW4gd2hpY2ggY2FzZVxuICAvLyBpdCB3b24ndCBmaXJlIHVudGlsIHRob3NlIHdyaXRlcyBhcmUgZG9uZSBhcyB3ZWxsLlxuICBvbkJlZm9yZUZpcmU6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLmZpcmVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmVuY2UgaGFzIGFscmVhZHkgYWN0aXZhdGVkIC0tIHRvbyBsYXRlIHRvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBcImFkZCBhIGNhbGxiYWNrXCIpO1xuICAgIHNlbGYuYmVmb3JlX2ZpcmVfY2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gIH0sXG5cbiAgLy8gUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmVuY2UgZmlyZXMuXG4gIG9uQWxsQ29tbWl0dGVkOiBmdW5jdGlvbiAoZnVuYykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5maXJlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImZlbmNlIGhhcyBhbHJlYWR5IGFjdGl2YXRlZCAtLSB0b28gbGF0ZSB0byBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgXCJhZGQgYSBjYWxsYmFja1wiKTtcbiAgICBzZWxmLmNvbXBsZXRpb25fY2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gIH0sXG5cbiAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24uIEFybXMgdGhlIGZlbmNlLCB0aGVuIGJsb2NrcyB1bnRpbCBpdCBmaXJlcy5cbiAgYXJtQW5kV2FpdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZnV0dXJlID0gbmV3IEZ1dHVyZTtcbiAgICBzZWxmLm9uQWxsQ29tbWl0dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1dHVyZVsncmV0dXJuJ10oKTtcbiAgICB9KTtcbiAgICBzZWxmLmFybSgpO1xuICAgIGZ1dHVyZS53YWl0KCk7XG4gIH0sXG5cbiAgX21heWJlRmlyZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5maXJlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIndyaXRlIGZlbmNlIGFscmVhZHkgYWN0aXZhdGVkP1wiKTtcbiAgICBpZiAoc2VsZi5hcm1lZCAmJiAhc2VsZi5vdXRzdGFuZGluZ193cml0ZXMpIHtcbiAgICAgIGZ1bmN0aW9uIGludm9rZUNhbGxiYWNrIChmdW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZnVuYyhzZWxmKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgTWV0ZW9yLl9kZWJ1ZyhcImV4Y2VwdGlvbiBpbiB3cml0ZSBmZW5jZSBjYWxsYmFja1wiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYub3V0c3RhbmRpbmdfd3JpdGVzKys7XG4gICAgICB3aGlsZSAoc2VsZi5iZWZvcmVfZmlyZV9jYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY2FsbGJhY2tzID0gc2VsZi5iZWZvcmVfZmlyZV9jYWxsYmFja3M7XG4gICAgICAgIHNlbGYuYmVmb3JlX2ZpcmVfY2FsbGJhY2tzID0gW107XG4gICAgICAgIF8uZWFjaChjYWxsYmFja3MsIGludm9rZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIHNlbGYub3V0c3RhbmRpbmdfd3JpdGVzLS07XG5cbiAgICAgIGlmICghc2VsZi5vdXRzdGFuZGluZ193cml0ZXMpIHtcbiAgICAgICAgc2VsZi5maXJlZCA9IHRydWU7XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBzZWxmLmNvbXBsZXRpb25fY2FsbGJhY2tzO1xuICAgICAgICBzZWxmLmNvbXBsZXRpb25fY2FsbGJhY2tzID0gW107XG4gICAgICAgIF8uZWFjaChjYWxsYmFja3MsIGludm9rZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gRGVhY3RpdmF0ZSB0aGlzIGZlbmNlIHNvIHRoYXQgYWRkaW5nIG1vcmUgd3JpdGVzIGhhcyBubyBlZmZlY3QuXG4gIC8vIFRoZSBmZW5jZSBtdXN0IGhhdmUgYWxyZWFkeSBmaXJlZC5cbiAgcmV0aXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghIHNlbGYuZmlyZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCByZXRpcmUgYSBmZW5jZSB0aGF0IGhhc24ndCBmaXJlZC5cIik7XG4gICAgc2VsZi5yZXRpcmVkID0gdHJ1ZTtcbiAgfVxufSk7XG4iLCIvLyBBIFwiY3Jvc3NiYXJcIiBpcyBhIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RydWN0dXJlZCBub3RpZmljYXRpb24gcmVnaXN0cmF0aW9uLlxuLy8gU2VlIF9tYXRjaCBmb3IgdGhlIGRlZmluaXRpb24gb2YgaG93IGEgbm90aWZpY2F0aW9uIG1hdGNoZXMgYSB0cmlnZ2VyLlxuLy8gQWxsIG5vdGlmaWNhdGlvbnMgYW5kIHRyaWdnZXJzIG11c3QgaGF2ZSBhIHN0cmluZyBrZXkgbmFtZWQgJ2NvbGxlY3Rpb24nLlxuXG5ERFBTZXJ2ZXIuX0Nyb3NzYmFyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBzZWxmLm5leHRJZCA9IDE7XG4gIC8vIG1hcCBmcm9tIGNvbGxlY3Rpb24gbmFtZSAoc3RyaW5nKSAtPiBsaXN0ZW5lciBpZCAtPiBvYmplY3QuIGVhY2ggb2JqZWN0IGhhc1xuICAvLyBrZXlzICd0cmlnZ2VyJywgJ2NhbGxiYWNrJy4gIEFzIGEgaGFjaywgdGhlIGVtcHR5IHN0cmluZyBtZWFucyBcIm5vXG4gIC8vIGNvbGxlY3Rpb25cIi5cbiAgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb24gPSB7fTtcbiAgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25Db3VudCA9IHt9O1xuICBzZWxmLmZhY3RQYWNrYWdlID0gb3B0aW9ucy5mYWN0UGFja2FnZSB8fCBcImxpdmVkYXRhXCI7XG4gIHNlbGYuZmFjdE5hbWUgPSBvcHRpb25zLmZhY3ROYW1lIHx8IG51bGw7XG59O1xuXG5fLmV4dGVuZChERFBTZXJ2ZXIuX0Nyb3NzYmFyLnByb3RvdHlwZSwge1xuICAvLyBtc2cgaXMgYSB0cmlnZ2VyIG9yIGEgbm90aWZpY2F0aW9uXG4gIF9jb2xsZWN0aW9uRm9yTWVzc2FnZTogZnVuY3Rpb24gKG1zZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoISBfLmhhcyhtc2csICdjb2xsZWN0aW9uJykpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihtc2cuY29sbGVjdGlvbikgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobXNnLmNvbGxlY3Rpb24gPT09ICcnKVxuICAgICAgICB0aHJvdyBFcnJvcihcIk1lc3NhZ2UgaGFzIGVtcHR5IGNvbGxlY3Rpb24hXCIpO1xuICAgICAgcmV0dXJuIG1zZy5jb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihcIk1lc3NhZ2UgaGFzIG5vbi1zdHJpbmcgY29sbGVjdGlvbiFcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIExpc3RlbiBmb3Igbm90aWZpY2F0aW9uIHRoYXQgbWF0Y2ggJ3RyaWdnZXInLiBBIG5vdGlmaWNhdGlvblxuICAvLyBtYXRjaGVzIGlmIGl0IGhhcyB0aGUga2V5LXZhbHVlIHBhaXJzIGluIHRyaWdnZXIgYXMgYVxuICAvLyBzdWJzZXQuIFdoZW4gYSBub3RpZmljYXRpb24gbWF0Y2hlcywgY2FsbCAnY2FsbGJhY2snLCBwYXNzaW5nXG4gIC8vIHRoZSBhY3R1YWwgbm90aWZpY2F0aW9uLlxuICAvL1xuICAvLyBSZXR1cm5zIGEgbGlzdGVuIGhhbmRsZSwgd2hpY2ggaXMgYW4gb2JqZWN0IHdpdGggYSBtZXRob2RcbiAgLy8gc3RvcCgpLiBDYWxsIHN0b3AoKSB0byBzdG9wIGxpc3RlbmluZy5cbiAgLy9cbiAgLy8gWFhYIEl0IHNob3VsZCBiZSBsZWdhbCB0byBjYWxsIGZpcmUoKSBmcm9tIGluc2lkZSBhIGxpc3RlbigpXG4gIC8vIGNhbGxiYWNrP1xuICBsaXN0ZW46IGZ1bmN0aW9uICh0cmlnZ2VyLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWQgPSBzZWxmLm5leHRJZCsrO1xuXG4gICAgdmFyIGNvbGxlY3Rpb24gPSBzZWxmLl9jb2xsZWN0aW9uRm9yTWVzc2FnZSh0cmlnZ2VyKTtcbiAgICB2YXIgcmVjb3JkID0ge3RyaWdnZXI6IEVKU09OLmNsb25lKHRyaWdnZXIpLCBjYWxsYmFjazogY2FsbGJhY2t9O1xuICAgIGlmICghIF8uaGFzKHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uLCBjb2xsZWN0aW9uKSkge1xuICAgICAgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25bY29sbGVjdGlvbl0gPSB7fTtcbiAgICAgIHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uQ291bnRbY29sbGVjdGlvbl0gPSAwO1xuICAgIH1cbiAgICBzZWxmLmxpc3RlbmVyc0J5Q29sbGVjdGlvbltjb2xsZWN0aW9uXVtpZF0gPSByZWNvcmQ7XG4gICAgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25Db3VudFtjb2xsZWN0aW9uXSsrO1xuXG4gICAgaWYgKHNlbGYuZmFjdE5hbWUgJiYgUGFja2FnZVsnZmFjdHMtYmFzZSddKSB7XG4gICAgICBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICAgICAgc2VsZi5mYWN0UGFja2FnZSwgc2VsZi5mYWN0TmFtZSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNlbGYuZmFjdE5hbWUgJiYgUGFja2FnZVsnZmFjdHMtYmFzZSddKSB7XG4gICAgICAgICAgUGFja2FnZVsnZmFjdHMtYmFzZSddLkZhY3RzLmluY3JlbWVudFNlcnZlckZhY3QoXG4gICAgICAgICAgICBzZWxmLmZhY3RQYWNrYWdlLCBzZWxmLmZhY3ROYW1lLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uW2NvbGxlY3Rpb25dW2lkXTtcbiAgICAgICAgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25Db3VudFtjb2xsZWN0aW9uXS0tO1xuICAgICAgICBpZiAoc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25Db3VudFtjb2xsZWN0aW9uXSA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmLmxpc3RlbmVyc0J5Q29sbGVjdGlvbltjb2xsZWN0aW9uXTtcbiAgICAgICAgICBkZWxldGUgc2VsZi5saXN0ZW5lcnNCeUNvbGxlY3Rpb25Db3VudFtjb2xsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgLy8gRmlyZSB0aGUgcHJvdmlkZWQgJ25vdGlmaWNhdGlvbicgKGFuIG9iamVjdCB3aG9zZSBhdHRyaWJ1dGVcbiAgLy8gdmFsdWVzIGFyZSBhbGwgSlNPTi1jb21wYXRpYmlsZSkgLS0gaW5mb3JtIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnNcbiAgLy8gKHJlZ2lzdGVyZWQgd2l0aCBsaXN0ZW4oKSkuXG4gIC8vXG4gIC8vIElmIGZpcmUoKSBpcyBjYWxsZWQgaW5zaWRlIGEgd3JpdGUgZmVuY2UsIHRoZW4gZWFjaCBvZiB0aGVcbiAgLy8gbGlzdGVuZXIgY2FsbGJhY2tzIHdpbGwgYmUgY2FsbGVkIGluc2lkZSB0aGUgd3JpdGUgZmVuY2UgYXMgd2VsbC5cbiAgLy9cbiAgLy8gVGhlIGxpc3RlbmVycyBtYXkgYmUgaW52b2tlZCBpbiBwYXJhbGxlbCwgcmF0aGVyIHRoYW4gc2VyaWFsbHkuXG4gIGZpcmU6IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgY29sbGVjdGlvbiA9IHNlbGYuX2NvbGxlY3Rpb25Gb3JNZXNzYWdlKG5vdGlmaWNhdGlvbik7XG5cbiAgICBpZiAoISBfLmhhcyhzZWxmLmxpc3RlbmVyc0J5Q29sbGVjdGlvbiwgY29sbGVjdGlvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzRm9yQ29sbGVjdGlvbiA9IHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uW2NvbGxlY3Rpb25dO1xuICAgIHZhciBjYWxsYmFja0lkcyA9IFtdO1xuICAgIF8uZWFjaChsaXN0ZW5lcnNGb3JDb2xsZWN0aW9uLCBmdW5jdGlvbiAobCwgaWQpIHtcbiAgICAgIGlmIChzZWxmLl9tYXRjaGVzKG5vdGlmaWNhdGlvbiwgbC50cmlnZ2VyKSkge1xuICAgICAgICBjYWxsYmFja0lkcy5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExpc3RlbmVyIGNhbGxiYWNrcyBjYW4geWllbGQsIHNvIHdlIG5lZWQgdG8gZmlyc3QgZmluZCBhbGwgdGhlIG9uZXMgdGhhdFxuICAgIC8vIG1hdGNoIGluIGEgc2luZ2xlIGl0ZXJhdGlvbiBvdmVyIHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uICh3aGljaCBjYW4ndFxuICAgIC8vIGJlIG11dGF0ZWQgZHVyaW5nIHRoaXMgaXRlcmF0aW9uKSwgYW5kIHRoZW4gaW52b2tlIHRoZSBtYXRjaGluZ1xuICAgIC8vIGNhbGxiYWNrcywgY2hlY2tpbmcgYmVmb3JlIGVhY2ggY2FsbCB0byBlbnN1cmUgdGhleSBoYXZlbid0IHN0b3BwZWQuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvbid0IGhhdmUgdG8gY2hlY2sgdGhhdFxuICAgIC8vIHNlbGYubGlzdGVuZXJzQnlDb2xsZWN0aW9uW2NvbGxlY3Rpb25dIHN0aWxsID09PSBsaXN0ZW5lcnNGb3JDb2xsZWN0aW9uLFxuICAgIC8vIGJlY2F1c2UgdGhlIG9ubHkgd2F5IHRoYXQgc3RvcHMgYmVpbmcgdHJ1ZSBpcyBpZiBsaXN0ZW5lcnNGb3JDb2xsZWN0aW9uXG4gICAgLy8gZmlyc3QgZ2V0cyByZWR1Y2VkIGRvd24gdG8gdGhlIGVtcHR5IG9iamVjdCAoYW5kIHRoZW4gbmV2ZXIgZ2V0c1xuICAgIC8vIGluY3JlYXNlZCBhZ2FpbikuXG4gICAgXy5lYWNoKGNhbGxiYWNrSWRzLCBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGlmIChfLmhhcyhsaXN0ZW5lcnNGb3JDb2xsZWN0aW9uLCBpZCkpIHtcbiAgICAgICAgbGlzdGVuZXJzRm9yQ29sbGVjdGlvbltpZF0uY2FsbGJhY2sobm90aWZpY2F0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvLyBBIG5vdGlmaWNhdGlvbiBtYXRjaGVzIGEgdHJpZ2dlciBpZiBhbGwga2V5cyB0aGF0IGV4aXN0IGluIGJvdGggYXJlIGVxdWFsLlxuICAvL1xuICAvLyBFeGFtcGxlczpcbiAgLy8gIE46e2NvbGxlY3Rpb246IFwiQ1wifSBtYXRjaGVzIFQ6e2NvbGxlY3Rpb246IFwiQ1wifVxuICAvLyAgICAoYSBub24tdGFyZ2V0ZWQgd3JpdGUgdG8gYSBjb2xsZWN0aW9uIG1hdGNoZXMgYVxuICAvLyAgICAgbm9uLXRhcmdldGVkIHF1ZXJ5KVxuICAvLyAgTjp7Y29sbGVjdGlvbjogXCJDXCIsIGlkOiBcIlhcIn0gbWF0Y2hlcyBUOntjb2xsZWN0aW9uOiBcIkNcIn1cbiAgLy8gICAgKGEgdGFyZ2V0ZWQgd3JpdGUgdG8gYSBjb2xsZWN0aW9uIG1hdGNoZXMgYSBub24tdGFyZ2V0ZWQgcXVlcnkpXG4gIC8vICBOOntjb2xsZWN0aW9uOiBcIkNcIn0gbWF0Y2hlcyBUOntjb2xsZWN0aW9uOiBcIkNcIiwgaWQ6IFwiWFwifVxuICAvLyAgICAoYSBub24tdGFyZ2V0ZWQgd3JpdGUgdG8gYSBjb2xsZWN0aW9uIG1hdGNoZXMgYVxuICAvLyAgICAgdGFyZ2V0ZWQgcXVlcnkpXG4gIC8vICBOOntjb2xsZWN0aW9uOiBcIkNcIiwgaWQ6IFwiWFwifSBtYXRjaGVzIFQ6e2NvbGxlY3Rpb246IFwiQ1wiLCBpZDogXCJYXCJ9XG4gIC8vICAgIChhIHRhcmdldGVkIHdyaXRlIHRvIGEgY29sbGVjdGlvbiBtYXRjaGVzIGEgdGFyZ2V0ZWQgcXVlcnkgdGFyZ2V0ZWRcbiAgLy8gICAgIGF0IHRoZSBzYW1lIGRvY3VtZW50KVxuICAvLyAgTjp7Y29sbGVjdGlvbjogXCJDXCIsIGlkOiBcIlhcIn0gZG9lcyBub3QgbWF0Y2ggVDp7Y29sbGVjdGlvbjogXCJDXCIsIGlkOiBcIllcIn1cbiAgLy8gICAgKGEgdGFyZ2V0ZWQgd3JpdGUgdG8gYSBjb2xsZWN0aW9uIGRvZXMgbm90IG1hdGNoIGEgdGFyZ2V0ZWQgcXVlcnlcbiAgLy8gICAgIHRhcmdldGVkIGF0IGEgZGlmZmVyZW50IGRvY3VtZW50KVxuICBfbWF0Y2hlczogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbiwgdHJpZ2dlcikge1xuICAgIC8vIE1vc3Qgbm90aWZpY2F0aW9ucyB0aGF0IHVzZSB0aGUgY3Jvc3NiYXIgaGF2ZSBhIHN0cmluZyBgY29sbGVjdGlvbmAgYW5kXG4gICAgLy8gbWF5YmUgYW4gYGlkYCB0aGF0IGlzIGEgc3RyaW5nIG9yIE9iamVjdElELiBXZSdyZSBhbHJlYWR5IGRpdmlkaW5nIHVwXG4gICAgLy8gdHJpZ2dlcnMgYnkgY29sbGVjdGlvbiwgYnV0IGxldCdzIGZhc3QtdHJhY2sgXCJub3BlLCBkaWZmZXJlbnQgSURcIiAoYW5kXG4gICAgLy8gYXZvaWQgdGhlIG92ZXJseSBnZW5lcmljIEVKU09OLmVxdWFscykuIFRoaXMgbWFrZXMgYSBub3RpY2VhYmxlXG4gICAgLy8gcGVyZm9ybWFuY2UgZGlmZmVyZW5jZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL3B1bGwvMzY5N1xuICAgIGlmICh0eXBlb2Yobm90aWZpY2F0aW9uLmlkKSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdHlwZW9mKHRyaWdnZXIuaWQpID09PSAnc3RyaW5nJyAmJlxuICAgICAgICBub3RpZmljYXRpb24uaWQgIT09IHRyaWdnZXIuaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5vdGlmaWNhdGlvbi5pZCBpbnN0YW5jZW9mIE1vbmdvSUQuT2JqZWN0SUQgJiZcbiAgICAgICAgdHJpZ2dlci5pZCBpbnN0YW5jZW9mIE1vbmdvSUQuT2JqZWN0SUQgJiZcbiAgICAgICAgISBub3RpZmljYXRpb24uaWQuZXF1YWxzKHRyaWdnZXIuaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIF8uYWxsKHRyaWdnZXIsIGZ1bmN0aW9uICh0cmlnZ2VyVmFsdWUsIGtleSkge1xuICAgICAgcmV0dXJuICFfLmhhcyhub3RpZmljYXRpb24sIGtleSkgfHxcbiAgICAgICAgRUpTT04uZXF1YWxzKHRyaWdnZXJWYWx1ZSwgbm90aWZpY2F0aW9uW2tleV0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuLy8gVGhlIFwiaW52YWxpZGF0aW9uIGNyb3NzYmFyXCIgaXMgYSBzcGVjaWZpYyBpbnN0YW5jZSB1c2VkIGJ5IHRoZSBERFAgc2VydmVyIHRvXG4vLyBpbXBsZW1lbnQgd3JpdGUgZmVuY2Ugbm90aWZpY2F0aW9ucy4gTGlzdGVuZXIgY2FsbGJhY2tzIG9uIHRoaXMgY3Jvc3NiYXJcbi8vIHNob3VsZCBjYWxsIGJlZ2luV3JpdGUgb24gdGhlIGN1cnJlbnQgd3JpdGUgZmVuY2UgYmVmb3JlIHRoZXkgcmV0dXJuLCBpZiB0aGV5XG4vLyB3YW50IHRvIGRlbGF5IHRoZSB3cml0ZSBmZW5jZSBmcm9tIGZpcmluZyAoaWUsIHRoZSBERFAgbWV0aG9kLWRhdGEtdXBkYXRlZFxuLy8gbWVzc2FnZSBmcm9tIGJlaW5nIHNlbnQpLlxuRERQU2VydmVyLl9JbnZhbGlkYXRpb25Dcm9zc2JhciA9IG5ldyBERFBTZXJ2ZXIuX0Nyb3NzYmFyKHtcbiAgZmFjdE5hbWU6IFwiaW52YWxpZGF0aW9uLWNyb3NzYmFyLWxpc3RlbmVyc1wiXG59KTtcbiIsImlmIChwcm9jZXNzLmVudi5ERFBfREVGQVVMVF9DT05ORUNUSU9OX1VSTCkge1xuICBfX21ldGVvcl9ydW50aW1lX2NvbmZpZ19fLkREUF9ERUZBVUxUX0NPTk5FQ1RJT05fVVJMID1cbiAgICBwcm9jZXNzLmVudi5ERFBfREVGQVVMVF9DT05ORUNUSU9OX1VSTDtcbn1cblxuTWV0ZW9yLnNlcnZlciA9IG5ldyBTZXJ2ZXI7XG5cbk1ldGVvci5yZWZyZXNoID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICBERFBTZXJ2ZXIuX0ludmFsaWRhdGlvbkNyb3NzYmFyLmZpcmUobm90aWZpY2F0aW9uKTtcbn07XG5cbi8vIFByb3h5IHRoZSBwdWJsaWMgbWV0aG9kcyBvZiBNZXRlb3Iuc2VydmVyIHNvIHRoZXkgY2FuXG4vLyBiZSBjYWxsZWQgZGlyZWN0bHkgb24gTWV0ZW9yLlxuXy5lYWNoKFxuICBbXG4gICAgJ3B1Ymxpc2gnLFxuICAgICdtZXRob2RzJyxcbiAgICAnY2FsbCcsXG4gICAgJ2NhbGxBc3luYycsXG4gICAgJ2FwcGx5JyxcbiAgICAnYXBwbHlBc3luYycsXG4gICAgJ29uQ29ubmVjdGlvbicsXG4gICAgJ29uTWVzc2FnZScsXG4gIF0sXG4gIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBNZXRlb3JbbmFtZV0gPSBfLmJpbmQoTWV0ZW9yLnNlcnZlcltuYW1lXSwgTWV0ZW9yLnNlcnZlcik7XG4gIH1cbik7XG4iXX0=
