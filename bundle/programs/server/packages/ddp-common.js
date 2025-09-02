(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var ECMAScript = Package.ecmascript.ECMAScript;
var EJSON = Package.ejson.EJSON;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Retry = Package.retry.Retry;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var DDPCommon;

var require = meteorInstall({"node_modules":{"meteor":{"ddp-common":{"namespace.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ddp-common/namespace.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**
 * @namespace DDPCommon
 * @summary Namespace for DDPCommon-related methods/classes. Shared between 
 * `ddp-client` and `ddp-server`, where the ddp-client is the implementation
 * of a ddp client for both client AND server; and the ddp server is the
 * implementation of the livedata server and stream server. Common 
 * functionality shared between both can be shared under this namespace
 */
DDPCommon = {};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"heartbeat.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ddp-common/heartbeat.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Heartbeat options:
//   heartbeatInterval: interval to send pings, in milliseconds.
//   heartbeatTimeout: timeout to close the connection if a reply isn't
//     received, in milliseconds.
//   sendPing: function to call to send a ping on the connection.
//   onTimeout: function to call to close the connection.

DDPCommon.Heartbeat = class Heartbeat {
  constructor(options) {
    this.heartbeatInterval = options.heartbeatInterval;
    this.heartbeatTimeout = options.heartbeatTimeout;
    this._sendPing = options.sendPing;
    this._onTimeout = options.onTimeout;
    this._seenPacket = false;
    this._heartbeatIntervalHandle = null;
    this._heartbeatTimeoutHandle = null;
  }
  stop() {
    this._clearHeartbeatIntervalTimer();
    this._clearHeartbeatTimeoutTimer();
  }
  start() {
    this.stop();
    this._startHeartbeatIntervalTimer();
  }
  _startHeartbeatIntervalTimer() {
    this._heartbeatIntervalHandle = Meteor.setInterval(() => this._heartbeatIntervalFired(), this.heartbeatInterval);
  }
  _startHeartbeatTimeoutTimer() {
    this._heartbeatTimeoutHandle = Meteor.setTimeout(() => this._heartbeatTimeoutFired(), this.heartbeatTimeout);
  }
  _clearHeartbeatIntervalTimer() {
    if (this._heartbeatIntervalHandle) {
      Meteor.clearInterval(this._heartbeatIntervalHandle);
      this._heartbeatIntervalHandle = null;
    }
  }
  _clearHeartbeatTimeoutTimer() {
    if (this._heartbeatTimeoutHandle) {
      Meteor.clearTimeout(this._heartbeatTimeoutHandle);
      this._heartbeatTimeoutHandle = null;
    }
  }

  // The heartbeat interval timer is fired when we should send a ping.
  _heartbeatIntervalFired() {
    // don't send ping if we've seen a packet since we last checked,
    // *or* if we have already sent a ping and are awaiting a timeout.
    // That shouldn't happen, but it's possible if
    // `this.heartbeatInterval` is smaller than
    // `this.heartbeatTimeout`.
    if (!this._seenPacket && !this._heartbeatTimeoutHandle) {
      this._sendPing();
      // Set up timeout, in case a pong doesn't arrive in time.
      this._startHeartbeatTimeoutTimer();
    }
    this._seenPacket = false;
  }

  // The heartbeat timeout timer is fired when we sent a ping, but we
  // timed out waiting for the pong.
  _heartbeatTimeoutFired() {
    this._heartbeatTimeoutHandle = null;
    this._onTimeout();
  }
  messageReceived() {
    // Tell periodic checkin that we have seen a packet, and thus it
    // does not need to send a ping this cycle.
    this._seenPacket = true;
    // If we were waiting for a pong, we got it.
    if (this._heartbeatTimeoutHandle) {
      this._clearHeartbeatTimeoutTimer();
    }
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ddp-common/utils.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
"use strict";

module.export({
  hasOwn: () => hasOwn,
  slice: () => slice,
  keys: () => keys,
  isEmpty: () => isEmpty,
  last: () => last
});
const hasOwn = Object.prototype.hasOwnProperty;
const slice = Array.prototype.slice;
function keys(obj) {
  return Object.keys(Object(obj));
}
function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  if (Array.isArray(obj) || typeof obj === "string") {
    return obj.length === 0;
  }
  for (const key in obj) {
    if (hasOwn.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function last(array, n, guard) {
  if (array == null) {
    return;
  }
  if (n == null || guard) {
    return array[array.length - 1];
  }
  return slice.call(array, Math.max(array.length - n, 0));
}
DDPCommon.SUPPORTED_DDP_VERSIONS = ['1', 'pre2', 'pre1'];
DDPCommon.parseDDP = function (stringMessage) {
  try {
    var msg = JSON.parse(stringMessage);
  } catch (e) {
    Meteor._debug("Discarding message with invalid JSON", stringMessage);
    return null;
  }
  // DDP messages must be objects.
  if (msg === null || typeof msg !== 'object') {
    Meteor._debug("Discarding non-object DDP message", stringMessage);
    return null;
  }

  // massage msg to get it into "abstract ddp" rather than "wire ddp" format.

  // switch between "cleared" rep of unsetting fields and "undefined"
  // rep of same
  if (hasOwn.call(msg, 'cleared')) {
    if (!hasOwn.call(msg, 'fields')) {
      msg.fields = {};
    }
    msg.cleared.forEach(clearKey => {
      msg.fields[clearKey] = undefined;
    });
    delete msg.cleared;
  }
  ['fields', 'params', 'result'].forEach(field => {
    if (hasOwn.call(msg, field)) {
      msg[field] = EJSON._adjustTypesFromJSONValue(msg[field]);
    }
  });
  return msg;
};
DDPCommon.stringifyDDP = function (msg) {
  const copy = EJSON.clone(msg);

  // swizzle 'changed' messages from 'fields undefined' rep to 'fields
  // and cleared' rep
  if (hasOwn.call(msg, 'fields')) {
    const cleared = [];
    Object.keys(msg.fields).forEach(key => {
      const value = msg.fields[key];
      if (typeof value === "undefined") {
        cleared.push(key);
        delete copy.fields[key];
      }
    });
    if (!isEmpty(cleared)) {
      copy.cleared = cleared;
    }
    if (isEmpty(copy.fields)) {
      delete copy.fields;
    }
  }

  // adjust types to basic
  ['fields', 'params', 'result'].forEach(field => {
    if (hasOwn.call(copy, field)) {
      copy[field] = EJSON._adjustTypesToJSONValue(copy[field]);
    }
  });
  if (msg.id && typeof msg.id !== 'string') {
    throw new Error("Message id is not a string");
  }
  return JSON.stringify(copy);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"method_invocation.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ddp-common/method_invocation.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Instance name is this because it is usually referred to as this inside a
// method definition
/**
 * @summary The state for a single invocation of a method, referenced by this
 * inside a method definition.
 * @param {Object} options
 * @instanceName this
 * @showInstanceName true
 */
DDPCommon.MethodInvocation = class MethodInvocation {
  constructor(options) {
    // true if we're running not the actual method, but a stub (that is,
    // if we're on a client (which may be a browser, or in the future a
    // server connecting to another server) and presently running a
    // simulation of a server-side method for latency compensation
    // purposes). not currently true except in a client such as a browser,
    // since there's usually no point in running stubs unless you have a
    // zero-latency connection to the user.

    /**
     * @summary The name given to the method.
     * @locus Anywhere
     * @name  name
     * @memberOf DDPCommon.MethodInvocation
     * @instance
     * @type {String}
     */
    this.name = options.name;

    /**
     * @summary Access inside a method invocation.  Boolean value, true if this invocation is a stub.
     * @locus Anywhere
     * @name  isSimulation
     * @memberOf DDPCommon.MethodInvocation
     * @instance
     * @type {Boolean}
     */
    this.isSimulation = options.isSimulation;

    // call this function to allow other method invocations (from the
    // same client) to continue running without waiting for this one to
    // complete.
    this._unblock = options.unblock || function () {};
    this._calledUnblock = false;

    // used to know when the function apply was called by callAsync
    this._isFromCallAsync = options.isFromCallAsync;

    // current user id

    /**
     * @summary The id of the user that made this method call, or `null` if no user was logged in.
     * @locus Anywhere
     * @name  userId
     * @memberOf DDPCommon.MethodInvocation
     * @instance
     */
    this.userId = options.userId;

    // sets current user id in all appropriate server contexts and
    // reruns subscriptions
    this._setUserId = options.setUserId || function () {};

    // On the server, the connection this method call came in on.

    /**
     * @summary Access inside a method invocation. The [connection](#meteor_onconnection) that this method was received on. `null` if the method is not associated with a connection, eg. a server initiated method call. Calls to methods made from a server method which was in turn initiated from the client share the same `connection`.
     * @locus Server
     * @name  connection
     * @memberOf DDPCommon.MethodInvocation
     * @instance
     */
    this.connection = options.connection;

    // The seed for randomStream value generation
    this.randomSeed = options.randomSeed;

    // This is set by RandomStream.get; and holds the random stream state
    this.randomStream = null;
  }

  /**
   * @summary Call inside a method invocation.  Allow subsequent method from this client to begin running in a new fiber.
   * @locus Server
   * @memberOf DDPCommon.MethodInvocation
   * @instance
   */
  unblock() {
    this._calledUnblock = true;
    this._unblock();
  }

  /**
   * @summary Set the logged in user.
   * @locus Server
   * @memberOf DDPCommon.MethodInvocation
   * @instance
   * @param {String | null} userId The value that should be returned by `userId` on this connection.
   */
  setUserId(userId) {
    if (this._calledUnblock) {
      throw new Error("Can't call setUserId in a method after calling unblock");
    }
    this.userId = userId;
    this._setUserId(userId);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"random_stream.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ddp-common/random_stream.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// RandomStream allows for generation of pseudo-random values, from a seed.
//
// We use this for consistent 'random' numbers across the client and server.
// We want to generate probably-unique IDs on the client, and we ideally want
// the server to generate the same IDs when it executes the method.
//
// For generated values to be the same, we must seed ourselves the same way,
// and we must keep track of the current state of our pseudo-random generators.
// We call this state the scope. By default, we use the current DDP method
// invocation as our scope.  DDP now allows the client to specify a randomSeed.
// If a randomSeed is provided it will be used to seed our random sequences.
// In this way, client and server method calls will generate the same values.
//
// We expose multiple named streams; each stream is independent
// and is seeded differently (but predictably from the name).
// By using multiple streams, we support reordering of requests,
// as long as they occur on different streams.
//
// @param options {Optional Object}
//   seed: Array or value - Seed value(s) for the generator.
//                          If an array, will be used as-is
//                          If a value, will be converted to a single-value array
//                          If omitted, a random array will be used as the seed.
DDPCommon.RandomStream = class RandomStream {
  constructor(options) {
    this.seed = [].concat(options.seed || randomToken());
    this.sequences = Object.create(null);
  }

  // Get a random sequence with the specified name, creating it if does not exist.
  // New sequences are seeded with the seed concatenated with the name.
  // By passing a seed into Random.create, we use the Alea generator.
  _sequence(name) {
    var self = this;
    var sequence = self.sequences[name] || null;
    if (sequence === null) {
      var sequenceSeed = self.seed.concat(name);
      for (var i = 0; i < sequenceSeed.length; i++) {
        if (typeof sequenceSeed[i] === "function") {
          sequenceSeed[i] = sequenceSeed[i]();
        }
      }
      self.sequences[name] = sequence = Random.createWithSeeds.apply(null, sequenceSeed);
    }
    return sequence;
  }
};

// Returns a random string of sufficient length for a random seed.
// This is a placeholder function; a similar function is planned
// for Random itself; when that is added we should remove this function,
// and call Random's randomToken instead.
function randomToken() {
  return Random.hexString(20);
}
;

// Returns the random stream with the specified name, in the specified
// scope. If a scope is passed, then we use that to seed a (not
// cryptographically secure) PRNG using the fast Alea algorithm.  If
// scope is null (or otherwise falsey) then we use a generated seed.
//
// However, scope will normally be the current DDP method invocation,
// so we'll use the stream with the specified name, and we should get
// consistent values on the client and server sides of a method call.
DDPCommon.RandomStream.get = function (scope, name) {
  if (!name) {
    name = "default";
  }
  if (!scope) {
    // There was no scope passed in; the sequence won't actually be
    // reproducible. but make it fast (and not cryptographically
    // secure) anyways, so that the behavior is similar to what you'd
    // get by passing in a scope.
    return Random.insecure;
  }
  var randomStream = scope.randomStream;
  if (!randomStream) {
    scope.randomStream = randomStream = new DDPCommon.RandomStream({
      seed: scope.randomSeed
    });
  }
  return randomStream._sequence(name);
};

// Creates a randomSeed for passing to a method call.
// Note that we take enclosing as an argument,
// though we expect it to be DDP._CurrentMethodInvocation.get()
// However, we often evaluate makeRpcSeed lazily, and thus the relevant
// invocation may not be the one currently in scope.
// If enclosing is null, we'll use Random and values won't be repeatable.
DDPCommon.makeRpcSeed = function (enclosing, methodName) {
  var stream = DDPCommon.RandomStream.get(enclosing, '/rpc/' + methodName);
  return stream.hexString(20);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/ddp-common/namespace.js");
require("/node_modules/meteor/ddp-common/heartbeat.js");
require("/node_modules/meteor/ddp-common/utils.js");
require("/node_modules/meteor/ddp-common/method_invocation.js");
require("/node_modules/meteor/ddp-common/random_stream.js");

/* Exports */
Package._define("ddp-common", {
  DDPCommon: DDPCommon
});

})();

//# sourceURL=meteor://💻app/packages/ddp-common.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZGRwLWNvbW1vbi9uYW1lc3BhY2UuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2RkcC1jb21tb24vaGVhcnRiZWF0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY29tbW9uL3V0aWxzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY29tbW9uL21ldGhvZF9pbnZvY2F0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9kZHAtY29tbW9uL3JhbmRvbV9zdHJlYW0uanMiXSwibmFtZXMiOlsiRERQQ29tbW9uIiwiSGVhcnRiZWF0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJoZWFydGJlYXRUaW1lb3V0IiwiX3NlbmRQaW5nIiwic2VuZFBpbmciLCJfb25UaW1lb3V0Iiwib25UaW1lb3V0IiwiX3NlZW5QYWNrZXQiLCJfaGVhcnRiZWF0SW50ZXJ2YWxIYW5kbGUiLCJfaGVhcnRiZWF0VGltZW91dEhhbmRsZSIsInN0b3AiLCJfY2xlYXJIZWFydGJlYXRJbnRlcnZhbFRpbWVyIiwiX2NsZWFySGVhcnRiZWF0VGltZW91dFRpbWVyIiwic3RhcnQiLCJfc3RhcnRIZWFydGJlYXRJbnRlcnZhbFRpbWVyIiwiTWV0ZW9yIiwic2V0SW50ZXJ2YWwiLCJfaGVhcnRiZWF0SW50ZXJ2YWxGaXJlZCIsIl9zdGFydEhlYXJ0YmVhdFRpbWVvdXRUaW1lciIsInNldFRpbWVvdXQiLCJfaGVhcnRiZWF0VGltZW91dEZpcmVkIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsIm1lc3NhZ2VSZWNlaXZlZCIsIm1vZHVsZSIsImV4cG9ydCIsImhhc093biIsInNsaWNlIiwia2V5cyIsImlzRW1wdHkiLCJsYXN0IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsIm9iaiIsImlzQXJyYXkiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwiYXJyYXkiLCJuIiwiZ3VhcmQiLCJNYXRoIiwibWF4IiwiU1VQUE9SVEVEX0REUF9WRVJTSU9OUyIsInBhcnNlRERQIiwic3RyaW5nTWVzc2FnZSIsIm1zZyIsIkpTT04iLCJwYXJzZSIsImUiLCJfZGVidWciLCJmaWVsZHMiLCJjbGVhcmVkIiwiZm9yRWFjaCIsImNsZWFyS2V5IiwidW5kZWZpbmVkIiwiZmllbGQiLCJFSlNPTiIsIl9hZGp1c3RUeXBlc0Zyb21KU09OVmFsdWUiLCJzdHJpbmdpZnlERFAiLCJjb3B5IiwiY2xvbmUiLCJ2YWx1ZSIsInB1c2giLCJfYWRqdXN0VHlwZXNUb0pTT05WYWx1ZSIsImlkIiwiRXJyb3IiLCJzdHJpbmdpZnkiLCJNZXRob2RJbnZvY2F0aW9uIiwibmFtZSIsImlzU2ltdWxhdGlvbiIsIl91bmJsb2NrIiwidW5ibG9jayIsIl9jYWxsZWRVbmJsb2NrIiwiX2lzRnJvbUNhbGxBc3luYyIsImlzRnJvbUNhbGxBc3luYyIsInVzZXJJZCIsIl9zZXRVc2VySWQiLCJzZXRVc2VySWQiLCJjb25uZWN0aW9uIiwicmFuZG9tU2VlZCIsInJhbmRvbVN0cmVhbSIsIlJhbmRvbVN0cmVhbSIsInNlZWQiLCJjb25jYXQiLCJyYW5kb21Ub2tlbiIsInNlcXVlbmNlcyIsImNyZWF0ZSIsIl9zZXF1ZW5jZSIsInNlbGYiLCJzZXF1ZW5jZSIsInNlcXVlbmNlU2VlZCIsImkiLCJSYW5kb20iLCJjcmVhdGVXaXRoU2VlZHMiLCJhcHBseSIsImhleFN0cmluZyIsImdldCIsInNjb3BlIiwiaW5zZWN1cmUiLCJtYWtlUnBjU2VlZCIsImVuY2xvc2luZyIsIm1ldGhvZE5hbWUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLFNBQVMsR0FBRyxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUNSZDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUksRUFBRTtFQUNsRCxJQUFJLENBQUNBLElBQUksRUFBRTtJQUNUQSxJQUFJLEdBQUcsU0FBUztFQUNsQjtFQUNBLElBQUksQ0FBQzZCLEtBQUssRUFBRTtJQUNWO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBT0wsTUFBTSxDQUFDTSxRQUFRO0VBQ3hCO0VBQ0EsSUFBSWxCLFlBQVksR0FBR2lCLEtBQUssQ0FBQ2pCLFlBQVk7RUFDckMsSUFBSSxDQUFDQSxZQUFZLEVBQUU7SUFDakJpQixLQUFLLENBQUNqQixZQUFZLEdBQUdBLFlBQVksR0FBRyxJQUFJdEYsU0FBUyxDQUFDdUYsWUFBWSxDQUFDO01BQzdEQyxJQUFJLEVBQUVlLEtBQUssQ0FBQ2xCO0lBQ2QsQ0FBQyxDQUFDO0VBQ0o7RUFDQSxPQUFPQyxZQUFZLENBQUNPLFNBQVMsQ0FBQ25CLElBQUksQ0FBQztBQUNyQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBMUUsU0FBUyxDQUFDeUcsV0FBVyxHQUFHLFVBQVVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO0VBQ3ZELElBQUlDLE1BQU0sR0FBRzVHLFNBQVMsQ0FBQ3VGLFlBQVksQ0FBQ2UsR0FBRyxDQUFDSSxTQUFTLEVBQUUsT0FBTyxHQUFHQyxVQUFVLENBQUM7RUFDeEUsT0FBT0MsTUFBTSxDQUFDUCxTQUFTLENBQUMsRUFBRSxDQUFDO0FBQzdCLENBQUMsQyIsImZpbGUiOiIvcGFja2FnZXMvZGRwLWNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG5hbWVzcGFjZSBERFBDb21tb25cbiAqIEBzdW1tYXJ5IE5hbWVzcGFjZSBmb3IgRERQQ29tbW9uLXJlbGF0ZWQgbWV0aG9kcy9jbGFzc2VzLiBTaGFyZWQgYmV0d2VlbiBcbiAqIGBkZHAtY2xpZW50YCBhbmQgYGRkcC1zZXJ2ZXJgLCB3aGVyZSB0aGUgZGRwLWNsaWVudCBpcyB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIGEgZGRwIGNsaWVudCBmb3IgYm90aCBjbGllbnQgQU5EIHNlcnZlcjsgYW5kIHRoZSBkZHAgc2VydmVyIGlzIHRoZVxuICogaW1wbGVtZW50YXRpb24gb2YgdGhlIGxpdmVkYXRhIHNlcnZlciBhbmQgc3RyZWFtIHNlcnZlci4gQ29tbW9uIFxuICogZnVuY3Rpb25hbGl0eSBzaGFyZWQgYmV0d2VlbiBib3RoIGNhbiBiZSBzaGFyZWQgdW5kZXIgdGhpcyBuYW1lc3BhY2VcbiAqL1xuRERQQ29tbW9uID0ge307XG4iLCIvLyBIZWFydGJlYXQgb3B0aW9uczpcbi8vICAgaGVhcnRiZWF0SW50ZXJ2YWw6IGludGVydmFsIHRvIHNlbmQgcGluZ3MsIGluIG1pbGxpc2Vjb25kcy5cbi8vICAgaGVhcnRiZWF0VGltZW91dDogdGltZW91dCB0byBjbG9zZSB0aGUgY29ubmVjdGlvbiBpZiBhIHJlcGx5IGlzbid0XG4vLyAgICAgcmVjZWl2ZWQsIGluIG1pbGxpc2Vjb25kcy5cbi8vICAgc2VuZFBpbmc6IGZ1bmN0aW9uIHRvIGNhbGwgdG8gc2VuZCBhIHBpbmcgb24gdGhlIGNvbm5lY3Rpb24uXG4vLyAgIG9uVGltZW91dDogZnVuY3Rpb24gdG8gY2FsbCB0byBjbG9zZSB0aGUgY29ubmVjdGlvbi5cblxuRERQQ29tbW9uLkhlYXJ0YmVhdCA9IGNsYXNzIEhlYXJ0YmVhdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmhlYXJ0YmVhdEludGVydmFsID0gb3B0aW9ucy5oZWFydGJlYXRJbnRlcnZhbDtcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVvdXQgPSBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQ7XG4gICAgdGhpcy5fc2VuZFBpbmcgPSBvcHRpb25zLnNlbmRQaW5nO1xuICAgIHRoaXMuX29uVGltZW91dCA9IG9wdGlvbnMub25UaW1lb3V0O1xuICAgIHRoaXMuX3NlZW5QYWNrZXQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2hlYXJ0YmVhdEludGVydmFsSGFuZGxlID0gbnVsbDtcbiAgICB0aGlzLl9oZWFydGJlYXRUaW1lb3V0SGFuZGxlID0gbnVsbDtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fY2xlYXJIZWFydGJlYXRJbnRlcnZhbFRpbWVyKCk7XG4gICAgdGhpcy5fY2xlYXJIZWFydGJlYXRUaW1lb3V0VGltZXIoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX3N0YXJ0SGVhcnRiZWF0SW50ZXJ2YWxUaW1lcigpO1xuICB9XG5cbiAgX3N0YXJ0SGVhcnRiZWF0SW50ZXJ2YWxUaW1lcigpIHtcbiAgICB0aGlzLl9oZWFydGJlYXRJbnRlcnZhbEhhbmRsZSA9IE1ldGVvci5zZXRJbnRlcnZhbChcbiAgICAgICgpID0+IHRoaXMuX2hlYXJ0YmVhdEludGVydmFsRmlyZWQoKSxcbiAgICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxcbiAgICApO1xuICB9XG5cbiAgX3N0YXJ0SGVhcnRiZWF0VGltZW91dFRpbWVyKCkge1xuICAgIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXRIYW5kbGUgPSBNZXRlb3Iuc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXRGaXJlZCgpLFxuICAgICAgdGhpcy5oZWFydGJlYXRUaW1lb3V0XG4gICAgKTtcbiAgfVxuXG4gIF9jbGVhckhlYXJ0YmVhdEludGVydmFsVGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX2hlYXJ0YmVhdEludGVydmFsSGFuZGxlKSB7XG4gICAgICBNZXRlb3IuY2xlYXJJbnRlcnZhbCh0aGlzLl9oZWFydGJlYXRJbnRlcnZhbEhhbmRsZSk7XG4gICAgICB0aGlzLl9oZWFydGJlYXRJbnRlcnZhbEhhbmRsZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgX2NsZWFySGVhcnRiZWF0VGltZW91dFRpbWVyKCkge1xuICAgIGlmICh0aGlzLl9oZWFydGJlYXRUaW1lb3V0SGFuZGxlKSB7XG4gICAgICBNZXRlb3IuY2xlYXJUaW1lb3V0KHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXRIYW5kbGUpO1xuICAgICAgdGhpcy5faGVhcnRiZWF0VGltZW91dEhhbmRsZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGhlYXJ0YmVhdCBpbnRlcnZhbCB0aW1lciBpcyBmaXJlZCB3aGVuIHdlIHNob3VsZCBzZW5kIGEgcGluZy5cbiAgX2hlYXJ0YmVhdEludGVydmFsRmlyZWQoKSB7XG4gICAgLy8gZG9uJ3Qgc2VuZCBwaW5nIGlmIHdlJ3ZlIHNlZW4gYSBwYWNrZXQgc2luY2Ugd2UgbGFzdCBjaGVja2VkLFxuICAgIC8vICpvciogaWYgd2UgaGF2ZSBhbHJlYWR5IHNlbnQgYSBwaW5nIGFuZCBhcmUgYXdhaXRpbmcgYSB0aW1lb3V0LlxuICAgIC8vIFRoYXQgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGl0J3MgcG9zc2libGUgaWZcbiAgICAvLyBgdGhpcy5oZWFydGJlYXRJbnRlcnZhbGAgaXMgc21hbGxlciB0aGFuXG4gICAgLy8gYHRoaXMuaGVhcnRiZWF0VGltZW91dGAuXG4gICAgaWYgKCEgdGhpcy5fc2VlblBhY2tldCAmJiAhIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXRIYW5kbGUpIHtcbiAgICAgIHRoaXMuX3NlbmRQaW5nKCk7XG4gICAgICAvLyBTZXQgdXAgdGltZW91dCwgaW4gY2FzZSBhIHBvbmcgZG9lc24ndCBhcnJpdmUgaW4gdGltZS5cbiAgICAgIHRoaXMuX3N0YXJ0SGVhcnRiZWF0VGltZW91dFRpbWVyKCk7XG4gICAgfVxuICAgIHRoaXMuX3NlZW5QYWNrZXQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoZSBoZWFydGJlYXQgdGltZW91dCB0aW1lciBpcyBmaXJlZCB3aGVuIHdlIHNlbnQgYSBwaW5nLCBidXQgd2VcbiAgLy8gdGltZWQgb3V0IHdhaXRpbmcgZm9yIHRoZSBwb25nLlxuICBfaGVhcnRiZWF0VGltZW91dEZpcmVkKCkge1xuICAgIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXRIYW5kbGUgPSBudWxsO1xuICAgIHRoaXMuX29uVGltZW91dCgpO1xuICB9XG5cbiAgbWVzc2FnZVJlY2VpdmVkKCkge1xuICAgIC8vIFRlbGwgcGVyaW9kaWMgY2hlY2tpbiB0aGF0IHdlIGhhdmUgc2VlbiBhIHBhY2tldCwgYW5kIHRodXMgaXRcbiAgICAvLyBkb2VzIG5vdCBuZWVkIHRvIHNlbmQgYSBwaW5nIHRoaXMgY3ljbGUuXG4gICAgdGhpcy5fc2VlblBhY2tldCA9IHRydWU7XG4gICAgLy8gSWYgd2Ugd2VyZSB3YWl0aW5nIGZvciBhIHBvbmcsIHdlIGdvdCBpdC5cbiAgICBpZiAodGhpcy5faGVhcnRiZWF0VGltZW91dEhhbmRsZSkge1xuICAgICAgdGhpcy5fY2xlYXJIZWFydGJlYXRUaW1lb3V0VGltZXIoKTtcbiAgICB9XG4gIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KG9iaikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopIHx8XG4gICAgICB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5LCBuLCBndWFyZCkge1xuICBpZiAoYXJyYXkgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICgobiA9PSBudWxsKSB8fCBndWFyZCkge1xuICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBNYXRoLm1heChhcnJheS5sZW5ndGggLSBuLCAwKSk7XG59XG5cbkREUENvbW1vbi5TVVBQT1JURURfRERQX1ZFUlNJT05TID0gWyAnMScsICdwcmUyJywgJ3ByZTEnIF07XG5cbkREUENvbW1vbi5wYXJzZUREUCA9IGZ1bmN0aW9uIChzdHJpbmdNZXNzYWdlKSB7XG4gIHRyeSB7XG4gICAgdmFyIG1zZyA9IEpTT04ucGFyc2Uoc3RyaW5nTWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBNZXRlb3IuX2RlYnVnKFwiRGlzY2FyZGluZyBtZXNzYWdlIHdpdGggaW52YWxpZCBKU09OXCIsIHN0cmluZ01lc3NhZ2UpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIEREUCBtZXNzYWdlcyBtdXN0IGJlIG9iamVjdHMuXG4gIGlmIChtc2cgPT09IG51bGwgfHwgdHlwZW9mIG1zZyAhPT0gJ29iamVjdCcpIHtcbiAgICBNZXRlb3IuX2RlYnVnKFwiRGlzY2FyZGluZyBub24tb2JqZWN0IEREUCBtZXNzYWdlXCIsIHN0cmluZ01lc3NhZ2UpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gbWFzc2FnZSBtc2cgdG8gZ2V0IGl0IGludG8gXCJhYnN0cmFjdCBkZHBcIiByYXRoZXIgdGhhbiBcIndpcmUgZGRwXCIgZm9ybWF0LlxuXG4gIC8vIHN3aXRjaCBiZXR3ZWVuIFwiY2xlYXJlZFwiIHJlcCBvZiB1bnNldHRpbmcgZmllbGRzIGFuZCBcInVuZGVmaW5lZFwiXG4gIC8vIHJlcCBvZiBzYW1lXG4gIGlmIChoYXNPd24uY2FsbChtc2csICdjbGVhcmVkJykpIHtcbiAgICBpZiAoISBoYXNPd24uY2FsbChtc2csICdmaWVsZHMnKSkge1xuICAgICAgbXNnLmZpZWxkcyA9IHt9O1xuICAgIH1cbiAgICBtc2cuY2xlYXJlZC5mb3JFYWNoKGNsZWFyS2V5ID0+IHtcbiAgICAgIG1zZy5maWVsZHNbY2xlYXJLZXldID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIGRlbGV0ZSBtc2cuY2xlYXJlZDtcbiAgfVxuXG4gIFsnZmllbGRzJywgJ3BhcmFtcycsICdyZXN1bHQnXS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICBpZiAoaGFzT3duLmNhbGwobXNnLCBmaWVsZCkpIHtcbiAgICAgIG1zZ1tmaWVsZF0gPSBFSlNPTi5fYWRqdXN0VHlwZXNGcm9tSlNPTlZhbHVlKG1zZ1tmaWVsZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1zZztcbn07XG5cbkREUENvbW1vbi5zdHJpbmdpZnlERFAgPSBmdW5jdGlvbiAobXNnKSB7XG4gIGNvbnN0IGNvcHkgPSBFSlNPTi5jbG9uZShtc2cpO1xuXG4gIC8vIHN3aXp6bGUgJ2NoYW5nZWQnIG1lc3NhZ2VzIGZyb20gJ2ZpZWxkcyB1bmRlZmluZWQnIHJlcCB0byAnZmllbGRzXG4gIC8vIGFuZCBjbGVhcmVkJyByZXBcbiAgaWYgKGhhc093bi5jYWxsKG1zZywgJ2ZpZWxkcycpKSB7XG4gICAgY29uc3QgY2xlYXJlZCA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMobXNnLmZpZWxkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBtc2cuZmllbGRzW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY2xlYXJlZC5wdXNoKGtleSk7XG4gICAgICAgIGRlbGV0ZSBjb3B5LmZpZWxkc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCEgaXNFbXB0eShjbGVhcmVkKSkge1xuICAgICAgY29weS5jbGVhcmVkID0gY2xlYXJlZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShjb3B5LmZpZWxkcykpIHtcbiAgICAgIGRlbGV0ZSBjb3B5LmZpZWxkcztcbiAgICB9XG4gIH1cblxuICAvLyBhZGp1c3QgdHlwZXMgdG8gYmFzaWNcbiAgWydmaWVsZHMnLCAncGFyYW1zJywgJ3Jlc3VsdCddLmZvckVhY2goZmllbGQgPT4ge1xuICAgIGlmIChoYXNPd24uY2FsbChjb3B5LCBmaWVsZCkpIHtcbiAgICAgIGNvcHlbZmllbGRdID0gRUpTT04uX2FkanVzdFR5cGVzVG9KU09OVmFsdWUoY29weVtmaWVsZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1zZy5pZCAmJiB0eXBlb2YgbXNnLmlkICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1lc3NhZ2UgaWQgaXMgbm90IGEgc3RyaW5nXCIpO1xuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvcHkpO1xufTtcbiIsIi8vIEluc3RhbmNlIG5hbWUgaXMgdGhpcyBiZWNhdXNlIGl0IGlzIHVzdWFsbHkgcmVmZXJyZWQgdG8gYXMgdGhpcyBpbnNpZGUgYVxuLy8gbWV0aG9kIGRlZmluaXRpb25cbi8qKlxuICogQHN1bW1hcnkgVGhlIHN0YXRlIGZvciBhIHNpbmdsZSBpbnZvY2F0aW9uIG9mIGEgbWV0aG9kLCByZWZlcmVuY2VkIGJ5IHRoaXNcbiAqIGluc2lkZSBhIG1ldGhvZCBkZWZpbml0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBpbnN0YW5jZU5hbWUgdGhpc1xuICogQHNob3dJbnN0YW5jZU5hbWUgdHJ1ZVxuICovXG5ERFBDb21tb24uTWV0aG9kSW52b2NhdGlvbiA9IGNsYXNzIE1ldGhvZEludm9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLy8gdHJ1ZSBpZiB3ZSdyZSBydW5uaW5nIG5vdCB0aGUgYWN0dWFsIG1ldGhvZCwgYnV0IGEgc3R1YiAodGhhdCBpcyxcbiAgICAvLyBpZiB3ZSdyZSBvbiBhIGNsaWVudCAod2hpY2ggbWF5IGJlIGEgYnJvd3Nlciwgb3IgaW4gdGhlIGZ1dHVyZSBhXG4gICAgLy8gc2VydmVyIGNvbm5lY3RpbmcgdG8gYW5vdGhlciBzZXJ2ZXIpIGFuZCBwcmVzZW50bHkgcnVubmluZyBhXG4gICAgLy8gc2ltdWxhdGlvbiBvZiBhIHNlcnZlci1zaWRlIG1ldGhvZCBmb3IgbGF0ZW5jeSBjb21wZW5zYXRpb25cbiAgICAvLyBwdXJwb3NlcykuIG5vdCBjdXJyZW50bHkgdHJ1ZSBleGNlcHQgaW4gYSBjbGllbnQgc3VjaCBhcyBhIGJyb3dzZXIsXG4gICAgLy8gc2luY2UgdGhlcmUncyB1c3VhbGx5IG5vIHBvaW50IGluIHJ1bm5pbmcgc3R1YnMgdW5sZXNzIHlvdSBoYXZlIGFcbiAgICAvLyB6ZXJvLWxhdGVuY3kgY29ubmVjdGlvbiB0byB0aGUgdXNlci5cblxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IFRoZSBuYW1lIGdpdmVuIHRvIHRoZSBtZXRob2QuXG4gICAgICogQGxvY3VzIEFueXdoZXJlXG4gICAgICogQG5hbWUgIG5hbWVcbiAgICAgKiBAbWVtYmVyT2YgRERQQ29tbW9uLk1ldGhvZEludm9jYXRpb25cbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IEFjY2VzcyBpbnNpZGUgYSBtZXRob2QgaW52b2NhdGlvbi4gIEJvb2xlYW4gdmFsdWUsIHRydWUgaWYgdGhpcyBpbnZvY2F0aW9uIGlzIGEgc3R1Yi5cbiAgICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICAgKiBAbmFtZSAgaXNTaW11bGF0aW9uXG4gICAgICogQG1lbWJlck9mIEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc1NpbXVsYXRpb24gPSBvcHRpb25zLmlzU2ltdWxhdGlvbjtcblxuICAgIC8vIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBhbGxvdyBvdGhlciBtZXRob2QgaW52b2NhdGlvbnMgKGZyb20gdGhlXG4gICAgLy8gc2FtZSBjbGllbnQpIHRvIGNvbnRpbnVlIHJ1bm5pbmcgd2l0aG91dCB3YWl0aW5nIGZvciB0aGlzIG9uZSB0b1xuICAgIC8vIGNvbXBsZXRlLlxuICAgIHRoaXMuX3VuYmxvY2sgPSBvcHRpb25zLnVuYmxvY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5fY2FsbGVkVW5ibG9jayA9IGZhbHNlO1xuXG4gICAgLy8gdXNlZCB0byBrbm93IHdoZW4gdGhlIGZ1bmN0aW9uIGFwcGx5IHdhcyBjYWxsZWQgYnkgY2FsbEFzeW5jXG4gICAgdGhpcy5faXNGcm9tQ2FsbEFzeW5jID0gb3B0aW9ucy5pc0Zyb21DYWxsQXN5bmM7XG5cbiAgICAvLyBjdXJyZW50IHVzZXIgaWRcblxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IFRoZSBpZCBvZiB0aGUgdXNlciB0aGF0IG1hZGUgdGhpcyBtZXRob2QgY2FsbCwgb3IgYG51bGxgIGlmIG5vIHVzZXIgd2FzIGxvZ2dlZCBpbi5cbiAgICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICAgKiBAbmFtZSAgdXNlcklkXG4gICAgICogQG1lbWJlck9mIEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy51c2VySWQgPSBvcHRpb25zLnVzZXJJZDtcblxuICAgIC8vIHNldHMgY3VycmVudCB1c2VyIGlkIGluIGFsbCBhcHByb3ByaWF0ZSBzZXJ2ZXIgY29udGV4dHMgYW5kXG4gICAgLy8gcmVydW5zIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLl9zZXRVc2VySWQgPSBvcHRpb25zLnNldFVzZXJJZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIE9uIHRoZSBzZXJ2ZXIsIHRoZSBjb25uZWN0aW9uIHRoaXMgbWV0aG9kIGNhbGwgY2FtZSBpbiBvbi5cblxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IEFjY2VzcyBpbnNpZGUgYSBtZXRob2QgaW52b2NhdGlvbi4gVGhlIFtjb25uZWN0aW9uXSgjbWV0ZW9yX29uY29ubmVjdGlvbikgdGhhdCB0aGlzIG1ldGhvZCB3YXMgcmVjZWl2ZWQgb24uIGBudWxsYCBpZiB0aGUgbWV0aG9kIGlzIG5vdCBhc3NvY2lhdGVkIHdpdGggYSBjb25uZWN0aW9uLCBlZy4gYSBzZXJ2ZXIgaW5pdGlhdGVkIG1ldGhvZCBjYWxsLiBDYWxscyB0byBtZXRob2RzIG1hZGUgZnJvbSBhIHNlcnZlciBtZXRob2Qgd2hpY2ggd2FzIGluIHR1cm4gaW5pdGlhdGVkIGZyb20gdGhlIGNsaWVudCBzaGFyZSB0aGUgc2FtZSBgY29ubmVjdGlvbmAuXG4gICAgICogQGxvY3VzIFNlcnZlclxuICAgICAqIEBuYW1lICBjb25uZWN0aW9uXG4gICAgICogQG1lbWJlck9mIEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5jb25uZWN0aW9uID0gb3B0aW9ucy5jb25uZWN0aW9uO1xuXG4gICAgLy8gVGhlIHNlZWQgZm9yIHJhbmRvbVN0cmVhbSB2YWx1ZSBnZW5lcmF0aW9uXG4gICAgdGhpcy5yYW5kb21TZWVkID0gb3B0aW9ucy5yYW5kb21TZWVkO1xuXG4gICAgLy8gVGhpcyBpcyBzZXQgYnkgUmFuZG9tU3RyZWFtLmdldDsgYW5kIGhvbGRzIHRoZSByYW5kb20gc3RyZWFtIHN0YXRlXG4gICAgdGhpcy5yYW5kb21TdHJlYW0gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IENhbGwgaW5zaWRlIGEgbWV0aG9kIGludm9jYXRpb24uICBBbGxvdyBzdWJzZXF1ZW50IG1ldGhvZCBmcm9tIHRoaXMgY2xpZW50IHRvIGJlZ2luIHJ1bm5pbmcgaW4gYSBuZXcgZmliZXIuXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQG1lbWJlck9mIEREUENvbW1vbi5NZXRob2RJbnZvY2F0aW9uXG4gICAqIEBpbnN0YW5jZVxuICAgKi9cbiAgdW5ibG9jaygpIHtcbiAgICB0aGlzLl9jYWxsZWRVbmJsb2NrID0gdHJ1ZTtcbiAgICB0aGlzLl91bmJsb2NrKCk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgU2V0IHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAbWVtYmVyT2YgRERQQ29tbW9uLk1ldGhvZEludm9jYXRpb25cbiAgICogQGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgbnVsbH0gdXNlcklkIFRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBieSBgdXNlcklkYCBvbiB0aGlzIGNvbm5lY3Rpb24uXG4gICAqL1xuICBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgaWYgKHRoaXMuX2NhbGxlZFVuYmxvY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGNhbGwgc2V0VXNlcklkIGluIGEgbWV0aG9kIGFmdGVyIGNhbGxpbmcgdW5ibG9ja1wiKTtcbiAgICB9XG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgdGhpcy5fc2V0VXNlcklkKHVzZXJJZCk7XG4gIH1cbn07XG4iLCIvLyBSYW5kb21TdHJlYW0gYWxsb3dzIGZvciBnZW5lcmF0aW9uIG9mIHBzZXVkby1yYW5kb20gdmFsdWVzLCBmcm9tIGEgc2VlZC5cbi8vXG4vLyBXZSB1c2UgdGhpcyBmb3IgY29uc2lzdGVudCAncmFuZG9tJyBudW1iZXJzIGFjcm9zcyB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIuXG4vLyBXZSB3YW50IHRvIGdlbmVyYXRlIHByb2JhYmx5LXVuaXF1ZSBJRHMgb24gdGhlIGNsaWVudCwgYW5kIHdlIGlkZWFsbHkgd2FudFxuLy8gdGhlIHNlcnZlciB0byBnZW5lcmF0ZSB0aGUgc2FtZSBJRHMgd2hlbiBpdCBleGVjdXRlcyB0aGUgbWV0aG9kLlxuLy9cbi8vIEZvciBnZW5lcmF0ZWQgdmFsdWVzIHRvIGJlIHRoZSBzYW1lLCB3ZSBtdXN0IHNlZWQgb3Vyc2VsdmVzIHRoZSBzYW1lIHdheSxcbi8vIGFuZCB3ZSBtdXN0IGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgc3RhdGUgb2Ygb3VyIHBzZXVkby1yYW5kb20gZ2VuZXJhdG9ycy5cbi8vIFdlIGNhbGwgdGhpcyBzdGF0ZSB0aGUgc2NvcGUuIEJ5IGRlZmF1bHQsIHdlIHVzZSB0aGUgY3VycmVudCBERFAgbWV0aG9kXG4vLyBpbnZvY2F0aW9uIGFzIG91ciBzY29wZS4gIEREUCBub3cgYWxsb3dzIHRoZSBjbGllbnQgdG8gc3BlY2lmeSBhIHJhbmRvbVNlZWQuXG4vLyBJZiBhIHJhbmRvbVNlZWQgaXMgcHJvdmlkZWQgaXQgd2lsbCBiZSB1c2VkIHRvIHNlZWQgb3VyIHJhbmRvbSBzZXF1ZW5jZXMuXG4vLyBJbiB0aGlzIHdheSwgY2xpZW50IGFuZCBzZXJ2ZXIgbWV0aG9kIGNhbGxzIHdpbGwgZ2VuZXJhdGUgdGhlIHNhbWUgdmFsdWVzLlxuLy9cbi8vIFdlIGV4cG9zZSBtdWx0aXBsZSBuYW1lZCBzdHJlYW1zOyBlYWNoIHN0cmVhbSBpcyBpbmRlcGVuZGVudFxuLy8gYW5kIGlzIHNlZWRlZCBkaWZmZXJlbnRseSAoYnV0IHByZWRpY3RhYmx5IGZyb20gdGhlIG5hbWUpLlxuLy8gQnkgdXNpbmcgbXVsdGlwbGUgc3RyZWFtcywgd2Ugc3VwcG9ydCByZW9yZGVyaW5nIG9mIHJlcXVlc3RzLFxuLy8gYXMgbG9uZyBhcyB0aGV5IG9jY3VyIG9uIGRpZmZlcmVudCBzdHJlYW1zLlxuLy9cbi8vIEBwYXJhbSBvcHRpb25zIHtPcHRpb25hbCBPYmplY3R9XG4vLyAgIHNlZWQ6IEFycmF5IG9yIHZhbHVlIC0gU2VlZCB2YWx1ZShzKSBmb3IgdGhlIGdlbmVyYXRvci5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBhbiBhcnJheSwgd2lsbCBiZSB1c2VkIGFzLWlzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgYSB2YWx1ZSwgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBzaW5nbGUtdmFsdWUgYXJyYXlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBvbWl0dGVkLCBhIHJhbmRvbSBhcnJheSB3aWxsIGJlIHVzZWQgYXMgdGhlIHNlZWQuXG5ERFBDb21tb24uUmFuZG9tU3RyZWFtID0gY2xhc3MgUmFuZG9tU3RyZWFtIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuc2VlZCA9IFtdLmNvbmNhdChvcHRpb25zLnNlZWQgfHwgcmFuZG9tVG9rZW4oKSk7XG4gICAgdGhpcy5zZXF1ZW5jZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgLy8gR2V0IGEgcmFuZG9tIHNlcXVlbmNlIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLCBjcmVhdGluZyBpdCBpZiBkb2VzIG5vdCBleGlzdC5cbiAgLy8gTmV3IHNlcXVlbmNlcyBhcmUgc2VlZGVkIHdpdGggdGhlIHNlZWQgY29uY2F0ZW5hdGVkIHdpdGggdGhlIG5hbWUuXG4gIC8vIEJ5IHBhc3NpbmcgYSBzZWVkIGludG8gUmFuZG9tLmNyZWF0ZSwgd2UgdXNlIHRoZSBBbGVhIGdlbmVyYXRvci5cbiAgX3NlcXVlbmNlKG5hbWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgc2VxdWVuY2UgPSBzZWxmLnNlcXVlbmNlc1tuYW1lXSB8fCBudWxsO1xuICAgIGlmIChzZXF1ZW5jZSA9PT0gbnVsbCkge1xuICAgICAgdmFyIHNlcXVlbmNlU2VlZCA9IHNlbGYuc2VlZC5jb25jYXQobmFtZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcXVlbmNlU2VlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIHNlcXVlbmNlU2VlZFtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc2VxdWVuY2VTZWVkW2ldID0gc2VxdWVuY2VTZWVkW2ldKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYuc2VxdWVuY2VzW25hbWVdID0gc2VxdWVuY2UgPSBSYW5kb20uY3JlYXRlV2l0aFNlZWRzLmFwcGx5KG51bGwsIHNlcXVlbmNlU2VlZCk7XG4gICAgfVxuICAgIHJldHVybiBzZXF1ZW5jZTtcbiAgfVxufTtcblxuLy8gUmV0dXJucyBhIHJhbmRvbSBzdHJpbmcgb2Ygc3VmZmljaWVudCBsZW5ndGggZm9yIGEgcmFuZG9tIHNlZWQuXG4vLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgZnVuY3Rpb247IGEgc2ltaWxhciBmdW5jdGlvbiBpcyBwbGFubmVkXG4vLyBmb3IgUmFuZG9tIGl0c2VsZjsgd2hlbiB0aGF0IGlzIGFkZGVkIHdlIHNob3VsZCByZW1vdmUgdGhpcyBmdW5jdGlvbixcbi8vIGFuZCBjYWxsIFJhbmRvbSdzIHJhbmRvbVRva2VuIGluc3RlYWQuXG5mdW5jdGlvbiByYW5kb21Ub2tlbigpIHtcbiAgcmV0dXJuIFJhbmRvbS5oZXhTdHJpbmcoMjApO1xufTtcblxuLy8gUmV0dXJucyB0aGUgcmFuZG9tIHN0cmVhbSB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZSwgaW4gdGhlIHNwZWNpZmllZFxuLy8gc2NvcGUuIElmIGEgc2NvcGUgaXMgcGFzc2VkLCB0aGVuIHdlIHVzZSB0aGF0IHRvIHNlZWQgYSAobm90XG4vLyBjcnlwdG9ncmFwaGljYWxseSBzZWN1cmUpIFBSTkcgdXNpbmcgdGhlIGZhc3QgQWxlYSBhbGdvcml0aG0uICBJZlxuLy8gc2NvcGUgaXMgbnVsbCAob3Igb3RoZXJ3aXNlIGZhbHNleSkgdGhlbiB3ZSB1c2UgYSBnZW5lcmF0ZWQgc2VlZC5cbi8vXG4vLyBIb3dldmVyLCBzY29wZSB3aWxsIG5vcm1hbGx5IGJlIHRoZSBjdXJyZW50IEREUCBtZXRob2QgaW52b2NhdGlvbixcbi8vIHNvIHdlJ2xsIHVzZSB0aGUgc3RyZWFtIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLCBhbmQgd2Ugc2hvdWxkIGdldFxuLy8gY29uc2lzdGVudCB2YWx1ZXMgb24gdGhlIGNsaWVudCBhbmQgc2VydmVyIHNpZGVzIG9mIGEgbWV0aG9kIGNhbGwuXG5ERFBDb21tb24uUmFuZG9tU3RyZWFtLmdldCA9IGZ1bmN0aW9uIChzY29wZSwgbmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICBuYW1lID0gXCJkZWZhdWx0XCI7XG4gIH1cbiAgaWYgKCFzY29wZSkge1xuICAgIC8vIFRoZXJlIHdhcyBubyBzY29wZSBwYXNzZWQgaW47IHRoZSBzZXF1ZW5jZSB3b24ndCBhY3R1YWxseSBiZVxuICAgIC8vIHJlcHJvZHVjaWJsZS4gYnV0IG1ha2UgaXQgZmFzdCAoYW5kIG5vdCBjcnlwdG9ncmFwaGljYWxseVxuICAgIC8vIHNlY3VyZSkgYW55d2F5cywgc28gdGhhdCB0aGUgYmVoYXZpb3IgaXMgc2ltaWxhciB0byB3aGF0IHlvdSdkXG4gICAgLy8gZ2V0IGJ5IHBhc3NpbmcgaW4gYSBzY29wZS5cbiAgICByZXR1cm4gUmFuZG9tLmluc2VjdXJlO1xuICB9XG4gIHZhciByYW5kb21TdHJlYW0gPSBzY29wZS5yYW5kb21TdHJlYW07XG4gIGlmICghcmFuZG9tU3RyZWFtKSB7XG4gICAgc2NvcGUucmFuZG9tU3RyZWFtID0gcmFuZG9tU3RyZWFtID0gbmV3IEREUENvbW1vbi5SYW5kb21TdHJlYW0oe1xuICAgICAgc2VlZDogc2NvcGUucmFuZG9tU2VlZFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByYW5kb21TdHJlYW0uX3NlcXVlbmNlKG5hbWUpO1xufTtcblxuLy8gQ3JlYXRlcyBhIHJhbmRvbVNlZWQgZm9yIHBhc3NpbmcgdG8gYSBtZXRob2QgY2FsbC5cbi8vIE5vdGUgdGhhdCB3ZSB0YWtlIGVuY2xvc2luZyBhcyBhbiBhcmd1bWVudCxcbi8vIHRob3VnaCB3ZSBleHBlY3QgaXQgdG8gYmUgRERQLl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbi5nZXQoKVxuLy8gSG93ZXZlciwgd2Ugb2Z0ZW4gZXZhbHVhdGUgbWFrZVJwY1NlZWQgbGF6aWx5LCBhbmQgdGh1cyB0aGUgcmVsZXZhbnRcbi8vIGludm9jYXRpb24gbWF5IG5vdCBiZSB0aGUgb25lIGN1cnJlbnRseSBpbiBzY29wZS5cbi8vIElmIGVuY2xvc2luZyBpcyBudWxsLCB3ZSdsbCB1c2UgUmFuZG9tIGFuZCB2YWx1ZXMgd29uJ3QgYmUgcmVwZWF0YWJsZS5cbkREUENvbW1vbi5tYWtlUnBjU2VlZCA9IGZ1bmN0aW9uIChlbmNsb3NpbmcsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIHN0cmVhbSA9IEREUENvbW1vbi5SYW5kb21TdHJlYW0uZ2V0KGVuY2xvc2luZywgJy9ycGMvJyArIG1ldGhvZE5hbWUpO1xuICByZXR1cm4gc3RyZWFtLmhleFN0cmluZygyMCk7XG59O1xuIl19
