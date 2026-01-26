(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;
var Util = Package['meteorspark:util'].Util;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var globals, TAPi18next, __coffeescriptShare, TAPi18n;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/globals.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// The globals object will be accessible to the build plugin, the server and
// the client

globals = {
  fallback_language: "en",
  langauges_tags_regex: "([a-z]{2})(-[A-Z]{2})?",
  project_translations_domain: "project",
  browser_path: "/tap-i18n",
  debug: false
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18next/tap_i18next-1.7.3.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// tap_i18next is a copy of i18next that expose i18next to the global namespace
// under the name name TAPi18next instead of i18n to (1) avoid interfering with other
// Meteor packages that might use i18n with different configurations than we do
// or worse - (2) using a different version of i18next
//
// setJqueryExt is disabled by default in TAPi18next
// sprintf is a default postProcess in TAPi18next
//
// TAPi18next is set outside of the singleton builder to make it available in the
// package level

// i18next, v1.7.3
// Copyright (c)2014 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com

// set TAPi18next outside of the singleton builder to make it available in the package level
TAPi18next = {};
(function() {

    // add indexOf to non ECMA-262 standard compliant browsers
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                if (n != n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }
    
    // add lastIndexOf to non ECMA-262 standard compliant browsers
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = len;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) {
                    n = 0;
                } else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);
            for (; k >= 0; k--) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        };
    }
    
    // Add string trim for IE8.
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, ''); 
        }
    }

    var root = this
      , $ = root.jQuery || root.Zepto
      , resStore = {}
      , currentLng
      , replacementCounter = 0
      , languages = []
      , initialized = false;


    // Export the i18next object for **CommonJS**. 
    // If we're not in CommonJS, add `i18n` to the
    // global object or to jquery.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TAPi18next;
    } else {
        if ($) {
            $.TAPi18next = $.TAPi18next || TAPi18next;
        }
        
        root.TAPi18next = root.TAPi18next || TAPi18next;
    }
    // defaults
    var o = {
        lng: undefined,
        load: 'all',
        preload: [],
        lowerCaseLng: false,
        returnObjectTrees: false,
        fallbackLng: ['dev'],
        fallbackNS: [],
        detectLngQS: 'setLng',
        ns: 'translation',
        fallbackOnNull: true,
        fallbackOnEmpty: false,
        fallbackToDefaultNS: false,
        nsseparator: ':',
        keyseparator: '.',
        selectorAttr: 'data-i18n',
        debug: false,
        
        resGetPath: 'locales/__lng__/__ns__.json',
        resPostPath: 'locales/add/__lng__/__ns__',
    
        getAsync: true,
        postAsync: true,
    
        resStore: undefined,
        useLocalStorage: false,
        localStorageExpirationTime: 7*24*60*60*1000,
    
        dynamicLoad: false,
        sendMissing: false,
        sendMissingTo: 'fallback', // current | all
        sendType: 'POST',
    
        interpolationPrefix: '__',
        interpolationSuffix: '__',
        reusePrefix: '$t(',
        reuseSuffix: ')',
        pluralSuffix: '_plural',
        pluralNotFound: ['plural_not_found', Math.random()].join(''),
        contextNotFound: ['context_not_found', Math.random()].join(''),
        escapeInterpolation: false,
    
        setJqueryExt: false,
        defaultValueFromContent: true,
        useDataAttrOptions: false,
        cookieExpirationTime: undefined,
        useCookie: true,
        cookieName: 'TAPi18next',
        cookieDomain: undefined,
    
        objectTreeKeyHandler: undefined,
        postProcess: ["sprintf"],
        parseMissingKey: undefined,
    
        shortcutFunction: 'sprintf' // or: defaultValue
    };
    function _extend(target, source) {
        if (!source || typeof source === 'function') {
            return target;
        }
    
        for (var attr in source) { target[attr] = source[attr]; }
        return target;
    }
    
    function _each(object, callback, args) {
        var name, i = 0,
            length = object.length,
            isObj = length === undefined || Object.prototype.toString.apply(object) !== '[object Array]' || typeof object === "function";
    
        if (args) {
            if (isObj) {
                for (name in object) {
                    if (callback.apply(object[name], args) === false) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if (callback.apply(object[i++], args) === false) {
                        break;
                    }
                }
            }
    
        // A special, fast, case for the most common use of each
        } else {
            if (isObj) {
                for (name in object) {
                    if (callback.call(object[name], name, object[name]) === false) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if (callback.call(object[i], i, object[i++]) === false) {
                        break;
                    }
                }
            }
        }
    
        return object;
    }
    
    var _entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    
    function _escape(data) {
        if (typeof data === 'string') {
            return data.replace(/[&<>"'\/]/g, function (s) {
                return _entityMap[s];
            });
        }else{
            return data;
        }
    }
    
    function _ajax(options) {
    
        // v0.5.0 of https://github.com/goloroden/http.js
        var getXhr = function (callback) {
            // Use the native XHR object if the browser supports it.
            if (window.XMLHttpRequest) {
                return callback(null, new XMLHttpRequest());
            } else if (window.ActiveXObject) {
                // In Internet Explorer check for ActiveX versions of the XHR object.
                try {
                    return callback(null, new ActiveXObject("Msxml2.XMLHTTP"));
                } catch (e) {
                    return callback(null, new ActiveXObject("Microsoft.XMLHTTP"));
                }
            }
    
            // If no XHR support was found, throw an error.
            return callback(new Error());
        };
    
        var encodeUsingUrlEncoding = function (data) {
            if(typeof data === 'string') {
                return data;
            }
    
            var result = [];
            for(var dataItem in data) {
                if(data.hasOwnProperty(dataItem)) {
                    result.push(encodeURIComponent(dataItem) + '=' + encodeURIComponent(data[dataItem]));
                }
            }
    
            return result.join('&');
        };
    
        var utf8 = function (text) {
            text = text.replace(/\r\n/g, '\n');
            var result = '';
    
            for(var i = 0; i < text.length; i++) {
                var c = text.charCodeAt(i);
    
                if(c < 128) {
                        result += String.fromCharCode(c);
                } else if((c > 127) && (c < 2048)) {
                        result += String.fromCharCode((c >> 6) | 192);
                        result += String.fromCharCode((c & 63) | 128);
                } else {
                        result += String.fromCharCode((c >> 12) | 224);
                        result += String.fromCharCode(((c >> 6) & 63) | 128);
                        result += String.fromCharCode((c & 63) | 128);
                }
            }
    
            return result;
        };
    
        var base64 = function (text) {
            var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    
            text = utf8(text);
            var result = '',
                    chr1, chr2, chr3,
                    enc1, enc2, enc3, enc4,
                    i = 0;
    
            do {
                chr1 = text.charCodeAt(i++);
                chr2 = text.charCodeAt(i++);
                chr3 = text.charCodeAt(i++);
    
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
    
                if(isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if(isNaN(chr3)) {
                    enc4 = 64;
                }
    
                result +=
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = '';
                enc1 = enc2 = enc3 = enc4 = '';
            } while(i < text.length);
    
            return result;
        };
    
        var mergeHeaders = function () {
            // Use the first header object as base.
            var result = arguments[0];
    
            // Iterate through the remaining header objects and add them.
            for(var i = 1; i < arguments.length; i++) {
                var currentHeaders = arguments[i];
                for(var header in currentHeaders) {
                    if(currentHeaders.hasOwnProperty(header)) {
                        result[header] = currentHeaders[header];
                    }
                }
            }
    
            // Return the merged headers.
            return result;
        };
    
        var ajax = function (method, url, options, callback) {
            // Adjust parameters.
            if(typeof options === 'function') {
                callback = options;
                options = {};
            }
    
            // Set default parameter values.
            options.cache = options.cache || false;
            options.data = options.data || {};
            options.headers = options.headers || {};
            options.jsonp = options.jsonp || false;
            options.async = options.async === undefined ? true : options.async;
    
            // Merge the various header objects.
            var headers = mergeHeaders({
                'accept': '*/*',
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }, ajax.headers, options.headers);
    
            // Encode the data according to the content-type.
            var payload;
            if (headers['content-type'] === 'application/json') {
                payload = JSON.stringify(options.data);
            } else {
                payload = encodeUsingUrlEncoding(options.data);
            }
    
            // Specially prepare GET requests: Setup the query string, handle caching and make a JSONP call
            // if neccessary.
            if(method === 'GET') {
                // Setup the query string.
                var queryString = [];
                if(payload) {
                    queryString.push(payload);
                    payload = null;
                }
    
                // Handle caching.
                if(!options.cache) {
                    queryString.push('_=' + (new Date()).getTime());
                }
    
                // If neccessary prepare the query string for a JSONP call.
                if(options.jsonp) {
                    queryString.push('callback=' + options.jsonp);
                    queryString.push('jsonp=' + options.jsonp);
                }
    
                // Merge the query string and attach it to the url.
                queryString = queryString.join('&');
                if (queryString.length > 1) {
                    if (url.indexOf('?') > -1) {
                        url += '&' + queryString;
                    } else {
                        url += '?' + queryString;
                    }
                }
    
                // Make a JSONP call if neccessary.
                if(options.jsonp) {
                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = url;
                    head.appendChild(script);
                    return;
                }
            }
    
            // Since we got here, it is no JSONP request, so make a normal XHR request.
            getXhr(function (err, xhr) {
                if(err) return callback(err);
    
                // Open the request.
                xhr.open(method, url, options.async);
    
                // Set the request headers.
                for(var header in headers) {
                    if(headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header, headers[header]);
                    }
                }
    
                // Handle the request events.
                xhr.onreadystatechange = function () {
                    if(xhr.readyState === 4) {
                        var data = xhr.responseText || '';
    
                        // If no callback is given, return.
                        if(!callback) {
                            return;
                        }
    
                        // Return an object that provides access to the data as text and JSON.
                        callback(xhr.status, {
                            text: function () {
                                return data;
                            },
    
                            json: function () {
                                return JSON.parse(data);
                            }
                        });
                    }
                };
    
                // Actually send the XHR request.
                xhr.send(payload);
            });
        };
    
        // Define the external interface.
        var http = {
            authBasic: function (username, password) {
                ajax.headers['Authorization'] = 'Basic ' + base64(username + ':' + password);
            },
    
            connect: function (url, options, callback) {
                return ajax('CONNECT', url, options, callback);
            },
    
            del: function (url, options, callback) {
                return ajax('DELETE', url, options, callback);
            },
    
            get: function (url, options, callback) {
                return ajax('GET', url, options, callback);
            },
    
            head: function (url, options, callback) {
                return ajax('HEAD', url, options, callback);
            },
    
            headers: function (headers) {
                ajax.headers = headers || {};
            },
    
            isAllowed: function (url, verb, callback) {
                this.options(url, function (status, data) {
                    callback(data.text().indexOf(verb) !== -1);
                });
            },
    
            options: function (url, options, callback) {
                return ajax('OPTIONS', url, options, callback);
            },
    
            patch: function (url, options, callback) {
                return ajax('PATCH', url, options, callback);
            },
    
            post: function (url, options, callback) {
                return ajax('POST', url, options, callback);
            },
    
            put: function (url, options, callback) {
                return ajax('PUT', url, options, callback);
            },
    
            trace: function (url, options, callback) {
                return ajax('TRACE', url, options, callback);
            }
        };
    
    
        var methode = options.type ? options.type.toLowerCase() : 'get';
    
        http[methode](options.url, options, function (status, data) {
            if (status === 200) {
                options.success(data.json(), status, null);
            } else {
                options.error(data.text(), status, null);
            }
        });
    }
    
    var _cookie = {
        create: function(name,value,minutes,domain) {
            var expires;
            if (minutes) {
                var date = new Date();
                date.setTime(date.getTime()+(minutes*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            else expires = "";
            domain = (domain)? "domain="+domain+";" : "";
            document.cookie = name+"="+value+expires+";"+domain+"path=/";
        },
    
        read: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },
    
        remove: function(name) {
            this.create(name,"",-1);
        }
    };
    
    var cookie_noop = {
        create: function(name,value,minutes,domain) {},
        read: function(name) { return null; },
        remove: function(name) {}
    };
    
    
    
    // move dependent functions to a container so that
    // they can be overriden easier in no jquery environment (node.js)
    var f = {
        extend: $ ? $.extend : _extend,
        each: $ ? $.each : _each,
        ajax: $ ? $.ajax : (typeof document !== 'undefined' ? _ajax : function() {}),
        cookie: typeof document !== 'undefined' ? _cookie : cookie_noop,
        detectLanguage: detectLanguage,
        escape: _escape,
        log: function(str) {
            if (o.debug && typeof console !== "undefined") console.log(str);
        },
        toLanguages: function(lng) {
            var languages = [];
            if (typeof lng === 'string' && lng.indexOf('-') > -1) {
                var parts = lng.split('-');
    
                lng = o.lowerCaseLng ?
                    parts[0].toLowerCase() +  '-' + parts[1].toLowerCase() :
                    parts[0].toLowerCase() +  '-' + parts[1].toUpperCase();
    
                if (o.load !== 'unspecific') languages.push(lng);
                if (o.load !== 'current') languages.push(parts[0]);
            } else {
                languages.push(lng);
            }
    
            for (var i = 0; i < o.fallbackLng.length; i++) {
                if (languages.indexOf(o.fallbackLng[i]) === -1 && o.fallbackLng[i]) languages.push(o.fallbackLng[i]);
            }
    
            return languages;
        },
        regexEscape: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
    };
    function init(options, cb) {
        
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        options = options || {};
        
        // override defaults with passed in options
        f.extend(o, options);
        delete o.fixLng; /* passed in each time */
    
        // create namespace object if namespace is passed in as string
        if (typeof o.ns == 'string') {
            o.ns = { namespaces: [o.ns], defaultNs: o.ns};
        }
    
        // fallback namespaces
        if (typeof o.fallbackNS == 'string') {
            o.fallbackNS = [o.fallbackNS];
        }
    
        // fallback languages
        if (typeof o.fallbackLng == 'string' || typeof o.fallbackLng == 'boolean') {
            o.fallbackLng = [o.fallbackLng];
        }
    
        // escape prefix/suffix
        o.interpolationPrefixEscaped = f.regexEscape(o.interpolationPrefix);
        o.interpolationSuffixEscaped = f.regexEscape(o.interpolationSuffix);
    
        if (!o.lng) o.lng = f.detectLanguage(); 
        if (o.lng) {
            // set cookie with lng set (as detectLanguage will set cookie on need)
            if (o.useCookie) f.cookie.create(o.cookieName, o.lng, o.cookieExpirationTime, o.cookieDomain);
        } else {
            o.lng =  o.fallbackLng[0];
            if (o.useCookie) f.cookie.remove(o.cookieName);
        }
    
        languages = f.toLanguages(o.lng);
        currentLng = languages[0];
        f.log('currentLng set to: ' + currentLng);
    
        var lngTranslate = translate;
        if (options.fixLng) {
            lngTranslate = function(key, options) {
                if (typeof options !== "undefined") {
                    options = Object.create(options);
                } else {
                    options = {};
                }
                
                options.lng = options.lng || lngTranslate.lng;
                return translate(key, options);
            };
            lngTranslate.lng = currentLng;
        }
    
        pluralExtensions.setCurrentLng(currentLng);
    
        // add JQuery extensions
        if ($ && o.setJqueryExt) addJqueryFunct();
    
        // jQuery deferred
        var deferred;
        if ($ && $.Deferred) {
            deferred = $.Deferred();
        }
    
        // return immidiatly if res are passed in
        if (o.resStore) {
            resStore = o.resStore;
            initialized = true;
            if (cb) cb(lngTranslate);
            if (deferred) deferred.resolve(lngTranslate);
            if (deferred) return deferred.promise();
            return;
        }
    
        // languages to load
        var lngsToLoad = f.toLanguages(o.lng);
        if (typeof o.preload === 'string') o.preload = [o.preload];
        for (var i = 0, l = o.preload.length; i < l; i++) {
            var pres = f.toLanguages(o.preload[i]);
            for (var y = 0, len = pres.length; y < len; y++) {
                if (lngsToLoad.indexOf(pres[y]) < 0) {
                    lngsToLoad.push(pres[y]);
                }
            }
        }
    
        // else load them
        TAPi18next.sync.load(lngsToLoad, o, function(err, store) {
            resStore = store;
            initialized = true;
    
            if (cb) cb(lngTranslate);
            if (deferred) deferred.resolve(lngTranslate);
        });
    
        if (deferred) return deferred.promise();
    }
    function preload(lngs, cb) {
        if (typeof lngs === 'string') lngs = [lngs];
        for (var i = 0, l = lngs.length; i < l; i++) {
            if (o.preload.indexOf(lngs[i]) < 0) {
                o.preload.push(lngs[i]);
            }
        }
        return init(cb);
    }
    
    function addResourceBundle(lng, ns, resources) {
        if (typeof ns !== 'string') {
            resources = ns;
            ns = o.ns.defaultNs;
        } else if (o.ns.namespaces.indexOf(ns) < 0) {
            o.ns.namespaces.push(ns);
        }
    
        resStore[lng] = resStore[lng] || {};
        resStore[lng][ns] = resStore[lng][ns] || {};
    
        f.extend(resStore[lng][ns], resources);
    }
    
    function removeResourceBundle(lng, ns) {
        if (typeof ns !== 'string') {
            ns = o.ns.defaultNs;
        }
    
        resStore[lng] = resStore[lng] || {};
        resStore[lng][ns] = {};
    }
    
    function setDefaultNamespace(ns) {
        o.ns.defaultNs = ns;
    }
    
    function loadNamespace(namespace, cb) {
        loadNamespaces([namespace], cb);
    }
    
    function loadNamespaces(namespaces, cb) {
        var opts = {
            dynamicLoad: o.dynamicLoad,
            resGetPath: o.resGetPath,
            getAsync: o.getAsync,
            customLoad: o.customLoad,
            ns: { namespaces: namespaces, defaultNs: ''} /* new namespaces to load */
        };
    
        // languages to load
        var lngsToLoad = f.toLanguages(o.lng);
        if (typeof o.preload === 'string') o.preload = [o.preload];
        for (var i = 0, l = o.preload.length; i < l; i++) {
            var pres = f.toLanguages(o.preload[i]);
            for (var y = 0, len = pres.length; y < len; y++) {
                if (lngsToLoad.indexOf(pres[y]) < 0) {
                    lngsToLoad.push(pres[y]);
                }
            }
        }
    
        // check if we have to load
        var lngNeedLoad = [];
        for (var a = 0, lenA = lngsToLoad.length; a < lenA; a++) {
            var needLoad = false;
            var resSet = resStore[lngsToLoad[a]];
            if (resSet) {
                for (var b = 0, lenB = namespaces.length; b < lenB; b++) {
                    if (!resSet[namespaces[b]]) needLoad = true;
                }
            } else {
                needLoad = true;
            }
    
            if (needLoad) lngNeedLoad.push(lngsToLoad[a]);
        }
    
        if (lngNeedLoad.length) {
            TAPi18next.sync._fetch(lngNeedLoad, opts, function(err, store) {
                var todo = namespaces.length * lngNeedLoad.length;
    
                // load each file individual
                f.each(namespaces, function(nsIndex, nsValue) {
    
                    // append namespace to namespace array
                    if (o.ns.namespaces.indexOf(nsValue) < 0) {
                        o.ns.namespaces.push(nsValue);
                    }
    
                    f.each(lngNeedLoad, function(lngIndex, lngValue) {
                        resStore[lngValue] = resStore[lngValue] || {};
                        resStore[lngValue][nsValue] = store[lngValue][nsValue];
    
                        todo--; // wait for all done befor callback
                        if (todo === 0 && cb) {
                            if (o.useLocalStorage) TAPi18next.sync._storeLocal(resStore);
                            cb();
                        }
                    });
                });
            });
        } else {
            if (cb) cb();
        }
    }
    
    function setLng(lng, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = {};
        } else if (!options) {
            options = {};
        }
    
        options.lng = lng;
        return init(options, cb);
    }
    
    function lng() {
        return currentLng;
    }
    function addJqueryFunct() {
        // $.t shortcut
        $.t = $.t || translate;
    
        function parse(ele, key, options) {
            if (key.length === 0) return;
    
            var attr = 'text';
    
            if (key.indexOf('[') === 0) {
                var parts = key.split(']');
                key = parts[1];
                attr = parts[0].substr(1, parts[0].length-1);
            }
    
            if (key.indexOf(';') === key.length-1) {
                key = key.substr(0, key.length-2);
            }
    
            var optionsToUse;
            if (attr === 'html') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.html($.t(key, optionsToUse));
            } else if (attr === 'text') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.text() }, options) : options;
                ele.text($.t(key, optionsToUse));
            } else if (attr === 'prepend') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.prepend($.t(key, optionsToUse));
            } else if (attr === 'append') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.append($.t(key, optionsToUse));
            } else if (attr.indexOf("data-") === 0) {
                var dataAttr = attr.substr(("data-").length);
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.data(dataAttr) }, options) : options;
                var translated = $.t(key, optionsToUse);
                //we change into the data cache
                ele.data(dataAttr, translated);
                //we change into the dom
                ele.attr(attr, translated);
            } else {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.attr(attr) }, options) : options;
                ele.attr(attr, $.t(key, optionsToUse));
            }
        }
    
        function localize(ele, options) {
            var key = ele.attr(o.selectorAttr);
            if (!key && typeof key !== 'undefined' && key !== false) key = ele.text() || ele.val();
            if (!key) return;
    
            var target = ele
              , targetSelector = ele.data("i18n-target");
            if (targetSelector) {
                target = ele.find(targetSelector) || ele;
            }
    
            if (!options && o.useDataAttrOptions === true) {
                options = ele.data("i18n-options");
            }
            options = options || {};
    
            if (key.indexOf(';') >= 0) {
                var keys = key.split(';');
    
                $.each(keys, function(m, k) {
                    if (k !== '') parse(target, k, options);
                });
    
            } else {
                parse(target, key, options);
            }
    
            if (o.useDataAttrOptions === true) ele.data("i18n-options", options);
        }
    
        // fn
        $.fn.TAPi18next = function (options) {
            return this.each(function() {
                // localize element itself
                localize($(this), options);
    
                // localize childs
                var elements =  $(this).find('[' + o.selectorAttr + ']');
                elements.each(function() { 
                    localize($(this), options);
                });
            });
        };
    }
    function applyReplacement(str, replacementHash, nestedKey, options) {
        if (!str) return str;
    
        options = options || replacementHash; // first call uses replacement hash combined with options
        if (str.indexOf(options.interpolationPrefix || o.interpolationPrefix) < 0) return str;
    
        var prefix = options.interpolationPrefix ? f.regexEscape(options.interpolationPrefix) : o.interpolationPrefixEscaped
          , suffix = options.interpolationSuffix ? f.regexEscape(options.interpolationSuffix) : o.interpolationSuffixEscaped
          , unEscapingSuffix = 'HTML'+suffix;
    
        f.each(replacementHash, function(key, value) {
            var nextKey = nestedKey ? nestedKey + o.keyseparator + key : key;
            if (typeof value === 'object' && value !== null) {
                str = applyReplacement(str, value, nextKey, options);
            } else {
                if (options.escapeInterpolation || o.escapeInterpolation) {
                    str = str.replace(new RegExp([prefix, nextKey, unEscapingSuffix].join(''), 'g'), value);
                    str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), f.escape(value));
                } else {
                    str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), value);
                }
                // str = options.escapeInterpolation;
            }
        });
        return str;
    }
    
    // append it to functions
    f.applyReplacement = applyReplacement;
    
    function applyReuse(translated, options) {
        var comma = ',';
        var options_open = '{';
        var options_close = '}';
    
        var opts = f.extend({}, options);
        delete opts.postProcess;
    
        while (translated.indexOf(o.reusePrefix) != -1) {
            replacementCounter++;
            if (replacementCounter > o.maxRecursion) { break; } // safety net for too much recursion
            var index_of_opening = translated.lastIndexOf(o.reusePrefix);
            var index_of_end_of_closing = translated.indexOf(o.reuseSuffix, index_of_opening) + o.reuseSuffix.length;
            var token = translated.substring(index_of_opening, index_of_end_of_closing);
            var token_without_symbols = token.replace(o.reusePrefix, '').replace(o.reuseSuffix, '');
    
    
            if (token_without_symbols.indexOf(comma) != -1) {
                var index_of_token_end_of_closing = token_without_symbols.indexOf(comma);
                if (token_without_symbols.indexOf(options_open, index_of_token_end_of_closing) != -1 && token_without_symbols.indexOf(options_close, index_of_token_end_of_closing) != -1) {
                    var index_of_opts_opening = token_without_symbols.indexOf(options_open, index_of_token_end_of_closing);
                    var index_of_opts_end_of_closing = token_without_symbols.indexOf(options_close, index_of_opts_opening) + options_close.length;
                    try {
                        opts = f.extend(opts, JSON.parse(token_without_symbols.substring(index_of_opts_opening, index_of_opts_end_of_closing)));
                        token_without_symbols = token_without_symbols.substring(0, index_of_token_end_of_closing);
                    } catch (e) {
                    }
                }
            }
    
            var translated_token = _translate(token_without_symbols, opts);
            translated = translated.replace(token, translated_token);
        }
        return translated;
    }
    
    function hasContext(options) {
        return (options.context && (typeof options.context == 'string' || typeof options.context == 'number'));
    }
    
    function needsPlural(options) {
        return (options.count !== undefined && typeof options.count != 'string' && options.count !== 1);
    }
    
    function exists(key, options) {
        options = options || {};
    
        var notFound = _getDefaultValue(key, options)
            , found = _find(key, options);
    
        return found !== undefined || found === notFound;
    }
    
    function translate(key, options) {
        if (typeof options === 'undefined') {
          options = {};
        }
    
        if (!initialized) {
            f.log('i18next not finished initialization. you might have called t function before loading resources finished.')
            return options.defaultValue || '';
        };
        replacementCounter = 0;
        return _translate.apply(null, arguments);
    }
    
    function _getDefaultValue(key, options) {
        return (options.defaultValue !== undefined) ? options.defaultValue : key;
    }
    
    function _injectSprintfProcessor() {
    
        var values = [];
    
        // mh: build array from second argument onwards
        for (var i = 1; i < arguments.length; i++) {
            values.push(arguments[i]);
        }
    
        return {
            postProcess: 'sprintf',
            sprintf:     values
        };
    }
    
    function _translate(potentialKeys, options) {
        if (typeof options !== "undefined" && options !== null && typeof options !== 'object') {
            if (o.shortcutFunction === 'sprintf') {
                // mh: gettext like sprintf syntax found, automatically create sprintf processor
                options = _injectSprintfProcessor.apply(null, arguments);
            } else if (o.shortcutFunction === 'defaultValue') {
                options = {
                    defaultValue: options
                }
            }
        } else {
            options = options || {};
        }
    
        if (potentialKeys === undefined || potentialKeys === null) return '';
    
        if (typeof potentialKeys == 'string') {
            potentialKeys = [potentialKeys];
        }
    
        var key = potentialKeys[0];
    
        if (potentialKeys.length > 1) {
            for (var i = 0; i < potentialKeys.length; i++) {
                key = potentialKeys[i];
                if (exists(key, options)) {
                    break;
                }
            }
        }
    
        var notFound = _getDefaultValue(key, options)
            , found = _find(key, options)
            , lngs = options.lng ? f.toLanguages(options.lng) : languages
            , ns = options.ns || o.ns.defaultNs
            , parts;
    
        // split ns and key
        if (key.indexOf(o.nsseparator) > -1) {
            parts = key.split(o.nsseparator);
            ns = parts[0];
            key = parts[1];
        }
    
        if (found === undefined && o.sendMissing) {
            if (options.lng) {
                sync.postMissing(lngs[0], ns, key, notFound, lngs);
            } else {
                sync.postMissing(o.lng, ns, key, notFound, lngs);
            }
        }
    
        var postProcessor = options.postProcess || o.postProcess;
        if (found !== undefined && postProcessor) {
            if (postProcessors[postProcessor]) {
                found = postProcessors[postProcessor](found, key, options);
            }
        }
    
        // process notFound if function exists
        var splitNotFound = notFound;
        if (notFound.indexOf(o.nsseparator) > -1) {
            parts = notFound.split(o.nsseparator);
            splitNotFound = parts[1];
        }
        if (splitNotFound === key && o.parseMissingKey) {
            notFound = o.parseMissingKey(notFound);
        }
    
        if (found === undefined) {
            notFound = applyReplacement(notFound, options);
            notFound = applyReuse(notFound, options);
    
            if (postProcessor && postProcessors[postProcessor]) {
                var val = _getDefaultValue(key, options);
                found = postProcessors[postProcessor](val, key, options);
            }
        }
    
        return (found !== undefined) ? found : notFound;
    }
    
    function _find(key, options) {
        options = options || {};
    
        var optionWithoutCount, translated
            , notFound = _getDefaultValue(key, options)
            , lngs = languages;
    
        if (!resStore) { return notFound; } // no resStore to translate from
    
        // CI mode
        if (lngs[0].toLowerCase() === 'cimode') return notFound;
    
        // passed in lng
        if (options.lng) {
            lngs = f.toLanguages(options.lng);
    
            if (!resStore[lngs[0]]) {
                var oldAsync = o.getAsync;
                o.getAsync = false;
    
                TAPi18next.sync.load(lngs, o, function(err, store) {
                    f.extend(resStore, store);
                    o.getAsync = oldAsync;
                });
            }
        }
    
        var ns = options.ns || o.ns.defaultNs;
        if (key.indexOf(o.nsseparator) > -1) {
            var parts = key.split(o.nsseparator);
            ns = parts[0];
            key = parts[1];
        }
    
        if (hasContext(options)) {
            optionWithoutCount = f.extend({}, options);
            delete optionWithoutCount.context;
            optionWithoutCount.defaultValue = o.contextNotFound;
    
            var contextKey = ns + o.nsseparator + key + '_' + options.context;
    
            translated = translate(contextKey, optionWithoutCount);
            if (translated != o.contextNotFound) {
                return applyReplacement(translated, { context: options.context }); // apply replacement for context only
            } // else continue translation with original/nonContext key
        }
    
        if (needsPlural(options)) {
            optionWithoutCount = f.extend({}, options);
            delete optionWithoutCount.count;
            optionWithoutCount.defaultValue = o.pluralNotFound;
    
            var pluralKey = ns + o.nsseparator + key + o.pluralSuffix;
            var pluralExtension = pluralExtensions.get(lngs[0], options.count);
            if (pluralExtension >= 0) {
                pluralKey = pluralKey + '_' + pluralExtension;
            } else if (pluralExtension === 1) {
                pluralKey = ns + o.nsseparator + key; // singular
            }
    
            translated = translate(pluralKey, optionWithoutCount);
            if (translated != o.pluralNotFound) {
                return applyReplacement(translated, {
                    count: options.count,
                    interpolationPrefix: options.interpolationPrefix,
                    interpolationSuffix: options.interpolationSuffix
                }); // apply replacement for count only
            } // else continue translation with original/singular key
        }
    
        var found;
        var keys = key.split(o.keyseparator);
        for (var i = 0, len = lngs.length; i < len; i++ ) {
            if (found !== undefined) break;
    
            var l = lngs[i];
    
            var x = 0;
            var value = resStore[l] && resStore[l][ns];
            while (keys[x]) {
                value = value && value[keys[x]];
                x++;
            }
            if (value !== undefined) {
                var valueType = Object.prototype.toString.apply(value);
                if (typeof value === 'string') {
                    value = applyReplacement(value, options);
                    value = applyReuse(value, options);
                } else if (valueType === '[object Array]' && !o.returnObjectTrees && !options.returnObjectTrees) {
                    value = value.join('\n');
                    value = applyReplacement(value, options);
                    value = applyReuse(value, options);
                } else if (value === null && o.fallbackOnNull === true) {
                    value = undefined;
                } else if (value !== null) {
                    if (!o.returnObjectTrees && !options.returnObjectTrees) {
                        if (o.objectTreeKeyHandler && typeof o.objectTreeKeyHandler == 'function') {
                            value = o.objectTreeKeyHandler(key, value, l, ns, options);
                        } else {
                            value = 'key \'' + ns + ':' + key + ' (' + l + ')\' ' +
                                'returned an object instead of string.';
                            f.log(value);
                        }
                    } else if (valueType !== '[object Number]' && valueType !== '[object Function]' && valueType !== '[object RegExp]') {
                        var copy = (valueType === '[object Array]') ? [] : {}; // apply child translation on a copy
                        f.each(value, function(m) {
                            copy[m] = _translate(ns + o.nsseparator + key + o.keyseparator + m, options);
                        });
                        value = copy;
                    }
                }
    
                if (typeof value === 'string' && value.trim() === '' && o.fallbackOnEmpty === true)
                    value = undefined;
    
                found = value;
            }
        }
    
        if (found === undefined && !options.isFallbackLookup && (o.fallbackToDefaultNS === true || (o.fallbackNS && o.fallbackNS.length > 0))) {
            // set flag for fallback lookup - avoid recursion
            options.isFallbackLookup = true;
    
            if (o.fallbackNS.length) {
    
                for (var y = 0, lenY = o.fallbackNS.length; y < lenY; y++) {
                    found = _find(o.fallbackNS[y] + o.nsseparator + key, options);
    
                    if (found) {
                        /* compare value without namespace */
                        var foundValue = found.indexOf(o.nsseparator) > -1 ? found.split(o.nsseparator)[1] : found
                          , notFoundValue = notFound.indexOf(o.nsseparator) > -1 ? notFound.split(o.nsseparator)[1] : notFound;
    
                        if (foundValue !== notFoundValue) break;
                    }
                }
            } else {
                found = _find(key, options); // fallback to default NS
            }
        }
    
        return found;
    }
    function detectLanguage() {
        var detectedLng;
    
        // get from qs
        var qsParm = [];
        if (typeof window !== 'undefined') {
            (function() {
                var query = window.location.search.substring(1);
                var parms = query.split('&');
                for (var i=0; i<parms.length; i++) {
                    var pos = parms[i].indexOf('=');
                    if (pos > 0) {
                        var key = parms[i].substring(0,pos);
                        var val = parms[i].substring(pos+1);
                        qsParm[key] = val;
                    }
                }
            })();
            if (qsParm[o.detectLngQS]) {
                detectedLng = qsParm[o.detectLngQS];
            }
        }
    
        // get from cookie
        if (!detectedLng && typeof document !== 'undefined' && o.useCookie ) {
            var c = f.cookie.read(o.cookieName);
            if (c) detectedLng = c;
        }
    
        // get from navigator
        if (!detectedLng && typeof navigator !== 'undefined') {
            detectedLng =  (navigator.language) ? navigator.language : navigator.userLanguage;
        }
        
        return detectedLng;
    }
    var sync = {
    
        load: function(lngs, options, cb) {
            if (options.useLocalStorage) {
                sync._loadLocal(lngs, options, function(err, store) {
                    var missingLngs = [];
                    for (var i = 0, len = lngs.length; i < len; i++) {
                        if (!store[lngs[i]]) missingLngs.push(lngs[i]);
                    }
    
                    if (missingLngs.length > 0) {
                        sync._fetch(missingLngs, options, function(err, fetched) {
                            f.extend(store, fetched);
                            sync._storeLocal(fetched);
    
                            cb(null, store);
                        });
                    } else {
                        cb(null, store);
                    }
                });
            } else {
                sync._fetch(lngs, options, function(err, store){
                    cb(null, store);
                });
            }
        },
    
        _loadLocal: function(lngs, options, cb) {
            var store = {}
              , nowMS = new Date().getTime();
    
            if(window.localStorage) {
    
                var todo = lngs.length;
    
                f.each(lngs, function(key, lng) {
                    var local = window.localStorage.getItem('res_' + lng);
    
                    if (local) {
                        local = JSON.parse(local);
    
                        if (local.i18nStamp && local.i18nStamp + options.localStorageExpirationTime > nowMS) {
                            store[lng] = local;
                        }
                    }
    
                    todo--; // wait for all done befor callback
                    if (todo === 0) cb(null, store);
                });
            }
        },
    
        _storeLocal: function(store) {
            if(window.localStorage) {
                for (var m in store) {
                    store[m].i18nStamp = new Date().getTime();
                    window.localStorage.setItem('res_' + m, JSON.stringify(store[m]));
                }
            }
            return;
        },
    
        _fetch: function(lngs, options, cb) {
            var ns = options.ns
              , store = {};
            
            if (!options.dynamicLoad) {
                var todo = ns.namespaces.length * lngs.length
                  , errors;
    
                // load each file individual
                f.each(ns.namespaces, function(nsIndex, nsValue) {
                    f.each(lngs, function(lngIndex, lngValue) {
                        
                        // Call this once our translation has returned.
                        var loadComplete = function(err, data) {
                            if (err) {
                                errors = errors || [];
                                errors.push(err);
                            }
                            store[lngValue] = store[lngValue] || {};
                            store[lngValue][nsValue] = data;
    
                            todo--; // wait for all done befor callback
                            if (todo === 0) cb(errors, store);
                        };
                        
                        if(typeof options.customLoad == 'function'){
                            // Use the specified custom callback.
                            options.customLoad(lngValue, nsValue, options, loadComplete);
                        } else {
                            //~ // Use our inbuilt sync.
                            sync._fetchOne(lngValue, nsValue, options, loadComplete);
                        }
                    });
                });
            } else {
                // Call this once our translation has returned.
                var loadComplete = function(err, data) {
                    cb(null, data);
                };
    
                if(typeof options.customLoad == 'function'){
                    // Use the specified custom callback.
                    options.customLoad(lngs, ns.namespaces, options, loadComplete);
                } else {
                    var url = applyReplacement(options.resGetPath, { lng: lngs.join('+'), ns: ns.namespaces.join('+') });
                    // load all needed stuff once
                    f.ajax({
                        url: url,
                        success: function(data, status, xhr) {
                            f.log('loaded: ' + url);
                            loadComplete(null, data);
                        },
                        error : function(xhr, status, error) {
                            f.log('failed loading: ' + url);
                            loadComplete('failed loading resource.json error: ' + error);
                        },
                        dataType: "json",
                        async : options.getAsync
                    });
                }    
            }
        },
    
        _fetchOne: function(lng, ns, options, done) {
            var url = applyReplacement(options.resGetPath, { lng: lng, ns: ns });
            f.ajax({
                url: url,
                success: function(data, status, xhr) {
                    f.log('loaded: ' + url);
                    done(null, data);
                },
                error : function(xhr, status, error) {
                    if ((status && status == 200) || (xhr && xhr.status && xhr.status == 200)) {
                        // file loaded but invalid json, stop waste time !
                        f.log('There is a typo in: ' + url);
                    } else if ((status && status == 404) || (xhr && xhr.status && xhr.status == 404)) {
                        f.log('Does not exist: ' + url);
                    } else {
                        var theStatus = status ? status : ((xhr && xhr.status) ? xhr.status : null);
                        f.log(theStatus + ' when loading ' + url);
                    }
                    
                    done(error, {});
                },
                dataType: "json",
                async : options.getAsync
            });
        },
    
        postMissing: function(lng, ns, key, defaultValue, lngs) {
            var payload = {};
            payload[key] = defaultValue;
    
            var urls = [];
    
            if (o.sendMissingTo === 'fallback' && o.fallbackLng[0] !== false) {
                for (var i = 0; i < o.fallbackLng.length; i++) {
                    urls.push({lng: o.fallbackLng[i], url: applyReplacement(o.resPostPath, { lng: o.fallbackLng[i], ns: ns })});
                }
            } else if (o.sendMissingTo === 'current' || (o.sendMissingTo === 'fallback' && o.fallbackLng[0] === false) ) {
                urls.push({lng: lng, url: applyReplacement(o.resPostPath, { lng: lng, ns: ns })});
            } else if (o.sendMissingTo === 'all') {
                for (var i = 0, l = lngs.length; i < l; i++) {
                    urls.push({lng: lngs[i], url: applyReplacement(o.resPostPath, { lng: lngs[i], ns: ns })});
                }
            }
    
            for (var y = 0, len = urls.length; y < len; y++) {
                var item = urls[y];
                f.ajax({
                    url: item.url,
                    type: o.sendType,
                    data: payload,
                    success: function(data, status, xhr) {
                        f.log('posted missing key \'' + key + '\' to: ' + item.url);
    
                        // add key to resStore
                        var keys = key.split('.');
                        var x = 0;
                        var value = resStore[item.lng][ns];
                        while (keys[x]) {
                            if (x === keys.length - 1) {
                                value = value[keys[x]] = defaultValue;
                            } else {
                                value = value[keys[x]] = value[keys[x]] || {};
                            }
                            x++;
                        }
                    },
                    error : function(xhr, status, error) {
                        f.log('failed posting missing key \'' + key + '\' to: ' + item.url);
                    },
                    dataType: "json",
                    async : o.postAsync
                });
            }
        }
    };
    // definition http://translate.sourceforge.net/wiki/l10n/pluralforms
    var pluralExtensions = {
    
        rules: {
            "ach": {
                "name": "Acholi", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "af": {
                "name": "Afrikaans", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ak": {
                "name": "Akan", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "am": {
                "name": "Amharic", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "an": {
                "name": "Aragonese", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ar": {
                "name": "Arabic", 
                "numbers": [
                    0, 
                    1, 
                    2, 
                    3, 
                    11, 
                    100
                ], 
                "plurals": function(n) { return Number(n===0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5); }
            }, 
            "arn": {
                "name": "Mapudungun", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "ast": {
                "name": "Asturian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ay": {
                "name": "Aymar\u00e1", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "az": {
                "name": "Azerbaijani", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "be": {
                "name": "Belarusian", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "bg": {
                "name": "Bulgarian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "bn": {
                "name": "Bengali", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "bo": {
                "name": "Tibetan", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "br": {
                "name": "Breton", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "bs": {
                "name": "Bosnian", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "ca": {
                "name": "Catalan", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "cgg": {
                "name": "Chiga", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "cs": {
                "name": "Czech", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number((n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2); }
            }, 
            "csb": {
                "name": "Kashubian", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "cy": {
                "name": "Welsh", 
                "numbers": [
                    1, 
                    2, 
                    3, 
                    8
                ], 
                "plurals": function(n) { return Number((n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3); }
            }, 
            "da": {
                "name": "Danish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "de": {
                "name": "German", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "dz": {
                "name": "Dzongkha", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "el": {
                "name": "Greek", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "en": {
                "name": "English", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "eo": {
                "name": "Esperanto", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "es": {
                "name": "Spanish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "es_ar": {
                "name": "Argentinean Spanish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "et": {
                "name": "Estonian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "eu": {
                "name": "Basque", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "fa": {
                "name": "Persian", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "fi": {
                "name": "Finnish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "fil": {
                "name": "Filipino", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "fo": {
                "name": "Faroese", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "fr": {
                "name": "French", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "fur": {
                "name": "Friulian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "fy": {
                "name": "Frisian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ga": {
                "name": "Irish", 
                "numbers": [
                    1, 
                    2,
                    3,
                    7, 
                    11
                ], 
                "plurals": function(n) { return Number(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4) ;}
            }, 
            "gd": {
                "name": "Scottish Gaelic", 
                "numbers": [
                    1, 
                    2, 
                    3,
                    20
                ], 
                "plurals": function(n) { return Number((n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3); }
            }, 
            "gl": {
                "name": "Galician", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "gu": {
                "name": "Gujarati", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "gun": {
                "name": "Gun", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "ha": {
                "name": "Hausa", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "he": {
                "name": "Hebrew", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "hi": {
                "name": "Hindi", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "hr": {
                "name": "Croatian", 
                "numbers": [
                    1, 
                    2,
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "hu": {
                "name": "Hungarian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "hy": {
                "name": "Armenian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ia": {
                "name": "Interlingua", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "id": {
                "name": "Indonesian", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "is": {
                "name": "Icelandic", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n%10!=1 || n%100==11); }
            }, 
            "it": {
                "name": "Italian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ja": {
                "name": "Japanese", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "jbo": {
                "name": "Lojban", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "jv": {
                "name": "Javanese", 
                "numbers": [
                    0, 
                    1
                ], 
                "plurals": function(n) { return Number(n !== 0); }
            }, 
            "ka": {
                "name": "Georgian", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "kk": {
                "name": "Kazakh", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "km": {
                "name": "Khmer", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "kn": {
                "name": "Kannada", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ko": {
                "name": "Korean", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "ku": {
                "name": "Kurdish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "kw": {
                "name": "Cornish", 
                "numbers": [
                    1, 
                    2, 
                    3,
                    4
                ], 
                "plurals": function(n) { return Number((n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3); }
            }, 
            "ky": {
                "name": "Kyrgyz", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "lb": {
                "name": "Letzeburgesch", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ln": {
                "name": "Lingala", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "lo": {
                "name": "Lao", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "lt": {
                "name": "Lithuanian", 
                "numbers": [
                    1, 
                    2,
                    10
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "lv": {
                "name": "Latvian", 
                "numbers": [
                    1, 
                    2, 
                    0
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n !== 0 ? 1 : 2); }
            }, 
            "mai": {
                "name": "Maithili", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "mfe": {
                "name": "Mauritian Creole", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "mg": {
                "name": "Malagasy", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "mi": {
                "name": "Maori", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "mk": {
                "name": "Macedonian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n==1 || n%10==1 ? 0 : 1); }
            }, 
            "ml": {
                "name": "Malayalam", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "mn": {
                "name": "Mongolian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "mnk": {
                "name": "Mandinka", 
                "numbers": [
                    0, 
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n == 0 ? 0 : n==1 ? 1 : 2); }
            }, 
            "mr": {
                "name": "Marathi", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ms": {
                "name": "Malay", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "mt": {
                "name": "Maltese", 
                "numbers": [
                    1, 
                    2, 
                    11, 
                    20
                ], 
                "plurals": function(n) { return Number(n==1 ? 0 : n===0 || ( n%100>1 && n%100<11) ? 1 : (n%100>10 && n%100<20 ) ? 2 : 3); }
            }, 
            "nah": {
                "name": "Nahuatl", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "nap": {
                "name": "Neapolitan", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "nb": {
                "name": "Norwegian Bokmal", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ne": {
                "name": "Nepali", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "nl": {
                "name": "Dutch", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "nn": {
                "name": "Norwegian Nynorsk", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "no": {
                "name": "Norwegian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "nso": {
                "name": "Northern Sotho", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "oc": {
                "name": "Occitan", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "or": {
                "name": "Oriya", 
                "numbers": [
                    2, 
                    1
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "pa": {
                "name": "Punjabi", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "pap": {
                "name": "Papiamento", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "pl": {
                "name": "Polish", 
                "numbers": [
                    1, 
                    2,
                    5
                ], 
                "plurals": function(n) { return Number(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "pms": {
                "name": "Piemontese", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ps": {
                "name": "Pashto", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "pt": {
                "name": "Portuguese", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "pt_br": {
                "name": "Brazilian Portuguese", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "rm": {
                "name": "Romansh", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ro": {
                "name": "Romanian", 
                "numbers": [
                    1, 
                    2,
                    20
                ], 
                "plurals": function(n) { return Number(n==1 ? 0 : (n===0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2); }
            }, 
            "ru": {
                "name": "Russian", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "sah": {
                "name": "Yakut", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "sco": {
                "name": "Scots", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "se": {
                "name": "Northern Sami", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "si": {
                "name": "Sinhala", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "sk": {
                "name": "Slovak", 
                "numbers": [
                    1, 
                    2, 
                    5
                ], 
                "plurals": function(n) { return Number((n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2); }
            }, 
            "sl": {
                "name": "Slovenian", 
                "numbers": [
                    5, 
                    1, 
                    2, 
                    3
                ], 
                "plurals": function(n) { return Number(n%100==1 ? 1 : n%100==2 ? 2 : n%100==3 || n%100==4 ? 3 : 0); }
            }, 
            "so": {
                "name": "Somali", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "son": {
                "name": "Songhay", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "sq": {
                "name": "Albanian", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "sr": {
                "name": "Serbian", 
                "numbers": [
                    1, 
                    2,
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "su": {
                "name": "Sundanese", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "sv": {
                "name": "Swedish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "sw": {
                "name": "Swahili", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "ta": {
                "name": "Tamil", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "te": {
                "name": "Telugu", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "tg": {
                "name": "Tajik", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "th": {
                "name": "Thai", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "ti": {
                "name": "Tigrinya", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "tj": {
                "name": "Tajik", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "tk": {
                "name": "Turkmen", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "tr": {
                "name": "Turkish", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "tt": {
                "name": "Tatar", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "ug": {
                "name": "Uyghur", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "uk": {
                "name": "Ukrainian", 
                "numbers": [
                    1, 
                    2,
                    5
                ], 
                "plurals": function(n) { return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2); }
            }, 
            "ur": {
                "name": "Urdu", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "uz": {
                "name": "Uzbek", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "vi": {
                "name": "Vietnamese", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "wa": {
                "name": "Walloon", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n > 1); }
            }, 
            "wo": {
                "name": "Wolof", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }, 
            "yo": {
                "name": "Yoruba", 
                "numbers": [
                    1, 
                    2
                ], 
                "plurals": function(n) { return Number(n != 1); }
            }, 
            "zh": {
                "name": "Chinese", 
                "numbers": [
                    1
                ], 
                "plurals": function(n) { return 0; }
            }
        },
    
        // for demonstration only sl and ar is added but you can add your own pluralExtensions
        addRule: function(lng, obj) {
            pluralExtensions.rules[lng] = obj;    
        },
    
        setCurrentLng: function(lng) {
            if (!pluralExtensions.currentRule || pluralExtensions.currentRule.lng !== lng) {
                var parts = lng.split('-');
    
                pluralExtensions.currentRule = {
                    lng: lng,
                    rule: pluralExtensions.rules[parts[0]]
                };
            }
        },
    
        get: function(lng, count) {
            var parts = lng.split('-');
    
            function getResult(l, c) {
                var ext;
                if (pluralExtensions.currentRule && pluralExtensions.currentRule.lng === lng) {
                    ext = pluralExtensions.currentRule.rule; 
                } else {
                    ext = pluralExtensions.rules[l];
                }
                if (ext) {
                    var i = ext.plurals(c);
                    var number = ext.numbers[i];
                    if (ext.numbers.length === 2 && ext.numbers[0] === 1) {
                        if (number === 2) { 
                            number = -1; // regular plural
                        } else if (number === 1) {
                            number = 1; // singular
                        }
                    }//console.log(count + '-' + number);
                    return number;
                } else {
                    return c === 1 ? '1' : '-1';
                }
            }
                        
            return getResult(parts[0], count);
        }
    
    };
    var postProcessors = {};
    var addPostProcessor = function(name, fc) {
        postProcessors[name] = fc;
    };
    // sprintf support
    var sprintf = (function() {
        function get_type(variable) {
            return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
        }
        function str_repeat(input, multiplier) {
            for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
            return output.join('');
        }
    
        var str_format = function() {
            if (!str_format.cache.hasOwnProperty(arguments[0])) {
                str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
            }
            return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
        };
    
        str_format.format = function(parse_tree, argv) {
            var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
            for (i = 0; i < tree_length; i++) {
                node_type = get_type(parse_tree[i]);
                if (node_type === 'string') {
                    output.push(parse_tree[i]);
                }
                else if (node_type === 'array') {
                    match = parse_tree[i]; // convenience purposes only
                    if (match[2]) { // keyword argument
                        arg = argv[cursor];
                        for (k = 0; k < match[2].length; k++) {
                            if (!arg.hasOwnProperty(match[2][k])) {
                                throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
                            }
                            arg = arg[match[2][k]];
                        }
                    }
                    else if (match[1]) { // positional argument (explicit)
                        arg = argv[match[1]];
                    }
                    else { // positional argument (implicit)
                        arg = argv[cursor++];
                    }
    
                    if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
                        throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
                    }
                    switch (match[8]) {
                        case 'b': arg = arg.toString(2); break;
                        case 'c': arg = String.fromCharCode(arg); break;
                        case 'd': arg = parseInt(arg, 10); break;
                        case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
                        case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
                        case 'o': arg = arg.toString(8); break;
                        case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
                        case 'u': arg = Math.abs(arg); break;
                        case 'x': arg = arg.toString(16); break;
                        case 'X': arg = arg.toString(16).toUpperCase(); break;
                    }
                    arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
                    pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
                    pad_length = match[6] - String(arg).length;
                    pad = match[6] ? str_repeat(pad_character, pad_length) : '';
                    output.push(match[5] ? arg + pad : pad + arg);
                }
            }
            return output.join('');
        };
    
        str_format.cache = {};
    
        str_format.parse = function(fmt) {
            var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
            while (_fmt) {
                if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
                    parse_tree.push(match[0]);
                }
                else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
                    parse_tree.push('%');
                }
                else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                    if (match[2]) {
                        arg_names |= 1;
                        var field_list = [], replacement_field = match[2], field_match = [];
                        if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                            field_list.push(field_match[1]);
                            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                }
                                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                }
                                else {
                                    throw('[sprintf] huh?');
                                }
                            }
                        }
                        else {
                            throw('[sprintf] huh?');
                        }
                        match[2] = field_list;
                    }
                    else {
                        arg_names |= 2;
                    }
                    if (arg_names === 3) {
                        throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
                    }
                    parse_tree.push(match);
                }
                else {
                    throw('[sprintf] huh?');
                }
                _fmt = _fmt.substring(match[0].length);
            }
            return parse_tree;
        };
    
        return str_format;
    })();
    
    var vsprintf = function(fmt, argv) {
        argv.unshift(fmt);
        return sprintf.apply(null, argv);
    };
    
    addPostProcessor("sprintf", function(val, key, opts) {
        if (!opts.sprintf) return val;
    
        if (Object.prototype.toString.apply(opts.sprintf) === '[object Array]') {
            return vsprintf(val, opts.sprintf);
        } else if (typeof opts.sprintf === 'object') {
            return sprintf(val, opts.sprintf);
        }
    
        return val;
    });
    // public api interface
    TAPi18next.init = init;
    TAPi18next.setLng = setLng;
    TAPi18next.preload = preload;
    TAPi18next.addResourceBundle = addResourceBundle;
    TAPi18next.removeResourceBundle = removeResourceBundle;
    TAPi18next.loadNamespace = loadNamespace;
    TAPi18next.loadNamespaces = loadNamespaces;
    TAPi18next.setDefaultNamespace = setDefaultNamespace;
    TAPi18next.t = translate;
    TAPi18next.translate = translate;
    TAPi18next.exists = exists;
    TAPi18next.detectLanguage = f.detectLanguage;
    TAPi18next.pluralExtensions = pluralExtensions;
    TAPi18next.sync = sync;
    TAPi18next.functions = f;
    TAPi18next.lng = lng;
    TAPi18next.addPostProcessor = addPostProcessor;
    TAPi18next.options = o;
})();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18next/tap_i18next_init.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
TAPi18next.init({resStore: {}, fallbackLng: globals.fallback_language, useCookie: false});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18n/tap_i18n-helpers.coffee                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
share.helpers = {};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18n/tap_i18n-common.coffee                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var fallback_language;
fallback_language = globals.fallback_language;

TAPi18n = function () {
  EventEmitter.call(this);
  this._fallback_language = fallback_language;
  this._language_changed_tracker = new Tracker.Dependency();
  this._loaded_languages = [fallback_language]; // stores the loaded languages, the fallback language is loaded automatically

  this.conf = null; // If conf isn't null we assume that tap:i18n is enabled for the project.
  // We assume conf is valid, we sterilize and validate it during the build process.

  this.packages = {}; // Stores the packages' package-tap.i18n jsons

  this.languages_names = {}; // Stores languages that we've found languages files for in the project dir.
  // format:
  // {
  //    lang_tag: [lang_name_in_english, lang_name_in_local_language]
  // }

  this.translations = {}; // Stores the packages/project translations - Server side only
  // fallback_language translations are not stored here

  if (Meteor.isClient) {
    Session.set(this._loaded_lang_session_key, null);
    this._languageSpecificTranslators = {};
    this._languageSpecificTranslatorsTrackers = {};
  }

  if (Meteor.isServer) {
    this.server_translators = {};
    Meteor.startup(() => {
      // If tap-i18n is enabled for that project
      if (this._enabled()) {
        return this._registerHTTPMethod();
      }
    });
  }

  this.__ = this._getPackageI18nextProxy(globals.project_translations_domain);
  TAPi18next.setLng(fallback_language);
  return this;
};

Util.inherits(TAPi18n, EventEmitter);

_.extend(TAPi18n.prototype, {
  _loaded_lang_session_key: "TAPi18n::loaded_lang",
  _enable: function (conf) {
    // tap:i18n gets enabled for a project once a conf file is set for it.
    // It can be either a conf object that was set by project-tap.i18n file or
    // a default conf, which is being added if the project has lang files
    // (*.i18n.json) but not project-tap.i18n
    this.conf = conf;
    return this._onceEnabled();
  },
  _onceEnabled: function () {},
  // The arch specific code can use this for procedures that should be performed once
  // tap:i18n gets enabled (project conf file is being set)
  _enabled: function () {
    // read the comment of @conf
    return this.conf != null;
  },
  _getPackageDomain: function (package_name) {
    return package_name.replace(/:/g, "-");
  },
  addResourceBundle: function (lang_tag, package_name, translations) {
    return TAPi18next.addResourceBundle(lang_tag, this._getPackageDomain(package_name), translations);
  },
  _getSpecificLangTranslator: function (lang) {
    var current_lang, translator;
    current_lang = TAPi18next.lng();
    translator = null;
    TAPi18next.setLng(lang, {
      fixLng: true
    }, lang_translator => {
      return translator = lang_translator;
    }); // Restore i18next lang that had been changed in the process of generating
    // lang specific translator

    TAPi18next.setLng(current_lang);
    return translator;
  },
  _getProjectLanguages: function () {
    // Return an array of languages available for the current project
    if (this._enabled()) {
      if (_.isArray(this.conf.supported_languages)) {
        return _.union([this._fallback_language], this.conf.supported_languages);
      } else {
        // If supported_languages is null, all the languages we found
        // translations files to in the project level are considered supported.
        // We use the @.languages_names array to tell which languages we found
        // since for every i18n.json file we found in the project level we add
        // an entry for its language to @.languages_names in the build process.
        // We also know for certain that when tap-i18n is enabled the fallback
        // lang is in @.languages_names
        return _.keys(this.languages_names);
      }
    } else {
      return [this._fallback_language];
    }
  },
  getLanguages: function () {
    var i, lang_tag, languages, len, ref;

    if (!this._enabled()) {
      return null;
    }

    languages = {};
    ref = this._getProjectLanguages();

    for (i = 0, len = ref.length; i < len; i++) {
      lang_tag = ref[i];
      languages[lang_tag] = {
        name: this.languages_names[lang_tag][1],
        en: this.languages_names[lang_tag][0]
      };
    }

    return languages;
  },
  _cdn: function (path) {
    return path;
  },
  setCdnCb: function (cb) {
    this._cdn = cb;
  },
  _loadLangFileObject: function (language_tag, data) {
    var package_keys, package_name, ref, results;
    results = [];

    for (package_name in data) {
      package_keys = data[package_name]; // Translations that are added by loadTranslations() have higher priority

      package_keys = _.extend({}, package_keys, ((ref = this._loadTranslations_cache[language_tag]) != null ? ref[package_name] : void 0) || {});
      results.push(this.addResourceBundle(language_tag, package_name, package_keys));
    }

    return results;
  },
  _loadTranslations_cache: {},
  loadTranslations: function (translations, namespace) {
    var language_tag, project_languages, results, translation_keys;
    project_languages = this._getProjectLanguages();
    results = [];

    for (language_tag in translations) {
      translation_keys = translations[language_tag];

      if (this._loadTranslations_cache[language_tag] == null) {
        this._loadTranslations_cache[language_tag] = {};
      }

      if (this._loadTranslations_cache[language_tag][namespace] == null) {
        this._loadTranslations_cache[language_tag][namespace] = {};
      }

      _.extend(this._loadTranslations_cache[language_tag][namespace], translation_keys);

      this.addResourceBundle(language_tag, namespace, translation_keys);

      if (Meteor.isClient && this.getLanguage() === language_tag) {
        // Retranslate if session language updated
        results.push(this._language_changed_tracker.changed());
      } else {
        results.push(void 0);
      }
    }

    return results;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18n/tap_i18n-server.coffee                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var indexOf = [].indexOf;

_.extend(TAPi18n.prototype, {
  server_translators: null,
  _registerServerTranslator: function (lang_tag, package_name) {
    if (this._enabled()) {
      if (!(lang_tag in this.server_translators)) {
        this.server_translators[lang_tag] = this._getSpecificLangTranslator(lang_tag);
      } // fallback language is integrated, and isn't part of @translations 


      if (lang_tag !== this._fallback_language) {
        this.addResourceBundle(lang_tag, package_name, this.translations[lang_tag][package_name]);
      }
    }

    if (!(this._fallback_language in this.server_translators)) {
      return this.server_translators[this._fallback_language] = this._getSpecificLangTranslator(this._fallback_language);
    }
  },
  _registerAllServerTranslators: function () {
    var i, lang_tag, len, package_name, ref, results;
    ref = this._getProjectLanguages();
    results = [];

    for (i = 0, len = ref.length; i < len; i++) {
      lang_tag = ref[i];
      results.push(function () {
        var results1;
        results1 = [];

        for (package_name in this.translations[lang_tag]) {
          results1.push(this._registerServerTranslator(lang_tag, package_name));
        }

        return results1;
      }.call(this));
    }

    return results;
  },
  _getPackageI18nextProxy: function (package_name) {
    // A proxy to TAPi18next.t where the namespace is preset to the package's
    return (key, options, lang_tag = null) => {
      if (lang_tag == null) {
        // translate to fallback_language
        return this.server_translators[this._fallback_language](`${this._getPackageDomain(package_name)}:${key}`, options);
      } else if (!(lang_tag in this.server_translators)) {
        console.log(`Warning: language ${lang_tag} is not supported in this project, fallback language (${this._fallback_language})`);
        return this.server_translators[this._fallback_language](`${this._getPackageDomain(package_name)}:${key}`, options);
      } else {
        return this.server_translators[lang_tag](`${this._getPackageDomain(package_name)}:${key}`, options);
      }
    };
  },
  _registerHTTPMethod: function () {
    var base_route, methods, multi_lang_regex, multi_lang_route, self, single_lang_regex, single_lang_route;
    self = this;
    methods = {};

    if (!self._enabled()) {
      throw new Meteor.Error(500, "tap-i18n has to be enabled in order to register the HTTP method");
    }

    base_route = `${self.conf.i18n_files_route.replace(/\/$/, "")}`;
    multi_lang_route = `${base_route}/multi/`;
    multi_lang_regex = new RegExp(`^((${globals.langauges_tags_regex},)*${globals.langauges_tags_regex}|all)\\.json(\\?.*)?$`);
    WebApp.connectHandlers.use(function (req, res, next) {
      var i, lang_tag, lang_tags, langs, language_translations, len, output;

      if (!req.url.startsWith(multi_lang_route)) {
        next();
        return;
      }

      langs = req.url.replace(multi_lang_route, "");

      if (!multi_lang_regex.test(langs)) {
        res.writeHead(401);
        res.end(`tap:i18n: multi language route: couldn't process url: \`${req.url}'; Couldn't parse lang portion of route: \`${langs}'`);
        return;
      } // If all lang is requested, return all.


      if ((langs = langs.replace(/\.json\??.*/, "", "")) === "all") {
        res.writeHead(200, {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify(self.translations, "utf8"));
        return;
      }

      output = {};
      lang_tags = langs.split(",");

      for (i = 0, len = lang_tags.length; i < len; i++) {
        lang_tag = lang_tags[i];

        if (indexOf.call(self._getProjectLanguages(), lang_tag) >= 0 && lang_tag !== self._fallback_language) {
          if ((language_translations = self.translations[lang_tag]) != null) {
            output[lang_tag] = language_translations;
          }
        }
      }

      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      });
      res.end(JSON.stringify(output, "utf8"));
    });
    single_lang_route = `${base_route}/`;
    single_lang_regex = new RegExp(`^${globals.langauges_tags_regex}.json(\\?.*)?$`);
    return WebApp.connectHandlers.use(function (req, res, next) {
      var lang, lang_tag, language_translations;

      if (!req.url.startsWith(single_lang_route)) {
        next();
        return;
      }

      lang = req.url.replace(single_lang_route, "");

      if (!single_lang_regex.test(lang)) {
        res.writeHead(401);
        res.end(`tap:i18n: single language route: couldn't process url: ${req.url}`);
        return;
      }

      lang_tag = lang.replace(/\.json\??.*/, "");

      if (indexOf.call(self._getProjectLanguages(), lang_tag) < 0 || lang_tag === self._fallback_language) {
        res.writeHead(404);
        res.end();
        return;
      }

      language_translations = self.translations[lang_tag] || {}; // returning {} if lang_tag is not in translations allows the project
      // developer to force a language supporte with project-tap.i18n's
      // supported_languages property, even if that language has no lang
      // files.

      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      });
      res.end(JSON.stringify(language_translations, "utf8"));
    });
  },
  _onceEnabled: function () {
    return this._registerAllServerTranslators();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/tap_i18n/lib/tap_i18n/tap_i18n-init.coffee                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
TAPi18n = new TAPi18n();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("tap:i18n", {
  TAPi18next: TAPi18next,
  TAPi18n: TAPi18n
});

})();

//# sourceURL=meteor://💻app/packages/tap_i18n.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvdGFwX2kxOG4vbGliL3RhcF9pMThuL3RhcF9pMThuLWhlbHBlcnMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy90YXBfaTE4bi9saWIvdGFwX2kxOG4vdGFwX2kxOG4tY29tbW9uLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvbGliL3RhcF9pMThuL3RhcF9pMThuLWNvbW1vbi5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3RhcF9pMThuL2xpYi90YXBfaTE4bi90YXBfaTE4bi1zZXJ2ZXIuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdGFwX2kxOG4vdGFwX2kxOG4tc2VydmVyLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvdGFwX2kxOG4vbGliL3RhcF9pMThuL3RhcF9pMThuLWluaXQuY29mZmVlIl0sIm5hbWVzIjpbInNoYXJlIiwiaGVscGVycyIsImZhbGxiYWNrX2xhbmd1YWdlIiwiZ2xvYmFscyIsIlRBUGkxOG4iLCJFdmVudEVtaXR0ZXIiLCJjYWxsIiwiX2ZhbGxiYWNrX2xhbmd1YWdlIiwiX2xhbmd1YWdlX2NoYW5nZWRfdHJhY2tlciIsIlRyYWNrZXIiLCJEZXBlbmRlbmN5IiwiX2xvYWRlZF9sYW5ndWFnZXMiLCJjb25mIiwicGFja2FnZXMiLCJsYW5ndWFnZXNfbmFtZXMiLCJ0cmFuc2xhdGlvbnMiLCJNZXRlb3IiLCJpc0NsaWVudCIsIlNlc3Npb24iLCJzZXQiLCJfbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXkiLCJfbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzIiwiX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9yc1RyYWNrZXJzIiwiaXNTZXJ2ZXIiLCJzZXJ2ZXJfdHJhbnNsYXRvcnMiLCJzdGFydHVwIiwiX2VuYWJsZWQiLCJfcmVnaXN0ZXJIVFRQTWV0aG9kIiwiX18iLCJfZ2V0UGFja2FnZUkxOG5leHRQcm94eSIsInByb2plY3RfdHJhbnNsYXRpb25zX2RvbWFpbiIsIlRBUGkxOG5leHQiLCJzZXRMbmciLCJVdGlsIiwiaW5oZXJpdHMiLCJfIiwiZXh0ZW5kIiwicHJvdG90eXBlIiwiX2VuYWJsZSIsIl9vbmNlRW5hYmxlZCIsIl9nZXRQYWNrYWdlRG9tYWluIiwicGFja2FnZV9uYW1lIiwicmVwbGFjZSIsImFkZFJlc291cmNlQnVuZGxlIiwibGFuZ190YWciLCJfZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvciIsImxhbmciLCJjdXJyZW50X2xhbmciLCJ0cmFuc2xhdG9yIiwibG5nIiwiZml4TG5nIiwibGFuZ190cmFuc2xhdG9yIiwiX2dldFByb2plY3RMYW5ndWFnZXMiLCJpc0FycmF5Iiwic3VwcG9ydGVkX2xhbmd1YWdlcyIsInVuaW9uIiwia2V5cyIsImdldExhbmd1YWdlcyIsImkiLCJsYW5ndWFnZXMiLCJsZW4iLCJyZWYiLCJsZW5ndGgiLCJuYW1lIiwiZW4iLCJfY2RuIiwicGF0aCIsInNldENkbkNiIiwiY2IiLCJfbG9hZExhbmdGaWxlT2JqZWN0IiwibGFuZ3VhZ2VfdGFnIiwiZGF0YSIsInBhY2thZ2Vfa2V5cyIsInJlc3VsdHMiLCJfbG9hZFRyYW5zbGF0aW9uc19jYWNoZSIsInB1c2giLCJsb2FkVHJhbnNsYXRpb25zIiwibmFtZXNwYWNlIiwicHJvamVjdF9sYW5ndWFnZXMiLCJ0cmFuc2xhdGlvbl9rZXlzIiwiZ2V0TGFuZ3VhZ2UiLCJjaGFuZ2VkIiwiaW5kZXhPZiIsIl9yZWdpc3RlclNlcnZlclRyYW5zbGF0b3IiLCJfcmVnaXN0ZXJBbGxTZXJ2ZXJUcmFuc2xhdG9ycyIsInJlc3VsdHMxIiwia2V5Iiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJiYXNlX3JvdXRlIiwibWV0aG9kcyIsIm11bHRpX2xhbmdfcmVnZXgiLCJtdWx0aV9sYW5nX3JvdXRlIiwic2VsZiIsInNpbmdsZV9sYW5nX3JlZ2V4Iiwic2luZ2xlX2xhbmdfcm91dGUiLCJFcnJvciIsImkxOG5fZmlsZXNfcm91dGUiLCJSZWdFeHAiLCJsYW5nYXVnZXNfdGFnc19yZWdleCIsIldlYkFwcCIsImNvbm5lY3RIYW5kbGVycyIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJsYW5nX3RhZ3MiLCJsYW5ncyIsImxhbmd1YWdlX3RyYW5zbGF0aW9ucyIsIm91dHB1dCIsInVybCIsInN0YXJ0c1dpdGgiLCJ0ZXN0Iiwid3JpdGVIZWFkIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUksQ0FBQ0MsU0FBTCxDQUFlUixxQkFBZixFQUFzQyxNQUF0QyxDQUFSO0FBMUJGLE1DbUJBO0FEbEdGO0FBNkdBdEUsY0FBQSxFQUFjO0FDb0JaLFdEbkJBLEtBQUM2Qyw2QkFBRCxFQ21CQTtBRHBCWTtBQTdHZCxDQURGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBQWhGLE9BQUEsR0FBVSxJQUFJQSxPQUFKLEVBQVYsQyIsImZpbGUiOiIvcGFja2FnZXMvdGFwX2kxOG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJzaGFyZS5oZWxwZXJzID0ge30iLCJmYWxsYmFja19sYW5ndWFnZSA9IGdsb2JhbHMuZmFsbGJhY2tfbGFuZ3VhZ2VcblxuVEFQaTE4biA9IC0+XG4gIEV2ZW50RW1pdHRlci5jYWxsIEBcblxuICBAX2ZhbGxiYWNrX2xhbmd1YWdlID0gZmFsbGJhY2tfbGFuZ3VhZ2VcblxuICBAX2xhbmd1YWdlX2NoYW5nZWRfdHJhY2tlciA9IG5ldyBUcmFja2VyLkRlcGVuZGVuY3lcblxuICBAX2xvYWRlZF9sYW5ndWFnZXMgPSBbZmFsbGJhY2tfbGFuZ3VhZ2VdICMgc3RvcmVzIHRoZSBsb2FkZWQgbGFuZ3VhZ2VzLCB0aGUgZmFsbGJhY2sgbGFuZ3VhZ2UgaXMgbG9hZGVkIGF1dG9tYXRpY2FsbHlcblxuICBAY29uZiA9IG51bGwgIyBJZiBjb25mIGlzbid0IG51bGwgd2UgYXNzdW1lIHRoYXQgdGFwOmkxOG4gaXMgZW5hYmxlZCBmb3IgdGhlIHByb2plY3QuXG4gICAgICAgICAgICAgIyBXZSBhc3N1bWUgY29uZiBpcyB2YWxpZCwgd2Ugc3RlcmlsaXplIGFuZCB2YWxpZGF0ZSBpdCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MuXG5cbiAgQHBhY2thZ2VzID0ge30gIyBTdG9yZXMgdGhlIHBhY2thZ2VzJyBwYWNrYWdlLXRhcC5pMThuIGpzb25zXG5cbiAgQGxhbmd1YWdlc19uYW1lcyA9IHt9ICMgU3RvcmVzIGxhbmd1YWdlcyB0aGF0IHdlJ3ZlIGZvdW5kIGxhbmd1YWdlcyBmaWxlcyBmb3IgaW4gdGhlIHByb2plY3QgZGlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIGZvcm1hdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgICAgbGFuZ190YWc6IFtsYW5nX25hbWVfaW5fZW5nbGlzaCwgbGFuZ19uYW1lX2luX2xvY2FsX2xhbmd1YWdlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIH1cblxuICBAdHJhbnNsYXRpb25zID0ge30gIyBTdG9yZXMgdGhlIHBhY2thZ2VzL3Byb2plY3QgdHJhbnNsYXRpb25zIC0gU2VydmVyIHNpZGUgb25seVxuICAgICAgICAgICAgICAgICAgICMgZmFsbGJhY2tfbGFuZ3VhZ2UgdHJhbnNsYXRpb25zIGFyZSBub3Qgc3RvcmVkIGhlcmVcblxuXG4gIGlmIE1ldGVvci5pc0NsaWVudFxuICAgIFNlc3Npb24uc2V0IEBfbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXksIG51bGxcblxuICAgIEBfbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzID0ge31cbiAgICBAX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9yc1RyYWNrZXJzID0ge31cblxuICBpZiBNZXRlb3IuaXNTZXJ2ZXJcbiAgICBAc2VydmVyX3RyYW5zbGF0b3JzID0ge31cblxuICAgIE1ldGVvci5zdGFydHVwID0+XG4gICAgICAjIElmIHRhcC1pMThuIGlzIGVuYWJsZWQgZm9yIHRoYXQgcHJvamVjdFxuICAgICAgaWYgQF9lbmFibGVkKClcbiAgICAgICAgQF9yZWdpc3RlckhUVFBNZXRob2QoKVxuXG4gIEBfXyA9IEBfZ2V0UGFja2FnZUkxOG5leHRQcm94eShnbG9iYWxzLnByb2plY3RfdHJhbnNsYXRpb25zX2RvbWFpbilcblxuICBUQVBpMThuZXh0LnNldExuZyBmYWxsYmFja19sYW5ndWFnZVxuXG4gIHJldHVybiBAXG5cblV0aWwuaW5oZXJpdHMgVEFQaTE4biwgRXZlbnRFbWl0dGVyXG5cbl8uZXh0ZW5kIFRBUGkxOG4ucHJvdG90eXBlLFxuICBfbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXk6IFwiVEFQaTE4bjo6bG9hZGVkX2xhbmdcIlxuXG4gIF9lbmFibGU6IChjb25mKSAtPlxuICAgICMgdGFwOmkxOG4gZ2V0cyBlbmFibGVkIGZvciBhIHByb2plY3Qgb25jZSBhIGNvbmYgZmlsZSBpcyBzZXQgZm9yIGl0LlxuICAgICMgSXQgY2FuIGJlIGVpdGhlciBhIGNvbmYgb2JqZWN0IHRoYXQgd2FzIHNldCBieSBwcm9qZWN0LXRhcC5pMThuIGZpbGUgb3JcbiAgICAjIGEgZGVmYXVsdCBjb25mLCB3aGljaCBpcyBiZWluZyBhZGRlZCBpZiB0aGUgcHJvamVjdCBoYXMgbGFuZyBmaWxlc1xuICAgICMgKCouaTE4bi5qc29uKSBidXQgbm90IHByb2plY3QtdGFwLmkxOG5cbiAgICBAY29uZiA9IGNvbmZcblxuICAgIEAuX29uY2VFbmFibGVkKClcblxuICBfb25jZUVuYWJsZWQ6ICgpIC0+XG4gICAgIyBUaGUgYXJjaCBzcGVjaWZpYyBjb2RlIGNhbiB1c2UgdGhpcyBmb3IgcHJvY2VkdXJlcyB0aGF0IHNob3VsZCBiZSBwZXJmb3JtZWQgb25jZVxuICAgICMgdGFwOmkxOG4gZ2V0cyBlbmFibGVkIChwcm9qZWN0IGNvbmYgZmlsZSBpcyBiZWluZyBzZXQpXG4gICAgcmV0dXJuXG5cbiAgX2VuYWJsZWQ6IC0+XG4gICAgIyByZWFkIHRoZSBjb21tZW50IG9mIEBjb25mXG4gICAgQGNvbmY/XG5cbiAgX2dldFBhY2thZ2VEb21haW46IChwYWNrYWdlX25hbWUpIC0+XG4gICAgcGFja2FnZV9uYW1lLnJlcGxhY2UoLzovZywgXCItXCIpXG5cbiAgYWRkUmVzb3VyY2VCdW5kbGU6IChsYW5nX3RhZywgcGFja2FnZV9uYW1lLCB0cmFuc2xhdGlvbnMpIC0+XG4gICAgVEFQaTE4bmV4dC5hZGRSZXNvdXJjZUJ1bmRsZShsYW5nX3RhZywgQF9nZXRQYWNrYWdlRG9tYWluKHBhY2thZ2VfbmFtZSksIHRyYW5zbGF0aW9ucylcblxuICBfZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcjogKGxhbmcpIC0+XG4gICAgY3VycmVudF9sYW5nID0gVEFQaTE4bmV4dC5sbmcoKVxuXG4gICAgdHJhbnNsYXRvciA9IG51bGxcbiAgICBUQVBpMThuZXh0LnNldExuZyBsYW5nLCB7Zml4TG5nOiB0cnVlfSwgKGxhbmdfdHJhbnNsYXRvcikgPT5cbiAgICAgIHRyYW5zbGF0b3IgPSBsYW5nX3RyYW5zbGF0b3JcblxuICAgICMgUmVzdG9yZSBpMThuZXh0IGxhbmcgdGhhdCBoYWQgYmVlbiBjaGFuZ2VkIGluIHRoZSBwcm9jZXNzIG9mIGdlbmVyYXRpbmdcbiAgICAjIGxhbmcgc3BlY2lmaWMgdHJhbnNsYXRvclxuICAgIFRBUGkxOG5leHQuc2V0TG5nIGN1cnJlbnRfbGFuZ1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0b3JcblxuICBfZ2V0UHJvamVjdExhbmd1YWdlczogKCkgLT5cbiAgICAjIFJldHVybiBhbiBhcnJheSBvZiBsYW5ndWFnZXMgYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgaWYgQC5fZW5hYmxlZCgpXG4gICAgICBpZiBfLmlzQXJyYXkgQC5jb25mLnN1cHBvcnRlZF9sYW5ndWFnZXNcbiAgICAgICAgcmV0dXJuIF8udW5pb24oW0AuX2ZhbGxiYWNrX2xhbmd1YWdlXSwgQC5jb25mLnN1cHBvcnRlZF9sYW5ndWFnZXMpXG4gICAgICBlbHNlXG4gICAgICAgICMgSWYgc3VwcG9ydGVkX2xhbmd1YWdlcyBpcyBudWxsLCBhbGwgdGhlIGxhbmd1YWdlcyB3ZSBmb3VuZFxuICAgICAgICAjIHRyYW5zbGF0aW9ucyBmaWxlcyB0byBpbiB0aGUgcHJvamVjdCBsZXZlbCBhcmUgY29uc2lkZXJlZCBzdXBwb3J0ZWQuXG4gICAgICAgICMgV2UgdXNlIHRoZSBALmxhbmd1YWdlc19uYW1lcyBhcnJheSB0byB0ZWxsIHdoaWNoIGxhbmd1YWdlcyB3ZSBmb3VuZFxuICAgICAgICAjIHNpbmNlIGZvciBldmVyeSBpMThuLmpzb24gZmlsZSB3ZSBmb3VuZCBpbiB0aGUgcHJvamVjdCBsZXZlbCB3ZSBhZGRcbiAgICAgICAgIyBhbiBlbnRyeSBmb3IgaXRzIGxhbmd1YWdlIHRvIEAubGFuZ3VhZ2VzX25hbWVzIGluIHRoZSBidWlsZCBwcm9jZXNzLlxuICAgICAgICAjXG4gICAgICAgICMgV2UgYWxzbyBrbm93IGZvciBjZXJ0YWluIHRoYXQgd2hlbiB0YXAtaTE4biBpcyBlbmFibGVkIHRoZSBmYWxsYmFja1xuICAgICAgICAjIGxhbmcgaXMgaW4gQC5sYW5ndWFnZXNfbmFtZXNcbiAgICAgICAgcmV0dXJuIF8ua2V5cyBALmxhbmd1YWdlc19uYW1lc1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBbQC5fZmFsbGJhY2tfbGFuZ3VhZ2VdXG5cbiAgZ2V0TGFuZ3VhZ2VzOiAtPlxuICAgIGlmIG5vdCBALl9lbmFibGVkKClcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBsYW5ndWFnZXMgPSB7fVxuICAgIGZvciBsYW5nX3RhZyBpbiBALl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKClcbiAgICAgIGxhbmd1YWdlc1tsYW5nX3RhZ10gPVxuICAgICAgICBuYW1lOiBALmxhbmd1YWdlc19uYW1lc1tsYW5nX3RhZ11bMV1cbiAgICAgICAgZW46IEAubGFuZ3VhZ2VzX25hbWVzW2xhbmdfdGFnXVswXVxuXG4gICAgbGFuZ3VhZ2VzXG5cbiAgX2NkbjogKHBhdGgpIC0+IHBhdGhcbiAgc2V0Q2RuQ2I6IChjYikgLT5cbiAgICBAX2NkbiA9IGNiXG4gICAgcmV0dXJuXG5cbiAgX2xvYWRMYW5nRmlsZU9iamVjdDogKGxhbmd1YWdlX3RhZywgZGF0YSkgLT5cbiAgICBmb3IgcGFja2FnZV9uYW1lLCBwYWNrYWdlX2tleXMgb2YgZGF0YVxuICAgICAgIyBUcmFuc2xhdGlvbnMgdGhhdCBhcmUgYWRkZWQgYnkgbG9hZFRyYW5zbGF0aW9ucygpIGhhdmUgaGlnaGVyIHByaW9yaXR5XG4gICAgICBwYWNrYWdlX2tleXMgPSBfLmV4dGVuZCh7fSwgcGFja2FnZV9rZXlzLCBAX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXT9bcGFja2FnZV9uYW1lXSBvciB7fSlcblxuICAgICAgQGFkZFJlc291cmNlQnVuZGxlKGxhbmd1YWdlX3RhZywgcGFja2FnZV9uYW1lLCBwYWNrYWdlX2tleXMpXG5cbiAgX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGU6IHt9XG4gIGxvYWRUcmFuc2xhdGlvbnM6ICh0cmFuc2xhdGlvbnMsIG5hbWVzcGFjZSkgLT5cbiAgICBwcm9qZWN0X2xhbmd1YWdlcyA9IEBfZ2V0UHJvamVjdExhbmd1YWdlcygpXG5cbiAgICBmb3IgbGFuZ3VhZ2VfdGFnLCB0cmFuc2xhdGlvbl9rZXlzIG9mIHRyYW5zbGF0aW9uc1xuICAgICAgaWYgbm90IEBfbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddP1xuICAgICAgICBAX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXSA9IHt9XG5cbiAgICAgIGlmIG5vdCBAX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXVtuYW1lc3BhY2VdP1xuICAgICAgICBAX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXVtuYW1lc3BhY2VdID0ge31cblxuICAgICAgXy5leHRlbmQoQF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ11bbmFtZXNwYWNlXSwgdHJhbnNsYXRpb25fa2V5cylcblxuICAgICAgQGFkZFJlc291cmNlQnVuZGxlKGxhbmd1YWdlX3RhZywgbmFtZXNwYWNlLCB0cmFuc2xhdGlvbl9rZXlzKVxuXG4gICAgICBpZiBNZXRlb3IuaXNDbGllbnQgYW5kIEBnZXRMYW5ndWFnZSgpID09IGxhbmd1YWdlX3RhZ1xuICAgICAgICAjIFJldHJhbnNsYXRlIGlmIHNlc3Npb24gbGFuZ3VhZ2UgdXBkYXRlZFxuICAgICAgICBAX2xhbmd1YWdlX2NoYW5nZWRfdHJhY2tlci5jaGFuZ2VkKCkiLCJ2YXIgZmFsbGJhY2tfbGFuZ3VhZ2U7ICAgICAgICAgXG5cbmZhbGxiYWNrX2xhbmd1YWdlID0gZ2xvYmFscy5mYWxsYmFja19sYW5ndWFnZTtcblxuVEFQaTE4biA9IGZ1bmN0aW9uKCkge1xuICBFdmVudEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2UgPSBmYWxsYmFja19sYW5ndWFnZTtcbiAgdGhpcy5fbGFuZ3VhZ2VfY2hhbmdlZF90cmFja2VyID0gbmV3IFRyYWNrZXIuRGVwZW5kZW5jeTtcbiAgdGhpcy5fbG9hZGVkX2xhbmd1YWdlcyA9IFtmYWxsYmFja19sYW5ndWFnZV07IC8vIHN0b3JlcyB0aGUgbG9hZGVkIGxhbmd1YWdlcywgdGhlIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGxvYWRlZCBhdXRvbWF0aWNhbGx5XG4gIHRoaXMuY29uZiA9IG51bGw7IC8vIElmIGNvbmYgaXNuJ3QgbnVsbCB3ZSBhc3N1bWUgdGhhdCB0YXA6aTE4biBpcyBlbmFibGVkIGZvciB0aGUgcHJvamVjdC5cbiAgLy8gV2UgYXNzdW1lIGNvbmYgaXMgdmFsaWQsIHdlIHN0ZXJpbGl6ZSBhbmQgdmFsaWRhdGUgaXQgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzLlxuICB0aGlzLnBhY2thZ2VzID0ge307IC8vIFN0b3JlcyB0aGUgcGFja2FnZXMnIHBhY2thZ2UtdGFwLmkxOG4ganNvbnNcbiAgdGhpcy5sYW5ndWFnZXNfbmFtZXMgPSB7fTsgLy8gU3RvcmVzIGxhbmd1YWdlcyB0aGF0IHdlJ3ZlIGZvdW5kIGxhbmd1YWdlcyBmaWxlcyBmb3IgaW4gdGhlIHByb2plY3QgZGlyLlxuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAgbGFuZ190YWc6IFtsYW5nX25hbWVfaW5fZW5nbGlzaCwgbGFuZ19uYW1lX2luX2xvY2FsX2xhbmd1YWdlXVxuICAvLyB9XG4gIHRoaXMudHJhbnNsYXRpb25zID0ge307IC8vIFN0b3JlcyB0aGUgcGFja2FnZXMvcHJvamVjdCB0cmFuc2xhdGlvbnMgLSBTZXJ2ZXIgc2lkZSBvbmx5XG4gIC8vIGZhbGxiYWNrX2xhbmd1YWdlIHRyYW5zbGF0aW9ucyBhcmUgbm90IHN0b3JlZCBoZXJlXG4gIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcbiAgICBTZXNzaW9uLnNldCh0aGlzLl9sb2FkZWRfbGFuZ19zZXNzaW9uX2tleSwgbnVsbCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzID0ge307XG4gICAgdGhpcy5fbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzVHJhY2tlcnMgPSB7fTtcbiAgfVxuICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnMgPSB7fTtcbiAgICBNZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gICAgICAvLyBJZiB0YXAtaTE4biBpcyBlbmFibGVkIGZvciB0aGF0IHByb2plY3RcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVySFRUUE1ldGhvZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHRoaXMuX18gPSB0aGlzLl9nZXRQYWNrYWdlSTE4bmV4dFByb3h5KGdsb2JhbHMucHJvamVjdF90cmFuc2xhdGlvbnNfZG9tYWluKTtcbiAgVEFQaTE4bmV4dC5zZXRMbmcoZmFsbGJhY2tfbGFuZ3VhZ2UpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblV0aWwuaW5oZXJpdHMoVEFQaTE4biwgRXZlbnRFbWl0dGVyKTtcblxuXy5leHRlbmQoVEFQaTE4bi5wcm90b3R5cGUsIHtcbiAgX2xvYWRlZF9sYW5nX3Nlc3Npb25fa2V5OiBcIlRBUGkxOG46OmxvYWRlZF9sYW5nXCIsXG4gIF9lbmFibGU6IGZ1bmN0aW9uKGNvbmYpIHtcbiAgICAvLyB0YXA6aTE4biBnZXRzIGVuYWJsZWQgZm9yIGEgcHJvamVjdCBvbmNlIGEgY29uZiBmaWxlIGlzIHNldCBmb3IgaXQuXG4gICAgLy8gSXQgY2FuIGJlIGVpdGhlciBhIGNvbmYgb2JqZWN0IHRoYXQgd2FzIHNldCBieSBwcm9qZWN0LXRhcC5pMThuIGZpbGUgb3JcbiAgICAvLyBhIGRlZmF1bHQgY29uZiwgd2hpY2ggaXMgYmVpbmcgYWRkZWQgaWYgdGhlIHByb2plY3QgaGFzIGxhbmcgZmlsZXNcbiAgICAvLyAoKi5pMThuLmpzb24pIGJ1dCBub3QgcHJvamVjdC10YXAuaTE4blxuICAgIHRoaXMuY29uZiA9IGNvbmY7XG4gICAgcmV0dXJuIHRoaXMuX29uY2VFbmFibGVkKCk7XG4gIH0sXG4gIF9vbmNlRW5hYmxlZDogZnVuY3Rpb24oKSB7fSxcbiAgLy8gVGhlIGFyY2ggc3BlY2lmaWMgY29kZSBjYW4gdXNlIHRoaXMgZm9yIHByb2NlZHVyZXMgdGhhdCBzaG91bGQgYmUgcGVyZm9ybWVkIG9uY2VcbiAgLy8gdGFwOmkxOG4gZ2V0cyBlbmFibGVkIChwcm9qZWN0IGNvbmYgZmlsZSBpcyBiZWluZyBzZXQpXG4gIF9lbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyByZWFkIHRoZSBjb21tZW50IG9mIEBjb25mXG4gICAgcmV0dXJuIHRoaXMuY29uZiAhPSBudWxsO1xuICB9LFxuICBfZ2V0UGFja2FnZURvbWFpbjogZnVuY3Rpb24ocGFja2FnZV9uYW1lKSB7XG4gICAgcmV0dXJuIHBhY2thZ2VfbmFtZS5yZXBsYWNlKC86L2csIFwiLVwiKTtcbiAgfSxcbiAgYWRkUmVzb3VyY2VCdW5kbGU6IGZ1bmN0aW9uKGxhbmdfdGFnLCBwYWNrYWdlX25hbWUsIHRyYW5zbGF0aW9ucykge1xuICAgIHJldHVybiBUQVBpMThuZXh0LmFkZFJlc291cmNlQnVuZGxlKGxhbmdfdGFnLCB0aGlzLl9nZXRQYWNrYWdlRG9tYWluKHBhY2thZ2VfbmFtZSksIHRyYW5zbGF0aW9ucyk7XG4gIH0sXG4gIF9nZXRTcGVjaWZpY0xhbmdUcmFuc2xhdG9yOiBmdW5jdGlvbihsYW5nKSB7XG4gICAgdmFyIGN1cnJlbnRfbGFuZywgdHJhbnNsYXRvcjtcbiAgICBjdXJyZW50X2xhbmcgPSBUQVBpMThuZXh0LmxuZygpO1xuICAgIHRyYW5zbGF0b3IgPSBudWxsO1xuICAgIFRBUGkxOG5leHQuc2V0TG5nKGxhbmcsIHtcbiAgICAgIGZpeExuZzogdHJ1ZVxuICAgIH0sIChsYW5nX3RyYW5zbGF0b3IpID0+IHtcbiAgICAgIHJldHVybiB0cmFuc2xhdG9yID0gbGFuZ190cmFuc2xhdG9yO1xuICAgIH0pO1xuICAgIC8vIFJlc3RvcmUgaTE4bmV4dCBsYW5nIHRoYXQgaGFkIGJlZW4gY2hhbmdlZCBpbiB0aGUgcHJvY2VzcyBvZiBnZW5lcmF0aW5nXG4gICAgLy8gbGFuZyBzcGVjaWZpYyB0cmFuc2xhdG9yXG4gICAgVEFQaTE4bmV4dC5zZXRMbmcoY3VycmVudF9sYW5nKTtcbiAgICByZXR1cm4gdHJhbnNsYXRvcjtcbiAgfSxcbiAgX2dldFByb2plY3RMYW5ndWFnZXM6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBsYW5ndWFnZXMgYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQoKSkge1xuICAgICAgaWYgKF8uaXNBcnJheSh0aGlzLmNvbmYuc3VwcG9ydGVkX2xhbmd1YWdlcykpIHtcbiAgICAgICAgcmV0dXJuIF8udW5pb24oW3RoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlXSwgdGhpcy5jb25mLnN1cHBvcnRlZF9sYW5ndWFnZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgc3VwcG9ydGVkX2xhbmd1YWdlcyBpcyBudWxsLCBhbGwgdGhlIGxhbmd1YWdlcyB3ZSBmb3VuZFxuICAgICAgICAvLyB0cmFuc2xhdGlvbnMgZmlsZXMgdG8gaW4gdGhlIHByb2plY3QgbGV2ZWwgYXJlIGNvbnNpZGVyZWQgc3VwcG9ydGVkLlxuICAgICAgICAvLyBXZSB1c2UgdGhlIEAubGFuZ3VhZ2VzX25hbWVzIGFycmF5IHRvIHRlbGwgd2hpY2ggbGFuZ3VhZ2VzIHdlIGZvdW5kXG4gICAgICAgIC8vIHNpbmNlIGZvciBldmVyeSBpMThuLmpzb24gZmlsZSB3ZSBmb3VuZCBpbiB0aGUgcHJvamVjdCBsZXZlbCB3ZSBhZGRcbiAgICAgICAgLy8gYW4gZW50cnkgZm9yIGl0cyBsYW5ndWFnZSB0byBALmxhbmd1YWdlc19uYW1lcyBpbiB0aGUgYnVpbGQgcHJvY2Vzcy5cblxuICAgICAgICAvLyBXZSBhbHNvIGtub3cgZm9yIGNlcnRhaW4gdGhhdCB3aGVuIHRhcC1pMThuIGlzIGVuYWJsZWQgdGhlIGZhbGxiYWNrXG4gICAgICAgIC8vIGxhbmcgaXMgaW4gQC5sYW5ndWFnZXNfbmFtZXNcbiAgICAgICAgcmV0dXJuIF8ua2V5cyh0aGlzLmxhbmd1YWdlc19uYW1lcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdO1xuICAgIH1cbiAgfSxcbiAgZ2V0TGFuZ3VhZ2VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGFuZ190YWcsIGxhbmd1YWdlcywgbGVuLCByZWY7XG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsYW5ndWFnZXMgPSB7fTtcbiAgICByZWYgPSB0aGlzLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCk7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsYW5nX3RhZyA9IHJlZltpXTtcbiAgICAgIGxhbmd1YWdlc1tsYW5nX3RhZ10gPSB7XG4gICAgICAgIG5hbWU6IHRoaXMubGFuZ3VhZ2VzX25hbWVzW2xhbmdfdGFnXVsxXSxcbiAgICAgICAgZW46IHRoaXMubGFuZ3VhZ2VzX25hbWVzW2xhbmdfdGFnXVswXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGxhbmd1YWdlcztcbiAgfSxcbiAgX2NkbjogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9LFxuICBzZXRDZG5DYjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLl9jZG4gPSBjYjtcbiAgfSxcbiAgX2xvYWRMYW5nRmlsZU9iamVjdDogZnVuY3Rpb24obGFuZ3VhZ2VfdGFnLCBkYXRhKSB7XG4gICAgdmFyIHBhY2thZ2Vfa2V5cywgcGFja2FnZV9uYW1lLCByZWYsIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAocGFja2FnZV9uYW1lIGluIGRhdGEpIHtcbiAgICAgIHBhY2thZ2Vfa2V5cyA9IGRhdGFbcGFja2FnZV9uYW1lXTtcbiAgICAgIC8vIFRyYW5zbGF0aW9ucyB0aGF0IGFyZSBhZGRlZCBieSBsb2FkVHJhbnNsYXRpb25zKCkgaGF2ZSBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHBhY2thZ2Vfa2V5cyA9IF8uZXh0ZW5kKHt9LCBwYWNrYWdlX2tleXMsICgocmVmID0gdGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddKSAhPSBudWxsID8gcmVmW3BhY2thZ2VfbmFtZV0gOiB2b2lkIDApIHx8IHt9KTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZFJlc291cmNlQnVuZGxlKGxhbmd1YWdlX3RhZywgcGFja2FnZV9uYW1lLCBwYWNrYWdlX2tleXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG4gIF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlOiB7fSxcbiAgbG9hZFRyYW5zbGF0aW9uczogZnVuY3Rpb24odHJhbnNsYXRpb25zLCBuYW1lc3BhY2UpIHtcbiAgICB2YXIgbGFuZ3VhZ2VfdGFnLCBwcm9qZWN0X2xhbmd1YWdlcywgcmVzdWx0cywgdHJhbnNsYXRpb25fa2V5cztcbiAgICBwcm9qZWN0X2xhbmd1YWdlcyA9IHRoaXMuX2dldFByb2plY3RMYW5ndWFnZXMoKTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChsYW5ndWFnZV90YWcgaW4gdHJhbnNsYXRpb25zKSB7XG4gICAgICB0cmFuc2xhdGlvbl9rZXlzID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlX3RhZ107XG4gICAgICBpZiAodGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddID0ge307XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddW25hbWVzcGFjZV0gPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ11bbmFtZXNwYWNlXSA9IHt9O1xuICAgICAgfVxuICAgICAgXy5leHRlbmQodGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddW25hbWVzcGFjZV0sIHRyYW5zbGF0aW9uX2tleXMpO1xuICAgICAgdGhpcy5hZGRSZXNvdXJjZUJ1bmRsZShsYW5ndWFnZV90YWcsIG5hbWVzcGFjZSwgdHJhbnNsYXRpb25fa2V5cyk7XG4gICAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50ICYmIHRoaXMuZ2V0TGFuZ3VhZ2UoKSA9PT0gbGFuZ3VhZ2VfdGFnKSB7XG4gICAgICAgIC8vIFJldHJhbnNsYXRlIGlmIHNlc3Npb24gbGFuZ3VhZ2UgdXBkYXRlZFxuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fbGFuZ3VhZ2VfY2hhbmdlZF90cmFja2VyLmNoYW5nZWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn0pO1xuIiwiXy5leHRlbmQgVEFQaTE4bi5wcm90b3R5cGUsXG4gIHNlcnZlcl90cmFuc2xhdG9yczogbnVsbFxuXG4gIF9yZWdpc3RlclNlcnZlclRyYW5zbGF0b3I6IChsYW5nX3RhZywgcGFja2FnZV9uYW1lKSAtPlxuICAgIGlmIEBfZW5hYmxlZCgpXG4gICAgICBpZiBub3QobGFuZ190YWcgb2YgQHNlcnZlcl90cmFuc2xhdG9ycylcbiAgICAgICAgQHNlcnZlcl90cmFuc2xhdG9yc1tsYW5nX3RhZ10gPSBAX2dldFNwZWNpZmljTGFuZ1RyYW5zbGF0b3IobGFuZ190YWcpXG5cbiAgICAgICMgZmFsbGJhY2sgbGFuZ3VhZ2UgaXMgaW50ZWdyYXRlZCwgYW5kIGlzbid0IHBhcnQgb2YgQHRyYW5zbGF0aW9ucyBcbiAgICAgIGlmIGxhbmdfdGFnICE9IEBfZmFsbGJhY2tfbGFuZ3VhZ2VcbiAgICAgICAgQGFkZFJlc291cmNlQnVuZGxlKGxhbmdfdGFnLCBwYWNrYWdlX25hbWUsIEB0cmFuc2xhdGlvbnNbbGFuZ190YWddW3BhY2thZ2VfbmFtZV0pXG5cbiAgICBpZiBub3QoQF9mYWxsYmFja19sYW5ndWFnZSBvZiBAc2VydmVyX3RyYW5zbGF0b3JzKVxuICAgICAgQHNlcnZlcl90cmFuc2xhdG9yc1tAX2ZhbGxiYWNrX2xhbmd1YWdlXSA9IEBfZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcihAX2ZhbGxiYWNrX2xhbmd1YWdlKVxuXG4gIF9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzOiAoKSAtPlxuICAgIGZvciBsYW5nX3RhZyBpbiBAX2dldFByb2plY3RMYW5ndWFnZXMoKVxuICAgICAgZm9yIHBhY2thZ2VfbmFtZSBvZiBAdHJhbnNsYXRpb25zW2xhbmdfdGFnXVxuICAgICAgICBAX3JlZ2lzdGVyU2VydmVyVHJhbnNsYXRvcihsYW5nX3RhZywgcGFja2FnZV9uYW1lKVxuXG4gIF9nZXRQYWNrYWdlSTE4bmV4dFByb3h5OiAocGFja2FnZV9uYW1lKSAtPlxuICAgICMgQSBwcm94eSB0byBUQVBpMThuZXh0LnQgd2hlcmUgdGhlIG5hbWVzcGFjZSBpcyBwcmVzZXQgdG8gdGhlIHBhY2thZ2Unc1xuICAgIChrZXksIG9wdGlvbnMsIGxhbmdfdGFnPW51bGwpID0+XG4gICAgICBpZiBub3QgbGFuZ190YWc/XG4gICAgICAgICMgdHJhbnNsYXRlIHRvIGZhbGxiYWNrX2xhbmd1YWdlXG4gICAgICAgIHJldHVybiBAc2VydmVyX3RyYW5zbGF0b3JzW0BfZmFsbGJhY2tfbGFuZ3VhZ2VdIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcbiAgICAgIGVsc2UgaWYgbm90KGxhbmdfdGFnIG9mIEBzZXJ2ZXJfdHJhbnNsYXRvcnMpXG4gICAgICAgIGNvbnNvbGUubG9nIFwiV2FybmluZzogbGFuZ3VhZ2UgI3tsYW5nX3RhZ30gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIHByb2plY3QsIGZhbGxiYWNrIGxhbmd1YWdlICgje0BfZmFsbGJhY2tfbGFuZ3VhZ2V9KVwiXG4gICAgICAgIHJldHVybiBAc2VydmVyX3RyYW5zbGF0b3JzW0BfZmFsbGJhY2tfbGFuZ3VhZ2VdIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIEBzZXJ2ZXJfdHJhbnNsYXRvcnNbbGFuZ190YWddIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcblxuICBfcmVnaXN0ZXJIVFRQTWV0aG9kOiAtPlxuICAgIHNlbGYgPSBAXG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGlmIG5vdCBzZWxmLl9lbmFibGVkKClcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNTAwLCBcInRhcC1pMThuIGhhcyB0byBiZSBlbmFibGVkIGluIG9yZGVyIHRvIHJlZ2lzdGVyIHRoZSBIVFRQIG1ldGhvZFwiXG4gICAgXG4gICAgYmFzZV9yb3V0ZSA9IFwiI3tzZWxmLmNvbmYuaTE4bl9maWxlc19yb3V0ZS5yZXBsYWNlKC9cXC8kLywgXCJcIil9XCJcblxuICAgIG11bHRpX2xhbmdfcm91dGUgPSBcIiN7YmFzZV9yb3V0ZX0vbXVsdGkvXCJcbiAgICBtdWx0aV9sYW5nX3JlZ2V4ID0gbmV3IFJlZ0V4cCBcIl4oKCN7Z2xvYmFscy5sYW5nYXVnZXNfdGFnc19yZWdleH0sKSoje2dsb2JhbHMubGFuZ2F1Z2VzX3RhZ3NfcmVnZXh9fGFsbClcXFxcLmpzb24oXFxcXD8uKik/JFwiXG4gICAgV2ViQXBwLmNvbm5lY3RIYW5kbGVycy51c2UgKHJlcSwgcmVzLCBuZXh0KSAtPlxuICAgICAgaWYgbm90IHJlcS51cmwuc3RhcnRzV2l0aChtdWx0aV9sYW5nX3JvdXRlKVxuICAgICAgICBuZXh0KClcblxuICAgICAgICByZXR1cm5cblxuICAgICAgbGFuZ3MgPSByZXEudXJsLnJlcGxhY2UgbXVsdGlfbGFuZ19yb3V0ZSwgXCJcIlxuICAgICAgaWYgbm90IG11bHRpX2xhbmdfcmVnZXgudGVzdCBsYW5nc1xuICAgICAgICByZXMud3JpdGVIZWFkIDQwMVxuICAgICAgICByZXMuZW5kKFwidGFwOmkxOG46IG11bHRpIGxhbmd1YWdlIHJvdXRlOiBjb3VsZG4ndCBwcm9jZXNzIHVybDogYCN7cmVxLnVybH0nOyBDb3VsZG4ndCBwYXJzZSBsYW5nIHBvcnRpb24gb2Ygcm91dGU6IGAje2xhbmdzfSdcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICBcbiAgICAgICMgSWYgYWxsIGxhbmcgaXMgcmVxdWVzdGVkLCByZXR1cm4gYWxsLlxuICAgICAgaWYgKGxhbmdzID0gbGFuZ3MucmVwbGFjZSAvXFwuanNvblxcPz8uKi8sIFwiXCIsIFwiXCIpIGlzIFwiYWxsXCJcbiAgICAgICAgcmVzLndyaXRlSGVhZCAyMDAsIFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgcmVzLmVuZCBKU09OLnN0cmluZ2lmeSBzZWxmLnRyYW5zbGF0aW9ucywgXCJ1dGY4XCJcbiAgICAgICAgcmV0dXJuXG4gICAgICBcbiAgICAgIG91dHB1dCA9IHt9XG4gICAgICBsYW5nX3RhZ3MgPSBsYW5ncy5zcGxpdCBcIixcIlxuICAgICAgZm9yIGxhbmdfdGFnIGluIGxhbmdfdGFnc1xuICAgICAgICBpZiBsYW5nX3RhZyBpbiBzZWxmLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCkgYW5kIGxhbmdfdGFnIGlzbnQgc2VsZi5fZmFsbGJhY2tfbGFuZ3VhZ2VcbiAgICAgICAgICBpZiAobGFuZ3VhZ2VfdHJhbnNsYXRpb25zID0gc2VsZi50cmFuc2xhdGlvbnNbbGFuZ190YWddKT9cbiAgICAgICAgICAgIG91dHB1dFtsYW5nX3RhZ10gPSBsYW5ndWFnZV90cmFuc2xhdGlvbnNcblxuICAgICAgcmVzLndyaXRlSGVhZCAyMDAsIFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxuICAgICAgcmVzLmVuZCBKU09OLnN0cmluZ2lmeSBvdXRwdXQsIFwidXRmOFwiXG5cbiAgICAgIHJldHVyblxuXG4gICAgc2luZ2xlX2xhbmdfcm91dGUgPSBcIiN7YmFzZV9yb3V0ZX0vXCJcbiAgICBzaW5nbGVfbGFuZ19yZWdleCA9IG5ldyBSZWdFeHAgXCJeI3tnbG9iYWxzLmxhbmdhdWdlc190YWdzX3JlZ2V4fS5qc29uKFxcXFw/LiopPyRcIlxuICAgIFdlYkFwcC5jb25uZWN0SGFuZGxlcnMudXNlIChyZXEsIHJlcywgbmV4dCkgLT5cbiAgICAgIGlmIG5vdCByZXEudXJsLnN0YXJ0c1dpdGgoc2luZ2xlX2xhbmdfcm91dGUpXG4gICAgICAgIG5leHQoKVxuXG4gICAgICAgIHJldHVyblxuXG4gICAgICBsYW5nID0gcmVxLnVybC5yZXBsYWNlIHNpbmdsZV9sYW5nX3JvdXRlLCBcIlwiXG4gICAgICBpZiBub3Qgc2luZ2xlX2xhbmdfcmVnZXgudGVzdCBsYW5nXG4gICAgICAgIHJlcy53cml0ZUhlYWQgNDAxXG4gICAgICAgIHJlcy5lbmQoXCJ0YXA6aTE4bjogc2luZ2xlIGxhbmd1YWdlIHJvdXRlOiBjb3VsZG4ndCBwcm9jZXNzIHVybDogI3tyZXEudXJsfVwiKVxuICAgICAgICByZXR1cm5cbiAgICAgIGxhbmdfdGFnID0gbGFuZy5yZXBsYWNlIC9cXC5qc29uXFw/Py4qLywgXCJcIlxuXG4gICAgICBpZiAobGFuZ190YWcgbm90IGluIHNlbGYuX2dldFByb2plY3RMYW5ndWFnZXMoKSkgb3IgKGxhbmdfdGFnIGlzIHNlbGYuX2ZhbGxiYWNrX2xhbmd1YWdlKVxuICAgICAgICByZXMud3JpdGVIZWFkIDQwNFxuICAgICAgICByZXMuZW5kKClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGxhbmd1YWdlX3RyYW5zbGF0aW9ucyA9IHNlbGYudHJhbnNsYXRpb25zW2xhbmdfdGFnXSBvciB7fVxuICAgICAgIyByZXR1cm5pbmcge30gaWYgbGFuZ190YWcgaXMgbm90IGluIHRyYW5zbGF0aW9ucyBhbGxvd3MgdGhlIHByb2plY3RcbiAgICAgICMgZGV2ZWxvcGVyIHRvIGZvcmNlIGEgbGFuZ3VhZ2Ugc3VwcG9ydGUgd2l0aCBwcm9qZWN0LXRhcC5pMThuJ3NcbiAgICAgICMgc3VwcG9ydGVkX2xhbmd1YWdlcyBwcm9wZXJ0eSwgZXZlbiBpZiB0aGF0IGxhbmd1YWdlIGhhcyBubyBsYW5nXG4gICAgICAjIGZpbGVzLlxuICAgICAgcmVzLndyaXRlSGVhZCAyMDAsIFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxuICAgICAgcmVzLmVuZCBKU09OLnN0cmluZ2lmeSBsYW5ndWFnZV90cmFuc2xhdGlvbnMsIFwidXRmOFwiXG5cbiAgICAgIHJldHVyblxuICAgIFxuICBfb25jZUVuYWJsZWQ6IC0+XG4gICAgQF9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzKCkiLCJ2YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbl8uZXh0ZW5kKFRBUGkxOG4ucHJvdG90eXBlLCB7XG4gIHNlcnZlcl90cmFuc2xhdG9yczogbnVsbCxcbiAgX3JlZ2lzdGVyU2VydmVyVHJhbnNsYXRvcjogZnVuY3Rpb24obGFuZ190YWcsIHBhY2thZ2VfbmFtZSkge1xuICAgIGlmICh0aGlzLl9lbmFibGVkKCkpIHtcbiAgICAgIGlmICghKGxhbmdfdGFnIGluIHRoaXMuc2VydmVyX3RyYW5zbGF0b3JzKSkge1xuICAgICAgICB0aGlzLnNlcnZlcl90cmFuc2xhdG9yc1tsYW5nX3RhZ10gPSB0aGlzLl9nZXRTcGVjaWZpY0xhbmdUcmFuc2xhdG9yKGxhbmdfdGFnKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGludGVncmF0ZWQsIGFuZCBpc24ndCBwYXJ0IG9mIEB0cmFuc2xhdGlvbnMgXG4gICAgICBpZiAobGFuZ190YWcgIT09IHRoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzb3VyY2VCdW5kbGUobGFuZ190YWcsIHBhY2thZ2VfbmFtZSwgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ190YWddW3BhY2thZ2VfbmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISh0aGlzLl9mYWxsYmFja19sYW5ndWFnZSBpbiB0aGlzLnNlcnZlcl90cmFuc2xhdG9ycykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlcnZlcl90cmFuc2xhdG9yc1t0aGlzLl9mYWxsYmFja19sYW5ndWFnZV0gPSB0aGlzLl9nZXRTcGVjaWZpY0xhbmdUcmFuc2xhdG9yKHRoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlKTtcbiAgICB9XG4gIH0sXG4gIF9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGFuZ190YWcsIGxlbiwgcGFja2FnZV9uYW1lLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5fZ2V0UHJvamVjdExhbmd1YWdlcygpO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxhbmdfdGFnID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMxO1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKHBhY2thZ2VfbmFtZSBpbiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nX3RhZ10pIHtcbiAgICAgICAgICByZXN1bHRzMS5wdXNoKHRoaXMuX3JlZ2lzdGVyU2VydmVyVHJhbnNsYXRvcihsYW5nX3RhZywgcGFja2FnZV9uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMxO1xuICAgICAgfSkuY2FsbCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuICBfZ2V0UGFja2FnZUkxOG5leHRQcm94eTogZnVuY3Rpb24ocGFja2FnZV9uYW1lKSB7XG4gICAgLy8gQSBwcm94eSB0byBUQVBpMThuZXh0LnQgd2hlcmUgdGhlIG5hbWVzcGFjZSBpcyBwcmVzZXQgdG8gdGhlIHBhY2thZ2Unc1xuICAgIHJldHVybiAoa2V5LCBvcHRpb25zLCBsYW5nX3RhZyA9IG51bGwpID0+IHtcbiAgICAgIGlmIChsYW5nX3RhZyA9PSBudWxsKSB7XG4gICAgICAgIC8vIHRyYW5zbGF0ZSB0byBmYWxsYmFja19sYW5ndWFnZVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdKGAke3RoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06JHtrZXl9YCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKCEobGFuZ190YWcgaW4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXYXJuaW5nOiBsYW5ndWFnZSAke2xhbmdfdGFnfSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgcHJvamVjdCwgZmFsbGJhY2sgbGFuZ3VhZ2UgKCR7dGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2V9KWApO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdKGAke3RoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06JHtrZXl9YCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbbGFuZ190YWddKGAke3RoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06JHtrZXl9YCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgX3JlZ2lzdGVySFRUUE1ldGhvZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJhc2Vfcm91dGUsIG1ldGhvZHMsIG11bHRpX2xhbmdfcmVnZXgsIG11bHRpX2xhbmdfcm91dGUsIHNlbGYsIHNpbmdsZV9sYW5nX3JlZ2V4LCBzaW5nbGVfbGFuZ19yb3V0ZTtcbiAgICBzZWxmID0gdGhpcztcbiAgICBtZXRob2RzID0ge307XG4gICAgaWYgKCFzZWxmLl9lbmFibGVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCBcInRhcC1pMThuIGhhcyB0byBiZSBlbmFibGVkIGluIG9yZGVyIHRvIHJlZ2lzdGVyIHRoZSBIVFRQIG1ldGhvZFwiKTtcbiAgICB9XG4gICAgYmFzZV9yb3V0ZSA9IGAke3NlbGYuY29uZi5pMThuX2ZpbGVzX3JvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX1gO1xuICAgIG11bHRpX2xhbmdfcm91dGUgPSBgJHtiYXNlX3JvdXRlfS9tdWx0aS9gO1xuICAgIG11bHRpX2xhbmdfcmVnZXggPSBuZXcgUmVnRXhwKGBeKCgke2dsb2JhbHMubGFuZ2F1Z2VzX3RhZ3NfcmVnZXh9LCkqJHtnbG9iYWxzLmxhbmdhdWdlc190YWdzX3JlZ2V4fXxhbGwpXFxcXC5qc29uKFxcXFw/LiopPyRgKTtcbiAgICBXZWJBcHAuY29ubmVjdEhhbmRsZXJzLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgdmFyIGksIGxhbmdfdGFnLCBsYW5nX3RhZ3MsIGxhbmdzLCBsYW5ndWFnZV90cmFuc2xhdGlvbnMsIGxlbiwgb3V0cHV0O1xuICAgICAgaWYgKCFyZXEudXJsLnN0YXJ0c1dpdGgobXVsdGlfbGFuZ19yb3V0ZSkpIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsYW5ncyA9IHJlcS51cmwucmVwbGFjZShtdWx0aV9sYW5nX3JvdXRlLCBcIlwiKTtcbiAgICAgIGlmICghbXVsdGlfbGFuZ19yZWdleC50ZXN0KGxhbmdzKSkge1xuICAgICAgICByZXMud3JpdGVIZWFkKDQwMSk7XG4gICAgICAgIHJlcy5lbmQoYHRhcDppMThuOiBtdWx0aSBsYW5ndWFnZSByb3V0ZTogY291bGRuJ3QgcHJvY2VzcyB1cmw6IFxcYCR7cmVxLnVybH0nOyBDb3VsZG4ndCBwYXJzZSBsYW5nIHBvcnRpb24gb2Ygcm91dGU6IFxcYCR7bGFuZ3N9J2ApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIElmIGFsbCBsYW5nIGlzIHJlcXVlc3RlZCwgcmV0dXJuIGFsbC5cbiAgICAgIGlmICgobGFuZ3MgPSBsYW5ncy5yZXBsYWNlKC9cXC5qc29uXFw/Py4qLywgXCJcIiwgXCJcIikpID09PSBcImFsbFwiKSB7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoc2VsZi50cmFuc2xhdGlvbnMsIFwidXRmOFwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG91dHB1dCA9IHt9O1xuICAgICAgbGFuZ190YWdzID0gbGFuZ3Muc3BsaXQoXCIsXCIpO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gbGFuZ190YWdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhbmdfdGFnID0gbGFuZ190YWdzW2ldO1xuICAgICAgICBpZiAoaW5kZXhPZi5jYWxsKHNlbGYuX2dldFByb2plY3RMYW5ndWFnZXMoKSwgbGFuZ190YWcpID49IDAgJiYgbGFuZ190YWcgIT09IHNlbGYuX2ZhbGxiYWNrX2xhbmd1YWdlKSB7XG4gICAgICAgICAgaWYgKChsYW5ndWFnZV90cmFuc2xhdGlvbnMgPSBzZWxmLnRyYW5zbGF0aW9uc1tsYW5nX3RhZ10pICE9IG51bGwpIHtcbiAgICAgICAgICAgIG91dHB1dFtsYW5nX3RhZ10gPSBsYW5ndWFnZV90cmFuc2xhdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgIH0pO1xuICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShvdXRwdXQsIFwidXRmOFwiKSk7XG4gICAgfSk7XG4gICAgc2luZ2xlX2xhbmdfcm91dGUgPSBgJHtiYXNlX3JvdXRlfS9gO1xuICAgIHNpbmdsZV9sYW5nX3JlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7Z2xvYmFscy5sYW5nYXVnZXNfdGFnc19yZWdleH0uanNvbihcXFxcPy4qKT8kYCk7XG4gICAgcmV0dXJuIFdlYkFwcC5jb25uZWN0SGFuZGxlcnMudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICB2YXIgbGFuZywgbGFuZ190YWcsIGxhbmd1YWdlX3RyYW5zbGF0aW9ucztcbiAgICAgIGlmICghcmVxLnVybC5zdGFydHNXaXRoKHNpbmdsZV9sYW5nX3JvdXRlKSkge1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxhbmcgPSByZXEudXJsLnJlcGxhY2Uoc2luZ2xlX2xhbmdfcm91dGUsIFwiXCIpO1xuICAgICAgaWYgKCFzaW5nbGVfbGFuZ19yZWdleC50ZXN0KGxhbmcpKSB7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDAxKTtcbiAgICAgICAgcmVzLmVuZChgdGFwOmkxOG46IHNpbmdsZSBsYW5ndWFnZSByb3V0ZTogY291bGRuJ3QgcHJvY2VzcyB1cmw6ICR7cmVxLnVybH1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGFuZ190YWcgPSBsYW5nLnJlcGxhY2UoL1xcLmpzb25cXD8/LiovLCBcIlwiKTtcbiAgICAgIGlmICgoaW5kZXhPZi5jYWxsKHNlbGYuX2dldFByb2plY3RMYW5ndWFnZXMoKSwgbGFuZ190YWcpIDwgMCkgfHwgKGxhbmdfdGFnID09PSBzZWxmLl9mYWxsYmFja19sYW5ndWFnZSkpIHtcbiAgICAgICAgcmVzLndyaXRlSGVhZCg0MDQpO1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxhbmd1YWdlX3RyYW5zbGF0aW9ucyA9IHNlbGYudHJhbnNsYXRpb25zW2xhbmdfdGFnXSB8fCB7fTtcbiAgICAgIC8vIHJldHVybmluZyB7fSBpZiBsYW5nX3RhZyBpcyBub3QgaW4gdHJhbnNsYXRpb25zIGFsbG93cyB0aGUgcHJvamVjdFxuICAgICAgLy8gZGV2ZWxvcGVyIHRvIGZvcmNlIGEgbGFuZ3VhZ2Ugc3VwcG9ydGUgd2l0aCBwcm9qZWN0LXRhcC5pMThuJ3NcbiAgICAgIC8vIHN1cHBvcnRlZF9sYW5ndWFnZXMgcHJvcGVydHksIGV2ZW4gaWYgdGhhdCBsYW5ndWFnZSBoYXMgbm8gbGFuZ1xuICAgICAgLy8gZmlsZXMuXG4gICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgIH0pO1xuICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShsYW5ndWFnZV90cmFuc2xhdGlvbnMsIFwidXRmOFwiKSk7XG4gICAgfSk7XG4gIH0sXG4gIF9vbmNlRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyQWxsU2VydmVyVHJhbnNsYXRvcnMoKTtcbiAgfVxufSk7XG4iLCJUQVBpMThuID0gbmV3IFRBUGkxOG4oKSJdfQ==
