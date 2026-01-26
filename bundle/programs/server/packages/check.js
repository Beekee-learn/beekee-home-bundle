(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var EJSON = Package.ejson.EJSON;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var check, Match;

var require = meteorInstall({"node_modules":{"meteor":{"check":{"match.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/check/match.js                                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  check: () => check,
  Match: () => Match
});
let isPlainObject;
module.link("./isPlainObject", {
  isPlainObject(v) {
    isPlainObject = v;
  }
}, 0);
// Things we explicitly do NOT support:
//    - heterogenous arrays

const currentArgumentChecker = new Meteor.EnvironmentVariable();
const hasOwn = Object.prototype.hasOwnProperty;
const format = result => {
  const err = new Match.Error(result.message);
  if (result.path) {
    err.message += " in field ".concat(result.path);
    err.path = result.path;
  }
  return err;
};

/**
 * @summary Check that a value matches a [pattern](#matchpatterns).
 * If the value does not match the pattern, throw a `Match.Error`.
 * By default, it will throw immediately at the first error encountered. Pass in { throwAllErrors: true } to throw all errors.
 *
 * Particularly useful to assert that arguments to a function have the right
 * types and structure.
 * @locus Anywhere
 * @param {Any} value The value to check
 * @param {MatchPattern} pattern The pattern to match `value` against
 * @param {Object} [options={}] Additional options for check
 * @param {Boolean} [options.throwAllErrors=false] If true, throw all errors
 */
function check(value, pattern) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    throwAllErrors: false
  };
  // Record that check got called, if somebody cared.
  //
  // We use getOrNullIfOutsideFiber so that it's OK to call check()
  // from non-Fiber server contexts; the downside is that if you forget to
  // bindEnvironment on some random callback in your method/publisher,
  // it might not find the argumentChecker and you'll get an error about
  // not checking an argument that it looks like you're checking (instead
  // of just getting a "Node code must run in a Fiber" error).
  const argChecker = currentArgumentChecker.getOrNullIfOutsideFiber();
  if (argChecker) {
    argChecker.checking(value);
  }
  const result = testSubtree(value, pattern, options.throwAllErrors);
  if (result) {
    if (options.throwAllErrors) {
      throw Array.isArray(result) ? result.map(r => format(r)) : [format(result)];
    } else {
      throw format(result);
    }
  }
}
;

/**
 * @namespace Match
 * @summary The namespace for all Match types and methods.
 */
const Match = {
  Optional: function (pattern) {
    return new Optional(pattern);
  },
  Maybe: function (pattern) {
    return new Maybe(pattern);
  },
  OneOf: function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new OneOf(args);
  },
  Any: ['__any__'],
  Where: function (condition) {
    return new Where(condition);
  },
  ObjectIncluding: function (pattern) {
    return new ObjectIncluding(pattern);
  },
  ObjectWithValues: function (pattern) {
    return new ObjectWithValues(pattern);
  },
  // Matches only signed 32-bit integers
  Integer: ['__integer__'],
  // XXX matchers should know how to describe themselves for errors
  Error: Meteor.makeErrorType('Match.Error', function (msg) {
    this.message = "Match error: ".concat(msg);

    // The path of the value that failed to match. Initially empty, this gets
    // populated by catching and rethrowing the exception as it goes back up the
    // stack.
    // E.g.: "vals[3].entity.created"
    this.path = '';

    // If this gets sent over DDP, don't give full internal details but at least
    // provide something better than 500 Internal server error.
    this.sanitizedError = new Meteor.Error(400, 'Match failed');
  }),
  // Tests to see if value matches pattern. Unlike check, it merely returns true
  // or false (unless an error other than Match.Error was thrown). It does not
  // interact with _failIfArgumentsAreNotAllChecked.
  // XXX maybe also implement a Match.match which returns more information about
  //     failures but without using exception handling or doing what check()
  //     does with _failIfArgumentsAreNotAllChecked and Meteor.Error conversion

  /**
   * @summary Returns true if the value matches the pattern.
   * @locus Anywhere
   * @param {Any} value The value to check
   * @param {MatchPattern} pattern The pattern to match `value` against
   */
  test(value, pattern) {
    return !testSubtree(value, pattern);
  },
  // Runs `f.apply(context, args)`. If check() is not called on every element of
  // `args` (either directly or in the first level of an array), throws an error
  // (using `description` in the message).
  _failIfArgumentsAreNotAllChecked(f, context, args, description) {
    const argChecker = new ArgumentChecker(args, description);
    const result = currentArgumentChecker.withValue(argChecker, () => f.apply(context, args));

    // If f didn't itself throw, make sure it checked all of its arguments.
    argChecker.throwUnlessAllArgumentsHaveBeenChecked();
    return result;
  }
};
class Optional {
  constructor(pattern) {
    this.pattern = pattern;
  }
}
class Maybe {
  constructor(pattern) {
    this.pattern = pattern;
  }
}
class OneOf {
  constructor(choices) {
    if (!choices || choices.length === 0) {
      throw new Error('Must provide at least one choice to Match.OneOf');
    }
    this.choices = choices;
  }
}
class Where {
  constructor(condition) {
    this.condition = condition;
  }
}
class ObjectIncluding {
  constructor(pattern) {
    this.pattern = pattern;
  }
}
class ObjectWithValues {
  constructor(pattern) {
    this.pattern = pattern;
  }
}
const stringForErrorMessage = function (value) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (value === null) {
    return 'null';
  }
  if (options.onlyShowType) {
    return typeof value;
  }

  // Your average non-object things.  Saves from doing the try/catch below for.
  if (typeof value !== 'object') {
    return EJSON.stringify(value);
  }
  try {
    // Find objects with circular references since EJSON doesn't support them yet (Issue #4778 + Unaccepted PR)
    // If the native stringify is going to choke, EJSON.stringify is going to choke too.
    JSON.stringify(value);
  } catch (stringifyError) {
    if (stringifyError.name === 'TypeError') {
      return typeof value;
    }
  }
  return EJSON.stringify(value);
};
const typeofChecks = [[String, 'string'], [Number, 'number'], [Boolean, 'boolean'],
// While we don't allow undefined/function in EJSON, this is good for optional
// arguments with OneOf.
[Function, 'function'], [undefined, 'undefined']];

// Return `false` if it matches. Otherwise, returns an object with a `message` and a `path` field or an array of objects each with a `message` and a `path` field when collecting errors.
const testSubtree = function (value, pattern) {
  let collectErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let errors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  let path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  // Match anything!
  if (pattern === Match.Any) {
    return false;
  }

  // Basic atomic types.
  // Do not match boxed objects (e.g. String, Boolean)
  for (let i = 0; i < typeofChecks.length; ++i) {
    if (pattern === typeofChecks[i][0]) {
      if (typeof value === typeofChecks[i][1]) {
        return false;
      }
      return {
        message: "Expected ".concat(typeofChecks[i][1], ", got ").concat(stringForErrorMessage(value, {
          onlyShowType: true
        })),
        path: ''
      };
    }
  }
  if (pattern === null) {
    if (value === null) {
      return false;
    }
    return {
      message: "Expected null, got ".concat(stringForErrorMessage(value)),
      path: ''
    };
  }

  // Strings, numbers, and booleans match literally. Goes well with Match.OneOf.
  if (typeof pattern === 'string' || typeof pattern === 'number' || typeof pattern === 'boolean') {
    if (value === pattern) {
      return false;
    }
    return {
      message: "Expected ".concat(pattern, ", got ").concat(stringForErrorMessage(value)),
      path: ''
    };
  }

  // Match.Integer is special type encoded with array
  if (pattern === Match.Integer) {
    // There is no consistent and reliable way to check if variable is a 64-bit
    // integer. One of the popular solutions is to get reminder of division by 1
    // but this method fails on really large floats with big precision.
    // E.g.: 1.348192308491824e+23 % 1 === 0 in V8
    // Bitwise operators work consistantly but always cast variable to 32-bit
    // signed integer according to JavaScript specs.
    if (typeof value === 'number' && (value | 0) === value) {
      return false;
    }
    return {
      message: "Expected Integer, got ".concat(stringForErrorMessage(value)),
      path: ''
    };
  }

  // 'Object' is shorthand for Match.ObjectIncluding({});
  if (pattern === Object) {
    pattern = Match.ObjectIncluding({});
  }

  // Array (checked AFTER Any, which is implemented as an Array).
  if (pattern instanceof Array) {
    if (pattern.length !== 1) {
      return {
        message: "Bad pattern: arrays must have one type element ".concat(stringForErrorMessage(pattern)),
        path: ''
      };
    }
    if (!Array.isArray(value) && !isArguments(value)) {
      return {
        message: "Expected array, got ".concat(stringForErrorMessage(value)),
        path: ''
      };
    }
    for (let i = 0, length = value.length; i < length; i++) {
      const arrPath = "".concat(path, "[").concat(i, "]");
      const result = testSubtree(value[i], pattern[0], collectErrors, errors, arrPath);
      if (result) {
        result.path = _prependPath(collectErrors ? arrPath : i, result.path);
        if (!collectErrors) return result;
        if (typeof value[i] !== 'object' || result.message) errors.push(result);
      }
    }
    if (!collectErrors) return false;
    return errors.length === 0 ? false : errors;
  }

  // Arbitrary validation checks. The condition can return false or throw a
  // Match.Error (ie, it can internally use check()) to fail.
  if (pattern instanceof Where) {
    let result;
    try {
      result = pattern.condition(value);
    } catch (err) {
      if (!(err instanceof Match.Error)) {
        throw err;
      }
      return {
        message: err.message,
        path: err.path
      };
    }
    if (result) {
      return false;
    }

    // XXX this error is terrible

    return {
      message: 'Failed Match.Where validation',
      path: ''
    };
  }
  if (pattern instanceof Maybe) {
    pattern = Match.OneOf(undefined, null, pattern.pattern);
  } else if (pattern instanceof Optional) {
    pattern = Match.OneOf(undefined, pattern.pattern);
  }
  if (pattern instanceof OneOf) {
    for (let i = 0; i < pattern.choices.length; ++i) {
      const result = testSubtree(value, pattern.choices[i]);
      if (!result) {
        // No error? Yay, return.
        return false;
      }

      // Match errors just mean try another choice.
    }

    // XXX this error is terrible
    return {
      message: 'Failed Match.OneOf, Match.Maybe or Match.Optional validation',
      path: ''
    };
  }

  // A function that isn't something we special-case is assumed to be a
  // constructor.
  if (pattern instanceof Function) {
    if (value instanceof pattern) {
      return false;
    }
    return {
      message: "Expected ".concat(pattern.name || 'particular constructor'),
      path: ''
    };
  }
  let unknownKeysAllowed = false;
  let unknownKeyPattern;
  if (pattern instanceof ObjectIncluding) {
    unknownKeysAllowed = true;
    pattern = pattern.pattern;
  }
  if (pattern instanceof ObjectWithValues) {
    unknownKeysAllowed = true;
    unknownKeyPattern = [pattern.pattern];
    pattern = {}; // no required keys
  }
  if (typeof pattern !== 'object') {
    return {
      message: 'Bad pattern: unknown pattern type',
      path: ''
    };
  }

  // An object, with required and optional keys. Note that this does NOT do
  // structural matches against objects of special types that happen to match
  // the pattern: this really needs to be a plain old {Object}!
  if (typeof value !== 'object') {
    return {
      message: "Expected object, got ".concat(typeof value),
      path: ''
    };
  }
  if (value === null) {
    return {
      message: "Expected object, got null",
      path: ''
    };
  }
  if (!isPlainObject(value)) {
    return {
      message: "Expected plain object",
      path: ''
    };
  }
  const requiredPatterns = Object.create(null);
  const optionalPatterns = Object.create(null);
  Object.keys(pattern).forEach(key => {
    const subPattern = pattern[key];
    if (subPattern instanceof Optional || subPattern instanceof Maybe) {
      optionalPatterns[key] = subPattern.pattern;
    } else {
      requiredPatterns[key] = subPattern;
    }
  });
  for (let key in Object(value)) {
    const subValue = value[key];
    const objPath = path ? "".concat(path, ".").concat(key) : key;
    if (hasOwn.call(requiredPatterns, key)) {
      const result = testSubtree(subValue, requiredPatterns[key], collectErrors, errors, objPath);
      if (result) {
        result.path = _prependPath(collectErrors ? objPath : key, result.path);
        if (!collectErrors) return result;
        if (typeof subValue !== 'object' || result.message) errors.push(result);
      }
      delete requiredPatterns[key];
    } else if (hasOwn.call(optionalPatterns, key)) {
      const result = testSubtree(subValue, optionalPatterns[key], collectErrors, errors, objPath);
      if (result) {
        result.path = _prependPath(collectErrors ? objPath : key, result.path);
        if (!collectErrors) return result;
        if (typeof subValue !== 'object' || result.message) errors.push(result);
      }
    } else {
      if (!unknownKeysAllowed) {
        const result = {
          message: 'Unknown key',
          path: key
        };
        if (!collectErrors) return result;
        errors.push(result);
      }
      if (unknownKeyPattern) {
        const result = testSubtree(subValue, unknownKeyPattern[0], collectErrors, errors, objPath);
        if (result) {
          result.path = _prependPath(collectErrors ? objPath : key, result.path);
          if (!collectErrors) return result;
          if (typeof subValue !== 'object' || result.message) errors.push(result);
        }
      }
    }
  }
  const keys = Object.keys(requiredPatterns);
  if (keys.length) {
    const result = {
      message: "Missing key '".concat(keys[0], "'"),
      path: ''
    };
    if (!collectErrors) return result;
    errors.push(result);
  }
  if (!collectErrors) return false;
  return errors.length === 0 ? false : errors;
};
class ArgumentChecker {
  constructor(args, description) {
    // Make a SHALLOW copy of the arguments. (We'll be doing identity checks
    // against its contents.)
    this.args = [...args];

    // Since the common case will be to check arguments in order, and we splice
    // out arguments when we check them, make it so we splice out from the end
    // rather than the beginning.
    this.args.reverse();
    this.description = description;
  }
  checking(value) {
    if (this._checkingOneValue(value)) {
      return;
    }

    // Allow check(arguments, [String]) or check(arguments.slice(1), [String])
    // or check([foo, bar], [String]) to count... but only if value wasn't
    // itself an argument.
    if (Array.isArray(value) || isArguments(value)) {
      Array.prototype.forEach.call(value, this._checkingOneValue.bind(this));
    }
  }
  _checkingOneValue(value) {
    for (let i = 0; i < this.args.length; ++i) {
      // Is this value one of the arguments? (This can have a false positive if
      // the argument is an interned primitive, but it's still a good enough
      // check.)
      // (NaN is not === to itself, so we have to check specially.)
      if (value === this.args[i] || Number.isNaN(value) && Number.isNaN(this.args[i])) {
        this.args.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  throwUnlessAllArgumentsHaveBeenChecked() {
    if (this.args.length > 0) throw new Error("Did not check() all arguments during ".concat(this.description));
  }
}
const _jsKeywords = ['do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'false', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof'];

// Assumes the base of path is already escaped properly
// returns key + base
const _prependPath = (key, base) => {
  if (typeof key === 'number' || key.match(/^[0-9]+$/)) {
    key = "[".concat(key, "]");
  } else if (!key.match(/^[a-z_$][0-9a-z_$.[\]]*$/i) || _jsKeywords.indexOf(key) >= 0) {
    key = JSON.stringify([key]);
  }
  if (base && base[0] !== '[') {
    return "".concat(key, ".").concat(base);
  }
  return key + base;
};
const isObject = value => typeof value === 'object' && value !== null;
const baseIsArguments = item => isObject(item) && Object.prototype.toString.call(item) === '[object Arguments]';
const isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : value => isObject(value) && typeof value.callee === 'function';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isPlainObject.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/check/isPlainObject.js                                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  isPlainObject: () => isPlainObject
});
// Copy of jQuery.isPlainObject for the server side from jQuery v3.1.1.

const class2type = {};
const toString = class2type.toString;
const hasOwn = Object.prototype.hasOwnProperty;
const fnToString = hasOwn.toString;
const ObjectFunctionString = fnToString.call(Object);
const getProto = Object.getPrototypeOf;
const isPlainObject = obj => {
  let proto;
  let Ctor;

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }
  proto = getProto(obj);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/check/match.js");

/* Exports */
Package._define("check", exports, {
  check: check,
  Match: Match
});

})();

