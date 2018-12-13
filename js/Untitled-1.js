/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function (E, B) {
    function ka(a, b, d) {
        if (d === B && a.nodeType === 1) {
            d = a.getAttribute("data-" + b);
            if (typeof d === "string") {
                try {
                    d = d === "true" ? true : d === "false" ? false : d === "null" ? null : !c.isNaN(d) ? parseFloat(d) : Ja.test(d) ? c.parseJSON(d) : d
                } catch (e) {}
                c.data(a, b, d)
            } else d = B
        }
        return d
    }

    function U() {
        return false
    }

    function ca() {
        return true
    }

    function la(a, b, d) {
        d[0].type = a;
        return c.event.handle.apply(b, d)
    }

    function Ka(a) {
        var b, d, e, f, h, l, k, o, x, r, A, C = [];
        f = [];
        h = c.data(this, this.nodeType ? "events" : "__events__");
        if (typeof h === "function") h =
            h.events;
        if (!(a.liveFired === this || !h || !h.live || a.button && a.type === "click")) {
            if (a.namespace) A = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
            a.liveFired = this;
            var J = h.live.slice(0);
            for (k = 0; k < J.length; k++) {
                h = J[k];
                h.origType.replace(X, "") === a.type ? f.push(h.selector) : J.splice(k--, 1)
            }
            f = c(a.target).closest(f, a.currentTarget);
            o = 0;
            for (x = f.length; o < x; o++) {
                r = f[o];
                for (k = 0; k < J.length; k++) {
                    h = J[k];
                    if (r.selector === h.selector && (!A || A.test(h.namespace))) {
                        l = r.elem;
                        e = null;
                        if (h.preType === "mouseenter" ||
                            h.preType === "mouseleave") {
                            a.type = h.preType;
                            e = c(a.relatedTarget).closest(h.selector)[0]
                        }
                        if (!e || e !== l) C.push({
                            elem: l,
                            handleObj: h,
                            level: r.level
                        })
                    }
                }
            }
            o = 0;
            for (x = C.length; o < x; o++) {
                f = C[o];
                if (d && f.level > d) break;
                a.currentTarget = f.elem;
                a.data = f.handleObj.data;
                a.handleObj = f.handleObj;
                A = f.handleObj.origHandler.apply(f.elem, arguments);
                if (A === false || a.isPropagationStopped()) {
                    d = f.level;
                    if (A === false) b = false;
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }

    function Y(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(La,
            "`").replace(Ma, "&")
    }

    function ma(a, b, d) {
        if (c.isFunction(b)) return c.grep(a, function (f, h) {
            return !!b.call(f, h, f) === d
        });
        else if (b.nodeType) return c.grep(a, function (f) {
            return f === b === d
        });
        else if (typeof b === "string") {
            var e = c.grep(a, function (f) {
                return f.nodeType === 1
            });
            if (Na.test(b)) return c.filter(b, e, !d);
            else b = c.filter(b, e)
        }
        return c.grep(a, function (f) {
            return c.inArray(f, b) >= 0 === d
        })
    }

    function na(a, b) {
        var d = 0;
        b.each(function () {
            if (this.nodeName === (a[d] && a[d].nodeName)) {
                var e = c.data(a[d++]),
                    f = c.data(this,
                        e);
                if (e = e && e.events) {
                    delete f.handle;
                    f.events = {};
                    for (var h in e)
                        for (var l in e[h]) c.event.add(this, h, e[h][l], e[h][l].data)
                }
            }
        })
    }

    function Oa(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: false,
            dataType: "script"
        }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b)
    }

    function oa(a, b, d) {
        var e = b === "width" ? a.offsetWidth : a.offsetHeight;
        if (d === "border") return e;
        c.each(b === "width" ? Pa : Qa, function () {
            d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
            if (d === "margin") e += parseFloat(c.css(a,
                "margin" + this)) || 0;
            else e -= parseFloat(c.css(a, "border" + this + "Width")) || 0
        });
        return e
    }

    function da(a, b, d, e) {
        if (c.isArray(b) && b.length) c.each(b, function (f, h) {
            d || Ra.test(a) ? e(a, h) : da(a + "[" + (typeof h === "object" || c.isArray(h) ? f : "") + "]", h, d, e)
        });
        else if (!d && b != null && typeof b === "object") c.isEmptyObject(b) ? e(a, "") : c.each(b, function (f, h) {
            da(a + "[" + f + "]", h, d, e)
        });
        else e(a, b)
    }

    function S(a, b) {
        var d = {};
        c.each(pa.concat.apply([], pa.slice(0, b)), function () {
            d[this] = a
        });
        return d
    }

    function qa(a) {
        if (!ea[a]) {
            var b = c("<" +
                    a + ">").appendTo("body"),
                d = b.css("display");
            b.remove();
            if (d === "none" || d === "") d = "block";
            ea[a] = d
        }
        return ea[a]
    }

    function fa(a) {
        return c.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }
    var t = E.document,
        c = function () {
            function a() {
                if (!b.isReady) {
                    try {
                        t.documentElement.doScroll("left")
                    } catch (j) {
                        setTimeout(a, 1);
                        return
                    }
                    b.ready()
                }
            }
            var b = function (j, s) {
                    return new b.fn.init(j, s)
                },
                d = E.jQuery,
                e = E.$,
                f, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                l = /\S/,
                k = /^\s+/,
                o = /\s+$/,
                x = /\W/,
                r = /\d/,
                A = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                C = /^[\],:{}\s]*$/,
                J = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                w = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                I = /(?:^|:|,)(?:\s*\[)+/g,
                L = /(webkit)[ \/]([\w.]+)/,
                g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                i = /(msie) ([\w.]+)/,
                n = /(mozilla)(?:.*? rv:([\w.]+))?/,
                m = navigator.userAgent,
                p = false,
                q = [],
                u, y = Object.prototype.toString,
                F = Object.prototype.hasOwnProperty,
                M = Array.prototype.push,
                N = Array.prototype.slice,
                O = String.prototype.trim,
                D = Array.prototype.indexOf,
                R = {};
            b.fn = b.prototype = {
                init: function (j,
                    s) {
                    var v, z, H;
                    if (!j) return this;
                    if (j.nodeType) {
                        this.context = this[0] = j;
                        this.length = 1;
                        return this
                    }
                    if (j === "body" && !s && t.body) {
                        this.context = t;
                        this[0] = t.body;
                        this.selector = "body";
                        this.length = 1;
                        return this
                    }
                    if (typeof j === "string")
                        if ((v = h.exec(j)) && (v[1] || !s))
                            if (v[1]) {
                                H = s ? s.ownerDocument || s : t;
                                if (z = A.exec(j))
                                    if (b.isPlainObject(s)) {
                                        j = [t.createElement(z[1])];
                                        b.fn.attr.call(j, s, true)
                                    } else j = [H.createElement(z[1])];
                                else {
                                    z = b.buildFragment([v[1]], [H]);
                                    j = (z.cacheable ? z.fragment.cloneNode(true) : z.fragment).childNodes
                                }
                                return b.merge(this,
                                    j)
                            } else {
                                if ((z = t.getElementById(v[2])) && z.parentNode) {
                                    if (z.id !== v[2]) return f.find(j);
                                    this.length = 1;
                                    this[0] = z
                                }
                                this.context = t;
                                this.selector = j;
                                return this
                            }
                    else if (!s && !x.test(j)) {
                        this.selector = j;
                        this.context = t;
                        j = t.getElementsByTagName(j);
                        return b.merge(this, j)
                    } else return !s || s.jquery ? (s || f).find(j) : b(s).find(j);
                    else if (b.isFunction(j)) return f.ready(j);
                    if (j.selector !== B) {
                        this.selector = j.selector;
                        this.context = j.context
                    }
                    return b.makeArray(j, this)
                },
                selector: "",
                jquery: "1.4.4",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return N.call(this, 0)
                },
                get: function (j) {
                    return j == null ? this.toArray() : j < 0 ? this.slice(j)[0] : this[j]
                },
                pushStack: function (j, s, v) {
                    var z = b();
                    b.isArray(j) ? M.apply(z, j) : b.merge(z, j);
                    z.prevObject = this;
                    z.context = this.context;
                    if (s === "find") z.selector = this.selector + (this.selector ? " " : "") + v;
                    else if (s) z.selector = this.selector + "." + s + "(" + v + ")";
                    return z
                },
                each: function (j, s) {
                    return b.each(this, j, s)
                },
                ready: function (j) {
                    b.bindReady();
                    if (b.isReady) j.call(t, b);
                    else q && q.push(j);
                    return this
                },
                eq: function (j) {
                    return j ===
                        -1 ? this.slice(j) : this.slice(j, +j + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
                },
                map: function (j) {
                    return this.pushStack(b.map(this, function (s, v) {
                        return j.call(s, v, s)
                    }))
                },
                end: function () {
                    return this.prevObject || b(null)
                },
                push: M,
                sort: [].sort,
                splice: [].splice
            };
            b.fn.init.prototype = b.fn;
            b.extend = b.fn.extend = function () {
                var j, s, v, z, H, G = arguments[0] || {},
                    K = 1,
                    Q = arguments.length,
                    ga = false;
                if (typeof G === "boolean") {
                    ga = G;
                    G = arguments[1] || {};
                    K = 2
                }
                if (typeof G !== "object" && !b.isFunction(G)) G = {};
                if (Q === K) {
                    G = this;
                    --K
                }
                for (; K < Q; K++)
                    if ((j = arguments[K]) != null)
                        for (s in j) {
                            v = G[s];
                            z = j[s];
                            if (G !== z)
                                if (ga && z && (b.isPlainObject(z) || (H = b.isArray(z)))) {
                                    if (H) {
                                        H = false;
                                        v = v && b.isArray(v) ? v : []
                                    } else v = v && b.isPlainObject(v) ? v : {};
                                    G[s] = b.extend(ga, v, z)
                                } else if (z !== B) G[s] = z
                        }
                return G
            };
            b.extend({
                noConflict: function (j) {
                    E.$ = e;
                    if (j) E.jQuery = d;
                    return b
                },
                isReady: false,
                readyWait: 1,
                ready: function (j) {
                    j === true && b.readyWait--;
                    if (!b.readyWait || j !== true && !b.isReady) {
                        if (!t.body) return setTimeout(b.ready, 1);
                        b.isReady = true;
                        if (!(j !== true && --b.readyWait > 0))
                            if (q) {
                                var s = 0,
                                    v = q;
                                for (q = null; j = v[s++];) j.call(t, b);
                                b.fn.trigger && b(t).trigger("ready").unbind("ready")
                            }
                    }
                },
                bindReady: function () {
                    if (!p) {
                        p = true;
                        if (t.readyState === "complete") return setTimeout(b.ready, 1);
                        if (t.addEventListener) {
                            t.addEventListener("DOMContentLoaded", u, false);
                            E.addEventListener("load", b.ready, false)
                        } else if (t.attachEvent) {
                            t.attachEvent("onreadystatechange", u);
                            E.attachEvent("onload",
                                b.ready);
                            var j = false;
                            try {
                                j = E.frameElement == null
                            } catch (s) {}
                            t.documentElement.doScroll && j && a()
                        }
                    }
                },
                isFunction: function (j) {
                    return b.type(j) === "function"
                },
                isArray: Array.isArray || function (j) {
                    return b.type(j) === "array"
                },
                isWindow: function (j) {
                    return j && typeof j === "object" && "setInterval" in j
                },
                isNaN: function (j) {
                    return j == null || !r.test(j) || isNaN(j)
                },
                type: function (j) {
                    return j == null ? String(j) : R[y.call(j)] || "object"
                },
                isPlainObject: function (j) {
                    if (!j || b.type(j) !== "object" || j.nodeType || b.isWindow(j)) return false;
                    if (j.constructor &&
                        !F.call(j, "constructor") && !F.call(j.constructor.prototype, "isPrototypeOf")) return false;
                    for (var s in j);
                    return s === B || F.call(j, s)
                },
                isEmptyObject: function (j) {
                    for (var s in j) return false;
                    return true
                },
                error: function (j) {
                    throw j;
                },
                parseJSON: function (j) {
                    if (typeof j !== "string" || !j) return null;
                    j = b.trim(j);
                    if (C.test(j.replace(J, "@").replace(w, "]").replace(I, ""))) return E.JSON && E.JSON.parse ? E.JSON.parse(j) : (new Function("return " + j))();
                    else b.error("Invalid JSON: " + j)
                },
                noop: function () {},
                globalEval: function (j) {
                    if (j &&
                        l.test(j)) {
                        var s = t.getElementsByTagName("head")[0] || t.documentElement,
                            v = t.createElement("script");
                        v.type = "text/javascript";
                        if (b.support.scriptEval) v.appendChild(t.createTextNode(j));
                        else v.text = j;
                        s.insertBefore(v, s.firstChild);
                        s.removeChild(v)
                    }
                },
                nodeName: function (j, s) {
                    return j.nodeName && j.nodeName.toUpperCase() === s.toUpperCase()
                },
                each: function (j, s, v) {
                    var z, H = 0,
                        G = j.length,
                        K = G === B || b.isFunction(j);
                    if (v)
                        if (K)
                            for (z in j) {
                                if (s.apply(j[z], v) === false) break
                            } else
                                for (; H < G;) {
                                    if (s.apply(j[H++], v) === false) break
                                } else if (K)
                                    for (z in j) {
                                        if (s.call(j[z],
                                                z, j[z]) === false) break
                                    } else
                                        for (v = j[0]; H < G && s.call(v, H, v) !== false; v = j[++H]);
                    return j
                },
                trim: O ? function (j) {
                    return j == null ? "" : O.call(j)
                } : function (j) {
                    return j == null ? "" : j.toString().replace(k, "").replace(o, "")
                },
                makeArray: function (j, s) {
                    var v = s || [];
                    if (j != null) {
                        var z = b.type(j);
                        j.length == null || z === "string" || z === "function" || z === "regexp" || b.isWindow(j) ? M.call(v, j) : b.merge(v, j)
                    }
                    return v
                },
                inArray: function (j, s) {
                    if (s.indexOf) return s.indexOf(j);
                    for (var v = 0, z = s.length; v < z; v++)
                        if (s[v] === j) return v;
                    return -1
                },
                merge: function (j,
                    s) {
                    var v = j.length,
                        z = 0;
                    if (typeof s.length === "number")
                        for (var H = s.length; z < H; z++) j[v++] = s[z];
                    else
                        for (; s[z] !== B;) j[v++] = s[z++];
                    j.length = v;
                    return j
                },
                grep: function (j, s, v) {
                    var z = [],
                        H;
                    v = !!v;
                    for (var G = 0, K = j.length; G < K; G++) {
                        H = !!s(j[G], G);
                        v !== H && z.push(j[G])
                    }
                    return z
                },
                map: function (j, s, v) {
                    for (var z = [], H, G = 0, K = j.length; G < K; G++) {
                        H = s(j[G], G, v);
                        if (H != null) z[z.length] = H
                    }
                    return z.concat.apply([], z)
                },
                guid: 1,
                proxy: function (j, s, v) {
                    if (arguments.length === 2)
                        if (typeof s === "string") {
                            v = j;
                            j = v[s];
                            s = B
                        } else if (s && !b.isFunction(s)) {
                        v =
                            s;
                        s = B
                    }
                    if (!s && j) s = function () {
                        return j.apply(v || this, arguments)
                    };
                    if (j) s.guid = j.guid = j.guid || s.guid || b.guid++;
                    return s
                },
                access: function (j, s, v, z, H, G) {
                    var K = j.length;
                    if (typeof s === "object") {
                        for (var Q in s) b.access(j, Q, s[Q], z, H, v);
                        return j
                    }
                    if (v !== B) {
                        z = !G && z && b.isFunction(v);
                        for (Q = 0; Q < K; Q++) H(j[Q], s, z ? v.call(j[Q], Q, H(j[Q], s)) : v, G);
                        return j
                    }
                    return K ? H(j[0], s) : B
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (j) {
                    j = j.toLowerCase();
                    j = L.exec(j) || g.exec(j) || i.exec(j) || j.indexOf("compatible") < 0 && n.exec(j) || [];
                    return {
                        browser: j[1] || "",
                        version: j[2] || "0"
                    }
                },
                browser: {}
            });
            b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (j, s) {
                R["[object " + s + "]"] = s.toLowerCase()
            });
            m = b.uaMatch(m);
            if (m.browser) {
                b.browser[m.browser] = true;
                b.browser.version = m.version
            }
            if (b.browser.webkit) b.browser.safari = true;
            if (D) b.inArray = function (j, s) {
                return D.call(s, j)
            };
            if (!/\s/.test("\u00a0")) {
                k = /^[\s\xA0]+/;
                o = /[\s\xA0]+$/
            }
            f = b(t);
            if (t.addEventListener) u = function () {
                t.removeEventListener("DOMContentLoaded", u,
                    false);
                b.ready()
            };
            else if (t.attachEvent) u = function () {
                if (t.readyState === "complete") {
                    t.detachEvent("onreadystatechange", u);
                    b.ready()
                }
            };
            return E.jQuery = E.$ = b
        }();
    (function () {
        c.support = {};
        var a = t.documentElement,
            b = t.createElement("script"),
            d = t.createElement("div"),
            e = "script" + c.now();
        d.style.display = "none";
        d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var f = d.getElementsByTagName("*"),
            h = d.getElementsByTagName("a")[0],
            l = t.createElement("select"),
            k = l.appendChild(t.createElement("option"));
        if (!(!f || !f.length || !h)) {
            c.support = {
                leadingWhitespace: d.firstChild.nodeType === 3,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /red/.test(h.getAttribute("style")),
                hrefNormalized: h.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(h.style.opacity),
                cssFloat: !!h.style.cssFloat,
                checkOn: d.getElementsByTagName("input")[0].value === "on",
                optSelected: k.selected,
                deleteExpando: true,
                optDisabled: false,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableHiddenOffsets: true
            };
            l.disabled = true;
            c.support.optDisabled = !k.disabled;
            b.type = "text/javascript";
            try {
                b.appendChild(t.createTextNode("window." + e + "=1;"))
            } catch (o) {}
            a.insertBefore(b, a.firstChild);
            if (E[e]) {
                c.support.scriptEval = true;
                delete E[e]
            }
            try {
                delete b.test
            } catch (x) {
                c.support.deleteExpando = false
            }
            a.removeChild(b);
            if (d.attachEvent && d.fireEvent) {
                d.attachEvent("onclick", function r() {
                    c.support.noCloneEvent =
                        false;
                    d.detachEvent("onclick", r)
                });
                d.cloneNode(true).fireEvent("onclick")
            }
            d = t.createElement("div");
            d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = t.createDocumentFragment();
            a.appendChild(d.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function () {
                var r = t.createElement("div");
                r.style.width = r.style.paddingLeft = "1px";
                t.body.appendChild(r);
                c.boxModel = c.support.boxModel = r.offsetWidth === 2;
                if ("zoom" in r.style) {
                    r.style.display = "inline";
                    r.style.zoom =
                        1;
                    c.support.inlineBlockNeedsLayout = r.offsetWidth === 2;
                    r.style.display = "";
                    r.innerHTML = "<div style='width:4px;'></div>";
                    c.support.shrinkWrapBlocks = r.offsetWidth !== 2
                }
                r.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var A = r.getElementsByTagName("td");
                c.support.reliableHiddenOffsets = A[0].offsetHeight === 0;
                A[0].style.display = "";
                A[1].style.display = "none";
                c.support.reliableHiddenOffsets = c.support.reliableHiddenOffsets && A[0].offsetHeight === 0;
                r.innerHTML = "";
                t.body.removeChild(r).style.display =
                    "none"
            });
            a = function (r) {
                var A = t.createElement("div");
                r = "on" + r;
                var C = r in A;
                if (!C) {
                    A.setAttribute(r, "return;");
                    C = typeof A[r] === "function"
                }
                return C
            };
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = d = f = h = null
        }
    })();
    var ra = {},
        Ja = /^(?:\{.*\}|\[.*\])$/;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + c.now(),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        data: function (a, b, d) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var e = a.nodeType,
                    f = e ? a[c.expando] : null,
                    h =
                    c.cache;
                if (!(e && !f && typeof b === "string" && d === B)) {
                    if (e) f || (a[c.expando] = f = ++c.uuid);
                    else h = a;
                    if (typeof b === "object")
                        if (e) h[f] = c.extend(h[f], b);
                        else c.extend(h, b);
                    else if (e && !h[f]) h[f] = {};
                    a = e ? h[f] : h;
                    if (d !== B) a[b] = d;
                    return typeof b === "string" ? a[b] : a
                }
            }
        },
        removeData: function (a, b) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var d = a.nodeType,
                    e = d ? a[c.expando] : a,
                    f = c.cache,
                    h = d ? f[e] : e;
                if (b) {
                    if (h) {
                        delete h[b];
                        d && c.isEmptyObject(h) && c.removeData(a)
                    }
                } else if (d && c.support.deleteExpando) delete a[c.expando];
                else if (a.removeAttribute) a.removeAttribute(c.expando);
                else if (d) delete f[e];
                else
                    for (var l in a) delete a[l]
            }
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === true || a.getAttribute("classid") !== b)
            }
            return true
        }
    });
    c.fn.extend({
        data: function (a, b) {
            var d = null;
            if (typeof a === "undefined") {
                if (this.length) {
                    var e = this[0].attributes,
                        f;
                    d = c.data(this[0]);
                    for (var h = 0, l = e.length; h < l; h++) {
                        f = e[h].name;
                        if (f.indexOf("data-") === 0) {
                            f = f.substr(5);
                            ka(this[0], f, d[f])
                        }
                    }
                }
                return d
            } else if (typeof a === "object") return this.each(function () {
                c.data(this,
                    a)
            });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            if (b === B) {
                d = this.triggerHandler("getData" + k[1] + "!", [k[0]]);
                if (d === B && this.length) {
                    d = c.data(this[0], a);
                    d = ka(this[0], a, d)
                }
                return d === B && k[1] ? this.data(k[0]) : d
            } else return this.each(function () {
                var o = c(this),
                    x = [k[0], b];
                o.triggerHandler("setData" + k[1] + "!", x);
                c.data(this, a, b);
                o.triggerHandler("changeData" + k[1] + "!", x)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function (a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e =
                    c.data(a, b);
                if (!d) return e || [];
                if (!e || c.isArray(d)) e = c.data(a, b, c.makeArray(d));
                else e.push(d);
                return e
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
                e = d.shift();
            if (e === "inprogress") e = d.shift();
            if (e) {
                b === "fx" && d.unshift("inprogress");
                e.call(a, function () {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function (a, b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === B) return c.queue(this[0], a);
            return this.each(function () {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                c.dequeue(this,
                    a)
            })
        },
        delay: function (a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function () {
                var d = this;
                setTimeout(function () {
                    c.dequeue(d, b)
                }, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }
    });
    var sa = /[\n\t]/g,
        ha = /\s+/,
        Sa = /\r/g,
        Ta = /^(?:href|src|style)$/,
        Ua = /^(?:button|input)$/i,
        Va = /^(?:button|input|object|select|textarea)$/i,
        Wa = /^a(?:rea)?$/i,
        ta = /^(?:radio|checkbox)$/i;
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    c.fn.extend({
        attr: function (a, b) {
            return c.access(this, a, b, true, c.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function (a) {
            if (c.isFunction(a)) return this.each(function (x) {
                var r = c(this);
                r.addClass(a.call(this, x, r.attr("class")))
            });
            if (a && typeof a === "string")
                for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (f.nodeType ===
                        1)
                        if (f.className) {
                            for (var h = " " + f.className + " ", l = f.className, k = 0, o = b.length; k < o; k++)
                                if (h.indexOf(" " + b[k] + " ") < 0) l += " " + b[k];
                            f.className = c.trim(l)
                        } else f.className = a
                }
            return this
        },
        removeClass: function (a) {
            if (c.isFunction(a)) return this.each(function (o) {
                var x = c(this);
                x.removeClass(a.call(this, o, x.attr("class")))
            });
            if (a && typeof a === "string" || a === B)
                for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (f.nodeType === 1 && f.className)
                        if (a) {
                            for (var h = (" " + f.className + " ").replace(sa, " "),
                                    l = 0, k = b.length; l < k; l++) h = h.replace(" " + b[l] + " ", " ");
                            f.className = c.trim(h)
                        } else f.className = ""
                }
            return this
        },
        toggleClass: function (a, b) {
            var d = typeof a,
                e = typeof b === "boolean";
            if (c.isFunction(a)) return this.each(function (f) {
                var h = c(this);
                h.toggleClass(a.call(this, f, h.attr("class"), b), b)
            });
            return this.each(function () {
                if (d === "string")
                    for (var f, h = 0, l = c(this), k = b, o = a.split(ha); f = o[h++];) {
                        k = e ? k : !l.hasClass(f);
                        l[k ? "addClass" : "removeClass"](f)
                    } else if (d === "undefined" || d === "boolean") {
                        this.className && c.data(this,
                            "__className__", this.className);
                        this.className = this.className || a === false ? "" : c.data(this, "__className__") || ""
                    }
            })
        },
        hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, d = this.length; b < d; b++)
                if ((" " + this[b].className + " ").replace(sa, " ").indexOf(a) > -1) return true;
            return false
        },
        val: function (a) {
            if (!arguments.length) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) {
                        var d = b.attributes.value;
                        return !d || d.specified ? b.value : b.text
                    }
                    if (c.nodeName(b, "select")) {
                        var e = b.selectedIndex;
                        d = [];
                        var f = b.options;
                        b = b.type === "select-one";
                        if (e < 0) return null;
                        var h = b ? e : 0;
                        for (e = b ? e + 1 : f.length; h < e; h++) {
                            var l = f[h];
                            if (l.selected && (c.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !c.nodeName(l.parentNode, "optgroup"))) {
                                a = c(l).val();
                                if (b) return a;
                                d.push(a)
                            }
                        }
                        return d
                    }
                    if (ta.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
                    return (b.value || "").replace(Sa, "")
                }
                return B
            }
            var k = c.isFunction(a);
            return this.each(function (o) {
                var x = c(this),
                    r = a;
                if (this.nodeType === 1) {
                    if (k) r =
                        a.call(this, o, x.val());
                    if (r == null) r = "";
                    else if (typeof r === "number") r += "";
                    else if (c.isArray(r)) r = c.map(r, function (C) {
                        return C == null ? "" : C + ""
                    });
                    if (c.isArray(r) && ta.test(this.type)) this.checked = c.inArray(x.val(), r) >= 0;
                    else if (c.nodeName(this, "select")) {
                        var A = c.makeArray(r);
                        c("option", this).each(function () {
                            this.selected = c.inArray(c(this).val(), A) >= 0
                        });
                        if (!A.length) this.selectedIndex = -1
                    } else this.value = r
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (a, b, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return B;
            if (e && b in c.attrFn) return c(a)[b](d);
            e = a.nodeType !== 1 || !c.isXMLDoc(a);
            var f = d !== B;
            b = e && c.props[b] || b;
            var h = Ta.test(b);
            if ((b in a || a[b] !== B) && e && !h) {
                if (f) {
                    b === "type" && Ua.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                    if (d === null) a.nodeType === 1 && a.removeAttribute(b);
                    else a[b] = d
                }
                if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
                if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) &&
                    b.specified ? b.value : Va.test(a.nodeName) || Wa.test(a.nodeName) && a.href ? 0 : B;
                return a[b]
            }
            if (!c.support.style && e && b === "style") {
                if (f) a.style.cssText = "" + d;
                return a.style.cssText
            }
            f && a.setAttribute(b, "" + d);
            if (!a.attributes[b] && a.hasAttribute && !a.hasAttribute(b)) return B;
            a = !c.support.hrefNormalized && e && h ? a.getAttribute(b, 2) : a.getAttribute(b);
            return a === null ? B : a
        }
    });
    var X = /\.(.*)$/,
        ia = /^(?:textarea|input|select)$/i,
        La = /\./g,
        Ma = / /g,
        Xa = /[^\w\s.|`]/g,
        Ya = function (a) {
            return a.replace(Xa, "\\$&")
        },
        ua = {
            focusin: 0,
            focusout: 0
        };
    c.event = {
        add: function (a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (c.isWindow(a) && a !== E && !a.frameElement) a = E;
                if (d === false) d = U;
                else if (!d) return;
                var f, h;
                if (d.handler) {
                    f = d;
                    d = f.handler
                }
                if (!d.guid) d.guid = c.guid++;
                if (h = c.data(a)) {
                    var l = a.nodeType ? "events" : "__events__",
                        k = h[l],
                        o = h.handle;
                    if (typeof k === "function") {
                        o = k.handle;
                        k = k.events
                    } else if (!k) {
                        a.nodeType || (h[l] = h = function () {});
                        h.events = k = {}
                    }
                    if (!o) h.handle = o = function () {
                        return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem,
                            arguments) : B
                    };
                    o.elem = a;
                    b = b.split(" ");
                    for (var x = 0, r; l = b[x++];) {
                        h = f ? c.extend({}, f) : {
                            handler: d,
                            data: e
                        };
                        if (l.indexOf(".") > -1) {
                            r = l.split(".");
                            l = r.shift();
                            h.namespace = r.slice(0).sort().join(".")
                        } else {
                            r = [];
                            h.namespace = ""
                        }
                        h.type = l;
                        if (!h.guid) h.guid = d.guid;
                        var A = k[l],
                            C = c.event.special[l] || {};
                        if (!A) {
                            A = k[l] = [];
                            if (!C.setup || C.setup.call(a, e, r, o) === false)
                                if (a.addEventListener) a.addEventListener(l, o, false);
                                else a.attachEvent && a.attachEvent("on" + l, o)
                        }
                        if (C.add) {
                            C.add.call(a, h);
                            if (!h.handler.guid) h.handler.guid =
                                d.guid
                        }
                        A.push(h);
                        c.event.global[l] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function (a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (d === false) d = U;
                var f, h, l = 0,
                    k, o, x, r, A, C, J = a.nodeType ? "events" : "__events__",
                    w = c.data(a),
                    I = w && w[J];
                if (w && I) {
                    if (typeof I === "function") {
                        w = I;
                        I = I.events
                    }
                    if (b && b.type) {
                        d = b.handler;
                        b = b.type
                    }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") {
                        b = b || "";
                        for (f in I) c.event.remove(a, f + b)
                    } else {
                        for (b = b.split(" "); f = b[l++];) {
                            r = f;
                            k = f.indexOf(".") < 0;
                            o = [];
                            if (!k) {
                                o = f.split(".");
                                f = o.shift();
                                x = RegExp("(^|\\.)" +
                                    c.map(o.slice(0).sort(), Ya).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (A = I[f])
                                if (d) {
                                    r = c.event.special[f] || {};
                                    for (h = e || 0; h < A.length; h++) {
                                        C = A[h];
                                        if (d.guid === C.guid) {
                                            if (k || x.test(C.namespace)) {
                                                e == null && A.splice(h--, 1);
                                                r.remove && r.remove.call(a, C)
                                            }
                                            if (e != null) break
                                        }
                                    }
                                    if (A.length === 0 || e != null && A.length === 1) {
                                        if (!r.teardown || r.teardown.call(a, o) === false) c.removeEvent(a, f, w.handle);
                                        delete I[f]
                                    }
                                } else
                                    for (h = 0; h < A.length; h++) {
                                        C = A[h];
                                        if (k || x.test(C.namespace)) {
                                            c.event.remove(a, r, C.handler, h);
                                            A.splice(h--, 1)
                                        }
                                    }
                        }
                        if (c.isEmptyObject(I)) {
                            if (b =
                                w.handle) b.elem = null;
                            delete w.events;
                            delete w.handle;
                            if (typeof w === "function") c.removeData(a, J);
                            else c.isEmptyObject(w) && c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger: function (a, b, d, e) {
            var f = a.type || a;
            if (!e) {
                a = typeof a === "object" ? a[c.expando] ? a : c.extend(c.Event(f), a) : c.Event(f);
                if (f.indexOf("!") >= 0) {
                    a.type = f = f.slice(0, -1);
                    a.exclusive = true
                }
                if (!d) {
                    a.stopPropagation();
                    c.event.global[f] && c.each(c.cache, function () {
                        this.events && this.events[f] && c.event.trigger(a, b, this.handle.elem)
                    })
                }
                if (!d || d.nodeType === 3 || d.nodeType ===
                    8) return B;
                a.result = B;
                a.target = d;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = d;
            (e = d.nodeType ? c.data(d, "handle") : (c.data(d, "__events__") || {}).handle) && e.apply(d, b);
            e = d.parentNode || d.ownerDocument;
            try {
                if (!(d && d.nodeName && c.noData[d.nodeName.toLowerCase()]))
                    if (d["on" + f] && d["on" + f].apply(d, b) === false) {
                        a.result = false;
                        a.preventDefault()
                    }
            } catch (h) {}
            if (!a.isPropagationStopped() && e) c.event.trigger(a, b, e, true);
            else if (!a.isDefaultPrevented()) {
                var l;
                e = a.target;
                var k = f.replace(X, ""),
                    o = c.nodeName(e, "a") && k ===
                    "click",
                    x = c.event.special[k] || {};
                if ((!x._default || x._default.call(d, a) === false) && !o && !(e && e.nodeName && c.noData[e.nodeName.toLowerCase()])) {
                    try {
                        if (e[k]) {
                            if (l = e["on" + k]) e["on" + k] = null;
                            c.event.triggered = true;
                            e[k]()
                        }
                    } catch (r) {}
                    if (l) e["on" + k] = l;
                    c.event.triggered = false
                }
            }
        },
        handle: function (a) {
            var b, d, e, f;
            d = [];
            var h = c.makeArray(arguments);
            a = h[0] = c.event.fix(a || E.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) {
                e = a.type.split(".");
                a.type = e.shift();
                d = e.slice(0).sort();
                e = RegExp("(^|\\.)" +
                    d.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            a.namespace = a.namespace || d.join(".");
            f = c.data(this, this.nodeType ? "events" : "__events__");
            if (typeof f === "function") f = f.events;
            d = (f || {})[a.type];
            if (f && d) {
                d = d.slice(0);
                f = 0;
                for (var l = d.length; f < l; f++) {
                    var k = d[f];
                    if (b || e.test(k.namespace)) {
                        a.handler = k.handler;
                        a.data = k.data;
                        a.handleObj = k;
                        k = k.handler.apply(this, h);
                        if (k !== B) {
                            a.result = k;
                            if (k === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[c.expando]) return a;
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length, e; d;) {
                e = this.props[--d];
                a[e] = b[e]
            }
            if (!a.target) a.target = a.srcElement || t;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = t.documentElement;
                d = t.body;
                a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop ||
                    d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
            }
            if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
            if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== B) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function (a) {
                    c.event.add(this, Y(a.origType, a.selector), c.extend({}, a, {
                        handler: Ka,
                        guid: a.handler.guid
                    }))
                },
                remove: function (a) {
                    c.event.remove(this,
                        Y(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function (a, b, d) {
                    if (c.isWindow(this)) this.onbeforeunload = d
                },
                teardown: function (a, b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        }
    };
    c.removeEvent = t.removeEventListener ? function (a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d, false)
    } : function (a, b, d) {
        a.detachEvent && a.detachEvent("on" + b, d)
    };
    c.Event = function (a) {
        if (!this.preventDefault) return new c.Event(a);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else this.type = a;
        this.timeStamp =
            c.now();
        this[c.expando] = true
    };
    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = ca;
            var a = this.originalEvent;
            if (a)
                if (a.preventDefault) a.preventDefault();
                else a.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = ca;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ca;
            this.stopPropagation()
        },
        isDefaultPrevented: U,
        isPropagationStopped: U,
        isImmediatePropagationStopped: U
    };
    var va = function (a) {
            var b = a.relatedTarget;
            try {
                for (; b && b !== this;) b = b.parentNode;
                if (b !== this) {
                    a.type = a.data;
                    c.event.handle.apply(this, arguments)
                }
            } catch (d) {}
        },
        wa = function (a) {
            a.type = a.data;
            c.event.handle.apply(this, arguments)
        };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        c.event.special[a] = {
            setup: function (d) {
                c.event.add(this, b, d && d.selector ? wa : va, a)
            },
            teardown: function (d) {
                c.event.remove(this, b, d && d.selector ? wa : va)
            }
        }
    });
    if (!c.support.submitBubbles) c.event.special.submit = {
        setup: function () {
            if (this.nodeName.toLowerCase() !==
                "form") {
                c.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target,
                        d = b.type;
                    if ((d === "submit" || d === "image") && c(b).closest("form").length) {
                        a.liveFired = B;
                        return la("submit", this, arguments)
                    }
                });
                c.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target,
                        d = b.type;
                    if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) {
                        a.liveFired = B;
                        return la("submit", this, arguments)
                    }
                })
            } else return false
        },
        teardown: function () {
            c.event.remove(this, ".specialSubmit")
        }
    };
    if (!c.support.changeBubbles) {
        var V,
            xa = function (a) {
                var b = a.type,
                    d = a.value;
                if (b === "radio" || b === "checkbox") d = a.checked;
                else if (b === "select-multiple") d = a.selectedIndex > -1 ? c.map(a.options, function (e) {
                    return e.selected
                }).join("-") : "";
                else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
                return d
            },
            Z = function (a, b) {
                var d = a.target,
                    e, f;
                if (!(!ia.test(d.nodeName) || d.readOnly)) {
                    e = c.data(d, "_change_data");
                    f = xa(d);
                    if (a.type !== "focusout" || d.type !== "radio") c.data(d, "_change_data", f);
                    if (!(e === B || f === e))
                        if (e != null || f) {
                            a.type = "change";
                            a.liveFired =
                                B;
                            return c.event.trigger(a, b, d)
                        }
                }
            };
        c.event.special.change = {
            filters: {
                focusout: Z,
                beforedeactivate: Z,
                click: function (a) {
                    var b = a.target,
                        d = b.type;
                    if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") return Z.call(this, a)
                },
                keydown: function (a) {
                    var b = a.target,
                        d = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple") return Z.call(this, a)
                },
                beforeactivate: function (a) {
                    a = a.target;
                    c.data(a, "_change_data", xa(a))
                }
            },
            setup: function () {
                if (this.type ===
                    "file") return false;
                for (var a in V) c.event.add(this, a + ".specialChange", V[a]);
                return ia.test(this.nodeName)
            },
            teardown: function () {
                c.event.remove(this, ".specialChange");
                return ia.test(this.nodeName)
            }
        };
        V = c.event.special.change.filters;
        V.focus = V.beforeactivate
    }
    t.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.trigger(e, null, e.target)
        }
        c.event.special[b] = {
            setup: function () {
                ua[b]++ === 0 && t.addEventListener(a, d, true)
            },
            teardown: function () {
                --ua[b] ===
                    0 && t.removeEventListener(a, d, true)
            }
        }
    });
    c.each(["bind", "one"], function (a, b) {
        c.fn[b] = function (d, e, f) {
            if (typeof d === "object") {
                for (var h in d) this[b](h, e, d[h], f);
                return this
            }
            if (c.isFunction(e) || e === false) {
                f = e;
                e = B
            }
            var l = b === "one" ? c.proxy(f, function (o) {
                c(this).unbind(o, l);
                return f.apply(this, arguments)
            }) : f;
            if (d === "unload" && b !== "one") this.one(d, e, f);
            else {
                h = 0;
                for (var k = this.length; h < k; h++) c.event.add(this[h], d, l, e)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function (a, b) {
            if (typeof a === "object" && !a.preventDefault)
                for (var d in a) this.unbind(d,
                    a[d]);
            else {
                d = 0;
                for (var e = this.length; d < e; d++) c.event.remove(this[d], a, b)
            }
            return this
        },
        delegate: function (a, b, d, e) {
            return this.live(b, d, e, a)
        },
        undelegate: function (a, b, d) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
        },
        trigger: function (a, b) {
            return this.each(function () {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) {
                var d = c.Event(a);
                d.preventDefault();
                d.stopPropagation();
                c.event.trigger(d, b, this[0]);
                return d.result
            }
        },
        toggle: function (a) {
            for (var b = arguments, d =
                    1; d < b.length;) c.proxy(a, b[d++]);
            return this.click(c.proxy(a, function (e) {
                var f = (c.data(this, "lastToggle" + a.guid) || 0) % d;
                c.data(this, "lastToggle" + a.guid, f + 1);
                e.preventDefault();
                return b[f].apply(this, arguments) || false
            }))
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var ya = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"], function (a, b) {
        c.fn[b] = function (d, e, f, h) {
            var l, k = 0,
                o, x, r = h || this.selector;
            h = h ? this : c(this.context);
            if (typeof d ===
                "object" && !d.preventDefault) {
                for (l in d) h[b](l, e, d[l], r);
                return this
            }
            if (c.isFunction(e)) {
                f = e;
                e = B
            }
            for (d = (d || "").split(" ");
                (l = d[k++]) != null;) {
                o = X.exec(l);
                x = "";
                if (o) {
                    x = o[0];
                    l = l.replace(X, "")
                }
                if (l === "hover") d.push("mouseenter" + x, "mouseleave" + x);
                else {
                    o = l;
                    if (l === "focus" || l === "blur") {
                        d.push(ya[l] + x);
                        l += x
                    } else l = (ya[l] || l) + x;
                    if (b === "live") {
                        x = 0;
                        for (var A = h.length; x < A; x++) c.event.add(h[x], "live." + Y(l, r), {
                            data: e,
                            selector: r,
                            handler: f,
                            origType: l,
                            origHandler: f,
                            preType: o
                        })
                    } else h.unbind("live." + Y(l, r), f)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        c.fn[b] = function (d, e) {
            if (e == null) {
                e = d;
                d = null
            }
            return arguments.length > 0 ? this.bind(b, d, e) : this.trigger(b)
        };
        if (c.attrFn) c.attrFn[b] = true
    });
    E.attachEvent && !E.addEventListener && c(E).bind("unload", function () {
        for (var a in c.cache)
            if (c.cache[a].handle) try {
                c.event.remove(c.cache[a].handle.elem)
            } catch (b) {}
    });
    (function () {
        function a(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y;) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1 && !q) {
                            y.sizcache = n;
                            y.sizset = p
                        }
                        if (y.nodeName.toLowerCase() === i) {
                            F = y;
                            break
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }

        function b(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y;) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1) {
                            if (!q) {
                                y.sizcache = n;
                                y.sizset = p
                            }
                            if (typeof i !== "string") {
                                if (y === i) {
                                    F = true;
                                    break
                                }
                            } else if (k.filter(i,
                                    [y]).length > 0) {
                                F = y;
                                break
                            }
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = 0,
            f = Object.prototype.toString,
            h = false,
            l = true;
        [0, 0].sort(function () {
            l = false;
            return 0
        });
        var k = function (g, i, n, m) {
            n = n || [];
            var p = i = i || t;
            if (i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!g || typeof g !== "string") return n;
            var q, u, y, F, M, N = true,
                O = k.isXML(i),
                D = [],
                R = g;
            do {
                d.exec("");
                if (q = d.exec(R)) {
                    R = q[3];
                    D.push(q[1]);
                    if (q[2]) {
                        F = q[3];
                        break
                    }
                }
            } while (q);
            if (D.length > 1 && x.exec(g))
                if (D.length === 2 && o.relative[D[0]]) u = L(D[0] + D[1], i);
                else
                    for (u = o.relative[D[0]] ? [i] : k(D.shift(), i); D.length;) {
                        g = D.shift();
                        if (o.relative[g]) g += D.shift();
                        u = L(g, u)
                    } else {
                        if (!m && D.length > 1 && i.nodeType === 9 && !O && o.match.ID.test(D[0]) && !o.match.ID.test(D[D.length - 1])) {
                            q = k.find(D.shift(), i, O);
                            i = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]
                        }
                        if (i) {
                            q = m ? {
                                expr: D.pop(),
                                set: C(m)
                            } : k.find(D.pop(), D.length === 1 && (D[0] === "~" || D[0] === "+") && i.parentNode ? i.parentNode : i, O);
                            u = q.expr ? k.filter(q.expr,
                                q.set) : q.set;
                            if (D.length > 0) y = C(u);
                            else N = false;
                            for (; D.length;) {
                                q = M = D.pop();
                                if (o.relative[M]) q = D.pop();
                                else M = "";
                                if (q == null) q = i;
                                o.relative[M](y, q, O)
                            }
                        } else y = []
                    }
            y || (y = u);
            y || k.error(M || g);
            if (f.call(y) === "[object Array]")
                if (N)
                    if (i && i.nodeType === 1)
                        for (g = 0; y[g] != null; g++) {
                            if (y[g] && (y[g] === true || y[g].nodeType === 1 && k.contains(i, y[g]))) n.push(u[g])
                        } else
                            for (g = 0; y[g] != null; g++) y[g] && y[g].nodeType === 1 && n.push(u[g]);
                    else n.push.apply(n, y);
            else C(y, n);
            if (F) {
                k(F, p, n, m);
                k.uniqueSort(n)
            }
            return n
        };
        k.uniqueSort = function (g) {
            if (w) {
                h =
                    l;
                g.sort(w);
                if (h)
                    for (var i = 1; i < g.length; i++) g[i] === g[i - 1] && g.splice(i--, 1)
            }
            return g
        };
        k.matches = function (g, i) {
            return k(g, null, null, i)
        };
        k.matchesSelector = function (g, i) {
            return k(i, null, null, [g]).length > 0
        };
        k.find = function (g, i, n) {
            var m;
            if (!g) return [];
            for (var p = 0, q = o.order.length; p < q; p++) {
                var u, y = o.order[p];
                if (u = o.leftMatch[y].exec(g)) {
                    var F = u[1];
                    u.splice(1, 1);
                    if (F.substr(F.length - 1) !== "\\") {
                        u[1] = (u[1] || "").replace(/\\/g, "");
                        m = o.find[y](u, i, n);
                        if (m != null) {
                            g = g.replace(o.match[y], "");
                            break
                        }
                    }
                }
            }
            m || (m = i.getElementsByTagName("*"));
            return {
                set: m,
                expr: g
            }
        };
        k.filter = function (g, i, n, m) {
            for (var p, q, u = g, y = [], F = i, M = i && i[0] && k.isXML(i[0]); g && i.length;) {
                for (var N in o.filter)
                    if ((p = o.leftMatch[N].exec(g)) != null && p[2]) {
                        var O, D, R = o.filter[N];
                        D = p[1];
                        q = false;
                        p.splice(1, 1);
                        if (D.substr(D.length - 1) !== "\\") {
                            if (F === y) y = [];
                            if (o.preFilter[N])
                                if (p = o.preFilter[N](p, F, n, y, m, M)) {
                                    if (p === true) continue
                                } else q = O = true;
                            if (p)
                                for (var j = 0;
                                    (D = F[j]) != null; j++)
                                    if (D) {
                                        O = R(D, p, j, F);
                                        var s = m ^ !!O;
                                        if (n && O != null)
                                            if (s) q = true;
                                            else F[j] = false;
                                        else if (s) {
                                            y.push(D);
                                            q = true
                                        }
                                    } if (O !==
                                B) {
                                n || (F = y);
                                g = g.replace(o.match[N], "");
                                if (!q) return [];
                                break
                            }
                        }
                    } if (g === u)
                    if (q == null) k.error(g);
                    else break;
                u = g
            }
            return F
        };
        k.error = function (g) {
            throw "Syntax error, unrecognized expression: " + g;
        };
        var o = k.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (g) {
                        return g.getAttribute("href")
                    }
                },
                relative: {
                    "+": function (g, i) {
                        var n = typeof i === "string",
                            m = n && !/\W/.test(i);
                        n = n && !m;
                        if (m) i = i.toLowerCase();
                        m = 0;
                        for (var p = g.length, q; m < p; m++)
                            if (q = g[m]) {
                                for (;
                                    (q = q.previousSibling) && q.nodeType !== 1;);
                                g[m] = n || q && q.nodeName.toLowerCase() ===
                                    i ? q || false : q === i
                            } n && k.filter(i, g, true)
                    },
                    ">": function (g, i) {
                        var n, m = typeof i === "string",
                            p = 0,
                            q = g.length;
                        if (m && !/\W/.test(i))
                            for (i = i.toLowerCase(); p < q; p++) {
                                if (n = g[p]) {
                                    n = n.parentNode;
                                    g[p] = n.nodeName.toLowerCase() === i ? n : false
                                }
                            } else {
                                for (; p < q; p++)
                                    if (n = g[p]) g[p] = m ? n.parentNode : n.parentNode === i;
                                m && k.filter(i, g, true)
                            }
                    },
                    "": function (g, i, n) {
                        var m, p = e++,
                            q = b;
                        if (typeof i === "string" && !/\W/.test(i)) {
                            m = i = i.toLowerCase();
                            q = a
                        }
                        q("parentNode", i, p, g, m, n)
                    },
                    "~": function (g, i, n) {
                        var m, p = e++,
                            q = b;
                        if (typeof i === "string" && !/\W/.test(i)) {
                            m =
                                i = i.toLowerCase();
                            q = a
                        }
                        q("previousSibling", i, p, g, m, n)
                    }
                },
                find: {
                    ID: function (g, i, n) {
                        if (typeof i.getElementById !== "undefined" && !n) return (g = i.getElementById(g[1])) && g.parentNode ? [g] : []
                    },
                    NAME: function (g, i) {
                        if (typeof i.getElementsByName !== "undefined") {
                            for (var n = [], m = i.getElementsByName(g[1]), p = 0, q = m.length; p < q; p++) m[p].getAttribute("name") === g[1] && n.push(m[p]);
                            return n.length === 0 ? null : n
                        }
                    },
                    TAG: function (g, i) {
                        return i.getElementsByTagName(g[1])
                    }
                },
                preFilter: {
                    CLASS: function (g, i, n, m, p, q) {
                        g = " " + g[1].replace(/\\/g,
                            "") + " ";
                        if (q) return g;
                        q = 0;
                        for (var u;
                            (u = i[q]) != null; q++)
                            if (u)
                                if (p ^ (u.className && (" " + u.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) n || m.push(u);
                                else if (n) i[q] = false;
                        return false
                    },
                    ID: function (g) {
                        return g[1].replace(/\\/g, "")
                    },
                    TAG: function (g) {
                        return g[1].toLowerCase()
                    },
                    CHILD: function (g) {
                        if (g[1] === "nth") {
                            var i = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
                            g[2] = i[1] + (i[2] || 1) - 0;
                            g[3] = i[3] - 0
                        }
                        g[0] = e++;
                        return g
                    },
                    ATTR: function (g, i, n,
                        m, p, q) {
                        i = g[1].replace(/\\/g, "");
                        if (!q && o.attrMap[i]) g[1] = o.attrMap[i];
                        if (g[2] === "~=") g[4] = " " + g[4] + " ";
                        return g
                    },
                    PSEUDO: function (g, i, n, m, p) {
                        if (g[1] === "not")
                            if ((d.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) g[3] = k(g[3], null, null, i);
                            else {
                                g = k.filter(g[3], i, n, true ^ p);
                                n || m.push.apply(m, g);
                                return false
                            }
                        else if (o.match.POS.test(g[0]) || o.match.CHILD.test(g[0])) return true;
                        return g
                    },
                    POS: function (g) {
                        g.unshift(true);
                        return g
                    }
                },
                filters: {
                    enabled: function (g) {
                        return g.disabled === false && g.type !== "hidden"
                    },
                    disabled: function (g) {
                        return g.disabled ===
                            true
                    },
                    checked: function (g) {
                        return g.checked === true
                    },
                    selected: function (g) {
                        return g.selected === true
                    },
                    parent: function (g) {
                        return !!g.firstChild
                    },
                    empty: function (g) {
                        return !g.firstChild
                    },
                    has: function (g, i, n) {
                        return !!k(n[3], g).length
                    },
                    header: function (g) {
                        return /h\d/i.test(g.nodeName)
                    },
                    text: function (g) {
                        return "text" === g.type
                    },
                    radio: function (g) {
                        return "radio" === g.type
                    },
                    checkbox: function (g) {
                        return "checkbox" === g.type
                    },
                    file: function (g) {
                        return "file" === g.type
                    },
                    password: function (g) {
                        return "password" === g.type
                    },
                    submit: function (g) {
                        return "submit" ===
                            g.type
                    },
                    image: function (g) {
                        return "image" === g.type
                    },
                    reset: function (g) {
                        return "reset" === g.type
                    },
                    button: function (g) {
                        return "button" === g.type || g.nodeName.toLowerCase() === "button"
                    },
                    input: function (g) {
                        return /input|select|textarea|button/i.test(g.nodeName)
                    }
                },
                setFilters: {
                    first: function (g, i) {
                        return i === 0
                    },
                    last: function (g, i, n, m) {
                        return i === m.length - 1
                    },
                    even: function (g, i) {
                        return i % 2 === 0
                    },
                    odd: function (g, i) {
                        return i % 2 === 1
                    },
                    lt: function (g, i, n) {
                        return i < n[3] - 0
                    },
                    gt: function (g, i, n) {
                        return i > n[3] - 0
                    },
                    nth: function (g, i, n) {
                        return n[3] -
                            0 === i
                    },
                    eq: function (g, i, n) {
                        return n[3] - 0 === i
                    }
                },
                filter: {
                    PSEUDO: function (g, i, n, m) {
                        var p = i[1],
                            q = o.filters[p];
                        if (q) return q(g, n, i, m);
                        else if (p === "contains") return (g.textContent || g.innerText || k.getText([g]) || "").indexOf(i[3]) >= 0;
                        else if (p === "not") {
                            i = i[3];
                            n = 0;
                            for (m = i.length; n < m; n++)
                                if (i[n] === g) return false;
                            return true
                        } else k.error("Syntax error, unrecognized expression: " + p)
                    },
                    CHILD: function (g, i) {
                        var n = i[1],
                            m = g;
                        switch (n) {
                            case "only":
                            case "first":
                                for (; m = m.previousSibling;)
                                    if (m.nodeType === 1) return false;
                                if (n ===
                                    "first") return true;
                                m = g;
                            case "last":
                                for (; m = m.nextSibling;)
                                    if (m.nodeType === 1) return false;
                                return true;
                            case "nth":
                                n = i[2];
                                var p = i[3];
                                if (n === 1 && p === 0) return true;
                                var q = i[0],
                                    u = g.parentNode;
                                if (u && (u.sizcache !== q || !g.nodeIndex)) {
                                    var y = 0;
                                    for (m = u.firstChild; m; m = m.nextSibling)
                                        if (m.nodeType === 1) m.nodeIndex = ++y;
                                    u.sizcache = q
                                }
                                m = g.nodeIndex - p;
                                return n === 0 ? m === 0 : m % n === 0 && m / n >= 0
                        }
                    },
                    ID: function (g, i) {
                        return g.nodeType === 1 && g.getAttribute("id") === i
                    },
                    TAG: function (g, i) {
                        return i === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() ===
                            i
                    },
                    CLASS: function (g, i) {
                        return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(i) > -1
                    },
                    ATTR: function (g, i) {
                        var n = i[1];
                        n = o.attrHandle[n] ? o.attrHandle[n](g) : g[n] != null ? g[n] : g.getAttribute(n);
                        var m = n + "",
                            p = i[2],
                            q = i[4];
                        return n == null ? p === "!=" : p === "=" ? m === q : p === "*=" ? m.indexOf(q) >= 0 : p === "~=" ? (" " + m + " ").indexOf(q) >= 0 : !q ? m && n !== false : p === "!=" ? m !== q : p === "^=" ? m.indexOf(q) === 0 : p === "$=" ? m.substr(m.length - q.length) === q : p === "|=" ? m === q || m.substr(0, q.length + 1) === q + "-" : false
                    },
                    POS: function (g, i, n, m) {
                        var p = o.setFilters[i[2]];
                        if (p) return p(g, n, i, m)
                    }
                }
            },
            x = o.match.POS,
            r = function (g, i) {
                return "\\" + (i - 0 + 1)
            },
            A;
        for (A in o.match) {
            o.match[A] = RegExp(o.match[A].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            o.leftMatch[A] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[A].source.replace(/\\(\d+)/g, r))
        }
        var C = function (g, i) {
            g = Array.prototype.slice.call(g, 0);
            if (i) {
                i.push.apply(i, g);
                return i
            }
            return g
        };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)
        } catch (J) {
            C = function (g, i) {
                var n = 0,
                    m = i || [];
                if (f.call(g) === "[object Array]") Array.prototype.push.apply(m,
                    g);
                else if (typeof g.length === "number")
                    for (var p = g.length; n < p; n++) m.push(g[n]);
                else
                    for (; g[n]; n++) m.push(g[n]);
                return m
            }
        }
        var w, I;
        if (t.documentElement.compareDocumentPosition) w = function (g, i) {
            if (g === i) {
                h = true;
                return 0
            }
            if (!g.compareDocumentPosition || !i.compareDocumentPosition) return g.compareDocumentPosition ? -1 : 1;
            return g.compareDocumentPosition(i) & 4 ? -1 : 1
        };
        else {
            w = function (g, i) {
                var n, m, p = [],
                    q = [];
                n = g.parentNode;
                m = i.parentNode;
                var u = n;
                if (g === i) {
                    h = true;
                    return 0
                } else if (n === m) return I(g, i);
                else if (n) {
                    if (!m) return 1
                } else return -1;
                for (; u;) {
                    p.unshift(u);
                    u = u.parentNode
                }
                for (u = m; u;) {
                    q.unshift(u);
                    u = u.parentNode
                }
                n = p.length;
                m = q.length;
                for (u = 0; u < n && u < m; u++)
                    if (p[u] !== q[u]) return I(p[u], q[u]);
                return u === n ? I(g, q[u], -1) : I(p[u], i, 1)
            };
            I = function (g, i, n) {
                if (g === i) return n;
                for (g = g.nextSibling; g;) {
                    if (g === i) return -1;
                    g = g.nextSibling
                }
                return 1
            }
        }
        k.getText = function (g) {
            for (var i = "", n, m = 0; g[m]; m++) {
                n = g[m];
                if (n.nodeType === 3 || n.nodeType === 4) i += n.nodeValue;
                else if (n.nodeType !== 8) i += k.getText(n.childNodes)
            }
            return i
        };
        (function () {
            var g = t.createElement("div"),
                i = "script" + (new Date).getTime(),
                n = t.documentElement;
            g.innerHTML = "<a name='" + i + "'/>";
            n.insertBefore(g, n.firstChild);
            if (t.getElementById(i)) {
                o.find.ID = function (m, p, q) {
                    if (typeof p.getElementById !== "undefined" && !q) return (p = p.getElementById(m[1])) ? p.id === m[1] || typeof p.getAttributeNode !== "undefined" && p.getAttributeNode("id").nodeValue === m[1] ? [p] : B : []
                };
                o.filter.ID = function (m, p) {
                    var q = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
                    return m.nodeType === 1 && q && q.nodeValue === p
                }
            }
            n.removeChild(g);
            n = g = null
        })();
        (function () {
            var g = t.createElement("div");
            g.appendChild(t.createComment(""));
            if (g.getElementsByTagName("*").length > 0) o.find.TAG = function (i, n) {
                var m = n.getElementsByTagName(i[1]);
                if (i[1] === "*") {
                    for (var p = [], q = 0; m[q]; q++) m[q].nodeType === 1 && p.push(m[q]);
                    m = p
                }
                return m
            };
            g.innerHTML = "<a href='#'></a>";
            if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#") o.attrHandle.href = function (i) {
                return i.getAttribute("href", 2)
            };
            g = null
        })();
        t.querySelectorAll &&
            function () {
                var g = k,
                    i = t.createElement("div");
                i.innerHTML = "<p class='TEST'></p>";
                if (!(i.querySelectorAll && i.querySelectorAll(".TEST").length === 0)) {
                    k = function (m, p, q, u) {
                        p = p || t;
                        m = m.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!u && !k.isXML(p))
                            if (p.nodeType === 9) try {
                                return C(p.querySelectorAll(m), q)
                            } catch (y) {} else if (p.nodeType === 1 && p.nodeName.toLowerCase() !== "object") {
                                var F = p.getAttribute("id"),
                                    M = F || "__sizzle__";
                                F || p.setAttribute("id", M);
                                try {
                                    return C(p.querySelectorAll("#" + M + " " + m), q)
                                } catch (N) {} finally {
                                    F ||
                                        p.removeAttribute("id")
                                }
                            } return g(m, p, q, u)
                    };
                    for (var n in g) k[n] = g[n];
                    i = null
                }
            }();
        (function () {
            var g = t.documentElement,
                i = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.msMatchesSelector,
                n = false;
            try {
                i.call(t.documentElement, "[test!='']:sizzle")
            } catch (m) {
                n = true
            }
            if (i) k.matchesSelector = function (p, q) {
                q = q.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!k.isXML(p)) try {
                    if (n || !o.match.PSEUDO.test(q) && !/!=/.test(q)) return i.call(p, q)
                } catch (u) {}
                return k(q, null, null, [p]).length > 0
            }
        })();
        (function () {
            var g =
                t.createElement("div");
            g.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
                g.lastChild.className = "e";
                if (g.getElementsByClassName("e").length !== 1) {
                    o.order.splice(1, 0, "CLASS");
                    o.find.CLASS = function (i, n, m) {
                        if (typeof n.getElementsByClassName !== "undefined" && !m) return n.getElementsByClassName(i[1])
                    };
                    g = null
                }
            }
        })();
        k.contains = t.documentElement.contains ? function (g, i) {
                return g !== i && (g.contains ? g.contains(i) : true)
            } : t.documentElement.compareDocumentPosition ?
            function (g, i) {
                return !!(g.compareDocumentPosition(i) & 16)
            } : function () {
                return false
            };
        k.isXML = function (g) {
            return (g = (g ? g.ownerDocument || g : 0).documentElement) ? g.nodeName !== "HTML" : false
        };
        var L = function (g, i) {
            for (var n, m = [], p = "", q = i.nodeType ? [i] : i; n = o.match.PSEUDO.exec(g);) {
                p += n[0];
                g = g.replace(o.match.PSEUDO, "")
            }
            g = o.relative[g] ? g + "*" : g;
            n = 0;
            for (var u = q.length; n < u; n++) k(g, q[n], m);
            return k.filter(p, m)
        };
        c.find = k;
        c.expr = k.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = k.uniqueSort;
        c.text = k.getText;
        c.isXMLDoc = k.isXML;
        c.contains = k.contains
    })();
    var Za = /Until$/,
        $a = /^(?:parents|prevUntil|prevAll)/,
        ab = /,/,
        Na = /^.[^:#\[\.,]*$/,
        bb = Array.prototype.slice,
        cb = c.expr.match.POS;
    c.fn.extend({
        find: function (a) {
            for (var b = this.pushStack("", "find", a), d = 0, e = 0, f = this.length; e < f; e++) {
                d = b.length;
                c.find(a, this[e], b);
                if (e > 0)
                    for (var h = d; h < b.length; h++)
                        for (var l = 0; l < d; l++)
                            if (b[l] === b[h]) {
                                b.splice(h--, 1);
                                break
                            }
            }
            return b
        },
        has: function (a) {
            var b = c(a);
            return this.filter(function () {
                for (var d = 0, e = b.length; d < e; d++)
                    if (c.contains(this, b[d])) return true
            })
        },
        not: function (a) {
            return this.pushStack(ma(this, a, false), "not", a)
        },
        filter: function (a) {
            return this.pushStack(ma(this, a, true), "filter", a)
        },
        is: function (a) {
            return !!a && c.filter(a, this).length > 0
        },
        closest: function (a, b) {
            var d = [],
                e, f, h = this[0];
            if (c.isArray(a)) {
                var l, k = {},
                    o = 1;
                if (h && a.length) {
                    e = 0;
                    for (f = a.length; e < f; e++) {
                        l = a[e];
                        k[l] || (k[l] = c.expr.match.POS.test(l) ? c(l, b || this.context) : l)
                    }
                    for (; h && h.ownerDocument && h !== b;) {
                        for (l in k) {
                            e = k[l];
                            if (e.jquery ? e.index(h) > -1 : c(h).is(e)) d.push({
                                selector: l,
                                elem: h,
                                level: o
                            })
                        }
                        h =
                            h.parentNode;
                        o++
                    }
                }
                return d
            }
            l = cb.test(a) ? c(a, b || this.context) : null;
            e = 0;
            for (f = this.length; e < f; e++)
                for (h = this[e]; h;)
                    if (l ? l.index(h) > -1 : c.find.matchesSelector(h, a)) {
                        d.push(h);
                        break
                    } else {
                        h = h.parentNode;
                        if (!h || !h.ownerDocument || h === b) break
                    } d = d.length > 1 ? c.unique(d) : d;
            return this.pushStack(d, "closest", a)
        },
        index: function (a) {
            if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var d = typeof a === "string" ? c(a, b || this.context) :
                c.makeArray(a),
                e = c.merge(this.get(), d);
            return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : c.unique(e))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents: function (a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function (a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return c.nth(a,
                2, "previousSibling")
        },
        nextAll: function (a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function (a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function (a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return c.sibling(a.firstChild)
        },
        contents: function (a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
        }
    }, function (a,
        b) {
        c.fn[a] = function (d, e) {
            var f = c.map(this, b, d);
            Za.test(a) || (e = d);
            if (e && typeof e === "string") f = c.filter(e, f);
            f = this.length > 1 ? c.unique(f) : f;
            if ((this.length > 1 || ab.test(e)) && $a.test(a)) f = f.reverse();
            return this.pushStack(f, a, bb.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function (a, b, d) {
            if (d) a = ":not(" + a + ")";
            return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        },
        dir: function (a, b, d) {
            var e = [];
            for (a = a[b]; a && a.nodeType !== 9 && (d === B || a.nodeType !== 1 || !c(a).is(d));) {
                a.nodeType === 1 &&
                    e.push(a);
                a = a[b]
            }
            return e
        },
        nth: function (a, b, d) {
            b = b || 1;
            for (var e = 0; a; a = a[d])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            for (var d = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && d.push(a);
            return d
        }
    });
    var za = / jQuery\d+="(?:\d+|null)"/g,
        $ = /^\s+/,
        Aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Ba = /<([\w:]+)/,
        db = /<tbody/i,
        eb = /<|&#?\w+;/,
        Ca = /<(?:script|object|embed|option|style)/i,
        Da = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /\=([^="'>\s]+\/)>/g,
        P = {
            option: [1,
                "<select multiple='multiple'>", "</select>"
            ],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    P.optgroup = P.option;
    P.tbody = P.tfoot = P.colgroup = P.caption = P.thead;
    P.th = P.td;
    if (!c.support.htmlSerialize) P._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                var d =
                    c(this);
                d.text(a.call(this, b, d.text()))
            });
            if (typeof a !== "object" && a !== B) return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a));
            return c.text(this)
        },
        wrapAll: function (a) {
            if (c.isFunction(a)) return this.each(function (d) {
                c(this).wrapAll(a.call(this, d))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = c(this),
                    d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                c(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b,
                    this.nextSibling)
            });
            else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var d = 0, e;
                (e = this[d]) != null; d++)
                if (!a || c.filter(a, [e]).length) {
                    if (!b && e.nodeType === 1) {
                        c.cleanData(e.getElementsByTagName("*"));
                        c.cleanData([e])
                    }
                    e.parentNode && e.parentNode.removeChild(e)
                } return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++)
                for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function (a) {
            var b = this.map(function () {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var d = this.outerHTML,
                        e = this.ownerDocument;
                    if (!d) {
                        d = e.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d = d.innerHTML
                    }
                    return c.clean([d.replace(za, "").replace(fb, '="$1">').replace($, "")], e)[0]
                } else return this.cloneNode(true)
            });
            if (a === true) {
                na(this, b);
                na(this.find("*"), b.find("*"))
            }
            return b
        },
        html: function (a) {
            if (a === B) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(za, "") : null;
            else if (typeof a === "string" && !Ca.test(a) && (c.support.leadingWhitespace || !$.test(a)) && !P[(Ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Aa, "<$1></$2>");
                try {
                    for (var b = 0, d = this.length; b < d; b++)
                        if (this[b].nodeType === 1) {
                            c.cleanData(this[b].getElementsByTagName("*"));
                            this[b].innerHTML = a
                        }
                } catch (e) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function (f) {
                var h = c(this);
                h.html(a.call(this, f, h.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function (b) {
                    var d =
                        c(this),
                        e = d.html();
                    d.replaceWith(a.call(this, b, e))
                });
                if (typeof a !== "string") a = c(a).detach();
                return this.each(function () {
                    var b = this.nextSibling,
                        d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            } else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function (a) {
            return this.remove(a, true)
        },
        domManip: function (a, b, d) {
            var e, f, h, l = a[0],
                k = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof l === "string" && Da.test(l)) return this.each(function () {
                c(this).domManip(a,
                    b, d, true)
            });
            if (c.isFunction(l)) return this.each(function (x) {
                var r = c(this);
                a[0] = l.call(this, x, b ? r.html() : B);
                r.domManip(a, b, d)
            });
            if (this[0]) {
                e = l && l.parentNode;
                e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
                    fragment: e
                } : c.buildFragment(a, this, k);
                h = e.fragment;
                if (f = h.childNodes.length === 1 ? h = h.firstChild : h.firstChild) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var o = this.length; f < o; f++) d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) :
                        this[f] : this[f], f > 0 || e.cacheable || this.length > 1 ? h.cloneNode(true) : h)
                }
                k.length && c.each(k, Oa)
            }
            return this
        }
    });
    c.buildFragment = function (a, b, d) {
        var e, f, h;
        b = b && b[0] ? b[0].ownerDocument || b[0] : t;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === t && !Ca.test(a[0]) && (c.support.checkClone || !Da.test(a[0]))) {
            f = true;
            if (h = c.fragments[a[0]])
                if (h !== 1) e = h
        }
        if (!e) {
            e = b.createDocumentFragment();
            c.clean(a, b, e, d)
        }
        if (f) c.fragments[a[0]] = h ? e : 1;
        return {
            fragment: e,
            cacheable: f
        }
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        c.fn[a] = function (d) {
            var e = [];
            d = c(d);
            var f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && d.length === 1) {
                d[b](this[0]);
                return this
            } else {
                f = 0;
                for (var h = d.length; f < h; f++) {
                    var l = (f > 0 ? this.clone(true) : this).get();
                    c(d[f])[b](l);
                    e = e.concat(l)
                }
                return this.pushStack(e, a, d.selector)
            }
        }
    });
    c.extend({
        clean: function (a, b, d, e) {
            b = b || t;
            if (typeof b.createElement === "undefined") b = b.ownerDocument ||
                b[0] && b[0].ownerDocument || t;
            for (var f = [], h = 0, l;
                (l = a[h]) != null; h++) {
                if (typeof l === "number") l += "";
                if (l) {
                    if (typeof l === "string" && !eb.test(l)) l = b.createTextNode(l);
                    else if (typeof l === "string") {
                        l = l.replace(Aa, "<$1></$2>");
                        var k = (Ba.exec(l) || ["", ""])[1].toLowerCase(),
                            o = P[k] || P._default,
                            x = o[0],
                            r = b.createElement("div");
                        for (r.innerHTML = o[1] + l + o[2]; x--;) r = r.lastChild;
                        if (!c.support.tbody) {
                            x = db.test(l);
                            k = k === "table" && !x ? r.firstChild && r.firstChild.childNodes : o[1] === "<table>" && !x ? r.childNodes : [];
                            for (o = k.length -
                                1; o >= 0; --o) c.nodeName(k[o], "tbody") && !k[o].childNodes.length && k[o].parentNode.removeChild(k[o])
                        }!c.support.leadingWhitespace && $.test(l) && r.insertBefore(b.createTextNode($.exec(l)[0]), r.firstChild);
                        l = r.childNodes
                    }
                    if (l.nodeType) f.push(l);
                    else f = c.merge(f, l)
                }
            }
            if (d)
                for (h = 0; f[h]; h++)
                    if (e && c.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript")) e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                    else {
                        f[h].nodeType === 1 && f.splice.apply(f, [h + 1, 0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
                        d.appendChild(f[h])
                    } return f
        },
        cleanData: function (a) {
            for (var b, d, e = c.cache, f = c.event.special, h = c.support.deleteExpando, l = 0, k;
                (k = a[l]) != null; l++)
                if (!(k.nodeName && c.noData[k.nodeName.toLowerCase()]))
                    if (d = k[c.expando]) {
                        if ((b = e[d]) && b.events)
                            for (var o in b.events) f[o] ? c.event.remove(k, o) : c.removeEvent(k, o, b.handle);
                        if (h) delete k[c.expando];
                        else k.removeAttribute && k.removeAttribute(c.expando);
                        delete e[d]
                    }
        }
    });
    var Ea = /alpha\([^)]*\)/i,
        gb = /opacity=([^)]*)/,
        hb = /-([a-z])/ig,
        ib = /([A-Z])/g,
        Fa = /^-?\d+(?:px)?$/i,
        jb = /^-?\d/,
        kb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pa = ["Left", "Right"],
        Qa = ["Top", "Bottom"],
        W, Ga, aa, lb = function (a, b) {
            return b.toUpperCase()
        };
    c.fn.css = function (a, b) {
        if (arguments.length === 2 && b === B) return this;
        return c.access(this, a, b, true, function (d, e, f) {
            return f !== B ? c.style(d, e, f) : c.css(d, e)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var d = W(a, "opacity", "opacity");
                        return d === "" ? "1" : d
                    } else return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, d, e) {
            if (!(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var f, h = c.camelCase(b),
                    l = a.style,
                    k = c.cssHooks[h];
                b = c.cssProps[h] || h;
                if (d !== B) {
                    if (!(typeof d === "number" && isNaN(d) || d == null)) {
                        if (typeof d === "number" && !c.cssNumber[h]) d += "px";
                        if (!k || !("set" in k) || (d = k.set(a, d)) !== B) try {
                            l[b] = d
                        } catch (o) {}
                    }
                } else {
                    if (k && "get" in k && (f = k.get(a, false, e)) !== B) return f;
                    return l[b]
                }
            }
        },
        css: function (a, b, d) {
            var e, f = c.camelCase(b),
                h = c.cssHooks[f];
            b = c.cssProps[f] || f;
            if (h && "get" in h && (e = h.get(a, true, d)) !== B) return e;
            else if (W) return W(a, b, f)
        },
        swap: function (a, b, d) {
            var e = {},
                f;
            for (f in b) {
                e[f] = a.style[f];
                a.style[f] = b[f]
            }
            d.call(a);
            for (f in b) a.style[f] = e[f]
        },
        camelCase: function (a) {
            return a.replace(hb, lb)
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function (a, b) {
        c.cssHooks[b] = {
            get: function (d, e, f) {
                var h;
                if (e) {
                    if (d.offsetWidth !== 0) h = oa(d, b, f);
                    else c.swap(d, kb, function () {
                        h = oa(d, b, f)
                    });
                    if (h <= 0) {
                        h = W(d, b, b);
                        if (h === "0px" && aa) h = aa(d, b, b);
                        if (h != null) return h === "" || h === "auto" ? "0px" : h
                    }
                    if (h < 0 || h == null) {
                        h = d.style[b];
                        return h === "" || h === "auto" ? "0px" : h
                    }
                    return typeof h === "string" ? h : h + "px"
                }
            },
            set: function (d, e) {
                if (Fa.test(e)) {
                    e = parseFloat(e);
                    if (e >= 0) return e + "px"
                } else return e
            }
        }
    });
    if (!c.support.opacity) c.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var d = a.style;
            d.zoom = 1;
            var e = c.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                f =
                d.filter || "";
            d.filter = Ea.test(f) ? f.replace(Ea, e) : d.filter + " " + e
        }
    };
    if (t.defaultView && t.defaultView.getComputedStyle) Ga = function (a, b, d) {
        var e;
        d = d.replace(ib, "-$1").toLowerCase();
        if (!(b = a.ownerDocument.defaultView)) return B;
        if (b = b.getComputedStyle(a, null)) {
            e = b.getPropertyValue(d);
            if (e === "" && !c.contains(a.ownerDocument.documentElement, a)) e = c.style(a, d)
        }
        return e
    };
    if (t.documentElement.currentStyle) aa = function (a, b) {
        var d, e, f = a.currentStyle && a.currentStyle[b],
            h = a.style;
        if (!Fa.test(f) && jb.test(f)) {
            d = h.left;
            e = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            h.left = b === "fontSize" ? "1em" : f || 0;
            f = h.pixelLeft + "px";
            h.left = d;
            a.runtimeStyle.left = e
        }
        return f === "" ? "auto" : f
    };
    W = Ga || aa;
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function (a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style.display || c.css(a, "display")) === "none"
        };
        c.expr.filters.visible = function (a) {
            return !c.expr.filters.hidden(a)
        }
    }
    var mb = c.now(),
        nb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ob = /^(?:select|textarea)/i,
        pb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        qb = /^(?:GET|HEAD)$/,
        Ra = /\[\]$/,
        T = /\=\?(&|$)/,
        ja = /\?/,
        rb = /([?&])_=[^&]*/,
        sb = /^(\w+:)?\/\/([^\/?#]+)/,
        tb = /%20/g,
        ub = /#.*$/,
        Ha = c.fn.load;
    c.fn.extend({
        load: function (a, b, d) {
            if (typeof a !== "string" && Ha) return Ha.apply(this, arguments);
            else if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            e = "GET";
            if (b)
                if (c.isFunction(b)) {
                    d = b;
                    b = null
                } else if (typeof b ===
                "object") {
                b = c.param(b, c.ajaxSettings.traditional);
                e = "POST"
            }
            var h = this;
            c.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b,
                complete: function (l, k) {
                    if (k === "success" || k === "notmodified") h.html(f ? c("<div>").append(l.responseText.replace(nb, "")).find(f) : l.responseText);
                    d && h.each(d, [l.responseText, k, l])
                }
            });
            return this
        },
        serialize: function () {
            return c.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function () {
                return this.name &&
                    !this.disabled && (this.checked || ob.test(this.nodeName) || pb.test(this.type))
            }).map(function (a, b) {
                var d = c(this).val();
                return d == null ? null : c.isArray(d) ? c.map(d, function (e) {
                    return {
                        name: b.name,
                        value: e
                    }
                }) : {
                    name: b.name,
                    value: d
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        c.fn[b] = function (d) {
            return this.bind(b, d)
        }
    });
    c.extend({
        get: function (a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = null
            }
            return c.ajax({
                type: "GET",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        getScript: function (a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function (a, b, d) {
            return c.get(a, b, d, "json")
        },
        post: function (a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = {}
            }
            return c.ajax({
                type: "POST",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        ajaxSetup: function (a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return new E.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        ajax: function (a) {
            var b = c.extend(true, {}, c.ajaxSettings, a),
                d, e, f, h = b.type.toUpperCase(),
                l = qb.test(h);
            b.url = b.url.replace(ub, "");
            b.context = a && a.context != null ? a.context : b;
            if (b.data && b.processData && typeof b.data !== "string") b.data = c.param(b.data, b.traditional);
            if (b.dataType === "jsonp") {
                if (h === "GET") T.test(b.url) || (b.url += (ja.test(b.url) ? "&" : "?") + (b.jsonp || "callback") + "=?");
                else if (!b.data ||
                    !T.test(b.data)) b.data = (b.data ? b.data + "&" : "") + (b.jsonp || "callback") + "=?";
                b.dataType = "json"
            }
            if (b.dataType === "json" && (b.data && T.test(b.data) || T.test(b.url))) {
                d = b.jsonpCallback || "jsonp" + mb++;
                if (b.data) b.data = (b.data + "").replace(T, "=" + d + "$1");
                b.url = b.url.replace(T, "=" + d + "$1");
                b.dataType = "script";
                var k = E[d];
                E[d] = function (m) {
                    if (c.isFunction(k)) k(m);
                    else {
                        E[d] = B;
                        try {
                            delete E[d]
                        } catch (p) {}
                    }
                    f = m;
                    c.handleSuccess(b, w, e, f);
                    c.handleComplete(b, w, e, f);
                    r && r.removeChild(A)
                }
            }
            if (b.dataType === "script" && b.cache === null) b.cache =
                false;
            if (b.cache === false && l) {
                var o = c.now(),
                    x = b.url.replace(rb, "$1_=" + o);
                b.url = x + (x === b.url ? (ja.test(b.url) ? "&" : "?") + "_=" + o : "")
            }
            if (b.data && l) b.url += (ja.test(b.url) ? "&" : "?") + b.data;
            b.global && c.active++ === 0 && c.event.trigger("ajaxStart");
            o = (o = sb.exec(b.url)) && (o[1] && o[1].toLowerCase() !== location.protocol || o[2].toLowerCase() !== location.host);
            if (b.dataType === "script" && h === "GET" && o) {
                var r = t.getElementsByTagName("head")[0] || t.documentElement,
                    A = t.createElement("script");
                if (b.scriptCharset) A.charset = b.scriptCharset;
                A.src = b.url;
                if (!d) {
                    var C = false;
                    A.onload = A.onreadystatechange = function () {
                        if (!C && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            C = true;
                            c.handleSuccess(b, w, e, f);
                            c.handleComplete(b, w, e, f);
                            A.onload = A.onreadystatechange = null;
                            r && A.parentNode && r.removeChild(A)
                        }
                    }
                }
                r.insertBefore(A, r.firstChild);
                return B
            }
            var J = false,
                w = b.xhr();
            if (w) {
                b.username ? w.open(h, b.url, b.async, b.username, b.password) : w.open(h, b.url, b.async);
                try {
                    if (b.data != null && !l || a && a.contentType) w.setRequestHeader("Content-Type",
                        b.contentType);
                    if (b.ifModified) {
                        c.lastModified[b.url] && w.setRequestHeader("If-Modified-Since", c.lastModified[b.url]);
                        c.etag[b.url] && w.setRequestHeader("If-None-Match", c.etag[b.url])
                    }
                    o || w.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    w.setRequestHeader("Accept", b.dataType && b.accepts[b.dataType] ? b.accepts[b.dataType] + ", */*; q=0.01" : b.accepts._default)
                } catch (I) {}
                if (b.beforeSend && b.beforeSend.call(b.context, w, b) === false) {
                    b.global && c.active-- === 1 && c.event.trigger("ajaxStop");
                    w.abort();
                    return false
                }
                b.global &&
                    c.triggerGlobal(b, "ajaxSend", [w, b]);
                var L = w.onreadystatechange = function (m) {
                    if (!w || w.readyState === 0 || m === "abort") {
                        J || c.handleComplete(b, w, e, f);
                        J = true;
                        if (w) w.onreadystatechange = c.noop
                    } else if (!J && w && (w.readyState === 4 || m === "timeout")) {
                        J = true;
                        w.onreadystatechange = c.noop;
                        e = m === "timeout" ? "timeout" : !c.httpSuccess(w) ? "error" : b.ifModified && c.httpNotModified(w, b.url) ? "notmodified" : "success";
                        var p;
                        if (e === "success") try {
                            f = c.httpData(w, b.dataType, b)
                        } catch (q) {
                            e = "parsererror";
                            p = q
                        }
                        if (e === "success" || e === "notmodified") d ||
                            c.handleSuccess(b, w, e, f);
                        else c.handleError(b, w, e, p);
                        d || c.handleComplete(b, w, e, f);
                        m === "timeout" && w.abort();
                        if (b.async) w = null
                    }
                };
                try {
                    var g = w.abort;
                    w.abort = function () {
                        w && Function.prototype.call.call(g, w);
                        L("abort")
                    }
                } catch (i) {}
                b.async && b.timeout > 0 && setTimeout(function () {
                    w && !J && L("timeout")
                }, b.timeout);
                try {
                    w.send(l || b.data == null ? null : b.data)
                } catch (n) {
                    c.handleError(b, w, null, n);
                    c.handleComplete(b, w, e, f)
                }
                b.async || L();
                return w
            }
        },
        param: function (a, b) {
            var d = [],
                e = function (h, l) {
                    l = c.isFunction(l) ? l() : l;
                    d[d.length] =
                        encodeURIComponent(h) + "=" + encodeURIComponent(l)
                };
            if (b === B) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery) c.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var f in a) da(f, a[f], b, e);
            return d.join("&").replace(tb, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        handleError: function (a, b, d, e) {
            a.error && a.error.call(a.context, b, d, e);
            a.global && c.triggerGlobal(a, "ajaxError", [b, a, e])
        },
        handleSuccess: function (a, b, d, e) {
            a.success && a.success.call(a.context, e, d, b);
            a.global && c.triggerGlobal(a, "ajaxSuccess",
                [b, a])
        },
        handleComplete: function (a, b, d) {
            a.complete && a.complete.call(a.context, b, d);
            a.global && c.triggerGlobal(a, "ajaxComplete", [b, a]);
            a.global && c.active-- === 1 && c.event.trigger("ajaxStop")
        },
        triggerGlobal: function (a, b, d) {
            (a.context && a.context.url == null ? c(a.context) : c.event).trigger(b, d)
        },
        httpSuccess: function (a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223
            } catch (b) {}
            return false
        },
        httpNotModified: function (a, b) {
            var d = a.getResponseHeader("Last-Modified"),
                e = a.getResponseHeader("Etag");
            if (d) c.lastModified[b] = d;
            if (e) c.etag[b] = e;
            return a.status === 304
        },
        httpData: function (a, b, d) {
            var e = a.getResponseHeader("content-type") || "",
                f = b === "xml" || !b && e.indexOf("xml") >= 0;
            a = f ? a.responseXML : a.responseText;
            f && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (d && d.dataFilter) a = d.dataFilter(a, b);
            if (typeof a === "string")
                if (b === "json" || !b && e.indexOf("json") >= 0) a = c.parseJSON(a);
                else if (b === "script" || !b && e.indexOf("javascript") >= 0) c.globalEval(a);
            return a
        }
    });
    if (E.ActiveXObject) c.ajaxSettings.xhr = function () {
        if (E.location.protocol !== "file:") try {
            return new E.XMLHttpRequest
        } catch (a) {}
        try {
            return new E.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    };
    c.support.ajax = !!c.ajaxSettings.xhr();
    var ea = {},
        vb = /^(?:toggle|show|hide)$/,
        wb = /^([+\-]=)?([\d+.\-]+)(.*)$/,
        ba, pa = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    c.fn.extend({
        show: function (a, b, d) {
            if (a || a === 0) return this.animate(S("show",
                3), a, b, d);
            else {
                d = 0;
                for (var e = this.length; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (!c.data(a, "olddisplay") && b === "none") b = a.style.display = "";
                    b === "" && c.css(a, "display") === "none" && c.data(a, "olddisplay", qa(a.nodeName))
                }
                for (d = 0; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (b === "" || b === "none") a.style.display = c.data(a, "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (a, b, d) {
            if (a || a === 0) return this.animate(S("hide", 3), a, b, d);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    d = c.css(this[a], "display");
                    d !== "none" && c.data(this[a], "olddisplay",
                        d)
                }
                for (a = 0; a < b; a++) this[a].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function (a, b, d) {
            var e = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments);
            else a == null || e ? this.each(function () {
                var f = e ? a : c(this).is(":hidden");
                c(this)[f ? "show" : "hide"]()
            }) : this.animate(S("toggle", 3), a, b, d);
            return this
        },
        fadeTo: function (a, b, d, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, d, e)
        },
        animate: function (a, b, d, e) {
            var f = c.speed(b,
                d, e);
            if (c.isEmptyObject(a)) return this.each(f.complete);
            return this[f.queue === false ? "each" : "queue"](function () {
                var h = c.extend({}, f),
                    l, k = this.nodeType === 1,
                    o = k && c(this).is(":hidden"),
                    x = this;
                for (l in a) {
                    var r = c.camelCase(l);
                    if (l !== r) {
                        a[r] = a[l];
                        delete a[l];
                        l = r
                    }
                    if (a[l] === "hide" && o || a[l] === "show" && !o) return h.complete.call(this);
                    if (k && (l === "height" || l === "width")) {
                        h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none")
                            if (c.support.inlineBlockNeedsLayout)
                                if (qa(this.nodeName) ===
                                    "inline") this.style.display = "inline-block";
                                else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                        else this.style.display = "inline-block"
                    }
                    if (c.isArray(a[l])) {
                        (h.specialEasing = h.specialEasing || {})[l] = a[l][1];
                        a[l] = a[l][0]
                    }
                }
                if (h.overflow != null) this.style.overflow = "hidden";
                h.curAnim = c.extend({}, a);
                c.each(a, function (A, C) {
                    var J = new c.fx(x, h, A);
                    if (vb.test(C)) J[C === "toggle" ? o ? "show" : "hide" : C](a);
                    else {
                        var w = wb.exec(C),
                            I = J.cur() || 0;
                        if (w) {
                            var L = parseFloat(w[2]),
                                g = w[3] || "px";
                            if (g !== "px") {
                                c.style(x, A, (L || 1) + g);
                                I = (L ||
                                    1) / J.cur() * I;
                                c.style(x, A, I + g)
                            }
                            if (w[1]) L = (w[1] === "-=" ? -1 : 1) * L + I;
                            J.custom(I, L, g)
                        } else J.custom(I, C, "")
                    }
                });
                return true
            })
        },
        stop: function (a, b) {
            var d = c.timers;
            a && this.queue([]);
            this.each(function () {
                for (var e = d.length - 1; e >= 0; e--)
                    if (d[e].elem === this) {
                        b && d[e](true);
                        d.splice(e, 1)
                    }
            });
            b || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: S("show", 1),
        slideUp: S("hide", 1),
        slideToggle: S("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        c.fn[a] = function (d, e, f) {
            return this.animate(b,
                d, e, f)
        }
    });
    c.extend({
        speed: function (a, b, d) {
            var e = a && typeof a === "object" ? c.extend({}, a) : {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
            e.old = e.complete;
            e.complete = function () {
                e.queue !== false && c(this).dequeue();
                c.isFunction(e.old) && e.old.call(this)
            };
            return e
        },
        easing: {
            linear: function (a, b, d, e) {
                return d + e * a
            },
            swing: function (a, b, d, e) {
                return (-Math.cos(a *
                    Math.PI) / 2 + 0.5) * e + d
            }
        },
        timers: [],
        fx: function (a, b, d) {
            this.options = b;
            this.elem = a;
            this.prop = d;
            if (!b.orig) b.orig = {}
        }
    });
    c.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a = parseFloat(c.css(this.elem, this.prop));
            return a && a > -1E4 ? a : 0
        },
        custom: function (a, b, d) {
            function e(l) {
                return f.step(l)
            }
            var f = this,
                h = c.fx;
            this.startTime = c.now();
            this.start = a;
            this.end = b;
            this.unit = d || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            e.elem = this.elem;
            if (e() && c.timers.push(e) && !ba) ba = setInterval(h.tick, h.interval)
        },
        show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = c.now(),
                d = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var e in this.options.curAnim)
                    if (this.options.curAnim[e] !== true) d = false;
                if (d) {
                    if (this.options.overflow != null && !c.support.shrinkWrapBlocks) {
                        var f = this.elem,
                            h = this.options;
                        c.each(["", "X", "Y"], function (k, o) {
                            f.style["overflow" + o] = h.overflow[k]
                        })
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide ||
                        this.options.show)
                        for (var l in this.options.curAnim) c.style(this.elem, l, this.options.orig[l]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                a = b - this.startTime;
                this.state = a / this.options.duration;
                b = this.options.easing || (c.easing.swing ? "swing" : "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || b](this.state, a, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function () {
            for (var a =
                    c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(ba);
            ba = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit;
                else a.elem[a.prop] = a.now
            }
        }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a ===
                b.elem
        }).length
    };
    var xb = /^t(?:able|d|h)$/i,
        Ia = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect" in t.documentElement ? function (a) {
        var b = this[0],
            d;
        if (a) return this.each(function (l) {
            c.offset.setOffset(this, a, l)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch (e) {}
        var f = b.ownerDocument,
            h = f.documentElement;
        if (!d || !c.contains(h, b)) return d || {
            top: 0,
            left: 0
        };
        b = f.body;
        f = fa(f);
        return {
            top: d.top + (f.pageYOffset || c.support.boxModel &&
                h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0),
            left: d.left + (f.pageXOffset || c.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)
        }
    } : function (a) {
        var b = this[0];
        if (a) return this.each(function (x) {
            c.offset.setOffset(this, a, x)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        c.offset.initialize();
        var d, e = b.offsetParent,
            f = b.ownerDocument,
            h = f.documentElement,
            l = f.body;
        d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var k = b.offsetTop, o = b.offsetLeft;
            (b = b.parentNode) && b !== l && b !== h;) {
            if (c.offset.supportsFixedPosition && d.position === "fixed") break;
            d = f ? f.getComputedStyle(b, null) : b.currentStyle;
            k -= b.scrollTop;
            o -= b.scrollLeft;
            if (b === e) {
                k += b.offsetTop;
                o += b.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && xb.test(b.nodeName))) {
                    k += parseFloat(d.borderTopWidth) || 0;
                    o += parseFloat(d.borderLeftWidth) || 0
                }
                e = b.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible") {
                k +=
                    parseFloat(d.borderTopWidth) || 0;
                o += parseFloat(d.borderLeftWidth) || 0
            }
            d = d
        }
        if (d.position === "relative" || d.position === "static") {
            k += l.offsetTop;
            o += l.offsetLeft
        }
        if (c.offset.supportsFixedPosition && d.position === "fixed") {
            k += Math.max(h.scrollTop, l.scrollTop);
            o += Math.max(h.scrollLeft, l.scrollLeft)
        }
        return {
            top: k,
            left: o
        }
    };
    c.offset = {
        initialize: function () {
            var a = t.body,
                b = t.createElement("div"),
                d, e, f, h = parseFloat(c.css(a, "marginTop")) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            d = b.firstChild;
            e = d.firstChild;
            f = d.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = e.offsetTop !== 5;
            this.doesAddBorderForTableAndCells =
                f.offsetTop === 5;
            e.style.position = "fixed";
            e.style.top = "20px";
            this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
            e.style.position = e.style.top = "";
            d.style.overflow = "hidden";
            d.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
            a.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                d = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseFloat(c.css(a,
                    "marginTop")) || 0;
                d += parseFloat(c.css(a, "marginLeft")) || 0
            }
            return {
                top: b,
                left: d
            }
        },
        setOffset: function (a, b, d) {
            var e = c.css(a, "position");
            if (e === "static") a.style.position = "relative";
            var f = c(a),
                h = f.offset(),
                l = c.css(a, "top"),
                k = c.css(a, "left"),
                o = e === "absolute" && c.inArray("auto", [l, k]) > -1;
            e = {};
            var x = {};
            if (o) x = f.position();
            l = o ? x.top : parseInt(l, 10) || 0;
            k = o ? x.left : parseInt(k, 10) || 0;
            if (c.isFunction(b)) b = b.call(a, d, h);
            if (b.top != null) e.top = b.top - h.top + l;
            if (b.left != null) e.left = b.left - h.left + k;
            "using" in b ? b.using.call(a,
                e) : f.css(e)
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                d = this.offset(),
                e = Ia.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            d.top -= parseFloat(c.css(a, "marginTop")) || 0;
            d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || t.body; a && !Ia.test(a.nodeName) &&
                    c.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"], function (a, b) {
        var d = "scroll" + b;
        c.fn[d] = function (e) {
            var f = this[0],
                h;
            if (!f) return null;
            if (e !== B) return this.each(function () {
                if (h = fa(this)) h.scrollTo(!a ? e : c(h).scrollLeft(), a ? e : c(h).scrollTop());
                else this[d] = e
            });
            else return (h = fa(f)) ? "pageXOffset" in h ? h[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && h.document.documentElement[d] || h.document.body[d] : f[d]
        }
    });
    c.each(["Height", "Width"], function (a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function () {
            return this[0] ? parseFloat(c.css(this[0], d, "padding")) : null
        };
        c.fn["outer" + b] = function (e) {
            return this[0] ? parseFloat(c.css(this[0], d, e ? "margin" : "border")) : null
        };
        c.fn[d] = function (e) {
            var f = this[0];
            if (!f) return e == null ? null : this;
            if (c.isFunction(e)) return this.each(function (l) {
                var k = c(this);
                k[d](e.call(this, l, k[d]()))
            });
            if (c.isWindow(f)) return f.document.compatMode === "CSS1Compat" && f.document.documentElement["client" + b] || f.document.body["client" + b];
            else if (f.nodeType === 9) return Math.max(f.documentElement["client" +
                b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]);
            else if (e === B) {
                f = c.css(f, d);
                var h = parseFloat(f);
                return c.isNaN(h) ? f : h
            } else return this.css(d, typeof e === "string" ? e : e + "px")
        }
    })
})(window);; /**/
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/misc/jquery.once.js. */
(function ($) {
    var cache = {},
        uuid = 0;
    $.fn.once = function (id, fn) {
        if (typeof id != 'string') {
            if (!(id in cache)) cache[id] = ++uuid;
            if (!fn) fn = id;
            id = 'jquery-once-' + cache[id]
        };
        var name = id + '-processed',
            elements = this.not('.' + name).addClass(name);
        return $.isFunction(fn) ? elements.each(fn) : elements
    };
    $.fn.removeOnce = function (id, fn) {
        var name = id + '-processed',
            elements = this.filter('.' + name).removeClass(name);
        return $.isFunction(fn) ? elements.each(fn) : elements
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/misc/jquery.once.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/misc/drupal.js. */
var Drupal = Drupal || {
    settings: {},
    behaviors: {},
    locale: {}
};
jQuery.noConflict();
(function ($) {
    var jquery_init = $.fn.init;
    $.fn.init = function (selector, context, rootjQuery) {
        if (selector && typeof selector === 'string') {
            var hash_position = selector.indexOf('#');
            if (hash_position >= 0) {
                var bracket_position = selector.indexOf('<');
                if (bracket_position > hash_position) throw 'Syntax error, unrecognized expression: ' + selector
            }
        };
        return jquery_init.call(this, selector, context, rootjQuery)
    };
    $.fn.init.prototype = jquery_init.prototype;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function (s) {
            if (s.crossDomain) s.contents.script = false
        })
    } else if ($.httpData) {
        var jquery_httpData = $.httpData;
        $.httpData = function (xhr, type, s) {
            if (!type && !Drupal.urlIsLocal(s.url)) {
                var content_type = xhr.getResponseHeader('content-type') || '';
                if (content_type.indexOf('javascript') >= 0) type = 'text'
            };
            return jquery_httpData.call(this, xhr, type, s)
        };
        $.httpData.prototype = jquery_httpData.prototype
    };
    Drupal.attachBehaviors = function (context, settings) {
        context = context || document;
        settings = settings || Drupal.settings;
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.attach)) this.attach(context, settings)
        })
    };
    Drupal.detachBehaviors = function (context, settings, trigger) {
        context = context || document;
        settings = settings || Drupal.settings;
        trigger = trigger || 'unload';
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.detach)) this.detach(context, settings, trigger)
        })
    };
    Drupal.checkPlain = function (str) {
        var character, regex, replace = {
            '&': '&amp;',
            "'": '&#39;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        str = String(str);
        for (character in replace)
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character])
            };
        return str
    };
    Drupal.formatString = function (str, args) {
        for (var key in args)
            if (args.hasOwnProperty(key)) switch (key.charAt(0)) {
                case '@':
                    args[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    break;
                default:
                    args[key] = Drupal.theme('placeholder', args[key]);
                    break
            };
        return Drupal.stringReplace(str, args, null)
    };
    Drupal.stringReplace = function (str, args, keys) {
        if (str.length === 0) return str;
        if (!$.isArray(keys)) {
            keys = [];
            for (var k in args)
                if (args.hasOwnProperty(k)) keys.push(k);
            keys.sort(function (a, b) {
                return a.length - b.length
            })
        };
        if (keys.length === 0) return str;
        var key = keys.pop(),
            fragments = str.split(key);
        if (keys.length)
            for (var i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
        return fragments.join(args[key])
    };
    Drupal.t = function (str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) str = Drupal.locale.strings[options.context][str];
        if (args) str = Drupal.formatString(str, args);
        return str
    };
    Drupal.formatPlural = function (count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);
        if (index == 0) {
            return Drupal.t(singular, args, options)
        } else if (index == 1) {
            return Drupal.t(plural, args, options)
        } else {
            args['@count[' + index + ']'] = args['@count'];
            delete args['@count'];
            return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options)
        }
    };
    Drupal.absoluteUrl = function (url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url)
        } catch (e) {};
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href
    };
    Drupal.urlIsLocal = function (url) {
        var absoluteUrl = Drupal.absoluteUrl(url),
            protocol = location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
        var baseUrl = protocol + '//' + location.host + Drupal.settings.basePath.slice(0, -1);
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl)
        } catch (e) {};
        try {
            baseUrl = decodeURIComponent(baseUrl)
        } catch (e) {};
        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0
    };
    Drupal.theme = function (func) {
        var args = Array.prototype.slice.apply(arguments, [1]);
        return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args)
    };
    Drupal.freezeHeight = function () {
        Drupal.unfreezeHeight();
        $('<div id="freeze-height"></div>').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1px',
            height: $('body').css('height')
        }).appendTo('body')
    };
    Drupal.unfreezeHeight = function () {
        $('#freeze-height').remove()
    };
    Drupal.encodePath = function (item, uri) {
        uri = uri || location.href;
        return encodeURIComponent(item).replace(/%2F/g, '/')
    };
    Drupal.getSelection = function (element) {
        if (typeof element.selectionStart != 'number' && document.selection) {
            var range1 = document.selection.createRange(),
                range2 = range1.duplicate();
            range2.moveToElementText(element);
            range2.setEndPoint('EndToEnd', range1);
            var start = range2.text.length - range1.text.length,
                end = start + range1.text.length;
            return {
                start: start,
                end: end
            }
        };
        return {
            start: element.selectionStart,
            end: element.selectionEnd
        }
    };
    Drupal.beforeUnloadCalled = false;
    $(window).bind('beforeunload pagehide', function () {
        Drupal.beforeUnloadCalled = true
    });
    Drupal.displayAjaxError = function (message) {
        if (!Drupal.beforeUnloadCalled) alert(message)
    };
    Drupal.ajaxError = function (xmlhttp, uri, customMessage) {
        var statusCode, statusText, pathText, responseText, readyStateText, message;
        if (xmlhttp.status) {
            statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") + "\n" + Drupal.t("HTTP Result Code: !status", {
                '!status': xmlhttp.status
            })
        } else statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
        statusCode += "\n" + Drupal.t("Debugging information follows.");
        pathText = "\n" + Drupal.t("Path: !uri", {
            '!uri': uri
        });
        statusText = '';
        try {
            statusText = "\n" + Drupal.t("StatusText: !statusText", {
                '!statusText': $.trim(xmlhttp.statusText)
            })
        } catch (e) {};
        responseText = '';
        try {
            responseText = "\n" + Drupal.t("ResponseText: !responseText", {
                '!responseText': $.trim(xmlhttp.responseText)
            })
        } catch (e) {};
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "");
        responseText = responseText.replace(/[\n]+\s+/g, "\n");
        readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {
            '!readyState': xmlhttp.readyState
        })) : "";
        customMessage = customMessage ? ("\n" + Drupal.t("CustomMessage: !customMessage", {
            '!customMessage': customMessage
        })) : "";
        message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
        return message
    };
    $('html').addClass('js');
    document.cookie = 'has_js=1; path=/';
    $(function () {
        if (jQuery.support.positionFixed === undefined) {
            var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
            jQuery.support.positionFixed = el[0].offsetTop === 10;
            el.remove()
        }
    });
    $(function () {
        Drupal.attachBehaviors(document, Drupal.settings)
    });
    Drupal.theme.prototype = {
        placeholder: function (str) {
            return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>'
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/misc/drupal.js. */

/*!
 * jQuery UI 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function (c, j) {
    function k(a) {
        return !c(a).parents().andSelf().filter(function () {
            return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
        }).length
    }
    c.ui = c.ui || {};
    if (!c.ui.version) {
        c.extend(c.ui, {
            version: "1.8.7",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        c.fn.extend({
            _focus: c.fn.focus,
            focus: function (a, b) {
                return typeof a === "number" ? this.each(function () {
                    var d = this;
                    setTimeout(function () {
                        c(d).focus();
                        b && b.call(d)
                    }, a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function () {
                var a;
                a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(c.curCSS(this,
                        "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
            },
            zIndex: function (a) {
                if (a !== j) return this.css("zIndex", a);
                if (this.length) {
                    a = c(this[0]);
                    for (var b; a.length && a[0] !== document;) {
                        b = a.css("position");
                        if (b === "absolute" || b === "relative" || b === "fixed") {
                            b = parseInt(a.css("zIndex"), 10);
                            if (!isNaN(b) && b !== 0) return b
                        }
                        a = a.parent()
                    }
                }
                return 0
            },
            disableSelection: function () {
                return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.each(["Width", "Height"], function (a, b) {
            function d(f, g, l, m) {
                c.each(e, function () {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
                    if (l) g -= parseFloat(c.curCSS(f,
                        "border" + this + "Width", true)) || 0;
                    if (m) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                });
                return g
            }
            var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                h = b.toLowerCase(),
                i = {
                    innerWidth: c.fn.innerWidth,
                    innerHeight: c.fn.innerHeight,
                    outerWidth: c.fn.outerWidth,
                    outerHeight: c.fn.outerHeight
                };
            c.fn["inner" + b] = function (f) {
                if (f === j) return i["inner" + b].call(this);
                return this.each(function () {
                    c(this).css(h, d(this, f) + "px")
                })
            };
            c.fn["outer" + b] = function (f, g) {
                if (typeof f !== "number") return i["outer" + b].call(this, f);
                return this.each(function () {
                    c(this).css(h,
                        d(this, f, true, g) + "px")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: function (a, b, d) {
                return !!c.data(a, d[3])
            },
            focusable: function (a) {
                var b = a.nodeName.toLowerCase(),
                    d = c.attr(a, "tabindex");
                if ("area" === b) {
                    b = a.parentNode;
                    d = b.name;
                    if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false;
                    a = c("img[usemap=#" + d + "]")[0];
                    return !!a && k(a)
                }
                return (/input|select|textarea|button|object/.test(b) ? !a.disabled : "a" == b ? a.href || !isNaN(d) : !isNaN(d)) && k(a)
            },
            tabbable: function (a) {
                var b = c.attr(a, "tabindex");
                return (isNaN(b) || b >= 0) && c(a).is(":focusable")
            }
        });
        c(function () {
            var a = document.body,
                b = a.appendChild(b = document.createElement("div"));
            c.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            c.support.minHeight = b.offsetHeight === 100;
            c.support.selectstart = "onselectstart" in b;
            a.removeChild(b).style.display = "none"
        });
        c.extend(c.ui, {
            plugin: {
                add: function (a, b, d) {
                    a = c.ui[a].prototype;
                    for (var e in d) {
                        a.plugins[e] = a.plugins[e] || [];
                        a.plugins[e].push([b, d[e]])
                    }
                },
                call: function (a, b, d) {
                    if ((b = a.plugins[b]) && a.element[0].parentNode)
                        for (var e = 0; e < b.length; e++) a.options[b[e][0]] &&
                            b[e][1].apply(a.element, d)
                }
            },
            contains: function (a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
            },
            hasScroll: function (a, b) {
                if (c(a).css("overflow") === "hidden") return false;
                b = b && b === "left" ? "scrollLeft" : "scrollTop";
                var d = false;
                if (a[b] > 0) return true;
                a[b] = 1;
                d = a[b] > 0;
                a[b] = 0;
                return d
            },
            isOverAxis: function (a, b, d) {
                return a > b && a < b + d
            },
            isOver: function (a, b, d, e, h, i) {
                return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
            }
        })
    }
})(jQuery);; /**/

/*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
    if (b.cleanData) {
        var k = b.cleanData;
        b.cleanData = function (a) {
            for (var c = 0, d;
                (d = a[c]) != null; c++) b(d).triggerHandler("remove");
            k(a)
        }
    } else {
        var l = b.fn.remove;
        b.fn.remove = function (a, c) {
            return this.each(function () {
                if (!c)
                    if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () {
                        b(this).triggerHandler("remove")
                    });
                return l.call(b(this), a, c)
            })
        }
    }
    b.widget = function (a, c, d) {
        var e = a.split(".")[0],
            f;
        a = a.split(".")[1];
        f = e + "-" + a;
        if (!d) {
            d = c;
            c = b.Widget
        }
        b.expr[":"][f] = function (h) {
            return !!b.data(h,
                a)
        };
        b[e] = b[e] || {};
        b[e][a] = function (h, g) {
            arguments.length && this._createWidget(h, g)
        };
        c = new c;
        c.options = b.extend(true, {}, c.options);
        b[e][a].prototype = b.extend(true, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        }, d);
        b.widget.bridge(a, b[e][a])
    };
    b.widget.bridge = function (a, c) {
        b.fn[a] = function (d) {
            var e = typeof d === "string",
                f = Array.prototype.slice.call(arguments, 1),
                h = this;
            d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
            if (e && d.charAt(0) === "_") return h;
            e ? this.each(function () {
                var g = b.data(this, a),
                    i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                if (i !== g && i !== j) {
                    h = i;
                    return false
                }
            }) : this.each(function () {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d, this))
            });
            return h
        }
    };
    b.Widget = function (a, c) {
        arguments.length && this._createWidget(a, c)
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function (a, c) {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options = b.extend(true, {}, this.options,
                this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function () {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function () {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (a, c) {
            var d = a;
            if (arguments.length === 0) return b.extend({}, this.options);
            if (typeof a === "string") {
                if (c === j) return this.options[a];
                d = {};
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function (a) {
            var c = this;
            b.each(a, function (d, e) {
                c._setOption(d, e)
            });
            return this
        },
        _setOption: function (a, c) {
            this.options[a] = c;
            if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function () {
            return this._setOption("disabled", false)
        },
        disable: function () {
            return this._setOption("disabled", true)
        },
        _trigger: function (a, c, d) {
            var e = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent) {
                a = b.event.props.length;
                for (var f; a;) {
                    f = b.event.props[--a];
                    c[f] = c.originalEvent[f]
                }
            }
            this.element.trigger(c, d);
            return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        }
    }
})(jQuery);; /**/

/*!
 * jQuery UI Mouse 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (c) {
    c.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function (b) {
                return a._mouseDown(b)
            }).bind("click." + this.widgetName, function (b) {
                if (true === c.data(b.target, a.widgetName + ".preventClickEvent")) {
                    c.removeData(b.target, a.widgetName + ".preventClickEvent");
                    b.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (a) {
            a.originalEvent =
                a.originalEvent || {};
            if (!a.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var b = this,
                    e = a.which == 1,
                    f = typeof this.options.cancel == "string" ? c(a.target).parents().add(a.target).filter(this.options.cancel).length : false;
                if (!e || f || !this._mouseCapture(a)) return true;
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function () {
                    b.mouseDelayMet = true
                }, this.options.delay);
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                    this._mouseStarted =
                        this._mouseStart(a) !== false;
                    if (!this._mouseStarted) {
                        a.preventDefault();
                        return true
                    }
                }
                this._mouseMoveDelegate = function (d) {
                    return b._mouseMove(d)
                };
                this._mouseUpDelegate = function (d) {
                    return b._mouseUp(d)
                };
                c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return a.originalEvent.mouseHandled = true
            }
        },
        _mouseMove: function (a) {
            if (c.browser.msie && !(document.documentMode >= 9) && !a.button) return this._mouseUp(a);
            if (this._mouseStarted) {
                this._mouseDrag(a);
                return a.preventDefault()
            }
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))(this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a);
            return !this._mouseStarted
        },
        _mouseUp: function (a) {
            c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                a.target == this._mouseDownEvent.target && c.data(a.target, this.widgetName + ".preventClickEvent",
                    true);
                this._mouseStop(a)
            }
            return false
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return true
        }
    })
})(jQuery);; /**/

/*
 * jQuery UI Sortable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.sortable", d.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3
        },
        _create: function () {
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) : false;
            this.offset = this.element.offset();
            this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function (a, b) {
            if (a === "disabled") {
                this.options[a] = b;
                this.widget()[b ? "addClass" : "removeClass"]("ui-sortable-disabled")
            } else d.Widget.prototype._setOption.apply(this,
                arguments)
        },
        _mouseCapture: function (a, b) {
            if (this.reverting) return false;
            if (this.options.disabled || this.options.type == "static") return false;
            this._refreshItems(a);
            var c = null,
                e = this;
            d(a.target).parents().each(function () {
                if (d.data(this, "sortable-item") == e) {
                    c = d(this);
                    return false
                }
            });
            if (d.data(a.target, "sortable-item") == e) c = d(a.target);
            if (!c) return false;
            if (this.options.handle && !b) {
                var f = false;
                d(this.options.handle, c).find("*").andSelf().each(function () {
                    if (this == a.target) f = true
                });
                if (!f) return false
            }
            this.currentItem =
                c;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function (a, b, c) {
            b = this.options;
            var e = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] != this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            b.containment && this._setContainment();
            if (b.cursor) {
                if (d("body").css("cursor")) this._storedCursor = d("body").css("cursor");
                d("body").css("cursor", b.cursor)
            }
            if (b.opacity) {
                if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
                this.helper.css("opacity", b.opacity)
            }
            if (b.zIndex) {
                if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
                this.helper.css("zIndex", b.zIndex)
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") this.overflowOffset = this.scrollParent.offset();
            this._trigger("start",
                a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!c)
                for (c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("activate", a, e._uiHash(this));
            if (d.ui.ddmanager) d.ui.ddmanager.current = this;
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(a);
            return true
        },
        _mouseDrag: function (a) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs;
            if (this.options.scroll) {
                var b = this.options,
                    c = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed;
                    else if (a.pageY - this.overflowOffset.top < b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed;
                    if (this.overflowOffset.left +
                        this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed;
                    else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed
                } else {
                    if (a.pageY - d(document).scrollTop() < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() - b.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() +
                        b.scrollSpeed);
                    if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() - b.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() + b.scrollSpeed)
                }
                c !== false && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left +
                "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (b = this.items.length - 1; b >= 0; b--) {
                c = this.items[b];
                var e = c.item[0],
                    f = this._intersectsWithPointer(c);
                if (f)
                    if (e != this.currentItem[0] && this.placeholder[f == 1 ? "next" : "prev"]()[0] != e && !d.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !d.ui.contains(this.element[0], e) : true)) {
                        this.direction = f == 1 ? "down" : "up";
                        if (this.options.tolerance == "pointer" || this._intersectsWithSides(c)) this._rearrange(a,
                            c);
                        else break;
                        this._trigger("change", a, this._uiHash());
                        break
                    }
            }
            this._contactContainers(a);
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function (a, b) {
            if (a) {
                d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var c = this;
                    b = c.placeholder.offset();
                    c.reverting = true;
                    d(this.helper).animate({
                        left: b.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] ==
                            document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: b.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        c._clear(a)
                    })
                } else this._clear(a, b);
                return false
            }
        },
        cancel: function () {
            var a = this;
            if (this.dragging) {
                this._mouseUp();
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) {
                    this.containers[b]._trigger("deactivate",
                        null, a._uiHash(this));
                    if (this.containers[b].containerCache.over) {
                        this.containers[b]._trigger("out", null, a._uiHash(this));
                        this.containers[b].containerCache.over = 0
                    }
                }
            }
            this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
            d.extend(this, {
                helper: null,
                dragging: false,
                reverting: false,
                _noFinalSort: null
            });
            this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) :
                d(this.domPosition.parent).prepend(this.currentItem);
            return this
        },
        serialize: function (a) {
            var b = this._getItemsAsjQuery(a && a.connected),
                c = [];
            a = a || {};
            d(b).each(function () {
                var e = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/);
                if (e) c.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2]))
            });
            !c.length && a.key && c.push(a.key + "=");
            return c.join("&")
        },
        toArray: function (a) {
            var b = this._getItemsAsjQuery(a && a.connected),
                c = [];
            a = a || {};
            b.each(function () {
                c.push(d(a.item || this).attr(a.attribute ||
                    "id") || "")
            });
            return c
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                e = this.positionAbs.top,
                f = e + this.helperProportions.height,
                g = a.left,
                h = g + a.width,
                i = a.top,
                k = i + a.height,
                j = this.offset.click.top,
                l = this.offset.click.left;
            j = e + j > i && e + j < k && b + l > g && b + l < h;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : g < b +
                this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < h && i < e + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < k
        },
        _intersectsWithPointer: function (a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var c = this._getDragHorizontalDirection();
            if (!b) return false;
            return this.floating ? c && c == "right" || a == "down" ? 2 : 1 : a && (a == "down" ?
                2 : 1)
        },
        _intersectsWithSides: function (a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var c = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? e == "right" && a || e == "left" && !a : c && (c == "down" && b || c == "up" && !b)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            this._refreshItems(a);
            this.refreshPositions();
            return this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (a) {
            var b = [],
                c = [],
                e = this._connectWith();
            if (e && a)
                for (a = e.length - 1; a >= 0; a--)
                    for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
                        var h = d.data(f[g], "sortable");
                        if (h && h !=
                            this && !h.options.disabled) c.push([d.isFunction(h.options.items) ? h.options.items.call(h.element) : d(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            c.push([d.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = c.length - 1; a >= 0; a--) c[a][0].each(function () {
                b.push(this)
            });
            return d(b)
        },
        _removeCurrentsFromItems: function () {
            for (var a =
                    this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++)
                for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function (a) {
            this.items = [];
            this.containers = [this];
            var b = this.items,
                c = [
                    [d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                        item: this.currentItem
                    }) : d(this.options.items, this.element), this]
                ],
                e = this._connectWith();
            if (e)
                for (var f = e.length - 1; f >= 0; f--)
                    for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
                        var i = d.data(g[h], "sortable");
                        if (i && i != this && !i.options.disabled) {
                            c.push([d.isFunction(i.options.items) ? i.options.items.call(i.element[0], a, {
                                item: this.currentItem
                            }) : d(i.options.items, i.element), i]);
                            this.containers.push(i)
                        }
                    }
            for (f = c.length - 1; f >= 0; f--) {
                a = c[f][1];
                e = c[f][0];
                h = 0;
                for (g = e.length; h < g; h++) {
                    i = d(e[h]);
                    i.data("sortable-item", a);
                    b.push({
                        item: i,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (a) {
            if (this.offsetParent && this.helper) this.offset.parent = this._getParentOffset();
            for (var b = this.items.length - 1; b >=
                0; b--) {
                var c = this.items[b],
                    e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item;
                if (!a) {
                    c.width = e.outerWidth();
                    c.height = e.outerHeight()
                }
                e = e.offset();
                c.left = e.left;
                c.top = e.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (b = this.containers.length - 1; b >= 0; b--) {
                    e = this.containers[b].element.offset();
                    this.containers[b].containerCache.left = e.left;
                    this.containers[b].containerCache.top = e.top;
                    this.containers[b].containerCache.width =
                        this.containers[b].element.outerWidth();
                    this.containers[b].containerCache.height = this.containers[b].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function (a) {
            var b = a || this,
                c = b.options;
            if (!c.placeholder || c.placeholder.constructor == String) {
                var e = c.placeholder;
                c.placeholder = {
                    element: function () {
                        var f = d(document.createElement(b.currentItem[0].nodeName)).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!e) f.style.visibility = "hidden";
                        return f
                    },
                    update: function (f, g) {
                        if (!(e && !c.forcePlaceholderSize)) {
                            g.height() || g.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10));
                            g.width() || g.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            c.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (a) {
            for (var b =
                    null, c = null, e = this.containers.length - 1; e >= 0; e--)
                if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0]))
                    if (this._intersectsWith(this.containers[e].containerCache)) {
                        if (!(b && d.ui.contains(this.containers[e].element[0], b.element[0]))) {
                            b = this.containers[e];
                            c = e
                        }
                    } else if (this.containers[e].containerCache.over) {
                this.containers[e]._trigger("out", a, this._uiHash(this));
                this.containers[e].containerCache.over = 0
            }
            if (b)
                if (this.containers.length === 1) {
                    this.containers[c]._trigger("over", a, this._uiHash(this));
                    this.containers[c].containerCache.over = 1
                } else if (this.currentContainer != this.containers[c]) {
                b = 1E4;
                e = null;
                for (var f = this.positionAbs[this.containers[c].floating ? "left" : "top"], g = this.items.length - 1; g >= 0; g--)
                    if (d.ui.contains(this.containers[c].element[0], this.items[g].item[0])) {
                        var h = this.items[g][this.containers[c].floating ? "left" : "top"];
                        if (Math.abs(h - f) < b) {
                            b = Math.abs(h - f);
                            e = this.items[g]
                        }
                    } if (e || this.options.dropOnEmpty) {
                    this.currentContainer = this.containers[c];
                    e ? this._rearrange(a, e, null, true) : this._rearrange(a,
                        null, this.containers[c].element, true);
                    this._trigger("change", a, this._uiHash());
                    this.containers[c]._trigger("change", a, this._uiHash(this));
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[c]._trigger("over", a, this._uiHash(this));
                    this.containers[c].containerCache.over = 1
                }
            }
        },
        _createHelper: function (a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : b.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length ||
                d(b.appendTo != "parent" ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
            if (a[0] == this.currentItem[0]) this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            };
            if (a[0].style.width == "" || b.forceHelperSize) a.width(this.currentItem.width());
            if (a[0].style.height == "" || b.forceHelperSize) a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function (a) {
            if (typeof a ==
                "string") a = a.split(" ");
            if (d.isArray(a)) a = {
                left: +a[0],
                top: +a[1] || 0
            };
            if ("left" in a) this.offset.click.left = a.left + this.margins.left;
            if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top" in a) this.offset.click.top = a.top + this.margins.top;
            if ("bottom" in a) this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition ==
                "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a = {
                top: 0,
                left: 0
            };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition ==
                "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var a = this.options;
            if (a.containment == "parent") a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height -
                this.margins.top
            ];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var b = d(a.containment)[0];
                a = d(a.containment).offset();
                var c = d(b).css("overflow") != "hidden";
                this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"),
                    10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (a, b) {
            if (!b) b = this.position;
            a = a == "absolute" ? 1 : -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ?
                this.offsetParent : this.scrollParent,
                e = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft()) * a)
            }
        },
        _generatePosition: function (a) {
            var b =
                this.options,
                c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                e = /(html|body)/i.test(c[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) this.offset.relative = this._getRelativeOffset();
            var f = a.pageX,
                g = a.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (a.pageX - this.offset.click.left < this.containment[0]) f = this.containment[0] +
                        this.offset.click.left;
                    if (a.pageY - this.offset.click.top < this.containment[1]) g = this.containment[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > this.containment[2]) f = this.containment[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > this.containment[3]) g = this.containment[3] + this.offset.click.top
                }
                if (b.grid) {
                    g = this.originalPageY + Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1];
                    g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ?
                        g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g;
                    f = this.originalPageX + Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0];
                    f = this.containment ? !(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f : !(f - this.offset.click.left < this.containment[0]) ? f - b.grid[0] : f + b.grid[0] : f
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() :
                    e ? 0 : c.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, e) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var f = this,
                g = this.counter;
            window.setTimeout(function () {
                g ==
                    f.counter && f.refreshPositions(!e)
            }, 0)
        },
        _clear: function (a, b) {
            this.reverting = false;
            var c = [];
            !this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS)
                    if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static") this._storedCSS[e] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !b && c.push(function (f) {
                this._trigger("receive",
                    f, this._uiHash(this.fromOutside))
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !b) c.push(function (f) {
                this._trigger("update", f, this._uiHash())
            });
            if (!d.ui.contains(this.element[0], this.currentItem[0])) {
                b || c.push(function (f) {
                    this._trigger("remove", f, this._uiHash())
                });
                for (e = this.containers.length - 1; e >= 0; e--)
                    if (d.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !b) {
                        c.push(function (f) {
                            return function (g) {
                                f._trigger("receive",
                                    g, this._uiHash(this))
                            }
                        }.call(this, this.containers[e]));
                        c.push(function (f) {
                            return function (g) {
                                f._trigger("update", g, this._uiHash(this))
                            }
                        }.call(this, this.containers[e]))
                    }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                b || c.push(function (f) {
                    return function (g) {
                        f._trigger("deactivate", g, this._uiHash(this))
                    }
                }.call(this, this.containers[e]));
                if (this.containers[e].containerCache.over) {
                    c.push(function (f) {
                        return function (g) {
                            f._trigger("out", g, this._uiHash(this))
                        }
                    }.call(this, this.containers[e]));
                    this.containers[e].containerCache.over =
                        0
                }
            }
            this._storedCursor && d("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (e = 0; e < c.length; e++) c[e].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return false
            }
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!b) {
                for (e = 0; e < c.length; e++) c[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function () {
            d.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
        },
        _uiHash: function (a) {
            var b = a || this;
            return {
                helper: b.helper,
                placeholder: b.placeholder || d([]),
                position: b.position,
                originalPosition: b.originalPosition,
                offset: b.positionAbs,
                item: b.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    d.extend(d.ui.sortable, {
        version: "1.8.7"
    })
})(jQuery);; /**/

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};; /**/

/*!
 * jQuery Form Plugin
 * version: 2.52 (07-DEC-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;
(function (b) {
    function q() {
        if (b.fn.ajaxSubmit.debug) {
            var a = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            if (window.console && window.console.log) window.console.log(a);
            else window.opera && window.opera.postError && window.opera.postError(a)
        }
    }
    b.fn.ajaxSubmit = function (a) {
        function f() {
            function t() {
                var o = i.attr("target"),
                    m = i.attr("action");
                l.setAttribute("target", u);
                l.getAttribute("method") != "POST" && l.setAttribute("method", "POST");
                l.getAttribute("action") != e.url && l.setAttribute("action", e.url);
                e.skipEncodingOverride || i.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                e.timeout && setTimeout(function () {
                    F = true;
                    s()
                }, e.timeout);
                var v = [];
                try {
                    if (e.extraData)
                        for (var w in e.extraData) v.push(b('<input type="hidden" name="' + w + '" value="' + e.extraData[w] + '" />').appendTo(l)[0]);
                    r.appendTo("body");
                    r.data("form-plugin-onload", s);
                    l.submit()
                } finally {
                    l.setAttribute("action", m);
                    o ? l.setAttribute("target", o) : i.removeAttr("target");
                    b(v).remove()
                }
            }

            function s() {
                if (!G) {
                    r.removeData("form-plugin-onload");
                    var o = true;
                    try {
                        if (F) throw "timeout";
                        p = x.contentWindow ? x.contentWindow.document : x.contentDocument ? x.contentDocument : x.document;
                        var m = e.dataType == "xml" || p.XMLDocument || b.isXMLDoc(p);
                        q("isXml=" + m);
                        if (!m && window.opera && (p.body == null || p.body.innerHTML == ""))
                            if (--K) {
                                q("requeing onLoad callback, DOM not available");
                                setTimeout(s, 250);
                                return
                            } G = true;
                        j.responseText = p.documentElement ? p.documentElement.innerHTML : null;
                        j.responseXML = p.XMLDocument ? p.XMLDocument : p;
                        j.getResponseHeader = function (L) {
                            return {
                                "content-type": e.dataType
                            } [L]
                        };
                        var v = /(json|script)/.test(e.dataType);
                        if (v || e.textarea) {
                            var w = p.getElementsByTagName("textarea")[0];
                            if (w) j.responseText = w.value;
                            else if (v) {
                                var H = p.getElementsByTagName("pre")[0],
                                    I = p.getElementsByTagName("body")[0];
                                if (H) j.responseText = H.textContent;
                                else if (I) j.responseText = I.innerHTML
                            }
                        } else if (e.dataType == "xml" && !j.responseXML && j.responseText != null) j.responseXML = C(j.responseText);
                        J = b.httpData(j, e.dataType)
                    } catch (D) {
                        q("error caught:", D);
                        o = false;
                        j.error = D;
                        b.handleError(e, j, "error", D)
                    }
                    if (j.aborted) {
                        q("upload aborted");
                        o = false
                    }
                    if (o) {
                        e.success.call(e.context, J, "success", j);
                        y && b.event.trigger("ajaxSuccess", [j, e])
                    }
                    y && b.event.trigger("ajaxComplete", [j, e]);
                    y && !--b.active && b.event.trigger("ajaxStop");
                    if (e.complete) e.complete.call(e.context, j, o ? "success" : "error");
                    setTimeout(function () {
                        r.removeData("form-plugin-onload");
                        r.remove();
                        j.responseXML = null
                    }, 100)
                }
            }

            function C(o, m) {
                if (window.ActiveXObject) {
                    m = new ActiveXObject("Microsoft.XMLDOM");
                    m.async = "false";
                    m.loadXML(o)
                } else m = (new DOMParser).parseFromString(o, "text/xml");
                return m && m.documentElement && m.documentElement.tagName != "parsererror" ? m : null
            }
            var l = i[0];
            if (b(":input[name=submit],:input[id=submit]", l).length) alert('Error: Form elements must not have name or id of "submit".');
            else {
                var e = b.extend(true, {}, b.ajaxSettings, a);
                e.context = e.context || e;
                var u = "jqFormIO" + (new Date).getTime(),
                    E = "_" + u;
                window[E] = function () {
                    var o = r.data("form-plugin-onload");
                    if (o) {
                        o();
                        window[E] = undefined;
                        try {
                            delete window[E]
                        } catch (m) {}
                    }
                };
                var r = b('<iframe id="' + u + '" name="' + u + '" src="' + e.iframeSrc + '" onload="window[\'_\'+this.id]()" />'),
                    x = r[0];
                r.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                });
                var j = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function () {},
                        getResponseHeader: function () {},
                        setRequestHeader: function () {},
                        abort: function () {
                            this.aborted = 1;
                            r.attr("src", e.iframeSrc)
                        }
                    },
                    y = e.global;
                y && !b.active++ && b.event.trigger("ajaxStart");
                y && b.event.trigger("ajaxSend", [j, e]);
                if (e.beforeSend && e.beforeSend.call(e.context, j, e) === false) e.global && b.active--;
                else if (!j.aborted) {
                    var G = false,
                        F = 0,
                        z = l.clk;
                    if (z) {
                        var A = z.name;
                        if (A && !z.disabled) {
                            e.extraData = e.extraData || {};
                            e.extraData[A] = z.value;
                            if (z.type == "image") {
                                e.extraData[A + ".x"] = l.clk_x;
                                e.extraData[A + ".y"] = l.clk_y
                            }
                        }
                    }
                    e.forceSync ? t() : setTimeout(t, 10);
                    var J, p, K = 50
                }
            }
        }
        if (!this.length) {
            q("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        if (typeof a == "function") a = {
            success: a
        };
        var d = this.attr("action");
        if (d = typeof d === "string" ? b.trim(d) : "") d = (d.match(/^([^#]+)/) || [])[1];
        d = d || window.location.href || "";
        a = b.extend(true, {
            url: d,
            type: this.attr("method") || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, a);
        d = {};
        this.trigger("form-pre-serialize", [this, a, d]);
        if (d.veto) {
            q("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (a.beforeSerialize && a.beforeSerialize(this, a) === false) {
            q("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var c, h, g = this.formToArray(a.semantic);
        if (a.data) {
            a.extraData = a.data;
            for (c in a.data)
                if (a.data[c] instanceof Array)
                    for (var k in a.data[c]) g.push({
                        name: c,
                        value: a.data[c][k]
                    });
                else {
                    h = a.data[c];
                    h = b.isFunction(h) ? h() : h;
                    g.push({
                        name: c,
                        value: h
                    })
                }
        }
        if (a.beforeSubmit && a.beforeSubmit(g, this, a) === false) {
            q("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [g, this, a, d]);
        if (d.veto) {
            q("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        c = b.param(g);
        if (a.type.toUpperCase() == "GET") {
            a.url += (a.url.indexOf("?") >= 0 ? "&" : "?") + c;
            a.data = null
        } else a.data = c;
        var i = this,
            n = [];
        a.resetForm && n.push(function () {
            i.resetForm()
        });
        a.clearForm && n.push(function () {
            i.clearForm()
        });
        if (!a.dataType && a.target) {
            var B = a.success || function () {};
            n.push(function (t) {
                var s = a.replaceTarget ? "replaceWith" : "html";
                b(a.target)[s](t).each(B, arguments)
            })
        } else a.success && n.push(a.success);
        a.success = function (t, s, C) {
            for (var l = a.context || a, e = 0, u = n.length; e < u; e++) n[e].apply(l, [t, s, C || i, i])
        };
        c = b("input:file", this).length > 0;
        k = i.attr("enctype") == "multipart/form-data" || i.attr("encoding") == "multipart/form-data";
        if (a.iframe !== false && (c || a.iframe || k)) a.closeKeepAlive ? b.get(a.closeKeepAlive, f) : f();
        else b.ajax(a);
        this.trigger("form-submit-notify", [this, a]);
        return this
    };
    b.fn.ajaxForm = function (a) {
        if (this.length === 0) {
            var f = {
                s: this.selector,
                c: this.context
            };
            if (!b.isReady && f.s) {
                q("DOM not ready, queuing ajaxForm");
                b(function () {
                    b(f.s, f.c).ajaxForm(a)
                });
                return this
            }
            q("terminating; zero elements found by selector" + (b.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function (d) {
            if (!d.isDefaultPrevented()) {
                d.preventDefault();
                b(this).ajaxSubmit(a)
            }
        }).bind("click.form-plugin", function (d) {
            var c = d.target,
                h = b(c);
            if (!h.is(":submit,input:image")) {
                c = h.closest(":submit");
                if (c.length == 0) return;
                c = c[0]
            }
            var g = this;
            g.clk = c;
            if (c.type == "image")
                if (d.offsetX != undefined) {
                    g.clk_x = d.offsetX;
                    g.clk_y = d.offsetY
                } else if (typeof b.fn.offset == "function") {
                h = h.offset();
                g.clk_x = d.pageX - h.left;
                g.clk_y = d.pageY - h.top
            } else {
                g.clk_x = d.pageX - c.offsetLeft;
                g.clk_y = d.pageY - c.offsetTop
            }
            setTimeout(function () {
                g.clk = g.clk_x = g.clk_y = null
            }, 100)
        })
    };
    b.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    b.fn.formToArray = function (a) {
        var f = [];
        if (this.length === 0) return f;
        var d = this[0],
            c = a ? d.getElementsByTagName("*") : d.elements;
        if (!c) return f;
        var h, g, k, i, n, B;
        h = 0;
        for (n = c.length; h < n; h++) {
            g = c[h];
            if (k = g.name)
                if (a && d.clk && g.type == "image") {
                    if (!g.disabled && d.clk == g) {
                        f.push({
                            name: k,
                            value: b(g).val()
                        });
                        f.push({
                            name: k + ".x",
                            value: d.clk_x
                        }, {
                            name: k + ".y",
                            value: d.clk_y
                        })
                    }
                } else if ((i = b.fieldValue(g, true)) && i.constructor == Array) {
                g = 0;
                for (B = i.length; g < B; g++) f.push({
                    name: k,
                    value: i[g]
                })
            } else i !== null && typeof i != "undefined" && f.push({
                name: k,
                value: i
            })
        }
        if (!a && d.clk) {
            a = b(d.clk);
            c = a[0];
            if ((k = c.name) && !c.disabled && c.type == "image") {
                f.push({
                    name: k,
                    value: a.val()
                });
                f.push({
                    name: k + ".x",
                    value: d.clk_x
                }, {
                    name: k + ".y",
                    value: d.clk_y
                })
            }
        }
        return f
    };
    b.fn.formSerialize = function (a) {
        return b.param(this.formToArray(a))
    };
    b.fn.fieldSerialize = function (a) {
        var f = [];
        this.each(function () {
            var d = this.name;
            if (d) {
                var c = b.fieldValue(this, a);
                if (c && c.constructor == Array)
                    for (var h = 0, g = c.length; h < g; h++) f.push({
                        name: d,
                        value: c[h]
                    });
                else c !== null && typeof c != "undefined" && f.push({
                    name: this.name,
                    value: c
                })
            }
        });
        return b.param(f)
    };
    b.fn.fieldValue = function (a) {
        for (var f = [], d = 0, c = this.length; d < c; d++) {
            var h = b.fieldValue(this[d], a);
            h === null || typeof h == "undefined" || h.constructor == Array && !h.length || (h.constructor == Array ? b.merge(f, h) : f.push(h))
        }
        return f
    };
    b.fieldValue = function (a, f) {
        var d = a.name,
            c = a.type,
            h = a.tagName.toLowerCase();
        if (f === undefined) f = true;
        if (f && (!d || a.disabled || c == "reset" || c == "button" || (c == "checkbox" || c == "radio") && !a.checked || (c == "submit" || c == "image") && a.form && a.form.clk != a || h == "select" && a.selectedIndex == -1)) return null;
        if (h == "select") {
            var g = a.selectedIndex;
            if (g < 0) return null;
            d = [];
            h = a.options;
            var k = (c = c == "select-one") ? g + 1 : h.length;
            for (g = c ? g : 0; g < k; g++) {
                var i = h[g];
                if (i.selected) {
                    var n = i.value;
                    n || (n = i.attributes && i.attributes.value && !i.attributes.value.specified ? i.text : i.value);
                    if (c) return n;
                    d.push(n)
                }
            }
            return d
        }
        return b(a).val()
    };
    b.fn.clearForm = function () {
        return this.each(function () {
            b("input,select,textarea", this).clearFields()
        })
    };
    b.fn.clearFields = b.fn.clearInputs = function () {
        return this.each(function () {
            var a = this.type,
                f = this.tagName.toLowerCase();
            if (a == "text" || a == "password" || f == "textarea") this.value = "";
            else if (a == "checkbox" || a == "radio") this.checked = false;
            else if (f == "select") this.selectedIndex = -1
        })
    };
    b.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) this.reset()
        })
    };
    b.fn.enable = function (a) {
        if (a === undefined) a = true;
        return this.each(function () {
            this.disabled = !a
        })
    };
    b.fn.selected = function (a) {
        if (a === undefined) a = true;
        return this.each(function () {
            var f = this.type;
            if (f == "checkbox" || f == "radio") this.checked = a;
            else if (this.tagName.toLowerCase() == "option") {
                f = b(this).parent("select");
                a && f[0] && f[0].type == "select-one" && f.find("option").selected(false);
                this.selected = a
            }
        })
    }
})(jQuery);; /**/
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/misc/ajax.js. */
(function ($) {
    Drupal.ajax = Drupal.ajax || {};
    Drupal.settings.urlIsAjaxTrusted = Drupal.settings.urlIsAjaxTrusted || {};
    Drupal.behaviors.AJAX = {
        attach: function (context, settings) {
            for (var base in settings.ajax)
                if (!$('#' + base + '.ajax-processed').length) {
                    var element_settings = settings.ajax[base];
                    if (typeof element_settings.selector == 'undefined') element_settings.selector = '#' + base;
                    $(element_settings.selector).each(function () {
                        element_settings.element = this;
                        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
                    });
                    $('#' + base).addClass('ajax-processed')
                };
            $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
                var element_settings = {};
                element_settings.progress = {
                    type: 'throbber'
                };
                if ($(this).attr('href')) {
                    element_settings.url = $(this).attr('href');
                    element_settings.event = 'click'
                };
                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
            });
            $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
                var element_settings = {};
                element_settings.url = $(this.form).attr('action');
                element_settings.setClick = true;
                element_settings.event = 'click';
                element_settings.progress = {
                    type: 'throbber'
                };
                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings)
            })
        }
    };
    Drupal.ajax = function (base, element, element_settings) {
        var defaults = {
            url: 'system/ajax',
            event: 'mousedown',
            keypress: true,
            selector: '#' + base,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                js: true
            }
        };
        $.extend(this, defaults, element_settings);
        this.element = element;
        this.element_settings = element_settings;
        this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
        if (Drupal.settings.urlIsAjaxTrusted[element_settings.url]) Drupal.settings.urlIsAjaxTrusted[this.url] = true;
        this.wrapper = '#' + element_settings.wrapper;
        if (this.element.form) this.form = $(this.element.form);
        var ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function (element_settings, options) {
                return ajax.beforeSerialize(element_settings, options)
            },
            beforeSubmit: function (form_values, element_settings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(form_values, element_settings, options)
            },
            beforeSend: function (xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options)
            },
            success: function (response, status, xmlhttprequest) {
                if (typeof response == 'string') response = $.parseJSON(response);
                if (response !== null && !Drupal.settings.urlIsAjaxTrusted[ajax.url])
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var customMessage = Drupal.t("The response failed verification so will not be processed.");
                        return ajax.error(xmlhttprequest, ajax.url, customMessage)
                    };
                return ajax.success(response, status)
            },
            complete: function (xmlhttprequest, status) {
                ajax.ajaxing = false;
                if (status == 'error' || status == 'parsererror') return ajax.error(xmlhttprequest, ajax.url)
            },
            dataType: 'json',
            type: 'POST'
        };
        $(ajax.element).bind(element_settings.event, function (event) {
            if (!Drupal.settings.urlIsAjaxTrusted[ajax.url] && !Drupal.urlIsLocal(ajax.url)) throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                '!url': ajax.url
            }));
            return ajax.eventResponse(this, event)
        });
        if (element_settings.keypress) $(ajax.element).keypress(function (event) {
            return ajax.keypressResponse(this, event)
        });
        if (element_settings.prevent) $(ajax.element).bind(element_settings.prevent, false)
    };
    Drupal.ajax.prototype.keypressResponse = function (element, event) {
        var ajax = this;
        if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
            $(ajax.element_settings.element).trigger(ajax.element_settings.event);
            return false
        }
    };
    Drupal.ajax.prototype.eventResponse = function (element, event) {
        var ajax = this;
        if (ajax.ajaxing) return false;
        try {
            if (ajax.form) {
                if (ajax.setClick) element.form.clk = element;
                ajax.form.ajaxSubmit(ajax.options)
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options)
            }
        } catch (e) {
            ajax.ajaxing = false;
            alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message)
        };
        if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
            return true
        } else return false
    };
    Drupal.ajax.prototype.beforeSerialize = function (element, options) {
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.detachBehaviors(this.form, settings, 'serialize')
        };
        options.data['ajax_html_ids[]'] = [];
        $('[id]').each(function () {
            options.data['ajax_html_ids[]'].push(this.id)
        });
        options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
        options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
        for (var key in Drupal.settings.ajaxPageState.css) options.data['ajax_page_state[css][' + key + ']'] = 1;
        for (var key in Drupal.settings.ajaxPageState.js) options.data['ajax_page_state[js][' + key + ']'] = 1
    };
    Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {};
    Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
        if (this.form) {
            options.extraData = options.extraData || {};
            options.extraData.ajax_iframe_upload = '1';
            var v = $.fieldValue(this.element);
            if (v !== null) options.extraData[this.element.name] = Drupal.checkPlain(v)
        };
        $(this.element).addClass('progress-disabled').attr('disabled', true);
        if (this.progress.type == 'bar') {
            var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
            if (this.progress.message) progressBar.setProgress(-1, this.progress.message);
            if (this.progress.url) progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
            this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
            this.progress.object = progressBar;
            $(this.element).after(this.progress.element)
        } else if (this.progress.type == 'throbber') {
            this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
            if (this.progress.message) $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
            $(this.element).after(this.progress.element)
        }
    };
    Drupal.ajax.prototype.success = function (response, status) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');
        Drupal.freezeHeight();
        for (var i in response)
            if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) this.commands[response[i]['command']](this, response[i], status);
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings)
        };
        Drupal.unfreezeHeight();
        this.settings = null
    };
    Drupal.ajax.prototype.getEffect = function (response) {
        var type = response.effect || this.effect,
            speed = response.speed || this.speed,
            effect = {};
        if (type == 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = ''
        } else if (type == 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed
        } else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed
        };
        return effect
    };
    Drupal.ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
        Drupal.displayAjaxError(Drupal.ajaxError(xmlhttprequest, uri, customMessage));
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.wrapper).show();
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings)
        }
    };
    Drupal.ajax.prototype.commands = {
        insert: function (ajax, response, status) {
            var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper),
                method = response.method || ajax.method,
                effect = ajax.getEffect(response),
                new_content_wrapped = $('<div></div>').html(response.data),
                new_content = new_content_wrapped.contents();
            if (new_content.length != 1 || new_content.get(0).nodeType != 1) new_content = new_content_wrapped;
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    var settings = response.settings || ajax.settings || Drupal.settings;
                    Drupal.detachBehaviors(wrapper, settings)
            };
            wrapper[method](new_content);
            if (effect.showEffect != 'show') new_content.hide();
            if ($('.ajax-new-content', new_content).length > 0) {
                $('.ajax-new-content', new_content).hide();
                new_content.show();
                $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed)
            } else if (effect.showEffect != 'show') new_content[effect.showEffect](effect.showSpeed);
            if (new_content.parents('html').length > 0) {
                var settings = response.settings || ajax.settings || Drupal.settings;
                Drupal.attachBehaviors(new_content, settings)
            }
        },
        remove: function (ajax, response, status) {
            var settings = response.settings || ajax.settings || Drupal.settings;
            Drupal.detachBehaviors($(response.selector), settings);
            $(response.selector).remove()
        },
        changed: function (ajax, response, status) {
            if (!$(response.selector).hasClass('ajax-changed')) {
                $(response.selector).addClass('ajax-changed');
                if (response.asterisk) $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ')
            }
        },
        alert: function (ajax, response, status) {
            alert(response.text, response.title)
        },
        css: function (ajax, response, status) {
            $(response.selector).css(response.argument)
        },
        settings: function (ajax, response, status) {
            if (response.merge) {
                $.extend(true, Drupal.settings, response.settings)
            } else ajax.settings = response.settings
        },
        data: function (ajax, response, status) {
            $(response.selector).data(response.name, response.value)
        },
        invoke: function (ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, response.arguments)
        },
        restripe: function (ajax, response, status) {
            $('> tbody > tr:visible, > tr:visible', $(response.selector)).removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')
        },
        add_css: function (ajax, response, status) {
            $('head').prepend(response.data);
            var match, importMatch = /^@import url\("(.*)"\);$/igm;
            if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
                importMatch.lastIndex = 0;
                while (match = importMatch.exec(response.data)) document.styleSheets[0].addImport(match[1])
            }
        },
        updateBuildId: function (ajax, response, status) {
            $('input[name="form_build_id"][value="' + response.old + '"]').val(response['new'])
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/misc/ajax.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/files/polskie-radio/languages/pl_XLJrFSOzv3PsXpuJ8G6u-NmVQVC_02-W0I8QE6VpQvs.js. */
Drupal.locale = {
    strings: {
        "": {
            Add: "Dodaj"
        }
    }
};
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/files/polskie-radio/languages/pl_XLJrFSOzv3PsXpuJ8G6u-NmVQVC_02-W0I8QE6VpQvs.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/sites/all/modules/favorites/favorites.js. */
(function ($) {
    Drupal.favorites = {
        add: function () {
            jQuery.ajax({
                url: Drupal.settings.favorites.addCallbackPath,
                dataType: 'json',
                type: 'POST',
                data: Drupal.favorites.extractFormData(),
                error: function (a, b, c) {
                    alert('An error occured.\n\nStatus:\n' + b + '\n\nMessage:\n' + c)
                },
                success: function (data) {
                    $("#edit-submit").attr("disabled", true);
                    Drupal.favorites.rebuild(data)
                }
            })
        },
        extractFormData: function () {
            return {
                path: Drupal.settings.favorites.path,
                query: Drupal.settings.favorites.query,
                title: $('form#favorites-add-favorite-form input[name=title]').val()
            }
        },
        rebuild: function (data) {
            if (data.list) {
                Drupal.detachBehaviors($('div#favorites-list'));
                $('div#favorites-list').html(data.list);
                Drupal.attachBehaviors($('div#favorites-list'))
            }
        },
        remove: function (caller) {
            jQuery.ajax({
                url: caller.attr('href').replace(/\?.*$/, ''),
                dataType: 'json',
                data: caller.attr('href').replace(/^.*?\?/, '') + '&js=1',
                error: function (a, b, c) {
                    alert('An error occured.\n\nStatus:\n' + b + '\n\nMessage:\n' + c)
                },
                success: function (data) {
                    $("#edit-submit").attr("disabled", false);
                    Drupal.favorites.rebuild(data)
                }
            })
        }
    };
    Drupal.behaviors.favoritesLinks = {
        attach: function (context) {
            $('a.favorites-remove:not(.js-processed)', context).click(function (event) {
                Drupal.favorites.remove($(this));
                event.preventDefault()
            }).addClass('js-processed');
            $('form#favorites-add-favorite-form:not(.js-processed)', context).submit(function (event) {
                Drupal.favorites.add();
                event.preventDefault()
            }).addClass('js-processed')
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/sites/all/modules/favorites/favorites.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/sites/all/modules/ctools/js/auto-submit.js. */
(function ($) {
    Drupal.behaviors.CToolsAutoSubmit = {
        attach: function () {
            var timeoutID = 0;
            $('select.ctools-auto-submit:not(.ctools-auto-submit-processed),.ctools-auto-submit-full-form *[type!=input]:not(.ctools-auto-submit-processed)').addClass('.ctools-auto-submit-processed').change(function () {
                $(this.form).find('.ctools-auto-submit-click').click()
            });
            $('input[type=text].ctools-auto-submit:not(.ctools-auto-submit-processed),.ctools-auto-submit-full-form input[type=text]:not(.ctools-auto-submit-processed)').addClass('.ctools-auto-submit-processed').keyup(function (e) {
                var form = this.form;
                switch (e.keyCode) {
                    case 16:
                    case 17:
                    case 18:
                    case 20:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 9:
                    case 13:
                    case 27:
                        return false;
                    default:
                        if (!$(form).hasClass('ctools-ajaxing')) {
                            if (timeoutID) clearTimeout(timeoutID);
                            timeoutID = setTimeout(function () {
                                $(form).find('.ctools-auto-submit-click').click()
                            }, 300)
                        }
                }
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/sites/all/modules/ctools/js/auto-submit.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/sites/all/modules/views/js/base.js. */
(function ($) {
    Drupal.Views = {};
    Drupal.behaviors.viewsTabs = {
        attach: function (context) {
            if ($.viewsUi && $.viewsUi.tabs) $('#views-tabset').once('views-processed').viewsTabs({
                selectedClass: 'active'
            });
            $('a.views-remove-link').once('views-processed').click(function (event) {
                var id = $(this).attr('id').replace('views-remove-link-', '');
                $('#views-row-' + id).hide();
                $('#views-removed-' + id).attr('checked', true);
                event.preventDefault()
            });
            $('a.display-remove-link').addClass('display-processed').click(function () {
                var id = $(this).attr('id').replace('display-remove-link-', '');
                $('#display-row-' + id).hide();
                $('#display-removed-' + id).attr('checked', true);
                return false
            })
        }
    };
    Drupal.Views.parseQueryString = function (query) {
        var args = {},
            pos = query.indexOf('?');
        if (pos != -1) query = query.substring(pos + 1);
        var pairs = query.split('&');
        for (var i in pairs)
            if (typeof (pairs[i]) == 'string') {
                var pair = pairs[i].split('=');
                if (pair[0] != 'q' && pair[1]) args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '))
            };
        return args
    };
    Drupal.Views.parseViewArgs = function (href, viewPath) {
        var returnObj = {},
            path = Drupal.Views.getPath(href);
        if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
            var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
            returnObj.view_args = args;
            returnObj.view_path = path
        };
        return returnObj
    };
    Drupal.Views.pathPortion = function (href) {
        var protocol = window.location.protocol;
        if (href.substring(0, protocol.length) == protocol) href = href.substring(href.indexOf('/', protocol.length + 2));
        return href
    };
    Drupal.Views.getPath = function (href) {
        href = Drupal.Views.pathPortion(href);
        href = href.substring(Drupal.settings.basePath.length, href.length);
        if (href.substring(0, 3) == '?q=') href = href.substring(3, href.length);
        var chars = ['#', '?', '&'];
        for (i in chars)
            if (href.indexOf(chars[i]) > -1) href = href.substr(0, href.indexOf(chars[i]));
        return href
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/sites/all/modules/views/js/base.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/misc/progress.js. */
(function ($) {
    Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
        var pb = this;
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
        this.element.html('<div class="bar"><div class="filled"></div></div><div class="percentage"></div><div class="message">&nbsp;</div>')
    };
    Drupal.progressBar.prototype.setProgress = function (percentage, message) {
        if (percentage >= 0 && percentage <= 100) {
            $('div.filled', this.element).css('width', percentage + '%');
            $('div.percentage', this.element).html(percentage + '%')
        };
        $('div.message', this.element).html(message);
        if (this.updateCallback) this.updateCallback(percentage, message, this)
    };
    Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing()
    };
    Drupal.progressBar.prototype.stopMonitoring = function () {
        clearTimeout(this.timer);
        this.uri = null
    };
    Drupal.progressBar.prototype.sendPing = function () {
        if (this.timer) clearTimeout(this.timer);
        if (this.uri) {
            var pb = this;
            $.ajax({
                type: this.method,
                url: this.uri,
                data: '',
                dataType: 'json',
                success: function (progress) {
                    if (progress.status == 0) {
                        pb.displayError(progress.data);
                        return
                    };
                    pb.setProgress(progress.percentage, progress.message);
                    pb.timer = setTimeout(function () {
                        pb.sendPing()
                    }, pb.delay)
                },
                error: function (xmlhttp) {
                    pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri))
                }
            })
        }
    };
    Drupal.progressBar.prototype.displayError = function (string) {
        var error = $('<div class="messages error"></div>').html(string);
        $(this.element).before(error).hide();
        if (this.errorCallback) this.errorCallback(this)
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/misc/progress.js. */
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/sites/all/modules/views/js/ajax_view.js. */
(function ($) {
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function () {
        if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) $.each(Drupal.settings.views.ajaxViews, function (i, settings) {
            Drupal.views.instances[i] = new Drupal.views.ajaxView(settings)
        })
    };
    Drupal.views = {};
    Drupal.views.instances = {};
    Drupal.views.ajaxView = function (settings) {
        var selector = '.view-dom-id-' + settings.view_dom_id;
        this.$view = $(selector);
        var ajax_path = Drupal.settings.views.ajax_path;
        if (ajax_path.constructor.toString().indexOf("Array") != -1) ajax_path = ajax_path[0];
        var queryString = window.location.search || '';
        if (queryString !== '') {
            var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
            if (queryString !== '') queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString
        };
        this.element_settings = {
            url: ajax_path + queryString,
            submit: settings,
            setClick: true,
            event: 'click',
            selector: selector,
            progress: {
                type: 'throbber'
            }
        };
        this.settings = settings;
        this.$exposed_form = $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
        this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));
        this.$view.filter(jQuery.proxy(this.filterNestedViews, this)).once(jQuery.proxy(this.attachPagerAjax, this));
        var self_settings = this.element_settings;
        self_settings.event = 'RefreshView';
        this.refreshViewAjax = new Drupal.ajax(this.selector, this.$view, self_settings)
    };
    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
        var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
        button = button[0];
        this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings)
    };
    Drupal.views.ajaxView.prototype.filterNestedViews = function () {
        return !this.$view.parents('.view').size()
    };
    Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
        this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a').each(jQuery.proxy(this.attachPagerLinkAjax, this))
    };
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
        var $link = $(link),
            viewData = {},
            href = $link.attr('href');
        $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
        $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
        this.element_settings.submit = viewData;
        this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings)
    };
    Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
        var offset = $(response.selector).offset(),
            scrollTarget = response.selector;
        while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) scrollTarget = $(scrollTarget).parent();
        if (offset.top - 10 < $(scrollTarget).scrollTop()) $(scrollTarget).animate({
            scrollTop: (offset.top - 10)
        }, 500)
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/sites/all/modules/views/js/ajax_view.js. */
(function ($) {
    Drupal.behaviors.eu_cookie_compliance_popup = {
        attach: function (context, settings) {
            $('body').not('.sliding-popup-processed').addClass('sliding-popup-processed').each(function () {
                try {
                    var enabled = Drupal.settings.eu_cookie_compliance.popup_enabled;
                    if (!enabled) {
                        return;
                    }
                    if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
                        return;
                    }
                    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
                    var clicking_confirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
                    var agreed_enabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
                    var popup_hide_agreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
                    if (status == 0) {
                        var next_status = 1;
                        if (clicking_confirms) {
                            $('a, input[type=submit]').bind('click.eu_cookie_compliance', function () {
                                if (!agreed_enabled) {
                                    Drupal.eu_cookie_compliance.setStatus(1);
                                    next_status = 2;
                                }
                                Drupal.eu_cookie_compliance.changeStatus(next_status);
                            });
                        }

                        $('.agree-button').click(function () {
                            if (!agreed_enabled) {
                                Drupal.eu_cookie_compliance.setStatus(1);
                                next_status = 2;
                            }
                            Drupal.eu_cookie_compliance.changeStatus(next_status);
                        });

                        Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
                    } else if (status == 1) {
                        Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
                        if (popup_hide_agreed) {
                            $('a, input[type=submit]').bind('click.eu_cookie_compliance_hideagreed', function () {
                                Drupal.eu_cookie_compliance.changeStatus(2);
                            });
                        }

                    } else {
                        return;
                    }
                } catch (e) {
                    return;
                }
            });
        }
    }

    Drupal.eu_cookie_compliance = {};

    Drupal.eu_cookie_compliance.createPopup = function (html) {
        var popup = $(html)
            .attr({
                "id": "sliding-popup"
            })
            .height(Drupal.settings.eu_cookie_compliance.popup_height)
            .width(Drupal.settings.eu_cookie_compliance.popup_width)
            .hide();
        if (Drupal.settings.eu_cookie_compliance.popup_position) {
            popup.prependTo("body");
            var height = popup.height();
            popup.show()
                .attr({
                    "class": "sliding-popup-top"
                })
                .css({
                    "top": -1 * height
                })
                .animate({
                    top: 0
                }, Drupal.settings.eu_cookie_compliance.popup_delay);
        } else {
            popup.appendTo("body");
            height = popup.height();
            popup.show()
                .attr({
                    "class": "sliding-popup-bottom"
                })
                .css({
                    "bottom": -1 * height
                })
                .animate({
                    bottom: 0
                }, Drupal.settings.eu_cookie_compliance.popup_delay)
        }
        Drupal.eu_cookie_compliance.attachEvents();
    }

    Drupal.eu_cookie_compliance.attachEvents = function () {
        var clicking_confirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
        var agreed_enabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
        $('.find-more-button').click(function () {
            if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
                window.open(Drupal.settings.eu_cookie_compliance.popup_link);
            } else {
                window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
            }
        });
        $('.agree-button').click(function () {
            var next_status = 1;
            if (!agreed_enabled) {
                Drupal.eu_cookie_compliance.setStatus(1);
                next_status = 2;
            }
            if (clicking_confirms) {
                $('a, input[type=submit]').unbind('click.eu_cookie_compliance');
            }
            Drupal.eu_cookie_compliance.changeStatus(next_status);
        });
        $('.hide-popup-button').click(function () {
            Drupal.eu_cookie_compliance.changeStatus(2);
        });
    }

    Drupal.eu_cookie_compliance.getCurrentStatus = function () {
        name = 'cookie-agreed';
        value = Drupal.eu_cookie_compliance.getCookie(name);
        return value;
    }

    Drupal.eu_cookie_compliance.changeStatus = function (value) {
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        if (status == value) return;
        if (Drupal.settings.eu_cookie_compliance.popup_position) {
            $(".sliding-popup-top").animate({
                top: $("#sliding-popup").height() * -1
            }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
                if (status == 0) {
                    $("#sliding-popup").html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({
                        top: 0
                    }, Drupal.settings.eu_cookie_compliance.popup_delay);
                    Drupal.eu_cookie_compliance.attachEvents();
                }
                if (status == 1) {
                    $("#sliding-popup").remove();
                }
            })
        } else {
            $(".sliding-popup-bottom").animate({
                bottom: $("#sliding-popup").height() * -1
            }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
                if (status == 0) {
                    $("#sliding-popup").html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({
                        bottom: 0
                    }, Drupal.settings.eu_cookie_compliance.popup_delay)
                    Drupal.eu_cookie_compliance.attachEvents();
                }
                if (status == 1) {
                    $("#sliding-popup").remove();
                };
            })
        }
        Drupal.eu_cookie_compliance.setStatus(value);
    }

    Drupal.eu_cookie_compliance.setStatus = function (status) {
        var date = new Date();
        date.setDate(date.getDate() + 100);
        var cookie = "cookie-agreed=" + status + ";expires=" + date.toUTCString() + ";path=" + Drupal.settings.basePath;
        if (Drupal.settings.eu_cookie_compliance.domain) {
            cookie += ";domain=" + Drupal.settings.eu_cookie_compliance.domain;
        }
        document.cookie = cookie;
    }

    Drupal.eu_cookie_compliance.hasAgreed = function () {
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        if (status == 1 || status == 2) {
            return true;
        }
        return false;
    }


    /**
     * Verbatim copy of Drupal.comment.getCookie().
     */
    Drupal.eu_cookie_compliance.getCookie = function (name) {
        var search = name + '=';
        var returnValue = '';

        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                var end = document.cookie.indexOf(';', offset);
                if (end == -1) {
                    end = document.cookie.length;
                }
                returnValue = decodeURIComponent(document.cookie.substring(offset, end).replace(/\+/g, '%20'));
            }
        }

        return returnValue;
    };

    Drupal.eu_cookie_compliance.cookiesEnabled = function () {
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;
        if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
            document.cookie = "testcookie";
            cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
        }
        return (cookieEnabled);
    }

})(jQuery);; /**/
/* Source and licensing information for the line(s) below can be found at http://radiofm-online.com/sites/all/modules/responsive_share_buttons/js/responsive_share_buttons.js. */
(function ($) {
    Drupal.behaviors.rsb = {
        attach: function (context, settings) {
            var pageTitle = document.title,
                pageUrl = location.href;
            $('#share-wrapper li').hover(function () {
                var hoverEl = $(this);
                if ($(window).width() > 699)
                    if (hoverEl.hasClass('visible')) {
                        hoverEl.animate({
                            "margin-left": "-117px"
                        }, "fast").removeClass('visible')
                    } else hoverEl.animate({
                        "margin-left": "0px"
                    }, "fast").addClass('visible')
            });
            $('.button-wrap').click(function (event) {
                var shareName = $(this).attr('class').split(' ')[0];
                switch (shareName) {
                    case 'facebook':
                        var openLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
                        break;
                    case 'twitter':
                        var openLink = 'http://twitter.com/home?status=' + encodeURIComponent(pageTitle + ' ' + pageUrl);
                        break;
                    case 'digg':
                        var openLink = 'http://www.digg.com/submit?phase=2&amp;url=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
                        break;
                    case 'stumbleupon':
                        var openLink = 'http://www.stumbleupon.com/submit?url=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
                        break;
                    case 'delicious':
                        var openLink = 'http://del.icio.us/post?url=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
                        break;
                    case 'google':
                        var openLink = 'https://plus.google.com/share?url=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
                        break
                };
                winWidth = 650;
                winHeight = 450;
                winLeft = ($(window).width() - winWidth) / 2, winTop = ($(window).height() - winHeight) / 2, winOptions = 'width=' + winWidth + ',height=' + winHeight + ',top=' + winTop + ',left=' + winLeft;
                window.open(openLink, 'Share This Link', winOptions);
                return false
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://radiofm-online.com/sites/all/modules/responsive_share_buttons/js/responsive_share_buttons.js. */
/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function (a, b) {
    function cu(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cr(a) {
        if (!cg[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ch || (ch = c.createElement("iframe"), ch.frameBorder = ch.width = ch.height = 0), b.appendChild(ch);
                if (!ci || !ch.createElement) ci = (ch.contentWindow || ch.contentDocument).document, ci.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ci.close();
                d = ci.createElement(a), ci.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ch)
            }
            cg[a] = e
        }
        return cg[a]
    }

    function cq(a, b) {
        var c = {};
        f.each(cm.concat.apply([], cm.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cp() {
        cn = b
    }

    function co() {
        setTimeout(cp, 0);
        return cn = f.now()
    }

    function cf() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ce() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function b$(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function bZ(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                } if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function bY(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bA.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object")
            for (var e in b) bY(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function bX(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bW(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bP,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bW(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bW(a, c, d, e, "*", g));
        return l
    }

    function bV(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bL),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function by(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bt : bu;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bv(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }

    function bl(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bd, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bk(a) {
        f.nodeName(a, "input") ? bj(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bj)
    }

    function bj(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bi(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }

    function bh(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bg(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c = f.expando,
                d = f.data(a),
                e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                e = e[c] = f.extend({}, d);
                if (g) {
                    delete e.handle, e.events = {};
                    for (var h in g)
                        for (var i = 0, j = g[h].length; i < j; i++) f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }

    function bf(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function V(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (Q.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function M(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }

    function L(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [],
            q = [],
            r = f._data(this, "events");
        if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++) g = s[i], g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            e = f(a.target).closest(q, a.currentTarget);
            for (j = 0, k = e.length; j < k; j++) {
                m = e[j];
                for (i = 0; i < s.length; i++) {
                    g = s[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem, d = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType, d = f(a.relatedTarget).closest(g.selector)[0], d && f.contains(h, d) && (d = h);
                        (!d || d !== h) && p.push({
                            elem: h,
                            handleObj: g,
                            level: m.level
                        })
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                e = p[j];
                if (c && e.level > c) break;
                a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(e.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = e.level, o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }

    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }

    function D() {
        return !0
    }

    function C() {
        return !1
    }

    function m(a, c, d) {
        var e = c + "defer",
            g = c + "queue",
            h = c + "mark",
            i = f.data(a, e, b, !0);
        i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function () {
            !f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0), i.resolve())
        }, 0)
    }

    function l(a) {
        for (var b in a)
            if (b !== "toJSON") return !1;
        return !0
    }

    function k(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(j, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function K() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(K, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                x = /^-ms-/,
                y = function (a, b) {
                    return (b + "").toUpperCase()
                },
                z = d.userAgent,
                A, B, C, D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.6.4",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return G.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), B.done(a);
                    return this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        B.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!B) {
                        B = e._Deferred();
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && K()
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNaN: function (a) {
                    return a == null || !m.test(a) || isNaN(a)
                },
                type: function (a) {
                    return a == null ? String(a) : J[D.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || E.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(x, "ms-").replace(w, y)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: H ? function (a) {
                    return a == null ? "" : H.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b) {
                    if (!b) return -1;
                    if (I) return I.call(b, a);
                    for (var c = 0, d = b.length; c < d; c++)
                        if (b[c] === a) return c;
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = G.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
            });
            return e
        }(),
        g = "done fail isResolved isRejected promise then always pipe".split(" "),
        h = [].slice;
    f.extend({
        _Deferred: function () {
            var a = [],
                b, c, d, e = {
                    done: function () {
                        if (!d) {
                            var c = arguments,
                                g, h, i, j, k;
                            b && (k = b, b = 0);
                            for (g = 0, h = c.length; g < h; g++) i = c[g], j = f.type(i), j === "array" ? e.done.apply(e, i) : j === "function" && a.push(i);
                            k && e.resolveWith(k[0], k[1])
                        }
                        return this
                    },
                    resolveWith: function (e, f) {
                        if (!d && !b && !c) {
                            f = f || [], c = 1;
                            try {
                                while (a[0]) a.shift().apply(e, f)
                            } finally {
                                b = [e, f], c = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        e.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function () {
                        return !!c || !!b
                    },
                    cancel: function () {
                        d = 1, a = [];
                        return this
                    }
                };
            return e
        },
        Deferred: function (a) {
            var b = f._Deferred(),
                c = f._Deferred(),
                d;
            f.extend(b, {
                then: function (a, c) {
                    b.done(a).fail(c);
                    return this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [c, "reject"]
                        }, function (a, c) {
                            var e = c[0],
                                g = c[1],
                                h;
                            f.isFunction(e) ? b[a](function () {
                                h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            }) : b[a](d[g])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d) return d;
                        d = a = {}
                    }
                    var c = g.length;
                    while (c--) a[g[c]] = b[g[c]];
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b);
            return b
        },
        when: function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
                }
            }
            var b = arguments,
                c = 0,
                d = b.length,
                e = d,
                g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; c < d; c++) b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }), f.support = function () {
        var a = c.createElement("div"),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !!a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (t in p) o.style[t] = p[t];
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0), o.innerHTML = "", n.removeChild(o);
        if (a.attachEvent)
            for (t in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
        o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/,
        j = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !l(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i = f.expando,
                    j = typeof c == "string",
                    k = a.nodeType,
                    l = k ? f.cache : a,
                    m = k ? a[f.expando] : a[f.expando] && f.expando;
                if ((!m || e && m && l[m] && !l[m][i]) && j && d === b) return;
                m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c);
                g = l[m], e && (g[i] || (g[i] = {}), g = g[i]), d !== b && (g[f.camelCase(c)] = d);
                if (c === "events" && !g[c]) return g[i] && g[i].events;
                j ? (h = g[c], h == null && (h = g[f.camelCase(c)])) : h = g;
                return h
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e = f.expando,
                    g = a.nodeType,
                    h = g ? f.cache : a,
                    i = g ? a[f.expando] : f.expando;
                if (!h[i]) return;
                if (b) {
                    d = c ? h[i][e] : h[i];
                    if (d) {
                        d[b] || (b = f.camelCase(b)), delete d[b];
                        if (!l(d)) return
                    }
                }
                if (c) {
                    delete h[i][e];
                    if (!l(h[i])) return
                }
                var j = h[i][e];
                f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null, j ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    d = f.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                            g;
                        for (var h = 0, i = e.length; h < i; h++) g = e[h].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), k(this[0], g, d[g]))
                    }
                }
                return d
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            var j = a.split(".");
            j[1] = j[1] ? "." + j[1] : "";
            if (c === b) {
                d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d = k(this[0], a, d));
                return d === b && j[1] ? this.data(j[0]) : d
            }
            return this.each(function () {
                var b = f(this),
                    d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!", d)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        },
        _unmark: function (a, c, d) {
            a !== !0 && (d = c, c = a, a = !1);
            if (c) {
                d = d || "fx";
                var e = d + "mark",
                    g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
            }
        },
        queue: function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
                return e || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e;
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function () {
                f.dequeue(a, b)
            })), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    f.dequeue(c, b)
                }, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0)) h++, l.done(m);
            m();
            return d.promise()
        }
    });
    var n = /[\n\t\r]/g,
        o = /\s+/,
        p = /\r/g,
        q = /^(?:button|input)$/i,
        r = /^(?:button|input|object|select|textarea)$/i,
        s = /^a(?:rea)?$/i,
        t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        u, v;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(o);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(o);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(n, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(o);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
                    if (c && "get" in c && (d = c.get(e, "value")) !== b) return d;
                    d = e.value;
                    return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
                }
                return b
            }
            var g = f.isFunction(a);
            return this.each(function (d) {
                var e = f(this),
                    h;
                if (this.nodeType === 1) {
                    g ? h = a.call(this, d, e.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c = a.selectedIndex,
                        d = [],
                        e = a.options,
                        g = a.type === "select-one";
                    if (c < 0) return null;
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
                        var j = e[h];
                        if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                            b = f(j).val();
                            if (g) return b;
                            d.push(b)
                        }
                    }
                    if (g && !d.length && e.length) return f(e[c]).val();
                    return d
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (a, c, d, e) {
            var g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2) return b;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (!("getAttribute" in a)) return f.prop(a, c, d);
            var h, i, j = g !== 1 || !f.isXMLDoc(a);
            j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = v : u && (i = u)));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (i && "set" in i && j && (h = i.set(a, d, c)) !== b) return h;
                a.setAttribute(c, "" + d);
                return d
            }
            if (i && "get" in i && j && (h = i.get(a, c)) !== null) return h;
            h = a.getAttribute(c);
            return h === null ? b : h
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = f.attrFix[b] || b, f.attr(a, b, ""), a.removeAttribute(b), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (q.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (u && f.nodeName(a, "button")) return u.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (u && f.nodeName(a, "button")) return u.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e = a.nodeType;
            if (!a || e === 3 || e === 8 || e === 2) return b;
            var g, h, i = e !== 1 || !f.isXMLDoc(a);
            i && (c = f.propFix[c] || c, h = f.propHooks[c]);
            return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a, c)) !== null ? g : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabIndex = f.propHooks.tabIndex, v = {
        get: function (a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, f.support.getSetAttribute || (u = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && d.nodeValue !== "" ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    })), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var w = /\.(.*)$/,
        x = /^(?:textarea|input|select)$/i,
        y = /\./g,
        z = / /g,
        A = /[^\w\s.|`]/g,
        B = function (a) {
            return a.replace(A, "\\$&")
        };
    f.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1) d = C;
                else if (!d) return;
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (!i) return;
                var j = i.events,
                    k = i.handle;
                j || (i.events = j = {}), k || (i.handle = k = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem, arguments) : b
                }), k.elem = a, c = c.split(" ");
                var l, m = 0,
                    n;
                while (l = c[m++]) {
                    h = g ? f.extend({}, g) : {
                        handler: d,
                        data: e
                    }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
                    var o = j[l],
                        p = f.event.special[l] || {};
                    if (!o) {
                        o = j[l] = [];
                        if (!p.setup || p.setup.call(a, e, n, k) === !1) a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                    }
                    p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = C);
                var g, h, i, j, k = 0,
                    l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a),
                    t = s && s.events;
                if (!s || !t) return;
                c && c.type && (d = c.handler, c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t) f.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h];
                    if (!p) continue;
                    if (!d) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace)) f.event.remove(a, r, q.handler, j), p.splice(j--, 1)
                        }
                        continue
                    }
                    o = f.event.special[h] || {};
                    for (j = e || 0; j < p.length; j++) {
                        q = p[j];
                        if (d.guid === q.guid) {
                            if (l || n.test(q.namespace)) e == null && p.splice(j--, 1), o.remove && o.remove.call(a, q);
                            if (e != null) break
                        }
                    }
                    if (p.length === 0 || e != null && p.length === 1)(!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(a, h, s.handle), g = null, delete
                    t[h]
                }
                if (f.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            var h = c.type || c,
                i = [],
                j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if (!!e && !f.event.customEvent[h] || !!f.event.global[h]) {
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !e) c.preventDefault(), c.stopPropagation();
                if (!e) {
                    f.each(f.cache, function () {
                        var a = f.expando,
                            b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8) return;
                c.result = b, c.target = e, d = d != null ? f.makeArray(d) : [], d.unshift(c);
                var k = e,
                    l = h.indexOf(":") < 0 ? "on" + h : "";
                do {
                    var m = f._data(k, "handle");
                    c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, o = f.event.special[h] || {};
                    if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e)) {
                        try {
                            l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
                        } catch (p) {}
                        n && (e[l] = n), f.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0),
                e = !c.exclusive && !c.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = c, c.currentTarget = this;
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler, c.data = j.data, c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation()));
                    if (c.isImmediatePropagationStopped()) break
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[f.expando]) return a;
            var d = a;
            a = f.Event(d);
            for (var e = this.props.length, g; e;) g = this.props[--e], a[g] = d[g];
            a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = a.target.ownerDocument || c,
                    i = h.documentElement,
                    j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1e8,
        proxy: f.proxy,
        special: {
            ready: {
                setup: f.bindReady,
                teardown: f.noop
            },
            live: {
                add: function (a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {
                        handler: L,
                        guid: a.handler.guid
                    }))
                },
                remove: function (a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!this.preventDefault) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a, b && f.extend(this, b), this.timeStamp = f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = D, this.stopPropagation()
        },
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C
    };
    var E = function (a) {
            var b = a.relatedTarget,
                c = !1,
                d = a.type;
            a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = d))
        },
        F = function (a) {
            a.type = a.data, f.event.handle.apply(this, arguments)
        };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            setup: function (c) {
                f.event.add(this, b, c && c.selector ? F : E, a)
            },
            teardown: function (a) {
                f.event.remove(this, b, a && a.selector ? F : E)
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function (a, b) {
            if (!f.nodeName(this, "form")) f.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target,
                    c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                (c === "submit" || c === "image") && f(b).closest("form").length && J("submit", this, arguments)
            }), f.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target,
                    c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type : "";
                (c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && J("submit", this, arguments)
            });
            else return !1
        },
        teardown: function (a) {
            f.event.remove(this, ".specialSubmit")
        }
    });
    if (!f.support.changeBubbles) {
        var G, H = function (a) {
                var b = f.nodeName(a, "input") ? a.type : "",
                    c = a.value;
                b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                    return a.selected
                }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
                return c
            },
            I = function (c) {
                var d = c.target,
                    e, g;
                if (!!x.test(d.nodeName) && !d.readOnly) {
                    e = f._data(d, "_change_data"), g = H(d), (c.type !== "focusout" || d.type !== "radio") && f._data(d, "_change_data", g);
                    if (e === b || g === e) return;
                    if (e != null || g) c.type = "change", c.liveFired = b, f.event.trigger(c, arguments[1], d)
                }
            };
        f.event.special.change = {
            filters: {
                focusout: I,
                beforedeactivate: I,
                click: function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && I.call(this, a)
                },
                keydown: function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && I.call(this, a)
                },
                beforeactivate: function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            },
            setup: function (a, b) {
                if (this.type === "file") return !1;
                for (var c in G) f.event.add(this, c + ".specialChange", G[c]);
                return x.test(this.nodeName)
            },
            teardown: function (a) {
                f.event.remove(this, ".specialChange");
                return x.test(this.nodeName)
            }
        }, G = f.event.special.change.filters, G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.each(["bind", "one"], function (a, c) {
        f.fn[c] = function (a, d, e) {
            var g;
            if (typeof a == "object") {
                for (var h in a) this[c](h, d, a[h], e);
                return this
            }
            if (arguments.length === 2 || d === !1) e = d, d = b;
            c === "one" ? (g = function (a) {
                f(this).unbind(a, g);
                return e.apply(this, arguments)
            }, g.guid = e.guid || f.guid++) : g = e;
            if (a === "unload" && c !== "one") this.one(a, d, e);
            else
                for (var i = 0, j = this.length; i < j; i++) f.event.add(this[i], a, g, d);
            return this
        }
    }), f.fn.extend({
        unbind: function (a, b) {
            if (typeof a == "object" && !a.preventDefault)
                for (var c in a) this.unbind(c, a[c]);
            else
                for (var d = 0, e = this.length; d < e; d++) f.event.remove(this[d], a, b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                    f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    f.each(["live", "die"], function (a, c) {
            f.fn[c] = function (a, d, e, g) {
                var h, i = 0,
                    j, k, l, m = g || this.selector,
                    n = g ? this : f(this.context);
                if (typeof a == "object" && !a.preventDefault) {
                    for (var o in a) n[c](o, d, a[o], m);
                    return this
                }
                if (c === "die" && !a && g && g.charAt(0) === ".") {
                    n.unbind(g);
                    return this
                }
                if (d === !1 || f.isFunction(d)) e = d || C, d = b;
                a = (a || "").split(" ");
                while ((h = a[i++]) != null) {
                    j = w.exec(h), k = "", j && (k = j[0], h = h.replace(w, ""));
                    if (h === "hover") {
                        a.push("mouseenter" + k, "mouseleave" + k);
                        continue
                    }
                    l = h, K[h] ? (a.push(K[h] + k), h = h + k) : h = (K[h] || h) + k;
                    if (c === "live")
                        for (var p = 0, q = n.length; p < q; p++) f.event.add(n[p], "live." + M(h, m), {
                            data: d,
                            selector: m,
                            handler: e,
                            origType: h,
                            origHandler: e,
                            preType: l
                        });
                    else n.unbind("live." + M(h, m), e)
                }
                return this
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
            f.fn[b] = function (a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0)
        }),
        function () {
            function u(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        i = i[a];
                        while (i) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1) {
                                f || (i.sizcache = c, i.sizset = g);
                                if (typeof b != "string") {
                                    if (i === b) {
                                        j = !0;
                                        break
                                    }
                                } else if (k.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }

            function t(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        i = i[a];
                        while (i) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = 0,
                e = Object.prototype.toString,
                g = !1,
                h = !0,
                i = /\\/g,
                j = /\W/;
            [0, 0].sort(function () {
                h = !1;
                return 0
            });
            var k = function (b, d, f, g) {
                f = f || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return f;
                var i, j, n, o, q, r, s, t, u = !0,
                    w = k.isXML(d),
                    x = [],
                    y = b;
                do {
                    a.exec(""), i = a.exec(y);
                    if (i) {
                        y = i[3], x.push(i[1]);
                        if (i[2]) {
                            o = i[3];
                            break
                        }
                    }
                } while (i);
                if (x.length > 1 && m.exec(b))
                    if (x.length === 2 && l.relative[x[0]]) j = v(x[0] + x[1], d);
                    else {
                        j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                        while (x.length) b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
                    }
                else {
                    !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                    if (d) {
                        q = g ? {
                            expr: x.pop(),
                            set: p(g)
                        } : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w), j = q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1;
                        while (x.length) r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](n, s, w)
                    } else n = x = []
                }
                n || (n = j), n || k.error(r || b);
                if (e.call(n) === "[object Array]")
                    if (!u) f.push.apply(f, n);
                    else if (d && d.nodeType === 1)
                    for (t = 0; n[t] != null; t++) n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t]);
                else
                    for (t = 0; n[t] != null; t++) n[t] && n[t].nodeType === 1 && f.push(j[t]);
                else p(n, f);
                o && (k(o, h, f, g), k.uniqueSort(f));
                return f
            };
            k.uniqueSort = function (a) {
                if (r) {
                    g = h, a.sort(r);
                    if (g)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, k.matches = function (a, b) {
                return k(a, null, null, b)
            }, k.matchesSelector = function (a, b) {
                return k(b, null, null, [a]).length > 0
            }, k.find = function (a, b, c) {
                var d;
                if (!a) return [];
                for (var e = 0, f = l.order.length; e < f; e++) {
                    var g, h = l.order[e];
                    if (g = l.leftMatch[h].exec(a)) {
                        var j = g[1];
                        g.splice(1, 1);
                        if (j.substr(j.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(l.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, k.filter = function (a, c, d, e) {
                var f, g, h = a,
                    i = [],
                    j = c,
                    m = c && c[0] && k.isXML(c[0]);
                while (a && c.length) {
                    for (var n in l.filter)
                        if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                            var o, p, q = l.filter[n],
                                r = f[1];
                            g = !1, f.splice(1, 1);
                            if (r.substr(r.length - 1) === "\\") continue;
                            j === i && (i = []);
                            if (l.preFilter[n]) {
                                f = l.preFilter[n](f, j, d, i, e, m);
                                if (!f) g = o = !0;
                                else if (f === !0) continue
                            }
                            if (f)
                                for (var s = 0;
                                    (p = j[s]) != null; s++)
                                    if (p) {
                                        o = q(p, f, s, j);
                                        var t = e ^ !!o;
                                        d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                                    } if (o !== b) {
                                d || (j = i), a = a.replace(l.match[n], "");
                                if (!g) return [];
                                break
                            }
                        } if (a === h)
                        if (g == null) k.error(a);
                        else break;
                    h = a
                }
                return j
            }, k.error = function (a) {
                throw "Syntax error, unrecognized expression: " + a
            };
            var l = k.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        },
                        type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = typeof b == "string",
                                d = c && !j.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1);
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                } e && k.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !j.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && k.filter(b, a, !0)
                            }
                        },
                        "": function (a, b, c) {
                            var e, f = d++,
                                g = u;
                            typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
                        },
                        "~": function (a, b, c) {
                            var e, f = d++,
                                g = u;
                            typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function (a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            a = " " + a[1].replace(i, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(i, "")
                        },
                        TAG: function (a, b) {
                            return a[1].replace(i, "").toLowerCase()
                        },
                        CHILD: function (a) {
                            if (a[1] === "nth") {
                                a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && k.error(a[0]);
                            a[0] = d++;
                            return a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(i, "");
                            !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = k(b[3], null, null, c);
                                else {
                                    var g = k.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function (a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            return a.checked === !0
                        },
                        selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!k(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return b === 0
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 === 0
                        },
                        odd: function (a, b) {
                            return b % 2 === 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = l.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            k.error(e)
                        },
                        CHILD: function (a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    while (d = d.previousSibling)
                                        if (d.nodeType === 1) return !1;
                                    if (c === "first") return !0;
                                    d = a;
                                case "last":
                                    while (d = d.nextSibling)
                                        if (d.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    var e = b[2],
                                        f = b[3];
                                    if (e === 1 && f === 0) return !0;
                                    var g = b[0],
                                        h = a.parentNode;
                                    if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                        var i = 0;
                                        for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                                        h.sizcache = g
                                    }
                                    var j = a.nodeIndex - f;
                                    return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                            }
                        },
                        ID: function (a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function (a, b) {
                            return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = l.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                m = l.match.POS,
                n = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
            var p = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (q) {
                p = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if (e.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var f = a.length; c < f; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var r, s;
            c.documentElement.compareDocumentPosition ? r = function (a, b) {
                    if (a === b) {
                        g = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (r = function (a, b) {
                    if (a === b) {
                        g = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        h = a.parentNode,
                        i = b.parentNode,
                        j = h;
                    if (h === i) return s(a, b);
                    if (!h) return -1;
                    if (!i) return 1;
                    while (j) e.unshift(j), j = j.parentNode;
                    j = i;
                    while (j) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return s(e[k], f[k]);
                    return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
                }, s = function (a, b, c) {
                    if (a === b) return c;
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }), k.getText = function (a) {
                    var b = "",
                        c;
                    for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
                    return b
                },
                function () {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID = function (a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, l.filter.ID = function (a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function () {
                    var a = k,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        k = function (b, e, f, g) {
                            e = e || c;
                            if (!g && !k.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) return p(e.getElementsByTagName(b), f);
                                    if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) return p([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) return p([], f);
                                        if (i.id === h[3]) return p([i], f)
                                    }
                                    try {
                                        return p(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var m = e,
                                        n = e.getAttribute("id"),
                                        o = n || d,
                                        q = e.parentNode,
                                        r = /^\s*[+~]/.test(b);
                                    n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
                                    try {
                                        if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                                    } catch (s) {} finally {
                                        n || m.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) k[e] = a[e];
                        b = null
                    }
                }(),
                function () {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        k.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!k.isXML(a)) try {
                                if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11) return f
                                }
                            } catch (g) {}
                            return k(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), c.documentElement.contains ? k.contains = function (a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : k.contains = function () {
                    return !1
                }, k.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var v = function (a, b) {
                var c, d = [],
                    e = "",
                    f = b.nodeType ? [b] : b;
                while (c = l.match.PSEUDO.exec(a)) e += c[0], a = a.replace(l.match.PSEUDO, "");
                a = l.relative[a] ? a + "*" : a;
                for (var g = 0, h = f.length; g < h; g++) k(a, f[g], d);
                return k.filter(e, d)
            };
            f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc = k.isXML, f.contains = k.contains
        }();
    var N = /Until$/,
        O = /^(?:parents|prevUntil|prevAll)/,
        P = /,/,
        Q = /^.[^:#\[\.,]*$/,
        R = Array.prototype.slice,
        S = f.expr.match.POS,
        T = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(V(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {},
                    k = 1;
                if (g && a.length) {
                    for (d = 0, e = a.length; d < e; d++) i = a[d], j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode, k++
                    }
                }
                return c
            }
            var l = S.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c),
                g = R.call(arguments);
            N.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !T[a] ? f.unique(e) : e, (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|object|embed|option|style)/i,
        bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bc = /\/(java|ecma)script/i,
        bd = /^\s*<!(?:\[CDATA\[|\-\-)/,
        be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, f.support.htmlSerialize || (be._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !be[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bb.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bf(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bl)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i;
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !ba.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bh(a, d), e = bi(a), g = bi(d);
                for (h = 0; e[h]; ++h) g[h] && bh(e[h], g[h])
            }
            if (b) {
                bg(a, d);
                if (c) {
                    e = bi(a), g = bi(d);
                    for (h = 0; e[h]; ++h) bg(e[h], g[h])
                }
            }
            e = g = null;
            return d
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
                (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string")
                    if (!_.test(k)) k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                            m = be[l] || be._default,
                            n = m[0],
                            o = b.createElement("div");
                        o.innerHTML = m[1] + k + m[2];
                        while (n--) o = o.lastChild;
                        if (!f.support.tbody) {
                            var p = $.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                    } var r;
                if (!f.support.appendChecked)
                    if (k[0] && typeof (r = k.length) == "number")
                        for (i = 0; i < r; i++) bk(k[i]);
                    else bk(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bc.test(a.type)
                };
                for (j = 0; h[j]; j++)
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
            }
            return h
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.expando,
                g = f.event.special,
                h = f.support.deleteExpando;
            for (var i = 0, j;
                (j = a[i]) != null; i++) {
                if (j.nodeName && f.noData[j.nodeName.toLowerCase()]) continue;
                c = j[f.expando];
                if (c) {
                    b = d[c] && d[c][e];
                    if (b && b.events) {
                        for (var k in b.events) g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bm = /alpha\([^)]*\)/i,
        bn = /opacity=([^)]*)/,
        bo = /([A-Z]|^ms)/g,
        bp = /^-?\d+(?:px)?$/i,
        bq = /^-?\d/,
        br = /^([\-+])=([\-+.\de]+)/,
        bs = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bt = ["Left", "Right"],
        bu = ["Top", "Bottom"],
        bv, bw, bx;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bv(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = br.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bv) return bv(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return by(a, b, d);
                    f.swap(a, bs, function () {
                        e = by(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b) {
                if (!bp.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bn.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bm, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bm.test(g) ? g.replace(bm, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bv(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bw = function (a, c) {
        var d, e, g;
        c = c.replace(bo, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) return b;
        if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        return d
    }), c.documentElement.currentStyle && (bx = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            e = a.runtimeStyle && a.runtimeStyle[b],
            f = a.style;
        !bp.test(d) && bq.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto" : d
    }), bv = bw || bx, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bz = /%20/g,
        bA = /\[\]$/,
        bB = /\r?\n/g,
        bC = /#.*$/,
        bD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bE = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bF = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bG = /^(?:GET|HEAD)$/,
        bH = /^\/\//,
        bI = /\?/,
        bJ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bK = /^(?:select|textarea)/i,
        bL = /\s+/,
        bM = /([?&])_=[^&]*/,
        bN = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bO = f.fn.load,
        bP = {},
        bQ = {},
        bR, bS, bT = ["*/"] + ["*"];
    try {
        bR = e.href
    } catch (bU) {
        bR = c.createElement("a"), bR.href = "", bR = bR.href
    }
    bS = bN.exec(bR.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bO) return bO.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bJ, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bK.test(this.nodeName) || bE.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bB, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bB, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? bX(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), bX(a, b);
            return a
        },
        ajaxSettings: {
            url: bR,
            isLocal: bF.test(bS[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bT
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bV(bP),
        ajaxTransport: bV(bQ),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? bZ(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = b$(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f._Deferred(),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bD.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bC, "").replace(bH, bS[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bL), d.crossDomain == null && (r = bN.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bS[1] && r[2] == bS[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bS[3] || (bS[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bW(bP, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bG.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bI.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bM, "$1_=" + x);
                    d.url = y + (y === d.url ? (bI.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bT + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
            p = bW(bQ, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) bY(g, a[g], c, e);
            return d.join("&").replace(bz, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var b_ = f.now(),
        ca = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + b_++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cb = a.ActiveXObject ? function () {
            for (var a in cd) cd[a](0, 1)
        } : !1,
        cc = 0,
        cd;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
            return !this.isLocal && ce() || cf()
        } : ce,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function (e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields) h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function (a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]);
                                    if (e) h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange = d)
                    },
                    abort: function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cg = {},
        ch, ci, cj = /^(?:toggle|show|hide)$/,
        ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cl, cm = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cn;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cq("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cr(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(cq("hide", 3), a, b, c);
            for (var d = 0, e = this.length; d < e; d++)
                if (this[d].style) {
                    var g = f.css(this[d], "display");
                    g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
                } for (d = 0; d < e; d++) this[d].style && (this[d].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cq("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cr(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !== "px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            })
        },
        stop: function (a, b) {
            a && this.queue([]), this.each(function () {
                var a = f.timers,
                    c = a.length;
                b || f._unmark(!0, this);
                while (c--) a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
            }), b || this.dequeue();
            return this
        }
    }), f.each({
        slideDown: cq("show", 1),
        slideUp: cq("hide", 1),
        slideToggle: cq("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, b, c) {
            function g(a) {
                return d.step(a)
            }
            var d = this,
                e = f.fx;
            this.startTime = cn || co(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !cl && (cl = setInterval(e.tick, e.interval))
        },
        show: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = cn || co(),
                c = !0,
                d = this.elem,
                e = this.options,
                g, h;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties) e.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }), e.hide && f(d).hide();
                    if (e.hide || e.show)
                        for (var i in e.animatedProperties) f.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            for (var a = f.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
            a.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cl), cl = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cs = /^t(?:able|d|h)$/i,
        ct = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0],
            c;
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        var h = e.body,
            i = cu(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        f.offset.initialize();
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.offset.supportsFixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !cs.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        initialize: function () {
            var a = c.body,
                b = c.createElement("div"),
                d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0,
                j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = ct.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !ct.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cu(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cu(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);; /**/
/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2012 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.2.0
 * Date: 13th September 2012
 */

(function (b, f) {
    b.fn.jPlayer = function (a) {
        var c = "string" === typeof a,
            d = Array.prototype.slice.call(arguments, 1),
            e = this,
            a = !c && d.length ? b.extend.apply(null, [!0, a].concat(d)) : a;
        if (c && "_" === a.charAt(0)) return e;
        c ? this.each(function () {
            var c = b.data(this, "jPlayer"),
                h = c && b.isFunction(c[a]) ? c[a].apply(c, d) : c;
            if (h !== c && h !== f) return e = h, !1
        }) : this.each(function () {
            var c = b.data(this, "jPlayer");
            c ? c.option(a || {}) : b.data(this, "jPlayer", new b.jPlayer(a, this))
        });
        return e
    };
    b.jPlayer = function (a, c) {
        if (arguments.length) {
            this.element =
                b(c);
            this.options = b.extend(!0, {}, this.options, a);
            var d = this;
            this.element.bind("remove.jPlayer", function () {
                d.destroy()
            });
            this._init()
        }
    };
    b.jPlayer.emulateMethods = "load play pause";
    b.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    b.jPlayer.emulateOptions = "muted volume";
    b.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    b.jPlayer.event = {
        ready: "jPlayer_ready",
        flashreset: "jPlayer_flashreset",
        resize: "jPlayer_resize",
        repeat: "jPlayer_repeat",
        click: "jPlayer_click",
        error: "jPlayer_error",
        warning: "jPlayer_warning",
        loadstart: "jPlayer_loadstart",
        progress: "jPlayer_progress",
        suspend: "jPlayer_suspend",
        abort: "jPlayer_abort",
        emptied: "jPlayer_emptied",
        stalled: "jPlayer_stalled",
        play: "jPlayer_play",
        pause: "jPlayer_pause",
        loadedmetadata: "jPlayer_loadedmetadata",
        loadeddata: "jPlayer_loadeddata",
        waiting: "jPlayer_waiting",
        playing: "jPlayer_playing",
        canplay: "jPlayer_canplay",
        canplaythrough: "jPlayer_canplaythrough",
        seeking: "jPlayer_seeking",
        seeked: "jPlayer_seeked",
        timeupdate: "jPlayer_timeupdate",
        ended: "jPlayer_ended",
        ratechange: "jPlayer_ratechange",
        durationchange: "jPlayer_durationchange",
        volumechange: "jPlayer_volumechange"
    };
    b.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");
    b.jPlayer.pause = function () {
        b.each(b.jPlayer.prototype.instances, function (a, c) {
            c.data("jPlayer").status.srcSet && c.jPlayer("pause")
        })
    };
    b.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    b.jPlayer.convertTime = function (a) {
        var c = new Date(1E3 * a),
            d = c.getUTCHours(),
            a = c.getUTCMinutes(),
            c = c.getUTCSeconds(),
            d = b.jPlayer.timeFormat.padHour && 10 > d ? "0" + d : d,
            a = b.jPlayer.timeFormat.padMin && 10 > a ? "0" + a : a,
            c = b.jPlayer.timeFormat.padSec && 10 > c ? "0" + c : c;
        return (b.jPlayer.timeFormat.showHour ? d + b.jPlayer.timeFormat.sepHour : "") + (b.jPlayer.timeFormat.showMin ? a + b.jPlayer.timeFormat.sepMin : "") + (b.jPlayer.timeFormat.showSec ? c + b.jPlayer.timeFormat.sepSec : "")
    };
    b.jPlayer.uaBrowser =
        function (a) {
            var a = a.toLowerCase(),
                c = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                b = /(msie) ([\w.]+)/,
                e = /(mozilla)(?:.*? rv:([\w.]+))?/,
                a = /(webkit)[ \/]([\w.]+)/.exec(a) || c.exec(a) || b.exec(a) || 0 > a.indexOf("compatible") && e.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        };
    b.jPlayer.uaPlatform = function (a) {
        var b = a.toLowerCase(),
            d = /(android)/,
            e = /(mobile)/,
            a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b) || [],
            b = /(ipad|playbook)/.exec(b) || !e.exec(b) && d.exec(b) || [];
        a[1] && (a[1] = a[1].replace(/\s/g,
            "_"));
        return {
            platform: a[1] || "",
            tablet: b[1] || ""
        }
    };
    b.jPlayer.browser = {};
    b.jPlayer.platform = {};
    var i = b.jPlayer.uaBrowser(navigator.userAgent);
    i.browser && (b.jPlayer.browser[i.browser] = !0, b.jPlayer.browser.version = i.version);
    i = b.jPlayer.uaPlatform(navigator.userAgent);
    i.platform && (b.jPlayer.platform[i.platform] = !0, b.jPlayer.platform.mobile = !i.tablet, b.jPlayer.platform.tablet = !!i.tablet);
    b.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.2.0",
            needFlash: "2.2.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: 0.8,
            muted: !1,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            fullScreen: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1E3
            },
            loop: !1,
            repeat: function (a) {
                a.jPlayer.options.loop ? b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                    b(this).jPlayer("play")
                }) : b(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullScreen: {
                msie: /msie [0-6]/,
                ipad: /ipad.*?os [0-4]/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3](?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                webos: /webos/,
                playbook: /playbook/
            },
            verticalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function () {
            var a = this;
            this.element.empty();
            this.status = b.extend({}, this.status);
            this.internal = b.extend({}, this.internal);
            this.internal.domNode = this.element.get(0);
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            b.each(this.options.supplied.toLowerCase().split(","), function (c, d) {
                var e = d.replace(/^\s+|\s+$/g, "");
                if (a.format[e]) {
                    var f = false;
                    b.each(a.formats, function (a, b) {
                        if (e === b) {
                            f = true;
                            return false
                        }
                    });
                    f || a.formats.push(e)
                }
            });
            b.each(this.options.solution.toLowerCase().split(","), function (c, d) {
                var e =
                    d.replace(/^\s+|\s+$/g, "");
                if (a.solution[e]) {
                    var f = false;
                    b.each(a.solutions, function (a, b) {
                        if (e === b) {
                            f = true;
                            return false
                        }
                    });
                    f || a.solutions.push(e)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = b.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            });
            this.internal.audio = b.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: f
            });
            this.internal.video =
                b.extend({}, {
                    id: this.options.idPrefix + "_video_" + this.count,
                    jq: f
                });
            this.internal.flash = b.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: f,
                swf: this.options.swfPath + (this.options.swfPath.toLowerCase().slice(-4) !== ".swf" ? (this.options.swfPath && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf" : "")
            });
            this.internal.poster = b.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: f
            });
            b.each(b.jPlayer.event, function (b, c) {
                if (a.options[b] !== f) {
                    a.element.bind(c + ".jPlayer", a.options[b]);
                    a.options[b] = f
                }
            });
            this.require.audio = false;
            this.require.video = false;
            b.each(this.formats, function (b, c) {
                a.require[a.format[c].media] = true
            });
            this.options = this.require.video ? b.extend(true, {}, this.optionsVideo, this.options) : b.extend(true, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function () {
                (!a.status.video || a.status.waitForPlay) && a.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = b("#" + this.internal.poster.id);
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function () {
                a._trigger(b.jPlayer.event.click)
            });
            this.html.audio.available = false;
            if (this.require.audio) {
                this.htmlElement.audio = document.createElement("audio");
                this.htmlElement.audio.id = this.internal.audio.id;
                this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)
            }
            this.html.video.available = false;
            if (this.require.video) {
                this.htmlElement.video = document.createElement("video");
                this.htmlElement.video.id = this.internal.video.id;
                this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)
            }
            this.flash.available =
                this._checkForFlash(10);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            b.each(this.formats, function (b, c) {
                a.html.canPlay[c] = a.html[a.format[c].media].available && "" !== a.htmlElement[a.format[c].media].canPlayType(a.format[c].codec);
                a.flash.canPlay[c] = a.format[c].flashCanPlay && a.flash.available
            });
            this.html.desired = false;
            this.flash.desired = false;
            b.each(this.solutions, function (c, d) {
                if (c === 0) a[d].desired = true;
                else {
                    var e = false,
                        f = false;
                    b.each(a.formats, function (b, c) {
                        a[a.solutions[0]].canPlay[c] && (a.format[c].media ===
                            "video" ? f = true : e = true)
                    });
                    a[d].desired = a.require.audio && !e || a.require.video && !f
                }
            });
            this.html.support = {};
            this.flash.support = {};
            b.each(this.formats, function (b, c) {
                a.html.support[c] = a.html.canPlay[c] && a.html.desired;
                a.flash.support[c] = a.flash.canPlay[c] && a.flash.desired
            });
            this.html.used = false;
            this.flash.used = false;
            b.each(this.solutions, function (c, d) {
                b.each(a.formats, function (b, c) {
                    if (a[d].support[c]) {
                        a[d].used = true;
                        return false
                    }
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            if (!this.html.used && !this.flash.used) {
                this._error({
                    type: b.jPlayer.error.NO_SOLUTION,
                    context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                    message: b.jPlayer.errorMsg.NO_SOLUTION,
                    hint: b.jPlayer.errorHint.NO_SOLUTION
                });
                this.css.jq.noSolution.length && this.css.jq.noSolution.show()
            } else this.css.jq.noSolution.length && this.css.jq.noSolution.hide();
            if (this.flash.used) {
                var c, d = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume +
                    "&muted=" + this.options.muted;
                if (b.jPlayer.browser.msie && Number(b.jPlayer.browser.version) <= 8) {
                    d = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + d + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    c = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');
                    for (var e = 0; e < d.length; e++) c.appendChild(document.createElement(d[e]))
                } else {
                    e = function (a, b, c) {
                        var d = document.createElement("param");
                        d.setAttribute("name", b);
                        d.setAttribute("value", c);
                        a.appendChild(d)
                    };
                    c = document.createElement("object");
                    c.setAttribute("id", this.internal.flash.id);
                    c.setAttribute("data", this.internal.flash.swf);
                    c.setAttribute("type", "application/x-shockwave-flash");
                    c.setAttribute("width", "1");
                    c.setAttribute("height", "1");
                    e(c, "flashvars", d);
                    e(c, "allowscriptaccess", "always");
                    e(c, "bgcolor",
                        this.options.backgroundColor);
                    e(c, "wmode", this.options.wmode)
                }
                this.element.append(c);
                this.internal.flash.jq = b(c)
            }
            if (this.html.used) {
                if (this.html.audio.available) {
                    this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio);
                    this.element.append(this.htmlElement.audio);
                    this.internal.audio.jq = b("#" + this.internal.audio.id)
                }
                if (this.html.video.available) {
                    this._addHtmlEventListeners(this.htmlElement.video, this.html.video);
                    this.element.append(this.htmlElement.video);
                    this.internal.video.jq = b("#" + this.internal.video.id);
                    this.status.nativeVideoControls ? this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }) : this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this.internal.video.jq.bind("click.jPlayer", function () {
                        a._trigger(b.jPlayer.event.click)
                    })
                }
            }
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function () {
                a.internal.ready = true;
                a.version.flash = "n/a";
                a._trigger(b.jPlayer.event.repeat);
                a._trigger(b.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this._updateInterface();
            this._updateButtons(false);
            this._updateAutohide();
            this._updateVolume(this.options.volume);
            this._updateMute(this.options.muted);
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            b.jPlayer.prototype.count++
        },
        destroy: function () {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            b.each(this.css.jq, function (a, b) {
                b.length && b.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },
        enable: function () {},
        disable: function () {},
        _testCanPlayType: function (a) {
            try {
                a.canPlayType(this.format.mp3.codec);
                return true
            } catch (b) {
                return false
            }
        },
        _uaBlocklist: function (a) {
            var c = navigator.userAgent.toLowerCase(),
                d = false;
            b.each(a, function (a, b) {
                if (b &&
                    b.test(c)) {
                    d = true;
                    return false
                }
            });
            return d
        },
        _restrictNativeVideoControls: function () {
            if (this.require.audio && this.status.nativeVideoControls) {
                this.status.nativeVideoControls = false;
                this.status.noFullScreen = true
            }
        },
        _updateNativeVideoControls: function () {
            if (this.html.video.available && this.html.used) {
                this.htmlElement.video.controls = this.status.nativeVideoControls;
                this._updateAutohide();
                if (this.status.nativeVideoControls && this.require.video) {
                    this.internal.poster.jq.hide();
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                } else if (this.status.waitForPlay && this.status.video) {
                    this.internal.poster.jq.show();
                    this.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    })
                }
            }
        },
        _addHtmlEventListeners: function (a, c) {
            var d = this;
            a.preload = this.options.preload;
            a.muted = this.options.muted;
            a.volume = this.options.volume;
            a.addEventListener("progress", function () {
                if (c.gate) {
                    d._getHtmlStatus(a);
                    d._updateInterface();
                    d._trigger(b.jPlayer.event.progress)
                }
            }, false);
            a.addEventListener("timeupdate", function () {
                if (c.gate) {
                    d._getHtmlStatus(a);
                    d._updateInterface();
                    d._trigger(b.jPlayer.event.timeupdate)
                }
            }, false);
            a.addEventListener("durationchange", function () {
                if (c.gate) {
                    d._getHtmlStatus(a);
                    d._updateInterface();
                    d._trigger(b.jPlayer.event.durationchange)
                }
            }, false);
            a.addEventListener("play", function () {
                if (c.gate) {
                    d._updateButtons(true);
                    d._html_checkWaitForPlay();
                    d._trigger(b.jPlayer.event.play)
                }
            }, false);
            a.addEventListener("playing", function () {
                if (c.gate) {
                    d._updateButtons(true);
                    d._seeked();
                    d._trigger(b.jPlayer.event.playing)
                }
            }, false);
            a.addEventListener("pause",
                function () {
                    if (c.gate) {
                        d._updateButtons(false);
                        d._trigger(b.jPlayer.event.pause)
                    }
                }, false);
            a.addEventListener("waiting", function () {
                if (c.gate) {
                    d._seeking();
                    d._trigger(b.jPlayer.event.waiting)
                }
            }, false);
            a.addEventListener("seeking", function () {
                if (c.gate) {
                    d._seeking();
                    d._trigger(b.jPlayer.event.seeking)
                }
            }, false);
            a.addEventListener("seeked", function () {
                if (c.gate) {
                    d._seeked();
                    d._trigger(b.jPlayer.event.seeked)
                }
            }, false);
            a.addEventListener("volumechange", function () {
                if (c.gate) {
                    d.options.volume = a.volume;
                    d.options.muted =
                        a.muted;
                    d._updateMute();
                    d._updateVolume();
                    d._trigger(b.jPlayer.event.volumechange)
                }
            }, false);
            a.addEventListener("suspend", function () {
                if (c.gate) {
                    d._seeked();
                    d._trigger(b.jPlayer.event.suspend)
                }
            }, false);
            a.addEventListener("ended", function () {
                if (c.gate) {
                    if (!b.jPlayer.browser.webkit) d.htmlElement.media.currentTime = 0;
                    d.htmlElement.media.pause();
                    d._updateButtons(false);
                    d._getHtmlStatus(a, true);
                    d._updateInterface();
                    d._trigger(b.jPlayer.event.ended)
                }
            }, false);
            a.addEventListener("error", function () {
                if (c.gate) {
                    d._updateButtons(false);
                    d._seeked();
                    if (d.status.srcSet) {
                        clearTimeout(d.internal.htmlDlyCmdId);
                        d.status.waitForLoad = true;
                        d.status.waitForPlay = true;
                        d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
                            width: "0px",
                            height: "0px"
                        });
                        d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show();
                        d.css.jq.videoPlay.length && d.css.jq.videoPlay.show();
                        d._error({
                            type: b.jPlayer.error.URL,
                            context: d.status.src,
                            message: b.jPlayer.errorMsg.URL,
                            hint: b.jPlayer.errorHint.URL
                        })
                    }
                }
            }, false);
            b.each(b.jPlayer.htmlEvent,
                function (e, g) {
                    a.addEventListener(this, function () {
                        c.gate && d._trigger(b.jPlayer.event[g])
                    }, false)
                })
        },
        _getHtmlStatus: function (a, b) {
            var d = 0,
                e = 0,
                g = 0,
                f = 0;
            if (isFinite(a.duration)) this.status.duration = a.duration;
            d = a.currentTime;
            e = this.status.duration > 0 ? 100 * d / this.status.duration : 0;
            if (typeof a.seekable === "object" && a.seekable.length > 0) {
                g = this.status.duration > 0 ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100;
                f = this.status.duration > 0 ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0
            } else {
                g =
                    100;
                f = e
            }
            if (b) e = f = d = 0;
            this.status.seekPercent = g;
            this.status.currentPercentRelative = f;
            this.status.currentPercentAbsolute = e;
            this.status.currentTime = d;
            this.status.readyState = a.readyState;
            this.status.networkState = a.networkState;
            this.status.playbackRate = a.playbackRate;
            this.status.ended = a.ended
        },
        _resetStatus: function () {
            this.status = b.extend({}, this.status, b.jPlayer.prototype.status)
        },
        _trigger: function (a, c, d) {
            a = b.Event(a);
            a.jPlayer = {};
            a.jPlayer.version = b.extend({}, this.version);
            a.jPlayer.options = b.extend(true, {}, this.options);
            a.jPlayer.status = b.extend(true, {}, this.status);
            a.jPlayer.html = b.extend(true, {}, this.html);
            a.jPlayer.flash = b.extend(true, {}, this.flash);
            if (c) a.jPlayer.error = b.extend({}, c);
            if (d) a.jPlayer.warning = b.extend({}, d);
            this.element.trigger(a)
        },
        jPlayerFlashEvent: function (a, c) {
            if (a === b.jPlayer.event.ready)
                if (this.internal.ready) {
                    if (this.flash.gate) {
                        if (this.status.srcSet) {
                            var d = this.status.currentTime,
                                e = this.status.paused;
                            this.setMedia(this.status.media);
                            d > 0 && (e ? this.pause(d) : this.play(d))
                        }
                        this._trigger(b.jPlayer.event.flashreset)
                    }
                } else {
                    this.internal.ready =
                        true;
                    this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this.version.flash = c.version;
                    this.version.needFlash !== this.version.flash && this._error({
                        type: b.jPlayer.error.VERSION,
                        context: this.version.flash,
                        message: b.jPlayer.errorMsg.VERSION + this.version.flash,
                        hint: b.jPlayer.errorHint.VERSION
                    });
                    this._trigger(b.jPlayer.event.repeat);
                    this._trigger(a)
                } if (this.flash.gate) switch (a) {
                case b.jPlayer.event.progress:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.timeupdate:
                    this._getFlashStatus(c);
                    this._updateInterface();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.play:
                    this._seeked();
                    this._updateButtons(true);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.pause:
                    this._updateButtons(false);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ended:
                    this._updateButtons(false);
                    this._trigger(a);
                    break;
                case b.jPlayer.event.click:
                    this._trigger(a);
                    break;
                case b.jPlayer.event.error:
                    this.status.waitForLoad = true;
                    this.status.waitForPlay = true;
                    this.status.video && this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    });
                    this._validString(this.status.media.poster) &&
                        this.internal.poster.jq.show();
                    this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                    this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                    this._updateButtons(false);
                    this._error({
                        type: b.jPlayer.error.URL,
                        context: c.src,
                        message: b.jPlayer.errorMsg.URL,
                        hint: b.jPlayer.errorHint.URL
                    });
                    break;
                case b.jPlayer.event.seeking:
                    this._seeking();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.seeked:
                    this._seeked();
                    this._trigger(a);
                    break;
                case b.jPlayer.event.ready:
                    break;
                default:
                    this._trigger(a)
            }
            return false
        },
        _getFlashStatus: function (a) {
            this.status.seekPercent = a.seekPercent;
            this.status.currentPercentRelative = a.currentPercentRelative;
            this.status.currentPercentAbsolute = a.currentPercentAbsolute;
            this.status.currentTime = a.currentTime;
            this.status.duration = a.duration;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = false
        },
        _updateButtons: function (a) {
            if (a !== f) {
                this.status.paused = !a;
                if (this.css.jq.play.length && this.css.jq.pause.length)
                    if (a) {
                        this.css.jq.play.hide();
                        this.css.jq.pause.show()
                    } else {
                        this.css.jq.play.show();
                        this.css.jq.pause.hide()
                    }
            }
            if (this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length)
                if (this.status.noFullScreen) {
                    this.css.jq.fullScreen.hide();
                    this.css.jq.restoreScreen.hide()
                } else if (this.options.fullScreen) {
                this.css.jq.fullScreen.hide();
                this.css.jq.restoreScreen.show()
            } else {
                this.css.jq.fullScreen.show();
                this.css.jq.restoreScreen.hide()
            }
            if (this.css.jq.repeat.length && this.css.jq.repeatOff.length)
                if (this.options.loop) {
                    this.css.jq.repeat.hide();
                    this.css.jq.repeatOff.show()
                } else {
                    this.css.jq.repeat.show();
                    this.css.jq.repeatOff.hide()
                }
        },
        _updateInterface: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && this.css.jq.playBar.width(this.status.currentPercentRelative + "%");
            this.css.jq.currentTime.length && this.css.jq.currentTime.text(b.jPlayer.convertTime(this.status.currentTime));
            this.css.jq.duration.length && this.css.jq.duration.text(b.jPlayer.convertTime(this.status.duration))
        },
        _seeking: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function () {
            this.html.audio.gate = false;
            this.html.video.gate = false;
            this.flash.gate = false
        },
        _resetActive: function () {
            this.html.active = false;
            this.flash.active = false
        },
        setMedia: function (a) {
            var c = this,
                d = false,
                e = this.status.media.poster !== a.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            b.each(this.formats,
                function (e, f) {
                    var i = c.format[f].media === "video";
                    b.each(c.solutions, function (b, e) {
                        if (c[e].support[f] && c._validString(a[f])) {
                            var g = e === "html";
                            if (i) {
                                if (g) {
                                    c.html.video.gate = true;
                                    c._html_setVideo(a);
                                    c.html.active = true
                                } else {
                                    c.flash.gate = true;
                                    c._flash_setVideo(a);
                                    c.flash.active = true
                                }
                                c.css.jq.videoPlay.length && c.css.jq.videoPlay.show();
                                c.status.video = true
                            } else {
                                if (g) {
                                    c.html.audio.gate = true;
                                    c._html_setAudio(a);
                                    c.html.active = true
                                } else {
                                    c.flash.gate = true;
                                    c._flash_setAudio(a);
                                    c.flash.active = true
                                }
                                c.css.jq.videoPlay.length &&
                                    c.css.jq.videoPlay.hide();
                                c.status.video = false
                            }
                            d = true;
                            return false
                        }
                    });
                    if (d) return false
                });
            if (d) {
                if ((!this.status.nativeVideoControls || !this.html.video.gate) && this._validString(a.poster)) e ? this.htmlElement.poster.src = a.poster : this.internal.poster.jq.show();
                this.status.srcSet = true;
                this.status.media = b.extend({}, a);
                this._updateButtons(false);
                this._updateInterface()
            } else this._error({
                type: b.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: b.jPlayer.errorMsg.NO_SUPPORT,
                hint: b.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function () {
            this._resetStatus();
            this._updateButtons(false);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function () {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },
        load: function () {
            this.status.srcSet ?
                this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        play: function (a) {
            a = typeof a === "number" ? a : NaN;
            this.status.srcSet ? this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a) : this._urlNotSetError("play")
        },
        videoPlay: function () {
            this.play()
        },
        pause: function (a) {
            a = typeof a === "number" ? a : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
        },
        pauseOthers: function () {
            var a =
                this;
            b.each(this.instances, function (b, d) {
                a.element !== d && d.data("jPlayer").status.srcSet && d.jPlayer("pause")
            })
        },
        stop: function () {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function (a) {
            a = this._limitValue(a, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
        },
        _muted: function (a) {
            this.options.muted = a;
            this.html.used && this._html_mute(a);
            this.flash.used && this._flash_mute(a);
            if (!this.html.video.gate && !this.html.audio.gate) {
                this._updateMute(a);
                this._updateVolume(this.options.volume);
                this._trigger(b.jPlayer.event.volumechange)
            }
        },
        mute: function (a) {
            a = a === f ? true : !!a;
            this._muted(a)
        },
        unmute: function (a) {
            a = a === f ? true : !!a;
            this._muted(!a)
        },
        _updateMute: function (a) {
            if (a === f) a = this.options.muted;
            if (this.css.jq.mute.length && this.css.jq.unmute.length)
                if (this.status.noVolume) {
                    this.css.jq.mute.hide();
                    this.css.jq.unmute.hide()
                } else if (a) {
                this.css.jq.mute.hide();
                this.css.jq.unmute.show()
            } else {
                this.css.jq.mute.show();
                this.css.jq.unmute.hide()
            }
        },
        volume: function (a) {
            a = this._limitValue(a, 0, 1);
            this.options.volume = a;
            this.html.used && this._html_volume(a);
            this.flash.used && this._flash_volume(a);
            if (!this.html.video.gate && !this.html.audio.gate) {
                this._updateVolume(a);
                this._trigger(b.jPlayer.event.volumechange)
            }
        },
        volumeBar: function (a) {
            if (this.css.jq.volumeBar.length) {
                var b = this.css.jq.volumeBar.offset(),
                    d = a.pageX - b.left,
                    e = this.css.jq.volumeBar.width(),
                    a = this.css.jq.volumeBar.height() -
                    a.pageY + b.top,
                    b = this.css.jq.volumeBar.height();
                this.options.verticalVolume ? this.volume(a / b) : this.volume(d / e)
            }
            this.options.muted && this._muted(false)
        },
        volumeBarValue: function (a) {
            this.volumeBar(a)
        },
        _updateVolume: function (a) {
            if (a === f) a = this.options.volume;
            a = this.options.muted ? 0 : a;
            if (this.status.noVolume) {
                this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide();
                this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide();
                this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()
            } else {
                this.css.jq.volumeBar.length &&
                    this.css.jq.volumeBar.show();
                if (this.css.jq.volumeBarValue.length) {
                    this.css.jq.volumeBarValue.show();
                    this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](a * 100 + "%")
                }
                this.css.jq.volumeMax.length && this.css.jq.volumeMax.show()
            }
        },
        volumeMax: function () {
            this.volume(1);
            this.options.muted && this._muted(false)
        },
        _cssSelectorAncestor: function (a) {
            var c = this;
            this.options.cssSelectorAncestor = a;
            this._removeUiClass();
            this.ancestorJq = a ? b(a) : [];
            a && this.ancestorJq.length !== 1 && this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: a,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
            });
            this._addUiClass();
            b.each(this.options.cssSelector, function (a, b) {
                c._cssSelector(a, b)
            })
        },
        _cssSelector: function (a, c) {
            var d = this;
            if (typeof c === "string")
                if (b.jPlayer.prototype.options.cssSelector[a]) {
                    this.css.jq[a] && this.css.jq[a].length && this.css.jq[a].unbind(".jPlayer");
                    this.options.cssSelector[a] = c;
                    this.css.cs[a] = this.options.cssSelectorAncestor +
                        " " + c;
                    this.css.jq[a] = c ? b(this.css.cs[a]) : [];
                    this.css.jq[a].length && this.css.jq[a].bind("click.jPlayer", function (c) {
                        d[a](c);
                        b(this).blur();
                        return false
                    });
                    c && this.css.jq[a].length !== 1 && this._warning({
                        type: b.jPlayer.warning.CSS_SELECTOR_COUNT,
                        context: this.css.cs[a],
                        message: b.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[a].length + " found for " + a + " method.",
                        hint: b.jPlayer.warningHint.CSS_SELECTOR_COUNT
                    })
                } else this._warning({
                    type: b.jPlayer.warning.CSS_SELECTOR_METHOD,
                    context: a,
                    message: b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                    hint: b.jPlayer.warningHint.CSS_SELECTOR_METHOD
                });
            else this._warning({
                type: b.jPlayer.warning.CSS_SELECTOR_STRING,
                context: c,
                message: b.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: b.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        seekBar: function (a) {
            if (this.css.jq.seekBar) {
                var b = this.css.jq.seekBar.offset(),
                    a = a.pageX - b.left,
                    b = this.css.jq.seekBar.width();
                this.playHead(100 * a / b)
            }
        },
        playBar: function (a) {
            this.seekBar(a)
        },
        repeat: function () {
            this._loop(true)
        },
        repeatOff: function () {
            this._loop(false)
        },
        _loop: function (a) {
            if (this.options.loop !==
                a) {
                this.options.loop = a;
                this._updateButtons();
                this._trigger(b.jPlayer.event.repeat)
            }
        },
        currentTime: function () {},
        duration: function () {},
        gui: function () {},
        noSolution: function () {},
        option: function (a, c) {
            var d = a;
            if (arguments.length === 0) return b.extend(true, {}, this.options);
            if (typeof a === "string") {
                var e = a.split(".");
                if (c === f) {
                    for (var d = b.extend(true, {}, this.options), g = 0; g < e.length; g++)
                        if (d[e[g]] !== f) d = d[e[g]];
                        else {
                            this._warning({
                                type: b.jPlayer.warning.OPTION_KEY,
                                context: a,
                                message: b.jPlayer.warningMsg.OPTION_KEY,
                                hint: b.jPlayer.warningHint.OPTION_KEY
                            });
                            return f
                        } return d
                }
                for (var g = d = {}, h = 0; h < e.length; h++)
                    if (h < e.length - 1) {
                        g[e[h]] = {};
                        g = g[e[h]]
                    } else g[e[h]] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function (a) {
            var c = this;
            b.each(a, function (a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function (a, c) {
            var d = this;
            switch (a) {
                case "volume":
                    this.volume(c);
                    break;
                case "muted":
                    this._muted(c);
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(c);
                    break;
                case "cssSelector":
                    b.each(c, function (a, b) {
                        d._cssSelector(a,
                            b)
                    });
                    break;
                case "fullScreen":
                    if (this.options[a] !== c) {
                        this._removeUiClass();
                        this.options[a] = c;
                        this._refreshSize()
                    }
                    break;
                case "size":
                    !this.options.fullScreen && this.options[a].cssClass !== c.cssClass && this._removeUiClass();
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullScreen && this.options[a].cssClass !== c.cssClass && this._removeUiClass();
                    this.options[a] = b.extend({}, this.options[a], c);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[a] = b.extend({},
                        this.options[a], c);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(c);
                    break;
                case "nativeVideoControls":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullScreen":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullScreen = this._uaBlocklist(this.options.noFullScreen);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[a] = b.extend({}, this.options[a], c);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    if (this.options[a] !== c)(this.options[a] = c) ? this._emulateHtmlBridge() : this._destroyHtmlBridge()
            }
            return this
        },
        _refreshSize: function () {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(b.jPlayer.event.resize)
        },
        _setSize: function () {
            if (this.options.fullScreen) {
                this.status.width = this.options.sizeFull.width;
                this.status.height = this.options.sizeFull.height;
                this.status.cssClass = this.options.sizeFull.cssClass
            } else {
                this.status.width = this.options.size.width;
                this.status.height = this.options.size.height;
                this.status.cssClass = this.options.size.cssClass
            }
            this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function () {
            this.ancestorJq.length &&
                this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function () {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            });
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && (this.flash.active && this.status.video) && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function () {
            var a = this,
                b = function () {
                    a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function () {
                        clearTimeout(a.internal.autohideId);
                        a.internal.autohideId = setTimeout(function () {
                            a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                        }, a.options.autohide.hold)
                    })
                };
            if (this.css.jq.gui.length) {
                this.css.jq.gui.stop(true, true);
                clearTimeout(this.internal.autohideId);
                this.element.unbind(".jPlayerAutohide");
                this.css.jq.gui.unbind(".jPlayerAutohide");
                if (this.status.nativeVideoControls) this.css.jq.gui.hide();
                else if (this.options.fullScreen && this.options.autohide.full || !this.options.fullScreen && this.options.autohide.restored) {
                    this.element.bind("mousemove.jPlayer.jPlayerAutohide", b);
                    this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", b);
                    this.css.jq.gui.hide()
                } else this.css.jq.gui.show()
            }
        },
        fullScreen: function () {
            this._setOption("fullScreen", true)
        },
        restoreScreen: function () {
            this._setOption("fullScreen", false)
        },
        _html_initMedia: function () {
            this.htmlElement.media.src = this.status.src;
            this.options.preload !==
                "none" && this._html_load();
            this._trigger(b.jPlayer.event.timeupdate)
        },
        _html_setAudio: function (a) {
            var c = this;
            b.each(this.formats, function (b, e) {
                if (c.html.support[e] && a[e]) {
                    c.status.src = a[e];
                    c.status.format[e] = true;
                    c.status.formatType = e;
                    return false
                }
            });
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia()
        },
        _html_setVideo: function (a) {
            var c = this;
            b.each(this.formats, function (b, e) {
                if (c.html.support[e] && a[e]) {
                    c.status.src = a[e];
                    c.status.format[e] = true;
                    c.status.formatType = e;
                    return false
                }
            });
            if (this.status.nativeVideoControls) this.htmlElement.video.poster =
                this._validString(a.poster) ? a.poster : "";
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia()
        },
        _html_resetMedia: function () {
            if (this.htmlElement.media) {
                this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls && this.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                });
                this.htmlElement.media.pause()
            }
        },
        _html_clearMedia: function () {
            if (this.htmlElement.media) {
                this.htmlElement.media.src = "";
                this.htmlElement.media.load()
            }
        },
        _html_load: function () {
            if (this.status.waitForLoad) {
                this.status.waitForLoad =
                    false;
                this.htmlElement.media.load()
            }
            clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function (a) {
            var b = this;
            this._html_load();
            this.htmlElement.media.play();
            if (!isNaN(a)) try {
                this.htmlElement.media.currentTime = a
            } catch (d) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    b.play(a)
                }, 100);
                return
            }
            this._html_checkWaitForPlay()
        },
        _html_pause: function (a) {
            var b = this;
            a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            this.htmlElement.media.pause();
            if (!isNaN(a)) try {
                this.htmlElement.media.currentTime =
                    a
            } catch (d) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    b.pause(a)
                }, 100);
                return
            }
            a > 0 && this._html_checkWaitForPlay()
        },
        _html_playHead: function (a) {
            var b = this;
            this._html_load();
            try {
                if (typeof this.htmlElement.media.seekable === "object" && this.htmlElement.media.seekable.length > 0) this.htmlElement.media.currentTime = a * this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length - 1) / 100;
                else if (this.htmlElement.media.duration > 0 && !isNaN(this.htmlElement.media.duration)) this.htmlElement.media.currentTime =
                    a * this.htmlElement.media.duration / 100;
                else throw "e";
            } catch (d) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    b.playHead(a)
                }, 100);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = false;
                this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
                if (this.status.video) {
                    this.internal.poster.jq.hide();
                    this.internal.video.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                }
            }
        },
        _html_volume: function (a) {
            if (this.html.audio.available) this.htmlElement.audio.volume =
                a;
            if (this.html.video.available) this.htmlElement.video.volume = a
        },
        _html_mute: function (a) {
            if (this.html.audio.available) this.htmlElement.audio.muted = a;
            if (this.html.video.available) this.htmlElement.video.muted = a
        },
        _flash_setAudio: function (a) {
            var c = this;
            try {
                b.each(this.formats, function (b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4a":
                            case "fla":
                                c._getMovie().fl_setAudio_m4a(a[d]);
                                break;
                            case "mp3":
                                c._getMovie().fl_setAudio_mp3(a[d]);
                                break;
                            case "rtmpa":
                                c._getMovie().fl_setAudio_rtmp(a[d])
                        }
                        c.status.src =
                            a[d];
                        c.status.format[d] = true;
                        c.status.formatType = d;
                        return false
                    }
                });
                if (this.options.preload === "auto") {
                    this._flash_load();
                    this.status.waitForLoad = false
                }
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_setVideo: function (a) {
            var c = this;
            try {
                b.each(this.formats, function (b, d) {
                    if (c.flash.support[d] && a[d]) {
                        switch (d) {
                            case "m4v":
                            case "flv":
                                c._getMovie().fl_setVideo_m4v(a[d]);
                                break;
                            case "rtmpv":
                                c._getMovie().fl_setVideo_rtmp(a[d])
                        }
                        c.status.src = a[d];
                        c.status.format[d] = true;
                        c.status.formatType = d;
                        return false
                    }
                });
                if (this.options.preload ===
                    "auto") {
                    this._flash_load();
                    this.status.waitForLoad = false
                }
            } catch (d) {
                this._flashError(d)
            }
        },
        _flash_resetMedia: function () {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            });
            this._flash_pause(NaN)
        },
        _flash_clearMedia: function () {
            try {
                this._getMovie().fl_clearMedia()
            } catch (a) {
                this._flashError(a)
            }
        },
        _flash_load: function () {
            try {
                this._getMovie().fl_load()
            } catch (a) {
                this._flashError(a)
            }
            this.status.waitForLoad = false
        },
        _flash_play: function (a) {
            try {
                this._getMovie().fl_play(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad =
                false;
            this._flash_checkWaitForPlay()
        },
        _flash_pause: function (a) {
            try {
                this._getMovie().fl_pause(a)
            } catch (b) {
                this._flashError(b)
            }
            if (a > 0) {
                this.status.waitForLoad = false;
                this._flash_checkWaitForPlay()
            }
        },
        _flash_playHead: function (a) {
            try {
                this._getMovie().fl_play_head(a)
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function () {
            if (this.status.waitForPlay) {
                this.status.waitForPlay = false;
                this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
                if (this.status.video) {
                    this.internal.poster.jq.hide();
                    this.internal.flash.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    })
                }
            }
        },
        _flash_volume: function (a) {
            try {
                this._getMovie().fl_volume(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _flash_mute: function (a) {
            try {
                this._getMovie().fl_mute(a)
            } catch (b) {
                this._flashError(b)
            }
        },
        _getMovie: function () {
            return document[this.internal.flash.id]
        },
        _checkForFlash: function (a) {
            var b = false,
                d;
            if (window.ActiveXObject) try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a);
                b = true
            } catch (e) {} else if (navigator.plugins && navigator.mimeTypes.length >
                0)(d = navigator.plugins["Shockwave Flash"]) && navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1") >= a && (b = true);
            return b
        },
        _validString: function (a) {
            return a && typeof a === "string"
        },
        _limitValue: function (a, b, d) {
            return a < b ? b : a > d ? d : a
        },
        _urlNotSetError: function (a) {
            this._error({
                type: b.jPlayer.error.URL_NOT_SET,
                context: a,
                message: b.jPlayer.errorMsg.URL_NOT_SET,
                hint: b.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function (a) {
            var c;
            c = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({
                type: b.jPlayer.error[c],
                context: this.internal.flash.swf,
                message: b.jPlayer.errorMsg[c] + a.message,
                hint: b.jPlayer.errorHint[c]
            });
            this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function (a) {
            this._trigger(b.jPlayer.event.error, a);
            this.options.errorAlerts && this._alert("Error!" + (a.message ? "\n\n" + a.message : "") + (a.hint ? "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
        },
        _warning: function (a) {
            this._trigger(b.jPlayer.event.warning, f, a);
            this.options.warningAlerts && this._alert("Warning!" + (a.message ? "\n\n" + a.message : "") + (a.hint ?
                "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
        },
        _alert: function (a) {
            alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a)
        },
        _emulateHtmlBridge: function () {
            var a = this;
            b.each(b.jPlayer.emulateMethods.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = function (b) {
                    a[d](b)
                }
            });
            b.each(b.jPlayer.event, function (c, d) {
                var e = true;
                b.each(b.jPlayer.reservedEvent.split(/\s+/g), function (a, b) {
                    if (b === c) return e = false
                });
                e && a.element.bind(d + ".jPlayer.jPlayerHtml", function () {
                    a._emulateHtmlUpdate();
                    var b = document.createEvent("Event");
                    b.initEvent(c, false, true);
                    a.internal.domNode.dispatchEvent(b)
                })
            })
        },
        _emulateHtmlUpdate: function () {
            var a = this;
            b.each(b.jPlayer.emulateStatus.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = a.status[d]
            });
            b.each(b.jPlayer.emulateOptions.split(/\s+/g), function (b, d) {
                a.internal.domNode[d] = a.options[d]
            })
        },
        _destroyHtmlBridge: function () {
            var a = this;
            this.element.unbind(".jPlayerHtml");
            b.each((b.jPlayer.emulateMethods + " " + b.jPlayer.emulateStatus + " " + b.jPlayer.emulateOptions).split(/\s+/g),
                function (b, d) {
                    delete a.internal.domNode[d]
                })
        }
    };
    b.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    };
    b.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + b.jPlayer.prototype.version.script + " needs Jplayer.swf version " + b.jPlayer.prototype.version.needFlash + " but found "
    };
    b.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    };
    b.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    };
    b.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    };
    b.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
})(jQuery);; /**/