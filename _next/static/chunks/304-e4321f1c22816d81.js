"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [304], {
        46304: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return K
                }
            });
            var n = r(42474),
                i = r.n(n),
                o = r(89539),
                u = r.n(o),
                a = r(48764).Buffer,
                c = r(34155),
                s = function(e, t) {
                    return (s = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
                },
                f = function() {
                    return (f = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function u(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(u, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function p(e, t) {
                var r, n, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1], i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2], u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var g = function(e) {
                    function t(r, n) {
                        void 0 === r && (r = 403);
                        for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                        var u = e.apply(this, i) || this;
                        return Error.captureStackTrace && Error.captureStackTrace(u, t), u.name = "HttpError", u.status = r, u.message = n, u
                    }
                    return ! function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        s(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }(t, e), t
                }(Error),
                y = function(e, t) {
                    if ("string" != typeof e) throw TypeError("argument str must be a string");
                    for (var r = {}, n = e.split(v), i = (t || {}).decode || d, o = 0; o < n.length; o++) {
                        var u = n[o],
                            a = u.indexOf("=");
                        if (!(a < 0)) {
                            var c = u.substr(0, a).trim(),
                                s = u.substr(++a, u.length).trim();
                            '"' == s[0] && (s = s.slice(1, -1)), void 0 == r[c] && (r[c] = function(e, t) {
                                try {
                                    return t(e)
                                } catch (t) {
                                    return e
                                }
                            }(s, i))
                        }
                    }
                    return r
                },
                h = function(e, t, r) {
                    var n = r || {},
                        i = n.encode || m;
                    if ("function" != typeof i) throw TypeError("option encode is invalid");
                    if (!b.test(e)) throw TypeError("argument name is invalid");
                    var o = i(t);
                    if (o && !b.test(o)) throw TypeError("argument val is invalid");
                    var u = e + "=" + o;
                    if (null != n.maxAge) {
                        var a = n.maxAge - 0;
                        if (isNaN(a) || !isFinite(a)) throw TypeError("option maxAge is invalid");
                        u += "; Max-Age=" + Math.floor(a)
                    }
                    if (n.domain) {
                        if (!b.test(n.domain)) throw TypeError("option domain is invalid");
                        u += "; Domain=" + n.domain
                    }
                    if (n.path) {
                        if (!b.test(n.path)) throw TypeError("option path is invalid");
                        u += "; Path=" + n.path
                    }
                    if (n.expires) {
                        if ("function" != typeof n.expires.toUTCString) throw TypeError("option expires is invalid");
                        u += "; Expires=" + n.expires.toUTCString()
                    }
                    if (n.httpOnly && (u += "; HttpOnly"), n.secure && (u += "; Secure"), n.sameSite) switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                        case !0:
                        case "strict":
                            u += "; SameSite=Strict";
                            break;
                        case "lax":
                            u += "; SameSite=Lax";
                            break;
                        case "none":
                            u += "; SameSite=None";
                            break;
                        default:
                            throw TypeError("option sameSite is invalid")
                    }
                    return u
                },
                d = decodeURIComponent,
                m = encodeURIComponent,
                v = /; */,
                b = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};

            function E(e, t, r) {
                return e(r = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(e, null == t ? r.path : t)
                    }
                }, r.exports), r.exports
            }
            var S = E(function(e, t) {
                    t.sign = function(e, t) {
                        if ("string" != typeof e) throw TypeError("Cookie value must be provided as a string.");
                        if ("string" != typeof t) throw TypeError("Secret string must be provided.");
                        return e + "." + i().createHmac("sha256", t).update(e).digest("base64").replace(/\=+$/, "")
                    }, t.unsign = function(e, r) {
                        if ("string" != typeof e) throw TypeError("Signed cookie string must be provided.");
                        if ("string" != typeof r) throw TypeError("Secret string must be provided.");
                        var n = e.slice(0, e.lastIndexOf(".")),
                            o = t.sign(n, r),
                            u = a.from(o),
                            c = a.alloc(u.length);
                        return c.write(e), !!i().timingSafeEqual(u, c) && n
                    }
                }),
                x = function(e) {
                    return e instanceof a
                },
                O = u().inherits,
                k = E(function(e, t) {
                    var r, n = /%[sdj%]/g;
                    t.format = function(e) {
                        if (!d(e)) {
                            for (var t = [], r = 0; r < arguments.length; r++) t.push(o(arguments[r]));
                            return t.join(" ")
                        }
                        for (var r = 1, i = arguments, u = i.length, a = String(e).replace(n, function(e) {
                                if ("%%" === e) return "%";
                                if (r >= u) return e;
                                switch (e) {
                                    case "%s":
                                        return String(i[r++]);
                                    case "%d":
                                        return Number(i[r++]);
                                    case "%j":
                                        try {
                                            return JSON.stringify(i[r++])
                                        } catch (e) {
                                            return "[Circular]"
                                        }
                                    default:
                                        return e
                                }
                            }), c = i[r]; r < u; c = i[++r]) y(c) || !b(c) ? a += " " + c : a += " " + o(c);
                        return a
                    }, t.deprecate = function(e, r) {
                        if (m(w.process)) return function() {
                            return t.deprecate(e, r).apply(this, arguments)
                        };
                        if (!0 === c.noDeprecation) return e;
                        var n = !1;
                        return function() {
                            if (!n) {
                                if (c.throwDeprecation) throw Error(r);
                                c.traceDeprecation ? console.trace(r) : console.error(r), n = !0
                            }
                            return e.apply(this, arguments)
                        }
                    };
                    var i = {};

                    function o(e, r) {
                        var n = {
                            seen: [],
                            stylize: a
                        };
                        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(r) ? n.showHidden = r : r && t._extend(n, r), m(n.showHidden) && (n.showHidden = !1), m(n.depth) && (n.depth = 2), m(n.colors) && (n.colors = !1), m(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = u), s(n, e, n.depth)
                    }

                    function u(e, t) {
                        var r = o.styles[t];
                        return r ? "\x1b[" + o.colors[r][0] + "m" + e + "\x1b[" + o.colors[r][1] + "m" : e
                    }

                    function a(e, t) {
                        return e
                    }

                    function s(e, r, n) {
                        if (e.customInspect && r && k(r.inspect) && r.inspect !== t.inspect && !(r.constructor && r.constructor.prototype === r)) {
                            var i, o, u, a, c = r.inspect(n, e);
                            return d(c) || (c = s(e, c, n)), c
                        }
                        var b = function(e, t) {
                            if (m(t)) return e.stylize("undefined", "undefined");
                            if (d(t)) {
                                var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                return e.stylize(r, "string")
                            }
                            return h(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : y(t) ? e.stylize("null", "null") : void 0
                        }(e, r);
                        if (b) return b;
                        var w = Object.keys(r),
                            x = (u = {}, w.forEach(function(e, t) {
                                u[e] = !0
                            }), u);
                        if (e.showHidden && (w = Object.getOwnPropertyNames(r)), S(r) && (w.indexOf("message") >= 0 || w.indexOf("description") >= 0)) return f(r);
                        if (0 === w.length) {
                            if (k(r)) {
                                var O = r.name ? ": " + r.name : "";
                                return e.stylize("[Function" + O + "]", "special")
                            }
                            if (v(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                            if (E(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                            if (S(r)) return f(r)
                        }
                        var j = "",
                            T = !1,
                            q = ["{", "}"];
                        return (p(r) && (T = !0, q = ["[", "]"]), k(r) && (j = " [Function" + (r.name ? ": " + r.name : "") + "]"), v(r) && (j = " " + RegExp.prototype.toString.call(r)), E(r) && (j = " " + Date.prototype.toUTCString.call(r)), S(r) && (j = " " + f(r)), 0 !== w.length || T && 0 != r.length) ? n < 0 ? v(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), a = T ? function(e, t, r, n, i) {
                            for (var o = [], u = 0, a = t.length; u < a; ++u) A(t, String(u)) ? o.push(l(e, t, r, n, String(u), !0)) : o.push("");
                            return i.forEach(function(i) {
                                i.match(/^\d+$/) || o.push(l(e, t, r, n, i, !0))
                            }), o
                        }(e, r, n, x, w) : w.map(function(t) {
                            return l(e, r, n, x, t, T)
                        }), e.seen.pop(), i = j, o = q, a.reduce(function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }, 0) > 60 ? o[0] + ("" === i ? "" : i + "\n ") + " " + a.join(",\n  ") + " " + o[1] : o[0] + i + " " + a.join(", ") + " " + o[1]) : q[0] + j + q[1]
                    }

                    function f(e) {
                        return "[" + Error.prototype.toString.call(e) + "]"
                    }

                    function l(e, t, r, n, i, o) {
                        var u, a, c;
                        if ((c = Object.getOwnPropertyDescriptor(t, i) || {
                                value: t[i]
                            }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), A(n, i) || (u = "[" + i + "]"), !a && (0 > e.seen.indexOf(c.value) ? (a = y(r) ? s(e, c.value, null) : s(e, c.value, r - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
                                return "  " + e
                            }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                                return "   " + e
                            }).join("\n")) : a = e.stylize("[Circular]", "special")), m(u)) {
                            if (o && i.match(/^\d+$/)) return a;
                            (u = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u = u.substr(1, u.length - 2), u = e.stylize(u, "name")) : (u = u.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u = e.stylize(u, "string"))
                        }
                        return u + ": " + a
                    }

                    function p(e) {
                        return Array.isArray(e)
                    }

                    function g(e) {
                        return "boolean" == typeof e
                    }

                    function y(e) {
                        return null === e
                    }

                    function h(e) {
                        return "number" == typeof e
                    }

                    function d(e) {
                        return "string" == typeof e
                    }

                    function m(e) {
                        return void 0 === e
                    }

                    function v(e) {
                        return b(e) && "[object RegExp]" === j(e)
                    }

                    function b(e) {
                        return "object" == typeof e && null !== e
                    }

                    function E(e) {
                        return b(e) && "[object Date]" === j(e)
                    }

                    function S(e) {
                        return b(e) && ("[object Error]" === j(e) || e instanceof Error)
                    }

                    function k(e) {
                        return "function" == typeof e
                    }

                    function j(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function T(e) {
                        return e < 10 ? "0" + e.toString(10) : e.toString(10)
                    }
                    t.debuglog = function(e) {
                        if (m(r) && (r = c.env.NODE_DEBUG || ""), !i[e = e.toUpperCase()]) {
                            if (RegExp("\\b" + e + "\\b", "i").test(r)) {
                                var n = c.pid;
                                i[e] = function() {
                                    var r = t.format.apply(t, arguments);
                                    console.error("%s %d: %s", e, n, r)
                                }
                            } else i[e] = function() {}
                        }
                        return i[e]
                    }, t.inspect = o, o.colors = {
                        bold: [1, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        white: [37, 39],
                        grey: [90, 39],
                        black: [30, 39],
                        blue: [34, 39],
                        cyan: [36, 39],
                        green: [32, 39],
                        magenta: [35, 39],
                        red: [31, 39],
                        yellow: [33, 39]
                    }, o.styles = {
                        special: "cyan",
                        number: "yellow",
                        boolean: "yellow",
                        undefined: "grey",
                        null: "bold",
                        string: "green",
                        date: "magenta",
                        regexp: "red"
                    }, t.isArray = p, t.isBoolean = g, t.isNull = y, t.isNullOrUndefined = function(e) {
                        return null == e
                    }, t.isNumber = h, t.isString = d, t.isSymbol = function(e) {
                        return "symbol" == typeof e
                    }, t.isUndefined = m, t.isRegExp = v, t.isObject = b, t.isDate = E, t.isError = S, t.isFunction = k, t.isPrimitive = function(e) {
                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                    }, t.isBuffer = x;
                    var q = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    function A(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    t.log = function() {
                        var e, r;
                        console.log("%s - %s", (r = [T((e = new Date).getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":"), [e.getDate(), q[e.getMonth()], r].join(" ")), t.format.apply(t, arguments))
                    }, t.inherits = O, t._extend = function(e, t) {
                        if (!t || !b(t)) return e;
                        for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                        return e
                    }
                }),
                j = E(function(e) {
                    /*!
                     * The buffer module from node.js, for the browser.
                     *
                     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                     * @license  MIT
                     */
                    function t(e, t) {
                        if (e === t) return 0;
                        for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                            if (e[i] !== t[i]) {
                                r = e[i], n = t[i];
                                break
                            }
                        return r < n ? -1 : n < r ? 1 : 0
                    }

                    function r(e) {
                        return w.Buffer && "function" == typeof w.Buffer.isBuffer ? w.Buffer.isBuffer(e) : !!(null != e && e._isBuffer)
                    }
                    var n = Object.prototype.hasOwnProperty,
                        i = Array.prototype.slice,
                        o = "foo" === (function() {}).name;

                    function u(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function a(e) {
                        return !r(e) && "function" == typeof w.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && !!(e instanceof DataView || e.buffer && e.buffer instanceof ArrayBuffer))
                    }
                    var c = e.exports = y,
                        s = /\s*function\s+([^\(\s]*)\s*/;

                    function f(e) {
                        if (k.isFunction(e)) {
                            if (o) return e.name;
                            var t = e.toString().match(s);
                            return t && t[1]
                        }
                    }

                    function l(e, t) {
                        return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
                    }

                    function p(e) {
                        if (o || !k.isFunction(e)) return k.inspect(e);
                        var t = f(e);
                        return "[Function" + (t ? ": " + t : "") + "]"
                    }

                    function g(e, t, r, n, i) {
                        throw new c.AssertionError({
                            message: r,
                            actual: e,
                            expected: t,
                            operator: n,
                            stackStartFunction: i
                        })
                    }

                    function y(e, t) {
                        e || g(e, !0, t, "==", c.ok)
                    }

                    function h(e, n, o, c) {
                        if (e === n) return !0;
                        if (r(e) && r(n)) return 0 === t(e, n);
                        if (k.isDate(e) && k.isDate(n)) return e.getTime() === n.getTime();
                        if (k.isRegExp(e) && k.isRegExp(n)) return e.source === n.source && e.global === n.global && e.multiline === n.multiline && e.lastIndex === n.lastIndex && e.ignoreCase === n.ignoreCase;
                        if ((null === e || "object" != typeof e) && (null === n || "object" != typeof n)) return o ? e === n : e == n;
                        if (a(e) && a(n) && u(e) === u(n) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === t(new Uint8Array(e.buffer), new Uint8Array(n.buffer));
                        if (r(e) !== r(n)) return !1;
                        var s = (c = c || {
                            actual: [],
                            expected: []
                        }).actual.indexOf(e);
                        return -1 !== s && s === c.expected.indexOf(n) || (c.actual.push(e), c.expected.push(n), function(e, t, r, n) {
                            if (null == e || null == t) return !1;
                            if (k.isPrimitive(e) || k.isPrimitive(t)) return e === t;
                            if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                            var o, u, a = d(e),
                                c = d(t);
                            if (a && !c || !a && c) return !1;
                            if (a) return h(e = i.call(e), t = i.call(t), r);
                            var s = b(e),
                                f = b(t);
                            if (s.length !== f.length) return !1;
                            for (s.sort(), f.sort(), u = s.length - 1; u >= 0; u--)
                                if (s[u] !== f[u]) return !1;
                            for (u = s.length - 1; u >= 0; u--)
                                if (!h(e[o = s[u]], t[o], r, n)) return !1;
                            return !0
                        }(e, n, o, c))
                    }

                    function d(e) {
                        return "[object Arguments]" == Object.prototype.toString.call(e)
                    }

                    function m(e, t) {
                        if (!e || !t) return !1;
                        if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                        try {
                            if (e instanceof t) return !0
                        } catch (e) {}
                        return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
                    }

                    function v(e, t, r, n) {
                        if ("function" != typeof t) throw TypeError('"block" argument must be a function');
                        "string" == typeof r && (n = r, r = null), i = function(e) {
                            var t;
                            try {
                                e()
                            } catch (e) {
                                t = e
                            }
                            return t
                        }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && g(i, r, "Missing expected exception" + n);
                        var i, o = "string" == typeof n,
                            u = !e && k.isError(i),
                            a = !e && i && !r;
                        if ((u && o && m(i, r) || a) && g(i, r, "Got unwanted exception" + n), e && i && r && !m(i, r) || !e && i) throw i
                    }
                    c.AssertionError = function(e) {
                        this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = l(p(this.actual), 128) + " " + this.operator + " " + l(p(this.expected), 128), this.generatedMessage = !0);
                        var t = e.stackStartFunction || g;
                        if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                        else {
                            var r = Error();
                            if (r.stack) {
                                var n = r.stack,
                                    i = f(t),
                                    o = n.indexOf("\n" + i);
                                if (o >= 0) {
                                    var u = n.indexOf("\n", o + 1);
                                    n = n.substring(u + 1)
                                }
                                this.stack = n
                            }
                        }
                    }, k.inherits(c.AssertionError, Error), c.fail = g, c.ok = y, c.equal = function(e, t, r) {
                        e != t && g(e, t, r, "==", c.equal)
                    }, c.notEqual = function(e, t, r) {
                        e == t && g(e, t, r, "!=", c.notEqual)
                    }, c.deepEqual = function(e, t, r) {
                        h(e, t, !1) || g(e, t, r, "deepEqual", c.deepEqual)
                    }, c.deepStrictEqual = function(e, t, r) {
                        h(e, t, !0) || g(e, t, r, "deepStrictEqual", c.deepStrictEqual)
                    }, c.notDeepEqual = function(e, t, r) {
                        h(e, t, !1) && g(e, t, r, "notDeepEqual", c.notDeepEqual)
                    }, c.notDeepStrictEqual = function e(t, r, n) {
                        h(t, r, !0) && g(t, r, n, "notDeepStrictEqual", e)
                    }, c.strictEqual = function(e, t, r) {
                        e !== t && g(e, t, r, "===", c.strictEqual)
                    }, c.notStrictEqual = function(e, t, r) {
                        e === t && g(e, t, r, "!==", c.notStrictEqual)
                    }, c.throws = function(e, t, r) {
                        v(!0, e, t, r)
                    }, c.doesNotThrow = function(e, t, r) {
                        v(!1, e, t, r)
                    }, c.ifError = function(e) {
                        if (e) throw e
                    };
                    var b = Object.keys || function(e) {
                        var t = [];
                        for (var r in e) n.call(e, r) && t.push(r);
                        return t
                    }
                }),
                T = E(function(e, t) {
                    function r(e) {
                        j("string" == typeof e, "the list of characters must be a string!");
                        var t = a.byteLength(e);
                        return function(r) {
                            j("number" == typeof(r = r || 10) && r >= 0, "the length of the random string must be a number!");
                            for (var n = "", i = 0; i < r; i++) n += e[Math.floor(t * Math.random())];
                            return n
                        }
                    }(t = e.exports = r("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")).base62 = t, t.base36 = r("abcdefghijklmnopqrstuvwxyz0123456789"), t.base10 = r("0123456789"), t.create = r
                }),
                q = i().randomBytes === i().pseudoRandomBytes ? 1 : 3,
                A = function(e, t) {
                    if (void 0 !== t && "function" != typeof t) throw TypeError("argument callback must be a function");
                    if (!t && !w.Promise) throw TypeError("argument callback is required");
                    return t ? z(e, q, t) : new Promise(function(t, r) {
                        z(e, q, function(e, n) {
                            if (e) return r(e);
                            t(n)
                        })
                    })
                };

            function z(e, t, r) {
                i().randomBytes(e, function(n, i) {
                    return n ? --t ? void setTimeout(z.bind(null, e, t, r), 10) : r(n) : r(null, i)
                })
            }
            A.sync = function(e) {
                for (var t = null, r = 0; r < q; r++) try {
                    return i().randomBytes(e)
                } catch (e) {
                    t = e
                }
                throw t
            };
            var D = /=+$/,
                _ = /\+/g,
                P = /\//g,
                B = function(e, t) {
                    if (void 0 !== t && "function" != typeof t) throw TypeError("argument callback must be a function");
                    if (!t && !w.Promise) throw TypeError("argument callback is required");
                    return t ? C(e, t) : new Promise(function(t, r) {
                        C(e, function(e, n) {
                            if (e) return r(e);
                            t(n)
                        })
                    })
                };

            function C(e, t) {
                A(e, function(e, r) {
                    if (e) return t(e);
                    t(null, N(r))
                })
            }

            function N(e) {
                return e.toString("base64").replace(D, "").replace(_, "-").replace(P, "_")
            }
            B.sync = function(e) {
                return N(A.sync(e))
            };
            var F = function(e, t) {
                    var r = String(e),
                        n = String(t),
                        o = i().pseudoRandomBytes(32);
                    return function(e, t) {
                        if (e.length !== t.length) return !1;
                        if (i().timingSafeEqual) return i().timingSafeEqual(e, t);
                        for (var r = 0; r < e.length; r++)
                            if (e[r] !== t[r]) return !1;
                        return !0
                    }(i().createHmac("sha256", o).update(r).digest(), i().createHmac("sha256", o).update(n).digest()) && e === t
                },
                M = /=/g,
                L = /\+/g,
                R = /\//g;

            function H(e) {
                if (!(this instanceof H)) return new H(e);
                var t = e || {},
                    r = void 0 !== t.saltLength ? t.saltLength : 8;
                if ("number" != typeof r || !isFinite(r) || r < 1) throw TypeError("option saltLength must be finite number > 1");
                var n = void 0 !== t.secretLength ? t.secretLength : 18;
                if ("number" != typeof n || !isFinite(n) || n < 1) throw TypeError("option secretLength must be finite number > 1");
                this.saltLength = r, this.secretLength = n
            }
            H.prototype.create = function(e) {
                if (!e || "string" != typeof e) throw TypeError("argument secret is required");
                return this._tokenize(e, T(this.saltLength))
            }, H.prototype.secret = function(e) {
                return B(this.secretLength, e)
            }, H.prototype.secretSync = function() {
                return B.sync(this.secretLength)
            }, H.prototype._tokenize = function(e, t) {
                return t + "-" + i().createHash("sha1").update(t + "-" + e, "ascii").digest("base64").replace(L, "-").replace(R, "_").replace(M, "")
            }, H.prototype.verify = function(e, t) {
                if (!e || "string" != typeof e || !t || "string" != typeof t) return !1;
                var r = t.indexOf("-");
                if (-1 === r) return !1;
                var n = t.substr(0, r);
                return F(t, this._tokenize(e, n))
            };
            var U = new H,
                I = function(e, t) {
                    var r = t.ignoredMethods,
                        n = t.csrfErrorMessage,
                        i = t.tokenKey,
                        o = t.cookieOptions,
                        u = t.secret;
                    return function(t, a) {
                        return l(void 0, void 0, void 0, function() {
                            var c, s, f, l, d, m, v, b;
                            return p(this, function(p) {
                                try {
                                    if ("string" != typeof t.method) throw new g(403, n);
                                    if (r.includes(t.method)) return [2, e(t, a)];
                                    if ((null === (m = t.headers) || void 0 === m ? void 0 : m.cookie) === void 0 || (s = (c = y(null === (v = t.headers) || void 0 === v ? void 0 : v.cookie))[i], f = c.csrfSecret, !s)) throw new g(403, n);
                                    if (null != u) {
                                        if (!(l = S.unsign(s, u))) throw new g(403, n);
                                        s = l
                                    }
                                    if (!U.verify(f, s)) throw new g(403, n);
                                    return d = void 0, d = null != u ? S.sign(U.create(f), u) : U.create(f), a.setHeader("Set-Cookie", h(i, d, o)), [2, e(t, a)]
                                } catch (e) {
                                    return [2, a.status(null !== (b = e.status) && void 0 !== b ? b : 500).json({
                                        message: e.message
                                    })]
                                }
                                return [2]
                            })
                        })
                    }
                },
                $ = function(e, t) {
                    var r;
                    return r = t.toLowerCase(), null != e.headers.cookie ? y(e.headers.cookie)[r] : ""
                },
                G = function(e, t) {
                    var r = t.secret,
                        n = t.tokenKey,
                        i = t.cookieOptions;
                    return function() {
                        for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                        return l(void 0, void 0, void 0, function() {
                            var o, u, a, c, s, f;
                            return p(this, function(l) {
                                return u = (o = t.length > 1) ? t[0] : t[0].req, a = o ? t[1] : t[0].res, c = $(u, "csrfSecret") || U.secretSync(), s = U.create(c), f = null != r ? S.sign(s, r) : s, a.setHeader("Set-Cookie", [h("csrfSecret", c, i), h(n, f, i)]), [2, e(u, a)]
                            })
                        })
                    }
                },
                J = {
                    tokenKey: "XSRF-TOKEN",
                    csrfErrorMessage: "Invalid CSRF token",
                    ignoredMethods: ["GET", "HEAD", "OPTIONS"],
                    cookieOptions: {
                        httpOnly: !0,
                        path: "/",
                        sameSite: "lax",
                        secure: !0
                    }
                };

            function K(e) {
                var t = f(f({}, J), e);
                return {
                    setup: function(e) {
                        return G(e, {
                            tokenKey: t.tokenKey,
                            cookieOptions: t.cookieOptions,
                            secret: t.secret
                        })
                    },
                    csrf: function(e) {
                        return I(e, t)
                    }
                }
            }
        }
    }
]);