//# sourceURL=meteor://💻app/packages/check.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvY2hlY2svbWF0Y2guanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2NoZWNrL2lzUGxhaW5PYmplY3QuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiY2hlY2siLCJNYXRjaCIsImlzUGxhaW5PYmplY3QiLCJsaW5rIiwidiIsImN1cnJlbnRBcmd1bWVudENoZWNrZXIiLCJNZXRlb3IiLCJFbnZpcm9ubWVudFZhcmlhYmxlIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJmb3JtYXQiLCJyZXN1bHQiLCJlcnIiLCJFcnJvciIsIm1lc3NhZ2UiLCJwYXRoIiwiY29uY2F0IiwidmFsdWUiLCJwYXR0ZXJuIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRocm93QWxsRXJyb3JzIiwiYXJnQ2hlY2tlciIsImdldE9yTnVsbElmT3V0c2lkZUZpYmVyIiwiY2hlY2tpbmciLCJ0ZXN0U3VidHJlZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInIiLCJPcHRpb25hbCIsIk1heWJlIiwiT25lT2YiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJBbnkiLCJXaGVyZSIsImNvbmRpdGlvbiIsIk9iamVjdEluY2x1ZGluZyIsIk9iamVjdFdpdGhWYWx1ZXMiLCJJbnRlZ2VyIiwibWFrZUVycm9yVHlwZSIsIm1zZyIsInNhbml0aXplZEVycm9yIiwidGVzdCIsIl9mYWlsSWZBcmd1bWVudHNBcmVOb3RBbGxDaGVja2VkIiwiZiIsImNvbnRleHQiLCJkZXNjcmlwdGlvbiIsIkFyZ3VtZW50Q2hlY2tlciIsIndpdGhWYWx1ZSIsImFwcGx5IiwidGhyb3dVbmxlc3NBbGxBcmd1bWVudHNIYXZlQmVlbkNoZWNrZWQiLCJjb25zdHJ1Y3RvciIsImNob2ljZXMiLCJzdHJpbmdGb3JFcnJvck1lc3NhZ2UiLCJvbmx5U2hvd1R5cGUiLCJFSlNPTiIsInN0cmluZ2lmeSIsIkpTT04iLCJzdHJpbmdpZnlFcnJvciIsIm5hbWUiLCJ0eXBlb2ZDaGVja3MiLCJTdHJpbmciLCJOdW1iZXIiLCJCb29sZWFuIiwiRnVuY3Rpb24iLCJjb2xsZWN0RXJyb3JzIiwiZXJyb3JzIiwiaSIsImlzQXJndW1lbnRzIiwiYXJyUGF0aCIsIl9wcmVwZW5kUGF0aCIsInB1c2giLCJ1bmtub3duS2V5c0FsbG93ZWQiLCJ1bmtub3duS2V5UGF0dGVybiIsInJlcXVpcmVkUGF0dGVybnMiLCJjcmVhdGUiLCJvcHRpb25hbFBhdHRlcm5zIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzdWJQYXR0ZXJuIiwic3ViVmFsdWUiLCJvYmpQYXRoIiwiY2FsbCIsInJldmVyc2UiLCJfY2hlY2tpbmdPbmVWYWx1ZSIsImJpbmQiLCJpc05hTiIsInNwbGljZSIsIl9qc0tleXdvcmRzIiwiYmFzZSIsIm1hdGNoIiwiaW5kZXhPZiIsImlzT2JqZWN0IiwiYmFzZUlzQXJndW1lbnRzIiwiaXRlbSIsInRvU3RyaW5nIiwiY2FsbGVlIiwiY2xhc3MydHlwZSIsImZuVG9TdHJpbmciLCJPYmplY3RGdW5jdGlvblN0cmluZyIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmoiLCJwcm90byIsIkN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFNLENBQUM7RUFBQ0MsS0FBSyxFQUFDQSxDQUFBLEtBQUlBLEtBQUs7RUFBQ0MsS0FBSyxFQUFDQSxDQUFBLEtBQUlBO0FBQUssQ0FBQyxDQUFDO0FBQUMsSUFBSUMsYUFBYTtBQUFDSixNQUFNLENBQUNLLElBQUksQ0FBQyxpQkFBaUIsRUFBQztFQUFDRCxhQUFhQSxDQUFDRSxDQUFDLEVBQUM7SUFBQ0YsYUFBYSxHQUFDRSxDQUFDO0VBQUE7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBR3ZJO0FBQ0E7O0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBRCxDQUFDO0FBQzdELE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWM7QUFFOUMsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLElBQUk7RUFDdkIsTUFBTUMsR0FBRyxHQUFHLElBQUliLEtBQUssQ0FBQ2MsS0FBSyxDQUFDRixNQUFNLENBQUNHLE9BQU8sQ0FBQztFQUMzQyxJQUFJSCxNQUFNLENBQUNJLElBQUksRUFBRTtJQUNmSCxHQUFHLENBQUNFLE9BQU8saUJBQUFFLE1BQUEsQ0FBaUJMLE1BQU0sQ0FBQ0ksSUFBSSxDQUFFO0lBQ3pDSCxHQUFHLENBQUNHLElBQUksR0FBR0osTUFBTSxDQUFDSSxJQUFJO0VBQ3hCO0VBRUEsT0FBT0gsR0FBRztBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTZCxLQUFLQSxDQUFDbUIsS0FBSyxFQUFFQyxPQUFPLEVBQXVDO0VBQUEsSUFBckNDLE9BQU8sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUc7SUFBRUcsY0FBYyxFQUFFO0VBQU0sQ0FBQztFQUN2RTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsTUFBTUMsVUFBVSxHQUFHckIsc0JBQXNCLENBQUNzQix1QkFBdUIsQ0FBQyxDQUFDO0VBQ25FLElBQUlELFVBQVUsRUFBRTtJQUNkQSxVQUFVLENBQUNFLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzVCO0VBRUEsTUFBTU4sTUFBTSxHQUFHZ0IsV0FBVyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxDQUFDSSxjQUFjLENBQUM7RUFFbEUsSUFBSVosTUFBTSxFQUFFO0lBQ1YsSUFBSVEsT0FBTyxDQUFDSSxjQUFjLEVBQUU7TUFDMUIsTUFBTUssS0FBSyxDQUFDQyxPQUFPLENBQUNsQixNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDbUIsR0FBRyxDQUFDQyxDQUFDLElBQUlyQixNQUFNLENBQUNxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNyQixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQzdFLENBQUMsTUFBTTtNQUNMLE1BQU1ELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0lBQ3RCO0VBQ0Y7QUFDRjtBQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTVosS0FBSyxHQUFHO0VBQ25CaUMsUUFBUSxFQUFFLFNBQUFBLENBQVNkLE9BQU8sRUFBRTtJQUMxQixPQUFPLElBQUljLFFBQVEsQ0FBQ2QsT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFFRGUsS0FBSyxFQUFFLFNBQUFBLENBQVNmLE9BQU8sRUFBRTtJQUN2QixPQUFPLElBQUllLEtBQUssQ0FBQ2YsT0FBTyxDQUFDO0VBQzNCLENBQUM7RUFFRGdCLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQWtCO0lBQUEsU0FBQUMsSUFBQSxHQUFBZixTQUFBLENBQUFDLE1BQUEsRUFBTmUsSUFBSSxPQUFBUixLQUFBLENBQUFPLElBQUEsR0FBQUUsSUFBQSxNQUFBQSxJQUFBLEdBQUFGLElBQUEsRUFBQUUsSUFBQTtNQUFKRCxJQUFJLENBQUFDLElBQUEsSUFBQWpCLFNBQUEsQ0FBQWlCLElBQUE7SUFBQTtJQUNyQixPQUFPLElBQUlILEtBQUssQ0FBQ0UsSUFBSSxDQUFDO0VBQ3hCLENBQUM7RUFFREUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0VBQ2hCQyxLQUFLLEVBQUUsU0FBQUEsQ0FBU0MsU0FBUyxFQUFFO0lBQ3pCLE9BQU8sSUFBSUQsS0FBSyxDQUFDQyxTQUFTLENBQUM7RUFDN0IsQ0FBQztFQUVEQyxlQUFlLEVBQUUsU0FBQUEsQ0FBU3ZCLE9BQU8sRUFBRTtJQUNqQyxPQUFPLElBQUl1QixlQUFlLENBQUN2QixPQUFPLENBQUM7RUFDckMsQ0FBQztFQUVEd0IsZ0JBQWdCLEVBQUUsU0FBQUEsQ0FBU3hCLE9BQU8sRUFBRTtJQUNsQyxPQUFPLElBQUl3QixnQkFBZ0IsQ0FBQ3hCLE9BQU8sQ0FBQztFQUN0QyxDQUFDO0VBRUQ7RUFDQXlCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztFQUV4QjtFQUNBOUIsS0FBSyxFQUFFVCxNQUFNLENBQUN3QyxhQUFhLENBQUMsYUFBYSxFQUFFLFVBQVVDLEdBQUcsRUFBRTtJQUN4RCxJQUFJLENBQUMvQixPQUFPLG1CQUFBRSxNQUFBLENBQW1CNkIsR0FBRyxDQUFFOztJQUVwQztJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQzlCLElBQUksR0FBRyxFQUFFOztJQUVkO0lBQ0E7SUFDQSxJQUFJLENBQUMrQixjQUFjLEdBQUcsSUFBSTFDLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUM7RUFDN0QsQ0FBQyxDQUFDO0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFa0MsSUFBSUEsQ0FBQzlCLEtBQUssRUFBRUMsT0FBTyxFQUFFO0lBQ25CLE9BQU8sQ0FBQ1MsV0FBVyxDQUFDVixLQUFLLEVBQUVDLE9BQU8sQ0FBQztFQUNyQyxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E4QixnQ0FBZ0NBLENBQUNDLENBQUMsRUFBRUMsT0FBTyxFQUFFZCxJQUFJLEVBQUVlLFdBQVcsRUFBRTtJQUM5RCxNQUFNM0IsVUFBVSxHQUFHLElBQUk0QixlQUFlLENBQUNoQixJQUFJLEVBQUVlLFdBQVcsQ0FBQztJQUN6RCxNQUFNeEMsTUFBTSxHQUFHUixzQkFBc0IsQ0FBQ2tELFNBQVMsQ0FDN0M3QixVQUFVLEVBQ1YsTUFBTXlCLENBQUMsQ0FBQ0ssS0FBSyxDQUFDSixPQUFPLEVBQUVkLElBQUksQ0FDN0IsQ0FBQzs7SUFFRDtJQUNBWixVQUFVLENBQUMrQixzQ0FBc0MsQ0FBQyxDQUFDO0lBQ25ELE9BQU81QyxNQUFNO0VBQ2Y7QUFDRixDQUFDO0FBRUQsTUFBTXFCLFFBQVEsQ0FBQztFQUNid0IsV0FBV0EsQ0FBQ3RDLE9BQU8sRUFBRTtJQUNuQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztFQUN4QjtBQUNGO0FBRUEsTUFBTWUsS0FBSyxDQUFDO0VBQ1Z1QixXQUFXQSxDQUFDdEMsT0FBTyxFQUFFO0lBQ25CLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0VBQ3hCO0FBQ0Y7QUFFQSxNQUFNZ0IsS0FBSyxDQUFDO0VBQ1ZzQixXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDbkIsSUFBSSxDQUFDQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ3BDLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDcEMsTUFBTSxJQUFJUixLQUFLLENBQUMsaURBQWlELENBQUM7SUFDcEU7SUFFQSxJQUFJLENBQUM0QyxPQUFPLEdBQUdBLE9BQU87RUFDeEI7QUFDRjtBQUVBLE1BQU1sQixLQUFLLENBQUM7RUFDVmlCLFdBQVdBLENBQUNoQixTQUFTLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7RUFDNUI7QUFDRjtBQUVBLE1BQU1DLGVBQWUsQ0FBQztFQUNwQmUsV0FBV0EsQ0FBQ3RDLE9BQU8sRUFBRTtJQUNuQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztFQUN4QjtBQUNGO0FBRUEsTUFBTXdCLGdCQUFnQixDQUFDO0VBQ3JCYyxXQUFXQSxDQUFDdEMsT0FBTyxFQUFFO0lBQ25CLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0VBQ3hCO0FBQ0Y7QUFFQSxNQUFNd0MscUJBQXFCLEdBQUcsU0FBQUEsQ0FBQ3pDLEtBQUssRUFBbUI7RUFBQSxJQUFqQkUsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7RUFDaEQsSUFBS0gsS0FBSyxLQUFLLElBQUksRUFBRztJQUNwQixPQUFPLE1BQU07RUFDZjtFQUVBLElBQUtFLE9BQU8sQ0FBQ3dDLFlBQVksRUFBRztJQUMxQixPQUFPLE9BQU8xQyxLQUFLO0VBQ3JCOztFQUVBO0VBQ0EsSUFBSyxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFHO0lBQy9CLE9BQU8yQyxLQUFLLENBQUNDLFNBQVMsQ0FBQzVDLEtBQUssQ0FBQztFQUMvQjtFQUVBLElBQUk7SUFFRjtJQUNBO0lBQ0E2QyxJQUFJLENBQUNELFNBQVMsQ0FBQzVDLEtBQUssQ0FBQztFQUN2QixDQUFDLENBQUMsT0FBTzhDLGNBQWMsRUFBRTtJQUN2QixJQUFLQSxjQUFjLENBQUNDLElBQUksS0FBSyxXQUFXLEVBQUc7TUFDekMsT0FBTyxPQUFPL0MsS0FBSztJQUNyQjtFQUNGO0VBRUEsT0FBTzJDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDNUMsS0FBSyxDQUFDO0FBQy9CLENBQUM7QUFFRCxNQUFNZ0QsWUFBWSxHQUFHLENBQ25CLENBQUNDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFDbEIsQ0FBQ0MsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUNsQixDQUFDQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBRXBCO0FBQ0E7QUFDQSxDQUFDQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQ3RCLENBQUMvQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQ3pCOztBQUVEO0FBQ0EsTUFBTUssV0FBVyxHQUFHLFNBQUFBLENBQUNWLEtBQUssRUFBRUMsT0FBTyxFQUFvRDtFQUFBLElBQWxEb0QsYUFBYSxHQUFBbEQsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsS0FBSztFQUFBLElBQUVtRCxNQUFNLEdBQUFuRCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFBRUwsSUFBSSxHQUFBSyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQ2hGO0VBQ0EsSUFBSUYsT0FBTyxLQUFLbkIsS0FBSyxDQUFDdUMsR0FBRyxFQUFFO0lBQ3pCLE9BQU8sS0FBSztFQUNkOztFQUVBO0VBQ0E7RUFDQSxLQUFLLElBQUlrQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFlBQVksQ0FBQzVDLE1BQU0sRUFBRSxFQUFFbUQsQ0FBQyxFQUFFO0lBQzVDLElBQUl0RCxPQUFPLEtBQUsrQyxZQUFZLENBQUNPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xDLElBQUksT0FBT3ZELEtBQUssS0FBS2dELFlBQVksQ0FBQ08sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxLQUFLO01BQ2Q7TUFFQSxPQUFPO1FBQ0wxRCxPQUFPLGNBQUFFLE1BQUEsQ0FBY2lELFlBQVksQ0FBQ08sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQUF4RCxNQUFBLENBQVMwQyxxQkFBcUIsQ0FBQ3pDLEtBQUssRUFBRTtVQUFFMEMsWUFBWSxFQUFFO1FBQUssQ0FBQyxDQUFDLENBQUU7UUFDdEc1QyxJQUFJLEVBQUU7TUFDUixDQUFDO0lBQ0g7RUFDRjtFQUVBLElBQUlHLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFDcEIsSUFBSUQsS0FBSyxLQUFLLElBQUksRUFBRTtNQUNsQixPQUFPLEtBQUs7SUFDZDtJQUVBLE9BQU87TUFDTEgsT0FBTyx3QkFBQUUsTUFBQSxDQUF3QjBDLHFCQUFxQixDQUFDekMsS0FBSyxDQUFDLENBQUU7TUFDN0RGLElBQUksRUFBRTtJQUNSLENBQUM7RUFDSDs7RUFFQTtFQUNBLElBQUksT0FBT0csT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPQSxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU9BLE9BQU8sS0FBSyxTQUFTLEVBQUU7SUFDOUYsSUFBSUQsS0FBSyxLQUFLQyxPQUFPLEVBQUU7TUFDckIsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxPQUFPO01BQ0xKLE9BQU8sY0FBQUUsTUFBQSxDQUFjRSxPQUFPLFlBQUFGLE1BQUEsQ0FBUzBDLHFCQUFxQixDQUFDekMsS0FBSyxDQUFDLENBQUU7TUFDbkVGLElBQUksRUFBRTtJQUNSLENBQUM7RUFDSDs7RUFFQTtFQUNBLElBQUlHLE9BQU8sS0FBS25CLEtBQUssQ0FBQzRDLE9BQU8sRUFBRTtJQUU3QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLE9BQU8xQixLQUFLLEtBQUssUUFBUSxJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFDLE1BQU1BLEtBQUssRUFBRTtNQUN0RCxPQUFPLEtBQUs7SUFDZDtJQUVBLE9BQU87TUFDTEgsT0FBTywyQkFBQUUsTUFBQSxDQUEyQjBDLHFCQUFxQixDQUFDekMsS0FBSyxDQUFDLENBQUU7TUFDaEVGLElBQUksRUFBRTtJQUNSLENBQUM7RUFDSDs7RUFFQTtFQUNBLElBQUlHLE9BQU8sS0FBS1gsTUFBTSxFQUFFO0lBQ3RCVyxPQUFPLEdBQUduQixLQUFLLENBQUMwQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckM7O0VBRUE7RUFDQSxJQUFJdkIsT0FBTyxZQUFZVSxLQUFLLEVBQUU7SUFDNUIsSUFBSVYsT0FBTyxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3hCLE9BQU87UUFDTFAsT0FBTyxvREFBQUUsTUFBQSxDQUFvRDBDLHFCQUFxQixDQUFDeEMsT0FBTyxDQUFDLENBQUU7UUFDM0ZILElBQUksRUFBRTtNQUNSLENBQUM7SUFDSDtJQUVBLElBQUksQ0FBQ2EsS0FBSyxDQUFDQyxPQUFPLENBQUNaLEtBQUssQ0FBQyxJQUFJLENBQUN3RCxXQUFXLENBQUN4RCxLQUFLLENBQUMsRUFBRTtNQUNoRCxPQUFPO1FBQ0xILE9BQU8seUJBQUFFLE1BQUEsQ0FBeUIwQyxxQkFBcUIsQ0FBQ3pDLEtBQUssQ0FBQyxDQUFFO1FBQzlERixJQUFJLEVBQUU7TUFDUixDQUFDO0lBQ0g7SUFHQSxLQUFLLElBQUl5RCxDQUFDLEdBQUcsQ0FBQyxFQUFFbkQsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BQU0sRUFBRW1ELENBQUMsR0FBR25ELE1BQU0sRUFBRW1ELENBQUMsRUFBRSxFQUFFO01BQ3RELE1BQU1FLE9BQU8sTUFBQTFELE1BQUEsQ0FBTUQsSUFBSSxPQUFBQyxNQUFBLENBQUl3RCxDQUFDLE1BQUc7TUFDL0IsTUFBTTdELE1BQU0sR0FBR2dCLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDdUQsQ0FBQyxDQUFDLEVBQUV0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVvRCxhQUFhLEVBQUVDLE1BQU0sRUFBRUcsT0FBTyxDQUFDO01BQ2hGLElBQUkvRCxNQUFNLEVBQUU7UUFDVkEsTUFBTSxDQUFDSSxJQUFJLEdBQUc0RCxZQUFZLENBQUNMLGFBQWEsR0FBR0ksT0FBTyxHQUFHRixDQUFDLEVBQUU3RCxNQUFNLENBQUNJLElBQUksQ0FBQztRQUNwRSxJQUFJLENBQUN1RCxhQUFhLEVBQUUsT0FBTzNELE1BQU07UUFDakMsSUFBSSxPQUFPTSxLQUFLLENBQUN1RCxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUk3RCxNQUFNLENBQUNHLE9BQU8sRUFBRXlELE1BQU0sQ0FBQ0ssSUFBSSxDQUFDakUsTUFBTSxDQUFDO01BQ3pFO0lBQ0Y7SUFFQSxJQUFJLENBQUMyRCxhQUFhLEVBQUUsT0FBTyxLQUFLO0lBQ2hDLE9BQU9DLE1BQU0sQ0FBQ2xELE1BQU0sS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHa0QsTUFBTTtFQUM3Qzs7RUFFQTtFQUNBO0VBQ0EsSUFBSXJELE9BQU8sWUFBWXFCLEtBQUssRUFBRTtJQUM1QixJQUFJNUIsTUFBTTtJQUNWLElBQUk7TUFDRkEsTUFBTSxHQUFHTyxPQUFPLENBQUNzQixTQUFTLENBQUN2QixLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLE9BQU9MLEdBQUcsRUFBRTtNQUNaLElBQUksRUFBRUEsR0FBRyxZQUFZYixLQUFLLENBQUNjLEtBQUssQ0FBQyxFQUFFO1FBQ2pDLE1BQU1ELEdBQUc7TUFDWDtNQUVBLE9BQU87UUFDTEUsT0FBTyxFQUFFRixHQUFHLENBQUNFLE9BQU87UUFDcEJDLElBQUksRUFBRUgsR0FBRyxDQUFDRztNQUNaLENBQUM7SUFDSDtJQUVBLElBQUlKLE1BQU0sRUFBRTtNQUNWLE9BQU8sS0FBSztJQUNkOztJQUVBOztJQUVBLE9BQU87TUFDTEcsT0FBTyxFQUFFLCtCQUErQjtNQUN4Q0MsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUNIO0VBRUEsSUFBSUcsT0FBTyxZQUFZZSxLQUFLLEVBQUU7SUFDNUJmLE9BQU8sR0FBR25CLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ1osU0FBUyxFQUFFLElBQUksRUFBRUosT0FBTyxDQUFDQSxPQUFPLENBQUM7RUFDekQsQ0FBQyxNQUFNLElBQUlBLE9BQU8sWUFBWWMsUUFBUSxFQUFFO0lBQ3RDZCxPQUFPLEdBQUduQixLQUFLLENBQUNtQyxLQUFLLENBQUNaLFNBQVMsRUFBRUosT0FBTyxDQUFDQSxPQUFPLENBQUM7RUFDbkQ7RUFFQSxJQUFJQSxPQUFPLFlBQVlnQixLQUFLLEVBQUU7SUFDNUIsS0FBSyxJQUFJc0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdEQsT0FBTyxDQUFDdUMsT0FBTyxDQUFDcEMsTUFBTSxFQUFFLEVBQUVtRCxDQUFDLEVBQUU7TUFDL0MsTUFBTTdELE1BQU0sR0FBR2dCLFdBQVcsQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLENBQUN1QyxPQUFPLENBQUNlLENBQUMsQ0FBQyxDQUFDO01BQ3JELElBQUksQ0FBQzdELE1BQU0sRUFBRTtRQUVYO1FBQ0EsT0FBTyxLQUFLO01BQ2Q7O01BRUE7SUFDRjs7SUFFQTtJQUNBLE9BQU87TUFDTEcsT0FBTyxFQUFFLDhEQUE4RDtNQUN2RUMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUNIOztFQUVBO0VBQ0E7RUFDQSxJQUFJRyxPQUFPLFlBQVltRCxRQUFRLEVBQUU7SUFDL0IsSUFBSXBELEtBQUssWUFBWUMsT0FBTyxFQUFFO01BQzVCLE9BQU8sS0FBSztJQUNkO0lBRUEsT0FBTztNQUNMSixPQUFPLGNBQUFFLE1BQUEsQ0FBY0UsT0FBTyxDQUFDOEMsSUFBSSxJQUFJLHdCQUF3QixDQUFFO01BQy9EakQsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUNIO0VBRUEsSUFBSThELGtCQUFrQixHQUFHLEtBQUs7RUFDOUIsSUFBSUMsaUJBQWlCO0VBQ3JCLElBQUk1RCxPQUFPLFlBQVl1QixlQUFlLEVBQUU7SUFDdENvQyxrQkFBa0IsR0FBRyxJQUFJO0lBQ3pCM0QsT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87RUFDM0I7RUFFQSxJQUFJQSxPQUFPLFlBQVl3QixnQkFBZ0IsRUFBRTtJQUN2Q21DLGtCQUFrQixHQUFHLElBQUk7SUFDekJDLGlCQUFpQixHQUFHLENBQUM1RCxPQUFPLENBQUNBLE9BQU8sQ0FBQztJQUNyQ0EsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUU7RUFDakI7RUFFQSxJQUFJLE9BQU9BLE9BQU8sS0FBSyxRQUFRLEVBQUU7SUFDL0IsT0FBTztNQUNMSixPQUFPLEVBQUUsbUNBQW1DO01BQzVDQyxJQUFJLEVBQUU7SUFDUixDQUFDO0VBQ0g7O0VBRUE7RUFDQTtFQUNBO0VBQ0EsSUFBSSxPQUFPRSxLQUFLLEtBQUssUUFBUSxFQUFFO0lBQzdCLE9BQU87TUFDTEgsT0FBTywwQkFBQUUsTUFBQSxDQUEwQixPQUFPQyxLQUFLLENBQUU7TUFDL0NGLElBQUksRUFBRTtJQUNSLENBQUM7RUFDSDtFQUVBLElBQUlFLEtBQUssS0FBSyxJQUFJLEVBQUU7SUFDbEIsT0FBTztNQUNMSCxPQUFPLDZCQUE2QjtNQUNwQ0MsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUNIO0VBRUEsSUFBSSxDQUFFZixhQUFhLENBQUNpQixLQUFLLENBQUMsRUFBRTtJQUMxQixPQUFPO01BQ0xILE9BQU8seUJBQXlCO01BQ2hDQyxJQUFJLEVBQUU7SUFDUixDQUFDO0VBQ0g7RUFFQSxNQUFNZ0UsZ0JBQWdCLEdBQUd4RSxNQUFNLENBQUN5RSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQzVDLE1BQU1DLGdCQUFnQixHQUFHMUUsTUFBTSxDQUFDeUUsTUFBTSxDQUFDLElBQUksQ0FBQztFQUU1Q3pFLE1BQU0sQ0FBQzJFLElBQUksQ0FBQ2hFLE9BQU8sQ0FBQyxDQUFDaUUsT0FBTyxDQUFDQyxHQUFHLElBQUk7SUFDbEMsTUFBTUMsVUFBVSxHQUFHbkUsT0FBTyxDQUFDa0UsR0FBRyxDQUFDO0lBQy9CLElBQUlDLFVBQVUsWUFBWXJELFFBQVEsSUFDOUJxRCxVQUFVLFlBQVlwRCxLQUFLLEVBQUU7TUFDL0JnRCxnQkFBZ0IsQ0FBQ0csR0FBRyxDQUFDLEdBQUdDLFVBQVUsQ0FBQ25FLE9BQU87SUFDNUMsQ0FBQyxNQUFNO01BQ0w2RCxnQkFBZ0IsQ0FBQ0ssR0FBRyxDQUFDLEdBQUdDLFVBQVU7SUFDcEM7RUFDRixDQUFDLENBQUM7RUFFRixLQUFLLElBQUlELEdBQUcsSUFBSTdFLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDLEVBQUU7SUFDN0IsTUFBTXFFLFFBQVEsR0FBR3JFLEtBQUssQ0FBQ21FLEdBQUcsQ0FBQztJQUMzQixNQUFNRyxPQUFPLEdBQUd4RSxJQUFJLE1BQUFDLE1BQUEsQ0FBTUQsSUFBSSxPQUFBQyxNQUFBLENBQUlvRSxHQUFHLElBQUtBLEdBQUc7SUFDN0MsSUFBSTlFLE1BQU0sQ0FBQ2tGLElBQUksQ0FBQ1QsZ0JBQWdCLEVBQUVLLEdBQUcsQ0FBQyxFQUFFO01BQ3RDLE1BQU16RSxNQUFNLEdBQUdnQixXQUFXLENBQUMyRCxRQUFRLEVBQUVQLGdCQUFnQixDQUFDSyxHQUFHLENBQUMsRUFBRWQsYUFBYSxFQUFFQyxNQUFNLEVBQUVnQixPQUFPLENBQUM7TUFDM0YsSUFBSTVFLE1BQU0sRUFBRTtRQUNWQSxNQUFNLENBQUNJLElBQUksR0FBRzRELFlBQVksQ0FBQ0wsYUFBYSxHQUFHaUIsT0FBTyxHQUFHSCxHQUFHLEVBQUV6RSxNQUFNLENBQUNJLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUN1RCxhQUFhLEVBQUUsT0FBTzNELE1BQU07UUFDakMsSUFBSSxPQUFPMkUsUUFBUSxLQUFLLFFBQVEsSUFBSTNFLE1BQU0sQ0FBQ0csT0FBTyxFQUFFeUQsTUFBTSxDQUFDSyxJQUFJLENBQUNqRSxNQUFNLENBQUM7TUFDekU7TUFFQSxPQUFPb0UsZ0JBQWdCLENBQUNLLEdBQUcsQ0FBQztJQUM5QixDQUFDLE1BQU0sSUFBSTlFLE1BQU0sQ0FBQ2tGLElBQUksQ0FBQ1AsZ0JBQWdCLEVBQUVHLEdBQUcsQ0FBQyxFQUFFO01BQzdDLE1BQU16RSxNQUFNLEdBQUdnQixXQUFXLENBQUMyRCxRQUFRLEVBQUVMLGdCQUFnQixDQUFDRyxHQUFHLENBQUMsRUFBRWQsYUFBYSxFQUFFQyxNQUFNLEVBQUVnQixPQUFPLENBQUM7TUFDM0YsSUFBSTVFLE1BQU0sRUFBRTtRQUNWQSxNQUFNLENBQUNJLElBQUksR0FBRzRELFlBQVksQ0FBQ0wsYUFBYSxHQUFHaUIsT0FBTyxHQUFHSCxHQUFHLEVBQUV6RSxNQUFNLENBQUNJLElBQUksQ0FBQztRQUN0RSxJQUFJLENBQUN1RCxhQUFhLEVBQUUsT0FBTzNELE1BQU07UUFDakMsSUFBSSxPQUFPMkUsUUFBUSxLQUFLLFFBQVEsSUFBSTNFLE1BQU0sQ0FBQ0csT0FBTyxFQUFFeUQsTUFBTSxDQUFDSyxJQUFJLENBQUNqRSxNQUFNLENBQUM7TUFDekU7SUFFRixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNrRSxrQkFBa0IsRUFBRTtRQUN2QixNQUFNbEUsTUFBTSxHQUFHO1VBQ2JHLE9BQU8sRUFBRSxhQUFhO1VBQ3RCQyxJQUFJLEVBQUVxRTtRQUNSLENBQUM7UUFDRCxJQUFJLENBQUNkLGFBQWEsRUFBRSxPQUFPM0QsTUFBTTtRQUNqQzRELE1BQU0sQ0FBQ0ssSUFBSSxDQUFDakUsTUFBTSxDQUFDO01BQ3JCO01BRUEsSUFBSW1FLGlCQUFpQixFQUFFO1FBQ3JCLE1BQU1uRSxNQUFNLEdBQUdnQixXQUFXLENBQUMyRCxRQUFRLEVBQUVSLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFUixhQUFhLEVBQUVDLE1BQU0sRUFBRWdCLE9BQU8sQ0FBQztRQUMxRixJQUFJNUUsTUFBTSxFQUFFO1VBQ1ZBLE1BQU0sQ0FBQ0ksSUFBSSxHQUFHNEQsWUFBWSxDQUFDTCxhQUFhLEdBQUdpQixPQUFPLEdBQUdILEdBQUcsRUFBRXpFLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDO1VBQ3RFLElBQUksQ0FBQ3VELGFBQWEsRUFBRSxPQUFPM0QsTUFBTTtVQUNqQyxJQUFJLE9BQU8yRSxRQUFRLEtBQUssUUFBUSxJQUFJM0UsTUFBTSxDQUFDRyxPQUFPLEVBQUV5RCxNQUFNLENBQUNLLElBQUksQ0FBQ2pFLE1BQU0sQ0FBQztRQUN6RTtNQUNGO0lBQ0Y7RUFDRjtFQUVBLE1BQU11RSxJQUFJLEdBQUczRSxNQUFNLENBQUMyRSxJQUFJLENBQUNILGdCQUFnQixDQUFDO0VBQzFDLElBQUlHLElBQUksQ0FBQzdELE1BQU0sRUFBRTtJQUNmLE1BQU1WLE1BQU0sR0FBRztNQUNiRyxPQUFPLGtCQUFBRSxNQUFBLENBQWtCa0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFHO01BQ25DbkUsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ3VELGFBQWEsRUFBRSxPQUFPM0QsTUFBTTtJQUNqQzRELE1BQU0sQ0FBQ0ssSUFBSSxDQUFDakUsTUFBTSxDQUFDO0VBQ3JCO0VBRUEsSUFBSSxDQUFDMkQsYUFBYSxFQUFFLE9BQU8sS0FBSztFQUNoQyxPQUFPQyxNQUFNLENBQUNsRCxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBR2tELE1BQU07QUFDN0MsQ0FBQztBQUVELE1BQU1uQixlQUFlLENBQUM7RUFDcEJJLFdBQVdBLENBQUVwQixJQUFJLEVBQUVlLFdBQVcsRUFBRTtJQUU5QjtJQUNBO0lBQ0EsSUFBSSxDQUFDZixJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLENBQUM7O0lBRXJCO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDcUQsT0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDdEMsV0FBVyxHQUFHQSxXQUFXO0VBQ2hDO0VBRUF6QixRQUFRQSxDQUFDVCxLQUFLLEVBQUU7SUFDZCxJQUFJLElBQUksQ0FBQ3lFLGlCQUFpQixDQUFDekUsS0FBSyxDQUFDLEVBQUU7TUFDakM7SUFDRjs7SUFFQTtJQUNBO0lBQ0E7SUFDQSxJQUFJVyxLQUFLLENBQUNDLE9BQU8sQ0FBQ1osS0FBSyxDQUFDLElBQUl3RCxXQUFXLENBQUN4RCxLQUFLLENBQUMsRUFBRTtNQUM5Q1csS0FBSyxDQUFDcEIsU0FBUyxDQUFDMkUsT0FBTyxDQUFDSyxJQUFJLENBQUN2RSxLQUFLLEVBQUUsSUFBSSxDQUFDeUUsaUJBQWlCLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RTtFQUNGO0VBRUFELGlCQUFpQkEsQ0FBQ3pFLEtBQUssRUFBRTtJQUN2QixLQUFLLElBQUl1RCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDcEMsSUFBSSxDQUFDZixNQUFNLEVBQUUsRUFBRW1ELENBQUMsRUFBRTtNQUV6QztNQUNBO01BQ0E7TUFDQTtNQUNBLElBQUl2RCxLQUFLLEtBQUssSUFBSSxDQUFDbUIsSUFBSSxDQUFDb0MsQ0FBQyxDQUFDLElBQ3JCTCxNQUFNLENBQUN5QixLQUFLLENBQUMzRSxLQUFLLENBQUMsSUFBSWtELE1BQU0sQ0FBQ3lCLEtBQUssQ0FBQyxJQUFJLENBQUN4RCxJQUFJLENBQUNvQyxDQUFDLENBQUMsQ0FBRSxFQUFFO1FBQ3ZELElBQUksQ0FBQ3BDLElBQUksQ0FBQ3lELE1BQU0sQ0FBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJO01BQ2I7SUFDRjtJQUNBLE9BQU8sS0FBSztFQUNkO0VBRUFqQixzQ0FBc0NBLENBQUEsRUFBRztJQUN2QyxJQUFJLElBQUksQ0FBQ25CLElBQUksQ0FBQ2YsTUFBTSxHQUFHLENBQUMsRUFDdEIsTUFBTSxJQUFJUixLQUFLLHlDQUFBRyxNQUFBLENBQXlDLElBQUksQ0FBQ21DLFdBQVcsQ0FBRSxDQUFDO0VBQy9FO0FBQ0Y7QUFFQSxNQUFNMkMsV0FBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQzlFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUN0RSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQ3BFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDM0UsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQzNFLFlBQVksQ0FBQzs7QUFFZjtBQUNBO0FBQ0EsTUFBTW5CLFlBQVksR0FBR0EsQ0FBQ1MsR0FBRyxFQUFFVyxJQUFJLEtBQUs7RUFDbEMsSUFBSyxPQUFPWCxHQUFHLEtBQU0sUUFBUSxJQUFJQSxHQUFHLENBQUNZLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUN0RFosR0FBRyxPQUFBcEUsTUFBQSxDQUFPb0UsR0FBRyxNQUFHO0VBQ2xCLENBQUMsTUFBTSxJQUFJLENBQUNBLEdBQUcsQ0FBQ1ksS0FBSyxDQUFDLDJCQUEyQixDQUFDLElBQ3ZDRixXQUFXLENBQUNHLE9BQU8sQ0FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3hDQSxHQUFHLEdBQUd0QixJQUFJLENBQUNELFNBQVMsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDLENBQUM7RUFDN0I7RUFFQSxJQUFJVyxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDM0IsVUFBQS9FLE1BQUEsQ0FBVW9FLEdBQUcsT0FBQXBFLE1BQUEsQ0FBSStFLElBQUk7RUFDdkI7RUFFQSxPQUFPWCxHQUFHLEdBQUdXLElBQUk7QUFDbkIsQ0FBQztBQUVELE1BQU1HLFFBQVEsR0FBR2pGLEtBQUssSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJQSxLQUFLLEtBQUssSUFBSTtBQUVyRSxNQUFNa0YsZUFBZSxHQUFHQyxJQUFJLElBQzFCRixRQUFRLENBQUNFLElBQUksQ0FBQyxJQUNkN0YsTUFBTSxDQUFDQyxTQUFTLENBQUM2RixRQUFRLENBQUNiLElBQUksQ0FBQ1ksSUFBSSxDQUFDLEtBQUssb0JBQW9CO0FBRS9ELE1BQU0zQixXQUFXLEdBQUcwQixlQUFlLENBQUMsWUFBVztFQUFFLE9BQU8vRSxTQUFTO0FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNyRStFLGVBQWUsR0FDZmxGLEtBQUssSUFBSWlGLFFBQVEsQ0FBQ2pGLEtBQUssQ0FBQyxJQUFJLE9BQU9BLEtBQUssQ0FBQ3FGLE1BQU0sS0FBSyxVQUFVLEM7Ozs7Ozs7Ozs7O0FDbmtCaEUxRyxNQUFNLENBQUNDLE1BQU0sQ0FBQztFQUFDRyxhQUFhLEVBQUNBLENBQUEsS0FBSUE7QUFBYSxDQUFDLENBQUM7QUFBaEQ7O0FBRUEsTUFBTXVHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFFckIsTUFBTUYsUUFBUSxHQUFHRSxVQUFVLENBQUNGLFFBQVE7QUFFcEMsTUFBTS9GLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWM7QUFFOUMsTUFBTStGLFVBQVUsR0FBR2xHLE1BQU0sQ0FBQytGLFFBQVE7QUFFbEMsTUFBTUksb0JBQW9CLEdBQUdELFVBQVUsQ0FBQ2hCLElBQUksQ0FBQ2pGLE1BQU0sQ0FBQztBQUVwRCxNQUFNbUcsUUFBUSxHQUFHbkcsTUFBTSxDQUFDb0csY0FBYztBQUUvQixNQUFNM0csYUFBYSxHQUFHNEcsR0FBRyxJQUFJO0VBQ2xDLElBQUlDLEtBQUs7RUFDVCxJQUFJQyxJQUFJOztFQUVSO0VBQ0E7RUFDQSxJQUFJLENBQUNGLEdBQUcsSUFBSVAsUUFBUSxDQUFDYixJQUFJLENBQUNvQixHQUFHLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtJQUNwRCxPQUFPLEtBQUs7RUFDZDtFQUVBQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0UsR0FBRyxDQUFDOztFQUVyQjtFQUNBLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0lBQ1YsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7RUFDQUMsSUFBSSxHQUFHeEcsTUFBTSxDQUFDa0YsSUFBSSxDQUFDcUIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJQSxLQUFLLENBQUNyRCxXQUFXO0VBQzdELE9BQU8sT0FBT3NELElBQUksS0FBSyxVQUFVLElBQy9CTixVQUFVLENBQUNoQixJQUFJLENBQUNzQixJQUFJLENBQUMsS0FBS0wsb0JBQW9CO0FBQ2xELENBQUMsQyIsImZpbGUiOiIvcGFja2FnZXMvY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBYWFggZG9jc1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gJy4vaXNQbGFpbk9iamVjdCc7XG5cbi8vIFRoaW5ncyB3ZSBleHBsaWNpdGx5IGRvIE5PVCBzdXBwb3J0OlxuLy8gICAgLSBoZXRlcm9nZW5vdXMgYXJyYXlzXG5cbmNvbnN0IGN1cnJlbnRBcmd1bWVudENoZWNrZXIgPSBuZXcgTWV0ZW9yLkVudmlyb25tZW50VmFyaWFibGU7XG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5jb25zdCBmb3JtYXQgPSByZXN1bHQgPT4ge1xuICBjb25zdCBlcnIgPSBuZXcgTWF0Y2guRXJyb3IocmVzdWx0Lm1lc3NhZ2UpO1xuICBpZiAocmVzdWx0LnBhdGgpIHtcbiAgICBlcnIubWVzc2FnZSArPSBgIGluIGZpZWxkICR7cmVzdWx0LnBhdGh9YDtcbiAgICBlcnIucGF0aCA9IHJlc3VsdC5wYXRoO1xuICB9XG5cbiAgcmV0dXJuIGVycjtcbn1cblxuLyoqXG4gKiBAc3VtbWFyeSBDaGVjayB0aGF0IGEgdmFsdWUgbWF0Y2hlcyBhIFtwYXR0ZXJuXSgjbWF0Y2hwYXR0ZXJucykuXG4gKiBJZiB0aGUgdmFsdWUgZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm4sIHRocm93IGEgYE1hdGNoLkVycm9yYC5cbiAqIEJ5IGRlZmF1bHQsIGl0IHdpbGwgdGhyb3cgaW1tZWRpYXRlbHkgYXQgdGhlIGZpcnN0IGVycm9yIGVuY291bnRlcmVkLiBQYXNzIGluIHsgdGhyb3dBbGxFcnJvcnM6IHRydWUgfSB0byB0aHJvdyBhbGwgZXJyb3JzLlxuICpcbiAqIFBhcnRpY3VsYXJseSB1c2VmdWwgdG8gYXNzZXJ0IHRoYXQgYXJndW1lbnRzIHRvIGEgZnVuY3Rpb24gaGF2ZSB0aGUgcmlnaHRcbiAqIHR5cGVzIGFuZCBzdHJ1Y3R1cmUuXG4gKiBAbG9jdXMgQW55d2hlcmVcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7TWF0Y2hQYXR0ZXJufSBwYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIGB2YWx1ZWAgYWdhaW5zdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGNoZWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnRocm93QWxsRXJyb3JzPWZhbHNlXSBJZiB0cnVlLCB0aHJvdyBhbGwgZXJyb3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayh2YWx1ZSwgcGF0dGVybiwgb3B0aW9ucyA9IHsgdGhyb3dBbGxFcnJvcnM6IGZhbHNlIH0pIHtcbiAgLy8gUmVjb3JkIHRoYXQgY2hlY2sgZ290IGNhbGxlZCwgaWYgc29tZWJvZHkgY2FyZWQuXG4gIC8vXG4gIC8vIFdlIHVzZSBnZXRPck51bGxJZk91dHNpZGVGaWJlciBzbyB0aGF0IGl0J3MgT0sgdG8gY2FsbCBjaGVjaygpXG4gIC8vIGZyb20gbm9uLUZpYmVyIHNlcnZlciBjb250ZXh0czsgdGhlIGRvd25zaWRlIGlzIHRoYXQgaWYgeW91IGZvcmdldCB0b1xuICAvLyBiaW5kRW52aXJvbm1lbnQgb24gc29tZSByYW5kb20gY2FsbGJhY2sgaW4geW91ciBtZXRob2QvcHVibGlzaGVyLFxuICAvLyBpdCBtaWdodCBub3QgZmluZCB0aGUgYXJndW1lbnRDaGVja2VyIGFuZCB5b3UnbGwgZ2V0IGFuIGVycm9yIGFib3V0XG4gIC8vIG5vdCBjaGVja2luZyBhbiBhcmd1bWVudCB0aGF0IGl0IGxvb2tzIGxpa2UgeW91J3JlIGNoZWNraW5nIChpbnN0ZWFkXG4gIC8vIG9mIGp1c3QgZ2V0dGluZyBhIFwiTm9kZSBjb2RlIG11c3QgcnVuIGluIGEgRmliZXJcIiBlcnJvcikuXG4gIGNvbnN0IGFyZ0NoZWNrZXIgPSBjdXJyZW50QXJndW1lbnRDaGVja2VyLmdldE9yTnVsbElmT3V0c2lkZUZpYmVyKCk7XG4gIGlmIChhcmdDaGVja2VyKSB7XG4gICAgYXJnQ2hlY2tlci5jaGVja2luZyh2YWx1ZSk7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB0ZXN0U3VidHJlZSh2YWx1ZSwgcGF0dGVybiwgb3B0aW9ucy50aHJvd0FsbEVycm9ycyk7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChvcHRpb25zLnRocm93QWxsRXJyb3JzKSB7XG4gICAgICB0aHJvdyBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQubWFwKHIgPT4gZm9ybWF0KHIpKSA6IFtmb3JtYXQocmVzdWx0KV1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZm9ybWF0KHJlc3VsdClcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG5hbWVzcGFjZSBNYXRjaFxuICogQHN1bW1hcnkgVGhlIG5hbWVzcGFjZSBmb3IgYWxsIE1hdGNoIHR5cGVzIGFuZCBtZXRob2RzLlxuICovXG5leHBvcnQgY29uc3QgTWF0Y2ggPSB7XG4gIE9wdGlvbmFsOiBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25hbChwYXR0ZXJuKTtcbiAgfSxcblxuICBNYXliZTogZnVuY3Rpb24ocGF0dGVybikge1xuICAgIHJldHVybiBuZXcgTWF5YmUocGF0dGVybik7XG4gIH0sXG5cbiAgT25lT2Y6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IE9uZU9mKGFyZ3MpO1xuICB9LFxuXG4gIEFueTogWydfX2FueV9fJ10sXG4gIFdoZXJlOiBmdW5jdGlvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gbmV3IFdoZXJlKGNvbmRpdGlvbik7XG4gIH0sXG5cbiAgT2JqZWN0SW5jbHVkaW5nOiBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RJbmNsdWRpbmcocGF0dGVybilcbiAgfSxcblxuICBPYmplY3RXaXRoVmFsdWVzOiBmdW5jdGlvbihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RXaXRoVmFsdWVzKHBhdHRlcm4pO1xuICB9LFxuXG4gIC8vIE1hdGNoZXMgb25seSBzaWduZWQgMzItYml0IGludGVnZXJzXG4gIEludGVnZXI6IFsnX19pbnRlZ2VyX18nXSxcblxuICAvLyBYWFggbWF0Y2hlcnMgc2hvdWxkIGtub3cgaG93IHRvIGRlc2NyaWJlIHRoZW1zZWx2ZXMgZm9yIGVycm9yc1xuICBFcnJvcjogTWV0ZW9yLm1ha2VFcnJvclR5cGUoJ01hdGNoLkVycm9yJywgZnVuY3Rpb24gKG1zZykge1xuICAgIHRoaXMubWVzc2FnZSA9IGBNYXRjaCBlcnJvcjogJHttc2d9YDtcblxuICAgIC8vIFRoZSBwYXRoIG9mIHRoZSB2YWx1ZSB0aGF0IGZhaWxlZCB0byBtYXRjaC4gSW5pdGlhbGx5IGVtcHR5LCB0aGlzIGdldHNcbiAgICAvLyBwb3B1bGF0ZWQgYnkgY2F0Y2hpbmcgYW5kIHJldGhyb3dpbmcgdGhlIGV4Y2VwdGlvbiBhcyBpdCBnb2VzIGJhY2sgdXAgdGhlXG4gICAgLy8gc3RhY2suXG4gICAgLy8gRS5nLjogXCJ2YWxzWzNdLmVudGl0eS5jcmVhdGVkXCJcbiAgICB0aGlzLnBhdGggPSAnJztcblxuICAgIC8vIElmIHRoaXMgZ2V0cyBzZW50IG92ZXIgRERQLCBkb24ndCBnaXZlIGZ1bGwgaW50ZXJuYWwgZGV0YWlscyBidXQgYXQgbGVhc3RcbiAgICAvLyBwcm92aWRlIHNvbWV0aGluZyBiZXR0ZXIgdGhhbiA1MDAgSW50ZXJuYWwgc2VydmVyIGVycm9yLlxuICAgIHRoaXMuc2FuaXRpemVkRXJyb3IgPSBuZXcgTWV0ZW9yLkVycm9yKDQwMCwgJ01hdGNoIGZhaWxlZCcpO1xuICB9KSxcblxuICAvLyBUZXN0cyB0byBzZWUgaWYgdmFsdWUgbWF0Y2hlcyBwYXR0ZXJuLiBVbmxpa2UgY2hlY2ssIGl0IG1lcmVseSByZXR1cm5zIHRydWVcbiAgLy8gb3IgZmFsc2UgKHVubGVzcyBhbiBlcnJvciBvdGhlciB0aGFuIE1hdGNoLkVycm9yIHdhcyB0aHJvd24pLiBJdCBkb2VzIG5vdFxuICAvLyBpbnRlcmFjdCB3aXRoIF9mYWlsSWZBcmd1bWVudHNBcmVOb3RBbGxDaGVja2VkLlxuICAvLyBYWFggbWF5YmUgYWxzbyBpbXBsZW1lbnQgYSBNYXRjaC5tYXRjaCB3aGljaCByZXR1cm5zIG1vcmUgaW5mb3JtYXRpb24gYWJvdXRcbiAgLy8gICAgIGZhaWx1cmVzIGJ1dCB3aXRob3V0IHVzaW5nIGV4Y2VwdGlvbiBoYW5kbGluZyBvciBkb2luZyB3aGF0IGNoZWNrKClcbiAgLy8gICAgIGRvZXMgd2l0aCBfZmFpbElmQXJndW1lbnRzQXJlTm90QWxsQ2hlY2tlZCBhbmQgTWV0ZW9yLkVycm9yIGNvbnZlcnNpb25cblxuICAvKipcbiAgICogQHN1bW1hcnkgUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBtYXRjaGVzIHRoZSBwYXR0ZXJuLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge01hdGNoUGF0dGVybn0gcGF0dGVybiBUaGUgcGF0dGVybiB0byBtYXRjaCBgdmFsdWVgIGFnYWluc3RcbiAgICovXG4gIHRlc3QodmFsdWUsIHBhdHRlcm4pIHtcbiAgICByZXR1cm4gIXRlc3RTdWJ0cmVlKHZhbHVlLCBwYXR0ZXJuKTtcbiAgfSxcblxuICAvLyBSdW5zIGBmLmFwcGx5KGNvbnRleHQsIGFyZ3MpYC4gSWYgY2hlY2soKSBpcyBub3QgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2ZcbiAgLy8gYGFyZ3NgIChlaXRoZXIgZGlyZWN0bHkgb3IgaW4gdGhlIGZpcnN0IGxldmVsIG9mIGFuIGFycmF5KSwgdGhyb3dzIGFuIGVycm9yXG4gIC8vICh1c2luZyBgZGVzY3JpcHRpb25gIGluIHRoZSBtZXNzYWdlKS5cbiAgX2ZhaWxJZkFyZ3VtZW50c0FyZU5vdEFsbENoZWNrZWQoZiwgY29udGV4dCwgYXJncywgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBhcmdDaGVja2VyID0gbmV3IEFyZ3VtZW50Q2hlY2tlcihhcmdzLCBkZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcmVzdWx0ID0gY3VycmVudEFyZ3VtZW50Q2hlY2tlci53aXRoVmFsdWUoXG4gICAgICBhcmdDaGVja2VyLFxuICAgICAgKCkgPT4gZi5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICk7XG5cbiAgICAvLyBJZiBmIGRpZG4ndCBpdHNlbGYgdGhyb3csIG1ha2Ugc3VyZSBpdCBjaGVja2VkIGFsbCBvZiBpdHMgYXJndW1lbnRzLlxuICAgIGFyZ0NoZWNrZXIudGhyb3dVbmxlc3NBbGxBcmd1bWVudHNIYXZlQmVlbkNoZWNrZWQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5jbGFzcyBPcHRpb25hbCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG59XG5cbmNsYXNzIE1heWJlIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbn1cblxuY2xhc3MgT25lT2Yge1xuICBjb25zdHJ1Y3RvcihjaG9pY2VzKSB7XG4gICAgaWYgKCFjaG9pY2VzIHx8IGNob2ljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhdCBsZWFzdCBvbmUgY2hvaWNlIHRvIE1hdGNoLk9uZU9mJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jaG9pY2VzID0gY2hvaWNlcztcbiAgfVxufVxuXG5jbGFzcyBXaGVyZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbikge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG59XG5cbmNsYXNzIE9iamVjdEluY2x1ZGluZyB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG59XG5cbmNsYXNzIE9iamVjdFdpdGhWYWx1ZXMge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgfVxufVxuXG5jb25zdCBzdHJpbmdGb3JFcnJvck1lc3NhZ2UgPSAodmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoIHZhbHVlID09PSBudWxsICkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cblxuICBpZiAoIG9wdGlvbnMub25seVNob3dUeXBlICkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWU7XG4gIH1cblxuICAvLyBZb3VyIGF2ZXJhZ2Ugbm9uLW9iamVjdCB0aGluZ3MuICBTYXZlcyBmcm9tIGRvaW5nIHRoZSB0cnkvY2F0Y2ggYmVsb3cgZm9yLlxuICBpZiAoIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgKSB7XG4gICAgcmV0dXJuIEVKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgfVxuXG4gIHRyeSB7XG5cbiAgICAvLyBGaW5kIG9iamVjdHMgd2l0aCBjaXJjdWxhciByZWZlcmVuY2VzIHNpbmNlIEVKU09OIGRvZXNuJ3Qgc3VwcG9ydCB0aGVtIHlldCAoSXNzdWUgIzQ3NzggKyBVbmFjY2VwdGVkIFBSKVxuICAgIC8vIElmIHRoZSBuYXRpdmUgc3RyaW5naWZ5IGlzIGdvaW5nIHRvIGNob2tlLCBFSlNPTi5zdHJpbmdpZnkgaXMgZ29pbmcgdG8gY2hva2UgdG9vLlxuICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgfSBjYXRjaCAoc3RyaW5naWZ5RXJyb3IpIHtcbiAgICBpZiAoIHN0cmluZ2lmeUVycm9yLm5hbWUgPT09ICdUeXBlRXJyb3InICkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gRUpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn07XG5cbmNvbnN0IHR5cGVvZkNoZWNrcyA9IFtcbiAgW1N0cmluZywgJ3N0cmluZyddLFxuICBbTnVtYmVyLCAnbnVtYmVyJ10sXG4gIFtCb29sZWFuLCAnYm9vbGVhbiddLFxuXG4gIC8vIFdoaWxlIHdlIGRvbid0IGFsbG93IHVuZGVmaW5lZC9mdW5jdGlvbiBpbiBFSlNPTiwgdGhpcyBpcyBnb29kIGZvciBvcHRpb25hbFxuICAvLyBhcmd1bWVudHMgd2l0aCBPbmVPZi5cbiAgW0Z1bmN0aW9uLCAnZnVuY3Rpb24nXSxcbiAgW3VuZGVmaW5lZCwgJ3VuZGVmaW5lZCddLFxuXTtcblxuLy8gUmV0dXJuIGBmYWxzZWAgaWYgaXQgbWF0Y2hlcy4gT3RoZXJ3aXNlLCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgYG1lc3NhZ2VgIGFuZCBhIGBwYXRoYCBmaWVsZCBvciBhbiBhcnJheSBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIGBtZXNzYWdlYCBhbmQgYSBgcGF0aGAgZmllbGQgd2hlbiBjb2xsZWN0aW5nIGVycm9ycy5cbmNvbnN0IHRlc3RTdWJ0cmVlID0gKHZhbHVlLCBwYXR0ZXJuLCBjb2xsZWN0RXJyb3JzID0gZmFsc2UsIGVycm9ycyA9IFtdLCBwYXRoID0gJycpID0+IHtcbiAgLy8gTWF0Y2ggYW55dGhpbmchXG4gIGlmIChwYXR0ZXJuID09PSBNYXRjaC5BbnkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBCYXNpYyBhdG9taWMgdHlwZXMuXG4gIC8vIERvIG5vdCBtYXRjaCBib3hlZCBvYmplY3RzIChlLmcuIFN0cmluZywgQm9vbGVhbilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlb2ZDaGVja3MubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocGF0dGVybiA9PT0gdHlwZW9mQ2hlY2tzW2ldWzBdKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSB0eXBlb2ZDaGVja3NbaV1bMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBgRXhwZWN0ZWQgJHt0eXBlb2ZDaGVja3NbaV1bMV19LCBnb3QgJHtzdHJpbmdGb3JFcnJvck1lc3NhZ2UodmFsdWUsIHsgb25seVNob3dUeXBlOiB0cnVlIH0pfWAsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF0dGVybiA9PT0gbnVsbCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBgRXhwZWN0ZWQgbnVsbCwgZ290ICR7c3RyaW5nRm9yRXJyb3JNZXNzYWdlKHZhbHVlKX1gLFxuICAgICAgcGF0aDogJycsXG4gICAgfTtcbiAgfVxuXG4gIC8vIFN0cmluZ3MsIG51bWJlcnMsIGFuZCBib29sZWFucyBtYXRjaCBsaXRlcmFsbHkuIEdvZXMgd2VsbCB3aXRoIE1hdGNoLk9uZU9mLlxuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXR0ZXJuID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGF0dGVybiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlID09PSBwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCAke3BhdHRlcm59LCBnb3QgJHtzdHJpbmdGb3JFcnJvck1lc3NhZ2UodmFsdWUpfWAsXG4gICAgICBwYXRoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgLy8gTWF0Y2guSW50ZWdlciBpcyBzcGVjaWFsIHR5cGUgZW5jb2RlZCB3aXRoIGFycmF5XG4gIGlmIChwYXR0ZXJuID09PSBNYXRjaC5JbnRlZ2VyKSB7XG5cbiAgICAvLyBUaGVyZSBpcyBubyBjb25zaXN0ZW50IGFuZCByZWxpYWJsZSB3YXkgdG8gY2hlY2sgaWYgdmFyaWFibGUgaXMgYSA2NC1iaXRcbiAgICAvLyBpbnRlZ2VyLiBPbmUgb2YgdGhlIHBvcHVsYXIgc29sdXRpb25zIGlzIHRvIGdldCByZW1pbmRlciBvZiBkaXZpc2lvbiBieSAxXG4gICAgLy8gYnV0IHRoaXMgbWV0aG9kIGZhaWxzIG9uIHJlYWxseSBsYXJnZSBmbG9hdHMgd2l0aCBiaWcgcHJlY2lzaW9uLlxuICAgIC8vIEUuZy46IDEuMzQ4MTkyMzA4NDkxODI0ZSsyMyAlIDEgPT09IDAgaW4gVjhcbiAgICAvLyBCaXR3aXNlIG9wZXJhdG9ycyB3b3JrIGNvbnNpc3RhbnRseSBidXQgYWx3YXlzIGNhc3QgdmFyaWFibGUgdG8gMzItYml0XG4gICAgLy8gc2lnbmVkIGludGVnZXIgYWNjb3JkaW5nIHRvIEphdmFTY3JpcHQgc3BlY3MuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgKHZhbHVlIHwgMCkgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCBJbnRlZ2VyLCBnb3QgJHtzdHJpbmdGb3JFcnJvck1lc3NhZ2UodmFsdWUpfWAsXG4gICAgICBwYXRoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgLy8gJ09iamVjdCcgaXMgc2hvcnRoYW5kIGZvciBNYXRjaC5PYmplY3RJbmNsdWRpbmcoe30pO1xuICBpZiAocGF0dGVybiA9PT0gT2JqZWN0KSB7XG4gICAgcGF0dGVybiA9IE1hdGNoLk9iamVjdEluY2x1ZGluZyh7fSk7XG4gIH1cblxuICAvLyBBcnJheSAoY2hlY2tlZCBBRlRFUiBBbnksIHdoaWNoIGlzIGltcGxlbWVudGVkIGFzIGFuIEFycmF5KS5cbiAgaWYgKHBhdHRlcm4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGlmIChwYXR0ZXJuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogYEJhZCBwYXR0ZXJuOiBhcnJheXMgbXVzdCBoYXZlIG9uZSB0eXBlIGVsZW1lbnQgJHtzdHJpbmdGb3JFcnJvck1lc3NhZ2UocGF0dGVybil9YCxcbiAgICAgICAgcGF0aDogJycsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIWlzQXJndW1lbnRzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogYEV4cGVjdGVkIGFycmF5LCBnb3QgJHtzdHJpbmdGb3JFcnJvck1lc3NhZ2UodmFsdWUpfWAsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXJyUGF0aCA9IGAke3BhdGh9WyR7aX1dYFxuICAgICAgY29uc3QgcmVzdWx0ID0gdGVzdFN1YnRyZWUodmFsdWVbaV0sIHBhdHRlcm5bMF0sIGNvbGxlY3RFcnJvcnMsIGVycm9ycywgYXJyUGF0aCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5wYXRoID0gX3ByZXBlbmRQYXRoKGNvbGxlY3RFcnJvcnMgPyBhcnJQYXRoIDogaSwgcmVzdWx0LnBhdGgpXG4gICAgICAgIGlmICghY29sbGVjdEVycm9ycykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtpXSAhPT0gJ29iamVjdCcgfHwgcmVzdWx0Lm1lc3NhZ2UpIGVycm9ycy5wdXNoKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbGxlY3RFcnJvcnMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGZhbHNlIDogZXJyb3JzO1xuICB9XG5cbiAgLy8gQXJiaXRyYXJ5IHZhbGlkYXRpb24gY2hlY2tzLiBUaGUgY29uZGl0aW9uIGNhbiByZXR1cm4gZmFsc2Ugb3IgdGhyb3cgYVxuICAvLyBNYXRjaC5FcnJvciAoaWUsIGl0IGNhbiBpbnRlcm5hbGx5IHVzZSBjaGVjaygpKSB0byBmYWlsLlxuICBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFdoZXJlKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gcGF0dGVybi5jb25kaXRpb24odmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgTWF0Y2guRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIHBhdGg6IGVyci5wYXRoXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBYWFggdGhpcyBlcnJvciBpcyB0ZXJyaWJsZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgTWF0Y2guV2hlcmUgdmFsaWRhdGlvbicsXG4gICAgICBwYXRoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHBhdHRlcm4gaW5zdGFuY2VvZiBNYXliZSkge1xuICAgIHBhdHRlcm4gPSBNYXRjaC5PbmVPZih1bmRlZmluZWQsIG51bGwsIHBhdHRlcm4ucGF0dGVybik7XG4gIH0gZWxzZSBpZiAocGF0dGVybiBpbnN0YW5jZW9mIE9wdGlvbmFsKSB7XG4gICAgcGF0dGVybiA9IE1hdGNoLk9uZU9mKHVuZGVmaW5lZCwgcGF0dGVybi5wYXR0ZXJuKTtcbiAgfVxuXG4gIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgT25lT2YpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4uY2hvaWNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGVzdFN1YnRyZWUodmFsdWUsIHBhdHRlcm4uY2hvaWNlc1tpXSk7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuXG4gICAgICAgIC8vIE5vIGVycm9yPyBZYXksIHJldHVybi5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCBlcnJvcnMganVzdCBtZWFuIHRyeSBhbm90aGVyIGNob2ljZS5cbiAgICB9XG5cbiAgICAvLyBYWFggdGhpcyBlcnJvciBpcyB0ZXJyaWJsZVxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIE1hdGNoLk9uZU9mLCBNYXRjaC5NYXliZSBvciBNYXRjaC5PcHRpb25hbCB2YWxpZGF0aW9uJyxcbiAgICAgIHBhdGg6ICcnLFxuICAgIH07XG4gIH1cblxuICAvLyBBIGZ1bmN0aW9uIHRoYXQgaXNuJ3Qgc29tZXRoaW5nIHdlIHNwZWNpYWwtY2FzZSBpcyBhc3N1bWVkIHRvIGJlIGFcbiAgLy8gY29uc3RydWN0b3IuXG4gIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCAke3BhdHRlcm4ubmFtZSB8fCAncGFydGljdWxhciBjb25zdHJ1Y3Rvcid9YCxcbiAgICAgIHBhdGg6ICcnLFxuICAgIH07XG4gIH1cblxuICBsZXQgdW5rbm93bktleXNBbGxvd2VkID0gZmFsc2U7XG4gIGxldCB1bmtub3duS2V5UGF0dGVybjtcbiAgaWYgKHBhdHRlcm4gaW5zdGFuY2VvZiBPYmplY3RJbmNsdWRpbmcpIHtcbiAgICB1bmtub3duS2V5c0FsbG93ZWQgPSB0cnVlO1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnBhdHRlcm47XG4gIH1cblxuICBpZiAocGF0dGVybiBpbnN0YW5jZW9mIE9iamVjdFdpdGhWYWx1ZXMpIHtcbiAgICB1bmtub3duS2V5c0FsbG93ZWQgPSB0cnVlO1xuICAgIHVua25vd25LZXlQYXR0ZXJuID0gW3BhdHRlcm4ucGF0dGVybl07XG4gICAgcGF0dGVybiA9IHt9OyAgLy8gbm8gcmVxdWlyZWQga2V5c1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnQmFkIHBhdHRlcm46IHVua25vd24gcGF0dGVybiB0eXBlJyxcbiAgICAgIHBhdGg6ICcnLFxuICAgIH07XG4gIH1cblxuICAvLyBBbiBvYmplY3QsIHdpdGggcmVxdWlyZWQgYW5kIG9wdGlvbmFsIGtleXMuIE5vdGUgdGhhdCB0aGlzIGRvZXMgTk9UIGRvXG4gIC8vIHN0cnVjdHVyYWwgbWF0Y2hlcyBhZ2FpbnN0IG9iamVjdHMgb2Ygc3BlY2lhbCB0eXBlcyB0aGF0IGhhcHBlbiB0byBtYXRjaFxuICAvLyB0aGUgcGF0dGVybjogdGhpcyByZWFsbHkgbmVlZHMgdG8gYmUgYSBwbGFpbiBvbGQge09iamVjdH0hXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCBvYmplY3QsIGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxuICAgICAgcGF0aDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBgRXhwZWN0ZWQgb2JqZWN0LCBnb3QgbnVsbGAsXG4gICAgICBwYXRoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKCEgaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogYEV4cGVjdGVkIHBsYWluIG9iamVjdGAsXG4gICAgICBwYXRoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcmVxdWlyZWRQYXR0ZXJucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IG9wdGlvbmFsUGF0dGVybnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIE9iamVjdC5rZXlzKHBhdHRlcm4pLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBzdWJQYXR0ZXJuID0gcGF0dGVybltrZXldO1xuICAgIGlmIChzdWJQYXR0ZXJuIGluc3RhbmNlb2YgT3B0aW9uYWwgfHxcbiAgICAgICAgc3ViUGF0dGVybiBpbnN0YW5jZW9mIE1heWJlKSB7XG4gICAgICBvcHRpb25hbFBhdHRlcm5zW2tleV0gPSBzdWJQYXR0ZXJuLnBhdHRlcm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVpcmVkUGF0dGVybnNba2V5XSA9IHN1YlBhdHRlcm47XG4gICAgfVxuICB9KTtcblxuICBmb3IgKGxldCBrZXkgaW4gT2JqZWN0KHZhbHVlKSkge1xuICAgIGNvbnN0IHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICBjb25zdCBvYmpQYXRoID0gcGF0aCA/IGAke3BhdGh9LiR7a2V5fWAgOiBrZXk7XG4gICAgaWYgKGhhc093bi5jYWxsKHJlcXVpcmVkUGF0dGVybnMsIGtleSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRlc3RTdWJ0cmVlKHN1YlZhbHVlLCByZXF1aXJlZFBhdHRlcm5zW2tleV0sIGNvbGxlY3RFcnJvcnMsIGVycm9ycywgb2JqUGF0aCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5wYXRoID0gX3ByZXBlbmRQYXRoKGNvbGxlY3RFcnJvcnMgPyBvYmpQYXRoIDoga2V5LCByZXN1bHQucGF0aClcbiAgICAgICAgaWYgKCFjb2xsZWN0RXJyb3JzKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICBpZiAodHlwZW9mIHN1YlZhbHVlICE9PSAnb2JqZWN0JyB8fCByZXN1bHQubWVzc2FnZSkgZXJyb3JzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHJlcXVpcmVkUGF0dGVybnNba2V5XTtcbiAgICB9IGVsc2UgaWYgKGhhc093bi5jYWxsKG9wdGlvbmFsUGF0dGVybnMsIGtleSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRlc3RTdWJ0cmVlKHN1YlZhbHVlLCBvcHRpb25hbFBhdHRlcm5zW2tleV0sIGNvbGxlY3RFcnJvcnMsIGVycm9ycywgb2JqUGF0aCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5wYXRoID0gX3ByZXBlbmRQYXRoKGNvbGxlY3RFcnJvcnMgPyBvYmpQYXRoIDoga2V5LCByZXN1bHQucGF0aClcbiAgICAgICAgaWYgKCFjb2xsZWN0RXJyb3JzKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICBpZiAodHlwZW9mIHN1YlZhbHVlICE9PSAnb2JqZWN0JyB8fCByZXN1bHQubWVzc2FnZSkgZXJyb3JzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXVua25vd25LZXlzQWxsb3dlZCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgbWVzc2FnZTogJ1Vua25vd24ga2V5JyxcbiAgICAgICAgICBwYXRoOiBrZXksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghY29sbGVjdEVycm9ycykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZXJyb3JzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVua25vd25LZXlQYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRlc3RTdWJ0cmVlKHN1YlZhbHVlLCB1bmtub3duS2V5UGF0dGVyblswXSwgY29sbGVjdEVycm9ycywgZXJyb3JzLCBvYmpQYXRoKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdC5wYXRoID0gX3ByZXBlbmRQYXRoKGNvbGxlY3RFcnJvcnMgPyBvYmpQYXRoIDoga2V5LCByZXN1bHQucGF0aClcbiAgICAgICAgICBpZiAoIWNvbGxlY3RFcnJvcnMpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdWJWYWx1ZSAhPT0gJ29iamVjdCcgfHwgcmVzdWx0Lm1lc3NhZ2UpIGVycm9ycy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQYXR0ZXJucyk7XG4gIGlmIChrZXlzLmxlbmd0aCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIG1lc3NhZ2U6IGBNaXNzaW5nIGtleSAnJHtrZXlzWzBdfSdgLFxuICAgICAgcGF0aDogJycsXG4gICAgfTtcblxuICAgIGlmICghY29sbGVjdEVycm9ycykgcmV0dXJuIHJlc3VsdDtcbiAgICBlcnJvcnMucHVzaChyZXN1bHQpO1xuICB9XG5cbiAgaWYgKCFjb2xsZWN0RXJyb3JzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAwID8gZmFsc2UgOiBlcnJvcnM7XG59O1xuXG5jbGFzcyBBcmd1bWVudENoZWNrZXIge1xuICBjb25zdHJ1Y3RvciAoYXJncywgZGVzY3JpcHRpb24pIHtcblxuICAgIC8vIE1ha2UgYSBTSEFMTE9XIGNvcHkgb2YgdGhlIGFyZ3VtZW50cy4gKFdlJ2xsIGJlIGRvaW5nIGlkZW50aXR5IGNoZWNrc1xuICAgIC8vIGFnYWluc3QgaXRzIGNvbnRlbnRzLilcbiAgICB0aGlzLmFyZ3MgPSBbLi4uYXJnc107XG5cbiAgICAvLyBTaW5jZSB0aGUgY29tbW9uIGNhc2Ugd2lsbCBiZSB0byBjaGVjayBhcmd1bWVudHMgaW4gb3JkZXIsIGFuZCB3ZSBzcGxpY2VcbiAgICAvLyBvdXQgYXJndW1lbnRzIHdoZW4gd2UgY2hlY2sgdGhlbSwgbWFrZSBpdCBzbyB3ZSBzcGxpY2Ugb3V0IGZyb20gdGhlIGVuZFxuICAgIC8vIHJhdGhlciB0aGFuIHRoZSBiZWdpbm5pbmcuXG4gICAgdGhpcy5hcmdzLnJldmVyc2UoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBjaGVja2luZyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9jaGVja2luZ09uZVZhbHVlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFsbG93IGNoZWNrKGFyZ3VtZW50cywgW1N0cmluZ10pIG9yIGNoZWNrKGFyZ3VtZW50cy5zbGljZSgxKSwgW1N0cmluZ10pXG4gICAgLy8gb3IgY2hlY2soW2ZvbywgYmFyXSwgW1N0cmluZ10pIHRvIGNvdW50Li4uIGJ1dCBvbmx5IGlmIHZhbHVlIHdhc24ndFxuICAgIC8vIGl0c2VsZiBhbiBhcmd1bWVudC5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHZhbHVlLCB0aGlzLl9jaGVja2luZ09uZVZhbHVlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja2luZ09uZVZhbHVlKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyZ3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgLy8gSXMgdGhpcyB2YWx1ZSBvbmUgb2YgdGhlIGFyZ3VtZW50cz8gKFRoaXMgY2FuIGhhdmUgYSBmYWxzZSBwb3NpdGl2ZSBpZlxuICAgICAgLy8gdGhlIGFyZ3VtZW50IGlzIGFuIGludGVybmVkIHByaW1pdGl2ZSwgYnV0IGl0J3Mgc3RpbGwgYSBnb29kIGVub3VnaFxuICAgICAgLy8gY2hlY2suKVxuICAgICAgLy8gKE5hTiBpcyBub3QgPT09IHRvIGl0c2VsZiwgc28gd2UgaGF2ZSB0byBjaGVjayBzcGVjaWFsbHkuKVxuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLmFyZ3NbaV0gfHxcbiAgICAgICAgICAoTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNOYU4odGhpcy5hcmdzW2ldKSkpIHtcbiAgICAgICAgdGhpcy5hcmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRocm93VW5sZXNzQWxsQXJndW1lbnRzSGF2ZUJlZW5DaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmFyZ3MubGVuZ3RoID4gMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIG5vdCBjaGVjaygpIGFsbCBhcmd1bWVudHMgZHVyaW5nICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgfVxufVxuXG5jb25zdCBfanNLZXl3b3JkcyA9IFsnZG8nLCAnaWYnLCAnaW4nLCAnZm9yJywgJ2xldCcsICduZXcnLCAndHJ5JywgJ3ZhcicsICdjYXNlJyxcbiAgJ2Vsc2UnLCAnZW51bScsICdldmFsJywgJ2ZhbHNlJywgJ251bGwnLCAndGhpcycsICd0cnVlJywgJ3ZvaWQnLCAnd2l0aCcsXG4gICdicmVhaycsICdjYXRjaCcsICdjbGFzcycsICdjb25zdCcsICdzdXBlcicsICd0aHJvdycsICd3aGlsZScsICd5aWVsZCcsXG4gICdkZWxldGUnLCAnZXhwb3J0JywgJ2ltcG9ydCcsICdwdWJsaWMnLCAncmV0dXJuJywgJ3N0YXRpYycsICdzd2l0Y2gnLFxuICAndHlwZW9mJywgJ2RlZmF1bHQnLCAnZXh0ZW5kcycsICdmaW5hbGx5JywgJ3BhY2thZ2UnLCAncHJpdmF0ZScsICdjb250aW51ZScsXG4gICdkZWJ1Z2dlcicsICdmdW5jdGlvbicsICdhcmd1bWVudHMnLCAnaW50ZXJmYWNlJywgJ3Byb3RlY3RlZCcsICdpbXBsZW1lbnRzJyxcbiAgJ2luc3RhbmNlb2YnXTtcblxuLy8gQXNzdW1lcyB0aGUgYmFzZSBvZiBwYXRoIGlzIGFscmVhZHkgZXNjYXBlZCBwcm9wZXJseVxuLy8gcmV0dXJucyBrZXkgKyBiYXNlXG5jb25zdCBfcHJlcGVuZFBhdGggPSAoa2V5LCBiYXNlKSA9PiB7XG4gIGlmICgodHlwZW9mIGtleSkgPT09ICdudW1iZXInIHx8IGtleS5tYXRjaCgvXlswLTldKyQvKSkge1xuICAgIGtleSA9IGBbJHtrZXl9XWA7XG4gIH0gZWxzZSBpZiAoIWtleS5tYXRjaCgvXlthLXpfJF1bMC05YS16XyQuW1xcXV0qJC9pKSB8fFxuICAgICAgICAgICAgIF9qc0tleXdvcmRzLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2tleV0pO1xuICB9XG5cbiAgaWYgKGJhc2UgJiYgYmFzZVswXSAhPT0gJ1snKSB7XG4gICAgcmV0dXJuIGAke2tleX0uJHtiYXNlfWA7XG4gIH1cblxuICByZXR1cm4ga2V5ICsgYmFzZTtcbn1cblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuXG5jb25zdCBiYXNlSXNBcmd1bWVudHMgPSBpdGVtID0+XG4gIGlzT2JqZWN0KGl0ZW0pICYmXG4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmNvbnN0IGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID9cbiAgYmFzZUlzQXJndW1lbnRzIDpcbiAgdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZS5jYWxsZWUgPT09ICdmdW5jdGlvbic7XG4iLCIvLyBDb3B5IG9mIGpRdWVyeS5pc1BsYWluT2JqZWN0IGZvciB0aGUgc2VydmVyIHNpZGUgZnJvbSBqUXVlcnkgdjMuMS4xLlxuXG5jb25zdCBjbGFzczJ0eXBlID0ge307XG5cbmNvbnN0IHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxuY29uc3QgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxuY29uc3QgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuY29uc3QgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gb2JqID0+IHtcbiAgbGV0IHByb3RvO1xuICBsZXQgQ3RvcjtcblxuICAvLyBEZXRlY3Qgb2J2aW91cyBuZWdhdGl2ZXNcbiAgLy8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG4gIGlmICghb2JqIHx8IHRvU3RyaW5nLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90byA9IGdldFByb3RvKG9iaik7XG5cbiAgLy8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuICBpZiAoIXByb3RvKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBPYmplY3RzIHdpdGggcHJvdG90eXBlIGFyZSBwbGFpbiBpZmYgdGhleSB3ZXJlIGNvbnN0cnVjdGVkIGJ5IGEgZ2xvYmFsIE9iamVjdCBmdW5jdGlvblxuICBDdG9yID0gaGFzT3duLmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09ICdmdW5jdGlvbicgJiYgXG4gICAgZm5Ub1N0cmluZy5jYWxsKEN0b3IpID09PSBPYmplY3RGdW5jdGlvblN0cmluZztcbn07XG4iXX0=
