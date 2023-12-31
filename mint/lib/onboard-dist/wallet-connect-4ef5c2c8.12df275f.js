parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}({
    "b1xZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0, require("regenerator-runtime/runtime");
        var e = require("./onboard-b2a5d97d.js");

        function n(e, n, r, t, c, o, a) {
            try {
                var i = e[o](a),
                    u = i.value
            } catch (l) {
                return void r(l)
            }
            i.done ? n(u) : Promise.resolve(u).then(t, c)
        }

        function r(e) {
            return function() {
                var r = this,
                    t = arguments;
                return new Promise(function(c, o) {
                    var a = e.apply(r, t);

                    function i(e) {
                        n(a, c, o, i, u, "next", e)
                    }

                    function u(e) {
                        n(a, c, o, i, u, "throw", e)
                    }
                    i(void 0)
                })
            }
        }
        require("bignumber.js"), require("bnc-sdk"), require("bowser");
        var t = '\n  <svg \n    height="25" \n    viewBox="0 0 40 25" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n  <path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" \n        fill="#3b99fc"/>\n  </svg>\n';

        function c(n) {
            var c = n.infuraKey,
                o = n.rpc,
                a = n.bridge,
                i = n.preferred,
                u = n.label,
                l = n.iconSrc,
                s = n.svg,
                d = n.networkId,
                f = (0, e.g)(e.a).blockPollingInterval;
            if (!(c || o && o[d]))
                throw new Error('A "infuraKey" or a "rpc" object with a parameter of '.concat(d, " must be included in the WalletConnect initialization object"));
            return {
                name: u || "WalletConnect",
                svg: s || t,
                iconSrc: l,
                wallet: function() {
                    var e = r(regeneratorRuntime.mark(function e(n) {
                        var t, i, u, l, s, p, h, v, w;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, require("_bundle_loader")(require.resolve("./providerEngine-7945c13d.js"));
                                    case 2:
                                        return t = e.sent.default, e.next = 5, require("_bundle_loader")(require.resolve("@walletconnect/web3-provider"));
                                    case 5:
                                        if (i = e.sent, u = i.default, l = n.resetWalletState, s = n.networkName, p = n.getBalance, h = o && o[d] ? o[d] : "https://".concat(s(d), ".infura.io/v3/").concat(c), v = t({
                                                rpcUrl: h
                                            }), !c || !o) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new Error("WalletConnect requires  an Infura ID or a custom RPC object but not both.");
                                    case 12:
                                        return (w = new u({
                                            infuraId: c,
                                            rpc: o,
                                            chainId: d,
                                            bridge: a,
                                            pollingInterval: f
                                        })).autoRefreshOnNetworkChange = !1, w.wc.on("disconnect", function() {
                                            l({
                                                disconnected: !0,
                                                walletName: "WalletConnect"
                                            })
                                        }), e.abrupt("return", {
                                            provider: w,
                                            interface: {
                                                name: "WalletConnect", connect: function() {
                                                    return new Promise(function(e, n) {
                                                        w.enable().then(e).catch(function() {
                                                            return n({
                                                                message: "This dapp needs access to your account information."
                                                            })
                                                        })
                                                    })
                                                }, address: {
                                                    onChange: function(e) {
                                                        w.send("eth_accounts").then(function(n) {
                                                            return n[0] && e(n[0])
                                                        }), w.on("accountsChanged", function(n) {
                                                            return e(n[0])
                                                        })
                                                    }
                                                }, network: {
                                                    onChange: function(e) {
                                                        w.send("eth_chainId").then(e), w.on("chainChanged", e)
                                                    }
                                                }, balance: {
                                                    get: function() {
                                                        var e = r(regeneratorRuntime.mark(function e() {
                                                            return regeneratorRuntime.wrap(function(e) {
                                                                for (;;)
                                                                    switch (e.prev = e.next) {
                                                                        case 0:
                                                                            if (w.wc._accounts[0]) {
                                                                                e.next = 2;
                                                                                break
                                                                            }
                                                                            return e.abrupt("return", null);
                                                                        case 2:
                                                                            return e.abrupt("return", p(v, w.wc._accounts[0]));
                                                                        case 3:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                            }, e)
                                                        }));
                                                        return function() {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }()
                                                }, disconnect: function() {
                                                    w.wc.killSession(), w.stop()
                                                }
                                            }
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                        }, e)
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                type: "sdk",
                desktop: !0,
                mobile: !0,
                preferred: i
            }
        }
        var o = c;
        exports.default = o;
    }, {
        "regenerator-runtime/runtime": "KA2S",
        "./onboard-b2a5d97d.js": "b3Cl",
        "bignumber.js": "LdGf",
        "bnc-sdk": "wAne",
        "bowser": "JSid",
        "_bundle_loader": "fiHL",
        "./providerEngine-7945c13d.js": [
            ["providerEngine-7945c13d.01157afe.js", "ihoK"], "ihoK"
        ],
        "@walletconnect/web3-provider": [
            ["esm.439ef28d.js", "IGDU"], "IGDU"
        ]
    }],
    "IC3c": [function(require, module, exports) {
        var t = null;

        function e() {
            return t || (t = n()), t
        }

        function n() {
            try {
                throw new Error
            } catch (e) {
                var t = ("" + e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
                if (t)
                    return r(t[0])
            }
            return "/"
        }

        function r(t) {
            return ("" + t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/"
        }
        exports.getBundleURL = e, exports.getBaseURL = r;
    }, {}],
    "fiHL": [function(require, module, exports) {
        var r = require("./bundle-url").getBundleURL;

        function e(r) {
            Array.isArray(r) || (r = [r]);
            var e = r[r.length - 1];
            try {
                return Promise.resolve(require(e))
            } catch (n) {
                if ("MODULE_NOT_FOUND" === n.code)
                    return new s(function(n, i) {
                        t(r.slice(0, -1)).then(function() {
                            return require(e)
                        }).then(n, i)
                    });
                throw n
            }
        }

        function t(r) {
            return Promise.all(r.map(u))
        }
        var n = {};

        function i(r, e) {
            n[r] = e
        }
        module.exports = exports = e, exports.load = t, exports.register = i;
        var o = {};

        function u(e) {
            var t;
            if (Array.isArray(e) && (t = e[1], e = e[0]), o[e])
                return o[e];
            var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase(),
                u = n[i];
            return u ? o[e] = u(r() + e).then(function(r) {
                return r && module.bundle.register(t, r), r
            }).catch(function(r) {
                throw delete o[e], r
            }) : void 0
        }

        function s(r) {
            this.executor = r, this.promise = null
        }
        s.prototype.then = function(r, e) {
            return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.then(r, e)
        }, s.prototype.catch = function(r) {
            return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.catch(r)
        };
    }, {
        "./bundle-url": "IC3c"
    }],
    "Jay7": [function(require, module, exports) {
        module.exports = function(n) {
            return new Promise(function(e, o) {
                var r = document.createElement("script");
                r.async = !0, r.type = "text/javascript", r.charset = "utf-8", r.src = n, r.onerror = function(n) {
                    r.onerror = r.onload = null, o(n)
                }, r.onload = function() {
                    r.onerror = r.onload = null, e()
                }, document.getElementsByTagName("head")[0].appendChild(r)
            })
        };
    }, {}],
    0: [function(require, module, exports) {
        var b = require("fiHL");
        b.register("js", require("Jay7"));
        b.load([]).then(function() {
            require("b1xZ");
        });
    }, {}]
}, {}, [0], null)