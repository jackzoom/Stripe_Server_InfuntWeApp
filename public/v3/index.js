! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function (e, t, n) {
    e.exports = n(1)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function s(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function f(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function m(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function y(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function v(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function b(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function g(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function E(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function w(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function S(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function P(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function O(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function k(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function A(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function T(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function I(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function M(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function j(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function L(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function x(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function q(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function D(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function B(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function F(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function H(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function z(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function G(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function W(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function K(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function V(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function J(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function Q(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function X(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function $(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function Z(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ee(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function te(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function ne(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function re(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function oe(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function ae(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ie(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function ce(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function se(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ue(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function le(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function pe(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function de(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function fe(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function he(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function _e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function me(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var ye, ve, be, ge, Ee, we, Se, Pe, Oe = function (e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e), n.name = "IntegrationError", Object.defineProperty(n, "message", {
                    value: n.message,
                    enumerable: !0
                }), n
            }
            return a(t, e), t
        }(Error),
        ke = Oe,
        Ae = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "absurd";
            throw new Error(t)
        },
        Te = n(2),
        Ie = n.n(Te),
        Re = window.Promise ? Promise : Ie.a,
        Ne = Re,
        Ce = ("function" == typeof Symbol && Symbol.iterator, function (e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return e[n]
        }),
        Me = function (e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return n;
            return -1
        },
        je = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
            for (var o = [], a = 0; a < e.length; a++) n[e[a]] && o.push(e[a]);
            return o
        },
        Le = function (e, t) {
            var n = 0,
                r = function r(o) {
                    for (var a = Date.now() + 50; n < e.length && Date.now() < a;) t(e[n]), n++;
                    n === e.length ? o() : setTimeout(function () {
                        return r(o)
                    })
                };
            return new Ne(function (e) {
                return r(e)
            })
        },
        xe = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"],
        qe = xe,
        De = {
            AE: "AE",
            AT: "AT",
            AU: "AU",
            BE: "BE",
            BR: "BR",
            CA: "CA",
            CH: "CH",
            CZ: "CZ",
            DE: "DE",
            DK: "DK",
            EE: "EE",
            ES: "ES",
            FI: "FI",
            FR: "FR",
            GB: "GB",
            GR: "GR",
            HK: "HK",
            IE: "IE",
            IN: "IN",
            IT: "IT",
            JP: "JP",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MX: "MX",
            MY: "MY",
            NL: "NL",
            NO: "NO",
            NZ: "NZ",
            PH: "PH",
            PL: "PL",
            PT: "PT",
            RO: "RO",
            SE: "SE",
            SG: "SG",
            SI: "SI",
            SK: "SK",
            US: "US"
        },
        Be = Object.keys(De),
        Fe = {
            live: "live",
            test: "test",
            unknown: "unknown"
        },
        Ue = function (e) {
            return /^pk_test_/.test(e) ? Fe.test : /^pk_live_/.test(e) ? Fe.live : Fe.unknown
        },
        He = function (e) {
            if (e === Fe.unknown) throw new ke("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys")
        },
        ze = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        We = function (e, t, n) {
            return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "."
        },
        Ye = function (e) {
            return {
                type: "valid",
                value: e,
                warnings: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
            }
        },
        Ke = function (e) {
            return {
                error: e,
                errorType: "full",
                type: "error"
            }
        },
        Ve = function (e, t, n) {
            var r = new ke(We(e, t, n));
            return Ke(r)
        },
        Je = function (e, t, n) {
            return {
                expected: e,
                actual: String(t),
                options: n,
                errorType: "mismatch",
                type: "error"
            }
        },
        Qe = function (e) {
            return function (t, n) {
                return void 0 === t ? Ye(t) : e(t, n)
            }
        },
        Xe = function (e, t) {
            return function (n, r) {
                var o = function (e) {
                        var t = e.options.path.join(".") || "value";
                        return {
                            error: t + " should be " + e.expected,
                            actual: t + " as " + e.actual
                        }
                    },
                    a = function (e, t, n) {
                        return Ke(new ke("Invalid value for " + e + ": " + t + ". You specified " + n + "."))
                    },
                    i = e(n, r),
                    c = t(n, r);
                if ("error" === i.type && "error" === c.type) {
                    if ("mismatch" === i.errorType && "mismatch" === c.errorType) {
                        var s = o(i),
                            u = s.error,
                            l = s.actual,
                            p = o(c),
                            d = p.error,
                            f = p.actual;
                        return a(r.label, u === d ? u : u + " or " + d, l === f ? l : l + " and " + f)
                    }
                    if ("mismatch" === i.errorType) {
                        var h = o(i),
                            _ = h.error,
                            m = h.actual;
                        return a(r.label, _, m)
                    }
                    if ("mismatch" === c.errorType) {
                        var y = o(c),
                            v = y.error,
                            b = y.actual;
                        return a(r.label, v, b)
                    }
                    return Ke(i.error)
                }
                return "valid" === i.type ? i : c
            }
        },
        $e = function (e, t) {
            return function (n, r) {
                var o = Ce(e, function (e) {
                    return e === n
                });
                if (void 0 === o) {
                    var a = t ? "a recognized string." : "one of the following strings: " + e.join(", ");
                    return Je(a, n, r)
                }
                return Ye(o)
            }
        },
        Ze = function (e) {
            return function (t, n) {
                return "string" == typeof t && 0 === t.indexOf(e) ? Ye(t) : Je("a string starting with " + e, t, n)
            }
        },
        et = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return $e(t, !1)
        },
        tt = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return $e(t, !0)
        },
        nt = et.apply(void 0, c(Be)),
        rt = et.apply(void 0, c(qe)),
        ot = (et.apply(void 0, c(Object.keys(Fe))), function (e, t) {
            return "string" == typeof e ? Ye(e) : Je("a string", e, t)
        }),
        at = function (e, t) {
            return function (n, r) {
                return void 0 === n ? Ye(t()) : e(n, r)
            }
        },
        it = function (e, t) {
            return "boolean" == typeof e ? Ye(e) : Je("a boolean", e, t)
        },
        ct = function (e, t) {
            return "number" == typeof e ? Ye(e) : Je("a number", e, t)
        },
        st = function (e) {
            return function (t, n) {
                return "number" == typeof t && t > e ? Ye(t) : Je("a number greater than " + e, t, n)
            }
        },
        ut = function (e) {
            return function (t, n) {
                return "number" == typeof t && t === parseInt(t, 10) && (!e || t >= 0) ? Ye(t) : Je(e ? "a positive amount in the currency's subunit" : "an amount in the currency's subunit", t, n)
            }
        },
        lt = function (e, t) {
            return ut(!1)(e, t)
        },
        pt = function (e, t) {
            return ut(!0)(e, t)
        },
        dt = function (e, t) {
            return e && "object" === (void 0 === e ? "undefined" : Ge(e)) ? Ye(e) : Je("an object", e, t)
        },
        ft = function (e) {
            return function (t, n) {
                if (Array.isArray(t)) {
                    return t.map(function (t, r) {
                        return e(t, ze({}, n, {
                            path: [].concat(c(n.path), [String(r)])
                        }))
                    }).reduce(function (e, t) {
                        return "error" === e.type ? e : "error" === t.type ? t : Ye([].concat(c(e.value), [t.value]), [].concat(c(e.warnings), c(t.warnings)))
                    }, Ye([]))
                }
                return Je("array", t, n)
            }
        },
        ht = function (e) {
            return function (t) {
                return function (n, r) {
                    if (Array.isArray(n)) {
                        var o = t(n, r);
                        if ("valid" === o.type)
                            for (var a = {}, i = 0; i < o.value.length; i += 1) {
                                var c = o.value[i];
                                if ("object" === (void 0 === c ? "undefined" : Ge(c)) && c && "string" == typeof c[e]) {
                                    var s = c[e];
                                    if (a[s]) return Ke(new ke("Duplicate value for " + e + ": " + s + ". The property '" + e + "' of '" + r.path.join(".") + "' has to be unique."));
                                    a[s] = !0
                                }
                            }
                        return o
                    }
                    return Je("array", n, r)
                }
            }
        },
        _t = function (e) {
            return function (t, n) {
                return void 0 === t ? Ye(void 0) : Je("used in " + e + " instead", t, n)
            }
        },
        mt = function (e) {
            return function (t) {
                return function (n, r) {
                    if (n && "object" === (void 0 === n ? "undefined" : Ge(n)) && !Array.isArray(n)) {
                        var o = n,
                            a = Ce(Object.keys(o), function (e) {
                                return !t[e]
                            });
                        if (a && e) return Ke(new ke("Invalid " + r.label + " parameter: " + [].concat(c(r.path), [a]).join(".") + " is not an accepted parameter."));
                        var s = Object.keys(o),
                            u = Ye({});
                        return a && (u = s.reduce(function (e, n) {
                            return t[n] ? e : Ye(e.value, [].concat(c(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(c(r.path), [n]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."]))
                        }, u)), Object.keys(t).reduce(function (e, n) {
                            if ("error" === e.type) return e;
                            var a = t[n],
                                s = a(o[n], ze({}, r, {
                                    path: [].concat(c(r.path), [n])
                                }));
                            return "valid" === s.type && void 0 !== s.value ? Ye(ze({}, e.value, i({}, n, s.value)), [].concat(c(e.warnings), c(s.warnings))) : "valid" === s.type ? Ye(e.value, [].concat(c(e.warnings), c(s.warnings))) : s
                        }, u)
                    }
                    return Je("an object", n, r)
                }
            }
        },
        yt = mt(!0),
        vt = mt(!1),
        bt = function (e, t) {
            return ze({}, e, {
                path: [].concat(c(e.path), [t])
            })
        },
        gt = function (e, t, n, r) {
            var o = r || {},
                a = e(t, {
                    origin: o.origin || "",
                    element: o.element || "",
                    label: n,
                    path: o.path || []
                });
            return "valid" === a.type ? a : "full" === a.errorType ? a : {
                type: "error",
                errorType: "full",
                error: new ke(We(a.expected, a.actual, a.options))
            }
        },
        Et = function (e, t, n, r) {
            var o = gt(e, t, n, r);
            switch (o.type) {
                case "valid":
                    return {
                        value: o.value, warnings: o.warnings
                    };
                case "error":
                    throw o.error;
                default:
                    return Ae(o)
            }
        },
        wt = /^(http(s)?):\/\//,
        St = function (e) {
            return wt.test(e)
        },
        Pt = function (e) {
            if (!St(e)) return null;
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol,
                r = t.host,
                o = /:80$/,
                a = /:443$/;
            return "http:" === n && o.test(r) ? r = r.replace(o, "") : "https:" === n && a.test(r) && (r = r.replace(a, "")), {
                host: r,
                protocol: n,
                origin: n + "//" + r
            }
        },
        Ot = function (e, t) {
            if ("/" === t[0]) {
                var n = Pt(e);
                return n ? "" + n.origin + t : t
            }
            return "" + e.replace(/\/[^\/]*$/, "/") + t
        },
        kt = {
            CARD_ELEMENT: "CARD_ELEMENT",
            CONTROLLER: "CONTROLLER",
            METRICS_CONTROLLER: "METRICS_CONTROLLER",
            PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
            PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
            PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
            IBAN_ELEMENT: "IBAN_ELEMENT",
            IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
            AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
            STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE",
            STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT",
            AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT",
            FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT"
        },
        At = kt,
        Tt = Object({
            NODE_ENV: "production",
            TEST_ENV: !1,
            SELENIUM_TEST_ENV: !1,
            PUBLIC_URL: "",
            RELEASE_VERSION: "351abb7a",
            STRIPE_JS_API_URL: "https://api.stripe.com/v1/",
            STRIPE_JS_HOOKS_URL: "https://hooks.stripe.com/",
            STRIPE_JS_ALLOW_MUTABLE_API_URL: !1,
            STRIPE_JS_Q_URL: "https://q.stripe.com",
            STRIPE_JS_M_NETWORK_URL: "http://localhost:3000",
            STRIPE_JS_ROOT_URL: "http://localhost:3000/v3/",
            STRIPE_CHECKOUT_URL: "https://checkout.stripe.com/",
            STRIPE_JS_SOURCEMAPS: !1,
            STRIPE_JS_DEBUG_POSTMESSAGE: !1,
            STRIPE_JS_DEBUG_LOGGER: !0,
            ELEMENTS_INNER_CARD_HTML_NAME: "elements-inner-card-51e0a63f433555284925f9663bcb948d.html",
            ELEMENTS_INNER_IBAN_HTML_NAME: "elements-inner-iban-32a19aad9fa16010af1e9ced04792f62.html",
            ELEMENTS_INNER_IDEAL_BANK_HTML_NAME: "elements-inner-ideal-bank-d7fe6bf1807fe0d6c582b32a99184a90.html",
            ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME: "elements-inner-payment-request-4eb4877d689bee6bbfc762ef46aa7ff8.html",
            ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME: "elements-inner-au-bank-account-d53651b9166b5ddb72d6933ea97d20ef.html",
            ELEMENTS_INNER_FPX_BANK_HTML_NAME: "elements-inner-fpx-bank-c4c84c75ff3cc156f7eb7265635f693f.html",
            RECAPTCHA_HTML_NAME: "recaptcha.html",
            CONTROLLER_HTML_NAME: "controller-468bd62002596e10e873d190027981dd.html",
            PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME: "payment-request-inner-browser-5c95aff0e1262a307f2defd45b0cfad8.html",
            PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME: "payment-request-inner-google-pay-9f2451922df90169128ee82b7ba4a674.html",
            AUTHORIZE_WITH_URL_INNER_HTML_NAME: "authorize-with-url-inner-734a57da90b12d2360dcc68c1aa22ecf.html",
            THREE_DS_2_CHALLENGE_HTML_NAME: "three-ds-2-challenge-ba3acdaf252a4c76d2f98e743fcaeab7.html",
            THREE_DS_2_FINGERPRINT_HTML_NAME: "three-ds-2-fingerprint-5b1153a223fa33d7b4cd9e8aeee5296d.html",
            M_OUTER_HTML_NAME: "m-outer-a0f6c1465b8d9aab778cf2913d1d3c86.html",
            STRIPE_JS_NO_DEMOS: "1",
            STRIPE_JS_NO_REPORTS: "1"
        }),
        It = function (e) {
            return "" + (Tt.STRIPE_JS_ROOT_URL || "") + (e || "")
        },
        Rt = function (e) {
            switch (e) {
                case "CARD_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_CARD_HTML_NAME);
                case "CONTROLLER":
                    return It(Tt.CONTROLLER_HTML_NAME);
                case "METRICS_CONTROLLER":
                    return It(Tt.M_OUTER_HTML_NAME);
                case "PAYMENT_REQUEST_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME);
                case "PAYMENT_REQUEST_BROWSER":
                    return It(Tt.PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME);
                case "PAYMENT_REQUEST_GOOGLE_PAY":
                    return It(Tt.PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME);
                case "IBAN_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_IBAN_HTML_NAME);
                case "IDEAL_BANK_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_IDEAL_BANK_HTML_NAME);
                case "AUTHORIZE_WITH_URL":
                    return It(Tt.AUTHORIZE_WITH_URL_INNER_HTML_NAME);
                case "STRIPE_3DS2_CHALLENGE":
                    return It(Tt.THREE_DS_2_CHALLENGE_HTML_NAME);
                case "STRIPE_3DS2_FINGERPRINT":
                    return It(Tt.THREE_DS_2_FINGERPRINT_HTML_NAME);
                case "AU_BANK_ACCOUNT_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME);
                case "FPX_BANK_ELEMENT":
                    return It(Tt.ELEMENTS_INNER_FPX_BANK_HTML_NAME);
                default:
                    return Ae(e)
            }
        },
        Nt = Rt,
        Ct = {
            card: "card",
            cardNumber: "cardNumber",
            cardExpiry: "cardExpiry",
            cardCvc: "cardCvc",
            postalCode: "postalCode",
            iban: "iban",
            idealBank: "idealBank",
            paymentRequestButton: "paymentRequestButton",
            auBankAccount: "auBankAccount",
            fpxBank: "fpxBank",
            idealBankSecondary: "idealBankSecondary",
            auBankAccountNumber: "auBankAccountNumber",
            auBsb: "auBsb",
            fpxBankSecondary: "fpxBankSecondary"
        },
        Mt = Ct,
        jt = {
            PAYMENT_INTENT: "PAYMENT_INTENT",
            SETUP_INTENT: "SETUP_INTENT"
        },
        Lt = jt,
        xt = [Mt.card, Mt.cardNumber, Mt.cardExpiry, Mt.cardCvc, Mt.postalCode],
        qt = xt,
        Dt = Pt("http://localhost:3000/v3/"),
        Bt = Dt ? Dt.origin : "",
        Ft = {
            family: "font-family",
            src: "src",
            unicodeRange: "unicode-range",
            style: "font-style",
            variant: "font-variant",
            stretch: "font-stretch",
            weight: "font-weight",
            display: "font-display"
        },
        Ut = Object.keys(Ft).reduce(function (e, t) {
            return e[Ft[t]] = t, e
        }, {}),
        Ht = [Mt.idealBank, Mt.idealBankSecondary, Mt.fpxBank, Mt.fpxBankSecondary],
        zt = 0,
        Gt = function (e) {
            return "" + e + zt++
        },
        Wt = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e)
        },
        Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Kt = function e(t, n) {
            var r = [];
            return Object.keys(t).forEach(function (o) {
                var a = t[o],
                    i = n ? n + "[" + o + "]" : o;
                if (a && "object" === (void 0 === a ? "undefined" : Yt(a))) {
                    var c = e(a, i);
                    "" !== c && (r = [].concat(s(r), [c]))
                } else void 0 !== a && null !== a && (r = [].concat(s(r), [i + "=" + encodeURIComponent(String(a))]))
            }), r.join("&").replace(/%20/g, "+")
        },
        Vt = Kt,
        Jt = n(6),
        Qt = n.n(Jt),
        Xt = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        $t = function (e, t) {
            var n = {};
            t.forEach(function (e) {
                var t = Xt(e, 2),
                    r = t[0],
                    o = t[1];
                r.split(/\s+/).forEach(function (e) {
                    e && (n[e] = n[e] || o)
                })
            }), e.className = Qt()(e.className, n)
        },
        Zt = function (e, t) {
            e.style.cssText = Object.keys(t).map(function (e) {
                return e + ": " + t[e] + " !important;"
            }).join(" ")
        },
        en = function (e) {
            try {
                return window.parent.frames[e]
            } catch (e) {
                return null
            }
        },
        tn = function (e) {
            if (!document.body) throw new ke("Stripe.js requires that your page has a <body> element.");
            return e(document.body)
        },
        nn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        rn = function (e) {
            var t = e.frameId,
                n = e.controllerId,
                r = e.type,
                o = Bt,
                a = void 0;
            "controller" === r ? a = en(t) : "group" === r ? a = en(n) : "outer" === r ? a = window.frames[t] : "inner" === r && (o = "*", a = window.parent), a && a.postMessage(JSON.stringify(nn({}, e, {
                __stripeJsV3: !0
            })), o)
        },
        on = function (e) {
            try {
                var t = "string" == typeof e ? JSON.parse(e) : e;
                return t.__stripeJsV3 ? t : null
            } catch (e) {
                return null
            }
        },
        an = (n(7), function (e, t) {
            var n = e._isUserError || "IntegrationError" === e.name;
            throw t && !n && t.report("fatal.uncaught_error", {
                iframe: !1,
                name: e.name,
                element: "outer",
                message: e.message || e.description,
                fileName: e.fileName,
                lineNumber: e.lineNumber,
                columnNumber: e.columnNumber,
                stack: e.stack && e.stack.substring(0, 1e3)
            }), e
        }),
        cn = function (e, t) {
            return function () {
                try {
                    return e.call(this)
                } catch (e) {
                    return an(e, t || this && this._controller)
                }
            }
        },
        sn = function (e, t) {
            return function (n) {
                try {
                    return e.call(this, n)
                } catch (e) {
                    return an(e, t || this && this._controller)
                }
            }
        },
        un = function (e, t) {
            return function (n, r) {
                try {
                    return e.call(this, n, r)
                } catch (e) {
                    return an(e, t || this && this._controller)
                }
            }
        },
        ln = function (e, t) {
            return function (n, r, o) {
                try {
                    return e.call(this, n, r, o)
                } catch (e) {
                    return an(e, t || this && this._controller)
                }
            }
        },
        pn = function (e, t) {
            return function () {
                try {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return e.call.apply(e, [this].concat(r))
                } catch (e) {
                    return an(e, t || this && this._controller)
                }
            }
        },
        dn = function e() {
            var t = this;
            u(this, e), this._emit = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return (t._callbacks[e] || []).forEach(function (e) {
                    var t = e.fn;
                    if (t._isUserCallback) try {
                        t.apply(void 0, r)
                    } catch (e) {
                        throw e._isUserError = !0, e
                    } else t.apply(void 0, r)
                }), t
            }, this._once = function (e, n) {
                var r = function r() {
                    t._off(e, r), n.apply(void 0, arguments)
                };
                return t._on(e, r, n)
            }, this._removeAllListeners = function () {
                return t._callbacks = {}, t
            }, this._on = function (e, n, r) {
                return t._callbacks[e] = t._callbacks[e] || [], t._callbacks[e].push({
                    original: r,
                    fn: n
                }), t
            }, this._validateUserOn = function (e, t) {}, this._userOn = function (e, n) {
                if ("string" != typeof e) throw new ke("When adding an event listener, the first argument should be a string event name.");
                if ("function" != typeof n) throw new ke("When adding an event listener, the second argument should be a function callback.");
                return t._validateUserOn(e, n), n._isUserCallback = !0, t._on(e, n)
            }, this._hasRegisteredListener = function (e) {
                return t._callbacks[e] && t._callbacks[e].length > 0
            }, this._off = function (e, n) {
                if (n) {
                    for (var r = t._callbacks[e], o = void 0, a = 0; a < r.length; a++)
                        if (o = r[a], o.fn === n || o.original === n) {
                            r.splice(a, 1);
                            break
                        }
                } else delete t._callbacks[e];
                return t
            }, this._callbacks = {};
            var n = un(this._userOn),
                r = un(this._off),
                o = un(this._once),
                a = sn(this._hasRegisteredListener),
                i = sn(this._removeAllListeners),
                c = pn(this._emit);
            this.on = this.addListener = this.addEventListener = n, this.off = this.removeListener = this.removeEventListener = r, this.once = o, this.hasRegisteredListener = a, this.removeAllListeners = i, this.emit = c
        },
        fn = dn,
        hn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        _n = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        mn = function (e) {
            function t(e, n, r) {
                p(this, t);
                var o = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return o._sendFAReq = function (e) {
                    var t = Gt(e.tag);
                    return new Ne(function (n, r) {
                        o._requests[t] = {
                            resolve: n,
                            reject: r
                        }, o._send({
                            message: {
                                action: "stripe-frame-action",
                                payload: {
                                    nonce: t,
                                    faReq: e
                                }
                            },
                            type: "outer",
                            frameId: o.id,
                            controllerId: o._controllerId
                        })
                    })
                }, o.action = {
                    perform3DS2Challenge: function (e) {
                        return o._sendFAReq({
                            tag: "PERFORM_3DS2_CHALLENGE",
                            value: e
                        })
                    },
                    perform3DS2Fingerprint: function (e) {
                        return o._sendFAReq({
                            tag: "PERFORM_3DS2_FINGERPRINT",
                            value: e
                        })
                    },
                    show3DS2Spinner: function (e) {
                        return o._sendFAReq({
                            tag: "SHOW_3DS2_SPINNER",
                            value: e
                        })
                    },
                    checkCanMakePayment: function (e) {
                        return o._sendFAReq({
                            tag: "CHECK_CAN_MAKE_PAYMENT",
                            value: e
                        })
                    }
                }, o.type = e, o.loaded = !1, o._controllerId = n, o._persistentMessages = [], o._queuedMessages = [], o._requests = {}, o.id = o._generateId(), o._iframe = o._createIFrame(r), o._on("load", function () {
                    o.loaded = !0, o._ensureMounted(), o.loaded && (o._persistentMessages.forEach(function (e) {
                        return o._send(e)
                    }), o._queuedMessages.forEach(function (e) {
                        return o._send(e)
                    }), o._queuedMessages = [])
                }), o
            }
            return f(t, e), _n(t, [{
                key: "_generateId",
                value: function () {
                    return Gt("__privateStripeFrame")
                }
            }, {
                key: "send",
                value: function (e) {
                    this._send({
                        message: e,
                        type: "outer",
                        frameId: this.id,
                        controllerId: this._controllerId
                    })
                }
            }, {
                key: "sendPersistent",
                value: function (e) {
                    this._ensureMounted();
                    var t = {
                        message: e,
                        type: "outer",
                        frameId: this.id,
                        controllerId: this._controllerId
                    };
                    this._persistentMessages = [].concat(l(this._persistentMessages), [t]), this.loaded && rn(t)
                }
            }, {
                key: "resolve",
                value: function (e, t) {
                    this._requests[e] && this._requests[e].resolve(t)
                }
            }, {
                key: "reject",
                value: function (e, t) {
                    this._requests[e] && this._requests[e].reject(t)
                }
            }, {
                key: "_send",
                value: function (e) {
                    this._ensureMounted(), this.loaded ? rn(e) : this._queuedMessages = [].concat(l(this._queuedMessages), [e])
                }
            }, {
                key: "appendTo",
                value: function (e) {
                    e.appendChild(this._iframe)
                }
            }, {
                key: "unmount",
                value: function () {
                    this.loaded = !1, this._emit("unload")
                }
            }, {
                key: "destroy",
                value: function () {
                    this.unmount();
                    var e = this._iframe.parentElement;
                    e && e.removeChild(this._iframe), this._emit("destroy")
                }
            }, {
                key: "_ensureMounted",
                value: function () {
                    this._isMounted() || this.unmount()
                }
            }, {
                key: "_isMounted",
                value: function () {
                    return !!document.body && document.body.contains(this._iframe)
                }
            }, {
                key: "_createIFrame",
                value: function (e) {
                    var t = window.location.href.toString(),
                        n = Pt(t),
                        r = n ? n.origin : "",
                        o = e.queryString && "string" == typeof e.queryString ? e.queryString : Vt(hn({}, e, {
                            origin: r,
                            referrer: t,
                            controllerId: this._controllerId
                        })),
                        a = document.createElement("iframe");
                    return a.setAttribute("frameborder", "0"), a.setAttribute("allowTransparency", "true"), a.setAttribute("scrolling", "no"), a.setAttribute("name", this.id), a.setAttribute("allowpaymentrequest", "true"), a.src = Nt(this.type) + "#" + o, a
                }
            }]), t
        }(fn),
        yn = mn,
        vn = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        bn = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        gn = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block",
            visibility: "hidden",
            position: "fixed",
            height: "1px",
            "pointer-events": "none",
            "user-select": "none"
        },
        En = function (e) {
            function t(e, n, r) {
                h(this, t);
                var o = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                if (o.autoload = r.autoload || !1, "complete" === document.readyState) o._ensureMounted();
                else {
                    var a = o._ensureMounted.bind(o);
                    document.addEventListener("DOMContentLoaded", a), window.addEventListener("load", a), setTimeout(a, 5e3)
                }
                return o
            }
            return m(t, e), vn(t, [{
                key: "_ensureMounted",
                value: function () {
                    bn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_ensureMounted", this).call(this), this._isMounted() || this._autoMount()
                }
            }, {
                key: "_autoMount",
                value: function () {
                    if (document.body) this.appendTo(document.body);
                    else if ("complete" === document.readyState || "interactive" === document.readyState) throw new ke("Stripe.js requires that your page has a <body> element.");
                    this.autoload && (this.loaded = !0)
                }
            }, {
                key: "_createIFrame",
                value: function (e) {
                    var n = bn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                    return n.setAttribute("aria-hidden", "true"), n.setAttribute("allowpaymentrequest", "true"), n.setAttribute("tabIndex", "-1"), Zt(n, gn), n
                }
            }]), t
        }(yn),
        wn = En,
        Sn = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Pn = function (e) {
            function t() {
                return y(this, t), v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return b(t, e), Sn(t, [{
                key: "_generateId",
                value: function () {
                    return this._controllerId
                }
            }]), t
        }(wn),
        On = Pn,
        kn = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        An = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        Tn = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block",
            "user-select": "none"
        },
        In = function (e) {
            function t() {
                return g(this, t), E(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return w(t, e), kn(t, [{
                key: "update",
                value: function (e) {
                    this.send({
                        action: "stripe-user-update",
                        payload: e
                    })
                }
            }, {
                key: "updateStyle",
                value: function (e) {
                    var t = this;
                    Object.keys(e).forEach(function (n) {
                        t._iframe.style[n] = e[n]
                    })
                }
            }, {
                key: "focus",
                value: function () {
                    this.loaded && this.send({
                        action: "stripe-user-focus",
                        payload: {}
                    })
                }
            }, {
                key: "blur",
                value: function () {
                    this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur())
                }
            }, {
                key: "clear",
                value: function () {
                    this.send({
                        action: "stripe-user-clear",
                        payload: {}
                    })
                }
            }, {
                key: "_createIFrame",
                value: function (e) {
                    var n = An(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                    return n.setAttribute("title", "Secure payment input frame"), Zt(n, Tn), n
                }
            }]), t
        }(yn),
        Rn = In,
        Nn = function (e, t) {
            var n = !1;
            return function () {
                if (n) throw new ke(t);
                n = !0;
                try {
                    return e.apply(void 0, arguments).then(function (e) {
                        return n = !1, e
                    }, function (e) {
                        throw n = !1, e
                    })
                } catch (e) {
                    throw n = !1, e
                }
            }
        },
        Cn = function (e) {
            var t = e;
            return function () {
                t && (t.apply(void 0, arguments), t = null)
            }
        },
        Mn = function () {
            return tn(function (e) {
                var t = e.style,
                    n = t.position,
                    r = t.top,
                    o = t.left,
                    a = t.bottom,
                    i = t.right,
                    c = t.overflow,
                    s = document.documentElement ? document.documentElement.style : {
                        overflow: ""
                    },
                    u = s.overflow,
                    l = window,
                    p = l.pageXOffset,
                    d = l.pageYOffset,
                    f = document.documentElement ? window.innerWidth - document.documentElement.offsetWidth : 0,
                    h = document.documentElement ? window.innerHeight - document.documentElement.offsetHeight : 0;
                return e.style.position = "fixed", e.style.overflow = "hidden", document.documentElement && (document.documentElement.style.overflow = "visible"), e.style.top = -d + "px", e.style.left = -p + "px", e.style.right = f + "px", e.style.bottom = h + "px", Cn(function () {
                    e.style.position = n, e.style.top = r, e.style.left = o, e.style.bottom = a, e.style.right = i, e.style.overflow = c, document.documentElement && (document.documentElement.style.overflow = u), window.scrollTo(p, d)
                })
            })
        },
        jn = function (e, t) {
            return e ? window.getComputedStyle(e, t) : null
        },
        Ln = jn,
        xn = function (e, t) {
            var n = Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")).filter(function (e) {
                var t = e.getAttribute("tabindex"),
                    n = !t || parseInt(t, 10) >= 0,
                    r = e.getBoundingClientRect(),
                    o = Ln(e),
                    a = r.width > 0 && r.height > 0 && o && "hidden" !== o.getPropertyValue("visibility");
                return n && a
            });
            return n[Me(n, function (t) {
                return t === e || e.contains(t)
            }) + ("previous" === t ? -1 : 1)]
        },
        qn = function (e) {
            var t = [],
                n = Le(document.querySelectorAll("*"), function (n) {
                    var r = n.getAttribute("tabindex") || "";
                    e !== n && (n.tabIndex = -1), t.push({
                        element: n,
                        tabIndex: r
                    })
                });
            return Cn(function () {
                n.then(function () {
                    return Le(t, function (e) {
                        var t = e.element,
                            n = e.tabIndex;
                        "" === n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", n)
                    })
                })
            })
        },
        Dn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Bn = {
            display: "block",
            position: "fixed",
            "z-index": "2147483647",
            background: "rgba(40,40,40,0)",
            transition: "background 400ms ease",
            "will-change": "background",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0"
        },
        Fn = Dn({}, Bn, {
            background: "rgba(40,40,40,0.75)"
        }),
        Un = function e(t) {
            var n = this,
                r = t.lockScrolling,
                o = t.lockFocus,
                a = t.lockFocusOn;
            S(this, e), this.domElement = document.createElement("div"), this._runOnHide = [], this.mount = function () {
                tn(function (e) {
                    n.domElement.style.display = "none", e.contains(n.domElement) || e.insertBefore(n.domElement, e.firstChild)
                })
            }, this.show = function () {
                if (Zt(n.domElement, Bn), n._lockScrolling) {
                    var e = Mn();
                    n._runOnHide.push(e)
                }
                if (n._lockFocus) {
                    var t = qn(n._lockFocusOn);
                    n._runOnHide.push(t)
                }
            }, this.fadeIn = function () {
                setTimeout(function () {
                    Zt(n.domElement, Fn)
                })
            }, this.fadeOut = function () {
                return new Ne(function (e) {
                    Zt(n.domElement, Bn), setTimeout(e, 500), n.domElement.addEventListener("transitionend", e)
                }).then(function () {
                    for (n.domElement.style.display = "none"; n._runOnHide.length;) n._runOnHide.pop()()
                })
            }, this.unmount = function () {
                tn(function (e) {
                    e.removeChild(n.domElement)
                })
            }, this._lockScrolling = !!r, this._lockFocus = !!o, this._lockFocusOn = a || null
        },
        Hn = Un,
        zn = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        Gn = {
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "100%"
        },
        Wn = function (e) {
            function t(e, n, r) {
                P(this, t);
                var o = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return o._autoMount = function () {
                    o.appendTo(o._backdrop.domElement), o._backdrop.mount()
                }, o.show = function () {
                    o._backdrop.show(), Zt(o._iframe, Gn)
                }, o.fadeInBackdrop = function () {
                    o._backdrop.fadeIn()
                }, o._backdropFadeoutPromise = null, o.fadeOutBackdrop = function () {
                    return o._backdropFadeoutPromise || (o._backdropFadeoutPromise = o._backdrop.fadeOut()), o._backdropFadeoutPromise
                }, o.destroy = function () {
                    return o.fadeOutBackdrop().then(function () {
                        o._backdrop.unmount(), zn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", o).call(o)
                    })
                }, o._backdrop = new Hn({
                    lockScrolling: !0,
                    lockFocus: !0,
                    lockFocusOn: o._iframe
                }), o._autoMount(), o
            }
            return k(t, e), t
        }(yn),
        Yn = Wn,
        Kn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Vn = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Jn = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, r)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            if (void 0 !== i) return i.call(r)
        },
        Qn = {
            display: "block",
            position: "absolute",
            "z-index": "1000",
            width: "1px",
            "min-width": "100%",
            margin: "2px 0 0 0",
            padding: "0",
            border: "none",
            overflow: "hidden"
        },
        Xn = function (e) {
            function t() {
                return A(this, t), T(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return I(t, e), Vn(t, [{
                key: "updateStyle",
                value: function (e) {
                    var t = this;
                    Object.keys(e).forEach(function (n) {
                        t._iframe.style[n] = e[n]
                    })
                }
            }, {
                key: "update",
                value: function (e) {
                    this.send({
                        action: "stripe-user-update",
                        payload: e
                    })
                }
            }, {
                key: "_createIFrame",
                value: function (e) {
                    var n = Jn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, Kn({}, e, {
                        isSecondaryFrame: !0
                    }));
                    return Zt(n, Qn), n.style.height = "0", n
                }
            }]), t
        }(yn),
        $n = Xn,
        Zn = function (e) {
            var t = Pt(e),
                n = t ? t.host : "";
            return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/)
        },
        er = function (e, t) {
            var n = Pt(e),
                r = Pt(t);
            return !(!n || !r) && n.origin === r.origin
        },
        tr = function (e) {
            return er(e, "http://localhost:3000/v3/")
        },
        nr = function (e) {
            return tr(e) || Zn(e)
        },
        rr = ["button", "checkbox", "file", "hidden", "image", "submit", "radio", "reset"],
        or = function (e) {
            var t = e.tagName;
            if (e.isContentEditable || "TEXTAREA" === t) return !0;
            if ("INPUT" !== t) return !1;
            var n = e.getAttribute("type");
            return -1 === rr.indexOf(n)
        },
        ar = or,
        ir = function (e) {
            return /Edge\//i.test(e)
        },
        cr = function (e) {
            return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e)
        },
        sr = function (e) {
            return /SamsungBrowser/.test(e)
        },
        ur = function (e) {
            return /iPad|iPhone/i.test(e) && !cr(e)
        },
        lr = function (e) {
            return /Android/i.test(e) && !cr(e)
        },
        pr = window.navigator.userAgent,
        dr = ir(pr),
        fr = (function (e) {
            /Edge\/((1[0-6]\.)|0\.)/i.test(e)
        }(pr), cr(pr)),
        hr = (function (e) {
            /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e)
        }(pr), ur(pr)),
        _r = (function (e) {
            ur(e) || lr(e)
        }(pr), lr(pr), function (e) {
            /Android 4\./i.test(e) && !/Chrome/i.test(e) && lr(e)
        }(pr), function (e) {
            return /^((?!chrome|android).)*safari/i.test(e) && !sr(e)
        }(pr)),
        mr = (function (e) {
            /Firefox\//i.test(e)
        }(pr), function (e) {
            /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e)
        }(pr), sr(pr)),
        yr = (function (e) {
            /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e)
        }(pr), function (e) {
            return /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !ir(e) && !cr(e)
        }(pr)),
        vr = function (e) {
            return /Chrome/i.test(e) && !ir(e)
        }(pr),
        br = (ye = {}, R(ye, Mt.card, {
            unique: !0,
            conflict: [Mt.cardNumber, Mt.cardExpiry, Mt.cardCvc, Mt.postalCode],
            beta: !1
        }), R(ye, Mt.cardNumber, {
            unique: !0,
            conflict: [Mt.card],
            beta: !1
        }), R(ye, Mt.cardExpiry, {
            unique: !0,
            conflict: [Mt.card],
            beta: !1
        }), R(ye, Mt.cardCvc, {
            unique: !0,
            conflict: [Mt.card],
            beta: !1
        }), R(ye, Mt.postalCode, {
            unique: !0,
            conflict: [Mt.card],
            beta: !1
        }), R(ye, Mt.paymentRequestButton, {
            unique: !0,
            conflict: [],
            beta: !1
        }), R(ye, Mt.iban, {
            unique: !0,
            conflict: [],
            beta: !1
        }), R(ye, Mt.idealBank, {
            unique: !0,
            conflict: [],
            beta: !1
        }), R(ye, Mt.auBankAccount, {
            unique: !0,
            beta: !1,
            conflict: []
        }), R(ye, Mt.fpxBank, {
            unique: !0,
            beta: !1,
            conflict: []
        }), ye),
        gr = br,
        Er = (ve = {}, N(ve, Mt.card, At.CARD_ELEMENT), N(ve, Mt.cardNumber, At.CARD_ELEMENT), N(ve, Mt.cardExpiry, At.CARD_ELEMENT), N(ve, Mt.cardCvc, At.CARD_ELEMENT), N(ve, Mt.postalCode, At.CARD_ELEMENT), N(ve, Mt.paymentRequestButton, At.PAYMENT_REQUEST_ELEMENT), N(ve, Mt.iban, At.IBAN_ELEMENT), N(ve, Mt.idealBank, At.IDEAL_BANK_ELEMENT), N(ve, Mt.auBankAccount, At.AU_BANK_ACCOUNT_ELEMENT), N(ve, Mt.fpxBank, At.FPX_BANK_ELEMENT), ve),
        wr = Er,
        Sr = ["brand"],
        Pr = ["country", "bankName"],
        Or = ["bankName", "branchName"],
        kr = (be = {}, C(be, Mt.card, Sr), C(be, Mt.cardNumber, Sr), C(be, Mt.iban, Pr), C(be, Mt.auBankAccount, Or), be),
        Ar = (ge = {}, C(ge, Mt.idealBank, {
            secondary: Mt.idealBankSecondary
        }), C(ge, Mt.fpxBank, {
            secondary: Mt.fpxBankSecondary
        }), ge),
        Tr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Rr = !1,
        Nr = function (e, t) {
            return document.activeElement === e._iframe || e._iframe.parentElement && document.activeElement === t
        },
        Cr = function (e) {
            return "object" === (void 0 === e ? "undefined" : Ir(e)) && null !== e && "IntegrationError" === e.name ? new ke("string" == typeof e.message ? e.message : "") : e
        },
        Mr = function e(t) {
            j(this, e), jr.call(this);
            var n = t.apiKey,
                r = t.stripeAccount,
                o = t.stripeJsId,
                a = t.locale;
            this._id = Gt("__privateStripeController"), this._stripeJsId = o, this._apiKey = n, this._stripeAccount = r, this._controllerFrame = new On(At.CONTROLLER, this._id, Tr({}, t)), this._frames = {}, this._requests = {}, this._setupPostMessage(), this._handleMessage = sn(this._handleMessage, this), this.action.fetchLocale({
                locale: a || "auto"
            })
        },
        jr = function () {
            var e = this;
            this._sendCAReq = function (t) {
                var n = Gt(t.tag);
                return new Ne(function (r, o) {
                    e._requests[n] = {
                        resolve: r,
                        reject: o
                    }, e._controllerFrame.send({
                        action: "stripe-safe-controller-action-request",
                        payload: {
                            nonce: n,
                            caReq: t
                        }
                    })
                })
            }, this.livemode = function () {
                var t = e._apiKey;
                return /^pk_test_/.test(t) ? "testmode" : /^pk_live_/.test(t) ? "livemode" : "unknown"
            }, this.action = {
                retrievePaymentIntent: function (t) {
                    return e._sendCAReq({
                        tag: "RETRIEVE_PAYMENT_INTENT",
                        value: t
                    })
                },
                confirmPaymentIntent: function (t) {
                    return e._sendCAReq({
                        tag: "CONFIRM_PAYMENT_INTENT",
                        value: t
                    })
                },
                cancelPaymentIntentSource: function (t) {
                    return e._sendCAReq({
                        tag: "CANCEL_PAYMENT_INTENT_SOURCE",
                        value: t
                    })
                },
                confirmSetupIntent: function (t) {
                    return e._sendCAReq({
                        tag: "CONFIRM_SETUP_INTENT",
                        value: t
                    })
                },
                retrieveSetupIntent: function (t) {
                    return e._sendCAReq({
                        tag: "RETRIEVE_SETUP_INTENT",
                        value: t
                    })
                },
                cancelSetupIntentSource: function (t) {
                    return e._sendCAReq({
                        tag: "CANCEL_SETUP_INTENT_SOURCE",
                        value: t
                    })
                },
                fetchLocale: function (t) {
                    return e._sendCAReq({
                        tag: "FETCH_LOCALE",
                        value: t
                    })
                },
                updateCSSFonts: function (t) {
                    return e._sendCAReq({
                        tag: "UPDATE_CSS_FONTS",
                        value: t
                    })
                },
                createApplePaySession: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_APPLE_PAY_SESSION",
                        value: t
                    })
                },
                retrieveSource: function (t) {
                    return e._sendCAReq({
                        tag: "RETRIEVE_SOURCE",
                        value: t
                    })
                },
                tokenizeWithElement: function (t) {
                    return e._sendCAReq({
                        tag: "TOKENIZE_WITH_ELEMENT",
                        value: t
                    })
                },
                tokenizeCvcUpdate: function (t) {
                    return e._sendCAReq({
                        tag: "TOKENIZE_CVC_UPDATE",
                        value: t
                    })
                },
                tokenizeWithData: function (t) {
                    return e._sendCAReq({
                        tag: "TOKENIZE_WITH_DATA",
                        value: t
                    })
                },
                createSourceWithElement: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_SOURCE_WITH_ELEMENT",
                        value: t
                    })
                },
                createSourceWithData: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_SOURCE_WITH_DATA",
                        value: t
                    })
                },
                createPaymentMethodWithElement: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT",
                        value: t
                    })
                },
                createPaymentMethodWithData: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_PAYMENT_METHOD_WITH_DATA",
                        value: t
                    })
                },
                createPaymentPage: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_PAYMENT_PAGE",
                        value: t
                    })
                },
                createPaymentPageWithSession: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_PAYMENT_PAGE_WITH_SESSION",
                        value: t
                    })
                },
                createRadarSession: function (t) {
                    return e._sendCAReq({
                        tag: "CREATE_RADAR_SESSION",
                        value: t
                    })
                },
                authenticate3DS2: function (t) {
                    return e._sendCAReq({
                        tag: "AUTHENTICATE_3DS2",
                        value: t
                    })
                }
            }, this.createElementFrame = function (t, n) {
                var r = n.groupId,
                    o = M(n, ["groupId"]),
                    a = new Rn(t, e._id, Tr({}, o, {
                        keyMode: Ue(e._apiKey),
                        apiKey: e._apiKey
                    }));
                return e._setupFrame(a, t, r)
            }, this.createSecondaryElementFrame = function (t, n) {
                var r = n.groupId,
                    o = M(n, ["groupId"]),
                    a = new $n(t, e._id, Tr({}, o));
                return e._setupFrame(a, t, r)
            }, this.createHiddenFrame = function (t, n) {
                var r = new wn(t, e._id, n);
                return e._setupFrame(r, t)
            }, this.createLightboxFrame = function (t, n) {
                var r = new Yn(t, e._id, n);
                return e._setupFrame(r, t)
            }, this._setupFrame = function (t, n, r) {
                return e._frames[t.id] = t, e._controllerFrame.sendPersistent({
                    action: "stripe-user-createframe",
                    payload: {
                        newFrameId: t.id,
                        frameType: n,
                        groupId: r
                    }
                }), t._on("unload", function () {
                    e._controllerFrame.sendPersistent({
                        action: "stripe-frame-unload",
                        payload: {
                            unloadedFrameId: t.id
                        }
                    })
                }), t._on("destroy", function () {
                    delete e._frames[t.id], e._controllerFrame.sendPersistent({
                        action: "stripe-frame-destroy",
                        payload: {
                            destroyedFrameId: t.id
                        }
                    })
                }), t._on("load", function () {
                    e._controllerFrame.sendPersistent({
                        action: "stripe-frame-load",
                        payload: {
                            loadedFrameId: t.id
                        }
                    }), e._controllerFrame.loaded && t.send({
                        action: "stripe-controller-load",
                        payload: {}
                    })
                }), t
            }, this.report = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e._controllerFrame.send({
                    action: "stripe-controller-report",
                    payload: {
                        event: t,
                        data: n
                    }
                })
            }, this.warn = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                e._controllerFrame.send({
                    action: "stripe-controller-warn",
                    payload: {
                        args: n
                    }
                })
            }, this.registerWrapper = function (t) {
                e._controllerFrame.send({
                    action: "stripe-wrapper-register",
                    payload: {
                        wrapperLibrary: t
                    }
                })
            }, this.controllerFor = function () {
                return "outer"
            }, this._setupPostMessage = function () {
                window.addEventListener("message", function (t) {
                    var n = t.data,
                        r = t.origin,
                        o = on(n);
                    o && er(Bt, r) && e._handleMessage(o)
                })
            }, this._handleMessage = function (t) {
                var n = t.controllerId,
                    r = t.frameId,
                    o = t.message,
                    a = e._frames[r];
                if (n === e._id) switch (o.action) {
                    case "stripe-frame-event":
                        var i = o.payload,
                            c = i.event,
                            s = i.data;
                        if (a) {
                            if (hr) {
                                var u = a._iframe.parentElement,
                                    l = u && u.querySelector(".__PrivateStripeElement-input");
                                if ("focus" === c && !Rr && !Nr(a, l)) {
                                    l && l.focus(), Rr = !0;
                                    break
                                }
                                if ("blur" === c && Rr) {
                                    Rr = !1;
                                    break
                                }
                                "blur" === c && setTimeout(function () {
                                    var e = document.activeElement;
                                    if (e && !Nr(a, l) && !ar(e)) {
                                        var t = u && u.querySelector(".__PrivateStripeElement-safariInput");
                                        if (t) {
                                            var n = t;
                                            n.disabled = !1, n.focus(), n.blur(), n.disabled = !0
                                        }
                                        e.focus()
                                    }
                                }, 400)
                            }
                            a._emit(c, s)
                        }
                        break;
                    case "stripe-frame-action-response":
                        a && a.resolve(o.payload.nonce, o.payload.faRes);
                        break;
                    case "stripe-frame-action-error":
                        a && a.reject(o.payload.nonce, Cr(o.payload.faErr));
                        break;
                    case "stripe-frame-error":
                        throw new ke(o.payload.message);
                    case "stripe-integration-error":
                        a && a._emit("__privateIntegrationError", {
                            message: o.payload.message
                        });
                        break;
                    case "stripe-controller-load":
                        e._controllerFrame._emit("load"), Object.keys(e._frames).forEach(function (t) {
                            return e._frames[t].send({
                                action: "stripe-controller-load",
                                payload: {}
                            })
                        });
                        break;
                    case "stripe-safe-controller-action-response":
                        e._requests[o.payload.nonce] && e._requests[o.payload.nonce].resolve(o.payload.caRes);
                        break;
                    case "stripe-safe-controller-action-error":
                        e._requests[o.payload.nonce] && e._requests[o.payload.nonce].reject(Cr(o.payload.caErr))
                }
            }
        },
        Lr = Mr,
        xr = function () {
            var e = document.querySelectorAll("meta[name=viewport][content]"),
                t = e[e.length - 1];
            return t && t instanceof HTMLMetaElement ? t.content : ""
        },
        qr = function (e) {
            xr().match(/width=device-width/) || e('Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements')
        },
        Dr = {
            checkout_beta_2: "checkout_beta_2",
            checkout_beta_3: "checkout_beta_3",
            checkout_beta_4: "checkout_beta_4",
            checkout_beta_testcards: "checkout_beta_testcards",
            payment_intent_beta_1: "payment_intent_beta_1",
            payment_intent_beta_2: "payment_intent_beta_2",
            payment_intent_beta_3: "payment_intent_beta_3",
            card_payment_method_beta_1: "card_payment_method_beta_1",
            acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation",
            cvc_update_beta_1: "cvc_update_beta_1",
            google_pay_beta_1: "google_pay_beta_1",
            alipay_pm_beta_1: "alipay_pm_beta_1",
            au_bank_account_beta_1: "au_bank_account_beta_1",
            au_bank_account_beta_2: "au_bank_account_beta_2",
            bacs_debit_beta: "bacs_debit_beta",
            bancontact_pm_beta_1: "bancontact_pm_beta_1",
            eps_pm_beta_1: "eps_pm_beta_1",
            fpx_bank_beta_1: "fpx_bank_beta_1",
            giropay_pm_beta_1: "giropay_pm_beta_1",
            grabpay_pm_beta_1: "grabpay_pm_beta_1",
            ideal_pm_beta_1: "ideal_pm_beta_1",
            oxxo_pm_beta_1: "oxxo_pm_beta_1",
            p24_pm_beta_1: "p24_pm_beta_1",
            sepa_pm_beta_1: "sepa_pm_beta_1",
            sofort_pm_beta_1: "sofort_pm_beta_1",
            checkout_beta_locales: "checkout_beta_locales",
            stripe_js_beta_locales: "stripe_js_beta_locales"
        },
        Br = Object.keys(Dr),
        Fr = function (e, t) {
            return e.indexOf(t) >= 0
        },
        Ur = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        zr = function (e) {
            return e && "object" === (void 0 === e ? "undefined" : Hr(e)) && (e.constructor === Array || e.constructor === Object)
        },
        Gr = function (e) {
            return zr(e) ? Array.isArray(e) ? e.slice(0, e.length) : Ur({}, e) : e
        },
        Wr = function e(t) {
            return function () {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                if (Array.isArray(r[0]) && t) return Gr(r[0]);
                var a = Array.isArray(r[0]) ? [] : {};
                return r.forEach(function (n) {
                    n && Object.keys(n).forEach(function (r) {
                        var o = a[r],
                            i = n[r],
                            c = zr(o) && !(t && Array.isArray(o));
                        "object" === (void 0 === i ? "undefined" : Hr(i)) && c ? a[r] = e(t)(o, Gr(i)) : void 0 !== i ? a[r] = zr(i) ? e(t)(i) : Gr(i) : void 0 !== o && (a[r] = o)
                    })
                }), a
            }
        },
        Yr = (Wr(!1), Wr(!0)),
        Kr = function (e) {
            function t() {
                L(this, t);
                var e = x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.name = "NetworkError", e.type = "network_error", e
            }
            return q(t, e), t
        }(Error),
        Vr = Kr,
        Jr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Qr = {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        Xr = function (e) {
            return Object.keys(Qr).forEach(function (t) {
                e.setRequestHeader(t, Qr[t])
            }), e
        },
        $r = function e(t) {
            return new Ne(function (n, r) {
                var o = t.method,
                    a = t.url,
                    i = t.data,
                    c = t.withCredentials,
                    s = i ? Vt(i) : "",
                    u = "GET" === o && s ? a + "?" + s : a,
                    l = "GET" === o ? "" : s,
                    p = new XMLHttpRequest;
                c && (p.withCredentials = c), p.open(o, u, !0), Xr(p), p.onreadystatechange = function () {
                    4 === p.readyState && (p.onreadystatechange = function () {}, 0 === p.status ? c ? r(new Vr) : e(Jr({}, t, {
                        withCredentials: !0
                    })).then(n, r) : n(p))
                };
                try {
                    p.send(l)
                } catch (e) {
                    r(e)
                }
            })
        },
        Zr = $r,
        eo = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        to = function (e, t) {
            var n = /@font-face[ ]?{[^}]*}/g,
                r = e.match(n);
            if (!r) throw new ke("No @font-face rules found in file from " + t);
            return r
        },
        no = function (e) {
            var t = e.match(/@font-face[ ]?{([^}]*)}/);
            return t ? t[1] : ""
        },
        ro = function (e, t) {
            var n = e.replace(/\/\*.*\*\//g, "").trim(),
                r = n.length && /;$/.test(n) ? n : n + ";",
                o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
            if (!o) throw new ke("Found @font-face rule containing no valid font-properties in file from " + t);
            return o
        },
        oo = function (e, t) {
            var n = e.indexOf(":");
            if (-1 === n) throw new ke("Invalid css declaration in file from " + t + ': "' + e + '"');
            var r = e.slice(0, n).trim(),
                o = Ut[r];
            if (!o) throw new ke("Unsupported css property in file from " + t + ': "' + r + '"');
            return {
                property: o,
                value: e.slice(n + 1).trim()
            }
        },
        ao = function (e, t) {
            var n = e.reduce(function (e, n) {
                var r = oo(n, t),
                    o = r.property,
                    a = r.value;
                return eo({}, e, D({}, o, a))
            }, {});
            return ["family", "src"].forEach(function (e) {
                if (!n[e]) throw new ke("Missing css property in file from " + t + ': "' + Ft[e] + '"')
            }), n
        },
        io = function (e) {
            return Zr({
                url: e,
                method: "GET"
            }).then(function (e) {
                return e.responseText
            }).then(function (t) {
                return to(t, e).map(function (t) {
                    var n = no(t),
                        r = ro(n, e);
                    return ao(r, e)
                })
            })
        },
        co = io,
        so = function (e, t) {
            return e.reduce(function (e, n) {
                return e.then(function (e) {
                    return "SATISFIED" === e.type ? e : n().then(function (e) {
                        return t(e) ? {
                            type: "SATISFIED",
                            value: e
                        } : {
                            type: "UNSATISFIED"
                        }
                    })
                })
            }, Ne.resolve({
                type: "UNSATISFIED"
            }))
        },
        uo = so,
        lo = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        po = {
            success: "success",
            fail: "fail",
            invalid_shipping_address: "invalid_shipping_address"
        },
        fo = {
            fail: "fail",
            invalid_payer_name: "invalid_payer_name",
            invalid_payer_email: "invalid_payer_email",
            invalid_payer_phone: "invalid_payer_phone",
            invalid_shipping_address: "invalid_shipping_address"
        },
        ho = {
            shipping: "shipping",
            delivery: "delivery",
            pickup: "pickup"
        },
        _o = lo({
            success: "success"
        }, fo),
        mo = {
            merchantCapabilities: ["supports3DS"],
            displayItems: []
        },
        yo = vt({
            amount: pt,
            label: ot,
            pending: Qe(it)
        }),
        vo = vt({
            amount: lt,
            label: ot,
            pending: Qe(it)
        }),
        bo = vt({
            amount: lt,
            label: ot,
            pending: Qe(it),
            id: at(ot, function () {
                return Gt("shippingOption")
            }),
            detail: at(ot, function () {
                return ""
            })
        }),
        go = et.apply(void 0, B(Object.keys(ho))),
        Eo = vt({
            origin: ot,
            name: ot
        }),
        wo = vt({
            displayItems: Qe(ft(vo)),
            shippingOptions: Qe(ht("id")(ft(bo))),
            total: yo,
            requestShipping: Qe(it),
            requestPayerName: Qe(it),
            requestPayerEmail: Qe(it),
            requestPayerPhone: Qe(it),
            shippingType: Qe(go),
            currency: rt,
            country: nt,
            jcbEnabled: Qe(it),
            __billingDetailsEmailOverride: Qe(ot),
            __minApplePayVersion: Qe(ct),
            __merchantDetails: Qe(Eo),
            __skipGooglePayInPaymentRequest: Qe(it)
        }),
        So = yt({
            currency: Qe(rt),
            displayItems: Qe(ft(vo)),
            shippingOptions: Qe(ht("id")(ft(bo))),
            total: Qe(yo)
        }),
        Po = function (e, t) {
            var n = ["invalid_payer_name", "invalid_payer_email", "invalid_payer_phone"];
            return et.apply(void 0, B(Object.keys(po)))(-1 !== n.indexOf(e) ? "fail" : e, t)
        },
        Oo = vt({
            displayItems: Qe(ft(vo)),
            shippingOptions: Qe(ht("id")(ft(bo))),
            total: Qe(yo),
            status: Po
        }),
        ko = et.apply(void 0, B(Object.keys(_o))),
        Ao = function (e) {
            var t = Fr(e, Dr.google_pay_beta_1);
            return _r ? t ? ["APPLE_PAY", "GOOGLE_PAY"] : ["APPLE_PAY"] : t ? ["GOOGLE_PAY", "BROWSER"] : ["BROWSER"]
        },
        To = Ao,
        Io = function () {
            try {
                return window.location.origin === window.top.location.origin
            } catch (e) {
                return !1
            }
        },
        Ro = 2,
        No = function (e) {
            var t = {};
            return function (n) {
                if (void 0 !== t[n]) return t[n];
                var r = e(n);
                return t[n] = r, r
            }
        }(function (e) {
            return window.ApplePaySession.canMakePaymentsWithActiveCard(e)
        }),
        Co = function (e) {
            if (!window.ApplePaySession) return !1;
            try {
                return window.ApplePaySession.supportsVersion(e)
            } catch (e) {
                return !1
            }
        },
        Mo = function (e, t, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ro,
                a = Math.max(Ro, o);
            if (window.ApplePaySession) {
                if (Io()) {
                    if (n && "https:" !== window.location.protocol) return window.console && window.console.warn("To test Apple Pay, you must serve this page over HTTPS."), Ne.resolve(!1);
                    if (window.ApplePaySession.supportsVersion(a)) {
                        var i = t ? [e, t] : [e],
                            c = "merchant." + i.join(".") + ".stripe";
                        return No(c).then(function (o) {
                            if (r("pr.apple_pay.can_make_payment_native_response", {
                                    available: o
                                }), n && !o && window.console) {
                                var a = t ? "or stripeAccount parameter (" + t + ") " : "";
                                window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + e + ") " + a + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")
                            }
                            return o
                        })
                    }
                    return n && window.console && window.console.warn("This version of Safari does not support ApplePay JS version " + a + "."), Ne.resolve(!1)
                }
                return Ne.resolve(!1)
            }
            return Ne.resolve(!1)
        },
        jo = ["mastercard", "visa"],
        Lo = ["AT", "AU", "BE", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "IE", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NO", "NZ", "PL", "PT", "SE", "SG", "US"],
        xo = function (e, t) {
            var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(jo) : jo;
            return -1 !== Lo.indexOf(e) ? ["amex"].concat(F(n)) : n
        },
        qo = function (e, t) {
            return xo(e, t).reduce(function (e, t) {
                return "mastercard" === t ? [].concat(F(e), ["masterCard"]) : "diners" === t ? e : [].concat(F(e), [t])
            }, [])
        },
        Do = {
            bif: 1,
            clp: 1,
            djf: 1,
            gnf: 1,
            jpy: 1,
            kmf: 1,
            krw: 1,
            mga: 1,
            pyg: 1,
            rwf: 1,
            vnd: 1,
            vuv: 1,
            xaf: 1,
            xof: 1,
            xpf: 1
        },
        Bo = function (e) {
            var t = Do[e.toLowerCase()] || 100;
            return {
                unitSize: 1 / t,
                fractionDigits: Math.log(t) / Math.log(10)
            }
        },
        Fo = function (e, t) {
            var n = Bo(t);
            return (e * n.unitSize).toFixed(n.fractionDigits)
        },
        Uo = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ho = function (e, t) {
            return {
                amount: Fo(e.amount, t.currency),
                label: e.label,
                type: e.pending ? "pending" : "final"
            }
        },
        zo = function (e, t) {
            return {
                amount: Fo(e.amount, t.currency),
                label: e.label,
                detail: e.detail,
                identifier: e.id
            }
        },
        Go = function (e, t) {
            return new window.ApplePayError(e, t)
        },
        Wo = function (e) {
            return function (t) {
                return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null
            }
        },
        Yo = (Ee = {}, U(Ee, _o.success, 0), U(Ee, _o.fail, 1), U(Ee, _o.invalid_payer_name, 2), U(Ee, _o.invalid_shipping_address, 3), U(Ee, _o.invalid_payer_phone, 4), U(Ee, _o.invalid_payer_email, 4), Ee),
        Ko = (we = {}, U(we, _o.success, function () {
            return null
        }), U(we, _o.fail, function () {
            return null
        }), U(we, _o.invalid_payer_name, function () {
            return Go("billingContactInvalid", "name")
        }), U(we, _o.invalid_shipping_address, function () {
            return Go("shippingContactInvalid", "postalAddress")
        }), U(we, _o.invalid_payer_phone, function () {
            return Go("shippingContactInvalid", "phoneNumber")
        }), U(we, _o.invalid_payer_email, function () {
            return Go("shippingContactInvalid", "emailAddress")
        }), we),
        Vo = (Se = {}, U(Se, ho.pickup, "storePickup"), U(Se, ho.shipping, "shipping"), U(Se, ho.delivery, "delivery"), Se),
        Jo = {
            total: function (e) {
                return Ho(e.total, e)
            },
            lineItems: function (e) {
                return e.displayItems ? e.displayItems.map(function (t) {
                    return Ho(t, e)
                }) : []
            },
            shippingMethods: function (e) {
                return e.shippingOptions ? e.shippingOptions.map(function (t) {
                    return zo(t, e)
                }) : []
            }
        },
        Qo = {
            shippingType: function (e) {
                var t = e.shippingType;
                if (!t) return null;
                var n = Vo[t];
                if (void 0 !== n) return n;
                throw new ke("Invalid value for shippingType: " + t)
            },
            requiredBillingContactFields: function (e) {
                return e.requestPayerName ? ["postalAddress"] : null
            },
            requiredShippingContactFields: function (e) {
                var t = [];
                return e.requestShipping && t.push("postalAddress"), e.requestPayerEmail && t.push("email"), e.requestPayerPhone && t.push("phone"), t.length ? t : null
            },
            countryCode: Wo("country"),
            currencyCode: Wo("currency"),
            merchantCapabilities: function (e) {
                return function (t) {
                    return t[e] || null
                }
            }("merchantCapabilities"),
            supportedNetworks: function (e) {
                var t = qo(e.country, e.jcbEnabled || !1);
                return Co(4) && t.push("maestro"), t
            }
        },
        Xo = {
            status: function (e) {
                var t = Yo[e.status];
                return Co(3) && t > 1 ? 1 : t
            },
            error: function (e) {
                return Co(3) ? Ko[e.status]() : null
            }
        },
        $o = Uo({}, Jo, Qo),
        Zo = Uo({}, Jo, Xo),
        ea = function (e) {
            var t = Uo({}, mo, e);
            return Object.keys($o).reduce(function (e, n) {
                var r = $o[n],
                    o = r(t);
                return null !== o ? Uo({}, e, U({}, n, o)) : e
            }, {})
        },
        ta = function (e) {
            return Object.keys(Zo).reduce(function (t, n) {
                var r = Zo[n],
                    o = r(e);
                return null !== o ? Uo({}, t, U({}, n, o)) : t
            }, {})
        },
        na = function (e) {
            return "string" == typeof e ? e : null
        },
        ra = function (e) {
            return e ? na(e.phoneNumber) : null
        },
        oa = function (e) {
            return e ? na(e.emailAddress) : null
        },
        aa = function (e) {
            return e ? [e.givenName, e.familyName].filter(function (e) {
                return e && "string" == typeof e
            }).join(" ") : null
        },
        ia = function (e) {
            var t = e.addressLines,
                n = e.countryCode,
                r = e.postalCode,
                o = e.administrativeArea,
                a = e.locality,
                i = e.phoneNumber,
                c = na(n);
            return {
                addressLine: Array.isArray(t) ? t.reduce(function (e, t) {
                    return "string" == typeof t ? [].concat(H(e), [t]) : e
                }, []) : [],
                country: c ? c.toUpperCase() : "",
                postalCode: na(r) || "",
                recipient: aa(e) || "",
                region: na(o) || "",
                city: na(a) || "",
                phone: na(i) || "",
                sortingCode: "",
                dependentLocality: "",
                organization: ""
            }
        },
        ca = function (e, t) {
            var n = e.identifier,
                r = e.label;
            return t.filter(function (e) {
                return e.id === n && e.label === r
            })[0]
        },
        sa = function (e, t) {
            var n = e.shippingContact,
                r = e.shippingMethod,
                o = e.billingContact;
            return {
                shippingOption: r && t.shippingOptions && t.shippingOptions.length ? ca(r, t.shippingOptions) : null,
                shippingAddress: n ? ia(n) : null,
                payerEmail: oa(n),
                payerPhone: ra(n),
                payerName: aa(o),
                methodName: "apple-pay"
            }
        },
        ua = sa,
        la = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        pa = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        fa = {
            australia: "AU",
            austria: "AT",
            canada: "CA",
            schweiz: "CH",
            deutschland: "DE",
            hongkong: "HK",
            saudiarabia: "SA",
            espaa: "ES",
            singapore: "SG",
            us: "US",
            usa: "US",
            unitedstatesofamerica: "US",
            unitedstates: "US",
            england: "GB",
            gb: "GB",
            uk: "GB",
            unitedkingdom: "GB"
        },
        ha = function (e, t) {
            return e && "object" === (void 0 === e ? "undefined" : da(e)) ? t(e) : null
        },
        _a = function () {
            function e(t) {
                var n = this;
                z(this, e), this._onEvent = function () {}, this.setEventHandler = function (e) {
                    n._onEvent = e
                }, this.canMakePayment = function () {
                    return Mo(window.location.hostname, n._authentication.accountId, Ue(n._authentication.apiKey) === Fe.test, n._report, n._minimumVersion)
                }, this.update = function (e) {
                    n._initialPaymentRequest = Yr(n._paymentRequestOptions, e), n._initializeSessionState()
                }, this.show = function () {
                    n._initializeSessionState();
                    var e = void 0;
                    try {
                        e = new window.ApplePaySession(n._minimumVersion, ea(n._paymentRequestOptions))
                    } catch (e) {
                        throw "Must create a new ApplePaySession from a user gesture handler." === e.message ? new ke("show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).") : e
                    }
                    n._privateSession = e, n._setupSession(e, n._usesButtonElement()), e.begin(), n._isShowing = !0
                }, this.abort = function () {
                    n._privateSession && n._privateSession.abort()
                }, this._warn = function (e) {}, this._report = function (e, t) {
                    n._controller.report(e, la({}, t, {
                        backingLibrary: "APPLE_PAY",
                        usesButtonElement: n._usesButtonElement()
                    }))
                }, this._validateMerchant = function (e, t) {
                    return function (r) {
                        n._controller.action.createApplePaySession({
                            data: {
                                validation_url: r.validationURL,
                                domain_name: window.location.hostname,
                                display_name: n._paymentRequestOptions.total.label
                            },
                            usesButtonElement: t
                        }).then(function (t) {
                            if (n._isShowing) switch (t.type) {
                                case "object":
                                    e.completeMerchantValidation(JSON.parse(t.object.session));
                                    break;
                                case "error":
                                    n._handleValidationError(e)(t.error);
                                    break;
                                default:
                                    Ae(t)
                            }
                        }, n._handleValidationError(e))
                    }
                }, this._handleValidationError = function (e) {
                    return function (t) {
                        n._report("error.pr.apple_pay.session_creation_failed", {
                            error: t
                        }), e.abort();
                        var r = t.message;
                        "string" == typeof r && n._controller.warn(r)
                    }
                }, this._paymentAuthorized = function (e) {
                    return function (t) {
                        var r = t.payment,
                            o = n._usesButtonElement() ? Mt.paymentRequestButton : null;
                        n._controller.action.tokenizeWithData({
                            type: "apple_pay",
                            elementName: o,
                            tokenData: la({}, r, {
                                billingContact: ha(r.billingContact, n._normalizeContact)
                            }),
                            mids: n._mids
                        }).then(function (t) {
                            if ("error" === t.type) e.completePayment(window.ApplePaySession.STATUS_FAILURE), n._report("error.pr.create_token_failed", {
                                error: t.error
                            });
                            else {
                                var o = ha(r.shippingContact, n._normalizeContact),
                                    a = ha(r.billingContact, n._normalizeContact);
                                o && n._paymentRequestOptions.requestShipping && !o.countryCode && e.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS);
                                var i = ua({
                                    shippingContact: o,
                                    billingContact: a
                                }, n._paymentRequestOptions);
                                n._onToken(e)(la({}, i, {
                                    shippingOption: n._privateShippingOption,
                                    token: t.object
                                }))
                            }
                        })
                    }
                }, this._normalizeContact = function (e) {
                    if (e.country && "string" == typeof e.country) {
                        var t = e.country.toLowerCase().replace(/[^a-z]+/g, ""),
                            r = void 0;
                        return e.countryCode ? "string" == typeof e.countryCode && (r = e.countryCode.toUpperCase()) : (r = fa[t]) || n._report("warn.pr.apple_pay.missing_country_code", {
                            country: e.country
                        }), la({}, e, {
                            countryCode: r
                        })
                    }
                    return e
                }, this._onToken = function (e) {
                    return function (t) {
                        n._onEvent({
                            type: "paymentresponse",
                            payload: la({}, t, {
                                complete: n._completePayment(e)
                            })
                        })
                    }
                }, this._completePayment = function (e) {
                    return function (t) {
                        n._paymentRequestOptions = Yr(n._paymentRequestOptions, {
                            status: t
                        });
                        var r = ta(n._paymentRequestOptions),
                            o = r.status,
                            a = r.error;
                        a ? e.completePayment({
                            status: o,
                            errors: [a]
                        }) : e.completePayment(o), (0 === o || 1 === o && null == a) && (n._isShowing = !1, n._onEvent && n._onEvent({
                            type: "close"
                        }))
                    }
                }, this._shippingContactSelected = function (e) {
                    return function (t) {
                        n._onEvent({
                            type: "shippingaddresschange",
                            payload: {
                                shippingAddress: ia(n._normalizeContact(t.shippingContact)),
                                updateWith: n._completeShippingContactSelection(e)
                            }
                        })
                    }
                }, this._completeShippingContactSelection = function (e) {
                    return function (t) {
                        n._paymentRequestOptions = Yr(n._paymentRequestOptions, t), n._paymentRequestOptions.shippingOptions && n._paymentRequestOptions.shippingOptions.length && (n._privateShippingOption = n._paymentRequestOptions.shippingOptions[0]);
                        var r = ta(n._paymentRequestOptions),
                            o = r.status,
                            a = r.shippingMethods,
                            i = r.total,
                            c = r.lineItems;
                        e.completeShippingContactSelection(o, a, i, c)
                    }
                }, this._shippingMethodSelected = function (e) {
                    return function (t) {
                        if (n._paymentRequestOptions.shippingOptions) {
                            var r = ca(t.shippingMethod, n._paymentRequestOptions.shippingOptions);
                            n._privateShippingOption = r, n._onEvent({
                                type: "shippingoptionchange",
                                payload: {
                                    shippingOption: r,
                                    updateWith: n._completeShippingMethodSelection(e)
                                }
                            })
                        }
                    }
                }, this._completeShippingMethodSelection = function (e) {
                    return function (t) {
                        n._paymentRequestOptions = Yr(n._paymentRequestOptions, t);
                        var r = ta(n._paymentRequestOptions),
                            o = r.status,
                            a = r.total,
                            i = r.lineItems;
                        e.completeShippingMethodSelection(o, a, i)
                    }
                };
                var r = t.controller,
                    o = t.authentication,
                    a = t.mids,
                    i = t.options,
                    c = t.usesButtonElement;
                this._controller = r, this._authentication = o, this._mids = a, this._minimumVersion = i.__minApplePayVersion || Ro, this._usesButtonElement = c, this._initialPaymentRequest = i, this._isShowing = !1, this._initializeSessionState()
            }
            return pa(e, [{
                key: "_initializeSessionState",
                value: function () {
                    this._paymentRequestOptions = la({}, mo, this._initialPaymentRequest, {
                        status: _o.success
                    }), this._privateSession = null, this._privateShippingOption = null;
                    var e = this._paymentRequestOptions.shippingOptions;
                    e && e.length && (this._privateShippingOption = e[0])
                }
            }, {
                key: "_setupSession",
                value: function (e, t) {
                    var n = this;
                    e.addEventListener("validatemerchant", sn(this._validateMerchant(e, t))), e.addEventListener("paymentauthorized", sn(this._paymentAuthorized(e))), e.addEventListener("cancel", sn(function () {
                        n._isShowing = !1, n._onEvent({
                            type: "cancel"
                        }), n._onEvent({
                            type: "close"
                        })
                    })), e.addEventListener("shippingcontactselected", sn(this._shippingContactSelected(e))), e.addEventListener("shippingmethodselected", sn(this._shippingMethodSelected(e)))
                }
            }]), e
        }(),
        ma = _a,
        ya = null,
        va = function (e) {
            return null !== ya ? Ne.resolve(ya) : e().then(function (e) {
                return ya = e
            })
        },
        ba = va,
        ga = function () {
            return "https:" === window.location.protocol && !(!yr && !vr)
        },
        Ea = ga,
        wa = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Sa = function e(t) {
            var n = this;
            G(this, e), this._mids = null, this._frame = null, this._backdrop = new Hn({
                lockScrolling: !1,
                lockFocus: !0,
                lockFocusOn: null
            }), this._initFrame = function (e) {
                var t = n._controller.createHiddenFrame(At.PAYMENT_REQUEST_GOOGLE_PAY, {
                    authentication: n._authentication,
                    mids: n._mids
                });
                t.send({
                    action: "stripe-pr-initialize",
                    payload: {
                        data: e
                    }
                }), n._initFrameEventHandlers(t), n._frame = t
            }, this._initFrameEventHandlers = function (e) {
                e._on("pr-cancel", function () {
                    n._onEvent({
                        type: "cancel"
                    })
                }), e._on("pr-close", function () {
                    n._backdrop.fadeOut().then(function () {
                        n._backdrop.unmount()
                    }), n._onEvent({
                        type: "close"
                    })
                }), e._on("pr-error", function (e) {
                    n._onEvent({
                        type: "error",
                        payload: {
                            errorMessage: e.errorMessage,
                            errorCode: e.errorCode
                        }
                    })
                }), e._on("pr-callback", function (t) {
                    var r = t.event,
                        o = t.options,
                        a = t.nonce;
                    switch (r) {
                        case "paymentresponse":
                            n._handlePaymentResponse(e, o, a);
                            break;
                        case "shippingaddresschange":
                            n._handleShippingAddressChange(e, o, a);
                            break;
                        case "shippingoptionchange":
                            n._handleShippingOptionChange(e, o, a);
                            break;
                        default:
                            throw new Error("Unexpected event name: " + r)
                    }
                })
            }, this._handlePaymentResponse = function (e, t, r) {
                var o = function (t) {
                    e.send({
                        action: "stripe-pr-callback-complete",
                        payload: {
                            nonce: r,
                            data: {
                                status: t
                            }
                        }
                    })
                };
                n._onEvent({
                    type: "paymentresponse",
                    payload: wa({}, t, {
                        complete: o
                    })
                })
            }, this._handleShippingAddressChange = function (e, t, r) {
                var o = function (t) {
                    e.send({
                        action: "stripe-pr-callback-complete",
                        payload: {
                            nonce: r,
                            data: t
                        }
                    })
                };
                n._onEvent({
                    type: "shippingaddresschange",
                    payload: wa({}, t, {
                        updateWith: o
                    })
                })
            }, this._handleShippingOptionChange = function (e, t, r) {
                var o = function (t) {
                    e.send({
                        action: "stripe-pr-callback-complete",
                        payload: {
                            nonce: r,
                            data: t
                        }
                    })
                };
                n._onEvent({
                    type: "shippingoptionchange",
                    payload: wa({}, t, {
                        updateWith: o
                    })
                })
            }, this.setEventHandler = function (e) {
                n._onEvent = e
            }, this.canMakePayment = function () {
                if (!Ea()) return Ne.resolve(!1);
                if (!n._frame) throw new Error("Frame not initialized.");
                var e = n._frame;
                return ba(function () {
                    return e.action.checkCanMakePayment().then(function (e) {
                        return !0 === e.available
                    })
                })
            }, this.show = function () {
                n._frame && (n._frame.send({
                    action: "stripe-pr-show",
                    payload: {
                        data: {
                            usesButtonElement: n._usesButtonElement()
                        }
                    }
                }), n._backdrop.mount(), n._backdrop.show(), n._backdrop.fadeIn())
            }, this.update = function (e) {
                n._frame && n._frame.send({
                    action: "stripe-pr-update",
                    payload: {
                        data: e
                    }
                })
            }, this.abort = function () {
                n._frame && n._frame.send({
                    action: "stripe-pr-abort",
                    payload: {}
                })
            }, this._controller = t.controller, this._authentication = t.authentication, this._mids = t.mids, this._usesButtonElement = t.usesButtonElement, Ea() && this._controller && (this._controller.action.fetchLocale({
                locale: "auto"
            }), this._initFrame(t.options))
        },
        Pa = Sa,
        Oa = function () {
            if (!window.PaymentRequest) return null;
            if (/CriOS\/59/.test(navigator.userAgent)) return null;
            if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)) return null;
            if (mr) return null;
            var e = window.PaymentRequest;
            return e.prototype.canMakePayment || (e.prototype.canMakePayment = function () {
                return Ne.resolve(!1)
            }), e
        }(),
        ka = null,
        Aa = function (e, t) {
            return null !== ka ? Ne.resolve(ka) : Oa ? t && "https:" !== window.location.protocol ? (window.console && window.console.warn("To test Payment Request, you must serve this page over HTTPS."), Ne.resolve(!1)) : e ? e.action.checkCanMakePayment().then(function (e) {
                var t = e.available;
                return ka = !0 === t
            }) : Ne.resolve(!1) : Ne.resolve(!1)
        },
        Ta = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ia = function e(t) {
            W(this, e), Ra.call(this);
            var n = t.authentication,
                r = t.controller,
                o = t.mids,
                a = t.usesButtonElement,
                i = t.options;
            if (this._authentication = n, this._controller = r, this._mids = o, this._usesButtonElement = a, Oa && "https:" === window.location.protocol) {
                this._controller.action.fetchLocale({
                    locale: "auto"
                });
                var c = this._controller.createHiddenFrame(At.PAYMENT_REQUEST_BROWSER, {
                    authentication: n,
                    mids: this._mids
                });
                this._setupPrFrame(c, i), this._prFrame = c
            } else this._prFrame = null
        },
        Ra = function () {
            var e = this;
            this._onEvent = function () {}, this.setEventHandler = function (t) {
                e._onEvent = t
            }, this.canMakePayment = function () {
                return Aa(e._prFrame, Ue(e._authentication.apiKey) === Fe.test)
            }, this.update = function (t) {
                var n = e._prFrame;
                n && n.send({
                    action: "stripe-pr-update",
                    payload: {
                        data: t
                    }
                })
            }, this.show = function () {
                if (!e._prFrame) throw new ke("Payment Request is not available in this browser.");
                e._prFrame.send({
                    action: "stripe-pr-show",
                    payload: {
                        data: {
                            usesButtonElement: e._usesButtonElement()
                        }
                    }
                })
            }, this.abort = function () {
                e._prFrame && e._prFrame.send({
                    action: "stripe-pr-abort",
                    payload: {}
                })
            }, this._setupPrFrame = function (t, n) {
                t.send({
                    action: "stripe-pr-initialize",
                    payload: {
                        data: n
                    }
                }), t._on("pr-cancel", function () {
                    e._onEvent({
                        type: "cancel"
                    })
                }), t._on("pr-close", function () {
                    e._onEvent({
                        type: "close"
                    })
                }), t._on("pr-error", function (t) {
                    e._onEvent({
                        type: "error",
                        payload: {
                            errorMessage: t.message || "",
                            errorCode: t.code || ""
                        }
                    })
                }), t._on("pr-callback", function (n) {
                    var r = n.event,
                        o = n.nonce,
                        a = n.options;
                    switch (r) {
                        case "token":
                            e._onEvent({
                                type: "paymentresponse",
                                payload: Ta({}, a, {
                                    complete: function (e) {
                                        t.send({
                                            action: "stripe-pr-callback-complete",
                                            payload: {
                                                data: {
                                                    status: e
                                                },
                                                nonce: o
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "shippingaddresschange":
                            e._onEvent({
                                type: "shippingaddresschange",
                                payload: {
                                    shippingAddress: a.shippingAddress,
                                    updateWith: function (e) {
                                        t.send({
                                            action: "stripe-pr-callback-complete",
                                            payload: {
                                                nonce: o,
                                                data: e
                                            }
                                        })
                                    }
                                }
                            });
                            break;
                        case "shippingoptionchange":
                            e._onEvent({
                                type: "shippingoptionchange",
                                payload: {
                                    shippingOption: a.shippingOption,
                                    updateWith: function (e) {
                                        t.send({
                                            action: "stripe-pr-callback-complete",
                                            payload: {
                                                nonce: o,
                                                data: e
                                            }
                                        })
                                    }
                                }
                            });
                            break;
                        default:
                            throw new Error("Unexpected event from PaymentRequest inner: " + r)
                    }
                })
            }
        },
        Na = Ia,
        Ca = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ma = function (e) {
            function t(e) {
                V(this, t);
                var n = J(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                ja.call(n), n._controller = e.controller, n._authentication = e.authentication, n._mids = e.mids, n._report("pr.options", {
                    options: e.rawOptions
                });
                var r = Et(wo, e.rawOptions || {}, "paymentRequest()"),
                    o = r.value;
                if (r.warnings.forEach(function (e) {
                        return n._warn(e)
                    }), o.__billingDetailsEmailOverride && o.requestPayerEmail) throw new ke("When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet.");
                return n._queryStrategy = e.queryStrategyOverride || To(e.betas), n._report("pr.query_strategy", {
                    queryStrategy: n._queryStrategy
                }), n._initialOptions = Ca({}, o, {
                    __skipGooglePayInPaymentRequest: -1 !== n._queryStrategy.indexOf("GOOGLE_PAY")
                }), n._initBackingLibraries(n._initialOptions), n
            }
            return Q(t, e), t
        }(fn),
        ja = function () {
            var e = this;
            this._usedByButtonElement = null, this._showCalledByButtonElement = !1, this._isShowing = !1, this._backingLibraries = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null
            }, this._activeBackingLibraryName = null, this._activeBackingLibrary = null, this._canMakePaymentAvailability = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null
            }, this._canMakePaymentResolved = !1, this._validateUserOn = function (t, n) {
                "string" == typeof t && ("source" === t && e._hasRegisteredListener("paymentmethod") || "paymentmethod" === t && e._hasRegisteredListener("source")) && (e._report("pr.double_callback_registration"), e._controller.warn("Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed."))
            }, this._report = function (t, n) {
                e._controller.report(t, Ca({}, n, {
                    activeBackingLibrary: e._activeBackingLibraryName,
                    usesButtonElement: e._usedByButtonElement
                }))
            }, this._warn = function (t) {
                e._controller.warn(t)
            }, this._registerElement = function () {
                e._usedByButtonElement = !0
            }, this._elementShow = function () {
                e._showCalledByButtonElement = !0, e.show()
            }, this._initBackingLibraries = function (t) {
                e._queryStrategy.forEach(function (n) {
                    var r = {
                        controller: e._controller,
                        authentication: e._authentication,
                        mids: e._mids,
                        options: t,
                        usesButtonElement: function () {
                            return !0 === e._usedByButtonElement
                        }
                    };
                    switch (n) {
                        case "APPLE_PAY":
                            e._backingLibraries.APPLE_PAY = new ma(r), e._backingLibraries.APPLE_PAY.setEventHandler(e._handleInternalEvent);
                            break;
                        case "GOOGLE_PAY":
                            e._backingLibraries.GOOGLE_PAY = new Pa(r), e._backingLibraries.GOOGLE_PAY.setEventHandler(e._handleInternalEvent);
                            break;
                        case "BROWSER":
                            e._backingLibraries.BROWSER = new Na(r), e._backingLibraries.BROWSER.setEventHandler(e._handleInternalEvent);
                            break;
                        default:
                            Ae(n)
                    }
                })
            }, this._handleInternalEvent = function (t) {
                switch (t.type) {
                    case "paymentresponse":
                        e._emitPaymentResponse(t.payload);
                        break;
                    case "error":
                        e._report("error.pr.internal_error", {
                            error: t.payload
                        });
                        break;
                    case "close":
                        e._isShowing = !1;
                        break;
                    default:
                        e._emitExternalEvent(t)
                }
            }, this._emitExternalEvent = function (t) {
                switch (t.type) {
                    case "cancel":
                        e._emit("cancel");
                        break;
                    case "shippingoptionchange":
                    case "shippingaddresschange":
                        var n = t.type,
                            r = t.payload,
                            o = null,
                            a = !1,
                            i = !1,
                            c = function (c) {
                                if (i && a) return e._report("pr.update_with_called_after_timeout", {
                                    event: n
                                }), void e._controller.warn("Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds.");
                                if (a) return e._report("pr.update_with_double_call", {
                                    event: n
                                }), void e._controller.warn("Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once.");
                                o && clearTimeout(o), a = !0, e._report("pr.update_with", {
                                    event: n,
                                    updates: c
                                });
                                var s = Et(Oo, c || {}, n + " callback"),
                                    u = s.value;
                                s.warnings.forEach(function (t) {
                                    return e._controller.warn(t)
                                });
                                var l = u,
                                    p = !1;
                                if ("APPLE_PAY" === e._activeBackingLibraryName && u.shippingOptions && 1 === u.shippingOptions.length && 0 === u.shippingOptions[0].amount) {
                                    u.shippingOptions;
                                    l = K(u, ["shippingOptions"]), p = !0
                                }
                                var d = u.shippingOptions || e._initialOptions.shippingOptions;
                                if (!(p || "shippingaddresschange" !== t.type || u.status !== _o.success || d && d.length)) throw new ke("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
                                r.updateWith(l)
                            };
                        e._hasRegisteredListener(t.type) ? (o = setTimeout(function () {
                            i = !0, e._report("pr.update_with_timed_out", {
                                event: n
                            }), e._controller.warn('Timed out waiting for a call to updateWith(). If you listen to "' + t.type + '" events, then you must call event.updateWith in the "' + t.type + '" handler within 30 seconds.'), c({
                                status: "fail"
                            })
                        }, 29900), e._emit(n, Ca({}, r, {
                            updateWith: c
                        }))) : c({
                            status: "success"
                        });
                        break;
                    case "token":
                    case "source":
                    case "paymentmethod":
                        var s = t.type,
                            u = t.payload,
                            l = null,
                            p = !1,
                            d = !1,
                            f = function (t) {
                                if (p && d) return e._report("pr.complete_called_after_timeout"), void e._controller.warn("Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds.");
                                if (d) return e._report("pr.complete_double_call"), void e._controller.warn("Call to complete() was ignored because it has already been called. Do not call complete more than once.");
                                l && clearTimeout(l), d = !0;
                                var n = Et(ko, t, "status for PaymentRequest completion"),
                                    r = n.value;
                                n.warnings.forEach(function (t) {
                                    return e._controller.warn(t)
                                }), u.complete(r)
                            };
                        l = setTimeout(function () {
                            p = !0, e._report("pr.complete_timed_out"), e._controller.warn('Timed out waiting for a call to complete(). Once you have processed the payment in the "' + t.type + '" handler, you must call event.complete within 30 seconds.'), f("fail")
                        }, 29900), e._emit(s, Ca({}, u, {
                            complete: f
                        }));
                        break;
                    default:
                        Ae(t)
                }
            }, this._maybeEmitPaymentResponse = function (t) {
                e._isShowing && e._emitExternalEvent(t)
            }, this._emitPaymentResponse = function (t) {
                e._report("pr.payment_authorized");
                var n = t.token,
                    r = K(t, ["token"]),
                    o = r.payerEmail,
                    a = r.payerPhone,
                    i = r.complete,
                    c = e._showCalledByButtonElement ? Mt.paymentRequestButton : null;
                e._hasRegisteredListener("token") && e._maybeEmitPaymentResponse({
                    type: "token",
                    payload: t
                }), e._hasRegisteredListener("source") && e._controller.action.createSourceWithData({
                    elementName: c,
                    type: "card",
                    sourceData: {
                        token: n.id,
                        owner: {
                            email: e._initialOptions.__billingDetailsEmailOverride || o,
                            phone: a
                        }
                    },
                    mids: null
                }).then(function (t) {
                    "error" === t.type ? t.error.code && "email_invalid" === t.error.code ? i("invalid_payer_email") : (e._report("fatal.pr.token_to_source_failed", {
                        error: t.error,
                        token: n.id
                    }), i("fail")) : e._maybeEmitPaymentResponse({
                        type: "source",
                        payload: Ca({}, r, {
                            source: t.object
                        })
                    })
                }), e._hasRegisteredListener("paymentmethod") && e._controller.action.createPaymentMethodWithData({
                    elementName: c,
                    type: "card",
                    paymentMethodData: {
                        card: {
                            token: n.id
                        },
                        billing_details: {
                            email: e._initialOptions.__billingDetailsEmailOverride || o,
                            phone: a
                        }
                    },
                    mids: null
                }).then(function (t) {
                    "error" === t.type ? t.error.code && "email_invalid" === t.error.code ? i("invalid_payer_email") : (e._report("fatal.pr.token_to_payment_method_failed", {
                        error: t.error,
                        token: n.id
                    }), i("fail")) : e._maybeEmitPaymentResponse({
                        type: "paymentmethod",
                        payload: Ca({}, r, {
                            paymentMethod: t.object
                        })
                    })
                })
            }, this._canMakePaymentForBackingLibrary = function (t) {
                var n = e._backingLibraries[t];
                if (!n) throw new Error("Unexpectedly calling canMakePayment on uninitialized backing library.");
                return Ne.race([new Ne(function (e) {
                    return setTimeout(e, 1e4)
                }).then(function () {
                    return !1
                }), n.canMakePayment().then(function (e) {
                    return !!e
                })]).then(function (n) {
                    return e._canMakePaymentAvailability = Ca({}, e._canMakePaymentAvailability, Y({}, t, n)), {
                        backingLibraryName: t,
                        available: n
                    }
                })
            }, this._constructCanMakePaymentResponse = function () {
                return Ca({
                    applePay: !!e._canMakePaymentAvailability.APPLE_PAY
                }, -1 !== e._queryStrategy.indexOf("GOOGLE_PAY") ? {
                    googlePay: !!e._canMakePaymentAvailability.GOOGLE_PAY
                } : {})
            }, this.canMakePayment = sn(function () {
                if (e._report("pr.can_make_payment"), e._canMakePaymentResolved) {
                    var t = null !== e._activeBackingLibrary ? e._constructCanMakePaymentResponse() : null;
                    return e._report("pr.can_make_payment_response", {
                        response: t,
                        cached: !0
                    }), Ne.resolve(t)
                }
                if ("https:" !== window.location.protocol) return e._canMakePaymentResolved = !0, Ne.resolve(null);
                var n = e._queryStrategy.map(function (t) {
                        return function () {
                            return e._canMakePaymentForBackingLibrary(t)
                        }
                    }),
                    r = Date.now();
                return uo(n, function (t) {
                    var n = t.backingLibraryName,
                        r = t.available;
                    return r && (e._activeBackingLibraryName = n, e._activeBackingLibrary = e._backingLibraries[n]), r
                }).then(function (t) {
                    var n = Date.now();
                    e._canMakePaymentResolved = !0;
                    var o = null;
                    return "SATISFIED" === t.type && (o = e._constructCanMakePaymentResponse()), e._report("pr.can_make_payment_response", {
                        response: o,
                        cached: !1,
                        duration: n - r
                    }), o
                })
            }), this.update = sn(function (t) {
                if (e._isShowing) throw e._report("pr.update_called_while_showing"), new ke("You cannot update Payment Request options while the payment sheet is showing.");
                e._report("pr.update", {
                    updates: t
                });
                var n = Et(So, t, "PaymentRequest update()"),
                    r = n.value;
                n.warnings.forEach(function (t) {
                    return e._warn(t)
                }), e._activeBackingLibrary && e._activeBackingLibrary.update(r)
            }), this.show = sn(function () {
                if (e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("pr.show_called_with_button"), e._warn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")), !e._canMakePaymentResolved) throw e._report("pr.show_called_before_can_make_payment"), new ke("You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show().");
                if (!e._activeBackingLibrary) throw e._report("pr.show_called_with_can_make_payment_false"), new ke("Payment Request is not available in this browser.");
                var t = e._activeBackingLibrary;
                e._report("pr.show", {
                    listeners: Object.keys(e._callbacks).sort()
                }), e._isShowing = !0, t.show()
            }), this.abort = sn(function () {
                if (e._activeBackingLibrary) {
                    var t = e._activeBackingLibrary;
                    e._report("pr.abort"), t.abort()
                }
            })
        },
        La = Ma,
        xa = {
            base: Qe(dt),
            complete: Qe(dt),
            empty: Qe(dt),
            invalid: Qe(dt),
            paymentRequestButton: Qe(dt)
        },
        qa = {
            classes: Qe(vt({
                base: Qe(ot),
                complete: Qe(ot),
                empty: Qe(ot),
                focus: Qe(ot),
                invalid: Qe(ot),
                webkitAutofill: Qe(ot)
            })),
            hidePostalCode: Qe(it),
            hideIcon: Qe(it),
            showIcon: Qe(it),
            style: Qe(vt(xa)),
            iconStyle: Qe(et("solid", "default")),
            value: Qe(Xe(ot, dt)),
            __privateCvcOptional: Qe(it),
            __privateValue: Qe(Xe(ot, dt)),
            __privateEmitIbanValue: Qe(it),
            error: Qe(vt({
                type: ot,
                code: Qe(ot),
                decline_code: Qe(ot),
                param: Qe(ot)
            })),
            locale: _t("elements()"),
            fonts: _t("elements()"),
            placeholder: Qe(ot),
            disabled: Qe(it),
            placeholderCountry: Qe(ot),
            paymentRequest: Qe(function (e, t) {
                return function (n, r) {
                    return n instanceof e ? Ye(n) : Je("a " + t + " instance", n, r)
                }
            }(La, "stripe.paymentRequest(...)")),
            supportedCountries: Qe(ft(ot)),
            accountHolderType: Qe(et("individual", "company"))
        },
        Da = vt(qa),
        Ba = ["bg", "cs", "el", "sk"],
        Fa = function (e) {
            return function (t, n) {
                return Fr(n, Dr.stripe_js_beta_locales) ? t : -1 === e.indexOf(t) ? t : "auto"
            }
        }(Ba),
        Ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Ha = function (e) {
            return "string" == typeof e ? Ce(Object.keys(gr), function (t) {
                return t === e
            }) || null : null
        },
        za = function (e) {
            return null != e && e.__elementType && "string" == typeof e.__elementType && "function" == typeof e ? e.__elementType : null
        },
        Ga = function (e, t) {
            var n = Ha(e);
            if (!n) throw new ke("A valid Element name must be provided. Valid Elements are:\n" + Object.keys(gr).filter(function (e) {
                return !gr[e].beta
            }).join(", ") + "; you passed: " + (n || (void 0 === e ? "undefined" : Ua(e))) + ".")
        },
        Wa = function (e, t, n) {
            if (Ga(e), gr[e].unique && -1 !== t.indexOf(e)) throw new ke("Can only create one Element of type " + e + ".");
            var r = gr[e].conflict,
                o = je(t, r);
            if (o.length) {
                var a = o[0];
                throw new ke("Cannot create an Element of type " + e + " after an Element of type " + a + " has already been created.")
            }
        },
        Ya = "14px",
        Ka = function (e) {
            var t = e.split(" ").map(function (e) {
                return parseInt(e.trim(), 10)
            });
            return 1 === t.length || 2 === t.length ? 2 * t[0] : 3 === t.length || 4 === t.length ? t[0] + t[2] : 0
        },
        Va = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.2em",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ya,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0",
                r = Ka(n);
            if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
                return parseFloat(e.toString().replace(/[^0-9.]/g, "")) + r + "px"
            }
            var o = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
                a = parseFloat(Ya.replace(/[^0-9.]/g, "")),
                i = parseFloat(t.toString().replace(/[^0-9.]/g, "")),
                c = void 0;
            if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) c = i;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t)) c = i * a;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t)) c = i / 100 * a;
            else {
                if ("string" != typeof t || !/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t)) return "100%";
                c = a
            }
            var s = o * c + r,
                u = s + "px";
            return /^[0-9.]+px$/.test(u) ? u : "100%"
        },
        Ja = Va,
        Qa = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Xa = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        $a = {
            base: "StripeElement",
            focus: "StripeElement--focus",
            invalid: "StripeElement--invalid",
            complete: "StripeElement--complete",
            empty: "StripeElement--empty",
            webkitAutofill: "StripeElement--webkit-autofill"
        },
        Za = {
            margin: "0",
            padding: "0",
            border: "none",
            display: "block",
            background: "transparent",
            position: "relative",
            opacity: "1"
        },
        ei = {
            border: "none",
            display: "block",
            position: "absolute",
            height: "1px",
            top: "0",
            left: "0",
            padding: "0",
            margin: "0",
            width: "100%",
            opacity: "0",
            background: "transparent",
            "pointer-events": "none",
            "font-size": "16px"
        },
        ti = function (e) {
            return parseFloat(e.toFixed(1))
        },
        ni = function (e) {
            return /^\d+(\.\d*)?px$/.test(e)
        },
        ri = function (e) {
            function t(e) {
                Z(this, t);
                var n = ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                oi.call(n);
                var r = e.controller,
                    o = e.componentName,
                    a = e.paymentRequest;
                n._controller = r, n._componentName = o;
                var i = "paymentRequestButton" === n._componentName;
                if (i) {
                    if (!a) throw new ke("You must pass in a stripe.paymentRequest object in order to use this Element.");
                    n._paymentRequest = a, n._paymentRequest._registerElement()
                }
                return n._createComponent(e, o), n._classes = $a, n._computeCustomClasses(e.classes || {}), n._lastBackgroundColor = "", n._destroyed = !1, n._focused = !1, n._empty = !i, n._invalid = !1, n._complete = !1, n._autofilled = !1, n._lastSubmittedAt = null, n
            }
            return te(t, e), Xa(t, [{
                key: "_checkDestroyed",
                value: function () {
                    if (this._destroyed) throw new ke("This Element has already been destroyed. Please create a new one.")
                }
            }, {
                key: "_isMounted",
                value: function () {
                    return !!document.body && document.body.contains(this._component)
                }
            }, {
                key: "_mountToParent",
                value: function (e) {
                    var t = this._component.parentElement,
                        n = this._isMounted();
                    if (e === t) {
                        if (n) return;
                        this.unmount(), this._mountTo(e)
                    } else if (t) {
                        if (n) throw new ke("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
                        this.unmount(), this._mountTo(e)
                    } else this._mountTo(e)
                }
            }, {
                key: "_mountTo",
                value: function (e) {
                    var t = Date.now(),
                        n = Ln(e, null),
                        r = !!n && "rtl" === n.getPropertyValue("direction"),
                        o = this._paymentRequest ? this._paymentRequest._activeBackingLibraryName : null;
                    for (this._parent = e; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(this._component), this._frame.send({
                        action: "stripe-user-mount",
                        payload: {
                            mountTime: t,
                            rtl: r,
                            paymentRequestButtonType: o
                        }
                    }), this._findPossibleLabel(), this._updateClasses()
                }
            }, {
                key: "_updateClasses",
                value: function () {
                    this._parent && $t(this._parent, [
                        [this._classes.base, !0],
                        [this._classes.empty, this._empty],
                        [this._classes.focus, this._focused],
                        [this._classes.invalid, this._invalid],
                        [this._classes.complete, this._complete],
                        [this._classes.webkitAutofill, this._autofilled]
                    ])
                }
            }, {
                key: "_removeClasses",
                value: function () {
                    this._parent && $t(this._parent, [
                        [this._classes.base, !1],
                        [this._classes.empty, !1],
                        [this._classes.focus, !1],
                        [this._classes.invalid, !1],
                        [this._classes.complete, !1],
                        [this._classes.webkitAutofill, !1]
                    ])
                }
            }, {
                key: "_findPossibleLabel",
                value: function () {
                    var e = this._parent;
                    if (e) {
                        var t = e.getAttribute("id"),
                            n = void 0;
                        if (t && (n = document.querySelector("label[for='" + t + "']")), n) e.addEventListener("click", this.focus);
                        else
                            for (n = n || e.parentElement; n && "LABEL" !== n.nodeName;) n = n.parentElement;
                        n ? (this._label = n, n.addEventListener("click", this.focus)) : e.addEventListener("click", this.focus)
                    }
                }
            }, {
                key: "_computeCustomClasses",
                value: function (e) {
                    var t = {};
                    return Object.keys(e).forEach(function (n) {
                        if (!$a[n]) throw new ke(n + " is not a customizable class name.\nYou can customize: " + Object.keys($a).join(", "));
                        var r = e[n] || $a[n];
                        t[n] = r.replace(/\./g, " ")
                    }), this._classes = Qa({}, this._classes, t), this
                }
            }, {
                key: "_emitEvent",
                value: function (e, t) {
                    return this._emit(e, Qa({
                        elementType: this._componentName
                    }, t))
                }
            }, {
                key: "_setupEvents",
                value: function () {
                    var e = this;
                    this._frame._on("redirectfocus", function (t) {
                        var n = t.focusDirection,
                            r = xn(e._component, n);
                        r && r.focus()
                    }), this._frame._on("focus", function () {
                        e._focused = !0, e._updateClasses()
                    }), this._frame._on("blur", function () {
                        e._focused = !1, e._updateClasses(), e._lastSubmittedAt && "paymentRequestButton" === e._componentName && (e._controller.report("payment_request_button.sheet_visible", {
                            latency: new Date - e._lastSubmittedAt
                        }), e._lastSubmittedAt = null)
                    }), this._frame._on("submit", function () {
                        if ("paymentRequestButton" === e._componentName) {
                            e._lastSubmittedAt = new Date;
                            var t = !1,
                                n = !1;
                            e._emitEvent("click", {
                                preventDefault: function () {
                                    e._controller.report("payment_request_button.default_prevented"), t && e._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."), n = !0
                                }
                            }), !n && e._paymentRequest && (e._paymentRequest._elementShow(), t = !0)
                        } else e._emitEvent("submit"), e._formSubmit()
                    }), ["ready", "focus", "blur", "escape"].forEach(function (t) {
                        e._frame._on(t, function () {
                            e._emitEvent(t)
                        })
                    }), this._frame._on("change", function (t) {
                        var n = {};
                        ["error", "value", "empty", "complete"].concat($(kr[e._componentName] || [])).forEach(function (e) {
                            return n[e] = t[e]
                        }), e._emitEvent("change", n), e._empty = n.empty, e._invalid = !!n.error, e._complete = n.complete, e._updateClasses()
                    }), this._frame._on("__privateIntegrationError", function (t) {
                        var n = t.message;
                        e._emitEvent("__privateIntegrationError", {
                            message: n
                        })
                    }), this._frame._on("dimensions", function (t) {
                        if (e._parent) {
                            var n = Ln(e._parent, null);
                            if (n) {
                                var r = parseFloat(n.getPropertyValue("height")),
                                    o = t.height;
                                if ("border-box" === n.getPropertyValue("box-sizing")) {
                                    var a = parseFloat(n.getPropertyValue("padding-top")),
                                        i = parseFloat(n.getPropertyValue("padding-bottom"));
                                    r = r - parseFloat(n.getPropertyValue("border-top")) - parseFloat(n.getPropertyValue("border-bottom")) - a - i
                                }
                                0 !== r && ti(r) < ti(o) && e._controller.report("wrapper_height_mismatch", {
                                    height: o,
                                    outer_height: r
                                });
                                var c = e._component.getBoundingClientRect().height;
                                0 !== c && 0 !== o && ti(c) !== ti(o) && (e._frame.updateStyle({
                                    height: o + "px"
                                }), e._controller.report("iframe_height_update", {
                                    height: o,
                                    calculated_height: c
                                }))
                            }
                        }
                    }), this._frame._on("autofill", function () {
                        if (e._parent) {
                            var t = e._parent.style.backgroundColor,
                                n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
                            e._lastBackgroundColor = n ? e._lastBackgroundColor : t, e._parent.style.backgroundColor = "#faffbd", e._autofilled = !0, e._updateClasses()
                        }
                    }), this._frame._on("autofill-cleared", function () {
                        e._autofilled = !1, e._parent && (e._parent.style.backgroundColor = e._lastBackgroundColor), e._updateClasses()
                    })
                }
            }, {
                key: "_handleOutsideClick",
                value: function () {
                    this._secondaryFrame && this._secondaryFrame.send({
                        action: "stripe-outside-click",
                        payload: {}
                    })
                }
            }, {
                key: "_createSecondFrame",
                value: function (e, t, n) {
                    var r = this._controller.createSecondaryElementFrame(e, Qa({}, n, {
                        componentName: t
                    }));
                    return r && r.on && r.on("height-change", function (e) {
                        r.updateStyle({
                            height: e.height + "px"
                        })
                    }), r
                }
            }, {
                key: "_createComponent",
                value: function (e, t) {
                    this._createElement(e, t), this._setupEvents(), this._updateFrameHeight(e, !0)
                }
            }, {
                key: "_updateFrameHeight",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("paymentRequestButton" === this._componentName) {
                        var n = e.style && e.style.paymentRequestButton || {},
                            r = n.height,
                            o = "string" == typeof r ? r : void 0;
                        (t || o) && (this._frame.updateStyle({
                            height: o || this._lastHeight || "40px"
                        }), this._lastHeight = o || this._lastHeight)
                    } else {
                        var a = e.style && e.style.base || {},
                            i = a.lineHeight,
                            c = a.fontSize,
                            s = a.padding,
                            u = "string" != typeof i || isNaN(parseFloat(i)) ? void 0 : i,
                            l = "string" == typeof c ? c : void 0,
                            p = "string" == typeof s ? s : void 0;
                        if (l && !ni(l) && this._controller.warn("The fontSize style you specified (" + l + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."), t || u || l) {
                            var d = -1 === Ht.indexOf(this._componentName) ? void 0 : p || this._lastPadding,
                                f = Ja(u || this._lastHeight, l || this._lastFontSize, d);
                            this._frame.updateStyle({
                                height: f
                            }), this._lastFontSize = l || this._lastFontSize, this._lastHeight = u || this._lastHeight, this._lastPadding = d
                        }
                    }
                }
            }, {
                key: "_createElement",
                value: function (e, t) {
                    var n = this,
                        r = (e.classes, e.controller, e.paymentRequest, X(e, ["classes", "controller", "paymentRequest"])),
                        o = document.createElement("div");
                    o.className = "__PrivateStripeElement";
                    var a = document.createElement("input");
                    a.className = "__PrivateStripeElement-input", a.setAttribute("aria-hidden", "true"), a.setAttribute("aria-label", " "), a.setAttribute("autocomplete", "false"), a.maxLength = 1, a.disabled = !0, Zt(o, Za), Zt(a, ei);
                    var i = Ln(document.body),
                        c = !!i && "rtl" === i.getPropertyValue("direction"),
                        s = wr[t],
                        u = Qa({}, r, {
                            rtl: c
                        }),
                        l = this._controller.createElementFrame(s, u);
                    if (l._on("load", function () {
                            a.disabled = !1
                        }), a.addEventListener("focus", function () {
                            l.focus()
                        }), l.appendTo(o), Ar[t]) {
                        var p = Ar[t].secondary;
                        this._secondaryFrame = this._createSecondFrame(s, p, Qa({}, u, {
                            primaryElementType: t
                        })), this._secondaryFrame.appendTo(o), window.addEventListener("click", function () {
                            return n._handleOutsideClick()
                        })
                    }
                    if (o.appendChild(a), hr && t !== Mt.paymentRequestButton) {
                        var d = document.createElement("input");
                        d.className = "__PrivateStripeElement-safariInput", d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("autocomplete", "false"), d.maxLength = 1, d.disabled = !0, Zt(d, ei), o.appendChild(d)
                    }
                    this._component = o, this._frame = l, this._fakeInput = a
                }
            }]), t
        }(fn),
        oi = function () {
            var e = this;
            this._paymentRequest = null, this.mount = sn(function (t) {
                e._checkDestroyed();
                var n = void 0;
                if (!t) throw new ke("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
                if ("string" == typeof t) {
                    var r = document.querySelectorAll(t);
                    if (r.length > 1 && e._controller.warn("The selector you specified (" + t + ") applies to " + r.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !r.length) throw new ke("The selector you specified (" + t + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
                    n = r[0]
                } else {
                    if (!t.appendChild) throw new ke("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
                    n = t
                }
                if ("INPUT" === n.nodeName) throw new ke("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
                if (n.children.length && e._controller.warn("This Element will be mounted to a DOM element that contains child nodes."), e._paymentRequest) {
                    if (!e._paymentRequest._canMakePaymentResolved) throw new ke("For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element.");
                    if (!e._paymentRequest._activeBackingLibraryName) throw new ke("The paymentRequestButton Element is not available in the current environment.");
                    e._mountToParent(n)
                } else e._mountToParent(n)
            }), this.update = sn(function (t) {
                e._checkDestroyed();
                var n = Et(Da, t || {}, "element.update()"),
                    r = n.value;
                if (n.warnings.forEach(function (t) {
                        return e._controller.warn(t)
                    }), r) {
                    var o = r.classes,
                        a = X(r, ["classes"]);
                    o && (e._removeClasses(), e._computeCustomClasses(o), e._updateClasses()), e._updateFrameHeight(r), Object.keys(a).length && (e._frame.update(a), e._secondaryFrame && e._secondaryFrame.update(a))
                }
                return e
            }), this.focus = sn(function (t) {
                return e._checkDestroyed(), t && t.preventDefault(), document.activeElement && document.activeElement.blur && document.activeElement.blur(), e._fakeInput.focus(), e
            }), this.blur = sn(function () {
                return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e
            }), this.clear = sn(function () {
                return e._checkDestroyed(), e._frame.clear(), e
            }), this.unmount = sn(function () {
                e._checkDestroyed();
                var t = e._component.parentElement,
                    n = e._label;
                return t && (t.removeChild(e._component), t.removeEventListener("click", e.focus), e._removeClasses()), e._parent = null, n && (n.removeEventListener("click", e.focus), e._label = null), e._secondaryFrame && (e._secondaryFrame.unmount(), window.removeEventListener("click", e._handleOutsideClick)), e._fakeInput.disabled = !0, e._frame.unmount(), e
            }), this.destroy = sn(function () {
                return e._checkDestroyed(), e.unmount(), e._destroyed = !0, e._emitEvent("destroy"), e
            }), this._formSubmit = function () {
                for (var t = e._component.parentElement; t && "FORM" !== t.nodeName;) t = t.parentElement;
                if (t) {
                    var n = document.createEvent("Event");
                    n.initEvent("submit", !0, !0), t.dispatchEvent(n)
                }
            }
        },
        ai = ri,
        ii = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        ci = {
            locale: Qe(ot),
            fonts: Qe(ft(dt)),
            betas: Qe(ft(tt.apply(void 0, oe(Br))))
        },
        si = vt(ci),
        ui = function e(t, n) {
            var r = this;
            re(this, e), li.call(this);
            var o = Et(si, n || {}, "elements()"),
                a = o.value;
            o.warnings.forEach(function (e) {
                return t.warn(e)
            }), qr(t.warn), t.report("elements", {
                options: n
            }), this._elements = [], this._id = Gt("elements"), this._controller = t, this._betas = a.betas || [], a.locale = Fa(a.locale, this._betas);
            var i = a.locale,
                c = a.fonts || [];
            this._controller.action.fetchLocale({
                locale: i || "auto"
            });
            var s = c.filter(function (e) {
                    return !e.cssSrc || "string" != typeof e.cssSrc
                }).map(function (e) {
                    return ii({}, e, {
                        __resolveFontRelativeTo: window.location.href
                    })
                }),
                u = c.map(function (e) {
                    return e.cssSrc
                }).reduce(function (e, t) {
                    return "string" == typeof t ? [].concat(oe(e), [t]) : e
                }, []).map(function (e) {
                    return St(e) ? e : Ot(window.location.href, e)
                });
            this._pendingFonts = u.length;
            var l = (a.betas, ne(a, ["betas"]));
            return this._commonOptions = ii({}, l, {
                fonts: s
            }), u.forEach(function (e) {
                if ("string" == typeof e) {
                    var t = Date.now();
                    co(e).then(function (n) {
                        r._controller.report("font.loaded", {
                            load_time: Date.now() - t,
                            font_count: n.length,
                            css_src: e
                        });
                        var o = n.map(function (t) {
                            return ii({}, t, {
                                __resolveFontRelativeTo: e
                            })
                        });
                        r._controller.action.updateCSSFonts({
                            fonts: o,
                            groupId: r._id
                        }), r._commonOptions = ii({}, r._commonOptions, {
                            fonts: [].concat(oe(r._commonOptions.fonts ? r._commonOptions.fonts : []), oe(o))
                        })
                    }).catch(function (n) {
                        r._controller.report("error.font.not_loaded", {
                            load_time: Date.now() - t,
                            message: n && n.message && n.message,
                            css_src: e
                        }), r._controller.warn("Failed to load CSS file at " + e + ".")
                    })
                }
            }), this
        },
        li = function () {
            var e = this;
            this.getElement = sn(function (t) {
                var n = za(t) || t;
                return Ga(n, e._betas), Ce(e._elements, function (e) {
                    return e._componentName === n
                }) || null
            }), this.create = un(function (t, n) {
                Wa(t, e._elements.map(function (e) {
                    return e._componentName
                }), e._betas);
                var r = Et(Da, n || {}, "create()"),
                    o = r.value;
                r.warnings.forEach(function (t) {
                    return e._controller.warn(t)
                });
                var a = ii({}, o, e._commonOptions, {
                        componentName: t,
                        groupId: e._id
                    }),
                    i = (dr || fr) && Vt(a).length > 2e3,
                    c = !!e._pendingFonts || i,
                    s = new ai(ii({}, a, {
                        fonts: i ? null : e._commonOptions.fonts,
                        controller: e._controller,
                        wait: c
                    }));
                return e._elements = [].concat(oe(e._elements), [s]), s._on("destroy", function () {
                    e._elements = e._elements.filter(function (e) {
                        return e._componentName !== t
                    })
                }), i && s._frame.send({
                    action: "stripe-user-update",
                    payload: {
                        fonts: e._commonOptions.fonts
                    }
                }), s
            })
        },
        pi = ui,
        di = function (e, t, n, r, o, a) {
            return new La({
                controller: e,
                authentication: t,
                mids: n,
                rawOptions: r,
                betas: o,
                queryStrategyOverride: a
            })
        },
        fi = di,
        hi = {
            _componentName: ot,
            _frame: vt({
                id: ot
            })
        },
        _i = vt(hi),
        mi = function (e) {
            var t = gt(_i, e, "");
            return "error" === t.type ? null : t.value
        },
        yi = {
            alipay: "alipay",
            au_becs_debit: "au_becs_debit",
            bacs_debit: "bacs_debit",
            bancontact: "bancontact",
            card: "card",
            eps: "eps",
            fpx: "fpx",
            giropay: "giropay",
            grabpay: "grabpay",
            ideal: "ideal",
            oxxo: "oxxo",
            p24: "p24",
            sepa_debit: "sepa_debit",
            sofort: "sofort",
            three_d_secure: "three_d_secure"
        },
        vi = (Pe = {}, ae(Pe, Mt.auBankAccount, yi.au_becs_debit), ae(Pe, Mt.card, yi.card), ae(Pe, Mt.cardNumber, yi.card), ae(Pe, Mt.cardExpiry, yi.card), ae(Pe, Mt.cardCvc, yi.card), ae(Pe, Mt.postalCode, yi.card), ae(Pe, Mt.iban, yi.sepa_debit), ae(Pe, Mt.idealBank, yi.ideal), ae(Pe, Mt.fpxBank, yi.fpx), Pe),
        bi = function (e) {
            return -1 === qt.indexOf(e)
        },
        gi = function (e, t) {
            return null != t ? t : bi(e) ? null : vi[e] || null
        },
        Ei = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        wi = function (e, t) {
            switch (e.type) {
                case "object":
                    return {
                        paymentIntent: e.object
                    };
                case "error":
                    return {
                        error: Ei({}, t ? {
                            payment_intent: t
                        } : {}, e.error)
                    };
                default:
                    return Ae(e)
            }
        },
        Si = function (e) {
            switch (e.type) {
                case "error":
                    return {
                        error: e.error
                    };
                case "object":
                    return {
                        setupIntent: e.object
                    };
                default:
                    return Ae(e)
            }
        },
        Pi = function (e) {
            var t = e.trim().match(/^([a-z]+_[^_]+)_secret_[^-]+$/);
            return t ? {
                id: t[1],
                clientSecret: t[0]
            } : null
        },
        Oi = function (e) {
            return {
                id: e.id,
                clientSecret: e.client_secret
            }
        },
        ki = function (e) {
            return "requires_source_action" === e || "requires_action" === e
        },
        Ai = function (e) {
            return "requires_source_action" === e.status || "requires_action" === e.status ? e.next_action : null
        },
        Ti = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Ii = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Ri = function (e, t) {
            if ("string" != typeof e) return Je("a client_secret string", e, t);
            var n = Pi(e);
            return null === n ? Je("a client secret of the form ${id}_secret_${secret}", e, t) : Ye(n, [])
        },
        Ni = function (e, t) {
            if (null === e) return Ve("object", "null", t);
            if ("object" !== (void 0 === e ? "undefined" : Ii(e))) return Ve("object", void 0 === e ? "undefined" : Ii(e), t);
            var n = e.client_secret,
                r = e.status,
                o = e.next_action,
                a = Ri(n, bt(t, "client_secret"));
            if ("error" === a.type) return a;
            if ("string" != typeof r) return Ve("string", void 0 === r ? "undefined" : Ii(r), bt(t, "status"));
            if (("requires_source_action" === r || "requires_action" === r) && "object" !== (void 0 === o ? "undefined" : Ii(o))) return Ve("object", void 0 === o ? "undefined" : Ii(o), bt(t, "next_action"));
            if ("payment_intent" === e.object) {
                return Ye(e, [])
            }
            return Ye(e, [])
        },
        Ci = function (e) {
            return function (t, n) {
                if ("object" !== (void 0 === t ? "undefined" : Ii(t))) return Ve("object", void 0 === t ? "undefined" : Ii(t), n);
                if (null === t) return Ve("object", "null", n);
                var r = t.type,
                    o = ce(t, ["type"]),
                    a = void 0;
                if (null === e) {
                    if ("string" != typeof r) return Ve("string", void 0 === r ? "undefined" : Ii(r), bt(n, "type"));
                    a = r
                } else {
                    if (void 0 !== r && r !== e) return "string" != typeof r ? Ve("string", void 0 === r ? "undefined" : Ii(r), bt(n, "type")) : Ve('"' + r + '"', '"' + e + '"', bt(n, "type"));
                    a = e
                }
                var i = ["alipay", "bancontact", "eps", "giropay", "grabpay", "oxxo", "p24"],
                    c = o[a],
                    s = (o[a], ce(o, [a]));
                if (-1 !== i.indexOf(a) && void 0 === c && (c = {}), "object" !== (void 0 === c ? "undefined" : Ii(c))) return Ve("object or element", Ii(t[a]), bt(n, a));
                if (null === c) return Ve("object or element", "null", bt(n, a));
                var u = mi(c);
                if (u) {
                    var l = u._componentName;
                    if (vi[l] !== a) {
                        var p = [].concat(ie(n.path), [a]).join("."),
                            d = n.label,
                            f = new ke("Invalid value for " + d + ": " + p + " was `" + l + "` Element, which cannot be used to create " + a + " PaymentMethods.");
                        return Ke(f)
                    }
                    return Ye({
                        type: a,
                        element: u,
                        data: s
                    })
                }
                return Ye({
                    type: a,
                    element: null,
                    data: o
                })
            }
        },
        Mi = function (e) {
            return function (t, n) {
                if (null == t) return Ye(null);
                if ("object" !== (void 0 === t ? "undefined" : Ii(t))) return Ve("object", void 0 === t ? "undefined" : Ii(t), n);
                var r = t.card,
                    o = ce(t, ["card"]);
                if (!r || "object" !== (void 0 === r ? "undefined" : Ii(r))) return Ye(t);
                var a = r.cvc,
                    i = ce(r, ["cvc"]);
                if (null == a) return Ye(t);
                var c = mi(a),
                    s = c ? c._componentName : "";
                return Mt.cardCvc !== s ? Ve("`" + Mt.cardCvc + "` Element", s ? "`" + s + "` Element" : void 0 === a ? "undefined" : Ii(a), bt(n, e + ".cvc")) : Ye(Ti({}, o, {
                    card: Ti({}, i, {
                        cvc: c
                    })
                }))
            }
        },
        ji = at(vt({
            handleActions: at(it, function () {
                return !0
            })
        }), function () {
            return {
                handleActions: !0
            }
        }),
        Li = function (e, t) {
            return function (n, r) {
                if (void 0 === n) return Ye({
                    paymentMethodData: null,
                    paymentMethodOptions: null,
                    source: null,
                    paymentMethod: null,
                    otherParams: {}
                });
                if ("object" !== (void 0 === n ? "undefined" : Ii(n))) return Ve("object", void 0 === n ? "undefined" : Ii(n), r);
                if (null === n) return Ve("object", "null", r);
                var o = n.source,
                    a = n.source_data,
                    i = n.payment_method_data,
                    c = n.payment_method_options,
                    s = n.payment_method,
                    u = ce(n, ["source", "source_data", "payment_method_data", "payment_method_options", "payment_method"]);
                if (null != a) throw new ke(t + ": Expected payment_method, or source, not source_data.");
                if (null != i) throw new ke(t + ": Expected payment_method, or source, not payment_method_data.");
                if (null != o && null != s) throw new ke(t + ": Expected either payment_method or source, but not both.");
                if (null != o) return "string" != typeof o ? Ve("string", void 0 === o ? "undefined" : Ii(o), bt(r, "source")) : Ye({
                    source: o,
                    paymentMethodData: null,
                    paymentMethodOptions: null,
                    paymentMethod: null,
                    otherParams: u
                });
                if (null != s && "string" != typeof s && "object" !== (void 0 === s ? "undefined" : Ii(s))) return Ve("string or object", void 0 === s ? "undefined" : Ii(s), bt(r, "payment_method"));
                var l = gt(Mi(e), c, t, {
                    path: [].concat(ie(r.path), ["payment_method_options"])
                });
                if ("error" === l.type) return l;
                if ("string" == typeof s) return Ye({
                    source: null,
                    paymentMethodData: null,
                    paymentMethodOptions: l.value,
                    paymentMethod: s,
                    otherParams: u
                });
                if ("object" === (void 0 === s ? "undefined" : Ii(s)) && null !== s) {
                    var p = gt(Ci(e), s, t, {
                        path: [].concat(ie(r.path), ["payment_method"])
                    });
                    if ("error" === p.type) return p;
                    var d = p.value;
                    return Ye({
                        source: null,
                        paymentMethod: null,
                        paymentMethodOptions: l.value,
                        paymentMethodData: d,
                        otherParams: u
                    })
                }
                return Ye({
                    source: null,
                    paymentMethodData: null,
                    paymentMethodOptions: null,
                    paymentMethod: null,
                    otherParams: u
                })
            }
        },
        xi = (Object.assign, vt({
            name: et("react-stripe-js", "stripe-js", "react-stripe-elements"),
            version: function (e) {
                return function (t, n) {
                    return null === t ? Ye(t) : e(t, n)
                }
            }(ot)
        })),
        qi = function (e) {
            var t = e.name,
                n = e.value,
                r = e.expiresIn,
                o = e.path,
                a = e.domain,
                i = new Date,
                c = r || 31536e6;
            i.setTime(i.getTime() + c);
            var s = o || "/",
                u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
                l = encodeURIComponent(t) + "=" + u + ";expires=" + i.toGMTString() + ";path=" + s + ";SameSite=Lax";
            return a && (l += ";domain=" + a), document.cookie = l, l
        },
        Di = function (e) {
            var t = Ce(document.cookie.split("; "), function (t) {
                var n = t.indexOf("=");
                return decodeURIComponent(t.substr(0, n)) === e
            });
            if (t) {
                var n = t.indexOf("=");
                return decodeURIComponent(t.substr(n + 1))
            }
            return null
        },
        Bi = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Fi = "__privateStripeMetricsController",
        Ui = {
            MERCHANT: "merchant",
            SESSION: "session"
        },
        Hi = function () {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (se(this, e), n.checkoutIds) {
                    var r = n.checkoutIds,
                        o = r.muid,
                        a = r.sid;
                    this._muid = o, this._sid = a, this._doNotPersist = !0
                } else this._muid = this._getID(Ui.MERCHANT), this._sid = this._getID(Ui.SESSION), this._doNotPersist = !1;
                this._id = Gt(Fi), this._controllerFrame = new On(At.METRICS_CONTROLLER, this._id, {
                    autoload: !0,
                    queryString: this._buildFrameQueryString()
                }), this._guidPromise = new Ne(function (e) {
                    t._establishMessageChannel(e)
                }), this._startIntervalCheck(), setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random())
            }
            return Bi(e, [{
                key: "ids",
                value: function () {
                    return {
                        guid: this._guid || "NA",
                        muid: this._muid || "NA",
                        sid: this._sid || "NA"
                    }
                }
            }, {
                key: "idsPromise",
                value: function () {
                    var e = this;
                    return this._guidPromise.then(function () {
                        return e.ids()
                    })
                }
            }, {
                key: "_establishMessageChannel",
                value: function (e) {
                    var t = this;
                    window.addEventListener("message", function (n) {
                        var r = n.data;
                        if ("string" == typeof r) try {
                            var o = JSON.parse(r),
                                a = o.originatingScript,
                                i = o.payload;
                            "m" === a && (t._guid = i, e(i))
                        } catch (e) {}
                    })
                }
            }, {
                key: "_startIntervalCheck",
                value: function () {
                    var e = this,
                        t = window.location.href;
                    setInterval(function () {
                        var n = window.location.href;
                        n !== t && (e.send({
                            action: "ping",
                            payload: {
                                sid: e._getID(Ui.SESSION),
                                muid: e._getID(Ui.MERCHANT),
                                title: document.title,
                                referrer: document.referrer,
                                url: document.location.href
                            }
                        }), t = n)
                    }, 5e3)
                }
            }, {
                key: "report",
                value: function (e, t) {
                    try {
                        this.send({
                            action: "track",
                            payload: {
                                sid: this._getID(Ui.SESSION),
                                muid: this._getID(Ui.MERCHANT),
                                url: document.location.href,
                                source: e,
                                data: t
                            }
                        })
                    } catch (e) {}
                }
            }, {
                key: "send",
                value: function (e) {
                    var t = Nt(At.METRICS_CONTROLLER);
                    tr(t) && this._controllerFrame.send(e)
                }
            }, {
                key: "_testLatency",
                value: function () {
                    var e = this,
                        t = [],
                        n = new Date,
                        r = function r() {
                            try {
                                var o = new Date;
                                t.push(o - n), t.length >= 10 && (e.report("mouse-timings-10", t), document.removeEventListener("mousemove", r)), n = o
                            } catch (e) {}
                        };
                    document.addEventListener("mousemove", r)
                }
            }, {
                key: "_extractMetaReferrerPolicy",
                value: function () {
                    var e = document.querySelector("meta[name=referrer]");
                    return null != e && e instanceof HTMLMetaElement ? e.content.toLowerCase() : null
                }
            }, {
                key: "_extractUrl",
                value: function (e) {
                    var t = document.location.href;
                    switch (e) {
                        case "origin":
                        case "strict-origin":
                        case "origin-when-cross-origin":
                        case "strict-origin-when-cross-origin":
                            return document.location.origin;
                        case "unsafe-url":
                            return t.split("#")[0];
                        default:
                            return t
                    }
                }
            }, {
                key: "_buildFrameQueryString",
                value: function () {
                    var e = this._extractMetaReferrerPolicy(),
                        t = this._extractUrl(e),
                        n = {
                            url: t,
                            title: document.title,
                            referrer: document.referrer,
                            muid: this._muid,
                            sid: this._sid,
                            preview: nr(t)
                        };
                    return null != e && (n.metaReferrerPolicy = e), Object.keys(n).map(function (e) {
                        return null != n[e] ? e + "=" + encodeURIComponent(n[e].toString()) : null
                    }).join("&")
                }
            }, {
                key: "_getID",
                value: function (e) {
                    switch (e) {
                        case Ui.MERCHANT:
                            if (this._doNotPersist) return this._muid;
                            try {
                                var t = Di("__stripe_mid") || Wt();
                                return qi({
                                    name: "__stripe_mid",
                                    value: t,
                                    domain: "." + document.location.hostname
                                }), t
                            } catch (e) {
                                return "NA"
                            }
                            case Ui.SESSION:
                                if (this._doNotPersist) return this._sid;
                                try {
                                    var n = Di("__stripe_sid") || Wt();
                                    return qi({
                                        name: "__stripe_sid",
                                        value: n,
                                        domain: "." + document.location.hostname,
                                        expiresIn: 18e5
                                    }), n
                                } catch (e) {
                                    return "NA"
                                }
                                default:
                                    throw new Error("Invalid ID type specified: " + e)
                    }
                }
            }]), e
        }(),
        zi = Hi,
        Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Wi = function (e) {
            if (!e || "object" !== (void 0 === e ? "undefined" : Gi(e))) return null;
            var t = e.type,
                n = ue(e, ["type"]);
            return {
                type: "string" == typeof t ? t : null,
                data: n
            }
        },
        Yi = function (e) {
            switch (e.type) {
                case "object":
                    return {
                        source: e.object
                    };
                case "error":
                    return {
                        error: e.error
                    };
                default:
                    return Ae(e)
            }
        },
        Ki = {
            source: vt({
                id: Ze("src_"),
                client_secret: Ze("src_client_secret_")
            })
        },
        Vi = vt(Ki),
        Ji = function (e) {
            switch (e.type) {
                case "object":
                    return {
                        paymentMethod: e.object
                    };
                case "error":
                    return {
                        error: e.error
                    };
                default:
                    return Ae(e)
            }
        },
        Qi = function (e) {
            return Et(Ci(null), e, "createPaymentMethod").value
        },
        Xi = function (e, t, n, r, o) {
            var a = mi(r),
                i = Wi(a ? o : r),
                c = i || {
                    type: null,
                    data: {}
                },
                s = c.type,
                u = c.data;
            if (s && n !== s) return Ne.reject(new ke("The type supplied in payment_method_data is not consistent."));
            if (a) {
                var l = a._frame.id,
                    p = a._componentName;
                return e.action.createPaymentMethodWithElement({
                    frameId: l,
                    elementName: p,
                    type: n,
                    paymentMethodData: u,
                    mids: t
                }).then(Ji)
            }
            return i ? e.action.createPaymentMethodWithData({
                elementName: null,
                type: n,
                paymentMethodData: u,
                mids: t
            }).then(Ji) : Ne.reject(new ke("Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."))
        },
        $i = function (e, t, n, r, o) {
            if ("string" == typeof n) return Xi(e, t, n, r, o);
            try {
                var a = Qi(n),
                    i = a.element,
                    c = a.type,
                    s = a.data;
                if (i) {
                    var u = i._frame.id,
                        l = i._componentName;
                    return e.action.createPaymentMethodWithElement({
                        frameId: u,
                        elementName: l,
                        type: c,
                        paymentMethodData: s,
                        mids: t
                    }).then(Ji)
                }
                return e.action.createPaymentMethodWithData({
                    elementName: null,
                    type: c,
                    paymentMethodData: s,
                    mids: t
                }).then(Ji)
            } catch (e) {
                return Ne.reject(e)
            }
        },
        Zi = function (e) {
            return "https://stripe.com/docs/stripe-js/reference#stripe-" + e.split(/(?=[A-Z])/).join("-").toLowerCase()
        },
        ec = function (e, t) {
            return Et(Ri, e, "stripe." + t + " intent secret").value
        },
        tc = function (e, t) {
            return Et(ji, t, e).value
        },
        nc = function (e, t, n) {
            if ("valid" === gt(_i, n, t).type) throw new ke("Do not pass an Element to stripe." + t + "() directly.\nFor more information: " + Zi(t));
            var r = Et(Li(e, t), n, t),
                o = r.value,
                a = o.source,
                i = o.paymentMethodData,
                c = o.paymentMethodOptions,
                s = o.paymentMethod,
                u = o.otherParams;
            if (null != a && (null != i || null != s)) throw new ke(t + ": Expected either source or payment_method, but not both.");
            return i ? i.element ? {
                confirmMode: {
                    tag: "paymentMethod-from-element",
                    type: e,
                    elementName: i.element._componentName,
                    frameId: i.element._frame.id,
                    data: i.data,
                    options: c
                },
                otherParams: u
            } : {
                confirmMode: {
                    tag: "paymentMethod-from-data",
                    type: e,
                    data: i.data,
                    options: c
                },
                otherParams: u
            } : s ? {
                confirmMode: {
                    tag: "paymentMethod",
                    paymentMethod: s,
                    options: c
                },
                otherParams: u
            } : a ? {
                confirmMode: {
                    tag: "source",
                    source: a
                },
                otherParams: u
            } : {
                confirmMode: {
                    tag: "none"
                },
                otherParams: u
            }
        },
        rc = function (e, t) {
            var n = {
                skipFingerprint: !1,
                sandboxFingerprintFrame: !1,
                sandboxChallengeFrame: !1
            };
            return -1 !== e.indexOf("Y") && (t.report("3ds2.optimization.Y"), n.skipFingerprint = !0), -1 !== e.indexOf("k") && (t.report("3ds2.optimization.k"), n.sandboxFingerprintFrame = !0), -1 !== e.indexOf("5") && (t.report("3ds2.optimization.5"), n.sandboxChallengeFrame = !0), n
        },
        oc = function (e) {
            return {
                american_express: "amex",
                visa: "visa",
                mastercard: "mastercard",
                discover: "discover"
            } [e] || "unknown"
        },
        ac = function (e, t, n) {
            if (!e) return null;
            if ("use_stripe_sdk" === e.type) {
                var r = e.use_stripe_sdk;
                switch (r.type) {
                    case "stripe_3ds2_fingerprint":
                        return {
                            type: "3ds2-fingerprint", threeDS2Source: r.three_d_secure_2_source, cardBrand: oc(r.directory_server_name), transactionId: r.server_transaction_id, optimizations: rc(r.three_ds_optimizations, n), methodUrl: r.three_ds_method_url, useGeneratedCreq: r.use_generated_creq
                        };
                    case "stripe_3ds2_challenge":
                        return {
                            type: "3ds2-challenge", threeDS2Source: r.stripe_js.three_d_secure_2_source, cardBrand: oc(r.stripe_js.directory_server_name), transactionId: r.stripe_js.server_transaction_id, optimizations: rc(r.stripe_js.three_ds_optimizations, n), acsTransactionId: r.stripe_js.acs_transaction_id, acsUrl: r.stripe_js.acs_url, creq: r.stripe_js.use_generated_creq ? r.stripe_js.creq : null
                        };
                    case "three_d_secure_redirect":
                        return {
                            type: "3ds1-modal", url: r.stripe_js, source: r.source
                        }
                }
            }
            if ("redirect_to_url" === e.type) return {
                type: "redirect",
                redirectUrl: e.redirect_to_url.url
            };
            if ("display_oxxo_details" === e.type) return {
                type: "oxxo-display"
            };
            if ("authorize_with_url" === e.type) {
                var o = e.authorize_with_url.url;
                switch (t) {
                    case yi.card:
                        return {
                            type: "3ds1-modal", url: o, source: null
                        };
                    case yi.ideal:
                        return {
                            type: "redirect", redirectUrl: o
                        }
                }
            }
            return null
        },
        ic = function (e) {
            switch (e.type) {
                case "error":
                    return {
                        error: e.error
                    };
                case "object":
                    switch (e.object.object) {
                        case "payment_intent":
                            return {
                                paymentIntent: e.object
                            };
                        case "setup_intent":
                            return {
                                setupIntent: e.object
                            };
                        default:
                            return Ae(e.object)
                    }
                    default:
                        return Ae(e)
            }
        },
        cc = function (e, t, n, r) {
            return t === Lt.PAYMENT_INTENT ? n.action.retrievePaymentIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0
            }).then(ic) : n.action.retrieveSetupIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0
            }).then(ic)
        },
        sc = function (e, t, n, r, o) {
            return t === Lt.PAYMENT_INTENT ? n.action.cancelPaymentIntentSource({
                intentSecret: e,
                locale: o,
                sourceId: r
            }).then(ic) : n.action.cancelSetupIntentSource({
                intentSecret: e,
                locale: o,
                sourceId: r
            }).then(ic)
        },
        uc = function (e) {
            return (e.error ? e.error.payment_intent || e.error.setup_intent : e.paymentIntent || e.setupIntent) || null
        },
        lc = function (e, t, n, r, o) {
            var a = !0,
                i = 3,
                c = void 0;
            return function s() {
                    cc(e, t, n, r).then(function (e) {
                        if (a) {
                            var t = uc(e);
                            if (null !== t) switch (i = 3, t.status) {
                                case "requires_action":
                                case "requires_source_action":
                                    return void(c = setTimeout(s, 5e3));
                                case "processing":
                                    return void(c = setTimeout(s, 1e3));
                                default:
                                    o(e)
                            } else if (i > 0) {
                                var n = 500 * Math.pow(2, 3 - i);
                                c = setTimeout(s, n), i -= 1
                            } else o(e)
                        }
                    })
                }(),
                function () {
                    clearTimeout(c), a = !1
                }
        },
        pc = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        dc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        fc = function (e, t, n, r, o) {
            return e.createLightboxFrame(At.AUTHORIZE_WITH_URL, dc({
                url: t,
                locale: o,
                intentId: n
            }, r ? {
                source: r
            } : {}))
        },
        hc = function (e, t, n, r, o) {
            var a = xr(),
                i = Date.now(),
                c = fc(r, e.url, t.id, e.source, o);
            return c.show(), r.report("authorize_with_url.loading", {
                viewport: a,
                intentId: t.id
            }), c._on("load", function () {
                r.report("authorize_with_url.loaded", {
                    loadDuration: Date.now() - i,
                    intentId: t.id
                }), c.fadeInBackdrop()
            }), c._on("challenge_complete", function () {
                c.fadeOutBackdrop()
            }), new Ne(function (a, s) {
                var u = e.source;
                u && c._once("cancel", function () {
                    Ne.all([sc(t, n, r, u, o), c.destroy()]).then(function (e) {
                        var t = pc(e, 1),
                            n = t[0];
                        return a(n)
                    })
                }), c._once("authorize_with_url_done", function () {
                    var e = c.destroy();
                    lc(t, n, r, o, function (n) {
                        e.then(function () {
                            r.report("authorize_with_url.done", {
                                shownDuration: Date.now() - i,
                                success: !("error" in n),
                                intentId: t.id
                            }), a(n)
                        })
                    })
                })
            })
        },
        _c = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        mc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        yc = function (e) {
            return new Ne(function (t) {
                e._on("load", function () {
                    return t(e)
                })
            })
        },
        vc = function (e, t, n, r) {
            var o = e.createHiddenFrame(At.STRIPE_3DS2_FINGERPRINT, {
                intentId: t,
                locale: r,
                hosted: n
            });
            e.report("3ds2.fingerprint_frame.loading", {
                hosted: n,
                intentId: t
            });
            var a = yc(o);
            return a.then(function () {
                e.report("3ds2.fingerprint_frame.loaded", {
                    hosted: n,
                    intentId: t
                })
            }), a
        },
        bc = function (e, t, n, r, o) {
            var a = t.createLightboxFrame(At.STRIPE_3DS2_CHALLENGE, {
                intentId: e,
                hosted: r,
                locale: o
            });
            t.report("3ds2.challenge_frame.loading", {
                intentId: e,
                hosted: r
            }), a._on("challenge_complete", function () {
                a.fadeOutBackdrop()
            });
            var i = yc(a);
            return i.then(function () {
                return t.report("3ds2.challenge_frame.loaded", {
                    intentId: e,
                    hosted: r
                })
            }), r && (a.show(), a.action.show3DS2Spinner({
                cardBrand: n
            })), i
        },
        gc = function (e, t, n, r, o) {
            return t.optimizations.skipFingerprint ? Ne.resolve({
                fingerprintAttempted: !1,
                fingerprintData: null
            }) : "" === t.methodUrl ? (n.report("3ds2.fingerprint.no_method_url", {
                hosted: r,
                intentId: e.id
            }), Ne.resolve({
                fingerprintAttempted: !1,
                fingerprintData: null
            })) : vc(n, e.id, r, o).then(function (e) {
                return e.action.perform3DS2Fingerprint({
                    transactionId: t.transactionId,
                    methodUrl: t.methodUrl,
                    shouldSandbox: t.optimizations.sandboxFingerprintFrame
                }).then(function (t) {
                    return e.destroy(), t
                })
            })
        },
        Ec = function (e, t, n, r, o, a) {
            var i = Date.now(),
                c = bc(e.id, r, n.cardBrand, a, o),
                s = function (i) {
                    return new Ne(function (s) {
                        var u = lc(e, t, r, o, function (e) {
                            var t = uc(e);
                            (t && "requires_payment_method" === t.status || t && "requires_source" === t.status) && s(e)
                        });
                        c.then(function (c) {
                            c._once("cancel", function () {
                                c.fadeOutBackdrop(), u(), sc(e, t, r, n.threeDS2Source, o).then(s)
                            }), a || (c.show(), c.fadeInBackdrop());
                            var l = (i.type, i.optimizations),
                                p = le(i, ["type", "optimizations"]);
                            c.action.perform3DS2Challenge(mc({}, p, {
                                shouldSandbox: l.sandboxChallengeFrame
                            })).then(function () {
                                u(), s()
                            })
                        })
                    })
                },
                u = function (t) {
                    return r.report("3ds2.authenticate", {
                        hosted: a,
                        intentId: e.id
                    }), r.action.authenticate3DS2({
                        threeDS2Source: n.threeDS2Source,
                        outerWindowWidth: window.innerWidth,
                        hosted: a,
                        fingerprintResult: t
                    }).then(function (t) {
                        return "error" === t.type ? r.report("3ds2.authenticate.error", {
                            error: t.error,
                            hosted: a,
                            intentId: e.id
                        }) : r.report("3ds2.authenticate.success", {
                            hosted: a,
                            intentId: e.id
                        }), t
                    })
                },
                l = function (n) {
                    return Ne.all([n ? Ne.resolve(n) : cc(e, t, r, o), c.then(function (e) {
                        return e.destroy()
                    })]).then(function (t) {
                        var n = _c(t, 1),
                            o = n[0];
                        return r.report("3ds2.done", mc({
                            intentId: e.id,
                            hosted: a,
                            totalDuration: Date.now() - i
                        }, o.error ? {
                            error: o.error,
                            success: !1
                        } : {
                            success: !0
                        })), o
                    })
                };
            switch (n.type) {
                case "3ds2-challenge":
                    return s(n).then(l);
                case "3ds2-fingerprint":
                    return gc(e, n, r, a, o).then(u).then(function (t) {
                        if ("error" === t.type) return l();
                        var o = t.object,
                            i = o.ares,
                            c = o.creq;
                        return "C" !== i.transStatus ? (r.report("3ds2.frictionless", {
                            hosted: a,
                            intentId: e.id
                        }), l()) : s({
                            type: "3ds2-challenge",
                            threeDS2Source: n.threeDS2Source,
                            cardBrand: n.cardBrand,
                            transactionId: n.transactionId,
                            acsUrl: i.acsURL,
                            acsTransactionId: i.acsTransID,
                            optimizations: n.optimizations,
                            creq: n.useGeneratedCreq ? c : null
                        }).then(l)
                    });
                default:
                    return Ae(n)
            }
        },
        wc = function (e) {
            return new Ne(function (t, n) {
                var r = setTimeout(function () {
                    t({
                        type: "error",
                        error: {
                            code: "redirect_error",
                            message: "Failed to redirect to " + e
                        },
                        locale: "en"
                    })
                }, 3e3);
                window.addEventListener("pagehide", function () {
                    clearTimeout(r)
                }), window.top.location.href = e
            })
        },
        Sc = function (e, t, n) {
            e.report("redirect_error", {
                initiator: t,
                error: n.error
            })
        },
        Pc = function (e, t, n, r) {
            return wc(n).then(function (n) {
                return Sc(r, t + " redirect", n), wi(n, e)
            })
        },
        Oc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        kc = function (e) {
            switch (e.type) {
                case "error":
                    var t = e.error;
                    if ("payment_intent_unexpected_state" === t.code && "object" === Oc(t.payment_intent) && null != t.payment_intent && "string" == typeof t.payment_intent.status && ki(t.payment_intent.status)) {
                        var n = t.payment_intent;
                        return {
                            type: "object",
                            locale: e.locale,
                            object: n
                        }
                    }
                    return e;
                case "object":
                    return e;
                default:
                    return Ae(e)
            }
        },
        Ac = function (e, t, n, r, o) {
            var a = ac(Ai(t), n, e),
                i = Oi(t);
            if (!a) return Ne.resolve({
                paymentIntent: t
            });
            switch (a.type) {
                case "3ds1-modal":
                    return hc(a, i, Lt.PAYMENT_INTENT, e, r);
                case "3ds2-fingerprint":
                case "3ds2-challenge":
                    return Ec(i, Lt.PAYMENT_INTENT, a, e, r, o);
                case "redirect":
                    return Pc(t, n, a.redirectUrl, e);
                case "oxxo-display":
                    throw new ke("Expected option `handleActions` to be `false`. The OXXO private beta does not handle the next actions for you automatically (e.g. display OXXO details). Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo");
                default:
                    return Ne.resolve({
                        paymentIntent: t
                    })
            }
        },
        Tc = function (e, t, n, r, o) {
            return Ac(e, t, n, r, o).then(function (e) {
                if (e.setupIntent) throw new Error("Got unexpected SetupIntent response");
                return e
            })
        },
        Ic = function (e, t, n, r) {
            return function (o) {
                var a = kc(o);
                switch (a.type) {
                    case "error":
                        var i = a.error,
                            c = i.payment_intent;
                        return n && c && "payment_intent_unexpected_state" === i.code && ("succeeded" === c.status || "requires_capture" === c.status) ? Ne.resolve({
                            paymentIntent: c
                        }) : Ne.resolve(wi(o));
                    case "object":
                        var s = a.object;
                        return Tc(e, s, t, a.locale, r);
                    default:
                        return Ae(a)
                }
            }
        },
        Rc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Nc = function (e, t) {
            return function (n, r, o, a, i) {
                var c = ec(o, e),
                    s = nc(t, e, a),
                    u = tc(e, i),
                    l = "none" === s.confirmMode.tag,
                    p = n.action.confirmPaymentIntent(Rc({}, s, {
                        intentSecret: c,
                        expectedType: t,
                        options: u,
                        mids: r
                    }));
                return u.handleActions ? p.then(Ic(n, t, l, !1)) : p.then(wi)
            }
        },
        Cc = Nc("confirmAuBecsDebitPayment", yi.au_becs_debit),
        Mc = Nc("confirmBancontactPayment", yi.bancontact),
        jc = Nc("confirmCardPayment", yi.card),
        Lc = Nc("confirmBacsDebitPayment", yi.bacs_debit),
        xc = Nc("confirmFpxPayment", yi.fpx),
        qc = Nc("confirmEpsPayment", yi.eps),
        Dc = Nc("confirmGiropayPayment", yi.giropay),
        Bc = Nc("confirmGrabPayPayment", yi.grabpay),
        Fc = Nc("confirmIdealPayment", yi.ideal),
        Uc = Nc("confirmOxxoPayment", yi.oxxo),
        Hc = Nc("confirmAlipayPayment", yi.alipay),
        zc = Nc("confirmP24Payment", yi.p24),
        Gc = Nc("confirmSepaDebitPayment", yi.sepa_debit),
        Wc = Nc("confirmSofortPayment", yi.sofort),
        Yc = function (e, t) {
            var n = ec(e, "retrievePaymentIntent");
            return t.action.retrievePaymentIntent({
                intentSecret: n,
                hosted: !1
            }).then(wi)
        },
        Kc = function (e, t) {
            var n = ec(e, "handleHosted3DS2Setup [internal]");
            return t.action.retrievePaymentIntent({
                intentSecret: n,
                hosted: !0
            }).then(Ic(t, yi.card, !1, !0))
        },
        Vc = function (e, t) {
            var n = ec(e, "handleCardAction");
            return t.action.retrievePaymentIntent({
                intentSecret: n,
                hosted: !1
            }).then(function (e) {
                var n = kc(e);
                switch (n.type) {
                    case "error":
                        return Ne.resolve(wi(e));
                    case "object":
                        var r = n.object;
                        if (ki(r.status)) {
                            if ("manual" !== r.confirmation_method) throw new ke("handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment.");
                            return Tc(t, r, yi.card, n.locale, !1)
                        }
                        throw new ke("handleCardAction: The PaymentIntent supplied is not in the requires_action state.");
                    default:
                        return Ae(n)
                }
            })
        },
        Jc = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Qc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Xc = function (e, t) {
            if (null == e) return Ye(null);
            var n = e.type,
                r = pe(e, ["type"]),
                o = at(ot, function () {
                    return null
                })(n, bt(t, "type"));
            return "error" === o.type ? o : Ye({
                type: o.value,
                data: r
            })
        },
        $c = function (e, t, n, r) {
            if (null === e) {
                if (null === t) {
                    throw new ke(n + ": you must additionally specify the type of payment method to create within " + (r ? "source_data" : "payment_method_data") + ".")
                }
                return t
            }
            if (null === t) return e;
            if (t !== e) throw new ke(n + ": you specified `type: " + t + "`, but " + n + " will create a " + e + " payment method.");
            return e
        },
        Zc = function (e) {
            return function (t, n) {
                if ("object" === (void 0 === t ? "undefined" : Qc(t)) && null !== t) {
                    var r = t.source,
                        o = t.source_data,
                        a = t.payment_method,
                        i = t.payment_method_data,
                        c = pe(t, ["source", "source_data", "payment_method", "payment_method_data"]);
                    if (null != r && "string" != typeof r) return Ve("string", void 0 === r ? "undefined" : Qc(r), bt(n, "source"));
                    if (null != a && "string" != typeof a) return Ve("string", void 0 === a ? "undefined" : Qc(a), bt(n, "payment_method"));
                    if (null != o && "object" !== (void 0 === o ? "undefined" : Qc(o))) return Ve("object", void 0 === o ? "undefined" : Qc(o), bt(n, "source_data"));
                    if (null != i && "object" !== (void 0 === i ? "undefined" : Qc(i))) return Ve("object", void 0 === i ? "undefined" : Qc(i), bt(n, "payment_method_data"));
                    var s = Xc(o, bt(n, "source_data"));
                    if ("error" === s.type) return s;
                    var u = s.value,
                        l = Xc(i, bt(n, "payment_method_data"));
                    if ("error" === l.type) return l;
                    var p = l.value;
                    return Ye({
                        sourceData: u,
                        source: null == r ? null : r,
                        paymentMethodData: p,
                        paymentMethod: null == a ? null : a,
                        otherParams: Jc({}, e, c)
                    })
                }
                return null === t ? Ve("object", "null", n) : Ve("object", void 0 === t ? "undefined" : Qc(t), n)
            }
        },
        es = function (e) {
            return function (t, n) {
                if (void 0 === t) return Ye({
                    sourceData: null,
                    paymentMethodData: null,
                    source: null,
                    paymentMethod: null,
                    otherParams: {}
                });
                if ("object" !== (void 0 === t ? "undefined" : Qc(t))) return Ve("object", void 0 === t ? "undefined" : Qc(t), n);
                if (null === t) return Ve("object", "null", n);
                if (e) {
                    if (!t.payment_intent) return Ye({
                        sourceData: null,
                        paymentMethodData: null,
                        source: null,
                        paymentMethod: null,
                        otherParams: t
                    });
                    var r = t.payment_intent,
                        o = pe(t, ["payment_intent"]);
                    return Zc(o)(r, bt(n, "payment_intent"))
                }
                return t.payment_intent ? Ke(new ke("The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.")) : Zc({})(t, n)
            }
        },
        ts = function (e, t, n, r, o, a) {
            var i = gt(_i, o, r);
            if ("error" === i.type) return null;
            var c = i.value,
                s = Et(es(t), a, r),
                u = s.value,
                l = u.sourceData,
                p = u.source,
                d = u.paymentMethodData,
                f = u.paymentMethod,
                h = u.otherParams;
            if (!e && l) throw new ke(r + ": Expected payment_method_data, not source_data.");
            if (null != p) throw new ke("When calling " + r + " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element.");
            if (null != f) throw new ke("When calling " + r + " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element.");
            var _ = c._componentName,
                m = c._frame.id,
                y = l || d || {
                    type: null,
                    data: {}
                },
                v = y.type,
                b = y.data,
                g = gi(_, v),
                E = e && !d,
                w = $c(n, g, r, E),
                S = {
                    elementName: _,
                    frameId: m,
                    type: w,
                    data: b
                };
            return E ? {
                confirmMode: Jc({
                    tag: "source-from-element"
                }, S),
                otherParams: h
            } : {
                confirmMode: Jc({
                    tag: "paymentMethod-from-element",
                    options: null
                }, S),
                otherParams: h
            }
        },
        ns = function (e, t, n, r, o, a) {
            var i = Et(es(t), o, r),
                c = i.value,
                s = c.sourceData,
                u = c.source,
                l = c.paymentMethodData,
                p = c.paymentMethod,
                d = c.otherParams;
            if (!e && s) throw new ke(r + ": Expected payment_method, source, or payment_method_data, not source_data.");
            if (null !== u && null !== s) throw new ke(r + ": Expected either source or source_data, but not both.");
            if (null !== p && null !== l) throw new ke(r + ": Expected either payment_method or payment_method_data, but not both.");
            if (null !== p && null !== u) throw new ke(r + ": Expected either payment_method or source, but not both.");
            if (s || l) {
                var f = s || l || {},
                    h = f.type,
                    _ = f.data,
                    m = e && !l,
                    y = $c(n, h, r, m);
                return m ? {
                    confirmMode: {
                        tag: "source-from-data",
                        type: y,
                        data: _
                    },
                    otherParams: d
                } : {
                    confirmMode: {
                        tag: "paymentMethod-from-data",
                        type: y,
                        data: _,
                        options: null
                    },
                    otherParams: d
                }
            }
            return null !== u ? {
                confirmMode: {
                    tag: "source",
                    source: u
                },
                otherParams: d
            } : null !== p ? {
                confirmMode: {
                    tag: "paymentMethod",
                    paymentMethod: p,
                    options: null
                },
                otherParams: d
            } : {
                confirmMode: {
                    tag: "none"
                },
                otherParams: d
            }
        },
        rs = function (e, t, n, r) {
            return function (o, a) {
                var i = ts(e, t, n, r, o, a);
                if (i) return i;
                var c = ns(e, t, n, r, o);
                if (c) return c;
                throw new ke("Expected: stripe." + r + "(intentSecret, element[, data]) or stripe." + r + "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication")
            }
        },
        os = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        as = function (e, t, n, r, o, a) {
            var i = Et(Ri, r, "stripe.confirmPaymentIntent intent secret"),
                c = i.value,
                s = rs(e, !1, null, "confirmPaymentIntent")(o, a);
            return t.action.confirmPaymentIntent(os({}, s, {
                intentSecret: c,
                expectedType: null,
                options: {
                    handleActions: !1
                },
                mids: n
            })).then(wi)
        },
        is = function (e, t, n, r, o, a, i) {
            var c = Et(Ri, o, "stripe.handleCardPayment intent secret"),
                s = c.value,
                u = yi.card,
                l = rs(e, r, u, "handleCardPayment")(a, i),
                p = !a && !i;
            return t.action.confirmPaymentIntent(os({}, l, {
                intentSecret: s,
                expectedType: u,
                options: {
                    handleActions: !0
                },
                mids: n
            })).then(Ic(t, u, p, !1))
        },
        cs = function (e, t, n, r, o, a) {
            var i = Et(Ri, r, "stripe.handleSepaDebitPayment intent secret"),
                c = i.value,
                s = yi.sepa_debit,
                u = rs(!1, n, s, "handleSepaDebitPayment")(o, a),
                l = !o && !a;
            return e.action.confirmPaymentIntent(os({}, u, {
                intentSecret: c,
                expectedType: s,
                options: {
                    handleActions: !0
                },
                mids: t
            })).then(Ic(e, s, l, !1))
        },
        ss = function (e, t, n, r, o, a, i) {
            var c = Et(Ri, o, "stripe.handleIdealPayment intent secret"),
                s = c.value,
                u = yi.ideal,
                l = rs(e, r, u, "handleIdealPayment")(a, i),
                p = !a && !i;
            return t.action.confirmPaymentIntent(os({}, l, {
                intentSecret: s,
                expectedType: u,
                options: {
                    handleActions: !0
                },
                mids: n
            })).then(Ic(t, u, p, !1))
        },
        us = function (e, t, n, r, o, a) {
            var i = Et(Ri, r, "stripe.handleFpxPayment intent secret"),
                c = i.value,
                s = yi.fpx,
                u = rs(!1, n, s, "handleFpxPayment")(o, a),
                l = !o && !a;
            return e.action.confirmPaymentIntent(os({}, u, {
                intentSecret: c,
                expectedType: s,
                options: {
                    handleActions: !0
                },
                mids: t
            })).then(Ic(e, s, l, !1))
        },
        ls = function (e, t, n, r, o) {
            var a = ac(Ai(t), n, e),
                i = Oi(t);
            if (!a) return Ne.resolve({
                setupIntent: t
            });
            switch (a.type) {
                case "3ds1-modal":
                    return hc(a, i, Lt.SETUP_INTENT, e, r);
                case "3ds2-fingerprint":
                case "3ds2-challenge":
                    return Ec(i, Lt.SETUP_INTENT, a, e, r, o);
                default:
                    return Ne.resolve({
                        setupIntent: t
                    })
            }
        },
        ps = function (e, t, n, r, o) {
            return ls(e, t, n, r, o).then(function (e) {
                if (e.paymentIntent) throw new Error("Got unexpected PaymentIntent response");
                return e
            })
        },
        ds = function (e, t, n, r) {
            return function (o) {
                switch (o.type) {
                    case "error":
                        var a = o.error,
                            i = a.setup_intent;
                        return n && i && "succeeded" === i.status ? Ne.resolve({
                            setupIntent: i
                        }) : Ne.resolve({
                            error: a
                        });
                    case "object":
                        var c = o.object;
                        return ps(e, c, t, o.locale, r);
                    default:
                        return Ae(o)
                }
            }
        },
        fs = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        hs = function (e, t) {
            return function (n, r, o, a, i) {
                var c = ec(o, e),
                    s = nc(t, e, a),
                    u = tc(e, i),
                    l = "none" === s.confirmMode.tag,
                    p = n.action.confirmSetupIntent(fs({}, s, {
                        intentSecret: c,
                        expectedType: t,
                        options: u,
                        mids: r
                    }));
                return u.handleActions ? p.then(ds(n, t, l, !1)) : p.then(Si)
            }
        },
        _s = hs("confirmCardSetup", yi.card),
        ms = hs("confirmSepaDebitSetup", yi.sepa_debit),
        ys = hs("confirmAuBecsDebitSetup", yi.au_becs_debit),
        vs = hs("confirmBacsDebitSetup", yi.bacs_debit),
        bs = function (e, t) {
            var n = ec(e, "retrieveSetupIntent");
            return t.action.retrieveSetupIntent({
                intentSecret: n,
                hosted: !1
            }).then(Si)
        },
        gs = function (e, t) {
            var n = ec(e, "handleHosted3DS2Setup [internal]");
            return t.action.retrieveSetupIntent({
                intentSecret: n,
                hosted: !0
            }).then(ds(t, yi.card, !1, !0))
        },
        Es = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        ws = function (e, t, n, r, o) {
            var a = Et(Ri, n, "stripe.handleCardSetup intent secret"),
                i = a.value,
                c = yi.card,
                s = rs(!1, !1, c, "handleCardSetup")(r, o),
                u = !r && !o;
            return e.action.confirmSetupIntent(Es({}, s, {
                intentSecret: i,
                expectedType: c,
                options: {
                    handleActions: !0
                },
                mids: t
            })).then(ds(e, c, u, !1))
        },
        Ss = function (e, t, n, r, o) {
            var a = Et(Ri, n, "stripe.handleSepaDebitSetup intent secret"),
                i = a.value,
                c = yi.sepa_debit,
                s = rs(!1, !1, c, "handleSepaDebitSetup")(r, o),
                u = !r && !o;
            return e.action.confirmSetupIntent(Es({}, s, {
                intentSecret: i,
                expectedType: c,
                options: {
                    handleActions: !0
                },
                mids: t
            })).then(ds(e, c, u, !1))
        },
        Ps = function (e, t, n, r, o) {
            var a = Et(Ri, n, "stripe.confirmSetupIntent intent secret"),
                i = a.value,
                c = rs(!1, !1, null, "confirmSetupIntent")(r, o);
            return e.action.confirmSetupIntent(Es({}, c, {
                otherParams: Es({}, c.otherParams),
                intentSecret: i,
                expectedType: null,
                options: {
                    handleActions: !1
                },
                mids: t
            })).then(Si)
        },
        Os = [Dr.checkout_beta_2, Dr.checkout_beta_3, Dr.checkout_beta_4],
        ks = [Dr.checkout_beta_2, Dr.checkout_beta_3, Dr.checkout_beta_4, Dr.checkout_beta_locales, Dr.checkout_beta_testcards],
        As = {
            da: "da",
            de: "de",
            en: "en",
            es: "es",
            fi: "fi",
            fr: "fr",
            it: "it",
            ja: "ja",
            ms: "ms",
            nl: "nl",
            nb: "nb",
            pl: "pl",
            pt: "pt",
            "pt-BR": "pt-BR",
            sv: "sv",
            zh: "zh"
        },
        Ts = {
            bg: "bg",
            cs: "cs",
            el: "el",
            et: "et",
            lt: "lt",
            lv: "lv",
            ro: "ro",
            ru: "ru",
            sk: "sk",
            sl: "sl",
            tr: "tr"
        },
        Is = Object.keys(As),
        Rs = Object.keys(Ts),
        Ns = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Cs = {
            sku: Qe(ot),
            plan: Qe(ot),
            clientReferenceId: Qe(ot),
            locale: Qe(et.apply(void 0, ["auto"].concat(fe(Is)))),
            customerEmail: Qe(ot),
            billingAddressCollection: Qe(et("required", "auto")),
            submitType: Qe(et("auto", "pay", "book", "donate")),
            allowIncompleteSubscriptions: Qe(it),
            shippingAddressCollection: Qe(yt({
                allowedCountries: ft(ot)
            }))
        },
        Ms = function (e, t, n) {
            if (e && t || (e || t) && n) throw new ke("stripe.redirectToCheckout: Expected only one of sku, plan, or items.");
            if ("string" == typeof e) return [{
                sku: e,
                quantity: 1
            }];
            if ("string" == typeof t) return [{
                plan: t,
                quantity: 1
            }];
            if (n) return n.map(function (e) {
                return "sku" === e.type ? {
                    sku: e.id,
                    quantity: e.quantity
                } : {
                    plan: e.id,
                    quantity: e.quantity
                }
            });
            throw new ke("stripe.redirectToCheckout: You must provide either sku, plan, or items.")
        },
        js = function (e) {
            var t = yt(Ns({}, Cs, {
                    items: Qe(Xe(ft(yt({
                        type: et("plan"),
                        quantity: st(0),
                        id: ot
                    })), ft(yt({
                        type: et("sku"),
                        quantity: st(0),
                        id: ot
                    })))),
                    successUrl: ot,
                    cancelUrl: ot
                })),
                n = Et(t, e, "stripe.redirectToCheckout"),
                r = n.value,
                o = r.sku,
                a = r.plan,
                i = r.items,
                c = de(r, ["sku", "plan", "items"]),
                s = Ms(o, a, i);
            return Ns({
                tag: "no-session",
                items: s
            }, c)
        },
        Ls = function (e, t, n) {
            var r = yt(Ns({}, Cs, {
                    sessionId: Qe(ot),
                    successUrl: Qe(ot),
                    cancelUrl: Qe(ot),
                    items: Qe(Xe(ft(yt({
                        quantity: st(0),
                        plan: ot
                    })), ft(yt({
                        quantity: st(0),
                        sku: ot
                    }))))
                }, -1 !== e.indexOf("checkout_beta_locales") ? {
                    locale: Qe(et.apply(void 0, ["auto"].concat(fe(Is), fe(Rs))))
                } : {})),
                o = Et(r, t, "stripe.redirectToCheckout"),
                a = o.value;
            if (a.sessionId) {
                var i = a.sessionId;
                if (Object.keys(a).length > 1) throw new ke("stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession.");
                if (!/^cs_/.test(i)) throw new ke("stripe.redirectToCheckout: Invalid value for sessionId. You specified '" + i + "'.");
                if ("livemode" === n && /^cs_test_/.test(i)) throw new ke("stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key.");
                if ("testmode" === n && /^cs_live_/.test(i)) throw new ke("stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key.");
                return {
                    tag: "session",
                    sessionId: i
                }
            }
            var c = (a.sessionId, a.sku, a.plan, a.items),
                s = a.successUrl,
                u = a.cancelUrl,
                l = de(a, ["sessionId", "sku", "plan", "items", "successUrl", "cancelUrl"]);
            if (!c) throw new ke("stripe.redirectToCheckout: You must provide one of items or sessionId.");
            if (!s || !u) throw new ke("stripe.redirectToCheckout: You must provide successUrl and cancelUrl.");
            return Ns({
                tag: "no-session",
                items: c,
                successUrl: s,
                cancelUrl: u
            }, l)
        },
        xs = function (e, t, n) {
            var r = Ls(e, t, n);
            if ("no-session" === r.tag) {
                var o = r.successUrl,
                    a = r.cancelUrl;
                if (!St(o)) throw new ke("stripe.redirectToCheckout: successUrl must start with either http:// or https://.");
                if (!St(a)) throw new ke("stripe.redirectToCheckout: cancelUrl must start with either http:// or https://.");
                return r
            }
            return r
        },
        qs = function (e, t) {
            return "session" === t.tag || null == e || t.locale || -1 === ["auto"].concat(fe(Is)).indexOf(e) ? t : Ns({}, t, {
                locale: e
            })
        },
        Ds = function (e, t, n) {
            switch (Ce(Os, function (t) {
                return Fr(e, t)
            })) {
                case "checkout_beta_2":
                    return js(t);
                case "checkout_beta_3":
                    return Ls(e, t, n);
                case "checkout_beta_4":
                default:
                    return xs(e, t, n)
            }
        },
        Bs = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unknown";
            return qs(t, Ds(e, n, r))
        },
        Fs = Bs,
        Us = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Hs = function (e, t) {
            var n = function (t) {
                return Sc(e, "redirectToCheckout", t), {
                    error: t.error
                }
            };
            return wc(t).then(n)
        },
        zs = function (e, t, n, r) {
            return function (o) {
                e.report("redirect_to_checkout.options", {
                    betas: t,
                    options: o,
                    globalLocale: r
                });
                var a = Fs(t, r, o, e.livemode());
                if ("session" === a.tag) {
                    var i = a,
                        c = i.sessionId;
                    return e.action.createPaymentPageWithSession({
                        betas: t,
                        mids: n(),
                        sessionId: c
                    }).then(function (t) {
                        if ("error" === t.type) return {
                            error: t.error
                        };
                        var n = t.object.url;
                        return Hs(e, n)
                    })
                }
                var s = a,
                    u = (s.tag, s.items),
                    l = s.successUrl,
                    p = s.cancelUrl,
                    d = s.clientReferenceId,
                    f = s.customerEmail,
                    h = s.billingAddressCollection,
                    _ = s.submitType,
                    m = s.allowIncompleteSubscriptions,
                    y = s.shippingAddressCollection,
                    v = he(s, ["tag", "items", "successUrl", "cancelUrl", "clientReferenceId", "customerEmail", "billingAddressCollection", "submitType", "allowIncompleteSubscriptions", "shippingAddressCollection"]),
                    b = u.map(function (e) {
                        if (e.sku) return {
                            type: "sku",
                            id: e.sku,
                            quantity: e.quantity
                        };
                        if (e.plan) return {
                            type: "plan",
                            id: e.plan,
                            quantity: e.quantity
                        };
                        throw new Error("Unexpected item shape.")
                    }),
                    g = Ce(Os, function (e) {
                        return Fr(t, e)
                    });
                return e.action.createPaymentPage(Us({
                    betas: t,
                    mids: n(),
                    items: b,
                    success_url: l,
                    cancel_url: p,
                    client_reference_id: d,
                    customer_email: f,
                    billing_address_collection: h,
                    submit_type: _,
                    use_payment_methods: !g,
                    allow_incomplete_subscriptions: m,
                    shipping_address_collection: y && {
                        allowed_countries: y.allowedCountries
                    }
                }, v)).then(function (t) {
                    if ("error" === t.type) return {
                        error: t.error
                    };
                    var n = t.object.url;
                    return Hs(e, n)
                })
            }
        },
        Gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Ws = function (e) {
            switch (e.type) {
                case "object":
                    return {
                        token: e.object
                    };
                case "error":
                    return {
                        error: e.error
                    };
                default:
                    return Ae(e)
            }
        },
        Ys = function (e) {
            return "object" === (void 0 === e ? "undefined" : Gs(e)) && null !== e ? e : {}
        },
        Ks = function (e, t, n) {
            var r = mi(t);
            if (r && "cardCvc" === r._componentName) {
                var o = r._frame.id;
                return e.action.tokenizeCvcUpdate({
                    frameId: o,
                    mids: n
                }).then(Ws)
            }
            throw new ke("You must provide a `cardCvc` Element to create a `cvc_update` token.")
        },
        Vs = function (e, t) {
            return function (n, r) {
                var o = mi(n);
                if (o) {
                    var a = o._frame.id,
                        i = o._componentName,
                        c = Ys(r);
                    return e.action.tokenizeWithElement({
                        frameId: a,
                        elementName: i,
                        tokenData: c,
                        mids: t
                    }).then(Ws)
                }
                if ("string" == typeof n) {
                    var s = n,
                        u = Ys(r);
                    return e.action.tokenizeWithData({
                        elementName: null,
                        type: s,
                        tokenData: u,
                        mids: t
                    }).then(Ws)
                }
                throw new ke("You must provide a Stripe Element or a valid token type to create a Token.")
            }
        },
        Js = function (e) {
            switch (e.type) {
                case "object":
                    return {
                        radarSession: e.object
                    };
                case "error":
                    return {
                        error: e.error
                    };
                default:
                    return Ae(e)
            }
        },
        Qs = function (e, t) {
            return e.action.createRadarSession({
                mids: t
            }).then(Js)
        },
        Xs = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        $s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Zs = function () {
            return window.performance && window.performance.now ? window.performance.now() : Date.now()
        }(),
        eu = vt({
            apiKey: ot,
            stripeAccount: Qe(ot),
            locale: Qe(ot),
            apiVersion: Qe(ot),
            __privateApiUrl: Qe(ot),
            __checkout: Qe(vt({
                mids: vt({
                    muid: ot,
                    sid: ot
                })
            })),
            __hosted3DS: Qe(it),
            canCreateRadarSession: Qe(it),
            betas: Qe(ft(tt.apply(void 0, me(Br))))
        }),
        tu = function (e) {
            return "You have an in-flight " + e + "! Please be sure to disable your form submit button when " + e + " is called."
        },
        nu = function (e) {
            return function () {
                throw new ke("You cannot call `stripe." + e + "` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart.")
            }
        },
        ru = function () {
            function e(t, n) {
                var r = this;
                _e(this, e), ou.call(this);
                var o = Et(eu, t || {}, "Stripe()"),
                    a = o.value,
                    i = o.warnings,
                    c = a.apiKey,
                    s = a.stripeAccount,
                    u = a.apiVersion,
                    l = a.locale,
                    p = a.__privateApiUrl,
                    d = a.__checkout,
                    f = a.__hosted3DS,
                    h = a.canCreateRadarSession,
                    _ = a.betas;
                if ("" === c) throw new ke("Please call Stripe() with your publishable key. You used an empty string.");
                if (0 === c.indexOf("sk_")) throw new ke("You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.");
                d && d.mids && (e._ec = new zi({
                    checkoutIds: d.mids
                })), this._apiKey = c, this._keyMode = Ue(c), this._betas = _ || [], this._locale = Fa(l, this._betas) || null, this._stripeAccount = s || null, this._isCheckout = !!d, this._controller = new Lr(Xs({
                    apiKey: c,
                    apiVersion: u,
                    __privateApiUrl: p,
                    stripeAccount: s,
                    betas: this._betas,
                    stripeJsId: e.stripeJsId,
                    startTime: Zs
                }, this._locale ? {
                    locale: this._locale
                } : {})), i.forEach(function (e) {
                    return r._controller.warn(e)
                }), this._ensureHTTPS(), this._ensureStripeHosted(n), this._attachPaymentIntentMethods(this._betas, !!f), this._attachLegacyPaymentIntentMethods(this._betas), this._attachCheckoutMethods(this._betas), this._attachPrivateMethodsForCheckout(this._isCheckout), this._attachCreateRadarSession(h || !1)
            }
            return $s(e, [{
                key: "_attachCreateRadarSession",
                value: function (e) {
                    var t = this;
                    e && (this.createRadarSession = cn(function () {
                        var e = t._mids();
                        return Qs(t._controller, e)
                    }))
                }
            }, {
                key: "_attachPaymentIntentMethods",
                value: function (e, t) {
                    var n = this,
                        r = function () {
                            return n._mids()
                        };
                    this.createPaymentMethod = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return $i.apply(void 0, [n._controller, r()].concat(t))
                    }), this._createPaymentMethod = this.createPaymentMethod, this.retrievePaymentIntent = sn(function (e) {
                        return Yc(e, n._controller)
                    }), this.retrieveSetupIntent = sn(function (e) {
                        return bs(e, n._controller)
                    });
                    var o = Nn(Vc, tu("handleCardAction"));
                    this.handleCardAction = sn(function (e) {
                        return o(e, n._controller)
                    });
                    var a = Nn(jc, tu("confirmCardPayment"));
                    this.confirmCardPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return a.apply(void 0, [n._controller, r()].concat(t))
                    });
                    var i = Nn(_s, tu("confirmCardSetup"));
                    this.confirmCardSetup = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return i.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmIdealPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Fc.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmSepaDebitPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Gc.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmSepaDebitSetup = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return ms.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmFpxPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return xc.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmAuBecsDebitPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Cc.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmAuBecsDebitSetup = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return ys.apply(void 0, [n._controller, r()].concat(t))
                    }), Fr(this._betas, Dr.bacs_debit_beta) && (this.confirmBacsDebitPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Lc.apply(void 0, [n._controller, r()].concat(t))
                    }), this.confirmBacsDebitSetup = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return vs.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmBancontactPayment = nu("confirmBancontactPayment"), Fr(this._betas, Dr.bancontact_pm_beta_1) && (this.confirmBancontactPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Mc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmGiropayPayment = nu("confirmGiropayPayment"), Fr(this._betas, Dr.giropay_pm_beta_1) && (this.confirmGiropayPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Dc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmGrabPayPayment = nu("confirmGrabPayPayment"), Fr(this._betas, Dr.grabpay_pm_beta_1) && (this.confirmGrabPayPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Bc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmOxxoPayment = nu("confirmOxxoPayment"), Fr(this._betas, Dr.oxxo_pm_beta_1) && (this.confirmOxxoPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Uc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmAlipayPayment = nu("confirmAlipayPayment"), Fr(this._betas, Dr.alipay_pm_beta_1) && (this.confirmAlipayPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Hc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmP24Payment = nu("confirmP24Payment"), Fr(this._betas, Dr.p24_pm_beta_1) && (this.confirmP24Payment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return zc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmEpsPayment = nu("confirmEpsPayment"), Fr(this._betas, Dr.eps_pm_beta_1) && (this.confirmEpsPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return qc.apply(void 0, [n._controller, r()].concat(t))
                    })), this.confirmSofortPayment = nu("confirmSofortPayment"), Fr(this._betas, Dr.sofort_pm_beta_1) && (this.confirmSofortPayment = ln(function () {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return Wc.apply(void 0, [n._controller, r()].concat(t))
                    })), t && (this.handleHosted3DS2Payment = sn(function (e) {
                        return Kc(e, n._controller)
                    }), this.handleHosted3DS2Setup = sn(function (e) {
                        return gs(e, n._controller)
                    }))
                }
            }, {
                key: "_attachLegacyPaymentIntentMethods",
                value: function (e) {
                    var t = this,
                        n = Fr(this._betas, Dr.payment_intent_beta_1) || Fr(this._betas, Dr.payment_intent_beta_2),
                        r = function () {
                            return t._mids()
                        },
                        o = ln(function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return as.apply(void 0, [!0, t._controller, r()].concat(n))
                        }),
                        a = ln(function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return as.apply(void 0, [!1, t._controller, r()].concat(n))
                        }),
                        i = Nn(is, tu("handleCardPayment")),
                        c = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return i.apply(void 0, [!0, t._controller, r(), n].concat(o))
                        }),
                        s = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return i.apply(void 0, [!1, t._controller, r(), n].concat(o))
                        }),
                        u = Nn(ws, tu("handleCardSetup")),
                        l = ln(function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return u.apply(void 0, [t._controller, r()].concat(n))
                        }),
                        p = ln(function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return Ps.apply(void 0, [t._controller, r()].concat(n))
                        }),
                        d = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return cs.apply(void 0, [t._controller, r(), n].concat(o))
                        }),
                        f = ln(function () {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return Ss.apply(void 0, [t._controller, r()].concat(n))
                        }),
                        h = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return ss.apply(void 0, [!0, t._controller, r(), n].concat(o))
                        }),
                        _ = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return ss.apply(void 0, [!1, t._controller, r(), n].concat(o))
                        }),
                        m = ln(function () {
                            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
                            return us.apply(void 0, [t._controller, r(), n].concat(o))
                        });
                    this.handleCardPayment = s, this.confirmPaymentIntent = a, this.handleCardSetup = l, this.confirmSetupIntent = p, this.fulfillPaymentIntent = nu("fulfillPaymentIntent"), this.handleSepaDebitPayment = nu("handleSepaDebitPayment"), this.handleSepaDebitSetup = nu("handleSepaDebitSetup"), this.handleIdealPayment = nu("handleIdealPayment"), this.handleFpxPayment = nu("handleFpxPayment"), Fr(this._betas, Dr.payment_intent_beta_1) ? this.fulfillPaymentIntent = c : (Fr(this._betas, Dr.payment_intent_beta_3) || Fr(this._betas, Dr.payment_intent_beta_2)) && (this.handleCardPayment = c), Fr(this._betas, Dr.payment_intent_beta_3) && (this.confirmPaymentIntent = o, this.handleIdealPayment = h, this.handleSepaDebitPayment = d), Fr(this._betas, Dr.fpx_bank_beta_1) && (this.handleFpxPayment = m), Fr(this._betas, Dr.ideal_pm_beta_1) && (this.handleIdealPayment = _), Fr(this._betas, Dr.sepa_pm_beta_1) && (this.handleSepaDebitPayment = d, this.handleSepaDebitSetup = f)
                }
            }, {
                key: "_attachPrivateMethodsForCheckout",
                value: function (e) {
                    var t = this;
                    e && (this.tryNextAction = un(function (e, n) {
                        var r = Et(Ni, e, "Payment Intent"),
                            o = r.value,
                            a = Object.keys(yi).map(function (e) {
                                return yi[e]
                            }),
                            i = Et(et.apply(void 0, me(a)), n, "Source type"),
                            c = i.value;
                        return "payment_intent" === o.object ? Tc(t._controller, o, c, "auto", !1) : ps(t._controller, o, c, "auto", !1)
                    }))
                }
            }, {
                key: "_attachCheckoutMethods",
                value: function (e) {
                    var t = this,
                        n = function () {
                            return t._mids()
                        },
                        r = e.reduce(function (e, t) {
                            var n = Ce(ks, function (e) {
                                return e === t
                            });
                            return n ? [].concat(me(e), [n]) : e
                        }, []);
                    this.redirectToCheckout = zs(this._controller, r, n, this._locale)
                }
            }, {
                key: "_ensureHTTPS",
                value: function () {
                    var e = window.location.protocol,
                        t = -1 !== ["https:", "file:", "ionic:"].indexOf(e),
                        n = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname),
                        r = this._keyMode === Fe.live,
                        o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/web/setup#http-requirements";
                    if (!t) {
                        if (r && !n) throw this._controller.report("user_error.non_https_error", {
                            protocol: e
                        }), new ke(o);
                        !r || n ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o)
                    }
                }
            }, {
                key: "_ensureStripeHosted",
                value: function (e) {
                    if (!e) throw this._controller.report("user_error.self_hosted"), new ke("Stripe.js must be loaded from [request doman]. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs")
                }
            }, {
                key: "_mids",
                value: function () {
                    return e._ec ? e._ec.ids() : null
                }
            }, {
                key: "_registerWrapper",
                value: function (e) {
                    var t = gt(xi, e, "WrapperLibrary");
                    if ("error" === t.type) return void this._controller.report("register_wrapper.error", {
                        error: t.error.message
                    });
                    var n = t.value,
                        r = n.name,
                        o = n.version;
                    this._controller.registerWrapper({
                        name: r,
                        version: o
                    })
                }
            }]), e
        }();
    ru.version = 3, ru.stripeJsId = Wt(), ru._ec = function () {
        return "https://checkout.stripe.com/".match(new RegExp(document.location.protocol + "//" + document.location.host)) ? null : new zi
    }();
    var ou = function () {
            var e = this;
            this.elements = sn(function (t) {
                return new pi(e._controller, Xs({}, e._locale ? {
                    locale: e._locale
                } : {}, t, {
                    betas: e._betas
                }))
            }), this.createToken = un(function (t, n) {
                var r = e._mids();
                if ("cvc_update" === t) {
                    if (Fr(e._betas, Dr.cvc_update_beta_1)) return Ks(e._controller, n, r);
                    throw new ke("You cannot create a 'cvc_update' token without using the 'cvc_update_beta_1' beta flag.")
                }
                return Vs(e._controller, r)(t, n)
            }), this.createSource = un(function (t, n) {
                var r = mi(t),
                    o = Wi(r ? n : t),
                    a = o || {
                        type: null,
                        data: {}
                    },
                    i = a.type,
                    c = a.data;
                if (r) {
                    var s = r._frame.id,
                        u = r._componentName;
                    return !o && bi(u) ? Ne.reject(new ke("Please provide Source creation parameters to createSource.")) : e._controller.action.createSourceWithElement({
                        frameId: s,
                        elementName: u,
                        type: i,
                        sourceData: c,
                        mids: e._mids()
                    }).then(Yi)
                }
                return o ? i ? e._controller.action.createSourceWithData({
                    elementName: null,
                    type: i,
                    sourceData: c,
                    mids: e._mids()
                }).then(Yi) : Ne.reject(new ke("Please provide a source type to createSource.")) : Ne.reject(new ke("Please provide either an Element or Source creation parameters to createSource."))
            }), this.retrieveSource = sn(function (t) {
                var n = Et(Vi, {
                        source: t
                    }, "retrieveSource"),
                    r = n.value;
                return n.warnings.forEach(function (t) {
                    return e._controller.warn(t)
                }), e._controller.action.retrieveSource(r).then(Yi)
            }), this.paymentRequest = un(function (t, n) {
                He(e._keyMode);
                var r = e._isCheckout && n ? n : null;
                return fi(e._controller, {
                    apiKey: e._apiKey,
                    accountId: e._stripeAccount
                }, e._mids(), t, e._betas, r)
            })
        },
        au = ru,
        iu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        cu = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        su = function () {
            if (document.currentScript) {
                var e = Pt(document.currentScript.src);
                return !e || nr(e.origin)
            }
            return !0
        }(),
        uu = function (e, t) {
            return new au(cu({
                apiKey: e
            }, t && "object" === (void 0 === t ? "undefined" : iu(t)) ? t : {}), su)
        };
    uu.version = au.version, window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = uu : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = uu;
    t.default = uu
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = new o(o._61);
        return t._81 = 1, t._65 = e, t
    }
    var o = n(3);
    e.exports = o;
    var a = r(!0),
        i = r(!1),
        c = r(null),
        s = r(void 0),
        u = r(0),
        l = r("");
    o.resolve = function (e) {
        if (e instanceof o) return e;
        if (null === e) return c;
        if (void 0 === e) return s;
        if (!0 === e) return a;
        if (!1 === e) return i;
        if (0 === e) return u;
        if ("" === e) return l;
        if ("object" == typeof e || "function" == typeof e) try {
            var t = e.then;
            if ("function" == typeof t) return new o(t.bind(e))
        } catch (e) {
            return new o(function (t, n) {
                n(e)
            })
        }
        return r(e)
    }, o.all = function (e) {
        var t = Array.prototype.slice.call(e);
        return new o(function (e, n) {
            function r(i, c) {
                if (c && ("object" == typeof c || "function" == typeof c)) {
                    if (c instanceof o && c.then === o.prototype.then) {
                        for (; 3 === c._81;) c = c._65;
                        return 1 === c._81 ? r(i, c._65) : (2 === c._81 && n(c._65), void c.then(function (e) {
                            r(i, e)
                        }, n))
                    }
                    var s = c.then;
                    if ("function" == typeof s) {
                        return void new o(s.bind(c)).then(function (e) {
                            r(i, e)
                        }, n)
                    }
                }
                t[i] = c, 0 == --a && e(t)
            }
            if (0 === t.length) return e([]);
            for (var a = t.length, i = 0; i < t.length; i++) r(i, t[i])
        })
    }, o.reject = function (e) {
        return new o(function (t, n) {
            n(e)
        })
    }, o.race = function (e) {
        return new o(function (t, n) {
            e.forEach(function (e) {
                o.resolve(e).then(t, n)
            })
        })
    }, o.prototype.catch = function (e) {
        return this.then(null, e)
    }
}, function (e, t, n) {
    "use strict";

    function r() {}

    function o(e) {
        try {
            return e.then
        } catch (e) {
            return y = e, v
        }
    }

    function a(e, t) {
        try {
            return e(t)
        } catch (e) {
            return y = e, v
        }
    }

    function i(e, t, n) {
        try {
            e(t, n)
        } catch (e) {
            return y = e, v
        }
    }

    function c(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== r && _(e, this)
    }

    function s(e, t, n) {
        return new e.constructor(function (o, a) {
            var i = new c(r);
            i.then(o, a), u(e, new h(t, n, i))
        })
    }

    function u(e, t) {
        for (; 3 === e._81;) e = e._65;
        if (c._10 && c._10(e), 0 === e._81) return 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t);
        l(e, t)
    }

    function l(e, t) {
        m(function () {
            var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
            if (null === n) return void(1 === e._81 ? p(t.promise, e._65) : d(t.promise, e._65));
            var r = a(n, e._65);
            r === v ? d(t.promise, y) : p(t.promise, r)
        })
    }

    function p(e, t) {
        if (t === e) return d(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = o(t);
            if (n === v) return d(e, y);
            if (n === e.then && t instanceof c) return e._81 = 3, e._65 = t, void f(e);
            if ("function" == typeof n) return void _(n.bind(t), e)
        }
        e._81 = 1, e._65 = t, f(e)
    }

    function d(e, t) {
        e._81 = 2, e._65 = t, c._97 && c._97(e, t), f(e)
    }

    function f(e) {
        if (1 === e._45 && (u(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
            e._54 = null
        }
    }

    function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function _(e, t) {
        var n = !1,
            r = i(e, function (e) {
                n || (n = !0, p(t, e))
            }, function (e) {
                n || (n = !0, d(t, e))
            });
        n || r !== v || (n = !0, d(t, y))
    }
    var m = n(4),
        y = null,
        v = {};
    e.exports = c, c._10 = null, c._97 = null, c._61 = r, c.prototype.then = function (e, t) {
        if (this.constructor !== c) return s(this, e, t);
        var n = new c(r);
        return u(this, new h(e, t, n)), n
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        function n(e) {
            i.length || (a(), c = !0), i[i.length] = e
        }

        function r() {
            for (; s < i.length;) {
                var e = s;
                if (s += 1, i[e].call(), s > u) {
                    for (var t = 0, n = i.length - s; t < n; t++) i[t] = i[t + s];
                    i.length -= s, s = 0
                }
            }
            i.length = 0, s = 0, c = !1
        }

        function o(e) {
            return function () {
                function t() {
                    clearTimeout(n), clearInterval(r), e()
                }
                var n = setTimeout(t, 0),
                    r = setInterval(t, 50)
            }
        }
        e.exports = n;
        var a, i = [],
            c = !1,
            s = 0,
            u = 1024,
            l = void 0 !== t ? t : self,
            p = l.MutationObserver || l.WebKitMutationObserver;
        a = "function" == typeof p ? function (e) {
            var t = 1,
                n = new p(e),
                r = document.createTextNode("");
            return n.observe(r, {
                    characterData: !0
                }),
                function () {
                    t = -t, r.data = t
                }
        }(r) : o(r), n.requestFlush = a, n.makeRequestCallFromTimer = o
    }).call(t, n(5))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r, o;
    ! function () {
        "use strict";
        var n = function () {
            function e() {}

            function t(e, t) {
                for (var n = t.length, r = 0; r < n; ++r) a(e, t[r])
            }

            function n(e, t) {
                e[t] = !0
            }

            function r(e, t) {
                for (var n in t) c.call(t, n) && (e[n] = !!t[n])
            }

            function o(e, t) {
                for (var n = t.split(s), r = n.length, o = 0; o < r; ++o) e[n[o]] = !0
            }

            function a(e, a) {
                if (a) {
                    var i = typeof a;
                    "string" === i ? o(e, a) : Array.isArray(a) ? t(e, a) : "object" === i ? r(e, a) : "number" === i && n(e, a)
                }
            }

            function i() {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                var a = new e;
                t(a, r);
                var i = [];
                for (var c in a) a[c] && i.push(c);
                return i.join(" ")
            }
            e.prototype = Object.create(null);
            var c = {}.hasOwnProperty,
                s = /\s+/;
            return i
        }();
        void 0 !== e && e.exports ? e.exports = n : (r = [], void 0 !== (o = function () {
            return n
        }.apply(t, r)) && (e.exports = o))
    }()
}, function (e, t) {}]);