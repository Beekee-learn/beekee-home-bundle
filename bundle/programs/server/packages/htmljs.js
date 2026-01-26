(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var HTML;

var require = meteorInstall({"node_modules":{"meteor":{"htmljs":{"preamble.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/htmljs/preamble.js                                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  HTML: () => HTML
});
let HTMLTags, Tag, Attrs, getTag, ensureTag, isTagEnsured, getSymbolName, knownHTMLElementNames, knownSVGElementNames, knownElementNames, voidElementNames, isKnownElement, isKnownSVGElement, isVoidElement, CharRef, Comment, Raw, isArray, isConstructedObject, isNully, isValidAttributeName, flattenAttributes;
module.link("./html", {
  HTMLTags(v) {
    HTMLTags = v;
  },
  Tag(v) {
    Tag = v;
  },
  Attrs(v) {
    Attrs = v;
  },
  getTag(v) {
    getTag = v;
  },
  ensureTag(v) {
    ensureTag = v;
  },
  isTagEnsured(v) {
    isTagEnsured = v;
  },
  getSymbolName(v) {
    getSymbolName = v;
  },
  knownHTMLElementNames(v) {
    knownHTMLElementNames = v;
  },
  knownSVGElementNames(v) {
    knownSVGElementNames = v;
  },
  knownElementNames(v) {
    knownElementNames = v;
  },
  voidElementNames(v) {
    voidElementNames = v;
  },
  isKnownElement(v) {
    isKnownElement = v;
  },
  isKnownSVGElement(v) {
    isKnownSVGElement = v;
  },
  isVoidElement(v) {
    isVoidElement = v;
  },
  CharRef(v) {
    CharRef = v;
  },
  Comment(v) {
    Comment = v;
  },
  Raw(v) {
    Raw = v;
  },
  isArray(v) {
    isArray = v;
  },
  isConstructedObject(v) {
    isConstructedObject = v;
  },
  isNully(v) {
    isNully = v;
  },
  isValidAttributeName(v) {
    isValidAttributeName = v;
  },
  flattenAttributes(v) {
    flattenAttributes = v;
  }
}, 0);
let Visitor, TransformingVisitor, ToHTMLVisitor, ToTextVisitor, toHTML, TEXTMODE, toText;
module.link("./visitors", {
  Visitor(v) {
    Visitor = v;
  },
  TransformingVisitor(v) {
    TransformingVisitor = v;
  },
  ToHTMLVisitor(v) {
    ToHTMLVisitor = v;
  },
  ToTextVisitor(v) {
    ToTextVisitor = v;
  },
  toHTML(v) {
    toHTML = v;
  },
  TEXTMODE(v) {
    TEXTMODE = v;
  },
  toText(v) {
    toText = v;
  }
}, 1);
const HTML = Object.assign(HTMLTags, {
  Tag,
  Attrs,
  getTag,
  ensureTag,
  isTagEnsured,
  getSymbolName,
  knownHTMLElementNames,
  knownSVGElementNames,
  knownElementNames,
  voidElementNames,
  isKnownElement,
  isKnownSVGElement,
  isVoidElement,
  CharRef,
  Comment,
  Raw,
  isArray,
  isConstructedObject,
  isNully,
  isValidAttributeName,
  flattenAttributes,
  toHTML,
  TEXTMODE,
  toText,
  Visitor,
  TransformingVisitor,
  ToHTMLVisitor,
  ToTextVisitor
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"html.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/htmljs/html.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Tag: () => Tag,
  Attrs: () => Attrs,
  HTMLTags: () => HTMLTags,
  getTag: () => getTag,
  ensureTag: () => ensureTag,
  isTagEnsured: () => isTagEnsured,
  getSymbolName: () => getSymbolName,
  knownHTMLElementNames: () => knownHTMLElementNames,
  knownSVGElementNames: () => knownSVGElementNames,
  knownElementNames: () => knownElementNames,
  voidElementNames: () => voidElementNames,
  isKnownElement: () => isKnownElement,
  isKnownSVGElement: () => isKnownSVGElement,
  isVoidElement: () => isVoidElement,
  CharRef: () => CharRef,
  Comment: () => Comment,
  Raw: () => Raw,
  isArray: () => isArray,
  isConstructedObject: () => isConstructedObject,
  isNully: () => isNully,
  isValidAttributeName: () => isValidAttributeName,
  flattenAttributes: () => flattenAttributes
});
const Tag = function () {};
Tag.prototype.tagName = ''; // this will be set per Tag subclass
Tag.prototype.attrs = null;
Tag.prototype.children = Object.freeze ? Object.freeze([]) : [];
Tag.prototype.htmljsType = Tag.htmljsType = ['Tag'];

// Given "p" create the function `HTML.P`.
var makeTagConstructor = function (tagName) {
  // Tag is the per-tagName constructor of a HTML.Tag subclass
  var HTMLTag = function () {
    // Work with or without `new`.  If not called with `new`,
    // perform instantiation by recursively calling this constructor.
    // We can't pass varargs, so pass no args.
    var instance = this instanceof Tag ? this : new HTMLTag();
    var i = 0;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var attrs = args.length && args[0];
    if (attrs && typeof attrs === 'object') {
      // Treat vanilla JS object as an attributes dictionary.
      if (!isConstructedObject(attrs)) {
        instance.attrs = attrs;
        i++;
      } else if (attrs instanceof Attrs) {
        var array = attrs.value;
        if (array.length === 1) {
          instance.attrs = array[0];
        } else if (array.length > 1) {
          instance.attrs = array;
        }
        i++;
      }
    }

    // If no children, don't create an array at all, use the prototype's
    // (frozen, empty) array.  This way we don't create an empty array
    // every time someone creates a tag without `new` and this constructor
    // calls itself with no arguments (above).
    if (i < args.length) instance.children = args.slice(i);
    return instance;
  };
  HTMLTag.prototype = new Tag();
  HTMLTag.prototype.constructor = HTMLTag;
  HTMLTag.prototype.tagName = tagName;
  return HTMLTag;
};

// Not an HTMLjs node, but a wrapper to pass multiple attrs dictionaries
// to a tag (for the purpose of implementing dynamic attributes).
function Attrs() {
  // Work with or without `new`.  If not called with `new`,
  // perform instantiation by recursively calling this constructor.
  // We can't pass varargs, so pass no args.
  var instance = this instanceof Attrs ? this : new Attrs();
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  instance.value = args;
  return instance;
}
const HTMLTags = {};
function getTag(tagName) {
  var symbolName = getSymbolName(tagName);
  if (symbolName === tagName)
    // all-caps tagName
    throw new Error("Use the lowercase or camelCase form of '" + tagName + "' here");
  if (!HTMLTags[symbolName]) HTMLTags[symbolName] = makeTagConstructor(tagName);
  return HTMLTags[symbolName];
}
function ensureTag(tagName) {
  getTag(tagName); // don't return it
}
function isTagEnsured(tagName) {
  return isKnownElement(tagName);
}
function getSymbolName(tagName) {
  // "foo-bar" -> "FOO_BAR"
  return tagName.toUpperCase().replace(/-/g, '_');
}
const knownHTMLElementNames = 'a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command data datagrid datalist dd del details dfn dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins isindex kbd keygen label legend li link main map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr'.split(' ');
const knownSVGElementNames = 'altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform circle clipPath color-profile cursor defs desc ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view vkern'.split(' ');
const knownElementNames = knownHTMLElementNames.concat(knownSVGElementNames);
const voidElementNames = 'area base br col command embed hr img input keygen link meta param source track wbr'.split(' ');
var voidElementSet = new Set(voidElementNames);
var knownElementSet = new Set(knownElementNames);
var knownSVGElementSet = new Set(knownSVGElementNames);
function isKnownElement(tagName) {
  return knownElementSet.has(tagName);
}
function isKnownSVGElement(tagName) {
  return knownSVGElementSet.has(tagName);
}
function isVoidElement(tagName) {
  return voidElementSet.has(tagName);
}
// Ensure tags for all known elements
knownElementNames.forEach(ensureTag);
function CharRef(attrs) {
  if (!(this instanceof CharRef))
    // called without `new`
    return new CharRef(attrs);
  if (!(attrs && attrs.html && attrs.str)) throw new Error("HTML.CharRef must be constructed with ({html:..., str:...})");
  this.html = attrs.html;
  this.str = attrs.str;
}
CharRef.prototype.htmljsType = CharRef.htmljsType = ['CharRef'];
function Comment(value) {
  if (!(this instanceof Comment))
    // called without `new`
    return new Comment(value);
  if (typeof value !== 'string') throw new Error('HTML.Comment must be constructed with a string');
  this.value = value;
  // Kill illegal hyphens in comment value (no way to escape them in HTML)
  this.sanitizedValue = value.replace(/^-|--+|-$/g, '');
}
Comment.prototype.htmljsType = Comment.htmljsType = ['Comment'];
function Raw(value) {
  if (!(this instanceof Raw))
    // called without `new`
    return new Raw(value);
  if (typeof value !== 'string') throw new Error('HTML.Raw must be constructed with a string');
  this.value = value;
}
Raw.prototype.htmljsType = Raw.htmljsType = ['Raw'];
function isArray(x) {
  return x instanceof Array || Array.isArray(x);
}
function isConstructedObject(x) {
  // Figure out if `x` is "an instance of some class" or just a plain
  // object literal.  It correctly treats an object literal like
  // `{ constructor: ... }` as an object literal.  It won't detect
  // instances of classes that lack a `constructor` property (e.g.
  // if you assign to a prototype when setting up the class as in:
  // `Foo = function () { ... }; Foo.prototype = { ... }`, then
  // `(new Foo).constructor` is `Object`, not `Foo`).
  if (!x || typeof x !== 'object') return false;
  // Is this a plain object?
  let plain = false;
  if (Object.getPrototypeOf(x) === null) {
    plain = true;
  } else {
    let proto = x;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    plain = Object.getPrototypeOf(x) === proto;
  }
  return !plain && typeof x.constructor === 'function' && x instanceof x.constructor;
}
function isNully(node) {
  if (node == null)
    // null or undefined
    return true;
  if (isArray(node)) {
    // is it an empty array or an array of all nully items?
    for (var i = 0; i < node.length; i++) if (!isNully(node[i])) return false;
    return true;
  }
  return false;
}
function isValidAttributeName(name) {
  return /^[:_A-Za-z][:_A-Za-z0-9.\-]*/.test(name);
}
function flattenAttributes(attrs) {
  if (!attrs) return attrs;
  var isList = isArray(attrs);
  if (isList && attrs.length === 0) return null;
  var result = {};
  for (var i = 0, N = isList ? attrs.length : 1; i < N; i++) {
    var oneAttrs = isList ? attrs[i] : attrs;
    if (typeof oneAttrs !== 'object' || isConstructedObject(oneAttrs)) throw new Error("Expected plain JS object as attrs, found: " + oneAttrs);
    for (var name in oneAttrs) {
      if (!isValidAttributeName(name)) throw new Error("Illegal HTML attribute name: " + name);
      var value = oneAttrs[name];
      if (!isNully(value)) result[name] = value;
    }
  }
  return result;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitors.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/htmljs/visitors.js                                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Visitor: () => Visitor,
  TransformingVisitor: () => TransformingVisitor,
  ToTextVisitor: () => ToTextVisitor,
  ToHTMLVisitor: () => ToHTMLVisitor,
  toHTML: () => toHTML,
  TEXTMODE: () => TEXTMODE,
  toText: () => toText
});
let Tag, CharRef, Comment, Raw, isArray, getTag, isConstructedObject, flattenAttributes, isVoidElement;
module.link("./html", {
  Tag(v) {
    Tag = v;
  },
  CharRef(v) {
    CharRef = v;
  },
  Comment(v) {
    Comment = v;
  },
  Raw(v) {
    Raw = v;
  },
  isArray(v) {
    isArray = v;
  },
  getTag(v) {
    getTag = v;
  },
  isConstructedObject(v) {
    isConstructedObject = v;
  },
  flattenAttributes(v) {
    flattenAttributes = v;
  },
  isVoidElement(v) {
    isVoidElement = v;
  }
}, 0);
var IDENTITY = function (x) {
  return x;
};

// _assign is like _.extend or the upcoming Object.assign.
// Copy src's own, enumerable properties onto tgt and return
// tgt.
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _assign = function (tgt, src) {
  for (var k in src) {
    if (_hasOwnProperty.call(src, k)) tgt[k] = src[k];
  }
  return tgt;
};
const Visitor = function (props) {
  _assign(this, props);
};
Visitor.def = function (options) {
  _assign(this.prototype, options);
};
Visitor.extend = function (options) {
  var curType = this;
  var subType = function HTMLVisitorSubtype( /*arguments*/
  ) {
    Visitor.apply(this, arguments);
  };
  subType.prototype = new curType();
  subType.extend = curType.extend;
  subType.def = curType.def;
  if (options) _assign(subType.prototype, options);
  return subType;
};
Visitor.def({
  visit: function (content /*, ...*/) {
    if (content == null)
      // null or undefined.
      return this.visitNull.apply(this, arguments);
    if (typeof content === 'object') {
      if (content.htmljsType) {
        switch (content.htmljsType) {
          case Tag.htmljsType:
            return this.visitTag.apply(this, arguments);
          case CharRef.htmljsType:
            return this.visitCharRef.apply(this, arguments);
          case Comment.htmljsType:
            return this.visitComment.apply(this, arguments);
          case Raw.htmljsType:
            return this.visitRaw.apply(this, arguments);
          default:
            throw new Error("Unknown htmljs type: " + content.htmljsType);
        }
      }
      if (isArray(content)) return this.visitArray.apply(this, arguments);
      return this.visitObject.apply(this, arguments);
    } else if (typeof content === 'string' || typeof content === 'boolean' || typeof content === 'number') {
      return this.visitPrimitive.apply(this, arguments);
    } else if (typeof content === 'function') {
      return this.visitFunction.apply(this, arguments);
    }
    throw new Error("Unexpected object in htmljs: " + content);
  },
  visitNull: function (nullOrUndefined /*, ...*/) {},
  visitPrimitive: function (stringBooleanOrNumber /*, ...*/) {},
  visitArray: function (array /*, ...*/) {},
  visitComment: function (comment /*, ...*/) {},
  visitCharRef: function (charRef /*, ...*/) {},
  visitRaw: function (raw /*, ...*/) {},
  visitTag: function (tag /*, ...*/) {},
  visitObject: function (obj /*, ...*/) {
    throw new Error("Unexpected object in htmljs: " + obj);
  },
  visitFunction: function (fn /*, ...*/) {
    throw new Error("Unexpected function in htmljs: " + fn);
  }
});
const TransformingVisitor = Visitor.extend();
TransformingVisitor.def({
  visitNull: IDENTITY,
  visitPrimitive: IDENTITY,
  visitArray: function (array) {
    var result = array;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    for (var i = 0; i < array.length; i++) {
      var oldItem = array[i];
      var newItem = this.visit(oldItem, ...args);
      if (newItem !== oldItem) {
        // copy `array` on write
        if (result === array) result = array.slice();
        result[i] = newItem;
      }
    }
    return result;
  },
  visitComment: IDENTITY,
  visitCharRef: IDENTITY,
  visitRaw: IDENTITY,
  visitObject: function (obj) {
    // Don't parse Markdown & RCData as HTML
    if (obj.textMode != null) {
      return obj;
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if ('content' in obj) {
      obj.content = this.visit(obj.content, ...args);
    }
    if ('elseContent' in obj) {
      obj.elseContent = this.visit(obj.elseContent, ...args);
    }
    return obj;
  },
  visitFunction: IDENTITY,
  visitTag: function (tag) {
    var oldChildren = tag.children;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    var newChildren = this.visitChildren(oldChildren, ...args);
    var oldAttrs = tag.attrs;
    var newAttrs = this.visitAttributes(oldAttrs, ...args);
    if (newAttrs === oldAttrs && newChildren === oldChildren) return tag;
    var newTag = getTag(tag.tagName).apply(null, newChildren);
    newTag.attrs = newAttrs;
    return newTag;
  },
  visitChildren: function (children) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    return this.visitArray(children, ...args);
  },
  // Transform the `.attrs` property of a tag, which may be a dictionary,
  // an array, or in some uses, a foreign object (such as
  // a template tag).
  visitAttributes: function (attrs) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    if (isArray(attrs)) {
      var result = attrs;
      for (var i = 0; i < attrs.length; i++) {
        var oldItem = attrs[i];
        var newItem = this.visitAttributes(oldItem, ...args);
        if (newItem !== oldItem) {
          // copy on write
          if (result === attrs) result = attrs.slice();
          result[i] = newItem;
        }
      }
      return result;
    }
    if (attrs && isConstructedObject(attrs)) {
      if (typeof attrs.then === 'function') {
        throw new Error('Asynchronous dynamic attributes are not supported. Use #let to unwrap them first.');
      }
      throw new Error("The basic TransformingVisitor does not support " + "foreign objects in attributes.  Define a custom " + "visitAttributes for this case.");
    }
    var oldAttrs = attrs;
    var newAttrs = oldAttrs;
    if (oldAttrs) {
      var attrArgs = [null, null];
      attrArgs.push.apply(attrArgs, arguments);
      for (var k in oldAttrs) {
        var oldValue = oldAttrs[k];
        attrArgs[0] = k;
        attrArgs[1] = oldValue;
        var newValue = this.visitAttribute.apply(this, attrArgs);
        if (newValue !== oldValue) {
          // copy on write
          if (newAttrs === oldAttrs) newAttrs = _assign({}, oldAttrs);
          newAttrs[k] = newValue;
        }
      }
    }
    return newAttrs;
  },
  // Transform the value of one attribute name/value in an
  // attributes dictionary.
  visitAttribute: function (name, value, tag) {
    for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
      args[_key6 - 3] = arguments[_key6];
    }
    return this.visit(value, ...args);
  }
});
const ToTextVisitor = Visitor.extend();
ToTextVisitor.def({
  visitNull: function (nullOrUndefined) {
    return '';
  },
  visitPrimitive: function (stringBooleanOrNumber) {
    var str = String(stringBooleanOrNumber);
    if (this.textMode === TEXTMODE.RCDATA) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    } else if (this.textMode === TEXTMODE.ATTRIBUTE) {
      // escape `&` and `"` this time, not `&` and `<`
      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    } else {
      return str;
    }
  },
  visitArray: function (array) {
    var parts = [];
    for (var i = 0; i < array.length; i++) parts.push(this.visit(array[i]));
    return parts.join('');
  },
  visitComment: function (comment) {
    throw new Error("Can't have a comment here");
  },
  visitCharRef: function (charRef) {
    if (this.textMode === TEXTMODE.RCDATA || this.textMode === TEXTMODE.ATTRIBUTE) {
      return charRef.html;
    } else {
      return charRef.str;
    }
  },
  visitRaw: function (raw) {
    return raw.value;
  },
  visitTag: function (tag) {
    // Really we should just disallow Tags here.  However, at the
    // moment it's useful to stringify any HTML we find.  In
    // particular, when you include a template within `{{#markdown}}`,
    // we render the template as text, and since there's currently
    // no way to make the template be *parsed* as text (e.g. `<template
    // type="text">`), we hackishly support HTML tags in markdown
    // in templates by parsing them and stringifying them.
    return this.visit(this.toHTML(tag));
  },
  visitObject: function (x) {
    throw new Error("Unexpected object in htmljs in toText: " + x);
  },
  toHTML: function (node) {
    return toHTML(node);
  }
});
const ToHTMLVisitor = Visitor.extend();
ToHTMLVisitor.def({
  visitNull: function (nullOrUndefined) {
    return '';
  },
  visitPrimitive: function (stringBooleanOrNumber) {
    var str = String(stringBooleanOrNumber);
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  },
  visitArray: function (array) {
    var parts = [];
    for (var i = 0; i < array.length; i++) parts.push(this.visit(array[i]));
    return parts.join('');
  },
  visitComment: function (comment) {
    return '<!--' + comment.sanitizedValue + '-->';
  },
  visitCharRef: function (charRef) {
    return charRef.html;
  },
  visitRaw: function (raw) {
    return raw.value;
  },
  visitTag: function (tag) {
    var attrStrs = [];
    var tagName = tag.tagName;
    var children = tag.children;
    var attrs = tag.attrs;
    if (attrs) {
      attrs = flattenAttributes(attrs);
      for (var k in attrs) {
        if (k === 'value' && tagName === 'textarea') {
          children = [attrs[k], children];
        } else {
          var v = this.toText(attrs[k], TEXTMODE.ATTRIBUTE);
          attrStrs.push(' ' + k + '="' + v + '"');
        }
      }
    }
    var startTag = '<' + tagName + attrStrs.join('') + '>';
    var childStrs = [];
    var content;
    if (tagName === 'textarea') {
      for (var i = 0; i < children.length; i++) childStrs.push(this.toText(children[i], TEXTMODE.RCDATA));
      content = childStrs.join('');
      if (content.slice(0, 1) === '\n')
        // TEXTAREA will absorb a newline, so if we see one, add
        // another one.
        content = '\n' + content;
    } else {
      for (var i = 0; i < children.length; i++) childStrs.push(this.visit(children[i]));
      content = childStrs.join('');
    }
    var result = startTag + content;
    if (children.length || !isVoidElement(tagName)) {
      // "Void" elements like BR are the only ones that don't get a close
      // tag in HTML5.  They shouldn't have contents, either, so we could
      // throw an error upon seeing contents here.
      result += '</' + tagName + '>';
    }
    return result;
  },
  visitObject: function (x) {
    throw new Error("Unexpected object in htmljs in toHTML: " + x);
  },
  toText: function (node, textMode) {
    return toText(node, textMode);
  }
});

