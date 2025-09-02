(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Retry = Package.retry.Retry;
var IdMap = Package['id-map'].IdMap;
var ECMAScript = Package.ecmascript.ECMAScript;
var Hook = Package['callback-hook'].Hook;
var DDPCommon = Package['ddp-common'].DDPCommon;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var options, args, callback, DDP;

var require = meteorInstall({"node_modules":{"meteor":{"ddp-client":{"server":{"server.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/server/server.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("../common/namespace.js", {
  DDP: "DDP"
}, 0);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"common":{"MethodInvoker.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/common/MethodInvoker.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => MethodInvoker
});
class MethodInvoker {
  constructor(options) {
    // Public (within this file) fields.
    this.methodId = options.methodId;
    this.sentMessage = false;
    this._callback = options.callback;
    this._connection = options.connection;
    this._message = options.message;
    this._onResultReceived = options.onResultReceived || (() => {});
    this._wait = options.wait;
    this.noRetry = options.noRetry;
    this._methodResult = null;
    this._dataVisible = false;

    // Register with the connection.
    this._connection._methodInvokers[this.methodId] = this;
  }
  // Sends the method message to the server. May be called additional times if
  // we lose the connection and reconnect before receiving a result.
  sendMessage() {
    // This function is called before sending a method (including resending on
    // reconnect). We should only (re)send methods where we don't already have a
    // result!
    if (this.gotResult()) throw new Error('sendingMethod is called on method with result');

    // If we're re-sending it, it doesn't matter if data was written the first
    // time.
    this._dataVisible = false;
    this.sentMessage = true;

    // If this is a wait method, make all data messages be buffered until it is
    // done.
    if (this._wait) this._connection._methodsBlockingQuiescence[this.methodId] = true;

    // Actually send the message.
    this._connection._send(this._message);
  }
  // Invoke the callback, if we have both a result and know that all data has
  // been written to the local cache.
  _maybeInvokeCallback() {
    if (this._methodResult && this._dataVisible) {
      // Call the callback. (This won't throw: the callback was wrapped with
      // bindEnvironment.)
      this._callback(this._methodResult[0], this._methodResult[1]);

      // Forget about this method.
      delete this._connection._methodInvokers[this.methodId];

      // Let the connection know that this method is finished, so it can try to
      // move on to the next block of methods.
      this._connection._outstandingMethodFinished();
    }
  }
  // Call with the result of the method from the server. Only may be called
  // once; once it is called, you should not call sendMessage again.
  // If the user provided an onResultReceived callback, call it immediately.
  // Then invoke the main callback if data is also visible.
  receiveResult(err, result) {
    if (this.gotResult()) throw new Error('Methods should only receive results once');
    this._methodResult = [err, result];
    this._onResultReceived(err, result);
    this._maybeInvokeCallback();
  }
  // Call this when all data written by the method is visible. This means that
  // the method has returns its "data is done" message *AND* all server
  // documents that are buffered at that time have been written to the local
  // cache. Invokes the main callback if the result has been received.
  dataVisible() {
    this._dataVisible = true;
    this._maybeInvokeCallback();
  }
  // True if receiveResult has been called.
  gotResult() {
    return !!this._methodResult;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livedata_connection.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/common/livedata_connection.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["stubInvocation", "invocation"],
  _excluded2 = ["stubInvocation", "invocation"];
let _objectWithoutProperties;
module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }
}, 0);
let _objectSpread;
module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }
}, 1);
module.export({
  Connection: () => Connection
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 0);
let DDPCommon;
module.link("meteor/ddp-common", {
  DDPCommon(v) {
    DDPCommon = v;
  }
}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }
}, 2);
let EJSON;
module.link("meteor/ejson", {
  EJSON(v) {
    EJSON = v;
  }
}, 3);
let Random;
module.link("meteor/random", {
  Random(v) {
    Random = v;
  }
}, 4);
let Hook;
module.link("meteor/callback-hook", {
  Hook(v) {
    Hook = v;
  }
}, 5);
let MongoID;
module.link("meteor/mongo-id", {
  MongoID(v) {
    MongoID = v;
  }
}, 6);
let DDP;
module.link("./namespace.js", {
  DDP(v) {
    DDP = v;
  }
}, 7);
let MethodInvoker;
module.link("./MethodInvoker.js", {
  default(v) {
    MethodInvoker = v;
  }
}, 8);
let hasOwn, slice, keys, isEmpty, last;
module.link("meteor/ddp-common/utils.js", {
  hasOwn(v) {
    hasOwn = v;
  },
  slice(v) {
    slice = v;
  },
  keys(v) {
    keys = v;
  },
  isEmpty(v) {
    isEmpty = v;
  },
  last(v) {
    last = v;
  }
}, 9);
let Fiber;
let Future;
if (Meteor.isServer) {
  Fiber = Npm.require('fibers');
  Future = Npm.require('fibers/future');
}
class MongoIDMap extends IdMap {
  constructor() {
    super(MongoID.idStringify, MongoID.idParse);
  }
}

// @param url {String|Object} URL to Meteor app,
//   or an object as a test hook (see code)
// Options:
//   reloadWithOutstanding: is it OK to reload if there are outstanding methods?
//   headers: extra headers to send on the websockets connection, for
//     server-to-server DDP only
//   _sockjsOptions: Specifies options to pass through to the sockjs client
//   onDDPNegotiationVersionFailure: callback when version negotiation fails.
//
// XXX There should be a way to destroy a DDP connection, causing all
// outstanding method calls to fail.
//
// XXX Our current way of handling failure and reconnection is great
// for an app (where we want to tolerate being disconnected as an
// expect state, and keep trying forever to reconnect) but cumbersome
// for something like a command line tool that wants to make a
// connection, call a method, and print an error if connection
// fails. We should have better usability in the latter case (while
// still transparently reconnecting if it's just a transient failure
// or the server migrating us).
class Connection {
  constructor(url, options) {
    const self = this;
    this.options = options = _objectSpread({
      onConnected() {},
      onDDPVersionNegotiationFailure(description) {
        Meteor._debug(description);
      },
      heartbeatInterval: 17500,
      heartbeatTimeout: 15000,
      npmFayeOptions: Object.create(null),
      // These options are only for testing.
      reloadWithOutstanding: false,
      supportedDDPVersions: DDPCommon.SUPPORTED_DDP_VERSIONS,
      retry: true,
      respondToPings: true,
      // When updates are coming within this ms interval, batch them together.
      bufferedWritesInterval: 5,
      // Flush buffers immediately if writes are happening continuously for more than this many ms.
      bufferedWritesMaxAge: 500
    }, options);

    // If set, called when we reconnect, queuing method calls _before_ the
    // existing outstanding ones.
    // NOTE: This feature has been preserved for backwards compatibility. The
    // preferred method of setting a callback on reconnect is to use
    // DDP.onReconnect.
    self.onReconnect = null;

    // as a test hook, allow passing a stream instead of a url.
    if (typeof url === 'object') {
      self._stream = url;
    } else {
      const {
        ClientStream
      } = require("meteor/socket-stream-client");
      self._stream = new ClientStream(url, {
        retry: options.retry,
        ConnectionError: DDP.ConnectionError,
        headers: options.headers,
        _sockjsOptions: options._sockjsOptions,
        // Used to keep some tests quiet, or for other cases in which
        // the right thing to do with connection errors is to silently
        // fail (e.g. sending package usage stats). At some point we
        // should have a real API for handling client-stream-level
        // errors.
        _dontPrintErrors: options._dontPrintErrors,
        connectTimeoutMs: options.connectTimeoutMs,
        npmFayeOptions: options.npmFayeOptions
      });
    }
    self._lastSessionId = null;
    self._versionSuggestion = null; // The last proposed DDP version.
    self._version = null; // The DDP version agreed on by client and server.
    self._stores = Object.create(null); // name -> object with methods
    self._methodHandlers = Object.create(null); // name -> func
    self._nextMethodId = 1;
    self._supportedDDPVersions = options.supportedDDPVersions;
    self._heartbeatInterval = options.heartbeatInterval;
    self._heartbeatTimeout = options.heartbeatTimeout;

    // Tracks methods which the user has tried to call but which have not yet
    // called their user callback (ie, they are waiting on their result or for all
    // of their writes to be written to the local cache). Map from method ID to
    // MethodInvoker object.
    self._methodInvokers = Object.create(null);

    // Tracks methods which the user has called but whose result messages have not
    // arrived yet.
    //
    // _outstandingMethodBlocks is an array of blocks of methods. Each block
    // represents a set of methods that can run at the same time. The first block
    // represents the methods which are currently in flight; subsequent blocks
    // must wait for previous blocks to be fully finished before they can be sent
    // to the server.
    //
    // Each block is an object with the following fields:
    // - methods: a list of MethodInvoker objects
    // - wait: a boolean; if true, this block had a single method invoked with
    //         the "wait" option
    //
    // There will never be adjacent blocks with wait=false, because the only thing
    // that makes methods need to be serialized is a wait method.
    //
    // Methods are removed from the first block when their "result" is
    // received. The entire first block is only removed when all of the in-flight
    // methods have received their results (so the "methods" list is empty) *AND*
    // all of the data written by those methods are visible in the local cache. So
    // it is possible for the first block's methods list to be empty, if we are
    // still waiting for some objects to quiesce.
    //
    // Example:
    //  _outstandingMethodBlocks = [
    //    {wait: false, methods: []},
    //    {wait: true, methods: [<MethodInvoker for 'login'>]},
    //    {wait: false, methods: [<MethodInvoker for 'foo'>,
    //                            <MethodInvoker for 'bar'>]}]
    // This means that there were some methods which were sent to the server and
    // which have returned their results, but some of the data written by
    // the methods may not be visible in the local cache. Once all that data is
    // visible, we will send a 'login' method. Once the login method has returned
    // and all the data is visible (including re-running subs if userId changes),
    // we will send the 'foo' and 'bar' methods in parallel.
    self._outstandingMethodBlocks = [];

    // method ID -> array of objects with keys 'collection' and 'id', listing
    // documents written by a given method's stub. keys are associated with
    // methods whose stub wrote at least one document, and whose data-done message
    // has not yet been received.
    self._documentsWrittenByStub = {};
    // collection -> IdMap of "server document" object. A "server document" has:
    // - "document": the version of the document according the
    //   server (ie, the snapshot before a stub wrote it, amended by any changes
    //   received from the server)
    //   It is undefined if we think the document does not exist
    // - "writtenByStubs": a set of method IDs whose stubs wrote to the document
    //   whose "data done" messages have not yet been processed
    self._serverDocuments = {};

    // Array of callbacks to be called after the next update of the local
    // cache. Used for:
    //  - Calling methodInvoker.dataVisible and sub ready callbacks after
    //    the relevant data is flushed.
    //  - Invoking the callbacks of "half-finished" methods after reconnect
    //    quiescence. Specifically, methods whose result was received over the old
    //    connection (so we don't re-send it) but whose data had not been made
    //    visible.
    self._afterUpdateCallbacks = [];

    // In two contexts, we buffer all incoming data messages and then process them
    // all at once in a single update:
    //   - During reconnect, we buffer all data messages until all subs that had
    //     been ready before reconnect are ready again, and all methods that are
    //     active have returned their "data done message"; then
    //   - During the execution of a "wait" method, we buffer all data messages
    //     until the wait method gets its "data done" message. (If the wait method
    //     occurs during reconnect, it doesn't get any special handling.)
    // all data messages are processed in one update.
    //
    // The following fields are used for this "quiescence" process.

    // This buffers the messages that aren't being processed yet.
    self._messagesBufferedUntilQuiescence = [];
    // Map from method ID -> true. Methods are removed from this when their
    // "data done" message is received, and we will not quiesce until it is
    // empty.
    self._methodsBlockingQuiescence = {};
    // map from sub ID -> true for subs that were ready (ie, called the sub
    // ready callback) before reconnect but haven't become ready again yet
    self._subsBeingRevived = {}; // map from sub._id -> true
    // if true, the next data update should reset all stores. (set during
    // reconnect.)
    self._resetStores = false;

    // name -> array of updates for (yet to be created) collections
    self._updatesForUnknownStores = {};
    // if we're blocking a migration, the retry func
    self._retryMigrate = null;
    self.__flushBufferedWrites = Meteor.bindEnvironment(self._flushBufferedWrites, 'flushing DDP buffered writes', self);
    // Collection name -> array of messages.
    self._bufferedWrites = {};
    // When current buffer of updates must be flushed at, in ms timestamp.
    self._bufferedWritesFlushAt = null;
    // Timeout handle for the next processing of all pending writes
    self._bufferedWritesFlushHandle = null;
    self._bufferedWritesInterval = options.bufferedWritesInterval;
    self._bufferedWritesMaxAge = options.bufferedWritesMaxAge;

    // metadata for subscriptions.  Map from sub ID to object with keys:
    //   - id
    //   - name
    //   - params
    //   - inactive (if true, will be cleaned up if not reused in re-run)
    //   - ready (has the 'ready' message been received?)
    //   - readyCallback (an optional callback to call when ready)
    //   - errorCallback (an optional callback to call if the sub terminates with
    //                    an error, XXX COMPAT WITH 1.0.3.1)
    //   - stopCallback (an optional callback to call when the sub terminates
    //     for any reason, with an error argument if an error triggered the stop)
    self._subscriptions = {};

    // Reactive userId.
    self._userId = null;
    self._userIdDeps = new Tracker.Dependency();

    // Block auto-reload while we're waiting for method responses.
    if (Meteor.isClient && Package.reload && !options.reloadWithOutstanding) {
      Package.reload.Reload._onMigrate(retry => {
        if (!self._readyToMigrate()) {
          self._retryMigrate = retry;
          return [false];
        } else {
          return [true];
        }
      });
    }
    const onDisconnect = () => {
      if (self._heartbeat) {
        self._heartbeat.stop();
        self._heartbeat = null;
      }
    };
    if (Meteor.isServer) {
      self._stream.on('message', Meteor.bindEnvironment(this.onMessage.bind(this), 'handling DDP message'));
      self._stream.on('reset', Meteor.bindEnvironment(this.onReset.bind(this), 'handling DDP reset'));
      self._stream.on('disconnect', Meteor.bindEnvironment(onDisconnect, 'handling DDP disconnect'));
    } else {
      self._stream.on('message', this.onMessage.bind(this));
      self._stream.on('reset', this.onReset.bind(this));
      self._stream.on('disconnect', onDisconnect);
    }
  }

