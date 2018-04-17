/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//#snippet;
//#uncheck = jsThis,jsLoop;
//#exclude = loader,allProcessor;
/*!3.8.4 Licensed MIT*/
/*
author:kooboy_li@163.com
loader:webpack
enables:style,viewInit,service,ceach,router,resource,configIni,nodeAttachVframe,viewMerge,tipRouter,updater,viewProtoMixins,base,defaultView,autoEndUpdate,linkage,updateTitleRouter,urlRewriteRouter,state,updaterVDOM

optionals:updaterDOM,updaterVRDOM,serviceCombine,tipLockUrlRouter,edgeRouter,forceEdgeRouter,cnum,collectView,layerVframe,share,mxViewAttr,keepHTML,eventEnterLeave,naked,vdom
*/
module.exports = function () {
    if (typeof DEBUG == 'undefined') window.DEBUG = true;
    var $ = __webpack_require__(2);
    var G_IsObject = $.isPlainObject;
    var G_IsArray = $.isArray;
    var G_COUNTER = 0;
    var G_EMPTY = '';
    var G_EMPTY_ARRAY = [];
    var G_COMMA = ',';
    var G_NULL = null;
    var G_WINDOW = window;
    var G_DOCUMENT = document;
    var G_DOC = $(G_DOCUMENT);
    var Timeout = G_WINDOW.setTimeout;
    var G_CHANGED = 'changed';
    var G_CHANGE = 'change';
    var G_PAGE_UNLOAD = 'pageunload';
    var G_VALUE = 'value';
    var G_Tag_Key = 'mxs';
    var G_Tag_Attr_Key = 'mxa';
    var G_HashKey = '#';
    var G_NOOP = function G_NOOP() {};
    var JSONStringify = JSON.stringify;
    var G_DOCBODY; //initilize at vframe_root
    /*
        关于spliter
        出于安全考虑，使用不可见字符\u0000，然而，window手机上ie11有这样的一个问题：'\u0000'+"abc",结果却是一个空字符串，好奇特。
     */
    var G_SPLITER = '\x1e';
    var Magix_StrObject = 'object';
    var G_PROTOTYPE = 'prototype';
    var G_PARAMS = 'params';
    var G_PATH = 'path';
    var G_MX_VIEW = 'mx-view';
    // let Magix_PathRelativeReg = /\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//; // ./|/x/../|(b)///
    // let Magix_PathTrimFileReg = /\/[^\/]*$/;
    // let Magix_ProtocalReg = /^(?:https?:)?\/\//i;
    var Magix_PathTrimParamsReg = /[#?].*$/;
    var Magix_ParamsReg = /([^=&?\/#]+)=?([^&#?]*)/g;
    var Magix_IsParam = /(?!^)=|&/;
    var G_Id = function G_Id(prefix) {
        return (prefix || 'mx_') + G_COUNTER++;
    };
    var MxGlobalView = G_Id();
    var Magix_Cfg = {
        rootId: G_Id(),
        defaultView: MxGlobalView,
        error: function error(e) {
            throw e;
        }
    };
    var G_GetById = function G_GetById(id) {
        return (typeof id === 'undefined' ? 'undefined' : _typeof(id)) == Magix_StrObject ? id : G_DOCUMENT.getElementById(id);
    };
    var G_IsPrimitive = function G_IsPrimitive(args) {
        return !args || (typeof args === 'undefined' ? 'undefined' : _typeof(args)) != Magix_StrObject;
    };
    var G_Set = function G_Set(newData, oldData, keys) {
        var changed = 0,
            now,
            old,
            p;
        for (p in newData) {
            now = newData[p];
            old = oldData[p];
            if (!G_IsPrimitive(now) || old !== now) {
                keys[p] = 1;
                changed = 1;
            }
            oldData[p] = now;
        }
        return changed;
    };
    var G_NodeIn = function G_NodeIn(a, b, r) {
        a = G_GetById(a);
        b = G_GetById(b);
        if (a && b) {
            r = a == b;
            if (!r) {
                try {
                    r = (b.compareDocumentPosition(a) & 16) == 16;
                } catch (e) {}
            }
        }
        return r;
    };
    var G_Assign = function G_Assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (G_Has(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    var G_Keys = function G_Keys(obj, keys, p) {
        keys = [];
        for (p in obj) {
            if (G_Has(obj, p)) {
                keys.push(p);
            }
        }
        return keys;
    };
    var Magix_HasProp = Magix_Cfg.hasOwnProperty;
    var Header = $('head');
    var View_ApplyStyle = function View_ApplyStyle(key, css) {
        if (DEBUG && G_IsArray(key)) {
            for (var i = 0; i < key.length; i += 2) {
                View_ApplyStyle(key[i], key[i + 1]);
            }
            return;
        }
        if (css && !View_ApplyStyle[key]) {
            View_ApplyStyle[key] = 1;
            if (DEBUG) {
                Header.append("<style id=\"" + key + "\">" + css);
            } else {
                Header.append("<style>" + css);
            }
        }
    };
    var IdIt = function IdIt(n) {
        return n.id || (n.id = G_Id());
    };
    var G_ToTry = function G_ToTry(fns, args, context, r, e) {
        args = args || G_EMPTY_ARRAY;
        if (!G_IsArray(fns)) fns = [fns];
        if (!G_IsArray(args)) args = [args];
        for (var _i = 0, fns_1 = fns; _i < fns_1.length; _i++) {
            e = fns_1[_i];
            try {
                r = e && e.apply(context, args);
            } catch (x) {
                Magix_Cfg.error(x);
            }
        }
        return r;
    };
    var G_Has = function G_Has(owner, prop) {
        return owner && Magix_HasProp.call(owner, prop);
    }; //false 0 G_NULL '' undefined
    var GSet_Params = function GSet_Params(data, oldParams, newParams) {
        var p, val;
        for (p in oldParams) {
            val = oldParams[p];
            newParams[p] = (val + G_EMPTY)[0] == G_SPLITER ? data[val] : val;
        }
    };
    var Magix_CacheSort = function Magix_CacheSort(a, b) {
        return b.f - a.f || b.t - a.t;
    };
    /**
     * Magix.Cache 类
     * @name Cache
     * @constructor
     * @param {Integer} [max] 缓存最大值，默认20
     * @param {Integer} [buffer] 缓冲区大小，默认5
     * @param {Function} [remove] 当缓存的元素被删除时调用
     * @example
     * let c = new Magix.cache(5,2);//创建一个可缓存5个，且缓存区为2个的缓存对象
     * c.set('key1',{});//缓存
     * c.get('key1');//获取
     * c.del('key1');//删除
     * c.has('key1');//判断
     * //注意：缓存通常配合其它方法使用，在Magix中，对路径的解析等使用了缓存。在使用缓存优化性能时，可以达到节省CPU和内存的双赢效果
     */
    var G_Cache = function G_Cache(max, buffer, remove, me) {
        me = this;
        me.c = [];
        me.b = buffer || 5; //buffer先取整，如果为0则再默认5
        me.x = me.b + (max || 20);
        me.r = remove;
    };
    G_Assign(G_Cache[G_PROTOTYPE], {
        /**
         * @lends Cache#
         */
        /**
         * 获取缓存的值
         * @param  {String} key
         * @return {Object} 初始设置的缓存对象
         */
        get: function get(key) {
            var me = this;
            var c = me.c;
            var r = c[G_SPLITER + key];
            if (r) {
                r.f++;
                r.t = G_COUNTER++;
                //console.log(r.f);
                r = r.v;
                //console.log('hit cache:'+key);
            }
            return r;
        },
        /**
         * 循环缓存
         * @param  {Function} cb 回调
         * @param  {Object} [ops] 回调时传递的额外参数
         * @beta
         * @module ceach|service
         */
        each: function each(cb, ops, me, c, i) {
            me = this;
            c = me.c;
            for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
                i = c_1[_i];
                cb(i.v, ops, me);
            }
        },
        /**
         * 设置缓存
         * @param {String} key 缓存的key
         * @param {Object} value 缓存的对象
         */
        set: function set(okey, value) {
            var me = this;
            var c = me.c;
            var key = G_SPLITER + okey;
            var r = c[key];
            var t = me.b,
                f;
            if (!r) {
                if (c.length >= me.x) {
                    c.sort(Magix_CacheSort);
                    while (t--) {
                        r = c.pop();
                        //为什么要判断r.f>0,考虑这样的情况：用户设置a,b，主动删除了a,重新设置a,数组中的a原来指向的对象残留在列表里，当排序删除时，如果不判断则会把新设置的删除，因为key都是a
                        //
                        if (r.f > 0) me.del(r.o); //如果没有引用，则删除
                    }
                }
                r = {
                    o: okey
                };
                c.push(r);
                c[key] = r;
            }
            r.v = value;
            r.f = 1;
            r.t = G_COUNTER++;
        },
        /**
         * 删除缓存
         * @param  {String} key 缓存key
         */
        del: function del(k) {
            k = G_SPLITER + k;
            var c = this.c;
            var r = c[k],
                m = this.r;
            if (r) {
                r.f = -1;
                r.v = G_EMPTY;
                delete c[k];
                if (m) {
                    G_ToTry(m, r.o);
                }
            }
        },
        /**
         * 检测缓存中是否有给定的key
         * @param  {String} key 缓存key
         * @return {Boolean}
         */
        has: function has(k) {
            return G_Has(this.c, G_SPLITER + k);
        }
    });
    var G_IsFunction = $.isFunction;
    var coreDefaultView;
    var G_Require = function G_Require(name, fn) {
        var views = Magix_Cfg.views || G_NOOP;
        if (!views[MxGlobalView]) views[MxGlobalView] = coreDefaultView;
        if (!name) {
            return fn();
        }
        if (!G_IsArray(name)) {
            name = [name];
        }
        var results = [],
            view;
        var promiseCount = 0;
        var checkCount = function checkCount() {
            if (!promiseCount) {
                fn.apply(Magix, results);
            }
        };
        var promise = function promise(p, idx, fn) {
            fn = function fn(v) {
                if (!results[idx]) {
                    promiseCount--;
                    results[idx] = v;
                    checkCount();
                }
            };
            p = p(fn);
            if (p.then) {
                p.then(fn);
            }
        };
        for (var i = 0; i < name.length; i++) {
            view = views[name[i]];
            if (G_IsFunction(view) && !view.extend) {
                promiseCount++;
                promise(view, i);
            } else {
                results[i] = views[name[i]];
            }
        }
        checkCount();
    };
    var T = function T() {};
    var G_Extend = function G_Extend(ctor, base, props, statics, cProto) {
        //bProto.constructor = base;
        T[G_PROTOTYPE] = base[G_PROTOTYPE];
        cProto = new T();
        G_Assign(cProto, props);
        G_Assign(ctor, statics);
        cProto.constructor = ctor;
        ctor[G_PROTOTYPE] = cProto;
        return ctor;
    };
    var G_SelectorEngine = $.find || $.zepto;
    var G_TargetMatchSelector = G_SelectorEngine.matchesSelector || G_SelectorEngine.matches;
    var G_DOMGlobalProcessor = function G_DOMGlobalProcessor(e, d) {
        d = e.data;
        e.eventTarget = d.e;
        G_ToTry(d.f, e, d.v);
    };
    var G_DOMEventLibBind = function G_DOMEventLibBind(node, type, cb, remove, scope) {
        if (scope) {
            type += "." + scope.i;
        }
        if (remove) {
            $(node).off(type, cb);
        } else {
            $(node).on(type, scope, cb);
        }
    };
    if (DEBUG) {
        var Safeguard;
        if (window.Proxy) {
            var ProxiesPool_1 = new Map();
            Safeguard = function Safeguard(data, getter, setter) {
                if (G_IsPrimitive(data)) {
                    return data;
                }
                var key = getter + '\x01' + setter;
                var cached = ProxiesPool_1.get(data);
                if (cached && cached.key == key) {
                    return cached.entity;
                }
                var build = function build(prefix, o) {
                    if (o['\x1e_sf_\x1e']) {
                        return o;
                    }
                    return new Proxy(o, {
                        set: function set(target, property, value) {
                            target[property] = value;
                            if (setter) {
                                setter(prefix + property, value);
                            }
                            return true;
                        },
                        get: function get(target, property) {
                            if (property == '\x1e_sf_\x1e') {
                                return true;
                            }
                            var out = target[property];
                            if (!prefix && getter) {
                                getter(property);
                            }
                            if (G_Has(target, property) && (G_IsArray(out) || G_IsObject(out))) {
                                return build(prefix + property + '.', out);
                            }
                            return out;
                        }
                    });
                };
                var entity = build('', data);
                ProxiesPool_1.set(data, {
                    key: key,
                    entity: entity
                });
                return entity;
            };
        } else {
            Safeguard = function Safeguard(data) {
                return data;
            };
        }
    }
    var Magix_PathToObjCache = new G_Cache();
    var Magix_Booted = 0;
    //let Magix_PathCache = new G_Cache();
    var Magix_ParamsObjectTemp;
    var Magix_ParamsFn = function Magix_ParamsFn(match, name, value) {
        try {
            value = decodeURIComponent(value);
        } catch (e) {}
        Magix_ParamsObjectTemp[name] = value;
    };
    /**
     * 路径
     * @param  {String} url  参考地址
     * @param  {String} part 相对参考地址的片断
     * @return {String}
     * @example
     * http://www.a.com/a/b.html?a=b#!/home?e=f   /   => http://www.a.com/
     * http://www.a.com/a/b.html?a=b#!/home?e=f   ./     =>http://www.a.com/a/
     * http://www.a.com/a/b.html?a=b#!/home?e=f   ../../    => http://www.a.com/
     * http://www.a.com/a/b.html?a=b#!/home?e=f   ./../  => http://www.a.com/
     * //g.cn/a.html
     */
    /*let G_Path = function(url, part) {
        let key = url + G_SPLITER + part;
        let result = Magix_PathCache.get(key),
            domain = G_EMPTY,
            idx;
        if (!Magix_PathCache.has(key)) { //有可能结果为空，url='' path='';
            let m = url.match(Magix_ProtocalReg);
            if (m) {
                idx = url.indexOf(Magix_SLASH, m[0].length);
                if (idx < 0) idx = url.length;
                domain = url.slice(0, idx);
                url = url.slice(idx);
            }
            url = url.replace(Magix_PathTrimParamsReg, G_EMPTY).replace(Magix_PathTrimFileReg, Magix_SLASH);
            if (!part.indexOf(Magix_SLASH)) {
                url = G_EMPTY;
            }
            result = url + part;
            console.log('url', url, 'part', part, 'result', result);
            while (Magix_PathRelativeReg.test(result)) {
                result = result.replace(Magix_PathRelativeReg, Magix_SLASH);
            }
            Magix_PathCache.set(key, result = domain + result);
        }
        return result;
    };*/
    /**
     * 把路径字符串转换成对象
     * @param  {String} path 路径字符串
     * @return {Object} 解析后的对象
     * @example
     * let obj = Magix.parseUri('/xxx/?a=b&c=d');
     * // obj = {path:'/xxx/',params:{a:'b',c:'d'}}
     */
    var G_ParseUri = function G_ParseUri(path) {
        //把形如 /xxx/?a=b&c=d 转换成对象 {path:'/xxx/',params:{a:'b',c:'d'}}
        //1. /xxx/a.b.c.html?a=b&c=d  path /xxx/a.b.c.html
        //2. /xxx/?a=b&c=d  path /xxx/
        //3. /xxx/#?a=b => path /xxx/
        //4. /xxx/index.html# => path /xxx/index.html
        //5. /xxx/index.html  => path /xxx/index.html
        //6. /xxx/#           => path /xxx/
        //7. a=b&c=d          => path ''
        //8. /s?src=b#        => path /s params:{src:'b'}
        //9. a=YT3O0sPH1No=   => path '' params:{a:'YT3O0sPH1No='}
        //10.a=YT3O0sPH1No===&b=c => path '' params:{a:'YT3O0sPH1No===',b:'c'}
        //11. ab?a&b          => path ab  params:{a:'',b:''}
        //12. a=b&c           => path '' params:{a:'b',c:''}
        //13. =abc            => path '=abc'
        //14. ab=             => path '' params:{ab:''}
        //15. a&b             => path '' params:{a:'',b:''}
        var r = Magix_PathToObjCache.get(path),
            pathname;
        if (!r) {
            Magix_ParamsObjectTemp = {};
            pathname = path.replace(Magix_PathTrimParamsReg, G_EMPTY);
            if (path == pathname && Magix_IsParam.test(pathname)) pathname = G_EMPTY; //考虑 YT3O0sPH1No= base64后的pathname
            path.replace(pathname, G_EMPTY).replace(Magix_ParamsReg, Magix_ParamsFn);
            Magix_PathToObjCache.set(path, r = {
                a: pathname,
                b: Magix_ParamsObjectTemp
            });
        }
        return {
            path: r.a,
            params: G_Assign({}, r.b)
        };
    };
    /**
     * 转换成字符串路径
     * @param  {String} path 路径
     * @param {Object} params 参数对象
     * @param {Object} [keo] 保留空白值的对象
     * @return {String} 字符串路径
     * @example
     * let str = Magix.toUri('/xxx/',{a:'b',c:'d'});
     * // str == /xxx/?a=b&c=d
     *
     * let str = Magix.toUri('/xxx/',{a:'',c:2});
     *
     * // str == /xxx/?a=&c=2
     *
     * let str = Magix.toUri('/xxx/',{a:'',c:2},{c:1});
     *
     * // str == /xxx/?c=2
     * let str = Magix.toUri('/xxx/',{a:'',c:2},{a:1,c:1});
     *
     * // str == /xxx/?a=&c=2
     */
    var G_ToUri = function G_ToUri(path, params, keo) {
        var arr = [],
            v,
            p,
            f;
        for (p in params) {
            v = params[p] + G_EMPTY;
            if (!keo || v || G_Has(keo, p)) {
                v = encodeURIComponent(v);
                arr.push(f = p + '=' + v);
            }
        }
        if (f) {
            path += (path && (~path.indexOf('?') ? '&' : '?')) + arr.join('&');
        }
        return path;
    };
    var G_ToMap = function G_ToMap(list, key) {
        var e,
            map = {},
            l;
        if (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                e = list_1[_i];
                map[key && e ? e[key] : e] = key ? e : (map[e] | 0) + 1; //对于简单数组，采用累加的方式，以方便知道有多少个相同的元素
            }
        }
        return map;
    };
    /**
     * Magix对象，提供常用方法
     * @name Magix
     * @namespace
     */
    var Magix = {
        /**
         * @lends Magix
         */
        /**
         * 设置或获取配置信息
         * @param  {Object} cfg 初始化配置参数对象
         * @param {String} cfg.defaultView 默认加载的view
         * @param {String} cfg.defaultPath 当无法从地址栏取到path时的默认值。比如使用hash保存路由信息，而初始进入时并没有hash,此时defaultPath会起作用
         * @param {Object} cfg.routes path与view映射关系表
         * @param {String} cfg.unmatchView 在routes里找不到匹配时使用的view，比如显示404
         * @param {String} cfg.rootId 根view的id
         * @param {Array} cfg.exts 需要加载的扩展
         * @param {Function} cfg.error 发布版以try catch执行一些用户重写的核心流程，当出错时，允许开发者通过该配置项进行捕获。注意：您不应该在该方法内再次抛出任何错误！
         * @example
         * Magix.config({
         *      rootId:'J_app_main',
         *      defaultView:'app/views/layouts/default',//默认加载的view
         *      defaultPath:'/home',
         *      routes:{
         *          "/home":"app/views/layouts/default"
         *      }
         * });
         *
         *
         * let config = Magix.config();
         *
         * console.log(config.rootId);
         *
         * // 可以多次调用该方法，除内置的配置项外，您也可以缓存一些数据，如
         * Magix.config({
         *     user:'彳刂'
         * });
         *
         * console.log(Magix.config('user'));
         */
        config: function config(cfg, r) {
            r = Magix_Cfg;
            if (cfg) {
                if (G_IsObject(cfg)) {
                    r = G_Assign(r, cfg);
                } else {
                    r = r[cfg];
                }
            }
            return r;
        },
        /**
         * 应用初始化入口
         * @function
         * @param {Object} [cfg] 配置信息对象,更多信息请参考Magix.config方法
         * @return {Object} 配置信息对象
         * @example
         * Magix.boot({
         *      rootId:'J_app_main'
         * });
         *
         */
        boot: function boot(cfg) {
            G_Assign(Magix_Cfg, cfg); //先放到配置信息中，供ini文件中使用
            G_Require(Magix_Cfg.ini, function (I) {
                G_Assign(Magix_Cfg, I, cfg);
                G_Require(Magix_Cfg.exts, function () {
                    Router.on(G_CHANGED, Dispatcher_NotifyChange);
                    State.on(G_CHANGED, Dispatcher_NotifyChange);
                    Magix_Booted = 1;
                    Router_Bind();
                });
            });
        },
        /**
         * 把列表转化成hash对象
         * @param  {Array} list 源数组
         * @param  {String} [key]  以数组中对象的哪个key的value做为hash的key
         * @return {Object}
         * @example
         * let map = Magix.toMap([1,2,3,5,6]);
         * //=> {1:1,2:1,3:1,4:1,5:1,6:1}
         *
         * let map = Magix.toMap([{id:20},{id:30},{id:40}],'id');
         * //=>{20:{id:20},30:{id:30},40:{id:40}}
         *
         * console.log(map['30']);//=> {id:30}
         * //转成对象后不需要每次都遍历数组查询
         */
        toMap: G_ToMap,
        /**
         * 以try cache方式执行方法，忽略掉任何异常
         * @function
         * @param  {Array} fns     函数数组
         * @param  {Array} [args]    参数数组
         * @param  {Object} [context] 在待执行的方法内部，this的指向
         * @return {Object} 返回执行的最后一个方法的返回值
         * @example
         * let result = Magix.toTry(function(){
         *     return true
         * });
         *
         * // result == true
         *
         * let result = Magix.toTry(function(){
         *     throw new Error('test');
         * });
         *
         * // result == undefined
         *
         * let result = Magix.toTry([function(){
         *     throw new Error('test');
         * },function(){
         *     return true;
         * }]);
         *
         * // result == true
         *
         * //异常的方法执行时，可以通过Magix.config中的error来捕获，如
         *
         * Magix.config({
         *     error:function(e){
         *         console.log(e);//在这里可以进行错误上报
         *     }
         * });
         *
         * let result = Magix.toTry(function(a1,a2){
         *     return a1 + a2;
         * },[1,2]);
         *
         * // result == 3
         * let o={
         *     title:'test'
         * };
         * let result = Magix.toTry(function(){
         *     return this.title;
         * },null,o);
         *
         * // result == 'test'
         */
        toTry: G_ToTry,
        /**
         * 转换成字符串路径
         * @function
         * @param  {String} path 路径
         * @param {Object} params 参数对象
         * @param {Object} [keo] 保留空白值的对象
         * @return {String} 字符串路径
         * @example
         * let str = Magix.toUrl('/xxx/',{a:'b',c:'d'});
         * // str == /xxx/?a=b&c=d
         *
         * let str = Magix.toUrl('/xxx/',{a:'',c:2});
         *
         * // str==/xxx/?a=&c=2
         *
         * let str = Magix.toUrl('/xxx/',{a:'',c:2},{c:1});
         *
         * // str == /xxx/?c=2
         * let str = Magix.toUrl('/xxx/',{a:'',c:2},{a:1,c:1});
         *
         * // str == /xxx/?a=&c=2
         */
        toUrl: G_ToUri,
        /**
         * 把路径字符串转换成对象
         * @function
         * @param  {String} path 路径字符串
         * @return {Object} 解析后的对象
         * @example
         * let obj = Magix.parseUrl('/xxx/?a=b&c=d');
         * // obj = {path:'/xxx/',params:{a:'b',c:'d'}}
         */
        parseUrl: G_ParseUri,
        /*
         * 路径
         * @function
         * @param  {String} url  参考地址
         * @param  {String} part 相对参考地址的片断
         * @return {String}
         * @example
         * http://www.a.com/a/b.html?a=b#!/home?e=f   /   => http://www.a.com/
         * http://www.a.com/a/b.html?a=b#!/home?e=f   ./     =>http://www.a.com/a/
         * http://www.a.com/a/b.html?a=b#!/home?e=f   ../../    => http://www.a.com/
         * http://www.a.com/a/b.html?a=b#!/home?e=f   ./../  => http://www.a.com/
         */
        //path: G_Path,
        /**
         * 把src对象的值混入到aim对象上
         * @function
         * @param  {Object} aim    要mix的目标对象
         * @param  {Object} src    mix的来源对象
         * @example
         * let o1={
         *     a:10
         * };
         * let o2={
         *     b:20,
         *     c:30
         * };
         *
         * Magix.mix(o1,o2);//{a:10,b:20,c:30}
         *
         *
         * @return {Object}
         */
        mix: G_Assign,
        /**
         * 检测某个对象是否拥有某个属性
         * @function
         * @param  {Object}  owner 检测对象
         * @param  {String}  prop  属性
         * @example
         * let obj={
         *     key1:undefined,
         *     key2:0
         * }
         *
         * Magix.has(obj,'key1');//true
         * Magix.has(obj,'key2');//true
         * Magix.has(obj,'key3');//false
         *
         *
         * @return {Boolean} 是否拥有prop属性
         */
        has: G_Has,
        /**
         * 获取对象的keys
         * @param {Object} object 获取key的对象
         * @type {Array}
         * @beta
         * @module linkage|router
         * @example
         * let o = {
         *     a:1,
         *     b:2,
         *     test:3
         * };
         * let keys = Magix.keys(o);
         *
         * // keys == ['a','b','test']
         * @return {Array}
         */
        keys: G_Keys,
        /**
         * 判断一个节点是否在另外一个节点内，如果比较的2个节点是同一个节点，也返回true
         * @function
         * @param {String|HTMLElement} node节点或节点id
         * @param {String|HTMLElement} container 容器
         * @example
         * let root = $('html');
         * let body = $('body');
         *
         * let r = Magix.inside(body[0],root[0]);
         *
         * // r == true
         *
         * let r = Magix.inside(root[0],body[0]);
         *
         * // r == false
         *
         * let r = Magix.inside(root[0],root[0]);
         *
         * // r == true
         *
         * @return {Boolean}
         */
        inside: G_NodeIn,
        /**
         * document.getElementById的简写
         * @param {String} id
         * @return {HTMLElement|Null}
         * @example
         * // html
         * // <div id="root"></div>
         *
         * let node = Magix.node('root');
         *
         * // node => div[id='root']
         *
         * // node是document.getElementById的简写
         */
        node: G_GetById,
        /**
         * 应用样式
         * @beta
         * @module style
         * @param {String} prefix 样式的名称前缀
         * @param {String} css 样式字符串
         * @example
         * // 该方法配合magix-combine工具使用
         * // 更多信息可参考magix-combine工具：https://github.com/thx/magix-combine
         * // 样式问题可查阅这里：https://github.com/thx/magix-combine/issues/6
         *
         */
        applyStyle: View_ApplyStyle,
        /**
         * 返回全局唯一ID
         * @function
         * @param {String} [prefix] 前缀
         * @return {String}
         * @example
         *
         * let id = Magix.guid('mx-');
         * // id maybe mx-7
         */
        guid: G_Id,
        use: G_Require,
        Cache: G_Cache,
        nodeId: IdIt
    };
    /**
    * 多播事件对象
    * @name Event
    * @namespace
    */
    var MEvent = {
        /**
         * @lends MEvent
         */
        /**
         * 触发事件
         * @param {String} name 事件名称
         * @param {Object} data 事件对象
         * @param {Boolean} [remove] 事件触发完成后是否移除这个事件的所有监听
         * @param {Boolean} [lastToFirst] 是否从后向前触发事件的监听列表
         */
        fire: function fire(name, data, remove, lastToFirst) {
            var key = G_SPLITER + name,
                me = this,
                list = me[key],
                end,
                len,
                idx,
                t;
            if (!data) data = {};
            if (!data.type) data.type = name;
            if (list) {
                end = list.length;
                len = end - 1;
                while (end--) {
                    idx = lastToFirst ? end : len - end;
                    t = list[idx];
                    if (t.f) {
                        t.x = 1;
                        G_ToTry(t.f, data, me);
                        t.x = G_EMPTY;
                    } else if (!t.x) {
                        list.splice(idx, 1);
                        len--;
                    }
                }
            }
            list = me["on" + name];
            if (list) G_ToTry(list, data, me);
            if (remove) me.off(name);
        },
        /**
         * 绑定事件
         * @param {String} name 事件名称
         * @param {Function} fn 事件处理函数
         * @example
         * let T = Magix.mix({},Magix.Event);
         * T.on('done',function(e){
         *     alert(1);
         * });
         * T.on('done',function(e){
         *     alert(2);
         *     T.off('done',arguments.callee);
         * });
            * T.fire('done',{data:'test'});
         * T.fire('done',{data:'test2'});
         */
        on: function on(name, f) {
            var me = this;
            var key = G_SPLITER + name;
            var list = me[key] || (me[key] = []);
            list.push({
                f: f
            });
        },
        /**
         * 解除事件绑定
         * @param {String} name 事件名称
         * @param {Function} [fn] 事件处理函数
         */
        off: function off(name, fn) {
            var key = G_SPLITER + name,
                me = this,
                list = me[key],
                t;
            if (fn) {
                if (list) {
                    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                        t = list_2[_i];
                        if (t.f == fn) {
                            t.f = G_EMPTY;
                            break;
                        }
                    }
                }
            } else {
                delete me[key];
                delete me["on" + name];
            }
        }
    };
    Magix.Event = MEvent;
    var State_AppData = {};
    var State_AppDataKeyRef = {};
    var State_ChangedKeys = {};
    var State_DataIsChanged = 0;
    var State_DataWhereSet = {};
    var State_IsObserveChanged = function State_IsObserveChanged(view, keys, r) {
        var oKeys = view['$os'],
            ok;
        if (oKeys) {
            for (var _i = 0, oKeys_1 = oKeys; _i < oKeys_1.length; _i++) {
                ok = oKeys_1[_i];
                r = G_Has(keys, ok);
                if (r) break;
            }
        }
        return r;
    };
    var SetupKeysRef = function SetupKeysRef(keys) {
        keys = (keys + G_EMPTY).split(',');
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (G_Has(State_AppDataKeyRef, key)) {
                State_AppDataKeyRef[key]++;
            } else {
                State_AppDataKeyRef[key] = 1;
            }
        }
        return keys;
    };
    var TeardownKeysRef = function TeardownKeysRef(keys) {
        var key, v;
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            key = keys_2[_i];
            if (G_Has(State_AppDataKeyRef, key)) {
                v = --State_AppDataKeyRef[key];
                if (!v) {
                    delete State_AppDataKeyRef[key];
                    delete State_AppData[key];
                    if (DEBUG) {
                        delete State_DataWhereSet[key];
                    }
                }
            }
        }
    };
    if (DEBUG) {
        setTimeout(function () {
            Router.on('changed', function () {
                setTimeout(function () {
                    var keys = [];
                    var cls = [];
                    for (var p in State_DataWhereSet) {
                        if (!State_AppDataKeyRef[p]) {
                            cls.push(p);
                            keys.push('key:"' + p + '" set by page:"' + State_DataWhereSet[p] + '"');
                        }
                    }
                    if (keys.length) {
                        console.warn('beware! Remember to clean ' + keys + ' in {Magix.State}   Clean use view.mixins like mixins:[Magix.State.clean("' + cls + '")]');
                    }
                }, 200);
            });
        }, 0);
    }
    /**
     * 可观察的内存数据对象
     * @name State
     * @namespace
     * @borrows Event.on as on
     * @borrows Event.fire as fire
     * @borrows Event.off as off
     * @beta
     * @module router
     */
    var State = G_Assign({
        /**
         * @lends State
         */
        /**
         * 从Magix.State中获取数据
         * @param {String} [key] 数据key
         * @return {Object}
         */
        get: function get(key) {
            var r = key ? State_AppData[key] : State_AppData;
            if (DEBUG) {
                if (key && Magix_Booted) {
                    var loc = Router.parse();
                    if (G_Has(State_DataWhereSet, key) && State_DataWhereSet[key] != loc.path) {
                        console.warn('beware! You get state:"{Magix.State}.' + key + '" where it set by page:' + State_DataWhereSet[key]);
                    }
                }
                r = Safeguard(r, function (dataKey) {
                    if (Magix_Booted) {
                        var loc = Router.parse();
                        if (G_Has(State_DataWhereSet, dataKey) && State_DataWhereSet[dataKey] != loc.path) {
                            console.warn('beware! You get state:"{Magix.State}.' + dataKey + '" where it set by page:' + State_DataWhereSet[dataKey]);
                        }
                    }
                }, function (path, value) {
                    var sub = key ? key : path;
                    console.warn('beware! You direct set "{Magix.State}.' + sub + '" a new value  You should call Magix.State.set() and Magix.State.digest() to notify other views {Magix.State} changed');
                    if (G_IsPrimitive(value) && !/\./.test(sub)) {
                        console.warn('beware! Never set a primitive value ' + JSON.stringify(value) + ' to "{Magix.State}.' + sub + '" This may will not trigger "changed" event');
                    }
                });
            }
            return r;
        },
        /**
         * 设置数据
         * @param {Object} data 数据对象
         */
        set: function set(data) {
            State_DataIsChanged = G_Set(data, State_AppData, State_ChangedKeys) || State_DataIsChanged;
            if (DEBUG && Magix_Booted) {
                var loc = Router.parse();
                for (var p in data) {
                    State_DataWhereSet[p] = loc.path;
                }
            }
        },
        /**
         * 检测数据变化，如果有变化则派发changed事件
         * @param  {Object} data 数据对象
         */
        digest: function digest(data) {
            if (data) {
                State.set(data);
            }
            if (State_DataIsChanged) {
                State_DataIsChanged = 0;
                this.fire(G_CHANGED, {
                    keys: State_ChangedKeys
                });
                State_ChangedKeys = {};
            }
        },
        /**
         * 获取当前数据与上一次数据有哪些变化
         * @return {Object}
         */
        diff: function diff() {
            return State_ChangedKeys;
        },
        /**
         * 清除数据，该方法需要与view绑定，写在view的mixins中，如mixins:[Magix.Sate.clean('user,permission')]
         * @param  {String} keys 数据key
         */
        clean: function clean(keys) {
            if (DEBUG) {
                var called_1 = false;
                setTimeout(function () {
                    if (!called_1) {
                        throw new Error('Magix.State.clean only used in View.mixins like mixins:[Magix.State.clean("p1,p2,p3")]');
                    }
                }, 1000);
                return {
                    '\x1e': keys,
                    ctor: function ctor() {
                        var me = this;
                        called_1 = true;
                        keys = SetupKeysRef(keys);
                        me.on('destroy', function () {
                            TeardownKeysRef(keys);
                        });
                    }
                };
            }
            return {
                ctor: function ctor() {
                    keys = SetupKeysRef(keys);
                    this.on('destroy', function () {
                        return TeardownKeysRef(keys);
                    });
                }
            };
        } }, MEvent
    /**
     * 当State中的数据有改变化后触发
     * @name State.changed
     * @event
     * @param {Object} e 事件对象
     * @param {Object} e.keys  包含哪些数据变化的key集合
     */
    );
    Magix.State = State;
    var Router_VIEW = 'view';
    var Router_HrefCache = new G_Cache();
    var Router_ChgdCache = new G_Cache();
    var Router_WinLoc = G_WINDOW.location;
    var Router_LastChanged;
    var Router_Silent = 0;
    var Router_LLoc = {
        query: {},
        params: {},
        href: G_EMPTY
    };
    var Router_TrimHashReg = /(?:^.*\/\/[^\/]+|#.*$)/gi;
    var Router_TrimQueryReg = /^[^#]*#?!?/;
    var GetParam = function GetParam(key, params) {
        params = this[G_PARAMS];
        return params[key] || G_EMPTY;
    };
    var Router_Edge = 0;
    var Router_Hashbang = G_HashKey + '!';
    var Router_UpdateHash = function Router_UpdateHash(path, replace) {
        path = "" + Router_Hashbang + path;
        if (replace) {
            Router_WinLoc.replace(path);
        } else {
            Router_WinLoc.hash = path;
        }
    };
    var Router_Update = function Router_Update(path, params, loc, replace, silent, lQuery) {
        path = G_ToUri(path, params, lQuery);
        if (path != loc.srcHash) {
            Router_Silent = silent;
            Router_UpdateHash(path, replace);
        }
    };
    var Router_Bind = function Router_Bind() {
        var lastHash = Router_Parse().srcHash;
        var newHash, suspend;
        G_DOMEventLibBind(G_WINDOW, 'hashchange', function (e, loc, resolve) {
            if (suspend) {
                return;
            }
            loc = Router_Parse();
            newHash = loc.srcHash;
            if (newHash != lastHash) {
                resolve = function resolve() {
                    e.p = 1;
                    lastHash = newHash;
                    suspend = G_EMPTY;
                    Router_UpdateHash(newHash);
                    Router_Diff();
                };
                e = {
                    reject: function reject() {
                        e.p = 1;
                        suspend = G_EMPTY;
                        Router_UpdateHash(lastHash);
                    },
                    resolve: resolve,
                    prevent: function prevent() {
                        suspend = 1;
                    }
                };
                Router.fire(G_CHANGE, e);
                if (!suspend && !e.p) {
                    resolve();
                }
            }
        });
        G_WINDOW.onbeforeunload = function (e, te, msg) {
            e = e || G_WINDOW.event;
            te = {};
            Router.fire(G_PAGE_UNLOAD, te);
            if (msg = te.msg) {
                if (e) e.returnValue = msg;
                return msg;
            }
        };
        Router_Diff();
    };
    var Router_PNR_Routers, Router_PNR_UnmatchView, /*Router_PNR_IsFun,*/Router_PNR_DefaultView, Router_PNR_DefaultPath;
    var Router_PNR_Rewrite;
    var DefaultTitle = G_DOCUMENT.title;
    var Router_AttachViewAndPath = function Router_AttachViewAndPath(loc, view) {
        if (!Router_PNR_Routers) {
            Router_PNR_Routers = Magix_Cfg.routes || {};
            Router_PNR_UnmatchView = Magix_Cfg.unmatchView;
            Router_PNR_DefaultView = Magix_Cfg.defaultView;
            Router_PNR_DefaultPath = Magix_Cfg.defaultPath || '/';
            //Router_PNR_IsFun = G_IsFunction(Router_PNR_Routers);
            //if (!Router_PNR_IsFun && !Router_PNR_Routers[Router_PNR_DefaultPath]) {
            //    Router_PNR_Routers[Router_PNR_DefaultPath] = Router_PNR_DefaultView;
            //}
            Router_PNR_Rewrite = Magix_Cfg.rewrite;
            //if (!G_IsFunction(Router_PNR_Rewrite)) {
            //    Router_PNR_Rewrite = G_NULL;
            //}
        }
        if (!loc[Router_VIEW]) {
            var path = loc.hash[G_PATH] || Router_Edge && loc.query[G_PATH] || Router_PNR_DefaultPath;
            if (Router_PNR_Rewrite) {
                path = Router_PNR_Rewrite(path, loc[G_PARAMS], Router_PNR_Routers);
            }
            //if (Router_PNR_IsFun) {
            //    view = Router_PNR_Routers.call(Magix_Cfg, path, loc);
            //} else {
            view = Router_PNR_Routers[path] || Router_PNR_UnmatchView || Router_PNR_DefaultView;
            //}
            loc[G_PATH] = path;
            loc[Router_VIEW] = view;
            if (G_IsObject(view)) {
                if (DEBUG) {
                    if (!view.view) {
                        console.error(path, ' config missing view!', view);
                    }
                }
                G_Assign(loc, view);
            }
        }
    };
    var Router_GetChged = function Router_GetChged(oldLocation, newLocation) {
        var oKey = oldLocation.href;
        var nKey = newLocation.href;
        var tKey = oKey + G_SPLITER + nKey;
        var result = Router_ChgdCache.get(tKey);
        if (!result) {
            var hasChanged_1, rps_1;
            result = {
                params: rps_1 = {},
                //isParam: Router_IsParam,
                //location: newLocation,
                force: !oKey //是否强制触发的changed，对于首次加载会强制触发一次
            };
            var oldParams_1 = oldLocation[G_PARAMS],
                newParams_1 = newLocation[G_PARAMS],
                tArr = G_Keys(oldParams_1).concat(G_Keys(newParams_1)),
                key = void 0;
            var setDiff = function setDiff(key) {
                var from = oldParams_1[key],
                    to = newParams_1[key];
                if (from != to) {
                    rps_1[key] = {
                        from: from,
                        to: to
                    };
                    hasChanged_1 = 1;
                }
            };
            for (var _i = 0, tArr_1 = tArr; _i < tArr_1.length; _i++) {
                key = tArr_1[_i];
                setDiff(key);
            }
            oldParams_1 = oldLocation;
            newParams_1 = newLocation;
            rps_1 = result;
            setDiff(G_PATH);
            setDiff(Router_VIEW);
            Router_ChgdCache.set(tKey, result = {
                a: hasChanged_1,
                b: result
            });
        }
        return result;
    };
    var Router_Parse = function Router_Parse(href) {
        href = href || Router_WinLoc.href;
        var result = Router_HrefCache.get(href),
            srcQuery,
            srcHash,
            query,
            hash,
            params;
        if (!result) {
            srcQuery = href.replace(Router_TrimHashReg, G_EMPTY);
            srcHash = href.replace(Router_TrimQueryReg, G_EMPTY);
            query = G_ParseUri(srcQuery);
            hash = G_ParseUri(srcHash);
            params = G_Assign({}, query[G_PARAMS], hash[G_PARAMS]);
            if (DEBUG) {
                params = Safeguard(params);
            }
            result = {
                get: GetParam,
                href: href,
                srcQuery: srcQuery,
                srcHash: srcHash,
                query: query,
                hash: hash,
                params: params
            };
            if (Magix_Booted) {
                Router_AttachViewAndPath(result);
                Router_HrefCache.set(href, result);
            }
        }
        if (DEBUG) {
            result = Safeguard(result);
        }
        return result;
    };
    var Router_Diff = function Router_Diff() {
        var location = Router_Parse();
        var changed = Router_GetChged(Router_LLoc, Router_LLoc = location);
        if (!Router_Silent && changed.a) {
            Router_LastChanged = changed.b;
            if (Router_LastChanged[G_PATH]) {
                G_DOCUMENT.title = location.title || DefaultTitle;
            }
            Router.fire(G_CHANGED, Router_LastChanged);
        }
        Router_Silent = 0;
        if (DEBUG) {
            Router_LastChanged = Safeguard(Router_LastChanged);
        }
        return Router_LastChanged;
    };
    //let PathTrimFileParamsReg=/(\/)?[^\/]*[=#]$/;//).replace(,'$1').replace(,EMPTY);
    //let PathTrimSearch=/\?.*$/;
    /**
     * 路由对象，操作URL
     * @name Router
     * @namespace
     * @borrows Event.on as on
     * @borrows Event.fire as fire
     * @borrows Event.off as off
     * @beta
     * @module router
     */
    var Router = G_Assign({
        /**
         * @lends Router
         */
        /**
         * 解析href的query和hash，默认href为location.href
         * @param {String} [href] href
         * @return {Object} 解析的对象
         */
        parse: Router_Parse,
        /**
         * 根据location.href路由并派发相应的事件,同时返回当前href与上一个href差异对象
         * @example
         * let diff = Magix.Router.diff();
         * if(diff.params.page || diff.params.rows){
         *     console.log('page or rows changed');
         * }
         */
        diff: Router_Diff,
        /**
         * 导航到新的地址
         * @param  {Object|String} pn path或参数字符串或参数对象
         * @param {String|Object} [params] 参数对象
         * @param {Boolean} [replace] 是否替换当前历史记录
         * @example
         * let R = Magix.Router;
         * R.to('/list?page=2&rows=20');//改变path和相关的参数，地址栏上的其它参数会进行丢弃，不会保留
         * R.to('page=2&rows=20');//只修改参数，地址栏上的其它参数会保留
         * R.to({//通过对象修改参数，地址栏上的其它参数会保留
         *     page:2,
         *     rows:20
         * });
         * R.to('/list',{//改变path和相关参数，丢弃地址栏上原有的其它参数
         *     page:2,
         *     rows:20
         * });
         *
         * //凡是带path的修改地址栏，都会把原来地址栏中的参数丢弃
         */
        to: function to(pn, params, replace, silent) {
            if (!params && G_IsObject(pn)) {
                params = pn;
                pn = G_EMPTY;
            }
            var temp = G_ParseUri(pn);
            var tParams = temp[G_PARAMS];
            var tPath = temp[G_PATH];
            var lPath = Router_LLoc[G_PATH]; //历史路径
            var lParams = Router_LLoc[G_PARAMS];
            var lQuery = Router_LLoc.query[G_PARAMS];
            G_Assign(tParams, params); //把路径中解析出来的参数与用户传递的参数进行合并
            if (tPath) {
                //tPath = G_Path(lPath, tPath);
                if (!Router_Edge) {
                    for (lPath in lQuery) {
                        if (!G_Has(tParams, lPath)) tParams[lPath] = G_EMPTY;
                    }
                }
            } else if (lParams) {
                tPath = lPath; //使用历史路径
                tParams = G_Assign({}, lParams, tParams); //复制原来的参数，合并新的参数
            }
            Router_Update(tPath, tParams, Router_LLoc, replace, silent, lQuery);
        } }, MEvent
    /**
     * 当location.href有改变化后触发
     * @name Router.changed
     * @event
     * @param {Object} e 事件对象
     * @param {Object} e.path  如果path发生改变时，记录从(from)什么值变成(to)什么值的对象
     * @param {Object} e.view 如果view发生改变时，记录从(from)什么值变成(to)什么值的对象
     * @param {Object} e.params 如果参数发生改变时，记录从(from)什么值变成(to)什么值的对象
     * @param {Boolean} e.force 标识是否是第一次强制触发的changed，对于首次加载完Magix，会强制触发一次changed
     */
    );
    Magix.Router = Router;
    var Dispatcher_UpdateTag = 0;
    /**
     * 通知当前vframe，地址栏发生变化
     * @param {Vframe} vframe vframe对象
     * @private
     */
    var Dispatcher_Update = function Dispatcher_Update(vframe, stateKeys, view, isChanged, cs, c) {
        if (vframe && vframe['$a'] != Dispatcher_UpdateTag && (view = vframe['$v']) && view['$a'] > 1) {
            isChanged = stateKeys ? State_IsObserveChanged(view, stateKeys) : View_IsObserveChanged(view);
            /**
             * 事件对象
             * @type {Object}
             * @ignore
             */
            /*let args = {
                    location: RefLoc,
                    changed: RefG_LocationChanged,*/
            /**
             * 阻止向所有的子view传递
             * @ignore
             */
            /* prevent: function() {
                        args.cs = EmptyArr;
                    },*/
            /**
             * 向特定的子view传递
             * @param  {Array} c 子view数组
             * @ignore
             */
            /*to: function(c) {
                        c = (c + EMPTY).split(COMMA);
                        args.cs = c;
                    }
                };*/
            if (isChanged) {
                view['$b']();
            }
            cs = vframe.children();
            for (var _i = 0, cs_1 = cs; _i < cs_1.length; _i++) {
                c = cs_1[_i];
                Dispatcher_Update(Vframe_Vframes[c], stateKeys);
            }
        }
    };
    /**
     * 向vframe通知地址栏发生变化
     * @param {Object} e 事件对象
     * @param {Object} e.location G_WINDOW.location.href解析出来的对象
     * @private
     */
    var Dispatcher_NotifyChange = function Dispatcher_NotifyChange(e, vf, view) {
        vf = Vframe_Root();
        if (view = e[Router_VIEW]) {
            vf.mountView(view.to);
        } else {
            Dispatcher_UpdateTag = G_COUNTER++;
            Dispatcher_Update(vf, e.keys);
        }
    };
    var Vframe_RootVframe;
    var Vframe_GlobalAlter;
    var Vframe_NotifyCreated = function Vframe_NotifyCreated(vframe) {
        if (!vframe['$b'] && !vframe['$d'] && vframe['$cc'] == vframe['$rc']) {
            if (!vframe['$cr']) {
                vframe['$cr'] = 1; //childrenCreated
                vframe['$ca'] = 0; //childrenAlter
                vframe.fire('created'); //不在view上派发事件，如果view需要绑定，则绑定到owner上，view一般不用该事件，如果需要这样处理：this.owner.oncreated=function(){};this.ondestroy=function(){this.owner.off('created')}
            }
            var p = void 0,
                id = vframe.id,
                pId = vframe.pId;
            p = Vframe_Vframes[pId];
            if (p && !G_Has(p['$e'], id)) {
                p['$e'][id] = 1; //readyChildren
                p['$rc']++; //readyCount
                Vframe_NotifyCreated(p);
            }
        }
    };
    var Vframe_NotifyAlter = function Vframe_NotifyAlter(vframe, e) {
        if (!vframe['$ca'] && vframe['$cr']) {
            vframe['$cr'] = 0; //childrenCreated
            vframe['$ca'] = 1; //childreAleter
            vframe.fire('alter', e);
            var p = void 0,
                id = vframe.id,
                pId = vframe.pId;
            //let vom = vframe.owner;
            p = Vframe_Vframes[pId];
            if (p && G_Has(p['$e'], id)) {
                p['$rc']--; //readyCount
                delete p['$e'][id]; //readyMap
                Vframe_NotifyAlter(p, e);
            }
        }
    };
    /**
     * 获取根vframe;
     * @return {Vframe}
     * @private
     */
    var Vframe_Root = function Vframe_Root(rootId, e) {
        if (!Vframe_RootVframe) {
            /*
                尽可能的延迟配置，防止被依赖时，配置信息不正确
            */
            G_DOCBODY = G_DOCUMENT.body;
            rootId = Magix_Cfg.rootId;
            e = G_GetById(rootId);
            if (!e) {
                G_DOCBODY.id = rootId;
            }
            Vframe_RootVframe = new Vframe(rootId);
        }
        return Vframe_RootVframe;
    };
    var Vframe_Vframes = {};
    var Vframe_AddVframe = function Vframe_AddVframe(id, vframe) {
        if (!G_Has(Vframe_Vframes, id)) {
            Vframe_Vframes[id] = vframe;
            Vframe.fire('add', {
                vframe: vframe
            });
            id = G_GetById(id);
            if (id) id.vframe = vframe;
        }
    };
    var Vframe_RunInvokes = function Vframe_RunInvokes(vf, list, o) {
        list = vf['$f']; //invokeList
        while (list.length) {
            o = list.shift();
            if (!o.r) {
                vf.invoke(o.n, o.a); //name,arguments
            }
            delete list[o.k]; //key
        }
    };
    var Vframe_Cache = [];
    var Vframe_RemoveVframe = function Vframe_RemoveVframe(id, fcc, vframe) {
        vframe = Vframe_Vframes[id];
        if (vframe) {
            delete Vframe_Vframes[id];
            Vframe.fire('remove', {
                vframe: vframe,
                fcc: fcc //fireChildrenCreated
            });
            id = G_GetById(id);
            if (id) id['$a'] = 0;
            if (id) id.vframe = 0;
        }
    };
    /**
     * Vframe类
     * @name Vframe
     * @class
     * @constructor
     * @borrows Event.on as on
     * @borrows Event.fire as fire
     * @borrows Event.off as off
     * @borrows Event.on as #on
     * @borrows Event.fire as #fire
     * @borrows Event.off as #off
     * @param {String} id vframe id
     * @property {String} id vframe id
     * @property {String} path 当前view的路径名，包括参数
     * @property {String} pId 父vframe的id，如果是根节点则为undefined
     */
    var Vframe = function Vframe(id, pId, me) {
        me = this;
        me.id = id;
        if (DEBUG) {
            setTimeout(function () {
                if (me.id && me.pId) {
                    var parent = Vframe_Vframes[me.pId];
                    if (me.id != Magix_Cfg.rootId && (!parent || !parent['$c'][me.id])) {
                        console.error('beware! Avoid use new Magix.Vframe() outside');
                    }
                }
            }, 0);
        }
        //me.vId=id+'_v';
        me['$c'] = {}; //childrenMap
        me['$cc'] = 0; //childrenCount
        me['$rc'] = 0; //readyCount
        me['$g'] = 1; //signature
        me['$e'] = {}; //readyMap
        me['$f'] = []; //invokeList
        me.pId = pId;
        Vframe_AddVframe(id, me);
    };
    G_Assign(Vframe, {
        /**
         * @lends Vframe
         */
        /**
         * 获取所有的vframe对象
         * @return {Object}
         */
        all: function all() {
            return Vframe_Vframes;
        },
        /**
         * 根据vframe的id获取vframe对象
         * @param {String} id vframe的id
         * @return {Vframe|undefined} vframe对象
         */
        get: function get(id) {
            return Vframe_Vframes[id];
        }
        /**
         * 注册vframe对象时触发
         * @name Vframe.add
         * @event
         * @param {Object} e
         * @param {Vframe} e.vframe
         */
        /**
         * 删除vframe对象时触发
         * @name Vframe.remove
         * @event
         * @param {Object} e
         * @param {Vframe} e.vframe
         * @param {Boolean} e.fcc 是否派发过created事件
         */
    }, MEvent);
    G_Assign(Vframe[G_PROTOTYPE], MEvent, {
        /**
         * @lends Vframe#
         */
        /**
         * 加载对应的view
         * @param {String} viewPath 形如:app/views/home?type=1&page=2 这样的view路径
         * @param {Object|Null} [viewInitParams] 调用view的init方法时传递的参数
         */
        mountView: function mountView(viewPath, viewInitParams /*,keepPreHTML*/) {
            var me = this;
            var id = me.id,
                pId = me.pId,
                s = me["$g"];
            var node = G_GetById(id),
                po,
                sign,
                view,
                params,
                ctors,
                parentVf;
            me.unmountView();
            me['$b'] = 0; //destroyed 详见unmountView
            if (node && viewPath) {
                me[G_PATH] = viewPath;
                po = G_ParseUri(viewPath);
                view = po[G_PATH];
                sign = ++s;
                params = po[G_PARAMS];
                parentVf = Vframe_Vframes[pId];
                parentVf = parentVf && parentVf['$v'];
                parentVf = parentVf && parentVf['$d'];
                parentVf = parentVf && parentVf['$a'];
                if (viewPath.indexOf(G_SPLITER) > 0) {
                    GSet_Params(parentVf, params, params);
                }
                //me['$h'] = G_TryStringify(parentVf, po);
                me['$i'] = po[G_PATH];
                G_Assign(params, viewInitParams);
                G_Require(view, function (TView) {
                    if (sign == me['$g']) {
                        if (!TView) {
                            return Magix_Cfg.error(Error("id:" + id + " cannot load:" + view));
                        }
                        ctors = View_Prepare(TView);
                        view = new TView(id, me, params, ctors);
                        if (DEBUG) {
                            var viewProto_1 = TView.prototype;
                            var importantProps_1 = {
                                id: 1,
                                updater: 1,
                                owner: 1,
                                '$l': 1,
                                '$r': 1,
                                '$a': 1,
                                '$d': 1
                            };
                            for (var p in view) {
                                if (G_Has(view, p) && viewProto_1[p]) {
                                    throw new Error("avoid write " + p + " at file " + viewPath + "!");
                                }
                            }
                            view = Safeguard(view, null, function (key, value) {
                                if (G_Has(viewProto_1, key) || G_Has(importantProps_1, key) && (key != '$a' || !isFinite(value)) && (key != 'owner' || value !== 0)) {
                                    throw new Error("avoid write " + key + " at file " + viewPath + "!");
                                }
                            });
                        }
                        me['$v'] = view;
                        me['$a'] = Dispatcher_UpdateTag;
                        View_DelegateEvents(view);
                        G_ToTry(view.init, params, view);
                        view['$b']();
                        if (!view['$e']) {
                            if (!view['$f']) {
                                view.endUpdate();
                            }
                        }
                    }
                });
            }
        },
        /**
         * 销毁对应的view
         */
        unmountView: function unmountView() {
            var me = this;
            var v = me["$v"],
                id = me.id,
                node,
                reset;
            me['$f'] = []; //invokeList 销毁当前view时，连同调用列表一起销毁
            if (v) {
                if (!Vframe_GlobalAlter) {
                    reset = 1;
                    Vframe_GlobalAlter = {
                        id: id
                    };
                }
                me['$b'] = 1; //用于标记当前vframe处于$v销毁状态，在当前vframe上再调用unmountZone时不派发created事件
                me.unmountZone(0, 1);
                Vframe_NotifyAlter(me, Vframe_GlobalAlter);
                me['$v'] = 0; //unmountView时，尽可能早的删除vframe上的$v对象，防止$v销毁时，再调用该 vfrmae的类似unmountZone方法引起的多次created
                if (v['$a'] > 0) {
                    v['$a'] = 0;
                    v.fire('destroy', 0, 1, 1);
                    View_DestroyAllResources(v, 1);
                    View_DelegateEvents(v, 1);
                    v.owner = 0;
                }
                v['$a']--;
                if (reset) Vframe_GlobalAlter = 0;
            }
            me['$g']++; //增加signature，阻止相应的回调，见mountView
        },
        /**
         * 加载vframe
         * @param  {String} id             节点id
         * @param  {String} viewPath       view路径
         * @param  {Object} [viewInitParams] 传递给view init方法的参数
         * @return {Vframe} vframe对象
         * @example
         * // html
         * // &lt;div id="magix_vf_defer"&gt;&lt;/div&gt;
         *
         *
         * //js
         * view.owner.mountVframe('magix_vf_defer','app/views/list',{page:2})
         * //注意：动态向某个节点渲染view时，该节点无须是vframe标签
         */
        mountVframe: function mountVframe(vfId, viewPath, viewInitParams /*, keepPreHTML*/) {
            var me = this,
                vf,
                id = me.id,
                c = me['$c'];
            Vframe_NotifyAlter(me, {
                id: vfId
            }); //如果在就绪的vframe上渲染新的vframe，则通知有变化
            //let vom = me.owner;
            vf = Vframe_Vframes[vfId];
            if (!vf) {
                if (!G_Has(c, vfId)) {
                    me['$j'] = 0; //childrenList 清空缓存的子列表
                    me['$cc']++; //childrenCount ，增加子节点
                }
                c[vfId] = vfId; //map
                //
                vf = Vframe_Cache.pop();
                if (vf) {
                    Vframe.call(vf, vfId, id);
                } else {
                    vf = new Vframe(vfId, id);
                }
                //vf = Vframe_GetVf(id, me.id);// new Vframe(id, me.id);
            }
            vf.mountView(viewPath, viewInitParams /*,keepPreHTML*/);
            return vf;
        },
        /**
         * 加载某个区域下的view
         * @param {HTMLElement|String} zoneId 节点对象或id
         * @example
         * // html
         * // &lt;div id="zone"&gt;
         * //   &lt;div mx-view="path/to/v1"&gt;&lt;/div&gt;
         * // &lt;/div&gt;
         *
         * view.onwer.mountZone('zone');//即可完成zone节点下的view渲染
         */
        mountZone: function mountZone(zoneId, inner /*,keepPreHTML*/) {
            var me = this;
            var vf,
                id,
                vfs = [];
            zoneId = zoneId || me.id;
            var vframes = $("" + G_HashKey + zoneId + " [" + G_MX_VIEW + "]");
            /*
                body(#mx-root)
                    div(mx-vframe=true,mx-view='xx')
                        div(mx-vframe=true,mx-view=yy)
                这种结构，自动构建父子关系，
                根结点渲染，获取到子列表[div(mx-view=xx)]
                    子列表渲染，获取子子列表的子列表
                        加入到忽略标识里
                会导致过多的dom查询
                   现在使用的这种，无法处理这样的情况，考虑到项目中几乎没出现过这种情况，先采用高效的写法
                上述情况一般出现在展现型页面，dom结构已经存在，只是附加上js行为
                不过就展现来讲，一般是不会出现嵌套的情况，出现的话，把里面有层级的vframe都挂到body上也未尝不可，比如brix2.0
             */
            me['$d'] = 1; //hold fire creted
            //me.unmountZone(zoneId, 1); 不去清理，详情见：https://github.com/thx/magix/issues/27
            for (var _i = 0, vframes_1 = vframes; _i < vframes_1.length; _i++) {
                vf = vframes_1[_i];
                id = IdIt(vf);
                if (!vf['$a']) {
                    vf['$a'] = 1;
                    vfs.push([id, vf.getAttribute(G_MX_VIEW)]);
                }
            }
            for (var _a = 0, vfs_1 = vfs; _a < vfs_1.length; _a++) {
                _b = vfs_1[_a], id = _b[0], vf = _b[1];
                if (vfs[id]) {
                    Magix_Cfg.error(Error("vf.id duplicate:" + id + " at " + me[G_PATH]));
                } else {
                    me.mountVframe(vfs[id] = id, vf);
                }
            }
            me['$d'] = 0;
            if (!inner) {
                Vframe_NotifyCreated(me);
            }
            var _b;
        },
        /**
         * 销毁vframe
         * @param  {String} [id]      节点id
         */
        unmountVframe: function unmountVframe(id /*,keepPreHTML*/, inner) {
            var me = this,
                vf;
            id = id ? me['$c'][id] : me.id;
            //let vom = me.owner;
            vf = Vframe_Vframes[id];
            if (vf) {
                var cr = vf["$cr"],
                    pId = vf.pId;
                vf.unmountView();
                Vframe_RemoveVframe(id, cr);
                vf.id = vf.pId = vf['$c'] = vf['$e'] = 0; //清除引用,防止被移除的view内部通过setTimeout之类的异步操作有关的界面，影响真正渲染的view
                vf.off('alter');
                vf.off('created');
                //if (Vframe_Cache.length < 10) {
                Vframe_Cache.push(vf);
                //}
                vf = Vframe_Vframes[pId];
                if (vf && G_Has(vf['$c'], id)) {
                    delete vf['$c'][id]; //childrenMap
                    vf['$j'] = 0;
                    vf['$cc']--; //cildrenCount
                    if (!inner) Vframe_NotifyCreated(vf); //移除后通知完成事件
                }
            }
        },
        /**
         * 销毁某个区域下面的所有子vframes
         * @param {HTMLElement|String} [zoneId] 节点对象或id
         */
        unmountZone: function unmountZone(zoneId, inner) {
            var me = this;
            var p;
            for (p in me['$c']) {
                if (!zoneId || p != zoneId && G_NodeIn(p, zoneId)) {
                    me.unmountVframe(p /*,keepPreHTML,*/, 1);
                }
            }
            if (!inner) Vframe_NotifyCreated(me);
        },
        /**
         * 获取父vframe
         * @param  {Integer} [level] 向上查找层级，默认1,取当前vframe的父级
         * @return {Vframe|undefined}
         * @beta
         * @module linkage
         */
        parent: function parent(level, vf) {
            vf = this;
            level = level >>> 0 || 1;
            while (vf && level--) {
                vf = Vframe_Vframes[vf.pId];
            }
            return vf;
        },
        /**
         * 获取当前vframe的所有子vframe的id。返回数组中，vframe在数组中的位置并不固定
         * @return {Array[String]}
         * @beta
         * @module linkage
         * @example
         * let children = view.owner.children();
         * console.log(children);
         */
        children: function children(me) {
            me = this;
            return me['$j'] || (me['$j'] = G_Keys(me['$c']));
        },
        /**
         * 调用view的方法
         * @param  {String} name 方法名
         * @param  {Array} [args] 参数
         * @return {Object}
         * @beta
         * @module linkage
         * @example
         * // html
         * // &lt;div&gt; mx-view="path/to/v1" id="test"&gt;&lt;/div&gt;
         * let vf = Magix.Vframe.get('test');
         * vf.invoke('methodName',['args1','agrs2']);
         */
        invoke: function invoke(name, args) {
            var result;
            var vf = this,
                view,
                fn,
                o,
                list = vf['$f'],
                key;
            if ((view = vf['$v']) && view['$f']) {
                result = (fn = view[name]) && G_ToTry(fn, args, view);
            } else {
                o = list[key = G_SPLITER + name];
                if (o) {
                    o.r = args === o.a; //参数一样，则忽略上次的
                }
                o = {
                    n: name,
                    a: args,
                    k: key
                };
                list.push(o);
                list[key] = o;
            }
            return result;
        }
        /**
         * 子孙view修改时触发
         * @name Vframe#alter
         * @event
         * @param {Object} e
         */
        /**
         * 子孙view创建完成时触发
         * @name Vframe#created
         * @event
         * @param {Object} e
         */
    });
    Magix.Vframe = Vframe;
    /**
     * Vframe 中的2条线
     * 一：
     *     渲染
     *     每个Vframe有$cc(childrenCount)属性和$c(childrenItems)属性
     *
     * 二：
     *     修改与创建完成
     *     每个Vframe有rC(readyCount)属性和$r(readyMap)属性
     *
     *      fca firstChildrenAlter  fcc firstChildrenCreated
     */
    $.fn.invokeView = function (name, args) {
        var l = this.length;
        if (l) {
            var e = this[0];
            var vf = e.vframe;
            if (args === undefined) {
                return vf && vf.invoke(name);
            } else {
                for (var _i = 0, _a = this; _i < _a.length; _i++) {
                    e = _a[_i];
                    vf = e.vframe;
                    if (vf) {
                        vf.invoke(name, args);
                    }
                }
            }
        }
    };
    /*
    dom event处理思路
     性能和低资源占用高于一切，在不特别影响编程体验的情况下，向性能和资源妥协
     1.所有事件代理到body上
    2.优先使用原生冒泡事件，使用mouseover+Magix.inside代替mouseenter
        'over<mouseover>':function(e){
            if(!Magix.inside(e.relatedTarget,e.eventTarget)){
                //enter
            }
        }
    3.事件支持嵌套，向上冒泡
    4.如果同一节点上同时绑定了mx-event和选择器事件，如
        <div data-menu="true" mx-click="clickMenu()"></div>
         'clickMenu<click>'(e){
            console.log('direct',e);
        },
        '$div[data-menu="true"]<click>'(e){
            console.log('selector',e);
        }
         那么先派发mx-event绑定的事件再派发选择器绑定的事件
         如果要停止选择器上的事件派发，请调用e.stopImmediatePropagation()
     5.在当前view根节点上绑定事件，目前只能使用选择器绑定，如
        '$<click>'(e){
            console.log('view root click',e);
        }
    */
    var Body_EvtInfoCache = new G_Cache(30, 10);
    var Body_EvtInfoReg = /(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/;
    var Body_RootEvents = {};
    var Body_SearchSelectorEvents = {};
    var Body_FindVframeInfo = function Body_FindVframeInfo(current, eventType) {
        var vf,
            tempId,
            selectorObject,
            eventSelector,
            eventInfos = [],
            begin = current,
            info = current.getAttribute("mx-" + eventType),
            match,
            view,
            vfs = [],
            selectorVfId,
            backtrace = 0;
        if (info) {
            match = Body_EvtInfoCache.get(info);
            if (!match) {
                match = info.match(Body_EvtInfoReg) || G_EMPTY_ARRAY;
                match = {
                    v: match[1],
                    n: match[2],
                    i: match[3]
                };
                /*jshint evil: true*/
                match.p = match.i && G_ToTry(Function("return " + match.i), G_EMPTY_ARRAY, current);
                Body_EvtInfoCache.set(info, match);
            }
            match = G_Assign({}, match, { r: info });
            eventInfos.push(match);
        }
        //如果有匹配但没有处理的vframe或者事件在要搜索的选择器事件里
        if (match && !match.v || Body_SearchSelectorEvents[eventType]) {
            selectorVfId = current['$a']; //如果节点有缓存，则使用缓存
            if (!selectorVfId) {
                vfs.push(begin);
                while (begin != G_DOCBODY && (begin = begin.parentNode)) {
                    if (Vframe_Vframes[tempId = begin.id] || (tempId = begin.$v)) {
                        selectorVfId = tempId;
                        break;
                    }
                    vfs.push(begin);
                }
            }
            if (selectorVfId) {
                for (var _i = 0, vfs_2 = vfs; _i < vfs_2.length; _i++) {
                    info = vfs_2[_i];
                    info['$a'] = selectorVfId;
                }
                begin = current.id;
                if (Vframe_Vframes[begin]) {
                    backtrace = selectorVfId = begin;
                }
                do {
                    vf = Vframe_Vframes[selectorVfId];
                    if (vf && (view = vf['$v'])) {
                        selectorObject = view['$so'];
                        eventSelector = selectorObject[eventType];
                        for (tempId in eventSelector) {
                            selectorObject = {
                                r: tempId,
                                v: selectorVfId,
                                n: tempId
                            };
                            if (tempId) {
                                if (G_TargetMatchSelector(current, tempId)) {
                                    eventInfos.push(selectorObject);
                                }
                            } else if (backtrace) {
                                eventInfos.unshift(selectorObject);
                            }
                        }
                        //防止跨view选中，到带模板的view时就中止或未指定
                        if (view['$e'] && !backtrace) {
                            if (match && !match.v) match.v = selectorVfId;
                            break; //带界面的中止
                        }
                        backtrace = 0;
                    }
                } while (vf && (selectorVfId = vf.pId));
            }
        }
        return eventInfos;
    };
    var Body_DOMEventProcessor = function Body_DOMEventProcessor(domEvent) {
        var target = domEvent.target,
            type = domEvent.type;
        var eventInfos;
        var ignore;
        var arr = [];
        var vframe, view, eventName, fn;
        var lastVfId;
        var params;
        while (target != G_DOCBODY) {
            eventInfos = Body_FindVframeInfo(target, type);
            if (eventInfos.length) {
                arr = [];
                for (var _i = 0, eventInfos_1 = eventInfos; _i < eventInfos_1.length; _i++) {
                    var _a = eventInfos_1[_i],
                        v = _a.v,
                        r = _a.r,
                        n = _a.n,
                        p = _a.p,
                        i = _a.i;
                    if (!v && DEBUG) {
                        return Magix_Cfg.error(Error("bad " + type + ":" + r));
                    }
                    if (lastVfId != v) {
                        if (lastVfId && domEvent.isPropagationStopped()) {
                            break;
                        }
                        lastVfId = v;
                    }
                    vframe = Vframe_Vframes[v];
                    view = vframe && vframe['$v'];
                    if (view) {
                        eventName = n + G_SPLITER + type;
                        fn = view[eventName];
                        if (fn) {
                            domEvent.eventTarget = target;
                            params = p || {};
                            if (i && i.indexOf(G_SPLITER) > 0) {
                                GSet_Params(view['$d']['$a'], params, params = {});
                                if (DEBUG) {
                                    params = Safeguard(params);
                                }
                            }
                            domEvent[G_PARAMS] = params;
                            G_ToTry(fn, domEvent, view);
                            if (domEvent.isImmediatePropagationStopped()) {
                                break;
                            }
                        }
                        if (DEBUG) {
                            if (!fn) {
                                if (eventName[0] == '\x1F') {
                                    console.error('use view.wrapEvent wrap your html');
                                } else {
                                    console.error('can not find event processor:' + n + '<' + type + '> from view:' + vframe.path);
                                }
                            }
                        }
                    } else {
                        domEvent.stopPropagation();
                    }
                    if (DEBUG) {
                        if (!view && view !== 0) {
                            console.error('can not find vframe:' + v);
                        }
                    }
                }
            }
            /*|| e.mxStop */
            if ((ignore = target.$) && ignore[type] || domEvent.isPropagationStopped()) {
                break;
            } else {
                arr.push(target);
            }
            target = target.parentNode || G_DOCBODY;
        }
        for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
            target = arr_1[_b];
            ignore = target.$ || (target.$ = {});
            ignore[type] = 1;
        }
    };
    var Body_DOMEventBind = function Body_DOMEventBind(type, searchSelector, remove) {
        var counter = Body_RootEvents[type] | 0;
        var offset = remove ? -1 : 1;
        if (!counter || remove === counter) {
            G_DOMEventLibBind(G_DOCBODY, type, Body_DOMEventProcessor, remove);
        }
        Body_RootEvents[type] = counter + offset;
        if (searchSelector) {
            Body_SearchSelectorEvents[type] = (Body_SearchSelectorEvents[type] | 0) + offset;
        }
    };
    var TO_VDOM_SELF_CLOSE = {
        input: 1,
        br: 1,
        hr: 1,
        img: 1,
        embed: 1,
        source: 1,
        area: 1,
        param: 1,
        col: 1,
        track: 1,
        wbr: 1
    };
    var TO_VDOM_SPECIAL_PROPS = {
        input: [G_VALUE, 'checked'],
        textarea: [G_VALUE],
        option: ['selected']
    };
    var TO_VDOM_TEXT_NODE = G_COUNTER;
    if (DEBUG) {
        TO_VDOM_TEXT_NODE = '#text';
    }
    var TO_VDOM_OpenReg = /^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,
        TO_VDOM_AttrReg = /([-A-Za-z\d_]+)(?:="([^"]*)")?/g,
        TO_VDOM_CloseReg = /^<\/[a-z\d+]+>/;
    var TO_VDOM_UnescapeMap = {};
    var TO_VDOM_UnescapeReg = /&#?[^\W]+;?/g;
    var TO_VDOM_Temp = G_DOCUMENT.createElement('div');
    var TO_VDOM_UnescapeCallback = function TO_VDOM_UnescapeCallback(m) {
        if (!G_Has(TO_VDOM_UnescapeMap, m)) {
            TO_VDOM_Temp.innerHTML = m;
            TO_VDOM_UnescapeMap[m] = TO_VDOM_Temp.innerText;
        }
        return TO_VDOM_UnescapeMap[m];
    };
    var TO_VDOM_Unescape = function TO_VDOM_Unescape(str) {
        return str.replace(TO_VDOM_UnescapeReg, TO_VDOM_UnescapeCallback);
    };
    var TO_VDOM = function TO_VDOM(input) {
        // 是个对象，直接返回
        if (G_IsObject(input)) {
            if (input['$nt']) {
                // 需要包装一个最根的节点
                input = {
                    "$nc": [input]
                };
            }
            return input;
        }
        var count = input.length,
            current = 0,
            last = 0,
            chars,
            currentParent = {
            '$nc': [],
            '$nh': input
        },
            index,
            temp,
            match,
            tag,
            attrs,
            stack = [currentParent],
            em,
            amap,
            text,
            unary,
            compareKey; //新旧vnode的比较key
        while (current < count) {
            chars = 1;
            temp = input.slice(current);
            if (temp[0] == '<') {
                if (temp[1] == '/') {
                    match = temp.match(TO_VDOM_CloseReg);
                    if (match) {
                        em = stack.pop();
                        attrs = input.slice(em['$csp'], current);
                        if (em['$nt'] == 'textarea') {
                            em['$na'].push({
                                '$nak': G_VALUE,
                                '$nav': attrs
                            });
                            em['$nam'][G_VALUE] = attrs;
                            em['$nc'] = G_EMPTY_ARRAY;
                        } else {
                            em['$nh'] = attrs;
                        }
                        currentParent = stack[stack.length - 1];
                        current += match[0].length;
                        chars = 0;
                    }
                } else {
                    match = temp.match(TO_VDOM_OpenReg);
                    if (match) {
                        tag = match[1];
                        attrs = [];
                        amap = {};
                        compareKey = G_EMPTY;
                        match[2].replace(TO_VDOM_AttrReg, function (m, key, value) {
                            value = value || G_EMPTY;
                            if (key == 'id') {
                                compareKey = value;
                            } else if (key == G_MX_VIEW && value && !compareKey) {
                                //否则如果是组件,则使用组件的路径做为key
                                compareKey = G_ParseUri(value)[G_PATH];
                            } else if (key == 'mxs') {
                                if (!compareKey) compareKey = value;
                            }
                            attrs.push({
                                '$nak': key,
                                '$nav': value
                            });
                            amap[key] = value;
                        });
                        current += match[0].length;
                        unary = match[3] || G_Has(TO_VDOM_SELF_CLOSE, tag);
                        if (DEBUG) {
                            if (TO_VDOM_SELF_CLOSE[tag] && !match[3]) {
                                console.error('avoid use tag:' + tag + ' without self close slash. near:' + match[0]);
                            }
                        }
                        em = {
                            '$nck': compareKey,
                            '$nt': tag,
                            '$na': attrs,
                            '$nam': amap,
                            '$nc': [],
                            '$csp': current
                        };
                        currentParent['$nc'].push(em);
                        if (unary) {
                            em['$nsc'] = 1;
                        } else {
                            stack.push(em);
                            if (DEBUG) {
                                stack[stack.length - 1]['$tsp'] = current - match[0].length;
                            }
                            currentParent = em;
                        }
                        chars = 0;
                    }
                }
            }
            if (chars) {
                index = temp.indexOf('<');
                if (index < 0) {
                    text = temp;
                } else {
                    text = temp.substring(0, index);
                }
                current += text.length;
                em = {
                    '$nt': TO_VDOM_TEXT_NODE,
                    '$nh': text
                };
                currentParent['$nc'].push(em);
            }
            if (last == current) {
                break;
            }
            if (DEBUG) {
                if (last == current) {
                    throw new Error('bad input:' + temp);
                }
                last = current;
            }
        }
        if (DEBUG && stack.length > 1) {
            throw new Error('parsing failure:' + input);
        }
        return currentParent;
    };
    var V_UnmountVframs = function V_UnmountVframs(vf, n) {
        var id = IdIt(n);
        if (vf['$c'][id]) {
            vf.unmountVframe(id, 1);
        } else {
            vf.unmountZone(id, 1);
        }
    };
    var _getHTML = function _getHTML(vnode, withTag) {
        var c, key, value, tag, prefix, content;
        tag = vnode['$nt'];
        content = vnode['$nh'];
        if (tag == TO_VDOM_TEXT_NODE) return content;
        if (tag && withTag) {
            prefix = '<' + tag + ' ';
            for (var _i = 0, _a = vnode['$na']; _i < _a.length; _i++) {
                c = _a[_i];
                key = c['$nak'];
                value = c['$nav'];
                prefix += ' ' + key + '="' + TO_VDOM_Unescape(value) + '"';
            }
            if (vnode['$nsc']) {
                return prefix + ' />';
            } else {
                return prefix + ' >' + content + '</' + tag + '>';
            }
        } else {
            return content;
        }
    };
    var V_GetNodehtml = function V_GetNodehtml(vnode, withTag) {
        if (vnode['$nh']) {
            return _getHTML(vnode, withTag);
        }
        var content = '';
        if (Array.isArray(vnode)) {
            vnode.forEach(function (node) {
                content += V_GetNodehtml(node, withTag);
            });
        } else {
            if (vnode['$nc'].length > 0) {
                content = V_GetNodehtml(vnode['$nc'], true);
            }
        }
        vnode['$nh'] = content;
        return _getHTML(vnode, withTag);
    };
    var tmplMxEventReg = /mx-(?!view|vframe|owner|autonomy|datafrom|guid|ssid|dep|html|static)([a-zA-Z]+)/;
    var V_CreatElement = function V_CreatElement(tag, attrs) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var vdom = {};
        var compareKey = '';
        var view = this;
        attrs = attrs || {};
        children = children || [];
        // 如果发现是组件实例，那么我们需要做个别名转换
        if (tag instanceof Function) {
            if (!Magix.addView) {
                console.error('unsupport template tag,function tag must use magix webpack');
                return;
            }
            var guid = G_Id('_mv_');
            attrs['mx-view'] = guid;
            Magix.addView(guid, tag); // 这样后续可以通过guid 找到这个实例
            tag = 'div'; // 默认用div是不是不好
        }
        vdom['$nam'] = attrs;
        vdom['$na'] = [];
        Object.keys(attrs).forEach(function (attrKey) {
            // compareKey的处理
            if (attrKey == 'id') {
                compareKey = attrs[attrKey];
            } else if (attrKey == G_MX_VIEW && attrs[attrKey] && !compareKey) {
                //否则如果是组件,则使用组件的路径做为key
                compareKey = G_ParseUri(attrs[attrKey])[G_PATH];
            } else if (attrKey == 'mxs') {
                if (!compareKey) compareKey = attrs[attrKey];
            }
            // eventName的处理，我觉得可以直接用另外一种去做。直接是fn
            if (tmplMxEventReg.test(attrKey)) {
                var name = attrs[attrKey]; // 支持直接传递函数了
                var prop = void 0;
                var efid = '';
                if (name instanceof Function) {
                    efid = G_Id('_efn_');
                    name = efid + '()'; // 使用一个代替
                    // 将这个函数存起来，等待后面去调用
                    prop = view.constructor[G_PROTOTYPE];
                    prop[efid + G_SPLITER + 'click'] = attrs[attrKey];
                }
                attrs[attrKey] = view.id + '\x1e' + name;
            }
            vdom['$na'].push({
                '$nak': attrKey,
                '$nav': attrs[attrKey]
            });
        });
        // 如果是mx-view，那么属性需要特殊处理
        if (attrs['mx-view']) {
            var mxViewParams_1 = []; // attrs['mx-view'].indexOf('?') !== -1 ? '' : '?'
            var mxAttr_1 = null;
            var sKey_1,
                viewKey_1,
                mxViewParamsString = void 0;
            vdom['$na'].forEach(function (attr) {
                if (attr['$nak'] === 'mx-view') {
                    mxAttr_1 = attr;
                } else {
                    // 如果属性的值是个变量，而不是字符串 ？ 暂时区分不出来，干脆全部当做透传变量吧
                    sKey_1 = G_SPLITER + G_Id('sk'); // 如果是string是否可以优化下，以string为key
                    view.updater['$a'][sKey_1] = attr['$nav']; // 先存起来
                    attr['$nav'] = sKey_1;
                    vdom['$nam'][attr['$nak']] = sKey_1;
                    viewKey_1 = attr['$nak'].replace('view-', ''); // view-xxx => xxx
                    mxViewParams_1.push(viewKey_1 + '=' + sKey_1);
                }
            });
            mxViewParamsString = mxAttr_1['$nav'] + '?' + mxViewParams_1.join('&');
            mxAttr_1['$nav'] = mxViewParamsString;
            attrs['mx-view'] = mxViewParamsString;
        }
        if (tag) {
            vdom['$nt'] = tag;
            vdom['$nck'] = compareKey;
        }
        vdom['$nc'] = [];
        children.forEach(function (child) {
            if (G_IsObject(child)) {
                vdom['$nc'].push(child);
            } else {
                // 针对text需要做处理
                vdom['$nc'].push({
                    '$nh': child,
                    '$nt': TO_VDOM_TEXT_NODE
                });
            }
        });
        return vdom;
    };
    var V_SVGNS = 'http://www.w3.org/2000/svg';
    var V_SetAttributes = function V_SetAttributes(oldNode, lastVDOM, newVDOM, ref) {
        var c,
            key,
            value,
            tag = lastVDOM['$nt'],
            nMap = newVDOM['$nam'];
        if (lastVDOM) {
            for (var _i = 0, _a = lastVDOM['$na']; _i < _a.length; _i++) {
                c = _a[_i];
                key = c['$nak'];
                if (!G_Has(nMap, key)) {
                    if (key == 'id') {
                        ref.d.push([oldNode, G_EMPTY]);
                    } else {
                        ref.c = 1;
                        oldNode.removeAttribute(key);
                    }
                }
            }
        }
        for (var _b = 0, _c = newVDOM['$na']; _b < _c.length; _b++) {
            c = _c[_b];
            key = c['$nak'];
            value = c['$nav'];
            //旧值与新值不相等
            if (!lastVDOM || lastVDOM['$nam'][key] !== value) {
                value = TO_VDOM_Unescape(value);
                if (key == 'id') {
                    ref.d.push([oldNode, value]);
                } else {
                    ref.c = 1;
                    oldNode.setAttribute(key, value);
                }
            }
        }
        var specials = TO_VDOM_SPECIAL_PROPS[tag];
        if (specials) {
            for (var _d = 0, specials_1 = specials; _d < specials_1.length; _d++) {
                c = specials_1[_d];
                oldNode[c] = G_Has(nMap, c) ? c != G_VALUE || nMap[c] : c == G_VALUE && G_EMPTY;
            }
        }
    };
    var V_CreateNode = function V_CreateNode(vnode, owner, ref, c, tag) {
        tag = vnode['$nt'];
        var nHtml = V_GetNodehtml(vnode);
        if (tag == TO_VDOM_TEXT_NODE) {
            return G_DOCUMENT.createTextNode(nHtml);
        }
        c = G_DOCUMENT.createElementNS(tag == 'svg' ? V_SVGNS : owner.namespaceURI, tag);
        V_SetAttributes(c, 0, vnode, ref);
        if (nHtml) {
            c.innerHTML = nHtml;
        }
        return c;
    };
    var V_GenKeyedNodes = function V_GenKeyedNodes(vnodes, nodes, start, end) {
        var keyed = {},
            i = end,
            v,
            key;
        for (; i >= start; i--) {
            v = vnodes[i];
            key = v['$nck'];
            if (key) {
                key = keyed[key] || (keyed[key] = []);
                key.push({
                    'a': nodes[i],
                    'b': v
                });
            }
        }
        return keyed;
    };
    var V_SetChildNodes = function V_SetChildNodes(realNode, lastVDOM, newVDOM, ref, vframe, data) {
        if (!lastVDOM) {
            ref.c = 1;
            realNode.innerHTML = V_GetNodehtml(newVDOM);
        } else {
            var i = void 0,
                oi = 0,
                oldChildren = lastVDOM['$nc'],
                newChildren = newVDOM['$nc'],
                oc = void 0,
                nc = void 0,
                oldCount = oldChildren.length,
                newCount = newChildren.length,
                nodes = realNode.childNodes,
                compareKey = void 0,
                orn = void 0,
                ovn = void 0,
                keyedNodes = {};
            for (i = oldCount; i--;) {
                oc = oldChildren[i];
                compareKey = oc['$nck'];
                if (compareKey) {
                    compareKey = keyedNodes[compareKey] || (keyedNodes[compareKey] = []);
                    compareKey.push({
                        'a': nodes[i],
                        'b': oc
                    });
                }
            }
            /* let oldStartIdx = 0,
                 oldEndIdx = oldCount - 1,
                 newStartIdx = 0,
                 newEndIdx = newCount - 1,
                 oldStartVNode = oldChildren[oldStartIdx],
                 oldEndVNode = oldChildren[oldEndIdx],
                 newStartVNode = newChildren[newStartIdx],
                 newEndVNode = newChildren[newEndIdx];
                 while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                 if (newStartVNode['$nck'] == oldStartVNode['$nck']) {
                     V_SetNode(nodes[newStartIdx], realNode, oldStartVNode, newStartVNode, ref, vframe, data);
                     newStartVNode = newChildren[++newStartIdx];
                     oldStartVNode = oldChildren[++oldStartIdx];
                 } else if (newEndVNode['$nck'] == oldEndVNode['$nck']) {
                     V_SetNode(nodes[newEndIdx], realNode, oldEndVNode, newEndVNode, ref, vframe, data);
                     newEndVNode = newChildren[--newEndIdx];
                     oldEndVNode = oldChildren[--oldEndIdx];
                 } else {
                     if (!keyedNodes) keyedNodes = V_GenKeyedNodes(oldChildren, nodes, oldStartIdx, oldEndIdx);
                     }
             }
             if (newStartIdx > newEndIdx) {
                 for (i = oldStartIdx; i <= oldEndIdx; i++) {
                     oi = nodes[oldStartIdx];//删除多余的旧节点
                     V_UnmountVframs(vframe, oi);
                     realNode.removeChild(oi);
                     ref.c = 1;
                 }
             }*/
            for (i = 0; i < newCount; i++) {
                do {
                    oc = oldChildren[oi++];
                } while (oc && oc['c']);
                nc = newChildren[i];
                compareKey = keyedNodes[nc['$nck']];
                if (compareKey && (compareKey = compareKey.pop())) {
                    orn = compareKey['a'];
                    ovn = compareKey['b'];
                    if (orn != nodes[i]) {
                        // oldChildren.splice(i, 0, oc = ovn);//移动虚拟dom
                        // for (j = oldChildren.length; j--;) {//从后向前清理虚拟dom
                        //     if (oldChildren[j] == ovn) {
                        //         oldChildren.splice(j, 1);
                        //         break;
                        //     }
                        // }
                        ovn['c'] = 1;
                        oc = ovn;
                        realNode.insertBefore(orn, nodes[i]);
                    }
                    V_SetNode(nodes[i], realNode, oc, nc, ref, vframe, data);
                } else if (oc) {
                    if (keyedNodes[oc['$nck']]) {
                        //oldChildren.splice(i, 0, nc);//插入一个占位符，在接下来的比较中才能一一对应
                        //oldCount++;
                        oi--;
                        ref.c = 1;
                        // tip1 这里会有问题，因为添加了一个新元素，但是旧元素没删除，导致后面删除总数的时候少删除了，所以要++
                        oldCount++;
                        realNode.insertBefore(V_CreateNode(nc, realNode, ref), nodes[i]);
                    } else {
                        V_SetNode(nodes[i], realNode, oc, nc, ref, vframe, data);
                        //ref.c = 1;
                    }
                } else {
                    realNode.appendChild(V_CreateNode(nc, realNode, ref));
                    ref.c = 1;
                }
            }
            // see tip1
            for (i = newCount; i < oldCount; i++) {
                oi = nodes[newCount]; //删除多余的旧节点
                V_UnmountVframs(vframe, oi);
                realNode.removeChild(oi);
                ref.c = 1;
            }
        }
    };
    var V_SetNode = function V_SetNode(realNode, oldParent, lastVDOM, newVDOM, ref, vframe, data) {
        if (DEBUG) {
            if (oldParent.nodeName == 'TEMPLATE') {
                console.error('unsupport template tag');
            }
            if (realNode.nodeName == '#text' && lastVDOM['$nt'] != '#text' || realNode.nodeName != '#text' && realNode.nodeName.toLowerCase() != lastVDOM['$nt']) {
                console.error('Your code is not match the DOM tree generated by the browser. near:' + lastVDOM['$nh'] + '. Is that you lost some tags or modified the DOM tree?');
            }
        }
        if (lastVDOM['$nt'] == newVDOM['$nt']) {
            if (lastVDOM['$nt'] == TO_VDOM_TEXT_NODE) {
                if (V_GetNodehtml(lastVDOM) != V_GetNodehtml(newVDOM)) {
                    realNode.nodeValue = TO_VDOM_Unescape(V_GetNodehtml(newVDOM));
                }
            } else if (!lastVDOM['$nam'][G_Tag_Key] || lastVDOM['$nam'][G_Tag_Key] != newVDOM['$nam'][G_Tag_Key]) {
                var newMxView = newVDOM['$nam'][G_MX_VIEW],
                    newHTML = V_GetNodehtml(newVDOM);
                var updateAttribute = !newVDOM['$nam'][G_Tag_Attr_Key] || newVDOM['$nam'][G_Tag_Attr_Key] != newVDOM['$nam'][G_Tag_Attr_Key],
                    updateChildren = void 0,
                    unmountOld = void 0,
                    oldVf = Vframe_Vframes[realNode.id],
                    assign = void 0,
                    needUpdate = void 0,
                    view = void 0,
                    uri = void 0,
                    params = void 0,
                    htmlChanged = void 0 /*,
                                         oldDataStringify, newDataStringify,dataChanged*/;
                /*
                    如果存在新旧view，则考虑路径一致，避免渲染的问题
                 */
                if (newMxView && oldVf) {
                    view = oldVf['$v'];
                    assign = view['$g'];
                    uri = G_ParseUri(newMxView);
                    htmlChanged = newHTML != V_GetNodehtml(lastVDOM);
                    needUpdate = newMxView.indexOf('?') > 0 || htmlChanged;
                    /*
                        只检测是否有参数控制view而不检测数据是否变化的原因：
                        例：view内有一input接收传递的参数，且该input也能被用户输入
                        var d1='xl';
                        var d2='xl';
                        当传递第一份数据时，input显示值xl，这时候用户修改了input的值且使用第二份数据重新渲染这个view，问input该如何显示？
                    */
                }
                //旧节点有view,新节点有view,且是同类型的view
                if (newMxView && oldVf && oldVf['$i'] == uri[G_PATH]) {
                    if (needUpdate) {
                        //如果有assign方法,且有参数或html变化
                        if (assign) {
                            params = uri[G_PARAMS];
                            //处理引用赋值
                            if (newMxView.indexOf(G_SPLITER) > -1) {
                                GSet_Params(data, params, params);
                            }
                            //oldVf['$n'] = newHTML;
                            //oldVf['$h'] = newDataStringify;
                            oldVf[G_PATH] = newMxView; //update ref
                            //如果需要更新，则进行更新的操作
                            uri = {
                                inner: newHTML,
                                deep: !view['$e'],
                                //data: dataChanged,
                                html: htmlChanged
                            };
                            if (updateAttribute) {
                                updateAttribute = G_EMPTY;
                                V_SetAttributes(realNode, lastVDOM, newVDOM, ref);
                            }
                            if (G_ToTry(assign, [params, uri], view)) {
                                ref.v.push(view);
                            }
                            //默认当一个组件有assign方法时，由该方法及该view上的render方法完成当前区域内的节点更新
                            //而对于不渲染界面的控制类型的组件来讲，它本身更新后，有可能需要继续由magix更新内部的子节点，此时通过deep参数控制
                            updateChildren = uri.deep;
                        } else {
                            unmountOld = 1;
                            updateChildren = 1;
                        }
                    }
                } else {
                    updateChildren = 1;
                    unmountOld = oldVf;
                }
                if (unmountOld) {
                    oldVf.unmountVframe(0, 1);
                }
                if (updateAttribute) {
                    if (unmountOld) ref.c = 1;
                    //ref.c = 1;
                    V_SetAttributes(realNode, lastVDOM, newVDOM, ref);
                }
                // Update all children (and subchildren).
                //自闭合标签不再检测子节点
                if (updateChildren && !newVDOM['$nsc'] && !lastVDOM['$nsc']) {
                    //ref.c = 1;
                    V_SetChildNodes(realNode, lastVDOM, newVDOM, ref, vframe, data);
                }
            }
        } else {
            V_UnmountVframs(vframe, realNode);
            oldParent.replaceChild(V_CreateNode(newVDOM, oldParent, ref), realNode);
            ref.c = 1;
        }
    };
    var V_UpdateDOM = function V_UpdateDOM(updater) {
        var selfId = updater['$b'];
        var vf = Vframe_Vframes[selfId];
        var data = updater['$a'];
        var view = vf && vf['$v'],
            ref = { d: [], v: [] },
            node = G_GetById(selfId),
            tmpl,
            html,
            x,
            vdom;
        if (!view.$vcr) view.$vcr = V_CreatElement;
        if (view && view['$a'] > 0 && (tmpl = view['$e'])) {
            console.time('[vdom time:' + selfId + ']');
            console.time('[vdom html to vdom:' + selfId + ']');
            html = tmpl.call(view, data, selfId);
            vdom = TO_VDOM(html);
            console.timeEnd('[vdom html to vdom:' + selfId + ']');
            V_SetChildNodes(node, updater['$d'], vdom, ref, vf, data);
            updater['$d'] = vdom;
            for (var _i = 0, _a = ref.d; _i < _a.length; _i++) {
                x = _a[_i];
                x[0].id = x[1];
            }
            for (var _b = 0, _c = ref.v; _b < _c.length; _b++) {
                x = _c[_b];
                x['$b']();
            }
            if (ref.c) {
                view.endUpdate(selfId);
                G_DOC.trigger({
                    type: 'htmlchanged',
                    vId: selfId
                });
            }
        }
        view.fire('domready');
        console.timeEnd('[vdom time:' + selfId + ']');
    };
    /**
    * 使用mx-keys进行局部刷新的类
    * @constructor
    * @name Updater
    * @class
    * @beta
    * @module updater
    * @param {String} viewId Magix.View对象Id
    */
    var Updater = function Updater(viewId) {
        var me = this;
        me['$b'] = viewId;
        me['$a'] = (_a = {
            vId: viewId
        }, _a[G_SPLITER] = 1, _a);
        var _a;
    };
    G_Assign(Updater[G_PROTOTYPE], {
        /**
         * @lends Updater#
         */
        /**
         * 获取放入的数据
         * @param  {String} [key] key
         * @return {Object} 返回对应的数据，当key未传递时，返回整个数据对象
         * @example
         * render: function() {
         *     this.updater.set({
         *         a: 10,
         *         b: 20
         *     });
         * },
         * 'read&lt;click&gt;': function() {
         *     console.log(this.updater.get('a'));
         * }
         */
        get: function get(key, result) {
            result = this['$a'];
            if (key) {
                result = result[key];
            }
            return result;
        },
        /**
         * 通过path获取值
         * @param  {String} path 点分割的路径
         * @return {Object}
         */
        /*gain: function (path) {
            let result = this.$d;
            let ps = path.split('.'),
                temp;
            while (result && ps.length) {
                temp = ps.shift();
                result = result[temp];
            }
            return result;
        },*/
        /**
         * 获取放入的数据
         * @param  {Object} obj 待放入的数据
         * @return {Updater} 返回updater
         * @example
         * render: function() {
         *     this.updater.set({
         *         a: 10,
         *         b: 20
         *     });
         * },
         * 'read&lt;click&gt;': function() {
         *     console.log(this.updater.get('a'));
         * }
         */
        set: function set(obj) {
            var me = this;
            G_Assign(me['$a'], obj);
            return me;
        },
        /**
         * 检测数据变化，更新界面，放入数据后需要显式调用该方法才可以把数据更新到界面
         * @example
         * render: function() {
         *     this.updater.set({
         *         a: 10,
         *         b: 20
         *     }).digest();
         * }
         */
        digest: function digest(data) {
            var me = this;
            me.set(data);
            V_UpdateDOM(me);
            return me;
        },
        /**
         * 获取当前数据状态的快照，配合altered方法可获得数据是否有变化
         * @return {Updater} 返回updater
         * @example
         * render: function() {
         *     this.updater.set({
         *         a: 20,
         *         b: 30
         *     }).digest().snapshot(); //更新完界面后保存快照
         * },
         * 'save&lt;click&gt;': function() {
         *     //save to server
         *     console.log(this.updater.altered()); //false
         *     this.updater.set({
         *         a: 20,
         *         b: 40
         *     });
         *     console.log(this.updater.altered()); //true
         *     this.updater.snapshot(); //再保存一次快照
         *     console.log(this.updater.altered()); //false
         * }
         */
        snapshot: function snapshot() {
            var me = this;
            me['$e'] = JSONStringify(me['$a']);
            return me;
        },
        /**
         * 检测数据是否有变动
         * @return {Boolean} 是否变动
         * @example
         * render: function() {
         *     this.updater.set({
         *         a: 20,
         *         b: 30
         *     }).digest().snapshot(); //更新完界面后保存快照
         * },
         * 'save&lt;click&gt;': function() {
         *     //save to server
         *     console.log(this.updater.altered()); //false
         *     this.updater.set({
         *         a: 20,
         *         b: 40
         *     });
         *     console.log(this.updater.altered()); //true
         *     this.updater.snapshot(); //再保存一次快照
         *     console.log(this.updater.altered()); //false
         * }
         */
        altered: function altered() {
            var me = this;
            if (me['$e']) {
                return me['$e'] != JSONStringify(me['$a']);
            }
        }
    });
    var View_EvtMethodReg = /^(\$?)([^<]*)<([^>]+)>$/;
    var processMixinsSameEvent = function processMixinsSameEvent(exist, additional, _temp) {
        if (exist['$h']) {
            _temp = exist;
        } else {
            _temp = function temp(e) {
                G_ToTry(_temp['$h'], e, this);
            };
            _temp['$h'] = [exist];
            _temp['$i'] = 1;
        }
        _temp['$h'] = _temp['$h'].concat(additional['$h'] || additional);
        return _temp;
    };
    //let View_MxEvt = /\smx-(?!view|vframe)[a-z]+\s*=\s*"/g;
    var View_DestroyAllResources = function View_DestroyAllResources(me, lastly) {
        var cache = me['$r'],
            //reources
        p,
            c;
        for (p in cache) {
            c = cache[p];
            if (lastly || c.x) {
                View_DestroyResource(cache, p, 1);
            }
        }
    };
    var View_DestroyResource = function View_DestroyResource(cache, key, callDestroy, old) {
        var o = cache[key],
            fn,
            res;
        if (o && o != old) {
            //let processed=false;
            res = o.e; //entity
            fn = res.destroy;
            if (fn && callDestroy) {
                G_ToTry(fn, G_EMPTY_ARRAY, res);
            }
            delete cache[key];
        }
        return res;
    };
    var View_WrapMethod = function View_WrapMethod(prop, fName, short, fn, me) {
        fn = prop[fName];
        prop[fName] = prop[short] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            me = this;
            if (me['$a'] > 0) {
                me['$a']++;
                me.fire('rendercall');
                View_DestroyAllResources(me);
                G_ToTry(fn, args, me);
            }
        };
    };
    var View_DelegateEvents = function View_DelegateEvents(me, destroy) {
        var e,
            eo = me["$eo"],
            so = me["$so"],
            el = me["$el"],
            id = me.id; //eventsObject
        for (e in eo) {
            Body_DOMEventBind(e, so[e], destroy);
        }
        for (var _i = 0, el_1 = el; _i < el_1.length; _i++) {
            e = el_1[_i];
            G_DOMEventLibBind(e.e, e.n, G_DOMGlobalProcessor, destroy, {
                i: id,
                v: me,
                f: e.f,
                e: e.e
            });
        }
    };
    var View_Ctors = [];
    var View_Globals = {
        win: G_WINDOW,
        doc: G_DOCUMENT
    };
    /**
     * 预处理view
     * @param  {View} oView view子类
     * @param  {Vom} vom vom
     */
    var View_Prepare = function View_Prepare(oView) {
        if (!oView[G_SPLITER]) {
            oView[G_SPLITER] = [];
            var prop = oView[G_PROTOTYPE],
                currentFn = void 0,
                matches = void 0,
                selectorOrCallback = void 0,
                events = void 0,
                eventsObject = {},
                eventsList = [],
                selectorObject = {},
                node = void 0,
                isSelector = void 0,
                p = void 0,
                item = void 0,
                mask = void 0,
                temp = {};
            matches = prop.mixins;
            if (matches) {
                for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                    node = matches_1[_i];
                    for (p in node) {
                        currentFn = node[p];
                        selectorOrCallback = temp[p];
                        if (p == 'ctor') {
                            oView[G_SPLITER].push(currentFn);
                            continue;
                        } else if (View_EvtMethodReg.test(p)) {
                            if (selectorOrCallback) {
                                currentFn = processMixinsSameEvent(selectorOrCallback, currentFn);
                            } else {
                                currentFn['$i'] = 1;
                            }
                        } else if (DEBUG && selectorOrCallback && p != 'extend' && p != G_SPLITER) {
                            Magix_Cfg.error(Error('mixins duplicate:' + p));
                        }
                        temp[p] = currentFn;
                    }
                }
                for (p in temp) {
                    if (!G_Has(prop, p)) {
                        prop[p] = temp[p];
                    }
                }
            }
            for (p in prop) {
                currentFn = prop[p];
                matches = p.match(View_EvtMethodReg);
                if (matches) {
                    isSelector = matches[1], selectorOrCallback = matches[2], events = matches[3];
                    events = events.split(G_COMMA);
                    for (var _a = 0, events_1 = events; _a < events_1.length; _a++) {
                        item = events_1[_a];
                        node = View_Globals[selectorOrCallback];
                        mask = 1;
                        if (isSelector) {
                            if (node) {
                                eventsList.push({
                                    f: currentFn,
                                    e: node,
                                    n: item
                                });
                                continue;
                            }
                            mask = 2;
                            node = selectorObject[item];
                            if (!node) {
                                node = selectorObject[item] = {};
                            }
                            node[selectorOrCallback] = 1;
                        }
                        eventsObject[item] = eventsObject[item] | mask;
                        item = selectorOrCallback + G_SPLITER + item;
                        node = prop[item];
                        //for in 就近遍历，如果有则忽略
                        if (!node) {
                            prop[item] = currentFn;
                        } else if (node['$i']) {
                            if (currentFn['$i']) {
                                prop[item] = processMixinsSameEvent(node, currentFn);
                            } else if (G_Has(prop, p)) {
                                prop[item] = currentFn;
                            }
                        }
                    }
                }
            }
            //console.log(prop);
            View_WrapMethod(prop, 'render', '$b');
            prop['$eo'] = eventsObject;
            prop['$el'] = eventsList;
            prop['$so'] = selectorObject;
            prop['$e'] = prop.tmpl;
            prop['$g'] = prop.assign;
        }
        return oView[G_SPLITER];
    };
    var View_IsObserveChanged = function View_IsObserveChanged(view) {
        var loc = view['$l'];
        var res, i, params;
        if (loc.f) {
            if (loc.p) {
                res = Router_LastChanged[G_PATH];
            }
            if (!res && loc.k) {
                params = Router_LastChanged[G_PARAMS];
                for (var _i = 0, _a = loc.k; _i < _a.length; _i++) {
                    i = _a[_i];
                    res = G_Has(params, i);
                    if (res) break;
                }
            }
            // if (res && loc.c) {
            //     loc.c.call(view);
            // }
        }
        return res;
    };
    /**
     * View类
     * @name View
     * @class
     * @constructor
     * @borrows Event.on as #on
     * @borrows Event.fire as #fire
     * @borrows Event.off as #off
     * @param {Object} ops 创建view时，需要附加到view对象上的其它属性
     * @property {String} id 当前view与页面vframe节点对应的id
     * @property {Vframe} owner 拥有当前view的vframe对象
     * @example
     * // 关于事件:
     * // html写法：
     *
     * //  &lt;input type="button" mx-click="test({id:100,name:'xinglie'})" value="test" /&gt;
     * //  &lt;a href="http://etao.com" mx-click="test({com:'etao.com'})"&gt;http://etao.com&lt;/a&gt;
     *
     * // js写法：
     *
     *     'test&lt;click&gt;':function(e){
     *          e.preventDefault();
     *          //e.current 处理事件的dom节点(即带有mx-click属性的节点)
     *          //e.target 触发事件的dom节点(即鼠标点中的节点，在current里包含其它节点时，current与target有可能不一样)
     *          //e.params  传递的参数
     *          //e.params.com,e.params.id,e.params.name
     *      },
     *      'test&lt;mousedown&gt;':function(e){
     *
     *       }
     *
     *  //上述示例对test方法标注了click与mousedown事件，也可以合写成：
     *  'test&lt;click,mousedown&gt;':function(e){
     *      alert(e.type);//可通过type识别是哪种事件类型
     *  }
     */
    var View = function View(id, owner, ops, me) {
        me = this;
        me.owner = owner;
        me.id = id;
        me['$l'] = {
            k: []
        };
        me['$r'] = {};
        me['$a'] = 1; //标识view是否刷新过，对于托管的函数资源，在回调这个函数时，不但要确保view没有销毁，而且要确保view没有刷新过，如果刷新过则不回调
        me.updater = me['$d'] = new Updater(me.id);
        G_ToTry(View_Ctors, ops, me);
    };
    var ViewProto = View[G_PROTOTYPE];
    G_Assign(View, {
        /**
         * @lends View
         */
        /**
         * 扩展View
         * @param  {Object} props 扩展到原型上的方法
         * @example
         * define('app/tview',function(require){
         *     let Magix = require('magix');
         *     Magix.View.merge({
         *         ctor:function(){
         *             this.$attr='test';
         *         },
         *         test:function(){
         *             alert(this.$attr);
         *         }
         *     });
         * });
         * //加入Magix.config的exts中
         *
         *  Magix.config({
         *      //...
         *      exts:['app/tview']
         *
         *  });
         *
         * //这样完成后，所有的view对象都会有一个$attr属性和test方法
         * //当然上述功能也可以用继承实现，但继承层次太多时，可以考虑使用扩展来消除多层次的继承
         * //同时当项目进行中发现所有view要实现某个功能时，该方式比继承更快捷有效
         *
         *
         */
        merge: function merge() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var prop, ctor;
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                prop = args_1[_a];
                ctor = prop && prop.ctor;
                if (ctor) {
                    View_Ctors.push(ctor);
                }
                G_Assign(ViewProto, prop);
            }
        },
        /**
         * 继承
         * @param  {Object} [props] 原型链上的方法或属性对象
         * @param {Function} [props.ctor] 类似constructor，但不是constructor，当我们继承时，你无需显示调用上一层级的ctor方法，magix会自动帮你调用
         * @param {Array} [props.mixins] mix到当前原型链上的方法对象，该对象可以有一个ctor方法用于初始化
         * @param  {Object} [statics] 静态对象或方法
         * @example
         * let Magix = require('magix');
         * let Sortable = {
         *     ctor: function() {
         *         console.log('sortable ctor');
         *         //this==当前mix Sortable的view对象
         *         this.on('destroy', function() {
         *             console.log('dispose')
         *         });
         *     },
         *     sort: function() {
         *         console.log('sort');
         *     }
         * };
         * module.exports = Magix.View.extend({
         *     mixins: [Sortable],
         *     ctor: function() {
         *         console.log('view ctor');
         *     },
         *     render: function() {
         *         this.sort();
         *     }
         * });
         */
        extend: function extend(props, statics) {
            var me = this;
            props = props || {};
            var ctor = props.ctor;
            var ctors = [];
            if (ctor) ctors.push(ctor);
            var NView = function NView(d, a, b, c) {
                me.call(this, d, a, b);
                G_ToTry(ctors.concat(c), b, this);
            };
            NView.extend = me.extend;
            return G_Extend(NView, me, props, statics);
        }
    });
    G_Assign(ViewProto, MEvent, {
        /**
         * @lends View#
         */
        /**
         * 初始化调用的方法
         * @beta
         * @module viewInit
         * @param {Object} extra 外部传递的数据对象
         */
        init: G_NOOP,
        /*
         * 包装mx-event事件，比如把mx-click="test<prevent>({key:'field'})" 包装成 mx-click="magix_vf_root^test<prevent>({key:'field})"，以方便识别交由哪个view处理
         * @function
         * @param {String} html 处理的代码片断
         * @param {Boolean} [onlyAddPrefix] 是否只添加前缀
         * @return {String} 处理后的字符串
         * @example
         * View.extend({
         *     'del&lt;click&gt;':function(e){
         *         S.one(G_HashKey+e.currentId).remove();
         *     },
         *     'addNode&lt;click&gt;':function(e){
         *         let tmpl='&lt;div mx-click="del"&gt;delete&lt;/div&gt;';
         *         //因为tmpl中有mx-click，因此需要下面这行代码进行处理一次
         *         tmpl=this.wrapEvent(tmpl);
         *         S.one(G_HashKey+e.currentId).append(tmpl);
         *     }
         * });
         */
        /**
         * 通知当前view即将开始进行html的更新
         * @param {String} [id] 哪块区域需要更新，默认整个view
         */
        beginUpdate: function beginUpdate(id, me) {
            me = this;
            if (me['$a'] > 0 && me['$f']) {
                me.owner.unmountZone(id, 1);
                /*me.fire('prerender', {
                    id: id
                });*/
            }
        },
        /**
         * 通知当前view结束html的更新
         * @param {String} [id] 哪块区域结束更新，默认整个view
         */
        endUpdate: function endUpdate(id, inner, me, o, f) {
            me = this;
            if (me['$a'] > 0) {
                id = id || me.id;
                /*me.fire('rendered', {
                    id
                });*/
                if (inner) {
                    f = inner;
                } else {
                    f = me['$f'];
                    me['$f'] = 1;
                }
                o = me.owner;
                o.mountZone(id, inner);
                if (!f) {
                    Timeout(me.wrapAsync(function () {
                        Vframe_RunInvokes(o);
                    }), 0);
                }
            }
        },
        /**
         * 包装异步回调
         * @param  {Function} fn 异步回调的function
         * @return {Function}
         * @example
         * render:function(){
         *     setTimeout(this.wrapAsync(function(){
         *         //codes
         *     }),50000);
         * }
         * // 为什么要包装一次？
         * // 在单页应用的情况下，可能异步回调执行时，当前view已经被销毁。
         * // 比如上例中的setTimeout，50s后执行回调，如果你的回调中去操作了DOM，
         * // 则会出错，为了避免这种情况的出现，可以调用view的wrapAsync包装一次。
         * // (该示例中最好的做法是在view销毁时清除setTimeout，
         * // 但有时候你很难控制回调的执行，比如JSONP，所以最好包装一次)
         */
        wrapAsync: function wrapAsync(fn, context) {
            var me = this;
            var sign = me['$a'];
            return function () {
                var a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    a[_i] = arguments[_i];
                }
                if (sign > 0 && sign == me['$a']) {
                    return fn.apply(context || me, a);
                }
            };
        },
        /**
         * 监视地址栏中的参数或path，有变动时，才调用当前view的render方法。通常情况下location有变化不会引起当前view的render被调用，所以你需要指定地址栏中哪些参数有变化时才引起render调用，使得view只关注与自已需要刷新有关的参数
         * @param {Array|String|Object} params  数组字符串
         * @param {Boolean} [isObservePath] 是否监视path
         * @beta
         * @module router
         * @example
         * return View.extend({
         *      init:function(){
         *          this.observeLocation('page,rows');//关注地址栏中的page rows2个参数的变化，当其中的任意一个改变时，才引起当前view的render被调用
         *          this.observeLocation(null,true);//关注path的变化
         *          //也可以写成下面的形式
         *          //this.observeLocation('page,rows',true);
         *          //也可以是对象的形式
         *          this.observeLocation({
         *              path: true,
         *              params:['page','rows']
         *          });
         *      },
         *      render:function(){
         *          let loc=Magix.Router.parse();
         *          console.log(loc);//获取地址解析出的对象
         *          let diff=Magix.Router.diff();
         *          console.log(diff);//获取当前地址与上一个地址差异对象
         *      }
         * });
         */
        observeLocation: function observeLocation(params, isObservePath) {
            var me = this,
                loc;
            loc = me['$l'];
            loc.f = 1;
            if (G_IsObject(params)) {
                isObservePath = params[G_PATH];
                params = params[G_PARAMS];
            }
            //if (isObservePath) {
            loc.p = isObservePath;
            //}
            if (params) {
                loc.k = (params + G_EMPTY).split(G_COMMA);
            }
        },
        /**
         * 监视Magix.State中的数据变化
         * @param  {String|Array} keys 数据对象的key
         */
        observeState: function observeState(keys) {
            this['$os'] = (keys + G_EMPTY).split(G_COMMA);
        },
        /**
         * 让view帮你管理资源，强烈建议对组件等进行托管
         * @param {String} key 资源标识key
         * @param {Object} res 要托管的资源
         * @param {Boolean} [destroyWhenCalleRender] 调用render方法时是否销毁托管的资源
         * @return {Object} 返回托管的资源
         * @beta
         * @module resource
         * @example
         * View.extend({
         *     render: function(){
         *         let me = this;
         *         let dropdown = new Dropdown();
         *
         *         me.capture('dropdown',dropdown,true);
         *     },
         *     getTest: function(){
         *         let dd = me.capture('dropdown');
         *         console.log(dd);
         *     }
         * });
         */
        capture: function capture(key, res, destroyWhenCallRender, cache) {
            cache = this['$r'];
            if (res) {
                View_DestroyResource(cache, key, 1, res);
                cache[key] = {
                    e: res,
                    x: destroyWhenCallRender
                };
                //service托管检查
                if (DEBUG && res && (res.id + G_EMPTY).indexOf('\x1es') === 0) {
                    res['$a'] = 1;
                    if (!destroyWhenCallRender) {
                        console.warn('beware! May be you should set destroyWhenCallRender = true');
                    }
                }
            } else {
                cache = cache[key];
                res = cache && cache.e;
            }
            return res;
        },
        /**
         * 释放管理的资源
         * @param  {String} key 托管时的key
         * @param  {Boolean} [destroy] 是否销毁资源
         * @return {Object} 返回托管的资源，无论是否销毁
         * @beta
         * @module resource
         */
        release: function release(key, destroy) {
            return View_DestroyResource(this['$r'], key, destroy);
        },
        /**
         * 离开提示
         * @param  {String} msg 提示消息
         * @param  {Function} fn 是否提示的回调
         * @beta
         * @module tipRouter
         * @example
         * let Magix = require('magix');
         * module.exports = Magix.View.extend({
         *     init:function(){
         *         this.leaveTip('页面数据未保存，确认离开吗？',function(){
         *             return true;//true提示，false，不提示
         *         });
         *     }
         * });
         */
        leaveTip: function leaveTip(msg, fn) {
            var me = this;
            var changeListener = function changeListener(e) {
                var a = 'a',
                    // a for router change
                b = 'b'; // b for viewunload change
                if (e.type != G_CHANGE) {
                    a = 'b';
                    b = 'a';
                }
                if (changeListener[a]) {
                    e.prevent();
                    e.reject();
                } else if (fn()) {
                    e.prevent();
                    changeListener[b] = 1;
                    me.leaveConfirm(msg, function () {
                        changeListener[b] = 0;
                        e.resolve();
                    }, function () {
                        changeListener[b] = 0;
                        e.reject();
                    });
                } else {
                    e.resolve();
                }
            };
            var unloadListener = function unloadListener(e) {
                if (fn()) {
                    e.msg = msg;
                }
            };
            Router.on(G_CHANGE, changeListener);
            Router.on(G_PAGE_UNLOAD, unloadListener);
            me.on('unload', changeListener);
            me.on('destroy', function () {
                Router.off(G_CHANGE, changeListener);
                Router.off(G_PAGE_UNLOAD, unloadListener);
            });
        },
        /**
         * 设置view的html内容
         * @param {String} id 更新节点的id
         * @param {Strig} html html字符串
         * @example
         * render:function(){
         *     this.setHTML(this.id,this.tmpl);//渲染界面，当界面复杂时，请考虑用其它方案进行更新
         * }
         */
        /*
            Q:为什么删除setHTML?
            A:统一使用updater更新界面。
            关于api的分级，高层api更内聚，一个api完成很多功能。方便开发者，但不灵活。
            底层api职责更单一，一个api只完成一个功能，灵活，但不方便开发者
            更新界面来讲，updater是一个高层api，但是有些功能却无法完成，如把view当成壳子或容器渲染第三方的组件，组件什么时间加载完成、渲染、更新了dom、如何通知magix等，这些问题在updater中是无解的，而setHTML这个api又不够底层，同样也无法完成一些功能，所以这个api食之无味，故删除
         */
        /*setHTML(id, html) {
            let me = this,
                n, i = me.id;
            me.beginUpdate(id);
            if (me['$a'] > 0) {
                n = G_GetById(id);
                if (n) G_HTML(n, View_SetEventOwner(html, i), i);
            }
            me.endUpdate(id);
            me.fire('domready');
        }*/
        /**
         * 渲染view，供最终view开发者覆盖
         * @function
         */
        render: G_NOOP
        /**
         * 当前view的dom就绪后触发
         * @name View#domready
         * @event
         * @param {Object} e view 完成渲染后触发
         */
        /**
         * view销毁时触发
         * @name View#destroy
         * @event
         * @param {Object} e
         */
        /**
         * 异步更新ui的方法(render)被调用前触发
         * @name View#rendercall
         * @event
         * @param {Object} e
         */
    });
    Magix.View = View;
    var G_Type = $.type;
    var G_Now = $.now || Date.now;
    /*
    一个请求send后，应该取消吗？
    参见xmlhttprequest的实现
        https://chromium.googlesource.com/chromium/blink/+/master/Source/core
        https://chromium.googlesource.com/chromium/blink/+/master/Source/core/xmlhttprequest/XMLHttpService.cpp
    当请求发出，服务器接受到之前取消才有用，否则连接已经建立，数据开始传递，中止只会浪费。
    但我们很难在合适的时间点abort，而且像jsonp的，我们根本无法abort掉，只能任数据返回
     然后我们在自已的代码中再去判断、决定回调是否调用
     那我们是否可以这样做：
        1. 不取消请求
        2. 请求返回后尽可能的处理保留数据，比如缓存。处理完成后才去决定是否调用回调（Service_Send中的Done实现）
     除此之外，我们还要考虑
        1. 跨请求对象对同一个缓存的接口进行请求，而某一个销毁了。
            Service.add([{
                name:'Test',
                url:'/test',
                cache:20000
            }]);
             let r1=new Service();
            r1.all('Test',function(e,m){
             });
             let r2=new Service();
            r2.all('Test',function(e,m){
             });
             r1.destroy();
             如上代码，我们在实现时：
            r2在请求Test时，此时Test是可缓存的，并且Test已经处于r1请求中了，我们不应该再次发起新的请求，只需要把回调排队到r1的Test请求中即可。参见代码：Service_Send中的for,Service.cached。
             当r1进行销毁时，并不能贸然销毁r1上的所有请求，如Test请求不能销毁，只能从回调中标识r1的回调不能再被调用。r1的Test还要继续，参考上面讨论的请求应该取消吗。就算能取消，也需要查看Test的请求中，除了r1外是否还有别的请求要用，我们示例中是r2，所以仍然继续请求。参考Service#.destroy
    */
    /**
     * Bag类
     * @name Bag
     * @beta
     * @module service
     * @constructor
     * @property {String} id bag唯一标识
     */
    var Bag = function Bag() {
        this.id = G_Id('b');
        this.$ = {};
    };
    G_Assign(Bag[G_PROTOTYPE], {
        /**
         * @lends Bag#
         */
        /**
         * 获取属性
         * @param {String} [key] 要获取数据的key
         * @param {Object} [dValue] 当根据key取到的值为falsy时，使用默认值替代，防止代码出错
         * @return {Object}
         * @example
         * new Serice().one({
         *     name:'Test'
         * },function(error,bag){
         *     let obj=bag.get();//获取所有数据
         *
         *     let list=bag.get('list',[]);//获取list数据，如果不存在list则使用空数组
         *
         *     let count=bag.get('data.info.count',0);//获取data下面info下count的值，您无须关心data下是否有info属性
         *     console.log(list);
         * });
         */
        get: function get(key, dValue, udfd) {
            var me = this;
            //let alen = arguments.length;
            /*
                目前只处理了key中不包含.的情况，如果key中包含.则下面的简单的通过split('.')的方案就不行了，需要改为：
                   let reg=/[^\[\]]+(?=\])|[^.\[\]]+/g;
                let a=['a.b.c','a[b.c].d','a[0][2].e','a[b.c.d][eg].a.b.c','[e.g.d]','a.b[c.d.fff]'];
                   for(let i=0,one;i<a.length;i++){
                  one=a[i];
                  console.log(one.match(reg))
                }
                   但考虑到key中有.的情况非常少，则优先使用性能较高的方案
                   或者key本身就是数组
             */
            var hasDValue = dValue != udfd;
            var attrs = me.$;
            if (key) {
                var tks = G_IsArray(key) ? key.slice() : (key + G_EMPTY).split('.'),
                    tk = void 0;
                while ((tk = tks.shift()) && attrs) {
                    attrs = attrs[tk];
                }
                if (tk) {
                    attrs = udfd;
                }
            }
            var type;
            if (hasDValue && (type = G_Type(dValue)) != G_Type(attrs)) {
                if (DEBUG) {
                    console.warn('type neq:' + key + ' is not a(n) ' + type);
                }
                attrs = dValue;
            }
            if (DEBUG && me['$b'] && me['$b'].k) {
                attrs = Safeguard(attrs);
            }
            return attrs;
        },
        /**
         * 设置属性
         * @param {String|Object} key 属性对象或属性key
         * @param {Object} [val] 属性值
         */
        set: function set(key, val) {
            if (!G_IsObject(key)) {
                key = (_a = {}, _a[key] = val, _a);
            }
            G_Assign(this.$, key);
            var _a;
        }
    });
    var Service_FetchFlags_ONE = 1;
    var Service_FetchFlags_ALL = 2;
    var Service_CacheDone = function Service_CacheDone(cacheKey, err, fns) {
        fns = this[cacheKey]; //取出当前的缓存信息
        if (fns) {
            delete this[cacheKey]; //先删除掉信息
            G_ToTry(fns, err, fns.e); //执行所有的回调
        }
    };
    var Service_Task = function Service_Task(done, host, service, total, flag, bagCache) {
        var doneArr = [];
        var errorArgs = 0;
        var currentDoneCount = 0;
        return function (idx, error) {
            var bag = this;
            var newBag;
            currentDoneCount++; //当前完成加1
            var mm = bag['$b'];
            var cacheKey = mm.k;
            doneArr[idx + 1] = bag; //完成的bag
            var dispach = {
                bag: bag,
                error: error
            },
                temp;
            if (error) {
                errorArgs = error;
                //errorArgs[idx] = err; //记录相应下标的错误信息
                //G_Assign(errorArgs, err);
                host.fire('fail', dispach);
                newBag = 1; //标记当前是一个新完成的bag,尽管出错了
            } else if (!bagCache.has(cacheKey)) {
                if (cacheKey) {
                    bagCache.set(cacheKey, bag); //缓存
                }
                //bag.set(data);
                mm.t = G_Now(); //记录当前完成的时间
                temp = mm.a;
                if (temp) {
                    G_ToTry(temp, bag, bag);
                }
                temp = mm.x;
                if (temp) {
                    host.clear(temp);
                }
                host.fire('done', dispach);
                newBag = 1;
            }
            if (!service['$d']) {
                var finish = currentDoneCount == total;
                if (finish) {
                    service['$e'] = 0;
                    if (flag == Service_FetchFlags_ALL) {
                        doneArr[0] = errorArgs;
                        G_ToTry(done, doneArr, service);
                    }
                }
                if (flag == Service_FetchFlags_ONE) {
                    G_ToTry(done, [error || G_NULL, bag, finish, idx], service);
                }
            }
            if (newBag) {
                host.fire('end', dispach);
            }
        };
    };
    /**
     * 获取attrs，该用缓存的用缓存，该发起请求的请求
     * @private
     * @param {Object|Array} attrs 获取attrs时的描述信息，如:{name:'Home',urlParams:{a:'12'},formParams:{b:2}}
     * @param {Function} done   完成时的回调
     * @param {Integer} flag   获取哪种类型的attrs
     * @param {Boolean} save 是否是保存的动作
     * @return {Service}
     */
    var Service_Send = function Service_Send(me, attrs, done, flag, save) {
        if (me['$d']) return me; //如果已销毁，返回
        if (me['$e']) {
            return me.enqueue(Service_Send.bind(me, me, attrs, done, flag, save));
        }
        me['$e'] = 1; //标志繁忙
        if (!G_IsArray(attrs)) {
            attrs = [attrs];
        }
        var host = me.constructor,
            requestCount = 0;
        //let bagCache = host['$c']; //存放bag的Cache对象
        var bagCacheKeys = host['$f']; //可缓存的bag key
        var remoteComplete = Service_Task(done, host, me, attrs.length, flag, host['$c']);
        for (var _i = 0, attrs_1 = attrs; _i < attrs_1.length; _i++) {
            var bag = attrs_1[_i];
            if (bag) {
                var bagInfo = host.get(bag, save); //获取bag信息
                var bagEntity = bagInfo.e;
                var cacheKey = bagEntity['$b'].k; //从实体上获取缓存key
                var complete = remoteComplete.bind(bagEntity, requestCount++); //包装当前的完成回调
                var cacheList = void 0;
                if (cacheKey && bagCacheKeys[cacheKey]) {
                    bagCacheKeys[cacheKey].push(complete); //放到队列中
                } else if (bagInfo.u) {
                    if (cacheKey) {
                        cacheList = [complete];
                        cacheList.e = bagEntity;
                        bagCacheKeys[cacheKey] = cacheList;
                        complete = Service_CacheDone.bind(bagCacheKeys, cacheKey); //替换回调，详见Service_CacheDone
                    }
                    host['$s'](bagEntity, complete);
                } else {
                    complete();
                }
            }
        }
        return me;
    };
    /**
     * 接口请求服务类
     * @name Service
     * @constructor
     * @beta
     * @module service
     * @borrows Event.on as on
     * @borrows Event.fire as fire
     * @borrows Event.off as off
     * @example
     * let S = Magix.Service.extend(function(bag,callback){
     *     $.ajax({
     *         url:bag.get('url'),
     *         success:function(data){
     *             bag.set('data',data)//设置数据
     *             callback();//通知内部完成数据请求
     *         },
     *         error:function(msg){
     *             callback(msg);//出错
     *         }
     *     })
     * });
     * // 添加接口
     * S.add({
     *     name:'test',
     *     url:'/test',
     *     cache:1000*60 //缓存一分钟
     * });
     * // 使用接口
     * let s=new S();
     * s.all('test',function(err,bag){
     *     console.log(err,bag);
     * });
     */
    var Service = function Service() {
        var me = this;
        me.id = G_Id('s');
        if (DEBUG) {
            me.id = G_Id('\x1es');
            setTimeout(function () {
                if (!me['$a']) {
                    console.warn('beware! You should use view.capture to connect Service and View');
                }
            }, 1000);
        }
        me['$g'] = [];
    };
    G_Assign(Service[G_PROTOTYPE], {
        /**
         * @lends Service#
         */
        /**
         * 获取attrs，所有请求完成回调done
         * @function
         * @param {Object|Array} attrs 获取attrs时的描述信息，如:{name:'Home',cacheKey:'key',urlParams:{a:'12'},formParams:{b:2}}
         * @param {Function} done   完成时的回调
         * @return {Service}
         * @example
         * new Service().all([{
         *     name:'Test1'
         * },{
         *     name:'Test2'
         * }],function(err,bag1,bag2){
         *     console.log(arguments);
         * });
         */
        all: function all(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ALL);
        },
        /**
         * 保存attrs，所有请求完成回调done
         * @function
         * @param {Object|Array} attrs 保存attrs时的描述信息，如:{name:'Home',urlParams:{a:'12'},formParams:{b:2}}
         * @param {Function} done   完成时的回调
         * @return {Service}
         * @example
         * // 同all,但与all不同的是，当指定接口缓存时，all方法会优先使用缓存，而save方法则每次都会发送请求到服务器，忽略掉缓存。同时save更语义化
         */
        save: function save(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ALL, 1);
        },
        /**
         * 获取attrs，其中任意一个成功均立即回调，回调会被调用多次。注：当使用promise时，不存在该方法。
         * @function
         * @param {Object|Array} attrs 获取attrs时的描述信息，如:{name:'Home',cacheKey:'key',urlParams:{a:'12'},formParams:{b:2}}
         * @param {Function} callback   完成时的回调
         * @beta
         * @return {Service}
         * @example
         *  //代码片断：
         * let s = new Service().one([
         *     {name:'M1'},
         *     {name:'M2'},
         *     {name:'M3'}
         * ],function(err,bag){//m1,m2,m3，谁快先调用谁，且被调用三次
         *     if(err){
         *         alert(err.msg);
         *     }else{
         *         alert(bag.get('name'));
         *     }
         * });
         */
        one: function one(attrs, done) {
            return Service_Send(this, attrs, done, Service_FetchFlags_ONE);
        },
        /**
         * 前一个all,one或save任务做完后的下一个任务
         * @param  {Function} callback 当前面的任务完成后调用该回调
         * @return {Service}
         * @beta
         * @example
         * let r = new Service().all([
         *     {name:'M1'},
         *     {name:'M2'}
         * ],function(err,bag1,bag2){
         *     r.dequeue(['args1','args2']);
         * });
         * r.enqueue(function(args1,args2){
         *     alert([args1,args2]);
         * });
         */
        enqueue: function enqueue(callback) {
            var me = this;
            if (!me['$d']) {
                me['$g'].push(callback);
                me.dequeue(me['$h']);
            }
            return me;
        },
        /**
         * 做下一个任务
         * @param {Array} preArgs 传递的参数
         * @beta
         * @example
         * let r = new Service();
         * r.all('Name',function(e,bag){
         *     r.dequeue([e,bag]);
         * });
         * r.enqueue(function(e,result){//result为m
         *     r.all('NextName',function(e,bag){
         *         r.dequeue([e,bag]);
         *     });
         * });
         *
         * r.enqueue(function(e,bag){//m===queue m;
         *     console.log(e,bag);
         *     r.dequeue([e,bag]);
         * });
         *
         * r.enqueue(function(e,bag){
         *     console.log(e,bag);
         * });
         *
         * //当出错时，e为出错的信息
         */
        dequeue: function dequeue() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                a[_i] = arguments[_i];
            }
            var me = this,
                one;
            if (!me['$e'] && !me['$d']) {
                me['$e'] = 1;
                Timeout(function () {
                    me['$e'] = 0;
                    if (!me['$d']) {
                        one = me['$g'].shift();
                        if (one) {
                            G_ToTry(one, me['$h'] = a);
                        }
                    }
                }, 0);
            }
        },
        /**
         * 销毁当前请求，不可以继续发起新请求，而且不再调用相应的回调
         */
        destroy: function destroy(me) {
            me = this;
            me['$d'] = 1; //只需要标记及清理即可，其它的不需要
            me['$g'] = 0;
        }
        /**
         * 当Service发送请求前触发
         * @name Service.begin
         * @event
         * @param {Object} e 事件对象
         * @param {Bag} e.bag bag对象
         * @example
         * let S = Magix.Service.extend({
         *     //codes
         * });
         *
         * S.on('begin',function(e){//监听所有的开始请求事件
         *     console.log(e);
         * });
         */
        /**
         * 当Service结束请求时触发(成功或失败均触发)
         * @name Service.end
         * @event
         * @param {Object} e 事件对象
         * @param {Bag} e.bag bag对象
         * @param {String} e.error 当请求出错时，error是出错的消息
         */
        /**
         * 当Service发送请求失败时触发
         * @name Service.fail
         * @event
         * @param {Object} e 事件对象
         * @param {Bag} e.bag bag对象
         * @param {String} e.error 当请求出错时，error是出错的消息
         */
        /**
         * 当Service发送请求成功时触发
         * @name Service.done
         * @event
         * @param {Object} e 事件对象
         * @param {Bag} e.bag bag对象
         */
    });
    var Manager_DefaultCacheKey = function Manager_DefaultCacheKey(meta, attrs, arr) {
        arr = [JSONStringify(attrs), JSONStringify(meta)];
        return arr.join(G_SPLITER);
    };
    var Manager_ClearCache = function Manager_ClearCache(v, ns, cache, mm) {
        mm = v && v['$b'];
        if (mm && ns[mm.n]) {
            cache.del(mm.k);
        }
    };
    var Service_Manager = G_Assign({
        /**
         * @lends Service
         */
        /**
         * 添加元信息
         * @param {Object} attrs 信息属性
         */
        add: function add(attrs) {
            var me = this;
            var metas = me['$b'],
                bag;
            if (!G_IsArray(attrs)) {
                attrs = [attrs];
            }
            for (var _i = 0, attrs_2 = attrs; _i < attrs_2.length; _i++) {
                bag = attrs_2[_i];
                if (bag) {
                    var name = bag.name,
                        cache = bag.cache;
                    bag.cache = cache | 0;
                    metas[name] = bag;
                }
            }
        },
        /**
         * 创建bag对象
         * @param {Object} attrs           bag描述信息对象
         * @return {Bag}
         */
        create: function create(attrs) {
            var me = this;
            var meta = me.meta(attrs);
            var cache = attrs.cache | 0 || meta.cache;
            var entity = new Bag();
            entity.set(meta);
            entity['$b'] = {
                n: meta.name,
                a: meta.after,
                x: meta.cleans,
                k: cache && Manager_DefaultCacheKey(meta, attrs)
            };
            if (G_IsObject(attrs)) {
                entity.set(attrs);
            }
            var before = meta.before;
            if (before) {
                G_ToTry(before, entity, entity);
            }
            me.fire('begin', {
                bag: entity
            });
            return entity;
        },
        /**
         * 获取bag注册时的元信息
         * @param  {String|Object} attrs 名称
         * @return {Object}
         * @example
         * let S = Magix.Service.extend({
         *     //extend code
         * });
         *
         * S.add({
         *     name:'test',
         *     url:'/test'
         * });
         *
         * console.log(S.meta('test'),S.meta({name:'test'}));//这2种方式都可以拿到add时的对象信息
         */
        meta: function meta(attrs) {
            var me = this;
            var metas = me['$b'];
            var name = attrs.name || attrs;
            var ma = metas[name];
            return ma || attrs;
        },
        /**
         * 获取bag对象，优先从缓存中获取
         * @param {Object} attrs           bag描述信息对象
         * @param {Boolean} createNew 是否是创建新的Bag对象，如果否，则尝试从缓存中获取
         * @return {Object}
         */
        get: function get(attrs, createNew) {
            var me = this;
            var e, u;
            if (!createNew) {
                e = me.cached(attrs);
            }
            if (!e) {
                e = me.create(attrs);
                u = 1;
            }
            return {
                e: e,
                u: u
            };
        },
        /**
         * 根据name清除缓存的attrs
         * @param  {String|Array} names 字符串或数组
         * @example
         * let S = Magix.Service.extend({
         *     //extend code
         * });
         *
         * S.add({
         *     name:'test',
         *     url:'/test',
         *     cache:1000*60
         * });
         *
         * let s = new Service();
         * s.all('test');
         * s.all('test');//from cache
         * S.clear('test');
         * s.all('test');//fetch from server
         */
        clear: function clear(names) {
            this['$c'].each(Manager_ClearCache, G_ToMap((names + G_EMPTY).split(G_COMMA)));
        },
        /**
         * 从缓存中获取bag对象
         * @param  {Object} attrs
         * @return {Bag}
         * @example
         * let S = Magix.Service.extend({
         *     //extend code
         * });
         *
         * S.add({
         *     name:'test',
         *     url:'/test',
         *     cache:1000*60
         * });
         *
         * S.cached('test');//尝试从缓存中获取bag对象
         */
        cached: function cached(attrs) {
            var me = this;
            var bagCache = me['$c'];
            var entity;
            var cacheKey;
            var meta = me.meta(attrs);
            var cache = attrs.cache | 0 || meta.cache;
            if (cache) {
                cacheKey = Manager_DefaultCacheKey(meta, attrs);
            }
            if (cacheKey) {
                var requestCacheKeys = me['$f'];
                var info = requestCacheKeys[cacheKey];
                if (info) {
                    entity = info.e;
                } else {
                    entity = bagCache.get(cacheKey);
                    if (entity && G_Now() - entity['$b'].t > cache) {
                        bagCache.del(cacheKey);
                        entity = 0;
                    }
                }
            }
            return entity;
        } }, MEvent);
    /**
     * 继承
     * @lends Service
     * @param  {Function} sync 接口服务同步数据方法
     * @param  {Integer} [cacheMax] 最大缓存数，默认20
     * @param  {Integer} [cacheBuffer] 缓存缓冲区大小，默认5
     * @return {Function} 返回新的接口类
     * @example
     * let S = Magix.Service.extend(function(bag,callback){
     *     $.ajax({
     *         url:bag.get('url'),
     *         success:function(data){
     *             bag.set('data',data);
     *             callback();
     *         },
     *         error:function(msg){
     *             callback({message:msg});
     *         }
     *     })
     * },10,2);//最大缓存10个接口数据，缓冲区2个
     */
    Service.extend = function (sync, cacheMax, cacheBuffer) {
        var NService = function NService() {
            Service.call(this);
        };
        NService['$s'] = sync;
        NService['$c'] = new G_Cache(cacheMax, cacheBuffer);
        NService['$f'] = {};
        NService['$b'] = {};
        return G_Extend(NService, Service, G_NULL, Service_Manager);
    };
    Magix.Service = Service;
    G_Assign(G_NOOP[G_PROTOTYPE], MEvent);
    G_NOOP.extend = function extend(props, statics) {
        var me = this;
        var ctor = props && props.ctor;
        var X = function X() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                a[_i] = arguments[_i];
            }
            var t = this;
            me.apply(t, a);
            if (ctor) ctor.apply(t, a);
        };
        X.extend = extend;
        return G_Extend(X, me, props, statics);
    };
    /**
     * 组件基类
     * @name Base
     * @constructor
     * @borrows Event.fire as #fire
     * @borrows Event.on as #on
     * @borrows Event.off as #off
     * @beta
     * @module base
     * @example
     * let T = Magix.Base.extend({
     *     hi:function(){
     *         this.fire('hi');
     *     }
     * });
     * let t = new T();
     * t.onhi=function(e){
     *     console.log(e);
     * };
     * t.hi();
     */
    Magix.Base = G_NOOP;
    coreDefaultView = View.extend();
    /**
     * 往全局views里面添加view
     * @param {String} [name] view别名
     * @param {Promise} [promise] 对应的promise对象
     */
    Magix.addView = function (name, promiseObj) {
        var cfgViews = Magix_Cfg.views = Magix_Cfg.views || {};
        cfgViews[name] = promiseObj;
    };
    return Magix;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _magix = __webpack_require__(0);