////////////////////////////// TOHTML

function toHTML(content) {
  return new ToHTMLVisitor().visit(content);
}
const TEXTMODE = {
  STRING: 1,
  RCDATA: 2,
  ATTRIBUTE: 3
};
function toText(content, textMode) {
  if (!textMode) throw new Error("textMode required for HTML.toText");
  if (!(textMode === TEXTMODE.STRING || textMode === TEXTMODE.RCDATA || textMode === TEXTMODE.ATTRIBUTE)) throw new Error("Unknown textMode: " + textMode);
  var visitor = new ToTextVisitor({
    textMode: textMode
  });
  return visitor.visit(content);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/htmljs/preamble.js");

/* Exports */
Package._define("htmljs", exports, {
  HTML: HTML
});

})();

//# sourceURL=meteor://💻app/packages/htmljs.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvaHRtbGpzL3ByZWFtYmxlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9odG1sanMvaHRtbC5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvaHRtbGpzL3Zpc2l0b3JzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkhUTUwiLCJIVE1MVGFncyIsIlRhZyIsIkF0dHJzIiwiZ2V0VGFnIiwiZW5zdXJlVGFnIiwiaXNUYWdFbnN1cmVkIiwiZ2V0U3ltYm9sTmFtZSIsImtub3duSFRNTEVsZW1lbnROYW1lcyIsImtub3duU1ZHRWxlbWVudE5hbWVzIiwia25vd25FbGVtZW50TmFtZXMiLCJ2b2lkRWxlbWVudE5hbWVzIiwiaXNLbm93bkVsZW1lbnQiLCJpc0tub3duU1ZHRWxlbWVudCIsImlzVm9pZEVsZW1lbnQiLCJDaGFyUmVmIiwiQ29tbWVudCIsIlJhdyIsImlzQXJyYXkiLCJpc0NvbnN0cnVjdGVkT2JqZWN0IiwiaXNOdWxseSIsImlzVmFsaWRBdHRyaWJ1dGVOYW1lIiwiZmxhdHRlbkF0dHJpYnV0ZXMiLCJsaW5rIiwidiIsIlZpc2l0b3IiLCJUcmFuc2Zvcm1pbmdWaXNpdG9yIiwiVG9IVE1MVmlzaXRvciIsIlRvVGV4dFZpc2l0b3IiLCJ0b0hUTUwiLCJURVhUTU9ERSIsInRvVGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRhZ05hbWUiLCJhdHRycyIsImNoaWxkcmVuIiwiZnJlZXplIiwiaHRtbGpzVHlwZSIsIm1ha2VUYWdDb25zdHJ1Y3RvciIsIkhUTUxUYWciLCJpbnN0YW5jZSIsImkiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFycmF5IiwidmFsdWUiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiX2xlbjIiLCJfa2V5MiIsInN5bWJvbE5hbWUiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsInNwbGl0IiwiY29uY2F0Iiwidm9pZEVsZW1lbnRTZXQiLCJTZXQiLCJrbm93bkVsZW1lbnRTZXQiLCJrbm93blNWR0VsZW1lbnRTZXQiLCJoYXMiLCJmb3JFYWNoIiwiaHRtbCIsInN0ciIsInNhbml0aXplZFZhbHVlIiwieCIsInBsYWluIiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90byIsIm5vZGUiLCJuYW1lIiwidGVzdCIsImlzTGlzdCIsInJlc3VsdCIsIk4iLCJvbmVBdHRycyIsIklERU5USVRZIiwiX2hhc093blByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJfYXNzaWduIiwidGd0Iiwic3JjIiwiayIsImNhbGwiLCJwcm9wcyIsImRlZiIsIm9wdGlvbnMiLCJleHRlbmQiLCJjdXJUeXBlIiwic3ViVHlwZSIsIkhUTUxWaXNpdG9yU3VidHlwZSIsImFwcGx5IiwidmlzaXQiLCJjb250ZW50IiwidmlzaXROdWxsIiwidmlzaXRUYWciLCJ2aXNpdENoYXJSZWYiLCJ2aXNpdENvbW1lbnQiLCJ2aXNpdFJhdyIsInZpc2l0QXJyYXkiLCJ2aXNpdE9iamVjdCIsInZpc2l0UHJpbWl0aXZlIiwidmlzaXRGdW5jdGlvbiIsIm51bGxPclVuZGVmaW5lZCIsInN0cmluZ0Jvb2xlYW5Pck51bWJlciIsImNvbW1lbnQiLCJjaGFyUmVmIiwicmF3IiwidGFnIiwib2JqIiwiZm4iLCJvbGRJdGVtIiwibmV3SXRlbSIsInRleHRNb2RlIiwiZWxzZUNvbnRlbnQiLCJvbGRDaGlsZHJlbiIsIl9sZW4zIiwiX2tleTMiLCJuZXdDaGlsZHJlbiIsInZpc2l0Q2hpbGRyZW4iLCJvbGRBdHRycyIsIm5ld0F0dHJzIiwidmlzaXRBdHRyaWJ1dGVzIiwibmV3VGFnIiwiX2xlbjQiLCJfa2V5NCIsIl9sZW41IiwiX2tleTUiLCJ0aGVuIiwiYXR0ckFyZ3MiLCJwdXNoIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsInZpc2l0QXR0cmlidXRlIiwiX2xlbjYiLCJfa2V5NiIsIlN0cmluZyIsIlJDREFUQSIsIkFUVFJJQlVURSIsInBhcnRzIiwiam9pbiIsImF0dHJTdHJzIiwic3RhcnRUYWciLCJjaGlsZFN0cnMiLCJTVFJJTkciLCJ2aXNpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFNLENBQUM7RUFBQ0MsSUFBSSxFQUFDQSxDQUFBLEtBQUlBO0FBQUksQ0FBQyxDQUFDO0FBQUMsSUFBSUMsUUFBUSxFQUFDQyxHQUFHLEVBQUNDLEtBQUssRUFBQ0MsTUFBTSxFQUFDQyxTQUFTLEVBQUNDLFlBQVksRUFBQ0MsYUFBYSxFQUFDQyxxQkFBcUIsRUFBQ0Msb0JBQW9CLEVBQUNDLGlCQUFpQixFQUFDQyxnQkFBZ0IsRUFBQ0MsY0FBYyxFQUFDQyxpQkFBaUIsRUFBQ0MsYUFBYSxFQUFDQyxPQUFPLEVBQUNDLE9BQU8sRUFBQ0MsR0FBRyxFQUFDQyxPQUFPLEVBQUNDLG1CQUFtQixFQUFDQyxPQUFPLEVBQUNDLG9CQUFvQixFQUFDQyxpQkFBaUI7QUFBQ3hCLE1BQU0sQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLEVBQUM7RUFBQ3RCLFFBQVFBLENBQUN1QixDQUFDLEVBQUM7SUFBQ3ZCLFFBQVEsR0FBQ3VCLENBQUM7RUFBQSxDQUFDO0VBQUN0QixHQUFHQSxDQUFDc0IsQ0FBQyxFQUFDO0lBQUN0QixHQUFHLEdBQUNzQixDQUFDO0VBQUEsQ0FBQztFQUFDckIsS0FBS0EsQ0FBQ3FCLENBQUMsRUFBQztJQUFDckIsS0FBSyxHQUFDcUIsQ0FBQztFQUFBLENBQUM7RUFBQ3BCLE1BQU1BLENBQUNvQixDQUFDLEVBQUM7SUFBQ3BCLE1BQU0sR0FBQ29CLENBQUM7RUFBQSxDQUFDO0VBQUNuQixTQUFTQSxDQUFDbUIsQ0FBQyxFQUFDO0lBQUNuQixTQUFTLEdBQUNtQixDQUFDO0VBQUEsQ0FBQztFQUFDbEIsWUFBWUEsQ0FBQ2tCLENBQUMsRUFBQztJQUFDbEIsWUFBWSxHQUFDa0IsQ0FBQztFQUFBLENBQUM7RUFBQ2pCLGFBQWFBLENBQUNpQixDQUFDLEVBQUM7SUFBQ2pCLGFB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LEVBQUUsQ0FBQztFQUNUUCxNQUFNLEVBQUUsQ0FBQztFQUNUQyxTQUFTLEVBQUU7QUFDYixDQUFDO0FBR00sU0FBU2pILE1BQU1BLENBQUNvRSxPQUFPLEVBQUVvQixRQUFRLEVBQUU7RUFDeEMsSUFBSSxDQUFFQSxRQUFRLEVBQ1osTUFBTSxJQUFJOUQsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO0VBQ3RELElBQUksRUFBRzhELFFBQVEsS0FBS3pGLFFBQVEsQ0FBQ3dILE1BQU0sSUFDNUIvQixRQUFRLEtBQUt6RixRQUFRLENBQUNpSCxNQUFNLElBQzVCeEIsUUFBUSxLQUFLekYsUUFBUSxDQUFDa0gsU0FBUyxDQUFDLEVBQ3JDLE1BQU0sSUFBSXZGLEtBQUssQ0FBQyxvQkFBb0IsR0FBRzhELFFBQVEsQ0FBQztFQUVsRCxJQUFJZ0MsT0FBTyxHQUFHLElBQUkzSCxhQUFhLENBQUM7SUFBQzJGLFFBQVEsRUFBRUE7RUFBUSxDQUFDLENBQUM7RUFDckQsT0FBT2dDLE9BQU8sQ0FBQ3JELEtBQUssQ0FBQ0MsT0FBTyxDQUFDO0FBQy9CLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2h0bWxqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhUTUxUYWdzLFxuICBUYWcsXG4gIEF0dHJzLFxuICBnZXRUYWcsXG4gIGVuc3VyZVRhZyxcbiAgaXNUYWdFbnN1cmVkLFxuICBnZXRTeW1ib2xOYW1lLFxuICBrbm93bkhUTUxFbGVtZW50TmFtZXMsXG4gIGtub3duU1ZHRWxlbWVudE5hbWVzLFxuICBrbm93bkVsZW1lbnROYW1lcyxcbiAgdm9pZEVsZW1lbnROYW1lcyxcbiAgaXNLbm93bkVsZW1lbnQsXG4gIGlzS25vd25TVkdFbGVtZW50LFxuICBpc1ZvaWRFbGVtZW50LFxuICBDaGFyUmVmLFxuICBDb21tZW50LFxuICBSYXcsXG4gIGlzQXJyYXksXG4gIGlzQ29uc3RydWN0ZWRPYmplY3QsXG4gIGlzTnVsbHksXG4gIGlzVmFsaWRBdHRyaWJ1dGVOYW1lLFxuICBmbGF0dGVuQXR0cmlidXRlcyxcbn0gZnJvbSAnLi9odG1sJztcblxuaW1wb3J0IHtcbiAgVmlzaXRvcixcbiAgVHJhbnNmb3JtaW5nVmlzaXRvcixcbiAgVG9IVE1MVmlzaXRvcixcbiAgVG9UZXh0VmlzaXRvcixcbiAgdG9IVE1MLFxuICBURVhUTU9ERSxcbiAgdG9UZXh0XG59IGZyb20gJy4vdmlzaXRvcnMnO1xuXG5cbi8vIHdlJ3JlIGFjdHVhbGx5IGV4cG9ydGluZyB0aGUgSFRNTFRhZ3Mgb2JqZWN0LlxuLy8gIGJlY2F1c2UgaXQgaXMgZHluYW1pY2FsbHkgYWx0ZXJlZCBieSBnZXRUYWcvZW5zdXJlVGFnXG5leHBvcnQgY29uc3QgSFRNTCA9IE9iamVjdC5hc3NpZ24oSFRNTFRhZ3MsIHtcbiAgVGFnLFxuICBBdHRycyxcbiAgZ2V0VGFnLFxuICBlbnN1cmVUYWcsXG4gIGlzVGFnRW5zdXJlZCxcbiAgZ2V0U3ltYm9sTmFtZSxcbiAga25vd25IVE1MRWxlbWVudE5hbWVzLFxuICBrbm93blNWR0VsZW1lbnROYW1lcyxcbiAga25vd25FbGVtZW50TmFtZXMsXG4gIHZvaWRFbGVtZW50TmFtZXMsXG4gIGlzS25vd25FbGVtZW50LFxuICBpc0tub3duU1ZHRWxlbWVudCxcbiAgaXNWb2lkRWxlbWVudCxcbiAgQ2hhclJlZixcbiAgQ29tbWVudCxcbiAgUmF3LFxuICBpc0FycmF5LFxuICBpc0NvbnN0cnVjdGVkT2JqZWN0LFxuICBpc051bGx5LFxuICBpc1ZhbGlkQXR0cmlidXRlTmFtZSxcbiAgZmxhdHRlbkF0dHJpYnV0ZXMsXG4gIHRvSFRNTCxcbiAgVEVYVE1PREUsXG4gIHRvVGV4dCxcbiAgVmlzaXRvcixcbiAgVHJhbnNmb3JtaW5nVmlzaXRvcixcbiAgVG9IVE1MVmlzaXRvcixcbiAgVG9UZXh0VmlzaXRvcixcbn0pO1xuIiwiXG5leHBvcnQgY29uc3QgVGFnID0gZnVuY3Rpb24gKCkge307XG5UYWcucHJvdG90eXBlLnRhZ05hbWUgPSAnJzsgLy8gdGhpcyB3aWxsIGJlIHNldCBwZXIgVGFnIHN1YmNsYXNzXG5UYWcucHJvdG90eXBlLmF0dHJzID0gbnVsbDtcblRhZy5wcm90b3R5cGUuY2hpbGRyZW4gPSBPYmplY3QuZnJlZXplID8gT2JqZWN0LmZyZWV6ZShbXSkgOiBbXTtcblRhZy5wcm90b3R5cGUuaHRtbGpzVHlwZSA9IFRhZy5odG1sanNUeXBlID0gWydUYWcnXTtcblxuLy8gR2l2ZW4gXCJwXCIgY3JlYXRlIHRoZSBmdW5jdGlvbiBgSFRNTC5QYC5cbnZhciBtYWtlVGFnQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAvLyBUYWcgaXMgdGhlIHBlci10YWdOYW1lIGNvbnN0cnVjdG9yIG9mIGEgSFRNTC5UYWcgc3ViY2xhc3NcbiAgdmFyIEhUTUxUYWcgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIC8vIFdvcmsgd2l0aCBvciB3aXRob3V0IGBuZXdgLiAgSWYgbm90IGNhbGxlZCB3aXRoIGBuZXdgLFxuICAgIC8vIHBlcmZvcm0gaW5zdGFudGlhdGlvbiBieSByZWN1cnNpdmVseSBjYWxsaW5nIHRoaXMgY29uc3RydWN0b3IuXG4gICAgLy8gV2UgY2FuJ3QgcGFzcyB2YXJhcmdzLCBzbyBwYXNzIG5vIGFyZ3MuXG4gICAgdmFyIGluc3RhbmNlID0gKHRoaXMgaW5zdGFuY2VvZiBUYWcpID8gdGhpcyA6IG5ldyBIVE1MVGFnO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhdHRycyA9IGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF07XG4gICAgaWYgKGF0dHJzICYmICh0eXBlb2YgYXR0cnMgPT09ICdvYmplY3QnKSkge1xuICAgICAgLy8gVHJlYXQgdmFuaWxsYSBKUyBvYmplY3QgYXMgYW4gYXR0cmlidXRlcyBkaWN0aW9uYXJ5LlxuICAgICAgaWYgKCEgaXNDb25zdHJ1Y3RlZE9iamVjdChhdHRycykpIHtcbiAgICAgICAgaW5zdGFuY2UuYXR0cnMgPSBhdHRycztcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChhdHRycyBpbnN0YW5jZW9mIEF0dHJzKSB7XG4gICAgICAgIHZhciBhcnJheSA9IGF0dHJzLnZhbHVlO1xuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaW5zdGFuY2UuYXR0cnMgPSBhcnJheVswXTtcbiAgICAgICAgfSBlbHNlIGlmIChhcnJheS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgaW5zdGFuY2UuYXR0cnMgPSBhcnJheTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBJZiBubyBjaGlsZHJlbiwgZG9uJ3QgY3JlYXRlIGFuIGFycmF5IGF0IGFsbCwgdXNlIHRoZSBwcm90b3R5cGUnc1xuICAgIC8vIChmcm96ZW4sIGVtcHR5KSBhcnJheS4gIFRoaXMgd2F5IHdlIGRvbid0IGNyZWF0ZSBhbiBlbXB0eSBhcnJheVxuICAgIC8vIGV2ZXJ5IHRpbWUgc29tZW9uZSBjcmVhdGVzIGEgdGFnIHdpdGhvdXQgYG5ld2AgYW5kIHRoaXMgY29uc3RydWN0b3JcbiAgICAvLyBjYWxscyBpdHNlbGYgd2l0aCBubyBhcmd1bWVudHMgKGFib3ZlKS5cbiAgICBpZiAoaSA8IGFyZ3MubGVuZ3RoKVxuICAgICAgaW5zdGFuY2UuY2hpbGRyZW4gPSBhcmdzLnNsaWNlKGkpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuICBIVE1MVGFnLnByb3RvdHlwZSA9IG5ldyBUYWc7XG4gIEhUTUxUYWcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTFRhZztcbiAgSFRNTFRhZy5wcm90b3R5cGUudGFnTmFtZSA9IHRhZ05hbWU7XG5cbiAgcmV0dXJuIEhUTUxUYWc7XG59O1xuXG4vLyBOb3QgYW4gSFRNTGpzIG5vZGUsIGJ1dCBhIHdyYXBwZXIgdG8gcGFzcyBtdWx0aXBsZSBhdHRycyBkaWN0aW9uYXJpZXNcbi8vIHRvIGEgdGFnIChmb3IgdGhlIHB1cnBvc2Ugb2YgaW1wbGVtZW50aW5nIGR5bmFtaWMgYXR0cmlidXRlcykuXG5leHBvcnQgZnVuY3Rpb24gQXR0cnMoLi4uYXJncykge1xuICAvLyBXb3JrIHdpdGggb3Igd2l0aG91dCBgbmV3YC4gIElmIG5vdCBjYWxsZWQgd2l0aCBgbmV3YCxcbiAgLy8gcGVyZm9ybSBpbnN0YW50aWF0aW9uIGJ5IHJlY3Vyc2l2ZWx5IGNhbGxpbmcgdGhpcyBjb25zdHJ1Y3Rvci5cbiAgLy8gV2UgY2FuJ3QgcGFzcyB2YXJhcmdzLCBzbyBwYXNzIG5vIGFyZ3MuXG4gIHZhciBpbnN0YW5jZSA9ICh0aGlzIGluc3RhbmNlb2YgQXR0cnMpID8gdGhpcyA6IG5ldyBBdHRycztcblxuICBpbnN0YW5jZS52YWx1ZSA9IGFyZ3M7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gS05PV04gRUxFTUVOVFNcbmV4cG9ydCBjb25zdCBIVE1MVGFncyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnICh0YWdOYW1lKSB7XG4gIHZhciBzeW1ib2xOYW1lID0gZ2V0U3ltYm9sTmFtZSh0YWdOYW1lKTtcbiAgaWYgKHN5bWJvbE5hbWUgPT09IHRhZ05hbWUpIC8vIGFsbC1jYXBzIHRhZ05hbWVcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgdGhlIGxvd2VyY2FzZSBvciBjYW1lbENhc2UgZm9ybSBvZiAnXCIgKyB0YWdOYW1lICsgXCInIGhlcmVcIik7XG5cbiAgaWYgKCEgSFRNTFRhZ3Nbc3ltYm9sTmFtZV0pXG4gICAgSFRNTFRhZ3Nbc3ltYm9sTmFtZV0gPSBtYWtlVGFnQ29uc3RydWN0b3IodGFnTmFtZSk7XG5cbiAgcmV0dXJuIEhUTUxUYWdzW3N5bWJvbE5hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVGFnKHRhZ05hbWUpIHtcbiAgZ2V0VGFnKHRhZ05hbWUpOyAvLyBkb24ndCByZXR1cm4gaXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnRW5zdXJlZCAodGFnTmFtZSkge1xuICByZXR1cm4gaXNLbm93bkVsZW1lbnQodGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xOYW1lICh0YWdOYW1lKSB7XG4gIC8vIFwiZm9vLWJhclwiIC0+IFwiRk9PX0JBUlwiXG4gIHJldHVybiB0YWdOYW1lLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpO1xufVxuXG5leHBvcnQgY29uc3Qga25vd25IVE1MRWxlbWVudE5hbWVzID0gJ2EgYWJiciBhY3JvbnltIGFkZHJlc3MgYXBwbGV0IGFyZWEgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiIGJhc2UgYmFzZWZvbnQgYmRpIGJkbyBiaWcgYmxvY2txdW90ZSBib2R5IGJyIGJ1dHRvbiBjYW52YXMgY2FwdGlvbiBjZW50ZXIgY2l0ZSBjb2RlIGNvbCBjb2xncm91cCBjb21tYW5kIGRhdGEgZGF0YWdyaWQgZGF0YWxpc3QgZGQgZGVsIGRldGFpbHMgZGZuIGRpciBkaXYgZGwgZHQgZW0gZW1iZWQgZXZlbnRzb3VyY2UgZmllbGRzZXQgZmlnY2FwdGlvbiBmaWd1cmUgZm9udCBmb290ZXIgZm9ybSBmcmFtZSBmcmFtZXNldCBoMSBoMiBoMyBoNCBoNSBoNiBoZWFkIGhlYWRlciBoZ3JvdXAgaHIgaHRtbCBpIGlmcmFtZSBpbWcgaW5wdXQgaW5zIGlzaW5kZXgga2JkIGtleWdlbiBsYWJlbCBsZWdlbmQgbGkgbGluayBtYWluIG1hcCBtYXJrIG1lbnUgbWV0YSBtZXRlciBuYXYgbm9mcmFtZXMgbm9zY3JpcHQgb2JqZWN0IG9sIG9wdGdyb3VwIG9wdGlvbiBvdXRwdXQgcCBwYXJhbSBwcmUgcHJvZ3Jlc3MgcSBycCBydCBydWJ5IHMgc2FtcCBzY3JpcHQgc2VjdGlvbiBzZWxlY3Qgc21hbGwgc291cmNlIHNwYW4gc3RyaWtlIHN0cm9uZyBzdHlsZSBzdWIgc3VtbWFyeSBzdXAgdGFibGUgdGJvZHkgdGQgdGV4dGFyZWEgdGZvb3QgdGggdGhlYWQgdGltZSB0aXRsZSB0ciB0cmFjayB0dCB1IHVsIHZhciB2aWRlbyB3YnInLnNwbGl0KCcgJyk7XG4vLyAod2UgYWRkIHRoZSBTVkcgb25lcyBiZWxvdylcblxuZXhwb3J0IGNvbnN0IGtub3duU1ZHRWxlbWVudE5hbWVzID0gJ2FsdEdseXBoIGFsdEdseXBoRGVmIGFsdEdseXBoSXRlbSBhbmltYXRlIGFuaW1hdGVDb2xvciBhbmltYXRlTW90aW9uIGFuaW1hdGVUcmFuc2Zvcm0gY2lyY2xlIGNsaXBQYXRoIGNvbG9yLXByb2ZpbGUgY3Vyc29yIGRlZnMgZGVzYyBlbGxpcHNlIGZlQmxlbmQgZmVDb2xvck1hdHJpeCBmZUNvbXBvbmVudFRyYW5zZmVyIGZlQ29tcG9zaXRlIGZlQ29udm9sdmVNYXRyaXggZmVEaWZmdXNlTGlnaHRpbmcgZmVEaXNwbGFjZW1lbnRNYXAgZmVEaXN0YW50TGlnaHQgZmVGbG9vZCBmZUZ1bmNBIGZlRnVuY0IgZmVGdW5jRyBmZUZ1bmNSIGZlR2F1c3NpYW5CbHVyIGZlSW1hZ2UgZmVNZXJnZSBmZU1lcmdlTm9kZSBmZU1vcnBob2xvZ3kgZmVPZmZzZXQgZmVQb2ludExpZ2h0IGZlU3BlY3VsYXJMaWdodGluZyBmZVNwb3RMaWdodCBmZVRpbGUgZmVUdXJidWxlbmNlIGZpbHRlciBmb250IGZvbnQtZmFjZSBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb3JlaWduT2JqZWN0IGcgZ2x5cGggZ2x5cGhSZWYgaGtlcm4gaW1hZ2UgbGluZSBsaW5lYXJHcmFkaWVudCBtYXJrZXIgbWFzayBtZXRhZGF0YSBtaXNzaW5nLWdseXBoIHBhdGggcGF0dGVybiBwb2x5Z29uIHBvbHlsaW5lIHJhZGlhbEdyYWRpZW50IHJlY3Qgc2V0IHN0b3Agc3R5bGUgc3ZnIHN3aXRjaCBzeW1ib2wgdGV4dCB0ZXh0UGF0aCB0aXRsZSB0cmVmIHRzcGFuIHVzZSB2aWV3IHZrZXJuJy5zcGxpdCgnICcpO1xuLy8gQXBwZW5kIFNWRyBlbGVtZW50IG5hbWVzIHRvIGxpc3Qgb2Yga25vd24gZWxlbWVudCBuYW1lc1xuZXhwb3J0IGNvbnN0IGtub3duRWxlbWVudE5hbWVzID0ga25vd25IVE1MRWxlbWVudE5hbWVzLmNvbmNhdChrbm93blNWR0VsZW1lbnROYW1lcyk7XG5cbmV4cG9ydCBjb25zdCB2b2lkRWxlbWVudE5hbWVzID0gJ2FyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWcgaW5wdXQga2V5Z2VuIGxpbmsgbWV0YSBwYXJhbSBzb3VyY2UgdHJhY2sgd2JyJy5zcGxpdCgnICcpO1xuXG5cbnZhciB2b2lkRWxlbWVudFNldCA9IG5ldyBTZXQodm9pZEVsZW1lbnROYW1lcyk7XG52YXIga25vd25FbGVtZW50U2V0ID0gbmV3IFNldChrbm93bkVsZW1lbnROYW1lcyk7XG52YXIga25vd25TVkdFbGVtZW50U2V0ID0gbmV3IFNldChrbm93blNWR0VsZW1lbnROYW1lcyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0tub3duRWxlbWVudCh0YWdOYW1lKSB7XG4gIHJldHVybiBrbm93bkVsZW1lbnRTZXQuaGFzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNLbm93blNWR0VsZW1lbnQodGFnTmFtZSkge1xuICByZXR1cm4ga25vd25TVkdFbGVtZW50U2V0Lmhhcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVm9pZEVsZW1lbnQodGFnTmFtZSkge1xuICByZXR1cm4gdm9pZEVsZW1lbnRTZXQuaGFzKHRhZ05hbWUpO1xufVxuXG5cbi8vIEVuc3VyZSB0YWdzIGZvciBhbGwga25vd24gZWxlbWVudHNcbmtub3duRWxlbWVudE5hbWVzLmZvckVhY2goZW5zdXJlVGFnKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhclJlZihhdHRycykge1xuICBpZiAoISAodGhpcyBpbnN0YW5jZW9mIENoYXJSZWYpKVxuICAgIC8vIGNhbGxlZCB3aXRob3V0IGBuZXdgXG4gICAgcmV0dXJuIG5ldyBDaGFyUmVmKGF0dHJzKTtcblxuICBpZiAoISAoYXR0cnMgJiYgYXR0cnMuaHRtbCAmJiBhdHRycy5zdHIpKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiSFRNTC5DaGFyUmVmIG11c3QgYmUgY29uc3RydWN0ZWQgd2l0aCAoe2h0bWw6Li4uLCBzdHI6Li4ufSlcIik7XG5cbiAgdGhpcy5odG1sID0gYXR0cnMuaHRtbDtcbiAgdGhpcy5zdHIgPSBhdHRycy5zdHI7XG59XG5DaGFyUmVmLnByb3RvdHlwZS5odG1sanNUeXBlID0gQ2hhclJlZi5odG1sanNUeXBlID0gWydDaGFyUmVmJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50KHZhbHVlKSB7XG4gIGlmICghICh0aGlzIGluc3RhbmNlb2YgQ29tbWVudCkpXG4gICAgLy8gY2FsbGVkIHdpdGhvdXQgYG5ld2BcbiAgICByZXR1cm4gbmV3IENvbW1lbnQodmFsdWUpO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKVxuICAgIHRocm93IG5ldyBFcnJvcignSFRNTC5Db21tZW50IG11c3QgYmUgY29uc3RydWN0ZWQgd2l0aCBhIHN0cmluZycpO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgLy8gS2lsbCBpbGxlZ2FsIGh5cGhlbnMgaW4gY29tbWVudCB2YWx1ZSAobm8gd2F5IHRvIGVzY2FwZSB0aGVtIGluIEhUTUwpXG4gIHRoaXMuc2FuaXRpemVkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eLXwtLSt8LSQvZywgJycpO1xufVxuQ29tbWVudC5wcm90b3R5cGUuaHRtbGpzVHlwZSA9IENvbW1lbnQuaHRtbGpzVHlwZSA9IFsnQ29tbWVudCddO1xuXG5leHBvcnQgZnVuY3Rpb24gUmF3KHZhbHVlKSB7XG4gIGlmICghICh0aGlzIGluc3RhbmNlb2YgUmF3KSlcbiAgICAvLyBjYWxsZWQgd2l0aG91dCBgbmV3YFxuICAgIHJldHVybiBuZXcgUmF3KHZhbHVlKTtcblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUTUwuUmF3IG11c3QgYmUgY29uc3RydWN0ZWQgd2l0aCBhIHN0cmluZycpO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblJhdy5wcm90b3R5cGUuaHRtbGpzVHlwZSA9IFJhdy5odG1sanNUeXBlID0gWydSYXcnXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAoeCkge1xuICByZXR1cm4geCBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnN0cnVjdGVkT2JqZWN0ICh4KSB7XG4gIC8vIEZpZ3VyZSBvdXQgaWYgYHhgIGlzIFwiYW4gaW5zdGFuY2Ugb2Ygc29tZSBjbGFzc1wiIG9yIGp1c3QgYSBwbGFpblxuICAvLyBvYmplY3QgbGl0ZXJhbC4gIEl0IGNvcnJlY3RseSB0cmVhdHMgYW4gb2JqZWN0IGxpdGVyYWwgbGlrZVxuICAvLyBgeyBjb25zdHJ1Y3RvcjogLi4uIH1gIGFzIGFuIG9iamVjdCBsaXRlcmFsLiAgSXQgd29uJ3QgZGV0ZWN0XG4gIC8vIGluc3RhbmNlcyBvZiBjbGFzc2VzIHRoYXQgbGFjayBhIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgKGUuZy5cbiAgLy8gaWYgeW91IGFzc2lnbiB0byBhIHByb3RvdHlwZSB3aGVuIHNldHRpbmcgdXAgdGhlIGNsYXNzIGFzIGluOlxuICAvLyBgRm9vID0gZnVuY3Rpb24gKCkgeyAuLi4gfTsgRm9vLnByb3RvdHlwZSA9IHsgLi4uIH1gLCB0aGVuXG4gIC8vIGAobmV3IEZvbykuY29uc3RydWN0b3JgIGlzIGBPYmplY3RgLCBub3QgYEZvb2ApLlxuICBpZigheCB8fCAodHlwZW9mIHggIT09ICdvYmplY3QnKSkgcmV0dXJuIGZhbHNlO1xuICAvLyBJcyB0aGlzIGEgcGxhaW4gb2JqZWN0P1xuICBsZXQgcGxhaW4gPSBmYWxzZTtcbiAgaWYoT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpID09PSBudWxsKSB7XG4gICAgcGxhaW4gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGxldCBwcm90byA9IHg7XG4gICAgd2hpbGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBwbGFpbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSA9PT0gcHJvdG87XG4gIH1cblxuICByZXR1cm4gIXBsYWluICYmXG4gICAgKHR5cGVvZiB4LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSAmJlxuICAgICh4IGluc3RhbmNlb2YgeC5jb25zdHJ1Y3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGx5IChub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpXG4gICAgLy8gbnVsbCBvciB1bmRlZmluZWRcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIC8vIGlzIGl0IGFuIGVtcHR5IGFycmF5IG9yIGFuIGFycmF5IG9mIGFsbCBudWxseSBpdGVtcz9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspXG4gICAgICBpZiAoISBpc051bGx5KG5vZGVbaV0pKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQXR0cmlidXRlTmFtZSAobmFtZSkge1xuICByZXR1cm4gL15bOl9BLVphLXpdWzpfQS1aYS16MC05LlxcLV0qLy50ZXN0KG5hbWUpO1xufVxuXG4vLyBJZiBgYXR0cnNgIGlzIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgZGljdGlvbmFyaWVzLCBjb21iaW5lcyB0aGVtXG4vLyBpbnRvIG9uZS4gIFJlbW92ZXMgYXR0cmlidXRlcyB0aGF0IGFyZSBcIm51bGx5LlwiXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkF0dHJpYnV0ZXMgKGF0dHJzKSB7XG4gIGlmICghIGF0dHJzKVxuICAgIHJldHVybiBhdHRycztcblxuICB2YXIgaXNMaXN0ID0gaXNBcnJheShhdHRycyk7XG4gIGlmIChpc0xpc3QgJiYgYXR0cnMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIE4gPSAoaXNMaXN0ID8gYXR0cnMubGVuZ3RoIDogMSk7IGkgPCBOOyBpKyspIHtcbiAgICB2YXIgb25lQXR0cnMgPSAoaXNMaXN0ID8gYXR0cnNbaV0gOiBhdHRycyk7XG4gICAgaWYgKCh0eXBlb2Ygb25lQXR0cnMgIT09ICdvYmplY3QnKSB8fFxuICAgICAgICBpc0NvbnN0cnVjdGVkT2JqZWN0KG9uZUF0dHJzKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHBsYWluIEpTIG9iamVjdCBhcyBhdHRycywgZm91bmQ6IFwiICsgb25lQXR0cnMpO1xuICAgIGZvciAodmFyIG5hbWUgaW4gb25lQXR0cnMpIHtcbiAgICAgIGlmICghIGlzVmFsaWRBdHRyaWJ1dGVOYW1lKG5hbWUpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbGxlZ2FsIEhUTUwgYXR0cmlidXRlIG5hbWU6IFwiICsgbmFtZSk7XG4gICAgICB2YXIgdmFsdWUgPSBvbmVBdHRyc1tuYW1lXTtcbiAgICAgIGlmICghIGlzTnVsbHkodmFsdWUpKVxuICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHtcbiAgVGFnLFxuICBDaGFyUmVmLFxuICBDb21tZW50LFxuICBSYXcsXG4gIGlzQXJyYXksXG4gIGdldFRhZyxcbiAgaXNDb25zdHJ1Y3RlZE9iamVjdCxcbiAgZmxhdHRlbkF0dHJpYnV0ZXMsXG4gIGlzVm9pZEVsZW1lbnQsXG59IGZyb20gJy4vaHRtbCc7XG5cblxudmFyIElERU5USVRZID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH07XG5cbi8vIF9hc3NpZ24gaXMgbGlrZSBfLmV4dGVuZCBvciB0aGUgdXBjb21pbmcgT2JqZWN0LmFzc2lnbi5cbi8vIENvcHkgc3JjJ3Mgb3duLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb250byB0Z3QgYW5kIHJldHVyblxuLy8gdGd0LlxudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX2Fzc2lnbiA9IGZ1bmN0aW9uICh0Z3QsIHNyYykge1xuICBmb3IgKHZhciBrIGluIHNyYykge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbChzcmMsIGspKVxuICAgICAgdGd0W2tdID0gc3JjW2tdO1xuICB9XG4gIHJldHVybiB0Z3Q7XG59O1xuXG5leHBvcnQgY29uc3QgVmlzaXRvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBfYXNzaWduKHRoaXMsIHByb3BzKTtcbn07XG5cblZpc2l0b3IuZGVmID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgX2Fzc2lnbih0aGlzLnByb3RvdHlwZSwgb3B0aW9ucyk7XG59O1xuXG5WaXNpdG9yLmV4dGVuZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBjdXJUeXBlID0gdGhpcztcbiAgdmFyIHN1YlR5cGUgPSBmdW5jdGlvbiBIVE1MVmlzaXRvclN1YnR5cGUoLyphcmd1bWVudHMqLykge1xuICAgIFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgc3ViVHlwZS5wcm90b3R5cGUgPSBuZXcgY3VyVHlwZTtcbiAgc3ViVHlwZS5leHRlbmQgPSBjdXJUeXBlLmV4dGVuZDtcbiAgc3ViVHlwZS5kZWYgPSBjdXJUeXBlLmRlZjtcbiAgaWYgKG9wdGlvbnMpXG4gICAgX2Fzc2lnbihzdWJUeXBlLnByb3RvdHlwZSwgb3B0aW9ucyk7XG4gIHJldHVybiBzdWJUeXBlO1xufTtcblxuVmlzaXRvci5kZWYoe1xuICB2aXNpdDogZnVuY3Rpb24gKGNvbnRlbnQvKiwgLi4uKi8pIHtcbiAgICBpZiAoY29udGVudCA9PSBudWxsKVxuICAgICAgLy8gbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICByZXR1cm4gdGhpcy52aXNpdE51bGwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChjb250ZW50Lmh0bWxqc1R5cGUpIHtcbiAgICAgICAgc3dpdGNoIChjb250ZW50Lmh0bWxqc1R5cGUpIHtcbiAgICAgICAgY2FzZSBUYWcuaHRtbGpzVHlwZTpcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRhZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBjYXNlIENoYXJSZWYuaHRtbGpzVHlwZTpcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdENoYXJSZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgY2FzZSBDb21tZW50Lmh0bWxqc1R5cGU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDb21tZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNhc2UgUmF3Lmh0bWxqc1R5cGU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRSYXcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGh0bWxqcyB0eXBlOiBcIiArIGNvbnRlbnQuaHRtbGpzVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXJyYXkoY29udGVudCkpXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QXJyYXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXMudmlzaXRPYmplY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgfHxcbiAgICAgICAgICAgICAgICh0eXBlb2YgY29udGVudCA9PT0gJ2Jvb2xlYW4nKSB8fFxuICAgICAgICAgICAgICAgKHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJpbWl0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBvYmplY3QgaW4gaHRtbGpzOiBcIiArIGNvbnRlbnQpO1xuXG4gIH0sXG4gIHZpc2l0TnVsbDogZnVuY3Rpb24gKG51bGxPclVuZGVmaW5lZC8qLCAuLi4qLykge30sXG4gIHZpc2l0UHJpbWl0aXZlOiBmdW5jdGlvbiAoc3RyaW5nQm9vbGVhbk9yTnVtYmVyLyosIC4uLiovKSB7fSxcbiAgdmlzaXRBcnJheTogZnVuY3Rpb24gKGFycmF5LyosIC4uLiovKSB7fSxcbiAgdmlzaXRDb21tZW50OiBmdW5jdGlvbiAoY29tbWVudC8qLCAuLi4qLykge30sXG4gIHZpc2l0Q2hhclJlZjogZnVuY3Rpb24gKGNoYXJSZWYvKiwgLi4uKi8pIHt9LFxuICB2aXNpdFJhdzogZnVuY3Rpb24gKHJhdy8qLCAuLi4qLykge30sXG4gIHZpc2l0VGFnOiBmdW5jdGlvbiAodGFnLyosIC4uLiovKSB7fSxcbiAgdmlzaXRPYmplY3Q6IGZ1bmN0aW9uIChvYmovKiwgLi4uKi8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG9iamVjdCBpbiBodG1sanM6IFwiICsgb2JqKTtcbiAgfSxcbiAgdmlzaXRGdW5jdGlvbjogZnVuY3Rpb24gKGZuLyosIC4uLiovKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBmdW5jdGlvbiBpbiBodG1sanM6IFwiICsgZm4pO1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zZm9ybWluZ1Zpc2l0b3IgPSBWaXNpdG9yLmV4dGVuZCgpO1xuVHJhbnNmb3JtaW5nVmlzaXRvci5kZWYoe1xuICB2aXNpdE51bGw6IElERU5USVRZLFxuICB2aXNpdFByaW1pdGl2ZTogSURFTlRJVFksXG4gIHZpc2l0QXJyYXk6IGZ1bmN0aW9uIChhcnJheSwgLi4uYXJncykge1xuICAgIHZhciByZXN1bHQgPSBhcnJheTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgb2xkSXRlbSA9IGFycmF5W2ldO1xuICAgICAgdmFyIG5ld0l0ZW0gPSB0aGlzLnZpc2l0KG9sZEl0ZW0sIC4uLmFyZ3MpO1xuICAgICAgaWYgKG5ld0l0ZW0gIT09IG9sZEl0ZW0pIHtcbiAgICAgICAgLy8gY29weSBgYXJyYXlgIG9uIHdyaXRlXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGFycmF5KVxuICAgICAgICAgIHJlc3VsdCA9IGFycmF5LnNsaWNlKCk7XG4gICAgICAgIHJlc3VsdFtpXSA9IG5ld0l0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIHZpc2l0Q29tbWVudDogSURFTlRJVFksXG4gIHZpc2l0Q2hhclJlZjogSURFTlRJVFksXG4gIHZpc2l0UmF3OiBJREVOVElUWSxcbiAgdmlzaXRPYmplY3Q6IGZ1bmN0aW9uKG9iaiwgLi4uYXJncyl7XG4gICAgLy8gRG9uJ3QgcGFyc2UgTWFya2Rvd24gJiBSQ0RhdGEgYXMgSFRNTFxuICAgIGlmIChvYmoudGV4dE1vZGUgIT0gbnVsbCl7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoJ2NvbnRlbnQnIGluIG9iaikge1xuICAgICAgb2JqLmNvbnRlbnQgPSB0aGlzLnZpc2l0KG9iai5jb250ZW50LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgaWYgKCdlbHNlQ29udGVudCcgaW4gb2JqKXtcbiAgICAgIG9iai5lbHNlQ29udGVudCA9IHRoaXMudmlzaXQob2JqLmVsc2VDb250ZW50LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgdmlzaXRGdW5jdGlvbjogSURFTlRJVFksXG4gIHZpc2l0VGFnOiBmdW5jdGlvbiAodGFnLCAuLi5hcmdzKSB7XG4gICAgdmFyIG9sZENoaWxkcmVuID0gdGFnLmNoaWxkcmVuO1xuICAgIHZhciBuZXdDaGlsZHJlbiA9IHRoaXMudmlzaXRDaGlsZHJlbihvbGRDaGlsZHJlbiwgLi4uYXJncyk7XG5cbiAgICB2YXIgb2xkQXR0cnMgPSB0YWcuYXR0cnM7XG4gICAgdmFyIG5ld0F0dHJzID0gdGhpcy52aXNpdEF0dHJpYnV0ZXMob2xkQXR0cnMsIC4uLmFyZ3MpO1xuXG4gICAgaWYgKG5ld0F0dHJzID09PSBvbGRBdHRycyAmJiBuZXdDaGlsZHJlbiA9PT0gb2xkQ2hpbGRyZW4pXG4gICAgICByZXR1cm4gdGFnO1xuXG4gICAgdmFyIG5ld1RhZyA9IGdldFRhZyh0YWcudGFnTmFtZSkuYXBwbHkobnVsbCwgbmV3Q2hpbGRyZW4pO1xuICAgIG5ld1RhZy5hdHRycyA9IG5ld0F0dHJzO1xuICAgIHJldHVybiBuZXdUYWc7XG4gIH0sXG4gIHZpc2l0Q2hpbGRyZW46IGZ1bmN0aW9uIChjaGlsZHJlbiwgLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QXJyYXkoY2hpbGRyZW4sIC4uLmFyZ3MpO1xuICB9LFxuICAvLyBUcmFuc2Zvcm0gdGhlIGAuYXR0cnNgIHByb3BlcnR5IG9mIGEgdGFnLCB3aGljaCBtYXkgYmUgYSBkaWN0aW9uYXJ5LFxuICAvLyBhbiBhcnJheSwgb3IgaW4gc29tZSB1c2VzLCBhIGZvcmVpZ24gb2JqZWN0IChzdWNoIGFzXG4gIC8vIGEgdGVtcGxhdGUgdGFnKS5cbiAgdmlzaXRBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cnMsIC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNBcnJheShhdHRycykpIHtcbiAgICAgIHZhciByZXN1bHQgPSBhdHRycztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9sZEl0ZW0gPSBhdHRyc1tpXTtcbiAgICAgICAgdmFyIG5ld0l0ZW0gPSB0aGlzLnZpc2l0QXR0cmlidXRlcyhvbGRJdGVtLCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKG5ld0l0ZW0gIT09IG9sZEl0ZW0pIHtcbiAgICAgICAgICAvLyBjb3B5IG9uIHdyaXRlXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gYXR0cnMpXG4gICAgICAgICAgICByZXN1bHQgPSBhdHRycy5zbGljZSgpO1xuICAgICAgICAgIHJlc3VsdFtpXSA9IG5ld0l0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzICYmIGlzQ29uc3RydWN0ZWRPYmplY3QoYXR0cnMpKSB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3luY2hyb25vdXMgZHluYW1pYyBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkLiBVc2UgI2xldCB0byB1bndyYXAgdGhlbSBmaXJzdC4nKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGJhc2ljIFRyYW5zZm9ybWluZ1Zpc2l0b3IgZG9lcyBub3Qgc3VwcG9ydCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb3JlaWduIG9iamVjdHMgaW4gYXR0cmlidXRlcy4gIERlZmluZSBhIGN1c3RvbSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpdEF0dHJpYnV0ZXMgZm9yIHRoaXMgY2FzZS5cIik7XG4gICAgfVxuXG4gICAgdmFyIG9sZEF0dHJzID0gYXR0cnM7XG4gICAgdmFyIG5ld0F0dHJzID0gb2xkQXR0cnM7XG4gICAgaWYgKG9sZEF0dHJzKSB7XG4gICAgICB2YXIgYXR0ckFyZ3MgPSBbbnVsbCwgbnVsbF07XG4gICAgICBhdHRyQXJncy5wdXNoLmFwcGx5KGF0dHJBcmdzLCBhcmd1bWVudHMpO1xuICAgICAgZm9yICh2YXIgayBpbiBvbGRBdHRycykge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBvbGRBdHRyc1trXTtcbiAgICAgICAgYXR0ckFyZ3NbMF0gPSBrO1xuICAgICAgICBhdHRyQXJnc1sxXSA9IG9sZFZhbHVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZpc2l0QXR0cmlidXRlLmFwcGx5KHRoaXMsIGF0dHJBcmdzKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNvcHkgb24gd3JpdGVcbiAgICAgICAgICBpZiAobmV3QXR0cnMgPT09IG9sZEF0dHJzKVxuICAgICAgICAgICAgbmV3QXR0cnMgPSBfYXNzaWduKHt9LCBvbGRBdHRycyk7XG4gICAgICAgICAgbmV3QXR0cnNba10gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdBdHRycztcbiAgfSxcbiAgLy8gVHJhbnNmb3JtIHRoZSB2YWx1ZSBvZiBvbmUgYXR0cmlidXRlIG5hbWUvdmFsdWUgaW4gYW5cbiAgLy8gYXR0cmlidXRlcyBkaWN0aW9uYXJ5LlxuICB2aXNpdEF0dHJpYnV0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCB0YWcsIC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdCh2YWx1ZSwgLi4uYXJncyk7XG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBUb1RleHRWaXNpdG9yID0gVmlzaXRvci5leHRlbmQoKTtcblRvVGV4dFZpc2l0b3IuZGVmKHtcbiAgdmlzaXROdWxsOiBmdW5jdGlvbiAobnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9LFxuICB2aXNpdFByaW1pdGl2ZTogZnVuY3Rpb24gKHN0cmluZ0Jvb2xlYW5Pck51bWJlcikge1xuICAgIHZhciBzdHIgPSBTdHJpbmcoc3RyaW5nQm9vbGVhbk9yTnVtYmVyKTtcbiAgICBpZiAodGhpcy50ZXh0TW9kZSA9PT0gVEVYVE1PREUuUkNEQVRBKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXh0TW9kZSA9PT0gVEVYVE1PREUuQVRUUklCVVRFKSB7XG4gICAgICAvLyBlc2NhcGUgYCZgIGFuZCBgXCJgIHRoaXMgdGltZSwgbm90IGAmYCBhbmQgYDxgXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfSxcbiAgdmlzaXRBcnJheTogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcbiAgICAgIHBhcnRzLnB1c2godGhpcy52aXNpdChhcnJheVtpXSkpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgfSxcbiAgdmlzaXRDb21tZW50OiBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGhhdmUgYSBjb21tZW50IGhlcmVcIik7XG4gIH0sXG4gIHZpc2l0Q2hhclJlZjogZnVuY3Rpb24gKGNoYXJSZWYpIHtcbiAgICBpZiAodGhpcy50ZXh0TW9kZSA9PT0gVEVYVE1PREUuUkNEQVRBIHx8XG4gICAgICAgIHRoaXMudGV4dE1vZGUgPT09IFRFWFRNT0RFLkFUVFJJQlVURSkge1xuICAgICAgcmV0dXJuIGNoYXJSZWYuaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoYXJSZWYuc3RyO1xuICAgIH1cbiAgfSxcbiAgdmlzaXRSYXc6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICByZXR1cm4gcmF3LnZhbHVlO1xuICB9LFxuICB2aXNpdFRhZzogZnVuY3Rpb24gKHRhZykge1xuICAgIC8vIFJlYWxseSB3ZSBzaG91bGQganVzdCBkaXNhbGxvdyBUYWdzIGhlcmUuICBIb3dldmVyLCBhdCB0aGVcbiAgICAvLyBtb21lbnQgaXQncyB1c2VmdWwgdG8gc3RyaW5naWZ5IGFueSBIVE1MIHdlIGZpbmQuICBJblxuICAgIC8vIHBhcnRpY3VsYXIsIHdoZW4geW91IGluY2x1ZGUgYSB0ZW1wbGF0ZSB3aXRoaW4gYHt7I21hcmtkb3dufX1gLFxuICAgIC8vIHdlIHJlbmRlciB0aGUgdGVtcGxhdGUgYXMgdGV4dCwgYW5kIHNpbmNlIHRoZXJlJ3MgY3VycmVudGx5XG4gICAgLy8gbm8gd2F5IHRvIG1ha2UgdGhlIHRlbXBsYXRlIGJlICpwYXJzZWQqIGFzIHRleHQgKGUuZy4gYDx0ZW1wbGF0ZVxuICAgIC8vIHR5cGU9XCJ0ZXh0XCI+YCksIHdlIGhhY2tpc2hseSBzdXBwb3J0IEhUTUwgdGFncyBpbiBtYXJrZG93blxuICAgIC8vIGluIHRlbXBsYXRlcyBieSBwYXJzaW5nIHRoZW0gYW5kIHN0cmluZ2lmeWluZyB0aGVtLlxuICAgIHJldHVybiB0aGlzLnZpc2l0KHRoaXMudG9IVE1MKHRhZykpO1xuICB9LFxuICB2aXNpdE9iamVjdDogZnVuY3Rpb24gKHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG9iamVjdCBpbiBodG1sanMgaW4gdG9UZXh0OiBcIiArIHgpO1xuICB9LFxuICB0b0hUTUw6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIHRvSFRNTChub2RlKTtcbiAgfVxufSk7XG5cblxuXG5leHBvcnQgY29uc3QgVG9IVE1MVmlzaXRvciA9IFZpc2l0b3IuZXh0ZW5kKCk7XG5Ub0hUTUxWaXNpdG9yLmRlZih7XG4gIHZpc2l0TnVsbDogZnVuY3Rpb24gKG51bGxPclVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfSxcbiAgdmlzaXRQcmltaXRpdmU6IGZ1bmN0aW9uIChzdHJpbmdCb29sZWFuT3JOdW1iZXIpIHtcbiAgICB2YXIgc3RyID0gU3RyaW5nKHN0cmluZ0Jvb2xlYW5Pck51bWJlcik7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgfSxcbiAgdmlzaXRBcnJheTogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcbiAgICAgIHBhcnRzLnB1c2godGhpcy52aXNpdChhcnJheVtpXSkpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgfSxcbiAgdmlzaXRDb21tZW50OiBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgIHJldHVybiAnPCEtLScgKyBjb21tZW50LnNhbml0aXplZFZhbHVlICsgJy0tPic7XG4gIH0sXG4gIHZpc2l0Q2hhclJlZjogZnVuY3Rpb24gKGNoYXJSZWYpIHtcbiAgICByZXR1cm4gY2hhclJlZi5odG1sO1xuICB9LFxuICB2aXNpdFJhdzogZnVuY3Rpb24gKHJhdykge1xuICAgIHJldHVybiByYXcudmFsdWU7XG4gIH0sXG4gIHZpc2l0VGFnOiBmdW5jdGlvbiAodGFnKSB7XG4gICAgdmFyIGF0dHJTdHJzID0gW107XG5cbiAgICB2YXIgdGFnTmFtZSA9IHRhZy50YWdOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IHRhZy5jaGlsZHJlbjtcblxuICAgIHZhciBhdHRycyA9IHRhZy5hdHRycztcbiAgICBpZiAoYXR0cnMpIHtcbiAgICAgIGF0dHJzID0gZmxhdHRlbkF0dHJpYnV0ZXMoYXR0cnMpO1xuICAgICAgZm9yICh2YXIgayBpbiBhdHRycykge1xuICAgICAgICBpZiAoayA9PT0gJ3ZhbHVlJyAmJiB0YWdOYW1lID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBbYXR0cnNba10sIGNoaWxkcmVuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdiA9IHRoaXMudG9UZXh0KGF0dHJzW2tdLCBURVhUTU9ERS5BVFRSSUJVVEUpO1xuICAgICAgICAgIGF0dHJTdHJzLnB1c2goJyAnICsgayArICc9XCInICsgdiArICdcIicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0VGFnID0gJzwnICsgdGFnTmFtZSArIGF0dHJTdHJzLmpvaW4oJycpICsgJz4nO1xuXG4gICAgdmFyIGNoaWxkU3RycyA9IFtdO1xuICAgIHZhciBjb250ZW50O1xuICAgIGlmICh0YWdOYW1lID09PSAndGV4dGFyZWEnKSB7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXG4gICAgICAgIGNoaWxkU3Rycy5wdXNoKHRoaXMudG9UZXh0KGNoaWxkcmVuW2ldLCBURVhUTU9ERS5SQ0RBVEEpKTtcblxuICAgICAgY29udGVudCA9IGNoaWxkU3Rycy5qb2luKCcnKTtcbiAgICAgIGlmIChjb250ZW50LnNsaWNlKDAsIDEpID09PSAnXFxuJylcbiAgICAgICAgLy8gVEVYVEFSRUEgd2lsbCBhYnNvcmIgYSBuZXdsaW5lLCBzbyBpZiB3ZSBzZWUgb25lLCBhZGRcbiAgICAgICAgLy8gYW5vdGhlciBvbmUuXG4gICAgICAgIGNvbnRlbnQgPSAnXFxuJyArIGNvbnRlbnQ7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcbiAgICAgICAgY2hpbGRTdHJzLnB1c2godGhpcy52aXNpdChjaGlsZHJlbltpXSkpO1xuXG4gICAgICBjb250ZW50ID0gY2hpbGRTdHJzLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBzdGFydFRhZyArIGNvbnRlbnQ7XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoIHx8ICEgaXNWb2lkRWxlbWVudCh0YWdOYW1lKSkge1xuICAgICAgLy8gXCJWb2lkXCIgZWxlbWVudHMgbGlrZSBCUiBhcmUgdGhlIG9ubHkgb25lcyB0aGF0IGRvbid0IGdldCBhIGNsb3NlXG4gICAgICAvLyB0YWcgaW4gSFRNTDUuICBUaGV5IHNob3VsZG4ndCBoYXZlIGNvbnRlbnRzLCBlaXRoZXIsIHNvIHdlIGNvdWxkXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciB1cG9uIHNlZWluZyBjb250ZW50cyBoZXJlLlxuICAgICAgcmVzdWx0ICs9ICc8LycgKyB0YWdOYW1lICsgJz4nO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIHZpc2l0T2JqZWN0OiBmdW5jdGlvbiAoeCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgb2JqZWN0IGluIGh0bWxqcyBpbiB0b0hUTUw6IFwiICsgeCk7XG4gIH0sXG4gIHRvVGV4dDogZnVuY3Rpb24gKG5vZGUsIHRleHRNb2RlKSB7XG4gICAgcmV0dXJuIHRvVGV4dChub2RlLCB0ZXh0TW9kZSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFRPSFRNTFxuXG5leHBvcnQgZnVuY3Rpb24gdG9IVE1MKGNvbnRlbnQpIHtcbiAgcmV0dXJuIChuZXcgVG9IVE1MVmlzaXRvcikudmlzaXQoY29udGVudCk7XG59XG5cbi8vIEVzY2FwaW5nIG1vZGVzIGZvciBvdXRwdXR0aW5nIHRleHQgd2hlbiBnZW5lcmF0aW5nIEhUTUwuXG5leHBvcnQgY29uc3QgVEVYVE1PREUgPSB7XG4gIFNUUklORzogMSxcbiAgUkNEQVRBOiAyLFxuICBBVFRSSUJVVEU6IDNcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dChjb250ZW50LCB0ZXh0TW9kZSkge1xuICBpZiAoISB0ZXh0TW9kZSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0ZXh0TW9kZSByZXF1aXJlZCBmb3IgSFRNTC50b1RleHRcIik7XG4gIGlmICghICh0ZXh0TW9kZSA9PT0gVEVYVE1PREUuU1RSSU5HIHx8XG4gICAgICAgICB0ZXh0TW9kZSA9PT0gVEVYVE1PREUuUkNEQVRBIHx8XG4gICAgICAgICB0ZXh0TW9kZSA9PT0gVEVYVE1PREUuQVRUUklCVVRFKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHRleHRNb2RlOiBcIiArIHRleHRNb2RlKTtcblxuICB2YXIgdmlzaXRvciA9IG5ldyBUb1RleHRWaXNpdG9yKHt0ZXh0TW9kZTogdGV4dE1vZGV9KTtcbiAgcmV0dXJuIHZpc2l0b3IudmlzaXQoY29udGVudCk7XG59XG4iXX0=
