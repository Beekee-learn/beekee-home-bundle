(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var NpmModuleMongodb = Package['npm-mongo'].NpmModuleMongodb;
var NpmModuleMongodbVersion = Package['npm-mongo'].NpmModuleMongodbVersion;
var AllowDeny = Package['allow-deny'].AllowDeny;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var check = Package.check.check;
var Match = Package.check.Match;
var ECMAScript = Package.ecmascript.ECMAScript;
var Log = Package.logging.Log;
var Decimal = Package['mongo-decimal'].Decimal;
var _ = Package.underscore._;
var MaxHeap = Package['binary-heap'].MaxHeap;
var MinHeap = Package['binary-heap'].MinHeap;
var MinMaxHeap = Package['binary-heap'].MinMaxHeap;
var Hook = Package['callback-hook'].Hook;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var MongoInternals, MongoConnection, CursorDescription, Cursor, listenAll, forEachTrigger, OPLOG_COLLECTION, idForOp, OplogHandle, ObserveMultiplexer, ObserveHandle, PollingObserveDriver, OplogObserveDriver, Mongo, _ref, field, value, selector, callback, options;

var require = meteorInstall({"node_modules":{"meteor":{"mongo":{"mongo_driver.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/mongo_driver.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
!function (module1) {
  let _objectSpread;
  module1.link("@babel/runtime/helpers/objectSpread2", {
    default(v) {
      _objectSpread = v;
    }
  }, 0);
  let normalizeProjection;
  module1.link("./mongo_utils", {
    normalizeProjection(v) {
      normalizeProjection = v;
    }
  }, 0);
  let DocFetcher;
  module1.link("./doc_fetcher.js", {
    DocFetcher(v) {
      DocFetcher = v;
    }
  }, 1);
  let ASYNC_CURSOR_METHODS, getAsyncMethodName;
  module1.link("meteor/minimongo/constants", {
    ASYNC_CURSOR_METHODS(v) {
      ASYNC_CURSOR_METHODS = v;
    },
    getAsyncMethodName(v) {
      getAsyncMethodName = v;
    }
  }, 2);
  /**
   * Provide a synchronous Collection API using fibers, backed by
   * MongoDB.  This is only for use on the server, and mostly identical
   * to the client API.
   *
   * NOTE: the public API methods must be run within a fiber. If you call
   * these outside of a fiber they will explode!
   */

  const path = require("path");
  const util = require("util");

  /** @type {import('mongodb')} */
  var MongoDB = NpmModuleMongodb;
  var Future = Npm.require('fibers/future');
  MongoInternals = {};
  MongoInternals.NpmModules = {
    mongodb: {
      version: NpmModuleMongodbVersion,
      module: MongoDB
    }
  };

  // Older version of what is now available via
  // MongoInternals.NpmModules.mongodb.module.  It was never documented, but
  // people do use it.
  // XXX COMPAT WITH 1.0.3.2
  MongoInternals.NpmModule = MongoDB;
  const FILE_ASSET_SUFFIX = 'Asset';
  const ASSETS_FOLDER = 'assets';
  const APP_FOLDER = 'app';

  // This is used to add or remove EJSON from the beginning of everything nested
  // inside an EJSON custom type. It should only be called on pure JSON!
  var replaceNames = function (filter, thing) {
    if (typeof thing === "object" && thing !== null) {
      if (_.isArray(thing)) {
        return _.map(thing, _.bind(replaceNames, null, filter));
      }
      var ret = {};
      _.each(thing, function (value, key) {
        ret[filter(key)] = replaceNames(filter, value);
      });
      return ret;
    }
    return thing;
  };

  // Ensure that EJSON.clone keeps a Timestamp as a Timestamp (instead of just
  // doing a structural clone).
  // XXX how ok is this? what if there are multiple copies of MongoDB loaded?
  MongoDB.Timestamp.prototype.clone = function () {
    // Timestamps should be immutable.
    return this;
  };
  var makeMongoLegal = function (name) {
    return "EJSON" + name;
  };
  var unmakeMongoLegal = function (name) {
    return name.substr(5);
  };
  var replaceMongoAtomWithMeteor = function (document) {
    if (document instanceof MongoDB.Binary) {
      // for backwards compatibility
      if (document.sub_type !== 0) {
        return document;
      }
      var buffer = document.value(true);
      return new Uint8Array(buffer);
    }
    if (document instanceof MongoDB.ObjectID) {
      return new Mongo.ObjectID(document.toHexString());
    }
    if (document instanceof MongoDB.Decimal128) {
      return Decimal(document.toString());
    }
    if (document["EJSON$type"] && document["EJSON$value"] && _.size(document) === 2) {
      return EJSON.fromJSONValue(replaceNames(unmakeMongoLegal, document));
    }
    if (document instanceof MongoDB.Timestamp) {
      // For now, the Meteor representation of a Mongo timestamp type (not a date!
      // this is a weird internal thing used in the oplog!) is the same as the
      // Mongo representation. We need to do this explicitly or else we would do a
      // structural clone and lose the prototype.
      return document;
    }
    return undefined;
  };
  var replaceMeteorAtomWithMongo = function (document) {
    if (EJSON.isBinary(document)) {
      // This does more copies than we'd like, but is necessary because
      // MongoDB.BSON only looks like it takes a Uint8Array (and doesn't actually
      // serialize it correctly).
      return new MongoDB.Binary(Buffer.from(document));
    }
    if (document instanceof MongoDB.Binary) {
      return document;
    }
    if (document instanceof Mongo.ObjectID) {
      return new MongoDB.ObjectID(document.toHexString());
    }
    if (document instanceof MongoDB.Timestamp) {
      // For now, the Meteor representation of a Mongo timestamp type (not a date!
      // this is a weird internal thing used in the oplog!) is the same as the
      // Mongo representation. We need to do this explicitly or else we would do a
      // structural clone and lose the prototype.
      return document;
    }
    if (document instanceof Decimal) {
      return MongoDB.Decimal128.fromString(document.toString());
    }
    if (EJSON._isCustomType(document)) {
      return replaceNames(makeMongoLegal, EJSON.toJSONValue(document));
    }
    // It is not ordinarily possible to stick dollar-sign keys into mongo
    // so we don't bother checking for things that need escaping at this time.
    return undefined;
  };
  var replaceTypes = function (document, atomTransformer) {
    if (typeof document !== 'object' || document === null) return document;
    var replacedTopLevelAtom = atomTransformer(document);
    if (replacedTopLevelAtom !== undefined) return replacedTopLevelAtom;
    var ret = document;
    _.each(document, function (val, key) {
      var valReplaced = replaceTypes(val, atomTransformer);
      if (val !== valReplaced) {
        // Lazy clone. Shallow copy.
        if (ret === document) ret = _.clone(document);
        ret[key] = valReplaced;
      }
    });
    return ret;
  };
  MongoConnection = function (url, options) {
    var _Meteor$settings, _Meteor$settings$pack, _Meteor$settings$pack2;
    var self = this;
    options = options || {};
    self._observeMultiplexers = {};
    self._onFailoverHook = new Hook();
    const userOptions = _objectSpread(_objectSpread({}, Mongo._connectionOptions || {}), ((_Meteor$settings = Meteor.settings) === null || _Meteor$settings === void 0 ? void 0 : (_Meteor$settings$pack = _Meteor$settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : (_Meteor$settings$pack2 = _Meteor$settings$pack.mongo) === null || _Meteor$settings$pack2 === void 0 ? void 0 : _Meteor$settings$pack2.options) || {});
    var mongoOptions = Object.assign({
      ignoreUndefined: true
    }, userOptions);

    // Internally the oplog connections specify their own maxPoolSize
    // which we don't want to overwrite with any user defined value
    if (_.has(options, 'maxPoolSize')) {
      // If we just set this for "server", replSet will override it. If we just
      // set it for replSet, it will be ignored if we're not using a replSet.
      mongoOptions.maxPoolSize = options.maxPoolSize;
    }
    if (_.has(options, 'minPoolSize')) {
      mongoOptions.minPoolSize = options.minPoolSize;
    }

    // Transform options like "tlsCAFileAsset": "filename.pem" into
    // "tlsCAFile": "/<fullpath>/filename.pem"
    Object.entries(mongoOptions || {}).filter(_ref => {
      let [key] = _ref;
      return key && key.endsWith(FILE_ASSET_SUFFIX);
    }).forEach(_ref2 => {
      let [key, value] = _ref2;
      const optionName = key.replace(FILE_ASSET_SUFFIX, '');
      mongoOptions[optionName] = path.join(Assets.getServerDir(), ASSETS_FOLDER, APP_FOLDER, value);
      delete mongoOptions[key];
    });
    self.db = null;
    self._oplogHandle = null;
    self._docFetcher = null;
    self.client = new MongoDB.MongoClient(url, mongoOptions);
    self.db = self.client.db();
    self.client.on('serverDescriptionChanged', Meteor.bindEnvironment(event => {
      // When the connection is no longer against the primary node, execute all
      // failover hooks. This is important for the driver as it has to re-pool the
      // query when it happens.
      if (event.previousDescription.type !== 'RSPrimary' && event.newDescription.type === 'RSPrimary') {
        self._onFailoverHook.each(callback => {
          callback();
          return true;
        });
      }
    }));
    if (options.oplogUrl && !Package['disable-oplog']) {
      self._oplogHandle = new OplogHandle(options.oplogUrl, self.db.databaseName);
      self._docFetcher = new DocFetcher(self);
    }
    Promise.await(self.client.connect());
  };
  MongoConnection.prototype.close = function () {
    var self = this;
    if (!self.db) throw Error("close called before Connection created?");

    // XXX probably untested
    var oplogHandle = self._oplogHandle;
    self._oplogHandle = null;
    if (oplogHandle) oplogHandle.stop();

    // Use Future.wrap so that errors get thrown. This happens to
    // work even outside a fiber since the 'close' method is not
    // actually asynchronous.
    Future.wrap(_.bind(self.client.close, self.client))(true).wait();
  };
  MongoConnection.prototype._setOplogHandle = function (oplogHandle) {
    this._oplogHandle = oplogHandle;
    return this;
  };

  // Returns the Mongo Collection object; may yield.
  MongoConnection.prototype.rawCollection = function (collectionName) {
    var self = this;
    if (!self.db) throw Error("rawCollection called before Connection created?");
    return self.db.collection(collectionName);
  };
  MongoConnection.prototype._createCappedCollection = function (collectionName, byteSize, maxDocuments) {
    var self = this;
    if (!self.db) throw Error("_createCappedCollection called before Connection created?");
    var future = new Future();
    self.db.createCollection(collectionName, {
      capped: true,
      size: byteSize,
      max: maxDocuments
    }, future.resolver());
    future.wait();
  };

  // This should be called synchronously with a write, to create a
  // transaction on the current write fence, if any. After we can read
  // the write, and after observers have been notified (or at least,
  // after the observer notifiers have added themselves to the write
  // fence), you should call 'committed()' on the object returned.
  MongoConnection.prototype._maybeBeginWrite = function () {
    var fence = DDPServer._CurrentWriteFence.get();
    if (fence) {
      return fence.beginWrite();
    } else {
      return {
        committed: function () {}
      };
    }
  };

  // Internal interface: adds a callback which is called when the Mongo primary
  // changes. Returns a stop handle.
  MongoConnection.prototype._onFailover = function (callback) {
    return this._onFailoverHook.register(callback);
  };

  //////////// Public API //////////

  // The write methods block until the database has confirmed the write (it may
  // not be replicated or stable on disk, but one server has confirmed it) if no
  // callback is provided. If a callback is provided, then they call the callback
  // when the write is confirmed. They return nothing on success, and raise an
  // exception on failure.
  //
  // After making a write (with insert, update, remove), observers are
  // notified asynchronously. If you want to receive a callback once all
  // of the observer notifications have landed for your write, do the
  // writes inside a write fence (set DDPServer._CurrentWriteFence to a new
  // _WriteFence, and then set a callback on the write fence.)
  //
  // Since our execution environment is single-threaded, this is
  // well-defined -- a write "has been made" if it's returned, and an
  // observer "has been notified" if its callback has returned.

  var writeCallback = function (write, refresh, callback) {
    return function (err, result) {
      if (!err) {
        // XXX We don't have to run this on error, right?
        try {
          refresh();
        } catch (refreshErr) {
          if (callback) {
            callback(refreshErr);
            return;
          } else {
            throw refreshErr;
          }
        }
      }
      write.committed();
      if (callback) {
        callback(err, result);
      } else if (err) {
        throw err;
      }
    };
  };
  var bindEnvironmentForWrite = function (callback) {
    return Meteor.bindEnvironment(callback, "Mongo write");
  };
  MongoConnection.prototype._insert = function (collection_name, document, callback) {
    var self = this;
    var sendError = function (e) {
      if (callback) return callback(e);
      throw e;
    };
    if (collection_name === "___meteor_failure_test_collection") {
      var e = new Error("Failure test");
      e._expectedByTest = true;
      sendError(e);
      return;
    }
    if (!(LocalCollection._isPlainObject(document) && !EJSON._isCustomType(document))) {
      sendError(new Error("Only plain objects may be inserted into MongoDB"));
      return;
    }
    var write = self._maybeBeginWrite();
    var refresh = function () {
      Meteor.refresh({
        collection: collection_name,
        id: document._id
      });
    };
    callback = bindEnvironmentForWrite(writeCallback(write, refresh, callback));
    try {
      var collection = self.rawCollection(collection_name);
      collection.insertOne(replaceTypes(document, replaceMeteorAtomWithMongo), {
        safe: true
      }).then(_ref3 => {
        let {
          insertedId
        } = _ref3;
        callback(null, insertedId);
      }).catch(e => {
        callback(e, null);
      });
    } catch (err) {
      write.committed();
      throw err;
    }
  };

  // Cause queries that may be affected by the selector to poll in this write
  // fence.
  MongoConnection.prototype._refresh = function (collectionName, selector) {
    var refreshKey = {
      collection: collectionName
    };
    // If we know which documents we're removing, don't poll queries that are
    // specific to other documents. (Note that multiple notifications here should
    // not cause multiple polls, since all our listener is doing is enqueueing a
    // poll.)
    var specificIds = LocalCollection._idsMatchedBySelector(selector);
    if (specificIds) {
      _.each(specificIds, function (id) {
        Meteor.refresh(_.extend({
          id: id
        }, refreshKey));
      });
    } else {
      Meteor.refresh(refreshKey);
    }
  };
  MongoConnection.prototype._remove = function (collection_name, selector, callback) {
    var self = this;
    if (collection_name === "___meteor_failure_test_collection") {
      var e = new Error("Failure test");
      e._expectedByTest = true;
      if (callback) {
        return callback(e);
      } else {
        throw e;
      }
    }
    var write = self._maybeBeginWrite();
    var refresh = function () {
      self._refresh(collection_name, selector);
    };
    callback = bindEnvironmentForWrite(writeCallback(write, refresh, callback));
    try {
      var collection = self.rawCollection(collection_name);
      collection.deleteMany(replaceTypes(selector, replaceMeteorAtomWithMongo), {
        safe: true
      }).then(_ref4 => {
        let {
          deletedCount
        } = _ref4;
        callback(null, transformResult({
          result: {
            modifiedCount: deletedCount
          }
        }).numberAffected);
      }).catch(err => {
        callback(err);
      });
    } catch (err) {
      write.committed();
      throw err;
    }
  };
  MongoConnection.prototype._dropCollection = function (collectionName, cb) {
    var self = this;
    var write = self._maybeBeginWrite();
    var refresh = function () {
      Meteor.refresh({
        collection: collectionName,
        id: null,
        dropCollection: true
      });
    };
    cb = bindEnvironmentForWrite(writeCallback(write, refresh, cb));
    try {
      var collection = self.rawCollection(collectionName);
      collection.drop(cb);
    } catch (e) {
      write.committed();
      throw e;
    }
  };

  // For testing only.  Slightly better than `c.rawDatabase().dropDatabase()`
  // because it lets the test's fence wait for it to be complete.
  MongoConnection.prototype._dropDatabase = function (cb) {
    var self = this;
    var write = self._maybeBeginWrite();
    var refresh = function () {
      Meteor.refresh({
        dropDatabase: true
      });
    };
    cb = bindEnvironmentForWrite(writeCallback(write, refresh, cb));
    try {
      self.db.dropDatabase(cb);
    } catch (e) {
      write.committed();
      throw e;
    }
  };
  MongoConnection.prototype._update = function (collection_name, selector, mod, options, callback) {
    var self = this;
    if (!callback && options instanceof Function) {
      callback = options;
      options = null;
    }
    if (collection_name === "___meteor_failure_test_collection") {
      var e = new Error("Failure test");
      e._expectedByTest = true;
      if (callback) {
        return callback(e);
      } else {
        throw e;
      }
    }

    // explicit safety check. null and undefined can crash the mongo
    // driver. Although the node driver and minimongo do 'support'
    // non-object modifier in that they don't crash, they are not
    // meaningful operations and do not do anything. Defensively throw an
    // error here.
    if (!mod || typeof mod !== 'object') throw new Error("Invalid modifier. Modifier must be an object.");
    if (!(LocalCollection._isPlainObject(mod) && !EJSON._isCustomType(mod))) {
      throw new Error("Only plain objects may be used as replacement" + " documents in MongoDB");
    }
    if (!options) options = {};
    var write = self._maybeBeginWrite();
    var refresh = function () {
      self._refresh(collection_name, selector);
    };
    callback = writeCallback(write, refresh, callback);
    try {
      var collection = self.rawCollection(collection_name);
      var mongoOpts = {
        safe: true
      };
      // Add support for filtered positional operator
      if (options.arrayFilters !== undefined) mongoOpts.arrayFilters = options.arrayFilters;
      // explictly enumerate options that minimongo supports
      if (options.upsert) mongoOpts.upsert = true;
      if (options.multi) mongoOpts.multi = true;
      // Lets you get a more more full result from MongoDB. Use with caution:
      // might not work with C.upsert (as opposed to C.update({upsert:true}) or
      // with simulated upsert.
      if (options.fullResult) mongoOpts.fullResult = true;
      var mongoSelector = replaceTypes(selector, replaceMeteorAtomWithMongo);
      var mongoMod = replaceTypes(mod, replaceMeteorAtomWithMongo);
      var isModify = LocalCollection._isModificationMod(mongoMod);
      if (options._forbidReplace && !isModify) {
        var err = new Error("Invalid modifier. Replacements are forbidden.");
        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }

      // We've already run replaceTypes/replaceMeteorAtomWithMongo on
      // selector and mod.  We assume it doesn't matter, as far as
      // the behavior of modifiers is concerned, whether `_modify`
      // is run on EJSON or on mongo-converted EJSON.

      // Run this code up front so that it fails fast if someone uses
      // a Mongo update operator we don't support.
      let knownId;
      if (options.upsert) {
        try {
          let newDoc = LocalCollection._createUpsertDocument(selector, mod);
          knownId = newDoc._id;
        } catch (err) {
          if (callback) {
            return callback(err);
          } else {
            throw err;
          }
        }
      }
      if (options.upsert && !isModify && !knownId && options.insertedId && !(options.insertedId instanceof Mongo.ObjectID && options.generatedId)) {
        // In case of an upsert with a replacement, where there is no _id defined
        // in either the query or the replacement doc, mongo will generate an id itself.
        // Therefore we need this special strategy if we want to control the id ourselves.

        // We don't need to do this when:
        // - This is not a replacement, so we can add an _id to $setOnInsert
        // - The id is defined by query or mod we can just add it to the replacement doc
        // - The user did not specify any id preference and the id is a Mongo ObjectId,
        //     then we can just let Mongo generate the id

        simulateUpsertWithInsertedId(collection, mongoSelector, mongoMod, options,
        // This callback does not need to be bindEnvironment'ed because
        // simulateUpsertWithInsertedId() wraps it and then passes it through
        // bindEnvironmentForWrite.
        function (error, result) {
          // If we got here via a upsert() call, then options._returnObject will
          // be set and we should return the whole object. Otherwise, we should
          // just return the number of affected docs to match the mongo API.
          if (result && !options._returnObject) {
            callback(error, result.numberAffected);
          } else {
            callback(error, result);
          }
        });
      } else {
        if (options.upsert && !knownId && options.insertedId && isModify) {
          if (!mongoMod.hasOwnProperty('$setOnInsert')) {
            mongoMod.$setOnInsert = {};
          }
          knownId = options.insertedId;
          Object.assign(mongoMod.$setOnInsert, replaceTypes({
            _id: options.insertedId
          }, replaceMeteorAtomWithMongo));
        }
        const strings = Object.keys(mongoMod).filter(key => !key.startsWith("$"));
        let updateMethod = strings.length > 0 ? 'replaceOne' : 'updateMany';
        updateMethod = updateMethod === 'updateMany' && !mongoOpts.multi ? 'updateOne' : updateMethod;
        collection[updateMethod].bind(collection)(mongoSelector, mongoMod, mongoOpts,
        // mongo driver now returns undefined for err in the callback
        bindEnvironmentForWrite(function () {
          let err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          let result = arguments.length > 1 ? arguments[1] : undefined;
          if (!err) {
            var meteorResult = transformResult({
              result
            });
            if (meteorResult && options._returnObject) {
              // If this was an upsert() call, and we ended up
              // inserting a new doc and we know its id, then
              // return that id as well.
              if (options.upsert && meteorResult.insertedId) {
                if (knownId) {
                  meteorResult.insertedId = knownId;
                } else if (meteorResult.insertedId instanceof MongoDB.ObjectID) {
                  meteorResult.insertedId = new Mongo.ObjectID(meteorResult.insertedId.toHexString());
                }
              }
              callback(err, meteorResult);
            } else {
              callback(err, meteorResult.numberAffected);
            }
          } else {
            callback(err);
          }
        }));
      }
    } catch (e) {
      write.committed();
      throw e;
    }
  };
  var transformResult = function (driverResult) {
    var meteorResult = {
      numberAffected: 0
    };
    if (driverResult) {
      var mongoResult = driverResult.result;
      // On updates with upsert:true, the inserted values come as a list of
      // upserted values -- even with options.multi, when the upsert does insert,
      // it only inserts one element.
      if (mongoResult.upsertedCount) {
        meteorResult.numberAffected = mongoResult.upsertedCount;
        if (mongoResult.upsertedId) {
          meteorResult.insertedId = mongoResult.upsertedId;
        }
      } else {
        // n was used before Mongo 5.0, in Mongo 5.0 we are not receiving this n
        // field and so we are using modifiedCount instead
        meteorResult.numberAffected = mongoResult.n || mongoResult.matchedCount || mongoResult.modifiedCount;
      }
    }
    return meteorResult;
  };
  var NUM_OPTIMISTIC_TRIES = 3;

  // exposed for testing
  MongoConnection._isCannotChangeIdError = function (err) {
    // Mongo 3.2.* returns error as next Object:
    // {name: String, code: Number, errmsg: String}
    // Older Mongo returns:
    // {name: String, code: Number, err: String}
    var error = err.errmsg || err.err;

    // We don't use the error code here
    // because the error code we observed it producing (16837) appears to be
    // a far more generic error code based on examining the source.
    if (error.indexOf('The _id field cannot be changed') === 0 || error.indexOf("the (immutable) field '_id' was found to have been altered to _id") !== -1) {
      return true;
    }
    return false;
  };
  var simulateUpsertWithInsertedId = function (collection, selector, mod, options, callback) {
    // STRATEGY: First try doing an upsert with a generated ID.
    // If this throws an error about changing the ID on an existing document
    // then without affecting the database, we know we should probably try
    // an update without the generated ID. If it affected 0 documents,
    // then without affecting the database, we the document that first
    // gave the error is probably removed and we need to try an insert again
    // We go back to step one and repeat.
    // Like all "optimistic write" schemes, we rely on the fact that it's
    // unlikely our writes will continue to be interfered with under normal
    // circumstances (though sufficiently heavy contention with writers
    // disagreeing on the existence of an object will cause writes to fail
    // in theory).

    var insertedId = options.insertedId; // must exist
    var mongoOptsForUpdate = {
      safe: true,
      multi: options.multi
    };
    var mongoOptsForInsert = {
      safe: true,
      upsert: true
    };
    var replacementWithId = Object.assign(replaceTypes({
      _id: insertedId
    }, replaceMeteorAtomWithMongo), mod);
    var tries = NUM_OPTIMISTIC_TRIES;
    var doUpdate = function () {
      tries--;
      if (!tries) {
        callback(new Error("Upsert failed after " + NUM_OPTIMISTIC_TRIES + " tries."));
      } else {
        let method = collection.updateMany;
        if (!Object.keys(mod).some(key => key.startsWith("$"))) {
          method = collection.replaceOne.bind(collection);
        }
        method(selector, mod, mongoOptsForUpdate, bindEnvironmentForWrite(function (err, result) {
          if (err) {
            callback(err);
          } else if (result && (result.modifiedCount || result.upsertedCount)) {
            callback(null, {
              numberAffected: result.modifiedCount || result.upsertedCount,
              insertedId: result.upsertedId || undefined
            });
          } else {
            doConditionalInsert();
          }
        }));
      }
    };
    var doConditionalInsert = function () {
      collection.replaceOne(selector, replacementWithId, mongoOptsForInsert, bindEnvironmentForWrite(function (err, result) {
        if (err) {
          // figure out if this is a
          // "cannot change _id of document" error, and
          // if so, try doUpdate() again, up to 3 times.
          if (MongoConnection._isCannotChangeIdError(err)) {
            doUpdate();
          } else {
            callback(err);
          }
        } else {
          callback(null, {
            numberAffected: result.upsertedCount,
            insertedId: result.upsertedId
          });
        }
      }));
    };
    doUpdate();
  };
  _.each(["insert", "update", "remove", "dropCollection", "dropDatabase"], function (method) {
    MongoConnection.prototype[method] = function /* arguments */
    () {
      var self = this;
      return Meteor.wrapAsync(self["_" + method]).apply(self, arguments);
    };
  });

  // XXX MongoConnection.upsert() does not return the id of the inserted document
  // unless you set it explicitly in the selector or modifier (as a replacement
  // doc).
  MongoConnection.prototype.upsert = function (collectionName, selector, mod, options, callback) {
    var self = this;
    if (typeof options === "function" && !callback) {
      callback = options;
      options = {};
    }
    return self.update(collectionName, selector, mod, _.extend({}, options, {
      upsert: true,
      _returnObject: true
    }), callback);
  };
  MongoConnection.prototype.find = function (collectionName, selector, options) {
    var self = this;
    if (arguments.length === 1) selector = {};
    return new Cursor(self, new CursorDescription(collectionName, selector, options));
  };
  MongoConnection.prototype.findOneAsync = function (collection_name, selector, options) {
    return Promise.asyncApply(() => {
      var self = this;
      if (arguments.length === 1) selector = {};
      options = options || {};
      options.limit = 1;
      return Promise.await(self.find(collection_name, selector, options).fetchAsync())[0];
    });
  };
  MongoConnection.prototype.findOne = function (collection_name, selector, options) {
    var self = this;
    return Future.fromPromise(self.findOneAsync(collection_name, selector, options)).wait();
  };
  MongoConnection.prototype.createIndexAsync = function (collectionName, index, options) {
    var self = this;

    // We expect this function to be called at startup, not from within a method,
    // so we don't interact with the write fence.
    var collection = self.rawCollection(collectionName);
    return collection.createIndex(index, options);
  };

  // We'll actually design an index API later. For now, we just pass through to
  // Mongo's, but make it synchronous.
  MongoConnection.prototype.createIndex = function (collectionName, index, options) {
    var self = this;
    return Future.fromPromise(self.createIndexAsync(collectionName, index, options));
  };
  MongoConnection.prototype.countDocuments = function (collectionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    args = args.map(arg => replaceTypes(arg, replaceMeteorAtomWithMongo));
    const collection = this.rawCollection(collectionName);
    return collection.countDocuments(...args);
  };
  MongoConnection.prototype.estimatedDocumentCount = function (collectionName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    args = args.map(arg => replaceTypes(arg, replaceMeteorAtomWithMongo));
    const collection = this.rawCollection(collectionName);
    return collection.estimatedDocumentCount(...args);
  };
  MongoConnection.prototype._ensureIndex = MongoConnection.prototype.createIndex;
  MongoConnection.prototype._dropIndex = function (collectionName, index) {
    var self = this;

    // This function is only used by test code, not within a method, so we don't
    // interact with the write fence.
    var collection = self.rawCollection(collectionName);
    var future = new Future();
    var indexName = collection.dropIndex(index, future.resolver());
    future.wait();
  };

  // CURSORS

  // There are several classes which relate to cursors:
  //
  // CursorDescription represents the arguments used to construct a cursor:
  // collectionName, selector, and (find) options.  Because it is used as a key
  // for cursor de-dup, everything in it should either be JSON-stringifiable or
  // not affect observeChanges output (eg, options.transform functions are not
  // stringifiable but do not affect observeChanges).
  //
  // SynchronousCursor is a wrapper around a MongoDB cursor
  // which includes fully-synchronous versions of forEach, etc.
  //
  // Cursor is the cursor object returned from find(), which implements the
  // documented Mongo.Collection cursor API.  It wraps a CursorDescription and a
  // SynchronousCursor (lazily: it doesn't contact Mongo until you call a method
  // like fetch or forEach on it).
  //
  // ObserveHandle is the "observe handle" returned from observeChanges. It has a
  // reference to an ObserveMultiplexer.
  //
  // ObserveMultiplexer allows multiple identical ObserveHandles to be driven by a
  // single observe driver.
  //
  // There are two "observe drivers" which drive ObserveMultiplexers:
  //   - PollingObserveDriver caches the results of a query and reruns it when
  //     necessary.
  //   - OplogObserveDriver follows the Mongo operation log to directly observe
  //     database changes.
  // Both implementations follow the same simple interface: when you create them,
  // they start sending observeChanges callbacks (and a ready() invocation) to
  // their ObserveMultiplexer, and you stop them by calling their stop() method.

  CursorDescription = function (collectionName, selector, options) {
    var self = this;
    self.collectionName = collectionName;
    self.selector = Mongo.Collection._rewriteSelector(selector);
    self.options = options || {};
  };
  Cursor = function (mongo, cursorDescription) {
    var self = this;
    self._mongo = mongo;
    self._cursorDescription = cursorDescription;
    self._synchronousCursor = null;
  };
  function setupSynchronousCursor(cursor, method) {
    // You can only observe a tailable cursor.
    if (cursor._cursorDescription.options.tailable) throw new Error('Cannot call ' + method + ' on a tailable cursor');
    if (!cursor._synchronousCursor) {
      cursor._synchronousCursor = cursor._mongo._createSynchronousCursor(cursor._cursorDescription, {
        // Make sure that the "cursor" argument to forEach/map callbacks is the
        // Cursor, not the SynchronousCursor.
        selfForIteration: cursor,
        useTransform: true
      });
    }
    return cursor._synchronousCursor;
  }
  Cursor.prototype.count = function () {
    const collection = this._mongo.rawCollection(this._cursorDescription.collectionName);
    return Promise.await(collection.countDocuments(replaceTypes(this._cursorDescription.selector, replaceMeteorAtomWithMongo), replaceTypes(this._cursorDescription.options, replaceMeteorAtomWithMongo)));
  };
  [...ASYNC_CURSOR_METHODS, Symbol.iterator, Symbol.asyncIterator].forEach(methodName => {
    // count is handled specially since we don't want to create a cursor.
    // it is still included in ASYNC_CURSOR_METHODS because we still want an async version of it to exist.
    if (methodName !== 'count') {
      Cursor.prototype[methodName] = function () {
        const cursor = setupSynchronousCursor(this, methodName);
        return cursor[methodName](...arguments);
      };
    }

    // These methods are handled separately.
    if (methodName === Symbol.iterator || methodName === Symbol.asyncIterator) {
      return;
    }
    const methodNameAsync = getAsyncMethodName(methodName);
    Cursor.prototype[methodNameAsync] = function () {
      try {
        this[methodName].isCalledFromAsync = true;
        return Promise.resolve(this[methodName](...arguments));
      } catch (error) {
        return Promise.reject(error);
      }
    };
  });
  Cursor.prototype.getTransform = function () {
    return this._cursorDescription.options.transform;
  };

  // When you call Meteor.publish() with a function that returns a Cursor, we need
  // to transmute it into the equivalent subscription.  This is the function that
  // does that.
  Cursor.prototype._publishCursor = function (sub) {
    var self = this;
    var collection = self._cursorDescription.collectionName;
    return Mongo.Collection._publishCursor(self, sub, collection);
  };

  // Used to guarantee that publish functions return at most one cursor per
  // collection. Private, because we might later have cursors that include
  // documents from multiple collections somehow.
  Cursor.prototype._getCollectionName = function () {
    var self = this;
    return self._cursorDescription.collectionName;
  };
  Cursor.prototype.observe = function (callbacks) {
    var self = this;
    return LocalCollection._observeFromObserveChanges(self, callbacks);
  };
  Cursor.prototype.observeAsync = function (callbacks) {
    return new Promise(resolve => resolve(this.observe(callbacks)));
  };
  Cursor.prototype.observeChanges = function (callbacks) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var self = this;
    var methods = ['addedAt', 'added', 'changedAt', 'changed', 'removedAt', 'removed', 'movedTo'];
    var ordered = LocalCollection._observeChangesCallbacksAreOrdered(callbacks);
    let exceptionName = callbacks._fromObserve ? 'observe' : 'observeChanges';
    exceptionName += ' callback';
    methods.forEach(function (method) {
      if (callbacks[method] && typeof callbacks[method] == "function") {
        callbacks[method] = Meteor.bindEnvironment(callbacks[method], method + exceptionName);
      }
    });
    return self._mongo._observeChanges(self._cursorDescription, ordered, callbacks, options.nonMutatingCallbacks);
  };
  Cursor.prototype.observeChangesAsync = function (callbacks) {
    return Promise.asyncApply(() => {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(resolve => resolve(this.observeChanges(callbacks, options)));
    });
  };
  MongoConnection.prototype._createSynchronousCursor = function (cursorDescription, options) {
    var self = this;
    options = _.pick(options || {}, 'selfForIteration', 'useTransform');
    var collection = self.rawCollection(cursorDescription.collectionName);
    var cursorOptions = cursorDescription.options;
    var mongoOptions = {
      sort: cursorOptions.sort,
      limit: cursorOptions.limit,
      skip: cursorOptions.skip,
      projection: cursorOptions.fields || cursorOptions.projection,
      readPreference: cursorOptions.readPreference
    };

    // Do we want a tailable cursor (which only works on capped collections)?
    if (cursorOptions.tailable) {
      mongoOptions.numberOfRetries = -1;
    }
    var dbCursor = collection.find(replaceTypes(cursorDescription.selector, replaceMeteorAtomWithMongo), mongoOptions);

    // Do we want a tailable cursor (which only works on capped collections)?
    if (cursorOptions.tailable) {
      // We want a tailable cursor...
      dbCursor.addCursorFlag("tailable", true);
      // ... and for the server to wait a bit if any getMore has no data (rather
      // than making us put the relevant sleeps in the client)...
      dbCursor.addCursorFlag("awaitData", true);

      // And if this is on the oplog collection and the cursor specifies a 'ts',
      // then set the undocumented oplog replay flag, which does a special scan to
      // find the first document (instead of creating an index on ts). This is a
      // very hard-coded Mongo flag which only works on the oplog collection and
      // only works with the ts field.
      if (cursorDescription.collectionName === OPLOG_COLLECTION && cursorDescription.selector.ts) {
        dbCursor.addCursorFlag("oplogReplay", true);
      }
    }
    if (typeof cursorOptions.maxTimeMs !== 'undefined') {
      dbCursor = dbCursor.maxTimeMS(cursorOptions.maxTimeMs);
    }
    if (typeof cursorOptions.hint !== 'undefined') {
      dbCursor = dbCursor.hint(cursorOptions.hint);
    }
    return new SynchronousCursor(dbCursor, cursorDescription, options, collection);
  };
  var SynchronousCursor = function (dbCursor, cursorDescription, options, collection) {
    var self = this;
    options = _.pick(options || {}, 'selfForIteration', 'useTransform');
    self._dbCursor = dbCursor;
    self._cursorDescription = cursorDescription;
    // The "self" argument passed to forEach/map callbacks. If we're wrapped
    // inside a user-visible Cursor, we want to provide the outer cursor!
    self._selfForIteration = options.selfForIteration || self;
    if (options.useTransform && cursorDescription.options.transform) {
      self._transform = LocalCollection.wrapTransform(cursorDescription.options.transform);
    } else {
      self._transform = null;
    }
    self._synchronousCount = Future.wrap(collection.countDocuments.bind(collection, replaceTypes(cursorDescription.selector, replaceMeteorAtomWithMongo), replaceTypes(cursorDescription.options, replaceMeteorAtomWithMongo)));
    self._visitedIds = new LocalCollection._IdMap();
  };
  _.extend(SynchronousCursor.prototype, {
    // Returns a Promise for the next object from the underlying cursor (before
    // the Mongo->Meteor type replacement).
    _rawNextObjectPromise: function () {
      const self = this;
      return new Promise((resolve, reject) => {
        self._dbCursor.next((err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        });
      });
    },
    // Returns a Promise for the next object from the cursor, skipping those whose
    // IDs we've already seen and replacing Mongo atoms with Meteor atoms.
    _nextObjectPromise: function () {
      return Promise.asyncApply(() => {
        var self = this;
        while (true) {
          var doc = Promise.await(self._rawNextObjectPromise());
          if (!doc) return null;
          doc = replaceTypes(doc, replaceMongoAtomWithMeteor);
          if (!self._cursorDescription.options.tailable && _.has(doc, '_id')) {
            // Did Mongo give us duplicate documents in the same cursor? If so,
            // ignore this one. (Do this before the transform, since transform might
            // return some unrelated value.) We don't do this for tailable cursors,
            // because we want to maintain O(1) memory usage. And if there isn't _id
            // for some reason (maybe it's the oplog), then we don't do this either.
            // (Be careful to do this for falsey but existing _id, though.)
            if (self._visitedIds.has(doc._id)) continue;
            self._visitedIds.set(doc._id, true);
          }
          if (self._transform) doc = self._transform(doc);
          return doc;
        }
      });
    },
    // Returns a promise which is resolved with the next object (like with
    // _nextObjectPromise) or rejected if the cursor doesn't return within
    // timeoutMS ms.
    _nextObjectPromiseWithTimeout: function (timeoutMS) {
      const self = this;
      if (!timeoutMS) {
        return self._nextObjectPromise();
      }
      const nextObjectPromise = self._nextObjectPromise();
      const timeoutErr = new Error('Client-side timeout waiting for next object');
      const timeoutPromise = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(timeoutErr);
        }, timeoutMS);
      });
      return Promise.race([nextObjectPromise, timeoutPromise]).catch(err => {
        if (err === timeoutErr) {
          self.close();
        }
        throw err;
      });
    },
    _nextObject: function () {
      var self = this;
      return self._nextObjectPromise().await();
    },
    forEach: function (callback, thisArg) {
      var self = this;
      const wrappedFn = Meteor.wrapFn(callback);

      // Get back to the beginning.
      self._rewind();

      // We implement the loop ourself instead of using self._dbCursor.each,
      // because "each" will call its callback outside of a fiber which makes it
      // much more complex to make this function synchronous.
      var index = 0;
      while (true) {
        var doc = self._nextObject();
        if (!doc) return;
        wrappedFn.call(thisArg, doc, index++, self._selfForIteration);
      }
    },
    // XXX Allow overlapping callback executions if callback yields.
    map: function (callback, thisArg) {
      var self = this;
      const wrappedFn = Meteor.wrapFn(callback);
      var res = [];
      self.forEach(function (doc, index) {
        res.push(wrappedFn.call(thisArg, doc, index, self._selfForIteration));
      });
      return res;
    },
    _rewind: function () {
      var self = this;

      // known to be synchronous
      self._dbCursor.rewind();
      self._visitedIds = new LocalCollection._IdMap();
    },
    // Mostly usable for tailable cursors.
    close: function () {
      var self = this;
      self._dbCursor.close();
    },
    fetch: function () {
      var self = this;
      return self.map(_.identity);
    },
    count: function () {
      var self = this;
      return self._synchronousCount().wait();
    },
    // This method is NOT wrapped in Cursor.
    getRawObjects: function (ordered) {
      var self = this;
      if (ordered) {
        return self.fetch();
      } else {
        var results = new LocalCollection._IdMap();
        self.forEach(function (doc) {
          results.set(doc._id, doc);
        });
        return results;
      }
    }
  });
  SynchronousCursor.prototype[Symbol.iterator] = function () {
    var self = this;

    // Get back to the beginning.
    self._rewind();
    return {
      next() {
        const doc = self._nextObject();
        return doc ? {
          value: doc
        } : {
          done: true
        };
      }
    };
  };
  SynchronousCursor.prototype[Symbol.asyncIterator] = function () {
    const syncResult = this[Symbol.iterator]();
    return {
      next() {
        return Promise.asyncApply(() => {
          return Promise.resolve(syncResult.next());
        });
      }
    };
  };

  // Tails the cursor described by cursorDescription, most likely on the
  // oplog. Calls docCallback with each document found. Ignores errors and just
  // restarts the tail on error.
  //
  // If timeoutMS is set, then if we don't get a new document every timeoutMS,
  // kill and restart the cursor. This is primarily a workaround for #8598.
  MongoConnection.prototype.tail = function (cursorDescription, docCallback, timeoutMS) {
    var self = this;
    if (!cursorDescription.options.tailable) throw new Error("Can only tail a tailable cursor");
    var cursor = self._createSynchronousCursor(cursorDescription);
    var stopped = false;
    var lastTS;
    var loop = function () {
      var doc = null;
      while (true) {
        if (stopped) return;
        try {
          doc = cursor._nextObjectPromiseWithTimeout(timeoutMS).await();
        } catch (err) {
          // There's no good way to figure out if this was actually an error from
          // Mongo, or just client-side (including our own timeout error). Ah
          // well. But either way, we need to retry the cursor (unless the failure
          // was because the observe got stopped).
          doc = null;
        }
        // Since we awaited a promise above, we need to check again to see if
        // we've been stopped before calling the callback.
        if (stopped) return;
        if (doc) {
          // If a tailable cursor contains a "ts" field, use it to recreate the
          // cursor on error. ("ts" is a standard that Mongo uses internally for
          // the oplog, and there's a special flag that lets you do binary search
          // on it instead of needing to use an index.)
          lastTS = doc.ts;
          docCallback(doc);
        } else {
          var newSelector = _.clone(cursorDescription.selector);
          if (lastTS) {
            newSelector.ts = {
              $gt: lastTS
            };
          }
          cursor = self._createSynchronousCursor(new CursorDescription(cursorDescription.collectionName, newSelector, cursorDescription.options));
          // Mongo failover takes many seconds.  Retry in a bit.  (Without this
          // setTimeout, we peg the CPU at 100% and never notice the actual
          // failover.
          Meteor.setTimeout(loop, 100);
          break;
        }
      }
    };
    Meteor.defer(loop);
    return {
      stop: function () {
        stopped = true;
        cursor.close();
      }
    };
  };
  const oplogCollectionWarnings = [];
  MongoConnection.prototype._observeChanges = function (cursorDescription, ordered, callbacks, nonMutatingCallbacks) {
    var _self$_oplogHandle;
    var self = this;
    const collectionName = cursorDescription.collectionName;
    if (cursorDescription.options.tailable) {
      return self._observeChangesTailable(cursorDescription, ordered, callbacks);
    }

    // You may not filter out _id when observing changes, because the id is a core
    // part of the observeChanges API.
    const fieldsOptions = cursorDescription.options.projection || cursorDescription.options.fields;
    if (fieldsOptions && (fieldsOptions._id === 0 || fieldsOptions._id === false)) {
      throw Error("You may not observe a cursor with {fields: {_id: 0}}");
    }
    var observeKey = EJSON.stringify(_.extend({
      ordered: ordered
    }, cursorDescription));
    var multiplexer, observeDriver;
    var firstHandle = false;

    // Find a matching ObserveMultiplexer, or create a new one. This next block is
    // guaranteed to not yield (and it doesn't call anything that can observe a
    // new query), so no other calls to this function can interleave with it.
    Meteor._noYieldsAllowed(function () {
      if (_.has(self._observeMultiplexers, observeKey)) {
        multiplexer = self._observeMultiplexers[observeKey];
      } else {
        firstHandle = true;
        // Create a new ObserveMultiplexer.
        multiplexer = new ObserveMultiplexer({
          ordered: ordered,
          onStop: function () {
            delete self._observeMultiplexers[observeKey];
            observeDriver.stop();
          }
        });
        self._observeMultiplexers[observeKey] = multiplexer;
      }
    });
    var observeHandle = new ObserveHandle(multiplexer, callbacks, nonMutatingCallbacks);
    const oplogOptions = (self === null || self === void 0 ? void 0 : (_self$_oplogHandle = self._oplogHandle) === null || _self$_oplogHandle === void 0 ? void 0 : _self$_oplogHandle._oplogOptions) || {};
    const {
      includeCollections,
      excludeCollections
    } = oplogOptions;
    if (firstHandle) {
      var matcher, sorter;
      var canUseOplog = _.all([function () {
        // At a bare minimum, using the oplog requires us to have an oplog, to
        // want unordered callbacks, and to not want a callback on the polls
        // that won't happen.
        return self._oplogHandle && !ordered && !callbacks._testOnlyPollCallback;
      }, function () {
        // We also need to check, if the collection of this Cursor is actually being "watched" by the Oplog handle
        // if not, we have to fallback to long polling
        if (excludeCollections !== null && excludeCollections !== void 0 && excludeCollections.length && excludeCollections.includes(collectionName)) {
          if (!oplogCollectionWarnings.includes(collectionName)) {
            console.warn("Meteor.settings.packages.mongo.oplogExcludeCollections includes the collection ".concat(collectionName, " - your subscriptions will only use long polling!"));
            oplogCollectionWarnings.push(collectionName); // we only want to show the warnings once per collection!
          }
          return false;
        }
        if (includeCollections !== null && includeCollections !== void 0 && includeCollections.length && !includeCollections.includes(collectionName)) {
          if (!oplogCollectionWarnings.includes(collectionName)) {
            console.warn("Meteor.settings.packages.mongo.oplogIncludeCollections does not include the collection ".concat(collectionName, " - your subscriptions will only use long polling!"));
            oplogCollectionWarnings.push(collectionName); // we only want to show the warnings once per collection!
          }
          return false;
        }
        return true;
      }, function () {
        // We need to be able to compile the selector. Fall back to polling for
        // some newfangled $selector that minimongo doesn't support yet.
        try {
          matcher = new Minimongo.Matcher(cursorDescription.selector);
          return true;
        } catch (e) {
          // XXX make all compilation errors MinimongoError or something
          //     so that this doesn't ignore unrelated exceptions
          return false;
        }
      }, function () {
        // ... and the selector itself needs to support oplog.
        return OplogObserveDriver.cursorSupported(cursorDescription, matcher);
      }, function () {
        // And we need to be able to compile the sort, if any.  eg, can't be
        // {$natural: 1}.
        if (!cursorDescription.options.sort) return true;
        try {
          sorter = new Minimongo.Sorter(cursorDescription.options.sort);
          return true;
        } catch (e) {
          // XXX make all compilation errors MinimongoError or something
          //     so that this doesn't ignore unrelated exceptions
          return false;
        }
      }], function (f) {
        return f();
      }); // invoke each function

      var driverClass = canUseOplog ? OplogObserveDriver : PollingObserveDriver;
      observeDriver = new driverClass({
        cursorDescription: cursorDescription,
        mongoHandle: self,
        multiplexer: multiplexer,
        ordered: ordered,
        matcher: matcher,
        // ignored by polling
        sorter: sorter,
        // ignored by polling
        _testOnlyPollCallback: callbacks._testOnlyPollCallback
      });

      // This field is only set for use in tests.
      multiplexer._observeDriver = observeDriver;
    }

    // Blocks until the initial adds have been sent.
    multiplexer.addHandleAndSendInitialAdds(observeHandle);
    return observeHandle;
  };

  // Listen for the invalidation messages that will trigger us to poll the
  // database for changes. If this selector specifies specific IDs, specify them
  // here, so that updates to different specific IDs don't cause us to poll.
  // listenCallback is the same kind of (notification, complete) callback passed
  // to InvalidationCrossbar.listen.

  listenAll = function (cursorDescription, listenCallback) {
    var listeners = [];
    forEachTrigger(cursorDescription, function (trigger) {
      listeners.push(DDPServer._InvalidationCrossbar.listen(trigger, listenCallback));
    });
    return {
      stop: function () {
        _.each(listeners, function (listener) {
          listener.stop();
        });
      }
    };
  };
  forEachTrigger = function (cursorDescription, triggerCallback) {
    var key = {
      collection: cursorDescription.collectionName
    };
    var specificIds = LocalCollection._idsMatchedBySelector(cursorDescription.selector);
    if (specificIds) {
      _.each(specificIds, function (id) {
        triggerCallback(_.extend({
          id: id
        }, key));
      });
      triggerCallback(_.extend({
        dropCollection: true,
        id: null
      }, key));
    } else {
      triggerCallback(key);
    }
    // Everyone cares about the database being dropped.
    triggerCallback({
      dropDatabase: true
    });
  };

  // observeChanges for tailable cursors on capped collections.
  //
  // Some differences from normal cursors:
  //   - Will never produce anything other than 'added' or 'addedBefore'. If you
  //     do update a document that has already been produced, this will not notice
  //     it.
  //   - If you disconnect and reconnect from Mongo, it will essentially restart
  //     the query, which will lead to duplicate results. This is pretty bad,
  //     but if you include a field called 'ts' which is inserted as
  //     new MongoInternals.MongoTimestamp(0, 0) (which is initialized to the
  //     current Mongo-style timestamp), we'll be able to find the place to
  //     restart properly. (This field is specifically understood by Mongo with an
  //     optimization which allows it to find the right place to start without
  //     an index on ts. It's how the oplog works.)
  //   - No callbacks are triggered synchronously with the call (there's no
  //     differentiation between "initial data" and "later changes"; everything
  //     that matches the query gets sent asynchronously).
  //   - De-duplication is not implemented.
  //   - Does not yet interact with the write fence. Probably, this should work by
  //     ignoring removes (which don't work on capped collections) and updates
  //     (which don't affect tailable cursors), and just keeping track of the ID
  //     of the inserted object, and closing the write fence once you get to that
  //     ID (or timestamp?).  This doesn't work well if the document doesn't match
  //     the query, though.  On the other hand, the write fence can close
  //     immediately if it does not match the query. So if we trust minimongo
  //     enough to accurately evaluate the query against the write fence, we
  //     should be able to do this...  Of course, minimongo doesn't even support
  //     Mongo Timestamps yet.
  MongoConnection.prototype._observeChangesTailable = function (cursorDescription, ordered, callbacks) {
    var self = this;

    // Tailable cursors only ever call added/addedBefore callbacks, so it's an
    // error if you didn't provide them.
    if (ordered && !callbacks.addedBefore || !ordered && !callbacks.added) {
      throw new Error("Can't observe an " + (ordered ? "ordered" : "unordered") + " tailable cursor without a " + (ordered ? "addedBefore" : "added") + " callback");
    }
    return self.tail(cursorDescription, function (doc) {
      var id = doc._id;
      delete doc._id;
      // The ts is an implementation detail. Hide it.
      delete doc.ts;
      if (ordered) {
        callbacks.addedBefore(id, doc, null);
      } else {
        callbacks.added(id, doc);
      }
    });
  };

  // XXX We probably need to find a better way to expose this. Right now
  // it's only used by tests, but in fact you need it in normal
  // operation to interact with capped collections.
  MongoInternals.MongoTimestamp = MongoDB.Timestamp;
  MongoInternals.Connection = MongoConnection;
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oplog_tailing.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/oplog_tailing.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let NpmModuleMongodb;
module.link("meteor/npm-mongo", {
  NpmModuleMongodb(v) {
    NpmModuleMongodb = v;
  }
}, 0);
var Future = Npm.require('fibers/future');
const {
  Long
} = NpmModuleMongodb;
OPLOG_COLLECTION = 'oplog.rs';
var TOO_FAR_BEHIND = process.env.METEOR_OPLOG_TOO_FAR_BEHIND || 2000;
var TAIL_TIMEOUT = +process.env.METEOR_OPLOG_TAIL_TIMEOUT || 30000;
var showTS = function (ts) {
  return "Timestamp(" + ts.getHighBits() + ", " + ts.getLowBits() + ")";
};
idForOp = function (op) {
  if (op.op === 'd') return op.o._id;else if (op.op === 'i') return op.o._id;else if (op.op === 'u') return op.o2._id;else if (op.op === 'c') throw Error("Operator 'c' doesn't supply an object with id: " + EJSON.stringify(op));else throw Error("Unknown op: " + EJSON.stringify(op));
};
OplogHandle = function (oplogUrl, dbName) {
  var self = this;
  self._oplogUrl = oplogUrl;
  self._dbName = dbName;
  self._oplogLastEntryConnection = null;
  self._oplogTailConnection = null;
  self._oplogOptions = null;
  self._stopped = false;
  self._tailHandle = null;
  self._readyFuture = new Future();
  self._crossbar = new DDPServer._Crossbar({
    factPackage: "mongo-livedata",
    factName: "oplog-watchers"
  });
  self._baseOplogSelector = {
    ns: new RegExp("^(?:" + [Meteor._escapeRegExp(self._dbName + "."), Meteor._escapeRegExp("admin.$cmd")].join("|") + ")"),
    $or: [{
      op: {
        $in: ['i', 'u', 'd']
      }
    },
    // drop collection
    {
      op: 'c',
      'o.drop': {
        $exists: true
      }
    }, {
      op: 'c',
      'o.dropDatabase': 1
    }, {
      op: 'c',
      'o.applyOps': {
        $exists: true
      }
    }]
  };

  // Data structures to support waitUntilCaughtUp(). Each oplog entry has a
  // MongoTimestamp object on it (which is not the same as a Date --- it's a
  // combination of time and an incrementing counter; see
  // http://docs.mongodb.org/manual/reference/bson-types/#timestamps).
  //
  // _catchingUpFutures is an array of {ts: MongoTimestamp, future: Future}
  // objects, sorted by ascending timestamp. _lastProcessedTS is the
  // MongoTimestamp of the last oplog entry we've processed.
  //
  // Each time we call waitUntilCaughtUp, we take a peek at the final oplog
  // entry in the db.  If we've already processed it (ie, it is not greater than
  // _lastProcessedTS), waitUntilCaughtUp immediately returns. Otherwise,
  // waitUntilCaughtUp makes a new Future and inserts it along with the final
  // timestamp entry that it read, into _catchingUpFutures. waitUntilCaughtUp
  // then waits on that future, which is resolved once _lastProcessedTS is
  // incremented to be past its timestamp by the worker fiber.
  //
  // XXX use a priority queue or something else that's faster than an array
  self._catchingUpFutures = [];
  self._lastProcessedTS = null;
  self._onSkippedEntriesHook = new Hook({
    debugPrintExceptions: "onSkippedEntries callback"
  });
  self._entryQueue = new Meteor._DoubleEndedQueue();
  self._workerActive = false;
  self._startTailing();
};
MongoInternals.OplogHandle = OplogHandle;
Object.assign(OplogHandle.prototype, {
  stop: function () {
    var self = this;
    if (self._stopped) return;
    self._stopped = true;
    if (self._tailHandle) self._tailHandle.stop();
    // XXX should close connections too
  },
  onOplogEntry: function (trigger, callback) {
    var self = this;
    if (self._stopped) throw new Error("Called onOplogEntry on stopped handle!");

    // Calling onOplogEntry requires us to wait for the tailing to be ready.
    self._readyFuture.wait();
    var originalCallback = callback;
    callback = Meteor.bindEnvironment(function (notification) {
      originalCallback(notification);
    }, function (err) {
      Meteor._debug("Error in oplog callback", err);
    });
    var listenHandle = self._crossbar.listen(trigger, callback);
    return {
      stop: function () {
        listenHandle.stop();
      }
    };
  },
  // Register a callback to be invoked any time we skip oplog entries (eg,
  // because we are too far behind).
  onSkippedEntries: function (callback) {
    var self = this;
    if (self._stopped) throw new Error("Called onSkippedEntries on stopped handle!");
    return self._onSkippedEntriesHook.register(callback);
  },
  // Calls `callback` once the oplog has been processed up to a point that is
  // roughly "now": specifically, once we've processed all ops that are
  // currently visible.
  // XXX become convinced that this is actually safe even if oplogConnection
  // is some kind of pool
  waitUntilCaughtUp: function () {
    var self = this;
    if (self._stopped) throw new Error("Called waitUntilCaughtUp on stopped handle!");

    // Calling waitUntilCaughtUp requries us to wait for the oplog connection to
    // be ready.
    self._readyFuture.wait();
    var lastEntry;
    while (!self._stopped) {
      // We need to make the selector at least as restrictive as the actual
      // tailing selector (ie, we need to specify the DB name) or else we might
      // find a TS that won't show up in the actual tail stream.
      try {
        lastEntry = self._oplogLastEntryConnection.findOne(OPLOG_COLLECTION, self._baseOplogSelector, {
          projection: {
            ts: 1
          },
          sort: {
            $natural: -1
          }
        });
        break;
      } catch (e) {
        // During failover (eg) if we get an exception we should log and retry
        // instead of crashing.
        Meteor._debug("Got exception while reading last entry", e);
        Meteor._sleepForMs(100);
      }
    }
    if (self._stopped) return;
    if (!lastEntry) {
      // Really, nothing in the oplog? Well, we've processed everything.
      return;
    }
    var ts = lastEntry.ts;
    if (!ts) throw Error("oplog entry without ts: " + EJSON.stringify(lastEntry));
    if (self._lastProcessedTS && ts.lessThanOrEqual(self._lastProcessedTS)) {
      // We've already caught up to here.
      return;
    }

    // Insert the future into our list. Almost always, this will be at the end,
    // but it's conceivable that if we fail over from one primary to another,
    // the oplog entries we see will go backwards.
    var insertAfter = self._catchingUpFutures.length;
    while (insertAfter - 1 > 0 && self._catchingUpFutures[insertAfter - 1].ts.greaterThan(ts)) {
      insertAfter--;
    }
    var f = new Future();
    self._catchingUpFutures.splice(insertAfter, 0, {
      ts: ts,
      future: f
    });
    f.wait();
  },
  _startTailing: function () {
    var _Meteor$settings, _Meteor$settings$pack, _Meteor$settings$pack2, _Meteor$settings2, _Meteor$settings2$pac, _Meteor$settings2$pac2;
    var self = this;
    // First, make sure that we're talking to the local database.
    var mongodbUri = Npm.require('mongodb-uri');
    if (mongodbUri.parse(self._oplogUrl).database !== 'local') {
      throw Error("$MONGO_OPLOG_URL must be set to the 'local' database of " + "a Mongo replica set");
    }

    // We make two separate connections to Mongo. The Node Mongo driver
    // implements a naive round-robin connection pool: each "connection" is a
    // pool of several (5 by default) TCP connections, and each request is
    // rotated through the pools. Tailable cursor queries block on the server
    // until there is some data to return (or until a few seconds have
    // passed). So if the connection pool used for tailing cursors is the same
    // pool used for other queries, the other queries will be delayed by seconds
    // 1/5 of the time.
    //
    // The tail connection will only ever be running a single tail command, so
    // it only needs to make one underlying TCP connection.
    self._oplogTailConnection = new MongoConnection(self._oplogUrl, {
      maxPoolSize: 1,
      minPoolSize: 1
    });
    // XXX better docs, but: it's to get monotonic results
    // XXX is it safe to say "if there's an in flight query, just use its
    //     results"? I don't think so but should consider that
    self._oplogLastEntryConnection = new MongoConnection(self._oplogUrl, {
      maxPoolSize: 1,
      minPoolSize: 1
    });

    // Now, make sure that there actually is a repl set here. If not, oplog
    // tailing won't ever find anything!
    // More on the isMasterDoc
    // https://docs.mongodb.com/manual/reference/command/isMaster/
    var f = new Future();
    self._oplogLastEntryConnection.db.admin().command({
      ismaster: 1
    }, f.resolver());
    var isMasterDoc = f.wait();
    if (!(isMasterDoc && isMasterDoc.setName)) {
      throw Error("$MONGO_OPLOG_URL must be set to the 'local' database of " + "a Mongo replica set");
    }

    // Find the last oplog entry.
    var lastOplogEntry = self._oplogLastEntryConnection.findOne(OPLOG_COLLECTION, {}, {
      sort: {
        $natural: -1
      },
      projection: {
        ts: 1
      }
    });
    var oplogSelector = _.clone(self._baseOplogSelector);
    if (lastOplogEntry) {
      // Start after the last entry that currently exists.
      oplogSelector.ts = {
        $gt: lastOplogEntry.ts
      };
      // If there are any calls to callWhenProcessedLatest before any other
      // oplog entries show up, allow callWhenProcessedLatest to call its
      // callback immediately.
      self._lastProcessedTS = lastOplogEntry.ts;
    }

    // These 2 settings allow you to either only watch certain collections (oplogIncludeCollections), or exclude some collections you don't want to watch for oplog updates (oplogExcludeCollections)
    // Usage:
    // settings.json = {
    //   "packages": {
    //     "mongo": {
    //       "oplogExcludeCollections": ["products", "prices"] // This would exclude both collections "products" and "prices" from any oplog tailing. 
    //                                                            Beware! This means, that no subscriptions on these 2 collections will update anymore!
    //     }
    //   }
    // }
    const includeCollections = (_Meteor$settings = Meteor.settings) === null || _Meteor$settings === void 0 ? void 0 : (_Meteor$settings$pack = _Meteor$settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : (_Meteor$settings$pack2 = _Meteor$settings$pack.mongo) === null || _Meteor$settings$pack2 === void 0 ? void 0 : _Meteor$settings$pack2.oplogIncludeCollections;
    const excludeCollections = (_Meteor$settings2 = Meteor.settings) === null || _Meteor$settings2 === void 0 ? void 0 : (_Meteor$settings2$pac = _Meteor$settings2.packages) === null || _Meteor$settings2$pac === void 0 ? void 0 : (_Meteor$settings2$pac2 = _Meteor$settings2$pac.mongo) === null || _Meteor$settings2$pac2 === void 0 ? void 0 : _Meteor$settings2$pac2.oplogExcludeCollections;
    if (includeCollections !== null && includeCollections !== void 0 && includeCollections.length && excludeCollections !== null && excludeCollections !== void 0 && excludeCollections.length) {
      throw new Error("Can't use both mongo oplog settings oplogIncludeCollections and oplogExcludeCollections at the same time.");
    }
    if (excludeCollections !== null && excludeCollections !== void 0 && excludeCollections.length) {
      oplogSelector.ns = {
        $regex: oplogSelector.ns,
        $nin: excludeCollections.map(collName => "".concat(self._dbName, ".").concat(collName))
      };
      self._oplogOptions = {
        excludeCollections
      };
    } else if (includeCollections !== null && includeCollections !== void 0 && includeCollections.length) {
      oplogSelector = {
        $and: [{
          $or: [{
            ns: /^admin\.\$cmd/
          }, {
            ns: {
              $in: includeCollections.map(collName => "".concat(self._dbName, ".").concat(collName))
            }
          }]
        }, {
          $or: oplogSelector.$or
        },
        // the initial $or to select only certain operations (op)
        {
          ts: oplogSelector.ts
        }]
      };
      self._oplogOptions = {
        includeCollections
      };
    }
    var cursorDescription = new CursorDescription(OPLOG_COLLECTION, oplogSelector, {
      tailable: true
    });

    // Start tailing the oplog.
    //
    // We restart the low-level oplog query every 30 seconds if we didn't get a
    // doc. This is a workaround for #8598: the Node Mongo driver has at least
    // one bug that can lead to query callbacks never getting called (even with
    // an error) when leadership failover occur.
    self._tailHandle = self._oplogTailConnection.tail(cursorDescription, function (doc) {
      self._entryQueue.push(doc);
      self._maybeStartWorker();
    }, TAIL_TIMEOUT);
    self._readyFuture.return();
  },
  _maybeStartWorker: function () {
    var self = this;
    if (self._workerActive) return;
    self._workerActive = true;
    Meteor.defer(function () {
      // May be called recursively in case of transactions.
      function handleDoc(doc) {
        if (doc.ns === "admin.$cmd") {
          if (doc.o.applyOps) {
            // This was a successful transaction, so we need to apply the
            // operations that were involved.
            let nextTimestamp = doc.ts;
            doc.o.applyOps.forEach(op => {
              // See https://github.com/meteor/meteor/issues/10420.
              if (!op.ts) {
                op.ts = nextTimestamp;
                nextTimestamp = nextTimestamp.add(Long.ONE);
              }
              handleDoc(op);
            });
            return;
          }
          throw new Error("Unknown command " + EJSON.stringify(doc));
        }
        const trigger = {
          dropCollection: false,
          dropDatabase: false,
          op: doc
        };
        if (typeof doc.ns === "string" && doc.ns.startsWith(self._dbName + ".")) {
          trigger.collection = doc.ns.slice(self._dbName.length + 1);
        }

        // Is it a special command and the collection name is hidden
        // somewhere in operator?
        if (trigger.collection === "$cmd") {
          if (doc.o.dropDatabase) {
            delete trigger.collection;
            trigger.dropDatabase = true;
          } else if (_.has(doc.o, "drop")) {
            trigger.collection = doc.o.drop;
            trigger.dropCollection = true;
            trigger.id = null;
          } else if ("create" in doc.o && "idIndex" in doc.o) {
            // A collection got implicitly created within a transaction. There's
            // no need to do anything about it.
          } else {
            throw Error("Unknown command " + EJSON.stringify(doc));
          }
        } else {
          // All other ops have an id.
          trigger.id = idForOp(doc);
        }
        self._crossbar.fire(trigger);
      }
      try {
        while (!self._stopped && !self._entryQueue.isEmpty()) {
          // Are we too far behind? Just tell our observers that they need to
          // repoll, and drop our queue.
          if (self._entryQueue.length > TOO_FAR_BEHIND) {
            var lastEntry = self._entryQueue.pop();
            self._entryQueue.clear();
            self._onSkippedEntriesHook.each(function (callback) {
              callback();
              return true;
            });

            // Free any waitUntilCaughtUp() calls that were waiting for us to
            // pass something that we just skipped.
            self._setLastProcessedTS(lastEntry.ts);
            continue;
          }
          const doc = self._entryQueue.shift();

          // Fire trigger(s) for this doc.
          handleDoc(doc);

          // Now that we've processed this operation, process pending
          // sequencers.
          if (doc.ts) {
            self._setLastProcessedTS(doc.ts);
          } else {
            throw Error("oplog entry without ts: " + EJSON.stringify(doc));
          }
        }
      } finally {
        self._workerActive = false;
      }
    });
  },
  _setLastProcessedTS: function (ts) {
    var self = this;
    self._lastProcessedTS = ts;
    while (!_.isEmpty(self._catchingUpFutures) && self._catchingUpFutures[0].ts.lessThanOrEqual(self._lastProcessedTS)) {
      var sequencer = self._catchingUpFutures.shift();
      sequencer.future.return();
    }
  },
  //Methods used on tests to dinamically change TOO_FAR_BEHIND
  _defineTooFarBehind: function (value) {
    TOO_FAR_BEHIND = value;
  },
  _resetTooFarBehind: function () {
    TOO_FAR_BEHIND = process.env.METEOR_OPLOG_TOO_FAR_BEHIND || 2000;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"observe_multiplex.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/observe_multiplex.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];
let _objectWithoutProperties;
module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Future = Npm.require('fibers/future');
ObserveMultiplexer = function (options) {
  var self = this;
  if (!options || !_.has(options, 'ordered')) throw Error("must specified ordered");
  Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-multiplexers", 1);
  self._ordered = options.ordered;
  self._onStop = options.onStop || function () {};
  self._queue = new Meteor._SynchronousQueue();
  self._handles = {};
  self._readyFuture = new Future();
  self._cache = new LocalCollection._CachingChangeObserver({
    ordered: options.ordered
  });
  // Number of addHandleAndSendInitialAdds tasks scheduled but not yet
  // running. removeHandle uses this to know if it's time to call the onStop
  // callback.
  self._addHandleTasksScheduledButNotPerformed = 0;
  _.each(self.callbackNames(), function (callbackName) {
    self[callbackName] = function /* ... */
    () {
      self._applyCallback(callbackName, _.toArray(arguments));
    };
  });
};
_.extend(ObserveMultiplexer.prototype, {
  addHandleAndSendInitialAdds: function (handle) {
    var self = this;

    // Check this before calling runTask (even though runTask does the same
    // check) so that we don't leak an ObserveMultiplexer on error by
    // incrementing _addHandleTasksScheduledButNotPerformed and never
    // decrementing it.
    if (!self._queue.safeToRunTask()) throw new Error("Can't call observeChanges from an observe callback on the same query");
    ++self._addHandleTasksScheduledButNotPerformed;
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-handles", 1);
    self._queue.runTask(function () {
      self._handles[handle._id] = handle;
      // Send out whatever adds we have so far (whether or not we the
      // multiplexer is ready).
      self._sendAdds(handle);
      --self._addHandleTasksScheduledButNotPerformed;
    });
    // *outside* the task, since otherwise we'd deadlock
    self._readyFuture.wait();
  },
  // Remove an observe handle. If it was the last observe handle, call the
  // onStop callback; you cannot add any more observe handles after this.
  //
  // This is not synchronized with polls and handle additions: this means that
  // you can safely call it from within an observe callback, but it also means
  // that we have to be careful when we iterate over _handles.
  removeHandle: function (id) {
    var self = this;

    // This should not be possible: you can only call removeHandle by having
    // access to the ObserveHandle, which isn't returned to user code until the
    // multiplex is ready.
    if (!self._ready()) throw new Error("Can't remove handles until the multiplex is ready");
    delete self._handles[id];
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-handles", -1);
    if (_.isEmpty(self._handles) && self._addHandleTasksScheduledButNotPerformed === 0) {
      self._stop();
    }
  },
  _stop: function (options) {
    var self = this;
    options = options || {};

    // It shouldn't be possible for us to stop when all our handles still
    // haven't been returned from observeChanges!
    if (!self._ready() && !options.fromQueryError) throw Error("surprising _stop: not ready");

    // Call stop callback (which kills the underlying process which sends us
    // callbacks and removes us from the connection's dictionary).
    self._onStop();
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-multiplexers", -1);

    // Cause future addHandleAndSendInitialAdds calls to throw (but the onStop
    // callback should make our connection forget about us).
    self._handles = null;
  },
  // Allows all addHandleAndSendInitialAdds calls to return, once all preceding
  // adds have been processed. Does not block.
  ready: function () {
    var self = this;
    self._queue.queueTask(function () {
      if (self._ready()) throw Error("can't make ObserveMultiplex ready twice!");
      self._readyFuture.return();
    });
  },
  // If trying to execute the query results in an error, call this. This is
  // intended for permanent errors, not transient network errors that could be
  // fixed. It should only be called before ready(), because if you called ready
  // that meant that you managed to run the query once. It will stop this
  // ObserveMultiplex and cause addHandleAndSendInitialAdds calls (and thus
  // observeChanges calls) to throw the error.
  queryError: function (err) {
    var self = this;
    self._queue.runTask(function () {
      if (self._ready()) throw Error("can't claim query has an error after it worked!");
      self._stop({
        fromQueryError: true
      });
      self._readyFuture.throw(err);
    });
  },
  // Calls "cb" once the effects of all "ready", "addHandleAndSendInitialAdds"
  // and observe callbacks which came before this call have been propagated to
  // all handles. "ready" must have already been called on this multiplexer.
  onFlush: function (cb) {
    var self = this;
    self._queue.queueTask(function () {
      if (!self._ready()) throw Error("only call onFlush on a multiplexer that will be ready");
      cb();
    });
  },
  callbackNames: function () {
    var self = this;
    if (self._ordered) return ["addedBefore", "changed", "movedBefore", "removed"];else return ["added", "changed", "removed"];
  },
  _ready: function () {
    return this._readyFuture.isResolved();
  },
  _applyCallback: function (callbackName, args) {
    var self = this;
    self._queue.queueTask(function () {
      // If we stopped in the meantime, do nothing.
      if (!self._handles) return;

      // First, apply the change to the cache.
      self._cache.applyChange[callbackName].apply(null, args);

      // If we haven't finished the initial adds, then we should only be getting
      // adds.
      if (!self._ready() && callbackName !== 'added' && callbackName !== 'addedBefore') {
        throw new Error("Got " + callbackName + " during initial adds");
      }

      // Now multiplex the callbacks out to all observe handles. It's OK if
      // these calls yield; since we're inside a task, no other use of our queue
      // can continue until these are done. (But we do have to be careful to not
      // use a handle that got removed, because removeHandle does not use the
      // queue; thus, we iterate over an array of keys that we control.)
      _.each(_.keys(self._handles), function (handleId) {
        var handle = self._handles && self._handles[handleId];
        if (!handle) return;
        var callback = handle['_' + callbackName];
        // clone arguments so that callbacks can mutate their arguments
        callback && callback.apply(null, handle.nonMutatingCallbacks ? args : EJSON.clone(args));
      });
    });
  },
  // Sends initial adds to a handle. It should only be called from within a task
  // (the task that is processing the addHandleAndSendInitialAdds call). It
  // synchronously invokes the handle's added or addedBefore; there's no need to
  // flush the queue afterwards to ensure that the callbacks get out.
  _sendAdds: function (handle) {
    var self = this;
    if (self._queue.safeToRunTask()) throw Error("_sendAdds may only be called from within a task!");
    var add = self._ordered ? handle._addedBefore : handle._added;
    if (!add) return;
    // note: docs may be an _IdMap or an OrderedDict
    self._cache.docs.forEach(function (doc, id) {
      if (!_.has(self._handles, handle._id)) throw Error("handle got removed before sending initial adds!");
      const _ref = handle.nonMutatingCallbacks ? doc : EJSON.clone(doc),
        {
          _id
        } = _ref,
        fields = _objectWithoutProperties(_ref, _excluded);
      if (self._ordered) add(id, fields, null); // we're going in order, so add at end
      else add(id, fields);
    });
  }
});
var nextObserveHandleId = 1;

// When the callbacks do not mutate the arguments, we can skip a lot of data clones
ObserveHandle = function (multiplexer, callbacks) {
  let nonMutatingCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var self = this;
  // The end user is only supposed to call stop().  The other fields are
  // accessible to the multiplexer, though.
  self._multiplexer = multiplexer;
  _.each(multiplexer.callbackNames(), function (name) {
    if (callbacks[name]) {
      self['_' + name] = callbacks[name];
    } else if (name === "addedBefore" && callbacks.added) {
      // Special case: if you specify "added" and "movedBefore", you get an
      // ordered observe where for some reason you don't get ordering data on
      // the adds.  I dunno, we wrote tests for it, there must have been a
      // reason.
      self._addedBefore = function (id, fields, before) {
        callbacks.added(id, fields);
      };
    }
  });
  self._stopped = false;
  self._id = nextObserveHandleId++;
  self.nonMutatingCallbacks = nonMutatingCallbacks;
};
ObserveHandle.prototype.stop = function () {
  var self = this;
  if (self._stopped) return;
  self._stopped = true;
  self._multiplexer.removeHandle(self._id);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"doc_fetcher.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/doc_fetcher.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DocFetcher: () => DocFetcher
});
var Fiber = Npm.require('fibers');
class DocFetcher {
  constructor(mongoConnection) {
    this._mongoConnection = mongoConnection;
    // Map from op -> [callback]
    this._callbacksForOp = new Map();
  }

  // Fetches document "id" from collectionName, returning it or null if not
  // found.
  //
  // If you make multiple calls to fetch() with the same op reference,
  // DocFetcher may assume that they all return the same document. (It does
  // not check to see if collectionName/id match.)
  //
  // You may assume that callback is never called synchronously (and in fact
  // OplogObserveDriver does so).
  fetch(collectionName, id, op, callback) {
    const self = this;
    check(collectionName, String);
    check(op, Object);

    // If there's already an in-progress fetch for this cache key, yield until
    // it's done and return whatever it returns.
    if (self._callbacksForOp.has(op)) {
      self._callbacksForOp.get(op).push(callback);
      return;
    }
    const callbacks = [callback];
    self._callbacksForOp.set(op, callbacks);
    Fiber(function () {
      try {
        var doc = self._mongoConnection.findOne(collectionName, {
          _id: id
        }) || null;
        // Return doc to all relevant callbacks. Note that this array can
        // continue to grow during callback excecution.
        while (callbacks.length > 0) {
          // Clone the document so that the various calls to fetch don't return
          // objects that are intertwingled with each other. Clone before
          // popping the future, so that if clone throws, the error gets passed
          // to the next callback.
          callbacks.pop()(null, EJSON.clone(doc));
        }
      } catch (e) {
        while (callbacks.length > 0) {
          callbacks.pop()(e);
        }
      } finally {
        // XXX consider keeping the doc around for a period of time before
        // removing from the cache
        self._callbacksForOp.delete(op);
      }
    }).run();
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"polling_observe_driver.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/polling_observe_driver.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var POLLING_THROTTLE_MS = +process.env.METEOR_POLLING_THROTTLE_MS || 50;
var POLLING_INTERVAL_MS = +process.env.METEOR_POLLING_INTERVAL_MS || 10 * 1000;
PollingObserveDriver = function (options) {
  var self = this;
  self._cursorDescription = options.cursorDescription;
  self._mongoHandle = options.mongoHandle;
  self._ordered = options.ordered;
  self._multiplexer = options.multiplexer;
  self._stopCallbacks = [];
  self._stopped = false;
  self._synchronousCursor = self._mongoHandle._createSynchronousCursor(self._cursorDescription);

  // previous results snapshot.  on each poll cycle, diffs against
  // results drives the callbacks.
  self._results = null;

  // The number of _pollMongo calls that have been added to self._taskQueue but
  // have not started running. Used to make sure we never schedule more than one
  // _pollMongo (other than possibly the one that is currently running). It's
  // also used by _suspendPolling to pretend there's a poll scheduled. Usually,
  // it's either 0 (for "no polls scheduled other than maybe one currently
  // running") or 1 (for "a poll scheduled that isn't running yet"), but it can
  // also be 2 if incremented by _suspendPolling.
  self._pollsScheduledButNotStarted = 0;
  self._pendingWrites = []; // people to notify when polling completes

  // Make sure to create a separately throttled function for each
  // PollingObserveDriver object.
  self._ensurePollIsScheduled = _.throttle(self._unthrottledEnsurePollIsScheduled, self._cursorDescription.options.pollingThrottleMs || POLLING_THROTTLE_MS /* ms */);

  // XXX figure out if we still need a queue
  self._taskQueue = new Meteor._SynchronousQueue();
  var listenersHandle = listenAll(self._cursorDescription, function (notification) {
    // When someone does a transaction that might affect us, schedule a poll
    // of the database. If that transaction happens inside of a write fence,
    // block the fence until we've polled and notified observers.
    var fence = DDPServer._CurrentWriteFence.get();
    if (fence) self._pendingWrites.push(fence.beginWrite());
    // Ensure a poll is scheduled... but if we already know that one is,
    // don't hit the throttled _ensurePollIsScheduled function (which might
    // lead to us calling it unnecessarily in <pollingThrottleMs> ms).
    if (self._pollsScheduledButNotStarted === 0) self._ensurePollIsScheduled();
  });
  self._stopCallbacks.push(function () {
    listenersHandle.stop();
  });

  // every once and a while, poll even if we don't think we're dirty, for
  // eventual consistency with database writes from outside the Meteor
  // universe.
  //
  // For testing, there's an undocumented callback argument to observeChanges
  // which disables time-based polling and gets called at the beginning of each
  // poll.
  if (options._testOnlyPollCallback) {
    self._testOnlyPollCallback = options._testOnlyPollCallback;
  } else {
    var pollingInterval = self._cursorDescription.options.pollingIntervalMs || self._cursorDescription.options._pollingInterval ||
    // COMPAT with 1.2
    POLLING_INTERVAL_MS;
    var intervalHandle = Meteor.setInterval(_.bind(self._ensurePollIsScheduled, self), pollingInterval);
    self._stopCallbacks.push(function () {
      Meteor.clearInterval(intervalHandle);
    });
  }

  // Make sure we actually poll soon!
  self._unthrottledEnsurePollIsScheduled();
  Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-drivers-polling", 1);
};
_.extend(PollingObserveDriver.prototype, {
  // This is always called through _.throttle (except once at startup).
  _unthrottledEnsurePollIsScheduled: function () {
    var self = this;
    if (self._pollsScheduledButNotStarted > 0) return;
    ++self._pollsScheduledButNotStarted;
    self._taskQueue.queueTask(function () {
      self._pollMongo();
    });
  },
  // test-only interface for controlling polling.
  //
  // _suspendPolling blocks until any currently running and scheduled polls are
  // done, and prevents any further polls from being scheduled. (new
  // ObserveHandles can be added and receive their initial added callbacks,
  // though.)
  //
  // _resumePolling immediately polls, and allows further polls to occur.
  _suspendPolling: function () {
    var self = this;
    // Pretend that there's another poll scheduled (which will prevent
    // _ensurePollIsScheduled from queueing any more polls).
    ++self._pollsScheduledButNotStarted;
    // Now block until all currently running or scheduled polls are done.
    self._taskQueue.runTask(function () {});

    // Confirm that there is only one "poll" (the fake one we're pretending to
    // have) scheduled.
    if (self._pollsScheduledButNotStarted !== 1) throw new Error("_pollsScheduledButNotStarted is " + self._pollsScheduledButNotStarted);
  },
  _resumePolling: function () {
    var self = this;
    // We should be in the same state as in the end of _suspendPolling.
    if (self._pollsScheduledButNotStarted !== 1) throw new Error("_pollsScheduledButNotStarted is " + self._pollsScheduledButNotStarted);
    // Run a poll synchronously (which will counteract the
    // ++_pollsScheduledButNotStarted from _suspendPolling).
    self._taskQueue.runTask(function () {
      self._pollMongo();
    });
  },
  _pollMongo: function () {
    var self = this;
    --self._pollsScheduledButNotStarted;
    if (self._stopped) return;
    var first = false;
    var newResults;
    var oldResults = self._results;
    if (!oldResults) {
      first = true;
      // XXX maybe use OrderedDict instead?
      oldResults = self._ordered ? [] : new LocalCollection._IdMap();
    }
    self._testOnlyPollCallback && self._testOnlyPollCallback();

    // Save the list of pending writes which this round will commit.
    var writesForCycle = self._pendingWrites;
    self._pendingWrites = [];

    // Get the new query results. (This yields.)
    try {
      newResults = self._synchronousCursor.getRawObjects(self._ordered);
    } catch (e) {
      if (first && typeof e.code === 'number') {
        // This is an error document sent to us by mongod, not a connection
        // error generated by the client. And we've never seen this query work
        // successfully. Probably it's a bad selector or something, so we should
        // NOT retry. Instead, we should halt the observe (which ends up calling
        // `stop` on us).
        self._multiplexer.queryError(new Error("Exception while polling query " + JSON.stringify(self._cursorDescription) + ": " + e.message));
        return;
      }

      // getRawObjects can throw if we're having trouble talking to the
      // database.  That's fine --- we will repoll later anyway. But we should
      // make sure not to lose track of this cycle's writes.
      // (It also can throw if there's just something invalid about this query;
      // unfortunately the ObserveDriver API doesn't provide a good way to
      // "cancel" the observe from the inside in this case.
      Array.prototype.push.apply(self._pendingWrites, writesForCycle);
      Meteor._debug("Exception while polling query " + JSON.stringify(self._cursorDescription), e);
      return;
    }

    // Run diffs.
    if (!self._stopped) {
      LocalCollection._diffQueryChanges(self._ordered, oldResults, newResults, self._multiplexer);
    }

    // Signals the multiplexer to allow all observeChanges calls that share this
    // multiplexer to return. (This happens asynchronously, via the
    // multiplexer's queue.)
    if (first) self._multiplexer.ready();

    // Replace self._results atomically.  (This assignment is what makes `first`
    // stay through on the next cycle, so we've waited until after we've
    // committed to ready-ing the multiplexer.)
    self._results = newResults;

    // Once the ObserveMultiplexer has processed everything we've done in this
    // round, mark all the writes which existed before this call as
    // commmitted. (If new writes have shown up in the meantime, there'll
    // already be another _pollMongo task scheduled.)
    self._multiplexer.onFlush(function () {
      _.each(writesForCycle, function (w) {
        w.committed();
      });
    });
  },
  stop: function () {
    var self = this;
    self._stopped = true;
    _.each(self._stopCallbacks, function (c) {
      c();
    });
    // Release any write fences that are waiting on us.
    _.each(self._pendingWrites, function (w) {
      w.committed();
    });
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-drivers-polling", -1);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oplog_observe_driver.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/oplog_observe_driver.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let oplogV2V1Converter;
module.link("./oplog_v2_converter", {
  oplogV2V1Converter(v) {
    oplogV2V1Converter = v;
  }
}, 0);
var Future = Npm.require('fibers/future');
var PHASE = {
  QUERYING: "QUERYING",
  FETCHING: "FETCHING",
  STEADY: "STEADY"
};

// Exception thrown by _needToPollQuery which unrolls the stack up to the
// enclosing call to finishIfNeedToPollQuery.
var SwitchedToQuery = function () {};
var finishIfNeedToPollQuery = function (f) {
  return function () {
    try {
      f.apply(this, arguments);
    } catch (e) {
      if (!(e instanceof SwitchedToQuery)) throw e;
    }
  };
};
var currentId = 0;

// OplogObserveDriver is an alternative to PollingObserveDriver which follows
// the Mongo operation log instead of just re-polling the query. It obeys the
// same simple interface: constructing it starts sending observeChanges
// callbacks (and a ready() invocation) to the ObserveMultiplexer, and you stop
// it by calling the stop() method.
OplogObserveDriver = function (options) {
  var self = this;
  self._usesOplog = true; // tests look at this

  self._id = currentId;
  currentId++;
  self._cursorDescription = options.cursorDescription;
  self._mongoHandle = options.mongoHandle;
  self._multiplexer = options.multiplexer;
  if (options.ordered) {
    throw Error("OplogObserveDriver only supports unordered observeChanges");
  }
  var sorter = options.sorter;
  // We don't support $near and other geo-queries so it's OK to initialize the
  // comparator only once in the constructor.
  var comparator = sorter && sorter.getComparator();
  if (options.cursorDescription.options.limit) {
    // There are several properties ordered driver implements:
    // - _limit is a positive number
    // - _comparator is a function-comparator by which the query is ordered
    // - _unpublishedBuffer is non-null Min/Max Heap,
    //                      the empty buffer in STEADY phase implies that the
    //                      everything that matches the queries selector fits
    //                      into published set.
    // - _published - Max Heap (also implements IdMap methods)

    var heapOptions = {
      IdMap: LocalCollection._IdMap
    };
    self._limit = self._cursorDescription.options.limit;
    self._comparator = comparator;
    self._sorter = sorter;
    self._unpublishedBuffer = new MinMaxHeap(comparator, heapOptions);
    // We need something that can find Max value in addition to IdMap interface
    self._published = new MaxHeap(comparator, heapOptions);
  } else {
    self._limit = 0;
    self._comparator = null;
    self._sorter = null;
    self._unpublishedBuffer = null;
    self._published = new LocalCollection._IdMap();
  }

  // Indicates if it is safe to insert a new document at the end of the buffer
  // for this query. i.e. it is known that there are no documents matching the
  // selector those are not in published or buffer.
  self._safeAppendToBuffer = false;
  self._stopped = false;
  self._stopHandles = [];
  Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-drivers-oplog", 1);
  self._registerPhaseChange(PHASE.QUERYING);
  self._matcher = options.matcher;
  // we are now using projection, not fields in the cursor description even if you pass {fields}
  // in the cursor construction
  var projection = self._cursorDescription.options.fields || self._cursorDescription.options.projection || {};
  self._projectionFn = LocalCollection._compileProjection(projection);
  // Projection function, result of combining important fields for selector and
  // existing fields projection
  self._sharedProjection = self._matcher.combineIntoProjection(projection);
  if (sorter) self._sharedProjection = sorter.combineIntoProjection(self._sharedProjection);
  self._sharedProjectionFn = LocalCollection._compileProjection(self._sharedProjection);
  self._needToFetch = new LocalCollection._IdMap();
  self._currentlyFetching = null;
  self._fetchGeneration = 0;
  self._requeryWhenDoneThisQuery = false;
  self._writesToCommitWhenWeReachSteady = [];

  // If the oplog handle tells us that it skipped some entries (because it got
  // behind, say), re-poll.
  self._stopHandles.push(self._mongoHandle._oplogHandle.onSkippedEntries(finishIfNeedToPollQuery(function () {
    self._needToPollQuery();
  })));
  forEachTrigger(self._cursorDescription, function (trigger) {
    self._stopHandles.push(self._mongoHandle._oplogHandle.onOplogEntry(trigger, function (notification) {
      Meteor._noYieldsAllowed(finishIfNeedToPollQuery(function () {
        var op = notification.op;
        if (notification.dropCollection || notification.dropDatabase) {
          // Note: this call is not allowed to block on anything (especially
          // on waiting for oplog entries to catch up) because that will block
          // onOplogEntry!
          self._needToPollQuery();
        } else {
          // All other operators should be handled depending on phase
          if (self._phase === PHASE.QUERYING) {
            self._handleOplogEntryQuerying(op);
          } else {
            self._handleOplogEntrySteadyOrFetching(op);
          }
        }
      }));
    }));
  });

  // XXX ordering w.r.t. everything else?
  self._stopHandles.push(listenAll(self._cursorDescription, function (notification) {
    // If we're not in a pre-fire write fence, we don't have to do anything.
    var fence = DDPServer._CurrentWriteFence.get();
    if (!fence || fence.fired) return;
    if (fence._oplogObserveDrivers) {
      fence._oplogObserveDrivers[self._id] = self;
      return;
    }
    fence._oplogObserveDrivers = {};
    fence._oplogObserveDrivers[self._id] = self;
    fence.onBeforeFire(function () {
      var drivers = fence._oplogObserveDrivers;
      delete fence._oplogObserveDrivers;

      // This fence cannot fire until we've caught up to "this point" in the
      // oplog, and all observers made it back to the steady state.
      self._mongoHandle._oplogHandle.waitUntilCaughtUp();
      _.each(drivers, function (driver) {
        if (driver._stopped) return;
        var write = fence.beginWrite();
        if (driver._phase === PHASE.STEADY) {
          // Make sure that all of the callbacks have made it through the
          // multiplexer and been delivered to ObserveHandles before committing
          // writes.
          driver._multiplexer.onFlush(function () {
            write.committed();
          });
        } else {
          driver._writesToCommitWhenWeReachSteady.push(write);
        }
      });
    });
  }));

  // When Mongo fails over, we need to repoll the query, in case we processed an
  // oplog entry that got rolled back.
  self._stopHandles.push(self._mongoHandle._onFailover(finishIfNeedToPollQuery(function () {
    self._needToPollQuery();
  })));

  // Give _observeChanges a chance to add the new ObserveHandle to our
  // multiplexer, so that the added calls get streamed.
  Meteor.defer(finishIfNeedToPollQuery(function () {
    self._runInitialQuery();
  }));
};
_.extend(OplogObserveDriver.prototype, {
  _addPublished: function (id, doc) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      var fields = _.clone(doc);
      delete fields._id;
      self._published.set(id, self._sharedProjectionFn(doc));
      self._multiplexer.added(id, self._projectionFn(fields));

      // After adding this document, the published set might be overflowed
      // (exceeding capacity specified by limit). If so, push the maximum
      // element to the buffer, we might want to save it in memory to reduce the
      // amount of Mongo lookups in the future.
      if (self._limit && self._published.size() > self._limit) {
        // XXX in theory the size of published is no more than limit+1
        if (self._published.size() !== self._limit + 1) {
          throw new Error("After adding to published, " + (self._published.size() - self._limit) + " documents are overflowing the set");
        }
        var overflowingDocId = self._published.maxElementId();
        var overflowingDoc = self._published.get(overflowingDocId);
        if (EJSON.equals(overflowingDocId, id)) {
          throw new Error("The document just added is overflowing the published set");
        }
        self._published.remove(overflowingDocId);
        self._multiplexer.removed(overflowingDocId);
        self._addBuffered(overflowingDocId, overflowingDoc);
      }
    });
  },
  _removePublished: function (id) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._published.remove(id);
      self._multiplexer.removed(id);
      if (!self._limit || self._published.size() === self._limit) return;
      if (self._published.size() > self._limit) throw Error("self._published got too big");

      // OK, we are publishing less than the limit. Maybe we should look in the
      // buffer to find the next element past what we were publishing before.

      if (!self._unpublishedBuffer.empty()) {
        // There's something in the buffer; move the first thing in it to
        // _published.
        var newDocId = self._unpublishedBuffer.minElementId();
        var newDoc = self._unpublishedBuffer.get(newDocId);
        self._removeBuffered(newDocId);
        self._addPublished(newDocId, newDoc);
        return;
      }

      // There's nothing in the buffer.  This could mean one of a few things.

      // (a) We could be in the middle of re-running the query (specifically, we
      // could be in _publishNewResults). In that case, _unpublishedBuffer is
      // empty because we clear it at the beginning of _publishNewResults. In
      // this case, our caller already knows the entire answer to the query and
      // we don't need to do anything fancy here.  Just return.
      if (self._phase === PHASE.QUERYING) return;

      // (b) We're pretty confident that the union of _published and
      // _unpublishedBuffer contain all documents that match selector. Because
      // _unpublishedBuffer is empty, that means we're confident that _published
      // contains all documents that match selector. So we have nothing to do.
      if (self._safeAppendToBuffer) return;

      // (c) Maybe there are other documents out there that should be in our
      // buffer. But in that case, when we emptied _unpublishedBuffer in
      // _removeBuffered, we should have called _needToPollQuery, which will
      // either put something in _unpublishedBuffer or set _safeAppendToBuffer
      // (or both), and it will put us in QUERYING for that whole time. So in
      // fact, we shouldn't be able to get here.

      throw new Error("Buffer inexplicably empty");
    });
  },
  _changePublished: function (id, oldDoc, newDoc) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._published.set(id, self._sharedProjectionFn(newDoc));
      var projectedNew = self._projectionFn(newDoc);
      var projectedOld = self._projectionFn(oldDoc);
      var changed = DiffSequence.makeChangedFields(projectedNew, projectedOld);
      if (!_.isEmpty(changed)) self._multiplexer.changed(id, changed);
    });
  },
  _addBuffered: function (id, doc) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._unpublishedBuffer.set(id, self._sharedProjectionFn(doc));

      // If something is overflowing the buffer, we just remove it from cache
      if (self._unpublishedBuffer.size() > self._limit) {
        var maxBufferedId = self._unpublishedBuffer.maxElementId();
        self._unpublishedBuffer.remove(maxBufferedId);

        // Since something matching is removed from cache (both published set and
        // buffer), set flag to false
        self._safeAppendToBuffer = false;
      }
    });
  },
  // Is called either to remove the doc completely from matching set or to move
  // it to the published set later.
  _removeBuffered: function (id) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._unpublishedBuffer.remove(id);
      // To keep the contract "buffer is never empty in STEADY phase unless the
      // everything matching fits into published" true, we poll everything as
      // soon as we see the buffer becoming empty.
      if (!self._unpublishedBuffer.size() && !self._safeAppendToBuffer) self._needToPollQuery();
    });
  },
  // Called when a document has joined the "Matching" results set.
  // Takes responsibility of keeping _unpublishedBuffer in sync with _published
  // and the effect of limit enforced.
  _addMatching: function (doc) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      var id = doc._id;
      if (self._published.has(id)) throw Error("tried to add something already published " + id);
      if (self._limit && self._unpublishedBuffer.has(id)) throw Error("tried to add something already existed in buffer " + id);
      var limit = self._limit;
      var comparator = self._comparator;
      var maxPublished = limit && self._published.size() > 0 ? self._published.get(self._published.maxElementId()) : null;
      var maxBuffered = limit && self._unpublishedBuffer.size() > 0 ? self._unpublishedBuffer.get(self._unpublishedBuffer.maxElementId()) : null;
      // The query is unlimited or didn't publish enough documents yet or the
      // new document would fit into published set pushing the maximum element
      // out, then we need to publish the doc.
      var toPublish = !limit || self._published.size() < limit || comparator(doc, maxPublished) < 0;

      // Otherwise we might need to buffer it (only in case of limited query).
      // Buffering is allowed if the buffer is not filled up yet and all
      // matching docs are either in the published set or in the buffer.
      var canAppendToBuffer = !toPublish && self._safeAppendToBuffer && self._unpublishedBuffer.size() < limit;

      // Or if it is small enough to be safely inserted to the middle or the
      // beginning of the buffer.
      var canInsertIntoBuffer = !toPublish && maxBuffered && comparator(doc, maxBuffered) <= 0;
      var toBuffer = canAppendToBuffer || canInsertIntoBuffer;
      if (toPublish) {
        self._addPublished(id, doc);
      } else if (toBuffer) {
        self._addBuffered(id, doc);
      } else {
        // dropping it and not saving to the cache
        self._safeAppendToBuffer = false;
      }
    });
  },
  // Called when a document leaves the "Matching" results set.
  // Takes responsibility of keeping _unpublishedBuffer in sync with _published
  // and the effect of limit enforced.
  _removeMatching: function (id) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      if (!self._published.has(id) && !self._limit) throw Error("tried to remove something matching but not cached " + id);
      if (self._published.has(id)) {
        self._removePublished(id);
      } else if (self._unpublishedBuffer.has(id)) {
        self._removeBuffered(id);
      }
    });
  },
  _handleDoc: function (id, newDoc) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      var matchesNow = newDoc && self._matcher.documentMatches(newDoc).result;
      var publishedBefore = self._published.has(id);
      var bufferedBefore = self._limit && self._unpublishedBuffer.has(id);
      var cachedBefore = publishedBefore || bufferedBefore;
      if (matchesNow && !cachedBefore) {
        self._addMatching(newDoc);
      } else if (cachedBefore && !matchesNow) {
        self._removeMatching(id);
      } else if (cachedBefore && matchesNow) {
        var oldDoc = self._published.get(id);
        var comparator = self._comparator;
        var minBuffered = self._limit && self._unpublishedBuffer.size() && self._unpublishedBuffer.get(self._unpublishedBuffer.minElementId());
        var maxBuffered;
        if (publishedBefore) {
          // Unlimited case where the document stays in published once it
          // matches or the case when we don't have enough matching docs to
          // publish or the changed but matching doc will stay in published
          // anyways.
          //
          // XXX: We rely on the emptiness of buffer. Be sure to maintain the
          // fact that buffer can't be empty if there are matching documents not
          // published. Notably, we don't want to schedule repoll and continue
          // relying on this property.
          var staysInPublished = !self._limit || self._unpublishedBuffer.size() === 0 || comparator(newDoc, minBuffered) <= 0;
          if (staysInPublished) {
            self._changePublished(id, oldDoc, newDoc);
          } else {
            // after the change doc doesn't stay in the published, remove it
            self._removePublished(id);
            // but it can move into buffered now, check it
            maxBuffered = self._unpublishedBuffer.get(self._unpublishedBuffer.maxElementId());
            var toBuffer = self._safeAppendToBuffer || maxBuffered && comparator(newDoc, maxBuffered) <= 0;
            if (toBuffer) {
              self._addBuffered(id, newDoc);
            } else {
              // Throw away from both published set and buffer
              self._safeAppendToBuffer = false;
            }
          }
        } else if (bufferedBefore) {
          oldDoc = self._unpublishedBuffer.get(id);
          // remove the old version manually instead of using _removeBuffered so
          // we don't trigger the querying immediately.  if we end this block
          // with the buffer empty, we will need to trigger the query poll
          // manually too.
          self._unpublishedBuffer.remove(id);
          var maxPublished = self._published.get(self._published.maxElementId());
          maxBuffered = self._unpublishedBuffer.size() && self._unpublishedBuffer.get(self._unpublishedBuffer.maxElementId());

          // the buffered doc was updated, it could move to published
          var toPublish = comparator(newDoc, maxPublished) < 0;

          // or stays in buffer even after the change
          var staysInBuffer = !toPublish && self._safeAppendToBuffer || !toPublish && maxBuffered && comparator(newDoc, maxBuffered) <= 0;
          if (toPublish) {
            self._addPublished(id, newDoc);
          } else if (staysInBuffer) {
            // stays in buffer but changes
            self._unpublishedBuffer.set(id, newDoc);
          } else {
            // Throw away from both published set and buffer
            self._safeAppendToBuffer = false;
            // Normally this check would have been done in _removeBuffered but
            // we didn't use it, so we need to do it ourself now.
            if (!self._unpublishedBuffer.size()) {
              self._needToPollQuery();
            }
          }
        } else {
          throw new Error("cachedBefore implies either of publishedBefore or bufferedBefore is true.");
        }
      }
    });
  },
  _fetchModifiedDocuments: function () {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._registerPhaseChange(PHASE.FETCHING);
      // Defer, because nothing called from the oplog entry handler may yield,
      // but fetch() yields.
      Meteor.defer(finishIfNeedToPollQuery(function () {
        while (!self._stopped && !self._needToFetch.empty()) {
          if (self._phase === PHASE.QUERYING) {
            // While fetching, we decided to go into QUERYING mode, and then we
            // saw another oplog entry, so _needToFetch is not empty. But we
            // shouldn't fetch these documents until AFTER the query is done.
            break;
          }

          // Being in steady phase here would be surprising.
          if (self._phase !== PHASE.FETCHING) throw new Error("phase in fetchModifiedDocuments: " + self._phase);
          self._currentlyFetching = self._needToFetch;
          var thisGeneration = ++self._fetchGeneration;
          self._needToFetch = new LocalCollection._IdMap();
          var waiting = 0;
          var fut = new Future();
          // This loop is safe, because _currentlyFetching will not be updated
          // during this loop (in fact, it is never mutated).
          self._currentlyFetching.forEach(function (op, id) {
            waiting++;
            self._mongoHandle._docFetcher.fetch(self._cursorDescription.collectionName, id, op, finishIfNeedToPollQuery(function (err, doc) {
              try {
                if (err) {
                  Meteor._debug("Got exception while fetching documents", err);
                  // If we get an error from the fetcher (eg, trouble
                  // connecting to Mongo), let's just abandon the fetch phase
                  // altogether and fall back to polling. It's not like we're
                  // getting live updates anyway.
                  if (self._phase !== PHASE.QUERYING) {
                    self._needToPollQuery();
                  }
                } else if (!self._stopped && self._phase === PHASE.FETCHING && self._fetchGeneration === thisGeneration) {
                  // We re-check the generation in case we've had an explicit
                  // _pollQuery call (eg, in another fiber) which should
                  // effectively cancel this round of fetches.  (_pollQuery
                  // increments the generation.)
                  self._handleDoc(id, doc);
                }
              } finally {
                waiting--;
                // Because fetch() never calls its callback synchronously,
                // this is safe (ie, we won't call fut.return() before the
                // forEach is done).
                if (waiting === 0) fut.return();
              }
            }));
          });
          fut.wait();
          // Exit now if we've had a _pollQuery call (here or in another fiber).
          if (self._phase === PHASE.QUERYING) return;
          self._currentlyFetching = null;
        }
        // We're done fetching, so we can be steady, unless we've had a
        // _pollQuery call (here or in another fiber).
        if (self._phase !== PHASE.QUERYING) self._beSteady();
      }));
    });
  },
  _beSteady: function () {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._registerPhaseChange(PHASE.STEADY);
      var writes = self._writesToCommitWhenWeReachSteady;
      self._writesToCommitWhenWeReachSteady = [];
      self._multiplexer.onFlush(function () {
        _.each(writes, function (w) {
          w.committed();
        });
      });
    });
  },
  _handleOplogEntryQuerying: function (op) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      self._needToFetch.set(idForOp(op), op);
    });
  },
  _handleOplogEntrySteadyOrFetching: function (op) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      var id = idForOp(op);
      // If we're already fetching this one, or about to, we can't optimize;
      // make sure that we fetch it again if necessary.
      if (self._phase === PHASE.FETCHING && (self._currentlyFetching && self._currentlyFetching.has(id) || self._needToFetch.has(id))) {
        self._needToFetch.set(id, op);
        return;
      }
      if (op.op === 'd') {
        if (self._published.has(id) || self._limit && self._unpublishedBuffer.has(id)) self._removeMatching(id);
      } else if (op.op === 'i') {
        if (self._published.has(id)) throw new Error("insert found for already-existing ID in published");
        if (self._unpublishedBuffer && self._unpublishedBuffer.has(id)) throw new Error("insert found for already-existing ID in buffer");

        // XXX what if selector yields?  for now it can't but later it could
        // have $where
        if (self._matcher.documentMatches(op.o).result) self._addMatching(op.o);
      } else if (op.op === 'u') {
        // we are mapping the new oplog format on mongo 5
        // to what we know better, $set
        op.o = oplogV2V1Converter(op.o);
        // Is this a modifier ($set/$unset, which may require us to poll the
        // database to figure out if the whole document matches the selector) or
        // a replacement (in which case we can just directly re-evaluate the
        // selector)?
        // oplog format has changed on mongodb 5, we have to support both now
        // diff is the format in Mongo 5+ (oplog v2)
        var isReplace = !_.has(op.o, '$set') && !_.has(op.o, 'diff') && !_.has(op.o, '$unset');
        // If this modifier modifies something inside an EJSON custom type (ie,
        // anything with EJSON$), then we can't try to use
        // LocalCollection._modify, since that just mutates the EJSON encoding,
        // not the actual object.
        var canDirectlyModifyDoc = !isReplace && modifierCanBeDirectlyApplied(op.o);
        var publishedBefore = self._published.has(id);
        var bufferedBefore = self._limit && self._unpublishedBuffer.has(id);
        if (isReplace) {
          self._handleDoc(id, _.extend({
            _id: id
          }, op.o));
        } else if ((publishedBefore || bufferedBefore) && canDirectlyModifyDoc) {
          // Oh great, we actually know what the document is, so we can apply
          // this directly.
          var newDoc = self._published.has(id) ? self._published.get(id) : self._unpublishedBuffer.get(id);
          newDoc = EJSON.clone(newDoc);
          newDoc._id = id;
          try {
            LocalCollection._modify(newDoc, op.o);
          } catch (e) {
            if (e.name !== "MinimongoError") throw e;
            // We didn't understand the modifier.  Re-fetch.
            self._needToFetch.set(id, op);
            if (self._phase === PHASE.STEADY) {
              self._fetchModifiedDocuments();
            }
            return;
          }
          self._handleDoc(id, self._sharedProjectionFn(newDoc));
        } else if (!canDirectlyModifyDoc || self._matcher.canBecomeTrueByModifier(op.o) || self._sorter && self._sorter.affectedByModifier(op.o)) {
          self._needToFetch.set(id, op);
          if (self._phase === PHASE.STEADY) self._fetchModifiedDocuments();
        }
      } else {
        throw Error("XXX SURPRISING OPERATION: " + op);
      }
    });
  },
  // Yields!
  _runInitialQuery: function () {
    var self = this;
    if (self._stopped) throw new Error("oplog stopped surprisingly early");
    self._runQuery({
      initial: true
    }); // yields

    if (self._stopped) return; // can happen on queryError

    // Allow observeChanges calls to return. (After this, it's possible for
    // stop() to be called.)
    self._multiplexer.ready();
    self._doneQuerying(); // yields
  },
  // In various circumstances, we may just want to stop processing the oplog and
  // re-run the initial query, just as if we were a PollingObserveDriver.
  //
  // This function may not block, because it is called from an oplog entry
  // handler.
  //
  // XXX We should call this when we detect that we've been in FETCHING for "too
  // long".
  //
  // XXX We should call this when we detect Mongo failover (since that might
  // mean that some of the oplog entries we have processed have been rolled
  // back). The Node Mongo driver is in the middle of a bunch of huge
  // refactorings, including the way that it notifies you when primary
  // changes. Will put off implementing this until driver 1.4 is out.
  _pollQuery: function () {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      if (self._stopped) return;

      // Yay, we get to forget about all the things we thought we had to fetch.
      self._needToFetch = new LocalCollection._IdMap();
      self._currentlyFetching = null;
      ++self._fetchGeneration; // ignore any in-flight fetches
      self._registerPhaseChange(PHASE.QUERYING);

      // Defer so that we don't yield.  We don't need finishIfNeedToPollQuery
      // here because SwitchedToQuery is not thrown in QUERYING mode.
      Meteor.defer(function () {
        self._runQuery();
        self._doneQuerying();
      });
    });
  },
  // Yields!
  _runQuery: function (options) {
    var self = this;
    options = options || {};
    var newResults, newBuffer;

    // This while loop is just to retry failures.
    while (true) {
      // If we've been stopped, we don't have to run anything any more.
      if (self._stopped) return;
      newResults = new LocalCollection._IdMap();
      newBuffer = new LocalCollection._IdMap();

      // Query 2x documents as the half excluded from the original query will go
      // into unpublished buffer to reduce additional Mongo lookups in cases
      // when documents are removed from the published set and need a
      // replacement.
      // XXX needs more thought on non-zero skip
      // XXX 2 is a "magic number" meaning there is an extra chunk of docs for
      // buffer if such is needed.
      var cursor = self._cursorForQuery({
        limit: self._limit * 2
      });
      try {
        cursor.forEach(function (doc, i) {
          // yields
          if (!self._limit || i < self._limit) {
            newResults.set(doc._id, doc);
          } else {
            newBuffer.set(doc._id, doc);
          }
        });
        break;
      } catch (e) {
        if (options.initial && typeof e.code === 'number') {
          // This is an error document sent to us by mongod, not a connection
          // error generated by the client. And we've never seen this query work
          // successfully. Probably it's a bad selector or something, so we
          // should NOT retry. Instead, we should halt the observe (which ends
          // up calling `stop` on us).
          self._multiplexer.queryError(e);
          return;
        }

        // During failover (eg) if we get an exception we should log and retry
        // instead of crashing.
        Meteor._debug("Got exception while polling query", e);
        Meteor._sleepForMs(100);
      }
    }
    if (self._stopped) return;
    self._publishNewResults(newResults, newBuffer);
  },
  // Transitions to QUERYING and runs another query, or (if already in QUERYING)
  // ensures that we will query again later.
  //
  // This function may not block, because it is called from an oplog entry
  // handler. However, if we were not already in the QUERYING phase, it throws
  // an exception that is caught by the closest surrounding
  // finishIfNeedToPollQuery call; this ensures that we don't continue running
  // close that was designed for another phase inside PHASE.QUERYING.
  //
  // (It's also necessary whenever logic in this file yields to check that other
  // phases haven't put us into QUERYING mode, though; eg,
  // _fetchModifiedDocuments does this.)
  _needToPollQuery: function () {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      if (self._stopped) return;

      // If we're not already in the middle of a query, we can query now
      // (possibly pausing FETCHING).
      if (self._phase !== PHASE.QUERYING) {
        self._pollQuery();
        throw new SwitchedToQuery();
      }

      // We're currently in QUERYING. Set a flag to ensure that we run another
      // query when we're done.
      self._requeryWhenDoneThisQuery = true;
    });
  },
  // Yields!
  _doneQuerying: function () {
    var self = this;
    if (self._stopped) return;
    self._mongoHandle._oplogHandle.waitUntilCaughtUp(); // yields
    if (self._stopped) return;
    if (self._phase !== PHASE.QUERYING) throw Error("Phase unexpectedly " + self._phase);
    Meteor._noYieldsAllowed(function () {
      if (self._requeryWhenDoneThisQuery) {
        self._requeryWhenDoneThisQuery = false;
        self._pollQuery();
      } else if (self._needToFetch.empty()) {
        self._beSteady();
      } else {
        self._fetchModifiedDocuments();
      }
    });
  },
  _cursorForQuery: function (optionsOverwrite) {
    var self = this;
    return Meteor._noYieldsAllowed(function () {
      // The query we run is almost the same as the cursor we are observing,
      // with a few changes. We need to read all the fields that are relevant to
      // the selector, not just the fields we are going to publish (that's the
      // "shared" projection). And we don't want to apply any transform in the
      // cursor, because observeChanges shouldn't use the transform.
      var options = _.clone(self._cursorDescription.options);

      // Allow the caller to modify the options. Useful to specify different
      // skip and limit values.
      _.extend(options, optionsOverwrite);
      options.fields = self._sharedProjection;
      delete options.transform;
      // We are NOT deep cloning fields or selector here, which should be OK.
      var description = new CursorDescription(self._cursorDescription.collectionName, self._cursorDescription.selector, options);
      return new Cursor(self._mongoHandle, description);
    });
  },
  // Replace self._published with newResults (both are IdMaps), invoking observe
  // callbacks on the multiplexer.
  // Replace self._unpublishedBuffer with newBuffer.
  //
  // XXX This is very similar to LocalCollection._diffQueryUnorderedChanges. We
  // should really: (a) Unify IdMap and OrderedDict into Unordered/OrderedDict
  // (b) Rewrite diff.js to use these classes instead of arrays and objects.
  _publishNewResults: function (newResults, newBuffer) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      // If the query is limited and there is a buffer, shut down so it doesn't
      // stay in a way.
      if (self._limit) {
        self._unpublishedBuffer.clear();
      }

      // First remove anything that's gone. Be careful not to modify
      // self._published while iterating over it.
      var idsToRemove = [];
      self._published.forEach(function (doc, id) {
        if (!newResults.has(id)) idsToRemove.push(id);
      });
      _.each(idsToRemove, function (id) {
        self._removePublished(id);
      });

      // Now do adds and changes.
      // If self has a buffer and limit, the new fetched result will be
      // limited correctly as the query has sort specifier.
      newResults.forEach(function (doc, id) {
        self._handleDoc(id, doc);
      });

      // Sanity-check that everything we tried to put into _published ended up
      // there.
      // XXX if this is slow, remove it later
      if (self._published.size() !== newResults.size()) {
        Meteor._debug('The Mongo server and the Meteor query disagree on how ' + 'many documents match your query. Cursor description: ', self._cursorDescription);
      }
      self._published.forEach(function (doc, id) {
        if (!newResults.has(id)) throw Error("_published has a doc that newResults doesn't; " + id);
      });

      // Finally, replace the buffer
      newBuffer.forEach(function (doc, id) {
        self._addBuffered(id, doc);
      });
      self._safeAppendToBuffer = newBuffer.size() < self._limit;
    });
  },
  // This stop function is invoked from the onStop of the ObserveMultiplexer, so
  // it shouldn't actually be possible to call it until the multiplexer is
  // ready.
  //
  // It's important to check self._stopped after every call in this file that
  // can yield!
  stop: function () {
    var self = this;
    if (self._stopped) return;
    self._stopped = true;
    _.each(self._stopHandles, function (handle) {
      handle.stop();
    });

    // Note: we *don't* use multiplexer.onFlush here because this stop
    // callback is actually invoked by the multiplexer itself when it has
    // determined that there are no handles left. So nothing is actually going
    // to get flushed (and it's probably not valid to call methods on the
    // dying multiplexer).
    _.each(self._writesToCommitWhenWeReachSteady, function (w) {
      w.committed(); // maybe yields?
    });
    self._writesToCommitWhenWeReachSteady = null;

    // Proactively drop references to potentially big things.
    self._published = null;
    self._unpublishedBuffer = null;
    self._needToFetch = null;
    self._currentlyFetching = null;
    self._oplogEntryHandle = null;
    self._listenersHandle = null;
    Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "observe-drivers-oplog", -1);
  },
  _registerPhaseChange: function (phase) {
    var self = this;
    Meteor._noYieldsAllowed(function () {
      var now = new Date();
      if (self._phase) {
        var timeDiff = now - self._phaseStartTime;
        Package['facts-base'] && Package['facts-base'].Facts.incrementServerFact("mongo-livedata", "time-spent-in-" + self._phase + "-phase", timeDiff);
      }
      self._phase = phase;
      self._phaseStartTime = now;
    });
  }
});

// Does our oplog tailing code support this cursor? For now, we are being very
// conservative and allowing only simple queries with simple options.
// (This is a "static method".)
OplogObserveDriver.cursorSupported = function (cursorDescription, matcher) {
  // First, check the options.
  var options = cursorDescription.options;

  // Did the user say no explicitly?
  // underscored version of the option is COMPAT with 1.2
  if (options.disableOplog || options._disableOplog) return false;

  // skip is not supported: to support it we would need to keep track of all
  // "skipped" documents or at least their ids.
  // limit w/o a sort specifier is not supported: current implementation needs a
  // deterministic way to order documents.
  if (options.skip || options.limit && !options.sort) return false;

  // If a fields projection option is given check if it is supported by
  // minimongo (some operators are not supported).
  const fields = options.fields || options.projection;
  if (fields) {
    try {
      LocalCollection._checkSupportedProjection(fields);
    } catch (e) {
      if (e.name === "MinimongoError") {
        return false;
      } else {
        throw e;
      }
    }
  }

  // We don't allow the following selectors:
  //   - $where (not confident that we provide the same JS environment
  //             as Mongo, and can yield!)
  //   - $near (has "interesting" properties in MongoDB, like the possibility
  //            of returning an ID multiple times, though even polling maybe
  //            have a bug there)
  //           XXX: once we support it, we would need to think more on how we
  //           initialize the comparators when we create the driver.
  return !matcher.hasWhere() && !matcher.hasGeoQuery();
};
var modifierCanBeDirectlyApplied = function (modifier) {
  return _.all(modifier, function (fields, operation) {
    return _.all(fields, function (value, field) {
      return !/EJSON\$/.test(field);
    });
  });
};
MongoInternals.OplogObserveDriver = OplogObserveDriver;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oplog_v2_converter.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/oplog_v2_converter.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  oplogV2V1Converter: () => oplogV2V1Converter
});
// Converter of the new MongoDB Oplog format (>=5.0) to the one that Meteor
// handles well, i.e., `$set` and `$unset`. The new format is completely new,
// and looks as follows:
//
//   { $v: 2, diff: Diff }
//
// where `Diff` is a recursive structure:
//
//   {
//     // Nested updates (sometimes also represented with an s-field).
//     // Example: `{ $set: { 'foo.bar': 1 } }`.
//     i: { <key>: <value>, ... },
//
//     // Top-level updates.
//     // Example: `{ $set: { foo: { bar: 1 } } }`.
//     u: { <key>: <value>, ... },
//
//     // Unsets.
//     // Example: `{ $unset: { foo: '' } }`.
//     d: { <key>: false, ... },
//
//     // Array operations.
//     // Example: `{ $push: { foo: 'bar' } }`.
//     s<key>: { a: true, u<index>: <value>, ... },
//     ...
//
//     // Nested operations (sometimes also represented in the `i` field).
//     // Example: `{ $set: { 'foo.bar': 1 } }`.
//     s<key>: Diff,
//     ...
//   }
//
// (all fields are optional).

function join(prefix, key) {
  return prefix ? "".concat(prefix, ".").concat(key) : key;
}
const arrayOperatorKeyRegex = /^(a|[su]\d+)$/;
function isArrayOperatorKey(field) {
  return arrayOperatorKeyRegex.test(field);
}
function isArrayOperator(operator) {
  return operator.a === true && Object.keys(operator).every(isArrayOperatorKey);
}
function flattenObjectInto(target, source, prefix) {
  if (Array.isArray(source) || typeof source !== 'object' || source === null || source instanceof Mongo.ObjectID) {
    target[prefix] = source;
  } else {
    const entries = Object.entries(source);
    if (entries.length) {
      entries.forEach(_ref => {
        let [key, value] = _ref;
        flattenObjectInto(target, value, join(prefix, key));
      });
    } else {
      target[prefix] = source;
    }
  }
}
const logDebugMessages = !!process.env.OPLOG_CONVERTER_DEBUG;
function convertOplogDiff(oplogEntry, diff, prefix) {
  if (logDebugMessages) {
    console.log("convertOplogDiff(".concat(JSON.stringify(oplogEntry), ", ").concat(JSON.stringify(diff), ", ").concat(JSON.stringify(prefix), ")"));
  }
  Object.entries(diff).forEach(_ref2 => {
    let [diffKey, value] = _ref2;
    if (diffKey === 'd') {
      var _oplogEntry$$unset;
      // Handle `$unset`s.
      (_oplogEntry$$unset = oplogEntry.$unset) !== null && _oplogEntry$$unset !== void 0 ? _oplogEntry$$unset : oplogEntry.$unset = {};
      Object.keys(value).forEach(key => {
        oplogEntry.$unset[join(prefix, key)] = true;
      });
    } else if (diffKey === 'i') {
      var _oplogEntry$$set;
      // Handle (potentially) nested `$set`s.
      (_oplogEntry$$set = oplogEntry.$set) !== null && _oplogEntry$$set !== void 0 ? _oplogEntry$$set : oplogEntry.$set = {};
      flattenObjectInto(oplogEntry.$set, value, prefix);
    } else if (diffKey === 'u') {
      var _oplogEntry$$set2;
      // Handle flat `$set`s.
      (_oplogEntry$$set2 = oplogEntry.$set) !== null && _oplogEntry$$set2 !== void 0 ? _oplogEntry$$set2 : oplogEntry.$set = {};
      Object.entries(value).forEach(_ref3 => {
        let [key, value] = _ref3;
        oplogEntry.$set[join(prefix, key)] = value;
      });
    } else {
      // Handle s-fields.
      const key = diffKey.slice(1);
      if (isArrayOperator(value)) {
        // Array operator.
        Object.entries(value).forEach(_ref4 => {
          let [position, value] = _ref4;
          if (position === 'a') {
            return;
          }
          const positionKey = join(join(prefix, key), position.slice(1));
          if (position[0] === 's') {
            convertOplogDiff(oplogEntry, value, positionKey);
          } else if (value === null) {
            var _oplogEntry$$unset2;
            (_oplogEntry$$unset2 = oplogEntry.$unset) !== null && _oplogEntry$$unset2 !== void 0 ? _oplogEntry$$unset2 : oplogEntry.$unset = {};
            oplogEntry.$unset[positionKey] = true;
          } else {
            var _oplogEntry$$set3;
            (_oplogEntry$$set3 = oplogEntry.$set) !== null && _oplogEntry$$set3 !== void 0 ? _oplogEntry$$set3 : oplogEntry.$set = {};
            oplogEntry.$set[positionKey] = value;
          }
        });
      } else if (key) {
        // Nested object.
        convertOplogDiff(oplogEntry, value, join(prefix, key));
      }
    }
  });
}
function oplogV2V1Converter(oplogEntry) {
  // Pass-through v1 and (probably) invalid entries.
  if (oplogEntry.$v !== 2 || !oplogEntry.diff) {
    return oplogEntry;
  }
  const convertedOplogEntry = {
    $v: 2
  };
  convertOplogDiff(convertedOplogEntry, oplogEntry.diff, '');
  return convertedOplogEntry;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"local_collection_driver.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/local_collection_driver.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  LocalCollectionDriver: () => LocalCollectionDriver
});
const LocalCollectionDriver = new class LocalCollectionDriver {
  constructor() {
    this.noConnCollections = Object.create(null);
  }
  open(name, conn) {
    if (!name) {
      return new LocalCollection();
    }
    if (!conn) {
      return ensureCollection(name, this.noConnCollections);
    }
    if (!conn._mongo_livedata_collections) {
      conn._mongo_livedata_collections = Object.create(null);
    }

    // XXX is there a way to keep track of a connection's collections without
    // dangling it off the connection object?
    return ensureCollection(name, conn._mongo_livedata_collections);
  }
}();
function ensureCollection(name, collections) {
  return name in collections ? collections[name] : collections[name] = new LocalCollection(name);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"remote_collection_driver.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/remote_collection_driver.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ASYNC_COLLECTION_METHODS, getAsyncMethodName;
module.link("meteor/minimongo/constants", {
  ASYNC_COLLECTION_METHODS(v) {
    ASYNC_COLLECTION_METHODS = v;
  },
  getAsyncMethodName(v) {
    getAsyncMethodName = v;
  }
}, 0);
MongoInternals.RemoteCollectionDriver = function (mongo_url, options) {
  var self = this;
  self.mongo = new MongoConnection(mongo_url, options);
};
const REMOTE_COLLECTION_METHODS = ['_createCappedCollection', '_dropIndex', '_ensureIndex', 'createIndex', 'countDocuments', 'dropCollection', 'estimatedDocumentCount', 'find', 'findOne', 'insert', 'rawCollection', 'remove', 'update', 'upsert'];
Object.assign(MongoInternals.RemoteCollectionDriver.prototype, {
  open: function (name) {
    var self = this;
    var ret = {};
    REMOTE_COLLECTION_METHODS.forEach(function (m) {
      ret[m] = _.bind(self.mongo[m], self.mongo, name);
      if (!ASYNC_COLLECTION_METHODS.includes(m)) return;
      const asyncMethodName = getAsyncMethodName(m);
      ret[asyncMethodName] = function () {
        try {
          return Promise.resolve(ret[m](...arguments));
        } catch (error) {
          return Promise.reject(error);
        }
      };
    });
    return ret;
  }
});

// Create the singleton RemoteCollectionDriver only on demand, so we
// only require Mongo configuration if it's actually used (eg, not if
// you're only trying to receive data from a remote DDP server.)
MongoInternals.defaultRemoteCollectionDriver = _.once(function () {
  var connectionOptions = {};
  var mongoUrl = process.env.MONGO_URL;
  if (process.env.MONGO_OPLOG_URL) {
    connectionOptions.oplogUrl = process.env.MONGO_OPLOG_URL;
  }
  if (!mongoUrl) throw new Error("MONGO_URL must be set in environment");
  const driver = new MongoInternals.RemoteCollectionDriver(mongoUrl, connectionOptions);

  // As many deployment tools, including Meteor Up, send requests to the app in
  // order to confirm that the deployment finished successfully, it's required
  // to know about a database connection problem before the app starts. Doing so
  // in a `Meteor.startup` is fine, as the `WebApp` handles requests only after
  // all are finished.
  Meteor.startup(() => {
    Promise.await(driver.mongo.client.connect());
  });
  return driver;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collection.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/collection.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
!function (module1) {
  let _objectSpread;
  module1.link("@babel/runtime/helpers/objectSpread2", {
    default(v) {
      _objectSpread = v;
    }
  }, 0);
  module1.export({
    warnUsingOldApi: () => warnUsingOldApi
  });
  let ASYNC_COLLECTION_METHODS, getAsyncMethodName;
  module1.link("meteor/minimongo/constants", {
    ASYNC_COLLECTION_METHODS(v) {
      ASYNC_COLLECTION_METHODS = v;
    },
    getAsyncMethodName(v) {
      getAsyncMethodName = v;
    }
  }, 0);
  let normalizeProjection;
  module1.link("./mongo_utils", {
    normalizeProjection(v) {
      normalizeProjection = v;
    }
  }, 1);
  function warnUsingOldApi(methodName, collectionName, isCalledFromAsync) {
    if (process.env.WARN_WHEN_USING_OLD_API &&
    // also ensures it is on the server
    !isCalledFromAsync // must be true otherwise we should log
    ) {
      if (collectionName === undefined || collectionName.includes('oplog')) return;
      console.warn("\n   \n   Calling method ".concat(collectionName, ".").concat(methodName, " from old API on server.\n   This method will be removed, from the server, in version 3.\n   Trace is below:"));
      console.trace();
    }
  }
  /**
   * @summary Namespace for MongoDB-related items
   * @namespace
   */
  Mongo = {};

  /**
   * @summary Constructor for a Collection
   * @locus Anywhere
   * @instancename collection
   * @class
   * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
   * @param {Object} [options]
   * @param {Object} options.connection The server connection that will manage this collection. Uses the default connection if not specified.  Pass the return value of calling [`DDP.connect`](#ddp_connect) to specify a different server. Pass `null` to specify no connection. Unmanaged (`name` is null) collections cannot specify a connection.
   * @param {String} options.idGeneration The method of generating the `_id` fields of new documents in this collection.  Possible values:
  
   - **`'STRING'`**: random strings
   - **`'MONGO'`**:  random [`Mongo.ObjectID`](#mongo_object_id) values
  
  The default id generation technique is `'STRING'`.
   * @param {Function} options.transform An optional transformation function. Documents will be passed through this function before being returned from `fetch` or `findOne`, and before being passed to callbacks of `observe`, `map`, `forEach`, `allow`, and `deny`. Transforms are *not* applied for the callbacks of `observeChanges` or to cursors returned from publish functions.
   * @param {Boolean} options.defineMutationMethods Set to `false` to skip setting up the mutation methods that enable insert/update/remove from client code. Default `true`.
   */
  Mongo.Collection = function Collection(name, options) {
    if (!name && name !== null) {
      Meteor._debug('Warning: creating anonymous collection. It will not be ' + 'saved or synchronized over the network. (Pass null for ' + 'the collection name to turn off this warning.)');
      name = null;
    }
    if (name !== null && typeof name !== 'string') {
      throw new Error('First argument to new Mongo.Collection must be a string or null');
    }
    if (options && options.methods) {
      // Backwards compatibility hack with original signature (which passed
      // "connection" directly instead of in options. (Connections must have a "methods"
      // method.)
      // XXX remove before 1.0
      options = {
        connection: options
      };
    }
    // Backwards compatibility: "connection" used to be called "manager".
    if (options && options.manager && !options.connection) {
      options.connection = options.manager;
    }
    options = _objectSpread({
      connection: undefined,
      idGeneration: 'STRING',
      transform: null,
      _driver: undefined,
      _preventAutopublish: false
    }, options);
    switch (options.idGeneration) {
      case 'MONGO':
        this._makeNewID = function () {
          var src = name ? DDP.randomStream('/collection/' + name) : Random.insecure;
          return new Mongo.ObjectID(src.hexString(24));
        };
        break;
      case 'STRING':
      default:
        this._makeNewID = function () {
          var src = name ? DDP.randomStream('/collection/' + name) : Random.insecure;
          return src.id();
        };
        break;
    }
    this._transform = LocalCollection.wrapTransform(options.transform);
    if (!name || options.connection === null)
      // note: nameless collections never have a connection
      this._connection = null;else if (options.connection) this._connection = options.connection;else if (Meteor.isClient) this._connection = Meteor.connection;else this._connection = Meteor.server;
    if (!options._driver) {
      // XXX This check assumes that webapp is loaded so that Meteor.server !==
      // null. We should fully support the case of "want to use a Mongo-backed
      // collection from Node code without webapp", but we don't yet.
      // #MeteorServerNull
      if (name && this._connection === Meteor.server && typeof MongoInternals !== 'undefined' && MongoInternals.defaultRemoteCollectionDriver) {
        options._driver = MongoInternals.defaultRemoteCollectionDriver();
      } else {
        const {
          LocalCollectionDriver
        } = require('./local_collection_driver.js');
        options._driver = LocalCollectionDriver;
      }
    }
    this._collection = options._driver.open(name, this._connection);
    this._name = name;
    this._driver = options._driver;
    this._maybeSetUpReplication(name, options);

    // XXX don't define these until allow or deny is actually used for this
    // collection. Could be hard if the security rules are only defined on the
    // server.
    if (options.defineMutationMethods !== false) {
      try {
        this._defineMutationMethods({
          useExisting: options._suppressSameNameError === true
        });
      } catch (error) {
        // Throw a more understandable error on the server for same collection name
        if (error.message === "A method named '/".concat(name, "/insert' is already defined")) throw new Error("There is already a collection named \"".concat(name, "\""));
        throw error;
      }
    }

    // autopublish
    if (Package.autopublish && !options._preventAutopublish && this._connection && this._connection.publish) {
      this._connection.publish(null, () => this.find(), {
        is_auto: true
      });
    }
  };
  Object.assign(Mongo.Collection.prototype, {
    _maybeSetUpReplication(name, _ref2) {
      let {
        _suppressSameNameError = false
      } = _ref2;
      const self = this;
      if (!(self._connection && self._connection.registerStore)) {
        return;
      }

      // OK, we're going to be a slave, replicating some remote
      // database, except possibly with some temporary divergence while
      // we have unacknowledged RPC's.
      const ok = self._connection.registerStore(name, {
        // Called at the beginning of a batch of updates. batchSize is the number
        // of update calls to expect.
        //
        // XXX This interface is pretty janky. reset probably ought to go back to
        // being its own function, and callers shouldn't have to calculate
        // batchSize. The optimization of not calling pause/remove should be
        // delayed until later: the first call to update() should buffer its
        // message, and then we can either directly apply it at endUpdate time if
        // it was the only update, or do pauseObservers/apply/apply at the next
        // update() if there's another one.
        beginUpdate(batchSize, reset) {
          // pause observers so users don't see flicker when updating several
          // objects at once (including the post-reconnect reset-and-reapply
          // stage), and so that a re-sorting of a query can take advantage of the
          // full _diffQuery moved calculation instead of applying change one at a
          // time.
          if (batchSize > 1 || reset) self._collection.pauseObservers();
          if (reset) self._collection.remove({});
        },
        // Apply an update.
        // XXX better specify this interface (not in terms of a wire message)?
        update(msg) {
          var mongoId = MongoID.idParse(msg.id);
          var doc = self._collection._docs.get(mongoId);

          //When the server's mergebox is disabled for a collection, the client must gracefully handle it when:
          // *We receive an added message for a document that is already there. Instead, it will be changed
          // *We reeive a change message for a document that is not there. Instead, it will be added
          // *We receive a removed messsage for a document that is not there. Instead, noting wil happen.

          //Code is derived from client-side code originally in peerlibrary:control-mergebox
          //https://github.com/peerlibrary/meteor-control-mergebox/blob/master/client.coffee

          //For more information, refer to discussion "Initial support for publication strategies in livedata server":
          //https://github.com/meteor/meteor/pull/11151
          if (Meteor.isClient) {
            if (msg.msg === 'added' && doc) {
              msg.msg = 'changed';
            } else if (msg.msg === 'removed' && !doc) {
              return;
            } else if (msg.msg === 'changed' && !doc) {
              msg.msg = 'added';
              _ref = msg.fields;
              for (field in _ref) {
                value = _ref[field];
                if (value === void 0) {
                  delete msg.fields[field];
                }
              }
            }
          }

          // Is this a "replace the whole doc" message coming from the quiescence
          // of method writes to an object? (Note that 'undefined' is a valid
          // value meaning "remove it".)
          if (msg.msg === 'replace') {
            var replace = msg.replace;
            if (!replace) {
              if (doc) self._collection.remove(mongoId);
            } else if (!doc) {
              self._collection.insert(replace);
            } else {
              // XXX check that replace has no $ ops
              self._collection.update(mongoId, replace);
            }
            return;
          } else if (msg.msg === 'added') {
            if (doc) {
              throw new Error('Expected not to find a document already present for an add');
            }
            self._collection.insert(_objectSpread({
              _id: mongoId
            }, msg.fields));
          } else if (msg.msg === 'removed') {
            if (!doc) throw new Error('Expected to find a document already present for removed');
            self._collection.remove(mongoId);
          } else if (msg.msg === 'changed') {
            if (!doc) throw new Error('Expected to find a document to change');
            const keys = Object.keys(msg.fields);
            if (keys.length > 0) {
              var modifier = {};
              keys.forEach(key => {
                const value = msg.fields[key];
                if (EJSON.equals(doc[key], value)) {
                  return;
                }
                if (typeof value === 'undefined') {
                  if (!modifier.$unset) {
                    modifier.$unset = {};
                  }
                  modifier.$unset[key] = 1;
                } else {
                  if (!modifier.$set) {
                    modifier.$set = {};
                  }
                  modifier.$set[key] = value;
                }
              });
              if (Object.keys(modifier).length > 0) {
                self._collection.update(mongoId, modifier);
              }
            }
          } else {
            throw new Error("I don't know how to deal with this message");
          }
        },
        // Called at the end of a batch of updates.
        endUpdate() {
          self._collection.resumeObservers();
        },
        // Called around method stub invocations to capture the original versions
        // of modified documents.
        saveOriginals() {
          self._collection.saveOriginals();
        },
        retrieveOriginals() {
          return self._collection.retrieveOriginals();
        },
        // Used to preserve current versions of documents across a store reset.
        getDoc(id) {
          return self.findOne(id);
        },
        // To be able to get back to the collection from the store.
        _getCollection() {
          return self;
        }
      });
      if (!ok) {
        const message = "There is already a collection named \"".concat(name, "\"");
        if (_suppressSameNameError === true) {
          // XXX In theory we do not have to throw when `ok` is falsy. The
          // store is already defined for this collection name, but this
          // will simply be another reference to it and everything should
          // work. However, we have historically thrown an error here, so
          // for now we will skip the error only when _suppressSameNameError
          // is `true`, allowing people to opt in and give this some real
          // world testing.
          console.warn ? console.warn(message) : console.log(message);
        } else {
          throw new Error(message);
        }
      }
    },
    ///
    /// Main collection API
    ///
    /**
     * @summary Gets the number of documents matching the filter. For a fast count of the total documents in a collection see `estimatedDocumentCount`.
     * @locus Anywhere
     * @method countDocuments
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} [selector] A query describing the documents to count
     * @param {Object} [options] All options are listed in [MongoDB documentation](https://mongodb.github.io/node-mongodb-native/4.11/interfaces/CountDocumentsOptions.html). Please note that not all of them are available on the client.
     * @returns {Promise<number>}
     */
    countDocuments() {
      return this._collection.countDocuments(...arguments);
    },
    /**
     * @summary Gets an estimate of the count of documents in a collection using collection metadata. For an exact count of the documents in a collection see `countDocuments`.
     * @locus Anywhere
     * @method estimatedDocumentCount
     * @memberof Mongo.Collection
     * @instance
     * @param {Object} [options] All options are listed in [MongoDB documentation](https://mongodb.github.io/node-mongodb-native/4.11/interfaces/EstimatedDocumentCountOptions.html). Please note that not all of them are available on the client.
     * @returns {Promise<number>}
     */
    estimatedDocumentCount() {
      return this._collection.estimatedDocumentCount(...arguments);
    },
    _getFindSelector(args) {
      if (args.length == 0) return {};else return args[0];
    },
    _getFindOptions(args) {
      const [, options] = args || [];
      const newOptions = normalizeProjection(options);
      var self = this;
      if (args.length < 2) {
        return {
          transform: self._transform
        };
      } else {
        check(newOptions, Match.Optional(Match.ObjectIncluding({
          projection: Match.Optional(Match.OneOf(Object, undefined)),
          sort: Match.Optional(Match.OneOf(Object, Array, Function, undefined)),
          limit: Match.Optional(Match.OneOf(Number, undefined)),
          skip: Match.Optional(Match.OneOf(Number, undefined))
        })));
        return _objectSpread({
          transform: self._transform
        }, newOptions);
      }
    },
    /**
     * @summary Find the documents in a collection that match the selector.
     * @locus Anywhere
     * @method find
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} [selector] A query describing the documents to find
     * @param {Object} [options]
     * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)
     * @param {Number} options.skip Number of results to skip at the beginning
     * @param {Number} options.limit Maximum number of results to return
     * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
     * @param {Boolean} options.reactive (Client only) Default `true`; pass `false` to disable reactivity
     * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
     * @param {Boolean} options.disableOplog (Server only) Pass true to disable oplog-tailing on this query. This affects the way server processes calls to `observe` on this query. Disabling the oplog can be useful when working with data that updates in large batches.
     * @param {Number} options.pollingIntervalMs (Server only) When oplog is disabled (through the use of `disableOplog` or when otherwise not available), the frequency (in milliseconds) of how often to poll this query when observing on the server. Defaults to 10000ms (10 seconds).
     * @param {Number} options.pollingThrottleMs (Server only) When oplog is disabled (through the use of `disableOplog` or when otherwise not available), the minimum time (in milliseconds) to allow between re-polling when observing on the server. Increasing this will save CPU and mongo load at the expense of slower updates to users. Decreasing this is not recommended. Defaults to 50ms.
     * @param {Number} options.maxTimeMs (Server only) If set, instructs MongoDB to set a time limit for this cursor's operations. If the operation reaches the specified time limit (in milliseconds) without the having been completed, an exception will be thrown. Useful to prevent an (accidental or malicious) unoptimized query from causing a full collection scan that would disrupt other database users, at the expense of needing to handle the resulting error.
     * @param {String|Object} options.hint (Server only) Overrides MongoDB's default index selection and query optimization process. Specify an index to force its use, either by its name or index specification. You can also specify `{ $natural : 1 }` to force a forwards collection scan, or `{ $natural : -1 }` for a reverse collection scan. Setting this is only recommended for advanced users.
     * @param {String} options.readPreference (Server only) Specifies a custom MongoDB [`readPreference`](https://docs.mongodb.com/manual/core/read-preference) for this particular cursor. Possible values are `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred` and `nearest`.
     * @returns {Mongo.Cursor}
     */
    find() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // Collection.find() (return all docs) behaves differently
      // from Collection.find(undefined) (return 0 docs).  so be
      // careful about the length of arguments.
      return this._collection.find(this._getFindSelector(args), this._getFindOptions(args));
    },
    /**
     * @summary Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
     * @locus Anywhere
     * @method findOne
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} [selector] A query describing the documents to find
     * @param {Object} [options]
     * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)
     * @param {Number} options.skip Number of results to skip at the beginning
     * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
     * @param {Boolean} options.reactive (Client only) Default true; pass false to disable reactivity
     * @param {Function} options.transform Overrides `transform` on the [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
     * @param {String} options.readPreference (Server only) Specifies a custom MongoDB [`readPreference`](https://docs.mongodb.com/manual/core/read-preference) for fetching the document. Possible values are `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred` and `nearest`.
     * @returns {Object}
     */
    findOne() {
      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('findOne', this._name, this.findOne.isCalledFromAsync);
      this.findOne.isCalledFromAsync = false;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this._collection.findOne(this._getFindSelector(args), this._getFindOptions(args));
    }
  });
  Object.assign(Mongo.Collection, {
    _publishCursor(cursor, sub, collection) {
      var observeHandle = cursor.observeChanges({
        added: function (id, fields) {
          sub.added(collection, id, fields);
        },
        changed: function (id, fields) {
          sub.changed(collection, id, fields);
        },
        removed: function (id) {
          sub.removed(collection, id);
        }
      },
      // Publications don't mutate the documents
      // This is tested by the `livedata - publish callbacks clone` test
      {
        nonMutatingCallbacks: true
      });

      // We don't call sub.ready() here: it gets called in livedata_server, after
      // possibly calling _publishCursor on multiple returned cursors.

      // register stop callback (expects lambda w/ no args).
      sub.onStop(function () {
        observeHandle.stop();
      });

      // return the observeHandle in case it needs to be stopped early
      return observeHandle;
    },
    // protect against dangerous selectors.  falsey and {_id: falsey} are both
    // likely programmer error, and not what you want, particularly for destructive
    // operations. If a falsey _id is sent in, a new string _id will be
    // generated and returned; if a fallbackId is provided, it will be returned
    // instead.
    _rewriteSelector(selector) {
      let {
        fallbackId
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // shorthand -- scalars match _id
      if (LocalCollection._selectorIsId(selector)) selector = {
        _id: selector
      };
      if (Array.isArray(selector)) {
        // This is consistent with the Mongo console itself; if we don't do this
        // check passing an empty array ends up selecting all items
        throw new Error("Mongo selector can't be an array.");
      }
      if (!selector || '_id' in selector && !selector._id) {
        // can't match anything
        return {
          _id: fallbackId || Random.id()
        };
      }
      return selector;
    }
  });
  Object.assign(Mongo.Collection.prototype, {
    // 'insert' immediately returns the inserted document's new _id.
    // The others return values immediately if you are in a stub, an in-memory
    // unmanaged collection, or a mongo-backed collection and you don't pass a
    // callback. 'update' and 'remove' return the number of affected
    // documents. 'upsert' returns an object with keys 'numberAffected' and, if an
    // insert happened, 'insertedId'.
    //
    // Otherwise, the semantics are exactly like other methods: they take
    // a callback as an optional last argument; if no callback is
    // provided, they block until the operation is complete, and throw an
    // exception if it fails; if a callback is provided, then they don't
    // necessarily block, and they call the callback when they finish with error and
    // result arguments.  (The insert method provides the document ID as its result;
    // update and remove provide the number of affected docs as the result; upsert
    // provides an object with numberAffected and maybe insertedId.)
    //
    // On the client, blocking is impossible, so if a callback
    // isn't provided, they just return immediately and any error
    // information is lost.
    //
    // There's one more tweak. On the client, if you don't provide a
    // callback, then if there is an error, a message will be logged with
    // Meteor._debug.
    //
    // The intent (though this is actually determined by the underlying
    // drivers) is that the operations should be done synchronously, not
    // generating their result until the database has acknowledged
    // them. In the future maybe we should provide a flag to turn this
    // off.

    /**
     * @summary Insert a document in the collection.  Returns its unique _id.
     * @locus Anywhere
     * @method  insert
     * @memberof Mongo.Collection
     * @instance
     * @param {Object} doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
     * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the _id as the second.
     */
    insert(doc, callback) {
      // Make sure we were passed a document to insert
      if (!doc) {
        throw new Error('insert requires an argument');
      }

      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('insert', this._name, this.insert.isCalledFromAsync);
      this.insert.isCalledFromAsync = false;

      // Make a shallow clone of the document, preserving its prototype.
      doc = Object.create(Object.getPrototypeOf(doc), Object.getOwnPropertyDescriptors(doc));
      if ('_id' in doc) {
        if (!doc._id || !(typeof doc._id === 'string' || doc._id instanceof Mongo.ObjectID)) {
          throw new Error('Meteor requires document _id fields to be non-empty strings or ObjectIDs');
        }
      } else {
        let generateId = true;

        // Don't generate the id if we're the client and the 'outermost' call
        // This optimization saves us passing both the randomSeed and the id
        // Passing both is redundant.
        if (this._isRemoteCollection()) {
          const enclosing = DDP._CurrentMethodInvocation.get();
          if (!enclosing) {
            generateId = false;
          }
        }
        if (generateId) {
          doc._id = this._makeNewID();
        }
      }

      // On inserts, always return the id that we generated; on all other
      // operations, just return the result from the collection.
      var chooseReturnValueFromCollectionResult = function (result) {
        if (doc._id) {
          return doc._id;
        }

        // XXX what is this for??
        // It's some iteraction between the callback to _callMutatorMethod and
        // the return value conversion
        doc._id = result;
        return result;
      };
      const wrappedCallback = wrapCallback(callback, chooseReturnValueFromCollectionResult);
      if (this._isRemoteCollection()) {
        const result = this._callMutatorMethod('insert', [doc], wrappedCallback);
        return chooseReturnValueFromCollectionResult(result);
      }

      // it's my collection.  descend into the collection object
      // and propagate any exception.
      try {
        // If the user provided a callback and the collection implements this
        // operation asynchronously, then queryRet will be undefined, and the
        // result will be returned through the callback instead.
        const result = this._collection.insert(doc, wrappedCallback);
        return chooseReturnValueFromCollectionResult(result);
      } catch (e) {
        if (callback) {
          callback(e);
          return null;
        }
        throw e;
      }
    },
    /**
     * @summary Modify one or more documents in the collection. Returns the number of matched documents.
     * @locus Anywhere
     * @method update
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} selector Specifies which documents to modify
     * @param {MongoModifier} modifier Specifies how to modify the documents
     * @param {Object} [options]
     * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
     * @param {Boolean} options.upsert True to insert a document if no matching documents are found.
     * @param {Array} options.arrayFilters Optional. Used in combination with MongoDB [filtered positional operator](https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/) to specify which elements to modify in an array field.
     * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
     */
    update(selector, modifier) {
      for (var _len3 = arguments.length, optionsAndCallback = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        optionsAndCallback[_key3 - 2] = arguments[_key3];
      }
      const callback = popCallbackFromArgs(optionsAndCallback);

      // We've already popped off the callback, so we are left with an array
      // of one or zero items
      const options = _objectSpread({}, optionsAndCallback[0] || null);
      let insertedId;
      if (options && options.upsert) {
        // set `insertedId` if absent.  `insertedId` is a Meteor extension.
        if (options.insertedId) {
          if (!(typeof options.insertedId === 'string' || options.insertedId instanceof Mongo.ObjectID)) throw new Error('insertedId must be string or ObjectID');
          insertedId = options.insertedId;
        } else if (!selector || !selector._id) {
          insertedId = this._makeNewID();
          options.generatedId = true;
          options.insertedId = insertedId;
        }
      }

      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('update', this._name, this.update.isCalledFromAsync);
      this.update.isCalledFromAsync = false;
      selector = Mongo.Collection._rewriteSelector(selector, {
        fallbackId: insertedId
      });
      const wrappedCallback = wrapCallback(callback);
      if (this._isRemoteCollection()) {
        const args = [selector, modifier, options];
        return this._callMutatorMethod('update', args, wrappedCallback);
      }

      // it's my collection.  descend into the collection object
      // and propagate any exception.
      try {
        // If the user provided a callback and the collection implements this
        // operation asynchronously, then queryRet will be undefined, and the
        // result will be returned through the callback instead.
        return this._collection.update(selector, modifier, options, wrappedCallback);
      } catch (e) {
        if (callback) {
          callback(e);
          return null;
        }
        throw e;
      }
    },
    /**
     * @summary Remove documents from the collection
     * @locus Anywhere
     * @method remove
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} selector Specifies which documents to remove
     * @param {Function} [callback] Optional.  If present, called with an error object as its argument.
     */
    remove(selector, callback) {
      selector = Mongo.Collection._rewriteSelector(selector);
      const wrappedCallback = wrapCallback(callback);
      if (this._isRemoteCollection()) {
        return this._callMutatorMethod('remove', [selector], wrappedCallback);
      }

      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('remove', this._name, this.remove.isCalledFromAsync);
      this.remove.isCalledFromAsync = false;
      // it's my collection.  descend into the collection object
      // and propagate any exception.
      try {
        // If the user provided a callback and the collection implements this
        // operation asynchronously, then queryRet will be undefined, and the
        // result will be returned through the callback instead.
        return this._collection.remove(selector, wrappedCallback);
      } catch (e) {
        if (callback) {
          callback(e);
          return null;
        }
        throw e;
      }
    },
    // Determine if this collection is simply a minimongo representation of a real
    // database on another server
    _isRemoteCollection() {
      // XXX see #MeteorServerNull
      return this._connection && this._connection !== Meteor.server;
    },
    /**
     * @summary Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified)  and `insertedId` (the unique _id of the document that was inserted, if any).
     * @locus Anywhere
     * @method upsert
     * @memberof Mongo.Collection
     * @instance
     * @param {MongoSelector} selector Specifies which documents to modify
     * @param {MongoModifier} modifier Specifies how to modify the documents
     * @param {Object} [options]
     * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
     * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
     */
    upsert(selector, modifier, options, callback) {
      if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
      }

      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('upsert', this._name, this.upsert.isCalledFromAsync);
      this.upsert.isCalledFromAsync = false;
      // caught here https://github.com/meteor/meteor/issues/12626
      this.update.isCalledFromAsync = true; // to not trigger on the next call
      return this.update(selector, modifier, _objectSpread(_objectSpread({}, options), {}, {
        _returnObject: true,
        upsert: true
      }), callback);
    },
    // We'll actually design an index API later. For now, we just pass through to
    // Mongo's, but make it synchronous.
    _ensureIndex(index, options) {
      var self = this;
      if (!self._collection._ensureIndex || !self._collection.createIndex) throw new Error('Can only call createIndex on server collections');
      if (self._collection.createIndex) {
        self._collection.createIndex(index, options);
      } else {
        let Log;
        module1.link("meteor/logging", {
          Log(v) {
            Log = v;
          }
        }, 2);
        Log.debug("_ensureIndex has been deprecated, please use the new 'createIndex' instead".concat(options !== null && options !== void 0 && options.name ? ", index name: ".concat(options.name) : ", index: ".concat(JSON.stringify(index))));
        self._collection._ensureIndex(index, options);
      }
    },
    /**
     * @summary Creates the specified index on the collection.
     * @locus server
     * @method createIndex
     * @memberof Mongo.Collection
     * @instance
     * @param {Object} index A document that contains the field and value pairs where the field is the index key and the value describes the type of index for that field. For an ascending index on a field, specify a value of `1`; for descending index, specify a value of `-1`. Use `text` for text indexes.
     * @param {Object} [options] All options are listed in [MongoDB documentation](https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#options)
     * @param {String} options.name Name of the index
     * @param {Boolean} options.unique Define that the index values must be unique, more at [MongoDB documentation](https://docs.mongodb.com/manual/core/index-unique/)
     * @param {Boolean} options.sparse Define that the index is sparse, more at [MongoDB documentation](https://docs.mongodb.com/manual/core/index-sparse/)
     */
    createIndex(index, options) {
      var self = this;
      if (!self._collection.createIndex) throw new Error('Can only call createIndex on server collections');
      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('createIndex', self._name, self.createIndex.isCalledFromAsync);
      self.createIndex.isCalledFromAsync = false;
      try {
        self._collection.createIndex(index, options);
      } catch (e) {
        var _Meteor$settings, _Meteor$settings$pack, _Meteor$settings$pack2;
        if (e.message.includes('An equivalent index already exists with the same name but different options.') && (_Meteor$settings = Meteor.settings) !== null && _Meteor$settings !== void 0 && (_Meteor$settings$pack = _Meteor$settings.packages) !== null && _Meteor$settings$pack !== void 0 && (_Meteor$settings$pack2 = _Meteor$settings$pack.mongo) !== null && _Meteor$settings$pack2 !== void 0 && _Meteor$settings$pack2.reCreateIndexOnOptionMismatch) {
          let Log;
          module1.link("meteor/logging", {
            Log(v) {
              Log = v;
            }
          }, 3);
          Log.info("Re-creating index ".concat(index, " for ").concat(self._name, " due to options mismatch."));
          self._collection._dropIndex(index);
          self._collection.createIndex(index, options);
        } else {
          throw new Meteor.Error("An error occurred when creating an index for collection \"".concat(self._name, ": ").concat(e.message));
        }
      }
    },
    _dropIndex(index) {
      var self = this;
      if (!self._collection._dropIndex) throw new Error('Can only call _dropIndex on server collections');
      self._collection._dropIndex(index);
    },
    _dropCollection() {
      var self = this;
      if (!self._collection.dropCollection) throw new Error('Can only call _dropCollection on server collections');
      self._collection.dropCollection();
    },
    _createCappedCollection(byteSize, maxDocuments) {
      var self = this;
      if (!self._collection._createCappedCollection) throw new Error('Can only call _createCappedCollection on server collections');

      // [FIBERS]
      // TODO: Remove this when 3.0 is released.
      warnUsingOldApi('_createCappedCollection', self._name, self._createCappedCollection.isCalledFromAsync);
      self._createCappedCollection.isCalledFromAsync = false;
      self._collection._createCappedCollection(byteSize, maxDocuments);
    },
    /**
     * @summary Returns the [`Collection`](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html) object corresponding to this collection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
     * @locus Server
     * @memberof Mongo.Collection
     * @instance
     */
    rawCollection() {
      var self = this;
      if (!self._collection.rawCollection) {
        throw new Error('Can only call rawCollection on server collections');
      }
      return self._collection.rawCollection();
    },
    /**
     * @summary Returns the [`Db`](http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html) object corresponding to this collection's database connection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
     * @locus Server
     * @memberof Mongo.Collection
     * @instance
     */
    rawDatabase() {
      var self = this;
      if (!(self._driver.mongo && self._driver.mongo.db)) {
        throw new Error('Can only call rawDatabase on server collections');
      }
      return self._driver.mongo.db;
    }
  });

  // Convert the callback to not return a result if there is an error
  function wrapCallback(callback, convertResult) {
    return callback && function (error, result) {
      if (error) {
        callback(error);
      } else if (typeof convertResult === 'function') {
        callback(error, convertResult(result));
      } else {
        callback(error, result);
      }
    };
  }

  /**
   * @summary Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will be generated randomly (not using MongoDB's ID construction rules).
   * @locus Anywhere
   * @class
   * @param {String} [hexString] Optional.  The 24-character hexadecimal contents of the ObjectID to create
   */
  Mongo.ObjectID = MongoID.ObjectID;

  /**
   * @summary To create a cursor, use find. To access the documents in a cursor, use forEach, map, or fetch.
   * @class
   * @instanceName cursor
   */
  Mongo.Cursor = LocalCollection.Cursor;

  /**
   * @deprecated in 0.9.1
   */
  Mongo.Collection.Cursor = Mongo.Cursor;

  /**
   * @deprecated in 0.9.1
   */
  Mongo.Collection.ObjectID = Mongo.ObjectID;

  /**
   * @deprecated in 0.9.1
   */
  Meteor.Collection = Mongo.Collection;

  // Allow deny stuff is now in the allow-deny package
  Object.assign(Mongo.Collection.prototype, AllowDeny.CollectionPrototype);
  function popCallbackFromArgs(args) {
    // Pull off any callback (or perhaps a 'callback' variable that was passed
    // in undefined, like how 'upsert' does it).
    if (args.length && (args[args.length - 1] === undefined || args[args.length - 1] instanceof Function)) {
      return args.pop();
    }
  }
  ASYNC_COLLECTION_METHODS.forEach(methodName => {
    const methodNameAsync = getAsyncMethodName(methodName);
    Mongo.Collection.prototype[methodNameAsync] = function () {
      try {
        // TODO: Fibers remove this when we remove fibers.
        this[methodName].isCalledFromAsync = true;
        return Promise.resolve(this[methodName](...arguments));
      } catch (error) {
        return Promise.reject(error);
      }
    };
  });
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"connection_options.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/connection_options.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**
 * @summary Allows for user specified connection options
 * @example http://mongodb.github.io/node-mongodb-native/3.0/reference/connecting/connection-settings/
 * @locus Server
 * @param {Object} options User specified Mongo connection options
 */
Mongo.setConnectionOptions = function setConnectionOptions(options) {
  check(options, Object);
  Mongo._connectionOptions = options;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo_utils.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mongo/mongo_utils.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["fields", "projection"];
let _objectSpread;
module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }
}, 0);
let _objectWithoutProperties;
module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  normalizeProjection: () => normalizeProjection
});
const normalizeProjection = options => {
  // transform fields key in projection
  const _ref = options || {},
    {
      fields,
      projection
    } = _ref,
    otherOptions = _objectWithoutProperties(_ref, _excluded);
  // TODO: enable this comment when deprecating the fields option
  // Log.debug(`fields option has been deprecated, please use the new 'projection' instead`)

  return _objectSpread(_objectSpread({}, otherOptions), projection || fields ? {
    projection: fields || projection
  } : {});
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/mongo/mongo_driver.js");
require("/node_modules/meteor/mongo/oplog_tailing.js");
require("/node_modules/meteor/mongo/observe_multiplex.js");
require("/node_modules/meteor/mongo/doc_fetcher.js");
require("/node_modules/meteor/mongo/polling_observe_driver.js");
require("/node_modules/meteor/mongo/oplog_observe_driver.js");
require("/node_modules/meteor/mongo/oplog_v2_converter.js");
require("/node_modules/meteor/mongo/local_collection_driver.js");
require("/node_modules/meteor/mongo/remote_collection_driver.js");
require("/node_modules/meteor/mongo/collection.js");
require("/node_modules/meteor/mongo/connection_options.js");

/* Exports */
Package._define("mongo", {
  MongoInternals: MongoInternals,
  Mongo: Mongo,
  ObserveMultiplexer: ObserveMultiplexer
});

})();

//# sourceURL=meteor://💻app/packages/mongo.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbW9uZ28vbW9uZ29fZHJpdmVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9tb25nby9vcGxvZ190YWlsaW5nLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9tb25nby9vYnNlcnZlX211bHRpcGxleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbW9uZ28vZG9jX2ZldGNoZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL21vbmdvL3BvbGxpbmdfb2JzZXJ2ZV9kcml2ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL21vbmdvL29wbG9nX29ic2VydmVfZHJpdmVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9tb25nby9vcGxvZ192Ml9jb252ZXJ0ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL21vbmdvL2xvY2FsX2NvbGxlY3Rpb25fZHJpdmVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9tb25nby9yZW1vdGVfY29sbGVjdGlvbl9kcml2ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL21vbmdvL2NvbGxlY3Rpb24uanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL21vbmdvL2Nvbm5lY3Rpb25fb3B0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbW9uZ28vbW9uZ29fdXRpbHMuanMiXSwibmFtZXMiOlsiX29iamVjdFNwcmVhZCIsIm1vZHVsZTEiLCJsaW5rIiwiZGVmYXVsdCIsInYiLCJub3JtYWxpemVQcm9qZWN0aW9uIiwiRG9jRmV0Y2hlciIsIkFTWU5DX0NVUlNPUl9NRVRIT0RTIiwiZ2V0QXN5bmNNZXRob2ROYW1lIiwicGF0aCIsInJlcXVpcmUiLCJ1dGlsIiwiTW9uZ29EQiIsIk5wbU1vZHVsZU1vbmdvZGIiLCJGdXR1cmUiLCJOcG0iLCJNb25nb0ludGVybmFscyIsIk5wbU1vZHVsZXMiLCJtb25nb2RiIiwidmVyc2lvbiIsIk5wbU1vZHVsZU1vbmdvZGJWZXJzaW9uIiwibW9kdWxlIiwiTnBtTW9kdWxlIiwiRklMRV9BU1NFVF9TVUZGSVgiLCJBU1NFVFNfRk9MREVSIiwiQVBQX0ZPTERFUiIsInJlcGxhY2VOYW1lcyIsImZpbHRlciIsInRoaW5nIiwiXyIsImlzQXJyYXkiLCJtYXAiLCJiaW5kIiwicmV0IiwiZWFjaCIsInZhbHVlIiwia2V5IiwiVGltZXN0YW1wIiwicHJvdG90eXBlIiwiY2xvbmUiLCJtYWtlTW9uZ29MZWdhbCIsIm5hbWUiLCJ1bm1ha2VNb25nb0xlZ2FsIiwic3Vic3RyIiwicmVwbGFjZU1vbmdvQXRvbVdpdGhNZXRlb3IiLCJkb2N1bWVudCIsIkJpbmFyeSIsInN1Yl90eXBlIiwiYnVmZmVyIiwiVWludDhBcnJheSIsIk9iamVjdElEIiwiTW9uZ28iLCJ0b0hleFN0cmluZyIsIkRlY2ltYWwxMjgiLCJEZWNpbWFsIiwidG9TdHJpbmciLCJzaXplIiwiRUpTT04iLCJmcm9tSlNPTlZhbHVlIiwidW5kZWZpbmVkIiwicmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28iLCJpc0JpbmFyeSIsIkJ1ZmZlciIsImZyb20iLCJmcm9tU3RyaW5nIiwiX2lzQ3VzdG9tVHlwZSIsInRvSlNPTlZhbHVlIiwicmVwbGFjZVR5cGVzIiwiYXRvbVRyYW5zZm9ybWVyIiwicmVwbGFjZWRUb3BMZXZlbEF0b20iLCJ2YWwiLCJ2YWxSZXBsYWNlZCIsIk1vbmdvQ29ubmVjdGlvbiIsInVybCIsIm9wdGlvbnMiLCJfTWV0ZW9yJHNldHRpbmdzIiwiX01ldGVvciRzZXR0aW5ncyRwYWNrIiwiX01ldGVvciRzZXR0aW5ncyRwYWNrMiIsInNlbGYiLCJfb2JzZXJ2ZU11bHRpcGxleGVycyIsIl9vbkZhaWxvdmVySG9vayIsIkhvb2siLCJ1c2VyT3B0aW9ucyIsIl9jb25uZWN0aW9uT3B0aW9ucyIsIk1ldGVvciIsInNldHRpbmdzIiwicGFja2FnZXMiLCJtb25nbyIsIm1vbmdvT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImlnbm9yZVVuZGVmaW5lZCIsImhhcyIsIm1heFBvb2xTaXplIiwibWluUG9vbFNpemUiLCJlbnRyaWVzIiwiX3JlZiIsImVuZHNXaXRoIiwiZm9yRWFjaCIsIl9yZWYyIiwib3B0aW9uTmFtZSIsInJlcGxhY2UiLCJqb2luIiwiQXNzZXRzIiwiZ2V0U2VydmVyRGlyIiwiZGIiLCJfb3Bsb2dIYW5kbGUiLCJfZG9jRmV0Y2hlciIsImNsaWVudCIsIk1vbmdvQ2xpZW50Iiwib24iLCJiaW5kRW52aXJvbm1lbnQiLCJldmVudCIsInByZXZpb3VzRGVzY3JpcHRpb24iLCJ0eXBlIiwibmV3RGVzY3JpcHRpb24iLCJjYWxsYmFjayIsIm9wbG9nVXJsIiwiUGFja2FnZSIsIk9wbG9nSGFuZGxlIiwiZGF0YWJhc2VOYW1lIiwiUHJvbWlzZSIsImF3YWl0IiwiY29ubmVjdCIsImNsb3NlIiwiRXJyb3IiLCJvcGxvZ0hhbmRsZSIsInN0b3AiLCJ3cmFwIiwid2FpdCIsIl9zZXRPcGxvZ0hhbmRsZSIsInJhd0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb24iLCJfY3JlYXRlQ2FwcGVkQ29sbGVjdGlvbiIsImJ5dGVTaXplIiwibWF4RG9jdW1lbnRzIiwiZnV0dXJlIiwiY3JlYXRlQ29sbGVjdGlvbiIsImNhcHBlZCIsIm1heCIsInJlc29sdmVyIiwiX21heWJlQmVnaW5Xcml0ZSIsImZlbmNlIiwiRERQU2VydmVyIiwiX0N1cnJlbnRXcml0ZUZlbmNlIiwiZ2V0IiwiYmVnaW5Xcml0ZSIsImNvbW1pdHRlZCIsIl9vbkZhaWxvdmVyIiwicmVnaXN0ZXIiLCJ3cml0ZUNhbGxiYWNrIiwid3JpdGUiLCJyZWZyZXNoIiwiZXJyIiwicmVzdWx0IiwicmVmcmVzaEVyciIsImJpbmRFbnZpcm9ubWVudEZvcldyaXRlIiwiX2luc2VydCIsImNvbGxlY3Rpb25fbmFtZSIsInNlbmRFcnJvciIsImUiLCJfZXhwZWN0ZWRCeVRlc3QiLCJMb2NhbENvbGxlY3Rpb24iLCJfaXNQbGFpbk9iamVjdCIsImlkIiwiX2lkIiwiaW5zZXJ0T25lIiwic2FmZSIsInRoZW4iLCJfcmVmMyIsImluc2VydGVkSWQiLCJjYXRjaCIsIl9yZWZyZXNoIiwic2VsZWN0b3IiLCJyZWZyZXNoS2V5Iiwic3BlY2lmaWNJZHMiLCJfaWRzTWF0Y2hlZEJ5U2VsZWN0b3IiLCJleHRlbmQiLCJfcmVtb3ZlIiwiZGVsZXRlTWFueSIsIl9yZWY0IiwiZGVsZXRlZENvdW50IiwidHJhbnNmb3JtUmVzdWx0IiwibW9kaWZpZWRDb3VudCIsIm51bWJlckFmZmVjdGVkIiwiX2Ryb3BDb2xsZWN0aW9uIiwiY2IiLCJkcm9wQ29sbGVjdGlvbiIsImRyb3AiLCJfZHJvcERhdGFiYXNlIiwiZHJvcERhdGFiYXNlIiwiX3VwZGF0ZSIsIm1vZCIsIkZ1bmN0aW9uIiwibW9uZ29PcHRzIiwiYXJyYXlGaWx0ZXJzIiwidXBzZXJ0IiwibXVsdGkiLCJmdWxsUmVzdWx0IiwibW9uZ29TZWxlY3RvciIsIm1vbmdvTW9kIiwiaXNNb2RpZnkiLCJfaXNNb2RpZmljYXRpb25Nb2QiLCJfZm9yYmlkUmVwbGFjZSIsImtub3duSWQiLCJuZXdEb2MiLCJfY3JlYXRlVXBzZXJ0RG9jdW1lbnQiLCJnZW5lcmF0ZWRJZCIsInNpbXVsYXRlVXBzZXJ0V2l0aEluc2VydGVkSWQiLCJlcnJvciIsIl9yZXR1cm5PYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIiRzZXRPbkluc2VydCIsInN0cmluZ3MiLCJrZXlzIiwic3RhcnRzV2l0aCIsInVwZGF0ZU1ldGhvZCIsImxlbmd0aCIsImFyZ3VtZW50cyIsIm1ldGVvclJlc3VsdCIsImRyaXZlclJlc3VsdCIsIm1vbmdvUmVzdWx0IiwidXBzZXJ0ZWRDb3VudCIsInVwc2VydGVkSWQiLCJuIiwibWF0Y2hlZENvdW50IiwiTlVNX09QVElNSVNUSUNfVFJJRVMiLCJfaXNDYW5ub3RDaGFuZ2VJZEVycm9yIiwiZXJybXNnIiwiaW5kZXhPZiIsIm1vbmdvT3B0c0ZvclVwZGF0ZSIsIm1vbmdvT3B0c0Zvckluc2VydCIsInJlcGxhY2VtZW50V2l0aElkIiwidHJpZXMiLCJkb1VwZGF0ZSIsIm1ldGhvZCIsInVwZGF0ZU1hbnkiLCJzb21lIiwicmVwbGFjZU9uZSIsImRvQ29uZGl0aW9uYWxJbnNlcnQiLCJ3cmFwQXN5bmMiLCJhcHBseSIsInVwZGF0ZSIsImZpbmQiLCJDdXJzb3IiLCJDdXJzb3JEZXNjcmlwdGlvbiIsImZpbmRPbmVBc3luYyIsImFzeW5jQXBwbHkiLCJsaW1pdCIsImZldGNoQXN5bmMiLCJmaW5kT25lIiwiZnJvbVByb21pc2UiLCJjcmVhdGVJbmRleEFzeW5jIiwiaW5kZXgiLCJjcmVhdGVJbmRleCIsImNvdW50RG9jdW1lbnRzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcmciLCJlc3RpbWF0ZWREb2N1bWVudENvdW50IiwiX2xlbjIiLCJfa2V5MiIsIl9lbnN1cmVJbmRleCIsIl9kcm9wSW5kZXgiLCJpbmRleE5hbWUiLCJkcm9wSW5kZXgiLCJDb2xsZWN0aW9uIiwiX3Jld3JpdGVTZWxlY3RvciIsImN1cnNvckRlc2NyaXB0aW9uIiwiX21vbmdvIiwiX2N1cnNvckRlc2NyaXB0aW9uIiwiX3N5bmNocm9ub3VzQ3Vyc29yIiwic2V0dXBTeW5jaHJvbm91c0N1cnNvciIsImN1cnNvciIsInRhaWxhYmxlIiwiX2NyZWF0ZVN5bmNocm9ub3VzQ3Vyc29yIiwic2VsZkZvckl0ZXJhdGlvbiIsInVzZVRyYW5zZm9ybSIsImNvdW50IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwibWV0aG9kTmFtZSIsIm1ldGhvZE5hbWVBc3luYyIsImlzQ2FsbGVkRnJvbUFzeW5jIiwicmVzb2x2ZSIsInJlamVjdCIsImdldFRyYW5zZm9ybSIsInRyYW5zZm9ybSIsIl9wdWJsaXNoQ3Vyc29yIiwic3ViIiwiX2dldENvbGxlY3Rpb25OYW1lIiwib2JzZXJ2ZSIsImNhbGxiYWNrcyIsIl9vYnNlcnZlRnJvbU9ic2VydmVDaGFuZ2VzIiwib2JzZXJ2ZUFzeW5jIiwib2JzZXJ2ZUNoYW5nZXMiLCJtZXRob2RzIiwib3JkZXJlZCIsIl9vYnNlcnZlQ2hhbmdlc0NhbGxiYWNrc0FyZU9yZGVyZWQiLCJleGNlcHRpb25OYW1lIiwiX2Zyb21PYnNlcnZlIiwiX29ic2VydmVDaGFuZ2VzIiwibm9uTXV0YXRpbmdDYWxsYmFja3MiLCJvYnNlcnZlQ2hhbmdlc0FzeW5jIiwicGljayIsImN1cnNvck9wdGlvbnMiLCJzb3J0Iiwic2tpcCIsInByb2plY3Rpb24iLCJmaWVsZHMiLCJyZWFkUHJlZmVyZW5jZSIsIm51bWJlck9mUmV0cmllcyIsImRiQ3Vyc29yIiwiYWRkQ3Vyc29yRmxhZyIsIk9QTE9HX0NPTExFQ1RJT04iLCJ0cyIsIm1heFRpbWVNcyIsIm1heFRpbWVNUyIsImhpbnQiLCJTeW5jaHJvbm91c0N1cnNvciIsIl9kYkN1cnNvciIsIl9zZWxmRm9ySXRlcmF0aW9uIiwiX3RyYW5zZm9ybSIsIndyYXBUcmFuc2Zvcm0iLCJfc3luY2hyb25vdXNDb3VudCIsIl92aXNpdGVkSWRzIiwiX0lkTWFwIiwiX3Jhd05leHRPYmplY3RQcm9taXNlIiwibmV4dCIsImRvYyIsIl9uZXh0T2JqZWN0UHJvbWlzZSIsInNldCIsIl9uZXh0T2JqZWN0UHJvbWlzZVdpdGhUaW1lb3V0IiwidGltZW91dE1TIiwibmV4dE9iamVjdFByb21pc2UiLCJ0aW1lb3V0RXJyIiwidGltZW91dFByb21pc2UiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyYWNlIiwiX25leHRPYmplY3QiLCJ0aGlzQXJnIiwid3JhcHBlZEZuIiwid3JhcEZuIiwiX3Jld2luZCIsImNhbGwiLCJyZXMiLCJwdXNoIiwicmV3aW5kIiwiZmV0Y2giLCJpZGVudGl0eSIsImdldFJhd09iamVjdHMiLCJyZXN1bHRzIiwiZG9uZSIsInN5bmNSZXN1bHQiLCJ0YWlsIiwiZG9jQ2FsbGJhY2siLCJzdG9wcGVkIiwibGFzdFRTIiwibG9vcCIsIm5ld1NlbGVjdG9yIiwiJGd0IiwiZGVmZXIiLCJvcGxvZ0NvbGxlY3Rpb25XYXJuaW5ncyIsIl9zZWxmJF9vcGxvZ0hhbmRsZSIsIl9vYnNlcnZlQ2hhbmdlc1RhaWxhYmxlIiwiZmllbGRzT3B0aW9ucyIsIm9ic2VydmVLZXkiLCJzdHJpbmdpZnkiLCJtdWx0aXBsZXhlciIsIm9ic2VydmVEcml2ZXIiLCJmaXJzdEhhbmRsZSIsIl9ub1lpZWxkc0FsbG93ZWQiLCJPYnNlcnZlTXVsdGlwbGV4ZXIiLCJvblN0b3AiLCJvYnNlcnZlSGFuZGxlIiwiT2JzZXJ2ZUhhbmRsZSIsIm9wbG9nT3B0aW9ucyIsIl9vcGxvZ09wdGlvbnMiLCJpbmNsdWRlQ29sbGVjdGlvbnMiLCJleGNsdWRlQ29sbGVjdGlvbnMiLCJtYXRjaGVyIiwic29ydGVyIiwiY2FuVXNlT3Bsb2ciLCJhbGwiLCJfdGVzdE9ubHlQb2xsQ2FsbGJhY2siLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwiTWluaW1vbmdvIiwiTWF0Y2hlciIsIk9wbG9nT2JzZXJ2ZURyaXZlciIsImN1cnNvclN1cHBvcnRlZCIsIlNvcnRlciIsImYiLCJkcml2ZXJDbGFzcyIsIlBvbGxpbmdPYnNlcnZlRHJpdmVyIiwibW9uZ29IYW5kbGUiLCJfb2JzZXJ2ZURyaXZlciIsImFkZEhhbmRsZUFuZFNlbmRJbml0aWFsQWRkcyIsImxpc3RlbkFsbCIsImxpc3RlbkNhbGxiYWNrIiwibGlzdGVuZXJzIiwiZm9yRWFjaFRyaWdnZXIiLCJ0cmlnZ2VyIiwiX0ludmFsaWRhdGlvbkNyb3NzYmFyIiwibGlzdGVuIiwibGlzdGVuZXIiLCJ0cmlnZ2VyQ2FsbGJhY2siLCJhZGRlZEJlZm9yZSIsImFkZGVkIiwiTW9uZ29UaW1lc3RhbXAiLCJDb25uZWN0aW9uIiwiTG9uZyIsIlRPT19GQVJfQkVISU5EIiwicHJvY2VzcyIsImVudiIsIk1FVEVPUl9PUExPR19UT09fRkFSX0JFSElORCIsIlRBSUxfVElNRU9VVCIsIk1FVEVPUl9PUExPR19UQUlMX1RJTUVPVVQiLCJzaG93VFMiLCJnZXRIaWdoQml0cyIsImdldExvd0JpdHMiLCJpZEZvck9wIiwib3AiLCJvIiwibzIiLCJkYk5hbWUiLCJfb3Bsb2dVcmwiLCJfZGJOYW1lIiwiX29wbG9nTGFzdEVudHJ5Q29ubmVjdGlvbiIsIl9vcGxvZ1RhaWxDb25uZWN0aW9uIiwiX3N0b3BwZWQiLCJfdGFpbEhhbmRsZSIsIl9yZWFkeUZ1dHVyZSIsIl9jcm9zc2JhciIsIl9Dcm9zc2JhciIsImZhY3RQYWNrYWdlIiwiZmFjdE5hbWUiLCJfYmFzZU9wbG9nU2VsZWN0b3IiLCJucyIsIlJlZ0V4cCIsIl9lc2NhcGVSZWdFeHAiLCIkb3IiLCIkaW4iLCIkZXhpc3RzIiwiX2NhdGNoaW5nVXBGdXR1cmVzIiwiX2xhc3RQcm9jZXNzZWRUUyIsIl9vblNraXBwZWRFbnRyaWVzSG9vayIsImRlYnVnUHJpbnRFeGNlcHRpb25zIiwiX2VudHJ5UXVldWUiLCJfRG91YmxlRW5kZWRRdWV1ZSIsIl93b3JrZXJBY3RpdmUiLCJfc3RhcnRUYWlsaW5nIiwib25PcGxvZ0VudHJ5Iiwib3JpZ2luYWxDYWxsYmFjayIsIm5vdGlmaWNhdGlvbiIsIl9kZWJ1ZyIsImxpc3RlbkhhbmRsZSIsIm9uU2tpcHBlZEVudHJpZXMiLCJ3YWl0VW50aWxDYXVnaHRVcCIsImxhc3RFbnRyeSIsIiRuYXR1cmFsIiwiX3NsZWVwRm9yTXMiLCJsZXNzVGhhbk9yRXF1YWwiLCJpbnNlcnRBZnRlciIsImdyZWF0ZXJUaGFuIiwic3BsaWNlIiwiX01ldGVvciRzZXR0aW5nczIiLCJfTWV0ZW9yJHNldHRpbmdzMiRwYWMiLCJfTWV0ZW9yJHNldHRpbmdzMiRwYWMyIiwibW9uZ29kYlVyaSIsInBhcnNlIiwiZGF0YWJhc2UiLCJhZG1pbiIsImNvbW1hbmQiLCJpc21hc3RlciIsImlzTWFzdGVyRG9jIiwic2V0TmFtZSIsImxhc3RPcGxvZ0VudHJ5Iiwib3Bsb2dTZWxlY3RvciIsIm9wbG9nSW5jbHVkZUNvbGxlY3Rpb25zIiwib3Bsb2dFeGNsdWRlQ29sbGVjdGlvbnMiLCIkcmVnZXgiLCIkbmluIiwiY29sbE5hbWUiLCIkYW5kIiwiX21heWJlU3RhcnRXb3JrZXIiLCJyZXR1cm4iLCJoYW5kbGVEb2MiLCJhcHBseU9wcyIsIm5leHRUaW1lc3RhbXAiLCJhZGQiLCJPTkUiLCJzbGljZSIsImZpcmUiLCJpc0VtcHR5IiwicG9wIiwiY2xlYXIiLCJfc2V0TGFzdFByb2Nlc3NlZFRTIiwic2hpZnQiLCJzZXF1ZW5jZXIiLCJfZGVmaW5lVG9vRmFyQmVoaW5kIiwiX3Jlc2V0VG9vRmFyQmVoaW5kIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiRmFjdHMiLCJpbmNyZW1lbnRTZXJ2ZXJGYWN0IiwiX29yZGVyZWQiLCJfb25TdG9wIiwiX3F1ZXVlIiwiX1N5bmNocm9ub3VzUXVldWUiLCJfaGFuZGxlcyIsIl9jYWNoZSIsIl9DYWNoaW5nQ2hhbmdlT2JzZXJ2ZXIiLCJfYWRkSGFuZGxlVGFza3NTY2hlZHVsZWRCdXROb3RQZXJmb3JtZWQiLCJjYWxsYmFja05hbWVzIiwiY2FsbGJhY2tOYW1lIiwiX2FwcGx5Q2FsbGJhY2siLCJ0b0FycmF5IiwiaGFuZGxlIiwic2FmZVRvUnVuVGFzayIsInJ1blRhc2siLCJfc2VuZEFkZHMiLCJyZW1vdmVIYW5kbGUiLCJfcmVhZHkiLCJfc3RvcCIsImZyb21RdWVyeUVycm9yIiwicmVhZHkiLCJxdWV1ZVRhc2siLCJxdWVyeUVycm9yIiwidGhyb3ciLCJvbkZsdXNoIiwiaXNSZXNvbHZlZCIsImFwcGx5Q2hhbmdlIiwiaGFuZGxlSWQiLCJfYWRkZWRCZWZvcmUiLCJfYWRkZWQiLCJkb2NzIiwiX2V4Y2x1ZGVkIiwibmV4dE9ic2VydmVIYW5kbGVJZCIsIl9tdWx0aXBsZXhlciIsImJlZm9yZSIsImV4cG9ydCIsIkZpYmVyIiwiY29uc3RydWN0b3IiLCJtb25nb0Nvbm5lY3Rpb24iLCJfbW9uZ29Db25uZWN0aW9uIiwiX2NhbGxiYWNrc0Zvck9wIiwiTWFwIiwiY2hlY2siLCJTdHJpbmciLCJkZWxldGUiLCJydW4iLCJQT0xMSU5HX1RIUk9UVExFX01TIiwiTUVURU9SX1BPTExJTkdfVEhST1RUTEVfTVMiLCJQT0xMSU5HX0lOVEVSVkFMX01TIiwiTUVURU9SX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfbW9uZ29IYW5kbGUiLCJfc3RvcENhbGxiYWNrcyIsIl9yZXN1bHRzIiwiX3BvbGxzU2NoZWR1bGVkQnV0Tm90U3RhcnRlZCIsIl9wZW5kaW5nV3JpdGVzIiwiX2Vuc3VyZVBvbGxJc1NjaGVkdWxlZCIsInRocm90dGxlIiwiX3VudGhyb3R0bGVkRW5zdXJlUG9sbElzU2NoZWR1bGVkIiwicG9sbGluZ1Rocm90dGxlTXMiLCJfdGFza1F1ZXVlIiwibGlzdGVuZXJzSGFuZGxlIiwicG9sbGluZ0ludGVydmFsIiwicG9sbGluZ0ludGVydmFsTXMiLCJfcG9sbGluZ0ludGVydmFsIiwiaW50ZXJ2YWxIYW5kbGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJfcG9sbE1vbmdvIiwiX3N1c3BlbmRQb2xsaW5nIiwiX3Jlc3VtZVBvbGxpbmciLCJmaXJzdCIsIm5ld1Jlc3VsdHMiLCJvbGRSZXN1bHRzIiwid3JpdGVzRm9yQ3ljbGUiLCJjb2RlIiwiSlNPTiIsIm1lc3NhZ2UiLCJfZGlmZlF1ZXJ5Q2hhbmdlcyIsInciLCJjIiwib3Bsb2dWMlYxQ29udmVydGVyIiwiUEhBU0UiLCJRVUVSWUlORyIsIkZFVENISU5HIiwiU1RFQURZIiwiU3dpdGNoZWRUb1F1ZXJ5IiwiZmluaXNoSWZOZWVkVG9Qb2xsUXVlcnkiLCJjdXJyZW50SWQiLCJfdXNlc09wbG9nIiwiY29tcGFyYXRvciIsImdldENvbXBhcmF0b3IiLCJoZWFwT3B0aW9ucyIsIklkTWFwIiwiX2xpbWl0IiwiX2NvbXBhcmF0b3IiLCJfc29ydGVyIiwiX3VucHVibGlzaGVkQnVmZmVyIiwiTWluTWF4SGVhcCIsIl9wdWJsaXNoZWQiLCJNYXhIZWFwIiwiX3NhZmVBcHBlbmRUb0J1ZmZlciIsIl9zdG9wSGFuZGxlcyIsIl9yZWdpc3RlclBoYXNlQ2hhbmdlIiwiX21hdGNoZXIiLCJfcHJvamVjdGlvbkZuIiwiX2NvbXBpbGVQcm9qZWN0aW9uIiwiX3NoYXJlZFByb2plY3Rpb24iLCJjb21iaW5lSW50b1Byb2plY3Rpb24iLCJfc2hhcmVkUHJvamVjdGlvbkZuIiwiX25lZWRUb0ZldGNoIiwiX2N1cnJlbnRseUZldGNoaW5nIiwiX2ZldGNoR2VuZXJhdGlvbiIsIl9yZXF1ZXJ5V2hlbkRvbmVUaGlzUXVlcnkiLCJfd3JpdGVzVG9Db21taXRXaGVuV2VSZWFjaFN0ZWFkeSIsIl9uZWVkVG9Qb2xsUXVlcnkiLCJfcGhhc2UiLCJfaGFuZGxlT3Bsb2dFbnRyeVF1ZXJ5aW5nIiwiX2hhbmRsZU9wbG9nRW50cnlTdGVhZHlPckZldGNoaW5nIiwiZmlyZWQiLCJfb3Bsb2dPYnNlcnZlRHJpdmVycyIsIm9uQmVmb3JlRmlyZSIsImRyaXZlcnMiLCJkcml2ZXIiLCJfcnVuSW5pdGlhbFF1ZXJ5IiwiX2FkZFB1Ymxpc2hlZCIsIm92ZXJmbG93aW5nRG9jSWQiLCJtYXhFbGVtZW50SWQiLCJvdmVyZmxvd2luZ0RvYyIsImVxdWFscyIsInJlbW92ZSIsInJlbW92ZWQiLCJfYWRkQnVmZmVyZWQiLCJfcmVtb3ZlUHVibGlzaGVkIiwiZW1wdHkiLCJuZXdEb2NJZCIsIm1pbkVsZW1lbnRJZCIsIl9yZW1vdmVCdWZmZXJlZCIsIl9jaGFuZ2VQdWJsaXNoZWQiLCJvbGREb2MiLCJwcm9qZWN0ZWROZXciLCJwcm9qZWN0ZWRPbGQiLCJjaGFuZ2VkIiwiRGlmZlNlcXVlbmNlIiwibWFrZUNoYW5nZWRGaWVsZHMiLCJtYXhCdWZmZXJlZElkIiwiX2FkZE1hdGNoaW5nIiwibWF4UHVibGlzaGVkIiwibWF4QnVmZmVyZWQiLCJ0b1B1Ymxpc2giLCJjYW5BcHBlbmRUb0J1ZmZlciIsImNhbkluc2VydEludG9CdWZmZXIiLCJ0b0J1ZmZlciIsIl9yZW1vdmVNYXRjaGluZyIsIl9oYW5kbGVEb2MiLCJtYXRjaGVzTm93IiwiZG9jdW1lbnRNYXRjaGVzIiwicHVibGlzaGVkQmVmb3JlIiwiYnVmZmVyZWRCZWZvcmUiLCJjYWNoZWRCZWZvcmUiLCJtaW5CdWZmZXJlZCIsInN0YXlzSW5QdWJsaXNoZWQiLCJzdGF5c0luQnVmZmVyIiwiX2ZldGNoTW9kaWZpZWREb2N1bWVudHMiLCJ0aGlzR2VuZXJhdGlvbiIsIndhaXRpbmciLCJmdXQiLCJfYmVTdGVhZHkiLCJ3cml0ZXMiLCJpc1JlcGxhY2UiLCJjYW5EaXJlY3RseU1vZGlmeURvYyIsIm1vZGlmaWVyQ2FuQmVEaXJlY3RseUFwcGxpZWQiLCJfbW9kaWZ5IiwiY2FuQmVjb21lVHJ1ZUJ5TW9kaWZpZXIiLCJhZmZlY3RlZEJ5TW9kaWZpZXIiLCJfcnVuUXVlcnkiLCJpbml0aWFsIiwiX2RvbmVRdWVyeWluZyIsIl9wb2xsUXVlcnkiLCJuZXdCdWZmZXIiLCJfY3Vyc29yRm9yUXVlcnkiLCJpIiwiX3B1Ymxpc2hOZXdSZXN1bHRzIiwib3B0aW9uc092ZXJ3cml0ZSIsImRlc2NyaXB0aW9uIiwiaWRzVG9SZW1vdmUiLCJfb3Bsb2dFbnRyeUhhbmRsZSIsIl9saXN0ZW5lcnNIYW5kbGUiLCJwaGFzZSIsIm5vdyIsIkRhdGUiLCJ0aW1lRGlmZiIsIl9waGFzZVN0YXJ0VGltZSIsImRpc2FibGVPcGxvZyIsIl9kaXNhYmxlT3Bsb2ciLCJfY2hlY2tTdXBwb3J0ZWRQcm9qZWN0aW9uIiwiaGFzV2hlcmUiLCJoYXNHZW9RdWVyeSIsIm1vZGlmaWVyIiwib3BlcmF0aW9uIiwiZmllbGQiLCJ0ZXN0IiwicHJlZml4IiwiYXJyYXlPcGVyYXRvcktleVJlZ2V4IiwiaXNBcnJheU9wZXJhdG9yS2V5IiwiaXNBcnJheU9wZXJhdG9yIiwib3BlcmF0b3IiLCJhIiwiZXZlcnkiLCJmbGF0dGVuT2JqZWN0SW50byIsInRhcmdldCIsInNvdXJjZSIsImxvZ0RlYnVnTWVzc2FnZXMiLCJPUExPR19DT05WRVJURVJfREVCVUciLCJjb252ZXJ0T3Bsb2dEaWZmIiwib3Bsb2dFbnRyeSIsImRpZmYiLCJsb2ciLCJkaWZmS2V5IiwiX29wbG9nRW50cnkkJHVuc2V0IiwiJHVuc2V0IiwiX29wbG9nRW50cnkkJHNldCIsIiRzZXQiLCJfb3Bsb2dFbnRyeSQkc2V0MiIsInBvc2l0aW9uIiwicG9zaXRpb25LZXkiLCJfb3Bsb2dFbnRyeSQkdW5zZXQyIiwiX29wbG9nRW50cnkkJHNldDMiLCIkdiIsImNvbnZlcnRlZE9wbG9nRW50cnkiLCJMb2NhbENvbGxlY3Rpb25Ecml2ZXIiLCJub0Nvbm5Db2xsZWN0aW9ucyIsImNyZWF0ZSIsIm9wZW4iLCJjb25uIiwiZW5zdXJlQ29sbGVjdGlvbiIsIl9tb25nb19saXZlZGF0YV9jb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiQVNZTkNfQ09MTEVDVElPTl9NRVRIT0RTIiwiUmVtb3RlQ29sbGVjdGlvbkRyaXZlciIsIm1vbmdvX3VybCIsIlJFTU9URV9DT0xMRUNUSU9OX01FVEhPRFMiLCJtIiwiYXN5bmNNZXRob2ROYW1lIiwiZGVmYXVsdFJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIiLCJvbmNlIiwiY29ubmVjdGlvbk9wdGlvbnMiLCJtb25nb1VybCIsIk1PTkdPX1VSTCIsIk1PTkdPX09QTE9HX1VSTCIsInN0YXJ0dXAiLCJ3YXJuVXNpbmdPbGRBcGkiLCJXQVJOX1dIRU5fVVNJTkdfT0xEX0FQSSIsInRyYWNlIiwiY29ubmVjdGlvbiIsIm1hbmFnZXIiLCJpZEdlbmVyYXRpb24iLCJfZHJpdmVyIiwiX3ByZXZlbnRBdXRvcHVibGlzaCIsIl9tYWtlTmV3SUQiLCJzcmMiLCJERFAiLCJyYW5kb21TdHJlYW0iLCJSYW5kb20iLCJpbnNlY3VyZSIsImhleFN0cmluZyIsIl9jb25uZWN0aW9uIiwiaXNDbGllbnQiLCJzZXJ2ZXIiLCJfY29sbGVjdGlvbiIsIl9uYW1lIiwiX21heWJlU2V0VXBSZXBsaWNhdGlvbiIsImRlZmluZU11dGF0aW9uTWV0aG9kcyIsIl9kZWZpbmVNdXRhdGlvbk1ldGhvZHMiLCJ1c2VFeGlzdGluZyIsIl9zdXBwcmVzc1NhbWVOYW1lRXJyb3IiLCJhdXRvcHVibGlzaCIsInB1Ymxpc2giLCJpc19hdXRvIiwicmVnaXN0ZXJTdG9yZSIsIm9rIiwiYmVnaW5VcGRhdGUiLCJiYXRjaFNpemUiLCJyZXNldCIsInBhdXNlT2JzZXJ2ZXJzIiwibXNnIiwibW9uZ29JZCIsIk1vbmdvSUQiLCJpZFBhcnNlIiwiX2RvY3MiLCJpbnNlcnQiLCJlbmRVcGRhdGUiLCJyZXN1bWVPYnNlcnZlcnMiLCJzYXZlT3JpZ2luYWxzIiwicmV0cmlldmVPcmlnaW5hbHMiLCJnZXREb2MiLCJfZ2V0Q29sbGVjdGlvbiIsIl9nZXRGaW5kU2VsZWN0b3IiLCJfZ2V0RmluZE9wdGlvbnMiLCJuZXdPcHRpb25zIiwiTWF0Y2giLCJPcHRpb25hbCIsIk9iamVjdEluY2x1ZGluZyIsIk9uZU9mIiwiTnVtYmVyIiwiZmFsbGJhY2tJZCIsIl9zZWxlY3RvcklzSWQiLCJnZXRQcm90b3R5cGVPZiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJnZW5lcmF0ZUlkIiwiX2lzUmVtb3RlQ29sbGVjdGlvbiIsImVuY2xvc2luZyIsIl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbiIsImNob29zZVJldHVyblZhbHVlRnJvbUNvbGxlY3Rpb25SZXN1bHQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJ3cmFwQ2FsbGJhY2siLCJfY2FsbE11dGF0b3JNZXRob2QiLCJfbGVuMyIsIm9wdGlvbnNBbmRDYWxsYmFjayIsIl9rZXkzIiwicG9wQ2FsbGJhY2tGcm9tQXJncyIsIkxvZyIsImRlYnVnIiwicmVDcmVhdGVJbmRleE9uT3B0aW9uTWlzbWF0Y2giLCJpbmZvIiwicmF3RGF0YWJhc2UiLCJjb252ZXJ0UmVzdWx0IiwiQWxsb3dEZW55IiwiQ29sbGVjdGlvblByb3RvdHlwZSIsInNldENvbm5lY3Rpb25PcHRpb25zIiwib3RoZXJPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQUlBLGFBQWE7RUFBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0NBQXNDLEVBQUM7SUFBQ0MsT0FBT0EsQ0FBQ0MsQ0FBQyxFQUFDO01BQUNKLGFBQWEsR0FBQ0ksQ0FBQztJQUFBO0VBQUMs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O0FBQW1CLENBQUMsQ0FBQztBQUFyRCxNQUFNQSxtQkFBbUIsR0FBR3FFLE9BQU8sSUFBSTtFQUM1QztFQUNBLE1BQUFzQixJQUFBLEdBQWdEdEIsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUF2RDtNQUFFK08sTUFBTTtNQUFFRDtJQUE0QixDQUFDLEdBQUF4TixJQUFBO0lBQWR5dUIsWUFBWSxHQUFBNVUsd0JBQUEsQ0FBQTdaLElBQUEsRUFBQStiLFNBQUE7RUFDM0M7RUFDQTs7RUFFQSxPQUFBL2hCLGFBQUEsQ0FBQUEsYUFBQSxLQUNLeTBCLFlBQVksR0FDWGpoQixVQUFVLElBQUlDLE1BQU0sR0FBRztJQUFFRCxVQUFVLEVBQUVDLE1BQU0sSUFBSUQ7RUFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXhFLENBQUMsQyIsImZpbGUiOiIvcGFja2FnZXMvbW9uZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVQcm9qZWN0aW9uIH0gZnJvbSBcIi4vbW9uZ29fdXRpbHNcIjtcblxuLyoqXG4gKiBQcm92aWRlIGEgc3luY2hyb25vdXMgQ29sbGVjdGlvbiBBUEkgdXNpbmcgZmliZXJzLCBiYWNrZWQgYnlcbiAqIE1vbmdvREIuICBUaGlzIGlzIG9ubHkgZm9yIHVzZSBvbiB0aGUgc2VydmVyLCBhbmQgbW9zdGx5IGlkZW50aWNhbFxuICogdG8gdGhlIGNsaWVudCBBUEkuXG4gKlxuICogTk9URTogdGhlIHB1YmxpYyBBUEkgbWV0aG9kcyBtdXN0IGJlIHJ1biB3aXRoaW4gYSBmaWJlci4gSWYgeW91IGNhbGxcbiAqIHRoZXNlIG91dHNpZGUgb2YgYSBmaWJlciB0aGV5IHdpbGwgZXhwbG9kZSFcbiAqL1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCdtb25nb2RiJyl9ICovXG52YXIgTW9uZ29EQiA9IE5wbU1vZHVsZU1vbmdvZGI7XG52YXIgRnV0dXJlID0gTnBtLnJlcXVpcmUoJ2ZpYmVycy9mdXR1cmUnKTtcbmltcG9ydCB7IERvY0ZldGNoZXIgfSBmcm9tIFwiLi9kb2NfZmV0Y2hlci5qc1wiO1xuaW1wb3J0IHtcbiAgQVNZTkNfQ1VSU09SX01FVEhPRFMsXG4gIGdldEFzeW5jTWV0aG9kTmFtZVxufSBmcm9tIFwibWV0ZW9yL21pbmltb25nby9jb25zdGFudHNcIjtcblxuTW9uZ29JbnRlcm5hbHMgPSB7fTtcblxuTW9uZ29JbnRlcm5hbHMuTnBtTW9kdWxlcyA9IHtcbiAgbW9uZ29kYjoge1xuICAgIHZlcnNpb246IE5wbU1vZHVsZU1vbmdvZGJWZXJzaW9uLFxuICAgIG1vZHVsZTogTW9uZ29EQlxuICB9XG59O1xuXG4vLyBPbGRlciB2ZXJzaW9uIG9mIHdoYXQgaXMgbm93IGF2YWlsYWJsZSB2aWFcbi8vIE1vbmdvSW50ZXJuYWxzLk5wbU1vZHVsZXMubW9uZ29kYi5tb2R1bGUuICBJdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZCwgYnV0XG4vLyBwZW9wbGUgZG8gdXNlIGl0LlxuLy8gWFhYIENPTVBBVCBXSVRIIDEuMC4zLjJcbk1vbmdvSW50ZXJuYWxzLk5wbU1vZHVsZSA9IE1vbmdvREI7XG5cbmNvbnN0IEZJTEVfQVNTRVRfU1VGRklYID0gJ0Fzc2V0JztcbmNvbnN0IEFTU0VUU19GT0xERVIgPSAnYXNzZXRzJztcbmNvbnN0IEFQUF9GT0xERVIgPSAnYXBwJztcblxuLy8gVGhpcyBpcyB1c2VkIHRvIGFkZCBvciByZW1vdmUgRUpTT04gZnJvbSB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5dGhpbmcgbmVzdGVkXG4vLyBpbnNpZGUgYW4gRUpTT04gY3VzdG9tIHR5cGUuIEl0IHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBwdXJlIEpTT04hXG52YXIgcmVwbGFjZU5hbWVzID0gZnVuY3Rpb24gKGZpbHRlciwgdGhpbmcpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xuICAgIGlmIChfLmlzQXJyYXkodGhpbmcpKSB7XG4gICAgICByZXR1cm4gXy5tYXAodGhpbmcsIF8uYmluZChyZXBsYWNlTmFtZXMsIG51bGwsIGZpbHRlcikpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0ge307XG4gICAgXy5lYWNoKHRoaW5nLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmV0W2ZpbHRlcihrZXkpXSA9IHJlcGxhY2VOYW1lcyhmaWx0ZXIsIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJldHVybiB0aGluZztcbn07XG5cbi8vIEVuc3VyZSB0aGF0IEVKU09OLmNsb25lIGtlZXBzIGEgVGltZXN0YW1wIGFzIGEgVGltZXN0YW1wIChpbnN0ZWFkIG9mIGp1c3Rcbi8vIGRvaW5nIGEgc3RydWN0dXJhbCBjbG9uZSkuXG4vLyBYWFggaG93IG9rIGlzIHRoaXM/IHdoYXQgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBNb25nb0RCIGxvYWRlZD9cbk1vbmdvREIuVGltZXN0YW1wLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGltZXN0YW1wcyBzaG91bGQgYmUgaW1tdXRhYmxlLlxuICByZXR1cm4gdGhpcztcbn07XG5cbnZhciBtYWtlTW9uZ29MZWdhbCA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBcIkVKU09OXCIgKyBuYW1lOyB9O1xudmFyIHVubWFrZU1vbmdvTGVnYWwgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZS5zdWJzdHIoNSk7IH07XG5cbnZhciByZXBsYWNlTW9uZ29BdG9tV2l0aE1ldGVvciA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICBpZiAoZG9jdW1lbnQgaW5zdGFuY2VvZiBNb25nb0RCLkJpbmFyeSkge1xuICAgIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIGlmIChkb2N1bWVudC5zdWJfdHlwZSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbiAgICB2YXIgYnVmZmVyID0gZG9jdW1lbnQudmFsdWUodHJ1ZSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gIH1cbiAgaWYgKGRvY3VtZW50IGluc3RhbmNlb2YgTW9uZ29EQi5PYmplY3RJRCkge1xuICAgIHJldHVybiBuZXcgTW9uZ28uT2JqZWN0SUQoZG9jdW1lbnQudG9IZXhTdHJpbmcoKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50IGluc3RhbmNlb2YgTW9uZ29EQi5EZWNpbWFsMTI4KSB7XG4gICAgcmV0dXJuIERlY2ltYWwoZG9jdW1lbnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50W1wiRUpTT04kdHlwZVwiXSAmJiBkb2N1bWVudFtcIkVKU09OJHZhbHVlXCJdICYmIF8uc2l6ZShkb2N1bWVudCkgPT09IDIpIHtcbiAgICByZXR1cm4gRUpTT04uZnJvbUpTT05WYWx1ZShyZXBsYWNlTmFtZXModW5tYWtlTW9uZ29MZWdhbCwgZG9jdW1lbnQpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQgaW5zdGFuY2VvZiBNb25nb0RCLlRpbWVzdGFtcCkge1xuICAgIC8vIEZvciBub3csIHRoZSBNZXRlb3IgcmVwcmVzZW50YXRpb24gb2YgYSBNb25nbyB0aW1lc3RhbXAgdHlwZSAobm90IGEgZGF0ZSFcbiAgICAvLyB0aGlzIGlzIGEgd2VpcmQgaW50ZXJuYWwgdGhpbmcgdXNlZCBpbiB0aGUgb3Bsb2chKSBpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAvLyBNb25nbyByZXByZXNlbnRhdGlvbi4gV2UgbmVlZCB0byBkbyB0aGlzIGV4cGxpY2l0bHkgb3IgZWxzZSB3ZSB3b3VsZCBkbyBhXG4gICAgLy8gc3RydWN0dXJhbCBjbG9uZSBhbmQgbG9zZSB0aGUgcHJvdG90eXBlLlxuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gIGlmIChFSlNPTi5pc0JpbmFyeShkb2N1bWVudCkpIHtcbiAgICAvLyBUaGlzIGRvZXMgbW9yZSBjb3BpZXMgdGhhbiB3ZSdkIGxpa2UsIGJ1dCBpcyBuZWNlc3NhcnkgYmVjYXVzZVxuICAgIC8vIE1vbmdvREIuQlNPTiBvbmx5IGxvb2tzIGxpa2UgaXQgdGFrZXMgYSBVaW50OEFycmF5IChhbmQgZG9lc24ndCBhY3R1YWxseVxuICAgIC8vIHNlcmlhbGl6ZSBpdCBjb3JyZWN0bHkpLlxuICAgIHJldHVybiBuZXcgTW9uZ29EQi5CaW5hcnkoQnVmZmVyLmZyb20oZG9jdW1lbnQpKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQgaW5zdGFuY2VvZiBNb25nb0RCLkJpbmFyeSkge1xuICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cbiAgaWYgKGRvY3VtZW50IGluc3RhbmNlb2YgTW9uZ28uT2JqZWN0SUQpIHtcbiAgICByZXR1cm4gbmV3IE1vbmdvREIuT2JqZWN0SUQoZG9jdW1lbnQudG9IZXhTdHJpbmcoKSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50IGluc3RhbmNlb2YgTW9uZ29EQi5UaW1lc3RhbXApIHtcbiAgICAvLyBGb3Igbm93LCB0aGUgTWV0ZW9yIHJlcHJlc2VudGF0aW9uIG9mIGEgTW9uZ28gdGltZXN0YW1wIHR5cGUgKG5vdCBhIGRhdGUhXG4gICAgLy8gdGhpcyBpcyBhIHdlaXJkIGludGVybmFsIHRoaW5nIHVzZWQgaW4gdGhlIG9wbG9nISkgaXMgdGhlIHNhbWUgYXMgdGhlXG4gICAgLy8gTW9uZ28gcmVwcmVzZW50YXRpb24uIFdlIG5lZWQgdG8gZG8gdGhpcyBleHBsaWNpdGx5IG9yIGVsc2Ugd2Ugd291bGQgZG8gYVxuICAgIC8vIHN0cnVjdHVyYWwgY2xvbmUgYW5kIGxvc2UgdGhlIHByb3RvdHlwZS5cbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cbiAgaWYgKGRvY3VtZW50IGluc3RhbmNlb2YgRGVjaW1hbCkge1xuICAgIHJldHVybiBNb25nb0RCLkRlY2ltYWwxMjguZnJvbVN0cmluZyhkb2N1bWVudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAoRUpTT04uX2lzQ3VzdG9tVHlwZShkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gcmVwbGFjZU5hbWVzKG1ha2VNb25nb0xlZ2FsLCBFSlNPTi50b0pTT05WYWx1ZShkb2N1bWVudCkpO1xuICB9XG4gIC8vIEl0IGlzIG5vdCBvcmRpbmFyaWx5IHBvc3NpYmxlIHRvIHN0aWNrIGRvbGxhci1zaWduIGtleXMgaW50byBtb25nb1xuICAvLyBzbyB3ZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgZm9yIHRoaW5ncyB0aGF0IG5lZWQgZXNjYXBpbmcgYXQgdGhpcyB0aW1lLlxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIHJlcGxhY2VUeXBlcyA9IGZ1bmN0aW9uIChkb2N1bWVudCwgYXRvbVRyYW5zZm9ybWVyKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICdvYmplY3QnIHx8IGRvY3VtZW50ID09PSBudWxsKVxuICAgIHJldHVybiBkb2N1bWVudDtcblxuICB2YXIgcmVwbGFjZWRUb3BMZXZlbEF0b20gPSBhdG9tVHJhbnNmb3JtZXIoZG9jdW1lbnQpO1xuICBpZiAocmVwbGFjZWRUb3BMZXZlbEF0b20gIT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gcmVwbGFjZWRUb3BMZXZlbEF0b207XG5cbiAgdmFyIHJldCA9IGRvY3VtZW50O1xuICBfLmVhY2goZG9jdW1lbnQsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgIHZhciB2YWxSZXBsYWNlZCA9IHJlcGxhY2VUeXBlcyh2YWwsIGF0b21UcmFuc2Zvcm1lcik7XG4gICAgaWYgKHZhbCAhPT0gdmFsUmVwbGFjZWQpIHtcbiAgICAgIC8vIExhenkgY2xvbmUuIFNoYWxsb3cgY29weS5cbiAgICAgIGlmIChyZXQgPT09IGRvY3VtZW50KVxuICAgICAgICByZXQgPSBfLmNsb25lKGRvY3VtZW50KTtcbiAgICAgIHJldFtrZXldID0gdmFsUmVwbGFjZWQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn07XG5cblxuTW9uZ29Db25uZWN0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBzZWxmLl9vYnNlcnZlTXVsdGlwbGV4ZXJzID0ge307XG4gIHNlbGYuX29uRmFpbG92ZXJIb29rID0gbmV3IEhvb2s7XG5cbiAgY29uc3QgdXNlck9wdGlvbnMgPSB7XG4gICAgLi4uKE1vbmdvLl9jb25uZWN0aW9uT3B0aW9ucyB8fCB7fSksXG4gICAgLi4uKE1ldGVvci5zZXR0aW5ncz8ucGFja2FnZXM/Lm1vbmdvPy5vcHRpb25zIHx8IHt9KVxuICB9O1xuXG4gIHZhciBtb25nb09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBpZ25vcmVVbmRlZmluZWQ6IHRydWUsXG4gIH0sIHVzZXJPcHRpb25zKTtcblxuXG5cbiAgLy8gSW50ZXJuYWxseSB0aGUgb3Bsb2cgY29ubmVjdGlvbnMgc3BlY2lmeSB0aGVpciBvd24gbWF4UG9vbFNpemVcbiAgLy8gd2hpY2ggd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgd2l0aCBhbnkgdXNlciBkZWZpbmVkIHZhbHVlXG4gIGlmIChfLmhhcyhvcHRpb25zLCAnbWF4UG9vbFNpemUnKSkge1xuICAgIC8vIElmIHdlIGp1c3Qgc2V0IHRoaXMgZm9yIFwic2VydmVyXCIsIHJlcGxTZXQgd2lsbCBvdmVycmlkZSBpdC4gSWYgd2UganVzdFxuICAgIC8vIHNldCBpdCBmb3IgcmVwbFNldCwgaXQgd2lsbCBiZSBpZ25vcmVkIGlmIHdlJ3JlIG5vdCB1c2luZyBhIHJlcGxTZXQuXG4gICAgbW9uZ29PcHRpb25zLm1heFBvb2xTaXplID0gb3B0aW9ucy5tYXhQb29sU2l6ZTtcbiAgfVxuICBpZiAoXy5oYXMob3B0aW9ucywgJ21pblBvb2xTaXplJykpIHtcbiAgICBtb25nb09wdGlvbnMubWluUG9vbFNpemUgPSBvcHRpb25zLm1pblBvb2xTaXplO1xuICB9XG5cbiAgLy8gVHJhbnNmb3JtIG9wdGlvbnMgbGlrZSBcInRsc0NBRmlsZUFzc2V0XCI6IFwiZmlsZW5hbWUucGVtXCIgaW50b1xuICAvLyBcInRsc0NBRmlsZVwiOiBcIi88ZnVsbHBhdGg+L2ZpbGVuYW1lLnBlbVwiXG4gIE9iamVjdC5lbnRyaWVzKG1vbmdvT3B0aW9ucyB8fCB7fSlcbiAgICAuZmlsdGVyKChba2V5XSkgPT4ga2V5ICYmIGtleS5lbmRzV2l0aChGSUxFX0FTU0VUX1NVRkZJWCkpXG4gICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGtleS5yZXBsYWNlKEZJTEVfQVNTRVRfU1VGRklYLCAnJyk7XG4gICAgICBtb25nb09wdGlvbnNbb3B0aW9uTmFtZV0gPSBwYXRoLmpvaW4oQXNzZXRzLmdldFNlcnZlckRpcigpLFxuICAgICAgICBBU1NFVFNfRk9MREVSLCBBUFBfRk9MREVSLCB2YWx1ZSk7XG4gICAgICBkZWxldGUgbW9uZ29PcHRpb25zW2tleV07XG4gICAgfSk7XG5cbiAgc2VsZi5kYiA9IG51bGw7XG4gIHNlbGYuX29wbG9nSGFuZGxlID0gbnVsbDtcbiAgc2VsZi5fZG9jRmV0Y2hlciA9IG51bGw7XG5cbiAgc2VsZi5jbGllbnQgPSBuZXcgTW9uZ29EQi5Nb25nb0NsaWVudCh1cmwsIG1vbmdvT3B0aW9ucyk7XG4gIHNlbGYuZGIgPSBzZWxmLmNsaWVudC5kYigpO1xuXG4gIHNlbGYuY2xpZW50Lm9uKCdzZXJ2ZXJEZXNjcmlwdGlvbkNoYW5nZWQnLCBNZXRlb3IuYmluZEVudmlyb25tZW50KGV2ZW50ID0+IHtcbiAgICAvLyBXaGVuIHRoZSBjb25uZWN0aW9uIGlzIG5vIGxvbmdlciBhZ2FpbnN0IHRoZSBwcmltYXJ5IG5vZGUsIGV4ZWN1dGUgYWxsXG4gICAgLy8gZmFpbG92ZXIgaG9va3MuIFRoaXMgaXMgaW1wb3J0YW50IGZvciB0aGUgZHJpdmVyIGFzIGl0IGhhcyB0byByZS1wb29sIHRoZVxuICAgIC8vIHF1ZXJ5IHdoZW4gaXQgaGFwcGVucy5cbiAgICBpZiAoXG4gICAgICBldmVudC5wcmV2aW91c0Rlc2NyaXB0aW9uLnR5cGUgIT09ICdSU1ByaW1hcnknICYmXG4gICAgICBldmVudC5uZXdEZXNjcmlwdGlvbi50eXBlID09PSAnUlNQcmltYXJ5J1xuICAgICkge1xuICAgICAgc2VsZi5fb25GYWlsb3Zlckhvb2suZWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSk7XG5cbiAgaWYgKG9wdGlvbnMub3Bsb2dVcmwgJiYgISBQYWNrYWdlWydkaXNhYmxlLW9wbG9nJ10pIHtcbiAgICBzZWxmLl9vcGxvZ0hhbmRsZSA9IG5ldyBPcGxvZ0hhbmRsZShvcHRpb25zLm9wbG9nVXJsLCBzZWxmLmRiLmRhdGFiYXNlTmFtZSk7XG4gICAgc2VsZi5fZG9jRmV0Y2hlciA9IG5ldyBEb2NGZXRjaGVyKHNlbGYpO1xuICB9XG4gIFByb21pc2UuYXdhaXQoc2VsZi5jbGllbnQuY29ubmVjdCgpKVxufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCEgc2VsZi5kYilcbiAgICB0aHJvdyBFcnJvcihcImNsb3NlIGNhbGxlZCBiZWZvcmUgQ29ubmVjdGlvbiBjcmVhdGVkP1wiKTtcblxuICAvLyBYWFggcHJvYmFibHkgdW50ZXN0ZWRcbiAgdmFyIG9wbG9nSGFuZGxlID0gc2VsZi5fb3Bsb2dIYW5kbGU7XG4gIHNlbGYuX29wbG9nSGFuZGxlID0gbnVsbDtcbiAgaWYgKG9wbG9nSGFuZGxlKVxuICAgIG9wbG9nSGFuZGxlLnN0b3AoKTtcblxuICAvLyBVc2UgRnV0dXJlLndyYXAgc28gdGhhdCBlcnJvcnMgZ2V0IHRocm93bi4gVGhpcyBoYXBwZW5zIHRvXG4gIC8vIHdvcmsgZXZlbiBvdXRzaWRlIGEgZmliZXIgc2luY2UgdGhlICdjbG9zZScgbWV0aG9kIGlzIG5vdFxuICAvLyBhY3R1YWxseSBhc3luY2hyb25vdXMuXG4gIEZ1dHVyZS53cmFwKF8uYmluZChzZWxmLmNsaWVudC5jbG9zZSwgc2VsZi5jbGllbnQpKSh0cnVlKS53YWl0KCk7XG59O1xuXG5Nb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLl9zZXRPcGxvZ0hhbmRsZSA9IGZ1bmN0aW9uKG9wbG9nSGFuZGxlKSB7XG4gIHRoaXMuX29wbG9nSGFuZGxlID0gb3Bsb2dIYW5kbGU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gUmV0dXJucyB0aGUgTW9uZ28gQ29sbGVjdGlvbiBvYmplY3Q7IG1heSB5aWVsZC5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUucmF3Q29sbGVjdGlvbiA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCEgc2VsZi5kYilcbiAgICB0aHJvdyBFcnJvcihcInJhd0NvbGxlY3Rpb24gY2FsbGVkIGJlZm9yZSBDb25uZWN0aW9uIGNyZWF0ZWQ/XCIpO1xuXG4gIHJldHVybiBzZWxmLmRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fY3JlYXRlQ2FwcGVkQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChcbiAgICBjb2xsZWN0aW9uTmFtZSwgYnl0ZVNpemUsIG1heERvY3VtZW50cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCEgc2VsZi5kYilcbiAgICB0aHJvdyBFcnJvcihcIl9jcmVhdGVDYXBwZWRDb2xsZWN0aW9uIGNhbGxlZCBiZWZvcmUgQ29ubmVjdGlvbiBjcmVhdGVkP1wiKTtcblxuXG4gIHZhciBmdXR1cmUgPSBuZXcgRnV0dXJlKCk7XG4gIHNlbGYuZGIuY3JlYXRlQ29sbGVjdGlvbihcbiAgICBjb2xsZWN0aW9uTmFtZSxcbiAgICB7IGNhcHBlZDogdHJ1ZSwgc2l6ZTogYnl0ZVNpemUsIG1heDogbWF4RG9jdW1lbnRzIH0sXG4gICAgZnV0dXJlLnJlc29sdmVyKCkpO1xuICBmdXR1cmUud2FpdCgpO1xufTtcblxuLy8gVGhpcyBzaG91bGQgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHkgd2l0aCBhIHdyaXRlLCB0byBjcmVhdGUgYVxuLy8gdHJhbnNhY3Rpb24gb24gdGhlIGN1cnJlbnQgd3JpdGUgZmVuY2UsIGlmIGFueS4gQWZ0ZXIgd2UgY2FuIHJlYWRcbi8vIHRoZSB3cml0ZSwgYW5kIGFmdGVyIG9ic2VydmVycyBoYXZlIGJlZW4gbm90aWZpZWQgKG9yIGF0IGxlYXN0LFxuLy8gYWZ0ZXIgdGhlIG9ic2VydmVyIG5vdGlmaWVycyBoYXZlIGFkZGVkIHRoZW1zZWx2ZXMgdG8gdGhlIHdyaXRlXG4vLyBmZW5jZSksIHlvdSBzaG91bGQgY2FsbCAnY29tbWl0dGVkKCknIG9uIHRoZSBvYmplY3QgcmV0dXJuZWQuXG5Nb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLl9tYXliZUJlZ2luV3JpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmZW5jZSA9IEREUFNlcnZlci5fQ3VycmVudFdyaXRlRmVuY2UuZ2V0KCk7XG4gIGlmIChmZW5jZSkge1xuICAgIHJldHVybiBmZW5jZS5iZWdpbldyaXRlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtjb21taXR0ZWQ6IGZ1bmN0aW9uICgpIHt9fTtcbiAgfVxufTtcblxuLy8gSW50ZXJuYWwgaW50ZXJmYWNlOiBhZGRzIGEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIE1vbmdvIHByaW1hcnlcbi8vIGNoYW5nZXMuIFJldHVybnMgYSBzdG9wIGhhbmRsZS5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuX29uRmFpbG92ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuX29uRmFpbG92ZXJIb29rLnJlZ2lzdGVyKGNhbGxiYWNrKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vIFB1YmxpYyBBUEkgLy8vLy8vLy8vL1xuXG4vLyBUaGUgd3JpdGUgbWV0aG9kcyBibG9jayB1bnRpbCB0aGUgZGF0YWJhc2UgaGFzIGNvbmZpcm1lZCB0aGUgd3JpdGUgKGl0IG1heVxuLy8gbm90IGJlIHJlcGxpY2F0ZWQgb3Igc3RhYmxlIG9uIGRpc2ssIGJ1dCBvbmUgc2VydmVyIGhhcyBjb25maXJtZWQgaXQpIGlmIG5vXG4vLyBjYWxsYmFjayBpcyBwcm92aWRlZC4gSWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgdGhlbiB0aGV5IGNhbGwgdGhlIGNhbGxiYWNrXG4vLyB3aGVuIHRoZSB3cml0ZSBpcyBjb25maXJtZWQuIFRoZXkgcmV0dXJuIG5vdGhpbmcgb24gc3VjY2VzcywgYW5kIHJhaXNlIGFuXG4vLyBleGNlcHRpb24gb24gZmFpbHVyZS5cbi8vXG4vLyBBZnRlciBtYWtpbmcgYSB3cml0ZSAod2l0aCBpbnNlcnQsIHVwZGF0ZSwgcmVtb3ZlKSwgb2JzZXJ2ZXJzIGFyZVxuLy8gbm90aWZpZWQgYXN5bmNocm9ub3VzbHkuIElmIHlvdSB3YW50IHRvIHJlY2VpdmUgYSBjYWxsYmFjayBvbmNlIGFsbFxuLy8gb2YgdGhlIG9ic2VydmVyIG5vdGlmaWNhdGlvbnMgaGF2ZSBsYW5kZWQgZm9yIHlvdXIgd3JpdGUsIGRvIHRoZVxuLy8gd3JpdGVzIGluc2lkZSBhIHdyaXRlIGZlbmNlIChzZXQgRERQU2VydmVyLl9DdXJyZW50V3JpdGVGZW5jZSB0byBhIG5ld1xuLy8gX1dyaXRlRmVuY2UsIGFuZCB0aGVuIHNldCBhIGNhbGxiYWNrIG9uIHRoZSB3cml0ZSBmZW5jZS4pXG4vL1xuLy8gU2luY2Ugb3VyIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBpcyBzaW5nbGUtdGhyZWFkZWQsIHRoaXMgaXNcbi8vIHdlbGwtZGVmaW5lZCAtLSBhIHdyaXRlIFwiaGFzIGJlZW4gbWFkZVwiIGlmIGl0J3MgcmV0dXJuZWQsIGFuZCBhblxuLy8gb2JzZXJ2ZXIgXCJoYXMgYmVlbiBub3RpZmllZFwiIGlmIGl0cyBjYWxsYmFjayBoYXMgcmV0dXJuZWQuXG5cbnZhciB3cml0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKHdyaXRlLCByZWZyZXNoLCBjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgaWYgKCEgZXJyKSB7XG4gICAgICAvLyBYWFggV2UgZG9uJ3QgaGF2ZSB0byBydW4gdGhpcyBvbiBlcnJvciwgcmlnaHQ/XG4gICAgICB0cnkge1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgICB9IGNhdGNoIChyZWZyZXNoRXJyKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlZnJlc2hFcnIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyByZWZyZXNoRXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdyaXRlLmNvbW1pdHRlZCgpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGJpbmRFbnZpcm9ubWVudEZvcldyaXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHJldHVybiBNZXRlb3IuYmluZEVudmlyb25tZW50KGNhbGxiYWNrLCBcIk1vbmdvIHdyaXRlXCIpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5faW5zZXJ0ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb25fbmFtZSwgZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBzZW5kRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChjYWxsYmFjaylcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB0aHJvdyBlO1xuICB9O1xuXG4gIGlmIChjb2xsZWN0aW9uX25hbWUgPT09IFwiX19fbWV0ZW9yX2ZhaWx1cmVfdGVzdF9jb2xsZWN0aW9uXCIpIHtcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihcIkZhaWx1cmUgdGVzdFwiKTtcbiAgICBlLl9leHBlY3RlZEJ5VGVzdCA9IHRydWU7XG4gICAgc2VuZEVycm9yKGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghKExvY2FsQ29sbGVjdGlvbi5faXNQbGFpbk9iamVjdChkb2N1bWVudCkgJiZcbiAgICAgICAgIUVKU09OLl9pc0N1c3RvbVR5cGUoZG9jdW1lbnQpKSkge1xuICAgIHNlbmRFcnJvcihuZXcgRXJyb3IoXG4gICAgICBcIk9ubHkgcGxhaW4gb2JqZWN0cyBtYXkgYmUgaW5zZXJ0ZWQgaW50byBNb25nb0RCXCIpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgd3JpdGUgPSBzZWxmLl9tYXliZUJlZ2luV3JpdGUoKTtcbiAgdmFyIHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgTWV0ZW9yLnJlZnJlc2goe2NvbGxlY3Rpb246IGNvbGxlY3Rpb25fbmFtZSwgaWQ6IGRvY3VtZW50Ll9pZCB9KTtcbiAgfTtcbiAgY2FsbGJhY2sgPSBiaW5kRW52aXJvbm1lbnRGb3JXcml0ZSh3cml0ZUNhbGxiYWNrKHdyaXRlLCByZWZyZXNoLCBjYWxsYmFjaykpO1xuICB0cnkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gc2VsZi5yYXdDb2xsZWN0aW9uKGNvbGxlY3Rpb25fbmFtZSk7XG4gICAgY29sbGVjdGlvbi5pbnNlcnRPbmUoXG4gICAgICByZXBsYWNlVHlwZXMoZG9jdW1lbnQsIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvKSxcbiAgICAgIHtcbiAgICAgICAgc2FmZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApLnRoZW4oKHtpbnNlcnRlZElkfSkgPT4ge1xuICAgICAgY2FsbGJhY2sobnVsbCwgaW5zZXJ0ZWRJZCk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNhbGxiYWNrKGUsIG51bGwpXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHdyaXRlLmNvbW1pdHRlZCgpO1xuICAgIHRocm93IGVycjtcbiAgfVxufTtcblxuLy8gQ2F1c2UgcXVlcmllcyB0aGF0IG1heSBiZSBhZmZlY3RlZCBieSB0aGUgc2VsZWN0b3IgdG8gcG9sbCBpbiB0aGlzIHdyaXRlXG4vLyBmZW5jZS5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuX3JlZnJlc2ggPSBmdW5jdGlvbiAoY29sbGVjdGlvbk5hbWUsIHNlbGVjdG9yKSB7XG4gIHZhciByZWZyZXNoS2V5ID0ge2NvbGxlY3Rpb246IGNvbGxlY3Rpb25OYW1lfTtcbiAgLy8gSWYgd2Uga25vdyB3aGljaCBkb2N1bWVudHMgd2UncmUgcmVtb3ZpbmcsIGRvbid0IHBvbGwgcXVlcmllcyB0aGF0IGFyZVxuICAvLyBzcGVjaWZpYyB0byBvdGhlciBkb2N1bWVudHMuIChOb3RlIHRoYXQgbXVsdGlwbGUgbm90aWZpY2F0aW9ucyBoZXJlIHNob3VsZFxuICAvLyBub3QgY2F1c2UgbXVsdGlwbGUgcG9sbHMsIHNpbmNlIGFsbCBvdXIgbGlzdGVuZXIgaXMgZG9pbmcgaXMgZW5xdWV1ZWluZyBhXG4gIC8vIHBvbGwuKVxuICB2YXIgc3BlY2lmaWNJZHMgPSBMb2NhbENvbGxlY3Rpb24uX2lkc01hdGNoZWRCeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKHNwZWNpZmljSWRzKSB7XG4gICAgXy5lYWNoKHNwZWNpZmljSWRzLCBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIE1ldGVvci5yZWZyZXNoKF8uZXh0ZW5kKHtpZDogaWR9LCByZWZyZXNoS2V5KSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgTWV0ZW9yLnJlZnJlc2gocmVmcmVzaEtleSk7XG4gIH1cbn07XG5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuX3JlbW92ZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uX25hbWUsIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoY29sbGVjdGlvbl9uYW1lID09PSBcIl9fX21ldGVvcl9mYWlsdXJlX3Rlc3RfY29sbGVjdGlvblwiKSB7XG4gICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJGYWlsdXJlIHRlc3RcIik7XG4gICAgZS5fZXhwZWN0ZWRCeVRlc3QgPSB0cnVlO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHZhciB3cml0ZSA9IHNlbGYuX21heWJlQmVnaW5Xcml0ZSgpO1xuICB2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9yZWZyZXNoKGNvbGxlY3Rpb25fbmFtZSwgc2VsZWN0b3IpO1xuICB9O1xuICBjYWxsYmFjayA9IGJpbmRFbnZpcm9ubWVudEZvcldyaXRlKHdyaXRlQ2FsbGJhY2sod3JpdGUsIHJlZnJlc2gsIGNhbGxiYWNrKSk7XG5cbiAgdHJ5IHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHNlbGYucmF3Q29sbGVjdGlvbihjb2xsZWN0aW9uX25hbWUpO1xuICAgIGNvbGxlY3Rpb25cbiAgICAgIC5kZWxldGVNYW55KHJlcGxhY2VUeXBlcyhzZWxlY3RvciwgcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28pLCB7XG4gICAgICAgIHNhZmU6IHRydWUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHsgZGVsZXRlZENvdW50IH0pID0+IHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdHJhbnNmb3JtUmVzdWx0KHsgcmVzdWx0IDoge21vZGlmaWVkQ291bnQgOiBkZWxldGVkQ291bnR9IH0pLm51bWJlckFmZmVjdGVkKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHdyaXRlLmNvbW1pdHRlZCgpO1xuICAgIHRocm93IGVycjtcbiAgfVxufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fZHJvcENvbGxlY3Rpb24gPSBmdW5jdGlvbiAoY29sbGVjdGlvbk5hbWUsIGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuXG4gIHZhciB3cml0ZSA9IHNlbGYuX21heWJlQmVnaW5Xcml0ZSgpO1xuICB2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBNZXRlb3IucmVmcmVzaCh7Y29sbGVjdGlvbjogY29sbGVjdGlvbk5hbWUsIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkcm9wQ29sbGVjdGlvbjogdHJ1ZX0pO1xuICB9O1xuXG5cbiAgY2IgPSBiaW5kRW52aXJvbm1lbnRGb3JXcml0ZSh3cml0ZUNhbGxiYWNrKHdyaXRlLCByZWZyZXNoLCBjYikpO1xuXG4gIHRyeSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSBzZWxmLnJhd0NvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgIGNvbGxlY3Rpb24uZHJvcChjYik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3cml0ZS5jb21taXR0ZWQoKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG4vLyBGb3IgdGVzdGluZyBvbmx5LiAgU2xpZ2h0bHkgYmV0dGVyIHRoYW4gYGMucmF3RGF0YWJhc2UoKS5kcm9wRGF0YWJhc2UoKWBcbi8vIGJlY2F1c2UgaXQgbGV0cyB0aGUgdGVzdCdzIGZlbmNlIHdhaXQgZm9yIGl0IHRvIGJlIGNvbXBsZXRlLlxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fZHJvcERhdGFiYXNlID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgd3JpdGUgPSBzZWxmLl9tYXliZUJlZ2luV3JpdGUoKTtcbiAgdmFyIHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgTWV0ZW9yLnJlZnJlc2goeyBkcm9wRGF0YWJhc2U6IHRydWUgfSk7XG4gIH07XG4gIGNiID0gYmluZEVudmlyb25tZW50Rm9yV3JpdGUod3JpdGVDYWxsYmFjayh3cml0ZSwgcmVmcmVzaCwgY2IpKTtcblxuICB0cnkge1xuICAgIHNlbGYuZGIuZHJvcERhdGFiYXNlKGNiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdyaXRlLmNvbW1pdHRlZCgpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uX25hbWUsIHNlbGVjdG9yLCBtb2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cblxuICBpZiAoISBjYWxsYmFjayAmJiBvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoY29sbGVjdGlvbl9uYW1lID09PSBcIl9fX21ldGVvcl9mYWlsdXJlX3Rlc3RfY29sbGVjdGlvblwiKSB7XG4gICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJGYWlsdXJlIHRlc3RcIik7XG4gICAgZS5fZXhwZWN0ZWRCeVRlc3QgPSB0cnVlO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4cGxpY2l0IHNhZmV0eSBjaGVjay4gbnVsbCBhbmQgdW5kZWZpbmVkIGNhbiBjcmFzaCB0aGUgbW9uZ29cbiAgLy8gZHJpdmVyLiBBbHRob3VnaCB0aGUgbm9kZSBkcml2ZXIgYW5kIG1pbmltb25nbyBkbyAnc3VwcG9ydCdcbiAgLy8gbm9uLW9iamVjdCBtb2RpZmllciBpbiB0aGF0IHRoZXkgZG9uJ3QgY3Jhc2gsIHRoZXkgYXJlIG5vdFxuICAvLyBtZWFuaW5nZnVsIG9wZXJhdGlvbnMgYW5kIGRvIG5vdCBkbyBhbnl0aGluZy4gRGVmZW5zaXZlbHkgdGhyb3cgYW5cbiAgLy8gZXJyb3IgaGVyZS5cbiAgaWYgKCFtb2QgfHwgdHlwZW9mIG1vZCAhPT0gJ29iamVjdCcpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtb2RpZmllci4gTW9kaWZpZXIgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuXG4gIGlmICghKExvY2FsQ29sbGVjdGlvbi5faXNQbGFpbk9iamVjdChtb2QpICYmXG4gICAgICAgICFFSlNPTi5faXNDdXN0b21UeXBlKG1vZCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJPbmx5IHBsYWluIG9iamVjdHMgbWF5IGJlIHVzZWQgYXMgcmVwbGFjZW1lbnRcIiArXG4gICAgICAgIFwiIGRvY3VtZW50cyBpbiBNb25nb0RCXCIpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cbiAgdmFyIHdyaXRlID0gc2VsZi5fbWF5YmVCZWdpbldyaXRlKCk7XG4gIHZhciByZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX3JlZnJlc2goY29sbGVjdGlvbl9uYW1lLCBzZWxlY3Rvcik7XG4gIH07XG4gIGNhbGxiYWNrID0gd3JpdGVDYWxsYmFjayh3cml0ZSwgcmVmcmVzaCwgY2FsbGJhY2spO1xuICB0cnkge1xuICAgIHZhciBjb2xsZWN0aW9uID0gc2VsZi5yYXdDb2xsZWN0aW9uKGNvbGxlY3Rpb25fbmFtZSk7XG4gICAgdmFyIG1vbmdvT3B0cyA9IHtzYWZlOiB0cnVlfTtcbiAgICAvLyBBZGQgc3VwcG9ydCBmb3IgZmlsdGVyZWQgcG9zaXRpb25hbCBvcGVyYXRvclxuICAgIGlmIChvcHRpb25zLmFycmF5RmlsdGVycyAhPT0gdW5kZWZpbmVkKSBtb25nb09wdHMuYXJyYXlGaWx0ZXJzID0gb3B0aW9ucy5hcnJheUZpbHRlcnM7XG4gICAgLy8gZXhwbGljdGx5IGVudW1lcmF0ZSBvcHRpb25zIHRoYXQgbWluaW1vbmdvIHN1cHBvcnRzXG4gICAgaWYgKG9wdGlvbnMudXBzZXJ0KSBtb25nb09wdHMudXBzZXJ0ID0gdHJ1ZTtcbiAgICBpZiAob3B0aW9ucy5tdWx0aSkgbW9uZ29PcHRzLm11bHRpID0gdHJ1ZTtcbiAgICAvLyBMZXRzIHlvdSBnZXQgYSBtb3JlIG1vcmUgZnVsbCByZXN1bHQgZnJvbSBNb25nb0RCLiBVc2Ugd2l0aCBjYXV0aW9uOlxuICAgIC8vIG1pZ2h0IG5vdCB3b3JrIHdpdGggQy51cHNlcnQgKGFzIG9wcG9zZWQgdG8gQy51cGRhdGUoe3Vwc2VydDp0cnVlfSkgb3JcbiAgICAvLyB3aXRoIHNpbXVsYXRlZCB1cHNlcnQuXG4gICAgaWYgKG9wdGlvbnMuZnVsbFJlc3VsdCkgbW9uZ29PcHRzLmZ1bGxSZXN1bHQgPSB0cnVlO1xuXG4gICAgdmFyIG1vbmdvU2VsZWN0b3IgPSByZXBsYWNlVHlwZXMoc2VsZWN0b3IsIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvKTtcbiAgICB2YXIgbW9uZ29Nb2QgPSByZXBsYWNlVHlwZXMobW9kLCByZXBsYWNlTWV0ZW9yQXRvbVdpdGhNb25nbyk7XG5cbiAgICB2YXIgaXNNb2RpZnkgPSBMb2NhbENvbGxlY3Rpb24uX2lzTW9kaWZpY2F0aW9uTW9kKG1vbmdvTW9kKTtcblxuICAgIGlmIChvcHRpb25zLl9mb3JiaWRSZXBsYWNlICYmICFpc01vZGlmeSkge1xuICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkludmFsaWQgbW9kaWZpZXIuIFJlcGxhY2VtZW50cyBhcmUgZm9yYmlkZGVuLlwiKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSd2ZSBhbHJlYWR5IHJ1biByZXBsYWNlVHlwZXMvcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28gb25cbiAgICAvLyBzZWxlY3RvciBhbmQgbW9kLiAgV2UgYXNzdW1lIGl0IGRvZXNuJ3QgbWF0dGVyLCBhcyBmYXIgYXNcbiAgICAvLyB0aGUgYmVoYXZpb3Igb2YgbW9kaWZpZXJzIGlzIGNvbmNlcm5lZCwgd2hldGhlciBgX21vZGlmeWBcbiAgICAvLyBpcyBydW4gb24gRUpTT04gb3Igb24gbW9uZ28tY29udmVydGVkIEVKU09OLlxuXG4gICAgLy8gUnVuIHRoaXMgY29kZSB1cCBmcm9udCBzbyB0aGF0IGl0IGZhaWxzIGZhc3QgaWYgc29tZW9uZSB1c2VzXG4gICAgLy8gYSBNb25nbyB1cGRhdGUgb3BlcmF0b3Igd2UgZG9uJ3Qgc3VwcG9ydC5cbiAgICBsZXQga25vd25JZDtcbiAgICBpZiAob3B0aW9ucy51cHNlcnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBuZXdEb2MgPSBMb2NhbENvbGxlY3Rpb24uX2NyZWF0ZVVwc2VydERvY3VtZW50KHNlbGVjdG9yLCBtb2QpO1xuICAgICAgICBrbm93bklkID0gbmV3RG9jLl9pZDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy51cHNlcnQgJiZcbiAgICAgICAgISBpc01vZGlmeSAmJlxuICAgICAgICAhIGtub3duSWQgJiZcbiAgICAgICAgb3B0aW9ucy5pbnNlcnRlZElkICYmXG4gICAgICAgICEgKG9wdGlvbnMuaW5zZXJ0ZWRJZCBpbnN0YW5jZW9mIE1vbmdvLk9iamVjdElEICYmXG4gICAgICAgICAgIG9wdGlvbnMuZ2VuZXJhdGVkSWQpKSB7XG4gICAgICAvLyBJbiBjYXNlIG9mIGFuIHVwc2VydCB3aXRoIGEgcmVwbGFjZW1lbnQsIHdoZXJlIHRoZXJlIGlzIG5vIF9pZCBkZWZpbmVkXG4gICAgICAvLyBpbiBlaXRoZXIgdGhlIHF1ZXJ5IG9yIHRoZSByZXBsYWNlbWVudCBkb2MsIG1vbmdvIHdpbGwgZ2VuZXJhdGUgYW4gaWQgaXRzZWxmLlxuICAgICAgLy8gVGhlcmVmb3JlIHdlIG5lZWQgdGhpcyBzcGVjaWFsIHN0cmF0ZWd5IGlmIHdlIHdhbnQgdG8gY29udHJvbCB0aGUgaWQgb3Vyc2VsdmVzLlxuXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIHRoaXMgd2hlbjpcbiAgICAgIC8vIC0gVGhpcyBpcyBub3QgYSByZXBsYWNlbWVudCwgc28gd2UgY2FuIGFkZCBhbiBfaWQgdG8gJHNldE9uSW5zZXJ0XG4gICAgICAvLyAtIFRoZSBpZCBpcyBkZWZpbmVkIGJ5IHF1ZXJ5IG9yIG1vZCB3ZSBjYW4ganVzdCBhZGQgaXQgdG8gdGhlIHJlcGxhY2VtZW50IGRvY1xuICAgICAgLy8gLSBUaGUgdXNlciBkaWQgbm90IHNwZWNpZnkgYW55IGlkIHByZWZlcmVuY2UgYW5kIHRoZSBpZCBpcyBhIE1vbmdvIE9iamVjdElkLFxuICAgICAgLy8gICAgIHRoZW4gd2UgY2FuIGp1c3QgbGV0IE1vbmdvIGdlbmVyYXRlIHRoZSBpZFxuXG4gICAgICBzaW11bGF0ZVVwc2VydFdpdGhJbnNlcnRlZElkKFxuICAgICAgICBjb2xsZWN0aW9uLCBtb25nb1NlbGVjdG9yLCBtb25nb01vZCwgb3B0aW9ucyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBkb2VzIG5vdCBuZWVkIHRvIGJlIGJpbmRFbnZpcm9ubWVudCdlZCBiZWNhdXNlXG4gICAgICAgIC8vIHNpbXVsYXRlVXBzZXJ0V2l0aEluc2VydGVkSWQoKSB3cmFwcyBpdCBhbmQgdGhlbiBwYXNzZXMgaXQgdGhyb3VnaFxuICAgICAgICAvLyBiaW5kRW52aXJvbm1lbnRGb3JXcml0ZS5cbiAgICAgICAgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBnb3QgaGVyZSB2aWEgYSB1cHNlcnQoKSBjYWxsLCB0aGVuIG9wdGlvbnMuX3JldHVybk9iamVjdCB3aWxsXG4gICAgICAgICAgLy8gYmUgc2V0IGFuZCB3ZSBzaG91bGQgcmV0dXJuIHRoZSB3aG9sZSBvYmplY3QuIE90aGVyd2lzZSwgd2Ugc2hvdWxkXG4gICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIG51bWJlciBvZiBhZmZlY3RlZCBkb2NzIHRvIG1hdGNoIHRoZSBtb25nbyBBUEkuXG4gICAgICAgICAgaWYgKHJlc3VsdCAmJiAhIG9wdGlvbnMuX3JldHVybk9iamVjdCkge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdC5udW1iZXJBZmZlY3RlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAob3B0aW9ucy51cHNlcnQgJiYgIWtub3duSWQgJiYgb3B0aW9ucy5pbnNlcnRlZElkICYmIGlzTW9kaWZ5KSB7XG4gICAgICAgIGlmICghbW9uZ29Nb2QuaGFzT3duUHJvcGVydHkoJyRzZXRPbkluc2VydCcpKSB7XG4gICAgICAgICAgbW9uZ29Nb2QuJHNldE9uSW5zZXJ0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAga25vd25JZCA9IG9wdGlvbnMuaW5zZXJ0ZWRJZDtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtb25nb01vZC4kc2V0T25JbnNlcnQsIHJlcGxhY2VUeXBlcyh7X2lkOiBvcHRpb25zLmluc2VydGVkSWR9LCByZXBsYWNlTWV0ZW9yQXRvbVdpdGhNb25nbykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdHJpbmdzID0gT2JqZWN0LmtleXMobW9uZ29Nb2QpLmZpbHRlcigoa2V5KSA9PiAha2V5LnN0YXJ0c1dpdGgoXCIkXCIpKTtcbiAgICAgIGxldCB1cGRhdGVNZXRob2QgPSBzdHJpbmdzLmxlbmd0aCA+IDAgPyAncmVwbGFjZU9uZScgOiAndXBkYXRlTWFueSc7XG4gICAgICB1cGRhdGVNZXRob2QgPVxuICAgICAgICB1cGRhdGVNZXRob2QgPT09ICd1cGRhdGVNYW55JyAmJiAhbW9uZ29PcHRzLm11bHRpXG4gICAgICAgICAgPyAndXBkYXRlT25lJ1xuICAgICAgICAgIDogdXBkYXRlTWV0aG9kO1xuICAgICAgY29sbGVjdGlvblt1cGRhdGVNZXRob2RdLmJpbmQoY29sbGVjdGlvbikoXG4gICAgICAgIG1vbmdvU2VsZWN0b3IsIG1vbmdvTW9kLCBtb25nb09wdHMsXG4gICAgICAgICAgLy8gbW9uZ28gZHJpdmVyIG5vdyByZXR1cm5zIHVuZGVmaW5lZCBmb3IgZXJyIGluIHRoZSBjYWxsYmFja1xuICAgICAgICAgIGJpbmRFbnZpcm9ubWVudEZvcldyaXRlKGZ1bmN0aW9uIChlcnIgPSBudWxsLCByZXN1bHQpIHtcbiAgICAgICAgICBpZiAoISBlcnIpIHtcbiAgICAgICAgICAgIHZhciBtZXRlb3JSZXN1bHQgPSB0cmFuc2Zvcm1SZXN1bHQoe3Jlc3VsdH0pO1xuICAgICAgICAgICAgaWYgKG1ldGVvclJlc3VsdCAmJiBvcHRpb25zLl9yZXR1cm5PYmplY3QpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhpcyB3YXMgYW4gdXBzZXJ0KCkgY2FsbCwgYW5kIHdlIGVuZGVkIHVwXG4gICAgICAgICAgICAgIC8vIGluc2VydGluZyBhIG5ldyBkb2MgYW5kIHdlIGtub3cgaXRzIGlkLCB0aGVuXG4gICAgICAgICAgICAgIC8vIHJldHVybiB0aGF0IGlkIGFzIHdlbGwuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnVwc2VydCAmJiBtZXRlb3JSZXN1bHQuaW5zZXJ0ZWRJZCkge1xuICAgICAgICAgICAgICAgIGlmIChrbm93bklkKSB7XG4gICAgICAgICAgICAgICAgICBtZXRlb3JSZXN1bHQuaW5zZXJ0ZWRJZCA9IGtub3duSWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRlb3JSZXN1bHQuaW5zZXJ0ZWRJZCBpbnN0YW5jZW9mIE1vbmdvREIuT2JqZWN0SUQpIHtcbiAgICAgICAgICAgICAgICAgIG1ldGVvclJlc3VsdC5pbnNlcnRlZElkID0gbmV3IE1vbmdvLk9iamVjdElEKG1ldGVvclJlc3VsdC5pbnNlcnRlZElkLnRvSGV4U3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgbWV0ZW9yUmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgbWV0ZW9yUmVzdWx0Lm51bWJlckFmZmVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3cml0ZS5jb21taXR0ZWQoKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG52YXIgdHJhbnNmb3JtUmVzdWx0ID0gZnVuY3Rpb24gKGRyaXZlclJlc3VsdCkge1xuICB2YXIgbWV0ZW9yUmVzdWx0ID0geyBudW1iZXJBZmZlY3RlZDogMCB9O1xuICBpZiAoZHJpdmVyUmVzdWx0KSB7XG4gICAgdmFyIG1vbmdvUmVzdWx0ID0gZHJpdmVyUmVzdWx0LnJlc3VsdDtcbiAgICAvLyBPbiB1cGRhdGVzIHdpdGggdXBzZXJ0OnRydWUsIHRoZSBpbnNlcnRlZCB2YWx1ZXMgY29tZSBhcyBhIGxpc3Qgb2ZcbiAgICAvLyB1cHNlcnRlZCB2YWx1ZXMgLS0gZXZlbiB3aXRoIG9wdGlvbnMubXVsdGksIHdoZW4gdGhlIHVwc2VydCBkb2VzIGluc2VydCxcbiAgICAvLyBpdCBvbmx5IGluc2VydHMgb25lIGVsZW1lbnQuXG4gICAgaWYgKG1vbmdvUmVzdWx0LnVwc2VydGVkQ291bnQpIHtcbiAgICAgIG1ldGVvclJlc3VsdC5udW1iZXJBZmZlY3RlZCA9IG1vbmdvUmVzdWx0LnVwc2VydGVkQ291bnQ7XG5cbiAgICAgIGlmIChtb25nb1Jlc3VsdC51cHNlcnRlZElkKSB7XG4gICAgICAgIG1ldGVvclJlc3VsdC5pbnNlcnRlZElkID0gbW9uZ29SZXN1bHQudXBzZXJ0ZWRJZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbiB3YXMgdXNlZCBiZWZvcmUgTW9uZ28gNS4wLCBpbiBNb25nbyA1LjAgd2UgYXJlIG5vdCByZWNlaXZpbmcgdGhpcyBuXG4gICAgICAvLyBmaWVsZCBhbmQgc28gd2UgYXJlIHVzaW5nIG1vZGlmaWVkQ291bnQgaW5zdGVhZFxuICAgICAgbWV0ZW9yUmVzdWx0Lm51bWJlckFmZmVjdGVkID0gbW9uZ29SZXN1bHQubiB8fCBtb25nb1Jlc3VsdC5tYXRjaGVkQ291bnQgfHwgbW9uZ29SZXN1bHQubW9kaWZpZWRDb3VudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0ZW9yUmVzdWx0O1xufTtcblxuXG52YXIgTlVNX09QVElNSVNUSUNfVFJJRVMgPSAzO1xuXG4vLyBleHBvc2VkIGZvciB0ZXN0aW5nXG5Nb25nb0Nvbm5lY3Rpb24uX2lzQ2Fubm90Q2hhbmdlSWRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblxuICAvLyBNb25nbyAzLjIuKiByZXR1cm5zIGVycm9yIGFzIG5leHQgT2JqZWN0OlxuICAvLyB7bmFtZTogU3RyaW5nLCBjb2RlOiBOdW1iZXIsIGVycm1zZzogU3RyaW5nfVxuICAvLyBPbGRlciBNb25nbyByZXR1cm5zOlxuICAvLyB7bmFtZTogU3RyaW5nLCBjb2RlOiBOdW1iZXIsIGVycjogU3RyaW5nfVxuICB2YXIgZXJyb3IgPSBlcnIuZXJybXNnIHx8IGVyci5lcnI7XG5cbiAgLy8gV2UgZG9uJ3QgdXNlIHRoZSBlcnJvciBjb2RlIGhlcmVcbiAgLy8gYmVjYXVzZSB0aGUgZXJyb3IgY29kZSB3ZSBvYnNlcnZlZCBpdCBwcm9kdWNpbmcgKDE2ODM3KSBhcHBlYXJzIHRvIGJlXG4gIC8vIGEgZmFyIG1vcmUgZ2VuZXJpYyBlcnJvciBjb2RlIGJhc2VkIG9uIGV4YW1pbmluZyB0aGUgc291cmNlLlxuICBpZiAoZXJyb3IuaW5kZXhPZignVGhlIF9pZCBmaWVsZCBjYW5ub3QgYmUgY2hhbmdlZCcpID09PSAwXG4gICAgfHwgZXJyb3IuaW5kZXhPZihcInRoZSAoaW1tdXRhYmxlKSBmaWVsZCAnX2lkJyB3YXMgZm91bmQgdG8gaGF2ZSBiZWVuIGFsdGVyZWQgdG8gX2lkXCIpICE9PSAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNpbXVsYXRlVXBzZXJ0V2l0aEluc2VydGVkSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgc2VsZWN0b3IsIG1vZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIC8vIFNUUkFURUdZOiBGaXJzdCB0cnkgZG9pbmcgYW4gdXBzZXJ0IHdpdGggYSBnZW5lcmF0ZWQgSUQuXG4gIC8vIElmIHRoaXMgdGhyb3dzIGFuIGVycm9yIGFib3V0IGNoYW5naW5nIHRoZSBJRCBvbiBhbiBleGlzdGluZyBkb2N1bWVudFxuICAvLyB0aGVuIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkYXRhYmFzZSwgd2Uga25vdyB3ZSBzaG91bGQgcHJvYmFibHkgdHJ5XG4gIC8vIGFuIHVwZGF0ZSB3aXRob3V0IHRoZSBnZW5lcmF0ZWQgSUQuIElmIGl0IGFmZmVjdGVkIDAgZG9jdW1lbnRzLFxuICAvLyB0aGVuIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkYXRhYmFzZSwgd2UgdGhlIGRvY3VtZW50IHRoYXQgZmlyc3RcbiAgLy8gZ2F2ZSB0aGUgZXJyb3IgaXMgcHJvYmFibHkgcmVtb3ZlZCBhbmQgd2UgbmVlZCB0byB0cnkgYW4gaW5zZXJ0IGFnYWluXG4gIC8vIFdlIGdvIGJhY2sgdG8gc3RlcCBvbmUgYW5kIHJlcGVhdC5cbiAgLy8gTGlrZSBhbGwgXCJvcHRpbWlzdGljIHdyaXRlXCIgc2NoZW1lcywgd2UgcmVseSBvbiB0aGUgZmFjdCB0aGF0IGl0J3NcbiAgLy8gdW5saWtlbHkgb3VyIHdyaXRlcyB3aWxsIGNvbnRpbnVlIHRvIGJlIGludGVyZmVyZWQgd2l0aCB1bmRlciBub3JtYWxcbiAgLy8gY2lyY3Vtc3RhbmNlcyAodGhvdWdoIHN1ZmZpY2llbnRseSBoZWF2eSBjb250ZW50aW9uIHdpdGggd3JpdGVyc1xuICAvLyBkaXNhZ3JlZWluZyBvbiB0aGUgZXhpc3RlbmNlIG9mIGFuIG9iamVjdCB3aWxsIGNhdXNlIHdyaXRlcyB0byBmYWlsXG4gIC8vIGluIHRoZW9yeSkuXG5cbiAgdmFyIGluc2VydGVkSWQgPSBvcHRpb25zLmluc2VydGVkSWQ7IC8vIG11c3QgZXhpc3RcbiAgdmFyIG1vbmdvT3B0c0ZvclVwZGF0ZSA9IHtcbiAgICBzYWZlOiB0cnVlLFxuICAgIG11bHRpOiBvcHRpb25zLm11bHRpXG4gIH07XG4gIHZhciBtb25nb09wdHNGb3JJbnNlcnQgPSB7XG4gICAgc2FmZTogdHJ1ZSxcbiAgICB1cHNlcnQ6IHRydWVcbiAgfTtcblxuICB2YXIgcmVwbGFjZW1lbnRXaXRoSWQgPSBPYmplY3QuYXNzaWduKFxuICAgIHJlcGxhY2VUeXBlcyh7X2lkOiBpbnNlcnRlZElkfSwgcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28pLFxuICAgIG1vZCk7XG5cbiAgdmFyIHRyaWVzID0gTlVNX09QVElNSVNUSUNfVFJJRVM7XG5cbiAgdmFyIGRvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRyaWVzLS07XG4gICAgaWYgKCEgdHJpZXMpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIlVwc2VydCBmYWlsZWQgYWZ0ZXIgXCIgKyBOVU1fT1BUSU1JU1RJQ19UUklFUyArIFwiIHRyaWVzLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtZXRob2QgPSBjb2xsZWN0aW9uLnVwZGF0ZU1hbnk7XG4gICAgICBpZighT2JqZWN0LmtleXMobW9kKS5zb21lKGtleSA9PiBrZXkuc3RhcnRzV2l0aChcIiRcIikpKXtcbiAgICAgICAgbWV0aG9kID0gY29sbGVjdGlvbi5yZXBsYWNlT25lLmJpbmQoY29sbGVjdGlvbik7XG4gICAgICB9XG4gICAgICBtZXRob2QoXG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICBtb2QsXG4gICAgICAgIG1vbmdvT3B0c0ZvclVwZGF0ZSxcbiAgICAgICAgYmluZEVudmlyb25tZW50Rm9yV3JpdGUoZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIChyZXN1bHQubW9kaWZpZWRDb3VudCB8fCByZXN1bHQudXBzZXJ0ZWRDb3VudCkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHtcbiAgICAgICAgICAgICAgbnVtYmVyQWZmZWN0ZWQ6IHJlc3VsdC5tb2RpZmllZENvdW50IHx8IHJlc3VsdC51cHNlcnRlZENvdW50LFxuICAgICAgICAgICAgICBpbnNlcnRlZElkOiByZXN1bHQudXBzZXJ0ZWRJZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9Db25kaXRpb25hbEluc2VydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBkb0NvbmRpdGlvbmFsSW5zZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29sbGVjdGlvbi5yZXBsYWNlT25lKFxuICAgICAgc2VsZWN0b3IsXG4gICAgICByZXBsYWNlbWVudFdpdGhJZCxcbiAgICAgIG1vbmdvT3B0c0Zvckluc2VydCxcbiAgICAgIGJpbmRFbnZpcm9ubWVudEZvcldyaXRlKGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmaWd1cmUgb3V0IGlmIHRoaXMgaXMgYVxuICAgICAgICAgIC8vIFwiY2Fubm90IGNoYW5nZSBfaWQgb2YgZG9jdW1lbnRcIiBlcnJvciwgYW5kXG4gICAgICAgICAgLy8gaWYgc28sIHRyeSBkb1VwZGF0ZSgpIGFnYWluLCB1cCB0byAzIHRpbWVzLlxuICAgICAgICAgIGlmIChNb25nb0Nvbm5lY3Rpb24uX2lzQ2Fubm90Q2hhbmdlSWRFcnJvcihlcnIpKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCB7XG4gICAgICAgICAgICBudW1iZXJBZmZlY3RlZDogcmVzdWx0LnVwc2VydGVkQ291bnQsXG4gICAgICAgICAgICBpbnNlcnRlZElkOiByZXN1bHQudXBzZXJ0ZWRJZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGRvVXBkYXRlKCk7XG59O1xuXG5fLmVhY2goW1wiaW5zZXJ0XCIsIFwidXBkYXRlXCIsIFwicmVtb3ZlXCIsIFwiZHJvcENvbGxlY3Rpb25cIiwgXCJkcm9wRGF0YWJhc2VcIl0sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKC8qIGFyZ3VtZW50cyAqLykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gTWV0ZW9yLndyYXBBc3luYyhzZWxmW1wiX1wiICsgbWV0aG9kXSkuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgfTtcbn0pO1xuXG4vLyBYWFggTW9uZ29Db25uZWN0aW9uLnVwc2VydCgpIGRvZXMgbm90IHJldHVybiB0aGUgaWQgb2YgdGhlIGluc2VydGVkIGRvY3VtZW50XG4vLyB1bmxlc3MgeW91IHNldCBpdCBleHBsaWNpdGx5IGluIHRoZSBzZWxlY3RvciBvciBtb2RpZmllciAoYXMgYSByZXBsYWNlbWVudFxuLy8gZG9jKS5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUudXBzZXJ0ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb25OYW1lLCBzZWxlY3RvciwgbW9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiAmJiAhIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBzZWxmLnVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgc2VsZWN0b3IsIG1vZCxcbiAgICAgICAgICAgICAgICAgICAgIF8uZXh0ZW5kKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgIHVwc2VydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgX3JldHVybk9iamVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgfSksIGNhbGxiYWNrKTtcbn07XG5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKVxuICAgIHNlbGVjdG9yID0ge307XG5cbiAgcmV0dXJuIG5ldyBDdXJzb3IoXG4gICAgc2VsZiwgbmV3IEN1cnNvckRlc2NyaXB0aW9uKGNvbGxlY3Rpb25OYW1lLCBzZWxlY3Rvciwgb3B0aW9ucykpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5maW5kT25lQXN5bmMgPSBhc3luYyBmdW5jdGlvbiAoY29sbGVjdGlvbl9uYW1lLCBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKVxuICAgIHNlbGVjdG9yID0ge307XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMubGltaXQgPSAxO1xuICByZXR1cm4gKGF3YWl0IHNlbGYuZmluZChjb2xsZWN0aW9uX25hbWUsIHNlbGVjdG9yLCBvcHRpb25zKS5mZXRjaEFzeW5jKCkpWzBdO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5maW5kT25lID0gZnVuY3Rpb24gKGNvbGxlY3Rpb25fbmFtZSwgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgcmV0dXJuIEZ1dHVyZS5mcm9tUHJvbWlzZShzZWxmLmZpbmRPbmVBc3luYyhjb2xsZWN0aW9uX25hbWUsIHNlbGVjdG9yLCBvcHRpb25zKSkud2FpdCgpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVJbmRleEFzeW5jID0gZnVuY3Rpb24gKGNvbGxlY3Rpb25OYW1lLCBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLy8gV2UgZXhwZWN0IHRoaXMgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGF0IHN0YXJ0dXAsIG5vdCBmcm9tIHdpdGhpbiBhIG1ldGhvZCxcbiAgLy8gc28gd2UgZG9uJ3QgaW50ZXJhY3Qgd2l0aCB0aGUgd3JpdGUgZmVuY2UuXG4gIHZhciBjb2xsZWN0aW9uID0gc2VsZi5yYXdDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgcmV0dXJuIGNvbGxlY3Rpb24uY3JlYXRlSW5kZXgoaW5kZXgsIG9wdGlvbnMpO1xufTtcblxuLy8gV2UnbGwgYWN0dWFsbHkgZGVzaWduIGFuIGluZGV4IEFQSSBsYXRlci4gRm9yIG5vdywgd2UganVzdCBwYXNzIHRocm91Z2ggdG9cbi8vIE1vbmdvJ3MsIGJ1dCBtYWtlIGl0IHN5bmNocm9ub3VzLlxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVJbmRleCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuXG4gIHJldHVybiBGdXR1cmUuZnJvbVByb21pc2Uoc2VsZi5jcmVhdGVJbmRleEFzeW5jKGNvbGxlY3Rpb25OYW1lLCBpbmRleCwgb3B0aW9ucykpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5jb3VudERvY3VtZW50cyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgLi4uYXJncykge1xuICBhcmdzID0gYXJncy5tYXAoYXJnID0+IHJlcGxhY2VUeXBlcyhhcmcsIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvKSk7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLnJhd0NvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICByZXR1cm4gY29sbGVjdGlvbi5jb3VudERvY3VtZW50cyguLi5hcmdzKTtcbn07XG5cbk1vbmdvQ29ubmVjdGlvbi5wcm90b3R5cGUuZXN0aW1hdGVkRG9jdW1lbnRDb3VudCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uTmFtZSwgLi4uYXJncykge1xuICBhcmdzID0gYXJncy5tYXAoYXJnID0+IHJlcGxhY2VUeXBlcyhhcmcsIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvKSk7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLnJhd0NvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICByZXR1cm4gY29sbGVjdGlvbi5lc3RpbWF0ZWREb2N1bWVudENvdW50KC4uLmFyZ3MpO1xufTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fZW5zdXJlSW5kZXggPSBNb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZUluZGV4O1xuXG5Nb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLl9kcm9wSW5kZXggPSBmdW5jdGlvbiAoY29sbGVjdGlvbk5hbWUsIGluZGV4KSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIGJ5IHRlc3QgY29kZSwgbm90IHdpdGhpbiBhIG1ldGhvZCwgc28gd2UgZG9uJ3RcbiAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgd3JpdGUgZmVuY2UuXG4gIHZhciBjb2xsZWN0aW9uID0gc2VsZi5yYXdDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKTtcbiAgdmFyIGZ1dHVyZSA9IG5ldyBGdXR1cmU7XG4gIHZhciBpbmRleE5hbWUgPSBjb2xsZWN0aW9uLmRyb3BJbmRleChpbmRleCwgZnV0dXJlLnJlc29sdmVyKCkpO1xuICBmdXR1cmUud2FpdCgpO1xufTtcblxuLy8gQ1VSU09SU1xuXG4vLyBUaGVyZSBhcmUgc2V2ZXJhbCBjbGFzc2VzIHdoaWNoIHJlbGF0ZSB0byBjdXJzb3JzOlxuLy9cbi8vIEN1cnNvckRlc2NyaXB0aW9uIHJlcHJlc2VudHMgdGhlIGFyZ3VtZW50cyB1c2VkIHRvIGNvbnN0cnVjdCBhIGN1cnNvcjpcbi8vIGNvbGxlY3Rpb25OYW1lLCBzZWxlY3RvciwgYW5kIChmaW5kKSBvcHRpb25zLiAgQmVjYXVzZSBpdCBpcyB1c2VkIGFzIGEga2V5XG4vLyBmb3IgY3Vyc29yIGRlLWR1cCwgZXZlcnl0aGluZyBpbiBpdCBzaG91bGQgZWl0aGVyIGJlIEpTT04tc3RyaW5naWZpYWJsZSBvclxuLy8gbm90IGFmZmVjdCBvYnNlcnZlQ2hhbmdlcyBvdXRwdXQgKGVnLCBvcHRpb25zLnRyYW5zZm9ybSBmdW5jdGlvbnMgYXJlIG5vdFxuLy8gc3RyaW5naWZpYWJsZSBidXQgZG8gbm90IGFmZmVjdCBvYnNlcnZlQ2hhbmdlcykuXG4vL1xuLy8gU3luY2hyb25vdXNDdXJzb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhIE1vbmdvREIgY3Vyc29yXG4vLyB3aGljaCBpbmNsdWRlcyBmdWxseS1zeW5jaHJvbm91cyB2ZXJzaW9ucyBvZiBmb3JFYWNoLCBldGMuXG4vL1xuLy8gQ3Vyc29yIGlzIHRoZSBjdXJzb3Igb2JqZWN0IHJldHVybmVkIGZyb20gZmluZCgpLCB3aGljaCBpbXBsZW1lbnRzIHRoZVxuLy8gZG9jdW1lbnRlZCBNb25nby5Db2xsZWN0aW9uIGN1cnNvciBBUEkuICBJdCB3cmFwcyBhIEN1cnNvckRlc2NyaXB0aW9uIGFuZCBhXG4vLyBTeW5jaHJvbm91c0N1cnNvciAobGF6aWx5OiBpdCBkb2Vzbid0IGNvbnRhY3QgTW9uZ28gdW50aWwgeW91IGNhbGwgYSBtZXRob2Rcbi8vIGxpa2UgZmV0Y2ggb3IgZm9yRWFjaCBvbiBpdCkuXG4vL1xuLy8gT2JzZXJ2ZUhhbmRsZSBpcyB0aGUgXCJvYnNlcnZlIGhhbmRsZVwiIHJldHVybmVkIGZyb20gb2JzZXJ2ZUNoYW5nZXMuIEl0IGhhcyBhXG4vLyByZWZlcmVuY2UgdG8gYW4gT2JzZXJ2ZU11bHRpcGxleGVyLlxuLy9cbi8vIE9ic2VydmVNdWx0aXBsZXhlciBhbGxvd3MgbXVsdGlwbGUgaWRlbnRpY2FsIE9ic2VydmVIYW5kbGVzIHRvIGJlIGRyaXZlbiBieSBhXG4vLyBzaW5nbGUgb2JzZXJ2ZSBkcml2ZXIuXG4vL1xuLy8gVGhlcmUgYXJlIHR3byBcIm9ic2VydmUgZHJpdmVyc1wiIHdoaWNoIGRyaXZlIE9ic2VydmVNdWx0aXBsZXhlcnM6XG4vLyAgIC0gUG9sbGluZ09ic2VydmVEcml2ZXIgY2FjaGVzIHRoZSByZXN1bHRzIG9mIGEgcXVlcnkgYW5kIHJlcnVucyBpdCB3aGVuXG4vLyAgICAgbmVjZXNzYXJ5LlxuLy8gICAtIE9wbG9nT2JzZXJ2ZURyaXZlciBmb2xsb3dzIHRoZSBNb25nbyBvcGVyYXRpb24gbG9nIHRvIGRpcmVjdGx5IG9ic2VydmVcbi8vICAgICBkYXRhYmFzZSBjaGFuZ2VzLlxuLy8gQm90aCBpbXBsZW1lbnRhdGlvbnMgZm9sbG93IHRoZSBzYW1lIHNpbXBsZSBpbnRlcmZhY2U6IHdoZW4geW91IGNyZWF0ZSB0aGVtLFxuLy8gdGhleSBzdGFydCBzZW5kaW5nIG9ic2VydmVDaGFuZ2VzIGNhbGxiYWNrcyAoYW5kIGEgcmVhZHkoKSBpbnZvY2F0aW9uKSB0b1xuLy8gdGhlaXIgT2JzZXJ2ZU11bHRpcGxleGVyLCBhbmQgeW91IHN0b3AgdGhlbSBieSBjYWxsaW5nIHRoZWlyIHN0b3AoKSBtZXRob2QuXG5cbkN1cnNvckRlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGNvbGxlY3Rpb25OYW1lLCBzZWxlY3Rvciwgb3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZTtcbiAgc2VsZi5zZWxlY3RvciA9IE1vbmdvLkNvbGxlY3Rpb24uX3Jld3JpdGVTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHNlbGYub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG59O1xuXG5DdXJzb3IgPSBmdW5jdGlvbiAobW9uZ28sIGN1cnNvckRlc2NyaXB0aW9uKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLl9tb25nbyA9IG1vbmdvO1xuICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbiA9IGN1cnNvckRlc2NyaXB0aW9uO1xuICBzZWxmLl9zeW5jaHJvbm91c0N1cnNvciA9IG51bGw7XG59O1xuXG5mdW5jdGlvbiBzZXR1cFN5bmNocm9ub3VzQ3Vyc29yKGN1cnNvciwgbWV0aG9kKSB7XG4gIC8vIFlvdSBjYW4gb25seSBvYnNlcnZlIGEgdGFpbGFibGUgY3Vyc29yLlxuICBpZiAoY3Vyc29yLl9jdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLnRhaWxhYmxlKVxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhbGwgJyArIG1ldGhvZCArICcgb24gYSB0YWlsYWJsZSBjdXJzb3InKTtcblxuICBpZiAoIWN1cnNvci5fc3luY2hyb25vdXNDdXJzb3IpIHtcbiAgICBjdXJzb3IuX3N5bmNocm9ub3VzQ3Vyc29yID0gY3Vyc29yLl9tb25nby5fY3JlYXRlU3luY2hyb25vdXNDdXJzb3IoXG4gICAgICBjdXJzb3IuX2N1cnNvckRlc2NyaXB0aW9uLFxuICAgICAge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgXCJjdXJzb3JcIiBhcmd1bWVudCB0byBmb3JFYWNoL21hcCBjYWxsYmFja3MgaXMgdGhlXG4gICAgICAgIC8vIEN1cnNvciwgbm90IHRoZSBTeW5jaHJvbm91c0N1cnNvci5cbiAgICAgICAgc2VsZkZvckl0ZXJhdGlvbjogY3Vyc29yLFxuICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjdXJzb3IuX3N5bmNocm9ub3VzQ3Vyc29yO1xufVxuXG5cbkN1cnNvci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX21vbmdvLnJhd0NvbGxlY3Rpb24odGhpcy5fY3Vyc29yRGVzY3JpcHRpb24uY29sbGVjdGlvbk5hbWUpO1xuICByZXR1cm4gUHJvbWlzZS5hd2FpdChjb2xsZWN0aW9uLmNvdW50RG9jdW1lbnRzKFxuICAgIHJlcGxhY2VUeXBlcyh0aGlzLl9jdXJzb3JEZXNjcmlwdGlvbi5zZWxlY3RvciwgcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28pLFxuICAgIHJlcGxhY2VUeXBlcyh0aGlzLl9jdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLCByZXBsYWNlTWV0ZW9yQXRvbVdpdGhNb25nbyksXG4gICkpO1xufTtcblxuWy4uLkFTWU5DX0NVUlNPUl9NRVRIT0RTLCBTeW1ib2wuaXRlcmF0b3IsIFN5bWJvbC5hc3luY0l0ZXJhdG9yXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAvLyBjb3VudCBpcyBoYW5kbGVkIHNwZWNpYWxseSBzaW5jZSB3ZSBkb24ndCB3YW50IHRvIGNyZWF0ZSBhIGN1cnNvci5cbiAgLy8gaXQgaXMgc3RpbGwgaW5jbHVkZWQgaW4gQVNZTkNfQ1VSU09SX01FVEhPRFMgYmVjYXVzZSB3ZSBzdGlsbCB3YW50IGFuIGFzeW5jIHZlcnNpb24gb2YgaXQgdG8gZXhpc3QuXG4gIGlmIChtZXRob2ROYW1lICE9PSAnY291bnQnKSB7XG4gICAgQ3Vyc29yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBzZXR1cFN5bmNocm9ub3VzQ3Vyc29yKHRoaXMsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIGN1cnNvclttZXRob2ROYW1lXSguLi5hcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhlc2UgbWV0aG9kcyBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuICBpZiAobWV0aG9kTmFtZSA9PT0gU3ltYm9sLml0ZXJhdG9yIHx8IG1ldGhvZE5hbWUgPT09IFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kTmFtZUFzeW5jID0gZ2V0QXN5bmNNZXRob2ROYW1lKG1ldGhvZE5hbWUpO1xuICBDdXJzb3IucHJvdG90eXBlW21ldGhvZE5hbWVBc3luY10gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzW21ldGhvZE5hbWVdLmlzQ2FsbGVkRnJvbUFzeW5jID0gdHJ1ZTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpc1ttZXRob2ROYW1lXSguLi5hcmdzKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9O1xufSk7XG5cbkN1cnNvci5wcm90b3R5cGUuZ2V0VHJhbnNmb3JtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy50cmFuc2Zvcm07XG59O1xuXG4vLyBXaGVuIHlvdSBjYWxsIE1ldGVvci5wdWJsaXNoKCkgd2l0aCBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIEN1cnNvciwgd2UgbmVlZFxuLy8gdG8gdHJhbnNtdXRlIGl0IGludG8gdGhlIGVxdWl2YWxlbnQgc3Vic2NyaXB0aW9uLiAgVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdFxuLy8gZG9lcyB0aGF0LlxuQ3Vyc29yLnByb3RvdHlwZS5fcHVibGlzaEN1cnNvciA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY29sbGVjdGlvbiA9IHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lO1xuICByZXR1cm4gTW9uZ28uQ29sbGVjdGlvbi5fcHVibGlzaEN1cnNvcihzZWxmLCBzdWIsIGNvbGxlY3Rpb24pO1xufTtcblxuLy8gVXNlZCB0byBndWFyYW50ZWUgdGhhdCBwdWJsaXNoIGZ1bmN0aW9ucyByZXR1cm4gYXQgbW9zdCBvbmUgY3Vyc29yIHBlclxuLy8gY29sbGVjdGlvbi4gUHJpdmF0ZSwgYmVjYXVzZSB3ZSBtaWdodCBsYXRlciBoYXZlIGN1cnNvcnMgdGhhdCBpbmNsdWRlXG4vLyBkb2N1bWVudHMgZnJvbSBtdWx0aXBsZSBjb2xsZWN0aW9ucyBzb21laG93LlxuQ3Vyc29yLnByb3RvdHlwZS5fZ2V0Q29sbGVjdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lO1xufTtcblxuQ3Vyc29yLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGNhbGxiYWNrcykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiBMb2NhbENvbGxlY3Rpb24uX29ic2VydmVGcm9tT2JzZXJ2ZUNoYW5nZXMoc2VsZiwgY2FsbGJhY2tzKTtcbn07XG5cbkN1cnNvci5wcm90b3R5cGUub2JzZXJ2ZUFzeW5jID0gZnVuY3Rpb24gKGNhbGxiYWNrcykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKHRoaXMub2JzZXJ2ZShjYWxsYmFja3MpKSk7XG59O1xuXG5DdXJzb3IucHJvdG90eXBlLm9ic2VydmVDaGFuZ2VzID0gZnVuY3Rpb24gKGNhbGxiYWNrcywgb3B0aW9ucyA9IHt9KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG1ldGhvZHMgPSBbXG4gICAgJ2FkZGVkQXQnLFxuICAgICdhZGRlZCcsXG4gICAgJ2NoYW5nZWRBdCcsXG4gICAgJ2NoYW5nZWQnLFxuICAgICdyZW1vdmVkQXQnLFxuICAgICdyZW1vdmVkJyxcbiAgICAnbW92ZWRUbydcbiAgXTtcbiAgdmFyIG9yZGVyZWQgPSBMb2NhbENvbGxlY3Rpb24uX29ic2VydmVDaGFuZ2VzQ2FsbGJhY2tzQXJlT3JkZXJlZChjYWxsYmFja3MpO1xuXG4gIGxldCBleGNlcHRpb25OYW1lID0gY2FsbGJhY2tzLl9mcm9tT2JzZXJ2ZSA/ICdvYnNlcnZlJyA6ICdvYnNlcnZlQ2hhbmdlcyc7XG4gIGV4Y2VwdGlvbk5hbWUgKz0gJyBjYWxsYmFjayc7XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgaWYgKGNhbGxiYWNrc1ttZXRob2RdICYmIHR5cGVvZiBjYWxsYmFja3NbbWV0aG9kXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNhbGxiYWNrc1ttZXRob2RdID0gTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChjYWxsYmFja3NbbWV0aG9kXSwgbWV0aG9kICsgZXhjZXB0aW9uTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2VsZi5fbW9uZ28uX29ic2VydmVDaGFuZ2VzKFxuICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLCBvcmRlcmVkLCBjYWxsYmFja3MsIG9wdGlvbnMubm9uTXV0YXRpbmdDYWxsYmFja3MpO1xufTtcblxuQ3Vyc29yLnByb3RvdHlwZS5vYnNlcnZlQ2hhbmdlc0FzeW5jID0gYXN5bmMgZnVuY3Rpb24gKGNhbGxiYWNrcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUodGhpcy5vYnNlcnZlQ2hhbmdlcyhjYWxsYmFja3MsIG9wdGlvbnMpKSk7XG59O1xuXG5Nb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVTeW5jaHJvbm91c0N1cnNvciA9IGZ1bmN0aW9uKFxuICAgIGN1cnNvckRlc2NyaXB0aW9uLCBvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgb3B0aW9ucyA9IF8ucGljayhvcHRpb25zIHx8IHt9LCAnc2VsZkZvckl0ZXJhdGlvbicsICd1c2VUcmFuc2Zvcm0nKTtcblxuICB2YXIgY29sbGVjdGlvbiA9IHNlbGYucmF3Q29sbGVjdGlvbihjdXJzb3JEZXNjcmlwdGlvbi5jb2xsZWN0aW9uTmFtZSk7XG4gIHZhciBjdXJzb3JPcHRpb25zID0gY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucztcbiAgdmFyIG1vbmdvT3B0aW9ucyA9IHtcbiAgICBzb3J0OiBjdXJzb3JPcHRpb25zLnNvcnQsXG4gICAgbGltaXQ6IGN1cnNvck9wdGlvbnMubGltaXQsXG4gICAgc2tpcDogY3Vyc29yT3B0aW9ucy5za2lwLFxuICAgIHByb2plY3Rpb246IGN1cnNvck9wdGlvbnMuZmllbGRzIHx8IGN1cnNvck9wdGlvbnMucHJvamVjdGlvbixcbiAgICByZWFkUHJlZmVyZW5jZTogY3Vyc29yT3B0aW9ucy5yZWFkUHJlZmVyZW5jZSxcbiAgfTtcblxuICAvLyBEbyB3ZSB3YW50IGEgdGFpbGFibGUgY3Vyc29yICh3aGljaCBvbmx5IHdvcmtzIG9uIGNhcHBlZCBjb2xsZWN0aW9ucyk/XG4gIGlmIChjdXJzb3JPcHRpb25zLnRhaWxhYmxlKSB7XG4gICAgbW9uZ29PcHRpb25zLm51bWJlck9mUmV0cmllcyA9IC0xO1xuICB9XG5cbiAgdmFyIGRiQ3Vyc29yID0gY29sbGVjdGlvbi5maW5kKFxuICAgIHJlcGxhY2VUeXBlcyhjdXJzb3JEZXNjcmlwdGlvbi5zZWxlY3RvciwgcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28pLFxuICAgIG1vbmdvT3B0aW9ucyk7XG5cbiAgLy8gRG8gd2Ugd2FudCBhIHRhaWxhYmxlIGN1cnNvciAod2hpY2ggb25seSB3b3JrcyBvbiBjYXBwZWQgY29sbGVjdGlvbnMpP1xuICBpZiAoY3Vyc29yT3B0aW9ucy50YWlsYWJsZSkge1xuICAgIC8vIFdlIHdhbnQgYSB0YWlsYWJsZSBjdXJzb3IuLi5cbiAgICBkYkN1cnNvci5hZGRDdXJzb3JGbGFnKFwidGFpbGFibGVcIiwgdHJ1ZSlcbiAgICAvLyAuLi4gYW5kIGZvciB0aGUgc2VydmVyIHRvIHdhaXQgYSBiaXQgaWYgYW55IGdldE1vcmUgaGFzIG5vIGRhdGEgKHJhdGhlclxuICAgIC8vIHRoYW4gbWFraW5nIHVzIHB1dCB0aGUgcmVsZXZhbnQgc2xlZXBzIGluIHRoZSBjbGllbnQpLi4uXG4gICAgZGJDdXJzb3IuYWRkQ3Vyc29yRmxhZyhcImF3YWl0RGF0YVwiLCB0cnVlKVxuXG4gICAgLy8gQW5kIGlmIHRoaXMgaXMgb24gdGhlIG9wbG9nIGNvbGxlY3Rpb24gYW5kIHRoZSBjdXJzb3Igc3BlY2lmaWVzIGEgJ3RzJyxcbiAgICAvLyB0aGVuIHNldCB0aGUgdW5kb2N1bWVudGVkIG9wbG9nIHJlcGxheSBmbGFnLCB3aGljaCBkb2VzIGEgc3BlY2lhbCBzY2FuIHRvXG4gICAgLy8gZmluZCB0aGUgZmlyc3QgZG9jdW1lbnQgKGluc3RlYWQgb2YgY3JlYXRpbmcgYW4gaW5kZXggb24gdHMpLiBUaGlzIGlzIGFcbiAgICAvLyB2ZXJ5IGhhcmQtY29kZWQgTW9uZ28gZmxhZyB3aGljaCBvbmx5IHdvcmtzIG9uIHRoZSBvcGxvZyBjb2xsZWN0aW9uIGFuZFxuICAgIC8vIG9ubHkgd29ya3Mgd2l0aCB0aGUgdHMgZmllbGQuXG4gICAgaWYgKGN1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lID09PSBPUExPR19DT0xMRUNUSU9OICYmXG4gICAgICAgIGN1cnNvckRlc2NyaXB0aW9uLnNlbGVjdG9yLnRzKSB7XG4gICAgICBkYkN1cnNvci5hZGRDdXJzb3JGbGFnKFwib3Bsb2dSZXBsYXlcIiwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGN1cnNvck9wdGlvbnMubWF4VGltZU1zICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRiQ3Vyc29yID0gZGJDdXJzb3IubWF4VGltZU1TKGN1cnNvck9wdGlvbnMubWF4VGltZU1zKTtcbiAgfVxuICBpZiAodHlwZW9mIGN1cnNvck9wdGlvbnMuaGludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkYkN1cnNvciA9IGRiQ3Vyc29yLmhpbnQoY3Vyc29yT3B0aW9ucy5oaW50KTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU3luY2hyb25vdXNDdXJzb3IoZGJDdXJzb3IsIGN1cnNvckRlc2NyaXB0aW9uLCBvcHRpb25zLCBjb2xsZWN0aW9uKTtcbn07XG5cbnZhciBTeW5jaHJvbm91c0N1cnNvciA9IGZ1bmN0aW9uIChkYkN1cnNvciwgY3Vyc29yRGVzY3JpcHRpb24sIG9wdGlvbnMsIGNvbGxlY3Rpb24pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBvcHRpb25zID0gXy5waWNrKG9wdGlvbnMgfHwge30sICdzZWxmRm9ySXRlcmF0aW9uJywgJ3VzZVRyYW5zZm9ybScpO1xuXG4gIHNlbGYuX2RiQ3Vyc29yID0gZGJDdXJzb3I7XG4gIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uID0gY3Vyc29yRGVzY3JpcHRpb247XG4gIC8vIFRoZSBcInNlbGZcIiBhcmd1bWVudCBwYXNzZWQgdG8gZm9yRWFjaC9tYXAgY2FsbGJhY2tzLiBJZiB3ZSdyZSB3cmFwcGVkXG4gIC8vIGluc2lkZSBhIHVzZXItdmlzaWJsZSBDdXJzb3IsIHdlIHdhbnQgdG8gcHJvdmlkZSB0aGUgb3V0ZXIgY3Vyc29yIVxuICBzZWxmLl9zZWxmRm9ySXRlcmF0aW9uID0gb3B0aW9ucy5zZWxmRm9ySXRlcmF0aW9uIHx8IHNlbGY7XG4gIGlmIChvcHRpb25zLnVzZVRyYW5zZm9ybSAmJiBjdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLnRyYW5zZm9ybSkge1xuICAgIHNlbGYuX3RyYW5zZm9ybSA9IExvY2FsQ29sbGVjdGlvbi53cmFwVHJhbnNmb3JtKFxuICAgICAgY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy50cmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RyYW5zZm9ybSA9IG51bGw7XG4gIH1cblxuICBzZWxmLl9zeW5jaHJvbm91c0NvdW50ID0gRnV0dXJlLndyYXAoXG4gICAgY29sbGVjdGlvbi5jb3VudERvY3VtZW50cy5iaW5kKFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcGxhY2VUeXBlcyhjdXJzb3JEZXNjcmlwdGlvbi5zZWxlY3RvciwgcmVwbGFjZU1ldGVvckF0b21XaXRoTW9uZ28pLFxuICAgICAgcmVwbGFjZVR5cGVzKGN1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMsIHJlcGxhY2VNZXRlb3JBdG9tV2l0aE1vbmdvKSxcbiAgICApXG4gICk7XG4gIHNlbGYuX3Zpc2l0ZWRJZHMgPSBuZXcgTG9jYWxDb2xsZWN0aW9uLl9JZE1hcDtcbn07XG5cbl8uZXh0ZW5kKFN5bmNocm9ub3VzQ3Vyc29yLnByb3RvdHlwZSwge1xuICAvLyBSZXR1cm5zIGEgUHJvbWlzZSBmb3IgdGhlIG5leHQgb2JqZWN0IGZyb20gdGhlIHVuZGVybHlpbmcgY3Vyc29yIChiZWZvcmVcbiAgLy8gdGhlIE1vbmdvLT5NZXRlb3IgdHlwZSByZXBsYWNlbWVudCkuXG4gIF9yYXdOZXh0T2JqZWN0UHJvbWlzZTogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZWxmLl9kYkN1cnNvci5uZXh0KChlcnIsIGRvYykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShkb2MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIGEgUHJvbWlzZSBmb3IgdGhlIG5leHQgb2JqZWN0IGZyb20gdGhlIGN1cnNvciwgc2tpcHBpbmcgdGhvc2Ugd2hvc2VcbiAgLy8gSURzIHdlJ3ZlIGFscmVhZHkgc2VlbiBhbmQgcmVwbGFjaW5nIE1vbmdvIGF0b21zIHdpdGggTWV0ZW9yIGF0b21zLlxuICBfbmV4dE9iamVjdFByb21pc2U6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGRvYyA9IGF3YWl0IHNlbGYuX3Jhd05leHRPYmplY3RQcm9taXNlKCk7XG5cbiAgICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcbiAgICAgIGRvYyA9IHJlcGxhY2VUeXBlcyhkb2MsIHJlcGxhY2VNb25nb0F0b21XaXRoTWV0ZW9yKTtcblxuICAgICAgaWYgKCFzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLnRhaWxhYmxlICYmIF8uaGFzKGRvYywgJ19pZCcpKSB7XG4gICAgICAgIC8vIERpZCBNb25nbyBnaXZlIHVzIGR1cGxpY2F0ZSBkb2N1bWVudHMgaW4gdGhlIHNhbWUgY3Vyc29yPyBJZiBzbyxcbiAgICAgICAgLy8gaWdub3JlIHRoaXMgb25lLiAoRG8gdGhpcyBiZWZvcmUgdGhlIHRyYW5zZm9ybSwgc2luY2UgdHJhbnNmb3JtIG1pZ2h0XG4gICAgICAgIC8vIHJldHVybiBzb21lIHVucmVsYXRlZCB2YWx1ZS4pIFdlIGRvbid0IGRvIHRoaXMgZm9yIHRhaWxhYmxlIGN1cnNvcnMsXG4gICAgICAgIC8vIGJlY2F1c2Ugd2Ugd2FudCB0byBtYWludGFpbiBPKDEpIG1lbW9yeSB1c2FnZS4gQW5kIGlmIHRoZXJlIGlzbid0IF9pZFxuICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gKG1heWJlIGl0J3MgdGhlIG9wbG9nKSwgdGhlbiB3ZSBkb24ndCBkbyB0aGlzIGVpdGhlci5cbiAgICAgICAgLy8gKEJlIGNhcmVmdWwgdG8gZG8gdGhpcyBmb3IgZmFsc2V5IGJ1dCBleGlzdGluZyBfaWQsIHRob3VnaC4pXG4gICAgICAgIGlmIChzZWxmLl92aXNpdGVkSWRzLmhhcyhkb2MuX2lkKSkgY29udGludWU7XG4gICAgICAgIHNlbGYuX3Zpc2l0ZWRJZHMuc2V0KGRvYy5faWQsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5fdHJhbnNmb3JtKVxuICAgICAgICBkb2MgPSBzZWxmLl90cmFuc2Zvcm0oZG9jKTtcblxuICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggaXMgcmVzb2x2ZWQgd2l0aCB0aGUgbmV4dCBvYmplY3QgKGxpa2Ugd2l0aFxuICAvLyBfbmV4dE9iamVjdFByb21pc2UpIG9yIHJlamVjdGVkIGlmIHRoZSBjdXJzb3IgZG9lc24ndCByZXR1cm4gd2l0aGluXG4gIC8vIHRpbWVvdXRNUyBtcy5cbiAgX25leHRPYmplY3RQcm9taXNlV2l0aFRpbWVvdXQ6IGZ1bmN0aW9uICh0aW1lb3V0TVMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXRpbWVvdXRNUykge1xuICAgICAgcmV0dXJuIHNlbGYuX25leHRPYmplY3RQcm9taXNlKCk7XG4gICAgfVxuICAgIGNvbnN0IG5leHRPYmplY3RQcm9taXNlID0gc2VsZi5fbmV4dE9iamVjdFByb21pc2UoKTtcbiAgICBjb25zdCB0aW1lb3V0RXJyID0gbmV3IEVycm9yKCdDbGllbnQtc2lkZSB0aW1lb3V0IHdhaXRpbmcgZm9yIG5leHQgb2JqZWN0Jyk7XG4gICAgY29uc3QgdGltZW91dFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWplY3QodGltZW91dEVycik7XG4gICAgICB9LCB0aW1lb3V0TVMpO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW25leHRPYmplY3RQcm9taXNlLCB0aW1lb3V0UHJvbWlzZV0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyID09PSB0aW1lb3V0RXJyKSB7XG4gICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICB9LFxuXG4gIF9uZXh0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzZWxmLl9uZXh0T2JqZWN0UHJvbWlzZSgpLmF3YWl0KCk7XG4gIH0sXG5cbiAgZm9yRWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHdyYXBwZWRGbiA9IE1ldGVvci53cmFwRm4oY2FsbGJhY2spO1xuXG4gICAgLy8gR2V0IGJhY2sgdG8gdGhlIGJlZ2lubmluZy5cbiAgICBzZWxmLl9yZXdpbmQoKTtcblxuICAgIC8vIFdlIGltcGxlbWVudCB0aGUgbG9vcCBvdXJzZWxmIGluc3RlYWQgb2YgdXNpbmcgc2VsZi5fZGJDdXJzb3IuZWFjaCxcbiAgICAvLyBiZWNhdXNlIFwiZWFjaFwiIHdpbGwgY2FsbCBpdHMgY2FsbGJhY2sgb3V0c2lkZSBvZiBhIGZpYmVyIHdoaWNoIG1ha2VzIGl0XG4gICAgLy8gbXVjaCBtb3JlIGNvbXBsZXggdG8gbWFrZSB0aGlzIGZ1bmN0aW9uIHN5bmNocm9ub3VzLlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBkb2MgPSBzZWxmLl9uZXh0T2JqZWN0KCk7XG4gICAgICBpZiAoIWRvYykgcmV0dXJuO1xuICAgICAgd3JhcHBlZEZuLmNhbGwodGhpc0FyZywgZG9jLCBpbmRleCsrLCBzZWxmLl9zZWxmRm9ySXRlcmF0aW9uKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWFhYIEFsbG93IG92ZXJsYXBwaW5nIGNhbGxiYWNrIGV4ZWN1dGlvbnMgaWYgY2FsbGJhY2sgeWllbGRzLlxuICBtYXA6IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBjb25zdCB3cmFwcGVkRm4gPSBNZXRlb3Iud3JhcEZuKGNhbGxiYWNrKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgc2VsZi5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGluZGV4KSB7XG4gICAgICByZXMucHVzaCh3cmFwcGVkRm4uY2FsbCh0aGlzQXJnLCBkb2MsIGluZGV4LCBzZWxmLl9zZWxmRm9ySXRlcmF0aW9uKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSxcblxuICBfcmV3aW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8ga25vd24gdG8gYmUgc3luY2hyb25vdXNcbiAgICBzZWxmLl9kYkN1cnNvci5yZXdpbmQoKTtcblxuICAgIHNlbGYuX3Zpc2l0ZWRJZHMgPSBuZXcgTG9jYWxDb2xsZWN0aW9uLl9JZE1hcDtcbiAgfSxcblxuICAvLyBNb3N0bHkgdXNhYmxlIGZvciB0YWlsYWJsZSBjdXJzb3JzLlxuICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuX2RiQ3Vyc29yLmNsb3NlKCk7XG4gIH0sXG5cbiAgZmV0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHNlbGYubWFwKF8uaWRlbnRpdHkpO1xuICB9LFxuXG4gIGNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBzZWxmLl9zeW5jaHJvbm91c0NvdW50KCkud2FpdCgpO1xuICB9LFxuXG4gIC8vIFRoaXMgbWV0aG9kIGlzIE5PVCB3cmFwcGVkIGluIEN1cnNvci5cbiAgZ2V0UmF3T2JqZWN0czogZnVuY3Rpb24gKG9yZGVyZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKG9yZGVyZWQpIHtcbiAgICAgIHJldHVybiBzZWxmLmZldGNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHRzID0gbmV3IExvY2FsQ29sbGVjdGlvbi5fSWRNYXA7XG4gICAgICBzZWxmLmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICAgICAgICByZXN1bHRzLnNldChkb2MuX2lkLCBkb2MpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH1cbn0pO1xuXG5TeW5jaHJvbm91c0N1cnNvci5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIEdldCBiYWNrIHRvIHRoZSBiZWdpbm5pbmcuXG4gIHNlbGYuX3Jld2luZCgpO1xuXG4gIHJldHVybiB7XG4gICAgbmV4dCgpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHNlbGYuX25leHRPYmplY3QoKTtcbiAgICAgIHJldHVybiBkb2MgPyB7XG4gICAgICAgIHZhbHVlOiBkb2NcbiAgICAgIH0gOiB7XG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuU3luY2hyb25vdXNDdXJzb3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3luY1Jlc3VsdCA9IHRoaXNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICByZXR1cm4ge1xuICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN5bmNSZXN1bHQubmV4dCgpKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIFRhaWxzIHRoZSBjdXJzb3IgZGVzY3JpYmVkIGJ5IGN1cnNvckRlc2NyaXB0aW9uLCBtb3N0IGxpa2VseSBvbiB0aGVcbi8vIG9wbG9nLiBDYWxscyBkb2NDYWxsYmFjayB3aXRoIGVhY2ggZG9jdW1lbnQgZm91bmQuIElnbm9yZXMgZXJyb3JzIGFuZCBqdXN0XG4vLyByZXN0YXJ0cyB0aGUgdGFpbCBvbiBlcnJvci5cbi8vXG4vLyBJZiB0aW1lb3V0TVMgaXMgc2V0LCB0aGVuIGlmIHdlIGRvbid0IGdldCBhIG5ldyBkb2N1bWVudCBldmVyeSB0aW1lb3V0TVMsXG4vLyBraWxsIGFuZCByZXN0YXJ0IHRoZSBjdXJzb3IuIFRoaXMgaXMgcHJpbWFyaWx5IGEgd29ya2Fyb3VuZCBmb3IgIzg1OTguXG5Nb25nb0Nvbm5lY3Rpb24ucHJvdG90eXBlLnRhaWwgPSBmdW5jdGlvbiAoY3Vyc29yRGVzY3JpcHRpb24sIGRvY0NhbGxiYWNrLCB0aW1lb3V0TVMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIWN1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMudGFpbGFibGUpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgdGFpbCBhIHRhaWxhYmxlIGN1cnNvclwiKTtcblxuICB2YXIgY3Vyc29yID0gc2VsZi5fY3JlYXRlU3luY2hyb25vdXNDdXJzb3IoY3Vyc29yRGVzY3JpcHRpb24pO1xuXG4gIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gIHZhciBsYXN0VFM7XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkb2MgPSBudWxsO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoc3RvcHBlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jID0gY3Vyc29yLl9uZXh0T2JqZWN0UHJvbWlzZVdpdGhUaW1lb3V0KHRpbWVvdXRNUykuYXdhaXQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUaGVyZSdzIG5vIGdvb2Qgd2F5IHRvIGZpZ3VyZSBvdXQgaWYgdGhpcyB3YXMgYWN0dWFsbHkgYW4gZXJyb3IgZnJvbVxuICAgICAgICAvLyBNb25nbywgb3IganVzdCBjbGllbnQtc2lkZSAoaW5jbHVkaW5nIG91ciBvd24gdGltZW91dCBlcnJvcikuIEFoXG4gICAgICAgIC8vIHdlbGwuIEJ1dCBlaXRoZXIgd2F5LCB3ZSBuZWVkIHRvIHJldHJ5IHRoZSBjdXJzb3IgKHVubGVzcyB0aGUgZmFpbHVyZVxuICAgICAgICAvLyB3YXMgYmVjYXVzZSB0aGUgb2JzZXJ2ZSBnb3Qgc3RvcHBlZCkuXG4gICAgICAgIGRvYyA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBTaW5jZSB3ZSBhd2FpdGVkIGEgcHJvbWlzZSBhYm92ZSwgd2UgbmVlZCB0byBjaGVjayBhZ2FpbiB0byBzZWUgaWZcbiAgICAgIC8vIHdlJ3ZlIGJlZW4gc3RvcHBlZCBiZWZvcmUgY2FsbGluZyB0aGUgY2FsbGJhY2suXG4gICAgICBpZiAoc3RvcHBlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGRvYykge1xuICAgICAgICAvLyBJZiBhIHRhaWxhYmxlIGN1cnNvciBjb250YWlucyBhIFwidHNcIiBmaWVsZCwgdXNlIGl0IHRvIHJlY3JlYXRlIHRoZVxuICAgICAgICAvLyBjdXJzb3Igb24gZXJyb3IuIChcInRzXCIgaXMgYSBzdGFuZGFyZCB0aGF0IE1vbmdvIHVzZXMgaW50ZXJuYWxseSBmb3JcbiAgICAgICAgLy8gdGhlIG9wbG9nLCBhbmQgdGhlcmUncyBhIHNwZWNpYWwgZmxhZyB0aGF0IGxldHMgeW91IGRvIGJpbmFyeSBzZWFyY2hcbiAgICAgICAgLy8gb24gaXQgaW5zdGVhZCBvZiBuZWVkaW5nIHRvIHVzZSBhbiBpbmRleC4pXG4gICAgICAgIGxhc3RUUyA9IGRvYy50cztcbiAgICAgICAgZG9jQ2FsbGJhY2soZG9jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RvciA9IF8uY2xvbmUoY3Vyc29yRGVzY3JpcHRpb24uc2VsZWN0b3IpO1xuICAgICAgICBpZiAobGFzdFRTKSB7XG4gICAgICAgICAgbmV3U2VsZWN0b3IudHMgPSB7JGd0OiBsYXN0VFN9O1xuICAgICAgICB9XG4gICAgICAgIGN1cnNvciA9IHNlbGYuX2NyZWF0ZVN5bmNocm9ub3VzQ3Vyc29yKG5ldyBDdXJzb3JEZXNjcmlwdGlvbihcbiAgICAgICAgICBjdXJzb3JEZXNjcmlwdGlvbi5jb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICBuZXdTZWxlY3RvcixcbiAgICAgICAgICBjdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zKSk7XG4gICAgICAgIC8vIE1vbmdvIGZhaWxvdmVyIHRha2VzIG1hbnkgc2Vjb25kcy4gIFJldHJ5IGluIGEgYml0LiAgKFdpdGhvdXQgdGhpc1xuICAgICAgICAvLyBzZXRUaW1lb3V0LCB3ZSBwZWcgdGhlIENQVSBhdCAxMDAlIGFuZCBuZXZlciBub3RpY2UgdGhlIGFjdHVhbFxuICAgICAgICAvLyBmYWlsb3Zlci5cbiAgICAgICAgTWV0ZW9yLnNldFRpbWVvdXQobG9vcCwgMTAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIE1ldGVvci5kZWZlcihsb29wKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgY3Vyc29yLmNsb3NlKCk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3Qgb3Bsb2dDb2xsZWN0aW9uV2FybmluZ3MgPSBbXTtcblxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fb2JzZXJ2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoXG4gICAgY3Vyc29yRGVzY3JpcHRpb24sIG9yZGVyZWQsIGNhbGxiYWNrcywgbm9uTXV0YXRpbmdDYWxsYmFja3MpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IGN1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lO1xuXG4gIGlmIChjdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLnRhaWxhYmxlKSB7XG4gICAgcmV0dXJuIHNlbGYuX29ic2VydmVDaGFuZ2VzVGFpbGFibGUoY3Vyc29yRGVzY3JpcHRpb24sIG9yZGVyZWQsIGNhbGxiYWNrcyk7XG4gIH1cblxuICAvLyBZb3UgbWF5IG5vdCBmaWx0ZXIgb3V0IF9pZCB3aGVuIG9ic2VydmluZyBjaGFuZ2VzLCBiZWNhdXNlIHRoZSBpZCBpcyBhIGNvcmVcbiAgLy8gcGFydCBvZiB0aGUgb2JzZXJ2ZUNoYW5nZXMgQVBJLlxuICBjb25zdCBmaWVsZHNPcHRpb25zID0gY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5wcm9qZWN0aW9uIHx8IGN1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMuZmllbGRzO1xuICBpZiAoZmllbGRzT3B0aW9ucyAmJlxuICAgICAgKGZpZWxkc09wdGlvbnMuX2lkID09PSAwIHx8XG4gICAgICAgZmllbGRzT3B0aW9ucy5faWQgPT09IGZhbHNlKSkge1xuICAgIHRocm93IEVycm9yKFwiWW91IG1heSBub3Qgb2JzZXJ2ZSBhIGN1cnNvciB3aXRoIHtmaWVsZHM6IHtfaWQ6IDB9fVwiKTtcbiAgfVxuXG4gIHZhciBvYnNlcnZlS2V5ID0gRUpTT04uc3RyaW5naWZ5KFxuICAgIF8uZXh0ZW5kKHtvcmRlcmVkOiBvcmRlcmVkfSwgY3Vyc29yRGVzY3JpcHRpb24pKTtcblxuICB2YXIgbXVsdGlwbGV4ZXIsIG9ic2VydmVEcml2ZXI7XG4gIHZhciBmaXJzdEhhbmRsZSA9IGZhbHNlO1xuXG4gIC8vIEZpbmQgYSBtYXRjaGluZyBPYnNlcnZlTXVsdGlwbGV4ZXIsIG9yIGNyZWF0ZSBhIG5ldyBvbmUuIFRoaXMgbmV4dCBibG9jayBpc1xuICAvLyBndWFyYW50ZWVkIHRvIG5vdCB5aWVsZCAoYW5kIGl0IGRvZXNuJ3QgY2FsbCBhbnl0aGluZyB0aGF0IGNhbiBvYnNlcnZlIGFcbiAgLy8gbmV3IHF1ZXJ5KSwgc28gbm8gb3RoZXIgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbiBjYW4gaW50ZXJsZWF2ZSB3aXRoIGl0LlxuICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF8uaGFzKHNlbGYuX29ic2VydmVNdWx0aXBsZXhlcnMsIG9ic2VydmVLZXkpKSB7XG4gICAgICBtdWx0aXBsZXhlciA9IHNlbGYuX29ic2VydmVNdWx0aXBsZXhlcnNbb2JzZXJ2ZUtleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpcnN0SGFuZGxlID0gdHJ1ZTtcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBPYnNlcnZlTXVsdGlwbGV4ZXIuXG4gICAgICBtdWx0aXBsZXhlciA9IG5ldyBPYnNlcnZlTXVsdGlwbGV4ZXIoe1xuICAgICAgICBvcmRlcmVkOiBvcmRlcmVkLFxuICAgICAgICBvblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZi5fb2JzZXJ2ZU11bHRpcGxleGVyc1tvYnNlcnZlS2V5XTtcbiAgICAgICAgICBvYnNlcnZlRHJpdmVyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWxmLl9vYnNlcnZlTXVsdGlwbGV4ZXJzW29ic2VydmVLZXldID0gbXVsdGlwbGV4ZXI7XG4gICAgfVxuICB9KTtcblxuICB2YXIgb2JzZXJ2ZUhhbmRsZSA9IG5ldyBPYnNlcnZlSGFuZGxlKG11bHRpcGxleGVyLFxuICAgIGNhbGxiYWNrcyxcbiAgICBub25NdXRhdGluZ0NhbGxiYWNrcyxcbiAgKTtcblxuICBjb25zdCBvcGxvZ09wdGlvbnMgPSBzZWxmPy5fb3Bsb2dIYW5kbGU/Ll9vcGxvZ09wdGlvbnMgfHwge307XG4gIGNvbnN0IHsgaW5jbHVkZUNvbGxlY3Rpb25zLCBleGNsdWRlQ29sbGVjdGlvbnMgfSA9IG9wbG9nT3B0aW9ucztcblxuICBpZiAoZmlyc3RIYW5kbGUpIHtcbiAgICB2YXIgbWF0Y2hlciwgc29ydGVyO1xuICAgIHZhciBjYW5Vc2VPcGxvZyA9IF8uYWxsKFtcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXQgYSBiYXJlIG1pbmltdW0sIHVzaW5nIHRoZSBvcGxvZyByZXF1aXJlcyB1cyB0byBoYXZlIGFuIG9wbG9nLCB0b1xuICAgICAgICAvLyB3YW50IHVub3JkZXJlZCBjYWxsYmFja3MsIGFuZCB0byBub3Qgd2FudCBhIGNhbGxiYWNrIG9uIHRoZSBwb2xsc1xuICAgICAgICAvLyB0aGF0IHdvbid0IGhhcHBlbi5cbiAgICAgICAgcmV0dXJuIHNlbGYuX29wbG9nSGFuZGxlICYmICFvcmRlcmVkICYmXG4gICAgICAgICAgIWNhbGxiYWNrcy5fdGVzdE9ubHlQb2xsQ2FsbGJhY2s7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBjaGVjaywgaWYgdGhlIGNvbGxlY3Rpb24gb2YgdGhpcyBDdXJzb3IgaXMgYWN0dWFsbHkgYmVpbmcgXCJ3YXRjaGVkXCIgYnkgdGhlIE9wbG9nIGhhbmRsZVxuICAgICAgICAvLyBpZiBub3QsIHdlIGhhdmUgdG8gZmFsbGJhY2sgdG8gbG9uZyBwb2xsaW5nXG4gICAgICAgIGlmIChleGNsdWRlQ29sbGVjdGlvbnM/Lmxlbmd0aCAmJiBleGNsdWRlQ29sbGVjdGlvbnMuaW5jbHVkZXMoY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgaWYgKCFvcGxvZ0NvbGxlY3Rpb25XYXJuaW5ncy5pbmNsdWRlcyhjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWV0ZW9yLnNldHRpbmdzLnBhY2thZ2VzLm1vbmdvLm9wbG9nRXhjbHVkZUNvbGxlY3Rpb25zIGluY2x1ZGVzIHRoZSBjb2xsZWN0aW9uICR7Y29sbGVjdGlvbk5hbWV9IC0geW91ciBzdWJzY3JpcHRpb25zIHdpbGwgb25seSB1c2UgbG9uZyBwb2xsaW5nIWApO1xuICAgICAgICAgICAgb3Bsb2dDb2xsZWN0aW9uV2FybmluZ3MucHVzaChjb2xsZWN0aW9uTmFtZSk7IC8vIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSB3YXJuaW5ncyBvbmNlIHBlciBjb2xsZWN0aW9uIVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGVDb2xsZWN0aW9ucz8ubGVuZ3RoICYmICFpbmNsdWRlQ29sbGVjdGlvbnMuaW5jbHVkZXMoY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgaWYgKCFvcGxvZ0NvbGxlY3Rpb25XYXJuaW5ncy5pbmNsdWRlcyhjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWV0ZW9yLnNldHRpbmdzLnBhY2thZ2VzLm1vbmdvLm9wbG9nSW5jbHVkZUNvbGxlY3Rpb25zIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNvbGxlY3Rpb24gJHtjb2xsZWN0aW9uTmFtZX0gLSB5b3VyIHN1YnNjcmlwdGlvbnMgd2lsbCBvbmx5IHVzZSBsb25nIHBvbGxpbmchYCk7XG4gICAgICAgICAgICBvcGxvZ0NvbGxlY3Rpb25XYXJuaW5ncy5wdXNoKGNvbGxlY3Rpb25OYW1lKTsgLy8gd2Ugb25seSB3YW50IHRvIHNob3cgdGhlIHdhcm5pbmdzIG9uY2UgcGVyIGNvbGxlY3Rpb24hXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBiZSBhYmxlIHRvIGNvbXBpbGUgdGhlIHNlbGVjdG9yLiBGYWxsIGJhY2sgdG8gcG9sbGluZyBmb3JcbiAgICAgICAgLy8gc29tZSBuZXdmYW5nbGVkICRzZWxlY3RvciB0aGF0IG1pbmltb25nbyBkb2Vzbid0IHN1cHBvcnQgeWV0LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIG1hdGNoZXIgPSBuZXcgTWluaW1vbmdvLk1hdGNoZXIoY3Vyc29yRGVzY3JpcHRpb24uc2VsZWN0b3IpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gWFhYIG1ha2UgYWxsIGNvbXBpbGF0aW9uIGVycm9ycyBNaW5pbW9uZ29FcnJvciBvciBzb21ldGhpbmdcbiAgICAgICAgICAvLyAgICAgc28gdGhhdCB0aGlzIGRvZXNuJ3QgaWdub3JlIHVucmVsYXRlZCBleGNlcHRpb25zXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIC4uLiBhbmQgdGhlIHNlbGVjdG9yIGl0c2VsZiBuZWVkcyB0byBzdXBwb3J0IG9wbG9nLlxuICAgICAgICByZXR1cm4gT3Bsb2dPYnNlcnZlRHJpdmVyLmN1cnNvclN1cHBvcnRlZChjdXJzb3JEZXNjcmlwdGlvbiwgbWF0Y2hlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEFuZCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gY29tcGlsZSB0aGUgc29ydCwgaWYgYW55LiAgZWcsIGNhbid0IGJlXG4gICAgICAgIC8vIHskbmF0dXJhbDogMX0uXG4gICAgICAgIGlmICghY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5zb3J0KVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNvcnRlciA9IG5ldyBNaW5pbW9uZ28uU29ydGVyKGN1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMuc29ydCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBYWFggbWFrZSBhbGwgY29tcGlsYXRpb24gZXJyb3JzIE1pbmltb25nb0Vycm9yIG9yIHNvbWV0aGluZ1xuICAgICAgICAgIC8vICAgICBzbyB0aGF0IHRoaXMgZG9lc24ndCBpZ25vcmUgdW5yZWxhdGVkIGV4Y2VwdGlvbnNcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1dLCBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9KTsgIC8vIGludm9rZSBlYWNoIGZ1bmN0aW9uXG5cbiAgICB2YXIgZHJpdmVyQ2xhc3MgPSBjYW5Vc2VPcGxvZyA/IE9wbG9nT2JzZXJ2ZURyaXZlciA6IFBvbGxpbmdPYnNlcnZlRHJpdmVyO1xuICAgIG9ic2VydmVEcml2ZXIgPSBuZXcgZHJpdmVyQ2xhc3Moe1xuICAgICAgY3Vyc29yRGVzY3JpcHRpb246IGN1cnNvckRlc2NyaXB0aW9uLFxuICAgICAgbW9uZ29IYW5kbGU6IHNlbGYsXG4gICAgICBtdWx0aXBsZXhlcjogbXVsdGlwbGV4ZXIsXG4gICAgICBvcmRlcmVkOiBvcmRlcmVkLFxuICAgICAgbWF0Y2hlcjogbWF0Y2hlciwgIC8vIGlnbm9yZWQgYnkgcG9sbGluZ1xuICAgICAgc29ydGVyOiBzb3J0ZXIsICAvLyBpZ25vcmVkIGJ5IHBvbGxpbmdcbiAgICAgIF90ZXN0T25seVBvbGxDYWxsYmFjazogY2FsbGJhY2tzLl90ZXN0T25seVBvbGxDYWxsYmFja1xuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBmaWVsZCBpcyBvbmx5IHNldCBmb3IgdXNlIGluIHRlc3RzLlxuICAgIG11bHRpcGxleGVyLl9vYnNlcnZlRHJpdmVyID0gb2JzZXJ2ZURyaXZlcjtcbiAgfVxuXG4gIC8vIEJsb2NrcyB1bnRpbCB0aGUgaW5pdGlhbCBhZGRzIGhhdmUgYmVlbiBzZW50LlxuICBtdWx0aXBsZXhlci5hZGRIYW5kbGVBbmRTZW5kSW5pdGlhbEFkZHMob2JzZXJ2ZUhhbmRsZSk7XG5cbiAgcmV0dXJuIG9ic2VydmVIYW5kbGU7XG59O1xuXG4vLyBMaXN0ZW4gZm9yIHRoZSBpbnZhbGlkYXRpb24gbWVzc2FnZXMgdGhhdCB3aWxsIHRyaWdnZXIgdXMgdG8gcG9sbCB0aGVcbi8vIGRhdGFiYXNlIGZvciBjaGFuZ2VzLiBJZiB0aGlzIHNlbGVjdG9yIHNwZWNpZmllcyBzcGVjaWZpYyBJRHMsIHNwZWNpZnkgdGhlbVxuLy8gaGVyZSwgc28gdGhhdCB1cGRhdGVzIHRvIGRpZmZlcmVudCBzcGVjaWZpYyBJRHMgZG9uJ3QgY2F1c2UgdXMgdG8gcG9sbC5cbi8vIGxpc3RlbkNhbGxiYWNrIGlzIHRoZSBzYW1lIGtpbmQgb2YgKG5vdGlmaWNhdGlvbiwgY29tcGxldGUpIGNhbGxiYWNrIHBhc3NlZFxuLy8gdG8gSW52YWxpZGF0aW9uQ3Jvc3NiYXIubGlzdGVuLlxuXG5saXN0ZW5BbGwgPSBmdW5jdGlvbiAoY3Vyc29yRGVzY3JpcHRpb24sIGxpc3RlbkNhbGxiYWNrKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgZm9yRWFjaFRyaWdnZXIoY3Vyc29yRGVzY3JpcHRpb24sIGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goRERQU2VydmVyLl9JbnZhbGlkYXRpb25Dcm9zc2Jhci5saXN0ZW4oXG4gICAgICB0cmlnZ2VyLCBsaXN0ZW5DYWxsYmFjaykpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIF8uZWFjaChsaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5zdG9wKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5mb3JFYWNoVHJpZ2dlciA9IGZ1bmN0aW9uIChjdXJzb3JEZXNjcmlwdGlvbiwgdHJpZ2dlckNhbGxiYWNrKSB7XG4gIHZhciBrZXkgPSB7Y29sbGVjdGlvbjogY3Vyc29yRGVzY3JpcHRpb24uY29sbGVjdGlvbk5hbWV9O1xuICB2YXIgc3BlY2lmaWNJZHMgPSBMb2NhbENvbGxlY3Rpb24uX2lkc01hdGNoZWRCeVNlbGVjdG9yKFxuICAgIGN1cnNvckRlc2NyaXB0aW9uLnNlbGVjdG9yKTtcbiAgaWYgKHNwZWNpZmljSWRzKSB7XG4gICAgXy5lYWNoKHNwZWNpZmljSWRzLCBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHRyaWdnZXJDYWxsYmFjayhfLmV4dGVuZCh7aWQ6IGlkfSwga2V5KSk7XG4gICAgfSk7XG4gICAgdHJpZ2dlckNhbGxiYWNrKF8uZXh0ZW5kKHtkcm9wQ29sbGVjdGlvbjogdHJ1ZSwgaWQ6IG51bGx9LCBrZXkpKTtcbiAgfSBlbHNlIHtcbiAgICB0cmlnZ2VyQ2FsbGJhY2soa2V5KTtcbiAgfVxuICAvLyBFdmVyeW9uZSBjYXJlcyBhYm91dCB0aGUgZGF0YWJhc2UgYmVpbmcgZHJvcHBlZC5cbiAgdHJpZ2dlckNhbGxiYWNrKHsgZHJvcERhdGFiYXNlOiB0cnVlIH0pO1xufTtcblxuLy8gb2JzZXJ2ZUNoYW5nZXMgZm9yIHRhaWxhYmxlIGN1cnNvcnMgb24gY2FwcGVkIGNvbGxlY3Rpb25zLlxuLy9cbi8vIFNvbWUgZGlmZmVyZW5jZXMgZnJvbSBub3JtYWwgY3Vyc29yczpcbi8vICAgLSBXaWxsIG5ldmVyIHByb2R1Y2UgYW55dGhpbmcgb3RoZXIgdGhhbiAnYWRkZWQnIG9yICdhZGRlZEJlZm9yZScuIElmIHlvdVxuLy8gICAgIGRvIHVwZGF0ZSBhIGRvY3VtZW50IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBwcm9kdWNlZCwgdGhpcyB3aWxsIG5vdCBub3RpY2Vcbi8vICAgICBpdC5cbi8vICAgLSBJZiB5b3UgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0IGZyb20gTW9uZ28sIGl0IHdpbGwgZXNzZW50aWFsbHkgcmVzdGFydFxuLy8gICAgIHRoZSBxdWVyeSwgd2hpY2ggd2lsbCBsZWFkIHRvIGR1cGxpY2F0ZSByZXN1bHRzLiBUaGlzIGlzIHByZXR0eSBiYWQsXG4vLyAgICAgYnV0IGlmIHlvdSBpbmNsdWRlIGEgZmllbGQgY2FsbGVkICd0cycgd2hpY2ggaXMgaW5zZXJ0ZWQgYXNcbi8vICAgICBuZXcgTW9uZ29JbnRlcm5hbHMuTW9uZ29UaW1lc3RhbXAoMCwgMCkgKHdoaWNoIGlzIGluaXRpYWxpemVkIHRvIHRoZVxuLy8gICAgIGN1cnJlbnQgTW9uZ28tc3R5bGUgdGltZXN0YW1wKSwgd2UnbGwgYmUgYWJsZSB0byBmaW5kIHRoZSBwbGFjZSB0b1xuLy8gICAgIHJlc3RhcnQgcHJvcGVybHkuIChUaGlzIGZpZWxkIGlzIHNwZWNpZmljYWxseSB1bmRlcnN0b29kIGJ5IE1vbmdvIHdpdGggYW5cbi8vICAgICBvcHRpbWl6YXRpb24gd2hpY2ggYWxsb3dzIGl0IHRvIGZpbmQgdGhlIHJpZ2h0IHBsYWNlIHRvIHN0YXJ0IHdpdGhvdXRcbi8vICAgICBhbiBpbmRleCBvbiB0cy4gSXQncyBob3cgdGhlIG9wbG9nIHdvcmtzLilcbi8vICAgLSBObyBjYWxsYmFja3MgYXJlIHRyaWdnZXJlZCBzeW5jaHJvbm91c2x5IHdpdGggdGhlIGNhbGwgKHRoZXJlJ3Mgbm9cbi8vICAgICBkaWZmZXJlbnRpYXRpb24gYmV0d2VlbiBcImluaXRpYWwgZGF0YVwiIGFuZCBcImxhdGVyIGNoYW5nZXNcIjsgZXZlcnl0aGluZ1xuLy8gICAgIHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkgZ2V0cyBzZW50IGFzeW5jaHJvbm91c2x5KS5cbi8vICAgLSBEZS1kdXBsaWNhdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQuXG4vLyAgIC0gRG9lcyBub3QgeWV0IGludGVyYWN0IHdpdGggdGhlIHdyaXRlIGZlbmNlLiBQcm9iYWJseSwgdGhpcyBzaG91bGQgd29yayBieVxuLy8gICAgIGlnbm9yaW5nIHJlbW92ZXMgKHdoaWNoIGRvbid0IHdvcmsgb24gY2FwcGVkIGNvbGxlY3Rpb25zKSBhbmQgdXBkYXRlc1xuLy8gICAgICh3aGljaCBkb24ndCBhZmZlY3QgdGFpbGFibGUgY3Vyc29ycyksIGFuZCBqdXN0IGtlZXBpbmcgdHJhY2sgb2YgdGhlIElEXG4vLyAgICAgb2YgdGhlIGluc2VydGVkIG9iamVjdCwgYW5kIGNsb3NpbmcgdGhlIHdyaXRlIGZlbmNlIG9uY2UgeW91IGdldCB0byB0aGF0XG4vLyAgICAgSUQgKG9yIHRpbWVzdGFtcD8pLiAgVGhpcyBkb2Vzbid0IHdvcmsgd2VsbCBpZiB0aGUgZG9jdW1lbnQgZG9lc24ndCBtYXRjaFxuLy8gICAgIHRoZSBxdWVyeSwgdGhvdWdoLiAgT24gdGhlIG90aGVyIGhhbmQsIHRoZSB3cml0ZSBmZW5jZSBjYW4gY2xvc2Vcbi8vICAgICBpbW1lZGlhdGVseSBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUgcXVlcnkuIFNvIGlmIHdlIHRydXN0IG1pbmltb25nb1xuLy8gICAgIGVub3VnaCB0byBhY2N1cmF0ZWx5IGV2YWx1YXRlIHRoZSBxdWVyeSBhZ2FpbnN0IHRoZSB3cml0ZSBmZW5jZSwgd2Vcbi8vICAgICBzaG91bGQgYmUgYWJsZSB0byBkbyB0aGlzLi4uICBPZiBjb3Vyc2UsIG1pbmltb25nbyBkb2Vzbid0IGV2ZW4gc3VwcG9ydFxuLy8gICAgIE1vbmdvIFRpbWVzdGFtcHMgeWV0LlxuTW9uZ29Db25uZWN0aW9uLnByb3RvdHlwZS5fb2JzZXJ2ZUNoYW5nZXNUYWlsYWJsZSA9IGZ1bmN0aW9uIChcbiAgICBjdXJzb3JEZXNjcmlwdGlvbiwgb3JkZXJlZCwgY2FsbGJhY2tzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvLyBUYWlsYWJsZSBjdXJzb3JzIG9ubHkgZXZlciBjYWxsIGFkZGVkL2FkZGVkQmVmb3JlIGNhbGxiYWNrcywgc28gaXQncyBhblxuICAvLyBlcnJvciBpZiB5b3UgZGlkbid0IHByb3ZpZGUgdGhlbS5cbiAgaWYgKChvcmRlcmVkICYmICFjYWxsYmFja3MuYWRkZWRCZWZvcmUpIHx8XG4gICAgICAoIW9yZGVyZWQgJiYgIWNhbGxiYWNrcy5hZGRlZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBvYnNlcnZlIGFuIFwiICsgKG9yZGVyZWQgPyBcIm9yZGVyZWRcIiA6IFwidW5vcmRlcmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICsgXCIgdGFpbGFibGUgY3Vyc29yIHdpdGhvdXQgYSBcIlxuICAgICAgICAgICAgICAgICAgICArIChvcmRlcmVkID8gXCJhZGRlZEJlZm9yZVwiIDogXCJhZGRlZFwiKSArIFwiIGNhbGxiYWNrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGYudGFpbChjdXJzb3JEZXNjcmlwdGlvbiwgZnVuY3Rpb24gKGRvYykge1xuICAgIHZhciBpZCA9IGRvYy5faWQ7XG4gICAgZGVsZXRlIGRvYy5faWQ7XG4gICAgLy8gVGhlIHRzIGlzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gSGlkZSBpdC5cbiAgICBkZWxldGUgZG9jLnRzO1xuICAgIGlmIChvcmRlcmVkKSB7XG4gICAgICBjYWxsYmFja3MuYWRkZWRCZWZvcmUoaWQsIGRvYywgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrcy5hZGRlZChpZCwgZG9jKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gWFhYIFdlIHByb2JhYmx5IG5lZWQgdG8gZmluZCBhIGJldHRlciB3YXkgdG8gZXhwb3NlIHRoaXMuIFJpZ2h0IG5vd1xuLy8gaXQncyBvbmx5IHVzZWQgYnkgdGVzdHMsIGJ1dCBpbiBmYWN0IHlvdSBuZWVkIGl0IGluIG5vcm1hbFxuLy8gb3BlcmF0aW9uIHRvIGludGVyYWN0IHdpdGggY2FwcGVkIGNvbGxlY3Rpb25zLlxuTW9uZ29JbnRlcm5hbHMuTW9uZ29UaW1lc3RhbXAgPSBNb25nb0RCLlRpbWVzdGFtcDtcblxuTW9uZ29JbnRlcm5hbHMuQ29ubmVjdGlvbiA9IE1vbmdvQ29ubmVjdGlvbjtcbiIsInZhciBGdXR1cmUgPSBOcG0ucmVxdWlyZSgnZmliZXJzL2Z1dHVyZScpO1xuXG5pbXBvcnQgeyBOcG1Nb2R1bGVNb25nb2RiIH0gZnJvbSBcIm1ldGVvci9ucG0tbW9uZ29cIjtcbmNvbnN0IHsgTG9uZyB9ID0gTnBtTW9kdWxlTW9uZ29kYjtcblxuT1BMT0dfQ09MTEVDVElPTiA9ICdvcGxvZy5ycyc7XG5cbnZhciBUT09fRkFSX0JFSElORCA9IHByb2Nlc3MuZW52Lk1FVEVPUl9PUExPR19UT09fRkFSX0JFSElORCB8fCAyMDAwO1xudmFyIFRBSUxfVElNRU9VVCA9ICtwcm9jZXNzLmVudi5NRVRFT1JfT1BMT0dfVEFJTF9USU1FT1VUIHx8IDMwMDAwO1xuXG52YXIgc2hvd1RTID0gZnVuY3Rpb24gKHRzKSB7XG4gIHJldHVybiBcIlRpbWVzdGFtcChcIiArIHRzLmdldEhpZ2hCaXRzKCkgKyBcIiwgXCIgKyB0cy5nZXRMb3dCaXRzKCkgKyBcIilcIjtcbn07XG5cbmlkRm9yT3AgPSBmdW5jdGlvbiAob3ApIHtcbiAgaWYgKG9wLm9wID09PSAnZCcpXG4gICAgcmV0dXJuIG9wLm8uX2lkO1xuICBlbHNlIGlmIChvcC5vcCA9PT0gJ2knKVxuICAgIHJldHVybiBvcC5vLl9pZDtcbiAgZWxzZSBpZiAob3Aub3AgPT09ICd1JylcbiAgICByZXR1cm4gb3AubzIuX2lkO1xuICBlbHNlIGlmIChvcC5vcCA9PT0gJ2MnKVxuICAgIHRocm93IEVycm9yKFwiT3BlcmF0b3IgJ2MnIGRvZXNuJ3Qgc3VwcGx5IGFuIG9iamVjdCB3aXRoIGlkOiBcIiArXG4gICAgICAgICAgICAgICAgRUpTT04uc3RyaW5naWZ5KG9wKSk7XG4gIGVsc2VcbiAgICB0aHJvdyBFcnJvcihcIlVua25vd24gb3A6IFwiICsgRUpTT04uc3RyaW5naWZ5KG9wKSk7XG59O1xuXG5PcGxvZ0hhbmRsZSA9IGZ1bmN0aW9uIChvcGxvZ1VybCwgZGJOYW1lKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5fb3Bsb2dVcmwgPSBvcGxvZ1VybDtcbiAgc2VsZi5fZGJOYW1lID0gZGJOYW1lO1xuXG4gIHNlbGYuX29wbG9nTGFzdEVudHJ5Q29ubmVjdGlvbiA9IG51bGw7XG4gIHNlbGYuX29wbG9nVGFpbENvbm5lY3Rpb24gPSBudWxsO1xuICBzZWxmLl9vcGxvZ09wdGlvbnMgPSBudWxsO1xuICBzZWxmLl9zdG9wcGVkID0gZmFsc2U7XG4gIHNlbGYuX3RhaWxIYW5kbGUgPSBudWxsO1xuICBzZWxmLl9yZWFkeUZ1dHVyZSA9IG5ldyBGdXR1cmUoKTtcbiAgc2VsZi5fY3Jvc3NiYXIgPSBuZXcgRERQU2VydmVyLl9Dcm9zc2Jhcih7XG4gICAgZmFjdFBhY2thZ2U6IFwibW9uZ28tbGl2ZWRhdGFcIiwgZmFjdE5hbWU6IFwib3Bsb2ctd2F0Y2hlcnNcIlxuICB9KTtcbiAgc2VsZi5fYmFzZU9wbG9nU2VsZWN0b3IgPSB7XG4gICAgbnM6IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBbXG4gICAgICBNZXRlb3IuX2VzY2FwZVJlZ0V4cChzZWxmLl9kYk5hbWUgKyBcIi5cIiksXG4gICAgICBNZXRlb3IuX2VzY2FwZVJlZ0V4cChcImFkbWluLiRjbWRcIiksXG4gICAgXS5qb2luKFwifFwiKSArIFwiKVwiKSxcblxuICAgICRvcjogW1xuICAgICAgeyBvcDogeyAkaW46IFsnaScsICd1JywgJ2QnXSB9IH0sXG4gICAgICAvLyBkcm9wIGNvbGxlY3Rpb25cbiAgICAgIHsgb3A6ICdjJywgJ28uZHJvcCc6IHsgJGV4aXN0czogdHJ1ZSB9IH0sXG4gICAgICB7IG9wOiAnYycsICdvLmRyb3BEYXRhYmFzZSc6IDEgfSxcbiAgICAgIHsgb3A6ICdjJywgJ28uYXBwbHlPcHMnOiB7ICRleGlzdHM6IHRydWUgfSB9LFxuICAgIF1cbiAgfTtcblxuICAvLyBEYXRhIHN0cnVjdHVyZXMgdG8gc3VwcG9ydCB3YWl0VW50aWxDYXVnaHRVcCgpLiBFYWNoIG9wbG9nIGVudHJ5IGhhcyBhXG4gIC8vIE1vbmdvVGltZXN0YW1wIG9iamVjdCBvbiBpdCAod2hpY2ggaXMgbm90IHRoZSBzYW1lIGFzIGEgRGF0ZSAtLS0gaXQncyBhXG4gIC8vIGNvbWJpbmF0aW9uIG9mIHRpbWUgYW5kIGFuIGluY3JlbWVudGluZyBjb3VudGVyOyBzZWVcbiAgLy8gaHR0cDovL2RvY3MubW9uZ29kYi5vcmcvbWFudWFsL3JlZmVyZW5jZS9ic29uLXR5cGVzLyN0aW1lc3RhbXBzKS5cbiAgLy9cbiAgLy8gX2NhdGNoaW5nVXBGdXR1cmVzIGlzIGFuIGFycmF5IG9mIHt0czogTW9uZ29UaW1lc3RhbXAsIGZ1dHVyZTogRnV0dXJlfVxuICAvLyBvYmplY3RzLCBzb3J0ZWQgYnkgYXNjZW5kaW5nIHRpbWVzdGFtcC4gX2xhc3RQcm9jZXNzZWRUUyBpcyB0aGVcbiAgLy8gTW9uZ29UaW1lc3RhbXAgb2YgdGhlIGxhc3Qgb3Bsb2cgZW50cnkgd2UndmUgcHJvY2Vzc2VkLlxuICAvL1xuICAvLyBFYWNoIHRpbWUgd2UgY2FsbCB3YWl0VW50aWxDYXVnaHRVcCwgd2UgdGFrZSBhIHBlZWsgYXQgdGhlIGZpbmFsIG9wbG9nXG4gIC8vIGVudHJ5IGluIHRoZSBkYi4gIElmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIGl0IChpZSwgaXQgaXMgbm90IGdyZWF0ZXIgdGhhblxuICAvLyBfbGFzdFByb2Nlc3NlZFRTKSwgd2FpdFVudGlsQ2F1Z2h0VXAgaW1tZWRpYXRlbHkgcmV0dXJucy4gT3RoZXJ3aXNlLFxuICAvLyB3YWl0VW50aWxDYXVnaHRVcCBtYWtlcyBhIG5ldyBGdXR1cmUgYW5kIGluc2VydHMgaXQgYWxvbmcgd2l0aCB0aGUgZmluYWxcbiAgLy8gdGltZXN0YW1wIGVudHJ5IHRoYXQgaXQgcmVhZCwgaW50byBfY2F0Y2hpbmdVcEZ1dHVyZXMuIHdhaXRVbnRpbENhdWdodFVwXG4gIC8vIHRoZW4gd2FpdHMgb24gdGhhdCBmdXR1cmUsIHdoaWNoIGlzIHJlc29sdmVkIG9uY2UgX2xhc3RQcm9jZXNzZWRUUyBpc1xuICAvLyBpbmNyZW1lbnRlZCB0byBiZSBwYXN0IGl0cyB0aW1lc3RhbXAgYnkgdGhlIHdvcmtlciBmaWJlci5cbiAgLy9cbiAgLy8gWFhYIHVzZSBhIHByaW9yaXR5IHF1ZXVlIG9yIHNvbWV0aGluZyBlbHNlIHRoYXQncyBmYXN0ZXIgdGhhbiBhbiBhcnJheVxuICBzZWxmLl9jYXRjaGluZ1VwRnV0dXJlcyA9IFtdO1xuICBzZWxmLl9sYXN0UHJvY2Vzc2VkVFMgPSBudWxsO1xuXG4gIHNlbGYuX29uU2tpcHBlZEVudHJpZXNIb29rID0gbmV3IEhvb2soe1xuICAgIGRlYnVnUHJpbnRFeGNlcHRpb25zOiBcIm9uU2tpcHBlZEVudHJpZXMgY2FsbGJhY2tcIlxuICB9KTtcblxuICBzZWxmLl9lbnRyeVF1ZXVlID0gbmV3IE1ldGVvci5fRG91YmxlRW5kZWRRdWV1ZSgpO1xuICBzZWxmLl93b3JrZXJBY3RpdmUgPSBmYWxzZTtcblxuICBzZWxmLl9zdGFydFRhaWxpbmcoKTtcbn07XG5cbk1vbmdvSW50ZXJuYWxzLk9wbG9nSGFuZGxlID0gT3Bsb2dIYW5kbGU7XG5cbk9iamVjdC5hc3NpZ24oT3Bsb2dIYW5kbGUucHJvdG90eXBlLCB7XG4gIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi5fc3RvcHBlZCA9IHRydWU7XG4gICAgaWYgKHNlbGYuX3RhaWxIYW5kbGUpXG4gICAgICBzZWxmLl90YWlsSGFuZGxlLnN0b3AoKTtcbiAgICAvLyBYWFggc2hvdWxkIGNsb3NlIGNvbm5lY3Rpb25zIHRvb1xuICB9LFxuICBvbk9wbG9nRW50cnk6IGZ1bmN0aW9uICh0cmlnZ2VyLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fc3RvcHBlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbGxlZCBvbk9wbG9nRW50cnkgb24gc3RvcHBlZCBoYW5kbGUhXCIpO1xuXG4gICAgLy8gQ2FsbGluZyBvbk9wbG9nRW50cnkgcmVxdWlyZXMgdXMgdG8gd2FpdCBmb3IgdGhlIHRhaWxpbmcgdG8gYmUgcmVhZHkuXG4gICAgc2VsZi5fcmVhZHlGdXR1cmUud2FpdCgpO1xuXG4gICAgdmFyIG9yaWdpbmFsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgb3JpZ2luYWxDYWxsYmFjayhub3RpZmljYXRpb24pO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIE1ldGVvci5fZGVidWcoXCJFcnJvciBpbiBvcGxvZyBjYWxsYmFja1wiLCBlcnIpO1xuICAgIH0pO1xuICAgIHZhciBsaXN0ZW5IYW5kbGUgPSBzZWxmLl9jcm9zc2Jhci5saXN0ZW4odHJpZ2dlciwgY2FsbGJhY2spO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpc3RlbkhhbmRsZS5zdG9wKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgLy8gUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFueSB0aW1lIHdlIHNraXAgb3Bsb2cgZW50cmllcyAoZWcsXG4gIC8vIGJlY2F1c2Ugd2UgYXJlIHRvbyBmYXIgYmVoaW5kKS5cbiAgb25Ta2lwcGVkRW50cmllczogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLl9zdG9wcGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbGVkIG9uU2tpcHBlZEVudHJpZXMgb24gc3RvcHBlZCBoYW5kbGUhXCIpO1xuICAgIHJldHVybiBzZWxmLl9vblNraXBwZWRFbnRyaWVzSG9vay5yZWdpc3RlcihjYWxsYmFjayk7XG4gIH0sXG4gIC8vIENhbGxzIGBjYWxsYmFja2Agb25jZSB0aGUgb3Bsb2cgaGFzIGJlZW4gcHJvY2Vzc2VkIHVwIHRvIGEgcG9pbnQgdGhhdCBpc1xuICAvLyByb3VnaGx5IFwibm93XCI6IHNwZWNpZmljYWxseSwgb25jZSB3ZSd2ZSBwcm9jZXNzZWQgYWxsIG9wcyB0aGF0IGFyZVxuICAvLyBjdXJyZW50bHkgdmlzaWJsZS5cbiAgLy8gWFhYIGJlY29tZSBjb252aW5jZWQgdGhhdCB0aGlzIGlzIGFjdHVhbGx5IHNhZmUgZXZlbiBpZiBvcGxvZ0Nvbm5lY3Rpb25cbiAgLy8gaXMgc29tZSBraW5kIG9mIHBvb2xcbiAgd2FpdFVudGlsQ2F1Z2h0VXA6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsZWQgd2FpdFVudGlsQ2F1Z2h0VXAgb24gc3RvcHBlZCBoYW5kbGUhXCIpO1xuXG4gICAgLy8gQ2FsbGluZyB3YWl0VW50aWxDYXVnaHRVcCByZXF1cmllcyB1cyB0byB3YWl0IGZvciB0aGUgb3Bsb2cgY29ubmVjdGlvbiB0b1xuICAgIC8vIGJlIHJlYWR5LlxuICAgIHNlbGYuX3JlYWR5RnV0dXJlLndhaXQoKTtcbiAgICB2YXIgbGFzdEVudHJ5O1xuXG4gICAgd2hpbGUgKCFzZWxmLl9zdG9wcGVkKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIG1ha2UgdGhlIHNlbGVjdG9yIGF0IGxlYXN0IGFzIHJlc3RyaWN0aXZlIGFzIHRoZSBhY3R1YWxcbiAgICAgIC8vIHRhaWxpbmcgc2VsZWN0b3IgKGllLCB3ZSBuZWVkIHRvIHNwZWNpZnkgdGhlIERCIG5hbWUpIG9yIGVsc2Ugd2UgbWlnaHRcbiAgICAgIC8vIGZpbmQgYSBUUyB0aGF0IHdvbid0IHNob3cgdXAgaW4gdGhlIGFjdHVhbCB0YWlsIHN0cmVhbS5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxhc3RFbnRyeSA9IHNlbGYuX29wbG9nTGFzdEVudHJ5Q29ubmVjdGlvbi5maW5kT25lKFxuICAgICAgICAgIE9QTE9HX0NPTExFQ1RJT04sIHNlbGYuX2Jhc2VPcGxvZ1NlbGVjdG9yLFxuICAgICAgICAgIHtwcm9qZWN0aW9uOiB7dHM6IDF9LCBzb3J0OiB7JG5hdHVyYWw6IC0xfX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRHVyaW5nIGZhaWxvdmVyIChlZykgaWYgd2UgZ2V0IGFuIGV4Y2VwdGlvbiB3ZSBzaG91bGQgbG9nIGFuZCByZXRyeVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGNyYXNoaW5nLlxuICAgICAgICBNZXRlb3IuX2RlYnVnKFwiR290IGV4Y2VwdGlvbiB3aGlsZSByZWFkaW5nIGxhc3QgZW50cnlcIiwgZSk7XG4gICAgICAgIE1ldGVvci5fc2xlZXBGb3JNcygxMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxmLl9zdG9wcGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKCFsYXN0RW50cnkpIHtcbiAgICAgIC8vIFJlYWxseSwgbm90aGluZyBpbiB0aGUgb3Bsb2c/IFdlbGwsIHdlJ3ZlIHByb2Nlc3NlZCBldmVyeXRoaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0cyA9IGxhc3RFbnRyeS50cztcbiAgICBpZiAoIXRzKVxuICAgICAgdGhyb3cgRXJyb3IoXCJvcGxvZyBlbnRyeSB3aXRob3V0IHRzOiBcIiArIEVKU09OLnN0cmluZ2lmeShsYXN0RW50cnkpKTtcblxuICAgIGlmIChzZWxmLl9sYXN0UHJvY2Vzc2VkVFMgJiYgdHMubGVzc1RoYW5PckVxdWFsKHNlbGYuX2xhc3RQcm9jZXNzZWRUUykpIHtcbiAgICAgIC8vIFdlJ3ZlIGFscmVhZHkgY2F1Z2h0IHVwIHRvIGhlcmUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBJbnNlcnQgdGhlIGZ1dHVyZSBpbnRvIG91ciBsaXN0LiBBbG1vc3QgYWx3YXlzLCB0aGlzIHdpbGwgYmUgYXQgdGhlIGVuZCxcbiAgICAvLyBidXQgaXQncyBjb25jZWl2YWJsZSB0aGF0IGlmIHdlIGZhaWwgb3ZlciBmcm9tIG9uZSBwcmltYXJ5IHRvIGFub3RoZXIsXG4gICAgLy8gdGhlIG9wbG9nIGVudHJpZXMgd2Ugc2VlIHdpbGwgZ28gYmFja3dhcmRzLlxuICAgIHZhciBpbnNlcnRBZnRlciA9IHNlbGYuX2NhdGNoaW5nVXBGdXR1cmVzLmxlbmd0aDtcbiAgICB3aGlsZSAoaW5zZXJ0QWZ0ZXIgLSAxID4gMCAmJiBzZWxmLl9jYXRjaGluZ1VwRnV0dXJlc1tpbnNlcnRBZnRlciAtIDFdLnRzLmdyZWF0ZXJUaGFuKHRzKSkge1xuICAgICAgaW5zZXJ0QWZ0ZXItLTtcbiAgICB9XG4gICAgdmFyIGYgPSBuZXcgRnV0dXJlO1xuICAgIHNlbGYuX2NhdGNoaW5nVXBGdXR1cmVzLnNwbGljZShpbnNlcnRBZnRlciwgMCwge3RzOiB0cywgZnV0dXJlOiBmfSk7XG4gICAgZi53YWl0KCk7XG4gIH0sXG4gIF9zdGFydFRhaWxpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLy8gRmlyc3QsIG1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHRhbGtpbmcgdG8gdGhlIGxvY2FsIGRhdGFiYXNlLlxuICAgIHZhciBtb25nb2RiVXJpID0gTnBtLnJlcXVpcmUoJ21vbmdvZGItdXJpJyk7XG4gICAgaWYgKG1vbmdvZGJVcmkucGFyc2Uoc2VsZi5fb3Bsb2dVcmwpLmRhdGFiYXNlICE9PSAnbG9jYWwnKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIiRNT05HT19PUExPR19VUkwgbXVzdCBiZSBzZXQgdG8gdGhlICdsb2NhbCcgZGF0YWJhc2Ugb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgXCJhIE1vbmdvIHJlcGxpY2Egc2V0XCIpO1xuICAgIH1cblxuICAgIC8vIFdlIG1ha2UgdHdvIHNlcGFyYXRlIGNvbm5lY3Rpb25zIHRvIE1vbmdvLiBUaGUgTm9kZSBNb25nbyBkcml2ZXJcbiAgICAvLyBpbXBsZW1lbnRzIGEgbmFpdmUgcm91bmQtcm9iaW4gY29ubmVjdGlvbiBwb29sOiBlYWNoIFwiY29ubmVjdGlvblwiIGlzIGFcbiAgICAvLyBwb29sIG9mIHNldmVyYWwgKDUgYnkgZGVmYXVsdCkgVENQIGNvbm5lY3Rpb25zLCBhbmQgZWFjaCByZXF1ZXN0IGlzXG4gICAgLy8gcm90YXRlZCB0aHJvdWdoIHRoZSBwb29scy4gVGFpbGFibGUgY3Vyc29yIHF1ZXJpZXMgYmxvY2sgb24gdGhlIHNlcnZlclxuICAgIC8vIHVudGlsIHRoZXJlIGlzIHNvbWUgZGF0YSB0byByZXR1cm4gKG9yIHVudGlsIGEgZmV3IHNlY29uZHMgaGF2ZVxuICAgIC8vIHBhc3NlZCkuIFNvIGlmIHRoZSBjb25uZWN0aW9uIHBvb2wgdXNlZCBmb3IgdGFpbGluZyBjdXJzb3JzIGlzIHRoZSBzYW1lXG4gICAgLy8gcG9vbCB1c2VkIGZvciBvdGhlciBxdWVyaWVzLCB0aGUgb3RoZXIgcXVlcmllcyB3aWxsIGJlIGRlbGF5ZWQgYnkgc2Vjb25kc1xuICAgIC8vIDEvNSBvZiB0aGUgdGltZS5cbiAgICAvL1xuICAgIC8vIFRoZSB0YWlsIGNvbm5lY3Rpb24gd2lsbCBvbmx5IGV2ZXIgYmUgcnVubmluZyBhIHNpbmdsZSB0YWlsIGNvbW1hbmQsIHNvXG4gICAgLy8gaXQgb25seSBuZWVkcyB0byBtYWtlIG9uZSB1bmRlcmx5aW5nIFRDUCBjb25uZWN0aW9uLlxuICAgIHNlbGYuX29wbG9nVGFpbENvbm5lY3Rpb24gPSBuZXcgTW9uZ29Db25uZWN0aW9uKFxuICAgICAgc2VsZi5fb3Bsb2dVcmwsIHttYXhQb29sU2l6ZTogMSwgbWluUG9vbFNpemU6IDF9KTtcbiAgICAvLyBYWFggYmV0dGVyIGRvY3MsIGJ1dDogaXQncyB0byBnZXQgbW9ub3RvbmljIHJlc3VsdHNcbiAgICAvLyBYWFggaXMgaXQgc2FmZSB0byBzYXkgXCJpZiB0aGVyZSdzIGFuIGluIGZsaWdodCBxdWVyeSwganVzdCB1c2UgaXRzXG4gICAgLy8gICAgIHJlc3VsdHNcIj8gSSBkb24ndCB0aGluayBzbyBidXQgc2hvdWxkIGNvbnNpZGVyIHRoYXRcbiAgICBzZWxmLl9vcGxvZ0xhc3RFbnRyeUNvbm5lY3Rpb24gPSBuZXcgTW9uZ29Db25uZWN0aW9uKFxuICAgICAgc2VsZi5fb3Bsb2dVcmwsIHttYXhQb29sU2l6ZTogMSwgbWluUG9vbFNpemU6IDF9KTtcblxuICAgIC8vIE5vdywgbWFrZSBzdXJlIHRoYXQgdGhlcmUgYWN0dWFsbHkgaXMgYSByZXBsIHNldCBoZXJlLiBJZiBub3QsIG9wbG9nXG4gICAgLy8gdGFpbGluZyB3b24ndCBldmVyIGZpbmQgYW55dGhpbmchXG4gICAgLy8gTW9yZSBvbiB0aGUgaXNNYXN0ZXJEb2NcbiAgICAvLyBodHRwczovL2RvY3MubW9uZ29kYi5jb20vbWFudWFsL3JlZmVyZW5jZS9jb21tYW5kL2lzTWFzdGVyL1xuICAgIHZhciBmID0gbmV3IEZ1dHVyZTtcbiAgICBzZWxmLl9vcGxvZ0xhc3RFbnRyeUNvbm5lY3Rpb24uZGIuYWRtaW4oKS5jb21tYW5kKFxuICAgICAgeyBpc21hc3RlcjogMSB9LCBmLnJlc29sdmVyKCkpO1xuICAgIHZhciBpc01hc3RlckRvYyA9IGYud2FpdCgpO1xuXG4gICAgaWYgKCEoaXNNYXN0ZXJEb2MgJiYgaXNNYXN0ZXJEb2Muc2V0TmFtZSkpIHtcbiAgICAgIHRocm93IEVycm9yKFwiJE1PTkdPX09QTE9HX1VSTCBtdXN0IGJlIHNldCB0byB0aGUgJ2xvY2FsJyBkYXRhYmFzZSBvZiBcIiArXG4gICAgICAgICAgICAgICAgICBcImEgTW9uZ28gcmVwbGljYSBzZXRcIik7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgbGFzdCBvcGxvZyBlbnRyeS5cbiAgICB2YXIgbGFzdE9wbG9nRW50cnkgPSBzZWxmLl9vcGxvZ0xhc3RFbnRyeUNvbm5lY3Rpb24uZmluZE9uZShcbiAgICAgIE9QTE9HX0NPTExFQ1RJT04sIHt9LCB7c29ydDogeyRuYXR1cmFsOiAtMX0sIHByb2plY3Rpb246IHt0czogMX19KTtcblxuICAgIHZhciBvcGxvZ1NlbGVjdG9yID0gXy5jbG9uZShzZWxmLl9iYXNlT3Bsb2dTZWxlY3Rvcik7XG4gICAgaWYgKGxhc3RPcGxvZ0VudHJ5KSB7XG4gICAgICAvLyBTdGFydCBhZnRlciB0aGUgbGFzdCBlbnRyeSB0aGF0IGN1cnJlbnRseSBleGlzdHMuXG4gICAgICBvcGxvZ1NlbGVjdG9yLnRzID0geyRndDogbGFzdE9wbG9nRW50cnkudHN9O1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBjYWxscyB0byBjYWxsV2hlblByb2Nlc3NlZExhdGVzdCBiZWZvcmUgYW55IG90aGVyXG4gICAgICAvLyBvcGxvZyBlbnRyaWVzIHNob3cgdXAsIGFsbG93IGNhbGxXaGVuUHJvY2Vzc2VkTGF0ZXN0IHRvIGNhbGwgaXRzXG4gICAgICAvLyBjYWxsYmFjayBpbW1lZGlhdGVseS5cbiAgICAgIHNlbGYuX2xhc3RQcm9jZXNzZWRUUyA9IGxhc3RPcGxvZ0VudHJ5LnRzO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIDIgc2V0dGluZ3MgYWxsb3cgeW91IHRvIGVpdGhlciBvbmx5IHdhdGNoIGNlcnRhaW4gY29sbGVjdGlvbnMgKG9wbG9nSW5jbHVkZUNvbGxlY3Rpb25zKSwgb3IgZXhjbHVkZSBzb21lIGNvbGxlY3Rpb25zIHlvdSBkb24ndCB3YW50IHRvIHdhdGNoIGZvciBvcGxvZyB1cGRhdGVzIChvcGxvZ0V4Y2x1ZGVDb2xsZWN0aW9ucylcbiAgICAvLyBVc2FnZTpcbiAgICAvLyBzZXR0aW5ncy5qc29uID0ge1xuICAgIC8vICAgXCJwYWNrYWdlc1wiOiB7XG4gICAgLy8gICAgIFwibW9uZ29cIjoge1xuICAgIC8vICAgICAgIFwib3Bsb2dFeGNsdWRlQ29sbGVjdGlvbnNcIjogW1wicHJvZHVjdHNcIiwgXCJwcmljZXNcIl0gLy8gVGhpcyB3b3VsZCBleGNsdWRlIGJvdGggY29sbGVjdGlvbnMgXCJwcm9kdWN0c1wiIGFuZCBcInByaWNlc1wiIGZyb20gYW55IG9wbG9nIHRhaWxpbmcuIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmV3YXJlISBUaGlzIG1lYW5zLCB0aGF0IG5vIHN1YnNjcmlwdGlvbnMgb24gdGhlc2UgMiBjb2xsZWN0aW9ucyB3aWxsIHVwZGF0ZSBhbnltb3JlIVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIGNvbnN0IGluY2x1ZGVDb2xsZWN0aW9ucyA9IE1ldGVvci5zZXR0aW5ncz8ucGFja2FnZXM/Lm1vbmdvPy5vcGxvZ0luY2x1ZGVDb2xsZWN0aW9ucztcbiAgICBjb25zdCBleGNsdWRlQ29sbGVjdGlvbnMgPSBNZXRlb3Iuc2V0dGluZ3M/LnBhY2thZ2VzPy5tb25nbz8ub3Bsb2dFeGNsdWRlQ29sbGVjdGlvbnM7XG4gICAgaWYgKGluY2x1ZGVDb2xsZWN0aW9ucz8ubGVuZ3RoICYmIGV4Y2x1ZGVDb2xsZWN0aW9ucz8ubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgYm90aCBtb25nbyBvcGxvZyBzZXR0aW5ncyBvcGxvZ0luY2x1ZGVDb2xsZWN0aW9ucyBhbmQgb3Bsb2dFeGNsdWRlQ29sbGVjdGlvbnMgYXQgdGhlIHNhbWUgdGltZS5cIik7XG4gICAgfVxuICAgIGlmIChleGNsdWRlQ29sbGVjdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgb3Bsb2dTZWxlY3Rvci5ucyA9IHtcbiAgICAgICAgJHJlZ2V4OiBvcGxvZ1NlbGVjdG9yLm5zLFxuICAgICAgICAkbmluOiBleGNsdWRlQ29sbGVjdGlvbnMubWFwKChjb2xsTmFtZSkgPT4gYCR7c2VsZi5fZGJOYW1lfS4ke2NvbGxOYW1lfWApXG4gICAgICB9XG4gICAgICBzZWxmLl9vcGxvZ09wdGlvbnMgPSB7IGV4Y2x1ZGVDb2xsZWN0aW9ucyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmNsdWRlQ29sbGVjdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgb3Bsb2dTZWxlY3RvciA9IHsgJGFuZDogW1xuICAgICAgICB7ICRvcjogW1xuICAgICAgICAgIHsgbnM6IC9eYWRtaW5cXC5cXCRjbWQvIH0sXG4gICAgICAgICAgeyBuczogeyAkaW46IGluY2x1ZGVDb2xsZWN0aW9ucy5tYXAoKGNvbGxOYW1lKSA9PiBgJHtzZWxmLl9kYk5hbWV9LiR7Y29sbE5hbWV9YCkgfSB9XG4gICAgICAgIF0gfSxcbiAgICAgICAgeyAkb3I6IG9wbG9nU2VsZWN0b3IuJG9yIH0sIC8vIHRoZSBpbml0aWFsICRvciB0byBzZWxlY3Qgb25seSBjZXJ0YWluIG9wZXJhdGlvbnMgKG9wKVxuICAgICAgICB7IHRzOiBvcGxvZ1NlbGVjdG9yLnRzIH1cbiAgICAgIF0gfTtcbiAgICAgIHNlbGYuX29wbG9nT3B0aW9ucyA9IHsgaW5jbHVkZUNvbGxlY3Rpb25zIH07XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvckRlc2NyaXB0aW9uID0gbmV3IEN1cnNvckRlc2NyaXB0aW9uKFxuICAgICAgT1BMT0dfQ09MTEVDVElPTiwgb3Bsb2dTZWxlY3Rvciwge3RhaWxhYmxlOiB0cnVlfSk7XG5cbiAgICAvLyBTdGFydCB0YWlsaW5nIHRoZSBvcGxvZy5cbiAgICAvL1xuICAgIC8vIFdlIHJlc3RhcnQgdGhlIGxvdy1sZXZlbCBvcGxvZyBxdWVyeSBldmVyeSAzMCBzZWNvbmRzIGlmIHdlIGRpZG4ndCBnZXQgYVxuICAgIC8vIGRvYy4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yICM4NTk4OiB0aGUgTm9kZSBNb25nbyBkcml2ZXIgaGFzIGF0IGxlYXN0XG4gICAgLy8gb25lIGJ1ZyB0aGF0IGNhbiBsZWFkIHRvIHF1ZXJ5IGNhbGxiYWNrcyBuZXZlciBnZXR0aW5nIGNhbGxlZCAoZXZlbiB3aXRoXG4gICAgLy8gYW4gZXJyb3IpIHdoZW4gbGVhZGVyc2hpcCBmYWlsb3ZlciBvY2N1ci5cbiAgICBzZWxmLl90YWlsSGFuZGxlID0gc2VsZi5fb3Bsb2dUYWlsQ29ubmVjdGlvbi50YWlsKFxuICAgICAgY3Vyc29yRGVzY3JpcHRpb24sXG4gICAgICBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHNlbGYuX2VudHJ5UXVldWUucHVzaChkb2MpO1xuICAgICAgICBzZWxmLl9tYXliZVN0YXJ0V29ya2VyKCk7XG4gICAgICB9LFxuICAgICAgVEFJTF9USU1FT1VUXG4gICAgKTtcbiAgICBzZWxmLl9yZWFkeUZ1dHVyZS5yZXR1cm4oKTtcbiAgfSxcblxuICBfbWF5YmVTdGFydFdvcmtlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fd29ya2VyQWN0aXZlKSByZXR1cm47XG4gICAgc2VsZi5fd29ya2VyQWN0aXZlID0gdHJ1ZTtcblxuICAgIE1ldGVvci5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXkgYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5IGluIGNhc2Ugb2YgdHJhbnNhY3Rpb25zLlxuICAgICAgZnVuY3Rpb24gaGFuZGxlRG9jKGRvYykge1xuICAgICAgICBpZiAoZG9jLm5zID09PSBcImFkbWluLiRjbWRcIikge1xuICAgICAgICAgIGlmIChkb2Muby5hcHBseU9wcykge1xuICAgICAgICAgICAgLy8gVGhpcyB3YXMgYSBzdWNjZXNzZnVsIHRyYW5zYWN0aW9uLCBzbyB3ZSBuZWVkIHRvIGFwcGx5IHRoZVxuICAgICAgICAgICAgLy8gb3BlcmF0aW9ucyB0aGF0IHdlcmUgaW52b2x2ZWQuXG4gICAgICAgICAgICBsZXQgbmV4dFRpbWVzdGFtcCA9IGRvYy50cztcbiAgICAgICAgICAgIGRvYy5vLmFwcGx5T3BzLmZvckVhY2gob3AgPT4ge1xuICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21ldGVvci9tZXRlb3IvaXNzdWVzLzEwNDIwLlxuICAgICAgICAgICAgICBpZiAoIW9wLnRzKSB7XG4gICAgICAgICAgICAgICAgb3AudHMgPSBuZXh0VGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIG5leHRUaW1lc3RhbXAgPSBuZXh0VGltZXN0YW1wLmFkZChMb25nLk9ORSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGFuZGxlRG9jKG9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGNvbW1hbmQgXCIgKyBFSlNPTi5zdHJpbmdpZnkoZG9jKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmlnZ2VyID0ge1xuICAgICAgICAgIGRyb3BDb2xsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICBkcm9wRGF0YWJhc2U6IGZhbHNlLFxuICAgICAgICAgIG9wOiBkb2MsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkb2MubnMgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgIGRvYy5ucy5zdGFydHNXaXRoKHNlbGYuX2RiTmFtZSArIFwiLlwiKSkge1xuICAgICAgICAgIHRyaWdnZXIuY29sbGVjdGlvbiA9IGRvYy5ucy5zbGljZShzZWxmLl9kYk5hbWUubGVuZ3RoICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBpdCBhIHNwZWNpYWwgY29tbWFuZCBhbmQgdGhlIGNvbGxlY3Rpb24gbmFtZSBpcyBoaWRkZW5cbiAgICAgICAgLy8gc29tZXdoZXJlIGluIG9wZXJhdG9yP1xuICAgICAgICBpZiAodHJpZ2dlci5jb2xsZWN0aW9uID09PSBcIiRjbWRcIikge1xuICAgICAgICAgIGlmIChkb2Muby5kcm9wRGF0YWJhc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0cmlnZ2VyLmNvbGxlY3Rpb247XG4gICAgICAgICAgICB0cmlnZ2VyLmRyb3BEYXRhYmFzZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChfLmhhcyhkb2MubywgXCJkcm9wXCIpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyLmNvbGxlY3Rpb24gPSBkb2Muby5kcm9wO1xuICAgICAgICAgICAgdHJpZ2dlci5kcm9wQ29sbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0cmlnZ2VyLmlkID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwiY3JlYXRlXCIgaW4gZG9jLm8gJiYgXCJpZEluZGV4XCIgaW4gZG9jLm8pIHtcbiAgICAgICAgICAgIC8vIEEgY29sbGVjdGlvbiBnb3QgaW1wbGljaXRseSBjcmVhdGVkIHdpdGhpbiBhIHRyYW5zYWN0aW9uLiBUaGVyZSdzXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGRvIGFueXRoaW5nIGFib3V0IGl0LlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVua25vd24gY29tbWFuZCBcIiArIEVKU09OLnN0cmluZ2lmeShkb2MpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBbGwgb3RoZXIgb3BzIGhhdmUgYW4gaWQuXG4gICAgICAgICAgdHJpZ2dlci5pZCA9IGlkRm9yT3AoZG9jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX2Nyb3NzYmFyLmZpcmUodHJpZ2dlcik7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICghIHNlbGYuX3N0b3BwZWQgJiZcbiAgICAgICAgICAgICAgICEgc2VsZi5fZW50cnlRdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAvLyBBcmUgd2UgdG9vIGZhciBiZWhpbmQ/IEp1c3QgdGVsbCBvdXIgb2JzZXJ2ZXJzIHRoYXQgdGhleSBuZWVkIHRvXG4gICAgICAgICAgLy8gcmVwb2xsLCBhbmQgZHJvcCBvdXIgcXVldWUuXG4gICAgICAgICAgaWYgKHNlbGYuX2VudHJ5UXVldWUubGVuZ3RoID4gVE9PX0ZBUl9CRUhJTkQpIHtcbiAgICAgICAgICAgIHZhciBsYXN0RW50cnkgPSBzZWxmLl9lbnRyeVF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgc2VsZi5fZW50cnlRdWV1ZS5jbGVhcigpO1xuXG4gICAgICAgICAgICBzZWxmLl9vblNraXBwZWRFbnRyaWVzSG9vay5lYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBGcmVlIGFueSB3YWl0VW50aWxDYXVnaHRVcCgpIGNhbGxzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB1cyB0b1xuICAgICAgICAgICAgLy8gcGFzcyBzb21ldGhpbmcgdGhhdCB3ZSBqdXN0IHNraXBwZWQuXG4gICAgICAgICAgICBzZWxmLl9zZXRMYXN0UHJvY2Vzc2VkVFMobGFzdEVudHJ5LnRzKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRvYyA9IHNlbGYuX2VudHJ5UXVldWUuc2hpZnQoKTtcblxuICAgICAgICAgIC8vIEZpcmUgdHJpZ2dlcihzKSBmb3IgdGhpcyBkb2MuXG4gICAgICAgICAgaGFuZGxlRG9jKGRvYyk7XG5cbiAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBwcm9jZXNzZWQgdGhpcyBvcGVyYXRpb24sIHByb2Nlc3MgcGVuZGluZ1xuICAgICAgICAgIC8vIHNlcXVlbmNlcnMuXG4gICAgICAgICAgaWYgKGRvYy50cykge1xuICAgICAgICAgICAgc2VsZi5fc2V0TGFzdFByb2Nlc3NlZFRTKGRvYy50cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwib3Bsb2cgZW50cnkgd2l0aG91dCB0czogXCIgKyBFSlNPTi5zdHJpbmdpZnkoZG9jKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZWxmLl93b3JrZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfc2V0TGFzdFByb2Nlc3NlZFRTOiBmdW5jdGlvbiAodHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5fbGFzdFByb2Nlc3NlZFRTID0gdHM7XG4gICAgd2hpbGUgKCFfLmlzRW1wdHkoc2VsZi5fY2F0Y2hpbmdVcEZ1dHVyZXMpICYmIHNlbGYuX2NhdGNoaW5nVXBGdXR1cmVzWzBdLnRzLmxlc3NUaGFuT3JFcXVhbChzZWxmLl9sYXN0UHJvY2Vzc2VkVFMpKSB7XG4gICAgICB2YXIgc2VxdWVuY2VyID0gc2VsZi5fY2F0Y2hpbmdVcEZ1dHVyZXMuc2hpZnQoKTtcbiAgICAgIHNlcXVlbmNlci5mdXR1cmUucmV0dXJuKCk7XG4gICAgfVxuICB9LFxuXG4gIC8vTWV0aG9kcyB1c2VkIG9uIHRlc3RzIHRvIGRpbmFtaWNhbGx5IGNoYW5nZSBUT09fRkFSX0JFSElORFxuICBfZGVmaW5lVG9vRmFyQmVoaW5kOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIFRPT19GQVJfQkVISU5EID0gdmFsdWU7XG4gIH0sXG4gIF9yZXNldFRvb0ZhckJlaGluZDogZnVuY3Rpb24oKSB7XG4gICAgVE9PX0ZBUl9CRUhJTkQgPSBwcm9jZXNzLmVudi5NRVRFT1JfT1BMT0dfVE9PX0ZBUl9CRUhJTkQgfHwgMjAwMDtcbiAgfVxufSk7XG4iLCJ2YXIgRnV0dXJlID0gTnBtLnJlcXVpcmUoJ2ZpYmVycy9mdXR1cmUnKTtcblxuT2JzZXJ2ZU11bHRpcGxleGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghb3B0aW9ucyB8fCAhXy5oYXMob3B0aW9ucywgJ29yZGVyZWQnKSlcbiAgICB0aHJvdyBFcnJvcihcIm11c3Qgc3BlY2lmaWVkIG9yZGVyZWRcIik7XG5cbiAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgIFwibW9uZ28tbGl2ZWRhdGFcIiwgXCJvYnNlcnZlLW11bHRpcGxleGVyc1wiLCAxKTtcblxuICBzZWxmLl9vcmRlcmVkID0gb3B0aW9ucy5vcmRlcmVkO1xuICBzZWxmLl9vblN0b3AgPSBvcHRpb25zLm9uU3RvcCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgc2VsZi5fcXVldWUgPSBuZXcgTWV0ZW9yLl9TeW5jaHJvbm91c1F1ZXVlKCk7XG4gIHNlbGYuX2hhbmRsZXMgPSB7fTtcbiAgc2VsZi5fcmVhZHlGdXR1cmUgPSBuZXcgRnV0dXJlO1xuICBzZWxmLl9jYWNoZSA9IG5ldyBMb2NhbENvbGxlY3Rpb24uX0NhY2hpbmdDaGFuZ2VPYnNlcnZlcih7XG4gICAgb3JkZXJlZDogb3B0aW9ucy5vcmRlcmVkfSk7XG4gIC8vIE51bWJlciBvZiBhZGRIYW5kbGVBbmRTZW5kSW5pdGlhbEFkZHMgdGFza3Mgc2NoZWR1bGVkIGJ1dCBub3QgeWV0XG4gIC8vIHJ1bm5pbmcuIHJlbW92ZUhhbmRsZSB1c2VzIHRoaXMgdG8ga25vdyBpZiBpdCdzIHRpbWUgdG8gY2FsbCB0aGUgb25TdG9wXG4gIC8vIGNhbGxiYWNrLlxuICBzZWxmLl9hZGRIYW5kbGVUYXNrc1NjaGVkdWxlZEJ1dE5vdFBlcmZvcm1lZCA9IDA7XG5cbiAgXy5lYWNoKHNlbGYuY2FsbGJhY2tOYW1lcygpLCBmdW5jdGlvbiAoY2FsbGJhY2tOYW1lKSB7XG4gICAgc2VsZltjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKC8qIC4uLiAqLykge1xuICAgICAgc2VsZi5fYXBwbHlDYWxsYmFjayhjYWxsYmFja05hbWUsIF8udG9BcnJheShhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbl8uZXh0ZW5kKE9ic2VydmVNdWx0aXBsZXhlci5wcm90b3R5cGUsIHtcbiAgYWRkSGFuZGxlQW5kU2VuZEluaXRpYWxBZGRzOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ2hlY2sgdGhpcyBiZWZvcmUgY2FsbGluZyBydW5UYXNrIChldmVuIHRob3VnaCBydW5UYXNrIGRvZXMgdGhlIHNhbWVcbiAgICAvLyBjaGVjaykgc28gdGhhdCB3ZSBkb24ndCBsZWFrIGFuIE9ic2VydmVNdWx0aXBsZXhlciBvbiBlcnJvciBieVxuICAgIC8vIGluY3JlbWVudGluZyBfYWRkSGFuZGxlVGFza3NTY2hlZHVsZWRCdXROb3RQZXJmb3JtZWQgYW5kIG5ldmVyXG4gICAgLy8gZGVjcmVtZW50aW5nIGl0LlxuICAgIGlmICghc2VsZi5fcXVldWUuc2FmZVRvUnVuVGFzaygpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY2FsbCBvYnNlcnZlQ2hhbmdlcyBmcm9tIGFuIG9ic2VydmUgY2FsbGJhY2sgb24gdGhlIHNhbWUgcXVlcnlcIik7XG4gICAgKytzZWxmLl9hZGRIYW5kbGVUYXNrc1NjaGVkdWxlZEJ1dE5vdFBlcmZvcm1lZDtcblxuICAgIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXSAmJiBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICAgIFwibW9uZ28tbGl2ZWRhdGFcIiwgXCJvYnNlcnZlLWhhbmRsZXNcIiwgMSk7XG5cbiAgICBzZWxmLl9xdWV1ZS5ydW5UYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2hhbmRsZXNbaGFuZGxlLl9pZF0gPSBoYW5kbGU7XG4gICAgICAvLyBTZW5kIG91dCB3aGF0ZXZlciBhZGRzIHdlIGhhdmUgc28gZmFyICh3aGV0aGVyIG9yIG5vdCB3ZSB0aGVcbiAgICAgIC8vIG11bHRpcGxleGVyIGlzIHJlYWR5KS5cbiAgICAgIHNlbGYuX3NlbmRBZGRzKGhhbmRsZSk7XG4gICAgICAtLXNlbGYuX2FkZEhhbmRsZVRhc2tzU2NoZWR1bGVkQnV0Tm90UGVyZm9ybWVkO1xuICAgIH0pO1xuICAgIC8vICpvdXRzaWRlKiB0aGUgdGFzaywgc2luY2Ugb3RoZXJ3aXNlIHdlJ2QgZGVhZGxvY2tcbiAgICBzZWxmLl9yZWFkeUZ1dHVyZS53YWl0KCk7XG4gIH0sXG5cbiAgLy8gUmVtb3ZlIGFuIG9ic2VydmUgaGFuZGxlLiBJZiBpdCB3YXMgdGhlIGxhc3Qgb2JzZXJ2ZSBoYW5kbGUsIGNhbGwgdGhlXG4gIC8vIG9uU3RvcCBjYWxsYmFjazsgeW91IGNhbm5vdCBhZGQgYW55IG1vcmUgb2JzZXJ2ZSBoYW5kbGVzIGFmdGVyIHRoaXMuXG4gIC8vXG4gIC8vIFRoaXMgaXMgbm90IHN5bmNocm9uaXplZCB3aXRoIHBvbGxzIGFuZCBoYW5kbGUgYWRkaXRpb25zOiB0aGlzIG1lYW5zIHRoYXRcbiAgLy8geW91IGNhbiBzYWZlbHkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbiBvYnNlcnZlIGNhbGxiYWNrLCBidXQgaXQgYWxzbyBtZWFuc1xuICAvLyB0aGF0IHdlIGhhdmUgdG8gYmUgY2FyZWZ1bCB3aGVuIHdlIGl0ZXJhdGUgb3ZlciBfaGFuZGxlcy5cbiAgcmVtb3ZlSGFuZGxlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaGlzIHNob3VsZCBub3QgYmUgcG9zc2libGU6IHlvdSBjYW4gb25seSBjYWxsIHJlbW92ZUhhbmRsZSBieSBoYXZpbmdcbiAgICAvLyBhY2Nlc3MgdG8gdGhlIE9ic2VydmVIYW5kbGUsIHdoaWNoIGlzbid0IHJldHVybmVkIHRvIHVzZXIgY29kZSB1bnRpbCB0aGVcbiAgICAvLyBtdWx0aXBsZXggaXMgcmVhZHkuXG4gICAgaWYgKCFzZWxmLl9yZWFkeSgpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgcmVtb3ZlIGhhbmRsZXMgdW50aWwgdGhlIG11bHRpcGxleCBpcyByZWFkeVwiKTtcblxuICAgIGRlbGV0ZSBzZWxmLl9oYW5kbGVzW2lkXTtcblxuICAgIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXSAmJiBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICAgIFwibW9uZ28tbGl2ZWRhdGFcIiwgXCJvYnNlcnZlLWhhbmRsZXNcIiwgLTEpO1xuXG4gICAgaWYgKF8uaXNFbXB0eShzZWxmLl9oYW5kbGVzKSAmJlxuICAgICAgICBzZWxmLl9hZGRIYW5kbGVUYXNrc1NjaGVkdWxlZEJ1dE5vdFBlcmZvcm1lZCA9PT0gMCkge1xuICAgICAgc2VsZi5fc3RvcCgpO1xuICAgIH1cbiAgfSxcbiAgX3N0b3A6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gSXQgc2hvdWxkbid0IGJlIHBvc3NpYmxlIGZvciB1cyB0byBzdG9wIHdoZW4gYWxsIG91ciBoYW5kbGVzIHN0aWxsXG4gICAgLy8gaGF2ZW4ndCBiZWVuIHJldHVybmVkIGZyb20gb2JzZXJ2ZUNoYW5nZXMhXG4gICAgaWYgKCEgc2VsZi5fcmVhZHkoKSAmJiAhIG9wdGlvbnMuZnJvbVF1ZXJ5RXJyb3IpXG4gICAgICB0aHJvdyBFcnJvcihcInN1cnByaXNpbmcgX3N0b3A6IG5vdCByZWFkeVwiKTtcblxuICAgIC8vIENhbGwgc3RvcCBjYWxsYmFjayAod2hpY2gga2lsbHMgdGhlIHVuZGVybHlpbmcgcHJvY2VzcyB3aGljaCBzZW5kcyB1c1xuICAgIC8vIGNhbGxiYWNrcyBhbmQgcmVtb3ZlcyB1cyBmcm9tIHRoZSBjb25uZWN0aW9uJ3MgZGljdGlvbmFyeSkuXG4gICAgc2VsZi5fb25TdG9wKCk7XG4gICAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgICAgXCJtb25nby1saXZlZGF0YVwiLCBcIm9ic2VydmUtbXVsdGlwbGV4ZXJzXCIsIC0xKTtcblxuICAgIC8vIENhdXNlIGZ1dHVyZSBhZGRIYW5kbGVBbmRTZW5kSW5pdGlhbEFkZHMgY2FsbHMgdG8gdGhyb3cgKGJ1dCB0aGUgb25TdG9wXG4gICAgLy8gY2FsbGJhY2sgc2hvdWxkIG1ha2Ugb3VyIGNvbm5lY3Rpb24gZm9yZ2V0IGFib3V0IHVzKS5cbiAgICBzZWxmLl9oYW5kbGVzID0gbnVsbDtcbiAgfSxcblxuICAvLyBBbGxvd3MgYWxsIGFkZEhhbmRsZUFuZFNlbmRJbml0aWFsQWRkcyBjYWxscyB0byByZXR1cm4sIG9uY2UgYWxsIHByZWNlZGluZ1xuICAvLyBhZGRzIGhhdmUgYmVlbiBwcm9jZXNzZWQuIERvZXMgbm90IGJsb2NrLlxuICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLl9xdWV1ZS5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3JlYWR5KCkpXG4gICAgICAgIHRocm93IEVycm9yKFwiY2FuJ3QgbWFrZSBPYnNlcnZlTXVsdGlwbGV4IHJlYWR5IHR3aWNlIVwiKTtcbiAgICAgIHNlbGYuX3JlYWR5RnV0dXJlLnJldHVybigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIElmIHRyeWluZyB0byBleGVjdXRlIHRoZSBxdWVyeSByZXN1bHRzIGluIGFuIGVycm9yLCBjYWxsIHRoaXMuIFRoaXMgaXNcbiAgLy8gaW50ZW5kZWQgZm9yIHBlcm1hbmVudCBlcnJvcnMsIG5vdCB0cmFuc2llbnQgbmV0d29yayBlcnJvcnMgdGhhdCBjb3VsZCBiZVxuICAvLyBmaXhlZC4gSXQgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSByZWFkeSgpLCBiZWNhdXNlIGlmIHlvdSBjYWxsZWQgcmVhZHlcbiAgLy8gdGhhdCBtZWFudCB0aGF0IHlvdSBtYW5hZ2VkIHRvIHJ1biB0aGUgcXVlcnkgb25jZS4gSXQgd2lsbCBzdG9wIHRoaXNcbiAgLy8gT2JzZXJ2ZU11bHRpcGxleCBhbmQgY2F1c2UgYWRkSGFuZGxlQW5kU2VuZEluaXRpYWxBZGRzIGNhbGxzIChhbmQgdGh1c1xuICAvLyBvYnNlcnZlQ2hhbmdlcyBjYWxscykgdG8gdGhyb3cgdGhlIGVycm9yLlxuICBxdWVyeUVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuX3F1ZXVlLnJ1blRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3JlYWR5KCkpXG4gICAgICAgIHRocm93IEVycm9yKFwiY2FuJ3QgY2xhaW0gcXVlcnkgaGFzIGFuIGVycm9yIGFmdGVyIGl0IHdvcmtlZCFcIik7XG4gICAgICBzZWxmLl9zdG9wKHtmcm9tUXVlcnlFcnJvcjogdHJ1ZX0pO1xuICAgICAgc2VsZi5fcmVhZHlGdXR1cmUudGhyb3coZXJyKTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBDYWxscyBcImNiXCIgb25jZSB0aGUgZWZmZWN0cyBvZiBhbGwgXCJyZWFkeVwiLCBcImFkZEhhbmRsZUFuZFNlbmRJbml0aWFsQWRkc1wiXG4gIC8vIGFuZCBvYnNlcnZlIGNhbGxiYWNrcyB3aGljaCBjYW1lIGJlZm9yZSB0aGlzIGNhbGwgaGF2ZSBiZWVuIHByb3BhZ2F0ZWQgdG9cbiAgLy8gYWxsIGhhbmRsZXMuIFwicmVhZHlcIiBtdXN0IGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBvbiB0aGlzIG11bHRpcGxleGVyLlxuICBvbkZsdXNoOiBmdW5jdGlvbiAoY2IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5fcXVldWUucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2VsZi5fcmVhZHkoKSlcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJvbmx5IGNhbGwgb25GbHVzaCBvbiBhIG11bHRpcGxleGVyIHRoYXQgd2lsbCBiZSByZWFkeVwiKTtcbiAgICAgIGNiKCk7XG4gICAgfSk7XG4gIH0sXG4gIGNhbGxiYWNrTmFtZXM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuX29yZGVyZWQpXG4gICAgICByZXR1cm4gW1wiYWRkZWRCZWZvcmVcIiwgXCJjaGFuZ2VkXCIsIFwibW92ZWRCZWZvcmVcIiwgXCJyZW1vdmVkXCJdO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBbXCJhZGRlZFwiLCBcImNoYW5nZWRcIiwgXCJyZW1vdmVkXCJdO1xuICB9LFxuICBfcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlGdXR1cmUuaXNSZXNvbHZlZCgpO1xuICB9LFxuICBfYXBwbHlDYWxsYmFjazogZnVuY3Rpb24gKGNhbGxiYWNrTmFtZSwgYXJncykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLl9xdWV1ZS5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSWYgd2Ugc3RvcHBlZCBpbiB0aGUgbWVhbnRpbWUsIGRvIG5vdGhpbmcuXG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZXMpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgLy8gRmlyc3QsIGFwcGx5IHRoZSBjaGFuZ2UgdG8gdGhlIGNhY2hlLlxuICAgICAgc2VsZi5fY2FjaGUuYXBwbHlDaGFuZ2VbY2FsbGJhY2tOYW1lXS5hcHBseShudWxsLCBhcmdzKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBmaW5pc2hlZCB0aGUgaW5pdGlhbCBhZGRzLCB0aGVuIHdlIHNob3VsZCBvbmx5IGJlIGdldHRpbmdcbiAgICAgIC8vIGFkZHMuXG4gICAgICBpZiAoIXNlbGYuX3JlYWR5KCkgJiZcbiAgICAgICAgICAoY2FsbGJhY2tOYW1lICE9PSAnYWRkZWQnICYmIGNhbGxiYWNrTmFtZSAhPT0gJ2FkZGVkQmVmb3JlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR290IFwiICsgY2FsbGJhY2tOYW1lICsgXCIgZHVyaW5nIGluaXRpYWwgYWRkc1wiKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm93IG11bHRpcGxleCB0aGUgY2FsbGJhY2tzIG91dCB0byBhbGwgb2JzZXJ2ZSBoYW5kbGVzLiBJdCdzIE9LIGlmXG4gICAgICAvLyB0aGVzZSBjYWxscyB5aWVsZDsgc2luY2Ugd2UncmUgaW5zaWRlIGEgdGFzaywgbm8gb3RoZXIgdXNlIG9mIG91ciBxdWV1ZVxuICAgICAgLy8gY2FuIGNvbnRpbnVlIHVudGlsIHRoZXNlIGFyZSBkb25lLiAoQnV0IHdlIGRvIGhhdmUgdG8gYmUgY2FyZWZ1bCB0byBub3RcbiAgICAgIC8vIHVzZSBhIGhhbmRsZSB0aGF0IGdvdCByZW1vdmVkLCBiZWNhdXNlIHJlbW92ZUhhbmRsZSBkb2VzIG5vdCB1c2UgdGhlXG4gICAgICAvLyBxdWV1ZTsgdGh1cywgd2UgaXRlcmF0ZSBvdmVyIGFuIGFycmF5IG9mIGtleXMgdGhhdCB3ZSBjb250cm9sLilcbiAgICAgIF8uZWFjaChfLmtleXMoc2VsZi5faGFuZGxlcyksIGZ1bmN0aW9uIChoYW5kbGVJZCkge1xuICAgICAgICB2YXIgaGFuZGxlID0gc2VsZi5faGFuZGxlcyAmJiBzZWxmLl9oYW5kbGVzW2hhbmRsZUlkXTtcbiAgICAgICAgaWYgKCFoYW5kbGUpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBoYW5kbGVbJ18nICsgY2FsbGJhY2tOYW1lXTtcbiAgICAgICAgLy8gY2xvbmUgYXJndW1lbnRzIHNvIHRoYXQgY2FsbGJhY2tzIGNhbiBtdXRhdGUgdGhlaXIgYXJndW1lbnRzXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KG51bGwsXG4gICAgICAgICAgaGFuZGxlLm5vbk11dGF0aW5nQ2FsbGJhY2tzID8gYXJncyA6IEVKU09OLmNsb25lKGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFNlbmRzIGluaXRpYWwgYWRkcyB0byBhIGhhbmRsZS4gSXQgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZyb20gd2l0aGluIGEgdGFza1xuICAvLyAodGhlIHRhc2sgdGhhdCBpcyBwcm9jZXNzaW5nIHRoZSBhZGRIYW5kbGVBbmRTZW5kSW5pdGlhbEFkZHMgY2FsbCkuIEl0XG4gIC8vIHN5bmNocm9ub3VzbHkgaW52b2tlcyB0aGUgaGFuZGxlJ3MgYWRkZWQgb3IgYWRkZWRCZWZvcmU7IHRoZXJlJ3Mgbm8gbmVlZCB0b1xuICAvLyBmbHVzaCB0aGUgcXVldWUgYWZ0ZXJ3YXJkcyB0byBlbnN1cmUgdGhhdCB0aGUgY2FsbGJhY2tzIGdldCBvdXQuXG4gIF9zZW5kQWRkczogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fcXVldWUuc2FmZVRvUnVuVGFzaygpKVxuICAgICAgdGhyb3cgRXJyb3IoXCJfc2VuZEFkZHMgbWF5IG9ubHkgYmUgY2FsbGVkIGZyb20gd2l0aGluIGEgdGFzayFcIik7XG4gICAgdmFyIGFkZCA9IHNlbGYuX29yZGVyZWQgPyBoYW5kbGUuX2FkZGVkQmVmb3JlIDogaGFuZGxlLl9hZGRlZDtcbiAgICBpZiAoIWFkZClcbiAgICAgIHJldHVybjtcbiAgICAvLyBub3RlOiBkb2NzIG1heSBiZSBhbiBfSWRNYXAgb3IgYW4gT3JkZXJlZERpY3RcbiAgICBzZWxmLl9jYWNoZS5kb2NzLmZvckVhY2goZnVuY3Rpb24gKGRvYywgaWQpIHtcbiAgICAgIGlmICghXy5oYXMoc2VsZi5faGFuZGxlcywgaGFuZGxlLl9pZCkpXG4gICAgICAgIHRocm93IEVycm9yKFwiaGFuZGxlIGdvdCByZW1vdmVkIGJlZm9yZSBzZW5kaW5nIGluaXRpYWwgYWRkcyFcIik7XG4gICAgICBjb25zdCB7IF9pZCwgLi4uZmllbGRzIH0gPSBoYW5kbGUubm9uTXV0YXRpbmdDYWxsYmFja3MgPyBkb2NcbiAgICAgICAgOiBFSlNPTi5jbG9uZShkb2MpO1xuICAgICAgaWYgKHNlbGYuX29yZGVyZWQpXG4gICAgICAgIGFkZChpZCwgZmllbGRzLCBudWxsKTsgLy8gd2UncmUgZ29pbmcgaW4gb3JkZXIsIHNvIGFkZCBhdCBlbmRcbiAgICAgIGVsc2VcbiAgICAgICAgYWRkKGlkLCBmaWVsZHMpO1xuICAgIH0pO1xuICB9XG59KTtcblxuXG52YXIgbmV4dE9ic2VydmVIYW5kbGVJZCA9IDE7XG5cbi8vIFdoZW4gdGhlIGNhbGxiYWNrcyBkbyBub3QgbXV0YXRlIHRoZSBhcmd1bWVudHMsIHdlIGNhbiBza2lwIGEgbG90IG9mIGRhdGEgY2xvbmVzXG5PYnNlcnZlSGFuZGxlID0gZnVuY3Rpb24gKG11bHRpcGxleGVyLCBjYWxsYmFja3MsIG5vbk11dGF0aW5nQ2FsbGJhY2tzID0gZmFsc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyBUaGUgZW5kIHVzZXIgaXMgb25seSBzdXBwb3NlZCB0byBjYWxsIHN0b3AoKS4gIFRoZSBvdGhlciBmaWVsZHMgYXJlXG4gIC8vIGFjY2Vzc2libGUgdG8gdGhlIG11bHRpcGxleGVyLCB0aG91Z2guXG4gIHNlbGYuX211bHRpcGxleGVyID0gbXVsdGlwbGV4ZXI7XG4gIF8uZWFjaChtdWx0aXBsZXhlci5jYWxsYmFja05hbWVzKCksIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKGNhbGxiYWNrc1tuYW1lXSkge1xuICAgICAgc2VsZlsnXycgKyBuYW1lXSA9IGNhbGxiYWNrc1tuYW1lXTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYWRkZWRCZWZvcmVcIiAmJiBjYWxsYmFja3MuYWRkZWQpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogaWYgeW91IHNwZWNpZnkgXCJhZGRlZFwiIGFuZCBcIm1vdmVkQmVmb3JlXCIsIHlvdSBnZXQgYW5cbiAgICAgIC8vIG9yZGVyZWQgb2JzZXJ2ZSB3aGVyZSBmb3Igc29tZSByZWFzb24geW91IGRvbid0IGdldCBvcmRlcmluZyBkYXRhIG9uXG4gICAgICAvLyB0aGUgYWRkcy4gIEkgZHVubm8sIHdlIHdyb3RlIHRlc3RzIGZvciBpdCwgdGhlcmUgbXVzdCBoYXZlIGJlZW4gYVxuICAgICAgLy8gcmVhc29uLlxuICAgICAgc2VsZi5fYWRkZWRCZWZvcmUgPSBmdW5jdGlvbiAoaWQsIGZpZWxkcywgYmVmb3JlKSB7XG4gICAgICAgIGNhbGxiYWNrcy5hZGRlZChpZCwgZmllbGRzKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgc2VsZi5fc3RvcHBlZCA9IGZhbHNlO1xuICBzZWxmLl9pZCA9IG5leHRPYnNlcnZlSGFuZGxlSWQrKztcbiAgc2VsZi5ub25NdXRhdGluZ0NhbGxiYWNrcyA9IG5vbk11dGF0aW5nQ2FsbGJhY2tzO1xufTtcbk9ic2VydmVIYW5kbGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgcmV0dXJuO1xuICBzZWxmLl9zdG9wcGVkID0gdHJ1ZTtcbiAgc2VsZi5fbXVsdGlwbGV4ZXIucmVtb3ZlSGFuZGxlKHNlbGYuX2lkKTtcbn07XG4iLCJ2YXIgRmliZXIgPSBOcG0ucmVxdWlyZSgnZmliZXJzJyk7XG5cbmV4cG9ydCBjbGFzcyBEb2NGZXRjaGVyIHtcbiAgY29uc3RydWN0b3IobW9uZ29Db25uZWN0aW9uKSB7XG4gICAgdGhpcy5fbW9uZ29Db25uZWN0aW9uID0gbW9uZ29Db25uZWN0aW9uO1xuICAgIC8vIE1hcCBmcm9tIG9wIC0+IFtjYWxsYmFja11cbiAgICB0aGlzLl9jYWxsYmFja3NGb3JPcCA9IG5ldyBNYXA7XG4gIH1cblxuICAvLyBGZXRjaGVzIGRvY3VtZW50IFwiaWRcIiBmcm9tIGNvbGxlY3Rpb25OYW1lLCByZXR1cm5pbmcgaXQgb3IgbnVsbCBpZiBub3RcbiAgLy8gZm91bmQuXG4gIC8vXG4gIC8vIElmIHlvdSBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIGZldGNoKCkgd2l0aCB0aGUgc2FtZSBvcCByZWZlcmVuY2UsXG4gIC8vIERvY0ZldGNoZXIgbWF5IGFzc3VtZSB0aGF0IHRoZXkgYWxsIHJldHVybiB0aGUgc2FtZSBkb2N1bWVudC4gKEl0IGRvZXNcbiAgLy8gbm90IGNoZWNrIHRvIHNlZSBpZiBjb2xsZWN0aW9uTmFtZS9pZCBtYXRjaC4pXG4gIC8vXG4gIC8vIFlvdSBtYXkgYXNzdW1lIHRoYXQgY2FsbGJhY2sgaXMgbmV2ZXIgY2FsbGVkIHN5bmNocm9ub3VzbHkgKGFuZCBpbiBmYWN0XG4gIC8vIE9wbG9nT2JzZXJ2ZURyaXZlciBkb2VzIHNvKS5cbiAgZmV0Y2goY29sbGVjdGlvbk5hbWUsIGlkLCBvcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIFxuICAgIGNoZWNrKGNvbGxlY3Rpb25OYW1lLCBTdHJpbmcpO1xuICAgIGNoZWNrKG9wLCBPYmplY3QpO1xuXG5cbiAgICAvLyBJZiB0aGVyZSdzIGFscmVhZHkgYW4gaW4tcHJvZ3Jlc3MgZmV0Y2ggZm9yIHRoaXMgY2FjaGUga2V5LCB5aWVsZCB1bnRpbFxuICAgIC8vIGl0J3MgZG9uZSBhbmQgcmV0dXJuIHdoYXRldmVyIGl0IHJldHVybnMuXG4gICAgaWYgKHNlbGYuX2NhbGxiYWNrc0Zvck9wLmhhcyhvcCkpIHtcbiAgICAgIHNlbGYuX2NhbGxiYWNrc0Zvck9wLmdldChvcCkucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gW2NhbGxiYWNrXTtcbiAgICBzZWxmLl9jYWxsYmFja3NGb3JPcC5zZXQob3AsIGNhbGxiYWNrcyk7XG5cbiAgICBGaWJlcihmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZG9jID0gc2VsZi5fbW9uZ29Db25uZWN0aW9uLmZpbmRPbmUoXG4gICAgICAgICAgY29sbGVjdGlvbk5hbWUsIHtfaWQ6IGlkfSkgfHwgbnVsbDtcbiAgICAgICAgLy8gUmV0dXJuIGRvYyB0byBhbGwgcmVsZXZhbnQgY2FsbGJhY2tzLiBOb3RlIHRoYXQgdGhpcyBhcnJheSBjYW5cbiAgICAgICAgLy8gY29udGludWUgdG8gZ3JvdyBkdXJpbmcgY2FsbGJhY2sgZXhjZWN1dGlvbi5cbiAgICAgICAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gQ2xvbmUgdGhlIGRvY3VtZW50IHNvIHRoYXQgdGhlIHZhcmlvdXMgY2FsbHMgdG8gZmV0Y2ggZG9uJ3QgcmV0dXJuXG4gICAgICAgICAgLy8gb2JqZWN0cyB0aGF0IGFyZSBpbnRlcnR3aW5nbGVkIHdpdGggZWFjaCBvdGhlci4gQ2xvbmUgYmVmb3JlXG4gICAgICAgICAgLy8gcG9wcGluZyB0aGUgZnV0dXJlLCBzbyB0aGF0IGlmIGNsb25lIHRocm93cywgdGhlIGVycm9yIGdldHMgcGFzc2VkXG4gICAgICAgICAgLy8gdG8gdGhlIG5leHQgY2FsbGJhY2suXG4gICAgICAgICAgY2FsbGJhY2tzLnBvcCgpKG51bGwsIEVKU09OLmNsb25lKGRvYykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNhbGxiYWNrcy5wb3AoKShlKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gWFhYIGNvbnNpZGVyIGtlZXBpbmcgdGhlIGRvYyBhcm91bmQgZm9yIGEgcGVyaW9kIG9mIHRpbWUgYmVmb3JlXG4gICAgICAgIC8vIHJlbW92aW5nIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrc0Zvck9wLmRlbGV0ZShvcCk7XG4gICAgICB9XG4gICAgfSkucnVuKCk7XG4gIH1cbn1cbiIsInZhciBQT0xMSU5HX1RIUk9UVExFX01TID0gK3Byb2Nlc3MuZW52Lk1FVEVPUl9QT0xMSU5HX1RIUk9UVExFX01TIHx8IDUwO1xudmFyIFBPTExJTkdfSU5URVJWQUxfTVMgPSArcHJvY2Vzcy5lbnYuTUVURU9SX1BPTExJTkdfSU5URVJWQUxfTVMgfHwgMTAgKiAxMDAwO1xuXG5Qb2xsaW5nT2JzZXJ2ZURyaXZlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbiA9IG9wdGlvbnMuY3Vyc29yRGVzY3JpcHRpb247XG4gIHNlbGYuX21vbmdvSGFuZGxlID0gb3B0aW9ucy5tb25nb0hhbmRsZTtcbiAgc2VsZi5fb3JkZXJlZCA9IG9wdGlvbnMub3JkZXJlZDtcbiAgc2VsZi5fbXVsdGlwbGV4ZXIgPSBvcHRpb25zLm11bHRpcGxleGVyO1xuICBzZWxmLl9zdG9wQ2FsbGJhY2tzID0gW107XG4gIHNlbGYuX3N0b3BwZWQgPSBmYWxzZTtcblxuICBzZWxmLl9zeW5jaHJvbm91c0N1cnNvciA9IHNlbGYuX21vbmdvSGFuZGxlLl9jcmVhdGVTeW5jaHJvbm91c0N1cnNvcihcbiAgICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbik7XG5cbiAgLy8gcHJldmlvdXMgcmVzdWx0cyBzbmFwc2hvdC4gIG9uIGVhY2ggcG9sbCBjeWNsZSwgZGlmZnMgYWdhaW5zdFxuICAvLyByZXN1bHRzIGRyaXZlcyB0aGUgY2FsbGJhY2tzLlxuICBzZWxmLl9yZXN1bHRzID0gbnVsbDtcblxuICAvLyBUaGUgbnVtYmVyIG9mIF9wb2xsTW9uZ28gY2FsbHMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gc2VsZi5fdGFza1F1ZXVlIGJ1dFxuICAvLyBoYXZlIG5vdCBzdGFydGVkIHJ1bm5pbmcuIFVzZWQgdG8gbWFrZSBzdXJlIHdlIG5ldmVyIHNjaGVkdWxlIG1vcmUgdGhhbiBvbmVcbiAgLy8gX3BvbGxNb25nbyAob3RoZXIgdGhhbiBwb3NzaWJseSB0aGUgb25lIHRoYXQgaXMgY3VycmVudGx5IHJ1bm5pbmcpLiBJdCdzXG4gIC8vIGFsc28gdXNlZCBieSBfc3VzcGVuZFBvbGxpbmcgdG8gcHJldGVuZCB0aGVyZSdzIGEgcG9sbCBzY2hlZHVsZWQuIFVzdWFsbHksXG4gIC8vIGl0J3MgZWl0aGVyIDAgKGZvciBcIm5vIHBvbGxzIHNjaGVkdWxlZCBvdGhlciB0aGFuIG1heWJlIG9uZSBjdXJyZW50bHlcbiAgLy8gcnVubmluZ1wiKSBvciAxIChmb3IgXCJhIHBvbGwgc2NoZWR1bGVkIHRoYXQgaXNuJ3QgcnVubmluZyB5ZXRcIiksIGJ1dCBpdCBjYW5cbiAgLy8gYWxzbyBiZSAyIGlmIGluY3JlbWVudGVkIGJ5IF9zdXNwZW5kUG9sbGluZy5cbiAgc2VsZi5fcG9sbHNTY2hlZHVsZWRCdXROb3RTdGFydGVkID0gMDtcbiAgc2VsZi5fcGVuZGluZ1dyaXRlcyA9IFtdOyAvLyBwZW9wbGUgdG8gbm90aWZ5IHdoZW4gcG9sbGluZyBjb21wbGV0ZXNcblxuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgc2VwYXJhdGVseSB0aHJvdHRsZWQgZnVuY3Rpb24gZm9yIGVhY2hcbiAgLy8gUG9sbGluZ09ic2VydmVEcml2ZXIgb2JqZWN0LlxuICBzZWxmLl9lbnN1cmVQb2xsSXNTY2hlZHVsZWQgPSBfLnRocm90dGxlKFxuICAgIHNlbGYuX3VudGhyb3R0bGVkRW5zdXJlUG9sbElzU2NoZWR1bGVkLFxuICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMucG9sbGluZ1Rocm90dGxlTXMgfHwgUE9MTElOR19USFJPVFRMRV9NUyAvKiBtcyAqLyk7XG5cbiAgLy8gWFhYIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgbmVlZCBhIHF1ZXVlXG4gIHNlbGYuX3Rhc2tRdWV1ZSA9IG5ldyBNZXRlb3IuX1N5bmNocm9ub3VzUXVldWUoKTtcblxuICB2YXIgbGlzdGVuZXJzSGFuZGxlID0gbGlzdGVuQWxsKFxuICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLCBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAvLyBXaGVuIHNvbWVvbmUgZG9lcyBhIHRyYW5zYWN0aW9uIHRoYXQgbWlnaHQgYWZmZWN0IHVzLCBzY2hlZHVsZSBhIHBvbGxcbiAgICAgIC8vIG9mIHRoZSBkYXRhYmFzZS4gSWYgdGhhdCB0cmFuc2FjdGlvbiBoYXBwZW5zIGluc2lkZSBvZiBhIHdyaXRlIGZlbmNlLFxuICAgICAgLy8gYmxvY2sgdGhlIGZlbmNlIHVudGlsIHdlJ3ZlIHBvbGxlZCBhbmQgbm90aWZpZWQgb2JzZXJ2ZXJzLlxuICAgICAgdmFyIGZlbmNlID0gRERQU2VydmVyLl9DdXJyZW50V3JpdGVGZW5jZS5nZXQoKTtcbiAgICAgIGlmIChmZW5jZSlcbiAgICAgICAgc2VsZi5fcGVuZGluZ1dyaXRlcy5wdXNoKGZlbmNlLmJlZ2luV3JpdGUoKSk7XG4gICAgICAvLyBFbnN1cmUgYSBwb2xsIGlzIHNjaGVkdWxlZC4uLiBidXQgaWYgd2UgYWxyZWFkeSBrbm93IHRoYXQgb25lIGlzLFxuICAgICAgLy8gZG9uJ3QgaGl0IHRoZSB0aHJvdHRsZWQgX2Vuc3VyZVBvbGxJc1NjaGVkdWxlZCBmdW5jdGlvbiAod2hpY2ggbWlnaHRcbiAgICAgIC8vIGxlYWQgdG8gdXMgY2FsbGluZyBpdCB1bm5lY2Vzc2FyaWx5IGluIDxwb2xsaW5nVGhyb3R0bGVNcz4gbXMpLlxuICAgICAgaWYgKHNlbGYuX3BvbGxzU2NoZWR1bGVkQnV0Tm90U3RhcnRlZCA9PT0gMClcbiAgICAgICAgc2VsZi5fZW5zdXJlUG9sbElzU2NoZWR1bGVkKCk7XG4gICAgfVxuICApO1xuICBzZWxmLl9zdG9wQ2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkgeyBsaXN0ZW5lcnNIYW5kbGUuc3RvcCgpOyB9KTtcblxuICAvLyBldmVyeSBvbmNlIGFuZCBhIHdoaWxlLCBwb2xsIGV2ZW4gaWYgd2UgZG9uJ3QgdGhpbmsgd2UncmUgZGlydHksIGZvclxuICAvLyBldmVudHVhbCBjb25zaXN0ZW5jeSB3aXRoIGRhdGFiYXNlIHdyaXRlcyBmcm9tIG91dHNpZGUgdGhlIE1ldGVvclxuICAvLyB1bml2ZXJzZS5cbiAgLy9cbiAgLy8gRm9yIHRlc3RpbmcsIHRoZXJlJ3MgYW4gdW5kb2N1bWVudGVkIGNhbGxiYWNrIGFyZ3VtZW50IHRvIG9ic2VydmVDaGFuZ2VzXG4gIC8vIHdoaWNoIGRpc2FibGVzIHRpbWUtYmFzZWQgcG9sbGluZyBhbmQgZ2V0cyBjYWxsZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoXG4gIC8vIHBvbGwuXG4gIGlmIChvcHRpb25zLl90ZXN0T25seVBvbGxDYWxsYmFjaykge1xuICAgIHNlbGYuX3Rlc3RPbmx5UG9sbENhbGxiYWNrID0gb3B0aW9ucy5fdGVzdE9ubHlQb2xsQ2FsbGJhY2s7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBvbGxpbmdJbnRlcnZhbCA9XG4gICAgICAgICAgc2VsZi5fY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5wb2xsaW5nSW50ZXJ2YWxNcyB8fFxuICAgICAgICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnMuX3BvbGxpbmdJbnRlcnZhbCB8fCAvLyBDT01QQVQgd2l0aCAxLjJcbiAgICAgICAgICBQT0xMSU5HX0lOVEVSVkFMX01TO1xuICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IE1ldGVvci5zZXRJbnRlcnZhbChcbiAgICAgIF8uYmluZChzZWxmLl9lbnN1cmVQb2xsSXNTY2hlZHVsZWQsIHNlbGYpLCBwb2xsaW5nSW50ZXJ2YWwpO1xuICAgIHNlbGYuX3N0b3BDYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICBNZXRlb3IuY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2UgYWN0dWFsbHkgcG9sbCBzb29uIVxuICBzZWxmLl91bnRocm90dGxlZEVuc3VyZVBvbGxJc1NjaGVkdWxlZCgpO1xuXG4gIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXSAmJiBQYWNrYWdlWydmYWN0cy1iYXNlJ10uRmFjdHMuaW5jcmVtZW50U2VydmVyRmFjdChcbiAgICBcIm1vbmdvLWxpdmVkYXRhXCIsIFwib2JzZXJ2ZS1kcml2ZXJzLXBvbGxpbmdcIiwgMSk7XG59O1xuXG5fLmV4dGVuZChQb2xsaW5nT2JzZXJ2ZURyaXZlci5wcm90b3R5cGUsIHtcbiAgLy8gVGhpcyBpcyBhbHdheXMgY2FsbGVkIHRocm91Z2ggXy50aHJvdHRsZSAoZXhjZXB0IG9uY2UgYXQgc3RhcnR1cCkuXG4gIF91bnRocm90dGxlZEVuc3VyZVBvbGxJc1NjaGVkdWxlZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fcG9sbHNTY2hlZHVsZWRCdXROb3RTdGFydGVkID4gMClcbiAgICAgIHJldHVybjtcbiAgICArK3NlbGYuX3BvbGxzU2NoZWR1bGVkQnV0Tm90U3RhcnRlZDtcbiAgICBzZWxmLl90YXNrUXVldWUucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3BvbGxNb25nbygpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIHRlc3Qtb25seSBpbnRlcmZhY2UgZm9yIGNvbnRyb2xsaW5nIHBvbGxpbmcuXG4gIC8vXG4gIC8vIF9zdXNwZW5kUG9sbGluZyBibG9ja3MgdW50aWwgYW55IGN1cnJlbnRseSBydW5uaW5nIGFuZCBzY2hlZHVsZWQgcG9sbHMgYXJlXG4gIC8vIGRvbmUsIGFuZCBwcmV2ZW50cyBhbnkgZnVydGhlciBwb2xscyBmcm9tIGJlaW5nIHNjaGVkdWxlZC4gKG5ld1xuICAvLyBPYnNlcnZlSGFuZGxlcyBjYW4gYmUgYWRkZWQgYW5kIHJlY2VpdmUgdGhlaXIgaW5pdGlhbCBhZGRlZCBjYWxsYmFja3MsXG4gIC8vIHRob3VnaC4pXG4gIC8vXG4gIC8vIF9yZXN1bWVQb2xsaW5nIGltbWVkaWF0ZWx5IHBvbGxzLCBhbmQgYWxsb3dzIGZ1cnRoZXIgcG9sbHMgdG8gb2NjdXIuXG4gIF9zdXNwZW5kUG9sbGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIFByZXRlbmQgdGhhdCB0aGVyZSdzIGFub3RoZXIgcG9sbCBzY2hlZHVsZWQgKHdoaWNoIHdpbGwgcHJldmVudFxuICAgIC8vIF9lbnN1cmVQb2xsSXNTY2hlZHVsZWQgZnJvbSBxdWV1ZWluZyBhbnkgbW9yZSBwb2xscykuXG4gICAgKytzZWxmLl9wb2xsc1NjaGVkdWxlZEJ1dE5vdFN0YXJ0ZWQ7XG4gICAgLy8gTm93IGJsb2NrIHVudGlsIGFsbCBjdXJyZW50bHkgcnVubmluZyBvciBzY2hlZHVsZWQgcG9sbHMgYXJlIGRvbmUuXG4gICAgc2VsZi5fdGFza1F1ZXVlLnJ1blRhc2soZnVuY3Rpb24oKSB7fSk7XG5cbiAgICAvLyBDb25maXJtIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgXCJwb2xsXCIgKHRoZSBmYWtlIG9uZSB3ZSdyZSBwcmV0ZW5kaW5nIHRvXG4gICAgLy8gaGF2ZSkgc2NoZWR1bGVkLlxuICAgIGlmIChzZWxmLl9wb2xsc1NjaGVkdWxlZEJ1dE5vdFN0YXJ0ZWQgIT09IDEpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJfcG9sbHNTY2hlZHVsZWRCdXROb3RTdGFydGVkIGlzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9wb2xsc1NjaGVkdWxlZEJ1dE5vdFN0YXJ0ZWQpO1xuICB9LFxuICBfcmVzdW1lUG9sbGluZzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIFdlIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBzdGF0ZSBhcyBpbiB0aGUgZW5kIG9mIF9zdXNwZW5kUG9sbGluZy5cbiAgICBpZiAoc2VsZi5fcG9sbHNTY2hlZHVsZWRCdXROb3RTdGFydGVkICE9PSAxKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiX3BvbGxzU2NoZWR1bGVkQnV0Tm90U3RhcnRlZCBpcyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcG9sbHNTY2hlZHVsZWRCdXROb3RTdGFydGVkKTtcbiAgICAvLyBSdW4gYSBwb2xsIHN5bmNocm9ub3VzbHkgKHdoaWNoIHdpbGwgY291bnRlcmFjdCB0aGVcbiAgICAvLyArK19wb2xsc1NjaGVkdWxlZEJ1dE5vdFN0YXJ0ZWQgZnJvbSBfc3VzcGVuZFBvbGxpbmcpLlxuICAgIHNlbGYuX3Rhc2tRdWV1ZS5ydW5UYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3BvbGxNb25nbygpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9wb2xsTW9uZ286IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLS1zZWxmLl9wb2xsc1NjaGVkdWxlZEJ1dE5vdFN0YXJ0ZWQ7XG5cbiAgICBpZiAoc2VsZi5fc3RvcHBlZClcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBmaXJzdCA9IGZhbHNlO1xuICAgIHZhciBuZXdSZXN1bHRzO1xuICAgIHZhciBvbGRSZXN1bHRzID0gc2VsZi5fcmVzdWx0cztcbiAgICBpZiAoIW9sZFJlc3VsdHMpIHtcbiAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgIC8vIFhYWCBtYXliZSB1c2UgT3JkZXJlZERpY3QgaW5zdGVhZD9cbiAgICAgIG9sZFJlc3VsdHMgPSBzZWxmLl9vcmRlcmVkID8gW10gOiBuZXcgTG9jYWxDb2xsZWN0aW9uLl9JZE1hcDtcbiAgICB9XG5cbiAgICBzZWxmLl90ZXN0T25seVBvbGxDYWxsYmFjayAmJiBzZWxmLl90ZXN0T25seVBvbGxDYWxsYmFjaygpO1xuXG4gICAgLy8gU2F2ZSB0aGUgbGlzdCBvZiBwZW5kaW5nIHdyaXRlcyB3aGljaCB0aGlzIHJvdW5kIHdpbGwgY29tbWl0LlxuICAgIHZhciB3cml0ZXNGb3JDeWNsZSA9IHNlbGYuX3BlbmRpbmdXcml0ZXM7XG4gICAgc2VsZi5fcGVuZGluZ1dyaXRlcyA9IFtdO1xuXG4gICAgLy8gR2V0IHRoZSBuZXcgcXVlcnkgcmVzdWx0cy4gKFRoaXMgeWllbGRzLilcbiAgICB0cnkge1xuICAgICAgbmV3UmVzdWx0cyA9IHNlbGYuX3N5bmNocm9ub3VzQ3Vyc29yLmdldFJhd09iamVjdHMoc2VsZi5fb3JkZXJlZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGZpcnN0ICYmIHR5cGVvZihlLmNvZGUpID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGVycm9yIGRvY3VtZW50IHNlbnQgdG8gdXMgYnkgbW9uZ29kLCBub3QgYSBjb25uZWN0aW9uXG4gICAgICAgIC8vIGVycm9yIGdlbmVyYXRlZCBieSB0aGUgY2xpZW50LiBBbmQgd2UndmUgbmV2ZXIgc2VlbiB0aGlzIHF1ZXJ5IHdvcmtcbiAgICAgICAgLy8gc3VjY2Vzc2Z1bGx5LiBQcm9iYWJseSBpdCdzIGEgYmFkIHNlbGVjdG9yIG9yIHNvbWV0aGluZywgc28gd2Ugc2hvdWxkXG4gICAgICAgIC8vIE5PVCByZXRyeS4gSW5zdGVhZCwgd2Ugc2hvdWxkIGhhbHQgdGhlIG9ic2VydmUgKHdoaWNoIGVuZHMgdXAgY2FsbGluZ1xuICAgICAgICAvLyBgc3RvcGAgb24gdXMpLlxuICAgICAgICBzZWxmLl9tdWx0aXBsZXhlci5xdWVyeUVycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiRXhjZXB0aW9uIHdoaWxlIHBvbGxpbmcgcXVlcnkgXCIgK1xuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbikgKyBcIjogXCIgKyBlLm1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXRSYXdPYmplY3RzIGNhbiB0aHJvdyBpZiB3ZSdyZSBoYXZpbmcgdHJvdWJsZSB0YWxraW5nIHRvIHRoZVxuICAgICAgLy8gZGF0YWJhc2UuICBUaGF0J3MgZmluZSAtLS0gd2Ugd2lsbCByZXBvbGwgbGF0ZXIgYW55d2F5LiBCdXQgd2Ugc2hvdWxkXG4gICAgICAvLyBtYWtlIHN1cmUgbm90IHRvIGxvc2UgdHJhY2sgb2YgdGhpcyBjeWNsZSdzIHdyaXRlcy5cbiAgICAgIC8vIChJdCBhbHNvIGNhbiB0aHJvdyBpZiB0aGVyZSdzIGp1c3Qgc29tZXRoaW5nIGludmFsaWQgYWJvdXQgdGhpcyBxdWVyeTtcbiAgICAgIC8vIHVuZm9ydHVuYXRlbHkgdGhlIE9ic2VydmVEcml2ZXIgQVBJIGRvZXNuJ3QgcHJvdmlkZSBhIGdvb2Qgd2F5IHRvXG4gICAgICAvLyBcImNhbmNlbFwiIHRoZSBvYnNlcnZlIGZyb20gdGhlIGluc2lkZSBpbiB0aGlzIGNhc2UuXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShzZWxmLl9wZW5kaW5nV3JpdGVzLCB3cml0ZXNGb3JDeWNsZSk7XG4gICAgICBNZXRlb3IuX2RlYnVnKFwiRXhjZXB0aW9uIHdoaWxlIHBvbGxpbmcgcXVlcnkgXCIgK1xuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbiksIGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJ1biBkaWZmcy5cbiAgICBpZiAoIXNlbGYuX3N0b3BwZWQpIHtcbiAgICAgIExvY2FsQ29sbGVjdGlvbi5fZGlmZlF1ZXJ5Q2hhbmdlcyhcbiAgICAgICAgc2VsZi5fb3JkZXJlZCwgb2xkUmVzdWx0cywgbmV3UmVzdWx0cywgc2VsZi5fbXVsdGlwbGV4ZXIpO1xuICAgIH1cblxuICAgIC8vIFNpZ25hbHMgdGhlIG11bHRpcGxleGVyIHRvIGFsbG93IGFsbCBvYnNlcnZlQ2hhbmdlcyBjYWxscyB0aGF0IHNoYXJlIHRoaXNcbiAgICAvLyBtdWx0aXBsZXhlciB0byByZXR1cm4uIChUaGlzIGhhcHBlbnMgYXN5bmNocm9ub3VzbHksIHZpYSB0aGVcbiAgICAvLyBtdWx0aXBsZXhlcidzIHF1ZXVlLilcbiAgICBpZiAoZmlyc3QpXG4gICAgICBzZWxmLl9tdWx0aXBsZXhlci5yZWFkeSgpO1xuXG4gICAgLy8gUmVwbGFjZSBzZWxmLl9yZXN1bHRzIGF0b21pY2FsbHkuICAoVGhpcyBhc3NpZ25tZW50IGlzIHdoYXQgbWFrZXMgYGZpcnN0YFxuICAgIC8vIHN0YXkgdGhyb3VnaCBvbiB0aGUgbmV4dCBjeWNsZSwgc28gd2UndmUgd2FpdGVkIHVudGlsIGFmdGVyIHdlJ3ZlXG4gICAgLy8gY29tbWl0dGVkIHRvIHJlYWR5LWluZyB0aGUgbXVsdGlwbGV4ZXIuKVxuICAgIHNlbGYuX3Jlc3VsdHMgPSBuZXdSZXN1bHRzO1xuXG4gICAgLy8gT25jZSB0aGUgT2JzZXJ2ZU11bHRpcGxleGVyIGhhcyBwcm9jZXNzZWQgZXZlcnl0aGluZyB3ZSd2ZSBkb25lIGluIHRoaXNcbiAgICAvLyByb3VuZCwgbWFyayBhbGwgdGhlIHdyaXRlcyB3aGljaCBleGlzdGVkIGJlZm9yZSB0aGlzIGNhbGwgYXNcbiAgICAvLyBjb21tbWl0dGVkLiAoSWYgbmV3IHdyaXRlcyBoYXZlIHNob3duIHVwIGluIHRoZSBtZWFudGltZSwgdGhlcmUnbGxcbiAgICAvLyBhbHJlYWR5IGJlIGFub3RoZXIgX3BvbGxNb25nbyB0YXNrIHNjaGVkdWxlZC4pXG4gICAgc2VsZi5fbXVsdGlwbGV4ZXIub25GbHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICBfLmVhY2god3JpdGVzRm9yQ3ljbGUsIGZ1bmN0aW9uICh3KSB7XG4gICAgICAgIHcuY29tbWl0dGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuX3N0b3BwZWQgPSB0cnVlO1xuICAgIF8uZWFjaChzZWxmLl9zdG9wQ2FsbGJhY2tzLCBmdW5jdGlvbiAoYykgeyBjKCk7IH0pO1xuICAgIC8vIFJlbGVhc2UgYW55IHdyaXRlIGZlbmNlcyB0aGF0IGFyZSB3YWl0aW5nIG9uIHVzLlxuICAgIF8uZWFjaChzZWxmLl9wZW5kaW5nV3JpdGVzLCBmdW5jdGlvbiAodykge1xuICAgICAgdy5jb21taXR0ZWQoKTtcbiAgICB9KTtcbiAgICBQYWNrYWdlWydmYWN0cy1iYXNlJ10gJiYgUGFja2FnZVsnZmFjdHMtYmFzZSddLkZhY3RzLmluY3JlbWVudFNlcnZlckZhY3QoXG4gICAgICBcIm1vbmdvLWxpdmVkYXRhXCIsIFwib2JzZXJ2ZS1kcml2ZXJzLXBvbGxpbmdcIiwgLTEpO1xuICB9XG59KTtcbiIsImltcG9ydCB7IG9wbG9nVjJWMUNvbnZlcnRlciB9IGZyb20gXCIuL29wbG9nX3YyX2NvbnZlcnRlclwiO1xuXG52YXIgRnV0dXJlID0gTnBtLnJlcXVpcmUoJ2ZpYmVycy9mdXR1cmUnKTtcblxudmFyIFBIQVNFID0ge1xuICBRVUVSWUlORzogXCJRVUVSWUlOR1wiLFxuICBGRVRDSElORzogXCJGRVRDSElOR1wiLFxuICBTVEVBRFk6IFwiU1RFQURZXCJcbn07XG5cbi8vIEV4Y2VwdGlvbiB0aHJvd24gYnkgX25lZWRUb1BvbGxRdWVyeSB3aGljaCB1bnJvbGxzIHRoZSBzdGFjayB1cCB0byB0aGVcbi8vIGVuY2xvc2luZyBjYWxsIHRvIGZpbmlzaElmTmVlZFRvUG9sbFF1ZXJ5LlxudmFyIFN3aXRjaGVkVG9RdWVyeSA9IGZ1bmN0aW9uICgpIHt9O1xudmFyIGZpbmlzaElmTmVlZFRvUG9sbFF1ZXJ5ID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBTd2l0Y2hlZFRvUXVlcnkpKVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjdXJyZW50SWQgPSAwO1xuXG4vLyBPcGxvZ09ic2VydmVEcml2ZXIgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gUG9sbGluZ09ic2VydmVEcml2ZXIgd2hpY2ggZm9sbG93c1xuLy8gdGhlIE1vbmdvIG9wZXJhdGlvbiBsb2cgaW5zdGVhZCBvZiBqdXN0IHJlLXBvbGxpbmcgdGhlIHF1ZXJ5LiBJdCBvYmV5cyB0aGVcbi8vIHNhbWUgc2ltcGxlIGludGVyZmFjZTogY29uc3RydWN0aW5nIGl0IHN0YXJ0cyBzZW5kaW5nIG9ic2VydmVDaGFuZ2VzXG4vLyBjYWxsYmFja3MgKGFuZCBhIHJlYWR5KCkgaW52b2NhdGlvbikgdG8gdGhlIE9ic2VydmVNdWx0aXBsZXhlciwgYW5kIHlvdSBzdG9wXG4vLyBpdCBieSBjYWxsaW5nIHRoZSBzdG9wKCkgbWV0aG9kLlxuT3Bsb2dPYnNlcnZlRHJpdmVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLl91c2VzT3Bsb2cgPSB0cnVlOyAgLy8gdGVzdHMgbG9vayBhdCB0aGlzXG5cbiAgc2VsZi5faWQgPSBjdXJyZW50SWQ7XG4gIGN1cnJlbnRJZCsrO1xuXG4gIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uID0gb3B0aW9ucy5jdXJzb3JEZXNjcmlwdGlvbjtcbiAgc2VsZi5fbW9uZ29IYW5kbGUgPSBvcHRpb25zLm1vbmdvSGFuZGxlO1xuICBzZWxmLl9tdWx0aXBsZXhlciA9IG9wdGlvbnMubXVsdGlwbGV4ZXI7XG5cbiAgaWYgKG9wdGlvbnMub3JkZXJlZCkge1xuICAgIHRocm93IEVycm9yKFwiT3Bsb2dPYnNlcnZlRHJpdmVyIG9ubHkgc3VwcG9ydHMgdW5vcmRlcmVkIG9ic2VydmVDaGFuZ2VzXCIpO1xuICB9XG5cbiAgdmFyIHNvcnRlciA9IG9wdGlvbnMuc29ydGVyO1xuICAvLyBXZSBkb24ndCBzdXBwb3J0ICRuZWFyIGFuZCBvdGhlciBnZW8tcXVlcmllcyBzbyBpdCdzIE9LIHRvIGluaXRpYWxpemUgdGhlXG4gIC8vIGNvbXBhcmF0b3Igb25seSBvbmNlIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgdmFyIGNvbXBhcmF0b3IgPSBzb3J0ZXIgJiYgc29ydGVyLmdldENvbXBhcmF0b3IoKTtcblxuICBpZiAob3B0aW9ucy5jdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zLmxpbWl0KSB7XG4gICAgLy8gVGhlcmUgYXJlIHNldmVyYWwgcHJvcGVydGllcyBvcmRlcmVkIGRyaXZlciBpbXBsZW1lbnRzOlxuICAgIC8vIC0gX2xpbWl0IGlzIGEgcG9zaXRpdmUgbnVtYmVyXG4gICAgLy8gLSBfY29tcGFyYXRvciBpcyBhIGZ1bmN0aW9uLWNvbXBhcmF0b3IgYnkgd2hpY2ggdGhlIHF1ZXJ5IGlzIG9yZGVyZWRcbiAgICAvLyAtIF91bnB1Ymxpc2hlZEJ1ZmZlciBpcyBub24tbnVsbCBNaW4vTWF4IEhlYXAsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgdGhlIGVtcHR5IGJ1ZmZlciBpbiBTVEVBRFkgcGhhc2UgaW1wbGllcyB0aGF0IHRoZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgIGV2ZXJ5dGhpbmcgdGhhdCBtYXRjaGVzIHRoZSBxdWVyaWVzIHNlbGVjdG9yIGZpdHNcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICBpbnRvIHB1Ymxpc2hlZCBzZXQuXG4gICAgLy8gLSBfcHVibGlzaGVkIC0gTWF4IEhlYXAgKGFsc28gaW1wbGVtZW50cyBJZE1hcCBtZXRob2RzKVxuXG4gICAgdmFyIGhlYXBPcHRpb25zID0geyBJZE1hcDogTG9jYWxDb2xsZWN0aW9uLl9JZE1hcCB9O1xuICAgIHNlbGYuX2xpbWl0ID0gc2VsZi5fY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5saW1pdDtcbiAgICBzZWxmLl9jb21wYXJhdG9yID0gY29tcGFyYXRvcjtcbiAgICBzZWxmLl9zb3J0ZXIgPSBzb3J0ZXI7XG4gICAgc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIgPSBuZXcgTWluTWF4SGVhcChjb21wYXJhdG9yLCBoZWFwT3B0aW9ucyk7XG4gICAgLy8gV2UgbmVlZCBzb21ldGhpbmcgdGhhdCBjYW4gZmluZCBNYXggdmFsdWUgaW4gYWRkaXRpb24gdG8gSWRNYXAgaW50ZXJmYWNlXG4gICAgc2VsZi5fcHVibGlzaGVkID0gbmV3IE1heEhlYXAoY29tcGFyYXRvciwgaGVhcE9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX2xpbWl0ID0gMDtcbiAgICBzZWxmLl9jb21wYXJhdG9yID0gbnVsbDtcbiAgICBzZWxmLl9zb3J0ZXIgPSBudWxsO1xuICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyID0gbnVsbDtcbiAgICBzZWxmLl9wdWJsaXNoZWQgPSBuZXcgTG9jYWxDb2xsZWN0aW9uLl9JZE1hcDtcbiAgfVxuXG4gIC8vIEluZGljYXRlcyBpZiBpdCBpcyBzYWZlIHRvIGluc2VydCBhIG5ldyBkb2N1bWVudCBhdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgLy8gZm9yIHRoaXMgcXVlcnkuIGkuZS4gaXQgaXMga25vd24gdGhhdCB0aGVyZSBhcmUgbm8gZG9jdW1lbnRzIG1hdGNoaW5nIHRoZVxuICAvLyBzZWxlY3RvciB0aG9zZSBhcmUgbm90IGluIHB1Ymxpc2hlZCBvciBidWZmZXIuXG4gIHNlbGYuX3NhZmVBcHBlbmRUb0J1ZmZlciA9IGZhbHNlO1xuXG4gIHNlbGYuX3N0b3BwZWQgPSBmYWxzZTtcbiAgc2VsZi5fc3RvcEhhbmRsZXMgPSBbXTtcblxuICBQYWNrYWdlWydmYWN0cy1iYXNlJ10gJiYgUGFja2FnZVsnZmFjdHMtYmFzZSddLkZhY3RzLmluY3JlbWVudFNlcnZlckZhY3QoXG4gICAgXCJtb25nby1saXZlZGF0YVwiLCBcIm9ic2VydmUtZHJpdmVycy1vcGxvZ1wiLCAxKTtcblxuICBzZWxmLl9yZWdpc3RlclBoYXNlQ2hhbmdlKFBIQVNFLlFVRVJZSU5HKTtcblxuICBzZWxmLl9tYXRjaGVyID0gb3B0aW9ucy5tYXRjaGVyO1xuICAvLyB3ZSBhcmUgbm93IHVzaW5nIHByb2plY3Rpb24sIG5vdCBmaWVsZHMgaW4gdGhlIGN1cnNvciBkZXNjcmlwdGlvbiBldmVuIGlmIHlvdSBwYXNzIHtmaWVsZHN9XG4gIC8vIGluIHRoZSBjdXJzb3IgY29uc3RydWN0aW9uXG4gIHZhciBwcm9qZWN0aW9uID0gc2VsZi5fY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5maWVsZHMgfHwgc2VsZi5fY3Vyc29yRGVzY3JpcHRpb24ub3B0aW9ucy5wcm9qZWN0aW9uIHx8IHt9O1xuICBzZWxmLl9wcm9qZWN0aW9uRm4gPSBMb2NhbENvbGxlY3Rpb24uX2NvbXBpbGVQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAvLyBQcm9qZWN0aW9uIGZ1bmN0aW9uLCByZXN1bHQgb2YgY29tYmluaW5nIGltcG9ydGFudCBmaWVsZHMgZm9yIHNlbGVjdG9yIGFuZFxuICAvLyBleGlzdGluZyBmaWVsZHMgcHJvamVjdGlvblxuICBzZWxmLl9zaGFyZWRQcm9qZWN0aW9uID0gc2VsZi5fbWF0Y2hlci5jb21iaW5lSW50b1Byb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIGlmIChzb3J0ZXIpXG4gICAgc2VsZi5fc2hhcmVkUHJvamVjdGlvbiA9IHNvcnRlci5jb21iaW5lSW50b1Byb2plY3Rpb24oc2VsZi5fc2hhcmVkUHJvamVjdGlvbik7XG4gIHNlbGYuX3NoYXJlZFByb2plY3Rpb25GbiA9IExvY2FsQ29sbGVjdGlvbi5fY29tcGlsZVByb2plY3Rpb24oXG4gICAgc2VsZi5fc2hhcmVkUHJvamVjdGlvbik7XG5cbiAgc2VsZi5fbmVlZFRvRmV0Y2ggPSBuZXcgTG9jYWxDb2xsZWN0aW9uLl9JZE1hcDtcbiAgc2VsZi5fY3VycmVudGx5RmV0Y2hpbmcgPSBudWxsO1xuICBzZWxmLl9mZXRjaEdlbmVyYXRpb24gPSAwO1xuXG4gIHNlbGYuX3JlcXVlcnlXaGVuRG9uZVRoaXNRdWVyeSA9IGZhbHNlO1xuICBzZWxmLl93cml0ZXNUb0NvbW1pdFdoZW5XZVJlYWNoU3RlYWR5ID0gW107XG5cbiAgLy8gSWYgdGhlIG9wbG9nIGhhbmRsZSB0ZWxscyB1cyB0aGF0IGl0IHNraXBwZWQgc29tZSBlbnRyaWVzIChiZWNhdXNlIGl0IGdvdFxuICAvLyBiZWhpbmQsIHNheSksIHJlLXBvbGwuXG4gIHNlbGYuX3N0b3BIYW5kbGVzLnB1c2goc2VsZi5fbW9uZ29IYW5kbGUuX29wbG9nSGFuZGxlLm9uU2tpcHBlZEVudHJpZXMoXG4gICAgZmluaXNoSWZOZWVkVG9Qb2xsUXVlcnkoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fbmVlZFRvUG9sbFF1ZXJ5KCk7XG4gICAgfSlcbiAgKSk7XG5cbiAgZm9yRWFjaFRyaWdnZXIoc2VsZi5fY3Vyc29yRGVzY3JpcHRpb24sIGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgc2VsZi5fc3RvcEhhbmRsZXMucHVzaChzZWxmLl9tb25nb0hhbmRsZS5fb3Bsb2dIYW5kbGUub25PcGxvZ0VudHJ5KFxuICAgICAgdHJpZ2dlciwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmaW5pc2hJZk5lZWRUb1BvbGxRdWVyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9wID0gbm90aWZpY2F0aW9uLm9wO1xuICAgICAgICAgIGlmIChub3RpZmljYXRpb24uZHJvcENvbGxlY3Rpb24gfHwgbm90aWZpY2F0aW9uLmRyb3BEYXRhYmFzZSkge1xuICAgICAgICAgICAgLy8gTm90ZTogdGhpcyBjYWxsIGlzIG5vdCBhbGxvd2VkIHRvIGJsb2NrIG9uIGFueXRoaW5nIChlc3BlY2lhbGx5XG4gICAgICAgICAgICAvLyBvbiB3YWl0aW5nIGZvciBvcGxvZyBlbnRyaWVzIHRvIGNhdGNoIHVwKSBiZWNhdXNlIHRoYXQgd2lsbCBibG9ja1xuICAgICAgICAgICAgLy8gb25PcGxvZ0VudHJ5IVxuICAgICAgICAgICAgc2VsZi5fbmVlZFRvUG9sbFF1ZXJ5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFsbCBvdGhlciBvcGVyYXRvcnMgc2hvdWxkIGJlIGhhbmRsZWQgZGVwZW5kaW5nIG9uIHBoYXNlXG4gICAgICAgICAgICBpZiAoc2VsZi5fcGhhc2UgPT09IFBIQVNFLlFVRVJZSU5HKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2hhbmRsZU9wbG9nRW50cnlRdWVyeWluZyhvcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVPcGxvZ0VudHJ5U3RlYWR5T3JGZXRjaGluZyhvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgKSk7XG4gIH0pO1xuXG4gIC8vIFhYWCBvcmRlcmluZyB3LnIudC4gZXZlcnl0aGluZyBlbHNlP1xuICBzZWxmLl9zdG9wSGFuZGxlcy5wdXNoKGxpc3RlbkFsbChcbiAgICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbiwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgLy8gSWYgd2UncmUgbm90IGluIGEgcHJlLWZpcmUgd3JpdGUgZmVuY2UsIHdlIGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcuXG4gICAgICB2YXIgZmVuY2UgPSBERFBTZXJ2ZXIuX0N1cnJlbnRXcml0ZUZlbmNlLmdldCgpO1xuICAgICAgaWYgKCFmZW5jZSB8fCBmZW5jZS5maXJlZClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBpZiAoZmVuY2UuX29wbG9nT2JzZXJ2ZURyaXZlcnMpIHtcbiAgICAgICAgZmVuY2UuX29wbG9nT2JzZXJ2ZURyaXZlcnNbc2VsZi5faWRdID0gc2VsZjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmZW5jZS5fb3Bsb2dPYnNlcnZlRHJpdmVycyA9IHt9O1xuICAgICAgZmVuY2UuX29wbG9nT2JzZXJ2ZURyaXZlcnNbc2VsZi5faWRdID0gc2VsZjtcblxuICAgICAgZmVuY2Uub25CZWZvcmVGaXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRyaXZlcnMgPSBmZW5jZS5fb3Bsb2dPYnNlcnZlRHJpdmVycztcbiAgICAgICAgZGVsZXRlIGZlbmNlLl9vcGxvZ09ic2VydmVEcml2ZXJzO1xuXG4gICAgICAgIC8vIFRoaXMgZmVuY2UgY2Fubm90IGZpcmUgdW50aWwgd2UndmUgY2F1Z2h0IHVwIHRvIFwidGhpcyBwb2ludFwiIGluIHRoZVxuICAgICAgICAvLyBvcGxvZywgYW5kIGFsbCBvYnNlcnZlcnMgbWFkZSBpdCBiYWNrIHRvIHRoZSBzdGVhZHkgc3RhdGUuXG4gICAgICAgIHNlbGYuX21vbmdvSGFuZGxlLl9vcGxvZ0hhbmRsZS53YWl0VW50aWxDYXVnaHRVcCgpO1xuXG4gICAgICAgIF8uZWFjaChkcml2ZXJzLCBmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgaWYgKGRyaXZlci5fc3RvcHBlZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgIHZhciB3cml0ZSA9IGZlbmNlLmJlZ2luV3JpdGUoKTtcbiAgICAgICAgICBpZiAoZHJpdmVyLl9waGFzZSA9PT0gUEhBU0UuU1RFQURZKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbGwgb2YgdGhlIGNhbGxiYWNrcyBoYXZlIG1hZGUgaXQgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxleGVyIGFuZCBiZWVuIGRlbGl2ZXJlZCB0byBPYnNlcnZlSGFuZGxlcyBiZWZvcmUgY29tbWl0dGluZ1xuICAgICAgICAgICAgLy8gd3JpdGVzLlxuICAgICAgICAgICAgZHJpdmVyLl9tdWx0aXBsZXhlci5vbkZsdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd3JpdGUuY29tbWl0dGVkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJpdmVyLl93cml0ZXNUb0NvbW1pdFdoZW5XZVJlYWNoU3RlYWR5LnB1c2god3JpdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICkpO1xuXG4gIC8vIFdoZW4gTW9uZ28gZmFpbHMgb3Zlciwgd2UgbmVlZCB0byByZXBvbGwgdGhlIHF1ZXJ5LCBpbiBjYXNlIHdlIHByb2Nlc3NlZCBhblxuICAvLyBvcGxvZyBlbnRyeSB0aGF0IGdvdCByb2xsZWQgYmFjay5cbiAgc2VsZi5fc3RvcEhhbmRsZXMucHVzaChzZWxmLl9tb25nb0hhbmRsZS5fb25GYWlsb3ZlcihmaW5pc2hJZk5lZWRUb1BvbGxRdWVyeShcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9uZWVkVG9Qb2xsUXVlcnkoKTtcbiAgICB9KSkpO1xuXG4gIC8vIEdpdmUgX29ic2VydmVDaGFuZ2VzIGEgY2hhbmNlIHRvIGFkZCB0aGUgbmV3IE9ic2VydmVIYW5kbGUgdG8gb3VyXG4gIC8vIG11bHRpcGxleGVyLCBzbyB0aGF0IHRoZSBhZGRlZCBjYWxscyBnZXQgc3RyZWFtZWQuXG4gIE1ldGVvci5kZWZlcihmaW5pc2hJZk5lZWRUb1BvbGxRdWVyeShmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fcnVuSW5pdGlhbFF1ZXJ5KCk7XG4gIH0pKTtcbn07XG5cbl8uZXh0ZW5kKE9wbG9nT2JzZXJ2ZURyaXZlci5wcm90b3R5cGUsIHtcbiAgX2FkZFB1Ymxpc2hlZDogZnVuY3Rpb24gKGlkLCBkb2MpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpZWxkcyA9IF8uY2xvbmUoZG9jKTtcbiAgICAgIGRlbGV0ZSBmaWVsZHMuX2lkO1xuICAgICAgc2VsZi5fcHVibGlzaGVkLnNldChpZCwgc2VsZi5fc2hhcmVkUHJvamVjdGlvbkZuKGRvYykpO1xuICAgICAgc2VsZi5fbXVsdGlwbGV4ZXIuYWRkZWQoaWQsIHNlbGYuX3Byb2plY3Rpb25GbihmaWVsZHMpKTtcblxuICAgICAgLy8gQWZ0ZXIgYWRkaW5nIHRoaXMgZG9jdW1lbnQsIHRoZSBwdWJsaXNoZWQgc2V0IG1pZ2h0IGJlIG92ZXJmbG93ZWRcbiAgICAgIC8vIChleGNlZWRpbmcgY2FwYWNpdHkgc3BlY2lmaWVkIGJ5IGxpbWl0KS4gSWYgc28sIHB1c2ggdGhlIG1heGltdW1cbiAgICAgIC8vIGVsZW1lbnQgdG8gdGhlIGJ1ZmZlciwgd2UgbWlnaHQgd2FudCB0byBzYXZlIGl0IGluIG1lbW9yeSB0byByZWR1Y2UgdGhlXG4gICAgICAvLyBhbW91bnQgb2YgTW9uZ28gbG9va3VwcyBpbiB0aGUgZnV0dXJlLlxuICAgICAgaWYgKHNlbGYuX2xpbWl0ICYmIHNlbGYuX3B1Ymxpc2hlZC5zaXplKCkgPiBzZWxmLl9saW1pdCkge1xuICAgICAgICAvLyBYWFggaW4gdGhlb3J5IHRoZSBzaXplIG9mIHB1Ymxpc2hlZCBpcyBubyBtb3JlIHRoYW4gbGltaXQrMVxuICAgICAgICBpZiAoc2VsZi5fcHVibGlzaGVkLnNpemUoKSAhPT0gc2VsZi5fbGltaXQgKyAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWZ0ZXIgYWRkaW5nIHRvIHB1Ymxpc2hlZCwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5fcHVibGlzaGVkLnNpemUoKSAtIHNlbGYuX2xpbWl0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGRvY3VtZW50cyBhcmUgb3ZlcmZsb3dpbmcgdGhlIHNldFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvdmVyZmxvd2luZ0RvY0lkID0gc2VsZi5fcHVibGlzaGVkLm1heEVsZW1lbnRJZCgpO1xuICAgICAgICB2YXIgb3ZlcmZsb3dpbmdEb2MgPSBzZWxmLl9wdWJsaXNoZWQuZ2V0KG92ZXJmbG93aW5nRG9jSWQpO1xuXG4gICAgICAgIGlmIChFSlNPTi5lcXVhbHMob3ZlcmZsb3dpbmdEb2NJZCwgaWQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRvY3VtZW50IGp1c3QgYWRkZWQgaXMgb3ZlcmZsb3dpbmcgdGhlIHB1Ymxpc2hlZCBzZXRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLl9wdWJsaXNoZWQucmVtb3ZlKG92ZXJmbG93aW5nRG9jSWQpO1xuICAgICAgICBzZWxmLl9tdWx0aXBsZXhlci5yZW1vdmVkKG92ZXJmbG93aW5nRG9jSWQpO1xuICAgICAgICBzZWxmLl9hZGRCdWZmZXJlZChvdmVyZmxvd2luZ0RvY0lkLCBvdmVyZmxvd2luZ0RvYyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIF9yZW1vdmVQdWJsaXNoZWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9wdWJsaXNoZWQucmVtb3ZlKGlkKTtcbiAgICAgIHNlbGYuX211bHRpcGxleGVyLnJlbW92ZWQoaWQpO1xuICAgICAgaWYgKCEgc2VsZi5fbGltaXQgfHwgc2VsZi5fcHVibGlzaGVkLnNpemUoKSA9PT0gc2VsZi5fbGltaXQpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgaWYgKHNlbGYuX3B1Ymxpc2hlZC5zaXplKCkgPiBzZWxmLl9saW1pdClcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJzZWxmLl9wdWJsaXNoZWQgZ290IHRvbyBiaWdcIik7XG5cbiAgICAgIC8vIE9LLCB3ZSBhcmUgcHVibGlzaGluZyBsZXNzIHRoYW4gdGhlIGxpbWl0LiBNYXliZSB3ZSBzaG91bGQgbG9vayBpbiB0aGVcbiAgICAgIC8vIGJ1ZmZlciB0byBmaW5kIHRoZSBuZXh0IGVsZW1lbnQgcGFzdCB3aGF0IHdlIHdlcmUgcHVibGlzaGluZyBiZWZvcmUuXG5cbiAgICAgIGlmICghc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIuZW1wdHkoKSkge1xuICAgICAgICAvLyBUaGVyZSdzIHNvbWV0aGluZyBpbiB0aGUgYnVmZmVyOyBtb3ZlIHRoZSBmaXJzdCB0aGluZyBpbiBpdCB0b1xuICAgICAgICAvLyBfcHVibGlzaGVkLlxuICAgICAgICB2YXIgbmV3RG9jSWQgPSBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5taW5FbGVtZW50SWQoKTtcbiAgICAgICAgdmFyIG5ld0RvYyA9IHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmdldChuZXdEb2NJZCk7XG4gICAgICAgIHNlbGYuX3JlbW92ZUJ1ZmZlcmVkKG5ld0RvY0lkKTtcbiAgICAgICAgc2VsZi5fYWRkUHVibGlzaGVkKG5ld0RvY0lkLCBuZXdEb2MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZXJlJ3Mgbm90aGluZyBpbiB0aGUgYnVmZmVyLiAgVGhpcyBjb3VsZCBtZWFuIG9uZSBvZiBhIGZldyB0aGluZ3MuXG5cbiAgICAgIC8vIChhKSBXZSBjb3VsZCBiZSBpbiB0aGUgbWlkZGxlIG9mIHJlLXJ1bm5pbmcgdGhlIHF1ZXJ5IChzcGVjaWZpY2FsbHksIHdlXG4gICAgICAvLyBjb3VsZCBiZSBpbiBfcHVibGlzaE5ld1Jlc3VsdHMpLiBJbiB0aGF0IGNhc2UsIF91bnB1Ymxpc2hlZEJ1ZmZlciBpc1xuICAgICAgLy8gZW1wdHkgYmVjYXVzZSB3ZSBjbGVhciBpdCBhdCB0aGUgYmVnaW5uaW5nIG9mIF9wdWJsaXNoTmV3UmVzdWx0cy4gSW5cbiAgICAgIC8vIHRoaXMgY2FzZSwgb3VyIGNhbGxlciBhbHJlYWR5IGtub3dzIHRoZSBlbnRpcmUgYW5zd2VyIHRvIHRoZSBxdWVyeSBhbmRcbiAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcgZmFuY3kgaGVyZS4gIEp1c3QgcmV0dXJuLlxuICAgICAgaWYgKHNlbGYuX3BoYXNlID09PSBQSEFTRS5RVUVSWUlORylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAvLyAoYikgV2UncmUgcHJldHR5IGNvbmZpZGVudCB0aGF0IHRoZSB1bmlvbiBvZiBfcHVibGlzaGVkIGFuZFxuICAgICAgLy8gX3VucHVibGlzaGVkQnVmZmVyIGNvbnRhaW4gYWxsIGRvY3VtZW50cyB0aGF0IG1hdGNoIHNlbGVjdG9yLiBCZWNhdXNlXG4gICAgICAvLyBfdW5wdWJsaXNoZWRCdWZmZXIgaXMgZW1wdHksIHRoYXQgbWVhbnMgd2UncmUgY29uZmlkZW50IHRoYXQgX3B1Ymxpc2hlZFxuICAgICAgLy8gY29udGFpbnMgYWxsIGRvY3VtZW50cyB0aGF0IG1hdGNoIHNlbGVjdG9yLiBTbyB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8uXG4gICAgICBpZiAoc2VsZi5fc2FmZUFwcGVuZFRvQnVmZmVyKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIC8vIChjKSBNYXliZSB0aGVyZSBhcmUgb3RoZXIgZG9jdW1lbnRzIG91dCB0aGVyZSB0aGF0IHNob3VsZCBiZSBpbiBvdXJcbiAgICAgIC8vIGJ1ZmZlci4gQnV0IGluIHRoYXQgY2FzZSwgd2hlbiB3ZSBlbXB0aWVkIF91bnB1Ymxpc2hlZEJ1ZmZlciBpblxuICAgICAgLy8gX3JlbW92ZUJ1ZmZlcmVkLCB3ZSBzaG91bGQgaGF2ZSBjYWxsZWQgX25lZWRUb1BvbGxRdWVyeSwgd2hpY2ggd2lsbFxuICAgICAgLy8gZWl0aGVyIHB1dCBzb21ldGhpbmcgaW4gX3VucHVibGlzaGVkQnVmZmVyIG9yIHNldCBfc2FmZUFwcGVuZFRvQnVmZmVyXG4gICAgICAvLyAob3IgYm90aCksIGFuZCBpdCB3aWxsIHB1dCB1cyBpbiBRVUVSWUlORyBmb3IgdGhhdCB3aG9sZSB0aW1lLiBTbyBpblxuICAgICAgLy8gZmFjdCwgd2Ugc2hvdWxkbid0IGJlIGFibGUgdG8gZ2V0IGhlcmUuXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkJ1ZmZlciBpbmV4cGxpY2FibHkgZW1wdHlcIik7XG4gICAgfSk7XG4gIH0sXG4gIF9jaGFuZ2VQdWJsaXNoZWQ6IGZ1bmN0aW9uIChpZCwgb2xkRG9jLCBuZXdEb2MpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fcHVibGlzaGVkLnNldChpZCwgc2VsZi5fc2hhcmVkUHJvamVjdGlvbkZuKG5ld0RvYykpO1xuICAgICAgdmFyIHByb2plY3RlZE5ldyA9IHNlbGYuX3Byb2plY3Rpb25GbihuZXdEb2MpO1xuICAgICAgdmFyIHByb2plY3RlZE9sZCA9IHNlbGYuX3Byb2plY3Rpb25GbihvbGREb2MpO1xuICAgICAgdmFyIGNoYW5nZWQgPSBEaWZmU2VxdWVuY2UubWFrZUNoYW5nZWRGaWVsZHMoXG4gICAgICAgIHByb2plY3RlZE5ldywgcHJvamVjdGVkT2xkKTtcbiAgICAgIGlmICghXy5pc0VtcHR5KGNoYW5nZWQpKVxuICAgICAgICBzZWxmLl9tdWx0aXBsZXhlci5jaGFuZ2VkKGlkLCBjaGFuZ2VkKTtcbiAgICB9KTtcbiAgfSxcbiAgX2FkZEJ1ZmZlcmVkOiBmdW5jdGlvbiAoaWQsIGRvYykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zZXQoaWQsIHNlbGYuX3NoYXJlZFByb2plY3Rpb25Gbihkb2MpKTtcblxuICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIG92ZXJmbG93aW5nIHRoZSBidWZmZXIsIHdlIGp1c3QgcmVtb3ZlIGl0IGZyb20gY2FjaGVcbiAgICAgIGlmIChzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zaXplKCkgPiBzZWxmLl9saW1pdCkge1xuICAgICAgICB2YXIgbWF4QnVmZmVyZWRJZCA9IHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLm1heEVsZW1lbnRJZCgpO1xuXG4gICAgICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnJlbW92ZShtYXhCdWZmZXJlZElkKTtcblxuICAgICAgICAvLyBTaW5jZSBzb21ldGhpbmcgbWF0Y2hpbmcgaXMgcmVtb3ZlZCBmcm9tIGNhY2hlIChib3RoIHB1Ymxpc2hlZCBzZXQgYW5kXG4gICAgICAgIC8vIGJ1ZmZlciksIHNldCBmbGFnIHRvIGZhbHNlXG4gICAgICAgIHNlbGYuX3NhZmVBcHBlbmRUb0J1ZmZlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvLyBJcyBjYWxsZWQgZWl0aGVyIHRvIHJlbW92ZSB0aGUgZG9jIGNvbXBsZXRlbHkgZnJvbSBtYXRjaGluZyBzZXQgb3IgdG8gbW92ZVxuICAvLyBpdCB0byB0aGUgcHVibGlzaGVkIHNldCBsYXRlci5cbiAgX3JlbW92ZUJ1ZmZlcmVkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIucmVtb3ZlKGlkKTtcbiAgICAgIC8vIFRvIGtlZXAgdGhlIGNvbnRyYWN0IFwiYnVmZmVyIGlzIG5ldmVyIGVtcHR5IGluIFNURUFEWSBwaGFzZSB1bmxlc3MgdGhlXG4gICAgICAvLyBldmVyeXRoaW5nIG1hdGNoaW5nIGZpdHMgaW50byBwdWJsaXNoZWRcIiB0cnVlLCB3ZSBwb2xsIGV2ZXJ5dGhpbmcgYXNcbiAgICAgIC8vIHNvb24gYXMgd2Ugc2VlIHRoZSBidWZmZXIgYmVjb21pbmcgZW1wdHkuXG4gICAgICBpZiAoISBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zaXplKCkgJiYgISBzZWxmLl9zYWZlQXBwZW5kVG9CdWZmZXIpXG4gICAgICAgIHNlbGYuX25lZWRUb1BvbGxRdWVyeSgpO1xuICAgIH0pO1xuICB9LFxuICAvLyBDYWxsZWQgd2hlbiBhIGRvY3VtZW50IGhhcyBqb2luZWQgdGhlIFwiTWF0Y2hpbmdcIiByZXN1bHRzIHNldC5cbiAgLy8gVGFrZXMgcmVzcG9uc2liaWxpdHkgb2Yga2VlcGluZyBfdW5wdWJsaXNoZWRCdWZmZXIgaW4gc3luYyB3aXRoIF9wdWJsaXNoZWRcbiAgLy8gYW5kIHRoZSBlZmZlY3Qgb2YgbGltaXQgZW5mb3JjZWQuXG4gIF9hZGRNYXRjaGluZzogZnVuY3Rpb24gKGRvYykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWQgPSBkb2MuX2lkO1xuICAgICAgaWYgKHNlbGYuX3B1Ymxpc2hlZC5oYXMoaWQpKVxuICAgICAgICB0aHJvdyBFcnJvcihcInRyaWVkIHRvIGFkZCBzb21ldGhpbmcgYWxyZWFkeSBwdWJsaXNoZWQgXCIgKyBpZCk7XG4gICAgICBpZiAoc2VsZi5fbGltaXQgJiYgc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIuaGFzKGlkKSlcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJ0cmllZCB0byBhZGQgc29tZXRoaW5nIGFscmVhZHkgZXhpc3RlZCBpbiBidWZmZXIgXCIgKyBpZCk7XG5cbiAgICAgIHZhciBsaW1pdCA9IHNlbGYuX2xpbWl0O1xuICAgICAgdmFyIGNvbXBhcmF0b3IgPSBzZWxmLl9jb21wYXJhdG9yO1xuICAgICAgdmFyIG1heFB1Ymxpc2hlZCA9IChsaW1pdCAmJiBzZWxmLl9wdWJsaXNoZWQuc2l6ZSgpID4gMCkgP1xuICAgICAgICBzZWxmLl9wdWJsaXNoZWQuZ2V0KHNlbGYuX3B1Ymxpc2hlZC5tYXhFbGVtZW50SWQoKSkgOiBudWxsO1xuICAgICAgdmFyIG1heEJ1ZmZlcmVkID0gKGxpbWl0ICYmIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnNpemUoKSA+IDApXG4gICAgICAgID8gc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIuZ2V0KHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLm1heEVsZW1lbnRJZCgpKVxuICAgICAgICA6IG51bGw7XG4gICAgICAvLyBUaGUgcXVlcnkgaXMgdW5saW1pdGVkIG9yIGRpZG4ndCBwdWJsaXNoIGVub3VnaCBkb2N1bWVudHMgeWV0IG9yIHRoZVxuICAgICAgLy8gbmV3IGRvY3VtZW50IHdvdWxkIGZpdCBpbnRvIHB1Ymxpc2hlZCBzZXQgcHVzaGluZyB0aGUgbWF4aW11bSBlbGVtZW50XG4gICAgICAvLyBvdXQsIHRoZW4gd2UgbmVlZCB0byBwdWJsaXNoIHRoZSBkb2MuXG4gICAgICB2YXIgdG9QdWJsaXNoID0gISBsaW1pdCB8fCBzZWxmLl9wdWJsaXNoZWQuc2l6ZSgpIDwgbGltaXQgfHxcbiAgICAgICAgY29tcGFyYXRvcihkb2MsIG1heFB1Ymxpc2hlZCkgPCAwO1xuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgbWlnaHQgbmVlZCB0byBidWZmZXIgaXQgKG9ubHkgaW4gY2FzZSBvZiBsaW1pdGVkIHF1ZXJ5KS5cbiAgICAgIC8vIEJ1ZmZlcmluZyBpcyBhbGxvd2VkIGlmIHRoZSBidWZmZXIgaXMgbm90IGZpbGxlZCB1cCB5ZXQgYW5kIGFsbFxuICAgICAgLy8gbWF0Y2hpbmcgZG9jcyBhcmUgZWl0aGVyIGluIHRoZSBwdWJsaXNoZWQgc2V0IG9yIGluIHRoZSBidWZmZXIuXG4gICAgICB2YXIgY2FuQXBwZW5kVG9CdWZmZXIgPSAhdG9QdWJsaXNoICYmIHNlbGYuX3NhZmVBcHBlbmRUb0J1ZmZlciAmJlxuICAgICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zaXplKCkgPCBsaW1pdDtcblxuICAgICAgLy8gT3IgaWYgaXQgaXMgc21hbGwgZW5vdWdoIHRvIGJlIHNhZmVseSBpbnNlcnRlZCB0byB0aGUgbWlkZGxlIG9yIHRoZVxuICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBidWZmZXIuXG4gICAgICB2YXIgY2FuSW5zZXJ0SW50b0J1ZmZlciA9ICF0b1B1Ymxpc2ggJiYgbWF4QnVmZmVyZWQgJiZcbiAgICAgICAgY29tcGFyYXRvcihkb2MsIG1heEJ1ZmZlcmVkKSA8PSAwO1xuXG4gICAgICB2YXIgdG9CdWZmZXIgPSBjYW5BcHBlbmRUb0J1ZmZlciB8fCBjYW5JbnNlcnRJbnRvQnVmZmVyO1xuXG4gICAgICBpZiAodG9QdWJsaXNoKSB7XG4gICAgICAgIHNlbGYuX2FkZFB1Ymxpc2hlZChpZCwgZG9jKTtcbiAgICAgIH0gZWxzZSBpZiAodG9CdWZmZXIpIHtcbiAgICAgICAgc2VsZi5fYWRkQnVmZmVyZWQoaWQsIGRvYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkcm9wcGluZyBpdCBhbmQgbm90IHNhdmluZyB0byB0aGUgY2FjaGVcbiAgICAgICAgc2VsZi5fc2FmZUFwcGVuZFRvQnVmZmVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8vIENhbGxlZCB3aGVuIGEgZG9jdW1lbnQgbGVhdmVzIHRoZSBcIk1hdGNoaW5nXCIgcmVzdWx0cyBzZXQuXG4gIC8vIFRha2VzIHJlc3BvbnNpYmlsaXR5IG9mIGtlZXBpbmcgX3VucHVibGlzaGVkQnVmZmVyIGluIHN5bmMgd2l0aCBfcHVibGlzaGVkXG4gIC8vIGFuZCB0aGUgZWZmZWN0IG9mIGxpbWl0IGVuZm9yY2VkLlxuICBfcmVtb3ZlTWF0Y2hpbmc6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISBzZWxmLl9wdWJsaXNoZWQuaGFzKGlkKSAmJiAhIHNlbGYuX2xpbWl0KVxuICAgICAgICB0aHJvdyBFcnJvcihcInRyaWVkIHRvIHJlbW92ZSBzb21ldGhpbmcgbWF0Y2hpbmcgYnV0IG5vdCBjYWNoZWQgXCIgKyBpZCk7XG5cbiAgICAgIGlmIChzZWxmLl9wdWJsaXNoZWQuaGFzKGlkKSkge1xuICAgICAgICBzZWxmLl9yZW1vdmVQdWJsaXNoZWQoaWQpO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5oYXMoaWQpKSB7XG4gICAgICAgIHNlbGYuX3JlbW92ZUJ1ZmZlcmVkKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgX2hhbmRsZURvYzogZnVuY3Rpb24gKGlkLCBuZXdEb2MpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1hdGNoZXNOb3cgPSBuZXdEb2MgJiYgc2VsZi5fbWF0Y2hlci5kb2N1bWVudE1hdGNoZXMobmV3RG9jKS5yZXN1bHQ7XG5cbiAgICAgIHZhciBwdWJsaXNoZWRCZWZvcmUgPSBzZWxmLl9wdWJsaXNoZWQuaGFzKGlkKTtcbiAgICAgIHZhciBidWZmZXJlZEJlZm9yZSA9IHNlbGYuX2xpbWl0ICYmIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmhhcyhpZCk7XG4gICAgICB2YXIgY2FjaGVkQmVmb3JlID0gcHVibGlzaGVkQmVmb3JlIHx8IGJ1ZmZlcmVkQmVmb3JlO1xuXG4gICAgICBpZiAobWF0Y2hlc05vdyAmJiAhY2FjaGVkQmVmb3JlKSB7XG4gICAgICAgIHNlbGYuX2FkZE1hdGNoaW5nKG5ld0RvYyk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlZEJlZm9yZSAmJiAhbWF0Y2hlc05vdykge1xuICAgICAgICBzZWxmLl9yZW1vdmVNYXRjaGluZyhpZCk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlZEJlZm9yZSAmJiBtYXRjaGVzTm93KSB7XG4gICAgICAgIHZhciBvbGREb2MgPSBzZWxmLl9wdWJsaXNoZWQuZ2V0KGlkKTtcbiAgICAgICAgdmFyIGNvbXBhcmF0b3IgPSBzZWxmLl9jb21wYXJhdG9yO1xuICAgICAgICB2YXIgbWluQnVmZmVyZWQgPSBzZWxmLl9saW1pdCAmJiBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zaXplKCkgJiZcbiAgICAgICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5nZXQoc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIubWluRWxlbWVudElkKCkpO1xuICAgICAgICB2YXIgbWF4QnVmZmVyZWQ7XG5cbiAgICAgICAgaWYgKHB1Ymxpc2hlZEJlZm9yZSkge1xuICAgICAgICAgIC8vIFVubGltaXRlZCBjYXNlIHdoZXJlIHRoZSBkb2N1bWVudCBzdGF5cyBpbiBwdWJsaXNoZWQgb25jZSBpdFxuICAgICAgICAgIC8vIG1hdGNoZXMgb3IgdGhlIGNhc2Ugd2hlbiB3ZSBkb24ndCBoYXZlIGVub3VnaCBtYXRjaGluZyBkb2NzIHRvXG4gICAgICAgICAgLy8gcHVibGlzaCBvciB0aGUgY2hhbmdlZCBidXQgbWF0Y2hpbmcgZG9jIHdpbGwgc3RheSBpbiBwdWJsaXNoZWRcbiAgICAgICAgICAvLyBhbnl3YXlzLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gWFhYOiBXZSByZWx5IG9uIHRoZSBlbXB0aW5lc3Mgb2YgYnVmZmVyLiBCZSBzdXJlIHRvIG1haW50YWluIHRoZVxuICAgICAgICAgIC8vIGZhY3QgdGhhdCBidWZmZXIgY2FuJ3QgYmUgZW1wdHkgaWYgdGhlcmUgYXJlIG1hdGNoaW5nIGRvY3VtZW50cyBub3RcbiAgICAgICAgICAvLyBwdWJsaXNoZWQuIE5vdGFibHksIHdlIGRvbid0IHdhbnQgdG8gc2NoZWR1bGUgcmVwb2xsIGFuZCBjb250aW51ZVxuICAgICAgICAgIC8vIHJlbHlpbmcgb24gdGhpcyBwcm9wZXJ0eS5cbiAgICAgICAgICB2YXIgc3RheXNJblB1Ymxpc2hlZCA9ICEgc2VsZi5fbGltaXQgfHxcbiAgICAgICAgICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnNpemUoKSA9PT0gMCB8fFxuICAgICAgICAgICAgY29tcGFyYXRvcihuZXdEb2MsIG1pbkJ1ZmZlcmVkKSA8PSAwO1xuXG4gICAgICAgICAgaWYgKHN0YXlzSW5QdWJsaXNoZWQpIHtcbiAgICAgICAgICAgIHNlbGYuX2NoYW5nZVB1Ymxpc2hlZChpZCwgb2xkRG9jLCBuZXdEb2MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZnRlciB0aGUgY2hhbmdlIGRvYyBkb2Vzbid0IHN0YXkgaW4gdGhlIHB1Ymxpc2hlZCwgcmVtb3ZlIGl0XG4gICAgICAgICAgICBzZWxmLl9yZW1vdmVQdWJsaXNoZWQoaWQpO1xuICAgICAgICAgICAgLy8gYnV0IGl0IGNhbiBtb3ZlIGludG8gYnVmZmVyZWQgbm93LCBjaGVjayBpdFxuICAgICAgICAgICAgbWF4QnVmZmVyZWQgPSBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5nZXQoXG4gICAgICAgICAgICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLm1heEVsZW1lbnRJZCgpKTtcblxuICAgICAgICAgICAgdmFyIHRvQnVmZmVyID0gc2VsZi5fc2FmZUFwcGVuZFRvQnVmZmVyIHx8XG4gICAgICAgICAgICAgICAgICAobWF4QnVmZmVyZWQgJiYgY29tcGFyYXRvcihuZXdEb2MsIG1heEJ1ZmZlcmVkKSA8PSAwKTtcblxuICAgICAgICAgICAgaWYgKHRvQnVmZmVyKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2FkZEJ1ZmZlcmVkKGlkLCBuZXdEb2MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhyb3cgYXdheSBmcm9tIGJvdGggcHVibGlzaGVkIHNldCBhbmQgYnVmZmVyXG4gICAgICAgICAgICAgIHNlbGYuX3NhZmVBcHBlbmRUb0J1ZmZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChidWZmZXJlZEJlZm9yZSkge1xuICAgICAgICAgIG9sZERvYyA9IHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmdldChpZCk7XG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvbGQgdmVyc2lvbiBtYW51YWxseSBpbnN0ZWFkIG9mIHVzaW5nIF9yZW1vdmVCdWZmZXJlZCBzb1xuICAgICAgICAgIC8vIHdlIGRvbid0IHRyaWdnZXIgdGhlIHF1ZXJ5aW5nIGltbWVkaWF0ZWx5LiAgaWYgd2UgZW5kIHRoaXMgYmxvY2tcbiAgICAgICAgICAvLyB3aXRoIHRoZSBidWZmZXIgZW1wdHksIHdlIHdpbGwgbmVlZCB0byB0cmlnZ2VyIHRoZSBxdWVyeSBwb2xsXG4gICAgICAgICAgLy8gbWFudWFsbHkgdG9vLlxuICAgICAgICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnJlbW92ZShpZCk7XG5cbiAgICAgICAgICB2YXIgbWF4UHVibGlzaGVkID0gc2VsZi5fcHVibGlzaGVkLmdldChcbiAgICAgICAgICAgIHNlbGYuX3B1Ymxpc2hlZC5tYXhFbGVtZW50SWQoKSk7XG4gICAgICAgICAgbWF4QnVmZmVyZWQgPSBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5zaXplKCkgJiZcbiAgICAgICAgICAgICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5nZXQoXG4gICAgICAgICAgICAgICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5tYXhFbGVtZW50SWQoKSk7XG5cbiAgICAgICAgICAvLyB0aGUgYnVmZmVyZWQgZG9jIHdhcyB1cGRhdGVkLCBpdCBjb3VsZCBtb3ZlIHRvIHB1Ymxpc2hlZFxuICAgICAgICAgIHZhciB0b1B1Ymxpc2ggPSBjb21wYXJhdG9yKG5ld0RvYywgbWF4UHVibGlzaGVkKSA8IDA7XG5cbiAgICAgICAgICAvLyBvciBzdGF5cyBpbiBidWZmZXIgZXZlbiBhZnRlciB0aGUgY2hhbmdlXG4gICAgICAgICAgdmFyIHN0YXlzSW5CdWZmZXIgPSAoISB0b1B1Ymxpc2ggJiYgc2VsZi5fc2FmZUFwcGVuZFRvQnVmZmVyKSB8fFxuICAgICAgICAgICAgICAgICghdG9QdWJsaXNoICYmIG1heEJ1ZmZlcmVkICYmXG4gICAgICAgICAgICAgICAgIGNvbXBhcmF0b3IobmV3RG9jLCBtYXhCdWZmZXJlZCkgPD0gMCk7XG5cbiAgICAgICAgICBpZiAodG9QdWJsaXNoKSB7XG4gICAgICAgICAgICBzZWxmLl9hZGRQdWJsaXNoZWQoaWQsIG5ld0RvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF5c0luQnVmZmVyKSB7XG4gICAgICAgICAgICAvLyBzdGF5cyBpbiBidWZmZXIgYnV0IGNoYW5nZXNcbiAgICAgICAgICAgIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnNldChpZCwgbmV3RG9jKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhyb3cgYXdheSBmcm9tIGJvdGggcHVibGlzaGVkIHNldCBhbmQgYnVmZmVyXG4gICAgICAgICAgICBzZWxmLl9zYWZlQXBwZW5kVG9CdWZmZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIE5vcm1hbGx5IHRoaXMgY2hlY2sgd291bGQgaGF2ZSBiZWVuIGRvbmUgaW4gX3JlbW92ZUJ1ZmZlcmVkIGJ1dFxuICAgICAgICAgICAgLy8gd2UgZGlkbid0IHVzZSBpdCwgc28gd2UgbmVlZCB0byBkbyBpdCBvdXJzZWxmIG5vdy5cbiAgICAgICAgICAgIGlmICghIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLnNpemUoKSkge1xuICAgICAgICAgICAgICBzZWxmLl9uZWVkVG9Qb2xsUXVlcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FjaGVkQmVmb3JlIGltcGxpZXMgZWl0aGVyIG9mIHB1Ymxpc2hlZEJlZm9yZSBvciBidWZmZXJlZEJlZm9yZSBpcyB0cnVlLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBfZmV0Y2hNb2RpZmllZERvY3VtZW50czogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9yZWdpc3RlclBoYXNlQ2hhbmdlKFBIQVNFLkZFVENISU5HKTtcbiAgICAgIC8vIERlZmVyLCBiZWNhdXNlIG5vdGhpbmcgY2FsbGVkIGZyb20gdGhlIG9wbG9nIGVudHJ5IGhhbmRsZXIgbWF5IHlpZWxkLFxuICAgICAgLy8gYnV0IGZldGNoKCkgeWllbGRzLlxuICAgICAgTWV0ZW9yLmRlZmVyKGZpbmlzaElmTmVlZFRvUG9sbFF1ZXJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKCFzZWxmLl9zdG9wcGVkICYmICFzZWxmLl9uZWVkVG9GZXRjaC5lbXB0eSgpKSB7XG4gICAgICAgICAgaWYgKHNlbGYuX3BoYXNlID09PSBQSEFTRS5RVUVSWUlORykge1xuICAgICAgICAgICAgLy8gV2hpbGUgZmV0Y2hpbmcsIHdlIGRlY2lkZWQgdG8gZ28gaW50byBRVUVSWUlORyBtb2RlLCBhbmQgdGhlbiB3ZVxuICAgICAgICAgICAgLy8gc2F3IGFub3RoZXIgb3Bsb2cgZW50cnksIHNvIF9uZWVkVG9GZXRjaCBpcyBub3QgZW1wdHkuIEJ1dCB3ZVxuICAgICAgICAgICAgLy8gc2hvdWxkbid0IGZldGNoIHRoZXNlIGRvY3VtZW50cyB1bnRpbCBBRlRFUiB0aGUgcXVlcnkgaXMgZG9uZS5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJlaW5nIGluIHN0ZWFkeSBwaGFzZSBoZXJlIHdvdWxkIGJlIHN1cnByaXNpbmcuXG4gICAgICAgICAgaWYgKHNlbGYuX3BoYXNlICE9PSBQSEFTRS5GRVRDSElORylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInBoYXNlIGluIGZldGNoTW9kaWZpZWREb2N1bWVudHM6IFwiICsgc2VsZi5fcGhhc2UpO1xuXG4gICAgICAgICAgc2VsZi5fY3VycmVudGx5RmV0Y2hpbmcgPSBzZWxmLl9uZWVkVG9GZXRjaDtcbiAgICAgICAgICB2YXIgdGhpc0dlbmVyYXRpb24gPSArK3NlbGYuX2ZldGNoR2VuZXJhdGlvbjtcbiAgICAgICAgICBzZWxmLl9uZWVkVG9GZXRjaCA9IG5ldyBMb2NhbENvbGxlY3Rpb24uX0lkTWFwO1xuICAgICAgICAgIHZhciB3YWl0aW5nID0gMDtcbiAgICAgICAgICB2YXIgZnV0ID0gbmV3IEZ1dHVyZTtcbiAgICAgICAgICAvLyBUaGlzIGxvb3AgaXMgc2FmZSwgYmVjYXVzZSBfY3VycmVudGx5RmV0Y2hpbmcgd2lsbCBub3QgYmUgdXBkYXRlZFxuICAgICAgICAgIC8vIGR1cmluZyB0aGlzIGxvb3AgKGluIGZhY3QsIGl0IGlzIG5ldmVyIG11dGF0ZWQpLlxuICAgICAgICAgIHNlbGYuX2N1cnJlbnRseUZldGNoaW5nLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpZCkge1xuICAgICAgICAgICAgd2FpdGluZysrO1xuICAgICAgICAgICAgc2VsZi5fbW9uZ29IYW5kbGUuX2RvY0ZldGNoZXIuZmV0Y2goXG4gICAgICAgICAgICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lLCBpZCwgb3AsXG4gICAgICAgICAgICAgIGZpbmlzaElmTmVlZFRvUG9sbFF1ZXJ5KGZ1bmN0aW9uIChlcnIsIGRvYykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIE1ldGVvci5fZGVidWcoXCJHb3QgZXhjZXB0aW9uIHdoaWxlIGZldGNoaW5nIGRvY3VtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycik7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGdldCBhbiBlcnJvciBmcm9tIHRoZSBmZXRjaGVyIChlZywgdHJvdWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0aW5nIHRvIE1vbmdvKSwgbGV0J3MganVzdCBhYmFuZG9uIHRoZSBmZXRjaCBwaGFzZVxuICAgICAgICAgICAgICAgICAgICAvLyBhbHRvZ2V0aGVyIGFuZCBmYWxsIGJhY2sgdG8gcG9sbGluZy4gSXQncyBub3QgbGlrZSB3ZSdyZVxuICAgICAgICAgICAgICAgICAgICAvLyBnZXR0aW5nIGxpdmUgdXBkYXRlcyBhbnl3YXkuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9waGFzZSAhPT0gUEhBU0UuUVVFUllJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9uZWVkVG9Qb2xsUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2VsZi5fc3RvcHBlZCAmJiBzZWxmLl9waGFzZSA9PT0gUEhBU0UuRkVUQ0hJTkdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgc2VsZi5fZmV0Y2hHZW5lcmF0aW9uID09PSB0aGlzR2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSByZS1jaGVjayB0aGUgZ2VuZXJhdGlvbiBpbiBjYXNlIHdlJ3ZlIGhhZCBhbiBleHBsaWNpdFxuICAgICAgICAgICAgICAgICAgICAvLyBfcG9sbFF1ZXJ5IGNhbGwgKGVnLCBpbiBhbm90aGVyIGZpYmVyKSB3aGljaCBzaG91bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gZWZmZWN0aXZlbHkgY2FuY2VsIHRoaXMgcm91bmQgb2YgZmV0Y2hlcy4gIChfcG9sbFF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlbWVudHMgdGhlIGdlbmVyYXRpb24uKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVEb2MoaWQsIGRvYyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHdhaXRpbmctLTtcbiAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgZmV0Y2goKSBuZXZlciBjYWxscyBpdHMgY2FsbGJhY2sgc3luY2hyb25vdXNseSxcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgc2FmZSAoaWUsIHdlIHdvbid0IGNhbGwgZnV0LnJldHVybigpIGJlZm9yZSB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGZvckVhY2ggaXMgZG9uZSkuXG4gICAgICAgICAgICAgICAgICBpZiAod2FpdGluZyA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgZnV0LnJldHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZ1dC53YWl0KCk7XG4gICAgICAgICAgLy8gRXhpdCBub3cgaWYgd2UndmUgaGFkIGEgX3BvbGxRdWVyeSBjYWxsIChoZXJlIG9yIGluIGFub3RoZXIgZmliZXIpLlxuICAgICAgICAgIGlmIChzZWxmLl9waGFzZSA9PT0gUEhBU0UuUVVFUllJTkcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgc2VsZi5fY3VycmVudGx5RmV0Y2hpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlJ3JlIGRvbmUgZmV0Y2hpbmcsIHNvIHdlIGNhbiBiZSBzdGVhZHksIHVubGVzcyB3ZSd2ZSBoYWQgYVxuICAgICAgICAvLyBfcG9sbFF1ZXJ5IGNhbGwgKGhlcmUgb3IgaW4gYW5vdGhlciBmaWJlcikuXG4gICAgICAgIGlmIChzZWxmLl9waGFzZSAhPT0gUEhBU0UuUVVFUllJTkcpXG4gICAgICAgICAgc2VsZi5fYmVTdGVhZHkoKTtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSxcbiAgX2JlU3RlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE1ldGVvci5fbm9ZaWVsZHNBbGxvd2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3JlZ2lzdGVyUGhhc2VDaGFuZ2UoUEhBU0UuU1RFQURZKTtcbiAgICAgIHZhciB3cml0ZXMgPSBzZWxmLl93cml0ZXNUb0NvbW1pdFdoZW5XZVJlYWNoU3RlYWR5O1xuICAgICAgc2VsZi5fd3JpdGVzVG9Db21taXRXaGVuV2VSZWFjaFN0ZWFkeSA9IFtdO1xuICAgICAgc2VsZi5fbXVsdGlwbGV4ZXIub25GbHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8uZWFjaCh3cml0ZXMsIGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgdy5jb21taXR0ZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgX2hhbmRsZU9wbG9nRW50cnlRdWVyeWluZzogZnVuY3Rpb24gKG9wKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE1ldGVvci5fbm9ZaWVsZHNBbGxvd2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX25lZWRUb0ZldGNoLnNldChpZEZvck9wKG9wKSwgb3ApO1xuICAgIH0pO1xuICB9LFxuICBfaGFuZGxlT3Bsb2dFbnRyeVN0ZWFkeU9yRmV0Y2hpbmc6IGZ1bmN0aW9uIChvcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWQgPSBpZEZvck9wKG9wKTtcbiAgICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgZmV0Y2hpbmcgdGhpcyBvbmUsIG9yIGFib3V0IHRvLCB3ZSBjYW4ndCBvcHRpbWl6ZTtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHdlIGZldGNoIGl0IGFnYWluIGlmIG5lY2Vzc2FyeS5cbiAgICAgIGlmIChzZWxmLl9waGFzZSA9PT0gUEhBU0UuRkVUQ0hJTkcgJiZcbiAgICAgICAgICAoKHNlbGYuX2N1cnJlbnRseUZldGNoaW5nICYmIHNlbGYuX2N1cnJlbnRseUZldGNoaW5nLmhhcyhpZCkpIHx8XG4gICAgICAgICAgIHNlbGYuX25lZWRUb0ZldGNoLmhhcyhpZCkpKSB7XG4gICAgICAgIHNlbGYuX25lZWRUb0ZldGNoLnNldChpZCwgb3ApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvcC5vcCA9PT0gJ2QnKSB7XG4gICAgICAgIGlmIChzZWxmLl9wdWJsaXNoZWQuaGFzKGlkKSB8fFxuICAgICAgICAgICAgKHNlbGYuX2xpbWl0ICYmIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmhhcyhpZCkpKVxuICAgICAgICAgIHNlbGYuX3JlbW92ZU1hdGNoaW5nKGlkKTtcbiAgICAgIH0gZWxzZSBpZiAob3Aub3AgPT09ICdpJykge1xuICAgICAgICBpZiAoc2VsZi5fcHVibGlzaGVkLmhhcyhpZCkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5zZXJ0IGZvdW5kIGZvciBhbHJlYWR5LWV4aXN0aW5nIElEIGluIHB1Ymxpc2hlZFwiKTtcbiAgICAgICAgaWYgKHNlbGYuX3VucHVibGlzaGVkQnVmZmVyICYmIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmhhcyhpZCkpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5zZXJ0IGZvdW5kIGZvciBhbHJlYWR5LWV4aXN0aW5nIElEIGluIGJ1ZmZlclwiKTtcblxuICAgICAgICAvLyBYWFggd2hhdCBpZiBzZWxlY3RvciB5aWVsZHM/ICBmb3Igbm93IGl0IGNhbid0IGJ1dCBsYXRlciBpdCBjb3VsZFxuICAgICAgICAvLyBoYXZlICR3aGVyZVxuICAgICAgICBpZiAoc2VsZi5fbWF0Y2hlci5kb2N1bWVudE1hdGNoZXMob3AubykucmVzdWx0KVxuICAgICAgICAgIHNlbGYuX2FkZE1hdGNoaW5nKG9wLm8pO1xuICAgICAgfSBlbHNlIGlmIChvcC5vcCA9PT0gJ3UnKSB7XG4gICAgICAgIC8vIHdlIGFyZSBtYXBwaW5nIHRoZSBuZXcgb3Bsb2cgZm9ybWF0IG9uIG1vbmdvIDVcbiAgICAgICAgLy8gdG8gd2hhdCB3ZSBrbm93IGJldHRlciwgJHNldFxuICAgICAgICBvcC5vID0gb3Bsb2dWMlYxQ29udmVydGVyKG9wLm8pXG4gICAgICAgIC8vIElzIHRoaXMgYSBtb2RpZmllciAoJHNldC8kdW5zZXQsIHdoaWNoIG1heSByZXF1aXJlIHVzIHRvIHBvbGwgdGhlXG4gICAgICAgIC8vIGRhdGFiYXNlIHRvIGZpZ3VyZSBvdXQgaWYgdGhlIHdob2xlIGRvY3VtZW50IG1hdGNoZXMgdGhlIHNlbGVjdG9yKSBvclxuICAgICAgICAvLyBhIHJlcGxhY2VtZW50IChpbiB3aGljaCBjYXNlIHdlIGNhbiBqdXN0IGRpcmVjdGx5IHJlLWV2YWx1YXRlIHRoZVxuICAgICAgICAvLyBzZWxlY3Rvcik/XG4gICAgICAgIC8vIG9wbG9nIGZvcm1hdCBoYXMgY2hhbmdlZCBvbiBtb25nb2RiIDUsIHdlIGhhdmUgdG8gc3VwcG9ydCBib3RoIG5vd1xuICAgICAgICAvLyBkaWZmIGlzIHRoZSBmb3JtYXQgaW4gTW9uZ28gNSsgKG9wbG9nIHYyKVxuICAgICAgICB2YXIgaXNSZXBsYWNlID0gIV8uaGFzKG9wLm8sICckc2V0JykgJiYgIV8uaGFzKG9wLm8sICdkaWZmJykgJiYgIV8uaGFzKG9wLm8sICckdW5zZXQnKTtcbiAgICAgICAgLy8gSWYgdGhpcyBtb2RpZmllciBtb2RpZmllcyBzb21ldGhpbmcgaW5zaWRlIGFuIEVKU09OIGN1c3RvbSB0eXBlIChpZSxcbiAgICAgICAgLy8gYW55dGhpbmcgd2l0aCBFSlNPTiQpLCB0aGVuIHdlIGNhbid0IHRyeSB0byB1c2VcbiAgICAgICAgLy8gTG9jYWxDb2xsZWN0aW9uLl9tb2RpZnksIHNpbmNlIHRoYXQganVzdCBtdXRhdGVzIHRoZSBFSlNPTiBlbmNvZGluZyxcbiAgICAgICAgLy8gbm90IHRoZSBhY3R1YWwgb2JqZWN0LlxuICAgICAgICB2YXIgY2FuRGlyZWN0bHlNb2RpZnlEb2MgPVxuICAgICAgICAgICFpc1JlcGxhY2UgJiYgbW9kaWZpZXJDYW5CZURpcmVjdGx5QXBwbGllZChvcC5vKTtcblxuICAgICAgICB2YXIgcHVibGlzaGVkQmVmb3JlID0gc2VsZi5fcHVibGlzaGVkLmhhcyhpZCk7XG4gICAgICAgIHZhciBidWZmZXJlZEJlZm9yZSA9IHNlbGYuX2xpbWl0ICYmIHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmhhcyhpZCk7XG5cbiAgICAgICAgaWYgKGlzUmVwbGFjZSkge1xuICAgICAgICAgIHNlbGYuX2hhbmRsZURvYyhpZCwgXy5leHRlbmQoe19pZDogaWR9LCBvcC5vKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKHB1Ymxpc2hlZEJlZm9yZSB8fCBidWZmZXJlZEJlZm9yZSkgJiZcbiAgICAgICAgICAgICAgICAgICBjYW5EaXJlY3RseU1vZGlmeURvYykge1xuICAgICAgICAgIC8vIE9oIGdyZWF0LCB3ZSBhY3R1YWxseSBrbm93IHdoYXQgdGhlIGRvY3VtZW50IGlzLCBzbyB3ZSBjYW4gYXBwbHlcbiAgICAgICAgICAvLyB0aGlzIGRpcmVjdGx5LlxuICAgICAgICAgIHZhciBuZXdEb2MgPSBzZWxmLl9wdWJsaXNoZWQuaGFzKGlkKVxuICAgICAgICAgICAgPyBzZWxmLl9wdWJsaXNoZWQuZ2V0KGlkKSA6IHNlbGYuX3VucHVibGlzaGVkQnVmZmVyLmdldChpZCk7XG4gICAgICAgICAgbmV3RG9jID0gRUpTT04uY2xvbmUobmV3RG9jKTtcblxuICAgICAgICAgIG5ld0RvYy5faWQgPSBpZDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgTG9jYWxDb2xsZWN0aW9uLl9tb2RpZnkobmV3RG9jLCBvcC5vKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5uYW1lICE9PSBcIk1pbmltb25nb0Vycm9yXCIpXG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAvLyBXZSBkaWRuJ3QgdW5kZXJzdGFuZCB0aGUgbW9kaWZpZXIuICBSZS1mZXRjaC5cbiAgICAgICAgICAgIHNlbGYuX25lZWRUb0ZldGNoLnNldChpZCwgb3ApO1xuICAgICAgICAgICAgaWYgKHNlbGYuX3BoYXNlID09PSBQSEFTRS5TVEVBRFkpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZmV0Y2hNb2RpZmllZERvY3VtZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLl9oYW5kbGVEb2MoaWQsIHNlbGYuX3NoYXJlZFByb2plY3Rpb25GbihuZXdEb2MpKTtcbiAgICAgICAgfSBlbHNlIGlmICghY2FuRGlyZWN0bHlNb2RpZnlEb2MgfHxcbiAgICAgICAgICAgICAgICAgICBzZWxmLl9tYXRjaGVyLmNhbkJlY29tZVRydWVCeU1vZGlmaWVyKG9wLm8pIHx8XG4gICAgICAgICAgICAgICAgICAgKHNlbGYuX3NvcnRlciAmJiBzZWxmLl9zb3J0ZXIuYWZmZWN0ZWRCeU1vZGlmaWVyKG9wLm8pKSkge1xuICAgICAgICAgIHNlbGYuX25lZWRUb0ZldGNoLnNldChpZCwgb3ApO1xuICAgICAgICAgIGlmIChzZWxmLl9waGFzZSA9PT0gUEhBU0UuU1RFQURZKVxuICAgICAgICAgICAgc2VsZi5fZmV0Y2hNb2RpZmllZERvY3VtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcIlhYWCBTVVJQUklTSU5HIE9QRVJBVElPTjogXCIgKyBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8vIFlpZWxkcyFcbiAgX3J1bkluaXRpYWxRdWVyeTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5fc3RvcHBlZClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm9wbG9nIHN0b3BwZWQgc3VycHJpc2luZ2x5IGVhcmx5XCIpO1xuXG4gICAgc2VsZi5fcnVuUXVlcnkoe2luaXRpYWw6IHRydWV9KTsgIC8vIHlpZWxkc1xuXG4gICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICByZXR1cm47ICAvLyBjYW4gaGFwcGVuIG9uIHF1ZXJ5RXJyb3JcblxuICAgIC8vIEFsbG93IG9ic2VydmVDaGFuZ2VzIGNhbGxzIHRvIHJldHVybi4gKEFmdGVyIHRoaXMsIGl0J3MgcG9zc2libGUgZm9yXG4gICAgLy8gc3RvcCgpIHRvIGJlIGNhbGxlZC4pXG4gICAgc2VsZi5fbXVsdGlwbGV4ZXIucmVhZHkoKTtcblxuICAgIHNlbGYuX2RvbmVRdWVyeWluZygpOyAgLy8geWllbGRzXG4gIH0sXG5cbiAgLy8gSW4gdmFyaW91cyBjaXJjdW1zdGFuY2VzLCB3ZSBtYXkganVzdCB3YW50IHRvIHN0b3AgcHJvY2Vzc2luZyB0aGUgb3Bsb2cgYW5kXG4gIC8vIHJlLXJ1biB0aGUgaW5pdGlhbCBxdWVyeSwganVzdCBhcyBpZiB3ZSB3ZXJlIGEgUG9sbGluZ09ic2VydmVEcml2ZXIuXG4gIC8vXG4gIC8vIFRoaXMgZnVuY3Rpb24gbWF5IG5vdCBibG9jaywgYmVjYXVzZSBpdCBpcyBjYWxsZWQgZnJvbSBhbiBvcGxvZyBlbnRyeVxuICAvLyBoYW5kbGVyLlxuICAvL1xuICAvLyBYWFggV2Ugc2hvdWxkIGNhbGwgdGhpcyB3aGVuIHdlIGRldGVjdCB0aGF0IHdlJ3ZlIGJlZW4gaW4gRkVUQ0hJTkcgZm9yIFwidG9vXG4gIC8vIGxvbmdcIi5cbiAgLy9cbiAgLy8gWFhYIFdlIHNob3VsZCBjYWxsIHRoaXMgd2hlbiB3ZSBkZXRlY3QgTW9uZ28gZmFpbG92ZXIgKHNpbmNlIHRoYXQgbWlnaHRcbiAgLy8gbWVhbiB0aGF0IHNvbWUgb2YgdGhlIG9wbG9nIGVudHJpZXMgd2UgaGF2ZSBwcm9jZXNzZWQgaGF2ZSBiZWVuIHJvbGxlZFxuICAvLyBiYWNrKS4gVGhlIE5vZGUgTW9uZ28gZHJpdmVyIGlzIGluIHRoZSBtaWRkbGUgb2YgYSBidW5jaCBvZiBodWdlXG4gIC8vIHJlZmFjdG9yaW5ncywgaW5jbHVkaW5nIHRoZSB3YXkgdGhhdCBpdCBub3RpZmllcyB5b3Ugd2hlbiBwcmltYXJ5XG4gIC8vIGNoYW5nZXMuIFdpbGwgcHV0IG9mZiBpbXBsZW1lbnRpbmcgdGhpcyB1bnRpbCBkcml2ZXIgMS40IGlzIG91dC5cbiAgX3BvbGxRdWVyeTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5fc3RvcHBlZClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAvLyBZYXksIHdlIGdldCB0byBmb3JnZXQgYWJvdXQgYWxsIHRoZSB0aGluZ3Mgd2UgdGhvdWdodCB3ZSBoYWQgdG8gZmV0Y2guXG4gICAgICBzZWxmLl9uZWVkVG9GZXRjaCA9IG5ldyBMb2NhbENvbGxlY3Rpb24uX0lkTWFwO1xuICAgICAgc2VsZi5fY3VycmVudGx5RmV0Y2hpbmcgPSBudWxsO1xuICAgICAgKytzZWxmLl9mZXRjaEdlbmVyYXRpb247ICAvLyBpZ25vcmUgYW55IGluLWZsaWdodCBmZXRjaGVzXG4gICAgICBzZWxmLl9yZWdpc3RlclBoYXNlQ2hhbmdlKFBIQVNFLlFVRVJZSU5HKTtcblxuICAgICAgLy8gRGVmZXIgc28gdGhhdCB3ZSBkb24ndCB5aWVsZC4gIFdlIGRvbid0IG5lZWQgZmluaXNoSWZOZWVkVG9Qb2xsUXVlcnlcbiAgICAgIC8vIGhlcmUgYmVjYXVzZSBTd2l0Y2hlZFRvUXVlcnkgaXMgbm90IHRocm93biBpbiBRVUVSWUlORyBtb2RlLlxuICAgICAgTWV0ZW9yLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fcnVuUXVlcnkoKTtcbiAgICAgICAgc2VsZi5fZG9uZVF1ZXJ5aW5nKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBZaWVsZHMhXG4gIF9ydW5RdWVyeTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIG5ld1Jlc3VsdHMsIG5ld0J1ZmZlcjtcblxuICAgIC8vIFRoaXMgd2hpbGUgbG9vcCBpcyBqdXN0IHRvIHJldHJ5IGZhaWx1cmVzLlxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBiZWVuIHN0b3BwZWQsIHdlIGRvbid0IGhhdmUgdG8gcnVuIGFueXRoaW5nIGFueSBtb3JlLlxuICAgICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgbmV3UmVzdWx0cyA9IG5ldyBMb2NhbENvbGxlY3Rpb24uX0lkTWFwO1xuICAgICAgbmV3QnVmZmVyID0gbmV3IExvY2FsQ29sbGVjdGlvbi5fSWRNYXA7XG5cbiAgICAgIC8vIFF1ZXJ5IDJ4IGRvY3VtZW50cyBhcyB0aGUgaGFsZiBleGNsdWRlZCBmcm9tIHRoZSBvcmlnaW5hbCBxdWVyeSB3aWxsIGdvXG4gICAgICAvLyBpbnRvIHVucHVibGlzaGVkIGJ1ZmZlciB0byByZWR1Y2UgYWRkaXRpb25hbCBNb25nbyBsb29rdXBzIGluIGNhc2VzXG4gICAgICAvLyB3aGVuIGRvY3VtZW50cyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBwdWJsaXNoZWQgc2V0IGFuZCBuZWVkIGFcbiAgICAgIC8vIHJlcGxhY2VtZW50LlxuICAgICAgLy8gWFhYIG5lZWRzIG1vcmUgdGhvdWdodCBvbiBub24temVybyBza2lwXG4gICAgICAvLyBYWFggMiBpcyBhIFwibWFnaWMgbnVtYmVyXCIgbWVhbmluZyB0aGVyZSBpcyBhbiBleHRyYSBjaHVuayBvZiBkb2NzIGZvclxuICAgICAgLy8gYnVmZmVyIGlmIHN1Y2ggaXMgbmVlZGVkLlxuICAgICAgdmFyIGN1cnNvciA9IHNlbGYuX2N1cnNvckZvclF1ZXJ5KHsgbGltaXQ6IHNlbGYuX2xpbWl0ICogMiB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGN1cnNvci5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGkpIHsgIC8vIHlpZWxkc1xuICAgICAgICAgIGlmICghc2VsZi5fbGltaXQgfHwgaSA8IHNlbGYuX2xpbWl0KSB7XG4gICAgICAgICAgICBuZXdSZXN1bHRzLnNldChkb2MuX2lkLCBkb2MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdCdWZmZXIuc2V0KGRvYy5faWQsIGRvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmluaXRpYWwgJiYgdHlwZW9mKGUuY29kZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBhbiBlcnJvciBkb2N1bWVudCBzZW50IHRvIHVzIGJ5IG1vbmdvZCwgbm90IGEgY29ubmVjdGlvblxuICAgICAgICAgIC8vIGVycm9yIGdlbmVyYXRlZCBieSB0aGUgY2xpZW50LiBBbmQgd2UndmUgbmV2ZXIgc2VlbiB0aGlzIHF1ZXJ5IHdvcmtcbiAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkuIFByb2JhYmx5IGl0J3MgYSBiYWQgc2VsZWN0b3Igb3Igc29tZXRoaW5nLCBzbyB3ZVxuICAgICAgICAgIC8vIHNob3VsZCBOT1QgcmV0cnkuIEluc3RlYWQsIHdlIHNob3VsZCBoYWx0IHRoZSBvYnNlcnZlICh3aGljaCBlbmRzXG4gICAgICAgICAgLy8gdXAgY2FsbGluZyBgc3RvcGAgb24gdXMpLlxuICAgICAgICAgIHNlbGYuX211bHRpcGxleGVyLnF1ZXJ5RXJyb3IoZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHVyaW5nIGZhaWxvdmVyIChlZykgaWYgd2UgZ2V0IGFuIGV4Y2VwdGlvbiB3ZSBzaG91bGQgbG9nIGFuZCByZXRyeVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGNyYXNoaW5nLlxuICAgICAgICBNZXRlb3IuX2RlYnVnKFwiR290IGV4Y2VwdGlvbiB3aGlsZSBwb2xsaW5nIHF1ZXJ5XCIsIGUpO1xuICAgICAgICBNZXRlb3IuX3NsZWVwRm9yTXMoMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fc3RvcHBlZClcbiAgICAgIHJldHVybjtcblxuICAgIHNlbGYuX3B1Ymxpc2hOZXdSZXN1bHRzKG5ld1Jlc3VsdHMsIG5ld0J1ZmZlcik7XG4gIH0sXG5cbiAgLy8gVHJhbnNpdGlvbnMgdG8gUVVFUllJTkcgYW5kIHJ1bnMgYW5vdGhlciBxdWVyeSwgb3IgKGlmIGFscmVhZHkgaW4gUVVFUllJTkcpXG4gIC8vIGVuc3VyZXMgdGhhdCB3ZSB3aWxsIHF1ZXJ5IGFnYWluIGxhdGVyLlxuICAvL1xuICAvLyBUaGlzIGZ1bmN0aW9uIG1heSBub3QgYmxvY2ssIGJlY2F1c2UgaXQgaXMgY2FsbGVkIGZyb20gYW4gb3Bsb2cgZW50cnlcbiAgLy8gaGFuZGxlci4gSG93ZXZlciwgaWYgd2Ugd2VyZSBub3QgYWxyZWFkeSBpbiB0aGUgUVVFUllJTkcgcGhhc2UsIGl0IHRocm93c1xuICAvLyBhbiBleGNlcHRpb24gdGhhdCBpcyBjYXVnaHQgYnkgdGhlIGNsb3Nlc3Qgc3Vycm91bmRpbmdcbiAgLy8gZmluaXNoSWZOZWVkVG9Qb2xsUXVlcnkgY2FsbDsgdGhpcyBlbnN1cmVzIHRoYXQgd2UgZG9uJ3QgY29udGludWUgcnVubmluZ1xuICAvLyBjbG9zZSB0aGF0IHdhcyBkZXNpZ25lZCBmb3IgYW5vdGhlciBwaGFzZSBpbnNpZGUgUEhBU0UuUVVFUllJTkcuXG4gIC8vXG4gIC8vIChJdCdzIGFsc28gbmVjZXNzYXJ5IHdoZW5ldmVyIGxvZ2ljIGluIHRoaXMgZmlsZSB5aWVsZHMgdG8gY2hlY2sgdGhhdCBvdGhlclxuICAvLyBwaGFzZXMgaGF2ZW4ndCBwdXQgdXMgaW50byBRVUVSWUlORyBtb2RlLCB0aG91Z2g7IGVnLFxuICAvLyBfZmV0Y2hNb2RpZmllZERvY3VtZW50cyBkb2VzIHRoaXMuKVxuICBfbmVlZFRvUG9sbFF1ZXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE1ldGVvci5fbm9ZaWVsZHNBbGxvd2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLl9zdG9wcGVkKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIC8vIElmIHdlJ3JlIG5vdCBhbHJlYWR5IGluIHRoZSBtaWRkbGUgb2YgYSBxdWVyeSwgd2UgY2FuIHF1ZXJ5IG5vd1xuICAgICAgLy8gKHBvc3NpYmx5IHBhdXNpbmcgRkVUQ0hJTkcpLlxuICAgICAgaWYgKHNlbGYuX3BoYXNlICE9PSBQSEFTRS5RVUVSWUlORykge1xuICAgICAgICBzZWxmLl9wb2xsUXVlcnkoKTtcbiAgICAgICAgdGhyb3cgbmV3IFN3aXRjaGVkVG9RdWVyeTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UncmUgY3VycmVudGx5IGluIFFVRVJZSU5HLiBTZXQgYSBmbGFnIHRvIGVuc3VyZSB0aGF0IHdlIHJ1biBhbm90aGVyXG4gICAgICAvLyBxdWVyeSB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgICBzZWxmLl9yZXF1ZXJ5V2hlbkRvbmVUaGlzUXVlcnkgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFlpZWxkcyFcbiAgX2RvbmVRdWVyeWluZzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmIChzZWxmLl9zdG9wcGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHNlbGYuX21vbmdvSGFuZGxlLl9vcGxvZ0hhbmRsZS53YWl0VW50aWxDYXVnaHRVcCgpOyAgLy8geWllbGRzXG4gICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHNlbGYuX3BoYXNlICE9PSBQSEFTRS5RVUVSWUlORylcbiAgICAgIHRocm93IEVycm9yKFwiUGhhc2UgdW5leHBlY3RlZGx5IFwiICsgc2VsZi5fcGhhc2UpO1xuXG4gICAgTWV0ZW9yLl9ub1lpZWxkc0FsbG93ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3JlcXVlcnlXaGVuRG9uZVRoaXNRdWVyeSkge1xuICAgICAgICBzZWxmLl9yZXF1ZXJ5V2hlbkRvbmVUaGlzUXVlcnkgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5fcG9sbFF1ZXJ5KCk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX25lZWRUb0ZldGNoLmVtcHR5KCkpIHtcbiAgICAgICAgc2VsZi5fYmVTdGVhZHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX2ZldGNoTW9kaWZpZWREb2N1bWVudHMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfY3Vyc29yRm9yUXVlcnk6IGZ1bmN0aW9uIChvcHRpb25zT3ZlcndyaXRlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUaGUgcXVlcnkgd2UgcnVuIGlzIGFsbW9zdCB0aGUgc2FtZSBhcyB0aGUgY3Vyc29yIHdlIGFyZSBvYnNlcnZpbmcsXG4gICAgICAvLyB3aXRoIGEgZmV3IGNoYW5nZXMuIFdlIG5lZWQgdG8gcmVhZCBhbGwgdGhlIGZpZWxkcyB0aGF0IGFyZSByZWxldmFudCB0b1xuICAgICAgLy8gdGhlIHNlbGVjdG9yLCBub3QganVzdCB0aGUgZmllbGRzIHdlIGFyZSBnb2luZyB0byBwdWJsaXNoICh0aGF0J3MgdGhlXG4gICAgICAvLyBcInNoYXJlZFwiIHByb2plY3Rpb24pLiBBbmQgd2UgZG9uJ3Qgd2FudCB0byBhcHBseSBhbnkgdHJhbnNmb3JtIGluIHRoZVxuICAgICAgLy8gY3Vyc29yLCBiZWNhdXNlIG9ic2VydmVDaGFuZ2VzIHNob3VsZG4ndCB1c2UgdGhlIHRyYW5zZm9ybS5cbiAgICAgIHZhciBvcHRpb25zID0gXy5jbG9uZShzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbi5vcHRpb25zKTtcblxuICAgICAgLy8gQWxsb3cgdGhlIGNhbGxlciB0byBtb2RpZnkgdGhlIG9wdGlvbnMuIFVzZWZ1bCB0byBzcGVjaWZ5IGRpZmZlcmVudFxuICAgICAgLy8gc2tpcCBhbmQgbGltaXQgdmFsdWVzLlxuICAgICAgXy5leHRlbmQob3B0aW9ucywgb3B0aW9uc092ZXJ3cml0ZSk7XG5cbiAgICAgIG9wdGlvbnMuZmllbGRzID0gc2VsZi5fc2hhcmVkUHJvamVjdGlvbjtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLnRyYW5zZm9ybTtcbiAgICAgIC8vIFdlIGFyZSBOT1QgZGVlcCBjbG9uaW5nIGZpZWxkcyBvciBzZWxlY3RvciBoZXJlLCB3aGljaCBzaG91bGQgYmUgT0suXG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBuZXcgQ3Vyc29yRGVzY3JpcHRpb24oXG4gICAgICAgIHNlbGYuX2N1cnNvckRlc2NyaXB0aW9uLmNvbGxlY3Rpb25OYW1lLFxuICAgICAgICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbi5zZWxlY3RvcixcbiAgICAgICAgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbmV3IEN1cnNvcihzZWxmLl9tb25nb0hhbmRsZSwgZGVzY3JpcHRpb24pO1xuICAgIH0pO1xuICB9LFxuXG5cbiAgLy8gUmVwbGFjZSBzZWxmLl9wdWJsaXNoZWQgd2l0aCBuZXdSZXN1bHRzIChib3RoIGFyZSBJZE1hcHMpLCBpbnZva2luZyBvYnNlcnZlXG4gIC8vIGNhbGxiYWNrcyBvbiB0aGUgbXVsdGlwbGV4ZXIuXG4gIC8vIFJlcGxhY2Ugc2VsZi5fdW5wdWJsaXNoZWRCdWZmZXIgd2l0aCBuZXdCdWZmZXIuXG4gIC8vXG4gIC8vIFhYWCBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byBMb2NhbENvbGxlY3Rpb24uX2RpZmZRdWVyeVVub3JkZXJlZENoYW5nZXMuIFdlXG4gIC8vIHNob3VsZCByZWFsbHk6IChhKSBVbmlmeSBJZE1hcCBhbmQgT3JkZXJlZERpY3QgaW50byBVbm9yZGVyZWQvT3JkZXJlZERpY3RcbiAgLy8gKGIpIFJld3JpdGUgZGlmZi5qcyB0byB1c2UgdGhlc2UgY2xhc3NlcyBpbnN0ZWFkIG9mIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAgX3B1Ymxpc2hOZXdSZXN1bHRzOiBmdW5jdGlvbiAobmV3UmVzdWx0cywgbmV3QnVmZmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE1ldGVvci5fbm9ZaWVsZHNBbGxvd2VkKGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gSWYgdGhlIHF1ZXJ5IGlzIGxpbWl0ZWQgYW5kIHRoZXJlIGlzIGEgYnVmZmVyLCBzaHV0IGRvd24gc28gaXQgZG9lc24ndFxuICAgICAgLy8gc3RheSBpbiBhIHdheS5cbiAgICAgIGlmIChzZWxmLl9saW1pdCkge1xuICAgICAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlci5jbGVhcigpO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCByZW1vdmUgYW55dGhpbmcgdGhhdCdzIGdvbmUuIEJlIGNhcmVmdWwgbm90IHRvIG1vZGlmeVxuICAgICAgLy8gc2VsZi5fcHVibGlzaGVkIHdoaWxlIGl0ZXJhdGluZyBvdmVyIGl0LlxuICAgICAgdmFyIGlkc1RvUmVtb3ZlID0gW107XG4gICAgICBzZWxmLl9wdWJsaXNoZWQuZm9yRWFjaChmdW5jdGlvbiAoZG9jLCBpZCkge1xuICAgICAgICBpZiAoIW5ld1Jlc3VsdHMuaGFzKGlkKSlcbiAgICAgICAgICBpZHNUb1JlbW92ZS5wdXNoKGlkKTtcbiAgICAgIH0pO1xuICAgICAgXy5lYWNoKGlkc1RvUmVtb3ZlLCBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgc2VsZi5fcmVtb3ZlUHVibGlzaGVkKGlkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBOb3cgZG8gYWRkcyBhbmQgY2hhbmdlcy5cbiAgICAgIC8vIElmIHNlbGYgaGFzIGEgYnVmZmVyIGFuZCBsaW1pdCwgdGhlIG5ldyBmZXRjaGVkIHJlc3VsdCB3aWxsIGJlXG4gICAgICAvLyBsaW1pdGVkIGNvcnJlY3RseSBhcyB0aGUgcXVlcnkgaGFzIHNvcnQgc3BlY2lmaWVyLlxuICAgICAgbmV3UmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGlkKSB7XG4gICAgICAgIHNlbGYuX2hhbmRsZURvYyhpZCwgZG9jKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTYW5pdHktY2hlY2sgdGhhdCBldmVyeXRoaW5nIHdlIHRyaWVkIHRvIHB1dCBpbnRvIF9wdWJsaXNoZWQgZW5kZWQgdXBcbiAgICAgIC8vIHRoZXJlLlxuICAgICAgLy8gWFhYIGlmIHRoaXMgaXMgc2xvdywgcmVtb3ZlIGl0IGxhdGVyXG4gICAgICBpZiAoc2VsZi5fcHVibGlzaGVkLnNpemUoKSAhPT0gbmV3UmVzdWx0cy5zaXplKCkpIHtcbiAgICAgICAgTWV0ZW9yLl9kZWJ1ZygnVGhlIE1vbmdvIHNlcnZlciBhbmQgdGhlIE1ldGVvciBxdWVyeSBkaXNhZ3JlZSBvbiBob3cgJyArXG4gICAgICAgICAgJ21hbnkgZG9jdW1lbnRzIG1hdGNoIHlvdXIgcXVlcnkuIEN1cnNvciBkZXNjcmlwdGlvbjogJyxcbiAgICAgICAgICBzZWxmLl9jdXJzb3JEZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlbGYuX3B1Ymxpc2hlZC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MsIGlkKSB7XG4gICAgICAgIGlmICghbmV3UmVzdWx0cy5oYXMoaWQpKVxuICAgICAgICAgIHRocm93IEVycm9yKFwiX3B1Ymxpc2hlZCBoYXMgYSBkb2MgdGhhdCBuZXdSZXN1bHRzIGRvZXNuJ3Q7IFwiICsgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEZpbmFsbHksIHJlcGxhY2UgdGhlIGJ1ZmZlclxuICAgICAgbmV3QnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGRvYywgaWQpIHtcbiAgICAgICAgc2VsZi5fYWRkQnVmZmVyZWQoaWQsIGRvYyk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi5fc2FmZUFwcGVuZFRvQnVmZmVyID0gbmV3QnVmZmVyLnNpemUoKSA8IHNlbGYuX2xpbWl0O1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIFRoaXMgc3RvcCBmdW5jdGlvbiBpcyBpbnZva2VkIGZyb20gdGhlIG9uU3RvcCBvZiB0aGUgT2JzZXJ2ZU11bHRpcGxleGVyLCBzb1xuICAvLyBpdCBzaG91bGRuJ3QgYWN0dWFsbHkgYmUgcG9zc2libGUgdG8gY2FsbCBpdCB1bnRpbCB0aGUgbXVsdGlwbGV4ZXIgaXNcbiAgLy8gcmVhZHkuXG4gIC8vXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGNoZWNrIHNlbGYuX3N0b3BwZWQgYWZ0ZXIgZXZlcnkgY2FsbCBpbiB0aGlzIGZpbGUgdGhhdFxuICAvLyBjYW4geWllbGQhXG4gIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuX3N0b3BwZWQpXG4gICAgICByZXR1cm47XG4gICAgc2VsZi5fc3RvcHBlZCA9IHRydWU7XG4gICAgXy5lYWNoKHNlbGYuX3N0b3BIYW5kbGVzLCBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICBoYW5kbGUuc3RvcCgpO1xuICAgIH0pO1xuXG4gICAgLy8gTm90ZTogd2UgKmRvbid0KiB1c2UgbXVsdGlwbGV4ZXIub25GbHVzaCBoZXJlIGJlY2F1c2UgdGhpcyBzdG9wXG4gICAgLy8gY2FsbGJhY2sgaXMgYWN0dWFsbHkgaW52b2tlZCBieSB0aGUgbXVsdGlwbGV4ZXIgaXRzZWxmIHdoZW4gaXQgaGFzXG4gICAgLy8gZGV0ZXJtaW5lZCB0aGF0IHRoZXJlIGFyZSBubyBoYW5kbGVzIGxlZnQuIFNvIG5vdGhpbmcgaXMgYWN0dWFsbHkgZ29pbmdcbiAgICAvLyB0byBnZXQgZmx1c2hlZCAoYW5kIGl0J3MgcHJvYmFibHkgbm90IHZhbGlkIHRvIGNhbGwgbWV0aG9kcyBvbiB0aGVcbiAgICAvLyBkeWluZyBtdWx0aXBsZXhlcikuXG4gICAgXy5lYWNoKHNlbGYuX3dyaXRlc1RvQ29tbWl0V2hlbldlUmVhY2hTdGVhZHksIGZ1bmN0aW9uICh3KSB7XG4gICAgICB3LmNvbW1pdHRlZCgpOyAgLy8gbWF5YmUgeWllbGRzP1xuICAgIH0pO1xuICAgIHNlbGYuX3dyaXRlc1RvQ29tbWl0V2hlbldlUmVhY2hTdGVhZHkgPSBudWxsO1xuXG4gICAgLy8gUHJvYWN0aXZlbHkgZHJvcCByZWZlcmVuY2VzIHRvIHBvdGVudGlhbGx5IGJpZyB0aGluZ3MuXG4gICAgc2VsZi5fcHVibGlzaGVkID0gbnVsbDtcbiAgICBzZWxmLl91bnB1Ymxpc2hlZEJ1ZmZlciA9IG51bGw7XG4gICAgc2VsZi5fbmVlZFRvRmV0Y2ggPSBudWxsO1xuICAgIHNlbGYuX2N1cnJlbnRseUZldGNoaW5nID0gbnVsbDtcbiAgICBzZWxmLl9vcGxvZ0VudHJ5SGFuZGxlID0gbnVsbDtcbiAgICBzZWxmLl9saXN0ZW5lcnNIYW5kbGUgPSBudWxsO1xuXG4gICAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgICAgXCJtb25nby1saXZlZGF0YVwiLCBcIm9ic2VydmUtZHJpdmVycy1vcGxvZ1wiLCAtMSk7XG4gIH0sXG5cbiAgX3JlZ2lzdGVyUGhhc2VDaGFuZ2U6IGZ1bmN0aW9uIChwaGFzZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbm93ID0gbmV3IERhdGU7XG5cbiAgICAgIGlmIChzZWxmLl9waGFzZSkge1xuICAgICAgICB2YXIgdGltZURpZmYgPSBub3cgLSBzZWxmLl9waGFzZVN0YXJ0VGltZTtcbiAgICAgICAgUGFja2FnZVsnZmFjdHMtYmFzZSddICYmIFBhY2thZ2VbJ2ZhY3RzLWJhc2UnXS5GYWN0cy5pbmNyZW1lbnRTZXJ2ZXJGYWN0KFxuICAgICAgICAgIFwibW9uZ28tbGl2ZWRhdGFcIiwgXCJ0aW1lLXNwZW50LWluLVwiICsgc2VsZi5fcGhhc2UgKyBcIi1waGFzZVwiLCB0aW1lRGlmZik7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX3BoYXNlID0gcGhhc2U7XG4gICAgICBzZWxmLl9waGFzZVN0YXJ0VGltZSA9IG5vdztcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIERvZXMgb3VyIG9wbG9nIHRhaWxpbmcgY29kZSBzdXBwb3J0IHRoaXMgY3Vyc29yPyBGb3Igbm93LCB3ZSBhcmUgYmVpbmcgdmVyeVxuLy8gY29uc2VydmF0aXZlIGFuZCBhbGxvd2luZyBvbmx5IHNpbXBsZSBxdWVyaWVzIHdpdGggc2ltcGxlIG9wdGlvbnMuXG4vLyAoVGhpcyBpcyBhIFwic3RhdGljIG1ldGhvZFwiLilcbk9wbG9nT2JzZXJ2ZURyaXZlci5jdXJzb3JTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoY3Vyc29yRGVzY3JpcHRpb24sIG1hdGNoZXIpIHtcbiAgLy8gRmlyc3QsIGNoZWNrIHRoZSBvcHRpb25zLlxuICB2YXIgb3B0aW9ucyA9IGN1cnNvckRlc2NyaXB0aW9uLm9wdGlvbnM7XG5cbiAgLy8gRGlkIHRoZSB1c2VyIHNheSBubyBleHBsaWNpdGx5P1xuICAvLyB1bmRlcnNjb3JlZCB2ZXJzaW9uIG9mIHRoZSBvcHRpb24gaXMgQ09NUEFUIHdpdGggMS4yXG4gIGlmIChvcHRpb25zLmRpc2FibGVPcGxvZyB8fCBvcHRpb25zLl9kaXNhYmxlT3Bsb2cpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIHNraXAgaXMgbm90IHN1cHBvcnRlZDogdG8gc3VwcG9ydCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGtlZXAgdHJhY2sgb2YgYWxsXG4gIC8vIFwic2tpcHBlZFwiIGRvY3VtZW50cyBvciBhdCBsZWFzdCB0aGVpciBpZHMuXG4gIC8vIGxpbWl0IHcvbyBhIHNvcnQgc3BlY2lmaWVyIGlzIG5vdCBzdXBwb3J0ZWQ6IGN1cnJlbnQgaW1wbGVtZW50YXRpb24gbmVlZHMgYVxuICAvLyBkZXRlcm1pbmlzdGljIHdheSB0byBvcmRlciBkb2N1bWVudHMuXG4gIGlmIChvcHRpb25zLnNraXAgfHwgKG9wdGlvbnMubGltaXQgJiYgIW9wdGlvbnMuc29ydCkpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBhIGZpZWxkcyBwcm9qZWN0aW9uIG9wdGlvbiBpcyBnaXZlbiBjaGVjayBpZiBpdCBpcyBzdXBwb3J0ZWQgYnlcbiAgLy8gbWluaW1vbmdvIChzb21lIG9wZXJhdG9ycyBhcmUgbm90IHN1cHBvcnRlZCkuXG4gIGNvbnN0IGZpZWxkcyA9IG9wdGlvbnMuZmllbGRzIHx8IG9wdGlvbnMucHJvamVjdGlvbjtcbiAgaWYgKGZpZWxkcykge1xuICAgIHRyeSB7XG4gICAgICBMb2NhbENvbGxlY3Rpb24uX2NoZWNrU3VwcG9ydGVkUHJvamVjdGlvbihmaWVsZHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09IFwiTWluaW1vbmdvRXJyb3JcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFdlIGRvbid0IGFsbG93IHRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzOlxuICAvLyAgIC0gJHdoZXJlIChub3QgY29uZmlkZW50IHRoYXQgd2UgcHJvdmlkZSB0aGUgc2FtZSBKUyBlbnZpcm9ubWVudFxuICAvLyAgICAgICAgICAgICBhcyBNb25nbywgYW5kIGNhbiB5aWVsZCEpXG4gIC8vICAgLSAkbmVhciAoaGFzIFwiaW50ZXJlc3RpbmdcIiBwcm9wZXJ0aWVzIGluIE1vbmdvREIsIGxpa2UgdGhlIHBvc3NpYmlsaXR5XG4gIC8vICAgICAgICAgICAgb2YgcmV0dXJuaW5nIGFuIElEIG11bHRpcGxlIHRpbWVzLCB0aG91Z2ggZXZlbiBwb2xsaW5nIG1heWJlXG4gIC8vICAgICAgICAgICAgaGF2ZSBhIGJ1ZyB0aGVyZSlcbiAgLy8gICAgICAgICAgIFhYWDogb25jZSB3ZSBzdXBwb3J0IGl0LCB3ZSB3b3VsZCBuZWVkIHRvIHRoaW5rIG1vcmUgb24gaG93IHdlXG4gIC8vICAgICAgICAgICBpbml0aWFsaXplIHRoZSBjb21wYXJhdG9ycyB3aGVuIHdlIGNyZWF0ZSB0aGUgZHJpdmVyLlxuICByZXR1cm4gIW1hdGNoZXIuaGFzV2hlcmUoKSAmJiAhbWF0Y2hlci5oYXNHZW9RdWVyeSgpO1xufTtcblxudmFyIG1vZGlmaWVyQ2FuQmVEaXJlY3RseUFwcGxpZWQgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgcmV0dXJuIF8uYWxsKG1vZGlmaWVyLCBmdW5jdGlvbiAoZmllbGRzLCBvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gXy5hbGwoZmllbGRzLCBmdW5jdGlvbiAodmFsdWUsIGZpZWxkKSB7XG4gICAgICByZXR1cm4gIS9FSlNPTlxcJC8udGVzdChmaWVsZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuTW9uZ29JbnRlcm5hbHMuT3Bsb2dPYnNlcnZlRHJpdmVyID0gT3Bsb2dPYnNlcnZlRHJpdmVyO1xuIiwiLy8gQ29udmVydGVyIG9mIHRoZSBuZXcgTW9uZ29EQiBPcGxvZyBmb3JtYXQgKD49NS4wKSB0byB0aGUgb25lIHRoYXQgTWV0ZW9yXG4vLyBoYW5kbGVzIHdlbGwsIGkuZS4sIGAkc2V0YCBhbmQgYCR1bnNldGAuIFRoZSBuZXcgZm9ybWF0IGlzIGNvbXBsZXRlbHkgbmV3LFxuLy8gYW5kIGxvb2tzIGFzIGZvbGxvd3M6XG4vL1xuLy8gICB7ICR2OiAyLCBkaWZmOiBEaWZmIH1cbi8vXG4vLyB3aGVyZSBgRGlmZmAgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlOlxuLy9cbi8vICAge1xuLy8gICAgIC8vIE5lc3RlZCB1cGRhdGVzIChzb21ldGltZXMgYWxzbyByZXByZXNlbnRlZCB3aXRoIGFuIHMtZmllbGQpLlxuLy8gICAgIC8vIEV4YW1wbGU6IGB7ICRzZXQ6IHsgJ2Zvby5iYXInOiAxIH0gfWAuXG4vLyAgICAgaTogeyA8a2V5PjogPHZhbHVlPiwgLi4uIH0sXG4vL1xuLy8gICAgIC8vIFRvcC1sZXZlbCB1cGRhdGVzLlxuLy8gICAgIC8vIEV4YW1wbGU6IGB7ICRzZXQ6IHsgZm9vOiB7IGJhcjogMSB9IH0gfWAuXG4vLyAgICAgdTogeyA8a2V5PjogPHZhbHVlPiwgLi4uIH0sXG4vL1xuLy8gICAgIC8vIFVuc2V0cy5cbi8vICAgICAvLyBFeGFtcGxlOiBgeyAkdW5zZXQ6IHsgZm9vOiAnJyB9IH1gLlxuLy8gICAgIGQ6IHsgPGtleT46IGZhbHNlLCAuLi4gfSxcbi8vXG4vLyAgICAgLy8gQXJyYXkgb3BlcmF0aW9ucy5cbi8vICAgICAvLyBFeGFtcGxlOiBgeyAkcHVzaDogeyBmb286ICdiYXInIH0gfWAuXG4vLyAgICAgczxrZXk+OiB7IGE6IHRydWUsIHU8aW5kZXg+OiA8dmFsdWU+LCAuLi4gfSxcbi8vICAgICAuLi5cbi8vXG4vLyAgICAgLy8gTmVzdGVkIG9wZXJhdGlvbnMgKHNvbWV0aW1lcyBhbHNvIHJlcHJlc2VudGVkIGluIHRoZSBgaWAgZmllbGQpLlxuLy8gICAgIC8vIEV4YW1wbGU6IGB7ICRzZXQ6IHsgJ2Zvby5iYXInOiAxIH0gfWAuXG4vLyAgICAgczxrZXk+OiBEaWZmLFxuLy8gICAgIC4uLlxuLy8gICB9XG4vL1xuLy8gKGFsbCBmaWVsZHMgYXJlIG9wdGlvbmFsKS5cblxuZnVuY3Rpb24gam9pbihwcmVmaXgsIGtleSkge1xuICByZXR1cm4gcHJlZml4ID8gYCR7cHJlZml4fS4ke2tleX1gIDoga2V5O1xufVxuXG5jb25zdCBhcnJheU9wZXJhdG9yS2V5UmVnZXggPSAvXihhfFtzdV1cXGQrKSQvO1xuXG5mdW5jdGlvbiBpc0FycmF5T3BlcmF0b3JLZXkoZmllbGQpIHtcbiAgcmV0dXJuIGFycmF5T3BlcmF0b3JLZXlSZWdleC50ZXN0KGZpZWxkKTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheU9wZXJhdG9yKG9wZXJhdG9yKSB7XG4gIHJldHVybiBvcGVyYXRvci5hID09PSB0cnVlICYmIE9iamVjdC5rZXlzKG9wZXJhdG9yKS5ldmVyeShpc0FycmF5T3BlcmF0b3JLZXkpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuT2JqZWN0SW50byh0YXJnZXQsIHNvdXJjZSwgcHJlZml4KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkgfHwgdHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcgfHwgc291cmNlID09PSBudWxsIHx8XG4gICAgICBzb3VyY2UgaW5zdGFuY2VvZiBNb25nby5PYmplY3RJRCkge1xuICAgIHRhcmdldFtwcmVmaXhdID0gc291cmNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzb3VyY2UpO1xuICAgIGlmIChlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZmxhdHRlbk9iamVjdEludG8odGFyZ2V0LCB2YWx1ZSwgam9pbihwcmVmaXgsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFtwcmVmaXhdID0gc291cmNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBsb2dEZWJ1Z01lc3NhZ2VzID0gISFwcm9jZXNzLmVudi5PUExPR19DT05WRVJURVJfREVCVUc7XG5cbmZ1bmN0aW9uIGNvbnZlcnRPcGxvZ0RpZmYob3Bsb2dFbnRyeSwgZGlmZiwgcHJlZml4KSB7XG4gIGlmIChsb2dEZWJ1Z01lc3NhZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYGNvbnZlcnRPcGxvZ0RpZmYoJHtKU09OLnN0cmluZ2lmeShvcGxvZ0VudHJ5KX0sICR7SlNPTi5zdHJpbmdpZnkoZGlmZil9LCAke0pTT04uc3RyaW5naWZ5KHByZWZpeCl9KWApO1xuICB9XG5cbiAgT2JqZWN0LmVudHJpZXMoZGlmZikuZm9yRWFjaCgoW2RpZmZLZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChkaWZmS2V5ID09PSAnZCcpIHtcbiAgICAgIC8vIEhhbmRsZSBgJHVuc2V0YHMuXG4gICAgICBvcGxvZ0VudHJ5LiR1bnNldCA/Pz0ge307XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBvcGxvZ0VudHJ5LiR1bnNldFtqb2luKHByZWZpeCwga2V5KV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkaWZmS2V5ID09PSAnaScpIHtcbiAgICAgIC8vIEhhbmRsZSAocG90ZW50aWFsbHkpIG5lc3RlZCBgJHNldGBzLlxuICAgICAgb3Bsb2dFbnRyeS4kc2V0ID8/PSB7fTtcbiAgICAgIGZsYXR0ZW5PYmplY3RJbnRvKG9wbG9nRW50cnkuJHNldCwgdmFsdWUsIHByZWZpeCk7XG4gICAgfSBlbHNlIGlmIChkaWZmS2V5ID09PSAndScpIHtcbiAgICAgIC8vIEhhbmRsZSBmbGF0IGAkc2V0YHMuXG4gICAgICBvcGxvZ0VudHJ5LiRzZXQgPz89IHt9O1xuICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBvcGxvZ0VudHJ5LiRzZXRbam9pbihwcmVmaXgsIGtleSldID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGFuZGxlIHMtZmllbGRzLlxuICAgICAgY29uc3Qga2V5ID0gZGlmZktleS5zbGljZSgxKTtcbiAgICAgIGlmIChpc0FycmF5T3BlcmF0b3IodmFsdWUpKSB7XG4gICAgICAgIC8vIEFycmF5IG9wZXJhdG9yLlxuICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3Bvc2l0aW9uLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICdhJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uS2V5ID0gam9pbihqb2luKHByZWZpeCwga2V5KSwgcG9zaXRpb24uc2xpY2UoMSkpO1xuICAgICAgICAgIGlmIChwb3NpdGlvblswXSA9PT0gJ3MnKSB7XG4gICAgICAgICAgICBjb252ZXJ0T3Bsb2dEaWZmKG9wbG9nRW50cnksIHZhbHVlLCBwb3NpdGlvbktleSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb3Bsb2dFbnRyeS4kdW5zZXQgPz89IHt9O1xuICAgICAgICAgICAgb3Bsb2dFbnRyeS4kdW5zZXRbcG9zaXRpb25LZXldID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3Bsb2dFbnRyeS4kc2V0ID8/PSB7fTtcbiAgICAgICAgICAgIG9wbG9nRW50cnkuJHNldFtwb3NpdGlvbktleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChrZXkpIHtcbiAgICAgICAgLy8gTmVzdGVkIG9iamVjdC5cbiAgICAgICAgY29udmVydE9wbG9nRGlmZihvcGxvZ0VudHJ5LCB2YWx1ZSwgam9pbihwcmVmaXgsIGtleSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGxvZ1YyVjFDb252ZXJ0ZXIob3Bsb2dFbnRyeSkge1xuICAvLyBQYXNzLXRocm91Z2ggdjEgYW5kIChwcm9iYWJseSkgaW52YWxpZCBlbnRyaWVzLlxuICBpZiAob3Bsb2dFbnRyeS4kdiAhPT0gMiB8fCAhb3Bsb2dFbnRyeS5kaWZmKSB7XG4gICAgcmV0dXJuIG9wbG9nRW50cnk7XG4gIH1cblxuICBjb25zdCBjb252ZXJ0ZWRPcGxvZ0VudHJ5ID0geyAkdjogMiB9O1xuICBjb252ZXJ0T3Bsb2dEaWZmKGNvbnZlcnRlZE9wbG9nRW50cnksIG9wbG9nRW50cnkuZGlmZiwgJycpO1xuICByZXR1cm4gY29udmVydGVkT3Bsb2dFbnRyeTtcbn1cbiIsIi8vIHNpbmdsZXRvblxuZXhwb3J0IGNvbnN0IExvY2FsQ29sbGVjdGlvbkRyaXZlciA9IG5ldyAoY2xhc3MgTG9jYWxDb2xsZWN0aW9uRHJpdmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ub0Nvbm5Db2xsZWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH1cblxuICBvcGVuKG5hbWUsIGNvbm4pIHtcbiAgICBpZiAoISBuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IExvY2FsQ29sbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoISBjb25uKSB7XG4gICAgICByZXR1cm4gZW5zdXJlQ29sbGVjdGlvbihuYW1lLCB0aGlzLm5vQ29ubkNvbGxlY3Rpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoISBjb25uLl9tb25nb19saXZlZGF0YV9jb2xsZWN0aW9ucykge1xuICAgICAgY29ubi5fbW9uZ29fbGl2ZWRhdGFfY29sbGVjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cblxuICAgIC8vIFhYWCBpcyB0aGVyZSBhIHdheSB0byBrZWVwIHRyYWNrIG9mIGEgY29ubmVjdGlvbidzIGNvbGxlY3Rpb25zIHdpdGhvdXRcbiAgICAvLyBkYW5nbGluZyBpdCBvZmYgdGhlIGNvbm5lY3Rpb24gb2JqZWN0P1xuICAgIHJldHVybiBlbnN1cmVDb2xsZWN0aW9uKG5hbWUsIGNvbm4uX21vbmdvX2xpdmVkYXRhX2NvbGxlY3Rpb25zKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGVuc3VyZUNvbGxlY3Rpb24obmFtZSwgY29sbGVjdGlvbnMpIHtcbiAgcmV0dXJuIChuYW1lIGluIGNvbGxlY3Rpb25zKVxuICAgID8gY29sbGVjdGlvbnNbbmFtZV1cbiAgICA6IGNvbGxlY3Rpb25zW25hbWVdID0gbmV3IExvY2FsQ29sbGVjdGlvbihuYW1lKTtcbn1cbiIsImltcG9ydCB7XG4gIEFTWU5DX0NPTExFQ1RJT05fTUVUSE9EUyxcbiAgZ2V0QXN5bmNNZXRob2ROYW1lXG59IGZyb20gXCJtZXRlb3IvbWluaW1vbmdvL2NvbnN0YW50c1wiO1xuXG5Nb25nb0ludGVybmFscy5SZW1vdGVDb2xsZWN0aW9uRHJpdmVyID0gZnVuY3Rpb24gKFxuICBtb25nb191cmwsIG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLm1vbmdvID0gbmV3IE1vbmdvQ29ubmVjdGlvbihtb25nb191cmwsIG9wdGlvbnMpO1xufTtcblxuY29uc3QgUkVNT1RFX0NPTExFQ1RJT05fTUVUSE9EUyA9IFtcbiAgJ19jcmVhdGVDYXBwZWRDb2xsZWN0aW9uJyxcbiAgJ19kcm9wSW5kZXgnLFxuICAnX2Vuc3VyZUluZGV4JyxcbiAgJ2NyZWF0ZUluZGV4JyxcbiAgJ2NvdW50RG9jdW1lbnRzJyxcbiAgJ2Ryb3BDb2xsZWN0aW9uJyxcbiAgJ2VzdGltYXRlZERvY3VtZW50Q291bnQnLFxuICAnZmluZCcsXG4gICdmaW5kT25lJyxcbiAgJ2luc2VydCcsXG4gICdyYXdDb2xsZWN0aW9uJyxcbiAgJ3JlbW92ZScsXG4gICd1cGRhdGUnLFxuICAndXBzZXJ0Jyxcbl07XG5cbk9iamVjdC5hc3NpZ24oTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlci5wcm90b3R5cGUsIHtcbiAgb3BlbjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIFJFTU9URV9DT0xMRUNUSU9OX01FVEhPRFMuZm9yRWFjaChcbiAgICAgIGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldFttXSA9IF8uYmluZChzZWxmLm1vbmdvW21dLCBzZWxmLm1vbmdvLCBuYW1lKTtcblxuICAgICAgICBpZiAoIUFTWU5DX0NPTExFQ1RJT05fTUVUSE9EUy5pbmNsdWRlcyhtKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhc3luY01ldGhvZE5hbWUgPSBnZXRBc3luY01ldGhvZE5hbWUobSk7XG4gICAgICAgIHJldFthc3luY01ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXRbbV0oLi4uYXJncykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufSk7XG5cbi8vIENyZWF0ZSB0aGUgc2luZ2xldG9uIFJlbW90ZUNvbGxlY3Rpb25Ecml2ZXIgb25seSBvbiBkZW1hbmQsIHNvIHdlXG4vLyBvbmx5IHJlcXVpcmUgTW9uZ28gY29uZmlndXJhdGlvbiBpZiBpdCdzIGFjdHVhbGx5IHVzZWQgKGVnLCBub3QgaWZcbi8vIHlvdSdyZSBvbmx5IHRyeWluZyB0byByZWNlaXZlIGRhdGEgZnJvbSBhIHJlbW90ZSBERFAgc2VydmVyLilcbk1vbmdvSW50ZXJuYWxzLmRlZmF1bHRSZW1vdGVDb2xsZWN0aW9uRHJpdmVyID0gXy5vbmNlKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbm5lY3Rpb25PcHRpb25zID0ge307XG5cbiAgdmFyIG1vbmdvVXJsID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xuXG4gIGlmIChwcm9jZXNzLmVudi5NT05HT19PUExPR19VUkwpIHtcbiAgICBjb25uZWN0aW9uT3B0aW9ucy5vcGxvZ1VybCA9IHByb2Nlc3MuZW52Lk1PTkdPX09QTE9HX1VSTDtcbiAgfVxuXG4gIGlmICghIG1vbmdvVXJsKVxuICAgIHRocm93IG5ldyBFcnJvcihcIk1PTkdPX1VSTCBtdXN0IGJlIHNldCBpbiBlbnZpcm9ubWVudFwiKTtcblxuICBjb25zdCBkcml2ZXIgPSBuZXcgTW9uZ29JbnRlcm5hbHMuUmVtb3RlQ29sbGVjdGlvbkRyaXZlcihtb25nb1VybCwgY29ubmVjdGlvbk9wdGlvbnMpO1xuXG4gIC8vIEFzIG1hbnkgZGVwbG95bWVudCB0b29scywgaW5jbHVkaW5nIE1ldGVvciBVcCwgc2VuZCByZXF1ZXN0cyB0byB0aGUgYXBwIGluXG4gIC8vIG9yZGVyIHRvIGNvbmZpcm0gdGhhdCB0aGUgZGVwbG95bWVudCBmaW5pc2hlZCBzdWNjZXNzZnVsbHksIGl0J3MgcmVxdWlyZWRcbiAgLy8gdG8ga25vdyBhYm91dCBhIGRhdGFiYXNlIGNvbm5lY3Rpb24gcHJvYmxlbSBiZWZvcmUgdGhlIGFwcCBzdGFydHMuIERvaW5nIHNvXG4gIC8vIGluIGEgYE1ldGVvci5zdGFydHVwYCBpcyBmaW5lLCBhcyB0aGUgYFdlYkFwcGAgaGFuZGxlcyByZXF1ZXN0cyBvbmx5IGFmdGVyXG4gIC8vIGFsbCBhcmUgZmluaXNoZWQuXG4gIE1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgICBQcm9taXNlLmF3YWl0KGRyaXZlci5tb25nby5jbGllbnQuY29ubmVjdCgpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRyaXZlcjtcbn0pO1xuIiwiLy8gb3B0aW9ucy5jb25uZWN0aW9uLCBpZiBnaXZlbiwgaXMgYSBMaXZlZGF0YUNsaWVudCBvciBMaXZlZGF0YVNlcnZlclxuLy8gWFhYIHByZXNlbnRseSB0aGVyZSBpcyBubyB3YXkgdG8gZGVzdHJveS9jbGVhbiB1cCBhIENvbGxlY3Rpb25cbmltcG9ydCB7XG4gIEFTWU5DX0NPTExFQ1RJT05fTUVUSE9EUyxcbiAgZ2V0QXN5bmNNZXRob2ROYW1lLFxufSBmcm9tICdtZXRlb3IvbWluaW1vbmdvL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVByb2plY3Rpb24gfSBmcm9tICcuL21vbmdvX3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB3YXJuVXNpbmdPbGRBcGkobWV0aG9kTmFtZSwgY29sbGVjdGlvbk5hbWUsIGlzQ2FsbGVkRnJvbUFzeW5jKSB7XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5XQVJOX1dIRU5fVVNJTkdfT0xEX0FQSSAmJiAvLyBhbHNvIGVuc3VyZXMgaXQgaXMgb24gdGhlIHNlcnZlclxuICAgICFpc0NhbGxlZEZyb21Bc3luYyAvLyBtdXN0IGJlIHRydWUgb3RoZXJ3aXNlIHdlIHNob3VsZCBsb2dcbiAgKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25OYW1lID09PSB1bmRlZmluZWQgfHwgY29sbGVjdGlvbk5hbWUuaW5jbHVkZXMoJ29wbG9nJykpXG4gICAgICByZXR1cm47XG4gICAgY29uc29sZS53YXJuKGBcbiAgIFxuICAgQ2FsbGluZyBtZXRob2QgJHtjb2xsZWN0aW9uTmFtZX0uJHttZXRob2ROYW1lfSBmcm9tIG9sZCBBUEkgb24gc2VydmVyLlxuICAgVGhpcyBtZXRob2Qgd2lsbCBiZSByZW1vdmVkLCBmcm9tIHRoZSBzZXJ2ZXIsIGluIHZlcnNpb24gMy5cbiAgIFRyYWNlIGlzIGJlbG93OmApO1xuICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgfVxufVxuLyoqXG4gKiBAc3VtbWFyeSBOYW1lc3BhY2UgZm9yIE1vbmdvREItcmVsYXRlZCBpdGVtc1xuICogQG5hbWVzcGFjZVxuICovXG5Nb25nbyA9IHt9O1xuXG4vKipcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdG9yIGZvciBhIENvbGxlY3Rpb25cbiAqIEBsb2N1cyBBbnl3aGVyZVxuICogQGluc3RhbmNlbmFtZSBjb2xsZWN0aW9uXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uLiAgSWYgbnVsbCwgY3JlYXRlcyBhbiB1bm1hbmFnZWQgKHVuc3luY2hyb25pemVkKSBsb2NhbCBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuY29ubmVjdGlvbiBUaGUgc2VydmVyIGNvbm5lY3Rpb24gdGhhdCB3aWxsIG1hbmFnZSB0aGlzIGNvbGxlY3Rpb24uIFVzZXMgdGhlIGRlZmF1bHQgY29ubmVjdGlvbiBpZiBub3Qgc3BlY2lmaWVkLiAgUGFzcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGNhbGxpbmcgW2BERFAuY29ubmVjdGBdKCNkZHBfY29ubmVjdCkgdG8gc3BlY2lmeSBhIGRpZmZlcmVudCBzZXJ2ZXIuIFBhc3MgYG51bGxgIHRvIHNwZWNpZnkgbm8gY29ubmVjdGlvbi4gVW5tYW5hZ2VkIChgbmFtZWAgaXMgbnVsbCkgY29sbGVjdGlvbnMgY2Fubm90IHNwZWNpZnkgYSBjb25uZWN0aW9uLlxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuaWRHZW5lcmF0aW9uIFRoZSBtZXRob2Qgb2YgZ2VuZXJhdGluZyB0aGUgYF9pZGAgZmllbGRzIG9mIG5ldyBkb2N1bWVudHMgaW4gdGhpcyBjb2xsZWN0aW9uLiAgUG9zc2libGUgdmFsdWVzOlxuXG4gLSAqKmAnU1RSSU5HJ2AqKjogcmFuZG9tIHN0cmluZ3NcbiAtICoqYCdNT05HTydgKio6ICByYW5kb20gW2BNb25nby5PYmplY3RJRGBdKCNtb25nb19vYmplY3RfaWQpIHZhbHVlc1xuXG5UaGUgZGVmYXVsdCBpZCBnZW5lcmF0aW9uIHRlY2huaXF1ZSBpcyBgJ1NUUklORydgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy50cmFuc2Zvcm0gQW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIERvY3VtZW50cyB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gYmVmb3JlIGJlaW5nIHJldHVybmVkIGZyb20gYGZldGNoYCBvciBgZmluZE9uZWAsIGFuZCBiZWZvcmUgYmVpbmcgcGFzc2VkIHRvIGNhbGxiYWNrcyBvZiBgb2JzZXJ2ZWAsIGBtYXBgLCBgZm9yRWFjaGAsIGBhbGxvd2AsIGFuZCBgZGVueWAuIFRyYW5zZm9ybXMgYXJlICpub3QqIGFwcGxpZWQgZm9yIHRoZSBjYWxsYmFja3Mgb2YgYG9ic2VydmVDaGFuZ2VzYCBvciB0byBjdXJzb3JzIHJldHVybmVkIGZyb20gcHVibGlzaCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZGVmaW5lTXV0YXRpb25NZXRob2RzIFNldCB0byBgZmFsc2VgIHRvIHNraXAgc2V0dGluZyB1cCB0aGUgbXV0YXRpb24gbWV0aG9kcyB0aGF0IGVuYWJsZSBpbnNlcnQvdXBkYXRlL3JlbW92ZSBmcm9tIGNsaWVudCBjb2RlLiBEZWZhdWx0IGB0cnVlYC5cbiAqL1xuTW9uZ28uQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIENvbGxlY3Rpb24obmFtZSwgb3B0aW9ucykge1xuICBpZiAoIW5hbWUgJiYgbmFtZSAhPT0gbnVsbCkge1xuICAgIE1ldGVvci5fZGVidWcoXG4gICAgICAnV2FybmluZzogY3JlYXRpbmcgYW5vbnltb3VzIGNvbGxlY3Rpb24uIEl0IHdpbGwgbm90IGJlICcgK1xuICAgICAgICAnc2F2ZWQgb3Igc3luY2hyb25pemVkIG92ZXIgdGhlIG5ldHdvcmsuIChQYXNzIG51bGwgZm9yICcgK1xuICAgICAgICAndGhlIGNvbGxlY3Rpb24gbmFtZSB0byB0dXJuIG9mZiB0aGlzIHdhcm5pbmcuKSdcbiAgICApO1xuICAgIG5hbWUgPSBudWxsO1xuICB9XG5cbiAgaWYgKG5hbWUgIT09IG51bGwgJiYgdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0ZpcnN0IGFyZ3VtZW50IHRvIG5ldyBNb25nby5Db2xsZWN0aW9uIG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbCdcbiAgICApO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tZXRob2RzKSB7XG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgaGFjayB3aXRoIG9yaWdpbmFsIHNpZ25hdHVyZSAod2hpY2ggcGFzc2VkXG4gICAgLy8gXCJjb25uZWN0aW9uXCIgZGlyZWN0bHkgaW5zdGVhZCBvZiBpbiBvcHRpb25zLiAoQ29ubmVjdGlvbnMgbXVzdCBoYXZlIGEgXCJtZXRob2RzXCJcbiAgICAvLyBtZXRob2QuKVxuICAgIC8vIFhYWCByZW1vdmUgYmVmb3JlIDEuMFxuICAgIG9wdGlvbnMgPSB7IGNvbm5lY3Rpb246IG9wdGlvbnMgfTtcbiAgfVxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogXCJjb25uZWN0aW9uXCIgdXNlZCB0byBiZSBjYWxsZWQgXCJtYW5hZ2VyXCIuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMubWFuYWdlciAmJiAhb3B0aW9ucy5jb25uZWN0aW9uKSB7XG4gICAgb3B0aW9ucy5jb25uZWN0aW9uID0gb3B0aW9ucy5tYW5hZ2VyO1xuICB9XG5cbiAgb3B0aW9ucyA9IHtcbiAgICBjb25uZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgaWRHZW5lcmF0aW9uOiAnU1RSSU5HJyxcbiAgICB0cmFuc2Zvcm06IG51bGwsXG4gICAgX2RyaXZlcjogdW5kZWZpbmVkLFxuICAgIF9wcmV2ZW50QXV0b3B1Ymxpc2g6IGZhbHNlLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgc3dpdGNoIChvcHRpb25zLmlkR2VuZXJhdGlvbikge1xuICAgIGNhc2UgJ01PTkdPJzpcbiAgICAgIHRoaXMuX21ha2VOZXdJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gbmFtZVxuICAgICAgICAgID8gRERQLnJhbmRvbVN0cmVhbSgnL2NvbGxlY3Rpb24vJyArIG5hbWUpXG4gICAgICAgICAgOiBSYW5kb20uaW5zZWN1cmU7XG4gICAgICAgIHJldHVybiBuZXcgTW9uZ28uT2JqZWN0SUQoc3JjLmhleFN0cmluZygyNCkpO1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1NUUklORyc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMuX21ha2VOZXdJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gbmFtZVxuICAgICAgICAgID8gRERQLnJhbmRvbVN0cmVhbSgnL2NvbGxlY3Rpb24vJyArIG5hbWUpXG4gICAgICAgICAgOiBSYW5kb20uaW5zZWN1cmU7XG4gICAgICAgIHJldHVybiBzcmMuaWQoKTtcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHRoaXMuX3RyYW5zZm9ybSA9IExvY2FsQ29sbGVjdGlvbi53cmFwVHJhbnNmb3JtKG9wdGlvbnMudHJhbnNmb3JtKTtcblxuICBpZiAoIW5hbWUgfHwgb3B0aW9ucy5jb25uZWN0aW9uID09PSBudWxsKVxuICAgIC8vIG5vdGU6IG5hbWVsZXNzIGNvbGxlY3Rpb25zIG5ldmVyIGhhdmUgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IG51bGw7XG4gIGVsc2UgaWYgKG9wdGlvbnMuY29ubmVjdGlvbikgdGhpcy5fY29ubmVjdGlvbiA9IG9wdGlvbnMuY29ubmVjdGlvbjtcbiAgZWxzZSBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB0aGlzLl9jb25uZWN0aW9uID0gTWV0ZW9yLmNvbm5lY3Rpb247XG4gIGVsc2UgdGhpcy5fY29ubmVjdGlvbiA9IE1ldGVvci5zZXJ2ZXI7XG5cbiAgaWYgKCFvcHRpb25zLl9kcml2ZXIpIHtcbiAgICAvLyBYWFggVGhpcyBjaGVjayBhc3N1bWVzIHRoYXQgd2ViYXBwIGlzIGxvYWRlZCBzbyB0aGF0IE1ldGVvci5zZXJ2ZXIgIT09XG4gICAgLy8gbnVsbC4gV2Ugc2hvdWxkIGZ1bGx5IHN1cHBvcnQgdGhlIGNhc2Ugb2YgXCJ3YW50IHRvIHVzZSBhIE1vbmdvLWJhY2tlZFxuICAgIC8vIGNvbGxlY3Rpb24gZnJvbSBOb2RlIGNvZGUgd2l0aG91dCB3ZWJhcHBcIiwgYnV0IHdlIGRvbid0IHlldC5cbiAgICAvLyAjTWV0ZW9yU2VydmVyTnVsbFxuICAgIGlmIChcbiAgICAgIG5hbWUgJiZcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPT09IE1ldGVvci5zZXJ2ZXIgJiZcbiAgICAgIHR5cGVvZiBNb25nb0ludGVybmFscyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIE1vbmdvSW50ZXJuYWxzLmRlZmF1bHRSZW1vdGVDb2xsZWN0aW9uRHJpdmVyXG4gICAgKSB7XG4gICAgICBvcHRpb25zLl9kcml2ZXIgPSBNb25nb0ludGVybmFscy5kZWZhdWx0UmVtb3RlQ29sbGVjdGlvbkRyaXZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IExvY2FsQ29sbGVjdGlvbkRyaXZlciB9ID0gcmVxdWlyZSgnLi9sb2NhbF9jb2xsZWN0aW9uX2RyaXZlci5qcycpO1xuICAgICAgb3B0aW9ucy5fZHJpdmVyID0gTG9jYWxDb2xsZWN0aW9uRHJpdmVyO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2NvbGxlY3Rpb24gPSBvcHRpb25zLl9kcml2ZXIub3BlbihuYW1lLCB0aGlzLl9jb25uZWN0aW9uKTtcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2RyaXZlciA9IG9wdGlvbnMuX2RyaXZlcjtcblxuICB0aGlzLl9tYXliZVNldFVwUmVwbGljYXRpb24obmFtZSwgb3B0aW9ucyk7XG5cbiAgLy8gWFhYIGRvbid0IGRlZmluZSB0aGVzZSB1bnRpbCBhbGxvdyBvciBkZW55IGlzIGFjdHVhbGx5IHVzZWQgZm9yIHRoaXNcbiAgLy8gY29sbGVjdGlvbi4gQ291bGQgYmUgaGFyZCBpZiB0aGUgc2VjdXJpdHkgcnVsZXMgYXJlIG9ubHkgZGVmaW5lZCBvbiB0aGVcbiAgLy8gc2VydmVyLlxuICBpZiAob3B0aW9ucy5kZWZpbmVNdXRhdGlvbk1ldGhvZHMgIT09IGZhbHNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2RlZmluZU11dGF0aW9uTWV0aG9kcyh7XG4gICAgICAgIHVzZUV4aXN0aW5nOiBvcHRpb25zLl9zdXBwcmVzc1NhbWVOYW1lRXJyb3IgPT09IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVGhyb3cgYSBtb3JlIHVuZGVyc3RhbmRhYmxlIGVycm9yIG9uIHRoZSBzZXJ2ZXIgZm9yIHNhbWUgY29sbGVjdGlvbiBuYW1lXG4gICAgICBpZiAoXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPT09IGBBIG1ldGhvZCBuYW1lZCAnLyR7bmFtZX0vaW5zZXJ0JyBpcyBhbHJlYWR5IGRlZmluZWRgXG4gICAgICApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgYWxyZWFkeSBhIGNvbGxlY3Rpb24gbmFtZWQgXCIke25hbWV9XCJgKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1dG9wdWJsaXNoXG4gIGlmIChcbiAgICBQYWNrYWdlLmF1dG9wdWJsaXNoICYmXG4gICAgIW9wdGlvbnMuX3ByZXZlbnRBdXRvcHVibGlzaCAmJlxuICAgIHRoaXMuX2Nvbm5lY3Rpb24gJiZcbiAgICB0aGlzLl9jb25uZWN0aW9uLnB1Ymxpc2hcbiAgKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbi5wdWJsaXNoKG51bGwsICgpID0+IHRoaXMuZmluZCgpLCB7XG4gICAgICBpc19hdXRvOiB0cnVlLFxuICAgIH0pO1xuICB9XG59O1xuXG5PYmplY3QuYXNzaWduKE1vbmdvLkNvbGxlY3Rpb24ucHJvdG90eXBlLCB7XG4gIF9tYXliZVNldFVwUmVwbGljYXRpb24obmFtZSwgeyBfc3VwcHJlc3NTYW1lTmFtZUVycm9yID0gZmFsc2UgfSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghKHNlbGYuX2Nvbm5lY3Rpb24gJiYgc2VsZi5fY29ubmVjdGlvbi5yZWdpc3RlclN0b3JlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9LLCB3ZSdyZSBnb2luZyB0byBiZSBhIHNsYXZlLCByZXBsaWNhdGluZyBzb21lIHJlbW90ZVxuICAgIC8vIGRhdGFiYXNlLCBleGNlcHQgcG9zc2libHkgd2l0aCBzb21lIHRlbXBvcmFyeSBkaXZlcmdlbmNlIHdoaWxlXG4gICAgLy8gd2UgaGF2ZSB1bmFja25vd2xlZGdlZCBSUEMncy5cbiAgICBjb25zdCBvayA9IHNlbGYuX2Nvbm5lY3Rpb24ucmVnaXN0ZXJTdG9yZShuYW1lLCB7XG4gICAgICAvLyBDYWxsZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBhIGJhdGNoIG9mIHVwZGF0ZXMuIGJhdGNoU2l6ZSBpcyB0aGUgbnVtYmVyXG4gICAgICAvLyBvZiB1cGRhdGUgY2FsbHMgdG8gZXhwZWN0LlxuICAgICAgLy9cbiAgICAgIC8vIFhYWCBUaGlzIGludGVyZmFjZSBpcyBwcmV0dHkgamFua3kuIHJlc2V0IHByb2JhYmx5IG91Z2h0IHRvIGdvIGJhY2sgdG9cbiAgICAgIC8vIGJlaW5nIGl0cyBvd24gZnVuY3Rpb24sIGFuZCBjYWxsZXJzIHNob3VsZG4ndCBoYXZlIHRvIGNhbGN1bGF0ZVxuICAgICAgLy8gYmF0Y2hTaXplLiBUaGUgb3B0aW1pemF0aW9uIG9mIG5vdCBjYWxsaW5nIHBhdXNlL3JlbW92ZSBzaG91bGQgYmVcbiAgICAgIC8vIGRlbGF5ZWQgdW50aWwgbGF0ZXI6IHRoZSBmaXJzdCBjYWxsIHRvIHVwZGF0ZSgpIHNob3VsZCBidWZmZXIgaXRzXG4gICAgICAvLyBtZXNzYWdlLCBhbmQgdGhlbiB3ZSBjYW4gZWl0aGVyIGRpcmVjdGx5IGFwcGx5IGl0IGF0IGVuZFVwZGF0ZSB0aW1lIGlmXG4gICAgICAvLyBpdCB3YXMgdGhlIG9ubHkgdXBkYXRlLCBvciBkbyBwYXVzZU9ic2VydmVycy9hcHBseS9hcHBseSBhdCB0aGUgbmV4dFxuICAgICAgLy8gdXBkYXRlKCkgaWYgdGhlcmUncyBhbm90aGVyIG9uZS5cbiAgICAgIGJlZ2luVXBkYXRlKGJhdGNoU2l6ZSwgcmVzZXQpIHtcbiAgICAgICAgLy8gcGF1c2Ugb2JzZXJ2ZXJzIHNvIHVzZXJzIGRvbid0IHNlZSBmbGlja2VyIHdoZW4gdXBkYXRpbmcgc2V2ZXJhbFxuICAgICAgICAvLyBvYmplY3RzIGF0IG9uY2UgKGluY2x1ZGluZyB0aGUgcG9zdC1yZWNvbm5lY3QgcmVzZXQtYW5kLXJlYXBwbHlcbiAgICAgICAgLy8gc3RhZ2UpLCBhbmQgc28gdGhhdCBhIHJlLXNvcnRpbmcgb2YgYSBxdWVyeSBjYW4gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlXG4gICAgICAgIC8vIGZ1bGwgX2RpZmZRdWVyeSBtb3ZlZCBjYWxjdWxhdGlvbiBpbnN0ZWFkIG9mIGFwcGx5aW5nIGNoYW5nZSBvbmUgYXQgYVxuICAgICAgICAvLyB0aW1lLlxuICAgICAgICBpZiAoYmF0Y2hTaXplID4gMSB8fCByZXNldCkgc2VsZi5fY29sbGVjdGlvbi5wYXVzZU9ic2VydmVycygpO1xuXG4gICAgICAgIGlmIChyZXNldCkgc2VsZi5fY29sbGVjdGlvbi5yZW1vdmUoe30pO1xuICAgICAgfSxcblxuICAgICAgLy8gQXBwbHkgYW4gdXBkYXRlLlxuICAgICAgLy8gWFhYIGJldHRlciBzcGVjaWZ5IHRoaXMgaW50ZXJmYWNlIChub3QgaW4gdGVybXMgb2YgYSB3aXJlIG1lc3NhZ2UpP1xuICAgICAgdXBkYXRlKG1zZykge1xuICAgICAgICB2YXIgbW9uZ29JZCA9IE1vbmdvSUQuaWRQYXJzZShtc2cuaWQpO1xuICAgICAgICB2YXIgZG9jID0gc2VsZi5fY29sbGVjdGlvbi5fZG9jcy5nZXQobW9uZ29JZCk7XG5cbiAgICAgICAgLy9XaGVuIHRoZSBzZXJ2ZXIncyBtZXJnZWJveCBpcyBkaXNhYmxlZCBmb3IgYSBjb2xsZWN0aW9uLCB0aGUgY2xpZW50IG11c3QgZ3JhY2VmdWxseSBoYW5kbGUgaXQgd2hlbjpcbiAgICAgICAgLy8gKldlIHJlY2VpdmUgYW4gYWRkZWQgbWVzc2FnZSBmb3IgYSBkb2N1bWVudCB0aGF0IGlzIGFscmVhZHkgdGhlcmUuIEluc3RlYWQsIGl0IHdpbGwgYmUgY2hhbmdlZFxuICAgICAgICAvLyAqV2UgcmVlaXZlIGEgY2hhbmdlIG1lc3NhZ2UgZm9yIGEgZG9jdW1lbnQgdGhhdCBpcyBub3QgdGhlcmUuIEluc3RlYWQsIGl0IHdpbGwgYmUgYWRkZWRcbiAgICAgICAgLy8gKldlIHJlY2VpdmUgYSByZW1vdmVkIG1lc3NzYWdlIGZvciBhIGRvY3VtZW50IHRoYXQgaXMgbm90IHRoZXJlLiBJbnN0ZWFkLCBub3Rpbmcgd2lsIGhhcHBlbi5cblxuICAgICAgICAvL0NvZGUgaXMgZGVyaXZlZCBmcm9tIGNsaWVudC1zaWRlIGNvZGUgb3JpZ2luYWxseSBpbiBwZWVybGlicmFyeTpjb250cm9sLW1lcmdlYm94XG4gICAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL3BlZXJsaWJyYXJ5L21ldGVvci1jb250cm9sLW1lcmdlYm94L2Jsb2IvbWFzdGVyL2NsaWVudC5jb2ZmZWVcblxuICAgICAgICAvL0ZvciBtb3JlIGluZm9ybWF0aW9uLCByZWZlciB0byBkaXNjdXNzaW9uIFwiSW5pdGlhbCBzdXBwb3J0IGZvciBwdWJsaWNhdGlvbiBzdHJhdGVnaWVzIGluIGxpdmVkYXRhIHNlcnZlclwiOlxuICAgICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL3B1bGwvMTExNTFcbiAgICAgICAgaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICAgICAgICAgIGlmIChtc2cubXNnID09PSAnYWRkZWQnICYmIGRvYykge1xuICAgICAgICAgICAgbXNnLm1zZyA9ICdjaGFuZ2VkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKG1zZy5tc2cgPT09ICdyZW1vdmVkJyAmJiAhZG9jKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChtc2cubXNnID09PSAnY2hhbmdlZCcgJiYgIWRvYykge1xuICAgICAgICAgICAgbXNnLm1zZyA9ICdhZGRlZCc7XG4gICAgICAgICAgICBfcmVmID0gbXNnLmZpZWxkcztcbiAgICAgICAgICAgIGZvciAoZmllbGQgaW4gX3JlZikge1xuICAgICAgICAgICAgICB2YWx1ZSA9IF9yZWZbZmllbGRdO1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtc2cuZmllbGRzW2ZpZWxkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHRoaXMgYSBcInJlcGxhY2UgdGhlIHdob2xlIGRvY1wiIG1lc3NhZ2UgY29taW5nIGZyb20gdGhlIHF1aWVzY2VuY2VcbiAgICAgICAgLy8gb2YgbWV0aG9kIHdyaXRlcyB0byBhbiBvYmplY3Q/IChOb3RlIHRoYXQgJ3VuZGVmaW5lZCcgaXMgYSB2YWxpZFxuICAgICAgICAvLyB2YWx1ZSBtZWFuaW5nIFwicmVtb3ZlIGl0XCIuKVxuICAgICAgICBpZiAobXNnLm1zZyA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2UgPSBtc2cucmVwbGFjZTtcbiAgICAgICAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgICAgICAgIGlmIChkb2MpIHNlbGYuX2NvbGxlY3Rpb24ucmVtb3ZlKG1vbmdvSWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWRvYykge1xuICAgICAgICAgICAgc2VsZi5fY29sbGVjdGlvbi5pbnNlcnQocmVwbGFjZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFhYWCBjaGVjayB0aGF0IHJlcGxhY2UgaGFzIG5vICQgb3BzXG4gICAgICAgICAgICBzZWxmLl9jb2xsZWN0aW9uLnVwZGF0ZShtb25nb0lkLCByZXBsYWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5tc2cgPT09ICdhZGRlZCcpIHtcbiAgICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdFeHBlY3RlZCBub3QgdG8gZmluZCBhIGRvY3VtZW50IGFscmVhZHkgcHJlc2VudCBmb3IgYW4gYWRkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5fY29sbGVjdGlvbi5pbnNlcnQoeyBfaWQ6IG1vbmdvSWQsIC4uLm1zZy5maWVsZHMgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnLm1zZyA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICAgICAgaWYgKCFkb2MpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdFeHBlY3RlZCB0byBmaW5kIGEgZG9jdW1lbnQgYWxyZWFkeSBwcmVzZW50IGZvciByZW1vdmVkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICBzZWxmLl9jb2xsZWN0aW9uLnJlbW92ZShtb25nb0lkKTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cubXNnID09PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICBpZiAoIWRvYykgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0byBmaW5kIGEgZG9jdW1lbnQgdG8gY2hhbmdlJyk7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1zZy5maWVsZHMpO1xuICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBtb2RpZmllciA9IHt9O1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbXNnLmZpZWxkc1trZXldO1xuICAgICAgICAgICAgICBpZiAoRUpTT04uZXF1YWxzKGRvY1trZXldLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLiR1bnNldCkge1xuICAgICAgICAgICAgICAgICAgbW9kaWZpZXIuJHVuc2V0ID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZGlmaWVyLiR1bnNldFtrZXldID0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLiRzZXQpIHtcbiAgICAgICAgICAgICAgICAgIG1vZGlmaWVyLiRzZXQgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kaWZpZXIuJHNldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vZGlmaWVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NvbGxlY3Rpb24udXBkYXRlKG1vbmdvSWQsIG1vZGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSSBkb24ndCBrbm93IGhvdyB0byBkZWFsIHdpdGggdGhpcyBtZXNzYWdlXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyBDYWxsZWQgYXQgdGhlIGVuZCBvZiBhIGJhdGNoIG9mIHVwZGF0ZXMuXG4gICAgICBlbmRVcGRhdGUoKSB7XG4gICAgICAgIHNlbGYuX2NvbGxlY3Rpb24ucmVzdW1lT2JzZXJ2ZXJzKCk7XG4gICAgICB9LFxuXG4gICAgICAvLyBDYWxsZWQgYXJvdW5kIG1ldGhvZCBzdHViIGludm9jYXRpb25zIHRvIGNhcHR1cmUgdGhlIG9yaWdpbmFsIHZlcnNpb25zXG4gICAgICAvLyBvZiBtb2RpZmllZCBkb2N1bWVudHMuXG4gICAgICBzYXZlT3JpZ2luYWxzKCkge1xuICAgICAgICBzZWxmLl9jb2xsZWN0aW9uLnNhdmVPcmlnaW5hbHMoKTtcbiAgICAgIH0sXG4gICAgICByZXRyaWV2ZU9yaWdpbmFscygpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX2NvbGxlY3Rpb24ucmV0cmlldmVPcmlnaW5hbHMoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIFVzZWQgdG8gcHJlc2VydmUgY3VycmVudCB2ZXJzaW9ucyBvZiBkb2N1bWVudHMgYWNyb3NzIGEgc3RvcmUgcmVzZXQuXG4gICAgICBnZXREb2MoaWQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuZmluZE9uZShpZCk7XG4gICAgICB9LFxuXG4gICAgICAvLyBUbyBiZSBhYmxlIHRvIGdldCBiYWNrIHRvIHRoZSBjb2xsZWN0aW9uIGZyb20gdGhlIHN0b3JlLlxuICAgICAgX2dldENvbGxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghb2spIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlcmUgaXMgYWxyZWFkeSBhIGNvbGxlY3Rpb24gbmFtZWQgXCIke25hbWV9XCJgO1xuICAgICAgaWYgKF9zdXBwcmVzc1NhbWVOYW1lRXJyb3IgPT09IHRydWUpIHtcbiAgICAgICAgLy8gWFhYIEluIHRoZW9yeSB3ZSBkbyBub3QgaGF2ZSB0byB0aHJvdyB3aGVuIGBva2AgaXMgZmFsc3kuIFRoZVxuICAgICAgICAvLyBzdG9yZSBpcyBhbHJlYWR5IGRlZmluZWQgZm9yIHRoaXMgY29sbGVjdGlvbiBuYW1lLCBidXQgdGhpc1xuICAgICAgICAvLyB3aWxsIHNpbXBseSBiZSBhbm90aGVyIHJlZmVyZW5jZSB0byBpdCBhbmQgZXZlcnl0aGluZyBzaG91bGRcbiAgICAgICAgLy8gd29yay4gSG93ZXZlciwgd2UgaGF2ZSBoaXN0b3JpY2FsbHkgdGhyb3duIGFuIGVycm9yIGhlcmUsIHNvXG4gICAgICAgIC8vIGZvciBub3cgd2Ugd2lsbCBza2lwIHRoZSBlcnJvciBvbmx5IHdoZW4gX3N1cHByZXNzU2FtZU5hbWVFcnJvclxuICAgICAgICAvLyBpcyBgdHJ1ZWAsIGFsbG93aW5nIHBlb3BsZSB0byBvcHQgaW4gYW5kIGdpdmUgdGhpcyBzb21lIHJlYWxcbiAgICAgICAgLy8gd29ybGQgdGVzdGluZy5cbiAgICAgICAgY29uc29sZS53YXJuID8gY29uc29sZS53YXJuKG1lc3NhZ2UpIDogY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vL1xuICAvLy8gTWFpbiBjb2xsZWN0aW9uIEFQSVxuICAvLy9cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEdldHMgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgbWF0Y2hpbmcgdGhlIGZpbHRlci4gRm9yIGEgZmFzdCBjb3VudCBvZiB0aGUgdG90YWwgZG9jdW1lbnRzIGluIGEgY29sbGVjdGlvbiBzZWUgYGVzdGltYXRlZERvY3VtZW50Q291bnRgLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCBjb3VudERvY3VtZW50c1xuICAgKiBAbWVtYmVyb2YgTW9uZ28uQ29sbGVjdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtNb25nb1NlbGVjdG9yfSBbc2VsZWN0b3JdIEEgcXVlcnkgZGVzY3JpYmluZyB0aGUgZG9jdW1lbnRzIHRvIGNvdW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQWxsIG9wdGlvbnMgYXJlIGxpc3RlZCBpbiBbTW9uZ29EQiBkb2N1bWVudGF0aW9uXShodHRwczovL21vbmdvZGIuZ2l0aHViLmlvL25vZGUtbW9uZ29kYi1uYXRpdmUvNC4xMS9pbnRlcmZhY2VzL0NvdW50RG9jdW1lbnRzT3B0aW9ucy5odG1sKS4gUGxlYXNlIG5vdGUgdGhhdCBub3QgYWxsIG9mIHRoZW0gYXJlIGF2YWlsYWJsZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgY291bnREb2N1bWVudHMoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uLmNvdW50RG9jdW1lbnRzKC4uLmFyZ3MpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBHZXRzIGFuIGVzdGltYXRlIG9mIHRoZSBjb3VudCBvZiBkb2N1bWVudHMgaW4gYSBjb2xsZWN0aW9uIHVzaW5nIGNvbGxlY3Rpb24gbWV0YWRhdGEuIEZvciBhbiBleGFjdCBjb3VudCBvZiB0aGUgZG9jdW1lbnRzIGluIGEgY29sbGVjdGlvbiBzZWUgYGNvdW50RG9jdW1lbnRzYC5cbiAgICogQGxvY3VzIEFueXdoZXJlXG4gICAqIEBtZXRob2QgZXN0aW1hdGVkRG9jdW1lbnRDb3VudFxuICAgKiBAbWVtYmVyb2YgTW9uZ28uQ29sbGVjdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBbGwgb3B0aW9ucyBhcmUgbGlzdGVkIGluIFtNb25nb0RCIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vbW9uZ29kYi5naXRodWIuaW8vbm9kZS1tb25nb2RiLW5hdGl2ZS80LjExL2ludGVyZmFjZXMvRXN0aW1hdGVkRG9jdW1lbnRDb3VudE9wdGlvbnMuaHRtbCkuIFBsZWFzZSBub3RlIHRoYXQgbm90IGFsbCBvZiB0aGVtIGFyZSBhdmFpbGFibGUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGVzdGltYXRlZERvY3VtZW50Q291bnQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uLmVzdGltYXRlZERvY3VtZW50Q291bnQoLi4uYXJncyk7XG4gIH0sXG5cbiAgX2dldEZpbmRTZWxlY3RvcihhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09IDApIHJldHVybiB7fTtcbiAgICBlbHNlIHJldHVybiBhcmdzWzBdO1xuICB9LFxuXG4gIF9nZXRGaW5kT3B0aW9ucyhhcmdzKSB7XG4gICAgY29uc3QgWywgb3B0aW9uc10gPSBhcmdzIHx8IFtdO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSBub3JtYWxpemVQcm9qZWN0aW9uKG9wdGlvbnMpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7IHRyYW5zZm9ybTogc2VsZi5fdHJhbnNmb3JtIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrKFxuICAgICAgICBuZXdPcHRpb25zLFxuICAgICAgICBNYXRjaC5PcHRpb25hbChcbiAgICAgICAgICBNYXRjaC5PYmplY3RJbmNsdWRpbmcoe1xuICAgICAgICAgICAgcHJvamVjdGlvbjogTWF0Y2guT3B0aW9uYWwoTWF0Y2guT25lT2YoT2JqZWN0LCB1bmRlZmluZWQpKSxcbiAgICAgICAgICAgIHNvcnQ6IE1hdGNoLk9wdGlvbmFsKFxuICAgICAgICAgICAgICBNYXRjaC5PbmVPZihPYmplY3QsIEFycmF5LCBGdW5jdGlvbiwgdW5kZWZpbmVkKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGxpbWl0OiBNYXRjaC5PcHRpb25hbChNYXRjaC5PbmVPZihOdW1iZXIsIHVuZGVmaW5lZCkpLFxuICAgICAgICAgICAgc2tpcDogTWF0Y2guT3B0aW9uYWwoTWF0Y2guT25lT2YoTnVtYmVyLCB1bmRlZmluZWQpKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IHNlbGYuX3RyYW5zZm9ybSxcbiAgICAgICAgLi4ubmV3T3B0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBGaW5kIHRoZSBkb2N1bWVudHMgaW4gYSBjb2xsZWN0aW9uIHRoYXQgbWF0Y2ggdGhlIHNlbGVjdG9yLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCBmaW5kXG4gICAqIEBtZW1iZXJvZiBNb25nby5Db2xsZWN0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge01vbmdvU2VsZWN0b3J9IFtzZWxlY3Rvcl0gQSBxdWVyeSBkZXNjcmliaW5nIHRoZSBkb2N1bWVudHMgdG8gZmluZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TW9uZ29Tb3J0U3BlY2lmaWVyfSBvcHRpb25zLnNvcnQgU29ydCBvcmRlciAoZGVmYXVsdDogbmF0dXJhbCBvcmRlcilcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuc2tpcCBOdW1iZXIgb2YgcmVzdWx0cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMubGltaXQgTWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cbiAgICogQHBhcmFtIHtNb25nb0ZpZWxkU3BlY2lmaWVyfSBvcHRpb25zLmZpZWxkcyBEaWN0aW9uYXJ5IG9mIGZpZWxkcyB0byByZXR1cm4gb3IgZXhjbHVkZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnJlYWN0aXZlIChDbGllbnQgb25seSkgRGVmYXVsdCBgdHJ1ZWA7IHBhc3MgYGZhbHNlYCB0byBkaXNhYmxlIHJlYWN0aXZpdHlcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy50cmFuc2Zvcm0gT3ZlcnJpZGVzIGB0cmFuc2Zvcm1gIG9uIHRoZSAgW2BDb2xsZWN0aW9uYF0oI2NvbGxlY3Rpb25zKSBmb3IgdGhpcyBjdXJzb3IuICBQYXNzIGBudWxsYCB0byBkaXNhYmxlIHRyYW5zZm9ybWF0aW9uLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZGlzYWJsZU9wbG9nIChTZXJ2ZXIgb25seSkgUGFzcyB0cnVlIHRvIGRpc2FibGUgb3Bsb2ctdGFpbGluZyBvbiB0aGlzIHF1ZXJ5LiBUaGlzIGFmZmVjdHMgdGhlIHdheSBzZXJ2ZXIgcHJvY2Vzc2VzIGNhbGxzIHRvIGBvYnNlcnZlYCBvbiB0aGlzIHF1ZXJ5LiBEaXNhYmxpbmcgdGhlIG9wbG9nIGNhbiBiZSB1c2VmdWwgd2hlbiB3b3JraW5nIHdpdGggZGF0YSB0aGF0IHVwZGF0ZXMgaW4gbGFyZ2UgYmF0Y2hlcy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucG9sbGluZ0ludGVydmFsTXMgKFNlcnZlciBvbmx5KSBXaGVuIG9wbG9nIGlzIGRpc2FibGVkICh0aHJvdWdoIHRoZSB1c2Ugb2YgYGRpc2FibGVPcGxvZ2Agb3Igd2hlbiBvdGhlcndpc2Ugbm90IGF2YWlsYWJsZSksIHRoZSBmcmVxdWVuY3kgKGluIG1pbGxpc2Vjb25kcykgb2YgaG93IG9mdGVuIHRvIHBvbGwgdGhpcyBxdWVyeSB3aGVuIG9ic2VydmluZyBvbiB0aGUgc2VydmVyLiBEZWZhdWx0cyB0byAxMDAwMG1zICgxMCBzZWNvbmRzKS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucG9sbGluZ1Rocm90dGxlTXMgKFNlcnZlciBvbmx5KSBXaGVuIG9wbG9nIGlzIGRpc2FibGVkICh0aHJvdWdoIHRoZSB1c2Ugb2YgYGRpc2FibGVPcGxvZ2Agb3Igd2hlbiBvdGhlcndpc2Ugbm90IGF2YWlsYWJsZSksIHRoZSBtaW5pbXVtIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gYWxsb3cgYmV0d2VlbiByZS1wb2xsaW5nIHdoZW4gb2JzZXJ2aW5nIG9uIHRoZSBzZXJ2ZXIuIEluY3JlYXNpbmcgdGhpcyB3aWxsIHNhdmUgQ1BVIGFuZCBtb25nbyBsb2FkIGF0IHRoZSBleHBlbnNlIG9mIHNsb3dlciB1cGRhdGVzIHRvIHVzZXJzLiBEZWNyZWFzaW5nIHRoaXMgaXMgbm90IHJlY29tbWVuZGVkLiBEZWZhdWx0cyB0byA1MG1zLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5tYXhUaW1lTXMgKFNlcnZlciBvbmx5KSBJZiBzZXQsIGluc3RydWN0cyBNb25nb0RCIHRvIHNldCBhIHRpbWUgbGltaXQgZm9yIHRoaXMgY3Vyc29yJ3Mgb3BlcmF0aW9ucy4gSWYgdGhlIG9wZXJhdGlvbiByZWFjaGVzIHRoZSBzcGVjaWZpZWQgdGltZSBsaW1pdCAoaW4gbWlsbGlzZWNvbmRzKSB3aXRob3V0IHRoZSBoYXZpbmcgYmVlbiBjb21wbGV0ZWQsIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93bi4gVXNlZnVsIHRvIHByZXZlbnQgYW4gKGFjY2lkZW50YWwgb3IgbWFsaWNpb3VzKSB1bm9wdGltaXplZCBxdWVyeSBmcm9tIGNhdXNpbmcgYSBmdWxsIGNvbGxlY3Rpb24gc2NhbiB0aGF0IHdvdWxkIGRpc3J1cHQgb3RoZXIgZGF0YWJhc2UgdXNlcnMsIGF0IHRoZSBleHBlbnNlIG9mIG5lZWRpbmcgdG8gaGFuZGxlIHRoZSByZXN1bHRpbmcgZXJyb3IuXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gb3B0aW9ucy5oaW50IChTZXJ2ZXIgb25seSkgT3ZlcnJpZGVzIE1vbmdvREIncyBkZWZhdWx0IGluZGV4IHNlbGVjdGlvbiBhbmQgcXVlcnkgb3B0aW1pemF0aW9uIHByb2Nlc3MuIFNwZWNpZnkgYW4gaW5kZXggdG8gZm9yY2UgaXRzIHVzZSwgZWl0aGVyIGJ5IGl0cyBuYW1lIG9yIGluZGV4IHNwZWNpZmljYXRpb24uIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGB7ICRuYXR1cmFsIDogMSB9YCB0byBmb3JjZSBhIGZvcndhcmRzIGNvbGxlY3Rpb24gc2Nhbiwgb3IgYHsgJG5hdHVyYWwgOiAtMSB9YCBmb3IgYSByZXZlcnNlIGNvbGxlY3Rpb24gc2Nhbi4gU2V0dGluZyB0aGlzIGlzIG9ubHkgcmVjb21tZW5kZWQgZm9yIGFkdmFuY2VkIHVzZXJzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5yZWFkUHJlZmVyZW5jZSAoU2VydmVyIG9ubHkpIFNwZWNpZmllcyBhIGN1c3RvbSBNb25nb0RCIFtgcmVhZFByZWZlcmVuY2VgXShodHRwczovL2RvY3MubW9uZ29kYi5jb20vbWFudWFsL2NvcmUvcmVhZC1wcmVmZXJlbmNlKSBmb3IgdGhpcyBwYXJ0aWN1bGFyIGN1cnNvci4gUG9zc2libGUgdmFsdWVzIGFyZSBgcHJpbWFyeWAsIGBwcmltYXJ5UHJlZmVycmVkYCwgYHNlY29uZGFyeWAsIGBzZWNvbmRhcnlQcmVmZXJyZWRgIGFuZCBgbmVhcmVzdGAuXG4gICAqIEByZXR1cm5zIHtNb25nby5DdXJzb3J9XG4gICAqL1xuICBmaW5kKC4uLmFyZ3MpIHtcbiAgICAvLyBDb2xsZWN0aW9uLmZpbmQoKSAocmV0dXJuIGFsbCBkb2NzKSBiZWhhdmVzIGRpZmZlcmVudGx5XG4gICAgLy8gZnJvbSBDb2xsZWN0aW9uLmZpbmQodW5kZWZpbmVkKSAocmV0dXJuIDAgZG9jcykuICBzbyBiZVxuICAgIC8vIGNhcmVmdWwgYWJvdXQgdGhlIGxlbmd0aCBvZiBhcmd1bWVudHMuXG4gICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb24uZmluZChcbiAgICAgIHRoaXMuX2dldEZpbmRTZWxlY3RvcihhcmdzKSxcbiAgICAgIHRoaXMuX2dldEZpbmRPcHRpb25zKGFyZ3MpXG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgRmluZHMgdGhlIGZpcnN0IGRvY3VtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsIGFzIG9yZGVyZWQgYnkgc29ydCBhbmQgc2tpcCBvcHRpb25zLiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIG5vIG1hdGNoaW5nIGRvY3VtZW50IGlzIGZvdW5kLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCBmaW5kT25lXG4gICAqIEBtZW1iZXJvZiBNb25nby5Db2xsZWN0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge01vbmdvU2VsZWN0b3J9IFtzZWxlY3Rvcl0gQSBxdWVyeSBkZXNjcmliaW5nIHRoZSBkb2N1bWVudHMgdG8gZmluZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7TW9uZ29Tb3J0U3BlY2lmaWVyfSBvcHRpb25zLnNvcnQgU29ydCBvcmRlciAoZGVmYXVsdDogbmF0dXJhbCBvcmRlcilcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuc2tpcCBOdW1iZXIgb2YgcmVzdWx0cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmdcbiAgICogQHBhcmFtIHtNb25nb0ZpZWxkU3BlY2lmaWVyfSBvcHRpb25zLmZpZWxkcyBEaWN0aW9uYXJ5IG9mIGZpZWxkcyB0byByZXR1cm4gb3IgZXhjbHVkZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnJlYWN0aXZlIChDbGllbnQgb25seSkgRGVmYXVsdCB0cnVlOyBwYXNzIGZhbHNlIHRvIGRpc2FibGUgcmVhY3Rpdml0eVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLnRyYW5zZm9ybSBPdmVycmlkZXMgYHRyYW5zZm9ybWAgb24gdGhlIFtgQ29sbGVjdGlvbmBdKCNjb2xsZWN0aW9ucykgZm9yIHRoaXMgY3Vyc29yLiAgUGFzcyBgbnVsbGAgdG8gZGlzYWJsZSB0cmFuc2Zvcm1hdGlvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucmVhZFByZWZlcmVuY2UgKFNlcnZlciBvbmx5KSBTcGVjaWZpZXMgYSBjdXN0b20gTW9uZ29EQiBbYHJlYWRQcmVmZXJlbmNlYF0oaHR0cHM6Ly9kb2NzLm1vbmdvZGIuY29tL21hbnVhbC9jb3JlL3JlYWQtcHJlZmVyZW5jZSkgZm9yIGZldGNoaW5nIHRoZSBkb2N1bWVudC4gUG9zc2libGUgdmFsdWVzIGFyZSBgcHJpbWFyeWAsIGBwcmltYXJ5UHJlZmVycmVkYCwgYHNlY29uZGFyeWAsIGBzZWNvbmRhcnlQcmVmZXJyZWRgIGFuZCBgbmVhcmVzdGAuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmaW5kT25lKC4uLmFyZ3MpIHtcbiAgICAvLyBbRklCRVJTXVxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gMy4wIGlzIHJlbGVhc2VkLlxuICAgIHdhcm5Vc2luZ09sZEFwaSgnZmluZE9uZScsIHRoaXMuX25hbWUsIHRoaXMuZmluZE9uZS5pc0NhbGxlZEZyb21Bc3luYyk7XG4gICAgdGhpcy5maW5kT25lLmlzQ2FsbGVkRnJvbUFzeW5jID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbi5maW5kT25lKFxuICAgICAgdGhpcy5fZ2V0RmluZFNlbGVjdG9yKGFyZ3MpLFxuICAgICAgdGhpcy5fZ2V0RmluZE9wdGlvbnMoYXJncylcbiAgICApO1xuICB9LFxufSk7XG5cbk9iamVjdC5hc3NpZ24oTW9uZ28uQ29sbGVjdGlvbiwge1xuICBfcHVibGlzaEN1cnNvcihjdXJzb3IsIHN1YiwgY29sbGVjdGlvbikge1xuICAgIHZhciBvYnNlcnZlSGFuZGxlID0gY3Vyc29yLm9ic2VydmVDaGFuZ2VzKFxuICAgICAge1xuICAgICAgICBhZGRlZDogZnVuY3Rpb24oaWQsIGZpZWxkcykge1xuICAgICAgICAgIHN1Yi5hZGRlZChjb2xsZWN0aW9uLCBpZCwgZmllbGRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlZDogZnVuY3Rpb24oaWQsIGZpZWxkcykge1xuICAgICAgICAgIHN1Yi5jaGFuZ2VkKGNvbGxlY3Rpb24sIGlkLCBmaWVsZHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHN1Yi5yZW1vdmVkKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBQdWJsaWNhdGlvbnMgZG9uJ3QgbXV0YXRlIHRoZSBkb2N1bWVudHNcbiAgICAgIC8vIFRoaXMgaXMgdGVzdGVkIGJ5IHRoZSBgbGl2ZWRhdGEgLSBwdWJsaXNoIGNhbGxiYWNrcyBjbG9uZWAgdGVzdFxuICAgICAgeyBub25NdXRhdGluZ0NhbGxiYWNrczogdHJ1ZSB9XG4gICAgKTtcblxuICAgIC8vIFdlIGRvbid0IGNhbGwgc3ViLnJlYWR5KCkgaGVyZTogaXQgZ2V0cyBjYWxsZWQgaW4gbGl2ZWRhdGFfc2VydmVyLCBhZnRlclxuICAgIC8vIHBvc3NpYmx5IGNhbGxpbmcgX3B1Ymxpc2hDdXJzb3Igb24gbXVsdGlwbGUgcmV0dXJuZWQgY3Vyc29ycy5cblxuICAgIC8vIHJlZ2lzdGVyIHN0b3AgY2FsbGJhY2sgKGV4cGVjdHMgbGFtYmRhIHcvIG5vIGFyZ3MpLlxuICAgIHN1Yi5vblN0b3AoZnVuY3Rpb24oKSB7XG4gICAgICBvYnNlcnZlSGFuZGxlLnN0b3AoKTtcbiAgICB9KTtcblxuICAgIC8vIHJldHVybiB0aGUgb2JzZXJ2ZUhhbmRsZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHN0b3BwZWQgZWFybHlcbiAgICByZXR1cm4gb2JzZXJ2ZUhhbmRsZTtcbiAgfSxcblxuICAvLyBwcm90ZWN0IGFnYWluc3QgZGFuZ2Vyb3VzIHNlbGVjdG9ycy4gIGZhbHNleSBhbmQge19pZDogZmFsc2V5fSBhcmUgYm90aFxuICAvLyBsaWtlbHkgcHJvZ3JhbW1lciBlcnJvciwgYW5kIG5vdCB3aGF0IHlvdSB3YW50LCBwYXJ0aWN1bGFybHkgZm9yIGRlc3RydWN0aXZlXG4gIC8vIG9wZXJhdGlvbnMuIElmIGEgZmFsc2V5IF9pZCBpcyBzZW50IGluLCBhIG5ldyBzdHJpbmcgX2lkIHdpbGwgYmVcbiAgLy8gZ2VuZXJhdGVkIGFuZCByZXR1cm5lZDsgaWYgYSBmYWxsYmFja0lkIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHJldHVybmVkXG4gIC8vIGluc3RlYWQuXG4gIF9yZXdyaXRlU2VsZWN0b3Ioc2VsZWN0b3IsIHsgZmFsbGJhY2tJZCB9ID0ge30pIHtcbiAgICAvLyBzaG9ydGhhbmQgLS0gc2NhbGFycyBtYXRjaCBfaWRcbiAgICBpZiAoTG9jYWxDb2xsZWN0aW9uLl9zZWxlY3RvcklzSWQoc2VsZWN0b3IpKSBzZWxlY3RvciA9IHsgX2lkOiBzZWxlY3RvciB9O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAvLyBUaGlzIGlzIGNvbnNpc3RlbnQgd2l0aCB0aGUgTW9uZ28gY29uc29sZSBpdHNlbGY7IGlmIHdlIGRvbid0IGRvIHRoaXNcbiAgICAgIC8vIGNoZWNrIHBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgZW5kcyB1cCBzZWxlY3RpbmcgYWxsIGl0ZW1zXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb25nbyBzZWxlY3RvciBjYW4ndCBiZSBhbiBhcnJheS5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCAoJ19pZCcgaW4gc2VsZWN0b3IgJiYgIXNlbGVjdG9yLl9pZCkpIHtcbiAgICAgIC8vIGNhbid0IG1hdGNoIGFueXRoaW5nXG4gICAgICByZXR1cm4geyBfaWQ6IGZhbGxiYWNrSWQgfHwgUmFuZG9tLmlkKCkgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0sXG59KTtcblxuT2JqZWN0LmFzc2lnbihNb25nby5Db2xsZWN0aW9uLnByb3RvdHlwZSwge1xuICAvLyAnaW5zZXJ0JyBpbW1lZGlhdGVseSByZXR1cm5zIHRoZSBpbnNlcnRlZCBkb2N1bWVudCdzIG5ldyBfaWQuXG4gIC8vIFRoZSBvdGhlcnMgcmV0dXJuIHZhbHVlcyBpbW1lZGlhdGVseSBpZiB5b3UgYXJlIGluIGEgc3R1YiwgYW4gaW4tbWVtb3J5XG4gIC8vIHVubWFuYWdlZCBjb2xsZWN0aW9uLCBvciBhIG1vbmdvLWJhY2tlZCBjb2xsZWN0aW9uIGFuZCB5b3UgZG9uJ3QgcGFzcyBhXG4gIC8vIGNhbGxiYWNrLiAndXBkYXRlJyBhbmQgJ3JlbW92ZScgcmV0dXJuIHRoZSBudW1iZXIgb2YgYWZmZWN0ZWRcbiAgLy8gZG9jdW1lbnRzLiAndXBzZXJ0JyByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGtleXMgJ251bWJlckFmZmVjdGVkJyBhbmQsIGlmIGFuXG4gIC8vIGluc2VydCBoYXBwZW5lZCwgJ2luc2VydGVkSWQnLlxuICAvL1xuICAvLyBPdGhlcndpc2UsIHRoZSBzZW1hbnRpY3MgYXJlIGV4YWN0bHkgbGlrZSBvdGhlciBtZXRob2RzOiB0aGV5IHRha2VcbiAgLy8gYSBjYWxsYmFjayBhcyBhbiBvcHRpb25hbCBsYXN0IGFyZ3VtZW50OyBpZiBubyBjYWxsYmFjayBpc1xuICAvLyBwcm92aWRlZCwgdGhleSBibG9jayB1bnRpbCB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlLCBhbmQgdGhyb3cgYW5cbiAgLy8gZXhjZXB0aW9uIGlmIGl0IGZhaWxzOyBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCB0aGVuIHRoZXkgZG9uJ3RcbiAgLy8gbmVjZXNzYXJpbHkgYmxvY2ssIGFuZCB0aGV5IGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gdGhleSBmaW5pc2ggd2l0aCBlcnJvciBhbmRcbiAgLy8gcmVzdWx0IGFyZ3VtZW50cy4gIChUaGUgaW5zZXJ0IG1ldGhvZCBwcm92aWRlcyB0aGUgZG9jdW1lbnQgSUQgYXMgaXRzIHJlc3VsdDtcbiAgLy8gdXBkYXRlIGFuZCByZW1vdmUgcHJvdmlkZSB0aGUgbnVtYmVyIG9mIGFmZmVjdGVkIGRvY3MgYXMgdGhlIHJlc3VsdDsgdXBzZXJ0XG4gIC8vIHByb3ZpZGVzIGFuIG9iamVjdCB3aXRoIG51bWJlckFmZmVjdGVkIGFuZCBtYXliZSBpbnNlcnRlZElkLilcbiAgLy9cbiAgLy8gT24gdGhlIGNsaWVudCwgYmxvY2tpbmcgaXMgaW1wb3NzaWJsZSwgc28gaWYgYSBjYWxsYmFja1xuICAvLyBpc24ndCBwcm92aWRlZCwgdGhleSBqdXN0IHJldHVybiBpbW1lZGlhdGVseSBhbmQgYW55IGVycm9yXG4gIC8vIGluZm9ybWF0aW9uIGlzIGxvc3QuXG4gIC8vXG4gIC8vIFRoZXJlJ3Mgb25lIG1vcmUgdHdlYWsuIE9uIHRoZSBjbGllbnQsIGlmIHlvdSBkb24ndCBwcm92aWRlIGFcbiAgLy8gY2FsbGJhY2ssIHRoZW4gaWYgdGhlcmUgaXMgYW4gZXJyb3IsIGEgbWVzc2FnZSB3aWxsIGJlIGxvZ2dlZCB3aXRoXG4gIC8vIE1ldGVvci5fZGVidWcuXG4gIC8vXG4gIC8vIFRoZSBpbnRlbnQgKHRob3VnaCB0aGlzIGlzIGFjdHVhbGx5IGRldGVybWluZWQgYnkgdGhlIHVuZGVybHlpbmdcbiAgLy8gZHJpdmVycykgaXMgdGhhdCB0aGUgb3BlcmF0aW9ucyBzaG91bGQgYmUgZG9uZSBzeW5jaHJvbm91c2x5LCBub3RcbiAgLy8gZ2VuZXJhdGluZyB0aGVpciByZXN1bHQgdW50aWwgdGhlIGRhdGFiYXNlIGhhcyBhY2tub3dsZWRnZWRcbiAgLy8gdGhlbS4gSW4gdGhlIGZ1dHVyZSBtYXliZSB3ZSBzaG91bGQgcHJvdmlkZSBhIGZsYWcgdG8gdHVybiB0aGlzXG4gIC8vIG9mZi5cblxuICAvKipcbiAgICogQHN1bW1hcnkgSW5zZXJ0IGEgZG9jdW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uICBSZXR1cm5zIGl0cyB1bmlxdWUgX2lkLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCAgaW5zZXJ0XG4gICAqIEBtZW1iZXJvZiBNb25nby5Db2xsZWN0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZG9jIFRoZSBkb2N1bWVudCB0byBpbnNlcnQuIE1heSBub3QgeWV0IGhhdmUgYW4gX2lkIGF0dHJpYnV0ZSwgaW4gd2hpY2ggY2FzZSBNZXRlb3Igd2lsbCBnZW5lcmF0ZSBvbmUgZm9yIHlvdS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBPcHRpb25hbC4gIElmIHByZXNlbnQsIGNhbGxlZCB3aXRoIGFuIGVycm9yIG9iamVjdCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgYW5kLCBpZiBubyBlcnJvciwgdGhlIF9pZCBhcyB0aGUgc2Vjb25kLlxuICAgKi9cbiAgaW5zZXJ0KGRvYywgY2FsbGJhY2spIHtcbiAgICAvLyBNYWtlIHN1cmUgd2Ugd2VyZSBwYXNzZWQgYSBkb2N1bWVudCB0byBpbnNlcnRcbiAgICBpZiAoIWRvYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNlcnQgcmVxdWlyZXMgYW4gYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICAvLyBbRklCRVJTXVxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gMy4wIGlzIHJlbGVhc2VkLlxuICAgIHdhcm5Vc2luZ09sZEFwaSgnaW5zZXJ0JywgdGhpcy5fbmFtZSwgdGhpcy5pbnNlcnQuaXNDYWxsZWRGcm9tQXN5bmMpO1xuICAgIHRoaXMuaW5zZXJ0LmlzQ2FsbGVkRnJvbUFzeW5jID0gZmFsc2U7XG5cbiAgICAvLyBNYWtlIGEgc2hhbGxvdyBjbG9uZSBvZiB0aGUgZG9jdW1lbnQsIHByZXNlcnZpbmcgaXRzIHByb3RvdHlwZS5cbiAgICBkb2MgPSBPYmplY3QuY3JlYXRlKFxuICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKGRvYyksXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhkb2MpXG4gICAgKTtcblxuICAgIGlmICgnX2lkJyBpbiBkb2MpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWRvYy5faWQgfHxcbiAgICAgICAgISh0eXBlb2YgZG9jLl9pZCA9PT0gJ3N0cmluZycgfHwgZG9jLl9pZCBpbnN0YW5jZW9mIE1vbmdvLk9iamVjdElEKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTWV0ZW9yIHJlcXVpcmVzIGRvY3VtZW50IF9pZCBmaWVsZHMgdG8gYmUgbm9uLWVtcHR5IHN0cmluZ3Mgb3IgT2JqZWN0SURzJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZ2VuZXJhdGVJZCA9IHRydWU7XG5cbiAgICAgIC8vIERvbid0IGdlbmVyYXRlIHRoZSBpZCBpZiB3ZSdyZSB0aGUgY2xpZW50IGFuZCB0aGUgJ291dGVybW9zdCcgY2FsbFxuICAgICAgLy8gVGhpcyBvcHRpbWl6YXRpb24gc2F2ZXMgdXMgcGFzc2luZyBib3RoIHRoZSByYW5kb21TZWVkIGFuZCB0aGUgaWRcbiAgICAgIC8vIFBhc3NpbmcgYm90aCBpcyByZWR1bmRhbnQuXG4gICAgICBpZiAodGhpcy5faXNSZW1vdGVDb2xsZWN0aW9uKCkpIHtcbiAgICAgICAgY29uc3QgZW5jbG9zaW5nID0gRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi5nZXQoKTtcbiAgICAgICAgaWYgKCFlbmNsb3NpbmcpIHtcbiAgICAgICAgICBnZW5lcmF0ZUlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdlbmVyYXRlSWQpIHtcbiAgICAgICAgZG9jLl9pZCA9IHRoaXMuX21ha2VOZXdJRCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9uIGluc2VydHMsIGFsd2F5cyByZXR1cm4gdGhlIGlkIHRoYXQgd2UgZ2VuZXJhdGVkOyBvbiBhbGwgb3RoZXJcbiAgICAvLyBvcGVyYXRpb25zLCBqdXN0IHJldHVybiB0aGUgcmVzdWx0IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gICAgdmFyIGNob29zZVJldHVyblZhbHVlRnJvbUNvbGxlY3Rpb25SZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGlmIChkb2MuX2lkKSB7XG4gICAgICAgIHJldHVybiBkb2MuX2lkO1xuICAgICAgfVxuXG4gICAgICAvLyBYWFggd2hhdCBpcyB0aGlzIGZvcj8/XG4gICAgICAvLyBJdCdzIHNvbWUgaXRlcmFjdGlvbiBiZXR3ZWVuIHRoZSBjYWxsYmFjayB0byBfY2FsbE11dGF0b3JNZXRob2QgYW5kXG4gICAgICAvLyB0aGUgcmV0dXJuIHZhbHVlIGNvbnZlcnNpb25cbiAgICAgIGRvYy5faWQgPSByZXN1bHQ7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRDYWxsYmFjayA9IHdyYXBDYWxsYmFjayhcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgY2hvb3NlUmV0dXJuVmFsdWVGcm9tQ29sbGVjdGlvblJlc3VsdFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5faXNSZW1vdGVDb2xsZWN0aW9uKCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NhbGxNdXRhdG9yTWV0aG9kKCdpbnNlcnQnLCBbZG9jXSwgd3JhcHBlZENhbGxiYWNrKTtcbiAgICAgIHJldHVybiBjaG9vc2VSZXR1cm5WYWx1ZUZyb21Db2xsZWN0aW9uUmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy8gaXQncyBteSBjb2xsZWN0aW9uLiAgZGVzY2VuZCBpbnRvIHRoZSBjb2xsZWN0aW9uIG9iamVjdFxuICAgIC8vIGFuZCBwcm9wYWdhdGUgYW55IGV4Y2VwdGlvbi5cbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgcHJvdmlkZWQgYSBjYWxsYmFjayBhbmQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50cyB0aGlzXG4gICAgICAvLyBvcGVyYXRpb24gYXN5bmNocm9ub3VzbHksIHRoZW4gcXVlcnlSZXQgd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIHJldHVybmVkIHRocm91Z2ggdGhlIGNhbGxiYWNrIGluc3RlYWQuXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jb2xsZWN0aW9uLmluc2VydChkb2MsIHdyYXBwZWRDYWxsYmFjayk7XG4gICAgICByZXR1cm4gY2hvb3NlUmV0dXJuVmFsdWVGcm9tQ29sbGVjdGlvblJlc3VsdChyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgTW9kaWZ5IG9uZSBvciBtb3JlIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvbi4gUmV0dXJucyB0aGUgbnVtYmVyIG9mIG1hdGNoZWQgZG9jdW1lbnRzLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCB1cGRhdGVcbiAgICogQG1lbWJlcm9mIE1vbmdvLkNvbGxlY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7TW9uZ29TZWxlY3Rvcn0gc2VsZWN0b3IgU3BlY2lmaWVzIHdoaWNoIGRvY3VtZW50cyB0byBtb2RpZnlcbiAgICogQHBhcmFtIHtNb25nb01vZGlmaWVyfSBtb2RpZmllciBTcGVjaWZpZXMgaG93IHRvIG1vZGlmeSB0aGUgZG9jdW1lbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm11bHRpIFRydWUgdG8gbW9kaWZ5IGFsbCBtYXRjaGluZyBkb2N1bWVudHM7IGZhbHNlIHRvIG9ubHkgbW9kaWZ5IG9uZSBvZiB0aGUgbWF0Y2hpbmcgZG9jdW1lbnRzICh0aGUgZGVmYXVsdCkuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy51cHNlcnQgVHJ1ZSB0byBpbnNlcnQgYSBkb2N1bWVudCBpZiBubyBtYXRjaGluZyBkb2N1bWVudHMgYXJlIGZvdW5kLlxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmFycmF5RmlsdGVycyBPcHRpb25hbC4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIE1vbmdvREIgW2ZpbHRlcmVkIHBvc2l0aW9uYWwgb3BlcmF0b3JdKGh0dHBzOi8vZG9jcy5tb25nb2RiLmNvbS9tYW51YWwvcmVmZXJlbmNlL29wZXJhdG9yL3VwZGF0ZS9wb3NpdGlvbmFsLWZpbHRlcmVkLykgdG8gc3BlY2lmeSB3aGljaCBlbGVtZW50cyB0byBtb2RpZnkgaW4gYW4gYXJyYXkgZmllbGQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gT3B0aW9uYWwuICBJZiBwcmVzZW50LCBjYWxsZWQgd2l0aCBhbiBlcnJvciBvYmplY3QgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGFuZCwgaWYgbm8gZXJyb3IsIHRoZSBudW1iZXIgb2YgYWZmZWN0ZWQgZG9jdW1lbnRzIGFzIHRoZSBzZWNvbmQuXG4gICAqL1xuICB1cGRhdGUoc2VsZWN0b3IsIG1vZGlmaWVyLCAuLi5vcHRpb25zQW5kQ2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBvcENhbGxiYWNrRnJvbUFyZ3Mob3B0aW9uc0FuZENhbGxiYWNrKTtcblxuICAgIC8vIFdlJ3ZlIGFscmVhZHkgcG9wcGVkIG9mZiB0aGUgY2FsbGJhY2ssIHNvIHdlIGFyZSBsZWZ0IHdpdGggYW4gYXJyYXlcbiAgICAvLyBvZiBvbmUgb3IgemVybyBpdGVtc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC4uLihvcHRpb25zQW5kQ2FsbGJhY2tbMF0gfHwgbnVsbCkgfTtcbiAgICBsZXQgaW5zZXJ0ZWRJZDtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgLy8gc2V0IGBpbnNlcnRlZElkYCBpZiBhYnNlbnQuICBgaW5zZXJ0ZWRJZGAgaXMgYSBNZXRlb3IgZXh0ZW5zaW9uLlxuICAgICAgaWYgKG9wdGlvbnMuaW5zZXJ0ZWRJZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmluc2VydGVkSWQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICBvcHRpb25zLmluc2VydGVkSWQgaW5zdGFuY2VvZiBNb25nby5PYmplY3RJRFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zZXJ0ZWRJZCBtdXN0IGJlIHN0cmluZyBvciBPYmplY3RJRCcpO1xuICAgICAgICBpbnNlcnRlZElkID0gb3B0aW9ucy5pbnNlcnRlZElkO1xuICAgICAgfSBlbHNlIGlmICghc2VsZWN0b3IgfHwgIXNlbGVjdG9yLl9pZCkge1xuICAgICAgICBpbnNlcnRlZElkID0gdGhpcy5fbWFrZU5ld0lEKCk7XG4gICAgICAgIG9wdGlvbnMuZ2VuZXJhdGVkSWQgPSB0cnVlO1xuICAgICAgICBvcHRpb25zLmluc2VydGVkSWQgPSBpbnNlcnRlZElkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtGSUJFUlNdXG4gICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiAzLjAgaXMgcmVsZWFzZWQuXG4gICAgd2FyblVzaW5nT2xkQXBpKCd1cGRhdGUnLCB0aGlzLl9uYW1lLCB0aGlzLnVwZGF0ZS5pc0NhbGxlZEZyb21Bc3luYyk7XG4gICAgdGhpcy51cGRhdGUuaXNDYWxsZWRGcm9tQXN5bmMgPSBmYWxzZTtcblxuICAgIHNlbGVjdG9yID0gTW9uZ28uQ29sbGVjdGlvbi5fcmV3cml0ZVNlbGVjdG9yKHNlbGVjdG9yLCB7XG4gICAgICBmYWxsYmFja0lkOiBpbnNlcnRlZElkLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZENhbGxiYWNrID0gd3JhcENhbGxiYWNrKGNhbGxiYWNrKTtcblxuICAgIGlmICh0aGlzLl9pc1JlbW90ZUNvbGxlY3Rpb24oKSkge1xuICAgICAgY29uc3QgYXJncyA9IFtzZWxlY3RvciwgbW9kaWZpZXIsIG9wdGlvbnNdO1xuXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbE11dGF0b3JNZXRob2QoJ3VwZGF0ZScsIGFyZ3MsIHdyYXBwZWRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy8gaXQncyBteSBjb2xsZWN0aW9uLiAgZGVzY2VuZCBpbnRvIHRoZSBjb2xsZWN0aW9uIG9iamVjdFxuICAgIC8vIGFuZCBwcm9wYWdhdGUgYW55IGV4Y2VwdGlvbi5cbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgcHJvdmlkZWQgYSBjYWxsYmFjayBhbmQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50cyB0aGlzXG4gICAgICAvLyBvcGVyYXRpb24gYXN5bmNocm9ub3VzbHksIHRoZW4gcXVlcnlSZXQgd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIHJldHVybmVkIHRocm91Z2ggdGhlIGNhbGxiYWNrIGluc3RlYWQuXG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbi51cGRhdGUoXG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICBtb2RpZmllcixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgd3JhcHBlZENhbGxiYWNrXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVtb3ZlIGRvY3VtZW50cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAqIEBsb2N1cyBBbnl3aGVyZVxuICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgKiBAbWVtYmVyb2YgTW9uZ28uQ29sbGVjdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICogQHBhcmFtIHtNb25nb1NlbGVjdG9yfSBzZWxlY3RvciBTcGVjaWZpZXMgd2hpY2ggZG9jdW1lbnRzIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIE9wdGlvbmFsLiAgSWYgcHJlc2VudCwgY2FsbGVkIHdpdGggYW4gZXJyb3Igb2JqZWN0IGFzIGl0cyBhcmd1bWVudC5cbiAgICovXG4gIHJlbW92ZShzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICBzZWxlY3RvciA9IE1vbmdvLkNvbGxlY3Rpb24uX3Jld3JpdGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBjb25zdCB3cmFwcGVkQ2FsbGJhY2sgPSB3cmFwQ2FsbGJhY2soY2FsbGJhY2spO1xuXG4gICAgaWYgKHRoaXMuX2lzUmVtb3RlQ29sbGVjdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FsbE11dGF0b3JNZXRob2QoJ3JlbW92ZScsIFtzZWxlY3Rvcl0sIHdyYXBwZWRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy8gW0ZJQkVSU11cbiAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIDMuMCBpcyByZWxlYXNlZC5cbiAgICB3YXJuVXNpbmdPbGRBcGkoJ3JlbW92ZScsIHRoaXMuX25hbWUsIHRoaXMucmVtb3ZlLmlzQ2FsbGVkRnJvbUFzeW5jKTtcbiAgICB0aGlzLnJlbW92ZS5pc0NhbGxlZEZyb21Bc3luYyA9IGZhbHNlO1xuICAgIC8vIGl0J3MgbXkgY29sbGVjdGlvbi4gIGRlc2NlbmQgaW50byB0aGUgY29sbGVjdGlvbiBvYmplY3RcbiAgICAvLyBhbmQgcHJvcGFnYXRlIGFueSBleGNlcHRpb24uXG4gICAgdHJ5IHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHByb3ZpZGVkIGEgY2FsbGJhY2sgYW5kIHRoZSBjb2xsZWN0aW9uIGltcGxlbWVudHMgdGhpc1xuICAgICAgLy8gb3BlcmF0aW9uIGFzeW5jaHJvbm91c2x5LCB0aGVuIHF1ZXJ5UmV0IHdpbGwgYmUgdW5kZWZpbmVkLCBhbmQgdGhlXG4gICAgICAvLyByZXN1bHQgd2lsbCBiZSByZXR1cm5lZCB0aHJvdWdoIHRoZSBjYWxsYmFjayBpbnN0ZWFkLlxuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb24ucmVtb3ZlKHNlbGVjdG9yLCB3cmFwcGVkQ2FsbGJhY2spO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBjb2xsZWN0aW9uIGlzIHNpbXBseSBhIG1pbmltb25nbyByZXByZXNlbnRhdGlvbiBvZiBhIHJlYWxcbiAgLy8gZGF0YWJhc2Ugb24gYW5vdGhlciBzZXJ2ZXJcbiAgX2lzUmVtb3RlQ29sbGVjdGlvbigpIHtcbiAgICAvLyBYWFggc2VlICNNZXRlb3JTZXJ2ZXJOdWxsXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb24gJiYgdGhpcy5fY29ubmVjdGlvbiAhPT0gTWV0ZW9yLnNlcnZlcjtcbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgTW9kaWZ5IG9uZSBvciBtb3JlIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvbiwgb3IgaW5zZXJ0IG9uZSBpZiBubyBtYXRjaGluZyBkb2N1bWVudHMgd2VyZSBmb3VuZC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBrZXlzIGBudW1iZXJBZmZlY3RlZGAgKHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIG1vZGlmaWVkKSAgYW5kIGBpbnNlcnRlZElkYCAodGhlIHVuaXF1ZSBfaWQgb2YgdGhlIGRvY3VtZW50IHRoYXQgd2FzIGluc2VydGVkLCBpZiBhbnkpLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQG1ldGhvZCB1cHNlcnRcbiAgICogQG1lbWJlcm9mIE1vbmdvLkNvbGxlY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7TW9uZ29TZWxlY3Rvcn0gc2VsZWN0b3IgU3BlY2lmaWVzIHdoaWNoIGRvY3VtZW50cyB0byBtb2RpZnlcbiAgICogQHBhcmFtIHtNb25nb01vZGlmaWVyfSBtb2RpZmllciBTcGVjaWZpZXMgaG93IHRvIG1vZGlmeSB0aGUgZG9jdW1lbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm11bHRpIFRydWUgdG8gbW9kaWZ5IGFsbCBtYXRjaGluZyBkb2N1bWVudHM7IGZhbHNlIHRvIG9ubHkgbW9kaWZ5IG9uZSBvZiB0aGUgbWF0Y2hpbmcgZG9jdW1lbnRzICh0aGUgZGVmYXVsdCkuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gT3B0aW9uYWwuICBJZiBwcmVzZW50LCBjYWxsZWQgd2l0aCBhbiBlcnJvciBvYmplY3QgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGFuZCwgaWYgbm8gZXJyb3IsIHRoZSBudW1iZXIgb2YgYWZmZWN0ZWQgZG9jdW1lbnRzIGFzIHRoZSBzZWNvbmQuXG4gICAqL1xuICB1cHNlcnQoc2VsZWN0b3IsIG1vZGlmaWVyLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBbRklCRVJTXVxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gMy4wIGlzIHJlbGVhc2VkLlxuICAgIHdhcm5Vc2luZ09sZEFwaSgndXBzZXJ0JywgdGhpcy5fbmFtZSwgdGhpcy51cHNlcnQuaXNDYWxsZWRGcm9tQXN5bmMpO1xuICAgIHRoaXMudXBzZXJ0LmlzQ2FsbGVkRnJvbUFzeW5jID0gZmFsc2U7XG4gICAgLy8gY2F1Z2h0IGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL21ldGVvci9tZXRlb3IvaXNzdWVzLzEyNjI2XG4gICAgdGhpcy51cGRhdGUuaXNDYWxsZWRGcm9tQXN5bmMgPSB0cnVlOyAvLyB0byBub3QgdHJpZ2dlciBvbiB0aGUgbmV4dCBjYWxsXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBtb2RpZmllcixcbiAgICAgIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgX3JldHVybk9iamVjdDogdHJ1ZSxcbiAgICAgICAgdXBzZXJ0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcbiAgfSxcblxuICAvLyBXZSdsbCBhY3R1YWxseSBkZXNpZ24gYW4gaW5kZXggQVBJIGxhdGVyLiBGb3Igbm93LCB3ZSBqdXN0IHBhc3MgdGhyb3VnaCB0b1xuICAvLyBNb25nbydzLCBidXQgbWFrZSBpdCBzeW5jaHJvbm91cy5cbiAgX2Vuc3VyZUluZGV4KGluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5fY29sbGVjdGlvbi5fZW5zdXJlSW5kZXggfHwgIXNlbGYuX2NvbGxlY3Rpb24uY3JlYXRlSW5kZXgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IGNhbGwgY3JlYXRlSW5kZXggb24gc2VydmVyIGNvbGxlY3Rpb25zJyk7XG4gICAgaWYgKHNlbGYuX2NvbGxlY3Rpb24uY3JlYXRlSW5kZXgpIHtcbiAgICAgIHNlbGYuX2NvbGxlY3Rpb24uY3JlYXRlSW5kZXgoaW5kZXgsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbXBvcnQgeyBMb2cgfSBmcm9tICdtZXRlb3IvbG9nZ2luZyc7XG4gICAgICBMb2cuZGVidWcoXG4gICAgICAgIGBfZW5zdXJlSW5kZXggaGFzIGJlZW4gZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgbmV3ICdjcmVhdGVJbmRleCcgaW5zdGVhZCR7XG4gICAgICAgICAgb3B0aW9ucz8ubmFtZVxuICAgICAgICAgICAgPyBgLCBpbmRleCBuYW1lOiAke29wdGlvbnMubmFtZX1gXG4gICAgICAgICAgICA6IGAsIGluZGV4OiAke0pTT04uc3RyaW5naWZ5KGluZGV4KX1gXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgICAgc2VsZi5fY29sbGVjdGlvbi5fZW5zdXJlSW5kZXgoaW5kZXgsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgQ3JlYXRlcyB0aGUgc3BlY2lmaWVkIGluZGV4IG9uIHRoZSBjb2xsZWN0aW9uLlxuICAgKiBAbG9jdXMgc2VydmVyXG4gICAqIEBtZXRob2QgY3JlYXRlSW5kZXhcbiAgICogQG1lbWJlcm9mIE1vbmdvLkNvbGxlY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmRleCBBIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGZpZWxkIGFuZCB2YWx1ZSBwYWlycyB3aGVyZSB0aGUgZmllbGQgaXMgdGhlIGluZGV4IGtleSBhbmQgdGhlIHZhbHVlIGRlc2NyaWJlcyB0aGUgdHlwZSBvZiBpbmRleCBmb3IgdGhhdCBmaWVsZC4gRm9yIGFuIGFzY2VuZGluZyBpbmRleCBvbiBhIGZpZWxkLCBzcGVjaWZ5IGEgdmFsdWUgb2YgYDFgOyBmb3IgZGVzY2VuZGluZyBpbmRleCwgc3BlY2lmeSBhIHZhbHVlIG9mIGAtMWAuIFVzZSBgdGV4dGAgZm9yIHRleHQgaW5kZXhlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBbGwgb3B0aW9ucyBhcmUgbGlzdGVkIGluIFtNb25nb0RCIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZG9jcy5tb25nb2RiLmNvbS9tYW51YWwvcmVmZXJlbmNlL21ldGhvZC9kYi5jb2xsZWN0aW9uLmNyZWF0ZUluZGV4LyNvcHRpb25zKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5uYW1lIE5hbWUgb2YgdGhlIGluZGV4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy51bmlxdWUgRGVmaW5lIHRoYXQgdGhlIGluZGV4IHZhbHVlcyBtdXN0IGJlIHVuaXF1ZSwgbW9yZSBhdCBbTW9uZ29EQiBkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3MubW9uZ29kYi5jb20vbWFudWFsL2NvcmUvaW5kZXgtdW5pcXVlLylcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnNwYXJzZSBEZWZpbmUgdGhhdCB0aGUgaW5kZXggaXMgc3BhcnNlLCBtb3JlIGF0IFtNb25nb0RCIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZG9jcy5tb25nb2RiLmNvbS9tYW51YWwvY29yZS9pbmRleC1zcGFyc2UvKVxuICAgKi9cbiAgY3JlYXRlSW5kZXgoaW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLl9jb2xsZWN0aW9uLmNyZWF0ZUluZGV4KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBjYWxsIGNyZWF0ZUluZGV4IG9uIHNlcnZlciBjb2xsZWN0aW9ucycpO1xuICAgIC8vIFtGSUJFUlNdXG4gICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiAzLjAgaXMgcmVsZWFzZWQuXG4gICAgd2FyblVzaW5nT2xkQXBpKFxuICAgICAgJ2NyZWF0ZUluZGV4JyxcbiAgICAgIHNlbGYuX25hbWUsXG4gICAgICBzZWxmLmNyZWF0ZUluZGV4LmlzQ2FsbGVkRnJvbUFzeW5jXG4gICAgKTtcbiAgICBzZWxmLmNyZWF0ZUluZGV4LmlzQ2FsbGVkRnJvbUFzeW5jID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHNlbGYuX2NvbGxlY3Rpb24uY3JlYXRlSW5kZXgoaW5kZXgsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5tZXNzYWdlLmluY2x1ZGVzKFxuICAgICAgICAgICdBbiBlcXVpdmFsZW50IGluZGV4IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIHNhbWUgbmFtZSBidXQgZGlmZmVyZW50IG9wdGlvbnMuJ1xuICAgICAgICApICYmXG4gICAgICAgIE1ldGVvci5zZXR0aW5ncz8ucGFja2FnZXM/Lm1vbmdvPy5yZUNyZWF0ZUluZGV4T25PcHRpb25NaXNtYXRjaFxuICAgICAgKSB7XG4gICAgICAgIGltcG9ydCB7IExvZyB9IGZyb20gJ21ldGVvci9sb2dnaW5nJztcblxuICAgICAgICBMb2cuaW5mbyhcbiAgICAgICAgICBgUmUtY3JlYXRpbmcgaW5kZXggJHtpbmRleH0gZm9yICR7c2VsZi5fbmFtZX0gZHVlIHRvIG9wdGlvbnMgbWlzbWF0Y2guYFxuICAgICAgICApO1xuICAgICAgICBzZWxmLl9jb2xsZWN0aW9uLl9kcm9wSW5kZXgoaW5kZXgpO1xuICAgICAgICBzZWxmLl9jb2xsZWN0aW9uLmNyZWF0ZUluZGV4KGluZGV4LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXG4gICAgICAgICAgYEFuIGVycm9yIG9jY3VycmVkIHdoZW4gY3JlYXRpbmcgYW4gaW5kZXggZm9yIGNvbGxlY3Rpb24gXCIke3NlbGYuX25hbWV9OiAke2UubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9kcm9wSW5kZXgoaW5kZXgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLl9jb2xsZWN0aW9uLl9kcm9wSW5kZXgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IGNhbGwgX2Ryb3BJbmRleCBvbiBzZXJ2ZXIgY29sbGVjdGlvbnMnKTtcbiAgICBzZWxmLl9jb2xsZWN0aW9uLl9kcm9wSW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIF9kcm9wQ29sbGVjdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLl9jb2xsZWN0aW9uLmRyb3BDb2xsZWN0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBjYWxsIF9kcm9wQ29sbGVjdGlvbiBvbiBzZXJ2ZXIgY29sbGVjdGlvbnMnKTtcbiAgICBzZWxmLl9jb2xsZWN0aW9uLmRyb3BDb2xsZWN0aW9uKCk7XG4gIH0sXG5cbiAgX2NyZWF0ZUNhcHBlZENvbGxlY3Rpb24oYnl0ZVNpemUsIG1heERvY3VtZW50cykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuX2NvbGxlY3Rpb24uX2NyZWF0ZUNhcHBlZENvbGxlY3Rpb24pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW4gb25seSBjYWxsIF9jcmVhdGVDYXBwZWRDb2xsZWN0aW9uIG9uIHNlcnZlciBjb2xsZWN0aW9ucydcbiAgICAgICk7XG5cbiAgICAvLyBbRklCRVJTXVxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gMy4wIGlzIHJlbGVhc2VkLlxuICAgIHdhcm5Vc2luZ09sZEFwaShcbiAgICAgICdfY3JlYXRlQ2FwcGVkQ29sbGVjdGlvbicsXG4gICAgICBzZWxmLl9uYW1lLFxuICAgICAgc2VsZi5fY3JlYXRlQ2FwcGVkQ29sbGVjdGlvbi5pc0NhbGxlZEZyb21Bc3luY1xuICAgICk7XG4gICAgc2VsZi5fY3JlYXRlQ2FwcGVkQ29sbGVjdGlvbi5pc0NhbGxlZEZyb21Bc3luYyA9IGZhbHNlO1xuICAgIHNlbGYuX2NvbGxlY3Rpb24uX2NyZWF0ZUNhcHBlZENvbGxlY3Rpb24oYnl0ZVNpemUsIG1heERvY3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFJldHVybnMgdGhlIFtgQ29sbGVjdGlvbmBdKGh0dHA6Ly9tb25nb2RiLmdpdGh1Yi5pby9ub2RlLW1vbmdvZGItbmF0aXZlLzMuMC9hcGkvQ29sbGVjdGlvbi5odG1sKSBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGlzIGNvbGxlY3Rpb24gZnJvbSB0aGUgW25wbSBgbW9uZ29kYmAgZHJpdmVyIG1vZHVsZV0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbW9uZ29kYikgd2hpY2ggaXMgd3JhcHBlZCBieSBgTW9uZ28uQ29sbGVjdGlvbmAuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG1lbWJlcm9mIE1vbmdvLkNvbGxlY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqL1xuICByYXdDb2xsZWN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuX2NvbGxlY3Rpb24ucmF3Q29sbGVjdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBjYWxsIHJhd0NvbGxlY3Rpb24gb24gc2VydmVyIGNvbGxlY3Rpb25zJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWxmLl9jb2xsZWN0aW9uLnJhd0NvbGxlY3Rpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyB0aGUgW2BEYmBdKGh0dHA6Ly9tb25nb2RiLmdpdGh1Yi5pby9ub2RlLW1vbmdvZGItbmF0aXZlLzMuMC9hcGkvRGIuaHRtbCkgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBjb2xsZWN0aW9uJ3MgZGF0YWJhc2UgY29ubmVjdGlvbiBmcm9tIHRoZSBbbnBtIGBtb25nb2RiYCBkcml2ZXIgbW9kdWxlXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tb25nb2RiKSB3aGljaCBpcyB3cmFwcGVkIGJ5IGBNb25nby5Db2xsZWN0aW9uYC5cbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAbWVtYmVyb2YgTW9uZ28uQ29sbGVjdGlvblxuICAgKiBAaW5zdGFuY2VcbiAgICovXG4gIHJhd0RhdGFiYXNlKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIShzZWxmLl9kcml2ZXIubW9uZ28gJiYgc2VsZi5fZHJpdmVyLm1vbmdvLmRiKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBjYWxsIHJhd0RhdGFiYXNlIG9uIHNlcnZlciBjb2xsZWN0aW9ucycpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZi5fZHJpdmVyLm1vbmdvLmRiO1xuICB9LFxufSk7XG5cbi8vIENvbnZlcnQgdGhlIGNhbGxiYWNrIHRvIG5vdCByZXR1cm4gYSByZXN1bHQgaWYgdGhlcmUgaXMgYW4gZXJyb3JcbmZ1bmN0aW9uIHdyYXBDYWxsYmFjayhjYWxsYmFjaywgY29udmVydFJlc3VsdCkge1xuICByZXR1cm4gKFxuICAgIGNhbGxiYWNrICYmXG4gICAgZnVuY3Rpb24oZXJyb3IsIHJlc3VsdCkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnZlcnRSZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGNvbnZlcnRSZXN1bHQocmVzdWx0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbi8qKlxuICogQHN1bW1hcnkgQ3JlYXRlIGEgTW9uZ28tc3R5bGUgYE9iamVjdElEYC4gIElmIHlvdSBkb24ndCBzcGVjaWZ5IGEgYGhleFN0cmluZ2AsIHRoZSBgT2JqZWN0SURgIHdpbGwgYmUgZ2VuZXJhdGVkIHJhbmRvbWx5IChub3QgdXNpbmcgTW9uZ29EQidzIElEIGNvbnN0cnVjdGlvbiBydWxlcykuXG4gKiBAbG9jdXMgQW55d2hlcmVcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IFtoZXhTdHJpbmddIE9wdGlvbmFsLiAgVGhlIDI0LWNoYXJhY3RlciBoZXhhZGVjaW1hbCBjb250ZW50cyBvZiB0aGUgT2JqZWN0SUQgdG8gY3JlYXRlXG4gKi9cbk1vbmdvLk9iamVjdElEID0gTW9uZ29JRC5PYmplY3RJRDtcblxuLyoqXG4gKiBAc3VtbWFyeSBUbyBjcmVhdGUgYSBjdXJzb3IsIHVzZSBmaW5kLiBUbyBhY2Nlc3MgdGhlIGRvY3VtZW50cyBpbiBhIGN1cnNvciwgdXNlIGZvckVhY2gsIG1hcCwgb3IgZmV0Y2guXG4gKiBAY2xhc3NcbiAqIEBpbnN0YW5jZU5hbWUgY3Vyc29yXG4gKi9cbk1vbmdvLkN1cnNvciA9IExvY2FsQ29sbGVjdGlvbi5DdXJzb3I7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgaW4gMC45LjFcbiAqL1xuTW9uZ28uQ29sbGVjdGlvbi5DdXJzb3IgPSBNb25nby5DdXJzb3I7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgaW4gMC45LjFcbiAqL1xuTW9uZ28uQ29sbGVjdGlvbi5PYmplY3RJRCA9IE1vbmdvLk9iamVjdElEO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGluIDAuOS4xXG4gKi9cbk1ldGVvci5Db2xsZWN0aW9uID0gTW9uZ28uQ29sbGVjdGlvbjtcblxuLy8gQWxsb3cgZGVueSBzdHVmZiBpcyBub3cgaW4gdGhlIGFsbG93LWRlbnkgcGFja2FnZVxuT2JqZWN0LmFzc2lnbihNb25nby5Db2xsZWN0aW9uLnByb3RvdHlwZSwgQWxsb3dEZW55LkNvbGxlY3Rpb25Qcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBwb3BDYWxsYmFja0Zyb21BcmdzKGFyZ3MpIHtcbiAgLy8gUHVsbCBvZmYgYW55IGNhbGxiYWNrIChvciBwZXJoYXBzIGEgJ2NhbGxiYWNrJyB2YXJpYWJsZSB0aGF0IHdhcyBwYXNzZWRcbiAgLy8gaW4gdW5kZWZpbmVkLCBsaWtlIGhvdyAndXBzZXJ0JyBkb2VzIGl0KS5cbiAgaWYgKFxuICAgIGFyZ3MubGVuZ3RoICYmXG4gICAgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgKSB7XG4gICAgcmV0dXJuIGFyZ3MucG9wKCk7XG4gIH1cbn1cblxuQVNZTkNfQ09MTEVDVElPTl9NRVRIT0RTLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gIGNvbnN0IG1ldGhvZE5hbWVBc3luYyA9IGdldEFzeW5jTWV0aG9kTmFtZShtZXRob2ROYW1lKTtcbiAgTW9uZ28uQ29sbGVjdGlvbi5wcm90b3R5cGVbbWV0aG9kTmFtZUFzeW5jXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgLy8gVE9ETzogRmliZXJzIHJlbW92ZSB0aGlzIHdoZW4gd2UgcmVtb3ZlIGZpYmVycy5cbiAgICAgIHRoaXNbbWV0aG9kTmFtZV0uaXNDYWxsZWRGcm9tQXN5bmMgPSB0cnVlO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzW21ldGhvZE5hbWVdKC4uLmFyZ3MpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH07XG59KTtcbiIsIi8qKlxuICogQHN1bW1hcnkgQWxsb3dzIGZvciB1c2VyIHNwZWNpZmllZCBjb25uZWN0aW9uIG9wdGlvbnNcbiAqIEBleGFtcGxlIGh0dHA6Ly9tb25nb2RiLmdpdGh1Yi5pby9ub2RlLW1vbmdvZGItbmF0aXZlLzMuMC9yZWZlcmVuY2UvY29ubmVjdGluZy9jb25uZWN0aW9uLXNldHRpbmdzL1xuICogQGxvY3VzIFNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBzcGVjaWZpZWQgTW9uZ28gY29ubmVjdGlvbiBvcHRpb25zXG4gKi9cbk1vbmdvLnNldENvbm5lY3Rpb25PcHRpb25zID0gZnVuY3Rpb24gc2V0Q29ubmVjdGlvbk9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgY2hlY2sob3B0aW9ucywgT2JqZWN0KTtcbiAgTW9uZ28uX2Nvbm5lY3Rpb25PcHRpb25zID0gb3B0aW9ucztcbn07IiwiZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVByb2plY3Rpb24gPSBvcHRpb25zID0+IHtcbiAgLy8gdHJhbnNmb3JtIGZpZWxkcyBrZXkgaW4gcHJvamVjdGlvblxuICBjb25zdCB7IGZpZWxkcywgcHJvamVjdGlvbiwgLi4ub3RoZXJPcHRpb25zIH0gPSBvcHRpb25zIHx8IHt9O1xuICAvLyBUT0RPOiBlbmFibGUgdGhpcyBjb21tZW50IHdoZW4gZGVwcmVjYXRpbmcgdGhlIGZpZWxkcyBvcHRpb25cbiAgLy8gTG9nLmRlYnVnKGBmaWVsZHMgb3B0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdGhlIG5ldyAncHJvamVjdGlvbicgaW5zdGVhZGApXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5vdGhlck9wdGlvbnMsXG4gICAgLi4uKHByb2plY3Rpb24gfHwgZmllbGRzID8geyBwcm9qZWN0aW9uOiBmaWVsZHMgfHwgcHJvamVjdGlvbiB9IDoge30pLFxuICB9O1xufTtcbiJdfQ==
