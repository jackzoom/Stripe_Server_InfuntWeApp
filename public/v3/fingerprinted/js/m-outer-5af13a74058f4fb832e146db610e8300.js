! function (e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    var t = {};
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = 13)
}({
    13: function (e, n, t) {
        e.exports = t("aq4y")
    },
    aq4y: function () {
        var e = "http://localhost:3000",
            n = window.location.hash,
            t = /preview=true/.test(n) ? "inner-preview.html" : "inner.html",
            r = document.createElement("iframe");
        r.src = e + "/" + t + n;
        var o = function (n) {
            if (n.origin === e) {
                var t = window.opener || window.parent || window;
                if (!t) return;
                t.postMessage(n.data, "*")
            } else r.contentWindow.postMessage(n.data, "*")
        };
        window.addEventListener ? window.addEventListener("message", o, !1) : window.attachEvent("onMessage", o), document.body && document.body.appendChild(r)
    }
});