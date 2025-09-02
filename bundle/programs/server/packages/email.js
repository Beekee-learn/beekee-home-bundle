(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Log = Package.logging.Log;
var Hook = Package['callback-hook'].Hook;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Email, EmailInternals, EmailTest;

var require = meteorInstall({"node_modules":{"meteor":{"email":{"email.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/email/email.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  let _objectSpread;
  module1.link("@babel/runtime/helpers/objectSpread2", {
    default(v) {
      _objectSpread = v;
    }
  }, 0);
  module1.export({
    Email: () => Email,
    EmailTest: () => EmailTest,
    EmailInternals: () => EmailInternals
  });
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }
  }, 0);
  let Log;
  module1.link("meteor/logging", {
    Log(v) {
      Log = v;
    }
  }, 1);
  let Hook;
  module1.link("meteor/callback-hook", {
    Hook(v) {
      Hook = v;
    }
  }, 2);
  let url;
  module1.link("url", {
    default(v) {
      url = v;
    }
  }, 3);
  let nodemailer;
  module1.link("nodemailer", {
    default(v) {
      nodemailer = v;
    }
  }, 4);
  let wellKnow;
  module1.link("nodemailer/lib/well-known", {
    default(v) {
      wellKnow = v;
    }
  }, 5);
  let openpgpEncrypt;
  module1.link("nodemailer-openpgp", {
    openpgpEncrypt(v) {
      openpgpEncrypt = v;
    }
  }, 6);
  const Email = {};
  const EmailTest = {};
  const EmailInternals = {
    NpmModules: {
      mailcomposer: {
        version: Npm.require('nodemailer/package.json').version,
        module: Npm.require('nodemailer/lib/mail-composer')
      },
      nodemailer: {
        version: Npm.require('nodemailer/package.json').version,
        module: Npm.require('nodemailer')
      }
    }
  };
  const MailComposer = EmailInternals.NpmModules.mailcomposer.module;
  const makeTransport = function (mailUrlString, options) {
    const mailUrl = new URL(mailUrlString);
    if (mailUrl.protocol !== 'smtp:' && mailUrl.protocol !== 'smtps:') {
      throw new Error('Email protocol in $MAIL_URL (' + mailUrlString + ") must be 'smtp' or 'smtps'");
    }
    if (mailUrl.protocol === 'smtp:' && mailUrl.port === '465') {
      Log.debug("The $MAIL_URL is 'smtp://...:465'.  " + "You probably want 'smtps://' (The 's' enables TLS/SSL) " + "since '465' is typically a secure port.");
    }

    // Allow overriding pool setting, but default to true.
    if (!mailUrl.query) {
      mailUrl.query = {};
    }
    if (!mailUrl.query.pool) {
      mailUrl.query.pool = 'true';
    }
    const transport = nodemailer.createTransport(url.format(mailUrl));
    if (options !== null && options !== void 0 && options.encryptionKeys || options !== null && options !== void 0 && options.shouldSign) {
      transport.use('stream', openpgpEncrypt(options));
    }
    transport._syncSendMail = Meteor.wrapAsync(transport.sendMail, transport);
    return transport;
  };

  // More info: https://nodemailer.com/smtp/well-known/
  const knownHostsTransport = function () {
    let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    let url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    let options = arguments.length > 2 ? arguments[2] : undefined;
    let service, user, password;
    const hasSettings = settings && Object.keys(settings).length;
    if (url && !hasSettings) {
      let host = url.split(':')[0];
      const urlObject = new URL(url);
      if (host === 'http' || host === 'https') {
        // Look to hostname for service
        host = urlObject.hostname;
        user = urlObject.username;
        password = urlObject.password;
      } else if (urlObject.protocol && urlObject.username && urlObject.password) {
        // We have some data from urlObject
        host = urlObject.protocol.split(':')[0];
        user = urlObject.username;
        password = urlObject.password;
      } else {
        var _urlObject$pathname$s;
        // We need to disect the URL ourselves to get the data
        // First get rid of the leading '//' and split to username and the rest
        const temp = (_urlObject$pathname$s = urlObject.pathname.substring(2)) === null || _urlObject$pathname$s === void 0 ? void 0 : _urlObject$pathname$s.split(':');
        user = temp[0];
        // Now we split by '@' to get password and hostname
        const temp2 = temp[1].split('@');
        password = temp2[0];
        host = temp2[1];
      }
      service = host;
    }
    if (!wellKnow((settings === null || settings === void 0 ? void 0 : settings.service) || service)) {
      throw new Error('Could not recognize e-mail service. See list at https://nodemailer.com/smtp/well-known/ for services that we can configure for you.');
    }
    const transport = nodemailer.createTransport({
      service: (settings === null || settings === void 0 ? void 0 : settings.service) || service,
      auth: {
        user: (settings === null || settings === void 0 ? void 0 : settings.user) || user,
        pass: (settings === null || settings === void 0 ? void 0 : settings.password) || password
      }
    });
    if (options !== null && options !== void 0 && options.encryptionKeys || options !== null && options !== void 0 && options.shouldSign) {
      transport.use('stream', openpgpEncrypt(options));
    }
    transport._syncSendMail = Meteor.wrapAsync(transport.sendMail, transport);
    return transport;
  };
  EmailTest.knowHostsTransport = knownHostsTransport;
  const getTransport = function (options) {
    var _Meteor$settings$pack;
    const packageSettings = ((_Meteor$settings$pack = Meteor.settings.packages) === null || _Meteor$settings$pack === void 0 ? void 0 : _Meteor$settings$pack.email) || {};
    // We delay this check until the first call to Email.send, in case someone
    // set process.env.MAIL_URL in startup code. Then we store in a cache until
    // process.env.MAIL_URL changes.
    const url = process.env.MAIL_URL;
    if (this.cacheKey === undefined || this.cacheKey !== url || this.cacheKey !== packageSettings.service || this.cacheKey !== 'settings') {
      if (packageSettings.service && wellKnow(packageSettings.service) || url && wellKnow(new URL(url).hostname) || wellKnow((url === null || url === void 0 ? void 0 : url.split(':')[0]) || '')) {
        this.cacheKey = packageSettings.service || 'settings';
        this.cache = knownHostsTransport(packageSettings, url, options);
      } else {
        this.cacheKey = url;
        this.cache = url ? makeTransport(url, options) : null;
      }
    }
    return this.cache;
  };
  let nextDevModeMailId = 0;
  EmailTest._getAndIncNextDevModeMailId = function () {
    return nextDevModeMailId++;
  };

  // Testing hooks
  EmailTest.resetNextDevModeMailId = function () {
    nextDevModeMailId = 0;
  };
  const devModeSendAsync = function (mail, options) {
    const stream = (options === null || options === void 0 ? void 0 : options.stream) || process.stdout;
    return new Promise((resolve, reject) => {
      let devModeMailId = EmailTest._getAndIncNextDevModeMailId();

      // This approach does not prevent other writers to stdout from interleaving.
      const output = ['====== BEGIN MAIL #' + devModeMailId + ' ======\n'];
      output.push('(Mail not sent; to enable sending, set the MAIL_URL ' + 'environment variable.)\n');
      const readStream = new MailComposer(mail).compile().createReadStream();
      readStream.on('data', buffer => {
        output.push(buffer.toString());
      });
      readStream.on('end', function () {
        output.push('====== END MAIL #' + devModeMailId + ' ======\n');
        stream.write(output.join(''), () => resolve());
      });
      readStream.on('error', err => reject(err));
    });
  };
  const smtpSend = function (transport, mail) {
    transport._syncSendMail(mail);
  };
  const sendHooks = new Hook();

  /**
   * @summary Hook that runs before email is sent.
   * @locus Server
   *
   * @param f {function} receives the arguments to Email.send and should return true to go
   * ahead and send the email (or at least, try subsequent hooks), or
   * false to skip sending.
   * @returns {{ stop: function, callback: function }}
   */
  Email.hookSend = function (f) {
    return sendHooks.register(f);
  };

  /**
   * @summary Overrides sending function with your own.
   * @locus Server
   * @since 2.2
   * @param f {function} function that will receive options from the send function and under `packageSettings` will
   * include the package settings from Meteor.settings.packages.email for your custom transport to access.
   */
  Email.customTransport = undefined;

  /**
   * @summary Send an email. Throws an `Error` on failure to contact mail server
   * or if mail server returns an error. All fields should match
   * [RFC5322](http://tools.ietf.org/html/rfc5322) specification.
   *
   * If the `MAIL_URL` environment variable is set, actually sends the email.
   * Otherwise, prints the contents of the email to standard out.
   *
   * Note that this package is based on **nodemailer**, so make sure to refer to
   * [the documentation](http://nodemailer.com/)
   * when using the `attachments` or `mailComposer` options.
   *
   * @locus Server
   * @param {Object} options
   * @param {String} [options.from] "From:" address (required)
   * @param {String|String[]} options.to,cc,bcc,replyTo
   *   "To:", "Cc:", "Bcc:", and "Reply-To:" addresses
   * @param {String} [options.inReplyTo] Message-ID this message is replying to
   * @param {String|String[]} [options.references] Array (or space-separated string) of Message-IDs to refer to
   * @param {String} [options.messageId] Message-ID for this message; otherwise, will be set to a random value
   * @param {String} [options.subject]  "Subject:" line
   * @param {String} [options.text|html] Mail body (in plain text and/or HTML)
   * @param {String} [options.watchHtml] Mail body in HTML specific for Apple Watch
   * @param {String} [options.icalEvent] iCalendar event attachment
   * @param {Object} [options.headers] Dictionary of custom headers - e.g. `{ "header name": "header value" }`. To set an object under a header name, use `JSON.stringify` - e.g. `{ "header name": JSON.stringify({ tracking: { level: 'full' } }) }`.
   * @param {Object[]} [options.attachments] Array of attachment objects, as
   * described in the [nodemailer documentation](https://nodemailer.com/message/attachments/).
   * @param {MailComposer} [options.mailComposer] A [MailComposer](https://nodemailer.com/extras/mailcomposer/#e-mail-message-fields)
   * object representing the message to be sent.  Overrides all other options.
   * You can create a `MailComposer` object via
   * `new EmailInternals.NpmModules.mailcomposer.module`.
   */
  Email.send = function (options) {
    if (Email.customTransport) {
      var _Meteor$settings$pack2;
      // Preserve current behavior
      const email = options.mailComposer ? options.mailComposer.mail : options;
      let send = true;
      sendHooks.forEach(hook => {
        send = hook(email);
        return send;
      });
      if (!send) {
        return;
      }
      const packageSettings = ((_Meteor$settings$pack2 = Meteor.settings.packages) === null || _Meteor$settings$pack2 === void 0 ? void 0 : _Meteor$settings$pack2.email) || {};
      Email.customTransport(_objectSpread({
        packageSettings
      }, email));
      return;
    }
    // Using Fibers Promise.await
    return Promise.await(Email.sendAsync(options));
  };

  /**
   * @summary Send an email with asyncronous method. Capture  Throws an `Error` on failure to contact mail server
   * or if mail server returns an error. All fields should match
   * [RFC5322](http://tools.ietf.org/html/rfc5322) specification.
   *
   * If the `MAIL_URL` environment variable is set, actually sends the email.
   * Otherwise, prints the contents of the email to standard out.
   *
   * Note that this package is based on **nodemailer**, so make sure to refer to
   * [the documentation](http://nodemailer.com/)
   * when using the `attachments` or `mailComposer` options.
   *
   * @locus Server
   * @return {Promise}
   * @param {Object} options
   * @param {String} [options.from] "From:" address (required)
   * @param {String|String[]} options.to,cc,bcc,replyTo
   *   "To:", "Cc:", "Bcc:", and "Reply-To:" addresses
   * @param {String} [options.inReplyTo] Message-ID this message is replying to
   * @param {String|String[]} [options.references] Array (or space-separated string) of Message-IDs to refer to
   * @param {String} [options.messageId] Message-ID for this message; otherwise, will be set to a random value
   * @param {String} [options.subject]  "Subject:" line
   * @param {String} [options.text|html] Mail body (in plain text and/or HTML)
   * @param {String} [options.watchHtml] Mail body in HTML specific for Apple Watch
   * @param {String} [options.icalEvent] iCalendar event attachment
   * @param {Object} [options.headers] Dictionary of custom headers - e.g. `{ "header name": "header value" }`. To set an object under a header name, use `JSON.stringify` - e.g. `{ "header name": JSON.stringify({ tracking: { level: 'full' } }) }`.
   * @param {Object[]} [options.attachments] Array of attachment objects, as
   * described in the [nodemailer documentation](https://nodemailer.com/message/attachments/).
   * @param {MailComposer} [options.mailComposer] A [MailComposer](https://nodemailer.com/extras/mailcomposer/#e-mail-message-fields)
   * object representing the message to be sent.  Overrides all other options.
   * You can create a `MailComposer` object via
   * `new EmailInternals.NpmModules.mailcomposer.module`.
   * @param {String} [options.encryptionKeys] An array that holds the public keys used to encrypt.
   * @param {String} [options.shouldSign] Enables you to allow or disallow email signing. 
  */
  Email.sendAsync = function (options) {
    return Promise.asyncApply(() => {
      var _Meteor$settings$pack4;
      const email = options.mailComposer ? options.mailComposer.mail : options;
      let send = true;
      sendHooks.forEach(hook => {
        send = hook(email);
        return send;
      });
      if (!send) {
        return;
      }
      if (Email.customTransport) {
        var _Meteor$settings$pack3;
        const packageSettings = ((_Meteor$settings$pack3 = Meteor.settings.packages) === null || _Meteor$settings$pack3 === void 0 ? void 0 : _Meteor$settings$pack3.email) || {};
        return Email.customTransport(_objectSpread({
          packageSettings
        }, email));
      }
      const mailUrlEnv = process.env.MAIL_URL;
      const mailUrlSettings = (_Meteor$settings$pack4 = Meteor.settings.packages) === null || _Meteor$settings$pack4 === void 0 ? void 0 : _Meteor$settings$pack4.email;
      if (Meteor.isProduction && !mailUrlEnv && !mailUrlSettings) {
        // This check is mostly necessary when using the flag --production when running locally.
        // And it works as a reminder to properly set the mail URL when running locally.
        throw new Error('You have not provided a mail URL. You can provide it by using the environment variable MAIL_URL or your settings. You can read more about it here: https://docs.meteor.com/api/email.html.');
      }
      if (mailUrlEnv || mailUrlSettings) {
        const transport = getTransport(options);
        smtpSend(transport, email);
        return;
      }
      return devModeSendAsync(email, options);
    });
  };
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"nodemailer":{"package.json":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/package.json                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = {
  "name": "nodemailer",
  "version": "6.9.10",
  "main": "lib/nodemailer.js"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"nodemailer.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/lib/nodemailer.js                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"well-known":{"index.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer/lib/well-known/index.js                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"nodemailer-openpgp":{"package.json":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer-openpgp/package.json                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = {
  "name": "nodemailer-openpgp",
  "version": "2.2.0",
  "main": "lib/nodemailer-openpgp"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"nodemailer-openpgp.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/email/node_modules/nodemailer-openpgp/lib/nodemailer-openpgp.js                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/email/email.js");

/* Exports */
Package._define("email", exports, {
  Email: Email,
  EmailInternals: EmailInternals,
  EmailTest: EmailTest
});

})();

//# sourceURL=meteor://💻app/packages/email.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZW1haWwvZW1haWwuanMiXSwibmFtZXMiOlsiX29iamVjdFNwcmVhZCIsIm1vZHVsZTEiLCJsaW5rIiwiZGVmYXVsdCIsInYiLCJleHBvcnQiLCJFbWFpbCIsIkVtYWlsVGVzdCIsIkVtYWlsSW50ZXJuYWxzIiwiTWV0ZW9yIiwiTG9nIiwiSG9vayIsInVybCIsIm5vZGVtYWlsZXIiLCJ3ZWxsS25vdyIsIm9wZW5wZ3BFbmNyeXB0IiwiTnBtTW9kdWxlcyIsIm1haWxjb21wb3NlciIsInZlcnNpb24iLCJOcG0iLCJyZXF1aXJlIiwibW9kdWxlIiwiTWFpbENvbXBvc2VyIiwibWFrZVRyYW5zcG9ydCIsIm1haWxVcmxTdHJpbmciLCJvcHRpb25zIiwibWFpbFVybCIsIlVSTCIsInByb3RvY29sIiwiRXJyb3IiLCJwb3J0IiwiZGVidWciLCJxdWVyeSIsInBvb2wiLCJ0cmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJmb3JtYXQiLCJlbmNyeXB0aW9uS2V5cyIsInNob3VsZFNpZ24iLCJ1c2UiLCJfc3luY1NlbmRNYWlsIiwid3JhcEFzeW5jIiwic2VuZE1haWwiLCJrbm93bkhvc3RzVHJhbnNwb3J0Iiwic2V0dGluZ3MiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXJ2aWNlIiwidXNlciIsInBhc3N3b3JkIiwiaGFzU2V0dGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiaG9zdCIsInNwbGl0IiwidXJsT2JqZWN0IiwiaG9zdG5hbWUiLCJ1c2VybmFtZSIsIl91cmxPYmplY3QkcGF0aG5hbWUkcyIsInRlbXAiLCJwYXRobmFtZSIsInN1YnN0cmluZyIsInRlbXAyIiwiYXV0aCIsInBhc3MiLCJrbm93SG9zdHNUcmFuc3BvcnQiLCJnZXRUcmFuc3BvcnQiLCJfTWV0ZW9yJHNldHRpbmdzJHBhY2siLCJwYWNrYWdlU2V0dGluZ3MiLCJwYWNrYWdlcyIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIk1BSUxfVVJMIiwiY2FjaGVLZXkiLCJjYWNoZSIsIm5leHREZXZNb2RlTWFpbElkIiwiX2dldEFuZEluY05leHREZXZNb2RlTWFpbElkIiwicmVzZXROZXh0RGV2TW9kZU1haWxJZCIsImRldk1vZGVTZW5kQXN5bmMiLCJtYWlsIiwic3RyZWFtIiwic3Rkb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkZXZNb2RlTWFpbElkIiwib3V0cHV0IiwicHVzaCIsInJlYWRTdHJlYW0iLCJjb21waWxlIiwiY3JlYXRlUmVhZFN0cmVhbSIsIm9uIiwiYnVmZmVyIiwidG9TdHJpbmciLCJ3cml0ZSIsImpvaW4iLCJlcnIiLCJzbXRwU2VuZCIsInNlbmRIb29rcyIsImhvb2tTZW5kIiwiZiIsInJlZ2lzdGVyIiwiY3VzdG9tVHJhbnNwb3J0Iiwic2VuZCIsIl9NZXRlb3Ikc2V0dGluZ3MkcGFjazIiLCJtYWlsQ29tcG9zZXIiLCJmb3JFYWNoIiwiaG9vayIsImF3YWl0Iiwic2VuZEFzeW5jIiwiYXN5bmNBcHBseSIsIl9NZXRlb3Ikc2V0dGluZ3MkcGFjazQiLCJfTWV0ZW9yJHNldHRpbmdzJHBhY2szIiwibWFpbFVybEVudiIsIm1haWxVcmxTZXR0aW5ncyIsImlzUHJvZHVjdGlvbiIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQUlBLGFBQWE7RUFBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0NBQXNDLEVBQUM7SUFBQ0MsT0FBT0EsQ0FBQ0MsQ0FBQyxFQUFDO01BQUNKLGFBQWEsR0FBQ0ksQ0FBQztJQUFBO0VBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztFQUF0R0gsT0FBTyxDQUFDSSxNQUFNLENBQUM7SUFBQ0MsS0FBSyxFQUFDQSxDQUFBLEtBQUlBLEtBQUs7SUFBQ0MsU0FBUyxFQUFDQSxDQUFBLEtBQUlBLFNBQVM7SUFBQ0MsY0FBYyxFQUFDQSxDQUFBLEtBQUlBO0VBQWMsQ0FBQyxDQUFDO0VBQUMsSUFBSUMsTUFBTTtFQUFDUixPQUFP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b250ZW50IjpbImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnbWV0ZW9yL2xvZ2dpbmcnO1xuaW1wb3J0IHsgSG9vayB9IGZyb20gJ21ldGVvci9jYWxsYmFjay1ob29rJztcblxuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5pbXBvcnQgd2VsbEtub3cgZnJvbSAnbm9kZW1haWxlci9saWIvd2VsbC1rbm93bic7XG5pbXBvcnQgeyBvcGVucGdwRW5jcnlwdCB9IGZyb20gJ25vZGVtYWlsZXItb3BlbnBncCc7XG5cbmV4cG9ydCBjb25zdCBFbWFpbCA9IHt9O1xuZXhwb3J0IGNvbnN0IEVtYWlsVGVzdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgRW1haWxJbnRlcm5hbHMgPSB7XG4gIE5wbU1vZHVsZXM6IHtcbiAgICBtYWlsY29tcG9zZXI6IHtcbiAgICAgIHZlcnNpb246IE5wbS5yZXF1aXJlKCdub2RlbWFpbGVyL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gICAgICBtb2R1bGU6IE5wbS5yZXF1aXJlKCdub2RlbWFpbGVyL2xpYi9tYWlsLWNvbXBvc2VyJyksXG4gICAgfSxcbiAgICBub2RlbWFpbGVyOiB7XG4gICAgICB2ZXJzaW9uOiBOcG0ucmVxdWlyZSgnbm9kZW1haWxlci9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICAgICAgbW9kdWxlOiBOcG0ucmVxdWlyZSgnbm9kZW1haWxlcicpLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBNYWlsQ29tcG9zZXIgPSBFbWFpbEludGVybmFscy5OcG1Nb2R1bGVzLm1haWxjb21wb3Nlci5tb2R1bGU7XG5cbmNvbnN0IG1ha2VUcmFuc3BvcnQgPSBmdW5jdGlvbiAobWFpbFVybFN0cmluZywgb3B0aW9ucykge1xuICBjb25zdCBtYWlsVXJsID0gbmV3IFVSTChtYWlsVXJsU3RyaW5nKTtcblxuICBpZiAobWFpbFVybC5wcm90b2NvbCAhPT0gJ3NtdHA6JyAmJiBtYWlsVXJsLnByb3RvY29sICE9PSAnc210cHM6Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdFbWFpbCBwcm90b2NvbCBpbiAkTUFJTF9VUkwgKCcgK1xuICAgICAgICBtYWlsVXJsU3RyaW5nICtcbiAgICAgICAgXCIpIG11c3QgYmUgJ3NtdHAnIG9yICdzbXRwcydcIlxuICAgICk7XG4gIH1cblxuICBpZiAobWFpbFVybC5wcm90b2NvbCA9PT0gJ3NtdHA6JyAmJiBtYWlsVXJsLnBvcnQgPT09ICc0NjUnKSB7XG4gICAgTG9nLmRlYnVnKFxuICAgICAgXCJUaGUgJE1BSUxfVVJMIGlzICdzbXRwOi8vLi4uOjQ2NScuICBcIiArXG4gICAgICAgIFwiWW91IHByb2JhYmx5IHdhbnQgJ3NtdHBzOi8vJyAoVGhlICdzJyBlbmFibGVzIFRMUy9TU0wpIFwiICtcbiAgICAgICAgXCJzaW5jZSAnNDY1JyBpcyB0eXBpY2FsbHkgYSBzZWN1cmUgcG9ydC5cIlxuICAgICk7XG4gIH1cblxuICAvLyBBbGxvdyBvdmVycmlkaW5nIHBvb2wgc2V0dGluZywgYnV0IGRlZmF1bHQgdG8gdHJ1ZS5cbiAgaWYgKCFtYWlsVXJsLnF1ZXJ5KSB7XG4gICAgbWFpbFVybC5xdWVyeSA9IHt9O1xuICB9XG5cbiAgaWYgKCFtYWlsVXJsLnF1ZXJ5LnBvb2wpIHtcbiAgICBtYWlsVXJsLnF1ZXJ5LnBvb2wgPSAndHJ1ZSc7XG4gIH1cblxuICBjb25zdCB0cmFuc3BvcnQgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh1cmwuZm9ybWF0KG1haWxVcmwpKTtcbiAgaWYgKG9wdGlvbnM/LmVuY3J5cHRpb25LZXlzIHx8IG9wdGlvbnM/LnNob3VsZFNpZ24pIHtcbiAgICB0cmFuc3BvcnQudXNlKCdzdHJlYW0nLCBvcGVucGdwRW5jcnlwdChvcHRpb25zKSk7XG4gIH1cbiAgdHJhbnNwb3J0Ll9zeW5jU2VuZE1haWwgPSBNZXRlb3Iud3JhcEFzeW5jKHRyYW5zcG9ydC5zZW5kTWFpbCwgdHJhbnNwb3J0KTtcbiAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG5cbi8vIE1vcmUgaW5mbzogaHR0cHM6Ly9ub2RlbWFpbGVyLmNvbS9zbXRwL3dlbGwta25vd24vXG5jb25zdCBrbm93bkhvc3RzVHJhbnNwb3J0ID0gZnVuY3Rpb24gKHNldHRpbmdzID0gdW5kZWZpbmVkLCB1cmwgPSB1bmRlZmluZWQsIG9wdGlvbnMpIHtcbiAgbGV0IHNlcnZpY2UsIHVzZXIsIHBhc3N3b3JkO1xuXG4gIGNvbnN0IGhhc1NldHRpbmdzID0gc2V0dGluZ3MgJiYgT2JqZWN0LmtleXMoc2V0dGluZ3MpLmxlbmd0aDtcblxuICBpZiAodXJsICYmICFoYXNTZXR0aW5ncykge1xuICAgIGxldCBob3N0ID0gdXJsLnNwbGl0KCc6JylbMF07XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwpO1xuICAgIGlmIChob3N0ID09PSAnaHR0cCcgfHwgaG9zdCA9PT0gJ2h0dHBzJykge1xuICAgICAgLy8gTG9vayB0byBob3N0bmFtZSBmb3Igc2VydmljZVxuICAgICAgaG9zdCA9IHVybE9iamVjdC5ob3N0bmFtZTtcbiAgICAgIHVzZXIgPSB1cmxPYmplY3QudXNlcm5hbWU7XG4gICAgICBwYXNzd29yZCA9IHVybE9iamVjdC5wYXNzd29yZDtcbiAgICB9IGVsc2UgaWYgKHVybE9iamVjdC5wcm90b2NvbCAmJiB1cmxPYmplY3QudXNlcm5hbWUgJiYgdXJsT2JqZWN0LnBhc3N3b3JkKSB7XG4gICAgICAvLyBXZSBoYXZlIHNvbWUgZGF0YSBmcm9tIHVybE9iamVjdFxuICAgICAgaG9zdCA9IHVybE9iamVjdC5wcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICAgICAgdXNlciA9IHVybE9iamVjdC51c2VybmFtZTtcbiAgICAgIHBhc3N3b3JkID0gdXJsT2JqZWN0LnBhc3N3b3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGRpc2VjdCB0aGUgVVJMIG91cnNlbHZlcyB0byBnZXQgdGhlIGRhdGFcbiAgICAgIC8vIEZpcnN0IGdldCByaWQgb2YgdGhlIGxlYWRpbmcgJy8vJyBhbmQgc3BsaXQgdG8gdXNlcm5hbWUgYW5kIHRoZSByZXN0XG4gICAgICBjb25zdCB0ZW1wID0gdXJsT2JqZWN0LnBhdGhuYW1lLnN1YnN0cmluZygyKT8uc3BsaXQoJzonKTtcbiAgICAgIHVzZXIgPSB0ZW1wWzBdO1xuICAgICAgLy8gTm93IHdlIHNwbGl0IGJ5ICdAJyB0byBnZXQgcGFzc3dvcmQgYW5kIGhvc3RuYW1lXG4gICAgICBjb25zdCB0ZW1wMiA9IHRlbXBbMV0uc3BsaXQoJ0AnKTtcbiAgICAgIHBhc3N3b3JkID0gdGVtcDJbMF07XG4gICAgICBob3N0ID0gdGVtcDJbMV07XG4gICAgfVxuICAgIHNlcnZpY2UgPSBob3N0O1xuICB9XG5cbiAgaWYgKCF3ZWxsS25vdyhzZXR0aW5ncz8uc2VydmljZSB8fCBzZXJ2aWNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDb3VsZCBub3QgcmVjb2duaXplIGUtbWFpbCBzZXJ2aWNlLiBTZWUgbGlzdCBhdCBodHRwczovL25vZGVtYWlsZXIuY29tL3NtdHAvd2VsbC1rbm93bi8gZm9yIHNlcnZpY2VzIHRoYXQgd2UgY2FuIGNvbmZpZ3VyZSBmb3IgeW91LidcbiAgICApO1xuICB9XG5cbiAgY29uc3QgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6IHNldHRpbmdzPy5zZXJ2aWNlIHx8IHNlcnZpY2UsXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogc2V0dGluZ3M/LnVzZXIgfHwgdXNlcixcbiAgICAgIHBhc3M6IHNldHRpbmdzPy5wYXNzd29yZCB8fCBwYXNzd29yZCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAob3B0aW9ucz8uZW5jcnlwdGlvbktleXMgfHwgb3B0aW9ucz8uc2hvdWxkU2lnbikge1xuICAgIHRyYW5zcG9ydC51c2UoJ3N0cmVhbScsIG9wZW5wZ3BFbmNyeXB0KG9wdGlvbnMpKTtcbiAgfVxuICB0cmFuc3BvcnQuX3N5bmNTZW5kTWFpbCA9IE1ldGVvci53cmFwQXN5bmModHJhbnNwb3J0LnNlbmRNYWlsLCB0cmFuc3BvcnQpO1xuICByZXR1cm4gdHJhbnNwb3J0O1xufTtcbkVtYWlsVGVzdC5rbm93SG9zdHNUcmFuc3BvcnQgPSBrbm93bkhvc3RzVHJhbnNwb3J0O1xuXG5jb25zdCBnZXRUcmFuc3BvcnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBjb25zdCBwYWNrYWdlU2V0dGluZ3MgPSBNZXRlb3Iuc2V0dGluZ3MucGFja2FnZXM/LmVtYWlsIHx8IHt9O1xuICAvLyBXZSBkZWxheSB0aGlzIGNoZWNrIHVudGlsIHRoZSBmaXJzdCBjYWxsIHRvIEVtYWlsLnNlbmQsIGluIGNhc2Ugc29tZW9uZVxuICAvLyBzZXQgcHJvY2Vzcy5lbnYuTUFJTF9VUkwgaW4gc3RhcnR1cCBjb2RlLiBUaGVuIHdlIHN0b3JlIGluIGEgY2FjaGUgdW50aWxcbiAgLy8gcHJvY2Vzcy5lbnYuTUFJTF9VUkwgY2hhbmdlcy5cbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTUFJTF9VUkw7XG4gIGlmIChcbiAgICB0aGlzLmNhY2hlS2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICB0aGlzLmNhY2hlS2V5ICE9PSB1cmwgfHxcbiAgICB0aGlzLmNhY2hlS2V5ICE9PSBwYWNrYWdlU2V0dGluZ3Muc2VydmljZSB8fFxuICAgIHRoaXMuY2FjaGVLZXkgIT09ICdzZXR0aW5ncydcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgKHBhY2thZ2VTZXR0aW5ncy5zZXJ2aWNlICYmIHdlbGxLbm93KHBhY2thZ2VTZXR0aW5ncy5zZXJ2aWNlKSkgfHxcbiAgICAgICh1cmwgJiYgd2VsbEtub3cobmV3IFVSTCh1cmwpLmhvc3RuYW1lKSkgfHxcbiAgICAgIHdlbGxLbm93KHVybD8uc3BsaXQoJzonKVswXSB8fCAnJylcbiAgICApIHtcbiAgICAgIHRoaXMuY2FjaGVLZXkgPSBwYWNrYWdlU2V0dGluZ3Muc2VydmljZSB8fCAnc2V0dGluZ3MnO1xuICAgICAgdGhpcy5jYWNoZSA9IGtub3duSG9zdHNUcmFuc3BvcnQocGFja2FnZVNldHRpbmdzLCB1cmwsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlS2V5ID0gdXJsO1xuICAgICAgdGhpcy5jYWNoZSA9IHVybCA/IG1ha2VUcmFuc3BvcnQodXJsLCBvcHRpb25zKSA6IG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzLmNhY2hlO1xufTtcblxubGV0IG5leHREZXZNb2RlTWFpbElkID0gMDtcblxuRW1haWxUZXN0Ll9nZXRBbmRJbmNOZXh0RGV2TW9kZU1haWxJZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5leHREZXZNb2RlTWFpbElkKys7XG59O1xuXG4vLyBUZXN0aW5nIGhvb2tzXG5FbWFpbFRlc3QucmVzZXROZXh0RGV2TW9kZU1haWxJZCA9IGZ1bmN0aW9uICgpIHtcbiAgbmV4dERldk1vZGVNYWlsSWQgPSAwO1xufTtcblxuY29uc3QgZGV2TW9kZVNlbmRBc3luYyA9IGZ1bmN0aW9uIChtYWlsLCBvcHRpb25zKSB7XG4gIGNvbnN0IHN0cmVhbSA9IG9wdGlvbnM/LnN0cmVhbSB8fCBwcm9jZXNzLnN0ZG91dDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgZGV2TW9kZU1haWxJZCA9IEVtYWlsVGVzdC5fZ2V0QW5kSW5jTmV4dERldk1vZGVNYWlsSWQoKTtcblxuICAgIC8vIFRoaXMgYXBwcm9hY2ggZG9lcyBub3QgcHJldmVudCBvdGhlciB3cml0ZXJzIHRvIHN0ZG91dCBmcm9tIGludGVybGVhdmluZy5cbiAgICBjb25zdCBvdXRwdXQgPSBbJz09PT09PSBCRUdJTiBNQUlMICMnICsgZGV2TW9kZU1haWxJZCArICcgPT09PT09XFxuJ107XG4gICAgb3V0cHV0LnB1c2goXG4gICAgICAnKE1haWwgbm90IHNlbnQ7IHRvIGVuYWJsZSBzZW5kaW5nLCBzZXQgdGhlIE1BSUxfVVJMICcgK1xuICAgICAgJ2Vudmlyb25tZW50IHZhcmlhYmxlLilcXG4nXG4gICAgKTtcbiAgICBjb25zdCByZWFkU3RyZWFtID0gbmV3IE1haWxDb21wb3NlcihtYWlsKS5jb21waWxlKCkuY3JlYXRlUmVhZFN0cmVhbSgpO1xuICAgIHJlYWRTdHJlYW0ub24oJ2RhdGEnLCBidWZmZXIgPT4ge1xuICAgICAgb3V0cHV0LnB1c2goYnVmZmVyLnRvU3RyaW5nKCkpO1xuICAgIH0pO1xuICAgIHJlYWRTdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG91dHB1dC5wdXNoKCc9PT09PT0gRU5EIE1BSUwgIycgKyBkZXZNb2RlTWFpbElkICsgJyA9PT09PT1cXG4nKTtcbiAgICAgIHN0cmVhbS53cml0ZShvdXRwdXQuam9pbignJyksICgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gICAgcmVhZFN0cmVhbS5vbignZXJyb3InLCAoZXJyKSA9PiByZWplY3QoZXJyKSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc210cFNlbmQgPSBmdW5jdGlvbiAodHJhbnNwb3J0LCBtYWlsKSB7XG4gIHRyYW5zcG9ydC5fc3luY1NlbmRNYWlsKG1haWwpO1xufTtcblxuY29uc3Qgc2VuZEhvb2tzID0gbmV3IEhvb2soKTtcblxuLyoqXG4gKiBAc3VtbWFyeSBIb29rIHRoYXQgcnVucyBiZWZvcmUgZW1haWwgaXMgc2VudC5cbiAqIEBsb2N1cyBTZXJ2ZXJcbiAqXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IHJlY2VpdmVzIHRoZSBhcmd1bWVudHMgdG8gRW1haWwuc2VuZCBhbmQgc2hvdWxkIHJldHVybiB0cnVlIHRvIGdvXG4gKiBhaGVhZCBhbmQgc2VuZCB0aGUgZW1haWwgKG9yIGF0IGxlYXN0LCB0cnkgc3Vic2VxdWVudCBob29rcyksIG9yXG4gKiBmYWxzZSB0byBza2lwIHNlbmRpbmcuXG4gKiBAcmV0dXJucyB7eyBzdG9wOiBmdW5jdGlvbiwgY2FsbGJhY2s6IGZ1bmN0aW9uIH19XG4gKi9cbkVtYWlsLmhvb2tTZW5kID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIHNlbmRIb29rcy5yZWdpc3RlcihmKTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgT3ZlcnJpZGVzIHNlbmRpbmcgZnVuY3Rpb24gd2l0aCB5b3VyIG93bi5cbiAqIEBsb2N1cyBTZXJ2ZXJcbiAqIEBzaW5jZSAyLjJcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgb3B0aW9ucyBmcm9tIHRoZSBzZW5kIGZ1bmN0aW9uIGFuZCB1bmRlciBgcGFja2FnZVNldHRpbmdzYCB3aWxsXG4gKiBpbmNsdWRlIHRoZSBwYWNrYWdlIHNldHRpbmdzIGZyb20gTWV0ZW9yLnNldHRpbmdzLnBhY2thZ2VzLmVtYWlsIGZvciB5b3VyIGN1c3RvbSB0cmFuc3BvcnQgdG8gYWNjZXNzLlxuICovXG5FbWFpbC5jdXN0b21UcmFuc3BvcnQgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogQHN1bW1hcnkgU2VuZCBhbiBlbWFpbC4gVGhyb3dzIGFuIGBFcnJvcmAgb24gZmFpbHVyZSB0byBjb250YWN0IG1haWwgc2VydmVyXG4gKiBvciBpZiBtYWlsIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLiBBbGwgZmllbGRzIHNob3VsZCBtYXRjaFxuICogW1JGQzUzMjJdKGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIpIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIGBNQUlMX1VSTGAgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgc2V0LCBhY3R1YWxseSBzZW5kcyB0aGUgZW1haWwuXG4gKiBPdGhlcndpc2UsIHByaW50cyB0aGUgY29udGVudHMgb2YgdGhlIGVtYWlsIHRvIHN0YW5kYXJkIG91dC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBwYWNrYWdlIGlzIGJhc2VkIG9uICoqbm9kZW1haWxlcioqLCBzbyBtYWtlIHN1cmUgdG8gcmVmZXIgdG9cbiAqIFt0aGUgZG9jdW1lbnRhdGlvbl0oaHR0cDovL25vZGVtYWlsZXIuY29tLylcbiAqIHdoZW4gdXNpbmcgdGhlIGBhdHRhY2htZW50c2Agb3IgYG1haWxDb21wb3NlcmAgb3B0aW9ucy5cbiAqXG4gKiBAbG9jdXMgU2VydmVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmZyb21dIFwiRnJvbTpcIiBhZGRyZXNzIChyZXF1aXJlZClcbiAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBvcHRpb25zLnRvLGNjLGJjYyxyZXBseVRvXG4gKiAgIFwiVG86XCIsIFwiQ2M6XCIsIFwiQmNjOlwiLCBhbmQgXCJSZXBseS1UbzpcIiBhZGRyZXNzZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pblJlcGx5VG9dIE1lc3NhZ2UtSUQgdGhpcyBtZXNzYWdlIGlzIHJlcGx5aW5nIHRvXG4gKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gW29wdGlvbnMucmVmZXJlbmNlc10gQXJyYXkgKG9yIHNwYWNlLXNlcGFyYXRlZCBzdHJpbmcpIG9mIE1lc3NhZ2UtSURzIHRvIHJlZmVyIHRvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWVzc2FnZUlkXSBNZXNzYWdlLUlEIGZvciB0aGlzIG1lc3NhZ2U7IG90aGVyd2lzZSwgd2lsbCBiZSBzZXQgdG8gYSByYW5kb20gdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdWJqZWN0XSAgXCJTdWJqZWN0OlwiIGxpbmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50ZXh0fGh0bWxdIE1haWwgYm9keSAoaW4gcGxhaW4gdGV4dCBhbmQvb3IgSFRNTClcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53YXRjaEh0bWxdIE1haWwgYm9keSBpbiBIVE1MIHNwZWNpZmljIGZvciBBcHBsZSBXYXRjaFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljYWxFdmVudF0gaUNhbGVuZGFyIGV2ZW50IGF0dGFjaG1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oZWFkZXJzXSBEaWN0aW9uYXJ5IG9mIGN1c3RvbSBoZWFkZXJzIC0gZS5nLiBgeyBcImhlYWRlciBuYW1lXCI6IFwiaGVhZGVyIHZhbHVlXCIgfWAuIFRvIHNldCBhbiBvYmplY3QgdW5kZXIgYSBoZWFkZXIgbmFtZSwgdXNlIGBKU09OLnN0cmluZ2lmeWAgLSBlLmcuIGB7IFwiaGVhZGVyIG5hbWVcIjogSlNPTi5zdHJpbmdpZnkoeyB0cmFja2luZzogeyBsZXZlbDogJ2Z1bGwnIH0gfSkgfWAuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5hdHRhY2htZW50c10gQXJyYXkgb2YgYXR0YWNobWVudCBvYmplY3RzLCBhc1xuICogZGVzY3JpYmVkIGluIHRoZSBbbm9kZW1haWxlciBkb2N1bWVudGF0aW9uXShodHRwczovL25vZGVtYWlsZXIuY29tL21lc3NhZ2UvYXR0YWNobWVudHMvKS5cbiAqIEBwYXJhbSB7TWFpbENvbXBvc2VyfSBbb3B0aW9ucy5tYWlsQ29tcG9zZXJdIEEgW01haWxDb21wb3Nlcl0oaHR0cHM6Ly9ub2RlbWFpbGVyLmNvbS9leHRyYXMvbWFpbGNvbXBvc2VyLyNlLW1haWwtbWVzc2FnZS1maWVsZHMpXG4gKiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBtZXNzYWdlIHRvIGJlIHNlbnQuICBPdmVycmlkZXMgYWxsIG90aGVyIG9wdGlvbnMuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIGBNYWlsQ29tcG9zZXJgIG9iamVjdCB2aWFcbiAqIGBuZXcgRW1haWxJbnRlcm5hbHMuTnBtTW9kdWxlcy5tYWlsY29tcG9zZXIubW9kdWxlYC5cbiAqL1xuRW1haWwuc2VuZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChFbWFpbC5jdXN0b21UcmFuc3BvcnQpIHtcbiAgICAvLyBQcmVzZXJ2ZSBjdXJyZW50IGJlaGF2aW9yXG4gICAgY29uc3QgZW1haWwgPSBvcHRpb25zLm1haWxDb21wb3NlciA/IG9wdGlvbnMubWFpbENvbXBvc2VyLm1haWwgOiBvcHRpb25zO1xuICAgIGxldCBzZW5kID0gdHJ1ZTtcbiAgICBzZW5kSG9va3MuZm9yRWFjaCgoaG9vaykgPT4ge1xuICAgICAgc2VuZCA9IGhvb2soZW1haWwpO1xuICAgICAgcmV0dXJuIHNlbmQ7XG4gICAgfSk7XG4gICAgaWYgKCFzZW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhY2thZ2VTZXR0aW5ncyA9IE1ldGVvci5zZXR0aW5ncy5wYWNrYWdlcz8uZW1haWwgfHwge307XG4gICAgRW1haWwuY3VzdG9tVHJhbnNwb3J0KHsgcGFja2FnZVNldHRpbmdzLCAuLi5lbWFpbCB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVXNpbmcgRmliZXJzIFByb21pc2UuYXdhaXRcbiAgcmV0dXJuIFByb21pc2UuYXdhaXQoRW1haWwuc2VuZEFzeW5jKG9wdGlvbnMpKTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgU2VuZCBhbiBlbWFpbCB3aXRoIGFzeW5jcm9ub3VzIG1ldGhvZC4gQ2FwdHVyZSAgVGhyb3dzIGFuIGBFcnJvcmAgb24gZmFpbHVyZSB0byBjb250YWN0IG1haWwgc2VydmVyXG4gKiBvciBpZiBtYWlsIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLiBBbGwgZmllbGRzIHNob3VsZCBtYXRjaFxuICogW1JGQzUzMjJdKGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIpIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIGBNQUlMX1VSTGAgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgc2V0LCBhY3R1YWxseSBzZW5kcyB0aGUgZW1haWwuXG4gKiBPdGhlcndpc2UsIHByaW50cyB0aGUgY29udGVudHMgb2YgdGhlIGVtYWlsIHRvIHN0YW5kYXJkIG91dC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBwYWNrYWdlIGlzIGJhc2VkIG9uICoqbm9kZW1haWxlcioqLCBzbyBtYWtlIHN1cmUgdG8gcmVmZXIgdG9cbiAqIFt0aGUgZG9jdW1lbnRhdGlvbl0oaHR0cDovL25vZGVtYWlsZXIuY29tLylcbiAqIHdoZW4gdXNpbmcgdGhlIGBhdHRhY2htZW50c2Agb3IgYG1haWxDb21wb3NlcmAgb3B0aW9ucy5cbiAqXG4gKiBAbG9jdXMgU2VydmVyXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5mcm9tXSBcIkZyb206XCIgYWRkcmVzcyAocmVxdWlyZWQpXG4gKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gb3B0aW9ucy50byxjYyxiY2MscmVwbHlUb1xuICogICBcIlRvOlwiLCBcIkNjOlwiLCBcIkJjYzpcIiwgYW5kIFwiUmVwbHktVG86XCIgYWRkcmVzc2VzXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaW5SZXBseVRvXSBNZXNzYWdlLUlEIHRoaXMgbWVzc2FnZSBpcyByZXBseWluZyB0b1xuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IFtvcHRpb25zLnJlZmVyZW5jZXNdIEFycmF5IChvciBzcGFjZS1zZXBhcmF0ZWQgc3RyaW5nKSBvZiBNZXNzYWdlLUlEcyB0byByZWZlciB0b1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1lc3NhZ2VJZF0gTWVzc2FnZS1JRCBmb3IgdGhpcyBtZXNzYWdlOyBvdGhlcndpc2UsIHdpbGwgYmUgc2V0IHRvIGEgcmFuZG9tIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ViamVjdF0gIFwiU3ViamVjdDpcIiBsaW5lXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGV4dHxodG1sXSBNYWlsIGJvZHkgKGluIHBsYWluIHRleHQgYW5kL29yIEhUTUwpXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMud2F0Y2hIdG1sXSBNYWlsIGJvZHkgaW4gSFRNTCBzcGVjaWZpYyBmb3IgQXBwbGUgV2F0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY2FsRXZlbnRdIGlDYWxlbmRhciBldmVudCBhdHRhY2htZW50XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVhZGVyc10gRGljdGlvbmFyeSBvZiBjdXN0b20gaGVhZGVycyAtIGUuZy4gYHsgXCJoZWFkZXIgbmFtZVwiOiBcImhlYWRlciB2YWx1ZVwiIH1gLiBUbyBzZXQgYW4gb2JqZWN0IHVuZGVyIGEgaGVhZGVyIG5hbWUsIHVzZSBgSlNPTi5zdHJpbmdpZnlgIC0gZS5nLiBgeyBcImhlYWRlciBuYW1lXCI6IEpTT04uc3RyaW5naWZ5KHsgdHJhY2tpbmc6IHsgbGV2ZWw6ICdmdWxsJyB9IH0pIH1gLlxuICogQHBhcmFtIHtPYmplY3RbXX0gW29wdGlvbnMuYXR0YWNobWVudHNdIEFycmF5IG9mIGF0dGFjaG1lbnQgb2JqZWN0cywgYXNcbiAqIGRlc2NyaWJlZCBpbiB0aGUgW25vZGVtYWlsZXIgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9ub2RlbWFpbGVyLmNvbS9tZXNzYWdlL2F0dGFjaG1lbnRzLykuXG4gKiBAcGFyYW0ge01haWxDb21wb3Nlcn0gW29wdGlvbnMubWFpbENvbXBvc2VyXSBBIFtNYWlsQ29tcG9zZXJdKGh0dHBzOi8vbm9kZW1haWxlci5jb20vZXh0cmFzL21haWxjb21wb3Nlci8jZS1tYWlsLW1lc3NhZ2UtZmllbGRzKVxuICogb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbWVzc2FnZSB0byBiZSBzZW50LiAgT3ZlcnJpZGVzIGFsbCBvdGhlciBvcHRpb25zLlxuICogWW91IGNhbiBjcmVhdGUgYSBgTWFpbENvbXBvc2VyYCBvYmplY3QgdmlhXG4gKiBgbmV3IEVtYWlsSW50ZXJuYWxzLk5wbU1vZHVsZXMubWFpbGNvbXBvc2VyLm1vZHVsZWAuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZW5jcnlwdGlvbktleXNdIEFuIGFycmF5IHRoYXQgaG9sZHMgdGhlIHB1YmxpYyBrZXlzIHVzZWQgdG8gZW5jcnlwdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zaG91bGRTaWduXSBFbmFibGVzIHlvdSB0byBhbGxvdyBvciBkaXNhbGxvdyBlbWFpbCBzaWduaW5nLiBcbiovXG5FbWFpbC5zZW5kQXN5bmMgPSBhc3luYyBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gIGNvbnN0IGVtYWlsID0gb3B0aW9ucy5tYWlsQ29tcG9zZXIgPyBvcHRpb25zLm1haWxDb21wb3Nlci5tYWlsIDogb3B0aW9ucztcblxuICBsZXQgc2VuZCA9IHRydWU7XG4gIHNlbmRIb29rcy5mb3JFYWNoKChob29rKSA9PiB7XG4gICAgc2VuZCA9IGhvb2soZW1haWwpO1xuICAgIHJldHVybiBzZW5kO1xuICB9KTtcbiAgaWYgKCFzZW5kKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEVtYWlsLmN1c3RvbVRyYW5zcG9ydCkge1xuICAgIGNvbnN0IHBhY2thZ2VTZXR0aW5ncyA9IE1ldGVvci5zZXR0aW5ncy5wYWNrYWdlcz8uZW1haWwgfHwge307XG4gICAgcmV0dXJuIEVtYWlsLmN1c3RvbVRyYW5zcG9ydCh7IHBhY2thZ2VTZXR0aW5ncywgLi4uZW1haWwgfSk7XG4gIH1cblxuICBjb25zdCBtYWlsVXJsRW52ID0gcHJvY2Vzcy5lbnYuTUFJTF9VUkw7XG4gIGNvbnN0IG1haWxVcmxTZXR0aW5ncyA9IE1ldGVvci5zZXR0aW5ncy5wYWNrYWdlcz8uZW1haWw7XG5cbiAgaWYgKE1ldGVvci5pc1Byb2R1Y3Rpb24gJiYgIW1haWxVcmxFbnYgJiYgIW1haWxVcmxTZXR0aW5ncykge1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbW9zdGx5IG5lY2Vzc2FyeSB3aGVuIHVzaW5nIHRoZSBmbGFnIC0tcHJvZHVjdGlvbiB3aGVuIHJ1bm5pbmcgbG9jYWxseS5cbiAgICAvLyBBbmQgaXQgd29ya3MgYXMgYSByZW1pbmRlciB0byBwcm9wZXJseSBzZXQgdGhlIG1haWwgVVJMIHdoZW4gcnVubmluZyBsb2NhbGx5LlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdZb3UgaGF2ZSBub3QgcHJvdmlkZWQgYSBtYWlsIFVSTC4gWW91IGNhbiBwcm92aWRlIGl0IGJ5IHVzaW5nIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBNQUlMX1VSTCBvciB5b3VyIHNldHRpbmdzLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBoZXJlOiBodHRwczovL2RvY3MubWV0ZW9yLmNvbS9hcGkvZW1haWwuaHRtbC4nXG4gICAgKTtcbiAgfVxuXG4gIGlmIChtYWlsVXJsRW52IHx8IG1haWxVcmxTZXR0aW5ncykge1xuICAgIGNvbnN0IHRyYW5zcG9ydCA9IGdldFRyYW5zcG9ydChvcHRpb25zKTtcbiAgICBzbXRwU2VuZCh0cmFuc3BvcnQsIGVtYWlsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGRldk1vZGVTZW5kQXN5bmMoZW1haWwsIG9wdGlvbnMpO1xufTtcbiJdfQ==
