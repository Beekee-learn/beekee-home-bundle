(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Iron = Package['iron:core'].Iron;

/* Package-scope variables */
var __coffeescriptShare, appDump;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/hex7c0_app-dump/app-dump-server.coffee.js                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Busboy, backup, fs, moment, path, restore;         

backup = Npm.require('mongodb-backup');

restore = Npm.require('mongodb-restore');

moment = Npm.require('moment');

Busboy = Npm.require("busboy");

path = Npm.require('path');

fs = Npm.require('fs');

appDump = {
  allow: function() {
    return true;
  }
};

Router.map(function() {
  return this.route('appDumpHTTP', {
    path: '/appDump',
    where: 'server',
    action: function() {
      var application_root, backupOptions, base, busboy, e, filename, meteor_root, req, res, safe, self, separator, token;
      self = this;
      req = this.request;
      res = this.response;
      if (req.method === 'GET') {
        if ((base = req.query).parser == null) {
          base.parser = '';
        }
        check(req.query.parser, String);
        self.options = {
          parser: req.query.parser
        };
        if (req.query.collections) {
          check(req.query.collections, String);
          self.options.collections = req.query.collections.split(',').map(function(col) {
            return col.trim();
          });
          if (self.options.collections.length === 0) {
            self.options.collections = null;
          }
        }
        if (req.query.query) {
          check(req.query.query, String);
          try {
            self.options.query = JSON.parse(req.query.query);
          } catch (_error) {
            e = _error;
            res.statusCode = 401;
            res.end("Failed to parse JSON Query");
            return false;
          }
        }
        token = req.query.token || '';
        check(token, String);
        self.user = Meteor.users.findOne({
          "services.resume.loginTokens.hashedToken": Accounts._hashLoginToken(token)
        });
        if (!appDump.allow.apply(self)) {
          res.statusCode = 401;
          res.end('Unauthorized');
          return false;
        }
        meteor_root = fs.realpathSync(process.cwd() + '/../');
        application_root = fs.realpathSync(meteor_root + '/../');
        if (path.basename(fs.realpathSync(meteor_root + '/../../../')) === '.meteor') {
          application_root = fs.realpathSync(meteor_root + '/../../../../');
        }
        separator = application_root.indexOf('\\') > -1 ? '\\' : '/';
        if (req.query.filename) {
          check(req.query.filename, String);
          filename = req.query.filename.replace(/[^a-z0-9_-]/gi, '_') + '.tar';
        }
        if (!filename) {
          safe = {
            host: req.headers.host.replace(/[^a-z0-9]/gi, '-').toLowerCase(),
            app: application_root.split(separator).pop().replace(/[^a-z0-9]/gi, '-').toLowerCase(),
            date: moment().format("YY-MM-DD_HH-mm-ss"),
            parser: self.options.parser || 'bson'
          };
          filename = "meteordump_" + safe.parser + "_" + safe.app + "_" + safe.host + "_" + safe.date + ".tar";
        }
        res.statusCode = 200;
        res.setHeader('Content-disposition', "attachment; filename=" + filename);
        backupOptions = {
          uri: process.env.MONGO_URL,
          stream: res,
          tar: 'dump.tar',
          query: self.options.query,
          parser: self.options.parser
        };
        if (self.options.collections) {
          backupOptions.collections = self.options.collections;
        }
        backup(backupOptions);
      }
      if (req.method === 'POST') {
        busboy = new Busboy({
          headers: req.headers,
          limits: {
            fields: 3,
            files: 1
          }
        });
        token = void 0;
        self.options = {
          drop: false,
          parser: 'bson'
        };
        busboy.on("field", function(fieldname, val) {
          if (fieldname === 'token') {
            check(val, String);
            token = val;
          }
          if (fieldname === 'drop') {
            self.options.drop = true;
          }
          if (fieldname === 'parser') {
            check(val, String);
            return self.options.parser = val;
          }
        });
        busboy.on("file", Meteor.bindEnvironment(function(fieldname, file, filename) {
          var restoreOptions;
          if (fieldname !== 'appDumpUpload' || filename.split('.').pop() !== 'tar') {
            res.statusCode = 400;
            res.end('Incorrect file type. Expecting a file ending in .tar');
            return false;
          }
          if (file == null) {
            res.statusCode = 400;
            res.end('File not found');
            return false;
          }
          self.user = Meteor.users.findOne({
            "services.resume.loginTokens.hashedToken": Accounts._hashLoginToken(token)
          });
          if (!appDump.allow.apply(self)) {
            res.statusCode = 401;
            res.end('Unauthorized');
            return false;
          }
          restoreOptions = {
            uri: process.env.MONGO_URL,
            stream: file,
            parser: self.options.parser,
            dropCollections: self.options.drop,
            callback: function() {
              return res.end();
            }
          };
          return restore(restoreOptions);
        }));
        return req.pipe(busboy);
      }
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("hex7c0:app-dump", {
  appDump: appDump
});

})();

//# sourceURL=meteor://💻app/packages/hex7c0_app-dump.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvaGV4N2MwX2FwcC1kdW1wL2FwcC1kdW1wLXNlcnZlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFBLFNBQVMsR0FBRyxDQUFDLE9BQUosQ0FBWSxnQkFBWixDQUFUOztBQUFBLE9BQ0EsR0FBVSxHQUFHLENBQUMsT0FBSixDQUFZLGlCQUFaLENBRFY7O0FBQUEsTUFFQSxHQUFTLEdBQUcsQ0FBQyxPQUFKLENBQVksUUFBWixDQUZUOztBQUFBLE1BR0EsR0FBUyxHQUFHLENBQUMsT0FBSixDQUFZLFFBQVosQ0FIVDs7QUFBQSxJQUlBLEdBQU8sR0FBRyxDQUFDLE9BQUosQ0FBWSxNQUFaLENBSlA7O0FBQUEsRUFLQSxHQUFLLEdBQUcsQ0FBQyxPQUFKLENBQVksSUFBWixDQUxMOztBQUFBLE9BT0EsR0FDRTtBQUFBLFNBQU87V0FBRyxLQUFIO0VBQUEsQ0FBUDtDQVJGOztBQUFBLE1BVU0sQ0FBQyxHQUFQLENBQVc7U0FDVCxJQUFDLE1BQUQsQ0FBTyxhQUFQLEVBQ0U7QUFBQSxVQUFNLFVBQU47QUFBQSxJQUNBLE9BQU8sUUFEUDtBQUFBLElBRUEsUUFBUTtBQUNOO0FBQUEsYUFBTyxJQUFQO0FBQUEsTUFDQSxNQUFNLElBQUMsUUFEUDtBQUFBLE1BRUEsTUFBTSxJQUFDLFNBRlA7QUFLQSxVQUFHLEdBQUcsQ0FBQyxNQUFKLEtBQWMsS0FBakI7O2NBRVcsQ0FBQyxTQUFTO1NBQW5CO0FBQUEsUUFDQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBaEIsRUFBd0IsTUFBeEIsQ0FEQTtBQUFBLFFBR0EsSUFBSSxDQUFDLE9BQUwsR0FDRTtBQUFBLGtCQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBbEI7U0FKRjtBQU9BLFlBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFiO0FBQ0UsZ0JBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFo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QUcsQ0FBQyxHQUFKLENBQVEsY0FBUixDQURBO0FBRUEsbUJBQU8sS0FBUCxDQUhGO1dBWkE7QUFBQSxVQWlCQSxpQkFDRTtBQUFBLGlCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBakI7QUFBQSxZQUNBLFFBQVEsSUFEUjtBQUFBLFlBRUEsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BRnJCO0FBQUEsWUFHQSxpQkFBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUg5QjtBQUFBLFlBSUEsVUFBVztxQkFBRyxHQUFHLENBQUMsR0FBSixHQUFIO1lBQUEsQ0FKWDtXQWxCRjtpQkF3QkEsUUFBUSxjQUFSLEVBMUJ1QztRQUFBLENBQXZCLENBQWxCLENBdEJBO2VBa0RBLEdBQUcsQ0FBQyxJQUFKLENBQVMsTUFBVCxFQW5ERjtPQWxGTTtJQUFBLENBRlI7R0FERixFQURTO0FBQUEsQ0FBWCxDQVZBIiwiZmlsZSI6Ii9wYWNrYWdlcy9oZXg3YzBfYXBwLWR1bXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJiYWNrdXAgPSBOcG0ucmVxdWlyZSgnbW9uZ29kYi1iYWNrdXAnKVxucmVzdG9yZSA9IE5wbS5yZXF1aXJlKCdtb25nb2RiLXJlc3RvcmUnKVxubW9tZW50ID0gTnBtLnJlcXVpcmUoJ21vbWVudCcpXG5CdXNib3kgPSBOcG0ucmVxdWlyZShcImJ1c2JveVwiKVxucGF0aCA9IE5wbS5yZXF1aXJlKCdwYXRoJylcbmZzID0gTnBtLnJlcXVpcmUoJ2ZzJylcblxuYXBwRHVtcCA9XG4gIGFsbG93OiAtPiB0cnVlXG5cblJvdXRlci5tYXAgLT5cbiAgQHJvdXRlICdhcHBEdW1wSFRUUCcsXG4gICAgcGF0aDogJy9hcHBEdW1wJyxcbiAgICB3aGVyZTogJ3NlcnZlcicsXG4gICAgYWN0aW9uOiAtPlxuICAgICAgc2VsZiA9IEBcbiAgICAgIHJlcSA9IEByZXF1ZXN0XG4gICAgICByZXMgPSBAcmVzcG9uc2VcblxuXG4gICAgICBpZiByZXEubWV0aG9kIGlzICdHRVQnXG5cbiAgICAgICAgcmVxLnF1ZXJ5LnBhcnNlcj89ICcnXG4gICAgICAgIGNoZWNrIHJlcS5xdWVyeS5wYXJzZXIsIFN0cmluZ1xuXG4gICAgICAgIHNlbGYub3B0aW9ucyA9XG4gICAgICAgICAgcGFyc2VyOiByZXEucXVlcnkucGFyc2VyXG5cbiAgICAgICAgIyBwYXJzZSB0aGUgY29sbGVjdGlvbnNcbiAgICAgICAgaWYgcmVxLnF1ZXJ5LmNvbGxlY3Rpb25zXG4gICAgICAgICAgY2hlY2sgcmVxLnF1ZXJ5LmNvbGxlY3Rpb25zLCBTdHJpbmdcblxuICAgICAgICAgICMgY29udmVydCBjb21tYXMgaW50byBhcnJheVxuICAgICAgICAgIHNlbGYub3B0aW9ucy5jb2xsZWN0aW9ucyA9IHJlcS5xdWVyeS5jb2xsZWN0aW9ucy5zcGxpdCgnLCcpLm1hcCAoY29sKSAtPiBjb2wudHJpbSgpXG5cbiAgICAgICAgICBpZiBzZWxmLm9wdGlvbnMuY29sbGVjdGlvbnMubGVuZ3RoIGlzIDBcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5jb2xsZWN0aW9ucyA9IG51bGxcblxuICAgICAgICAjIHBhcnNlIHRoZSBxdWVyeVxuICAgICAgICBpZiByZXEucXVlcnkucXVlcnlcbiAgICAgICAgICBjaGVjayByZXEucXVlcnkucXVlcnksIFN0cmluZ1xuICAgICAgICAgIHRyeVxuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnF1ZXJ5ID0gSlNPTi5wYXJzZSByZXEucXVlcnkucXVlcnlcbiAgICAgICAgICBjYXRjaCBlXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMVxuICAgICAgICAgICAgcmVzLmVuZCBcIkZhaWxlZCB0byBwYXJzZSBKU09OIFF1ZXJ5XCJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG5cbiAgICAgICAgIyBhZGQgdGhlIHRva2VuXG4gICAgICAgIHRva2VuID0gcmVxLnF1ZXJ5LnRva2VuIHx8ICcnXG4gICAgICAgIGNoZWNrIHRva2VuLCBTdHJpbmdcbiAgICAgICAgc2VsZi51c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe1wic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLmhhc2hlZFRva2VuXCI6IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbih0b2tlbil9KTtcblxuICAgICAgICBpZiAhYXBwRHVtcC5hbGxvdy5hcHBseSBzZWxmXG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDFcbiAgICAgICAgICByZXMuZW5kICdVbmF1dGhvcml6ZWQnXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgbWV0ZW9yX3Jvb3QgPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSArICcvLi4vJylcbiAgICAgICAgYXBwbGljYXRpb25fcm9vdCA9IGZzLnJlYWxwYXRoU3luYyhtZXRlb3Jfcm9vdCArICcvLi4vJylcblxuICAgICAgICBpZiBwYXRoLmJhc2VuYW1lKGZzLnJlYWxwYXRoU3luYyhtZXRlb3Jfcm9vdCArICcvLi4vLi4vLi4vJykpID09ICcubWV0ZW9yJ1xuICAgICAgICAgIGFwcGxpY2F0aW9uX3Jvb3QgPSBmcy5yZWFscGF0aFN5bmMobWV0ZW9yX3Jvb3QgKyAnLy4uLy4uLy4uLy4uLycpXG5cbiAgICAgICAgc2VwYXJhdG9yID0gaWYgYXBwbGljYXRpb25fcm9vdC5pbmRleE9mKCdcXFxcJykgPiAtMSB0aGVuICdcXFxcJyBlbHNlICcvJ1xuXG4gICAgICAgIGlmIHJlcS5xdWVyeS5maWxlbmFtZVxuICAgICAgICAgIGNoZWNrIHJlcS5xdWVyeS5maWxlbmFtZSwgU3RyaW5nXG4gICAgICAgICAgZmlsZW5hbWUgPSByZXEucXVlcnkuZmlsZW5hbWUucmVwbGFjZSgvW15hLXowLTlfLV0vZ2ksICdfJykgKyAnLnRhcidcblxuICAgICAgICB1bmxlc3MgZmlsZW5hbWVcbiAgICAgICAgICBzYWZlID1cbiAgICAgICAgICAgIGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QucmVwbGFjZSgvW15hLXowLTldL2dpLCAnLScpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIGFwcDogYXBwbGljYXRpb25fcm9vdC5zcGxpdChzZXBhcmF0b3IpLnBvcCgpLnJlcGxhY2UoL1teYS16MC05XS9naSwgJy0nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBkYXRlOiBtb21lbnQoKS5mb3JtYXQoXCJZWS1NTS1ERF9ISC1tbS1zc1wiKVxuICAgICAgICAgICAgcGFyc2VyOiBzZWxmLm9wdGlvbnMucGFyc2VyIHx8ICdic29uJ1xuXG4gICAgICAgICAgZmlsZW5hbWUgPSBcIm1ldGVvcmR1bXBfI3tzYWZlLnBhcnNlcn1fI3tzYWZlLmFwcH1fI3tzYWZlLmhvc3R9XyN7c2FmZS5kYXRlfS50YXJcIlxuXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwXG4gICAgICAgIHJlcy5zZXRIZWFkZXIgJ0NvbnRlbnQtZGlzcG9zaXRpb24nLCBcImF0dGFjaG1lbnQ7IGZpbGVuYW1lPSN7ZmlsZW5hbWV9XCJcblxuICAgICAgICBiYWNrdXBPcHRpb25zID1cbiAgICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk1PTkdPX1VSTFxuICAgICAgICAgIHN0cmVhbTogcmVzXG4gICAgICAgICAgdGFyOiAnZHVtcC50YXInXG4gICAgICAgICAgcXVlcnk6IHNlbGYub3B0aW9ucy5xdWVyeVxuICAgICAgICAgIHBhcnNlcjogc2VsZi5vcHRpb25zLnBhcnNlclxuXG4gICAgICAgIGlmIHNlbGYub3B0aW9ucy5jb2xsZWN0aW9uc1xuICAgICAgICAgIGJhY2t1cE9wdGlvbnMuY29sbGVjdGlvbnMgPSBzZWxmLm9wdGlvbnMuY29sbGVjdGlvbnNcblxuICAgICAgICBiYWNrdXAgYmFja3VwT3B0aW9uc1xuXG5cbiAgICAgIGlmIHJlcS5tZXRob2QgaXMgJ1BPU1QnXG4gICAgICAgIGJ1c2JveSA9IG5ldyBCdXNib3lcbiAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVyc1xuICAgICAgICAgIGxpbWl0czpcbiAgICAgICAgICAgIGZpZWxkczozXG4gICAgICAgICAgICBmaWxlczoxXG5cbiAgICAgICAgdG9rZW4gPSB1bmRlZmluZWRcbiAgICAgICAgc2VsZi5vcHRpb25zID1cbiAgICAgICAgICBkcm9wOiBmYWxzZVxuICAgICAgICAgIHBhcnNlcjogJ2Jzb24nXG5cbiAgICAgICAgYnVzYm95Lm9uIFwiZmllbGRcIiwgKGZpZWxkbmFtZSwgdmFsKSAtPlxuICAgICAgICAgIGlmIGZpZWxkbmFtZSBpcyAndG9rZW4nXG4gICAgICAgICAgICBjaGVjayB2YWwsIFN0cmluZ1xuICAgICAgICAgICAgdG9rZW4gPSB2YWxcbiAgICAgICAgICBpZiBmaWVsZG5hbWUgaXMgJ2Ryb3AnXG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZHJvcCA9IHRydWVcbiAgICAgICAgICBpZiBmaWVsZG5hbWUgaXMgJ3BhcnNlcidcbiAgICAgICAgICAgICMgcGFyc2VyIGlzbid0IGJlaW5nIHVzZWQgZm9yIHJlc3RvcmVzIGJlY3Vhc2UgaXQgZG9lc24ndCB3b3JrIHdlbGwgd2l0aCBqc29uXG4gICAgICAgICAgICBjaGVjayB2YWwsIFN0cmluZ1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnBhcnNlciA9IHZhbFxuXG4gICAgICAgIGJ1c2JveS5vbiBcImZpbGVcIiwgTWV0ZW9yLmJpbmRFbnZpcm9ubWVudCAoZmllbGRuYW1lLCBmaWxlLCBmaWxlbmFtZSkgLT5cblxuICAgICAgICAgIGlmIGZpZWxkbmFtZSBpc250ICdhcHBEdW1wVXBsb2FkJyBvciBmaWxlbmFtZS5zcGxpdCgnLicpLnBvcCgpIGlzbnQgJ3RhcidcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwXG4gICAgICAgICAgICByZXMuZW5kICdJbmNvcnJlY3QgZmlsZSB0eXBlLiBFeHBlY3RpbmcgYSBmaWxlIGVuZGluZyBpbiAudGFyJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICB1bmxlc3MgZmlsZT9cbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwXG4gICAgICAgICAgICByZXMuZW5kICdGaWxlIG5vdCBmb3VuZCdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgc2VsZi51c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe1wic2VydmljZXMucmVzdW1lLmxvZ2luVG9rZW5zLmhhc2hlZFRva2VuXCI6IEFjY291bnRzLl9oYXNoTG9naW5Ub2tlbih0b2tlbil9KVxuXG4gICAgICAgICAgaWYgIWFwcER1bXAuYWxsb3cuYXBwbHkoc2VsZilcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxXG4gICAgICAgICAgICByZXMuZW5kICdVbmF1dGhvcml6ZWQnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgIHJlc3RvcmVPcHRpb25zID1cbiAgICAgICAgICAgIHVyaTogcHJvY2Vzcy5lbnYuTU9OR09fVVJMXG4gICAgICAgICAgICBzdHJlYW06IGZpbGVcbiAgICAgICAgICAgIHBhcnNlcjogc2VsZi5vcHRpb25zLnBhcnNlclxuICAgICAgICAgICAgZHJvcENvbGxlY3Rpb25zOiBzZWxmLm9wdGlvbnMuZHJvcFxuICAgICAgICAgICAgY2FsbGJhY2sgOiAtPiByZXMuZW5kKClcblxuICAgICAgICAgIHJlc3RvcmUgcmVzdG9yZU9wdGlvbnNcblxuICAgICAgICByZXEucGlwZSBidXNib3lcblxuXG4iXX0=
