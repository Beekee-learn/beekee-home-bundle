(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var check = Package.check.check;
var Match = Package.check.Match;
var ObserveSequence = Package['observe-sequence'].ObserveSequence;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var OrderedDict = Package['ordered-dict'].OrderedDict;
var ECMAScript = Package.ecmascript.ECMAScript;
var HTML = Package.htmljs.HTML;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Blaze, UI, Handlebars;

var require = meteorInstall({"node_modules":{"meteor":{"blaze":{"preamble.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/preamble.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**
 * @namespace Blaze
 * @summary The namespace for all Blaze-related methods and classes.
 */
Blaze = {};

// Utility to HTML-escape a string.  Included for legacy reasons.
// TODO: Should be replaced with _.escape once underscore is upgraded to a newer
//       version which escapes ` (backtick) as well. Underscore 1.5.2 does not.
Blaze._escape = function () {
  const escape_map = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "`": "&#x60;",
    /* IE allows backtick-delimited attributes?? */
    "&": "&amp;"
  };
  const escape_one = function (c) {
    return escape_map[c];
  };
  return function (x) {
    return x.replace(/[&<>"'`]/g, escape_one);
  };
}();
Blaze._warn = function (msg) {
  msg = 'Warning: ' + msg;
  if (typeof console !== 'undefined' && console.warn) {
    console.warn(msg);
  }
};
const nativeBind = Function.prototype.bind;

// An implementation of _.bind which allows better optimization.
// See: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
if (nativeBind) {
  Blaze._bind = function (func, obj) {
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    if (arguments.length === 2) {
      return nativeBind.call(func, obj);
    }
    const args = [obj, ...rest];
    return nativeBind.apply(func, args);
  };
} else {
  // A slower but backwards compatible version.
  Blaze._bind = function (objA, objB) {
    objA.bind(objB);
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"exceptions.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/exceptions.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let debugFunc;

// We call into user code in many places, and it's nice to catch exceptions
// propagated from user code immediately so that the whole system doesn't just
// break.  Catching exceptions is easy; reporting them is hard.  This helper
// reports exceptions.
//
// Usage:
//
// ```
// try {
//   // ... someStuff ...
// } catch (e) {
//   reportUIException(e);
// }
// ```
//
// An optional second argument overrides the default message.

// Set this to `true` to cause `reportException` to throw
// the next exception rather than reporting it.  This is
// useful in unit tests that test error messages.
Blaze._throwNextException = false;
Blaze._reportException = function (e, msg) {
  if (Blaze._throwNextException) {
    Blaze._throwNextException = false;
    throw e;
  }
  if (!debugFunc)
    // adapted from Tracker
    debugFunc = function () {
      return typeof Meteor !== "undefined" ? Meteor._debug : typeof console !== "undefined" && console.log ? console.log : function () {};
    };

  // In Chrome, `e.stack` is a multiline string that starts with the message
  // and contains a stack trace.  Furthermore, `console.log` makes it clickable.
  // `console.log` supplies the space between the two arguments.
  debugFunc()(msg || 'Exception caught in template:', e.stack || e.message || e);
};
Blaze._wrapCatchingExceptions = function (f, where) {
  if (typeof f !== 'function') return f;
  return function () {
    try {
      for (var _len = arguments.length, _arguments = new Array(_len), _key = 0; _key < _len; _key++) {
        _arguments[_key] = arguments[_key];
      }
      return f.apply(this, _arguments);
    } catch (e) {
      Blaze._reportException(e, 'Exception in ' + where + ':');
    }
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"view.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/view.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let HTML;
module.link("meteor/htmljs", {
  HTML(v) {
    HTML = v;
  }
}, 0);
/**
 * A binding is either `undefined` (pending), `{ error }` (rejected), or
 * `{ value }` (resolved). Synchronous values are immediately resolved (i.e.,
 * `{ value }` is used). The other states are reserved for asynchronous bindings
 * (i.e., values wrapped with `Promise`s).
 * @typedef {{ error: unknown } | { value: unknown } | undefined} Binding
 */

/**
 * @class
 * @summary Constructor for a View, which represents a reactive region of DOM.
 * @locus Client
 * @param {String} [name] Optional.  A name for this type of View.  See [`view.name`](#view_name).
 * @param {Function} renderFunction A function that returns [*renderable content*](#Renderable-Content).  In this function, `this` is bound to the View.
 */
Blaze.View = function (name, render) {
  if (!(this instanceof Blaze.View))
    // called without `new`
    return new Blaze.View(name, render);
  if (typeof name === 'function') {
    // omitted "name" argument
    render = name;
    name = '';
  }
  this.name = name;
  this._render = render;
  this._callbacks = {
    created: null,
    rendered: null,
    destroyed: null
  };

  // Setting all properties here is good for readability,
  // and also may help Chrome optimize the code by keeping
  // the View object from changing shape too much.
  this.isCreated = false;
  this._isCreatedForExpansion = false;
  this.isRendered = false;
  this._isAttached = false;
  this.isDestroyed = false;
  this._isInRender = false;
  this.parentView = null;
  this._domrange = null;
  // This flag is normally set to false except for the cases when view's parent
  // was generated as part of expanding some syntactic sugar expressions or
  // methods.
  // Ex.: Blaze.renderWithData is an equivalent to creating a view with regular
  // Blaze.render and wrapping it into {{#with data}}{{/with}} view. Since the
  // users don't know anything about these generated parent views, Blaze needs
  // this information to be available on views to make smarter decisions. For
  // example: removing the generated parent view with the view on Blaze.remove.
  this._hasGeneratedParent = false;
  // Bindings accessible to children views (via view.lookup('name')) within the
  // closest template view.
  /** @type {Record<string, ReactiveVar<Binding>>} */
  this._scopeBindings = {};
  this.renderCount = 0;
};
Blaze.View.prototype._render = function () {
  return null;
};
Blaze.View.prototype.onViewCreated = function (cb) {
  this._callbacks.created = this._callbacks.created || [];
  this._callbacks.created.push(cb);
};
Blaze.View.prototype._onViewRendered = function (cb) {
  this._callbacks.rendered = this._callbacks.rendered || [];
  this._callbacks.rendered.push(cb);
};
Blaze.View.prototype.onViewReady = function (cb) {
  const self = this;
  const fire = function () {
    Tracker.afterFlush(function () {
      if (!self.isDestroyed) {
        Blaze._withCurrentView(self, function () {
          cb.call(self);
        });
      }
    });
  };
  self._onViewRendered(function onViewRendered() {
    if (self.isDestroyed) return;
    if (!self._domrange.attached) self._domrange.onAttached(fire);else fire();
  });
};
Blaze.View.prototype.onViewDestroyed = function (cb) {
  this._callbacks.destroyed = this._callbacks.destroyed || [];
  this._callbacks.destroyed.push(cb);
};
Blaze.View.prototype.removeViewDestroyedListener = function (cb) {
  const destroyed = this._callbacks.destroyed;
  if (!destroyed) return;
  const index = destroyed.lastIndexOf(cb);
  if (index !== -1) {
    // XXX You'd think the right thing to do would be splice, but _fireCallbacks
    // gets sad if you remove callbacks while iterating over the list.  Should
    // change this to use callback-hook or EventEmitter or something else that
    // properly supports removal.
    destroyed[index] = null;
  }
};

/// View#autorun(func)
///
/// Sets up a Tracker autorun that is "scoped" to this View in two
/// important ways: 1) Blaze.currentView is automatically set
/// on every re-run, and 2) the autorun is stopped when the
/// View is destroyed.  As with Tracker.autorun, the first run of
/// the function is immediate, and a Computation object that can
/// be used to stop the autorun is returned.
///
/// View#autorun is meant to be called from View callbacks like
/// onViewCreated, or from outside the rendering process.  It may not
/// be called before the onViewCreated callbacks are fired (too early),
/// or from a render() method (too confusing).
///
/// Typically, autoruns that update the state
/// of the View (as in Blaze.With) should be started from an onViewCreated
/// callback.  Autoruns that update the DOM should be started
/// from either onViewCreated (guarded against the absence of
/// view._domrange), or onViewReady.
Blaze.View.prototype.autorun = function (f, _inViewScope, displayName) {
  const self = this;

  // The restrictions on when View#autorun can be called are in order
  // to avoid bad patterns, like creating a Blaze.View and immediately
  // calling autorun on it.  A freshly created View is not ready to
  // have logic run on it; it doesn't have a parentView, for example.
  // It's when the View is materialized or expanded that the onViewCreated
  // handlers are fired and the View starts up.
  //
  // Letting the render() method call `this.autorun()` is problematic
  // because of re-render.  The best we can do is to stop the old
  // autorun and start a new one for each render, but that's a pattern
  // we try to avoid internally because it leads to helpers being
  // called extra times, in the case where the autorun causes the
  // view to re-render (and thus the autorun to be torn down and a
  // new one established).
  //
  // We could lift these restrictions in various ways.  One interesting
  // idea is to allow you to call `view.autorun` after instantiating
  // `view`, and automatically wrap it in `view.onViewCreated`, deferring
  // the autorun so that it starts at an appropriate time.  However,
  // then we can't return the Computation object to the caller, because
  // it doesn't exist yet.
  if (!self.isCreated) {
    throw new Error("View#autorun must be called from the created callback at the earliest");
  }
  if (this._isInRender) {
    throw new Error("Can't call View#autorun from inside render(); try calling it from the created or rendered callback");
  }
  const templateInstanceFunc = Blaze.Template._currentTemplateInstanceFunc;
  const func = function viewAutorun(c) {
    return Blaze._withCurrentView(_inViewScope || self, function () {
      return Blaze.Template._withTemplateInstanceFunc(templateInstanceFunc, function () {
        return f.call(self, c);
      });
    });
  };

  // Give the autorun function a better name for debugging and profiling.
  // The `displayName` property is not part of the spec but browsers like Chrome
  // and Firefox prefer it in debuggers over the name function was declared by.
  func.displayName = (self.name || 'anonymous') + ':' + (displayName || 'anonymous');
  const comp = Tracker.autorun(func);
  const stopComputation = function () {
    comp.stop();
  };
  self.onViewDestroyed(stopComputation);
  comp.onStop(function () {
    self.removeViewDestroyedListener(stopComputation);
  });
  return comp;
};
Blaze.View.prototype._errorIfShouldntCallSubscribe = function () {
  const self = this;
  if (!self.isCreated) {
    throw new Error("View#subscribe must be called from the created callback at the earliest");
  }
  if (self._isInRender) {
    throw new Error("Can't call View#subscribe from inside render(); try calling it from the created or rendered callback");
  }
  if (self.isDestroyed) {
    throw new Error("Can't call View#subscribe from inside the destroyed callback, try calling it inside created or rendered.");
  }
};

/**
 * Just like Blaze.View#autorun, but with Meteor.subscribe instead of
 * Tracker.autorun. Stop the subscription when the view is destroyed.
 * @return {SubscriptionHandle} A handle to the subscription so that you can
 * see if it is ready, or stop it manually
 */
Blaze.View.prototype.subscribe = function (args, options) {
  const self = this;
  options = options || {};
  self._errorIfShouldntCallSubscribe();
  let subHandle;
  if (options.connection) {
    subHandle = options.connection.subscribe.apply(options.connection, args);
  } else {
    subHandle = Meteor.subscribe.apply(Meteor, args);
  }
  self.onViewDestroyed(function () {
    subHandle.stop();
  });
  return subHandle;
};
Blaze.View.prototype.firstNode = function () {
  if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
  return this._domrange.firstNode();
};
Blaze.View.prototype.lastNode = function () {
  if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
  return this._domrange.lastNode();
};
Blaze._fireCallbacks = function (view, which) {
  Blaze._withCurrentView(view, function () {
    Tracker.nonreactive(function fireCallbacks() {
      const cbs = view._callbacks[which];
      for (let i = 0, N = cbs && cbs.length; i < N; i++) cbs[i] && cbs[i].call(view);
    });
  });
};
Blaze._createView = function (view, parentView, forExpansion) {
  if (view.isCreated) throw new Error("Can't render the same View twice");
  view.parentView = parentView || null;
  view.isCreated = true;
  if (forExpansion) view._isCreatedForExpansion = true;
  Blaze._fireCallbacks(view, 'created');
};
const doFirstRender = function (view, initialContent) {
  const domrange = new Blaze._DOMRange(initialContent);
  view._domrange = domrange;
  domrange.view = view;
  view.isRendered = true;
  Blaze._fireCallbacks(view, 'rendered');
  let teardownHook = null;
  domrange.onAttached(function attached(range, element) {
    view._isAttached = true;
    teardownHook = Blaze._DOMBackend.Teardown.onElementTeardown(element, function teardown() {
      Blaze._destroyView(view, true /* _skipNodes */);
    });
  });

  // tear down the teardown hook
  view.onViewDestroyed(function () {
    if (teardownHook) teardownHook.stop();
    teardownHook = null;
  });
  return domrange;
};

// Take an uncreated View `view` and create and render it to DOM,
// setting up the autorun that updates the View.  Returns a new
// DOMRange, which has been associated with the View.
//
// The private arguments `_workStack` and `_intoArray` are passed in
// by Blaze._materializeDOM and are only present for recursive calls
// (when there is some other _materializeView on the stack).  If
// provided, then we avoid the mutual recursion of calling back into
// Blaze._materializeDOM so that deep View hierarchies don't blow the
// stack.  Instead, we push tasks onto workStack for the initial
// rendering and subsequent setup of the View, and they are done after
// we return.  When there is a _workStack, we do not return the new
// DOMRange, but instead push it into _intoArray from a _workStack
// task.
Blaze._materializeView = function (view, parentView, _workStack, _intoArray) {
  Blaze._createView(view, parentView);
  let domrange;
  let lastHtmljs;
  // We don't expect to be called in a Computation, but just in case,
  // wrap in Tracker.nonreactive.
  Tracker.nonreactive(function () {
    view.autorun(function doRender(c) {
      // `view.autorun` sets the current view.
      view.renderCount = view.renderCount + 1;
      view._isInRender = true;
      // Any dependencies that should invalidate this Computation come
      // from this line:
      const htmljs = view._render();
      view._isInRender = false;
      if (!c.firstRun && !Blaze._isContentEqual(lastHtmljs, htmljs)) {
        Tracker.nonreactive(function doMaterialize() {
          // re-render
          const rangesAndNodes = Blaze._materializeDOM(htmljs, [], view);
          domrange.setMembers(rangesAndNodes);
          Blaze._fireCallbacks(view, 'rendered');
        });
      }
      lastHtmljs = htmljs;

      // Causes any nested views to stop immediately, not when we call
      // `setMembers` the next time around the autorun.  Otherwise,
      // helpers in the DOM tree to be replaced might be scheduled
      // to re-run before we have a chance to stop them.
      Tracker.onInvalidate(function () {
        if (domrange) {
          domrange.destroyMembers();
        }
      });
    }, undefined, 'materialize');

    // first render.  lastHtmljs is the first htmljs.
    let initialContents;
    if (!_workStack) {
      initialContents = Blaze._materializeDOM(lastHtmljs, [], view);
      domrange = doFirstRender(view, initialContents);
      initialContents = null; // help GC because we close over this scope a lot
    } else {
      // We're being called from Blaze._materializeDOM, so to avoid
      // recursion and save stack space, provide a description of the
      // work to be done instead of doing it.  Tasks pushed onto
      // _workStack will be done in LIFO order after we return.
      // The work will still be done within a Tracker.nonreactive,
      // because it will be done by some call to Blaze._materializeDOM
      // (which is always called in a Tracker.nonreactive).
      initialContents = [];
      // push this function first so that it happens last
      _workStack.push(function () {
        domrange = doFirstRender(view, initialContents);
        initialContents = null; // help GC because of all the closures here
        _intoArray.push(domrange);
      });
      // now push the task that calculates initialContents
      _workStack.push(Blaze._bind(Blaze._materializeDOM, null, lastHtmljs, initialContents, view, _workStack));
    }
  });
  if (!_workStack) {
    return domrange;
  } else {
    return null;
  }
};

// Expands a View to HTMLjs, calling `render` recursively on all
// Views and evaluating any dynamic attributes.  Calls the `created`
// callback, but not the `materialized` or `rendered` callbacks.
// Destroys the view immediately, unless called in a Tracker Computation,
// in which case the view will be destroyed when the Computation is
// invalidated.  If called in a Tracker Computation, the result is a
// reactive string; that is, the Computation will be invalidated
// if any changes are made to the view or subviews that might affect
// the HTML.
Blaze._expandView = function (view, parentView) {
  Blaze._createView(view, parentView, true /*forExpansion*/);
  view._isInRender = true;
  const htmljs = Blaze._withCurrentView(view, function () {
    return view._render();
  });
  view._isInRender = false;
  const result = Blaze._expand(htmljs, view);
  if (Tracker.active) {
    Tracker.onInvalidate(function () {
      Blaze._destroyView(view);
    });
  } else {
    Blaze._destroyView(view);
  }
  return result;
};

// Options: `parentView`
Blaze._HTMLJSExpander = HTML.TransformingVisitor.extend();
Blaze._HTMLJSExpander.def({
  visitObject: function (x) {
    if (x instanceof Blaze.Template) x = x.constructView();
    if (x instanceof Blaze.View) return Blaze._expandView(x, this.parentView);

    // this will throw an error; other objects are not allowed!
    return HTML.TransformingVisitor.prototype.visitObject.call(this, x);
  },
  visitAttributes: function (attrs) {
    // expand dynamic attributes
    if (typeof attrs === 'function') attrs = Blaze._withCurrentView(this.parentView, attrs);

    // call super (e.g. for case where `attrs` is an array)
    return HTML.TransformingVisitor.prototype.visitAttributes.call(this, attrs);
  },
  visitAttribute: function (name, value, tag) {
    // expand attribute values that are functions.  Any attribute value
    // that contains Views must be wrapped in a function.
    if (typeof value === 'function') value = Blaze._withCurrentView(this.parentView, value);
    return HTML.TransformingVisitor.prototype.visitAttribute.call(this, name, value, tag);
  }
});

// Return Blaze.currentView, but only if it is being rendered
// (i.e. we are in its render() method).
const currentViewIfRendering = function () {
  const view = Blaze.currentView;
  return view && view._isInRender ? view : null;
};
Blaze._expand = function (htmljs, parentView) {
  parentView = parentView || currentViewIfRendering();
  return new Blaze._HTMLJSExpander({
    parentView: parentView
  }).visit(htmljs);
};
Blaze._expandAttributes = function (attrs, parentView) {
  parentView = parentView || currentViewIfRendering();
  return new Blaze._HTMLJSExpander({
    parentView: parentView
  }).visitAttributes(attrs);
};
Blaze._destroyView = function (view, _skipNodes) {
  if (view.isDestroyed) return;
  view.isDestroyed = true;

  // Destroy views and elements recursively.  If _skipNodes,
  // only recurse up to views, not elements, for the case where
  // the backend (jQuery) is recursing over the elements already.

  if (view._domrange) view._domrange.destroyMembers(_skipNodes);

  // XXX: fire callbacks after potential members are destroyed
  // otherwise it's tracker.flush will cause the above line will
  // not be called and their views won't be destroyed
  // Involved issues: DOMRange "Must be attached" error, mem leak

  Blaze._fireCallbacks(view, 'destroyed');
};
Blaze._destroyNode = function (node) {
  if (node.nodeType === 1) Blaze._DOMBackend.Teardown.tearDownElement(node);
};

// Are the HTMLjs entities `a` and `b` the same?  We could be
// more elaborate here but the point is to catch the most basic
// cases.
Blaze._isContentEqual = function (a, b) {
  if (a instanceof HTML.Raw) {
    return b instanceof HTML.Raw && a.value === b.value;
  } else if (a == null) {
    return b == null;
  } else {
    return a === b && (typeof a === 'number' || typeof a === 'boolean' || typeof a === 'string');
  }
};

/**
 * @summary The View corresponding to the current template helper, event handler, callback, or autorun.  If there isn't one, `null`.
 * @locus Client
 * @type {Blaze.View}
 */
Blaze.currentView = null;

/**
 * @template T
 * @param {Blaze.View} view
 * @param {() => T} func
 * @returns {T}
 */
Blaze._withCurrentView = function (view, func) {
  const oldView = Blaze.currentView;
  try {
    Blaze.currentView = view;
    return func();
  } finally {
    Blaze.currentView = oldView;
  }
};

// Blaze.render publicly takes a View or a Template.
// Privately, it takes any HTMLJS (extended with Views and Templates)
// except null or undefined, or a function that returns any extended
// HTMLJS.
const checkRenderContent = function (content) {
  if (content === null) throw new Error("Can't render null");
  if (typeof content === 'undefined') throw new Error("Can't render undefined");
  if (content instanceof Blaze.View || content instanceof Blaze.Template || typeof content === 'function') return;
  try {
    // Throw if content doesn't look like HTMLJS at the top level
    // (i.e. verify that this is an HTML.Tag, or an array,
    // or a primitive, etc.)
    new HTML.Visitor().visit(content);
  } catch (e) {
    // Make error message suitable for public API
    throw new Error("Expected Template or View");
  }
};

// For Blaze.render and Blaze.toHTML, take content and
// wrap it in a View, unless it's a single View or
// Template already.
const contentAsView = function (content) {
  checkRenderContent(content);
  if (content instanceof Blaze.Template) {
    return content.constructView();
  } else if (content instanceof Blaze.View) {
    return content;
  } else {
    let func = content;
    if (typeof func !== 'function') {
      func = function () {
        return content;
      };
    }
    return Blaze.View('render', func);
  }
};

// For Blaze.renderWithData and Blaze.toHTMLWithData, wrap content
// in a function, if necessary, so it can be a content arg to
// a Blaze.With.
const contentAsFunc = function (content) {
  checkRenderContent(content);
  if (typeof content !== 'function') {
    return function () {
      return content;
    };
  } else {
    return content;
  }
};
Blaze.__rootViews = [];

/**
 * @summary Renders a template or View to DOM nodes and inserts it into the DOM, returning a rendered [View](#Blaze-View) which can be passed to [`Blaze.remove`](#Blaze-remove).
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object to render.  If a template, a View object is [constructed](#template_constructview).  If a View, it must be an unrendered View, which becomes a rendered View and is returned.
 * @param {DOMNode} parentNode The node that will be the parent of the rendered template.  It must be an Element node.
 * @param {DOMNode} [nextNode] Optional. If provided, must be a child of <em>parentNode</em>; the template will be inserted before this node. If not provided, the template will be inserted as the last child of parentNode.
 * @param {Blaze.View} [parentView] Optional. If provided, it will be set as the rendered View's [`parentView`](#view_parentview).
 */
Blaze.render = function (content, parentElement, nextNode, parentView) {
  if (!parentElement) {
    Blaze._warn("Blaze.render without a parent element is deprecated. " + "You must specify where to insert the rendered content.");
  }
  if (nextNode instanceof Blaze.View) {
    // handle omitted nextNode
    parentView = nextNode;
    nextNode = null;
  }

  // parentElement must be a DOM node. in particular, can't be the
  // result of a call to `$`. Can't check if `parentElement instanceof
  // Node` since 'Node' is undefined in IE8.
  if (parentElement && typeof parentElement.nodeType !== 'number') throw new Error("'parentElement' must be a DOM node");
  if (nextNode && typeof nextNode.nodeType !== 'number')
    // 'nextNode' is optional
    throw new Error("'nextNode' must be a DOM node");
  parentView = parentView || currentViewIfRendering();
  const view = contentAsView(content);

  // TODO: this is only needed in development
  if (!parentView) {
    view.onViewCreated(function () {
      Blaze.__rootViews.push(view);
    });
    view.onViewDestroyed(function () {
      let index = Blaze.__rootViews.indexOf(view);
      if (index > -1) {
        Blaze.__rootViews.splice(index, 1);
      }
    });
  }
  Blaze._materializeView(view, parentView);
  if (parentElement) {
    view._domrange.attach(parentElement, nextNode);
  }
  return view;
};
Blaze.insert = function (view, parentElement, nextNode) {
  Blaze._warn("Blaze.insert has been deprecated.  Specify where to insert the " + "rendered content in the call to Blaze.render.");
  if (!(view && view._domrange instanceof Blaze._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
  view._domrange.attach(parentElement, nextNode);
};

/**
 * @summary Renders a template or View to DOM nodes with a data context.  Otherwise identical to `Blaze.render`.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object to render.
 * @param {Object|Function} data The data context to use, or a function returning a data context.  If a function is provided, it will be reactively re-run.
 * @param {DOMNode} parentNode The node that will be the parent of the rendered template.  It must be an Element node.
 * @param {DOMNode} [nextNode] Optional. If provided, must be a child of <em>parentNode</em>; the template will be inserted before this node. If not provided, the template will be inserted as the last child of parentNode.
 * @param {Blaze.View} [parentView] Optional. If provided, it will be set as the rendered View's [`parentView`](#view_parentview).
 */
Blaze.renderWithData = function (content, data, parentElement, nextNode, parentView) {
  // We defer the handling of optional arguments to Blaze.render.  At this point,
  // `nextNode` may actually be `parentView`.
  return Blaze.render(Blaze._TemplateWith(data, contentAsFunc(content)), parentElement, nextNode, parentView);
};

/**
 * @summary Removes a rendered View from the DOM, stopping all reactive updates and event listeners on it. Also destroys the Blaze.Template instance associated with the view.
 * @locus Client
 * @param {Blaze.View} renderedView The return value from `Blaze.render` or `Blaze.renderWithData`, or the `view` property of a Blaze.Template instance. Calling `Blaze.remove(Template.instance().view)` from within a template event handler will destroy the view as well as that template and trigger the template's `onDestroyed` handlers.
 */
Blaze.remove = function (view) {
  if (!(view && view._domrange instanceof Blaze._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
  while (view) {
    if (!view.isDestroyed) {
      const range = view._domrange;
      range.destroy();
      if (range.attached && !range.parentRange) {
        range.detach();
      }
    }
    view = view._hasGeneratedParent && view.parentView;
  }
};

/**
 * @summary Renders a template or View to a string of HTML.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object from which to generate HTML.
 */
Blaze.toHTML = function (content, parentView) {
  parentView = parentView || currentViewIfRendering();
  return HTML.toHTML(Blaze._expandView(contentAsView(content), parentView));
};

/**
 * @summary Renders a template or View to HTML with a data context.  Otherwise identical to `Blaze.toHTML`.
 * @locus Client
 * @param {Template|Blaze.View} templateOrView The template (e.g. `Template.myTemplate`) or View object from which to generate HTML.
 * @param {Object|Function} data The data context to use, or a function returning a data context.
 */
Blaze.toHTMLWithData = function (content, data, parentView) {
  parentView = parentView || currentViewIfRendering();
  return HTML.toHTML(Blaze._expandView(Blaze._TemplateWith(data, contentAsFunc(content)), parentView));
};
Blaze._toText = function (htmljs, parentView, textMode) {
  if (typeof htmljs === 'function') throw new Error("Blaze._toText doesn't take a function, just HTMLjs");
  if (parentView != null && !(parentView instanceof Blaze.View)) {
    // omitted parentView argument
    textMode = parentView;
    parentView = null;
  }
  parentView = parentView || currentViewIfRendering();
  if (!textMode) throw new Error("textMode required");
  if (!(textMode === HTML.TEXTMODE.STRING || textMode === HTML.TEXTMODE.RCDATA || textMode === HTML.TEXTMODE.ATTRIBUTE)) throw new Error("Unknown textMode: " + textMode);
  return HTML.toText(Blaze._expand(htmljs, parentView), textMode);
};

/**
 * @summary Returns the current data context, or the data context that was used when rendering a particular DOM element or View from a Meteor template.
 * @locus Client
 * @param {DOMElement|Blaze.View} [elementOrView] Optional.  An element that was rendered by a Meteor, or a View.
 */
Blaze.getData = function (elementOrView) {
  let theWith;
  if (!elementOrView) {
    theWith = Blaze.getView('with');
  } else if (elementOrView instanceof Blaze.View) {
    const view = elementOrView;
    theWith = view.name === 'with' ? view : Blaze.getView(view, 'with');
  } else if (typeof elementOrView.nodeType === 'number') {
    if (elementOrView.nodeType !== 1) throw new Error("Expected DOM element");
    theWith = Blaze.getView(elementOrView, 'with');
  } else {
    throw new Error("Expected DOM element or View");
  }
  return theWith ? theWith.dataVar.get() : null;
};

// For back-compat
Blaze.getElementData = function (element) {
  Blaze._warn("Blaze.getElementData has been deprecated.  Use " + "Blaze.getData(element) instead.");
  if (element.nodeType !== 1) throw new Error("Expected DOM element");
  return Blaze.getData(element);
};

// Both arguments are optional.

/**
 * @summary Gets either the current View, or the View enclosing the given DOM element.
 * @locus Client
 * @param {DOMElement} [element] Optional.  If specified, the View enclosing `element` is returned.
 */
Blaze.getView = function (elementOrView, _viewName) {
  let viewName = _viewName;
  if (typeof elementOrView === 'string') {
    // omitted elementOrView; viewName present
    viewName = elementOrView;
    elementOrView = null;
  }

  // We could eventually shorten the code by folding the logic
  // from the other methods into this method.
  if (!elementOrView) {
    return Blaze._getCurrentView(viewName);
  } else if (elementOrView instanceof Blaze.View) {
    return Blaze._getParentView(elementOrView, viewName);
  } else if (typeof elementOrView.nodeType === 'number') {
    return Blaze._getElementView(elementOrView, viewName);
  } else {
    throw new Error("Expected DOM element or View");
  }
};

// Gets the current view or its nearest ancestor of name
// `name`.
Blaze._getCurrentView = function (name) {
  let view = Blaze.currentView;
  // Better to fail in cases where it doesn't make sense
  // to use Blaze._getCurrentView().  There will be a current
  // view anywhere it does.  You can check Blaze.currentView
  // if you want to know whether there is one or not.
  if (!view) throw new Error("There is no current view");
  if (name) {
    while (view && view.name !== name) view = view.parentView;
    return view || null;
  } else {
    // Blaze._getCurrentView() with no arguments just returns
    // Blaze.currentView.
    return view;
  }
};
Blaze._getParentView = function (view, name) {
  let v = view.parentView;
  if (name) {
    while (v && v.name !== name) v = v.parentView;
  }
  return v || null;
};
Blaze._getElementView = function (elem, name) {
  let range = Blaze._DOMRange.forElement(elem);
  let view = null;
  while (range && !view) {
    view = range.view || null;
    if (!view) {
      if (range.parentRange) range = range.parentRange;else range = Blaze._DOMRange.forElement(range.parentElement);
    }
  }
  if (name) {
    while (view && view.name !== name) view = view.parentView;
    return view || null;
  } else {
    return view;
  }
};
Blaze._addEventMap = function (view, eventMap, thisInHandler) {
  thisInHandler = thisInHandler || null;
  const handles = [];
  if (!view._domrange) throw new Error("View must have a DOMRange");
  view._domrange.onAttached(function attached_eventMaps(range, element) {
    Object.keys(eventMap).forEach(function (spec) {
      let handler = eventMap[spec];
      const clauses = spec.split(/,\s+/);
      // iterate over clauses of spec, e.g. ['click .foo', 'click .bar']
      clauses.forEach(function (clause) {
        const parts = clause.split(/\s+/);
        if (parts.length === 0) return;
        const newEvents = parts.shift();
        const selector = parts.join(' ');
        handles.push(Blaze._EventSupport.listen(element, newEvents, selector, function (evt) {
          if (!range.containsElement(evt.currentTarget, selector, newEvents)) return null;
          const handlerThis = thisInHandler || this;
          const handlerArgs = arguments;
          return Blaze._withCurrentView(view, function () {
            return handler.apply(handlerThis, handlerArgs);
          });
        }, range, function (r) {
          return r.parentRange;
        }));
      });
    });
  });
  view.onViewDestroyed(function () {
    handles.forEach(function (h) {
      h.stop();
    });
    handles.length = 0;
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"builtins.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/builtins.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let has;
module.link("lodash.has", {
  default(v) {
    has = v;
  }
}, 0);
let isObject;
module.link("lodash.isobject", {
  default(v) {
    isObject = v;
  }
}, 1);
Blaze._calculateCondition = function (cond) {
  if (HTML.isArray(cond) && cond.length === 0) return false;
  return !!cond;
};

/**
 * @summary Constructs a View that renders content with a data context.
 * @locus Client
 * @param {Object|Function} data An object to use as the data context, or a function returning such an object.  If a
 *   function is provided, it will be reactively re-run.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#Renderable-Content).
 */
Blaze.With = function (data, contentFunc) {
  const view = Blaze.View('with', contentFunc);
  view.dataVar = new ReactiveVar();
  view.onViewCreated(function () {
    if (typeof data === 'function') {
      // `data` is a reactive function
      view.autorun(function () {
        view.dataVar.set(data());
      }, view.parentView, 'setData');
    } else {
      view.dataVar.set(data);
    }
  });
  return view;
};

/**
 * @summary Shallow compare of two bindings.
 * @param {Binding} x
 * @param {Binding} y
 */
function _isEqualBinding(x, y) {
  if (typeof x === 'object' && typeof y === 'object') {
    return x.error === y.error && ReactiveVar._isEqual(x.value, y.value);
  } else {
    return ReactiveVar._isEqual(x, y);
  }
}

/**
 * @template T
 * @param {T} x
 * @returns {T}
 */
function _identity(x) {
  return x;
}

/**
 * Attaches a single binding to the instantiated view.
 * @template T, U
 * @param {ReactiveVar<U>} reactiveVar Target view.
 * @param {Promise<T> | T} value Bound value.
 * @param {(value: T) => U} [mapper] Maps the computed value before store.
 */
function _setBindingValue(reactiveVar, value) {
  let mapper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity;
  if (value && typeof value.then === 'function') {
    value.then(value => reactiveVar.set({
      value: mapper(value)
    }), error => reactiveVar.set({
      error
    }));
  } else {
    reactiveVar.set({
      value: mapper(value)
    });
  }
}

/**
 * @template T, U
 * @param {Blaze.View} view Target view.
 * @param {Promise<T> | T | (() => Promise<T> | T)} binding Binding value or its getter.
 * @param {string} [displayName] Autorun's display name.
 * @param {(value: T) => U} [mapper] Maps the computed value before store.
 * @returns {ReactiveVar<U>}
 */
function _createBinding(view, binding, displayName, mapper) {
  const reactiveVar = new ReactiveVar(undefined, _isEqualBinding);
  if (typeof binding === 'function') {
    view.autorun(() => _setBindingValue(reactiveVar, binding(), mapper), view.parentView, displayName);
  } else {
    _setBindingValue(reactiveVar, binding, mapper);
  }
  return reactiveVar;
}

/**
 * Attaches bindings to the instantiated view.
 * @param {Object} bindings A dictionary of bindings, each binding name
 * corresponds to a value or a function that will be reactively re-run.
 * @param {Blaze.View} view The target.
 */
Blaze._attachBindingsToView = function (bindings, view) {
  view.onViewCreated(function () {
    Object.entries(bindings).forEach(function (_ref) {
      let [name, binding] = _ref;
      view._scopeBindings[name] = _createBinding(view, binding);
    });
  });
};

/**
 * @summary Constructs a View setting the local lexical scope in the block.
 * @param {Function} bindings Dictionary mapping names of bindings to
 * values or computations to reactively re-run.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#Renderable-Content).
 */
Blaze.Let = function (bindings, contentFunc) {
  var view = Blaze.View('let', contentFunc);
  Blaze._attachBindingsToView(bindings, view);
  return view;
};

/**
 * @summary Constructs a View that renders content conditionally.
 * @locus Client
 * @param {Function} conditionFunc A function to reactively re-run.  Whether the result is truthy or falsy determines
 *   whether `contentFunc` or `elseFunc` is shown.  An empty array is considered falsy.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#Renderable-Content).
 * @param {Function} [elseFunc] Optional.  A Function that returns [*renderable content*](#Renderable-Content).  If no
 *   `elseFunc` is supplied, no content is shown in the "else" case.
 */
Blaze.If = function (conditionFunc, contentFunc, elseFunc, _not) {
  const view = Blaze.View(_not ? 'unless' : 'if', function () {
    // Render only if the binding has a value, i.e., it's either synchronous or
    // has resolved. Rejected `Promise`s are NOT rendered.
    const condition = view.__conditionVar.get();
    if (condition && 'value' in condition) {
      return condition.value ? contentFunc() : elseFunc ? elseFunc() : null;
    }
    return null;
  });
  view.__conditionVar = null;
  view.onViewCreated(() => {
    view.__conditionVar = _createBinding(view, conditionFunc, 'condition',
    // Store only the actual condition.
    value => !Blaze._calculateCondition(value) !== !_not);
  });
  return view;
};

/**
 * @summary An inverted [`Blaze.If`](#Blaze-If).
 * @locus Client
 * @param {Function} conditionFunc A function to reactively re-run.  If the result is falsy, `contentFunc` is shown,
 *   otherwise `elseFunc` is shown.  An empty array is considered falsy.
 * @param {Function} contentFunc A Function that returns [*renderable content*](#Renderable-Content).
 * @param {Function} [elseFunc] Optional.  A Function that returns [*renderable content*](#Renderable-Content).  If no
 *   `elseFunc` is supplied, no content is shown in the "else" case.
 */
Blaze.Unless = function (conditionFunc, contentFunc, elseFunc) {
  return Blaze.If(conditionFunc, contentFunc, elseFunc, true /*_not*/);
};

/**
 * @summary Constructs a View that renders `contentFunc` for each item in a sequence.
 * @locus Client
 * @param {Function} argFunc A function to reactively re-run. The function can
 * return one of two options:
 *
 * 1. An object with two fields: '_variable' and '_sequence'. Each iterates over
 *   '_sequence', it may be a Cursor, an array, null, or undefined. Inside the
 *   Each body you will be able to get the current item from the sequence using
 *   the name specified in the '_variable' field.
 *
 * 2. Just a sequence (Cursor, array, null, or undefined) not wrapped into an
 *   object. Inside the Each body, the current item will be set as the data
 *   context.
 * @param {Function} contentFunc A Function that returns  [*renderable
 * content*](#Renderable-Content).
 * @param {Function} [elseFunc] A Function that returns [*renderable
 * content*](#Renderable-Content) to display in the case when there are no items
 * in the sequence.
 */
Blaze.Each = function (argFunc, contentFunc, elseFunc) {
  const eachView = Blaze.View('each', function () {
    const subviews = this.initialSubviews;
    this.initialSubviews = null;
    if (this._isCreatedForExpansion) {
      this.expandedValueDep = new Tracker.Dependency();
      this.expandedValueDep.depend();
    }
    return subviews;
  });
  eachView.initialSubviews = [];
  eachView.numItems = 0;
  eachView.inElseMode = false;
  eachView.stopHandle = null;
  eachView.contentFunc = contentFunc;
  eachView.elseFunc = elseFunc;
  eachView.argVar = undefined;
  eachView.variableName = null;

  // update the @index value in the scope of all subviews in the range
  const updateIndices = function (from, to) {
    if (to === undefined) {
      to = eachView.numItems - 1;
    }
    for (let i = from; i <= to; i++) {
      const view = eachView._domrange.members[i].view;
      view._scopeBindings['@index'].set({
        value: i
      });
    }
  };
  eachView.onViewCreated(function () {
    // We evaluate `argFunc` in `Tracker.autorun` to ensure `Blaze.currentView`
    // is always set when it runs.
    eachView.argVar = _createBinding(eachView,
    // Unwrap a sequence reactively (`{{#each x in xs}}`).
    () => {
      let maybeSequence = argFunc();
      if (isObject(maybeSequence) && has(maybeSequence, '_sequence')) {
        eachView.variableName = maybeSequence._variable || null;
        maybeSequence = maybeSequence._sequence;
      }
      return maybeSequence;
    }, 'collection');
    eachView.stopHandle = ObserveSequence.observe(function () {
      var _eachView$argVar$get;
      return (_eachView$argVar$get = eachView.argVar.get()) === null || _eachView$argVar$get === void 0 ? void 0 : _eachView$argVar$get.value;
    }, {
      addedAt: function (id, item, index) {
        Tracker.nonreactive(function () {
          let newItemView;
          if (eachView.variableName) {
            // new-style #each (as in {{#each item in items}})
            // doesn't create a new data context
            newItemView = Blaze.View('item', eachView.contentFunc);
          } else {
            newItemView = Blaze.With(item, eachView.contentFunc);
          }
          eachView.numItems++;
          const bindings = {};
          bindings['@index'] = index;
          if (eachView.variableName) {
            bindings[eachView.variableName] = item;
          }
          Blaze._attachBindingsToView(bindings, newItemView);
          if (eachView.expandedValueDep) {
            eachView.expandedValueDep.changed();
          } else if (eachView._domrange) {
            if (eachView.inElseMode) {
              eachView._domrange.removeMember(0);
              eachView.inElseMode = false;
            }
            const range = Blaze._materializeView(newItemView, eachView);
            eachView._domrange.addMember(range, index);
            updateIndices(index);
          } else {
            eachView.initialSubviews.splice(index, 0, newItemView);
          }
        });
      },
      removedAt: function (id, item, index) {
        Tracker.nonreactive(function () {
          eachView.numItems--;
          if (eachView.expandedValueDep) {
            eachView.expandedValueDep.changed();
          } else if (eachView._domrange) {
            eachView._domrange.removeMember(index);
            updateIndices(index);
            if (eachView.elseFunc && eachView.numItems === 0) {
              eachView.inElseMode = true;
              eachView._domrange.addMember(Blaze._materializeView(Blaze.View('each_else', eachView.elseFunc), eachView), 0);
            }
          } else {
            eachView.initialSubviews.splice(index, 1);
          }
        });
      },
      changedAt: function (id, newItem, oldItem, index) {
        Tracker.nonreactive(function () {
          if (eachView.expandedValueDep) {
            eachView.expandedValueDep.changed();
          } else {
            let itemView;
            if (eachView._domrange) {
              itemView = eachView._domrange.getMember(index).view;
            } else {
              itemView = eachView.initialSubviews[index];
            }
            if (eachView.variableName) {
              itemView._scopeBindings[eachView.variableName].set({
                value: newItem
              });
            } else {
              itemView.dataVar.set(newItem);
            }
          }
        });
      },
      movedTo: function (id, item, fromIndex, toIndex) {
        Tracker.nonreactive(function () {
          if (eachView.expandedValueDep) {
            eachView.expandedValueDep.changed();
          } else if (eachView._domrange) {
            eachView._domrange.moveMember(fromIndex, toIndex);
            updateIndices(Math.min(fromIndex, toIndex), Math.max(fromIndex, toIndex));
          } else {
            const subviews = eachView.initialSubviews;
            const itemView = subviews[fromIndex];
            subviews.splice(fromIndex, 1);
            subviews.splice(toIndex, 0, itemView);
          }
        });
      }
    });
    if (eachView.elseFunc && eachView.numItems === 0) {
      eachView.inElseMode = true;
      eachView.initialSubviews[0] = Blaze.View('each_else', eachView.elseFunc);
    }
  });
  eachView.onViewDestroyed(function () {
    if (eachView.stopHandle) eachView.stopHandle.stop();
  });
  return eachView;
};

/**
 * Create a new `Blaze.Let` view that unwraps the given value.
 * @param {unknown} value
 * @returns {Blaze.View}
 */
Blaze._Await = function (value) {
  return Blaze.Let({
    value
  }, Blaze._AwaitContent);
};
Blaze._AwaitContent = function () {
  var _Blaze$currentView$_s;
  return (_Blaze$currentView$_s = Blaze.currentView._scopeBindings.value.get()) === null || _Blaze$currentView$_s === void 0 ? void 0 : _Blaze$currentView$_s.value;
};
Blaze._TemplateWith = function (arg, contentFunc) {
  let w;
  let argFunc = arg;
  if (typeof arg !== 'function') {
    argFunc = function () {
      return arg;
    };
  }

  // This is a little messy.  When we compile `{{> Template.contentBlock}}`, we
  // wrap it in Blaze._InOuterTemplateScope in order to skip the intermediate
  // parent Views in the current template.  However, when there's an argument
  // (`{{> Template.contentBlock arg}}`), the argument needs to be evaluated
  // in the original scope.  There's no good order to nest
  // Blaze._InOuterTemplateScope and Blaze._TemplateWith to achieve this,
  // so we wrap argFunc to run it in the "original parentView" of the
  // Blaze._InOuterTemplateScope.
  //
  // To make this better, reconsider _InOuterTemplateScope as a primitive.
  // Longer term, evaluate expressions in the proper lexical scope.
  const wrappedArgFunc = function () {
    let viewToEvaluateArg = null;
    if (w.parentView && w.parentView.name === 'InOuterTemplateScope') {
      viewToEvaluateArg = w.parentView.originalParentView;
    }
    if (viewToEvaluateArg) {
      return Blaze._withCurrentView(viewToEvaluateArg, argFunc);
    } else {
      return argFunc();
    }
  };
  const wrappedContentFunc = function () {
    let content = contentFunc.call(this);

    // Since we are generating the Blaze._TemplateWith view for the
    // user, set the flag on the child view.  If `content` is a template,
    // construct the View so that we can set the flag.
    if (content instanceof Blaze.Template) {
      content = content.constructView();
    }
    if (content instanceof Blaze.View) {
      content._hasGeneratedParent = true;
    }
    return content;
  };
  w = Blaze.With(wrappedArgFunc, wrappedContentFunc);
  w.__isTemplateWith = true;
  return w;
};
Blaze._InOuterTemplateScope = function (templateView, contentFunc) {
  const view = Blaze.View('InOuterTemplateScope', contentFunc);
  let parentView = templateView.parentView;

  // Hack so that if you call `{{> foo bar}}` and it expands into
  // `{{#with bar}}{{> foo}}{{/with}}`, and then `foo` is a template
  // that inserts `{{> Template.contentBlock}}`, the data context for
  // `Template.contentBlock` is not `bar` but the one enclosing that.
  if (parentView.__isTemplateWith) parentView = parentView.parentView;
  view.onViewCreated(function () {
    this.originalParentView = this.parentView;
    this.parentView = parentView;
    this.__childDoesntStartNewLexicalScope = true;
  });
  return view;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lookup.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/lookup.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let has;
module.link("lodash.has", {
  default(v) {
    has = v;
  }
}, 0);
/** @param {(binding: Binding) => boolean} fn */
function _createBindingsHelper(fn) {
  /** @param {string[]} names */
  return function () {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }
    const view = Blaze.currentView;

    // There's either zero arguments (i.e., check all bindings) or an additional
    // "hash" argument that we have to ignore.
    names = names.length === 0
    // TODO: Should we walk up the bindings here?
    ? Object.keys(view._scopeBindings) : names.slice(0, -1);
    return names.some(name => {
      const binding = _lexicalBindingLookup(view, name);
      if (!binding) {
        throw new Error("Binding for \"".concat(name, "\" was not found."));
      }
      return fn(binding.get());
    });
  };
}
Blaze._globalHelpers = {
  /** @summary Check whether any of the given bindings (or all if none given) is still pending. */
  '@pending': _createBindingsHelper(binding => binding === undefined),
  /** @summary Check whether any of the given bindings (or all if none given) has rejected. */
  '@rejected': _createBindingsHelper(binding => !!binding && 'error' in binding),
  /** @summary Check whether any of the given bindings (or all if none given) has resolved. */
  '@resolved': _createBindingsHelper(binding => !!binding && 'value' in binding)
};

// Documented as Template.registerHelper.
// This definition also provides back-compat for `UI.registerHelper`.
Blaze.registerHelper = function (name, func) {
  Blaze._globalHelpers[name] = func;
};

// Also documented as Template.deregisterHelper
Blaze.deregisterHelper = function (name) {
  delete Blaze._globalHelpers[name];
};
const bindIfIsFunction = function (x, target) {
  if (typeof x !== 'function') return x;
  return Blaze._bind(x, target);
};

// If `x` is a function, binds the value of `this` for that function
// to the current data context.
const bindDataContext = function (x) {
  if (typeof x === 'function') {
    return function () {
      let data = Blaze.getData();
      if (data == null) data = {};
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return x.apply(data, args);
    };
  }
  return x;
};
Blaze._OLDSTYLE_HELPER = {};
Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {
  // XXX COMPAT WITH 0.9.3
  let isKnownOldStyleHelper = false;
  if (template.__helpers.has(name)) {
    const helper = template.__helpers.get(name);
    if (helper === Blaze._OLDSTYLE_HELPER) {
      isKnownOldStyleHelper = true;
    } else if (helper != null) {
      return wrapHelper(bindDataContext(helper), tmplInstanceFunc);
    } else {
      return null;
    }
  }

  // old-style helper
  if (name in template) {
    // Only warn once per helper
    if (!isKnownOldStyleHelper) {
      template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);
      if (!template._NOWARN_OLDSTYLE_HELPERS) {
        Blaze._warn('Assigning helper with `' + template.viewName + '.' + name + ' = ...` is deprecated.  Use `' + template.viewName + '.helpers(...)` instead.');
      }
    }
    if (template[name] != null) {
      return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);
    }
  }
  return null;
};
const wrapHelper = function (f, templateFunc) {
  if (typeof f !== "function") {
    return f;
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    const self = this;
    return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {
      return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);
    });
  };
};
function _lexicalKeepGoing(currentView) {
  if (!currentView.parentView) {
    return undefined;
  }
  if (!currentView.__startsNewLexicalScope) {
    return currentView.parentView;
  }
  if (currentView.parentView.__childDoesntStartNewLexicalScope) {
    return currentView.parentView;
  }

  // in the case of {{> Template.contentBlock data}} the contentBlock loses the lexical scope of it's parent, wheras {{> Template.contentBlock}} it does not
  // this is because a #with sits between the include InOuterTemplateScope
  if (currentView.parentView.name === "with" && currentView.parentView.parentView && currentView.parentView.parentView.__childDoesntStartNewLexicalScope) {
    return currentView.parentView;
  }
  return undefined;
}
function _lexicalBindingLookup(view, name) {
  let currentView = view;

  // walk up the views stopping at a Spacebars.include or Template view that
  // doesn't have an InOuterTemplateScope view as a parent
  do {
    // skip block helpers views
    // if we found the binding on the scope, return it
    if (has(currentView._scopeBindings, name)) {
      return currentView._scopeBindings[name];
    }
  } while (currentView = _lexicalKeepGoing(currentView));
  return null;
}
Blaze._lexicalBindingLookup = function (view, name) {
  const binding = _lexicalBindingLookup(view, name);
  return binding && (() => {
    var _binding$get;
    return (_binding$get = binding.get()) === null || _binding$get === void 0 ? void 0 : _binding$get.value;
  });
};

// templateInstance argument is provided to be available for possible
// alternative implementations of this function by 3rd party packages.
Blaze._getTemplate = function (name, templateInstance) {
  if (name in Blaze.Template && Blaze.Template[name] instanceof Blaze.Template) {
    return Blaze.Template[name];
  }
  return null;
};
Blaze._getGlobalHelper = function (name, templateInstance) {
  if (Blaze._globalHelpers[name] != null) {
    return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);
  }
  return null;
};

// Looks up a name, like "foo" or "..", as a helper of the
// current template; the name of a template; a global helper;
// or a property of the data context.  Called on the View of
// a template (i.e. a View with a `.template` property,
// where the helpers are).  Used for the first name in a
// "path" in a template tag, like "foo" in `{{foo.bar}}` or
// ".." in `{{frobulate ../blah}}`.
//
// Returns a function, a non-function value, or null.  If
// a function is found, it is bound appropriately.
//
// NOTE: This function must not establish any reactive
// dependencies itself.  If there is any reactivity in the
// value, lookup should return a function.
Blaze.View.prototype.lookup = function (name, _options) {
  const template = this.template;
  const lookupTemplate = _options && _options.template;
  let helper;
  let binding;
  let boundTmplInstance;
  let foundTemplate;
  if (this.templateInstance) {
    boundTmplInstance = Blaze._bind(this.templateInstance, this);
  }

  // 0. looking up the parent data context with the special "../" syntax
  if (/^\./.test(name)) {
    // starts with a dot. must be a series of dots which maps to an
    // ancestor of the appropriate height.
    if (!/^(\.)+$/.test(name)) throw new Error("id starting with dot must be a series of dots");
    return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);
  }

  // 1. look up a helper on the current template
  if (template && (helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null) {
    return helper;
  }

  // 2. look up a binding by traversing the lexical view hierarchy inside the
  // current template
  if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {
    return binding;
  }

  // 3. look up a template by name
  if (lookupTemplate && (foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null) {
    return foundTemplate;
  }

  // 4. look up a global helper
  helper = Blaze._getGlobalHelper(name, boundTmplInstance);
  if (helper != null) {
    return helper;
  }

  // 5. look up in a data context
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    const isCalledAsFunction = args.length > 0;
    const data = Blaze.getData();
    const x = data && data[name];
    if (!x) {
      if (lookupTemplate) {
        throw new Error("No such template: " + name);
      } else if (isCalledAsFunction) {
        throw new Error("No such function: " + name);
      } else if (name.charAt(0) === '@' && (x === null || x === undefined)) {
        // Throw an error if the user tries to use a `@directive`
        // that doesn't exist.  We don't implement all directives
        // from Handlebars, so there's a potential for confusion
        // if we fail silently.  On the other hand, we want to
        // throw late in case some app or package wants to provide
        // a missing directive.
        throw new Error("Unsupported directive: " + name);
      }
    }
    if (!data) {
      return null;
    }
    if (typeof x !== 'function') {
      if (isCalledAsFunction) {
        throw new Error("Can't call non-function: " + x);
      }
      return x;
    }
    return x.apply(data, args);
  };
};

// Implement Spacebars' {{../..}}.
// @param height {Number} The number of '..'s
Blaze._parentData = function (height, _functionWrapped) {
  // If height is null or undefined, we default to 1, the first parent.
  if (height == null) {
    height = 1;
  }
  let theWith = Blaze.getView('with');
  for (let i = 0; i < height && theWith; i++) {
    theWith = Blaze.getView(theWith, 'with');
  }
  if (!theWith) return null;
  if (_functionWrapped) return function () {
    return theWith.dataVar.get();
  };
  return theWith.dataVar.get();
};
Blaze.View.prototype.lookupTemplate = function (name) {
  return this.lookup(name, {
    template: true
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/template.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let isObject;
module.link("lodash.isobject", {
  default(v) {
    isObject = v;
  }
}, 0);
let isFunction;
module.link("lodash.isfunction", {
  default(v) {
    isFunction = v;
  }
}, 1);
let has;
module.link("lodash.has", {
  default(v) {
    has = v;
  }
}, 2);
let isEmpty;
module.link("lodash.isempty", {
  default(v) {
    isEmpty = v;
  }
}, 3);
// [new] Blaze.Template([viewName], renderFunction)
//
// `Blaze.Template` is the class of templates, like `Template.foo` in
// Meteor, which is `instanceof Template`.
//
// `viewKind` is a string that looks like "Template.foo" for templates
// defined by the compiler.

/**
 * @class
 * @summary Constructor for a Template, which is used to construct Views with particular name and content.
 * @locus Client
 * @param {String} [viewName] Optional.  A name for Views constructed by this Template.  See [`view.name`](#view_name).
 * @param {Function} renderFunction A function that returns [*renderable content*](#Renderable-Content).  This function is used as the `renderFunction` for Views constructed by this Template.
 */
Blaze.Template = function (viewName, renderFunction) {
  if (!(this instanceof Blaze.Template))
    // called without `new`
    return new Blaze.Template(viewName, renderFunction);
  if (typeof viewName === 'function') {
    // omitted "viewName" argument
    renderFunction = viewName;
    viewName = '';
  }
  if (typeof viewName !== 'string') throw new Error("viewName must be a String (or omitted)");
  if (typeof renderFunction !== 'function') throw new Error("renderFunction must be a function");
  this.viewName = viewName;
  this.renderFunction = renderFunction;
  this.__helpers = new HelperMap();
  this.__eventMaps = [];
  this._callbacks = {
    created: [],
    rendered: [],
    destroyed: []
  };
};
const Template = Blaze.Template;
const HelperMap = function () {};
HelperMap.prototype.get = function (name) {
  return this[' ' + name];
};
HelperMap.prototype.set = function (name, helper) {
  this[' ' + name] = helper;
};
HelperMap.prototype.has = function (name) {
  return typeof this[' ' + name] !== 'undefined';
};

/**
 * @summary Returns true if `value` is a template object like `Template.myTemplate`.
 * @locus Client
 * @param {Any} value The value to test.
 */
Blaze.isTemplate = function (t) {
  return t instanceof Blaze.Template;
};

/**
 * @name  onCreated
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is created.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */
Template.prototype.onCreated = function (cb) {
  this._callbacks.created.push(cb);
};

/**
 * @name  onRendered
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is inserted into the DOM.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */
Template.prototype.onRendered = function (cb) {
  this._callbacks.rendered.push(cb);
};

/**
 * @name  onDestroyed
 * @instance
 * @memberOf Template
 * @summary Register a function to be called when an instance of this template is removed from the DOM and destroyed.
 * @param {Function} callback A function to be added as a callback.
 * @locus Client
 * @importFromPackage templating
 */
Template.prototype.onDestroyed = function (cb) {
  this._callbacks.destroyed.push(cb);
};
Template.prototype._getCallbacks = function (which) {
  const self = this;
  let callbacks = self[which] ? [self[which]] : [];
  // Fire all callbacks added with the new API (Template.onRendered())
  // as well as the old-style callback (e.g. Template.rendered) for
  // backwards-compatibility.
  callbacks = callbacks.concat(self._callbacks[which]);
  return callbacks;
};
const fireCallbacks = function (callbacks, template) {
  Template._withTemplateInstanceFunc(function () {
    return template;
  }, function () {
    for (let i = 0, N = callbacks.length; i < N; i++) {
      callbacks[i].call(template);
    }
  });
};
Template.prototype.constructView = function (contentFunc, elseFunc) {
  const self = this;
  const view = Blaze.View(self.viewName, self.renderFunction);
  view.template = self;
  view.templateContentBlock = contentFunc ? new Template('(contentBlock)', contentFunc) : null;
  view.templateElseBlock = elseFunc ? new Template('(elseBlock)', elseFunc) : null;
  if (self.__eventMaps || typeof self.events === 'object') {
    view._onViewRendered(function () {
      if (view.renderCount !== 1) return;
      if (!self.__eventMaps.length && typeof self.events === "object") {
        // Provide limited back-compat support for `.events = {...}`
        // syntax.  Pass `template.events` to the original `.events(...)`
        // function.  This code must run only once per template, in
        // order to not bind the handlers more than once, which is
        // ensured by the fact that we only do this when `__eventMaps`
        // is falsy, and we cause it to be set now.
        Template.prototype.events.call(self, self.events);
      }
      self.__eventMaps.forEach(function (m) {
        Blaze._addEventMap(view, m, view);
      });
    });
  }
  view._templateInstance = new Blaze.TemplateInstance(view);
  view.templateInstance = function () {
    // Update data, firstNode, and lastNode, and return the TemplateInstance
    // object.
    const inst = view._templateInstance;

    /**
     * @instance
     * @memberOf Blaze.TemplateInstance
     * @name  data
     * @summary The data context of this instance's latest invocation.
     * @locus Client
     */
    inst.data = Blaze.getData(view);
    if (view._domrange && !view.isDestroyed) {
      inst.firstNode = view._domrange.firstNode();
      inst.lastNode = view._domrange.lastNode();
    } else {
      // on 'created' or 'destroyed' callbacks we don't have a DomRange
      inst.firstNode = null;
      inst.lastNode = null;
    }
    return inst;
  };

  /**
   * @name  created
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is created.
   * @locus Client
   * @deprecated in 1.1
   */
  // To avoid situations when new callbacks are added in between view
  // instantiation and event being fired, decide on all callbacks to fire
  // immediately and then fire them on the event.
  const createdCallbacks = self._getCallbacks('created');
  view.onViewCreated(function () {
    fireCallbacks(createdCallbacks, view.templateInstance());
  });

  /**
   * @name  rendered
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is rendered.
   * @locus Client
   * @deprecated in 1.1
   */
  const renderedCallbacks = self._getCallbacks('rendered');
  view.onViewReady(function () {
    fireCallbacks(renderedCallbacks, view.templateInstance());
  });

  /**
   * @name  destroyed
   * @instance
   * @memberOf Template
   * @summary Provide a callback when an instance of a template is destroyed.
   * @locus Client
   * @deprecated in 1.1
   */
  const destroyedCallbacks = self._getCallbacks('destroyed');
  view.onViewDestroyed(function () {
    fireCallbacks(destroyedCallbacks, view.templateInstance());
  });
  return view;
};

/**
 * @class
 * @summary The class for template instances
 * @param {Blaze.View} view
 * @instanceName template
 */
Blaze.TemplateInstance = function (view) {
  if (!(this instanceof Blaze.TemplateInstance))
    // called without `new`
    return new Blaze.TemplateInstance(view);
  if (!(view instanceof Blaze.View)) throw new Error("View required");
  view._templateInstance = this;

  /**
   * @name view
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The [View](../api/blaze.html#Blaze-View) object for this invocation of the template.
   * @locus Client
   * @type {Blaze.View}
   */
  this.view = view;
  this.data = null;

  /**
   * @name firstNode
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The first top-level DOM node in this template instance.
   * @locus Client
   * @type {DOMNode}
   */
  this.firstNode = null;

  /**
   * @name lastNode
   * @memberOf Blaze.TemplateInstance
   * @instance
   * @summary The last top-level DOM node in this template instance.
   * @locus Client
   * @type {DOMNode}
   */
  this.lastNode = null;

  // This dependency is used to identify state transitions in
  // _subscriptionHandles which could cause the result of
  // TemplateInstance#subscriptionsReady to change. Basically this is triggered
  // whenever a new subscription handle is added or when a subscription handle
  // is removed and they are not ready.
  this._allSubsReadyDep = new Tracker.Dependency();
  this._allSubsReady = false;
  this._subscriptionHandles = {};
};

/**
 * @summary Find all elements matching `selector` in this template instance, and return them as a JQuery object.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMNode[]}
 */
Blaze.TemplateInstance.prototype.$ = function (selector) {
  const view = this.view;
  if (!view._domrange) throw new Error("Can't use $ on template instance with no DOM");
  return view._domrange.$(selector);
};

/**
 * @summary Find all elements matching `selector` in this template instance.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMElement[]}
 */
Blaze.TemplateInstance.prototype.findAll = function (selector) {
  return Array.prototype.slice.call(this.$(selector));
};

/**
 * @summary Find one element matching `selector` in this template instance.
 * @locus Client
 * @param {String} selector The CSS selector to match, scoped to the template contents.
 * @returns {DOMElement}
 */
Blaze.TemplateInstance.prototype.find = function (selector) {
  const result = this.$(selector);
  return result[0] || null;
};

/**
 * @summary A version of [Tracker.autorun](https://docs.meteor.com/api/tracker.html#Tracker-autorun) that is stopped when the template is destroyed.
 * @locus Client
 * @param {Function} runFunc The function to run. It receives one argument: a Tracker.Computation object.
 */
Blaze.TemplateInstance.prototype.autorun = function (f) {
  return this.view.autorun(f);
};

/**
 * @summary A version of [Meteor.subscribe](https://docs.meteor.com/api/pubsub.html#Meteor-subscribe) that is stopped
 * when the template is destroyed.
 * @return {SubscriptionHandle} The subscription handle to the newly made
 * subscription. Call `handle.stop()` to manually stop the subscription, or
 * `handle.ready()` to find out if this particular subscription has loaded all
 * of its inital data.
 * @locus Client
 * @param {String} name Name of the subscription.  Matches the name of the
 * server's `publish()` call.
 * @param {Any} [arg1,arg2...] Optional arguments passed to publisher function
 * on server.
 * @param {Function|Object} [options] If a function is passed instead of an
 * object, it is interpreted as an `onReady` callback.
 * @param {Function} [options.onReady] Passed to [`Meteor.subscribe`](https://docs.meteor.com/api/pubsub.html#Meteor-subscribe).
 * @param {Function} [options.onStop] Passed to [`Meteor.subscribe`](https://docs.meteor.com/api/pubsub.html#Meteor-subscribe).
 * @param {DDP.Connection} [options.connection] The connection on which to make the
 * subscription.
 */
Blaze.TemplateInstance.prototype.subscribe = function () {
  const self = this;
  const subHandles = self._subscriptionHandles;

  // Duplicate logic from Meteor.subscribe
  let options = {};
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (args.length) {
    const lastParam = args[args.length - 1];

    // Match pattern to check if the last arg is an options argument
    const lastParamOptionsPattern = {
      onReady: Match.Optional(Function),
      // XXX COMPAT WITH 1.0.3.1 onError used to exist, but now we use
      // onStop with an error callback instead.
      onError: Match.Optional(Function),
      onStop: Match.Optional(Function),
      connection: Match.Optional(Match.Any)
    };
    if (isFunction(lastParam)) {
      options.onReady = args.pop();
    } else if (lastParam && !isEmpty(lastParam) && Match.test(lastParam, lastParamOptionsPattern)) {
      options = args.pop();
    }
  }
  let subHandle;
  const oldStopped = options.onStop;
  options.onStop = function (error) {
    // When the subscription is stopped, remove it from the set of tracked
    // subscriptions to avoid this list growing without bound
    delete subHandles[subHandle.subscriptionId];

    // Removing a subscription can only change the result of subscriptionsReady
    // if we are not ready (that subscription could be the one blocking us being
    // ready).
    if (!self._allSubsReady) {
      self._allSubsReadyDep.changed();
    }
    if (oldStopped) {
      oldStopped(error);
    }
  };
  const {
    onReady,
    onError,
    onStop,
    connection
  } = options;
  const callbacks = {
    onReady,
    onError,
    onStop
  };

  // The callbacks are passed as the last item in the arguments array passed to
  // View#subscribe
  args.push(callbacks);

  // View#subscribe takes the connection as one of the options in the last
  // argument
  subHandle = self.view.subscribe.call(self.view, args, {
    connection: connection
  });
  if (!has(subHandles, subHandle.subscriptionId)) {
    subHandles[subHandle.subscriptionId] = subHandle;

    // Adding a new subscription will always cause us to transition from ready
    // to not ready, but if we are already not ready then this can't make us
    // ready.
    if (self._allSubsReady) {
      self._allSubsReadyDep.changed();
    }
  }
  return subHandle;
};

/**
 * @summary A reactive function that returns true when all of the subscriptions
 * called with [this.subscribe](#TemplateInstance-subscribe) are ready.
 * @return {Boolean} True if all subscriptions on this template instance are
 * ready.
 */
Blaze.TemplateInstance.prototype.subscriptionsReady = function () {
  this._allSubsReadyDep.depend();
  this._allSubsReady = Object.values(this._subscriptionHandles).every(handle => {
    return handle.ready();
  });
  return this._allSubsReady;
};

/**
 * @summary Specify template helpers available to this template.
 * @locus Client
 * @param {Object} helpers Dictionary of helper functions by name.
 * @importFromPackage templating
 */
Template.prototype.helpers = function (dict) {
  if (!isObject(dict)) {
    throw new Error("Helpers dictionary has to be an object");
  }
  for (let k in dict) this.__helpers.set(k, dict[k]);
};
const canUseGetters = function () {
  if (Object.defineProperty) {
    let obj = {};
    try {
      Object.defineProperty(obj, "self", {
        get: function () {
          return obj;
        }
      });
    } catch (e) {
      return false;
    }
    return obj.self === obj;
  }
  return false;
}();
if (canUseGetters) {
  // Like Blaze.currentView but for the template instance. A function
  // rather than a value so that not all helpers are implicitly dependent
  // on the current template instance's `data` property, which would make
  // them dependent on the data context of the template inclusion.
  let currentTemplateInstanceFunc = null;

  // If getters are supported, define this property with a getter function
  // to make it effectively read-only, and to work around this bizarre JSC
  // bug: https://github.com/meteor/meteor/issues/9926
  Object.defineProperty(Template, "_currentTemplateInstanceFunc", {
    get: function () {
      return currentTemplateInstanceFunc;
    }
  });
  Template._withTemplateInstanceFunc = function (templateInstanceFunc, func) {
    if (typeof func !== 'function') {
      throw new Error("Expected function, got: " + func);
    }
    const oldTmplInstanceFunc = currentTemplateInstanceFunc;
    try {
      currentTemplateInstanceFunc = templateInstanceFunc;
      return func();
    } finally {
      currentTemplateInstanceFunc = oldTmplInstanceFunc;
    }
  };
} else {
  // If getters are not supported, just use a normal property.
  Template._currentTemplateInstanceFunc = null;
  Template._withTemplateInstanceFunc = function (templateInstanceFunc, func) {
    if (typeof func !== 'function') {
      throw new Error("Expected function, got: " + func);
    }
    const oldTmplInstanceFunc = Template._currentTemplateInstanceFunc;
    try {
      Template._currentTemplateInstanceFunc = templateInstanceFunc;
      return func();
    } finally {
      Template._currentTemplateInstanceFunc = oldTmplInstanceFunc;
    }
  };
}

/**
 * @summary Specify event handlers for this template.
 * @locus Client
 * @param {EventMap} eventMap Event handlers to associate with this template.
 * @importFromPackage templating
 */
Template.prototype.events = function (eventMap) {
  if (!isObject(eventMap)) {
    throw new Error("Event map has to be an object");
  }
  const template = this;
  let eventMap2 = {};
  for (let k in eventMap) {
    eventMap2[k] = function (k, v) {
      return function (event /*, ...*/) {
        const view = this; // passed by EventAugmenter
        const args = Array.prototype.slice.call(arguments);
        // Exiting the current computation to avoid creating unnecessary
        // and unexpected reactive dependencies with Templates data
        // or any other reactive dependencies defined in event handlers
        return Tracker.nonreactive(function () {
          let data = Blaze.getData(event.currentTarget);
          if (data == null) data = {};
          const tmplInstanceFunc = Blaze._bind(view.templateInstance, view);
          args.splice(1, 0, tmplInstanceFunc());
          return Template._withTemplateInstanceFunc(tmplInstanceFunc, function () {
            return v.apply(data, args);
          });
        });
      };
    }(k, eventMap[k]);
  }
  template.__eventMaps.push(eventMap2);
};

/**
 * @function
 * @name instance
 * @memberOf Template
 * @summary The [template instance](#Template-instances) corresponding to the current template helper, event handler, callback, or autorun.  If there isn't one, `null`.
 * @locus Client
 * @returns {Blaze.TemplateInstance}
 * @importFromPackage templating
 */
Template.instance = function () {
  return Template._currentTemplateInstanceFunc && Template._currentTemplateInstanceFunc();
};

// Note: Template.currentData() is documented to take zero arguments,
// while Blaze.getData takes up to one.

/**
 * @summary
 *
 * - Inside an `onCreated`, `onRendered`, or `onDestroyed` callback, returns
 * the data context of the template.
 * - Inside an event handler, returns the data context of the template on which
 * this event handler was defined.
 * - Inside a helper, returns the data context of the DOM node where the helper
 * was used.
 *
 * Establishes a reactive dependency on the result.
 * @locus Client
 * @function
 * @importFromPackage templating
 */
Template.currentData = Blaze.getData;

/**
 * @summary Accesses other data contexts that enclose the current data context.
 * @locus Client
 * @function
 * @param {Integer} [numLevels] The number of levels beyond the current data context to look. Defaults to 1.
 * @importFromPackage templating
 */
Template.parentData = Blaze._parentData;

/**
 * @summary Defines a [helper function](#Template-helpers) which can be used from all templates.
 * @locus Client
 * @function
 * @param {String} name The name of the helper function you are defining.
 * @param {Function} function The helper function itself.
 * @importFromPackage templating
 */
Template.registerHelper = Blaze.registerHelper;

/**
 * @summary Removes a global [helper function](#Template-helpers).
 * @locus Client
 * @function
 * @param {String} name The name of the helper function you are defining.
 * @importFromPackage templating
 */
Template.deregisterHelper = Blaze.deregisterHelper;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"backcompat.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/blaze/backcompat.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
UI = Blaze;
Blaze.ReactiveVar = ReactiveVar;
UI._templateInstance = Blaze.Template.instance;
Handlebars = {};
Handlebars.registerHelper = Blaze.registerHelper;
Handlebars._escape = Blaze._escape;

// Return these from {{...}} helpers to achieve the same as returning
// strings from {{{...}}} helpers
Handlebars.SafeString = function (string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function () {
  return this.string.toString();
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"lodash.has":{"package.json":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.has/package.json                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "name": "lodash.has",
  "version": "4.5.2"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.has/index.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lodash.isobject":{"package.json":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isobject/package.json                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "name": "lodash.isobject",
  "version": "3.0.2"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isobject/index.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lodash.isfunction":{"package.json":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isfunction/package.json                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "name": "lodash.isfunction",
  "version": "3.0.9"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isfunction/index.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lodash.isempty":{"package.json":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isempty/package.json                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "name": "lodash.isempty",
  "version": "4.4.0"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/blaze/node_modules/lodash.isempty/index.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/blaze/preamble.js");
require("/node_modules/meteor/blaze/exceptions.js");
require("/node_modules/meteor/blaze/view.js");
require("/node_modules/meteor/blaze/builtins.js");
require("/node_modules/meteor/blaze/lookup.js");
require("/node_modules/meteor/blaze/template.js");
require("/node_modules/meteor/blaze/backcompat.js");

/* Exports */
Package._define("blaze", {
  Blaze: Blaze,
  UI: UI,
  Handlebars: Handlebars
});

})();

//# sourceURL=meteor://💻app/packages/blaze.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvYmxhemUvcHJlYW1ibGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2JsYXplL2V4Y2VwdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2JsYXplL3ZpZXcuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2JsYXplL2J1aWx0aW5zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9ibGF6ZS9sb29rdXAuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2JsYXplL3RlbXBsYXRlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9ibGF6ZS9iYWNrY29tcGF0LmpzIl0sIm5hbWVzIjpbIkJsYXplIiwiX2VzY2FwZSIsImVzY2FwZV9tYXAiLCJlc2NhcGVfb25lIiwiYyIsIngiLCJyZXBsYWNlIiwiX3dhcm4iLCJtc2ciLCJjb25zb2xlIiwid2FybiIsIm5hdGl2ZUJpbmQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJfYmluZCIsImZ1bmMiLCJvYmoiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVzdCIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcmdzIiwiYXBwbHkiLCJvYmpBIiwib2JqQiIsImRlYnVnRnVuYyIsIl90aHJvd05leHRFeGNlcHRpb24iLCJfcmVwb3J0RXhjZXB0aW9uIiwiZSIsIk1ldGVvciIsIl9kZWJ1ZyIsImxvZyIsInN0YWNrIiwibWVzc2FnZSIsIl93cmFwQ2F0Y2hpbmdFeGNlcHRpb25zIiwiZiIsIndoZXJlIiwiSFRNTCIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiVmlldyIsIm5hbWUiLCJyZW5kZXIiLCJfcmVuZGVyIiwiX2NhbGxiYWNrcyIsImNyZWF0ZWQiLCJyZW5kZXJlZCIsImRlc3Ryb3llZCIsImlzQ3JlYXRlZCIsIl9pc0NyZWF0ZWRGb3JFeHBhbnNpb24iLCJpc1JlbmRlcmVkIiwiX2lzQXR0YWNoZWQiLCJpc0Rlc3Ryb3llZCIsIl9pc0luUmVuZGVyIiwicGFyZW50VmlldyIsIl9kb21yYW5nZSIsIl9oYXNHZW5lcmF0ZWRQYXJlbnQiLCJfc2NvcGVCaW5kaW5ncyIsInJlbmRlckNvdW50Iiwib25WaWV3Q3JlYXRlZCIsImNiIiwicHVzaCIsIl9vblZpZXdSZW5kZXJlZCIsIm9uVmlld1JlYWR5Iiwic2VsZiIsImZpcmUiLCJUcmFja2VyIiwiYWZ0ZXJGbHVzaCIsIl93aXRoQ3VycmVudFZpZXciLCJvblZpZXdSZW5kZXJlZCIsImF0dGFjaGVkIiwib25BdHRhY2hlZCIsIm9uVmlld0Rlc3Ryb3llZCIsInJlbW92ZVZpZXdEZXN0cm95ZWRMaXN0ZW5lciIsImluZGV4IiwibGFzdEluZGV4T2YiLCJhdXRvcnVuIiwiX2luVmlld1Njb3BlIiwiZGlzcGxheU5hbWUiLCJFcnJvciIsInRlbXBsYXRlSW5zdGFuY2VGdW5jIiwiVGVtcGxhdGUiLCJfY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jIiwidmlld0F1dG9ydW4iLCJfd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jIiwiY29tcCIsInN0b3BDb21wdXRhdGlvbiIsInN0b3AiLCJvblN0b3AiLCJfZXJyb3JJZlNob3VsZG50Q2FsbFN1YnNjcmliZSIsInN1YnNjcmliZSIsIm9wdGlvbnMiLCJzdWJIYW5kbGUiLCJjb25uZWN0aW9uIiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJfZmlyZUNhbGxiYWNrcyIsInZpZXciLCJ3aGljaCIsIm5vbnJlYWN0aXZlIiwiZmlyZUNhbGxiYWNrcyIsImNicyIsImkiLCJOIiwiX2NyZWF0ZVZpZXciLCJmb3JFeHBhbnNpb24iLCJkb0ZpcnN0UmVuZGVyIiwiaW5pdGlhbENvbnRlbnQiLCJkb21yYW5nZSIsIl9ET01SYW5nZSIsInRlYXJkb3duSG9vayIsInJhbmdlIiwiZWxlbWVudCIsIl9ET01CYWNrZW5kIiwiVGVhcmRvd24iLCJvbkVsZW1lbnRUZWFyZG93biIsInRlYXJkb3duIiwiX2Rlc3Ryb3lWaWV3IiwiX21hdGVyaWFsaXplVmlldyIsIl93b3JrU3RhY2siLCJfaW50b0FycmF5IiwibGFzdEh0bWxqcyIsImRvUmVuZGVyIiwiaHRtbGpzIiwiZmlyc3RSdW4iLCJfaXNDb250ZW50RXF1YWwiLCJkb01hdGVyaWFsaXplIiwicmFuZ2VzQW5kTm9kZXMiLCJfbWF0ZXJpYWxpemVET00iLCJzZXRNZW1iZXJzIiwib25JbnZhbGlkYXRlIiwiZGVzdHJveU1lbWJlcnMiLCJ1bmRlZmluZWQiLCJpbml0aWFsQ29udGVudHMiLCJfZXhwYW5kVmlldyIsInJlc3VsdCIsIl9leHBhbmQiLCJhY3RpdmUiLCJfSFRNTEpTRXhwYW5kZXIiLCJUcmFuc2Zvcm1pbmdWaXNpdG9yIiwiZXh0ZW5kIiwiZGVmIiwidmlzaXRPYmplY3QiLCJjb25zdHJ1Y3RWaWV3IiwidmlzaXRBdHRyaWJ1dGVzIiwiYXR0cnMiLCJ2aXNpdEF0dHJpYnV0ZSIsInZhbHVlIiwidGFnIiwiY3VycmVudFZpZXdJZlJlbmRlcmluZyIsImN1cnJlbnRWaWV3IiwidmlzaXQiLCJfZXhwYW5kQXR0cmlidXRlcyIsIl9za2lwTm9kZXMiLCJfZGVzdHJveU5vZGUiLCJub2RlIiwibm9kZVR5cGUiLCJ0ZWFyRG93bkVsZW1lbnQiLCJhIiwiYiIsIlJhdyIsIm9sZFZpZXciLCJjaGVja1JlbmRlckNvbnRlbnQiLCJjb250ZW50IiwiVmlzaXRvciIsImNvbnRlbnRBc1ZpZXciLCJjb250ZW50QXNGdW5jIiwiX19yb290Vmlld3MiLCJwYXJlbnRFbGVtZW50IiwibmV4dE5vZGUiLCJpbmRleE9mIiwic3BsaWNlIiwiYXR0YWNoIiwiaW5zZXJ0IiwicmVuZGVyV2l0aERhdGEiLCJkYXRhIiwiX1RlbXBsYXRlV2l0aCIsInJlbW92ZSIsImRlc3Ryb3kiLCJwYXJlbnRSYW5nZSIsImRldGFjaCIsInRvSFRNTCIsInRvSFRNTFdpdGhEYXRhIiwiX3RvVGV4dCIsInRleHRNb2RlIiwiVEVYVE1PREUiLCJTVFJJTkciLCJSQ0RBVEEiLCJBVFRSSUJVVEUiLCJ0b1RleHQiLCJnZXREYXRhIiwiZWxlbWVudE9yVmlldyIsInRoZVdpdGgiLCJnZXRWaWV3IiwiZGF0YVZhciIsImdldCIsImdldEVsZW1lbnREYXRhIiwiX3ZpZXdOYW1lIiwidmlld05hbWUiLCJfZ2V0Q3VycmVudFZpZXciLCJfZ2V0UGFyZW50VmlldyIsIl9nZXRFbGVtZW50VmlldyIsImVsZW0iLCJmb3JFbGVtZW50IiwiX2FkZEV2ZW50TWFwIiwiZXZlbnRNYXAiLCJ0aGlzSW5IYW5kbGVyIiwiaGFuZGxlcyIsImF0dGFjaGVkX2V2ZW50TWFwcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3BlYyIsImhhbmRsZXIiLCJjbGF1c2VzIiwic3BsaXQiLCJjbGF1c2UiLCJwYXJ0cyIsIm5ld0V2ZW50cyIsInNoaWZ0Iiwic2VsZWN0b3IiLCJqb2luIiwiX0V2ZW50U3VwcG9ydCIsImxpc3RlbiIsImV2dCIsImNvbnRhaW5zRWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVyVGhpcyIsImhhbmRsZXJBcmdzIiwiciIsImgiLCJoYXMiLCJkZWZhdWx0IiwiaXNPYmplY3QiLCJfY2FsY3VsYXRlQ29uZGl0aW9uIiwiY29uZCIsImlzQXJyYXkiLCJXaXRoIiwiY29udGVudEZ1bmMiLCJSZWFjdGl2ZVZhciIsInNldCIsIl9pc0VxdWFsQmluZGluZyIsInkiLCJlcnJvciIsIl9pc0VxdWFsIiwiX2lkZW50aXR5IiwiX3NldEJpbmRpbmdWYWx1ZSIsInJlYWN0aXZlVmFyIiwibWFwcGVyIiwidGhlbiIsIl9jcmVhdGVCaW5kaW5nIiwiYmluZGluZyIsIl9hdHRhY2hCaW5kaW5nc1RvVmlldyIsImJpbmRpbmdzIiwiZW50cmllcyIsIl9yZWYiLCJMZXQiLCJJZiIsImNvbmRpdGlvbkZ1bmMiLCJlbHNlRnVuYyIsIl9ub3QiLCJjb25kaXRpb24iLCJfX2NvbmRpdGlvblZhciIsIlVubGVzcyIsIkVhY2giLCJhcmdGdW5jIiwiZWFjaFZpZXciLCJzdWJ2aWV3cyIsImluaXRpYWxTdWJ2aWV3cyIsImV4cGFuZGVkVmFsdWVEZXAiLCJEZXBlbmRlbmN5IiwiZGVwZW5kIiwibnVtSXRlbXMiLCJpbkVsc2VNb2RlIiwic3RvcEhhbmRsZSIsImFyZ1ZhciIsInZhcmlhYmxlTmFtZSIsInVwZGF0ZUluZGljZXMiLCJmcm9tIiwidG8iLCJtZW1iZXJzIiwibWF5YmVTZXF1ZW5jZSIsIl92YXJpYWJsZSIsIl9zZXF1ZW5jZSIsIk9ic2VydmVTZXF1ZW5jZSIsIm9ic2VydmUiLCJfZWFjaFZpZXckYXJnVmFyJGdldCIsImFkZGVkQXQiLCJpZCIsIml0ZW0iLCJuZXdJdGVtVmlldyIsImNoYW5nZWQiLCJyZW1vdmVNZW1iZXIiLCJhZGRNZW1iZXIiLCJyZW1vdmVkQXQiLCJjaGFuZ2VkQXQiLCJuZXdJdGVtIiwib2xkSXRlbSIsIml0ZW1WaWV3IiwiZ2V0TWVtYmVyIiwibW92ZWRUbyIsImZyb21JbmRleCIsInRvSW5kZXgiLCJtb3ZlTWVtYmVyIiwiTWF0aCIsIm1pbiIsIm1heCIsIl9Bd2FpdCIsIl9Bd2FpdENvbnRlbnQiLCJfQmxhemUkY3VycmVudFZpZXckX3MiLCJhcmciLCJ3Iiwid3JhcHBlZEFyZ0Z1bmMiLCJ2aWV3VG9FdmFsdWF0ZUFyZyIsIm9yaWdpbmFsUGFyZW50VmlldyIsIndyYXBwZWRDb250ZW50RnVuYyIsIl9faXNUZW1wbGF0ZVdpdGgiLCJfSW5PdXRlclRlbXBsYXRlU2NvcGUiLCJ0ZW1wbGF0ZVZpZXciLCJfX2NoaWxkRG9lc250U3RhcnROZXdMZXhpY2FsU2NvcGUiLCJfY3JlYXRlQmluZGluZ3NIZWxwZXIiLCJmbiIsIm5hbWVzIiwic2xpY2UiLCJzb21lIiwiX2xleGljYWxCaW5kaW5nTG9va3VwIiwiY29uY2F0IiwiX2dsb2JhbEhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImRlcmVnaXN0ZXJIZWxwZXIiLCJiaW5kSWZJc0Z1bmN0aW9uIiwidGFyZ2V0IiwiYmluZERhdGFDb250ZXh0IiwiX2xlbjIiLCJfa2V5MiIsIl9PTERTVFlMRV9IRUxQRVIiLCJfZ2V0VGVtcGxhdGVIZWxwZXIiLCJ0ZW1wbGF0ZSIsInRtcGxJbnN0YW5jZUZ1bmMiLCJpc0tub3duT2xkU3R5bGVIZWxwZXIiLCJfX2hlbHBlcnMiLCJoZWxwZXIiLCJ3cmFwSGVscGVyIiwiX05PV0FSTl9PTERTVFlMRV9IRUxQRVJTIiwidGVtcGxhdGVGdW5jIiwiX2xlbjMiLCJfa2V5MyIsIl9sZXhpY2FsS2VlcEdvaW5nIiwiX19zdGFydHNOZXdMZXhpY2FsU2NvcGUiLCJfYmluZGluZyRnZXQiLCJfZ2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZUluc3RhbmNlIiwiX2dldEdsb2JhbEhlbHBlciIsImxvb2t1cCIsIl9vcHRpb25zIiwibG9va3VwVGVtcGxhdGUiLCJib3VuZFRtcGxJbnN0YW5jZSIsImZvdW5kVGVtcGxhdGUiLCJ0ZXN0IiwiX3BhcmVudERhdGEiLCJfbGVuNCIsIl9rZXk0IiwiaXNDYWxsZWRBc0Z1bmN0aW9uIiwiY2hhckF0IiwiaGVpZ2h0IiwiX2Z1bmN0aW9uV3JhcHBlZCIsImlzRnVuY3Rpb24iLCJpc0VtcHR5IiwicmVuZGVyRnVuY3Rpb24iLCJIZWxwZXJNYXAiLCJfX2V2ZW50TWFwcyIsImlzVGVtcGxhdGUiLCJ0Iiwib25DcmVhdGVkIiwib25SZW5kZXJlZCIsIm9uRGVzdHJveWVkIiwiX2dldENhbGxiYWNrcyIsImNhbGxiYWNrcyIsInRlbXBsYXRlQ29udGVudEJsb2NrIiwidGVtcGxhdGVFbHNlQmxvY2siLCJldmVudHMiLCJtIiwiX3RlbXBsYXRlSW5zdGFuY2UiLCJUZW1wbGF0ZUluc3RhbmNlIiwiaW5zdCIsImNyZWF0ZWRDYWxsYmFja3MiLCJyZW5kZXJlZENhbGxiYWNrcyIsImRlc3Ryb3llZENhbGxiYWNrcyIsIl9hbGxTdWJzUmVhZHlEZXAiLCJfYWxsU3Vic1JlYWR5IiwiX3N1YnNjcmlwdGlvbkhhbmRsZXMiLCIkIiwiZmluZEFsbCIsImZpbmQiLCJzdWJIYW5kbGVzIiwibGFzdFBhcmFtIiwibGFzdFBhcmFtT3B0aW9uc1BhdHRlcm4iLCJvblJlYWR5IiwiTWF0Y2giLCJPcHRpb25hbCIsIm9uRXJyb3IiLCJBbnkiLCJwb3AiLCJvbGRTdG9wcGVkIiwic3Vic2NyaXB0aW9uSWQiLCJzdWJzY3JpcHRpb25zUmVhZHkiLCJ2YWx1ZXMiLCJldmVyeSIsImhhbmRsZSIsInJlYWR5IiwiaGVscGVycyIsImRpY3QiLCJrIiwiY2FuVXNlR2V0dGVycyIsImRlZmluZVByb3BlcnR5IiwiY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jIiwib2xkVG1wbEluc3RhbmNlRnVuYyIsImV2ZW50TWFwMiIsImV2ZW50IiwiaW5zdGFuY2UiLCJjdXJyZW50RGF0YSIsInBhcmVudERhdGEiLCJVSSIsIkhhbmRsZWJhcnMiLCJTYWZlU3RyaW5nIiwic3RyaW5nIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFVjtBQUNBO0FBQ0E7QUFDQUEsS0FBSyxDQUFDQyxPQUFPLEdBQUksWUFBVztFQUMxQixNQUFNQyxVQUFVLEdBQUc7SUFDakIsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQUU7SUFDZixHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0QsTUFBTUMsVUFBVSxHQUFHLFNBQUFBLENBQVNDLENBQUMsRUFBRTtJQUM3QixPQUFPRixVQUFVLENBQUNFLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBRUQsT0FBTyxVQUFVQyxDQUFDLEVBQUU7SUFDbEIsT0FBT0EsQ0FBQyxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFSCxVQUFVLENBQUM7RUFDM0MsQ0FBQztBQUNILENBQUMsQ0FBRSxDQUFDO0FBRUpILEtBQUssQ0FBQ08sS0FBSyxHQUFHLFVBQVVDLEdBQUcsRUFBRTtFQUMzQkEsR0FBRyxHQUFHLFdBQVcsR0FBR0Es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QUMvRixjQUFjLEdBQUc3VSxLQUFLLENBQUM2VSxjQUFjO0FBRWhEK0YsVUFBVSxDQUFDM2EsT0FBTyxHQUFHRCxLQUFLLENBQUNDLE9BQU87O0FBRWxDO0FBQ0E7QUFDQTJhLFVBQVUsQ0FBQ0MsVUFBVSxHQUFHLFVBQVNDLE1BQU0sRUFBRTtFQUN2QyxJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtBQUN0QixDQUFDO0FBQ0RGLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDaGEsU0FBUyxDQUFDa2EsUUFBUSxHQUFHLFlBQVc7RUFDcEQsT0FBTyxJQUFJLENBQUNELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDIiwiZmlsZSI6Ii9wYWNrYWdlcy9ibGF6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG5hbWVzcGFjZSBCbGF6ZVxuICogQHN1bW1hcnkgVGhlIG5hbWVzcGFjZSBmb3IgYWxsIEJsYXplLXJlbGF0ZWQgbWV0aG9kcyBhbmQgY2xhc3Nlcy5cbiAqL1xuQmxhemUgPSB7fTtcblxuLy8gVXRpbGl0eSB0byBIVE1MLWVzY2FwZSBhIHN0cmluZy4gIEluY2x1ZGVkIGZvciBsZWdhY3kgcmVhc29ucy5cbi8vIFRPRE86IFNob3VsZCBiZSByZXBsYWNlZCB3aXRoIF8uZXNjYXBlIG9uY2UgdW5kZXJzY29yZSBpcyB1cGdyYWRlZCB0byBhIG5ld2VyXG4vLyAgICAgICB2ZXJzaW9uIHdoaWNoIGVzY2FwZXMgYCAoYmFja3RpY2spIGFzIHdlbGwuIFVuZGVyc2NvcmUgMS41LjIgZG9lcyBub3QuXG5CbGF6ZS5fZXNjYXBlID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBlc2NhcGVfbWFwID0ge1xuICAgIFwiPFwiOiBcIiZsdDtcIixcbiAgICBcIj5cIjogXCImZ3Q7XCIsXG4gICAgJ1wiJzogXCImcXVvdDtcIixcbiAgICBcIidcIjogXCImI3gyNztcIixcbiAgICBcIi9cIjogXCImI3gyRjtcIixcbiAgICBcImBcIjogXCImI3g2MDtcIiwgLyogSUUgYWxsb3dzIGJhY2t0aWNrLWRlbGltaXRlZCBhdHRyaWJ1dGVzPz8gKi9cbiAgICBcIiZcIjogXCImYW1wO1wiXG4gIH07XG4gIGNvbnN0IGVzY2FwZV9vbmUgPSBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGVzY2FwZV9tYXBbY107XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHgucmVwbGFjZSgvWyY8PlwiJ2BdL2csIGVzY2FwZV9vbmUpO1xuICB9O1xufSkoKTtcblxuQmxhemUuX3dhcm4gPSBmdW5jdGlvbiAobXNnKSB7XG4gIG1zZyA9ICdXYXJuaW5nOiAnICsgbXNnO1xuXG4gIGlmICgodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgfVxufTtcblxuY29uc3QgbmF0aXZlQmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG4vLyBBbiBpbXBsZW1lbnRhdGlvbiBvZiBfLmJpbmQgd2hpY2ggYWxsb3dzIGJldHRlciBvcHRpbWl6YXRpb24uXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzLW1hbmFnaW5nLWFyZ3VtZW50c1xuaWYgKG5hdGl2ZUJpbmQpIHtcbiAgQmxhemUuX2JpbmQgPSBmdW5jdGlvbiAoZnVuYywgb2JqLCAuLi5yZXN0KSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiBuYXRpdmVCaW5kLmNhbGwoZnVuYywgb2JqKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW29iaiwgLi4ucmVzdF07XG5cbiAgICByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBhcmdzKTtcbiAgfTtcbn1cbmVsc2Uge1xuICAvLyBBIHNsb3dlciBidXQgYmFja3dhcmRzIGNvbXBhdGlibGUgdmVyc2lvbi5cbiAgQmxhemUuX2JpbmQgPSBmdW5jdGlvbihvYmpBLCBvYmpCKSB7XG4gICAgb2JqQS5iaW5kKG9iakIpO1xuICB9O1xufVxuIiwibGV0IGRlYnVnRnVuYztcblxuLy8gV2UgY2FsbCBpbnRvIHVzZXIgY29kZSBpbiBtYW55IHBsYWNlcywgYW5kIGl0J3MgbmljZSB0byBjYXRjaCBleGNlcHRpb25zXG4vLyBwcm9wYWdhdGVkIGZyb20gdXNlciBjb2RlIGltbWVkaWF0ZWx5IHNvIHRoYXQgdGhlIHdob2xlIHN5c3RlbSBkb2Vzbid0IGp1c3Rcbi8vIGJyZWFrLiAgQ2F0Y2hpbmcgZXhjZXB0aW9ucyBpcyBlYXN5OyByZXBvcnRpbmcgdGhlbSBpcyBoYXJkLiAgVGhpcyBoZWxwZXJcbi8vIHJlcG9ydHMgZXhjZXB0aW9ucy5cbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyBgYGBcbi8vIHRyeSB7XG4vLyAgIC8vIC4uLiBzb21lU3R1ZmYgLi4uXG4vLyB9IGNhdGNoIChlKSB7XG4vLyAgIHJlcG9ydFVJRXhjZXB0aW9uKGUpO1xuLy8gfVxuLy8gYGBgXG4vL1xuLy8gQW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBtZXNzYWdlLlxuXG4vLyBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gY2F1c2UgYHJlcG9ydEV4Y2VwdGlvbmAgdG8gdGhyb3dcbi8vIHRoZSBuZXh0IGV4Y2VwdGlvbiByYXRoZXIgdGhhbiByZXBvcnRpbmcgaXQuICBUaGlzIGlzXG4vLyB1c2VmdWwgaW4gdW5pdCB0ZXN0cyB0aGF0IHRlc3QgZXJyb3IgbWVzc2FnZXMuXG5CbGF6ZS5fdGhyb3dOZXh0RXhjZXB0aW9uID0gZmFsc2U7XG5cbkJsYXplLl9yZXBvcnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZSwgbXNnKSB7XG4gIGlmIChCbGF6ZS5fdGhyb3dOZXh0RXhjZXB0aW9uKSB7XG4gICAgQmxhemUuX3Rocm93TmV4dEV4Y2VwdGlvbiA9IGZhbHNlO1xuICAgIHRocm93IGU7XG4gIH1cblxuICBpZiAoISBkZWJ1Z0Z1bmMpXG4gICAgLy8gYWRhcHRlZCBmcm9tIFRyYWNrZXJcbiAgICBkZWJ1Z0Z1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBNZXRlb3IgIT09IFwidW5kZWZpbmVkXCIgPyBNZXRlb3IuX2RlYnVnIDpcbiAgICAgICAgICAgICAgKCh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgJiYgY29uc29sZS5sb2cgPyBjb25zb2xlLmxvZyA6XG4gICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIH07XG5cbiAgLy8gSW4gQ2hyb21lLCBgZS5zdGFja2AgaXMgYSBtdWx0aWxpbmUgc3RyaW5nIHRoYXQgc3RhcnRzIHdpdGggdGhlIG1lc3NhZ2VcbiAgLy8gYW5kIGNvbnRhaW5zIGEgc3RhY2sgdHJhY2UuICBGdXJ0aGVybW9yZSwgYGNvbnNvbGUubG9nYCBtYWtlcyBpdCBjbGlja2FibGUuXG4gIC8vIGBjb25zb2xlLmxvZ2Agc3VwcGxpZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHR3byBhcmd1bWVudHMuXG4gIGRlYnVnRnVuYygpKG1zZyB8fCAnRXhjZXB0aW9uIGNhdWdodCBpbiB0ZW1wbGF0ZTonLCBlLnN0YWNrIHx8IGUubWVzc2FnZSB8fCBlKTtcbn07XG5cbkJsYXplLl93cmFwQ2F0Y2hpbmdFeGNlcHRpb25zID0gZnVuY3Rpb24gKGYsIHdoZXJlKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gZjtcblxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50cykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIEJsYXplLl9yZXBvcnRFeGNlcHRpb24oZSwgJ0V4Y2VwdGlvbiBpbiAnICsgd2hlcmUgKyAnOicpO1xuICAgIH1cbiAgfTtcbn07XG4iLCIvLy8gW25ld10gQmxhemUuVmlldyhbbmFtZV0sIHJlbmRlck1ldGhvZClcbi8vL1xuLy8vIEJsYXplLlZpZXcgaXMgdGhlIGJ1aWxkaW5nIGJsb2NrIG9mIHJlYWN0aXZlIERPTS4gIFZpZXdzIGhhdmVcbi8vLyB0aGUgZm9sbG93aW5nIGZlYXR1cmVzOlxuLy8vXG4vLy8gKiBsaWZlY3ljbGUgY2FsbGJhY2tzIC0gVmlld3MgYXJlIGNyZWF0ZWQsIHJlbmRlcmVkLCBhbmQgZGVzdHJveWVkLFxuLy8vICAgYW5kIGNhbGxiYWNrcyBjYW4gYmUgcmVnaXN0ZXJlZCB0byBmaXJlIHdoZW4gdGhlc2UgdGhpbmdzIGhhcHBlbi5cbi8vL1xuLy8vICogcGFyZW50IHBvaW50ZXIgLSBBIFZpZXcgcG9pbnRzIHRvIGl0cyBwYXJlbnRWaWV3LCB3aGljaCBpcyB0aGVcbi8vLyAgIFZpZXcgdGhhdCBjYXVzZWQgaXQgdG8gYmUgcmVuZGVyZWQuICBUaGVzZSBwb2ludGVycyBmb3JtIGFcbi8vLyAgIGhpZXJhcmNoeSBvciB0cmVlIG9mIFZpZXdzLlxuLy8vXG4vLy8gKiByZW5kZXIoKSBtZXRob2QgLSBBIFZpZXcncyByZW5kZXIoKSBtZXRob2Qgc3BlY2lmaWVzIHRoZSBET01cbi8vLyAgIChvciBIVE1MKSBjb250ZW50IG9mIHRoZSBWaWV3LiAgSWYgdGhlIG1ldGhvZCBlc3RhYmxpc2hlc1xuLy8vICAgcmVhY3RpdmUgZGVwZW5kZW5jaWVzLCBpdCBtYXkgYmUgcmUtcnVuLlxuLy8vXG4vLy8gKiBhIERPTVJhbmdlIC0gSWYgYSBWaWV3IGlzIHJlbmRlcmVkIHRvIERPTSwgaXRzIHBvc2l0aW9uIGFuZFxuLy8vICAgZXh0ZW50IGluIHRoZSBET00gYXJlIHRyYWNrZWQgdXNpbmcgYSBET01SYW5nZSBvYmplY3QuXG4vLy9cbi8vLyBXaGVuIGEgVmlldyBpcyBjb25zdHJ1Y3RlZCBieSBjYWxsaW5nIEJsYXplLlZpZXcsIHRoZSBWaWV3IGlzXG4vLy8gbm90IHlldCBjb25zaWRlcmVkIFwiY3JlYXRlZC5cIiAgSXQgZG9lc24ndCBoYXZlIGEgcGFyZW50VmlldyB5ZXQsXG4vLy8gYW5kIG5vIGxvZ2ljIGhhcyBiZWVuIHJ1biB0byBpbml0aWFsaXplIHRoZSBWaWV3LiAgQWxsIHJlYWxcbi8vLyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGF0IGxlYXN0IGNyZWF0aW9uIHRpbWUsIHdoZW4gdGhlIG9uVmlld0NyZWF0ZWRcbi8vLyBjYWxsYmFja3MgYXJlIGZpcmVkLCB3aGljaCBoYXBwZW5zIHdoZW4gdGhlIFZpZXcgaXMgXCJ1c2VkXCIgaW5cbi8vLyBzb21lIHdheSB0aGF0IHJlcXVpcmVzIGl0IHRvIGJlIHJlbmRlcmVkLlxuLy8vXG4vLy8gLi4ubW9yZSBsaWZlY3ljbGUgc3R1ZmZcbi8vL1xuLy8vIGBuYW1lYCBpcyBhbiBvcHRpb25hbCBzdHJpbmcgdGFnIGlkZW50aWZ5aW5nIHRoZSBWaWV3LiAgVGhlIG9ubHlcbi8vLyB0aW1lIGl0J3MgdXNlZCBpcyB3aGVuIGxvb2tpbmcgaW4gdGhlIFZpZXcgdHJlZSBmb3IgYSBWaWV3IG9mIGFcbi8vLyBwYXJ0aWN1bGFyIG5hbWU7IGZvciBleGFtcGxlLCBkYXRhIGNvbnRleHRzIGFyZSBzdG9yZWQgb24gVmlld3Ncbi8vLyBvZiBuYW1lIFwid2l0aFwiLiAgTmFtZXMgYXJlIGFsc28gdXNlZnVsIHdoZW4gZGVidWdnaW5nLCBzbyBpblxuLy8vIGdlbmVyYWwgaXQncyBnb29kIGZvciBmdW5jdGlvbnMgdGhhdCBjcmVhdGUgVmlld3MgdG8gc2V0IHRoZSBuYW1lLlxuLy8vIFZpZXdzIGFzc29jaWF0ZWQgd2l0aCB0ZW1wbGF0ZXMgaGF2ZSBuYW1lcyBvZiB0aGUgZm9ybSBcIlRlbXBsYXRlLmZvb1wiLlxuaW1wb3J0IHsgSFRNTCB9IGZyb20gJ21ldGVvci9odG1sanMnO1xuXG4vKipcbiAqIEEgYmluZGluZyBpcyBlaXRoZXIgYHVuZGVmaW5lZGAgKHBlbmRpbmcpLCBgeyBlcnJvciB9YCAocmVqZWN0ZWQpLCBvclxuICogYHsgdmFsdWUgfWAgKHJlc29sdmVkKS4gU3luY2hyb25vdXMgdmFsdWVzIGFyZSBpbW1lZGlhdGVseSByZXNvbHZlZCAoaS5lLixcbiAqIGB7IHZhbHVlIH1gIGlzIHVzZWQpLiBUaGUgb3RoZXIgc3RhdGVzIGFyZSByZXNlcnZlZCBmb3IgYXN5bmNocm9ub3VzIGJpbmRpbmdzXG4gKiAoaS5lLiwgdmFsdWVzIHdyYXBwZWQgd2l0aCBgUHJvbWlzZWBzKS5cbiAqIEB0eXBlZGVmIHt7IGVycm9yOiB1bmtub3duIH0gfCB7IHZhbHVlOiB1bmtub3duIH0gfCB1bmRlZmluZWR9IEJpbmRpbmdcbiAqL1xuXG4vKipcbiAqIEBjbGFzc1xuICogQHN1bW1hcnkgQ29uc3RydWN0b3IgZm9yIGEgVmlldywgd2hpY2ggcmVwcmVzZW50cyBhIHJlYWN0aXZlIHJlZ2lvbiBvZiBET00uXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdIE9wdGlvbmFsLiAgQSBuYW1lIGZvciB0aGlzIHR5cGUgb2YgVmlldy4gIFNlZSBbYHZpZXcubmFtZWBdKCN2aWV3X25hbWUpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyRnVuY3Rpb24gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgWypyZW5kZXJhYmxlIGNvbnRlbnQqXSgjUmVuZGVyYWJsZS1Db250ZW50KS4gIEluIHRoaXMgZnVuY3Rpb24sIGB0aGlzYCBpcyBib3VuZCB0byB0aGUgVmlldy5cbiAqL1xuQmxhemUuVmlldyA9IGZ1bmN0aW9uIChuYW1lLCByZW5kZXIpIHtcbiAgaWYgKCEgKHRoaXMgaW5zdGFuY2VvZiBCbGF6ZS5WaWV3KSlcbiAgICAvLyBjYWxsZWQgd2l0aG91dCBgbmV3YFxuICAgIHJldHVybiBuZXcgQmxhemUuVmlldyhuYW1lLCByZW5kZXIpO1xuXG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIG9taXR0ZWQgXCJuYW1lXCIgYXJndW1lbnRcbiAgICByZW5kZXIgPSBuYW1lO1xuICAgIG5hbWUgPSAnJztcbiAgfVxuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG5cbiAgdGhpcy5fY2FsbGJhY2tzID0ge1xuICAgIGNyZWF0ZWQ6IG51bGwsXG4gICAgcmVuZGVyZWQ6IG51bGwsXG4gICAgZGVzdHJveWVkOiBudWxsXG4gIH07XG5cbiAgLy8gU2V0dGluZyBhbGwgcHJvcGVydGllcyBoZXJlIGlzIGdvb2QgZm9yIHJlYWRhYmlsaXR5LFxuICAvLyBhbmQgYWxzbyBtYXkgaGVscCBDaHJvbWUgb3B0aW1pemUgdGhlIGNvZGUgYnkga2VlcGluZ1xuICAvLyB0aGUgVmlldyBvYmplY3QgZnJvbSBjaGFuZ2luZyBzaGFwZSB0b28gbXVjaC5cbiAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5faXNDcmVhdGVkRm9yRXhwYW5zaW9uID0gZmFsc2U7XG4gIHRoaXMuaXNSZW5kZXJlZCA9IGZhbHNlO1xuICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdGhpcy5faXNJblJlbmRlciA9IGZhbHNlO1xuICB0aGlzLnBhcmVudFZpZXcgPSBudWxsO1xuICB0aGlzLl9kb21yYW5nZSA9IG51bGw7XG4gIC8vIFRoaXMgZmxhZyBpcyBub3JtYWxseSBzZXQgdG8gZmFsc2UgZXhjZXB0IGZvciB0aGUgY2FzZXMgd2hlbiB2aWV3J3MgcGFyZW50XG4gIC8vIHdhcyBnZW5lcmF0ZWQgYXMgcGFydCBvZiBleHBhbmRpbmcgc29tZSBzeW50YWN0aWMgc3VnYXIgZXhwcmVzc2lvbnMgb3JcbiAgLy8gbWV0aG9kcy5cbiAgLy8gRXguOiBCbGF6ZS5yZW5kZXJXaXRoRGF0YSBpcyBhbiBlcXVpdmFsZW50IHRvIGNyZWF0aW5nIGEgdmlldyB3aXRoIHJlZ3VsYXJcbiAgLy8gQmxhemUucmVuZGVyIGFuZCB3cmFwcGluZyBpdCBpbnRvIHt7I3dpdGggZGF0YX19e3svd2l0aH19IHZpZXcuIFNpbmNlIHRoZVxuICAvLyB1c2VycyBkb24ndCBrbm93IGFueXRoaW5nIGFib3V0IHRoZXNlIGdlbmVyYXRlZCBwYXJlbnQgdmlld3MsIEJsYXplIG5lZWRzXG4gIC8vIHRoaXMgaW5mb3JtYXRpb24gdG8gYmUgYXZhaWxhYmxlIG9uIHZpZXdzIHRvIG1ha2Ugc21hcnRlciBkZWNpc2lvbnMuIEZvclxuICAvLyBleGFtcGxlOiByZW1vdmluZyB0aGUgZ2VuZXJhdGVkIHBhcmVudCB2aWV3IHdpdGggdGhlIHZpZXcgb24gQmxhemUucmVtb3ZlLlxuICB0aGlzLl9oYXNHZW5lcmF0ZWRQYXJlbnQgPSBmYWxzZTtcbiAgLy8gQmluZGluZ3MgYWNjZXNzaWJsZSB0byBjaGlsZHJlbiB2aWV3cyAodmlhIHZpZXcubG9va3VwKCduYW1lJykpIHdpdGhpbiB0aGVcbiAgLy8gY2xvc2VzdCB0ZW1wbGF0ZSB2aWV3LlxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFJlYWN0aXZlVmFyPEJpbmRpbmc+Pn0gKi9cbiAgdGhpcy5fc2NvcGVCaW5kaW5ncyA9IHt9O1xuXG4gIHRoaXMucmVuZGVyQ291bnQgPSAwO1xufTtcblxuQmxhemUuVmlldy5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG5cbkJsYXplLlZpZXcucHJvdG90eXBlLm9uVmlld0NyZWF0ZWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fY2FsbGJhY2tzLmNyZWF0ZWQgPSB0aGlzLl9jYWxsYmFja3MuY3JlYXRlZCB8fCBbXTtcbiAgdGhpcy5fY2FsbGJhY2tzLmNyZWF0ZWQucHVzaChjYik7XG59O1xuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5fb25WaWV3UmVuZGVyZWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fY2FsbGJhY2tzLnJlbmRlcmVkID0gdGhpcy5fY2FsbGJhY2tzLnJlbmRlcmVkIHx8IFtdO1xuICB0aGlzLl9jYWxsYmFja3MucmVuZGVyZWQucHVzaChjYik7XG59O1xuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5vblZpZXdSZWFkeSA9IGZ1bmN0aW9uIChjYikge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgZmlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBUcmFja2VyLmFmdGVyRmx1c2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEgc2VsZi5pc0Rlc3Ryb3llZCkge1xuICAgICAgICBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KHNlbGYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYi5jYWxsKHNlbGYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgc2VsZi5fb25WaWV3UmVuZGVyZWQoZnVuY3Rpb24gb25WaWV3UmVuZGVyZWQoKSB7XG4gICAgaWYgKHNlbGYuaXNEZXN0cm95ZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKCEgc2VsZi5fZG9tcmFuZ2UuYXR0YWNoZWQpXG4gICAgICBzZWxmLl9kb21yYW5nZS5vbkF0dGFjaGVkKGZpcmUpO1xuICAgIGVsc2VcbiAgICAgIGZpcmUoKTtcbiAgfSk7XG59O1xuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5vblZpZXdEZXN0cm95ZWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fY2FsbGJhY2tzLmRlc3Ryb3llZCA9IHRoaXMuX2NhbGxiYWNrcy5kZXN0cm95ZWQgfHwgW107XG4gIHRoaXMuX2NhbGxiYWNrcy5kZXN0cm95ZWQucHVzaChjYik7XG59O1xuQmxhemUuVmlldy5wcm90b3R5cGUucmVtb3ZlVmlld0Rlc3Ryb3llZExpc3RlbmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIGNvbnN0IGRlc3Ryb3llZCA9IHRoaXMuX2NhbGxiYWNrcy5kZXN0cm95ZWQ7XG4gIGlmICghIGRlc3Ryb3llZClcbiAgICByZXR1cm47XG4gIGNvbnN0IGluZGV4ID0gZGVzdHJveWVkLmxhc3RJbmRleE9mKGNiKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIC8vIFhYWCBZb3UnZCB0aGluayB0aGUgcmlnaHQgdGhpbmcgdG8gZG8gd291bGQgYmUgc3BsaWNlLCBidXQgX2ZpcmVDYWxsYmFja3NcbiAgICAvLyBnZXRzIHNhZCBpZiB5b3UgcmVtb3ZlIGNhbGxiYWNrcyB3aGlsZSBpdGVyYXRpbmcgb3ZlciB0aGUgbGlzdC4gIFNob3VsZFxuICAgIC8vIGNoYW5nZSB0aGlzIHRvIHVzZSBjYWxsYmFjay1ob29rIG9yIEV2ZW50RW1pdHRlciBvciBzb21ldGhpbmcgZWxzZSB0aGF0XG4gICAgLy8gcHJvcGVybHkgc3VwcG9ydHMgcmVtb3ZhbC5cbiAgICBkZXN0cm95ZWRbaW5kZXhdID0gbnVsbDtcbiAgfVxufTtcblxuLy8vIFZpZXcjYXV0b3J1bihmdW5jKVxuLy8vXG4vLy8gU2V0cyB1cCBhIFRyYWNrZXIgYXV0b3J1biB0aGF0IGlzIFwic2NvcGVkXCIgdG8gdGhpcyBWaWV3IGluIHR3b1xuLy8vIGltcG9ydGFudCB3YXlzOiAxKSBCbGF6ZS5jdXJyZW50VmlldyBpcyBhdXRvbWF0aWNhbGx5IHNldFxuLy8vIG9uIGV2ZXJ5IHJlLXJ1biwgYW5kIDIpIHRoZSBhdXRvcnVuIGlzIHN0b3BwZWQgd2hlbiB0aGVcbi8vLyBWaWV3IGlzIGRlc3Ryb3llZC4gIEFzIHdpdGggVHJhY2tlci5hdXRvcnVuLCB0aGUgZmlyc3QgcnVuIG9mXG4vLy8gdGhlIGZ1bmN0aW9uIGlzIGltbWVkaWF0ZSwgYW5kIGEgQ29tcHV0YXRpb24gb2JqZWN0IHRoYXQgY2FuXG4vLy8gYmUgdXNlZCB0byBzdG9wIHRoZSBhdXRvcnVuIGlzIHJldHVybmVkLlxuLy8vXG4vLy8gVmlldyNhdXRvcnVuIGlzIG1lYW50IHRvIGJlIGNhbGxlZCBmcm9tIFZpZXcgY2FsbGJhY2tzIGxpa2Vcbi8vLyBvblZpZXdDcmVhdGVkLCBvciBmcm9tIG91dHNpZGUgdGhlIHJlbmRlcmluZyBwcm9jZXNzLiAgSXQgbWF5IG5vdFxuLy8vIGJlIGNhbGxlZCBiZWZvcmUgdGhlIG9uVmlld0NyZWF0ZWQgY2FsbGJhY2tzIGFyZSBmaXJlZCAodG9vIGVhcmx5KSxcbi8vLyBvciBmcm9tIGEgcmVuZGVyKCkgbWV0aG9kICh0b28gY29uZnVzaW5nKS5cbi8vL1xuLy8vIFR5cGljYWxseSwgYXV0b3J1bnMgdGhhdCB1cGRhdGUgdGhlIHN0YXRlXG4vLy8gb2YgdGhlIFZpZXcgKGFzIGluIEJsYXplLldpdGgpIHNob3VsZCBiZSBzdGFydGVkIGZyb20gYW4gb25WaWV3Q3JlYXRlZFxuLy8vIGNhbGxiYWNrLiAgQXV0b3J1bnMgdGhhdCB1cGRhdGUgdGhlIERPTSBzaG91bGQgYmUgc3RhcnRlZFxuLy8vIGZyb20gZWl0aGVyIG9uVmlld0NyZWF0ZWQgKGd1YXJkZWQgYWdhaW5zdCB0aGUgYWJzZW5jZSBvZlxuLy8vIHZpZXcuX2RvbXJhbmdlKSwgb3Igb25WaWV3UmVhZHkuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5hdXRvcnVuID0gZnVuY3Rpb24gKGYsIF9pblZpZXdTY29wZSwgZGlzcGxheU5hbWUpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgLy8gVGhlIHJlc3RyaWN0aW9ucyBvbiB3aGVuIFZpZXcjYXV0b3J1biBjYW4gYmUgY2FsbGVkIGFyZSBpbiBvcmRlclxuICAvLyB0byBhdm9pZCBiYWQgcGF0dGVybnMsIGxpa2UgY3JlYXRpbmcgYSBCbGF6ZS5WaWV3IGFuZCBpbW1lZGlhdGVseVxuICAvLyBjYWxsaW5nIGF1dG9ydW4gb24gaXQuICBBIGZyZXNobHkgY3JlYXRlZCBWaWV3IGlzIG5vdCByZWFkeSB0b1xuICAvLyBoYXZlIGxvZ2ljIHJ1biBvbiBpdDsgaXQgZG9lc24ndCBoYXZlIGEgcGFyZW50VmlldywgZm9yIGV4YW1wbGUuXG4gIC8vIEl0J3Mgd2hlbiB0aGUgVmlldyBpcyBtYXRlcmlhbGl6ZWQgb3IgZXhwYW5kZWQgdGhhdCB0aGUgb25WaWV3Q3JlYXRlZFxuICAvLyBoYW5kbGVycyBhcmUgZmlyZWQgYW5kIHRoZSBWaWV3IHN0YXJ0cyB1cC5cbiAgLy9cbiAgLy8gTGV0dGluZyB0aGUgcmVuZGVyKCkgbWV0aG9kIGNhbGwgYHRoaXMuYXV0b3J1bigpYCBpcyBwcm9ibGVtYXRpY1xuICAvLyBiZWNhdXNlIG9mIHJlLXJlbmRlci4gIFRoZSBiZXN0IHdlIGNhbiBkbyBpcyB0byBzdG9wIHRoZSBvbGRcbiAgLy8gYXV0b3J1biBhbmQgc3RhcnQgYSBuZXcgb25lIGZvciBlYWNoIHJlbmRlciwgYnV0IHRoYXQncyBhIHBhdHRlcm5cbiAgLy8gd2UgdHJ5IHRvIGF2b2lkIGludGVybmFsbHkgYmVjYXVzZSBpdCBsZWFkcyB0byBoZWxwZXJzIGJlaW5nXG4gIC8vIGNhbGxlZCBleHRyYSB0aW1lcywgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGF1dG9ydW4gY2F1c2VzIHRoZVxuICAvLyB2aWV3IHRvIHJlLXJlbmRlciAoYW5kIHRodXMgdGhlIGF1dG9ydW4gdG8gYmUgdG9ybiBkb3duIGFuZCBhXG4gIC8vIG5ldyBvbmUgZXN0YWJsaXNoZWQpLlxuICAvL1xuICAvLyBXZSBjb3VsZCBsaWZ0IHRoZXNlIHJlc3RyaWN0aW9ucyBpbiB2YXJpb3VzIHdheXMuICBPbmUgaW50ZXJlc3RpbmdcbiAgLy8gaWRlYSBpcyB0byBhbGxvdyB5b3UgdG8gY2FsbCBgdmlldy5hdXRvcnVuYCBhZnRlciBpbnN0YW50aWF0aW5nXG4gIC8vIGB2aWV3YCwgYW5kIGF1dG9tYXRpY2FsbHkgd3JhcCBpdCBpbiBgdmlldy5vblZpZXdDcmVhdGVkYCwgZGVmZXJyaW5nXG4gIC8vIHRoZSBhdXRvcnVuIHNvIHRoYXQgaXQgc3RhcnRzIGF0IGFuIGFwcHJvcHJpYXRlIHRpbWUuICBIb3dldmVyLFxuICAvLyB0aGVuIHdlIGNhbid0IHJldHVybiB0aGUgQ29tcHV0YXRpb24gb2JqZWN0IHRvIHRoZSBjYWxsZXIsIGJlY2F1c2VcbiAgLy8gaXQgZG9lc24ndCBleGlzdCB5ZXQuXG4gIGlmICghIHNlbGYuaXNDcmVhdGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmlldyNhdXRvcnVuIG11c3QgYmUgY2FsbGVkIGZyb20gdGhlIGNyZWF0ZWQgY2FsbGJhY2sgYXQgdGhlIGVhcmxpZXN0XCIpO1xuICB9XG4gIGlmICh0aGlzLl9pc0luUmVuZGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY2FsbCBWaWV3I2F1dG9ydW4gZnJvbSBpbnNpZGUgcmVuZGVyKCk7IHRyeSBjYWxsaW5nIGl0IGZyb20gdGhlIGNyZWF0ZWQgb3IgcmVuZGVyZWQgY2FsbGJhY2tcIik7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZUluc3RhbmNlRnVuYyA9IEJsYXplLlRlbXBsYXRlLl9jdXJyZW50VGVtcGxhdGVJbnN0YW5jZUZ1bmM7XG5cbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uIHZpZXdBdXRvcnVuKGMpIHtcbiAgICByZXR1cm4gQmxhemUuX3dpdGhDdXJyZW50VmlldyhfaW5WaWV3U2NvcGUgfHwgc2VsZiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEJsYXplLlRlbXBsYXRlLl93aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmMoXG4gICAgICAgIHRlbXBsYXRlSW5zdGFuY2VGdW5jLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGYuY2FsbChzZWxmLCBjKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2l2ZSB0aGUgYXV0b3J1biBmdW5jdGlvbiBhIGJldHRlciBuYW1lIGZvciBkZWJ1Z2dpbmcgYW5kIHByb2ZpbGluZy5cbiAgLy8gVGhlIGBkaXNwbGF5TmFtZWAgcHJvcGVydHkgaXMgbm90IHBhcnQgb2YgdGhlIHNwZWMgYnV0IGJyb3dzZXJzIGxpa2UgQ2hyb21lXG4gIC8vIGFuZCBGaXJlZm94IHByZWZlciBpdCBpbiBkZWJ1Z2dlcnMgb3ZlciB0aGUgbmFtZSBmdW5jdGlvbiB3YXMgZGVjbGFyZWQgYnkuXG4gIGZ1bmMuZGlzcGxheU5hbWUgPVxuICAgIChzZWxmLm5hbWUgfHwgJ2Fub255bW91cycpICsgJzonICsgKGRpc3BsYXlOYW1lIHx8ICdhbm9ueW1vdXMnKTtcbiAgY29uc3QgY29tcCA9IFRyYWNrZXIuYXV0b3J1bihmdW5jKTtcblxuICBjb25zdCBzdG9wQ29tcHV0YXRpb24gPSBmdW5jdGlvbiAoKSB7IGNvbXAuc3RvcCgpOyB9O1xuICBzZWxmLm9uVmlld0Rlc3Ryb3llZChzdG9wQ29tcHV0YXRpb24pO1xuICBjb21wLm9uU3RvcChmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5yZW1vdmVWaWV3RGVzdHJveWVkTGlzdGVuZXIoc3RvcENvbXB1dGF0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXA7XG59O1xuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5fZXJyb3JJZlNob3VsZG50Q2FsbFN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCEgc2VsZi5pc0NyZWF0ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaWV3I3N1YnNjcmliZSBtdXN0IGJlIGNhbGxlZCBmcm9tIHRoZSBjcmVhdGVkIGNhbGxiYWNrIGF0IHRoZSBlYXJsaWVzdFwiKTtcbiAgfVxuICBpZiAoc2VsZi5faXNJblJlbmRlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGNhbGwgVmlldyNzdWJzY3JpYmUgZnJvbSBpbnNpZGUgcmVuZGVyKCk7IHRyeSBjYWxsaW5nIGl0IGZyb20gdGhlIGNyZWF0ZWQgb3IgcmVuZGVyZWQgY2FsbGJhY2tcIik7XG4gIH1cbiAgaWYgKHNlbGYuaXNEZXN0cm95ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIFZpZXcjc3Vic2NyaWJlIGZyb20gaW5zaWRlIHRoZSBkZXN0cm95ZWQgY2FsbGJhY2ssIHRyeSBjYWxsaW5nIGl0IGluc2lkZSBjcmVhdGVkIG9yIHJlbmRlcmVkLlwiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBKdXN0IGxpa2UgQmxhemUuVmlldyNhdXRvcnVuLCBidXQgd2l0aCBNZXRlb3Iuc3Vic2NyaWJlIGluc3RlYWQgb2ZcbiAqIFRyYWNrZXIuYXV0b3J1bi4gU3RvcCB0aGUgc3Vic2NyaXB0aW9uIHdoZW4gdGhlIHZpZXcgaXMgZGVzdHJveWVkLlxuICogQHJldHVybiB7U3Vic2NyaXB0aW9uSGFuZGxlfSBBIGhhbmRsZSB0byB0aGUgc3Vic2NyaXB0aW9uIHNvIHRoYXQgeW91IGNhblxuICogc2VlIGlmIGl0IGlzIHJlYWR5LCBvciBzdG9wIGl0IG1hbnVhbGx5XG4gKi9cbkJsYXplLlZpZXcucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChhcmdzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBzZWxmLl9lcnJvcklmU2hvdWxkbnRDYWxsU3Vic2NyaWJlKCk7XG5cbiAgbGV0IHN1YkhhbmRsZTtcbiAgaWYgKG9wdGlvbnMuY29ubmVjdGlvbikge1xuICAgIHN1YkhhbmRsZSA9IG9wdGlvbnMuY29ubmVjdGlvbi5zdWJzY3JpYmUuYXBwbHkob3B0aW9ucy5jb25uZWN0aW9uLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJIYW5kbGUgPSBNZXRlb3Iuc3Vic2NyaWJlLmFwcGx5KE1ldGVvciwgYXJncyk7XG4gIH1cblxuICBzZWxmLm9uVmlld0Rlc3Ryb3llZChmdW5jdGlvbiAoKSB7XG4gICAgc3ViSGFuZGxlLnN0b3AoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YkhhbmRsZTtcbn07XG5cbkJsYXplLlZpZXcucHJvdG90eXBlLmZpcnN0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCEgdGhpcy5faXNBdHRhY2hlZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaWV3IG11c3QgYmUgYXR0YWNoZWQgYmVmb3JlIGFjY2Vzc2luZyBpdHMgRE9NXCIpO1xuXG4gIHJldHVybiB0aGlzLl9kb21yYW5nZS5maXJzdE5vZGUoKTtcbn07XG5cbkJsYXplLlZpZXcucHJvdG90eXBlLmxhc3ROb2RlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoISB0aGlzLl9pc0F0dGFjaGVkKVxuICAgIHRocm93IG5ldyBFcnJvcihcIlZpZXcgbXVzdCBiZSBhdHRhY2hlZCBiZWZvcmUgYWNjZXNzaW5nIGl0cyBET01cIik7XG5cbiAgcmV0dXJuIHRoaXMuX2RvbXJhbmdlLmxhc3ROb2RlKCk7XG59O1xuXG5CbGF6ZS5fZmlyZUNhbGxiYWNrcyA9IGZ1bmN0aW9uICh2aWV3LCB3aGljaCkge1xuICBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KHZpZXcsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFja2VyLm5vbnJlYWN0aXZlKGZ1bmN0aW9uIGZpcmVDYWxsYmFja3MoKSB7XG4gICAgICBjb25zdCBjYnMgPSB2aWV3Ll9jYWxsYmFja3Nbd2hpY2hdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIE4gPSAoY2JzICYmIGNicy5sZW5ndGgpOyBpIDwgTjsgaSsrKVxuICAgICAgICBjYnNbaV0gJiYgY2JzW2ldLmNhbGwodmlldyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuQmxhemUuX2NyZWF0ZVZpZXcgPSBmdW5jdGlvbiAodmlldywgcGFyZW50VmlldywgZm9yRXhwYW5zaW9uKSB7XG4gIGlmICh2aWV3LmlzQ3JlYXRlZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCByZW5kZXIgdGhlIHNhbWUgVmlldyB0d2ljZVwiKTtcblxuICB2aWV3LnBhcmVudFZpZXcgPSAocGFyZW50VmlldyB8fCBudWxsKTtcbiAgdmlldy5pc0NyZWF0ZWQgPSB0cnVlO1xuICBpZiAoZm9yRXhwYW5zaW9uKVxuICAgIHZpZXcuX2lzQ3JlYXRlZEZvckV4cGFuc2lvbiA9IHRydWU7XG5cbiAgQmxhemUuX2ZpcmVDYWxsYmFja3ModmlldywgJ2NyZWF0ZWQnKTtcbn07XG5cbmNvbnN0IGRvRmlyc3RSZW5kZXIgPSBmdW5jdGlvbiAodmlldywgaW5pdGlhbENvbnRlbnQpIHtcbiAgY29uc3QgZG9tcmFuZ2UgPSBuZXcgQmxhemUuX0RPTVJhbmdlKGluaXRpYWxDb250ZW50KTtcbiAgdmlldy5fZG9tcmFuZ2UgPSBkb21yYW5nZTtcbiAgZG9tcmFuZ2UudmlldyA9IHZpZXc7XG4gIHZpZXcuaXNSZW5kZXJlZCA9IHRydWU7XG4gIEJsYXplLl9maXJlQ2FsbGJhY2tzKHZpZXcsICdyZW5kZXJlZCcpO1xuXG4gIGxldCB0ZWFyZG93bkhvb2sgPSBudWxsO1xuXG4gIGRvbXJhbmdlLm9uQXR0YWNoZWQoZnVuY3Rpb24gYXR0YWNoZWQocmFuZ2UsIGVsZW1lbnQpIHtcbiAgICB2aWV3Ll9pc0F0dGFjaGVkID0gdHJ1ZTtcblxuICAgIHRlYXJkb3duSG9vayA9IEJsYXplLl9ET01CYWNrZW5kLlRlYXJkb3duLm9uRWxlbWVudFRlYXJkb3duKFxuICAgICAgZWxlbWVudCwgZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICAgIEJsYXplLl9kZXN0cm95Vmlldyh2aWV3LCB0cnVlIC8qIF9za2lwTm9kZXMgKi8pO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIC8vIHRlYXIgZG93biB0aGUgdGVhcmRvd24gaG9va1xuICB2aWV3Lm9uVmlld0Rlc3Ryb3llZChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlYXJkb3duSG9vaykgdGVhcmRvd25Ib29rLnN0b3AoKTtcbiAgICB0ZWFyZG93bkhvb2sgPSBudWxsO1xuICB9KTtcblxuICByZXR1cm4gZG9tcmFuZ2U7XG59O1xuXG4vLyBUYWtlIGFuIHVuY3JlYXRlZCBWaWV3IGB2aWV3YCBhbmQgY3JlYXRlIGFuZCByZW5kZXIgaXQgdG8gRE9NLFxuLy8gc2V0dGluZyB1cCB0aGUgYXV0b3J1biB0aGF0IHVwZGF0ZXMgdGhlIFZpZXcuICBSZXR1cm5zIGEgbmV3XG4vLyBET01SYW5nZSwgd2hpY2ggaGFzIGJlZW4gYXNzb2NpYXRlZCB3aXRoIHRoZSBWaWV3LlxuLy9cbi8vIFRoZSBwcml2YXRlIGFyZ3VtZW50cyBgX3dvcmtTdGFja2AgYW5kIGBfaW50b0FycmF5YCBhcmUgcGFzc2VkIGluXG4vLyBieSBCbGF6ZS5fbWF0ZXJpYWxpemVET00gYW5kIGFyZSBvbmx5IHByZXNlbnQgZm9yIHJlY3Vyc2l2ZSBjYWxsc1xuLy8gKHdoZW4gdGhlcmUgaXMgc29tZSBvdGhlciBfbWF0ZXJpYWxpemVWaWV3IG9uIHRoZSBzdGFjaykuICBJZlxuLy8gcHJvdmlkZWQsIHRoZW4gd2UgYXZvaWQgdGhlIG11dHVhbCByZWN1cnNpb24gb2YgY2FsbGluZyBiYWNrIGludG9cbi8vIEJsYXplLl9tYXRlcmlhbGl6ZURPTSBzbyB0aGF0IGRlZXAgVmlldyBoaWVyYXJjaGllcyBkb24ndCBibG93IHRoZVxuLy8gc3RhY2suICBJbnN0ZWFkLCB3ZSBwdXNoIHRhc2tzIG9udG8gd29ya1N0YWNrIGZvciB0aGUgaW5pdGlhbFxuLy8gcmVuZGVyaW5nIGFuZCBzdWJzZXF1ZW50IHNldHVwIG9mIHRoZSBWaWV3LCBhbmQgdGhleSBhcmUgZG9uZSBhZnRlclxuLy8gd2UgcmV0dXJuLiAgV2hlbiB0aGVyZSBpcyBhIF93b3JrU3RhY2ssIHdlIGRvIG5vdCByZXR1cm4gdGhlIG5ld1xuLy8gRE9NUmFuZ2UsIGJ1dCBpbnN0ZWFkIHB1c2ggaXQgaW50byBfaW50b0FycmF5IGZyb20gYSBfd29ya1N0YWNrXG4vLyB0YXNrLlxuQmxhemUuX21hdGVyaWFsaXplVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBwYXJlbnRWaWV3LCBfd29ya1N0YWNrLCBfaW50b0FycmF5KSB7XG4gIEJsYXplLl9jcmVhdGVWaWV3KHZpZXcsIHBhcmVudFZpZXcpO1xuXG4gIGxldCBkb21yYW5nZTtcbiAgbGV0IGxhc3RIdG1sanM7XG4gIC8vIFdlIGRvbid0IGV4cGVjdCB0byBiZSBjYWxsZWQgaW4gYSBDb21wdXRhdGlvbiwgYnV0IGp1c3QgaW4gY2FzZSxcbiAgLy8gd3JhcCBpbiBUcmFja2VyLm5vbnJlYWN0aXZlLlxuICBUcmFja2VyLm5vbnJlYWN0aXZlKGZ1bmN0aW9uICgpIHtcbiAgICB2aWV3LmF1dG9ydW4oZnVuY3Rpb24gZG9SZW5kZXIoYykge1xuICAgICAgLy8gYHZpZXcuYXV0b3J1bmAgc2V0cyB0aGUgY3VycmVudCB2aWV3LlxuICAgICAgdmlldy5yZW5kZXJDb3VudCA9IHZpZXcucmVuZGVyQ291bnQgKyAxO1xuICAgICAgdmlldy5faXNJblJlbmRlciA9IHRydWU7XG4gICAgICAvLyBBbnkgZGVwZW5kZW5jaWVzIHRoYXQgc2hvdWxkIGludmFsaWRhdGUgdGhpcyBDb21wdXRhdGlvbiBjb21lXG4gICAgICAvLyBmcm9tIHRoaXMgbGluZTpcbiAgICAgIGNvbnN0IGh0bWxqcyA9IHZpZXcuX3JlbmRlcigpO1xuICAgICAgdmlldy5faXNJblJlbmRlciA9IGZhbHNlO1xuXG4gICAgICBpZiAoISBjLmZpcnN0UnVuICYmICEgQmxhemUuX2lzQ29udGVudEVxdWFsKGxhc3RIdG1sanMsIGh0bWxqcykpIHtcbiAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZShmdW5jdGlvbiBkb01hdGVyaWFsaXplKCkge1xuICAgICAgICAgIC8vIHJlLXJlbmRlclxuICAgICAgICAgIGNvbnN0IHJhbmdlc0FuZE5vZGVzID0gQmxhemUuX21hdGVyaWFsaXplRE9NKGh0bWxqcywgW10sIHZpZXcpO1xuICAgICAgICAgIGRvbXJhbmdlLnNldE1lbWJlcnMocmFuZ2VzQW5kTm9kZXMpO1xuICAgICAgICAgIEJsYXplLl9maXJlQ2FsbGJhY2tzKHZpZXcsICdyZW5kZXJlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxhc3RIdG1sanMgPSBodG1sanM7XG5cbiAgICAgIC8vIENhdXNlcyBhbnkgbmVzdGVkIHZpZXdzIHRvIHN0b3AgaW1tZWRpYXRlbHksIG5vdCB3aGVuIHdlIGNhbGxcbiAgICAgIC8vIGBzZXRNZW1iZXJzYCB0aGUgbmV4dCB0aW1lIGFyb3VuZCB0aGUgYXV0b3J1bi4gIE90aGVyd2lzZSxcbiAgICAgIC8vIGhlbHBlcnMgaW4gdGhlIERPTSB0cmVlIHRvIGJlIHJlcGxhY2VkIG1pZ2h0IGJlIHNjaGVkdWxlZFxuICAgICAgLy8gdG8gcmUtcnVuIGJlZm9yZSB3ZSBoYXZlIGEgY2hhbmNlIHRvIHN0b3AgdGhlbS5cbiAgICAgIFRyYWNrZXIub25JbnZhbGlkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRvbXJhbmdlKSB7XG4gICAgICAgICAgZG9tcmFuZ2UuZGVzdHJveU1lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgdW5kZWZpbmVkLCAnbWF0ZXJpYWxpemUnKTtcblxuICAgIC8vIGZpcnN0IHJlbmRlci4gIGxhc3RIdG1sanMgaXMgdGhlIGZpcnN0IGh0bWxqcy5cbiAgICBsZXQgaW5pdGlhbENvbnRlbnRzO1xuICAgIGlmICghIF93b3JrU3RhY2spIHtcbiAgICAgIGluaXRpYWxDb250ZW50cyA9IEJsYXplLl9tYXRlcmlhbGl6ZURPTShsYXN0SHRtbGpzLCBbXSwgdmlldyk7XG4gICAgICBkb21yYW5nZSA9IGRvRmlyc3RSZW5kZXIodmlldywgaW5pdGlhbENvbnRlbnRzKTtcbiAgICAgIGluaXRpYWxDb250ZW50cyA9IG51bGw7IC8vIGhlbHAgR0MgYmVjYXVzZSB3ZSBjbG9zZSBvdmVyIHRoaXMgc2NvcGUgYSBsb3RcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UncmUgYmVpbmcgY2FsbGVkIGZyb20gQmxhemUuX21hdGVyaWFsaXplRE9NLCBzbyB0byBhdm9pZFxuICAgICAgLy8gcmVjdXJzaW9uIGFuZCBzYXZlIHN0YWNrIHNwYWNlLCBwcm92aWRlIGEgZGVzY3JpcHRpb24gb2YgdGhlXG4gICAgICAvLyB3b3JrIHRvIGJlIGRvbmUgaW5zdGVhZCBvZiBkb2luZyBpdC4gIFRhc2tzIHB1c2hlZCBvbnRvXG4gICAgICAvLyBfd29ya1N0YWNrIHdpbGwgYmUgZG9uZSBpbiBMSUZPIG9yZGVyIGFmdGVyIHdlIHJldHVybi5cbiAgICAgIC8vIFRoZSB3b3JrIHdpbGwgc3RpbGwgYmUgZG9uZSB3aXRoaW4gYSBUcmFja2VyLm5vbnJlYWN0aXZlLFxuICAgICAgLy8gYmVjYXVzZSBpdCB3aWxsIGJlIGRvbmUgYnkgc29tZSBjYWxsIHRvIEJsYXplLl9tYXRlcmlhbGl6ZURPTVxuICAgICAgLy8gKHdoaWNoIGlzIGFsd2F5cyBjYWxsZWQgaW4gYSBUcmFja2VyLm5vbnJlYWN0aXZlKS5cbiAgICAgIGluaXRpYWxDb250ZW50cyA9IFtdO1xuICAgICAgLy8gcHVzaCB0aGlzIGZ1bmN0aW9uIGZpcnN0IHNvIHRoYXQgaXQgaGFwcGVucyBsYXN0XG4gICAgICBfd29ya1N0YWNrLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21yYW5nZSA9IGRvRmlyc3RSZW5kZXIodmlldywgaW5pdGlhbENvbnRlbnRzKTtcbiAgICAgICAgaW5pdGlhbENvbnRlbnRzID0gbnVsbDsgLy8gaGVscCBHQyBiZWNhdXNlIG9mIGFsbCB0aGUgY2xvc3VyZXMgaGVyZVxuICAgICAgICBfaW50b0FycmF5LnB1c2goZG9tcmFuZ2UpO1xuICAgICAgfSk7XG4gICAgICAvLyBub3cgcHVzaCB0aGUgdGFzayB0aGF0IGNhbGN1bGF0ZXMgaW5pdGlhbENvbnRlbnRzXG4gICAgICBfd29ya1N0YWNrLnB1c2goQmxhemUuX2JpbmQoQmxhemUuX21hdGVyaWFsaXplRE9NLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SHRtbGpzLCBpbml0aWFsQ29udGVudHMsIHZpZXcsIF93b3JrU3RhY2spKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghIF93b3JrU3RhY2spIHtcbiAgICByZXR1cm4gZG9tcmFuZ2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8vIEV4cGFuZHMgYSBWaWV3IHRvIEhUTUxqcywgY2FsbGluZyBgcmVuZGVyYCByZWN1cnNpdmVseSBvbiBhbGxcbi8vIFZpZXdzIGFuZCBldmFsdWF0aW5nIGFueSBkeW5hbWljIGF0dHJpYnV0ZXMuICBDYWxscyB0aGUgYGNyZWF0ZWRgXG4vLyBjYWxsYmFjaywgYnV0IG5vdCB0aGUgYG1hdGVyaWFsaXplZGAgb3IgYHJlbmRlcmVkYCBjYWxsYmFja3MuXG4vLyBEZXN0cm95cyB0aGUgdmlldyBpbW1lZGlhdGVseSwgdW5sZXNzIGNhbGxlZCBpbiBhIFRyYWNrZXIgQ29tcHV0YXRpb24sXG4vLyBpbiB3aGljaCBjYXNlIHRoZSB2aWV3IHdpbGwgYmUgZGVzdHJveWVkIHdoZW4gdGhlIENvbXB1dGF0aW9uIGlzXG4vLyBpbnZhbGlkYXRlZC4gIElmIGNhbGxlZCBpbiBhIFRyYWNrZXIgQ29tcHV0YXRpb24sIHRoZSByZXN1bHQgaXMgYVxuLy8gcmVhY3RpdmUgc3RyaW5nOyB0aGF0IGlzLCB0aGUgQ29tcHV0YXRpb24gd2lsbCBiZSBpbnZhbGlkYXRlZFxuLy8gaWYgYW55IGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIHZpZXcgb3Igc3Vidmlld3MgdGhhdCBtaWdodCBhZmZlY3Rcbi8vIHRoZSBIVE1MLlxuQmxhemUuX2V4cGFuZFZpZXcgPSBmdW5jdGlvbiAodmlldywgcGFyZW50Vmlldykge1xuICBCbGF6ZS5fY3JlYXRlVmlldyh2aWV3LCBwYXJlbnRWaWV3LCB0cnVlIC8qZm9yRXhwYW5zaW9uKi8pO1xuXG4gIHZpZXcuX2lzSW5SZW5kZXIgPSB0cnVlO1xuICBjb25zdCBodG1sanMgPSBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KHZpZXcsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmlldy5fcmVuZGVyKCk7XG4gIH0pO1xuICB2aWV3Ll9pc0luUmVuZGVyID0gZmFsc2U7XG5cbiAgY29uc3QgcmVzdWx0ID0gQmxhemUuX2V4cGFuZChodG1sanMsIHZpZXcpO1xuXG4gIGlmIChUcmFja2VyLmFjdGl2ZSkge1xuICAgIFRyYWNrZXIub25JbnZhbGlkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIEJsYXplLl9kZXN0cm95Vmlldyh2aWV3KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBCbGF6ZS5fZGVzdHJveVZpZXcodmlldyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gT3B0aW9uczogYHBhcmVudFZpZXdgXG5CbGF6ZS5fSFRNTEpTRXhwYW5kZXIgPSBIVE1MLlRyYW5zZm9ybWluZ1Zpc2l0b3IuZXh0ZW5kKCk7XG5CbGF6ZS5fSFRNTEpTRXhwYW5kZXIuZGVmKHtcbiAgdmlzaXRPYmplY3Q6IGZ1bmN0aW9uICh4KSB7XG4gICAgaWYgKHggaW5zdGFuY2VvZiBCbGF6ZS5UZW1wbGF0ZSlcbiAgICAgIHggPSB4LmNvbnN0cnVjdFZpZXcoKTtcbiAgICBpZiAoeCBpbnN0YW5jZW9mIEJsYXplLlZpZXcpXG4gICAgICByZXR1cm4gQmxhemUuX2V4cGFuZFZpZXcoeCwgdGhpcy5wYXJlbnRWaWV3KTtcblxuICAgIC8vIHRoaXMgd2lsbCB0aHJvdyBhbiBlcnJvcjsgb3RoZXIgb2JqZWN0cyBhcmUgbm90IGFsbG93ZWQhXG4gICAgcmV0dXJuIEhUTUwuVHJhbnNmb3JtaW5nVmlzaXRvci5wcm90b3R5cGUudmlzaXRPYmplY3QuY2FsbCh0aGlzLCB4KTtcbiAgfSxcbiAgdmlzaXRBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICAvLyBleHBhbmQgZHluYW1pYyBhdHRyaWJ1dGVzXG4gICAgaWYgKHR5cGVvZiBhdHRycyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGF0dHJzID0gQmxhemUuX3dpdGhDdXJyZW50Vmlldyh0aGlzLnBhcmVudFZpZXcsIGF0dHJzKTtcblxuICAgIC8vIGNhbGwgc3VwZXIgKGUuZy4gZm9yIGNhc2Ugd2hlcmUgYGF0dHJzYCBpcyBhbiBhcnJheSlcbiAgICByZXR1cm4gSFRNTC5UcmFuc2Zvcm1pbmdWaXNpdG9yLnByb3RvdHlwZS52aXNpdEF0dHJpYnV0ZXMuY2FsbCh0aGlzLCBhdHRycyk7XG4gIH0sXG4gIHZpc2l0QXR0cmlidXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHRhZykge1xuICAgIC8vIGV4cGFuZCBhdHRyaWJ1dGUgdmFsdWVzIHRoYXQgYXJlIGZ1bmN0aW9ucy4gIEFueSBhdHRyaWJ1dGUgdmFsdWVcbiAgICAvLyB0aGF0IGNvbnRhaW5zIFZpZXdzIG11c3QgYmUgd3JhcHBlZCBpbiBhIGZ1bmN0aW9uLlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICB2YWx1ZSA9IEJsYXplLl93aXRoQ3VycmVudFZpZXcodGhpcy5wYXJlbnRWaWV3LCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gSFRNTC5UcmFuc2Zvcm1pbmdWaXNpdG9yLnByb3RvdHlwZS52aXNpdEF0dHJpYnV0ZS5jYWxsKFxuICAgICAgdGhpcywgbmFtZSwgdmFsdWUsIHRhZyk7XG4gIH1cbn0pO1xuXG4vLyBSZXR1cm4gQmxhemUuY3VycmVudFZpZXcsIGJ1dCBvbmx5IGlmIGl0IGlzIGJlaW5nIHJlbmRlcmVkXG4vLyAoaS5lLiB3ZSBhcmUgaW4gaXRzIHJlbmRlcigpIG1ldGhvZCkuXG5jb25zdCBjdXJyZW50Vmlld0lmUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB2aWV3ID0gQmxhemUuY3VycmVudFZpZXc7XG4gIHJldHVybiAodmlldyAmJiB2aWV3Ll9pc0luUmVuZGVyKSA/IHZpZXcgOiBudWxsO1xufTtcblxuQmxhemUuX2V4cGFuZCA9IGZ1bmN0aW9uIChodG1sanMsIHBhcmVudFZpZXcpIHtcbiAgcGFyZW50VmlldyA9IHBhcmVudFZpZXcgfHwgY3VycmVudFZpZXdJZlJlbmRlcmluZygpO1xuICByZXR1cm4gKG5ldyBCbGF6ZS5fSFRNTEpTRXhwYW5kZXIoXG4gICAge3BhcmVudFZpZXc6IHBhcmVudFZpZXd9KSkudmlzaXQoaHRtbGpzKTtcbn07XG5cbkJsYXplLl9leHBhbmRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGF0dHJzLCBwYXJlbnRWaWV3KSB7XG4gIHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3IHx8IGN1cnJlbnRWaWV3SWZSZW5kZXJpbmcoKTtcbiAgcmV0dXJuIChuZXcgQmxhemUuX0hUTUxKU0V4cGFuZGVyKFxuICAgIHtwYXJlbnRWaWV3OiBwYXJlbnRWaWV3fSkpLnZpc2l0QXR0cmlidXRlcyhhdHRycyk7XG59O1xuXG5CbGF6ZS5fZGVzdHJveVZpZXcgPSBmdW5jdGlvbiAodmlldywgX3NraXBOb2Rlcykge1xuICBpZiAodmlldy5pc0Rlc3Ryb3llZClcbiAgICByZXR1cm47XG4gIHZpZXcuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG5cbiAgLy8gRGVzdHJveSB2aWV3cyBhbmQgZWxlbWVudHMgcmVjdXJzaXZlbHkuICBJZiBfc2tpcE5vZGVzLFxuICAvLyBvbmx5IHJlY3Vyc2UgdXAgdG8gdmlld3MsIG5vdCBlbGVtZW50cywgZm9yIHRoZSBjYXNlIHdoZXJlXG4gIC8vIHRoZSBiYWNrZW5kIChqUXVlcnkpIGlzIHJlY3Vyc2luZyBvdmVyIHRoZSBlbGVtZW50cyBhbHJlYWR5LlxuXG4gIGlmICh2aWV3Ll9kb21yYW5nZSkgdmlldy5fZG9tcmFuZ2UuZGVzdHJveU1lbWJlcnMoX3NraXBOb2Rlcyk7XG5cbiAgLy8gWFhYOiBmaXJlIGNhbGxiYWNrcyBhZnRlciBwb3RlbnRpYWwgbWVtYmVycyBhcmUgZGVzdHJveWVkXG4gIC8vIG90aGVyd2lzZSBpdCdzIHRyYWNrZXIuZmx1c2ggd2lsbCBjYXVzZSB0aGUgYWJvdmUgbGluZSB3aWxsXG4gIC8vIG5vdCBiZSBjYWxsZWQgYW5kIHRoZWlyIHZpZXdzIHdvbid0IGJlIGRlc3Ryb3llZFxuICAvLyBJbnZvbHZlZCBpc3N1ZXM6IERPTVJhbmdlIFwiTXVzdCBiZSBhdHRhY2hlZFwiIGVycm9yLCBtZW0gbGVha1xuXG4gIEJsYXplLl9maXJlQ2FsbGJhY2tzKHZpZXcsICdkZXN0cm95ZWQnKTtcbn07XG5cbkJsYXplLl9kZXN0cm95Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAxKVxuICAgIEJsYXplLl9ET01CYWNrZW5kLlRlYXJkb3duLnRlYXJEb3duRWxlbWVudChub2RlKTtcbn07XG5cbi8vIEFyZSB0aGUgSFRNTGpzIGVudGl0aWVzIGBhYCBhbmQgYGJgIHRoZSBzYW1lPyAgV2UgY291bGQgYmVcbi8vIG1vcmUgZWxhYm9yYXRlIGhlcmUgYnV0IHRoZSBwb2ludCBpcyB0byBjYXRjaCB0aGUgbW9zdCBiYXNpY1xuLy8gY2FzZXMuXG5CbGF6ZS5faXNDb250ZW50RXF1YWwgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoYSBpbnN0YW5jZW9mIEhUTUwuUmF3KSB7XG4gICAgcmV0dXJuIChiIGluc3RhbmNlb2YgSFRNTC5SYXcpICYmIChhLnZhbHVlID09PSBiLnZhbHVlKTtcbiAgfSBlbHNlIGlmIChhID09IG51bGwpIHtcbiAgICByZXR1cm4gKGIgPT0gbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChhID09PSBiKSAmJlxuICAgICAgKCh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgYSA9PT0gJ2Jvb2xlYW4nKSB8fFxuICAgICAgICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBUaGUgVmlldyBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHRlbXBsYXRlIGhlbHBlciwgZXZlbnQgaGFuZGxlciwgY2FsbGJhY2ssIG9yIGF1dG9ydW4uICBJZiB0aGVyZSBpc24ndCBvbmUsIGBudWxsYC5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEB0eXBlIHtCbGF6ZS5WaWV3fVxuICovXG5CbGF6ZS5jdXJyZW50VmlldyA9IG51bGw7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QmxhemUuVmlld30gdmlld1xuICogQHBhcmFtIHsoKSA9PiBUfSBmdW5jXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuQmxhemUuX3dpdGhDdXJyZW50VmlldyA9IGZ1bmN0aW9uICh2aWV3LCBmdW5jKSB7XG4gIGNvbnN0IG9sZFZpZXcgPSBCbGF6ZS5jdXJyZW50VmlldztcbiAgdHJ5IHtcbiAgICBCbGF6ZS5jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgcmV0dXJuIGZ1bmMoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBCbGF6ZS5jdXJyZW50VmlldyA9IG9sZFZpZXc7XG4gIH1cbn07XG5cbi8vIEJsYXplLnJlbmRlciBwdWJsaWNseSB0YWtlcyBhIFZpZXcgb3IgYSBUZW1wbGF0ZS5cbi8vIFByaXZhdGVseSwgaXQgdGFrZXMgYW55IEhUTUxKUyAoZXh0ZW5kZWQgd2l0aCBWaWV3cyBhbmQgVGVtcGxhdGVzKVxuLy8gZXhjZXB0IG51bGwgb3IgdW5kZWZpbmVkLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbnkgZXh0ZW5kZWRcbi8vIEhUTUxKUy5cbmNvbnN0IGNoZWNrUmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIGlmIChjb250ZW50ID09PSBudWxsKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHJlbmRlciBudWxsXCIpO1xuICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICd1bmRlZmluZWQnKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHJlbmRlciB1bmRlZmluZWRcIik7XG5cbiAgaWYgKChjb250ZW50IGluc3RhbmNlb2YgQmxhemUuVmlldykgfHxcbiAgICAgIChjb250ZW50IGluc3RhbmNlb2YgQmxhemUuVGVtcGxhdGUpIHx8XG4gICAgICAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpKVxuICAgIHJldHVybjtcblxuICB0cnkge1xuICAgIC8vIFRocm93IGlmIGNvbnRlbnQgZG9lc24ndCBsb29rIGxpa2UgSFRNTEpTIGF0IHRoZSB0b3AgbGV2ZWxcbiAgICAvLyAoaS5lLiB2ZXJpZnkgdGhhdCB0aGlzIGlzIGFuIEhUTUwuVGFnLCBvciBhbiBhcnJheSxcbiAgICAvLyBvciBhIHByaW1pdGl2ZSwgZXRjLilcbiAgICAobmV3IEhUTUwuVmlzaXRvcikudmlzaXQoY29udGVudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBNYWtlIGVycm9yIG1lc3NhZ2Ugc3VpdGFibGUgZm9yIHB1YmxpYyBBUElcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBUZW1wbGF0ZSBvciBWaWV3XCIpO1xuICB9XG59O1xuXG4vLyBGb3IgQmxhemUucmVuZGVyIGFuZCBCbGF6ZS50b0hUTUwsIHRha2UgY29udGVudCBhbmRcbi8vIHdyYXAgaXQgaW4gYSBWaWV3LCB1bmxlc3MgaXQncyBhIHNpbmdsZSBWaWV3IG9yXG4vLyBUZW1wbGF0ZSBhbHJlYWR5LlxuY29uc3QgY29udGVudEFzVmlldyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIGNoZWNrUmVuZGVyQ29udGVudChjb250ZW50KTtcblxuICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEJsYXplLlRlbXBsYXRlKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQuY29uc3RydWN0VmlldygpO1xuICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBCbGF6ZS5WaWV3KSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGZ1bmMgPSBjb250ZW50O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gQmxhemUuVmlldygncmVuZGVyJywgZnVuYyk7XG4gIH1cbn07XG5cbi8vIEZvciBCbGF6ZS5yZW5kZXJXaXRoRGF0YSBhbmQgQmxhemUudG9IVE1MV2l0aERhdGEsIHdyYXAgY29udGVudFxuLy8gaW4gYSBmdW5jdGlvbiwgaWYgbmVjZXNzYXJ5LCBzbyBpdCBjYW4gYmUgYSBjb250ZW50IGFyZyB0b1xuLy8gYSBCbGF6ZS5XaXRoLlxuY29uc3QgY29udGVudEFzRnVuYyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIGNoZWNrUmVuZGVyQ29udGVudChjb250ZW50KTtcblxuICBpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxufTtcblxuQmxhemUuX19yb290Vmlld3MgPSBbXTtcblxuLyoqXG4gKiBAc3VtbWFyeSBSZW5kZXJzIGEgdGVtcGxhdGUgb3IgVmlldyB0byBET00gbm9kZXMgYW5kIGluc2VydHMgaXQgaW50byB0aGUgRE9NLCByZXR1cm5pbmcgYSByZW5kZXJlZCBbVmlld10oI0JsYXplLVZpZXcpIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gW2BCbGF6ZS5yZW1vdmVgXSgjQmxhemUtcmVtb3ZlKS5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7VGVtcGxhdGV8QmxhemUuVmlld30gdGVtcGxhdGVPclZpZXcgVGhlIHRlbXBsYXRlIChlLmcuIGBUZW1wbGF0ZS5teVRlbXBsYXRlYCkgb3IgVmlldyBvYmplY3QgdG8gcmVuZGVyLiAgSWYgYSB0ZW1wbGF0ZSwgYSBWaWV3IG9iamVjdCBpcyBbY29uc3RydWN0ZWRdKCN0ZW1wbGF0ZV9jb25zdHJ1Y3R2aWV3KS4gIElmIGEgVmlldywgaXQgbXVzdCBiZSBhbiB1bnJlbmRlcmVkIFZpZXcsIHdoaWNoIGJlY29tZXMgYSByZW5kZXJlZCBWaWV3IGFuZCBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSB7RE9NTm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZSB0aGF0IHdpbGwgYmUgdGhlIHBhcmVudCBvZiB0aGUgcmVuZGVyZWQgdGVtcGxhdGUuICBJdCBtdXN0IGJlIGFuIEVsZW1lbnQgbm9kZS5cbiAqIEBwYXJhbSB7RE9NTm9kZX0gW25leHROb2RlXSBPcHRpb25hbC4gSWYgcHJvdmlkZWQsIG11c3QgYmUgYSBjaGlsZCBvZiA8ZW0+cGFyZW50Tm9kZTwvZW0+OyB0aGUgdGVtcGxhdGUgd2lsbCBiZSBpbnNlcnRlZCBiZWZvcmUgdGhpcyBub2RlLiBJZiBub3QgcHJvdmlkZWQsIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGluc2VydGVkIGFzIHRoZSBsYXN0IGNoaWxkIG9mIHBhcmVudE5vZGUuXG4gKiBAcGFyYW0ge0JsYXplLlZpZXd9IFtwYXJlbnRWaWV3XSBPcHRpb25hbC4gSWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgc2V0IGFzIHRoZSByZW5kZXJlZCBWaWV3J3MgW2BwYXJlbnRWaWV3YF0oI3ZpZXdfcGFyZW50dmlldykuXG4gKi9cbkJsYXplLnJlbmRlciA9IGZ1bmN0aW9uIChjb250ZW50LCBwYXJlbnRFbGVtZW50LCBuZXh0Tm9kZSwgcGFyZW50Vmlldykge1xuICBpZiAoISBwYXJlbnRFbGVtZW50KSB7XG4gICAgQmxhemUuX3dhcm4oXCJCbGF6ZS5yZW5kZXIgd2l0aG91dCBhIHBhcmVudCBlbGVtZW50IGlzIGRlcHJlY2F0ZWQuIFwiICtcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHNwZWNpZnkgd2hlcmUgdG8gaW5zZXJ0IHRoZSByZW5kZXJlZCBjb250ZW50LlwiKTtcbiAgfVxuXG4gIGlmIChuZXh0Tm9kZSBpbnN0YW5jZW9mIEJsYXplLlZpZXcpIHtcbiAgICAvLyBoYW5kbGUgb21pdHRlZCBuZXh0Tm9kZVxuICAgIHBhcmVudFZpZXcgPSBuZXh0Tm9kZTtcbiAgICBuZXh0Tm9kZSA9IG51bGw7XG4gIH1cblxuICAvLyBwYXJlbnRFbGVtZW50IG11c3QgYmUgYSBET00gbm9kZS4gaW4gcGFydGljdWxhciwgY2FuJ3QgYmUgdGhlXG4gIC8vIHJlc3VsdCBvZiBhIGNhbGwgdG8gYCRgLiBDYW4ndCBjaGVjayBpZiBgcGFyZW50RWxlbWVudCBpbnN0YW5jZW9mXG4gIC8vIE5vZGVgIHNpbmNlICdOb2RlJyBpcyB1bmRlZmluZWQgaW4gSUU4LlxuICBpZiAocGFyZW50RWxlbWVudCAmJiB0eXBlb2YgcGFyZW50RWxlbWVudC5ub2RlVHlwZSAhPT0gJ251bWJlcicpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ3BhcmVudEVsZW1lbnQnIG11c3QgYmUgYSBET00gbm9kZVwiKTtcbiAgaWYgKG5leHROb2RlICYmIHR5cGVvZiBuZXh0Tm9kZS5ub2RlVHlwZSAhPT0gJ251bWJlcicpIC8vICduZXh0Tm9kZScgaXMgb3B0aW9uYWxcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInbmV4dE5vZGUnIG11c3QgYmUgYSBET00gbm9kZVwiKTtcblxuICBwYXJlbnRWaWV3ID0gcGFyZW50VmlldyB8fCBjdXJyZW50Vmlld0lmUmVuZGVyaW5nKCk7XG5cbiAgY29uc3QgdmlldyA9IGNvbnRlbnRBc1ZpZXcoY29udGVudCk7XG5cbiAgLy8gVE9ETzogdGhpcyBpcyBvbmx5IG5lZWRlZCBpbiBkZXZlbG9wbWVudFxuICBpZiAoIXBhcmVudFZpZXcpIHtcbiAgICB2aWV3Lm9uVmlld0NyZWF0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgQmxhemUuX19yb290Vmlld3MucHVzaCh2aWV3KTtcbiAgICB9KTtcblxuICAgIHZpZXcub25WaWV3RGVzdHJveWVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBpbmRleCA9IEJsYXplLl9fcm9vdFZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBCbGF6ZS5fX3Jvb3RWaWV3cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQmxhemUuX21hdGVyaWFsaXplVmlldyh2aWV3LCBwYXJlbnRWaWV3KTtcbiAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICB2aWV3Ll9kb21yYW5nZS5hdHRhY2gocGFyZW50RWxlbWVudCwgbmV4dE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZpZXc7XG59O1xuXG5CbGF6ZS5pbnNlcnQgPSBmdW5jdGlvbiAodmlldywgcGFyZW50RWxlbWVudCwgbmV4dE5vZGUpIHtcbiAgQmxhemUuX3dhcm4oXCJCbGF6ZS5pbnNlcnQgaGFzIGJlZW4gZGVwcmVjYXRlZC4gIFNwZWNpZnkgd2hlcmUgdG8gaW5zZXJ0IHRoZSBcIiArXG4gICAgICAgICAgICAgIFwicmVuZGVyZWQgY29udGVudCBpbiB0aGUgY2FsbCB0byBCbGF6ZS5yZW5kZXIuXCIpO1xuXG4gIGlmICghICh2aWV3ICYmICh2aWV3Ll9kb21yYW5nZSBpbnN0YW5jZW9mIEJsYXplLl9ET01SYW5nZSkpKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHRlbXBsYXRlIHJlbmRlcmVkIHdpdGggQmxhemUucmVuZGVyXCIpO1xuXG4gIHZpZXcuX2RvbXJhbmdlLmF0dGFjaChwYXJlbnRFbGVtZW50LCBuZXh0Tm9kZSk7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IFJlbmRlcnMgYSB0ZW1wbGF0ZSBvciBWaWV3IHRvIERPTSBub2RlcyB3aXRoIGEgZGF0YSBjb250ZXh0LiAgT3RoZXJ3aXNlIGlkZW50aWNhbCB0byBgQmxhemUucmVuZGVyYC5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7VGVtcGxhdGV8QmxhemUuVmlld30gdGVtcGxhdGVPclZpZXcgVGhlIHRlbXBsYXRlIChlLmcuIGBUZW1wbGF0ZS5teVRlbXBsYXRlYCkgb3IgVmlldyBvYmplY3QgdG8gcmVuZGVyLlxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IGRhdGEgVGhlIGRhdGEgY29udGV4dCB0byB1c2UsIG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgZGF0YSBjb250ZXh0LiAgSWYgYSBmdW5jdGlvbiBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZWFjdGl2ZWx5IHJlLXJ1bi5cbiAqIEBwYXJhbSB7RE9NTm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZSB0aGF0IHdpbGwgYmUgdGhlIHBhcmVudCBvZiB0aGUgcmVuZGVyZWQgdGVtcGxhdGUuICBJdCBtdXN0IGJlIGFuIEVsZW1lbnQgbm9kZS5cbiAqIEBwYXJhbSB7RE9NTm9kZX0gW25leHROb2RlXSBPcHRpb25hbC4gSWYgcHJvdmlkZWQsIG11c3QgYmUgYSBjaGlsZCBvZiA8ZW0+cGFyZW50Tm9kZTwvZW0+OyB0aGUgdGVtcGxhdGUgd2lsbCBiZSBpbnNlcnRlZCBiZWZvcmUgdGhpcyBub2RlLiBJZiBub3QgcHJvdmlkZWQsIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGluc2VydGVkIGFzIHRoZSBsYXN0IGNoaWxkIG9mIHBhcmVudE5vZGUuXG4gKiBAcGFyYW0ge0JsYXplLlZpZXd9IFtwYXJlbnRWaWV3XSBPcHRpb25hbC4gSWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgc2V0IGFzIHRoZSByZW5kZXJlZCBWaWV3J3MgW2BwYXJlbnRWaWV3YF0oI3ZpZXdfcGFyZW50dmlldykuXG4gKi9cbkJsYXplLnJlbmRlcldpdGhEYXRhID0gZnVuY3Rpb24gKGNvbnRlbnQsIGRhdGEsIHBhcmVudEVsZW1lbnQsIG5leHROb2RlLCBwYXJlbnRWaWV3KSB7XG4gIC8vIFdlIGRlZmVyIHRoZSBoYW5kbGluZyBvZiBvcHRpb25hbCBhcmd1bWVudHMgdG8gQmxhemUucmVuZGVyLiAgQXQgdGhpcyBwb2ludCxcbiAgLy8gYG5leHROb2RlYCBtYXkgYWN0dWFsbHkgYmUgYHBhcmVudFZpZXdgLlxuICByZXR1cm4gQmxhemUucmVuZGVyKEJsYXplLl9UZW1wbGF0ZVdpdGgoZGF0YSwgY29udGVudEFzRnVuYyhjb250ZW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQsIG5leHROb2RlLCBwYXJlbnRWaWV3KTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgUmVtb3ZlcyBhIHJlbmRlcmVkIFZpZXcgZnJvbSB0aGUgRE9NLCBzdG9wcGluZyBhbGwgcmVhY3RpdmUgdXBkYXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzIG9uIGl0LiBBbHNvIGRlc3Ryb3lzIHRoZSBCbGF6ZS5UZW1wbGF0ZSBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZXcuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge0JsYXplLlZpZXd9IHJlbmRlcmVkVmlldyBUaGUgcmV0dXJuIHZhbHVlIGZyb20gYEJsYXplLnJlbmRlcmAgb3IgYEJsYXplLnJlbmRlcldpdGhEYXRhYCwgb3IgdGhlIGB2aWV3YCBwcm9wZXJ0eSBvZiBhIEJsYXplLlRlbXBsYXRlIGluc3RhbmNlLiBDYWxsaW5nIGBCbGF6ZS5yZW1vdmUoVGVtcGxhdGUuaW5zdGFuY2UoKS52aWV3KWAgZnJvbSB3aXRoaW4gYSB0ZW1wbGF0ZSBldmVudCBoYW5kbGVyIHdpbGwgZGVzdHJveSB0aGUgdmlldyBhcyB3ZWxsIGFzIHRoYXQgdGVtcGxhdGUgYW5kIHRyaWdnZXIgdGhlIHRlbXBsYXRlJ3MgYG9uRGVzdHJveWVkYCBoYW5kbGVycy5cbiAqL1xuQmxhemUucmVtb3ZlID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgaWYgKCEgKHZpZXcgJiYgKHZpZXcuX2RvbXJhbmdlIGluc3RhbmNlb2YgQmxhemUuX0RPTVJhbmdlKSkpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGVtcGxhdGUgcmVuZGVyZWQgd2l0aCBCbGF6ZS5yZW5kZXJcIik7XG5cbiAgd2hpbGUgKHZpZXcpIHtcbiAgICBpZiAoISB2aWV3LmlzRGVzdHJveWVkKSB7XG4gICAgICBjb25zdCByYW5nZSA9IHZpZXcuX2RvbXJhbmdlO1xuICAgICAgcmFuZ2UuZGVzdHJveSgpO1xuXG4gICAgICBpZiAocmFuZ2UuYXR0YWNoZWQgJiYgISByYW5nZS5wYXJlbnRSYW5nZSkge1xuICAgICAgICByYW5nZS5kZXRhY2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3ID0gdmlldy5faGFzR2VuZXJhdGVkUGFyZW50ICYmIHZpZXcucGFyZW50VmlldztcbiAgfVxufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBSZW5kZXJzIGEgdGVtcGxhdGUgb3IgVmlldyB0byBhIHN0cmluZyBvZiBIVE1MLlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtUZW1wbGF0ZXxCbGF6ZS5WaWV3fSB0ZW1wbGF0ZU9yVmlldyBUaGUgdGVtcGxhdGUgKGUuZy4gYFRlbXBsYXRlLm15VGVtcGxhdGVgKSBvciBWaWV3IG9iamVjdCBmcm9tIHdoaWNoIHRvIGdlbmVyYXRlIEhUTUwuXG4gKi9cbkJsYXplLnRvSFRNTCA9IGZ1bmN0aW9uIChjb250ZW50LCBwYXJlbnRWaWV3KSB7XG4gIHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3IHx8IGN1cnJlbnRWaWV3SWZSZW5kZXJpbmcoKTtcblxuICByZXR1cm4gSFRNTC50b0hUTUwoQmxhemUuX2V4cGFuZFZpZXcoY29udGVudEFzVmlldyhjb250ZW50KSwgcGFyZW50VmlldykpO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBSZW5kZXJzIGEgdGVtcGxhdGUgb3IgVmlldyB0byBIVE1MIHdpdGggYSBkYXRhIGNvbnRleHQuICBPdGhlcndpc2UgaWRlbnRpY2FsIHRvIGBCbGF6ZS50b0hUTUxgLlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtUZW1wbGF0ZXxCbGF6ZS5WaWV3fSB0ZW1wbGF0ZU9yVmlldyBUaGUgdGVtcGxhdGUgKGUuZy4gYFRlbXBsYXRlLm15VGVtcGxhdGVgKSBvciBWaWV3IG9iamVjdCBmcm9tIHdoaWNoIHRvIGdlbmVyYXRlIEhUTUwuXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGF0YSBUaGUgZGF0YSBjb250ZXh0IHRvIHVzZSwgb3IgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBkYXRhIGNvbnRleHQuXG4gKi9cbkJsYXplLnRvSFRNTFdpdGhEYXRhID0gZnVuY3Rpb24gKGNvbnRlbnQsIGRhdGEsIHBhcmVudFZpZXcpIHtcbiAgcGFyZW50VmlldyA9IHBhcmVudFZpZXcgfHwgY3VycmVudFZpZXdJZlJlbmRlcmluZygpO1xuXG4gIHJldHVybiBIVE1MLnRvSFRNTChCbGF6ZS5fZXhwYW5kVmlldyhCbGF6ZS5fVGVtcGxhdGVXaXRoKFxuICAgIGRhdGEsIGNvbnRlbnRBc0Z1bmMoY29udGVudCkpLCBwYXJlbnRWaWV3KSk7XG59O1xuXG5CbGF6ZS5fdG9UZXh0ID0gZnVuY3Rpb24gKGh0bWxqcywgcGFyZW50VmlldywgdGV4dE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBodG1sanMgPT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQmxhemUuX3RvVGV4dCBkb2Vzbid0IHRha2UgYSBmdW5jdGlvbiwganVzdCBIVE1ManNcIik7XG5cbiAgaWYgKChwYXJlbnRWaWV3ICE9IG51bGwpICYmICEgKHBhcmVudFZpZXcgaW5zdGFuY2VvZiBCbGF6ZS5WaWV3KSkge1xuICAgIC8vIG9taXR0ZWQgcGFyZW50VmlldyBhcmd1bWVudFxuICAgIHRleHRNb2RlID0gcGFyZW50VmlldztcbiAgICBwYXJlbnRWaWV3ID0gbnVsbDtcbiAgfVxuICBwYXJlbnRWaWV3ID0gcGFyZW50VmlldyB8fCBjdXJyZW50Vmlld0lmUmVuZGVyaW5nKCk7XG5cbiAgaWYgKCEgdGV4dE1vZGUpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidGV4dE1vZGUgcmVxdWlyZWRcIik7XG4gIGlmICghICh0ZXh0TW9kZSA9PT0gSFRNTC5URVhUTU9ERS5TVFJJTkcgfHxcbiAgICAgICAgIHRleHRNb2RlID09PSBIVE1MLlRFWFRNT0RFLlJDREFUQSB8fFxuICAgICAgICAgdGV4dE1vZGUgPT09IEhUTUwuVEVYVE1PREUuQVRUUklCVVRFKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHRleHRNb2RlOiBcIiArIHRleHRNb2RlKTtcblxuICByZXR1cm4gSFRNTC50b1RleHQoQmxhemUuX2V4cGFuZChodG1sanMsIHBhcmVudFZpZXcpLCB0ZXh0TW9kZSk7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IFJldHVybnMgdGhlIGN1cnJlbnQgZGF0YSBjb250ZXh0LCBvciB0aGUgZGF0YSBjb250ZXh0IHRoYXQgd2FzIHVzZWQgd2hlbiByZW5kZXJpbmcgYSBwYXJ0aWN1bGFyIERPTSBlbGVtZW50IG9yIFZpZXcgZnJvbSBhIE1ldGVvciB0ZW1wbGF0ZS5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7RE9NRWxlbWVudHxCbGF6ZS5WaWV3fSBbZWxlbWVudE9yVmlld10gT3B0aW9uYWwuICBBbiBlbGVtZW50IHRoYXQgd2FzIHJlbmRlcmVkIGJ5IGEgTWV0ZW9yLCBvciBhIFZpZXcuXG4gKi9cbkJsYXplLmdldERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudE9yVmlldykge1xuICBsZXQgdGhlV2l0aDtcblxuICBpZiAoISBlbGVtZW50T3JWaWV3KSB7XG4gICAgdGhlV2l0aCA9IEJsYXplLmdldFZpZXcoJ3dpdGgnKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50T3JWaWV3IGluc3RhbmNlb2YgQmxhemUuVmlldykge1xuICAgIGNvbnN0IHZpZXcgPSBlbGVtZW50T3JWaWV3O1xuICAgIHRoZVdpdGggPSAodmlldy5uYW1lID09PSAnd2l0aCcgPyB2aWV3IDpcbiAgICAgICAgICAgICAgIEJsYXplLmdldFZpZXcodmlldywgJ3dpdGgnKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnRPclZpZXcubm9kZVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGVsZW1lbnRPclZpZXcubm9kZVR5cGUgIT09IDEpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBET00gZWxlbWVudFwiKTtcbiAgICB0aGVXaXRoID0gQmxhemUuZ2V0VmlldyhlbGVtZW50T3JWaWV3LCAnd2l0aCcpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIERPTSBlbGVtZW50IG9yIFZpZXdcIik7XG4gIH1cblxuICByZXR1cm4gdGhlV2l0aCA/IHRoZVdpdGguZGF0YVZhci5nZXQoKSA6IG51bGw7XG59O1xuXG4vLyBGb3IgYmFjay1jb21wYXRcbkJsYXplLmdldEVsZW1lbnREYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgQmxhemUuX3dhcm4oXCJCbGF6ZS5nZXRFbGVtZW50RGF0YSBoYXMgYmVlbiBkZXByZWNhdGVkLiAgVXNlIFwiICtcbiAgICAgICAgICAgICAgXCJCbGF6ZS5nZXREYXRhKGVsZW1lbnQpIGluc3RlYWQuXCIpO1xuXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIERPTSBlbGVtZW50XCIpO1xuXG4gIHJldHVybiBCbGF6ZS5nZXREYXRhKGVsZW1lbnQpO1xufTtcblxuLy8gQm90aCBhcmd1bWVudHMgYXJlIG9wdGlvbmFsLlxuXG4vKipcbiAqIEBzdW1tYXJ5IEdldHMgZWl0aGVyIHRoZSBjdXJyZW50IFZpZXcsIG9yIHRoZSBWaWV3IGVuY2xvc2luZyB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IFtlbGVtZW50XSBPcHRpb25hbC4gIElmIHNwZWNpZmllZCwgdGhlIFZpZXcgZW5jbG9zaW5nIGBlbGVtZW50YCBpcyByZXR1cm5lZC5cbiAqL1xuQmxhemUuZ2V0VmlldyA9IGZ1bmN0aW9uIChlbGVtZW50T3JWaWV3LCBfdmlld05hbWUpIHtcbiAgbGV0IHZpZXdOYW1lID0gX3ZpZXdOYW1lO1xuXG4gIGlmICgodHlwZW9mIGVsZW1lbnRPclZpZXcpID09PSAnc3RyaW5nJykge1xuICAgIC8vIG9taXR0ZWQgZWxlbWVudE9yVmlldzsgdmlld05hbWUgcHJlc2VudFxuICAgIHZpZXdOYW1lID0gZWxlbWVudE9yVmlldztcbiAgICBlbGVtZW50T3JWaWV3ID0gbnVsbDtcbiAgfVxuXG4gIC8vIFdlIGNvdWxkIGV2ZW50dWFsbHkgc2hvcnRlbiB0aGUgY29kZSBieSBmb2xkaW5nIHRoZSBsb2dpY1xuICAvLyBmcm9tIHRoZSBvdGhlciBtZXRob2RzIGludG8gdGhpcyBtZXRob2QuXG4gIGlmICghIGVsZW1lbnRPclZpZXcpIHtcbiAgICByZXR1cm4gQmxhemUuX2dldEN1cnJlbnRWaWV3KHZpZXdOYW1lKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50T3JWaWV3IGluc3RhbmNlb2YgQmxhemUuVmlldykge1xuICAgIHJldHVybiBCbGF6ZS5fZ2V0UGFyZW50VmlldyhlbGVtZW50T3JWaWV3LCB2aWV3TmFtZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnRPclZpZXcubm9kZVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIEJsYXplLl9nZXRFbGVtZW50VmlldyhlbGVtZW50T3JWaWV3LCB2aWV3TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgRE9NIGVsZW1lbnQgb3IgVmlld1wiKTtcbiAgfVxufTtcblxuLy8gR2V0cyB0aGUgY3VycmVudCB2aWV3IG9yIGl0cyBuZWFyZXN0IGFuY2VzdG9yIG9mIG5hbWVcbi8vIGBuYW1lYC5cbkJsYXplLl9nZXRDdXJyZW50VmlldyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGxldCB2aWV3ID0gQmxhemUuY3VycmVudFZpZXc7XG4gIC8vIEJldHRlciB0byBmYWlsIGluIGNhc2VzIHdoZXJlIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAvLyB0byB1c2UgQmxhemUuX2dldEN1cnJlbnRWaWV3KCkuICBUaGVyZSB3aWxsIGJlIGEgY3VycmVudFxuICAvLyB2aWV3IGFueXdoZXJlIGl0IGRvZXMuICBZb3UgY2FuIGNoZWNrIEJsYXplLmN1cnJlbnRWaWV3XG4gIC8vIGlmIHlvdSB3YW50IHRvIGtub3cgd2hldGhlciB0aGVyZSBpcyBvbmUgb3Igbm90LlxuICBpZiAoISB2aWV3KVxuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIGN1cnJlbnQgdmlld1wiKTtcblxuICBpZiAobmFtZSkge1xuICAgIHdoaWxlICh2aWV3ICYmIHZpZXcubmFtZSAhPT0gbmFtZSlcbiAgICAgIHZpZXcgPSB2aWV3LnBhcmVudFZpZXc7XG4gICAgcmV0dXJuIHZpZXcgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBCbGF6ZS5fZ2V0Q3VycmVudFZpZXcoKSB3aXRoIG5vIGFyZ3VtZW50cyBqdXN0IHJldHVybnNcbiAgICAvLyBCbGF6ZS5jdXJyZW50Vmlldy5cbiAgICByZXR1cm4gdmlldztcbiAgfVxufTtcblxuQmxhemUuX2dldFBhcmVudFZpZXcgPSBmdW5jdGlvbiAodmlldywgbmFtZSkge1xuICBsZXQgdiA9IHZpZXcucGFyZW50VmlldztcblxuICBpZiAobmFtZSkge1xuICAgIHdoaWxlICh2ICYmIHYubmFtZSAhPT0gbmFtZSlcbiAgICAgIHYgPSB2LnBhcmVudFZpZXc7XG4gIH1cblxuICByZXR1cm4gdiB8fCBudWxsO1xufTtcblxuQmxhemUuX2dldEVsZW1lbnRWaWV3ID0gZnVuY3Rpb24gKGVsZW0sIG5hbWUpIHtcbiAgbGV0IHJhbmdlID0gQmxhemUuX0RPTVJhbmdlLmZvckVsZW1lbnQoZWxlbSk7XG4gIGxldCB2aWV3ID0gbnVsbDtcbiAgd2hpbGUgKHJhbmdlICYmICEgdmlldykge1xuICAgIHZpZXcgPSAocmFuZ2UudmlldyB8fCBudWxsKTtcbiAgICBpZiAoISB2aWV3KSB7XG4gICAgICBpZiAocmFuZ2UucGFyZW50UmFuZ2UpXG4gICAgICAgIHJhbmdlID0gcmFuZ2UucGFyZW50UmFuZ2U7XG4gICAgICBlbHNlXG4gICAgICAgIHJhbmdlID0gQmxhemUuX0RPTVJhbmdlLmZvckVsZW1lbnQocmFuZ2UucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5hbWUpIHtcbiAgICB3aGlsZSAodmlldyAmJiB2aWV3Lm5hbWUgIT09IG5hbWUpXG4gICAgICB2aWV3ID0gdmlldy5wYXJlbnRWaWV3O1xuICAgIHJldHVybiB2aWV3IHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cbn07XG5cbkJsYXplLl9hZGRFdmVudE1hcCA9IGZ1bmN0aW9uICh2aWV3LCBldmVudE1hcCwgdGhpc0luSGFuZGxlcikge1xuICB0aGlzSW5IYW5kbGVyID0gKHRoaXNJbkhhbmRsZXIgfHwgbnVsbCk7XG4gIGNvbnN0IGhhbmRsZXMgPSBbXTtcblxuICBpZiAoISB2aWV3Ll9kb21yYW5nZSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaWV3IG11c3QgaGF2ZSBhIERPTVJhbmdlXCIpO1xuXG4gIHZpZXcuX2RvbXJhbmdlLm9uQXR0YWNoZWQoZnVuY3Rpb24gYXR0YWNoZWRfZXZlbnRNYXBzKHJhbmdlLCBlbGVtZW50KSB7XG4gICAgT2JqZWN0LmtleXMoZXZlbnRNYXApLmZvckVhY2goZnVuY3Rpb24gKHNwZWMpIHtcbiAgICAgIGxldCBoYW5kbGVyID0gZXZlbnRNYXBbc3BlY107XG4gICAgICBjb25zdCBjbGF1c2VzID0gc3BlYy5zcGxpdCgvLFxccysvKTtcbiAgICAgIC8vIGl0ZXJhdGUgb3ZlciBjbGF1c2VzIG9mIHNwZWMsIGUuZy4gWydjbGljayAuZm9vJywgJ2NsaWNrIC5iYXInXVxuICAgICAgY2xhdXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBjbGF1c2Uuc3BsaXQoL1xccysvKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbmV3RXZlbnRzID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBwYXJ0cy5qb2luKCcgJyk7XG4gICAgICAgIGhhbmRsZXMucHVzaChCbGF6ZS5fRXZlbnRTdXBwb3J0Lmxpc3RlbihcbiAgICAgICAgICBlbGVtZW50LCBuZXdFdmVudHMsIHNlbGVjdG9yLFxuICAgICAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGlmICghIHJhbmdlLmNvbnRhaW5zRWxlbWVudChldnQuY3VycmVudFRhcmdldCwgc2VsZWN0b3IsIG5ld0V2ZW50cykpXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlclRoaXMgPSB0aGlzSW5IYW5kbGVyIHx8IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHJldHVybiBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KHZpZXcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuYXBwbHkoaGFuZGxlclRoaXMsIGhhbmRsZXJBcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFuZ2UsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICByZXR1cm4gci5wYXJlbnRSYW5nZTtcbiAgICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmlldy5vblZpZXdEZXN0cm95ZWQoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgaC5zdG9wKCk7XG4gICAgfSk7XG4gICAgaGFuZGxlcy5sZW5ndGggPSAwO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgaGFzIGZyb20gJ2xvZGFzaC5oYXMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC5pc29iamVjdCc7XG5cbkJsYXplLl9jYWxjdWxhdGVDb25kaXRpb24gPSBmdW5jdGlvbiAoY29uZCkge1xuICBpZiAoSFRNTC5pc0FycmF5KGNvbmQpICYmIGNvbmQubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiAhIWNvbmQ7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBWaWV3IHRoYXQgcmVuZGVycyBjb250ZW50IHdpdGggYSBkYXRhIGNvbnRleHQuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGF0YSBBbiBvYmplY3QgdG8gdXNlIGFzIHRoZSBkYXRhIGNvbnRleHQsIG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHN1Y2ggYW4gb2JqZWN0LiAgSWYgYVxuICogICBmdW5jdGlvbiBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZWFjdGl2ZWx5IHJlLXJ1bi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRlbnRGdW5jIEEgRnVuY3Rpb24gdGhhdCByZXR1cm5zIFsqcmVuZGVyYWJsZSBjb250ZW50Kl0oI1JlbmRlcmFibGUtQ29udGVudCkuXG4gKi9cbkJsYXplLldpdGggPSBmdW5jdGlvbiAoZGF0YSwgY29udGVudEZ1bmMpIHtcbiAgY29uc3QgdmlldyA9IEJsYXplLlZpZXcoJ3dpdGgnLCBjb250ZW50RnVuYyk7XG5cbiAgdmlldy5kYXRhVmFyID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cbiAgdmlldy5vblZpZXdDcmVhdGVkKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGBkYXRhYCBpcyBhIHJlYWN0aXZlIGZ1bmN0aW9uXG4gICAgICB2aWV3LmF1dG9ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2aWV3LmRhdGFWYXIuc2V0KGRhdGEoKSk7XG4gICAgICB9LCB2aWV3LnBhcmVudFZpZXcsICdzZXREYXRhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcuZGF0YVZhci5zZXQoZGF0YSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlldztcbn07XG5cblxuLyoqXG4gKiBAc3VtbWFyeSBTaGFsbG93IGNvbXBhcmUgb2YgdHdvIGJpbmRpbmdzLlxuICogQHBhcmFtIHtCaW5kaW5nfSB4XG4gKiBAcGFyYW0ge0JpbmRpbmd9IHlcbiAqL1xuZnVuY3Rpb24gX2lzRXF1YWxCaW5kaW5nKHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgeSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4geC5lcnJvciA9PT0geS5lcnJvciAmJiBSZWFjdGl2ZVZhci5faXNFcXVhbCh4LnZhbHVlLCB5LnZhbHVlKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gUmVhY3RpdmVWYXIuX2lzRXF1YWwoeCwgeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSB4XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZnVuY3Rpb24gX2lkZW50aXR5KHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cbi8qKlxuICogQXR0YWNoZXMgYSBzaW5nbGUgYmluZGluZyB0byB0aGUgaW5zdGFudGlhdGVkIHZpZXcuXG4gKiBAdGVtcGxhdGUgVCwgVVxuICogQHBhcmFtIHtSZWFjdGl2ZVZhcjxVPn0gcmVhY3RpdmVWYXIgVGFyZ2V0IHZpZXcuXG4gKiBAcGFyYW0ge1Byb21pc2U8VD4gfCBUfSB2YWx1ZSBCb3VuZCB2YWx1ZS5cbiAqIEBwYXJhbSB7KHZhbHVlOiBUKSA9PiBVfSBbbWFwcGVyXSBNYXBzIHRoZSBjb21wdXRlZCB2YWx1ZSBiZWZvcmUgc3RvcmUuXG4gKi9cbmZ1bmN0aW9uIF9zZXRCaW5kaW5nVmFsdWUocmVhY3RpdmVWYXIsIHZhbHVlLCBtYXBwZXIgPSBfaWRlbnRpdHkpIHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUudGhlbihcbiAgICAgIHZhbHVlID0+IHJlYWN0aXZlVmFyLnNldCh7IHZhbHVlOiBtYXBwZXIodmFsdWUpIH0pLFxuICAgICAgZXJyb3IgPT4gcmVhY3RpdmVWYXIuc2V0KHsgZXJyb3IgfSksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZWFjdGl2ZVZhci5zZXQoeyB2YWx1ZTogbWFwcGVyKHZhbHVlKSB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBULCBVXG4gKiBAcGFyYW0ge0JsYXplLlZpZXd9IHZpZXcgVGFyZ2V0IHZpZXcuXG4gKiBAcGFyYW0ge1Byb21pc2U8VD4gfCBUIHwgKCgpID0+IFByb21pc2U8VD4gfCBUKX0gYmluZGluZyBCaW5kaW5nIHZhbHVlIG9yIGl0cyBnZXR0ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Rpc3BsYXlOYW1lXSBBdXRvcnVuJ3MgZGlzcGxheSBuYW1lLlxuICogQHBhcmFtIHsodmFsdWU6IFQpID0+IFV9IFttYXBwZXJdIE1hcHMgdGhlIGNvbXB1dGVkIHZhbHVlIGJlZm9yZSBzdG9yZS5cbiAqIEByZXR1cm5zIHtSZWFjdGl2ZVZhcjxVPn1cbiAqL1xuZnVuY3Rpb24gX2NyZWF0ZUJpbmRpbmcodmlldywgYmluZGluZywgZGlzcGxheU5hbWUsIG1hcHBlcikge1xuICBjb25zdCByZWFjdGl2ZVZhciA9IG5ldyBSZWFjdGl2ZVZhcih1bmRlZmluZWQsIF9pc0VxdWFsQmluZGluZyk7XG4gIGlmICh0eXBlb2YgYmluZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZpZXcuYXV0b3J1bihcbiAgICAgICgpID0+IF9zZXRCaW5kaW5nVmFsdWUocmVhY3RpdmVWYXIsIGJpbmRpbmcoKSwgbWFwcGVyKSxcbiAgICAgIHZpZXcucGFyZW50VmlldyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgX3NldEJpbmRpbmdWYWx1ZShyZWFjdGl2ZVZhciwgYmluZGluZywgbWFwcGVyKTtcbiAgfVxuXG4gIHJldHVybiByZWFjdGl2ZVZhcjtcbn1cblxuLyoqXG4gKiBBdHRhY2hlcyBiaW5kaW5ncyB0byB0aGUgaW5zdGFudGlhdGVkIHZpZXcuXG4gKiBAcGFyYW0ge09iamVjdH0gYmluZGluZ3MgQSBkaWN0aW9uYXJ5IG9mIGJpbmRpbmdzLCBlYWNoIGJpbmRpbmcgbmFtZVxuICogY29ycmVzcG9uZHMgdG8gYSB2YWx1ZSBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSByZWFjdGl2ZWx5IHJlLXJ1bi5cbiAqIEBwYXJhbSB7QmxhemUuVmlld30gdmlldyBUaGUgdGFyZ2V0LlxuICovXG5CbGF6ZS5fYXR0YWNoQmluZGluZ3NUb1ZpZXcgPSBmdW5jdGlvbiAoYmluZGluZ3MsIHZpZXcpIHtcbiAgdmlldy5vblZpZXdDcmVhdGVkKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QuZW50cmllcyhiaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbiAoW25hbWUsIGJpbmRpbmddKSB7XG4gICAgICB2aWV3Ll9zY29wZUJpbmRpbmdzW25hbWVdID0gX2NyZWF0ZUJpbmRpbmcodmlldywgYmluZGluZyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgVmlldyBzZXR0aW5nIHRoZSBsb2NhbCBsZXhpY2FsIHNjb3BlIGluIHRoZSBibG9jay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGJpbmRpbmdzIERpY3Rpb25hcnkgbWFwcGluZyBuYW1lcyBvZiBiaW5kaW5ncyB0b1xuICogdmFsdWVzIG9yIGNvbXB1dGF0aW9ucyB0byByZWFjdGl2ZWx5IHJlLXJ1bi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRlbnRGdW5jIEEgRnVuY3Rpb24gdGhhdCByZXR1cm5zIFsqcmVuZGVyYWJsZSBjb250ZW50Kl0oI1JlbmRlcmFibGUtQ29udGVudCkuXG4gKi9cbkJsYXplLkxldCA9IGZ1bmN0aW9uIChiaW5kaW5ncywgY29udGVudEZ1bmMpIHtcbiAgdmFyIHZpZXcgPSBCbGF6ZS5WaWV3KCdsZXQnLCBjb250ZW50RnVuYyk7XG4gIEJsYXplLl9hdHRhY2hCaW5kaW5nc1RvVmlldyhiaW5kaW5ncywgdmlldyk7XG5cbiAgcmV0dXJuIHZpZXc7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBWaWV3IHRoYXQgcmVuZGVycyBjb250ZW50IGNvbmRpdGlvbmFsbHkuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25kaXRpb25GdW5jIEEgZnVuY3Rpb24gdG8gcmVhY3RpdmVseSByZS1ydW4uICBXaGV0aGVyIHRoZSByZXN1bHQgaXMgdHJ1dGh5IG9yIGZhbHN5IGRldGVybWluZXNcbiAqICAgd2hldGhlciBgY29udGVudEZ1bmNgIG9yIGBlbHNlRnVuY2AgaXMgc2hvd24uICBBbiBlbXB0eSBhcnJheSBpcyBjb25zaWRlcmVkIGZhbHN5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGVudEZ1bmMgQSBGdW5jdGlvbiB0aGF0IHJldHVybnMgWypyZW5kZXJhYmxlIGNvbnRlbnQqXSgjUmVuZGVyYWJsZS1Db250ZW50KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbHNlRnVuY10gT3B0aW9uYWwuICBBIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBbKnJlbmRlcmFibGUgY29udGVudCpdKCNSZW5kZXJhYmxlLUNvbnRlbnQpLiAgSWYgbm9cbiAqICAgYGVsc2VGdW5jYCBpcyBzdXBwbGllZCwgbm8gY29udGVudCBpcyBzaG93biBpbiB0aGUgXCJlbHNlXCIgY2FzZS5cbiAqL1xuQmxhemUuSWYgPSBmdW5jdGlvbiAoY29uZGl0aW9uRnVuYywgY29udGVudEZ1bmMsIGVsc2VGdW5jLCBfbm90KSB7XG4gIGNvbnN0IHZpZXcgPSBCbGF6ZS5WaWV3KF9ub3QgPyAndW5sZXNzJyA6ICdpZicsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYmluZGluZyBoYXMgYSB2YWx1ZSwgaS5lLiwgaXQncyBlaXRoZXIgc3luY2hyb25vdXMgb3JcbiAgICAvLyBoYXMgcmVzb2x2ZWQuIFJlamVjdGVkIGBQcm9taXNlYHMgYXJlIE5PVCByZW5kZXJlZC5cbiAgICBjb25zdCBjb25kaXRpb24gPSB2aWV3Ll9fY29uZGl0aW9uVmFyLmdldCgpO1xuICAgIGlmIChjb25kaXRpb24gJiYgJ3ZhbHVlJyBpbiBjb25kaXRpb24pIHtcbiAgICAgIHJldHVybiBjb25kaXRpb24udmFsdWUgPyBjb250ZW50RnVuYygpIDogKGVsc2VGdW5jID8gZWxzZUZ1bmMoKSA6IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KTtcblxuICB2aWV3Ll9fY29uZGl0aW9uVmFyID0gbnVsbDtcbiAgdmlldy5vblZpZXdDcmVhdGVkKCgpID0+IHtcbiAgICB2aWV3Ll9fY29uZGl0aW9uVmFyID0gX2NyZWF0ZUJpbmRpbmcoXG4gICAgICB2aWV3LFxuICAgICAgY29uZGl0aW9uRnVuYyxcbiAgICAgICdjb25kaXRpb24nLFxuICAgICAgLy8gU3RvcmUgb25seSB0aGUgYWN0dWFsIGNvbmRpdGlvbi5cbiAgICAgIHZhbHVlID0+ICFCbGF6ZS5fY2FsY3VsYXRlQ29uZGl0aW9uKHZhbHVlKSAhPT0gIV9ub3QsXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXc7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IEFuIGludmVydGVkIFtgQmxhemUuSWZgXSgjQmxhemUtSWYpLlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZGl0aW9uRnVuYyBBIGZ1bmN0aW9uIHRvIHJlYWN0aXZlbHkgcmUtcnVuLiAgSWYgdGhlIHJlc3VsdCBpcyBmYWxzeSwgYGNvbnRlbnRGdW5jYCBpcyBzaG93bixcbiAqICAgb3RoZXJ3aXNlIGBlbHNlRnVuY2AgaXMgc2hvd24uICBBbiBlbXB0eSBhcnJheSBpcyBjb25zaWRlcmVkIGZhbHN5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGVudEZ1bmMgQSBGdW5jdGlvbiB0aGF0IHJldHVybnMgWypyZW5kZXJhYmxlIGNvbnRlbnQqXSgjUmVuZGVyYWJsZS1Db250ZW50KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbHNlRnVuY10gT3B0aW9uYWwuICBBIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBbKnJlbmRlcmFibGUgY29udGVudCpdKCNSZW5kZXJhYmxlLUNvbnRlbnQpLiAgSWYgbm9cbiAqICAgYGVsc2VGdW5jYCBpcyBzdXBwbGllZCwgbm8gY29udGVudCBpcyBzaG93biBpbiB0aGUgXCJlbHNlXCIgY2FzZS5cbiAqL1xuQmxhemUuVW5sZXNzID0gZnVuY3Rpb24gKGNvbmRpdGlvbkZ1bmMsIGNvbnRlbnRGdW5jLCBlbHNlRnVuYykge1xuICByZXR1cm4gQmxhemUuSWYoY29uZGl0aW9uRnVuYywgY29udGVudEZ1bmMsIGVsc2VGdW5jLCB0cnVlIC8qX25vdCovKTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIFZpZXcgdGhhdCByZW5kZXJzIGBjb250ZW50RnVuY2AgZm9yIGVhY2ggaXRlbSBpbiBhIHNlcXVlbmNlLlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXJnRnVuYyBBIGZ1bmN0aW9uIHRvIHJlYWN0aXZlbHkgcmUtcnVuLiBUaGUgZnVuY3Rpb24gY2FuXG4gKiByZXR1cm4gb25lIG9mIHR3byBvcHRpb25zOlxuICpcbiAqIDEuIEFuIG9iamVjdCB3aXRoIHR3byBmaWVsZHM6ICdfdmFyaWFibGUnIGFuZCAnX3NlcXVlbmNlJy4gRWFjaCBpdGVyYXRlcyBvdmVyXG4gKiAgICdfc2VxdWVuY2UnLCBpdCBtYXkgYmUgYSBDdXJzb3IsIGFuIGFycmF5LCBudWxsLCBvciB1bmRlZmluZWQuIEluc2lkZSB0aGVcbiAqICAgRWFjaCBib2R5IHlvdSB3aWxsIGJlIGFibGUgdG8gZ2V0IHRoZSBjdXJyZW50IGl0ZW0gZnJvbSB0aGUgc2VxdWVuY2UgdXNpbmdcbiAqICAgdGhlIG5hbWUgc3BlY2lmaWVkIGluIHRoZSAnX3ZhcmlhYmxlJyBmaWVsZC5cbiAqXG4gKiAyLiBKdXN0IGEgc2VxdWVuY2UgKEN1cnNvciwgYXJyYXksIG51bGwsIG9yIHVuZGVmaW5lZCkgbm90IHdyYXBwZWQgaW50byBhblxuICogICBvYmplY3QuIEluc2lkZSB0aGUgRWFjaCBib2R5LCB0aGUgY3VycmVudCBpdGVtIHdpbGwgYmUgc2V0IGFzIHRoZSBkYXRhXG4gKiAgIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250ZW50RnVuYyBBIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyAgWypyZW5kZXJhYmxlXG4gKiBjb250ZW50Kl0oI1JlbmRlcmFibGUtQ29udGVudCkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZWxzZUZ1bmNdIEEgRnVuY3Rpb24gdGhhdCByZXR1cm5zIFsqcmVuZGVyYWJsZVxuICogY29udGVudCpdKCNSZW5kZXJhYmxlLUNvbnRlbnQpIHRvIGRpc3BsYXkgaW4gdGhlIGNhc2Ugd2hlbiB0aGVyZSBhcmUgbm8gaXRlbXNcbiAqIGluIHRoZSBzZXF1ZW5jZS5cbiAqL1xuQmxhemUuRWFjaCA9IGZ1bmN0aW9uIChhcmdGdW5jLCBjb250ZW50RnVuYywgZWxzZUZ1bmMpIHtcbiAgY29uc3QgZWFjaFZpZXcgPSBCbGF6ZS5WaWV3KCdlYWNoJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHN1YnZpZXdzID0gdGhpcy5pbml0aWFsU3Vidmlld3M7XG4gICAgdGhpcy5pbml0aWFsU3Vidmlld3MgPSBudWxsO1xuICAgIGlmICh0aGlzLl9pc0NyZWF0ZWRGb3JFeHBhbnNpb24pIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRWYWx1ZURlcCA9IG5ldyBUcmFja2VyLkRlcGVuZGVuY3k7XG4gICAgICB0aGlzLmV4cGFuZGVkVmFsdWVEZXAuZGVwZW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBzdWJ2aWV3cztcbiAgfSk7XG4gIGVhY2hWaWV3LmluaXRpYWxTdWJ2aWV3cyA9IFtdO1xuICBlYWNoVmlldy5udW1JdGVtcyA9IDA7XG4gIGVhY2hWaWV3LmluRWxzZU1vZGUgPSBmYWxzZTtcbiAgZWFjaFZpZXcuc3RvcEhhbmRsZSA9IG51bGw7XG4gIGVhY2hWaWV3LmNvbnRlbnRGdW5jID0gY29udGVudEZ1bmM7XG4gIGVhY2hWaWV3LmVsc2VGdW5jID0gZWxzZUZ1bmM7XG4gIGVhY2hWaWV3LmFyZ1ZhciA9IHVuZGVmaW5lZDtcbiAgZWFjaFZpZXcudmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAvLyB1cGRhdGUgdGhlIEBpbmRleCB2YWx1ZSBpbiB0aGUgc2NvcGUgb2YgYWxsIHN1YnZpZXdzIGluIHRoZSByYW5nZVxuICBjb25zdCB1cGRhdGVJbmRpY2VzID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgaWYgKHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRvID0gZWFjaFZpZXcubnVtSXRlbXMgLSAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDw9IHRvOyBpKyspIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBlYWNoVmlldy5fZG9tcmFuZ2UubWVtYmVyc1tpXS52aWV3O1xuICAgICAgdmlldy5fc2NvcGVCaW5kaW5nc1snQGluZGV4J10uc2V0KHsgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGVhY2hWaWV3Lm9uVmlld0NyZWF0ZWQoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIGV2YWx1YXRlIGBhcmdGdW5jYCBpbiBgVHJhY2tlci5hdXRvcnVuYCB0byBlbnN1cmUgYEJsYXplLmN1cnJlbnRWaWV3YFxuICAgIC8vIGlzIGFsd2F5cyBzZXQgd2hlbiBpdCBydW5zLlxuICAgIGVhY2hWaWV3LmFyZ1ZhciA9IF9jcmVhdGVCaW5kaW5nKFxuICAgICAgZWFjaFZpZXcsXG4gICAgICAvLyBVbndyYXAgYSBzZXF1ZW5jZSByZWFjdGl2ZWx5IChge3sjZWFjaCB4IGluIHhzfX1gKS5cbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IG1heWJlU2VxdWVuY2UgPSBhcmdGdW5jKCk7XG4gICAgICAgIGlmIChpc09iamVjdChtYXliZVNlcXVlbmNlKSAmJiBoYXMobWF5YmVTZXF1ZW5jZSwgJ19zZXF1ZW5jZScpKSB7XG4gICAgICAgICAgZWFjaFZpZXcudmFyaWFibGVOYW1lID0gbWF5YmVTZXF1ZW5jZS5fdmFyaWFibGUgfHwgbnVsbDtcbiAgICAgICAgICBtYXliZVNlcXVlbmNlID0gbWF5YmVTZXF1ZW5jZS5fc2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heWJlU2VxdWVuY2U7XG4gICAgICB9LFxuICAgICAgJ2NvbGxlY3Rpb24nLFxuICAgICk7XG5cbiAgICBlYWNoVmlldy5zdG9wSGFuZGxlID0gT2JzZXJ2ZVNlcXVlbmNlLm9ic2VydmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGVhY2hWaWV3LmFyZ1Zhci5nZXQoKT8udmFsdWU7XG4gICAgfSwge1xuICAgICAgYWRkZWRBdDogZnVuY3Rpb24gKGlkLCBpdGVtLCBpbmRleCkge1xuICAgICAgICBUcmFja2VyLm5vbnJlYWN0aXZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgbmV3SXRlbVZpZXc7XG4gICAgICAgICAgaWYgKGVhY2hWaWV3LnZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgLy8gbmV3LXN0eWxlICNlYWNoIChhcyBpbiB7eyNlYWNoIGl0ZW0gaW4gaXRlbXN9fSlcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgY3JlYXRlIGEgbmV3IGRhdGEgY29udGV4dFxuICAgICAgICAgICAgbmV3SXRlbVZpZXcgPSBCbGF6ZS5WaWV3KCdpdGVtJywgZWFjaFZpZXcuY29udGVudEZ1bmMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJdGVtVmlldyA9IEJsYXplLldpdGgoaXRlbSwgZWFjaFZpZXcuY29udGVudEZ1bmMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVhY2hWaWV3Lm51bUl0ZW1zKys7XG5cbiAgICAgICAgICBjb25zdCBiaW5kaW5ncyA9IHt9O1xuICAgICAgICAgIGJpbmRpbmdzWydAaW5kZXgnXSA9IGluZGV4O1xuICAgICAgICAgIGlmIChlYWNoVmlldy52YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIGJpbmRpbmdzW2VhY2hWaWV3LnZhcmlhYmxlTmFtZV0gPSBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBCbGF6ZS5fYXR0YWNoQmluZGluZ3NUb1ZpZXcoYmluZGluZ3MsIG5ld0l0ZW1WaWV3KTtcblxuICAgICAgICAgIGlmIChlYWNoVmlldy5leHBhbmRlZFZhbHVlRGVwKSB7XG4gICAgICAgICAgICBlYWNoVmlldy5leHBhbmRlZFZhbHVlRGVwLmNoYW5nZWQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVhY2hWaWV3Ll9kb21yYW5nZSkge1xuICAgICAgICAgICAgaWYgKGVhY2hWaWV3LmluRWxzZU1vZGUpIHtcbiAgICAgICAgICAgICAgZWFjaFZpZXcuX2RvbXJhbmdlLnJlbW92ZU1lbWJlcigwKTtcbiAgICAgICAgICAgICAgZWFjaFZpZXcuaW5FbHNlTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IEJsYXplLl9tYXRlcmlhbGl6ZVZpZXcobmV3SXRlbVZpZXcsIGVhY2hWaWV3KTtcbiAgICAgICAgICAgIGVhY2hWaWV3Ll9kb21yYW5nZS5hZGRNZW1iZXIocmFuZ2UsIGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZUluZGljZXMoaW5kZXgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYWNoVmlldy5pbml0aWFsU3Vidmlld3Muc3BsaWNlKGluZGV4LCAwLCBuZXdJdGVtVmlldyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVkQXQ6IGZ1bmN0aW9uIChpZCwgaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWFjaFZpZXcubnVtSXRlbXMtLTtcbiAgICAgICAgICBpZiAoZWFjaFZpZXcuZXhwYW5kZWRWYWx1ZURlcCkge1xuICAgICAgICAgICAgZWFjaFZpZXcuZXhwYW5kZWRWYWx1ZURlcC5jaGFuZ2VkKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlYWNoVmlldy5fZG9tcmFuZ2UpIHtcbiAgICAgICAgICAgIGVhY2hWaWV3Ll9kb21yYW5nZS5yZW1vdmVNZW1iZXIoaW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlSW5kaWNlcyhpbmRleCk7XG4gICAgICAgICAgICBpZiAoZWFjaFZpZXcuZWxzZUZ1bmMgJiYgZWFjaFZpZXcubnVtSXRlbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgZWFjaFZpZXcuaW5FbHNlTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgIGVhY2hWaWV3Ll9kb21yYW5nZS5hZGRNZW1iZXIoXG4gICAgICAgICAgICAgICAgQmxhemUuX21hdGVyaWFsaXplVmlldyhcbiAgICAgICAgICAgICAgICAgIEJsYXplLlZpZXcoJ2VhY2hfZWxzZScsZWFjaFZpZXcuZWxzZUZ1bmMpLFxuICAgICAgICAgICAgICAgICAgZWFjaFZpZXcpLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWFjaFZpZXcuaW5pdGlhbFN1YnZpZXdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VkQXQ6IGZ1bmN0aW9uIChpZCwgbmV3SXRlbSwgb2xkSXRlbSwgaW5kZXgpIHtcbiAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGVhY2hWaWV3LmV4cGFuZGVkVmFsdWVEZXApIHtcbiAgICAgICAgICAgIGVhY2hWaWV3LmV4cGFuZGVkVmFsdWVEZXAuY2hhbmdlZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXRlbVZpZXc7XG4gICAgICAgICAgICBpZiAoZWFjaFZpZXcuX2RvbXJhbmdlKSB7XG4gICAgICAgICAgICAgIGl0ZW1WaWV3ID0gZWFjaFZpZXcuX2RvbXJhbmdlLmdldE1lbWJlcihpbmRleCkudmlldztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW1WaWV3ID0gZWFjaFZpZXcuaW5pdGlhbFN1YnZpZXdzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlYWNoVmlldy52YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgaXRlbVZpZXcuX3Njb3BlQmluZGluZ3NbZWFjaFZpZXcudmFyaWFibGVOYW1lXS5zZXQoeyB2YWx1ZTogbmV3SXRlbSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW1WaWV3LmRhdGFWYXIuc2V0KG5ld0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgbW92ZWRUbzogZnVuY3Rpb24gKGlkLCBpdGVtLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgVHJhY2tlci5ub25yZWFjdGl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGVhY2hWaWV3LmV4cGFuZGVkVmFsdWVEZXApIHtcbiAgICAgICAgICAgIGVhY2hWaWV3LmV4cGFuZGVkVmFsdWVEZXAuY2hhbmdlZCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWFjaFZpZXcuX2RvbXJhbmdlKSB7XG4gICAgICAgICAgICBlYWNoVmlldy5fZG9tcmFuZ2UubW92ZU1lbWJlcihmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgICAgICAgdXBkYXRlSW5kaWNlcyhcbiAgICAgICAgICAgICAgTWF0aC5taW4oZnJvbUluZGV4LCB0b0luZGV4KSwgTWF0aC5tYXgoZnJvbUluZGV4LCB0b0luZGV4KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnZpZXdzID0gZWFjaFZpZXcuaW5pdGlhbFN1YnZpZXdzO1xuICAgICAgICAgICAgY29uc3QgaXRlbVZpZXcgPSBzdWJ2aWV3c1tmcm9tSW5kZXhdO1xuICAgICAgICAgICAgc3Vidmlld3Muc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gICAgICAgICAgICBzdWJ2aWV3cy5zcGxpY2UodG9JbmRleCwgMCwgaXRlbVZpZXcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZWFjaFZpZXcuZWxzZUZ1bmMgJiYgZWFjaFZpZXcubnVtSXRlbXMgPT09IDApIHtcbiAgICAgIGVhY2hWaWV3LmluRWxzZU1vZGUgPSB0cnVlO1xuICAgICAgZWFjaFZpZXcuaW5pdGlhbFN1YnZpZXdzWzBdID1cbiAgICAgICAgQmxhemUuVmlldygnZWFjaF9lbHNlJywgZWFjaFZpZXcuZWxzZUZ1bmMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZWFjaFZpZXcub25WaWV3RGVzdHJveWVkKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZWFjaFZpZXcuc3RvcEhhbmRsZSlcbiAgICAgIGVhY2hWaWV3LnN0b3BIYW5kbGUuc3RvcCgpO1xuICB9KTtcblxuICByZXR1cm4gZWFjaFZpZXc7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBgQmxhemUuTGV0YCB2aWV3IHRoYXQgdW53cmFwcyB0aGUgZ2l2ZW4gdmFsdWUuXG4gKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gKiBAcmV0dXJucyB7QmxhemUuVmlld31cbiAqL1xuQmxhemUuX0F3YWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBCbGF6ZS5MZXQoeyB2YWx1ZSB9LCBCbGF6ZS5fQXdhaXRDb250ZW50KTtcbn07XG5cbkJsYXplLl9Bd2FpdENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBCbGF6ZS5jdXJyZW50Vmlldy5fc2NvcGVCaW5kaW5ncy52YWx1ZS5nZXQoKT8udmFsdWU7XG59O1xuXG5CbGF6ZS5fVGVtcGxhdGVXaXRoID0gZnVuY3Rpb24gKGFyZywgY29udGVudEZ1bmMpIHtcbiAgbGV0IHc7XG5cbiAgbGV0IGFyZ0Z1bmMgPSBhcmc7XG4gIGlmICh0eXBlb2YgYXJnICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgYXJnRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgYSBsaXR0bGUgbWVzc3kuICBXaGVuIHdlIGNvbXBpbGUgYHt7PiBUZW1wbGF0ZS5jb250ZW50QmxvY2t9fWAsIHdlXG4gIC8vIHdyYXAgaXQgaW4gQmxhemUuX0luT3V0ZXJUZW1wbGF0ZVNjb3BlIGluIG9yZGVyIHRvIHNraXAgdGhlIGludGVybWVkaWF0ZVxuICAvLyBwYXJlbnQgVmlld3MgaW4gdGhlIGN1cnJlbnQgdGVtcGxhdGUuICBIb3dldmVyLCB3aGVuIHRoZXJlJ3MgYW4gYXJndW1lbnRcbiAgLy8gKGB7ez4gVGVtcGxhdGUuY29udGVudEJsb2NrIGFyZ319YCksIHRoZSBhcmd1bWVudCBuZWVkcyB0byBiZSBldmFsdWF0ZWRcbiAgLy8gaW4gdGhlIG9yaWdpbmFsIHNjb3BlLiAgVGhlcmUncyBubyBnb29kIG9yZGVyIHRvIG5lc3RcbiAgLy8gQmxhemUuX0luT3V0ZXJUZW1wbGF0ZVNjb3BlIGFuZCBCbGF6ZS5fVGVtcGxhdGVXaXRoIHRvIGFjaGlldmUgdGhpcyxcbiAgLy8gc28gd2Ugd3JhcCBhcmdGdW5jIHRvIHJ1biBpdCBpbiB0aGUgXCJvcmlnaW5hbCBwYXJlbnRWaWV3XCIgb2YgdGhlXG4gIC8vIEJsYXplLl9Jbk91dGVyVGVtcGxhdGVTY29wZS5cbiAgLy9cbiAgLy8gVG8gbWFrZSB0aGlzIGJldHRlciwgcmVjb25zaWRlciBfSW5PdXRlclRlbXBsYXRlU2NvcGUgYXMgYSBwcmltaXRpdmUuXG4gIC8vIExvbmdlciB0ZXJtLCBldmFsdWF0ZSBleHByZXNzaW9ucyBpbiB0aGUgcHJvcGVyIGxleGljYWwgc2NvcGUuXG4gIGNvbnN0IHdyYXBwZWRBcmdGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB2aWV3VG9FdmFsdWF0ZUFyZyA9IG51bGw7XG4gICAgaWYgKHcucGFyZW50VmlldyAmJiB3LnBhcmVudFZpZXcubmFtZSA9PT0gJ0luT3V0ZXJUZW1wbGF0ZVNjb3BlJykge1xuICAgICAgdmlld1RvRXZhbHVhdGVBcmcgPSB3LnBhcmVudFZpZXcub3JpZ2luYWxQYXJlbnRWaWV3O1xuICAgIH1cbiAgICBpZiAodmlld1RvRXZhbHVhdGVBcmcpIHtcbiAgICAgIHJldHVybiBCbGF6ZS5fd2l0aEN1cnJlbnRWaWV3KHZpZXdUb0V2YWx1YXRlQXJnLCBhcmdGdW5jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyZ0Z1bmMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgd3JhcHBlZENvbnRlbnRGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb250ZW50ID0gY29udGVudEZ1bmMuY2FsbCh0aGlzKTtcblxuICAgIC8vIFNpbmNlIHdlIGFyZSBnZW5lcmF0aW5nIHRoZSBCbGF6ZS5fVGVtcGxhdGVXaXRoIHZpZXcgZm9yIHRoZVxuICAgIC8vIHVzZXIsIHNldCB0aGUgZmxhZyBvbiB0aGUgY2hpbGQgdmlldy4gIElmIGBjb250ZW50YCBpcyBhIHRlbXBsYXRlLFxuICAgIC8vIGNvbnN0cnVjdCB0aGUgVmlldyBzbyB0aGF0IHdlIGNhbiBzZXQgdGhlIGZsYWcuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBCbGF6ZS5UZW1wbGF0ZSkge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY29uc3RydWN0VmlldygpO1xuICAgIH1cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEJsYXplLlZpZXcpIHtcbiAgICAgIGNvbnRlbnQuX2hhc0dlbmVyYXRlZFBhcmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH07XG5cbiAgdyA9IEJsYXplLldpdGgod3JhcHBlZEFyZ0Z1bmMsIHdyYXBwZWRDb250ZW50RnVuYyk7XG4gIHcuX19pc1RlbXBsYXRlV2l0aCA9IHRydWU7XG4gIHJldHVybiB3O1xufTtcblxuQmxhemUuX0luT3V0ZXJUZW1wbGF0ZVNjb3BlID0gZnVuY3Rpb24gKHRlbXBsYXRlVmlldywgY29udGVudEZ1bmMpIHtcbiAgY29uc3QgdmlldyA9IEJsYXplLlZpZXcoJ0luT3V0ZXJUZW1wbGF0ZVNjb3BlJywgY29udGVudEZ1bmMpO1xuICBsZXQgcGFyZW50VmlldyA9IHRlbXBsYXRlVmlldy5wYXJlbnRWaWV3O1xuXG4gIC8vIEhhY2sgc28gdGhhdCBpZiB5b3UgY2FsbCBge3s+IGZvbyBiYXJ9fWAgYW5kIGl0IGV4cGFuZHMgaW50b1xuICAvLyBge3sjd2l0aCBiYXJ9fXt7PiBmb299fXt7L3dpdGh9fWAsIGFuZCB0aGVuIGBmb29gIGlzIGEgdGVtcGxhdGVcbiAgLy8gdGhhdCBpbnNlcnRzIGB7ez4gVGVtcGxhdGUuY29udGVudEJsb2NrfX1gLCB0aGUgZGF0YSBjb250ZXh0IGZvclxuICAvLyBgVGVtcGxhdGUuY29udGVudEJsb2NrYCBpcyBub3QgYGJhcmAgYnV0IHRoZSBvbmUgZW5jbG9zaW5nIHRoYXQuXG4gIGlmIChwYXJlbnRWaWV3Ll9faXNUZW1wbGF0ZVdpdGgpXG4gICAgcGFyZW50VmlldyA9IHBhcmVudFZpZXcucGFyZW50VmlldztcblxuICB2aWV3Lm9uVmlld0NyZWF0ZWQoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub3JpZ2luYWxQYXJlbnRWaWV3ID0gdGhpcy5wYXJlbnRWaWV3O1xuICAgIHRoaXMucGFyZW50VmlldyA9IHBhcmVudFZpZXc7XG4gICAgdGhpcy5fX2NoaWxkRG9lc250U3RhcnROZXdMZXhpY2FsU2NvcGUgPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHZpZXc7XG59O1xuXG4iLCJpbXBvcnQgaGFzIGZyb20gJ2xvZGFzaC5oYXMnO1xuXG4vKiogQHBhcmFtIHsoYmluZGluZzogQmluZGluZykgPT4gYm9vbGVhbn0gZm4gKi9cbmZ1bmN0aW9uIF9jcmVhdGVCaW5kaW5nc0hlbHBlcihmbikge1xuICAvKiogQHBhcmFtIHtzdHJpbmdbXX0gbmFtZXMgKi9cbiAgcmV0dXJuICguLi5uYW1lcykgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBCbGF6ZS5jdXJyZW50VmlldztcblxuICAgIC8vIFRoZXJlJ3MgZWl0aGVyIHplcm8gYXJndW1lbnRzIChpLmUuLCBjaGVjayBhbGwgYmluZGluZ3MpIG9yIGFuIGFkZGl0aW9uYWxcbiAgICAvLyBcImhhc2hcIiBhcmd1bWVudCB0aGF0IHdlIGhhdmUgdG8gaWdub3JlLlxuICAgIG5hbWVzID0gbmFtZXMubGVuZ3RoID09PSAwXG4gICAgICAvLyBUT0RPOiBTaG91bGQgd2Ugd2FsayB1cCB0aGUgYmluZGluZ3MgaGVyZT9cbiAgICAgID8gT2JqZWN0LmtleXModmlldy5fc2NvcGVCaW5kaW5ncylcbiAgICAgIDogbmFtZXMuc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIG5hbWVzLnNvbWUobmFtZSA9PiB7XG4gICAgICBjb25zdCBiaW5kaW5nID0gX2xleGljYWxCaW5kaW5nTG9va3VwKHZpZXcsIG5hbWUpO1xuICAgICAgaWYgKCFiaW5kaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQmluZGluZyBmb3IgXCIke25hbWV9XCIgd2FzIG5vdCBmb3VuZC5gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGJpbmRpbmcuZ2V0KCkpO1xuICAgIH0pO1xuICB9O1xufVxuXG5CbGF6ZS5fZ2xvYmFsSGVscGVycyA9IHtcbiAgLyoqIEBzdW1tYXJ5IENoZWNrIHdoZXRoZXIgYW55IG9mIHRoZSBnaXZlbiBiaW5kaW5ncyAob3IgYWxsIGlmIG5vbmUgZ2l2ZW4pIGlzIHN0aWxsIHBlbmRpbmcuICovXG4gICdAcGVuZGluZyc6IF9jcmVhdGVCaW5kaW5nc0hlbHBlcihiaW5kaW5nID0+IGJpbmRpbmcgPT09IHVuZGVmaW5lZCksXG4gIC8qKiBAc3VtbWFyeSBDaGVjayB3aGV0aGVyIGFueSBvZiB0aGUgZ2l2ZW4gYmluZGluZ3MgKG9yIGFsbCBpZiBub25lIGdpdmVuKSBoYXMgcmVqZWN0ZWQuICovXG4gICdAcmVqZWN0ZWQnOiBfY3JlYXRlQmluZGluZ3NIZWxwZXIoYmluZGluZyA9PiAhIWJpbmRpbmcgJiYgJ2Vycm9yJyBpbiBiaW5kaW5nKSxcbiAgLyoqIEBzdW1tYXJ5IENoZWNrIHdoZXRoZXIgYW55IG9mIHRoZSBnaXZlbiBiaW5kaW5ncyAob3IgYWxsIGlmIG5vbmUgZ2l2ZW4pIGhhcyByZXNvbHZlZC4gKi9cbiAgJ0ByZXNvbHZlZCc6IF9jcmVhdGVCaW5kaW5nc0hlbHBlcihiaW5kaW5nID0+ICEhYmluZGluZyAmJiAndmFsdWUnIGluIGJpbmRpbmcpLFxufTtcblxuLy8gRG9jdW1lbnRlZCBhcyBUZW1wbGF0ZS5yZWdpc3RlckhlbHBlci5cbi8vIFRoaXMgZGVmaW5pdGlvbiBhbHNvIHByb3ZpZGVzIGJhY2stY29tcGF0IGZvciBgVUkucmVnaXN0ZXJIZWxwZXJgLlxuQmxhemUucmVnaXN0ZXJIZWxwZXIgPSBmdW5jdGlvbiAobmFtZSwgZnVuYykge1xuICBCbGF6ZS5fZ2xvYmFsSGVscGVyc1tuYW1lXSA9IGZ1bmM7XG59O1xuXG4vLyBBbHNvIGRvY3VtZW50ZWQgYXMgVGVtcGxhdGUuZGVyZWdpc3RlckhlbHBlclxuQmxhemUuZGVyZWdpc3RlckhlbHBlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIEJsYXplLl9nbG9iYWxIZWxwZXJzW25hbWVdO1xufTtcblxuY29uc3QgYmluZElmSXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh4LCB0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB4O1xuICByZXR1cm4gQmxhemUuX2JpbmQoeCwgdGFyZ2V0KTtcbn07XG5cbi8vIElmIGB4YCBpcyBhIGZ1bmN0aW9uLCBiaW5kcyB0aGUgdmFsdWUgb2YgYHRoaXNgIGZvciB0aGF0IGZ1bmN0aW9uXG4vLyB0byB0aGUgY3VycmVudCBkYXRhIGNvbnRleHQuXG5jb25zdCBiaW5kRGF0YUNvbnRleHQgPSBmdW5jdGlvbiAoeCkge1xuICBpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGxldCBkYXRhID0gQmxhemUuZ2V0RGF0YSgpO1xuICAgICAgaWYgKGRhdGEgPT0gbnVsbClcbiAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgcmV0dXJuIHguYXBwbHkoZGF0YSwgYXJncyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4geDtcbn07XG5cbkJsYXplLl9PTERTVFlMRV9IRUxQRVIgPSB7fTtcblxuQmxhemUuX2dldFRlbXBsYXRlSGVscGVyID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBuYW1lLCB0bXBsSW5zdGFuY2VGdW5jKSB7XG4gIC8vIFhYWCBDT01QQVQgV0lUSCAwLjkuM1xuICBsZXQgaXNLbm93bk9sZFN0eWxlSGVscGVyID0gZmFsc2U7XG5cbiAgaWYgKHRlbXBsYXRlLl9faGVscGVycy5oYXMobmFtZSkpIHtcbiAgICBjb25zdCBoZWxwZXIgPSB0ZW1wbGF0ZS5fX2hlbHBlcnMuZ2V0KG5hbWUpO1xuICAgIGlmIChoZWxwZXIgPT09IEJsYXplLl9PTERTVFlMRV9IRUxQRVIpIHtcbiAgICAgIGlzS25vd25PbGRTdHlsZUhlbHBlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChoZWxwZXIgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdyYXBIZWxwZXIoYmluZERhdGFDb250ZXh0KGhlbHBlciksIHRtcGxJbnN0YW5jZUZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBvbGQtc3R5bGUgaGVscGVyXG4gIGlmIChuYW1lIGluIHRlbXBsYXRlKSB7XG4gICAgLy8gT25seSB3YXJuIG9uY2UgcGVyIGhlbHBlclxuICAgIGlmICghIGlzS25vd25PbGRTdHlsZUhlbHBlcikge1xuICAgICAgdGVtcGxhdGUuX19oZWxwZXJzLnNldChuYW1lLCBCbGF6ZS5fT0xEU1RZTEVfSEVMUEVSKTtcbiAgICAgIGlmICghIHRlbXBsYXRlLl9OT1dBUk5fT0xEU1RZTEVfSEVMUEVSUykge1xuICAgICAgICBCbGF6ZS5fd2FybignQXNzaWduaW5nIGhlbHBlciB3aXRoIGAnICsgdGVtcGxhdGUudmlld05hbWUgKyAnLicgK1xuICAgICAgICAgICAgICAgICAgICBuYW1lICsgJyA9IC4uLmAgaXMgZGVwcmVjYXRlZC4gIFVzZSBgJyArIHRlbXBsYXRlLnZpZXdOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJy5oZWxwZXJzKC4uLilgIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gd3JhcEhlbHBlcihiaW5kRGF0YUNvbnRleHQodGVtcGxhdGVbbmFtZV0pLCB0bXBsSW5zdGFuY2VGdW5jKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHdyYXBIZWxwZXIgPSBmdW5jdGlvbiAoZiwgdGVtcGxhdGVGdW5jKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGY7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBCbGF6ZS5UZW1wbGF0ZS5fd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jKHRlbXBsYXRlRnVuYywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEJsYXplLl93cmFwQ2F0Y2hpbmdFeGNlcHRpb25zKGYsICd0ZW1wbGF0ZSBoZWxwZXInKS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIF9sZXhpY2FsS2VlcEdvaW5nKGN1cnJlbnRWaWV3KSB7XG4gIGlmICghY3VycmVudFZpZXcucGFyZW50Vmlldykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKCFjdXJyZW50Vmlldy5fX3N0YXJ0c05ld0xleGljYWxTY29wZSkge1xuICAgIHJldHVybiBjdXJyZW50Vmlldy5wYXJlbnRWaWV3O1xuICB9XG4gIGlmIChjdXJyZW50Vmlldy5wYXJlbnRWaWV3Ll9fY2hpbGREb2VzbnRTdGFydE5ld0xleGljYWxTY29wZSkge1xuICAgIHJldHVybiBjdXJyZW50Vmlldy5wYXJlbnRWaWV3O1xuICB9XG5cbiAgLy8gaW4gdGhlIGNhc2Ugb2Yge3s+IFRlbXBsYXRlLmNvbnRlbnRCbG9jayBkYXRhfX0gdGhlIGNvbnRlbnRCbG9jayBsb3NlcyB0aGUgbGV4aWNhbCBzY29wZSBvZiBpdCdzIHBhcmVudCwgd2hlcmFzIHt7PiBUZW1wbGF0ZS5jb250ZW50QmxvY2t9fSBpdCBkb2VzIG5vdFxuICAvLyB0aGlzIGlzIGJlY2F1c2UgYSAjd2l0aCBzaXRzIGJldHdlZW4gdGhlIGluY2x1ZGUgSW5PdXRlclRlbXBsYXRlU2NvcGVcbiAgaWYgKGN1cnJlbnRWaWV3LnBhcmVudFZpZXcubmFtZSA9PT0gXCJ3aXRoXCIgJiYgY3VycmVudFZpZXcucGFyZW50Vmlldy5wYXJlbnRWaWV3ICYmIGN1cnJlbnRWaWV3LnBhcmVudFZpZXcucGFyZW50Vmlldy5fX2NoaWxkRG9lc250U3RhcnROZXdMZXhpY2FsU2NvcGUpIHtcbiAgICByZXR1cm4gY3VycmVudFZpZXcucGFyZW50VmlldztcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfbGV4aWNhbEJpbmRpbmdMb29rdXAodmlldywgbmFtZSkge1xuICBsZXQgY3VycmVudFZpZXcgPSB2aWV3O1xuXG4gIC8vIHdhbGsgdXAgdGhlIHZpZXdzIHN0b3BwaW5nIGF0IGEgU3BhY2ViYXJzLmluY2x1ZGUgb3IgVGVtcGxhdGUgdmlldyB0aGF0XG4gIC8vIGRvZXNuJ3QgaGF2ZSBhbiBJbk91dGVyVGVtcGxhdGVTY29wZSB2aWV3IGFzIGEgcGFyZW50XG4gIGRvIHtcbiAgICAvLyBza2lwIGJsb2NrIGhlbHBlcnMgdmlld3NcbiAgICAvLyBpZiB3ZSBmb3VuZCB0aGUgYmluZGluZyBvbiB0aGUgc2NvcGUsIHJldHVybiBpdFxuICAgIGlmIChoYXMoY3VycmVudFZpZXcuX3Njb3BlQmluZGluZ3MsIG5hbWUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFZpZXcuX3Njb3BlQmluZGluZ3NbbmFtZV07XG4gICAgfVxuICB9IHdoaWxlIChjdXJyZW50VmlldyA9IF9sZXhpY2FsS2VlcEdvaW5nKGN1cnJlbnRWaWV3KSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbkJsYXplLl9sZXhpY2FsQmluZGluZ0xvb2t1cCA9IGZ1bmN0aW9uICh2aWV3LCBuYW1lKSB7XG4gIGNvbnN0IGJpbmRpbmcgPSBfbGV4aWNhbEJpbmRpbmdMb29rdXAodmlldywgbmFtZSk7XG4gIHJldHVybiBiaW5kaW5nICYmICgoKSA9PiBiaW5kaW5nLmdldCgpPy52YWx1ZSk7XG59O1xuXG4vLyB0ZW1wbGF0ZUluc3RhbmNlIGFyZ3VtZW50IGlzIHByb3ZpZGVkIHRvIGJlIGF2YWlsYWJsZSBmb3IgcG9zc2libGVcbi8vIGFsdGVybmF0aXZlIGltcGxlbWVudGF0aW9ucyBvZiB0aGlzIGZ1bmN0aW9uIGJ5IDNyZCBwYXJ0eSBwYWNrYWdlcy5cbkJsYXplLl9nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCB0ZW1wbGF0ZUluc3RhbmNlKSB7XG4gIGlmICgobmFtZSBpbiBCbGF6ZS5UZW1wbGF0ZSkgJiYgKEJsYXplLlRlbXBsYXRlW25hbWVdIGluc3RhbmNlb2YgQmxhemUuVGVtcGxhdGUpKSB7XG4gICAgcmV0dXJuIEJsYXplLlRlbXBsYXRlW25hbWVdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuQmxhemUuX2dldEdsb2JhbEhlbHBlciA9IGZ1bmN0aW9uIChuYW1lLCB0ZW1wbGF0ZUluc3RhbmNlKSB7XG4gIGlmIChCbGF6ZS5fZ2xvYmFsSGVscGVyc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHdyYXBIZWxwZXIoYmluZERhdGFDb250ZXh0KEJsYXplLl9nbG9iYWxIZWxwZXJzW25hbWVdKSwgdGVtcGxhdGVJbnN0YW5jZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBMb29rcyB1cCBhIG5hbWUsIGxpa2UgXCJmb29cIiBvciBcIi4uXCIsIGFzIGEgaGVscGVyIG9mIHRoZVxuLy8gY3VycmVudCB0ZW1wbGF0ZTsgdGhlIG5hbWUgb2YgYSB0ZW1wbGF0ZTsgYSBnbG9iYWwgaGVscGVyO1xuLy8gb3IgYSBwcm9wZXJ0eSBvZiB0aGUgZGF0YSBjb250ZXh0LiAgQ2FsbGVkIG9uIHRoZSBWaWV3IG9mXG4vLyBhIHRlbXBsYXRlIChpLmUuIGEgVmlldyB3aXRoIGEgYC50ZW1wbGF0ZWAgcHJvcGVydHksXG4vLyB3aGVyZSB0aGUgaGVscGVycyBhcmUpLiAgVXNlZCBmb3IgdGhlIGZpcnN0IG5hbWUgaW4gYVxuLy8gXCJwYXRoXCIgaW4gYSB0ZW1wbGF0ZSB0YWcsIGxpa2UgXCJmb29cIiBpbiBge3tmb28uYmFyfX1gIG9yXG4vLyBcIi4uXCIgaW4gYHt7ZnJvYnVsYXRlIC4uL2JsYWh9fWAuXG4vL1xuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCBhIG5vbi1mdW5jdGlvbiB2YWx1ZSwgb3IgbnVsbC4gIElmXG4vLyBhIGZ1bmN0aW9uIGlzIGZvdW5kLCBpdCBpcyBib3VuZCBhcHByb3ByaWF0ZWx5LlxuLy9cbi8vIE5PVEU6IFRoaXMgZnVuY3Rpb24gbXVzdCBub3QgZXN0YWJsaXNoIGFueSByZWFjdGl2ZVxuLy8gZGVwZW5kZW5jaWVzIGl0c2VsZi4gIElmIHRoZXJlIGlzIGFueSByZWFjdGl2aXR5IGluIHRoZVxuLy8gdmFsdWUsIGxvb2t1cCBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24uXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAobmFtZSwgX29wdGlvbnMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICBjb25zdCBsb29rdXBUZW1wbGF0ZSA9IF9vcHRpb25zICYmIF9vcHRpb25zLnRlbXBsYXRlO1xuICBsZXQgaGVscGVyO1xuICBsZXQgYmluZGluZztcbiAgbGV0IGJvdW5kVG1wbEluc3RhbmNlO1xuICBsZXQgZm91bmRUZW1wbGF0ZTtcblxuICBpZiAodGhpcy50ZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgYm91bmRUbXBsSW5zdGFuY2UgPSBCbGF6ZS5fYmluZCh0aGlzLnRlbXBsYXRlSW5zdGFuY2UsIHRoaXMpO1xuICB9XG5cbiAgLy8gMC4gbG9va2luZyB1cCB0aGUgcGFyZW50IGRhdGEgY29udGV4dCB3aXRoIHRoZSBzcGVjaWFsIFwiLi4vXCIgc3ludGF4XG4gIGlmICgvXlxcLi8udGVzdChuYW1lKSkge1xuICAgIC8vIHN0YXJ0cyB3aXRoIGEgZG90LiBtdXN0IGJlIGEgc2VyaWVzIG9mIGRvdHMgd2hpY2ggbWFwcyB0byBhblxuICAgIC8vIGFuY2VzdG9yIG9mIHRoZSBhcHByb3ByaWF0ZSBoZWlnaHQuXG4gICAgaWYgKCEvXihcXC4pKyQvLnRlc3QobmFtZSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCBzdGFydGluZyB3aXRoIGRvdCBtdXN0IGJlIGEgc2VyaWVzIG9mIGRvdHNcIik7XG5cbiAgICByZXR1cm4gQmxhemUuX3BhcmVudERhdGEobmFtZS5sZW5ndGggLSAxLCB0cnVlIC8qX2Z1bmN0aW9uV3JhcHBlZCovKTtcblxuICB9XG5cbiAgLy8gMS4gbG9vayB1cCBhIGhlbHBlciBvbiB0aGUgY3VycmVudCB0ZW1wbGF0ZVxuICBpZiAodGVtcGxhdGUgJiYgKChoZWxwZXIgPSBCbGF6ZS5fZ2V0VGVtcGxhdGVIZWxwZXIodGVtcGxhdGUsIG5hbWUsIGJvdW5kVG1wbEluc3RhbmNlKSkgIT0gbnVsbCkpIHtcbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG5cbiAgLy8gMi4gbG9vayB1cCBhIGJpbmRpbmcgYnkgdHJhdmVyc2luZyB0aGUgbGV4aWNhbCB2aWV3IGhpZXJhcmNoeSBpbnNpZGUgdGhlXG4gIC8vIGN1cnJlbnQgdGVtcGxhdGVcbiAgaWYgKHRlbXBsYXRlICYmIChiaW5kaW5nID0gQmxhemUuX2xleGljYWxCaW5kaW5nTG9va3VwKEJsYXplLmN1cnJlbnRWaWV3LCBuYW1lKSkgIT0gbnVsbCkge1xuICAgIHJldHVybiBiaW5kaW5nO1xuICB9XG5cbiAgLy8gMy4gbG9vayB1cCBhIHRlbXBsYXRlIGJ5IG5hbWVcbiAgaWYgKGxvb2t1cFRlbXBsYXRlICYmICgoZm91bmRUZW1wbGF0ZSA9IEJsYXplLl9nZXRUZW1wbGF0ZShuYW1lLCBib3VuZFRtcGxJbnN0YW5jZSkpICE9IG51bGwpKSB7XG4gICAgcmV0dXJuIGZvdW5kVGVtcGxhdGU7XG4gIH1cblxuICAvLyA0LiBsb29rIHVwIGEgZ2xvYmFsIGhlbHBlclxuICBoZWxwZXIgPSBCbGF6ZS5fZ2V0R2xvYmFsSGVscGVyKG5hbWUsIGJvdW5kVG1wbEluc3RhbmNlKTtcbiAgaWYgKGhlbHBlciAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGhlbHBlcjtcbiAgfVxuXG4gIC8vIDUuIGxvb2sgdXAgaW4gYSBkYXRhIGNvbnRleHRcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaXNDYWxsZWRBc0Z1bmN0aW9uID0gKGFyZ3MubGVuZ3RoID4gMCk7XG4gICAgY29uc3QgZGF0YSA9IEJsYXplLmdldERhdGEoKTtcbiAgICBjb25zdCB4ID0gZGF0YSAmJiBkYXRhW25hbWVdO1xuICAgIGlmICghIHgpIHtcbiAgICAgIGlmIChsb29rdXBUZW1wbGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHRlbXBsYXRlOiBcIiArIG5hbWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0NhbGxlZEFzRnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBmdW5jdGlvbjogXCIgKyBuYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZS5jaGFyQXQoMCkgPT09ICdAJyAmJiAoKHggPT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4ID09PSB1bmRlZmluZWQpKSkge1xuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgdXNlciB0cmllcyB0byB1c2UgYSBgQGRpcmVjdGl2ZWBcbiAgICAgICAgLy8gdGhhdCBkb2Vzbid0IGV4aXN0LiAgV2UgZG9uJ3QgaW1wbGVtZW50IGFsbCBkaXJlY3RpdmVzXG4gICAgICAgIC8vIGZyb20gSGFuZGxlYmFycywgc28gdGhlcmUncyBhIHBvdGVudGlhbCBmb3IgY29uZnVzaW9uXG4gICAgICAgIC8vIGlmIHdlIGZhaWwgc2lsZW50bHkuICBPbiB0aGUgb3RoZXIgaGFuZCwgd2Ugd2FudCB0b1xuICAgICAgICAvLyB0aHJvdyBsYXRlIGluIGNhc2Ugc29tZSBhcHAgb3IgcGFja2FnZSB3YW50cyB0byBwcm92aWRlXG4gICAgICAgIC8vIGEgbWlzc2luZyBkaXJlY3RpdmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGRpcmVjdGl2ZTogXCIgKyBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEgZGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGlzQ2FsbGVkQXNGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIG5vbi1mdW5jdGlvbjogXCIgKyB4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICByZXR1cm4geC5hcHBseShkYXRhLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8vIEltcGxlbWVudCBTcGFjZWJhcnMnIHt7Li4vLi59fS5cbi8vIEBwYXJhbSBoZWlnaHQge051bWJlcn0gVGhlIG51bWJlciBvZiAnLi4nc1xuQmxhemUuX3BhcmVudERhdGEgPSBmdW5jdGlvbiAoaGVpZ2h0LCBfZnVuY3Rpb25XcmFwcGVkKSB7XG4gIC8vIElmIGhlaWdodCBpcyBudWxsIG9yIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byAxLCB0aGUgZmlyc3QgcGFyZW50LlxuICBpZiAoaGVpZ2h0ID09IG51bGwpIHtcbiAgICBoZWlnaHQgPSAxO1xuICB9XG4gIGxldCB0aGVXaXRoID0gQmxhemUuZ2V0Vmlldygnd2l0aCcpO1xuICBmb3IgKGxldCBpID0gMDsgKGkgPCBoZWlnaHQpICYmIHRoZVdpdGg7IGkrKykge1xuICAgIHRoZVdpdGggPSBCbGF6ZS5nZXRWaWV3KHRoZVdpdGgsICd3aXRoJyk7XG4gIH1cblxuICBpZiAoISB0aGVXaXRoKVxuICAgIHJldHVybiBudWxsO1xuICBpZiAoX2Z1bmN0aW9uV3JhcHBlZClcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhlV2l0aC5kYXRhVmFyLmdldCgpOyB9O1xuICByZXR1cm4gdGhlV2l0aC5kYXRhVmFyLmdldCgpO1xufTtcblxuXG5CbGF6ZS5WaWV3LnByb3RvdHlwZS5sb29rdXBUZW1wbGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLmxvb2t1cChuYW1lLCB7dGVtcGxhdGU6dHJ1ZX0pO1xufTtcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2guaXNvYmplY3QnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoLmlzZnVuY3Rpb24nO1xuaW1wb3J0IGhhcyBmcm9tICdsb2Rhc2guaGFzJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC5pc2VtcHR5JztcblxuLy8gW25ld10gQmxhemUuVGVtcGxhdGUoW3ZpZXdOYW1lXSwgcmVuZGVyRnVuY3Rpb24pXG4vL1xuLy8gYEJsYXplLlRlbXBsYXRlYCBpcyB0aGUgY2xhc3Mgb2YgdGVtcGxhdGVzLCBsaWtlIGBUZW1wbGF0ZS5mb29gIGluXG4vLyBNZXRlb3IsIHdoaWNoIGlzIGBpbnN0YW5jZW9mIFRlbXBsYXRlYC5cbi8vXG4vLyBgdmlld0tpbmRgIGlzIGEgc3RyaW5nIHRoYXQgbG9va3MgbGlrZSBcIlRlbXBsYXRlLmZvb1wiIGZvciB0ZW1wbGF0ZXNcbi8vIGRlZmluZWQgYnkgdGhlIGNvbXBpbGVyLlxuXG4vKipcbiAqIEBjbGFzc1xuICogQHN1bW1hcnkgQ29uc3RydWN0b3IgZm9yIGEgVGVtcGxhdGUsIHdoaWNoIGlzIHVzZWQgdG8gY29uc3RydWN0IFZpZXdzIHdpdGggcGFydGljdWxhciBuYW1lIGFuZCBjb250ZW50LlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtTdHJpbmd9IFt2aWV3TmFtZV0gT3B0aW9uYWwuICBBIG5hbWUgZm9yIFZpZXdzIGNvbnN0cnVjdGVkIGJ5IHRoaXMgVGVtcGxhdGUuICBTZWUgW2B2aWV3Lm5hbWVgXSgjdmlld19uYW1lKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlckZ1bmN0aW9uIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIFsqcmVuZGVyYWJsZSBjb250ZW50Kl0oI1JlbmRlcmFibGUtQ29udGVudCkuICBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIGByZW5kZXJGdW5jdGlvbmAgZm9yIFZpZXdzIGNvbnN0cnVjdGVkIGJ5IHRoaXMgVGVtcGxhdGUuXG4gKi9cbkJsYXplLlRlbXBsYXRlID0gZnVuY3Rpb24gKHZpZXdOYW1lLCByZW5kZXJGdW5jdGlvbikge1xuICBpZiAoISAodGhpcyBpbnN0YW5jZW9mIEJsYXplLlRlbXBsYXRlKSlcbiAgICAvLyBjYWxsZWQgd2l0aG91dCBgbmV3YFxuICAgIHJldHVybiBuZXcgQmxhemUuVGVtcGxhdGUodmlld05hbWUsIHJlbmRlckZ1bmN0aW9uKTtcblxuICBpZiAodHlwZW9mIHZpZXdOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gb21pdHRlZCBcInZpZXdOYW1lXCIgYXJndW1lbnRcbiAgICByZW5kZXJGdW5jdGlvbiA9IHZpZXdOYW1lO1xuICAgIHZpZXdOYW1lID0gJyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB2aWV3TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidmlld05hbWUgbXVzdCBiZSBhIFN0cmluZyAob3Igb21pdHRlZClcIik7XG4gIGlmICh0eXBlb2YgcmVuZGVyRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmVuZGVyRnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXG4gIHRoaXMudmlld05hbWUgPSB2aWV3TmFtZTtcbiAgdGhpcy5yZW5kZXJGdW5jdGlvbiA9IHJlbmRlckZ1bmN0aW9uO1xuXG4gIHRoaXMuX19oZWxwZXJzID0gbmV3IEhlbHBlck1hcDtcbiAgdGhpcy5fX2V2ZW50TWFwcyA9IFtdO1xuXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHtcbiAgICBjcmVhdGVkOiBbXSxcbiAgICByZW5kZXJlZDogW10sXG4gICAgZGVzdHJveWVkOiBbXVxuICB9O1xufTtcbmNvbnN0IFRlbXBsYXRlID0gQmxhemUuVGVtcGxhdGU7XG5cbmNvbnN0IEhlbHBlck1hcCA9IGZ1bmN0aW9uICgpIHt9O1xuSGVscGVyTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpc1snICcrbmFtZV07XG59O1xuSGVscGVyTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgaGVscGVyKSB7XG4gIHRoaXNbJyAnK25hbWVdID0gaGVscGVyO1xufTtcbkhlbHBlck1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICh0eXBlb2YgdGhpc1snICcrbmFtZV0gIT09ICd1bmRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgYSB0ZW1wbGF0ZSBvYmplY3QgbGlrZSBgVGVtcGxhdGUubXlUZW1wbGF0ZWAuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge0FueX0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKi9cbkJsYXplLmlzVGVtcGxhdGUgPSBmdW5jdGlvbiAodCkge1xuICByZXR1cm4gKHQgaW5zdGFuY2VvZiBCbGF6ZS5UZW1wbGF0ZSk7XG59O1xuXG4vKipcbiAqIEBuYW1lICBvbkNyZWF0ZWRcbiAqIEBpbnN0YW5jZVxuICogQG1lbWJlck9mIFRlbXBsYXRlXG4gKiBAc3VtbWFyeSBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGluc3RhbmNlIG9mIHRoaXMgdGVtcGxhdGUgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gYmUgYWRkZWQgYXMgYSBjYWxsYmFjay5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBpbXBvcnRGcm9tUGFja2FnZSB0ZW1wbGF0aW5nXG4gKi9cblRlbXBsYXRlLnByb3RvdHlwZS5vbkNyZWF0ZWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fY2FsbGJhY2tzLmNyZWF0ZWQucHVzaChjYik7XG59O1xuXG4vKipcbiAqIEBuYW1lICBvblJlbmRlcmVkXG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXJPZiBUZW1wbGF0ZVxuICogQHN1bW1hcnkgUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhbiBpbnN0YW5jZSBvZiB0aGlzIHRlbXBsYXRlIGlzIGluc2VydGVkIGludG8gdGhlIERPTS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gYmUgYWRkZWQgYXMgYSBjYWxsYmFjay5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBpbXBvcnRGcm9tUGFja2FnZSB0ZW1wbGF0aW5nXG4gKi9cblRlbXBsYXRlLnByb3RvdHlwZS5vblJlbmRlcmVkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2NhbGxiYWNrcy5yZW5kZXJlZC5wdXNoKGNiKTtcbn07XG5cbi8qKlxuICogQG5hbWUgIG9uRGVzdHJveWVkXG4gKiBAaW5zdGFuY2VcbiAqIEBtZW1iZXJPZiBUZW1wbGF0ZVxuICogQHN1bW1hcnkgUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhbiBpbnN0YW5jZSBvZiB0aGlzIHRlbXBsYXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGFuZCBkZXN0cm95ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGJlIGFkZGVkIGFzIGEgY2FsbGJhY2suXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgdGVtcGxhdGluZ1xuICovXG5UZW1wbGF0ZS5wcm90b3R5cGUub25EZXN0cm95ZWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fY2FsbGJhY2tzLmRlc3Ryb3llZC5wdXNoKGNiKTtcbn07XG5cblRlbXBsYXRlLnByb3RvdHlwZS5fZ2V0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKHdoaWNoKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBsZXQgY2FsbGJhY2tzID0gc2VsZlt3aGljaF0gPyBbc2VsZlt3aGljaF1dIDogW107XG4gIC8vIEZpcmUgYWxsIGNhbGxiYWNrcyBhZGRlZCB3aXRoIHRoZSBuZXcgQVBJIChUZW1wbGF0ZS5vblJlbmRlcmVkKCkpXG4gIC8vIGFzIHdlbGwgYXMgdGhlIG9sZC1zdHlsZSBjYWxsYmFjayAoZS5nLiBUZW1wbGF0ZS5yZW5kZXJlZCkgZm9yXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LlxuICBjYWxsYmFja3MgPSBjYWxsYmFja3MuY29uY2F0KHNlbGYuX2NhbGxiYWNrc1t3aGljaF0pO1xuICByZXR1cm4gY2FsbGJhY2tzO1xufTtcblxuY29uc3QgZmlyZUNhbGxiYWNrcyA9IGZ1bmN0aW9uIChjYWxsYmFja3MsIHRlbXBsYXRlKSB7XG4gIFRlbXBsYXRlLl93aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmMoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGVtcGxhdGU7IH0sXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIE4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cblRlbXBsYXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RWaWV3ID0gZnVuY3Rpb24gKGNvbnRlbnRGdW5jLCBlbHNlRnVuYykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgdmlldyA9IEJsYXplLlZpZXcoc2VsZi52aWV3TmFtZSwgc2VsZi5yZW5kZXJGdW5jdGlvbik7XG4gIHZpZXcudGVtcGxhdGUgPSBzZWxmO1xuXG4gIHZpZXcudGVtcGxhdGVDb250ZW50QmxvY2sgPSAoXG4gICAgY29udGVudEZ1bmMgPyBuZXcgVGVtcGxhdGUoJyhjb250ZW50QmxvY2spJywgY29udGVudEZ1bmMpIDogbnVsbCk7XG4gIHZpZXcudGVtcGxhdGVFbHNlQmxvY2sgPSAoXG4gICAgZWxzZUZ1bmMgPyBuZXcgVGVtcGxhdGUoJyhlbHNlQmxvY2spJywgZWxzZUZ1bmMpIDogbnVsbCk7XG5cbiAgaWYgKHNlbGYuX19ldmVudE1hcHMgfHwgdHlwZW9mIHNlbGYuZXZlbnRzID09PSAnb2JqZWN0Jykge1xuICAgIHZpZXcuX29uVmlld1JlbmRlcmVkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh2aWV3LnJlbmRlckNvdW50ICE9PSAxKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIGlmICghIHNlbGYuX19ldmVudE1hcHMubGVuZ3RoICYmIHR5cGVvZiBzZWxmLmV2ZW50cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvLyBQcm92aWRlIGxpbWl0ZWQgYmFjay1jb21wYXQgc3VwcG9ydCBmb3IgYC5ldmVudHMgPSB7Li4ufWBcbiAgICAgICAgLy8gc3ludGF4LiAgUGFzcyBgdGVtcGxhdGUuZXZlbnRzYCB0byB0aGUgb3JpZ2luYWwgYC5ldmVudHMoLi4uKWBcbiAgICAgICAgLy8gZnVuY3Rpb24uICBUaGlzIGNvZGUgbXVzdCBydW4gb25seSBvbmNlIHBlciB0ZW1wbGF0ZSwgaW5cbiAgICAgICAgLy8gb3JkZXIgdG8gbm90IGJpbmQgdGhlIGhhbmRsZXJzIG1vcmUgdGhhbiBvbmNlLCB3aGljaCBpc1xuICAgICAgICAvLyBlbnN1cmVkIGJ5IHRoZSBmYWN0IHRoYXQgd2Ugb25seSBkbyB0aGlzIHdoZW4gYF9fZXZlbnRNYXBzYFxuICAgICAgICAvLyBpcyBmYWxzeSwgYW5kIHdlIGNhdXNlIGl0IHRvIGJlIHNldCBub3cuXG4gICAgICAgIFRlbXBsYXRlLnByb3RvdHlwZS5ldmVudHMuY2FsbChzZWxmLCBzZWxmLmV2ZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX19ldmVudE1hcHMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICBCbGF6ZS5fYWRkRXZlbnRNYXAodmlldywgbSwgdmlldyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpZXcuX3RlbXBsYXRlSW5zdGFuY2UgPSBuZXcgQmxhemUuVGVtcGxhdGVJbnN0YW5jZSh2aWV3KTtcbiAgdmlldy50ZW1wbGF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFVwZGF0ZSBkYXRhLCBmaXJzdE5vZGUsIGFuZCBsYXN0Tm9kZSwgYW5kIHJldHVybiB0aGUgVGVtcGxhdGVJbnN0YW5jZVxuICAgIC8vIG9iamVjdC5cbiAgICBjb25zdCBpbnN0ID0gdmlldy5fdGVtcGxhdGVJbnN0YW5jZTtcblxuICAgIC8qKlxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJPZiBCbGF6ZS5UZW1wbGF0ZUluc3RhbmNlXG4gICAgICogQG5hbWUgIGRhdGFcbiAgICAgKiBAc3VtbWFyeSBUaGUgZGF0YSBjb250ZXh0IG9mIHRoaXMgaW5zdGFuY2UncyBsYXRlc3QgaW52b2NhdGlvbi5cbiAgICAgKiBAbG9jdXMgQ2xpZW50XG4gICAgICovXG4gICAgaW5zdC5kYXRhID0gQmxhemUuZ2V0RGF0YSh2aWV3KTtcblxuICAgIGlmICh2aWV3Ll9kb21yYW5nZSAmJiAhdmlldy5pc0Rlc3Ryb3llZCkge1xuICAgICAgaW5zdC5maXJzdE5vZGUgPSB2aWV3Ll9kb21yYW5nZS5maXJzdE5vZGUoKTtcbiAgICAgIGluc3QubGFzdE5vZGUgPSB2aWV3Ll9kb21yYW5nZS5sYXN0Tm9kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvbiAnY3JlYXRlZCcgb3IgJ2Rlc3Ryb3llZCcgY2FsbGJhY2tzIHdlIGRvbid0IGhhdmUgYSBEb21SYW5nZVxuICAgICAgaW5zdC5maXJzdE5vZGUgPSBudWxsO1xuICAgICAgaW5zdC5sYXN0Tm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBuYW1lICBjcmVhdGVkXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAbWVtYmVyT2YgVGVtcGxhdGVcbiAgICogQHN1bW1hcnkgUHJvdmlkZSBhIGNhbGxiYWNrIHdoZW4gYW4gaW5zdGFuY2Ugb2YgYSB0ZW1wbGF0ZSBpcyBjcmVhdGVkLlxuICAgKiBAbG9jdXMgQ2xpZW50XG4gICAqIEBkZXByZWNhdGVkIGluIDEuMVxuICAgKi9cbiAgLy8gVG8gYXZvaWQgc2l0dWF0aW9ucyB3aGVuIG5ldyBjYWxsYmFja3MgYXJlIGFkZGVkIGluIGJldHdlZW4gdmlld1xuICAvLyBpbnN0YW50aWF0aW9uIGFuZCBldmVudCBiZWluZyBmaXJlZCwgZGVjaWRlIG9uIGFsbCBjYWxsYmFja3MgdG8gZmlyZVxuICAvLyBpbW1lZGlhdGVseSBhbmQgdGhlbiBmaXJlIHRoZW0gb24gdGhlIGV2ZW50LlxuICBjb25zdCBjcmVhdGVkQ2FsbGJhY2tzID0gc2VsZi5fZ2V0Q2FsbGJhY2tzKCdjcmVhdGVkJyk7XG4gIHZpZXcub25WaWV3Q3JlYXRlZChmdW5jdGlvbiAoKSB7XG4gICAgZmlyZUNhbGxiYWNrcyhjcmVhdGVkQ2FsbGJhY2tzLCB2aWV3LnRlbXBsYXRlSW5zdGFuY2UoKSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAbmFtZSAgcmVuZGVyZWRcbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJPZiBUZW1wbGF0ZVxuICAgKiBAc3VtbWFyeSBQcm92aWRlIGEgY2FsbGJhY2sgd2hlbiBhbiBpbnN0YW5jZSBvZiBhIHRlbXBsYXRlIGlzIHJlbmRlcmVkLlxuICAgKiBAbG9jdXMgQ2xpZW50XG4gICAqIEBkZXByZWNhdGVkIGluIDEuMVxuICAgKi9cbiAgY29uc3QgcmVuZGVyZWRDYWxsYmFja3MgPSBzZWxmLl9nZXRDYWxsYmFja3MoJ3JlbmRlcmVkJyk7XG4gIHZpZXcub25WaWV3UmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGZpcmVDYWxsYmFja3MocmVuZGVyZWRDYWxsYmFja3MsIHZpZXcudGVtcGxhdGVJbnN0YW5jZSgpKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBuYW1lICBkZXN0cm95ZWRcbiAgICogQGluc3RhbmNlXG4gICAqIEBtZW1iZXJPZiBUZW1wbGF0ZVxuICAgKiBAc3VtbWFyeSBQcm92aWRlIGEgY2FsbGJhY2sgd2hlbiBhbiBpbnN0YW5jZSBvZiBhIHRlbXBsYXRlIGlzIGRlc3Ryb3llZC5cbiAgICogQGxvY3VzIENsaWVudFxuICAgKiBAZGVwcmVjYXRlZCBpbiAxLjFcbiAgICovXG4gIGNvbnN0IGRlc3Ryb3llZENhbGxiYWNrcyA9IHNlbGYuX2dldENhbGxiYWNrcygnZGVzdHJveWVkJyk7XG4gIHZpZXcub25WaWV3RGVzdHJveWVkKGZ1bmN0aW9uICgpIHtcbiAgICBmaXJlQ2FsbGJhY2tzKGRlc3Ryb3llZENhbGxiYWNrcywgdmlldy50ZW1wbGF0ZUluc3RhbmNlKCkpO1xuICB9KTtcblxuICByZXR1cm4gdmlldztcbn07XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAc3VtbWFyeSBUaGUgY2xhc3MgZm9yIHRlbXBsYXRlIGluc3RhbmNlc1xuICogQHBhcmFtIHtCbGF6ZS5WaWV3fSB2aWV3XG4gKiBAaW5zdGFuY2VOYW1lIHRlbXBsYXRlXG4gKi9cbkJsYXplLlRlbXBsYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAodmlldykge1xuICBpZiAoISAodGhpcyBpbnN0YW5jZW9mIEJsYXplLlRlbXBsYXRlSW5zdGFuY2UpKVxuICAgIC8vIGNhbGxlZCB3aXRob3V0IGBuZXdgXG4gICAgcmV0dXJuIG5ldyBCbGF6ZS5UZW1wbGF0ZUluc3RhbmNlKHZpZXcpO1xuXG4gIGlmICghICh2aWV3IGluc3RhbmNlb2YgQmxhemUuVmlldykpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmlldyByZXF1aXJlZFwiKTtcblxuICB2aWV3Ll90ZW1wbGF0ZUluc3RhbmNlID0gdGhpcztcblxuICAvKipcbiAgICogQG5hbWUgdmlld1xuICAgKiBAbWVtYmVyT2YgQmxhemUuVGVtcGxhdGVJbnN0YW5jZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQHN1bW1hcnkgVGhlIFtWaWV3XSguLi9hcGkvYmxhemUuaHRtbCNCbGF6ZS1WaWV3KSBvYmplY3QgZm9yIHRoaXMgaW52b2NhdGlvbiBvZiB0aGUgdGVtcGxhdGUuXG4gICAqIEBsb2N1cyBDbGllbnRcbiAgICogQHR5cGUge0JsYXplLlZpZXd9XG4gICAqL1xuICB0aGlzLnZpZXcgPSB2aWV3O1xuICB0aGlzLmRhdGEgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAbmFtZSBmaXJzdE5vZGVcbiAgICogQG1lbWJlck9mIEJsYXplLlRlbXBsYXRlSW5zdGFuY2VcbiAgICogQGluc3RhbmNlXG4gICAqIEBzdW1tYXJ5IFRoZSBmaXJzdCB0b3AtbGV2ZWwgRE9NIG5vZGUgaW4gdGhpcyB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAgICogQGxvY3VzIENsaWVudFxuICAgKiBAdHlwZSB7RE9NTm9kZX1cbiAgICovXG4gIHRoaXMuZmlyc3ROb2RlID0gbnVsbDtcblxuICAvKipcbiAgICogQG5hbWUgbGFzdE5vZGVcbiAgICogQG1lbWJlck9mIEJsYXplLlRlbXBsYXRlSW5zdGFuY2VcbiAgICogQGluc3RhbmNlXG4gICAqIEBzdW1tYXJ5IFRoZSBsYXN0IHRvcC1sZXZlbCBET00gbm9kZSBpbiB0aGlzIHRlbXBsYXRlIGluc3RhbmNlLlxuICAgKiBAbG9jdXMgQ2xpZW50XG4gICAqIEB0eXBlIHtET01Ob2RlfVxuICAgKi9cbiAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG5cbiAgLy8gVGhpcyBkZXBlbmRlbmN5IGlzIHVzZWQgdG8gaWRlbnRpZnkgc3RhdGUgdHJhbnNpdGlvbnMgaW5cbiAgLy8gX3N1YnNjcmlwdGlvbkhhbmRsZXMgd2hpY2ggY291bGQgY2F1c2UgdGhlIHJlc3VsdCBvZlxuICAvLyBUZW1wbGF0ZUluc3RhbmNlI3N1YnNjcmlwdGlvbnNSZWFkeSB0byBjaGFuZ2UuIEJhc2ljYWxseSB0aGlzIGlzIHRyaWdnZXJlZFxuICAvLyB3aGVuZXZlciBhIG5ldyBzdWJzY3JpcHRpb24gaGFuZGxlIGlzIGFkZGVkIG9yIHdoZW4gYSBzdWJzY3JpcHRpb24gaGFuZGxlXG4gIC8vIGlzIHJlbW92ZWQgYW5kIHRoZXkgYXJlIG5vdCByZWFkeS5cbiAgdGhpcy5fYWxsU3Vic1JlYWR5RGVwID0gbmV3IFRyYWNrZXIuRGVwZW5kZW5jeSgpO1xuICB0aGlzLl9hbGxTdWJzUmVhZHkgPSBmYWxzZTtcblxuICB0aGlzLl9zdWJzY3JpcHRpb25IYW5kbGVzID0ge307XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IEZpbmQgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgaW4gdGhpcyB0ZW1wbGF0ZSBpbnN0YW5jZSwgYW5kIHJldHVybiB0aGVtIGFzIGEgSlF1ZXJ5IG9iamVjdC5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBUaGUgQ1NTIHNlbGVjdG9yIHRvIG1hdGNoLCBzY29wZWQgdG8gdGhlIHRlbXBsYXRlIGNvbnRlbnRzLlxuICogQHJldHVybnMge0RPTU5vZGVbXX1cbiAqL1xuQmxhemUuVGVtcGxhdGVJbnN0YW5jZS5wcm90b3R5cGUuJCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBjb25zdCB2aWV3ID0gdGhpcy52aWV3O1xuICBpZiAoISB2aWV3Ll9kb21yYW5nZSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1c2UgJCBvbiB0ZW1wbGF0ZSBpbnN0YW5jZSB3aXRoIG5vIERPTVwiKTtcbiAgcmV0dXJuIHZpZXcuX2RvbXJhbmdlLiQoc2VsZWN0b3IpO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBGaW5kIGFsbCBlbGVtZW50cyBtYXRjaGluZyBgc2VsZWN0b3JgIGluIHRoaXMgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgVGhlIENTUyBzZWxlY3RvciB0byBtYXRjaCwgc2NvcGVkIHRvIHRoZSB0ZW1wbGF0ZSBjb250ZW50cy5cbiAqIEByZXR1cm5zIHtET01FbGVtZW50W119XG4gKi9cbkJsYXplLlRlbXBsYXRlSW5zdGFuY2UucHJvdG90eXBlLmZpbmRBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuJChzZWxlY3RvcikpO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBGaW5kIG9uZSBlbGVtZW50IG1hdGNoaW5nIGBzZWxlY3RvcmAgaW4gdGhpcyB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBUaGUgQ1NTIHNlbGVjdG9yIHRvIG1hdGNoLCBzY29wZWQgdG8gdGhlIHRlbXBsYXRlIGNvbnRlbnRzLlxuICogQHJldHVybnMge0RPTUVsZW1lbnR9XG4gKi9cbkJsYXplLlRlbXBsYXRlSW5zdGFuY2UucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gdGhpcy4kKHNlbGVjdG9yKTtcbiAgcmV0dXJuIHJlc3VsdFswXSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBBIHZlcnNpb24gb2YgW1RyYWNrZXIuYXV0b3J1bl0oaHR0cHM6Ly9kb2NzLm1ldGVvci5jb20vYXBpL3RyYWNrZXIuaHRtbCNUcmFja2VyLWF1dG9ydW4pIHRoYXQgaXMgc3RvcHBlZCB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyBkZXN0cm95ZWQuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBydW5GdW5jIFRoZSBmdW5jdGlvbiB0byBydW4uIEl0IHJlY2VpdmVzIG9uZSBhcmd1bWVudDogYSBUcmFja2VyLkNvbXB1dGF0aW9uIG9iamVjdC5cbiAqL1xuQmxhemUuVGVtcGxhdGVJbnN0YW5jZS5wcm90b3R5cGUuYXV0b3J1biA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLnZpZXcuYXV0b3J1bihmKTtcbn07XG5cbi8qKlxuICogQHN1bW1hcnkgQSB2ZXJzaW9uIG9mIFtNZXRlb3Iuc3Vic2NyaWJlXShodHRwczovL2RvY3MubWV0ZW9yLmNvbS9hcGkvcHVic3ViLmh0bWwjTWV0ZW9yLXN1YnNjcmliZSkgdGhhdCBpcyBzdG9wcGVkXG4gKiB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyBkZXN0cm95ZWQuXG4gKiBAcmV0dXJuIHtTdWJzY3JpcHRpb25IYW5kbGV9IFRoZSBzdWJzY3JpcHRpb24gaGFuZGxlIHRvIHRoZSBuZXdseSBtYWRlXG4gKiBzdWJzY3JpcHRpb24uIENhbGwgYGhhbmRsZS5zdG9wKClgIHRvIG1hbnVhbGx5IHN0b3AgdGhlIHN1YnNjcmlwdGlvbiwgb3JcbiAqIGBoYW5kbGUucmVhZHkoKWAgdG8gZmluZCBvdXQgaWYgdGhpcyBwYXJ0aWN1bGFyIHN1YnNjcmlwdGlvbiBoYXMgbG9hZGVkIGFsbFxuICogb2YgaXRzIGluaXRhbCBkYXRhLlxuICogQGxvY3VzIENsaWVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc3Vic2NyaXB0aW9uLiAgTWF0Y2hlcyB0aGUgbmFtZSBvZiB0aGVcbiAqIHNlcnZlcidzIGBwdWJsaXNoKClgIGNhbGwuXG4gKiBAcGFyYW0ge0FueX0gW2FyZzEsYXJnMi4uLl0gT3B0aW9uYWwgYXJndW1lbnRzIHBhc3NlZCB0byBwdWJsaXNoZXIgZnVuY3Rpb25cbiAqIG9uIHNlcnZlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBbb3B0aW9uc10gSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgaW5zdGVhZCBvZiBhblxuICogb2JqZWN0LCBpdCBpcyBpbnRlcnByZXRlZCBhcyBhbiBgb25SZWFkeWAgY2FsbGJhY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vblJlYWR5XSBQYXNzZWQgdG8gW2BNZXRlb3Iuc3Vic2NyaWJlYF0oaHR0cHM6Ly9kb2NzLm1ldGVvci5jb20vYXBpL3B1YnN1Yi5odG1sI01ldGVvci1zdWJzY3JpYmUpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25TdG9wXSBQYXNzZWQgdG8gW2BNZXRlb3Iuc3Vic2NyaWJlYF0oaHR0cHM6Ly9kb2NzLm1ldGVvci5jb20vYXBpL3B1YnN1Yi5odG1sI01ldGVvci1zdWJzY3JpYmUpLlxuICogQHBhcmFtIHtERFAuQ29ubmVjdGlvbn0gW29wdGlvbnMuY29ubmVjdGlvbl0gVGhlIGNvbm5lY3Rpb24gb24gd2hpY2ggdG8gbWFrZSB0aGVcbiAqIHN1YnNjcmlwdGlvbi5cbiAqL1xuQmxhemUuVGVtcGxhdGVJbnN0YW5jZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgY29uc3Qgc3ViSGFuZGxlcyA9IHNlbGYuX3N1YnNjcmlwdGlvbkhhbmRsZXM7XG5cbiAgLy8gRHVwbGljYXRlIGxvZ2ljIGZyb20gTWV0ZW9yLnN1YnNjcmliZVxuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBjb25zdCBsYXN0UGFyYW0gPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAvLyBNYXRjaCBwYXR0ZXJuIHRvIGNoZWNrIGlmIHRoZSBsYXN0IGFyZyBpcyBhbiBvcHRpb25zIGFyZ3VtZW50XG4gICAgY29uc3QgbGFzdFBhcmFtT3B0aW9uc1BhdHRlcm4gPSB7XG4gICAgICBvblJlYWR5OiBNYXRjaC5PcHRpb25hbChGdW5jdGlvbiksXG4gICAgICAvLyBYWFggQ09NUEFUIFdJVEggMS4wLjMuMSBvbkVycm9yIHVzZWQgdG8gZXhpc3QsIGJ1dCBub3cgd2UgdXNlXG4gICAgICAvLyBvblN0b3Agd2l0aCBhbiBlcnJvciBjYWxsYmFjayBpbnN0ZWFkLlxuICAgICAgb25FcnJvcjogTWF0Y2guT3B0aW9uYWwoRnVuY3Rpb24pLFxuICAgICAgb25TdG9wOiBNYXRjaC5PcHRpb25hbChGdW5jdGlvbiksXG4gICAgICBjb25uZWN0aW9uOiBNYXRjaC5PcHRpb25hbChNYXRjaC5BbnkpXG4gICAgfTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGxhc3RQYXJhbSkpIHtcbiAgICAgIG9wdGlvbnMub25SZWFkeSA9IGFyZ3MucG9wKCk7XG4gICAgfSBlbHNlIGlmIChsYXN0UGFyYW0gJiYgISBpc0VtcHR5KGxhc3RQYXJhbSkgJiYgTWF0Y2gudGVzdChsYXN0UGFyYW0sIGxhc3RQYXJhbU9wdGlvbnNQYXR0ZXJuKSkge1xuICAgICAgb3B0aW9ucyA9IGFyZ3MucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHN1YkhhbmRsZTtcbiAgY29uc3Qgb2xkU3RvcHBlZCA9IG9wdGlvbnMub25TdG9wO1xuICBvcHRpb25zLm9uU3RvcCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8vIFdoZW4gdGhlIHN1YnNjcmlwdGlvbiBpcyBzdG9wcGVkLCByZW1vdmUgaXQgZnJvbSB0aGUgc2V0IG9mIHRyYWNrZWRcbiAgICAvLyBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHRoaXMgbGlzdCBncm93aW5nIHdpdGhvdXQgYm91bmRcbiAgICBkZWxldGUgc3ViSGFuZGxlc1tzdWJIYW5kbGUuc3Vic2NyaXB0aW9uSWRdO1xuXG4gICAgLy8gUmVtb3ZpbmcgYSBzdWJzY3JpcHRpb24gY2FuIG9ubHkgY2hhbmdlIHRoZSByZXN1bHQgb2Ygc3Vic2NyaXB0aW9uc1JlYWR5XG4gICAgLy8gaWYgd2UgYXJlIG5vdCByZWFkeSAodGhhdCBzdWJzY3JpcHRpb24gY291bGQgYmUgdGhlIG9uZSBibG9ja2luZyB1cyBiZWluZ1xuICAgIC8vIHJlYWR5KS5cbiAgICBpZiAoISBzZWxmLl9hbGxTdWJzUmVhZHkpIHtcbiAgICAgIHNlbGYuX2FsbFN1YnNSZWFkeURlcC5jaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFN0b3BwZWQpIHtcbiAgICAgIG9sZFN0b3BwZWQoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IG9uUmVhZHksIG9uRXJyb3IsIG9uU3RvcCwgY29ubmVjdGlvbiB9ID0gb3B0aW9ucztcbiAgY29uc3QgY2FsbGJhY2tzID0geyBvblJlYWR5LCBvbkVycm9yLCBvblN0b3AgfTtcblxuICAvLyBUaGUgY2FsbGJhY2tzIGFyZSBwYXNzZWQgYXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgYXJndW1lbnRzIGFycmF5IHBhc3NlZCB0b1xuICAvLyBWaWV3I3N1YnNjcmliZVxuICBhcmdzLnB1c2goY2FsbGJhY2tzKTtcblxuICAvLyBWaWV3I3N1YnNjcmliZSB0YWtlcyB0aGUgY29ubmVjdGlvbiBhcyBvbmUgb2YgdGhlIG9wdGlvbnMgaW4gdGhlIGxhc3RcbiAgLy8gYXJndW1lbnRcbiAgc3ViSGFuZGxlID0gc2VsZi52aWV3LnN1YnNjcmliZS5jYWxsKHNlbGYudmlldywgYXJncywge1xuICAgIGNvbm5lY3Rpb246IGNvbm5lY3Rpb25cbiAgfSk7XG5cbiAgaWYgKCFoYXMoc3ViSGFuZGxlcywgc3ViSGFuZGxlLnN1YnNjcmlwdGlvbklkKSkge1xuICAgIHN1YkhhbmRsZXNbc3ViSGFuZGxlLnN1YnNjcmlwdGlvbklkXSA9IHN1YkhhbmRsZTtcblxuICAgIC8vIEFkZGluZyBhIG5ldyBzdWJzY3JpcHRpb24gd2lsbCBhbHdheXMgY2F1c2UgdXMgdG8gdHJhbnNpdGlvbiBmcm9tIHJlYWR5XG4gICAgLy8gdG8gbm90IHJlYWR5LCBidXQgaWYgd2UgYXJlIGFscmVhZHkgbm90IHJlYWR5IHRoZW4gdGhpcyBjYW4ndCBtYWtlIHVzXG4gICAgLy8gcmVhZHkuXG4gICAgaWYgKHNlbGYuX2FsbFN1YnNSZWFkeSkge1xuICAgICAgc2VsZi5fYWxsU3Vic1JlYWR5RGVwLmNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViSGFuZGxlO1xufTtcblxuLyoqXG4gKiBAc3VtbWFyeSBBIHJlYWN0aXZlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIHdoZW4gYWxsIG9mIHRoZSBzdWJzY3JpcHRpb25zXG4gKiBjYWxsZWQgd2l0aCBbdGhpcy5zdWJzY3JpYmVdKCNUZW1wbGF0ZUluc3RhbmNlLXN1YnNjcmliZSkgYXJlIHJlYWR5LlxuICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBhbGwgc3Vic2NyaXB0aW9ucyBvbiB0aGlzIHRlbXBsYXRlIGluc3RhbmNlIGFyZVxuICogcmVhZHkuXG4gKi9cbkJsYXplLlRlbXBsYXRlSW5zdGFuY2UucHJvdG90eXBlLnN1YnNjcmlwdGlvbnNSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWxsU3Vic1JlYWR5RGVwLmRlcGVuZCgpO1xuICB0aGlzLl9hbGxTdWJzUmVhZHkgPSBPYmplY3QudmFsdWVzKHRoaXMuX3N1YnNjcmlwdGlvbkhhbmRsZXMpLmV2ZXJ5KChoYW5kbGUpID0+IHtcbiAgICByZXR1cm4gaGFuZGxlLnJlYWR5KCk7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzLl9hbGxTdWJzUmVhZHk7XG59O1xuXG4vKipcbiAqIEBzdW1tYXJ5IFNwZWNpZnkgdGVtcGxhdGUgaGVscGVycyBhdmFpbGFibGUgdG8gdGhpcyB0ZW1wbGF0ZS5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWxwZXJzIERpY3Rpb25hcnkgb2YgaGVscGVyIGZ1bmN0aW9ucyBieSBuYW1lLlxuICogQGltcG9ydEZyb21QYWNrYWdlIHRlbXBsYXRpbmdcbiAqL1xuVGVtcGxhdGUucHJvdG90eXBlLmhlbHBlcnMgPSBmdW5jdGlvbiAoZGljdCkge1xuICBpZiAoIWlzT2JqZWN0KGRpY3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSGVscGVycyBkaWN0aW9uYXJ5IGhhcyB0byBiZSBhbiBvYmplY3RcIik7XG4gIH1cblxuICBmb3IgKGxldCBrIGluIGRpY3QpIHRoaXMuX19oZWxwZXJzLnNldChrLCBkaWN0W2tdKTtcbn07XG5cbmNvbnN0IGNhblVzZUdldHRlcnMgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInNlbGZcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9iajsgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqLnNlbGYgPT09IG9iajtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG5pZiAoY2FuVXNlR2V0dGVycykge1xuICAvLyBMaWtlIEJsYXplLmN1cnJlbnRWaWV3IGJ1dCBmb3IgdGhlIHRlbXBsYXRlIGluc3RhbmNlLiBBIGZ1bmN0aW9uXG4gIC8vIHJhdGhlciB0aGFuIGEgdmFsdWUgc28gdGhhdCBub3QgYWxsIGhlbHBlcnMgYXJlIGltcGxpY2l0bHkgZGVwZW5kZW50XG4gIC8vIG9uIHRoZSBjdXJyZW50IHRlbXBsYXRlIGluc3RhbmNlJ3MgYGRhdGFgIHByb3BlcnR5LCB3aGljaCB3b3VsZCBtYWtlXG4gIC8vIHRoZW0gZGVwZW5kZW50IG9uIHRoZSBkYXRhIGNvbnRleHQgb2YgdGhlIHRlbXBsYXRlIGluY2x1c2lvbi5cbiAgbGV0IGN1cnJlbnRUZW1wbGF0ZUluc3RhbmNlRnVuYyA9IG51bGw7XG5cbiAgLy8gSWYgZ2V0dGVycyBhcmUgc3VwcG9ydGVkLCBkZWZpbmUgdGhpcyBwcm9wZXJ0eSB3aXRoIGEgZ2V0dGVyIGZ1bmN0aW9uXG4gIC8vIHRvIG1ha2UgaXQgZWZmZWN0aXZlbHkgcmVhZC1vbmx5LCBhbmQgdG8gd29yayBhcm91bmQgdGhpcyBiaXphcnJlIEpTQ1xuICAvLyBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbWV0ZW9yL2lzc3Vlcy85OTI2XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUZW1wbGF0ZSwgXCJfY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VGVtcGxhdGVJbnN0YW5jZUZ1bmM7XG4gICAgfVxuICB9KTtcblxuICBUZW1wbGF0ZS5fd2l0aFRlbXBsYXRlSW5zdGFuY2VGdW5jID0gZnVuY3Rpb24gKHRlbXBsYXRlSW5zdGFuY2VGdW5jLCBmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBmdW5jdGlvbiwgZ290OiBcIiArIGZ1bmMpO1xuICAgIH1cbiAgICBjb25zdCBvbGRUbXBsSW5zdGFuY2VGdW5jID0gY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jO1xuICAgIHRyeSB7XG4gICAgICBjdXJyZW50VGVtcGxhdGVJbnN0YW5jZUZ1bmMgPSB0ZW1wbGF0ZUluc3RhbmNlRnVuYztcbiAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRUZW1wbGF0ZUluc3RhbmNlRnVuYyA9IG9sZFRtcGxJbnN0YW5jZUZ1bmM7XG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gSWYgZ2V0dGVycyBhcmUgbm90IHN1cHBvcnRlZCwganVzdCB1c2UgYSBub3JtYWwgcHJvcGVydHkuXG4gIFRlbXBsYXRlLl9jdXJyZW50VGVtcGxhdGVJbnN0YW5jZUZ1bmMgPSBudWxsO1xuXG4gIFRlbXBsYXRlLl93aXRoVGVtcGxhdGVJbnN0YW5jZUZ1bmMgPSBmdW5jdGlvbiAodGVtcGxhdGVJbnN0YW5jZUZ1bmMsIGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGZ1bmN0aW9uLCBnb3Q6IFwiICsgZnVuYyk7XG4gICAgfVxuICAgIGNvbnN0IG9sZFRtcGxJbnN0YW5jZUZ1bmMgPSBUZW1wbGF0ZS5fY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jO1xuICAgIHRyeSB7XG4gICAgICBUZW1wbGF0ZS5fY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jID0gdGVtcGxhdGVJbnN0YW5jZUZ1bmM7XG4gICAgICByZXR1cm4gZnVuYygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBUZW1wbGF0ZS5fY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jID0gb2xkVG1wbEluc3RhbmNlRnVuYztcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQHN1bW1hcnkgU3BlY2lmeSBldmVudCBoYW5kbGVycyBmb3IgdGhpcyB0ZW1wbGF0ZS5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEBwYXJhbSB7RXZlbnRNYXB9IGV2ZW50TWFwIEV2ZW50IGhhbmRsZXJzIHRvIGFzc29jaWF0ZSB3aXRoIHRoaXMgdGVtcGxhdGUuXG4gKiBAaW1wb3J0RnJvbVBhY2thZ2UgdGVtcGxhdGluZ1xuICovXG5UZW1wbGF0ZS5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKGV2ZW50TWFwKSB7XG4gIGlmICghaXNPYmplY3QoZXZlbnRNYXApKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgbWFwIGhhcyB0byBiZSBhbiBvYmplY3RcIik7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXM7XG4gIGxldCBldmVudE1hcDIgPSB7fTtcbiAgZm9yIChsZXQgayBpbiBldmVudE1hcCkge1xuICAgIGV2ZW50TWFwMltrXSA9IChmdW5jdGlvbiAoaywgdikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCAvKiwgLi4uKi8pIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXM7IC8vIHBhc3NlZCBieSBFdmVudEF1Z21lbnRlclxuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgY3VycmVudCBjb21wdXRhdGlvbiB0byBhdm9pZCBjcmVhdGluZyB1bm5lY2Vzc2FyeVxuICAgICAgICAvLyBhbmQgdW5leHBlY3RlZCByZWFjdGl2ZSBkZXBlbmRlbmNpZXMgd2l0aCBUZW1wbGF0ZXMgZGF0YVxuICAgICAgICAvLyBvciBhbnkgb3RoZXIgcmVhY3RpdmUgZGVwZW5kZW5jaWVzIGRlZmluZWQgaW4gZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgcmV0dXJuIFRyYWNrZXIubm9ucmVhY3RpdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBkYXRhID0gQmxhemUuZ2V0RGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSBkYXRhID0ge307XG4gICAgICAgICAgY29uc3QgdG1wbEluc3RhbmNlRnVuYyA9IEJsYXplLl9iaW5kKHZpZXcudGVtcGxhdGVJbnN0YW5jZSwgdmlldyk7XG4gICAgICAgICAgYXJncy5zcGxpY2UoMSwgMCwgdG1wbEluc3RhbmNlRnVuYygpKTtcbiAgICAgICAgICByZXR1cm4gVGVtcGxhdGUuX3dpdGhUZW1wbGF0ZUluc3RhbmNlRnVuYyh0bXBsSW5zdGFuY2VGdW5jLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdi5hcHBseShkYXRhLCBhcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKGssIGV2ZW50TWFwW2tdKTtcbiAgfVxuXG4gIHRlbXBsYXRlLl9fZXZlbnRNYXBzLnB1c2goZXZlbnRNYXAyKTtcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbmFtZSBpbnN0YW5jZVxuICogQG1lbWJlck9mIFRlbXBsYXRlXG4gKiBAc3VtbWFyeSBUaGUgW3RlbXBsYXRlIGluc3RhbmNlXSgjVGVtcGxhdGUtaW5zdGFuY2VzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHRlbXBsYXRlIGhlbHBlciwgZXZlbnQgaGFuZGxlciwgY2FsbGJhY2ssIG9yIGF1dG9ydW4uICBJZiB0aGVyZSBpc24ndCBvbmUsIGBudWxsYC5cbiAqIEBsb2N1cyBDbGllbnRcbiAqIEByZXR1cm5zIHtCbGF6ZS5UZW1wbGF0ZUluc3RhbmNlfVxuICogQGltcG9ydEZyb21QYWNrYWdlIHRlbXBsYXRpbmdcbiAqL1xuVGVtcGxhdGUuaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBUZW1wbGF0ZS5fY3VycmVudFRlbXBsYXRlSW5zdGFuY2VGdW5jXG4gICAgJiYgVGVtcGxhdGUuX2N1cnJlbnRUZW1wbGF0ZUluc3RhbmNlRnVuYygpO1xufTtcblxuLy8gTm90ZTogVGVtcGxhdGUuY3VycmVudERhdGEoKSBpcyBkb2N1bWVudGVkIHRvIHRha2UgemVybyBhcmd1bWVudHMsXG4vLyB3aGlsZSBCbGF6ZS5nZXREYXRhIHRha2VzIHVwIHRvIG9uZS5cblxuLyoqXG4gKiBAc3VtbWFyeVxuICpcbiAqIC0gSW5zaWRlIGFuIGBvbkNyZWF0ZWRgLCBgb25SZW5kZXJlZGAsIG9yIGBvbkRlc3Ryb3llZGAgY2FsbGJhY2ssIHJldHVybnNcbiAqIHRoZSBkYXRhIGNvbnRleHQgb2YgdGhlIHRlbXBsYXRlLlxuICogLSBJbnNpZGUgYW4gZXZlbnQgaGFuZGxlciwgcmV0dXJucyB0aGUgZGF0YSBjb250ZXh0IG9mIHRoZSB0ZW1wbGF0ZSBvbiB3aGljaFxuICogdGhpcyBldmVudCBoYW5kbGVyIHdhcyBkZWZpbmVkLlxuICogLSBJbnNpZGUgYSBoZWxwZXIsIHJldHVybnMgdGhlIGRhdGEgY29udGV4dCBvZiB0aGUgRE9NIG5vZGUgd2hlcmUgdGhlIGhlbHBlclxuICogd2FzIHVzZWQuXG4gKlxuICogRXN0YWJsaXNoZXMgYSByZWFjdGl2ZSBkZXBlbmRlbmN5IG9uIHRoZSByZXN1bHQuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAZnVuY3Rpb25cbiAqIEBpbXBvcnRGcm9tUGFja2FnZSB0ZW1wbGF0aW5nXG4gKi9cblRlbXBsYXRlLmN1cnJlbnREYXRhID0gQmxhemUuZ2V0RGF0YTtcblxuLyoqXG4gKiBAc3VtbWFyeSBBY2Nlc3NlcyBvdGhlciBkYXRhIGNvbnRleHRzIHRoYXQgZW5jbG9zZSB0aGUgY3VycmVudCBkYXRhIGNvbnRleHQuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gW251bUxldmVsc10gVGhlIG51bWJlciBvZiBsZXZlbHMgYmV5b25kIHRoZSBjdXJyZW50IGRhdGEgY29udGV4dCB0byBsb29rLiBEZWZhdWx0cyB0byAxLlxuICogQGltcG9ydEZyb21QYWNrYWdlIHRlbXBsYXRpbmdcbiAqL1xuVGVtcGxhdGUucGFyZW50RGF0YSA9IEJsYXplLl9wYXJlbnREYXRhO1xuXG4vKipcbiAqIEBzdW1tYXJ5IERlZmluZXMgYSBbaGVscGVyIGZ1bmN0aW9uXSgjVGVtcGxhdGUtaGVscGVycykgd2hpY2ggY2FuIGJlIHVzZWQgZnJvbSBhbGwgdGVtcGxhdGVzLlxuICogQGxvY3VzIENsaWVudFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaGVscGVyIGZ1bmN0aW9uIHlvdSBhcmUgZGVmaW5pbmcuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbiBUaGUgaGVscGVyIGZ1bmN0aW9uIGl0c2VsZi5cbiAqIEBpbXBvcnRGcm9tUGFja2FnZSB0ZW1wbGF0aW5nXG4gKi9cblRlbXBsYXRlLnJlZ2lzdGVySGVscGVyID0gQmxhemUucmVnaXN0ZXJIZWxwZXI7XG5cbi8qKlxuICogQHN1bW1hcnkgUmVtb3ZlcyBhIGdsb2JhbCBbaGVscGVyIGZ1bmN0aW9uXSgjVGVtcGxhdGUtaGVscGVycykuXG4gKiBAbG9jdXMgQ2xpZW50XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBoZWxwZXIgZnVuY3Rpb24geW91IGFyZSBkZWZpbmluZy5cbiAqIEBpbXBvcnRGcm9tUGFja2FnZSB0ZW1wbGF0aW5nXG4gKi9cblRlbXBsYXRlLmRlcmVnaXN0ZXJIZWxwZXIgPSBCbGF6ZS5kZXJlZ2lzdGVySGVscGVyO1xuIiwiVUkgPSBCbGF6ZTtcblxuQmxhemUuUmVhY3RpdmVWYXIgPSBSZWFjdGl2ZVZhcjtcblVJLl90ZW1wbGF0ZUluc3RhbmNlID0gQmxhemUuVGVtcGxhdGUuaW5zdGFuY2U7XG5cbkhhbmRsZWJhcnMgPSB7fTtcbkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIgPSBCbGF6ZS5yZWdpc3RlckhlbHBlcjtcblxuSGFuZGxlYmFycy5fZXNjYXBlID0gQmxhemUuX2VzY2FwZTtcblxuLy8gUmV0dXJuIHRoZXNlIGZyb20ge3suLi59fSBoZWxwZXJzIHRvIGFjaGlldmUgdGhlIHNhbWUgYXMgcmV0dXJuaW5nXG4vLyBzdHJpbmdzIGZyb20ge3t7Li4ufX19IGhlbHBlcnNcbkhhbmRsZWJhcnMuU2FmZVN0cmluZyA9IGZ1bmN0aW9uKHN0cmluZykge1xuICB0aGlzLnN0cmluZyA9IHN0cmluZztcbn07XG5IYW5kbGViYXJzLlNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZy50b1N0cmluZygpO1xufTtcbiJdfQ==
