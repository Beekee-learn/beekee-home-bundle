(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var Hook = Package['callback-hook'].Hook;
var URL = Package.url.URL;
var URLSearchParams = Package.url.URLSearchParams;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Accounts, options, stampedLoginToken, handler, name, query, oldestValidDate, user;

var require = meteorInstall({"node_modules":{"meteor":{"accounts-base":{"server_main.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/accounts-base/server_main.js                                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  var _Meteor$settings$pack;
  module1.export({
    AccountsServer: () => AccountsServer
  });
  let AccountsServer;
  module1.link("./accounts_server.js", {
    AccountsServer(v) {
      AccountsServer = v;
    }
  }, 0);
  /**
   * @namespace Accounts
   * @summary The namespace for all server-side accounts-related methods.
   */
  Accounts = new AccountsServer(Meteor.server, ((_Meteor$settings$pack = Meteor.settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : _Meteor$settings$pack.accounts) || {});

  // Users table. Don't use the normal autopublish, since we want to hide
  // some fields. Code to autopublish this is in accounts_server.js.
  // XXX Allow users to configure this collection name.

  /**
   * @summary A [Mongo.Collection](#collections) containing user documents.
   * @locus Anywhere
   * @type {Mongo.Collection}
   * @importFromPackage meteor
  */
  Meteor.users = Accounts.users;
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_common.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/accounts-base/accounts_common.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
let _objectSpread;
module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  AccountsCommon: () => AccountsCommon,
  EXPIRE_TOKENS_INTERVAL_MS: () => EXPIRE_TOKENS_INTERVAL_MS
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 0);
// config option keys
const VALID_CONFIG_KEYS = ['sendVerificationEmail', 'forbidClientAccountCreation', 'restrictCreationByEmailDomain', 'loginExpiration', 'loginExpirationInDays', 'oauthSecretKey', 'passwordResetTokenExpirationInDays', 'passwordResetTokenExpiration', 'passwordEnrollTokenExpirationInDays', 'passwordEnrollTokenExpiration', 'ambiguousErrorMessages', 'bcryptRounds', 'defaultFieldSelector', 'collection', 'loginTokenExpirationHours', 'tokenSequenceLength', 'clientStorage'];

/**
 * @summary Super-constructor for AccountsClient and AccountsServer.
 * @locus Anywhere
 * @class AccountsCommon
 * @instancename accountsClientOrServer
 * @param options {Object} an object with fields:
 * - connection {Object} Optional DDP connection to reuse.
 * - ddpUrl {String} Optional URL for creating a new DDP connection.
 * - collection {String|Mongo.Collection} The name of the Mongo.Collection
 *     or the Mongo.Collection object to hold the users.
 */
class AccountsCommon {
  constructor(options) {
    // Currently this is read directly by packages like accounts-password
    // and accounts-ui-unstyled.
    this._options = {};

    // Note that setting this.connection = null causes this.users to be a
    // LocalCollection, which is not what we want.
    this.connection = undefined;
    this._initConnection(options || {});

    // There is an allow call in accounts_server.js that restricts writes to
    // this collection.
    this.users = this._initializeCollection(options || {});

    // Callback exceptions are printed with Meteor._debug and ignored.
    this._onLoginHook = new Hook({
      bindEnvironment: false,
      debugPrintExceptions: 'onLogin callback'
    });
    this._onLoginFailureHook = new Hook({
      bindEnvironment: false,
      debugPrintExceptions: 'onLoginFailure callback'
    });
    this._onLogoutHook = new Hook({
      bindEnvironment: false,
      debugPrintExceptions: 'onLogout callback'
    });

    // Expose for testing.
    this.DEFAULT_LOGIN_EXPIRATION_DAYS = DEFAULT_LOGIN_EXPIRATION_DAYS;
    this.LOGIN_UNEXPIRING_TOKEN_DAYS = LOGIN_UNEXPIRING_TOKEN_DAYS;

    // Thrown when the user cancels the login process (eg, closes an oauth
    // popup, declines retina scan, etc)
    const lceName = 'Accounts.LoginCancelledError';
    this.LoginCancelledError = Meteor.makeErrorType(lceName, function (description) {
      this.message = description;
    });
    this.LoginCancelledError.prototype.name = lceName;

    // This is used to transmit specific subclass errors over the wire. We
    // should come up with a more generic way to do this (eg, with some sort of
    // symbolic error code rather than a number).
    this.LoginCancelledError.numericError = 0x8acdc2f;
  }
  _initializeCollection(options) {
    if (options.collection && typeof options.collection !== 'string' && !(options.collection instanceof Mongo.Collection)) {
      throw new Meteor.Error('Collection parameter can be only of type string or "Mongo.Collection"');
    }
    let collectionName = 'users';
    if (typeof options.collection === 'string') {
      collectionName = options.collection;
    }
    let collection;
    if (options.collection instanceof Mongo.Collection) {
      collection = options.collection;
    } else {
      collection = new Mongo.Collection(collectionName, {
        _preventAutopublish: true,
        connection: this.connection
      });
    }
    return collection;
  }

  /**
   * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.
   * @locus Anywhere
   */
  userId() {
    throw new Error('userId method not implemented');
  }

  // merge the defaultFieldSelector with an existing options object
  _addDefaultFieldSelector() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // this will be the most common case for most people, so make it quick
    if (!this._options.defaultFieldSelector) return options;

    // if no field selector then just use defaultFieldSelector
    if (!options.fields) return _objectSpread(_objectSpread({}, options), {}, {
      fields: this._options.defaultFieldSelector
    });

    // if empty field selector then the full user object is explicitly requested, so obey
    const keys = Object.keys(options.fields);
    if (!keys.length) return options;

    // if the requested fields are +ve then ignore defaultFieldSelector
    // assume they are all either +ve or -ve because Mongo doesn't like mixed
    if (!!options.fields[keys[0]]) return options;

    // The requested fields are -ve.
    // If the defaultFieldSelector is +ve then use requested fields, otherwise merge them
    const keys2 = Object.keys(this._options.defaultFieldSelector);
    return this._options.defaultFieldSelector[keys2[0]] ? options : _objectSpread(_objectSpread({}, options), {}, {
      fields: _objectSpread(_objectSpread({}, options.fields), this._options.defaultFieldSelector)
    });
  }

  /**
   * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.
   * @locus Anywhere
   * @param {Object} [options]
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
   */
  user(options) {
    const userId = this.userId();
    return userId ? this.users.findOne(userId, this._addDefaultFieldSelector(options)) : null;
  }

  /**
   * @summary Get the current user record, or `null` if no user is logged in.
   * @locus Anywhere
   * @param {Object} [options]
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
   */
  userAsync(options) {
    return Promise.asyncApply(() => {
      const userId = this.userId();
      return userId ? this.users.findOneAsync(userId, this._addDefaultFieldSelector(options)) : null;
    });
  }
  // Set up config for the accounts system. Call this on both the client
  // and the server.
  //
  // Note that this method gets overridden on AccountsServer.prototype, but
  // the overriding method calls the overridden method.
  //
  // XXX we should add some enforcement that this is called on both the
  // client and the server. Otherwise, a user can
  // 'forbidClientAccountCreation' only on the client and while it looks
  // like their app is secure, the server will still accept createUser
  // calls. https://github.com/meteor/meteor/issues/828
  //
  // @param options {Object} an object with fields:
  // - sendVerificationEmail {Boolean}
  //     Send email address verification emails to new users created from
  //     client signups.
  // - forbidClientAccountCreation {Boolean}
  //     Do not allow clients to create accounts directly.
  // - restrictCreationByEmailDomain {Function or String}
  //     Require created users to have an email matching the function or
  //     having the string as domain.
  // - loginExpirationInDays {Number}
  //     Number of days since login until a user is logged out (login token
  //     expires).
  // - collection {String|Mongo.Collection}
  //     A collection name or a Mongo.Collection object to hold the users.
  // - passwordResetTokenExpirationInDays {Number}
  //     Number of days since password reset token creation until the
  //     token cannt be used any longer (password reset token expires).
  // - ambiguousErrorMessages {Boolean}
  //     Return ambiguous error messages from login failures to prevent
  //     user enumeration.
  // - bcryptRounds {Number}
  //     Allows override of number of bcrypt rounds (aka work factor) used
  //     to store passwords.

  /**
   * @summary Set global accounts options. You can also set these in `Meteor.settings.packages.accounts` without the need to call this function.
   * @locus Anywhere
   * @param {Object} options
   * @param {Boolean} options.sendVerificationEmail New users with an email address will receive an address verification email.
   * @param {Boolean} options.forbidClientAccountCreation Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the "Create account" link will not be available.
   * @param {String | Function} options.restrictCreationByEmailDomain If set to a string, only allows new users if the domain part of their email address matches the string. If set to a function, only allows new users if the function returns true.  The function is passed the full email address of the proposed new user.  Works with password-based sign-in and external services that expose email addresses (Google, Facebook, GitHub). All existing users still can log in after enabling this option. Example: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`.
   * @param {Number} options.loginExpiration The number of milliseconds from when a user logs in until their token expires and they are logged out, for a more granular control. If `loginExpirationInDays` is set, it takes precedent.
   * @param {Number} options.loginExpirationInDays The number of days from when a user logs in until their token expires and they are logged out. Defaults to 90. Set to `null` to disable login expiration.
   * @param {String} options.oauthSecretKey When using the `oauth-encryption` package, the 16 byte key using to encrypt sensitive account credentials in the database, encoded in base64.  This option may only be specified on the server.  See packages/oauth-encryption/README.md for details.
   * @param {Number} options.passwordResetTokenExpirationInDays The number of days from when a link to reset password is sent until token expires and user can't reset password with the link anymore. Defaults to 3.
   * @param {Number} options.passwordResetTokenExpiration The number of milliseconds from when a link to reset password is sent until token expires and user can't reset password with the link anymore. If `passwordResetTokenExpirationInDays` is set, it takes precedent.
   * @param {Number} options.passwordEnrollTokenExpirationInDays The number of days from when a link to set initial password is sent until token expires and user can't set password with the link anymore. Defaults to 30.
   * @param {Number} options.passwordEnrollTokenExpiration The number of milliseconds from when a link to set initial password is sent until token expires and user can't set password with the link anymore. If `passwordEnrollTokenExpirationInDays` is set, it takes precedent.
   * @param {Boolean} options.ambiguousErrorMessages Return ambiguous error messages from login failures to prevent user enumeration. Defaults to false.
   * @param {Number} options.bcryptRounds Allows override of number of bcrypt rounds (aka work factor) used to store passwords. The default is 10.
   * @param {MongoFieldSpecifier} options.defaultFieldSelector To exclude by default large custom fields from `Meteor.user()` and `Meteor.findUserBy...()` functions when called without a field selector, and all `onLogin`, `onLoginFailure` and `onLogout` callbacks.  Example: `Accounts.config({ defaultFieldSelector: { myBigArray: 0 }})`. Beware when using this. If, for instance, you do not include `email` when excluding the fields, you can have problems with functions like `forgotPassword` that will break because they won't have the required data available. It's recommend that you always keep the fields `_id`, `username`, and `email`.
   * @param {String|Mongo.Collection} options.collection A collection name or a Mongo.Collection object to hold the users.
   * @param {Number} options.loginTokenExpirationHours When using the package `accounts-2fa`, use this to set the amount of time a token sent is valid. As it's just a number, you can use, for example, 0.5 to make the token valid for just half hour. The default is 1 hour.
   * @param {Number} options.tokenSequenceLength When using the package `accounts-2fa`, use this to the size of the token sequence generated. The default is 6.
   * @param {'session' | 'local'} options.clientStorage By default login credentials are stored in local storage, setting this to true will switch to using session storage.
   */
  config(options) {
    // We don't want users to accidentally only call Accounts.config on the
    // client, where some of the options will have partial effects (eg removing
    // the "create account" button from accounts-ui if forbidClientAccountCreation
    // is set, or redirecting Google login to a specific-domain page) without
    // having their full effects.
    if (Meteor.isServer) {
      __meteor_runtime_config__.accountsConfigCalled = true;
    } else if (!__meteor_runtime_config__.accountsConfigCalled) {
      // XXX would be nice to "crash" the client and replace the UI with an error
      // message, but there's no trivial way to do this.
      Meteor._debug('Accounts.config was called on the client but not on the ' + 'server; some configuration options may not take effect.');
    }

    // We need to validate the oauthSecretKey option at the time
    // Accounts.config is called. We also deliberately don't store the
    // oauthSecretKey in Accounts._options.
    if (Object.prototype.hasOwnProperty.call(options, 'oauthSecretKey')) {
      if (Meteor.isClient) {
        throw new Error('The oauthSecretKey option may only be specified on the server');
      }
      if (!Package['oauth-encryption']) {
        throw new Error('The oauth-encryption package must be loaded to set oauthSecretKey');
      }
      Package['oauth-encryption'].OAuthEncryption.loadKey(options.oauthSecretKey);
      options = _objectSpread({}, options);
      delete options.oauthSecretKey;
    }

    // Validate config options keys
    Object.keys(options).forEach(key => {
      if (!VALID_CONFIG_KEYS.includes(key)) {
        // TODO Consider just logging a debug message instead to allow for additional keys in the settings here?
        throw new Meteor.Error("Accounts.config: Invalid key: ".concat(key));
      }
    });

    // set values in Accounts._options
    VALID_CONFIG_KEYS.forEach(key => {
      if (key in options) {
        if (key in this._options) {
          if (key !== 'collection' && Meteor.isTest && key !== 'clientStorage') {
            throw new Meteor.Error("Can't set `".concat(key, "` more than once"));
          }
        }
        this._options[key] = options[key];
      }
    });
    if (options.collection && options.collection !== this.users._name && options.collection !== this.users) {
      this.users = this._initializeCollection(options);
    }
  }

  /**
   * @summary Register a callback to be called after a login attempt succeeds.
   * @locus Anywhere
   * @param {Function} func The callback to be called when login is successful.
   *                        The callback receives a single object that
   *                        holds login details. This object contains the login
   *                        result type (password, resume, etc.) on both the
   *                        client and server. `onLogin` callbacks registered
   *                        on the server also receive extra data, such
   *                        as user details, connection information, etc.
   */
  onLogin(func) {
    let ret = this._onLoginHook.register(func);
    // call the just registered callback if already logged in
    this._startupCallback(ret.callback);
    return ret;
  }

  /**
   * @summary Register a callback to be called after a login attempt fails.
   * @locus Anywhere
   * @param {Function} func The callback to be called after the login has failed.
   */
  onLoginFailure(func) {
    return this._onLoginFailureHook.register(func);
  }

  /**
   * @summary Register a callback to be called after a logout attempt succeeds.
   * @locus Anywhere
   * @param {Function} func The callback to be called when logout is successful.
   */
  onLogout(func) {
    return this._onLogoutHook.register(func);
  }
  _initConnection(options) {
    if (!Meteor.isClient) {
      return;
    }

    // The connection used by the Accounts system. This is the connection
    // that will get logged in by Meteor.login(), and this is the
    // connection whose login state will be reflected by Meteor.userId().
    //
    // It would be much preferable for this to be in accounts_client.js,
    // but it has to be here because it's needed to create the
    // Meteor.users collection.
    if (options.connection) {
      this.connection = options.connection;
    } else if (options.ddpUrl) {
      this.connection = DDP.connect(options.ddpUrl);
    } else if (typeof __meteor_runtime_config__ !== 'undefined' && __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL) {
      // Temporary, internal hook to allow the server to point the client
      // to a different authentication server. This is for a very
      // particular use case that comes up when implementing a oauth
      // server. Unsupported and may go away at any point in time.
      //
      // We will eventually provide a general way to use account-base
      // against any DDP connection, not just one special one.
      this.connection = DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL);
    } else {
      this.connection = Meteor.connection;
    }
  }
  _getTokenLifetimeMs() {
    // When loginExpirationInDays is set to null, we'll use a really high
    // number of days (LOGIN_UNEXPIRABLE_TOKEN_DAYS) to simulate an
    // unexpiring token.
    const loginExpirationInDays = this._options.loginExpirationInDays === null ? LOGIN_UNEXPIRING_TOKEN_DAYS : this._options.loginExpirationInDays;
    return this._options.loginExpiration || (loginExpirationInDays || DEFAULT_LOGIN_EXPIRATION_DAYS) * 86400000;
  }
  _getPasswordResetTokenLifetimeMs() {
    return this._options.passwordResetTokenExpiration || (this._options.passwordResetTokenExpirationInDays || DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS) * 86400000;
  }
  _getPasswordEnrollTokenLifetimeMs() {
    return this._options.passwordEnrollTokenExpiration || (this._options.passwordEnrollTokenExpirationInDays || DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS) * 86400000;
  }
  _tokenExpiration(when) {
    // We pass when through the Date constructor for backwards compatibility;
    // `when` used to be a number.
    return new Date(new Date(when).getTime() + this._getTokenLifetimeMs());
  }
  _tokenExpiresSoon(when) {
    let minLifetimeMs = 0.1 * this._getTokenLifetimeMs();
    const minLifetimeCapMs = MIN_TOKEN_LIFETIME_CAP_SECS * 1000;
    if (minLifetimeMs > minLifetimeCapMs) {
      minLifetimeMs = minLifetimeCapMs;
    }
    return new Date() > new Date(when) - minLifetimeMs;
  }

  // No-op on the server, overridden on the client.
  _startupCallback(callback) {}
}
// Note that Accounts is defined separately in accounts_client.js and
// accounts_server.js.

/**
 * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.
 * @locus Anywhere but publish functions
 * @importFromPackage meteor
 */
Meteor.userId = () => Accounts.userId();

/**
 * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.
 * @locus Anywhere but publish functions
 * @importFromPackage meteor
 * @param {Object} [options]
 * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
 */
Meteor.user = options => Accounts.user(options);

/**
 * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.
 * @locus Anywhere but publish functions
 * @importFromPackage meteor
 * @param {Object} [options]
 * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.
 */
Meteor.userAsync = options => Accounts.userAsync(options);

// how long (in days) until a login token expires
const DEFAULT_LOGIN_EXPIRATION_DAYS = 90;
// how long (in days) until reset password token expires
const DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS = 3;
// how long (in days) until enrol password token expires
const DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS = 30;
// Clients don't try to auto-login with a token that is going to expire within
// .1 * DEFAULT_LOGIN_EXPIRATION_DAYS, capped at MIN_TOKEN_LIFETIME_CAP_SECS.
// Tries to avoid abrupt disconnects from expiring tokens.
const MIN_TOKEN_LIFETIME_CAP_SECS = 3600; // one hour
// how often (in milliseconds) we check for expired tokens
const EXPIRE_TOKENS_INTERVAL_MS = 600 * 1000;
// 10 minutes
// A large number of expiration days (approximately 100 years worth) that is
// used when creating unexpiring tokens.
const LOGIN_UNEXPIRING_TOKEN_DAYS = 365 * 100;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_server.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/accounts-base/accounts_server.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _Package$oauthEncryp;
const _excluded = ["token"];
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
  AccountsServer: () => AccountsServer
});
let crypto;
module.link("crypto", {
  default(v) {
    crypto = v;
  }
}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 1);
let AccountsCommon, EXPIRE_TOKENS_INTERVAL_MS;
module.link("./accounts_common.js", {
  AccountsCommon(v) {
    AccountsCommon = v;
  },
  EXPIRE_TOKENS_INTERVAL_MS(v) {
    EXPIRE_TOKENS_INTERVAL_MS = v;
  }
}, 2);
let URL;
module.link("meteor/url", {
  URL(v) {
    URL = v;
  }
}, 3);
const hasOwn = Object.prototype.hasOwnProperty;

// XXX maybe this belongs in the check package
const NonEmptyString = Match.Where(x => {
  check(x, String);
  return x.length > 0;
});

/**
 * @summary Constructor for the `Accounts` namespace on the server.
 * @locus Server
 * @class AccountsServer
 * @extends AccountsCommon
 * @instancename accountsServer
 * @param {Object} server A server object such as `Meteor.server`.
 */
class AccountsServer extends AccountsCommon {
  // Note that this constructor is less likely to be instantiated multiple
  // times than the `AccountsClient` constructor, because a single server
  // can provide only one set of methods.
  constructor(server, _options) {
    var _this;
    super(_options || {});
    _this = this;
    ///
    /// CREATE USER HOOKS
    ///
    /**
     * @summary Customize login token creation.
     * @locus Server
     * @param {Function} func Called whenever a new token is created.
     * Return the sequence and the user object. Return true to keep sending the default email, or false to override the behavior.
     */
    this.onCreateLoginToken = function (func) {
      if (this._onCreateLoginTokenHook) {
        throw new Error('Can only call onCreateLoginToken once');
      }
      this._onCreateLoginTokenHook = func;
    };
    // Generates a MongoDB selector that can be used to perform a fast case
    // insensitive lookup for the given fieldName and string. Since MongoDB does
    // not support case insensitive indexes, and case insensitive regex queries
    // are slow, we construct a set of prefix selectors for all permutations of
    // the first 4 characters ourselves. We first attempt to matching against
    // these, and because 'prefix expression' regex queries do use indexes (see
    // http://docs.mongodb.org/v2.6/reference/operator/query/regex/#index-use),
    // this has been found to greatly improve performance (from 1200ms to 5ms in a
    // test with 1.000.000 users).
    this._selectorForFastCaseInsensitiveLookup = (fieldName, string) => {
      // Performance seems to improve up to 4 prefix characters
      const prefix = string.substring(0, Math.min(string.length, 4));
      const orClause = generateCasePermutationsForString(prefix).map(prefixPermutation => {
        const selector = {};
        selector[fieldName] = new RegExp("^".concat(Meteor._escapeRegExp(prefixPermutation)));
        return selector;
      });
      const caseInsensitiveClause = {};
      caseInsensitiveClause[fieldName] = new RegExp("^".concat(Meteor._escapeRegExp(string), "$"), 'i');
      return {
        $and: [{
          $or: orClause
        }, caseInsensitiveClause]
      };
    };
    this._findUserByQuery = (query, options) => {
      let user = null;
      if (query.id) {
        // default field selector is added within getUserById()
        user = Meteor.users.findOne(query.id, this._addDefaultFieldSelector(options));
      } else {
        options = this._addDefaultFieldSelector(options);
        let fieldName;
        let fieldValue;
        if (query.username) {
          fieldName = 'username';
          fieldValue = query.username;
        } else if (query.email) {
          fieldName = 'emails.address';
          fieldValue = query.email;
        } else {
          throw new Error("shouldn't happen (validation missed something)");
        }
        let selector = {};
        selector[fieldName] = fieldValue;
        user = Meteor.users.findOne(selector, options);
        // If user is not found, try a case insensitive lookup
        if (!user) {
          selector = this._selectorForFastCaseInsensitiveLookup(fieldName, fieldValue);
          const candidateUsers = Meteor.users.find(selector, _objectSpread(_objectSpread({}, options), {}, {
            limit: 2
          })).fetch();
          // No match if multiple candidates are found
          if (candidateUsers.length === 1) {
            user = candidateUsers[0];
          }
        }
      }
      return user;
    };
    this._handleError = function (msg) {
      let throwError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      let errorCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 403;
      const error = new Meteor.Error(errorCode, _this._options.ambiguousErrorMessages ? "Something went wrong. Please check your credentials." : msg);
      if (throwError) {
        throw error;
      }
      return error;
    };
    this._userQueryValidator = Match.Where(user => {
      check(user, {
        id: Match.Optional(NonEmptyString),
        username: Match.Optional(NonEmptyString),
        email: Match.Optional(NonEmptyString)
      });
      if (Object.keys(user).length !== 1) throw new Match.Error("User property must have exactly one field");
      return true;
    });
    this._server = server || Meteor.server;
    // Set up the server's methods, as if by calling Meteor.methods.
    this._initServerMethods();
    this._initAccountDataHooks();

    // If autopublish is on, publish these user fields. Login service
    // packages (eg accounts-google) add to these by calling
    // addAutopublishFields.  Notably, this isn't implemented with multiple
    // publishes since DDP only merges only across top-level fields, not
    // subfields (such as 'services.facebook.accessToken')
    this._autopublishFields = {
      loggedInUser: ['profile', 'username', 'emails'],
      otherUsers: ['profile', 'username']
    };

    // use object to keep the reference when used in functions
    // where _defaultPublishFields is destructured into lexical scope
    // for publish callbacks that need `this`
    this._defaultPublishFields = {
      projection: {
        profile: 1,
        username: 1,
        emails: 1
      }
    };
    this._initServerPublications();

    // connectionId -> {connection, loginToken}
    this._accountData = {};

    // connection id -> observe handle for the login token that this connection is
    // currently associated with, or a number. The number indicates that we are in
    // the process of setting up the observe (using a number instead of a single
    // sentinel allows multiple attempts to set up the observe to identify which
    // one was theirs).
    this._userObservesForConnections = {};
    this._nextUserObserveNumber = 1; // for the number described above.

    // list of all registered handlers.
    this._loginHandlers = [];
    setupUsersCollection(this.users);
    setupDefaultLoginHandlers(this);
    setExpireTokensInterval(this);
    this._validateLoginHook = new Hook({
      bindEnvironment: false
    });
    this._validateNewUserHooks = [defaultValidateNewUserHook.bind(this)];
    this._deleteSavedTokensForAllUsersOnStartup();
    this._skipCaseInsensitiveChecksForTest = {};
    this.urls = {
      resetPassword: (token, extraParams) => this.buildEmailUrl("#/reset-password/".concat(token), extraParams),
      verifyEmail: (token, extraParams) => this.buildEmailUrl("#/verify-email/".concat(token), extraParams),
      loginToken: (selector, token, extraParams) => this.buildEmailUrl("/?loginToken=".concat(token, "&selector=").concat(selector), extraParams),
      enrollAccount: (token, extraParams) => this.buildEmailUrl("#/enroll-account/".concat(token), extraParams)
    };
    this.addDefaultRateLimit();
    this.buildEmailUrl = function (path) {
      let extraParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const url = new URL(Meteor.absoluteUrl(path));
      const params = Object.entries(extraParams);
      if (params.length > 0) {
        // Add additional parameters to the url
        for (const [key, value] of params) {
          url.searchParams.append(key, value);
        }
      }
      return url.toString();
    };
  }

  ///
  /// CURRENT USER
  ///

  // @override of "abstract" non-implementation in accounts_common.js
  userId() {
    // This function only works if called inside a method or a pubication.
    // Using any of the information from Meteor.user() in a method or
    // publish function will always use the value from when the function first
    // runs. This is likely not what the user expects. The way to make this work
    // in a method or publish function is to do Meteor.find(this.userId).observe
    // and recompute when the user record changes.
    const currentInvocation = DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get();
    if (!currentInvocation) throw new Error("Meteor.userId can only be invoked in method calls or publications.");
    return currentInvocation.userId;
  }

  ///
  /// LOGIN HOOKS
  ///

  /**
   * @summary Validate login attempts.
   * @locus Server
   * @param {Function} func Called whenever a login is attempted (either successful or unsuccessful).  A login can be aborted by returning a falsy value or throwing an exception.
   */
  validateLoginAttempt(func) {
    // Exceptions inside the hook callback are passed up to us.
    return this._validateLoginHook.register(func);
  }

  /**
   * @summary Set restrictions on new user creation.
   * @locus Server
   * @param {Function} func Called whenever a new user is created. Takes the new user object, and returns true to allow the creation or false to abort.
   */
  validateNewUser(func) {
    this._validateNewUserHooks.push(func);
  }

  /**
   * @summary Validate login from external service
   * @locus Server
   * @param {Function} func Called whenever login/user creation from external service is attempted. Login or user creation based on this login can be aborted by passing a falsy value or throwing an exception.
   */
  beforeExternalLogin(func) {
    if (this._beforeExternalLoginHook) {
      throw new Error("Can only call beforeExternalLogin once");
    }
    this._beforeExternalLoginHook = func;
  }
  /**
   * @summary Customize new user creation.
   * @locus Server
   * @param {Function} func Called whenever a new user is created. Return the new user object, or throw an `Error` to abort the creation.
   */
  onCreateUser(func) {
    if (this._onCreateUserHook) {
      throw new Error("Can only call onCreateUser once");
    }
    this._onCreateUserHook = Meteor.wrapFn(func);
  }

  /**
   * @summary Customize oauth user profile updates
   * @locus Server
   * @param {Function} func Called whenever a user is logged in via oauth. Return the profile object to be merged, or throw an `Error` to abort the creation.
   */
  onExternalLogin(func) {
    if (this._onExternalLoginHook) {
      throw new Error("Can only call onExternalLogin once");
    }
    this._onExternalLoginHook = func;
  }

  /**
   * @summary Customize user selection on external logins
   * @locus Server
   * @param {Function} func Called whenever a user is logged in via oauth and a
   * user is not found with the service id. Return the user or undefined.
   */
  setAdditionalFindUserOnExternalLogin(func) {
    if (this._additionalFindUserOnExternalLogin) {
      throw new Error("Can only call setAdditionalFindUserOnExternalLogin once");
    }
    this._additionalFindUserOnExternalLogin = func;
  }
  _validateLogin(connection, attempt) {
    this._validateLoginHook.forEach(callback => {
      let ret;
      try {
        ret = callback(cloneAttemptWithConnection(connection, attempt));
      } catch (e) {
        attempt.allowed = false;
        // XXX this means the last thrown error overrides previous error
        // messages. Maybe this is surprising to users and we should make
        // overriding errors more explicit. (see
        // https://github.com/meteor/meteor/issues/1960)
        attempt.error = e;
        return true;
      }
      if (!ret) {
        attempt.allowed = false;
        // don't override a specific error provided by a previous
        // validator or the initial attempt (eg "incorrect password").
        if (!attempt.error) attempt.error = new Meteor.Error(403, "Login forbidden");
      }
      return true;
    });
  }
  _successfulLogin(connection, attempt) {
    this._onLoginHook.each(callback => {
      callback(cloneAttemptWithConnection(connection, attempt));
      return true;
    });
  }
  _failedLogin(connection, attempt) {
    this._onLoginFailureHook.each(callback => {
      callback(cloneAttemptWithConnection(connection, attempt));
      return true;
    });
  }
  _successfulLogout(connection, userId) {
    // don't fetch the user object unless there are some callbacks registered
    let user;
    this._onLogoutHook.each(callback => {
      if (!user && userId) user = this.users.findOne(userId, {
        fields: this._options.defaultFieldSelector
      });
      callback({
        user,
        connection
      });
      return true;
    });
  }
  ///
  /// LOGIN METHODS
  ///

  // Login methods return to the client an object containing these
  // fields when the user was logged in successfully:
  //
  //   id: userId
  //   token: *
  //   tokenExpires: *
  //
  // tokenExpires is optional and intends to provide a hint to the
  // client as to when the token will expire. If not provided, the
  // client will call Accounts._tokenExpiration, passing it the date
  // that it received the token.
  //
  // The login method will throw an error back to the client if the user
  // failed to log in.
  //
  //
  // Login handlers and service specific login methods such as
  // `createUser` internally return a `result` object containing these
  // fields:
  //
  //   type:
  //     optional string; the service name, overrides the handler
  //     default if present.
  //
  //   error:
  //     exception; if the user is not allowed to login, the reason why.
  //
  //   userId:
  //     string; the user id of the user attempting to login (if
  //     known), required for an allowed login.
  //
  //   options:
  //     optional object merged into the result returned by the login
  //     method; used by HAMK from SRP.
  //
  //   stampedLoginToken:
  //     optional object with `token` and `when` indicating the login
  //     token is already present in the database, returned by the
  //     "resume" login handler.
  //
  // For convenience, login methods can also throw an exception, which
  // is converted into an {error} result.  However, if the id of the
  // user attempting the login is known, a {userId, error} result should
  // be returned instead since the user id is not captured when an
  // exception is thrown.
  //
  // This internal `result` object is automatically converted into the
  // public {id, token, tokenExpires} object returned to the client.

  // Try a login method, converting thrown exceptions into an {error}
  // result.  The `type` argument is a default, inserted into the result
  // object if not explicitly returned.
  //
  // Log in a user on a connection.
  //
  // We use the method invocation to set the user id on the connection,
  // not the connection object directly. setUserId is tied to methods to
  // enforce clear ordering of method application (using wait methods on
  // the client, and a no setUserId after unblock restriction on the
  // server)
  //
  // The `stampedLoginToken` parameter is optional.  When present, it
  // indicates that the login token has already been inserted into the
  // database and doesn't need to be inserted again.  (It's used by the
  // "resume" login handler).
  _loginUser(methodInvocation, userId, stampedLoginToken) {
    if (!stampedLoginToken) {
      stampedLoginToken = this._generateStampedLoginToken();
      this._insertLoginToken(userId, stampedLoginToken);
    }

    // This order (and the avoidance of yields) is important to make
    // sure that when publish functions are rerun, they see a
    // consistent view of the world: the userId is set and matches
    // the login token on the connection (not that there is
    // currently a public API for reading the login token on a
    // connection).
    Meteor._noYieldsAllowed(() => this._setLoginToken(userId, methodInvocation.connection, this._hashLoginToken(stampedLoginToken.token)));
    methodInvocation.setUserId(userId);
    return {
      id: userId,
      token: stampedLoginToken.token,
      tokenExpires: this._tokenExpiration(stampedLoginToken.when)
    };
  }
  // After a login method has completed, call the login hooks.  Note
  // that `attemptLogin` is called for *all* login attempts, even ones
  // which aren't successful (such as an invalid password, etc).
  //
  // If the login is allowed and isn't aborted by a validate login hook
  // callback, log in the user.
  //
  _attemptLogin(methodInvocation, methodName, methodArgs, result) {
    return Promise.asyncApply(() => {
      if (!result) throw new Error("result is required");

      // XXX A programming error in a login handler can lead to this occurring, and
      // then we don't call onLogin or onLoginFailure callbacks. Should
      // tryLoginMethod catch this case and turn it into an error?
      if (!result.userId && !result.error) throw new Error("A login method must specify a userId or an error");
      let user;
      if (result.userId) user = this.users.findOne(result.userId, {
        fields: this._options.defaultFieldSelector
      });
      const attempt = {
        type: result.type || "unknown",
        allowed: !!(result.userId && !result.error),
        methodName: methodName,
        methodArguments: Array.from(methodArgs)
      };
      if (result.error) {
        attempt.error = result.error;
      }
      if (user) {
        attempt.user = user;
      }

      // _validateLogin may mutate `attempt` by adding an error and changing allowed
      // to false, but that's the only change it can make (and the user's callbacks
      // only get a clone of `attempt`).
      this._validateLogin(methodInvocation.connection, attempt);
      if (attempt.allowed) {
        const ret = _objectSpread(_objectSpread({}, this._loginUser(methodInvocation, result.userId, result.stampedLoginToken)), result.options);
        ret.type = attempt.type;
        this._successfulLogin(methodInvocation.connection, attempt);
        return ret;
      } else {
        this._failedLogin(methodInvocation.connection, attempt);
        throw attempt.error;
      }
    });
  }
  // All service specific login methods should go through this function.
  // Ensure that thrown exceptions are caught and that login hook
  // callbacks are still called.
  //
  _loginMethod(methodInvocation, methodName, methodArgs, type, fn) {
    return Promise.asyncApply(() => {
      return Promise.await(this._attemptLogin(methodInvocation, methodName, methodArgs, Promise.await(tryLoginMethod(type, fn))));
    });
  }
  // Report a login attempt failed outside the context of a normal login
  // method. This is for use in the case where there is a multi-step login
  // procedure (eg SRP based password login). If a method early in the
  // chain fails, it should call this function to report a failure. There
  // is no corresponding method for a successful login; methods that can
  // succeed at logging a user in should always be actual login methods
  // (using either Accounts._loginMethod or Accounts.registerLoginHandler).
  _reportLoginFailure(methodInvocation, methodName, methodArgs, result) {
    const attempt = {
      type: result.type || "unknown",
      allowed: false,
      error: result.error,
      methodName: methodName,
      methodArguments: Array.from(methodArgs)
    };
    if (result.userId) {
      attempt.user = this.users.findOne(result.userId, {
        fields: this._options.defaultFieldSelector
      });
    }
    this._validateLogin(methodInvocation.connection, attempt);
    this._failedLogin(methodInvocation.connection, attempt);

    // _validateLogin may mutate attempt to set a new error message. Return
    // the modified version.
    return attempt;
  }
  ///
  /// LOGIN HANDLERS
  ///

  /**
   * @summary Registers a new login handler.
   * @locus Server
   * @param {String} [name] The type of login method like oauth, password, etc.
   * @param {Function} handler A function that receives an options object
   * (as passed as an argument to the `login` method) and returns one of
   * `undefined`, meaning don't handle or a login method result object.
   */
  registerLoginHandler(name, handler) {
    if (!handler) {
      handler = name;
      name = null;
    }
    this._loginHandlers.push({
      name: name,
      handler: Meteor.wrapFn(handler)
    });
  }
  // Checks a user's credentials against all the registered login
  // handlers, and returns a login token if the credentials are valid. It
  // is like the login method, except that it doesn't set the logged-in
  // user on the connection. Throws a Meteor.Error if logging in fails,
  // including the case where none of the login handlers handled the login
  // request. Otherwise, returns {id: userId, token: *, tokenExpires: *}.
  //
  // For example, if you want to login with a plaintext password, `options` could be
  //   { user: { username: <username> }, password: <password> }, or
  //   { user: { email: <email> }, password: <password> }.

  // Try all of the registered login handlers until one of them doesn't
  // return `undefined`, meaning it handled this call to `login`. Return
  // that return value.
  _runLoginHandlers(methodInvocation, options) {
    return Promise.asyncApply(() => {
      for (let handler of this._loginHandlers) {
        const result = Promise.await(tryLoginMethod(handler.name, () => Promise.asyncApply(() => Promise.await(handler.handler.call(methodInvocation, options)))));
        if (result) {
          return result;
        }
        if (result !== undefined) {
          throw new Meteor.Error(400, 'A login handler should return a result or undefined');
        }
      }
      return {
        type: null,
        error: new Meteor.Error(400, "Unrecognized options for login request")
      };
    });
  }
  // Deletes the given loginToken from the database.
  //
  // For new-style hashed token, this will cause all connections
  // associated with the token to be closed.
  //
  // Any connections associated with old-style unhashed tokens will be
  // in the process of becoming associated with hashed tokens and then
  // they'll get closed.
  destroyToken(userId, loginToken) {
    this.users.update(userId, {
      $pull: {
        "services.resume.loginTokens": {
          $or: [{
            hashedToken: loginToken
          }, {
            token: loginToken
          }]
        }
      }
    });
  }
  _initServerMethods() {
    // The methods created in this function need to be created here so that
    // this variable is available in their scope.
    const accounts = this;

    // This object will be populated with methods and then passed to
    // accounts._server.methods further below.
    const methods = {};

    // @returns {Object|null}
    //   If successful, returns {token: reconnectToken, id: userId}
    //   If unsuccessful (for example, if the user closed the oauth login popup),
    //     throws an error describing the reason
    methods.login = function (options) {
      return Promise.asyncApply(() => {
        // Login handlers should really also check whatever field they look at in
        // options, but we don't enforce it.
        check(options, Object);
        const result = Promise.await(accounts._runLoginHandlers(this, options));
        //console.log({result});

        return Promise.await(accounts._attemptLogin(this, "login", arguments, result));
      });
    };
    methods.logout = function () {
      const token = accounts._getLoginToken(this.connection.id);
      accounts._setLoginToken(this.userId, this.connection, null);
      if (token && this.userId) {
        accounts.destroyToken(this.userId, token);
      }
      accounts._successfulLogout(this.connection, this.userId);
      this.setUserId(null);
    };

    // Generates a new login token with the same expiration as the
    // connection's current token and saves it to the database. Associates
    // the connection with this new token and returns it. Throws an error
    // if called on a connection that isn't logged in.
    //
    // @returns Object
    //   If successful, returns { token: <new token>, id: <user id>,
    //   tokenExpires: <expiration date> }.
    methods.getNewToken = function () {
      const user = accounts.users.findOne(this.userId, {
        fields: {
          "services.resume.loginTokens": 1
        }
      });
      if (!this.userId || !user) {
        throw new Meteor.Error("You are not logged in.");
      }
      // Be careful not to generate a new token that has a later
      // expiration than the curren token. Otherwise, a bad guy with a
      // stolen token could use this method to stop his stolen token from
      // ever expiring.
      const currentHashedToken = accounts._getLoginToken(this.connection.id);
      const currentStampedToken = user.services.resume.loginTokens.find(stampedToken => stampedToken.hashedToken === currentHashedToken);
      if (!currentStampedToken) {
        // safety belt: this should never happen
        throw new Meteor.Error("Invalid login token");
      }
      const newStampedToken = accounts._generateStampedLoginToken();
      newStampedToken.when = currentStampedToken.when;
      accounts._insertLoginToken(this.userId, newStampedToken);
      return accounts._loginUser(this, this.userId, newStampedToken);
    };

    // Removes all tokens except the token associated with the current
    // connection. Throws an error if the connection is not logged
    // in. Returns nothing on success.
    methods.removeOtherTokens = function () {
      if (!this.userId) {
        throw new Meteor.Error("You are not logged in.");
      }
      const currentToken = accounts._getLoginToken(this.connection.id);
      accounts.users.update(this.userId, {
        $pull: {
          "services.resume.loginTokens": {
            hashedToken: {
              $ne: currentToken
            }
          }
        }
      });
    };

    // Allow a one-time configuration for a login service. Modifications
    // to this collection are also allowed in insecure mode.
    methods.configureLoginService = options => {
      check(options, Match.ObjectIncluding({
        service: String
      }));
      // Don't let random users configure a service we haven't added yet (so
      // that when we do later add it, it's set up with their configuration
      // instead of ours).
      // XXX if service configuration is oauth-specific then this code should
      //     be in accounts-oauth; if it's not then the registry should be
      //     in this package
      if (!(accounts.oauth && accounts.oauth.serviceNames().includes(options.service))) {
        throw new Meteor.Error(403, "Service unknown");
      }
      if (Package['service-configuration']) {
        const {
          ServiceConfiguration
        } = Package['service-configuration'];
        if (ServiceConfiguration.configurations.findOne({
          service: options.service
        })) throw new Meteor.Error(403, "Service ".concat(options.service, " already configured"));
        if (Package["oauth-encryption"]) {
          const {
            OAuthEncryption
          } = Package["oauth-encryption"];
          if (hasOwn.call(options, 'secret') && OAuthEncryption.keyIsLoaded()) options.secret = OAuthEncryption.seal(options.secret);
        }
        ServiceConfiguration.configurations.insert(options);
      }
    };
    accounts._server.methods(methods);
  }
  _initAccountDataHooks() {
    this._server.onConnection(connection => {
      this._accountData[connection.id] = {
        connection: connection
      };
      connection.onClose(() => {
        this._removeTokenFromConnection(connection.id);
        delete this._accountData[connection.id];
      });
    });
  }
  _initServerPublications() {
    // Bring into lexical scope for publish callbacks that need `this`
    const {
      users,
      _autopublishFields,
      _defaultPublishFields
    } = this;

    // Publish all login service configuration fields other than secret.
    this._server.publish("meteor.loginServiceConfiguration", function () {
      if (Package['service-configuration']) {
        const {
          ServiceConfiguration
        } = Package['service-configuration'];
        return ServiceConfiguration.configurations.find({}, {
          fields: {
            secret: 0
          }
        });
      }
      this.ready();
    }, {
      is_auto: true
    }); // not technically autopublish, but stops the warning.

    // Use Meteor.startup to give other packages a chance to call
    // setDefaultPublishFields.
    Meteor.startup(() => {
      // Merge custom fields selector and default publish fields so that the client
      // gets all the necessary fields to run properly
      const customFields = this._addDefaultFieldSelector().fields || {};
      const keys = Object.keys(customFields);
      // If the custom fields are negative, then ignore them and only send the necessary fields
      const fields = keys.length > 0 && customFields[keys[0]] ? _objectSpread(_objectSpread({}, this._addDefaultFieldSelector().fields), _defaultPublishFields.projection) : _defaultPublishFields.projection;
      // Publish the current user's record to the client.
      this._server.publish(null, function () {
        if (this.userId) {
          return users.find({
            _id: this.userId
          }, {
            fields
          });
        } else {
          return null;
        }
      }, /*suppress autopublish warning*/{
        is_auto: true
      });
    });

    // Use Meteor.startup to give other packages a chance to call
    // addAutopublishFields.
    Package.autopublish && Meteor.startup(() => {
      // ['profile', 'username'] -> {profile: 1, username: 1}
      const toFieldSelector = fields => fields.reduce((prev, field) => _objectSpread(_objectSpread({}, prev), {}, {
        [field]: 1
      }), {});
      this._server.publish(null, function () {
        if (this.userId) {
          return users.find({
            _id: this.userId
          }, {
            fields: toFieldSelector(_autopublishFields.loggedInUser)
          });
        } else {
          return null;
        }
      }, /*suppress autopublish warning*/{
        is_auto: true
      });

      // XXX this publish is neither dedup-able nor is it optimized by our special
      // treatment of queries on a specific _id. Therefore this will have O(n^2)
      // run-time performance every time a user document is changed (eg someone
      // logging in). If this is a problem, we can instead write a manual publish
      // function which filters out fields based on 'this.userId'.
      this._server.publish(null, function () {
        const selector = this.userId ? {
          _id: {
            $ne: this.userId
          }
        } : {};
        return users.find(selector, {
          fields: toFieldSelector(_autopublishFields.otherUsers)
        });
      }, /*suppress autopublish warning*/{
        is_auto: true
      });
    });
  }
  // Add to the list of fields or subfields to be automatically
  // published if autopublish is on. Must be called from top-level
  // code (ie, before Meteor.startup hooks run).
  //
  // @param opts {Object} with:
  //   - forLoggedInUser {Array} Array of fields published to the logged-in user
  //   - forOtherUsers {Array} Array of fields published to users that aren't logged in
  addAutopublishFields(opts) {
    this._autopublishFields.loggedInUser.push.apply(this._autopublishFields.loggedInUser, opts.forLoggedInUser);
    this._autopublishFields.otherUsers.push.apply(this._autopublishFields.otherUsers, opts.forOtherUsers);
  }
  // Replaces the fields to be automatically
  // published when the user logs in
  //
  // @param {MongoFieldSpecifier} fields Dictionary of fields to return or exclude.
  setDefaultPublishFields(fields) {
    this._defaultPublishFields.projection = fields;
  }
  ///
  /// ACCOUNT DATA
  ///

  // HACK: This is used by 'meteor-accounts' to get the loginToken for a
  // connection. Maybe there should be a public way to do that.
  _getAccountData(connectionId, field) {
    const data = this._accountData[connectionId];
    return data && data[field];
  }
  _setAccountData(connectionId, field, value) {
    const data = this._accountData[connectionId];

    // safety belt. shouldn't happen. accountData is set in onConnection,
    // we don't have a connectionId until it is set.
    if (!data) return;
    if (value === undefined) delete data[field];else data[field] = value;
  }
  ///
  /// RECONNECT TOKENS
  ///
  /// support reconnecting using a meteor login token

  _hashLoginToken(loginToken) {
    const hash = crypto.createHash('sha256');
    hash.update(loginToken);
    return hash.digest('base64');
  }
  // {token, when} => {hashedToken, when}
  _hashStampedToken(stampedToken) {
    const {
        token
      } = stampedToken,
      hashedStampedToken = _objectWithoutProperties(stampedToken, _excluded);
    return _objectSpread(_objectSpread({}, hashedStampedToken), {}, {
      hashedToken: this._hashLoginToken(token)
    });
  }
  // Using $addToSet avoids getting an index error if another client
  // logging in simultaneously has already inserted the new hashed
  // token.
  _insertHashedLoginToken(userId, hashedToken, query) {
    query = query ? _objectSpread({}, query) : {};
    query._id = userId;
    this.users.update(query, {
      $addToSet: {
        "services.resume.loginTokens": hashedToken
      }
    });
  }
  // Exported for tests.
  _insertLoginToken(userId, stampedToken, query) {
    this._insertHashedLoginToken(userId, this._hashStampedToken(stampedToken), query);
  }
  _clearAllLoginTokens(userId) {
    this.users.update(userId, {
      $set: {
        'services.resume.loginTokens': []
      }
    });
  }
  // test hook
  _getUserObserve(connectionId) {
    return this._userObservesForConnections[connectionId];
  }
  // Clean up this connection's association with the token: that is, stop
  // the observe that we started when we associated the connection with
  // this token.
  _removeTokenFromConnection(connectionId) {
    if (hasOwn.call(this._userObservesForConnections, connectionId)) {
      const observe = this._userObservesForConnections[connectionId];
      if (typeof observe === 'number') {
        // We're in the process of setting up an observe for this connection. We
        // can't clean up that observe yet, but if we delete the placeholder for
        // this connection, then the observe will get cleaned up as soon as it has
        // been set up.
        delete this._userObservesForConnections[connectionId];
      } else {
        delete this._userObservesForConnections[connectionId];
        observe.stop();
      }
    }
  }
  _getLoginToken(connectionId) {
    return this._getAccountData(connectionId, 'loginToken');
  }
  // newToken is a hashed token.
  _setLoginToken(userId, connection, newToken) {
    this._removeTokenFromConnection(connection.id);
    this._setAccountData(connection.id, 'loginToken', newToken);
    if (newToken) {
      // Set up an observe for this token. If the token goes away, we need
      // to close the connection.  We defer the observe because there's
      // no need for it to be on the critical path for login; we just need
      // to ensure that the connection will get closed at some point if
      // the token gets deleted.
      //
      // Initially, we set the observe for this connection to a number; this
      // signifies to other code (which might run while we yield) that we are in
      // the process of setting up an observe for this connection. Once the
      // observe is ready to go, we replace the number with the real observe
      // handle (unless the placeholder has been deleted or replaced by a
      // different placehold number, signifying that the connection was closed
      // already -- in this case we just clean up the observe that we started).
      const myObserveNumber = ++this._nextUserObserveNumber;
      this._userObservesForConnections[connection.id] = myObserveNumber;
      Meteor.defer(() => {
        // If something else happened on this connection in the meantime (it got
        // closed, or another call to _setLoginToken happened), just do
        // nothing. We don't need to start an observe for an old connection or old
        // token.
        if (this._userObservesForConnections[connection.id] !== myObserveNumber) {
          return;
        }
        let foundMatchingUser;
        // Because we upgrade unhashed login tokens to hashed tokens at
        // login time, sessions will only be logged in with a hashed
        // token. Thus we only need to observe hashed tokens here.
        const observe = this.users.find({
          _id: userId,
          'services.resume.loginTokens.hashedToken': newToken
        }, {
          fields: {
            _id: 1
          }
        }).observeChanges({
          added: () => {
            foundMatchingUser = true;
          },
          removed: connection.close
          // The onClose callback for the connection takes care of
          // cleaning up the observe handle and any other state we have
          // lying around.
        }, {
          nonMutatingCallbacks: true
        });

        // If the user ran another login or logout command we were waiting for the
        // defer or added to fire (ie, another call to _setLoginToken occurred),
        // then we let the later one win (start an observe, etc) and just stop our
        // observe now.
        //
        // Similarly, if the connection was already closed, then the onClose
        // callback would have called _removeTokenFromConnection and there won't
        // be an entry in _userObservesForConnections. We can stop the observe.
        if (this._userObservesForConnections[connection.id] !== myObserveNumber) {
          observe.stop();
          return;
        }
        this._userObservesForConnections[connection.id] = observe;
        if (!foundMatchingUser) {
          // We've set up an observe on the user associated with `newToken`,
          // so if the new token is removed from the database, we'll close
          // the connection. But the token might have already been deleted
          // before we set up the observe, which wouldn't have closed the
          // connection because the observe wasn't running yet.
          connection.close();
        }
      });
    }
  }
  // (Also used by Meteor Accounts server and tests).
  //
  _generateStampedLoginToken() {
    return {
      token: Random.secret(),
      when: new Date()
    };
  }
  ///
  /// TOKEN EXPIRATION
  ///

  // Deletes expired password reset tokens from the database.
  //
  // Exported for tests. Also, the arguments are only used by
  // tests. oldestValidDate is simulate expiring tokens without waiting
  // for them to actually expire. userId is used by tests to only expire
  // tokens for the test user.
  _expirePasswordResetTokens(oldestValidDate, userId) {
    const tokenLifetimeMs = this._getPasswordResetTokenLifetimeMs();

    // when calling from a test with extra arguments, you must specify both!
    if (oldestValidDate && !userId || !oldestValidDate && userId) {
      throw new Error("Bad test. Must specify both oldestValidDate and userId.");
    }
    oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);
    const tokenFilter = {
      $or: [{
        "services.password.reset.reason": "reset"
      }, {
        "services.password.reset.reason": {
          $exists: false
        }
      }]
    };
    expirePasswordToken(this, oldestValidDate, tokenFilter, userId);
  }

  // Deletes expired password enroll tokens from the database.
  //
  // Exported for tests. Also, the arguments are only used by
  // tests. oldestValidDate is simulate expiring tokens without waiting
  // for them to actually expire. userId is used by tests to only expire
  // tokens for the test user.
  _expirePasswordEnrollTokens(oldestValidDate, userId) {
    const tokenLifetimeMs = this._getPasswordEnrollTokenLifetimeMs();

    // when calling from a test with extra arguments, you must specify both!
    if (oldestValidDate && !userId || !oldestValidDate && userId) {
      throw new Error("Bad test. Must specify both oldestValidDate and userId.");
    }
    oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);
    const tokenFilter = {
      "services.password.enroll.reason": "enroll"
    };
    expirePasswordToken(this, oldestValidDate, tokenFilter, userId);
  }

  // Deletes expired tokens from the database and closes all open connections
  // associated with these tokens.
  //
  // Exported for tests. Also, the arguments are only used by
  // tests. oldestValidDate is simulate expiring tokens without waiting
  // for them to actually expire. userId is used by tests to only expire
  // tokens for the test user.
  _expireTokens(oldestValidDate, userId) {
    const tokenLifetimeMs = this._getTokenLifetimeMs();

    // when calling from a test with extra arguments, you must specify both!
    if (oldestValidDate && !userId || !oldestValidDate && userId) {
      throw new Error("Bad test. Must specify both oldestValidDate and userId.");
    }
    oldestValidDate = oldestValidDate || new Date(new Date() - tokenLifetimeMs);
    const userFilter = userId ? {
      _id: userId
    } : {};

    // Backwards compatible with older versions of meteor that stored login token
    // timestamps as numbers.
    this.users.update(_objectSpread(_objectSpread({}, userFilter), {}, {
      $or: [{
        "services.resume.loginTokens.when": {
          $lt: oldestValidDate
        }
      }, {
        "services.resume.loginTokens.when": {
          $lt: +oldestValidDate
        }
      }]
    }), {
      $pull: {
        "services.resume.loginTokens": {
          $or: [{
            when: {
              $lt: oldestValidDate
            }
          }, {
            when: {
              $lt: +oldestValidDate
            }
          }]
        }
      }
    }, {
      multi: true
    });
    // The observe on Meteor.users will take care of closing connections for
    // expired tokens.
  }
  // @override from accounts_common.js
  config(options) {
    // Call the overridden implementation of the method.
    const superResult = AccountsCommon.prototype.config.apply(this, arguments);

    // If the user set loginExpirationInDays to null, then we need to clear the
    // timer that periodically expires tokens.
    if (hasOwn.call(this._options, 'loginExpirationInDays') && this._options.loginExpirationInDays === null && this.expireTokenInterval) {
      Meteor.clearInterval(this.expireTokenInterval);
      this.expireTokenInterval = null;
    }
    return superResult;
  }
  // Called by accounts-password
  insertUserDoc(options, user) {
    // - clone user document, to protect from modification
    // - add createdAt timestamp
    // - prepare an _id, so that you can modify other collections (eg
    // create a first task for every new user)
    //
    // XXX If the onCreateUser or validateNewUser hooks fail, we might
    // end up having modified some other collection
    // inappropriately. The solution is probably to have onCreateUser
    // accept two callbacks - one that gets called before inserting
    // the user document (in which you can modify its contents), and
    // one that gets called after (in which you should change other
    // collections)
    user = _objectSpread({
      createdAt: new Date(),
      _id: Random.id()
    }, user);
    if (user.services) {
      Object.keys(user.services).forEach(service => pinEncryptedFieldsToUser(user.services[service], user._id));
    }
    let fullUser;
    if (this._onCreateUserHook) {
      fullUser = this._onCreateUserHook(options, user);

      // This is *not* part of the API. We need this because we can't isolate
      // the global server environment between tests, meaning we can't test
      // both having a create user hook set and not having one set.
      if (fullUser === 'TEST DEFAULT HOOK') fullUser = defaultCreateUserHook(options, user);
    } else {
      fullUser = defaultCreateUserHook(options, user);
    }
    this._validateNewUserHooks.forEach(hook => {
      if (!hook(fullUser)) throw new Meteor.Error(403, "User validation failed");
    });
    let userId;
    try {
      userId = this.users.insert(fullUser);
    } catch (e) {
      // XXX string parsing sucks, maybe
      // https://jira.mongodb.org/browse/SERVER-3069 will get fixed one day
      // https://jira.mongodb.org/browse/SERVER-4637
      if (!e.errmsg) throw e;
      if (e.errmsg.includes('emails.address')) throw new Meteor.Error(403, "Email already exists.");
      if (e.errmsg.includes('username')) throw new Meteor.Error(403, "Username already exists.");
      throw e;
    }
    return userId;
  }
  // Helper function: returns false if email does not match company domain from
  // the configuration.
  _testEmailDomain(email) {
    const domain = this._options.restrictCreationByEmailDomain;
    return !domain || typeof domain === 'function' && domain(email) || typeof domain === 'string' && new RegExp("@".concat(Meteor._escapeRegExp(domain), "$"), 'i').test(email);
  }
  ///
  /// CLEAN UP FOR `logoutOtherClients`
  ///

  _deleteSavedTokensForUser(userId, tokensToDelete) {
    if (tokensToDelete) {
      this.users.update(userId, {
        $unset: {
          "services.resume.haveLoginTokensToDelete": 1,
          "services.resume.loginTokensToDelete": 1
        },
        $pullAll: {
          "services.resume.loginTokens": tokensToDelete
        }
      });
    }
  }
  _deleteSavedTokensForAllUsersOnStartup() {
    // If we find users who have saved tokens to delete on startup, delete
    // them now. It's possible that the server could have crashed and come
    // back up before new tokens are found in localStorage, but this
    // shouldn't happen very often. We shouldn't put a delay here because
    // that would give a lot of power to an attacker with a stolen login
    // token and the ability to crash the server.
    Meteor.startup(() => {
      this.users.find({
        "services.resume.haveLoginTokensToDelete": true
      }, {
        fields: {
          "services.resume.loginTokensToDelete": 1
        }
      }).forEach(user => {
        this._deleteSavedTokensForUser(user._id, user.services.resume.loginTokensToDelete);
      });
    });
  }
  ///
  /// MANAGING USER OBJECTS
  ///

  // Updates or creates a user after we authenticate with a 3rd party.
  //
  // @param serviceName {String} Service name (eg, twitter).
  // @param serviceData {Object} Data to store in the user's record
  //        under services[serviceName]. Must include an "id" field
  //        which is a unique identifier for the user in the service.
  // @param options {Object, optional} Other options to pass to insertUserDoc
  //        (eg, profile)
  // @returns {Object} Object with token and id keys, like the result
  //        of the "login" method.
  //
  updateOrCreateUserFromExternalService(serviceName, serviceData, options) {
    options = _objectSpread({}, options);
    if (serviceName === "password" || serviceName === "resume") {
      throw new Error("Can't use updateOrCreateUserFromExternalService with internal service " + serviceName);
    }
    if (!hasOwn.call(serviceData, 'id')) {
      throw new Error("Service data for service ".concat(serviceName, " must include id"));
    }

    // Look for a user with the appropriate service user id.
    const selector = {};
    const serviceIdKey = "services.".concat(serviceName, ".id");

    // XXX Temporary special case for Twitter. (Issue #629)
    //   The serviceData.id will be a string representation of an integer.
    //   We want it to match either a stored string or int representation.
    //   This is to cater to earlier versions of Meteor storing twitter
    //   user IDs in number form, and recent versions storing them as strings.
    //   This can be removed once migration technology is in place, and twitter
    //   users stored with integer IDs have been migrated to string IDs.
    if (serviceName === "twitter" && !isNaN(serviceData.id)) {
      selector["$or"] = [{}, {}];
      selector["$or"][0][serviceIdKey] = serviceData.id;
      selector["$or"][1][serviceIdKey] = parseInt(serviceData.id, 10);
    } else {
      selector[serviceIdKey] = serviceData.id;
    }
    let user = this.users.findOne(selector, {
      fields: this._options.defaultFieldSelector
    });

    // Check to see if the developer has a custom way to find the user outside
    // of the general selectors above.
    if (!user && this._additionalFindUserOnExternalLogin) {
      user = this._additionalFindUserOnExternalLogin({
        serviceName,
        serviceData,
        options
      });
    }

    // Before continuing, run user hook to see if we should continue
    if (this._beforeExternalLoginHook && !this._beforeExternalLoginHook(serviceName, serviceData, user)) {
      throw new Meteor.Error(403, "Login forbidden");
    }

    // When creating a new user we pass through all options. When updating an
    // existing user, by default we only process/pass through the serviceData
    // (eg, so that we keep an unexpired access token and don't cache old email
    // addresses in serviceData.email). The onExternalLogin hook can be used when
    // creating or updating a user, to modify or pass through more options as
    // needed.
    let opts = user ? {} : options;
    if (this._onExternalLoginHook) {
      opts = this._onExternalLoginHook(options, user);
    }
    if (user) {
      pinEncryptedFieldsToUser(serviceData, user._id);
      let setAttrs = {};
      Object.keys(serviceData).forEach(key => setAttrs["services.".concat(serviceName, ".").concat(key)] = serviceData[key]);

      // XXX Maybe we should re-use the selector above and notice if the update
      //     touches nothing?
      setAttrs = _objectSpread(_objectSpread({}, setAttrs), opts);
      this.users.update(user._id, {
        $set: setAttrs
      });
      return {
        type: serviceName,
        userId: user._id
      };
    } else {
      // Create a new user with the service data.
      user = {
        services: {}
      };
      user.services[serviceName] = serviceData;
      return {
        type: serviceName,
        userId: this.insertUserDoc(opts, user)
      };
    }
  }
  /**
   * @summary Removes default rate limiting rule
   * @locus Server
   * @importFromPackage accounts-base
   */
  removeDefaultRateLimit() {
    const resp = DDPRateLimiter.removeRule(this.defaultRateLimiterRuleId);
    this.defaultRateLimiterRuleId = null;
    return resp;
  }
  /**
   * @summary Add a default rule of limiting logins, creating new users and password reset
   * to 5 times every 10 seconds per connection.
   * @locus Server
   * @importFromPackage accounts-base
   */
  addDefaultRateLimit() {
    if (!this.defaultRateLimiterRuleId) {
      this.defaultRateLimiterRuleId = DDPRateLimiter.addRule({
        userId: null,
        clientAddress: null,
        type: 'method',
        name: name => ['login', 'createUser', 'resetPassword', 'forgotPassword'].includes(name),
        connectionId: connectionId => true
      }, 5, 10000);
    }
  }
  /**
   * @summary Creates options for email sending for reset password and enroll account emails.
   * You can use this function when customizing a reset password or enroll account email sending.
   * @locus Server
   * @param {Object} email Which address of the user's to send the email to.
   * @param {Object} user The user object to generate options for.
   * @param {String} url URL to which user is directed to confirm the email.
   * @param {String} reason `resetPassword` or `enrollAccount`.
   * @returns {Object} Options which can be passed to `Email.send`.
   * @importFromPackage accounts-base
   */
  generateOptionsForEmail(email, user, url, reason) {
    let extra = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const options = {
      to: email,
      from: this.emailTemplates[reason].from ? this.emailTemplates[reason].from(user) : this.emailTemplates.from,
      subject: this.emailTemplates[reason].subject(user, url, extra)
    };
    if (typeof this.emailTemplates[reason].text === 'function') {
      options.text = this.emailTemplates[reason].text(user, url, extra);
    }
    if (typeof this.emailTemplates[reason].html === 'function') {
      options.html = this.emailTemplates[reason].html(user, url, extra);
    }
    if (typeof this.emailTemplates.headers === 'object') {
      options.headers = this.emailTemplates.headers;
    }
    return options;
  }
  _checkForCaseInsensitiveDuplicates(fieldName, displayName, fieldValue, ownUserId) {
    // Some tests need the ability to add users with the same case insensitive
    // value, hence the _skipCaseInsensitiveChecksForTest check
    const skipCheck = Object.prototype.hasOwnProperty.call(this._skipCaseInsensitiveChecksForTest, fieldValue);
    if (fieldValue && !skipCheck) {
      const matchedUsers = Meteor.users.find(this._selectorForFastCaseInsensitiveLookup(fieldName, fieldValue), {
        fields: {
          _id: 1
        },
        // we only need a maximum of 2 users for the logic below to work
        limit: 2
      }).fetch();
      if (matchedUsers.length > 0 && (
      // If we don't have a userId yet, any match we find is a duplicate
      !ownUserId ||
      // Otherwise, check to see if there are multiple matches or a match
      // that is not us
      matchedUsers.length > 1 || matchedUsers[0]._id !== ownUserId)) {
        this._handleError("".concat(displayName, " already exists."));
      }
    }
  }
  _createUserCheckingDuplicates(_ref) {
    let {
      user,
      email,
      username,
      options
    } = _ref;
    const newUser = _objectSpread(_objectSpread(_objectSpread({}, user), username ? {
      username
    } : {}), email ? {
      emails: [{
        address: email,
        verified: false
      }]
    } : {});

    // Perform a case insensitive check before insert
    this._checkForCaseInsensitiveDuplicates('username', 'Username', username);
    this._checkForCaseInsensitiveDuplicates('emails.address', 'Email', email);
    const userId = this.insertUserDoc(options, newUser);
    // Perform another check after insert, in case a matching user has been
    // inserted in the meantime
    try {
      this._checkForCaseInsensitiveDuplicates('username', 'Username', username, userId);
      this._checkForCaseInsensitiveDuplicates('emails.address', 'Email', email, userId);
    } catch (ex) {
      // Remove inserted user if the check fails
      Meteor.users.remove(userId);
      throw ex;
    }
    return userId;
  }
}
// Give each login hook callback a fresh cloned copy of the attempt
// object, but don't clone the connection.
//
const cloneAttemptWithConnection = (connection, attempt) => {
  const clonedAttempt = EJSON.clone(attempt);
  clonedAttempt.connection = connection;
  return clonedAttempt;
};
const tryLoginMethod = (type, fn) => Promise.asyncApply(() => {
  let result;
  try {
    result = Promise.await(fn());
  } catch (e) {
    result = {
      error: e
    };
  }
  if (result && !result.type && type) result.type = type;
  return result;
});
const setupDefaultLoginHandlers = accounts => {
  accounts.registerLoginHandler("resume", function (options) {
    return defaultResumeLoginHandler.call(this, accounts, options);
  });
};

// Login handler for resume tokens.
const defaultResumeLoginHandler = (accounts, options) => {
  if (!options.resume) return undefined;
  check(options.resume, String);
  const hashedToken = accounts._hashLoginToken(options.resume);

  // First look for just the new-style hashed login token, to avoid
  // sending the unhashed token to the database in a query if we don't
  // need to.
  let user = accounts.users.findOne({
    "services.resume.loginTokens.hashedToken": hashedToken
  }, {
    fields: {
      "services.resume.loginTokens.$": 1
    }
  });
  if (!user) {
    // If we didn't find the hashed login token, try also looking for
    // the old-style unhashed token.  But we need to look for either
    // the old-style token OR the new-style token, because another
    // client connection logging in simultaneously might have already
    // converted the token.
    user = accounts.users.findOne({
      $or: [{
        "services.resume.loginTokens.hashedToken": hashedToken
      }, {
        "services.resume.loginTokens.token": options.resume
      }]
    },
    // Note: Cannot use ...loginTokens.$ positional operator with $or query.
    {
      fields: {
        "services.resume.loginTokens": 1
      }
    });
  }
  if (!user) return {
    error: new Meteor.Error(403, "You've been logged out by the server. Please log in again.")
  };

  // Find the token, which will either be an object with fields
  // {hashedToken, when} for a hashed token or {token, when} for an
  // unhashed token.
  let oldUnhashedStyleToken;
  let token = user.services.resume.loginTokens.find(token => token.hashedToken === hashedToken);
  if (token) {
    oldUnhashedStyleToken = false;
  } else {
    token = user.services.resume.loginTokens.find(token => token.token === options.resume);
    oldUnhashedStyleToken = true;
  }
  const tokenExpires = accounts._tokenExpiration(token.when);
  if (new Date() >= tokenExpires) return {
    userId: user._id,
    error: new Meteor.Error(403, "Your session has expired. Please log in again.")
  };

  // Update to a hashed token when an unhashed token is encountered.
  if (oldUnhashedStyleToken) {
    // Only add the new hashed token if the old unhashed token still
    // exists (this avoids resurrecting the token if it was deleted
    // after we read it).  Using $addToSet avoids getting an index
    // error if another client logging in simultaneously has already
    // inserted the new hashed token.
    accounts.users.update({
      _id: user._id,
      "services.resume.loginTokens.token": options.resume
    }, {
      $addToSet: {
        "services.resume.loginTokens": {
          "hashedToken": hashedToken,
          "when": token.when
        }
      }
    });

    // Remove the old token *after* adding the new, since otherwise
    // another client trying to login between our removing the old and
    // adding the new wouldn't find a token to login with.
    accounts.users.update(user._id, {
      $pull: {
        "services.resume.loginTokens": {
          "token": options.resume
        }
      }
    });
  }
  return {
    userId: user._id,
    stampedLoginToken: {
      token: options.resume,
      when: token.when
    }
  };
};
const expirePasswordToken = (accounts, oldestValidDate, tokenFilter, userId) => {
  // boolean value used to determine if this method was called from enroll account workflow
  let isEnroll = false;
  const userFilter = userId ? {
    _id: userId
  } : {};
  // check if this method was called from enroll account workflow
  if (tokenFilter['services.password.enroll.reason']) {
    isEnroll = true;
  }
  let resetRangeOr = {
    $or: [{
      "services.password.reset.when": {
        $lt: oldestValidDate
      }
    }, {
      "services.password.reset.when": {
        $lt: +oldestValidDate
      }
    }]
  };
  if (isEnroll) {
    resetRangeOr = {
      $or: [{
        "services.password.enroll.when": {
          $lt: oldestValidDate
        }
      }, {
        "services.password.enroll.when": {
          $lt: +oldestValidDate
        }
      }]
    };
  }
  const expireFilter = {
    $and: [tokenFilter, resetRangeOr]
  };
  if (isEnroll) {
    accounts.users.update(_objectSpread(_objectSpread({}, userFilter), expireFilter), {
      $unset: {
        "services.password.enroll": ""
      }
    }, {
      multi: true
    });
  } else {
    accounts.users.update(_objectSpread(_objectSpread({}, userFilter), expireFilter), {
      $unset: {
        "services.password.reset": ""
      }
    }, {
      multi: true
    });
  }
};
const setExpireTokensInterval = accounts => {
  accounts.expireTokenInterval = Meteor.setInterval(() => {
    accounts._expireTokens();
    accounts._expirePasswordResetTokens();
    accounts._expirePasswordEnrollTokens();
  }, EXPIRE_TOKENS_INTERVAL_MS);
};
const OAuthEncryption = (_Package$oauthEncryp = Package["oauth-encryption"]) === null || _Package$oauthEncryp === void 0 ? void 0 : _Package$oauthEncryp.OAuthEncryption;

// OAuth service data is temporarily stored in the pending credentials
// collection during the oauth authentication process.  Sensitive data
// such as access tokens are encrypted without the user id because
// we don't know the user id yet.  We re-encrypt these fields with the
// user id included when storing the service data permanently in
// the users collection.
//
const pinEncryptedFieldsToUser = (serviceData, userId) => {
  Object.keys(serviceData).forEach(key => {
    let value = serviceData[key];
    if (OAuthEncryption !== null && OAuthEncryption !== void 0 && OAuthEncryption.isSealed(value)) value = OAuthEncryption.seal(OAuthEncryption.open(value), userId);
    serviceData[key] = value;
  });
};

// XXX see comment on Accounts.createUser in passwords_server about adding a
// second "server options" argument.
const defaultCreateUserHook = (options, user) => {
  if (options.profile) user.profile = options.profile;
  return user;
};

// Validate new user's email or Google/Facebook/GitHub account's email
function defaultValidateNewUserHook(user) {
  const domain = this._options.restrictCreationByEmailDomain;
  if (!domain) {
    return true;
  }
  let emailIsGood = false;
  if (user.emails && user.emails.length > 0) {
    emailIsGood = user.emails.reduce((prev, email) => prev || this._testEmailDomain(email.address), false);
  } else if (user.services && Object.values(user.services).length > 0) {
    // Find any email of any service and check it
    emailIsGood = Object.values(user.services).reduce((prev, service) => service.email && this._testEmailDomain(service.email), false);
  }
  if (emailIsGood) {
    return true;
  }
  if (typeof domain === 'string') {
    throw new Meteor.Error(403, "@".concat(domain, " email required"));
  } else {
    throw new Meteor.Error(403, "Email doesn't match the criteria.");
  }
}
const setupUsersCollection = users => {
  ///
  /// RESTRICTING WRITES TO USER OBJECTS
  ///
  users.allow({
    // clients can modify the profile field of their own document, and
    // nothing else.
    update: (userId, user, fields, modifier) => {
      // make sure it is our record
      if (user._id !== userId) {
        return false;
      }

      // user can only modify the 'profile' field. sets to multiple
      // sub-keys (eg profile.foo and profile.bar) are merged into entry
      // in the fields list.
      if (fields.length !== 1 || fields[0] !== 'profile') {
        return false;
      }
      return true;
    },
    fetch: ['_id'] // we only look at _id.
  });

  /// DEFAULT INDEXES ON USERS
  users.createIndexAsync('username', {
    unique: true,
    sparse: true
  });
  users.createIndexAsync('emails.address', {
    unique: true,
    sparse: true
  });
  users.createIndexAsync('services.resume.loginTokens.hashedToken', {
    unique: true,
    sparse: true
  });
  users.createIndexAsync('services.resume.loginTokens.token', {
    unique: true,
    sparse: true
  });
  // For taking care of logoutOtherClients calls that crashed before the
  // tokens were deleted.
  users.createIndexAsync('services.resume.haveLoginTokensToDelete', {
    sparse: true
  });
  // For expiring login tokens
  users.createIndexAsync("services.resume.loginTokens.when", {
    sparse: true
  });
  // For expiring password tokens
  users.createIndexAsync('services.password.reset.when', {
    sparse: true
  });
  users.createIndexAsync('services.password.enroll.when', {
    sparse: true
  });
};

// Generates permutations of all case variations of a given string.
const generateCasePermutationsForString = string => {
  let permutations = [''];
  for (let i = 0; i < string.length; i++) {
    const ch = string.charAt(i);
    permutations = [].concat(...permutations.map(prefix => {
      const lowerCaseChar = ch.toLowerCase();
      const upperCaseChar = ch.toUpperCase();
      // Don't add unnecessary permutations when ch is not a letter
      if (lowerCaseChar === upperCaseChar) {
        return [prefix + ch];
      } else {
        return [prefix + lowerCaseChar, prefix + upperCaseChar];
      }
    }));
  }
  return permutations;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/accounts-base/server_main.js");

/* Exports */
Package._define("accounts-base", exports, {
  Accounts: Accounts
});

})();

//# sourceURL=meteor://💻app/packages/accounts-base.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYWNjb3VudHMtYmFzZS9zZXJ2ZXJfbWFpbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYWNjb3VudHMtYmFzZS9hY2NvdW50c19jb21tb24uanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2FjY291bnRzLWJhc2UvYWNjb3VudHNfc2VydmVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZTEiLCJleHBvcnQiLCJBY2NvdW50c1NlcnZlciIsImxpbmsiLCJ2IiwiQWNjb3VudHMiLCJNZXRlb3IiLCJzZXJ2ZXIiLCJfTWV0ZW9yJHNldHRpbmdzJHBhY2siLCJzZXR0aW5ncyIsInBhY2thZ2VzIiwiYWNjb3VudHMiLCJ1c2VycyIsImNhbGwiLCJtb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiZGVmYXVsdCIsIkFjY291bnRzQ29tbW9uIiwiRVhQSVJFX1RPS0VOU19JTlRFUlZBTF9NUyIsIlZBTElEX0NPTkZJR19LRVlTIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJjb25uZWN0aW9uIiwidW5kZWZpbmVkIiwiX2luaXRDb25uZWN0aW9uIiwiX2luaXRpYWxpemVDb2xsZWN0aW9uIiwiX29uTG9naW5Ib29rIiwiSG9vayIsImJpbmRFbnZpcm9ubWVudCIsImRlYnVnUHJpbnRFeGNlcHRpb25zIiwiX29uTG9naW5GYWlsdXJlSG9vayIsIl9vbkxvZ291dEhvb2siLCJERUZBVUxUX0xPR0lOX0VYUElSQVRJT05fREFZUyIsIkxPR0lOX1VORVhQSVJJTkdfVE9LRU5fREFZUyIsImxjZU5hbWUiLCJMb2dpbkNhbmNlbGxlZEVycm9yIiwibWFrZUVycm9yVHlwZSIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsInByb3RvdHlwZSIsIm5hbWUiLCJudW1lcmljRXJyb3IiLCJjb2xsZWN0aW9uIiwiTW9uZ28iLCJDb2xsZWN0aW9uIiwiRXJyb3IiLCJjb2xsZWN0aW9uTmFtZSIsIl9wcmV2ZW50QXV0b3B1Ymxpc2giLCJ1c2VySWQiLCJfYWRkRGVmYXVsdEZpZWxkU2VsZWN0b3IiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJkZWZhdWx0RmllbGRTZWxlY3RvciIsImZpZWxkcyIsImtleXMiLCJPYmplY3QiLCJrZXlzMiIsInVzZXIiLCJmaW5kT25lIiwidXNlckFzeW5jIiwiUHJvbWlzZSIsImFzeW5jQXBwbHkiLCJmaW5kT25lQXN5bmMiLCJjb25maWciLCJpc1NlcnZlciIsIl9fbWV0ZW9yX3J1bnRpbWVfY29uZmlnX18iLCJhY2NvdW50c0NvbmZpZ0NhbGxlZCIsIl9kZWJ1ZyIsImhhc093blByb3BlcnR5IiwiaXNDbGllbnQiLCJQYWNrYWdlIiwiT0F1dGhFbmNyeXB0aW9uIiwibG9hZEtleSIsIm9hdXRoU2VjcmV0S2V5IiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwiY29uY2F0IiwiaXNUZXN0IiwiX25hbWUiLCJvbkxvZ2luIiwiZnVuYyIsInJldCIsInJlZ2lzdGVyIiwiX3N0YXJ0dXBDYWxsYmFjayIsImNhbGxiYWNrIiwib25Mb2dpbkZhaWx1cmUiLCJvbkxvZ291dCIsImRkcFVybCIsIkREUCIsImNvbm5lY3QiLCJBQ0NPVU5UU19DT05ORUNUSU9OX1VSTCIsIl9nZXRUb2tlbkxpZmV0aW1lTXMiLCJsb2dpbkV4cGlyYXRpb25JbkRheXMiLCJsb2dpbkV4cGlyYXRpb24iLCJfZ2V0UGFzc3dvcmRSZXNldFRva2VuTGlmZXRpbWVNcyIsInBhc3N3b3JkUmVzZXRUb2tlbkV4cGlyYXRpb24iLCJwYXNzd29yZFJlc2V0VG9rZW5FeHBpcmF0aW9uSW5EYXlzIiwiREVGQVVMVF9QQVNTV09SRF9SRVNFVF9UT0tFTl9FWFBJUkFUSU9OX0RBWVMiLCJfZ2V0UGFzc3dvcmRFbnJvbGxUb2tlbkxpZmV0aW1lTXMiLCJwYXNzd29yZEVucm9sbFRva2VuRXhwaXJhdGlvbiIsInBhc3N3b3JkRW5yb2xsVG9rZW5FeHBpcmF0aW9uSW5EYXlzIiwiREVGQVVMVF9QQVNTV09SRF9FTlJPTExfVE9LRU5fRVhQSVJBVElPTl9EQVlTIiwiX3Rva2VuRXhwaXJhdGlvbiIsIndoZW4iLCJEYXRlIiwiZ2V0VGltZSIsIl90b2tlbkV4cGlyZXNTb29uIiwibWluTGlmZXRpbWVNcyIsIm1pbkxpZmV0aW1lQ2FwTXMiLCJNSU5fVE9LRU5fTElGRVRJTUVfQ0FQX1NFQ1MiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJjcnlwdG8iLCJVUkwiLCJoYXNPd24iLCJOb25FbXB0eVN0cmluZyIsIk1hdGNoIiwiV2hlcmUiLCJ4IiwiY2hlY2siLCJTdHJpbmciLCJfdGhpcyIsInRoaXMiLCJvbkNyZWF0ZUxvZ2luVG9rZW4iLCJfb25DcmVhdGVMb2dpblRva2VuSG9vayIsIl9zZWxlY3RvckZvckZhc3RDYXNlSW5zZW5zaXRpdmVMb29rdXAiLCJmaWVsZE5hbWUiLCJzdHJpbmciLCJwcmVmaXgiLCJzdWJzdHJpbmciLCJNYXRoIiwibWluIiwib3JDbGF1c2UiLCJnZW5lcmF0ZUNhc2VQZXJtdXRhdGlvbnNGb3JTdHJpbmciLCJtYXAiLCJwcmVmaXhQZXJtdXRhdGlvbiIsInNlbGVjdG9yIiwiUmVnRXhwIiwiX2VzY2FwZVJlZ0V4cCIsImNhc2VJbnNlbnNpdGl2ZUNsYXVzZSIsIiRhbmQiLCIkb3IiLCJfZmluZFVzZXJCeVF1ZXJ5IiwicXVlcnkiLCJpZCIsImZpZWxkVmFsdWUiLCJ1c2VybmFtZSIsImVtYWlsIiwiY2FuZGlkYXRlVXNlcnMiLCJmaW5kIiwibGltaXQiLCJmZXRjaCIsIl9oYW5kbGVFcnJvciIsIm1zZyIsInRocm93RXJyb3IiLCJlcnJvckNvZGUiLCJlcnJvciIsImFtYmlndW91c0Vycm9yTWVzc2FnZXMiLCJfdXNlclF1ZXJ5VmFsaWRhdG9yIiwiT3B0aW9uYWwiLCJfc2VydmVyIiwiX2luaXRTZXJ2ZXJNZXRob2RzIiwiX2luaXRBY2NvdW50RGF0YUhvb2tzIiwiX2F1dG9wdWJsaXNoRmllbGRzIiwibG9nZ2VkSW5Vc2VyIiwib3RoZXJVc2VycyIsIl9kZWZhdWx0UHVibGlzaEZpZWxkcyIsInByb2plY3Rpb24iLCJwcm9maWxlIiwiZW1haWxzIiwiX2luaXRTZXJ2ZXJQdWJsaWNhdGlvbnMiLCJfYWNjb3VudERhdGEiLCJfdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnMiLCJfbmV4dFVzZXJPYnNlcnZlTnVtYmVyIiwiX2xvZ2luSGFuZGxlcnMiLCJzZXR1cFVzZXJzQ29sbGVjdGlvbiIsInNldHVwRGVmYXVsdExvZ2luSGFuZGxlcnMiLCJzZXRFeHBpcmVUb2tlbnNJbnRlcnZhbCIsIl92YWxpZGF0ZUxvZ2luSG9vayIsIl92YWxpZGF0ZU5ld1VzZXJIb29rcyIsImRlZmF1bHRWYWxpZGF0ZU5ld1VzZXJIb29rIiwiYmluZCIsIl9kZWxldGVTYXZlZFRva2Vuc0ZvckFsbFVzZXJzT25TdGFydHVwIiwiX3NraXBDYXNlSW5zZW5zaXRpdmVDaGVja3NGb3JUZXN0IiwidXJscyIsInJlc2V0UGFzc3dvcmQiLCJ0b2tlbiIsImV4dHJhUGFyYW1zIiwiYnVpbGRFbWFpbFVybCIsInZlcmlmeUVtYWlsIiwibG9naW5Ub2tlbiIsImVucm9sbEFjY291bnQiLCJhZGREZWZhdWx0UmF0ZUxpbWl0IiwicGF0aCIsInVybCIsImFic29sdXRlVXJsIiwicGFyYW1zIiwiZW50cmllcyIsInZhbHVlIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwidG9TdHJpbmciLCJjdXJyZW50SW52b2NhdGlvbiIsIl9DdXJyZW50TWV0aG9kSW52b2NhdGlvbiIsImdldCIsIl9DdXJyZW50UHVibGljYXRpb25JbnZvY2F0aW9uIiwidmFsaWRhdGVMb2dpbkF0dGVtcHQiLCJ2YWxpZGF0ZU5ld1VzZXIiLCJwdXNoIiwiYmVmb3JlRXh0ZXJuYWxMb2dpbiIsIl9iZWZvcmVFeHRlcm5hbExvZ2luSG9vayIsIm9uQ3JlYXRlVXNlciIsIl9vbkNyZWF0ZVVzZXJIb29rIiwid3JhcEZuIiwib25FeHRlcm5hbExvZ2luIiwiX29uRXh0ZXJuYWxMb2dpbkhvb2siLCJzZXRBZGRpdGlvbmFsRmluZFVzZXJPbkV4dGVybmFsTG9naW4iLCJfYWRkaXRpb25hbEZpbmRVc2VyT25FeHRlcm5hbExvZ2luIiwiX3ZhbGlkYXRlTG9naW4iLCJhdHRlbXB0IiwiY2xvbmVBdHRlbXB0V2l0aENvbm5lY3Rpb24iLCJlIiwiYWxsb3dlZCIsIl9zdWNjZXNzZnVsTG9naW4iLCJlYWNoIiwiX2ZhaWxlZExvZ2luIiwiX3N1Y2Nlc3NmdWxMb2dvdXQiLCJfbG9naW5Vc2VyIiwibWV0aG9kSW52b2NhdGlvbiIsInN0YW1wZWRMb2dpblRva2VuIiwiX2dlbmVyYXRlU3RhbXBlZExvZ2luVG9rZW4iLCJfaW5zZXJ0TG9naW5Ub2tlbiIsIl9ub1lpZWxkc0FsbG93ZWQiLCJfc2V0TG9naW5Ub2tlbiIsIl9oYXNoTG9naW5Ub2tlbiIsInNldFVzZXJJZCIsInRva2VuRXhwaXJlcyIsIl9hdHRlbXB0TG9naW4iLCJtZXRob2ROYW1lIiwibWV0aG9kQXJncyIsInJlc3VsdCIsInR5cGUiLCJtZXRob2RBcmd1bWVudHMiLCJBcnJheSIsImZyb20iLCJfbG9naW5NZXRob2QiLCJmbiIsImF3YWl0IiwidHJ5TG9naW5NZXRob2QiLCJfcmVwb3J0TG9naW5GYWlsdXJlIiwicmVnaXN0ZXJMb2dpbkhhbmRsZXIiLCJoYW5kbGVyIiwiX3J1bkxvZ2luSGFuZGxlcnMiLCJkZXN0cm95VG9rZW4iLCJ1cGRhdGUiLCIkcHVsbCIsImhhc2hlZFRva2VuIiwibWV0aG9kcyIsImxvZ2luIiwibG9nb3V0IiwiX2dldExvZ2luVG9rZW4iLCJnZXROZXdUb2tlbiIsImN1cnJlbnRIYXNoZWRUb2tlbiIsImN1cnJlbnRTdGFtcGVkVG9rZW4iLCJzZXJ2aWNlcyIsInJlc3VtZSIsImxvZ2luVG9rZW5zIiwic3RhbXBlZFRva2VuIiwibmV3U3RhbXBlZFRva2VuIiwicmVtb3ZlT3RoZXJUb2tlbnMiLCJjdXJyZW50VG9rZW4iLCIkbmUiLCJjb25maWd1cmVMb2dpblNlcnZpY2UiLCJPYmplY3RJbmNsdWRpbmciLCJzZXJ2aWNlIiwib2F1dGgiLCJzZXJ2aWNlTmFtZXMiLCJTZXJ2aWNlQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25zIiwia2V5SXNMb2FkZWQiLCJzZWNyZXQiLCJzZWFsIiwiaW5zZXJ0Iiwib25Db25uZWN0aW9uIiwib25DbG9zZSIsIl9yZW1vdmVUb2tlbkZyb21Db25uZWN0aW9uIiwicHVibGlzaCIsInJlYWR5IiwiaXNfYXV0byIsInN0YXJ0dXAiLCJjdXN0b21GaWVsZHMiLCJfaWQiLCJhdXRvcHVibGlzaCIsInRvRmllbGRTZWxlY3RvciIsInJlZHVjZSIsInByZXYiLCJmaWVsZCIsImFkZEF1dG9wdWJsaXNoRmllbGRzIiwib3B0cyIsImFwcGx5IiwiZm9yTG9nZ2VkSW5Vc2VyIiwiZm9yT3RoZXJVc2VycyIsInNldERlZmF1bHRQdWJsaXNoRmllbGRzIiwiX2dldEFjY291bnREYXRhIiwiY29ubmVjdGlvbklkIiwiZGF0YSIsIl9zZXRBY2NvdW50RGF0YSIsImhhc2giLCJjcmVhdGVIYXNoIiwiZGlnZXN0IiwiX2hhc2hTdGFtcGVkVG9rZW4iLCJoYXNoZWRTdGFtcGVkVG9rZW4iLCJfZXhjbHVkZWQiLCJfaW5zZXJ0SGFzaGVkTG9naW5Ub2tlbiIsIiRhZGRUb1NldCIsIl9jbGVhckFsbExvZ2luVG9rZW5zIiwiJHNldCIsIl9nZXRVc2VyT2JzZXJ2ZSIsIm9ic2VydmUiLCJzdG9wIiwibmV3VG9rZW4iLCJteU9ic2VydmVOdW1iZXIiLCJkZWZlciIsImZvdW5kTWF0Y2hpbmdVc2VyIiwib2JzZXJ2ZUNoYW5nZXMiLCJhZGRlZCIsInJlbW92ZWQiLCJjbG9zZSIsIm5vbk11dGF0aW5nQ2FsbGJhY2tzIiwiUmFuZG9tIiwiX2V4cGlyZVBhc3N3b3JkUmVzZXRUb2tlbnMiLCJvbGRlc3RWYWxpZERhdGUiLCJ0b2tlbkxpZmV0aW1lTXMiLCJ0b2tlbkZpbHRlciIsIiRleGlzdHMiLCJleHBpcmVQYXNzd29yZFRva2VuIiwiX2V4cGlyZVBhc3N3b3JkRW5yb2xsVG9rZW5zIiwiX2V4cGlyZVRva2VucyIsInVzZXJGaWx0ZXIiLCIkbHQiLCJtdWx0aSIsInN1cGVyUmVzdWx0IiwiZXhwaXJlVG9rZW5JbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbnNlcnRVc2VyRG9jIiwiY3JlYXRlZEF0IiwicGluRW5jcnlwdGVkRmllbGRzVG9Vc2VyIiwiZnVsbFVzZXIiLCJkZWZhdWx0Q3JlYXRlVXNlckhvb2siLCJob29rIiwiZXJybXNnIiwiX3Rlc3RFbWFpbERvbWFpbiIsImRvbWFpbiIsInJlc3RyaWN0Q3JlYXRpb25CeUVtYWlsRG9tYWluIiwidGVzdCIsIl9kZWxldGVTYXZlZFRva2Vuc0ZvclVzZXIiLCJ0b2tlbnNUb0RlbGV0ZSIsIiR1bnNldCIsIiRwdWxsQWxsIiwibG9naW5Ub2tlbnNUb0RlbGV0ZSIsInVwZGF0ZU9yQ3JlYXRlVXNlckZyb21FeHRlcm5hbFNlcnZpY2UiLCJzZXJ2aWNlTmFtZSIsInNlcnZpY2VEYXRhIiwic2VydmljZUlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsInNldEF0dHJzIiwicmVtb3ZlRGVmYXVsdFJhdGVMaW1pdCIsInJlc3AiLCJERFBSYXRlTGltaXRlciIsInJlbW92ZVJ1bGUiLCJkZWZhdWx0UmF0ZUxpbWl0ZXJSdWxlSWQiLCJhZGRSdWxlIiwiY2xpZW50QWRkcmVzcyIsImdlbmVyYXRlT3B0aW9uc0ZvckVtYWlsIiwicmVhc29uIiwiZXh0cmEiLCJ0byIsImVtYWlsVGVtcGxhdGVzIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwiaGVhZGVycyIsIl9jaGVja0ZvckNhc2VJbnNlbnNpdGl2ZUR1cGxpY2F0ZXMiLCJkaXNwbGF5TmFtZSIsIm93blVzZXJJZCIsInNraXBDaGVjayIsIm1hdGNoZWRVc2VycyIsIl9jcmVhdGVVc2VyQ2hlY2tpbmdEdXBsaWNhdGVzIiwiX3JlZiIsIm5ld1VzZXIiLCJhZGRyZXNzIiwidmVyaWZpZWQiLCJleCIsInJlbW92ZSIsImNsb25lZEF0dGVtcHQiLCJFSlNPTiIsImNsb25lIiwiZGVmYXVsdFJlc3VtZUxvZ2luSGFuZGxlciIsIm9sZFVuaGFzaGVkU3R5bGVUb2tlbiIsImlzRW5yb2xsIiwicmVzZXRSYW5nZU9yIiwiZXhwaXJlRmlsdGVyIiwic2V0SW50ZXJ2YWwiLCJfUGFja2FnZSRvYXV0aEVuY3J5cCIsImlzU2VhbGVkIiwib3BlbiIsImVtYWlsSXNHb29kIiwidmFsdWVzIiwiYWxsb3ciLCJtb2RpZmllciIsImNyZWF0ZUluZGV4QXN5bmMiLCJ1bmlxdWUiLCJzcGFyc2UiLCJwZXJtdXRhdGlvbnMiLCJpIiwiY2giLCJjaGFyQXQiLCJsb3dlckNhc2VDaGFyIiwidG9Mb3dlckNhc2UiLCJ1cHBlckNhc2VDaGFyIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUFBLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBQUNDLGNBQWMsRUFBQ0EsQ0FBQSxLQUFJQTtFQUFjLENBQUMsQ0FBQztFQUFDLElBQUlBLGNBQWM7RUFBQ0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsc0JBQXNCLEVBQUM7SUFBQ0QsY0FBY0EsQ0FBQ0UsQ0FBQyxFQUFDO01BQUNGLGNBQWMsR0FBQ0UsQ0FBQztJQUFBO0VBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztFQUVuSjtBQUNBO0FBQ0E7QUFDQTtFQUNBQyxRQUFRLEdBQUcsSUFBSUgsY0FBYyxDQUFDSSxNQUFNLENBQUNDLE1BQU0sRUFBRSxFQUFBQyxxQkFBQSxHQUFBRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsUUFBUSxjQUFBRixxQkFBQSx1QkFBeEJBLHFCQUFBLENBQTBCRyxRQUFRLEtBQUksQ0FBQyxDQUFDLENBQUM7O0VBRXRGO0VBQ0E7RUFDQTs7RUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQUwsTUFBTSxDQUFDTSxLQUFLLEdBQUdQLFFBQVEsQ0FBQ08sS0FBSztBQUFDLEVBQUFDLElBQUEsT0FBQUMsTUFBQSxFOzs7Ozs7Ozs7OztBQ2xCOUIsSUFBSUMsYUFBYTtBQUFDRCxNQUFNLENBQUNYLElBQUksQ0FBQyxzQ0FBc0MsRUFBQztFQUFDYSxPQUFPQSxDQUFDWixD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QUM7TUFDekQ7SUFDRixDQUFDLENBQUUsQ0FBQztFQUNOO0VBQ0EsT0FBT04sWUFBWTtBQUNyQixDQUFDLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2FjY291bnRzLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50c1NlcnZlciB9IGZyb20gXCIuL2FjY291bnRzX3NlcnZlci5qc1wiO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgQWNjb3VudHNcbiAqIEBzdW1tYXJ5IFRoZSBuYW1lc3BhY2UgZm9yIGFsbCBzZXJ2ZXItc2lkZSBhY2NvdW50cy1yZWxhdGVkIG1ldGhvZHMuXG4gKi9cbkFjY291bnRzID0gbmV3IEFjY291bnRzU2VydmVyKE1ldGVvci5zZXJ2ZXIsIE1ldGVvci5zZXR0aW5ncy5wYWNrYWdlcz8uYWNjb3VudHMgfHwge30pO1xuXG4vLyBVc2VycyB0YWJsZS4gRG9uJ3QgdXNlIHRoZSBub3JtYWwgYXV0b3B1Ymxpc2gsIHNpbmNlIHdlIHdhbnQgdG8gaGlkZVxuLy8gc29tZSBmaWVsZHMuIENvZGUgdG8gYXV0b3B1Ymxpc2ggdGhpcyBpcyBpbiBhY2NvdW50c19zZXJ2ZXIuanMuXG4vLyBYWFggQWxsb3cgdXNlcnMgdG8gY29uZmlndXJlIHRoaXMgY29sbGVjdGlvbiBuYW1lLlxuXG4vKipcbiAqIEBzdW1tYXJ5IEEgW01vbmdvLkNvbGxlY3Rpb25dKCNjb2xsZWN0aW9ucykgY29udGFpbmluZyB1c2VyIGRvY3VtZW50cy5cbiAqIEBsb2N1cyBBbnl3aGVyZVxuICogQHR5cGUge01vbmdvLkNvbGxlY3Rpb259XG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4qL1xuTWV0ZW9yLnVzZXJzID0gQWNjb3VudHMudXNlcnM7XG5cbmV4cG9ydCB7XG4gIC8vIFNpbmNlIHRoaXMgZmlsZSBpcyB0aGUgbWFpbiBtb2R1bGUgZm9yIHRoZSBzZXJ2ZXIgdmVyc2lvbiBvZiB0aGVcbiAgLy8gYWNjb3VudHMtYmFzZSBwYWNrYWdlLCBwcm9wZXJ0aWVzIG9mIG5vbi1lbnRyeS1wb2ludCBtb2R1bGVzIG5lZWQgdG9cbiAgLy8gYmUgcmUtZXhwb3J0ZWQgaW4gb3JkZXIgdG8gYmUgYWNjZXNzaWJsZSB0byBtb2R1bGVzIHRoYXQgaW1wb3J0IHRoZVxuICAvLyBhY2NvdW50cy1iYXNlIHBhY2thZ2UuXG4gIEFjY291bnRzU2VydmVyXG59O1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbi8vIGNvbmZpZyBvcHRpb24ga2V5c1xuY29uc3QgVkFMSURfQ09ORklHX0tFWVMgPSBbXG4gICdzZW5kVmVyaWZpY2F0aW9uRW1haWwnLFxuICAnZm9yYmlkQ2xpZW50QWNjb3VudENyZWF0aW9uJyxcbiAgJ3Jlc3RyaWN0Q3JlYXRpb25CeUVtYWlsRG9tYWluJyxcbiAgJ2xvZ2luRXhwaXJhdGlvbicsXG4gICdsb2dpbkV4cGlyYXRpb25JbkRheXMnLFxuICAnb2F1dGhTZWNyZXRLZXknLFxuICAncGFzc3dvcmRSZXNldFRva2VuRXhwaXJhdGlvbkluRGF5cycsXG4gICdwYXNzd29yZFJlc2V0VG9rZW5FeHBpcmF0aW9uJyxcbiAgJ3Bhc3N3b3JkRW5yb2xsVG9rZW5FeHBpcmF0aW9uSW5EYXlzJyxcbiAgJ3Bhc3N3b3JkRW5yb2xsVG9rZW5FeHBpcmF0aW9uJyxcbiAgJ2FtYmlndW91c0Vycm9yTWVzc2FnZXMnLFxuICAnYmNyeXB0Um91bmRzJyxcbiAgJ2RlZmF1bHRGaWVsZFNlbGVjdG9yJyxcbiAgJ2NvbGxlY3Rpb24nLFxuICAnbG9naW5Ub2tlbkV4cGlyYXRpb25Ib3VycycsXG4gICd0b2tlblNlcXVlbmNlTGVuZ3RoJyxcbiAgJ2NsaWVudFN0b3JhZ2UnLFxuXTtcblxuLyoqXG4gKiBAc3VtbWFyeSBTdXBlci1jb25zdHJ1Y3RvciBmb3IgQWNjb3VudHNDbGllbnQgYW5kIEFjY291bnRzU2VydmVyLlxuICogQGxvY3VzIEFueXdoZXJlXG4gKiBAY2xhc3MgQWNjb3VudHNDb21tb25cbiAqIEBpbnN0YW5jZW5hbWUgYWNjb3VudHNDbGllbnRPclNlcnZlclxuICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gYW4gb2JqZWN0IHdpdGggZmllbGRzOlxuICogLSBjb25uZWN0aW9uIHtPYmplY3R9IE9wdGlvbmFsIEREUCBjb25uZWN0aW9uIHRvIHJldXNlLlxuICogLSBkZHBVcmwge1N0cmluZ30gT3B0aW9uYWwgVVJMIGZvciBjcmVhdGluZyBhIG5ldyBERFAgY29ubmVjdGlvbi5cbiAqIC0gY29sbGVjdGlvbiB7U3RyaW5nfE1vbmdvLkNvbGxlY3Rpb259IFRoZSBuYW1lIG9mIHRoZSBNb25nby5Db2xsZWN0aW9uXG4gKiAgICAgb3IgdGhlIE1vbmdvLkNvbGxlY3Rpb24gb2JqZWN0IHRvIGhvbGQgdGhlIHVzZXJzLlxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudHNDb21tb24ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLy8gQ3VycmVudGx5IHRoaXMgaXMgcmVhZCBkaXJlY3RseSBieSBwYWNrYWdlcyBsaWtlIGFjY291bnRzLXBhc3N3b3JkXG4gICAgLy8gYW5kIGFjY291bnRzLXVpLXVuc3R5bGVkLlxuICAgIHRoaXMuX29wdGlvbnMgPSB7fTtcblxuICAgIC8vIE5vdGUgdGhhdCBzZXR0aW5nIHRoaXMuY29ubmVjdGlvbiA9IG51bGwgY2F1c2VzIHRoaXMudXNlcnMgdG8gYmUgYVxuICAgIC8vIExvY2FsQ29sbGVjdGlvbiwgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cbiAgICB0aGlzLmNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5pdENvbm5lY3Rpb24ob3B0aW9ucyB8fCB7fSk7XG5cbiAgICAvLyBUaGVyZSBpcyBhbiBhbGxvdyBjYWxsIGluIGFjY291bnRzX3NlcnZlci5qcyB0aGF0IHJlc3RyaWN0cyB3cml0ZXMgdG9cbiAgICAvLyB0aGlzIGNvbGxlY3Rpb24uXG4gICAgdGhpcy51c2VycyA9IHRoaXMuX2luaXRpYWxpemVDb2xsZWN0aW9uKG9wdGlvbnMgfHwge30pO1xuXG4gICAgLy8gQ2FsbGJhY2sgZXhjZXB0aW9ucyBhcmUgcHJpbnRlZCB3aXRoIE1ldGVvci5fZGVidWcgYW5kIGlnbm9yZWQuXG4gICAgdGhpcy5fb25Mb2dpbkhvb2sgPSBuZXcgSG9vayh7XG4gICAgICBiaW5kRW52aXJvbm1lbnQ6IGZhbHNlLFxuICAgICAgZGVidWdQcmludEV4Y2VwdGlvbnM6ICdvbkxvZ2luIGNhbGxiYWNrJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX29uTG9naW5GYWlsdXJlSG9vayA9IG5ldyBIb29rKHtcbiAgICAgIGJpbmRFbnZpcm9ubWVudDogZmFsc2UsXG4gICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uczogJ29uTG9naW5GYWlsdXJlIGNhbGxiYWNrJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX29uTG9nb3V0SG9vayA9IG5ldyBIb29rKHtcbiAgICAgIGJpbmRFbnZpcm9ubWVudDogZmFsc2UsXG4gICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uczogJ29uTG9nb3V0IGNhbGxiYWNrJyxcbiAgICB9KTtcblxuICAgIC8vIEV4cG9zZSBmb3IgdGVzdGluZy5cbiAgICB0aGlzLkRFRkFVTFRfTE9HSU5fRVhQSVJBVElPTl9EQVlTID0gREVGQVVMVF9MT0dJTl9FWFBJUkFUSU9OX0RBWVM7XG4gICAgdGhpcy5MT0dJTl9VTkVYUElSSU5HX1RPS0VOX0RBWVMgPSBMT0dJTl9VTkVYUElSSU5HX1RPS0VOX0RBWVM7XG5cbiAgICAvLyBUaHJvd24gd2hlbiB0aGUgdXNlciBjYW5jZWxzIHRoZSBsb2dpbiBwcm9jZXNzIChlZywgY2xvc2VzIGFuIG9hdXRoXG4gICAgLy8gcG9wdXAsIGRlY2xpbmVzIHJldGluYSBzY2FuLCBldGMpXG4gICAgY29uc3QgbGNlTmFtZSA9ICdBY2NvdW50cy5Mb2dpbkNhbmNlbGxlZEVycm9yJztcbiAgICB0aGlzLkxvZ2luQ2FuY2VsbGVkRXJyb3IgPSBNZXRlb3IubWFrZUVycm9yVHlwZShsY2VOYW1lLCBmdW5jdGlvbihcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkZXNjcmlwdGlvbjtcbiAgICB9KTtcbiAgICB0aGlzLkxvZ2luQ2FuY2VsbGVkRXJyb3IucHJvdG90eXBlLm5hbWUgPSBsY2VOYW1lO1xuXG4gICAgLy8gVGhpcyBpcyB1c2VkIHRvIHRyYW5zbWl0IHNwZWNpZmljIHN1YmNsYXNzIGVycm9ycyBvdmVyIHRoZSB3aXJlLiBXZVxuICAgIC8vIHNob3VsZCBjb21lIHVwIHdpdGggYSBtb3JlIGdlbmVyaWMgd2F5IHRvIGRvIHRoaXMgKGVnLCB3aXRoIHNvbWUgc29ydCBvZlxuICAgIC8vIHN5bWJvbGljIGVycm9yIGNvZGUgcmF0aGVyIHRoYW4gYSBudW1iZXIpLlxuICAgIHRoaXMuTG9naW5DYW5jZWxsZWRFcnJvci5udW1lcmljRXJyb3IgPSAweDhhY2RjMmY7XG4gIH1cblxuICBfaW5pdGlhbGl6ZUNvbGxlY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmNvbGxlY3Rpb24gJiYgdHlwZW9mIG9wdGlvbnMuY29sbGVjdGlvbiAhPT0gJ3N0cmluZycgJiYgIShvcHRpb25zLmNvbGxlY3Rpb24gaW5zdGFuY2VvZiBNb25nby5Db2xsZWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignQ29sbGVjdGlvbiBwYXJhbWV0ZXIgY2FuIGJlIG9ubHkgb2YgdHlwZSBzdHJpbmcgb3IgXCJNb25nby5Db2xsZWN0aW9uXCInKTtcbiAgICB9XG5cbiAgICBsZXQgY29sbGVjdGlvbk5hbWUgPSAndXNlcnMnO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2xsZWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgY29sbGVjdGlvbk5hbWUgPSBvcHRpb25zLmNvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgbGV0IGNvbGxlY3Rpb247XG4gICAgaWYgKG9wdGlvbnMuY29sbGVjdGlvbiBpbnN0YW5jZW9mIE1vbmdvLkNvbGxlY3Rpb24pIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBvcHRpb25zLmNvbGxlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSwge1xuICAgICAgICBfcHJldmVudEF1dG9wdWJsaXNoOiB0cnVlLFxuICAgICAgICBjb25uZWN0aW9uOiB0aGlzLmNvbm5lY3Rpb24sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBHZXQgdGhlIGN1cnJlbnQgdXNlciBpZCwgb3IgYG51bGxgIGlmIG5vIHVzZXIgaXMgbG9nZ2VkIGluLiBBIHJlYWN0aXZlIGRhdGEgc291cmNlLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICovXG4gIHVzZXJJZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJJZCBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICAvLyBtZXJnZSB0aGUgZGVmYXVsdEZpZWxkU2VsZWN0b3Igd2l0aCBhbiBleGlzdGluZyBvcHRpb25zIG9iamVjdFxuICBfYWRkRGVmYXVsdEZpZWxkU2VsZWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBtb3N0IGNvbW1vbiBjYXNlIGZvciBtb3N0IHBlb3BsZSwgc28gbWFrZSBpdCBxdWlja1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3RvcikgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICAvLyBpZiBubyBmaWVsZCBzZWxlY3RvciB0aGVuIGp1c3QgdXNlIGRlZmF1bHRGaWVsZFNlbGVjdG9yXG4gICAgaWYgKCFvcHRpb25zLmZpZWxkcylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGZpZWxkczogdGhpcy5fb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3RvcixcbiAgICAgIH07XG5cbiAgICAvLyBpZiBlbXB0eSBmaWVsZCBzZWxlY3RvciB0aGVuIHRoZSBmdWxsIHVzZXIgb2JqZWN0IGlzIGV4cGxpY2l0bHkgcmVxdWVzdGVkLCBzbyBvYmV5XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZmllbGRzKTtcbiAgICBpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gb3B0aW9ucztcblxuICAgIC8vIGlmIHRoZSByZXF1ZXN0ZWQgZmllbGRzIGFyZSArdmUgdGhlbiBpZ25vcmUgZGVmYXVsdEZpZWxkU2VsZWN0b3JcbiAgICAvLyBhc3N1bWUgdGhleSBhcmUgYWxsIGVpdGhlciArdmUgb3IgLXZlIGJlY2F1c2UgTW9uZ28gZG9lc24ndCBsaWtlIG1peGVkXG4gICAgaWYgKCEhb3B0aW9ucy5maWVsZHNba2V5c1swXV0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgLy8gVGhlIHJlcXVlc3RlZCBmaWVsZHMgYXJlIC12ZS5cbiAgICAvLyBJZiB0aGUgZGVmYXVsdEZpZWxkU2VsZWN0b3IgaXMgK3ZlIHRoZW4gdXNlIHJlcXVlc3RlZCBmaWVsZHMsIG90aGVyd2lzZSBtZXJnZSB0aGVtXG4gICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zLmRlZmF1bHRGaWVsZFNlbGVjdG9yKTtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3RvcltrZXlzMlswXV1cbiAgICAgID8gb3B0aW9uc1xuICAgICAgOiB7XG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuZmllbGRzLFxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3RvcixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEdldCB0aGUgY3VycmVudCB1c2VyIHJlY29yZCwgb3IgYG51bGxgIGlmIG5vIHVzZXIgaXMgbG9nZ2VkIGluLiBBIHJlYWN0aXZlIGRhdGEgc291cmNlLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge01vbmdvRmllbGRTcGVjaWZpZXJ9IG9wdGlvbnMuZmllbGRzIERpY3Rpb25hcnkgb2YgZmllbGRzIHRvIHJldHVybiBvciBleGNsdWRlLlxuICAgKi9cbiAgdXNlcihvcHRpb25zKSB7XG4gICAgY29uc3QgdXNlcklkID0gdGhpcy51c2VySWQoKTtcbiAgICByZXR1cm4gdXNlcklkXG4gICAgICA/IHRoaXMudXNlcnMuZmluZE9uZSh1c2VySWQsIHRoaXMuX2FkZERlZmF1bHRGaWVsZFNlbGVjdG9yKG9wdGlvbnMpKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEdldCB0aGUgY3VycmVudCB1c2VyIHJlY29yZCwgb3IgYG51bGxgIGlmIG5vIHVzZXIgaXMgbG9nZ2VkIGluLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge01vbmdvRmllbGRTcGVjaWZpZXJ9IG9wdGlvbnMuZmllbGRzIERpY3Rpb25hcnkgb2YgZmllbGRzIHRvIHJldHVybiBvciBleGNsdWRlLlxuICAgKi9cbiAgYXN5bmMgdXNlckFzeW5jKG9wdGlvbnMpIHtcbiAgICBjb25zdCB1c2VySWQgPSB0aGlzLnVzZXJJZCgpO1xuICAgIHJldHVybiB1c2VySWRcbiAgICAgID8gdGhpcy51c2Vycy5maW5kT25lQXN5bmModXNlcklkLCB0aGlzLl9hZGREZWZhdWx0RmllbGRTZWxlY3RvcihvcHRpb25zKSlcbiAgICAgIDogbnVsbDtcbiAgfVxuICAvLyBTZXQgdXAgY29uZmlnIGZvciB0aGUgYWNjb3VudHMgc3lzdGVtLiBDYWxsIHRoaXMgb24gYm90aCB0aGUgY2xpZW50XG4gIC8vIGFuZCB0aGUgc2VydmVyLlxuICAvL1xuICAvLyBOb3RlIHRoYXQgdGhpcyBtZXRob2QgZ2V0cyBvdmVycmlkZGVuIG9uIEFjY291bnRzU2VydmVyLnByb3RvdHlwZSwgYnV0XG4gIC8vIHRoZSBvdmVycmlkaW5nIG1ldGhvZCBjYWxscyB0aGUgb3ZlcnJpZGRlbiBtZXRob2QuXG4gIC8vXG4gIC8vIFhYWCB3ZSBzaG91bGQgYWRkIHNvbWUgZW5mb3JjZW1lbnQgdGhhdCB0aGlzIGlzIGNhbGxlZCBvbiBib3RoIHRoZVxuICAvLyBjbGllbnQgYW5kIHRoZSBzZXJ2ZXIuIE90aGVyd2lzZSwgYSB1c2VyIGNhblxuICAvLyAnZm9yYmlkQ2xpZW50QWNjb3VudENyZWF0aW9uJyBvbmx5IG9uIHRoZSBjbGllbnQgYW5kIHdoaWxlIGl0IGxvb2tzXG4gIC8vIGxpa2UgdGhlaXIgYXBwIGlzIHNlY3VyZSwgdGhlIHNlcnZlciB3aWxsIHN0aWxsIGFjY2VwdCBjcmVhdGVVc2VyXG4gIC8vIGNhbGxzLiBodHRwczovL2dpdGh1Yi5jb20vbWV0ZW9yL21ldGVvci9pc3N1ZXMvODI4XG4gIC8vXG4gIC8vIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IGFuIG9iamVjdCB3aXRoIGZpZWxkczpcbiAgLy8gLSBzZW5kVmVyaWZpY2F0aW9uRW1haWwge0Jvb2xlYW59XG4gIC8vICAgICBTZW5kIGVtYWlsIGFkZHJlc3MgdmVyaWZpY2F0aW9uIGVtYWlscyB0byBuZXcgdXNlcnMgY3JlYXRlZCBmcm9tXG4gIC8vICAgICBjbGllbnQgc2lnbnVwcy5cbiAgLy8gLSBmb3JiaWRDbGllbnRBY2NvdW50Q3JlYXRpb24ge0Jvb2xlYW59XG4gIC8vICAgICBEbyBub3QgYWxsb3cgY2xpZW50cyB0byBjcmVhdGUgYWNjb3VudHMgZGlyZWN0bHkuXG4gIC8vIC0gcmVzdHJpY3RDcmVhdGlvbkJ5RW1haWxEb21haW4ge0Z1bmN0aW9uIG9yIFN0cmluZ31cbiAgLy8gICAgIFJlcXVpcmUgY3JlYXRlZCB1c2VycyB0byBoYXZlIGFuIGVtYWlsIG1hdGNoaW5nIHRoZSBmdW5jdGlvbiBvclxuICAvLyAgICAgaGF2aW5nIHRoZSBzdHJpbmcgYXMgZG9tYWluLlxuICAvLyAtIGxvZ2luRXhwaXJhdGlvbkluRGF5cyB7TnVtYmVyfVxuICAvLyAgICAgTnVtYmVyIG9mIGRheXMgc2luY2UgbG9naW4gdW50aWwgYSB1c2VyIGlzIGxvZ2dlZCBvdXQgKGxvZ2luIHRva2VuXG4gIC8vICAgICBleHBpcmVzKS5cbiAgLy8gLSBjb2xsZWN0aW9uIHtTdHJpbmd8TW9uZ28uQ29sbGVjdGlvbn1cbiAgLy8gICAgIEEgY29sbGVjdGlvbiBuYW1lIG9yIGEgTW9uZ28uQ29sbGVjdGlvbiBvYmplY3QgdG8gaG9sZCB0aGUgdXNlcnMuXG4gIC8vIC0gcGFzc3dvcmRSZXNldFRva2VuRXhwaXJhdGlvbkluRGF5cyB7TnVtYmVyfVxuICAvLyAgICAgTnVtYmVyIG9mIGRheXMgc2luY2UgcGFzc3dvcmQgcmVzZXQgdG9rZW4gY3JlYXRpb24gdW50aWwgdGhlXG4gIC8vICAgICB0b2tlbiBjYW5udCBiZSB1c2VkIGFueSBsb25nZXIgKHBhc3N3b3JkIHJlc2V0IHRva2VuIGV4cGlyZXMpLlxuICAvLyAtIGFtYmlndW91c0Vycm9yTWVzc2FnZXMge0Jvb2xlYW59XG4gIC8vICAgICBSZXR1cm4gYW1iaWd1b3VzIGVycm9yIG1lc3NhZ2VzIGZyb20gbG9naW4gZmFpbHVyZXMgdG8gcHJldmVudFxuICAvLyAgICAgdXNlciBlbnVtZXJhdGlvbi5cbiAgLy8gLSBiY3J5cHRSb3VuZHMge051bWJlcn1cbiAgLy8gICAgIEFsbG93cyBvdmVycmlkZSBvZiBudW1iZXIgb2YgYmNyeXB0IHJvdW5kcyAoYWthIHdvcmsgZmFjdG9yKSB1c2VkXG4gIC8vICAgICB0byBzdG9yZSBwYXNzd29yZHMuXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFNldCBnbG9iYWwgYWNjb3VudHMgb3B0aW9ucy4gWW91IGNhbiBhbHNvIHNldCB0aGVzZSBpbiBgTWV0ZW9yLnNldHRpbmdzLnBhY2thZ2VzLmFjY291bnRzYCB3aXRob3V0IHRoZSBuZWVkIHRvIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAgICogQGxvY3VzIEFueXdoZXJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5zZW5kVmVyaWZpY2F0aW9uRW1haWwgTmV3IHVzZXJzIHdpdGggYW4gZW1haWwgYWRkcmVzcyB3aWxsIHJlY2VpdmUgYW4gYWRkcmVzcyB2ZXJpZmljYXRpb24gZW1haWwuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5mb3JiaWRDbGllbnRBY2NvdW50Q3JlYXRpb24gQ2FsbHMgdG8gW2BjcmVhdGVVc2VyYF0oI2FjY291bnRzX2NyZWF0ZXVzZXIpIGZyb20gdGhlIGNsaWVudCB3aWxsIGJlIHJlamVjdGVkLiBJbiBhZGRpdGlvbiwgaWYgeW91IGFyZSB1c2luZyBbYWNjb3VudHMtdWldKCNhY2NvdW50c3VpKSwgdGhlIFwiQ3JlYXRlIGFjY291bnRcIiBsaW5rIHdpbGwgbm90IGJlIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtTdHJpbmcgfCBGdW5jdGlvbn0gb3B0aW9ucy5yZXN0cmljdENyZWF0aW9uQnlFbWFpbERvbWFpbiBJZiBzZXQgdG8gYSBzdHJpbmcsIG9ubHkgYWxsb3dzIG5ldyB1c2VycyBpZiB0aGUgZG9tYWluIHBhcnQgb2YgdGhlaXIgZW1haWwgYWRkcmVzcyBtYXRjaGVzIHRoZSBzdHJpbmcuIElmIHNldCB0byBhIGZ1bmN0aW9uLCBvbmx5IGFsbG93cyBuZXcgdXNlcnMgaWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZS4gIFRoZSBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGZ1bGwgZW1haWwgYWRkcmVzcyBvZiB0aGUgcHJvcG9zZWQgbmV3IHVzZXIuICBXb3JrcyB3aXRoIHBhc3N3b3JkLWJhc2VkIHNpZ24taW4gYW5kIGV4dGVybmFsIHNlcnZpY2VzIHRoYXQgZXhwb3NlIGVtYWlsIGFkZHJlc3NlcyAoR29vZ2xlLCBGYWNlYm9vaywgR2l0SHViKS4gQWxsIGV4aXN0aW5nIHVzZXJzIHN0aWxsIGNhbiBsb2cgaW4gYWZ0ZXIgZW5hYmxpbmcgdGhpcyBvcHRpb24uIEV4YW1wbGU6IGBBY2NvdW50cy5jb25maWcoeyByZXN0cmljdENyZWF0aW9uQnlFbWFpbERvbWFpbjogJ3NjaG9vbC5lZHUnIH0pYC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMubG9naW5FeHBpcmF0aW9uIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gd2hlbiBhIHVzZXIgbG9ncyBpbiB1bnRpbCB0aGVpciB0b2tlbiBleHBpcmVzIGFuZCB0aGV5IGFyZSBsb2dnZWQgb3V0LCBmb3IgYSBtb3JlIGdyYW51bGFyIGNvbnRyb2wuIElmIGBsb2dpbkV4cGlyYXRpb25JbkRheXNgIGlzIHNldCwgaXQgdGFrZXMgcHJlY2VkZW50LlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5sb2dpbkV4cGlyYXRpb25JbkRheXMgVGhlIG51bWJlciBvZiBkYXlzIGZyb20gd2hlbiBhIHVzZXIgbG9ncyBpbiB1bnRpbCB0aGVpciB0b2tlbiBleHBpcmVzIGFuZCB0aGV5IGFyZSBsb2dnZWQgb3V0LiBEZWZhdWx0cyB0byA5MC4gU2V0IHRvIGBudWxsYCB0byBkaXNhYmxlIGxvZ2luIGV4cGlyYXRpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLm9hdXRoU2VjcmV0S2V5IFdoZW4gdXNpbmcgdGhlIGBvYXV0aC1lbmNyeXB0aW9uYCBwYWNrYWdlLCB0aGUgMTYgYnl0ZSBrZXkgdXNpbmcgdG8gZW5jcnlwdCBzZW5zaXRpdmUgYWNjb3VudCBjcmVkZW50aWFscyBpbiB0aGUgZGF0YWJhc2UsIGVuY29kZWQgaW4gYmFzZTY0LiAgVGhpcyBvcHRpb24gbWF5IG9ubHkgYmUgc3BlY2lmaWVkIG9uIHRoZSBzZXJ2ZXIuICBTZWUgcGFja2FnZXMvb2F1dGgtZW5jcnlwdGlvbi9SRUFETUUubWQgZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnBhc3N3b3JkUmVzZXRUb2tlbkV4cGlyYXRpb25JbkRheXMgVGhlIG51bWJlciBvZiBkYXlzIGZyb20gd2hlbiBhIGxpbmsgdG8gcmVzZXQgcGFzc3dvcmQgaXMgc2VudCB1bnRpbCB0b2tlbiBleHBpcmVzIGFuZCB1c2VyIGNhbid0IHJlc2V0IHBhc3N3b3JkIHdpdGggdGhlIGxpbmsgYW55bW9yZS4gRGVmYXVsdHMgdG8gMy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucGFzc3dvcmRSZXNldFRva2VuRXhwaXJhdGlvbiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHdoZW4gYSBsaW5rIHRvIHJlc2V0IHBhc3N3b3JkIGlzIHNlbnQgdW50aWwgdG9rZW4gZXhwaXJlcyBhbmQgdXNlciBjYW4ndCByZXNldCBwYXNzd29yZCB3aXRoIHRoZSBsaW5rIGFueW1vcmUuIElmIGBwYXNzd29yZFJlc2V0VG9rZW5FeHBpcmF0aW9uSW5EYXlzYCBpcyBzZXQsIGl0IHRha2VzIHByZWNlZGVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucGFzc3dvcmRFbnJvbGxUb2tlbkV4cGlyYXRpb25JbkRheXMgVGhlIG51bWJlciBvZiBkYXlzIGZyb20gd2hlbiBhIGxpbmsgdG8gc2V0IGluaXRpYWwgcGFzc3dvcmQgaXMgc2VudCB1bnRpbCB0b2tlbiBleHBpcmVzIGFuZCB1c2VyIGNhbid0IHNldCBwYXNzd29yZCB3aXRoIHRoZSBsaW5rIGFueW1vcmUuIERlZmF1bHRzIHRvIDMwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5wYXNzd29yZEVucm9sbFRva2VuRXhwaXJhdGlvbiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHdoZW4gYSBsaW5rIHRvIHNldCBpbml0aWFsIHBhc3N3b3JkIGlzIHNlbnQgdW50aWwgdG9rZW4gZXhwaXJlcyBhbmQgdXNlciBjYW4ndCBzZXQgcGFzc3dvcmQgd2l0aCB0aGUgbGluayBhbnltb3JlLiBJZiBgcGFzc3dvcmRFbnJvbGxUb2tlbkV4cGlyYXRpb25JbkRheXNgIGlzIHNldCwgaXQgdGFrZXMgcHJlY2VkZW50LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuYW1iaWd1b3VzRXJyb3JNZXNzYWdlcyBSZXR1cm4gYW1iaWd1b3VzIGVycm9yIG1lc3NhZ2VzIGZyb20gbG9naW4gZmFpbHVyZXMgdG8gcHJldmVudCB1c2VyIGVudW1lcmF0aW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuYmNyeXB0Um91bmRzIEFsbG93cyBvdmVycmlkZSBvZiBudW1iZXIgb2YgYmNyeXB0IHJvdW5kcyAoYWthIHdvcmsgZmFjdG9yKSB1c2VkIHRvIHN0b3JlIHBhc3N3b3Jkcy4gVGhlIGRlZmF1bHQgaXMgMTAuXG4gICAqIEBwYXJhbSB7TW9uZ29GaWVsZFNwZWNpZmllcn0gb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3RvciBUbyBleGNsdWRlIGJ5IGRlZmF1bHQgbGFyZ2UgY3VzdG9tIGZpZWxkcyBmcm9tIGBNZXRlb3IudXNlcigpYCBhbmQgYE1ldGVvci5maW5kVXNlckJ5Li4uKClgIGZ1bmN0aW9ucyB3aGVuIGNhbGxlZCB3aXRob3V0IGEgZmllbGQgc2VsZWN0b3IsIGFuZCBhbGwgYG9uTG9naW5gLCBgb25Mb2dpbkZhaWx1cmVgIGFuZCBgb25Mb2dvdXRgIGNhbGxiYWNrcy4gIEV4YW1wbGU6IGBBY2NvdW50cy5jb25maWcoeyBkZWZhdWx0RmllbGRTZWxlY3RvcjogeyBteUJpZ0FycmF5OiAwIH19KWAuIEJld2FyZSB3aGVuIHVzaW5nIHRoaXMuIElmLCBmb3IgaW5zdGFuY2UsIHlvdSBkbyBub3QgaW5jbHVkZSBgZW1haWxgIHdoZW4gZXhjbHVkaW5nIHRoZSBmaWVsZHMsIHlvdSBjYW4gaGF2ZSBwcm9ibGVtcyB3aXRoIGZ1bmN0aW9ucyBsaWtlIGBmb3Jnb3RQYXNzd29yZGAgdGhhdCB3aWxsIGJyZWFrIGJlY2F1c2UgdGhleSB3b24ndCBoYXZlIHRoZSByZXF1aXJlZCBkYXRhIGF2YWlsYWJsZS4gSXQncyByZWNvbW1lbmQgdGhhdCB5b3UgYWx3YXlzIGtlZXAgdGhlIGZpZWxkcyBgX2lkYCwgYHVzZXJuYW1lYCwgYW5kIGBlbWFpbGAuXG4gICAqIEBwYXJhbSB7U3RyaW5nfE1vbmdvLkNvbGxlY3Rpb259IG9wdGlvbnMuY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gbmFtZSBvciBhIE1vbmdvLkNvbGxlY3Rpb24gb2JqZWN0IHRvIGhvbGQgdGhlIHVzZXJzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5sb2dpblRva2VuRXhwaXJhdGlvbkhvdXJzIFdoZW4gdXNpbmcgdGhlIHBhY2thZ2UgYGFjY291bnRzLTJmYWAsIHVzZSB0aGlzIHRvIHNldCB0aGUgYW1vdW50IG9mIHRpbWUgYSB0b2tlbiBzZW50IGlzIHZhbGlkLiBBcyBpdCdzIGp1c3QgYSBudW1iZXIsIHlvdSBjYW4gdXNlLCBmb3IgZXhhbXBsZSwgMC41IHRvIG1ha2UgdGhlIHRva2VuIHZhbGlkIGZvciBqdXN0IGhhbGYgaG91ci4gVGhlIGRlZmF1bHQgaXMgMSBob3VyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy50b2tlblNlcXVlbmNlTGVuZ3RoIFdoZW4gdXNpbmcgdGhlIHBhY2thZ2UgYGFjY291bnRzLTJmYWAsIHVzZSB0aGlzIHRvIHRoZSBzaXplIG9mIHRoZSB0b2tlbiBzZXF1ZW5jZSBnZW5lcmF0ZWQuIFRoZSBkZWZhdWx0IGlzIDYuXG4gICAqIEBwYXJhbSB7J3Nlc3Npb24nIHwgJ2xvY2FsJ30gb3B0aW9ucy5jbGllbnRTdG9yYWdlIEJ5IGRlZmF1bHQgbG9naW4gY3JlZGVudGlhbHMgYXJlIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlLCBzZXR0aW5nIHRoaXMgdG8gdHJ1ZSB3aWxsIHN3aXRjaCB0byB1c2luZyBzZXNzaW9uIHN0b3JhZ2UuXG4gICAqL1xuICBjb25maWcob3B0aW9ucykge1xuICAgIC8vIFdlIGRvbid0IHdhbnQgdXNlcnMgdG8gYWNjaWRlbnRhbGx5IG9ubHkgY2FsbCBBY2NvdW50cy5jb25maWcgb24gdGhlXG4gICAgLy8gY2xpZW50LCB3aGVyZSBzb21lIG9mIHRoZSBvcHRpb25zIHdpbGwgaGF2ZSBwYXJ0aWFsIGVmZmVjdHMgKGVnIHJlbW92aW5nXG4gICAgLy8gdGhlIFwiY3JlYXRlIGFjY291bnRcIiBidXR0b24gZnJvbSBhY2NvdW50cy11aSBpZiBmb3JiaWRDbGllbnRBY2NvdW50Q3JlYXRpb25cbiAgICAvLyBpcyBzZXQsIG9yIHJlZGlyZWN0aW5nIEdvb2dsZSBsb2dpbiB0byBhIHNwZWNpZmljLWRvbWFpbiBwYWdlKSB3aXRob3V0XG4gICAgLy8gaGF2aW5nIHRoZWlyIGZ1bGwgZWZmZWN0cy5cbiAgICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgICBfX21ldGVvcl9ydW50aW1lX2NvbmZpZ19fLmFjY291bnRzQ29uZmlnQ2FsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFfX21ldGVvcl9ydW50aW1lX2NvbmZpZ19fLmFjY291bnRzQ29uZmlnQ2FsbGVkKSB7XG4gICAgICAvLyBYWFggd291bGQgYmUgbmljZSB0byBcImNyYXNoXCIgdGhlIGNsaWVudCBhbmQgcmVwbGFjZSB0aGUgVUkgd2l0aCBhbiBlcnJvclxuICAgICAgLy8gbWVzc2FnZSwgYnV0IHRoZXJlJ3Mgbm8gdHJpdmlhbCB3YXkgdG8gZG8gdGhpcy5cbiAgICAgIE1ldGVvci5fZGVidWcoXG4gICAgICAgICdBY2NvdW50cy5jb25maWcgd2FzIGNhbGxlZCBvbiB0aGUgY2xpZW50IGJ1dCBub3Qgb24gdGhlICcgK1xuICAgICAgICAgICdzZXJ2ZXI7IHNvbWUgY29uZmlndXJhdGlvbiBvcHRpb25zIG1heSBub3QgdGFrZSBlZmZlY3QuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHZhbGlkYXRlIHRoZSBvYXV0aFNlY3JldEtleSBvcHRpb24gYXQgdGhlIHRpbWVcbiAgICAvLyBBY2NvdW50cy5jb25maWcgaXMgY2FsbGVkLiBXZSBhbHNvIGRlbGliZXJhdGVseSBkb24ndCBzdG9yZSB0aGVcbiAgICAvLyBvYXV0aFNlY3JldEtleSBpbiBBY2NvdW50cy5fb3B0aW9ucy5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsICdvYXV0aFNlY3JldEtleScpKSB7XG4gICAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVGhlIG9hdXRoU2VjcmV0S2V5IG9wdGlvbiBtYXkgb25seSBiZSBzcGVjaWZpZWQgb24gdGhlIHNlcnZlcidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghUGFja2FnZVsnb2F1dGgtZW5jcnlwdGlvbiddKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVGhlIG9hdXRoLWVuY3J5cHRpb24gcGFja2FnZSBtdXN0IGJlIGxvYWRlZCB0byBzZXQgb2F1dGhTZWNyZXRLZXknXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBQYWNrYWdlWydvYXV0aC1lbmNyeXB0aW9uJ10uT0F1dGhFbmNyeXB0aW9uLmxvYWRLZXkoXG4gICAgICAgIG9wdGlvbnMub2F1dGhTZWNyZXRLZXlcbiAgICAgICk7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gICAgICBkZWxldGUgb3B0aW9ucy5vYXV0aFNlY3JldEtleTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBjb25maWcgb3B0aW9ucyBrZXlzXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFWQUxJRF9DT05GSUdfS0VZUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIC8vIFRPRE8gQ29uc2lkZXIganVzdCBsb2dnaW5nIGEgZGVidWcgbWVzc2FnZSBpbnN0ZWFkIHRvIGFsbG93IGZvciBhZGRpdGlvbmFsIGtleXMgaW4gdGhlIHNldHRpbmdzIGhlcmU/XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoYEFjY291bnRzLmNvbmZpZzogSW52YWxpZCBrZXk6ICR7a2V5fWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gc2V0IHZhbHVlcyBpbiBBY2NvdW50cy5fb3B0aW9uc1xuICAgIFZBTElEX0NPTkZJR19LRVlTLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoa2V5IGluIHRoaXMuX29wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoa2V5ICE9PSAnY29sbGVjdGlvbicgJiYgKE1ldGVvci5pc1Rlc3QgJiYga2V5ICE9PSAnY2xpZW50U3RvcmFnZScpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKGBDYW4ndCBzZXQgXFxgJHtrZXl9XFxgIG1vcmUgdGhhbiBvbmNlYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLmNvbGxlY3Rpb24gJiYgb3B0aW9ucy5jb2xsZWN0aW9uICE9PSB0aGlzLnVzZXJzLl9uYW1lICYmIG9wdGlvbnMuY29sbGVjdGlvbiAhPT0gdGhpcy51c2Vycykge1xuICAgICAgdGhpcy51c2VycyA9IHRoaXMuX2luaXRpYWxpemVDb2xsZWN0aW9uKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhZnRlciBhIGxvZ2luIGF0dGVtcHQgc3VjY2VlZHMuXG4gICAqIEBsb2N1cyBBbnl3aGVyZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiBsb2dpbiBpcyBzdWNjZXNzZnVsLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBjYWxsYmFjayByZWNlaXZlcyBhIHNpbmdsZSBvYmplY3QgdGhhdFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRzIGxvZ2luIGRldGFpbHMuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBsb2dpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCB0eXBlIChwYXNzd29yZCwgcmVzdW1lLCBldGMuKSBvbiBib3RoIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudCBhbmQgc2VydmVyLiBgb25Mb2dpbmAgY2FsbGJhY2tzIHJlZ2lzdGVyZWRcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBvbiB0aGUgc2VydmVyIGFsc28gcmVjZWl2ZSBleHRyYSBkYXRhLCBzdWNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgYXMgdXNlciBkZXRhaWxzLCBjb25uZWN0aW9uIGluZm9ybWF0aW9uLCBldGMuXG4gICAqL1xuICBvbkxvZ2luKGZ1bmMpIHtcbiAgICBsZXQgcmV0ID0gdGhpcy5fb25Mb2dpbkhvb2sucmVnaXN0ZXIoZnVuYyk7XG4gICAgLy8gY2FsbCB0aGUganVzdCByZWdpc3RlcmVkIGNhbGxiYWNrIGlmIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgdGhpcy5fc3RhcnR1cENhbGxiYWNrKHJldC5jYWxsYmFjayk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhZnRlciBhIGxvZ2luIGF0dGVtcHQgZmFpbHMuXG4gICAqIEBsb2N1cyBBbnl3aGVyZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGxvZ2luIGhhcyBmYWlsZWQuXG4gICAqL1xuICBvbkxvZ2luRmFpbHVyZShmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uTG9naW5GYWlsdXJlSG9vay5yZWdpc3RlcihmdW5jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhZnRlciBhIGxvZ291dCBhdHRlbXB0IHN1Y2NlZWRzLlxuICAgKiBAbG9jdXMgQW55d2hlcmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gbG9nb3V0IGlzIHN1Y2Nlc3NmdWwuXG4gICAqL1xuICBvbkxvZ291dChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uTG9nb3V0SG9vay5yZWdpc3RlcihmdW5jKTtcbiAgfVxuXG4gIF9pbml0Q29ubmVjdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFNZXRlb3IuaXNDbGllbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgY29ubmVjdGlvbiB1c2VkIGJ5IHRoZSBBY2NvdW50cyBzeXN0ZW0uIFRoaXMgaXMgdGhlIGNvbm5lY3Rpb25cbiAgICAvLyB0aGF0IHdpbGwgZ2V0IGxvZ2dlZCBpbiBieSBNZXRlb3IubG9naW4oKSwgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gY29ubmVjdGlvbiB3aG9zZSBsb2dpbiBzdGF0ZSB3aWxsIGJlIHJlZmxlY3RlZCBieSBNZXRlb3IudXNlcklkKCkuXG4gICAgLy9cbiAgICAvLyBJdCB3b3VsZCBiZSBtdWNoIHByZWZlcmFibGUgZm9yIHRoaXMgdG8gYmUgaW4gYWNjb3VudHNfY2xpZW50LmpzLFxuICAgIC8vIGJ1dCBpdCBoYXMgdG8gYmUgaGVyZSBiZWNhdXNlIGl0J3MgbmVlZGVkIHRvIGNyZWF0ZSB0aGVcbiAgICAvLyBNZXRlb3IudXNlcnMgY29sbGVjdGlvbi5cbiAgICBpZiAob3B0aW9ucy5jb25uZWN0aW9uKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBvcHRpb25zLmNvbm5lY3Rpb247XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRkcFVybCkge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gRERQLmNvbm5lY3Qob3B0aW9ucy5kZHBVcmwpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgX19tZXRlb3JfcnVudGltZV9jb25maWdfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fbWV0ZW9yX3J1bnRpbWVfY29uZmlnX18uQUNDT1VOVFNfQ09OTkVDVElPTl9VUkxcbiAgICApIHtcbiAgICAgIC8vIFRlbXBvcmFyeSwgaW50ZXJuYWwgaG9vayB0byBhbGxvdyB0aGUgc2VydmVyIHRvIHBvaW50IHRoZSBjbGllbnRcbiAgICAgIC8vIHRvIGEgZGlmZmVyZW50IGF1dGhlbnRpY2F0aW9uIHNlcnZlci4gVGhpcyBpcyBmb3IgYSB2ZXJ5XG4gICAgICAvLyBwYXJ0aWN1bGFyIHVzZSBjYXNlIHRoYXQgY29tZXMgdXAgd2hlbiBpbXBsZW1lbnRpbmcgYSBvYXV0aFxuICAgICAgLy8gc2VydmVyLiBVbnN1cHBvcnRlZCBhbmQgbWF5IGdvIGF3YXkgYXQgYW55IHBvaW50IGluIHRpbWUuXG4gICAgICAvL1xuICAgICAgLy8gV2Ugd2lsbCBldmVudHVhbGx5IHByb3ZpZGUgYSBnZW5lcmFsIHdheSB0byB1c2UgYWNjb3VudC1iYXNlXG4gICAgICAvLyBhZ2FpbnN0IGFueSBERFAgY29ubmVjdGlvbiwgbm90IGp1c3Qgb25lIHNwZWNpYWwgb25lLlxuICAgICAgdGhpcy5jb25uZWN0aW9uID0gRERQLmNvbm5lY3QoXG4gICAgICAgIF9fbWV0ZW9yX3J1bnRpbWVfY29uZmlnX18uQUNDT1VOVFNfQ09OTkVDVElPTl9VUkxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IE1ldGVvci5jb25uZWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRUb2tlbkxpZmV0aW1lTXMoKSB7XG4gICAgLy8gV2hlbiBsb2dpbkV4cGlyYXRpb25JbkRheXMgaXMgc2V0IHRvIG51bGwsIHdlJ2xsIHVzZSBhIHJlYWxseSBoaWdoXG4gICAgLy8gbnVtYmVyIG9mIGRheXMgKExPR0lOX1VORVhQSVJBQkxFX1RPS0VOX0RBWVMpIHRvIHNpbXVsYXRlIGFuXG4gICAgLy8gdW5leHBpcmluZyB0b2tlbi5cbiAgICBjb25zdCBsb2dpbkV4cGlyYXRpb25JbkRheXMgPVxuICAgICAgdGhpcy5fb3B0aW9ucy5sb2dpbkV4cGlyYXRpb25JbkRheXMgPT09IG51bGxcbiAgICAgICAgPyBMT0dJTl9VTkVYUElSSU5HX1RPS0VOX0RBWVNcbiAgICAgICAgOiB0aGlzLl9vcHRpb25zLmxvZ2luRXhwaXJhdGlvbkluRGF5cztcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3B0aW9ucy5sb2dpbkV4cGlyYXRpb24gfHxcbiAgICAgIChsb2dpbkV4cGlyYXRpb25JbkRheXMgfHwgREVGQVVMVF9MT0dJTl9FWFBJUkFUSU9OX0RBWVMpICogODY0MDAwMDBcbiAgICApO1xuICB9XG5cbiAgX2dldFBhc3N3b3JkUmVzZXRUb2tlbkxpZmV0aW1lTXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX29wdGlvbnMucGFzc3dvcmRSZXNldFRva2VuRXhwaXJhdGlvbiB8fFxuICAgICAgKHRoaXMuX29wdGlvbnMucGFzc3dvcmRSZXNldFRva2VuRXhwaXJhdGlvbkluRGF5cyB8fFxuICAgICAgICBERUZBVUxUX1BBU1NXT1JEX1JFU0VUX1RPS0VOX0VYUElSQVRJT05fREFZUykgKiA4NjQwMDAwMFxuICAgICk7XG4gIH1cblxuICBfZ2V0UGFzc3dvcmRFbnJvbGxUb2tlbkxpZmV0aW1lTXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX29wdGlvbnMucGFzc3dvcmRFbnJvbGxUb2tlbkV4cGlyYXRpb24gfHxcbiAgICAgICh0aGlzLl9vcHRpb25zLnBhc3N3b3JkRW5yb2xsVG9rZW5FeHBpcmF0aW9uSW5EYXlzIHx8XG4gICAgICAgIERFRkFVTFRfUEFTU1dPUkRfRU5ST0xMX1RPS0VOX0VYUElSQVRJT05fREFZUykgKiA4NjQwMDAwMFxuICAgICk7XG4gIH1cblxuICBfdG9rZW5FeHBpcmF0aW9uKHdoZW4pIHtcbiAgICAvLyBXZSBwYXNzIHdoZW4gdGhyb3VnaCB0aGUgRGF0ZSBjb25zdHJ1Y3RvciBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHk7XG4gICAgLy8gYHdoZW5gIHVzZWQgdG8gYmUgYSBudW1iZXIuXG4gICAgcmV0dXJuIG5ldyBEYXRlKG5ldyBEYXRlKHdoZW4pLmdldFRpbWUoKSArIHRoaXMuX2dldFRva2VuTGlmZXRpbWVNcygpKTtcbiAgfVxuXG4gIF90b2tlbkV4cGlyZXNTb29uKHdoZW4pIHtcbiAgICBsZXQgbWluTGlmZXRpbWVNcyA9IDAuMSAqIHRoaXMuX2dldFRva2VuTGlmZXRpbWVNcygpO1xuICAgIGNvbnN0IG1pbkxpZmV0aW1lQ2FwTXMgPSBNSU5fVE9LRU5fTElGRVRJTUVfQ0FQX1NFQ1MgKiAxMDAwO1xuICAgIGlmIChtaW5MaWZldGltZU1zID4gbWluTGlmZXRpbWVDYXBNcykge1xuICAgICAgbWluTGlmZXRpbWVNcyA9IG1pbkxpZmV0aW1lQ2FwTXM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSgpID4gbmV3IERhdGUod2hlbikgLSBtaW5MaWZldGltZU1zO1xuICB9XG5cbiAgLy8gTm8tb3Agb24gdGhlIHNlcnZlciwgb3ZlcnJpZGRlbiBvbiB0aGUgY2xpZW50LlxuICBfc3RhcnR1cENhbGxiYWNrKGNhbGxiYWNrKSB7fVxufVxuXG4vLyBOb3RlIHRoYXQgQWNjb3VudHMgaXMgZGVmaW5lZCBzZXBhcmF0ZWx5IGluIGFjY291bnRzX2NsaWVudC5qcyBhbmRcbi8vIGFjY291bnRzX3NlcnZlci5qcy5cblxuLyoqXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGN1cnJlbnQgdXNlciBpZCwgb3IgYG51bGxgIGlmIG5vIHVzZXIgaXMgbG9nZ2VkIGluLiBBIHJlYWN0aXZlIGRhdGEgc291cmNlLlxuICogQGxvY3VzIEFueXdoZXJlIGJ1dCBwdWJsaXNoIGZ1bmN0aW9uc1xuICogQGltcG9ydEZyb21QYWNrYWdlIG1ldGVvclxuICovXG5NZXRlb3IudXNlcklkID0gKCkgPT4gQWNjb3VudHMudXNlcklkKCk7XG5cbi8qKlxuICogQHN1bW1hcnkgR2V0IHRoZSBjdXJyZW50IHVzZXIgcmVjb3JkLCBvciBgbnVsbGAgaWYgbm8gdXNlciBpcyBsb2dnZWQgaW4uIEEgcmVhY3RpdmUgZGF0YSBzb3VyY2UuXG4gKiBAbG9jdXMgQW55d2hlcmUgYnV0IHB1Ymxpc2ggZnVuY3Rpb25zXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgbWV0ZW9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge01vbmdvRmllbGRTcGVjaWZpZXJ9IG9wdGlvbnMuZmllbGRzIERpY3Rpb25hcnkgb2YgZmllbGRzIHRvIHJldHVybiBvciBleGNsdWRlLlxuICovXG5NZXRlb3IudXNlciA9IG9wdGlvbnMgPT4gQWNjb3VudHMudXNlcihvcHRpb25zKTtcblxuLyoqXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGN1cnJlbnQgdXNlciByZWNvcmQsIG9yIGBudWxsYCBpZiBubyB1c2VyIGlzIGxvZ2dlZCBpbi4gQSByZWFjdGl2ZSBkYXRhIHNvdXJjZS5cbiAqIEBsb2N1cyBBbnl3aGVyZSBidXQgcHVibGlzaCBmdW5jdGlvbnNcbiAqIEBpbXBvcnRGcm9tUGFja2FnZSBtZXRlb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7TW9uZ29GaWVsZFNwZWNpZmllcn0gb3B0aW9ucy5maWVsZHMgRGljdGlvbmFyeSBvZiBmaWVsZHMgdG8gcmV0dXJuIG9yIGV4Y2x1ZGUuXG4gKi9cbk1ldGVvci51c2VyQXN5bmMgPSBvcHRpb25zID0+IEFjY291bnRzLnVzZXJBc3luYyhvcHRpb25zKTtcblxuLy8gaG93IGxvbmcgKGluIGRheXMpIHVudGlsIGEgbG9naW4gdG9rZW4gZXhwaXJlc1xuY29uc3QgREVGQVVMVF9MT0dJTl9FWFBJUkFUSU9OX0RBWVMgPSA5MDtcbi8vIGhvdyBsb25nIChpbiBkYXlzKSB1bnRpbCByZXNldCBwYXNzd29yZCB0b2tlbiBleHBpcmVzXG5jb25zdCBERUZBVUxUX1BBU1NXT1JEX1JFU0VUX1RPS0VOX0VYUElSQVRJT05fREFZUyA9IDM7XG4vLyBob3cgbG9uZyAoaW4gZGF5cykgdW50aWwgZW5yb2wgcGFzc3dvcmQgdG9rZW4gZXhwaXJlc1xuY29uc3QgREVGQVVMVF9QQVNTV09SRF9FTlJPTExfVE9LRU5fRVhQSVJBVElPTl9EQVlTID0gMzA7XG4vLyBDbGllbnRzIGRvbid0IHRyeSB0byBhdXRvLWxvZ2luIHdpdGggYSB0b2tlbiB0aGF0IGlzIGdvaW5nIHRvIGV4cGlyZSB3aXRoaW5cbi8vIC4xICogREVGQVVMVF9MT0dJTl9FWFBJUkFUSU9OX0RBWVMsIGNhcHBlZCBhdCBNSU5fVE9LRU5fTElGRVRJTUVfQ0FQX1NFQ1MuXG4vLyBUcmllcyB0byBhdm9pZCBhYnJ1cHQgZGlzY29ubmVjdHMgZnJvbSBleHBpcmluZyB0b2tlbnMuXG5jb25zdCBNSU5fVE9LRU5fTElGRVRJTUVfQ0FQX1NFQ1MgPSAzNjAwOyAvLyBvbmUgaG91clxuLy8gaG93IG9mdGVuIChpbiBtaWxsaXNlY29uZHMpIHdlIGNoZWNrIGZvciBleHBpcmVkIHRva2Vuc1xuZXhwb3J0IGNvbnN0IEVYUElSRV9UT0tFTlNfSU5URVJWQUxfTVMgPSA2MDAgKiAxMDAwOyAvLyAxMCBtaW51dGVzXG4vLyBBIGxhcmdlIG51bWJlciBvZiBleHBpcmF0aW9uIGRheXMgKGFwcHJveGltYXRlbHkgMTAwIHllYXJzIHdvcnRoKSB0aGF0IGlzXG4vLyB1c2VkIHdoZW4gY3JlYXRpbmcgdW5leHBpcmluZyB0b2tlbnMuXG5jb25zdCBMT0dJTl9VTkVYUElSSU5HX1RPS0VOX0RBWVMgPSAzNjUgKiAxMDA7XG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJ1xuaW1wb3J0IHtcbiAgQWNjb3VudHNDb21tb24sXG4gIEVYUElSRV9UT0tFTlNfSU5URVJWQUxfTVMsXG59IGZyb20gJy4vYWNjb3VudHNfY29tbW9uLmpzJztcbmltcG9ydCB7IFVSTCB9IGZyb20gJ21ldGVvci91cmwnO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vLyBYWFggbWF5YmUgdGhpcyBiZWxvbmdzIGluIHRoZSBjaGVjayBwYWNrYWdlXG5jb25zdCBOb25FbXB0eVN0cmluZyA9IE1hdGNoLldoZXJlKHggPT4ge1xuICBjaGVjayh4LCBTdHJpbmcpO1xuICByZXR1cm4geC5sZW5ndGggPiAwO1xufSk7XG5cbi8qKlxuICogQHN1bW1hcnkgQ29uc3RydWN0b3IgZm9yIHRoZSBgQWNjb3VudHNgIG5hbWVzcGFjZSBvbiB0aGUgc2VydmVyLlxuICogQGxvY3VzIFNlcnZlclxuICogQGNsYXNzIEFjY291bnRzU2VydmVyXG4gKiBAZXh0ZW5kcyBBY2NvdW50c0NvbW1vblxuICogQGluc3RhbmNlbmFtZSBhY2NvdW50c1NlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlcnZlciBBIHNlcnZlciBvYmplY3Qgc3VjaCBhcyBgTWV0ZW9yLnNlcnZlcmAuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50c1NlcnZlciBleHRlbmRzIEFjY291bnRzQ29tbW9uIHtcbiAgLy8gTm90ZSB0aGF0IHRoaXMgY29uc3RydWN0b3IgaXMgbGVzcyBsaWtlbHkgdG8gYmUgaW5zdGFudGlhdGVkIG11bHRpcGxlXG4gIC8vIHRpbWVzIHRoYW4gdGhlIGBBY2NvdW50c0NsaWVudGAgY29uc3RydWN0b3IsIGJlY2F1c2UgYSBzaW5nbGUgc2VydmVyXG4gIC8vIGNhbiBwcm92aWRlIG9ubHkgb25lIHNldCBvZiBtZXRob2RzLlxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zIHx8IHt9KTtcblxuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlciB8fCBNZXRlb3Iuc2VydmVyO1xuICAgIC8vIFNldCB1cCB0aGUgc2VydmVyJ3MgbWV0aG9kcywgYXMgaWYgYnkgY2FsbGluZyBNZXRlb3IubWV0aG9kcy5cbiAgICB0aGlzLl9pbml0U2VydmVyTWV0aG9kcygpO1xuXG4gICAgdGhpcy5faW5pdEFjY291bnREYXRhSG9va3MoKTtcblxuICAgIC8vIElmIGF1dG9wdWJsaXNoIGlzIG9uLCBwdWJsaXNoIHRoZXNlIHVzZXIgZmllbGRzLiBMb2dpbiBzZXJ2aWNlXG4gICAgLy8gcGFja2FnZXMgKGVnIGFjY291bnRzLWdvb2dsZSkgYWRkIHRvIHRoZXNlIGJ5IGNhbGxpbmdcbiAgICAvLyBhZGRBdXRvcHVibGlzaEZpZWxkcy4gIE5vdGFibHksIHRoaXMgaXNuJ3QgaW1wbGVtZW50ZWQgd2l0aCBtdWx0aXBsZVxuICAgIC8vIHB1Ymxpc2hlcyBzaW5jZSBERFAgb25seSBtZXJnZXMgb25seSBhY3Jvc3MgdG9wLWxldmVsIGZpZWxkcywgbm90XG4gICAgLy8gc3ViZmllbGRzIChzdWNoIGFzICdzZXJ2aWNlcy5mYWNlYm9vay5hY2Nlc3NUb2tlbicpXG4gICAgdGhpcy5fYXV0b3B1Ymxpc2hGaWVsZHMgPSB7XG4gICAgICBsb2dnZWRJblVzZXI6IFsncHJvZmlsZScsICd1c2VybmFtZScsICdlbWFpbHMnXSxcbiAgICAgIG90aGVyVXNlcnM6IFsncHJvZmlsZScsICd1c2VybmFtZSddXG4gICAgfTtcblxuICAgIC8vIHVzZSBvYmplY3QgdG8ga2VlcCB0aGUgcmVmZXJlbmNlIHdoZW4gdXNlZCBpbiBmdW5jdGlvbnNcbiAgICAvLyB3aGVyZSBfZGVmYXVsdFB1Ymxpc2hGaWVsZHMgaXMgZGVzdHJ1Y3R1cmVkIGludG8gbGV4aWNhbCBzY29wZVxuICAgIC8vIGZvciBwdWJsaXNoIGNhbGxiYWNrcyB0aGF0IG5lZWQgYHRoaXNgXG4gICAgdGhpcy5fZGVmYXVsdFB1Ymxpc2hGaWVsZHMgPSB7XG4gICAgICBwcm9qZWN0aW9uOiB7XG4gICAgICAgIHByb2ZpbGU6IDEsXG4gICAgICAgIHVzZXJuYW1lOiAxLFxuICAgICAgICBlbWFpbHM6IDEsXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2luaXRTZXJ2ZXJQdWJsaWNhdGlvbnMoKTtcblxuICAgIC8vIGNvbm5lY3Rpb25JZCAtPiB7Y29ubmVjdGlvbiwgbG9naW5Ub2tlbn1cbiAgICB0aGlzLl9hY2NvdW50RGF0YSA9IHt9O1xuXG4gICAgLy8gY29ubmVjdGlvbiBpZCAtPiBvYnNlcnZlIGhhbmRsZSBmb3IgdGhlIGxvZ2luIHRva2VuIHRoYXQgdGhpcyBjb25uZWN0aW9uIGlzXG4gICAgLy8gY3VycmVudGx5IGFzc29jaWF0ZWQgd2l0aCwgb3IgYSBudW1iZXIuIFRoZSBudW1iZXIgaW5kaWNhdGVzIHRoYXQgd2UgYXJlIGluXG4gICAgLy8gdGhlIHByb2Nlc3Mgb2Ygc2V0dGluZyB1cCB0aGUgb2JzZXJ2ZSAodXNpbmcgYSBudW1iZXIgaW5zdGVhZCBvZiBhIHNpbmdsZVxuICAgIC8vIHNlbnRpbmVsIGFsbG93cyBtdWx0aXBsZSBhdHRlbXB0cyB0byBzZXQgdXAgdGhlIG9ic2VydmUgdG8gaWRlbnRpZnkgd2hpY2hcbiAgICAvLyBvbmUgd2FzIHRoZWlycykuXG4gICAgdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnMgPSB7fTtcbiAgICB0aGlzLl9uZXh0VXNlck9ic2VydmVOdW1iZXIgPSAxOyAgLy8gZm9yIHRoZSBudW1iZXIgZGVzY3JpYmVkIGFib3ZlLlxuXG4gICAgLy8gbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCBoYW5kbGVycy5cbiAgICB0aGlzLl9sb2dpbkhhbmRsZXJzID0gW107XG5cbiAgICBzZXR1cFVzZXJzQ29sbGVjdGlvbih0aGlzLnVzZXJzKTtcbiAgICBzZXR1cERlZmF1bHRMb2dpbkhhbmRsZXJzKHRoaXMpO1xuICAgIHNldEV4cGlyZVRva2Vuc0ludGVydmFsKHRoaXMpO1xuXG4gICAgdGhpcy5fdmFsaWRhdGVMb2dpbkhvb2sgPSBuZXcgSG9vayh7IGJpbmRFbnZpcm9ubWVudDogZmFsc2UgfSk7XG4gICAgdGhpcy5fdmFsaWRhdGVOZXdVc2VySG9va3MgPSBbXG4gICAgICBkZWZhdWx0VmFsaWRhdGVOZXdVc2VySG9vay5iaW5kKHRoaXMpXG4gICAgXTtcblxuICAgIHRoaXMuX2RlbGV0ZVNhdmVkVG9rZW5zRm9yQWxsVXNlcnNPblN0YXJ0dXAoKTtcblxuICAgIHRoaXMuX3NraXBDYXNlSW5zZW5zaXRpdmVDaGVja3NGb3JUZXN0ID0ge307XG5cbiAgICB0aGlzLnVybHMgPSB7XG4gICAgICByZXNldFBhc3N3b3JkOiAodG9rZW4sIGV4dHJhUGFyYW1zKSA9PiB0aGlzLmJ1aWxkRW1haWxVcmwoYCMvcmVzZXQtcGFzc3dvcmQvJHt0b2tlbn1gLCBleHRyYVBhcmFtcyksXG4gICAgICB2ZXJpZnlFbWFpbDogKHRva2VuLCBleHRyYVBhcmFtcykgPT4gdGhpcy5idWlsZEVtYWlsVXJsKGAjL3ZlcmlmeS1lbWFpbC8ke3Rva2VufWAsIGV4dHJhUGFyYW1zKSxcbiAgICAgIGxvZ2luVG9rZW46IChzZWxlY3RvciwgdG9rZW4sIGV4dHJhUGFyYW1zKSA9PlxuICAgICAgICB0aGlzLmJ1aWxkRW1haWxVcmwoYC8/bG9naW5Ub2tlbj0ke3Rva2VufSZzZWxlY3Rvcj0ke3NlbGVjdG9yfWAsIGV4dHJhUGFyYW1zKSxcbiAgICAgIGVucm9sbEFjY291bnQ6ICh0b2tlbiwgZXh0cmFQYXJhbXMpID0+IHRoaXMuYnVpbGRFbWFpbFVybChgIy9lbnJvbGwtYWNjb3VudC8ke3Rva2VufWAsIGV4dHJhUGFyYW1zKSxcbiAgICB9O1xuXG4gICAgdGhpcy5hZGREZWZhdWx0UmF0ZUxpbWl0KCk7XG5cbiAgICB0aGlzLmJ1aWxkRW1haWxVcmwgPSAocGF0aCwgZXh0cmFQYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChNZXRlb3IuYWJzb2x1dGVVcmwocGF0aCkpO1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmVudHJpZXMoZXh0cmFQYXJhbXMpO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIEFkZCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gdGhlIHVybFxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMpIHtcbiAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICAgIH07XG4gIH1cblxuICAvLy9cbiAgLy8vIENVUlJFTlQgVVNFUlxuICAvLy9cblxuICAvLyBAb3ZlcnJpZGUgb2YgXCJhYnN0cmFjdFwiIG5vbi1pbXBsZW1lbnRhdGlvbiBpbiBhY2NvdW50c19jb21tb24uanNcbiAgdXNlcklkKCkge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gb25seSB3b3JrcyBpZiBjYWxsZWQgaW5zaWRlIGEgbWV0aG9kIG9yIGEgcHViaWNhdGlvbi5cbiAgICAvLyBVc2luZyBhbnkgb2YgdGhlIGluZm9ybWF0aW9uIGZyb20gTWV0ZW9yLnVzZXIoKSBpbiBhIG1ldGhvZCBvclxuICAgIC8vIHB1Ymxpc2ggZnVuY3Rpb24gd2lsbCBhbHdheXMgdXNlIHRoZSB2YWx1ZSBmcm9tIHdoZW4gdGhlIGZ1bmN0aW9uIGZpcnN0XG4gICAgLy8gcnVucy4gVGhpcyBpcyBsaWtlbHkgbm90IHdoYXQgdGhlIHVzZXIgZXhwZWN0cy4gVGhlIHdheSB0byBtYWtlIHRoaXMgd29ya1xuICAgIC8vIGluIGEgbWV0aG9kIG9yIHB1Ymxpc2ggZnVuY3Rpb24gaXMgdG8gZG8gTWV0ZW9yLmZpbmQodGhpcy51c2VySWQpLm9ic2VydmVcbiAgICAvLyBhbmQgcmVjb21wdXRlIHdoZW4gdGhlIHVzZXIgcmVjb3JkIGNoYW5nZXMuXG4gICAgY29uc3QgY3VycmVudEludm9jYXRpb24gPSBERFAuX0N1cnJlbnRNZXRob2RJbnZvY2F0aW9uLmdldCgpIHx8IEREUC5fQ3VycmVudFB1YmxpY2F0aW9uSW52b2NhdGlvbi5nZXQoKTtcbiAgICBpZiAoIWN1cnJlbnRJbnZvY2F0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0ZW9yLnVzZXJJZCBjYW4gb25seSBiZSBpbnZva2VkIGluIG1ldGhvZCBjYWxscyBvciBwdWJsaWNhdGlvbnMuXCIpO1xuICAgIHJldHVybiBjdXJyZW50SW52b2NhdGlvbi51c2VySWQ7XG4gIH1cblxuICAvLy9cbiAgLy8vIExPR0lOIEhPT0tTXG4gIC8vL1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBWYWxpZGF0ZSBsb2dpbiBhdHRlbXB0cy5cbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIENhbGxlZCB3aGVuZXZlciBhIGxvZ2luIGlzIGF0dGVtcHRlZCAoZWl0aGVyIHN1Y2Nlc3NmdWwgb3IgdW5zdWNjZXNzZnVsKS4gIEEgbG9naW4gY2FuIGJlIGFib3J0ZWQgYnkgcmV0dXJuaW5nIGEgZmFsc3kgdmFsdWUgb3IgdGhyb3dpbmcgYW4gZXhjZXB0aW9uLlxuICAgKi9cbiAgdmFsaWRhdGVMb2dpbkF0dGVtcHQoZnVuYykge1xuICAgIC8vIEV4Y2VwdGlvbnMgaW5zaWRlIHRoZSBob29rIGNhbGxiYWNrIGFyZSBwYXNzZWQgdXAgdG8gdXMuXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlTG9naW5Ib29rLnJlZ2lzdGVyKGZ1bmMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IFNldCByZXN0cmljdGlvbnMgb24gbmV3IHVzZXIgY3JlYXRpb24uXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdXNlciBpcyBjcmVhdGVkLiBUYWtlcyB0aGUgbmV3IHVzZXIgb2JqZWN0LCBhbmQgcmV0dXJucyB0cnVlIHRvIGFsbG93IHRoZSBjcmVhdGlvbiBvciBmYWxzZSB0byBhYm9ydC5cbiAgICovXG4gIHZhbGlkYXRlTmV3VXNlcihmdW5jKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVOZXdVc2VySG9va3MucHVzaChmdW5jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBWYWxpZGF0ZSBsb2dpbiBmcm9tIGV4dGVybmFsIHNlcnZpY2VcbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIENhbGxlZCB3aGVuZXZlciBsb2dpbi91c2VyIGNyZWF0aW9uIGZyb20gZXh0ZXJuYWwgc2VydmljZSBpcyBhdHRlbXB0ZWQuIExvZ2luIG9yIHVzZXIgY3JlYXRpb24gYmFzZWQgb24gdGhpcyBsb2dpbiBjYW4gYmUgYWJvcnRlZCBieSBwYXNzaW5nIGEgZmFsc3kgdmFsdWUgb3IgdGhyb3dpbmcgYW4gZXhjZXB0aW9uLlxuICAgKi9cbiAgYmVmb3JlRXh0ZXJuYWxMb2dpbihmdW5jKSB7XG4gICAgaWYgKHRoaXMuX2JlZm9yZUV4dGVybmFsTG9naW5Ib29rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSBjYWxsIGJlZm9yZUV4dGVybmFsTG9naW4gb25jZVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9iZWZvcmVFeHRlcm5hbExvZ2luSG9vayA9IGZ1bmM7XG4gIH1cblxuICAvLy9cbiAgLy8vIENSRUFURSBVU0VSIEhPT0tTXG4gIC8vL1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBDdXN0b21pemUgbG9naW4gdG9rZW4gY3JlYXRpb24uXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgdG9rZW4gaXMgY3JlYXRlZC5cbiAgICogUmV0dXJuIHRoZSBzZXF1ZW5jZSBhbmQgdGhlIHVzZXIgb2JqZWN0LiBSZXR1cm4gdHJ1ZSB0byBrZWVwIHNlbmRpbmcgdGhlIGRlZmF1bHQgZW1haWwsIG9yIGZhbHNlIHRvIG92ZXJyaWRlIHRoZSBiZWhhdmlvci5cbiAgICovXG4gIG9uQ3JlYXRlTG9naW5Ub2tlbiA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICBpZiAodGhpcy5fb25DcmVhdGVMb2dpblRva2VuSG9vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBjYWxsIG9uQ3JlYXRlTG9naW5Ub2tlbiBvbmNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DcmVhdGVMb2dpblRva2VuSG9vayA9IGZ1bmM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEN1c3RvbWl6ZSBuZXcgdXNlciBjcmVhdGlvbi5cbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIENhbGxlZCB3aGVuZXZlciBhIG5ldyB1c2VyIGlzIGNyZWF0ZWQuIFJldHVybiB0aGUgbmV3IHVzZXIgb2JqZWN0LCBvciB0aHJvdyBhbiBgRXJyb3JgIHRvIGFib3J0IHRoZSBjcmVhdGlvbi5cbiAgICovXG4gIG9uQ3JlYXRlVXNlcihmdW5jKSB7XG4gICAgaWYgKHRoaXMuX29uQ3JlYXRlVXNlckhvb2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IGNhbGwgb25DcmVhdGVVc2VyIG9uY2VcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DcmVhdGVVc2VySG9vayA9IE1ldGVvci53cmFwRm4oZnVuYyk7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgQ3VzdG9taXplIG9hdXRoIHVzZXIgcHJvZmlsZSB1cGRhdGVzXG4gICAqIEBsb2N1cyBTZXJ2ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBDYWxsZWQgd2hlbmV2ZXIgYSB1c2VyIGlzIGxvZ2dlZCBpbiB2aWEgb2F1dGguIFJldHVybiB0aGUgcHJvZmlsZSBvYmplY3QgdG8gYmUgbWVyZ2VkLCBvciB0aHJvdyBhbiBgRXJyb3JgIHRvIGFib3J0IHRoZSBjcmVhdGlvbi5cbiAgICovXG4gIG9uRXh0ZXJuYWxMb2dpbihmdW5jKSB7XG4gICAgaWYgKHRoaXMuX29uRXh0ZXJuYWxMb2dpbkhvb2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IGNhbGwgb25FeHRlcm5hbExvZ2luIG9uY2VcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fb25FeHRlcm5hbExvZ2luSG9vayA9IGZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogQHN1bW1hcnkgQ3VzdG9taXplIHVzZXIgc2VsZWN0aW9uIG9uIGV4dGVybmFsIGxvZ2luc1xuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgQ2FsbGVkIHdoZW5ldmVyIGEgdXNlciBpcyBsb2dnZWQgaW4gdmlhIG9hdXRoIGFuZCBhXG4gICAqIHVzZXIgaXMgbm90IGZvdW5kIHdpdGggdGhlIHNlcnZpY2UgaWQuIFJldHVybiB0aGUgdXNlciBvciB1bmRlZmluZWQuXG4gICAqL1xuICBzZXRBZGRpdGlvbmFsRmluZFVzZXJPbkV4dGVybmFsTG9naW4oZnVuYykge1xuICAgIGlmICh0aGlzLl9hZGRpdGlvbmFsRmluZFVzZXJPbkV4dGVybmFsTG9naW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IGNhbGwgc2V0QWRkaXRpb25hbEZpbmRVc2VyT25FeHRlcm5hbExvZ2luIG9uY2VcIik7XG4gICAgfVxuICAgIHRoaXMuX2FkZGl0aW9uYWxGaW5kVXNlck9uRXh0ZXJuYWxMb2dpbiA9IGZ1bmM7XG4gIH1cblxuICBfdmFsaWRhdGVMb2dpbihjb25uZWN0aW9uLCBhdHRlbXB0KSB7XG4gICAgdGhpcy5fdmFsaWRhdGVMb2dpbkhvb2suZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gY2FsbGJhY2soY2xvbmVBdHRlbXB0V2l0aENvbm5lY3Rpb24oY29ubmVjdGlvbiwgYXR0ZW1wdCkpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgYXR0ZW1wdC5hbGxvd2VkID0gZmFsc2U7XG4gICAgICAgIC8vIFhYWCB0aGlzIG1lYW5zIHRoZSBsYXN0IHRocm93biBlcnJvciBvdmVycmlkZXMgcHJldmlvdXMgZXJyb3JcbiAgICAgICAgLy8gbWVzc2FnZXMuIE1heWJlIHRoaXMgaXMgc3VycHJpc2luZyB0byB1c2VycyBhbmQgd2Ugc2hvdWxkIG1ha2VcbiAgICAgICAgLy8gb3ZlcnJpZGluZyBlcnJvcnMgbW9yZSBleHBsaWNpdC4gKHNlZVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWV0ZW9yL21ldGVvci9pc3N1ZXMvMTk2MClcbiAgICAgICAgYXR0ZW1wdC5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCEgcmV0KSB7XG4gICAgICAgIGF0dGVtcHQuYWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAvLyBkb24ndCBvdmVycmlkZSBhIHNwZWNpZmljIGVycm9yIHByb3ZpZGVkIGJ5IGEgcHJldmlvdXNcbiAgICAgICAgLy8gdmFsaWRhdG9yIG9yIHRoZSBpbml0aWFsIGF0dGVtcHQgKGVnIFwiaW5jb3JyZWN0IHBhc3N3b3JkXCIpLlxuICAgICAgICBpZiAoIWF0dGVtcHQuZXJyb3IpXG4gICAgICAgICAgYXR0ZW1wdC5lcnJvciA9IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIkxvZ2luIGZvcmJpZGRlblwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zdWNjZXNzZnVsTG9naW4oY29ubmVjdGlvbiwgYXR0ZW1wdCkge1xuICAgIHRoaXMuX29uTG9naW5Ib29rLmVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgY2FsbGJhY2soY2xvbmVBdHRlbXB0V2l0aENvbm5lY3Rpb24oY29ubmVjdGlvbiwgYXR0ZW1wdCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgX2ZhaWxlZExvZ2luKGNvbm5lY3Rpb24sIGF0dGVtcHQpIHtcbiAgICB0aGlzLl9vbkxvZ2luRmFpbHVyZUhvb2suZWFjaChjYWxsYmFjayA9PiB7XG4gICAgICBjYWxsYmFjayhjbG9uZUF0dGVtcHRXaXRoQ29ubmVjdGlvbihjb25uZWN0aW9uLCBhdHRlbXB0KSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICBfc3VjY2Vzc2Z1bExvZ291dChjb25uZWN0aW9uLCB1c2VySWQpIHtcbiAgICAvLyBkb24ndCBmZXRjaCB0aGUgdXNlciBvYmplY3QgdW5sZXNzIHRoZXJlIGFyZSBzb21lIGNhbGxiYWNrcyByZWdpc3RlcmVkXG4gICAgbGV0IHVzZXI7XG4gICAgdGhpcy5fb25Mb2dvdXRIb29rLmVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgaWYgKCF1c2VyICYmIHVzZXJJZCkgdXNlciA9IHRoaXMudXNlcnMuZmluZE9uZSh1c2VySWQsIHtmaWVsZHM6IHRoaXMuX29wdGlvbnMuZGVmYXVsdEZpZWxkU2VsZWN0b3J9KTtcbiAgICAgIGNhbGxiYWNrKHsgdXNlciwgY29ubmVjdGlvbiB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlcyBhIE1vbmdvREIgc2VsZWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGEgZmFzdCBjYXNlXG4gIC8vIGluc2Vuc2l0aXZlIGxvb2t1cCBmb3IgdGhlIGdpdmVuIGZpZWxkTmFtZSBhbmQgc3RyaW5nLiBTaW5jZSBNb25nb0RCIGRvZXNcbiAgLy8gbm90IHN1cHBvcnQgY2FzZSBpbnNlbnNpdGl2ZSBpbmRleGVzLCBhbmQgY2FzZSBpbnNlbnNpdGl2ZSByZWdleCBxdWVyaWVzXG4gIC8vIGFyZSBzbG93LCB3ZSBjb25zdHJ1Y3QgYSBzZXQgb2YgcHJlZml4IHNlbGVjdG9ycyBmb3IgYWxsIHBlcm11dGF0aW9ucyBvZlxuICAvLyB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIG91cnNlbHZlcy4gV2UgZmlyc3QgYXR0ZW1wdCB0byBtYXRjaGluZyBhZ2FpbnN0XG4gIC8vIHRoZXNlLCBhbmQgYmVjYXVzZSAncHJlZml4IGV4cHJlc3Npb24nIHJlZ2V4IHF1ZXJpZXMgZG8gdXNlIGluZGV4ZXMgKHNlZVxuICAvLyBodHRwOi8vZG9jcy5tb25nb2RiLm9yZy92Mi42L3JlZmVyZW5jZS9vcGVyYXRvci9xdWVyeS9yZWdleC8jaW5kZXgtdXNlKSxcbiAgLy8gdGhpcyBoYXMgYmVlbiBmb3VuZCB0byBncmVhdGx5IGltcHJvdmUgcGVyZm9ybWFuY2UgKGZyb20gMTIwMG1zIHRvIDVtcyBpbiBhXG4gIC8vIHRlc3Qgd2l0aCAxLjAwMC4wMDAgdXNlcnMpLlxuICBfc2VsZWN0b3JGb3JGYXN0Q2FzZUluc2Vuc2l0aXZlTG9va3VwID0gKGZpZWxkTmFtZSwgc3RyaW5nKSA9PiB7XG4gICAgLy8gUGVyZm9ybWFuY2Ugc2VlbXMgdG8gaW1wcm92ZSB1cCB0byA0IHByZWZpeCBjaGFyYWN0ZXJzXG4gICAgY29uc3QgcHJlZml4ID0gc3RyaW5nLnN1YnN0cmluZygwLCBNYXRoLm1pbihzdHJpbmcubGVuZ3RoLCA0KSk7XG4gICAgY29uc3Qgb3JDbGF1c2UgPSBnZW5lcmF0ZUNhc2VQZXJtdXRhdGlvbnNGb3JTdHJpbmcocHJlZml4KS5tYXAoXG4gICAgICAgIHByZWZpeFBlcm11dGF0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHt9O1xuICAgICAgICAgIHNlbGVjdG9yW2ZpZWxkTmFtZV0gPVxuICAgICAgICAgICAgICBuZXcgUmVnRXhwKGBeJHtNZXRlb3IuX2VzY2FwZVJlZ0V4cChwcmVmaXhQZXJtdXRhdGlvbil9YCk7XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICB9KTtcbiAgICBjb25zdCBjYXNlSW5zZW5zaXRpdmVDbGF1c2UgPSB7fTtcbiAgICBjYXNlSW5zZW5zaXRpdmVDbGF1c2VbZmllbGROYW1lXSA9XG4gICAgICAgIG5ldyBSZWdFeHAoYF4ke01ldGVvci5fZXNjYXBlUmVnRXhwKHN0cmluZyl9JGAsICdpJylcbiAgICByZXR1cm4geyRhbmQ6IFt7JG9yOiBvckNsYXVzZX0sIGNhc2VJbnNlbnNpdGl2ZUNsYXVzZV19O1xuICB9XG5cbiAgX2ZpbmRVc2VyQnlRdWVyeSA9IChxdWVyeSwgb3B0aW9ucykgPT4ge1xuICAgIGxldCB1c2VyID0gbnVsbDtcblxuICAgIGlmIChxdWVyeS5pZCkge1xuICAgICAgLy8gZGVmYXVsdCBmaWVsZCBzZWxlY3RvciBpcyBhZGRlZCB3aXRoaW4gZ2V0VXNlckJ5SWQoKVxuICAgICAgdXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lKHF1ZXJ5LmlkLCB0aGlzLl9hZGREZWZhdWx0RmllbGRTZWxlY3RvcihvcHRpb25zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLl9hZGREZWZhdWx0RmllbGRTZWxlY3RvcihvcHRpb25zKTtcbiAgICAgIGxldCBmaWVsZE5hbWU7XG4gICAgICBsZXQgZmllbGRWYWx1ZTtcbiAgICAgIGlmIChxdWVyeS51c2VybmFtZSkge1xuICAgICAgICBmaWVsZE5hbWUgPSAndXNlcm5hbWUnO1xuICAgICAgICBmaWVsZFZhbHVlID0gcXVlcnkudXNlcm5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHF1ZXJ5LmVtYWlsKSB7XG4gICAgICAgIGZpZWxkTmFtZSA9ICdlbWFpbHMuYWRkcmVzcyc7XG4gICAgICAgIGZpZWxkVmFsdWUgPSBxdWVyeS5lbWFpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZG4ndCBoYXBwZW4gKHZhbGlkYXRpb24gbWlzc2VkIHNvbWV0aGluZylcIik7XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0b3IgPSB7fTtcbiAgICAgIHNlbGVjdG9yW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgICAgdXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lKHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgICAgIC8vIElmIHVzZXIgaXMgbm90IGZvdW5kLCB0cnkgYSBjYXNlIGluc2Vuc2l0aXZlIGxvb2t1cFxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fc2VsZWN0b3JGb3JGYXN0Q2FzZUluc2Vuc2l0aXZlTG9va3VwKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVVzZXJzID0gTWV0ZW9yLnVzZXJzLmZpbmQoc2VsZWN0b3IsIHsgLi4ub3B0aW9ucywgbGltaXQ6IDIgfSkuZmV0Y2goKTtcbiAgICAgICAgLy8gTm8gbWF0Y2ggaWYgbXVsdGlwbGUgY2FuZGlkYXRlcyBhcmUgZm91bmRcbiAgICAgICAgaWYgKGNhbmRpZGF0ZVVzZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHVzZXIgPSBjYW5kaWRhdGVVc2Vyc1swXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgLy8vXG4gIC8vLyBMT0dJTiBNRVRIT0RTXG4gIC8vL1xuXG4gIC8vIExvZ2luIG1ldGhvZHMgcmV0dXJuIHRvIHRoZSBjbGllbnQgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlc2VcbiAgLy8gZmllbGRzIHdoZW4gdGhlIHVzZXIgd2FzIGxvZ2dlZCBpbiBzdWNjZXNzZnVsbHk6XG4gIC8vXG4gIC8vICAgaWQ6IHVzZXJJZFxuICAvLyAgIHRva2VuOiAqXG4gIC8vICAgdG9rZW5FeHBpcmVzOiAqXG4gIC8vXG4gIC8vIHRva2VuRXhwaXJlcyBpcyBvcHRpb25hbCBhbmQgaW50ZW5kcyB0byBwcm92aWRlIGEgaGludCB0byB0aGVcbiAgLy8gY2xpZW50IGFzIHRvIHdoZW4gdGhlIHRva2VuIHdpbGwgZXhwaXJlLiBJZiBub3QgcHJvdmlkZWQsIHRoZVxuICAvLyBjbGllbnQgd2lsbCBjYWxsIEFjY291bnRzLl90b2tlbkV4cGlyYXRpb24sIHBhc3NpbmcgaXQgdGhlIGRhdGVcbiAgLy8gdGhhdCBpdCByZWNlaXZlZCB0aGUgdG9rZW4uXG4gIC8vXG4gIC8vIFRoZSBsb2dpbiBtZXRob2Qgd2lsbCB0aHJvdyBhbiBlcnJvciBiYWNrIHRvIHRoZSBjbGllbnQgaWYgdGhlIHVzZXJcbiAgLy8gZmFpbGVkIHRvIGxvZyBpbi5cbiAgLy9cbiAgLy9cbiAgLy8gTG9naW4gaGFuZGxlcnMgYW5kIHNlcnZpY2Ugc3BlY2lmaWMgbG9naW4gbWV0aG9kcyBzdWNoIGFzXG4gIC8vIGBjcmVhdGVVc2VyYCBpbnRlcm5hbGx5IHJldHVybiBhIGByZXN1bHRgIG9iamVjdCBjb250YWluaW5nIHRoZXNlXG4gIC8vIGZpZWxkczpcbiAgLy9cbiAgLy8gICB0eXBlOlxuICAvLyAgICAgb3B0aW9uYWwgc3RyaW5nOyB0aGUgc2VydmljZSBuYW1lLCBvdmVycmlkZXMgdGhlIGhhbmRsZXJcbiAgLy8gICAgIGRlZmF1bHQgaWYgcHJlc2VudC5cbiAgLy9cbiAgLy8gICBlcnJvcjpcbiAgLy8gICAgIGV4Y2VwdGlvbjsgaWYgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG8gbG9naW4sIHRoZSByZWFzb24gd2h5LlxuICAvL1xuICAvLyAgIHVzZXJJZDpcbiAgLy8gICAgIHN0cmluZzsgdGhlIHVzZXIgaWQgb2YgdGhlIHVzZXIgYXR0ZW1wdGluZyB0byBsb2dpbiAoaWZcbiAgLy8gICAgIGtub3duKSwgcmVxdWlyZWQgZm9yIGFuIGFsbG93ZWQgbG9naW4uXG4gIC8vXG4gIC8vICAgb3B0aW9uczpcbiAgLy8gICAgIG9wdGlvbmFsIG9iamVjdCBtZXJnZWQgaW50byB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBsb2dpblxuICAvLyAgICAgbWV0aG9kOyB1c2VkIGJ5IEhBTUsgZnJvbSBTUlAuXG4gIC8vXG4gIC8vICAgc3RhbXBlZExvZ2luVG9rZW46XG4gIC8vICAgICBvcHRpb25hbCBvYmplY3Qgd2l0aCBgdG9rZW5gIGFuZCBgd2hlbmAgaW5kaWNhdGluZyB0aGUgbG9naW5cbiAgLy8gICAgIHRva2VuIGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgZGF0YWJhc2UsIHJldHVybmVkIGJ5IHRoZVxuICAvLyAgICAgXCJyZXN1bWVcIiBsb2dpbiBoYW5kbGVyLlxuICAvL1xuICAvLyBGb3IgY29udmVuaWVuY2UsIGxvZ2luIG1ldGhvZHMgY2FuIGFsc28gdGhyb3cgYW4gZXhjZXB0aW9uLCB3aGljaFxuICAvLyBpcyBjb252ZXJ0ZWQgaW50byBhbiB7ZXJyb3J9IHJlc3VsdC4gIEhvd2V2ZXIsIGlmIHRoZSBpZCBvZiB0aGVcbiAgLy8gdXNlciBhdHRlbXB0aW5nIHRoZSBsb2dpbiBpcyBrbm93biwgYSB7dXNlcklkLCBlcnJvcn0gcmVzdWx0IHNob3VsZFxuICAvLyBiZSByZXR1cm5lZCBpbnN0ZWFkIHNpbmNlIHRoZSB1c2VyIGlkIGlzIG5vdCBjYXB0dXJlZCB3aGVuIGFuXG4gIC8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoaXMgaW50ZXJuYWwgYHJlc3VsdGAgb2JqZWN0IGlzIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIGludG8gdGhlXG4gIC8vIHB1YmxpYyB7aWQsIHRva2VuLCB0b2tlbkV4cGlyZXN9IG9iamVjdCByZXR1cm5lZCB0byB0aGUgY2xpZW50LlxuXG4gIC8vIFRyeSBhIGxvZ2luIG1ldGhvZCwgY29udmVydGluZyB0aHJvd24gZXhjZXB0aW9ucyBpbnRvIGFuIHtlcnJvcn1cbiAgLy8gcmVzdWx0LiAgVGhlIGB0eXBlYCBhcmd1bWVudCBpcyBhIGRlZmF1bHQsIGluc2VydGVkIGludG8gdGhlIHJlc3VsdFxuICAvLyBvYmplY3QgaWYgbm90IGV4cGxpY2l0bHkgcmV0dXJuZWQuXG4gIC8vXG4gIC8vIExvZyBpbiBhIHVzZXIgb24gYSBjb25uZWN0aW9uLlxuICAvL1xuICAvLyBXZSB1c2UgdGhlIG1ldGhvZCBpbnZvY2F0aW9uIHRvIHNldCB0aGUgdXNlciBpZCBvbiB0aGUgY29ubmVjdGlvbixcbiAgLy8gbm90IHRoZSBjb25uZWN0aW9uIG9iamVjdCBkaXJlY3RseS4gc2V0VXNlcklkIGlzIHRpZWQgdG8gbWV0aG9kcyB0b1xuICAvLyBlbmZvcmNlIGNsZWFyIG9yZGVyaW5nIG9mIG1ldGhvZCBhcHBsaWNhdGlvbiAodXNpbmcgd2FpdCBtZXRob2RzIG9uXG4gIC8vIHRoZSBjbGllbnQsIGFuZCBhIG5vIHNldFVzZXJJZCBhZnRlciB1bmJsb2NrIHJlc3RyaWN0aW9uIG9uIHRoZVxuICAvLyBzZXJ2ZXIpXG4gIC8vXG4gIC8vIFRoZSBgc3RhbXBlZExvZ2luVG9rZW5gIHBhcmFtZXRlciBpcyBvcHRpb25hbC4gIFdoZW4gcHJlc2VudCwgaXRcbiAgLy8gaW5kaWNhdGVzIHRoYXQgdGhlIGxvZ2luIHRva2VuIGhhcyBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQgaW50byB0aGVcbiAgLy8gZGF0YWJhc2UgYW5kIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnNlcnRlZCBhZ2Fpbi4gIChJdCdzIHVzZWQgYnkgdGhlXG4gIC8vIFwicmVzdW1lXCIgbG9naW4gaGFuZGxlcikuXG4gIF9sb2dpblVzZXIobWV0aG9kSW52b2NhdGlvbiwgdXNlcklkLCBzdGFtcGVkTG9naW5Ub2tlbikge1xuICAgIGlmICghIHN0YW1wZWRMb2dpblRva2VuKSB7XG4gICAgICBzdGFtcGVkTG9naW5Ub2tlbiA9IHRoaXMuX2dlbmVyYXRlU3RhbXBlZExvZ2luVG9rZW4oKTtcbiAgICAgIHRoaXMuX2luc2VydExvZ2luVG9rZW4odXNlcklkLCBzdGFtcGVkTG9naW5Ub2tlbik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBvcmRlciAoYW5kIHRoZSBhdm9pZGFuY2Ugb2YgeWllbGRzKSBpcyBpbXBvcnRhbnQgdG8gbWFrZVxuICAgIC8vIHN1cmUgdGhhdCB3aGVuIHB1Ymxpc2ggZnVuY3Rpb25zIGFyZSByZXJ1biwgdGhleSBzZWUgYVxuICAgIC8vIGNvbnNpc3RlbnQgdmlldyBvZiB0aGUgd29ybGQ6IHRoZSB1c2VySWQgaXMgc2V0IGFuZCBtYXRjaGVzXG4gICAgLy8gdGhlIGxvZ2luIHRva2VuIG9uIHRoZSBjb25uZWN0aW9uIChub3QgdGhhdCB0aGVyZSBpc1xuICAgIC8vIGN1cnJlbnRseSBhIHB1YmxpYyBBUEkgZm9yIHJlYWRpbmcgdGhlIGxvZ2luIHRva2VuIG9uIGFcbiAgICAvLyBjb25uZWN0aW9uKS5cbiAgICBNZXRlb3IuX25vWWllbGRzQWxsb3dlZCgoKSA9PlxuICAgICAgdGhpcy5fc2V0TG9naW5Ub2tlbihcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBtZXRob2RJbnZvY2F0aW9uLmNvbm5lY3Rpb24sXG4gICAgICAgIHRoaXMuX2hhc2hMb2dpblRva2VuKHN0YW1wZWRMb2dpblRva2VuLnRva2VuKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBtZXRob2RJbnZvY2F0aW9uLnNldFVzZXJJZCh1c2VySWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1c2VySWQsXG4gICAgICB0b2tlbjogc3RhbXBlZExvZ2luVG9rZW4udG9rZW4sXG4gICAgICB0b2tlbkV4cGlyZXM6IHRoaXMuX3Rva2VuRXhwaXJhdGlvbihzdGFtcGVkTG9naW5Ub2tlbi53aGVuKVxuICAgIH07XG4gIH07XG5cbiAgLy8gQWZ0ZXIgYSBsb2dpbiBtZXRob2QgaGFzIGNvbXBsZXRlZCwgY2FsbCB0aGUgbG9naW4gaG9va3MuICBOb3RlXG4gIC8vIHRoYXQgYGF0dGVtcHRMb2dpbmAgaXMgY2FsbGVkIGZvciAqYWxsKiBsb2dpbiBhdHRlbXB0cywgZXZlbiBvbmVzXG4gIC8vIHdoaWNoIGFyZW4ndCBzdWNjZXNzZnVsIChzdWNoIGFzIGFuIGludmFsaWQgcGFzc3dvcmQsIGV0YykuXG4gIC8vXG4gIC8vIElmIHRoZSBsb2dpbiBpcyBhbGxvd2VkIGFuZCBpc24ndCBhYm9ydGVkIGJ5IGEgdmFsaWRhdGUgbG9naW4gaG9va1xuICAvLyBjYWxsYmFjaywgbG9nIGluIHRoZSB1c2VyLlxuICAvL1xuICBhc3luYyBfYXR0ZW1wdExvZ2luKFxuICAgIG1ldGhvZEludm9jYXRpb24sXG4gICAgbWV0aG9kTmFtZSxcbiAgICBtZXRob2RBcmdzLFxuICAgIHJlc3VsdFxuICApIHtcbiAgICBpZiAoIXJlc3VsdClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3VsdCBpcyByZXF1aXJlZFwiKTtcblxuICAgIC8vIFhYWCBBIHByb2dyYW1taW5nIGVycm9yIGluIGEgbG9naW4gaGFuZGxlciBjYW4gbGVhZCB0byB0aGlzIG9jY3VycmluZywgYW5kXG4gICAgLy8gdGhlbiB3ZSBkb24ndCBjYWxsIG9uTG9naW4gb3Igb25Mb2dpbkZhaWx1cmUgY2FsbGJhY2tzLiBTaG91bGRcbiAgICAvLyB0cnlMb2dpbk1ldGhvZCBjYXRjaCB0aGlzIGNhc2UgYW5kIHR1cm4gaXQgaW50byBhbiBlcnJvcj9cbiAgICBpZiAoIXJlc3VsdC51c2VySWQgJiYgIXJlc3VsdC5lcnJvcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgbG9naW4gbWV0aG9kIG11c3Qgc3BlY2lmeSBhIHVzZXJJZCBvciBhbiBlcnJvclwiKTtcblxuICAgIGxldCB1c2VyO1xuICAgIGlmIChyZXN1bHQudXNlcklkKVxuICAgICAgdXNlciA9IHRoaXMudXNlcnMuZmluZE9uZShyZXN1bHQudXNlcklkLCB7ZmllbGRzOiB0aGlzLl9vcHRpb25zLmRlZmF1bHRGaWVsZFNlbGVjdG9yfSk7XG5cbiAgICBjb25zdCBhdHRlbXB0ID0ge1xuICAgICAgdHlwZTogcmVzdWx0LnR5cGUgfHwgXCJ1bmtub3duXCIsXG4gICAgICBhbGxvd2VkOiAhISAocmVzdWx0LnVzZXJJZCAmJiAhcmVzdWx0LmVycm9yKSxcbiAgICAgIG1ldGhvZE5hbWU6IG1ldGhvZE5hbWUsXG4gICAgICBtZXRob2RBcmd1bWVudHM6IEFycmF5LmZyb20obWV0aG9kQXJncylcbiAgICB9O1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgIGF0dGVtcHQuZXJyb3IgPSByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGlmICh1c2VyKSB7XG4gICAgICBhdHRlbXB0LnVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIC8vIF92YWxpZGF0ZUxvZ2luIG1heSBtdXRhdGUgYGF0dGVtcHRgIGJ5IGFkZGluZyBhbiBlcnJvciBhbmQgY2hhbmdpbmcgYWxsb3dlZFxuICAgIC8vIHRvIGZhbHNlLCBidXQgdGhhdCdzIHRoZSBvbmx5IGNoYW5nZSBpdCBjYW4gbWFrZSAoYW5kIHRoZSB1c2VyJ3MgY2FsbGJhY2tzXG4gICAgLy8gb25seSBnZXQgYSBjbG9uZSBvZiBgYXR0ZW1wdGApLlxuICAgIHRoaXMuX3ZhbGlkYXRlTG9naW4obWV0aG9kSW52b2NhdGlvbi5jb25uZWN0aW9uLCBhdHRlbXB0KTtcblxuICAgIGlmIChhdHRlbXB0LmFsbG93ZWQpIHtcbiAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgLi4udGhpcy5fbG9naW5Vc2VyKFxuICAgICAgICAgIG1ldGhvZEludm9jYXRpb24sXG4gICAgICAgICAgcmVzdWx0LnVzZXJJZCxcbiAgICAgICAgICByZXN1bHQuc3RhbXBlZExvZ2luVG9rZW5cbiAgICAgICAgKSxcbiAgICAgICAgLi4ucmVzdWx0Lm9wdGlvbnNcbiAgICAgIH07XG4gICAgICByZXQudHlwZSA9IGF0dGVtcHQudHlwZTtcbiAgICAgIHRoaXMuX3N1Y2Nlc3NmdWxMb2dpbihtZXRob2RJbnZvY2F0aW9uLmNvbm5lY3Rpb24sIGF0dGVtcHQpO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9mYWlsZWRMb2dpbihtZXRob2RJbnZvY2F0aW9uLmNvbm5lY3Rpb24sIGF0dGVtcHQpO1xuICAgICAgdGhyb3cgYXR0ZW1wdC5lcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWxsIHNlcnZpY2Ugc3BlY2lmaWMgbG9naW4gbWV0aG9kcyBzaG91bGQgZ28gdGhyb3VnaCB0aGlzIGZ1bmN0aW9uLlxuICAvLyBFbnN1cmUgdGhhdCB0aHJvd24gZXhjZXB0aW9ucyBhcmUgY2F1Z2h0IGFuZCB0aGF0IGxvZ2luIGhvb2tcbiAgLy8gY2FsbGJhY2tzIGFyZSBzdGlsbCBjYWxsZWQuXG4gIC8vXG4gIGFzeW5jIF9sb2dpbk1ldGhvZChcbiAgICBtZXRob2RJbnZvY2F0aW9uLFxuICAgIG1ldGhvZE5hbWUsXG4gICAgbWV0aG9kQXJncyxcbiAgICB0eXBlLFxuICAgIGZuXG4gICkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLl9hdHRlbXB0TG9naW4oXG4gICAgICBtZXRob2RJbnZvY2F0aW9uLFxuICAgICAgbWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZEFyZ3MsXG4gICAgICBhd2FpdCB0cnlMb2dpbk1ldGhvZCh0eXBlLCBmbilcbiAgICApO1xuICB9O1xuXG5cbiAgLy8gUmVwb3J0IGEgbG9naW4gYXR0ZW1wdCBmYWlsZWQgb3V0c2lkZSB0aGUgY29udGV4dCBvZiBhIG5vcm1hbCBsb2dpblxuICAvLyBtZXRob2QuIFRoaXMgaXMgZm9yIHVzZSBpbiB0aGUgY2FzZSB3aGVyZSB0aGVyZSBpcyBhIG11bHRpLXN0ZXAgbG9naW5cbiAgLy8gcHJvY2VkdXJlIChlZyBTUlAgYmFzZWQgcGFzc3dvcmQgbG9naW4pLiBJZiBhIG1ldGhvZCBlYXJseSBpbiB0aGVcbiAgLy8gY2hhaW4gZmFpbHMsIGl0IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gcmVwb3J0IGEgZmFpbHVyZS4gVGhlcmVcbiAgLy8gaXMgbm8gY29ycmVzcG9uZGluZyBtZXRob2QgZm9yIGEgc3VjY2Vzc2Z1bCBsb2dpbjsgbWV0aG9kcyB0aGF0IGNhblxuICAvLyBzdWNjZWVkIGF0IGxvZ2dpbmcgYSB1c2VyIGluIHNob3VsZCBhbHdheXMgYmUgYWN0dWFsIGxvZ2luIG1ldGhvZHNcbiAgLy8gKHVzaW5nIGVpdGhlciBBY2NvdW50cy5fbG9naW5NZXRob2Qgb3IgQWNjb3VudHMucmVnaXN0ZXJMb2dpbkhhbmRsZXIpLlxuICBfcmVwb3J0TG9naW5GYWlsdXJlKFxuICAgIG1ldGhvZEludm9jYXRpb24sXG4gICAgbWV0aG9kTmFtZSxcbiAgICBtZXRob2RBcmdzLFxuICAgIHJlc3VsdFxuICApIHtcbiAgICBjb25zdCBhdHRlbXB0ID0ge1xuICAgICAgdHlwZTogcmVzdWx0LnR5cGUgfHwgXCJ1bmtub3duXCIsXG4gICAgICBhbGxvd2VkOiBmYWxzZSxcbiAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgbWV0aG9kQXJndW1lbnRzOiBBcnJheS5mcm9tKG1ldGhvZEFyZ3MpXG4gICAgfTtcblxuICAgIGlmIChyZXN1bHQudXNlcklkKSB7XG4gICAgICBhdHRlbXB0LnVzZXIgPSB0aGlzLnVzZXJzLmZpbmRPbmUocmVzdWx0LnVzZXJJZCwge2ZpZWxkczogdGhpcy5fb3B0aW9ucy5kZWZhdWx0RmllbGRTZWxlY3Rvcn0pO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbGlkYXRlTG9naW4obWV0aG9kSW52b2NhdGlvbi5jb25uZWN0aW9uLCBhdHRlbXB0KTtcbiAgICB0aGlzLl9mYWlsZWRMb2dpbihtZXRob2RJbnZvY2F0aW9uLmNvbm5lY3Rpb24sIGF0dGVtcHQpO1xuXG4gICAgLy8gX3ZhbGlkYXRlTG9naW4gbWF5IG11dGF0ZSBhdHRlbXB0IHRvIHNldCBhIG5ldyBlcnJvciBtZXNzYWdlLiBSZXR1cm5cbiAgICAvLyB0aGUgbW9kaWZpZWQgdmVyc2lvbi5cbiAgICByZXR1cm4gYXR0ZW1wdDtcbiAgfTtcblxuICAvLy9cbiAgLy8vIExPR0lOIEhBTkRMRVJTXG4gIC8vL1xuXG4gIC8qKlxuICAgKiBAc3VtbWFyeSBSZWdpc3RlcnMgYSBuZXcgbG9naW4gaGFuZGxlci5cbiAgICogQGxvY3VzIFNlcnZlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdIFRoZSB0eXBlIG9mIGxvZ2luIG1ldGhvZCBsaWtlIG9hdXRoLCBwYXNzd29yZCwgZXRjLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhbiBvcHRpb25zIG9iamVjdFxuICAgKiAoYXMgcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBgbG9naW5gIG1ldGhvZCkgYW5kIHJldHVybnMgb25lIG9mXG4gICAqIGB1bmRlZmluZWRgLCBtZWFuaW5nIGRvbid0IGhhbmRsZSBvciBhIGxvZ2luIG1ldGhvZCByZXN1bHQgb2JqZWN0LlxuICAgKi9cbiAgcmVnaXN0ZXJMb2dpbkhhbmRsZXIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghIGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgICAgbmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9naW5IYW5kbGVycy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBoYW5kbGVyOiBNZXRlb3Iud3JhcEZuKGhhbmRsZXIpXG4gICAgfSk7XG4gIH07XG5cblxuICAvLyBDaGVja3MgYSB1c2VyJ3MgY3JlZGVudGlhbHMgYWdhaW5zdCBhbGwgdGhlIHJlZ2lzdGVyZWQgbG9naW5cbiAgLy8gaGFuZGxlcnMsIGFuZCByZXR1cm5zIGEgbG9naW4gdG9rZW4gaWYgdGhlIGNyZWRlbnRpYWxzIGFyZSB2YWxpZC4gSXRcbiAgLy8gaXMgbGlrZSB0aGUgbG9naW4gbWV0aG9kLCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IHNldCB0aGUgbG9nZ2VkLWluXG4gIC8vIHVzZXIgb24gdGhlIGNvbm5lY3Rpb24uIFRocm93cyBhIE1ldGVvci5FcnJvciBpZiBsb2dnaW5nIGluIGZhaWxzLFxuICAvLyBpbmNsdWRpbmcgdGhlIGNhc2Ugd2hlcmUgbm9uZSBvZiB0aGUgbG9naW4gaGFuZGxlcnMgaGFuZGxlZCB0aGUgbG9naW5cbiAgLy8gcmVxdWVzdC4gT3RoZXJ3aXNlLCByZXR1cm5zIHtpZDogdXNlcklkLCB0b2tlbjogKiwgdG9rZW5FeHBpcmVzOiAqfS5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIGxvZ2luIHdpdGggYSBwbGFpbnRleHQgcGFzc3dvcmQsIGBvcHRpb25zYCBjb3VsZCBiZVxuICAvLyAgIHsgdXNlcjogeyB1c2VybmFtZTogPHVzZXJuYW1lPiB9LCBwYXNzd29yZDogPHBhc3N3b3JkPiB9LCBvclxuICAvLyAgIHsgdXNlcjogeyBlbWFpbDogPGVtYWlsPiB9LCBwYXNzd29yZDogPHBhc3N3b3JkPiB9LlxuXG4gIC8vIFRyeSBhbGwgb2YgdGhlIHJlZ2lzdGVyZWQgbG9naW4gaGFuZGxlcnMgdW50aWwgb25lIG9mIHRoZW0gZG9lc24ndFxuICAvLyByZXR1cm4gYHVuZGVmaW5lZGAsIG1lYW5pbmcgaXQgaGFuZGxlZCB0aGlzIGNhbGwgdG8gYGxvZ2luYC4gUmV0dXJuXG4gIC8vIHRoYXQgcmV0dXJuIHZhbHVlLlxuICBhc3luYyBfcnVuTG9naW5IYW5kbGVycyhtZXRob2RJbnZvY2F0aW9uLCBvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLl9sb2dpbkhhbmRsZXJzKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0cnlMb2dpbk1ldGhvZChoYW5kbGVyLm5hbWUsIGFzeW5jICgpID0+XG4gICAgICAgIGF3YWl0IGhhbmRsZXIuaGFuZGxlci5jYWxsKG1ldGhvZEludm9jYXRpb24sIG9wdGlvbnMpXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgICAgIDQwMCxcbiAgICAgICAgICAnQSBsb2dpbiBoYW5kbGVyIHNob3VsZCByZXR1cm4gYSByZXN1bHQgb3IgdW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgZXJyb3I6IG5ldyBNZXRlb3IuRXJyb3IoNDAwLCBcIlVucmVjb2duaXplZCBvcHRpb25zIGZvciBsb2dpbiByZXF1ZXN0XCIpXG4gICAgfTtcbiAgfTtcblxuICAvLyBEZWxldGVzIHRoZSBnaXZlbiBsb2dpblRva2VuIGZyb20gdGhlIGRhdGFiYXNlLlxuICAvL1xuICAvLyBGb3IgbmV3LXN0eWxlIGhhc2hlZCB0b2tlbiwgdGhpcyB3aWxsIGNhdXNlIGFsbCBjb25uZWN0aW9uc1xuICAvLyBhc3NvY2lhdGVkIHdpdGggdGhlIHRva2VuIHRvIGJlIGNsb3NlZC5cbiAgLy9cbiAgLy8gQW55IGNvbm5lY3Rpb25zIGFzc29jaWF0ZWQgd2l0aCBvbGQtc3R5bGUgdW5oYXNoZWQgdG9rZW5zIHdpbGwgYmVcbiAgLy8gaW4gdGhlIHByb2Nlc3Mgb2YgYmVjb21pbmcgYXNzb2NpYXRlZCB3aXRoIGhhc2hlZCB0b2tlbnMgYW5kIHRoZW5cbiAgLy8gdGhleSdsbCBnZXQgY2xvc2VkLlxuICBkZXN0cm95VG9rZW4odXNlcklkLCBsb2dpblRva2VuKSB7XG4gICAgdGhpcy51c2Vycy51cGRhdGUodXNlcklkLCB7XG4gICAgICAkcHVsbDoge1xuICAgICAgICBcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vuc1wiOiB7XG4gICAgICAgICAgJG9yOiBbXG4gICAgICAgICAgICB7IGhhc2hlZFRva2VuOiBsb2dpblRva2VuIH0sXG4gICAgICAgICAgICB7IHRva2VuOiBsb2dpblRva2VuIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfaW5pdFNlcnZlck1ldGhvZHMoKSB7XG4gICAgLy8gVGhlIG1ldGhvZHMgY3JlYXRlZCBpbiB0aGlzIGZ1bmN0aW9uIG5lZWQgdG8gYmUgY3JlYXRlZCBoZXJlIHNvIHRoYXRcbiAgICAvLyB0aGlzIHZhcmlhYmxlIGlzIGF2YWlsYWJsZSBpbiB0aGVpciBzY29wZS5cbiAgICBjb25zdCBhY2NvdW50cyA9IHRoaXM7XG5cblxuICAgIC8vIFRoaXMgb2JqZWN0IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggbWV0aG9kcyBhbmQgdGhlbiBwYXNzZWQgdG9cbiAgICAvLyBhY2NvdW50cy5fc2VydmVyLm1ldGhvZHMgZnVydGhlciBiZWxvdy5cbiAgICBjb25zdCBtZXRob2RzID0ge307XG5cbiAgICAvLyBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgLy8gICBJZiBzdWNjZXNzZnVsLCByZXR1cm5zIHt0b2tlbjogcmVjb25uZWN0VG9rZW4sIGlkOiB1c2VySWR9XG4gICAgLy8gICBJZiB1bnN1Y2Nlc3NmdWwgKGZvciBleGFtcGxlLCBpZiB0aGUgdXNlciBjbG9zZWQgdGhlIG9hdXRoIGxvZ2luIHBvcHVwKSxcbiAgICAvLyAgICAgdGhyb3dzIGFuIGVycm9yIGRlc2NyaWJpbmcgdGhlIHJlYXNvblxuICAgIG1ldGhvZHMubG9naW4gPSBhc3luYyBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgLy8gTG9naW4gaGFuZGxlcnMgc2hvdWxkIHJlYWxseSBhbHNvIGNoZWNrIHdoYXRldmVyIGZpZWxkIHRoZXkgbG9vayBhdCBpblxuICAgICAgLy8gb3B0aW9ucywgYnV0IHdlIGRvbid0IGVuZm9yY2UgaXQuXG4gICAgICBjaGVjayhvcHRpb25zLCBPYmplY3QpO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhY2NvdW50cy5fcnVuTG9naW5IYW5kbGVycyh0aGlzLCBvcHRpb25zKTtcbiAgICAgIC8vY29uc29sZS5sb2coe3Jlc3VsdH0pO1xuXG4gICAgICByZXR1cm4gYXdhaXQgYWNjb3VudHMuX2F0dGVtcHRMb2dpbih0aGlzLCBcImxvZ2luXCIsIGFyZ3VtZW50cywgcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgbWV0aG9kcy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGFjY291bnRzLl9nZXRMb2dpblRva2VuKHRoaXMuY29ubmVjdGlvbi5pZCk7XG4gICAgICBhY2NvdW50cy5fc2V0TG9naW5Ub2tlbih0aGlzLnVzZXJJZCwgdGhpcy5jb25uZWN0aW9uLCBudWxsKTtcbiAgICAgIGlmICh0b2tlbiAmJiB0aGlzLnVzZXJJZCkge1xuICAgICAgICBhY2NvdW50cy5kZXN0cm95VG9rZW4odGhpcy51c2VySWQsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIGFjY291bnRzLl9zdWNjZXNzZnVsTG9nb3V0KHRoaXMuY29ubmVjdGlvbiwgdGhpcy51c2VySWQpO1xuICAgICAgdGhpcy5zZXRVc2VySWQobnVsbCk7XG4gICAgfTtcblxuICAgIC8vIEdlbmVyYXRlcyBhIG5ldyBsb2dpbiB0b2tlbiB3aXRoIHRoZSBzYW1lIGV4cGlyYXRpb24gYXMgdGhlXG4gICAgLy8gY29ubmVjdGlvbidzIGN1cnJlbnQgdG9rZW4gYW5kIHNhdmVzIGl0IHRvIHRoZSBkYXRhYmFzZS4gQXNzb2NpYXRlc1xuICAgIC8vIHRoZSBjb25uZWN0aW9uIHdpdGggdGhpcyBuZXcgdG9rZW4gYW5kIHJldHVybnMgaXQuIFRocm93cyBhbiBlcnJvclxuICAgIC8vIGlmIGNhbGxlZCBvbiBhIGNvbm5lY3Rpb24gdGhhdCBpc24ndCBsb2dnZWQgaW4uXG4gICAgLy9cbiAgICAvLyBAcmV0dXJucyBPYmplY3RcbiAgICAvLyAgIElmIHN1Y2Nlc3NmdWwsIHJldHVybnMgeyB0b2tlbjogPG5ldyB0b2tlbj4sIGlkOiA8dXNlciBpZD4sXG4gICAgLy8gICB0b2tlbkV4cGlyZXM6IDxleHBpcmF0aW9uIGRhdGU+IH0uXG4gICAgbWV0aG9kcy5nZXROZXdUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhY2NvdW50cy51c2Vycy5maW5kT25lKHRoaXMudXNlcklkLCB7XG4gICAgICAgIGZpZWxkczogeyBcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vuc1wiOiAxIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCEgdGhpcy51c2VySWQgfHwgISB1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJZb3UgYXJlIG5vdCBsb2dnZWQgaW4uXCIpO1xuICAgICAgfVxuICAgICAgLy8gQmUgY2FyZWZ1bCBub3QgdG8gZ2VuZXJhdGUgYSBuZXcgdG9rZW4gdGhhdCBoYXMgYSBsYXRlclxuICAgICAgLy8gZXhwaXJhdGlvbiB0aGFuIHRoZSBjdXJyZW4gdG9rZW4uIE90aGVyd2lzZSwgYSBiYWQgZ3V5IHdpdGggYVxuICAgICAgLy8gc3RvbGVuIHRva2VuIGNvdWxkIHVzZSB0aGlzIG1ldGhvZCB0byBzdG9wIGhpcyBzdG9sZW4gdG9rZW4gZnJvbVxuICAgICAgLy8gZXZlciBleHBpcmluZy5cbiAgICAgIGNvbnN0IGN1cnJlbnRIYXNoZWRUb2tlbiA9IGFjY291bnRzLl9nZXRMb2dpblRva2VuKHRoaXMuY29ubmVjdGlvbi5pZCk7XG4gICAgICBjb25zdCBjdXJyZW50U3RhbXBlZFRva2VuID0gdXNlci5zZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuZmluZChcbiAgICAgICAgc3RhbXBlZFRva2VuID0+IHN0YW1wZWRUb2tlbi5oYXNoZWRUb2tlbiA9PT0gY3VycmVudEhhc2hlZFRva2VuXG4gICAgICApO1xuICAgICAgaWYgKCEgY3VycmVudFN0YW1wZWRUb2tlbikgeyAvLyBzYWZldHkgYmVsdDogdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJJbnZhbGlkIGxvZ2luIHRva2VuXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3U3RhbXBlZFRva2VuID0gYWNjb3VudHMuX2dlbmVyYXRlU3RhbXBlZExvZ2luVG9rZW4oKTtcbiAgICAgIG5ld1N0YW1wZWRUb2tlbi53aGVuID0gY3VycmVudFN0YW1wZWRUb2tlbi53aGVuO1xuICAgICAgYWNjb3VudHMuX2luc2VydExvZ2luVG9rZW4odGhpcy51c2VySWQsIG5ld1N0YW1wZWRUb2tlbik7XG4gICAgICByZXR1cm4gYWNjb3VudHMuX2xvZ2luVXNlcih0aGlzLCB0aGlzLnVzZXJJZCwgbmV3U3RhbXBlZFRva2VuKTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBhbGwgdG9rZW5zIGV4Y2VwdCB0aGUgdG9rZW4gYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgLy8gY29ubmVjdGlvbi4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBjb25uZWN0aW9uIGlzIG5vdCBsb2dnZWRcbiAgICAvLyBpbi4gUmV0dXJucyBub3RoaW5nIG9uIHN1Y2Nlc3MuXG4gICAgbWV0aG9kcy5yZW1vdmVPdGhlclRva2VucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghIHRoaXMudXNlcklkKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJZb3UgYXJlIG5vdCBsb2dnZWQgaW4uXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudFRva2VuID0gYWNjb3VudHMuX2dldExvZ2luVG9rZW4odGhpcy5jb25uZWN0aW9uLmlkKTtcbiAgICAgIGFjY291bnRzLnVzZXJzLnVwZGF0ZSh0aGlzLnVzZXJJZCwge1xuICAgICAgICAkcHVsbDoge1xuICAgICAgICAgIFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zXCI6IHsgaGFzaGVkVG9rZW46IHsgJG5lOiBjdXJyZW50VG9rZW4gfSB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBBbGxvdyBhIG9uZS10aW1lIGNvbmZpZ3VyYXRpb24gZm9yIGEgbG9naW4gc2VydmljZS4gTW9kaWZpY2F0aW9uc1xuICAgIC8vIHRvIHRoaXMgY29sbGVjdGlvbiBhcmUgYWxzbyBhbGxvd2VkIGluIGluc2VjdXJlIG1vZGUuXG4gICAgbWV0aG9kcy5jb25maWd1cmVMb2dpblNlcnZpY2UgPSAob3B0aW9ucykgPT4ge1xuICAgICAgY2hlY2sob3B0aW9ucywgTWF0Y2guT2JqZWN0SW5jbHVkaW5nKHtzZXJ2aWNlOiBTdHJpbmd9KSk7XG4gICAgICAvLyBEb24ndCBsZXQgcmFuZG9tIHVzZXJzIGNvbmZpZ3VyZSBhIHNlcnZpY2Ugd2UgaGF2ZW4ndCBhZGRlZCB5ZXQgKHNvXG4gICAgICAvLyB0aGF0IHdoZW4gd2UgZG8gbGF0ZXIgYWRkIGl0LCBpdCdzIHNldCB1cCB3aXRoIHRoZWlyIGNvbmZpZ3VyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2Ygb3VycykuXG4gICAgICAvLyBYWFggaWYgc2VydmljZSBjb25maWd1cmF0aW9uIGlzIG9hdXRoLXNwZWNpZmljIHRoZW4gdGhpcyBjb2RlIHNob3VsZFxuICAgICAgLy8gICAgIGJlIGluIGFjY291bnRzLW9hdXRoOyBpZiBpdCdzIG5vdCB0aGVuIHRoZSByZWdpc3RyeSBzaG91bGQgYmVcbiAgICAgIC8vICAgICBpbiB0aGlzIHBhY2thZ2VcbiAgICAgIGlmICghKGFjY291bnRzLm9hdXRoXG4gICAgICAgICYmIGFjY291bnRzLm9hdXRoLnNlcnZpY2VOYW1lcygpLmluY2x1ZGVzKG9wdGlvbnMuc2VydmljZSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIlNlcnZpY2UgdW5rbm93blwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFBhY2thZ2VbJ3NlcnZpY2UtY29uZmlndXJhdGlvbiddKSB7XG4gICAgICAgIGNvbnN0IHsgU2VydmljZUNvbmZpZ3VyYXRpb24gfSA9IFBhY2thZ2VbJ3NlcnZpY2UtY29uZmlndXJhdGlvbiddO1xuICAgICAgICBpZiAoU2VydmljZUNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbnMuZmluZE9uZSh7c2VydmljZTogb3B0aW9ucy5zZXJ2aWNlfSkpXG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIGBTZXJ2aWNlICR7b3B0aW9ucy5zZXJ2aWNlfSBhbHJlYWR5IGNvbmZpZ3VyZWRgKTtcblxuICAgICAgICBpZiAoUGFja2FnZVtcIm9hdXRoLWVuY3J5cHRpb25cIl0pIHtcbiAgICAgICAgICBjb25zdCB7IE9BdXRoRW5jcnlwdGlvbiB9ID0gUGFja2FnZVtcIm9hdXRoLWVuY3J5cHRpb25cIl1cbiAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgJ3NlY3JldCcpICYmIE9BdXRoRW5jcnlwdGlvbi5rZXlJc0xvYWRlZCgpKVxuICAgICAgICAgICAgb3B0aW9ucy5zZWNyZXQgPSBPQXV0aEVuY3J5cHRpb24uc2VhbChvcHRpb25zLnNlY3JldCk7XG4gICAgICAgIH1cblxuICAgICAgICBTZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy5pbnNlcnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGFjY291bnRzLl9zZXJ2ZXIubWV0aG9kcyhtZXRob2RzKTtcbiAgfTtcblxuICBfaW5pdEFjY291bnREYXRhSG9va3MoKSB7XG4gICAgdGhpcy5fc2VydmVyLm9uQ29ubmVjdGlvbihjb25uZWN0aW9uID0+IHtcbiAgICAgIHRoaXMuX2FjY291bnREYXRhW2Nvbm5lY3Rpb24uaWRdID0ge1xuICAgICAgICBjb25uZWN0aW9uOiBjb25uZWN0aW9uXG4gICAgICB9O1xuXG4gICAgICBjb25uZWN0aW9uLm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW1vdmVUb2tlbkZyb21Db25uZWN0aW9uKGNvbm5lY3Rpb24uaWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fYWNjb3VudERhdGFbY29ubmVjdGlvbi5pZF07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfaW5pdFNlcnZlclB1YmxpY2F0aW9ucygpIHtcbiAgICAvLyBCcmluZyBpbnRvIGxleGljYWwgc2NvcGUgZm9yIHB1Ymxpc2ggY2FsbGJhY2tzIHRoYXQgbmVlZCBgdGhpc2BcbiAgICBjb25zdCB7IHVzZXJzLCBfYXV0b3B1Ymxpc2hGaWVsZHMsIF9kZWZhdWx0UHVibGlzaEZpZWxkcyB9ID0gdGhpcztcblxuICAgIC8vIFB1Ymxpc2ggYWxsIGxvZ2luIHNlcnZpY2UgY29uZmlndXJhdGlvbiBmaWVsZHMgb3RoZXIgdGhhbiBzZWNyZXQuXG4gICAgdGhpcy5fc2VydmVyLnB1Ymxpc2goXCJtZXRlb3IubG9naW5TZXJ2aWNlQ29uZmlndXJhdGlvblwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChQYWNrYWdlWydzZXJ2aWNlLWNvbmZpZ3VyYXRpb24nXSkge1xuICAgICAgICBjb25zdCB7IFNlcnZpY2VDb25maWd1cmF0aW9uIH0gPSBQYWNrYWdlWydzZXJ2aWNlLWNvbmZpZ3VyYXRpb24nXTtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2VDb25maWd1cmF0aW9uLmNvbmZpZ3VyYXRpb25zLmZpbmQoe30sIHtmaWVsZHM6IHtzZWNyZXQ6IDB9fSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlYWR5KCk7XG4gICAgfSwge2lzX2F1dG86IHRydWV9KTsgLy8gbm90IHRlY2huaWNhbGx5IGF1dG9wdWJsaXNoLCBidXQgc3RvcHMgdGhlIHdhcm5pbmcuXG5cbiAgICAvLyBVc2UgTWV0ZW9yLnN0YXJ0dXAgdG8gZ2l2ZSBvdGhlciBwYWNrYWdlcyBhIGNoYW5jZSB0byBjYWxsXG4gICAgLy8gc2V0RGVmYXVsdFB1Ymxpc2hGaWVsZHMuXG4gICAgTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAgICAgLy8gTWVyZ2UgY3VzdG9tIGZpZWxkcyBzZWxlY3RvciBhbmQgZGVmYXVsdCBwdWJsaXNoIGZpZWxkcyBzbyB0aGF0IHRoZSBjbGllbnRcbiAgICAgIC8vIGdldHMgYWxsIHRoZSBuZWNlc3NhcnkgZmllbGRzIHRvIHJ1biBwcm9wZXJseVxuICAgICAgY29uc3QgY3VzdG9tRmllbGRzID0gdGhpcy5fYWRkRGVmYXVsdEZpZWxkU2VsZWN0b3IoKS5maWVsZHMgfHwge307XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3VzdG9tRmllbGRzKTtcbiAgICAgIC8vIElmIHRoZSBjdXN0b20gZmllbGRzIGFyZSBuZWdhdGl2ZSwgdGhlbiBpZ25vcmUgdGhlbSBhbmQgb25seSBzZW5kIHRoZSBuZWNlc3NhcnkgZmllbGRzXG4gICAgICBjb25zdCBmaWVsZHMgPSBrZXlzLmxlbmd0aCA+IDAgJiYgY3VzdG9tRmllbGRzW2tleXNbMF1dID8ge1xuICAgICAgICAuLi50aGlzLl9hZGREZWZhdWx0RmllbGRTZWxlY3RvcigpLmZpZWxkcyxcbiAgICAgICAgLi4uX2RlZmF1bHRQdWJsaXNoRmllbGRzLnByb2plY3Rpb25cbiAgICAgIH0gOiBfZGVmYXVsdFB1Ymxpc2hGaWVsZHMucHJvamVjdGlvblxuICAgICAgLy8gUHVibGlzaCB0aGUgY3VycmVudCB1c2VyJ3MgcmVjb3JkIHRvIHRoZSBjbGllbnQuXG4gICAgICB0aGlzLl9zZXJ2ZXIucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgICAgIHJldHVybiB1c2Vycy5maW5kKHtcbiAgICAgICAgICAgIF9pZDogdGhpcy51c2VySWRcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIC8qc3VwcHJlc3MgYXV0b3B1Ymxpc2ggd2FybmluZyove2lzX2F1dG86IHRydWV9KTtcbiAgICB9KTtcblxuICAgIC8vIFVzZSBNZXRlb3Iuc3RhcnR1cCB0byBnaXZlIG90aGVyIHBhY2thZ2VzIGEgY2hhbmNlIHRvIGNhbGxcbiAgICAvLyBhZGRBdXRvcHVibGlzaEZpZWxkcy5cbiAgICBQYWNrYWdlLmF1dG9wdWJsaXNoICYmIE1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgICAgIC8vIFsncHJvZmlsZScsICd1c2VybmFtZSddIC0+IHtwcm9maWxlOiAxLCB1c2VybmFtZTogMX1cbiAgICAgIGNvbnN0IHRvRmllbGRTZWxlY3RvciA9IGZpZWxkcyA9PiBmaWVsZHMucmVkdWNlKChwcmV2LCBmaWVsZCkgPT4gKFxuICAgICAgICAgIHsgLi4ucHJldiwgW2ZpZWxkXTogMSB9KSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgICB0aGlzLl9zZXJ2ZXIucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgICAgIHJldHVybiB1c2Vycy5maW5kKHsgX2lkOiB0aGlzLnVzZXJJZCB9LCB7XG4gICAgICAgICAgICBmaWVsZHM6IHRvRmllbGRTZWxlY3RvcihfYXV0b3B1Ymxpc2hGaWVsZHMubG9nZ2VkSW5Vc2VyKSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCAvKnN1cHByZXNzIGF1dG9wdWJsaXNoIHdhcm5pbmcqL3tpc19hdXRvOiB0cnVlfSk7XG5cbiAgICAgIC8vIFhYWCB0aGlzIHB1Ymxpc2ggaXMgbmVpdGhlciBkZWR1cC1hYmxlIG5vciBpcyBpdCBvcHRpbWl6ZWQgYnkgb3VyIHNwZWNpYWxcbiAgICAgIC8vIHRyZWF0bWVudCBvZiBxdWVyaWVzIG9uIGEgc3BlY2lmaWMgX2lkLiBUaGVyZWZvcmUgdGhpcyB3aWxsIGhhdmUgTyhuXjIpXG4gICAgICAvLyBydW4tdGltZSBwZXJmb3JtYW5jZSBldmVyeSB0aW1lIGEgdXNlciBkb2N1bWVudCBpcyBjaGFuZ2VkIChlZyBzb21lb25lXG4gICAgICAvLyBsb2dnaW5nIGluKS4gSWYgdGhpcyBpcyBhIHByb2JsZW0sIHdlIGNhbiBpbnN0ZWFkIHdyaXRlIGEgbWFudWFsIHB1Ymxpc2hcbiAgICAgIC8vIGZ1bmN0aW9uIHdoaWNoIGZpbHRlcnMgb3V0IGZpZWxkcyBiYXNlZCBvbiAndGhpcy51c2VySWQnLlxuICAgICAgdGhpcy5fc2VydmVyLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMudXNlcklkID8geyBfaWQ6IHsgJG5lOiB0aGlzLnVzZXJJZCB9IH0gOiB7fTtcbiAgICAgICAgcmV0dXJuIHVzZXJzLmZpbmQoc2VsZWN0b3IsIHtcbiAgICAgICAgICBmaWVsZHM6IHRvRmllbGRTZWxlY3RvcihfYXV0b3B1Ymxpc2hGaWVsZHMub3RoZXJVc2VycyksXG4gICAgICAgIH0pXG4gICAgICB9LCAvKnN1cHByZXNzIGF1dG9wdWJsaXNoIHdhcm5pbmcqL3tpc19hdXRvOiB0cnVlfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkIHRvIHRoZSBsaXN0IG9mIGZpZWxkcyBvciBzdWJmaWVsZHMgdG8gYmUgYXV0b21hdGljYWxseVxuICAvLyBwdWJsaXNoZWQgaWYgYXV0b3B1Ymxpc2ggaXMgb24uIE11c3QgYmUgY2FsbGVkIGZyb20gdG9wLWxldmVsXG4gIC8vIGNvZGUgKGllLCBiZWZvcmUgTWV0ZW9yLnN0YXJ0dXAgaG9va3MgcnVuKS5cbiAgLy9cbiAgLy8gQHBhcmFtIG9wdHMge09iamVjdH0gd2l0aDpcbiAgLy8gICAtIGZvckxvZ2dlZEluVXNlciB7QXJyYXl9IEFycmF5IG9mIGZpZWxkcyBwdWJsaXNoZWQgdG8gdGhlIGxvZ2dlZC1pbiB1c2VyXG4gIC8vICAgLSBmb3JPdGhlclVzZXJzIHtBcnJheX0gQXJyYXkgb2YgZmllbGRzIHB1Ymxpc2hlZCB0byB1c2VycyB0aGF0IGFyZW4ndCBsb2dnZWQgaW5cbiAgYWRkQXV0b3B1Ymxpc2hGaWVsZHMob3B0cykge1xuICAgIHRoaXMuX2F1dG9wdWJsaXNoRmllbGRzLmxvZ2dlZEluVXNlci5wdXNoLmFwcGx5KFxuICAgICAgdGhpcy5fYXV0b3B1Ymxpc2hGaWVsZHMubG9nZ2VkSW5Vc2VyLCBvcHRzLmZvckxvZ2dlZEluVXNlcik7XG4gICAgdGhpcy5fYXV0b3B1Ymxpc2hGaWVsZHMub3RoZXJVc2Vycy5wdXNoLmFwcGx5KFxuICAgICAgdGhpcy5fYXV0b3B1Ymxpc2hGaWVsZHMub3RoZXJVc2Vycywgb3B0cy5mb3JPdGhlclVzZXJzKTtcbiAgfTtcblxuICAvLyBSZXBsYWNlcyB0aGUgZmllbGRzIHRvIGJlIGF1dG9tYXRpY2FsbHlcbiAgLy8gcHVibGlzaGVkIHdoZW4gdGhlIHVzZXIgbG9ncyBpblxuICAvL1xuICAvLyBAcGFyYW0ge01vbmdvRmllbGRTcGVjaWZpZXJ9IGZpZWxkcyBEaWN0aW9uYXJ5IG9mIGZpZWxkcyB0byByZXR1cm4gb3IgZXhjbHVkZS5cbiAgc2V0RGVmYXVsdFB1Ymxpc2hGaWVsZHMoZmllbGRzKSB7XG4gICAgdGhpcy5fZGVmYXVsdFB1Ymxpc2hGaWVsZHMucHJvamVjdGlvbiA9IGZpZWxkcztcbiAgfTtcblxuICAvLy9cbiAgLy8vIEFDQ09VTlQgREFUQVxuICAvLy9cblxuICAvLyBIQUNLOiBUaGlzIGlzIHVzZWQgYnkgJ21ldGVvci1hY2NvdW50cycgdG8gZ2V0IHRoZSBsb2dpblRva2VuIGZvciBhXG4gIC8vIGNvbm5lY3Rpb24uIE1heWJlIHRoZXJlIHNob3VsZCBiZSBhIHB1YmxpYyB3YXkgdG8gZG8gdGhhdC5cbiAgX2dldEFjY291bnREYXRhKGNvbm5lY3Rpb25JZCwgZmllbGQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fYWNjb3VudERhdGFbY29ubmVjdGlvbklkXTtcbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhW2ZpZWxkXTtcbiAgfTtcblxuICBfc2V0QWNjb3VudERhdGEoY29ubmVjdGlvbklkLCBmaWVsZCwgdmFsdWUpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fYWNjb3VudERhdGFbY29ubmVjdGlvbklkXTtcblxuICAgIC8vIHNhZmV0eSBiZWx0LiBzaG91bGRuJ3QgaGFwcGVuLiBhY2NvdW50RGF0YSBpcyBzZXQgaW4gb25Db25uZWN0aW9uLFxuICAgIC8vIHdlIGRvbid0IGhhdmUgYSBjb25uZWN0aW9uSWQgdW50aWwgaXQgaXMgc2V0LlxuICAgIGlmICghZGF0YSlcbiAgICAgIHJldHVybjtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgZGVsZXRlIGRhdGFbZmllbGRdO1xuICAgIGVsc2VcbiAgICAgIGRhdGFbZmllbGRdID0gdmFsdWU7XG4gIH07XG5cbiAgLy8vXG4gIC8vLyBSRUNPTk5FQ1QgVE9LRU5TXG4gIC8vL1xuICAvLy8gc3VwcG9ydCByZWNvbm5lY3RpbmcgdXNpbmcgYSBtZXRlb3IgbG9naW4gdG9rZW5cblxuICBfaGFzaExvZ2luVG9rZW4obG9naW5Ub2tlbikge1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2Jyk7XG4gICAgaGFzaC51cGRhdGUobG9naW5Ub2tlbik7XG4gICAgcmV0dXJuIGhhc2guZGlnZXN0KCdiYXNlNjQnKTtcbiAgfTtcblxuICAvLyB7dG9rZW4sIHdoZW59ID0+IHtoYXNoZWRUb2tlbiwgd2hlbn1cbiAgX2hhc2hTdGFtcGVkVG9rZW4oc3RhbXBlZFRva2VuKSB7XG4gICAgY29uc3QgeyB0b2tlbiwgLi4uaGFzaGVkU3RhbXBlZFRva2VuIH0gPSBzdGFtcGVkVG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmhhc2hlZFN0YW1wZWRUb2tlbixcbiAgICAgIGhhc2hlZFRva2VuOiB0aGlzLl9oYXNoTG9naW5Ub2tlbih0b2tlbilcbiAgICB9O1xuICB9O1xuXG4gIC8vIFVzaW5nICRhZGRUb1NldCBhdm9pZHMgZ2V0dGluZyBhbiBpbmRleCBlcnJvciBpZiBhbm90aGVyIGNsaWVudFxuICAvLyBsb2dnaW5nIGluIHNpbXVsdGFuZW91c2x5IGhhcyBhbHJlYWR5IGluc2VydGVkIHRoZSBuZXcgaGFzaGVkXG4gIC8vIHRva2VuLlxuICBfaW5zZXJ0SGFzaGVkTG9naW5Ub2tlbih1c2VySWQsIGhhc2hlZFRva2VuLCBxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcXVlcnkgPyB7IC4uLnF1ZXJ5IH0gOiB7fTtcbiAgICBxdWVyeS5faWQgPSB1c2VySWQ7XG4gICAgdGhpcy51c2Vycy51cGRhdGUocXVlcnksIHtcbiAgICAgICRhZGRUb1NldDoge1xuICAgICAgICBcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vuc1wiOiBoYXNoZWRUb2tlblxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIEV4cG9ydGVkIGZvciB0ZXN0cy5cbiAgX2luc2VydExvZ2luVG9rZW4odXNlcklkLCBzdGFtcGVkVG9rZW4sIHF1ZXJ5KSB7XG4gICAgdGhpcy5faW5zZXJ0SGFzaGVkTG9naW5Ub2tlbihcbiAgICAgIHVzZXJJZCxcbiAgICAgIHRoaXMuX2hhc2hTdGFtcGVkVG9rZW4oc3RhbXBlZFRva2VuKSxcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfTtcblxuICBfY2xlYXJBbGxMb2dpblRva2Vucyh1c2VySWQpIHtcbiAgICB0aGlzLnVzZXJzLnVwZGF0ZSh1c2VySWQsIHtcbiAgICAgICRzZXQ6IHtcbiAgICAgICAgJ3NlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucyc6IFtdXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdGVzdCBob29rXG4gIF9nZXRVc2VyT2JzZXJ2ZShjb25uZWN0aW9uSWQpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbklkXTtcbiAgfTtcblxuICAvLyBDbGVhbiB1cCB0aGlzIGNvbm5lY3Rpb24ncyBhc3NvY2lhdGlvbiB3aXRoIHRoZSB0b2tlbjogdGhhdCBpcywgc3RvcFxuICAvLyB0aGUgb2JzZXJ2ZSB0aGF0IHdlIHN0YXJ0ZWQgd2hlbiB3ZSBhc3NvY2lhdGVkIHRoZSBjb25uZWN0aW9uIHdpdGhcbiAgLy8gdGhpcyB0b2tlbi5cbiAgX3JlbW92ZVRva2VuRnJvbUNvbm5lY3Rpb24oY29ubmVjdGlvbklkKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHRoaXMuX3VzZXJPYnNlcnZlc0ZvckNvbm5lY3Rpb25zLCBjb25uZWN0aW9uSWQpKSB7XG4gICAgICBjb25zdCBvYnNlcnZlID0gdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbklkXTtcbiAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIHByb2Nlc3Mgb2Ygc2V0dGluZyB1cCBhbiBvYnNlcnZlIGZvciB0aGlzIGNvbm5lY3Rpb24uIFdlXG4gICAgICAgIC8vIGNhbid0IGNsZWFuIHVwIHRoYXQgb2JzZXJ2ZSB5ZXQsIGJ1dCBpZiB3ZSBkZWxldGUgdGhlIHBsYWNlaG9sZGVyIGZvclxuICAgICAgICAvLyB0aGlzIGNvbm5lY3Rpb24sIHRoZW4gdGhlIG9ic2VydmUgd2lsbCBnZXQgY2xlYW5lZCB1cCBhcyBzb29uIGFzIGl0IGhhc1xuICAgICAgICAvLyBiZWVuIHNldCB1cC5cbiAgICAgICAgZGVsZXRlIHRoaXMuX3VzZXJPYnNlcnZlc0ZvckNvbm5lY3Rpb25zW2Nvbm5lY3Rpb25JZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbklkXTtcbiAgICAgICAgb2JzZXJ2ZS5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9nZXRMb2dpblRva2VuKGNvbm5lY3Rpb25JZCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRBY2NvdW50RGF0YShjb25uZWN0aW9uSWQsICdsb2dpblRva2VuJyk7XG4gIH07XG5cbiAgLy8gbmV3VG9rZW4gaXMgYSBoYXNoZWQgdG9rZW4uXG4gIF9zZXRMb2dpblRva2VuKHVzZXJJZCwgY29ubmVjdGlvbiwgbmV3VG9rZW4pIHtcbiAgICB0aGlzLl9yZW1vdmVUb2tlbkZyb21Db25uZWN0aW9uKGNvbm5lY3Rpb24uaWQpO1xuICAgIHRoaXMuX3NldEFjY291bnREYXRhKGNvbm5lY3Rpb24uaWQsICdsb2dpblRva2VuJywgbmV3VG9rZW4pO1xuXG4gICAgaWYgKG5ld1Rva2VuKSB7XG4gICAgICAvLyBTZXQgdXAgYW4gb2JzZXJ2ZSBmb3IgdGhpcyB0b2tlbi4gSWYgdGhlIHRva2VuIGdvZXMgYXdheSwgd2UgbmVlZFxuICAgICAgLy8gdG8gY2xvc2UgdGhlIGNvbm5lY3Rpb24uICBXZSBkZWZlciB0aGUgb2JzZXJ2ZSBiZWNhdXNlIHRoZXJlJ3NcbiAgICAgIC8vIG5vIG5lZWQgZm9yIGl0IHRvIGJlIG9uIHRoZSBjcml0aWNhbCBwYXRoIGZvciBsb2dpbjsgd2UganVzdCBuZWVkXG4gICAgICAvLyB0byBlbnN1cmUgdGhhdCB0aGUgY29ubmVjdGlvbiB3aWxsIGdldCBjbG9zZWQgYXQgc29tZSBwb2ludCBpZlxuICAgICAgLy8gdGhlIHRva2VuIGdldHMgZGVsZXRlZC5cbiAgICAgIC8vXG4gICAgICAvLyBJbml0aWFsbHksIHdlIHNldCB0aGUgb2JzZXJ2ZSBmb3IgdGhpcyBjb25uZWN0aW9uIHRvIGEgbnVtYmVyOyB0aGlzXG4gICAgICAvLyBzaWduaWZpZXMgdG8gb3RoZXIgY29kZSAod2hpY2ggbWlnaHQgcnVuIHdoaWxlIHdlIHlpZWxkKSB0aGF0IHdlIGFyZSBpblxuICAgICAgLy8gdGhlIHByb2Nlc3Mgb2Ygc2V0dGluZyB1cCBhbiBvYnNlcnZlIGZvciB0aGlzIGNvbm5lY3Rpb24uIE9uY2UgdGhlXG4gICAgICAvLyBvYnNlcnZlIGlzIHJlYWR5IHRvIGdvLCB3ZSByZXBsYWNlIHRoZSBudW1iZXIgd2l0aCB0aGUgcmVhbCBvYnNlcnZlXG4gICAgICAvLyBoYW5kbGUgKHVubGVzcyB0aGUgcGxhY2Vob2xkZXIgaGFzIGJlZW4gZGVsZXRlZCBvciByZXBsYWNlZCBieSBhXG4gICAgICAvLyBkaWZmZXJlbnQgcGxhY2Vob2xkIG51bWJlciwgc2lnbmlmeWluZyB0aGF0IHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWRcbiAgICAgIC8vIGFscmVhZHkgLS0gaW4gdGhpcyBjYXNlIHdlIGp1c3QgY2xlYW4gdXAgdGhlIG9ic2VydmUgdGhhdCB3ZSBzdGFydGVkKS5cbiAgICAgIGNvbnN0IG15T2JzZXJ2ZU51bWJlciA9ICsrdGhpcy5fbmV4dFVzZXJPYnNlcnZlTnVtYmVyO1xuICAgICAgdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbi5pZF0gPSBteU9ic2VydmVOdW1iZXI7XG4gICAgICBNZXRlb3IuZGVmZXIoKCkgPT4ge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCBvbiB0aGlzIGNvbm5lY3Rpb24gaW4gdGhlIG1lYW50aW1lIChpdCBnb3RcbiAgICAgICAgLy8gY2xvc2VkLCBvciBhbm90aGVyIGNhbGwgdG8gX3NldExvZ2luVG9rZW4gaGFwcGVuZWQpLCBqdXN0IGRvXG4gICAgICAgIC8vIG5vdGhpbmcuIFdlIGRvbid0IG5lZWQgdG8gc3RhcnQgYW4gb2JzZXJ2ZSBmb3IgYW4gb2xkIGNvbm5lY3Rpb24gb3Igb2xkXG4gICAgICAgIC8vIHRva2VuLlxuICAgICAgICBpZiAodGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbi5pZF0gIT09IG15T2JzZXJ2ZU51bWJlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3VuZE1hdGNoaW5nVXNlcjtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSB1cGdyYWRlIHVuaGFzaGVkIGxvZ2luIHRva2VucyB0byBoYXNoZWQgdG9rZW5zIGF0XG4gICAgICAgIC8vIGxvZ2luIHRpbWUsIHNlc3Npb25zIHdpbGwgb25seSBiZSBsb2dnZWQgaW4gd2l0aCBhIGhhc2hlZFxuICAgICAgICAvLyB0b2tlbi4gVGh1cyB3ZSBvbmx5IG5lZWQgdG8gb2JzZXJ2ZSBoYXNoZWQgdG9rZW5zIGhlcmUuXG4gICAgICAgIGNvbnN0IG9ic2VydmUgPSB0aGlzLnVzZXJzLmZpbmQoe1xuICAgICAgICAgIF9pZDogdXNlcklkLFxuICAgICAgICAgICdzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuaGFzaGVkVG9rZW4nOiBuZXdUb2tlblxuICAgICAgICB9LCB7IGZpZWxkczogeyBfaWQ6IDEgfSB9KS5vYnNlcnZlQ2hhbmdlcyh7XG4gICAgICAgICAgYWRkZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIGZvdW5kTWF0Y2hpbmdVc2VyID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZWQ6IGNvbm5lY3Rpb24uY2xvc2UsXG4gICAgICAgICAgLy8gVGhlIG9uQ2xvc2UgY2FsbGJhY2sgZm9yIHRoZSBjb25uZWN0aW9uIHRha2VzIGNhcmUgb2ZcbiAgICAgICAgICAvLyBjbGVhbmluZyB1cCB0aGUgb2JzZXJ2ZSBoYW5kbGUgYW5kIGFueSBvdGhlciBzdGF0ZSB3ZSBoYXZlXG4gICAgICAgICAgLy8gbHlpbmcgYXJvdW5kLlxuICAgICAgICB9LCB7IG5vbk11dGF0aW5nQ2FsbGJhY2tzOiB0cnVlIH0pO1xuXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHJhbiBhbm90aGVyIGxvZ2luIG9yIGxvZ291dCBjb21tYW5kIHdlIHdlcmUgd2FpdGluZyBmb3IgdGhlXG4gICAgICAgIC8vIGRlZmVyIG9yIGFkZGVkIHRvIGZpcmUgKGllLCBhbm90aGVyIGNhbGwgdG8gX3NldExvZ2luVG9rZW4gb2NjdXJyZWQpLFxuICAgICAgICAvLyB0aGVuIHdlIGxldCB0aGUgbGF0ZXIgb25lIHdpbiAoc3RhcnQgYW4gb2JzZXJ2ZSwgZXRjKSBhbmQganVzdCBzdG9wIG91clxuICAgICAgICAvLyBvYnNlcnZlIG5vdy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2ltaWxhcmx5LCBpZiB0aGUgY29ubmVjdGlvbiB3YXMgYWxyZWFkeSBjbG9zZWQsIHRoZW4gdGhlIG9uQ2xvc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgd291bGQgaGF2ZSBjYWxsZWQgX3JlbW92ZVRva2VuRnJvbUNvbm5lY3Rpb24gYW5kIHRoZXJlIHdvbid0XG4gICAgICAgIC8vIGJlIGFuIGVudHJ5IGluIF91c2VyT2JzZXJ2ZXNGb3JDb25uZWN0aW9ucy4gV2UgY2FuIHN0b3AgdGhlIG9ic2VydmUuXG4gICAgICAgIGlmICh0aGlzLl91c2VyT2JzZXJ2ZXNGb3JDb25uZWN0aW9uc1tjb25uZWN0aW9uLmlkXSAhPT0gbXlPYnNlcnZlTnVtYmVyKSB7XG4gICAgICAgICAgb2JzZXJ2ZS5zdG9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXNlck9ic2VydmVzRm9yQ29ubmVjdGlvbnNbY29ubmVjdGlvbi5pZF0gPSBvYnNlcnZlO1xuXG4gICAgICAgIGlmICghIGZvdW5kTWF0Y2hpbmdVc2VyKSB7XG4gICAgICAgICAgLy8gV2UndmUgc2V0IHVwIGFuIG9ic2VydmUgb24gdGhlIHVzZXIgYXNzb2NpYXRlZCB3aXRoIGBuZXdUb2tlbmAsXG4gICAgICAgICAgLy8gc28gaWYgdGhlIG5ldyB0b2tlbiBpcyByZW1vdmVkIGZyb20gdGhlIGRhdGFiYXNlLCB3ZSdsbCBjbG9zZVxuICAgICAgICAgIC8vIHRoZSBjb25uZWN0aW9uLiBCdXQgdGhlIHRva2VuIG1pZ2h0IGhhdmUgYWxyZWFkeSBiZWVuIGRlbGV0ZWRcbiAgICAgICAgICAvLyBiZWZvcmUgd2Ugc2V0IHVwIHRoZSBvYnNlcnZlLCB3aGljaCB3b3VsZG4ndCBoYXZlIGNsb3NlZCB0aGVcbiAgICAgICAgICAvLyBjb25uZWN0aW9uIGJlY2F1c2UgdGhlIG9ic2VydmUgd2Fzbid0IHJ1bm5pbmcgeWV0LlxuICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIChBbHNvIHVzZWQgYnkgTWV0ZW9yIEFjY291bnRzIHNlcnZlciBhbmQgdGVzdHMpLlxuICAvL1xuICBfZ2VuZXJhdGVTdGFtcGVkTG9naW5Ub2tlbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IFJhbmRvbS5zZWNyZXQoKSxcbiAgICAgIHdoZW46IG5ldyBEYXRlXG4gICAgfTtcbiAgfTtcblxuICAvLy9cbiAgLy8vIFRPS0VOIEVYUElSQVRJT05cbiAgLy8vXG5cbiAgLy8gRGVsZXRlcyBleHBpcmVkIHBhc3N3b3JkIHJlc2V0IHRva2VucyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgLy9cbiAgLy8gRXhwb3J0ZWQgZm9yIHRlc3RzLiBBbHNvLCB0aGUgYXJndW1lbnRzIGFyZSBvbmx5IHVzZWQgYnlcbiAgLy8gdGVzdHMuIG9sZGVzdFZhbGlkRGF0ZSBpcyBzaW11bGF0ZSBleHBpcmluZyB0b2tlbnMgd2l0aG91dCB3YWl0aW5nXG4gIC8vIGZvciB0aGVtIHRvIGFjdHVhbGx5IGV4cGlyZS4gdXNlcklkIGlzIHVzZWQgYnkgdGVzdHMgdG8gb25seSBleHBpcmVcbiAgLy8gdG9rZW5zIGZvciB0aGUgdGVzdCB1c2VyLlxuICBfZXhwaXJlUGFzc3dvcmRSZXNldFRva2VucyhvbGRlc3RWYWxpZERhdGUsIHVzZXJJZCkge1xuICAgIGNvbnN0IHRva2VuTGlmZXRpbWVNcyA9IHRoaXMuX2dldFBhc3N3b3JkUmVzZXRUb2tlbkxpZmV0aW1lTXMoKTtcblxuICAgIC8vIHdoZW4gY2FsbGluZyBmcm9tIGEgdGVzdCB3aXRoIGV4dHJhIGFyZ3VtZW50cywgeW91IG11c3Qgc3BlY2lmeSBib3RoIVxuICAgIGlmICgob2xkZXN0VmFsaWREYXRlICYmICF1c2VySWQpIHx8ICghb2xkZXN0VmFsaWREYXRlICYmIHVzZXJJZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCB0ZXN0LiBNdXN0IHNwZWNpZnkgYm90aCBvbGRlc3RWYWxpZERhdGUgYW5kIHVzZXJJZC5cIik7XG4gICAgfVxuXG4gICAgb2xkZXN0VmFsaWREYXRlID0gb2xkZXN0VmFsaWREYXRlIHx8XG4gICAgICAobmV3IERhdGUobmV3IERhdGUoKSAtIHRva2VuTGlmZXRpbWVNcykpO1xuXG4gICAgY29uc3QgdG9rZW5GaWx0ZXIgPSB7XG4gICAgICAkb3I6IFtcbiAgICAgICAgeyBcInNlcnZpY2VzLnBhc3N3b3JkLnJlc2V0LnJlYXNvblwiOiBcInJlc2V0XCJ9LFxuICAgICAgICB7IFwic2VydmljZXMucGFzc3dvcmQucmVzZXQucmVhc29uXCI6IHskZXhpc3RzOiBmYWxzZX19XG4gICAgICBdXG4gICAgfTtcblxuICAgIGV4cGlyZVBhc3N3b3JkVG9rZW4odGhpcywgb2xkZXN0VmFsaWREYXRlLCB0b2tlbkZpbHRlciwgdXNlcklkKTtcbiAgfVxuXG4gIC8vIERlbGV0ZXMgZXhwaXJlZCBwYXNzd29yZCBlbnJvbGwgdG9rZW5zIGZyb20gdGhlIGRhdGFiYXNlLlxuICAvL1xuICAvLyBFeHBvcnRlZCBmb3IgdGVzdHMuIEFsc28sIHRoZSBhcmd1bWVudHMgYXJlIG9ubHkgdXNlZCBieVxuICAvLyB0ZXN0cy4gb2xkZXN0VmFsaWREYXRlIGlzIHNpbXVsYXRlIGV4cGlyaW5nIHRva2VucyB3aXRob3V0IHdhaXRpbmdcbiAgLy8gZm9yIHRoZW0gdG8gYWN0dWFsbHkgZXhwaXJlLiB1c2VySWQgaXMgdXNlZCBieSB0ZXN0cyB0byBvbmx5IGV4cGlyZVxuICAvLyB0b2tlbnMgZm9yIHRoZSB0ZXN0IHVzZXIuXG4gIF9leHBpcmVQYXNzd29yZEVucm9sbFRva2VucyhvbGRlc3RWYWxpZERhdGUsIHVzZXJJZCkge1xuICAgIGNvbnN0IHRva2VuTGlmZXRpbWVNcyA9IHRoaXMuX2dldFBhc3N3b3JkRW5yb2xsVG9rZW5MaWZldGltZU1zKCk7XG5cbiAgICAvLyB3aGVuIGNhbGxpbmcgZnJvbSBhIHRlc3Qgd2l0aCBleHRyYSBhcmd1bWVudHMsIHlvdSBtdXN0IHNwZWNpZnkgYm90aCFcbiAgICBpZiAoKG9sZGVzdFZhbGlkRGF0ZSAmJiAhdXNlcklkKSB8fCAoIW9sZGVzdFZhbGlkRGF0ZSAmJiB1c2VySWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgdGVzdC4gTXVzdCBzcGVjaWZ5IGJvdGggb2xkZXN0VmFsaWREYXRlIGFuZCB1c2VySWQuXCIpO1xuICAgIH1cblxuICAgIG9sZGVzdFZhbGlkRGF0ZSA9IG9sZGVzdFZhbGlkRGF0ZSB8fFxuICAgICAgKG5ldyBEYXRlKG5ldyBEYXRlKCkgLSB0b2tlbkxpZmV0aW1lTXMpKTtcblxuICAgIGNvbnN0IHRva2VuRmlsdGVyID0ge1xuICAgICAgXCJzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwucmVhc29uXCI6IFwiZW5yb2xsXCJcbiAgICB9O1xuXG4gICAgZXhwaXJlUGFzc3dvcmRUb2tlbih0aGlzLCBvbGRlc3RWYWxpZERhdGUsIHRva2VuRmlsdGVyLCB1c2VySWQpO1xuICB9XG5cbiAgLy8gRGVsZXRlcyBleHBpcmVkIHRva2VucyBmcm9tIHRoZSBkYXRhYmFzZSBhbmQgY2xvc2VzIGFsbCBvcGVuIGNvbm5lY3Rpb25zXG4gIC8vIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSB0b2tlbnMuXG4gIC8vXG4gIC8vIEV4cG9ydGVkIGZvciB0ZXN0cy4gQWxzbywgdGhlIGFyZ3VtZW50cyBhcmUgb25seSB1c2VkIGJ5XG4gIC8vIHRlc3RzLiBvbGRlc3RWYWxpZERhdGUgaXMgc2ltdWxhdGUgZXhwaXJpbmcgdG9rZW5zIHdpdGhvdXQgd2FpdGluZ1xuICAvLyBmb3IgdGhlbSB0byBhY3R1YWxseSBleHBpcmUuIHVzZXJJZCBpcyB1c2VkIGJ5IHRlc3RzIHRvIG9ubHkgZXhwaXJlXG4gIC8vIHRva2VucyBmb3IgdGhlIHRlc3QgdXNlci5cbiAgX2V4cGlyZVRva2VucyhvbGRlc3RWYWxpZERhdGUsIHVzZXJJZCkge1xuICAgIGNvbnN0IHRva2VuTGlmZXRpbWVNcyA9IHRoaXMuX2dldFRva2VuTGlmZXRpbWVNcygpO1xuXG4gICAgLy8gd2hlbiBjYWxsaW5nIGZyb20gYSB0ZXN0IHdpdGggZXh0cmEgYXJndW1lbnRzLCB5b3UgbXVzdCBzcGVjaWZ5IGJvdGghXG4gICAgaWYgKChvbGRlc3RWYWxpZERhdGUgJiYgIXVzZXJJZCkgfHwgKCFvbGRlc3RWYWxpZERhdGUgJiYgdXNlcklkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFkIHRlc3QuIE11c3Qgc3BlY2lmeSBib3RoIG9sZGVzdFZhbGlkRGF0ZSBhbmQgdXNlcklkLlwiKTtcbiAgICB9XG5cbiAgICBvbGRlc3RWYWxpZERhdGUgPSBvbGRlc3RWYWxpZERhdGUgfHxcbiAgICAgIChuZXcgRGF0ZShuZXcgRGF0ZSgpIC0gdG9rZW5MaWZldGltZU1zKSk7XG4gICAgY29uc3QgdXNlckZpbHRlciA9IHVzZXJJZCA/IHtfaWQ6IHVzZXJJZH0gOiB7fTtcblxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBtZXRlb3IgdGhhdCBzdG9yZWQgbG9naW4gdG9rZW5cbiAgICAvLyB0aW1lc3RhbXBzIGFzIG51bWJlcnMuXG4gICAgdGhpcy51c2Vycy51cGRhdGUoeyAuLi51c2VyRmlsdGVyLFxuICAgICAgJG9yOiBbXG4gICAgICAgIHsgXCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMud2hlblwiOiB7ICRsdDogb2xkZXN0VmFsaWREYXRlIH0gfSxcbiAgICAgICAgeyBcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy53aGVuXCI6IHsgJGx0OiArb2xkZXN0VmFsaWREYXRlIH0gfVxuICAgICAgXVxuICAgIH0sIHtcbiAgICAgICRwdWxsOiB7XG4gICAgICAgIFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zXCI6IHtcbiAgICAgICAgICAkb3I6IFtcbiAgICAgICAgICAgIHsgd2hlbjogeyAkbHQ6IG9sZGVzdFZhbGlkRGF0ZSB9IH0sXG4gICAgICAgICAgICB7IHdoZW46IHsgJGx0OiArb2xkZXN0VmFsaWREYXRlIH0gfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHsgbXVsdGk6IHRydWUgfSk7XG4gICAgLy8gVGhlIG9ic2VydmUgb24gTWV0ZW9yLnVzZXJzIHdpbGwgdGFrZSBjYXJlIG9mIGNsb3NpbmcgY29ubmVjdGlvbnMgZm9yXG4gICAgLy8gZXhwaXJlZCB0b2tlbnMuXG4gIH07XG5cbiAgLy8gQG92ZXJyaWRlIGZyb20gYWNjb3VudHNfY29tbW9uLmpzXG4gIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgLy8gQ2FsbCB0aGUgb3ZlcnJpZGRlbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgbWV0aG9kLlxuICAgIGNvbnN0IHN1cGVyUmVzdWx0ID0gQWNjb3VudHNDb21tb24ucHJvdG90eXBlLmNvbmZpZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgc2V0IGxvZ2luRXhwaXJhdGlvbkluRGF5cyB0byBudWxsLCB0aGVuIHdlIG5lZWQgdG8gY2xlYXIgdGhlXG4gICAgLy8gdGltZXIgdGhhdCBwZXJpb2RpY2FsbHkgZXhwaXJlcyB0b2tlbnMuXG4gICAgaWYgKGhhc093bi5jYWxsKHRoaXMuX29wdGlvbnMsICdsb2dpbkV4cGlyYXRpb25JbkRheXMnKSAmJlxuICAgICAgdGhpcy5fb3B0aW9ucy5sb2dpbkV4cGlyYXRpb25JbkRheXMgPT09IG51bGwgJiZcbiAgICAgIHRoaXMuZXhwaXJlVG9rZW5JbnRlcnZhbCkge1xuICAgICAgTWV0ZW9yLmNsZWFySW50ZXJ2YWwodGhpcy5leHBpcmVUb2tlbkludGVydmFsKTtcbiAgICAgIHRoaXMuZXhwaXJlVG9rZW5JbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyUmVzdWx0O1xuICB9O1xuXG4gIC8vIENhbGxlZCBieSBhY2NvdW50cy1wYXNzd29yZFxuICBpbnNlcnRVc2VyRG9jKG9wdGlvbnMsIHVzZXIpIHtcbiAgICAvLyAtIGNsb25lIHVzZXIgZG9jdW1lbnQsIHRvIHByb3RlY3QgZnJvbSBtb2RpZmljYXRpb25cbiAgICAvLyAtIGFkZCBjcmVhdGVkQXQgdGltZXN0YW1wXG4gICAgLy8gLSBwcmVwYXJlIGFuIF9pZCwgc28gdGhhdCB5b3UgY2FuIG1vZGlmeSBvdGhlciBjb2xsZWN0aW9ucyAoZWdcbiAgICAvLyBjcmVhdGUgYSBmaXJzdCB0YXNrIGZvciBldmVyeSBuZXcgdXNlcilcbiAgICAvL1xuICAgIC8vIFhYWCBJZiB0aGUgb25DcmVhdGVVc2VyIG9yIHZhbGlkYXRlTmV3VXNlciBob29rcyBmYWlsLCB3ZSBtaWdodFxuICAgIC8vIGVuZCB1cCBoYXZpbmcgbW9kaWZpZWQgc29tZSBvdGhlciBjb2xsZWN0aW9uXG4gICAgLy8gaW5hcHByb3ByaWF0ZWx5LiBUaGUgc29sdXRpb24gaXMgcHJvYmFibHkgdG8gaGF2ZSBvbkNyZWF0ZVVzZXJcbiAgICAvLyBhY2NlcHQgdHdvIGNhbGxiYWNrcyAtIG9uZSB0aGF0IGdldHMgY2FsbGVkIGJlZm9yZSBpbnNlcnRpbmdcbiAgICAvLyB0aGUgdXNlciBkb2N1bWVudCAoaW4gd2hpY2ggeW91IGNhbiBtb2RpZnkgaXRzIGNvbnRlbnRzKSwgYW5kXG4gICAgLy8gb25lIHRoYXQgZ2V0cyBjYWxsZWQgYWZ0ZXIgKGluIHdoaWNoIHlvdSBzaG91bGQgY2hhbmdlIG90aGVyXG4gICAgLy8gY29sbGVjdGlvbnMpXG4gICAgdXNlciA9IHtcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIF9pZDogUmFuZG9tLmlkKCksXG4gICAgICAuLi51c2VyLFxuICAgIH07XG5cbiAgICBpZiAodXNlci5zZXJ2aWNlcykge1xuICAgICAgT2JqZWN0LmtleXModXNlci5zZXJ2aWNlcykuZm9yRWFjaChzZXJ2aWNlID0+XG4gICAgICAgIHBpbkVuY3J5cHRlZEZpZWxkc1RvVXNlcih1c2VyLnNlcnZpY2VzW3NlcnZpY2VdLCB1c2VyLl9pZClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGZ1bGxVc2VyO1xuICAgIGlmICh0aGlzLl9vbkNyZWF0ZVVzZXJIb29rKSB7XG4gICAgICBmdWxsVXNlciA9IHRoaXMuX29uQ3JlYXRlVXNlckhvb2sob3B0aW9ucywgdXNlcik7XG5cbiAgICAgIC8vIFRoaXMgaXMgKm5vdCogcGFydCBvZiB0aGUgQVBJLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSBjYW4ndCBpc29sYXRlXG4gICAgICAvLyB0aGUgZ2xvYmFsIHNlcnZlciBlbnZpcm9ubWVudCBiZXR3ZWVuIHRlc3RzLCBtZWFuaW5nIHdlIGNhbid0IHRlc3RcbiAgICAgIC8vIGJvdGggaGF2aW5nIGEgY3JlYXRlIHVzZXIgaG9vayBzZXQgYW5kIG5vdCBoYXZpbmcgb25lIHNldC5cbiAgICAgIGlmIChmdWxsVXNlciA9PT0gJ1RFU1QgREVGQVVMVCBIT09LJylcbiAgICAgICAgZnVsbFVzZXIgPSBkZWZhdWx0Q3JlYXRlVXNlckhvb2sob3B0aW9ucywgdXNlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGxVc2VyID0gZGVmYXVsdENyZWF0ZVVzZXJIb29rKG9wdGlvbnMsIHVzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbGlkYXRlTmV3VXNlckhvb2tzLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBpZiAoISBob29rKGZ1bGxVc2VyKSlcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiVXNlciB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcbiAgICB9KTtcblxuICAgIGxldCB1c2VySWQ7XG4gICAgdHJ5IHtcbiAgICAgIHVzZXJJZCA9IHRoaXMudXNlcnMuaW5zZXJ0KGZ1bGxVc2VyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBYWFggc3RyaW5nIHBhcnNpbmcgc3Vja3MsIG1heWJlXG4gICAgICAvLyBodHRwczovL2ppcmEubW9uZ29kYi5vcmcvYnJvd3NlL1NFUlZFUi0zMDY5IHdpbGwgZ2V0IGZpeGVkIG9uZSBkYXlcbiAgICAgIC8vIGh0dHBzOi8vamlyYS5tb25nb2RiLm9yZy9icm93c2UvU0VSVkVSLTQ2MzdcbiAgICAgIGlmICghZS5lcnJtc2cpIHRocm93IGU7XG4gICAgICBpZiAoZS5lcnJtc2cuaW5jbHVkZXMoJ2VtYWlscy5hZGRyZXNzJykpXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIkVtYWlsIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgIGlmIChlLmVycm1zZy5pbmNsdWRlcygndXNlcm5hbWUnKSlcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiVXNlcm5hbWUgYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJJZDtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb246IHJldHVybnMgZmFsc2UgaWYgZW1haWwgZG9lcyBub3QgbWF0Y2ggY29tcGFueSBkb21haW4gZnJvbVxuICAvLyB0aGUgY29uZmlndXJhdGlvbi5cbiAgX3Rlc3RFbWFpbERvbWFpbihlbWFpbCkge1xuICAgIGNvbnN0IGRvbWFpbiA9IHRoaXMuX29wdGlvbnMucmVzdHJpY3RDcmVhdGlvbkJ5RW1haWxEb21haW47XG5cbiAgICByZXR1cm4gIWRvbWFpbiB8fFxuICAgICAgKHR5cGVvZiBkb21haW4gPT09ICdmdW5jdGlvbicgJiYgZG9tYWluKGVtYWlsKSkgfHxcbiAgICAgICh0eXBlb2YgZG9tYWluID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAobmV3IFJlZ0V4cChgQCR7TWV0ZW9yLl9lc2NhcGVSZWdFeHAoZG9tYWluKX0kYCwgJ2knKSkudGVzdChlbWFpbCkpO1xuICB9O1xuXG4gIC8vL1xuICAvLy8gQ0xFQU4gVVAgRk9SIGBsb2dvdXRPdGhlckNsaWVudHNgXG4gIC8vL1xuXG4gIF9kZWxldGVTYXZlZFRva2Vuc0ZvclVzZXIodXNlcklkLCB0b2tlbnNUb0RlbGV0ZSkge1xuICAgIGlmICh0b2tlbnNUb0RlbGV0ZSkge1xuICAgICAgdGhpcy51c2Vycy51cGRhdGUodXNlcklkLCB7XG4gICAgICAgICR1bnNldDoge1xuICAgICAgICAgIFwic2VydmljZXMucmVzdW1lLmhhdmVMb2dpblRva2Vuc1RvRGVsZXRlXCI6IDEsXG4gICAgICAgICAgXCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnNUb0RlbGV0ZVwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgICRwdWxsQWxsOiB7XG4gICAgICAgICAgXCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnNcIjogdG9rZW5zVG9EZWxldGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9kZWxldGVTYXZlZFRva2Vuc0ZvckFsbFVzZXJzT25TdGFydHVwKCkge1xuICAgIC8vIElmIHdlIGZpbmQgdXNlcnMgd2hvIGhhdmUgc2F2ZWQgdG9rZW5zIHRvIGRlbGV0ZSBvbiBzdGFydHVwLCBkZWxldGVcbiAgICAvLyB0aGVtIG5vdy4gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBzZXJ2ZXIgY291bGQgaGF2ZSBjcmFzaGVkIGFuZCBjb21lXG4gICAgLy8gYmFjayB1cCBiZWZvcmUgbmV3IHRva2VucyBhcmUgZm91bmQgaW4gbG9jYWxTdG9yYWdlLCBidXQgdGhpc1xuICAgIC8vIHNob3VsZG4ndCBoYXBwZW4gdmVyeSBvZnRlbi4gV2Ugc2hvdWxkbid0IHB1dCBhIGRlbGF5IGhlcmUgYmVjYXVzZVxuICAgIC8vIHRoYXQgd291bGQgZ2l2ZSBhIGxvdCBvZiBwb3dlciB0byBhbiBhdHRhY2tlciB3aXRoIGEgc3RvbGVuIGxvZ2luXG4gICAgLy8gdG9rZW4gYW5kIHRoZSBhYmlsaXR5IHRvIGNyYXNoIHRoZSBzZXJ2ZXIuXG4gICAgTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAgICAgdGhpcy51c2Vycy5maW5kKHtcbiAgICAgICAgXCJzZXJ2aWNlcy5yZXN1bWUuaGF2ZUxvZ2luVG9rZW5zVG9EZWxldGVcIjogdHJ1ZVxuICAgICAgfSwge2ZpZWxkczoge1xuICAgICAgICAgIFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zVG9EZWxldGVcIjogMVxuICAgICAgICB9fSkuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgdGhpcy5fZGVsZXRlU2F2ZWRUb2tlbnNGb3JVc2VyKFxuICAgICAgICAgIHVzZXIuX2lkLFxuICAgICAgICAgIHVzZXIuc2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zVG9EZWxldGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vL1xuICAvLy8gTUFOQUdJTkcgVVNFUiBPQkpFQ1RTXG4gIC8vL1xuXG4gIC8vIFVwZGF0ZXMgb3IgY3JlYXRlcyBhIHVzZXIgYWZ0ZXIgd2UgYXV0aGVudGljYXRlIHdpdGggYSAzcmQgcGFydHkuXG4gIC8vXG4gIC8vIEBwYXJhbSBzZXJ2aWNlTmFtZSB7U3RyaW5nfSBTZXJ2aWNlIG5hbWUgKGVnLCB0d2l0dGVyKS5cbiAgLy8gQHBhcmFtIHNlcnZpY2VEYXRhIHtPYmplY3R9IERhdGEgdG8gc3RvcmUgaW4gdGhlIHVzZXIncyByZWNvcmRcbiAgLy8gICAgICAgIHVuZGVyIHNlcnZpY2VzW3NlcnZpY2VOYW1lXS4gTXVzdCBpbmNsdWRlIGFuIFwiaWRcIiBmaWVsZFxuICAvLyAgICAgICAgd2hpY2ggaXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHVzZXIgaW4gdGhlIHNlcnZpY2UuXG4gIC8vIEBwYXJhbSBvcHRpb25zIHtPYmplY3QsIG9wdGlvbmFsfSBPdGhlciBvcHRpb25zIHRvIHBhc3MgdG8gaW5zZXJ0VXNlckRvY1xuICAvLyAgICAgICAgKGVnLCBwcm9maWxlKVxuICAvLyBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3Qgd2l0aCB0b2tlbiBhbmQgaWQga2V5cywgbGlrZSB0aGUgcmVzdWx0XG4gIC8vICAgICAgICBvZiB0aGUgXCJsb2dpblwiIG1ldGhvZC5cbiAgLy9cbiAgdXBkYXRlT3JDcmVhdGVVc2VyRnJvbUV4dGVybmFsU2VydmljZShcbiAgICBzZXJ2aWNlTmFtZSxcbiAgICBzZXJ2aWNlRGF0YSxcbiAgICBvcHRpb25zXG4gICkge1xuICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChzZXJ2aWNlTmFtZSA9PT0gXCJwYXNzd29yZFwiIHx8IHNlcnZpY2VOYW1lID09PSBcInJlc3VtZVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgdXNlIHVwZGF0ZU9yQ3JlYXRlVXNlckZyb21FeHRlcm5hbFNlcnZpY2Ugd2l0aCBpbnRlcm5hbCBzZXJ2aWNlIFwiXG4gICAgICAgICsgc2VydmljZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoIWhhc093bi5jYWxsKHNlcnZpY2VEYXRhLCAnaWQnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgU2VydmljZSBkYXRhIGZvciBzZXJ2aWNlICR7c2VydmljZU5hbWV9IG11c3QgaW5jbHVkZSBpZGApO1xuICAgIH1cblxuICAgIC8vIExvb2sgZm9yIGEgdXNlciB3aXRoIHRoZSBhcHByb3ByaWF0ZSBzZXJ2aWNlIHVzZXIgaWQuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7fTtcbiAgICBjb25zdCBzZXJ2aWNlSWRLZXkgPSBgc2VydmljZXMuJHtzZXJ2aWNlTmFtZX0uaWRgO1xuXG4gICAgLy8gWFhYIFRlbXBvcmFyeSBzcGVjaWFsIGNhc2UgZm9yIFR3aXR0ZXIuIChJc3N1ZSAjNjI5KVxuICAgIC8vICAgVGhlIHNlcnZpY2VEYXRhLmlkIHdpbGwgYmUgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gaW50ZWdlci5cbiAgICAvLyAgIFdlIHdhbnQgaXQgdG8gbWF0Y2ggZWl0aGVyIGEgc3RvcmVkIHN0cmluZyBvciBpbnQgcmVwcmVzZW50YXRpb24uXG4gICAgLy8gICBUaGlzIGlzIHRvIGNhdGVyIHRvIGVhcmxpZXIgdmVyc2lvbnMgb2YgTWV0ZW9yIHN0b3JpbmcgdHdpdHRlclxuICAgIC8vICAgdXNlciBJRHMgaW4gbnVtYmVyIGZvcm0sIGFuZCByZWNlbnQgdmVyc2lvbnMgc3RvcmluZyB0aGVtIGFzIHN0cmluZ3MuXG4gICAgLy8gICBUaGlzIGNhbiBiZSByZW1vdmVkIG9uY2UgbWlncmF0aW9uIHRlY2hub2xvZ3kgaXMgaW4gcGxhY2UsIGFuZCB0d2l0dGVyXG4gICAgLy8gICB1c2VycyBzdG9yZWQgd2l0aCBpbnRlZ2VyIElEcyBoYXZlIGJlZW4gbWlncmF0ZWQgdG8gc3RyaW5nIElEcy5cbiAgICBpZiAoc2VydmljZU5hbWUgPT09IFwidHdpdHRlclwiICYmICFpc05hTihzZXJ2aWNlRGF0YS5pZCkpIHtcbiAgICAgIHNlbGVjdG9yW1wiJG9yXCJdID0gW3t9LHt9XTtcbiAgICAgIHNlbGVjdG9yW1wiJG9yXCJdWzBdW3NlcnZpY2VJZEtleV0gPSBzZXJ2aWNlRGF0YS5pZDtcbiAgICAgIHNlbGVjdG9yW1wiJG9yXCJdWzFdW3NlcnZpY2VJZEtleV0gPSBwYXJzZUludChzZXJ2aWNlRGF0YS5pZCwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvcltzZXJ2aWNlSWRLZXldID0gc2VydmljZURhdGEuaWQ7XG4gICAgfVxuXG4gICAgbGV0IHVzZXIgPSB0aGlzLnVzZXJzLmZpbmRPbmUoc2VsZWN0b3IsIHtmaWVsZHM6IHRoaXMuX29wdGlvbnMuZGVmYXVsdEZpZWxkU2VsZWN0b3J9KTtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZGV2ZWxvcGVyIGhhcyBhIGN1c3RvbSB3YXkgdG8gZmluZCB0aGUgdXNlciBvdXRzaWRlXG4gICAgLy8gb2YgdGhlIGdlbmVyYWwgc2VsZWN0b3JzIGFib3ZlLlxuICAgIGlmICghdXNlciAmJiB0aGlzLl9hZGRpdGlvbmFsRmluZFVzZXJPbkV4dGVybmFsTG9naW4pIHtcbiAgICAgIHVzZXIgPSB0aGlzLl9hZGRpdGlvbmFsRmluZFVzZXJPbkV4dGVybmFsTG9naW4oe3NlcnZpY2VOYW1lLCBzZXJ2aWNlRGF0YSwgb3B0aW9uc30pXG4gICAgfVxuXG4gICAgLy8gQmVmb3JlIGNvbnRpbnVpbmcsIHJ1biB1c2VyIGhvb2sgdG8gc2VlIGlmIHdlIHNob3VsZCBjb250aW51ZVxuICAgIGlmICh0aGlzLl9iZWZvcmVFeHRlcm5hbExvZ2luSG9vayAmJiAhdGhpcy5fYmVmb3JlRXh0ZXJuYWxMb2dpbkhvb2soc2VydmljZU5hbWUsIHNlcnZpY2VEYXRhLCB1c2VyKSkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiTG9naW4gZm9yYmlkZGVuXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gY3JlYXRpbmcgYSBuZXcgdXNlciB3ZSBwYXNzIHRocm91Z2ggYWxsIG9wdGlvbnMuIFdoZW4gdXBkYXRpbmcgYW5cbiAgICAvLyBleGlzdGluZyB1c2VyLCBieSBkZWZhdWx0IHdlIG9ubHkgcHJvY2Vzcy9wYXNzIHRocm91Z2ggdGhlIHNlcnZpY2VEYXRhXG4gICAgLy8gKGVnLCBzbyB0aGF0IHdlIGtlZXAgYW4gdW5leHBpcmVkIGFjY2VzcyB0b2tlbiBhbmQgZG9uJ3QgY2FjaGUgb2xkIGVtYWlsXG4gICAgLy8gYWRkcmVzc2VzIGluIHNlcnZpY2VEYXRhLmVtYWlsKS4gVGhlIG9uRXh0ZXJuYWxMb2dpbiBob29rIGNhbiBiZSB1c2VkIHdoZW5cbiAgICAvLyBjcmVhdGluZyBvciB1cGRhdGluZyBhIHVzZXIsIHRvIG1vZGlmeSBvciBwYXNzIHRocm91Z2ggbW9yZSBvcHRpb25zIGFzXG4gICAgLy8gbmVlZGVkLlxuICAgIGxldCBvcHRzID0gdXNlciA/IHt9IDogb3B0aW9ucztcbiAgICBpZiAodGhpcy5fb25FeHRlcm5hbExvZ2luSG9vaykge1xuICAgICAgb3B0cyA9IHRoaXMuX29uRXh0ZXJuYWxMb2dpbkhvb2sob3B0aW9ucywgdXNlcik7XG4gICAgfVxuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHBpbkVuY3J5cHRlZEZpZWxkc1RvVXNlcihzZXJ2aWNlRGF0YSwgdXNlci5faWQpO1xuXG4gICAgICBsZXQgc2V0QXR0cnMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHNlcnZpY2VEYXRhKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICBzZXRBdHRyc1tgc2VydmljZXMuJHtzZXJ2aWNlTmFtZX0uJHtrZXl9YF0gPSBzZXJ2aWNlRGF0YVtrZXldXG4gICAgICApO1xuXG4gICAgICAvLyBYWFggTWF5YmUgd2Ugc2hvdWxkIHJlLXVzZSB0aGUgc2VsZWN0b3IgYWJvdmUgYW5kIG5vdGljZSBpZiB0aGUgdXBkYXRlXG4gICAgICAvLyAgICAgdG91Y2hlcyBub3RoaW5nP1xuICAgICAgc2V0QXR0cnMgPSB7IC4uLnNldEF0dHJzLCAuLi5vcHRzIH07XG4gICAgICB0aGlzLnVzZXJzLnVwZGF0ZSh1c2VyLl9pZCwge1xuICAgICAgICAkc2V0OiBzZXRBdHRyc1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHNlcnZpY2VOYW1lLFxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgdXNlciB3aXRoIHRoZSBzZXJ2aWNlIGRhdGEuXG4gICAgICB1c2VyID0ge3NlcnZpY2VzOiB7fX07XG4gICAgICB1c2VyLnNlcnZpY2VzW3NlcnZpY2VOYW1lXSA9IHNlcnZpY2VEYXRhO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogc2VydmljZU5hbWUsXG4gICAgICAgIHVzZXJJZDogdGhpcy5pbnNlcnRVc2VyRG9jKG9wdHMsIHVzZXIpXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHN1bW1hcnkgUmVtb3ZlcyBkZWZhdWx0IHJhdGUgbGltaXRpbmcgcnVsZVxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gICAqL1xuICByZW1vdmVEZWZhdWx0UmF0ZUxpbWl0KCkge1xuICAgIGNvbnN0IHJlc3AgPSBERFBSYXRlTGltaXRlci5yZW1vdmVSdWxlKHRoaXMuZGVmYXVsdFJhdGVMaW1pdGVyUnVsZUlkKTtcbiAgICB0aGlzLmRlZmF1bHRSYXRlTGltaXRlclJ1bGVJZCA9IG51bGw7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IEFkZCBhIGRlZmF1bHQgcnVsZSBvZiBsaW1pdGluZyBsb2dpbnMsIGNyZWF0aW5nIG5ldyB1c2VycyBhbmQgcGFzc3dvcmQgcmVzZXRcbiAgICogdG8gNSB0aW1lcyBldmVyeSAxMCBzZWNvbmRzIHBlciBjb25uZWN0aW9uLlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBpbXBvcnRGcm9tUGFja2FnZSBhY2NvdW50cy1iYXNlXG4gICAqL1xuICBhZGREZWZhdWx0UmF0ZUxpbWl0KCkge1xuICAgIGlmICghdGhpcy5kZWZhdWx0UmF0ZUxpbWl0ZXJSdWxlSWQpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFJhdGVMaW1pdGVyUnVsZUlkID0gRERQUmF0ZUxpbWl0ZXIuYWRkUnVsZSh7XG4gICAgICAgIHVzZXJJZDogbnVsbCxcbiAgICAgICAgY2xpZW50QWRkcmVzczogbnVsbCxcbiAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgIG5hbWU6IG5hbWUgPT4gWydsb2dpbicsICdjcmVhdGVVc2VyJywgJ3Jlc2V0UGFzc3dvcmQnLCAnZm9yZ290UGFzc3dvcmQnXVxuICAgICAgICAgIC5pbmNsdWRlcyhuYW1lKSxcbiAgICAgICAgY29ubmVjdGlvbklkOiAoY29ubmVjdGlvbklkKSA9PiB0cnVlLFxuICAgICAgfSwgNSwgMTAwMDApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHN1bW1hcnkgQ3JlYXRlcyBvcHRpb25zIGZvciBlbWFpbCBzZW5kaW5nIGZvciByZXNldCBwYXNzd29yZCBhbmQgZW5yb2xsIGFjY291bnQgZW1haWxzLlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHdoZW4gY3VzdG9taXppbmcgYSByZXNldCBwYXNzd29yZCBvciBlbnJvbGwgYWNjb3VudCBlbWFpbCBzZW5kaW5nLlxuICAgKiBAbG9jdXMgU2VydmVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbWFpbCBXaGljaCBhZGRyZXNzIG9mIHRoZSB1c2VyJ3MgdG8gc2VuZCB0aGUgZW1haWwgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyIFRoZSB1c2VyIG9iamVjdCB0byBnZW5lcmF0ZSBvcHRpb25zIGZvci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBVUkwgdG8gd2hpY2ggdXNlciBpcyBkaXJlY3RlZCB0byBjb25maXJtIHRoZSBlbWFpbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlYXNvbiBgcmVzZXRQYXNzd29yZGAgb3IgYGVucm9sbEFjY291bnRgLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBPcHRpb25zIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gYEVtYWlsLnNlbmRgLlxuICAgKiBAaW1wb3J0RnJvbVBhY2thZ2UgYWNjb3VudHMtYmFzZVxuICAgKi9cbiAgZ2VuZXJhdGVPcHRpb25zRm9yRW1haWwoZW1haWwsIHVzZXIsIHVybCwgcmVhc29uLCBleHRyYSA9IHt9KXtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdG86IGVtYWlsLFxuICAgICAgZnJvbTogdGhpcy5lbWFpbFRlbXBsYXRlc1tyZWFzb25dLmZyb21cbiAgICAgICAgPyB0aGlzLmVtYWlsVGVtcGxhdGVzW3JlYXNvbl0uZnJvbSh1c2VyKVxuICAgICAgICA6IHRoaXMuZW1haWxUZW1wbGF0ZXMuZnJvbSxcbiAgICAgIHN1YmplY3Q6IHRoaXMuZW1haWxUZW1wbGF0ZXNbcmVhc29uXS5zdWJqZWN0KHVzZXIsIHVybCwgZXh0cmEpLFxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZW1haWxUZW1wbGF0ZXNbcmVhc29uXS50ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnRleHQgPSB0aGlzLmVtYWlsVGVtcGxhdGVzW3JlYXNvbl0udGV4dCh1c2VyLCB1cmwsIGV4dHJhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZW1haWxUZW1wbGF0ZXNbcmVhc29uXS5odG1sID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLmh0bWwgPSB0aGlzLmVtYWlsVGVtcGxhdGVzW3JlYXNvbl0uaHRtbCh1c2VyLCB1cmwsIGV4dHJhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZW1haWxUZW1wbGF0ZXMuaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHRoaXMuZW1haWxUZW1wbGF0ZXMuaGVhZGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBfY2hlY2tGb3JDYXNlSW5zZW5zaXRpdmVEdXBsaWNhdGVzKFxuICAgIGZpZWxkTmFtZSxcbiAgICBkaXNwbGF5TmFtZSxcbiAgICBmaWVsZFZhbHVlLFxuICAgIG93blVzZXJJZFxuICApIHtcbiAgICAvLyBTb21lIHRlc3RzIG5lZWQgdGhlIGFiaWxpdHkgdG8gYWRkIHVzZXJzIHdpdGggdGhlIHNhbWUgY2FzZSBpbnNlbnNpdGl2ZVxuICAgIC8vIHZhbHVlLCBoZW5jZSB0aGUgX3NraXBDYXNlSW5zZW5zaXRpdmVDaGVja3NGb3JUZXN0IGNoZWNrXG4gICAgY29uc3Qgc2tpcENoZWNrID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgdGhpcy5fc2tpcENhc2VJbnNlbnNpdGl2ZUNoZWNrc0ZvclRlc3QsXG4gICAgICBmaWVsZFZhbHVlXG4gICAgKTtcblxuICAgIGlmIChmaWVsZFZhbHVlICYmICFza2lwQ2hlY2spIHtcbiAgICAgIGNvbnN0IG1hdGNoZWRVc2VycyA9IE1ldGVvci51c2Vyc1xuICAgICAgICAuZmluZChcbiAgICAgICAgICB0aGlzLl9zZWxlY3RvckZvckZhc3RDYXNlSW5zZW5zaXRpdmVMb29rdXAoZmllbGROYW1lLCBmaWVsZFZhbHVlKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZHM6IHsgX2lkOiAxIH0sXG4gICAgICAgICAgICAvLyB3ZSBvbmx5IG5lZWQgYSBtYXhpbXVtIG9mIDIgdXNlcnMgZm9yIHRoZSBsb2dpYyBiZWxvdyB0byB3b3JrXG4gICAgICAgICAgICBsaW1pdDogMixcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmZldGNoKCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgbWF0Y2hlZFVzZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHVzZXJJZCB5ZXQsIGFueSBtYXRjaCB3ZSBmaW5kIGlzIGEgZHVwbGljYXRlXG4gICAgICAgICghb3duVXNlcklkIHx8XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMgb3IgYSBtYXRjaFxuICAgICAgICAgIC8vIHRoYXQgaXMgbm90IHVzXG4gICAgICAgICAgbWF0Y2hlZFVzZXJzLmxlbmd0aCA+IDEgfHwgbWF0Y2hlZFVzZXJzWzBdLl9pZCAhPT0gb3duVXNlcklkKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGAke2Rpc3BsYXlOYW1lfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZVVzZXJDaGVja2luZ0R1cGxpY2F0ZXMoeyB1c2VyLCBlbWFpbCwgdXNlcm5hbWUsIG9wdGlvbnMgfSkge1xuICAgIGNvbnN0IG5ld1VzZXIgPSB7XG4gICAgICAuLi51c2VyLFxuICAgICAgLi4uKHVzZXJuYW1lID8geyB1c2VybmFtZSB9IDoge30pLFxuICAgICAgLi4uKGVtYWlsID8geyBlbWFpbHM6IFt7IGFkZHJlc3M6IGVtYWlsLCB2ZXJpZmllZDogZmFsc2UgfV0gfSA6IHt9KSxcbiAgICB9O1xuXG4gICAgLy8gUGVyZm9ybSBhIGNhc2UgaW5zZW5zaXRpdmUgY2hlY2sgYmVmb3JlIGluc2VydFxuICAgIHRoaXMuX2NoZWNrRm9yQ2FzZUluc2Vuc2l0aXZlRHVwbGljYXRlcygndXNlcm5hbWUnLCAnVXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgdGhpcy5fY2hlY2tGb3JDYXNlSW5zZW5zaXRpdmVEdXBsaWNhdGVzKCdlbWFpbHMuYWRkcmVzcycsICdFbWFpbCcsIGVtYWlsKTtcblxuICAgIGNvbnN0IHVzZXJJZCA9IHRoaXMuaW5zZXJ0VXNlckRvYyhvcHRpb25zLCBuZXdVc2VyKTtcbiAgICAvLyBQZXJmb3JtIGFub3RoZXIgY2hlY2sgYWZ0ZXIgaW5zZXJ0LCBpbiBjYXNlIGEgbWF0Y2hpbmcgdXNlciBoYXMgYmVlblxuICAgIC8vIGluc2VydGVkIGluIHRoZSBtZWFudGltZVxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jaGVja0ZvckNhc2VJbnNlbnNpdGl2ZUR1cGxpY2F0ZXMoJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgdXNlcm5hbWUsIHVzZXJJZCk7XG4gICAgICB0aGlzLl9jaGVja0ZvckNhc2VJbnNlbnNpdGl2ZUR1cGxpY2F0ZXMoJ2VtYWlscy5hZGRyZXNzJywgJ0VtYWlsJywgZW1haWwsIHVzZXJJZCk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIC8vIFJlbW92ZSBpbnNlcnRlZCB1c2VyIGlmIHRoZSBjaGVjayBmYWlsc1xuICAgICAgTWV0ZW9yLnVzZXJzLnJlbW92ZSh1c2VySWQpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICAgIHJldHVybiB1c2VySWQ7XG4gIH1cblxuICBfaGFuZGxlRXJyb3IgPSAobXNnLCB0aHJvd0Vycm9yID0gdHJ1ZSwgZXJyb3JDb2RlID0gNDAzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgTWV0ZW9yLkVycm9yKFxuICAgICAgZXJyb3JDb2RlLFxuICAgICAgdGhpcy5fb3B0aW9ucy5hbWJpZ3VvdXNFcnJvck1lc3NhZ2VzXG4gICAgICAgID8gXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMuXCJcbiAgICAgICAgOiBtc2dcbiAgICApO1xuICAgIGlmICh0aHJvd0Vycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgX3VzZXJRdWVyeVZhbGlkYXRvciA9IE1hdGNoLldoZXJlKHVzZXIgPT4ge1xuICAgIGNoZWNrKHVzZXIsIHtcbiAgICAgIGlkOiBNYXRjaC5PcHRpb25hbChOb25FbXB0eVN0cmluZyksXG4gICAgICB1c2VybmFtZTogTWF0Y2guT3B0aW9uYWwoTm9uRW1wdHlTdHJpbmcpLFxuICAgICAgZW1haWw6IE1hdGNoLk9wdGlvbmFsKE5vbkVtcHR5U3RyaW5nKVxuICAgIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGggIT09IDEpXG4gICAgICB0aHJvdyBuZXcgTWF0Y2guRXJyb3IoXCJVc2VyIHByb3BlcnR5IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBmaWVsZFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbn1cblxuLy8gR2l2ZSBlYWNoIGxvZ2luIGhvb2sgY2FsbGJhY2sgYSBmcmVzaCBjbG9uZWQgY29weSBvZiB0aGUgYXR0ZW1wdFxuLy8gb2JqZWN0LCBidXQgZG9uJ3QgY2xvbmUgdGhlIGNvbm5lY3Rpb24uXG4vL1xuY29uc3QgY2xvbmVBdHRlbXB0V2l0aENvbm5lY3Rpb24gPSAoY29ubmVjdGlvbiwgYXR0ZW1wdCkgPT4ge1xuICBjb25zdCBjbG9uZWRBdHRlbXB0ID0gRUpTT04uY2xvbmUoYXR0ZW1wdCk7XG4gIGNsb25lZEF0dGVtcHQuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gIHJldHVybiBjbG9uZWRBdHRlbXB0O1xufTtcblxuY29uc3QgdHJ5TG9naW5NZXRob2QgPSBhc3luYyAodHlwZSwgZm4pID0+IHtcbiAgbGV0IHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBhd2FpdCBmbigpO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgcmVzdWx0ID0ge2Vycm9yOiBlfTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgJiYgIXJlc3VsdC50eXBlICYmIHR5cGUpXG4gICAgcmVzdWx0LnR5cGUgPSB0eXBlO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBzZXR1cERlZmF1bHRMb2dpbkhhbmRsZXJzID0gYWNjb3VudHMgPT4ge1xuICBhY2NvdW50cy5yZWdpc3RlckxvZ2luSGFuZGxlcihcInJlc3VtZVwiLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiBkZWZhdWx0UmVzdW1lTG9naW5IYW5kbGVyLmNhbGwodGhpcywgYWNjb3VudHMsIG9wdGlvbnMpO1xuICB9KTtcbn07XG5cbi8vIExvZ2luIGhhbmRsZXIgZm9yIHJlc3VtZSB0b2tlbnMuXG5jb25zdCBkZWZhdWx0UmVzdW1lTG9naW5IYW5kbGVyID0gKGFjY291bnRzLCBvcHRpb25zKSA9PiB7XG4gIGlmICghb3B0aW9ucy5yZXN1bWUpXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICBjaGVjayhvcHRpb25zLnJlc3VtZSwgU3RyaW5nKTtcblxuICBjb25zdCBoYXNoZWRUb2tlbiA9IGFjY291bnRzLl9oYXNoTG9naW5Ub2tlbihvcHRpb25zLnJlc3VtZSk7XG5cbiAgLy8gRmlyc3QgbG9vayBmb3IganVzdCB0aGUgbmV3LXN0eWxlIGhhc2hlZCBsb2dpbiB0b2tlbiwgdG8gYXZvaWRcbiAgLy8gc2VuZGluZyB0aGUgdW5oYXNoZWQgdG9rZW4gdG8gdGhlIGRhdGFiYXNlIGluIGEgcXVlcnkgaWYgd2UgZG9uJ3RcbiAgLy8gbmVlZCB0by5cbiAgbGV0IHVzZXIgPSBhY2NvdW50cy51c2Vycy5maW5kT25lKFxuICAgIHtcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy5oYXNoZWRUb2tlblwiOiBoYXNoZWRUb2tlbn0sXG4gICAge2ZpZWxkczoge1wic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLiRcIjogMX19KTtcblxuICBpZiAoISB1c2VyKSB7XG4gICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgdGhlIGhhc2hlZCBsb2dpbiB0b2tlbiwgdHJ5IGFsc28gbG9va2luZyBmb3JcbiAgICAvLyB0aGUgb2xkLXN0eWxlIHVuaGFzaGVkIHRva2VuLiAgQnV0IHdlIG5lZWQgdG8gbG9vayBmb3IgZWl0aGVyXG4gICAgLy8gdGhlIG9sZC1zdHlsZSB0b2tlbiBPUiB0aGUgbmV3LXN0eWxlIHRva2VuLCBiZWNhdXNlIGFub3RoZXJcbiAgICAvLyBjbGllbnQgY29ubmVjdGlvbiBsb2dnaW5nIGluIHNpbXVsdGFuZW91c2x5IG1pZ2h0IGhhdmUgYWxyZWFkeVxuICAgIC8vIGNvbnZlcnRlZCB0aGUgdG9rZW4uXG4gICAgdXNlciA9IGFjY291bnRzLnVzZXJzLmZpbmRPbmUoe1xuICAgICAgICAkb3I6IFtcbiAgICAgICAgICB7XCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuaGFzaGVkVG9rZW5cIjogaGFzaGVkVG9rZW59LFxuICAgICAgICAgIHtcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vucy50b2tlblwiOiBvcHRpb25zLnJlc3VtZX1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIE5vdGU6IENhbm5vdCB1c2UgLi4ubG9naW5Ub2tlbnMuJCBwb3NpdGlvbmFsIG9wZXJhdG9yIHdpdGggJG9yIHF1ZXJ5LlxuICAgICAge2ZpZWxkczoge1wic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zXCI6IDF9fSk7XG4gIH1cblxuICBpZiAoISB1c2VyKVxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogbmV3IE1ldGVvci5FcnJvcig0MDMsIFwiWW91J3ZlIGJlZW4gbG9nZ2VkIG91dCBieSB0aGUgc2VydmVyLiBQbGVhc2UgbG9nIGluIGFnYWluLlwiKVxuICAgIH07XG5cbiAgLy8gRmluZCB0aGUgdG9rZW4sIHdoaWNoIHdpbGwgZWl0aGVyIGJlIGFuIG9iamVjdCB3aXRoIGZpZWxkc1xuICAvLyB7aGFzaGVkVG9rZW4sIHdoZW59IGZvciBhIGhhc2hlZCB0b2tlbiBvciB7dG9rZW4sIHdoZW59IGZvciBhblxuICAvLyB1bmhhc2hlZCB0b2tlbi5cbiAgbGV0IG9sZFVuaGFzaGVkU3R5bGVUb2tlbjtcbiAgbGV0IHRva2VuID0gdXNlci5zZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuZmluZCh0b2tlbiA9PlxuICAgIHRva2VuLmhhc2hlZFRva2VuID09PSBoYXNoZWRUb2tlblxuICApO1xuICBpZiAodG9rZW4pIHtcbiAgICBvbGRVbmhhc2hlZFN0eWxlVG9rZW4gPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0b2tlbiA9IHVzZXIuc2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLmZpbmQodG9rZW4gPT5cbiAgICAgIHRva2VuLnRva2VuID09PSBvcHRpb25zLnJlc3VtZVxuICAgICk7XG4gICAgb2xkVW5oYXNoZWRTdHlsZVRva2VuID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuRXhwaXJlcyA9IGFjY291bnRzLl90b2tlbkV4cGlyYXRpb24odG9rZW4ud2hlbik7XG4gIGlmIChuZXcgRGF0ZSgpID49IHRva2VuRXhwaXJlcylcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkOiB1c2VyLl9pZCxcbiAgICAgIGVycm9yOiBuZXcgTWV0ZW9yLkVycm9yKDQwMywgXCJZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uXCIpXG4gICAgfTtcblxuICAvLyBVcGRhdGUgdG8gYSBoYXNoZWQgdG9rZW4gd2hlbiBhbiB1bmhhc2hlZCB0b2tlbiBpcyBlbmNvdW50ZXJlZC5cbiAgaWYgKG9sZFVuaGFzaGVkU3R5bGVUb2tlbikge1xuICAgIC8vIE9ubHkgYWRkIHRoZSBuZXcgaGFzaGVkIHRva2VuIGlmIHRoZSBvbGQgdW5oYXNoZWQgdG9rZW4gc3RpbGxcbiAgICAvLyBleGlzdHMgKHRoaXMgYXZvaWRzIHJlc3VycmVjdGluZyB0aGUgdG9rZW4gaWYgaXQgd2FzIGRlbGV0ZWRcbiAgICAvLyBhZnRlciB3ZSByZWFkIGl0KS4gIFVzaW5nICRhZGRUb1NldCBhdm9pZHMgZ2V0dGluZyBhbiBpbmRleFxuICAgIC8vIGVycm9yIGlmIGFub3RoZXIgY2xpZW50IGxvZ2dpbmcgaW4gc2ltdWx0YW5lb3VzbHkgaGFzIGFscmVhZHlcbiAgICAvLyBpbnNlcnRlZCB0aGUgbmV3IGhhc2hlZCB0b2tlbi5cbiAgICBhY2NvdW50cy51c2Vycy51cGRhdGUoXG4gICAgICB7XG4gICAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICAgIFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLnRva2VuXCI6IG9wdGlvbnMucmVzdW1lXG4gICAgICB9LFxuICAgICAgeyRhZGRUb1NldDoge1xuICAgICAgICAgIFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zXCI6IHtcbiAgICAgICAgICAgIFwiaGFzaGVkVG9rZW5cIjogaGFzaGVkVG9rZW4sXG4gICAgICAgICAgICBcIndoZW5cIjogdG9rZW4ud2hlblxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICApO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBvbGQgdG9rZW4gKmFmdGVyKiBhZGRpbmcgdGhlIG5ldywgc2luY2Ugb3RoZXJ3aXNlXG4gICAgLy8gYW5vdGhlciBjbGllbnQgdHJ5aW5nIHRvIGxvZ2luIGJldHdlZW4gb3VyIHJlbW92aW5nIHRoZSBvbGQgYW5kXG4gICAgLy8gYWRkaW5nIHRoZSBuZXcgd291bGRuJ3QgZmluZCBhIHRva2VuIHRvIGxvZ2luIHdpdGguXG4gICAgYWNjb3VudHMudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XG4gICAgICAkcHVsbDoge1xuICAgICAgICBcInNlcnZpY2VzLnJlc3VtZS5sb2dpblRva2Vuc1wiOiB7IFwidG9rZW5cIjogb3B0aW9ucy5yZXN1bWUgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgIHN0YW1wZWRMb2dpblRva2VuOiB7XG4gICAgICB0b2tlbjogb3B0aW9ucy5yZXN1bWUsXG4gICAgICB3aGVuOiB0b2tlbi53aGVuXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZXhwaXJlUGFzc3dvcmRUb2tlbiA9IChcbiAgYWNjb3VudHMsXG4gIG9sZGVzdFZhbGlkRGF0ZSxcbiAgdG9rZW5GaWx0ZXIsXG4gIHVzZXJJZFxuKSA9PiB7XG4gIC8vIGJvb2xlYW4gdmFsdWUgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhpcyBtZXRob2Qgd2FzIGNhbGxlZCBmcm9tIGVucm9sbCBhY2NvdW50IHdvcmtmbG93XG4gIGxldCBpc0Vucm9sbCA9IGZhbHNlO1xuICBjb25zdCB1c2VyRmlsdGVyID0gdXNlcklkID8ge19pZDogdXNlcklkfSA6IHt9O1xuICAvLyBjaGVjayBpZiB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkIGZyb20gZW5yb2xsIGFjY291bnQgd29ya2Zsb3dcbiAgaWYodG9rZW5GaWx0ZXJbJ3NlcnZpY2VzLnBhc3N3b3JkLmVucm9sbC5yZWFzb24nXSkge1xuICAgIGlzRW5yb2xsID0gdHJ1ZTtcbiAgfVxuICBsZXQgcmVzZXRSYW5nZU9yID0ge1xuICAgICRvcjogW1xuICAgICAgeyBcInNlcnZpY2VzLnBhc3N3b3JkLnJlc2V0LndoZW5cIjogeyAkbHQ6IG9sZGVzdFZhbGlkRGF0ZSB9IH0sXG4gICAgICB7IFwic2VydmljZXMucGFzc3dvcmQucmVzZXQud2hlblwiOiB7ICRsdDogK29sZGVzdFZhbGlkRGF0ZSB9IH1cbiAgICBdXG4gIH07XG4gIGlmKGlzRW5yb2xsKSB7XG4gICAgcmVzZXRSYW5nZU9yID0ge1xuICAgICAgJG9yOiBbXG4gICAgICAgIHsgXCJzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwud2hlblwiOiB7ICRsdDogb2xkZXN0VmFsaWREYXRlIH0gfSxcbiAgICAgICAgeyBcInNlcnZpY2VzLnBhc3N3b3JkLmVucm9sbC53aGVuXCI6IHsgJGx0OiArb2xkZXN0VmFsaWREYXRlIH0gfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgY29uc3QgZXhwaXJlRmlsdGVyID0geyAkYW5kOiBbdG9rZW5GaWx0ZXIsIHJlc2V0UmFuZ2VPcl0gfTtcbiAgaWYoaXNFbnJvbGwpIHtcbiAgICBhY2NvdW50cy51c2Vycy51cGRhdGUoey4uLnVzZXJGaWx0ZXIsIC4uLmV4cGlyZUZpbHRlcn0sIHtcbiAgICAgICR1bnNldDoge1xuICAgICAgICBcInNlcnZpY2VzLnBhc3N3b3JkLmVucm9sbFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgeyBtdWx0aTogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICBhY2NvdW50cy51c2Vycy51cGRhdGUoey4uLnVzZXJGaWx0ZXIsIC4uLmV4cGlyZUZpbHRlcn0sIHtcbiAgICAgICR1bnNldDoge1xuICAgICAgICBcInNlcnZpY2VzLnBhc3N3b3JkLnJlc2V0XCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCB7IG11bHRpOiB0cnVlIH0pO1xuICB9XG5cbn07XG5cbmNvbnN0IHNldEV4cGlyZVRva2Vuc0ludGVydmFsID0gYWNjb3VudHMgPT4ge1xuICBhY2NvdW50cy5leHBpcmVUb2tlbkludGVydmFsID0gTWV0ZW9yLnNldEludGVydmFsKCgpID0+IHtcbiAgICBhY2NvdW50cy5fZXhwaXJlVG9rZW5zKCk7XG4gICAgYWNjb3VudHMuX2V4cGlyZVBhc3N3b3JkUmVzZXRUb2tlbnMoKTtcbiAgICBhY2NvdW50cy5fZXhwaXJlUGFzc3dvcmRFbnJvbGxUb2tlbnMoKTtcbiAgfSwgRVhQSVJFX1RPS0VOU19JTlRFUlZBTF9NUyk7XG59O1xuXG5jb25zdCBPQXV0aEVuY3J5cHRpb24gPSBQYWNrYWdlW1wib2F1dGgtZW5jcnlwdGlvblwiXT8uT0F1dGhFbmNyeXB0aW9uO1xuXG4vLyBPQXV0aCBzZXJ2aWNlIGRhdGEgaXMgdGVtcG9yYXJpbHkgc3RvcmVkIGluIHRoZSBwZW5kaW5nIGNyZWRlbnRpYWxzXG4vLyBjb2xsZWN0aW9uIGR1cmluZyB0aGUgb2F1dGggYXV0aGVudGljYXRpb24gcHJvY2Vzcy4gIFNlbnNpdGl2ZSBkYXRhXG4vLyBzdWNoIGFzIGFjY2VzcyB0b2tlbnMgYXJlIGVuY3J5cHRlZCB3aXRob3V0IHRoZSB1c2VyIGlkIGJlY2F1c2Vcbi8vIHdlIGRvbid0IGtub3cgdGhlIHVzZXIgaWQgeWV0LiAgV2UgcmUtZW5jcnlwdCB0aGVzZSBmaWVsZHMgd2l0aCB0aGVcbi8vIHVzZXIgaWQgaW5jbHVkZWQgd2hlbiBzdG9yaW5nIHRoZSBzZXJ2aWNlIGRhdGEgcGVybWFuZW50bHkgaW5cbi8vIHRoZSB1c2VycyBjb2xsZWN0aW9uLlxuLy9cbmNvbnN0IHBpbkVuY3J5cHRlZEZpZWxkc1RvVXNlciA9IChzZXJ2aWNlRGF0YSwgdXNlcklkKSA9PiB7XG4gIE9iamVjdC5rZXlzKHNlcnZpY2VEYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgbGV0IHZhbHVlID0gc2VydmljZURhdGFba2V5XTtcbiAgICBpZiAoT0F1dGhFbmNyeXB0aW9uPy5pc1NlYWxlZCh2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IE9BdXRoRW5jcnlwdGlvbi5zZWFsKE9BdXRoRW5jcnlwdGlvbi5vcGVuKHZhbHVlKSwgdXNlcklkKTtcbiAgICBzZXJ2aWNlRGF0YVtrZXldID0gdmFsdWU7XG4gIH0pO1xufTtcblxuLy8gWFhYIHNlZSBjb21tZW50IG9uIEFjY291bnRzLmNyZWF0ZVVzZXIgaW4gcGFzc3dvcmRzX3NlcnZlciBhYm91dCBhZGRpbmcgYVxuLy8gc2Vjb25kIFwic2VydmVyIG9wdGlvbnNcIiBhcmd1bWVudC5cbmNvbnN0IGRlZmF1bHRDcmVhdGVVc2VySG9vayA9IChvcHRpb25zLCB1c2VyKSA9PiB7XG4gIGlmIChvcHRpb25zLnByb2ZpbGUpXG4gICAgdXNlci5wcm9maWxlID0gb3B0aW9ucy5wcm9maWxlO1xuICByZXR1cm4gdXNlcjtcbn07XG5cbi8vIFZhbGlkYXRlIG5ldyB1c2VyJ3MgZW1haWwgb3IgR29vZ2xlL0ZhY2Vib29rL0dpdEh1YiBhY2NvdW50J3MgZW1haWxcbmZ1bmN0aW9uIGRlZmF1bHRWYWxpZGF0ZU5ld1VzZXJIb29rKHVzZXIpIHtcbiAgY29uc3QgZG9tYWluID0gdGhpcy5fb3B0aW9ucy5yZXN0cmljdENyZWF0aW9uQnlFbWFpbERvbWFpbjtcbiAgaWYgKCFkb21haW4pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxldCBlbWFpbElzR29vZCA9IGZhbHNlO1xuICBpZiAodXNlci5lbWFpbHMgJiYgdXNlci5lbWFpbHMubGVuZ3RoID4gMCkge1xuICAgIGVtYWlsSXNHb29kID0gdXNlci5lbWFpbHMucmVkdWNlKFxuICAgICAgKHByZXYsIGVtYWlsKSA9PiBwcmV2IHx8IHRoaXMuX3Rlc3RFbWFpbERvbWFpbihlbWFpbC5hZGRyZXNzKSwgZmFsc2VcbiAgICApO1xuICB9IGVsc2UgaWYgKHVzZXIuc2VydmljZXMgJiYgT2JqZWN0LnZhbHVlcyh1c2VyLnNlcnZpY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gRmluZCBhbnkgZW1haWwgb2YgYW55IHNlcnZpY2UgYW5kIGNoZWNrIGl0XG4gICAgZW1haWxJc0dvb2QgPSBPYmplY3QudmFsdWVzKHVzZXIuc2VydmljZXMpLnJlZHVjZShcbiAgICAgIChwcmV2LCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLmVtYWlsICYmIHRoaXMuX3Rlc3RFbWFpbERvbWFpbihzZXJ2aWNlLmVtYWlsKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBpZiAoZW1haWxJc0dvb2QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9tYWluID09PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBgQCR7ZG9tYWlufSBlbWFpbCByZXF1aXJlZGApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAzLCBcIkVtYWlsIGRvZXNuJ3QgbWF0Y2ggdGhlIGNyaXRlcmlhLlwiKTtcbiAgfVxufVxuXG5jb25zdCBzZXR1cFVzZXJzQ29sbGVjdGlvbiA9IHVzZXJzID0+IHtcbiAgLy8vXG4gIC8vLyBSRVNUUklDVElORyBXUklURVMgVE8gVVNFUiBPQkpFQ1RTXG4gIC8vL1xuICB1c2Vycy5hbGxvdyh7XG4gICAgLy8gY2xpZW50cyBjYW4gbW9kaWZ5IHRoZSBwcm9maWxlIGZpZWxkIG9mIHRoZWlyIG93biBkb2N1bWVudCwgYW5kXG4gICAgLy8gbm90aGluZyBlbHNlLlxuICAgIHVwZGF0ZTogKHVzZXJJZCwgdXNlciwgZmllbGRzLCBtb2RpZmllcikgPT4ge1xuICAgICAgLy8gbWFrZSBzdXJlIGl0IGlzIG91ciByZWNvcmRcbiAgICAgIGlmICh1c2VyLl9pZCAhPT0gdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gdXNlciBjYW4gb25seSBtb2RpZnkgdGhlICdwcm9maWxlJyBmaWVsZC4gc2V0cyB0byBtdWx0aXBsZVxuICAgICAgLy8gc3ViLWtleXMgKGVnIHByb2ZpbGUuZm9vIGFuZCBwcm9maWxlLmJhcikgYXJlIG1lcmdlZCBpbnRvIGVudHJ5XG4gICAgICAvLyBpbiB0aGUgZmllbGRzIGxpc3QuXG4gICAgICBpZiAoZmllbGRzLmxlbmd0aCAhPT0gMSB8fCBmaWVsZHNbMF0gIT09ICdwcm9maWxlJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZmV0Y2g6IFsnX2lkJ10gLy8gd2Ugb25seSBsb29rIGF0IF9pZC5cbiAgfSk7XG5cbiAgLy8vIERFRkFVTFQgSU5ERVhFUyBPTiBVU0VSU1xuICB1c2Vycy5jcmVhdGVJbmRleEFzeW5jKCd1c2VybmFtZScsIHsgdW5pcXVlOiB0cnVlLCBzcGFyc2U6IHRydWUgfSk7XG4gIHVzZXJzLmNyZWF0ZUluZGV4QXN5bmMoJ2VtYWlscy5hZGRyZXNzJywgeyB1bmlxdWU6IHRydWUsIHNwYXJzZTogdHJ1ZSB9KTtcbiAgdXNlcnMuY3JlYXRlSW5kZXhBc3luYygnc2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLmhhc2hlZFRva2VuJyxcbiAgICB7IHVuaXF1ZTogdHJ1ZSwgc3BhcnNlOiB0cnVlIH0pO1xuICB1c2Vycy5jcmVhdGVJbmRleEFzeW5jKCdzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMudG9rZW4nLFxuICAgIHsgdW5pcXVlOiB0cnVlLCBzcGFyc2U6IHRydWUgfSk7XG4gIC8vIEZvciB0YWtpbmcgY2FyZSBvZiBsb2dvdXRPdGhlckNsaWVudHMgY2FsbHMgdGhhdCBjcmFzaGVkIGJlZm9yZSB0aGVcbiAgLy8gdG9rZW5zIHdlcmUgZGVsZXRlZC5cbiAgdXNlcnMuY3JlYXRlSW5kZXhBc3luYygnc2VydmljZXMucmVzdW1lLmhhdmVMb2dpblRva2Vuc1RvRGVsZXRlJyxcbiAgICB7IHNwYXJzZTogdHJ1ZSB9KTtcbiAgLy8gRm9yIGV4cGlyaW5nIGxvZ2luIHRva2Vuc1xuICB1c2Vycy5jcmVhdGVJbmRleEFzeW5jKFwic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLndoZW5cIiwgeyBzcGFyc2U6IHRydWUgfSk7XG4gIC8vIEZvciBleHBpcmluZyBwYXNzd29yZCB0b2tlbnNcbiAgdXNlcnMuY3JlYXRlSW5kZXhBc3luYygnc2VydmljZXMucGFzc3dvcmQucmVzZXQud2hlbicsIHsgc3BhcnNlOiB0cnVlIH0pO1xuICB1c2Vycy5jcmVhdGVJbmRleEFzeW5jKCdzZXJ2aWNlcy5wYXNzd29yZC5lbnJvbGwud2hlbicsIHsgc3BhcnNlOiB0cnVlIH0pO1xufTtcblxuXG4vLyBHZW5lcmF0ZXMgcGVybXV0YXRpb25zIG9mIGFsbCBjYXNlIHZhcmlhdGlvbnMgb2YgYSBnaXZlbiBzdHJpbmcuXG5jb25zdCBnZW5lcmF0ZUNhc2VQZXJtdXRhdGlvbnNGb3JTdHJpbmcgPSBzdHJpbmcgPT4ge1xuICBsZXQgcGVybXV0YXRpb25zID0gWycnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaCA9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgcGVybXV0YXRpb25zID0gW10uY29uY2F0KC4uLihwZXJtdXRhdGlvbnMubWFwKHByZWZpeCA9PiB7XG4gICAgICBjb25zdCBsb3dlckNhc2VDaGFyID0gY2gudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHVwcGVyQ2FzZUNoYXIgPSBjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgLy8gRG9uJ3QgYWRkIHVubmVjZXNzYXJ5IHBlcm11dGF0aW9ucyB3aGVuIGNoIGlzIG5vdCBhIGxldHRlclxuICAgICAgaWYgKGxvd2VyQ2FzZUNoYXIgPT09IHVwcGVyQ2FzZUNoYXIpIHtcbiAgICAgICAgcmV0dXJuIFtwcmVmaXggKyBjaF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW3ByZWZpeCArIGxvd2VyQ2FzZUNoYXIsIHByZWZpeCArIHVwcGVyQ2FzZUNoYXJdO1xuICAgICAgfVxuICAgIH0pKSk7XG4gIH1cbiAgcmV0dXJuIHBlcm11dGF0aW9ucztcbn1cblxuIl19
