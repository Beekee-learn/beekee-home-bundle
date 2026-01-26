(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Accounts = Package['accounts-base'].Accounts;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Roles;

var require = meteorInstall({"node_modules":{"meteor":{"alanning:roles":{"roles":{"roles_common.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alanning_roles/roles/roles_common.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
!function (module1) {
  /* global Meteor, Roles, Mongo */

  /**
   * Provides functions related to user authorization. Compatible with built-in Meteor accounts packages.
   *
   * Roles are accessible throgh `Meteor.roles` collection and documents consist of:
   *  - `_id`: role name
   *  - `children`: list of subdocuments:
   *    - `_id`
   *
   * Children list elements are subdocuments so that they can be easier extended in the future or by plugins.
   *
   * Roles can have multiple parents and can be children (subroles) of multiple roles.
   *
   * Example: `{_id: 'admin', children: [{_id: 'editor'}]}`
   *
   * The assignment of a role to a user is stored in a collection, accessible through `Meteor.roleAssignment`.
   * It's documents consist of
   *  - `_id`: Internal MongoDB id
   *  - `role`: A role object which got assigned. Usually only contains the `_id` property
   *  - `user`: A user object, usually only contains the `_id` property
   *  - `scope`: scope name
   *  - `inheritedRoles`: A list of all the roles objects inherited by the assigned role.
   *
   * @module Roles
   */
  if (!Meteor.roles) {
    Meteor.roles = new Mongo.Collection('roles');
  }
  if (!Meteor.roleAssignment) {
    Meteor.roleAssignment = new Mongo.Collection('role-assignment');
  }

  /**
   * @class Roles
   */
  if (typeof Roles === 'undefined') {
    Roles = {}; // eslint-disable-line no-global-assign
  }
  var getGroupsForUserDeprecationWarning = false;
  Object.assign(Roles, {
    /**
     * Used as a global group (now scope) name. Not used anymore.
     *
     * @property GLOBAL_GROUP
     * @static
     * @deprecated
     */
    GLOBAL_GROUP: null,
    /**
     * Create a new role.
     *
     * @method createRole
     * @param {String} roleName Name of role.
     * @param {Object} [options] Options:
     *   - `unlessExists`: if `true`, exception will not be thrown in the role already exists
     * @return {String} ID of the new role or null.
     * @static
     */
    createRole: function (roleName, options) {
      Roles._checkRoleName(roleName);
      options = Object.assign({
        unlessExists: false
      }, options);
      var result = Meteor.roles.upsert({
        _id: roleName
      }, {
        $setOnInsert: {
          children: []
        }
      });
      if (!result.insertedId) {
        if (options.unlessExists) return null;
        throw new Error('Role \'' + roleName + '\' already exists.');
      }
      return result.insertedId;
    },
    /**
     * Delete an existing role.
     *
     * If the role is set for any user, it is automatically unset.
     *
     * @method deleteRole
     * @param {String} roleName Name of role.
     * @static
     */
    deleteRole: function (roleName) {
      var roles;
      var inheritedRoles;
      Roles._checkRoleName(roleName);

      // Remove all assignments
      Meteor.roleAssignment.remove({
        'role._id': roleName
      });
      do {
        // For all roles who have it as a dependency ...
        roles = Roles._getParentRoleNames(Meteor.roles.findOne({
          _id: roleName
        }));
        Meteor.roles.find({
          _id: {
            $in: roles
          }
        }).fetch().forEach(r => {
          Meteor.roles.update({
            _id: r._id
          }, {
            $pull: {
              children: {
                _id: roleName
              }
            }
          });
          inheritedRoles = Roles._getInheritedRoleNames(Meteor.roles.findOne({
            _id: r._id
          }));
          Meteor.roleAssignment.update({
            'role._id': r._id
          }, {
            $set: {
              inheritedRoles: [r._id, ...inheritedRoles].map(r2 => ({
                _id: r2
              }))
            }
          }, {
            multi: true
          });
        });
      } while (roles.length > 0);

      // And finally remove the role itself
      Meteor.roles.remove({
        _id: roleName
      });
    },
    /**
     * Rename an existing role.
     *
     * @method renameRole
     * @param {String} oldName Old name of a role.
     * @param {String} newName New name of a role.
     * @static
     */
    renameRole: function (oldName, newName) {
      var role;
      var count;
      Roles._checkRoleName(oldName);
      Roles._checkRoleName(newName);
      if (oldName === newName) return;
      role = Meteor.roles.findOne({
        _id: oldName
      });
      if (!role) {
        throw new Error('Role \'' + oldName + '\' does not exist.');
      }
      role._id = newName;
      Meteor.roles.insert(role);
      do {
        count = Meteor.roleAssignment.update({
          'role._id': oldName
        }, {
          $set: {
            'role._id': newName
          }
        }, {
          multi: true
        });
      } while (count > 0);
      do {
        count = Meteor.roleAssignment.update({
          'inheritedRoles._id': oldName
        }, {
          $set: {
            'inheritedRoles.$._id': newName
          }
        }, {
          multi: true
        });
      } while (count > 0);
      do {
        count = Meteor.roles.update({
          'children._id': oldName
        }, {
          $set: {
            'children.$._id': newName
          }
        }, {
          multi: true
        });
      } while (count > 0);
      Meteor.roles.remove({
        _id: oldName
      });
    },
    /**
     * Add role parent to roles.
     *
     * Previous parents are kept (role can have multiple parents). For users which have the
     * parent role set, new subroles are added automatically.
     *
     * @method addRolesToParent
     * @param {Array|String} rolesNames Name(s) of role(s).
     * @param {String} parentName Name of parent role.
     * @static
     */
    addRolesToParent: function (rolesNames, parentName) {
      // ensure arrays
      if (!Array.isArray(rolesNames)) rolesNames = [rolesNames];
      rolesNames.forEach(function (roleName) {
        Roles._addRoleToParent(roleName, parentName);
      });
    },
    /**
     * @method _addRoleToParent
     * @param {String} roleName Name of role.
     * @param {String} parentName Name of parent role.
     * @private
     * @static
     */
    _addRoleToParent: function (roleName, parentName) {
      var role;
      var count;
      Roles._checkRoleName(roleName);
      Roles._checkRoleName(parentName);

      // query to get role's children
      role = Meteor.roles.findOne({
        _id: roleName
      });
      if (!role) {
        throw new Error('Role \'' + roleName + '\' does not exist.');
      }

      // detect cycles
      if (Roles._getInheritedRoleNames(role).includes(parentName)) {
        throw new Error('Roles \'' + roleName + '\' and \'' + parentName + '\' would form a cycle.');
      }
      count = Meteor.roles.update({
        _id: parentName,
        'children._id': {
          $ne: role._id
        }
      }, {
        $push: {
          children: {
            _id: role._id
          }
        }
      });

      // if there was no change, parent role might not exist, or role is
      // already a subrole; in any case we do not have anything more to do
      if (!count) return;
      Meteor.roleAssignment.update({
        'inheritedRoles._id': parentName
      }, {
        $push: {
          inheritedRoles: {
            $each: [role._id, ...Roles._getInheritedRoleNames(role)].map(r => ({
              _id: r
            }))
          }
        }
      }, {
        multi: true
      });
    },
    /**
     * Remove role parent from roles.
     *
     * Other parents are kept (role can have multiple parents). For users which have the
     * parent role set, removed subrole is removed automatically.
     *
     * @method removeRolesFromParent
     * @param {Array|String} rolesNames Name(s) of role(s).
     * @param {String} parentName Name of parent role.
     * @static
     */
    removeRolesFromParent: function (rolesNames, parentName) {
      // ensure arrays
      if (!Array.isArray(rolesNames)) rolesNames = [rolesNames];
      rolesNames.forEach(function (roleName) {
        Roles._removeRoleFromParent(roleName, parentName);
      });
    },
    /**
     * @method _removeRoleFromParent
     * @param {String} roleName Name of role.
     * @param {String} parentName Name of parent role.
     * @private
     * @static
     */
    _removeRoleFromParent: function (roleName, parentName) {
      Roles._checkRoleName(roleName);
      Roles._checkRoleName(parentName);

      // check for role existence
      // this would not really be needed, but we are trying to match addRolesToParent
      let role = Meteor.roles.findOne({
        _id: roleName
      }, {
        fields: {
          _id: 1
        }
      });
      if (!role) {
        throw new Error('Role \'' + roleName + '\' does not exist.');
      }
      const count = Meteor.roles.update({
        _id: parentName
      }, {
        $pull: {
          children: {
            _id: role._id
          }
        }
      });

      // if there was no change, parent role might not exist, or role was
      // already not a subrole; in any case we do not have anything more to do
      if (!count) return;

      // For all roles who have had it as a dependency ...
      const roles = [...Roles._getParentRoleNames(Meteor.roles.findOne({
        _id: parentName
      })), parentName];
      Meteor.roles.find({
        _id: {
          $in: roles
        }
      }).fetch().forEach(r => {
        const inheritedRoles = Roles._getInheritedRoleNames(Meteor.roles.findOne({
          _id: r._id
        }));
        Meteor.roleAssignment.update({
          'role._id': r._id,
          'inheritedRoles._id': role._id
        }, {
          $set: {
            inheritedRoles: [r._id, ...inheritedRoles].map(r2 => ({
              _id: r2
            }))
          }
        }, {
          multi: true
        });
      });
    },
    /**
     * Add users to roles.
     *
     * Adds roles to existing roles for each user.
     *
     * @example
     *     Roles.addUsersToRoles(userId, 'admin')
     *     Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com')
     *     Roles.addUsersToRoles([user1, user2], ['user','editor'])
     *     Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
     *
     * @method addUsersToRoles
     * @param {Array|String} users User ID(s) or object(s) with an `_id` field.
     * @param {Array|String} roles Name(s) of roles to add users to. Roles have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope, or `null` for the global role
     *   - `ifExists`: if `true`, do not throw an exception if the role does not exist
     *
     * Alternatively, it can be a scope name string.
     * @static
     */
    addUsersToRoles: function (users, roles, options) {
      var id;
      if (!users) throw new Error('Missing \'users\' param.');
      if (!roles) throw new Error('Missing \'roles\' param.');
      options = Roles._normalizeOptions(options);

      // ensure arrays
      if (!Array.isArray(users)) users = [users];
      if (!Array.isArray(roles)) roles = [roles];
      Roles._checkScopeName(options.scope);
      options = Object.assign({
        ifExists: false
      }, options);
      users.forEach(function (user) {
        if (typeof user === 'object') {
          id = user._id;
        } else {
          id = user;
        }
        roles.forEach(function (role) {
          Roles._addUserToRole(id, role, options);
        });
      });
    },
    /**
     * Set users' roles.
     *
     * Replaces all existing roles with a new set of roles.
     *
     * @example
     *     Roles.setUserRoles(userId, 'admin')
     *     Roles.setUserRoles(userId, ['view-secrets'], 'example.com')
     *     Roles.setUserRoles([user1, user2], ['user','editor'])
     *     Roles.setUserRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
     *
     * @method setUserRoles
     * @param {Array|String} users User ID(s) or object(s) with an `_id` field.
     * @param {Array|String} roles Name(s) of roles to add users to. Roles have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope, or `null` for the global role
     *   - `anyScope`: if `true`, remove all roles the user has, of any scope, if `false`, only the one in the same scope
     *   - `ifExists`: if `true`, do not throw an exception if the role does not exist
     *
     * Alternatively, it can be a scope name string.
     * @static
     */
    setUserRoles: function (users, roles, options) {
      var id;
      if (!users) throw new Error('Missing \'users\' param.');
      if (!roles) throw new Error('Missing \'roles\' param.');
      options = Roles._normalizeOptions(options);

      // ensure arrays
      if (!Array.isArray(users)) users = [users];
      if (!Array.isArray(roles)) roles = [roles];
      Roles._checkScopeName(options.scope);
      options = Object.assign({
        ifExists: false,
        anyScope: false
      }, options);
      users.forEach(function (user) {
        if (typeof user === 'object') {
          id = user._id;
        } else {
          id = user;
        }
        // we first clear all roles for the user
        const selector = {
          'user._id': id
        };
        if (!options.anyScope) {
          selector.scope = options.scope;
        }
        Meteor.roleAssignment.remove(selector);

        // and then add all
        roles.forEach(function (role) {
          Roles._addUserToRole(id, role, options);
        });
      });
    },
    /**
     * Add one user to one role.
     *
     * @method _addUserToRole
     * @param {String} userId The user ID.
     * @param {String} roleName Name of the role to add the user to. The role have to exist.
     * @param {Object} options Options:
     *   - `scope`: name of the scope, or `null` for the global role
     *   - `ifExists`: if `true`, do not throw an exception if the role does not exist
     * @private
     * @static
     */
    _addUserToRole: function (userId, roleName, options) {
      Roles._checkRoleName(roleName);
      Roles._checkScopeName(options.scope);
      if (!userId) {
        return;
      }
      const role = Meteor.roles.findOne({
        _id: roleName
      }, {
        fields: {
          children: 1
        }
      });
      if (!role) {
        if (options.ifExists) {
          return [];
        } else {
          throw new Error('Role \'' + roleName + '\' does not exist.');
        }
      }

      // This might create duplicates, because we don't have a unique index, but that's all right. In case there are two, withdrawing the role will effectively kill them both.
      const res = Meteor.roleAssignment.upsert({
        'user._id': userId,
        'role._id': roleName,
        scope: options.scope
      }, {
        $setOnInsert: {
          user: {
            _id: userId
          },
          role: {
            _id: roleName
          },
          scope: options.scope
        }
      });
      if (res.insertedId) {
        Meteor.roleAssignment.update({
          _id: res.insertedId
        }, {
          $set: {
            inheritedRoles: [roleName, ...Roles._getInheritedRoleNames(role)].map(r => ({
              _id: r
            }))
          }
        });
      }
      return res;
    },
    /**
     * Returns an array of role names the given role name is a child of.
     *
     * @example
     *     Roles._getParentRoleNames({ _id: 'admin', children; [] })
     *
     * @method _getParentRoleNames
     * @param {object} role The role object
     * @private
     * @static
     */
    _getParentRoleNames: function (role) {
      var parentRoles;
      if (!role) {
        return [];
      }
      parentRoles = new Set([role._id]);
      parentRoles.forEach(roleName => {
        Meteor.roles.find({
          'children._id': roleName
        }).fetch().forEach(parentRole => {
          parentRoles.add(parentRole._id);
        });
      });
      parentRoles.delete(role._id);
      return [...parentRoles];
    },
    /**
     * Returns an array of role names the given role name is a parent of.
     *
     * @example
     *     Roles._getInheritedRoleNames({ _id: 'admin', children; [] })
     *
     * @method _getInheritedRoleNames
     * @param {object} role The role object
     * @private
     * @static
     */
    _getInheritedRoleNames: function (role) {
      const inheritedRoles = new Set();
      const nestedRoles = new Set([role]);
      nestedRoles.forEach(r => {
        const roles = Meteor.roles.find({
          _id: {
            $in: r.children.map(r => r._id)
          }
        }, {
          fields: {
            children: 1
          }
        }).fetch();
        roles.forEach(r2 => {
          inheritedRoles.add(r2._id);
          nestedRoles.add(r2);
        });
      });
      return [...inheritedRoles];
    },
    /**
     * Remove users from assigned roles.
     *
     * @example
     *     Roles.removeUsersFromRoles(userId, 'admin')
     *     Roles.removeUsersFromRoles([userId, user2], ['editor'])
     *     Roles.removeUsersFromRoles(userId, ['user'], 'group1')
     *
     * @method removeUsersFromRoles
     * @param {Array|String} users User ID(s) or object(s) with an `_id` field.
     * @param {Array|String} roles Name(s) of roles to remove users from. Roles have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope, or `null` for the global role
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     *
     * Alternatively, it can be a scope name string.
     * @static
     */
    removeUsersFromRoles: function (users, roles, options) {
      if (!users) throw new Error('Missing \'users\' param.');
      if (!roles) throw new Error('Missing \'roles\' param.');
      options = Roles._normalizeOptions(options);

      // ensure arrays
      if (!Array.isArray(users)) users = [users];
      if (!Array.isArray(roles)) roles = [roles];
      Roles._checkScopeName(options.scope);
      users.forEach(function (user) {
        if (!user) return;
        roles.forEach(function (role) {
          let id;
          if (typeof user === 'object') {
            id = user._id;
          } else {
            id = user;
          }
          Roles._removeUserFromRole(id, role, options);
        });
      });
    },
    /**
     * Remove one user from one role.
     *
     * @method _removeUserFromRole
     * @param {String} userId The user ID.
     * @param {String} roleName Name of the role to add the user to. The role have to exist.
     * @param {Object} options Options:
     *   - `scope`: name of the scope, or `null` for the global role
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     * @private
     * @static
     */
    _removeUserFromRole: function (userId, roleName, options) {
      Roles._checkRoleName(roleName);
      Roles._checkScopeName(options.scope);
      if (!userId) return;
      const selector = {
        'user._id': userId,
        'role._id': roleName
      };
      if (!options.anyScope) {
        selector.scope = options.scope;
      }
      Meteor.roleAssignment.remove(selector);
    },
    /**
     * Check if user has specified roles.
     *
     * @example
     *     // global roles
     *     Roles.userIsInRole(user, 'admin')
     *     Roles.userIsInRole(user, ['admin','editor'])
     *     Roles.userIsInRole(userId, 'admin')
     *     Roles.userIsInRole(userId, ['admin','editor'])
     *
     *     // scope roles (global roles are still checked)
     *     Roles.userIsInRole(user, 'admin', 'group1')
     *     Roles.userIsInRole(userId, ['admin','editor'], 'group1')
     *     Roles.userIsInRole(userId, ['admin','editor'], {scope: 'group1'})
     *
     * @method userIsInRole
     * @param {String|Object} user User ID or an actual user object.
     * @param {Array|String} roles Name of role or an array of roles to check against. If array,
     *                             will return `true` if user is in _any_ role.
     *                             Roles do not have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope; if supplied, limits check to just that scope
     *     the user's global roles will always be checked whether scope is specified or not
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     *
     * Alternatively, it can be a scope name string.
     * @return {Boolean} `true` if user is in _any_ of the target roles
     * @static
     */
    userIsInRole: function (user, roles, options) {
      var id;
      var selector;
      options = Roles._normalizeOptions(options);

      // ensure array to simplify code
      if (!Array.isArray(roles)) roles = [roles];
      roles = roles.filter(r => r != null);
      if (!roles.length) return false;
      Roles._checkScopeName(options.scope);
      options = Object.assign({
        anyScope: false
      }, options);
      if (user && typeof user === 'object') {
        id = user._id;
      } else {
        id = user;
      }
      if (!id) return false;
      if (typeof id !== 'string') return false;
      selector = {
        'user._id': id
      };
      if (!options.anyScope) {
        selector.scope = {
          $in: [options.scope, null]
        };
      }
      return roles.some(roleName => {
        selector['inheritedRoles._id'] = roleName;
        return Meteor.roleAssignment.find(selector, {
          limit: 1
        }).count() > 0;
      });
    },
    /**
     * Retrieve user's roles.
     *
     * @method getRolesForUser
     * @param {String|Object} user User ID or an actual user object.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of scope to provide roles for; if not specified, global roles are returned
     *   - `anyScope`: if set, role can be in any scope (`scope` and `onlyAssigned` options are ignored)
     *   - `onlyScoped`: if set, only roles in the specified scope are returned
     *   - `onlyAssigned`: return only assigned roles and not automatically inferred (like subroles)
     *   - `fullObjects`: return full roles objects (`true`) or just names (`false`) (`onlyAssigned` option is ignored) (default `false`)
     *     If you have a use-case for this option, please file a feature-request. You shouldn't need to use it as it's
     *     result strongly dependant on the internal data structure of this plugin.
     *
     * Alternatively, it can be a scope name string.
     * @return {Array} Array of user's roles, unsorted.
     * @static
     */
    getRolesForUser: function (user, options) {
      var id;
      var selector;
      var filter;
      var roles;
      options = Roles._normalizeOptions(options);
      Roles._checkScopeName(options.scope);
      options = Object.assign({
        fullObjects: false,
        onlyAssigned: false,
        anyScope: false,
        onlyScoped: false
      }, options);
      if (user && typeof user === 'object') {
        id = user._id;
      } else {
        id = user;
      }
      if (!id) return [];
      selector = {
        'user._id': id
      };
      filter = {
        fields: {
          'inheritedRoles._id': 1
        }
      };
      if (!options.anyScope) {
        selector.scope = {
          $in: [options.scope]
        };
        if (!options.onlyScoped) {
          selector.scope.$in.push(null);
        }
      }
      if (options.onlyAssigned) {
        delete filter.fields['inheritedRoles._id'];
        filter.fields['role._id'] = 1;
      }
      if (options.fullObjects) {
        delete filter.fields;
      }
      roles = Meteor.roleAssignment.find(selector, filter).fetch();
      if (options.fullObjects) {
        return roles;
      }
      return [...new Set(roles.reduce((rev, current) => {
        if (current.inheritedRoles) {
          return rev.concat(current.inheritedRoles.map(r => r._id));
        } else if (current.role) {
          rev.push(current.role._id);
        }
        return rev;
      }, []))];
    },
    /**
     * Retrieve cursor of all existing roles.
     *
     * @method getAllRoles
     * @param {Object} [queryOptions] Options which are passed directly
     *                                through to `Meteor.roles.find(query, options)`.
     * @return {Cursor} Cursor of existing roles.
     * @static
     */
    getAllRoles: function (queryOptions) {
      queryOptions = queryOptions || {
        sort: {
          _id: 1
        }
      };
      return Meteor.roles.find({}, queryOptions);
    },
    /**
     * Retrieve all users who are in target role.
     *
     * Options:
     *
     * @method getUsersInRole
     * @param {Array|String} roles Name of role or an array of roles. If array, users
     *                             returned will have at least one of the roles
     *                             specified but need not have _all_ roles.
     *                             Roles do not have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope to restrict roles to; user's global
     *     roles will also be checked
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     *   - `onlyScoped`: if set, only roles in the specified scope are returned
     *   - `queryOptions`: options which are passed directly
     *     through to `Meteor.users.find(query, options)`
     *
     * Alternatively, it can be a scope name string.
     * @param {Object} [queryOptions] Options which are passed directly
     *                                through to `Meteor.users.find(query, options)`
     * @return {Cursor} Cursor of users in roles.
     * @static
     */
    getUsersInRole: function (roles, options, queryOptions) {
      var ids;
      ids = Roles.getUserAssignmentsForRole(roles, options).fetch().map(a => a.user._id);
      return Meteor.users.find({
        _id: {
          $in: ids
        }
      }, options && options.queryOptions || queryOptions || {});
    },
    /**
     * Retrieve all assignments of a user which are for the target role.
     *
     * Options:
     *
     * @method getUserAssignmentsForRole
     * @param {Array|String} roles Name of role or an array of roles. If array, users
     *                             returned will have at least one of the roles
     *                             specified but need not have _all_ roles.
     *                             Roles do not have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope to restrict roles to; user's global
     *     roles will also be checked
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     *   - `queryOptions`: options which are passed directly
     *     through to `Meteor.roleAssignment.find(query, options)`
      * Alternatively, it can be a scope name string.
     * @return {Cursor} Cursor of user assignments for roles.
     * @static
     */
    getUserAssignmentsForRole: function (roles, options) {
      options = Roles._normalizeOptions(options);
      options = Object.assign({
        anyScope: false,
        queryOptions: {}
      }, options);
      return Roles._getUsersInRoleCursor(roles, options, options.queryOptions);
    },
    /**
     * @method _getUsersInRoleCursor
     * @param {Array|String} roles Name of role or an array of roles. If array, ids of users are
     *                             returned which have at least one of the roles
     *                             assigned but need not have _all_ roles.
     *                             Roles do not have to exist.
     * @param {Object|String} [options] Options:
     *   - `scope`: name of the scope to restrict roles to; user's global
     *     roles will also be checked
     *   - `anyScope`: if set, role can be in any scope (`scope` option is ignored)
     *
     * Alternatively, it can be a scope name string.
     * @param {Object} [filter] Options which are passed directly
     *                                through to `Meteor.roleAssignment.find(query, options)`
     * @return {Object} Cursor to the assignment documents
     * @private
     * @static
     */
    _getUsersInRoleCursor: function (roles, options, filter) {
      var selector;
      options = Roles._normalizeOptions(options);
      options = Object.assign({
        anyScope: false,
        onlyScoped: false
      }, options);

      // ensure array to simplify code
      if (!Array.isArray(roles)) roles = [roles];
      Roles._checkScopeName(options.scope);
      filter = Object.assign({
        fields: {
          'user._id': 1
        }
      }, filter);
      selector = {
        'inheritedRoles._id': {
          $in: roles
        }
      };
      if (!options.anyScope) {
        selector.scope = {
          $in: [options.scope]
        };
        if (!options.onlyScoped) {
          selector.scope.$in.push(null);
        }
      }
      return Meteor.roleAssignment.find(selector, filter);
    },
    /**
     * Deprecated. Use `getScopesForUser` instead.
     *
     * @method getGroupsForUser
     * @static
     * @deprecated
     */
    getGroupsForUser: function () {
      if (!getGroupsForUserDeprecationWarning) {
        getGroupsForUserDeprecationWarning = true;
        console && console.warn('getGroupsForUser has been deprecated. Use getScopesForUser instead.');
      }
      return Roles.getScopesForUser(...arguments);
    },
    /**
     * Retrieve users scopes, if any.
     *
     * @method getScopesForUser
     * @param {String|Object} user User ID or an actual user object.
     * @param {Array|String} [roles] Name of roles to restrict scopes to.
     *
     * @return {Array} Array of user's scopes, unsorted.
     * @static
     */
    getScopesForUser: function (user, roles) {
      var scopes;
      var id;
      if (roles && !Array.isArray(roles)) roles = [roles];
      if (user && typeof user === 'object') {
        id = user._id;
      } else {
        id = user;
      }
      if (!id) return [];
      const selector = {
        'user._id': id,
        scope: {
          $ne: null
        }
      };
      if (roles) {
        selector['inheritedRoles._id'] = {
          $in: roles
        };
      }
      scopes = Meteor.roleAssignment.find(selector, {
        fields: {
          scope: 1
        }
      }).fetch().map(obi => obi.scope);
      return [...new Set(scopes)];
    },
    /**
     * Rename a scope.
     *
     * Roles assigned with a given scope are changed to be under the new scope.
     *
     * @method renameScope
     * @param {String} oldName Old name of a scope.
     * @param {String} newName New name of a scope.
     * @static
     */
    renameScope: function (oldName, newName) {
      var count;
      Roles._checkScopeName(oldName);
      Roles._checkScopeName(newName);
      if (oldName === newName) return;
      do {
        count = Meteor.roleAssignment.update({
          scope: oldName
        }, {
          $set: {
            scope: newName
          }
        }, {
          multi: true
        });
      } while (count > 0);
    },
    /**
     * Remove a scope.
     *
     * Roles assigned with a given scope are removed.
     *
     * @method removeScope
     * @param {String} name The name of a scope.
     * @static
     */
    removeScope: function (name) {
      Roles._checkScopeName(name);
      Meteor.roleAssignment.remove({
        scope: name
      });
    },
    /**
     * Throw an exception if `roleName` is an invalid role name.
     *
     * @method _checkRoleName
     * @param {String} roleName A role name to match against.
     * @private
     * @static
     */
    _checkRoleName: function (roleName) {
      if (!roleName || typeof roleName !== 'string' || roleName.trim() !== roleName) {
        throw new Error('Invalid role name \'' + roleName + '\'.');
      }
    },
    /**
     * Find out if a role is an ancestor of another role.
     *
     * WARNING: If you check this on the client, please make sure all roles are published.
     *
     * @method isParentOf
     * @param {String} parentRoleName The role you want to research.
     * @param {String} childRoleName The role you expect to be among the children of parentRoleName.
     * @static
     */
    isParentOf: function (parentRoleName, childRoleName) {
      if (parentRoleName === childRoleName) {
        return true;
      }
      if (parentRoleName == null || childRoleName == null) {
        return false;
      }
      Roles._checkRoleName(parentRoleName);
      Roles._checkRoleName(childRoleName);
      var rolesToCheck = [parentRoleName];
      while (rolesToCheck.length !== 0) {
        var roleName = rolesToCheck.pop();
        if (roleName === childRoleName) {
          return true;
        }
        var role = Meteor.roles.findOne({
          _id: roleName
        });

        // This should not happen, but this is a problem to address at some other time.
        if (!role) continue;
        rolesToCheck = rolesToCheck.concat(role.children.map(r => r._id));
      }
      return false;
    },
    /**
     * Normalize options.
     *
     * @method _normalizeOptions
     * @param {Object} options Options to normalize.
     * @return {Object} Normalized options.
     * @private
     * @static
     */
    _normalizeOptions: function (options) {
      options = options === undefined ? {} : options;
      if (options === null || typeof options === 'string') {
        options = {
          scope: options
        };
      }
      options.scope = Roles._normalizeScopeName(options.scope);
      return options;
    },
    /**
     * Normalize scope name.
     *
     * @method _normalizeScopeName
     * @param {String} scopeName A scope name to normalize.
     * @return {String} Normalized scope name.
     * @private
     * @static
     */
    _normalizeScopeName: function (scopeName) {
      // map undefined and null to null
      if (scopeName == null) {
        return null;
      } else {
        return scopeName;
      }
    },
    /**
     * Throw an exception if `scopeName` is an invalid scope name.
     *
     * @method _checkRoleName
     * @param {String} scopeName A scope name to match against.
     * @private
     * @static
     */
    _checkScopeName: function (scopeName) {
      if (scopeName === null) return;
      if (!scopeName || typeof scopeName !== 'string' || scopeName.trim() !== scopeName) {
        throw new Error('Invalid scope name \'' + scopeName + '\'.');
      }
    }
  });
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roles_server.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alanning_roles/roles/roles_server.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* global Meteor, Roles */

Meteor.roleAssignment._ensureIndex({
  'user._id': 1,
  'inheritedRoles._id': 1,
  scope: 1
});
Meteor.roleAssignment._ensureIndex({
  'user._id': 1,
  'role._id': 1,
  scope: 1
});
Meteor.roleAssignment._ensureIndex({
  'role._id': 1
});
Meteor.roleAssignment._ensureIndex({
  scope: 1,
  'user._id': 1,
  'inheritedRoles._id': 1
}); // Adding userId and roleId might speed up other queries depending on the first index
Meteor.roleAssignment._ensureIndex({
  'inheritedRoles._id': 1
});
Meteor.roles._ensureIndex({
  'children._id': 1
});

/*
 * Publish logged-in user's roles so client-side checks can work.
 *
 * Use a named publish function so clients can check `ready()` state.
 */
Meteor.publish('_roles', function () {
  var loggedInUserId = this.userId;
  var fields = {
    roles: 1
  };
  if (!loggedInUserId) {
    this.ready();
    return;
  }
  return Meteor.users.find({
    _id: loggedInUserId
  }, {
    fields: fields
  });
});
Object.assign(Roles, {
  /**
   * @method _isNewRole
   * @param {Object} role `Meteor.roles` document.
   * @return {Boolean} Returns `true` if the `role` is in the new format.
   *                   If it is ambiguous or it is not, returns `false`.
   * @for Roles
   * @private
   * @static
   */
  _isNewRole: function (role) {
    return !('name' in role) && 'children' in role;
  },
  /**
   * @method _isOldRole
   * @param {Object} role `Meteor.roles` document.
   * @return {Boolean} Returns `true` if the `role` is in the old format.
   *                   If it is ambiguous or it is not, returns `false`.
   * @for Roles
   * @private
   * @static
   */
  _isOldRole: function (role) {
    return 'name' in role && !('children' in role);
  },
  /**
   * @method _isNewField
   * @param {Array} roles `Meteor.users` document `roles` field.
   * @return {Boolean} Returns `true` if the `roles` field is in the new format.
   *                   If it is ambiguous or it is not, returns `false`.
   * @for Roles
   * @private
   * @static
   */
  _isNewField: function (roles) {
    return Array.isArray(roles) && typeof roles[0] === 'object';
  },
  /**
   * @method _isOldField
   * @param {Array} roles `Meteor.users` document `roles` field.
   * @return {Boolean} Returns `true` if the `roles` field is in the old format.
   *                   If it is ambiguous or it is not, returns `false`.
   * @for Roles
   * @private
   * @static
   */
  _isOldField: function (roles) {
    return Array.isArray(roles) && typeof roles[0] === 'string' || typeof roles === 'object' && !Array.isArray(roles);
  },
  /**
   * @method _convertToNewRole
   * @param {Object} oldRole `Meteor.roles` document.
   * @return {Object} Converted `role` to the new format.
   * @for Roles
   * @private
   * @static
   */
  _convertToNewRole: function (oldRole) {
    if (!(typeof oldRole.name === 'string')) throw new Error("Role name '" + oldRole.name + "' is not a string.");
    return {
      _id: oldRole.name,
      children: []
    };
  },
  /**
   * @method _convertToOldRole
   * @param {Object} newRole `Meteor.roles` document.
   * @return {Object} Converted `role` to the old format.
   * @for Roles
   * @private
   * @static
   */
  _convertToOldRole: function (newRole) {
    if (!(typeof newRole._id === 'string')) throw new Error("Role name '" + newRole._id + "' is not a string.");
    return {
      name: newRole._id
    };
  },
  /**
   * @method _convertToNewField
   * @param {Array} oldRoles `Meteor.users` document `roles` field in the old format.
   * @param {Boolean} convertUnderscoresToDots Should we convert underscores to dots in group names.
   * @return {Array} Converted `roles` to the new format.
   * @for Roles
   * @private
   * @static
   */
  _convertToNewField: function (oldRoles, convertUnderscoresToDots) {
    var roles = [];
    if (Array.isArray(oldRoles)) {
      oldRoles.forEach(function (role, index) {
        if (!(typeof role === 'string')) throw new Error("Role '" + role + "' is not a string.");
        roles.push({
          _id: role,
          scope: null,
          assigned: true
        });
      });
    } else if (typeof oldRoles === 'object') {
      Object.entries(oldRoles).forEach(_ref => {
        let [group, rolesArray] = _ref;
        if (group === '__global_roles__') {
          group = null;
        } else if (convertUnderscoresToDots) {
          // unescape
          group = group.replace(/_/g, '.');
        }
        rolesArray.forEach(function (role) {
          if (!(typeof role === 'string')) throw new Error("Role '" + role + "' is not a string.");
          roles.push({
            _id: role,
            scope: group,
            assigned: true
          });
        });
      });
    }
    return roles;
  },
  /**
   * @method _convertToOldField
   * @param {Array} newRoles `Meteor.users` document `roles` field in the new format.
   * @param {Boolean} usingGroups Should we use groups or not.
   * @return {Array} Converted `roles` to the old format.
   * @for Roles
   * @private
   * @static
   */
  _convertToOldField: function (newRoles, usingGroups) {
    var roles;
    if (usingGroups) {
      roles = {};
    } else {
      roles = [];
    }
    newRoles.forEach(function (userRole) {
      if (!(typeof userRole === 'object')) throw new Error("Role '" + userRole + "' is not an object.");

      // We assume that we are converting back a failed migration, so values can only be
      // what were valid values in 1.0. So no group names starting with $ and no subroles.

      if (userRole.scope) {
        if (!usingGroups) throw new Error("Role '" + userRole._id + "' with scope '" + userRole.scope + "' without enabled groups.");

        // escape
        var scope = userRole.scope.replace(/\./g, '_');
        if (scope[0] === '$') throw new Error("Group name '" + scope + "' start with $.");
        roles[scope] = roles[scope] || [];
        roles[scope].push(userRole._id);
      } else {
        if (usingGroups) {
          roles.__global_roles__ = roles.__global_roles__ || [];
          roles.__global_roles__.push(userRole._id);
        } else {
          roles.push(userRole._id);
        }
      }
    });
    return roles;
  },
  /**
   * @method _defaultUpdateUser
   * @param {Object} user `Meteor.users` document.
   * @param {Array|Object} roles Value to which user's `roles` field should be set.
   * @for Roles
   * @private
   * @static
   */
  _defaultUpdateUser: function (user, roles) {
    Meteor.users.update({
      _id: user._id,
      // making sure nothing changed in meantime
      roles: user.roles
    }, {
      $set: {
        roles
      }
    });
  },
  /**
   * @method _defaultUpdateRole
   * @param {Object} oldRole Old `Meteor.roles` document.
   * @param {Object} newRole New `Meteor.roles` document.
   * @for Roles
   * @private
   * @static
   */
  _defaultUpdateRole: function (oldRole, newRole) {
    Meteor.roles.remove(oldRole._id);
    Meteor.roles.insert(newRole);
  },
  /**
   * @method _dropCollectionIndex
   * @param {Object} collection Collection on which to drop the index.
   * @param {String} indexName Name of the index to drop.
   * @for Roles
   * @private
   * @static
   */
  _dropCollectionIndex: function (collection, indexName) {
    try {
      collection._dropIndex(indexName);
    } catch (e) {
      if (e.name !== 'MongoError') throw e;
      if (!/index not found/.test(e.err || e.errmsg)) throw e;
    }
  },
  /**
   * Migrates `Meteor.users` and `Meteor.roles` to the new format.
   *
   * @method _forwardMigrate
   * @param {Function} updateUser Function which updates the user object. Default `_defaultUpdateUser`.
   * @param {Function} updateRole Function which updates the role object. Default `_defaultUpdateRole`.
   * @param {Boolean} convertUnderscoresToDots Should we convert underscores to dots in group names.
   * @for Roles
   * @private
   * @static
   */
  _forwardMigrate: function (updateUser, updateRole, convertUnderscoresToDots) {
    updateUser = updateUser || Roles._defaultUpdateUser;
    updateRole = updateRole || Roles._defaultUpdateRole;
    Roles._dropCollectionIndex(Meteor.roles, 'name_1');
    Meteor.roles.find().forEach(function (role, index, cursor) {
      if (!Roles._isNewRole(role)) {
        updateRole(role, Roles._convertToNewRole(role));
      }
    });
    Meteor.users.find().forEach(function (user, index, cursor) {
      if (!Roles._isNewField(user.roles)) {
        updateUser(user, Roles._convertToNewField(user.roles, convertUnderscoresToDots));
      }
    });
  },
  /**
   * Moves the assignments from `Meteor.users` to `Meteor.roleAssignment`.
   *
   * @method _forwardMigrate2
   * @param {Object} userSelector An opportunity to share the work among instances. It's advisable to do the division based on user-id.
   * @for Roles
   * @private
   * @static
   */
  _forwardMigrate2: function (userSelector) {
    userSelector = userSelector || {};
    Object.assign(userSelector, {
      roles: {
        $ne: null
      }
    });
    Meteor.users.find(userSelector).forEach(function (user, index) {
      user.roles.filter(r => r.assigned).forEach(r => {
        // Added `ifExists` to make it less error-prone
        Roles._addUserToRole(user._id, r._id, {
          scope: r.scope,
          ifExists: true
        });
      });
      Meteor.users.update({
        _id: user._id
      }, {
        $unset: {
          roles: ''
        }
      });
    });

    // No need to keep the indexes around
    Roles._dropCollectionIndex(Meteor.users, 'roles._id_1_roles.scope_1');
    Roles._dropCollectionIndex(Meteor.users, 'roles.scope_1');
  },
  /**
   * Migrates `Meteor.users` and `Meteor.roles` to the old format.
   *
   * We assume that we are converting back a failed migration, so values can only be
   * what were valid values in the old format. So no group names starting with `$` and
   * no subroles.
   *
   * @method _backwardMigrate
   * @param {Function} updateUser Function which updates the user object. Default `_defaultUpdateUser`.
   * @param {Function} updateRole Function which updates the role object. Default `_defaultUpdateRole`.
   * @param {Boolean} usingGroups Should we use groups or not.
   * @for Roles
   * @private
   * @static
   */
  _backwardMigrate: function (updateUser, updateRole, usingGroups) {
    updateUser = updateUser || Roles._defaultUpdateUser;
    updateRole = updateRole || Roles._defaultUpdateRole;
    Roles._dropCollectionIndex(Meteor.users, 'roles._id_1_roles.scope_1');
    Roles._dropCollectionIndex(Meteor.users, 'roles.scope_1');
    Meteor.roles.find().forEach(function (role, index, cursor) {
      if (!Roles._isOldRole(role)) {
        updateRole(role, Roles._convertToOldRole(role));
      }
    });
    Meteor.users.find().forEach(function (user, index, cursor) {
      if (!Roles._isOldField(user.roles)) {
        updateUser(user, Roles._convertToOldField(user.roles, usingGroups));
      }
    });
  },
  /**
   * Moves the assignments from `Meteor.roleAssignment` back to to `Meteor.users`.
   *
   * @method _backwardMigrate2
   * @param {Object} assignmentSelector An opportunity to share the work among instances. It's advisable to do the division based on user-id.
   * @for Roles
   * @private
   * @static
   */
  _backwardMigrate2: function (assignmentSelector) {
    assignmentSelector = assignmentSelector || {};
    Meteor.users._ensureIndex({
      'roles._id': 1,
      'roles.scope': 1
    });
    Meteor.users._ensureIndex({
      'roles.scope': 1
    });
    Meteor.roleAssignment.find(assignmentSelector).forEach(r => {
      const roles = Meteor.users.findOne({
        _id: r.user._id
      }).roles || [];
      const currentRole = roles.find(oldRole => oldRole._id === r.role._id && oldRole.scope === r.scope);
      if (currentRole) {
        currentRole.assigned = true;
      } else {
        roles.push({
          _id: r.role._id,
          scope: r.scope,
          assigned: true
        });
        r.inheritedRoles.forEach(inheritedRole => {
          const currentInheritedRole = roles.find(oldRole => oldRole._id === inheritedRole._id && oldRole.scope === r.scope);
          if (!currentInheritedRole) {
            roles.push({
              _id: inheritedRole._id,
              scope: r.scope,
              assigned: false
            });
          }
        });
      }
      Meteor.users.update({
        _id: r.user._id
      }, {
        $set: {
          roles
        }
      });
      Meteor.roleAssignment.remove({
        _id: r._id
      });
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/alanning:roles/roles/roles_common.js");
require("/node_modules/meteor/alanning:roles/roles/roles_server.js");

/* Exports */
Package._define("alanning:roles", {
  Roles: Roles
});

})();

//# sourceURL=meteor://💻app/packages/alanning_roles.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYWxhbm5pbmc6cm9sZXMvcm9sZXMvcm9sZXNfY29tbW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9hbGFubmluZzpyb2xlcy9yb2xlcy9yb2xlc19zZXJ2ZXIuanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwicm9sZXMiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJyb2xlQXNzaWdubWVudCIsIlJvbGVzIiwiZ2V0R3JvdXBzRm9yVXNlckRlcHJlY2F0aW9uV2FybmluZyIsIk9iamVjdCIsImFzc2lnbiIsIkdMT0JBTF9HUk9VUCIsImNyZWF0ZVJvbGUiLCJyb2xlTmFtZSIsIm9wdGlvbnMiLCJfY2hlY2tSb2xlTmFtZSIsInVubGVzc0V4aXN0cyIsInJlc3VsdCIsInVwc2VydCIsIl9pZCIsIiRzZXRPbkluc2VydCIsImNoaWxkcmVuIiwiaW5zZXJ0ZWRJZCIsIkVycm9yIiwiZGVsZXRlUm9sZSIsImluaGVyaXRlZFJvbGVzIiwicmVtb3ZlIiwiX2dldFBhcmVudFJvbGVOYW1lcyIsImZpbmRPbmUiLCJmaW5kIiwiJGluIiwiZmV0Y2giLCJmb3JFYWNoIiwiciIsInVwZGF0ZSIsIiRwdWxsIiwiX2dldEluaGVyaXRlZFJvbGVOYW1lcyIsIiRzZXQiLCJtYXAiLCJyMiIsIm11bHRpIiwibGVuZ3RoIiwicmVuYW1lUm9sZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwicm9sZSIsImNvdW50IiwiaW5zZXJ0IiwiYWRkUm9sZXNUb1BhcmVudCIsInJvbGVzTmFtZXMiLCJwYXJlbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiX2FkZFJvbGVUb1BhcmVudCIsImluY2x1ZGVzIiwiJG5lIiwiJHB1c2giLCIkZWFjaCIsInJlbW92ZVJvbGVzRnJvbVBhcmVudCIsIl9yZW1vdmVSb2xlRnJvbVBhcmVudCIsImZpZWxkcyIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiaWQiLCJfbm9ybWFsaXplT3B0aW9ucyIsIl9jaGVja1Njb3BlTmFtZSIsInNjb3BlIiwiaWZFeGlzdHMiLCJ1c2VyIiwiX2FkZFVzZXJUb1JvbGUiLCJzZXRVc2VyUm9sZXMiLCJhbnlTY29wZSIsInNlbGVjdG9yIiwidXNlcklkIiwicmVzIiwicGFyZW50Um9sZXMiLCJTZXQiLCJwYXJlbnRSb2xlIiwiYWRkIiwiZGVsZXRlIiwibmVzdGVkUm9sZXMiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsIl9yZW1vdmVVc2VyRnJvbVJvbGUiLCJ1c2VySXNJblJvbGUiLCJmaWx0ZXIiLCJzb21lIiwibGltaXQiLCJnZXRSb2xlc0ZvclVzZXIiLCJmdWxsT2JqZWN0cyIsIm9ubHlBc3NpZ25lZCIsIm9ubHlTY29wZWQiLCJwdXNoIiwicmVkdWNlIiwicmV2IiwiY3VycmVudCIsImNvbmNhdCIsImdldEFsbFJvbGVzIiwicXVlcnlPcHRpb25zIiwic29ydCIsImdldFVzZXJzSW5Sb2xlIiwiaWRzIiwiZ2V0VXNlckFzc2lnbm1lbnRzRm9yUm9sZSIsImEiLCJfZ2V0VXNlcnNJblJvbGVDdXJzb3IiLCJnZXRHcm91cHNGb3JVc2VyIiwiY29uc29sZSIsIndhcm4iLCJnZXRTY29wZXNGb3JVc2VyIiwiYXJndW1lbnRzIiwic2NvcGVzIiwib2JpIiwicmVuYW1lU2NvcGUiLCJyZW1vdmVTY29wZSIsIm5hbWUiLCJ0cmltIiwiaXNQYXJlbnRPZiIsInBhcmVudFJvbGVOYW1lIiwiY2hpbGRSb2xlTmFtZSIsInJvbGVzVG9DaGVjayIsInBvcCIsInVuZGVmaW5lZCIsIl9ub3JtYWxpemVTY29wZU5hbWUiLCJzY29wZU5hbWUiLCJjYWxsIiwibW9kdWxlIiwiX2Vuc3VyZUluZGV4IiwicHVibGlzaCIsImxvZ2dlZEluVXNlcklkIiwicmVhZHkiLCJfaXNOZXdSb2xlIiwiX2lzT2xkUm9sZSIsIl9pc05ld0ZpZWxkIiwiX2lzT2xkRmllbGQiLCJfY29udmVydFRvTmV3Um9sZSIsIm9sZFJvbGUiLCJfY29udmVydFRvT2xkUm9sZSIsIm5ld1JvbGUiLCJfY29udmVydFRvTmV3RmllbGQiLCJvbGRSb2xlcyIsImNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cyIsImluZGV4IiwiYXNzaWduZWQiLCJlbnRyaWVzIiwiX3JlZiIsImdyb3VwIiwicm9sZXNBcnJheSIsInJlcGxhY2UiLCJfY29udmVydFRvT2xkRmllbGQiLCJuZXdSb2xlcyIsInVzaW5nR3JvdXBzIiwidXNlclJvbGUiLCJfX2dsb2JhbF9yb2xlc19fIiwiX2RlZmF1bHRVcGRhdGVVc2VyIiwiX2RlZmF1bHRVcGRhdGVSb2xlIiwiX2Ryb3BDb2xsZWN0aW9uSW5kZXgiLCJjb2xsZWN0aW9uIiwiaW5kZXhOYW1lIiwiX2Ryb3BJbmRleCIsImUiLCJ0ZXN0IiwiZXJyIiwiZXJybXNnIiwiX2ZvcndhcmRNaWdyYXRlIiwidXBkYXRlVXNlciIsInVwZGF0ZVJvbGUiLCJjdXJzb3IiLCJfZm9yd2FyZE1pZ3JhdGUyIiwidXNlclNlbGVjdG9yIiwiJHVuc2V0IiwiX2JhY2t3YXJkTWlncmF0ZSIsIl9iYWNrd2FyZE1pZ3JhdGUyIiwiYXNzaWdubWVudFNlbGVjdG9yIiwiY3VycmVudFJvbGUiLCJpbmhlcml0ZWRSb2xlIiwiY3VycmVudEluaGVyaXRlZFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0EsSUFBSSxDQUFDQSxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNqQkQsTUFBTSxDQUFDQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDQyxVQUFVLENBQUMsT0FBTyxDQUFDO0VBQzlDO0VBRUEsSUFBSSxDQUFDSCxNQUFNLENBQUNJLGNBQWMsRUFBRTtJQUMxQkosTUFBTSxDQUFDSSxjQUFjLEdBQUcsSUFBSUYsS0FBSyxDQUFDQyxVQUFVLENBQUMsaUJB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QyxDQUFDbUMsSUFBSSxDQUFDakQ7TUFBSSxDQUFDLEVBQUU7UUFBRWtCLElBQUksRUFBRTtVQUFFbEM7UUFBTTtNQUFFLENBQUMsQ0FBQztNQUM3REQsTUFBTSxDQUFDSSxjQUFjLENBQUNvQixNQUFNLENBQUM7UUFBRVAsR0FBRyxFQUFFYyxDQUFDLENBQUNkO01BQUksQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2FsYW5uaW5nX3JvbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIE1ldGVvciwgUm9sZXMsIE1vbmdvICovXG5cbi8qKlxuICogUHJvdmlkZXMgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdXNlciBhdXRob3JpemF0aW9uLiBDb21wYXRpYmxlIHdpdGggYnVpbHQtaW4gTWV0ZW9yIGFjY291bnRzIHBhY2thZ2VzLlxuICpcbiAqIFJvbGVzIGFyZSBhY2Nlc3NpYmxlIHRocm9naCBgTWV0ZW9yLnJvbGVzYCBjb2xsZWN0aW9uIGFuZCBkb2N1bWVudHMgY29uc2lzdCBvZjpcbiAqICAtIGBfaWRgOiByb2xlIG5hbWVcbiAqICAtIGBjaGlsZHJlbmA6IGxpc3Qgb2Ygc3ViZG9jdW1lbnRzOlxuICogICAgLSBgX2lkYFxuICpcbiAqIENoaWxkcmVuIGxpc3QgZWxlbWVudHMgYXJlIHN1YmRvY3VtZW50cyBzbyB0aGF0IHRoZXkgY2FuIGJlIGVhc2llciBleHRlbmRlZCBpbiB0aGUgZnV0dXJlIG9yIGJ5IHBsdWdpbnMuXG4gKlxuICogUm9sZXMgY2FuIGhhdmUgbXVsdGlwbGUgcGFyZW50cyBhbmQgY2FuIGJlIGNoaWxkcmVuIChzdWJyb2xlcykgb2YgbXVsdGlwbGUgcm9sZXMuXG4gKlxuICogRXhhbXBsZTogYHtfaWQ6ICdhZG1pbicsIGNoaWxkcmVuOiBbe19pZDogJ2VkaXRvcid9XX1gXG4gKlxuICogVGhlIGFzc2lnbm1lbnQgb2YgYSByb2xlIHRvIGEgdXNlciBpcyBzdG9yZWQgaW4gYSBjb2xsZWN0aW9uLCBhY2Nlc3NpYmxlIHRocm91Z2ggYE1ldGVvci5yb2xlQXNzaWdubWVudGAuXG4gKiBJdCdzIGRvY3VtZW50cyBjb25zaXN0IG9mXG4gKiAgLSBgX2lkYDogSW50ZXJuYWwgTW9uZ29EQiBpZFxuICogIC0gYHJvbGVgOiBBIHJvbGUgb2JqZWN0IHdoaWNoIGdvdCBhc3NpZ25lZC4gVXN1YWxseSBvbmx5IGNvbnRhaW5zIHRoZSBgX2lkYCBwcm9wZXJ0eVxuICogIC0gYHVzZXJgOiBBIHVzZXIgb2JqZWN0LCB1c3VhbGx5IG9ubHkgY29udGFpbnMgdGhlIGBfaWRgIHByb3BlcnR5XG4gKiAgLSBgc2NvcGVgOiBzY29wZSBuYW1lXG4gKiAgLSBgaW5oZXJpdGVkUm9sZXNgOiBBIGxpc3Qgb2YgYWxsIHRoZSByb2xlcyBvYmplY3RzIGluaGVyaXRlZCBieSB0aGUgYXNzaWduZWQgcm9sZS5cbiAqXG4gKiBAbW9kdWxlIFJvbGVzXG4gKi9cbmlmICghTWV0ZW9yLnJvbGVzKSB7XG4gIE1ldGVvci5yb2xlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyb2xlcycpXG59XG5cbmlmICghTWV0ZW9yLnJvbGVBc3NpZ25tZW50KSB7XG4gIE1ldGVvci5yb2xlQXNzaWdubWVudCA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyb2xlLWFzc2lnbm1lbnQnKVxufVxuXG4vKipcbiAqIEBjbGFzcyBSb2xlc1xuICovXG5pZiAodHlwZW9mIFJvbGVzID09PSAndW5kZWZpbmVkJykge1xuICBSb2xlcyA9IHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxufVxuXG52YXIgZ2V0R3JvdXBzRm9yVXNlckRlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlXG5cbk9iamVjdC5hc3NpZ24oUm9sZXMsIHtcblxuICAvKipcbiAgICogVXNlZCBhcyBhIGdsb2JhbCBncm91cCAobm93IHNjb3BlKSBuYW1lLiBOb3QgdXNlZCBhbnltb3JlLlxuICAgKlxuICAgKiBAcHJvcGVydHkgR0xPQkFMX0dST1VQXG4gICAqIEBzdGF0aWNcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIEdMT0JBTF9HUk9VUDogbnVsbCxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHJvbGUuXG4gICAqXG4gICAqIEBtZXRob2QgY3JlYXRlUm9sZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcm9sZU5hbWUgTmFtZSBvZiByb2xlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnM6XG4gICAqICAgLSBgdW5sZXNzRXhpc3RzYDogaWYgYHRydWVgLCBleGNlcHRpb24gd2lsbCBub3QgYmUgdGhyb3duIGluIHRoZSByb2xlIGFscmVhZHkgZXhpc3RzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gSUQgb2YgdGhlIG5ldyByb2xlIG9yIG51bGwuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIGNyZWF0ZVJvbGU6IGZ1bmN0aW9uIChyb2xlTmFtZSwgb3B0aW9ucykge1xuICAgIFJvbGVzLl9jaGVja1JvbGVOYW1lKHJvbGVOYW1lKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdW5sZXNzRXhpc3RzOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgcmVzdWx0ID0gTWV0ZW9yLnJvbGVzLnVwc2VydCh7IF9pZDogcm9sZU5hbWUgfSwgeyAkc2V0T25JbnNlcnQ6IHsgY2hpbGRyZW46IFtdIH0gfSlcblxuICAgIGlmICghcmVzdWx0Lmluc2VydGVkSWQpIHtcbiAgICAgIGlmIChvcHRpb25zLnVubGVzc0V4aXN0cykgcmV0dXJuIG51bGxcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZSBcXCcnICsgcm9sZU5hbWUgKyAnXFwnIGFscmVhZHkgZXhpc3RzLicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5pbnNlcnRlZElkXG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBleGlzdGluZyByb2xlLlxuICAgKlxuICAgKiBJZiB0aGUgcm9sZSBpcyBzZXQgZm9yIGFueSB1c2VyLCBpdCBpcyBhdXRvbWF0aWNhbGx5IHVuc2V0LlxuICAgKlxuICAgKiBAbWV0aG9kIGRlbGV0ZVJvbGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIE5hbWUgb2Ygcm9sZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgZGVsZXRlUm9sZTogZnVuY3Rpb24gKHJvbGVOYW1lKSB7XG4gICAgdmFyIHJvbGVzXG4gICAgdmFyIGluaGVyaXRlZFJvbGVzXG5cbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShyb2xlTmFtZSlcblxuICAgIC8vIFJlbW92ZSBhbGwgYXNzaWdubWVudHNcbiAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQucmVtb3ZlKHtcbiAgICAgICdyb2xlLl9pZCc6IHJvbGVOYW1lXG4gICAgfSlcblxuICAgIGRvIHtcbiAgICAgIC8vIEZvciBhbGwgcm9sZXMgd2hvIGhhdmUgaXQgYXMgYSBkZXBlbmRlbmN5IC4uLlxuICAgICAgcm9sZXMgPSBSb2xlcy5fZ2V0UGFyZW50Um9sZU5hbWVzKE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByb2xlTmFtZSB9KSlcblxuICAgICAgTWV0ZW9yLnJvbGVzLmZpbmQoeyBfaWQ6IHsgJGluOiByb2xlcyB9IH0pLmZldGNoKCkuZm9yRWFjaChyID0+IHtcbiAgICAgICAgTWV0ZW9yLnJvbGVzLnVwZGF0ZSh7XG4gICAgICAgICAgX2lkOiByLl9pZFxuICAgICAgICB9LCB7XG4gICAgICAgICAgJHB1bGw6IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgIF9pZDogcm9sZU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaW5oZXJpdGVkUm9sZXMgPSBSb2xlcy5fZ2V0SW5oZXJpdGVkUm9sZU5hbWVzKE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByLl9pZCB9KSlcbiAgICAgICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwZGF0ZSh7XG4gICAgICAgICAgJ3JvbGUuX2lkJzogci5faWRcbiAgICAgICAgfSwge1xuICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgIGluaGVyaXRlZFJvbGVzOiBbci5faWQsIC4uLmluaGVyaXRlZFJvbGVzXS5tYXAocjIgPT4gKHsgX2lkOiByMiB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHsgbXVsdGk6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfSB3aGlsZSAocm9sZXMubGVuZ3RoID4gMClcblxuICAgIC8vIEFuZCBmaW5hbGx5IHJlbW92ZSB0aGUgcm9sZSBpdHNlbGZcbiAgICBNZXRlb3Iucm9sZXMucmVtb3ZlKHsgX2lkOiByb2xlTmFtZSB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW5hbWUgYW4gZXhpc3Rpbmcgcm9sZS5cbiAgICpcbiAgICogQG1ldGhvZCByZW5hbWVSb2xlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvbGROYW1lIE9sZCBuYW1lIG9mIGEgcm9sZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5ld05hbWUgTmV3IG5hbWUgb2YgYSByb2xlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICByZW5hbWVSb2xlOiBmdW5jdGlvbiAob2xkTmFtZSwgbmV3TmFtZSkge1xuICAgIHZhciByb2xlXG4gICAgdmFyIGNvdW50XG5cbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShvbGROYW1lKVxuICAgIFJvbGVzLl9jaGVja1JvbGVOYW1lKG5ld05hbWUpXG5cbiAgICBpZiAob2xkTmFtZSA9PT0gbmV3TmFtZSkgcmV0dXJuXG5cbiAgICByb2xlID0gTWV0ZW9yLnJvbGVzLmZpbmRPbmUoeyBfaWQ6IG9sZE5hbWUgfSlcblxuICAgIGlmICghcm9sZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb2xlIFxcJycgKyBvbGROYW1lICsgJ1xcJyBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cblxuICAgIHJvbGUuX2lkID0gbmV3TmFtZVxuXG4gICAgTWV0ZW9yLnJvbGVzLmluc2VydChyb2xlKVxuXG4gICAgZG8ge1xuICAgICAgY291bnQgPSBNZXRlb3Iucm9sZUFzc2lnbm1lbnQudXBkYXRlKHtcbiAgICAgICAgJ3JvbGUuX2lkJzogb2xkTmFtZVxuICAgICAgfSwge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgJ3JvbGUuX2lkJzogbmV3TmFtZVxuICAgICAgICB9XG4gICAgICB9LCB7IG11bHRpOiB0cnVlIH0pXG4gICAgfSB3aGlsZSAoY291bnQgPiAwKVxuXG4gICAgZG8ge1xuICAgICAgY291bnQgPSBNZXRlb3Iucm9sZUFzc2lnbm1lbnQudXBkYXRlKHtcbiAgICAgICAgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IG9sZE5hbWVcbiAgICAgIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgICdpbmhlcml0ZWRSb2xlcy4kLl9pZCc6IG5ld05hbWVcbiAgICAgICAgfVxuICAgICAgfSwgeyBtdWx0aTogdHJ1ZSB9KVxuICAgIH0gd2hpbGUgKGNvdW50ID4gMClcblxuICAgIGRvIHtcbiAgICAgIGNvdW50ID0gTWV0ZW9yLnJvbGVzLnVwZGF0ZSh7XG4gICAgICAgICdjaGlsZHJlbi5faWQnOiBvbGROYW1lXG4gICAgICB9LCB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAnY2hpbGRyZW4uJC5faWQnOiBuZXdOYW1lXG4gICAgICAgIH1cbiAgICAgIH0sIHsgbXVsdGk6IHRydWUgfSlcbiAgICB9IHdoaWxlIChjb3VudCA+IDApXG5cbiAgICBNZXRlb3Iucm9sZXMucmVtb3ZlKHsgX2lkOiBvbGROYW1lIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCByb2xlIHBhcmVudCB0byByb2xlcy5cbiAgICpcbiAgICogUHJldmlvdXMgcGFyZW50cyBhcmUga2VwdCAocm9sZSBjYW4gaGF2ZSBtdWx0aXBsZSBwYXJlbnRzKS4gRm9yIHVzZXJzIHdoaWNoIGhhdmUgdGhlXG4gICAqIHBhcmVudCByb2xlIHNldCwgbmV3IHN1YnJvbGVzIGFyZSBhZGRlZCBhdXRvbWF0aWNhbGx5LlxuICAgKlxuICAgKiBAbWV0aG9kIGFkZFJvbGVzVG9QYXJlbnRcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzTmFtZXMgTmFtZShzKSBvZiByb2xlKHMpLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBOYW1lIG9mIHBhcmVudCByb2xlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBhZGRSb2xlc1RvUGFyZW50OiBmdW5jdGlvbiAocm9sZXNOYW1lcywgcGFyZW50TmFtZSkge1xuICAgIC8vIGVuc3VyZSBhcnJheXNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9sZXNOYW1lcykpIHJvbGVzTmFtZXMgPSBbcm9sZXNOYW1lc11cblxuICAgIHJvbGVzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZU5hbWUpIHtcbiAgICAgIFJvbGVzLl9hZGRSb2xlVG9QYXJlbnQocm9sZU5hbWUsIHBhcmVudE5hbWUpXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkUm9sZVRvUGFyZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2xlTmFtZSBOYW1lIG9mIHJvbGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIE5hbWUgb2YgcGFyZW50IHJvbGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9hZGRSb2xlVG9QYXJlbnQ6IGZ1bmN0aW9uIChyb2xlTmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByb2xlXG4gICAgdmFyIGNvdW50XG5cbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShyb2xlTmFtZSlcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShwYXJlbnROYW1lKVxuXG4gICAgLy8gcXVlcnkgdG8gZ2V0IHJvbGUncyBjaGlsZHJlblxuICAgIHJvbGUgPSBNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogcm9sZU5hbWUgfSlcblxuICAgIGlmICghcm9sZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb2xlIFxcJycgKyByb2xlTmFtZSArICdcXCcgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG5cbiAgICAvLyBkZXRlY3QgY3ljbGVzXG4gICAgaWYgKFJvbGVzLl9nZXRJbmhlcml0ZWRSb2xlTmFtZXMocm9sZSkuaW5jbHVkZXMocGFyZW50TmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZXMgXFwnJyArIHJvbGVOYW1lICsgJ1xcJyBhbmQgXFwnJyArIHBhcmVudE5hbWUgKyAnXFwnIHdvdWxkIGZvcm0gYSBjeWNsZS4nKVxuICAgIH1cblxuICAgIGNvdW50ID0gTWV0ZW9yLnJvbGVzLnVwZGF0ZSh7XG4gICAgICBfaWQ6IHBhcmVudE5hbWUsXG4gICAgICAnY2hpbGRyZW4uX2lkJzoge1xuICAgICAgICAkbmU6IHJvbGUuX2lkXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgJHB1c2g6IHtcbiAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICBfaWQ6IHJvbGUuX2lkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaWYgdGhlcmUgd2FzIG5vIGNoYW5nZSwgcGFyZW50IHJvbGUgbWlnaHQgbm90IGV4aXN0LCBvciByb2xlIGlzXG4gICAgLy8gYWxyZWFkeSBhIHN1YnJvbGU7IGluIGFueSBjYXNlIHdlIGRvIG5vdCBoYXZlIGFueXRoaW5nIG1vcmUgdG8gZG9cbiAgICBpZiAoIWNvdW50KSByZXR1cm5cblxuICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC51cGRhdGUoe1xuICAgICAgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IHBhcmVudE5hbWVcbiAgICB9LCB7XG4gICAgICAkcHVzaDoge1xuICAgICAgICBpbmhlcml0ZWRSb2xlczogeyAkZWFjaDogW3JvbGUuX2lkLCAuLi5Sb2xlcy5fZ2V0SW5oZXJpdGVkUm9sZU5hbWVzKHJvbGUpXS5tYXAociA9PiAoeyBfaWQ6IHIgfSkpIH1cbiAgICAgIH1cbiAgICB9LCB7IG11bHRpOiB0cnVlIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSByb2xlIHBhcmVudCBmcm9tIHJvbGVzLlxuICAgKlxuICAgKiBPdGhlciBwYXJlbnRzIGFyZSBrZXB0IChyb2xlIGNhbiBoYXZlIG11bHRpcGxlIHBhcmVudHMpLiBGb3IgdXNlcnMgd2hpY2ggaGF2ZSB0aGVcbiAgICogcGFyZW50IHJvbGUgc2V0LCByZW1vdmVkIHN1YnJvbGUgaXMgcmVtb3ZlZCBhdXRvbWF0aWNhbGx5LlxuICAgKlxuICAgKiBAbWV0aG9kIHJlbW92ZVJvbGVzRnJvbVBhcmVudFxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXNOYW1lcyBOYW1lKHMpIG9mIHJvbGUocykuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIE5hbWUgb2YgcGFyZW50IHJvbGUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHJlbW92ZVJvbGVzRnJvbVBhcmVudDogZnVuY3Rpb24gKHJvbGVzTmFtZXMsIHBhcmVudE5hbWUpIHtcbiAgICAvLyBlbnN1cmUgYXJyYXlzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvbGVzTmFtZXMpKSByb2xlc05hbWVzID0gW3JvbGVzTmFtZXNdXG5cbiAgICByb2xlc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKHJvbGVOYW1lKSB7XG4gICAgICBSb2xlcy5fcmVtb3ZlUm9sZUZyb21QYXJlbnQocm9sZU5hbWUsIHBhcmVudE5hbWUpXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlUm9sZUZyb21QYXJlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIE5hbWUgb2Ygcm9sZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgTmFtZSBvZiBwYXJlbnQgcm9sZS5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX3JlbW92ZVJvbGVGcm9tUGFyZW50OiBmdW5jdGlvbiAocm9sZU5hbWUsIHBhcmVudE5hbWUpIHtcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShyb2xlTmFtZSlcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShwYXJlbnROYW1lKVxuXG4gICAgLy8gY2hlY2sgZm9yIHJvbGUgZXhpc3RlbmNlXG4gICAgLy8gdGhpcyB3b3VsZCBub3QgcmVhbGx5IGJlIG5lZWRlZCwgYnV0IHdlIGFyZSB0cnlpbmcgdG8gbWF0Y2ggYWRkUm9sZXNUb1BhcmVudFxuICAgIGxldCByb2xlID0gTWV0ZW9yLnJvbGVzLmZpbmRPbmUoeyBfaWQ6IHJvbGVOYW1lIH0sIHsgZmllbGRzOiB7IF9pZDogMSB9IH0pXG5cbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZSBcXCcnICsgcm9sZU5hbWUgKyAnXFwnIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuXG4gICAgY29uc3QgY291bnQgPSBNZXRlb3Iucm9sZXMudXBkYXRlKHtcbiAgICAgIF9pZDogcGFyZW50TmFtZVxuICAgIH0sIHtcbiAgICAgICRwdWxsOiB7XG4gICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgX2lkOiByb2xlLl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGlmIHRoZXJlIHdhcyBubyBjaGFuZ2UsIHBhcmVudCByb2xlIG1pZ2h0IG5vdCBleGlzdCwgb3Igcm9sZSB3YXNcbiAgICAvLyBhbHJlYWR5IG5vdCBhIHN1YnJvbGU7IGluIGFueSBjYXNlIHdlIGRvIG5vdCBoYXZlIGFueXRoaW5nIG1vcmUgdG8gZG9cbiAgICBpZiAoIWNvdW50KSByZXR1cm5cblxuICAgIC8vIEZvciBhbGwgcm9sZXMgd2hvIGhhdmUgaGFkIGl0IGFzIGEgZGVwZW5kZW5jeSAuLi5cbiAgICBjb25zdCByb2xlcyA9IFsuLi5Sb2xlcy5fZ2V0UGFyZW50Um9sZU5hbWVzKE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiBwYXJlbnROYW1lIH0pKSwgcGFyZW50TmFtZV1cblxuICAgIE1ldGVvci5yb2xlcy5maW5kKHsgX2lkOiB7ICRpbjogcm9sZXMgfSB9KS5mZXRjaCgpLmZvckVhY2gociA9PiB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRSb2xlcyA9IFJvbGVzLl9nZXRJbmhlcml0ZWRSb2xlTmFtZXMoTWV0ZW9yLnJvbGVzLmZpbmRPbmUoeyBfaWQ6IHIuX2lkIH0pKVxuICAgICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwZGF0ZSh7XG4gICAgICAgICdyb2xlLl9pZCc6IHIuX2lkLFxuICAgICAgICAnaW5oZXJpdGVkUm9sZXMuX2lkJzogcm9sZS5faWRcbiAgICAgIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgIGluaGVyaXRlZFJvbGVzOiBbci5faWQsIC4uLmluaGVyaXRlZFJvbGVzXS5tYXAocjIgPT4gKHsgX2lkOiByMiB9KSlcbiAgICAgICAgfVxuICAgICAgfSwgeyBtdWx0aTogdHJ1ZSB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCB1c2VycyB0byByb2xlcy5cbiAgICpcbiAgICogQWRkcyByb2xlcyB0byBleGlzdGluZyByb2xlcyBmb3IgZWFjaCB1c2VyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJZCwgJ2FkbWluJylcbiAgICogICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsIFsndmlldy1zZWNyZXRzJ10sICdleGFtcGxlLmNvbScpXG4gICAqICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoW3VzZXIxLCB1c2VyMl0sIFsndXNlcicsJ2VkaXRvciddKVxuICAgKiAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKFt1c2VyMSwgdXNlcjJdLCBbJ2dsb3Jpb3VzLWFkbWluJywgJ3BlcmZvcm0tYWN0aW9uJ10sICdleGFtcGxlLm9yZycpXG4gICAqXG4gICAqIEBtZXRob2QgYWRkVXNlcnNUb1JvbGVzXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSB1c2VycyBVc2VyIElEKHMpIG9yIG9iamVjdChzKSB3aXRoIGFuIGBfaWRgIGZpZWxkLlxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZShzKSBvZiByb2xlcyB0byBhZGQgdXNlcnMgdG8uIFJvbGVzIGhhdmUgdG8gZXhpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW29wdGlvbnNdIE9wdGlvbnM6XG4gICAqICAgLSBgc2NvcGVgOiBuYW1lIG9mIHRoZSBzY29wZSwgb3IgYG51bGxgIGZvciB0aGUgZ2xvYmFsIHJvbGVcbiAgICogICAtIGBpZkV4aXN0c2A6IGlmIGB0cnVlYCwgZG8gbm90IHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgcm9sZSBkb2VzIG5vdCBleGlzdFxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBpdCBjYW4gYmUgYSBzY29wZSBuYW1lIHN0cmluZy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgYWRkVXNlcnNUb1JvbGVzOiBmdW5jdGlvbiAodXNlcnMsIHJvbGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIGlkXG5cbiAgICBpZiAoIXVzZXJzKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXFwndXNlcnNcXCcgcGFyYW0uJylcbiAgICBpZiAoIXJvbGVzKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXFwncm9sZXNcXCcgcGFyYW0uJylcblxuICAgIG9wdGlvbnMgPSBSb2xlcy5fbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgLy8gZW5zdXJlIGFycmF5c1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh1c2VycykpIHVzZXJzID0gW3VzZXJzXVxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2xlcykpIHJvbGVzID0gW3JvbGVzXVxuXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG9wdGlvbnMuc2NvcGUpXG5cbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBpZkV4aXN0czogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdXNlcnMuZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZCA9IHVzZXIuX2lkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCA9IHVzZXJcbiAgICAgIH1cblxuICAgICAgcm9sZXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICBSb2xlcy5fYWRkVXNlclRvUm9sZShpZCwgcm9sZSwgb3B0aW9ucylcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHVzZXJzJyByb2xlcy5cbiAgICpcbiAgICogUmVwbGFjZXMgYWxsIGV4aXN0aW5nIHJvbGVzIHdpdGggYSBuZXcgc2V0IG9mIHJvbGVzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgICAgUm9sZXMuc2V0VXNlclJvbGVzKHVzZXJJZCwgJ2FkbWluJylcbiAgICogICAgIFJvbGVzLnNldFVzZXJSb2xlcyh1c2VySWQsIFsndmlldy1zZWNyZXRzJ10sICdleGFtcGxlLmNvbScpXG4gICAqICAgICBSb2xlcy5zZXRVc2VyUm9sZXMoW3VzZXIxLCB1c2VyMl0sIFsndXNlcicsJ2VkaXRvciddKVxuICAgKiAgICAgUm9sZXMuc2V0VXNlclJvbGVzKFt1c2VyMSwgdXNlcjJdLCBbJ2dsb3Jpb3VzLWFkbWluJywgJ3BlcmZvcm0tYWN0aW9uJ10sICdleGFtcGxlLm9yZycpXG4gICAqXG4gICAqIEBtZXRob2Qgc2V0VXNlclJvbGVzXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSB1c2VycyBVc2VyIElEKHMpIG9yIG9iamVjdChzKSB3aXRoIGFuIGBfaWRgIGZpZWxkLlxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZShzKSBvZiByb2xlcyB0byBhZGQgdXNlcnMgdG8uIFJvbGVzIGhhdmUgdG8gZXhpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW29wdGlvbnNdIE9wdGlvbnM6XG4gICAqICAgLSBgc2NvcGVgOiBuYW1lIG9mIHRoZSBzY29wZSwgb3IgYG51bGxgIGZvciB0aGUgZ2xvYmFsIHJvbGVcbiAgICogICAtIGBhbnlTY29wZWA6IGlmIGB0cnVlYCwgcmVtb3ZlIGFsbCByb2xlcyB0aGUgdXNlciBoYXMsIG9mIGFueSBzY29wZSwgaWYgYGZhbHNlYCwgb25seSB0aGUgb25lIGluIHRoZSBzYW1lIHNjb3BlXG4gICAqICAgLSBgaWZFeGlzdHNgOiBpZiBgdHJ1ZWAsIGRvIG5vdCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIHJvbGUgZG9lcyBub3QgZXhpc3RcbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHNldFVzZXJSb2xlczogZnVuY3Rpb24gKHVzZXJzLCByb2xlcywgb3B0aW9ucykge1xuICAgIHZhciBpZFxuXG4gICAgaWYgKCF1c2VycykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3VzZXJzXFwnIHBhcmFtLicpXG4gICAgaWYgKCFyb2xlcykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3JvbGVzXFwnIHBhcmFtLicpXG5cbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIGVuc3VyZSBhcnJheXNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXNlcnMpKSB1c2VycyA9IFt1c2Vyc11cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9sZXMpKSByb2xlcyA9IFtyb2xlc11cblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgaWZFeGlzdHM6IGZhbHNlLFxuICAgICAgYW55U2NvcGU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWQgPSB1c2VyLl9pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSB1c2VyXG4gICAgICB9XG4gICAgICAvLyB3ZSBmaXJzdCBjbGVhciBhbGwgcm9sZXMgZm9yIHRoZSB1c2VyXG4gICAgICBjb25zdCBzZWxlY3RvciA9IHsgJ3VzZXIuX2lkJzogaWQgfVxuICAgICAgaWYgKCFvcHRpb25zLmFueVNjb3BlKSB7XG4gICAgICAgIHNlbGVjdG9yLnNjb3BlID0gb3B0aW9ucy5zY29wZVxuICAgICAgfVxuXG4gICAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQucmVtb3ZlKHNlbGVjdG9yKVxuXG4gICAgICAvLyBhbmQgdGhlbiBhZGQgYWxsXG4gICAgICByb2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgIFJvbGVzLl9hZGRVc2VyVG9Sb2xlKGlkLCByb2xlLCBvcHRpb25zKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgb25lIHVzZXIgdG8gb25lIHJvbGUuXG4gICAqXG4gICAqIEBtZXRob2QgX2FkZFVzZXJUb1JvbGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgdXNlciBJRC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIE5hbWUgb2YgdGhlIHJvbGUgdG8gYWRkIHRoZSB1c2VyIHRvLiBUaGUgcm9sZSBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUsIG9yIGBudWxsYCBmb3IgdGhlIGdsb2JhbCByb2xlXG4gICAqICAgLSBgaWZFeGlzdHNgOiBpZiBgdHJ1ZWAsIGRvIG5vdCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIHJvbGUgZG9lcyBub3QgZXhpc3RcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2FkZFVzZXJUb1JvbGU6IGZ1bmN0aW9uICh1c2VySWQsIHJvbGVOYW1lLCBvcHRpb25zKSB7XG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocm9sZU5hbWUpXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG9wdGlvbnMuc2NvcGUpXG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm9sZSA9IE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByb2xlTmFtZSB9LCB7IGZpZWxkczogeyBjaGlsZHJlbjogMSB9IH0pXG5cbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIGlmIChvcHRpb25zLmlmRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb2xlIFxcJycgKyByb2xlTmFtZSArICdcXCcgZG9lcyBub3QgZXhpc3QuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1pZ2h0IGNyZWF0ZSBkdXBsaWNhdGVzLCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYSB1bmlxdWUgaW5kZXgsIGJ1dCB0aGF0J3MgYWxsIHJpZ2h0LiBJbiBjYXNlIHRoZXJlIGFyZSB0d28sIHdpdGhkcmF3aW5nIHRoZSByb2xlIHdpbGwgZWZmZWN0aXZlbHkga2lsbCB0aGVtIGJvdGguXG4gICAgY29uc3QgcmVzID0gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwc2VydCh7XG4gICAgICAndXNlci5faWQnOiB1c2VySWQsXG4gICAgICAncm9sZS5faWQnOiByb2xlTmFtZSxcbiAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlXG4gICAgfSwge1xuICAgICAgJHNldE9uSW5zZXJ0OiB7XG4gICAgICAgIHVzZXI6IHsgX2lkOiB1c2VySWQgfSxcbiAgICAgICAgcm9sZTogeyBfaWQ6IHJvbGVOYW1lIH0sXG4gICAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChyZXMuaW5zZXJ0ZWRJZCkge1xuICAgICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwZGF0ZSh7IF9pZDogcmVzLmluc2VydGVkSWQgfSwge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgaW5oZXJpdGVkUm9sZXM6IFtyb2xlTmFtZSwgLi4uUm9sZXMuX2dldEluaGVyaXRlZFJvbGVOYW1lcyhyb2xlKV0ubWFwKHIgPT4gKHsgX2lkOiByIH0pKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiByb2xlIG5hbWVzIHRoZSBnaXZlbiByb2xlIG5hbWUgaXMgYSBjaGlsZCBvZi5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIFJvbGVzLl9nZXRQYXJlbnRSb2xlTmFtZXMoeyBfaWQ6ICdhZG1pbicsIGNoaWxkcmVuOyBbXSB9KVxuICAgKlxuICAgKiBAbWV0aG9kIF9nZXRQYXJlbnRSb2xlTmFtZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvbGUgVGhlIHJvbGUgb2JqZWN0XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9nZXRQYXJlbnRSb2xlTmFtZXM6IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgdmFyIHBhcmVudFJvbGVzXG5cbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHBhcmVudFJvbGVzID0gbmV3IFNldChbcm9sZS5faWRdKVxuXG4gICAgcGFyZW50Um9sZXMuZm9yRWFjaChyb2xlTmFtZSA9PiB7XG4gICAgICBNZXRlb3Iucm9sZXMuZmluZCh7ICdjaGlsZHJlbi5faWQnOiByb2xlTmFtZSB9KS5mZXRjaCgpLmZvckVhY2gocGFyZW50Um9sZSA9PiB7XG4gICAgICAgIHBhcmVudFJvbGVzLmFkZChwYXJlbnRSb2xlLl9pZClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHBhcmVudFJvbGVzLmRlbGV0ZShyb2xlLl9pZClcblxuICAgIHJldHVybiBbLi4ucGFyZW50Um9sZXNdXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygcm9sZSBuYW1lcyB0aGUgZ2l2ZW4gcm9sZSBuYW1lIGlzIGEgcGFyZW50IG9mLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgICAgUm9sZXMuX2dldEluaGVyaXRlZFJvbGVOYW1lcyh7IF9pZDogJ2FkbWluJywgY2hpbGRyZW47IFtdIH0pXG4gICAqXG4gICAqIEBtZXRob2QgX2dldEluaGVyaXRlZFJvbGVOYW1lc1xuICAgKiBAcGFyYW0ge29iamVjdH0gcm9sZSBUaGUgcm9sZSBvYmplY3RcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2dldEluaGVyaXRlZFJvbGVOYW1lczogZnVuY3Rpb24gKHJvbGUpIHtcbiAgICBjb25zdCBpbmhlcml0ZWRSb2xlcyA9IG5ldyBTZXQoKVxuICAgIGNvbnN0IG5lc3RlZFJvbGVzID0gbmV3IFNldChbcm9sZV0pXG5cbiAgICBuZXN0ZWRSb2xlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgY29uc3Qgcm9sZXMgPSBNZXRlb3Iucm9sZXMuZmluZCh7IF9pZDogeyAkaW46IHIuY2hpbGRyZW4ubWFwKHIgPT4gci5faWQpIH0gfSwgeyBmaWVsZHM6IHsgY2hpbGRyZW46IDEgfSB9KS5mZXRjaCgpXG5cbiAgICAgIHJvbGVzLmZvckVhY2gocjIgPT4ge1xuICAgICAgICBpbmhlcml0ZWRSb2xlcy5hZGQocjIuX2lkKVxuICAgICAgICBuZXN0ZWRSb2xlcy5hZGQocjIpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gWy4uLmluaGVyaXRlZFJvbGVzXVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdXNlcnMgZnJvbSBhc3NpZ25lZCByb2xlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgJ2FkbWluJylcbiAgICogICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKFt1c2VySWQsIHVzZXIyXSwgWydlZGl0b3InXSlcbiAgICogICAgIFJvbGVzLnJlbW92ZVVzZXJzRnJvbVJvbGVzKHVzZXJJZCwgWyd1c2VyJ10sICdncm91cDEnKVxuICAgKlxuICAgKiBAbWV0aG9kIHJlbW92ZVVzZXJzRnJvbVJvbGVzXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSB1c2VycyBVc2VyIElEKHMpIG9yIG9iamVjdChzKSB3aXRoIGFuIGBfaWRgIGZpZWxkLlxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZShzKSBvZiByb2xlcyB0byByZW1vdmUgdXNlcnMgZnJvbS4gUm9sZXMgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9uc10gT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlLCBvciBgbnVsbGAgZm9yIHRoZSBnbG9iYWwgcm9sZVxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgb3B0aW9uIGlzIGlnbm9yZWQpXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIGl0IGNhbiBiZSBhIHNjb3BlIG5hbWUgc3RyaW5nLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICByZW1vdmVVc2Vyc0Zyb21Sb2xlczogZnVuY3Rpb24gKHVzZXJzLCByb2xlcywgb3B0aW9ucykge1xuICAgIGlmICghdXNlcnMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcXCd1c2Vyc1xcJyBwYXJhbS4nKVxuICAgIGlmICghcm9sZXMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcXCdyb2xlc1xcJyBwYXJhbS4nKVxuXG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICAvLyBlbnN1cmUgYXJyYXlzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVzZXJzKSkgdXNlcnMgPSBbdXNlcnNdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvbGVzKSkgcm9sZXMgPSBbcm9sZXNdXG5cbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICghdXNlcikgcmV0dXJuXG5cbiAgICAgIHJvbGVzLmZvckVhY2goZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgbGV0IGlkXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZCA9IHVzZXIuX2lkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSB1c2VyXG4gICAgICAgIH1cblxuICAgICAgICBSb2xlcy5fcmVtb3ZlVXNlckZyb21Sb2xlKGlkLCByb2xlLCBvcHRpb25zKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgb25lIHVzZXIgZnJvbSBvbmUgcm9sZS5cbiAgICpcbiAgICogQG1ldGhvZCBfcmVtb3ZlVXNlckZyb21Sb2xlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VySWQgVGhlIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2xlTmFtZSBOYW1lIG9mIHRoZSByb2xlIHRvIGFkZCB0aGUgdXNlciB0by4gVGhlIHJvbGUgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlLCBvciBgbnVsbGAgZm9yIHRoZSBnbG9iYWwgcm9sZVxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgb3B0aW9uIGlzIGlnbm9yZWQpXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9yZW1vdmVVc2VyRnJvbVJvbGU6IGZ1bmN0aW9uICh1c2VySWQsIHJvbGVOYW1lLCBvcHRpb25zKSB7XG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocm9sZU5hbWUpXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG9wdGlvbnMuc2NvcGUpXG5cbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3RvciA9IHtcbiAgICAgICd1c2VyLl9pZCc6IHVzZXJJZCxcbiAgICAgICdyb2xlLl9pZCc6IHJvbGVOYW1lXG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmFueVNjb3BlKSB7XG4gICAgICBzZWxlY3Rvci5zY29wZSA9IG9wdGlvbnMuc2NvcGVcbiAgICB9XG5cbiAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQucmVtb3ZlKHNlbGVjdG9yKVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB1c2VyIGhhcyBzcGVjaWZpZWQgcm9sZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgICAvLyBnbG9iYWwgcm9sZXNcbiAgICogICAgIFJvbGVzLnVzZXJJc0luUm9sZSh1c2VyLCAnYWRtaW4nKVxuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXIsIFsnYWRtaW4nLCdlZGl0b3InXSlcbiAgICogICAgIFJvbGVzLnVzZXJJc0luUm9sZSh1c2VySWQsICdhZG1pbicpXG4gICAqICAgICBSb2xlcy51c2VySXNJblJvbGUodXNlcklkLCBbJ2FkbWluJywnZWRpdG9yJ10pXG4gICAqXG4gICAqICAgICAvLyBzY29wZSByb2xlcyAoZ2xvYmFsIHJvbGVzIGFyZSBzdGlsbCBjaGVja2VkKVxuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXIsICdhZG1pbicsICdncm91cDEnKVxuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXJJZCwgWydhZG1pbicsJ2VkaXRvciddLCAnZ3JvdXAxJylcbiAgICogICAgIFJvbGVzLnVzZXJJc0luUm9sZSh1c2VySWQsIFsnYWRtaW4nLCdlZGl0b3InXSwge3Njb3BlOiAnZ3JvdXAxJ30pXG4gICAqXG4gICAqIEBtZXRob2QgdXNlcklzSW5Sb2xlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXNlciBVc2VyIElEIG9yIGFuIGFjdHVhbCB1c2VyIG9iamVjdC5cbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzIE5hbWUgb2Ygcm9sZSBvciBhbiBhcnJheSBvZiByb2xlcyB0byBjaGVjayBhZ2FpbnN0LiBJZiBhcnJheSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgcmV0dXJuIGB0cnVlYCBpZiB1c2VyIGlzIGluIF9hbnlfIHJvbGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlcyBkbyBub3QgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9uc10gT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlOyBpZiBzdXBwbGllZCwgbGltaXRzIGNoZWNrIHRvIGp1c3QgdGhhdCBzY29wZVxuICAgKiAgICAgdGhlIHVzZXIncyBnbG9iYWwgcm9sZXMgd2lsbCBhbHdheXMgYmUgY2hlY2tlZCB3aGV0aGVyIHNjb3BlIGlzIHNwZWNpZmllZCBvciBub3RcbiAgICogICAtIGBhbnlTY29wZWA6IGlmIHNldCwgcm9sZSBjYW4gYmUgaW4gYW55IHNjb3BlIChgc2NvcGVgIG9wdGlvbiBpcyBpZ25vcmVkKVxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBpdCBjYW4gYmUgYSBzY29wZSBuYW1lIHN0cmluZy5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHVzZXIgaXMgaW4gX2FueV8gb2YgdGhlIHRhcmdldCByb2xlc1xuICAgKiBAc3RhdGljXG4gICAqL1xuICB1c2VySXNJblJvbGU6IGZ1bmN0aW9uICh1c2VyLCByb2xlcywgb3B0aW9ucykge1xuICAgIHZhciBpZFxuICAgIHZhciBzZWxlY3RvclxuXG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICAvLyBlbnN1cmUgYXJyYXkgdG8gc2ltcGxpZnkgY29kZVxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2xlcykpIHJvbGVzID0gW3JvbGVzXVxuXG4gICAgcm9sZXMgPSByb2xlcy5maWx0ZXIociA9PiByICE9IG51bGwpXG5cbiAgICBpZiAoIXJvbGVzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFueVNjb3BlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBpZiAodXNlciAmJiB0eXBlb2YgdXNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlkID0gdXNlci5faWRcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB1c2VyXG4gICAgfVxuXG4gICAgaWYgKCFpZCkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZVxuXG4gICAgc2VsZWN0b3IgPSB7XG4gICAgICAndXNlci5faWQnOiBpZFxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5hbnlTY29wZSkge1xuICAgICAgc2VsZWN0b3Iuc2NvcGUgPSB7ICRpbjogW29wdGlvbnMuc2NvcGUsIG51bGxdIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcm9sZXMuc29tZSgocm9sZU5hbWUpID0+IHtcbiAgICAgIHNlbGVjdG9yWydpbmhlcml0ZWRSb2xlcy5faWQnXSA9IHJvbGVOYW1lXG5cbiAgICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZChzZWxlY3RvciwgeyBsaW1pdDogMSB9KS5jb3VudCgpID4gMFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHVzZXIncyByb2xlcy5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRSb2xlc0ZvclVzZXJcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1c2VyIFVzZXIgSUQgb3IgYW4gYWN0dWFsIHVzZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiBzY29wZSB0byBwcm92aWRlIHJvbGVzIGZvcjsgaWYgbm90IHNwZWNpZmllZCwgZ2xvYmFsIHJvbGVzIGFyZSByZXR1cm5lZFxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgYW5kIGBvbmx5QXNzaWduZWRgIG9wdGlvbnMgYXJlIGlnbm9yZWQpXG4gICAqICAgLSBgb25seVNjb3BlZGA6IGlmIHNldCwgb25seSByb2xlcyBpbiB0aGUgc3BlY2lmaWVkIHNjb3BlIGFyZSByZXR1cm5lZFxuICAgKiAgIC0gYG9ubHlBc3NpZ25lZGA6IHJldHVybiBvbmx5IGFzc2lnbmVkIHJvbGVzIGFuZCBub3QgYXV0b21hdGljYWxseSBpbmZlcnJlZCAobGlrZSBzdWJyb2xlcylcbiAgICogICAtIGBmdWxsT2JqZWN0c2A6IHJldHVybiBmdWxsIHJvbGVzIG9iamVjdHMgKGB0cnVlYCkgb3IganVzdCBuYW1lcyAoYGZhbHNlYCkgKGBvbmx5QXNzaWduZWRgIG9wdGlvbiBpcyBpZ25vcmVkKSAoZGVmYXVsdCBgZmFsc2VgKVxuICAgKiAgICAgSWYgeW91IGhhdmUgYSB1c2UtY2FzZSBmb3IgdGhpcyBvcHRpb24sIHBsZWFzZSBmaWxlIGEgZmVhdHVyZS1yZXF1ZXN0LiBZb3Ugc2hvdWxkbid0IG5lZWQgdG8gdXNlIGl0IGFzIGl0J3NcbiAgICogICAgIHJlc3VsdCBzdHJvbmdseSBkZXBlbmRhbnQgb24gdGhlIGludGVybmFsIGRhdGEgc3RydWN0dXJlIG9mIHRoaXMgcGx1Z2luLlxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBpdCBjYW4gYmUgYSBzY29wZSBuYW1lIHN0cmluZy5cbiAgICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHVzZXIncyByb2xlcywgdW5zb3J0ZWQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIGdldFJvbGVzRm9yVXNlcjogZnVuY3Rpb24gKHVzZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgaWRcbiAgICB2YXIgc2VsZWN0b3JcbiAgICB2YXIgZmlsdGVyXG4gICAgdmFyIHJvbGVzXG5cbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZnVsbE9iamVjdHM6IGZhbHNlLFxuICAgICAgb25seUFzc2lnbmVkOiBmYWxzZSxcbiAgICAgIGFueVNjb3BlOiBmYWxzZSxcbiAgICAgIG9ubHlTY29wZWQ6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGlmICh1c2VyICYmIHR5cGVvZiB1c2VyID09PSAnb2JqZWN0Jykge1xuICAgICAgaWQgPSB1c2VyLl9pZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IHVzZXJcbiAgICB9XG5cbiAgICBpZiAoIWlkKSByZXR1cm4gW11cblxuICAgIHNlbGVjdG9yID0ge1xuICAgICAgJ3VzZXIuX2lkJzogaWRcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSB7XG4gICAgICBmaWVsZHM6IHsgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IDEgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5hbnlTY29wZSkge1xuICAgICAgc2VsZWN0b3Iuc2NvcGUgPSB7ICRpbjogW29wdGlvbnMuc2NvcGVdIH1cblxuICAgICAgaWYgKCFvcHRpb25zLm9ubHlTY29wZWQpIHtcbiAgICAgICAgc2VsZWN0b3Iuc2NvcGUuJGluLnB1c2gobnVsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5vbmx5QXNzaWduZWQpIHtcbiAgICAgIGRlbGV0ZSBmaWx0ZXIuZmllbGRzWydpbmhlcml0ZWRSb2xlcy5faWQnXVxuICAgICAgZmlsdGVyLmZpZWxkc1sncm9sZS5faWQnXSA9IDFcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mdWxsT2JqZWN0cykge1xuICAgICAgZGVsZXRlIGZpbHRlci5maWVsZHNcbiAgICB9XG5cbiAgICByb2xlcyA9IE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHNlbGVjdG9yLCBmaWx0ZXIpLmZldGNoKClcblxuICAgIGlmIChvcHRpb25zLmZ1bGxPYmplY3RzKSB7XG4gICAgICByZXR1cm4gcm9sZXNcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLm5ldyBTZXQocm9sZXMucmVkdWNlKChyZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgIGlmIChjdXJyZW50LmluaGVyaXRlZFJvbGVzKSB7XG4gICAgICAgIHJldHVybiByZXYuY29uY2F0KGN1cnJlbnQuaW5oZXJpdGVkUm9sZXMubWFwKHIgPT4gci5faWQpKVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50LnJvbGUpIHtcbiAgICAgICAgcmV2LnB1c2goY3VycmVudC5yb2xlLl9pZClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXZcbiAgICB9LCBbXSkpXVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBjdXJzb3Igb2YgYWxsIGV4aXN0aW5nIHJvbGVzLlxuICAgKlxuICAgKiBAbWV0aG9kIGdldEFsbFJvbGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcXVlcnlPcHRpb25zXSBPcHRpb25zIHdoaWNoIGFyZSBwYXNzZWQgZGlyZWN0bHlcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdG8gYE1ldGVvci5yb2xlcy5maW5kKHF1ZXJ5LCBvcHRpb25zKWAuXG4gICAqIEByZXR1cm4ge0N1cnNvcn0gQ3Vyc29yIG9mIGV4aXN0aW5nIHJvbGVzLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBnZXRBbGxSb2xlczogZnVuY3Rpb24gKHF1ZXJ5T3B0aW9ucykge1xuICAgIHF1ZXJ5T3B0aW9ucyA9IHF1ZXJ5T3B0aW9ucyB8fCB7IHNvcnQ6IHsgX2lkOiAxIH0gfVxuXG4gICAgcmV0dXJuIE1ldGVvci5yb2xlcy5maW5kKHt9LCBxdWVyeU9wdGlvbnMpXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGFsbCB1c2VycyB3aG8gYXJlIGluIHRhcmdldCByb2xlLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiBAbWV0aG9kIGdldFVzZXJzSW5Sb2xlXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSByb2xlcyBOYW1lIG9mIHJvbGUgb3IgYW4gYXJyYXkgb2Ygcm9sZXMuIElmIGFycmF5LCB1c2Vyc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQgd2lsbCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGUgcm9sZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmllZCBidXQgbmVlZCBub3QgaGF2ZSBfYWxsXyByb2xlcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzIGRvIG5vdCBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUgdG8gcmVzdHJpY3Qgcm9sZXMgdG87IHVzZXIncyBnbG9iYWxcbiAgICogICAgIHJvbGVzIHdpbGwgYWxzbyBiZSBjaGVja2VkXG4gICAqICAgLSBgYW55U2NvcGVgOiBpZiBzZXQsIHJvbGUgY2FuIGJlIGluIGFueSBzY29wZSAoYHNjb3BlYCBvcHRpb24gaXMgaWdub3JlZClcbiAgICogICAtIGBvbmx5U2NvcGVkYDogaWYgc2V0LCBvbmx5IHJvbGVzIGluIHRoZSBzcGVjaWZpZWQgc2NvcGUgYXJlIHJldHVybmVkXG4gICAqICAgLSBgcXVlcnlPcHRpb25zYDogb3B0aW9ucyB3aGljaCBhcmUgcGFzc2VkIGRpcmVjdGx5XG4gICAqICAgICB0aHJvdWdoIHRvIGBNZXRlb3IudXNlcnMuZmluZChxdWVyeSwgb3B0aW9ucylgXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIGl0IGNhbiBiZSBhIHNjb3BlIG5hbWUgc3RyaW5nLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3F1ZXJ5T3B0aW9uc10gT3B0aW9ucyB3aGljaCBhcmUgcGFzc2VkIGRpcmVjdGx5XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRvIGBNZXRlb3IudXNlcnMuZmluZChxdWVyeSwgb3B0aW9ucylgXG4gICAqIEByZXR1cm4ge0N1cnNvcn0gQ3Vyc29yIG9mIHVzZXJzIGluIHJvbGVzLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBnZXRVc2Vyc0luUm9sZTogZnVuY3Rpb24gKHJvbGVzLCBvcHRpb25zLCBxdWVyeU9wdGlvbnMpIHtcbiAgICB2YXIgaWRzXG5cbiAgICBpZHMgPSBSb2xlcy5nZXRVc2VyQXNzaWdubWVudHNGb3JSb2xlKHJvbGVzLCBvcHRpb25zKS5mZXRjaCgpLm1hcChhID0+IGEudXNlci5faWQpXG5cbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoeyBfaWQ6IHsgJGluOiBpZHMgfSB9LCAoKG9wdGlvbnMgJiYgb3B0aW9ucy5xdWVyeU9wdGlvbnMpIHx8IHF1ZXJ5T3B0aW9ucykgfHwge30pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGFsbCBhc3NpZ25tZW50cyBvZiBhIHVzZXIgd2hpY2ggYXJlIGZvciB0aGUgdGFyZ2V0IHJvbGUuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqIEBtZXRob2QgZ2V0VXNlckFzc2lnbm1lbnRzRm9yUm9sZVxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZSBvZiByb2xlIG9yIGFuIGFycmF5IG9mIHJvbGVzLiBJZiBhcnJheSwgdXNlcnNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkIHdpbGwgaGF2ZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJvbGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpZWQgYnV0IG5lZWQgbm90IGhhdmUgX2FsbF8gcm9sZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlcyBkbyBub3QgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9uc10gT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlIHRvIHJlc3RyaWN0IHJvbGVzIHRvOyB1c2VyJ3MgZ2xvYmFsXG4gICAqICAgICByb2xlcyB3aWxsIGFsc28gYmUgY2hlY2tlZFxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgb3B0aW9uIGlzIGlnbm9yZWQpXG4gICAqICAgLSBgcXVlcnlPcHRpb25zYDogb3B0aW9ucyB3aGljaCBhcmUgcGFzc2VkIGRpcmVjdGx5XG4gICAqICAgICB0aHJvdWdoIHRvIGBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZChxdWVyeSwgb3B0aW9ucylgXG5cbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEByZXR1cm4ge0N1cnNvcn0gQ3Vyc29yIG9mIHVzZXIgYXNzaWdubWVudHMgZm9yIHJvbGVzLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBnZXRVc2VyQXNzaWdubWVudHNGb3JSb2xlOiBmdW5jdGlvbiAocm9sZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFueVNjb3BlOiBmYWxzZSxcbiAgICAgIHF1ZXJ5T3B0aW9uczoge31cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgcmV0dXJuIFJvbGVzLl9nZXRVc2Vyc0luUm9sZUN1cnNvcihyb2xlcywgb3B0aW9ucywgb3B0aW9ucy5xdWVyeU9wdGlvbnMpXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2dldFVzZXJzSW5Sb2xlQ3Vyc29yXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSByb2xlcyBOYW1lIG9mIHJvbGUgb3IgYW4gYXJyYXkgb2Ygcm9sZXMuIElmIGFycmF5LCBpZHMgb2YgdXNlcnMgYXJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZCB3aGljaCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGUgcm9sZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbmVkIGJ1dCBuZWVkIG5vdCBoYXZlIF9hbGxfIHJvbGVzLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXMgZG8gbm90IGhhdmUgdG8gZXhpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW29wdGlvbnNdIE9wdGlvbnM6XG4gICAqICAgLSBgc2NvcGVgOiBuYW1lIG9mIHRoZSBzY29wZSB0byByZXN0cmljdCByb2xlcyB0bzsgdXNlcidzIGdsb2JhbFxuICAgKiAgICAgcm9sZXMgd2lsbCBhbHNvIGJlIGNoZWNrZWRcbiAgICogICAtIGBhbnlTY29wZWA6IGlmIHNldCwgcm9sZSBjYW4gYmUgaW4gYW55IHNjb3BlIChgc2NvcGVgIG9wdGlvbiBpcyBpZ25vcmVkKVxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBpdCBjYW4gYmUgYSBzY29wZSBuYW1lIHN0cmluZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtmaWx0ZXJdIE9wdGlvbnMgd2hpY2ggYXJlIHBhc3NlZCBkaXJlY3RseVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3VnaCB0byBgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQocXVlcnksIG9wdGlvbnMpYFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnNvciB0byB0aGUgYXNzaWdubWVudCBkb2N1bWVudHNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2dldFVzZXJzSW5Sb2xlQ3Vyc29yOiBmdW5jdGlvbiAocm9sZXMsIG9wdGlvbnMsIGZpbHRlcikge1xuICAgIHZhciBzZWxlY3RvclxuXG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbnlTY29wZTogZmFsc2UsXG4gICAgICBvbmx5U2NvcGVkOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICAvLyBlbnN1cmUgYXJyYXkgdG8gc2ltcGxpZnkgY29kZVxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2xlcykpIHJvbGVzID0gW3JvbGVzXVxuXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG9wdGlvbnMuc2NvcGUpXG5cbiAgICBmaWx0ZXIgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGZpZWxkczogeyAndXNlci5faWQnOiAxIH1cbiAgICB9LCBmaWx0ZXIpXG5cbiAgICBzZWxlY3RvciA9IHtcbiAgICAgICdpbmhlcml0ZWRSb2xlcy5faWQnOiB7ICRpbjogcm9sZXMgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5hbnlTY29wZSkge1xuICAgICAgc2VsZWN0b3Iuc2NvcGUgPSB7ICRpbjogW29wdGlvbnMuc2NvcGVdIH1cblxuICAgICAgaWYgKCFvcHRpb25zLm9ubHlTY29wZWQpIHtcbiAgICAgICAgc2VsZWN0b3Iuc2NvcGUuJGluLnB1c2gobnVsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoc2VsZWN0b3IsIGZpbHRlcilcbiAgfSxcblxuICAvKipcbiAgICogRGVwcmVjYXRlZC4gVXNlIGBnZXRTY29wZXNGb3JVc2VyYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAbWV0aG9kIGdldEdyb3Vwc0ZvclVzZXJcbiAgICogQHN0YXRpY1xuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0R3JvdXBzRm9yVXNlcjogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAoIWdldEdyb3Vwc0ZvclVzZXJEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgIGdldEdyb3Vwc0ZvclVzZXJEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlXG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybignZ2V0R3JvdXBzRm9yVXNlciBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgZ2V0U2NvcGVzRm9yVXNlciBpbnN0ZWFkLicpXG4gICAgfVxuXG4gICAgcmV0dXJuIFJvbGVzLmdldFNjb3Blc0ZvclVzZXIoLi4uYXJncylcbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgdXNlcnMgc2NvcGVzLCBpZiBhbnkuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0U2NvcGVzRm9yVXNlclxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVzZXIgVXNlciBJRCBvciBhbiBhY3R1YWwgdXNlciBvYmplY3QuXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbcm9sZXNdIE5hbWUgb2Ygcm9sZXMgdG8gcmVzdHJpY3Qgc2NvcGVzIHRvLlxuICAgKlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgdXNlcidzIHNjb3BlcywgdW5zb3J0ZWQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIGdldFNjb3Blc0ZvclVzZXI6IGZ1bmN0aW9uICh1c2VyLCByb2xlcykge1xuICAgIHZhciBzY29wZXNcbiAgICB2YXIgaWRcblxuICAgIGlmIChyb2xlcyAmJiAhQXJyYXkuaXNBcnJheShyb2xlcykpIHJvbGVzID0gW3JvbGVzXVxuXG4gICAgaWYgKHVzZXIgJiYgdHlwZW9mIHVzZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZCA9IHVzZXIuX2lkXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gdXNlclxuICAgIH1cblxuICAgIGlmICghaWQpIHJldHVybiBbXVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICAndXNlci5faWQnOiBpZCxcbiAgICAgIHNjb3BlOiB7ICRuZTogbnVsbCB9XG4gICAgfVxuXG4gICAgaWYgKHJvbGVzKSB7XG4gICAgICBzZWxlY3RvclsnaW5oZXJpdGVkUm9sZXMuX2lkJ10gPSB7ICRpbjogcm9sZXMgfVxuICAgIH1cblxuICAgIHNjb3BlcyA9IE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHNlbGVjdG9yLCB7IGZpZWxkczogeyBzY29wZTogMSB9IH0pLmZldGNoKCkubWFwKG9iaSA9PiBvYmkuc2NvcGUpXG5cbiAgICByZXR1cm4gWy4uLm5ldyBTZXQoc2NvcGVzKV1cbiAgfSxcblxuICAvKipcbiAgICogUmVuYW1lIGEgc2NvcGUuXG4gICAqXG4gICAqIFJvbGVzIGFzc2lnbmVkIHdpdGggYSBnaXZlbiBzY29wZSBhcmUgY2hhbmdlZCB0byBiZSB1bmRlciB0aGUgbmV3IHNjb3BlLlxuICAgKlxuICAgKiBAbWV0aG9kIHJlbmFtZVNjb3BlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvbGROYW1lIE9sZCBuYW1lIG9mIGEgc2NvcGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdOYW1lIE5ldyBuYW1lIG9mIGEgc2NvcGUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHJlbmFtZVNjb3BlOiBmdW5jdGlvbiAob2xkTmFtZSwgbmV3TmFtZSkge1xuICAgIHZhciBjb3VudFxuXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG9sZE5hbWUpXG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG5ld05hbWUpXG5cbiAgICBpZiAob2xkTmFtZSA9PT0gbmV3TmFtZSkgcmV0dXJuXG5cbiAgICBkbyB7XG4gICAgICBjb3VudCA9IE1ldGVvci5yb2xlQXNzaWdubWVudC51cGRhdGUoe1xuICAgICAgICBzY29wZTogb2xkTmFtZVxuICAgICAgfSwge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgc2NvcGU6IG5ld05hbWVcbiAgICAgICAgfVxuICAgICAgfSwgeyBtdWx0aTogdHJ1ZSB9KVxuICAgIH0gd2hpbGUgKGNvdW50ID4gMClcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGEgc2NvcGUuXG4gICAqXG4gICAqIFJvbGVzIGFzc2lnbmVkIHdpdGggYSBnaXZlbiBzY29wZSBhcmUgcmVtb3ZlZC5cbiAgICpcbiAgICogQG1ldGhvZCByZW1vdmVTY29wZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBhIHNjb3BlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICByZW1vdmVTY29wZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUobmFtZSlcblxuICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC5yZW1vdmUoeyBzY29wZTogbmFtZSB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaHJvdyBhbiBleGNlcHRpb24gaWYgYHJvbGVOYW1lYCBpcyBhbiBpbnZhbGlkIHJvbGUgbmFtZS5cbiAgICpcbiAgICogQG1ldGhvZCBfY2hlY2tSb2xlTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcm9sZU5hbWUgQSByb2xlIG5hbWUgdG8gbWF0Y2ggYWdhaW5zdC5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2NoZWNrUm9sZU5hbWU6IGZ1bmN0aW9uIChyb2xlTmFtZSkge1xuICAgIGlmICghcm9sZU5hbWUgfHwgdHlwZW9mIHJvbGVOYW1lICE9PSAnc3RyaW5nJyB8fCByb2xlTmFtZS50cmltKCkgIT09IHJvbGVOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcm9sZSBuYW1lIFxcJycgKyByb2xlTmFtZSArICdcXCcuJylcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmQgb3V0IGlmIGEgcm9sZSBpcyBhbiBhbmNlc3RvciBvZiBhbm90aGVyIHJvbGUuXG4gICAqXG4gICAqIFdBUk5JTkc6IElmIHlvdSBjaGVjayB0aGlzIG9uIHRoZSBjbGllbnQsIHBsZWFzZSBtYWtlIHN1cmUgYWxsIHJvbGVzIGFyZSBwdWJsaXNoZWQuXG4gICAqXG4gICAqIEBtZXRob2QgaXNQYXJlbnRPZlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50Um9sZU5hbWUgVGhlIHJvbGUgeW91IHdhbnQgdG8gcmVzZWFyY2guXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaGlsZFJvbGVOYW1lIFRoZSByb2xlIHlvdSBleHBlY3QgdG8gYmUgYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHBhcmVudFJvbGVOYW1lLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBpc1BhcmVudE9mOiBmdW5jdGlvbiAocGFyZW50Um9sZU5hbWUsIGNoaWxkUm9sZU5hbWUpIHtcbiAgICBpZiAocGFyZW50Um9sZU5hbWUgPT09IGNoaWxkUm9sZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudFJvbGVOYW1lID09IG51bGwgfHwgY2hpbGRSb2xlTmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShwYXJlbnRSb2xlTmFtZSlcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShjaGlsZFJvbGVOYW1lKVxuXG4gICAgdmFyIHJvbGVzVG9DaGVjayA9IFtwYXJlbnRSb2xlTmFtZV1cbiAgICB3aGlsZSAocm9sZXNUb0NoZWNrLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFyIHJvbGVOYW1lID0gcm9sZXNUb0NoZWNrLnBvcCgpXG5cbiAgICAgIGlmIChyb2xlTmFtZSA9PT0gY2hpbGRSb2xlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB2YXIgcm9sZSA9IE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByb2xlTmFtZSB9KVxuXG4gICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgdGhpcyBpcyBhIHByb2JsZW0gdG8gYWRkcmVzcyBhdCBzb21lIG90aGVyIHRpbWUuXG4gICAgICBpZiAoIXJvbGUpIGNvbnRpbnVlXG5cbiAgICAgIHJvbGVzVG9DaGVjayA9IHJvbGVzVG9DaGVjay5jb25jYXQocm9sZS5jaGlsZHJlbi5tYXAociA9PiByLl9pZCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBvcHRpb25zLlxuICAgKlxuICAgKiBAbWV0aG9kIF9ub3JtYWxpemVPcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gbm9ybWFsaXplLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE5vcm1hbGl6ZWQgb3B0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX25vcm1hbGl6ZU9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogb3B0aW9uc1xuXG4gICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0geyBzY29wZTogb3B0aW9ucyB9XG4gICAgfVxuXG4gICAgb3B0aW9ucy5zY29wZSA9IFJvbGVzLl9ub3JtYWxpemVTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH0sXG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBzY29wZSBuYW1lLlxuICAgKlxuICAgKiBAbWV0aG9kIF9ub3JtYWxpemVTY29wZU5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlTmFtZSBBIHNjb3BlIG5hbWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE5vcm1hbGl6ZWQgc2NvcGUgbmFtZS5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX25vcm1hbGl6ZVNjb3BlTmFtZTogZnVuY3Rpb24gKHNjb3BlTmFtZSkge1xuICAgIC8vIG1hcCB1bmRlZmluZWQgYW5kIG51bGwgdG8gbnVsbFxuICAgIGlmIChzY29wZU5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNjb3BlTmFtZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGhyb3cgYW4gZXhjZXB0aW9uIGlmIGBzY29wZU5hbWVgIGlzIGFuIGludmFsaWQgc2NvcGUgbmFtZS5cbiAgICpcbiAgICogQG1ldGhvZCBfY2hlY2tSb2xlTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGVOYW1lIEEgc2NvcGUgbmFtZSB0byBtYXRjaCBhZ2FpbnN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfY2hlY2tTY29wZU5hbWU6IGZ1bmN0aW9uIChzY29wZU5hbWUpIHtcbiAgICBpZiAoc2NvcGVOYW1lID09PSBudWxsKSByZXR1cm5cblxuICAgIGlmICghc2NvcGVOYW1lIHx8IHR5cGVvZiBzY29wZU5hbWUgIT09ICdzdHJpbmcnIHx8IHNjb3BlTmFtZS50cmltKCkgIT09IHNjb3BlTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNjb3BlIG5hbWUgXFwnJyArIHNjb3BlTmFtZSArICdcXCcuJylcbiAgICB9XG4gIH1cbn0pXG4iLCIvKiBnbG9iYWwgTWV0ZW9yLCBSb2xlcyAqL1xuXG5NZXRlb3Iucm9sZUFzc2lnbm1lbnQuX2Vuc3VyZUluZGV4KHsgJ3VzZXIuX2lkJzogMSwgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IDEsIHNjb3BlOiAxIH0pXG5NZXRlb3Iucm9sZUFzc2lnbm1lbnQuX2Vuc3VyZUluZGV4KHsgJ3VzZXIuX2lkJzogMSwgJ3JvbGUuX2lkJzogMSwgc2NvcGU6IDEgfSlcbk1ldGVvci5yb2xlQXNzaWdubWVudC5fZW5zdXJlSW5kZXgoeyAncm9sZS5faWQnOiAxIH0pXG5NZXRlb3Iucm9sZUFzc2lnbm1lbnQuX2Vuc3VyZUluZGV4KHsgc2NvcGU6IDEsICd1c2VyLl9pZCc6IDEsICdpbmhlcml0ZWRSb2xlcy5faWQnOiAxIH0pIC8vIEFkZGluZyB1c2VySWQgYW5kIHJvbGVJZCBtaWdodCBzcGVlZCB1cCBvdGhlciBxdWVyaWVzIGRlcGVuZGluZyBvbiB0aGUgZmlyc3QgaW5kZXhcbk1ldGVvci5yb2xlQXNzaWdubWVudC5fZW5zdXJlSW5kZXgoeyAnaW5oZXJpdGVkUm9sZXMuX2lkJzogMSB9KVxuXG5NZXRlb3Iucm9sZXMuX2Vuc3VyZUluZGV4KHsgJ2NoaWxkcmVuLl9pZCc6IDEgfSlcblxuLypcbiAqIFB1Ymxpc2ggbG9nZ2VkLWluIHVzZXIncyByb2xlcyBzbyBjbGllbnQtc2lkZSBjaGVja3MgY2FuIHdvcmsuXG4gKlxuICogVXNlIGEgbmFtZWQgcHVibGlzaCBmdW5jdGlvbiBzbyBjbGllbnRzIGNhbiBjaGVjayBgcmVhZHkoKWAgc3RhdGUuXG4gKi9cbk1ldGVvci5wdWJsaXNoKCdfcm9sZXMnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBsb2dnZWRJblVzZXJJZCA9IHRoaXMudXNlcklkXG4gIHZhciBmaWVsZHMgPSB7IHJvbGVzOiAxIH1cblxuICBpZiAoIWxvZ2dlZEluVXNlcklkKSB7XG4gICAgdGhpcy5yZWFkeSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoXG4gICAgeyBfaWQ6IGxvZ2dlZEluVXNlcklkIH0sXG4gICAgeyBmaWVsZHM6IGZpZWxkcyB9XG4gIClcbn0pXG5cbk9iamVjdC5hc3NpZ24oUm9sZXMsIHtcbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzTmV3Um9sZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcm9sZSBgTWV0ZW9yLnJvbGVzYCBkb2N1bWVudC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGByb2xlYCBpcyBpbiB0aGUgbmV3IGZvcm1hdC5cbiAgICogICAgICAgICAgICAgICAgICAgSWYgaXQgaXMgYW1iaWd1b3VzIG9yIGl0IGlzIG5vdCwgcmV0dXJucyBgZmFsc2VgLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9pc05ld1JvbGU6IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgcmV0dXJuICEoJ25hbWUnIGluIHJvbGUpICYmICdjaGlsZHJlbicgaW4gcm9sZVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc09sZFJvbGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvbGUgYE1ldGVvci5yb2xlc2AgZG9jdW1lbnQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBgcm9sZWAgaXMgaW4gdGhlIG9sZCBmb3JtYXQuXG4gICAqICAgICAgICAgICAgICAgICAgIElmIGl0IGlzIGFtYmlndW91cyBvciBpdCBpcyBub3QsIHJldHVybnMgYGZhbHNlYC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfaXNPbGRSb2xlOiBmdW5jdGlvbiAocm9sZSkge1xuICAgIHJldHVybiAnbmFtZScgaW4gcm9sZSAmJiAhKCdjaGlsZHJlbicgaW4gcm9sZSlcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNOZXdGaWVsZFxuICAgKiBAcGFyYW0ge0FycmF5fSByb2xlcyBgTWV0ZW9yLnVzZXJzYCBkb2N1bWVudCBgcm9sZXNgIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHJvbGVzYCBmaWVsZCBpcyBpbiB0aGUgbmV3IGZvcm1hdC5cbiAgICogICAgICAgICAgICAgICAgICAgSWYgaXQgaXMgYW1iaWd1b3VzIG9yIGl0IGlzIG5vdCwgcmV0dXJucyBgZmFsc2VgLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9pc05ld0ZpZWxkOiBmdW5jdGlvbiAocm9sZXMpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyb2xlcykgJiYgKHR5cGVvZiByb2xlc1swXSA9PT0gJ29iamVjdCcpXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzT2xkRmllbGRcbiAgICogQHBhcmFtIHtBcnJheX0gcm9sZXMgYE1ldGVvci51c2Vyc2AgZG9jdW1lbnQgYHJvbGVzYCBmaWVsZC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGByb2xlc2AgZmllbGQgaXMgaW4gdGhlIG9sZCBmb3JtYXQuXG4gICAqICAgICAgICAgICAgICAgICAgIElmIGl0IGlzIGFtYmlndW91cyBvciBpdCBpcyBub3QsIHJldHVybnMgYGZhbHNlYC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfaXNPbGRGaWVsZDogZnVuY3Rpb24gKHJvbGVzKSB7XG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJvbGVzKSAmJiAodHlwZW9mIHJvbGVzWzBdID09PSAnc3RyaW5nJykpIHx8ICgodHlwZW9mIHJvbGVzID09PSAnb2JqZWN0JykgJiYgIUFycmF5LmlzQXJyYXkocm9sZXMpKVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb252ZXJ0VG9OZXdSb2xlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRSb2xlIGBNZXRlb3Iucm9sZXNgIGRvY3VtZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IENvbnZlcnRlZCBgcm9sZWAgdG8gdGhlIG5ldyBmb3JtYXQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2NvbnZlcnRUb05ld1JvbGU6IGZ1bmN0aW9uIChvbGRSb2xlKSB7XG4gICAgaWYgKCEodHlwZW9mIG9sZFJvbGUubmFtZSA9PT0gJ3N0cmluZycpKSB0aHJvdyBuZXcgRXJyb3IoXCJSb2xlIG5hbWUgJ1wiICsgb2xkUm9sZS5uYW1lICsgXCInIGlzIG5vdCBhIHN0cmluZy5cIilcblxuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IG9sZFJvbGUubmFtZSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfY29udmVydFRvT2xkUm9sZVxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Um9sZSBgTWV0ZW9yLnJvbGVzYCBkb2N1bWVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBDb252ZXJ0ZWQgYHJvbGVgIHRvIHRoZSBvbGQgZm9ybWF0LlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9jb252ZXJ0VG9PbGRSb2xlOiBmdW5jdGlvbiAobmV3Um9sZSkge1xuICAgIGlmICghKHR5cGVvZiBuZXdSb2xlLl9pZCA9PT0gJ3N0cmluZycpKSB0aHJvdyBuZXcgRXJyb3IoXCJSb2xlIG5hbWUgJ1wiICsgbmV3Um9sZS5faWQgKyBcIicgaXMgbm90IGEgc3RyaW5nLlwiKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5ld1JvbGUuX2lkXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb252ZXJ0VG9OZXdGaWVsZFxuICAgKiBAcGFyYW0ge0FycmF5fSBvbGRSb2xlcyBgTWV0ZW9yLnVzZXJzYCBkb2N1bWVudCBgcm9sZXNgIGZpZWxkIGluIHRoZSBvbGQgZm9ybWF0LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cyBTaG91bGQgd2UgY29udmVydCB1bmRlcnNjb3JlcyB0byBkb3RzIGluIGdyb3VwIG5hbWVzLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQ29udmVydGVkIGByb2xlc2AgdG8gdGhlIG5ldyBmb3JtYXQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2NvbnZlcnRUb05ld0ZpZWxkOiBmdW5jdGlvbiAob2xkUm9sZXMsIGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cykge1xuICAgIHZhciByb2xlcyA9IFtdXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2xkUm9sZXMpKSB7XG4gICAgICBvbGRSb2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlLCBpbmRleCkge1xuICAgICAgICBpZiAoISh0eXBlb2Ygcm9sZSA9PT0gJ3N0cmluZycpKSB0aHJvdyBuZXcgRXJyb3IoXCJSb2xlICdcIiArIHJvbGUgKyBcIicgaXMgbm90IGEgc3RyaW5nLlwiKVxuXG4gICAgICAgIHJvbGVzLnB1c2goe1xuICAgICAgICAgIF9pZDogcm9sZSxcbiAgICAgICAgICBzY29wZTogbnVsbCxcbiAgICAgICAgICBhc3NpZ25lZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvbGRSb2xlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9sZFJvbGVzKS5mb3JFYWNoKChbZ3JvdXAsIHJvbGVzQXJyYXldKSA9PiB7XG4gICAgICAgIGlmIChncm91cCA9PT0gJ19fZ2xvYmFsX3JvbGVzX18nKSB7XG4gICAgICAgICAgZ3JvdXAgPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVydFVuZGVyc2NvcmVzVG9Eb3RzKSB7XG4gICAgICAgICAgLy8gdW5lc2NhcGVcbiAgICAgICAgICBncm91cCA9IGdyb3VwLnJlcGxhY2UoL18vZywgJy4nKVxuICAgICAgICB9XG5cbiAgICAgICAgcm9sZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgaWYgKCEodHlwZW9mIHJvbGUgPT09ICdzdHJpbmcnKSkgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSAnXCIgKyByb2xlICsgXCInIGlzIG5vdCBhIHN0cmluZy5cIilcblxuICAgICAgICAgIHJvbGVzLnB1c2goe1xuICAgICAgICAgICAgX2lkOiByb2xlLFxuICAgICAgICAgICAgc2NvcGU6IGdyb3VwLFxuICAgICAgICAgICAgYXNzaWduZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbnZlcnRUb09sZEZpZWxkXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld1JvbGVzIGBNZXRlb3IudXNlcnNgIGRvY3VtZW50IGByb2xlc2AgZmllbGQgaW4gdGhlIG5ldyBmb3JtYXQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNpbmdHcm91cHMgU2hvdWxkIHdlIHVzZSBncm91cHMgb3Igbm90LlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQ29udmVydGVkIGByb2xlc2AgdG8gdGhlIG9sZCBmb3JtYXQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2NvbnZlcnRUb09sZEZpZWxkOiBmdW5jdGlvbiAobmV3Um9sZXMsIHVzaW5nR3JvdXBzKSB7XG4gICAgdmFyIHJvbGVzXG5cbiAgICBpZiAodXNpbmdHcm91cHMpIHtcbiAgICAgIHJvbGVzID0ge31cbiAgICB9IGVsc2Uge1xuICAgICAgcm9sZXMgPSBbXVxuICAgIH1cblxuICAgIG5ld1JvbGVzLmZvckVhY2goZnVuY3Rpb24gKHVzZXJSb2xlKSB7XG4gICAgICBpZiAoISh0eXBlb2YgdXNlclJvbGUgPT09ICdvYmplY3QnKSkgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSAnXCIgKyB1c2VyUm9sZSArIFwiJyBpcyBub3QgYW4gb2JqZWN0LlwiKVxuXG4gICAgICAvLyBXZSBhc3N1bWUgdGhhdCB3ZSBhcmUgY29udmVydGluZyBiYWNrIGEgZmFpbGVkIG1pZ3JhdGlvbiwgc28gdmFsdWVzIGNhbiBvbmx5IGJlXG4gICAgICAvLyB3aGF0IHdlcmUgdmFsaWQgdmFsdWVzIGluIDEuMC4gU28gbm8gZ3JvdXAgbmFtZXMgc3RhcnRpbmcgd2l0aCAkIGFuZCBubyBzdWJyb2xlcy5cblxuICAgICAgaWYgKHVzZXJSb2xlLnNjb3BlKSB7XG4gICAgICAgIGlmICghdXNpbmdHcm91cHMpIHRocm93IG5ldyBFcnJvcihcIlJvbGUgJ1wiICsgdXNlclJvbGUuX2lkICsgXCInIHdpdGggc2NvcGUgJ1wiICsgdXNlclJvbGUuc2NvcGUgKyBcIicgd2l0aG91dCBlbmFibGVkIGdyb3Vwcy5cIilcblxuICAgICAgICAvLyBlc2NhcGVcbiAgICAgICAgdmFyIHNjb3BlID0gdXNlclJvbGUuc2NvcGUucmVwbGFjZSgvXFwuL2csICdfJylcblxuICAgICAgICBpZiAoc2NvcGVbMF0gPT09ICckJykgdGhyb3cgbmV3IEVycm9yKFwiR3JvdXAgbmFtZSAnXCIgKyBzY29wZSArIFwiJyBzdGFydCB3aXRoICQuXCIpXG5cbiAgICAgICAgcm9sZXNbc2NvcGVdID0gcm9sZXNbc2NvcGVdIHx8IFtdXG4gICAgICAgIHJvbGVzW3Njb3BlXS5wdXNoKHVzZXJSb2xlLl9pZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1c2luZ0dyb3Vwcykge1xuICAgICAgICAgIHJvbGVzLl9fZ2xvYmFsX3JvbGVzX18gPSByb2xlcy5fX2dsb2JhbF9yb2xlc19fIHx8IFtdXG4gICAgICAgICAgcm9sZXMuX19nbG9iYWxfcm9sZXNfXy5wdXNoKHVzZXJSb2xlLl9pZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb2xlcy5wdXNoKHVzZXJSb2xlLl9pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJvbGVzXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2RlZmF1bHRVcGRhdGVVc2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyIGBNZXRlb3IudXNlcnNgIGRvY3VtZW50LlxuICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gcm9sZXMgVmFsdWUgdG8gd2hpY2ggdXNlcidzIGByb2xlc2AgZmllbGQgc2hvdWxkIGJlIHNldC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfZGVmYXVsdFVwZGF0ZVVzZXI6IGZ1bmN0aW9uICh1c2VyLCByb2xlcykge1xuICAgIE1ldGVvci51c2Vycy51cGRhdGUoe1xuICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgIC8vIG1ha2luZyBzdXJlIG5vdGhpbmcgY2hhbmdlZCBpbiBtZWFudGltZVxuICAgICAgcm9sZXM6IHVzZXIucm9sZXNcbiAgICB9LCB7XG4gICAgICAkc2V0OiB7IHJvbGVzIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9kZWZhdWx0VXBkYXRlUm9sZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2xkUm9sZSBPbGQgYE1ldGVvci5yb2xlc2AgZG9jdW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdSb2xlIE5ldyBgTWV0ZW9yLnJvbGVzYCBkb2N1bWVudC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfZGVmYXVsdFVwZGF0ZVJvbGU6IGZ1bmN0aW9uIChvbGRSb2xlLCBuZXdSb2xlKSB7XG4gICAgTWV0ZW9yLnJvbGVzLnJlbW92ZShvbGRSb2xlLl9pZClcbiAgICBNZXRlb3Iucm9sZXMuaW5zZXJ0KG5ld1JvbGUpXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2Ryb3BDb2xsZWN0aW9uSW5kZXhcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiBvbiB3aGljaCB0byBkcm9wIHRoZSBpbmRleC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB0byBkcm9wLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9kcm9wQ29sbGVjdGlvbkluZGV4OiBmdW5jdGlvbiAoY29sbGVjdGlvbiwgaW5kZXhOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbGxlY3Rpb24uX2Ryb3BJbmRleChpbmRleE5hbWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ01vbmdvRXJyb3InKSB0aHJvdyBlXG4gICAgICBpZiAoIS9pbmRleCBub3QgZm91bmQvLnRlc3QoZS5lcnIgfHwgZS5lcnJtc2cpKSB0aHJvdyBlXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBgTWV0ZW9yLnVzZXJzYCBhbmQgYE1ldGVvci5yb2xlc2AgdG8gdGhlIG5ldyBmb3JtYXQuXG4gICAqXG4gICAqIEBtZXRob2QgX2ZvcndhcmRNaWdyYXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZVVzZXIgRnVuY3Rpb24gd2hpY2ggdXBkYXRlcyB0aGUgdXNlciBvYmplY3QuIERlZmF1bHQgYF9kZWZhdWx0VXBkYXRlVXNlcmAuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZVJvbGUgRnVuY3Rpb24gd2hpY2ggdXBkYXRlcyB0aGUgcm9sZSBvYmplY3QuIERlZmF1bHQgYF9kZWZhdWx0VXBkYXRlUm9sZWAuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udmVydFVuZGVyc2NvcmVzVG9Eb3RzIFNob3VsZCB3ZSBjb252ZXJ0IHVuZGVyc2NvcmVzIHRvIGRvdHMgaW4gZ3JvdXAgbmFtZXMuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2ZvcndhcmRNaWdyYXRlOiBmdW5jdGlvbiAodXBkYXRlVXNlciwgdXBkYXRlUm9sZSwgY29udmVydFVuZGVyc2NvcmVzVG9Eb3RzKSB7XG4gICAgdXBkYXRlVXNlciA9IHVwZGF0ZVVzZXIgfHwgUm9sZXMuX2RlZmF1bHRVcGRhdGVVc2VyXG4gICAgdXBkYXRlUm9sZSA9IHVwZGF0ZVJvbGUgfHwgUm9sZXMuX2RlZmF1bHRVcGRhdGVSb2xlXG5cbiAgICBSb2xlcy5fZHJvcENvbGxlY3Rpb25JbmRleChNZXRlb3Iucm9sZXMsICduYW1lXzEnKVxuXG4gICAgTWV0ZW9yLnJvbGVzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlLCBpbmRleCwgY3Vyc29yKSB7XG4gICAgICBpZiAoIVJvbGVzLl9pc05ld1JvbGUocm9sZSkpIHtcbiAgICAgICAgdXBkYXRlUm9sZShyb2xlLCBSb2xlcy5fY29udmVydFRvTmV3Um9sZShyb2xlKSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgTWV0ZW9yLnVzZXJzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyLCBpbmRleCwgY3Vyc29yKSB7XG4gICAgICBpZiAoIVJvbGVzLl9pc05ld0ZpZWxkKHVzZXIucm9sZXMpKSB7XG4gICAgICAgIHVwZGF0ZVVzZXIodXNlciwgUm9sZXMuX2NvbnZlcnRUb05ld0ZpZWxkKHVzZXIucm9sZXMsIGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogTW92ZXMgdGhlIGFzc2lnbm1lbnRzIGZyb20gYE1ldGVvci51c2Vyc2AgdG8gYE1ldGVvci5yb2xlQXNzaWdubWVudGAuXG4gICAqXG4gICAqIEBtZXRob2QgX2ZvcndhcmRNaWdyYXRlMlxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlclNlbGVjdG9yIEFuIG9wcG9ydHVuaXR5IHRvIHNoYXJlIHRoZSB3b3JrIGFtb25nIGluc3RhbmNlcy4gSXQncyBhZHZpc2FibGUgdG8gZG8gdGhlIGRpdmlzaW9uIGJhc2VkIG9uIHVzZXItaWQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2ZvcndhcmRNaWdyYXRlMjogZnVuY3Rpb24gKHVzZXJTZWxlY3Rvcikge1xuICAgIHVzZXJTZWxlY3RvciA9IHVzZXJTZWxlY3RvciB8fCB7fVxuICAgIE9iamVjdC5hc3NpZ24odXNlclNlbGVjdG9yLCB7IHJvbGVzOiB7ICRuZTogbnVsbCB9IH0pXG5cbiAgICBNZXRlb3IudXNlcnMuZmluZCh1c2VyU2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24gKHVzZXIsIGluZGV4KSB7XG4gICAgICB1c2VyLnJvbGVzLmZpbHRlcigocikgPT4gci5hc3NpZ25lZCkuZm9yRWFjaChyID0+IHtcbiAgICAgICAgLy8gQWRkZWQgYGlmRXhpc3RzYCB0byBtYWtlIGl0IGxlc3MgZXJyb3ItcHJvbmVcbiAgICAgICAgUm9sZXMuX2FkZFVzZXJUb1JvbGUodXNlci5faWQsIHIuX2lkLCB7IHNjb3BlOiByLnNjb3BlLCBpZkV4aXN0czogdHJ1ZSB9KVxuICAgICAgfSlcblxuICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh7IF9pZDogdXNlci5faWQgfSwgeyAkdW5zZXQ6IHsgcm9sZXM6ICcnIH0gfSlcbiAgICB9KVxuXG4gICAgLy8gTm8gbmVlZCB0byBrZWVwIHRoZSBpbmRleGVzIGFyb3VuZFxuICAgIFJvbGVzLl9kcm9wQ29sbGVjdGlvbkluZGV4KE1ldGVvci51c2VycywgJ3JvbGVzLl9pZF8xX3JvbGVzLnNjb3BlXzEnKVxuICAgIFJvbGVzLl9kcm9wQ29sbGVjdGlvbkluZGV4KE1ldGVvci51c2VycywgJ3JvbGVzLnNjb3BlXzEnKVxuICB9LFxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyBgTWV0ZW9yLnVzZXJzYCBhbmQgYE1ldGVvci5yb2xlc2AgdG8gdGhlIG9sZCBmb3JtYXQuXG4gICAqXG4gICAqIFdlIGFzc3VtZSB0aGF0IHdlIGFyZSBjb252ZXJ0aW5nIGJhY2sgYSBmYWlsZWQgbWlncmF0aW9uLCBzbyB2YWx1ZXMgY2FuIG9ubHkgYmVcbiAgICogd2hhdCB3ZXJlIHZhbGlkIHZhbHVlcyBpbiB0aGUgb2xkIGZvcm1hdC4gU28gbm8gZ3JvdXAgbmFtZXMgc3RhcnRpbmcgd2l0aCBgJGAgYW5kXG4gICAqIG5vIHN1YnJvbGVzLlxuICAgKlxuICAgKiBAbWV0aG9kIF9iYWNrd2FyZE1pZ3JhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdXBkYXRlVXNlciBGdW5jdGlvbiB3aGljaCB1cGRhdGVzIHRoZSB1c2VyIG9iamVjdC4gRGVmYXVsdCBgX2RlZmF1bHRVcGRhdGVVc2VyYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdXBkYXRlUm9sZSBGdW5jdGlvbiB3aGljaCB1cGRhdGVzIHRoZSByb2xlIG9iamVjdC4gRGVmYXVsdCBgX2RlZmF1bHRVcGRhdGVSb2xlYC5cbiAgICogQHBhcmFtIHtCb29sZWFufSB1c2luZ0dyb3VwcyBTaG91bGQgd2UgdXNlIGdyb3VwcyBvciBub3QuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2JhY2t3YXJkTWlncmF0ZTogZnVuY3Rpb24gKHVwZGF0ZVVzZXIsIHVwZGF0ZVJvbGUsIHVzaW5nR3JvdXBzKSB7XG4gICAgdXBkYXRlVXNlciA9IHVwZGF0ZVVzZXIgfHwgUm9sZXMuX2RlZmF1bHRVcGRhdGVVc2VyXG4gICAgdXBkYXRlUm9sZSA9IHVwZGF0ZVJvbGUgfHwgUm9sZXMuX2RlZmF1bHRVcGRhdGVSb2xlXG5cbiAgICBSb2xlcy5fZHJvcENvbGxlY3Rpb25JbmRleChNZXRlb3IudXNlcnMsICdyb2xlcy5faWRfMV9yb2xlcy5zY29wZV8xJylcbiAgICBSb2xlcy5fZHJvcENvbGxlY3Rpb25JbmRleChNZXRlb3IudXNlcnMsICdyb2xlcy5zY29wZV8xJylcblxuICAgIE1ldGVvci5yb2xlcy5maW5kKCkuZm9yRWFjaChmdW5jdGlvbiAocm9sZSwgaW5kZXgsIGN1cnNvcikge1xuICAgICAgaWYgKCFSb2xlcy5faXNPbGRSb2xlKHJvbGUpKSB7XG4gICAgICAgIHVwZGF0ZVJvbGUocm9sZSwgUm9sZXMuX2NvbnZlcnRUb09sZFJvbGUocm9sZSkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIE1ldGVvci51c2Vycy5maW5kKCkuZm9yRWFjaChmdW5jdGlvbiAodXNlciwgaW5kZXgsIGN1cnNvcikge1xuICAgICAgaWYgKCFSb2xlcy5faXNPbGRGaWVsZCh1c2VyLnJvbGVzKSkge1xuICAgICAgICB1cGRhdGVVc2VyKHVzZXIsIFJvbGVzLl9jb252ZXJ0VG9PbGRGaWVsZCh1c2VyLnJvbGVzLCB1c2luZ0dyb3VwcykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogTW92ZXMgdGhlIGFzc2lnbm1lbnRzIGZyb20gYE1ldGVvci5yb2xlQXNzaWdubWVudGAgYmFjayB0byB0byBgTWV0ZW9yLnVzZXJzYC5cbiAgICpcbiAgICogQG1ldGhvZCBfYmFja3dhcmRNaWdyYXRlMlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudFNlbGVjdG9yIEFuIG9wcG9ydHVuaXR5IHRvIHNoYXJlIHRoZSB3b3JrIGFtb25nIGluc3RhbmNlcy4gSXQncyBhZHZpc2FibGUgdG8gZG8gdGhlIGRpdmlzaW9uIGJhc2VkIG9uIHVzZXItaWQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2JhY2t3YXJkTWlncmF0ZTI6IGZ1bmN0aW9uIChhc3NpZ25tZW50U2VsZWN0b3IpIHtcbiAgICBhc3NpZ25tZW50U2VsZWN0b3IgPSBhc3NpZ25tZW50U2VsZWN0b3IgfHwge31cblxuICAgIE1ldGVvci51c2Vycy5fZW5zdXJlSW5kZXgoeyAncm9sZXMuX2lkJzogMSwgJ3JvbGVzLnNjb3BlJzogMSB9KVxuICAgIE1ldGVvci51c2Vycy5fZW5zdXJlSW5kZXgoeyAncm9sZXMuc2NvcGUnOiAxIH0pXG5cbiAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZChhc3NpZ25tZW50U2VsZWN0b3IpLmZvckVhY2gociA9PiB7XG4gICAgICBjb25zdCByb2xlcyA9IE1ldGVvci51c2Vycy5maW5kT25lKHsgX2lkOiByLnVzZXIuX2lkIH0pLnJvbGVzIHx8IFtdXG5cbiAgICAgIGNvbnN0IGN1cnJlbnRSb2xlID0gcm9sZXMuZmluZChvbGRSb2xlID0+IG9sZFJvbGUuX2lkID09PSByLnJvbGUuX2lkICYmIG9sZFJvbGUuc2NvcGUgPT09IHIuc2NvcGUpXG4gICAgICBpZiAoY3VycmVudFJvbGUpIHtcbiAgICAgICAgY3VycmVudFJvbGUuYXNzaWduZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb2xlcy5wdXNoKHtcbiAgICAgICAgICBfaWQ6IHIucm9sZS5faWQsXG4gICAgICAgICAgc2NvcGU6IHIuc2NvcGUsXG4gICAgICAgICAgYXNzaWduZWQ6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICByLmluaGVyaXRlZFJvbGVzLmZvckVhY2goaW5oZXJpdGVkUm9sZSA9PiB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEluaGVyaXRlZFJvbGUgPSByb2xlcy5maW5kKG9sZFJvbGUgPT4gb2xkUm9sZS5faWQgPT09IGluaGVyaXRlZFJvbGUuX2lkICYmIG9sZFJvbGUuc2NvcGUgPT09IHIuc2NvcGUpXG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmhlcml0ZWRSb2xlKSB7XG4gICAgICAgICAgICByb2xlcy5wdXNoKHtcbiAgICAgICAgICAgICAgX2lkOiBpbmhlcml0ZWRSb2xlLl9pZCxcbiAgICAgICAgICAgICAgc2NvcGU6IHIuc2NvcGUsXG4gICAgICAgICAgICAgIGFzc2lnbmVkOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIE1ldGVvci51c2Vycy51cGRhdGUoeyBfaWQ6IHIudXNlci5faWQgfSwgeyAkc2V0OiB7IHJvbGVzIH0gfSlcbiAgICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC5yZW1vdmUoeyBfaWQ6IHIuX2lkIH0pXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==