  // 'name' is the name of the data on the wire that should go in the
  // store. 'wrappedStore' should be an object with methods beginUpdate, update,
  // endUpdate, saveOriginals, retrieveOriginals. see Collection for an example.
  registerStore(name, wrappedStore) {
    const self = this;
    if (name in self._stores) return false;

    // Wrap the input object in an object which makes any store method not
    // implemented by 'store' into a no-op.
    const store = Object.create(null);
    const keysOfStore = ['update', 'beginUpdate', 'endUpdate', 'saveOriginals', 'retrieveOriginals', 'getDoc', '_getCollection'];
    keysOfStore.forEach(method => {
      store[method] = function () {
        if (wrappedStore[method]) {
          return wrappedStore[method](...arguments);
        }
      };
    });
    self._stores[name] = store;
    const queued = self._updatesForUnknownStores[name];
    if (Array.isArray(queued)) {
      store.beginUpdate(queued.length, false);
      queued.forEach(msg => {
        store.update(msg);
      });
      store.endUpdate();
      delete self._updatesForUnknownStores[name];
    }
    return true;
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.subscribe
   * @summary Subscribe to a record set.  Returns a handle that provides
   * `stop()` and `ready()` methods.
   * @locus Client
   * @param {String} name Name of the subscription.  Matches the name of the
   * server's `publish()` call.
   * @param {EJSONable} [arg1,arg2...] Optional arguments passed to publisher
   * function on server.
   * @param {Function|Object} [callbacks] Optional. May include `onStop`
   * and `onReady` callbacks. If there is an error, it is passed as an
   * argument to `onStop`. If a function is passed instead of an object, it
   * is interpreted as an `onReady` callback.
   */
  subscribe(name /* .. [arguments] .. (callback|callbacks) */) {
    const self = this;
    const params = slice.call(arguments, 1);
    let callbacks = Object.create(null);
    if (params.length) {
      const lastParam = params[params.length - 1];
      if (typeof lastParam === 'function') {
        callbacks.onReady = params.pop();
      } else if (lastParam && [lastParam.onReady,
      // XXX COMPAT WITH 1.0.3.1 onError used to exist, but now we use
      // onStop with an error callback instead.
      lastParam.onError, lastParam.onStop].some(f => typeof f === "function")) {
        callbacks = params.pop();
      }
    }

    // Is there an existing sub with the same name and param, run in an
    // invalidated Computation? This will happen if we are rerunning an
    // existing computation.
    //
    // For example, consider a rerun of:
    //
    //     Tracker.autorun(function () {
    //       Meteor.subscribe("foo", Session.get("foo"));
    //       Meteor.subscribe("bar", Session.get("bar"));
    //     });
    //
    // If "foo" has changed but "bar" has not, we will match the "bar"
    // subcribe to an existing inactive subscription in order to not
    // unsub and resub the subscription unnecessarily.
    //
    // We only look for one such sub; if there are N apparently-identical subs
    // being invalidated, we will require N matching subscribe calls to keep
    // them all active.
    const existing = Object.values(self._subscriptions).find(sub => sub.inactive && sub.name === name && EJSON.equals(sub.params, params));
    let id;
    if (existing) {
      id = existing.id;
      existing.inactive = false; // reactivate

      if (callbacks.onReady) {
        // If the sub is not already ready, replace any ready callback with the
        // one provided now. (It's not really clear what users would expect for
        // an onReady callback inside an autorun; the semantics we provide is
        // that at the time the sub first becomes ready, we call the last
        // onReady callback provided, if any.)
        // If the sub is already ready, run the ready callback right away.
        // It seems that users would expect an onReady callback inside an
        // autorun to trigger once the sub first becomes ready and also
        // when re-subs happens.
        if (existing.ready) {
          callbacks.onReady();
        } else {
          existing.readyCallback = callbacks.onReady;
        }
      }

      // XXX COMPAT WITH 1.0.3.1 we used to have onError but now we call
      // onStop with an optional error argument
      if (callbacks.onError) {
        // Replace existing callback if any, so that errors aren't
        // double-reported.
        existing.errorCallback = callbacks.onError;
      }
      if (callbacks.onStop) {
        existing.stopCallback = callbacks.onStop;
      }
    } else {
      // New sub! Generate an id, save it locally, and send message.
      id = Random.id();
      self._subscriptions[id] = {
        id: id,
        name: name,
        params: EJSON.clone(params),
        inactive: false,
        ready: false,
        readyDeps: new Tracker.Dependency(),
        readyCallback: callbacks.onReady,
        // XXX COMPAT WITH 1.0.3.1 #errorCallback
        errorCallback: callbacks.onError,
        stopCallback: callbacks.onStop,
        connection: self,
        remove() {
          delete this.connection._subscriptions[this.id];
          this.ready && this.readyDeps.changed();
        },
        stop() {
          this.connection._send({
            msg: 'unsub',
            id: id
          });
          this.remove();
          if (callbacks.onStop) {
            callbacks.onStop();
          }
        }
      };
      self._send({
        msg: 'sub',
        id: id,
        name: name,
        params: params
      });
    }

    // return a handle to the application.
    const handle = {
      stop() {
        if (!hasOwn.call(self._subscriptions, id)) {
          return;
        }
        self._subscriptions[id].stop();
      },
      ready() {
        // return false if we've unsubscribed.
        if (!hasOwn.call(self._subscriptions, id)) {
          return false;
        }
        const record = self._subscriptions[id];
        record.readyDeps.depend();
        return record.ready;
      },
      subscriptionId: id
    };
    if (Tracker.active) {
      // We're in a reactive computation, so we'd like to unsubscribe when the
      // computation is invalidated... but not if the rerun just re-subscribes
      // to the same subscription!  When a rerun happens, we use onInvalidate
      // as a change to mark the subscription "inactive" so that it can
      // be reused from the rerun.  If it isn't reused, it's killed from
      // an afterFlush.
      Tracker.onInvalidate(c => {
        if (hasOwn.call(self._subscriptions, id)) {
          self._subscriptions[id].inactive = true;
        }
        Tracker.afterFlush(() => {
          if (hasOwn.call(self._subscriptions, id) && self._subscriptions[id].inactive) {
            handle.stop();
          }
        });
      });
    }
    return handle;
  }

  // options:
  // - onLateError {Function(error)} called if an error was received after the ready event.
  //     (errors received before ready cause an error to be thrown)
  _subscribeAndWait(name, args, options) {
    const self = this;
    const f = new Future();
    let ready = false;
    args = args || [];
    args.push({
      onReady() {
        ready = true;
        f['return']();
      },
      onError(e) {
        if (!ready) f['throw'](e);else options && options.onLateError && options.onLateError(e);
      }
    });
    const handle = self.subscribe.apply(self, [name].concat(args));
    f.wait();
    return handle;
  }
  methods(methods) {
    Object.entries(methods).forEach(_ref => {
      let [name, func] = _ref;
      if (typeof func !== 'function') {
        throw new Error("Method '" + name + "' must be a function");
      }
      if (this._methodHandlers[name]) {
        throw new Error("A method named '" + name + "' is already defined");
      }
      this._methodHandlers[name] = func;
    });
  }
  _getIsSimulation(_ref2) {
    let {
      isFromCallAsync,
      alreadyInSimulation
    } = _ref2;
    if (!isFromCallAsync) {
      return alreadyInSimulation;
    }
    return alreadyInSimulation && DDP._CurrentMethodInvocation._isCallAsyncMethodRunning();
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.call
   * @summary Invokes a method with a sync stub, passing any number of arguments.
   * @locus Anywhere
   * @param {String} name Name of method to invoke
   * @param {EJSONable} [arg1,arg2...] Optional method arguments
   * @param {Function} [asyncCallback] Optional callback, which is called asynchronously with the error or result after the method is complete. If not provided, the method runs synchronously if possible (see below).
   */
  call(name /* .. [arguments] .. callback */) {
    // if it's a function, the last argument is the result callback,
    // not a parameter to the remote method.
    const args = slice.call(arguments, 1);
    let callback;
    if (args.length && typeof args[args.length - 1] === 'function') {
      callback = args.pop();
    }
    return this.apply(name, args, callback);
  }
  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.callAsync
   * @summary Invokes a method with an async stub, passing any number of arguments.
   * @locus Anywhere
   * @param {String} name Name of method to invoke
   * @param {EJSONable} [arg1,arg2...] Optional method arguments
   * @returns {Promise}
   */
  callAsync(name /* .. [arguments] .. */) {
    return Promise.asyncApply(() => {
      const args = slice.call(arguments, 1);
      if (args.length && typeof args[args.length - 1] === 'function') {
        throw new Error("Meteor.callAsync() does not accept a callback. You should 'await' the result, or use .then().");
      }
      /*
      * This is necessary because when you call a Promise.then, you're actually calling a bound function by Meteor.
      *
      * This is done by this code https://github.com/meteor/meteor/blob/17673c66878d3f7b1d564a4215eb0633fa679017/npm-packages/meteor-promise/promise_client.js#L1-L16. (All the logic below can be removed in the future, when we stop overwriting the
      * Promise.)
      *
      * When you call a ".then()", like "Meteor.callAsync().then()", the global context (inside currentValues)
      * will be from the call of Meteor.callAsync(), and not the context after the promise is done.
      *
      * This means that without this code if you call a stub inside the ".then()", this stub will act as a simulation
      * and won't reach the server.
      *
      * Inside the function _getIsSimulation(), if isFromCallAsync is false, we continue to consider just the
      * alreadyInSimulation, otherwise, isFromCallAsync is true, we also check the value of callAsyncMethodRunning (by
      * calling DDP._CurrentMethodInvocation._isCallAsyncMethodRunning()).
      *
      * With this, if a stub is running inside a ".then()", it'll know it's not a simulation, because callAsyncMethodRunning
      * will be false.
      *
      * DDP._CurrentMethodInvocation._set() is important because without it, if you have a code like:
      *
      * Meteor.callAsync("m1").then(() => {
      *   Meteor.callAsync("m2")
      * })
      *
      * The call the method m2 will act as a simulation and won't reach the server. That's why we reset the context here
      * before calling everything else.
      *
      * */
      DDP._CurrentMethodInvocation._set();
      DDP._CurrentMethodInvocation._setCallAsyncMethodRunning(true);
      return new Promise((resolve, reject) => {
        this.applyAsync(name, args, {
          isFromCallAsync: true
        }, (err, result) => {
          DDP._CurrentMethodInvocation._setCallAsyncMethodRunning(false);
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    });
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.apply
   * @summary Invoke a method passing an array of arguments.
   * @locus Anywhere
   * @param {String} name Name of method to invoke
   * @param {EJSONable[]} args Method arguments
   * @param {Object} [options]
   * @param {Boolean} options.wait (Client only) If true, don't send this method until all previous method calls have completed, and don't send any subsequent method calls until this one is completed.
   * @param {Function} options.onResultReceived (Client only) This callback is invoked with the error or result of the method (just like `asyncCallback`) as soon as the error or result is available. The local cache may not yet reflect the writes performed by the method.
   * @param {Boolean} options.noRetry (Client only) if true, don't send this method again on reload, simply call the callback an error with the error code 'invocation-failed'.
   * @param {Boolean} options.throwStubExceptions (Client only) If true, exceptions thrown by method stubs will be thrown instead of logged, and the method will not be invoked on the server.
   * @param {Boolean} options.returnStubValue (Client only) If true then in cases where we would have otherwise discarded the stub's return value and returned undefined, instead we go ahead and return it. Specifically, this is any time other than when (a) we are already inside a stub or (b) we are in Node and no callback was provided. Currently we require this flag to be explicitly passed to reduce the likelihood that stub return values will be confused with server return values; we may improve this in future.
   * @param {Function} [asyncCallback] Optional callback; same semantics as in [`Meteor.call`](#meteor_call).
   */
  apply(name, args, options, callback) {
    const _this$_stubCall = this._stubCall(name, EJSON.clone(args)),
      {
        stubInvocation,
        invocation
      } = _this$_stubCall,
      stubOptions = _objectWithoutProperties(_this$_stubCall, _excluded);
    if (stubOptions.hasStub) {
      if (!this._getIsSimulation({
        alreadyInSimulation: stubOptions.alreadyInSimulation,
        isFromCallAsync: stubOptions.isFromCallAsync
      })) {
        this._saveOriginals();
      }
      try {
        stubOptions.stubReturnValue = DDP._CurrentMethodInvocation.withValue(invocation, stubInvocation);
      } catch (e) {
        stubOptions.exception = e;
      }
    }
    return this._apply(name, stubOptions, args, options, callback);
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.applyAsync
   * @summary Invoke a method passing an array of arguments.
   * @locus Anywhere
   * @param {String} name Name of method to invoke
   * @param {EJSONable[]} args Method arguments
   * @param {Object} [options]
   * @param {Boolean} options.wait (Client only) If true, don't send this method until all previous method calls have completed, and don't send any subsequent method calls until this one is completed.
   * @param {Function} options.onResultReceived (Client only) This callback is invoked with the error or result of the method (just like `asyncCallback`) as soon as the error or result is available. The local cache may not yet reflect the writes performed by the method.
   * @param {Boolean} options.noRetry (Client only) if true, don't send this method again on reload, simply call the callback an error with the error code 'invocation-failed'.
   * @param {Boolean} options.throwStubExceptions (Client only) If true, exceptions thrown by method stubs will be thrown instead of logged, and the method will not be invoked on the server.
   * @param {Boolean} options.returnStubValue (Client only) If true then in cases where we would have otherwise discarded the stub's return value and returned undefined, instead we go ahead and return it. Specifically, this is any time other than when (a) we are already inside a stub or (b) we are in Node and no callback was provided. Currently we require this flag to be explicitly passed to reduce the likelihood that stub return values will be confused with server return values; we may improve this in future.
   * @param {Function} [asyncCallback] Optional callback.
   */
  applyAsync(name, args, options, callback) {
    return Promise.asyncApply(() => {
      const _this$_stubCall2 = this._stubCall(name, EJSON.clone(args), options),
        {
          stubInvocation,
          invocation
        } = _this$_stubCall2,
        stubOptions = _objectWithoutProperties(_this$_stubCall2, _excluded2);
      if (stubOptions.hasStub) {
        if (!this._getIsSimulation({
          alreadyInSimulation: stubOptions.alreadyInSimulation,
          isFromCallAsync: stubOptions.isFromCallAsync
        })) {
          this._saveOriginals();
        }
        try {
          /*
           * The code below follows the same logic as the function withValues().
           *
           * But as the Meteor package is not compiled by ecmascript, it is unable to use newer syntax in the browser,
           * such as, the async/await.
           *
           * So, to keep supporting old browsers, like IE 11, we're creating the logic one level above.
           */
          const currentContext = DDP._CurrentMethodInvocation._setNewContextAndGetCurrent(invocation);
          try {
            const resultOrThenable = stubInvocation();
            const isThenable = resultOrThenable && typeof resultOrThenable.then === 'function';
            if (isThenable) {
              stubOptions.stubReturnValue = Promise.await(resultOrThenable);
            } else {
              stubOptions.stubReturnValue = resultOrThenable;
            }
          } finally {
            DDP._CurrentMethodInvocation._set(currentContext);
          }
        } catch (e) {
          stubOptions.exception = e;
        }
      }
      return this._apply(name, stubOptions, args, options, callback);
    });
  }
  _apply(name, stubCallValue, args, options, callback) {
    const self = this;

    // We were passed 3 arguments. They may be either (name, args, options)
    // or (name, args, callback)
    if (!callback && typeof options === 'function') {
      callback = options;
      options = Object.create(null);
    }
    options = options || Object.create(null);
    if (callback) {
      // XXX would it be better form to do the binding in stream.on,
      // or caller, instead of here?
      // XXX improve error message (and how we report it)
      callback = Meteor.bindEnvironment(callback, "delivering result of invoking '" + name + "'");
    }

    // Keep our args safe from mutation (eg if we don't send the message for a
    // while because of a wait method).
    args = EJSON.clone(args);
    const {
      hasStub,
      exception,
      stubReturnValue,
      alreadyInSimulation,
      randomSeed
    } = stubCallValue;

    // If we're in a simulation, stop and return the result we have,
    // rather than going on to do an RPC. If there was no stub,
    // we'll end up returning undefined.
    if (this._getIsSimulation({
      alreadyInSimulation,
      isFromCallAsync: stubCallValue.isFromCallAsync
    })) {
      if (callback) {
        callback(exception, stubReturnValue);
        return undefined;
      }
      if (exception) throw exception;
      return stubReturnValue;
    }

    // We only create the methodId here because we don't actually need one if
    // we're already in a simulation
    const methodId = '' + self._nextMethodId++;
    if (hasStub) {
      self._retrieveAndStoreOriginals(methodId);
    }

    // Generate the DDP message for the method call. Note that on the client,
    // it is important that the stub have finished before we send the RPC, so
    // that we know we have a complete list of which local documents the stub
    // wrote.
    const message = {
      msg: 'method',
      id: methodId,
      method: name,
      params: args
    };

    // If an exception occurred in a stub, and we're ignoring it
    // because we're doing an RPC and want to use what the server
    // returns instead, log it so the developer knows
    // (unless they explicitly ask to see the error).
    //
    // Tests can set the '_expectedByTest' flag on an exception so it won't
    // go to log.
    if (exception) {
      if (options.throwStubExceptions) {
        throw exception;
      } else if (!exception._expectedByTest) {
        Meteor._debug("Exception while simulating the effect of invoking '" + name + "'", exception);
      }
    }

    // At this point we're definitely doing an RPC, and we're going to
    // return the value of the RPC to the caller.

    // If the caller didn't give a callback, decide what to do.
    let future;
    if (!callback) {
      if (Meteor.isClient) {
        // On the client, we don't have fibers, so we can't block. The
        // only thing we can do is to return undefined and discard the
        // result of the RPC. If an error occurred then print the error
        // to the console.
        callback = err => {
          err && Meteor._debug("Error invoking Method '" + name + "'", err);
        };
      } else {
        // On the server, make the function synchronous. Throw on
        // errors, return on success.
        future = new Future();
        callback = future.resolver();
      }
    }

    // Send the randomSeed only if we used it
    if (randomSeed.value !== null) {
      message.randomSeed = randomSeed.value;
    }
    const methodInvoker = new MethodInvoker({
      methodId,
      callback: callback,
      connection: self,
      onResultReceived: options.onResultReceived,
      wait: !!options.wait,
      message: message,
      noRetry: !!options.noRetry
    });
    if (options.wait) {
      // It's a wait method! Wait methods go in their own block.
      self._outstandingMethodBlocks.push({
        wait: true,
        methods: [methodInvoker]
      });
    } else {
      // Not a wait method. Start a new block if the previous block was a wait
      // block, and add it to the last block of methods.
      if (isEmpty(self._outstandingMethodBlocks) || last(self._outstandingMethodBlocks).wait) {
        self._outstandingMethodBlocks.push({
          wait: false,
          methods: []
        });
      }
      last(self._outstandingMethodBlocks).methods.push(methodInvoker);
    }

    // If we added it to the first block, send it out now.
    if (self._outstandingMethodBlocks.length === 1) methodInvoker.sendMessage();

    // If we're using the default callback on the server,
    // block waiting for the result.
    if (future) {
      return future.wait();
    }
    return options.returnStubValue ? stubReturnValue : undefined;
  }
  _stubCall(name, args, options) {
    // Run the stub, if we have one. The stub is supposed to make some
    // temporary writes to the database to give the user a smooth experience
    // until the actual result of executing the method comes back from the
    // server (whereupon the temporary writes to the database will be reversed
    // during the beginUpdate/endUpdate process.)
    //
    // Normally, we ignore the return value of the stub (even if it is an
    // exception), in favor of the real return value from the server. The
    // exception is if the *caller* is a stub. In that case, we're not going
    // to do a RPC, so we use the return value of the stub as our return
    // value.
    const self = this;
    const enclosing = DDP._CurrentMethodInvocation.get();
    const stub = self._methodHandlers[name];
    const alreadyInSimulation = enclosing === null || enclosing === void 0 ? void 0 : enclosing.isSimulation;
    const isFromCallAsync = enclosing === null || enclosing === void 0 ? void 0 : enclosing._isFromCallAsync;
    const randomSeed = {
      value: null
    };
    const defaultReturn = {
      alreadyInSimulation,
      randomSeed,
      isFromCallAsync
    };
    if (!stub) {
      return _objectSpread(_objectSpread({}, defaultReturn), {}, {
        hasStub: false
      });
    }

    // Lazily generate a randomSeed, only if it is requested by the stub.
    // The random streams only have utility if they're used on both the client
    // and the server; if the client doesn't generate any 'random' values
    // then we don't expect the server to generate any either.
    // Less commonly, the server may perform different actions from the client,
    // and may in fact generate values where the client did not, but we don't
    // have any client-side values to match, so even here we may as well just
    // use a random seed on the server.  In that case, we don't pass the
    // randomSeed to save bandwidth, and we don't even generate it to save a
    // bit of CPU and to avoid consuming entropy.

    const randomSeedGenerator = () => {
      if (randomSeed.value === null) {
        randomSeed.value = DDPCommon.makeRpcSeed(enclosing, name);
      }
      return randomSeed.value;
    };
    const setUserId = userId => {
      self.setUserId(userId);
    };
    const invocation = new DDPCommon.MethodInvocation({
      name,
      isSimulation: true,
      userId: self.userId(),
      isFromCallAsync: options === null || options === void 0 ? void 0 : options.isFromCallAsync,
      setUserId: setUserId,
      randomSeed() {
        return randomSeedGenerator();
      }
    });

    // Note that unlike in the corresponding server code, we never audit
    // that stubs check() their arguments.
    const stubInvocation = () => {
      if (Meteor.isServer) {
        // Because saveOriginals and retrieveOriginals aren't reentrant,
        // don't allow stubs to yield.
        return Meteor._noYieldsAllowed(() => {
          // re-clone, so that the stub can't affect our caller's values
          return stub.apply(invocation, EJSON.clone(args));
        });
      } else {
        return stub.apply(invocation, EJSON.clone(args));
      }
    };
    return _objectSpread(_objectSpread({}, defaultReturn), {}, {
      hasStub: true,
      stubInvocation,
      invocation
    });
  }

  // Before calling a method stub, prepare all stores to track changes and allow
  // _retrieveAndStoreOriginals to get the original versions of changed
  // documents.
  _saveOriginals() {
    if (!this._waitingForQuiescence()) {
      this._flushBufferedWrites();
    }
    Object.values(this._stores).forEach(store => {
      store.saveOriginals();
    });
  }

  // Retrieves the original versions of all documents modified by the stub for
  // method 'methodId' from all stores and saves them to _serverDocuments (keyed
  // by document) and _documentsWrittenByStub (keyed by method ID).
  _retrieveAndStoreOriginals(methodId) {
    const self = this;
    if (self._documentsWrittenByStub[methodId]) throw new Error('Duplicate methodId in _retrieveAndStoreOriginals');
    const docsWritten = [];
    Object.entries(self._stores).forEach(_ref3 => {
      let [collection, store] = _ref3;
      const originals = store.retrieveOriginals();
      // not all stores define retrieveOriginals
      if (!originals) return;
      originals.forEach((doc, id) => {
        docsWritten.push({
          collection,
          id
        });
        if (!hasOwn.call(self._serverDocuments, collection)) {
          self._serverDocuments[collection] = new MongoIDMap();
        }
        const serverDoc = self._serverDocuments[collection].setDefault(id, Object.create(null));
        if (serverDoc.writtenByStubs) {
          // We're not the first stub to write this doc. Just add our method ID
          // to the record.
          serverDoc.writtenByStubs[methodId] = true;
        } else {
          // First stub! Save the original value and our method ID.
          serverDoc.document = doc;
          serverDoc.flushCallbacks = [];
          serverDoc.writtenByStubs = Object.create(null);
          serverDoc.writtenByStubs[methodId] = true;
        }
      });
    });
    if (!isEmpty(docsWritten)) {
      self._documentsWrittenByStub[methodId] = docsWritten;
    }
  }

  // This is very much a private function we use to make the tests
  // take up fewer server resources after they complete.
  _unsubscribeAll() {
    Object.values(this._subscriptions).forEach(sub => {
      // Avoid killing the autoupdate subscription so that developers
      // still get hot code pushes when writing tests.
      //
      // XXX it's a hack to encode knowledge about autoupdate here,
      // but it doesn't seem worth it yet to have a special API for
      // subscriptions to preserve after unit tests.
      if (sub.name !== 'meteor_autoupdate_clientVersions') {
        sub.stop();
      }
    });
  }

  // Sends the DDP stringification of the given message object
  _send(obj) {
    this._stream.send(DDPCommon.stringifyDDP(obj));
  }

  // We detected via DDP-level heartbeats that we've lost the
  // connection.  Unlike `disconnect` or `close`, a lost connection
  // will be automatically retried.
  _lostConnection(error) {
    this._stream._lostConnection(error);
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.status
   * @summary Get the current connection status. A reactive data source.
   * @locus Client
   */
  status() {
    return this._stream.status(...arguments);
  }

  /**
   * @summary Force an immediate reconnection attempt if the client is not connected to the server.
   This method does nothing if the client is already connected.
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.reconnect
   * @locus Client
   */
  reconnect() {
    return this._stream.reconnect(...arguments);
  }

  /**
   * @memberOf Meteor
   * @importFromPackage meteor
   * @alias Meteor.disconnect
   * @summary Disconnect the client from the server.
   * @locus Client
   */
  disconnect() {
    return this._stream.disconnect(...arguments);
  }
  close() {
    return this._stream.disconnect({
      _permanent: true
    });
  }

  ///
  /// Reactive user system
  ///
  userId() {
    if (this._userIdDeps) this._userIdDeps.depend();
    return this._userId;
  }
  setUserId(userId) {
    // Avoid invalidating dependents if setUserId is called with current value.
    if (this._userId === userId) return;
    this._userId = userId;
    if (this._userIdDeps) this._userIdDeps.changed();
  }

  // Returns true if we are in a state after reconnect of waiting for subs to be
  // revived or early methods to finish their data, or we are waiting for a
  // "wait" method to finish.
  _waitingForQuiescence() {
    return !isEmpty(this._subsBeingRevived) || !isEmpty(this._methodsBlockingQuiescence);
  }

  // Returns true if any method whose message has been sent to the server has
  // not yet invoked its user callback.
  _anyMethodsAreOutstanding() {
    const invokers = this._methodInvokers;
    return Object.values(invokers).some(invoker => !!invoker.sentMessage);
  }
  _livedata_connected(msg) {
    const self = this;
    if (self._version !== 'pre1' && self._heartbeatInterval !== 0) {
      self._heartbeat = new DDPCommon.Heartbeat({
        heartbeatInterval: self._heartbeatInterval,
        heartbeatTimeout: self._heartbeatTimeout,
        onTimeout() {
          self._lostConnection(new DDP.ConnectionError('DDP heartbeat timed out'));
        },
        sendPing() {
          self._send({
            msg: 'ping'
          });
        }
      });
      self._heartbeat.start();
    }

    // If this is a reconnect, we'll have to reset all stores.
    if (self._lastSessionId) self._resetStores = true;
    let reconnectedToPreviousSession;
    if (typeof msg.session === 'string') {
      reconnectedToPreviousSession = self._lastSessionId === msg.session;
      self._lastSessionId = msg.session;
    }
    if (reconnectedToPreviousSession) {
      // Successful reconnection -- pick up where we left off.  Note that right
      // now, this never happens: the server never connects us to a previous
      // session, because DDP doesn't provide enough data for the server to know
      // what messages the client has processed. We need to improve DDP to make
      // this possible, at which point we'll probably need more code here.
      return;
    }

    // Server doesn't have our data any more. Re-sync a new session.

    // Forget about messages we were buffering for unknown collections. They'll
    // be resent if still relevant.
    self._updatesForUnknownStores = Object.create(null);
    if (self._resetStores) {
      // Forget about the effects of stubs. We'll be resetting all collections
      // anyway.
      self._documentsWrittenByStub = Object.create(null);
      self._serverDocuments = Object.create(null);
    }

    // Clear _afterUpdateCallbacks.
    self._afterUpdateCallbacks = [];

    // Mark all named subscriptions which are ready (ie, we already called the
    // ready callback) as needing to be revived.
    // XXX We should also block reconnect quiescence until unnamed subscriptions
    //     (eg, autopublish) are done re-publishing to avoid flicker!
    self._subsBeingRevived = Object.create(null);
    Object.entries(self._subscriptions).forEach(_ref4 => {
      let [id, sub] = _ref4;
      if (sub.ready) {
        self._subsBeingRevived[id] = true;
      }
    });

    // Arrange for "half-finished" methods to have their callbacks run, and
    // track methods that were sent on this connection so that we don't
    // quiesce until they are all done.
    //
    // Start by clearing _methodsBlockingQuiescence: methods sent before
    // reconnect don't matter, and any "wait" methods sent on the new connection
    // that we drop here will be restored by the loop below.
    self._methodsBlockingQuiescence = Object.create(null);
    if (self._resetStores) {
      const invokers = self._methodInvokers;
      keys(invokers).forEach(id => {
        const invoker = invokers[id];
        if (invoker.gotResult()) {
          // This method already got its result, but it didn't call its callback
          // because its data didn't become visible. We did not resend the
          // method RPC. We'll call its callback when we get a full quiesce,
          // since that's as close as we'll get to "data must be visible".
          self._afterUpdateCallbacks.push(function () {
            return invoker.dataVisible(...arguments);
          });
        } else if (invoker.sentMessage) {
          // This method has been sent on this connection (maybe as a resend
          // from the last connection, maybe from onReconnect, maybe just very
          // quickly before processing the connected message).
          //
          // We don't need to do anything special to ensure its callbacks get
          // called, but we'll count it as a method which is preventing
          // reconnect quiescence. (eg, it might be a login method that was run
          // from onReconnect, and we don't want to see flicker by seeing a
          // logged-out state.)
          self._methodsBlockingQuiescence[invoker.methodId] = true;
        }
      });
    }
    self._messagesBufferedUntilQuiescence = [];

    // If we're not waiting on any methods or subs, we can reset the stores and
    // call the callbacks immediately.
    if (!self._waitingForQuiescence()) {
      if (self._resetStores) {
        Object.values(self._stores).forEach(store => {
          store.beginUpdate(0, true);
          store.endUpdate();
        });
        self._resetStores = false;
      }
      self._runAfterUpdateCallbacks();
    }
  }
  _processOneDataMessage(msg, updates) {
    const messageType = msg.msg;

    // msg is one of ['added', 'changed', 'removed', 'ready', 'updated']
    if (messageType === 'added') {
      this._process_added(msg, updates);
    } else if (messageType === 'changed') {
      this._process_changed(msg, updates);
    } else if (messageType === 'removed') {
      this._process_removed(msg, updates);
    } else if (messageType === 'ready') {
      this._process_ready(msg, updates);
    } else if (messageType === 'updated') {
      this._process_updated(msg, updates);
    } else if (messageType === 'nosub') {
      // ignore this
    } else {
      Meteor._debug('discarding unknown livedata data message type', msg);
    }
  }
  _livedata_data(msg) {
    const self = this;
    if (self._waitingForQuiescence()) {
      self._messagesBufferedUntilQuiescence.push(msg);
      if (msg.msg === 'nosub') {
        delete self._subsBeingRevived[msg.id];
      }
      if (msg.subs) {
        msg.subs.forEach(subId => {
          delete self._subsBeingRevived[subId];
        });
      }
      if (msg.methods) {
        msg.methods.forEach(methodId => {
          delete self._methodsBlockingQuiescence[methodId];
        });
      }
      if (self._waitingForQuiescence()) {
        return;
      }

      // No methods or subs are blocking quiescence!
      // We'll now process and all of our buffered messages, reset all stores,
      // and apply them all at once.

      const bufferedMessages = self._messagesBufferedUntilQuiescence;
      Object.values(bufferedMessages).forEach(bufferedMessage => {
        self._processOneDataMessage(bufferedMessage, self._bufferedWrites);
      });
      self._messagesBufferedUntilQuiescence = [];
    } else {
      self._processOneDataMessage(msg, self._bufferedWrites);
    }

    // Immediately flush writes when:
    //  1. Buffering is disabled. Or;
    //  2. any non-(added/changed/removed) message arrives.
    const standardWrite = msg.msg === "added" || msg.msg === "changed" || msg.msg === "removed";
    if (self._bufferedWritesInterval === 0 || !standardWrite) {
      self._flushBufferedWrites();
      return;
    }
    if (self._bufferedWritesFlushAt === null) {
      self._bufferedWritesFlushAt = new Date().valueOf() + self._bufferedWritesMaxAge;
    } else if (self._bufferedWritesFlushAt < new Date().valueOf()) {
      self._flushBufferedWrites();
      return;
    }
    if (self._bufferedWritesFlushHandle) {
      clearTimeout(self._bufferedWritesFlushHandle);
    }
    self._bufferedWritesFlushHandle = setTimeout(self.__flushBufferedWrites, self._bufferedWritesInterval);
  }
  _flushBufferedWrites() {
    const self = this;
    if (self._bufferedWritesFlushHandle) {
      clearTimeout(self._bufferedWritesFlushHandle);
      self._bufferedWritesFlushHandle = null;
    }
    self._bufferedWritesFlushAt = null;
    // We need to clear the buffer before passing it to
    //  performWrites. As there's no guarantee that it
    //  will exit cleanly.
    const writes = self._bufferedWrites;
    self._bufferedWrites = Object.create(null);
    self._performWrites(writes);
  }
  _performWrites(updates) {
    const self = this;
    if (self._resetStores || !isEmpty(updates)) {
      // Begin a transactional update of each store.

      Object.entries(self._stores).forEach(_ref5 => {
        let [storeName, store] = _ref5;
        store.beginUpdate(hasOwn.call(updates, storeName) ? updates[storeName].length : 0, self._resetStores);
      });
      self._resetStores = false;
      Object.entries(updates).forEach(_ref6 => {
        let [storeName, updateMessages] = _ref6;
        const store = self._stores[storeName];
        if (store) {
          updateMessages.forEach(updateMessage => {
            store.update(updateMessage);
          });
        } else {
          // Nobody's listening for this data. Queue it up until
          // someone wants it.
          // XXX memory use will grow without bound if you forget to
          // create a collection or just don't care about it... going
          // to have to do something about that.
          const updates = self._updatesForUnknownStores;
          if (!hasOwn.call(updates, storeName)) {
            updates[storeName] = [];
          }
          updates[storeName].push(...updateMessages);
        }
      });

      // End update transaction.
      Object.values(self._stores).forEach(store => {
        store.endUpdate();
      });
    }
    self._runAfterUpdateCallbacks();
  }

  // Call any callbacks deferred with _runWhenAllServerDocsAreFlushed whose
  // relevant docs have been flushed, as well as dataVisible callbacks at
  // reconnect-quiescence time.
  _runAfterUpdateCallbacks() {
    const self = this;
    const callbacks = self._afterUpdateCallbacks;
    self._afterUpdateCallbacks = [];
    callbacks.forEach(c => {
      c();
    });
  }
  _pushUpdate(updates, collection, msg) {
    if (!hasOwn.call(updates, collection)) {
      updates[collection] = [];
    }
    updates[collection].push(msg);
  }
  _getServerDoc(collection, id) {
    const self = this;
    if (!hasOwn.call(self._serverDocuments, collection)) {
      return null;
    }
    const serverDocsForCollection = self._serverDocuments[collection];
    return serverDocsForCollection.get(id) || null;
  }
  _process_added(msg, updates) {
    const self = this;
    const id = MongoID.idParse(msg.id);
    const serverDoc = self._getServerDoc(msg.collection, id);
    if (serverDoc) {
      // Some outstanding stub wrote here.
      const isExisting = serverDoc.document !== undefined;
      serverDoc.document = msg.fields || Object.create(null);
      serverDoc.document._id = id;
      if (self._resetStores) {
        // During reconnect the server is sending adds for existing ids.
        // Always push an update so that document stays in the store after
        // reset. Use current version of the document for this update, so
        // that stub-written values are preserved.
        const currentDoc = self._stores[msg.collection].getDoc(msg.id);
        if (currentDoc !== undefined) msg.fields = currentDoc;
        self._pushUpdate(updates, msg.collection, msg);
      } else if (isExisting) {
        throw new Error('Server sent add for existing id: ' + msg.id);
      }
    } else {
      self._pushUpdate(updates, msg.collection, msg);
    }
  }
  _process_changed(msg, updates) {
    const self = this;
    const serverDoc = self._getServerDoc(msg.collection, MongoID.idParse(msg.id));
    if (serverDoc) {
      if (serverDoc.document === undefined) throw new Error('Server sent changed for nonexisting id: ' + msg.id);
      DiffSequence.applyChanges(serverDoc.document, msg.fields);
    } else {
      self._pushUpdate(updates, msg.collection, msg);
    }
  }
  _process_removed(msg, updates) {
    const self = this;
    const serverDoc = self._getServerDoc(msg.collection, MongoID.idParse(msg.id));
    if (serverDoc) {
      // Some outstanding stub wrote here.
      if (serverDoc.document === undefined) throw new Error('Server sent removed for nonexisting id:' + msg.id);
      serverDoc.document = undefined;
    } else {
      self._pushUpdate(updates, msg.collection, {
        msg: 'removed',
        collection: msg.collection,
        id: msg.id
      });
    }
  }
  _process_updated(msg, updates) {
    const self = this;
    // Process "method done" messages.

    msg.methods.forEach(methodId => {
      const docs = self._documentsWrittenByStub[methodId] || {};
      Object.values(docs).forEach(written => {
        const serverDoc = self._getServerDoc(written.collection, written.id);
        if (!serverDoc) {
          throw new Error('Lost serverDoc for ' + JSON.stringify(written));
        }
        if (!serverDoc.writtenByStubs[methodId]) {
          throw new Error('Doc ' + JSON.stringify(written) + ' not written by  method ' + methodId);
        }
        delete serverDoc.writtenByStubs[methodId];
        if (isEmpty(serverDoc.writtenByStubs)) {
          // All methods whose stubs wrote this method have completed! We can
          // now copy the saved document to the database (reverting the stub's
          // change if the server did not write to this object, or applying the
          // server's writes if it did).

          // This is a fake ddp 'replace' message.  It's just for talking
          // between livedata connections and minimongo.  (We have to stringify
          // the ID because it's supposed to look like a wire message.)
          self._pushUpdate(updates, written.collection, {
            msg: 'replace',
            id: MongoID.idStringify(written.id),
            replace: serverDoc.document
          });
          // Call all flush callbacks.

          serverDoc.flushCallbacks.forEach(c => {
            c();
          });

          // Delete this completed serverDocument. Don't bother to GC empty
          // IdMaps inside self._serverDocuments, since there probably aren't
          // many collections and they'll be written repeatedly.
          self._serverDocuments[written.collection].remove(written.id);
        }
      });
      delete self._documentsWrittenByStub[methodId];

      // We want to call the data-written callback, but we can't do so until all
      // currently buffered messages are flushed.
      const callbackInvoker = self._methodInvokers[methodId];
      if (!callbackInvoker) {
        throw new Error('No callback invoker for method ' + methodId);
      }
      self._runWhenAllServerDocsAreFlushed(function () {
        return callbackInvoker.dataVisible(...arguments);
      });
    });
  }
  _process_ready(msg, updates) {
    const self = this;
    // Process "sub ready" messages. "sub ready" messages don't take effect
    // until all current server documents have been flushed to the local
    // database. We can use a write fence to implement this.

    msg.subs.forEach(subId => {
      self._runWhenAllServerDocsAreFlushed(() => {
        const subRecord = self._subscriptions[subId];
        // Did we already unsubscribe?
        if (!subRecord) return;
        // Did we already receive a ready message? (Oops!)
        if (subRecord.ready) return;
        subRecord.ready = true;
        subRecord.readyCallback && subRecord.readyCallback();
        subRecord.readyDeps.changed();
      });
    });
  }

  // Ensures that "f" will be called after all documents currently in
  // _serverDocuments have been written to the local cache. f will not be called
  // if the connection is lost before then!
  _runWhenAllServerDocsAreFlushed(f) {
    const self = this;
    const runFAfterUpdates = () => {
      self._afterUpdateCallbacks.push(f);
    };
    let unflushedServerDocCount = 0;
    const onServerDocFlush = () => {
      --unflushedServerDocCount;
      if (unflushedServerDocCount === 0) {
        // This was the last doc to flush! Arrange to run f after the updates
        // have been applied.
        runFAfterUpdates();
      }
    };
    Object.values(self._serverDocuments).forEach(serverDocuments => {
      serverDocuments.forEach(serverDoc => {
        const writtenByStubForAMethodWithSentMessage = keys(serverDoc.writtenByStubs).some(methodId => {
          const invoker = self._methodInvokers[methodId];
          return invoker && invoker.sentMessage;
        });
        if (writtenByStubForAMethodWithSentMessage) {
          ++unflushedServerDocCount;
          serverDoc.flushCallbacks.push(onServerDocFlush);
        }
      });
    });
    if (unflushedServerDocCount === 0) {
      // There aren't any buffered docs --- we can call f as soon as the current
      // round of updates is applied!
      runFAfterUpdates();
    }
  }
  _livedata_nosub(msg) {
    const self = this;

    // First pass it through _livedata_data, which only uses it to help get
    // towards quiescence.
    self._livedata_data(msg);

    // Do the rest of our processing immediately, with no
    // buffering-until-quiescence.

    // we weren't subbed anyway, or we initiated the unsub.
    if (!hasOwn.call(self._subscriptions, msg.id)) {
      return;
    }

    // XXX COMPAT WITH 1.0.3.1 #errorCallback
    const errorCallback = self._subscriptions[msg.id].errorCallback;
    const stopCallback = self._subscriptions[msg.id].stopCallback;
    self._subscriptions[msg.id].remove();
    const meteorErrorFromMsg = msgArg => {
      return msgArg && msgArg.error && new Meteor.Error(msgArg.error.error, msgArg.error.reason, msgArg.error.details);
    };

    // XXX COMPAT WITH 1.0.3.1 #errorCallback
    if (errorCallback && msg.error) {
      errorCallback(meteorErrorFromMsg(msg));
    }
    if (stopCallback) {
      stopCallback(meteorErrorFromMsg(msg));
    }
  }
  _livedata_result(msg) {
    // id, result or error. error has error (code), reason, details

    const self = this;

    // Lets make sure there are no buffered writes before returning result.
    if (!isEmpty(self._bufferedWrites)) {
      self._flushBufferedWrites();
    }

    // find the outstanding request
    // should be O(1) in nearly all realistic use cases
    if (isEmpty(self._outstandingMethodBlocks)) {
      Meteor._debug('Received method result but no methods outstanding');
      return;
    }
    const currentMethodBlock = self._outstandingMethodBlocks[0].methods;
    let i;
    const m = currentMethodBlock.find((method, idx) => {
      const found = method.methodId === msg.id;
      if (found) i = idx;
      return found;
    });
    if (!m) {
      Meteor._debug("Can't match method response to original method call", msg);
      return;
    }

    // Remove from current method block. This may leave the block empty, but we
    // don't move on to the next block until the callback has been delivered, in
    // _outstandingMethodFinished.
    currentMethodBlock.splice(i, 1);
    if (hasOwn.call(msg, 'error')) {
      m.receiveResult(new Meteor.Error(msg.error.error, msg.error.reason, msg.error.details));
    } else {
      // msg.result may be undefined if the method didn't return a
      // value
      m.receiveResult(undefined, msg.result);
    }
  }

  // Called by MethodInvoker after a method's callback is invoked.  If this was
  // the last outstanding method in the current block, runs the next block. If
  // there are no more methods, consider accepting a hot code push.
  _outstandingMethodFinished() {
    const self = this;
    if (self._anyMethodsAreOutstanding()) return;

    // No methods are outstanding. This should mean that the first block of
    // methods is empty. (Or it might not exist, if this was a method that
    // half-finished before disconnect/reconnect.)
    if (!isEmpty(self._outstandingMethodBlocks)) {
      const firstBlock = self._outstandingMethodBlocks.shift();
      if (!isEmpty(firstBlock.methods)) throw new Error('No methods outstanding but nonempty block: ' + JSON.stringify(firstBlock));

      // Send the outstanding methods now in the first block.
      if (!isEmpty(self._outstandingMethodBlocks)) self._sendOutstandingMethods();
    }

    // Maybe accept a hot code push.
    self._maybeMigrate();
  }

  // Sends messages for all the methods in the first block in
  // _outstandingMethodBlocks.
  _sendOutstandingMethods() {
    const self = this;
    if (isEmpty(self._outstandingMethodBlocks)) {
      return;
    }
    self._outstandingMethodBlocks[0].methods.forEach(m => {
      m.sendMessage();
    });
  }
  _livedata_error(msg) {
    Meteor._debug('Received error from server: ', msg.reason);
    if (msg.offendingMessage) Meteor._debug('For: ', msg.offendingMessage);
  }
  _callOnReconnectAndSendAppropriateOutstandingMethods() {
    const self = this;
    const oldOutstandingMethodBlocks = self._outstandingMethodBlocks;
    self._outstandingMethodBlocks = [];
    self.onReconnect && self.onReconnect();
    DDP._reconnectHook.each(callback => {
      callback(self);
      return true;
    });
    if (isEmpty(oldOutstandingMethodBlocks)) return;

    // We have at least one block worth of old outstanding methods to try
    // again. First: did onReconnect actually send anything? If not, we just
    // restore all outstanding methods and run the first block.
    if (isEmpty(self._outstandingMethodBlocks)) {
      self._outstandingMethodBlocks = oldOutstandingMethodBlocks;
      self._sendOutstandingMethods();
      return;
    }

    // OK, there are blocks on both sides. Special case: merge the last block of
    // the reconnect methods with the first block of the original methods, if
    // neither of them are "wait" blocks.
    if (!last(self._outstandingMethodBlocks).wait && !oldOutstandingMethodBlocks[0].wait) {
      oldOutstandingMethodBlocks[0].methods.forEach(m => {
        last(self._outstandingMethodBlocks).methods.push(m);

        // If this "last block" is also the first block, send the message.
        if (self._outstandingMethodBlocks.length === 1) {
          m.sendMessage();
        }
      });
      oldOutstandingMethodBlocks.shift();
    }

    // Now add the rest of the original blocks on.
    self._outstandingMethodBlocks.push(...oldOutstandingMethodBlocks);
  }

  // We can accept a hot code push if there are no methods in flight.
  _readyToMigrate() {
    return isEmpty(this._methodInvokers);
  }

  // If we were blocking a migration, see if it's now possible to continue.
  // Call whenever the set of outstanding/blocked methods shrinks.
  _maybeMigrate() {
    const self = this;
    if (self._retryMigrate && self._readyToMigrate()) {
      self._retryMigrate();
      self._retryMigrate = null;
    }
  }
  onMessage(raw_msg) {
    let msg;
    try {
      msg = DDPCommon.parseDDP(raw_msg);
    } catch (e) {
      Meteor._debug('Exception while parsing DDP', e);
      return;
    }

    // Any message counts as receiving a pong, as it demonstrates that
    // the server is still alive.
    if (this._heartbeat) {
      this._heartbeat.messageReceived();
    }
    if (msg === null || !msg.msg) {
      if (!msg || !msg.testMessageOnConnect) {
        if (Object.keys(msg).length === 1 && msg.server_id) return;
        Meteor._debug('discarding invalid livedata message', msg);
      }
      return;
    }
    if (msg.msg === 'connected') {
      this._version = this._versionSuggestion;
      this._livedata_connected(msg);
      this.options.onConnected();
    } else if (msg.msg === 'failed') {
      if (this._supportedDDPVersions.indexOf(msg.version) >= 0) {
        this._versionSuggestion = msg.version;
        this._stream.reconnect({
          _force: true
        });
      } else {
        const description = 'DDP version negotiation failed; server requested version ' + msg.version;
        this._stream.disconnect({
          _permanent: true,
          _error: description
        });
        this.options.onDDPVersionNegotiationFailure(description);
      }
    } else if (msg.msg === 'ping' && this.options.respondToPings) {
      this._send({
        msg: 'pong',
        id: msg.id
      });
    } else if (msg.msg === 'pong') {
      // noop, as we assume everything's a pong
    } else if (['added', 'changed', 'removed', 'ready', 'updated'].includes(msg.msg)) {
      this._livedata_data(msg);
    } else if (msg.msg === 'nosub') {
      this._livedata_nosub(msg);
    } else if (msg.msg === 'result') {
      this._livedata_result(msg);
    } else if (msg.msg === 'error') {
      this._livedata_error(msg);
    } else {
      Meteor._debug('discarding unknown livedata message type', msg);
    }
  }
  onReset() {
    // Send a connect message at the beginning of the stream.
    // NOTE: reset is called even on the first connection, so this is
    // the only place we send this message.
    const msg = {
      msg: 'connect'
    };
    if (this._lastSessionId) msg.session = this._lastSessionId;
    msg.version = this._versionSuggestion || this._supportedDDPVersions[0];
    this._versionSuggestion = msg.version;
    msg.support = this._supportedDDPVersions;
    this._send(msg);

    // Mark non-retry calls as failed. This has to be done early as getting these methods out of the
    // current block is pretty important to making sure that quiescence is properly calculated, as
    // well as possibly moving on to another useful block.

    // Only bother testing if there is an outstandingMethodBlock (there might not be, especially if
    // we are connecting for the first time.
    if (this._outstandingMethodBlocks.length > 0) {
      // If there is an outstanding method block, we only care about the first one as that is the
      // one that could have already sent messages with no response, that are not allowed to retry.
      const currentMethodBlock = this._outstandingMethodBlocks[0].methods;
      this._outstandingMethodBlocks[0].methods = currentMethodBlock.filter(methodInvoker => {
        // Methods with 'noRetry' option set are not allowed to re-send after
        // recovering dropped connection.
        if (methodInvoker.sentMessage && methodInvoker.noRetry) {
          // Make sure that the method is told that it failed.
          methodInvoker.receiveResult(new Meteor.Error('invocation-failed', 'Method invocation might have failed due to dropped connection. ' + 'Failing because `noRetry` option was passed to Meteor.apply.'));
        }

        // Only keep a method if it wasn't sent or it's allowed to retry.
        // This may leave the block empty, but we don't move on to the next
        // block until the callback has been delivered, in _outstandingMethodFinished.
        return !(methodInvoker.sentMessage && methodInvoker.noRetry);
      });
    }

    // Now, to minimize setup latency, go ahead and blast out all of
    // our pending methods ands subscriptions before we've even taken
    // the necessary RTT to know if we successfully reconnected. (1)
    // They're supposed to be idempotent, and where they are not,
    // they can block retry in apply; (2) even if we did reconnect,
    // we're not sure what messages might have gotten lost
    // (in either direction) since we were disconnected (TCP being
    // sloppy about that.)

    // If the current block of methods all got their results (but didn't all get
    // their data visible), discard the empty block now.
    if (this._outstandingMethodBlocks.length > 0 && this._outstandingMethodBlocks[0].methods.length === 0) {
      this._outstandingMethodBlocks.shift();
    }

    // Mark all messages as unsent, they have not yet been sent on this
    // connection.
    keys(this._methodInvokers).forEach(id => {
      this._methodInvokers[id].sentMessage = false;
    });

    // If an `onReconnect` handler is set, call it first. Go through
    // some hoops to ensure that methods that are called from within
    // `onReconnect` get executed _before_ ones that were originally
    // outstanding (since `onReconnect` is used to re-establish auth
    // certificates)
    this._callOnReconnectAndSendAppropriateOutstandingMethods();

    // add new subscriptions at the end. this way they take effect after
    // the handlers and we don't see flicker.
    Object.entries(this._subscriptions).forEach(_ref7 => {
      let [id, sub] = _ref7;
      this._send({
        msg: 'sub',
        id: id,
        name: sub.name,
        params: sub.params
      });
    });
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ddp-client/common/namespace.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DDP: () => DDP
});
let DDPCommon;
module.link("meteor/ddp-common", {
  DDPCommon(v) {
    DDPCommon = v;
  }
}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 1);
let Connection;
module.link("./livedata_connection.js", {
  Connection(v) {
    Connection = v;
  }
}, 2);
// This array allows the `_allSubscriptionsReady` method below, which
// is used by the `spiderable` package, to keep track of whether all
// data is ready.
const allConnections = [];

/**
 * @namespace DDP
 * @summary Namespace for DDP-related methods/classes.
 */
const DDP = {};
// This is private but it's used in a few places. accounts-base uses
// it to get the current user. Meteor.setTimeout and friends clear
// it. We can probably find a better way to factor this.
DDP._CurrentMethodInvocation = new Meteor.EnvironmentVariable();
DDP._CurrentPublicationInvocation = new Meteor.EnvironmentVariable();

// XXX: Keep DDP._CurrentInvocation for backwards-compatibility.
DDP._CurrentInvocation = DDP._CurrentMethodInvocation;

// This is passed into a weird `makeErrorType` function that expects its thing
// to be a constructor
function connectionErrorConstructor(message) {
  this.message = message;
}
DDP.ConnectionError = Meteor.makeErrorType('DDP.ConnectionError', connectionErrorConstructor);
DDP.ForcedReconnectError = Meteor.makeErrorType('DDP.ForcedReconnectError', () => {});

// Returns the named sequence of pseudo-random values.
// The scope will be DDP._CurrentMethodInvocation.get(), so the stream will produce
// consistent values for method calls on the client and server.
DDP.randomStream = name => {
  const scope = DDP._CurrentMethodInvocation.get();
  return DDPCommon.RandomStream.get(scope, name);
};

// @param url {String} URL to Meteor app,
//     e.g.:
//     "subdomain.meteor.com",
//     "http://subdomain.meteor.com",
//     "/",
//     "ddp+sockjs://ddp--****-foo.meteor.com/sockjs"

/**
 * @summary Connect to the server of a different Meteor application to subscribe to its document sets and invoke its remote methods.
 * @locus Anywhere
 * @param {String} url The URL of another Meteor application.
 * @param {Object} [options]
 * @param {Boolean} options.reloadWithOutstanding is it OK to reload if there are outstanding methods?
 * @param {Object} options.headers extra headers to send on the websockets connection, for server-to-server DDP only
 * @param {Object} options._sockjsOptions Specifies options to pass through to the sockjs client
 * @param {Function} options.onDDPNegotiationVersionFailure callback when version negotiation fails.
 */
DDP.connect = (url, options) => {
  const ret = new Connection(url, options);
  allConnections.push(ret); // hack. see below.
  return ret;
};
DDP._reconnectHook = new Hook({
  bindEnvironment: false
});

/**
 * @summary Register a function to call as the first step of
 * reconnecting. This function can call methods which will be executed before
 * any other outstanding methods. For example, this can be used to re-establish
 * the appropriate authentication context on the connection.
 * @locus Anywhere
 * @param {Function} callback The function to call. It will be called with a
 * single argument, the [connection object](#ddp_connect) that is reconnecting.
 */
DDP.onReconnect = callback => DDP._reconnectHook.register(callback);

// Hack for `spiderable` package: a way to see if the page is done
// loading all the data it needs.
//
DDP._allSubscriptionsReady = () => allConnections.every(conn => Object.values(conn._subscriptions).every(sub => sub.ready));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/ddp-client/server/server.js");

/* Exports */
Package._define("ddp-client", exports, {
  DDP: DDP
});

})();

//# sourceURL=meteor://💻app/packages/ddp-client.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZGRwLWNsaWVudC9zZXJ2ZXIvc2VydmVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY2xpZW50L2NvbW1vbi9NZXRob2RJbnZva2VyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY2xpZW50L2NvbW1vbi9saXZlZGF0YV9jb25uZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY2xpZW50L2NvbW1vbi9uYW1lc3BhY2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwibGluayIsIkREUCIsImV4cG9ydCIsImRlZmF1bHQiLCJNZXRob2RJbnZva2VyIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwibWV0aG9kSWQiLCJzZW50TWVzc2FnZSIsIl9jYWxsYmFjayIsImNhbGxiYWNrIiwiX2Nvbm5lY3Rpb24iLCJjb25uZWN0aW9uIiwiX21lc3NhZ2UiLCJtZXNzYWdlIiwiX29uUmVzdWx0UmVjZWl2ZWQiLCJvblJlc3VsdFJlY2VpdmVkIiwiX3dhaXQiLCJ3YWl0Iiwibm9SZXRyeSIsIl9tZXRob2RSZXN1bHQiLCJfZGF0YVZpc2libGUiLCJfbWV0aG9kSW52b2tlcnMiLCJzZW5kTWVzc2FnZSIsImdvdFJlc3VsdCIsIkVycm9yIiwiX21ldGhvZHNCbG9ja2luZ1F1aWVzY2VuY2UiLCJfc2VuZCIsIl9tYXliZUludm9rZUNhbGxiYWNrIiwiX291dHN0YW5kaW5nTWV0aG9kRmluaXNoZWQiLCJyZWNlaXZlUmVzdWx0IiwiZXJyIiwicmVzdWx0IiwiZGF0YVZpc2libGUiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJ2IiwiX29iamVjdFNwcmVhZCIsIkNvbm5lY3Rpb24iLCJNZXRlb3IiLCJERFBDb21tb24iLCJUcmFja2VyIiwiRUpTT04iLCJSYW5kb20iLCJIb29rIiwiTW9uZ29JRCIsImhhc093biIsInNsaWNlIiwia2V5cyIsImlzRW1wdHkiLCJsYXN0IiwiRmliZXIiLCJGdXR1cmUiLCJpc1NlcnZlciIsIk5wbSIsInJlcXVpcmUiLCJNb25nb0lETWFwIiwiSWRNYXAiLCJpZFN0cmluZ2lmeSIsImlkUGFyc2UiLCJ1cmwiLCJzZWxmIiwib25Db25uZWN0ZWQiLCJvbkREUFZlcnNpb25OZWdvdGlhdGlvbkZhaWx1cmUiLCJkZXNjcmlwdGlvbiIsIl9kZWJ1ZyIsImhlYXJ0YmVhdEludGVydmFsIiwiaGVhcnRiZWF0VGltZW91dCIsIm5wbUZheWVPcHRpb25zIiwiT2JqZWN0IiwiY3JlYXRlIiwicmVsb2FkV2l0aE91dHN0YW5kaW5nIiwic3VwcG9ydGVkRERQVmVyc2lvbnMiLCJTVVBQT1JURURfRERQX1ZFUlNJT05TIiwicmV0cnkiLCJyZXNwb25kVG9QaW5ncyIsImJ1ZmZlcmVkV3JpdGVzSW50ZXJ2YWwiLCJidWZmZXJlZFdyaXRlc01heEFnZSIsIm9uUmVjb25uZWN0IiwiX3N0cmVhbSIsIkNsaWVudFN0cmVhbSIsIkNvbm5lY3Rpb25FcnJvciIsImhlYWRlcnMiLCJfc29ja2pzT3B0aW9ucyIsIl9kb250UHJpbnRFcnJvcnMiLCJjb25uZWN0VGltZW91dE1zIiwiX2xhc3RTZXNzaW9uSWQiLCJfdmVyc2lvblN1Z2dlc3Rpb24iLCJfdmVyc2lvbiIsIl9zdG9yZXMiLCJfbWV0aG9kSGFuZGxlcnMiLCJfbmV4dE1ldGhvZElkIiwiX3N1cHBvcnRlZEREUFZlcnNpb25zIiwiX2hlYXJ0YmVhdEludGVydmFsIiwiX2hlYXJ0YmVhdFRpbWVvdXQiLCJfb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MiLCJfZG9jdW1lbnRzV3JpdHRlbkJ5U3R1YiIsIl9zZXJ2ZXJEb2N1bWVudHMiLCJfYWZ0ZXJVcGRhdGVDYWxsYmFja3MiLCJfbWVzc2FnZXNCdWZmZXJlZFVudGlsUXVpZXNjZW5jZSIsIl9zdWJzQmVpbmdSZXZpdmVkIiwiX3Jlc2V0U3RvcmVzIiwiX3VwZGF0ZXNGb3JVbmtub3duU3RvcmVzIiwiX3JldHJ5TWlncmF0ZSIsIl9fZmx1c2hCdWZmZXJlZFdyaXRlcyIsImJpbmRFbnZpcm9ubWVudCIsIl9mbHVzaEJ1ZmZlcmVkV3JpdGVzIiwiX2J1ZmZlcmVkV3JpdGVzIiwiX2J1ZmZlcmVkV3JpdGVzRmx1c2hBdCIsIl9idWZmZXJlZFdyaXRlc0ZsdXNoSGFuZGxlIiwiX2J1ZmZlcmVkV3JpdGVzSW50ZXJ2YWwiLCJfYnVmZmVyZWRXcml0ZXNNYXhBZ2UiLCJfc3Vic2NyaXB0aW9ucyIsIl91c2VySWQiLCJfdXNlcklkRGVwcyIsIkRlcGVuZGVuY3kiLCJpc0NsaWVudCIsIlBhY2thZ2UiLCJyZWxvYWQiLCJSZWxvYWQiLCJfb25NaWdyYXRlIiwiX3JlYWR5VG9NaWdyYXRlIiwib25EaXNjb25uZWN0IiwiX2hlYXJ0YmVhdCIsInN0b3AiLCJvbiIsIm9uTWVzc2FnZSIsImJpbmQiLCJvblJlc2V0IiwicmVnaXN0ZXJTdG9yZSIsIm5hbWUiLCJ3cmFwcGVkU3RvcmUiLCJzdG9yZSIsImtleXNPZlN0b3JlIiwiZm9yRWFjaCIsIm1ldGhvZCIsImFyZ3VtZW50cyIsInF1ZXVlZCIsIkFycmF5IiwiaXNBcnJheSIsImJlZ2luVXBkYXRlIiwibGVuZ3RoIiwibXNnIiwidXBkYXRlIiwiZW5kVXBkYXRlIiwic3Vic2NyaWJlIiwicGFyYW1zIiwiY2FsbCIsImNhbGxiYWNrcyIsImxhc3RQYXJhbSIsIm9uUmVhZHkiLCJwb3AiLCJvbkVycm9yIiwib25TdG9wIiwic29tZSIsImYiLCJleGlzdGluZyIsInZhbHVlcyIsImZpbmQiLCJzdWIiLCJpbmFjdGl2ZSIsImVxdWFscyIsImlkIiwicmVhZHkiLCJyZWFkeUNhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInN0b3BDYWxsYmFjayIsImNsb25lIiwicmVhZHlEZXBzIiwicmVtb3ZlIiwiY2hhbmdlZCIsImhhbmRsZSIsInJlY29yZCIsImRlcGVuZCIsInN1YnNjcmlwdGlvbklkIiwiYWN0aXZlIiwib25JbnZhbGlkYXRlIiwiYyIsImFmdGVyRmx1c2giLCJfc3Vic2NyaWJlQW5kV2FpdCIsImFyZ3MiLCJwdXNoIiwiZSIsIm9uTGF0ZUVycm9yIiwiYXBwbHkiLCJjb25jYXQiLCJtZXRob2RzIiwiZW50cmllcyIsIl9yZWYiLCJmdW5jIiwiX2dldElzU2ltdWxhdGlvbiIsIl9yZWYyIiwiaXNGcm9tQ2FsbEFzeW5jIiwiYWxyZWFkeUluU2ltdWxhdGlvbiIsIl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbiIsIl9pc0NhbGxBc3luY01ldGhvZFJ1bm5pbmciLCJjYWxsQXN5bmMiLCJQcm9taXNlIiwiYXN5bmNBcHBseSIsIl9zZXQiLCJfc2V0Q2FsbEFzeW5jTWV0aG9kUnVubmluZyIsInJlc29sdmUiLCJyZWplY3QiLCJhcHBseUFzeW5jIiwiX3RoaXMkX3N0dWJDYWxsIiwiX3N0dWJDYWxsIiwic3R1Ykludm9jYXRpb24iLCJpbnZvY2F0aW9uIiwic3R1Yk9wdGlvbnMiLCJfZXhjbHVkZWQiLCJoYXNTdHViIiwiX3NhdmVPcmlnaW5hbHMiLCJzdHViUmV0dXJuVmFsdWUiLCJ3aXRoVmFsdWUiLCJleGNlcHRpb24iLCJfYXBwbHkiLCJfdGhpcyRfc3R1YkNhbGwyIiwiX2V4Y2x1ZGVkMiIsImN1cnJlbnRDb250ZXh0IiwiX3NldE5ld0NvbnRleHRBbmRHZXRDdXJyZW50IiwicmVzdWx0T3JUaGVuYWJsZSIsImlzVGhlbmFibGUiLCJ0aGVuIiwiYXdhaXQiLCJzdHViQ2FsbFZhbHVlIiwicmFuZG9tU2VlZCIsInVuZGVmaW5lZCIsIl9yZXRyaWV2ZUFuZFN0b3JlT3JpZ2luYWxzIiwidGhyb3dTdHViRXhjZXB0aW9ucyIsIl9leHBlY3RlZEJ5VGVzdCIsImZ1dHVyZSIsInJlc29sdmVyIiwidmFsdWUiLCJtZXRob2RJbnZva2VyIiwicmV0dXJuU3R1YlZhbHVlIiwiZW5jbG9zaW5nIiwiZ2V0Iiwic3R1YiIsImlzU2ltdWxhdGlvbiIsIl9pc0Zyb21DYWxsQXN5bmMiLCJkZWZhdWx0UmV0dXJuIiwicmFuZG9tU2VlZEdlbmVyYXRvciIsIm1ha2VScGNTZWVkIiwic2V0VXNlcklkIiwidXNlcklkIiwiTWV0aG9kSW52b2NhdGlvbiIsIl9ub1lpZWxkc0FsbG93ZWQiLCJfd2FpdGluZ0ZvclF1aWVzY2VuY2UiLCJzYXZlT3JpZ2luYWxzIiwiZG9jc1dyaXR0ZW4iLCJfcmVmMyIsImNvbGxlY3Rpb24iLCJvcmlnaW5hbHMiLCJyZXRyaWV2ZU9yaWdpbmFscyIsImRvYyIsInNlcnZlckRvYyIsInNldERlZmF1bHQiLCJ3cml0dGVuQnlTdHVicyIsImRvY3VtZW50IiwiZmx1c2hDYWxsYmFja3MiLCJfdW5zdWJzY3JpYmVBbGwiLCJvYmoiLCJzZW5kIiwic3RyaW5naWZ5RERQIiwiX2xvc3RDb25uZWN0aW9uIiwiZXJyb3IiLCJzdGF0dXMiLCJyZWNvbm5lY3QiLCJkaXNjb25uZWN0IiwiY2xvc2UiLCJfcGVybWFuZW50IiwiX2FueU1ldGhvZHNBcmVPdXRzdGFuZGluZyIsImludm9rZXJzIiwiaW52b2tlciIsIl9saXZlZGF0YV9jb25uZWN0ZWQiLCJIZWFydGJlYXQiLCJvblRpbWVvdXQiLCJzZW5kUGluZyIsInN0YXJ0IiwicmVjb25uZWN0ZWRUb1ByZXZpb3VzU2Vzc2lvbiIsInNlc3Npb24iLCJfcmVmNCIsIl9ydW5BZnRlclVwZGF0ZUNhbGxiYWNrcyIsIl9wcm9jZXNzT25lRGF0YU1lc3NhZ2UiLCJ1cGRhdGVzIiwibWVzc2FnZVR5cGUiLCJfcHJvY2Vzc19hZGRlZCIsIl9wcm9jZXNzX2NoYW5nZWQiLCJfcHJvY2Vzc19yZW1vdmVkIiwiX3Byb2Nlc3NfcmVhZHkiLCJfcHJvY2Vzc191cGRhdGVkIiwiX2xpdmVkYXRhX2RhdGEiLCJzdWJzIiwic3ViSWQiLCJidWZmZXJlZE1lc3NhZ2VzIiwiYnVmZmVyZWRNZXNzYWdlIiwic3RhbmRhcmRXcml0ZSIsIkRhdGUiLCJ2YWx1ZU9mIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIndyaXRlcyIsIl9wZXJmb3JtV3JpdGVzIiwiX3JlZjUiLCJzdG9yZU5hbWUiLCJfcmVmNiIsInVwZGF0ZU1lc3NhZ2VzIiwidXBkYXRlTWVzc2FnZSIsIl9wdXNoVXBkYXRlIiwiX2dldFNlcnZlckRvYyIsInNlcnZlckRvY3NGb3JDb2xsZWN0aW9uIiwiaXNFeGlzdGluZyIsImZpZWxkcyIsIl9pZCIsImN1cnJlbnREb2MiLCJnZXREb2MiLCJEaWZmU2VxdWVuY2UiLCJhcHBseUNoYW5nZXMiLCJkb2NzIiwid3JpdHRlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiY2FsbGJhY2tJbnZva2VyIiwiX3J1bldoZW5BbGxTZXJ2ZXJEb2NzQXJlRmx1c2hlZCIsInN1YlJlY29yZCIsInJ1bkZBZnRlclVwZGF0ZXMiLCJ1bmZsdXNoZWRTZXJ2ZXJEb2NDb3VudCIsIm9uU2VydmVyRG9jRmx1c2giLCJzZXJ2ZXJEb2N1bWVudHMiLCJ3cml0dGVuQnlTdHViRm9yQU1ldGhvZFdpdGhTZW50TWVzc2FnZSIsIl9saXZlZGF0YV9ub3N1YiIsIm1ldGVvckVycm9yRnJvbU1zZyIsIm1zZ0FyZyIsInJlYXNvbiIsImRldGFpbHMiLCJfbGl2ZWRhdGFfcmVzdWx0IiwiY3VycmVudE1ldGhvZEJsb2NrIiwiaSIsIm0iLCJpZHgiLCJmb3VuZCIsInNwbGljZSIsImZpcnN0QmxvY2siLCJzaGlmdCIsIl9zZW5kT3V0c3RhbmRpbmdNZXRob2RzIiwiX21heWJlTWlncmF0ZSIsIl9saXZlZGF0YV9lcnJvciIsIm9mZmVuZGluZ01lc3NhZ2UiLCJfY2FsbE9uUmVjb25uZWN0QW5kU2VuZEFwcHJvcHJpYXRlT3V0c3RhbmRpbmdNZXRob2RzIiwib2xkT3V0c3RhbmRpbmdNZXRob2RCbG9ja3MiLCJfcmVjb25uZWN0SG9vayIsImVhY2giLCJyYXdfbXNnIiwicGFyc2VERFAiLCJtZXNzYWdlUmVjZWl2ZWQiLCJ0ZXN0TWVzc2FnZU9uQ29ubmVjdCIsInNlcnZlcl9pZCIsImluZGV4T2YiLCJ2ZXJzaW9uIiwiX2ZvcmNlIiwiX2Vycm9yIiwiaW5jbHVkZXMiLCJzdXBwb3J0IiwiZmlsdGVyIiwiX3JlZjciLCJhbGxDb25uZWN0aW9ucyIsIkVudmlyb25tZW50VmFyaWFibGUiLCJfQ3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbiIsIl9DdXJyZW50SW52b2NhdGlvbiIsImNvbm5lY3Rpb25FcnJvckNvbnN0cnVjdG9yIiwibWFrZUVycm9yVHlwZSIsIkZvcmNlZFJlY29ubmVjdEVycm9yIiwicmFuZG9tU3RyZWFtIiwic2NvcGUiLCJSYW5kb21TdHJlYW0iLCJjb25uZWN0IiwicmV0IiwicmVnaXN0ZXIiLCJfYWxsU3Vic2NyaXB0aW9uc1JlYWR5IiwiZXZlcnkiLCJjb25uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxJQUFJLENBQUMsd0JBQXdCLEVBQUM7RUFBQ0MsR0FBRyxFQUFDO0FBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ0FuREYsTUFBTSxDQUFDRyxNQUFNLENBQUM7RUFBQ0MsT0FBTyxFQUFDQSxDQUFBLEtBQUlDO0FBQWEsQ0FBQyxDQUFDO0FBSzNCLE1BQU1BLGFBQWEsQ0FBQztFQUNqQ0MsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ25CO0lBQ0EsSUFBSSxDQUFDQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBUTtJQUNoQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsU0FBUyxHQUFHSCxPQUFPLENBQUNJLFFBQVE7SUFDakMsSUFBSSxDQUFDQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ00sVUFBVTtJQUNyQyxJQUFJLENBQUNDLFFBQVEsR0FBR1AsT0FBTyxDQUFDUSxPQUFPO0lBQy9CLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdULE9BQU8sQ0FBQ1UsZ0JBQWdCLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRCxJQUFJLENBQUNDLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxJQUFJO0lBQ3pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHYixPQUFPLENBQUNhLE9BQU87SUFDOUIsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSTtJQUN6QixJQUFJLENBQUNDLFlB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OiIvcGFja2FnZXMvZGRwLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEREUCB9IGZyb20gJy4uL2NvbW1vbi9uYW1lc3BhY2UuanMnO1xuIiwiLy8gQSBNZXRob2RJbnZva2VyIG1hbmFnZXMgc2VuZGluZyBhIG1ldGhvZCB0byB0aGUgc2VydmVyIGFuZCBjYWxsaW5nIHRoZSB1c2VyJ3Ncbi8vIGNhbGxiYWNrcy4gT24gY29uc3RydWN0aW9uLCBpdCByZWdpc3RlcnMgaXRzZWxmIGluIHRoZSBjb25uZWN0aW9uJ3Ncbi8vIF9tZXRob2RJbnZva2VycyBtYXA7IGl0IHJlbW92ZXMgaXRzZWxmIG9uY2UgdGhlIG1ldGhvZCBpcyBmdWxseSBmaW5pc2hlZCBhbmRcbi8vIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGlzIG9jY3VycyB3aGVuIGl0IGhhcyBib3RoIHJlY2VpdmVkIGEgcmVzdWx0LFxuLy8gYW5kIHRoZSBkYXRhIHdyaXR0ZW4gYnkgaXQgaXMgZnVsbHkgdmlzaWJsZS5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGhvZEludm9rZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLy8gUHVibGljICh3aXRoaW4gdGhpcyBmaWxlKSBmaWVsZHMuXG4gICAgdGhpcy5tZXRob2RJZCA9IG9wdGlvbnMubWV0aG9kSWQ7XG4gICAgdGhpcy5zZW50TWVzc2FnZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBvcHRpb25zLmNvbm5lY3Rpb247XG4gICAgdGhpcy5fbWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLl9vblJlc3VsdFJlY2VpdmVkID0gb3B0aW9ucy5vblJlc3VsdFJlY2VpdmVkIHx8ICgoKSA9PiB7fSk7XG4gICAgdGhpcy5fd2FpdCA9IG9wdGlvbnMud2FpdDtcbiAgICB0aGlzLm5vUmV0cnkgPSBvcHRpb25zLm5vUmV0cnk7XG4gICAgdGhpcy5fbWV0aG9kUmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLl9kYXRhVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gUmVnaXN0ZXIgd2l0aCB0aGUgY29ubmVjdGlvbi5cbiAgICB0aGlzLl9jb25uZWN0aW9uLl9tZXRob2RJbnZva2Vyc1t0aGlzLm1ldGhvZElkXSA9IHRoaXM7XG4gIH1cbiAgLy8gU2VuZHMgdGhlIG1ldGhvZCBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXIuIE1heSBiZSBjYWxsZWQgYWRkaXRpb25hbCB0aW1lcyBpZlxuICAvLyB3ZSBsb3NlIHRoZSBjb25uZWN0aW9uIGFuZCByZWNvbm5lY3QgYmVmb3JlIHJlY2VpdmluZyBhIHJlc3VsdC5cbiAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYmVmb3JlIHNlbmRpbmcgYSBtZXRob2QgKGluY2x1ZGluZyByZXNlbmRpbmcgb25cbiAgICAvLyByZWNvbm5lY3QpLiBXZSBzaG91bGQgb25seSAocmUpc2VuZCBtZXRob2RzIHdoZXJlIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBhXG4gICAgLy8gcmVzdWx0IVxuICAgIGlmICh0aGlzLmdvdFJlc3VsdCgpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZW5kaW5nTWV0aG9kIGlzIGNhbGxlZCBvbiBtZXRob2Qgd2l0aCByZXN1bHQnKTtcblxuICAgIC8vIElmIHdlJ3JlIHJlLXNlbmRpbmcgaXQsIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGRhdGEgd2FzIHdyaXR0ZW4gdGhlIGZpcnN0XG4gICAgLy8gdGltZS5cbiAgICB0aGlzLl9kYXRhVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VudE1lc3NhZ2UgPSB0cnVlO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHdhaXQgbWV0aG9kLCBtYWtlIGFsbCBkYXRhIG1lc3NhZ2VzIGJlIGJ1ZmZlcmVkIHVudGlsIGl0IGlzXG4gICAgLy8gZG9uZS5cbiAgICBpZiAodGhpcy5fd2FpdClcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb24uX21ldGhvZHNCbG9ja2luZ1F1aWVzY2VuY2VbdGhpcy5tZXRob2RJZF0gPSB0cnVlO1xuXG4gICAgLy8gQWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZS5cbiAgICB0aGlzLl9jb25uZWN0aW9uLl9zZW5kKHRoaXMuX21lc3NhZ2UpO1xuICB9XG4gIC8vIEludm9rZSB0aGUgY2FsbGJhY2ssIGlmIHdlIGhhdmUgYm90aCBhIHJlc3VsdCBhbmQga25vdyB0aGF0IGFsbCBkYXRhIGhhc1xuICAvLyBiZWVuIHdyaXR0ZW4gdG8gdGhlIGxvY2FsIGNhY2hlLlxuICBfbWF5YmVJbnZva2VDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fbWV0aG9kUmVzdWx0ICYmIHRoaXMuX2RhdGFWaXNpYmxlKSB7XG4gICAgICAvLyBDYWxsIHRoZSBjYWxsYmFjay4gKFRoaXMgd29uJ3QgdGhyb3c6IHRoZSBjYWxsYmFjayB3YXMgd3JhcHBlZCB3aXRoXG4gICAgICAvLyBiaW5kRW52aXJvbm1lbnQuKVxuICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcy5fbWV0aG9kUmVzdWx0WzBdLCB0aGlzLl9tZXRob2RSZXN1bHRbMV0pO1xuXG4gICAgICAvLyBGb3JnZXQgYWJvdXQgdGhpcyBtZXRob2QuXG4gICAgICBkZWxldGUgdGhpcy5fY29ubmVjdGlvbi5fbWV0aG9kSW52b2tlcnNbdGhpcy5tZXRob2RJZF07XG5cbiAgICAgIC8vIExldCB0aGUgY29ubmVjdGlvbiBrbm93IHRoYXQgdGhpcyBtZXRob2QgaXMgZmluaXNoZWQsIHNvIGl0IGNhbiB0cnkgdG9cbiAgICAgIC8vIG1vdmUgb24gdG8gdGhlIG5leHQgYmxvY2sgb2YgbWV0aG9kcy5cbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb24uX291dHN0YW5kaW5nTWV0aG9kRmluaXNoZWQoKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2FsbCB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZCBmcm9tIHRoZSBzZXJ2ZXIuIE9ubHkgbWF5IGJlIGNhbGxlZFxuICAvLyBvbmNlOyBvbmNlIGl0IGlzIGNhbGxlZCwgeW91IHNob3VsZCBub3QgY2FsbCBzZW5kTWVzc2FnZSBhZ2Fpbi5cbiAgLy8gSWYgdGhlIHVzZXIgcHJvdmlkZWQgYW4gb25SZXN1bHRSZWNlaXZlZCBjYWxsYmFjaywgY2FsbCBpdCBpbW1lZGlhdGVseS5cbiAgLy8gVGhlbiBpbnZva2UgdGhlIG1haW4gY2FsbGJhY2sgaWYgZGF0YSBpcyBhbHNvIHZpc2libGUuXG4gIHJlY2VpdmVSZXN1bHQoZXJyLCByZXN1bHQpIHtcbiAgICBpZiAodGhpcy5nb3RSZXN1bHQoKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kcyBzaG91bGQgb25seSByZWNlaXZlIHJlc3VsdHMgb25jZScpO1xuICAgIHRoaXMuX21ldGhvZFJlc3VsdCA9IFtlcnIsIHJlc3VsdF07XG4gICAgdGhpcy5fb25SZXN1bHRSZWNlaXZlZChlcnIsIHJlc3VsdCk7XG4gICAgdGhpcy5fbWF5YmVJbnZva2VDYWxsYmFjaygpO1xuICB9XG4gIC8vIENhbGwgdGhpcyB3aGVuIGFsbCBkYXRhIHdyaXR0ZW4gYnkgdGhlIG1ldGhvZCBpcyB2aXNpYmxlLiBUaGlzIG1lYW5zIHRoYXRcbiAgLy8gdGhlIG1ldGhvZCBoYXMgcmV0dXJucyBpdHMgXCJkYXRhIGlzIGRvbmVcIiBtZXNzYWdlICpBTkQqIGFsbCBzZXJ2ZXJcbiAgLy8gZG9jdW1lbnRzIHRoYXQgYXJlIGJ1ZmZlcmVkIGF0IHRoYXQgdGltZSBoYXZlIGJlZW4gd3JpdHRlbiB0byB0aGUgbG9jYWxcbiAgLy8gY2FjaGUuIEludm9rZXMgdGhlIG1haW4gY2FsbGJhY2sgaWYgdGhlIHJlc3VsdCBoYXMgYmVlbiByZWNlaXZlZC5cbiAgZGF0YVZpc2libGUoKSB7XG4gICAgdGhpcy5fZGF0YVZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuX21heWJlSW52b2tlQ2FsbGJhY2soKTtcbiAgfVxuICAvLyBUcnVlIGlmIHJlY2VpdmVSZXN1bHQgaGFzIGJlZW4gY2FsbGVkLlxuICBnb3RSZXN1bHQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbWV0aG9kUmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEREUENvbW1vbiB9IGZyb20gJ21ldGVvci9kZHAtY29tbW9uJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5pbXBvcnQgeyBFSlNPTiB9IGZyb20gJ21ldGVvci9lanNvbic7XG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICdtZXRlb3IvcmFuZG9tJztcbmltcG9ydCB7IEhvb2sgfSBmcm9tICdtZXRlb3IvY2FsbGJhY2staG9vayc7XG5pbXBvcnQgeyBNb25nb0lEIH0gZnJvbSAnbWV0ZW9yL21vbmdvLWlkJztcbmltcG9ydCB7IEREUCB9IGZyb20gJy4vbmFtZXNwYWNlLmpzJztcbmltcG9ydCBNZXRob2RJbnZva2VyIGZyb20gJy4vTWV0aG9kSW52b2tlci5qcyc7XG5pbXBvcnQge1xuICBoYXNPd24sXG4gIHNsaWNlLFxuICBrZXlzLFxuICBpc0VtcHR5LFxuICBsYXN0LFxufSBmcm9tIFwibWV0ZW9yL2RkcC1jb21tb24vdXRpbHMuanNcIjtcblxubGV0IEZpYmVyO1xubGV0IEZ1dHVyZTtcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgRmliZXIgPSBOcG0ucmVxdWlyZSgnZmliZXJzJyk7XG4gIEZ1dHVyZSA9IE5wbS5yZXF1aXJlKCdmaWJlcnMvZnV0dXJlJyk7XG59XG5cbmNsYXNzIE1vbmdvSURNYXAgZXh0ZW5kcyBJZE1hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vbmdvSUQuaWRTdHJpbmdpZnksIE1vbmdvSUQuaWRQYXJzZSk7XG4gIH1cbn1cblxuLy8gQHBhcmFtIHVybCB7U3RyaW5nfE9iamVjdH0gVVJMIHRvIE1ldGVvciBhcHAsXG4vLyAgIG9yIGFuIG9iamVjdCBhcyBhIHRlc3QgaG9vayAoc2VlIGNvZGUpXG4vLyBPcHRpb25zOlxuLy8gICByZWxvYWRXaXRoT3V0c3RhbmRpbmc6IGlzIGl0IE9LIHRvIHJlbG9hZCBpZiB0aGVyZSBhcmUgb3V0c3RhbmRpbmcgbWV0aG9kcz9cbi8vICAgaGVhZGVyczogZXh0cmEgaGVhZGVycyB0byBzZW5kIG9uIHRoZSB3ZWJzb2NrZXRzIGNvbm5lY3Rpb24sIGZvclxuLy8gICAgIHNlcnZlci10by1zZXJ2ZXIgRERQIG9ubHlcbi8vICAgX3NvY2tqc09wdGlvbnM6IFNwZWNpZmllcyBvcHRpb25zIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgc29ja2pzIGNsaWVudFxuLy8gICBvbkREUE5lZ290aWF0aW9uVmVyc2lvbkZhaWx1cmU6IGNhbGxiYWNrIHdoZW4gdmVyc2lvbiBuZWdvdGlhdGlvbiBmYWlscy5cbi8vXG4vLyBYWFggVGhlcmUgc2hvdWxkIGJlIGEgd2F5IHRvIGRlc3Ryb3kgYSBERFAgY29ubmVjdGlvbiwgY2F1c2luZyBhbGxcbi8vIG91dHN0YW5kaW5nIG1ldGhvZCBjYWxscyB0byBmYWlsLlxuLy9cbi8vIFhYWCBPdXIgY3VycmVudCB3YXkgb2YgaGFuZGxpbmcgZmFpbHVyZSBhbmQgcmVjb25uZWN0aW9uIGlzIGdyZWF0XG4vLyBmb3IgYW4gYXBwICh3aGVyZSB3ZSB3YW50IHRvIHRvbGVyYXRlIGJlaW5nIGRpc2Nvbm5lY3RlZCBhcyBhblxuLy8gZXhwZWN0IHN0YXRlLCBhbmQga2VlcCB0cnlpbmcgZm9yZXZlciB0byByZWNvbm5lY3QpIGJ1dCBjdW1iZXJzb21lXG4vLyBmb3Igc29tZXRoaW5nIGxpa2UgYSBjb21tYW5kIGxpbmUgdG9vbCB0aGF0IHdhbnRzIHRvIG1ha2UgYVxuLy8gY29ubmVjdGlvbiwgY2FsbCBhIG1ldGhvZCwgYW5kIHByaW50IGFuIGVycm9yIGlmIGNvbm5lY3Rpb25cbi8vIGZhaWxzLiBXZSBzaG91bGQgaGF2ZSBiZXR0ZXIgdXNhYmlsaXR5IGluIHRoZSBsYXR0ZXIgY2FzZSAod2hpbGVcbi8vIHN0aWxsIHRyYW5zcGFyZW50bHkgcmVjb25uZWN0aW5nIGlmIGl0J3MganVzdCBhIHRyYW5zaWVudCBmYWlsdXJlXG4vLyBvciB0aGUgc2VydmVyIG1pZ3JhdGluZyB1cykuXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IHtcbiAgICAgIG9uQ29ubmVjdGVkKCkge30sXG4gICAgICBvbkREUFZlcnNpb25OZWdvdGlhdGlvbkZhaWx1cmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgTWV0ZW9yLl9kZWJ1ZyhkZXNjcmlwdGlvbik7XG4gICAgICB9LFxuICAgICAgaGVhcnRiZWF0SW50ZXJ2YWw6IDE3NTAwLFxuICAgICAgaGVhcnRiZWF0VGltZW91dDogMTUwMDAsXG4gICAgICBucG1GYXllT3B0aW9uczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIC8vIFRoZXNlIG9wdGlvbnMgYXJlIG9ubHkgZm9yIHRlc3RpbmcuXG4gICAgICByZWxvYWRXaXRoT3V0c3RhbmRpbmc6IGZhbHNlLFxuICAgICAgc3VwcG9ydGVkRERQVmVyc2lvbnM6IEREUENvbW1vbi5TVVBQT1JURURfRERQX1ZFUlNJT05TLFxuICAgICAgcmV0cnk6IHRydWUsXG4gICAgICByZXNwb25kVG9QaW5nczogdHJ1ZSxcbiAgICAgIC8vIFdoZW4gdXBkYXRlcyBhcmUgY29taW5nIHdpdGhpbiB0aGlzIG1zIGludGVydmFsLCBiYXRjaCB0aGVtIHRvZ2V0aGVyLlxuICAgICAgYnVmZmVyZWRXcml0ZXNJbnRlcnZhbDogNSxcbiAgICAgIC8vIEZsdXNoIGJ1ZmZlcnMgaW1tZWRpYXRlbHkgaWYgd3JpdGVzIGFyZSBoYXBwZW5pbmcgY29udGludW91c2x5IGZvciBtb3JlIHRoYW4gdGhpcyBtYW55IG1zLlxuICAgICAgYnVmZmVyZWRXcml0ZXNNYXhBZ2U6IDUwMCxcblxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICAvLyBJZiBzZXQsIGNhbGxlZCB3aGVuIHdlIHJlY29ubmVjdCwgcXVldWluZyBtZXRob2QgY2FsbHMgX2JlZm9yZV8gdGhlXG4gICAgLy8gZXhpc3Rpbmcgb3V0c3RhbmRpbmcgb25lcy5cbiAgICAvLyBOT1RFOiBUaGlzIGZlYXR1cmUgaGFzIGJlZW4gcHJlc2VydmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gVGhlXG4gICAgLy8gcHJlZmVycmVkIG1ldGhvZCBvZiBzZXR0aW5nIGEgY2FsbGJhY2sgb24gcmVjb25uZWN0IGlzIHRvIHVzZVxuICAgIC8vIEREUC5vblJlY29ubmVjdC5cbiAgICBzZWxmLm9uUmVjb25uZWN0ID0gbnVsbDtcblxuICAgIC8vIGFzIGEgdGVzdCBob29rLCBhbGxvdyBwYXNzaW5nIGEgc3RyZWFtIGluc3RlYWQgb2YgYSB1cmwuXG4gICAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBzZWxmLl9zdHJlYW0gPSB1cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgQ2xpZW50U3RyZWFtIH0gPSByZXF1aXJlKFwibWV0ZW9yL3NvY2tldC1zdHJlYW0tY2xpZW50XCIpO1xuICAgICAgc2VsZi5fc3RyZWFtID0gbmV3IENsaWVudFN0cmVhbSh1cmwsIHtcbiAgICAgICAgcmV0cnk6IG9wdGlvbnMucmV0cnksXG4gICAgICAgIENvbm5lY3Rpb25FcnJvcjogRERQLkNvbm5lY3Rpb25FcnJvcixcbiAgICAgICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICBfc29ja2pzT3B0aW9uczogb3B0aW9ucy5fc29ja2pzT3B0aW9ucyxcbiAgICAgICAgLy8gVXNlZCB0byBrZWVwIHNvbWUgdGVzdHMgcXVpZXQsIG9yIGZvciBvdGhlciBjYXNlcyBpbiB3aGljaFxuICAgICAgICAvLyB0aGUgcmlnaHQgdGhpbmcgdG8gZG8gd2l0aCBjb25uZWN0aW9uIGVycm9ycyBpcyB0byBzaWxlbnRseVxuICAgICAgICAvLyBmYWlsIChlLmcuIHNlbmRpbmcgcGFja2FnZSB1c2FnZSBzdGF0cykuIEF0IHNvbWUgcG9pbnQgd2VcbiAgICAgICAgLy8gc2hvdWxkIGhhdmUgYSByZWFsIEFQSSBmb3IgaGFuZGxpbmcgY2xpZW50LXN0cmVhbS1sZXZlbFxuICAgICAgICAvLyBlcnJvcnMuXG4gICAgICAgIF9kb250UHJpbnRFcnJvcnM6IG9wdGlvbnMuX2RvbnRQcmludEVycm9ycyxcbiAgICAgICAgY29ubmVjdFRpbWVvdXRNczogb3B0aW9ucy5jb25uZWN0VGltZW91dE1zLFxuICAgICAgICBucG1GYXllT3B0aW9uczogb3B0aW9ucy5ucG1GYXllT3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fbGFzdFNlc3Npb25JZCA9IG51bGw7XG4gICAgc2VsZi5fdmVyc2lvblN1Z2dlc3Rpb24gPSBudWxsOyAvLyBUaGUgbGFzdCBwcm9wb3NlZCBERFAgdmVyc2lvbi5cbiAgICBzZWxmLl92ZXJzaW9uID0gbnVsbDsgLy8gVGhlIEREUCB2ZXJzaW9uIGFncmVlZCBvbiBieSBjbGllbnQgYW5kIHNlcnZlci5cbiAgICBzZWxmLl9zdG9yZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBuYW1lIC0+IG9iamVjdCB3aXRoIG1ldGhvZHNcbiAgICBzZWxmLl9tZXRob2RIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5hbWUgLT4gZnVuY1xuICAgIHNlbGYuX25leHRNZXRob2RJZCA9IDE7XG4gICAgc2VsZi5fc3VwcG9ydGVkRERQVmVyc2lvbnMgPSBvcHRpb25zLnN1cHBvcnRlZEREUFZlcnNpb25zO1xuXG4gICAgc2VsZi5faGVhcnRiZWF0SW50ZXJ2YWwgPSBvcHRpb25zLmhlYXJ0YmVhdEludGVydmFsO1xuICAgIHNlbGYuX2hlYXJ0YmVhdFRpbWVvdXQgPSBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQ7XG5cbiAgICAvLyBUcmFja3MgbWV0aG9kcyB3aGljaCB0aGUgdXNlciBoYXMgdHJpZWQgdG8gY2FsbCBidXQgd2hpY2ggaGF2ZSBub3QgeWV0XG4gICAgLy8gY2FsbGVkIHRoZWlyIHVzZXIgY2FsbGJhY2sgKGllLCB0aGV5IGFyZSB3YWl0aW5nIG9uIHRoZWlyIHJlc3VsdCBvciBmb3IgYWxsXG4gICAgLy8gb2YgdGhlaXIgd3JpdGVzIHRvIGJlIHdyaXR0ZW4gdG8gdGhlIGxvY2FsIGNhY2hlKS4gTWFwIGZyb20gbWV0aG9kIElEIHRvXG4gICAgLy8gTWV0aG9kSW52b2tlciBvYmplY3QuXG4gICAgc2VsZi5fbWV0aG9kSW52b2tlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgLy8gVHJhY2tzIG1ldGhvZHMgd2hpY2ggdGhlIHVzZXIgaGFzIGNhbGxlZCBidXQgd2hvc2UgcmVzdWx0IG1lc3NhZ2VzIGhhdmUgbm90XG4gICAgLy8gYXJyaXZlZCB5ZXQuXG4gICAgLy9cbiAgICAvLyBfb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MgaXMgYW4gYXJyYXkgb2YgYmxvY2tzIG9mIG1ldGhvZHMuIEVhY2ggYmxvY2tcbiAgICAvLyByZXByZXNlbnRzIGEgc2V0IG9mIG1ldGhvZHMgdGhhdCBjYW4gcnVuIGF0IHRoZSBzYW1lIHRpbWUuIFRoZSBmaXJzdCBibG9ja1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIG1ldGhvZHMgd2hpY2ggYXJlIGN1cnJlbnRseSBpbiBmbGlnaHQ7IHN1YnNlcXVlbnQgYmxvY2tzXG4gICAgLy8gbXVzdCB3YWl0IGZvciBwcmV2aW91cyBibG9ja3MgdG8gYmUgZnVsbHkgZmluaXNoZWQgYmVmb3JlIHRoZXkgY2FuIGJlIHNlbnRcbiAgICAvLyB0byB0aGUgc2VydmVyLlxuICAgIC8vXG4gICAgLy8gRWFjaCBibG9jayBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAgICAvLyAtIG1ldGhvZHM6IGEgbGlzdCBvZiBNZXRob2RJbnZva2VyIG9iamVjdHNcbiAgICAvLyAtIHdhaXQ6IGEgYm9vbGVhbjsgaWYgdHJ1ZSwgdGhpcyBibG9jayBoYWQgYSBzaW5nbGUgbWV0aG9kIGludm9rZWQgd2l0aFxuICAgIC8vICAgICAgICAgdGhlIFwid2FpdFwiIG9wdGlvblxuICAgIC8vXG4gICAgLy8gVGhlcmUgd2lsbCBuZXZlciBiZSBhZGphY2VudCBibG9ja3Mgd2l0aCB3YWl0PWZhbHNlLCBiZWNhdXNlIHRoZSBvbmx5IHRoaW5nXG4gICAgLy8gdGhhdCBtYWtlcyBtZXRob2RzIG5lZWQgdG8gYmUgc2VyaWFsaXplZCBpcyBhIHdhaXQgbWV0aG9kLlxuICAgIC8vXG4gICAgLy8gTWV0aG9kcyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBibG9jayB3aGVuIHRoZWlyIFwicmVzdWx0XCIgaXNcbiAgICAvLyByZWNlaXZlZC4gVGhlIGVudGlyZSBmaXJzdCBibG9jayBpcyBvbmx5IHJlbW92ZWQgd2hlbiBhbGwgb2YgdGhlIGluLWZsaWdodFxuICAgIC8vIG1ldGhvZHMgaGF2ZSByZWNlaXZlZCB0aGVpciByZXN1bHRzIChzbyB0aGUgXCJtZXRob2RzXCIgbGlzdCBpcyBlbXB0eSkgKkFORCpcbiAgICAvLyBhbGwgb2YgdGhlIGRhdGEgd3JpdHRlbiBieSB0aG9zZSBtZXRob2RzIGFyZSB2aXNpYmxlIGluIHRoZSBsb2NhbCBjYWNoZS4gU29cbiAgICAvLyBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIGZpcnN0IGJsb2NrJ3MgbWV0aG9kcyBsaXN0IHRvIGJlIGVtcHR5LCBpZiB3ZSBhcmVcbiAgICAvLyBzdGlsbCB3YWl0aW5nIGZvciBzb21lIG9iamVjdHMgdG8gcXVpZXNjZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy8gIF9vdXRzdGFuZGluZ01ldGhvZEJsb2NrcyA9IFtcbiAgICAvLyAgICB7d2FpdDogZmFsc2UsIG1ldGhvZHM6IFtdfSxcbiAgICAvLyAgICB7d2FpdDogdHJ1ZSwgbWV0aG9kczogWzxNZXRob2RJbnZva2VyIGZvciAnbG9naW4nPl19LFxuICAgIC8vICAgIHt3YWl0OiBmYWxzZSwgbWV0aG9kczogWzxNZXRob2RJbnZva2VyIGZvciAnZm9vJz4sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGhvZEludm9rZXIgZm9yICdiYXInPl19XVxuICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB0aGVyZSB3ZXJlIHNvbWUgbWV0aG9kcyB3aGljaCB3ZXJlIHNlbnQgdG8gdGhlIHNlcnZlciBhbmRcbiAgICAvLyB3aGljaCBoYXZlIHJldHVybmVkIHRoZWlyIHJlc3VsdHMsIGJ1dCBzb21lIG9mIHRoZSBkYXRhIHdyaXR0ZW4gYnlcbiAgICAvLyB0aGUgbWV0aG9kcyBtYXkgbm90IGJlIHZpc2libGUgaW4gdGhlIGxvY2FsIGNhY2hlLiBPbmNlIGFsbCB0aGF0IGRhdGEgaXNcbiAgICAvLyB2aXNpYmxlLCB3ZSB3aWxsIHNlbmQgYSAnbG9naW4nIG1ldGhvZC4gT25jZSB0aGUgbG9naW4gbWV0aG9kIGhhcyByZXR1cm5lZFxuICAgIC8vIGFuZCBhbGwgdGhlIGRhdGEgaXMgdmlzaWJsZSAoaW5jbHVkaW5nIHJlLXJ1bm5pbmcgc3VicyBpZiB1c2VySWQgY2hhbmdlcyksXG4gICAgLy8gd2Ugd2lsbCBzZW5kIHRoZSAnZm9vJyBhbmQgJ2JhcicgbWV0aG9kcyBpbiBwYXJhbGxlbC5cbiAgICBzZWxmLl9vdXRzdGFuZGluZ01ldGhvZEJsb2NrcyA9IFtdO1xuXG4gICAgLy8gbWV0aG9kIElEIC0+IGFycmF5IG9mIG9iamVjdHMgd2l0aCBrZXlzICdjb2xsZWN0aW9uJyBhbmQgJ2lkJywgbGlzdGluZ1xuICAgIC8vIGRvY3VtZW50cyB3cml0dGVuIGJ5IGEgZ2l2ZW4gbWV0aG9kJ3Mgc3R1Yi4ga2V5cyBhcmUgYXNzb2NpYXRlZCB3aXRoXG4gICAgLy8gbWV0aG9kcyB3aG9zZSBzdHViIHdyb3RlIGF0IGxlYXN0IG9uZSBkb2N1bWVudCwgYW5kIHdob3NlIGRhdGEtZG9uZSBtZXNzYWdlXG4gICAgLy8gaGFzIG5vdCB5ZXQgYmVlbiByZWNlaXZlZC5cbiAgICBzZWxmLl9kb2N1bWVudHNXcml0dGVuQnlTdHViID0ge307XG4gICAgLy8gY29sbGVjdGlvbiAtPiBJZE1hcCBvZiBcInNlcnZlciBkb2N1bWVudFwiIG9iamVjdC4gQSBcInNlcnZlciBkb2N1bWVudFwiIGhhczpcbiAgICAvLyAtIFwiZG9jdW1lbnRcIjogdGhlIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50IGFjY29yZGluZyB0aGVcbiAgICAvLyAgIHNlcnZlciAoaWUsIHRoZSBzbmFwc2hvdCBiZWZvcmUgYSBzdHViIHdyb3RlIGl0LCBhbWVuZGVkIGJ5IGFueSBjaGFuZ2VzXG4gICAgLy8gICByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIpXG4gICAgLy8gICBJdCBpcyB1bmRlZmluZWQgaWYgd2UgdGhpbmsgdGhlIGRvY3VtZW50IGRvZXMgbm90IGV4aXN0XG4gICAgLy8gLSBcIndyaXR0ZW5CeVN0dWJzXCI6IGEgc2V0IG9mIG1ldGhvZCBJRHMgd2hvc2Ugc3R1YnMgd3JvdGUgdG8gdGhlIGRvY3VtZW50XG4gICAgLy8gICB3aG9zZSBcImRhdGEgZG9uZVwiIG1lc3NhZ2VzIGhhdmUgbm90IHlldCBiZWVuIHByb2Nlc3NlZFxuICAgIHNlbGYuX3NlcnZlckRvY3VtZW50cyA9IHt9O1xuXG4gICAgLy8gQXJyYXkgb2YgY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgbmV4dCB1cGRhdGUgb2YgdGhlIGxvY2FsXG4gICAgLy8gY2FjaGUuIFVzZWQgZm9yOlxuICAgIC8vICAtIENhbGxpbmcgbWV0aG9kSW52b2tlci5kYXRhVmlzaWJsZSBhbmQgc3ViIHJlYWR5IGNhbGxiYWNrcyBhZnRlclxuICAgIC8vICAgIHRoZSByZWxldmFudCBkYXRhIGlzIGZsdXNoZWQuXG4gICAgLy8gIC0gSW52b2tpbmcgdGhlIGNhbGxiYWNrcyBvZiBcImhhbGYtZmluaXNoZWRcIiBtZXRob2RzIGFmdGVyIHJlY29ubmVjdFxuICAgIC8vICAgIHF1aWVzY2VuY2UuIFNwZWNpZmljYWxseSwgbWV0aG9kcyB3aG9zZSByZXN1bHQgd2FzIHJlY2VpdmVkIG92ZXIgdGhlIG9sZFxuICAgIC8vICAgIGNvbm5lY3Rpb24gKHNvIHdlIGRvbid0IHJlLXNlbmQgaXQpIGJ1dCB3aG9zZSBkYXRhIGhhZCBub3QgYmVlbiBtYWRlXG4gICAgLy8gICAgdmlzaWJsZS5cbiAgICBzZWxmLl9hZnRlclVwZGF0ZUNhbGxiYWNrcyA9IFtdO1xuXG4gICAgLy8gSW4gdHdvIGNvbnRleHRzLCB3ZSBidWZmZXIgYWxsIGluY29taW5nIGRhdGEgbWVzc2FnZXMgYW5kIHRoZW4gcHJvY2VzcyB0aGVtXG4gICAgLy8gYWxsIGF0IG9uY2UgaW4gYSBzaW5nbGUgdXBkYXRlOlxuICAgIC8vICAgLSBEdXJpbmcgcmVjb25uZWN0LCB3ZSBidWZmZXIgYWxsIGRhdGEgbWVzc2FnZXMgdW50aWwgYWxsIHN1YnMgdGhhdCBoYWRcbiAgICAvLyAgICAgYmVlbiByZWFkeSBiZWZvcmUgcmVjb25uZWN0IGFyZSByZWFkeSBhZ2FpbiwgYW5kIGFsbCBtZXRob2RzIHRoYXQgYXJlXG4gICAgLy8gICAgIGFjdGl2ZSBoYXZlIHJldHVybmVkIHRoZWlyIFwiZGF0YSBkb25lIG1lc3NhZ2VcIjsgdGhlblxuICAgIC8vICAgLSBEdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiBhIFwid2FpdFwiIG1ldGhvZCwgd2UgYnVmZmVyIGFsbCBkYXRhIG1lc3NhZ2VzXG4gICAgLy8gICAgIHVudGlsIHRoZSB3YWl0IG1ldGhvZCBnZXRzIGl0cyBcImRhdGEgZG9uZVwiIG1lc3NhZ2UuIChJZiB0aGUgd2FpdCBtZXRob2RcbiAgICAvLyAgICAgb2NjdXJzIGR1cmluZyByZWNvbm5lY3QsIGl0IGRvZXNuJ3QgZ2V0IGFueSBzcGVjaWFsIGhhbmRsaW5nLilcbiAgICAvLyBhbGwgZGF0YSBtZXNzYWdlcyBhcmUgcHJvY2Vzc2VkIGluIG9uZSB1cGRhdGUuXG4gICAgLy9cbiAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyBhcmUgdXNlZCBmb3IgdGhpcyBcInF1aWVzY2VuY2VcIiBwcm9jZXNzLlxuXG4gICAgLy8gVGhpcyBidWZmZXJzIHRoZSBtZXNzYWdlcyB0aGF0IGFyZW4ndCBiZWluZyBwcm9jZXNzZWQgeWV0LlxuICAgIHNlbGYuX21lc3NhZ2VzQnVmZmVyZWRVbnRpbFF1aWVzY2VuY2UgPSBbXTtcbiAgICAvLyBNYXAgZnJvbSBtZXRob2QgSUQgLT4gdHJ1ZS4gTWV0aG9kcyBhcmUgcmVtb3ZlZCBmcm9tIHRoaXMgd2hlbiB0aGVpclxuICAgIC8vIFwiZGF0YSBkb25lXCIgbWVzc2FnZSBpcyByZWNlaXZlZCwgYW5kIHdlIHdpbGwgbm90IHF1aWVzY2UgdW50aWwgaXQgaXNcbiAgICAvLyBlbXB0eS5cbiAgICBzZWxmLl9tZXRob2RzQmxvY2tpbmdRdWllc2NlbmNlID0ge307XG4gICAgLy8gbWFwIGZyb20gc3ViIElEIC0+IHRydWUgZm9yIHN1YnMgdGhhdCB3ZXJlIHJlYWR5IChpZSwgY2FsbGVkIHRoZSBzdWJcbiAgICAvLyByZWFkeSBjYWxsYmFjaykgYmVmb3JlIHJlY29ubmVjdCBidXQgaGF2ZW4ndCBiZWNvbWUgcmVhZHkgYWdhaW4geWV0XG4gICAgc2VsZi5fc3Vic0JlaW5nUmV2aXZlZCA9IHt9OyAvLyBtYXAgZnJvbSBzdWIuX2lkIC0+IHRydWVcbiAgICAvLyBpZiB0cnVlLCB0aGUgbmV4dCBkYXRhIHVwZGF0ZSBzaG91bGQgcmVzZXQgYWxsIHN0b3Jlcy4gKHNldCBkdXJpbmdcbiAgICAvLyByZWNvbm5lY3QuKVxuICAgIHNlbGYuX3Jlc2V0U3RvcmVzID0gZmFsc2U7XG5cbiAgICAvLyBuYW1lIC0+IGFycmF5IG9mIHVwZGF0ZXMgZm9yICh5ZXQgdG8gYmUgY3JlYXRlZCkgY29sbGVjdGlvbnNcbiAgICBzZWxmLl91cGRhdGVzRm9yVW5rbm93blN0b3JlcyA9IHt9O1xuICAgIC8vIGlmIHdlJ3JlIGJsb2NraW5nIGEgbWlncmF0aW9uLCB0aGUgcmV0cnkgZnVuY1xuICAgIHNlbGYuX3JldHJ5TWlncmF0ZSA9IG51bGw7XG5cbiAgICBzZWxmLl9fZmx1c2hCdWZmZXJlZFdyaXRlcyA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoXG4gICAgICBzZWxmLl9mbHVzaEJ1ZmZlcmVkV3JpdGVzLFxuICAgICAgJ2ZsdXNoaW5nIEREUCBidWZmZXJlZCB3cml0ZXMnLFxuICAgICAgc2VsZlxuICAgICk7XG4gICAgLy8gQ29sbGVjdGlvbiBuYW1lIC0+IGFycmF5IG9mIG1lc3NhZ2VzLlxuICAgIHNlbGYuX2J1ZmZlcmVkV3JpdGVzID0ge307XG4gICAgLy8gV2hlbiBjdXJyZW50IGJ1ZmZlciBvZiB1cGRhdGVzIG11c3QgYmUgZmx1c2hlZCBhdCwgaW4gbXMgdGltZXN0YW1wLlxuICAgIHNlbGYuX2J1ZmZlcmVkV3JpdGVzRmx1c2hBdCA9IG51bGw7XG4gICAgLy8gVGltZW91dCBoYW5kbGUgZm9yIHRoZSBuZXh0IHByb2Nlc3Npbmcgb2YgYWxsIHBlbmRpbmcgd3JpdGVzXG4gICAgc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEhhbmRsZSA9IG51bGw7XG5cbiAgICBzZWxmLl9idWZmZXJlZFdyaXRlc0ludGVydmFsID0gb3B0aW9ucy5idWZmZXJlZFdyaXRlc0ludGVydmFsO1xuICAgIHNlbGYuX2J1ZmZlcmVkV3JpdGVzTWF4QWdlID0gb3B0aW9ucy5idWZmZXJlZFdyaXRlc01heEFnZTtcblxuICAgIC8vIG1ldGFkYXRhIGZvciBzdWJzY3JpcHRpb25zLiAgTWFwIGZyb20gc3ViIElEIHRvIG9iamVjdCB3aXRoIGtleXM6XG4gICAgLy8gICAtIGlkXG4gICAgLy8gICAtIG5hbWVcbiAgICAvLyAgIC0gcGFyYW1zXG4gICAgLy8gICAtIGluYWN0aXZlIChpZiB0cnVlLCB3aWxsIGJlIGNsZWFuZWQgdXAgaWYgbm90IHJldXNlZCBpbiByZS1ydW4pXG4gICAgLy8gICAtIHJlYWR5IChoYXMgdGhlICdyZWFkeScgbWVzc2FnZSBiZWVuIHJlY2VpdmVkPylcbiAgICAvLyAgIC0gcmVhZHlDYWxsYmFjayAoYW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHJlYWR5KVxuICAgIC8vICAgLSBlcnJvckNhbGxiYWNrIChhbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIGlmIHRoZSBzdWIgdGVybWluYXRlcyB3aXRoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGFuIGVycm9yLCBYWFggQ09NUEFUIFdJVEggMS4wLjMuMSlcbiAgICAvLyAgIC0gc3RvcENhbGxiYWNrIChhbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHN1YiB0ZXJtaW5hdGVzXG4gICAgLy8gICAgIGZvciBhbnkgcmVhc29uLCB3aXRoIGFuIGVycm9yIGFyZ3VtZW50IGlmIGFuIGVycm9yIHRyaWdnZXJlZCB0aGUgc3RvcClcbiAgICBzZWxmLl9zdWJzY3JpcHRpb25zID0ge307XG5cbiAgICAvLyBSZWFjdGl2ZSB1c2VySWQuXG4gICAgc2VsZi5fdXNlcklkID0gbnVsbDtcbiAgICBzZWxmLl91c2VySWREZXBzID0gbmV3IFRyYWNrZXIuRGVwZW5kZW5jeSgpO1xuXG4gICAgLy8gQmxvY2sgYXV0by1yZWxvYWQgd2hpbGUgd2UncmUgd2FpdGluZyBmb3IgbWV0aG9kIHJlc3BvbnNlcy5cbiAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50ICYmXG4gICAgICAgIFBhY2thZ2UucmVsb2FkICYmXG4gICAgICAgICEgb3B0aW9ucy5yZWxvYWRXaXRoT3V0c3RhbmRpbmcpIHtcbiAgICAgIFBhY2thZ2UucmVsb2FkLlJlbG9hZC5fb25NaWdyYXRlKHJldHJ5ID0+IHtcbiAgICAgICAgaWYgKCEgc2VsZi5fcmVhZHlUb01pZ3JhdGUoKSkge1xuICAgICAgICAgIHNlbGYuX3JldHJ5TWlncmF0ZSA9IHJldHJ5O1xuICAgICAgICAgIHJldHVybiBbZmFsc2VdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICAgIGlmIChzZWxmLl9oZWFydGJlYXQpIHtcbiAgICAgICAgc2VsZi5faGVhcnRiZWF0LnN0b3AoKTtcbiAgICAgICAgc2VsZi5faGVhcnRiZWF0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAgICAgc2VsZi5fc3RyZWFtLm9uKFxuICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgIE1ldGVvci5iaW5kRW52aXJvbm1lbnQoXG4gICAgICAgICAgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAnaGFuZGxpbmcgRERQIG1lc3NhZ2UnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBzZWxmLl9zdHJlYW0ub24oXG4gICAgICAgICdyZXNldCcsXG4gICAgICAgIE1ldGVvci5iaW5kRW52aXJvbm1lbnQodGhpcy5vblJlc2V0LmJpbmQodGhpcyksICdoYW5kbGluZyBERFAgcmVzZXQnKVxuICAgICAgKTtcbiAgICAgIHNlbGYuX3N0cmVhbS5vbihcbiAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICBNZXRlb3IuYmluZEVudmlyb25tZW50KG9uRGlzY29ubmVjdCwgJ2hhbmRsaW5nIEREUCBkaXNjb25uZWN0JylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3N0cmVhbS5vbignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xuICAgICAgc2VsZi5fc3RyZWFtLm9uKCdyZXNldCcsIHRoaXMub25SZXNldC5iaW5kKHRoaXMpKTtcbiAgICAgIHNlbGYuX3N0cmVhbS5vbignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gJ25hbWUnIGlzIHRoZSBuYW1lIG9mIHRoZSBkYXRhIG9uIHRoZSB3aXJlIHRoYXQgc2hvdWxkIGdvIGluIHRoZVxuICAvLyBzdG9yZS4gJ3dyYXBwZWRTdG9yZScgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgYmVnaW5VcGRhdGUsIHVwZGF0ZSxcbiAgLy8gZW5kVXBkYXRlLCBzYXZlT3JpZ2luYWxzLCByZXRyaWV2ZU9yaWdpbmFscy4gc2VlIENvbGxlY3Rpb24gZm9yIGFuIGV4YW1wbGUuXG4gIHJlZ2lzdGVyU3RvcmUobmFtZSwgd3JhcHBlZFN0b3JlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAobmFtZSBpbiBzZWxmLl9zdG9yZXMpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFdyYXAgdGhlIGlucHV0IG9iamVjdCBpbiBhbiBvYmplY3Qgd2hpY2ggbWFrZXMgYW55IHN0b3JlIG1ldGhvZCBub3RcbiAgICAvLyBpbXBsZW1lbnRlZCBieSAnc3RvcmUnIGludG8gYSBuby1vcC5cbiAgICBjb25zdCBzdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgY29uc3Qga2V5c09mU3RvcmUgPSBbXG4gICAgICAndXBkYXRlJyxcbiAgICAgICdiZWdpblVwZGF0ZScsXG4gICAgICAnZW5kVXBkYXRlJyxcbiAgICAgICdzYXZlT3JpZ2luYWxzJyxcbiAgICAgICdyZXRyaWV2ZU9yaWdpbmFscycsXG4gICAgICAnZ2V0RG9jJyxcbiAgICAgICdfZ2V0Q29sbGVjdGlvbidcbiAgICBdO1xuICAgIGtleXNPZlN0b3JlLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgc3RvcmVbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICh3cmFwcGVkU3RvcmVbbWV0aG9kXSkge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVkU3RvcmVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZWxmLl9zdG9yZXNbbmFtZV0gPSBzdG9yZTtcblxuICAgIGNvbnN0IHF1ZXVlZCA9IHNlbGYuX3VwZGF0ZXNGb3JVbmtub3duU3RvcmVzW25hbWVdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXVlZCkpIHtcbiAgICAgIHN0b3JlLmJlZ2luVXBkYXRlKHF1ZXVlZC5sZW5ndGgsIGZhbHNlKTtcbiAgICAgIHF1ZXVlZC5mb3JFYWNoKG1zZyA9PiB7XG4gICAgICAgIHN0b3JlLnVwZGF0ZShtc2cpO1xuICAgICAgfSk7XG4gICAgICBzdG9yZS5lbmRVcGRhdGUoKTtcbiAgICAgIGRlbGV0ZSBzZWxmLl91cGRhdGVzRm9yVW5rbm93blN0b3Jlc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgTWV0ZW9yXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAgICogQGFsaWFzIE1ldGVvci5zdWJzY3JpYmVcbiAgICogQHN1bW1hcnkgU3Vic2NyaWJlIHRvIGEgcmVjb3JkIHNldC4gIFJldHVybnMgYSBoYW5kbGUgdGhhdCBwcm92aWRlc1xuICAgKiBgc3RvcCgpYCBhbmQgYHJlYWR5KClgIG1ldGhvZHMuXG4gICAqIEBsb2N1cyBDbGllbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc3Vic2NyaXB0aW9uLiAgTWF0Y2hlcyB0aGUgbmFtZSBvZiB0aGVcbiAgICogc2VydmVyJ3MgYHB1Ymxpc2goKWAgY2FsbC5cbiAgICogQHBhcmFtIHtFSlNPTmFibGV9IFthcmcxLGFyZzIuLi5dIE9wdGlvbmFsIGFyZ3VtZW50cyBwYXNzZWQgdG8gcHVibGlzaGVyXG4gICAqIGZ1bmN0aW9uIG9uIHNlcnZlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IFtjYWxsYmFja3NdIE9wdGlvbmFsLiBNYXkgaW5jbHVkZSBgb25TdG9wYFxuICAgKiBhbmQgYG9uUmVhZHlgIGNhbGxiYWNrcy4gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGl0IGlzIHBhc3NlZCBhcyBhblxuICAgKiBhcmd1bWVudCB0byBgb25TdG9wYC4gSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QsIGl0XG4gICAqIGlzIGludGVycHJldGVkIGFzIGFuIGBvblJlYWR5YCBjYWxsYmFjay5cbiAgICovXG4gIHN1YnNjcmliZShuYW1lIC8qIC4uIFthcmd1bWVudHNdIC4uIChjYWxsYmFja3xjYWxsYmFja3MpICovKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGV0IGNhbGxiYWNrcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxhc3RQYXJhbSA9IHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAodHlwZW9mIGxhc3RQYXJhbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFja3Mub25SZWFkeSA9IHBhcmFtcy5wb3AoKTtcbiAgICAgIH0gZWxzZSBpZiAobGFzdFBhcmFtICYmIFtcbiAgICAgICAgbGFzdFBhcmFtLm9uUmVhZHksXG4gICAgICAgIC8vIFhYWCBDT01QQVQgV0lUSCAxLjAuMy4xIG9uRXJyb3IgdXNlZCB0byBleGlzdCwgYnV0IG5vdyB3ZSB1c2VcbiAgICAgICAgLy8gb25TdG9wIHdpdGggYW4gZXJyb3IgY2FsbGJhY2sgaW5zdGVhZC5cbiAgICAgICAgbGFzdFBhcmFtLm9uRXJyb3IsXG4gICAgICAgIGxhc3RQYXJhbS5vblN0b3BcbiAgICAgIF0uc29tZShmID0+IHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICAgIGNhbGxiYWNrcyA9IHBhcmFtcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJcyB0aGVyZSBhbiBleGlzdGluZyBzdWIgd2l0aCB0aGUgc2FtZSBuYW1lIGFuZCBwYXJhbSwgcnVuIGluIGFuXG4gICAgLy8gaW52YWxpZGF0ZWQgQ29tcHV0YXRpb24/IFRoaXMgd2lsbCBoYXBwZW4gaWYgd2UgYXJlIHJlcnVubmluZyBhblxuICAgIC8vIGV4aXN0aW5nIGNvbXB1dGF0aW9uLlxuICAgIC8vXG4gICAgLy8gRm9yIGV4YW1wbGUsIGNvbnNpZGVyIGEgcmVydW4gb2Y6XG4gICAgLy9cbiAgICAvLyAgICAgVHJhY2tlci5hdXRvcnVuKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiZm9vXCIsIFNlc3Npb24uZ2V0KFwiZm9vXCIpKTtcbiAgICAvLyAgICAgICBNZXRlb3Iuc3Vic2NyaWJlKFwiYmFyXCIsIFNlc3Npb24uZ2V0KFwiYmFyXCIpKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyBJZiBcImZvb1wiIGhhcyBjaGFuZ2VkIGJ1dCBcImJhclwiIGhhcyBub3QsIHdlIHdpbGwgbWF0Y2ggdGhlIFwiYmFyXCJcbiAgICAvLyBzdWJjcmliZSB0byBhbiBleGlzdGluZyBpbmFjdGl2ZSBzdWJzY3JpcHRpb24gaW4gb3JkZXIgdG8gbm90XG4gICAgLy8gdW5zdWIgYW5kIHJlc3ViIHRoZSBzdWJzY3JpcHRpb24gdW5uZWNlc3NhcmlseS5cbiAgICAvL1xuICAgIC8vIFdlIG9ubHkgbG9vayBmb3Igb25lIHN1Y2ggc3ViOyBpZiB0aGVyZSBhcmUgTiBhcHBhcmVudGx5LWlkZW50aWNhbCBzdWJzXG4gICAgLy8gYmVpbmcgaW52YWxpZGF0ZWQsIHdlIHdpbGwgcmVxdWlyZSBOIG1hdGNoaW5nIHN1YnNjcmliZSBjYWxscyB0byBrZWVwXG4gICAgLy8gdGhlbSBhbGwgYWN0aXZlLlxuICAgIGNvbnN0IGV4aXN0aW5nID0gT2JqZWN0LnZhbHVlcyhzZWxmLl9zdWJzY3JpcHRpb25zKS5maW5kKFxuICAgICAgc3ViID0+IChzdWIuaW5hY3RpdmUgJiYgc3ViLm5hbWUgPT09IG5hbWUgJiYgRUpTT04uZXF1YWxzKHN1Yi5wYXJhbXMsIHBhcmFtcykpXG4gICAgKTtcblxuICAgIGxldCBpZDtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGlkID0gZXhpc3RpbmcuaWQ7XG4gICAgICBleGlzdGluZy5pbmFjdGl2ZSA9IGZhbHNlOyAvLyByZWFjdGl2YXRlXG5cbiAgICAgIGlmIChjYWxsYmFja3Mub25SZWFkeSkge1xuICAgICAgICAvLyBJZiB0aGUgc3ViIGlzIG5vdCBhbHJlYWR5IHJlYWR5LCByZXBsYWNlIGFueSByZWFkeSBjYWxsYmFjayB3aXRoIHRoZVxuICAgICAgICAvLyBvbmUgcHJvdmlkZWQgbm93LiAoSXQncyBub3QgcmVhbGx5IGNsZWFyIHdoYXQgdXNlcnMgd291bGQgZXhwZWN0IGZvclxuICAgICAgICAvLyBhbiBvblJlYWR5IGNhbGxiYWNrIGluc2lkZSBhbiBhdXRvcnVuOyB0aGUgc2VtYW50aWNzIHdlIHByb3ZpZGUgaXNcbiAgICAgICAgLy8gdGhhdCBhdCB0aGUgdGltZSB0aGUgc3ViIGZpcnN0IGJlY29tZXMgcmVhZHksIHdlIGNhbGwgdGhlIGxhc3RcbiAgICAgICAgLy8gb25SZWFkeSBjYWxsYmFjayBwcm92aWRlZCwgaWYgYW55LilcbiAgICAgICAgLy8gSWYgdGhlIHN1YiBpcyBhbHJlYWR5IHJlYWR5LCBydW4gdGhlIHJlYWR5IGNhbGxiYWNrIHJpZ2h0IGF3YXkuXG4gICAgICAgIC8vIEl0IHNlZW1zIHRoYXQgdXNlcnMgd291bGQgZXhwZWN0IGFuIG9uUmVhZHkgY2FsbGJhY2sgaW5zaWRlIGFuXG4gICAgICAgIC8vIGF1dG9ydW4gdG8gdHJpZ2dlciBvbmNlIHRoZSBzdWIgZmlyc3QgYmVjb21lcyByZWFkeSBhbmQgYWxzb1xuICAgICAgICAvLyB3aGVuIHJlLXN1YnMgaGFwcGVucy5cbiAgICAgICAgaWYgKGV4aXN0aW5nLnJlYWR5KSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uUmVhZHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGlzdGluZy5yZWFkeUNhbGxiYWNrID0gY2FsbGJhY2tzLm9uUmVhZHk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gWFhYIENPTVBBVCBXSVRIIDEuMC4zLjEgd2UgdXNlZCB0byBoYXZlIG9uRXJyb3IgYnV0IG5vdyB3ZSBjYWxsXG4gICAgICAvLyBvblN0b3Agd2l0aCBhbiBvcHRpb25hbCBlcnJvciBhcmd1bWVudFxuICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgIC8vIFJlcGxhY2UgZXhpc3RpbmcgY2FsbGJhY2sgaWYgYW55LCBzbyB0aGF0IGVycm9ycyBhcmVuJ3RcbiAgICAgICAgLy8gZG91YmxlLXJlcG9ydGVkLlxuICAgICAgICBleGlzdGluZy5lcnJvckNhbGxiYWNrID0gY2FsbGJhY2tzLm9uRXJyb3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFja3Mub25TdG9wKSB7XG4gICAgICAgIGV4aXN0aW5nLnN0b3BDYWxsYmFjayA9IGNhbGxiYWNrcy5vblN0b3A7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5ldyBzdWIhIEdlbmVyYXRlIGFuIGlkLCBzYXZlIGl0IGxvY2FsbHksIGFuZCBzZW5kIG1lc3NhZ2UuXG4gICAgICBpZCA9IFJhbmRvbS5pZCgpO1xuICAgICAgc2VsZi5fc3Vic2NyaXB0aW9uc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcGFyYW1zOiBFSlNPTi5jbG9uZShwYXJhbXMpLFxuICAgICAgICBpbmFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgICAgcmVhZHlEZXBzOiBuZXcgVHJhY2tlci5EZXBlbmRlbmN5KCksXG4gICAgICAgIHJlYWR5Q2FsbGJhY2s6IGNhbGxiYWNrcy5vblJlYWR5LFxuICAgICAgICAvLyBYWFggQ09NUEFUIFdJVEggMS4wLjMuMSAjZXJyb3JDYWxsYmFja1xuICAgICAgICBlcnJvckNhbGxiYWNrOiBjYWxsYmFja3Mub25FcnJvcixcbiAgICAgICAgc3RvcENhbGxiYWNrOiBjYWxsYmFja3Mub25TdG9wLFxuICAgICAgICBjb25uZWN0aW9uOiBzZWxmLFxuICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuY29ubmVjdGlvbi5fc3Vic2NyaXB0aW9uc1t0aGlzLmlkXTtcbiAgICAgICAgICB0aGlzLnJlYWR5ICYmIHRoaXMucmVhZHlEZXBzLmNoYW5nZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uX3NlbmQoeyBtc2c6ICd1bnN1YicsIGlkOiBpZCB9KTtcbiAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vblN0b3ApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vblN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBzZWxmLl9zZW5kKHsgbXNnOiAnc3ViJywgaWQ6IGlkLCBuYW1lOiBuYW1lLCBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYSBoYW5kbGUgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgIGNvbnN0IGhhbmRsZSA9IHtcbiAgICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICghIGhhc093bi5jYWxsKHNlbGYuX3N1YnNjcmlwdGlvbnMsIGlkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLl9zdWJzY3JpcHRpb25zW2lkXS5zdG9wKCk7XG4gICAgICB9LFxuICAgICAgcmVhZHkoKSB7XG4gICAgICAgIC8vIHJldHVybiBmYWxzZSBpZiB3ZSd2ZSB1bnN1YnNjcmliZWQuXG4gICAgICAgIGlmICghaGFzT3duLmNhbGwoc2VsZi5fc3Vic2NyaXB0aW9ucywgaWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IHNlbGYuX3N1YnNjcmlwdGlvbnNbaWRdO1xuICAgICAgICByZWNvcmQucmVhZHlEZXBzLmRlcGVuZCgpO1xuICAgICAgICByZXR1cm4gcmVjb3JkLnJlYWR5O1xuICAgICAgfSxcbiAgICAgIHN1YnNjcmlwdGlvbklkOiBpZFxuICAgIH07XG5cbiAgICBpZiAoVHJhY2tlci5hY3RpdmUpIHtcbiAgICAgIC8vIFdlJ3JlIGluIGEgcmVhY3RpdmUgY29tcHV0YXRpb24sIHNvIHdlJ2QgbGlrZSB0byB1bnN1YnNjcmliZSB3aGVuIHRoZVxuICAgICAgLy8gY29tcHV0YXRpb24gaXMgaW52YWxpZGF0ZWQuLi4gYnV0IG5vdCBpZiB0aGUgcmVydW4ganVzdCByZS1zdWJzY3JpYmVzXG4gICAgICAvLyB0byB0aGUgc2FtZSBzdWJzY3JpcHRpb24hICBXaGVuIGEgcmVydW4gaGFwcGVucywgd2UgdXNlIG9uSW52YWxpZGF0ZVxuICAgICAgLy8gYXMgYSBjaGFuZ2UgdG8gbWFyayB0aGUgc3Vic2NyaXB0aW9uIFwiaW5hY3RpdmVcIiBzbyB0aGF0IGl0IGNhblxuICAgICAgLy8gYmUgcmV1c2VkIGZyb20gdGhlIHJlcnVuLiAgSWYgaXQgaXNuJ3QgcmV1c2VkLCBpdCdzIGtpbGxlZCBmcm9tXG4gICAgICAvLyBhbiBhZnRlckZsdXNoLlxuICAgICAgVHJhY2tlci5vbkludmFsaWRhdGUoKGMpID0+IHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHNlbGYuX3N1YnNjcmlwdGlvbnMsIGlkKSkge1xuICAgICAgICAgIHNlbGYuX3N1YnNjcmlwdGlvbnNbaWRdLmluYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFRyYWNrZXIuYWZ0ZXJGbHVzaCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGhhc093bi5jYWxsKHNlbGYuX3N1YnNjcmlwdGlvbnMsIGlkKSAmJlxuICAgICAgICAgICAgICBzZWxmLl9zdWJzY3JpcHRpb25zW2lkXS5pbmFjdGl2ZSkge1xuICAgICAgICAgICAgaGFuZGxlLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfVxuXG4gIC8vIG9wdGlvbnM6XG4gIC8vIC0gb25MYXRlRXJyb3Ige0Z1bmN0aW9uKGVycm9yKX0gY2FsbGVkIGlmIGFuIGVycm9yIHdhcyByZWNlaXZlZCBhZnRlciB0aGUgcmVhZHkgZXZlbnQuXG4gIC8vICAgICAoZXJyb3JzIHJlY2VpdmVkIGJlZm9yZSByZWFkeSBjYXVzZSBhbiBlcnJvciB0byBiZSB0aHJvd24pXG4gIF9zdWJzY3JpYmVBbmRXYWl0KG5hbWUsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBmID0gbmV3IEZ1dHVyZSgpO1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAgIGFyZ3MucHVzaCh7XG4gICAgICBvblJlYWR5KCkge1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgIGZbJ3JldHVybiddKCk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcihlKSB7XG4gICAgICAgIGlmICghcmVhZHkpIGZbJ3Rocm93J10oZSk7XG4gICAgICAgIGVsc2Ugb3B0aW9ucyAmJiBvcHRpb25zLm9uTGF0ZUVycm9yICYmIG9wdGlvbnMub25MYXRlRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGUgPSBzZWxmLnN1YnNjcmliZS5hcHBseShzZWxmLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICBmLndhaXQoKTtcbiAgICByZXR1cm4gaGFuZGxlO1xuICB9XG5cbiAgbWV0aG9kcyhtZXRob2RzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMobWV0aG9kcykuZm9yRWFjaCgoW25hbWUsIGZ1bmNdKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kICdcIiArIG5hbWUgKyBcIicgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX21ldGhvZEhhbmRsZXJzW25hbWVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgbWV0aG9kIG5hbWVkICdcIiArIG5hbWUgKyBcIicgaXMgYWxyZWFkeSBkZWZpbmVkXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWV0aG9kSGFuZGxlcnNbbmFtZV0gPSBmdW5jO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldElzU2ltdWxhdGlvbih7aXNGcm9tQ2FsbEFzeW5jLCBhbHJlYWR5SW5TaW11bGF0aW9ufSkge1xuICAgIGlmICghaXNGcm9tQ2FsbEFzeW5jKSB7XG4gICAgICByZXR1cm4gYWxyZWFkeUluU2ltdWxhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGFscmVhZHlJblNpbXVsYXRpb24gJiYgRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi5faXNDYWxsQXN5bmNNZXRob2RSdW5uaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlck9mIE1ldGVvclxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gICAqIEBhbGlhcyBNZXRlb3IuY2FsbFxuICAgKiBAc3VtbWFyeSBJbnZva2VzIGEgbWV0aG9kIHdpdGggYSBzeW5jIHN0dWIsIHBhc3NpbmcgYW55IG51bWJlciBvZiBhcmd1bWVudHMuXG4gICAqIEBsb2N1cyBBbnl3aGVyZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIG1ldGhvZCB0byBpbnZva2VcbiAgICogQHBhcmFtIHtFSlNPTmFibGV9IFthcmcxLGFyZzIuLi5dIE9wdGlvbmFsIG1ldGhvZCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2FzeW5jQ2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrLCB3aGljaCBpcyBjYWxsZWQgYXN5bmNocm9ub3VzbHkgd2l0aCB0aGUgZXJyb3Igb3IgcmVzdWx0IGFmdGVyIHRoZSBtZXRob2QgaXMgY29tcGxldGUuIElmIG5vdCBwcm92aWRlZCwgdGhlIG1ldGhvZCBydW5zIHN5bmNocm9ub3VzbHkgaWYgcG9zc2libGUgKHNlZSBiZWxvdykuXG4gICAqL1xuICBjYWxsKG5hbWUgLyogLi4gW2FyZ3VtZW50c10gLi4gY2FsbGJhY2sgKi8pIHtcbiAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24sIHRoZSBsYXN0IGFyZ3VtZW50IGlzIHRoZSByZXN1bHQgY2FsbGJhY2ssXG4gICAgLy8gbm90IGEgcGFyYW1ldGVyIHRvIHRoZSByZW1vdGUgbWV0aG9kLlxuICAgIGNvbnN0IGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGV0IGNhbGxiYWNrO1xuICAgIGlmIChhcmdzLmxlbmd0aCAmJiB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFwcGx5KG5hbWUsIGFyZ3MsIGNhbGxiYWNrKTtcbiAgfVxuICAvKipcbiAgICogQG1lbWJlck9mIE1ldGVvclxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gICAqIEBhbGlhcyBNZXRlb3IuY2FsbEFzeW5jXG4gICAqIEBzdW1tYXJ5IEludm9rZXMgYSBtZXRob2Qgd2l0aCBhbiBhc3luYyBzdHViLCBwYXNzaW5nIGFueSBudW1iZXIgb2YgYXJndW1lbnRzLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBtZXRob2QgdG8gaW52b2tlXG4gICAqIEBwYXJhbSB7RUpTT05hYmxlfSBbYXJnMSxhcmcyLi4uXSBPcHRpb25hbCBtZXRob2QgYXJndW1lbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgYXN5bmMgY2FsbEFzeW5jKG5hbWUgLyogLi4gW2FyZ3VtZW50c10gLi4gKi8pIHtcbiAgICBjb25zdCBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChhcmdzLmxlbmd0aCAmJiB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiTWV0ZW9yLmNhbGxBc3luYygpIGRvZXMgbm90IGFjY2VwdCBhIGNhbGxiYWNrLiBZb3Ugc2hvdWxkICdhd2FpdCcgdGhlIHJlc3VsdCwgb3IgdXNlIC50aGVuKCkuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIC8qXG4gICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdoZW4geW91IGNhbGwgYSBQcm9taXNlLnRoZW4sIHlvdSdyZSBhY3R1YWxseSBjYWxsaW5nIGEgYm91bmQgZnVuY3Rpb24gYnkgTWV0ZW9yLlxuICAgICpcbiAgICAqIFRoaXMgaXMgZG9uZSBieSB0aGlzIGNvZGUgaHR0cHM6Ly9naXRodWIuY29tL21ldGVvci9tZXRlb3IvYmxvYi8xNzY3M2M2Njg3OGQzZjdiMWQ1NjRhNDIxNWViMDYzM2ZhNjc5MDE3L25wbS1wYWNrYWdlcy9tZXRlb3ItcHJvbWlzZS9wcm9taXNlX2NsaWVudC5qcyNMMS1MMTYuIChBbGwgdGhlIGxvZ2ljIGJlbG93IGNhbiBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUsIHdoZW4gd2Ugc3RvcCBvdmVyd3JpdGluZyB0aGVcbiAgICAqIFByb21pc2UuKVxuICAgICpcbiAgICAqIFdoZW4geW91IGNhbGwgYSBcIi50aGVuKClcIiwgbGlrZSBcIk1ldGVvci5jYWxsQXN5bmMoKS50aGVuKClcIiwgdGhlIGdsb2JhbCBjb250ZXh0IChpbnNpZGUgY3VycmVudFZhbHVlcylcbiAgICAqIHdpbGwgYmUgZnJvbSB0aGUgY2FsbCBvZiBNZXRlb3IuY2FsbEFzeW5jKCksIGFuZCBub3QgdGhlIGNvbnRleHQgYWZ0ZXIgdGhlIHByb21pc2UgaXMgZG9uZS5cbiAgICAqXG4gICAgKiBUaGlzIG1lYW5zIHRoYXQgd2l0aG91dCB0aGlzIGNvZGUgaWYgeW91IGNhbGwgYSBzdHViIGluc2lkZSB0aGUgXCIudGhlbigpXCIsIHRoaXMgc3R1YiB3aWxsIGFjdCBhcyBhIHNpbXVsYXRpb25cbiAgICAqIGFuZCB3b24ndCByZWFjaCB0aGUgc2VydmVyLlxuICAgICpcbiAgICAqIEluc2lkZSB0aGUgZnVuY3Rpb24gX2dldElzU2ltdWxhdGlvbigpLCBpZiBpc0Zyb21DYWxsQXN5bmMgaXMgZmFsc2UsIHdlIGNvbnRpbnVlIHRvIGNvbnNpZGVyIGp1c3QgdGhlXG4gICAgKiBhbHJlYWR5SW5TaW11bGF0aW9uLCBvdGhlcndpc2UsIGlzRnJvbUNhbGxBc3luYyBpcyB0cnVlLCB3ZSBhbHNvIGNoZWNrIHRoZSB2YWx1ZSBvZiBjYWxsQXN5bmNNZXRob2RSdW5uaW5nIChieVxuICAgICogY2FsbGluZyBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLl9pc0NhbGxBc3luY01ldGhvZFJ1bm5pbmcoKSkuXG4gICAgKlxuICAgICogV2l0aCB0aGlzLCBpZiBhIHN0dWIgaXMgcnVubmluZyBpbnNpZGUgYSBcIi50aGVuKClcIiwgaXQnbGwga25vdyBpdCdzIG5vdCBhIHNpbXVsYXRpb24sIGJlY2F1c2UgY2FsbEFzeW5jTWV0aG9kUnVubmluZ1xuICAgICogd2lsbCBiZSBmYWxzZS5cbiAgICAqXG4gICAgKiBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLl9zZXQoKSBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3aXRob3V0IGl0LCBpZiB5b3UgaGF2ZSBhIGNvZGUgbGlrZTpcbiAgICAqXG4gICAgKiBNZXRlb3IuY2FsbEFzeW5jKFwibTFcIikudGhlbigoKSA9PiB7XG4gICAgKiAgIE1ldGVvci5jYWxsQXN5bmMoXCJtMlwiKVxuICAgICogfSlcbiAgICAqXG4gICAgKiBUaGUgY2FsbCB0aGUgbWV0aG9kIG0yIHdpbGwgYWN0IGFzIGEgc2ltdWxhdGlvbiBhbmQgd29uJ3QgcmVhY2ggdGhlIHNlcnZlci4gVGhhdCdzIHdoeSB3ZSByZXNldCB0aGUgY29udGV4dCBoZXJlXG4gICAgKiBiZWZvcmUgY2FsbGluZyBldmVyeXRoaW5nIGVsc2UuXG4gICAgKlxuICAgICogKi9cbiAgICBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLl9zZXQoKTtcbiAgICBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLl9zZXRDYWxsQXN5bmNNZXRob2RSdW5uaW5nKHRydWUpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmFwcGx5QXN5bmMobmFtZSwgYXJncywgeyBpc0Zyb21DYWxsQXN5bmM6IHRydWUgfSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIEREUC5fQ3VycmVudE1ldGhvZEludm9jYXRpb24uX3NldENhbGxBc3luY01ldGhvZFJ1bm5pbmcoZmFsc2UpO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBNZXRlb3JcbiAgICogQGltcG9ydEZyb21QYWNrYWdlIG1ldGVvclxuICAgKiBAYWxpYXMgTWV0ZW9yLmFwcGx5XG4gICAqIEBzdW1tYXJ5IEludm9rZSBhIG1ldGhvZCBwYXNzaW5nIGFuIGFycmF5IG9mIGFyZ3VtZW50cy5cbiAgICogQGxvY3VzIEFueXdoZXJlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgbWV0aG9kIHRvIGludm9rZVxuICAgKiBAcGFyYW0ge0VKU09OYWJsZVtdfSBhcmdzIE1ldGhvZCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMud2FpdCAoQ2xpZW50IG9ubHkpIElmIHRydWUsIGRvbid0IHNlbmQgdGhpcyBtZXRob2QgdW50aWwgYWxsIHByZXZpb3VzIG1ldGhvZCBjYWxscyBoYXZlIGNvbXBsZXRlZCwgYW5kIGRvbid0IHNlbmQgYW55IHN1YnNlcXVlbnQgbWV0aG9kIGNhbGxzIHVudGlsIHRoaXMgb25lIGlzIGNvbXBsZXRlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5vblJlc3VsdFJlY2VpdmVkIChDbGllbnQgb25seSkgVGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIHdpdGggdGhlIGVycm9yIG9yIHJlc3VsdCBvZiB0aGUgbWV0aG9kIChqdXN0IGxpa2UgYGFzeW5jQ2FsbGJhY2tgKSBhcyBzb29uIGFzIHRoZSBlcnJvciBvciByZXN1bHQgaXMgYXZhaWxhYmxlLiBUaGUgbG9jYWwgY2FjaGUgbWF5IG5vdCB5ZXQgcmVmbGVjdCB0aGUgd3JpdGVzIHBlcmZvcm1lZCBieSB0aGUgbWV0aG9kLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMubm9SZXRyeSAoQ2xpZW50IG9ubHkpIGlmIHRydWUsIGRvbid0IHNlbmQgdGhpcyBtZXRob2QgYWdhaW4gb24gcmVsb2FkLCBzaW1wbHkgY2FsbCB0aGUgY2FsbGJhY2sgYW4gZXJyb3Igd2l0aCB0aGUgZXJyb3IgY29kZSAnaW52b2NhdGlvbi1mYWlsZWQnLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMudGhyb3dTdHViRXhjZXB0aW9ucyAoQ2xpZW50IG9ubHkpIElmIHRydWUsIGV4Y2VwdGlvbnMgdGhyb3duIGJ5IG1ldGhvZCBzdHVicyB3aWxsIGJlIHRocm93biBpbnN0ZWFkIG9mIGxvZ2dlZCwgYW5kIHRoZSBtZXRob2Qgd2lsbCBub3QgYmUgaW52b2tlZCBvbiB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmV0dXJuU3R1YlZhbHVlIChDbGllbnQgb25seSkgSWYgdHJ1ZSB0aGVuIGluIGNhc2VzIHdoZXJlIHdlIHdvdWxkIGhhdmUgb3RoZXJ3aXNlIGRpc2NhcmRlZCB0aGUgc3R1YidzIHJldHVybiB2YWx1ZSBhbmQgcmV0dXJuZWQgdW5kZWZpbmVkLCBpbnN0ZWFkIHdlIGdvIGFoZWFkIGFuZCByZXR1cm4gaXQuIFNwZWNpZmljYWxseSwgdGhpcyBpcyBhbnkgdGltZSBvdGhlciB0aGFuIHdoZW4gKGEpIHdlIGFyZSBhbHJlYWR5IGluc2lkZSBhIHN0dWIgb3IgKGIpIHdlIGFyZSBpbiBOb2RlIGFuZCBubyBjYWxsYmFjayB3YXMgcHJvdmlkZWQuIEN1cnJlbnRseSB3ZSByZXF1aXJlIHRoaXMgZmxhZyB0byBiZSBleHBsaWNpdGx5IHBhc3NlZCB0byByZWR1Y2UgdGhlIGxpa2VsaWhvb2QgdGhhdCBzdHViIHJldHVybiB2YWx1ZXMgd2lsbCBiZSBjb25mdXNlZCB3aXRoIHNlcnZlciByZXR1cm4gdmFsdWVzOyB3ZSBtYXkgaW1wcm92ZSB0aGlzIGluIGZ1dHVyZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2FzeW5jQ2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrOyBzYW1lIHNlbWFudGljcyBhcyBpbiBbYE1ldGVvci5jYWxsYF0oI21ldGVvcl9jYWxsKS5cbiAgICovXG4gIGFwcGx5KG5hbWUsIGFyZ3MsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgeyBzdHViSW52b2NhdGlvbiwgaW52b2NhdGlvbiwgLi4uc3R1Yk9wdGlvbnMgfSA9IHRoaXMuX3N0dWJDYWxsKG5hbWUsIEVKU09OLmNsb25lKGFyZ3MpKTtcblxuICAgIGlmIChzdHViT3B0aW9ucy5oYXNTdHViKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLl9nZXRJc1NpbXVsYXRpb24oe1xuICAgICAgICAgIGFscmVhZHlJblNpbXVsYXRpb246IHN0dWJPcHRpb25zLmFscmVhZHlJblNpbXVsYXRpb24sXG4gICAgICAgICAgaXNGcm9tQ2FsbEFzeW5jOiBzdHViT3B0aW9ucy5pc0Zyb21DYWxsQXN5bmMsXG4gICAgICAgIH0pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc2F2ZU9yaWdpbmFscygpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgc3R1Yk9wdGlvbnMuc3R1YlJldHVyblZhbHVlID0gRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvblxuICAgICAgICAgIC53aXRoVmFsdWUoaW52b2NhdGlvbiwgc3R1Ykludm9jYXRpb24pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdHViT3B0aW9ucy5leGNlcHRpb24gPSBlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXBwbHkobmFtZSwgc3R1Yk9wdGlvbnMsIGFyZ3MsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgTWV0ZW9yXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAgICogQGFsaWFzIE1ldGVvci5hcHBseUFzeW5jXG4gICAqIEBzdW1tYXJ5IEludm9rZSBhIG1ldGhvZCBwYXNzaW5nIGFuIGFycmF5IG9mIGFyZ3VtZW50cy5cbiAgICogQGxvY3VzIEFueXdoZXJlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgbWV0aG9kIHRvIGludm9rZVxuICAgKiBAcGFyYW0ge0VKU09OYWJsZVtdfSBhcmdzIE1ldGhvZCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMud2FpdCAoQ2xpZW50IG9ubHkpIElmIHRydWUsIGRvbid0IHNlbmQgdGhpcyBtZXRob2QgdW50aWwgYWxsIHByZXZpb3VzIG1ldGhvZCBjYWxscyBoYXZlIGNvbXBsZXRlZCwgYW5kIGRvbid0IHNlbmQgYW55IHN1YnNlcXVlbnQgbWV0aG9kIGNhbGxzIHVudGlsIHRoaXMgb25lIGlzIGNvbXBsZXRlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5vblJlc3VsdFJlY2VpdmVkIChDbGllbnQgb25seSkgVGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIHdpdGggdGhlIGVycm9yIG9yIHJlc3VsdCBvZiB0aGUgbWV0aG9kIChqdXN0IGxpa2UgYGFzeW5jQ2FsbGJhY2tgKSBhcyBzb29uIGFzIHRoZSBlcnJvciBvciByZXN1bHQgaXMgYXZhaWxhYmxlLiBUaGUgbG9jYWwgY2FjaGUgbWF5IG5vdCB5ZXQgcmVmbGVjdCB0aGUgd3JpdGVzIHBlcmZvcm1lZCBieSB0aGUgbWV0aG9kLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMubm9SZXRyeSAoQ2xpZW50IG9ubHkpIGlmIHRydWUsIGRvbid0IHNlbmQgdGhpcyBtZXRob2QgYWdhaW4gb24gcmVsb2FkLCBzaW1wbHkgY2FsbCB0aGUgY2FsbGJhY2sgYW4gZXJyb3Igd2l0aCB0aGUgZXJyb3IgY29kZSAnaW52b2NhdGlvbi1mYWlsZWQnLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMudGhyb3dTdHViRXhjZXB0aW9ucyAoQ2xpZW50IG9ubHkpIElmIHRydWUsIGV4Y2VwdGlvbnMgdGhyb3duIGJ5IG1ldGhvZCBzdHVicyB3aWxsIGJlIHRocm93biBpbnN0ZWFkIG9mIGxvZ2dlZCwgYW5kIHRoZSBtZXRob2Qgd2lsbCBub3QgYmUgaW52b2tlZCBvbiB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmV0dXJuU3R1YlZhbHVlIChDbGllbnQgb25seSkgSWYgdHJ1ZSB0aGVuIGluIGNhc2VzIHdoZXJlIHdlIHdvdWxkIGhhdmUgb3RoZXJ3aXNlIGRpc2NhcmRlZCB0aGUgc3R1YidzIHJldHVybiB2YWx1ZSBhbmQgcmV0dXJuZWQgdW5kZWZpbmVkLCBpbnN0ZWFkIHdlIGdvIGFoZWFkIGFuZCByZXR1cm4gaXQuIFNwZWNpZmljYWxseSwgdGhpcyBpcyBhbnkgdGltZSBvdGhlciB0aGFuIHdoZW4gKGEpIHdlIGFyZSBhbHJlYWR5IGluc2lkZSBhIHN0dWIgb3IgKGIpIHdlIGFyZSBpbiBOb2RlIGFuZCBubyBjYWxsYmFjayB3YXMgcHJvdmlkZWQuIEN1cnJlbnRseSB3ZSByZXF1aXJlIHRoaXMgZmxhZyB0byBiZSBleHBsaWNpdGx5IHBhc3NlZCB0byByZWR1Y2UgdGhlIGxpa2VsaWhvb2QgdGhhdCBzdHViIHJldHVybiB2YWx1ZXMgd2lsbCBiZSBjb25mdXNlZCB3aXRoIHNlcnZlciByZXR1cm4gdmFsdWVzOyB3ZSBtYXkgaW1wcm92ZSB0aGlzIGluIGZ1dHVyZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2FzeW5jQ2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrLlxuICAgKi9cbiAgYXN5bmMgYXBwbHlBc3luYyhuYW1lLCBhcmdzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHsgc3R1Ykludm9jYXRpb24sIGludm9jYXRpb24sIC4uLnN0dWJPcHRpb25zIH0gPSB0aGlzLl9zdHViQ2FsbChuYW1lLCBFSlNPTi5jbG9uZShhcmdzKSwgb3B0aW9ucyk7XG4gICAgaWYgKHN0dWJPcHRpb25zLmhhc1N0dWIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuX2dldElzU2ltdWxhdGlvbih7XG4gICAgICAgICAgYWxyZWFkeUluU2ltdWxhdGlvbjogc3R1Yk9wdGlvbnMuYWxyZWFkeUluU2ltdWxhdGlvbixcbiAgICAgICAgICBpc0Zyb21DYWxsQXN5bmM6IHN0dWJPcHRpb25zLmlzRnJvbUNhbGxBc3luYyxcbiAgICAgICAgfSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxzKCk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgY29kZSBiZWxvdyBmb2xsb3dzIHRoZSBzYW1lIGxvZ2ljIGFzIHRoZSBmdW5jdGlvbiB3aXRoVmFsdWVzKCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ1dCBhcyB0aGUgTWV0ZW9yIHBhY2thZ2UgaXMgbm90IGNvbXBpbGVkIGJ5IGVjbWFzY3JpcHQsIGl0IGlzIHVuYWJsZSB0byB1c2UgbmV3ZXIgc3ludGF4IGluIHRoZSBicm93c2VyLFxuICAgICAgICAgKiBzdWNoIGFzLCB0aGUgYXN5bmMvYXdhaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNvLCB0byBrZWVwIHN1cHBvcnRpbmcgb2xkIGJyb3dzZXJzLCBsaWtlIElFIDExLCB3ZSdyZSBjcmVhdGluZyB0aGUgbG9naWMgb25lIGxldmVsIGFib3ZlLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLl9zZXROZXdDb250ZXh0QW5kR2V0Q3VycmVudChcbiAgICAgICAgICBpbnZvY2F0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0T3JUaGVuYWJsZSA9IHN0dWJJbnZvY2F0aW9uKCk7XG4gICAgICAgICAgY29uc3QgaXNUaGVuYWJsZSA9XG4gICAgICAgICAgICByZXN1bHRPclRoZW5hYmxlICYmIHR5cGVvZiByZXN1bHRPclRoZW5hYmxlLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgaWYgKGlzVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHN0dWJPcHRpb25zLnN0dWJSZXR1cm5WYWx1ZSA9IGF3YWl0IHJlc3VsdE9yVGhlbmFibGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0dWJPcHRpb25zLnN0dWJSZXR1cm5WYWx1ZSA9IHJlc3VsdE9yVGhlbmFibGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIEREUC5fQ3VycmVudE1ldGhvZEludm9jYXRpb24uX3NldChjdXJyZW50Q29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3R1Yk9wdGlvbnMuZXhjZXB0aW9uID0gZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcGx5KG5hbWUsIHN0dWJPcHRpb25zLCBhcmdzLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH1cblxuICBfYXBwbHkobmFtZSwgc3R1YkNhbGxWYWx1ZSwgYXJncywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIFdlIHdlcmUgcGFzc2VkIDMgYXJndW1lbnRzLiBUaGV5IG1heSBiZSBlaXRoZXIgKG5hbWUsIGFyZ3MsIG9wdGlvbnMpXG4gICAgLy8gb3IgKG5hbWUsIGFyZ3MsIGNhbGxiYWNrKVxuICAgIGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAvLyBYWFggd291bGQgaXQgYmUgYmV0dGVyIGZvcm0gdG8gZG8gdGhlIGJpbmRpbmcgaW4gc3RyZWFtLm9uLFxuICAgICAgLy8gb3IgY2FsbGVyLCBpbnN0ZWFkIG9mIGhlcmU/XG4gICAgICAvLyBYWFggaW1wcm92ZSBlcnJvciBtZXNzYWdlIChhbmQgaG93IHdlIHJlcG9ydCBpdClcbiAgICAgIGNhbGxiYWNrID0gTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIFwiZGVsaXZlcmluZyByZXN1bHQgb2YgaW52b2tpbmcgJ1wiICsgbmFtZSArIFwiJ1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEtlZXAgb3VyIGFyZ3Mgc2FmZSBmcm9tIG11dGF0aW9uIChlZyBpZiB3ZSBkb24ndCBzZW5kIHRoZSBtZXNzYWdlIGZvciBhXG4gICAgLy8gd2hpbGUgYmVjYXVzZSBvZiBhIHdhaXQgbWV0aG9kKS5cbiAgICBhcmdzID0gRUpTT04uY2xvbmUoYXJncyk7XG5cbiAgICBjb25zdCB7IGhhc1N0dWIsIGV4Y2VwdGlvbiwgc3R1YlJldHVyblZhbHVlLCBhbHJlYWR5SW5TaW11bGF0aW9uLCByYW5kb21TZWVkIH0gPSBzdHViQ2FsbFZhbHVlO1xuXG4gICAgLy8gSWYgd2UncmUgaW4gYSBzaW11bGF0aW9uLCBzdG9wIGFuZCByZXR1cm4gdGhlIHJlc3VsdCB3ZSBoYXZlLFxuICAgIC8vIHJhdGhlciB0aGFuIGdvaW5nIG9uIHRvIGRvIGFuIFJQQy4gSWYgdGhlcmUgd2FzIG5vIHN0dWIsXG4gICAgLy8gd2UnbGwgZW5kIHVwIHJldHVybmluZyB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fZ2V0SXNTaW11bGF0aW9uKHtcbiAgICAgICAgYWxyZWFkeUluU2ltdWxhdGlvbixcbiAgICAgICAgaXNGcm9tQ2FsbEFzeW5jOiBzdHViQ2FsbFZhbHVlLmlzRnJvbUNhbGxBc3luYyxcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXhjZXB0aW9uLCBzdHViUmV0dXJuVmFsdWUpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGV4Y2VwdGlvbikgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgcmV0dXJuIHN0dWJSZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBvbmx5IGNyZWF0ZSB0aGUgbWV0aG9kSWQgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IG5lZWQgb25lIGlmXG4gICAgLy8gd2UncmUgYWxyZWFkeSBpbiBhIHNpbXVsYXRpb25cbiAgICBjb25zdCBtZXRob2RJZCA9ICcnICsgc2VsZi5fbmV4dE1ldGhvZElkKys7XG4gICAgaWYgKGhhc1N0dWIpIHtcbiAgICAgIHNlbGYuX3JldHJpZXZlQW5kU3RvcmVPcmlnaW5hbHMobWV0aG9kSWQpO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHRoZSBERFAgbWVzc2FnZSBmb3IgdGhlIG1ldGhvZCBjYWxsLiBOb3RlIHRoYXQgb24gdGhlIGNsaWVudCxcbiAgICAvLyBpdCBpcyBpbXBvcnRhbnQgdGhhdCB0aGUgc3R1YiBoYXZlIGZpbmlzaGVkIGJlZm9yZSB3ZSBzZW5kIHRoZSBSUEMsIHNvXG4gICAgLy8gdGhhdCB3ZSBrbm93IHdlIGhhdmUgYSBjb21wbGV0ZSBsaXN0IG9mIHdoaWNoIGxvY2FsIGRvY3VtZW50cyB0aGUgc3R1YlxuICAgIC8vIHdyb3RlLlxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBtc2c6ICdtZXRob2QnLFxuICAgICAgaWQ6IG1ldGhvZElkLFxuICAgICAgbWV0aG9kOiBuYW1lLFxuICAgICAgcGFyYW1zOiBhcmdzXG4gICAgfTtcblxuICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIHN0dWIsIGFuZCB3ZSdyZSBpZ25vcmluZyBpdFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgZG9pbmcgYW4gUlBDIGFuZCB3YW50IHRvIHVzZSB3aGF0IHRoZSBzZXJ2ZXJcbiAgICAvLyByZXR1cm5zIGluc3RlYWQsIGxvZyBpdCBzbyB0aGUgZGV2ZWxvcGVyIGtub3dzXG4gICAgLy8gKHVubGVzcyB0aGV5IGV4cGxpY2l0bHkgYXNrIHRvIHNlZSB0aGUgZXJyb3IpLlxuICAgIC8vXG4gICAgLy8gVGVzdHMgY2FuIHNldCB0aGUgJ19leHBlY3RlZEJ5VGVzdCcgZmxhZyBvbiBhbiBleGNlcHRpb24gc28gaXQgd29uJ3RcbiAgICAvLyBnbyB0byBsb2cuXG4gICAgaWYgKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMudGhyb3dTdHViRXhjZXB0aW9ucykge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9IGVsc2UgaWYgKCFleGNlcHRpb24uX2V4cGVjdGVkQnlUZXN0KSB7XG4gICAgICAgIE1ldGVvci5fZGVidWcoXG4gICAgICAgICAgXCJFeGNlcHRpb24gd2hpbGUgc2ltdWxhdGluZyB0aGUgZWZmZWN0IG9mIGludm9raW5nICdcIiArIG5hbWUgKyBcIidcIixcbiAgICAgICAgICBleGNlcHRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdCB0aGlzIHBvaW50IHdlJ3JlIGRlZmluaXRlbHkgZG9pbmcgYW4gUlBDLCBhbmQgd2UncmUgZ29pbmcgdG9cbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBSUEMgdG8gdGhlIGNhbGxlci5cblxuICAgIC8vIElmIHRoZSBjYWxsZXIgZGlkbid0IGdpdmUgYSBjYWxsYmFjaywgZGVjaWRlIHdoYXQgdG8gZG8uXG4gICAgbGV0IGZ1dHVyZTtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICAgIC8vIE9uIHRoZSBjbGllbnQsIHdlIGRvbid0IGhhdmUgZmliZXJzLCBzbyB3ZSBjYW4ndCBibG9jay4gVGhlXG4gICAgICAgIC8vIG9ubHkgdGhpbmcgd2UgY2FuIGRvIGlzIHRvIHJldHVybiB1bmRlZmluZWQgYW5kIGRpc2NhcmQgdGhlXG4gICAgICAgIC8vIHJlc3VsdCBvZiB0aGUgUlBDLiBJZiBhbiBlcnJvciBvY2N1cnJlZCB0aGVuIHByaW50IHRoZSBlcnJvclxuICAgICAgICAvLyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgY2FsbGJhY2sgPSBlcnIgPT4ge1xuICAgICAgICAgIGVyciAmJiBNZXRlb3IuX2RlYnVnKFwiRXJyb3IgaW52b2tpbmcgTWV0aG9kICdcIiArIG5hbWUgKyBcIidcIiwgZXJyKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9uIHRoZSBzZXJ2ZXIsIG1ha2UgdGhlIGZ1bmN0aW9uIHN5bmNocm9ub3VzLiBUaHJvdyBvblxuICAgICAgICAvLyBlcnJvcnMsIHJldHVybiBvbiBzdWNjZXNzLlxuICAgICAgICBmdXR1cmUgPSBuZXcgRnV0dXJlKCk7XG4gICAgICAgIGNhbGxiYWNrID0gZnV0dXJlLnJlc29sdmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmFuZG9tU2VlZCBvbmx5IGlmIHdlIHVzZWQgaXRcbiAgICBpZiAocmFuZG9tU2VlZC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5yYW5kb21TZWVkID0gcmFuZG9tU2VlZC52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRob2RJbnZva2VyID0gbmV3IE1ldGhvZEludm9rZXIoe1xuICAgICAgbWV0aG9kSWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjb25uZWN0aW9uOiBzZWxmLFxuICAgICAgb25SZXN1bHRSZWNlaXZlZDogb3B0aW9ucy5vblJlc3VsdFJlY2VpdmVkLFxuICAgICAgd2FpdDogISFvcHRpb25zLndhaXQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgbm9SZXRyeTogISFvcHRpb25zLm5vUmV0cnlcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLndhaXQpIHtcbiAgICAgIC8vIEl0J3MgYSB3YWl0IG1ldGhvZCEgV2FpdCBtZXRob2RzIGdvIGluIHRoZWlyIG93biBibG9jay5cbiAgICAgIHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzLnB1c2goe1xuICAgICAgICB3YWl0OiB0cnVlLFxuICAgICAgICBtZXRob2RzOiBbbWV0aG9kSW52b2tlcl1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3QgYSB3YWl0IG1ldGhvZC4gU3RhcnQgYSBuZXcgYmxvY2sgaWYgdGhlIHByZXZpb3VzIGJsb2NrIHdhcyBhIHdhaXRcbiAgICAgIC8vIGJsb2NrLCBhbmQgYWRkIGl0IHRvIHRoZSBsYXN0IGJsb2NrIG9mIG1ldGhvZHMuXG4gICAgICBpZiAoaXNFbXB0eShzZWxmLl9vdXRzdGFuZGluZ01ldGhvZEJsb2NrcykgfHxcbiAgICAgICAgICBsYXN0KHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzKS53YWl0KSB7XG4gICAgICAgIHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzLnB1c2goe1xuICAgICAgICAgIHdhaXQ6IGZhbHNlLFxuICAgICAgICAgIG1ldGhvZHM6IFtdLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbGFzdChzZWxmLl9vdXRzdGFuZGluZ01ldGhvZEJsb2NrcykubWV0aG9kcy5wdXNoKG1ldGhvZEludm9rZXIpO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGFkZGVkIGl0IHRvIHRoZSBmaXJzdCBibG9jaywgc2VuZCBpdCBvdXQgbm93LlxuICAgIGlmIChzZWxmLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrcy5sZW5ndGggPT09IDEpIG1ldGhvZEludm9rZXIuc2VuZE1lc3NhZ2UoKTtcblxuICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBkZWZhdWx0IGNhbGxiYWNrIG9uIHRoZSBzZXJ2ZXIsXG4gICAgLy8gYmxvY2sgd2FpdGluZyBmb3IgdGhlIHJlc3VsdC5cbiAgICBpZiAoZnV0dXJlKSB7XG4gICAgICByZXR1cm4gZnV0dXJlLndhaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMucmV0dXJuU3R1YlZhbHVlID8gc3R1YlJldHVyblZhbHVlIDogdW5kZWZpbmVkO1xuICB9XG5cblxuICBfc3R1YkNhbGwobmFtZSwgYXJncywgb3B0aW9ucykge1xuICAgIC8vIFJ1biB0aGUgc3R1YiwgaWYgd2UgaGF2ZSBvbmUuIFRoZSBzdHViIGlzIHN1cHBvc2VkIHRvIG1ha2Ugc29tZVxuICAgIC8vIHRlbXBvcmFyeSB3cml0ZXMgdG8gdGhlIGRhdGFiYXNlIHRvIGdpdmUgdGhlIHVzZXIgYSBzbW9vdGggZXhwZXJpZW5jZVxuICAgIC8vIHVudGlsIHRoZSBhY3R1YWwgcmVzdWx0IG9mIGV4ZWN1dGluZyB0aGUgbWV0aG9kIGNvbWVzIGJhY2sgZnJvbSB0aGVcbiAgICAvLyBzZXJ2ZXIgKHdoZXJldXBvbiB0aGUgdGVtcG9yYXJ5IHdyaXRlcyB0byB0aGUgZGF0YWJhc2Ugd2lsbCBiZSByZXZlcnNlZFxuICAgIC8vIGR1cmluZyB0aGUgYmVnaW5VcGRhdGUvZW5kVXBkYXRlIHByb2Nlc3MuKVxuICAgIC8vXG4gICAgLy8gTm9ybWFsbHksIHdlIGlnbm9yZSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBzdHViIChldmVuIGlmIGl0IGlzIGFuXG4gICAgLy8gZXhjZXB0aW9uKSwgaW4gZmF2b3Igb2YgdGhlIHJlYWwgcmV0dXJuIHZhbHVlIGZyb20gdGhlIHNlcnZlci4gVGhlXG4gICAgLy8gZXhjZXB0aW9uIGlzIGlmIHRoZSAqY2FsbGVyKiBpcyBhIHN0dWIuIEluIHRoYXQgY2FzZSwgd2UncmUgbm90IGdvaW5nXG4gICAgLy8gdG8gZG8gYSBSUEMsIHNvIHdlIHVzZSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBzdHViIGFzIG91ciByZXR1cm5cbiAgICAvLyB2YWx1ZS5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBlbmNsb3NpbmcgPSBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLmdldCgpO1xuICAgIGNvbnN0IHN0dWIgPSBzZWxmLl9tZXRob2RIYW5kbGVyc1tuYW1lXTtcbiAgICBjb25zdCBhbHJlYWR5SW5TaW11bGF0aW9uID0gZW5jbG9zaW5nPy5pc1NpbXVsYXRpb247XG4gICAgY29uc3QgaXNGcm9tQ2FsbEFzeW5jID0gZW5jbG9zaW5nPy5faXNGcm9tQ2FsbEFzeW5jO1xuICAgIGNvbnN0IHJhbmRvbVNlZWQgPSB7IHZhbHVlOiBudWxsfTtcblxuICAgIGNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XG4gICAgICBhbHJlYWR5SW5TaW11bGF0aW9uLCByYW5kb21TZWVkLCBpc0Zyb21DYWxsQXN5bmNcbiAgICB9O1xuICAgIGlmICghc3R1Yikge1xuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFJldHVybiwgaGFzU3R1YjogZmFsc2UgfTtcbiAgICB9XG5cbiAgICAvLyBMYXppbHkgZ2VuZXJhdGUgYSByYW5kb21TZWVkLCBvbmx5IGlmIGl0IGlzIHJlcXVlc3RlZCBieSB0aGUgc3R1Yi5cbiAgICAvLyBUaGUgcmFuZG9tIHN0cmVhbXMgb25seSBoYXZlIHV0aWxpdHkgaWYgdGhleSdyZSB1c2VkIG9uIGJvdGggdGhlIGNsaWVudFxuICAgIC8vIGFuZCB0aGUgc2VydmVyOyBpZiB0aGUgY2xpZW50IGRvZXNuJ3QgZ2VuZXJhdGUgYW55ICdyYW5kb20nIHZhbHVlc1xuICAgIC8vIHRoZW4gd2UgZG9uJ3QgZXhwZWN0IHRoZSBzZXJ2ZXIgdG8gZ2VuZXJhdGUgYW55IGVpdGhlci5cbiAgICAvLyBMZXNzIGNvbW1vbmx5LCB0aGUgc2VydmVyIG1heSBwZXJmb3JtIGRpZmZlcmVudCBhY3Rpb25zIGZyb20gdGhlIGNsaWVudCxcbiAgICAvLyBhbmQgbWF5IGluIGZhY3QgZ2VuZXJhdGUgdmFsdWVzIHdoZXJlIHRoZSBjbGllbnQgZGlkIG5vdCwgYnV0IHdlIGRvbid0XG4gICAgLy8gaGF2ZSBhbnkgY2xpZW50LXNpZGUgdmFsdWVzIHRvIG1hdGNoLCBzbyBldmVuIGhlcmUgd2UgbWF5IGFzIHdlbGwganVzdFxuICAgIC8vIHVzZSBhIHJhbmRvbSBzZWVkIG9uIHRoZSBzZXJ2ZXIuICBJbiB0aGF0IGNhc2UsIHdlIGRvbid0IHBhc3MgdGhlXG4gICAgLy8gcmFuZG9tU2VlZCB0byBzYXZlIGJhbmR3aWR0aCwgYW5kIHdlIGRvbid0IGV2ZW4gZ2VuZXJhdGUgaXQgdG8gc2F2ZSBhXG4gICAgLy8gYml0IG9mIENQVSBhbmQgdG8gYXZvaWQgY29uc3VtaW5nIGVudHJvcHkuXG5cbiAgICBjb25zdCByYW5kb21TZWVkR2VuZXJhdG9yID0gKCkgPT4ge1xuICAgICAgaWYgKHJhbmRvbVNlZWQudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmFuZG9tU2VlZC52YWx1ZSA9IEREUENvbW1vbi5tYWtlUnBjU2VlZChlbmNsb3NpbmcsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmRvbVNlZWQudmFsdWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFVzZXJJZCA9IHVzZXJJZCA9PiB7XG4gICAgICBzZWxmLnNldFVzZXJJZCh1c2VySWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnZvY2F0aW9uID0gbmV3IEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uKHtcbiAgICAgIG5hbWUsXG4gICAgICBpc1NpbXVsYXRpb246IHRydWUsXG4gICAgICB1c2VySWQ6IHNlbGYudXNlcklkKCksXG4gICAgICBpc0Zyb21DYWxsQXN5bmM6IG9wdGlvbnM/LmlzRnJvbUNhbGxBc3luYyxcbiAgICAgIHNldFVzZXJJZDogc2V0VXNlcklkLFxuICAgICAgcmFuZG9tU2VlZCgpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbVNlZWRHZW5lcmF0b3IoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE5vdGUgdGhhdCB1bmxpa2UgaW4gdGhlIGNvcnJlc3BvbmRpbmcgc2VydmVyIGNvZGUsIHdlIG5ldmVyIGF1ZGl0XG4gICAgLy8gdGhhdCBzdHVicyBjaGVjaygpIHRoZWlyIGFyZ3VtZW50cy5cbiAgICBjb25zdCBzdHViSW52b2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAgICAgICAgIC8vIEJlY2F1c2Ugc2F2ZU9yaWdpbmFscyBhbmQgcmV0cmlldmVPcmlnaW5hbHMgYXJlbid0IHJlZW50cmFudCxcbiAgICAgICAgICAvLyBkb24ndCBhbGxvdyBzdHVicyB0byB5aWVsZC5cbiAgICAgICAgICByZXR1cm4gTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmUtY2xvbmUsIHNvIHRoYXQgdGhlIHN0dWIgY2FuJ3QgYWZmZWN0IG91ciBjYWxsZXIncyB2YWx1ZXNcbiAgICAgICAgICAgIHJldHVybiBzdHViLmFwcGx5KGludm9jYXRpb24sIEVKU09OLmNsb25lKGFyZ3MpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3R1Yi5hcHBseShpbnZvY2F0aW9uLCBFSlNPTi5jbG9uZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRSZXR1cm4sIGhhc1N0dWI6IHRydWUsIHN0dWJJbnZvY2F0aW9uLCBpbnZvY2F0aW9uIH07XG4gIH1cblxuICAvLyBCZWZvcmUgY2FsbGluZyBhIG1ldGhvZCBzdHViLCBwcmVwYXJlIGFsbCBzdG9yZXMgdG8gdHJhY2sgY2hhbmdlcyBhbmQgYWxsb3dcbiAgLy8gX3JldHJpZXZlQW5kU3RvcmVPcmlnaW5hbHMgdG8gZ2V0IHRoZSBvcmlnaW5hbCB2ZXJzaW9ucyBvZiBjaGFuZ2VkXG4gIC8vIGRvY3VtZW50cy5cbiAgX3NhdmVPcmlnaW5hbHMoKSB7XG4gICAgaWYgKCEgdGhpcy5fd2FpdGluZ0ZvclF1aWVzY2VuY2UoKSkge1xuICAgICAgdGhpcy5fZmx1c2hCdWZmZXJlZFdyaXRlcygpO1xuICAgIH1cblxuICAgIE9iamVjdC52YWx1ZXModGhpcy5fc3RvcmVzKS5mb3JFYWNoKChzdG9yZSkgPT4ge1xuICAgICAgc3RvcmUuc2F2ZU9yaWdpbmFscygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmV0cmlldmVzIHRoZSBvcmlnaW5hbCB2ZXJzaW9ucyBvZiBhbGwgZG9jdW1lbnRzIG1vZGlmaWVkIGJ5IHRoZSBzdHViIGZvclxuICAvLyBtZXRob2QgJ21ldGhvZElkJyBmcm9tIGFsbCBzdG9yZXMgYW5kIHNhdmVzIHRoZW0gdG8gX3NlcnZlckRvY3VtZW50cyAoa2V5ZWRcbiAgLy8gYnkgZG9jdW1lbnQpIGFuZCBfZG9jdW1lbnRzV3JpdHRlbkJ5U3R1YiAoa2V5ZWQgYnkgbWV0aG9kIElEKS5cbiAgX3JldHJpZXZlQW5kU3RvcmVPcmlnaW5hbHMobWV0aG9kSWQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fZG9jdW1lbnRzV3JpdHRlbkJ5U3R1YlttZXRob2RJZF0pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBtZXRob2RJZCBpbiBfcmV0cmlldmVBbmRTdG9yZU9yaWdpbmFscycpO1xuXG4gICAgY29uc3QgZG9jc1dyaXR0ZW4gPSBbXTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHNlbGYuX3N0b3JlcykuZm9yRWFjaCgoW2NvbGxlY3Rpb24sIHN0b3JlXSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxzID0gc3RvcmUucmV0cmlldmVPcmlnaW5hbHMoKTtcbiAgICAgIC8vIG5vdCBhbGwgc3RvcmVzIGRlZmluZSByZXRyaWV2ZU9yaWdpbmFsc1xuICAgICAgaWYgKCEgb3JpZ2luYWxzKSByZXR1cm47XG4gICAgICBvcmlnaW5hbHMuZm9yRWFjaCgoZG9jLCBpZCkgPT4ge1xuICAgICAgICBkb2NzV3JpdHRlbi5wdXNoKHsgY29sbGVjdGlvbiwgaWQgfSk7XG4gICAgICAgIGlmICghIGhhc093bi5jYWxsKHNlbGYuX3NlcnZlckRvY3VtZW50cywgY29sbGVjdGlvbikpIHtcbiAgICAgICAgICBzZWxmLl9zZXJ2ZXJEb2N1bWVudHNbY29sbGVjdGlvbl0gPSBuZXcgTW9uZ29JRE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZlckRvYyA9IHNlbGYuX3NlcnZlckRvY3VtZW50c1tjb2xsZWN0aW9uXS5zZXREZWZhdWx0KFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlcnZlckRvYy53cml0dGVuQnlTdHVicykge1xuICAgICAgICAgIC8vIFdlJ3JlIG5vdCB0aGUgZmlyc3Qgc3R1YiB0byB3cml0ZSB0aGlzIGRvYy4gSnVzdCBhZGQgb3VyIG1ldGhvZCBJRFxuICAgICAgICAgIC8vIHRvIHRoZSByZWNvcmQuXG4gICAgICAgICAgc2VydmVyRG9jLndyaXR0ZW5CeVN0dWJzW21ldGhvZElkXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmlyc3Qgc3R1YiEgU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYW5kIG91ciBtZXRob2QgSUQuXG4gICAgICAgICAgc2VydmVyRG9jLmRvY3VtZW50ID0gZG9jO1xuICAgICAgICAgIHNlcnZlckRvYy5mbHVzaENhbGxiYWNrcyA9IFtdO1xuICAgICAgICAgIHNlcnZlckRvYy53cml0dGVuQnlTdHVicyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgc2VydmVyRG9jLndyaXR0ZW5CeVN0dWJzW21ldGhvZElkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICghIGlzRW1wdHkoZG9jc1dyaXR0ZW4pKSB7XG4gICAgICBzZWxmLl9kb2N1bWVudHNXcml0dGVuQnlTdHViW21ldGhvZElkXSA9IGRvY3NXcml0dGVuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgaXMgdmVyeSBtdWNoIGEgcHJpdmF0ZSBmdW5jdGlvbiB3ZSB1c2UgdG8gbWFrZSB0aGUgdGVzdHNcbiAgLy8gdGFrZSB1cCBmZXdlciBzZXJ2ZXIgcmVzb3VyY2VzIGFmdGVyIHRoZXkgY29tcGxldGUuXG4gIF91bnN1YnNjcmliZUFsbCgpIHtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuX3N1YnNjcmlwdGlvbnMpLmZvckVhY2goKHN1YikgPT4ge1xuICAgICAgLy8gQXZvaWQga2lsbGluZyB0aGUgYXV0b3VwZGF0ZSBzdWJzY3JpcHRpb24gc28gdGhhdCBkZXZlbG9wZXJzXG4gICAgICAvLyBzdGlsbCBnZXQgaG90IGNvZGUgcHVzaGVzIHdoZW4gd3JpdGluZyB0ZXN0cy5cbiAgICAgIC8vXG4gICAgICAvLyBYWFggaXQncyBhIGhhY2sgdG8gZW5jb2RlIGtub3dsZWRnZSBhYm91dCBhdXRvdXBkYXRlIGhlcmUsXG4gICAgICAvLyBidXQgaXQgZG9lc24ndCBzZWVtIHdvcnRoIGl0IHlldCB0byBoYXZlIGEgc3BlY2lhbCBBUEkgZm9yXG4gICAgICAvLyBzdWJzY3JpcHRpb25zIHRvIHByZXNlcnZlIGFmdGVyIHVuaXQgdGVzdHMuXG4gICAgICBpZiAoc3ViLm5hbWUgIT09ICdtZXRlb3JfYXV0b3VwZGF0ZV9jbGllbnRWZXJzaW9ucycpIHtcbiAgICAgICAgc3ViLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNlbmRzIHRoZSBERFAgc3RyaW5naWZpY2F0aW9uIG9mIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdFxuICBfc2VuZChvYmopIHtcbiAgICB0aGlzLl9zdHJlYW0uc2VuZChERFBDb21tb24uc3RyaW5naWZ5RERQKG9iaikpO1xuICB9XG5cbiAgLy8gV2UgZGV0ZWN0ZWQgdmlhIEREUC1sZXZlbCBoZWFydGJlYXRzIHRoYXQgd2UndmUgbG9zdCB0aGVcbiAgLy8gY29ubmVjdGlvbi4gIFVubGlrZSBgZGlzY29ubmVjdGAgb3IgYGNsb3NlYCwgYSBsb3N0IGNvbm5lY3Rpb25cbiAgLy8gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJldHJpZWQuXG4gIF9sb3N0Q29ubmVjdGlvbihlcnJvcikge1xuICAgIHRoaXMuX3N0cmVhbS5fbG9zdENvbm5lY3Rpb24oZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBNZXRlb3JcbiAgICogQGltcG9ydEZyb21QYWNrYWdlIG1ldGVvclxuICAgKiBAYWxpYXMgTWV0ZW9yLnN0YXR1c1xuICAgKiBAc3VtbWFyeSBHZXQgdGhlIGN1cnJlbnQgY29ubmVjdGlvbiBzdGF0dXMuIEEgcmVhY3RpdmUgZGF0YSBzb3VyY2UuXG4gICAqIEBsb2N1cyBDbGllbnRcbiAgICovXG4gIHN0YXR1cyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmVhbS5zdGF0dXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgRm9yY2UgYW4gaW1tZWRpYXRlIHJlY29ubmVjdGlvbiBhdHRlbXB0IGlmIHRoZSBjbGllbnQgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgc2VydmVyLlxuXG4gIFRoaXMgbWV0aG9kIGRvZXMgbm90aGluZyBpZiB0aGUgY2xpZW50IGlzIGFscmVhZHkgY29ubmVjdGVkLlxuICAgKiBAbWVtYmVyT2YgTWV0ZW9yXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAgICogQGFsaWFzIE1ldGVvci5yZWNvbm5lY3RcbiAgICogQGxvY3VzIENsaWVudFxuICAgKi9cbiAgcmVjb25uZWN0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtLnJlY29ubmVjdCguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgTWV0ZW9yXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAgICogQGFsaWFzIE1ldGVvci5kaXNjb25uZWN0XG4gICAqIEBzdW1tYXJ5IERpc2Nvbm5lY3QgdGhlIGNsaWVudCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqIEBsb2N1cyBDbGllbnRcbiAgICovXG4gIGRpc2Nvbm5lY3QoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW0uZGlzY29ubmVjdCguLi5hcmdzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW0uZGlzY29ubmVjdCh7IF9wZXJtYW5lbnQ6IHRydWUgfSk7XG4gIH1cblxuICAvLy9cbiAgLy8vIFJlYWN0aXZlIHVzZXIgc3lzdGVtXG4gIC8vL1xuICB1c2VySWQoKSB7XG4gICAgaWYgKHRoaXMuX3VzZXJJZERlcHMpIHRoaXMuX3VzZXJJZERlcHMuZGVwZW5kKCk7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuXG4gIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICAvLyBBdm9pZCBpbnZhbGlkYXRpbmcgZGVwZW5kZW50cyBpZiBzZXRVc2VySWQgaXMgY2FsbGVkIHdpdGggY3VycmVudCB2YWx1ZS5cbiAgICBpZiAodGhpcy5fdXNlcklkID09PSB1c2VySWQpIHJldHVybjtcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKHRoaXMuX3VzZXJJZERlcHMpIHRoaXMuX3VzZXJJZERlcHMuY2hhbmdlZCgpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBpbiBhIHN0YXRlIGFmdGVyIHJlY29ubmVjdCBvZiB3YWl0aW5nIGZvciBzdWJzIHRvIGJlXG4gIC8vIHJldml2ZWQgb3IgZWFybHkgbWV0aG9kcyB0byBmaW5pc2ggdGhlaXIgZGF0YSwgb3Igd2UgYXJlIHdhaXRpbmcgZm9yIGFcbiAgLy8gXCJ3YWl0XCIgbWV0aG9kIHRvIGZpbmlzaC5cbiAgX3dhaXRpbmdGb3JRdWllc2NlbmNlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhIGlzRW1wdHkodGhpcy5fc3Vic0JlaW5nUmV2aXZlZCkgfHxcbiAgICAgICEgaXNFbXB0eSh0aGlzLl9tZXRob2RzQmxvY2tpbmdRdWllc2NlbmNlKVxuICAgICk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgYW55IG1ldGhvZCB3aG9zZSBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgdG8gdGhlIHNlcnZlciBoYXNcbiAgLy8gbm90IHlldCBpbnZva2VkIGl0cyB1c2VyIGNhbGxiYWNrLlxuICBfYW55TWV0aG9kc0FyZU91dHN0YW5kaW5nKCkge1xuICAgIGNvbnN0IGludm9rZXJzID0gdGhpcy5fbWV0aG9kSW52b2tlcnM7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaW52b2tlcnMpLnNvbWUoKGludm9rZXIpID0+ICEhaW52b2tlci5zZW50TWVzc2FnZSk7XG4gIH1cblxuICBfbGl2ZWRhdGFfY29ubmVjdGVkKG1zZykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYuX3ZlcnNpb24gIT09ICdwcmUxJyAmJiBzZWxmLl9oZWFydGJlYXRJbnRlcnZhbCAhPT0gMCkge1xuICAgICAgc2VsZi5faGVhcnRiZWF0ID0gbmV3IEREUENvbW1vbi5IZWFydGJlYXQoe1xuICAgICAgICBoZWFydGJlYXRJbnRlcnZhbDogc2VsZi5faGVhcnRiZWF0SW50ZXJ2YWwsXG4gICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQ6IHNlbGYuX2hlYXJ0YmVhdFRpbWVvdXQsXG4gICAgICAgIG9uVGltZW91dCgpIHtcbiAgICAgICAgICBzZWxmLl9sb3N0Q29ubmVjdGlvbihcbiAgICAgICAgICAgIG5ldyBERFAuQ29ubmVjdGlvbkVycm9yKCdERFAgaGVhcnRiZWF0IHRpbWVkIG91dCcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VuZFBpbmcoKSB7XG4gICAgICAgICAgc2VsZi5fc2VuZCh7IG1zZzogJ3BpbmcnIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNlbGYuX2hlYXJ0YmVhdC5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSByZWNvbm5lY3QsIHdlJ2xsIGhhdmUgdG8gcmVzZXQgYWxsIHN0b3Jlcy5cbiAgICBpZiAoc2VsZi5fbGFzdFNlc3Npb25JZCkgc2VsZi5fcmVzZXRTdG9yZXMgPSB0cnVlO1xuXG4gICAgbGV0IHJlY29ubmVjdGVkVG9QcmV2aW91c1Nlc3Npb247XG4gICAgaWYgKHR5cGVvZiBtc2cuc2Vzc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlY29ubmVjdGVkVG9QcmV2aW91c1Nlc3Npb24gPSBzZWxmLl9sYXN0U2Vzc2lvbklkID09PSBtc2cuc2Vzc2lvbjtcbiAgICAgIHNlbGYuX2xhc3RTZXNzaW9uSWQgPSBtc2cuc2Vzc2lvbjtcbiAgICB9XG5cbiAgICBpZiAocmVjb25uZWN0ZWRUb1ByZXZpb3VzU2Vzc2lvbikge1xuICAgICAgLy8gU3VjY2Vzc2Z1bCByZWNvbm5lY3Rpb24gLS0gcGljayB1cCB3aGVyZSB3ZSBsZWZ0IG9mZi4gIE5vdGUgdGhhdCByaWdodFxuICAgICAgLy8gbm93LCB0aGlzIG5ldmVyIGhhcHBlbnM6IHRoZSBzZXJ2ZXIgbmV2ZXIgY29ubmVjdHMgdXMgdG8gYSBwcmV2aW91c1xuICAgICAgLy8gc2Vzc2lvbiwgYmVjYXVzZSBERFAgZG9lc24ndCBwcm92aWRlIGVub3VnaCBkYXRhIGZvciB0aGUgc2VydmVyIHRvIGtub3dcbiAgICAgIC8vIHdoYXQgbWVzc2FnZXMgdGhlIGNsaWVudCBoYXMgcHJvY2Vzc2VkLiBXZSBuZWVkIHRvIGltcHJvdmUgRERQIHRvIG1ha2VcbiAgICAgIC8vIHRoaXMgcG9zc2libGUsIGF0IHdoaWNoIHBvaW50IHdlJ2xsIHByb2JhYmx5IG5lZWQgbW9yZSBjb2RlIGhlcmUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2VydmVyIGRvZXNuJ3QgaGF2ZSBvdXIgZGF0YSBhbnkgbW9yZS4gUmUtc3luYyBhIG5ldyBzZXNzaW9uLlxuXG4gICAgLy8gRm9yZ2V0IGFib3V0IG1lc3NhZ2VzIHdlIHdlcmUgYnVmZmVyaW5nIGZvciB1bmtub3duIGNvbGxlY3Rpb25zLiBUaGV5J2xsXG4gICAgLy8gYmUgcmVzZW50IGlmIHN0aWxsIHJlbGV2YW50LlxuICAgIHNlbGYuX3VwZGF0ZXNGb3JVbmtub3duU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIGlmIChzZWxmLl9yZXNldFN0b3Jlcykge1xuICAgICAgLy8gRm9yZ2V0IGFib3V0IHRoZSBlZmZlY3RzIG9mIHN0dWJzLiBXZSdsbCBiZSByZXNldHRpbmcgYWxsIGNvbGxlY3Rpb25zXG4gICAgICAvLyBhbnl3YXkuXG4gICAgICBzZWxmLl9kb2N1bWVudHNXcml0dGVuQnlTdHViID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHNlbGYuX3NlcnZlckRvY3VtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgX2FmdGVyVXBkYXRlQ2FsbGJhY2tzLlxuICAgIHNlbGYuX2FmdGVyVXBkYXRlQ2FsbGJhY2tzID0gW107XG5cbiAgICAvLyBNYXJrIGFsbCBuYW1lZCBzdWJzY3JpcHRpb25zIHdoaWNoIGFyZSByZWFkeSAoaWUsIHdlIGFscmVhZHkgY2FsbGVkIHRoZVxuICAgIC8vIHJlYWR5IGNhbGxiYWNrKSBhcyBuZWVkaW5nIHRvIGJlIHJldml2ZWQuXG4gICAgLy8gWFhYIFdlIHNob3VsZCBhbHNvIGJsb2NrIHJlY29ubmVjdCBxdWllc2NlbmNlIHVudGlsIHVubmFtZWQgc3Vic2NyaXB0aW9uc1xuICAgIC8vICAgICAoZWcsIGF1dG9wdWJsaXNoKSBhcmUgZG9uZSByZS1wdWJsaXNoaW5nIHRvIGF2b2lkIGZsaWNrZXIhXG4gICAgc2VsZi5fc3Vic0JlaW5nUmV2aXZlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgT2JqZWN0LmVudHJpZXMoc2VsZi5fc3Vic2NyaXB0aW9ucykuZm9yRWFjaCgoW2lkLCBzdWJdKSA9PiB7XG4gICAgICBpZiAoc3ViLnJlYWR5KSB7XG4gICAgICAgIHNlbGYuX3N1YnNCZWluZ1Jldml2ZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFycmFuZ2UgZm9yIFwiaGFsZi1maW5pc2hlZFwiIG1ldGhvZHMgdG8gaGF2ZSB0aGVpciBjYWxsYmFja3MgcnVuLCBhbmRcbiAgICAvLyB0cmFjayBtZXRob2RzIHRoYXQgd2VyZSBzZW50IG9uIHRoaXMgY29ubmVjdGlvbiBzbyB0aGF0IHdlIGRvbid0XG4gICAgLy8gcXVpZXNjZSB1bnRpbCB0aGV5IGFyZSBhbGwgZG9uZS5cbiAgICAvL1xuICAgIC8vIFN0YXJ0IGJ5IGNsZWFyaW5nIF9tZXRob2RzQmxvY2tpbmdRdWllc2NlbmNlOiBtZXRob2RzIHNlbnQgYmVmb3JlXG4gICAgLy8gcmVjb25uZWN0IGRvbid0IG1hdHRlciwgYW5kIGFueSBcIndhaXRcIiBtZXRob2RzIHNlbnQgb24gdGhlIG5ldyBjb25uZWN0aW9uXG4gICAgLy8gdGhhdCB3ZSBkcm9wIGhlcmUgd2lsbCBiZSByZXN0b3JlZCBieSB0aGUgbG9vcCBiZWxvdy5cbiAgICBzZWxmLl9tZXRob2RzQmxvY2tpbmdRdWllc2NlbmNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoc2VsZi5fcmVzZXRTdG9yZXMpIHtcbiAgICAgIGNvbnN0IGludm9rZXJzID0gc2VsZi5fbWV0aG9kSW52b2tlcnM7XG4gICAgICBrZXlzKGludm9rZXJzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgY29uc3QgaW52b2tlciA9IGludm9rZXJzW2lkXTtcbiAgICAgICAgaWYgKGludm9rZXIuZ290UmVzdWx0KCkpIHtcbiAgICAgICAgICAvLyBUaGlzIG1ldGhvZCBhbHJlYWR5IGdvdCBpdHMgcmVzdWx0LCBidXQgaXQgZGlkbid0IGNhbGwgaXRzIGNhbGxiYWNrXG4gICAgICAgICAgLy8gYmVjYXVzZSBpdHMgZGF0YSBkaWRuJ3QgYmVjb21lIHZpc2libGUuIFdlIGRpZCBub3QgcmVzZW5kIHRoZVxuICAgICAgICAgIC8vIG1ldGhvZCBSUEMuIFdlJ2xsIGNhbGwgaXRzIGNhbGxiYWNrIHdoZW4gd2UgZ2V0IGEgZnVsbCBxdWllc2NlLFxuICAgICAgICAgIC8vIHNpbmNlIHRoYXQncyBhcyBjbG9zZSBhcyB3ZSdsbCBnZXQgdG8gXCJkYXRhIG11c3QgYmUgdmlzaWJsZVwiLlxuICAgICAgICAgIHNlbGYuX2FmdGVyVXBkYXRlQ2FsbGJhY2tzLnB1c2goXG4gICAgICAgICAgICAoLi4uYXJncykgPT4gaW52b2tlci5kYXRhVmlzaWJsZSguLi5hcmdzKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW52b2tlci5zZW50TWVzc2FnZSkge1xuICAgICAgICAgIC8vIFRoaXMgbWV0aG9kIGhhcyBiZWVuIHNlbnQgb24gdGhpcyBjb25uZWN0aW9uIChtYXliZSBhcyBhIHJlc2VuZFxuICAgICAgICAgIC8vIGZyb20gdGhlIGxhc3QgY29ubmVjdGlvbiwgbWF5YmUgZnJvbSBvblJlY29ubmVjdCwgbWF5YmUganVzdCB2ZXJ5XG4gICAgICAgICAgLy8gcXVpY2tseSBiZWZvcmUgcHJvY2Vzc2luZyB0aGUgY29ubmVjdGVkIG1lc3NhZ2UpLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBzcGVjaWFsIHRvIGVuc3VyZSBpdHMgY2FsbGJhY2tzIGdldFxuICAgICAgICAgIC8vIGNhbGxlZCwgYnV0IHdlJ2xsIGNvdW50IGl0IGFzIGEgbWV0aG9kIHdoaWNoIGlzIHByZXZlbnRpbmdcbiAgICAgICAgICAvLyByZWNvbm5lY3QgcXVpZXNjZW5jZS4gKGVnLCBpdCBtaWdodCBiZSBhIGxvZ2luIG1ldGhvZCB0aGF0IHdhcyBydW5cbiAgICAgICAgICAvLyBmcm9tIG9uUmVjb25uZWN0LCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzZWUgZmxpY2tlciBieSBzZWVpbmcgYVxuICAgICAgICAgIC8vIGxvZ2dlZC1vdXQgc3RhdGUuKVxuICAgICAgICAgIHNlbGYuX21ldGhvZHNCbG9ja2luZ1F1aWVzY2VuY2VbaW52b2tlci5tZXRob2RJZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9tZXNzYWdlc0J1ZmZlcmVkVW50aWxRdWllc2NlbmNlID0gW107XG5cbiAgICAvLyBJZiB3ZSdyZSBub3Qgd2FpdGluZyBvbiBhbnkgbWV0aG9kcyBvciBzdWJzLCB3ZSBjYW4gcmVzZXQgdGhlIHN0b3JlcyBhbmRcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFja3MgaW1tZWRpYXRlbHkuXG4gICAgaWYgKCEgc2VsZi5fd2FpdGluZ0ZvclF1aWVzY2VuY2UoKSkge1xuICAgICAgaWYgKHNlbGYuX3Jlc2V0U3RvcmVzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2VsZi5fc3RvcmVzKS5mb3JFYWNoKChzdG9yZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLmJlZ2luVXBkYXRlKDAsIHRydWUpO1xuICAgICAgICAgIHN0b3JlLmVuZFVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5fcmVzZXRTdG9yZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlbGYuX3J1bkFmdGVyVXBkYXRlQ2FsbGJhY2tzKCk7XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3NPbmVEYXRhTWVzc2FnZShtc2csIHVwZGF0ZXMpIHtcbiAgICBjb25zdCBtZXNzYWdlVHlwZSA9IG1zZy5tc2c7XG5cbiAgICAvLyBtc2cgaXMgb25lIG9mIFsnYWRkZWQnLCAnY2hhbmdlZCcsICdyZW1vdmVkJywgJ3JlYWR5JywgJ3VwZGF0ZWQnXVxuICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gJ2FkZGVkJykge1xuICAgICAgdGhpcy5fcHJvY2Vzc19hZGRlZChtc2csIHVwZGF0ZXMpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZVR5cGUgPT09ICdjaGFuZ2VkJykge1xuICAgICAgdGhpcy5fcHJvY2Vzc19jaGFuZ2VkKG1zZywgdXBkYXRlcyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzX3JlbW92ZWQobXNnLCB1cGRhdGVzKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VUeXBlID09PSAncmVhZHknKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzX3JlYWR5KG1zZywgdXBkYXRlcyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gJ3VwZGF0ZWQnKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzX3VwZGF0ZWQobXNnLCB1cGRhdGVzKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VUeXBlID09PSAnbm9zdWInKSB7XG4gICAgICAvLyBpZ25vcmUgdGhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBNZXRlb3IuX2RlYnVnKCdkaXNjYXJkaW5nIHVua25vd24gbGl2ZWRhdGEgZGF0YSBtZXNzYWdlIHR5cGUnLCBtc2cpO1xuICAgIH1cbiAgfVxuXG4gIF9saXZlZGF0YV9kYXRhKG1zZykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYuX3dhaXRpbmdGb3JRdWllc2NlbmNlKCkpIHtcbiAgICAgIHNlbGYuX21lc3NhZ2VzQnVmZmVyZWRVbnRpbFF1aWVzY2VuY2UucHVzaChtc2cpO1xuXG4gICAgICBpZiAobXNnLm1zZyA9PT0gJ25vc3ViJykge1xuICAgICAgICBkZWxldGUgc2VsZi5fc3Vic0JlaW5nUmV2aXZlZFttc2cuaWRdO1xuICAgICAgfVxuXG4gICAgICBpZiAobXNnLnN1YnMpIHtcbiAgICAgICAgbXNnLnN1YnMuZm9yRWFjaChzdWJJZCA9PiB7XG4gICAgICAgICAgZGVsZXRlIHNlbGYuX3N1YnNCZWluZ1Jldml2ZWRbc3ViSWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1zZy5tZXRob2RzKSB7XG4gICAgICAgIG1zZy5tZXRob2RzLmZvckVhY2gobWV0aG9kSWQgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmLl9tZXRob2RzQmxvY2tpbmdRdWllc2NlbmNlW21ldGhvZElkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl93YWl0aW5nRm9yUXVpZXNjZW5jZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTm8gbWV0aG9kcyBvciBzdWJzIGFyZSBibG9ja2luZyBxdWllc2NlbmNlIVxuICAgICAgLy8gV2UnbGwgbm93IHByb2Nlc3MgYW5kIGFsbCBvZiBvdXIgYnVmZmVyZWQgbWVzc2FnZXMsIHJlc2V0IGFsbCBzdG9yZXMsXG4gICAgICAvLyBhbmQgYXBwbHkgdGhlbSBhbGwgYXQgb25jZS5cblxuICAgICAgY29uc3QgYnVmZmVyZWRNZXNzYWdlcyA9IHNlbGYuX21lc3NhZ2VzQnVmZmVyZWRVbnRpbFF1aWVzY2VuY2U7XG4gICAgICBPYmplY3QudmFsdWVzKGJ1ZmZlcmVkTWVzc2FnZXMpLmZvckVhY2goYnVmZmVyZWRNZXNzYWdlID0+IHtcbiAgICAgICAgc2VsZi5fcHJvY2Vzc09uZURhdGFNZXNzYWdlKFxuICAgICAgICAgIGJ1ZmZlcmVkTWVzc2FnZSxcbiAgICAgICAgICBzZWxmLl9idWZmZXJlZFdyaXRlc1xuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuX21lc3NhZ2VzQnVmZmVyZWRVbnRpbFF1aWVzY2VuY2UgPSBbXTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wcm9jZXNzT25lRGF0YU1lc3NhZ2UobXNnLCBzZWxmLl9idWZmZXJlZFdyaXRlcyk7XG4gICAgfVxuXG4gICAgLy8gSW1tZWRpYXRlbHkgZmx1c2ggd3JpdGVzIHdoZW46XG4gICAgLy8gIDEuIEJ1ZmZlcmluZyBpcyBkaXNhYmxlZC4gT3I7XG4gICAgLy8gIDIuIGFueSBub24tKGFkZGVkL2NoYW5nZWQvcmVtb3ZlZCkgbWVzc2FnZSBhcnJpdmVzLlxuICAgIGNvbnN0IHN0YW5kYXJkV3JpdGUgPVxuICAgICAgbXNnLm1zZyA9PT0gXCJhZGRlZFwiIHx8XG4gICAgICBtc2cubXNnID09PSBcImNoYW5nZWRcIiB8fFxuICAgICAgbXNnLm1zZyA9PT0gXCJyZW1vdmVkXCI7XG5cbiAgICBpZiAoc2VsZi5fYnVmZmVyZWRXcml0ZXNJbnRlcnZhbCA9PT0gMCB8fCAhIHN0YW5kYXJkV3JpdGUpIHtcbiAgICAgIHNlbGYuX2ZsdXNoQnVmZmVyZWRXcml0ZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEF0ID09PSBudWxsKSB7XG4gICAgICBzZWxmLl9idWZmZXJlZFdyaXRlc0ZsdXNoQXQgPVxuICAgICAgICBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIHNlbGYuX2J1ZmZlcmVkV3JpdGVzTWF4QWdlO1xuICAgIH0gZWxzZSBpZiAoc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEF0IDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpIHtcbiAgICAgIHNlbGYuX2ZsdXNoQnVmZmVyZWRXcml0ZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEhhbmRsZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX2J1ZmZlcmVkV3JpdGVzRmx1c2hIYW5kbGUpO1xuICAgIH1cbiAgICBzZWxmLl9idWZmZXJlZFdyaXRlc0ZsdXNoSGFuZGxlID0gc2V0VGltZW91dChcbiAgICAgIHNlbGYuX19mbHVzaEJ1ZmZlcmVkV3JpdGVzLFxuICAgICAgc2VsZi5fYnVmZmVyZWRXcml0ZXNJbnRlcnZhbFxuICAgICk7XG4gIH1cblxuICBfZmx1c2hCdWZmZXJlZFdyaXRlcygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEhhbmRsZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX2J1ZmZlcmVkV3JpdGVzRmx1c2hIYW5kbGUpO1xuICAgICAgc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEhhbmRsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc2VsZi5fYnVmZmVyZWRXcml0ZXNGbHVzaEF0ID0gbnVsbDtcbiAgICAvLyBXZSBuZWVkIHRvIGNsZWFyIHRoZSBidWZmZXIgYmVmb3JlIHBhc3NpbmcgaXQgdG9cbiAgICAvLyAgcGVyZm9ybVdyaXRlcy4gQXMgdGhlcmUncyBubyBndWFyYW50ZWUgdGhhdCBpdFxuICAgIC8vICB3aWxsIGV4aXQgY2xlYW5seS5cbiAgICBjb25zdCB3cml0ZXMgPSBzZWxmLl9idWZmZXJlZFdyaXRlcztcbiAgICBzZWxmLl9idWZmZXJlZFdyaXRlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgc2VsZi5fcGVyZm9ybVdyaXRlcyh3cml0ZXMpO1xuICB9XG5cbiAgX3BlcmZvcm1Xcml0ZXModXBkYXRlcykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYuX3Jlc2V0U3RvcmVzIHx8ICEgaXNFbXB0eSh1cGRhdGVzKSkge1xuICAgICAgLy8gQmVnaW4gYSB0cmFuc2FjdGlvbmFsIHVwZGF0ZSBvZiBlYWNoIHN0b3JlLlxuXG4gICAgICBPYmplY3QuZW50cmllcyhzZWxmLl9zdG9yZXMpLmZvckVhY2goKFtzdG9yZU5hbWUsIHN0b3JlXSkgPT4ge1xuICAgICAgICBzdG9yZS5iZWdpblVwZGF0ZShcbiAgICAgICAgICBoYXNPd24uY2FsbCh1cGRhdGVzLCBzdG9yZU5hbWUpXG4gICAgICAgICAgICA/IHVwZGF0ZXNbc3RvcmVOYW1lXS5sZW5ndGhcbiAgICAgICAgICAgIDogMCxcbiAgICAgICAgICBzZWxmLl9yZXNldFN0b3Jlc1xuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuX3Jlc2V0U3RvcmVzID0gZmFsc2U7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKHVwZGF0ZXMpLmZvckVhY2goKFtzdG9yZU5hbWUsIHVwZGF0ZU1lc3NhZ2VzXSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHNlbGYuX3N0b3Jlc1tzdG9yZU5hbWVdO1xuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICB1cGRhdGVNZXNzYWdlcy5mb3JFYWNoKHVwZGF0ZU1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgc3RvcmUudXBkYXRlKHVwZGF0ZU1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vYm9keSdzIGxpc3RlbmluZyBmb3IgdGhpcyBkYXRhLiBRdWV1ZSBpdCB1cCB1bnRpbFxuICAgICAgICAgIC8vIHNvbWVvbmUgd2FudHMgaXQuXG4gICAgICAgICAgLy8gWFhYIG1lbW9yeSB1c2Ugd2lsbCBncm93IHdpdGhvdXQgYm91bmQgaWYgeW91IGZvcmdldCB0b1xuICAgICAgICAgIC8vIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb3IganVzdCBkb24ndCBjYXJlIGFib3V0IGl0Li4uIGdvaW5nXG4gICAgICAgICAgLy8gdG8gaGF2ZSB0byBkbyBzb21ldGhpbmcgYWJvdXQgdGhhdC5cbiAgICAgICAgICBjb25zdCB1cGRhdGVzID0gc2VsZi5fdXBkYXRlc0ZvclVua25vd25TdG9yZXM7XG5cbiAgICAgICAgICBpZiAoISBoYXNPd24uY2FsbCh1cGRhdGVzLCBzdG9yZU5hbWUpKSB7XG4gICAgICAgICAgICB1cGRhdGVzW3N0b3JlTmFtZV0gPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGVzW3N0b3JlTmFtZV0ucHVzaCguLi51cGRhdGVNZXNzYWdlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbmQgdXBkYXRlIHRyYW5zYWN0aW9uLlxuICAgICAgT2JqZWN0LnZhbHVlcyhzZWxmLl9zdG9yZXMpLmZvckVhY2goKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLmVuZFVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fcnVuQWZ0ZXJVcGRhdGVDYWxsYmFja3MoKTtcbiAgfVxuXG4gIC8vIENhbGwgYW55IGNhbGxiYWNrcyBkZWZlcnJlZCB3aXRoIF9ydW5XaGVuQWxsU2VydmVyRG9jc0FyZUZsdXNoZWQgd2hvc2VcbiAgLy8gcmVsZXZhbnQgZG9jcyBoYXZlIGJlZW4gZmx1c2hlZCwgYXMgd2VsbCBhcyBkYXRhVmlzaWJsZSBjYWxsYmFja3MgYXRcbiAgLy8gcmVjb25uZWN0LXF1aWVzY2VuY2UgdGltZS5cbiAgX3J1bkFmdGVyVXBkYXRlQ2FsbGJhY2tzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHNlbGYuX2FmdGVyVXBkYXRlQ2FsbGJhY2tzO1xuICAgIHNlbGYuX2FmdGVyVXBkYXRlQ2FsbGJhY2tzID0gW107XG4gICAgY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9wdXNoVXBkYXRlKHVwZGF0ZXMsIGNvbGxlY3Rpb24sIG1zZykge1xuICAgIGlmICghIGhhc093bi5jYWxsKHVwZGF0ZXMsIGNvbGxlY3Rpb24pKSB7XG4gICAgICB1cGRhdGVzW2NvbGxlY3Rpb25dID0gW107XG4gICAgfVxuICAgIHVwZGF0ZXNbY29sbGVjdGlvbl0ucHVzaChtc2cpO1xuICB9XG5cbiAgX2dldFNlcnZlckRvYyhjb2xsZWN0aW9uLCBpZCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghIGhhc093bi5jYWxsKHNlbGYuX3NlcnZlckRvY3VtZW50cywgY29sbGVjdGlvbikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzZXJ2ZXJEb2NzRm9yQ29sbGVjdGlvbiA9IHNlbGYuX3NlcnZlckRvY3VtZW50c1tjb2xsZWN0aW9uXTtcbiAgICByZXR1cm4gc2VydmVyRG9jc0ZvckNvbGxlY3Rpb24uZ2V0KGlkKSB8fCBudWxsO1xuICB9XG5cbiAgX3Byb2Nlc3NfYWRkZWQobXNnLCB1cGRhdGVzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaWQgPSBNb25nb0lELmlkUGFyc2UobXNnLmlkKTtcbiAgICBjb25zdCBzZXJ2ZXJEb2MgPSBzZWxmLl9nZXRTZXJ2ZXJEb2MobXNnLmNvbGxlY3Rpb24sIGlkKTtcbiAgICBpZiAoc2VydmVyRG9jKSB7XG4gICAgICAvLyBTb21lIG91dHN0YW5kaW5nIHN0dWIgd3JvdGUgaGVyZS5cbiAgICAgIGNvbnN0IGlzRXhpc3RpbmcgPSBzZXJ2ZXJEb2MuZG9jdW1lbnQgIT09IHVuZGVmaW5lZDtcblxuICAgICAgc2VydmVyRG9jLmRvY3VtZW50ID0gbXNnLmZpZWxkcyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgc2VydmVyRG9jLmRvY3VtZW50Ll9pZCA9IGlkO1xuXG4gICAgICBpZiAoc2VsZi5fcmVzZXRTdG9yZXMpIHtcbiAgICAgICAgLy8gRHVyaW5nIHJlY29ubmVjdCB0aGUgc2VydmVyIGlzIHNlbmRpbmcgYWRkcyBmb3IgZXhpc3RpbmcgaWRzLlxuICAgICAgICAvLyBBbHdheXMgcHVzaCBhbiB1cGRhdGUgc28gdGhhdCBkb2N1bWVudCBzdGF5cyBpbiB0aGUgc3RvcmUgYWZ0ZXJcbiAgICAgICAgLy8gcmVzZXQuIFVzZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGRvY3VtZW50IGZvciB0aGlzIHVwZGF0ZSwgc29cbiAgICAgICAgLy8gdGhhdCBzdHViLXdyaXR0ZW4gdmFsdWVzIGFyZSBwcmVzZXJ2ZWQuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREb2MgPSBzZWxmLl9zdG9yZXNbbXNnLmNvbGxlY3Rpb25dLmdldERvYyhtc2cuaWQpO1xuICAgICAgICBpZiAoY3VycmVudERvYyAhPT0gdW5kZWZpbmVkKSBtc2cuZmllbGRzID0gY3VycmVudERvYztcblxuICAgICAgICBzZWxmLl9wdXNoVXBkYXRlKHVwZGF0ZXMsIG1zZy5jb2xsZWN0aW9uLCBtc2cpO1xuICAgICAgfSBlbHNlIGlmIChpc0V4aXN0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHNlbnQgYWRkIGZvciBleGlzdGluZyBpZDogJyArIG1zZy5pZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3B1c2hVcGRhdGUodXBkYXRlcywgbXNnLmNvbGxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3NfY2hhbmdlZChtc2csIHVwZGF0ZXMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBzZXJ2ZXJEb2MgPSBzZWxmLl9nZXRTZXJ2ZXJEb2MobXNnLmNvbGxlY3Rpb24sIE1vbmdvSUQuaWRQYXJzZShtc2cuaWQpKTtcbiAgICBpZiAoc2VydmVyRG9jKSB7XG4gICAgICBpZiAoc2VydmVyRG9jLmRvY3VtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHNlbnQgY2hhbmdlZCBmb3Igbm9uZXhpc3RpbmcgaWQ6ICcgKyBtc2cuaWQpO1xuICAgICAgRGlmZlNlcXVlbmNlLmFwcGx5Q2hhbmdlcyhzZXJ2ZXJEb2MuZG9jdW1lbnQsIG1zZy5maWVsZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wdXNoVXBkYXRlKHVwZGF0ZXMsIG1zZy5jb2xsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzX3JlbW92ZWQobXNnLCB1cGRhdGVzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3Qgc2VydmVyRG9jID0gc2VsZi5fZ2V0U2VydmVyRG9jKG1zZy5jb2xsZWN0aW9uLCBNb25nb0lELmlkUGFyc2UobXNnLmlkKSk7XG4gICAgaWYgKHNlcnZlckRvYykge1xuICAgICAgLy8gU29tZSBvdXRzdGFuZGluZyBzdHViIHdyb3RlIGhlcmUuXG4gICAgICBpZiAoc2VydmVyRG9jLmRvY3VtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHNlbnQgcmVtb3ZlZCBmb3Igbm9uZXhpc3RpbmcgaWQ6JyArIG1zZy5pZCk7XG4gICAgICBzZXJ2ZXJEb2MuZG9jdW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3B1c2hVcGRhdGUodXBkYXRlcywgbXNnLmNvbGxlY3Rpb24sIHtcbiAgICAgICAgbXNnOiAncmVtb3ZlZCcsXG4gICAgICAgIGNvbGxlY3Rpb246IG1zZy5jb2xsZWN0aW9uLFxuICAgICAgICBpZDogbXNnLmlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfcHJvY2Vzc191cGRhdGVkKG1zZywgdXBkYXRlcykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIC8vIFByb2Nlc3MgXCJtZXRob2QgZG9uZVwiIG1lc3NhZ2VzLlxuXG4gICAgbXNnLm1ldGhvZHMuZm9yRWFjaCgobWV0aG9kSWQpID0+IHtcbiAgICAgIGNvbnN0IGRvY3MgPSBzZWxmLl9kb2N1bWVudHNXcml0dGVuQnlTdHViW21ldGhvZElkXSB8fCB7fTtcbiAgICAgIE9iamVjdC52YWx1ZXMoZG9jcykuZm9yRWFjaCgod3JpdHRlbikgPT4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXJEb2MgPSBzZWxmLl9nZXRTZXJ2ZXJEb2Mod3JpdHRlbi5jb2xsZWN0aW9uLCB3cml0dGVuLmlkKTtcbiAgICAgICAgaWYgKCEgc2VydmVyRG9jKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb3N0IHNlcnZlckRvYyBmb3IgJyArIEpTT04uc3RyaW5naWZ5KHdyaXR0ZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISBzZXJ2ZXJEb2Mud3JpdHRlbkJ5U3R1YnNbbWV0aG9kSWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0RvYyAnICtcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod3JpdHRlbikgK1xuICAgICAgICAgICAgICAnIG5vdCB3cml0dGVuIGJ5ICBtZXRob2QgJyArXG4gICAgICAgICAgICAgIG1ldGhvZElkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2VydmVyRG9jLndyaXR0ZW5CeVN0dWJzW21ldGhvZElkXTtcbiAgICAgICAgaWYgKGlzRW1wdHkoc2VydmVyRG9jLndyaXR0ZW5CeVN0dWJzKSkge1xuICAgICAgICAgIC8vIEFsbCBtZXRob2RzIHdob3NlIHN0dWJzIHdyb3RlIHRoaXMgbWV0aG9kIGhhdmUgY29tcGxldGVkISBXZSBjYW5cbiAgICAgICAgICAvLyBub3cgY29weSB0aGUgc2F2ZWQgZG9jdW1lbnQgdG8gdGhlIGRhdGFiYXNlIChyZXZlcnRpbmcgdGhlIHN0dWInc1xuICAgICAgICAgIC8vIGNoYW5nZSBpZiB0aGUgc2VydmVyIGRpZCBub3Qgd3JpdGUgdG8gdGhpcyBvYmplY3QsIG9yIGFwcGx5aW5nIHRoZVxuICAgICAgICAgIC8vIHNlcnZlcidzIHdyaXRlcyBpZiBpdCBkaWQpLlxuXG4gICAgICAgICAgLy8gVGhpcyBpcyBhIGZha2UgZGRwICdyZXBsYWNlJyBtZXNzYWdlLiAgSXQncyBqdXN0IGZvciB0YWxraW5nXG4gICAgICAgICAgLy8gYmV0d2VlbiBsaXZlZGF0YSBjb25uZWN0aW9ucyBhbmQgbWluaW1vbmdvLiAgKFdlIGhhdmUgdG8gc3RyaW5naWZ5XG4gICAgICAgICAgLy8gdGhlIElEIGJlY2F1c2UgaXQncyBzdXBwb3NlZCB0byBsb29rIGxpa2UgYSB3aXJlIG1lc3NhZ2UuKVxuICAgICAgICAgIHNlbGYuX3B1c2hVcGRhdGUodXBkYXRlcywgd3JpdHRlbi5jb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBtc2c6ICdyZXBsYWNlJyxcbiAgICAgICAgICAgIGlkOiBNb25nb0lELmlkU3RyaW5naWZ5KHdyaXR0ZW4uaWQpLFxuICAgICAgICAgICAgcmVwbGFjZTogc2VydmVyRG9jLmRvY3VtZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQ2FsbCBhbGwgZmx1c2ggY2FsbGJhY2tzLlxuXG4gICAgICAgICAgc2VydmVyRG9jLmZsdXNoQ2FsbGJhY2tzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIERlbGV0ZSB0aGlzIGNvbXBsZXRlZCBzZXJ2ZXJEb2N1bWVudC4gRG9uJ3QgYm90aGVyIHRvIEdDIGVtcHR5XG4gICAgICAgICAgLy8gSWRNYXBzIGluc2lkZSBzZWxmLl9zZXJ2ZXJEb2N1bWVudHMsIHNpbmNlIHRoZXJlIHByb2JhYmx5IGFyZW4ndFxuICAgICAgICAgIC8vIG1hbnkgY29sbGVjdGlvbnMgYW5kIHRoZXknbGwgYmUgd3JpdHRlbiByZXBlYXRlZGx5LlxuICAgICAgICAgIHNlbGYuX3NlcnZlckRvY3VtZW50c1t3cml0dGVuLmNvbGxlY3Rpb25dLnJlbW92ZSh3cml0dGVuLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc2VsZi5fZG9jdW1lbnRzV3JpdHRlbkJ5U3R1YlttZXRob2RJZF07XG5cbiAgICAgIC8vIFdlIHdhbnQgdG8gY2FsbCB0aGUgZGF0YS13cml0dGVuIGNhbGxiYWNrLCBidXQgd2UgY2FuJ3QgZG8gc28gdW50aWwgYWxsXG4gICAgICAvLyBjdXJyZW50bHkgYnVmZmVyZWQgbWVzc2FnZXMgYXJlIGZsdXNoZWQuXG4gICAgICBjb25zdCBjYWxsYmFja0ludm9rZXIgPSBzZWxmLl9tZXRob2RJbnZva2Vyc1ttZXRob2RJZF07XG4gICAgICBpZiAoISBjYWxsYmFja0ludm9rZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjYWxsYmFjayBpbnZva2VyIGZvciBtZXRob2QgJyArIG1ldGhvZElkKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fcnVuV2hlbkFsbFNlcnZlckRvY3NBcmVGbHVzaGVkKFxuICAgICAgICAoLi4uYXJncykgPT4gY2FsbGJhY2tJbnZva2VyLmRhdGFWaXNpYmxlKC4uLmFyZ3MpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgX3Byb2Nlc3NfcmVhZHkobXNnLCB1cGRhdGVzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgLy8gUHJvY2VzcyBcInN1YiByZWFkeVwiIG1lc3NhZ2VzLiBcInN1YiByZWFkeVwiIG1lc3NhZ2VzIGRvbid0IHRha2UgZWZmZWN0XG4gICAgLy8gdW50aWwgYWxsIGN1cnJlbnQgc2VydmVyIGRvY3VtZW50cyBoYXZlIGJlZW4gZmx1c2hlZCB0byB0aGUgbG9jYWxcbiAgICAvLyBkYXRhYmFzZS4gV2UgY2FuIHVzZSBhIHdyaXRlIGZlbmNlIHRvIGltcGxlbWVudCB0aGlzLlxuXG4gICAgbXNnLnN1YnMuZm9yRWFjaCgoc3ViSWQpID0+IHtcbiAgICAgIHNlbGYuX3J1bldoZW5BbGxTZXJ2ZXJEb2NzQXJlRmx1c2hlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YlJlY29yZCA9IHNlbGYuX3N1YnNjcmlwdGlvbnNbc3ViSWRdO1xuICAgICAgICAvLyBEaWQgd2UgYWxyZWFkeSB1bnN1YnNjcmliZT9cbiAgICAgICAgaWYgKCFzdWJSZWNvcmQpIHJldHVybjtcbiAgICAgICAgLy8gRGlkIHdlIGFscmVhZHkgcmVjZWl2ZSBhIHJlYWR5IG1lc3NhZ2U/IChPb3BzISlcbiAgICAgICAgaWYgKHN1YlJlY29yZC5yZWFkeSkgcmV0dXJuO1xuICAgICAgICBzdWJSZWNvcmQucmVhZHkgPSB0cnVlO1xuICAgICAgICBzdWJSZWNvcmQucmVhZHlDYWxsYmFjayAmJiBzdWJSZWNvcmQucmVhZHlDYWxsYmFjaygpO1xuICAgICAgICBzdWJSZWNvcmQucmVhZHlEZXBzLmNoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRW5zdXJlcyB0aGF0IFwiZlwiIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGFsbCBkb2N1bWVudHMgY3VycmVudGx5IGluXG4gIC8vIF9zZXJ2ZXJEb2N1bWVudHMgaGF2ZSBiZWVuIHdyaXR0ZW4gdG8gdGhlIGxvY2FsIGNhY2hlLiBmIHdpbGwgbm90IGJlIGNhbGxlZFxuICAvLyBpZiB0aGUgY29ubmVjdGlvbiBpcyBsb3N0IGJlZm9yZSB0aGVuIVxuICBfcnVuV2hlbkFsbFNlcnZlckRvY3NBcmVGbHVzaGVkKGYpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBydW5GQWZ0ZXJVcGRhdGVzID0gKCkgPT4ge1xuICAgICAgc2VsZi5fYWZ0ZXJVcGRhdGVDYWxsYmFja3MucHVzaChmKTtcbiAgICB9O1xuICAgIGxldCB1bmZsdXNoZWRTZXJ2ZXJEb2NDb3VudCA9IDA7XG4gICAgY29uc3Qgb25TZXJ2ZXJEb2NGbHVzaCA9ICgpID0+IHtcbiAgICAgIC0tdW5mbHVzaGVkU2VydmVyRG9jQ291bnQ7XG4gICAgICBpZiAodW5mbHVzaGVkU2VydmVyRG9jQ291bnQgPT09IDApIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgdGhlIGxhc3QgZG9jIHRvIGZsdXNoISBBcnJhbmdlIHRvIHJ1biBmIGFmdGVyIHRoZSB1cGRhdGVzXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhcHBsaWVkLlxuICAgICAgICBydW5GQWZ0ZXJVcGRhdGVzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC52YWx1ZXMoc2VsZi5fc2VydmVyRG9jdW1lbnRzKS5mb3JFYWNoKChzZXJ2ZXJEb2N1bWVudHMpID0+IHtcbiAgICAgIHNlcnZlckRvY3VtZW50cy5mb3JFYWNoKChzZXJ2ZXJEb2MpID0+IHtcbiAgICAgICAgY29uc3Qgd3JpdHRlbkJ5U3R1YkZvckFNZXRob2RXaXRoU2VudE1lc3NhZ2UgPVxuICAgICAgICAgIGtleXMoc2VydmVyRG9jLndyaXR0ZW5CeVN0dWJzKS5zb21lKG1ldGhvZElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludm9rZXIgPSBzZWxmLl9tZXRob2RJbnZva2Vyc1ttZXRob2RJZF07XG4gICAgICAgICAgICByZXR1cm4gaW52b2tlciAmJiBpbnZva2VyLnNlbnRNZXNzYWdlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3cml0dGVuQnlTdHViRm9yQU1ldGhvZFdpdGhTZW50TWVzc2FnZSkge1xuICAgICAgICAgICsrdW5mbHVzaGVkU2VydmVyRG9jQ291bnQ7XG4gICAgICAgICAgc2VydmVyRG9jLmZsdXNoQ2FsbGJhY2tzLnB1c2gob25TZXJ2ZXJEb2NGbHVzaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh1bmZsdXNoZWRTZXJ2ZXJEb2NDb3VudCA9PT0gMCkge1xuICAgICAgLy8gVGhlcmUgYXJlbid0IGFueSBidWZmZXJlZCBkb2NzIC0tLSB3ZSBjYW4gY2FsbCBmIGFzIHNvb24gYXMgdGhlIGN1cnJlbnRcbiAgICAgIC8vIHJvdW5kIG9mIHVwZGF0ZXMgaXMgYXBwbGllZCFcbiAgICAgIHJ1bkZBZnRlclVwZGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBfbGl2ZWRhdGFfbm9zdWIobXNnKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBGaXJzdCBwYXNzIGl0IHRocm91Z2ggX2xpdmVkYXRhX2RhdGEsIHdoaWNoIG9ubHkgdXNlcyBpdCB0byBoZWxwIGdldFxuICAgIC8vIHRvd2FyZHMgcXVpZXNjZW5jZS5cbiAgICBzZWxmLl9saXZlZGF0YV9kYXRhKG1zZyk7XG5cbiAgICAvLyBEbyB0aGUgcmVzdCBvZiBvdXIgcHJvY2Vzc2luZyBpbW1lZGlhdGVseSwgd2l0aCBub1xuICAgIC8vIGJ1ZmZlcmluZy11bnRpbC1xdWllc2NlbmNlLlxuXG4gICAgLy8gd2Ugd2VyZW4ndCBzdWJiZWQgYW55d2F5LCBvciB3ZSBpbml0aWF0ZWQgdGhlIHVuc3ViLlxuICAgIGlmICghIGhhc093bi5jYWxsKHNlbGYuX3N1YnNjcmlwdGlvbnMsIG1zZy5pZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBYWFggQ09NUEFUIFdJVEggMS4wLjMuMSAjZXJyb3JDYWxsYmFja1xuICAgIGNvbnN0IGVycm9yQ2FsbGJhY2sgPSBzZWxmLl9zdWJzY3JpcHRpb25zW21zZy5pZF0uZXJyb3JDYWxsYmFjaztcbiAgICBjb25zdCBzdG9wQ2FsbGJhY2sgPSBzZWxmLl9zdWJzY3JpcHRpb25zW21zZy5pZF0uc3RvcENhbGxiYWNrO1xuXG4gICAgc2VsZi5fc3Vic2NyaXB0aW9uc1ttc2cuaWRdLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbWV0ZW9yRXJyb3JGcm9tTXNnID0gbXNnQXJnID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1zZ0FyZyAmJlxuICAgICAgICBtc2dBcmcuZXJyb3IgJiZcbiAgICAgICAgbmV3IE1ldGVvci5FcnJvcihcbiAgICAgICAgICBtc2dBcmcuZXJyb3IuZXJyb3IsXG4gICAgICAgICAgbXNnQXJnLmVycm9yLnJlYXNvbixcbiAgICAgICAgICBtc2dBcmcuZXJyb3IuZGV0YWlsc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBYWFggQ09NUEFUIFdJVEggMS4wLjMuMSAjZXJyb3JDYWxsYmFja1xuICAgIGlmIChlcnJvckNhbGxiYWNrICYmIG1zZy5lcnJvcikge1xuICAgICAgZXJyb3JDYWxsYmFjayhtZXRlb3JFcnJvckZyb21Nc2cobXNnKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0b3BDYWxsYmFjaykge1xuICAgICAgc3RvcENhbGxiYWNrKG1ldGVvckVycm9yRnJvbU1zZyhtc2cpKTtcbiAgICB9XG4gIH1cblxuICBfbGl2ZWRhdGFfcmVzdWx0KG1zZykge1xuICAgIC8vIGlkLCByZXN1bHQgb3IgZXJyb3IuIGVycm9yIGhhcyBlcnJvciAoY29kZSksIHJlYXNvbiwgZGV0YWlsc1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBMZXRzIG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgd3JpdGVzIGJlZm9yZSByZXR1cm5pbmcgcmVzdWx0LlxuICAgIGlmICghIGlzRW1wdHkoc2VsZi5fYnVmZmVyZWRXcml0ZXMpKSB7XG4gICAgICBzZWxmLl9mbHVzaEJ1ZmZlcmVkV3JpdGVzKCk7XG4gICAgfVxuXG4gICAgLy8gZmluZCB0aGUgb3V0c3RhbmRpbmcgcmVxdWVzdFxuICAgIC8vIHNob3VsZCBiZSBPKDEpIGluIG5lYXJseSBhbGwgcmVhbGlzdGljIHVzZSBjYXNlc1xuICAgIGlmIChpc0VtcHR5KHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzKSkge1xuICAgICAgTWV0ZW9yLl9kZWJ1ZygnUmVjZWl2ZWQgbWV0aG9kIHJlc3VsdCBidXQgbm8gbWV0aG9kcyBvdXRzdGFuZGluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50TWV0aG9kQmxvY2sgPSBzZWxmLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrc1swXS5tZXRob2RzO1xuICAgIGxldCBpO1xuICAgIGNvbnN0IG0gPSBjdXJyZW50TWV0aG9kQmxvY2suZmluZCgobWV0aG9kLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gbWV0aG9kLm1ldGhvZElkID09PSBtc2cuaWQ7XG4gICAgICBpZiAoZm91bmQpIGkgPSBpZHg7XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gICAgaWYgKCFtKSB7XG4gICAgICBNZXRlb3IuX2RlYnVnKFwiQ2FuJ3QgbWF0Y2ggbWV0aG9kIHJlc3BvbnNlIHRvIG9yaWdpbmFsIG1ldGhvZCBjYWxsXCIsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGZyb20gY3VycmVudCBtZXRob2QgYmxvY2suIFRoaXMgbWF5IGxlYXZlIHRoZSBibG9jayBlbXB0eSwgYnV0IHdlXG4gICAgLy8gZG9uJ3QgbW92ZSBvbiB0byB0aGUgbmV4dCBibG9jayB1bnRpbCB0aGUgY2FsbGJhY2sgaGFzIGJlZW4gZGVsaXZlcmVkLCBpblxuICAgIC8vIF9vdXRzdGFuZGluZ01ldGhvZEZpbmlzaGVkLlxuICAgIGN1cnJlbnRNZXRob2RCbG9jay5zcGxpY2UoaSwgMSk7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwobXNnLCAnZXJyb3InKSkge1xuICAgICAgbS5yZWNlaXZlUmVzdWx0KFxuICAgICAgICBuZXcgTWV0ZW9yLkVycm9yKG1zZy5lcnJvci5lcnJvciwgbXNnLmVycm9yLnJlYXNvbiwgbXNnLmVycm9yLmRldGFpbHMpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtc2cucmVzdWx0IG1heSBiZSB1bmRlZmluZWQgaWYgdGhlIG1ldGhvZCBkaWRuJ3QgcmV0dXJuIGFcbiAgICAgIC8vIHZhbHVlXG4gICAgICBtLnJlY2VpdmVSZXN1bHQodW5kZWZpbmVkLCBtc2cucmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgTWV0aG9kSW52b2tlciBhZnRlciBhIG1ldGhvZCdzIGNhbGxiYWNrIGlzIGludm9rZWQuICBJZiB0aGlzIHdhc1xuICAvLyB0aGUgbGFzdCBvdXRzdGFuZGluZyBtZXRob2QgaW4gdGhlIGN1cnJlbnQgYmxvY2ssIHJ1bnMgdGhlIG5leHQgYmxvY2suIElmXG4gIC8vIHRoZXJlIGFyZSBubyBtb3JlIG1ldGhvZHMsIGNvbnNpZGVyIGFjY2VwdGluZyBhIGhvdCBjb2RlIHB1c2guXG4gIF9vdXRzdGFuZGluZ01ldGhvZEZpbmlzaGVkKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLl9hbnlNZXRob2RzQXJlT3V0c3RhbmRpbmcoKSkgcmV0dXJuO1xuXG4gICAgLy8gTm8gbWV0aG9kcyBhcmUgb3V0c3RhbmRpbmcuIFRoaXMgc2hvdWxkIG1lYW4gdGhhdCB0aGUgZmlyc3QgYmxvY2sgb2ZcbiAgICAvLyBtZXRob2RzIGlzIGVtcHR5LiAoT3IgaXQgbWlnaHQgbm90IGV4aXN0LCBpZiB0aGlzIHdhcyBhIG1ldGhvZCB0aGF0XG4gICAgLy8gaGFsZi1maW5pc2hlZCBiZWZvcmUgZGlzY29ubmVjdC9yZWNvbm5lY3QuKVxuICAgIGlmICghIGlzRW1wdHkoc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MpKSB7XG4gICAgICBjb25zdCBmaXJzdEJsb2NrID0gc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3Muc2hpZnQoKTtcbiAgICAgIGlmICghIGlzRW1wdHkoZmlyc3RCbG9jay5tZXRob2RzKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdObyBtZXRob2RzIG91dHN0YW5kaW5nIGJ1dCBub25lbXB0eSBibG9jazogJyArXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmaXJzdEJsb2NrKVxuICAgICAgICApO1xuXG4gICAgICAvLyBTZW5kIHRoZSBvdXRzdGFuZGluZyBtZXRob2RzIG5vdyBpbiB0aGUgZmlyc3QgYmxvY2suXG4gICAgICBpZiAoISBpc0VtcHR5KHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzKSlcbiAgICAgICAgc2VsZi5fc2VuZE91dHN0YW5kaW5nTWV0aG9kcygpO1xuICAgIH1cblxuICAgIC8vIE1heWJlIGFjY2VwdCBhIGhvdCBjb2RlIHB1c2guXG4gICAgc2VsZi5fbWF5YmVNaWdyYXRlKCk7XG4gIH1cblxuICAvLyBTZW5kcyBtZXNzYWdlcyBmb3IgYWxsIHRoZSBtZXRob2RzIGluIHRoZSBmaXJzdCBibG9jayBpblxuICAvLyBfb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MuXG4gIF9zZW5kT3V0c3RhbmRpbmdNZXRob2RzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKGlzRW1wdHkoc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3NbMF0ubWV0aG9kcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbS5zZW5kTWVzc2FnZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX2xpdmVkYXRhX2Vycm9yKG1zZykge1xuICAgIE1ldGVvci5fZGVidWcoJ1JlY2VpdmVkIGVycm9yIGZyb20gc2VydmVyOiAnLCBtc2cucmVhc29uKTtcbiAgICBpZiAobXNnLm9mZmVuZGluZ01lc3NhZ2UpIE1ldGVvci5fZGVidWcoJ0ZvcjogJywgbXNnLm9mZmVuZGluZ01lc3NhZ2UpO1xuICB9XG5cbiAgX2NhbGxPblJlY29ubmVjdEFuZFNlbmRBcHByb3ByaWF0ZU91dHN0YW5kaW5nTWV0aG9kcygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBvbGRPdXRzdGFuZGluZ01ldGhvZEJsb2NrcyA9IHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzO1xuICAgIHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzID0gW107XG5cbiAgICBzZWxmLm9uUmVjb25uZWN0ICYmIHNlbGYub25SZWNvbm5lY3QoKTtcbiAgICBERFAuX3JlY29ubmVjdEhvb2suZWFjaChjYWxsYmFjayA9PiB7XG4gICAgICBjYWxsYmFjayhzZWxmKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzRW1wdHkob2xkT3V0c3RhbmRpbmdNZXRob2RCbG9ja3MpKSByZXR1cm47XG5cbiAgICAvLyBXZSBoYXZlIGF0IGxlYXN0IG9uZSBibG9jayB3b3J0aCBvZiBvbGQgb3V0c3RhbmRpbmcgbWV0aG9kcyB0byB0cnlcbiAgICAvLyBhZ2Fpbi4gRmlyc3Q6IGRpZCBvblJlY29ubmVjdCBhY3R1YWxseSBzZW5kIGFueXRoaW5nPyBJZiBub3QsIHdlIGp1c3RcbiAgICAvLyByZXN0b3JlIGFsbCBvdXRzdGFuZGluZyBtZXRob2RzIGFuZCBydW4gdGhlIGZpcnN0IGJsb2NrLlxuICAgIGlmIChpc0VtcHR5KHNlbGYuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzKSkge1xuICAgICAgc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MgPSBvbGRPdXRzdGFuZGluZ01ldGhvZEJsb2NrcztcbiAgICAgIHNlbGYuX3NlbmRPdXRzdGFuZGluZ01ldGhvZHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPSywgdGhlcmUgYXJlIGJsb2NrcyBvbiBib3RoIHNpZGVzLiBTcGVjaWFsIGNhc2U6IG1lcmdlIHRoZSBsYXN0IGJsb2NrIG9mXG4gICAgLy8gdGhlIHJlY29ubmVjdCBtZXRob2RzIHdpdGggdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBvcmlnaW5hbCBtZXRob2RzLCBpZlxuICAgIC8vIG5laXRoZXIgb2YgdGhlbSBhcmUgXCJ3YWl0XCIgYmxvY2tzLlxuICAgIGlmICghIGxhc3Qoc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MpLndhaXQgJiZcbiAgICAgICAgISBvbGRPdXRzdGFuZGluZ01ldGhvZEJsb2Nrc1swXS53YWl0KSB7XG4gICAgICBvbGRPdXRzdGFuZGluZ01ldGhvZEJsb2Nrc1swXS5tZXRob2RzLmZvckVhY2gobSA9PiB7XG4gICAgICAgIGxhc3Qoc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MpLm1ldGhvZHMucHVzaChtKTtcblxuICAgICAgICAvLyBJZiB0aGlzIFwibGFzdCBibG9ja1wiIGlzIGFsc28gdGhlIGZpcnN0IGJsb2NrLCBzZW5kIHRoZSBtZXNzYWdlLlxuICAgICAgICBpZiAoc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgbS5zZW5kTWVzc2FnZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2xkT3V0c3RhbmRpbmdNZXRob2RCbG9ja3Muc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgYWRkIHRoZSByZXN0IG9mIHRoZSBvcmlnaW5hbCBibG9ja3Mgb24uXG4gICAgc2VsZi5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3MucHVzaCguLi5vbGRPdXRzdGFuZGluZ01ldGhvZEJsb2Nrcyk7XG4gIH1cblxuICAvLyBXZSBjYW4gYWNjZXB0IGEgaG90IGNvZGUgcHVzaCBpZiB0aGVyZSBhcmUgbm8gbWV0aG9kcyBpbiBmbGlnaHQuXG4gIF9yZWFkeVRvTWlncmF0ZSgpIHtcbiAgICByZXR1cm4gaXNFbXB0eSh0aGlzLl9tZXRob2RJbnZva2Vycyk7XG4gIH1cblxuICAvLyBJZiB3ZSB3ZXJlIGJsb2NraW5nIGEgbWlncmF0aW9uLCBzZWUgaWYgaXQncyBub3cgcG9zc2libGUgdG8gY29udGludWUuXG4gIC8vIENhbGwgd2hlbmV2ZXIgdGhlIHNldCBvZiBvdXRzdGFuZGluZy9ibG9ja2VkIG1ldGhvZHMgc2hyaW5rcy5cbiAgX21heWJlTWlncmF0ZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fcmV0cnlNaWdyYXRlICYmIHNlbGYuX3JlYWR5VG9NaWdyYXRlKCkpIHtcbiAgICAgIHNlbGYuX3JldHJ5TWlncmF0ZSgpO1xuICAgICAgc2VsZi5fcmV0cnlNaWdyYXRlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbk1lc3NhZ2UocmF3X21zZykge1xuICAgIGxldCBtc2c7XG4gICAgdHJ5IHtcbiAgICAgIG1zZyA9IEREUENvbW1vbi5wYXJzZUREUChyYXdfbXNnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBNZXRlb3IuX2RlYnVnKCdFeGNlcHRpb24gd2hpbGUgcGFyc2luZyBERFAnLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbnkgbWVzc2FnZSBjb3VudHMgYXMgcmVjZWl2aW5nIGEgcG9uZywgYXMgaXQgZGVtb25zdHJhdGVzIHRoYXRcbiAgICAvLyB0aGUgc2VydmVyIGlzIHN0aWxsIGFsaXZlLlxuICAgIGlmICh0aGlzLl9oZWFydGJlYXQpIHtcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdC5tZXNzYWdlUmVjZWl2ZWQoKTtcbiAgICB9XG5cbiAgICBpZiAobXNnID09PSBudWxsIHx8ICFtc2cubXNnKSB7XG4gICAgICBpZighbXNnIHx8ICFtc2cudGVzdE1lc3NhZ2VPbkNvbm5lY3QpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1zZykubGVuZ3RoID09PSAxICYmIG1zZy5zZXJ2ZXJfaWQpIHJldHVybjtcbiAgICAgICAgTWV0ZW9yLl9kZWJ1ZygnZGlzY2FyZGluZyBpbnZhbGlkIGxpdmVkYXRhIG1lc3NhZ2UnLCBtc2cpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtc2cubXNnID09PSAnY29ubmVjdGVkJykge1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHRoaXMuX3ZlcnNpb25TdWdnZXN0aW9uO1xuICAgICAgdGhpcy5fbGl2ZWRhdGFfY29ubmVjdGVkKG1zZyk7XG4gICAgICB0aGlzLm9wdGlvbnMub25Db25uZWN0ZWQoKTtcbiAgICB9IGVsc2UgaWYgKG1zZy5tc2cgPT09ICdmYWlsZWQnKSB7XG4gICAgICBpZiAodGhpcy5fc3VwcG9ydGVkRERQVmVyc2lvbnMuaW5kZXhPZihtc2cudmVyc2lvbikgPj0gMCkge1xuICAgICAgICB0aGlzLl92ZXJzaW9uU3VnZ2VzdGlvbiA9IG1zZy52ZXJzaW9uO1xuICAgICAgICB0aGlzLl9zdHJlYW0ucmVjb25uZWN0KHsgX2ZvcmNlOiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPVxuICAgICAgICAgICdERFAgdmVyc2lvbiBuZWdvdGlhdGlvbiBmYWlsZWQ7IHNlcnZlciByZXF1ZXN0ZWQgdmVyc2lvbiAnICtcbiAgICAgICAgICBtc2cudmVyc2lvbjtcbiAgICAgICAgdGhpcy5fc3RyZWFtLmRpc2Nvbm5lY3QoeyBfcGVybWFuZW50OiB0cnVlLCBfZXJyb3I6IGRlc2NyaXB0aW9uIH0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25ERFBWZXJzaW9uTmVnb3RpYXRpb25GYWlsdXJlKGRlc2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy5tc2cgPT09ICdwaW5nJyAmJiB0aGlzLm9wdGlvbnMucmVzcG9uZFRvUGluZ3MpIHtcbiAgICAgIHRoaXMuX3NlbmQoeyBtc2c6ICdwb25nJywgaWQ6IG1zZy5pZCB9KTtcbiAgICB9IGVsc2UgaWYgKG1zZy5tc2cgPT09ICdwb25nJykge1xuICAgICAgLy8gbm9vcCwgYXMgd2UgYXNzdW1lIGV2ZXJ5dGhpbmcncyBhIHBvbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgWydhZGRlZCcsICdjaGFuZ2VkJywgJ3JlbW92ZWQnLCAncmVhZHknLCAndXBkYXRlZCddLmluY2x1ZGVzKG1zZy5tc2cpXG4gICAgKSB7XG4gICAgICB0aGlzLl9saXZlZGF0YV9kYXRhKG1zZyk7XG4gICAgfSBlbHNlIGlmIChtc2cubXNnID09PSAnbm9zdWInKSB7XG4gICAgICB0aGlzLl9saXZlZGF0YV9ub3N1Yihtc2cpO1xuICAgIH0gZWxzZSBpZiAobXNnLm1zZyA9PT0gJ3Jlc3VsdCcpIHtcbiAgICAgIHRoaXMuX2xpdmVkYXRhX3Jlc3VsdChtc2cpO1xuICAgIH0gZWxzZSBpZiAobXNnLm1zZyA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5fbGl2ZWRhdGFfZXJyb3IobXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTWV0ZW9yLl9kZWJ1ZygnZGlzY2FyZGluZyB1bmtub3duIGxpdmVkYXRhIG1lc3NhZ2UgdHlwZScsIG1zZyk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICAvLyBTZW5kIGEgY29ubmVjdCBtZXNzYWdlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmVhbS5cbiAgICAvLyBOT1RFOiByZXNldCBpcyBjYWxsZWQgZXZlbiBvbiB0aGUgZmlyc3QgY29ubmVjdGlvbiwgc28gdGhpcyBpc1xuICAgIC8vIHRoZSBvbmx5IHBsYWNlIHdlIHNlbmQgdGhpcyBtZXNzYWdlLlxuICAgIGNvbnN0IG1zZyA9IHsgbXNnOiAnY29ubmVjdCcgfTtcbiAgICBpZiAodGhpcy5fbGFzdFNlc3Npb25JZCkgbXNnLnNlc3Npb24gPSB0aGlzLl9sYXN0U2Vzc2lvbklkO1xuICAgIG1zZy52ZXJzaW9uID0gdGhpcy5fdmVyc2lvblN1Z2dlc3Rpb24gfHwgdGhpcy5fc3VwcG9ydGVkRERQVmVyc2lvbnNbMF07XG4gICAgdGhpcy5fdmVyc2lvblN1Z2dlc3Rpb24gPSBtc2cudmVyc2lvbjtcbiAgICBtc2cuc3VwcG9ydCA9IHRoaXMuX3N1cHBvcnRlZEREUFZlcnNpb25zO1xuICAgIHRoaXMuX3NlbmQobXNnKTtcblxuICAgIC8vIE1hcmsgbm9uLXJldHJ5IGNhbGxzIGFzIGZhaWxlZC4gVGhpcyBoYXMgdG8gYmUgZG9uZSBlYXJseSBhcyBnZXR0aW5nIHRoZXNlIG1ldGhvZHMgb3V0IG9mIHRoZVxuICAgIC8vIGN1cnJlbnQgYmxvY2sgaXMgcHJldHR5IGltcG9ydGFudCB0byBtYWtpbmcgc3VyZSB0aGF0IHF1aWVzY2VuY2UgaXMgcHJvcGVybHkgY2FsY3VsYXRlZCwgYXNcbiAgICAvLyB3ZWxsIGFzIHBvc3NpYmx5IG1vdmluZyBvbiB0byBhbm90aGVyIHVzZWZ1bCBibG9jay5cblxuICAgIC8vIE9ubHkgYm90aGVyIHRlc3RpbmcgaWYgdGhlcmUgaXMgYW4gb3V0c3RhbmRpbmdNZXRob2RCbG9jayAodGhlcmUgbWlnaHQgbm90IGJlLCBlc3BlY2lhbGx5IGlmXG4gICAgLy8gd2UgYXJlIGNvbm5lY3RpbmcgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgIGlmICh0aGlzLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhbiBvdXRzdGFuZGluZyBtZXRob2QgYmxvY2ssIHdlIG9ubHkgY2FyZSBhYm91dCB0aGUgZmlyc3Qgb25lIGFzIHRoYXQgaXMgdGhlXG4gICAgICAvLyBvbmUgdGhhdCBjb3VsZCBoYXZlIGFscmVhZHkgc2VudCBtZXNzYWdlcyB3aXRoIG5vIHJlc3BvbnNlLCB0aGF0IGFyZSBub3QgYWxsb3dlZCB0byByZXRyeS5cbiAgICAgIGNvbnN0IGN1cnJlbnRNZXRob2RCbG9jayA9IHRoaXMuX291dHN0YW5kaW5nTWV0aG9kQmxvY2tzWzBdLm1ldGhvZHM7XG4gICAgICB0aGlzLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrc1swXS5tZXRob2RzID0gY3VycmVudE1ldGhvZEJsb2NrLmZpbHRlcihcbiAgICAgICAgbWV0aG9kSW52b2tlciA9PiB7XG4gICAgICAgICAgLy8gTWV0aG9kcyB3aXRoICdub1JldHJ5JyBvcHRpb24gc2V0IGFyZSBub3QgYWxsb3dlZCB0byByZS1zZW5kIGFmdGVyXG4gICAgICAgICAgLy8gcmVjb3ZlcmluZyBkcm9wcGVkIGNvbm5lY3Rpb24uXG4gICAgICAgICAgaWYgKG1ldGhvZEludm9rZXIuc2VudE1lc3NhZ2UgJiYgbWV0aG9kSW52b2tlci5ub1JldHJ5KSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgbWV0aG9kIGlzIHRvbGQgdGhhdCBpdCBmYWlsZWQuXG4gICAgICAgICAgICBtZXRob2RJbnZva2VyLnJlY2VpdmVSZXN1bHQoXG4gICAgICAgICAgICAgIG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgICAgICAgJ2ludm9jYXRpb24tZmFpbGVkJyxcbiAgICAgICAgICAgICAgICAnTWV0aG9kIGludm9jYXRpb24gbWlnaHQgaGF2ZSBmYWlsZWQgZHVlIHRvIGRyb3BwZWQgY29ubmVjdGlvbi4gJyArXG4gICAgICAgICAgICAgICAgICAnRmFpbGluZyBiZWNhdXNlIGBub1JldHJ5YCBvcHRpb24gd2FzIHBhc3NlZCB0byBNZXRlb3IuYXBwbHkuJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9ubHkga2VlcCBhIG1ldGhvZCBpZiBpdCB3YXNuJ3Qgc2VudCBvciBpdCdzIGFsbG93ZWQgdG8gcmV0cnkuXG4gICAgICAgICAgLy8gVGhpcyBtYXkgbGVhdmUgdGhlIGJsb2NrIGVtcHR5LCBidXQgd2UgZG9uJ3QgbW92ZSBvbiB0byB0aGUgbmV4dFxuICAgICAgICAgIC8vIGJsb2NrIHVudGlsIHRoZSBjYWxsYmFjayBoYXMgYmVlbiBkZWxpdmVyZWQsIGluIF9vdXRzdGFuZGluZ01ldGhvZEZpbmlzaGVkLlxuICAgICAgICAgIHJldHVybiAhKG1ldGhvZEludm9rZXIuc2VudE1lc3NhZ2UgJiYgbWV0aG9kSW52b2tlci5ub1JldHJ5KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBOb3csIHRvIG1pbmltaXplIHNldHVwIGxhdGVuY3ksIGdvIGFoZWFkIGFuZCBibGFzdCBvdXQgYWxsIG9mXG4gICAgLy8gb3VyIHBlbmRpbmcgbWV0aG9kcyBhbmRzIHN1YnNjcmlwdGlvbnMgYmVmb3JlIHdlJ3ZlIGV2ZW4gdGFrZW5cbiAgICAvLyB0aGUgbmVjZXNzYXJ5IFJUVCB0byBrbm93IGlmIHdlIHN1Y2Nlc3NmdWxseSByZWNvbm5lY3RlZC4gKDEpXG4gICAgLy8gVGhleSdyZSBzdXBwb3NlZCB0byBiZSBpZGVtcG90ZW50LCBhbmQgd2hlcmUgdGhleSBhcmUgbm90LFxuICAgIC8vIHRoZXkgY2FuIGJsb2NrIHJldHJ5IGluIGFwcGx5OyAoMikgZXZlbiBpZiB3ZSBkaWQgcmVjb25uZWN0LFxuICAgIC8vIHdlJ3JlIG5vdCBzdXJlIHdoYXQgbWVzc2FnZXMgbWlnaHQgaGF2ZSBnb3R0ZW4gbG9zdFxuICAgIC8vIChpbiBlaXRoZXIgZGlyZWN0aW9uKSBzaW5jZSB3ZSB3ZXJlIGRpc2Nvbm5lY3RlZCAoVENQIGJlaW5nXG4gICAgLy8gc2xvcHB5IGFib3V0IHRoYXQuKVxuXG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgYmxvY2sgb2YgbWV0aG9kcyBhbGwgZ290IHRoZWlyIHJlc3VsdHMgKGJ1dCBkaWRuJ3QgYWxsIGdldFxuICAgIC8vIHRoZWlyIGRhdGEgdmlzaWJsZSksIGRpc2NhcmQgdGhlIGVtcHR5IGJsb2NrIG5vdy5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrcy5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLl9vdXRzdGFuZGluZ01ldGhvZEJsb2Nrc1swXS5tZXRob2RzLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgdGhpcy5fb3V0c3RhbmRpbmdNZXRob2RCbG9ja3Muc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBNYXJrIGFsbCBtZXNzYWdlcyBhcyB1bnNlbnQsIHRoZXkgaGF2ZSBub3QgeWV0IGJlZW4gc2VudCBvbiB0aGlzXG4gICAgLy8gY29ubmVjdGlvbi5cbiAgICBrZXlzKHRoaXMuX21ldGhvZEludm9rZXJzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIHRoaXMuX21ldGhvZEludm9rZXJzW2lkXS5zZW50TWVzc2FnZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgYW4gYG9uUmVjb25uZWN0YCBoYW5kbGVyIGlzIHNldCwgY2FsbCBpdCBmaXJzdC4gR28gdGhyb3VnaFxuICAgIC8vIHNvbWUgaG9vcHMgdG8gZW5zdXJlIHRoYXQgbWV0aG9kcyB0aGF0IGFyZSBjYWxsZWQgZnJvbSB3aXRoaW5cbiAgICAvLyBgb25SZWNvbm5lY3RgIGdldCBleGVjdXRlZCBfYmVmb3JlXyBvbmVzIHRoYXQgd2VyZSBvcmlnaW5hbGx5XG4gICAgLy8gb3V0c3RhbmRpbmcgKHNpbmNlIGBvblJlY29ubmVjdGAgaXMgdXNlZCB0byByZS1lc3RhYmxpc2ggYXV0aFxuICAgIC8vIGNlcnRpZmljYXRlcylcbiAgICB0aGlzLl9jYWxsT25SZWNvbm5lY3RBbmRTZW5kQXBwcm9wcmlhdGVPdXRzdGFuZGluZ01ldGhvZHMoKTtcblxuICAgIC8vIGFkZCBuZXcgc3Vic2NyaXB0aW9ucyBhdCB0aGUgZW5kLiB0aGlzIHdheSB0aGV5IHRha2UgZWZmZWN0IGFmdGVyXG4gICAgLy8gdGhlIGhhbmRsZXJzIGFuZCB3ZSBkb24ndCBzZWUgZmxpY2tlci5cbiAgICBPYmplY3QuZW50cmllcyh0aGlzLl9zdWJzY3JpcHRpb25zKS5mb3JFYWNoKChbaWQsIHN1Yl0pID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoe1xuICAgICAgICBtc2c6ICdzdWInLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIG5hbWU6IHN1Yi5uYW1lLFxuICAgICAgICBwYXJhbXM6IHN1Yi5wYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBERFBDb21tb24gfSBmcm9tICdtZXRlb3IvZGRwLWNvbW1vbic7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJy4vbGl2ZWRhdGFfY29ubmVjdGlvbi5qcyc7XG5cbi8vIFRoaXMgYXJyYXkgYWxsb3dzIHRoZSBgX2FsbFN1YnNjcmlwdGlvbnNSZWFkeWAgbWV0aG9kIGJlbG93LCB3aGljaFxuLy8gaXMgdXNlZCBieSB0aGUgYHNwaWRlcmFibGVgIHBhY2thZ2UsIHRvIGtlZXAgdHJhY2sgb2Ygd2hldGhlciBhbGxcbi8vIGRhdGEgaXMgcmVhZHkuXG5jb25zdCBhbGxDb25uZWN0aW9ucyA9IFtdO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgRERQXG4gKiBAc3VtbWFyeSBOYW1lc3BhY2UgZm9yIEREUC1yZWxhdGVkIG1ldGhvZHMvY2xhc3Nlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEREUCA9IHt9O1xuXG4vLyBUaGlzIGlzIHByaXZhdGUgYnV0IGl0J3MgdXNlZCBpbiBhIGZldyBwbGFjZXMuIGFjY291bnRzLWJhc2UgdXNlc1xuLy8gaXQgdG8gZ2V0IHRoZSBjdXJyZW50IHVzZXIuIE1ldGVvci5zZXRUaW1lb3V0IGFuZCBmcmllbmRzIGNsZWFyXG4vLyBpdC4gV2UgY2FuIHByb2JhYmx5IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIGZhY3RvciB0aGlzLlxuRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbiA9IG5ldyBNZXRlb3IuRW52aXJvbm1lbnRWYXJpYWJsZSgpO1xuRERQLl9DdXJyZW50UHVibGljYXRpb25JbnZvY2F0aW9uID0gbmV3IE1ldGVvci5FbnZpcm9ubWVudFZhcmlhYmxlKCk7XG5cbi8vIFhYWDogS2VlcCBERFAuX0N1cnJlbnRJbnZvY2F0aW9uIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eS5cbkREUC5fQ3VycmVudEludm9jYXRpb24gPSBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uO1xuXG4vLyBUaGlzIGlzIHBhc3NlZCBpbnRvIGEgd2VpcmQgYG1ha2VFcnJvclR5cGVgIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBpdHMgdGhpbmdcbi8vIHRvIGJlIGEgY29uc3RydWN0b3JcbmZ1bmN0aW9uIGNvbm5lY3Rpb25FcnJvckNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuRERQLkNvbm5lY3Rpb25FcnJvciA9IE1ldGVvci5tYWtlRXJyb3JUeXBlKFxuICAnRERQLkNvbm5lY3Rpb25FcnJvcicsXG4gIGNvbm5lY3Rpb25FcnJvckNvbnN0cnVjdG9yXG4pO1xuXG5ERFAuRm9yY2VkUmVjb25uZWN0RXJyb3IgPSBNZXRlb3IubWFrZUVycm9yVHlwZShcbiAgJ0REUC5Gb3JjZWRSZWNvbm5lY3RFcnJvcicsXG4gICgpID0+IHt9XG4pO1xuXG4vLyBSZXR1cm5zIHRoZSBuYW1lZCBzZXF1ZW5jZSBvZiBwc2V1ZG8tcmFuZG9tIHZhbHVlcy5cbi8vIFRoZSBzY29wZSB3aWxsIGJlIEREUC5fQ3VycmVudE1ldGhvZEludm9jYXRpb24uZ2V0KCksIHNvIHRoZSBzdHJlYW0gd2lsbCBwcm9kdWNlXG4vLyBjb25zaXN0ZW50IHZhbHVlcyBmb3IgbWV0aG9kIGNhbGxzIG9uIHRoZSBjbGllbnQgYW5kIHNlcnZlci5cbkREUC5yYW5kb21TdHJlYW0gPSBuYW1lID0+IHtcbiAgY29uc3Qgc2NvcGUgPSBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLmdldCgpO1xuICByZXR1cm4gRERQQ29tbW9uLlJhbmRvbVN0cmVhbS5nZXQoc2NvcGUsIG5hbWUpO1xufTtcblxuLy8gQHBhcmFtIHVybCB7U3RyaW5nfSBVUkwgdG8gTWV0ZW9yIGFwcCxcbi8vICAgICBlLmcuOlxuLy8gICAgIFwic3ViZG9tYWluLm1ldGVvci5jb21cIixcbi8vICAgICBcImh0dHA6Ly9zdWJkb21haW4ubWV0ZW9yLmNvbVwiLFxuLy8gICAgIFwiL1wiLFxuLy8gICAgIFwiZGRwK3NvY2tqczovL2RkcC0tKioqKi1mb28ubWV0ZW9yLmNvbS9zb2NranNcIlxuXG4vKipcbiAqIEBzdW1tYXJ5IENvbm5lY3QgdG8gdGhlIHNlcnZlciBvZiBhIGRpZmZlcmVudCBNZXRlb3IgYXBwbGljYXRpb24gdG8gc3Vic2NyaWJlIHRvIGl0cyBkb2N1bWVudCBzZXRzIGFuZCBpbnZva2UgaXRzIHJlbW90ZSBtZXRob2RzLlxuICogQGxvY3VzIEFueXdoZXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgb2YgYW5vdGhlciBNZXRlb3IgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmVsb2FkV2l0aE91dHN0YW5kaW5nIGlzIGl0IE9LIHRvIHJlbG9hZCBpZiB0aGVyZSBhcmUgb3V0c3RhbmRpbmcgbWV0aG9kcz9cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmhlYWRlcnMgZXh0cmEgaGVhZGVycyB0byBzZW5kIG9uIHRoZSB3ZWJzb2NrZXRzIGNvbm5lY3Rpb24sIGZvciBzZXJ2ZXItdG8tc2VydmVyIEREUCBvbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5fc29ja2pzT3B0aW9ucyBTcGVjaWZpZXMgb3B0aW9ucyB0byBwYXNzIHRocm91Z2ggdG8gdGhlIHNvY2tqcyBjbGllbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMub25ERFBOZWdvdGlhdGlvblZlcnNpb25GYWlsdXJlIGNhbGxiYWNrIHdoZW4gdmVyc2lvbiBuZWdvdGlhdGlvbiBmYWlscy5cbiAqL1xuRERQLmNvbm5lY3QgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJldCA9IG5ldyBDb25uZWN0aW9uKHVybCwgb3B0aW9ucyk7XG4gIGFsbENvbm5lY3Rpb25zLnB1c2gocmV0KTsgLy8gaGFjay4gc2VlIGJlbG93LlxuICByZXR1cm4gcmV0O1xufTtcblxuRERQLl9yZWNvbm5lY3RIb29rID0gbmV3IEhvb2soeyBiaW5kRW52aXJvbm1lbnQ6IGZhbHNlIH0pO1xuXG4vKipcbiAqIEBzdW1tYXJ5IFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gY2FsbCBhcyB0aGUgZmlyc3Qgc3RlcCBvZlxuICogcmVjb25uZWN0aW5nLiBUaGlzIGZ1bmN0aW9uIGNhbiBjYWxsIG1ldGhvZHMgd2hpY2ggd2lsbCBiZSBleGVjdXRlZCBiZWZvcmVcbiAqIGFueSBvdGhlciBvdXRzdGFuZGluZyBtZXRob2RzLiBGb3IgZXhhbXBsZSwgdGhpcyBjYW4gYmUgdXNlZCB0byByZS1lc3RhYmxpc2hcbiAqIHRoZSBhcHByb3ByaWF0ZSBhdXRoZW50aWNhdGlvbiBjb250ZXh0IG9uIHRoZSBjb25uZWN0aW9uLlxuICogQGxvY3VzIEFueXdoZXJlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbC4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhXG4gKiBzaW5nbGUgYXJndW1lbnQsIHRoZSBbY29ubmVjdGlvbiBvYmplY3RdKCNkZHBfY29ubmVjdCkgdGhhdCBpcyByZWNvbm5lY3RpbmcuXG4gKi9cbkREUC5vblJlY29ubmVjdCA9IGNhbGxiYWNrID0+IEREUC5fcmVjb25uZWN0SG9vay5yZWdpc3RlcihjYWxsYmFjayk7XG5cbi8vIEhhY2sgZm9yIGBzcGlkZXJhYmxlYCBwYWNrYWdlOiBhIHdheSB0byBzZWUgaWYgdGhlIHBhZ2UgaXMgZG9uZVxuLy8gbG9hZGluZyBhbGwgdGhlIGRhdGEgaXQgbmVlZHMuXG4vL1xuRERQLl9hbGxTdWJzY3JpcHRpb25zUmVhZHkgPSAoKSA9PiBhbGxDb25uZWN0aW9ucy5ldmVyeShcbiAgY29ubiA9PiBPYmplY3QudmFsdWVzKGNvbm4uX3N1YnNjcmlwdGlvbnMpLmV2ZXJ5KHN1YiA9PiBzdWIucmVhZHkpXG4pO1xuIl19
