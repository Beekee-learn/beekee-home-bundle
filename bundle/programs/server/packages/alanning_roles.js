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
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Roles;

var require = meteorInstall({"node_modules":{"meteor":{"alanning:roles":{"roles":{"roles_common.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alanning_roles/roles/roles_common.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

    Roles._checkRoleName(roleName); // Remove all assignments


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
    } while (roles.length > 0); // And finally remove the role itself


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

    Roles._checkRoleName(parentName); // query to get role's children


    role = Meteor.roles.findOne({
      _id: roleName
    });

    if (!role) {
      throw new Error('Role \'' + roleName + '\' does not exist.');
    } // detect cycles


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
    }); // if there was no change, parent role might not exist, or role is
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

    Roles._checkRoleName(parentName); // check for role existence
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
    }); // if there was no change, parent role might not exist, or role was
    // already not a subrole; in any case we do not have anything more to do

    if (!count) return; // For all roles who have had it as a dependency ...

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
    options = Roles._normalizeOptions(options); // ensure arrays

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
    options = Roles._normalizeOptions(options); // ensure arrays

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
      } // we first clear all roles for the user


      const selector = {
        'user._id': id
      };

      if (!options.anyScope) {
        selector.scope = options.scope;
      }

      Meteor.roleAssignment.remove(selector); // and then add all

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
    } // This might create duplicates, because we don't have a unique index, but that's all right. In case there are two, withdrawing the role will effectively kill them both.


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
   * @param {Array|String} roles Name(s) of roles to add users to. Roles have to exist.
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
    options = Roles._normalizeOptions(options); // ensure arrays

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
    options = Roles._normalizeOptions(options); // ensure array to simplify code

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

    return [...new Set(roles.map(r => r.inheritedRoles || [r.role]).reduce((rev, current) => rev.concat(current), []).map(r => r._id))];
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
    }, options); // ensure array to simplify code

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
  getGroupsForUser: function (...args) {
    if (!getGroupsForUserDeprecationWarning) {
      getGroupsForUserDeprecationWarning = true;
      console && console.warn('getGroupsForUser has been deprecated. Use getScopesForUser instead.');
    }

    return Roles.getScopesForUser(...args);
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
      }); // This should not happen, but this is a problem to address at some other time.

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roles_server.js":function(){

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
      Object.entries(oldRoles).forEach(([group, rolesArray]) => {
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
      if (!(typeof userRole === 'object')) throw new Error("Role '" + userRole + "' is not an object."); // We assume that we are converting back a failed migration, so values can only be
      // what were valid values in 1.0. So no group names starting with $ and no subroles.

      if (userRole.scope) {
        if (!usingGroups) throw new Error("Role '" + userRole._id + "' with scope '" + userRole.scope + "' without enabled groups."); // escape

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
    }); // No need to keep the indexes around

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYWxhbm5pbmc6cm9sZXMvcm9sZXMvcm9sZXNfY29tbW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9hbGFubmluZzpyb2xlcy9yb2xlcy9yb2xlc19zZXJ2ZXIuanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwicm9sZXMiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJyb2xlQXNzaWdubWVudCIsIlJvbGVzIiwiZ2V0R3JvdXBzRm9yVXNlckRlcHJlY2F0aW9uV2FybmluZyIsIk9iamVjdCIsImFzc2lnbiIsIkdMT0JBTF9HUk9VUCIsImNyZWF0ZVJvbGUiLCJyb2xlTmFtZSIsIm9wdGlvbnMiLCJfY2hlY2tSb2xlTmFtZSIsInVubGVzc0V4aXN0cyIsInJlc3VsdCIsInVwc2VydCIsIl9pZCIsIiRzZXRPbkluc2VydCIsImNoaWxkcmVuIiwiaW5zZXJ0ZWRJZCIsIkVycm9yIiwiZGVsZXRlUm9sZSIsImluaGVyaXRlZFJvbGVzIiwicmVtb3ZlIiwiX2dldFBhcmVudFJvbGVOYW1lcyIsImZpbmRPbmUiLCJmaW5kIiwiJGluIiwiZmV0Y2giLCJmb3JFYWNoIiwiciIsInVwZGF0ZSIsIiRwdWxsIiwiX2dldEluaGVyaXRlZFJvbGVOYW1lcyIsIiRzZXQiLCJtYXAiLCJyMiIsIm11bHRpIiwibGVuZ3RoIiwicmVuYW1lUm9sZSIsIm9sZE5hbWUiLCJuZXdOYW1lIiwicm9sZSIsImNvdW50IiwiaW5zZXJ0IiwiYWRkUm9sZXNUb1BhcmVudCIsInJvbGVzTmFtZXMiLCJwYXJlbnROYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiX2FkZFJvbGVUb1BhcmVudCIsImluY2x1ZGVzIiwiJG5lIiwiJHB1c2giLCIkZWFjaCIsInJlbW92ZVJvbGVzRnJvbVBhcmVudCIsIl9yZW1vdmVSb2xlRnJvbVBhcmVudCIsImZpZWxkcyIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiaWQiLCJfbm9ybWFsaXplT3B0aW9ucyIsIl9jaGVja1Njb3BlTmFtZSIsInNjb3BlIiwiaWZFeGlzdHMiLCJ1c2VyIiwiX2FkZFVzZXJUb1JvbGUiLCJzZXRVc2VyUm9sZXMiLCJhbnlTY29wZSIsInNlbGVjdG9yIiwidXNlcklkIiwicmVzIiwicGFyZW50Um9sZXMiLCJTZXQiLCJwYXJlbnRSb2xlIiwiYWRkIiwiZGVsZXRlIiwibmVzdGVkUm9sZXMiLCJyZW1vdmVVc2Vyc0Zyb21Sb2xlcyIsIl9yZW1vdmVVc2VyRnJvbVJvbGUiLCJ1c2VySXNJblJvbGUiLCJmaWx0ZXIiLCJzb21lIiwibGltaXQiLCJnZXRSb2xlc0ZvclVzZXIiLCJmdWxsT2JqZWN0cyIsIm9ubHlBc3NpZ25lZCIsIm9ubHlTY29wZWQiLCJwdXNoIiwicmVkdWNlIiwicmV2IiwiY3VycmVudCIsImNvbmNhdCIsImdldEFsbFJvbGVzIiwicXVlcnlPcHRpb25zIiwic29ydCIsImdldFVzZXJzSW5Sb2xlIiwiaWRzIiwiZ2V0VXNlckFzc2lnbm1lbnRzRm9yUm9sZSIsImEiLCJfZ2V0VXNlcnNJblJvbGVDdXJzb3IiLCJnZXRHcm91cHNGb3JVc2VyIiwiYXJncyIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0U2NvcGVzRm9yVXNlciIsInNjb3BlcyIsIm9iaSIsInJlbmFtZVNjb3BlIiwicmVtb3ZlU2NvcGUiLCJuYW1lIiwidHJpbSIsImlzUGFyZW50T2YiLCJwYXJlbnRSb2xlTmFtZSIsImNoaWxkUm9sZU5hbWUiLCJyb2xlc1RvQ2hlY2siLCJwb3AiLCJ1bmRlZmluZWQiLCJfbm9ybWFsaXplU2NvcGVOYW1lIiwic2NvcGVOYW1lIiwiX2Vuc3VyZUluZGV4IiwicHVibGlzaCIsImxvZ2dlZEluVXNlcklkIiwicmVhZHkiLCJfaXNOZXdSb2xlIiwiX2lzT2xkUm9sZSIsIl9pc05ld0ZpZWxkIiwiX2lzT2xkRmllbGQiLCJfY29udmVydFRvTmV3Um9sZSIsIm9sZFJvbGUiLCJfY29udmVydFRvT2xkUm9sZSIsIm5ld1JvbGUiLCJfY29udmVydFRvTmV3RmllbGQiLCJvbGRSb2xlcyIsImNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cyIsImluZGV4IiwiYXNzaWduZWQiLCJlbnRyaWVzIiwiZ3JvdXAiLCJyb2xlc0FycmF5IiwicmVwbGFjZSIsIl9jb252ZXJ0VG9PbGRGaWVsZCIsIm5ld1JvbGVzIiwidXNpbmdHcm91cHMiLCJ1c2VyUm9sZSIsIl9fZ2xvYmFsX3JvbGVzX18iLCJfZGVmYXVsdFVwZGF0ZVVzZXIiLCJfZGVmYXVsdFVwZGF0ZVJvbGUiLCJfZHJvcENvbGxlY3Rpb25JbmRleCIsImNvbGxlY3Rpb24iLCJpbmRleE5hbWUiLCJfZHJvcEluZGV4IiwiZSIsInRlc3QiLCJlcnIiLCJlcnJtc2ciLCJfZm9yd2FyZE1pZ3JhdGUiLCJ1cGRhdGVVc2VyIiwidXBkYXRlUm9sZSIsImN1cnNvciIsIl9mb3J3YXJkTWlncmF0ZTIiLCJ1c2VyU2VsZWN0b3IiLCIkdW5zZXQiLCJfYmFja3dhcmRNaWdyYXRlIiwiX2JhY2t3YXJkTWlncmF0ZTIiLCJhc3NpZ25tZW50U2VsZWN0b3IiLCJjdXJyZW50Um9sZSIsImluaGVyaXRlZFJvbGUiLCJjdXJyZW50SW5oZXJpdGVkUm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxLQUFaLEVBQW1CO0FBQ2pCRCxRQUFNLENBQUNDLEtBQVAsR0FBZSxJQUFJQyxLQUFLLENBQUNDLFVBQVYsQ0FBcUIsT0FBckIsQ0FBZjtBQUNEOztBQUVELElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxjQUFaLEVBQTRCO0FBQzFCSixRQUFNLENBQUNJLGNBQVAsR0FBd0IsSUFBSUYsS0FBSyxDQUFDQyxVQUFWLENBQXFCLGlCQUFyQixDQUF4QjtBQUNEO0FBRUQ7Ozs7O0FBR0EsSUFBSSxPQUFPRSxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDQSxPQUFLLEdBQUcsRUFBUixDQURnQyxDQUNyQjtBQUNaOztBQUVELElBQUlD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QyxnQkFBTUMsb0JBQW9CLEdBQUd4SyxLQUFLLENBQUMwQixJQUFOLENBQVd1RyxPQUFPLElBQUlBLE9BQU8sQ0FBQ2pILEdBQVIsS0FBZ0J1SixhQUFhLENBQUN2SixHQUE5QixJQUFxQ2lILE9BQU8sQ0FBQ2xFLEtBQVIsS0FBa0JqQyxDQUFDLENBQUNpQyxLQUEvRSxDQUE3Qjs7QUFFQSxjQUFJLENBQUN5RyxvQkFBTCxFQUEyQjtBQUN6QnhLLGlCQUFLLENBQUN3RixJQUFOLENBQVc7QUFDVHhFLGlCQUFHLEVBQUV1SixhQUFhLENBQUN2SixHQURWO0FBRVQrQyxtQkFBSyxFQUFFakMsQ0FBQyxDQUFDaUMsS0FGQTtBQUdUeUUsc0JBQVEsRUFBRTtBQUhELGFBQVg7QUFLRDtBQUNGLFNBVkQ7QUFXRDs7QUFFRHpJLFlBQU0sQ0FBQzRELEtBQVAsQ0FBYTVCLE1BQWIsQ0FBb0I7QUFBRWYsV0FBRyxFQUFFYyxDQUFDLENBQUNtQyxJQUFGLENBQU9qRDtBQUFkLE9BQXBCLEVBQXlDO0FBQUVrQixZQUFJLEVBQUU7QUFBRWxDO0FBQUY7QUFBUixPQUF6QztBQUNBRCxZQUFNLENBQUNJLGNBQVAsQ0FBc0JvQixNQUF0QixDQUE2QjtBQUFFUCxXQUFHLEVBQUVjLENBQUMsQ0FBQ2Q7QUFBVCxPQUE3QjtBQUNELEtBNUJEO0FBNkJEO0FBeFdrQixDQUFyQixFIiwiZmlsZSI6Ii9wYWNrYWdlcy9hbGFubmluZ19yb2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBNZXRlb3IsIFJvbGVzLCBNb25nbyAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHVzZXIgYXV0aG9yaXphdGlvbi4gQ29tcGF0aWJsZSB3aXRoIGJ1aWx0LWluIE1ldGVvciBhY2NvdW50cyBwYWNrYWdlcy5cbiAqXG4gKiBSb2xlcyBhcmUgYWNjZXNzaWJsZSB0aHJvZ2ggYE1ldGVvci5yb2xlc2AgY29sbGVjdGlvbiBhbmQgZG9jdW1lbnRzIGNvbnNpc3Qgb2Y6XG4gKiAgLSBgX2lkYDogcm9sZSBuYW1lXG4gKiAgLSBgY2hpbGRyZW5gOiBsaXN0IG9mIHN1YmRvY3VtZW50czpcbiAqICAgIC0gYF9pZGBcbiAqXG4gKiBDaGlsZHJlbiBsaXN0IGVsZW1lbnRzIGFyZSBzdWJkb2N1bWVudHMgc28gdGhhdCB0aGV5IGNhbiBiZSBlYXNpZXIgZXh0ZW5kZWQgaW4gdGhlIGZ1dHVyZSBvciBieSBwbHVnaW5zLlxuICpcbiAqIFJvbGVzIGNhbiBoYXZlIG11bHRpcGxlIHBhcmVudHMgYW5kIGNhbiBiZSBjaGlsZHJlbiAoc3Vicm9sZXMpIG9mIG11bHRpcGxlIHJvbGVzLlxuICpcbiAqIEV4YW1wbGU6IGB7X2lkOiAnYWRtaW4nLCBjaGlsZHJlbjogW3tfaWQ6ICdlZGl0b3InfV19YFxuICpcbiAqIFRoZSBhc3NpZ25tZW50IG9mIGEgcm9sZSB0byBhIHVzZXIgaXMgc3RvcmVkIGluIGEgY29sbGVjdGlvbiwgYWNjZXNzaWJsZSB0aHJvdWdoIGBNZXRlb3Iucm9sZUFzc2lnbm1lbnRgLlxuICogSXQncyBkb2N1bWVudHMgY29uc2lzdCBvZlxuICogIC0gYF9pZGA6IEludGVybmFsIE1vbmdvREIgaWRcbiAqICAtIGByb2xlYDogQSByb2xlIG9iamVjdCB3aGljaCBnb3QgYXNzaWduZWQuIFVzdWFsbHkgb25seSBjb250YWlucyB0aGUgYF9pZGAgcHJvcGVydHlcbiAqICAtIGB1c2VyYDogQSB1c2VyIG9iamVjdCwgdXN1YWxseSBvbmx5IGNvbnRhaW5zIHRoZSBgX2lkYCBwcm9wZXJ0eVxuICogIC0gYHNjb3BlYDogc2NvcGUgbmFtZVxuICogIC0gYGluaGVyaXRlZFJvbGVzYDogQSBsaXN0IG9mIGFsbCB0aGUgcm9sZXMgb2JqZWN0cyBpbmhlcml0ZWQgYnkgdGhlIGFzc2lnbmVkIHJvbGUuXG4gKlxuICogQG1vZHVsZSBSb2xlc1xuICovXG5pZiAoIU1ldGVvci5yb2xlcykge1xuICBNZXRlb3Iucm9sZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncm9sZXMnKVxufVxuXG5pZiAoIU1ldGVvci5yb2xlQXNzaWdubWVudCkge1xuICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncm9sZS1hc3NpZ25tZW50Jylcbn1cblxuLyoqXG4gKiBAY2xhc3MgUm9sZXNcbiAqL1xuaWYgKHR5cGVvZiBSb2xlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgUm9sZXMgPSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWdsb2JhbC1hc3NpZ25cbn1cblxudmFyIGdldEdyb3Vwc0ZvclVzZXJEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZVxuXG5PYmplY3QuYXNzaWduKFJvbGVzLCB7XG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgYSBnbG9iYWwgZ3JvdXAgKG5vdyBzY29wZSkgbmFtZS4gTm90IHVzZWQgYW55bW9yZS5cbiAgICpcbiAgICogQHByb3BlcnR5IEdMT0JBTF9HUk9VUFxuICAgKiBAc3RhdGljXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBHTE9CQUxfR1JPVVA6IG51bGwsXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyByb2xlLlxuICAgKlxuICAgKiBAbWV0aG9kIGNyZWF0ZVJvbGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIE5hbWUgb2Ygcm9sZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHVubGVzc0V4aXN0c2A6IGlmIGB0cnVlYCwgZXhjZXB0aW9uIHdpbGwgbm90IGJlIHRocm93biBpbiB0aGUgcm9sZSBhbHJlYWR5IGV4aXN0c1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IElEIG9mIHRoZSBuZXcgcm9sZSBvciBudWxsLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBjcmVhdGVSb2xlOiBmdW5jdGlvbiAocm9sZU5hbWUsIG9wdGlvbnMpIHtcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShyb2xlTmFtZSlcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVubGVzc0V4aXN0czogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIHJlc3VsdCA9IE1ldGVvci5yb2xlcy51cHNlcnQoeyBfaWQ6IHJvbGVOYW1lIH0sIHsgJHNldE9uSW5zZXJ0OiB7IGNoaWxkcmVuOiBbXSB9IH0pXG5cbiAgICBpZiAoIXJlc3VsdC5pbnNlcnRlZElkKSB7XG4gICAgICBpZiAob3B0aW9ucy51bmxlc3NFeGlzdHMpIHJldHVybiBudWxsXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvbGUgXFwnJyArIHJvbGVOYW1lICsgJ1xcJyBhbHJlYWR5IGV4aXN0cy4nKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuaW5zZXJ0ZWRJZFxuICB9LFxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gZXhpc3Rpbmcgcm9sZS5cbiAgICpcbiAgICogSWYgdGhlIHJvbGUgaXMgc2V0IGZvciBhbnkgdXNlciwgaXQgaXMgYXV0b21hdGljYWxseSB1bnNldC5cbiAgICpcbiAgICogQG1ldGhvZCBkZWxldGVSb2xlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2xlTmFtZSBOYW1lIG9mIHJvbGUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIGRlbGV0ZVJvbGU6IGZ1bmN0aW9uIChyb2xlTmFtZSkge1xuICAgIHZhciByb2xlc1xuICAgIHZhciBpbmhlcml0ZWRSb2xlc1xuXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocm9sZU5hbWUpXG5cbiAgICAvLyBSZW1vdmUgYWxsIGFzc2lnbm1lbnRzXG4gICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnJlbW92ZSh7XG4gICAgICAncm9sZS5faWQnOiByb2xlTmFtZVxuICAgIH0pXG5cbiAgICBkbyB7XG4gICAgICAvLyBGb3IgYWxsIHJvbGVzIHdobyBoYXZlIGl0IGFzIGEgZGVwZW5kZW5jeSAuLi5cbiAgICAgIHJvbGVzID0gUm9sZXMuX2dldFBhcmVudFJvbGVOYW1lcyhNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogcm9sZU5hbWUgfSkpXG5cbiAgICAgIE1ldGVvci5yb2xlcy5maW5kKHsgX2lkOiB7ICRpbjogcm9sZXMgfSB9KS5mZXRjaCgpLmZvckVhY2gociA9PiB7XG4gICAgICAgIE1ldGVvci5yb2xlcy51cGRhdGUoe1xuICAgICAgICAgIF9pZDogci5faWRcbiAgICAgICAgfSwge1xuICAgICAgICAgICRwdWxsOiB7XG4gICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICBfaWQ6IHJvbGVOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGluaGVyaXRlZFJvbGVzID0gUm9sZXMuX2dldEluaGVyaXRlZFJvbGVOYW1lcyhNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogci5faWQgfSkpXG4gICAgICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC51cGRhdGUoe1xuICAgICAgICAgICdyb2xlLl9pZCc6IHIuX2lkXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICBpbmhlcml0ZWRSb2xlczogW3IuX2lkLCAuLi5pbmhlcml0ZWRSb2xlc10ubWFwKHIyID0+ICh7IF9pZDogcjIgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7IG11bHRpOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH0gd2hpbGUgKHJvbGVzLmxlbmd0aCA+IDApXG5cbiAgICAvLyBBbmQgZmluYWxseSByZW1vdmUgdGhlIHJvbGUgaXRzZWxmXG4gICAgTWV0ZW9yLnJvbGVzLnJlbW92ZSh7IF9pZDogcm9sZU5hbWUgfSlcbiAgfSxcblxuICAvKipcbiAgICogUmVuYW1lIGFuIGV4aXN0aW5nIHJvbGUuXG4gICAqXG4gICAqIEBtZXRob2QgcmVuYW1lUm9sZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkTmFtZSBPbGQgbmFtZSBvZiBhIHJvbGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdOYW1lIE5ldyBuYW1lIG9mIGEgcm9sZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgcmVuYW1lUm9sZTogZnVuY3Rpb24gKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICB2YXIgcm9sZVxuICAgIHZhciBjb3VudFxuXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUob2xkTmFtZSlcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShuZXdOYW1lKVxuXG4gICAgaWYgKG9sZE5hbWUgPT09IG5ld05hbWUpIHJldHVyblxuXG4gICAgcm9sZSA9IE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiBvbGROYW1lIH0pXG5cbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZSBcXCcnICsgb2xkTmFtZSArICdcXCcgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG5cbiAgICByb2xlLl9pZCA9IG5ld05hbWVcblxuICAgIE1ldGVvci5yb2xlcy5pbnNlcnQocm9sZSlcblxuICAgIGRvIHtcbiAgICAgIGNvdW50ID0gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwZGF0ZSh7XG4gICAgICAgICdyb2xlLl9pZCc6IG9sZE5hbWVcbiAgICAgIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgICdyb2xlLl9pZCc6IG5ld05hbWVcbiAgICAgICAgfVxuICAgICAgfSwgeyBtdWx0aTogdHJ1ZSB9KVxuICAgIH0gd2hpbGUgKGNvdW50ID4gMClcblxuICAgIGRvIHtcbiAgICAgIGNvdW50ID0gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnVwZGF0ZSh7XG4gICAgICAgICdpbmhlcml0ZWRSb2xlcy5faWQnOiBvbGROYW1lXG4gICAgICB9LCB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAnaW5oZXJpdGVkUm9sZXMuJC5faWQnOiBuZXdOYW1lXG4gICAgICAgIH1cbiAgICAgIH0sIHsgbXVsdGk6IHRydWUgfSlcbiAgICB9IHdoaWxlIChjb3VudCA+IDApXG5cbiAgICBkbyB7XG4gICAgICBjb3VudCA9IE1ldGVvci5yb2xlcy51cGRhdGUoe1xuICAgICAgICAnY2hpbGRyZW4uX2lkJzogb2xkTmFtZVxuICAgICAgfSwge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgJ2NoaWxkcmVuLiQuX2lkJzogbmV3TmFtZVxuICAgICAgICB9XG4gICAgICB9LCB7IG11bHRpOiB0cnVlIH0pXG4gICAgfSB3aGlsZSAoY291bnQgPiAwKVxuXG4gICAgTWV0ZW9yLnJvbGVzLnJlbW92ZSh7IF9pZDogb2xkTmFtZSB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgcm9sZSBwYXJlbnQgdG8gcm9sZXMuXG4gICAqXG4gICAqIFByZXZpb3VzIHBhcmVudHMgYXJlIGtlcHQgKHJvbGUgY2FuIGhhdmUgbXVsdGlwbGUgcGFyZW50cykuIEZvciB1c2VycyB3aGljaCBoYXZlIHRoZVxuICAgKiBwYXJlbnQgcm9sZSBzZXQsIG5ldyBzdWJyb2xlcyBhcmUgYWRkZWQgYXV0b21hdGljYWxseS5cbiAgICpcbiAgICogQG1ldGhvZCBhZGRSb2xlc1RvUGFyZW50XG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSByb2xlc05hbWVzIE5hbWUocykgb2Ygcm9sZShzKS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgTmFtZSBvZiBwYXJlbnQgcm9sZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgYWRkUm9sZXNUb1BhcmVudDogZnVuY3Rpb24gKHJvbGVzTmFtZXMsIHBhcmVudE5hbWUpIHtcbiAgICAvLyBlbnN1cmUgYXJyYXlzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvbGVzTmFtZXMpKSByb2xlc05hbWVzID0gW3JvbGVzTmFtZXNdXG5cbiAgICByb2xlc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKHJvbGVOYW1lKSB7XG4gICAgICBSb2xlcy5fYWRkUm9sZVRvUGFyZW50KHJvbGVOYW1lLCBwYXJlbnROYW1lKVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2FkZFJvbGVUb1BhcmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcm9sZU5hbWUgTmFtZSBvZiByb2xlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBOYW1lIG9mIHBhcmVudCByb2xlLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfYWRkUm9sZVRvUGFyZW50OiBmdW5jdGlvbiAocm9sZU5hbWUsIHBhcmVudE5hbWUpIHtcbiAgICB2YXIgcm9sZVxuICAgIHZhciBjb3VudFxuXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocm9sZU5hbWUpXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocGFyZW50TmFtZSlcblxuICAgIC8vIHF1ZXJ5IHRvIGdldCByb2xlJ3MgY2hpbGRyZW5cbiAgICByb2xlID0gTWV0ZW9yLnJvbGVzLmZpbmRPbmUoeyBfaWQ6IHJvbGVOYW1lIH0pXG5cbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZSBcXCcnICsgcm9sZU5hbWUgKyAnXFwnIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuXG4gICAgLy8gZGV0ZWN0IGN5Y2xlc1xuICAgIGlmIChSb2xlcy5fZ2V0SW5oZXJpdGVkUm9sZU5hbWVzKHJvbGUpLmluY2x1ZGVzKHBhcmVudE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvbGVzIFxcJycgKyByb2xlTmFtZSArICdcXCcgYW5kIFxcJycgKyBwYXJlbnROYW1lICsgJ1xcJyB3b3VsZCBmb3JtIGEgY3ljbGUuJylcbiAgICB9XG5cbiAgICBjb3VudCA9IE1ldGVvci5yb2xlcy51cGRhdGUoe1xuICAgICAgX2lkOiBwYXJlbnROYW1lLFxuICAgICAgJ2NoaWxkcmVuLl9pZCc6IHtcbiAgICAgICAgJG5lOiByb2xlLl9pZFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICRwdXNoOiB7XG4gICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgX2lkOiByb2xlLl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGlmIHRoZXJlIHdhcyBubyBjaGFuZ2UsIHBhcmVudCByb2xlIG1pZ2h0IG5vdCBleGlzdCwgb3Igcm9sZSBpc1xuICAgIC8vIGFscmVhZHkgYSBzdWJyb2xlOyBpbiBhbnkgY2FzZSB3ZSBkbyBub3QgaGF2ZSBhbnl0aGluZyBtb3JlIHRvIGRvXG4gICAgaWYgKCFjb3VudCkgcmV0dXJuXG5cbiAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQudXBkYXRlKHtcbiAgICAgICdpbmhlcml0ZWRSb2xlcy5faWQnOiBwYXJlbnROYW1lXG4gICAgfSwge1xuICAgICAgJHB1c2g6IHtcbiAgICAgICAgaW5oZXJpdGVkUm9sZXM6IHsgJGVhY2g6IFtyb2xlLl9pZCwgLi4uUm9sZXMuX2dldEluaGVyaXRlZFJvbGVOYW1lcyhyb2xlKV0ubWFwKHIgPT4gKHsgX2lkOiByIH0pKSB9XG4gICAgICB9XG4gICAgfSwgeyBtdWx0aTogdHJ1ZSB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgcm9sZSBwYXJlbnQgZnJvbSByb2xlcy5cbiAgICpcbiAgICogT3RoZXIgcGFyZW50cyBhcmUga2VwdCAocm9sZSBjYW4gaGF2ZSBtdWx0aXBsZSBwYXJlbnRzKS4gRm9yIHVzZXJzIHdoaWNoIGhhdmUgdGhlXG4gICAqIHBhcmVudCByb2xlIHNldCwgcmVtb3ZlZCBzdWJyb2xlIGlzIHJlbW92ZWQgYXV0b21hdGljYWxseS5cbiAgICpcbiAgICogQG1ldGhvZCByZW1vdmVSb2xlc0Zyb21QYXJlbnRcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzTmFtZXMgTmFtZShzKSBvZiByb2xlKHMpLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBOYW1lIG9mIHBhcmVudCByb2xlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICByZW1vdmVSb2xlc0Zyb21QYXJlbnQ6IGZ1bmN0aW9uIChyb2xlc05hbWVzLCBwYXJlbnROYW1lKSB7XG4gICAgLy8gZW5zdXJlIGFycmF5c1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2xlc05hbWVzKSkgcm9sZXNOYW1lcyA9IFtyb2xlc05hbWVzXVxuXG4gICAgcm9sZXNOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlTmFtZSkge1xuICAgICAgUm9sZXMuX3JlbW92ZVJvbGVGcm9tUGFyZW50KHJvbGVOYW1lLCBwYXJlbnROYW1lKVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbW92ZVJvbGVGcm9tUGFyZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2xlTmFtZSBOYW1lIG9mIHJvbGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIE5hbWUgb2YgcGFyZW50IHJvbGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9yZW1vdmVSb2xlRnJvbVBhcmVudDogZnVuY3Rpb24gKHJvbGVOYW1lLCBwYXJlbnROYW1lKSB7XG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocm9sZU5hbWUpXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocGFyZW50TmFtZSlcblxuICAgIC8vIGNoZWNrIGZvciByb2xlIGV4aXN0ZW5jZVxuICAgIC8vIHRoaXMgd291bGQgbm90IHJlYWxseSBiZSBuZWVkZWQsIGJ1dCB3ZSBhcmUgdHJ5aW5nIHRvIG1hdGNoIGFkZFJvbGVzVG9QYXJlbnRcbiAgICBsZXQgcm9sZSA9IE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByb2xlTmFtZSB9LCB7IGZpZWxkczogeyBfaWQ6IDEgfSB9KVxuXG4gICAgaWYgKCFyb2xlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvbGUgXFwnJyArIHJvbGVOYW1lICsgJ1xcJyBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cblxuICAgIGNvbnN0IGNvdW50ID0gTWV0ZW9yLnJvbGVzLnVwZGF0ZSh7XG4gICAgICBfaWQ6IHBhcmVudE5hbWVcbiAgICB9LCB7XG4gICAgICAkcHVsbDoge1xuICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgIF9pZDogcm9sZS5faWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBpZiB0aGVyZSB3YXMgbm8gY2hhbmdlLCBwYXJlbnQgcm9sZSBtaWdodCBub3QgZXhpc3QsIG9yIHJvbGUgd2FzXG4gICAgLy8gYWxyZWFkeSBub3QgYSBzdWJyb2xlOyBpbiBhbnkgY2FzZSB3ZSBkbyBub3QgaGF2ZSBhbnl0aGluZyBtb3JlIHRvIGRvXG4gICAgaWYgKCFjb3VudCkgcmV0dXJuXG5cbiAgICAvLyBGb3IgYWxsIHJvbGVzIHdobyBoYXZlIGhhZCBpdCBhcyBhIGRlcGVuZGVuY3kgLi4uXG4gICAgY29uc3Qgcm9sZXMgPSBbLi4uUm9sZXMuX2dldFBhcmVudFJvbGVOYW1lcyhNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogcGFyZW50TmFtZSB9KSksIHBhcmVudE5hbWVdXG5cbiAgICBNZXRlb3Iucm9sZXMuZmluZCh7IF9pZDogeyAkaW46IHJvbGVzIH0gfSkuZmV0Y2goKS5mb3JFYWNoKHIgPT4ge1xuICAgICAgY29uc3QgaW5oZXJpdGVkUm9sZXMgPSBSb2xlcy5fZ2V0SW5oZXJpdGVkUm9sZU5hbWVzKE1ldGVvci5yb2xlcy5maW5kT25lKHsgX2lkOiByLl9pZCB9KSlcbiAgICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC51cGRhdGUoe1xuICAgICAgICAncm9sZS5faWQnOiByLl9pZCxcbiAgICAgICAgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IHJvbGUuX2lkXG4gICAgICB9LCB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICBpbmhlcml0ZWRSb2xlczogW3IuX2lkLCAuLi5pbmhlcml0ZWRSb2xlc10ubWFwKHIyID0+ICh7IF9pZDogcjIgfSkpXG4gICAgICAgIH1cbiAgICAgIH0sIHsgbXVsdGk6IHRydWUgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgdXNlcnMgdG8gcm9sZXMuXG4gICAqXG4gICAqIEFkZHMgcm9sZXMgdG8gZXhpc3Rpbmcgcm9sZXMgZm9yIGVhY2ggdXNlci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsICdhZG1pbicpXG4gICAqICAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklkLCBbJ3ZpZXctc2VjcmV0cyddLCAnZXhhbXBsZS5jb20nKVxuICAgKiAgICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKFt1c2VyMSwgdXNlcjJdLCBbJ3VzZXInLCdlZGl0b3InXSlcbiAgICogICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyhbdXNlcjEsIHVzZXIyXSwgWydnbG9yaW91cy1hZG1pbicsICdwZXJmb3JtLWFjdGlvbiddLCAnZXhhbXBsZS5vcmcnKVxuICAgKlxuICAgKiBAbWV0aG9kIGFkZFVzZXJzVG9Sb2xlc1xuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gdXNlcnMgVXNlciBJRChzKSBvciBvYmplY3Qocykgd2l0aCBhbiBgX2lkYCBmaWVsZC5cbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzIE5hbWUocykgb2Ygcm9sZXMgdG8gYWRkIHVzZXJzIHRvLiBSb2xlcyBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUsIG9yIGBudWxsYCBmb3IgdGhlIGdsb2JhbCByb2xlXG4gICAqICAgLSBgaWZFeGlzdHNgOiBpZiBgdHJ1ZWAsIGRvIG5vdCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIHJvbGUgZG9lcyBub3QgZXhpc3RcbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIGFkZFVzZXJzVG9Sb2xlczogZnVuY3Rpb24gKHVzZXJzLCByb2xlcywgb3B0aW9ucykge1xuICAgIHZhciBpZFxuXG4gICAgaWYgKCF1c2VycykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3VzZXJzXFwnIHBhcmFtLicpXG4gICAgaWYgKCFyb2xlcykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3JvbGVzXFwnIHBhcmFtLicpXG5cbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIGVuc3VyZSBhcnJheXNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXNlcnMpKSB1c2VycyA9IFt1c2Vyc11cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9sZXMpKSByb2xlcyA9IFtyb2xlc11cblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgaWZFeGlzdHM6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWQgPSB1c2VyLl9pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSB1c2VyXG4gICAgICB9XG5cbiAgICAgIHJvbGVzLmZvckVhY2goZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgUm9sZXMuX2FkZFVzZXJUb1JvbGUoaWQsIHJvbGUsIG9wdGlvbnMpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCB1c2Vycycgcm9sZXMuXG4gICAqXG4gICAqIFJlcGxhY2VzIGFsbCBleGlzdGluZyByb2xlcyB3aXRoIGEgbmV3IHNldCBvZiByb2xlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIFJvbGVzLnNldFVzZXJSb2xlcyh1c2VySWQsICdhZG1pbicpXG4gICAqICAgICBSb2xlcy5zZXRVc2VyUm9sZXModXNlcklkLCBbJ3ZpZXctc2VjcmV0cyddLCAnZXhhbXBsZS5jb20nKVxuICAgKiAgICAgUm9sZXMuc2V0VXNlclJvbGVzKFt1c2VyMSwgdXNlcjJdLCBbJ3VzZXInLCdlZGl0b3InXSlcbiAgICogICAgIFJvbGVzLnNldFVzZXJSb2xlcyhbdXNlcjEsIHVzZXIyXSwgWydnbG9yaW91cy1hZG1pbicsICdwZXJmb3JtLWFjdGlvbiddLCAnZXhhbXBsZS5vcmcnKVxuICAgKlxuICAgKiBAbWV0aG9kIHNldFVzZXJSb2xlc1xuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gdXNlcnMgVXNlciBJRChzKSBvciBvYmplY3Qocykgd2l0aCBhbiBgX2lkYCBmaWVsZC5cbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzIE5hbWUocykgb2Ygcm9sZXMgdG8gYWRkIHVzZXJzIHRvLiBSb2xlcyBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUsIG9yIGBudWxsYCBmb3IgdGhlIGdsb2JhbCByb2xlXG4gICAqICAgLSBgYW55U2NvcGVgOiBpZiBgdHJ1ZWAsIHJlbW92ZSBhbGwgcm9sZXMgdGhlIHVzZXIgaGFzLCBvZiBhbnkgc2NvcGUsIGlmIGBmYWxzZWAsIG9ubHkgdGhlIG9uZSBpbiB0aGUgc2FtZSBzY29wZVxuICAgKiAgIC0gYGlmRXhpc3RzYDogaWYgYHRydWVgLCBkbyBub3QgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSByb2xlIGRvZXMgbm90IGV4aXN0XG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIGl0IGNhbiBiZSBhIHNjb3BlIG5hbWUgc3RyaW5nLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzZXRVc2VyUm9sZXM6IGZ1bmN0aW9uICh1c2Vycywgcm9sZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgaWRcblxuICAgIGlmICghdXNlcnMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcXCd1c2Vyc1xcJyBwYXJhbS4nKVxuICAgIGlmICghcm9sZXMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcXCdyb2xlc1xcJyBwYXJhbS4nKVxuXG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICAvLyBlbnN1cmUgYXJyYXlzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVzZXJzKSkgdXNlcnMgPSBbdXNlcnNdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvbGVzKSkgcm9sZXMgPSBbcm9sZXNdXG5cbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGlmRXhpc3RzOiBmYWxzZSxcbiAgICAgIGFueVNjb3BlOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIHVzZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlkID0gdXNlci5faWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkID0gdXNlclxuICAgICAgfVxuICAgICAgLy8gd2UgZmlyc3QgY2xlYXIgYWxsIHJvbGVzIGZvciB0aGUgdXNlclxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSB7ICd1c2VyLl9pZCc6IGlkIH1cbiAgICAgIGlmICghb3B0aW9ucy5hbnlTY29wZSkge1xuICAgICAgICBzZWxlY3Rvci5zY29wZSA9IG9wdGlvbnMuc2NvcGVcbiAgICAgIH1cblxuICAgICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LnJlbW92ZShzZWxlY3RvcilcblxuICAgICAgLy8gYW5kIHRoZW4gYWRkIGFsbFxuICAgICAgcm9sZXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICBSb2xlcy5fYWRkVXNlclRvUm9sZShpZCwgcm9sZSwgb3B0aW9ucylcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogQWRkIG9uZSB1c2VyIHRvIG9uZSByb2xlLlxuICAgKlxuICAgKiBAbWV0aG9kIF9hZGRVc2VyVG9Sb2xlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VySWQgVGhlIHVzZXIgSUQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2xlTmFtZSBOYW1lIG9mIHRoZSByb2xlIHRvIGFkZCB0aGUgdXNlciB0by4gVGhlIHJvbGUgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlLCBvciBgbnVsbGAgZm9yIHRoZSBnbG9iYWwgcm9sZVxuICAgKiAgIC0gYGlmRXhpc3RzYDogaWYgYHRydWVgLCBkbyBub3QgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSByb2xlIGRvZXMgbm90IGV4aXN0XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9hZGRVc2VyVG9Sb2xlOiBmdW5jdGlvbiAodXNlcklkLCByb2xlTmFtZSwgb3B0aW9ucykge1xuICAgIFJvbGVzLl9jaGVja1JvbGVOYW1lKHJvbGVOYW1lKVxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvbGUgPSBNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogcm9sZU5hbWUgfSwgeyBmaWVsZHM6IHsgY2hpbGRyZW46IDEgfSB9KVxuXG4gICAgaWYgKCFyb2xlKSB7XG4gICAgICBpZiAob3B0aW9ucy5pZkV4aXN0cykge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUm9sZSBcXCcnICsgcm9sZU5hbWUgKyAnXFwnIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtaWdodCBjcmVhdGUgZHVwbGljYXRlcywgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGEgdW5pcXVlIGluZGV4LCBidXQgdGhhdCdzIGFsbCByaWdodC4gSW4gY2FzZSB0aGVyZSBhcmUgdHdvLCB3aXRoZHJhd2luZyB0aGUgcm9sZSB3aWxsIGVmZmVjdGl2ZWx5IGtpbGwgdGhlbSBib3RoLlxuICAgIGNvbnN0IHJlcyA9IE1ldGVvci5yb2xlQXNzaWdubWVudC51cHNlcnQoe1xuICAgICAgJ3VzZXIuX2lkJzogdXNlcklkLFxuICAgICAgJ3JvbGUuX2lkJzogcm9sZU5hbWUsXG4gICAgICBzY29wZTogb3B0aW9ucy5zY29wZVxuICAgIH0sIHtcbiAgICAgICRzZXRPbkluc2VydDoge1xuICAgICAgICB1c2VyOiB7IF9pZDogdXNlcklkIH0sXG4gICAgICAgIHJvbGU6IHsgX2lkOiByb2xlTmFtZSB9LFxuICAgICAgICBzY29wZTogb3B0aW9ucy5zY29wZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAocmVzLmluc2VydGVkSWQpIHtcbiAgICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC51cGRhdGUoeyBfaWQ6IHJlcy5pbnNlcnRlZElkIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgIGluaGVyaXRlZFJvbGVzOiBbcm9sZU5hbWUsIC4uLlJvbGVzLl9nZXRJbmhlcml0ZWRSb2xlTmFtZXMocm9sZSldLm1hcChyID0+ICh7IF9pZDogciB9KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygcm9sZSBuYW1lcyB0aGUgZ2l2ZW4gcm9sZSBuYW1lIGlzIGEgY2hpbGQgb2YuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgICBSb2xlcy5fZ2V0UGFyZW50Um9sZU5hbWVzKHsgX2lkOiAnYWRtaW4nLCBjaGlsZHJlbjsgW10gfSlcbiAgICpcbiAgICogQG1ldGhvZCBfZ2V0UGFyZW50Um9sZU5hbWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb2xlIFRoZSByb2xlIG9iamVjdFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfZ2V0UGFyZW50Um9sZU5hbWVzOiBmdW5jdGlvbiAocm9sZSkge1xuICAgIHZhciBwYXJlbnRSb2xlc1xuXG4gICAgaWYgKCFyb2xlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBwYXJlbnRSb2xlcyA9IG5ldyBTZXQoW3JvbGUuX2lkXSlcblxuICAgIHBhcmVudFJvbGVzLmZvckVhY2gocm9sZU5hbWUgPT4ge1xuICAgICAgTWV0ZW9yLnJvbGVzLmZpbmQoeyAnY2hpbGRyZW4uX2lkJzogcm9sZU5hbWUgfSkuZmV0Y2goKS5mb3JFYWNoKHBhcmVudFJvbGUgPT4ge1xuICAgICAgICBwYXJlbnRSb2xlcy5hZGQocGFyZW50Um9sZS5faWQpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBwYXJlbnRSb2xlcy5kZWxldGUocm9sZS5faWQpXG5cbiAgICByZXR1cm4gWy4uLnBhcmVudFJvbGVzXVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJvbGUgbmFtZXMgdGhlIGdpdmVuIHJvbGUgbmFtZSBpcyBhIHBhcmVudCBvZi5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIFJvbGVzLl9nZXRJbmhlcml0ZWRSb2xlTmFtZXMoeyBfaWQ6ICdhZG1pbicsIGNoaWxkcmVuOyBbXSB9KVxuICAgKlxuICAgKiBAbWV0aG9kIF9nZXRJbmhlcml0ZWRSb2xlTmFtZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvbGUgVGhlIHJvbGUgb2JqZWN0XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9nZXRJbmhlcml0ZWRSb2xlTmFtZXM6IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgY29uc3QgaW5oZXJpdGVkUm9sZXMgPSBuZXcgU2V0KClcbiAgICBjb25zdCBuZXN0ZWRSb2xlcyA9IG5ldyBTZXQoW3JvbGVdKVxuXG4gICAgbmVzdGVkUm9sZXMuZm9yRWFjaChyID0+IHtcbiAgICAgIGNvbnN0IHJvbGVzID0gTWV0ZW9yLnJvbGVzLmZpbmQoeyBfaWQ6IHsgJGluOiByLmNoaWxkcmVuLm1hcChyID0+IHIuX2lkKSB9IH0sIHsgZmllbGRzOiB7IGNoaWxkcmVuOiAxIH0gfSkuZmV0Y2goKVxuXG4gICAgICByb2xlcy5mb3JFYWNoKHIyID0+IHtcbiAgICAgICAgaW5oZXJpdGVkUm9sZXMuYWRkKHIyLl9pZClcbiAgICAgICAgbmVzdGVkUm9sZXMuYWRkKHIyKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFsuLi5pbmhlcml0ZWRSb2xlc11cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIHVzZXJzIGZyb20gYXNzaWduZWQgcm9sZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsICdhZG1pbicpXG4gICAqICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyhbdXNlcklkLCB1c2VyMl0sIFsnZWRpdG9yJ10pXG4gICAqICAgICBSb2xlcy5yZW1vdmVVc2Vyc0Zyb21Sb2xlcyh1c2VySWQsIFsndXNlciddLCAnZ3JvdXAxJylcbiAgICpcbiAgICogQG1ldGhvZCByZW1vdmVVc2Vyc0Zyb21Sb2xlc1xuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gdXNlcnMgVXNlciBJRChzKSBvciBvYmplY3Qocykgd2l0aCBhbiBgX2lkYCBmaWVsZC5cbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzIE5hbWUocykgb2Ygcm9sZXMgdG8gYWRkIHVzZXJzIHRvLiBSb2xlcyBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUsIG9yIGBudWxsYCBmb3IgdGhlIGdsb2JhbCByb2xlXG4gICAqICAgLSBgYW55U2NvcGVgOiBpZiBzZXQsIHJvbGUgY2FuIGJlIGluIGFueSBzY29wZSAoYHNjb3BlYCBvcHRpb24gaXMgaWdub3JlZClcbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHJlbW92ZVVzZXJzRnJvbVJvbGVzOiBmdW5jdGlvbiAodXNlcnMsIHJvbGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKCF1c2VycykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3VzZXJzXFwnIHBhcmFtLicpXG4gICAgaWYgKCFyb2xlcykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFxcJ3JvbGVzXFwnIHBhcmFtLicpXG5cbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIGVuc3VyZSBhcnJheXNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodXNlcnMpKSB1c2VycyA9IFt1c2Vyc11cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9sZXMpKSByb2xlcyA9IFtyb2xlc11cblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgdXNlcnMuZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKCF1c2VyKSByZXR1cm5cblxuICAgICAgcm9sZXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICBsZXQgaWRcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlkID0gdXNlci5faWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZCA9IHVzZXJcbiAgICAgICAgfVxuXG4gICAgICAgIFJvbGVzLl9yZW1vdmVVc2VyRnJvbVJvbGUoaWQsIHJvbGUsIG9wdGlvbnMpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBvbmUgdXNlciBmcm9tIG9uZSByb2xlLlxuICAgKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVVc2VyRnJvbVJvbGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJJZCBUaGUgdXNlciBJRC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIE5hbWUgb2YgdGhlIHJvbGUgdG8gYWRkIHRoZSB1c2VyIHRvLiBUaGUgcm9sZSBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUsIG9yIGBudWxsYCBmb3IgdGhlIGdsb2JhbCByb2xlXG4gICAqICAgLSBgYW55U2NvcGVgOiBpZiBzZXQsIHJvbGUgY2FuIGJlIGluIGFueSBzY29wZSAoYHNjb3BlYCBvcHRpb24gaXMgaWdub3JlZClcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX3JlbW92ZVVzZXJGcm9tUm9sZTogZnVuY3Rpb24gKHVzZXJJZCwgcm9sZU5hbWUsIG9wdGlvbnMpIHtcbiAgICBSb2xlcy5fY2hlY2tSb2xlTmFtZShyb2xlTmFtZSlcbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIGlmICghdXNlcklkKSByZXR1cm5cblxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgJ3VzZXIuX2lkJzogdXNlcklkLFxuICAgICAgJ3JvbGUuX2lkJzogcm9sZU5hbWVcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuYW55U2NvcGUpIHtcbiAgICAgIHNlbGVjdG9yLnNjb3BlID0gb3B0aW9ucy5zY29wZVxuICAgIH1cblxuICAgIE1ldGVvci5yb2xlQXNzaWdubWVudC5yZW1vdmUoc2VsZWN0b3IpXG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHVzZXIgaGFzIHNwZWNpZmllZCByb2xlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICAgIC8vIGdsb2JhbCByb2xlc1xuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXIsICdhZG1pbicpXG4gICAqICAgICBSb2xlcy51c2VySXNJblJvbGUodXNlciwgWydhZG1pbicsJ2VkaXRvciddKVxuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXJJZCwgJ2FkbWluJylcbiAgICogICAgIFJvbGVzLnVzZXJJc0luUm9sZSh1c2VySWQsIFsnYWRtaW4nLCdlZGl0b3InXSlcbiAgICpcbiAgICogICAgIC8vIHNjb3BlIHJvbGVzIChnbG9iYWwgcm9sZXMgYXJlIHN0aWxsIGNoZWNrZWQpXG4gICAqICAgICBSb2xlcy51c2VySXNJblJvbGUodXNlciwgJ2FkbWluJywgJ2dyb3VwMScpXG4gICAqICAgICBSb2xlcy51c2VySXNJblJvbGUodXNlcklkLCBbJ2FkbWluJywnZWRpdG9yJ10sICdncm91cDEnKVxuICAgKiAgICAgUm9sZXMudXNlcklzSW5Sb2xlKHVzZXJJZCwgWydhZG1pbicsJ2VkaXRvciddLCB7c2NvcGU6ICdncm91cDEnfSlcbiAgICpcbiAgICogQG1ldGhvZCB1c2VySXNJblJvbGVcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1c2VyIFVzZXIgSUQgb3IgYW4gYWN0dWFsIHVzZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZSBvZiByb2xlIG9yIGFuIGFycmF5IG9mIHJvbGVzIHRvIGNoZWNrIGFnYWluc3QuIElmIGFycmF5LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCByZXR1cm4gYHRydWVgIGlmIHVzZXIgaXMgaW4gX2FueV8gcm9sZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzIGRvIG5vdCBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGU7IGlmIHN1cHBsaWVkLCBsaW1pdHMgY2hlY2sgdG8ganVzdCB0aGF0IHNjb3BlXG4gICAqICAgICB0aGUgdXNlcidzIGdsb2JhbCByb2xlcyB3aWxsIGFsd2F5cyBiZSBjaGVja2VkIHdoZXRoZXIgc2NvcGUgaXMgc3BlY2lmaWVkIG9yIG5vdFxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgb3B0aW9uIGlzIGlnbm9yZWQpXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIGl0IGNhbiBiZSBhIHNjb3BlIG5hbWUgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdXNlciBpcyBpbiBfYW55XyBvZiB0aGUgdGFyZ2V0IHJvbGVzXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHVzZXJJc0luUm9sZTogZnVuY3Rpb24gKHVzZXIsIHJvbGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIGlkXG4gICAgdmFyIHNlbGVjdG9yXG5cbiAgICBvcHRpb25zID0gUm9sZXMuX25vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucylcblxuICAgIC8vIGVuc3VyZSBhcnJheSB0byBzaW1wbGlmeSBjb2RlXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvbGVzKSkgcm9sZXMgPSBbcm9sZXNdXG5cbiAgICByb2xlcyA9IHJvbGVzLmZpbHRlcihyID0+IHIgIT0gbnVsbClcblxuICAgIGlmICghcm9sZXMubGVuZ3RoKSByZXR1cm4gZmFsc2VcblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW55U2NvcGU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGlmICh1c2VyICYmIHR5cGVvZiB1c2VyID09PSAnb2JqZWN0Jykge1xuICAgICAgaWQgPSB1c2VyLl9pZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IHVzZXJcbiAgICB9XG5cbiAgICBpZiAoIWlkKSByZXR1cm4gZmFsc2VcblxuICAgIHNlbGVjdG9yID0ge1xuICAgICAgJ3VzZXIuX2lkJzogaWRcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuYW55U2NvcGUpIHtcbiAgICAgIHNlbGVjdG9yLnNjb3BlID0geyAkaW46IFtvcHRpb25zLnNjb3BlLCBudWxsXSB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvbGVzLnNvbWUoKHJvbGVOYW1lKSA9PiB7XG4gICAgICBzZWxlY3RvclsnaW5oZXJpdGVkUm9sZXMuX2lkJ10gPSByb2xlTmFtZVxuXG4gICAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoc2VsZWN0b3IsIHsgbGltaXQ6IDEgfSkuY291bnQoKSA+IDBcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB1c2VyJ3Mgcm9sZXMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Um9sZXNGb3JVc2VyXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXNlciBVc2VyIElEIG9yIGFuIGFjdHVhbCB1c2VyIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9uc10gT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2Ygc2NvcGUgdG8gcHJvdmlkZSByb2xlcyBmb3I7IGlmIG5vdCBzcGVjaWZpZWQsIGdsb2JhbCByb2xlcyBhcmUgcmV0dXJuZWRcbiAgICogICAtIGBhbnlTY29wZWA6IGlmIHNldCwgcm9sZSBjYW4gYmUgaW4gYW55IHNjb3BlIChgc2NvcGVgIGFuZCBgb25seUFzc2lnbmVkYCBvcHRpb25zIGFyZSBpZ25vcmVkKVxuICAgKiAgIC0gYG9ubHlTY29wZWRgOiBpZiBzZXQsIG9ubHkgcm9sZXMgaW4gdGhlIHNwZWNpZmllZCBzY29wZSBhcmUgcmV0dXJuZWRcbiAgICogICAtIGBvbmx5QXNzaWduZWRgOiByZXR1cm4gb25seSBhc3NpZ25lZCByb2xlcyBhbmQgbm90IGF1dG9tYXRpY2FsbHkgaW5mZXJyZWQgKGxpa2Ugc3Vicm9sZXMpXG4gICAqICAgLSBgZnVsbE9iamVjdHNgOiByZXR1cm4gZnVsbCByb2xlcyBvYmplY3RzIChgdHJ1ZWApIG9yIGp1c3QgbmFtZXMgKGBmYWxzZWApIChgb25seUFzc2lnbmVkYCBvcHRpb24gaXMgaWdub3JlZCkgKGRlZmF1bHQgYGZhbHNlYClcbiAgICogICAgIElmIHlvdSBoYXZlIGEgdXNlLWNhc2UgZm9yIHRoaXMgb3B0aW9uLCBwbGVhc2UgZmlsZSBhIGZlYXR1cmUtcmVxdWVzdC4gWW91IHNob3VsZG4ndCBuZWVkIHRvIHVzZSBpdCBhcyBpdCdzXG4gICAqICAgICByZXN1bHQgc3Ryb25nbHkgZGVwZW5kYW50IG9uIHRoZSBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSBvZiB0aGlzIHBsdWdpbi5cbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB1c2VyJ3Mgcm9sZXMsIHVuc29ydGVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBnZXRSb2xlc0ZvclVzZXI6IGZ1bmN0aW9uICh1c2VyLCBvcHRpb25zKSB7XG4gICAgdmFyIGlkXG4gICAgdmFyIHNlbGVjdG9yXG4gICAgdmFyIGZpbHRlclxuICAgIHZhciByb2xlc1xuXG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBSb2xlcy5fY2hlY2tTY29wZU5hbWUob3B0aW9ucy5zY29wZSlcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGZ1bGxPYmplY3RzOiBmYWxzZSxcbiAgICAgIG9ubHlBc3NpZ25lZDogZmFsc2UsXG4gICAgICBhbnlTY29wZTogZmFsc2UsXG4gICAgICBvbmx5U2NvcGVkOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBpZiAodXNlciAmJiB0eXBlb2YgdXNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlkID0gdXNlci5faWRcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB1c2VyXG4gICAgfVxuXG4gICAgaWYgKCFpZCkgcmV0dXJuIFtdXG5cbiAgICBzZWxlY3RvciA9IHtcbiAgICAgICd1c2VyLl9pZCc6IGlkXG4gICAgfVxuXG4gICAgZmlsdGVyID0ge1xuICAgICAgZmllbGRzOiB7ICdpbmhlcml0ZWRSb2xlcy5faWQnOiAxIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuYW55U2NvcGUpIHtcbiAgICAgIHNlbGVjdG9yLnNjb3BlID0geyAkaW46IFtvcHRpb25zLnNjb3BlXSB9XG5cbiAgICAgIGlmICghb3B0aW9ucy5vbmx5U2NvcGVkKSB7XG4gICAgICAgIHNlbGVjdG9yLnNjb3BlLiRpbi5wdXNoKG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25seUFzc2lnbmVkKSB7XG4gICAgICBkZWxldGUgZmlsdGVyLmZpZWxkc1snaW5oZXJpdGVkUm9sZXMuX2lkJ11cbiAgICAgIGZpbHRlci5maWVsZHNbJ3JvbGUuX2lkJ10gPSAxXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZnVsbE9iamVjdHMpIHtcbiAgICAgIGRlbGV0ZSBmaWx0ZXIuZmllbGRzXG4gICAgfVxuXG4gICAgcm9sZXMgPSBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZChzZWxlY3RvciwgZmlsdGVyKS5mZXRjaCgpXG5cbiAgICBpZiAob3B0aW9ucy5mdWxsT2JqZWN0cykge1xuICAgICAgcmV0dXJuIHJvbGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHJvbGVzLm1hcChyID0+IHIuaW5oZXJpdGVkUm9sZXMgfHwgW3Iucm9sZV0pLnJlZHVjZSgocmV2LCBjdXJyZW50KSA9PiByZXYuY29uY2F0KGN1cnJlbnQpLCBbXSkubWFwKHIgPT4gci5faWQpKV1cbiAgfSxcblxuICAvKipcbiAgICogUmV0cmlldmUgY3Vyc29yIG9mIGFsbCBleGlzdGluZyByb2xlcy5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRBbGxSb2xlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW3F1ZXJ5T3B0aW9uc10gT3B0aW9ucyB3aGljaCBhcmUgcGFzc2VkIGRpcmVjdGx5XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdWdoIHRvIGBNZXRlb3Iucm9sZXMuZmluZChxdWVyeSwgb3B0aW9ucylgLlxuICAgKiBAcmV0dXJuIHtDdXJzb3J9IEN1cnNvciBvZiBleGlzdGluZyByb2xlcy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgZ2V0QWxsUm9sZXM6IGZ1bmN0aW9uIChxdWVyeU9wdGlvbnMpIHtcbiAgICBxdWVyeU9wdGlvbnMgPSBxdWVyeU9wdGlvbnMgfHwgeyBzb3J0OiB7IF9pZDogMSB9IH1cblxuICAgIHJldHVybiBNZXRlb3Iucm9sZXMuZmluZCh7fSwgcXVlcnlPcHRpb25zKVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhbGwgdXNlcnMgd2hvIGFyZSBpbiB0YXJnZXQgcm9sZS5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICpcbiAgICogQG1ldGhvZCBnZXRVc2Vyc0luUm9sZVxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZSBvZiByb2xlIG9yIGFuIGFycmF5IG9mIHJvbGVzLiBJZiBhcnJheSwgdXNlcnNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkIHdpbGwgaGF2ZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJvbGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpZWQgYnV0IG5lZWQgbm90IGhhdmUgX2FsbF8gcm9sZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlcyBkbyBub3QgaGF2ZSB0byBleGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9uc10gT3B0aW9uczpcbiAgICogICAtIGBzY29wZWA6IG5hbWUgb2YgdGhlIHNjb3BlIHRvIHJlc3RyaWN0IHJvbGVzIHRvOyB1c2VyJ3MgZ2xvYmFsXG4gICAqICAgICByb2xlcyB3aWxsIGFsc28gYmUgY2hlY2tlZFxuICAgKiAgIC0gYGFueVNjb3BlYDogaWYgc2V0LCByb2xlIGNhbiBiZSBpbiBhbnkgc2NvcGUgKGBzY29wZWAgb3B0aW9uIGlzIGlnbm9yZWQpXG4gICAqICAgLSBgb25seVNjb3BlZGA6IGlmIHNldCwgb25seSByb2xlcyBpbiB0aGUgc3BlY2lmaWVkIHNjb3BlIGFyZSByZXR1cm5lZFxuICAgKiAgIC0gYHF1ZXJ5T3B0aW9uc2A6IG9wdGlvbnMgd2hpY2ggYXJlIHBhc3NlZCBkaXJlY3RseVxuICAgKiAgICAgdGhyb3VnaCB0byBgTWV0ZW9yLnVzZXJzLmZpbmQocXVlcnksIG9wdGlvbnMpYFxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBpdCBjYW4gYmUgYSBzY29wZSBuYW1lIHN0cmluZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtxdWVyeU9wdGlvbnNdIE9wdGlvbnMgd2hpY2ggYXJlIHBhc3NlZCBkaXJlY3RseVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3VnaCB0byBgTWV0ZW9yLnVzZXJzLmZpbmQocXVlcnksIG9wdGlvbnMpYFxuICAgKiBAcmV0dXJuIHtDdXJzb3J9IEN1cnNvciBvZiB1c2VycyBpbiByb2xlcy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgZ2V0VXNlcnNJblJvbGU6IGZ1bmN0aW9uIChyb2xlcywgb3B0aW9ucywgcXVlcnlPcHRpb25zKSB7XG4gICAgdmFyIGlkc1xuXG4gICAgaWRzID0gUm9sZXMuZ2V0VXNlckFzc2lnbm1lbnRzRm9yUm9sZShyb2xlcywgb3B0aW9ucykuZmV0Y2goKS5tYXAoYSA9PiBhLnVzZXIuX2lkKVxuXG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHsgX2lkOiB7ICRpbjogaWRzIH0gfSwgKChvcHRpb25zICYmIG9wdGlvbnMucXVlcnlPcHRpb25zKSB8fCBxdWVyeU9wdGlvbnMpIHx8IHt9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhbGwgYXNzaWdubWVudHMgb2YgYSB1c2VyIHdoaWNoIGFyZSBmb3IgdGhlIHRhcmdldCByb2xlLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiBAbWV0aG9kIGdldFVzZXJBc3NpZ25tZW50c0ZvclJvbGVcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHJvbGVzIE5hbWUgb2Ygcm9sZSBvciBhbiBhcnJheSBvZiByb2xlcy4gSWYgYXJyYXksIHVzZXJzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZCB3aWxsIGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZSByb2xlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWVkIGJ1dCBuZWVkIG5vdCBoYXZlIF9hbGxfIHJvbGVzLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXMgZG8gbm90IGhhdmUgdG8gZXhpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW29wdGlvbnNdIE9wdGlvbnM6XG4gICAqICAgLSBgc2NvcGVgOiBuYW1lIG9mIHRoZSBzY29wZSB0byByZXN0cmljdCByb2xlcyB0bzsgdXNlcidzIGdsb2JhbFxuICAgKiAgICAgcm9sZXMgd2lsbCBhbHNvIGJlIGNoZWNrZWRcbiAgICogICAtIGBhbnlTY29wZWA6IGlmIHNldCwgcm9sZSBjYW4gYmUgaW4gYW55IHNjb3BlIChgc2NvcGVgIG9wdGlvbiBpcyBpZ25vcmVkKVxuICAgKiAgIC0gYHF1ZXJ5T3B0aW9uc2A6IG9wdGlvbnMgd2hpY2ggYXJlIHBhc3NlZCBkaXJlY3RseVxuICAgKiAgICAgdGhyb3VnaCB0byBgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQocXVlcnksIG9wdGlvbnMpYFxuXG4gICAqIEFsdGVybmF0aXZlbHksIGl0IGNhbiBiZSBhIHNjb3BlIG5hbWUgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtDdXJzb3J9IEN1cnNvciBvZiB1c2VyIGFzc2lnbm1lbnRzIGZvciByb2xlcy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgZ2V0VXNlckFzc2lnbm1lbnRzRm9yUm9sZTogZnVuY3Rpb24gKHJvbGVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IFJvbGVzLl9ub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbnlTY29wZTogZmFsc2UsXG4gICAgICBxdWVyeU9wdGlvbnM6IHt9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHJldHVybiBSb2xlcy5fZ2V0VXNlcnNJblJvbGVDdXJzb3Iocm9sZXMsIG9wdGlvbnMsIG9wdGlvbnMucXVlcnlPcHRpb25zKVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9nZXRVc2Vyc0luUm9sZUN1cnNvclxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcm9sZXMgTmFtZSBvZiByb2xlIG9yIGFuIGFycmF5IG9mIHJvbGVzLiBJZiBhcnJheSwgaWRzIG9mIHVzZXJzIGFyZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQgd2hpY2ggaGF2ZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJvbGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25lZCBidXQgbmVlZCBub3QgaGF2ZSBfYWxsXyByb2xlcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzIGRvIG5vdCBoYXZlIHRvIGV4aXN0LlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zXSBPcHRpb25zOlxuICAgKiAgIC0gYHNjb3BlYDogbmFtZSBvZiB0aGUgc2NvcGUgdG8gcmVzdHJpY3Qgcm9sZXMgdG87IHVzZXIncyBnbG9iYWxcbiAgICogICAgIHJvbGVzIHdpbGwgYWxzbyBiZSBjaGVja2VkXG4gICAqICAgLSBgYW55U2NvcGVgOiBpZiBzZXQsIHJvbGUgY2FuIGJlIGluIGFueSBzY29wZSAoYHNjb3BlYCBvcHRpb24gaXMgaWdub3JlZClcbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgaXQgY2FuIGJlIGEgc2NvcGUgbmFtZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZmlsdGVyXSBPcHRpb25zIHdoaWNoIGFyZSBwYXNzZWQgZGlyZWN0bHlcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm91Z2ggdG8gYE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHF1ZXJ5LCBvcHRpb25zKWBcbiAgICogQHJldHVybiB7T2JqZWN0fSBDdXJzb3IgdG8gdGhlIGFzc2lnbm1lbnQgZG9jdW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9nZXRVc2Vyc0luUm9sZUN1cnNvcjogZnVuY3Rpb24gKHJvbGVzLCBvcHRpb25zLCBmaWx0ZXIpIHtcbiAgICB2YXIgc2VsZWN0b3JcblxuICAgIG9wdGlvbnMgPSBSb2xlcy5fbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW55U2NvcGU6IGZhbHNlLFxuICAgICAgb25seVNjb3BlZDogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLy8gZW5zdXJlIGFycmF5IHRvIHNpbXBsaWZ5IGNvZGVcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9sZXMpKSByb2xlcyA9IFtyb2xlc11cblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvcHRpb25zLnNjb3BlKVxuXG4gICAgZmlsdGVyID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBmaWVsZHM6IHsgJ3VzZXIuX2lkJzogMSB9XG4gICAgfSwgZmlsdGVyKVxuXG4gICAgc2VsZWN0b3IgPSB7XG4gICAgICAnaW5oZXJpdGVkUm9sZXMuX2lkJzogeyAkaW46IHJvbGVzIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuYW55U2NvcGUpIHtcbiAgICAgIHNlbGVjdG9yLnNjb3BlID0geyAkaW46IFtvcHRpb25zLnNjb3BlXSB9XG5cbiAgICAgIGlmICghb3B0aW9ucy5vbmx5U2NvcGVkKSB7XG4gICAgICAgIHNlbGVjdG9yLnNjb3BlLiRpbi5wdXNoKG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKHNlbGVjdG9yLCBmaWx0ZXIpXG4gIH0sXG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWQuIFVzZSBgZ2V0U2NvcGVzRm9yVXNlcmAgaW5zdGVhZC5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRHcm91cHNGb3JVc2VyXG4gICAqIEBzdGF0aWNcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldEdyb3Vwc0ZvclVzZXI6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKCFnZXRHcm91cHNGb3JVc2VyRGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICBnZXRHcm91cHNGb3JVc2VyRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZVxuICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oJ2dldEdyb3Vwc0ZvclVzZXIgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIGdldFNjb3Blc0ZvclVzZXIgaW5zdGVhZC4nKVxuICAgIH1cblxuICAgIHJldHVybiBSb2xlcy5nZXRTY29wZXNGb3JVc2VyKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHVzZXJzIHNjb3BlcywgaWYgYW55LlxuICAgKlxuICAgKiBAbWV0aG9kIGdldFNjb3Blc0ZvclVzZXJcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1c2VyIFVzZXIgSUQgb3IgYW4gYWN0dWFsIHVzZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gW3JvbGVzXSBOYW1lIG9mIHJvbGVzIHRvIHJlc3RyaWN0IHNjb3BlcyB0by5cbiAgICpcbiAgICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHVzZXIncyBzY29wZXMsIHVuc29ydGVkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBnZXRTY29wZXNGb3JVc2VyOiBmdW5jdGlvbiAodXNlciwgcm9sZXMpIHtcbiAgICB2YXIgc2NvcGVzXG4gICAgdmFyIGlkXG5cbiAgICBpZiAocm9sZXMgJiYgIUFycmF5LmlzQXJyYXkocm9sZXMpKSByb2xlcyA9IFtyb2xlc11cblxuICAgIGlmICh1c2VyICYmIHR5cGVvZiB1c2VyID09PSAnb2JqZWN0Jykge1xuICAgICAgaWQgPSB1c2VyLl9pZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IHVzZXJcbiAgICB9XG5cbiAgICBpZiAoIWlkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgJ3VzZXIuX2lkJzogaWQsXG4gICAgICBzY29wZTogeyAkbmU6IG51bGwgfVxuICAgIH1cblxuICAgIGlmIChyb2xlcykge1xuICAgICAgc2VsZWN0b3JbJ2luaGVyaXRlZFJvbGVzLl9pZCddID0geyAkaW46IHJvbGVzIH1cbiAgICB9XG5cbiAgICBzY29wZXMgPSBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZChzZWxlY3RvciwgeyBmaWVsZHM6IHsgc2NvcGU6IDEgfSB9KS5mZXRjaCgpLm1hcChvYmkgPT4gb2JpLnNjb3BlKVxuXG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHNjb3BlcyldXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmFtZSBhIHNjb3BlLlxuICAgKlxuICAgKiBSb2xlcyBhc3NpZ25lZCB3aXRoIGEgZ2l2ZW4gc2NvcGUgYXJlIGNoYW5nZWQgdG8gYmUgdW5kZXIgdGhlIG5ldyBzY29wZS5cbiAgICpcbiAgICogQG1ldGhvZCByZW5hbWVTY29wZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkTmFtZSBPbGQgbmFtZSBvZiBhIHNjb3BlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3TmFtZSBOZXcgbmFtZSBvZiBhIHNjb3BlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICByZW5hbWVTY29wZTogZnVuY3Rpb24gKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICB2YXIgY291bnRcblxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShvbGROYW1lKVxuICAgIFJvbGVzLl9jaGVja1Njb3BlTmFtZShuZXdOYW1lKVxuXG4gICAgaWYgKG9sZE5hbWUgPT09IG5ld05hbWUpIHJldHVyblxuXG4gICAgZG8ge1xuICAgICAgY291bnQgPSBNZXRlb3Iucm9sZUFzc2lnbm1lbnQudXBkYXRlKHtcbiAgICAgICAgc2NvcGU6IG9sZE5hbWVcbiAgICAgIH0sIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgIHNjb3BlOiBuZXdOYW1lXG4gICAgICAgIH1cbiAgICAgIH0sIHsgbXVsdGk6IHRydWUgfSlcbiAgICB9IHdoaWxlIChjb3VudCA+IDApXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNjb3BlLlxuICAgKlxuICAgKiBSb2xlcyBhc3NpZ25lZCB3aXRoIGEgZ2l2ZW4gc2NvcGUgYXJlIHJlbW92ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgcmVtb3ZlU2NvcGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgYSBzY29wZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgcmVtb3ZlU2NvcGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgUm9sZXMuX2NoZWNrU2NvcGVOYW1lKG5hbWUpXG5cbiAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQucmVtb3ZlKHsgc2NvcGU6IG5hbWUgfSlcbiAgfSxcblxuICAvKipcbiAgICogVGhyb3cgYW4gZXhjZXB0aW9uIGlmIGByb2xlTmFtZWAgaXMgYW4gaW52YWxpZCByb2xlIG5hbWUuXG4gICAqXG4gICAqIEBtZXRob2QgX2NoZWNrUm9sZU5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvbGVOYW1lIEEgcm9sZSBuYW1lIHRvIG1hdGNoIGFnYWluc3QuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9jaGVja1JvbGVOYW1lOiBmdW5jdGlvbiAocm9sZU5hbWUpIHtcbiAgICBpZiAoIXJvbGVOYW1lIHx8IHR5cGVvZiByb2xlTmFtZSAhPT0gJ3N0cmluZycgfHwgcm9sZU5hbWUudHJpbSgpICE9PSByb2xlTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJvbGUgbmFtZSBcXCcnICsgcm9sZU5hbWUgKyAnXFwnLicpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaW5kIG91dCBpZiBhIHJvbGUgaXMgYW4gYW5jZXN0b3Igb2YgYW5vdGhlciByb2xlLlxuICAgKlxuICAgKiBXQVJOSU5HOiBJZiB5b3UgY2hlY2sgdGhpcyBvbiB0aGUgY2xpZW50LCBwbGVhc2UgbWFrZSBzdXJlIGFsbCByb2xlcyBhcmUgcHVibGlzaGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGlzUGFyZW50T2ZcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudFJvbGVOYW1lIFRoZSByb2xlIHlvdSB3YW50IHRvIHJlc2VhcmNoLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hpbGRSb2xlTmFtZSBUaGUgcm9sZSB5b3UgZXhwZWN0IHRvIGJlIGFtb25nIHRoZSBjaGlsZHJlbiBvZiBwYXJlbnRSb2xlTmFtZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgaXNQYXJlbnRPZjogZnVuY3Rpb24gKHBhcmVudFJvbGVOYW1lLCBjaGlsZFJvbGVOYW1lKSB7XG4gICAgaWYgKHBhcmVudFJvbGVOYW1lID09PSBjaGlsZFJvbGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChwYXJlbnRSb2xlTmFtZSA9PSBudWxsIHx8IGNoaWxkUm9sZU5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUocGFyZW50Um9sZU5hbWUpXG4gICAgUm9sZXMuX2NoZWNrUm9sZU5hbWUoY2hpbGRSb2xlTmFtZSlcblxuICAgIHZhciByb2xlc1RvQ2hlY2sgPSBbcGFyZW50Um9sZU5hbWVdXG4gICAgd2hpbGUgKHJvbGVzVG9DaGVjay5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciByb2xlTmFtZSA9IHJvbGVzVG9DaGVjay5wb3AoKVxuXG4gICAgICBpZiAocm9sZU5hbWUgPT09IGNoaWxkUm9sZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgdmFyIHJvbGUgPSBNZXRlb3Iucm9sZXMuZmluZE9uZSh7IF9pZDogcm9sZU5hbWUgfSlcblxuICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHRoaXMgaXMgYSBwcm9ibGVtIHRvIGFkZHJlc3MgYXQgc29tZSBvdGhlciB0aW1lLlxuICAgICAgaWYgKCFyb2xlKSBjb250aW51ZVxuXG4gICAgICByb2xlc1RvQ2hlY2sgPSByb2xlc1RvQ2hlY2suY29uY2F0KHJvbGUuY2hpbGRyZW4ubWFwKHIgPT4gci5faWQpKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgb3B0aW9ucy5cbiAgICpcbiAgICogQG1ldGhvZCBfbm9ybWFsaXplT3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHRvIG5vcm1hbGl6ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOb3JtYWxpemVkIG9wdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9ub3JtYWxpemVPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zID09PSB1bmRlZmluZWQgPyB7fSA6IG9wdGlvbnNcblxuICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHsgc2NvcGU6IG9wdGlvbnMgfVxuICAgIH1cblxuICAgIG9wdGlvbnMuc2NvcGUgPSBSb2xlcy5fbm9ybWFsaXplU2NvcGVOYW1lKG9wdGlvbnMuc2NvcGUpXG5cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9LFxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgc2NvcGUgbmFtZS5cbiAgICpcbiAgICogQG1ldGhvZCBfbm9ybWFsaXplU2NvcGVOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZU5hbWUgQSBzY29wZSBuYW1lIHRvIG5vcm1hbGl6ZS5cbiAgICogQHJldHVybiB7U3RyaW5nfSBOb3JtYWxpemVkIHNjb3BlIG5hbWUuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9ub3JtYWxpemVTY29wZU5hbWU6IGZ1bmN0aW9uIChzY29wZU5hbWUpIHtcbiAgICAvLyBtYXAgdW5kZWZpbmVkIGFuZCBudWxsIHRvIG51bGxcbiAgICBpZiAoc2NvcGVOYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzY29wZU5hbWVcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBgc2NvcGVOYW1lYCBpcyBhbiBpbnZhbGlkIHNjb3BlIG5hbWUuXG4gICAqXG4gICAqIEBtZXRob2QgX2NoZWNrUm9sZU5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlTmFtZSBBIHNjb3BlIG5hbWUgdG8gbWF0Y2ggYWdhaW5zdC5cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2NoZWNrU2NvcGVOYW1lOiBmdW5jdGlvbiAoc2NvcGVOYW1lKSB7XG4gICAgaWYgKHNjb3BlTmFtZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICBpZiAoIXNjb3BlTmFtZSB8fCB0eXBlb2Ygc2NvcGVOYW1lICE9PSAnc3RyaW5nJyB8fCBzY29wZU5hbWUudHJpbSgpICE9PSBzY29wZU5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzY29wZSBuYW1lIFxcJycgKyBzY29wZU5hbWUgKyAnXFwnLicpXG4gICAgfVxuICB9XG59KVxuIiwiLyogZ2xvYmFsIE1ldGVvciwgUm9sZXMgKi9cblxuTWV0ZW9yLnJvbGVBc3NpZ25tZW50Ll9lbnN1cmVJbmRleCh7ICd1c2VyLl9pZCc6IDEsICdpbmhlcml0ZWRSb2xlcy5faWQnOiAxLCBzY29wZTogMSB9KVxuTWV0ZW9yLnJvbGVBc3NpZ25tZW50Ll9lbnN1cmVJbmRleCh7ICd1c2VyLl9pZCc6IDEsICdyb2xlLl9pZCc6IDEsIHNjb3BlOiAxIH0pXG5NZXRlb3Iucm9sZUFzc2lnbm1lbnQuX2Vuc3VyZUluZGV4KHsgJ3JvbGUuX2lkJzogMSB9KVxuTWV0ZW9yLnJvbGVBc3NpZ25tZW50Ll9lbnN1cmVJbmRleCh7IHNjb3BlOiAxLCAndXNlci5faWQnOiAxLCAnaW5oZXJpdGVkUm9sZXMuX2lkJzogMSB9KSAvLyBBZGRpbmcgdXNlcklkIGFuZCByb2xlSWQgbWlnaHQgc3BlZWQgdXAgb3RoZXIgcXVlcmllcyBkZXBlbmRpbmcgb24gdGhlIGZpcnN0IGluZGV4XG5NZXRlb3Iucm9sZUFzc2lnbm1lbnQuX2Vuc3VyZUluZGV4KHsgJ2luaGVyaXRlZFJvbGVzLl9pZCc6IDEgfSlcblxuTWV0ZW9yLnJvbGVzLl9lbnN1cmVJbmRleCh7ICdjaGlsZHJlbi5faWQnOiAxIH0pXG5cbi8qXG4gKiBQdWJsaXNoIGxvZ2dlZC1pbiB1c2VyJ3Mgcm9sZXMgc28gY2xpZW50LXNpZGUgY2hlY2tzIGNhbiB3b3JrLlxuICpcbiAqIFVzZSBhIG5hbWVkIHB1Ymxpc2ggZnVuY3Rpb24gc28gY2xpZW50cyBjYW4gY2hlY2sgYHJlYWR5KClgIHN0YXRlLlxuICovXG5NZXRlb3IucHVibGlzaCgnX3JvbGVzJywgZnVuY3Rpb24gKCkge1xuICB2YXIgbG9nZ2VkSW5Vc2VySWQgPSB0aGlzLnVzZXJJZFxuICB2YXIgZmllbGRzID0geyByb2xlczogMSB9XG5cbiAgaWYgKCFsb2dnZWRJblVzZXJJZCkge1xuICAgIHRoaXMucmVhZHkoKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKFxuICAgIHsgX2lkOiBsb2dnZWRJblVzZXJJZCB9LFxuICAgIHsgZmllbGRzOiBmaWVsZHMgfVxuICApXG59KVxuXG5PYmplY3QuYXNzaWduKFJvbGVzLCB7XG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc05ld1JvbGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvbGUgYE1ldGVvci5yb2xlc2AgZG9jdW1lbnQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBgcm9sZWAgaXMgaW4gdGhlIG5ldyBmb3JtYXQuXG4gICAqICAgICAgICAgICAgICAgICAgIElmIGl0IGlzIGFtYmlndW91cyBvciBpdCBpcyBub3QsIHJldHVybnMgYGZhbHNlYC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfaXNOZXdSb2xlOiBmdW5jdGlvbiAocm9sZSkge1xuICAgIHJldHVybiAhKCduYW1lJyBpbiByb2xlKSAmJiAnY2hpbGRyZW4nIGluIHJvbGVcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNPbGRSb2xlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb2xlIGBNZXRlb3Iucm9sZXNgIGRvY3VtZW50LlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHJvbGVgIGlzIGluIHRoZSBvbGQgZm9ybWF0LlxuICAgKiAgICAgICAgICAgICAgICAgICBJZiBpdCBpcyBhbWJpZ3VvdXMgb3IgaXQgaXMgbm90LCByZXR1cm5zIGBmYWxzZWAuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2lzT2xkUm9sZTogZnVuY3Rpb24gKHJvbGUpIHtcbiAgICByZXR1cm4gJ25hbWUnIGluIHJvbGUgJiYgISgnY2hpbGRyZW4nIGluIHJvbGUpXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzTmV3RmllbGRcbiAgICogQHBhcmFtIHtBcnJheX0gcm9sZXMgYE1ldGVvci51c2Vyc2AgZG9jdW1lbnQgYHJvbGVzYCBmaWVsZC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGByb2xlc2AgZmllbGQgaXMgaW4gdGhlIG5ldyBmb3JtYXQuXG4gICAqICAgICAgICAgICAgICAgICAgIElmIGl0IGlzIGFtYmlndW91cyBvciBpdCBpcyBub3QsIHJldHVybnMgYGZhbHNlYC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfaXNOZXdGaWVsZDogZnVuY3Rpb24gKHJvbGVzKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocm9sZXMpICYmICh0eXBlb2Ygcm9sZXNbMF0gPT09ICdvYmplY3QnKVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc09sZEZpZWxkXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJvbGVzIGBNZXRlb3IudXNlcnNgIGRvY3VtZW50IGByb2xlc2AgZmllbGQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBgcm9sZXNgIGZpZWxkIGlzIGluIHRoZSBvbGQgZm9ybWF0LlxuICAgKiAgICAgICAgICAgICAgICAgICBJZiBpdCBpcyBhbWJpZ3VvdXMgb3IgaXQgaXMgbm90LCByZXR1cm5zIGBmYWxzZWAuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2lzT2xkRmllbGQ6IGZ1bmN0aW9uIChyb2xlcykge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShyb2xlcykgJiYgKHR5cGVvZiByb2xlc1swXSA9PT0gJ3N0cmluZycpKSB8fCAoKHR5cGVvZiByb2xlcyA9PT0gJ29iamVjdCcpICYmICFBcnJheS5pc0FycmF5KHJvbGVzKSlcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfY29udmVydFRvTmV3Um9sZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2xkUm9sZSBgTWV0ZW9yLnJvbGVzYCBkb2N1bWVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBDb252ZXJ0ZWQgYHJvbGVgIHRvIHRoZSBuZXcgZm9ybWF0LlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9jb252ZXJ0VG9OZXdSb2xlOiBmdW5jdGlvbiAob2xkUm9sZSkge1xuICAgIGlmICghKHR5cGVvZiBvbGRSb2xlLm5hbWUgPT09ICdzdHJpbmcnKSkgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSBuYW1lICdcIiArIG9sZFJvbGUubmFtZSArIFwiJyBpcyBub3QgYSBzdHJpbmcuXCIpXG5cbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBvbGRSb2xlLm5hbWUsXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbnZlcnRUb09sZFJvbGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG5ld1JvbGUgYE1ldGVvci5yb2xlc2AgZG9jdW1lbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQ29udmVydGVkIGByb2xlYCB0byB0aGUgb2xkIGZvcm1hdC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfY29udmVydFRvT2xkUm9sZTogZnVuY3Rpb24gKG5ld1JvbGUpIHtcbiAgICBpZiAoISh0eXBlb2YgbmV3Um9sZS5faWQgPT09ICdzdHJpbmcnKSkgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSBuYW1lICdcIiArIG5ld1JvbGUuX2lkICsgXCInIGlzIG5vdCBhIHN0cmluZy5cIilcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuZXdSb2xlLl9pZFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfY29udmVydFRvTmV3RmllbGRcbiAgICogQHBhcmFtIHtBcnJheX0gb2xkUm9sZXMgYE1ldGVvci51c2Vyc2AgZG9jdW1lbnQgYHJvbGVzYCBmaWVsZCBpbiB0aGUgb2xkIGZvcm1hdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBjb252ZXJ0VW5kZXJzY29yZXNUb0RvdHMgU2hvdWxkIHdlIGNvbnZlcnQgdW5kZXJzY29yZXMgdG8gZG90cyBpbiBncm91cCBuYW1lcy5cbiAgICogQHJldHVybiB7QXJyYXl9IENvbnZlcnRlZCBgcm9sZXNgIHRvIHRoZSBuZXcgZm9ybWF0LlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9jb252ZXJ0VG9OZXdGaWVsZDogZnVuY3Rpb24gKG9sZFJvbGVzLCBjb252ZXJ0VW5kZXJzY29yZXNUb0RvdHMpIHtcbiAgICB2YXIgcm9sZXMgPSBbXVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFJvbGVzKSkge1xuICAgICAgb2xkUm9sZXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIHJvbGUgPT09ICdzdHJpbmcnKSkgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSAnXCIgKyByb2xlICsgXCInIGlzIG5vdCBhIHN0cmluZy5cIilcblxuICAgICAgICByb2xlcy5wdXNoKHtcbiAgICAgICAgICBfaWQ6IHJvbGUsXG4gICAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgICAgYXNzaWduZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2xkUm9sZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhvbGRSb2xlcykuZm9yRWFjaCgoW2dyb3VwLCByb2xlc0FycmF5XSkgPT4ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09ICdfX2dsb2JhbF9yb2xlc19fJykge1xuICAgICAgICAgIGdyb3VwID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cykge1xuICAgICAgICAgIC8vIHVuZXNjYXBlXG4gICAgICAgICAgZ3JvdXAgPSBncm91cC5yZXBsYWNlKC9fL2csICcuJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvbGVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICAgIGlmICghKHR5cGVvZiByb2xlID09PSAnc3RyaW5nJykpIHRocm93IG5ldyBFcnJvcihcIlJvbGUgJ1wiICsgcm9sZSArIFwiJyBpcyBub3QgYSBzdHJpbmcuXCIpXG5cbiAgICAgICAgICByb2xlcy5wdXNoKHtcbiAgICAgICAgICAgIF9pZDogcm9sZSxcbiAgICAgICAgICAgIHNjb3BlOiBncm91cCxcbiAgICAgICAgICAgIGFzc2lnbmVkOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByb2xlc1xuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb252ZXJ0VG9PbGRGaWVsZFxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdSb2xlcyBgTWV0ZW9yLnVzZXJzYCBkb2N1bWVudCBgcm9sZXNgIGZpZWxkIGluIHRoZSBuZXcgZm9ybWF0LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHVzaW5nR3JvdXBzIFNob3VsZCB3ZSB1c2UgZ3JvdXBzIG9yIG5vdC5cbiAgICogQHJldHVybiB7QXJyYXl9IENvbnZlcnRlZCBgcm9sZXNgIHRvIHRoZSBvbGQgZm9ybWF0LlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9jb252ZXJ0VG9PbGRGaWVsZDogZnVuY3Rpb24gKG5ld1JvbGVzLCB1c2luZ0dyb3Vwcykge1xuICAgIHZhciByb2xlc1xuXG4gICAgaWYgKHVzaW5nR3JvdXBzKSB7XG4gICAgICByb2xlcyA9IHt9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvbGVzID0gW11cbiAgICB9XG5cbiAgICBuZXdSb2xlcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyUm9sZSkge1xuICAgICAgaWYgKCEodHlwZW9mIHVzZXJSb2xlID09PSAnb2JqZWN0JykpIHRocm93IG5ldyBFcnJvcihcIlJvbGUgJ1wiICsgdXNlclJvbGUgKyBcIicgaXMgbm90IGFuIG9iamVjdC5cIilcblxuICAgICAgLy8gV2UgYXNzdW1lIHRoYXQgd2UgYXJlIGNvbnZlcnRpbmcgYmFjayBhIGZhaWxlZCBtaWdyYXRpb24sIHNvIHZhbHVlcyBjYW4gb25seSBiZVxuICAgICAgLy8gd2hhdCB3ZXJlIHZhbGlkIHZhbHVlcyBpbiAxLjAuIFNvIG5vIGdyb3VwIG5hbWVzIHN0YXJ0aW5nIHdpdGggJCBhbmQgbm8gc3Vicm9sZXMuXG5cbiAgICAgIGlmICh1c2VyUm9sZS5zY29wZSkge1xuICAgICAgICBpZiAoIXVzaW5nR3JvdXBzKSB0aHJvdyBuZXcgRXJyb3IoXCJSb2xlICdcIiArIHVzZXJSb2xlLl9pZCArIFwiJyB3aXRoIHNjb3BlICdcIiArIHVzZXJSb2xlLnNjb3BlICsgXCInIHdpdGhvdXQgZW5hYmxlZCBncm91cHMuXCIpXG5cbiAgICAgICAgLy8gZXNjYXBlXG4gICAgICAgIHZhciBzY29wZSA9IHVzZXJSb2xlLnNjb3BlLnJlcGxhY2UoL1xcLi9nLCAnXycpXG5cbiAgICAgICAgaWYgKHNjb3BlWzBdID09PSAnJCcpIHRocm93IG5ldyBFcnJvcihcIkdyb3VwIG5hbWUgJ1wiICsgc2NvcGUgKyBcIicgc3RhcnQgd2l0aCAkLlwiKVxuXG4gICAgICAgIHJvbGVzW3Njb3BlXSA9IHJvbGVzW3Njb3BlXSB8fCBbXVxuICAgICAgICByb2xlc1tzY29wZV0ucHVzaCh1c2VyUm9sZS5faWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodXNpbmdHcm91cHMpIHtcbiAgICAgICAgICByb2xlcy5fX2dsb2JhbF9yb2xlc19fID0gcm9sZXMuX19nbG9iYWxfcm9sZXNfXyB8fCBbXVxuICAgICAgICAgIHJvbGVzLl9fZ2xvYmFsX3JvbGVzX18ucHVzaCh1c2VyUm9sZS5faWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm9sZXMucHVzaCh1c2VyUm9sZS5faWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByb2xlc1xuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9kZWZhdWx0VXBkYXRlVXNlclxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlciBgTWV0ZW9yLnVzZXJzYCBkb2N1bWVudC5cbiAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHJvbGVzIFZhbHVlIHRvIHdoaWNoIHVzZXIncyBgcm9sZXNgIGZpZWxkIHNob3VsZCBiZSBzZXQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2RlZmF1bHRVcGRhdGVVc2VyOiBmdW5jdGlvbiAodXNlciwgcm9sZXMpIHtcbiAgICBNZXRlb3IudXNlcnMudXBkYXRlKHtcbiAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICAvLyBtYWtpbmcgc3VyZSBub3RoaW5nIGNoYW5nZWQgaW4gbWVhbnRpbWVcbiAgICAgIHJvbGVzOiB1c2VyLnJvbGVzXG4gICAgfSwge1xuICAgICAgJHNldDogeyByb2xlcyB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogQG1ldGhvZCBfZGVmYXVsdFVwZGF0ZVJvbGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9sZFJvbGUgT2xkIGBNZXRlb3Iucm9sZXNgIGRvY3VtZW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Um9sZSBOZXcgYE1ldGVvci5yb2xlc2AgZG9jdW1lbnQuXG4gICAqIEBmb3IgUm9sZXNcbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgX2RlZmF1bHRVcGRhdGVSb2xlOiBmdW5jdGlvbiAob2xkUm9sZSwgbmV3Um9sZSkge1xuICAgIE1ldGVvci5yb2xlcy5yZW1vdmUob2xkUm9sZS5faWQpXG4gICAgTWV0ZW9yLnJvbGVzLmluc2VydChuZXdSb2xlKVxuICB9LFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9kcm9wQ29sbGVjdGlvbkluZGV4XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb2xsZWN0aW9uIENvbGxlY3Rpb24gb24gd2hpY2ggdG8gZHJvcCB0aGUgaW5kZXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggdG8gZHJvcC5cbiAgICogQGZvciBSb2xlc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBfZHJvcENvbGxlY3Rpb25JbmRleDogZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGluZGV4TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb2xsZWN0aW9uLl9kcm9wSW5kZXgoaW5kZXhOYW1lKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdNb25nb0Vycm9yJykgdGhyb3cgZVxuICAgICAgaWYgKCEvaW5kZXggbm90IGZvdW5kLy50ZXN0KGUuZXJyIHx8IGUuZXJybXNnKSkgdGhyb3cgZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTWlncmF0ZXMgYE1ldGVvci51c2Vyc2AgYW5kIGBNZXRlb3Iucm9sZXNgIHRvIHRoZSBuZXcgZm9ybWF0LlxuICAgKlxuICAgKiBAbWV0aG9kIF9mb3J3YXJkTWlncmF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB1cGRhdGVVc2VyIEZ1bmN0aW9uIHdoaWNoIHVwZGF0ZXMgdGhlIHVzZXIgb2JqZWN0LiBEZWZhdWx0IGBfZGVmYXVsdFVwZGF0ZVVzZXJgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB1cGRhdGVSb2xlIEZ1bmN0aW9uIHdoaWNoIHVwZGF0ZXMgdGhlIHJvbGUgb2JqZWN0LiBEZWZhdWx0IGBfZGVmYXVsdFVwZGF0ZVJvbGVgLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cyBTaG91bGQgd2UgY29udmVydCB1bmRlcnNjb3JlcyB0byBkb3RzIGluIGdyb3VwIG5hbWVzLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9mb3J3YXJkTWlncmF0ZTogZnVuY3Rpb24gKHVwZGF0ZVVzZXIsIHVwZGF0ZVJvbGUsIGNvbnZlcnRVbmRlcnNjb3Jlc1RvRG90cykge1xuICAgIHVwZGF0ZVVzZXIgPSB1cGRhdGVVc2VyIHx8IFJvbGVzLl9kZWZhdWx0VXBkYXRlVXNlclxuICAgIHVwZGF0ZVJvbGUgPSB1cGRhdGVSb2xlIHx8IFJvbGVzLl9kZWZhdWx0VXBkYXRlUm9sZVxuXG4gICAgUm9sZXMuX2Ryb3BDb2xsZWN0aW9uSW5kZXgoTWV0ZW9yLnJvbGVzLCAnbmFtZV8xJylcblxuICAgIE1ldGVvci5yb2xlcy5maW5kKCkuZm9yRWFjaChmdW5jdGlvbiAocm9sZSwgaW5kZXgsIGN1cnNvcikge1xuICAgICAgaWYgKCFSb2xlcy5faXNOZXdSb2xlKHJvbGUpKSB7XG4gICAgICAgIHVwZGF0ZVJvbGUocm9sZSwgUm9sZXMuX2NvbnZlcnRUb05ld1JvbGUocm9sZSkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIE1ldGVvci51c2Vycy5maW5kKCkuZm9yRWFjaChmdW5jdGlvbiAodXNlciwgaW5kZXgsIGN1cnNvcikge1xuICAgICAgaWYgKCFSb2xlcy5faXNOZXdGaWVsZCh1c2VyLnJvbGVzKSkge1xuICAgICAgICB1cGRhdGVVc2VyKHVzZXIsIFJvbGVzLl9jb252ZXJ0VG9OZXdGaWVsZCh1c2VyLnJvbGVzLCBjb252ZXJ0VW5kZXJzY29yZXNUb0RvdHMpKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBhc3NpZ25tZW50cyBmcm9tIGBNZXRlb3IudXNlcnNgIHRvIGBNZXRlb3Iucm9sZUFzc2lnbm1lbnRgLlxuICAgKlxuICAgKiBAbWV0aG9kIF9mb3J3YXJkTWlncmF0ZTJcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJTZWxlY3RvciBBbiBvcHBvcnR1bml0eSB0byBzaGFyZSB0aGUgd29yayBhbW9uZyBpbnN0YW5jZXMuIEl0J3MgYWR2aXNhYmxlIHRvIGRvIHRoZSBkaXZpc2lvbiBiYXNlZCBvbiB1c2VyLWlkLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9mb3J3YXJkTWlncmF0ZTI6IGZ1bmN0aW9uICh1c2VyU2VsZWN0b3IpIHtcbiAgICB1c2VyU2VsZWN0b3IgPSB1c2VyU2VsZWN0b3IgfHwge31cbiAgICBPYmplY3QuYXNzaWduKHVzZXJTZWxlY3RvciwgeyByb2xlczogeyAkbmU6IG51bGwgfSB9KVxuXG4gICAgTWV0ZW9yLnVzZXJzLmZpbmQodXNlclNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyLCBpbmRleCkge1xuICAgICAgdXNlci5yb2xlcy5maWx0ZXIoKHIpID0+IHIuYXNzaWduZWQpLmZvckVhY2gociA9PiB7XG4gICAgICAgIC8vIEFkZGVkIGBpZkV4aXN0c2AgdG8gbWFrZSBpdCBsZXNzIGVycm9yLXByb25lXG4gICAgICAgIFJvbGVzLl9hZGRVc2VyVG9Sb2xlKHVzZXIuX2lkLCByLl9pZCwgeyBzY29wZTogci5zY29wZSwgaWZFeGlzdHM6IHRydWUgfSlcbiAgICAgIH0pXG5cbiAgICAgIE1ldGVvci51c2Vycy51cGRhdGUoeyBfaWQ6IHVzZXIuX2lkIH0sIHsgJHVuc2V0OiB7IHJvbGVzOiAnJyB9IH0pXG4gICAgfSlcblxuICAgIC8vIE5vIG5lZWQgdG8ga2VlcCB0aGUgaW5kZXhlcyBhcm91bmRcbiAgICBSb2xlcy5fZHJvcENvbGxlY3Rpb25JbmRleChNZXRlb3IudXNlcnMsICdyb2xlcy5faWRfMV9yb2xlcy5zY29wZV8xJylcbiAgICBSb2xlcy5fZHJvcENvbGxlY3Rpb25JbmRleChNZXRlb3IudXNlcnMsICdyb2xlcy5zY29wZV8xJylcbiAgfSxcblxuICAvKipcbiAgICogTWlncmF0ZXMgYE1ldGVvci51c2Vyc2AgYW5kIGBNZXRlb3Iucm9sZXNgIHRvIHRoZSBvbGQgZm9ybWF0LlxuICAgKlxuICAgKiBXZSBhc3N1bWUgdGhhdCB3ZSBhcmUgY29udmVydGluZyBiYWNrIGEgZmFpbGVkIG1pZ3JhdGlvbiwgc28gdmFsdWVzIGNhbiBvbmx5IGJlXG4gICAqIHdoYXQgd2VyZSB2YWxpZCB2YWx1ZXMgaW4gdGhlIG9sZCBmb3JtYXQuIFNvIG5vIGdyb3VwIG5hbWVzIHN0YXJ0aW5nIHdpdGggYCRgIGFuZFxuICAgKiBubyBzdWJyb2xlcy5cbiAgICpcbiAgICogQG1ldGhvZCBfYmFja3dhcmRNaWdyYXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZVVzZXIgRnVuY3Rpb24gd2hpY2ggdXBkYXRlcyB0aGUgdXNlciBvYmplY3QuIERlZmF1bHQgYF9kZWZhdWx0VXBkYXRlVXNlcmAuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHVwZGF0ZVJvbGUgRnVuY3Rpb24gd2hpY2ggdXBkYXRlcyB0aGUgcm9sZSBvYmplY3QuIERlZmF1bHQgYF9kZWZhdWx0VXBkYXRlUm9sZWAuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNpbmdHcm91cHMgU2hvdWxkIHdlIHVzZSBncm91cHMgb3Igbm90LlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9iYWNrd2FyZE1pZ3JhdGU6IGZ1bmN0aW9uICh1cGRhdGVVc2VyLCB1cGRhdGVSb2xlLCB1c2luZ0dyb3Vwcykge1xuICAgIHVwZGF0ZVVzZXIgPSB1cGRhdGVVc2VyIHx8IFJvbGVzLl9kZWZhdWx0VXBkYXRlVXNlclxuICAgIHVwZGF0ZVJvbGUgPSB1cGRhdGVSb2xlIHx8IFJvbGVzLl9kZWZhdWx0VXBkYXRlUm9sZVxuXG4gICAgUm9sZXMuX2Ryb3BDb2xsZWN0aW9uSW5kZXgoTWV0ZW9yLnVzZXJzLCAncm9sZXMuX2lkXzFfcm9sZXMuc2NvcGVfMScpXG4gICAgUm9sZXMuX2Ryb3BDb2xsZWN0aW9uSW5kZXgoTWV0ZW9yLnVzZXJzLCAncm9sZXMuc2NvcGVfMScpXG5cbiAgICBNZXRlb3Iucm9sZXMuZmluZCgpLmZvckVhY2goZnVuY3Rpb24gKHJvbGUsIGluZGV4LCBjdXJzb3IpIHtcbiAgICAgIGlmICghUm9sZXMuX2lzT2xkUm9sZShyb2xlKSkge1xuICAgICAgICB1cGRhdGVSb2xlKHJvbGUsIFJvbGVzLl9jb252ZXJ0VG9PbGRSb2xlKHJvbGUpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBNZXRlb3IudXNlcnMuZmluZCgpLmZvckVhY2goZnVuY3Rpb24gKHVzZXIsIGluZGV4LCBjdXJzb3IpIHtcbiAgICAgIGlmICghUm9sZXMuX2lzT2xkRmllbGQodXNlci5yb2xlcykpIHtcbiAgICAgICAgdXBkYXRlVXNlcih1c2VyLCBSb2xlcy5fY29udmVydFRvT2xkRmllbGQodXNlci5yb2xlcywgdXNpbmdHcm91cHMpKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBhc3NpZ25tZW50cyBmcm9tIGBNZXRlb3Iucm9sZUFzc2lnbm1lbnRgIGJhY2sgdG8gdG8gYE1ldGVvci51c2Vyc2AuXG4gICAqXG4gICAqIEBtZXRob2QgX2JhY2t3YXJkTWlncmF0ZTJcbiAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnRTZWxlY3RvciBBbiBvcHBvcnR1bml0eSB0byBzaGFyZSB0aGUgd29yayBhbW9uZyBpbnN0YW5jZXMuIEl0J3MgYWR2aXNhYmxlIHRvIGRvIHRoZSBkaXZpc2lvbiBiYXNlZCBvbiB1c2VyLWlkLlxuICAgKiBAZm9yIFJvbGVzXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIF9iYWNrd2FyZE1pZ3JhdGUyOiBmdW5jdGlvbiAoYXNzaWdubWVudFNlbGVjdG9yKSB7XG4gICAgYXNzaWdubWVudFNlbGVjdG9yID0gYXNzaWdubWVudFNlbGVjdG9yIHx8IHt9XG5cbiAgICBNZXRlb3IudXNlcnMuX2Vuc3VyZUluZGV4KHsgJ3JvbGVzLl9pZCc6IDEsICdyb2xlcy5zY29wZSc6IDEgfSlcbiAgICBNZXRlb3IudXNlcnMuX2Vuc3VyZUluZGV4KHsgJ3JvbGVzLnNjb3BlJzogMSB9KVxuXG4gICAgTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoYXNzaWdubWVudFNlbGVjdG9yKS5mb3JFYWNoKHIgPT4ge1xuICAgICAgY29uc3Qgcm9sZXMgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7IF9pZDogci51c2VyLl9pZCB9KS5yb2xlcyB8fCBbXVxuXG4gICAgICBjb25zdCBjdXJyZW50Um9sZSA9IHJvbGVzLmZpbmQob2xkUm9sZSA9PiBvbGRSb2xlLl9pZCA9PT0gci5yb2xlLl9pZCAmJiBvbGRSb2xlLnNjb3BlID09PSByLnNjb3BlKVxuICAgICAgaWYgKGN1cnJlbnRSb2xlKSB7XG4gICAgICAgIGN1cnJlbnRSb2xlLmFzc2lnbmVkID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9sZXMucHVzaCh7XG4gICAgICAgICAgX2lkOiByLnJvbGUuX2lkLFxuICAgICAgICAgIHNjb3BlOiByLnNjb3BlLFxuICAgICAgICAgIGFzc2lnbmVkOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgci5pbmhlcml0ZWRSb2xlcy5mb3JFYWNoKGluaGVyaXRlZFJvbGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmhlcml0ZWRSb2xlID0gcm9sZXMuZmluZChvbGRSb2xlID0+IG9sZFJvbGUuX2lkID09PSBpbmhlcml0ZWRSb2xlLl9pZCAmJiBvbGRSb2xlLnNjb3BlID09PSByLnNjb3BlKVxuXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW5oZXJpdGVkUm9sZSkge1xuICAgICAgICAgICAgcm9sZXMucHVzaCh7XG4gICAgICAgICAgICAgIF9pZDogaW5oZXJpdGVkUm9sZS5faWQsXG4gICAgICAgICAgICAgIHNjb3BlOiByLnNjb3BlLFxuICAgICAgICAgICAgICBhc3NpZ25lZDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHsgX2lkOiByLnVzZXIuX2lkIH0sIHsgJHNldDogeyByb2xlcyB9IH0pXG4gICAgICBNZXRlb3Iucm9sZUFzc2lnbm1lbnQucmVtb3ZlKHsgX2lkOiByLl9pZCB9KVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=