var Magix = _interopRequireWildcard(_magix);

var _test = __webpack_require__(3);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Magix.addView('src/views/default', __webpack_require__(4));

Magix.config({
  rootId: 'J_wrap', // 容器id
  defaultView: 'src/views/default',
  defaultPath: '/home',
  routes: {
    '/home': 'src/views/default'
  }
});
// 开始初始化
Magix.boot();

// class HelloMessage extends Magix.View {
//   render() {
//     return a
//   }
// }

// ReactDOM.render(
//   <HelloMessage />,
//   mountNode
// )

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _magix = __webpack_require__(0);

var Magix = _interopRequireWildcard(_magix);

var _test = __webpack_require__(5);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var html = '<span>asdadasd</span>';

module.exports = Magix.View.extend({
  tmpl: function tmpl(data) {
    var a1 = '"';
    if (data.key == 1) {
      return this.$vcr("div", { "data-id": "2222", "mx-focus": "abc3()" }, this.$vcr(_test2.default, { "view-x": "2222", "view-m": { a: 1111 }, "class": "xxx" }), this.$vcr("span", { "class": "mmmm", "mx-focus": "abc2()", "mx-click": "abc({a:111,b:'222'})", id: "2222" }, "1111"), this.$vcr("span", { "mx-click": this.testcb.bind(this, { a: 222 }), test: "2" }, "2222"));
      // return `
      //     <div data-id="2222">
      //       <span mx-click="abc()">1111</span>
      //       <span test="2">2222</span>
      //     </div>
      // `

      // return Magix.$vcr('',{},[
      //   Magix.$vcr('div',{
      //     "data-id": "2222"
      //   },'222ddddddddddd')
      // ])

      // return {
      //   "$nc": [
      //     {
      //       "$nck": "",
      //       "$nt": "div",
      //       "$na": [
      //         {
      //           "$nak": "data-id",
      //           "$nav": "2222"
      //         }
      //       ],
      //       "$nam": {
      //         "data-id": "2222"
      //       },
      //       "$nc": [
      //         {
      //           "$nt": "#text",
      //           "$nh": "222ddddddddddd"
      //         }
      //       ],
      //       // "$csp": 27,
      //       // "$tsp": 7,
      //       // "$nh": "222ddddddddddd"
      //     }
      //   ],
      //   "$na": []
      //   // "$nh": "<div data-id=\"2222\">222ddddddddddd</div>"
      // }
    } else {

      return this.$vcr("div", { "data-id": "2222" }, "eeeeee");

      // return Magix.$vcr('',{},[
      //   Magix.$vcr('div',{
      //     "data-id": "11111"
      //   },'eeeee')
      // ])

      // return {
      //   "$nc": [
      //     {
      //       "$nck": "",
      //       "$nt": "div",
      //       "$na": [
      //         {
      //           "$nak": "data-id",
      //           "$nav": "2222"
      //         }
      //       ],
      //       "$nam": {
      //         "data-id": "2222"
      //       },
      //       "$nc": [
      //         {
      //           "$nt": "#text",
      //           "$nh": "eeeee"
      //         }
      //       ],
      //       // "$csp": 27,
      //       // "$tsp": 7,
      //       // "$nh": "eeeee"
      //     }
      //   ],
      //   "$na": []
      //   // "$nh": "<div data-id=\"2222\">eeeee</div>"
      // }
    }
  },
  '__<click,mousedown,xx,cc>': function __ClickMousedownXxCc() {},

  ctor: function ctor(opt) {},
  render: function render() {
    var _this = this;

    console.log(this.updater.$d);
    this.updater.digest();

    setTimeout(function () {
      _this.updater.set({
        "key": 1
      }).digest();
    }, 1000);
    // this.setHTML(this.id,this.tmpl)
  },
  testcb: function testcb(data, e) {
    console.log(data);
  }
  // 'abc<click>': function(e){
  //   alert(1111)
  //   this.updater.set({
  //     "key":2
  //   }).digest()
  // },
  // 'abc8<click>': function(e){
  // },
  // '$div[data-menu="true"]': function(e){

  // }
}, {
  "__<focus,click>": null
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _magix = __webpack_require__(0);

var Magix = _interopRequireWildcard(_magix);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = Magix.View.extend({
  tmpl: function tmpl(data) {
    return 'test';
  },
  ctor: function ctor(opt) {
    console.log(opt);
  },
  render: function render() {
    this.updater.digest();
  }
});

/***/ })
/******/ ]);