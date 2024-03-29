/**
 * This file is part of Qunee for HTML5. Copyright (c) 2015 by qunee.com
 */
window.Q = function(t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[Ah]()) {
            var s = t._f3 || t[Nh]();
            if (s) {
                s = s._j2 || s;
                for (var h = 0,
                         r = s[qh]; r > h; h++) if (i[Bh](n, s[h]) === !1 || e(s[h], i, n) === !1) return ! 1;
                return ! 0
            }
        }
    }
    function s(t) {
        if (!t[Ah]()) return t instanceof lz ? t: null;
        for (var i, n = t._f3._j2,
                 e = n[qh] - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }
    function h(t, i, n, e) {
        return e ? r(t, i, n) : f(t, i, n)
    }
    function r(t, i, n) {
        t = t._j2 || t;
        for (var e, s = 0,
                 h = t[qh]; h > s; s++) if (e = t[s], e[Ah]() && !r(e[Dh], i, n) || i[Bh](n, e) === !1) return ! 1;
        return ! 0
    }
    function f(t, i, n) {
        t = t._j2 || t;
        for (var e, s = 0,
                 h = t[qh]; h > s; s++) if (e = t[s], i[Bh](n, e) === !1 || e[Ah]() && !f(e[Dh], i, n)) return ! 1;
        return ! 0
    }
    function a(t, i, n, e) {
        return e ? _(t, i, n) : c(t, i, n)
    }
    function _(t, i, n) {
        t = t._j2 || t;
        for (var e, s = t[qh], h = s - 1; h >= 0; h--) if (e = t[h], e[Ah]() && !_(e[Dh], i, n) || i[Bh](n, e) === !1) return ! 1;
        return ! 0
    }
    function c(t, i, n) {
        t = t._j2 || t;
        for (var e, s = t[qh], h = s - 1; h >= 0; h--) if (e = t[h], i[Bh](n, e) === !1 || e[Ah]() && !c(e[Dh], i, n)) return ! 1;
        return ! 0
    }
    function u(t, i, n) {
        for (var e, s = (t._j2 || t)[Rh](0); s[qh];) {
            e = s[0],
                s = s[zh](1);
            var h = i[Bh](n, e);
            if (h === !1) return ! 1;
            if (e[Ah]()) {
                var r = e[Dh];
                r = r._j2 || r,
                    s = s[Lh](r)
            }
        }
        return ! 0
    }
    function o(t, i, n) {
        for (var e, s = (t._j2 || t)[Rh](0); s[qh];) {
            e = s[s[qh] - 1],
                s = s[zh](0, s[qh] - 1);
            var h = i[Bh](n, e);
            if (h === !1) return ! 1;
            if (e[Ah]()) {
                var r = e[Dh];
                r = r._j2 || r,
                    s = s[Lh](r)
            }
        }
        return ! 0
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t[qh], s = n[qh], h = e + s, r = new Array(h), f = 0, a = 0, _ = 0; h > _;) r[_++] = f === e ? n[a++] : a === s || i(t[f], n[a]) <= 0 ? t[f++] : n[a++];
            return r
        }
        function e(t) {
            var i = t[qh],
                s = Math[Gh](i / 2);
            return 1 >= i ? t: n(e(t[Rh](0, s)), e(t[Rh](s)))
        }
        return e(t)
    }
    function l(t, i, n, e) {
        t instanceof pB && (t = t._j2);
        for (var s = 0,
                 h = (t._j2 || t)[qh]; h > s; s++) {
            var r = i[Bh](n, t[s], s, e);
            if (r === !1) return ! 1
        }
        return ! 0
    }
    function b(t, i, n) {
        for (var e = t instanceof pB,
                 s = t._j2 || t,
                 h = 0,
                 r = s[qh]; r > h; h++) {
            var f = s[h];
            i[Bh](n, f) && (e ? t[Yh](f) : t[zh](h, 1), h--, r--)
        }
    }
    function v(t, i, n, e) {
        t instanceof pB && (t = t._j2);
        for (var s = (t._j2 || t)[qh] - 1; s >= 0; s--) {
            var h = i[Bh](n, t[s], s, e);
            if (h === !1) return ! 1
        }
        return ! 0
    }
    function y(t) {
        if (t[Hh] instanceof Function) return t[Hh](!0);
        var i, n = [];
        return l(t,
            function(t) {
                i = t && t[Hh] instanceof Function ? t[Hh]() : t,
                    n[Xh](i)
            },
            this),
            n
    }
    function g(t, i, e) {
        e === n || 0 > e ? t[Xh](i) : t[zh](e, 0, i)
    }
    function x(t, i) {
        var n = t[Wh](i);
        return 0 > n || n >= t[qh] ? !1 : t[zh](n, 1)
    }
    function w(t, i) {
        var n = !1;
        return l(t,
            function(t) {
                return i == t ? (n = !0, !1) : void 0
            }),
            n
    }
    function m(t, i, n) {
        return i instanceof Object ? t = L(i, t) : i && !n && (n = parseInt(i)),
        i && !n && (n = parseInt(i)),
            n ? setTimeout(t, n) : setTimeout(t)
    }
    function j(i, n) {
        return n && (i = L(n, i)),
            t[Vh](i)
    }
    function p(t, i) {
        return t[Uh] = i,
            t
    }
    function k(t, i) {
        if (!t.hasOwnProperty(Qh)) {
            var n = t[Jh](Zh);
            if (!n) return p(t, i);
            for (var e = n[Kh](tr), s = 0, h = e[qh]; h > s; s++) if (e[s] == i) return;
            return n += tr + i,
                p(t, n)
        }
        t[Qh][ir](i)
    }
    function M(t, i) {
        if (!t.hasOwnProperty(Qh)) {
            var n = t[Jh](Zh);
            if (!n || !n[Wh](i)) return;
            for (var e = "",
                     s = n[Kh](tr), h = 0, r = s[qh]; r > h; h++) s[h] != i && (e += s[h] + tr);
            return p(t, e)
        }
        t[Qh][Yh](i)
    }
    function E(t) {
        return t instanceof Number || nr == typeof t
    }
    function S(t) {
        return t !== n && (t instanceof String || er == typeof t)
    }
    function P(t) {
        return t !== n && (t instanceof Boolean || sr == typeof t)
    }
    function I(t) {
        return Array[hr](t)
    }
    function T(i) {
        i || (i = t[rr]),
            i[fr] ? i[fr]() : i[ar] = !1
    }
    function C(i) {
        i || (i = t[rr]),
            i[_r] ? i[_r]() : i[cr] || (i[cr] = !0)
    }
    function O(t) {
        T(t),
            C(t)
    }
    function $(t) {
        return Math[ur](Math[or]() * t)
    }
    function F() {
        return Math[or]() >= .5
    }
    function A(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e),
                h = i.__lookupSetter__(e);
            s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }
    function N(t, i, n) {
        if (! (t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        dr == typeof i && (e = i, i = t, t = function() {
            i[lr](this, arguments)
        });
        var s = t[br],
            h = function() {};
        return h[br] = i[br],
            t[br] = new h,
            t[vr] = i[br],
            t[vr].constructor = i,
            A(t[br], s),
        e && A(t[br], e),
        n && A(t[br], n),
            t[br][Zh] = t,
            t
    }
    function q(t, i, n) {
        return B(t, i, "constructor", n)
    }
    function B(t, i, n, e) {
        var s = i[vr];
        if (s) {
            var h = s[n];
            return h ? h[lr](t, e) : void 0
        }
    }
    function D(t) {
        return t[yr](4)
    }
    function R(t) {
        delete t[gr],
            delete t[xr]
    }
    function z(t, i) {
        t[i] && (R(t[i]), delete t[i])
    }
    function L(t, i) {
        var n = function() {
            return n[xr][lr](n[gr], arguments)
        };
        return n[xr] = i,
            n[gr] = t,
            n
    }
    function G(t, i) {
        return t == i
    }
    function Y(t, i, e, s, h) {
        if (s) return void Object[wr](t, i, {
            value: e,
            enumerable: !0
        });
        var r = {
                configurable: !0,
                enumerable: !0
            },
            f = mr + i;
        e !== n && (t[f] = e),
            r[jr] = function() {
                return this[f]
            },
            r[pr] = function(t) {
                var n = this[f];
                if (G(n, t)) return ! 1;
                var e = new LB(this, i, t, n);
                return this[kr](e) ? (this[f] = t, h && h[Bh](this, t, n), this[Mr](e), !0) : !1
            },
            Object[wr](t, i, r)
    }
    function H(t, i) {
        for (var n = 0,
                 e = i[qh]; e > n; n++) {
            var s = i[n];
            Y(t, s[Er] || s, s[Sr] || s[Pr], s[Ir], s[Tr])
        }
    }
    function X(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math[or]());
            return Cr + (i >> 16 & 255) + Or + (i >> 8 & 255) + Or + (255 & i) + Or + t[yr](2) + $r
        }
        return U(Math[ur](16777215 * Math[or]()))
    }
    function W(t) {
        return t > 0 ? Math[ur](t) : Math[Gh](t)
    }
    function V(t) {
        return t > 0 ? Math[Gh](t) : Math[ur](t)
    }
    function U(t) {
        return 16777216 > t ? Fr + (Ar + t.toString(16))[Rh]( - 6) : Cr + (t >> 16 & 255) + Or + (t >> 8 & 255) + Or + (255 & t) + Or + ((t >> 24 & 255) / 255)[yr](2) + $r
    }
    function Q(t, i, n) {
        dr != typeof n || n.hasOwnProperty(Nr) || (n[Nr] = !0),
            Object[wr](t, i, n)
    }
    function J(t, i) {
        for (var n in i) if (qr != n[0]) {
            var e = i[n];
            dr != typeof e || e.hasOwnProperty(Nr) || (e[Nr] = !0)
        }
        Object[Br](t, i)
    }
    function Z(i, n) {
        n || (n = t);
        for (var e = i[Kh](Dr), s = 0, h = e[qh]; h > s; s++) {
            var r = e[s];
            n = n[r]
        }
        return n
    }
    function K(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Rr] !== n
    }
    function ti(t) {
        console[zr](t)
    }
    function ii(t) {
        console[Lr](t)
    }
    function ni(t) {
        console[Gr](t)
    }
    function ei(t, i, n) {
        var e, s, h;
        0 == t._nd ? (e = -1, h = 0, s = i) : 0 == t._nf ? (e = 0, h = 1, s = n) : (e = -1 / t._nd, s = (t._nd - e) * i + t._nb, h = 1);
        var r = new PB;
        return r._nd = e,
            r._nb = s,
            r._nf = h,
            r._n7 = i,
            r._n2 = n,
            r._l0 = Math[Yr](e, h),
            r._nfos = Math[Hr](r._l0),
            r._sin = Math[Xr](r._l0),
            r
    }
    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1),
            n > s ? r = -1 : s > n && (r = 1);
        var f, a;
        if (!h) return a = 0 > r ? t.y: t[Wr],
        {
            x: i,
            y: a
        };
        if (!r) return f = 0 > h ? t.x: t[Vr],
        {
            x: f,
            y: n
        };
        var _ = (n - s) / (i - e),
            c = n - _ * i,
            u = 0 > h ? i - t.x: i - t[Vr],
            o = 0 > r ? n - t.y: n - t[Wr];
        return Math[Ur](_) >= Math[Ur](o / u) ? (a = 0 > r ? t.y: t[Wr], f = (a - c) / _) : (f = 0 > h ? t.x: t[Vr], a = _ * f + c),
        {
            x: f,
            y: a
        }
    }
    function hi(t, i, n, e, s, h, r, f) {
        return 0 >= r || 0 >= f || 0 >= n || 0 >= e ? !1 : (r += s, f += h, n += t, e += i, (s > r || r > t) && (h > f || f > i) && (t > n || n > s) && (i > e || e > h))
    }
    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h
    }
    function fi(t, i, n, e, s, h, r, f) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + f
    }
    function ai(t, i, e) {
        if (!t) return {
            x: 0,
            y: 0
        };
        if (t.x !== n) return {
            x: t.x,
            y: t.y
        };
        var s, h, r = t[Qr],
            f = t[Jr];
        switch (r) {
            case $B:
                s = 0;
                break;
            case AB:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (f) {
            case NB:
                h = 0;
                break;
            case BB:
                h = e;
                break;
            default:
                h = e / 2
        }
        return {
            x: s,
            y: h
        }
    }
    function _i(t, i, n) {
        t[Dh][ir](i, n),
            t[Zr](i, n)
    }
    function ci(t, i) {
        t._f3 && (t._f3[Yh](i), t[Kr](i))
    }
    function ui(t) {
        return t[tf](/^-ms-/, nf)[tf](/-([\da-z])/gi,
            function(t, i) {
                return i[ef]()
            })
    }
    function oi(t, i) {
        var n = t[sf];
        if (!n) return ! 1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = hD(e)) && (n[s] = i[e]);
        return t
    }
    function di(t, i, n) { (i = hD(i)) && (t[sf][i] = n)
    }
    function li(t, i) {
        return eD ? eD[hf] ? void eD[hf](t + rf + i + ff, 0) : void(eD[af] && eD[af](t, i, 0)) : !1
    }
    function bi(i, n) {
        i[Rr] && (i = i[_f] && i[_f][qh] ? i[_f][0] : i[Rr][0]);
        var e = n[cf](),
            s = i[uf] || 0,
            h = i[of] || 0;
        return bB && dB && (t[df] && s == i[lf] && (s -= t[df]), t[bf] && h == i[vf] && (h -= t[bf])),
        {
            x: s - e[yf],
            y: h - e[gf]
        }
    }
    function vi(t, i) {
        return this[mr + i] = fD(t, i,
            function(t) {
                return wi[Bh](this, t, i)
            },
            !1, this)
    }
    function yi(t) {
        var i = this;
        return t[xf] = function() {
            return i._kc[wf](t)
        },
            t[mf] = function() {
                return i._kc[jf](t)
            },
            t
    }
    function gi(t) {
        this.__nfancelClick || (this.__nflickEvent = t, this.__nflickTime ? this.__nflickTime++:(this.__nflickTime = 1, setTimeout(L(this,
            function() {
                if (this.__nflickEvent) {
                    var t = this.__nflickTime;
                    this.__nflickTime = 0,
                        1 == t ? this._il(this.__nflickEvent, pf) : t > 1 && this._il(this.__nflickEvent, kf),
                        this.__nflickEvent = null
                }
            }), mB[Mf])))
    }
    function xi(t) {
        if (t[Rr]) {
            for (var i = t[Rr], n = [], e = 0, s = i[qh]; s > e; e++) {
                var h = i[e];
                n[Xh]({
                    pageX: h[lf],
                    pageY: h[vf],
                    clientX: h[uf],
                    clientY: h[of]
                })
            }
            return {
                timeStamp: t[Ef],
                touches: n,
                scale: t[Sf]
            }
        }
        return {
            timeStamp: t[Ef],
            x: t[uf],
            y: t[of]
        }
    }
    function wi(t, i) {
        switch (t = yi[Bh](this, t), i) {
            case "touchstart":
                if (t[Rr][qh] >= 2) return this._9g = xi(t),
                    this._nfl[Pf](),
                    void this._20();
            case "mousedown":
                if (O(t), this._il(t, If), this._nfw = t, this._9g = xi(t), t[Tf] || (this.__onLongPressFunction ? this.__longPressTimer && this._20() : this.__onLongPressFunction = L(this,
                        function() {
                            this.__longPressTimer = null,
                            this._nfw && (this.__nfancelClick = !0, this._il(this._nfw, Cf))
                        }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, mB[Of]), this.__nfancelClick = !1), bB) return;
                return void(uD._nfurrentInteractionSupport = this);
            case "touchend":
                if (!this._nfw) return;
                if (t[Rr][qh]) return void(this._9g = xi(t));
                t[Ef] - this._nfw[Ef] < 200 && gi[Bh](this, this._nfw);
            case "touchcancel":
                if (!this._nfw) return;
                this._moving && (delete this._moving, this._ii(t));
            case "mouseup":
                return void this._e2(t);
            case "click":
                return void gi[Bh](this, t);
            case "mousewheel":
            case "DOMMouseScroll":
                return t[$f] = t[Ff] || -t[Af],
                    this._il(t, Nf);
            case "touchmove":
                var n = t[Rr][qh];
                return this._moving || (this._moving = !0, 1 == n && this._e1()),
                    void this._js(t)
        }
        return this._il(t, qf + i)
    }
    function mi(t, i) {
        var n = mr + i;
        aD(t, i, this[n]),
            z(this, n)
    }
    function ji(i) {
        l(_D,
            function(t) {
                vi[Bh](this, i, t)
            },
            this),
        bB || uD._ndb || (uD._ndb = !0, fD(t, Bf,
            function(t) {
                if (uD._nfurrentInteractionSupport) {
                    O(t);
                    var i = uD._nfurrentInteractionSupport;
                    if (!uD._dragging) {
                        if (i._nfw) {
                            var n = i._nfw[Df] - t[Df],
                                e = i._nfw[Rf] - t[Rf];
                            if (4 > n * n + e * e) return
                        }
                        uD._dragging = !0,
                            i._e1()
                    }
                    i._js(t)
                }
            },
            !0), fD(t, zf,
            function(t) {
                var i = uD._nfurrentInteractionSupport;
                delete uD._nfurrentInteractionSupport,
                uD._dragging && (delete uD._dragging, T(t), t = yi[Bh](i, t), i._ii(t), i._e2(t))
            },
            !0))
    }
    function pi(t) {
        l(_D,
            function(i) {
                mi[Bh](this, t, i)
            },
            this),
        bB || (uD._nfurrentInteractionSupport == this && (delete uD._dragging, delete uD._nfurrentInteractionSupport), this._20(), delete this._nfw, delete this._9g)
    }
    function ki(t, i, n) {
        this._m2 = t,
            this._nfl = new Ei,
            ji[Bh](this, t),
        i && (this._listener = i),
            this._kt = n
    }
    function Mi(t) {
        return lB && t[Lf] || !lB && t[Gf]
    }
    function Ei() {
        this[Yf] = []
    }
    function Si(t, i, n, e, s) {
        Ii(t,
            function(e) {
                if (i) {
                    var s = e[Hf];
                    if (!s) return void(n || kD)(Xf + t + Wf);
                    i(s)
                }
            },
            n, e, s)
    }
    function Pi(t, i, n, e, s) { (n === !1 || e === !1) && (s = !1),
        Ii(t,
            function(e) {
                if (i) {
                    var s = e[Vf];
                    if (!s) return void(n || kD)(Xf + t + Uf);
                    try {
                        s = JSON[Qf](s)
                    } catch(h) {
                        return void(n || kD)(h)
                    }
                    i(s)
                }
            },
            n, e, s)
    }
    function Ii(t, i, n, e, s) {
        try {
            var h = new XMLHttpRequest,
                r = encodeURI(t);
            if (s !== !1) {
                var f;
                f = r[Wh](Jf) > 0 ? "&": Jf,
                    r += f + Zf + Date[Kf]()
            }
            h[ta](ia, r),
                h[na] = function() {
                    return 4 == h[ea] ? h[sa] && 200 != h[sa] ? void(n || kD)(Xf + t + ha) : void(i && i(h)) : void 0
                },
                h[ra](e)
        } catch(a) { (n || kD)(Xf + t + ha, a)
        }
    }
    function hi(t, i, n, e, s, h, r, f) {
        return 0 >= r || 0 >= f || 0 >= n || 0 >= e ? !1 : (r += s, f += h, n += t, e += i, (s > r || r > t) && (h > f || f > i) && (t > n || n > s) && (i > e || e > h))
    }
    function fi(t, i, n, e, s, h, r, f) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + f
    }
    function Ti(t, i, n) {
        return t instanceof Object && t.x ? Oi(t, i, 0, 0) : Ci(t, i, n, 0, 0)
    }
    function Ci(t, i, n, e, s) {
        var h = Math[Xr](n),
            r = Math[Hr](n),
            f = t - e,
            a = i - s;
        return t = f * r - a * h + e,
            i = f * h + a * r + s,
            new EB(t, i, n)
    }
    function Oi(t, i, n, e) {
        n = n || 0,
            e = e || 0;
        var s = Math[Xr](i),
            h = Math[Hr](i),
            r = t.x - n,
            f = t.y - e;
        return t.x = r * h - f * s + n,
            t.y = r * s + f * h + e,
            t
    }
    function $i(t, i, n) {
        return Fi(t, i, n, 0, 0)
    }
    function Fi(t, i, n, e, s) {
        var h = Ci(t.x, t.y, i, e, s),
            r = Ti(t.x + t[fa], t.y, i, e, s),
            f = Ti(t.x + t[fa], t.y + t[aa], i, e, s),
            a = Ti(t.x, t.y + t[aa], i, e, s);
        return n ? n[Pf]() : n = new TB,
            n[_a](h),
            n[_a](r),
            n[_a](f),
            n[_a](a),
            n
    }
    function Ai(t, i) {
        var n = this[ca] || 1;
        this.style[fa] = t + ua,
            this[sf][aa] = i + ua,
            this[fa] = t * n,
            this[aa] = i * n
    }
    function Ni() {
        this[oa][fa] = this[oa][fa]
    }
    function qi(t) {
        var i = t[da] || t[la] || t[ba] || t[va] || t[ya] || 1;
        return SD / i
    }
    function Bi(t, n, e) {
        var s = i[ga](oa);
        if (s.g = s[xa](wa), t !== !0 && !e) return t && n && (s[fa] = t, s[aa] = n),
            s;
        var h = s.g;
        return h[ca] = s[ca] = qi(h),
            s[ma] = Ai,
            h._kg = Ni,
        t && n && s[ma](t, n),
            s
    }
    function Di(t, i, e) {
        if (t === n || null === t) return {
            width: 0,
            height: 0
        };
        var s = Ri();
        e = e || mB[ja],
        s[pa] != e && (s[pa] = e);
        for (var h = i * mB[ka], r = 0, f = 0, a = t[Kh](Ma), _ = 0, c = a[qh]; c > _; _++) {
            var u = a[_];
            r = Math[Ea](s[Sa](u)[fa], r),
                f += h
        }
        return {
            width: r,
            height: f
        }
    }
    function Ri(t, i) {
        return PD || (PD = Bi()),
        t && i && (PD[fa] = t, PD[aa] = i),
            PD.g
    }
    function zi(t) {
        return Math[zr](t + Math[Pa](t * t + 1))
    }
    function Li(t, i) {
        i = i || t(1);
        var n = 1 / i,
            e = .5 * n,
            s = Math[Ia](1, i / 100);
        return function(h) {
            if (0 >= h) return 0;
            if (h >= i) return 1;
            for (var r = h * n,
                     f = 0; f++<10;) {
                var a = t(r),
                    _ = h - a;
                if (Math[Ur](_) <= s) return r;
                r += _ * e
            }
            return r
        }
    }
    function Gi(t, i, n) {
        var e = 1 - t,
            s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                f = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: h,
                rotate: Math[Yr](f, r)
            }
        }
        return {
            t: t,
            x: s,
            y: h
        }
    }
    function Yi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e: -1
    }
    function Hi(t, i) {
        i[ir](t[4], t[5]);
        var n = Yi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Gi(n, t);
            i[ir](e.x, e.y)
        }
        var s = Yi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Gi(s, t);
            i[ir](e.x, e.y)
        }
        return i
    }
    function Xi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0],
                n = t[1],
                e = t[4],
                s = t[5],
                h = Math[Pa](ID(i, n, e, s));
            return function(t) {
                return h * t
            }
        }
        var r = t[0],
            f = t[2],
            a = t[4],
            _ = r - 2 * f + a,
            c = 2 * f - 2 * r;
        r = t[1],
            f = t[3],
            a = t[5];
        var u = r - 2 * f + a,
            o = 2 * f - 2 * r,
            d = 4 * (_ * _ + u * u),
            l = 4 * (_ * c + u * o),
            b = c * c + o * o,
            h = 4 * d * b - l * l,
            v = 1 / h,
            y = .125 * Math[Ta](d, -1.5),
            g = 2 * Math[Pa](d),
            x = (h * zi(l / Math[Pa](h)) + 2 * Math[Pa](d) * l * Math[Pa](b)) * y;
        return function(t) {
            var i = l + 2 * t * d,
                n = i / Math[Pa](h),
                e = i * i * v;
            return (h * Math[zr](n + Math[Pa](e + 1)) + g * i * Math[Pa](b + t * l + t * t * d)) * y - x
        }
    }
    function Wi(t, i, n) {
        var e = 1 - t,
            s = i[0],
            h = i[2],
            r = i[4],
            f = i[6],
            a = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + f * t * t * t;
        if (n) var _ = 3 * t * t * f + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + ( - 3 * t * t + 6 * t - 3) * s;
        s = i[1],
            h = i[3],
            r = i[5],
            f = i[7];
        var c = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + f * t * t * t;
        if (n) {
            var u = 3 * t * t * f + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + ( - 3 * t * t + 6 * t - 3) * s;
            return {
                x: a,
                y: c,
                rotate: Math[Yr](u, _)
            }
        }
        return {
            x: a,
            y: c
        }
    }
    function Vi(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n,
            r = i - t,
            f = h * h - 4 * s * r;
        return 0 > f ? void 0 : 0 == f ? [ - h / (2 * s)] : (f = Math[Pa](f), [(f - h) / (2 * s), ( - f - h) / (2 * s)])
    }
    function Ui(t, i) {
        i[ir](t[6], t[7]);
        var n = Vi(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[qh]; e++) {
            var s = n[e];
            if (! (0 >= s || s >= 1)) {
                var h = Wi(s, t);
                i[ir](h.x, h.y)
            }
        }
        if (n = Vi(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[qh]; e++) {
            var s = n[e];
            if (! (0 >= s || s >= 1)) {
                var h = Wi(s, t);
                i[ir](h.x, h.y)
            }
        }
    }
    function Qi(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            n = {
                x: t[2],
                y: t[3]
            },
            e = {
                x: t[4],
                y: t[5]
            },
            s = {
                x: t[6],
                y: t[7]
            },
            h = i.x - 0,
            r = i.y - 0,
            f = n.x - 0,
            a = n.y - 0,
            _ = e.x - 0,
            c = e.y - 0,
            u = s.x - 0,
            o = s.y - 0,
            d = 3 * ( - h + 3 * f - 3 * _ + u),
            l = 6 * (h - 2 * f + _),
            b = 3 * ( - h + f),
            v = 3 * ( - r + 3 * a - 3 * c + o),
            y = 6 * (r - 2 * a + c),
            g = 3 * ( - r + a),
            x = function(t) {
                var i = d * t * t + l * t + b,
                    n = v * t * t + y * t + g;
                return Math[Pa](i * i + n * n)
            },
            w = (x(0) + 4 * x(.5) + x(1)) / 6;
        return w
    }
    function Ji(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
                h = 2 * t - 4 * i + 2 * n,
                r = i - t;
            return function(t) {
                return 3 * (s * t * t + h * t + r)
            }
        }
        function e(t, i) {
            var n = s(t),
                e = h(t);
            return Math[Pa](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]),
            h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function(t) {
            if (!t) return 0;
            for (var i, n = 0,
                     s = 0;;) {
                if (i = n + r, i >= t) return s += e(n, i - n);
                s += e(n, r),
                    n = i
            }
        }
    }
    function Zi(t, i, n) {
        return ID(i, n, t.cx, t.cy) <= t._squareR + TD
    }
    function Ki(t, i, n, e) {
        return n = n || tn(t, i),
            new nn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }
    function tn(t, i) {
        return SB(t.x, t.y, i.x, i.y)
    }
    function nn(t, i, n, e, s, h, r) {
        this.cx = t,
            this.cy = i,
            this.r = n,
            this._squareR = n * n,
            this.p1 = e,
            this.p2 = s,
            this.p3 = h,
            this._otherPoint = r
    }
    function en(t, i, n, e) {
        this.cx = t,
            this.cy = i,
            this[fa] = n,
            this[aa] = e
    }
    function sn(t) {
        var i = t[0],
            n = t[1],
            e = t[2],
            s = nn._jaCircle(i, n, e);
        return rn(t, i, n, e, s)
    }
    function hn(t, i) {
        i = i || fn(t);
        for (var n, e = i[fa] / i[aa], s = [], h = t[qh], r = 0; h > r; r++) n = t[r],
            s[Xh]({
                x: n.x,
                y: n.y * e
            });
        var f = sn(s);
        return f ? new en(f.cx, f.cy / e, 2 * f.r, 2 * f.r / e) : void 0
    }
    function rn(t, i, n, e, s) {
        for (var h, r, f = t[qh], a = s._squareR, _ = 0; f > _; _++) if (h = t[_], h != i && h != n && h != e) {
            var c = ID(s.cx, s.cy, h.x, h.y);
            c - TD > a && (a = c, r = h)
        }
        if (!r) return s;
        var u, o = nn._jaCircle(r, i, n),
            d = nn._jaCircle(r, i, e),
            l = nn._jaCircle(r, e, n);
        return Zi(o, e.x, e.y) && (u = o),
        Zi(d, n.x, n.y) && (!u || u.r > d.r) && (u = d),
        Zi(l, i.x, i.y) && (!u || u.r > l.r) && (u = l),
            i = u.p1,
            n = u.p2,
            e = u.p3 || u._otherPoint,
            rn(t, i, n, e, u)
    }
    function fn(t) {
        for (var i, n = t[qh], e = new TB, s = 0; n > s; s++) i = t[s],
            e[ir](i.x, i.y);
        return e
    }
    function an(t, i, n, e, s) {
        this._6l && this[Ca]();
        var h = s ? this[Oa](s) : this[$a],
            r = n / h[fa],
            f = t - r * h.x,
            a = e / h[aa],
            _ = i - a * h.y,
            c = this._fg,
            u = [];
        return l(c,
            function(t) {
                var i = t[Hh](),
                    n = i[Yf];
                if (n && n[qh]) {
                    for (var e = n[qh], s = [], h = 0; e > h; h++) {
                        var c = n[h];
                        h++;
                        var o = n[h];
                        c = r * c + f,
                            o = a * o + _,
                            s[Xh](c),
                            s[Xh](o)
                    }
                    i[Yf] = s
                }
                u[Xh](i)
            },
            this),
            new fR(u)
    }
    function _n(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) return ! 1;
        if (!e) {
            var r = this[Oa](s);
            if (!r[Fa](t, i, n)) return ! 1
        }
        var f = Math[Aa](2 * n) || 1,
            a = Ri(f, f),
            _ = (a[oa], -t + n),
            c = -i + n;
        if (a[Na](1, 0, 0, 1, _, c), !a[qa]) {
            this._ll(a),
            s && a[Ba](),
            h && a[Da]();
            for (var u = a[Ra](0, 0, f, f)[za], o = u[qh] / 4; o > 0;) {
                if (u[4 * o - 1] > rR) return ! 0; --o
            }
            return ! 1
        }
        return a.lineWidth = (s || 0) + 2 * n,
            this._ll(a),
            s && a[qa](n, n) ? !0 : h ? a[La](n, n) : !1
    }
    function cn(t, i, n) {
        if (!this._iw) return null;
        var e = this._fg;
        if (e[qh] < 2) return null;
        n === !1 && (t += this._iw);
        var s = e[0];
        if (0 >= t) return As(s[Yf][0], s[Yf][1], e[1][Yf][0], e[1][Yf][1], t, i);
        if (t >= this._iw) {
            s = e[e[qh] - 1];
            var h, r, f = s[Yf],
                a = f[qh],
                _ = f[a - 2],
                c = f[a - 1];
            if (a >= 4) h = f[a - 4],
                r = f[a - 3];
            else {
                s = e[e[qh] - 2];
                var u = s[Ga];
                h = u.x,
                    r = u.y
            }
            return As(_, c, _ + _ - h, c + c - r, t - this._iw, i)
        }
        for (var o, d = 0,
                 l = 1,
                 a = e[qh]; a > l; l++) if (o = e[l], o._iw) {
            if (! (d + o._iw < t)) {
                var b, u = s[Ga];
                if (o[Ya] == eR) {
                    var v = o[Yf];
                    b = un(t - d, o, u.x, u.y, v[0], v[1], v[2], v[3], o._r)
                } else {
                    if (!o._lf) return As(u.x, u.y, o[Yf][0], o[Yf][1], t - d, i);
                    var y = Li(o._lf, o._iw)(t - d),
                        v = o[Yf];
                    b = o[Ya] == nR && 6 == v[qh] ? Wi(y, [u.x, u.y][Lh](v), !0) : Gi(y, [u.x, u.y][Lh](v), !0)
                }
                return i && (b.x -= i * Math.sin(b[Ha] || 0), b.y += i * Math[Hr](b[Ha] || 0)),
                    b
            }
            d += o._iw,
                s = o
        } else s = o
    }
    function un(t, i, n, e, s, h, r, f) {
        if (t <= i._l1) return As(n, e, s, h, t);
        if (t >= i._iw) return t -= i._iw,
            As(i._p2x, i._p2y, r, f, t);
        if (t -= i._l1, i._o) {
            var a = t / i._r;
            i._CCW && (a = -a);
            var _ = Ci(i._p1x, i._p1y, a, i._o.x, i._o.y);
            return _[Ha] += i._nd1 || 0,
                _[Ha] += Math.PI,
                _
        }
        return As(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }
    function ei(t, i, n) {
        var e, s, h;
        0 == t._nd ? (e = -1, h = 0, s = i) : 0 == t._nf ? (e = 0, h = 1, s = n) : (e = -1 / t._nd, s = (t._nd - e) * i + t._nb, h = 1);
        var r = new PB;
        return r._nd = e,
            r._nb = s,
            r._nf = h,
            r._n7 = i,
            r._n2 = n,
            r
    }
    function on(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
            t
    }
    function dn(t, i, n, e, s, h, r, f) {
        var a = SB(i, n, e, s),
            _ = SB(e, s, h, r);
        if (!a || !_) return t._d = 0,
            t._r = 0,
            t._l1 = a,
            t._l2 = _,
            t._iw = 0;
        var c = bn(e, s, i, n),
            u = bn(e, s, h, r);
        t._nd1 = c,
            t._nd2 = u;
        var o = c - u;
        o = on(o),
        o > Math.PI && (o = 2 * Math.PI - o, t._CCW = !0);
        var d = Math.PI - o,
            l = Math[Xa](o / 2),
            b = f / l,
            v = Math[Ia](a, _);
        b > v && (b = v, f = l * b);
        var y, g = e + Math[Hr](c) * b,
            x = s + Math[Xr](c) * b,
            w = e + Math[Hr](u) * b,
            m = s + Math[Xr](u) * b,
            j = new PB(i, n, e, s),
            p = new PB(e, s, h, r),
            k = ei(j, g, x),
            M = ei(p, w, m),
            E = k._4e(M),
            S = Math[Yr](x - E.y, g - E.x),
            P = Math[Yr](m - E.y, w - E.x);
        y = t._CCW ? P: S;
        for (var I, T = 0; 4 > T;) {
            var C = T * kB;
            if (on(C - y) <= d) {
                var O, $;
                if (I ? I++:I = 1, 0 == T ? (O = E.x + f, $ = E.y) : 1 == T ? (O = E.x, $ = E.y + f) : 2 == T ? (O = E.x - f, $ = E.y) : (O = E.x, $ = E.y - f), t[Wa + I] = {
                        x: O,
                        y: $
                    },
                    2 == I) break
            }
            T++
        }
        return t._p1x = g,
            t._p1y = x,
            t._p2x = w,
            t._p2y = m,
            t._o = E,
            t._d = b,
            t._r = f,
            t._l1 = a - b,
            t._l2 = _ - b,
            t._iw = t._l1 + d * f
    }
    function ln(t, i, n, e, s, h, r) {
        var f = bn(n, e, t, i),
            a = bn(n, e, s, h),
            _ = f - a;
        return r ? _: (0 > _ && (_ = -_), _ > Math.PI && (_ -= Math.PI), _)
    }
    function bn(t, i, n, e) {
        return Math[Yr](e - i, n - t)
    }
    function vn(t) {
        var i = OD[Va](t);
        if (i) return i[1];
        var n = t[Ua](Dr);
        return n >= 0 && n < t[qh] - 1 ? t[Qa](n + 1) : void 0
    }
    function yn(t) {
        if (!t) return null;
        if (t instanceof fR) return DD;
        if (t[Ja] instanceof Function) return BD;
        if (S(t)) {
            var i = vn(t);
            if (i) {
                if (!fB && $D[Za](i)) return qD;
                if (FD[Za](i)) return ND
            }
            return AD
        }
    }
    function gn(t, i, n) {
        if (this._ly = yn(t), !this._ly) throw new Error("the image format is not supported", t);
        this._lj = t,
            this._ndc = i,
            this._9h = n,
            this[fa] = i || mB[Ka],
            this[aa] = n || mB[t_],
            this._j9 = {}
    }
    function xn(t, i, n, e) {
        return i ? (GD[t] = new gn(i, n, e), t) : void delete GD[t]
    }
    function wn(t) {
        if (t._l4) return t._l4;
        var i = S(t);
        if (!i && !t[Er]) return t._l4 = new gn(t);
        var n = t[Er] || t;
        return n in GD ? GD[n] : GD[n] = new gn(t)
    }
    function mn(t) {
        return t in GD
    }
    function jn(t, i, n) {
        n = n || {};
        var e = t[Oa](n[i_]);
        if (!e[fa] || !e[aa]) return ! 1;
        var s = i[xa](wa),
            h = i[ca] || 1,
            r = n[n_] || e_,
            f = /full/i.test(r),
            a = /uniform/i[Za](r),
            _ = 1,
            c = 1;
        if (f) {
            var u = i[fa],
                o = i[aa],
                d = n[s_],
                l = 0,
                b = 0;
            if (d) {
                var v, y, g, x;
                E(d) ? v = y = g = x = d: (v = d[gf] || 0, y = d[Wr] || 0, g = d[yf] || 0, x = d[Vr] || 0),
                    u -= g + x,
                    o -= v + y,
                    l += g,
                    b += v
            }
            _ = u / e[fa],
                c = o / e[aa],
            a && (_ > c ? (l += (u - c * e[fa]) / 2, _ = c) : c > _ && (b += (o - _ * e[aa]) / 2, c = _)),
            (l || b) && s[h_](l, b)
        }
        s[h_]( - e.x * _, -e.y * c),
            t[Ja](s, h, n, _, c, !0)
    }
    function pn(t, i, n) {
        var e = wn(t);
        return e ? (e[Ca](), (e._ly == qD || e._6p()) && e._ndg(function(t) {
                t[r_] && (this[fa] = this[fa], jn(t[r_], this, n))
            },
            i), void jn(e, i, n)) : (MD[Gr](f_ + t), !1)
    }
    function kn(t) {
        var i = t[fa],
            n = t[aa];
        try {
            var e = t.g[Ra](0, 0, i, n),
                s = e[za];
            return Mn(s, i, n)
        } catch(h) {
            MD[Gr](h)
        }
    }
    function Mn(t, i) {
        var n, e, s, h, r, f = t[qh],
            a = 0,
            _ = 0;
        for (r = 0; f > r; r += 4) if (t[r + 3] > 0) {
            n = (r + 4) / i / 4 | 0;
            break
        }
        for (r = f - 4; r >= 0; r -= 4) if (t[r + 3] > 0) {
            e = (r + 4) / i / 4 | 0;
            break
        }
        for (a = 0; i > a; a++) {
            for (_ = n; e > _; _++) if (t[_ * i * 4 + 4 * a + 3] > 0) {
                s = a;
                break
            }
            if (s >= 0) break
        }
        for (a = i - 1; a >= 0; a--) {
            for (_ = n; e > _; _++) if (t[_ * i * 4 + 4 * a + 3] > 0) {
                h = a;
                break
            }
            if (h >= 0) break
        }
        var c, u, o, d = [],
            l = [];
        for (a = s; h >= a; a++) for (o = [], d[Xh](o), _ = n; e >= _; _++) r = 4 * (_ * i + a),
            c = t[r + 3],
            c ? (u = {
                a: c,
                r: t[r],
                g: t[r + 1],
                b: t[r + 2]
            },
                o[Xh](u), l[Xh](u.r), l[Xh](u.g), l[Xh](u.b), l[Xh](u.a)) : (o[Xh](null), l[Xh](0), l[Xh](0), l[Xh](0), l[Xh](0));
        return d._x = s,
            d._y = n,
            d._width = h - s + 1,
            d._height = e - n + 1,
            d._j3 = new TB(s, n, d._width, d._height),
            d._pixelSize = d._width * d._height,
            d
    }
    function En(t, i, n, e, s) {
        if (s = 1 | s, !s || 1 > s) {
            var h = t[n];
            return h ? h[e] : !1
        }
        var r = e - s,
            f = n - s;
        0 > r && (r = 0),
        0 > f && (f = 0);
        var a = n + s,
            _ = e + s;
        for (a > i[fa] && (a = i[fa]), _ > i[aa] && (_ = i[aa]); a > f;) {
            for (; _ > r;) {
                if (t[f][r]) return ! 0;
                r++
            }
            f++
        }
        return ! 1
    }
    function Sn(t) {
        if (Fr == t[0]) {
            if (t = t[Qa](1), 3 == t[qh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[qh]) return;
            return t = parseInt(t, 16),
                [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i[Za](t)) {
            var i = t[Wh](a_),
                n = t[Wh]($r);
            if (0 > i || i > n) return;
            if (t = t[Qa](i + 1, n), t = t[Kh](Or), t[qh] < 3) return;
            var e = parseInt(t[0]),
                s = parseInt(t[1]),
                h = parseInt(t[2]),
                r = 3 == t[qh] ? 255 : parseInt(t[3]);
            return [e, s, h, r]
        }
    }
    function Pn(t, i, n) {
        return n || (n = mB[__]),
            n == ED[c_] ? t * i: n == ED[u_] ? Math[Ia](t, i) : n == ED[o_] ? 1 - (1 - i) / t: n == ED[d_] ? t + i - 1 : n == ED[l_] ? Math[Ea](t, i) : n == ED[b_] ? t + i - t * i: i
    }
    function In(t, i, n) {
        var e = Sn(i),
            s = t.g[Ra](0, 0, t[fa], t[aa]),
            h = s.data;
        if (n instanceof Function) h = n(t, h, e) || h;
        else {
            var r = e[0] / 255,
                f = e[1] / 255,
                a = e[2] / 255;
            if (n == ED[v_]) for (var _ = 0,
                                      c = h[qh]; c > _; _ += 4) {
                var u = 77 * h[_] + 151 * h[_ + 1] + 28 * h[_ + 2] >> 8;
                h[_] = u * r | 0,
                    h[_ + 1] = u * f | 0,
                    h[_ + 2] = u * a | 0
            } else for (var _ = 0,
                            c = h[qh]; c > _; _ += 4) h[_] = 255 * Pn(r, h[_] / 255, n) | 0,
                h[_ + 1] = 255 * Pn(f, h[_ + 1] / 255, n) | 0,
                h[_ + 2] = 255 * Pn(a, h[_ + 2] / 255, n) | 0
        }
        var t = Bi(t[fa], t[aa]);
        return t.g[y_](s, 0, 0),
            t
    }
    function Tn(t, i, n, e) {
        return Cn(t - n, i - n, 2 * n, 2 * n, e)
    }
    function Cn(t, i, n, e, s) {
        n = Math[Aa](n) || 1,
            e = Math[Aa](e) || 1;
        var h = Ri(n, e);
        h[Na](1, 0, 0, 1, -t, -i),
            s[Ja](h);
        for (var r = h[Ra](0, 0, n, e)[za], f = r[qh] / 4; f-->0;) if (r[4 * f - 1] > rR) return ! 0;
        return ! 1
    }
    function On(t, i, n, e, s, h) {
        t -= s.$x,
            i -= s.$y;
        var r = s._fe[g_](t, i, n, e);
        if (!r) return ! 1;
        t = r.x * h,
            i = r.y * h,
            n = r[fa] * h,
            e = r[aa] * h,
            n = Math[Aa](n) || 1,
            e = Math[Aa](e) || 1;
        var f = Ri(),
            a = f[oa];
        a[fa] < n || a[aa] < e ? (a[fa] = n, a[aa] = e) : (f[Na](1, 0, 0, 1, 0, 0), f[x_](0, 0, n, e)),
            f[Na](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h),
            f[Sf](h, h),
            s._j7(f, 1);
        for (var _ = f[Ra](0, 0, n, e)[za], c = _[qh] / 4; c-->0;) if (_[4 * c - 1] > rR) return ! 0;
        return ! 1
    }
    function $n(t, i, n, e, s, h, r, f, a) {
        if (ri(t, i, n, e, f, a)) return null;
        var _, c, u, o = new hR(tR, [t + n - s, i]),
            d = new hR(iR, [t + n, i, t + n, i + h]),
            l = new hR(tR, [t + n, i + e - h]),
            b = new hR(iR, [t + n, i + e, t + n - s, i + e]),
            v = new hR(tR, [t + s, i + e]),
            y = new hR(iR, [t, i + e, t, i + e - h]),
            g = new hR(tR, [t, i + h]),
            x = new hR(iR, [t, i, t + s, i]),
            w = (new hR(sR), [o, d, l, b, v, y, g, x]),
            m = new TB(t + s, i + h, n - s - s, e - h - h);
        t > f ? (_ = $B, u = 5) : f > t + n ? (_ = AB, u = 1) : (_ = FB, u = 0),
            i > a ? (c = NB, _ == $B && (u = 7)) : a > i + e ? (c = BB, _ == AB ? u = 3 : _ == FB && (u = 4)) : (c = qB, _ == $B ? u = 6 : _ == AB && (u = 2));
        var j = Dn(u, t, i, n, e, s, h, r, f, a, m),
            p = j[0],
            k = j[1],
            M = new fR,
            E = M._fg;
        E[Xh](new hR(KD, [p.x, p.y])),
            E[Xh](new hR(tR, [f, a])),
            E[Xh](new hR(tR, [k.x, k.y])),
        k._mi && (E[Xh](k._mi), k._miNO++);
        for (var S = k._miNO % 8,
                 P = p._miNO; E[Xh](w[S]), ++S, S %= 8, S != P;);
        return p._mi && E[Xh](p._mi),
            M[w_](),
            M
    }
    function Fn(t, i, e, s, h, r, f, a, _, c, u, o, d, l) {
        var b = new PB(o, d, e, s),
            v = new PB(i[0], i[1], i[4], i[5]),
            y = v._4e(b, u),
            g = y[0],
            x = y[1];
        if (g._rest !== n) {
            g._miNO = (t - 1) % 8,
                x._miNO = (t + 1) % 8;
            var w = g._rest;
            7 == t ? (g.y = r + c + Math[Ia](l[aa], w), x.x = h + _ + Math[Ia](l[fa], w)) : 5 == t ? (g.x = h + _ + Math[Ia](l[fa], w), x.y = r + a - c - Math[Ia](l[aa], w)) : 3 == t ? (g.y = r + a - c - Math[Ia](l[aa], w), x.x = h + f - _ - Math[Ia](l[fa], w)) : 1 == t && (g.x = h + f - _ - Math[Ia](l[fa], w), x.y = r + c + Math[Ia](l[aa], w))
        } else {
            b._mu(b._n7, b._n2, g.x, g.y),
                g = b._$j(i),
                b._mu(b._n7, b._n2, x.x, x.y),
                x = b._$j(i);
            var m = Rn(i, [g, x]),
                j = m[0],
                p = m[2];
            g._miNO = t,
                x._miNO = t,
                g._mi = new hR(iR, j[Rh](2)),
                x._mi = new hR(iR, p[Rh](2))
        }
        return [g, x]
    }
    function An(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (a - f >= i + h) c = {
            y: n,
            x: a - f
        },
            c._miNO = 0;
        else {
            c = {
                y: n + r,
                x: Math[Ea](i, a - f)
            };
            var o = [i, n + r, i, n, i + h, n],
                d = new PB(a, _, c.x, c.y);
            if (c = d._$j(o)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Rn(o, [c]);
                l = l[0],
                l && (c._mi = new hR(iR, l[Rh](2))),
                    c._miNO = 7
            } else c = {
                y: n,
                x: i + h
            },
                c._miNO = 0
        }
        if (i + e - h >= a + f) u = {
            y: n,
            x: a + f
        },
            u._miNO = 0;
        else {
            u = {
                y: n + r,
                x: Math[Ia](i + e, a + f)
            };
            var b = [i + e - h, n, i + e, n, i + e, n + r],
                d = new PB(a, _, u.x, u.y);
            if (u = d._$j(b)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Rn(b, [u]);
                l && l[l[qh] - 1] && (u._mi = new hR(iR, l[l[qh] - 1][Rh](2))),
                    u._miNO = 1
            } else u = {
                y: n,
                x: i + e - h
            },
                u._miNO = 0
        }
        return [c, u]
    }
    function Nn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (_ - f >= n + r) c = {
            x: i + e,
            y: _ - f
        },
            c._miNO = 2;
        else {
            c = {
                x: i + e - h,
                y: Math[Ea](n, _ - f)
            };
            var o = [i + e - h, n, i + e, n, i + e, n + r],
                d = new PB(a, _, c.x, c.y);
            if (c = d._$j(o)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Rn(o, [c]);
                l = l[0],
                l && (c._mi = new hR(iR, l[Rh](2))),
                    c._miNO = 1
            } else c = {
                x: i + e,
                y: n + r
            },
                c._miNO = 2
        }
        if (n + s - r >= _ + f) u = {
            x: i + e,
            y: _ + f
        },
            u._miNO = 2;
        else {
            u = {
                x: i + e - h,
                y: Math[Ia](n + s, _ + f)
            };
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new PB(a, _, u.x, u.y);
            if (u = d._$j(b)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Rn(b, [u]);
                l[1] && (u._mi = new hR(iR, l[1][Rh](2))),
                    u._miNO = 3
            } else u = {
                x: i + e,
                y: n + s - r
            },
                u._miNO = 2
        }
        return [c, u]
    }
    function qn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (a - f >= i + h) u = {
            y: n + s,
            x: a - f
        },
            u._miNO = 4;
        else {
            u = {
                y: n + s - r,
                x: Math[Ea](i, a - f)
            };
            var o = [i + h, n + s, i, n + s, i, n + s - r],
                d = new PB(a, _, u.x, u.y);
            if (u = d._$j(o)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Rn(o, [u]);
                l = l[l[qh] - 1],
                l && (u._mi = new hR(iR, l[Rh](2))),
                    u._miNO = 5
            } else u = {
                y: n + s,
                x: i + h
            },
                u._miNO = 4
        }
        if (i + e - h >= a + f) c = {
            y: n + s,
            x: a + f
        },
            c._miNO = 4;
        else {
            c = {
                y: n + s - r,
                x: Math[Ia](i + e, a + f)
            };
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                d = new PB(a, _, c.x, c.y);
            if (c = d._$j(b)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Rn(b, [c]);
                l[0] && (c._mi = new hR(iR, l[0][Rh](2))),
                    c._miNO = 3
            } else c = {
                y: n + s,
                x: i + e - h
            },
                c._miNO = 4
        }
        return [c, u]
    }
    function Bn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (_ - f >= n + r) u = {
            x: i,
            y: _ - f
        },
            u._miNO = 6;
        else {
            u = {
                x: i + h,
                y: Math[Ea](n, _ - f)
            };
            var o = [i, n + r, i, n, i + h, n],
                d = new PB(a, _, u.x, u.y);
            if (u = d._$j(o)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Rn(o, [u]);
                l = l[l[qh] - 1],
                l && (u._mi = new hR(iR, l[Rh](2)))
            } else u = {
                x: i,
                y: n + r
            };
            u._miNO = 7
        }
        if (n + s - r >= _ + f) c = {
            x: i,
            y: _ + f
        },
            c._miNO = 6;
        else {
            c = {
                x: i + h,
                y: Math.min(n + s, _ + f)
            };
            var b = [i + h, n + s, i, n + s, i, n + s - r],
                d = new PB(a, _, c.x, c.y);
            if (c = d._$j(b)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Rn(b, [c]);
                l[0] && (c._mi = new hR(iR, l[0][Rh](2))),
                    c._miNO = 5
            } else c = {
                x: i,
                y: n + s - r
            },
                c._miNO = 6
        }
        return [c, u]
    }
    function Dn(t, i, n, e, s, h, r, f, a, _, c) {
        var u = f / 2;
        switch (t) {
            case 7:
                var o = [i, n + r, i, n, i + h, n],
                    d = i + h,
                    l = n + r;
                return Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 5:
                return o = [i + h, n + s, i, n + s, i, n + s - r],
                    d = i + h,
                    l = n + s - r,
                    Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 3:
                return o = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
                    d = i + e - h,
                    l = n + s - r,
                    Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 1:
                return o = [i + e - h, n, i + e, n, i + e, n + r],
                    d = i + e - h,
                    l = n + r,
                    Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 0:
                return An(t, i, n, e, s, h, r, u, a, _, c);
            case 2:
                return Nn(t, i, n, e, s, h, r, u, a, _, c);
            case 4:
                return qn(t, i, n, e, s, h, r, u, a, _, c);
            case 6:
                return Bn(t, i, n, e, s, h, r, u, a, _, c)
        }
    }
    function Rn(t, i) {
        for (var e, s, h, r, f, a, _ = t[0], c = t[1], u = t[2], o = t[3], d = t[4], l = t[5], b = [], v = 0; v < i[qh]; v++) f = i[v],
            a = f.t,
            0 != a && 1 != a ? (e = _ + (u - _) * a, s = c + (o - c) * a, h = u + (d - u) * a, r = o + (l - o) * a, b[Xh]([_, c, e, s, f.x, f.y]), _ = f.x, c = f.y, u = h, o = r) : b[Xh](null);
        return h !== n && b[Xh]([f.x, f.y, h, r, d, l]),
            b
    }
    function zn(t) {
        return this[m_] && this._nd9 && (t.x -= this._nd9.x, t.y -= this._nd9.y),
        this[j_] && Oi(t, this[j_]),
            t.x += this[p_] || 0,
            t.y += this[k_] || 0,
            this[M_] && this[E_] ? Oi(t, this[E_]) : t
    }
    function Ln(t) {
        return this[M_] && this[E_] && Oi(t, -this[E_]),
            t.x -= this[p_] || 0,
            t.y -= this[k_] || 0,
        this[j_] && Oi(t, -this[j_]),
        this[m_] && this._nd9 && (t.x += this._nd9.x, t.y += this._nd9.y),
            t
    }
    function Gn() {
        var t = this[S_];
        this[S_] && (this[S_] = !1, this[P_] = !0, this._8a[I_](this._j3), this[T_] && this._8a[C_](this[T_]), this[O_] && this._8a[C_](this[O_]));
        var i = this._$t();
        if (i) var n = this[$_] && this[F_];
        return this[P_] && this[m_] && (this[P_] = !1, n && (t = !0), this._nd9 = ai(this[A_], this._8a[fa], this._8a[aa]), this._nd9.x += this._8a.x, this._nd9.y += this._8a.y),
            i ? (t && (this._nbackgroundGradientInvalidateFlag = !0, Yn[Bh](this, n)), this._nbackgroundGradientInvalidateFlag && (this._nbackgroundGradientInvalidateFlag = !1, this._nbackgroundGradient = this[N_] && this._moShape && this._moShape[$a] ? this[N_][q_](this._moShape[$a]) : null), t) : (this.__mhPointer = !1, t)
    }
    function Yn(t) {
        var i = this._8a.x + this[O_] / 2,
            n = this._8a.y + this[O_] / 2,
            e = this._8a[fa] - this[O_],
            s = this._8a[aa] - this[O_],
            h = 0,
            r = 0;
        if (this[B_] && (E(this[B_]) ? h = r = this[B_] : (h = this[B_].x || 0, r = this[B_].y || 0), h = Math[Ia](h, e / 2), r = Math[Ia](r, s / 2)), t && (this._pointerX = this._nd9.x - this[p_] + this[D_], this._pointerY = this._nd9.y - this[k_] + this[R_], !this._8a[Fa](this._pointerX, this._pointerY))) {
            var f = new _R(i, n, e, s, h, r, this[F_], this._pointerX, this._pointerY);
            return this._moShape = f._mi,
                this._moShape[$a][pr](i, n, e, s),
                void(this.__mhPointer = !0)
        }
        this._moShape && this._moShape[Pf](),
            this._moShape = vz[z_](i, n, e, s, h, r, this._moShape),
            this._moShape[$a][pr](i, n, e, s)
    }
    function Hn(t, i, n, e) {
        return e && (t[fa] < 0 || t[aa] < 0) ? (t.x = i, t.y = n, void(t[fa] = t[aa] = 0)) : (i < t.x ? (t[fa] += t.x - i, t.x = i) : i > t.x + t[fa] && (t[fa] = i - t.x), void(n < t.y ? (t[aa] += t.y - n, t.y = n) : n > t.y + t[aa] && (t[aa] = n - t.y)))
    }
    function Xn(t, i, e) {
        var s, h = t[L_],
            r = t[G_] === n ? this[G_] : t[G_];
        return this[Y_] instanceof fR && r ? (s = CD._nbd(h, this[Y_], this[i_], i, e), s.x *= this._j4, s.y *= this._j5) : (s = ai(h, this._8a[fa], this._8a[aa]), s.x += this._8a.x, s.y += this._8a.y),
            zn[Bh](this, s)
    }
    function Wn(t, i) {
        if (i) if (i._8a[H_]()) t.$x = i.$x,
            t.$y = i.$y;
        else {
            var n = Xn[Bh](i, t);
            t.$x = n.x,
                t.$y = n.y,
                t._hostRotate = n[Ha]
        } else t.$x = 0,
            t.$y = 0;
        t[X_] && oR[Bh](t)
    }
    function Vn(t) {
        if (t[W_] === n) {
            var i, e;
            if (t[V_]) i = t[U_],
                e = t[V_];
            else {
                var s;
                if (t[Q_] !== n) s = Q_;
                else {
                    if (t[J_] === n) return ! 1;
                    s = J_
                }
                e = function(t) {
                    this[s] = t
                },
                    i = function() {
                        return this[s]
                    }
            }
            Q(t, W_, {
                get: function() {
                    return i[Bh](this)
                },
                set: function(t) {
                    e[Bh](this, t)
                }
            })
        }
        if (t[Z_] === n) {
            var h;
            if (t[K_] !== n) h = K_;
            else {
                if (t[tc] === n) return;
                h = tc
            }
            Q(t, Z_, {
                get: function() {
                    return this[h]
                },
                set: function(t) {
                    this[h] = t
                }
            })
        }
    }
    function Un(t, i, n, e, s) {
        var h, r, f, a, _, c, u, o, d = function(t) {
                return function(i) {
                    t(i)
                }
            },
            l = function() {
                r = null,
                    f = null,
                    a = _,
                    _ = null,
                    c = null
            },
            b = function(t) {
                h = t,
                u || (u = Bi()),
                    u[fa] = h[fa],
                    u[aa] = h[aa],
                    i[fa] = h[fa],
                    i[aa] = h[aa]
            },
            v = function(t) {
                y(),
                    l(),
                    r = t[ic] ? t[nc] : null,
                    f = 10 * t[ec],
                    _ = t[sc]
            },
            y = function() {
                if (c) {
                    var t = c[Ra](0, 0, h[fa], h[aa]),
                        n = {
                            data: t,
                            _pixels: Mn(t[za], h[fa], h[aa]),
                            delay: f
                        };
                    s[Bh](i, n)
                }
            },
            g = function(t) {
                c || (c = u[xa](wa));
                var i = t[hc] ? t[rc] : h[fc],
                    n = c[Ra](t[ac], t[_c], t[fa], t[aa]);
                t[cc][uc](function(t, e) {
                    r !== t ? (n[za][4 * e + 0] = i[t][0], n[za][4 * e + 1] = i[t][1], n[za][4 * e + 2] = i[t][2], n[za][4 * e + 3] = 255) : (2 === a || 3 === a) && (n[za][4 * e + 3] = 0)
                }),
                    c[x_](0, 0, h[fa], h[aa]),
                    c[y_](n, t[ac], t[_c])
            },
            x = function() {},
            w = {
                hdr: d(b),
                gce: d(v),
                com: d(x),
                app: {
                    NETSCAPE: d(x)
                },
                img: d(g, !0),
                eof: function() {
                    y(),
                        n[Bh](i)
                }
            },
            m = new XMLHttpRequest;
        fB || m[oc]("text/plain; charset=x-user-defined"),
            m[dc] = function() {
                o = new yR(m[Vf]);
                try {
                    xR(o, w)
                } catch(t) {
                    e[Bh](i, Qf)
                }
            },
            m[lc] = function() {
                e[Bh](i, bc)
            },
            m[ta](ia, t, !0),
            m[ra]()
    }
    function Qn(t) {
        var i = [50, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 49, 46, 56, 10, 49, 52, 50, 50, 55, 49, 52, 52, 51, 52, 56, 52, 55, 10, 10, 48, 10];
        return i[uc](function(n, e) {
            i[e] = t(n)
        }),
            i[vc]("")
    }
    function Jn(t, i) {
        try {
            if (null == t || t[qh] < 8) return;
            if (null == i || i[qh] <= 0) return;
            for (var n = "",
                     e = 0; e < i[qh]; e++) n += i[yc](e).toString();
            var s = Math[ur](n[qh] / 5),
                h = parseInt(n[gc](s) + n[gc](2 * s) + n[gc](3 * s) + n[gc](4 * s) + n[gc](5 * s)),
                r = Math[Aa](i[qh] / 2),
                f = Math[Ta](2, 31) - 1,
                a = parseInt(t[Qa](t[qh] - 8, t[qh]), 16);
            for (t = t[Qa](0, t[qh] - 8), n += a; n[qh] > 10;) n = (parseInt(n[Qa](0, 10)) + parseInt(n[Qa](10, n[qh]))).toString();
            n = (h * n + r) % f;
            for (var _ = "",
                     c = "",
                     e = 0; e < t[qh]; e += 2) _ = parseInt(parseInt(t[Qa](e, e + 2), 16) ^ Math[ur](n / f * 255)),
                c += String[xc](_),
                n = (h * n + r) % f;
            return 0 | c[0] ? QR = MR[wc + PR + mc](c) : null
        } catch(u) {}
    }
    function Zn() {
        var t = mR;
        if (!t) return void(nz = !0);
        UR = t;
        var i;
        t = t[Kh](Or);
        for (var n = 0; n < t[qh] && (i = Jn(t[n], pR), !(i && i[Kh](Ma)[qh] >= 8));) 1 == t[qh] && (i = Jn(t[n], jc)),
            n++;
        if (!i || i[Kh](Ma)[qh] < 8) return KR = !0,
            "" === pR || pR == pc + OR + kc + $R + Mc || pR == Ec + CR + Sc ? (tz = rz, nz = !1, sz = !1, void(VR = !1)) : (tz = rz, void(nz = !0));
        VR = i[Kh](Ma);
        var e = VR[3];
        if (e != LL) return KR = !0,
            void(sz = !0);
        nz = !1,
            sz = !1;
        var s = VR[0]; (Pc == s || Ic == s) && (KR = !1);
        var h = VR[5];
        iz = h;
        var r = VR[6];
        tz = r
    }
    function Kn() {
        var t = UR;
        if (t) {
            var i;
            t = t[Kh](Or);
            for (var n = 0; n < t[qh] && (i = fz(t[n], pR), !(i && i[Kh](Ma)[qh] >= 8));) 1 == t[qh] && (i = fz(t[n], jc)),
                n++;
            if (i[Kh](Ma)[qh] >= 8) return void(ez = !1)
        }
        return "" === pR || pR == pc + OR + kc + $R + Mc || pR == Ec + CR + Sc ? void(ez = !1) : void(ez = !0)
    }
    function te() {
        if (KR) {
            var t = eh[BR + Ya]._j7,
                i = ZR;
            eh[BR + Ya]._j7 = function() {
                t[lr](this, arguments),
                    i[Bh](this._d1, this.g)
            };
            var n = as[BR + Ya]._gs;
            as[BR + Ya]._gs = function(t) {
                n[lr](this, arguments),
                    i[Bh](this, t)
            }
        }
    }
    function ie() {
        if (iz !== !0 && iz) {
            var t = iz[Kh](Dr);
            if (3 != t[qh]) return void(gz[br]._j7 = null);
            var i = parseInt(t[0]),
                n = parseInt(t[1]),
                e = parseInt(t[2]),
                s = 3,
                h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            jR > h && (gz[br]._j7 = null)
        }
    }
    function ne() {
        var t = 0 | tz;
        t && (pB[BR + Ya]._kj = function(i, e) {
            var s = i.id;
            return s === n || this[Tc](s) ? !1 : this._j2[qh] > t ? !1 : (g(this._j2, i, e), this._lt[s] = i, i)
        })
    }
    function ee() {
        nz && (pB[BR + Ya]._kj = pB[BR + Ya]._g7)
    }
    function se() {
        ez && (as[BR + Ya]._jg = null)
    }
    function he() {
        hz && (_s[br]._jj = _s[br]._5f)
    }
    function re() {
        sz && (Dz[BR + Ya]._jg = null)
    }
    function fe() {
        VR === n && (as[BR + Ya]._jg = null)
    }
    function ae(t) {
        return t[Cc] ? (t = t[Cc], t._dt ? t._dt: t._fx === !1 ? t: null) : null
    }
    function _e(t, i, n) {
        if (n = n || i[Oc], n == t) return ! 1;
        var e = t[$c](n);
        return e || (e = new CL(t, n), t._linkedNodes[n.id] = e),
            e._i0(i, t)
    }
    function ce(t, i, n) {
        if (n = n || i[Oc], n == t) return ! 1;
        var e = t[$c](n);
        return e ? e._nfr(i, t) : void 0
    }
    function ue(t, i, e) {
        return e === n && (e = i[Oc]),
            e != t ? (t._81 || (t._81 = new pB), t._81[ir](i) === !1 ? !1 : void t._9f++) : void 0
    }
    function oe(t, i, n) {
        return t._81 && t._81[Yh](i) !== !1 ? (t._9f--, void ce(t, i, n)) : !1
    }
    function de(t, i) {
        return i[Fc] != t ? (t._97 || (t._97 = new pB), t._97[ir](i) === !1 ? !1 : void t._ndt++) : void 0
    }
    function le(t, i) {
        return t._97 && t._97[Yh](i) !== !1 ? (t._ndt--, void ce(i[Fc], i, t)) : !1
    }
    function be(t, i) {
        if (i === n && (i = t instanceof dz), i) {
            if (t[Ac]()) return null;
            var e = be(t[Nc], !1);
            if (t[qc]()) return e;
            for (var s = be(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[Bc](s)) return s;
                if (s[Bc](e)) return e;
                e = be(e, !1),
                    s = be(s, !1)
            }
            return null
        }
        for (var h = t[Cc]; null != h;) {
            if (h._hw()) return h;
            h = h[Cc]
        }
        return null
    }
    function ve(t, i, n) {
        t._hw() && t[Ah]() && t[Dh][uc](function(t) {
                t instanceof lz && i[ir](t) && ve(t, i, n)
            },
            this),
        t[Dc]() && t._dj[uc](function(t) { (null == n || n[Rc](t)) && i[ir](t) && ve(t, i, n)
        })
    }
    function ye(t, i) {
        i[Cc] ? i[Cc][zc](i, i[Cc][Lc] - 1) : t[Gc][Yc](i, t[Gc][qh] - 1)
    }
    function ge(t, i) {
        if (i instanceof dz) return void(i[Ac]() || we(t, i));
        for (ye(t, i); i = i[Cc];) ye(t, i)
    }
    function xe(t, i) {
        if (i instanceof dz) return void(i[Ac]() || we(t, i));
        for (ye(t, i); i = i[Cc];) ye(t, i)
    }
    function we(t, i) {
        var n = i[Fc];
        if (i[qc]()) ye(t, n);
        else {
            var e = i[Oc];
            ye(t, n),
                ye(t, e)
        }
    }
    function me(t, i) {
        return t._9f++,
            t._f9 ? (i._is = t._hs, t._hs._iq = i, void(t._hs = i)) : (t._f9 = i, void(t._hs = i))
    }
    function je(t, i) {
        t._9f--,
        t._hs == i && (t._hs = i._is),
            i._is ? i._is._iq = i._iq: t._f9 = i._iq,
        i._iq && (i._iq._is = i._is),
            i._is = null,
            i._iq = null,
            ce(t, i, i[Hc])
    }
    function pe(t, i) {
        return t._ndt++,
            t._hq ? (i._k2 = t._ix, t._ix._k0 = i, void(t._ix = i)) : (t._hq = i, void(t._ix = i))
    }
    function ke(t, i) {
        t._ndt--,
        t._ix == i && (t._ix = i._k2),
            i._k2 ? i._k2._k0 = i._k0: t._hq = i._k0,
        i._k0 && (i._k0._k2 = i._k2),
            i._k2 = null,
            i._k0 = null
    }
    function Me(t, i) {
        return i = i || new pB,
            t[Xc](function(t) {
                i[ir]({
                    id: t.id,
                    edge: t,
                    fromAgent: t[Wc]._dt,
                    toAgent: t[Hc]._dt
                })
            }),
            t[Vc](function(t) {
                t instanceof lz && Me(t, i)
            }),
            i
    }
    function Ee(t, i, n) {
        return Pe(t, i, n) === !1 ? !1 : Se(t, i, n)
    }
    function Se(t, i, n) {
        if (t._f9) for (var e = t._f9; e;) {
            if (i[Bh](n, e) === !1) return ! 1;
            e = e._iq
        }
    }
    function Pe(t, i, n) {
        if (t._hq) for (var e = t._hq; e;) {
            if (i[Bh](n, e) === !1) return ! 1;
            e = e._k0
        }
    }
    function Ie(t, i, e, s, h, r, f) {
        return r || f ? (r = r || 0, f = f === n ? r: f || 0, r = Math[Ia](r, s / 2), f = Math[Ia](f, h / 2), t[Uc](i + r, e), t[Qc](i + s - r, e), t[Jc](i + s, e, i + s, e + f), t[Qc](i + s, e + h - f), t[Jc](i + s, e + h, i + s - r, e + h), t[Qc](i + r, e + h), t[Jc](i, e + h, i, e + h - f), t[Qc](i, e + f), t[Jc](i, e, i + r, e), t[w_](), t) : (t[Uc](i, e), t[Qc](i + s, e), t[Qc](i + s, e + h), t[Qc](i, e + h), t[w_](), t)
    }
    function Te(t, i) {
        var n = i.r || 1,
            e = i.cx || 0,
            s = i.cy || 0,
            h = n * Math[Xa](Math.PI / 8),
            r = n * Math[Xr](Math.PI / 4);
        t[Uc](e + n, s),
            t[Jc](e + n, s + h, e + r, s + r),
            t[Jc](e + h, s + n, e, s + n),
            t[Jc](e - h, s + n, e - r, s + r),
            t[Jc](e - n, s + h, e - n, s),
            t[Jc](e - n, s - h, e - r, s - r),
            t[Jc](e - h, s - n, e, s - n),
            t[Jc](e + h, s - n, e + r, s - r),
            t[Jc](e + n, s - h, e + n, s)
    }
    function Ce(t, i, n, e, s) {
        i instanceof en && (e = i[fa], s = i[aa], n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848,
            r = e / 2 * h,
            f = s / 2 * h,
            a = i + e,
            _ = n + s,
            c = i + e / 2,
            u = n + s / 2;
        return t[Uc](i, u),
            t[Zc](i, u - f, c - r, n, c, n),
            t[Zc](c + r, n, a, u - f, a, u),
            t[Zc](a, u + f, c + r, _, c, _),
            t[Zc](c - r, _, i, u + f, i, u),
            t
    }
    function Oe(t, i, n, e, s) {
        var h = 2 * e,
            r = 2 * s,
            f = i + e / 2,
            a = n + s / 2;
        return t[Uc](f - h / 4, a - r / 12),
            t[Qc](i + .306 * e, n + .579 * s),
            t[Qc](f - h / 6, a + r / 4),
            t[Qc](i + e / 2, n + .733 * s),
            t[Qc](f + h / 6, a + r / 4),
            t[Qc](i + .693 * e, n + .579 * s),
            t[Qc](f + h / 4, a - r / 12),
            t[Qc](i + .611 * e, n + .332 * s),
            t[Qc](f + 0, a - r / 4),
            t[Qc](i + .388 * e, n + .332 * s),
            t[w_](),
            t
    }
    function $e(t, i, n, e, s) {
        return t[Uc](i, n),
            t[Qc](i + e, n + s / 2),
            t[Qc](i, n + s),
            t[w_](),
            t
    }
    function Fe(t, i, n, e, s) {
        return t[Uc](i, n + s / 2),
            t[Qc](i + e / 2, n),
            t[Qc](i + e, n + s / 2),
            t[Qc](i + e / 2, n + s),
            t[w_](),
            t
    }
    function Ae(t, i, n, e, s, h) {
        return t[Uc](i, n),
            t[Qc](i + e, n + s / 2),
            t[Qc](i, n + s),
        h || (t[Qc](i + .25 * e, n + s / 2), t[w_]()),
            t
    }
    function Ne(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t,
            e = e || 50,
            s = s || 0,
            i = i || 0,
            n = n || 0;
        for (var h, r, f = 0,
                 a = 2 * Math.PI / t,
                 _ = new fR; t > f;) h = i + e * Math[Hr](s),
            r = n + e * Math[Xr](s),
            f ? _[Qc](h, r) : _[Uc](h, r),
            ++f,
            s += a;
        return _[w_](),
            _
    }
    function qe() {
        var t = new fR;
        return t[Uc](75, 40),
            t[Zc](75, 37, 70, 25, 50, 25),
            t[Zc](20, 25, 20, 62.5, 20, 62.5),
            t[Zc](20, 80, 40, 102, 75, 120),
            t[Zc](110, 102, 130, 80, 130, 62.5),
            t[Zc](130, 62.5, 130, 25, 100, 25),
            t[Zc](85, 25, 75, 37, 75, 40),
            t
    }
    function Be() {
        var t = new fR;
        return t[Uc](20, 0),
            t[Qc](80, 0),
            t[Qc](100, 100),
            t.lineTo(0, 100),
            t[w_](),
            t
    }
    function De() {
        var t = new fR;
        return t[Uc](100, 0),
            t[Qc](100, 80),
            t[Qc](0, 100),
            t[Qc](0, 20),
            t[w_](),
            t
    }
    function Re() {
        var t = new fR;
        return t[Uc](20, 0),
            t[Qc](100, 0),
            t[Qc](80, 100),
            t[Qc](0, 100),
            t[w_](),
            t
    }
    function ze() {
        var t = new fR;
        return t[Uc](43, 23),
            t[Qc](28, 10),
            t[Qc](37, 2),
            t[Qc](63, 31),
            t[Qc](37, 59),
            t[Qc](28, 52),
            t[Qc](44, 38),
            t[Qc](3, 38),
            t[Qc](3, 23),
            t[w_](),
            t
    }
    function Le() {
        var t = new fR;
        return t[Uc](1, 8),
            t[Qc](7, 2),
            t[Qc](32, 26),
            t[Qc](7, 50),
            t[Qc](1, 44),
            t[Qc](18, 26),
            t[w_](),
            t[Uc](27, 8),
            t[Qc](33, 2),
            t[Qc](57, 26),
            t[Qc](33, 50),
            t[Qc](27, 44),
            t[Qc](44, 26),
            t[w_](),
            t
    }
    function Ge() {
        var t = new fR;
        return t[Uc](0, 15),
            t[Qc](23, 15),
            t[Qc](23, 1),
            t[Qc](47, 23),
            t[Qc](23, 43),
            t[Qc](23, 29),
            t[Qc](0, 29),
            t[w_](),
            t
    }
    function Ye() {
        var t = new fR;
        return t[Uc](0, 21),
            t[Qc](30, 21),
            t.lineTo(19, 0),
            t[Qc](25, 0),
            t.lineTo(47, 25),
            t[Qc](25, 48),
            t[Qc](19, 48),
            t[Qc](30, 28),
            t[Qc](0, 28),
            t[w_](),
            t
    }
    function He() {
        var t = new fR;
        return t.moveTo(0, 0),
            t[Qc](34, 24),
            t[Qc](0, 48),
            t[Qc](14, 24),
            t[w_](),
            t
    }
    function Xe() {
        var t = new fR;
        return t[Uc](20, 0),
            t[Qc](34, 14),
            t[Qc](20, 28),
            t[Qc](22, 18),
            t[Qc](1, 25),
            t[Qc](10, 14),
            t[Qc](1, 3),
            t[Qc](22, 10),
            t[w_](),
            t
    }
    function We() {
        var t = new fR;
        return t[Uc](4, 18),
            t[Qc](45, 18),
            t[Qc](37, 4),
            t[Qc](83, 25),
            t[Qc](37, 46),
            t[Qc](45, 32),
            t[Qc](4, 32),
            t[w_](),
            t
    }
    function Ve() {
        var t = new fR;
        return t[Uc](17, 11),
            t[Qc](27, 11),
            t[Qc](42, 27),
            t[Qc](27, 42),
            t[Qc](17, 42),
            t[Qc](28, 30),
            t[Qc](4, 30),
            t[Qc](4, 23),
            t[Qc](28, 23),
            t[w_](),
            t
    }
    function Ue() {
        vz[Kc](ED[tu], Ce(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[iu], Ie(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[nu], Ie(new fR, 0, 0, 100, 100, 20, 20)),
            vz[Kc](ED[eu], Oe(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[su], $e(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[hu], Ne(5)),
            vz[Kc](ED[ru], Ne(6)),
            vz[Kc](ED[fu], Fe(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[au], qe()),
            vz[Kc](ED[_u], Be()),
            vz[Kc](ED[cu], De()),
            vz[Kc](ED[uu], Re());
        var t = new fR;
        t[Uc](20, 0),
            t[Qc](40, 0),
            t[Qc](40, 20),
            t[Qc](60, 20),
            t[Qc](60, 40),
            t[Qc](40, 40),
            t[Qc](40, 60),
            t[Qc](20, 60),
            t[Qc](20, 40),
            t[Qc](0, 40),
            t[Qc](0, 20),
            t[Qc](20, 20),
            t[w_](),
            vz[Kc](ED[ou], t),
            vz[Kc](ED[du], Ae(new fR, 0, 0, 100, 100)),
            vz[Kc](ED[lu], ze()),
            vz[Kc](ED[bu], Le()),
            vz[Kc](ED[vu], Ge()),
            vz[Kc](ED[yu], Ye()),
            vz[Kc](ED[gu], He()),
            vz[Kc](ED[xu], Xe()),
            vz[Kc](ED[wu], We()),
            vz[Kc](ED[mu], Ve()),
            vz[Kc](ED[ju], Ae(new fR, 0, 0, 100, 100, !0))
    }
    function Qe() {
        q(this, Qe, arguments),
            this[pu] = !0
    }
    function Je() {
        q(this, Je),
            this._$u = new VB
    }
    function Ze() {
        if (this._fx === !0) {
            var t = this._81,
                i = this._97;
            if (t) for (t = t._j2; t[qh];) {
                var n = t[0];
                oe(this, n, n[Oc])
            }
            if (i) for (i = i._j2; i[qh];) {
                var n = i[0];
                le(this, n, n[Fc])
            }
            return void this[Vc](function(t) {
                t._hw() && Ze[Bh](t)
            })
        }
        var e = Me(this);
        e[uc](function(t) {
                t = t[ku];
                var i = t[Wc],
                    n = t[Hc],
                    e = i[Bc](this),
                    s = n[Bc](this);
                e && !s ? (ue(this, t), _e(this, t)) : s && !e && (de(this, t), _e(t[Fc], t, this))
            },
            this)
    }
    function Ke() {
        q(this, Ke, arguments),
            this[Mu] = null
    }
    function ts(t, i, n, e) {
        return t[i] = n,
            e ? {
                get: function() {
                    return this[i]
                },
                set: function(t) {
                    if (t !== this[i]) {
                        this[i] = t,
                            !this._ndb,
                            this._1r = !0;
                        for (var n = e[qh]; --n >= 0;) this[e[n]] = !0
                    }
                }
            }: {
                get: function() {
                    return this[i]
                },
                set: function(t) {
                    t !== this[i] && (this[i] = t)
                }
            }
    }
    function is(t, i) {
        var n = {},
            e = {};
        for (var s in i) {
            var h = i[s];
            h[Eu] && h[Eu].forEach(function(t, i, n) {
                n[i] = Su + t,
                    e[t] = !0
            }),
                n[s] = ts(t, mr + s, h[Pr], h[Eu])
        }
        for (var r in e) t[Su + r] = !0;
        Object[Br](t, n)
    }
    function ns(t, i, n, e) {
        if (Array[hr](i)) for (var s = i[qh]; --s >= 0;) ns(t, i[s], n, e);
        else {
            var h = i[Pu];
            if (h) {
                if (h instanceof gz || (h = t[h]), !h) return
            } else h = t;
            if (e || (e = t[Iu](i[Tu], n)), i[Cu] && (h[i[Cu]] = e), i[Ou]) {
                var r = i[Ou];
                r instanceof Function || (r = t[r]),
                r instanceof Function && r[Bh](t, e, h)
            }
        }
    }
    function es() {
        xz[uc](function(t) {
                this[t] = {}
            },
            this)
    }
    function ss(t, i, n, e) {
        return e == ED[$u] ? void(t[n] = i) : e == ED[Fu] ? void t[pr](n, i) : e == ED.PROPERTY_TYPE_STYLE ? void t[Au](n, i) : !1
    }
    function hs() {
        q(this, hs, arguments)
    }
    function rs() {
        q(this, rs, arguments)
    }
    function fs(t) {
        var i = Bi(!0);
        return Vn(i.g),
            i[Nu] = function() {
                return ! 1
            },
            t[qu](i),
            oi(i, Nz),
            i
    }
    function as(t) {
        this._my = t,
            k(this._my, Bu),
            t[Du] = 0,
            this._jb = fs(t),
            this[ca] = this._jb[ca] || 1,
            this._topCanvas = new eh(this, t),
            this._gw = [],
            this._nb3 = new qz,
            this._ju = new _s(this),
            this._mt = new pB;
        var i = this;
        this._mt._g7 = function(t, n, e) {
            n[Ru]();
            var s = n[zu];
            return n._hk && s && i._nb3._mo(n.$x + n[zu].x, n.$y + n[zu].y, n[zu][fa], n[zu][aa]),
                pB[br]._g7[Bh](this, t, n, e)
        },
            this._mt[Pf] = function() {
                return this[uc](function(t) {
                    t[Ru]()
                }),
                    pB[br][Pf][Bh](this)
            },
            this._nfz = [],
            this._8h = {},
            this._8j = new TB,
            this._8t = [],
            this._nf9()
    }
    function _s(t) {
        this._d1 = t,
            this._ju = new jB,
            this._ju[ca] = t[ca],
            this._73 = new TB
    }
    function cs(t, i, n, e) {
        var s = us(t, i, n, e),
            h = [];
        if (bs(t)) os(s, i, n, h, e[Lu](wz[Gu]));
        else {
            Ms(t, i, n, h, s, e);
            var r = ds(t, e),
                f = r ? ws(t, s, i, n, e[Lu](wz[Yu])) : e[Lu](wz[Hu]);
            0 == f && (s = !s)
        }
        return h
    }
    function us(t, i, n) {
        if (null != t) {
            if (t == ED[Xu] || t == ED[Wu] || t == ED[Vu] || t == ED[Uu] || t == ED[Qu]) return ! 0;
            if (t == ED[Ju] || t == ED[Zu] || t == ED[Ku] || t == ED[to] || t == ED[io]) return ! 1
        }
        var e = gs(i, n),
            s = xs(i, n);
        return e >= s
    }
    function os(t, i, n, e, s) {
        t ? Ts(i, n, e, s) : Cs(i, n, e, s)
    }
    function ds(t, i) {
        return i[Lu](wz[no])
    }
    function ls(t) {
        return null != t && (t == ED[to] || t == ED[Uu] || t == ED[io] || t == ED[Qu])
    }
    function bs(t) {
        return t && (t == ED[eo] || t == ED[Xu] || t == ED[Ju])
    }
    function vs(t, i, n, e, s) {
        if (t == ED[Vu] || t == ED[Ku]) return new EB(e.x + e[fa] / 2, e.y + e[aa] / 2);
        var h;
        if (ls(t)) {
            var r = Math[Ia](n.y, e.y),
                f = Math[Ia](n.x, e.x),
                a = Math[Ea](n[Wr], e[Wr]),
                _ = Math[Ea](n[Vr], e[Vr]);
            if (h = s[Lu](wz[Gu]), t == ED[to]) return new EB((f + _) / 2, r - h);
            if (t == ED[Uu]) return new EB(f - h, (r + a) / 2);
            if (t == ED[io]) return new EB((f + _) / 2, a + h);
            if (t == ED[Qu]) return new EB(_ + h, (r + a) / 2)
        }
        var c = ds(t, s);
        if (h = c ? ws(t, i, n, e, s[Lu](wz[Yu])) : s[Lu](wz[Hu]), h == Number[so] || h == Number[ho]) return new EB(e.x + e[fa] / 2, e.y + e[aa] / 2);
        if (0 == h) return new EB(n.x + n[fa] / 2, n.y + n[aa] / 2);
        if (i) {
            var u = n.x + n[Vr] < e.x + e[Vr];
            return new EB(ps(u, h, n.x, n.width), n.y + n[aa] / 2)
        }
        var o = n.y + n[Wr] < e.y + e[Wr];
        return new EB(n.x + n[fa] / 2, ps(o, h, n.y, n[aa]))
    }
    function ys(t, i, n, e) {
        var s = Math[Ea](i, e) - Math[Ia](t, n);
        return s - (i - t + e - n)
    }
    function gs(t, i) {
        var n = Math[Ea](t.x + t[fa], i.x + i[fa]) - Math[Ia](t.x, i.x);
        return n - t[fa] - i[fa]
    }
    function xs(t, i) {
        var n = Math[Ea](t.y + t[aa], i.y + i[aa]) - Math[Ia](t.y, i.y);
        return n - t[aa] - i[aa]
    }
    function ws(t, i, n, e, s) {
        var h = ms(s, i, n, e, null);
        return h * s
    }
    function ms(t, i, n, e) {
        return i ? js(t, n.x, n[Vr], e.x, e[Vr]) : js(t, n.y, n[Wr], e.y, e[Wr])
    }
    function js(t, i, n, e, s) {
        var h = ys(i, n, e, s),
            r = e + s > i + n;
        if (h > 0) {
            if (1 == t) return h + (s - e) / 2;
            if (t >= 0 && 1 > t) return h;
            if (0 > t) return r ? e - i: n - s
        }
        return Math[Ur](r && t > 0 || !r && 0 > t ? n - s: i - e)
    }
    function ps(t, i, n, e) {
        return t == i > 0 ? n + e + Math[Ur](i) : n - Math[Ur](i)
    }
    function ks(t, i) {
        var n = t[qh];
        if (! (3 > n)) {
            var e = i[Lu](wz[ro]);
            if (e != ED[fo]) {
                var s = i[Lu](wz[ao]),
                    h = 0,
                    r = 0;
                s && (E(s) ? h = r = s: (h = s.x || 0, r = s.y || 0));
                for (var f, a, _, c, u = t[0], o = t[1], d = null, l = 2; n > l; l++) {
                    var b = t[l],
                        v = o.x - u.x,
                        y = o.y - u.y,
                        w = b.x - o.x,
                        m = b.y - o.y,
                        j = !v || v > -TD && TD > v,
                        p = !y || y > -TD && TD > y,
                        k = !w || w > -TD && TD > w,
                        M = !m || m > -TD && TD > m,
                        S = p; (j && M || p && k) && (S ? (f = Math[Ia](2 == l ? Math[Ur](v) : Math[Ur](v) / 2, h), a = Math[Ia](l == n - 1 ? Math[Ur](m) : Math[Ur](m) / 2, r), _ = new EB(o.x - (v > 0 ? f: -f), o.y), c = new EB(o.x, o.y + (m > 0 ? a: -a))) : (f = Math[Ia](l == n - 1 ? Math[Ur](w) : Math[Ur](w) / 2, h), a = Math[Ia](2 == l ? Math[Ur](y) : Math[Ur](y) / 2, r), _ = new EB(o.x, o.y - (y > 0 ? a: -a)), c = new EB(o.x + (w > 0 ? f: -f), o.y)), x(t, o), l--, n--, (_.x != u.x || _.y != u.y) && (g(t, _, l), l++, n++), e == ED[_o] ? (g(t, c, l), l++, n++) : e == ED[co] && (g(t, [o, c], l), l++, n++)),
                        u = o,
                        o = b
                }
                null != d && c.x == o.x && c.y == o.y && x(t, o)
            }
        }
    }
    function Ms(t, i, n, e, s, h) {
        var r = h[Lu](wz[uo]),
            f = null == r;
        if (null != r) {
            var a = (new TB)[oo](i)[oo](n);
            a[lo](r) || (s = Es(r.x, r.y, a.y, a.x, a[Wr], a[Vr]))
        } else r = vs(t, s, i, n, h);
        s ? Is(i, n, r, e, f) : Ps(i, n, r, e, f)
    }
    function Es(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
    }
    function Ss(t, i, n) {
        return i >= t.x && i <= t[Vr] && n >= t.y && n <= t[Wr]
    }
    function Ps(t, i, n, e, s) {
        var h = Math.max(t.y, i.y),
            r = Math[Ia](t.y + t[aa], i.y + i[aa]),
            f = null != n ? n.y: r + (h - r) / 2,
            a = t.x + t[fa] / 2,
            _ = i.x + i[fa] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[fa] && (a = n.x), n.x >= i.x && n.x <= i.x + i[fa] && (_ = n.x)), Ss(i, a, f) || Ss(t, a, f) || e[Xh](new EB(a, f)), Ss(i, _, f) || Ss(t, _, f) || e[Xh](new EB(_, f)), 0 == e[qh]) if (null != n) Ss(i, n.x, f) || Ss(t, n.x, f) || e[Xh](new EB(n.x, f));
        else {
            var c = Math[Ea](t.x, i.x),
                u = Math[Ia](t.x + t[fa], i.x + i[fa]);
            e[Xh](new EB(c + (u - c) / 2, f))
        }
    }
    function Is(t, i, n, e, s) {
        var h = Math[Ea](t.x, i.x),
            r = Math[Ia](t.x + t[fa], i.x + i[fa]),
            f = null != n ? n.x: r + (h - r) / 2,
            a = t.y + t[aa] / 2,
            _ = i.y + i[aa] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[aa] && (a = n.y), n.y >= i.y && n.y <= i.y + i[aa] && (_ = n.y)), Ss(i, f, a) || Ss(t, f, a) || e[Xh](new EB(f, a)), Ss(i, f, _) || Ss(t, f, _) || e[Xh](new EB(f, _)), 0 == e[qh]) if (null != n) Ss(i, f, n.y) || Ss(t, f, n.y) || e[Xh](new EB(f, n.y));
        else {
            var c = Math[Ea](t.y, i.y),
                u = Math[Ia](t.y + t[aa], i.y + i[aa]);
            e[Xh](new EB(f, c + (u - c) / 2))
        }
    }
    function Ts(t, i, n, e) {
        var s = i.x + i[fa] < t.x,
            h = t.x + t[fa] < i.x,
            r = s ? t.x: t.x + t[fa],
            f = t.y + t[aa] / 2,
            a = h ? i.x: i.x + i[fa],
            _ = i.y + i[aa] / 2,
            c = e,
            u = s ? -c: c,
            o = new EB(r + u, f);
        u = h ? -c: c;
        var d = new EB(a + u, _);
        if (s == h) {
            var l = s ? Math[Ia](r, a) - e: Math[Ea](r, a) + e;
            n[Xh](new EB(l, f)),
                n[Xh](new EB(l, _))
        } else if (o.x < d.x == s) {
            var b = f + (_ - f) / 2;
            n[Xh](o),
                n[Xh](new EB(o.x, b)),
                n[Xh](new EB(d.x, b)),
                n[Xh](d)
        } else n[Xh](o),
            n[Xh](d)
    }
    function Cs(t, i, n, e) {
        var s = i.y + i[aa] < t.y,
            h = t.y + t[aa] < i.y,
            r = t.x + t[fa] / 2,
            f = s ? t.y: t.y + t[aa],
            a = i.x + i[fa] / 2,
            _ = h ? i.y: i.y + i[aa],
            c = e,
            u = s ? -c: c,
            o = new EB(r, f + u);
        u = h ? -c: c;
        var d = new EB(a, _ + u);
        if (s == h) {
            var l = s ? Math[Ia](f, _) - e: Math[Ea](f, _) + e;
            n[Xh](new EB(r, l)),
                n[Xh](new EB(a, l))
        } else if (o.y < d.y == s) {
            var b = r + (a - r) / 2;
            n[Xh](o),
                n[Xh](new EB(b, o.y)),
                n[Xh](new EB(b, d.y)),
                n[Xh](d)
        } else n[Xh](o),
            n[Xh](d)
    }
    function Os(t) {
        return t == ED[bo] || t == ED[Wu] || t == ED[Vu] || t == ED[Zu] || t == ED[Ku] || t == ED[to] || t == ED[Uu] || t == ED[io] || t == ED[Qu] || t == ED[eo] || t == ED[Xu] || t == ED[Ju]
    }
    function $s(t, i) {
        var n, e;
        i && i[fa] && i[aa] ? (n = i[fa], e = i[aa]) : n = e = isNaN(i) ? mB[vo] : i;
        var s = vz[yo](t, -n, -e / 2, n, e);
        return s || (s = new fR, s[Uc]( - n, -e / 2), s[Qc](0, 0), s[Qc]( - n, e / 2)),
            s
    }
    function Fs(t, i) {
        var n = Math[Xr](i),
            e = Math[Hr](i),
            s = t.x,
            h = t.y;
        return t.x = s * e - h * n,
            t.y = s * n + h * e,
            t
    }
    function As(t, i, n, e, s, h) {
        var r = Math[Yr](e - i, n - t),
            f = new EB(s, h);
        return f[Ha] = r,
            Fs(f, r),
            f.x += t,
            f.y += i,
            f
    }
    function Ns(t, i, n, e, s) {
        i = si(e, i.x, i.y, n.x, n.y),
            n = si(s, n.x, n.y, i.x, i.y);
        var h = Math.PI / 2 + Math[Yr](n.y - i.y, n.x - i.x),
            r = t * Math[Hr](h),
            f = t * Math[Xr](h),
            a = n.x - i.x,
            _ = n.y - i.y,
            c = i.x + .25 * a,
            u = i.y + .25 * _,
            o = i.x + .75 * a,
            d = i.y + .75 * _;
        return [new hR(nR, [c + r, u + f, o + r, d + f])]
    }
    function qs(t, i, e) {
        if (g(t, new hR(KD, [i.x, i.y]), 0), e) {
            if (t[qh] > 1) {
                var s = t[t[qh] - 1];
                if (iR == s[Ya] && (s[Yf][2] === n || null === s[Yf][2])) return s[Yf][2] = e.x,
                    void(s[Yf][3] = e.y);
                if (nR == s[Ya] && (s[Yf][4] === n || null === s[Yf][4])) return s[Yf][4] = e.x,
                    void(s[Yf][5] = e.y)
            }
            t[Xh](new hR(tR, [e.x, e.y]))
        }
    }
    function Bs(t, i, n, e, s, h, r, f) {
        return i[go]() ? void(n._fg = i._9r[xo]()) : e == s ? void t[wo](n, e, h, r) : void t[mo](n, e, s, h, r, f)
    }
    function Ds(t, i, n, e, s) {
        var h = e == s,
            r = t[jo][mf](e),
            f = h ? r: t[jo][mf](s),
            a = i[po],
            _ = r[ko][Hh](),
            c = h ? _: f[ko][Hh](),
            u = i[go]();
        if (!h && !a && !u) {
            var o = e[pu],
                d = s[pu];
            if (o != d) {
                var l, b, v, y, g = i[Mo];
                o ? (l = r, b = _, v = f, y = c) : (l = f, b = c, v = r, y = _);
                var x = Hs(b, l, o, v, y, g);
                if (x && 2 == x[qh]) {
                    var w = x[0],
                        m = x[1];
                    return n[Uc](w.x, w.y),
                    m.x == w.x && m.y == w.y && (m.y += .01),
                        n[Qc](m.x, m.y),
                        void(n._6l = !0)
                }
            }
        }
        Bs(t, i, n, r, f, a, _, c),
        (!h || u) && Rs(t, i, n, r, f, a, _, c),
            n._6l = !0
    }
    function Rs(t, i, e, s, h, r, f, a) {
        var _ = e._fg,
            c = f[Eo],
            u = a[Eo];
        if (_[qh]) {
            var o = _[0],
                d = o[So],
                l = _[_[qh] - 1],
                b = l[Ga];
            f[Po](d.x, d.y) && (o[Ya] == nR ? (c = d, d = {
                x: o[Yf][2],
                y: o[Yf][3]
            },
                o[Yf] = o[Yf][Rh](2), o[Ya] = iR) : o[Ya] == iR && (c = d, d = {
                x: o[Yf][0],
                y: o[Yf][1]
            },
                o[Yf] = o[Yf][Rh](2), o[Ya] = tR)),
                zs(s, f, d, c, n, n);
            var v, y = l[Yf][qh],
                g = b.x === n || b.y === n;
            y >= 4 && (g || a[Po](b.x, b.y)) && (g || (u = b), v = !0, b = {
                x: l[Yf][y - 4],
                y: l[Yf][y - 3]
            },
            a[Po](b.x, b.y) && (u = b, y >= 6 ? (b = {
                x: l[Yf][y - 6],
                y: l[Yf][y - 5]
            },
                l[Yf] = l[Yf][Rh](0, 4), l[Ya] = iR) : 1 == _[qh] ? (b = {
                x: c.x,
                y: c.y
            },
                l[Yf] = l[Yf][Rh](0, 2), l[Ya] = tR) : (l = _[_[qh] - 2], b = l[Ga]))),
                zs(h, a, b, u, n, n),
            v && (y = l[Yf][qh], l[Yf][y - 2] = u.x, l[Yf][y - 1] = u.y, u = null)
        } else {
            var x = Math[Yr](u.y - c.y, u.x - c.x),
                w = Math[Hr](x),
                m = Math[Xr](x);
            zs(s, f, u, c, w, m),
                zs(h, a, c, u, -w, -m)
        }
        qs(e._fg, c, u)
    }
    function zs(t, i, e, s, h, r) {
        if (h === n) {
            var f = Math[Yr](e.y - s.y, e.x - s.x);
            h = Math[Hr](f),
                r = Math[Xr](f)
        }
        for (e = {
            x: e.x,
            y: e.y
        },
             i[Po](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i[Po](e.x, e.y)) return s;
            if (t._hn(e.x - h, e.y - r)) {
                s.x = e.x - h / 4,
                    s.y = e.y - r / 4;
                break
            }
            e.x -= h,
                e.y -= r
        }
        return s
    }
    function Ls(t, i, n, e, s, h, r, f) {
        if (i[go]()) return i._9r;
        var a = i[po];
        if (Os(a)) {
            var _ = cs(a, n, e, t, s, h);
            if (!_ || !_[qh]) return null;
            g(_, r, 0),
                _[Xh](f),
            a != ED.EDGE_TYPE_ELBOW && ks(_, t);
            for (var c = [], u = _[qh], o = 1; u - 1 > o; o++) {
                var d = _[o];
                c[Xh](I(d) ? new hR(iR, [d[0].x, d[0].y, d[1].x, d[1].y]) : new hR(tR, [d.x, d.y]))
            }
            return c
        }
        if (i[Io]) {
            var l = t._2o();
            if (!l) return;
            return Ns(l, r, f, n, e)
        }
    }
    function Gs(t, i, n) {
        var e = t[Lu](wz[To]),
            s = t._2o(),
            h = e + .2 * s,
            r = i.x + i[fa] - h,
            f = i.y,
            a = i.x + i[fa],
            _ = i.y + h;
        e += s;
        var c = .707,
            u = -.707,
            o = i.x + i[fa],
            d = i.y,
            l = o + c * e,
            b = d + u * e,
            v = {
                x: r,
                y: f
            },
            y = {
                x: l,
                y: b
            },
            g = {
                x: a,
                y: _
            },
            x = v.x,
            w = y.x,
            m = g.x,
            j = v.y,
            p = y.y,
            k = g.y,
            M = ((k - j) * (p * p - j * j + w * w - x * x) + (p - j) * (j * j - k * k + x * x - m * m)) / (2 * (w - x) * (k - j) - 2 * (m - x) * (p - j)),
            E = ((m - x) * (w * w - x * x + p * p - j * j) + (w - x) * (x * x - m * m + j * j - k * k)) / (2 * (p - j) * (m - x) - 2 * (k - j) * (w - x)),
            h = Math[Pa]((x - M) * (x - M) + (j - E) * (j - E)),
            S = Math[Yr](v.y - E, v.x - M),
            P = Math[Yr](g.y - E, g.x - M),
            I = P - S;
        return 0 > I && (I += 2 * Math.PI),
            Ys(M, E, S, I, h, h, !0, n)
    }
    function Ys(t, i, n, e, s, h, r, f) {
        var a, _, c, u, o, d, l, b, v, y, g;
        if (Math[Ur](e) > 2 * Math.PI && (e = 2 * Math.PI), o = Math[Gh](Math[Ur](e) / (Math.PI / 4)), a = e / o, _ = a, c = n, o > 0) {
            d = t + Math[Hr](c) * s,
                l = i + Math[Xr](c) * h,
                moveTo ? f[Uc](d, l) : f[Qc](d, l);
            for (var x = 0; o > x; x++) c += _,
                u = c - _ / 2,
                b = t + Math[Hr](c) * s,
                v = i + Math[Xr](c) * h,
                y = t + Math[Hr](u) * (s / Math[Hr](_ / 2)),
                g = i + Math[Xr](u) * (h / Math[Hr](_ / 2)),
                f[Jc](y, g, b, v)
        }
    }
    function Hs(t, i, e, s, h, r) {
        var f = h.cx,
            a = h.cy,
            _ = f < t.x,
            c = f > t[Vr],
            u = a < t.y,
            o = a > t[Wr],
            d = t.cx,
            l = t.cy,
            b = _ || c,
            v = u || o,
            y = r === n || null === r;
        y && (r = Math[Yr](a - l, f - d), b || v || (r += Math.PI));
        var g = Math[Hr](r),
            x = Math[Xr](r),
            w = Ws(i, t, {
                    x: f,
                    y: a
                },
                -g, -x);
        w || (r = Math[Yr](a - l, f - d), b || v || (r += Math.PI), g = Math[Hr](r), x = Math[Xr](r), w = Ws(i, t, {
                    x: f,
                    y: a
                },
                -g, -x) || {
                x: d,
                y: l
            });
        var m = Ws(s, h, {
                x: w.x,
                y: w.y
            },
                -w[Co] || g, -w[Oo] || x, !1) || {
                x: f,
                y: a
            };
        return e ? [w, m] : [m, w]
    }
    function Xs(t, i, n, e, s, h) {
        var r = i < t.x,
            f = i > t[Vr],
            a = n < t.y,
            _ = n > t[Wr];
        if (r && e > 0) {
            var c = t.x - i,
                u = n + c * s / e;
            if (u >= t.y && u <= t[Wr]) return {
                x: t.x,
                y: u,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > e) {
            var c = t[Vr] - i,
                u = n + c * s / e;
            if (u >= t.y && u <= t[Wr]) return {
                x: t[Vr],
                y: u,
                perX: e,
                perY: s
            }
        }
        if (a && s > 0) {
            var o = t.y - n,
                d = i + o * e / s;
            if (d >= t.x && d <= t[Vr]) return {
                x: d,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (_ && 0 > s) {
            var o = t[Wr] - n,
                d = i + o * e / s;
            if (d >= t.x && d <= t[Vr]) return {
                x: d,
                y: t[Wr],
                perX: e,
                perY: s
            }
        }
        return h !== !1 ? Xs(t, i, n, -e, -s, !1) : void 0
    }
    function Ws(t, i, n, e, s, h) {
        if (!i[Po](n.x, n.y)) {
            if (n = Xs(i, n.x, n.y, e, s, h), !n) return;
            return Vs(t, i, n, n[Co], n[Oo])
        }
        return h === !1 ? Vs(t, i, n, e, s) : Vs(t, i, {
                x: n.x,
                y: n.y,
                perX: e,
                perY: s
            },
            e, s) || Vs(t, i, n, -e, -s)
    }
    function Vs(t, i, n, e, s) {
        for (;;) {
            if (!i[Po](n.x, n.y)) return;
            if (t._hn(n.x + e, n.y + s)) break;
            n.x += e,
                n.y += s
        }
        return n
    }
    function Us(t) {
        return mn(t) ? t: t[$o](/.(gif|jpg|jpeg|png)$/gi) ? t: (t = Z(t), t instanceof Object && t[Ja] ? t: void 0)
    }
    function Qs(t) {
        for (var i = t[Cc]; i;) {
            if (i[Fo]) return i;
            i = i[Cc]
        }
        return null
    }
    function Js() {
        q(this, Js, arguments)
    }
    function Zs(t, n, e, s, h, r, f) {
        var a = i[ga](Ao);
        a[Uh] = No,
            oi(a, Lz),
        n && oi(a, n);
        var _ = i[ga](qo);
        return r && (bB ? _[Bo] = r: _[Do] = r),
            _[Er] = f,
            _[Ro] = e,
            oi(_, Gz),
        h && oi(_, h),
        s && di(_, zo, Lo),
            a._img = _,
            a[qu](_),
            t[qu](a),
            a
    }
    function Ks(t, n) {
        this._navPane = i[ga](Ao),
            this._navPane[Uh] = Go,
            oi(this._navPane, {
                "background-color": Yo,
                overflow: Ho,
                "float": yf,
                "user-select": Xo,
                position: Wo
            }),
            this._top = Zs(this._navPane, {
                    width: Vo
                },
                mB[Uo], !1, null, n, gf),
            this._left = Zs(this._navPane, {
                    height: Vo
                },
                mB[Qo], !1, Yz, n, yf),
            this._right = Zs(this._navPane, {
                    height: Vo,
                    right: Jo
                },
                mB[Qo], !0, Yz, n, Vr),
            this._nbottom = Zs(this._navPane, {
                    width: Vo,
                    bottom: Jo
                },
                mB[Uo], !0, null, n, Wr),
            t[qu](this._navPane)
    }
    function th(t, i) {
        this._d1 = t;
        var n = function(i) {
            var n, e, s = i[Pu],
                h = s[Er];
            if (yf == h) n = 1;
            else if (Vr == h) n = -1;
            else if (gf == h) e = 1;
            else {
                if (Wr != h) return;
                e = -1
            }
            bB && (s[Uh] = Zo, setTimeout(function() {
                    s[Uh] = ""
                },
                100)),
                O(i),
                t._kc._9m(n, e)
        };
        Ks[Bh](this, i, n),
            this._3p(i[Ko], i[td])
    }
    function ih(t, i) {
        this._d1 = t,
            this[id](i, t)
    }
    function nh() {
        q(this, nh, arguments)
    }
    function eh(t, i) {
        this._d1 = t,
            this._jb = fs(i),
            this.g = this._jb.g,
            this._9l = new pB
    }
    function sh(t) {
        var i = t[nd],
            n = [];
        return t[ed][uc](function(i) {
            t[sd](i) && t[hd](i) && n[Xh](i)
        }),
            i[pr](n)
    }
    function hh(t, i, e, s) {
        s === n && (s = mB[rd]);
        var h = t[fd](i);
        return e ? t[ad](h.x, h.y, s) : t[_d](h.x, h.y, s)
    }
    function rh(t, i, n) {
        var e = t[$a];
        n = n || e,
            i = i || 1;
        var s = null;
        s && n[fa] * n[aa] * i * i > s && (i = Math[Pa](s / n[fa] / n[aa]));
        var h = Bi();
        Vn(h.g),
            h[fa] = n[fa] * i,
            h[aa] = n[aa] * i,
            t._8g._gs(h.g, i, n);
        var r = null;
        try {
            r = h[cd](ud)
        } catch(f) {
            MD[Gr](f)
        }
        return {
            canvas: h,
            data: r,
            width: h[fa],
            height: h[aa]
        }
    }
    function fh(t) {
        this[jo] = t,
            this[od] = t[od]
    }
    function ah(t, i) {
        this[dd] = t,
            this[ld] = i || bd
    }
    function _h() {
        q(this, _h, arguments)
    }
    function ch(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }
    function uh() {
        q(this, uh, arguments)
    }
    function oh() {
        q(this, oh, arguments)
    }
    function dh() {
        q(this, dh, arguments)
    }
    function lh() {
        q(this, lh, arguments)
    }
    function bh(i, n, e) {
        i += t[df],
            n += t[bf];
        var s = e[cf]();
        return {
            x: i + s[yf],
            y: n + s[gf]
        }
    }
    function vh(t, i, n) {
        var e = t[vd],
            s = t[yd];
        t[sf][yf] = i - e / 2 + ua,
            t[sf][gf] = n - s / 2 + ua
    }
    function yh(t) {
        var n = i[ga](oa),
            e = n[xa](wa),
            s = getComputedStyle(t, null),
            h = s[pa];
        h || (h = s[gd] + tr + s[xd] + tr + s[wd]),
            e[pa] = h;
        var r = t[Pr],
            f = r[Kh](Ma),
            a = parseInt(s[xd]),
            _ = 0,
            c = 0;
        return MD[uc](f,
            function(t) {
                var i = e[Sa](t)[fa];
                i > _ && (_ = i),
                    c += 1.2 * a
            }),
        {
            width: _,
            height: c
        }
    }
    function gh(t, n) {
        if (t[md](), nr == typeof t[jd] && nr == typeof t[pd]) {
            var e = t[Pr],
                s = t[jd];
            t[Pr] = e[Rh](0, s) + n + e[Rh](t[pd]),
                t[pd] = t[jd] = s + n[qh]
        } else if (kd != typeof i[Md]) {
            var h = i[Md][Ed]();
            h[Sd] = n,
                h[Pd](!1),
                h[Id]()
        }
    }
    function xh() {}
    function wh(t) {
        this[jo] = t,
            this[od] = t[od],
            this[Td] = bB ? 8 : 5
    }
    function mh(t) {
        this[jo] = t,
            this[od] = t[od],
            this[Td] = bB ? 8 : 4,
            this._rotateHandleLength = bB ? 30 : 20
    }
    function jh(t, i) {
        var n = new TB;
        return n[_a](zn[Bh](t, {
            x: i.x,
            y: i.y
        })),
            n[_a](zn[Bh](t, {
                x: i.x + i[fa],
                y: i.y
            })),
            n[_a](zn[Bh](t, {
                x: i.x + i[fa],
                y: i.y + i[aa]
            })),
            n[_a](zn[Bh](t, {
                x: i.x,
                y: i.y + i[aa]
            })),
            n
    }
    function ph(t) {
        t %= 2 * Math.PI;
        var i = Math[Aa](t / Wz);
        return 0 == i || 4 == i ? "ew-resize": 1 == i || 5 == i ? "nwse-resize": 2 == i || 6 == i ? "ns-resize": Cd
    }
    function kh(n, e, s) {
        var h = i[Od],
            r = new MD[$d](t[df], t[bf], h[Ko] - 2, h[td] - 2),
            f = n.offsetWidth,
            a = n[yd];
        e + f > r.x + r[fa] && (e = r.x + r[fa] - f),
        s + a > r.y + r[aa] && (s = r.y + r[aa] - a),
        e < r.x && (e = r.x),
        s < r.y && (s = r.y),
            n[sf][yf] = e + ua,
            n[sf][gf] = s + ua
    }
    function Mh(t, i, n, e, s) {
        this[r_] = t,
            this[Ya] = Fd,
            this[Ad] = i,
            this[rr] = n,
            this[za] = e,
            this[Nd] = s
    }
    function Eh(t) {
        this._4p = {},
            this._kc = t,
            this._kc._1w[qd](this._94, this),
            this[Bd] = ED[Dd]
    }
    function Sh(t) {
        return t >= 10 && 20 > t
    }
    function Ph(t) {
        return t == cL || t == dL
    }
    function Ih() {
        var t = {},
            i = [],
            n = 0,
            e = {},
            s = 0;
        this[jo][uc](function(h) {
                if (this[Rd](h)) if (h instanceof lz) {
                    var r = {
                        node: h,
                        id: h.id,
                        x: h.x,
                        y: h.y
                    };
                    this[zd] && this[zd](h, r),
                        t[h.id] = r,
                        i[Xh](r),
                        n++
                } else if (h instanceof dz && !h[qc]() && h[Fc] && h[Oc]) {
                    var r = {
                        edge: h
                    };
                    e[h.id] = r,
                        s++
                }
            },
            this);
        var h = {};
        for (var r in e) {
            var f = e[r],
                a = f[ku],
                _ = a[Fc],
                c = a[Oc],
                u = _.id + Ld + c.id,
                o = c.id + Ld + _.id;
            if (t[_.id] && t[c.id] && !h[u] && !h[o]) {
                var d = t[_.id],
                    l = t[c.id];
                f[Nc] = d,
                    f.to = l,
                    h[u] = f,
                this[Gd] && this[Gd](a, f)
            } else delete e[r],
                s--
        }
        return {
            nodesArray: i,
            nodes: t,
            nodeCount: n,
            edges: e,
            edgeCount: s,
            minEnergy: this[Yd](n, s)
        }
    }
    function Th(t) {
        this[jo] = t,
            this[Hd] = {}
    }
    function Ch() {
        q(this, Ch, arguments)
    }
    function Oh(t, i, n, e, s) {
        e ? t[Xc](function(e) {
                var h = e[Xd](t);
                h != n && h._marker != s && i(h, t)
            },
            this, !0) : t[Wd](function(e) {
            var h = e[Oc];
            h != n && h._marker != s && i(h, t)
        })
    }
    var $h = "abb1bc733d53d69d0ef17812fb3068c56bd7b986a7eee204230f37b3d30b897619d027d30640edaad04b542f31dc6a0fda9c10efdcb69051be283cd3236c93ade6c1513cb63fb3be4ec3427edb923df1742959e1e56dc28917bd36ffb134557104ee0959debed7c934e6c68516dd1901b2207afae30ac7744c95d50a0d95bb474df9eab3b842c1514688ccb055c8b4f9b76b39222fb13aa19ce9314d3e59ea454bf7324deeb301b97022d751a9ffb88d485a27d8faad007b809071f8d56fea8a02256a100ae9a108f1e575b8da4dbd4b7d8b859768066f4c97abbcadf504364619fca781a72989e01882f78fc02c9c80540a5d372124a271fabafe28d7a8984848a1c6e4b8e392acf539356599c69d75db48ab79b3bc1b7c78893788dd0681b5f87c3b14c5338c6f8253af4b7e075de9cdaa21509308401d6080c12ecc4115f3da29181feabec7a07d5ad0c4017463e2f11b53c0aad64914ec15e966e656821d8dd548c4e8c6abb00c389a00b6549852d97fa4913f776e5664845251c10b149cb31b033f90240d051b2a94b33b2793778a2c782e7e4032f17825a98816be7bdf1488490b70338288904f4f4c27020ddea3c88ba15f8de4391d9e5189346cc0f013ec228959e6d65e86a0423c6df071e0d665343f31d2b4248c60968cd7ad1785d995eda3e8ca2c7f7f0d5f19a27dacb06db9b74dd0d5818a1dd72124c95720a3b625fa38de0763c1d685c4cae684b273960485a65c1a56d6bb504826b33bf57cc7a563f57d60eb34c4aae889e767e85a0294ff08f1ef2ba3bf1045ed3b7f4e637f5329b101d118676bd36f92da4119cf6622a134f0b1552a9916d3a8800f313229123e732fc25105723bfdf09877de5b6387c236d87bdae87bda1f062c9aa38a014174c1ffc3ca5d259b6f31d171bcbfc7c09208eceb586dad78141f25a2d11d1a4968882281d06a1373d07eae2a2f91f9b9dd529b3ae8b45f097277529248a2059128827b34d89374d854fe6cd97e053b3858f67d8f046e3a3aa8ae19c5d3dbb54dcebbd9f3f3315ce4154cbf6dcc05b90766421a820c8cd5b1b85fb85ac20846de8a381b819e284826a258b64252d20e59f6199b116a8df2fee4cdba9d48dbf03286970d1942cc4cc1a066984e11991be88577e25ff2f4ef9d663710c6fb4594f8116764fe39f343246728e182075c6831f5b576f293c80532e5d0c6209e30347762035ab6f3c3754caf96c489468d1feb9ab0ddff217120c654f6648e0aa73d1e6ef9e8eec50f688ab62d00dde8139249147c2e06355ea9efbd3981ea69d07e8bd6815ba41becf8b48f87fe9772b1f4200e6ef722791db04aea08d070b81530aac1e4289a8f2df2d21321ba02a2ff1ef74cc2b47f603bdbc1e095730af9b1fd5190f7cfdf440ac6edd0a2cfb1e981a919b8c2535a20a9521dcc7dea4f0b538f05051e1e8fb683d2a7144bab371b6ae8110115b71de108667f2f6e495b0b6f9d3ae2c4b7be86a800cc36a99977b30574752383378beb15c0e7c9044baebc02858e9ee8d3f0cc057cc761a825bb4d4d5943c3577ed4ee56e4ba223ae7084cd1d561bab8ab68462a8a8438171e8ab8ac8d8788b80a9330f2a6e2360e998496c179ff0114e8aa8a1504d34cfdc4a7a63f2ad2f33ca80f5efab58cfe1834c89d6e4053ea5f98e89de64020613a3fc03ca5711327eb688852888e34c6c92192cd4a9e0bf87c6097df728669368249d969d1af17b1ec26c4a09bf35c04f90ed0d1f5c7aeca7e1e15b8931164a81a95f42a893eb11e7e642ab099ecdb4a426c7d47d44f5c96094849d28af1fb5e90bb2aefea2d3d67493a3ec131602612712b41e1b493d16b5d95cd4a51bb4987be131cf5576486f395d14c75f1f5934f712dd0b47c8abc6e9738c2a1783ef1b360ff1a10134aedd6f75ba4a0a10d352459de5f62dd4296bec475b6e4736094e4d7600abdfef2af1be76758791cc5bc6acaecf8c7da2903901534b5e36628e21f7ea75aa76300e0a14ae7a86397c2e38acae8a8825b59f492e24e351f496c2c6ad5ba815ef2e3517c5bcc02f6afc89c09963557714427962b8294f404c7c51a5a56ae744cd5bb6e5602387f50acdd9f1744fa8bdc12b92928f5637988f80c96830b79ec91c06b7fcf61648bf32dd7b11c0c7ac76120abd4f526c0b62e6a9952f35c70430854c94fcba3ecf7e0f7d6917f233c3bb6ec941c7d409f64c666d779e960f6208bb6e25c609898235842e2d8aee85290331a20ee8d7242a53735eec09d252c0e1beffe01249dd3a974a7bfbb6adc4070a928c481ce8ba3aeb8d933f6a70c3aedfcbd4ef987cb5a75f125908886a77ea88fb279f46b2b8264fb9648fef9b96f89a3ef27c5aac95b69a1da9b9dd055a92f2575ed5ab5b487c239a43fb017c034a276115b9c8191316731d251fb83e9b71107a3e05df5f0e22da4ca355d517e273488c0510f74d6ec313db0412b9459fbf84ec85aef436afa155fe2b5aa1ce04f3f2467ff84ee22103bbd82d772f56ada804feabacf73f4739503cbe729294da4ade72506c524d6a4bee894f9a9d08e9971a392b13ac7da6e29c114474821f393f3065a21ebb04491951968574c071ab05cf6d85dd4cc0434f871d818ab08a3a84f477d62ae702b323cea3fcae1407a5b1ad053ce55704de7f8db1d971aa9ae5f3444a1b44a18c693c382ad6e571d4d083a58a25e082ad4adc82e0fcd7432e2fce164823a904f395bfe64da8ea7438294bf6e35e535123c7671027d54821029c27ec792fbb6f847841eb30bf3a016079109a442c60d098489552a68e211c5cff59fb92d435019cce76a8d39283a5f6bc230ad1ce6a14513b706e2f4a30bf9dd1cc9914e9e84f9ea7580b955572abe2337ffe17e3fb8e1f642a61cd5dee3d9932df97e6d138026db7cfa6ad9b27f8374282d4587fbebc39c065cdccbf7051fc7b900dc0bb0b085500270318378eef94d48014633d2a22a386f6807d4765c00df5a41a6bb2c818be96dc025887063243c04aa20158597d0b92db67fe16f819d6ee317f2526257dd29aa272c2867e456d118e4c3e285e8e1c476fc8aaf81675c00252f77d8c0eb216336afed1c437994313512073b271d4caec4c75780b235360977a3cfdf83767b3d6a9392fe34a3313663f5bb445ad45ef4dbf6d30ff536f47b257aaac0b7b14f7df362523ec8d5e150a074e966344d9a020e7654a9a425a4ea787564650b3a44630ca917809b140ed64f63a3b013dc04e5c0fcaaba4fc63b1f40f93979cdf03b5a68c0f7d6c1badf29cc49b777c9545eadee6f10978f61965797338b322025c5209371c7891967c74f9639e50e19073295be305a6145f410f80d8a5a585eb04c059d66be5ac036df3e12dd2f44e6cef90b5fa2036266f290b35bd8bcea8847ac7b769d3b2b1f5530f3940c0b9712efc6142c0baab8bd9167be3468f2b918b93d9ec882c52aea1db011d5054bc5e0e8b8089ae30b17a8e523e3b18751241d9f7925e426bb6df4743b63c4969e3aaec73f31e5829505ce9353296130132109fdae2ce1bd836d068221f565bb9419950ab22972dd561f268ce595a9220876e2b5b8f386cdd6ad62f5f2fc184c872cd1ea5d41c537cda8ce9b20f3873d316fb4e17d8ffea40490d83cb104339c6d644a0d6d2b00a7c86de7abce37569b2eed508573d24952606e7e6d160a91d70069e5fff8898770cda23bbd2b107b2dd0539d1b4927ba0eccc86baabd59de20e1b6c359cae3d61c6b1d010f85ca20bc70aa34055aa6fb590b802970920ffac92333f7f73b4ed01d566ed78834316a4871bc0038791dadf8a9cc41f53ef349a376fe9a591dc892c81868186f185d0c5e5757bda51958fde13d08e2f4a91b1fa096977e09f28f1c834c6b230662763ff891d76d1b36cb42552af8478deddcbb30037b264531c1acb2b28c83d46fac8523e8a343d11e3622387f89eb42c6a6245b5a43742c6c7a59fb63364bd639ee176f38ace80526c192ebcb6e67443aa283d7a7c46d03944bd9b708c887070c5d09e06c02482fb5e10333f5bea15e425413bb514e18b78c23ad44284741a270341c5330c7b84b6f83a99c41dc091531c63c84de7a11a5a4ec380127676417d3c387177dad582356c15f53c0b382980685a5cc2550f9cdc4b6dfa4f3e586331cba6d7f3232f12525892407bada5890fb53b68cebefd089b55ed39318a62993af0c6c5ae239431b4fb94c602ce2a16eec2f90453d62504295e49bded9401e26c6f0512d80f892b924db18ba87b18149d961aea032ba3c1404b46ab40e6e70cfe125ca3fd8b49af51ec4a57eb98adca7ee6f4fcff5a268a08fefc0868ac3bba2eabca0f31f6080e2c383ce0b7bc21cb58b55af15d485ac50ed3b3cf2064a21fb0ede17520940ccd579e9ceafd92ee4ca75d41323d26678861cb369c36f867c8eb9ea6244a38cf6ba64ed91ff84f68466d1b10c74d15a3b180fd54eb80aceaa5f7f8c85864647b4b0dbcdf6688836c188d9841706758a69b195d48cdf37cd237206179b4181fc180ab93a5d3dda7d8924cb7422a763eb7fd14ba101fe9fd5a364b49165be005cf6f102519bf8fe818b0969cd4875811cd0b9e6d7f357d3bd38f0c265c37b70153b04cf1c7a34e2f4b5019eba90ea89c9d80b9cdad5500d094928366cf6ff5fedd8c89a4ad597de0d139f017106c83629340e51330a3980780a71f04e9281201d6f3f7dc3d09f5fac8787f213d6068e536995d104f37be68b59689d03dbd13ce9be3ad1f492dfad718bad3ec29a485a62f23f5cd005b645ce925af05f46026a0b6d3c8ebf529708f8aadfb459cb376bbc6e9498ebfac25169074cfa3e85fd3314d47f910dd093457a187c054f90ec9c5331b3a1fa37c8f6c11dbf98f354cdc92b0ebe58df6d6b860b30b9e6289ac5d73c18ac6104ff3ab1079e651771a4b3bcbe2e899c55ea2d6af5c1d6b4e01f7b5ad7d21e0718f68e00f5d2dab7f8c00b35354802c7891c9fc8233082a292297826c39bb71f322833768923be96f38cf450a681d8fec604655311745839a1afcc56e759a0e266e6e610dde33386188a14d1f8b1fb0216828865f9188dff3fbfb6c560576486d6058dc7695cf9274162d42c3a9a565c50f4afb29e7f4170767217f4cc758479b105bd5814f196c3e1787cf7f224c12e7fa1e4cd43a91adff7e330889fcb6d9858411668dfc941b741ca3c89fea3a5699761ba64d9fcbf286930739e766ff31544dee10a88249b87411c45475dc2151516c380307588cdca654214ffb4e1ef02d1cab8cf4bbf601d2dd0f8eb22685af7cbcd14069fbad3e3eac7e21aa2081979ce100440b43aeb352f882a803c60c166d493b485729d479c71f0a22b498ab8c68ca46ceeb4c3a8720c674a84ea0192d8e6ef28ad5e416c2d1ef26103772e21dcd1d3bb72439c8b53af7daddc317ff83341bd5db7d5e27d2415ec41000b4e84056c5980cb9e652cb8a85529a17fcf4372c59e490a897246762f42d282f7be47abc21f2d92dfb8f11806d5f5792f9aa47a30e51f2df880a76c0669624596affc0096090a1526292ae9dc7a28f2801511eea2a9b1c27e80e9cb365e64bf8cf6ed839a0fa724abc58ab6be9dc64ae626ec2352519768be3d031afeb5ec25ef306a3341022e3e708b2ae8d654ddc6343e2b77d0092f5f953f9647d6b3d621b88b37a4ec911509a2c6df1d0351d07aba4b580124ea25e54f8f4d1fbf49284b42ec15405d4ece8ee33bf4ce2553b0ce7c34e4ffe2ee3781b008b5bc02d96eb0ae88210da65c99e094239e73fc19f7d69c66d72a581d587b1e1fc7f03dcb413abff504821dd90da90ccbb3c005b09c32281c87b8b1923093209f0b55f2c965cd5cc71824ca291cf491bbc229518a35829639b6bff5568ecf41391f96ab0d1de5e47dcb0661cd8ce9ff8e672defc09501de50e2f3963321cfa0e71ceb3ce63dd18d5f7a1e0b319b64c9f687fba94f54d7b25793c07210b8098aa33642197eabe140623cd838388711bc63d0d8d2816faccc07532765ac698472bc5d2f1fc661a68e8eae4da98462cdd534396d087074ebd9bc5979ff3c85227c865bbe94d6f6c34bce7f7b620f55c2fc6c9c0c2c12181f26885daf4823cf52c75ccd598f8f4259547283324b31458fe9cee615a60b8d5f98dcc162f5cff6ae9dc53318fcc2f3cdebbf115f0aac194860c4938e38aea972f7bca16d625b7a59845a47f729c2be5ec6dfcbebc5c3318a5672b3cef3464ee592fd319cfb0234a8c4676f9362c652bc382219d0e836c2dc905e5ddaa3e8b72c1a1b77b1cc2b7cfa86e2b5ffcf31119f541addfa98d6d4b9bbb1da43a46860347019292ec881e295eb4ee80dd6993a360f9ed0e92d221b81942686aabf9c8564ff441727f37cb5bb102a91cc67b71955706fbb2a1e7852c57a48fa3fa292f1090bd874634059532b615a20056b43c856040d5a99b8bea3899569261e9be7c052e799b35d92a72f2d5b0c924508a996dceb3d608fb2247fae2e0627ca8e1c4427b463c5c0da9ab551f9adf97bf3a6d37bca5dd72db2f54bb4d8780ece81c2943abcd0671120eb269895bbb44f310f6b499c1590e59fc91e928c1e105ece1404c6a4fbe630a4c67365f1b08eca9d6f0020a2491784cbba887edbeb8865a937115e959128ee2a51ea30dfa97a57a79b798c964b2856bd7daad12c38852a4631b3308cae4460b471e1ae299811b9a937375cbf3b6eb2450595fde539776714a36cbd8b88c4402bec8c68904162168d85943647847f128f4b80abaf70ba972ebdc262f36b228d6c8029abe6d434ecda908ec74c94c9154c6690679ac31662b8c1682938f58229505eb904a52507fd1ab69d2139c76596f00bba32f558babe6fc57f69cd8e27e9d1c9bcd51ea81675e6466832fba86e9b21e088322a51230cf6af6ed097a001afe0cd440a2c1d1d55b980b8e5707208aea442971abfcfef622559afa41fa0319a8640eb092364f62d2bb6145532d40e1ed75366e8283d4b5b4f0a86f806607568be2ce65c74b151c0ea38c4bf9b4f63b5c093859210f3007cf8620e744aa485c9804d34b8265c4bb20c989be2bbefe4e5a2652f7236b658780628a45fc88c75fc2e74a28c105f52f24f2365651a9f3f8f9afe7738f9242b014726086a8cb91035211d13abc22a5547429ac63e2ce851f44147ea7585409791f8c78cd3a351ab2a77096b14c95def0dc3e608c98fc49a8a3d58031980606ccb5e3699f6bfcd370f7186ebae9d5ee3b4ff658c74b94635589d662808ede7654ea3c70c18763eaf3b0d136de6ca96779310703b57148b0455bac611167ad1ad1309fa8e3dcd21edddb1df3af53b300936e073377e92d2f75b89076a1b8e85771dfd5877fddfe06788c2c1cf08fa6f56a961b0041081d7e16c07c51c56e8e59e0566e229474e3e8ee280b07f2f362c1345397ef21507a59d3f4da290658d3c3602c7632868ca3d10d01ce8df4c43fcd625449f0ed854f35611bd454baa60a0b10b3a06be8432c81c82f6ab5759a175b5285b3a15b877404b1ff1bc02b5ae800ed8046fda95084d1c43b2be6a8aed2417e99c997612142451ae5c938c6382b49975b536b89d9f036ef083af0d28514789bc0d8d18f7e314c64614dd1741b8a0a4b2e505b3416c8f6cafa11586a4aeb40673d743dd7789197256587df95891264305b7649c1d5f0a6de90a18169409046ba67955dce9705f777e1ec109f21606763320261dd719a3e839c0fefadffdef75eac95aed71c08a462b66443ca648c8cc9216fb5223aa0e1840aca9a85ec3902bdfe2c33e5fc67994e686ce453d3d8a6bdcbab8e92286137c91e1dd594a3a9df58d3418771f0117c58f02ef0eafe7924979cd6ae941d16cb0f3a85dc4dfd7369eead6778386037da158dbb9a60854bb30f4906a1a92e90e9817cffec587dad7be8e71305cb726fc65b71a5a0246e302eda82880f8f20bfd25bbbc26fc302395e87e4e531a9e6bdf7febe25a3e2a14f8e5d91b4c18cbdf3346d5b99c9afaa856effb499ce1db548f8781d8ef9e95b04b7c8b9cb93615ef5d71be0e8d0a05444faecc869775108e8c4c60597ef57bce98ec8503eb908fbc14c1c4cb09247f00a237c695e8ec2612cafd74ea48ac032ff4aadbf9163d677ff548ddc52f96e2cc06caffe4f7185c31ccfdd5d5425271613ecc514950ff69c1af514bf0ec6cd8005cfe2baa6c5e608c5b9f50ac35732648a3b2117a585f74e2d16ad29253dca2d9609c42583bee610e0ffdfa432c2c642e7efdcd7ab4c5d1c29f512a8a9777e7700aa7ae83f7faa2ab1479645e7bacc2d8bb709e9b38e87013fd4f4cfc3a384db31ddc63b55b5511082761e354a7f2aa1d3a63a62d1cc64ab8d5641b76e0125ed51990e6e1c647f6ae08ae0d93e8f15206458391098a9566609878ea4a5ae5bfae6d8ee7133aaf5dcb1f8671337041812f3e152bfd6467d52b888a5e4ecfed2edc8f098da96e814d027e899c88c34677735aa2f3a9fb9b8956d91f58fa9502cd88c60aae76ab90a7b81471f320e4ed73fb39a98df5fdef99529af534719caebf8c1b123f12cecb8f8023434f15bf24a746cf81532d8ba71e841657b523178e9492ecd7a5c09f63029b85a35c90b3f74f77515d7b7800885c3299c359c49a47ef8c53b4f69f0dc5884d606e8b7905f9e294e24f487b348ba4f01f282f9425e619a085429cd4af64365c9700903a9f229d7357ee448eba81128de91772fa0ee290e8ae3bf3d881aa6f08f70db0395cd8966aadcea688a273e65630733b047c8ceded1239a76e6ff17d105a6e2bbc75d3709fea3ccd5d26d25f12689dea247024bad4234d8ff4accbbedba09222ed9a3c89707c129fa81d00575efb89b4e851733f0ac770a54fc1e956ec039fb0f030025d4337e38513f584f46a6ffe83b57a640654c6ed11ac1adaa5c12cf930f1637c23e659b734dc0222756741010fb6269e1f826dca9bf63d9851390896ed6908223cabebe7b54dfadc1493a7f5a362d25dcb355e2313356f899b0fa324bb9cc4b07a785f63d97f9bd3c6639dd86d66b735ffaf9803342d1411fc6c4ce9f2a4ac707355001f96261b5d2d45542fe9e0767abb546190887fcc0a0eb1886442af03b1d53a7bc191e4e6a3bab08b430813ebbb3eb892c4f26e0a6f96bc55d8cf172243d819df78caab48326dacb7db70777176ad6f90071ce63f6126d0f474df302a5fe71662e0e34679521b73292e37b4d6de55dc5835ba342aa15551947234c2429d3b43afebd391e8b52465667b1fef70fd0d577c943e8561cbeee7aaae13a44be77a6ecbfefb2b2a2a10deebd571e6bdc98783147c410954888368c42af171fb9f6a4082ab31daad5bc3d97e804164bc5410e2d91a5fba9b9eb8c4a171e6212719bc1459f9958fd5e2fc11feba21d4a2c61d153137d489df77b407e942e0c54fe51abebde0b1fd65dd2b2900053bc5c522452f5a3717f5b592d23b34c0fdb6e18051e8c5bec03b01359c15eee883cc4ae900beada6c25634161c0498872905cd709e6616f11fc56d8184071a211602cb86008597904bc61e4fb1344ef3e04716074ccabaa1f504588984f757e461d64199abe83c7f3a1ff4d81362995ef920a2058801bf9d196bf20beb58c75c682a320f1e3a32f41747845c66948063d3e9127b22a0bfae0cbbc5fa3d67cbcb40d3cdace2f3fbcd7f9ac6d21c04a1e78145108d7beac0c65aa8362fe250c9db75fa8dbe6f839d8efd2ac81c262b42c2bf0aff24ef9bbf1c708d82ba370ead9f70d471d69d629cbac88d8028d7db7891cbb9346e8c171634f2acc5eba35cb4c9204279238ac52d9e370f082588965424c67d048d6cc361fdc66f54a1610e9fc7b678065a088260f8f2f0e9781964c7b4885de9d817f41c324ef6a9ec3008cb0ba0aafb7dfc6393838a06858faebb88e9009fc9ec02b1133317aee3bab5c04c0f2f0092472b4495ace48242d1f4cf27ba15dff28acf3e58e12579b74f2620b082fbeaed6331a36d3efb46c317941f535504e26d06d373f0accdc1ba726c1b264c9ea3056f7485eb00de268341eb160a60270db45ecc0330443efb3363afc11b39d7c60502ed68fb8f1ff214b342a38b8aee453d51beab75622049a2deae7c3dee42dea12a495dd909a74a2851891228bb6bbabcd514900d0637770ce4d9919e5345628a6ef0e0c1a82e55faf4a44955470a2c0bdfd08dfee275fa65cbfa806e4d5b658358ac0e80dd85bf889853d3c56507e27aff5a983bd650d90dbb7cbffc6984e26056da278f384ecb39ef2e5d7863d5ce56b4b5c5b2e52e3829f9afb0d520148d614ac18db227633a612b7ff189fd9018e8ce4f637eaa87a4cf058fe496913c6340627388ea320f88fdfe3e116d1efd1cb65956c800f3878a6b27afa7b2e89ad10156188300fab78b6114990a0f1e0fe407046e06aadd584e87143cb9183a7ceeb7315c7b8cadafe2278abba89c461b46799e44e20424074f9ff530dbe0161c090dd4ea65b9e1fc3f73959ced5ae940b86d0d30cfcbfacfca25efce7f4d2b6e1d18fd78b4a1cf254104899693a67c01d529e92ce64a0d8e15a2b98cea64f472e72b1efe4651d089b912fea6b773c9ff066653ffb96febfc7c0130fff091465d8460393a2d4f633b819b3eed56e7110f851f76c84506c9f4586dbbe12e27e6e0c392bf3776549223f3e65785e6fe03a31a6410fb28fa9a567f77d90cb88f7e234025f75113ef53118f97e835a404c1559c3ece68f0a7cb9ecd33a75bf86480e40caa41008d8ecda9b1e13ba4d0c7b5f3efe7c68f68fd036776bfda7da14f85bf8bc4cd0575afbe594827ca5757d35fd9a4683546c7734ba57796eb00cb612573d55197aa557f1b553c0947f801f05a8fbae38af776092826575820500a7066cc113cdaf222454471ee54be1ac4fa89845042efcd88bd40b9b5d90fd9e1df27ac9b89e96caa5dc63519c019831afa48a71c5d9b12f11db5a87695804b0bfbc0bb165195494a19d9ea9f0b91b25a4101ae2148255f70b9f4006f47717ce0143b5ce296b29c391f8c765d5cb9806eee1545a41315005ac92b2acdfc97d0bd206dabc0cebbd8c04fa3de233e877043c8854106b942a9170d4f3ec7b4a4bf70da1fb49ab8ff9ed1a7d093bac35552aa51c8f3265c6af33e0c9d106ec3a6a61e0e67797cc56726e803ac538aa27a944406d69c3ff6433f09bfc12eeec82e82fc4a6a07dab7787770cbf37675ca5e769b8ca84077e0447ba88599bc4b76708a521eb159cc0c13f1f6b62ae1db1ec14bfe94531d90d6fbb25f1bcaf8330d30383921612f5ce2ee461ae66bbf3c3940f3ada7a0085d8f971c45bd5238f079722b8a24803368b2dc3e89d50698ea7294635fbe93634b58c81cd776b210b735d5b142226ff284f457823bc701cb0d8d343b8bfc24844d71302b963b6b94f16ac9bb69682d9dbbd9d055aa08786c6832f88ac8e7b17ade25a9f1381ad0db700dd48a8e6e3bc46b80e7ca6c7a1c21744fc9d337fef47d200b176285c6c6f5a3f4e30b7da752b6c147ce1d672f96b7a3cc3732ce1565677400c64ccdd82b7b1417d6e615a6641ebbb9778179ef025cac7b496b604051480e8599ec3aa86c95983c28010dc68c5ed7e1ede94d2e509214892757008fbc08ef67c565f59ad19ed0e12a280a7596cc466fc21f0a0f6442a754752d8bba9c352664b81db46df4d82602ae5c49a56ef6bb2f9278df3411d8f3bcfadefd602754d020572f2528dd87710fdcb04ac4c80e571d43c99422c9ed5b1217bf641354b308d1b2cdebd7848ba61e1d4a8f733271c1c0a454f134cb6a2cfc93d36255464233189617cb631ea6f7a4a5b4699b425f8d89a206c6ecfd559e27df1c6492ff75876d5137d0fba8c85da58dfa2f591519bd89130603c85ff1e22fe4b8c58c590154e2813c38d74f335f06cf3d2170fd800436ae384430e310fcf2dd3b5d3c6a495a7c6010a85bd75d325d667b9b85a93e2993fe125745b9c41b1de3f8f86b00c619694eaf19a68c4a9100b17a46d6aff245d558dfc7a404c801a304f8ad347e7aa9b321e7f24f9b6e370f8b672ff57f6d6db8d758e4512cad2a688894eb28e62a8bd86b5efc814359a1ad7220e02e25e5e27d09ea96f4cfc612d02026483408281d3ac7d6c66f32faffbed85dc87646579cd4cd5f73c4a4a2005a452ce89fee3225f9778fbe2dfda0d01e6783355a287a103e17bd0456b72925f21c937e0770b25e6725966d2c84ed9706539c2f4a3f44bd1c2b2e1d5248b72c2cf3a972433b9f4539a35496670867ff304ef1e49ba6c91f1c4eefb0593c6441fd8b6d9ab72d675f0cd4d3adac7ab21a504254f8740f1f727aa462e51f9fa457f9563012ef8d1b5d257f157111f2fb625719502436b4cf54492c063eb66e2d640a36644575a164bdef42fd9e615148624cd2fc93106fd18e79e9fcd52b47d2b5fbd08040bdbd6e1d95dfab548ffa6f1d136521ee4d3908253d24c912cec7673cfeea8e7f55610dfd9b98b70efab2ac3941f391ab2bf5f0f7cbdc90c93c13e70eb5b37fa0f9c32c60b1d642f694a09c3a60d1ca5d3b3acdd324e16bf4a801ba75bbc8f411b7d9a8b322010f819b3247a5ea3dc8def043e29805f694fac7d8e4c0bbe141fbb3664c978499aeec7929d87cf4df51a6843fddc5c74018aee6194e64e6504c1c8b0885d70fea7def3f00351762ec6692838bdace48b3c13aa7aace095094e6c8b6f63721a655f852cc11e89618396e06c400d84bbfcc3ad1dc30c0569c56a9f890c9bddc596a0b00df96db0f56fd6d2efa0a0bfba97c3f85e7458b6a6963c2bd46579bd21c9ddbc800ba7da696868caa4d4579d16f683f0c33390a25d732e0f4f403506d8cc9e2f1a2d061cfbeff7da72f3a813d85d824873b94922435a087d327c162f9b1ab995ffc5a457e647d06b0131e5428929ecb460a417c44962457a7327fd4440c7a1aaf416ebf4153ac55672a6af60670ea87967e9bd582ed63cc2a54c6b1abe196256a6ea425a01e358d913b4e80df38adf614cdf35d28e0c2b017f87977e2ab36f62323ed8f36395608ee59ce7d8398ba245a391455d78bf6259467c3c0462ba7a4a0e78da00df572b9410e734fa2ad0236f72e34922dbfd9e769f029856832e22ce044ef2fccaa71ed882e44252d48f321a39c5d4aff9e42289c5ddb2976ee2d00ae769565ffec54e7b9be45ed6b3a9f7e17385d92217d7abfb60c8268750d89543a22741b00cdf1f8d9e8e65d50ea3377b4b2d293404d8f11d3f09cc4ba9076fcd01d16b92891b33b6b4eb121ab8668e3e29af9831dfecedc3a901867a06505f6cee14c0b29c8e916d2b6ebf61ad07be7c86cab037044d83a28e3c3342ebac1f546cfaaad3e76d489526574ed61fc37fe023e3ff37f3c7c731be1435f03a979e91c6894845d402c6b2b9003cb1a36bd4ebf671392786636a40535c0aa4707512575fefe53ce3c8494725129a902804e65f02cbbb565ceff36c2c4c040ff182ad65f397ea2f3e50484d5e168ff5571a838199b7b205fb4966b9231859a7b056a27fad88f83c182b41f7e20ea86bc13d284d791966efbf0fbc49aeedbaec7652bf637d0227bef4a9b0e703c25a0b1964637d5fe57bf37245831d7003eb58776715de2ef468ffe99ca8c4c601f364176383752de5a09e6bad87e2d3236595d55b01aa2a9cba1d9a3515a0848f60a02b2de33a7eef27b966f605573c40d54588b3daa4b89401a9353afdf0f2f87ee201011e259206f72c78277609416d4d84c673e364fba535eae68c8f0fef70ba4dfadc5ab1442334e59ccf11ce9227302d2d6ec9bc3917f51a4263a79925dc7d1eadb941b08de8c20cdaa211c5f32ed2477adb3079341f4b2d9e68f8df8bbced7891a6df32c41410f13c36f629320b2f964e9ffe89e13b3a07b5802aafcb8a0154b45247259d2ab45ab1b0f36ef8a64cf1d2d4d03b91bd9efa41963243289765879d4dccbada6a59bd01d32c172dd44cd93f9dc225f847b07b9e9fe577aab00d0ad6c14b5877b0eac9ea13250a667be6e6efff438b8d834d6a627248fc900f8aaa4b3afe980e83545b9516a6de7f69902af7638120e08b5fd20e78aa44c0511094986125988c7d0994da9ad3db58064d4d8f0907f40d117a096df6a72acb108853bba339a5f74ac67107fa05c5a4ac53ba09118953d10d9d94de96c28b1098789df79ecb7fed05b44e796bdd3713f01e180f95e638cccc3a176b54ff7f8e6ef48f594216cffe01897f3e99ceb1d6a12a9ce7c1c3158ab084dac342cf7ce8e33b57b2a584b66415fe00b85942f071074e15e1876a7fbbbe52171dca3c9358c92501a3e6cc07ba253ebd942064bfe3c92d9047afef0dce81a01783be5874a4d3cb8ce53adc37006fd02e9cf966f5de5a213711f108f84d039ef3fdd7a89a944508c4b2e96e6d9f90f9c11d775488316803e4945314cf9fe943fdb0a289e31d9dfa3eff34c302db11f9502532ff27d91fd2f95e13d9b17ea1246fc8bd91a89deb97fde96dcc2bb8fd4f0497629b2dd6fbeb5accb6ce68bccf61d8b9e71c3524dd569cfe527aecf8b189cc05bcd4f1b4758d803d5a50b8b0ca9d2761704e7c413084f342ef9c02cec9129925599e55061648a8fcfb840cfd32574fcc0b8d9f3fc306067fdf1e1f506715cb80283278932e8afcf0a9bad17d63be08a650a9d55410e5488be996e53ba215ac4d6db962ecea22c6fae7f333f11727ba5079c5d2d183f1f8995e876db8eb859cb35c11a1a57d1b5a3310a51ce1b7819fbcc04f43709365b5f36d7f16f93dd8c330af443a9c77df8bad5021904538c17deb63a0a083195a43abae543d5c1b32a539aa62aa37e96d015f08a79b9cb9d0b0d4ed3fea85cb342df61f66037564c626b13ec96eec0bab1f1dbce59438e36126ba4200c972a3f65456a05b33049b152a5ad3dabc5697995be1b7e004ce59708635a36ae25dcc24fd127c8ca379eb32c0ebf4c1e281c8a4c47006e24a493231f1a40ff5fb78e02cfed97968af1677ca2228cb1cee1c81bfcc410a2b714f1f8cfef7fc9229ee8bf605af73791bf6fdf86d19301417db76529652a15edb6e2d6f7a15fa283cccf28160e90ccd2290bb26d31f914bb5f07357f41379835dcc71e2e99e9fca6233ee426df21bb168bac5f89d0cc94cb2b6d45f8d1267ba4ef37f2edf3854f7aa5241d91d379e7857aec71ae758a28d489fc95de4f6247424b49048a14470380017f3928e97bed2597724924062e23c616d54159025a42b207235703a2791abecc1b125dfe128aa812d2a495d8b890d594198772a2c2184a4320f2c0d2e2d41ffd0d10084a2c9a4081be502e70c1677ad88a0b0b5054e8c2b06e1d5f9f8d4ea48ad56aae66a06fdb5b6226a2a0fa660539723127e9651aa62dc1f37952656365ccbc041de3f40f16ae3fff53918f18b2985010eae17f11b8d912f8e2d1bed934bbe0fa335e04f8482995f66c2e4b57b79193d858a99ea495329f97d062c9eece484c25a7c26e345b328fa5e1223433b238d95de520122a3933f417a107abb4e48e7bf6aaac7c0aee3127272c93bb0cbaa3a3c390411ae6a9c9e902ae14f69b8b281ffd90633695a73dec1d3bb8f5bb5077902f3c6ca9ecd53831e45ad7c20feeb620c2302daa448a080eb31885151f181327ba98716553c90bf7470a9577c510b4273258bf4c4a54c73311323b53d017e64d8d155be1f37ef8b1bf7441b27d59dcc9d21914cdd2e9cf233e5c9399dcffcdc36db3d042a7e232e02ea8f1b242b3184163bcfcf0bd8483c09f54516de5ed24c4fb7f8ffdc7a208d19f42275c6401dadf8a0998483ed1ee781682ff5cd5ce2f98bf34c2c8fc352477493845b2e5125c5e58d6b974a4bb2540ba1ffbec10f4d2a3a3dff509a44cde6045b6a803debc3743bc6cc790f3c672ac5a209ef7eaf3f555875611298757c438de5a6663bef6992616a7b1a2112ecb6ef8040d39793923e7518da434bd6804938db8b241ce8fe2ca9a2b23e77276ccd8685e2dc5174f1118e5b5210476fc1bb872ed15c7c46da1b74d674fcd9f911618839178c4cbc3cde49ab4b832eaeed237b0e25bf1db3e2886bcac4b1ab57fc76f72cff385863d1e8fdb162403f168ca4805518a82979c01168bc19ed1615f530579e85d0822176bd972a6530e32fe5145520420d0f782b8221c3913db9e2d6210227637807de96656bdb4f4e2fee2300825184b901e411eaaca2807b777d7e805ed61ab4315e3ef9247098592e78f048319621560a3fa1e89e420b002061b9b6ded432b0d04e3ddd62f78bcee8c5fdf134a2cad57dae59bf2b5b37e4539ab5523db24d472cf2992e69e4c520f15977aa005f79a166e6c9c6fa7fb18a8aafd3828b6199d923527292f09c84e2e7ab1a55d9c2947a9ecab220ab1adabb7ce9caadfc20a4202e6c109a032050349c2af534298dc189cd169e79a689bb03f3d572840791bcefd08af4f94346dcce8fa223e573d6fecbfb8113e7718038a4676ba35dffc6f0cca53937ab90765dbae2e1c0a5d8ced4bfaa4ab23ef4c070889ad6a67daba7c2dea4060a3e55ca6348ce7db13f2a573feecf65f0d0cafa54734395e080d9afc935da461fb8517c574bdfcb5ded7e9163ff346820c75965b08135b1a8743f8aca6f848eacebf54fac5d32bf0de238f55ca549ab83ab358770b70664216f27b136d378bec3c39d98f74878c7d0cad08fdc57848d1b0b91bafa4f985ab54422ea87c41d9a7d693661e0b6dda114c7f7ba5c912f36cc95331a56aaf22243abd681ff4c0e7f6779232bd3320ce4f56ea27da67157f554d10f959bae75a8d7649f0834fc8dd38af834e1c50e4550dcc094792c0a4d50bcdc03b49d9257849eb86fcdb1837d376c99dab5bd10b40bde316e981e3d98212fd4fa927666fc6447032e4e1a5c6a69dbd3e388c3e0fd4c5a0deb6e0ba58a3cf8a6ac76dc8298359be965c390706bd43642d239bf03f9c16952c7e82db756304edf520e9e75626cb99f2cd98cbc634b83848011b5f1189b3b34205bf0fa2b9878095426336cf015141294277e74373547d8a1bba3a906d4846fcc6499710294fe62bae4928c15dfb8e352e73d63752795d9f023b0b30fba20d408074399de8b0a5515feff1ccd5052b41e4332b7a15bf38c3e86b7edd6a76f8fcb201451092a5d7f6b65af194a5a808567902f0e4ebd5c016ca0869b8773f922ac845d4d402a3929ef1d102fbfb4fd298f724e9834a768094b2f58db0ff75a2dee543009e840443e50233fa9e6f26c13ee181e80a01cb4dffbb9c08de34d71025e01d1514e8460585fb33",
        Fh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]"; !
        function(t) {
            function i(t, i) {
                for (var n = "",
                         e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
                var s = Math.floor(n.length / 5),
                    h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                    r = Math.round(i.length / 2),
                    f = Math.pow(2, 31) - 1,
                    a = parseInt(t.substring(t.length - 8, t.length), 16);
                for (t = t.substring(0, t.length - 8), n += a; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
                n = (h * n + r) % f;
                for (var _ = "",
                         c = "",
                         e = 0; e < t.length; e += 2) _ = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / f * 255)),
                    c += String.fromCharCode(_),
                    n = (h * n + r) % f;
                return c
            }
            t = i(t, "QUNEE"),
                Fh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
        } ($h);
    var Ah = Fh[0] + Fh[1] + Fh[2],
        Nh = Fh[3] + Fh[1] + Fh[2],
        qh = Fh[4],
        Bh = Fh[5],
        Dh = Fh[6],
        Rh = Fh[7],
        zh = Fh[8],
        Lh = Fh[9],
        Gh = Fh[10],
        Yh = Fh[11],
        Hh = Fh[12],
        Xh = Fh[13],
        Wh = Fh[14] + Fh[15] + Fh[16],
        Vh = Fh[17] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        Uh = Fh[22] + Fh[23] + Fh[24],
        Qh = Fh[22] + Fh[25] + Fh[26],
        Jh = Fh[3] + Fh[18] + Fh[27],
        Zh = Fh[22],
        Kh = Fh[28],
        tr = Fh[29],
        ir = Fh[30],
        nr = Fh[31],
        er = Fh[32],
        sr = Fh[33],
        hr = Fh[34] + Fh[18] + Fh[35],
        rr = Fh[36],
        fr = Fh[37] + Fh[38] + Fh[39],
        ar = Fh[40] + Fh[41] + Fh[42],
        _r = Fh[43] + Fh[44] + Fh[45],
        cr = Fh[46] + Fh[47] + Fh[48],
        ur = Fh[49],
        or = Fh[50],
        dr = Fh[51],
        lr = Fh[52],
        br = Fh[53],
        vr = Fh[54],
        yr = Fh[55] + Fh[20] + Fh[56],
        gr = Fh[57],
        xr = Fh[58],
        wr = Fh[59] + Fh[44] + Fh[60],
        mr = Fh[61],
        jr = Fh[3],
        pr = Fh[62],
        kr = Fh[63] + Fh[64] + Fh[65],
        Mr = Fh[66] + Fh[64] + Fh[65],
        Er = Fh[67],
        Sr = Fh[68] + Fh[41] + Fh[42],
        Pr = Fh[69],
        Ir = Fh[70] + Fh[15] + Fh[71],
        Tr = Fh[66] + Fh[72] + Fh[73],
        Cr = Fh[74] + Fh[75],
        Or = Fh[76],
        $r = Fh[77],
        Fr = Fh[78],
        Ar = Fh[79],
        Nr = Fh[80],
        qr = Fh[81],
        Br = Fh[59] + Fh[44] + Fh[82],
        Dr = Fh[83],
        Rr = Fh[84],
        zr = Fh[85],
        Lr = Fh[86],
        Gr = Fh[87],
        Yr = Fh[88] + Fh[89],
        Hr = Fh[90],
        Xr = Fh[91],
        Wr = Fh[92],
        Vr = Fh[93],
        Ur = Fh[94],
        Qr = Fh[95] + Fh[44] + Fh[96],
        Jr = Fh[97] + Fh[44] + Fh[96],
        Zr = Fh[66] + Fh[1] + Fh[98] + Fh[18] + Fh[99],
        Kr = Fh[66] + Fh[1] + Fh[98] + Fh[100] + Fh[101],
        tf = Fh[102],
        nf = Fh[103] + Fh[104],
        ef = Fh[55] + Fh[105] + Fh[106] + Fh[1] + Fh[107],
        sf = Fh[108],
        hf = Fh[109] + Fh[100] + Fh[110],
        rf = Fh[111],
        ff = Fh[112],
        af = Fh[30] + Fh[100] + Fh[110],
        _f = Fh[113] + Fh[114] + Fh[115],
        cf = Fh[3] + Fh[47] + Fh[116] + Fh[1] + Fh[117] + Fh[100] + Fh[118],
        uf = Fh[119] + Fh[120],
        of = Fh[119] + Fh[121],
        df = Fh[122] + Fh[123] + Fh[124],
        lf = Fh[122] + Fh[120],
        bf = Fh[122] + Fh[125] + Fh[124],
        vf = Fh[122] + Fh[121],
        yf = Fh[126],
        gf = Fh[127],
        xf = Fh[3] + Fh[38] + Fh[128],
        wf = Fh[3] + Fh[64] + Fh[129] + Fh[47] + Fh[130] + Fh[131] + Fh[132] + Fh[64] + Fh[65],
        mf = Fh[3] + Fh[133],
        jf = Fh[3] + Fh[134] + Fh[130] + Fh[131] + Fh[132] + Fh[64] + Fh[65],
        pf = Fh[135],
        kf = Fh[136],
        Mf = Fh[137] + Fh[81] + Fh[138] + Fh[81] + Fh[139] + Fh[81] + Fh[140],
        Ef = Fh[141] + Fh[72] + Fh[142],
        Sf = Fh[143],
        Pf = Fh[144],
        If = Fh[145],
        Tf = Fh[146],
        Cf = Fh[147],
        Of = Fh[148] + Fh[81] + Fh[149] + Fh[81] + Fh[139],
        $f = Fh[150],
        Ff = Fh[151] + Fh[38] + Fh[152],
        Af = Fh[153],
        Nf = Fh[154],
        qf = Fh[66],
        Bf = Fh[155],
        Df = Fh[156] + Fh[120],
        Rf = Fh[156] + Fh[121],
        zf = Fh[157],
        Lf = Fh[158] + Fh[159] + Fh[160],
        Gf = Fh[161] + Fh[159] + Fh[160],
        Yf = Fh[162],
        Hf = Fh[163] + Fh[164],
        Xf = Fh[165],
        Wf = Fh[166] + Fh[164] + Fh[29] + Fh[167] + Fh[29] + Fh[87] + Fh[83],
        Vf = Fh[163] + Fh[114] + Fh[168],
        Uf = Fh[166] + Fh[169] + Fh[29] + Fh[167] + Fh[29] + Fh[87] + Fh[83],
        Qf = Fh[170],
        Jf = Fh[171],
        Zf = Fh[172] + Fh[141] + Fh[173],
        Kf = Fh[174],
        ta = Fh[175],
        ia = Fh[176],
        na = Fh[177],
        ea = Fh[178] + Fh[72] + Fh[179],
        sa = Fh[180],
        ha = Fh[166] + Fh[181] + Fh[29] + Fh[87],
        ra = Fh[182],
        fa = Fh[183],
        aa = Fh[184],
        _a = Fh[30] + Fh[44] + Fh[185],
        ca = Fh[186],
        ua = Fh[187],
        oa = Fh[188],
        da = Fh[189] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        la = Fh[194] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        ba = Fh[103] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        va = Fh[195] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        ya = Fh[196] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        ga = Fh[197] + Fh[64] + Fh[129],
        xa = Fh[3] + Fh[1] + Fh[198],
        wa = Fh[89] + Fh[199],
        ma = Fh[62] + Fh[72] + Fh[200],
        ja = Fh[201],
        pa = Fh[202],
        ka = Fh[203] + Fh[81] + Fh[204],
        Ma = Fh[205],
        Ea = Fh[206],
        Sa = Fh[207] + Fh[114] + Fh[168],
        Pa = Fh[208],
        Ia = Fh[209],
        Ta = Fh[210],
        Ca = Fh[211],
        Oa = Fh[3] + Fh[47] + Fh[212],
        $a = Fh[213],
        Fa = Fh[214] + Fh[44] + Fh[185],
        Aa = Fh[215],
        Na = Fh[62] + Fh[114] + Fh[216],
        qa = Fh[34] + Fh[44] + Fh[185] + Fh[217] + Fh[218] + Fh[72] + Fh[219],
        Ba = Fh[220],
        Da = Fh[221],
        Ra = Fh[3] + Fh[217] + Fh[222] + Fh[38] + Fh[128],
        za = Fh[223],
        La = Fh[34] + Fh[44] + Fh[185] + Fh[217] + Fh[218] + Fh[44] + Fh[224],
        Ga = Fh[225] + Fh[44] + Fh[185],
        Ya = Fh[226],
        Ha = Fh[227],
        Xa = Fh[228],
        Wa = Fh[81] + Fh[229] + Fh[44] + Fh[185],
        Va = Fh[230],
        Ua = Fh[225] + Fh[217] + Fh[231] + Fh[15] + Fh[16],
        Qa = Fh[232],
        Ja = Fh[233],
        Za = Fh[234],
        Ka = Fh[235] + Fh[81] + Fh[236],
        t_ = Fh[235] + Fh[81] + Fh[204],
        i_ = Fh[237] + Fh[238] + Fh[239],
        n_ = Fh[143] + Fh[131] + Fh[240],
        e_ = Fh[241] + Fh[83] + Fh[242],
        s_ = Fh[243],
        h_ = Fh[244],
        r_ = Fh[245],
        f_ = Fh[233] + Fh[29] + Fh[246] + Fh[29] + Fh[87] + Fh[247],
        a_ = Fh[75],
        __ = Fh[248] + Fh[81] + Fh[249],
        c_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[250],
        u_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[251],
        o_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[252] + Fh[81] + Fh[253],
        d_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[254] + Fh[81] + Fh[253],
        l_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[255],
        b_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[256],
        v_ = Fh[248] + Fh[81] + Fh[249] + Fh[81] + Fh[257],
        y_ = Fh[258] + Fh[217] + Fh[222] + Fh[38] + Fh[128],
        g_ = Fh[259],
        x_ = Fh[144] + Fh[100] + Fh[118],
        w_ = Fh[260] + Fh[44] + Fh[224],
        m_ = Fh[61] + Fh[261] + Fh[47] + Fh[130] + Fh[18] + Fh[262] + Fh[44] + Fh[185],
        j_ = Fh[61] + Fh[227],
        p_ = Fh[61] + Fh[263] + Fh[120],
        k_ = Fh[61] + Fh[263] + Fh[121],
        M_ = Fh[61] + Fh[264],
        E_ = Fh[265] + Fh[266] + Fh[100] + Fh[267],
        S_ = Fh[61] + Fh[268] + Fh[72] + Fh[200],
        P_ = Fh[61] + Fh[268] + Fh[18] + Fh[262] + Fh[44] + Fh[185],
        I_ = Fh[62] + Fh[47] + Fh[130] + Fh[100] + Fh[118],
        T_ = Fh[61] + Fh[243],
        C_ = Fh[269],
        O_ = Fh[61] + Fh[270],
        $_ = Fh[271] + Fh[44] + Fh[272],
        F_ = Fh[61] + Fh[273] + Fh[238] + Fh[239],
        A_ = Fh[61] + Fh[274] + Fh[44] + Fh[96],
        N_ = Fh[275] + Fh[276] + Fh[277],
        q_ = Fh[278] + Fh[276] + Fh[277],
        B_ = Fh[61] + Fh[270] + Fh[100] + Fh[279],
        D_ = Fh[61] + Fh[273] + Fh[120],
        R_ = Fh[61] + Fh[273] + Fh[121],
        z_ = Fh[3] + Fh[100] + Fh[118],
        L_ = Fh[280],
        G_ = Fh[261] + Fh[47] + Fh[130] + Fh[44] + Fh[224],
        Y_ = Fh[61] + Fh[223],
        H_ = Fh[34] + Fh[64] + Fh[281],
        X_ = Fh[61] + Fh[268] + Fh[100] + Fh[267],
        W_ = Fh[237] + Fh[38] + Fh[282],
        V_ = Fh[62] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        U_ = Fh[3] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        Q_ = Fh[194] + Fh[38] + Fh[282],
        J_ = Fh[189] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        Z_ = Fh[237] + Fh[38] + Fh[282] + Fh[15] + Fh[124],
        K_ = Fh[194] + Fh[38] + Fh[282] + Fh[15] + Fh[124],
        tc = Fh[189] + Fh[25] + Fh[283] + Fh[38] + Fh[282] + Fh[15] + Fh[124],
        ic = Fh[284] + Fh[276] + Fh[285],
        nc = Fh[284] + Fh[217] + Fh[231],
        ec = Fh[286] + Fh[114] + Fh[287],
        sc = Fh[288] + Fh[131] + Fh[289],
        hc = Fh[290] + Fh[20] + Fh[291],
        rc = Fh[290],
        fc = Fh[292],
        ac = Fh[126] + Fh[44] + Fh[293],
        _c = Fh[127] + Fh[44] + Fh[293],
        cc = Fh[294],
        uc = Fh[295] + Fh[64] + Fh[296],
        oc = Fh[297] + Fh[131] + Fh[287] + Fh[114] + Fh[298],
        dc = Fh[299],
        lc = Fh[300],
        bc = Fh[301],
        vc = Fh[302],
        yc = Fh[303] + Fh[1] + Fh[240] + Fh[18] + Fh[304],
        gc = Fh[303] + Fh[18] + Fh[304],
        xc = Fh[305] + Fh[1] + Fh[306] + Fh[1] + Fh[240],
        wc = Fh[307] + Fh[105],
        mc = Fh[308],
        jc = Fh[309],
        pc = Fh[310],
        kc = Fh[311],
        Mc = Fh[304],
        Ec = Fh[312],
        Sc = Fh[313] + Fh[83] + Fh[313] + Fh[83] + Fh[314],
        Pc = Fh[89],
        Ic = Fh[315],
        Tc = Fh[316] + Fh[47] + Fh[130] + Fh[217] + Fh[199],
        Cc = Fh[317],
        Oc = Fh[55] + Fh[18] + Fh[318],
        $c = Fh[3] + Fh[64] + Fh[319] + Fh[47] + Fh[320],
        Fc = Fh[305] + Fh[18] + Fh[318],
        Ac = Fh[34] + Fh[217] + Fh[321],
        Nc = Fh[305],
        qc = Fh[34] + Fh[25] + Fh[322],
        Bc = Fh[34] + Fh[38] + Fh[323] + Fh[15] + Fh[16],
        Dc = Fh[0] + Fh[20] + Fh[324],
        Rc = Fh[325],
        zc = Fh[62] + Fh[1] + Fh[98] + Fh[217] + Fh[231],
        Lc = Fh[6] + Fh[1] + Fh[326],
        Gc = Fh[327],
        Yc = Fh[62] + Fh[217] + Fh[231],
        Hc = Fh[61] + Fh[55],
        Xc = Fh[295] + Fh[64] + Fh[296] + Fh[64] + Fh[319],
        Wc = Fh[61] + Fh[305],
        Vc = Fh[295] + Fh[64] + Fh[296] + Fh[1] + Fh[98],
        Uc = Fh[328] + Fh[114] + Fh[195],
        Qc = Fh[237] + Fh[114] + Fh[195],
        Jc = Fh[329] + Fh[114] + Fh[195],
        Zc = Fh[330] + Fh[114] + Fh[195],
        Kc = Fh[331],
        tu = Fh[332] + Fh[81] + Fh[333],
        iu = Fh[332] + Fh[81] + Fh[334],
        nu = Fh[332] + Fh[81] + Fh[335],
        eu = Fh[332] + Fh[81] + Fh[336],
        su = Fh[332] + Fh[81] + Fh[337],
        hu = Fh[332] + Fh[81] + Fh[338],
        ru = Fh[332] + Fh[81] + Fh[339],
        fu = Fh[332] + Fh[81] + Fh[340],
        au = Fh[332] + Fh[81] + Fh[341],
        _u = Fh[332] + Fh[81] + Fh[342],
        cu = Fh[332] + Fh[81] + Fh[343],
        uu = Fh[332] + Fh[81] + Fh[344],
        ou = Fh[332] + Fh[81] + Fh[345],
        du = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[347],
        lu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[314],
        bu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[89],
        vu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[315],
        yu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[348],
        gu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[349],
        xu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[350],
        wu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[351],
        mu = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[352],
        ju = Fh[332] + Fh[81] + Fh[346] + Fh[81] + Fh[353],
        pu = Fh[354] + Fh[25] + Fh[355],
        ku = Fh[356],
        Mu = Fh[61] + Fh[246],
        Eu = Fh[211] + Fh[20] + Fh[357],
        Su = Fh[61] + Fh[268],
        Pu = Fh[358],
        Iu = Fh[3] + Fh[44] + Fh[60],
        Tu = Fh[359],
        Cu = Fh[360] + Fh[44] + Fh[60],
        Ou = Fh[361],
        $u = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[364],
        Fu = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[365],
        Au = Fh[62] + Fh[72] + Fh[366],
        Nu = Fh[367],
        qu = Fh[368] + Fh[1] + Fh[98],
        Bu = Fh[369] + Fh[104] + Fh[276] + Fh[370],
        Du = Fh[371] + Fh[217] + Fh[231],
        Ru = Fh[372],
        zu = Fh[373] + Fh[47] + Fh[212],
        Lu = Fh[3] + Fh[72] + Fh[366],
        Gu = Fh[374] + Fh[81] + Fh[375],
        Yu = Fh[374] + Fh[81] + Fh[376] + Fh[81] + Fh[377],
        Hu = Fh[374] + Fh[81] + Fh[376] + Fh[81] + Fh[378],
        Xu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[379] + Fh[81] + Fh[380],
        Wu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[381] + Fh[81] + Fh[380],
        Vu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[380] + Fh[81] + Fh[382],
        Uu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[375] + Fh[81] + Fh[383],
        Qu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[375] + Fh[81] + Fh[384],
        Ju = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[379] + Fh[81] + Fh[382],
        Zu = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[381] + Fh[81] + Fh[382],
        Ku = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[382] + Fh[81] + Fh[380],
        to = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[375] + Fh[81] + Fh[385],
        io = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[375] + Fh[81] + Fh[386],
        no = Fh[374] + Fh[81] + Fh[376] + Fh[81] + Fh[387] + Fh[81] + Fh[377],
        eo = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[379],
        so = Fh[388] + Fh[81] + Fh[389],
        ho = Fh[390] + Fh[81] + Fh[389],
        ro = Fh[374] + Fh[81] + Fh[391],
        fo = Fh[374] + Fh[81] + Fh[391] + Fh[81] + Fh[392],
        ao = Fh[374] + Fh[81] + Fh[391] + Fh[81] + Fh[393],
        _o = Fh[374] + Fh[81] + Fh[391] + Fh[81] + Fh[394],
        co = Fh[374] + Fh[81] + Fh[391] + Fh[81] + Fh[395],
        uo = Fh[374] + Fh[81] + Fh[396] + Fh[81] + Fh[397],
        oo = Fh[398],
        lo = Fh[214],
        bo = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[381],
        vo = Fh[346] + Fh[81] + Fh[399],
        yo = Fh[3] + Fh[72] + Fh[400],
        go = Fh[0] + Fh[44] + Fh[224] + Fh[72] + Fh[401],
        xo = Fh[55] + Fh[38] + Fh[402],
        wo = Fh[233] + Fh[25] + Fh[322] + Fh[64] + Fh[319],
        mo = Fh[233] + Fh[64] + Fh[319],
        jo = Fh[403],
        po = Fh[356] + Fh[114] + Fh[298],
        ko = Fh[404] + Fh[47] + Fh[212],
        Mo = Fh[405],
        Eo = Fh[406],
        So = Fh[407] + Fh[44] + Fh[185],
        Po = Fh[316],
        Io = Fh[61] + Fh[408] + Fh[64] + Fh[409],
        To = Fh[374] + Fh[81] + Fh[410] + Fh[81] + Fh[411],
        Co = Fh[412] + Fh[120],
        Oo = Fh[412] + Fh[121],
        $o = Fh[413],
        Fo = Fh[414] + Fh[72] + Fh[415] + Fh[23] + Fh[416],
        Ao = Fh[417],
        No = Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[23] + Fh[418] + Fh[104] + Fh[47] + Fh[419],
        qo = Fh[420],
        Bo = Fh[421],
        Do = Fh[422],
        Ro = Fh[423],
        zo = Fh[424],
        Lo = Fh[227] + Fh[75] + Fh[425] + Fh[426] + Fh[77],
        Go = Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[23] + Fh[418],
        Yo = Fh[74] + Fh[75] + Fh[313] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[77],
        Ho = Fh[428],
        Xo = Fh[429],
        Wo = Fh[430],
        Vo = Fh[431] + Fh[432],
        Uo = Fh[433] + Fh[81] + Fh[235] + Fh[81] + Fh[385],
        Qo = Fh[433] + Fh[81] + Fh[235] + Fh[81] + Fh[383],
        Jo = Fh[313] + Fh[187],
        Zo = Fh[434],
        Ko = Fh[119] + Fh[238] + Fh[239],
        td = Fh[119] + Fh[435] + Fh[436],
        id = Fh[437],
        nd = Fh[438] + Fh[131] + Fh[439],
        ed = Fh[403] + Fh[131] + Fh[439],
        sd = Fh[34] + Fh[41] + Fh[440],
        hd = Fh[34] + Fh[72] + Fh[441],
        rd = Fh[442] + Fh[81] + Fh[443],
        fd = Fh[444] + Fh[114] + Fh[195] + Fh[25] + Fh[445],
        ad = Fh[446] + Fh[217] + Fh[218],
        _d = Fh[446] + Fh[15] + Fh[447],
        cd = Fh[55] + Fh[38] + Fh[128] + Fh[448],
        ud = Fh[246] + Fh[449] + Fh[450],
        od = Fh[127] + Fh[1] + Fh[451],
        dd = Fh[452],
        ld = Fh[68] + Fh[1] + Fh[453],
        bd = Fh[68],
        vd = Fh[263] + Fh[238] + Fh[239],
        yd = Fh[263] + Fh[435] + Fh[436],
        gd = Fh[202] + Fh[72] + Fh[366],
        xd = Fh[202] + Fh[72] + Fh[200],
        wd = Fh[202] + Fh[20] + Fh[454],
        md = Fh[455],
        jd = Fh[438] + Fh[72] + Fh[456],
        pd = Fh[438] + Fh[64] + Fh[457],
        kd = Fh[458],
        Md = Fh[438],
        Ed = Fh[197] + Fh[100] + Fh[459],
        Sd = Fh[460],
        Pd = Fh[461],
        Id = Fh[462],
        Td = Fh[463] + Fh[72] + Fh[200],
        Cd = Fh[464] + Fh[104] + Fh[465],
        Od = Fh[466] + Fh[64] + Fh[129],
        $d = Fh[100] + Fh[118],
        Fd = Fh[467],
        Ad = Fh[468],
        Nd = Fh[469],
        qd = Fh[30] + Fh[25] + Fh[470],
        Bd = Fh[471] + Fh[131] + Fh[240],
        Dd = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[473],
        Rd = Fh[34] + Fh[25] + Fh[474],
        zd = Fh[368] + Fh[23] + Fh[240] + Fh[217] + Fh[475],
        Ld = Fh[104],
        Gd = Fh[368] + Fh[64] + Fh[319] + Fh[217] + Fh[475],
        Yd = Fh[209] + Fh[64] + Fh[476] + Fh[20] + Fh[477],
        Hd = Fh[471] + Fh[131] + Fh[478] + Fh[23] + Fh[479],
        Xd = Fh[480] + Fh[23] + Fh[240],
        Wd = Fh[295] + Fh[64] + Fh[296] + Fh[15] + Fh[447] + Fh[64] + Fh[319],
        Vd = Fh[481],
        Ud = Fh[482] + Fh[18] + Fh[318],
        Qd = Fh[189] + Fh[100] + Fh[483] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        Jd = Fh[194] + Fh[100] + Fh[483] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        Zd = Fh[195] + Fh[100] + Fh[483] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        Kd = Fh[103] + Fh[100] + Fh[483] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        tl = Fh[62] + Fh[114] + Fh[484],
        il = Fh[46] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        nl = Fh[189] + Fh[1] + Fh[485] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        el = Fh[194] + Fh[1] + Fh[485] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        sl = Fh[195] + Fh[1] + Fh[485] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        hl = Fh[103] + Fh[1] + Fh[485] + Fh[18] + Fh[19] + Fh[20] + Fh[21],
        rl = Fh[144] + Fh[114] + Fh[484],
        fl = Fh[78] + Fh[486],
        al = Fh[487],
        _l = Fh[201] + Fh[81] + Fh[488],
        cl = Fh[201] + Fh[81] + Fh[399],
        ul = Fh[187] + Fh[29],
        ol = Fh[201] + Fh[81] + Fh[489],
        dl = Fh[490] + Fh[75],
        ll = Fh[76] + Fh[313] + Fh[76] + Fh[313] + Fh[76],
        bl = Fh[3] + Fh[47] + Fh[130] + Fh[217] + Fh[231],
        vl = Fh[166] + Fh[491] + Fh[29] + Fh[492],
        yl = Fh[3] + Fh[47] + Fh[130] + Fh[217] + Fh[199],
        gl = Fh[11] + Fh[47] + Fh[130] + Fh[217] + Fh[199],
        xl = Fh[407] + Fh[1] + Fh[98],
        wl = Fh[407] + Fh[64] + Fh[129] + Fh[1] + Fh[98],
        ml = Fh[493] + Fh[114] + Fh[298],
        jl = Fh[494] + Fh[23] + Fh[24],
        pl = Fh[495] + Fh[72] + Fh[496],
        kl = Fh[495] + Fh[64] + Fh[129] + Fh[72] + Fh[496],
        Ml = Fh[44] + Fh[185] + Fh[75],
        El = Fh[427],
        Sl = Fh[497],
        Pl = Fh[23] + Fh[498] + Fh[23],
        Il = Fh[72] + Fh[200] + Fh[75],
        Tl = Fh[214] + Fh[100] + Fh[118],
        Cl = Fh[30] + Fh[100] + Fh[118],
        Ol = Fh[499] + Fh[81] + Fh[378],
        $l = Fh[500],
        Fl = Fh[501] + Fh[23] + Fh[24],
        Al = Fh[502],
        Nl = Fh[503],
        ql = Fh[504],
        Bl = Fh[505],
        Dl = Fh[506],
        Rl = Fh[383] + Fh[81] + Fh[385],
        zl = Fh[383] + Fh[81] + Fh[507],
        Ll = Fh[383] + Fh[81] + Fh[386],
        Gl = Fh[508] + Fh[81] + Fh[385],
        Yl = Fh[508] + Fh[81] + Fh[507],
        Hl = Fh[508] + Fh[81] + Fh[386],
        Xl = Fh[384] + Fh[81] + Fh[385],
        Wl = Fh[384] + Fh[81] + Fh[507],
        Vl = Fh[384] + Fh[81] + Fh[386],
        Ul = Fh[509],
        Ql = Fh[510],
        Jl = Fh[245] + Fh[511],
        Zl = Fh[427] + Fh[226] + Fh[511],
        Kl = Fh[427] + Fh[468] + Fh[511],
        tb = Fh[512] + Fh[41] + Fh[42],
        ib = Fh[359] + Fh[83] + Fh[513],
        nb = Fh[427] + Fh[359] + Fh[23] + Fh[24] + Fh[511],
        eb = Fh[427] + Fh[512] + Fh[41] + Fh[42] + Fh[511],
        sb = Fh[427] + Fh[69] + Fh[511],
        hb = Fh[359] + Fh[23] + Fh[24],
        rb = Fh[514] + Fh[217] + Fh[231],
        fb = Fh[512] + Fh[217] + Fh[231],
        ab = Fh[3] + Fh[1] + Fh[98] + Fh[217] + Fh[231],
        _b = Fh[515] + Fh[83] + Fh[30],
        cb = Fh[515] + Fh[83] + Fh[11],
        ub = Fh[515],
        ob = Fh[515] + Fh[83] + Fh[14],
        db = Fh[516],
        lb = Fh[517],
        bb = Fh[518],
        vb = Fh[519],
        yb = Fh[11] + Fh[25] + Fh[470],
        gb = Fh[520],
        xb = Fh[14],
        wb = Fh[427] + Fh[223] + Fh[511],
        mb = Fh[427] + Fh[14] + Fh[511],
        jb = Fh[427] + Fh[512] + Fh[217] + Fh[231] + Fh[511],
        pb = Fh[521] + Fh[81] + Fh[522],
        kb = Fh[521] + Fh[81] + Fh[523],
        Mb = Fh[521] + Fh[81] + Fh[524],
        Eb = Fh[521] + Fh[81] + Fh[525] + Fh[81] + Fh[526],
        Sb = Fh[14] + Fh[83] + Fh[513],
        Pb = Fh[359] + Fh[114] + Fh[298],
        Ib = Fh[66] + Fh[44] + Fh[527] + Fh[1] + Fh[528],
        Tb = Fh[55] + Fh[1] + Fh[2],
        Cb = Fh[66] + Fh[1] + Fh[2] + Fh[1] + Fh[529],
        Ob = Fh[3] + Fh[217] + Fh[199],
        $b = Fh[81] + Fh[530],
        Fb = Fh[81] + Fh[531] + Fh[351],
        Ab = Fh[532],
        Nb = Fh[520] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        qb = Fh[438] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        Bb = Fh[223] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        Db = Fh[63] + Fh[38] + Fh[128] + Fh[44] + Fh[60] + Fh[1] + Fh[533],
        Rb = Fh[66] + Fh[38] + Fh[128] + Fh[44] + Fh[60] + Fh[1] + Fh[528],
        zb = Fh[317] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        Lb = Fh[515] + Fh[217] + Fh[231] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        Gb = Fh[61] + Fh[327],
        Yb = Fh[535],
        Hb = Fh[3] + Fh[64] + Fh[536],
        Xb = Fh[11] + Fh[1] + Fh[98],
        Wb = Fh[223] + Fh[537],
        Vb = Fh[538],
        Ub = Fh[539],
        Qb = Fh[114] + Fh[216],
        Jb = Fh[55] + Fh[25] + Fh[540] + Fh[1] + Fh[107],
        Zb = Fh[197] + Fh[44] + Fh[541],
        Kb = Fh[197] + Fh[114] + Fh[168] + Fh[23] + Fh[240],
        tv = Fh[460] + Fh[449] + Fh[542],
        iv = Fh[309] + Fh[104] + Fh[543],
        nv = Fh[544],
        ev = Fh[545],
        sv = Fh[546],
        hv = Fh[30] + Fh[64] + Fh[65] + Fh[25] + Fh[470],
        rv = Fh[11] + Fh[64] + Fh[65] + Fh[25] + Fh[470],
        fv = Fh[547] + Fh[76] + Fh[548] + Fh[76] + Fh[549] + Fh[76] + Fh[550],
        av = Fh[551] + Fh[132] + Fh[72] + Fh[552],
        _v = Fh[76] + Fh[553] + Fh[76] + Fh[157] + Fh[76] + Fh[554] + Fh[76] + Fh[155] + Fh[76] + Fh[555],
        cv = Fh[556],
        uv = Fh[557],
        ov = Fh[558],
        dv = Fh[3] + Fh[1] + Fh[559] + Fh[72] + Fh[560],
        lv = Fh[561],
        bv = Fh[562],
        vv = Fh[563],
        yv = Fh[66] + Fh[64] + Fh[129] + Fh[100] + Fh[564],
        gv = Fh[66] + Fh[1] + Fh[529],
        xv = Fh[565],
        wv = Fh[199] + Fh[72] + Fh[566],
        mv = Fh[567],
        jv = Fh[568] + Fh[1] + Fh[326],
        pv = Fh[569],
        kv = Fh[104] + Fh[189] + Fh[104] + Fh[446] + Fh[104] + Fh[570],
        Mv = Fh[104] + Fh[189] + Fh[104] + Fh[446] + Fh[104] + Fh[571],
        Ev = Fh[104] + Fh[189] + Fh[104] + Fh[572],
        Sv = Fh[104] + Fh[189] + Fh[104] + Fh[573],
        Pv = Fh[104] + Fh[194] + Fh[104] + Fh[446] + Fh[104] + Fh[570],
        Iv = Fh[104] + Fh[194] + Fh[104] + Fh[446] + Fh[104] + Fh[571],
        Tv = Fh[104] + Fh[194] + Fh[104] + Fh[572],
        Cv = Fh[104] + Fh[194] + Fh[104] + Fh[573],
        Ov = Fh[574],
        $v = Fh[328],
        Fv = Fh[575] + Fh[75] + Fh[223] + Fh[545] + Fh[246] + Fh[449] + Fh[576] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[313] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[531] + Fh[588] + Fh[16] + Fh[352] + Fh[449] + Fh[589] + Fh[586] + Fh[590] + Fh[506] + Fh[89] + Fh[591] + Fh[313] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[592] + Fh[589] + Fh[580] + Fh[593] + Fh[506] + Fh[594] + Fh[218] + Fh[595] + Fh[502] + Fh[596] + Fh[349] + Fh[597] + Fh[598] + Fh[599] + Fh[23] + Fh[600] + Fh[449] + Fh[44] + Fh[601] + Fh[44] + Fh[582] + Fh[131] + Fh[602] + Fh[603] + Fh[16] + Fh[604] + Fh[130] + Fh[605] + Fh[218] + Fh[449] + Fh[606] + Fh[607] + Fh[608] + Fh[609] + Fh[599] + Fh[18] + Fh[610] + Fh[276] + Fh[531] + Fh[120] + Fh[348] + Fh[611] + Fh[612] + Fh[613] + Fh[505] + Fh[614] + Fh[582] + Fh[314] + Fh[1] + Fh[615] + Fh[616] + Fh[502] + Fh[18] + Fh[314] + Fh[130] + Fh[18] + Fh[348] + Fh[617] + Fh[159] + Fh[586] + Fh[121] + Fh[582] + Fh[47] + Fh[618] + Fh[619] + Fh[620] + Fh[621] + Fh[622] + Fh[623] + Fh[531] + Fh[624] + Fh[531] + Fh[625] + Fh[352] + Fh[586] + Fh[449] + Fh[348] + Fh[626] + Fh[627] + Fh[628] + Fh[629] + Fh[349] + Fh[630] + Fh[631] + Fh[352] + Fh[29] + Fh[352] + Fh[76] + Fh[574],
        Av = Fh[632] + Fh[15] + Fh[447],
        Nv = Fh[632] + Fh[217] + Fh[218],
        qv = Fh[81] + Fh[633],
        Bv = Fh[313] + Fh[83] + Fh[313],
        Dv = Fh[34] + Fh[114] + Fh[634] + Fh[72] + Fh[635],
        Rv = Fh[34] + Fh[636],
        zv = Fh[316] + Fh[100] + Fh[118],
        Lv = Fh[72] + Fh[200],
        Gv = Fh[44] + Fh[185],
        Yv = Fh[217] + Fh[637],
        Hv = Fh[64] + Fh[65],
        Xv = Fh[44] + Fh[60] + Fh[1] + Fh[533] + Fh[64] + Fh[65],
        Wv = Fh[25] + Fh[26] + Fh[64] + Fh[65],
        Vv = Fh[435] + Fh[638],
        Uv = Fh[38] + Fh[534],
        Qv = Fh[44] + Fh[96],
        Jv = Fh[38] + Fh[128],
        Zv = Fh[72] + Fh[639] + Fh[131] + Fh[439],
        Kv = Fh[38] + Fh[128] + Fh[131] + Fh[439],
        ty = Fh[640] + Fh[470],
        iy = Fh[181] + Fh[448],
        ny = Fh[181] + Fh[164],
        ey = Fh[181] + Fh[169],
        sy = Fh[34] + Fh[131] + Fh[641] + Fh[159] + Fh[160],
        hy = Fh[642] + Fh[38] + Fh[643],
        ry = Fh[435] + Fh[282] + Fh[25] + Fh[26],
        fy = Fh[38] + Fh[644] + Fh[72] + Fh[635],
        ay = Fh[645],
        _y = Fh[646],
        cy = Fh[647],
        uy = Fh[30] + Fh[648] + Fh[110],
        oy = Fh[270] + Fh[83] + Fh[649],
        dy = Fh[270],
        ly = Fh[650],
        by = Fh[651],
        vy = Fh[651] + Fh[83] + Fh[435],
        yy = Fh[651] + Fh[83] + Fh[41],
        gy = Fh[652],
        xy = Fh[652] + Fh[83] + Fh[435],
        wy = Fh[652] + Fh[83] + Fh[41],
        my = Fh[652] + Fh[83] + Fh[435] + Fh[83] + Fh[41],
        jy = Fh[652] + Fh[83] + Fh[41] + Fh[83] + Fh[435],
        py = Fh[653] + Fh[83] + Fh[127],
        ky = Fh[653] + Fh[83] + Fh[126],
        My = Fh[653] + Fh[83] + Fh[92],
        Ey = Fh[653] + Fh[83] + Fh[93],
        Sy = Fh[654],
        Py = Fh[655],
        Iy = Fh[649],
        Ty = Fh[656],
        Cy = Fh[657],
        Oy = Fh[658],
        $y = Fh[659],
        Fy = Fh[660],
        Ay = Fh[661],
        Ny = Fh[662],
        qy = Fh[663],
        By = Fh[664],
        Dy = Fh[665],
        Ry = Fh[666],
        zy = Fh[667],
        Ly = Fh[668],
        Gy = Fh[669],
        Yy = Fh[670] + Fh[83] + Fh[671],
        Hy = Fh[670] + Fh[83] + Fh[314],
        Xy = Fh[670] + Fh[83] + Fh[89],
        Wy = Fh[670] + Fh[83] + Fh[315],
        Vy = Fh[670] + Fh[83] + Fh[348],
        Uy = Fh[670] + Fh[83] + Fh[349],
        Qy = Fh[670] + Fh[83] + Fh[350],
        Jy = Fh[670] + Fh[83] + Fh[351],
        Zy = Fh[670] + Fh[83] + Fh[352],
        Ky = Fh[670] + Fh[83] + Fh[175],
        tg = Fh[203] + Fh[81] + Fh[672] + Fh[81] + Fh[363] + Fh[81] + Fh[673],
        ig = Fh[674],
        ng = Fh[203] + Fh[81] + Fh[672] + Fh[81] + Fh[363] + Fh[81] + Fh[395],
        eg = Fh[203] + Fh[81] + Fh[672] + Fh[81] + Fh[363] + Fh[81] + Fh[675],
        sg = Fh[676],
        hg = Fh[203] + Fh[81] + Fh[677] + Fh[81] + Fh[363] + Fh[81] + Fh[394],
        rg = Fh[203] + Fh[81] + Fh[677] + Fh[81] + Fh[363] + Fh[81] + Fh[395],
        fg = Fh[203] + Fh[81] + Fh[677] + Fh[81] + Fh[363] + Fh[81] + Fh[678],
        ag = Fh[679],
        _g = Fh[680] + Fh[81] + Fh[363],
        cg = Fh[680] + Fh[81] + Fh[363] + Fh[81] + Fh[681],
        ug = Fh[680] + Fh[81] + Fh[682],
        og = Fh[680] + Fh[81] + Fh[683],
        dg = Fh[680] + Fh[81] + Fh[681] + Fh[81] + Fh[684],
        lg = Fh[680] + Fh[81] + Fh[252],
        bg = Fh[683] + Fh[81] + Fh[393],
        vg = Fh[685] + Fh[81] + Fh[236],
        yg = Fh[137] + Fh[81] + Fh[686],
        gg = Fh[235] + Fh[81] + Fh[499] + Fh[81] + Fh[399],
        xg = Fh[687] + Fh[44] + Fh[192] + Fh[100] + Fh[193],
        wg = Fh[197] + Fh[1] + Fh[451],
        mg = Fh[263],
        jg = Fh[688] + Fh[114] + Fh[195],
        pg = Fh[689] + Fh[1] + Fh[690] + Fh[114] + Fh[195],
        kg = Fh[691] + Fh[1] + Fh[690] + Fh[114] + Fh[195],
        Mg = Fh[499] + Fh[81] + Fh[692] + Fh[81] + Fh[693],
        Eg = Fh[217] + Fh[222] + Fh[29] + Fh[181] + Fh[29] + Fh[87] + Fh[247],
        Sg = Fh[694],
        Pg = Fh[233] + Fh[217] + Fh[222],
        Ig = Fh[695],
        Tg = Fh[221] + Fh[72] + Fh[366],
        Cg = Fh[78] + Fh[696],
        Og = Fh[697],
        $g = Fh[460] + Fh[18] + Fh[698],
        Fg = Fh[460] + Fh[47] + Fh[699],
        Ag = Fh[700],
        Ng = Fh[78] + Fh[701],
        qg = Fh[487] + Fh[29],
        Bg = Fh[220] + Fh[72] + Fh[366],
        Dg = Fh[78] + Fh[702],
        Rg = Fh[220] + Fh[114] + Fh[168],
        zg = Fh[78] + Fh[703],
        Lg = Fh[221] + Fh[114] + Fh[168],
        Gg = Fh[704],
        Yg = Fh[650] + Fh[1] + Fh[705],
        Hg = Fh[650] + Fh[47] + Fh[706],
        Xg = Fh[650] + Fh[15] + Fh[124] + Fh[120],
        Wg = Fh[650] + Fh[15] + Fh[124] + Fh[121],
        Vg = Fh[25] + Fh[707] + Fh[708],
        Ug = Fh[709] + Fh[1] + Fh[705],
        Qg = Fh[64] + Fh[710] + Fh[708],
        Jg = Fh[709] + Fh[1] + Fh[705] + Fh[47] + Fh[711] + Fh[131] + Fh[240],
        Zg = Fh[206] + Fh[72] + Fh[566],
        Kg = Fh[246],
        tx = Fh[181],
        ix = Fh[331] + Fh[217] + Fh[222],
        nx = Fh[0] + Fh[217] + Fh[222],
        ex = Fh[3] + Fh[18] + Fh[712] + Fh[217] + Fh[713],
        sx = Fh[714],
        hx = Fh[715],
        rx = Fh[716] + Fh[81] + Fh[363] + Fh[81] + Fh[717],
        fx = Fh[716] + Fh[81] + Fh[363] + Fh[81] + Fh[254],
        ax = Fh[197] + Fh[25] + Fh[718] + Fh[276] + Fh[277],
        _x = Fh[197] + Fh[100] + Fh[719] + Fh[276] + Fh[277],
        cx = Fh[30] + Fh[1] + Fh[705] + Fh[72] + Fh[127],
        ux = Fh[254] + Fh[81] + Fh[716] + Fh[81] + Fh[382],
        ox = Fh[254] + Fh[81] + Fh[716] + Fh[81] + Fh[380],
        dx = Fh[717] + Fh[81] + Fh[716],
        lx = Fh[720] + Fh[81] + Fh[254] + Fh[81] + Fh[716],
        bx = Fh[720] + Fh[81] + Fh[254] + Fh[81] + Fh[716] + Fh[81] + Fh[382],
        vx = Fh[720] + Fh[81] + Fh[717] + Fh[81] + Fh[716],
        yx = Fh[615],
        gx = Fh[498],
        xx = Fh[612],
        wx = Fh[721] + Fh[81] + Fh[722] + Fh[81] + Fh[723],
        mx = Fh[721] + Fh[81] + Fh[203] + Fh[81] + Fh[723],
        jx = Fh[721] + Fh[81] + Fh[724] + Fh[81] + Fh[723],
        px = Fh[721] + Fh[81] + Fh[725] + Fh[81] + Fh[723],
        kx = Fh[721] + Fh[81] + Fh[726] + Fh[81] + Fh[723],
        Mx = Fh[721] + Fh[81] + Fh[727],
        Ex = Fh[34] + Fh[23] + Fh[728],
        Sx = Fh[44] + Fh[224] + Fh[72] + Fh[729],
        Px = Fh[55] + Fh[169],
        Ix = Fh[438] + Fh[1] + Fh[705],
        Tx = Fh[438] + Fh[72] + Fh[730] + Fh[47] + Fh[706],
        Cx = Fh[438] + Fh[72] + Fh[730] + Fh[15] + Fh[124] + Fh[120],
        Ox = Fh[438] + Fh[72] + Fh[730] + Fh[15] + Fh[124] + Fh[121],
        $x = Fh[680] + Fh[81] + Fh[363] + Fh[81] + Fh[683],
        Fx = Fh[438] + Fh[47] + Fh[731],
        Ax = Fh[237] + Fh[1] + Fh[732],
        Nx = Fh[237] + Fh[733] + Fh[734],
        qx = Fh[438] + Fh[114] + Fh[298],
        Bx = Fh[735] + Fh[72] + Fh[366],
        Dx = Fh[735],
        Rx = Fh[221] + Fh[1] + Fh[705],
        zx = Fh[221] + Fh[276] + Fh[277],
        Lx = Fh[736],
        Gx = Fh[737],
        Yx = Fh[738] + Fh[83] + Fh[739],
        Hx = Fh[740] + Fh[83] + Fh[739],
        Xx = Fh[741],
        Wx = Fh[156],
        Vx = Fh[742],
        Ux = Fh[743] + Fh[44] + Fh[224],
        Qx = Fh[74] + Fh[75] + Fh[313] + Fh[76] + Fh[313] + Fh[76] + Fh[313] + Fh[76] + Fh[313] + Fh[77],
        Jx = Fh[679] + Fh[25] + Fh[744],
        Zx = Fh[78] + Fh[314] + Fh[1] + Fh[350] + Fh[47] + Fh[589] + Fh[38],
        Kx = Fh[78] + Fh[745],
        tw = Fh[78] + Fh[746] + Fh[64] + Fh[352] + Fh[47],
        iw = Fh[78] + Fh[747] + Fh[47] + Fh[748],
        nw = Fh[78] + Fh[747] + Fh[18] + Fh[749],
        ew = Fh[78] + Fh[750] + Fh[1] + Fh[751],
        sw = Fh[78] + Fh[752],
        hw = Fh[78] + Fh[314] + Fh[38] + Fh[350] + Fh[1] + Fh[589] + Fh[20],
        rw = Fh[78] + Fh[753] + Fh[47] + Fh[313],
        fw = Fh[78] + Fh[754] + Fh[755],
        aw = Fh[78] + Fh[314] + Fh[20] + Fh[350] + Fh[756] + Fh[89],
        _w = Fh[78] + Fh[747] + Fh[18] + Fh[757],
        cw = Fh[78] + Fh[758],
        uw = Fh[78] + Fh[89] + Fh[599] + Fh[352] + Fh[759],
        ow = Fh[78] + Fh[760],
        dw = Fh[688],
        lw = Fh[78] + Fh[761] + Fh[38] + Fh[751],
        bw = Fh[78] + Fh[762],
        vw = Fh[78] + Fh[314] + Fh[20] + Fh[763] + Fh[18] + Fh[348],
        yw = Fh[78] + Fh[764] + Fh[765] + Fh[89],
        gw = Fh[78] + Fh[766] + Fh[767],
        xw = Fh[78] + Fh[314] + Fh[64] + Fh[350] + Fh[768] + Fh[313],
        ww = Fh[78] + Fh[769],
        mw = Fh[78] + Fh[16] + Fh[351] + Fh[16] + Fh[352] + Fh[16] + Fh[352],
        jw = Fh[78] + Fh[350] + Fh[18] + Fh[770],
        pw = Fh[78] + Fh[348] + Fh[20] + Fh[348] + Fh[1] + Fh[348] + Fh[47],
        kw = Fh[78] + Fh[771],
        Mw = Fh[78] + Fh[772],
        Ew = Fh[78] + Fh[350] + Fh[20] + Fh[350] + Fh[64] + Fh[350] + Fh[20],
        Sw = Fh[78] + Fh[348] + Fh[1] + Fh[773],
        Pw = Fh[78] + Fh[774],
        Iw = Fh[78] + Fh[351] + Fh[38] + Fh[351] + Fh[38] + Fh[351] + Fh[38],
        Tw = Fh[78] + Fh[775],
        Cw = Fh[78] + Fh[776],
        Ow = Fh[78] + Fh[777],
        $w = Fh[78] + Fh[589] + Fh[64] + Fh[589] + Fh[38] + Fh[589] + Fh[38],
        Fw = Fh[78] + Fh[18] + Fh[351] + Fh[18] + Fh[349] + Fh[18] + Fh[348],
        Aw = Fh[78] + Fh[18] + Fh[589] + Fh[18] + Fh[350] + Fh[18] + Fh[349],
        Nw = Fh[78] + Fh[18] + Fh[351] + Fh[18] + Fh[348] + Fh[18] + Fh[315],
        qw = Fh[78] + Fh[778],
        Bw = Fh[78] + Fh[64] + Fh[589] + Fh[779],
        Dw = Fh[78] + Fh[589] + Fh[780] + Fh[313] + Fh[498] + Fh[313],
        Rw = Fh[78] + Fh[503] + Fh[589] + Fh[781],
        zw = Fh[78] + Fh[315] + Fh[599] + Fh[315] + Fh[498] + Fh[782],
        Lw = Fh[78] + Fh[47] + Fh[89] + Fh[783],
        Gw = Fh[78] + Fh[89] + Fh[64] + Fh[352] + Fh[784],
        Yw = Fh[444] + Fh[18] + Fh[785],
        Hw = Fh[78] + Fh[786],
        Xw = Fh[78] + Fh[506] + Fh[349] + Fh[506] + Fh[349] + Fh[506] + Fh[350],
        Ww = Fh[369] + Fh[104],
        Vw = Fh[286],
        Uw = Fh[787],
        Qw = Fh[788],
        Jw = Fh[789],
        Zw = Fh[70] + Fh[47] + Fh[790],
        Kw = Fh[70] + Fh[47] + Fh[791],
        tm = Fh[70],
        im = Fh[70] + Fh[105] + Fh[792],
        nm = Fh[217] + Fh[321] + Fh[29] + Fh[793] + Fh[29] + Fh[794] + Fh[83],
        em = Fh[795],
        sm = Fh[796],
        hm = Fh[797],
        rm = Fh[23] + Fh[798] + Fh[29] + Fh[498] + Fh[29] + Fh[797] + Fh[29] + Fh[799] + Fh[83],
        fm = Fh[292] + Fh[20] + Fh[291],
        am = Fh[800],
        _m = Fh[738] + Fh[100] + Fh[801],
        cm = Fh[802],
        um = Fh[292] + Fh[72] + Fh[200],
        om = Fh[803] + Fh[1] + Fh[705],
        dm = Fh[804] + Fh[18] + Fh[805] + Fh[100] + Fh[193],
        lm = Fh[806],
        bm = Fh[807],
        vm = Fh[482] + Fh[217] + Fh[808],
        ym = Fh[809],
        gm = Fh[810],
        xm = Fh[811],
        wm = Fh[812],
        mm = Fh[813] + Fh[435] + Fh[814],
        jm = Fh[813] + Fh[38] + Fh[128],
        pm = Fh[815],
        km = Fh[816],
        Mm = Fh[817],
        Em = Fh[818],
        Sm = Fh[819],
        Pm = Fh[818] + Fh[38] + Fh[128],
        Im = Fh[820],
        Tm = Fh[821] + Fh[1] + Fh[240],
        Cm = Fh[822],
        Om = Fh[168] + Fh[114] + Fh[298],
        $m = Fh[823],
        Fm = Fh[290] + Fh[72] + Fh[200],
        Am = Fh[824] + Fh[131] + Fh[570] + Fh[1] + Fh[240] + Fh[72] + Fh[200],
        Nm = Fh[825],
        qm = Fh[168],
        Bm = Fh[826],
        Dm = Fh[105] + Fh[827] + Fh[29] + Fh[828] + Fh[511] + Fh[313] + Fh[829],
        Rm = Fh[555],
        zm = Fh[830],
        Lm = Fh[800] + Fh[159] + Fh[160],
        Gm = Fh[831] + Fh[159] + Fh[160],
        Ym = Fh[832] + Fh[1] + Fh[240],
        Hm = Fh[205] + Fh[41] + Fh[833] + Fh[247],
        Xm = Fh[834],
        Wm = Fh[205] + Fh[44] + Fh[835] + Fh[29] + Fh[38] + Fh[836] + Fh[247],
        Vm = Fh[837] + Fh[38] + Fh[836],
        Um = Fh[838],
        Qm = Fh[839],
        Jm = Fh[16] + Fh[840] + Fh[506] + Fh[348] + Fh[599] + Fh[841] + Fh[842] + Fh[351] + Fh[498] + Fh[843] + Fh[599] + Fh[844] + Fh[503] + Fh[315] + Fh[845] + Fh[589] + Fh[846] + Fh[847] + Fh[848] + Fh[849] + Fh[850] + Fh[313] + Fh[506] + Fh[349] + Fh[16] + Fh[851] + Fh[498] + Fh[852] + Fh[853] + Fh[854] + Fh[506] + Fh[351] + Fh[855] + Fh[315] + Fh[498] + Fh[856] + Fh[857] + Fh[348] + Fh[858] + Fh[859] + Fh[860] + Fh[861] + Fh[503] + Fh[849] + Fh[503] + Fh[862] + Fh[863] + Fh[89] + Fh[864] + Fh[865] + Fh[506] + Fh[866] + Fh[498] + Fh[89] + Fh[76] + Fh[867] + Fh[314] + Fh[498] + Fh[868] + Fh[199] + Fh[869] + Fh[498] + Fh[870] + Fh[16] + Fh[871] + Fh[872] + Fh[873] + Fh[874] + Fh[875] + Fh[876] + Fh[348] + Fh[877] + Fh[878] + Fh[879] + Fh[880] + Fh[498] + Fh[351] + Fh[881] + Fh[315] + Fh[503] + Fh[313] + Fh[882] + Fh[883] + Fh[884] + Fh[885] + Fh[599] + Fh[886] + Fh[887] + Fh[888] + Fh[199] + Fh[889] + Fh[599] + Fh[890] + Fh[872] + Fh[315] + Fh[503] + Fh[891] + Fh[498] + Fh[589] + Fh[892] + Fh[893] + Fh[894] + Fh[895] + Fh[599] + Fh[896] + Fh[881] + Fh[589] + Fh[498] + Fh[897] + Fh[898] + Fh[749] + Fh[899] + Fh[313] + Fh[860] + Fh[900] + Fh[498] + Fh[89] + Fh[503],
        Zm = Fh[205] + Fh[25] + Fh[901] + Fh[29] + Fh[55] + Fh[511],
        Km = Fh[432] + Fh[902] + Fh[903] + Fh[432] + Fh[315] + Fh[18] + Fh[432] + Fh[902] + Fh[904] + Fh[83] + Fh[309] + Fh[83] + Fh[812] + Fh[432] + Fh[89] + Fh[1] + Fh[905] + Fh[83] + Fh[309] + Fh[83] + Fh[812],
        tj = Fh[906],
        ij = Fh[907],
        nj = Fh[908],
        ej = Fh[62] + Fh[114],
        sj = Fh[909],
        hj = Fh[351] + Fh[83],
        rj = Fh[867],
        fj = Fh[293],
        aj = Fh[910],
        _j = Fh[1] + Fh[451],
        cj = Fh[100] + Fh[911],
        uj = Fh[1] + Fh[912],
        oj = Fh[913],
        dj = Fh[914],
        lj = Fh[197],
        bj = Fh[915],
        vj = Fh[916],
        yj = Fh[917],
        gj = Fh[918],
        xj = Fh[919],
        wj = Fh[920],
        mj = Fh[484],
        jj = Fh[921],
        pj = Fh[922],
        kj = Fh[369] + Fh[923],
        Mj = Fh[29] + Fh[295] + Fh[29] + Fh[924] + Fh[349],
        Ej = Fh[925],
        Sj = Fh[926],
        Pj = Fh[927] + Fh[238] + Fh[928],
        Ij = Fh[929],
        Tj = Fh[930] + Fh[83] + Fh[931] + Fh[83] + Fh[314],
        Cj = Fh[317] + Fh[23] + Fh[240],
        Oj = Fh[72] + Fh[932],
        $j = Fh[933],
        Fj = Fh[64] + Fh[129],
        Aj = Fh[24],
        Nj = Fh[934],
        qj = Fh[935] + Fh[238] + Fh[928],
        Bj = Fh[38] + Fh[836],
        Dj = Fh[936],
        Rj = Fh[168] + Fh[89] + Fh[38],
        zj = Fh[502] + Fh[114] + Fh[168],
        Lj = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[488],
        Gj = Fh[61] + Fh[67],
        Yj = Fh[0] + Fh[64] + Fh[319],
        Hj = Fh[268] + Fh[41] + Fh[937],
        Xj = Fh[373],
        Wj = Fh[268],
        Vj = Fh[369] + Fh[83] + Fh[64] + Fh[129],
        Uj = Fh[373] + Fh[1] + Fh[938],
        Qj = Fh[612] + Fh[217] + Fh[231],
        Jj = Fh[258] + Fh[72] + Fh[939],
        Zj = Fh[940],
        Kj = Fh[369] + Fh[83] + Fh[64] + Fh[319],
        tp = Fh[941],
        ip = Fh[408] + Fh[64] + Fh[409],
        np = Fh[942] + Fh[83] + Fh[943],
        ep = Fh[944] + Fh[44] + Fh[224] + Fh[1] + Fh[533],
        sp = Fh[55],
        hp = Fh[369] + Fh[104] + Fh[493],
        rp = Fh[61] + Fh[945],
        fp = Fh[0] + Fh[25] + Fh[946],
        ap = Fh[945],
        _p = Fh[266],
        cp = Fh[55] + Fh[20] + Fh[324],
        up = Fh[369] + Fh[83] + Fh[23] + Fh[240],
        op = Fh[947] + Fh[83] + Fh[30],
        dp = Fh[947] + Fh[83] + Fh[11],
        lp = Fh[948],
        bp = Fh[274] + Fh[44] + Fh[96],
        vp = Fh[61] + Fh[942],
        yp = Fh[949] + Fh[81] + Fh[950],
        gp = Fh[346] + Fh[81] + Fh[723],
        xp = Fh[369] + Fh[83] + Fh[72] + Fh[400] + Fh[23] + Fh[240],
        wp = Fh[942],
        mp = Fh[72] + Fh[400] + Fh[23] + Fh[240],
        jp = Fh[278],
        pp = Fh[369] + Fh[83] + Fh[47] + Fh[951],
        kp = Fh[47] + Fh[951],
        Mp = Fh[50] + Fh[23] + Fh[240],
        Ep = Fh[471] + Fh[72] + Fh[415] + Fh[23] + Fh[416],
        Sp = Fh[952] + Fh[81] + Fh[363],
        Pp = Fh[952] + Fh[81] + Fh[363] + Fh[81] + Fh[334],
        Ip = Fh[952] + Fh[81] + Fh[953],
        Tp = Fh[952] + Fh[81] + Fh[954],
        Cp = Fh[952] + Fh[81] + Fh[955] + Fh[81] + Fh[399],
        Op = Fh[268] + Fh[20] + Fh[291],
        $p = Fh[61] + Fh[956] + Fh[114] + Fh[298],
        Fp = Fh[956],
        Ap = Fh[61] + Fh[209] + Fh[72] + Fh[200],
        Np = Fh[957],
        qp = Fh[369] + Fh[83] + Fh[276] + Fh[958],
        Bp = Fh[209] + Fh[72] + Fh[200],
        Dp = Fh[956] + Fh[114] + Fh[298],
        Rp = Fh[956] + Fh[217] + Fh[222],
        zp = Fh[276] + Fh[958],
        Lp = Fh[369] + Fh[83] + Fh[114] + Fh[168],
        Gp = Fh[114] + Fh[168],
        Yp = Fh[268] + Fh[38] + Fh[128],
        Hp = Fh[78] + Fh[959],
        Xp = Fh[61] + Fh[274] + Fh[44] + Fh[185],
        Wp = Fh[438] + Fh[47] + Fh[960] + Fh[1] + Fh[705],
        Vp = Fh[221] + Fh[100] + Fh[118],
        Up = Fh[220] + Fh[100] + Fh[118],
        Qp = Fh[961] + Fh[72] + Fh[639],
        Jp = Fh[962],
        Zp = Fh[961] + Fh[72] + Fh[639] + Fh[72] + Fh[939],
        Kp = Fh[263] + Fh[120],
        tk = Fh[263] + Fh[121],
        ik = Fh[680] + Fh[81] + Fh[363] + Fh[81] + Fh[683] + Fh[81] + Fh[334],
        nk = Fh[270] + Fh[1] + Fh[705],
        ek = Fh[270] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        sk = Fh[270] + Fh[25] + Fh[283] + Fh[38] + Fh[282] + Fh[15] + Fh[124],
        hk = Fh[61] + Fh[275] + Fh[1] + Fh[705],
        rk = Fh[61] + Fh[268] + Fh[38] + Fh[128],
        fk = Fh[61] + Fh[275] + Fh[276] + Fh[277],
        ak = Fh[207],
        _k = Fh[211] + Fh[72] + Fh[200],
        ck = Fh[66] + Fh[47] + Fh[212] + Fh[1] + Fh[528],
        uk = Fh[61] + Fh[268] + Fh[25] + Fh[963],
        ok = Fh[61] + Fh[268] + Fh[41] + Fh[937],
        dk = Fh[61] + Fh[964],
        lk = Fh[61] + Fh[271] + Fh[64] + Fh[281],
        bk = Fh[965],
        vk = Fh[966] + Fh[41] + Fh[967],
        yk = Fh[66] + Fh[38] + Fh[128] + Fh[1] + Fh[528],
        gk = Fh[41] + Fh[937],
        xk = Fh[18] + Fh[262] + Fh[44] + Fh[185],
        wk = Fh[25] + Fh[963],
        mk = Fh[47] + Fh[960] + Fh[276] + Fh[277],
        jk = Fh[100] + Fh[267],
        pk = Fh[438] + Fh[83] + Fh[738],
        kk = Fh[438] + Fh[83] + Fh[270],
        Mk = Fh[680] + Fh[81] + Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[120],
        Ek = Fh[680] + Fh[81] + Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[121],
        Sk = Fh[438] + Fh[83] + Fh[226],
        Pk = Fh[969] + Fh[81] + Fh[252],
        Ik = Fh[709] + Fh[83] + Fh[738],
        Tk = Fh[969] + Fh[81] + Fh[252] + Fh[81] + Fh[248] + Fh[81] + Fh[249],
        Ck = Fh[681] + Fh[81] + Fh[684],
        Ok = Fh[650] + Fh[83] + Fh[970],
        $k = Fh[681] + Fh[81] + Fh[252],
        Fk = Fh[650] + Fh[83] + Fh[738],
        Ak = Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[120],
        Nk = Fh[650] + Fh[83] + Fh[263] + Fh[83] + Fh[829],
        qk = Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[121],
        Bk = Fh[650] + Fh[83] + Fh[263] + Fh[83] + Fh[130],
        Dk = Fh[332] + Fh[81] + Fh[971],
        Rk = Fh[972] + Fh[83] + Fh[220],
        zk = Fh[332] + Fh[81] + Fh[971] + Fh[81] + Fh[488],
        Lk = Fh[972] + Fh[83] + Fh[220] + Fh[83] + Fh[108],
        Gk = Fh[332] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        Yk = Fh[972] + Fh[83] + Fh[237] + Fh[83] + Fh[974],
        Hk = Fh[332] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        Xk = Fh[332] + Fh[81] + Fh[975] + Fh[81] + Fh[252],
        Wk = Fh[972] + Fh[83] + Fh[221] + Fh[83] + Fh[738],
        Vk = Fh[332] + Fh[81] + Fh[975] + Fh[81] + Fh[716],
        Uk = Fh[972] + Fh[83] + Fh[221] + Fh[83] + Fh[976],
        Qk = Fh[332] + Fh[81] + Fh[977],
        Jk = Fh[972] + Fh[83] + Fh[735],
        Zk = Fh[332] + Fh[81] + Fh[977] + Fh[81] + Fh[488],
        Kk = Fh[972] + Fh[83] + Fh[735] + Fh[83] + Fh[108],
        tM = Fh[203] + Fh[81] + Fh[672],
        iM = Fh[237] + Fh[83] + Fh[978],
        nM = Fh[203] + Fh[81] + Fh[677],
        eM = Fh[237] + Fh[83] + Fh[302],
        sM = Fh[979] + Fh[81] + Fh[387] + Fh[81] + Fh[980],
        hM = Fh[261] + Fh[83] + Fh[981] + Fh[83] + Fh[942],
        rM = Fh[982] + Fh[81] + Fh[252],
        fM = Fh[275] + Fh[83] + Fh[738],
        aM = Fh[982] + Fh[81] + Fh[716],
        _M = Fh[275] + Fh[83] + Fh[976],
        cM = Fh[683],
        uM = Fh[270] + Fh[83] + Fh[183],
        oM = Fh[683] + Fh[81] + Fh[252],
        dM = Fh[270] + Fh[83] + Fh[738],
        lM = Fh[683] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        bM = Fh[270] + Fh[83] + Fh[237] + Fh[83] + Fh[974],
        vM = Fh[683] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        yM = Fh[270] + Fh[83] + Fh[509],
        gM = Fh[953],
        xM = Fh[235] + Fh[81] + Fh[982] + Fh[81] + Fh[252],
        wM = Fh[235] + Fh[81] + Fh[982] + Fh[81] + Fh[716],
        mM = Fh[235] + Fh[81] + Fh[683],
        jM = Fh[246] + Fh[83] + Fh[270] + Fh[83] + Fh[183],
        pM = Fh[235] + Fh[81] + Fh[683] + Fh[81] + Fh[488],
        kM = Fh[235] + Fh[81] + Fh[683] + Fh[81] + Fh[252],
        MM = Fh[246] + Fh[83] + Fh[270] + Fh[83] + Fh[108],
        EM = Fh[235] + Fh[81] + Fh[683] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        SM = Fh[235] + Fh[81] + Fh[683] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        PM = Fh[235] + Fh[81] + Fh[393],
        IM = Fh[235] + Fh[81] + Fh[683] + Fh[81] + Fh[393],
        TM = Fh[246] + Fh[83] + Fh[509],
        CM = Fh[235] + Fh[81] + Fh[953],
        OM = Fh[246] + Fh[83] + Fh[243],
        $M = Fh[983] + Fh[81] + Fh[984],
        FM = Fh[822] + Fh[83] + Fh[227],
        AM = Fh[983] + Fh[81] + Fh[985],
        NM = Fh[822] + Fh[83] + Fh[280],
        qM = Fh[983] + Fh[81] + Fh[986] + Fh[81] + Fh[985],
        BM = Fh[983] + Fh[81] + Fh[252],
        DM = Fh[822] + Fh[83] + Fh[738],
        RM = Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[399],
        zM = Fh[822] + Fh[83] + Fh[202] + Fh[83] + Fh[948],
        LM = Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[489],
        GM = Fh[822] + Fh[83] + Fh[202] + Fh[83] + Fh[987],
        YM = Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[488],
        HM = Fh[822] + Fh[83] + Fh[202] + Fh[83] + Fh[108],
        XM = Fh[983] + Fh[81] + Fh[953],
        WM = Fh[822] + Fh[83] + Fh[243],
        VM = Fh[983] + Fh[81] + Fh[685] + Fh[81] + Fh[236],
        UM = Fh[822] + Fh[83] + Fh[273] + Fh[83] + Fh[183],
        QM = Fh[983] + Fh[81] + Fh[685],
        JM = Fh[822] + Fh[83] + Fh[273],
        ZM = Fh[983] + Fh[81] + Fh[393],
        KM = Fh[822] + Fh[83] + Fh[509],
        tE = Fh[983] + Fh[81] + Fh[968] + Fh[81] + Fh[120],
        iE = Fh[822] + Fh[83] + Fh[263] + Fh[83] + Fh[829],
        nE = Fh[983] + Fh[81] + Fh[968] + Fh[81] + Fh[121],
        eE = Fh[822] + Fh[83] + Fh[263] + Fh[83] + Fh[130],
        sE = Fh[983] + Fh[81] + Fh[399],
        hE = Fh[822] + Fh[83] + Fh[948],
        rE = Fh[983] + Fh[81] + Fh[988] + Fh[81] + Fh[985],
        fE = Fh[822] + Fh[83] + Fh[989] + Fh[83] + Fh[280],
        aE = Fh[983] + Fh[81] + Fh[683],
        _E = Fh[822] + Fh[83] + Fh[270],
        cE = Fh[983] + Fh[81] + Fh[683] + Fh[81] + Fh[488],
        uE = Fh[822] + Fh[83] + Fh[270] + Fh[83] + Fh[108],
        oE = Fh[983] + Fh[81] + Fh[982] + Fh[81] + Fh[252],
        dE = Fh[983] + Fh[81] + Fh[982] + Fh[81] + Fh[716],
        lE = Fh[983] + Fh[81] + Fh[990],
        bE = Fh[822] + Fh[83] + Fh[264],
        vE = Fh[983] + Fh[81] + Fh[681] + Fh[81] + Fh[684],
        yE = Fh[822] + Fh[83] + Fh[650] + Fh[83] + Fh[970],
        gE = Fh[822] + Fh[83] + Fh[650] + Fh[83] + Fh[738],
        xE = Fh[983] + Fh[81] + Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[120],
        wE = Fh[983] + Fh[81] + Fh[681] + Fh[81] + Fh[968] + Fh[81] + Fh[121],
        mE = Fh[983] + Fh[81] + Fh[991] + Fh[81] + Fh[385],
        jE = Fh[822] + Fh[83] + Fh[66] + Fh[83] + Fh[127],
        pE = Fh[952] + Fh[81] + Fh[982] + Fh[81] + Fh[252],
        kE = Fh[952] + Fh[81] + Fh[982] + Fh[81] + Fh[716],
        ME = Fh[952] + Fh[81] + Fh[971],
        EE = Fh[956] + Fh[83] + Fh[220],
        SE = Fh[952] + Fh[81] + Fh[971] + Fh[81] + Fh[488],
        PE = Fh[956] + Fh[83] + Fh[220] + Fh[83] + Fh[738],
        IE = Fh[952] + Fh[81] + Fh[971] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        TE = Fh[952] + Fh[81] + Fh[971] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        CE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[984],
        OE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[985],
        $E = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[986] + Fh[81] + Fh[985],
        FE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[252],
        AE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[399],
        NE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[489],
        qE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[201] + Fh[81] + Fh[488],
        BE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[953],
        DE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[685] + Fh[81] + Fh[236],
        RE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[685],
        zE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[393],
        LE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[968] + Fh[81] + Fh[120],
        GE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[968] + Fh[81] + Fh[121],
        YE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[683],
        HE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[683] + Fh[81] + Fh[488],
        XE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[982] + Fh[81] + Fh[252],
        WE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[982] + Fh[81] + Fh[716],
        VE = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[983] + Fh[81] + Fh[990],
        UE = Fh[374] + Fh[81] + Fh[236],
        QE = Fh[356] + Fh[83] + Fh[183],
        JE = Fh[374] + Fh[81] + Fh[252],
        ZE = Fh[356] + Fh[83] + Fh[738],
        KE = Fh[374] + Fh[81] + Fh[977],
        tS = Fh[356] + Fh[83] + Fh[735],
        iS = Fh[374] + Fh[81] + Fh[977] + Fh[81] + Fh[488],
        nS = Fh[356] + Fh[83] + Fh[735] + Fh[83] + Fh[108],
        eS = Fh[374] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        sS = Fh[356] + Fh[83] + Fh[237] + Fh[83] + Fh[974],
        hS = Fh[374] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        rS = Fh[374] + Fh[81] + Fh[993] + Fh[81] + Fh[968],
        fS = Fh[356] + Fh[83] + Fh[305] + Fh[83] + Fh[263],
        aS = Fh[374] + Fh[81] + Fh[723] + Fh[81] + Fh[968],
        _S = Fh[356] + Fh[83] + Fh[55] + Fh[83] + Fh[263],
        cS = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[994],
        uS = Fh[356] + Fh[83] + Fh[408] + Fh[83] + Fh[995],
        oS = Fh[356] + Fh[83] + Fh[996] + Fh[83] + Fh[997],
        dS = Fh[356] + Fh[83] + Fh[653],
        lS = Fh[356] + Fh[83] + Fh[998] + Fh[83] + Fh[999],
        bS = Fh[356] + Fh[83] + Fh[28] + Fh[83] + Fh[1e3],
        vS = Fh[356] + Fh[83] + Fh[28] + Fh[83] + Fh[69],
        yS = Fh[356] + Fh[83] + Fh[1001],
        gS = Fh[356] + Fh[83] + Fh[1001] + Fh[83] + Fh[509],
        xS = Fh[346] + Fh[81] + Fh[993],
        wS = Fh[670] + Fh[83] + Fh[305],
        mS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[399],
        jS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[948],
        pS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[968],
        kS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[263],
        MS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[971],
        ES = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[220],
        SS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[971] + Fh[81] + Fh[488],
        PS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[977],
        IS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[735],
        TS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[977] + Fh[81] + Fh[488],
        CS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        OS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[237] + Fh[83] + Fh[974],
        $S = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        FS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[975] + Fh[81] + Fh[252],
        AS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[975] + Fh[81] + Fh[716],
        NS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[203] + Fh[81] + Fh[672],
        qS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[237] + Fh[83] + Fh[978],
        BS = Fh[346] + Fh[81] + Fh[993] + Fh[81] + Fh[203] + Fh[81] + Fh[677],
        DS = Fh[670] + Fh[83] + Fh[305] + Fh[83] + Fh[237] + Fh[83] + Fh[302],
        RS = Fh[670] + Fh[83] + Fh[55],
        zS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[399],
        LS = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[948],
        GS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[968],
        YS = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[263],
        HS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[971],
        XS = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[220],
        WS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[971] + Fh[81] + Fh[488],
        VS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[977],
        US = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[735],
        QS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[977] + Fh[81] + Fh[488],
        JS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[203] + Fh[81] + Fh[973],
        ZS = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[237] + Fh[83] + Fh[974],
        KS = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[203] + Fh[81] + Fh[973] + Fh[81] + Fh[968],
        tP = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[975] + Fh[81] + Fh[252],
        iP = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[221] + Fh[83] + Fh[738],
        nP = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[975] + Fh[81] + Fh[716],
        eP = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[203] + Fh[81] + Fh[672],
        sP = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[237] + Fh[83] + Fh[978],
        hP = Fh[346] + Fh[81] + Fh[723] + Fh[81] + Fh[203] + Fh[81] + Fh[677],
        rP = Fh[670] + Fh[83] + Fh[55] + Fh[83] + Fh[237] + Fh[83] + Fh[302],
        fP = Fh[738],
        aP = Fh[275] + Fh[1] + Fh[705],
        _P = Fh[271] + Fh[15] + Fh[218] + Fh[114] + Fh[1002],
        cP = Fh[989] + Fh[44] + Fh[96],
        uP = Fh[273] + Fh[238] + Fh[239],
        oP = Fh[270] + Fh[100] + Fh[279],
        dP = Fh[264],
        lP = Fh[983] + Fh[81] + Fh[681] + Fh[81] + Fh[252],
        bP = Fh[81] + Fh[315] + Fh[16],
        vP = Fh[81] + Fh[1003],
        yP = Fh[1004] + Fh[47] + Fh[1005],
        gP = Fh[81] + Fh[349] + Fh[606],
        xP = Fh[972],
        wP = Fh[81] + Fh[1006],
        mP = Fh[305] + Fh[18] + Fh[1007],
        jP = Fh[55] + Fh[18] + Fh[1007],
        pP = Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[200],
        kP = Fh[305] + Fh[18] + Fh[1007] + Fh[15] + Fh[124],
        MP = Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[219],
        EP = Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[219] + Fh[72] + Fh[366],
        SP = Fh[305] + Fh[18] + Fh[1007] + Fh[15] + Fh[1008],
        PP = Fh[305] + Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[1] + Fh[705],
        IP = Fh[305] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        TP = Fh[305] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[733] + Fh[734],
        CP = Fh[305] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[1] + Fh[732],
        OP = Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[200],
        $P = Fh[55] + Fh[18] + Fh[1007] + Fh[15] + Fh[124],
        FP = Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[219],
        AP = Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[219] + Fh[72] + Fh[366],
        NP = Fh[55] + Fh[18] + Fh[1007] + Fh[15] + Fh[1008],
        qP = Fh[55] + Fh[18] + Fh[1007] + Fh[15] + Fh[1008] + Fh[72] + Fh[366],
        BP = Fh[55] + Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[1] + Fh[705],
        DP = Fh[55] + Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[276] + Fh[277],
        RP = Fh[55] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        zP = Fh[55] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[733] + Fh[734],
        LP = Fh[55] + Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[1] + Fh[732],
        GP = Fh[408] + Fh[25] + Fh[1010],
        YP = Fh[268] + Fh[72] + Fh[400],
        HP = Fh[268] + Fh[1] + Fh[2] + Fh[217] + Fh[231],
        XP = Fh[268] + Fh[72] + Fh[200],
        WP = Fh[11] + Fh[47] + Fh[1011],
        VP = Fh[66] + Fh[47] + Fh[1011] + Fh[44] + Fh[60] + Fh[1] + Fh[533],
        UP = Fh[268] + Fh[100] + Fh[1012],
        QP = Fh[30] + Fh[1] + Fh[98],
        JP = Fh[437] + Fh[25] + Fh[1010],
        ZP = Fh[437] + Fh[47] + Fh[1011] + Fh[44] + Fh[82],
        KP = Fh[360] + Fh[44] + Fh[82],
        tI = Fh[30] + Fh[47] + Fh[1011],
        iI = Fh[211] + Fh[1] + Fh[2],
        nI = Fh[501],
        eI = Fh[61] + Fh[650] + Fh[15] + Fh[124] + Fh[120],
        sI = Fh[61] + Fh[438] + Fh[72] + Fh[730] + Fh[15] + Fh[124] + Fh[120],
        hI = Fh[61] + Fh[650] + Fh[15] + Fh[124] + Fh[121],
        rI = Fh[61] + Fh[438] + Fh[72] + Fh[730] + Fh[15] + Fh[124] + Fh[121],
        fI = Fh[61] + Fh[650] + Fh[47] + Fh[706],
        aI = Fh[61] + Fh[438] + Fh[72] + Fh[730] + Fh[47] + Fh[706],
        _I = Fh[61] + Fh[268] + Fh[47] + Fh[212],
        cI = Fh[404] + Fh[1] + Fh[528],
        uI = Fh[61] + Fh[709] + Fh[1] + Fh[705],
        oI = Fh[61] + Fh[709] + Fh[1] + Fh[705] + Fh[47] + Fh[711] + Fh[131] + Fh[240],
        dI = Fh[61] + Fh[650] + Fh[1] + Fh[705],
        lI = Fh[404],
        bI = Fh[61] + Fh[948],
        vI = Fh[61] + Fh[268] + Fh[72] + Fh[566],
        yI = Fh[62] + Fh[131] + Fh[1013] + Fh[47] + Fh[212],
        gI = Fh[61] + Fh[268] + Fh[20] + Fh[1009] + Fh[276] + Fh[277],
        xI = Fh[61] + Fh[221] + Fh[276] + Fh[277],
        wI = Fh[61] + Fh[237] + Fh[238] + Fh[239],
        mI = Fh[61] + Fh[221] + Fh[1] + Fh[705],
        jI = Fh[72] + Fh[566],
        pI = Fh[20] + Fh[1009] + Fh[276] + Fh[277],
        kI = Fh[988] + Fh[81] + Fh[985],
        MI = Fh[61] + Fh[202] + Fh[72] + Fh[200],
        EI = Fh[61] + Fh[202],
        SI = Fh[20] + Fh[912],
        PI = Fh[61] + Fh[268] + Fh[20] + Fh[912],
        II = Fh[61] + Fh[202] + Fh[72] + Fh[366],
        TI = Fh[61] + Fh[202] + Fh[20] + Fh[454],
        CI = Fh[942] + Fh[47] + Fh[212],
        OI = Fh[61] + Fh[268] + Fh[20] + Fh[1014] + Fh[18] + Fh[1007],
        $I = Fh[61] + Fh[268] + Fh[114] + Fh[195] + Fh[18] + Fh[1007],
        FI = Fh[61] + Fh[735],
        AI = Fh[211] + Fh[20] + Fh[1014] + Fh[18] + Fh[1007],
        NI = Fh[211] + Fh[114] + Fh[195] + Fh[18] + Fh[1007],
        qI = Fh[61] + Fh[305] + Fh[18] + Fh[1007],
        BI = Fh[61] + Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[400],
        DI = Fh[61] + Fh[305] + Fh[18] + Fh[1007] + Fh[15] + Fh[124],
        RI = Fh[305] + Fh[18] + Fh[1007] + Fh[25] + Fh[963],
        zI = Fh[3] + Fh[25] + Fh[963],
        LI = Fh[61] + Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[200],
        GI = Fh[305] + Fh[18] + Fh[1007] + Fh[72] + Fh[939],
        YI = Fh[305] + Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[276] + Fh[277],
        HI = Fh[276] + Fh[277],
        XI = Fh[61] + Fh[55] + Fh[18] + Fh[1007],
        WI = Fh[61] + Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[400],
        VI = Fh[61] + Fh[55] + Fh[18] + Fh[1007] + Fh[15] + Fh[124],
        UI = Fh[55] + Fh[18] + Fh[1007] + Fh[25] + Fh[963],
        QI = Fh[61] + Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[200],
        JI = Fh[55] + Fh[18] + Fh[1007] + Fh[72] + Fh[939],
        ZI = Fh[18] + Fh[1007] + Fh[72] + Fh[219],
        KI = Fh[18] + Fh[1007] + Fh[72] + Fh[219] + Fh[72] + Fh[366],
        tT = Fh[18] + Fh[1007] + Fh[72] + Fh[939],
        iT = Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[38] + Fh[282],
        nT = Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[38] + Fh[282] + Fh[15] + Fh[124],
        eT = Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[1] + Fh[705],
        sT = Fh[18] + Fh[1007] + Fh[20] + Fh[1009] + Fh[276] + Fh[277],
        hT = Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[1] + Fh[732],
        rT = Fh[18] + Fh[1007] + Fh[25] + Fh[283] + Fh[733] + Fh[734],
        fT = Fh[18] + Fh[1007] + Fh[15] + Fh[1008],
        aT = Fh[18] + Fh[1007] + Fh[15] + Fh[1008] + Fh[72] + Fh[366],
        _T = Fh[233] + Fh[18] + Fh[1007],
        cT = Fh[20] + Fh[1014] + Fh[18] + Fh[1007],
        uT = Fh[114] + Fh[195] + Fh[18] + Fh[1007],
        oT = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[1015],
        dT = Fh[34] + Fh[47] + Fh[320] + Fh[64] + Fh[409],
        lT = Fh[1016] + Fh[47] + Fh[1017],
        bT = Fh[3] + Fh[125] + Fh[124],
        vT = Fh[34] + Fh[44] + Fh[1018] + Fh[15] + Fh[1019],
        yT = Fh[3] + Fh[47] + Fh[320] + Fh[25] + Fh[1010],
        gT = Fh[197] + Fh[47] + Fh[320] + Fh[25] + Fh[1010],
        xT = Fh[1020],
        wT = Fh[1021] + Fh[64] + Fh[319],
        mT = Fh[1022],
        jT = Fh[1023] + Fh[64] + Fh[536],
        pT = Fh[211] + Fh[44] + Fh[1024],
        kT = Fh[1004] + Fh[47] + Fh[320] + Fh[25] + Fh[1010],
        MT = Fh[233] + Fh[100] + Fh[1025] + Fh[25] + Fh[283],
        ET = Fh[374] + Fh[81] + Fh[363] + Fh[81] + Fh[473],
        ST = Fh[313] + Fh[29] + Fh[313],
        PT = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370],
        IT = Fh[295] + Fh[64] + Fh[296] + Fh[100] + Fh[1026],
        TT = Fh[313],
        CT = Fh[1027] + Fh[18] + Fh[304] + Fh[1] + Fh[1028],
        OT = Fh[373] + Fh[217] + Fh[199],
        $T = Fh[78] + Fh[1029],
        FT = Fh[78] + Fh[1030] + Fh[1031] + Fh[349],
        AT = Fh[78] + Fh[1032] + Fh[64] + Fh[313],
        NT = Fh[433] + Fh[81] + Fh[1033],
        qT = Fh[1034] + Fh[83] + Fh[1035],
        BT = Fh[433] + Fh[81] + Fh[392],
        DT = Fh[1034] + Fh[83] + Fh[429],
        RT = Fh[433] + Fh[81] + Fh[1036],
        zT = Fh[1034] + Fh[83] + Fh[146],
        LT = Fh[433] + Fh[81] + Fh[363],
        GT = Fh[3] + Fh[64] + Fh[129] + Fh[47] + Fh[130] + Fh[217] + Fh[199],
        YT = Fh[66] + Fh[44] + Fh[60] + Fh[1] + Fh[533],
        HT = Fh[81] + Fh[1037],
        XT = Fh[295] + Fh[64] + Fh[296] + Fh[47] + Fh[130] + Fh[38] + Fh[1038] + Fh[20] + Fh[1039],
        WT = Fh[3] + Fh[217] + Fh[231] + Fh[47] + Fh[130] + Fh[217] + Fh[199],
        VT = Fh[133] + Fh[537],
        UT = Fh[166] + Fh[491] + Fh[29] + Fh[1040],
        QT = Fh[62] + Fh[217] + Fh[231] + Fh[47] + Fh[1041],
        JT = Fh[62] + Fh[217] + Fh[231] + Fh[18] + Fh[1042],
        ZT = Fh[1043] + Fh[64] + Fh[1044],
        KT = Fh[964],
        tC = Fh[1045] + Fh[83] + Fh[213],
        iC = Fh[465],
        nC = Fh[1046] + Fh[41] + Fh[1047],
        eC = Fh[1048],
        sC = Fh[1049],
        hC = Fh[43] + Fh[64] + Fh[65],
        rC = Fh[223] + Fh[114] + Fh[1050],
        fC = Fh[3] + Fh[38] + Fh[1051] + Fh[217] + Fh[475],
        aC = Fh[55] + Fh[25] + Fh[1052],
        _C = Fh[23] + Fh[240],
        cC = Fh[197] + Fh[114] + Fh[168],
        uC = Fh[197] + Fh[72] + Fh[400] + Fh[23] + Fh[240],
        oC = Fh[197] + Fh[276] + Fh[958],
        dC = Fh[197] + Fh[23] + Fh[240],
        lC = Fh[1053],
        bC = Fh[119] + Fh[44] + Fh[82],
        vC = Fh[543],
        yC = Fh[66] + Fh[64] + Fh[129] + Fh[1] + Fh[1054],
        gC = Fh[1055] + Fh[81] + Fh[1056],
        xC = Fh[66] + Fh[217] + Fh[1057] + Fh[64] + Fh[65],
        wC = Fh[1058],
        mC = Fh[1059],
        jC = Fh[1060],
        pC = Fh[1061],
        kC = Fh[244] + Fh[114] + Fh[195],
        MC = Fh[5] + Fh[25] + Fh[1062],
        EC = Fh[406] + Fh[114] + Fh[195],
        SC = Fh[209] + Fh[72] + Fh[566],
        PC = Fh[446] + Fh[18] + Fh[304],
        IC = Fh[143] + Fh[72] + Fh[1063],
        TC = Fh[1064] + Fh[120],
        CC = Fh[1064] + Fh[121],
        OC = Fh[1064] + Fh[114] + Fh[195],
        $C = Fh[1065],
        FC = Fh[1043] + Fh[72] + Fh[1066],
        AC = Fh[1067] + Fh[72] + Fh[1066] + Fh[18] + Fh[712],
        NC = Fh[62] + Fh[25] + Fh[963],
        qC = Fh[34] + Fh[131] + Fh[1068],
        BC = Fh[1069],
        DC = Fh[81] + Fh[1070],
        RC = Fh[1071] + Fh[924],
        zC = Fh[38] + Fh[1072] + Fh[29] + Fh[64] + Fh[1073] + Fh[247],
        LC = Fh[11] + Fh[72] + Fh[639],
        GC = Fh[1055] + Fh[81] + Fh[1074],
        YC = Fh[72] + Fh[400],
        HC = Fh[25] + Fh[283],
        XC = Fh[72] + Fh[939],
        WC = Fh[197] + Fh[64] + Fh[319],
        VC = Fh[64] + Fh[319],
        UC = Fh[356] + Fh[1075] + Fh[938],
        QC = Fh[467] + Fh[44] + Fh[82],
        JC = Fh[1076] + Fh[64] + Fh[1077],
        ZC = Fh[66] + Fh[25] + Fh[1010] + Fh[64] + Fh[1077],
        KC = Fh[1078] + Fh[64] + Fh[281] + Fh[25] + Fh[1010],
        tO = Fh[268] + Fh[64] + Fh[129],
        iO = Fh[25] + Fh[1010] + Fh[29] + Fh[1] + Fh[1079] + Fh[165] + Fh[304] + Fh[29] + Fh[64] + Fh[281],
        nO = Fh[1080],
        eO = Fh[359] + Fh[1] + Fh[533] + Fh[38] + Fh[534],
        sO = Fh[952] + Fh[81] + Fh[363] + Fh[81] + Fh[333],
        hO = Fh[952] + Fh[81] + Fh[363] + Fh[81] + Fh[657],
        rO = Fh[1081] + Fh[612],
        fO = Fh[223] + Fh[545] + Fh[246] + Fh[449] + Fh[450] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[313] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[531] + Fh[1082] + Fh[195] + Fh[1083] + Fh[1022] + Fh[131] + Fh[1084] + Fh[590] + Fh[506] + Fh[89] + Fh[591] + Fh[313] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[592] + Fh[589] + Fh[580] + Fh[593] + Fh[506] + Fh[594] + Fh[218] + Fh[595] + Fh[502] + Fh[596] + Fh[349] + Fh[597] + Fh[1085] + Fh[1086] + Fh[1087] + Fh[599] + Fh[23] + Fh[1088] + Fh[41] + Fh[502] + Fh[314] + Fh[217] + Fh[1089] + Fh[314] + Fh[1090] + Fh[1091] + Fh[217] + Fh[1092] + Fh[1093] + Fh[449] + Fh[1094] + Fh[1095] + Fh[1096] + Fh[276] + Fh[315] + Fh[1097] + Fh[199] + Fh[1098] + Fh[1099] + Fh[38] + Fh[199] + Fh[47] + Fh[586] + Fh[1100] + Fh[449] + Fh[314] + Fh[1101] + Fh[304] + Fh[314] + Fh[1102] + Fh[313] + Fh[1103] + Fh[350] + Fh[64] + Fh[1022] + Fh[1104] + Fh[350] + Fh[1105] + Fh[313] + Fh[580] + Fh[1106] + Fh[1107] + Fh[1108] + Fh[89] + Fh[16] + Fh[23] + Fh[748] + Fh[586] + Fh[89] + Fh[16] + Fh[121] + Fh[1022] + Fh[498] + Fh[1109] + Fh[1110] + Fh[38] + Fh[1111] + Fh[352] + Fh[1112] + Fh[44] + Fh[589] + Fh[449] + Fh[350] + Fh[503] + Fh[886] + Fh[606] + Fh[591] + Fh[89] + Fh[1113] + Fh[909] + Fh[1114] + Fh[1115] + Fh[1116] + Fh[582] + Fh[1117] + Fh[582] + Fh[38] + Fh[586] + Fh[351] + Fh[923] + Fh[350] + Fh[447] + Fh[351] + Fh[1118] + Fh[1119] + Fh[1120] + Fh[100] + Fh[351] + Fh[1121] + Fh[120] + Fh[315] + Fh[276] + Fh[498] + Fh[25] + Fh[315] + Fh[1122] + Fh[531] + Fh[369] + Fh[503] + Fh[314] + Fh[1123] + Fh[350] + Fh[620] + Fh[72] + Fh[531] + Fh[1124] + Fh[531] + Fh[1125] + Fh[1126] + Fh[276] + Fh[352] + Fh[1127] + Fh[498] + Fh[105] + Fh[502] + Fh[1128] + Fh[313] + Fh[1129] + Fh[304] + Fh[25] + Fh[580] + Fh[1130] + Fh[505] + Fh[369] + Fh[1131] + Fh[18] + Fh[1132] + Fh[1133] + Fh[351] + Fh[829] + Fh[1134] + Fh[314] + Fh[1135] + Fh[584] + Fh[449] + Fh[20] + Fh[1136] + Fh[315] + Fh[15] + Fh[350] + Fh[44] + Fh[1137] + Fh[1138] + Fh[350] + Fh[1139] + Fh[314] + Fh[531] + Fh[1140] + Fh[502] + Fh[1141] + Fh[130] + Fh[1142] + Fh[313] + Fh[582] + Fh[64] + Fh[842] + Fh[41] + Fh[1143] + Fh[1144] + Fh[504] + Fh[350] + Fh[1022] + Fh[1145] + Fh[1146] + Fh[502] + Fh[1147] + Fh[1148] + Fh[1149] + Fh[120] + Fh[498] + Fh[314] + Fh[1150] + Fh[449] + Fh[1151] + Fh[314] + Fh[1152] + Fh[1153] + Fh[89] + Fh[1154] + Fh[1155] + Fh[1156] + Fh[351] + Fh[105] + Fh[502] + Fh[449] + Fh[1157] + Fh[351] + Fh[15] + Fh[1158] + Fh[1113] + Fh[1159] + Fh[159] + Fh[504] + Fh[217] + Fh[218] + Fh[591] + Fh[89] + Fh[41] + Fh[505] + Fh[733] + Fh[829] + Fh[1022] + Fh[131] + Fh[503] + Fh[449] + Fh[531] + Fh[64] + Fh[16] + Fh[89] + Fh[41] + Fh[352] + Fh[1022] + Fh[1160] + Fh[923] + Fh[89] + Fh[20] + Fh[1161] + Fh[238] + Fh[1162] + Fh[314] + Fh[1163] + Fh[1164] + Fh[1089] + Fh[1133] + Fh[348] + Fh[506] + Fh[25] + Fh[599] + Fh[350] + Fh[1165] + Fh[589] + Fh[531] + Fh[47] + Fh[315] + Fh[1166] + Fh[314] + Fh[120] + Fh[1022] + Fh[18] + Fh[218] + Fh[313] + Fh[369] + Fh[1022] + Fh[1167] + Fh[1168] + Fh[449] + Fh[313] + Fh[64] + Fh[218] + Fh[100] + Fh[1168] + Fh[41] + Fh[351] + Fh[1169] + Fh[351] + Fh[1170] + Fh[1171] + Fh[1172] + Fh[199] + Fh[18] + Fh[580] + Fh[1119] + Fh[599] + Fh[349] + Fh[38] + Fh[1173] + Fh[449] + Fh[1174] + Fh[733] + Fh[315] + Fh[531] + Fh[1175] + Fh[449] + Fh[276] + Fh[506] + Fh[352] + Fh[1176] + Fh[72] + Fh[449] + Fh[89] + Fh[1177] + Fh[131] + Fh[606] + Fh[159] + Fh[350] + Fh[449] + Fh[315] + Fh[131] + Fh[589] + Fh[1178] + Fh[1174] + Fh[1179] + Fh[1180] + Fh[276] + Fh[531] + Fh[313] + Fh[276] + Fh[314] + Fh[1022] + Fh[1181] + Fh[351] + Fh[1022] + Fh[349] + Fh[1182] + Fh[1183] + Fh[1184] + Fh[276] + Fh[1185] + Fh[1186] + Fh[505] + Fh[733] + Fh[1187] + Fh[238] + Fh[89] + Fh[23] + Fh[582] + Fh[314] + Fh[449] + Fh[531] + Fh[348] + Fh[449] + Fh[589] + Fh[1188] + Fh[1189] + Fh[38] + Fh[1190] + Fh[1170] + Fh[348] + Fh[1191] + Fh[503] + Fh[100] + Fh[580] + Fh[1192] + Fh[304] + Fh[349] + Fh[1185] + Fh[114] + Fh[1193] + Fh[1022] + Fh[130] + Fh[1194] + Fh[352] + Fh[1195] + Fh[504] + Fh[1196] + Fh[615] + Fh[314] + Fh[415] + Fh[89] + Fh[449] + Fh[1197] + Fh[369] + Fh[504] + Fh[1022] + Fh[1198] + Fh[369] + Fh[1168] + Fh[41] + Fh[1199] + Fh[350] + Fh[1022] + Fh[1200] + Fh[41] + Fh[1201] + Fh[1202] + Fh[1203] + Fh[313] + Fh[1204] + Fh[1205] + Fh[41] + Fh[351] + Fh[582] + Fh[25] + Fh[1206] + Fh[352] + Fh[1185] + Fh[1207] + Fh[314] + Fh[599] + Fh[120] + Fh[502] + Fh[1208] + Fh[504] + Fh[89] + Fh[1209] + Fh[1210] + Fh[1211] + Fh[89] + Fh[23] + Fh[505] + Fh[1212] + Fh[615] + Fh[1213] + Fh[502] + Fh[1022] + Fh[1214] + Fh[314] + Fh[1215] + Fh[304] + Fh[313] + Fh[1216] + Fh[435] + Fh[195] + Fh[23] + Fh[586] + Fh[120] + Fh[1089] + Fh[1217] + Fh[1218] + Fh[1219] + Fh[1089] + Fh[114] + Fh[1220] + Fh[352] + Fh[44] + Fh[1185] + Fh[20] + Fh[348] + Fh[1221] + Fh[1185] + Fh[276] + Fh[1222] + Fh[1223] + Fh[1224] + Fh[435] + Fh[1225] + Fh[1226] + Fh[304] + Fh[315] + Fh[120] + Fh[1227] + Fh[348] + Fh[238] + Fh[1168] + Fh[589] + Fh[15] + Fh[1168] + Fh[1228] + Fh[348] + Fh[1127] + Fh[351] + Fh[199] + Fh[315] + Fh[23] + Fh[130] + Fh[105] + Fh[580] + Fh[121] + Fh[505] + Fh[733] + Fh[315] + Fh[72] + Fh[1229] + Fh[159] + Fh[1168] + Fh[159] + Fh[1230] + Fh[591] + Fh[1231] + Fh[350] + Fh[1232] + Fh[1022] + Fh[38] + Fh[1233] + Fh[1234] + Fh[498] + Fh[350] + Fh[159] + Fh[1235] + Fh[159] + Fh[352] + Fh[120] + Fh[580] + Fh[1022] + Fh[435] + Fh[315] + Fh[218] + Fh[1236] + Fh[1237] + Fh[276] + Fh[313] + Fh[502] + Fh[276] + Fh[314] + Fh[504] + Fh[1] + Fh[599] + Fh[114] + Fh[130] + Fh[121] + Fh[829] + Fh[314] + Fh[502] + Fh[352] + Fh[1238] + Fh[120] + Fh[351] + Fh[1239] + Fh[348] + Fh[1] + Fh[582] + Fh[349] + Fh[72] + Fh[506] + Fh[435] + Fh[829] + Fh[352] + Fh[16] + Fh[38] + Fh[1240] + Fh[1241] + Fh[304] + Fh[121] + Fh[348] + Fh[612] + Fh[89] + Fh[276] + Fh[1242] + Fh[1243] + Fh[582] + Fh[20] + Fh[449] + Fh[130] + Fh[348] + Fh[923] + Fh[25] + Fh[1244] + Fh[238] + Fh[1245] + Fh[1246] + Fh[449] + Fh[498] + Fh[1247] + Fh[1022] + Fh[1248] + Fh[352] + Fh[276] + Fh[195] + Fh[100] + Fh[1168] + Fh[313] + Fh[387] + Fh[615] + Fh[1249] + Fh[1250] + Fh[624] + Fh[195] + Fh[349] + Fh[1251] + Fh[349] + Fh[199] + Fh[1252] + Fh[505] + Fh[44] + Fh[348] + Fh[47] + Fh[1253] + Fh[1254] + Fh[1022] + Fh[218] + Fh[314] + Fh[867] + Fh[1255] + Fh[1256] + Fh[315] + Fh[1257] + Fh[304] + Fh[131] + Fh[829] + Fh[1258] + Fh[350] + Fh[829] + Fh[64] + Fh[505] + Fh[15] + Fh[349] + Fh[15] + Fh[599] + Fh[1259] + Fh[612] + Fh[350] + Fh[199] + Fh[1260] + Fh[1261] + Fh[1262] + Fh[506] + Fh[238] + Fh[89] + Fh[1263] + Fh[315] + Fh[23] + Fh[606] + Fh[1264] + Fh[498] + Fh[1265] + Fh[923] + Fh[733] + Fh[606] + Fh[1266] + Fh[1267] + Fh[902] + Fh[1268] + Fh[1269] + Fh[1270] + Fh[1271] + Fh[72] + Fh[313] + Fh[591] + Fh[589] + Fh[1272] + Fh[351] + Fh[1273] + Fh[1274] + Fh[350] + Fh[582] + Fh[1275] + Fh[218] + Fh[72] + Fh[349] + Fh[1276] + Fh[369] + Fh[502] + Fh[351] + Fh[1277] + Fh[15] + Fh[1278] + Fh[1279] + Fh[1168] + Fh[44] + Fh[199] + Fh[1280] + Fh[503] + Fh[880] + Fh[18] + Fh[351] + Fh[923] + Fh[352] + Fh[498] + Fh[435] + Fh[504] + Fh[351] + Fh[276] + Fh[531] + Fh[38] + Fh[351] + Fh[599] + Fh[72] + Fh[1281] + Fh[350] + Fh[1282] + Fh[238] + Fh[498] + Fh[20] + Fh[313] + Fh[1185] + Fh[114] + Fh[589] + Fh[1168] + Fh[1283] + Fh[1022] + Fh[503] + Fh[38] + Fh[589] + Fh[502] + Fh[351] + Fh[599] + Fh[1284] + Fh[606] + Fh[351] + Fh[1022] + Fh[72] + Fh[1285] + Fh[1286] + Fh[64] + Fh[599] + Fh[350] + Fh[504] + Fh[1287] + Fh[315] + Fh[1288] + Fh[1022] + Fh[1168] + Fh[315] + Fh[41] + Fh[1289] + Fh[351] + Fh[1290] + Fh[348] + Fh[47] + Fh[1185] + Fh[15] + Fh[350] + Fh[1291] + Fh[435] + Fh[1185] + Fh[1292] + Fh[612] + Fh[350] + Fh[304] + Fh[1293] + Fh[130] + Fh[89] + Fh[1294] + Fh[131] + Fh[582] + Fh[315] + Fh[1295] + Fh[615] + Fh[114] + Fh[1185] + Fh[1296] + Fh[313] + Fh[1174] + Fh[1297] + Fh[1298] + Fh[89] + Fh[1299] + Fh[1022] + Fh[1300] + Fh[1301] + Fh[44] + Fh[349] + Fh[580] + Fh[352] + Fh[506] + Fh[120] + Fh[1302] + Fh[629] + Fh[349] + Fh[630] + Fh[173],
        aO = Fh[223] + Fh[545] + Fh[246] + Fh[449] + Fh[450] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[313] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[531] + Fh[1303] + Fh[531] + Fh[1304] + Fh[449] + Fh[100] + Fh[218] + Fh[1022] + Fh[351] + Fh[590] + Fh[506] + Fh[89] + Fh[591] + Fh[313] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[592] + Fh[589] + Fh[580] + Fh[593] + Fh[506] + Fh[594] + Fh[218] + Fh[595] + Fh[502] + Fh[596] + Fh[349] + Fh[597] + Fh[1085] + Fh[1305] + Fh[1087] + Fh[599] + Fh[23] + Fh[504] + Fh[1306] + Fh[1174] + Fh[1022] + Fh[1307] + Fh[502] + Fh[1308] + Fh[1089] + Fh[352] + Fh[606] + Fh[1309] + Fh[531] + Fh[1310] + Fh[504] + Fh[1311] + Fh[586] + Fh[18] + Fh[580] + Fh[1312] + Fh[130] + Fh[313] + Fh[1313] + Fh[1302] + Fh[41] + Fh[1314] + Fh[369] + Fh[16] + Fh[313] + Fh[18] + Fh[1022] + Fh[1] + Fh[1315] + Fh[1316] + Fh[498] + Fh[20] + Fh[502] + Fh[23] + Fh[923] + Fh[348] + Fh[1317] + Fh[304] + Fh[369] + Fh[615] + Fh[276] + Fh[1318] + Fh[1319] + Fh[531] + Fh[1320] + Fh[1089] + Fh[587] + Fh[304] + Fh[276] + Fh[89] + Fh[217] + Fh[505] + Fh[1321] + Fh[606] + Fh[589] + Fh[218] + Fh[89] + Fh[44] + Fh[503] + Fh[313] + Fh[1322] + Fh[1323] + Fh[315] + Fh[120] + Fh[606] + Fh[352] + Fh[15] + Fh[16] + Fh[23] + Fh[1324] + Fh[1325] + Fh[449] + Fh[199] + Fh[1326] + Fh[1327] + Fh[435] + Fh[1328] + Fh[121] + Fh[504] + Fh[20] + Fh[1329] + Fh[1330] + Fh[586] + Fh[348] + Fh[16] + Fh[1022] + Fh[502] + Fh[105] + Fh[1331] + Fh[64] + Fh[1332] + Fh[352] + Fh[120] + Fh[218] + Fh[1022] + Fh[130] + Fh[1333] + Fh[348] + Fh[923] + Fh[1334] + Fh[606] + Fh[1335] + Fh[829] + Fh[351] + Fh[1336] + Fh[20] + Fh[195] + Fh[315] + Fh[1022] + Fh[1337] + Fh[1338] + Fh[449] + Fh[1339] + Fh[612] + Fh[1340] + Fh[1341] + Fh[449] + Fh[589] + Fh[1342] + Fh[1343] + Fh[449] + Fh[599] + Fh[18] + Fh[1344] + Fh[1313] + Fh[606] + Fh[1345] + Fh[504] + Fh[1346] + Fh[218] + Fh[276] + Fh[315] + Fh[506] + Fh[313] + Fh[1347] + Fh[313] + Fh[1348] + Fh[38] + Fh[351] + Fh[18] + Fh[1174] + Fh[449] + Fh[55] + Fh[435] + Fh[313] + Fh[1349] + Fh[1350] + Fh[1022] + Fh[1351] + Fh[503] + Fh[349] + Fh[1352] + Fh[1174] + Fh[217] + Fh[504] + Fh[1353] + Fh[218] + Fh[18] + Fh[313] + Fh[1354] + Fh[1168] + Fh[1355] + Fh[1356] + Fh[1357] + Fh[582] + Fh[1358] + Fh[276] + Fh[1359] + Fh[1360] + Fh[20] + Fh[1361] + Fh[276] + Fh[531] + Fh[891] + Fh[1185] + Fh[1362] + Fh[352] + Fh[604] + Fh[1089] + Fh[315] + Fh[449] + Fh[352] + Fh[23] + Fh[1363] + Fh[1321] + Fh[1022] + Fh[829] + Fh[64] + Fh[195] + Fh[314] + Fh[1364] + Fh[349] + Fh[1365] + Fh[1366] + Fh[20] + Fh[582] + Fh[350] + Fh[1367] + Fh[498] + Fh[591] + Fh[1067] + Fh[315] + Fh[1022] + Fh[314] + Fh[159] + Fh[304] + Fh[41] + Fh[615] + Fh[120] + Fh[506] + Fh[351] + Fh[591] + Fh[1168] + Fh[315] + Fh[304] + Fh[313] + Fh[435] + Fh[130] + Fh[352] + Fh[591] + Fh[352] + Fh[1368] + Fh[18] + Fh[16] + Fh[238] + Fh[531] + Fh[1369] + Fh[1370] + Fh[1371] + Fh[1372] + Fh[1373] + Fh[89] + Fh[498] + Fh[369] + Fh[1374] + Fh[64] + Fh[314] + Fh[1375] + Fh[369] + Fh[849] + Fh[369] + Fh[1376] + Fh[1377] + Fh[100] + Fh[498] + Fh[1378] + Fh[1089] + Fh[89] + Fh[505] + Fh[891] + Fh[16] + Fh[589] + Fh[1379] + Fh[1380] + Fh[1381] + Fh[114] + Fh[1185] + Fh[18] + Fh[1382] + Fh[591] + Fh[580] + Fh[1383] + Fh[1384] + Fh[369] + Fh[1385] + Fh[369] + Fh[352] + Fh[505] + Fh[1386] + Fh[1387] + Fh[38] + Fh[1388] + Fh[18] + Fh[612] + Fh[1389] + Fh[580] + Fh[589] + Fh[120] + Fh[1174] + Fh[589] + Fh[100] + Fh[1089] + Fh[1359] + Fh[498] + Fh[15] + Fh[349] + Fh[47] + Fh[757] + Fh[1168] + Fh[120] + Fh[531] + Fh[15] + Fh[599] + Fh[1390] + Fh[503] + Fh[733] + Fh[349] + Fh[1391] + Fh[615] + Fh[591] + Fh[314] + Fh[100] + Fh[606] + Fh[350] + Fh[15] + Fh[580] + Fh[105] + Fh[195] + Fh[1392] + Fh[506] + Fh[314] + Fh[1393] + Fh[1394] + Fh[350] + Fh[1395] + Fh[1396] + Fh[1397] + Fh[1398] + Fh[314] + Fh[1399] + Fh[217] + Fh[1185] + Fh[1400] + Fh[612] + Fh[880] + Fh[217] + Fh[1401] + Fh[314] + Fh[586] + Fh[1] + Fh[1402] + Fh[121] + Fh[315] + Fh[586] + Fh[315] + Fh[121] + Fh[89] + Fh[606] + Fh[64] + Fh[1403] + Fh[351] + Fh[606] + Fh[1404] + Fh[1168] + Fh[131] + Fh[1405] + Fh[105] + Fh[503] + Fh[1324] + Fh[1406] + Fh[276] + Fh[615] + Fh[1407] + Fh[1408] + Fh[44] + Fh[1409] + Fh[1022] + Fh[923] + Fh[238] + Fh[615] + Fh[312] + Fh[195] + Fh[733] + Fh[615] + Fh[276] + Fh[348] + Fh[276] + Fh[1410] + Fh[315] + Fh[120] + Fh[314] + Fh[114] + Fh[1411] + Fh[314] + Fh[130] + Fh[18] + Fh[350] + Fh[1412] + Fh[1165] + Fh[1413] + Fh[1414] + Fh[733] + Fh[16] + Fh[44] + Fh[348] + Fh[599] + Fh[131] + Fh[504] + Fh[1415] + Fh[351] + Fh[1] + Fh[348] + Fh[1] + Fh[314] + Fh[582] + Fh[131] + Fh[586] + Fh[1416] + Fh[612] + Fh[1417] + Fh[1418] + Fh[313] + Fh[582] + Fh[733] + Fh[304] + Fh[1419] + Fh[531] + Fh[1420] + Fh[582] + Fh[1421] + Fh[130] + Fh[1422] + Fh[606] + Fh[352] + Fh[1423] + Fh[751] + Fh[44] + Fh[130] + Fh[1116] + Fh[314] + Fh[72] + Fh[615] + Fh[105] + Fh[580] + Fh[589] + Fh[120] + Fh[1424] + Fh[1425] + Fh[199] + Fh[41] + Fh[1426] + Fh[1168] + Fh[313] + Fh[121] + Fh[314] + Fh[1427] + Fh[89] + Fh[1428] + Fh[348] + Fh[498] + Fh[41] + Fh[1429] + Fh[1430] + Fh[1242] + Fh[217] + Fh[315] + Fh[1431] + Fh[89] + Fh[1432] + Fh[351] + Fh[23] + Fh[504] + Fh[120] + Fh[218] + Fh[41] + Fh[350] + Fh[502] + Fh[1433] + Fh[89] + Fh[1434] + Fh[606] + Fh[349] + Fh[615] + Fh[23] + Fh[218] + Fh[352] + Fh[1089] + Fh[15] + Fh[1435] + Fh[1436] + Fh[1437] + Fh[25] + Fh[1438] + Fh[1439] + Fh[314] + Fh[18] + Fh[1440] + Fh[352] + Fh[1441] + Fh[1281] + Fh[350] + Fh[502] + Fh[20] + Fh[615] + Fh[23] + Fh[1442] + Fh[47] + Fh[449] + Fh[498] + Fh[44] + Fh[1443] + Fh[1444] + Fh[64] + Fh[16] + Fh[25] + Fh[1445] + Fh[89] + Fh[506] + Fh[1446] + Fh[1368] + Fh[449] + Fh[435] + Fh[1022] + Fh[18] + Fh[218] + Fh[349] + Fh[1447] + Fh[23] + Fh[1185] + Fh[1448] + Fh[599] + Fh[159] + Fh[1089] + Fh[315] + Fh[1449] + Fh[589] + Fh[1450] + Fh[313] + Fh[1451] + Fh[449] + Fh[23] + Fh[615] + Fh[114] + Fh[1452] + Fh[449] + Fh[1453] + Fh[589] + Fh[505] + Fh[1454] + Fh[350] + Fh[498] + Fh[64] + Fh[606] + Fh[733] + Fh[498] + Fh[589] + Fh[1455] + Fh[105] + Fh[503] + Fh[313] + Fh[591] + Fh[601] + Fh[38] + Fh[586] + Fh[1022] + Fh[25] + Fh[199] + Fh[131] + Fh[315] + Fh[1185] + Fh[89] + Fh[1185] + Fh[589] + Fh[502] + Fh[1456] + Fh[502] + Fh[1457] + Fh[348] + Fh[23] + Fh[351] + Fh[20] + Fh[1458] + Fh[1459] + Fh[349] + Fh[64] + Fh[1460] + Fh[733] + Fh[1461] + Fh[1462],
        _O = Fh[1463] + Fh[187],
        cO = Fh[1464] + Fh[29] + Fh[313] + Fh[83] + Fh[89] + Fh[1174] + Fh[29] + Fh[1465] + Fh[104] + Fh[570],
        uO = Fh[1466],
        oO = Fh[828],
        dO = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[23] + Fh[418] + Fh[29] + Fh[420],
        lO = Fh[1464] + Fh[545] + Fh[314] + Fh[577] + Fh[275] + Fh[104] + Fh[738] + Fh[511] + Fh[74] + Fh[75] + Fh[313] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[83] + Fh[349] + Fh[77],
        bO = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[23] + Fh[418],
        vO = Fh[1464] + Fh[545] + Fh[313] + Fh[577],
        yO = Fh[1467],
        gO = Fh[545] + Fh[1464] + Fh[29] + Fh[315] + Fh[1174] + Fh[29] + Fh[1468] + Fh[104] + Fh[691] + Fh[75] + Fh[313] + Fh[83] + Fh[352] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[83] + Fh[352] + Fh[427] + Fh[314] + Fh[77],
        xO = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[23] + Fh[418] + Fh[545] + Fh[434],
        wO = Fh[1464] + Fh[545] + Fh[314] + Fh[577],
        mO = Fh[545] + Fh[1464] + Fh[29] + Fh[313] + Fh[83] + Fh[315] + Fh[1174] + Fh[29] + Fh[740],
        jO = Fh[1469] + Fh[47] + Fh[212],
        pO = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[72] + Fh[552] + Fh[47] + Fh[1414],
        kO = Fh[280] + Fh[511] + Fh[430] + Fh[577] + Fh[538] + Fh[104] + Fh[1470] + Fh[511] + Fh[270] + Fh[104] + Fh[538] + Fh[577] + Fh[538] + Fh[104] + Fh[650] + Fh[1471] + Fh[702] + Fh[29] + Fh[313] + Fh[187] + Fh[29] + Fh[313] + Fh[187] + Fh[29] + Fh[314] + Fh[187] + Fh[1472] + Fh[275] + Fh[104] + Fh[738] + Fh[511] + Fh[74] + Fh[75] + Fh[1473] + Fh[76] + Fh[1473] + Fh[76] + Fh[1473] + Fh[76] + Fh[313] + Fh[83] + Fh[315] + Fh[1474] + Fh[270] + Fh[104] + Fh[509] + Fh[511] + Fh[348] + Fh[187] + Fh[577] + Fh[1475] + Fh[511] + Fh[314] + Fh[187] + Fh[577],
        MO = Fh[1475] + Fh[104] + Fh[92] + Fh[511] + Fh[352] + Fh[187] + Fh[577],
        EO = Fh[1475] + Fh[104] + Fh[93] + Fh[511] + Fh[352] + Fh[187] + Fh[577],
        SO = Fh[83] + Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[72] + Fh[552] + Fh[44] + Fh[1476],
        PO = Fh[545] + Fh[1464] + Fh[29] + Fh[315] + Fh[1174] + Fh[29] + Fh[1468] + Fh[104] + Fh[691] + Fh[75] + Fh[313] + Fh[83] + Fh[352] + Fh[427] + Fh[313] + Fh[427] + Fh[313] + Fh[83] + Fh[352] + Fh[427] + Fh[314] + Fh[1474],
        IO = Fh[369] + Fh[104] + Fh[276] + Fh[370] + Fh[104] + Fh[72] + Fh[552] + Fh[44] + Fh[1476],
        TO = Fh[34] + Fh[435],
        CO = Fh[414] + Fh[217] + Fh[1477],
        OO = Fh[47] + Fh[1478],
        $O = Fh[1479],
        FO = Fh[1480],
        AO = Fh[1481] + Fh[81] + Fh[1482],
        NO = Fh[1481] + Fh[81] + Fh[363],
        qO = Fh[1465] + Fh[15] + Fh[447],
        BO = Fh[1465] + Fh[15] + Fh[447] + Fh[72] + Fh[1483],
        DO = Fh[1484],
        RO = Fh[206] + Fh[114] + Fh[287],
        zO = Fh[1485] + Fh[114] + Fh[298],
        LO = Fh[472] + Fh[81] + Fh[1486] + Fh[81] + Fh[399] + Fh[81] + Fh[1487],
        GO = Fh[472] + Fh[81] + Fh[1486] + Fh[81] + Fh[399] + Fh[81] + Fh[1488],
        YO = Fh[472] + Fh[81] + Fh[984] + Fh[81] + Fh[1486] + Fh[81] + Fh[399] + Fh[81] + Fh[1487],
        HO = Fh[472] + Fh[81] + Fh[984] + Fh[81] + Fh[1486] + Fh[81] + Fh[399] + Fh[81] + Fh[1488],
        XO = Fh[1045],
        WO = Fh[11] + Fh[38] + Fh[1489],
        VO = Fh[30] + Fh[38] + Fh[1489],
        UO = Fh[966] + Fh[38] + Fh[1490],
        QO = Fh[1491],
        JO = Fh[100] + Fh[1492] + Fh[217] + Fh[1057],
        ZO = Fh[233] + Fh[44] + Fh[185],
        KO = Fh[34] + Fh[1] + Fh[1493] + Fh[44] + Fh[224],
        t$ = Fh[108] + Fh[38] + Fh[1490],
        i$ = Fh[3] + Fh[38] + Fh[39] + Fh[38] + Fh[1490] + Fh[72] + Fh[939],
        n$ = Fh[1076],
        e$ = Fh[197] + Fh[64] + Fh[319] + Fh[47] + Fh[130] + Fh[217] + Fh[1057],
        s$ = Fh[1494],
        h$ = Fh[471] + Fh[44] + Fh[185],
        r$ = Fh[1495],
        f$ = Fh[197] + Fh[72] + Fh[400] + Fh[47] + Fh[130] + Fh[217] + Fh[1057],
        a$ = Fh[1] + Fh[1496] + Fh[72] + Fh[400] + Fh[217] + Fh[1057],
        _$ = Fh[197] + Fh[25] + Fh[283] + Fh[47] + Fh[130] + Fh[217] + Fh[1057],
        c$ = Fh[1] + Fh[1496] + Fh[25] + Fh[283] + Fh[217] + Fh[1057],
        u$ = Fh[64] + Fh[319] + Fh[133],
        o$ = Fh[1016] + Fh[25] + Fh[1497] + Fh[20] + Fh[1014],
        d$ = Fh[1016] + Fh[25] + Fh[1497] + Fh[114] + Fh[195],
        l$ = Fh[1] + Fh[1496] + Fh[72] + Fh[1498] + Fh[64] + Fh[319] + Fh[217] + Fh[1057],
        b$ = Fh[1499],
        v$ = Fh[369] + Fh[104] + Fh[25] + Fh[1010] + Fh[64] + Fh[1500],
        y$ = Fh[1501] + Fh[1502] + Fh[1376] + Fh[64] + Fh[29] + Fh[314] + Fh[187],
        g$ = Fh[349] + Fh[187],
        x$ = Fh[538] + Fh[72] + Fh[730],
        w$ = Fh[1503],
        m$ = Fh[66] + Fh[41] + Fh[42] + Fh[1] + Fh[533],
        j$ = Fh[1504],
        p$ = Fh[46] + Fh[64] + Fh[1077],
        k$ = Fh[1505],
        M$ = Fh[43] + Fh[64] + Fh[1077],
        E$ = Fh[66] + Fh[72] + Fh[200] + Fh[1] + Fh[533],
        S$ = Fh[197] + Fh[924],
        P$ = Fh[43] + Fh[64] + Fh[1077] + Fh[238] + Fh[1506] + Fh[1] + Fh[1507] + Fh[15] + Fh[218] + Fh[238] + Fh[928],
        I$ = Fh[553],
        T$ = Fh[62] + Fh[114] + Fh[168],
        C$ = Fh[34] + Fh[64] + Fh[1508],
        O$ = Fh[25] + Fh[1010] + Fh[64] + Fh[1500],
        $$ = Fh[822] + Fh[64] + Fh[1500],
        F$ = Fh[1509] + Fh[72] + Fh[415] + Fh[23] + Fh[416],
        A$ = Fh[414] + Fh[38] + Fh[1510] + Fh[1] + Fh[1507] + Fh[114] + Fh[195] + Fh[15] + Fh[1511],
        N$ = Fh[446] + Fh[114] + Fh[195] + Fh[15] + Fh[1511],
        q$ = Fh[34] + Fh[64] + Fh[1512],
        B$ = Fh[1513] + Fh[114] + Fh[1514],
        D$ = Fh[55] + Fh[1] + Fh[451],
        R$ = Fh[1076] + Fh[25] + Fh[1010] + Fh[64] + Fh[1077],
        z$ = Fh[0] + Fh[64] + Fh[319] + Fh[47] + Fh[320],
        L$ = Fh[11] + Fh[72] + Fh[639] + Fh[47] + Fh[130] + Fh[217] + Fh[1057],
        G$ = Fh[1515] + Fh[217] + Fh[222],
        Y$ = Fh[466],
        H$ = Fh[1516],
        X$ = Fh[1515] + Fh[29] + Fh[246] + Fh[247],
        W$ = Fh[29] + Fh[829] + Fh[29],
        V$ = Fh[1517] + Fh[64] + Fh[1073],
        U$ = Fh[471] + Fh[38] + Fh[1518] + Fh[64] + Fh[129],
        Q$ = Fh[34] + Fh[72] + Fh[1519],
        J$ = Fh[1055] + Fh[81] + Fh[722] + Fh[81] + Fh[1520],
        Z$ = Fh[63] + Fh[217] + Fh[1057] + Fh[64] + Fh[65],
        K$ = Fh[1055] + Fh[81] + Fh[1521],
        tF = Fh[328] + Fh[64] + Fh[1073],
        iF = Fh[295] + Fh[64] + Fh[296] + Fh[100] + Fh[1026] + Fh[41] + Fh[440] + Fh[133],
        nF = Fh[1522] + Fh[238] + Fh[1523],
        eF = Fh[1055] + Fh[81] + Fh[722] + Fh[81] + Fh[1524],
        sF = Fh[1525],
        hF = Fh[233] + Fh[25] + Fh[283] + Fh[217] + Fh[199],
        rF = Fh[233] + Fh[25] + Fh[283],
        fF = Fh[78] + Fh[1526],
        aF = Fh[942] + Fh[72] + Fh[401],
        _F = Fh[397] + Fh[81] + Fh[722] + Fh[81] + Fh[1520],
        cF = Fh[999],
        uF = Fh[943],
        oF = Fh[999] + Fh[217] + Fh[231],
        dF = Fh[397] + Fh[81] + Fh[1521],
        lF = Fh[397] + Fh[81] + Fh[722] + Fh[81] + Fh[1524],
        bF = Fh[680] + Fh[81] + Fh[1527] + Fh[81] + Fh[971],
        vF = Fh[680] + Fh[81] + Fh[1527] + Fh[81] + Fh[971] + Fh[81] + Fh[252],
        yF = Fh[680] + Fh[81] + Fh[1527] + Fh[81] + Fh[975] + Fh[81] + Fh[252],
        gF = Fh[295] + Fh[64] + Fh[296] + Fh[41] + Fh[440] + Fh[133],
        xF = Fh[1528] + Fh[104] + Fh[465],
        wF = Fh[1529] + Fh[104] + Fh[465],
        mF = Fh[1530] + Fh[104] + Fh[465],
        jF = Fh[74] + Fh[75] + Fh[313] + Fh[427] + Fh[1531] + Fh[427] + Fh[313] + Fh[427] + Fh[314] + Fh[77],
        pF = Fh[78] + Fh[1532] + Fh[313],
        kF = Fh[34] + Fh[100] + Fh[1533],
        MF = Fh[34] + Fh[100] + Fh[1534],
        EF = Fh[1535] + Fh[81] + Fh[1520],
        SF = Fh[1536] + Fh[47] + Fh[212],
        PF = Fh[1537],
        IF = Fh[1535] + Fh[81] + Fh[1524],
        TF = Fh[62] + Fh[72] + Fh[639],
        CF = Fh[182] + Fh[114] + Fh[195] + Fh[114] + Fh[1002],
        OF = Fh[462] + Fh[18] + Fh[712],
        $F = Fh[369] + Fh[104] + Fh[114] + Fh[1538],
        FF = Fh[542],
        AF = Fh[78] + Fh[1539],
        NF = Fh[314] + Fh[187] + Fh[29] + Fh[1501] + Fh[1502] + Fh[38] + Fh[589] + Fh[38] + Fh[589] + Fh[38] + Fh[589],
        qF = Fh[89] + Fh[187] + Fh[29] + Fh[348] + Fh[187],
        BF = Fh[3] + Fh[114] + Fh[1538],
        DF = Fh[1069] + Fh[114] + Fh[298],
        RF = Fh[1540] + Fh[1199] + Fh[1541],
        zF = Fh[460] + Fh[1] + Fh[1542],
        LF = Fh[1543],
        GF = Fh[197] + Fh[20] + Fh[477],
        YF = Fh[414] + Fh[114] + Fh[1538],
        HF = Fh[414] + Fh[238] + Fh[1544] + Fh[591] + Fh[1545],
        XF = Fh[1045] + Fh[83] + Fh[328] + Fh[83] + Fh[1076],
        WF = Fh[1045] + Fh[83] + Fh[1546],
        VF = Fh[1045] + Fh[83] + Fh[328] + Fh[83] + Fh[911],
        UF = Fh[1045] + Fh[83] + Fh[1547],
        QF = Fh[1045] + Fh[83] + Fh[1548],
        JF = Fh[999] + Fh[83] + Fh[328] + Fh[83] + Fh[1076],
        ZF = Fh[999] + Fh[83] + Fh[1546],
        KF = Fh[999] + Fh[83] + Fh[328] + Fh[83] + Fh[911],
        tA = Fh[465] + Fh[83] + Fh[1076],
        iA = Fh[1549],
        nA = Fh[465] + Fh[83] + Fh[911],
        eA = Fh[374] + Fh[81] + Fh[992],
        sA = Fh[356] + Fh[83] + Fh[408],
        hA = Fh[1550] + Fh[81] + Fh[1520],
        rA = Fh[462] + Fh[83] + Fh[1076],
        fA = Fh[1550] + Fh[81] + Fh[1551],
        aA = Fh[462] + Fh[83] + Fh[1552],
        _A = Fh[1550] + Fh[81] + Fh[1524],
        cA = Fh[462] + Fh[83] + Fh[911],
        uA = Fh[148] + Fh[81] + Fh[138],
        oA = Fh[1553] + Fh[83] + Fh[554],
        dA = Fh[471] + Fh[217] + Fh[1057] + Fh[131] + Fh[240],
        lA = Fh[3] + Fh[217] + Fh[1057] + Fh[217] + Fh[1554],
        bA = Fh[331] + Fh[217] + Fh[1555],
        vA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1556],
        yA = Fh[1557],
        gA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[680],
        xA = Fh[1558],
        wA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1559],
        mA = Fh[1560],
        jA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1561] + Fh[81] + Fh[1562] + Fh[81] + Fh[374],
        pA = Fh[197] + Fh[83] + Fh[1563] + Fh[83] + Fh[356],
        kA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1561] + Fh[81] + Fh[374],
        MA = Fh[197] + Fh[83] + Fh[356],
        EA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1561] + Fh[81] + Fh[332],
        SA = Fh[197] + Fh[83] + Fh[972],
        PA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1561] + Fh[81] + Fh[203],
        IA = Fh[197] + Fh[83] + Fh[237],
        TA = Fh[472] + Fh[81] + Fh[249] + Fh[81] + Fh[1564],
        CA = Fh[44] + Fh[1079] + Fh[217] + Fh[1057],
        OA = Fh[72] + Fh[639] + Fh[217] + Fh[1057],
        $A = Fh[131] + Fh[1565] + Fh[217] + Fh[1057],
        FA = Fh[238] + Fh[1544] + Fh[591] + Fh[1545] + Fh[217] + Fh[1057],
        AA = Fh[38] + Fh[1510] + Fh[1] + Fh[1507] + Fh[217] + Fh[1057],
        NA = Fh[64] + Fh[1566] + Fh[217] + Fh[1057],
        qA = Fh[114] + Fh[1538] + Fh[217] + Fh[1057],
        BA = Fh[100] + Fh[1567] + Fh[72] + Fh[639] + Fh[217] + Fh[1057],
        DA = Fh[44] + Fh[1024] + Fh[217] + Fh[1057],
        RA = Fh[25] + Fh[1568],
        zA = Fh[3] + Fh[134] + Fh[212],
        LA = Fh[1569],
        GA = Fh[1570],
        YA = Fh[1571],
        HA = Fh[493],
        XA = Fh[981] + Fh[18] + Fh[1572],
        WA = Fh[3] + Fh[25] + Fh[355] + Fh[100] + Fh[1573],
        VA = Fh[1046] + Fh[25] + Fh[1574],
        UA = Fh[1575] + Fh[81] + Fh[384],
        QA = Fh[1575] + Fh[81] + Fh[383],
        JA = Fh[1575] + Fh[81] + Fh[508],
        ZA = Fh[1575] + Fh[81] + Fh[386],
        KA = Fh[1575] + Fh[81] + Fh[385],
        tN = Fh[1575] + Fh[81] + Fh[507],
        iN = Fh[1576],
        nN = Fh[1577] + Fh[83] + Fh[1578],
        eN = Fh[1576] + Fh[83] + Fh[586],
        sN = Fh[1576] + Fh[83] + Fh[1185],
        hN = Fh[979] + Fh[81] + Fh[363] + Fh[81] + Fh[1579],
        rN = Fh[979] + Fh[81] + Fh[363] + Fh[81] + Fh[1579] + Fh[81] + Fh[380],
        fN = Fh[979] + Fh[81] + Fh[363] + Fh[81] + Fh[1579] + Fh[81] + Fh[382],
        aN = Fh[979] + Fh[81] + Fh[363] + Fh[81] + Fh[1580] + Fh[81] + Fh[1581],
        _N = Fh[34] + Fh[435] + Fh[1582] + Fh[38] + Fh[1583],
        cN = Fh[68] + Fh[72] + Fh[200],
        uN = Fh[3] + Fh[23] + Fh[240] + Fh[72] + Fh[200],
        oN = Fh[317] + Fh[1] + Fh[2] + Fh[38] + Fh[1583],
        dN = Fh[586] + Fh[276] + Fh[732],
        lN = Fh[1185] + Fh[276] + Fh[732],
        bN = Fh[261] + Fh[114] + Fh[298],
        vN = Fh[1584],
        yN = Fh[1585],
        gN = Fh[966] + Fh[25] + Fh[355],
        xN = Fh[317] + Fh[47] + Fh[212],
        wN = Fh[81] + Fh[1586],
        mN = Fh[81] + Fh[599] + Fh[349],
        jN = Fh[266] + Fh[1587],
        pN = Fh[266] + Fh[1127],
        kN = Fh[493] + Fh[120],
        MN = Fh[493] + Fh[121],
        EN = Fh[261] + Fh[100] + Fh[1026],
        SN = Fh[261] + Fh[38] + Fh[402],
        PN = Fh[268] + Fh[25] + Fh[355] + Fh[38] + Fh[402],
        IN = Fh[1588],
        TN = Fh[43],
        CN = Fh[1589] + Fh[25] + Fh[355] + Fh[38] + Fh[402],
        ON = Fh[3] + Fh[131] + Fh[1590] + Fh[217] + Fh[1591],
        $N = Fh[493] + Fh[1] + Fh[326],
        FN = Fh[356] + Fh[1] + Fh[326],
        AN = Fh[1592],
        NN = Fh[1593],
        qN = Fh[141] + Fh[72] + Fh[1063],
        BN = Fh[34] + Fh[100] + Fh[1594],
        DN = Fh[995],
        RN = Fh[1076] + Fh[18] + Fh[1595],
        zN = Fh[47] + Fh[1596] + Fh[25] + Fh[1568],
        LN = Fh[1597],
        GN = Fh[1598],
        YN = Fh[242],
        HN = Fh[1599],
        XN = Fh[1600] + Fh[81] + Fh[1601] + Fh[81] + Fh[1602],
        WN = Fh[1600] + Fh[81] + Fh[1601] + Fh[81] + Fh[1603],
        VN = Fh[393] + Fh[81] + Fh[249] + Fh[81] + Fh[1604],
        UN = Fh[393] + Fh[81] + Fh[249] + Fh[81] + Fh[1605],
        QN = Fh[3] + Fh[276] + Fh[732],
        JN = Fh[1606],
        ZN = Fh[405] + Fh[72] + Fh[1607],
        KN = Fh[3] + Fh[100] + Fh[279],
        tq = Fh[509] + Fh[131] + Fh[240],
        iq = Fh[493] + Fh[314],
        nq = Fh[493] + Fh[89],
        eq = Fh[374] + Fh[81] + Fh[992] + Fh[81] + Fh[954],
        sq = Fh[1608],
        hq = Fh[569] + Fh[217] + Fh[1609],
        rq = Fh[1610],
        fq = Fh[1611],
        aq = Fh[1611] + Fh[120],
        _q = Fh[1611] + Fh[121],
        cq = Fh[34] + Fh[217] + Fh[1612],
        uq = Fh[1589],
        oq = Fh[955] + Fh[81] + Fh[378],
        dq = Fh[1613],
        lq = Fh[1614],
        bq = Fh[261] + Fh[131] + Fh[1615],
        vq = Fh[261] + Fh[64] + Fh[1616],
        yq = Fh[1592] + Fh[18] + Fh[35],
        gq = Fh[1617],
        xq = Fh[1046],
        wq = Fh[209] + Fh[64] + Fh[476],
        mq = Fh[471] + Fh[64] + Fh[476],
        jq = Fh[72] + Fh[1618] + Fh[25] + Fh[1568],
        pq = Fh[512] + Fh[25] + Fh[1574],
        kq = Fh[0] + Fh[217] + Fh[218] + Fh[64] + Fh[319],
        Mq = Fh[295] + Fh[64] + Fh[296] + Fh[47] + Fh[130] + Fh[114] + Fh[1619] + Fh[38] + Fh[1038] + Fh[20] + Fh[1039] + Fh[72] + Fh[1620],
        Eq = Fh[295] + Fh[64] + Fh[296] + Fh[47] + Fh[130] + Fh[114] + Fh[1619] + Fh[47] + Fh[1621] + Fh[20] + Fh[1039] + Fh[72] + Fh[1620],
        Sq = Fh[55] + Fh[1] + Fh[705],
        Pq = Fh[34] + Fh[1622],
        Iq = Fh[34] + Fh[15] + Fh[1623],
        Tq = Fh[34] + Fh[238] + Fh[1624],
        Cq = Fh[34] + Fh[276] + Fh[1625],
        Oq = Fh[34] + Fh[20] + Fh[1626],
        $q = Fh[34] + Fh[72] + Fh[1627],
        Fq = Fh[34] + Fh[1] + Fh[1628],
        Aq = Fh[34] + Fh[131] + Fh[1629],
        Nq = Fh[38] + Fh[39] + Fh[72] + Fh[939],
        qq = Fh[38] + Fh[1630],
        Bq = Fh[1] + Fh[1631],
        Dq = Fh[276] + Fh[1632],
        Rq = Fh[276] + Fh[370],
        zq = Fh[47] + Fh[107] + Fh[133],
        Lq = Fh[64] + Fh[129] + Fh[133],
        Gq = Fh[23] + Fh[240] + Fh[133],
        Yq = Fh[25] + Fh[1010] + Fh[133],
        Hq = Fh[217] + Fh[222] + Fh[133],
        Xq = Fh[72] + Fh[1633],
        Wq = Fh[44] + Fh[224],
        Vq = Fh[217] + Fh[1057] + Fh[64] + Fh[65],
        Uq = Fh[276] + Fh[370] + Fh[131] + Fh[439],
        Qq = Fh[64] + Fh[319] + Fh[47] + Fh[320],
        Jq = Fh[114] + Fh[1634] + Fh[25] + Fh[1568],
        Zq = Fh[369] + Fh[1635] + Fh[29] + Fh[295] + Fh[29] + Fh[924] + Fh[349],
        Kq = Fh[314] + Fh[83] + Fh[352],
        tB = Fh[314] + Fh[83] + Fh[352] + Fh[83] + Fh[314],
        iB = Fh[369] + Fh[1635] + Fh[247] + Fh[38] + Fh[1636] + Fh[29] + Fh[1] + Fh[1637] + Fh[29] + Fh[295] + Fh[29] + Fh[924] + Fh[349] + Fh[449] + Fh[1] + Fh[451],
        nB = Fh[1175] + Fh[1489],
        eB = Fh[314] + Fh[449] + Fh[89] + Fh[449] + Fh[1638],
        sB = 0;
    if (t[Vd]) {
        var hB = navigator[Ud],
            rB = /opera/i[Za](hB),
            fB = !rB && /msie/i[Za](hB),
            aB = /rv:11.0/i[Za](hB);
        if (aB && (fB = !0), /msie\s[6,7,8]/i[Za](hB)) throw new Error("your browser is not supported");
        var _B = /webkit|khtml/i[Za](hB),
            cB = !_B && /gecko/i[Za](hB),
            uB = /firefox\//i[Za](hB),
            oB = /Chrome\//i[Za](hB),
            dB = !oB && /Safari\//i[Za](hB),
            lB = /Macintosh;/i[Za](hB),
            bB = i[Od].hasOwnProperty(Bo),
            vB = /(iPad|iPhone|iPod)/g[Za](hB),
            yB = /Android/g[Za](hB),
            gB = hB[$o](/AppleWebKit\/([0-9\.]*)/);
        if (gB && gB[qh] > 1) var xB = parseFloat(gB[1]);
        if (yB && (parseFloat(hB[$o](/Android\s([0-9\.]*)/)[1]), xB && 534.3 >= xB)) var wB = !0
    }
    t.requestAnimationFrame || (t[Vh] = t[Qd] || t[Jd] || t[Zd] || t[Kd] ||
        function(i) {
            return t[tl](function() {
                    i()
                },
                1e3 / 60)
        }),
    t[il] || (t[il] = t[nl] || t[el] || t[sl] || t[hl] ||
        function(i) {
            return t[rl](i)
        });
    var mB = {
        SELECTION_TOLERANCE: 2,
        DOUBLE_BUFFER: n,
        LABEL_COLOR: fl
    };
    J(mB, {
        FONT_STYLE: {
            get: function() {
                return this._fontStyle || (this._fontStyle = al)
            },
            set: function(t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function() {
                return this._fontSize || (this._fontSize = 12)
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function() {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            },
            set: function(t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function() {
                return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[_l] + tr + this[cl] + ul + this[ol]),
                    this._font
            }
        }
    });
    var jB = function() {};
    jB[br] = {
        _n5: 0,
        _n3: 0,
        _kz: !0,
        _km: 1,
        _g5: function(t, i, n) {
            var e = this._nbu(i),
                s = this._nbt(n),
                h = t * e,
                r = t * s;
            return this._9z(t, i - h, n - r)
        },
        _nbu: function(t) {
            return (t - this._n5) / this._km
        },
        _nbt: function(t) {
            return (t - this._n3) / this._km
        },
        _df: function(t, i) {
            return this._9z(this._km, this._n5 + t, this._n3 + i)
        },
        _9z: function(t, i, n) {
            return this._km == t && this._n5 == i && this._n3 == n ? !1 : (this._kz && (1 != this[ca] || 2 != this[ca] ? (i = Math[Aa](i * this[ca]) / this[ca], n = Math[Aa](n * this[ca]) / this[ca]) : (i = Math[Aa](i), n = Math[Aa](n))), this._n5 = i, this._n3 = n, this._km = t, void(this._3k && this._3k()))
        },
        _hc: function() {
            return {
                a: this._km,
                b: 0,
                c: 0,
                d: this._km,
                e: this._n5,
                f: this._n3
            }
        },
        toString: function() {
            return dl + D(this._km) + ll + D(this._km) + Or + D(this._n5) + Or + D(this._n3) + $r
        },
        _ha: function(t) {
            di(t, zo, this.toString())
        }
    };
    var pB = function(t) {
        this._j2 = [],
            this._lt = {},
        t && this[ir](t)
    };
    pB[br] = {
        _j2: null,
        _lt: null,
        get: function(t) {
            return this[bl](t)
        },
        getById: function(t) {
            return this._lt[t]
        },
        getByIndex: function(t) {
            return this._j2[t]
        },
        forEach: function(t, i, n) {
            return l(this._j2, t, i, n)
        },
        forEachReverse: function(t, i, n) {
            return v(this._j2, t, i, n)
        },
        size: function() {
            return this._j2[qh]
        },
        contains: function(t) {
            return this[Tc](t.id)
        },
        containsById: function(t) {
            return this._lt.hasOwnProperty(t)
        },
        setIndex: function(t, i) {
            var n = this._j2[Wh](t);
            if (0 > n) throw new Error(Xf + t.id + vl);
            return n == i ? !1 : (this._j2[zh](n, 1), this._j2[zh](i, 0, t), !0)
        },
        setIndexAfter: function(t, i) {
            var n = this._j2[Wh](t);
            if (0 > n) throw new Error(Xf + t.id + vl);
            return n == i ? i: n == i + 1 ? i + 1 : (n > i && (i += 1), this._j2[zh](n, 1), this._j2[zh](i, 0, t), i)
        },
        setIndexBefore: function(t, i) {
            var n = this._j2[Wh](t);
            if (0 > n) throw new Error(Xf + t.id + vl);
            return n == i ? i: n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j2[zh](n, 1), this._j2[zh](i, 0, t), i)
        },
        indexOf: function(t) {
            return this._j2[Wh](t)
        },
        getIndexById: function(t) {
            var i = this[yl](t);
            return i ? this._j2[Wh](i) : -1
        },
        add: function(t, i) {
            return I(t) ? this._fy(t, i) : this._kj(t, i)
        },
        addFirst: function(t) {
            return this[ir](t, 0)
        },
        _fy: function(t, i) {
            if (0 == t[qh]) return ! 1;
            var e = !1,
                s = i >= 0;
            t = t._j2 || t;
            for (var h = 0,
                     r = t[qh]; r > h; h++) {
                var f = t[h];
                null !== f && f !== n && this._kj(f, i, !0) && (e = !0, s && i++)
            }
            return e
        },
        _kj: function(t, i) {
            var e = t.id;
            return e === n || this[Tc](e) ? !1 : (g(this._j2, t, i), this._lt[e] = t, t)
        },
        remove: function(t) {
            return I(t) ? this._ndz(t) : t.id ? this._g7(t.id, t) : this[gl](t)
        },
        _ndz: function(t) {
            if (0 == t[qh]) return ! 1;
            var i = !1;
            t = t._j2 || t;
            for (var e = 0,
                     s = t[qh]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._lt[h]);
                    var r = h.id;
                    this._g7(r, h, !0) && (i = !0)
                }
            }
            return i
        },
        _g7: function(t, i) {
            return t !== n && this[Tc](t) ? ((null === i || i === n) && (i = this[yl](t)), delete this._lt[t], x(this._j2, i), !0) : !1
        },
        removeById: function(t) {
            var i = this._lt[t];
            return i ? this._g7(t, i) : !1
        },
        set: function(t) {
            if (!t || 0 == t) return void this[Pf]();
            if (this[H_]() || !I(t)) return this[Pf](),
                this[ir](t);
            var i = [],
                n = {},
                e = 0;
            if (l(t,
                    function(t) {
                        this._lt[t.id] ? (n[t.id] = t, e++) : i[Xh](t)
                    },
                    this), e != this[qh]) {
                var s = [];
                this[uc](function(t) {
                        n[t.id] || s[Xh](t)
                    },
                    this),
                s[qh] && this._ndz(s)
            }
            return i[qh] && this._fy(i),
                !0
        },
        clear: function() {
            return this[H_]() ? !1 : (this._j2[qh] = 0, this._lt = {},
                !0)
        },
        toDatas: function() {
            return this._j2[Rh](0)
        },
        isEmpty: function() {
            return 0 == this._j2[qh]
        },
        valueOf: function() {
            return this._j2[qh]
        },
        clone: function(t) {
            var i = new pB;
            return i[ir](t ? y(this._j2) : this[xo]()),
                i
        }
    },
        J(pB[br], {
            datas: {
                get: function() {
                    return this._j2
                }
            },
            random: {
                get: function() {
                    return this._j2 && this._j2[qh] ? this._j2[$(this._j2[qh])] : null
                }
            },
            length: {
                get: function() {
                    return this._j2 ? this._j2[qh] : 0
                }
            }
        });
    var kB = (2 * Math.PI, .5 * Math.PI),
        MB = function(t, i) {
            i = i[ef]();
            for (var n = fB ? t[xl] : t[wl]; n && (1 != n[ml] || n[jl] && n[jl][ef]() != i);) n = fB ? n[pl] : n[kl];
            return n && 1 == n[ml] && n[jl] && n[jl][ef]() == i ? n: null
        },
        EB = function(t, i, n) {
            t instanceof EB && (i = t.y, t = t.x, n = t[Ha]),
                this[pr](t, i, n)
        },
        SB = function(t, i, n, e) {
            var s = t - n,
                h = i - e;
            return Math[Pa](s * s + h * h)
        };
    EB[br] = {
        x: 0,
        y: 0,
        rotate: n,
        set: function(t, i, n) {
            this.x = t || 0,
                this.y = i || 0,
                this[Ha] = n || 0
        },
        negate: function() {
            this.x = -this.x,
                this.y = -this.y
        },
        offset: function(t, i) {
            this.x += t,
                this.y += i
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function(t) {
            return SB(this.x, this.y, t.x, t.y)
        },
        toString: function() {
            return Ml + this.x + El + this.y + $r
        },
        clone: function() {
            return new EB(this.x, this.y)
        }
    },
        Object[wr](EB[br], Sl, {
            get: function() {
                return Math[Pa](this.x * this.x + this.y * this.y)
            }
        });
    var PB = function(t, i, e, s) {
        t !== n && this._mu(t, i, e, s)
    };
    PB[br] = {
        _n7: null,
        _n2: null,
        _n9: null,
        _na: null,
        _nd: null,
        _nb: null,
        _nf: 1,
        _mu: function(t, i, n, e) {
            this._n7 = t,
                this._n2 = i,
                this._n9 = n,
                this._na = e,
                t == n ? (this._nd = -1, this._nf = 0, this._nb = t) : (this._nd = (i - e) / (t - n), this._nb = i - this._nd * t, this._nf = 1),
                this._l0 = Math[Yr](this._na - this._n2, this._n9 - this._n7),
                this._nfos = Math[Hr](this._l0),
                this._sin = Math[Xr](this._l0)
        },
        _d2: function(t) {
            return 0 == this._nf ? Number[Pl] : this._nd * t + this._nb
        },
        _d6: function(t) {
            return 0 == this._nd ? Number[Pl] : (t - this._nb) / this._nd
        },
        _$j: function(t) {
            var i, n, e, s, h, r = t[0],
                f = t[2],
                a = t[4],
                _ = t[1],
                c = t[3],
                u = t[5],
                o = this._nd,
                d = this._nb,
                l = this._nf;
            if (0 == l ? (e = Math[Pa](( - o * o * r - o * d) * a + o * o * f * f + 2 * o * d * f - o * d * r), s = -o * f + o * r, h = o * a - 2 * o * f + o * r) : (e = Math[Pa](( - _ + o * r + d) * u + c * c + ( - 2 * o * f - 2 * d) * c + (o * a + d) * _ + ( - o * o * r - o * d) * a + o * o * f * f + 2 * o * d * f - o * d * r), s = -c + _ + o * f - o * r, h = u - 2 * c + _ - o * a + 2 * o * f - o * r), 0 != h) {
                i = (e + s) / h,
                    n = ( - e + s) / h;
                var b, v;
                return i >= 0 && 1 >= i && (b = Gi(i, t)),
                n >= 0 && 1 >= n && (v = Gi(n, t)),
                    b && v ? [b, v] : b ? b: v ? v: void 0
            }
        },
        _4e: function(t, i, n) {
            if (this._nd == t._nd || 0 == this._nf && 0 == t._nf) return null;
            var e, s;
            if (e = 0 == this._nf ? this._nb: 0 == t._nf ? t._nb: (t._nb - this._nb) / (this._nd - t._nd), s = 0 == this._nd ? this._nb: 0 == t._nd ? t._nb: this._nf ? this._nd * e + this._nb: t._nd * e + t._nb, !i) return {
                x: e,
                y: s
            };
            var h, r, f;
            if (n) h = -i / 2,
                r = -h;
            else {
                h = -SB(this._n7, this._n2, e, s),
                    r = SB(this._n9, this._na, e, s);
                var a = -h + r;
                if (a > i) {
                    var _ = i / a;
                    h *= _,
                        r *= _
                } else f = (i - a) / 2
            }
            var c = this._7t(e, s, h),
                u = this._7t(e, s, r);
            return f && (c._rest = f, u._rest = f),
                [c, u]
        },
        _7t: function(t, i, n) {
            return 0 == this._nf ? {
                x: t,
                y: i + n
            }: {
                x: t + n * this._nfos,
                y: i + n * this._sin
            }
        }
    };
    var IB = function(t, i) {
        this[fa] = t,
            this[aa] = i
    };
    IB.prototype = {
        width: 0,
        height: 0,
        isEmpty: function() {
            return this[fa] <= 0 || this[aa] <= 0
        },
        clone: function() {
            return new IB(this[fa], this[aa])
        },
        toString: function() {
            return Il + this[fa] + El + this[aa] + $r
        }
    };
    var TB = function(t, i, e, s) {
        e === n && (e = -1),
        s === n && (s = -1),
            this.x = t || 0,
            this.y = i || 0,
            this[fa] = e,
            this[aa] = s
    };
    TB[br] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function(t) {
            this.x = t.x || 0,
                this.y = t.y || 0,
                this[fa] = t[fa] || 0,
                this[aa] = t[aa] || 0
        },
        set: function(t, i, n, e) {
            this.x = t || 0,
                this.y = i || 0,
                this[fa] = n || 0,
                this[aa] = e || 0
        },
        offset: function(t, i) {
            this.x += t,
                this.y += i
        },
        contains: function(t, i) {
            return t instanceof TB ? fi(this.x, this.y, this[fa], this[aa], t.x, t.y, t[fa], t[aa]) : t >= this.x && t <= this.x + this[fa] && i >= this.y && i <= this.y + this[aa]
        },
        intersectsPoint: function(t, i, n) {
            return this[fa] <= 0 && this[aa] <= 0 ? !1 : n ? this[Tl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[fa] && i >= this.y && i <= this.y + this[aa]
        },
        intersectsRect: function(t, i, n, e) {
            return hi(this.x, this.y, this[fa], this[aa], t, i, n, e)
        },
        intersects: function(t, i) {
            return t instanceof TB ? this[Tl](t.x, t.y, t[fa], t[aa]) : this[Fa](t, i)
        },
        intersection: function(t, i, n, e) {
            var s = this.x,
                h = this.y,
                r = s;
            r += this[fa];
            var f = h;
            f += this[aa];
            var a = t;
            a += n;
            var _ = i;
            return _ += e,
            t > s && (s = t),
            i > h && (h = i),
            r > a && (r = a),
            f > _ && (f = _),
                r -= s,
                f -= h,
                0 > r || 0 > f ? null: new TB(s, h, r, f)
        },
        addPoint: function(t) {
            this[ir](t.x, t.y)
        },
        add: function(t, i) {
            if (t instanceof TB) return this[Cl](t.x, t.y, t[fa], t[aa]);
            if (t instanceof EB && (i = t.y, t = t.x), this[fa] < 0 || this[aa] < 0) return this.x = t,
                this.y = i,
                void(this[fa] = this[aa] = 0);
            var n = this.x,
                e = this.y,
                s = this[fa],
                h = this[aa];
            s += n,
                h += e,
            n > t && (n = t),
            e > i && (e = i),
            t > s && (s = t),
            i > h && (h = i),
                s -= n,
                h -= e,
            s > Number[Ol] && (s = Number[Ol]),
            h > Number[Ol] && (h = Number[Ol]),
                this[pr](n, e, s, h)
        },
        addRect: function(t, i, n, e) {
            var s = this[fa],
                h = this[aa]; (0 > s || 0 > h) && this[pr](t, i, n, e);
            var r = n,
                f = e;
            if (! (0 > r || 0 > f)) {
                var a = this.x,
                    _ = this.y;
                s += a,
                    h += _;
                var c = t,
                    u = i;
                r += c,
                    f += u,
                a > c && (a = c),
                _ > u && (_ = u),
                r > s && (s = r),
                f > h && (h = f),
                    s -= a,
                    h -= _,
                s > Number[Ol] && (s = Number[Ol]),
                h > Number[Ol] && (h = Number[Ol]),
                    this[pr](a, _, s, h)
            }
        },
        grow: function(t, i, n, e) {
            return E(t) ? 1 == arguments[qh] ? e = i = n = t || 0 : 2 == arguments[qh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[yf] || 0, n = t[Wr] || 0, e = t[Vr] || 0, t = t[gf] || 0),
                this.x -= i,
                this.y -= t,
                this[fa] += i + e,
                this.height += t + n,
                this
        },
        isEmpty: function() {
            return this[fa] <= 0 && this[aa] <= 0
        },
        toString: function() {
            return this.x + $l + this.y + $l + this[fa] + $l + this[aa]
        },
        union: function(t) {
            var i = this[fa],
                n = this[aa];
            if (0 > i || 0 > n) return new TB(t.x, t.y, t[fa], t[aa]);
            var e = t[fa],
                s = t[aa];
            if (0 > e || 0 > s) return new TB(this.x, this.y, this.width, this[aa]);
            var h = this.x,
                r = this.y;
            i += h,
                n += r;
            var f = t.x,
                a = t.y;
            return e += f,
                s += a,
            h > f && (h = f),
            r > a && (r = a),
            e > i && (i = e),
            s > n && (n = s),
                i -= h,
                n -= r,
            i > Number[Ol] && (i = Number[Ol]),
            n > Number[Ol] && (n = Number[Ol]),
                new TB(h, r, i, n)
        },
        clear: function() {
            this[pr](0, 0, -1, -1)
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y && this[fa] == t[fa] && this[aa] == t[aa]
        },
        clone: function(t, i) {
            return new TB(this.x + (t || 0), this.y + (i || 0), this[fa], this[aa])
        },
        getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }
    },
        N(TB, IB),
        J(TB[br], {
            bottom: {
                get: function() {
                    return this.y + this[aa]
                }
            },
            right: {
                get: function() {
                    return this.x + this[fa]
                }
            },
            cx: {
                get: function() {
                    return this.x + this[fa] / 2
                }
            },
            cy: {
                get: function() {
                    return this.y + this[aa] / 2
                }
            },
            center: {
                get: function() {
                    return new EB(this.cx, this.cy)
                }
            }
        });
    var CB = function(t, i, n, e) {
        1 == arguments[qh] ? i = n = e = t: 2 == arguments[qh] && (n = t, e = i),
            this[pr](t, i, n, e)
    };
    CB[br] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function(t, i, n, e) {
            this[gf] = t || 0,
                this[yf] = i || 0,
                this[Wr] = n || 0,
                this[Vr] = e || 0
        },
        clone: function() {
            return new CB(this[gf], this[yf], this[Wr], this[Vr])
        },
        equals: function(t) {
            return t && this[gf] == t[gf] && this[Wr] == t[Wr] && this[yf] == t[yf] && this[Vr] == t[Vr]
        }
    };
    var OB = function(t, i) {
        this[Qr] = t,
            this[Jr] = i
    };
    OB[br] = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function() {
            return (this[Qr] || "") + (this.verticalPosition || "")
        }
    },
        Q(OB[br], Fl, {
            get: function() {
                return (this[Qr] || "") + (this[Jr] || "")
            }
        });
    var $B = Al,
        FB = Nl,
        AB = ql,
        NB = Mc,
        qB = Bl,
        BB = Dl;
    OB[Rl] = new OB($B, NB),
        OB[zl] = new OB($B, qB),
        OB[Ll] = new OB($B, BB),
        OB[Gl] = new OB(FB, NB),
        OB[Yl] = new OB(FB, qB),
        OB[Hl] = new OB(FB, BB),
        OB[Xl] = new OB(AB, NB),
        OB[Wl] = new OB(AB, qB),
        OB[Vl] = new OB(AB, BB);
    var DB = [OB[Rl], OB[zl], OB[Ll], OB[Gl], OB[Yl], OB[Hl], OB[Xl], OB[Wl], OB[Vl]];
    Q(OB, or, {
        get: function() {
            return DB[$(DB[qh])]
        }
    });
    var RB = function(t, i, n, e, s) {
        this[pr](t, i, n, e),
            this[Ul] = s
    };
    RB[br] = {
        radius: 0,
        classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function(t, i, n, e) {
            if (B(this, RB, Tl, arguments) === !1) return ! 1;
            var s = this.x,
                h = this.y,
                r = s + this[fa],
                f = h + this[aa],
                a = 2 * radius,
                _ = 2 * radius,
                c = Math[Ia](this[fa], Math[Ur](a)) / 2,
                u = Math[Ia](this[aa], Math[Ur](_)) / 2,
                o = this[Ql](t, s, r, c),
                d = this[Ql](t + n, s, r, c),
                l = this[Ql](i, h, f, u),
                b = this[Ql](i + e, h, f, u);
            return 2 == o || 2 == d || 2 == l || 2 == b ? !0 : 2 > o && d > 2 || 2 > l && b > 2 ? !0 : (t = 1 == d ? t = t + n - (s + c) : t -= r - c, i = 1 == b ? i = i + e - (h + u) : i -= f - u, t /= c, i /= u, 1 >= t * t + i * i)
        },
        intersectsPoint: function(t, i) {
            if (B(this, RB, Fa, arguments) === !1) return ! 1;
            var n = this.x,
                e = this.y,
                s = n + this[fa],
                h = e + this[aa];
            if (n > t || e > i || t >= s || i >= h) return ! 1;
            var r = 2 * radius,
                f = 2 * radius,
                a = Math[Ia](this[fa], Math[Ur](r)) / 2,
                _ = Math[Ia](this[aa], Math[Ur](f)) / 2;
            return t >= (n += a) && t < (n = s - a) ? !0 : i >= (e += _) && i < (e = h - _) ? !0 : (t = (t - n) / a, i = (i - e) / _, 1 >= t * t + i * i)
        },
        clone: function() {
            return new RB(this.x, this.y, this[fa], this[aa], this[Ul])
        }
    },
        N(RB, TB);
    var zB = function(t, i, n, e) {
        this[r_] = t,
            this[Ya] = i,
            this[Ad] = n,
            this[Pr] = e
    };
    zB[br] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function() {
            return Jl + this[r_] + Zl + this[Ya] + Kl + this[Ad]
        }
    };
    var LB = function(t, i, n, e) {
        this[r_] = t,
            this[Ad] = i,
            this[tb] = e,
            this[Pr] = n
    };
    LB[br] = {
        type: ib,
        propertyType: null,
        toString: function() {
            return Jl + this[r_] + Zl + this[Ya] + nb + this[Ad] + eb + this[tb] + sb + this[Pr]
        }
    },
        N(LB, zB),
        Q(LB[br], hb, {
            get: function() {
                return this[Ad]
            },
            set: function(t) {
                this[Ad] = t
            }
        });
    var GB = function(t, i, n) {
        this[r_] = t,
            this[tb] = t[Cc],
            this[Pr] = i,
            this[rb] = n,
        this[tb] && (this[fb] = this[tb][ab](t))
    };
    GB[br] = {
        kind: Cc
    },
        N(GB, LB);
    var YB = function(t, i) {
        this[r_] = t,
            this[Pr] = i
    };
    YB[br][Ad] = _b,
        N(YB, LB);
    var HB = function(t, i) {
        this[r_] = t,
            this[Pr] = i
    };
    HB[br][Ad] = cb,
        N(HB, LB);
    var XB = function(t, i, n, e) {
        this[r_] = i,
            this[tb] = n,
            this[Pr] = e,
            this[Cc] = t,
            this[ub] = i,
            this[fb] = n,
            this[rb] = e
    };
    XB[br][Ad] = ob,
        N(XB, LB);
    var WB = function() {};
    WB[br] = {
        listener: null,
        beforeEvent: function(t) {
            return null != this[db] && this[db][kr] ? this[db][kr](t) : !0
        },
        onEvent: function(t) {
            null != this[db] && this[db][Mr] && this[db][Mr](t)
        }
    };
    var VB = function() {
            q(this, VB, arguments),
                this[lb] = {},
                this[bb] = []
        },
        UB = function(t, i) {
            this[db] = t,
                this[gr] = i,
                t instanceof Function ? this[Mr] = t: (this[Mr] = t[Mr], this[kr] = t[kr]),
                this[vb] = function(t) {
                    return t && this[db] == t[db] && this[gr] == t[gr]
                }
        };
    UB[br] = {
        equals: function(t) {
            return t && this[db] == t[db] && this[gr] == t[gr]
        },
        destroy: function() {
            delete this[gr],
                delete this[db]
        }
    },
        VB[br] = {
            listeners: null,
            _nb1: function() {
                return this[bb] && this[bb][qh] > 0
            },
            _7i: function(t, i) {
                return t instanceof VB ? t: new UB(t, i)
            },
            _nd3: function(t, i) {
                if (t instanceof VB) return this[bb][Wh](t);
                for (var n = this[bb], e = 0, s = n[qh]; s > e; e++) {
                    var h = n[e];
                    if (h[db] == t && h[gr] == i) return e
                }
                return - 1
            },
            contains: function(t, i) {
                return this._nd3(t, i) >= 0
            },
            addListener: function(t, i) {
                return this[Po](t, i) ? !1 : void this[bb][Xh](this._7i(t, i))
            },
            removeListener: function(t, i, n) {
                var e = this._nd3(t, i);
                if (e >= 0) {
                    var s = this[bb][zh](e, 1)[0];
                    n || R(s)
                }
            },
            on: function(t, i) {
                this[qd](t, i)
            },
            un: function(t, i, n) {
                this[yb](t, i, n)
            },
            onEvent: function(t) {
                return this[bb] ? void l(this[bb],
                    function(i) {
                        i[Mr] && (i[gr] ? i[Mr][Bh](i[gr], t) : i[Mr](t))
                    },
                    this) : !1
            },
            beforeEvent: function(t) {
                return this[bb] ? l(this[bb],
                    function(i) {
                        return i[kr] ? i[gr] ? i[kr][Bh](i[gr], t) : i[kr](t) : !0
                    },
                    this) : !0
            },
            _ej: function(t) {
                return this[kr](t) === !1 ? !1 : (this[Mr](t), !0)
            },
            clear: function() {
                this[bb] = []
            },
            destroy: function() {
                this[Pf]()
            }
        },
        N(VB, WB);
    var QB = {
            onEvent: function() {},
            beforeEvent: function() {}
        },
        JB = function(t, i, n, e, s) {
            this[r_] = t,
                this[Ya] = gb,
                this[Ad] = i,
                this[za] = n,
                this[xb] = e,
                this[fb] = s
        };
    JB.prototype = {
        index: -1,
        oldIndex: -1,
        toString: function() {
            return Jl + this[r_] + Zl + this[Ya] + Kl + this[Ad] + wb + this[za] + mb + this[xb] + jb + this[fb]
        }
    },
        N(JB, zB),
        JB[pb] = ir,
        JB[kb] = Yh,
        JB[Mb] = Pf,
        JB[Eb] = Sb;
    var ZB = function() {
        this.id = ++sB,
            this._nf4 = {}
    };
    ZB[br] = {
        _nf4: null,
        id: null,
        get: function(t) {
            return this._nf4[t]
        },
        set: function(t, i) {
            var n = this[jr](t);
            if (n === i) return ! 1;
            var e = new LB(this, t, i, n);
            return e[Pb] = ED[Fu],
                this._nds(t, i, e, this._nf4)
        },
        _nds: function(t, i, e, s) {
            return this[kr](e) === !1 ? !1 : (s || (s = this._nf4), i === n ? delete s[t] : s[t] = i, this[Mr](e), !0)
        },
        remove: function(t) {
            this[pr](t, null)
        },
        valueOf: function() {
            return this.id
        },
        toString: function() {
            return this.id
        },
        _dh: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._j6) return ! 1;
            if (t && this == t._j6 && !t._dh(null)) return ! 1;
            var e = new GB(this, t, i);
            if (!this[kr](e)) return ! 1;
            var s, h, r = this._j6;
            return t && (s = new YB(t, this), !t[kr](s)) ? !1 : null == r || (h = new HB(r, this), r.beforeEvent(h)) ? (this._j6 = t, null != t && _i(t, this, i), null != r && ci(r, this), this[Mr](e), null != t && t[Mr](s), null != r && r[Mr](h), this[Ib](r, t), !0) : !1
        },
        addChild: function(t, i) {
            var n = t._dh(this, i);
            return n && this[Zr](t, i),
                n
        },
        onChildAdd: function() {},
        removeChild: function(t) {
            if (!this._f3 || !this._f3[Po](t)) return ! 1;
            var i = t._dh(null);
            return this[Kr](t),
                i
        },
        onChildRemove: function() {},
        toChildren: function() {
            return this._f3 ? this._f3[xo]() : null
        },
        clearChildren: function() {
            if (this._f3 && this._f3[qh]) {
                var t = this[Tb]();
                l(t,
                    function(t) {
                        t._dh(null)
                    },
                    this),
                    this[Cb](t)
            }
        },
        forEachChild: function(t, i) {
            return this[Ah]() ? this._f3[uc](t, i) : !1
        },
        onChildrenClear: function() {},
        getChildIndex: function(t) {
            return this._f3 && this._f3[qh] ? this._f3[Wh](t) : -1
        },
        setChildIndex: function(t, i) {
            if (!this._f3 || !this._f3[qh]) return ! 1;
            var n = this._f3[Wh](t);
            if (0 > n || n == i) return ! 1;
            var e = new XB(this, t, n, i);
            return this[kr](e) === !1 ? !1 : (this._f3[Yh](t) && this._f3[ir](t, i), this[Mr](e), !0)
        },
        hasChildren: function() {
            return this._f3 && this._f3[qh] > 0
        },
        getChildAt: function(t) {
            return null == this._f3 ? null: this._f3._j2[t]
        },
        isDescendantOf: function(t) {
            if (!t[Ah]()) return ! 1;
            for (var i = this[Cc]; null != i;) {
                if (t == i) return ! 0;
                i = i[Cc]
            }
            return ! 1
        },
        onParentChanged: function() {}
    },
        N(ZB, WB),
        J(ZB[br], {
            childrenCount: {
                get: function() {
                    return this._f3 ? this._f3[qh] : 0
                }
            },
            children: {
                get: function() {
                    return this._f3 || (this._f3 = new pB),
                        this._f3
                }
            },
            parent: {
                get: function() {
                    return this._j6
                },
                set: function(t) {
                    this._dh(t, -1)
                }
            },
            properties: {
                get: function() {
                    return this._nf4
                },
                set: function(t) {
                    this._nf4 != t && (this._nf4 = t)
                }
            }
        });
    var KB = function() {
        this._j2 = [],
            this._lt = {},
            this._1w = new VB
    };
    KB[br] = {
        beforeEvent: function(t) {
            return null != this._1w && this._1w[kr] ? this._1w[kr](t) : !0
        },
        onEvent: function(t) {
            return this._1w instanceof Function ? void this._1w(t) : void(null != this._1w && this._1w[Mr] && this._1w[Mr](t))
        },
        _1w: null,
        setIndex: function(t, i) {
            if (!this[Po](t)) throw new Error(Xf + t[Ob]() + vl);
            var n = this[Wh](t);
            if (n == i) return ! 1;
            var e = new JB(this, JB[Eb], t, i, n);
            return this[kr](e) === !1 ? !1 : (this._j2[Yh](t) >= 0 && this._j2[ir](i, t), this[Mr](e), !0)
        },
        _fy: function(t, i) {
            if (0 == t[qh]) return ! 1;
            var e = !1,
                s = i >= 0,
                h = new JB(this, JB[pb], t, i);
            if (this[kr](h) === !1) return ! 1;
            var r = [];
            t = t._j2 || t;
            for (var f = 0,
                     a = t[qh]; a > f; f++) {
                var _ = t[f];
                null !== _ && _ !== n && this._kj(_, i, !0) && (r[Xh](_), e = !0, s && i++)
            }
            return h[za] = r,
                this[Mr](h),
                e
        },
        _kj: function(t, i, n) {
            if (this[Rc](t) === !1) return ! 1;
            if (n) return B(this, KB, $b, arguments);
            var e = new JB(this, JB[pb], t, i);
            return this[kr](e) === !1 ? !1 : B(this, KB, $b, arguments) ? (this._ke(t, e), t) : !1
        },
        _ke: function(t, i) {
            this[Mr](i)
        },
        _ndz: function(t) {
            if (0 == t[qh]) return ! 1;
            var i = new JB(this, JB[kb], t);
            if (this[kr](i) === !1) return ! 1;
            var e = [],
                s = !1;
            t = t._j2 || t;
            for (var h = 0,
                     r = t[qh]; r > h; h++) {
                var f = t[h];
                if (null !== f && f !== n) {
                    var a = f.id || f;
                    f.id === n && (f = null),
                    this._g7(a, f, !0) && (e[Xh](f), s = !0)
                }
            }
            return i[za] = e,
                this[Mr](i),
                s
        },
        _g7: function(t, i, n) {
            if (n) return B(this, KB, Fb, arguments);
            var e = new JB(this, JB[kb], i);
            return this[kr](e) === !1 ? !1 : B(this, KB, Fb, arguments) ? (this[Mr](e), !0) : !1
        },
        clear: function() {
            if (this[H_]()) return ! 1;
            var t = new JB(this, JB[Mb], this[xo]());
            return this[kr](t) === !1 ? !1 : B(this, KB, Pf) ? (this[Mr](t), !0) : !1
        },
        accept: function(t) {
            return this[Ab] && this[Ab](t) === !1 ? !1 : !0
        }
    },
        N(KB, pB),
        Q(KB[br], Nb, {
            get: function() {
                return this._1w
            }
        });
    var tD = function() {
        q(this, tD, arguments),
            this[qb] = new VB,
            this._selectionModel = new iD(this),
            this._selectionModel._1w = this[qb],
            this[Bb] = new VB,
            this[Bb][qd]({
                    beforeEvent: this[Db],
                    onEvent: this[Rb]
                },
                this),
            this[zb] = new VB,
            this[Lb] = new VB,
            this[Gb] = new pB;
        var t = this;
        this[Gb][Yc] = function(i, n) {
            if (!t[Gb][Po](i)) throw new Error(Xf + i.id + vl);
            var e = t[Gb]._j2[Wh](i);
            if (e == n) return ! 1;
            t[Gb]._j2[zh](e, 1),
                t[Gb]._j2[zh](n, 0, i),
                t._nf9IndexFlag = !0;
            var s = new XB(t, i, e, n);
            return t._2j(s),
                !0
        }
    };
    tD[br] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _ke: function(t, i) {
            t[db] = this[Bb],
            t[Cc] || this[Gb][ir](t),
                this[Mr](i)
        },
        _g7: function(t, i) {
            if (B(this, tD, Fb, arguments)) {
                if (i instanceof dz) i[Yb]();
                else if (i instanceof lz) {
                    var n = i[Hb]();
                    this[Yh](n)
                }
                var e = i[Cc];
                return null == e ? this[Gb][Yh](i) : (e[Xb](i), e.__6l = !0),
                i[Ah]() && this[Yh](i[Tb]()),
                    i[db] = null,
                    !0
            }
            return ! 1
        },
        _5x: function(t) {
            var i = t[r_];
            this[Po](i) && (null == i[Cc] ? this[Gb][ir](i) : null == t[tb] && this[Gb][Yh](i), this[zb][Mr](t))
        },
        _2j: function(t) {
            this[Lb][Mr](t)
        },
        beforeDataPropertyChange: function(t) {
            return t instanceof GB ? this[zb][kr](t) : !0
        },
        onDataPropertyChanged: function(t) {
            return t instanceof GB ? (this._nf9IndexFlag = !0, t[r_]._nf9IndexFlag = !0, void this._5x(t)) : void(t instanceof XB && (this._nf9IndexFlag = !0, t[r_]._nf9IndexFlag = !0, this._2j(t)))
        },
        toRoots: function() {
            return this[Gb][xo]()
        },
        _g3: function(t) {
            var i, n = t._j6;
            i = n ? n._f3: this[Gb];
            var e = i[Wh](t);
            if (0 > e) throw new Error(Wb + t + "' not exist in the box");
            return 0 == e ? n: i[bl](e - 1)
        },
        _g1: function(t) {
            var i, n = t._j6;
            i = n ? n._f3: this[Gb];
            var e = i[Wh](t);
            if (0 > e) throw new Error(Wb + t + "' not exist in the box");
            return e == i[qh] - 1 ? n ? this._g1(n) : null: i[bl](e + 1)
        },
        forEachByDepthFirst: function(t, i, n) {
            return this[Gb][qh] ? h(this[Gb], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function(t, i, n) {
            return this[Gb][qh] ? a(this[Gb], t, i, n) : !1
        },
        forEachByBreadthFirst: function(t, i) {
            return this[Gb][qh] ? u(this[Gb], t, i) : !1
        },
        forEachByBreadthFirstReverse: function(t, i) {
            return this[Gb][qh] ? o(this[Gb], t, i) : !1
        },
        clear: function() {
            return B(this, tD, Pf) ? (this[Gb][Pf](), this[nd][Pf](), !0) : !1
        }
    },
        N(tD, KB),
        J(tD[br], {
            selectionModel: {
                get: function() {
                    return this._selectionModel
                }
            },
            roots: {
                get: function() {
                    return this[Gb]
                }
            }
        });
    var iD = function(t) {
        q(this, iD),
            this[Vb] = t,
            this._nboxChangeListener = {
                onEvent: function(t) {
                    JB[kb] == t[Ad] ? null != t[za] ? this[Yh](t[za]) : null != t[Nd] && this[Yh](t[Nd]) : JB[Mb] == t[Ad] && this[Pf]()
                }
            },
            this[Vb][Nb][qd](this._nboxChangeListener, this)
    };
    iD[br] = {
        box: null,
        isSelected: function(t) {
            return this[Tc](t.id || t)
        },
        select: function(t) {
            return this[ir](t)
        },
        unselect: function(t) {
            return this[Yh](t)
        },
        reverseSelect: function(t) {
            return this[Po](t) ? this[Yh](t) : this[ir](t)
        },
        accept: function(t) {
            return this[Vb][Po](t)
        }
    },
        N(iD, KB);
    var nD = null,
        eD = null,
        sD = null,
        hD = function() {
            if (!i[ga]) return function(t) {
                return t
            };
            var t = i[ga](Ao),
                e = t[sf],
                s = {};
            return function(t) {
                if (s[t]) return s[t];
                var i = ui(t);
                return e[i] !== n || sD && e[i = ui(sD + i)] !== n ? (s[t] = i, i) : t
            }
        } (),
        rD = {}; !
        function() {
            if (!i[Ub]) return ! 1;
            for (var e = i[Ub], s = "Webkit Moz O ms Khtml" [Kh](tr), h = 0; h < s[qh]; h++) if (e[sf][s[h] + Qb] !== n) {
                sD = Ld + s[h][Jb]() + Ld;
                break
            }
            var r = i[ga](sf);
            t[Zb] || r[qu](i[Kb]("")),
            r[Qh] && (nD = !0),
                r[Ya] = tv,
                r.id = iv,
                e[qu](r),
                eD = r[nv];
            var f, a;
            for (var _ in rD) {
                var c = rD[_];
                f = _,
                    a = "";
                for (var u in c) a += hD(u) + ev + c[u] + sv;
                li(f, a)
            }
        } ();
    var fD = function(t, i, n, e, s) {
            if (s) {
                var h = function(t) {
                    h[xr][Bh](h[gr], t)
                };
                return h[gr] = s,
                    h[xr] = n,
                    t[hv](i, h, e),
                    h
            }
            return t[hv](i, n, e),
                n
        },
        aD = function(t, i, n) {
            t[rv](i, n)
        },
        T = function(t) {
            t[fr] ? t[fr]() : t[ar] = !1
        },
        C = function(t) {
            t[_r] ? t[_r]() : t[cr] || (t[cr] = !0)
        },
        O = function(t) {
            T(t),
                C(t)
        };
    mB[Mf] = bB ? 500 : 300,
        mB[Of] = bB ? 1500 : 1e3;
    var _D;
    if (bB) _D = fv[Kh](Or);
    else {
        var cD = Nf in t ? "mousewheel": av;
        _D = (cD + _v)[Kh](Or)
    }
    ki[br] = {
        _kt: null,
        _ia: function() {
            var t = this._m2;
            t && pi[Bh](this, t)
        },
        destroy: function() {
            this._ia()
        },
        _nfw: null,
        _20: function() {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        },
        _e1: function() {
            this.__nfancelClick = !0,
                this._20(),
                this._il(this._nfw, cv),
                this._nfl[Pf]()
        },
        _nfl: null,
        _6x: function(t) {
            var i = this._9g;
            this._9g = xi(t),
                this._nfl[ir](i, this._9g, t)
        },
        _js: function(t) {
            this._6x(t),
                this._il(t, uv),
            t[Rr] && t[Rr][qh] > 1 && this._il(t, ov)
        },
        _ii: function(t) {
            bB || this._6x(t);
            var i = this._nfl[dv]();
            i && (t.vx = i.x, t.vy = i.y),
                this._il(t, lv),
                this._nfl[Pf]()
        },
        _e2: function(t) {
            this._nfw && (this._20(), this._il(t, bv), this._nfw = null, this._9g = null)
        },
        _il: function(t, i) {
            this._listener && this._listener[i] instanceof Function && this._listener[i][Bh](this._listener, t, this._kt || this._m2)
        }
    };
    var uD = function(t) {
        this._kc = t,
            q(this, uD, [t[vv]])
    };
    uD._nfurrentInteractionSupport = null,
        uD[br] = {
            _4v: function(t) {
                this._50(function(i) {
                    i[yv] instanceof Function && i[yv](t, this._kc)
                })
            },
            _7s: function() {
                this._50(function(t) {
                    t[gv] instanceof Function && t[gv](this._kc)
                })
            },
            _ia: function() {
                this._1u && this._2e(this._1u),
                this._$q && this._2e(this._$q);
                var t = this._kc[vv];
                t && pi[Bh](this, t)
            },
            _kc: null,
            _1u: null,
            _$q: null,
            _7p: function(t) {
                return this._1u == t ? !1 : (this._1u && this._1u[qh] && this._2e(this._1u), void(this._1u = t))
            },
            _6: function(t) {
                this._$q || (this._$q = []),
                    this._$q[Xh](t)
            },
            _5: function(t) {
                this._$q && 0 != this._$q[qh] && x(this._$q, t)
            },
            _il: function(t, i, n) {
                this._kc[i] instanceof Function && this._kc[i][Bh](this._kc, t, n),
                this._1u && this._h8(t, i, this._1u, n),
                this._$q && this._h8(t, i, this._$q, n)
            },
            _50: function(t) {
                this._1u && l(this._1u, t, this),
                this._$q && l(this._$q, t, this)
            },
            _h8: function(t, i, n, e) {
                if (!I(n)) return void this._nd4(t, i, n, e);
                for (var s = 0; s < n[qh]; s++) {
                    var h = n[s];
                    this._nd4(t, i, h, e)
                }
            },
            _nd4: function(t, i, n, e) {
                var s = n[i];
                s && s[Bh](n, t, this._kc, e)
            },
            _3o: function(t) {
                t[Ru] instanceof Function && t[Ru][Bh](t, this._kc)
            },
            _2e: function(t) {
                if (!I(t)) return void this._3o(t);
                for (var i = 0; i < t[qh]; i++) {
                    var n = t[i];
                    n && this._3o(n)
                }
            }
        },
        N(uD, ki),
        Ei[br] = {
            limitCount: 10,
            points: null,
            add: function(t, i, n) {
                var e = i[Ef] - t[Ef] || 1;
                n[xv] = e;
                var s, h;
                if (!n[Rr]) return s = i.x - t.x,
                    h = i.y - t.y,
                    n.dx = s,
                    n.dy = h,
                    void this._kj(s, h, e);
                var r = n[Rr][qh];
                if (1 == r) s = n[Rr][0][uf] - t[Rr][0][uf],
                    h = n[Rr][0][of] - t[Rr][0][of];
                else {
                    for (var f, a, _, c = [], u = [], o = 0, d = 0, l = 0, b = 0, v = 0, y = 0, g = 0, r = t[Rr][qh]; r > g; g++) {
                        f = t[Rr][g];
                        var x = f[uf],
                            w = f[of];
                        o += x,
                            d += w,
                        g && (v = Math[Ea](v, Math[Pa]((x - a) * (x - a) + (w - _) * (w - _)))),
                            a = x,
                            _ = w,
                            c[Xh]({
                                x: x,
                                y: w
                            })
                    }
                    o /= r,
                        d /= r;
                    for (var g = 0,
                             r = n[Rr][qh]; r > g; g++) {
                        f = n[Rr][g];
                        var x = f[uf],
                            w = f[of];
                        l += x,
                            b += w,
                        g && (y = Math[Ea](y, Math[Pa]((x - a) * (x - a) + (w - _) * (w - _)))),
                            a = x,
                            _ = w,
                            u[Xh]({
                                x: x,
                                y: w
                            })
                    }
                    if (l /= r, b /= r, s = l - o, h = b - d, v && y) {
                        var m = y / v;
                        n[Sf] && t[Sf] && (m = n[Sf] / t[Sf]),
                            n[Eo] = {
                                x: l,
                                y: b,
                                clientX: l,
                                clientY: b
                            },
                            n[wv] = m,
                            n[mv] = t
                    }
                }
                n.dx = s,
                    n.dy = h,
                    this._kj(s, h, e)
            },
            _kj: function(t, i, n) {
                var e = {
                    interval: n,
                    dx: t,
                    dy: i
                };
                this[Yf][zh](0, 0, e),
                this[Yf][qh] > this[jv] && this[Yf][pv]()
            },
            getCurrentSpeed: function() {
                if (!this[Yf][qh]) return null;
                for (var t = 0,
                         i = 0,
                         n = 0,
                         e = 0,
                         s = this[Yf][qh]; s > e; e++) {
                    var h = this[Yf][e],
                        r = h[xv];
                    if (r > 300) break;
                    if (t += h[xv], i += h.dx, n += h.dy, t > 500) break
                }
                return 0 == t || 0 == i && 0 == n ? null: {
                    x: i / t,
                    y: n / t
                }
            },
            clear: function() {
                this[Yf] = []
            }
        };
    var oD, dD, lD, bD;
    _B ? (oD = kv, dD = Mv, lD = Ev, bD = Sv) : cB ? (oD = Pv, dD = Iv, lD = Tv, bD = Cv) : (oD = Ov, dD = Ov, lD = bd, bD = $v);
    var vD = Fv,
        yD = Math.PI,
        gD = Math[Ta],
        xD = Math[Xr],
        wD = 1.70158,
        mD = {
            swing: function(t) {
                return - Math[Hr](t * yD) / 2 + .5
            },
            easeNone: function(t) {
                return t
            },
            easeIn: function(t) {
                return t * t
            },
            easeOut: function(t) {
                return (2 - t) * t
            },
            easeBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t: .5 * (1 - --t * (t - 2))
            },
            easeInStrong: function(t) {
                return t * t * t * t
            },
            easeOutStrong: function(t) {
                return 1 - --t * t * t * t
            },
            easeBothStrong: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t: .5 * (2 - (t -= 2) * t * t * t)
            },
            elasticIn: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t: -(gD(2, 10 * (t -= 1)) * xD(2 * (t - n) * yD / i))
            },
            elasticOut: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t: gD(2, -10 * t) * xD(2 * (t - n) * yD / i) + 1
            },
            elasticBoth: function(t) {
                var i = .45,
                    n = i / 4;
                return 0 === t || 2 === (t *= 2) ? t: 1 > t ? -.5 * gD(2, 10 * (t -= 1)) * xD(2 * (t - n) * yD / i) : gD(2, -10 * (t -= 1)) * xD(2 * (t - n) * yD / i) * .5 + 1
            },
            backIn: function(t) {
                return 1 === t && (t -= .001),
                t * t * ((wD + 1) * t - wD)
            },
            backOut: function(t) {
                return (t -= 1) * t * ((wD + 1) * t + wD) + 1
            },
            backBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * (((wD *= 1.525) + 1) * t - wD) : .5 * ((t -= 2) * t * (((wD *= 1.525) + 1) * t + wD) + 2)
            },
            bounceIn: function(t) {
                return 1 - mD[Av](1 - t)
            },
            bounceOut: function(t) {
                var i, n = 7.5625;
                return i = 1 / 2.75 > t ? n * t * t: 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceBoth: function(t) {
                return.5 > t ? .5 * mD[Nv](2 * t) : .5 * mD[Av](2 * t - 1) + .5
            }
        },
        jD = function(t) {
            this._jd = t
        };
    jD[br] = {
        _jd: null,
        _kn: function(t) {
            var i = Date[Kf]();
            this._lr();
            var n = this;
            this._requestID = requestAnimationFrame(function e() {
                var s = Date[Kf](),
                    h = s - i;
                return ! h || n._jd && n._jd(h) !== !1 ? (i = s, void(n._requestID = requestAnimationFrame(e))) : (n._lr(), void(t instanceof Function && t[Bh]()))
            })
        },
        _lr: function() {
            return this._requestID ? (t[il](this._requestID), void delete this._requestID) : !1
        },
        _e8: function() {
            return null != this._requestID
        }
    };
    var pD = function(t, i, n, e) {
        this._onStep = t,
            this._kt = i || this,
            this._42 = e,
        n && n > 0 && (this._i5 = n)
    };
    pD[br] = {
        _i5: 1e3,
        _42: null,
        _e7: 0,
        _lr: function() {
            return this._e7 = 0,
                this._nfp = 0,
                B(this, pD, qv)
        },
        _nfp: 0,
        _jd: function(t) {
            if (this._e7 += t, this._e7 >= this._i5) return this._onStep[Bh](this._kt, 1, (1 - this._nfp) * this._i5, t, this._i5),
                !1;
            var i = this._e7 / this._i5;
            return this._42 && (i = this._42(i)),
                this._onStep[Bh](this._kt, i, (i - this._nfp) * this._i5, t, this._i5) === !1 ? !1 : void(this._nfp = i)
        }
    },
        N(pD, jD);
    var kD = function(t) {
            ni(t)
        },
        MD = {
            version: Bv,
            extend: N,
            doSuperConstructor: q,
            doSuper: B,
            createFunction: L,
            setClass: p,
            appendClass: k,
            removeClass: M,
            forEach: l,
            forEachReverse: v,
            isNumber: E,
            isString: S,
            isBoolean: P,
            isArray: I,
            eventPreventDefault: T,
            eventStopPropagation: C,
            stopEvent: O,
            callLater: m,
            nextFrame: j,
            forEachChild: e,
            forEachByDepthFirst: h,
            forEachByDepthFirstReverse: a,
            forEachByBreadthFirst: u,
            randomInt: $,
            randomBool: F,
            randomColor: X,
            addEventListener: fD,
            getFirstElementChildByTagName: MB
        };
    MD[Dv] = bB,
        MD[Rv] = vB,
        MD[Fa] = ri,
        MD[zv] = fi,
        MD[$d] = TB,
        MD[Lv] = IB,
        MD[Gv] = EB,
        MD[Yv] = CB,
        MD[Hv] = zB,
        MD[Xv] = LB,
        MD[Wv] = JB,
        MD[Vv] = WB,
        MD[Uv] = VB,
        MD[Qv] = OB,
        MD[Jv] = ZB,
        MD[Zv] = iD,
        MD[Kv] = tD,
        MD[ty] = QB,
        MD[iy] = Ii,
        MD[ny] = Si,
        MD[ey] = Pi,
        MD[sy] = Mi,
        MD[hy] = SB,
        MD[ry] = pB,
        MD[fy] = ki,
        MD[ay] = function(t) {
            alert(t)
        },
        MD[_y] = function(t, i, n, e) {
            var s = prompt(t, i);
            return s != i && n ? n[Bh](e, s) : s
        },
        MD[cy] = function(t, i, n) {
            var e = confirm(t);
            return e && i ? i[Bh](n) : e
        },
        MD[uy] = li;
    var ED = {
        SELECTION_TYPE_BORDER_RECT: oy,
        SELECTION_TYPE_BORDER: dy,
        SELECTION_TYPE_SHADOW: ly,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: by,
        EDGE_TYPE_ELBOW_HORIZONTAL: vy,
        EDGE_TYPE_ELBOW_VERTICAL: yy,
        EDGE_TYPE_ORTHOGONAL: gy,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: xy,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: wy,
        EDGE_TYPE_HORIZONTAL_VERTICAL: my,
        EDGE_TYPE_VERTICAL_HORIZONTAL: jy,
        EDGE_TYPE_EXTEND_TOP: py,
        EDGE_TYPE_EXTEND_LEFT: ky,
        EDGE_TYPE_EXTEND_BOTTOM: My,
        EDGE_TYPE_EXTEND_RIGHT: Ey,
        EDGE_TYPE_ZIGZAG: Sy,
        EDGE_CORNER_NONE: Xo,
        EDGE_CORNER_ROUND: Aa,
        EDGE_CORNER_BEVEL: Py,
        GROUP_TYPE_RECT: Iy,
        GROUP_TYPE_CIRCLE: Ty,
        GROUP_TYPE_ELLIPSE: Cy,
        SHAPE_CIRCLE: Oy,
        SHAPE_RECT: Iy,
        SHAPE_ROUNDRECT: $y,
        SHAPE_STAR: Fy,
        SHAPE_TRIANGLE: Ay,
        SHAPE_HEXAGON: Ny,
        SHAPE_PENTAGON: qy,
        SHAPE_TRAPEZIUM: By,
        SHAPE_RHOMBUS: Dy,
        SHAPE_PARALLELOGRAM: Ry,
        SHAPE_HEART: zy,
        SHAPE_DIAMOND: Ly,
        SHAPE_CROSS: Gy,
        SHAPE_ARROW_STANDARD: Yy,
        SHAPE_ARROW_1: Hy,
        SHAPE_ARROW_2: Xy,
        SHAPE_ARROW_3: Wy,
        SHAPE_ARROW_4: Vy,
        SHAPE_ARROW_5: Uy,
        SHAPE_ARROW_6: Qy,
        SHAPE_ARROW_7: Jy,
        SHAPE_ARROW_8: Zy,
        SHAPE_ARROW_OPEN: Ky
    };
    ED[tg] = ig,
        ED[ng] = Aa,
        ED[eg] = sg,
        ED[hg] = Py,
        ED[rg] = Aa,
        ED[fg] = ag,
        mB[_g] = ED[cg],
        mB[ug] = 3,
        mB[og] = 2,
        mB[dg] = 7,
        mB[lg] = U(3422561023),
        mB[_g] = ED[cg],
        mB[bg] = 10,
        mB[vg] = 10,
        mB[yg] = n,
        mB[vo] = 10,
        mB[gg] = 200,
        mB[ka] = 1.2;
    var SD = t[xg] || 1;
    1 > SD && (SD = 1);
    var PD;
    MD[wg] = Bi;
    var ID = function(t, i, n, e) {
        var s = t - n,
            h = i - e;
        return s * s + h * h
    };
    nn[br] = {
        equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
        nn._jaCircle = function(t, i, n) {
            if (!n) return Ki(t, i);
            var e = ID(t.x, t.y, i.x, i.y),
                s = ID(t.x, t.y, n.x, n.y),
                h = ID(n.x, n.y, i.x, i.y);
            if (e + TD >= s + h) return Ki(t, i, 0, n);
            if (s + TD >= e + h) return Ki(t, n, 0, i);
            if (h + TD >= e + s) return Ki(i, n, 0, t);
            var r;
            Math[Ur](n.y - i.y) < 1e-4 && (r = t, t = i, i = r),
                r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * ( - t.y + n.y);
            var f = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * ( - t.y + n.y)) / (2 * r),
                a = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (f - (i.x + n.x) / 2);
            return new nn(f, a, SB(f, a, t.x, t.y), t, i, n)
        };
    var TD = .01,
        CD = {
            _nbd: function(t, i, e, s, h) {
                var r = 0,
                    f = 0,
                    a = i._iw;
                if (e = e || 0, t.x === n) {
                    var _ = t[Qr],
                        c = t[Jr],
                        u = !0;
                    switch (_) {
                        case AB:
                            u = !1;
                            break;
                        case FB:
                            r += a / 2
                    }
                    switch (c) {
                        case NB:
                            f -= e / 2;
                            break;
                        case BB:
                            f += e / 2
                    }
                } else r = t.x,
                    f = t.y,
                Math[Ur](r) > 0 && Math[Ur](r) < 1 && (r *= a);
                h && null != s && (f += s.y, r += Math[Ur](s.x) < 1 ? s.x * a: s.x);
                var o = cn[Bh](i, r, f, u);
                return o ? (h || null == s || o[mg](s), o) : {
                    x: 0,
                    y: 0
                }
            },
            _ll: function(t, i) {
                var n = i[Ya],
                    e = i[Yf];
                switch (n) {
                    case eR:
                        t[jg](e[0], e[1], e[2], e[3], i._r);
                        break;
                    case KD:
                        t[Uc](e[0], e[1]);
                        break;
                    case tR:
                        t[Qc](e[0], e[1]);
                        break;
                    case iR:
                        t[pg](e[0], e[1], e[2], e[3]);
                        break;
                    case nR:
                        t[kg](e[0], e[1], e[2], e[3], e[4], e[5]);
                        break;
                    case sR:
                        t[w_]()
                }
            },
            _5h: function(t, i, n, e) {
                var s = i[Ya];
                if (s != KD && s != sR) {
                    var h = n[Ga],
                        r = i.points;
                    switch (n[Ya] == KD && t[ir](h.x, h.y), s) {
                        case eR:
                            dn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]),
                                t[ir](r[0], r[1]),
                                t[ir](i._p1x, i._p1y),
                                t[ir](i._p2x, i._p2y),
                            i._nboundaryPoint1 && t[ir](i._nboundaryPoint1.x, i._nboundaryPoint1.y),
                            i._nboundaryPoint2 && t[ir](i._nboundaryPoint2.x, i._nboundaryPoint2.y);
                            break;
                        case tR:
                            t[ir](r[0], r[1]);
                            break;
                        case iR:
                            Hi([h.x, h.y][Lh](r), t);
                            break;
                        case nR:
                            Ui([h.x, h.y][Lh](r), t);
                            break;
                        case sR:
                            e && t[ir](e[Yf][0], e[Yf][1])
                    }
                }
            },
            _5k: function(t, i, n) {
                var e = t[Ya];
                if (e == KD) return 0;
                var s = i[Ga],
                    h = t[Yf];
                switch (e == nR && 4 == h[qh] && (e = iR), e) {
                    case tR:
                        return SB(h[0], h[1], s.x, s.y);
                    case eR:
                        return t._iw;
                    case iR:
                        var r = Xi([s.x, s.y][Lh](h));
                        return t._lf = r,
                            r(1);
                    case nR:
                        var r = Ji([s.x, s.y][Lh](h));
                        return t._lf = r,
                        r(1) || Qi([s.x, s.y][Lh](h));
                    case sR:
                        if (s && n) return t[Yf] = n[Yf],
                            SB(n[Yf][0], n[Yf][1], s.x, s.y)
                }
                return 0
            }
        },
        OD = /^data:image\/(\w+);base64,/i,
        $D = /^gif/i,
        FD = /^svg/i,
        AD = 10,
        ND = 11,
        qD = 12,
        BD = 20,
        DD = 30;
    mB[Ka] = 50,
        mB[t_] = 30,
        mB[Mg] = 1e6;
    var RD = 1,
        zD = 2,
        LD = 3;
    gn[br] = {
        _jf: 0,
        _6l: !0,
        _l4: null,
        _jb: null,
        _lj: null,
        _ly: null,
        _ndc: n,
        _9h: n,
        _6p: function() {
            return this._jf == RD
        },
        getBounds: function(t) {
            return this._ly == DD ? this._lj[Oa](t) : (this._6l && this._fb(), this)
        },
        validate: function() {
            this._6l && this._fb()
        },
        _fb: function() {
            if (this._6l = !1, this._ly == DD) return this._lj[Ca](),
                void this[I_](this._lj[$a]);
            if (this._ly == BD) return void this._9b();
            if (this._jf != RD) try {
                this._ef()
            } catch(t) {
                this._jf = LD,
                    MD[Gr](t)
            }
        },
        _5o: function() {
            this._ej(),
                this._dispatcher[Pf](),
                delete this._dispatcher
        },
        _i8: function(t) {
            this._jf = LD,
                MD[Gr](Eg + this._lj),
                this._pixels = null,
                this._jb = null,
                this._l4 = null,
            t !== !1 && this._5o()
        },
        _ef: function() {
            var t = this._lj;
            if (this._jf = RD, this._dispatcher = new VB, this._ly == qD) {
                for (var i in lR) this[i] = lR[i];
                return void Un(this._lj, this, this._dc, this._i8, this._ex)
            }
            this._l4 || (this._l4 = new Image),
                this._l4[Ro] = t,
                this._l4[fa] ? (this._l4[dc] = this._l4[lc] = null, this._84()) : (this._l4[dc] = this._84[Sg](this), this._l4[lc] = this._i8[Sg](this))
        },
        _84: function() {
            this._jf = zD;
            var t = this._l4[fa],
                i = this._l4[aa];
            if (!t || !i) return void this._i8();
            this[fa] = t,
                this[aa] = i;
            var n = this._eh();
            n[fa] = t,
                n[aa] = i,
                n.g[Pg](this._l4, 0, 0, t, i),
                this._pixels = kn(n),
                this._5o()
        },
        _9b: function() {
            var t = this._lj;
            if (! (t[Ja] instanceof Function)) return void this._i8(!1);
            var i = t[fa] || mB[gg],
                n = t[aa] || mB[gg],
                e = this._eh(),
                s = e.g;
            t[Ja](s);
            var h = s[Ra](0, 0, i, n),
                r = Mn(h[za], i, n);
            this.x = r._x,
                this.y = r._y,
                this[fa] = r._width,
                this[aa] = r._height,
                e[fa] = this[fa],
                e[aa] = this[aa],
                s[y_](h, -this.x, -this.y),
                this._pixels = r
        },
        _eh: function() {
            return this._jb || (this._jb = Bi())
        },
        _6o: function(t, i, n, e, s, h) {
            i[Ig](),
                i[Iy](0, 0, e, s),
                i[Tg] = h || Cg,
                i[Da](),
                i[Og](),
                i[$g] = Eo,
                i[Fg] = Ag,
                i[Tg] = Ng;
            var r = 6 * (i[oa][ca] || 1);
            i[pa] = qg + r + "px Verdana,helvetica,arial,sans-serif",
                i[Bg] = Dg,
                i[i_] = 1,
                i[Rg](t, e / 2 + .5, s / 2 + .5),
                i[Bg] = zg,
                i[Rg](t, e / 2 - .5, s / 2 - .5),
                i[Lg](t, e / 2, s / 2),
                i[Gg]()
        },
        draw: function(t, i, n, e, s, h) {
            if (this[fa] && this[aa]) {
                i = i || 1,
                    e = e || 1,
                    s = s || 1;
                var r = this[fa] * e,
                    f = this[aa] * s;
                if (h && n[Yg] && (t[Yg] = n[Yg], t[Hg] = (n[Hg] || 0) * i, t[Xg] = (n[Xg] || 0) * i, t[Wg] = (n[Wg] || 0) * i), this._jf == RD) return this._6o(Vg, t, i, r, f, n[Ug]);
                if (this._jf == LD) return this._6o(Qg, t, i, r, f, n[Ug]);
                if (this._ly == DD) return t[Sf](e, s),
                    void this._lj[Ja](t, i, n);
                var a = this._fl(i, e, s);
                return a ? ((this.x || this.y) && t[h_](this.x * e, this.y * s), t[Sf](e / a[Sf], s / a[Sf]), void a._ll(t, n[Ug], n[Jg])) : void this._jg(t, i, e, s, this[fa] * e, this[aa] * s)
            }
        },
        _jg: function(t, i, n, e, s, h) {
            if (this._ly == BD) return 1 != n && 1 != e && t[Sf](n, e),
                void this._lj[Ja](t);
            if (this._l4) {
                if (!uB) return void t[Pg](this._l4, 0, 0, s, h);
                var n = i * s / this[fa],
                    e = i * h / this[aa];
                t[Sf](1 / n, 1 / e),
                    t[Pg](this._l4, 0, 0, s * n, h * e)
            }
        },
        _j9: null,
        _fl: function(t, i, n) {
            if (this._ly == AD || (t *= Math[Ea](i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._fk(this._jb || this._l4, 1)),
                this._defaultCache;
            var e = this._j9[Zg] || 0;
            if (t = Math[Gh](t), e >= t) {
                for (var s = t,
                         h = this._j9[s]; ! h && ++s <= e;) h = this._j9[s];
                if (h) return h
            }
            t % 2 && t++;
            var r = this[fa] * t,
                f = this[aa] * t;
            if (r * f > mB[Mg]) return null;
            var a = Bi(r, f);
            return (this.x || this.y) && a.g[h_]( - this.x * t, -this.y * t),
                this._jg(a.g, 1, t, t, r, f),
                this._fk(a, t)
        },
        _fk: function(t, i) {
            var n = new aR(t, i);
            return this._j9[i] = n,
                this._j9[Zg] = i,
                n
        },
        _hn: function(t, i, n) {
            if (this._ly == DD) return this._lj._hn[lr](this._lj, arguments);
            if (! (this._pixels || this._l4 && this._l4._pixels)) return ! 0;
            var e = this._pixels || this._l4._pixels;
            return t -= e._j3.x,
                i -= e._j3.y,
                t = Math[Aa](t),
                i = Math[Aa](i),
                En(e, e._j3, t, i, n)
        },
        _ej: function() {
            this._dispatcher && this._dispatcher[Mr](new zB(this, Kg, tx, this._l4))
        },
        _ndg: function(t, i) {
            this._dispatcher && this._dispatcher[qd](t, i)
        },
        _6j: function(t, i) {
            this._dispatcher && this._dispatcher[yb](t, i)
        },
        _nbs: function(t) {
            this._j9 = {},
            (t || this[fa] * this[aa] > 1e5) && (this._l4 = null, this._jb = null)
        }
    },
        N(gn, TB);
    var GD = {};
    MD[Pg] = pn,
        MD[ix] = xn,
        MD[nx] = mn,
        MD[ex] = function() {
            var t = [];
            for (var i in GD) t[Xh](i);
            return t
        };
    var YD = function(t, i, n, e, s, h) {
        this[Ya] = t,
            this[sx] = i,
            this[hx] = n,
            this[Mo] = e || 0,
            this.tx = s || 0,
            this.ty = h || 0
    };
    ED[rx] = ql,
        ED[fx] = Al,
        YD[br] = {
            type: null,
            colors: null,
            positions: null,
            angle: null,
            tx: 0,
            ty: 0,
            position: OB[Yl],
            isEmpty: function() {
                return null == this[sx] || 0 == this[sx][qh]
            },
            _6v: function() {
                var t = this[sx][qh];
                if (1 == t) return [0];
                for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[Xh](n * e);
                return this[hx] || (this[hx] = i),
                    i
            },
            generatorGradient: function(t) {
                if (null == this[sx] || 0 == this[sx][qh]) return null;
                var i, n = Ri();
                if (this[Ya] == ED[fx]) {
                    var e = this[Mo];
                    e > Math.PI && (e -= Math.PI);
                    var s;
                    if (e <= Math.PI / 2) {
                        var h = Math[Yr](t[aa], t[fa]),
                            r = Math[Pa](t[fa] * t[fa] + t[aa] * t[aa]),
                            f = h - e;
                        s = Math[Hr](f) * r
                    } else {
                        var h = Math[Yr](t[fa], t[aa]),
                            r = Math[Pa](t[fa] * t[fa] + t[aa] * t[aa]),
                            f = h - (e - Math.PI / 2);
                        s = Math[Hr](f) * r
                    }
                    var a = s / 2,
                        _ = a * Math[Hr](e),
                        c = a * Math[Xr](e),
                        u = t.x + t[fa] / 2 - _,
                        o = t.y + t[aa] / 2 - c,
                        d = t.x + t[fa] / 2 + _,
                        l = t.y + t[aa] / 2 + c;
                    i = n[ax](u, o, d, l)
                } else {
                    if (! (this[Ya] = ED[rx])) return null;
                    var b = ai(this[L_], t[fa], t[aa]);
                    b.x += t.x,
                        b.y += t.y,
                    this.tx && (b.x += Math[Ur](this.tx) < 1 ? t[fa] * this.tx: this.tx),
                    this.ty && (b.y += Math[Ur](this.ty) < 1 ? t[aa] * this.ty: this.ty);
                    var v = SB(b.x, b.y, t.x, t.y);
                    v = Math.max(v, SB(b.x, b.y, t.x, t.y + t[aa])),
                        v = Math[Ea](v, SB(b.x, b.y, t.x + t[fa], t.y + t[aa])),
                        v = Math[Ea](v, SB(b.x, b.y, t.x + t[fa], t.y)),
                        i = n[_x](b.x, b.y, 0, b.x, b.y, v)
                }
                var y = this[sx],
                    g = this[hx];
                g && g[qh] == y[qh] || (g = this._6v());
                for (var x = 0,
                         w = y[qh]; w > x; x++) i[cx](g[x], y[x]);
                return i
            }
        };
    var HD = new YD(ED[fx], [U(2332033023), U(1154272460), U(1154272460), U(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        XD = new YD(ED[fx], [U(2332033023), U(1154272460), U(1154272460), U(1442840575)], [.1, .3, .7, .9], 0),
        WD = (new YD(ED[fx], [U(1154272460), U(1442840575)], [.1, .9], 0), new YD(ED[rx], [U(2298478591), U(1156509422), U(1720223880), U(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        VD = [U(0), U(4294901760), U(4294967040), U(4278255360), U(4278250239), U(4278190992), U(4294901958), U(0)],
        UD = [0, .12, .28, .45, .6, .75, .8, 1],
        QD = new YD(ED[fx], VD, UD),
        JD = new YD(ED[fx], VD, UD, Math.PI / 2),
        ZD = new YD(ED[rx], VD, UD);
    YD[ux] = HD,
        YD[ox] = XD,
        YD[dx] = WD,
        YD[lx] = QD,
        YD[bx] = JD,
        YD[vx] = ZD;
    var KD = Bl,
        tR = Al,
        iR = yx,
        nR = Nl,
        eR = gx,
        sR = xx;
    ED[wx] = KD,
        ED[mx] = tR,
        ED[jx] = iR,
        ED[px] = nR,
        ED[kx] = eR,
        ED[Mx] = sR;
    var hR = function(t, i) {
        this.id = ++sB,
            I(t) ? this[Yf] = t: (this[Ya] = t, this[Yf] = i)
    };
    hR[br] = {
        toJSON: function() {
            return {
                type: this[Ya],
                points: this[Yf]
            }
        },
        parseJSON: function(t) {
            this[Ya] = t[Ya],
                this.points = t[Yf]
        },
        points: null,
        type: tR,
        clone: function() {
            return new hR(this[Ya], y(this[Yf]))
        },
        move: function(t, i) {
            if (this[Yf]) for (var n = 0,
                                   e = this[Yf][qh]; e > n; n++) {
                var s = this[Yf][n];
                MD[Ex](s) && (this[Yf][n] += n % 2 == 0 ? t: i)
            }
        }
    },
        J(hR[br], {
            lastPoint: {
                get: function() {
                    return this[Ya] == eR ? {
                        x: this._p2x,
                        y: this._p2y
                    }: {
                        x: this[Yf][this[Yf][qh] - 2],
                        y: this[Yf][this[Yf][qh] - 1]
                    }
                }
            },
            firstPoint: {
                get: function() {
                    return {
                        x: this[Yf][0],
                        y: this[Yf][1]
                    }
                }
            }
        }),
        MD[Sx] = hR;
    var rR = 0,
        fR = function(t) {
            this[$a] = new TB,
                this._fg = t || []
        };
    fR.prototype = {
        toJSON: function() {
            var t = [];
            return this._fg[uc](function(i) {
                t[Xh](i[Px]())
            }),
                t
        },
        parseJSON: function(t) {
            var i = this._fg;
            t[uc](function(t) {
                i[Xh](new hR(t[Ya], t[Yf]))
            })
        },
        clear: function() {
            this._fg[qh] = 0,
                this[$a][Pf](),
                this._iw = 0,
                this._6l = !0
        },
        _dd: !0,
        _6m: function(t, i) {
            this._dd && 0 === this._fg[qh] && t != KD && this._fg[Xh](new hR(KD, [0, 0])),
                this._fg[Xh](new hR(t, i)),
                this._6l = !0
        },
        moveTo: function(t, i) {
            this._6m(KD, [t, i])
        },
        lineTo: function(t, i) {
            this._6m(tR, [t, i])
        },
        quadTo: function(t, i, n, e) {
            this._6m(iR, [t, i, n, e])
        },
        curveTo: function(t, i, n, e, s, h) {
            this._6m(nR, [t, i, n, e, s, h])
        },
        arcTo: function(t, i, n, e, s) {
            this._6m(eR, [t, i, n, e, s])
        },
        closePath: function() {
            this._6m(sR)
        },
        _82: function(t, i, n, e, s) {
            if (e[Ix]) {
                if (n == ED[cg]) {
                    if (!e[Tx]) return;
                    return t[Yg] = e[Ix],
                        t[Hg] = e[Tx] * i,
                        t[Xg] = (e[Cx] || 0) * i,
                        void(t[Wg] = (e[Ox] || 0) * i)
                }
                if (n == ED[$x]) {
                    if (!e[Fx]) return;
                    t[Bg] = e[Ix],
                        t[i_] = e[Fx] + (s[i_] || 0),
                        this._ll(t),
                        t[Ba]()
                }
            }
        },
        _6l: !0,
        _fg: null,
        _iw: 0,
        lineCap: ig,
        lineJoin: Aa,
        draw: function(t, i, n, e, s) {
            t[Ax] = n[Ax] || this[Ax],
                t[Nx] = n[Nx] || this[Nx],
            e && (s || (s = n), this._82(t, i, s[qx], s, n)),
            n[Bx] && (this._ll(t), t[i_] = n[i_] + 2 * (n[Dx] || 0), t[Bg] = n[Bx], t[Ba]()),
                t[i_] = 0,
                this._ll(t),
            n[Rx] && (t[Tg] = n[Ug] || n[Rx], t[Da]()),
            n[zx] && (t[Tg] = n._fillGradient || n[zx], t[Da]()),
            n[i_] && (t[i_] = n[i_], n[W_] && (t[W_] = n[W_], t[Z_] = n[Z_]), t[Bg] = n[Ug] || n[Bg], t[Ba](), t[W_] = [])
        },
        _ll: function(t) {
            t.beginPath();
            for (var i, n, e = 0,
                     s = this._fg[qh]; s > e; e++) i = this._fg[e],
                CD._ll(t, i, n),
                n = i
        },
        validate: function() {
            if (this._6l = !1, this[$a][Pf](), this._iw = 0, 0 != this._fg[qh]) for (var t, i, n = this._fg,
                                                                                         e = 1,
                                                                                         s = n[0], h = s, r = n[qh]; r > e; e++) t = n[e],
                t[Ya] == KD ? h = t: (CD._5h(this[$a], t, s, h), i = CD._5k(t, s, h), t._iw = i, this._iw += i),
                s = t
        },
        getBounds: function(t, i) {
            if (this._6l && this[Ca](), i = i || new TB, t) {
                var n = t / 2;
                i[pr](this[$a].x - n, this[$a].y - n, this[$a][fa] + t, this[$a][aa] + t)
            } else i[pr](this[$a].x, this[$a].y, this[$a][fa], this[$a][aa]);
            return i
        },
        _hn: function(t, i, n, e, s, h) {
            return _n[Bh](this, t, i, n, e, s, h)
        },
        _nbq: function() {
            return [][Lh](this._fg)
        },
        generator: function(t, i, n, e, s) {
            return an[Bh](this, t, i, n, e, s)
        },
        getLocation: function(t, i) {
            return cn[Bh](this, t, i || 0)
        }
    },
        J(fR[br], {
            length: {
                get: function() {
                    return this._6l && this[Ca](),
                        this._iw
                }
            },
            _empty: {
                get: function() {
                    return 0 == this._fg[qh]
                }
            }
        }),
        ED[u_] = Lx,
        ED[c_] = Gx,
        ED[o_] = Yx,
        ED[d_] = Hx,
        ED[l_] = Xx,
        ED[b_] = Wx,
        ED[v_] = Vx,
        mB[__] = ED[d_];
    var aR = function(t, i, n) {
        this._jb = t,
            this[Sf] = i || 1,
        t instanceof Image && (n = !1),
            this._i2 = n
    };
    aR[br] = {
        scale: 1,
        _jb: null,
        _j9: null,
        _i2: !0,
        _ll: function(t, i, n) {
            if (!i || this._i2 === !1) return void t[Pg](this._jb, 0, 0);
            this._j9 || (this._j9 = {});
            var e = i + n,
                s = this._j9[e];
            s || (s = In(this._jb, i, n), s || (this._i2 = !1), this._j9[e] = s || this._jb),
                t[Pg](s, 0, 0)
        }
    };
    var _R = function(t, i, n, e, s, h, r, f, a) {
            this._mi = $n(t, i, n, e, s, h, r, f, a)
        },
        cR = {
            server: {
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](40, 0),
                        t[Qc](40, 40),
                        t[Qc](0, 40),
                        t[w_](),
                        t[Og](),
                        t[h_](0, 0),
                        t[h_](0, 0),
                        t[Sf](1, 1),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](6.75, 3.9033, 30.5914, 27.7447);
                    i[cx](.0493, Zx),
                        i[cx](.0689, Kx),
                        i[cx](.0939, tw),
                        i[cx](.129, iw),
                        i[cx](.2266, nw),
                        i[cx](.2556, ew),
                        i[cx](.2869, sw),
                        i[cx](.3194, hw),
                        i[cx](.3525, rw),
                        i[cx](.3695, fw),
                        i[cx](.5025, aw),
                        i[cx](.9212, _w),
                        i[cx](1, cw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](25.677, 4.113),
                        t[kg](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                        t[kg](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                        t[kg](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                        t[kg](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                        t[kg](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                        t[kg](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                        t[kg](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                        t[kg](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                        t[kg](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                        t[kg](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                        t[kg](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                        t[kg](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                        t[kg](25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                        t[kg](25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = uw,
                        t[Ux](),
                        t[Uc](19.763, 6.645),
                        t[kg](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                        t[kg](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                        t[kg](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                        t[kg](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                        t[Qc](21.398, 36.253),
                        t[kg](21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                        t[kg](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                        t[kg](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                        t[kg](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                        t[Qc](4.675, 37.877),
                        t[kg](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                        t[kg](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                        t[kg](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                        t[kg](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                        t[Qc](2.924, 8.431),
                        t[kg](2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                        t[kg](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                        t[kg](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                        t[kg](4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                        t[Qc](19.763, 6.645),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = ow,
                        t[Ux](),
                        t[dw](12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = uw,
                        t[Ux](),
                        t[dw](12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                        t[w_](),
                        t[Da](),
                        t.stroke(),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = ow,
                        t[Ux](),
                        t[Uc](19.377, 17.247),
                        t[kg](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                        t[Qc](5.882, 18.108999999999998),
                        t[kg](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                        t[Qc](5.02, 11.144),
                        t[kg](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                        t[Qc](18.516, 10.281),
                        t[kg](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                        t[Qc](19.377, 17.247),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = uw,
                        t[Ux](),
                        t[Uc](18.536, 13.176),
                    t[kg](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                    t[Qc](6.479, 13.794),
                    t[kg](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                    t[Qc](5.861, 11.84),
                    t[kg](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                    t[Qc](17.918, 11.221),
                    t[kg](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                    t[Qc](18.535, 13.176),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Ig](),
                    t[Tg] = uw,
                    t[Ux](),
                    t[Uc](18.536, 16.551),
                    t[kg](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                    t[Qc](6.479, 17.168999999999997),
                    t[kg](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                    t[Qc](5.861, 15.215999999999998),
                    t[kg](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                    t[Qc](17.918, 14.596999999999998),
                    t[kg](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                    t[Qc](18.535, 16.551),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg]()
                }
            },
            exchanger2: {
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](40, 0),
                        t[Qc](40, 40),
                        t[Qc](0, 40),
                        t[w_](),
                        t[Og](),
                        t[h_](0, 0),
                        t[h_](0, 0),
                        t[Sf](1, 1),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t.restore(),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](.4102, 24.3613, 39.5898, 24.3613);
                    i[cx](0, Zx),
                        i[cx](.0788, nw),
                        i[cx](.2046, lw),
                        i[cx](.3649, bw),
                        i[cx](.5432, vw),
                        i[cx](.6798, yw),
                        i[cx](.7462, gw),
                        i[cx](.8508, xw),
                        i[cx](.98, ew),
                        i[cx](1, ww),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](.41, 16.649),
                        t[kg](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
                        t[kg](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                        t[kg](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                        t[kg](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                        t[kg](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                        t[kg](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                        t[kg](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = uw,
                        t[Ux](),
                        t[Uc](16.4, 25.185),
                        t[kg](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                        t[kg](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
                        t[kg](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                        t[kg](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                        t[kg](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                        t[kg](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                        t[kg](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                        t[kg](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                        t[kg](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                        t[kg](13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](5.21, 21.754),
                        t[Qc](8.188, 17.922),
                        t[Qc](9.53, 18.75),
                        t[Qc](15.956, 16.004),
                        t[Qc](18.547, 17.523),
                        t[Qc](12.074, 20.334),
                        t[Qc](13.464, 21.204),
                        t[Qc](5.21, 21.754),
                        t.closePath(),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](17.88, 14.61),
                        t[Qc](9.85, 13.522),
                        t[Qc](11.703, 12.757),
                        t[Qc](7.436, 10.285),
                        t[Qc](10.783, 8.942),
                        t[Qc](15.091, 11.357),
                        t[Qc](16.88, 10.614),
                        t[Qc](17.88, 14.61),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](17.88, 14.61),
                        t[Qc](9.85, 13.522),
                        t[Qc](11.703, 12.757),
                        t[Qc](7.436, 10.285),
                        t[Qc](10.783, 8.942),
                        t[Qc](15.091, 11.357),
                        t[Qc](16.88, 10.614),
                        t[Qc](17.88, 14.61),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Gg](),
                    t[Ig](),
                    t[Ig](),
                    t[Ig](),
                    t[Tg] = mw,
                    t[Ux](),
                    t[Uc](23.556, 15.339),
                    t[Qc](20.93, 13.879),
                    t[Qc](26.953, 11.304),
                    t[Qc](25.559, 10.567),
                    t[Qc](33.251, 9.909),
                    t[Qc](31.087, 13.467),
                    t[Qc](29.619, 12.703),
                    t[Qc](23.556, 15.339),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg](),
                    t[Ig](),
                    t[Ig](),
                    t[Ig](),
                    t[Tg] = mw,
                    t[Ux](),
                    t[Uc](30.028, 23.383),
                    t[Qc](24.821, 20.366),
                    t[Qc](22.915, 21.227),
                    t[Qc](21.669, 16.762),
                    t[Qc](30.189, 17.942),
                    t[Qc](28.33, 18.782),
                    t[Qc](33.579, 21.725),
                    t.lineTo(30.028, 23.383),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg](),
                    t[Ig](),
                    t[Ig](),
                    t[Tg] = mw,
                    t[Ux](),
                    t[Uc](30.028, 23.383),
                    t[Qc](24.821, 20.366),
                    t[Qc](22.915, 21.227),
                    t[Qc](21.669, 16.762),
                    t[Qc](30.189, 17.942),
                    t[Qc](28.33, 18.782),
                    t[Qc](33.579, 21.725),
                    t[Qc](30.028, 23.383),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg]()
                }
            },
            exchanger: {
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](40, 0),
                        t[Qc](40, 40),
                        t[Qc](0, 40),
                        t[w_](),
                        t[Og](),
                        t[h_](0, 0),
                        t[h_](0, 0),
                        t[Sf](1, 1),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](.2095, 20.7588, 39.4941, 20.7588);
                    i[cx](0, jw),
                        i[cx](.0788, pw),
                        i[cx](.352, kw),
                        i[cx](.6967, Mw),
                        i[cx](.8916, Ew),
                        i[cx](.9557, Sw),
                        i[cx](1, Pw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](39.449, 12.417),
                        t[Qc](39.384, 9.424),
                        t[kg](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
                        t[kg]( - .026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
                        t[kg](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
                        t[kg](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                        t[kg](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                        t[kg](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                        t[kg](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                        t[kg](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                        t[Qc](37.711, 30.316999999999997),
                        t[Qc](39.281, 16.498999999999995),
                        t[kg](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                        t[kg](39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](19.8052, 7.7949, 19.8052, 24.7632);
                    i[cx](0, Iw),
                        i[cx](.1455, Tw),
                        i[cx](.2975, Cw),
                        i[cx](.4527, Ow),
                        i[cx](.6099, $w),
                        i[cx](.7687, Fw),
                        i[cx](.9268, Aw),
                        i[cx](.9754, Nw),
                        i[cx](1, qw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](33.591, 24.763),
                        t[kg](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                        t[kg](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
                        t[kg](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                        t[kg](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                        t[kg](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                        t[kg](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                        t[kg](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                        t[kg](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                        t[kg](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                        t[kg](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                        t[kg](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                        t[kg](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                        t[kg](37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t.restore(),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](10.427, 19.292),
                        t[Qc](5.735, 16.452),
                        t[Qc](12.58, 13.8),
                        t[Qc](12.045, 15.07),
                        t[Qc](20.482, 15.072),
                        t[Qc](19.667, 17.887),
                        t[Qc](11.029, 17.851),
                        t[Qc](10.427, 19.292),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](13.041, 13.042),
                        t[Qc](8.641, 10.73),
                        t[Qc](14.82, 8.474),
                        t[Qc](14.373, 9.537),
                        t[Qc](22.102, 9.479),
                        t[Qc](21.425, 11.816),
                        t[Qc](13.54, 11.85),
                        t[Qc](13.041, 13.042),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](29.787, 16.049),
                        t[Qc](29.979, 14.704),
                        t[Qc](21.51, 14.706),
                        t[Qc](22.214, 12.147),
                        t[Qc](30.486, 12.116),
                        t[Qc](30.653, 10.926),
                        t[Qc](36.141, 13.4),
                        t[Qc](29.787, 16.049),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = mw,
                        t[Ux](),
                        t[Uc](28.775, 23.14),
                        t[Qc](29.011, 21.49),
                        t[Qc](19.668, 21.405),
                        t[Qc](20.523, 18.295),
                        t[Qc](29.613, 18.338),
                        t[Qc](29.815, 16.898),
                        t[Qc](35.832, 19.964),
                        t[Qc](28.775, 23.14),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Gg](),
                    t[Gg]()
                }
            },
            cloud: {
                draw: function(t) {
                    t[Ig](),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](90.75, 0),
                        t[Qc](90.75, 62.125),
                        t[Qc](0, 62.125),
                        t[w_](),
                        t[Og](),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t.lineJoin = ag,
                        t[Jx] = 4,
                        t[Ig]();
                    var i = t[ax](44.0054, 6.4116, 44.0054, 51.3674);
                    i[cx](0, "rgba(159, 160, 160, 0.7)"),
                        i[cx](.9726, Bw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](57.07, 20.354),
                        t[kg](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                        t[kg](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                        t[kg](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                        t[kg](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                        t[kg](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                        t[kg](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                        t[kg](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                        t[kg](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                        t[kg](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                        t[kg](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                        t[kg](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg]()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](40, 0),
                        t[Qc](40, 40),
                        t[Qc](0, 40),
                        t[w_](),
                        t[Og](),
                        t[h_](0, 0),
                        t[h_](0, 0),
                        t[Sf](1, 1),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Tg] = Dw,
                        t[Ux](),
                        t[Uc](13.948, 31.075),
                        t[Qc](25.914, 31.075),
                        t[pg](25.914, 31.075, 25.914, 31.075),
                        t[Qc](25.914, 34.862),
                        t[pg](25.914, 34.862, 25.914, 34.862),
                        t[Qc](13.948, 34.862),
                        t[pg](13.948, 34.862, 13.948, 34.862),
                        t[Qc](13.948, 31.075),
                        t[pg](13.948, 31.075, 13.948, 31.075),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](29.679, 35.972),
                        t[kg](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                        t[Qc](11.456, 37.244),
                        t[kg](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                        t[Qc](10.183, 36.136),
                        t[kg](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                        t[Qc](28.407, 34.863),
                        t[kg](29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                        t[Qc](29.678, 35.972),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](.196, 29.346),
                        t[kg](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
                        t[Qc](37.936, 31.075),
                        t[kg](38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                        t[Qc](39.665, 27.174),
                        t[Qc](.196, 27.174),
                        t[Qc](.196, 29.346),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = zw,
                        t[Ux](),
                        t[Uc](37.937, 3.884),
                        t[Qc](1.926, 3.884),
                        t[kg](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
                        t[Qc](.19699999999999984, 27.12),
                        t[Qc](39.666000000000004, 27.12),
                        t[Qc](39.666000000000004, 5.615),
                        t[kg](39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](6.9609, 2.9341, 32.9008, 28.874);
                    i[cx](0, Lw),
                        i[cx](1, Gw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](35.788, 6.39),
                        t[Qc](4.074, 6.39),
                        t[kg](3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                        t[Qc](2.702, 24.616),
                        t[Qc](37.159, 24.616),
                        t[Qc](37.159, 7.763),
                        t[kg](37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg]()
                }
            },
            group: {
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](47.75, 0),
                        t[Qc](47.75, 40),
                        t[Qc](0, 40),
                        t[w_](),
                        t[Og](),
                        t[h_](0, 0),
                        t[h_](0, 0),
                        t[Sf](1, 1),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = Dw,
                        t[Ux](),
                        t[Uc](10.447, 26.005),
                        t[Qc](18.847, 26.005),
                        t[pg](18.847, 26.005, 18.847, 26.005),
                        t[Qc](18.847, 28.663),
                        t[pg](18.847, 28.663, 18.847, 28.663),
                        t[Qc](10.447, 28.663),
                        t[pg](10.447, 28.663, 10.447, 28.663),
                        t.lineTo(10.447, 26.005),
                        t[pg](10.447, 26.005, 10.447, 26.005),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](21.491, 29.443),
                        t[kg](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                        t.lineTo(8.698, 30.338),
                        t[kg](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                        t[Qc](7.8020000000000005, 29.557000000000002),
                        t[kg](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                        t[Qc](20.597, 28.662000000000003),
                        t[kg](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                        t[Qc](21.491, 29.443),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](.789, 24.79),
                        t[kg](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                        t[Qc](27.289, 26.005),
                        t[kg](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                        t[Qc](28.504, 23.267),
                        t[Qc](.789, 23.267),
                        t[Qc](.789, 24.79),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = zw,
                        t[Ux](),
                        t[Uc](27.289, 6.912),
                        t[Qc](2.006, 6.912),
                        t[kg](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
                        t[Qc](.7889999999999997, 23.227),
                        t[Qc](28.503999999999998, 23.227),
                        t[Qc](28.503999999999998, 8.126),
                        t[kg](28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](5.54, 6.2451, 23.7529, 24.458);
                    i[cx](0, Lw),
                        i[cx](1, Gw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](25.78, 8.671),
                        t[Qc](3.514, 8.671),
                        t[kg](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                        t[Qc](2.549, 21.466),
                        t[Qc](26.743, 21.466),
                        t[Qc](26.743, 9.636),
                        t[kg](26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = Dw,
                        t[Ux](),
                        t[Uc](27.053, 33.602),
                        t[Qc](36.22, 33.602),
                        t[pg](36.22, 33.602, 36.22, 33.602),
                        t[Qc](36.22, 36.501),
                        t[pg](36.22, 36.501, 36.22, 36.501),
                        t[Qc](27.053, 36.501),
                        t[pg](27.053, 36.501, 27.053, 36.501),
                        t[Qc](27.053, 33.602),
                        t[pg](27.053, 33.602, 27.053, 33.602),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](39.104, 37.352),
                        t[kg](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                        t[Qc](25.143, 38.327),
                        t[kg](24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                        t[Qc](24.166, 37.477999999999994),
                        t[kg](24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                        t[Qc](38.131, 36.501),
                        t[kg](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                        t[Qc](39.105, 37.352),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Rw,
                        t[Ux](),
                        t[Uc](16.514, 32.275),
                        t[kg](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                        t[Qc](45.433, 33.601),
                        t[kg](46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                        t[Qc](46.758, 30.607999999999997),
                        t.lineTo(16.514, 30.607999999999997),
                        t[Qc](16.514, 32.275),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = zw,
                        t[Ux](),
                        t[Uc](45.433, 12.763),
                        t[Qc](17.839, 12.763),
                        t[kg](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                        t[Qc](16.514, 30.57),
                        t[Qc](46.757999999999996, 30.57),
                        t[Qc](46.757999999999996, 14.088),
                        t[kg](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        i = t[ax](21.6973, 12.0352, 41.5743, 31.9122),
                        i[cx](0, Lw),
                        i[cx](1, Gw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](43.785, 14.683),
                        t[Qc](19.486, 14.683),
                        t[kg](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                        t[Qc](18.433, 28.649),
                        t[Qc](44.837, 28.649),
                        t[Qc](44.837, 15.734),
                        t[kg](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Gg](),
                    t[Ig](),
                    t[Yw] = .5,
                    t[Ux](),
                    t[Uc](23.709, 36.33),
                    t[Qc](4.232, 36.33),
                    t[Qc](4.232, 27.199),
                    t[Qc](5.304, 27.199),
                    t[Qc](5.304, 35.259),
                    t[Qc](23.709, 35.259),
                    t[Qc](23.709, 36.33),
                    t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg]()
                }
            },
            subnetwork: {
                draw: function(t) {
                    t[Ig](),
                        t[h_](0, 0),
                        t[Ux](),
                        t[Uc](0, 0),
                        t[Qc](60.75, 0),
                        t[Qc](60.75, 42.125),
                        t[Qc](0, 42.125),
                        t[w_](),
                        t[Og](),
                        t[h_](0, .26859504132231393),
                        t[Sf](.6694214876033058, .6694214876033058),
                        t[h_](0, 0),
                        t[Bg] = Qx,
                        t[Ax] = ig,
                        t[Nx] = ag,
                        t[Jx] = 4,
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig]();
                    var i = t[ax](43.6724, -2.7627, 43.6724, 59.3806);
                    i[cx](0, "rgba(159, 160, 160, 0.7)"),
                        i[cx](.9726, Bw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](61.732, 16.509),
                        t[kg](61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                        t[kg](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                        t[kg](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                        t[kg](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                        t[kg](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                        t[kg](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                        t[kg](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                        t[kg](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                        t[kg](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                        t[kg](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                        t[kg](85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Tg] = Dw,
                        t[Ux](),
                        t[Uc](34.966, 44.287),
                        t[Qc](45.112, 44.287),
                        t[pg](45.112, 44.287, 45.112, 44.287),
                        t[Qc](45.112, 47.497),
                        t[pg](45.112, 47.497, 45.112, 47.497),
                        t[Qc](34.966, 47.497),
                        t[pg](34.966, 47.497, 34.966, 47.497),
                        t[Qc](34.966, 44.287),
                        t[pg](34.966, 44.287, 34.966, 44.287),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Hw,
                        t[Ux](),
                        t[Uc](48.306, 48.439),
                        t[kg](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                        t[Qc](32.854, 49.52),
                        t[kg](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                        t[Qc](31.771, 48.578),
                        t[kg](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                        t[Qc](47.226, 47.497),
                        t[kg](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                        t[Qc](48.306, 48.439),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = Xw,
                        t[Ux](),
                        t[Uc](23.302, 42.82),
                        t[kg](23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                        t[Qc](55.308, 44.287),
                        t[kg](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                        t[Qc](56.775, 40.98),
                        t[Qc](23.302, 40.98),
                        t[Qc](23.302, 42.82),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Tg] = zw,
                        t[Ux](),
                        t[Uc](55.307, 21.229),
                        t[Qc](24.771, 21.229),
                        t[kg](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                        t[Qc](23.301000000000002, 40.933),
                        t[Qc](56.774, 40.933),
                        t[Qc](56.774, 22.695),
                        t[kg](56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                        t[w_](),
                        t[Da](),
                        t[Ba](),
                        t[Gg](),
                        t[Ig](),
                        t[Ig](),
                        t[Gg](),
                        t[Ig](),
                        t[Gg](),
                        t[Gg](),
                        t[Ig](),
                        i = t[ax](29.04, 20.4219, 51.0363, 42.4181),
                        i[cx](0, Lw),
                        i[cx](1, Gw),
                        t[Tg] = i,
                        t[Ux](),
                        t[Uc](53.485, 23.353),
                        t[Qc](26.592, 23.353),
                        t[kg](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                        t[Qc](25.427, 38.807),
                        t[Qc](54.647, 38.807),
                        t[Qc](54.647, 24.517000000000003),
                        t[kg](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                        t[w_](),
                    t[Da](),
                    t[Ba](),
                    t[Gg](),
                    t[Gg](),
                    t[Gg]()
                }
            }
        };
    for (var uR in cR) xn(Ww + uR, cR[uR]);
    var oR = function() {
            this[X_] = !1;
            var t = this._fe;
            t[Pf]();
            var i = this._8a.x + this[O_] / 2,
                n = this._8a.y + this[O_] / 2,
                e = this._8a[fa] - this[O_],
                s = this._8a[aa] - this[O_],
                h = zn[Bh](this, {
                    x: i,
                    y: n
                });
            Hn(t, h.x, h.y, !0),
                h = zn[Bh](this, {
                    x: i + e,
                    y: n
                }),
                Hn(t, h.x, h.y),
                h = zn[Bh](this, {
                    x: i + e,
                    y: n + s
                }),
                Hn(t, h.x, h.y),
                h = zn[Bh](this, {
                    x: i,
                    y: n + s
                }),
                Hn(t, h.x, h.y),
            this.__mhPointer && (h = zn[Bh](this, {
                x: this._pointerX,
                y: this._pointerY
            }), Hn(t, h.x, h.y)),
            this[O_] && t[C_](this[O_] / 2)
        },
        dR = 20,
        lR = {
            _f6: !1,
            _jh: null,
            _nbw: 0,
            _l7: -1,
            _l6: null,
            _ex: function(t) {
                this._jh || (this._jh = [], this._jf = zD),
                    this._jh[Xh](t),
                    this._el(),
                    this._kn()
            },
            _kn: function() {
                if (!this._l6) {
                    var t = this;
                    this._l6 = setTimeout(function i() {
                            return t._el() !== !1 ? void(t._l6 = setTimeout(i, t._hg())) : void delete t._l6
                        },
                        this._hg())
                }
            },
            _hg: function() {
                return Math[Ea](dR, this._jh[this._l7][Vw])
            },
            _el: function() {
                return this._f7(this._l7 + 1)
            },
            _f7: function(t) {
                if (this._f6) t %= this._nbw;
                else if (t >= this._jh[qh]) return ! 1;
                if (this._l7 == t) return ! 1;
                this._l7 = t;
                var i = this._jh[this._l7],
                    n = i._nfache;
                return n || (i._nfache = n = Bi(this[fa], this[aa]), n.g[y_](i[za], 0, 0), n._pixels = i._pixels),
                    this._l4 = n,
                    this[S_] = !0,
                    this._ej()
            },
            _dc: function() {
                return this._jh ? (this._f6 = !0, this._nbw = this._jh[qh], 1 == this._nbw ? this._ej() : void this._kn()) : void this._i8()
            },
            _lr: function() {
                this._l6 && (clearTimeout(this._l6), delete this._l6)
            },
            _ej: function() {
                var t = this._dispatcher[bb];
                if (!t || !t[qh]) return ! 1;
                for (var i = new zB(this, Kg, tx, this._l4), n = 0, e = t[qh]; e > n; n++) {
                    var s = t[n];
                    s[gr]._j6 && s[gr]._j6._iaed ? (t[zh](n, 1), n--, e--) : s[Mr][Bh](s[gr], i)
                }
                return t[qh] > 0
            },
            _ndg: function(t, i) {
                this._dispatcher[qd](t, i),
                this._f6 && !this._l6 && this._kn()
            },
            _6j: function(t, i) {
                this._dispatcher[yb](t, i),
                this._dispatcher._nb1() || this._lr()
            },
            _ia: function() {
                this._lr(),
                    this._dispatcher[Pf]()
            },
            _fl: function() {
                var t = this._l4._nbufferedImage;
                return t || (this._l4._nbufferedImage = t = new aR(this._l4, 1)),
                    t
            }
        },
        bR = function(t) {
            return t[Uw](function(t, i) {
                    return 2 * t + i
                },
                0)
        },
        vR = function(t) {
            for (var i = [], n = 7; n >= 0; n--) i[Xh]( !! (t & 1 << n));
            return i
        },
        yR = function(t) {
            this[za] = t,
                this[Qw] = this[za][qh],
                this[Jw] = 0,
                this[Zw] = function() {
                    if (this[Jw] >= this[za][qh]) throw new Error("Attempted to read past end of stream.");
                    return 255 & t[yc](this[Jw]++)
                },
                this[Kw] = function(t) {
                    for (var i = [], n = 0; t > n; n++) i[Xh](this[Zw]());
                    return i
                },
                this[tm] = function(t) {
                    for (var i = "",
                             n = 0; t > n; n++) i += String.fromCharCode(this[Zw]());
                    return i
                },
                this[im] = function() {
                    var t = this[Kw](2);
                    return (t[1] << 8) + t[0]
                }
        },
        gR = function(t, i) {
            for (var n, e, s = 0,
                     h = function(t) {
                         for (var n = 0,
                                  e = 0; t > e; e++) i[yc](s >> 3) & 1 << (7 & s) && (n |= 1 << e),
                             s++;
                         return n
                     },
                     r = [], f = 1 << t, a = f + 1, _ = t + 1, c = [], u = function() {
                    c = [],
                        _ = t + 1;
                    for (var i = 0; f > i; i++) c[i] = [i];
                    c[f] = [],
                        c[a] = null
                };;) if (e = n, n = h(_), n !== f) {
                if (n === a) break;
                if (n < c[qh]) e !== f && c[Xh](c[e][Lh](c[n][0]));
                else {
                    if (n !== c[qh]) throw new Error(nm);
                    c[Xh](c[e][Lh](c[e][0]))
                }
                r[Xh][lr](r, c[n]),
                c.length === 1 << _ && 12 > _ && _++
            } else u();
            return r
        },
        xR = function(t, i) {
            i || (i = {});
            var n = function(i) {
                    for (var n = [], e = 0; i > e; e++) n[Xh](t[Kw](3));
                    return n
                },
                e = function() {
                    var i, n;
                    n = "";
                    do i = t[Zw](),
                        n += t[tm](i);
                    while (0 !== i);
                    return n
                },
                s = function() {
                    var e = {};
                    if (e[em] = t[tm](3), e[sm] = t[tm](3), hm !== e[em]) throw new Error(rm);
                    e[fa] = t[im](),
                        e[aa] = t[im]();
                    var s = vR(t[Zw]());
                    e[fm] = s[am](),
                        e[_m] = bR(s[zh](0, 3)),
                        e[cm] = s[am](),
                        e[um] = bR(s[zh](0, 3)),
                        e[om] = t[Zw](),
                        e[dm] = t[Zw](),
                    e[fm] && (e[fc] = n(1 << e[um] + 1)),
                    i[lm] && i[lm](e)
                },
                h = function(n) {
                    var s = function(n) {
                            var e = (t[Zw](), vR(t[Zw]()));
                            n[bm] = e[zh](0, 3),
                                n[sc] = bR(e[zh](0, 3)),
                                n[vm] = e[am](),
                                n[ic] = e[am](),
                                n[ec] = t[im](),
                                n[nc] = t[Zw](),
                                n[ym] = t[Zw](),
                            i[gm] && i[gm](n)
                        },
                        h = function(t) {
                            t[xm] = e(),
                            i[wm] && i[wm](t)
                        },
                        r = function(n) {
                            t[Zw](),
                                n[mm] = t[Kw](12),
                                n[jm] = e(),
                            i[pm] && i[pm](n)
                        },
                        f = function(n) {
                            var s = function(n) {
                                    t[Zw](),
                                        n[km] = t[Zw](),
                                        n[Mm] = t[im](),
                                        n[ym] = t[Zw](),
                                    i[Em] && i[Em][Sm] && i[Em][Sm](n)
                                },
                                h = function(t) {
                                    t[Pm] = e(),
                                    i.app && i[Em][t[Im]] && i[Em][t[Im]](t)
                                };
                            switch (t[Zw](), n[Im] = t[tm](8), n[Tm] = t[tm](3), n[Im]) {
                                case "NETSCAPE":
                                    s(n);
                                    break;
                                default:
                                    h(n)
                            }
                        },
                        a = function(t) {
                            t[za] = e(),
                            i[km] && i[km](t)
                        };
                    switch (n[Cm] = t[Zw](), n[Cm]) {
                        case 249:
                            n[Om] = gm,
                                s(n);
                            break;
                        case 254:
                            n[Om] = wm,
                                h(n);
                            break;
                        case 1:
                            n.extType = pm,
                                r(n);
                            break;
                        case 255:
                            n[Om] = Em,
                                f(n);
                            break;
                        default:
                            n[Om] = km,
                                a(n)
                    }
                },
                r = function(s) {
                    var h = function(t, i) {
                        for (var n = new Array(t[qh]), e = t[qh] / i, s = function(e, s) {
                                var h = t[Rh](s * i, (s + 1) * i);
                                n[zh][lr](n, [e * i, i][Lh](h))
                            },
                                 h = [0, 4, 2, 1], r = [8, 8, 4, 2], f = 0, a = 0; 4 > a; a++) for (var _ = h[a]; e > _; _ += r[a]) s(_, f),
                            f++;
                        return n
                    };
                    s[ac] = t[im](),
                        s[_c] = t[im](),
                        s[fa] = t[im](),
                        s[aa] = t[im]();
                    var r = vR(t[Zw]());
                    s[hc] = r[am](),
                        s[$m] = r[am](),
                        s[cm] = r[am](),
                        s[bm] = r[zh](0, 2),
                        s[Fm] = bR(r[zh](0, 3)),
                    s[hc] && (s[rc] = n(1 << s[Fm] + 1)),
                        s[Am] = t[Zw]();
                    var f = e();
                    s[cc] = gR(s[Am], f),
                    s[$m] && (s[cc] = h(s[cc], s[fa])),
                    i[qo] && i[qo](s)
                },
                f = function() {
                    var n = {};
                    switch (n[Nm] = t[Zw](), String[xc](n[Nm])) {
                        case "!":
                            n[Ya] = qm,
                                h(n);
                            break;
                        case ",":
                            n[Ya] = qo,
                                r(n);
                            break;
                        case ";":
                            n[Ya] = Bm,
                            i[Bm] && i[Bm](n);
                            break;
                        default:
                            throw new Error(Dm + n[Nm].toString(16))
                    }
                    Bm !== n[Ya] && setTimeout(f, 0)
                },
                a = function() {
                    s(),
                        setTimeout(f, 0)
                };
            a()
        },
        wR = "";
    i[hv] && i[hv](Rm,
        function(t) {
            if (t[zm] && t[Lm] && t[Gm] && 73 == t[Ym]) {
                var i = MD[Er] + Hm + MD[Xm] + Wm + MD[Vm] + Ma + MD[Um] + Ma + MD[Qm] + wR;
                MD[ay](i)
            }
        },
        !1);
    var mR = Jm;
    wR = Zm + decodeURIComponent(Km);
    var jR, pR, kR, MR = t,
        ER = tj,
        SR = ij,
        PR = nj,
        IR = ej,
        TR = sj,
        CR = hj,
        OR = rj,
        $R = fj,
        FR = aj,
        AR = _j,
        NR = cj,
        qR = uj,
        BR = oj,
        DR = dj,
        RR = lj,
        zR = bj,
        LR = vj,
        GR = yj,
        YR = gj,
        HR = xj,
        XR = wj,
        WR = MR[IR + mj];
    WR && (pR = MR[DR + jj][TR + pj], WR[Bh](MR, Zn, zR), WR[Bh](MR, Kn, YR), WR[Bh](MR,
        function() {
            UR && UR == mR && (hz = !1)
        },
        LR));
    var VR, UR, QR, JR = 111,
        ZR = function(t, i) {
            i || (i = kj + SR + Mj);
            try {
                kR[Bh](t, i, 6 * JR, 1 * JR)
            } catch(n) {}
        },
        KR = !0,
        tz = !0,
        iz = !0,
        nz = !0,
        ez = !0,
        sz = !0,
        hz = !0,
        rz = bB ? 200 : 1024,
        fz = function(t, i) {
            return Jn ? Jn(t, i) || "": void 0
        };
    if (i[ga]) {
        var az = i[ga](Ej);
        az[sf][Sj] = Xo,
            az[dc] = function(t) {
                var i = t[Pu][Pj],
                    n = pR;
                if ("" === n || Ij == n || Tj == n) return void this[Cj][Cj][Xb](this[Cj]);
                var e = i[Oj][xc];
                i[IR + mj](function() {
                        Qn(e) != VR && (gz[br]._j7 = null)
                    },
                    YR),
                    this[Cj][Cj][Xb](this[Cj])
            };
        var _z = i[ga](Ao);
        _z[sf][fa] = Jo,
            _z[sf][aa] = Jo,
            _z[sf][$j] = Ho,
            _z[qu](az),
            i[Od][qu](_z)
    }
    if (i[RR + Fj]) {
        var cz = i[RR + Fj](FR + Aj);
        cz[sf][Sj] = Xo,
            cz[dc] = function(t) {
                var i = Nj,
                    n = t[Pu][i + qj];
                jR = n[Bj][Kf]();
                var e = n[AR + NR + Dj + qR + Rj][BR + Ya];
                kR = e[ER + zj];
                var s = n[IR + mj];
                s[Bh](MR, ee, YR),
                    s[Bh](MR, se, HR),
                    s[Bh](MR, re, XR),
                    s[Bh](MR, fe, LR),
                    s[Bh](MR, te, GR),
                    s[Bh](MR, ne, XR),
                    s[Bh](MR, he, YR),
                    s[Bh](MR, ie, YR),
                    this[Cj][Cj][Xb](this[Cj])
            };
        var _z = i[ga](Ao);
        _z[sf][fa] = Jo,
            _z[sf][aa] = Jo,
            _z[sf][$j] = Ho,
            _z[qu](cz),
            i[Od][qu](_z)
    }
    var uz = function(t, i, n, e) {
        this[r_] = t,
            this[Ad] = i,
            this[tb] = e,
            this[Pr] = n
    };
    uz[br] = {
        propertyType: ED[Lj]
    },
        N(uz, LB);
    var oz = function(t) {
        this.id = ++sB,
            this._nf4 = {},
            this._iz = {},
        t && (this[Gj] = t)
    };
    oz[br] = {
        _iz: null,
        getStyle: function(t) {
            return this._iz[t]
        },
        setStyle: function(t, i) {
            var n = this._iz[t];
            return n === i || n && i && n[vb] && n[vb](i) ? !1 : this._nds(t, i, new uz(this, t, i, n), this._iz)
        },
        putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._iz[n] = e: this[Au](n, e)
            }
        },
        _$w: !0,
        invalidateVisibility: function(t) {
            this._$w = !0,
            t || (this instanceof lz && this[Yj]() && this[Xc](function(t) {
                t._$w = !0
            }), this._hw() && this[Ah]() && this[Vc](function(t) {
                t[Hj]()
            }))
        },
        onParentChanged: function() {
            this[Hj]()
        },
        _hw: function() {
            return ! this._4r && this instanceof yz
        },
        invalidate: function() {
            this[Mr](new zB(this, Xj, Wj))
        },
        _nf7: null,
        addUI: function(t, i) {
            if (this._nf7 || (this._nf7 = new pB), this._nf7[Tc](t.id)) return ! 1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._nf7[ir](n);
            var e = new zB(this, Xj, ir, n);
            return this[Mr](e)
        },
        removeUI: function(t) {
            if (!this._nf7) return ! 1;
            var i = this._nf7[yl](t.id);
            return i ? (this._nf7[Yh](i), void this[Mr](new zB(this, Xj, Yh, i))) : !1
        },
        toString: function() {
            return this[Gj] || this.id
        },
        type: Vj,
        _4r: !1
    },
        N(oz, ZB),
        H(oz[br], [Uj, Er, Qj]),
        J(oz[br], {
            enableSubNetwork: {
                get: function() {
                    return this._4r
                },
                set: function(t) {
                    if (this._4r != t) {
                        var i = this._4r;
                        this._4r = t,
                        this instanceof lz && this._12(),
                            this[Mr](new LB(this, Fo, t, i))
                    }
                }
            },
            bindingUIs: {
                get: function() {
                    return this._nf7
                }
            },
            styles: {
                get: function() {
                    return this._iz
                },
                set: function(t) {
                    if (this._iz != t) {
                        for (var i in this._iz) i in t || (t[i] = n);
                        this[Jj](t),
                            this._iz = t
                    }
                }
            }
        });
    var dz = function(t, i, n) {
        this.id = ++sB,
            this._nf4 = {},
            this._iz = {},
        n && (this[Gj] = n),
            this[Wc] = t,
            this[Hc] = i,
            this[Zj]()
    };
    dz[br] = {
        $uiClass: hs,
        _k2: null,
        _is: null,
        _k0: null,
        _iq: null,
        _e4: !1,
        type: Kj,
        otherNode: function(t) {
            return t == this[Nc] ? this.to: t == this.to ? this[Nc] : void 0
        },
        connect: function() {
            if (this._e4) return ! 1;
            if (!this[Wc] || !this[Hc]) return ! 1;
            if (this._e4 = !0, this[Wc] == this[Hc]) return void this[Wc]._hu(this);
            pe(this[Hc], this),
                me(this[Wc], this),
                _e(this[Wc], this, this[Hc]);
            var t = this[Fc],
                i = this[Oc];
            if (t != i) {
                var n;
                this[Wc]._dt && (ue(t, this, i), n = !0),
                this[Hc]._dt && (de(i, this, t), n = !0),
                n && _e(t, this, i)
            }
        },
        disconnect: function() {
            if (!this._e4) return ! 1;
            if (this._e4 = !1, this[Wc] == this[Hc]) return void this[Wc]._nf5(this);
            je(this[Wc], this),
                ke(this[Hc], this),
                ce(this[Wc], this, this[Hc]);
            var t = this[Fc],
                i = this[Oc];
            if (t != i) {
                var n;
                this[Wc]._dt && (oe(t, this, i), n = !0),
                this[Hc]._dt && (le(i, this, t), n = !0),
                n && ce(t, this, i)
            }
        },
        isConnected: function() {
            return this._e4
        },
        isInvalid: function() {
            return ! this[Wc] || !this[Hc]
        },
        isLooped: function() {
            return this[Wc] == this[Hc]
        },
        getEdgeBundle: function(t) {
            return t ? this._36() : this[qc]() ? this[Wc]._4w: this[Wc][$c](this[Hc])
        },
        hasEdgeBundle: function() {
            var t = this[$c](!0);
            return t && t[tp][qh] > 1
        },
        _36: function() {
            var t = this[Fc],
                i = this[Oc];
            return t == i ? this[Wc]._dt || this[Hc]._dt ? null: this[Wc]._4w: this[Fc][$c](this[Oc])
        },
        _9r: null,
        hasPathSegments: function() {
            return this._9r && !this._9r[H_]()
        },
        isBundleEnabled: function() {
            return this[ip] && !this[go]()
        },
        firePathChange: function(t) {
            this[Mr](new LB(this, np, t))
        },
        addPathSegement: function(t, i, n) {
            var e = new hR(i || tR, t);
            this._9r || (this._9r = new pB),
                this._9r[ir](e, n),
                this[ep](e)
        },
        removePathSegementByIndex: function(t) {
            if (!this._9r) return ! 1;
            var i = this._9r[bl](t);
            i && (this._9r[Yh](i), this[ep](i))
        },
        removePathSegement: function(t) {
            return this._9r ? (this._9r[Yh](t), void this[ep](t)) : !1
        },
        movePathSegment: function(t, i, n) {
            if (!this._9r) return ! 1;
            if (t = t || 0, i = i || 0, MD[Ex](n)) {
                var e = this._9r[bl](n);
                return e ? (e[$v](t, i), void this[ep]()) : !1
            }
            l(function(n) {
                n[$v](t, i)
            }),
                this[ep]()
        }
    },
        N(dz, oz),
        J(dz[br], {
            pathSegments: {
                get: function() {
                    return this._9r
                },
                set: function(t) {
                    this._9r = t,
                        this[ep]()
                }
            },
            from: {
                get: function() {
                    return this[Wc]
                },
                set: function(t) {
                    if (this.$from != t) {
                        var i = new LB(this, Nc, t, this[Wc]);
                        this[kr](i) !== !1 && (this[Yb](), this[Wc] = t, this[Zj](), this[Mr](i))
                    }
                }
            },
            to: {
                get: function() {
                    return this[Hc]
                },
                set: function(t) {
                    if (this[Hc] != t) {
                        var i = new LB(this, sp, t, this[Hc]);
                        this[kr](i) !== !1 && (this[Yb](), this[Hc] = t, this[Zj](), this[Mr](i))
                    }
                }
            },
            fromAgent: {
                get: function() {
                    return this[Wc] ? this[Wc]._dt || this[Wc] : null
                }
            },
            toAgent: {
                get: function() {
                    return this[Hc] ? this[Hc]._dt || this[Hc] : null
                }
            }
        }),
        H(dz[br], [po, {
            name: ip,
            value: !0
        },
            Mo]);
    var lz = function(t, i, n) {
        this.id = ++sB,
            this._nf4 = {},
            this._iz = {},
        t && (this[Gj] = t),
            this[Mu] = hp,
            this[A_] = OB[Yl],
            this[rp] = {
                x: i || 0,
                y: n || 0
            },
            this._linkedNodes = {}
    };
    lz[br] = {
        $uiClass: rs,
        _dt: null,
        forEachEdge: function(t, i, n) {
            return ! n && this._k8 && this._k8[uc](t, i) === !1 ? !1 : Ee(this, t, i)
        },
        forEachOutEdge: function(t, i) {
            return Se(this, t, i)
        },
        forEachInEdge: function(t, i) {
            return Pe(this, t, i)
        },
        getEdges: function() {
            var t = [];
            return this[Xc](function(i) {
                t[Xh](i)
            }),
                t
        },
        _hq: null,
        _f9: null,
        _ix: null,
        _hs: null,
        _ndt: 0,
        _9f: 0,
        hasInEdge: function() {
            return null != this._hq
        },
        hasOutEdge: function() {
            return null != this._f9
        },
        hasEdge: function() {
            return null != this._hq || null != this._f9 || this[fp]()
        },
        linkedWith: function(t) {
            return t[Nc] == this || t.to == this || t[Fc] == this || t[Oc] == this
        },
        hasEdgeWith: function(t) {
            var i = this[$c](t);
            return i && i[tp][qh] > 0
        },
        _k8: null,
        _4w: null,
        hasLoops: function() {
            return this._k8 && this._k8[qh] > 0
        },
        _hu: function(t) {
            return this._k8 || (this._k8 = new pB, this._4w = new CL(this, this, this._k8)),
                this._4w._i0(t)
        },
        _nf5: function(t) {
            return this._4w ? this._4w._nfr(t) : void 0
        },
        getEdgeBundle: function(t) {
            return t == this ? this._4w: this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },
        _7g: function() {
            return this._97 && this._97[qh]
        },
        _5c: function() {
            return this._81 && this._81[qh]
        },
        _93: function() {
            return this._7g() || this._5c()
        },
        _81: null,
        _97: null,
        _nbv: function() {
            var t = this._dt,
                i = ae(this);
            if (t != i) {
                var n = Me(this);
                this._9k(i),
                    n[uc](function(t) {
                            var i = t[Fc],
                                n = t[Oc],
                                t = t[ku],
                                e = t[Wc]._dt,
                                s = t[Hc]._dt;
                            i != n && (i && oe(i, t, n || t[Hc]), n && le(n, t, i || t[Wc])),
                            e != s && (e && ue(e, t, s || t[Hc]), s && de(s, t, e || t[Wc]), _e(e || t[Wc], t, s || t[Hc]))
                        },
                        this)
            }
        },
        onParentChanged: function() {
            this[Hj](),
                this._nbv()
        },
        _85: null,
        _12: function() {
            var t;
            if (this._4r ? t = null: (t = this._dt, t || this._fx !== !1 || (t = this)), this._85 == t) return ! 1;
            if (this._85 = t, this._f3 && this._f3._j2[qh]) for (var i, n = this._f3._j2,
                                                                     e = 0,
                                                                     s = n[qh]; s > e; e++) i = n[e],
            i instanceof lz && i._9k(t)
        },
        setLocation: function(t, i) {
            if (this[rp] && this[rp].x == t && this[rp].y == i) return ! 1;
            var n = new LB(this, ap, this[rp], {
                x: t,
                y: i
            });
            return this[kr](n) === !1 ? !1 : (this[rp] ? (this[rp].x = t, this[rp].y = i) : this[rp] = new EB(t, i), this[Mr](n), !0)
        },
        _dj: null,
        addFollower: function(t) {
            return null == t ? !1 : t[_p] = this
        },
        removeFollower: function(t) {
            return this._dj && this._dj[Po](t) ? t[_p] = null: !1
        },
        hasFollowers: function() {
            return this._dj && !this._dj[H_]()
        },
        toFollowers: function() {
            return this[Dc]() ? this._dj[xo]() : null
        },
        clearFollowers: function() {
            this[Dc]() && (this[cp](), l(this[cp](),
                function(t) {
                    t[_p] = null
                }))
        },
        getFollowerIndex: function(t) {
            return this._dj && this._dj[Po](t) ? this._dj[Wh](t) : -1
        },
        setFollowerIndex: function(t, i) {
            return this._dj && this._dj[Po](t) ? void this._dj[Yc](t, i) : -1
        },
        getFollowerCount: function() {
            return null == !this._dj ? 0 : this._dj[qh]
        },
        _99: function() {
            return this._dj ? this._dj: (this._dj = new pB, this._dj)
        },
        isFollow: function(t) {
            if (!t || !this._host) return ! 1;
            for (var i = this._host; i;) {
                if (i == t) return ! 0;
                i = i._host
            }
            return ! 1
        },
        _9k: function(t) {
            return t == this._dt ? !1 : (this._dt = t, this[Hj](), void this._12())
        },
        type: up
    },
        N(lz, oz),
        J(lz[br], {
            loops: {
                get: function() {
                    return this._k8
                }
            },
            edgeCount: {
                get: function() {
                    return this._ndt + this._9f
                }
            },
            agentNode: {
                get: function() {
                    return this._dt || this
                }
            },
            host: {
                set: function(t) {
                    if (this == t || t == this._host) return ! 1;
                    var i = new LB(this, _p, this._host, t);
                    if (!1 === this[kr](i)) return ! 1;
                    var n = null,
                        e = null,
                        s = this._host;
                    if (null != t && (n = new LB(t, op, null, this), !1 === t[kr](n))) return ! 1;
                    if (null != s && (e = new LB(s, dp, null, this), !1 === s[kr](e))) return ! 1;
                    if (this._host = t, null != t) {
                        var h = t._99();
                        h[ir](this)
                    }
                    if (null != s) {
                        var h = s._99();
                        h[Yh](this)
                    }
                    return this[Mr](i),
                    null != t && t[Mr](n),
                    null != s && s[Mr](e),
                        !0
                },
                get: function() {
                    return this._host
                }
            }
        }),
        H(lz[br], [ap, lp, Kg, Ha, bp]),
        J(lz[br], {
            x: {
                get: function() {
                    return this[ap].x
                },
                set: function(t) {
                    t != this[ap].x && (this[ap] = new EB(t, this[ap].y))
                }
            },
            y: {
                get: function() {
                    return this[ap].y
                },
                set: function(t) {
                    t != this[ap].y && (this[ap] = new EB(this[ap].x, t))
                }
            }
        });
    var bz = function(t, i) {
        t instanceof fR && (i = t, t = n),
            q(this, bz, [t]),
            this[vp] = i || new fR,
            this[Kg] = this[vp],
            this[bp] = null,
            this[Uj] = nh,
        mB[yp] || (mB[yp] = {},
            mB[yp][wz[gp]] = !1),
            this[Jj](mB[yp])
    };
    bz[br] = {
        $uiClass: nh,
        type: xp,
        moveTo: function(t, i) {
            this[wp][Uc](t, i),
                this[ep]()
        },
        lineTo: function(t, i) {
            this[wp][Qc](t, i),
                this[ep]()
        },
        quadTo: function(t, i, n, e) {
            this[wp][Jc](t, i, n, e),
                this[ep]()
        },
        curveTo: function(t, i, n, e, s, h) {
            this[wp][Zc](t, i, n, e, s, h),
                this[ep]()
        },
        arcTo: function(t, i, n, e, s) {
            this[wp][jg](t, i, n, e, s),
                this[ep]()
        },
        closePath: function() {
            this[wp][w_](),
                this[ep]()
        },
        clear: function() {
            this[wp][Pf](),
                this[ep]()
        },
        firePathChange: function() {
            this[wp]._6l = !0,
                this[Mr](new LB(this, np))
        }
    },
        N(bz, lz),
        H(bz[br], [wp]),
        J(bz[br], {
            pathSegments: {
                get: function() {
                    return this[wp]._fg
                }
            },
            length: {
                get: function() {
                    return this[wp][qh]
                }
            }
        }),
        MD[mp] = bz;
    var vz = {
        _jl: {},
        register: function(t, i) {
            vz._jl[t] = i
        },
        getShape: function(t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0),
            s || (s = 50),
            h || (h = 50);
            var f = vz._jl[t];
            return f ? f[jp] instanceof Function ? f[jp](i, e, s, h, r) : f: void 0
        },
        getRect: function(t, i, n, e, s, h, r) {
            return Ie(r || new fR, t, i, n, e, s, h)
        },
        getAllShapes: function(t, i, n, e, s) {
            var h = {};
            for (var r in vz._jl) {
                var f = vz[yo](r, t, i, n, e, s);
                f && (h[r] = f)
            }
            return h
        },
        createRegularShape: function(t, i, n, e, s) {
            return Ne(t, i, n, e, s)
        }
    };
    Ue(),
        Qe[br] = {
            type: pp
        },
        N(Qe, bz),
        MD[kp] = Qe,
        Je[br] = {
            _ga: function(t) {
                var i, n = t._j6;
                i = n ? n._f3: this[Gb];
                var e = i[Wh](t);
                if (0 > e) throw new Error(Wb + t + "' not exist in the box");
                for (; e >= 0;) {
                    if (0 == e) return n instanceof lz ? n: null;
                    e -= 1;
                    var h = i[bl](e);
                    if (h = s(h)) return h
                }
                return null
            },
            forEachNode: function(t, i) {
                this[uc](function(n) {
                    return n instanceof lz && t[Bh](i, n) === !1 ? !1 : void 0
                })
            },
            _4d: null
        },
        N(Je, tD),
        J(Je[br], {
            propertyChangeDispatcher: {
                get: function() {
                    return this._$u
                }
            },
            randomNode: {
                get: function() {
                    return this._kcModel[Mp]
                }
            },
            currentSubNetwork: {
                get: function() {
                    return this._4d
                },
                set: function(t) {
                    if (t && !t[Fo] && (t = null), this._4d != t) {
                        var i = this._4d;
                        this._4d = t,
                            this._$u[Mr](new LB(this, Ep, t, i))
                    }
                }
            }
        }),
        mB[Sp] = ED[Pp],
        mB[Ip] = 5,
        mB[Tp] = !0,
        mB[Cp] = {
            width: 60,
            height: 60
        };
    var yz = function(t, i, e) {
        q(this, yz, arguments),
        (i === n || e === n) && (this[rp][Op] = !0),
            this[$p] = mB[Sp],
            this[T_] = mB[Ip],
            this[Mu] = cR[Fp],
            this[Ap] = mB[Cp],
            this[Np] = mB[Tp]
    };
    yz[br] = {
        type: qp,
        $uiClass: Js,
        _9u: function() {
            return ! this._fx && !this._dt
        },
        forEachOutEdge: function(t, i, n) {
            return Se(this, t, i) === !1 ? !1 : !n && this._9u() && this._81 ? this._81[uc](t, i) : void 0
        },
        forEachInEdge: function(t, i, n) {
            return Pe(this, t, i) === !1 ? !1 : !n && this._9u() && this._97 ? this._97[uc](t, i) : void 0
        },
        forEachEdge: function(t, i, n) {
            return B(this, yz, Xc, arguments) === !1 ? !1 : n || n || !this._9u() ? void 0 : this._97 && this._97[uc](t, i) === !1 ? !1 : this._81 ? this._81[uc](t, i) : void 0
        },
        hasInEdge: function(t) {
            return t ? null != this._hq: null != this._hq || this._7g()
        },
        hasOutEdge: function(t) {
            return t ? null != this._f9: null != this._f9 || this._5c()
        },
        hasEdge: function(t) {
            return t ? null != this._hq || null != this._f9: null != this._hq || null != this._f9 || this._93()
        }
    },
        N(yz, lz),
        J(yz[br], {
            expanded: {
                get: function() {
                    return this._fx
                },
                set: function(t) {
                    if (this._fx != t) {
                        var i = new LB(this, Np, t, this._fx);
                        this[kr](i) !== !1 && (this._fx = t, this._12(), this[Mr](i), this._dt || Ze[Bh](this))
                    }
                }
            }
        }),
        H(yz[br], [Bp, Dp, s_, Rp]),
        MD[zp] = yz,
        Ke[br][Ya] = Lp,
        N(Ke, lz),
        MD[Gp] = Ke;
    var gz = function(t) {
        this._j3 = new TB,
            this._8a = new TB,
            this._fe = new TB,
            this.id = ++sB,
        t && (this[za] = t)
    };
    gz[br] = {
        invalidate: function() {
            this[Yp]()
        },
        _1r: !0,
        _j3: null,
        _8a: null,
        _fe: null,
        _ndb: !1,
        _j4: 1,
        _j5: 1,
        _hk: !0,
        _87: 0,
        _6t: 0,
        _j6: null,
        _nd9: null,
        borderColor: Hp,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1g: function() {
            this[Xp] = ai(this[bp], this._87, this._6t)
        },
        setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[aa], t = t[fa]),
                this._j3[fa] == t && this._j3[aa] == i && this._j3.x == n && this._j3.y == e ? !1 : void this._j3[pr](n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function() {},
        measure: function() {},
        draw: function() {},
        _82: function(t, i, n) {
            n.selectionType == ED[cg] ? (t[Yg] = n[Ix], t[Hg] = n[Tx] * i, t[Xg] = (n[Cx] || 0) * i, t[Wg] = (n[Ox] || 0) * i) : this._2l(t, i, n)
        },
        _2l: function(t, i, n) {
            var e = n[Fx] || 0;
            n[Wp] && (t[Tg] = n[Wp], t[Vp](this._8a.x - e / 2, this._8a.y - e / 2, this._8a[fa] + e, this._8a[aa] + e)),
                t[Bg] = n[Ix],
                t[i_] = e,
                t[Up](this._8a.x - e / 2, this._8a.y - e / 2, this._8a[fa] + e, this._8a[aa] + e)
        },
        _j7: function(t, i, n, e) {
            if (!this._hk) return ! 1;
            if (this[Qp] || (n = this[Jp]), (n && !this[Zp] || !e) && (e = this), t[Ig](), t[h_](this.$x, this.$y), this[M_] && this[E_] && t[Ha](this[E_]), (this[Kp] || this[tk]) && t[h_](this[Kp], this[tk]), this[j_] && t[Ha](this[j_]), this[m_] && this._nd9 && t[h_]( - this._nd9.x, -this._nd9.y), this[Yg] && (t[Yg] = this[Yg], t[Hg] = this[Hg] * i, t[Xg] = this[Xg] * i, t[Wg] = this[Wg] * i), n && e[qx] == ED[ik] && (this._2l(t, i, e), n = !1), this._$t() && this._moShape && !this._moShape._empty) {
                this._moShape[Ca]();
                var s = {
                    lineWidth: this[O_],
                    strokeStyle: this[nk],
                    lineDash: this[ek],
                    lineDashOffset: this[sk],
                    fillColor: this[hk],
                    fillGradient: this._nbackgroundGradient,
                    lineCap: ig,
                    lineJoin: Aa
                };
                this._moShape[Ja](t, i, s, n, e),
                    n = !1,
                    t[Yg] = Qx
            }
            t[Ux](),
                this[Ja](t, i, n, e),
                t[Gg]()
        },
        invalidateData: function() {
            this[rk] = !0,
                this._1r = !0
        },
        invalidateSize: function() {
            this[S_] = !0,
                this._1r = !0
        },
        invalidateRender: function() {
            this._1r = !0
        },
        _5d: function() {},
        _$t: function() {
            return this[hk] || this[fk] || this[O_]
        },
        _4l: function() {
            return this[hk] || this[fk]
        },
        doValidate: function() {
            return this[rk] && (this[rk] = !1, this[ak]() !== !1 && (this[S_] = !0)),
            this[S_] && this[_k] && this[_k](),
                Gn[Bh](this) ? (this[X_] = !0, this[ck] && this[ck](), !0) : this[uk] ? (this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function() {
            var t = this._hk;
            return this[ok] && (this[ok] = !1, this._hk = this[dk], !this._hk || (this[Y_] || this[lk]) && this._5d() !== !1 || (this._hk = !1), !this._hk) ? t: this._hk ? (this._1r = !1, this._ndb || (this[bk](), this._ndb = !0), this[vk]()) : t
        },
        _hn: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fe[Fa](t, i, n)) return ! 1;
            var s = Ln[Bh](this, {
                x: t,
                y: i
            });
            return t = s.x,
                i = s.y,
                !e && this._$t() && this._moShape && this._moShape._hn(t, i, n, !1, this[O_], this[hk] || this[fk]) ? !0 : this._dq ? this._dq(t, i, n) : this._j3[Fa](t, i, n)
        },
        onDataChanged: function() {
            this[rk] = !0,
                this._1r = !0,
                this[ok] = !0
        },
        getBounds: function() {
            var t = this._fe[Hh]();
            return t[mg](this.x, this.y),
            this[Cc] && (this[Cc][Ha] && $i(t, this[Cc][Ha], t), t[mg](this[Cc].x || 0, this[Cc].y || 0)),
                t
        },
        destroy: function() {
            this._iaed = !0
        },
        _dy: !1
    },
        J(gz[br], {
            data: {
                get: function() {
                    return this[Y_]
                },
                set: function(t) {
                    if (this[Y_] != t) {
                        var i = this[Y_];
                        this[Y_] = t,
                            this[yk](t, i)
                    }
                }
            },
            parent: {
                get: function() {
                    return this._j6
                }
            },
            showOnTop: {
                get: function() {
                    return this._dy
                },
                set: function(t) {
                    t != this._dy && (this._dy = t, this._1r = !0, this._j6 && this._j6._ndf && this._j6._ndf(this))
                }
            }
        }),
        is(gz[br], {
            visible: {
                value: !0,
                validateFlags: [gk]
            },
            showEmpty: {
                validateFlags: [gk]
            },
            anchorPosition: {
                value: OB[Yl],
                validateFlags: [xk]
            },
            position: {
                value: OB[Yl],
                validateFlags: [wk]
            },
            offsetX: {
                value: 0,
                validateFlags: [wk]
            },
            offsetY: {
                value: 0,
                validateFlags: [wk]
            },
            layoutByAnchorPoint: {
                value: !0,
                validateFlags: [Lv, xk]
            },
            padding: {
                value: 0,
                validateFlags: [Lv]
            },
            border: {
                value: 0,
                validateFlags: [Lv]
            },
            borderRadius: {
                value: mB[bg]
            },
            showPointer: {
                value: !1,
                validateFlags: [Lv]
            },
            pointerX: {
                value: 0,
                validateFlags: [Lv]
            },
            pointerY: {
                value: 0,
                validateFlags: [Lv]
            },
            pointerWidth: {
                value: mB[vg]
            },
            backgroundColor: {
                validateFlags: [Lv]
            },
            backgroundGradient: {
                validateFlags: [Lv, mk]
            },
            selected: {
                value: !1,
                validateFlags: [Lv]
            },
            selectionBorder: {
                value: mB[og],
                validateFlags: [Lv]
            },
            selectionShadowBlur: {
                value: mB[dg],
                validateFlags: [Lv]
            },
            selectionColor: {
                value: mB[lg],
                validateFlags: [Lv]
            },
            selectionType: {
                value: mB[_g],
                validateFlags: [Lv]
            },
            selectionShadowOffsetX: {
                value: 0,
                validateFlags: [Lv]
            },
            selectionShadowOffsetY: {
                value: 0,
                validateFlags: [Lv]
            },
            shadowBlur: {
                value: 0,
                validateFlags: [Lv]
            },
            shadowColor: {
                validateFlags: [Lv]
            },
            shadowOffsetX: {
                value: 0,
                validateFlags: [Lv]
            },
            shadowOffsetY: {
                value: 0,
                validateFlags: [Lv]
            },
            renderColorBlendMode: {},
            renderColor: {},
            x: {
                value: 0,
                validateFlags: [wk]
            },
            y: {
                value: 0,
                validateFlags: [wk]
            },
            rotatable: {
                value: !0,
                validateFlags: [jk, Lv]
            },
            rotate: {
                value: 0,
                validateFlags: [jk, Lv]
            },
            _hostRotate: {
                validateFlags: [jk]
            },
            lineWidth: {
                value: 0,
                validateFlags: [Jv]
            }
        });
    var xz = [ED[$u], ED[Lj], ED[Fu]];
    es[br] = {
        removeBinding: function(t) {
            for (var i = xz[qh]; --i >= 0;) {
                var n = xz[i],
                    e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array[hr](h) ? (b(h,
                        function(i) {
                            return i[Pu] == t
                        },
                        this), h[qh] || delete e[s]) : h[Pu] == t && delete e[s]
                }
            }
        },
        _2i: function(t, i, n) {
            if (!n && (n = this[i[Pb] || ED[$u]], !n)) return ! 1;
            var e = n[t];
            e ? (Array[hr](e) || (n[t] = e = [e]), e[Xh](i)) : n[t] = i
        },
        _31: function(t, i, n, e, s, h) {
            t = t || ED[$u];
            var r = this[t];
            if (!r) return ! 1;
            var f = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: h
            };
            this._2i(i, f, r)
        },
        onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || ED[$u]];
            if (!s) return ! 1;
            var h = s[i];
            return h ? (t._1r = !0, ns(t, h, n, e), !0) : !1
        },
        initBindingProperties: function(t, i) {
            for (var e = xz[qh]; --e >= 0;) {
                var s = xz[e],
                    h = this[s];
                for (var r in h) {
                    var f = h[r];
                    if (f[Cu]) {
                        var a = f[Pu];
                        if (a) {
                            if (! (a instanceof gz || (a = t[a]))) continue
                        } else a = t;
                        var _;
                        _ = i === !1 ? t[Iu](f[Tu], s) : s == ED[Lj] ? t[jo][Lu](t[Y_], f[Tu]) : t[Y_][f[Tu]],
                        _ !== n && (a[f[Cu]] = _)
                    }
                }
            }
        }
    };
    var wz = {};
    wz[lg] = pk,
        wz[og] = kk,
        wz[dg] = "selection.shadow.blur",
        wz[Mk] = "selection.shadow.offset.x",
        wz[Ek] = "selection.shadow.offset.y",
        wz.SELECTION_TYPE = Sk,
        wz[Pk] = Ik,
        wz[Tk] = "render.color.blend.mode",
        wz[Ck] = Ok,
        wz[$k] = Fk,
        wz[Ak] = Nk,
        wz[qk] = Bk,
        wz[Dk] = Rk,
        wz[zk] = Lk,
        wz[Gk] = Yk,
        wz[Hk] = "shape.line.dash.offset",
        wz[Xk] = Wk,
        wz[Vk] = Uk,
        wz[Qk] = Jk,
        wz[Zk] = Kk,
        wz[tM] = iM,
        wz[nM] = eM,
        wz[sM] = hM,
        wz[rM] = fM,
        wz[aM] = _M,
        wz[cM] = uM,
        wz[oM] = dM,
        wz[lM] = bM,
        wz[vM] = "border.line.dash.offset",
        wz[bg] = yM,
        wz[gM] = s_,
        wz[xM] = "image.background.color",
        wz[wM] = "image.background.gradient",
        wz[mM] = jM,
        wz[pM] = wz[kM] = MM,
        wz[EM] = "image.border.line.dash",
        wz[SM] = "image.border.line.dash.offset",
        wz[PM] = wz[IM] = TM,
        wz[CM] = OM,
        wz[$M] = FM,
        wz[AM] = NM,
        wz[qM] = "label.anchor.position",
        wz[BM] = DM,
        wz[RM] = zM,
        wz[LM] = GM,
        wz[YM] = HM,
        wz[XM] = WM,
        wz[VM] = UM,
        wz[QM] = JM,
        wz[ZM] = KM,
        wz[tE] = iE,
        wz[nE] = eE,
        wz[sE] = hE,
        wz[rE] = fE,
        wz[aE] = _E,
        wz[cE] = uE,
        wz[oE] = "label.background.color",
        wz[dE] = "label.background.gradient",
        wz[lE] = bE,
        wz[vE] = yE,
        wz.LABEL_SHADOW_COLOR = gE,
        wz[xE] = "label.shadow.offset.x",
        wz[wE] = "label.shadow.offset.y",
        wz[mE] = jE,
        wz[pE] = "group.background.color",
        wz[kE] = "group.background.gradient",
        wz[ME] = EE,
        wz[SE] = PE,
        wz[IE] = "group.stroke.line.dash",
        wz[TE] = "group.stroke.line.dash.offset",
        wz[CE] = "edge.bundle.label.rotate",
        wz[OE] = "edge.bundle.label.position",
        wz[$E] = "edge.bundle.label.anchor.position",
        wz[FE] = "edge.bundle.label.color",
        wz[AE] = "edge.bundle.label.font.size",
        wz[NE] = "edge.bundle.label.font.family",
        wz[qE] = "edge.bundle.label.font.style",
        wz[BE] = "edge.bundle.label.padding",
        wz[DE] = "edge.bundle.label.pointer.width",
        wz[RE] = "edge.bundle.label.pointer",
        wz[zE] = "edge.bundle.label.radius",
        wz[LE] = "edge.bundle.label.offset.x",
        wz[GE] = "edge.bundle.label.offset.y",
        wz[YE] = "edge.bundle.label.border",
        wz[HE] = "edge.bundle.label.border.color",
        wz[XE] = "edge.bundle.label.background.color",
        wz[WE] = "edge.bundle.label.background.gradient",
        wz[VE] = "edge.bundle.label.rotatable",
        wz[UE] = QE,
        wz[JE] = ZE,
        wz[KE] = tS,
        wz[iS] = nS,
        wz[eS] = sS,
        wz[hS] = "edge.line.dash.offset",
        wz[rS] = fS,
        wz[aS] = _S,
        wz[cS] = uS,
        wz[To] = oS,
        wz[Gu] = dS,
        wz[uo] = lS,
        wz[no] = "edge.split.by.percent",
    wz[Yu] = bS,
    wz[Hu] = vS,
    wz[ro] = yS,
    wz[ao] = gS,
    wz[xS] = wS,
    wz[mS] = jS,
    wz[pS] = kS,
    wz[MS] = ES,
    wz[SS] = "arrow.from.stroke.style",
    wz[PS] = IS,
    wz[TS] = "arrow.from.outline.style",
    wz[CS] = OS,
    wz[$S] = "arrow.from.line.dash.offset",
    wz[FS] = "arrow.from.fill.color",
    wz[AS] = "arrow.from.fill.gradient",
    wz[NS] = qS,
    wz[BS] = DS,
    wz[gp] = RS,
    wz[zS] = LS,
    wz[GS] = YS,
    wz[HS] = XS,
    wz[WS] = "arrow.to.stroke.style",
    wz[VS] = US,
    wz[QS] = "arrow.to.outline.style",
    wz[JS] = ZS,
    wz[KS] = "arrow.to.line.dash.offset",
    wz[tP] = iP,
    wz[nP] = "arrow.to.fill.gradient",
    wz[eP] = sP,
    wz[hP] = rP;
    var mz = new es,
        jz = ED[$u],
        pz = ED[Lj],
        kz = !1;
    mz._31(pz, wz[_g], null, qx),
        mz._31(pz, wz[og], null, Fx),
        mz._31(pz, wz[dg], null, Tx),
        mz._31(pz, wz[lg], null, Ix),
        mz._31(pz, wz[Mk], null, "selectionShadowOffsetX"),
        mz._31(pz, wz[Ek], null, "selectionShadowOffsetY"),
        mz._31(jz, Er, Cm, za),
        mz._31(pz, wz[AM], Cm, L_),
        mz._31(pz, wz[qM], Cm, bp),
        mz._31(pz, wz[BM], Cm, fP),
        mz._31(pz, wz[RM], Cm, xd),
        mz._31(pz, wz[aE], Cm, dy),
        mz._31(pz, wz[cE], Cm, nk),
        mz._31(pz, wz[oE], Cm, aP),
        mz._31(pz, wz[mE], Cm, _P),
    kz || (mz._31(pz, wz[Ck], null, Hg), mz._31(pz, wz[$k], null, Yg), mz._31(pz, wz[Ak], null, Xg), mz._31(pz, wz[qk], null, Wg), mz._31(pz, wz[LM], Cm, wd), mz._31(pz, wz[YM], Cm, gd), mz._31(pz, wz[rE], Cm, cP), mz._31(pz, wz[$M], Cm, Ha), mz._31(pz, wz[XM], Cm, s_), mz._31(pz, wz[VM], Cm, uP), mz._31(pz, wz[QM], Cm, $_), mz._31(pz, wz[ZM], Cm, oP), mz._31(pz, wz[tE], Cm, Kp), mz._31(pz, wz[nE], Cm, tk), mz._31(pz, wz[lE], Cm, dP), mz._31(pz, wz[dE], Cm, N_), mz._31(pz, wz[sE], Cm, lp), mz._31(pz, wz[vE], Cm, Hg), mz._31(pz, wz[lP], Cm, Yg), mz._31(pz, wz[xE], Cm, Xg), mz._31(pz, wz[wE], Cm, Wg), mz._31(pz, wz[Pk], null, Ug), mz._31(pz, wz[Tk], null, Jg));
    var Mz = new es;
    Mz._31(jz, ap),
        Mz._31(jz, bp, null, bP),
        Mz._31(jz, Ha, null, Ha),
    kz || (Mz._31(pz, wz[rM], null, aP), Mz._31(pz, wz[aM], null, N_), Mz._31(pz, wz[gM], null, s_), Mz._31(pz, wz[cM], null, dy), Mz._31(pz, wz[bg], null, oP), Mz._31(pz, wz[oM], null, nk), Mz._31(pz, wz[lM], null, ek), Mz._31(pz, wz[vM], null, sk)),
        Mz._31(jz, Kg, Kg, za, vP),
        Mz._31(jz, lp, Kg, lp),
        Mz._31(pz, wz[Dk], Kg, i_),
        Mz._31(pz, wz[zk], Kg, Bg),
        Mz._31(pz, wz[Xk], Kg, Rx),
    kz || (Mz._31(pz, wz[Qk], Kg, Dx), Mz._31(pz, wz[Zk], Kg, Bx), Mz._31(pz, wz[Vk], Kg, zx), Mz._31(pz, wz[Gk], Kg, W_), Mz._31(pz, wz[Hk], Kg, Z_), Mz._31(pz, wz[tM], Kg, Ax), Mz._31(pz, wz[nM], Kg, Nx), Mz._31(pz, wz[sM], Kg, G_), Mz._31(pz, wz[xM], Kg, aP), Mz._31(pz, wz[wM], Kg, N_), Mz._31(pz, wz[CM], Kg, s_), Mz._31(pz, wz[mM], Kg, dy), Mz._31(pz, wz[IM], Kg, oP), Mz._31(pz, wz[kM], Kg, nk), Mz._31(pz, wz[EM], Kg, ek), Mz._31(pz, wz[SM], Kg, sk)),
        Mz._31(jz, Np, null, null, yP),
        Mz._31(jz, Fo, null, null, yP);
    var Ez = new es;
    Ez._31(jz, Dp, null, null, gP),
        Ez._31(jz, Rp, null, null, gP),
        Ez._31(jz, Bp, null, null, gP),
        Ez._31(jz, s_, null, null, gP),
        Ez._31(pz, wz[pE], xP, Rx),
        Ez._31(pz, wz[kE], xP, zx),
        Ez._31(pz, wz[ME], xP, i_),
        Ez._31(pz, wz[SE], xP, Bg),
        Ez._31(pz, wz[IE], xP, W_),
        Ez._31(pz, wz[TE], xP, Z_);
    var Sz = new es;
    Sz._31(jz, Nc, xP, null, wP),
        Sz._31(jz, sp, xP, null, wP),
        Sz._31(jz, po, xP, null, wP),
        Sz._31(pz, wz[UE], xP, i_),
        Sz._31(pz, wz[JE], xP, Bg),
        Sz._31(pz, wz[xS], xP, mP),
        Sz._31(pz, wz[gp], xP, jP),
    kz || (Sz._31(pz, wz[KE], xP, Dx), Sz._31(pz, wz[iS], xP, Bx), Sz._31(pz, wz[eS], xP, W_), Sz._31(pz, wz[hS], xP, Z_), Sz._31(pz, wz[uo], xP, null, wP), Sz._31(pz, wz[rS], xP, null, wP), Sz._31(pz, wz[aS], xP, null, wP), Sz._31(pz, wz[tM], xP, Ax), Sz._31(pz, wz[nM], xP, Nx), Sz._31(jz, np, null, null, wP, !0), Sz._31(jz, Mo, null, null, wP, !0), Sz._31(pz, wz[mS], xP, pP), Sz._31(pz, wz[pS], xP, kP), Sz._31(pz, wz[MS], xP, MP), Sz._31(pz, wz[SS], xP, EP), Sz._31(pz, wz[PS], xP, SP), Sz._31(pz, wz[TS], xP, "fromArrowOutlineStyle"), Sz._31(pz, wz[FS], xP, PP), Sz._31(pz, wz[AS], xP, "fromArrowFillGradient"), Sz._31(pz, wz[CS], xP, IP), Sz._31(pz, wz[$S], xP, "fromArrowLineDashOffset"), Sz._31(pz, wz[BS], xP, TP), Sz._31(pz, wz[NS], xP, CP), Sz._31(pz, wz[zS], xP, OP), Sz._31(pz, wz[GS], xP, $P), Sz._31(pz, wz[HS], xP, FP), Sz._31(pz, wz[WS], xP, AP), Sz._31(pz, wz[VS], xP, NP), Sz._31(pz, wz[QS], xP, qP), Sz._31(pz, wz[tP], xP, BP), Sz._31(pz, wz[nP], xP, DP), Sz._31(pz, wz[JS], xP, RP), Sz._31(pz, wz[KS], xP, "toArrowLineDashOffset"), Sz._31(pz, wz[hP], xP, zP), Sz._31(pz, wz[eP], xP, LP));
    var Pz = new es;
    Pz._31(pz, wz[FE], GP, fP),
        Pz._31(pz, wz[OE], GP, L_),
        Pz._31(pz, wz[$E], GP, bp),
        Pz._31(pz, wz[AE], GP, xd),
        Pz._31(pz, wz[VE], GP, dP),
    kz || (Pz._31(pz, wz[CE], GP, Ha), Pz._31(pz, wz[NE], GP, wd), Pz._31(pz, wz[qE], GP, gd), Pz._31(pz, wz[BE], GP, s_), Pz._31(pz, wz[DE], GP, uP), Pz._31(pz, wz[RE], GP, $_), Pz._31(pz, wz[zE], GP, oP), Pz._31(pz, wz[LE], GP, Kp), Pz._31(pz, wz[GE], GP, tk), Pz._31(pz, wz[YE], GP, dy), Pz._31(pz, wz[HE], GP, nk), Pz._31(pz, wz[XE], GP, aP), Pz._31(pz, wz[WE], GP, N_));
    var Iz = new es;
    Iz._31(jz, ap),
        Iz._31(pz, wz[rM], null, aP),
        Iz._31(pz, wz[aM], null, N_),
        Iz._31(pz, wz[gM], null, s_),
        Iz._31(pz, wz[cM], null, dy),
        Iz._31(pz, wz[bg], null, oP),
        Iz._31(pz, wz[oM], null, nk),
        Iz._31(pz, wz[lM], null, ek),
        Iz._31(pz, wz[vM], null, sk),
        Iz._31(jz, Ha, null, Ha),
        Iz._31(jz, np, null, null, YP),
        Iz._31(jz, wp, Kg, za),
        Iz._31(jz, lp, Kg, lp),
        Iz._31(pz, wz[Dk], Kg, i_),
        Iz._31(pz, wz[zk], Kg, Bg),
        Iz._31(pz, wz[Xk], Kg, Rx),
        Iz._31(pz, wz[Vk], Kg, zx),
    kz || (Iz._31(pz, wz[Qk], Kg, Dx), Iz._31(pz, wz[Zk], Kg, Bx), Iz._31(pz, wz[Gk], Kg, W_), Iz._31(pz, wz[Hk], Kg, Z_), Iz._31(pz, wz[tM], Kg, Ax), Iz._31(pz, wz[nM], Kg, Nx), Iz._31(pz, wz[sM], Kg, G_), Iz._31(pz, wz[xM], Kg, aP), Iz._31(pz, wz[wM], Kg, N_), Iz._31(pz, wz[CM], Kg, s_), Iz._31(pz, wz[mM], Kg, dy), Iz._31(pz, wz[IM], Kg, oP), Iz._31(pz, wz[kM], Kg, nk), Iz._31(pz, wz[EM], Kg, ek), Iz._31(pz, wz[SM], Kg, sk), Iz._31(pz, wz[xS], Kg, mP), Iz._31(pz, wz[mS], Kg, pP), Iz._31(pz, wz[pS], Kg, kP), Iz._31(pz, wz[MS], Kg, MP), Iz._31(pz, wz[SS], Kg, EP), Iz._31(pz, wz[FS], Kg, PP), Iz._31(pz, wz[AS], Kg, "fromArrowFillGradient"), Iz._31(pz, wz[CS], Kg, IP), Iz._31(pz, wz[$S], Kg, "fromArrowLineDashOffset"), Iz._31(pz, wz[BS], Kg, TP), Iz._31(pz, wz[NS], Kg, CP), Iz._31(pz, wz[zS], Kg, OP), Iz._31(pz, wz[GS], Kg, $P), Iz._31(pz, wz[gp], Kg, jP), Iz._31(pz, wz[HS], Kg, FP), Iz._31(pz, wz[WS], Kg, AP), Iz._31(pz, wz[tP], Kg, BP), Iz._31(pz, wz[nP], Kg, DP), Iz._31(pz, wz[JS], Kg, RP), Iz._31(pz, wz[KS], Kg, "toArrowLineDashOffset"), Iz._31(pz, wz[hP], Kg, zP), Iz._31(pz, wz[eP], Kg, LP));
    var Tz = function(t, i) {
            return t = t[Qj],
                i = i[Qj],
                t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        Cz = function(t, i) {
            this[zu] = new TB,
                q(this, Cz, arguments),
                this.id = this[Y_].id,
                this[jo] = i,
                this._f3 = [],
                this._nby = new es
        };
    Cz[br] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _nby: null,
        _f3: null,
        addChild: function(t, i) {
            t._j6 = this,
                i !== n ? g(this._f3, t, i) : this._f3[Xh](t),
            t._dy && this._ndf(t),
                this[HP](),
                this[XP]()
        },
        removeChild: function(t) {
            this._nby[WP](t),
                t._j6 = null,
                x(this._f3, t),
            this._j8 && this._j8[Yh](t),
                this[XP]()
        },
        getProperty: function(t, i) {
            return i == ED[Lj] ? this[jo][Lu](this[Y_], t) : i == ED[Fu] ? this[Y_][jr](t) : this[Y_][t]
        },
        getStyle: function(t) {
            return this[jo][Lu](this[Y_], t)
        },
        _$z: function(t, i, n) {
            var e = this._nby[VP](this, t, i, n);
            return mz[VP](this, t, i, n) || e
        },
        onPropertyChange: function(t) {
            if (Qj == t[Ad]) return this[UP](),
                !0;
            if (Xj == t[Ya]) {
                if (Wj == t[Ad]) return this[Wj](),
                    !0;
                var i = t[Pr];
                return i && i.ui ? (ir == t[Ad] ? this._96(i) : Yh == t[Ad] && this[Xb](i.ui), !0) : !1
            }
            return this._$z(t[Ad], t[Pb] || jz, t[Pr])
        },
        label: null,
        initLabel: function() {
            var t = new $z;
            t[Er] = Cm,
                this[QP](t),
                this[Cm] = t
        },
        initialize: function() {
            this[JP](),
            this[Y_]._nf7 && this[Y_]._nf7[uc](this._96, this),
                mz[ZP](this),
                this._nby[ZP](this, !1)
        },
        addBinding: function(t, i) {
            return i[Tu] ? (i[Pu] = t, void this._nby._2i(i[Tu], i)) : !1
        },
        _gj: function(t, i) {
            var n = this[Y_];
            if (!n._nf7) return ! 1;
            var e = n._nf7[yl](t.id);
            if (!e || !e[KP]) return ! 1;
            var s = e[KP];
            if (I(s)) {
                var h = !1;
                return l(s,
                    function(t) {
                        return za == t[Cu] ? (h = ss(n, i, t[Tu], t[Pb]), !1) : void 0
                    },
                    this),
                    h
            }
            return za == s[Cu] ? ss(n, i, s[Tu], s[Pb]) : !1
        },
        _96: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[KP];
                n && (Array[hr](n) ? n[uc](function(t) {
                        this[tI](i, t)
                    },
                    this) : this[tI](i, n)),
                    this[QP](i)
            }
        },
        validate: function() {
            return this._ndb || (this[bk](), this._ndb = !0),
                this[vk]()
        },
        _$c: !0,
        invalidateChildrenIndex: function() {
            this._$c = !0
        },
        doValidate: function() {
            if (this._1r && (this._1r = !1, this[iI]() && (this[ak](), this[S_] = !0), this._$c && (this._$c = !1, oB ? this._f3 = d(this._f3, Tz) : this._f3[nI](Tz))), Gn[Bh](this) && (this[X_] = !0), this[X_]) {
                oR[Bh](this),
                    this[zu][I_](this._fe);
                var t = Math[Ea](this[eI] || 0, this[sI] || 0),
                    i = Math[Ea](this[hI] || 0, this[rI] || 0),
                    n = Math[Ea](this[fI], this[aI]),
                    e = n - t,
                    s = n + t,
                    h = n - i,
                    r = n + i;
                return 0 > e && (e = 0),
                0 > s && (s = 0),
                0 > h && (h = 0),
                0 > r && (r = 0),
                    this[zu][C_](h, e, r, s),
                this[ck] && this[ck](),
                    this[_I] = !0,
                    !0
            }
        },
        validateChildren: function() {
            var t, i = this._nbody,
                n = this[cI];
            i && (i[uI] = this[uI], i[oI] = this[oI], i[dI] = this[dI], i[fI] = this[fI], i[eI] = this[eI], i[hI] = this[hI]),
                this[cI] = !1,
            i && i._1r && (n = i[Ca]() || n, i.$x = 0, i.$y = 0, i[X_] && oR[Bh](i), t = !0);
            for (var e = 0,
                     s = this._f3[qh]; s > e; e++) {
                var h = this._f3[e];
                h != i && (h._1r && h[Ca]() || n) && h._hk && (Wn(h, i, this), t || (t = !0))
            }
            return t
        },
        measure: function() {
            this._j3[Pf]();
            for (var t, i, n = 0,
                     e = this._f3[qh]; e > n; n++) t = this._f3[n],
            t._hk && (i = t._fe, i[fa] <= 0 || i[aa] <= 0 || this._j3[Cl](t.$x + i.x, t.$y + i.y, i[fa], i[aa]))
        },
        _j8: null,
        _ndf: function(t) {
            if (!this._j8) {
                if (!t[_P]) return;
                return this._j8 = new pB,
                    this._j8[ir](t)
            }
            return t[_P] ? this._j8[ir](t) : this._j8[Yh](t)
        },
        draw: function(t, i, n) {
            for (var e, s = 0,
                     h = this._f3[qh]; h > s; s++) e = this._f3[s],
            e._hk && !e[_P] && e._j7(t, i, n, this)
        },
        _9c: function(t, i) {
            if (!this._hk || !this._j8 || !this._j8[qh]) return ! 1;
            t[Ig](),
                t[h_](this.$x, this.$y),
            this[M_] && this[E_] && t[Ha](this[E_]),
            (this[Kp] || this[tk]) && t[h_](this[Kp], this[tk]),
            this[j_] && t[Ha](this[j_]),
            this[m_] && this._nd9 && t[h_]( - this._nd9.x, -this._nd9.y),
            this[Yg] && (t[Yg] = this[Yg], t[Hg] = this[Hg] * i, t[Xg] = this[Xg] * i, t[Wg] = this[Wg] * i),
                t[Ux]();
            for (var n, e = 0,
                     s = this._f3[qh]; s > e; e++) n = this._f3[e],
            n._hk && n[_P] && n._j7(t, i, this[Jp], this);
            t[Gg]()
        },
        _dq: function(t, i, n) {
            if (n) {
                if (!this._j3[Tl](t - n, i - n, 2 * n, 2 * n)) return ! 1
            } else if (!this._j3[Fa](t, i)) return ! 1;
            return this._61(t, i, n)
        },
        _61: function(t, i, n) {
            for (var e, s = this._f3[qh] - 1; s >= 0; s--) if (e = this._f3[s], e._hk && e._hn(t, i, n)) return e;
            return ! 1
        },
        destroy: function() {
            this._iaed = !0;
            for (var t, i = this._f3[qh] - 1; i >= 0; i--) t = this._f3[i],
                t[Ru]()
        }
    },
        N(Cz, gz),
        J(Cz[br], {
            renderColorBlendMode: {
                get: function() {
                    return this[oI]
                },
                set: function(t) {
                    this[oI] = t,
                        this._1r = !0,
                    this[lI] && (this[lI][Jg] = this[oI])
                }
            },
            renderColor: {
                get: function() {
                    return this[uI]
                },
                set: function(t) {
                    this[uI] = t,
                        this._1r = !0,
                    this[lI] && (this[lI][Ug] = this[uI])
                }
            },
            bodyBounds: {
                get: function() {
                    if (this[_I]) {
                        this.$invalidateBounds = !1;
                        var t, i = this[lI];
                        t = i && i._hk && !this._$t() ? i._fe[Hh]() : this._fe[Hh](),
                        this[Ha] && $i(t, this[Ha], t),
                            t.x += this.$x,
                            t.y += this.$y,
                            this._nfj = t
                    }
                    return this._nfj
                }
            },
            body: {
                get: function() {
                    return this._nbody
                },
                set: function(t) {
                    t && this._nbody != t && (this._nbody = t, this[cI] = !0, this[XP]())
                }
            }
        });
    var Oz = function() {
        q(this, Oz, arguments)
    };
    Oz[br] = {
        strokeStyle: zg,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _j4: 1,
        _j5: 1,
        outline: 0,
        onDataChanged: function(t) {
            B(this, Oz, yk, arguments),
            this._l4 && this._84 && this._l4._6j(this._84, this),
            t && this._nfc(t)
        },
        _nfc: function(t) {
            this._l4 = wn(t),
                this._l4[Ca](),
            (this._l4._ly == qD || this._l4._6p()) && (this._84 || (this._84 = function() {
                this[Yp](),
                this._j6 && this._j6[jo] && (this._j6[XP](), this._j6[jo][Wj]())
            }), this._l4._ndg(this._84, this))
        },
        _l4: null,
        initialize: function() {
            this._nfc(this[Y_])
        },
        _5d: function() {
            return this._l4 && this._l4[Ja]
        },
        _nd8: function(t) {
            if (!t || t[fa] <= 0 || t[aa] <= 0 || !this[bI] || !(this[lp] instanceof Object)) return this._j4 = 1,
                void(this._j5 = 1);
            var i = this[lp][fa],
                e = this[lp][aa];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._j4 = 1,
                void(this._j5 = 1);
            var s, h, r = t[fa],
                f = t[aa];
            i >= 0 && (s = i / r),
            e >= 0 && (h = e / f),
                0 > i ? s = h: 0 > e && (h = s),
                this._j4 = s,
                this._j5 = h
        },
        validateSize: function() {
            if (this[vI]) {
                this[vI] = !1;
                var t = this._originalBounds;
                this._j4,
                    this._j5,
                    this._nd8(t),
                    this[yI](t[fa] * this._j4, t[aa] * this._j5, t.x * this._j4, t.y * this._j5)
            }
        },
        measure: function() {
            var t = this._l4[Oa](this[i_] + this[Dx]);
            return t ? (this[vI] = !0, void(this._originalBounds = t[Hh]())) : void this._j3[pr](0, 0, 0, 0)
        },
        onBoundsChanged: function() {
            this[gI] = !0
        },
        _23: function() {
            this[gI] = !1,
                this._fillGradient = this[zx] ? this[xI][q_](this._8a) : null
        },
        draw: function(t, i, n, e) {
            if (this._j4 && this._j5) {
                if (this[gI] && this._23(), t[Ig](), this._l4._ly == DD) return t[Sf](this._j4, this._j5),
                    this._l4._lj[Ja](t, i, this, n, e || this),
                    void t[Gg]();
                n && this._82(t, i, e),
                    this._l4[Ja](t, i, this, this._j4, this._j5),
                    t[Gg]()
            }
        },
        _dq: function(t, i, n) {
            if (this._l4._hn) {
                t /= this._j4,
                    i /= this._j5;
                var e = (this._j4 + this._j5) / 2;
                return e > 1 && (n /= e, n = 0 | n),
                    this._l4._lj instanceof fR ? this._l4._lj._hn(t, i, n, !0, this[wI], this[mI] || this[xI]) : this._l4._hn(t, i, n)
            }
            return ! 0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    },
        N(Oz, gz),
        is(Oz[br], {
            fillColor: {},
            size: {
                validateFlags: [Lv, jI]
            },
            fillGradient: {
                validateFlags: [pI]
            }
        }),
        J(Oz[br], {
            originalBounds: {
                get: function() {
                    return this._originalBounds
                }
            }
        }),
        mB[kI] = OB[Yl];
    var $z = function() {
        q(this, $z, arguments),
            this[fP] = mB[BM]
    };
    $z[br] = {
        color: mB[BM],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _h9: null,
        alignPosition: null,
        measure: function() {
            this[pa];
            var t = Di(this[Y_], this[MI] || mB[cl], this[EI]);
            if (this._h9 = t, this[bI]) {
                var i = this[bI][fa] || 0,
                    n = this[bI][aa] || 0;
                return this[yI](i > t[fa] ? i: t[fa], n > t[aa] ? n: t[aa])
            }
            return this[yI](t[fa], t[aa])
        },
        _dq: function(t, i, n) {
            return this[Y_] ? Tn(t, i, n, this) : !1
        },
        draw: function(t, i, n, e) {
            n && this._82(t, i, e);
            var s = this[MI] || mB[cl];
            if (this[M_] && this[E_]) {
                var h = on(this[E_]);
                h > kB && 3 * kB > h && (t[h_](this._j3[fa] / 2, this._j3[aa] / 2), t[Ha](Math.PI), t[h_]( - this._j3[fa] / 2, -this._j3[aa] / 2))
            }
            var r = this[cP] || mB[kI],
                f = r[Qr],
                a = r[Jr],
                _ = s * mB[ka],
                c = _ / 2;
            if (a != NB && this._h9[aa] < this._j3[aa]) {
                var u = this._j3[aa] - this._h9[aa];
                c += a == qB ? u / 2 : u
            }
            t[h_](0, c),
            t[pa] != this[EI] && (t[pa] = this[EI]),
                f == FB ? (t[$g] = Eo, t[h_](this._j3[fa] / 2, 0)) : f == AB ? (t[$g] = Vr, t[h_](this._j3[fa], 0)) : t[$g] = yf,
                t[Fg] = Ag,
                t[Tg] = this[fP];
            for (var o = 0,
                     d = this[Y_][Kh](Ma), l = 0, b = d[qh]; b > l; l++) {
                var v = d[l];
                t[Lg](v, 0, o),
                    o += _
            }
        },
        _5d: function() {
            return null != this[Y_] || this[bI]
        },
        $invalidateFont: !0
    },
        N($z, gz),
        is($z[br], {
            size: {
                validateFlags: [Jv]
            },
            fontStyle: {
                validateFlags: [Jv, SI]
            },
            fontSize: {
                validateFlags: [Jv, SI]
            },
            fontFamily: {
                validateFlags: [Jv, SI]
            }
        }),
        J($z[br], {
            font: {
                get: function() {
                    return this[PI] && (this[PI] = !1, this[EI] = (this[II] || mB[_l]) + tr + (this[MI] || mB[cl]) + ul + (this[TI] || mB[ol])),
                        this[EI]
                }
            }
        });
    var Fz = function(t) {
        t = t || new fR,
            this[CI] = new TB,
            q(this, Fz, [t])
    };
    Fz[br] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function() {
            this[OI] = !0,
                this[$I] = !0,
                this.$data[Oa](this[wI] + this[FI], this[CI]),
                this[yI](this[CI])
        },
        validateSize: function() {
            if (this[OI] || this[$I]) {
                var t = this[CI][Hh]();
                if (this[OI]) {
                    this[OI] = !1;
                    var i = this[AI]();
                    i && t[ir](i)
                }
                if (this[$I]) {
                    this[$I] = !1;
                    var i = this[NI]();
                    i && t[ir](i)
                }
                this[yI](t)
            }
        },
        validateFromArrow: function() {
            if (!this[Y_]._iw || !this[qI]) return void(this[BI] = null);
            var t = this[Y_],
                i = 0,
                n = 0,
                e = this[DI];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._iw)),
                this[RI] = t[zI](i, n),
                this[RI][Ha] = Math.PI + this[RI][Ha] || 0,
                this[BI] = $s(this[qI], this[LI]);
            var s = this[BI][Oa](this[GI][i_] + this[GI][Dx]);
            return this[YI] instanceof MD[HI] ? this.fromArrowStyles._fillGradient = this[YI][q_](s) : this[GI] && (this[GI]._fillGradient = null),
                Fi(s, this[RI][Ha], s, s[Vr], s.cy),
                s[mg](this[RI].x, this[RI].y),
                s
        },
        validateToArrow: function() {
            if (!this[Y_]._iw || !this[XI]) return void(this[WI] = null);
            var t = this[Y_],
                i = 0,
                n = 0,
                e = this[VI];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0),
            0 > i && i > -1 && (i *= t._iw),
                i += t._iw,
                this[UI] = t[zI](i, n),
                this[WI] = $s(this[XI], this[QI]);
            var s = this[WI][Oa](this[JI][i_] + this[JI][Dx]);
            return this[DP] instanceof MD.Gradient ? this[JI]._fillGradient = this[DP][q_](s) : this[JI] && (this[JI]._fillGradient = null),
                Fi(s, this[UI][Ha], s, s[Vr], s.cy),
                s[mg](this[UI].x, this[UI].y),
                s
        },
        _30: function(t) {
            var i = t ? "from": sp,
                e = this[i + ZI];
            e === n && (e = this[wI]);
            var s = this[i + KI];
            s === n && (s = this[Bg]);
            var h = this[i + tT];
            h || (this[i + tT] = h = {}),
                h[i_] = e,
                h[Bg] = s,
                h[W_] = this[i + iT],
                h[Z_] = this[i + nT],
                h[Rx] = this[i + eT],
                h[zx] = this[i + sT],
                h[Ax] = this[i + hT],
                h[Nx] = this[i + rT],
                h[Dx] = this[i + fT] || 0,
                h[Bx] = this[i + aT]
        },
        doValidate: function() {
            return this[qI] && this._30(!0),
            this[XI] && this._30(!1),
                B(this, Fz, vk)
        },
        drawArrow: function(t, i, n, e) {
            if (this[qI] && this[BI]) {
                t[Ig]();
                var s = this[RI],
                    h = s.x,
                    r = s.y,
                    f = s[Ha];
                t[h_](h, r),
                f && t[Ha](f),
                    this[BI][Ja](t, i, this[GI], n, e),
                    t[Gg]()
            }
            if (this[XI] && this[WI]) {
                t[Ig]();
                var s = this[UI],
                    h = s.x,
                    r = s.y,
                    f = s[Ha];
                t[h_](h, r),
                f && t[Ha](f),
                    this[WI][Ja](t, i, this[JI], n, e),
                    t[Gg]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function() {
            this[gI] = !0
        },
        _23: function() {
            this[gI] = !1,
                this._fillGradient = this[xI] ? this[xI][q_](this._8a) : null
        },
        draw: function(t, i, n, e) {
            this[gI] && this._23(),
                this[Y_][Ja](t, i, this, n, e),
                this[_T](t, i, n, e)
        },
        _dq: function(t, i, n) {
            if (this[Y_]._hn(t, i, n, !0, this[wI] + this[FI], this[mI] || this[xI])) return ! 0;
            if (this[XI] && this[WI]) {
                var e = t - this[UI].x,
                    s = i - this[UI].y;
                if (this[UI][Ha]) {
                    var h = Ti(e, s, -this[UI][Ha]);
                    e = h.x,
                        s = h.y
                }
                var r = this[JI][Rx] || this[JI][zx];
                if (this[WI]._hn(e, s, n, !0, this[JI][i_], r)) return ! 0
            }
            if (this[qI] && this[BI]) {
                var e = t - this[RI].x,
                    s = i - this[RI].y;
                if (this[RI][Ha]) {
                    var h = Ti(e, s, -this[RI][Ha]);
                    e = h.x,
                        s = h.y
                }
                var r = this[GI][Rx] || this[GI][zx];
                if (this[BI]._hn(e, s, n, !0, this[GI][i_], r)) return ! 0
            }
            return ! 1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    },
        N(Fz, gz),
        is(Fz[br], {
            fillColor: {},
            fillGradient: {
                validateFlags: [pI]
            },
            fromArrowOffset: {
                validateFlags: [cT, Lv]
            },
            fromArrowSize: {
                validateFlags: [cT, Lv]
            },
            fromArrow: {
                validateFlags: [cT, Lv]
            },
            fromArrowOutline: {
                validateFlags: [cT, Lv]
            },
            fromArrowStroke: {
                validateFlags: [cT, Lv]
            },
            toArrowOffset: {
                validateFlags: [uT, Lv]
            },
            toArrowSize: {
                validateFlags: [uT, Lv]
            },
            toArrow: {
                validateFlags: [uT, Lv]
            },
            toArrowOutline: {
                validateFlags: [uT, Lv]
            },
            toArrowStroke: {
                validateFlags: [uT, Lv]
            },
            outline: {
                value: 0,
                validateFlags: [Jv]
            }
        }),
        J(Fz[br], {
            length: {
                get: function() {
                    return this[za][qh]
                }
            }
        }),
        hs[br] = {
            shape: null,
            path: null,
            initialize: function() {
                B(this, hs, bk),
                    this[wp] = new fR,
                    this[wp]._dd = !1,
                    this[xP] = new Fz(this[wp]),
                    this[QP](this[xP], 0),
                    this._nbody = this[xP],
                    Sz[ZP](this)
            },
            _29: !0,
            _5z: null,
            _$t: function() {
                return ! 1
            },
            _4l: function() {
                return ! 1
            },
            validatePoints: function() {
                this[xP][Yp]();
                var t = this[Y_],
                    i = this[wp];
                i[Pf]();
                var n = t[Fc],
                    e = t[Oc];
                n && e && Ds(this, t, i, n, e)
            },
            drawLoopedEdge: function(t, i, n, e) {
                Gs(this, e, t)
            },
            drawEdge: function(t, i, n, e, s, h) {
                var r = this[Lu](wz[rS]),
                    f = this[Lu](wz.EDGE_TO_OFFSET);
                if (r && (s.x += r.x || 0, s.y += r.y || 0), f && (h.x += f.x || 0, h.y += f.y || 0), e == ED[oT]) {
                    var a = s[Eo],
                        _ = h[Eo],
                        c = (a.x + _.x) / 2,
                        u = (a.y + _.y) / 2,
                        o = a.x - _.x,
                        d = a.y - _.y,
                        l = Math[Pa](o * o + d * d),
                        b = Math[Yr](d, o);
                    b += Math.PI / 6,
                        l *= .04,
                    l > 30 && (l = 30);
                    var v = Math[Hr](b) * l,
                        y = Math[Xr](b) * l;
                    return t[Qc](c - y, u + v),
                        void t[Qc](c + y, u - v)
                }
                var g = Ls(this, this[za], s, h, i, n, s[Eo], h[Eo]);
                g && (t._fg = g)
            },
            _2o: function() {
                if (!this[Y_][dT]()) return null;
                var t = this[jo]._8g._8l(this[Y_]);
                if (!t || !t[lT](this[jo]) || !t._fx) return null;
                var i = t[bT](this);
                return t[vT](this[Y_]) || (i = -i),
                    i
            },
            checkBundleLabel: function() {
                var t = this[yT]();
                return t ? (this[GP] || this[gT](), this[GP]._hk = !0, void(this[GP][za] = t)) : void(this[GP] && (this[GP]._hk = !1, this[GP][za] = null))
            },
            createBundleLabel: function() {
                var t = new $z;
                t[xT] = !1,
                    this[GP] = t,
                    this[QP](this[GP]),
                    Pz[ZP](this)
            },
            getBundleLabel: function() {
                var t = this[jo]._8g._8l(this[Y_]);
                return t && t[wT] == this[Y_] ? mT + t[jT][qh] : null
            },
            doValidate: function() {
                return this._29 && (this._29 = !1, this[pT]()),
                    this[kT](),
                    B(this, hs, vk)
            },
            _55: function() {
                this._29 = !0,
                    this[XP]()
            },
            _$z: function(t, i, n) {
                var e = this._nby[VP](this, t, i, n);
                return e = mz[VP](this, t, i, n) || e,
                this[GP] && this[GP][Y_] && (e = Pz[VP](this, t, i, n) || e),
                Sz[VP](this, t, i, n) || e
            }
        },
        N(hs, Cz),
        hs[MT] = function(t, i, n, e) {
            if (t[Uc](i.x, i.y), !e || e == ED[ET]) return void t[Qc](n.x, n.y);
            if (e == ED[Ku]) t[Qc](i.x, n.y);
            else if (e == ED[Vu]) t[Qc](n.x, i.y);
            else if (0 == e[Wh](ED[bo])) {
                var s;
                s = e == ED[Wu] ? !0 : e == ED[Zu] ? !1 : Math[Ur](i.x - n.x) > Math[Ur](i.y - n.y);
                var h = (i.x + n.x) / 2,
                    r = (i.y + n.y) / 2;
                s ? (t[Qc](h, i.y), t[Qc](h, n.y)) : (t[Qc](i.x, r), t[Qc](n.x, r))
            }
            t[Qc](n.x, n.y)
        },
        J(hs[br], {
            length: {
                get: function() {
                    return this[wp] ? this[wp][qh] : 0
                }
            }
        }),
        rs[br] = {
            _3f: null,
            image: null,
            initialize: function() {
                B(this, rs, bk),
                    this._ndi(),
                    Mz[ZP](this)
            },
            _nfc: function() {
                this[za][Kg] ? this[Kg] && (this[lI] = this[Kg]) : this[Cm] && (this[lI] = this[Cm])
            },
            _ndi: function() {
                this[Kg] = new Oz,
                    this[QP](this[Kg], 0),
                    this._nfc()
            },
            doValidate: function() {
                this[lI] && (this instanceof Js && !this[Y_][Rp] && this._5e() ? this[lI][m_] = !1 : (this[lI].$layoutByAnchorPoint = null != this._3f, this[lI][bp] = this._3f));
                var t = this[Y_][rp],
                    i = 0,
                    n = 0;
                t && (i = t.x, n = t.y);
                var e = this.$x != i || this.$y != n;
                return e && (this[_I] = !0),
                    this.$x = i,
                    this.$y = n,
                Cz[br][vk][Bh](this) || e
            },
            _$z: function(t, i, n) {
                var e = this._nby[VP](this, t, i, n);
                return e = mz[VP](this, t, i, n) || e,
                Mz[VP](this, t, i, n) || e
            }
        },
        N(rs, Cz);
    var Az = function(t, i) {
            return t = t[Y_][Qj] || 0,
                i = i[Y_][Qj] || 0,
            t - i
        },
        Nz = {
            position: Wo,
            "user-select": Xo,
            "transform-origin": ST,
            "-webkit-tap-highlight-color": Qx
        };
    li(PT, "text-align: left; outline: none;"),
        as[br] = {
            _kh: 1,
            _nfz: null,
            _8h: null,
            _8j: null,
            _$h: !0,
            _mt: null,
            _my: null,
            _jb: null,
            _nb3: null,
            _6l: !1,
            _ndb: !1,
            _ju: null,
            _4z: function(t, i) {
                for (var n = this._nfz,
                         e = 0,
                         s = n[qh]; s > e; e++) if (t[Bh](i, n[e]) === !1) return ! 1
            },
            _dp: function(t, i) {
                this._mt[uc](t, i)
            },
            _10: function(t, i) {
                for (var n = this._nfz,
                         e = n[qh] - 1; e >= 0; e--) if (t[Bh](i, n[e]) === !1) return ! 1
            },
            _57: function(t, i) {
                this._mt[IT](t, i)
            },
            _3p: function(t, i) {
                this._77 && this._77._3p && this._77._3p(t, i)
            },
            _nf2: function() {
                oi(this._my, {
                    overflow: Ho,
                    padding: TT
                }),
                    this._ju._59(),
                    this._kc && this._kc[CT] ? this._ju._dk(0, 0) : this._ju._2q = !0
            },
            _4k: function() {
                return this._$h && (this._$h = !1, this._22()),
                    this._8j
            },
            _3q: function() {
                return this._ju._1d ? !1 : (this._ju._1d = !0, void this._nf9())
            },
            _nf9: function() {
                this._6l || (this._6l = !0, j(this._fb[Sg](this)))
            },
            _nb5: function() {
                var t = !this._ndb || 0 == this._mt[qh];
                this._ndb || (this._ndb = !0, this._nf2()),
                    this._nb6(t);
                var i = this._jb.g;
                if (this._mt[H_]()) return i._kg(),
                    this._topCanvas._j7(),
                    this._6l = !1,
                    this._ju._jj(this, !0),
                    void this._4k();
                if (this._ju._jj(this, this._nb3._ml), this._jg) {
                    var n = this._km;
                    i[oa][ca] && (n *= i[oa][ca]),
                        this._jg(i, n, t)
                }
                this._nb3._kg(),
                    this._ju._74(),
                    this._topCanvas._j7(),
                    this._6l = !1
            },
            _fb: function() {
                this._6l && (this._iaed || (this._ndb && this._kc && this._kc._$w && (this._kc._$w = !1, this._kc[uc](function(t) {
                    t[Hj](!0)
                })), this._nb5(), this._2t()))
            },
            _gw: null,
            _1l: function(t, i, n, e, s) {
                if (!n || !e) return void this._5g();
                var h = this._nfz,
                    r = this._8h;
                this._5g(),
                    this._gw[qh] = 0;
                var f, a = {},
                    _ = this._nb3;
                s = s || _._ml;
                for (var c, u, o, d, l, b, v = this._mt._j2,
                         y = t + n,
                         g = i + e,
                         x = 0,
                         w = v[qh]; w > x; x++) if (b = v[x], l = b.__oldBounds, b.__oldBounds = null, b._hk) if (d = b.__j3Changed, b.__j3Changed = !1, c = b[zu], u = c.x + b.$x, o = c.y + b.$y, y > u && g > o && u + c[fa] > t && o + c[aa] > i) {
                    if (f = b[Y_][Qj], f in a || (a[f] = !0, this._gw[Xh](f || 0)), h[Xh](b), this._8h[b.id] = b, s) continue;
                    l && (_._mo(l.x, l.y, l[fa], l[aa]), s = _._ml),
                    d && (_._mo(u, o, c[fa], c[aa]), s = _._ml)
                } else ! s && r[b.id] && l && (_._mo(l.x, l.y, l[fa], l[aa]), s = _._ml);
                else ! s && l && (_._mo(l.x, l.y, l[fa], l[aa]), s = _._ml)
            },
            _nfa: function(t) {
                var i = t[Y_].__hkChanged;
                return t[Y_].__hkChanged = !1,
                    t._1r || t[Y_]._6l ? (t[Y_]._6l = !1, t._ndb && (t.__oldBounds = {
                        x: t.$x + t[zu].x,
                        y: t.$y + t[zu].y,
                        width: t[zu][fa],
                        height: t[zu][aa]
                    }), t.__j3Changed = t[Ca](), i || t.__j3Changed) : (i && t._ndb && (t.__oldBounds = {
                        x: t.$x + t[zu].x,
                        y: t.$y + t[zu].y,
                        width: t[zu][fa],
                        height: t[zu][aa]
                    }), i)
            },
            _jg: function(t, i, n, e) {
                e = e || this._ju._73;
                var s = e.x,
                    h = e.y,
                    r = e[fa],
                    f = e[aa];
                this._1l(s, h, r, f, n),
                    this._4k(),
                this._gw[qh] && (oB ? (this._gw[nI](), this._nfz = d(this._nfz, Az)) : this._nfz[nI](Az)),
                    this._in(t, i)
            },
            _in: function(t, i) {
                t[Ig](),
                    this._nb3._j0(t, this._jb, this._ju),
                    this._ju._nbl(t);
                for (var n, e, s = this._nfz,
                         h = [], r = 0, f = s[qh]; f > r; r++) n = s[r],
                    e = n[zu],
                (this._nb3._ml || this._nb3._f2(e.x + n.$x, e.y + n.$y, e[fa], e[aa])) && (n._j7(t, i), n._j8 && n._j8[qh] && h[Xh](n));
                if (h[qh]) for (r = 0, f = h[qh]; f > r; r++) h[r]._9c(t, i);
                t[Gg]()
            },
            _gs: function(t, i, n) {
                t[Ig](),
                    t[h_]( - n.x * i, -n.y * i),
                    t[Sf](i, i);
                var e, s, h = this._mt._j2[Rh]();
                this._gw[qh] && (oB ? (this._gw[nI](), h = d(h, Az)) : h[nI](Az));
                for (var r = [], f = 0, a = h[qh]; a > f; f++) e = h[f],
                e._hk && (s = e[zu], n[Tl](s.x + e.$x, s.y + e.$y, s[fa], s[aa]) && (e._j7(t, i), e._j8 && e._j8[qh] && r[Xh](e)));
                if (r[qh]) for (f = 0, a = r[qh]; a > f; f++) r[f]._9c(t, i);
                t[Gg]()
            },
            _15: function() {},
            _22: function() {
                for (var t, i, n = this._mt._j2,
                         e = new TB,
                         s = n[qh] - 1; s >= 0; s--) t = n[s],
                t._hk && (i = t[zu], e[Cl](t.$x + i.x, t.$y + i.y, i[fa], i[aa]));
                var h = this._8j;
                this._8j = e,
                e[vb](h) || this._15(h, e)
            },
            _nb6: function() {
                for (var t, i = this._mt._j2,
                         n = i[qh] - 1; n >= 0; n--) t = i[n],
                this._nfa(t) && !this._$h && (this._$h = !0)
            },
            _1p: function(t, i, n, e) {
                this._nb3._ml || (t && (t > 0 && this._nb3._mo(this._ju._73.x, this._ju._73.y, t / this._ju._km, this._ju._9w / this._ju._km), n + t < this._ju._nbk && this._nb3._mo(this._ju._73.x + (n + t) / this._ju._km, this._ju._73.y, (this._ju._nbk - n - t) / this._ju._km, this._ju._9w / this._ju._km)), i && (i > 0 && this._nb3._mo(this._ju._73.x, this._ju._73.y, this._ju._nbk / this._ju._km, i / this._ju._km), e + i < this._ju._9w && this._nb3._mo(this._ju._73.x, this._ju._73.y + (e + i) / this._ju._km, this._ju._nbk / this._ju._km, (this._ju._9w - e - i) / this._ju._km)))
            },
            _df: function(t, i) {
                this._nf9(),
                    this._ju._df(t, i)
            },
            _nb7: function(t, i, n) {
                this._nf9(),
                    this._ju._nb7(t, i, n)
            },
            _8m: function() {},
            _g5: function(t, i, n) {
                return this._ndb ? void(this._ju._g5(t, i, n) !== !1 && this._nf9()) : void(this._ju._km = t)
            },
            _25: function() {
                var t = this._4k();
                if (!t[H_]()) {
                    var i = this._ju._nbk / t[fa],
                        n = this._ju._9w / t.height,
                        e = Math[Ia](i, n);
                    return e = Math[Ea](this._h2, Math[Ia](this._h4, e)),
                    {
                        scale: e,
                        cx: t.cx,
                        cy: t.cy
                    }
                }
            },
            _jw: function(t, i, n) {
                return this._ju._jw(t, i, n) === !1 ? !1 : void this._nf9()
            },
            _io: function(t, i) {
                return this._ju._io(t, i) === !1 ? !1 : void this._nf9()
            },
            _jy: function(t, i) {
                return this._ju._jy(t, i) === !1 ? !1 : void this._nf9()
            },
            _6s: function() {
                return this._ju._6sFlag ? !1 : (this._ju._6sFlag = !0, void this._nf9())
            },
            _5g: function() {
                this._nfz[qh] = 0,
                    this._8h = {}
            },
            _kp: function() {
                this._kg()
            },
            _ia: function() {
                this._kg(),
                    this._iaed = !0,
                    this._6l = !1,
                    this._topCanvas[Pf](),
                    this._8t[qh] = 0,
                this._77 && (this._77._ia(), delete this._77)
            },
            _kg: function() {
                this._ndb = !1,
                    this._$h = !0,
                    this._mt[Pf](),
                    this._5g(),
                    this._nb3._kg(),
                    this._nf9()
            },
            _8p: function(t, i, n, e) {
                var s = this._km;
                return new TB(this._nbu(t), this._nbt(i), n / s, e / s)
            },
            _nbu: function(t) {
                return this._ju._nbu(t)
            },
            _nbt: function(t) {
                return this._ju._nbt(t)
            },
            _du: function(t) {
                return this._ju._du(t)
            },
            _dv: function(t) {
                return this._ju._dv(t)
            },
            _kr: function(t) {
                return this._mt[yl](t.id || t)
            },
            _$d: function(t) {
                var i = this._8r(t);
                return i.x = this._nbu(i.x),
                    i.y = this._nbt(i.y),
                    i
            },
            _fn: function(t, i) {
                return {
                    x: this._du(t),
                    y: this._dv(i)
                }
            },
            _dw: function(t, i) {
                return {
                    x: this._nbu(t),
                    y: this._nbt(i)
                }
            },
            _8r: function(t) {
                return bi(t, this._my)
            },
            _3y: function(t) {
                if (t[OT] !== n) return t[OT] ? this._mt[yl](t[OT]) : null;
                var i = Math[Aa](mB[ug] / this._ju._km) || 1;
                this._jb[ca] && (i *= this._jb[ca]);
                for (var e, s = this._$d(t), h = s.x, r = s.y, f = this._nfz, a = f[qh] - 1; a >= 0; a--) if (e = f[a], e._hk && e._hn(h, r, i)) return t[OT] = e.id,
                    e;
                t[OT] = null
            },
            _hn: function(t) {
                var i = this._3y(t);
                if (!i) return null;
                var n = Math[Aa](mB[ug] / this._ju._km) || 1;
                this._jb[ca] && (n *= this._jb[ca]);
                var e = this._$d(t),
                    s = e.x,
                    h = e.y,
                    r = i._hn(s, h, n, !0);
                return r instanceof gz ? r: i
            },
            _nbh: function(t) {
                t.id !== n && (t = t.id);
                var i = this._mt[yl](t);
                return i ? new TB((i.$x || 0) + i[zu].x, (i.$y || 0) + i[zu].y, i[zu][fa], i[zu][aa]) : void 0
            },
            _8t: null,
            _2t: function() {
                if (!this._8t[qh]) return ! 1;
                var t = this._8t;
                this._8t = [],
                    l(t,
                        function(t) {
                            try {
                                t[Vw] ? m(t[Bh], t[gr], t[Vw]) : t[Bh][Bh](t[gr])
                            } catch(i) {}
                        },
                        this),
                    this._fb()
            },
            callLater: function(t, i, n) {
                i && E(i) && (n = i, i = null);
                var e = this._8t;
                e[Xh]({
                    call: t,
                    scope: i,
                    delay: n
                }),
                this._6l || this._2t()
            }
        },
        J(as[br], {
            _73: {
                get: function() {
                    return this._ju._73
                }
            },
            _dn: {
                get: function() {
                    return this._ju._dn
                },
                set: function(t) {
                    return ! t || 1 > t ? !1 : void(this._ju._dn = t)
                }
            },
            _h4: {
                get: function() {
                    return this._ju._h4
                },
                set: function(t) {
                    return ! t || 1 > t ? !1 : void(this._ju._h4 = t)
                }
            },
            _h2: {
                get: function() {
                    return this._ju._h2
                },
                set: function(t) {
                    return ! t || 0 >= t ? !1 : void(this._ju._h2 = t)
                }
            },
            _km: {
                get: function() {
                    return this._ju._he()
                },
                set: function(t) {
                    this._g5(t)
                }
            },
            _n5: {
                get: function() {
                    return this._ju._lb()
                }
            },
            _n3: {
                get: function() {
                    return this._ju._k6()
                }
            }
        }),
        _s[br] = {
            _d1: null,
            _nbk: 0,
            _9w: 0,
            _2q: !0,
            _1d: !0,
            _ju: null,
            _73: null,
            _dn: 1.3,
            _h4: 10,
            _h2: .1,
            _km: 1,
            _n5: 0,
            _n3: 0,
            _74: function() {
                this._ju._ha(this._d1._jb)
            },
            _59: function() {
                return this._1d = !1,
                    this._5f(this._d1._my[Ko], this._d1._my[td])
            },
            _5f: function(t, i) {
                return this._nbk == t && this._9w == i ? !1 : (this._nbk = t, this._9w = i, void this._d1._3p(t, i))
            },
            _dk: function(t, i, n) {
                n && (n = Math[Ea](this._h2, Math[Ia](this._h4, n)), this._km = n),
                    this._n5 = this._nbk / 2 - t * this._km,
                    this._n3 = this._9w / 2 - i * this._km,
                    this._2q = !0
            },
            _38: function(t, i) {
                t = t || this._nbk,
                    i = i || this._9w,
                    this._73[pr]( - this._n5 / this._km, -this._n3 / this._km, t / this._km, i / this._km)
            },
            _jw: function(t, i, n) {
                return this._g5(this._6d() * t, i, n)
            },
            _jy: function(t, i) {
                return this._g5(this._6d() * this._dn, t, i)
            },
            _io: function(t, i) {
                return this._g5(this._6d() / this._dn, t, i)
            },
            _g5: function(t, i, e) {
                this._6sFlag = !1,
                    t = Math[Ea](this._h2, Math[Ia](this._h4, t));
                var s = this._6d();
                return i === n && (i = this._nbk / 2, e = this._9w / 2),
                t != s && (this._2q = !0, this._d1._8m(s, t)),
                    this._ju._g5(t / this._km, i, e)
            },
            _6d: function() {
                return this._km * this._ju._km
            },
            _df: function(t, i) {
                this._ju._df(t, i)
            },
            _nb7: function(t, i, n) {
                var e = this._lb(),
                    s = this._k6(),
                    h = this._he();
                return n && (n = Math[Ea](this._h2, Math[Ia](this._h4, n))),
                    t != e || i != s || n && n != h ? (n && n != h ? (n /= this._km, this._2q = !0) : n = this._ju._km, t -= e * n, i -= s * n, this._ju._9z(n, t, i), this._d1._3k(e, s, h, arguments[0], arguments[1], arguments[2]), h != arguments[2] && this._d1._8m(h, arguments[2]), !0) : !1
            },
            _6s: function() {
                this._6sFlag = !0
            },
            _he: function() {
                return this._km * this._ju._km
            },
            _lb: function() {
                return this._n5 * this._ju._km + this._ju._n5
            },
            _k6: function() {
                return this._n3 * this._ju._km + this._ju._n3
            },
            _jj: function(t, i) {
                this._1d && this._59();
                var n = t._jb,
                    e = n[ca] || 1,
                    s = n[Ko],
                    h = n[td],
                    r = this._nbk != s,
                    f = this._9w != h,
                    a = r || f;
                a && t._topCanvas._jb[ma](this._nbk, this._9w);
                var _ = this._n5,
                    c = this._n3,
                    u = this._km;
                if (this._6sFlag) {
                    this._6sFlag = !1;
                    var o = t._25();
                    o && this._dk(o.cx, o.cy, o[Sf])
                }
                if (this._2q || i || a) return this._2q = !1,
                    this._km *= this._ju._km,
                    this._n5 = this._n5 * this._ju._km + this._ju._n5,
                    this._n3 = this._n3 * this._ju._km + this._ju._n3,
                    this._ju._km = 1,
                    this._ju._n5 = 0,
                    this._ju._n3 = 0,
                a && n[ma](this._nbk, this._9w),
                    t._nb3._ml = !0,
                    this._38(this._nbk, this._9w),
                    void((_ != this._n5 || c != this._n3 || u != this._km) && (t._3k(_, c, u, this._n5, this._n3, this._km), u != this._km && t._8m(u, this._km)));
                var d = this._ju._n5,
                    l = this._ju._n3;
                if (d || l) {
                    this._ju._n5 = 0,
                        this._ju._n3 = 0,
                        this._n5 += d,
                        this._n3 += l,
                        this._38(s, h);
                    var b = n.g;
                    if (dB) try {
                        var v = b[Ra](0, 0, n[fa], n[aa]);
                        b[y_](v, d * e, l * e)
                    } catch(y) {
                        this._ds(b, n, d * e, l * e)
                    } else this._ds(b, n, d * e, l * e);
                    t._1p(d, l, s, h),
                        t._3k(_, c, u, this._n5, this._n3, this._km)
                }
            },
            _ds: function(t, n, e, s) {
                var h = this._nbackCanvas;
                h || (h = this._nbackCanvas = i[ga](oa), h.g = h[xa](wa)),
                    h[fa] = n[fa],
                    h[aa] = n[aa],
                    h.g[Pg](n, e, s),
                    t._kg(),
                    t[Pg](h, 0, 0)
            },
            _nbl: function(t) {
                1 != t[oa][ca] && t[Sf](t[oa][ca], t[oa][ca]),
                    t[h_](this._n5, this._n3),
                    t[Sf](this._km, this._km)
            },
            _nbu: function(t) {
                return (t - this._n5) / this._km
            },
            _nbt: function(t) {
                return (t - this._n3) / this._km
            },
            _du: function(t) {
                return t * this._km + this._n5
            },
            _dv: function(t) {
                return t * this._km + this._n3
            }
        };
    var qz = function() {
        this._fi = [],
            this._j3 = new TB
    };
    qz[br] = {
        _ge: 20,
        _fi: null,
        _ml: !1,
        _j3: null,
        _kg: function() {
            this._ml = !1,
                this._fi[qh] = 0,
                this._j3[Pf]()
        },
        _hy: function() {
            return this._ml || this._fi[qh] > 0
        },
        _mo: function(t, i, n, e) {
            this._ml || 0 >= n || 0 >= e || (this._fi[Xh]({
                x: t,
                y: i,
                width: n,
                height: e
            }), this._j3[Cl](t, i, n, e))
        },
        _hi: function(t) {
            this._mo(t.x, t.y, t[fa], t[aa])
        },
        _f2: function(t, i, n, e) {
            if (!this._j3[Tl](t, i, n, e)) return ! 1;
            if (wB || this._fi[qh] >= this._ge) return ! 0;
            for (var s, h = 0,
                     r = this._fi[qh]; r > h; h++) if (s = this._fi[h], hi(t, i, n, e, s.x, s.y, s[fa], s[aa])) return ! 0;
            return ! 1
        },
        _j0: function(t, i, n) {
            if (this._ml) return t[Na](1, 0, 0, 1, 0, 0),
                void t[x_](0, 0, i[fa], i[aa]);
            t[Ux]();
            var e, s, h, r, f = n._km,
                a = this._fi,
                _ = i[ca] || 1;
            if (wB || a[qh] >= this._ge) return e = n._du(this._j3.x) * _,
                s = n._dv(this._j3.y) * _,
                h = V(e + this._j3[fa] * f * _) - (e = W(e)),
                r = V(s + this._j3[aa] * f * _) - (s = W(s)),
                t[x_](e, s, h, r),
                t[Iy](e, s, h, r),
                void t[Og]();
            for (var c, u = 0,
                     o = a[qh]; o > u; u++) c = a[u],
                e = n._du(c.x) * _,
                s = n._dv(c.y) * _,
                h = V(e + c[fa] * f * _) - (e = W(e)),
                r = V(s + c[aa] * f * _) - (s = W(s)),
                t[x_](e, s, h, r),
                t[Iy](e, s, h, r);
            t[Og]()
        }
    };
    var Bz = {};
    Bz[wz[lg]] = mB[lg],
        Bz[wz[og]] = mB[og],
        Bz[wz[dg]] = mB[dg],
        Bz[wz[_g]] = ED[cg],
        Bz[wz[Mk]] = 2,
        Bz[wz[Ek]] = 2,
        Bz[wz[BM]] = mB[BM],
        Bz[wz[AM]] = OB[Hl],
        Bz[wz[qM]] = OB[Gl],
        Bz[wz[XM]] = new CB(0, 2),
        Bz[wz[VM]] = 8,
        Bz[wz[ZM]] = 8,
        Bz[wz[QM]] = !0,
        Bz[wz[aE]] = 0,
        Bz[wz[cE]] = zg,
        Bz[wz[lE]] = !0,
        Bz[wz[oE]] = null,
        Bz[wz[dE]] = null,
        Bz[wz[JE]] = $T,
        Bz[wz[UE]] = 1.5,
        Bz[wz[pE]] = U(3438210798),
        Bz[wz[ME]] = 1,
        Bz[wz[SE]] = zg,
        Bz[wz[gp]] = !0,
        Bz[wz[mS]] = mB[vo],
        Bz[wz[zS]] = mB[vo],
        Bz[wz[To]] = 10,
        Bz[wz[ao]] = 8,
        Bz[wz[ro]] = ED[co],
        Bz[wz[no]] = !0,
        Bz[wz[Gu]] = 20,
        Bz[wz[Yu]] = .5,
        Bz[wz[Hu]] = 20,
        Bz[wz[cS]] = 20,
        Bz[wz[$E]] = OB[Hl],
        Bz[wz[OE]] = OB[Gl],
        Bz[wz[FE]] = FT,
        Bz[wz[Dk]] = 1,
        Bz[wz[zk]] = AT,
        Bz[wz[Tk]] = mB[__],
        ED[NT] = qT,
        ED[BT] = DT,
        ED[RT] = zT,
        mB[LT] = ED[NT];
    var Dz = function(t, n) {
        this._kc = t,
        S(n) && (n = i[GT](n)),
        n && n[jl] || (n = i[ga](Ao)),
            q(this, Dz, [n]),
            this._kc._$u[qd](this._14, this),
            this._kc._8.addListener(this._1t, this),
            this._kc._1w[qd](this._94, this),
            this._kc._17[qd](this._7b, this),
            this._kc._$n[qd](this._39, this),
            this._kc._$s[qd](this._48, this),
            this._nbn = {},
            this._3u(mB[LT], !0)
    };
    Dz[br] = {
        _$i: null,
        _48: function(t) {
            var i = t[r_],
                n = t[za];
            if (n) if (this._ndb) {
                var e, s;
                if (I(n)) for (var h = 0,
                                   r = n[qh]; r > h; h++) s = n[h].id,
                    e = this._mt[yl](s),
                e && (e[Jp] = i[Tc](s), e[UP]());
                else {
                    if (s = n.id, e = this._mt[yl](s), !e) return;
                    e[Jp] = i[Tc](s),
                        e[UP]()
                }
                this._nf9()
            } else {
                this._$i || (this._$i = {});
                var e, s;
                if (I(n)) for (var h = 0,
                                   r = n[qh]; r > h; h++) s = n[h].id,
                    this._$i[s] = !0;
                else s = n.id,
                    this._$i[s] = !0
            }
        },
        _kc: null,
        _d9: function(t) {
            var i = t[Uj];
            return i ? new i(t, this._kc) : void 0
        },
        _14: function() {},
        _1t: function(t) {
            if (!this._ndb) return ! 1;
            var i = t[r_],
                n = t[Ad];
            Fo == n && this._kc[Hj](),
                Uj == n ? (this._mt[gl](i.id), this._ke(i)) : Np == n && i._hw() && t[Pr] && this._5r(i);
            var e = this._mt[yl](i.id);
            e && e._ndb && e[YT](t) && this._nf9()
        },
        _44: function(t) {
            var i = this._kr(t);
            i && (i[Yp](), this._nf9())
        },
        _94: function(t) {
            if (!this._ndb) return ! 1;
            switch (this._$h = !0, t[Ad]) {
                case JB[pb]:
                    this._ke(t[za]);
                    break;
                case JB[kb]:
                    this._hb(t[za]);
                    break;
                case JB[Mb]:
                    this._it(t[za])
            }
        },
        _kg: function() {
            this._nbn = {},
                B(this, Dz, HT)
        },
        _nbn: null,
        _ke: function(t) {
            var i = this._d9(t);
            i && (this._mt[ir](i), this._ndb && (this._nbn[t.id] = t), this._nf9())
        },
        _hb: function(t) {
            if (MD[hr](t)) {
                for (var i, n = [], e = 0, s = t[qh]; s > e; e++) i = t[e].id,
                    n[Xh](i),
                    delete this._nbn[i];
                t = n
            } else t = t.id,
                delete this._nbn[t];
            this._mt[Yh](t) && this._nf9()
        },
        _it: function() {
            this._kg()
        },
        _7b: function(t) {
            return this._ndb ? void(t[r_] instanceof lz && !this._nbn[t.source.id] && (t[tb] && (this._44(t[tb]), t[tb].__6l = !0), t[Pr] && (this._44(t[Pr]), t[Pr].__6l = !0), this._5r(t[r_]))) : !1
        },
        _39: function(t) {
            return this._ndb ? void(t[r_] instanceof lz && !this._nbn[t[r_].id] && this._5r(t[r_])) : !1
        },
        _nb6: function(t) {
            return t ? this._$x() : void this._9j()
        },
        _3d: function(t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[$c](!0);
                i ? i._fb(this._kc) : t._edgeBundleInvalidateFlag = !1
            }
        },
        _$x: function() {
            var t, i = (this._kc, this._kc[ed]),
                n = this._mt,
                e = [],
                s = 1;
            if (i[XT](function(i) {
                        return i instanceof dz ? (this._3d(i), void e[Xh](i)) : (t = this._d9(i), void(t && (n[ir](t), t._hk = this._dl(i, !1, !0), i.__l7 = s++)))
                    },
                    this), n[qh]) for (var h = n._j2,
                                           s = h[qh] - 1; s >= 0; s--) t = h[s],
            t._hk && this._40(t, t[Y_]);
            for (var r, s = 0,
                     f = e[qh]; f > s; s++) if (r = e[s], t = this._d9(r)) if (t._hk = this._dl(r, !0, !0), t._hk) {
                this._40(t, r, !0),
                    n[ir](t);
                var a = r[Fc],
                    _ = r[Oc],
                    c = a.__l7 || 0;
                a != _ && (c = Math[Ea](c, _.__l7 || 0)),
                    r.__l7 = c
            } else n[ir](t);
            if (e[qh] && n._j2[nI](function(t, i) {
                    return t[Y_].__l7 - i[Y_].__l7
                }), this._$i) {
                var u = i[nd];
                for (var o in this._$i) if (u[Tc](o)) {
                    var t = n[yl](o);
                    t && (t[Jp] = !0)
                }
                this._$i = null
            }
        },
        _9j: function() {
            for (var t in this._nbn) {
                var i = this._nbn[t];
                i instanceof lz ? this._5r(i) : this._5t(i)
            }
            this._nbn = {};
            for (var n, e, s, h = this._mt._j2,
                     r = [], f = h[qh] - 1; f >= 0; f--) n = h[f],
                e = n[Y_],
                s = e instanceof dz,
            s && this._3d(e),
                n._hk = this._dl(e, s),
                n._hk ? s ? r[Xh](n) : this._40(n, e) && !this._$h && (this._$h = !0) : e.__hkChanged && n._ndb && (n.__oldBounds = {
                    x: n.$x + n[zu].x,
                    y: n.$y + n[zu].y,
                    width: n[zu][fa],
                    height: n[zu][aa]
                });
            if (r[qh]) for (var f = 0,
                                a = r[qh]; a > f; f++) n = r[f],
            this._40(n, n[Y_]) && !this._$h && (this._$h = !0)
        },
        _40: function(t, i, e) {
            if (e || e === n && i instanceof dz) return i.__55 && (i.__55 = !1, t._55()),
                this._nfa(t);
            if (i.__6l && i._hw() && (t._5j(), i.__6l = !1), this._nfa(t)) {
                var s = this._4i(i);
                return s && (s.__6l = !0),
                i[Yj]() && i[Xc](function(t) {
                        t.__55 = !0
                    },
                    this),
                    !0
            }
        },
        _3e: function(t, i) {
            var n = t[Fc],
                e = t[Oc],
                s = i[WT](n.id);
            if (n == e) return s;
            var h = i[WT](e.id);
            return Math[Ea](s, h)
        },
        _3h: function(t, i) {
            var n = this[ed]._ga(t);
            return n ? i[WT](n.id) : 0
        },
        _5r: function(t) {
            var i = this._mt,
                n = i[yl](t.id);
            if (!n) throw new Error(VT + t[Er] + UT);
            var s = this._3h(t, i),
                h = [n];
            t[Ah]() && e(t,
                function(t) {
                    t instanceof lz && (n = i[yl](t.id), n && h[Xh](n))
                },
                this),
                this._5b(i, s, h)
        },
        _5t: function(t) {
            var i = this._mt[yl](t.id);
            if (i) {
                var n = this._3e(t, this._mt);
                this._mt[QT](i, n)
            }
        },
        _5b: function(t, i, n) {
            function e(t) {
                s[ir](t)
            }
            var s = new pB;
            l(n,
                function(n) {
                    i = t[JT](n, i),
                        n[Y_][Xc](e)
                },
                this),
            0 != s[qh] && s[uc](this._5t, this)
        },
        _8l: function(t) {
            return t[$c](!0)
        },
        _5v: function(t) {
            if (!t[dT]()) return ! 1;
            var i = t[$c](!0);
            i && i[ZT]() !== !1 && this._nf9()
        },
        _4i: function(t) {
            var i = be(t);
            return i && i[Np] ? i: null
        },
        _gc: function(t) {
            return be(t)
        },
        _3i: function(t, i, n) {
            t._$w = !1;
            var e = t._hk;
            t._hk = this._5d(t, i),
            n || t._hk == e || (t.__hkChanged = !0)
        },
        _5d: function(t, i) {
            return this._3w(t, i) ? !this._kc._hkFilter || this._kc._hkFilter(t) !== !1 : !1
        },
        _dl: function(t, i, n) {
            return t._$w && this._3i(t, i, n),
                t._hk
        },
        _9x: function(t) {
            return ! this._kc._4d || this._kc._4d == Qs(t)
        },
        _3w: function(t, i) {
            if (t[KT] === !1) return ! 1;
            if (i === n && (i = t instanceof dz), !i) {
                if (this._kc._4d) {
                    if (!t[Bc](this._kc._4d)) return ! 1
                } else if (Qs(t)) return ! 1;
                return ! t._dt
            }
            var e = t[Fc],
                s = t[Oc];
            if (!e || !s) return ! 1;
            if (e == s && !t[qc]()) return ! 1;
            if (t[dT]()) {
                var h = t[$c](!0);
                if (h && !h._dl(t)) return ! 1
            }
            var r = this._dl(e, !1),
                f = this._dl(s, !1);
            return r && f ? !0 : !1
        },
        _78: null,
        _77: null,
        _3u: function(t, i) {
            return i || t != this._78 ? (this._78 = t, this._77 && (this._77._ia(), delete this._77), t == ED[NT] ? void(this._77 = new ih(this, this._my)) : t == ED[RT] ? void(this._77 = new th(this, this._my)) : void 0) : !1
        },
        _3k: function(t, i, n, e, s, h) {
            this._kc._4y(new LB(this._kc, zo, {
                    tx: e,
                    ty: s,
                    scale: h
                },
                {
                    tx: t,
                    ty: i,
                    scale: n
                })),
                this._63()
        },
        _8m: function(t, i) {
            this._kc._4y(new LB(this._kc, Sf, i, t))
        },
        _63: function() {
            this._77 && this._77._jj(),
                this._kc._4y(new LB(this._kc, $a))
        },
        _15: function(t, i) {
            this._kc._4y(new LB(this._kc, tC, i, t)),
                this._63()
        }
    },
        N(Dz, as),
        J(Dz[br], {
            graphModel: {
                get: function() {
                    return this._kc._kcModel
                }
            }
        });
    var Rz = function(i, n) {
        this._$u = new VB,
            this._$u.on(function(t) {
                    Ep == t[Ad] && this[Hj]()
                },
                this),
            this._1w = new VB,
            this._1w[qd](function(t) { ! this[Ep] || t[Ad] != JB[Mb] && t[Ad] != JB[kb] || this[ed][Po](this[Ep]) || (this[Ep] = null)
                },
                this),
            this._8 = new VB,
            this._17 = new VB,
            this._$n = new VB,
            this._$s = new VB,
            this[ed] = n || new Je,
            this._8g = new Dz(this, i),
            this._37 = new Eh(this),
            this._1j = new VB,
            this._onresize = fD(t, iC,
                function() {
                    this[nC]()
                },
                !1, this),
            this._8g._my[eC] = this[eC][Sg](this),
            this._8g._my[sC] = this[sC][Sg](this)
    };
    Rz[br] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function(t) {
            this[xT] && MD[hC](t)
        },
        getDropInfo: function(t, i) {
            var n = null;
            if (i) try {
                n = JSON[Qf](i)
            } catch(e) {}
            return n
        },
        ondrop: function(t) {
          /*用于放置之前事件*/

            if (this[xT]) {
                var i, n, e, s, h = t[rC],
                    r = h[xf](Sd),
                    f = this[fC](t, r);
                if (f ? (i = f[Kg], n = f[Ya], e = f[Cm], s = f[Rp]) : (i = h[xf](Kg), n = h[xf](Ya), e = h[xf](Cm), s = h[xf](Rp)), i || e) {
                    MD[hC](t);
                    var a = this[fd](t);
                    a = this[aC](a.x, a.y);
                    var _;
                    if (n && _C != n ? Gp == n ? _ = this[cC](e, a.x, a.y) : mp == n ? _ = this[uC](e, a.x, a.y) : zp == n ? (_ = this[oC](e, a.x, a.y), s && (s = Us(s), s && (_[Rp] = s))) : (n = Z(n), n instanceof Function && n[br] instanceof lz && (_ = new n, _[Er] = e, _[ap] = new EB(a.x, a.y), this._kcModel[ir](_))) : _ = this[dC](e, a.x, a.y), _) {
                        if (i && (i = Us(i), i && (_[Kg] = i)), t[Lm]) {
                            var c = this[wf](t); (c[Fo] || c instanceof yz) && (_[Cc] = c)
                        }

                        if (f[lC]) for (var u in f[lC]) _[u] = f[lC][u];
                        if (f[bC]) for (var u in f[bC]) _[pr](u, f[bC][u]);
                        if (f[vC] && _[Jj](f[vC]), this[yC](_, t, f) === !1) return ! 1;
                        var o = new Mh(this, Mh[gC], t, _);

                        if(this.onCreateElement)
                        {
                          this.onCreateElement(t,_);
                        }

                        return this[xC](o),
                            _
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _8g: null,
        _$u: null,
        _1w: null,
        _8: null,
        _$s: null,
        _17: null,
        _$n: null,
        _2b: function(t) {
            return this._$u[kr](t)
        },
        _4y: function(t) {
            this._$u[Mr](t)
        },
        isVisible: function(t) {
            return this._8g._dl(t)
        },
        isMovable: function(t) {
            return t instanceof lz && t[wC] !== !1
        },
        isSelectable: function(t) {
            return t[mC] !== !1
        },
        isEditable: function(t) {
            return t[xT] !== !1
        },
        isRotatable: function(t) {
            return t[dP] !== !1
        },
        isResizable: function(t) {
            return t[jC] !== !1
        },
        canLinkFrom: function(t) {
            return t[pC] !== !1
        },
        canLinkTo: function(t) {
            return t[pC] !== !1
        },
        createNode: function(t, i, n) {
            var e = new lz(t, i, n);
            return this._kcModel[ir](e),
                e
        },
        createText: function(t, i, n) {
            var e = new Ke(t, i, n);
            return this._kcModel[ir](e),
                e
        },
        createShapeNode: function(t, i, n, e) {
            E(i) && (e = n, n = i, i = null);
            var s = new bz(t, i);
            return s[rp] = new EB(n, e),
                this._kcModel[ir](s),
                s
        },
        createGroup: function(t, i, n) {
            var e = new yz(t, i, n);
            return this._kcModel[ir](e),
                e
        },
        createEdge: function(t, i, n) {
            if (t instanceof lz) {
                var e = n;
                n = i,
                    i = t,
                    t = e
            }
            var s = new dz(i, n);
            return t && (s[Gj] = t),
                this._kcModel[ir](s),
                s
        },
        addElement: function(t) {
            this._kcModel[ir](t)
        },
        removeElement: function(t) {
            this._kcModel[Yh](t)
        },
        clear: function() {
            this._kcModel[Pf]()
        },
        getStyle: function(t, i) {
            var e = t._iz[i];
            return e !== n ? e: this._iz && (e = this._iz[i], e !== n) ? e: Bz[i]
        },
        translate: function(t, i, n) {
            return n ? this[kC](this.tx + t, this.ty + i, this[Sf], n) : this._8g._df(t, i)
        },
        translateTo: function(t, i, n, e) {
            if (e) {
                var s = this._6a();
                return s._ld(t, i, n, e)
            }
            return this._8g._nb7(t, i, n)
        },
        centerTo: function(t, i, n, e) {
            return (!n || 0 >= n) && (n = this[Sf]),
                this[kC](this[fa] / 2 - t * n, this[aa] / 2 - i * n, n, e)
        },
        moveToCenter: function(t, i) {
            this[MC](function() {
                    var n = this[$a];
                    this[EC](n.cx, n.cy, t, i)
                },
                this)
        },
        zoomToOverview: function(t) {
            return t ? this[MC](function() {
                    var i = this._8g._25();
                    i && this[EC](i.cx, i.cy, i[Sf], t)
                },
                this) : void this._8g._6s()
        },
        zoomAt: function(t, i, e, s) {
            if (s === n && (s = mB[rd]), i === n && (i = this[fa] / 2), i = i || 0, e === n && (e = this[aa] / 2), e = e || 0, s) {
                var h = this[Sf];
                return t = h * t,
                    t >= this[Zg] || t <= this[SC] ? !1 : (i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this[kC](i, e, t, s))
            }
            return this._8g._jw(t, i, e)
        },
        zoomOut: function(t, i, n) {
            return this[PC](1 / this[IC], t, i, n)
        },
        zoomIn: function(t, i, n) {
            return this[PC](this[IC], t, i, n)
        },
        _6a: function() {
            return this._panAnimation || (this._panAnimation = new Xz(this)),
                this._panAnimation
        },
        enableInertia: !0,
        _9m: function(t, i) {
            var n = this._6a();
            return n._gm(t || 0, i || 0)
        },
        getUI: function(t) {
            return K(t) ? this._8g._3y(t) : this._8g._kr(t)
        },
        getUIByMouseEvent: function(t) {
            return this._8g._3y(t)
        },
        hitTest: function(t) {
            return this._8g._hn(t)
        },
        globalToLocal: function(t) {
            return this._8g._8r(t)
        },
        toCanvas: function(t, i) {
            return this._8g._fn(t, i)
        },
        toLogical: function(t, i) {
            return K(t) ? this._8g._$d(t) : this._8g._dw(t, i)
        },
        getElementByMouseEvent: function(t) {
            var i = this._8g._3y(t);
            return i ? i[Y_] : void 0
        },
        getElement: function(t) {
            if (K(t)) {
                var i = this._8g._3y(t);
                return i ? i[Y_] : null
            }
            return this._kcModel[yl](t)
        },
        invalidate: function() {
            this._8g._nf9()
        },
        invalidateUI: function(t) {
            t[Wj](),
                this[Wj]()
        },
        invalidateElement: function(t) {
            this._8g._44(t)
        },
        getUIBounds: function(t) {
            return this._8g._nbh(t)
        },
        forEachVisibleUI: function(t, i) {
            return this._8g._4z(t, i)
        },
        forEachReverseVisibleUI: function(t, i) {
            return this._8g._10(t, i)
        },
        forEachUI: function(t, i) {
            return this._8g._dp(t, i)
        },
        forEachReverseUI: function(t, i) {
            return this._8g._57(t, i)
        },
        forEach: function(t, i) {
            return this._kcModel[uc](t, i)
        },
        getElementByName: function(t) {
            var i;
            return this._kcModel[uc](function(n) {
                return n[Er] == t ? (i = n, !1) : void 0
            }),
                i
        },
        focus: function(i) {
            if (i) {
                var n = t[TC] || t[df],
                    e = t[CC] || t[bf];
                return this[vv][md](),
                    void t[OC](n, e)
            }
            this[vv][md]()
        },
        callLater: function(t, i, n) {
            this._8g[MC](t, i, n)
        },
        exportImage: function(t, i) {
            return rh(this, t, i)
        },
        setSelection: function(t) {
            return this._kcModel._selectionModel[pr](t)
        },
        select: function(t) {
            return this._kcModel._selectionModel[Id](t)
        },
        unselect: function(t) {
            return this._kcModel._selectionModel[$C](t)
        },
        reverseSelect: function(t) {
            return this._kcModel._selectionModel[FC](t)
        },
        selectAll: function() {
            sh(this)
        },
        unSelectAll: function() {
            this[nd][Pf]()
        },
        unselectAll: function() {
            this[AC]()
        },
        isSelected: function(t) {
            return this._kcModel._selectionModel[Po](t)
        },
        sendToTop: function(t) {
            ge(this._kcModel, t)
        },
        sendToBottom: function(t) {
            xe(this._kcModel, t)
        },
        moveElements: function(t, i, n) {
            var e = [],
                s = new pB;
            return l(t,
                function(t) {
                    t instanceof lz ? e[Xh](t) : t instanceof dz && s[ir](t)
                }),
                this._ev(e, i, n, s)
        },
        _ev: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[qh] && 0 == e[qh]) return ! 1;
            if (0 != t[qh]) {
                var s = this._4t(t);
                e = this._58(s, e),
                    l(s,
                        function(t) {
                            var e = t[rp];
                            e ? t[NC](e.x + i, e.y + n) : t[NC](i, n)
                        })
            }
            return ! 0
        },
        _58: function(t, i) {
            return i
        },
        _4t: function(t) {
            var i = new pB;
            return l(t,
                function(t) { ! this[qC](t),
                    i[ir](t),
                    ve(t, i, this._movableFilter)
                },
                this),
                i
        },
        reverseExpanded: function(t) {
            return this._8g._5v(t)
        },
        _37: null,
        _1j: null,
        beforeInteractionEvent: function(t) {
            return this._1j[kr](t)
        },
        onInteractionEvent: function(t) {
            this._1j[Mr](t)
        },
        addCustomInteraction: function(t) {
            this._37.addCustomInteraction(t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function(t) {
            return t[BC] || t[Er]
        },
        updateViewport: function() {
            this._8g._3q()
        },
        destroy: function() {
            this._4y(new LB(this, Ru, !0, this._iaed)),
                this._iaed = !0,
                aD(t, iC, this._onresize),
                z(this, DC),
                this._37[Ru](),
                this[ed] = new Je;
            var i = this[vv];
            this._8g._ia(),
            i && (i[RC] = "")
        },
        onPropertyChange: function(t, i, n) {
            this._$u[qd](function(e) {
                e[Ad] == t && i[Bh](n, e)
            })
        },
        removeSelection: function() {
            var t = this[nd]._j2;
            return t && 0 != t[qh] ? (t = t[Rh](), this._kcModel[Yh](t), t) : !1
        },
        removeSelectionByInteraction: function(t) {
            var i = this[nd][Nd];
            return i && 0 != i[qh] ? void MD[cy](zC + i[qh],
                function() {
                    var i = this[LC]();
                    if (i) {
                        var n = new Mh(this, Mh[GC], t, i);
                        this[xC](n)
                    }
                },
                this) : !1
        },
        createShapeByInteraction: function(t, i, n, e) {
            var s = new fR(i);
            i[qh] > 2 && s[w_]();
            var h = this[uC](YC, s, n, e);
            this[yC](h, t);
            var r = new Mh(this, Mh[gC], t, h);
            return this[xC](r),
                h
        },
        createLineByInteraction: function(t, i, n, e) {
            var s = new fR(i),
                h = this[uC](HC, s, n, e);
            h[Au](MD[XC][Xk], null),
                h[Au](MD[XC][Vk], null),
                h[Au](MD[XC][sM], !0),
                this[yC](h, t);
            var r = new Mh(this, Mh[gC], t, h);
            return this[xC](r),
                h
        },
        createEdgeByInteraction: function(t, i, n, e) {
            var s = this[WC](VC, t, i);
            if (e) s._9r = e;
            else {
                var h = this[UC],
                    r = this[po];
                this[QC] && (h = this[QC][Uj] || h, r = this[QC][po] || r),
                h && (s[Uj] = h),
                r && (s[po] = r)
            }
            this[yC](s, n);
            var f = new Mh(this, Mh[gC], n, s);
            return this[xC](f),
                s
        },
        onElementCreated: function(t) { ! t[Cc] && this[Ep] && (t[Cc] = this[Ep])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function(t, i, n, e) {
            var s = this;
            n[JC](e.x, e.y, i[za], this[Lu](t, wz[RM]),
                function(n) {
                    return s[ZC](t, i, n, i[Cc])
                })
        },
        onLabelEdit: function(t, i, n, e) {
            return n || this[KC] ? void(Cm == i[Er] ? t[Er] = n: e._gj(i, n) === !1 && (i[za] = n, this[tO](t))) : (MD[ay](iO), !1)
        },
        setInteractionMode: function(t, i) {
            this.interactionMode = t,
                this[QC] = i
        },
        upSubNetwork: function() {
            return this._4d ? this[Ep] = Qs(this._4d) : !1
        },
        _$w: !1,
        invalidateVisibility: function() {
            this._$w = !0,
                this[Wj]()
        }
    },
        J(Rz[br], {
            center: {
                get: function() {
                    return this[aC](this[vv][Ko] / 2, this[vv][td] / 2)
                }
            },
            visibleFilter: {
                get: function() {
                    return this._hkFilter
                },
                set: function(t) {
                    this._hkFilter = t,
                        this[Wj]()
                }
            },
            topCanvas: {
                get: function() {
                    return this._8g._topCanvas
                }
            },
            propertyChangeDispatcher: {
                get: function() {
                    return this._$u
                }
            },
            listChangeDispatcher: {
                get: function() {
                    return this._1w
                }
            },
            dataPropertyChangeDispatcher: {
                get: function() {
                    return this._8
                }
            },
            selectionChangeDispatcher: {
                get: function() {
                    return this._$s
                }
            },
            parentChangeDispatcher: {
                get: function() {
                    return this._17
                }
            },
            childIndexChangeDispatcher: {
                get: function() {
                    return this._$n
                }
            },
            bounds: {
                get: function() {
                    return this._8g._4k()
                }
            },
            interactionDispatcher: {
                get: function() {
                    return this._1j
                }
            },
            cursor: {
                set: function(t) {
                    this[vv][sf][nO] = t || this._37[ld]
                },
                get: function() {
                    return this[vv][sf][nO]
                }
            },
            interactionMode: {
                get: function() {
                    return this._37._nfurrentMode
                },
                set: function(t) {
                    this._37[Bd] = t
                }
            },
            scaleStep: {
                get: function() {
                    return this._8g._dn
                },
                set: function(t) {
                    this._8g._dn = t
                }
            },
            maxScale: {
                get: function() {
                    return this._8g._h4
                },
                set: function(t) {
                    this._8g._h4 = t
                }
            },
            minScale: {
                get: function() {
                    return this._8g._h2
                },
                set: function(t) {
                    this._8g._h2 = t
                }
            },
            scale: {
                get: function() {
                    return this._8g._km
                },
                set: function(t) {
                    return this._8g._km = t
                }
            },
            tx: {
                get: function() {
                    return this._8g._n5
                }
            },
            ty: {
                get: function() {
                    return this._8g._n3
                }
            },
            styles: {
                get: function() {
                    return this._iz
                },
                set: function(t) {
                    this._iz = t
                }
            },
            selectionModel: {
                get: function() {
                    return this._kcModel._selectionModel
                }
            },
            graphModel: {
                get: function() {
                    return this._kcModel
                },
                set: function(t) {
                    if (this._kcModel == t) return ! 1;
                    var i = this._kcModel,
                        n = new LB(this, ed, i, t);
                    return this._2b(n) === !1 ? !1 : (null != i && (i[eO][yb](this._$u, this), i[Nb][yb](this._1w, this), i[Bb][yb](this._8, this), i[zb][yb](this._17, this), i[Lb][yb](this._$n, this), i[qb][yb](this._$s, this)), this._kcModel = t, this._kcModel && (this._kcModel[eO][qd](this._$u, this), this._kcModel.listChangeDispatcher[qd](this._1w, this), this._kcModel[Bb][qd](this._8, this), this._kcModel[zb][qd](this._17, this), this._kcModel[Lb][qd](this._$n, this), this._kcModel[qb][qd](this._$s, this)), this._8g && this._8g._kp(), void this._4y(n))
                }
            },
            count: {
                get: function() {
                    return this._kcModel[qh]
                }
            },
            width: {
                get: function() {
                    return this[vv][Ko]
                }
            },
            height: {
                get: function() {
                    return this[vv][td]
                }
            },
            viewportBounds: {
                get: function() {
                    return this._8g._73
                }
            },
            html: {
                get: function() {
                    return this._8g._my
                }
            },
            navigationType: {
                get: function() {
                    return this._8g._78
                },
                set: function(t) {
                    this._8g._3u(t)
                }
            },
            _4d: {
                get: function() {
                    return this._kcModel._4d
                }
            },
            currentSubNetwork: {
                get: function() {
                    return this._kcModel[Ep]
                },
                set: function(t) {
                    this._kcModel[Ep] = t
                }
            }
        }),
        Js[br] = {
            initialize: function() {
                B(this, Js, bk),
                    this[yP]()
            },
            _nbo: function() {
                this._mi = new fR,
                    this[xP] = new Oz(this._mi),
                    this[xP][G_] = !1,
                    this[QP](this[xP], 0),
                    this[lI] = this[xP]
            },
            checkBody: function() {
                return this._5e() ? (this._2m = !0, this[xP] ? (this[xP][KT] = !0, this[lI] = this[xP]) : (this._nbo(), Ez[ZP](this)), void(this[Kg] && (this[Kg][KT] = !1))) : (this[Kg] ? (this[Kg][KT] = !0, this[lI] = this[Kg]) : this._ndi(), void(this[xP] && (this[xP][KT] = !1)))
            },
            _5e: function() {
                return this[Y_]._hw() && this[Y_][Np]
            },
            _mi: null,
            _2m: !0,
            _5j: function() {
                this._1r = !0,
                    this._2m = !0
            },
            doValidate: function() {
                if (this._2m && this._5e()) {
                    if (this._2m = !1, this[xP][Yp](), this[Y_][Rp]) {
                        this[xP][za] = this[Y_][Rp];
                        var t = this._2y();
                        return this[xP][Kp] = t.x + t[fa] / 2,
                            this[xP][tk] = t.y + t[aa] / 2,
                            this[xP][lp] = {
                                width: t[fa],
                                height: t[aa]
                            },
                            rs[br].doValidate[Bh](this)
                    }
                    this[xP][Kp] = 0,
                        this[xP][tk] = 0;
                    var i = this._8n(this[Y_][Dp]);
                    this._mi[Pf](),
                        i instanceof TB ? Ie(this._mi, i.x, i.y, i[fa], i[aa], i.rx, i.ry) : i instanceof nn ? Te(this._mi, i) : i instanceof en && Ce(this._mi, i),
                        this._mi._6l = !0,
                        this[xP][Yp]()
                }
                return rs[br][vk][Bh](this)
            },
            _79: function(t, i, n) {
                switch (t) {
                    case ED[sO]:
                        return new nn(0, 0, Math[Ea](i, n) / 2);
                    case ED[hO]:
                        return new en(0, 0, i, n);
                    default:
                        return new TB( - i / 2, -n / 2, i, n)
                }
            },
            _2y: function() {
                return this._8n(null)
            },
            _8n: function(t) {
                var i = this[za],
                    n = i[s_],
                    e = i[Bp],
                    s = 60,
                    h = 60;
                if (e && (s = e[fa], h = e[aa]), !i[Ah]()) return this._79(t, s, h);
                var r, f = this[Y_]._f3._j2; (t == ED[sO] || t == ED[hO]) && (r = []);
                for (var a, _, c, u, o = new TB,
                         d = 0,
                         l = f[qh]; l > d; d++) {
                    var b = f[d];
                    if (this[jo][sd](b)) {
                        var v = this[jo][mf](b);
                        v && (a = v.$x + v._fe.x, _ = v.$y + v._fe.y, c = v._fe[fa], u = v._fe[aa], o[Cl](a, _, c, u), r && (r[Xh]({
                            x: a,
                            y: _
                        }), r[Xh]({
                            x: a + c,
                            y: _
                        }), r[Xh]({
                            x: a + c,
                            y: _ + u
                        }), r[Xh]({
                            x: a,
                            y: _ + u
                        })))
                    }
                }
                n && o[C_](n);
                var y = this[Y_][rp];
                y ? y[Op] && (y[Op] = !1, y.x = o.cx, y.y = o.cy) : y = this[Y_][rp] = {
                    x: o.cx,
                    y: o.cy
                };
                var g, x = y.x,
                    w = y.y;
                if (t == ED[sO]) {
                    g = sn(r),
                        g.cx -= x,
                        g.cy -= w;
                    var m = Math[Ea](s, h) / 2;
                    return g.r < m && (g.cx += m - g.r, g.cy += m - g.r, g.r = m),
                        g
                }
                return t == ED[hO] ? (g = hn(r, o), g.cx -= x, g.cy -= w, g[fa] < s && (g.cx += (s - g[fa]) / 2, g[fa] = s), g[aa] < h && (g.cy += (h - g[aa]) / 2, g[aa] = h), g) : (g = o, o[fa] < s && (o[fa] = s), o[aa] < h && (o[aa] = h), o[mg]( - x, -w), g)
            },
            _$z: function(t, i, n) {
                if (!this._5e()) return B(this, Js, rO, arguments);
                var e = this._nby[VP](this, t, i, n);
                return e = mz[VP](this, t, i, n) || e,
                    e = Mz[VP](this, t, i, n) || e,
                Ez[VP](this, t, i, n) || e
            }
        },
        N(Js, rs);
    var zz = {
        draw: function() {}
    };
    mB[Qo] = fO,
        mB[Uo] = aO;
    var Lz = {
            position: Wo,
            "text-align": Eo
        },
        Gz = {
            padding: _O,
            transition: cO
        },
        Yz = {
            position: uO,
            display: oO
        };
    li(dO, "opacity:0.7;vertical-align:middle;"),
        li(".Q-Graph-Nav img:hover,img.hover", lO),
    bB || (li(bO, vO + hD(yO) + gO), li(xO, wO + hD(yO) + mO)),
        th[br] = {
            _nf3: function(t, i) {
                return t._hk == i ? !1 : (t._hk = i, void(t[sf][Sj] = i ? "block": Xo))
            },
            _3p: function(t, i) {
                var n = i / 2 - this._left._img[td] / 2 + ua;
                this._left._img[sf][gf] = n,
                    this._right._img[sf][gf] = n,
                    this._navPane[sf][fa] = t + ua,
                    this._navPane[sf][aa] = i + ua
            },
            _nd6: function(t, i, n, e) {
                this._nf3(this._top, t),
                    this._nf3(this._left, i),
                    this._nf3(this._nbottom, n),
                    this._nf3(this._right, e)
            },
            _ia: function() {
                var t = this._navPane[Cj];
                t && t[Xb](this._navPane)
            },
            _jj: function() {
                var t = this._d1._kc;
                if (t) {
                    var i = t[$a];
                    if (i[H_]()) return void this._nd6(!1, !1, !1, !1);
                    var n = t[jO],
                        e = n.y > i.y + 1,
                        s = n.x > i.x + 1,
                        h = n[Wr] < i[Wr] - 1,
                        r = n[Vr] < i[Vr] - 1;
                    this._nd6(e, s, h, r)
                }
            }
        };
    var Hz = 8;
    li(pO, kO),
        li(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + hD(yO) + ": background-color 0.2s linear;"),
        li(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
        li(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
        li(".Q-Graph-ScrollBar--V.Both", MO),
        li(".Q-Graph-ScrollBar--H.Both", EO),
    bB || (li(SO, vO + hD(yO) + PO), li(".Q-Graph:hover .Q-Graph-ScrollPane", wO + hD(yO) + ":opacity 0.3s linear;")),
        ih[br] = {
            _ia: function() {
                this._verticalDragSupport._ia(),
                    this._horizontalDragSupport._ia(),
                    delete this._verticalDragSupport,
                    delete this._horizontalDragSupport,
                this._m2[Cj] && this._m2[Cj][Xb](this._m2)
            },
            _m2: null,
            _ndl: null,
            _8u: null,
            init: function(t) {
                var n = i[ga](Ao);
                n[Uh] = IO,
                    oi(n, {
                        width: Vo,
                        height: Vo,
                        position: uO
                    });
                var e = i[ga](Ao);
                e[Uh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
                var s = i[ga](Ao);
                s[Uh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
                    n[qu](e),
                    n[qu](s),
                    t[qu](n),
                    this._m2 = n,
                    this._8u = s,
                    this._ndl = e,
                    s[TO] = !0;
                var h = this,
                    r = {
                        ondrag: function(t, i) {
                            var n = h._d1._kc;
                            if (n) {
                                var e = i[TO],
                                    s = e ? t.dx: t.dy;
                                if (s && i[Sf]) {
                                    var r = n[Sf] / i[Sf];
                                    e ? n[h_]( - r * s, 0) : n[h_](0, -r * s),
                                        MD[hC](t)
                                }
                            }
                        },
                        enddrag: function(t, i) {
                            var n = h._d1._kc;
                            if (n && n[CO]) {
                                var e = i[TO],
                                    s = e ? t.vx: t.vy;
                                if (Math[Ur](s) > .1) {
                                    var r = n[Sf] / i[Sf];
                                    s *= r,
                                        e ? n._9m( - s, 0) : n._9m(0, -s)
                                }
                            }
                        }
                    };
                this._verticalDragSupport = new ki(e, r),
                    this._horizontalDragSupport = new ki(s, r)
            },
            _jj: function() {
                var t = this._d1._kc;
                if (t) {
                    var i = t[$a];
                    if (i[H_]()) return this._4m(!1),
                        void this._4n(!1);
                    var n = t[jO],
                        e = t[fa],
                        s = t[aa],
                        h = t[Sf],
                        r = 1 / h,
                        f = n.x > i.x + r || n[Vr] < i[Vr] - r,
                        a = n.y > i.y + r || n[Wr] < i[Wr] - r,
                        _ = f && a;
                    _ ? (k(this._ndl, OO), k(this._8u, OO)) : (M(this._ndl, OO), M(this._8u, OO)),
                        this._4m(f, n, i, _ ? e - Hz: e),
                        this._4n(a, n, i, _ ? s - Hz: s)
                }
            },
            _4m: function(t, i, n, e) {
                if (!t) return this._8u[sf][Sj] = Xo,
                    void(this._8u[Sf] = 0);
                var s = Math[Ia](i.x, n.x),
                    h = Math[Ea](i[Vr], n[Vr]),
                    r = h - s,
                    f = e / r;
                this._8u[Sf] = f,
                    this._8u[sf][yf] = parseInt((i.x - s) * f) + ua,
                    this._8u[sf][Vr] = parseInt((h - i[Vr]) * f) + ua,
                    this._8u[sf][Sj] = ""
            },
            _4n: function(t, i, n, e) {
                if (!t) return this._ndl[sf][Sj] = Xo,
                    void(this._ndl[Sf] = 0);
                var s = Math[Ia](i.y, n.y),
                    h = Math[Ea](i[Wr], n[Wr]),
                    r = h - s,
                    f = e / r;
                this._ndl[Sf] = f,
                    this._ndl[sf][gf] = parseInt((i.y - s) * f) + ua,
                    this._ndl[sf][Wr] = parseInt((h - i[Wr]) * f) + ua,
                    this._ndl[sf][Sj] = ""
            }
        },
        nh[br] = {
            shape: null,
            initialize: function() {
                B(this, nh, bk),
                    this._ndi(),
                    Iz[ZP](this)
            },
            _ndi: function() {
                this[Kg] = new Fz(this[Y_][wp]),
                    this[QP](this[Kg], 0),
                    this[lI] = this[Kg]
            },
            invalidateShape: function() {
                this[Kg][Yp](),
                    this[UP]()
            },
            _$z: function(t, i, n) {
                var e = this._nby[VP](this, t, i, n);
                return e = mz[VP](this, t, i, n) || e,
                Iz[VP](this, t, i, n) || e
            },
            doValidate: function() {
                this[lI] && (this[lI][m_] = null != this._3f, this[lI][bp] = this._3f);
                var t = this[Y_][rp],
                    i = 0,
                    n = 0;
                t && (i = t.x, n = t.y);
                var e = this.$x != i || this.$y != n;
                return e && (this[_I] = !0),
                    this.$x = i,
                    this.$y = n,
                Cz[br][vk][Bh](this) || e
            }
        },
        N(nh, Cz),
        J(nh[br], {
            length: {
                get: function() {
                    return this[za][qh]
                }
            }
        }),
        eh[br] = {
            _mh: function() {
                this._jb[sf][$O] = KT
            },
            _jc: function() {
                this._jb[sf][$O] = Ho
            },
            clear: function() {
                this._9l[Pf](),
                    this._nf9()
            },
            contains: function(t) {
                return t instanceof Object && t.id && (t = t.id),
                    this._9l[Tc](t)
            },
            addDrawable: function(t, i) {
                if (i) {
                    var n = {
                        id: ++sB,
                        drawable: t,
                        scope: i
                    };
                    return this._9l[ir](n),
                        n
                }
                return t.id || (t.id = ++sB),
                    this._9l[ir](t),
                    t
            },
            removeDrawable: function(t) {
                return t.id ? void this._9l[Yh](t) : this._9l[gl](t)
            },
            _9l: null,
            invalidate: function() {
                this._nf9()
            },
            _nf9: function() {
                this._d1._6l || this._j7()
            },
            _j7: function() {
                di(this._jb, zo, "");
                var t = this._d1._km,
                    i = this.g;
                i[Na](1, 0, 0, 1, 0, 0),
                    i[x_](0, 0, this._jb[fa], this._jb[aa]),
                    i[Ig](),
                    this._d1._ju._nbl(i);
                for (var n = this._9l._j2,
                         e = 0,
                         s = n[qh]; s > e; e++) i[Ig](),
                    i[Ux](),
                    this._gz(i, n[e], t),
                    i[Gg]();
                i[Gg]()
            },
            _gz: function(t, i, n) {
                return i instanceof Function ? void i(t, n) : void(i[FO] instanceof Function && i[gr] && i[FO][Bh](i[gr], t, n))
            }
        },
        mB[rd] = !0;
    var Xz = function(t) {
        this._kc = t
    };
    mB[AO] = 600,
        mB[NO] = mD[qO],
        Xz[br] = {
            _kc: null,
            _nd: .001,
            _ep: null,
            _nff: function(t) {
                return t > 1 ? 1 : -1 > t ? -1 : t
            },
            _gm: function(t, i) {
                t *= .6,
                    i *= .6,
                    t = this._nff(t),
                    i = this._nff(i),
                    this._lr();
                var n = Math[Pa](t * t + i * i);
                if (.01 > n) return ! 1;
                var e = Math[Ia](mB[AO], n / this._nd);
                this._speedX = t,
                    this._speedY = i,
                    this._ndX = t / e,
                    this._ndY = i / e,
                    this._ep = new pD(this._6e, this, e, mD[BO]),
                    this._ep._kn()
            },
            _6e: function(t, i) {
                if (0 != t) {
                    var n = this._speedX * i - .5 * this._ndX * i * i,
                        e = this._speedY * i - .5 * this._ndY * i * i;
                    this._speedX -= this._ndX * i,
                        this._speedY -= this._ndY * i,
                        this._kc[h_](n, e)
                }
            },
            _lr: function() {
                this._ep && this._ep._lr()
            },
            _ig: function(t) {
                var i = this._fromTX + (this._toTX - this._fromTX) * t,
                    n = this._fromTY + (this._toTY - this._fromTY) * t,
                    e = this._fromScale + (this._toScale - this._fromScale) * t;
                this._kc[kC](i, n, e)
            },
            _ld: function(t, i, n, e) {
                var s = this._kc,
                    h = s[Sf];
                if (0 >= n && (n = h), this._lr(), t != s.tx || i != s.ty || n != h) {
                    var r, f, a;
                    e instanceof Object && (r = e[DO], f = e[RO], a = e[zO]);
                    var _ = s.tx,
                        c = s.ty;
                    if (!r) {
                        var u = SB(t, i, _, c);
                        if (r = u / 2, n != h) {
                            var o = n > h ? n / h: h / n;
                            r = Math[Ea](r, 50 * o)
                        }
                    }
                    f = f || mB[AO],
                        a = a || mB[NO],
                        r = Math[Ia](f, r),
                        this._fromTX = _,
                        this._fromTY = c,
                        this._fromScale = h,
                        this._toTX = t,
                        this._toTY = i,
                        this._toScale = n,
                        this._ep = new pD(this._ig, this, r, a),
                        this._ep._kn()
                }
            }
        },
        mB[LO] = 8,
        mB[GO] = 4,
        mB[YO] = 30,
        mB[HO] = 20;
    var Wz = Math.PI / 4;
    fh[br] = {
        onElementRemoved: function(t, i) {
            this[XO] && (t == this[XO] || I(t) && w(t, this[XO])) && this[Ru](i)
        },
        onClear: function(t) {
            this[XO] && this[Ru](t)
        },
        destroy: function() {
            delete this[XO],
                this[WO]()
        },
        invalidate: function() {
            this[od][Wj]()
        },
        removeDrawable: function() {
            this._fvId && (this[od][WO](this._fvId), delete this._fvId, this[Wj]())
        },
        addDrawable: function() {
            this._fvId || (this._fvId = this[od][VO](this[UO], this).id, this.invalidate())
        },
        doDraw: function() {},
        escapable: !0,
        onkeydown: function(t, i) {
            this[QO] && 27 == t[Ym] && (O(t), this[Ru](i))
        }
    },
        MD[JO] = mh,
        ah[br] = {
            defaultCursor: bd,
            getInteractionInstances: function(t) {
                if (!this[dd]) return null;
                for (var i = [], n = 0, e = this[dd][qh]; e > n; n++) {
                    var s = this[dd][n];
                    s instanceof Function ? i[Xh](new s(t)) : s instanceof Object && i[Xh](s)
                }
                return i
            }
        },
        _h[br] = {
            _es: null,
            _jq: null,
            destroy: function() {
                B(this, _h, Ru, arguments),
                    delete this._jq,
                    delete this._9g,
                    delete this._es
            },
            doDraw: function(t) {
                var i = this[Yf];
                i && (i[uc](function(i) {
                        this[ZO](t, i)
                    },
                    this), this[KO] && t[w_](), this[t$](t))
            },
            styleDraw: function(t) {
                var i = ch(this[jo][QC], this[i$]());
                i[i_] && (t[i_] = i[i_], i[Ax] && (t[Ax] = i[Ax]), i[Nx] && (t[Nx] = i[Nx]), i[W_] && (t[W_] = i[W_], t[Z_] = i[Z_] || 0), t[Bg] = i[Bg], t[Ba]()),
                i[Tg] && (t[Tg] = i[Tg], t[Da]())
            },
            drawPoint: function(t, i, n) {
                if (n) return void t[Uc](i.x, i.y);
                if (MD[hr](i)) {
                    var e = i[0],
                        s = i[1];
                    t[pg](e.x, e.y, s.x, s.y)
                } else t[Qc](i.x, i.y)
            },
            _gh: function(t) {
                this._jq || (this._jq = [], this[VO]()),
                    this._jq[Xh](t),
                    this[Wj]()
            }
        },
        J(_h[br], {
            currentPoint: {
                get: function() {
                    return this._9g
                },
                set: function(t) {
                    this._9g = t,
                        this[Wj]()
                }
            },
            points: {
                get: function() {
                    return this._9g && this._jq && this._jq[qh] ? this._jq[Lh](this._9g) : void 0
                }
            }
        }),
        N(_h, fh),
        uh[br] = {
            destroy: function() {
                B(this, uh, Ru, arguments),
                    delete this._knTime,
                    delete this[n$]
            },
            doDraw: function(t, i) {
                return this._jq ? this._jq[qh] <= 1 ? lh[br][UO][Bh](this, t, i) : void B(this, uh, UO, arguments) : void 0
            },
            ondblclick: function(t, i) {
                this[Ru](i)
            },
            finish: function(t, i, n) {
                if (this._knTime && Date[Kf]() - this._knTime < 200) return void this[Ru](i);
                var e;
                this._jq && this._jq[qh] >= 2 && (this._jq[am](), e = new pB, l(this._jq,
                    function(t) {
                        if (MD[hr](t)) {
                            var i = t[0],
                                n = t[1];
                            e[ir](new hR(ED[jx], [i.x, i.y, n.x, n.y]))
                        } else e[ir](new hR(ED[mx], [t.x, t.y]))
                    },
                    this)),
                    i[e$](this[n$], n, t, e),
                    this[Ru](i)
            },
            onstart: function(t, i) {
                var n = t[xf](),
                    e = n instanceof lz;
                return this[n$] ? e ? void this[s$](t, i, n) : void this._gh(i[aC](t)) : void(e && (this[n$] = n, this._knTime = Date[Kf](), this._gh(i[aC](t))))
            },
            onmousemove: function(t, i) {
                this[n$] && (this[h$] = i[aC](t))
            },
            startdrag: function(t) {
                this[n$] && (t[r$] = !0)
            },
            ondrag: function(t, i) {
                this[n$] && (this[h$] = i[aC](t))
            },
            enddrag: function(t, i) {
                if (this[n$]) {
                    var n = t[xf]();
                    n instanceof lz && this[s$](t, i, n)
                }
            },
            getDefaultDrawStyles: function() {
                return {
                    lineWidth: Bz[wz[UE]],
                    strokeStyle: Bz[wz[JE]]
                }
            }
        },
        N(uh, _h),
        oh[br] = {
            getDefaultDrawStyles: function() {
                return {
                    lineWidth: Bz[wz[Dk]],
                    strokeStyle: Bz[wz[zk]],
                    fillStyle: Bz[wz[Xk]]
                }
            },
            finish: function(t, i) {
                if (this._jq && this._jq[qh]) {
                    var n = this._jq,
                        e = 0,
                        s = 0,
                        h = 0;
                    n[uc](function(t) {
                        return MD[hr](t) ? void t[uc](function() {
                            e += t.x,
                                s += t.y,
                                h++
                        }) : (e += t.x, s += t.y, void h++)
                    }),
                        e /= h,
                        s /= h;
                    var r = [];
                    n[uc](function(t, i) {
                        if (0 == i) return void r[Xh](new hR(ED[wx], [t.x - e, t.y - s]));
                        if (MD[hr](t)) {
                            var n = t[0],
                                h = t[1];
                            r[Xh](new hR(ED[jx], [n.x - e, n.y - s, h.x - e, h.y - s]))
                        } else r[Xh](new hR(ED[mx], [t.x - e, t.y - s]))
                    }),
                        this[ga](t, r, e, s),
                        this[Ru](i)
                }
            },
            startdrag: function(t) {
                t[r$] = !0
            },
            createElement: function(t, i, n, e) {
                return this[jo][f$](t, i, n, e)
            },
            onstart: function(t, i) {
                var n = i[aC](t);
                this._es = n,
                    this._gh(n)
            },
            onmousemove: function(t, i) {
                this._es && (this[h$] = i[aC](t))
            },
            ondblclick: function(t, i) {
                if (this._es) {
                    if (this._jq[qh] < 3) return void this[Ru](i);
                    delete this._jq[this._jq[qh] - 1],
                        this[s$](t, i)
                }
            },
            isClosePath: !0
        },
        N(oh, _h),
        MD[a$] = oh,
        dh[br] = {
            isClosePath: !1,
            createElement: function(t, i, n, e) {
                return this.graph[_$](t, i, n, e)
            },
            getDefaultDrawStyles: function() {
                return {
                    lineWidth: Bz[wz[Dk]],
                    strokeStyle: Bz[wz[zk]]
                }
            }
        },
        N(dh, oh),
        MD[c$] = dh,
        lh[br] = {
            destroy: function(t) {
                B(this, lh, Ru, arguments),
                    t[nO] = "",
                    this[n$] = null
            },
            doDraw: function(t) {
                if (this[n$] && this[h$]) {
                    var i, n;
                    this[jo][QC] && (i = this[jo][QC][Uj], n = this[jo][QC][po]),
                        i = i || this[jo][UC] || MD[u$],
                        n = n || this[jo][po];
                    var e = i[MT] || MD[u$][MT],
                        s = this[jo][mf](this[n$]);
                    s && s[ko] && (s = s[ko][Eo], e(t, s, this[h$], n), this[t$](t))
                }
            },
            canLinkFrom: function(t, i) {
                return t instanceof lz && i[o$](t)
            },
            canLinkTo: function(t, i) {
                return t instanceof lz && i[d$](t, this[n$])
            },
            startdrag: function(t, i) {
                var n = t[xf]();
                this.canLinkFrom(n, i) && (t[r$] = !0, this[n$] = n, i[nO] = Ov, this[VO]())
            },
            ondrag: function(t, i) {
                this[n$] && (MD[hC](t), this[h$] = i[aC](t), this[Wj]())
            },
            enddrag: function(t, i) {
                if (this[n$]) {
                    this[Wj]();
                    var n = t[xf]();
                    this[d$](n, i) && i[e$](this[n$], n, t),
                        this[Ru](i)
                }
            },
            getDefaultDrawStyles: function() {
                return {
                    lineWidth: Bz[wz[UE]],
                    strokeStyle: Bz[wz[JE]]
                }
            }
        },
        N(lh, _h),
        MD[l$] = lh,
        xh[br] = {
            html: null,
            createHTML: function() {
                var t = i[ga](b$);
                t[Uh] = v$,
                    t[sf][L_] = Wo,
                    t[sf][$g] = Eo,
                    t[sf][dy] = y$,
                    t[sf][s_] = g$,
                    t[sf][x$] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
                    t[sf][Sj] = Xo;
                var n = this;
                return t[w$] = function(t) {
                    n[m$](t)
                },
                    t[j$] = function(t) {
                        return 27 == t[Ym] ? void n[p$]() : void 0
                    },
                    t[k$] = function(i) {
                        if (13 == i[Ym]) {
                            if (i[fr](), i.altKey) return gh(t, Ma),
                                void n[m$](i);
                            n[M$]()
                        }
                    },
                    i[lI][qu](t),
                    t
            },
            setText: function(t, i) {
                this[vv][Pr] = t || "",
                i && (this[vv][sf][xd] = i),
                    this[vv][Id](),
                    this[E$](this[vv])
            },
            onSizeChange: function(t) {
                var i = (t[vd], t[yd], yh(t));
                return t[sf][fa] = i[fa] + 30 + ua,
                    t[sf][aa] = i[aa] + 10 + ua,
                    i
            },
            onValueChange: function(t) {
                var i = t[Pu];
                this[E$](i),
                    i[sf][yf] = i.x - i[vd] / 2 + ua
            },
            startEdit: function(i, n, e, s, h) {
                if (this[vv] || (this[vv] = this[S$]()), !this[P$]) {
                    var r = this;
                    this[P$] = function(t) {
                        t[Pu] != r[vv] && r[p$]()
                    }
                }
                t[hv](I$, this[P$], !0),
                    this[Ou] = h,
                    this[vv].x = i,
                    this[vv].y = n,
                    this[vv][sf][Sj] = oO,
                    this[T$](e, s || 10),
                    vh(this[vv], i, n),
                    this[vv][md]()
            },
            isEditing: function() {
                return Xo != this[vv][sf][Sj]
            },
            cancelEdit: function() {
                this[M$](!0)
            },
            stopEdit: function(i) {
                if (this[C$]()) {
                    t[rv](I$, this[P$]);
                    var n = this[vv].value;
                    if (!i && this[Ou] && this[Ou](n) === !1) return ! 1;
                    this[vv][sf][Sj] = Xo,
                        this[vv][Pr] = null,
                        this[Ou] = null
                }
            },
            destroy: function() {
                this[vv] && i[lI][Xb](this[vv])
            }
        },
        MD[O$] = xh;
    var Vz = function(t) {
        this[jo] = t
    };
    Vz[br] = {
        destroy: function(t) {
            t[$$] && (t[$$][Ru](), delete t[$$])
        },
        ondblclick: function(t, i) {
            var n = t[xf]();
            if (!n) return i[Ep] ? void i[F$]() : void(i[A$] && i[N$](mB[rd]));
            if (i[xT] && i[q$](n)) {
                var e = i[B$](t);
                if (e instanceof $z && e[xT] !== !1) {
                    var s = i[$$];
                    s || (i[$$] = s = new xh);
                    var h = e[Oa]();
                    return h = i[D$](h.x + h[fa] / 2, h.y + h[aa] / 2),
                        h = bh(h.x, h.y, i[vv]),
                        void i[R$](n, e, s, h)
                }
            }
            var r = n instanceof yz,
                f = n instanceof dz && n[z$]();
            return n._4r && (Mi(t) || !r && !f) ? void(i[Ep] = n) : r ? void(n[Np] = !n[Np]) : f ? void this[jo][ZT](n) : void 0
        }
    };
    var Uz = function(t) {
        this[jo] = t
    };
    Uz[br] = {
        onkeydown: function(t, i) {
            if (i[xT]) {
                var n = t[Ym];
                if (8 == n || 46 == n || 127 == n) return i[L$](t),
                    void T(t);
                if (Mi(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    T(t)
                }
            }
        }
    };
    var Qz = function(t) {
        this[jo] = t
    };
    Qz[br] = {
        onkeydown: function(i, n) {
            if (i[Lf] && 83 == i[Ym]) {
                var e = n[G$](n[Sf], n[jO]),
                    s = t[ta](),
                    h = s[Y$];
                h[H$] = X$ + e[fa] + W$ + e[aa];
                var r = h[ga](qo);
                r[Ro] = e[za],
                    h[lI][qu](r),
                    T(i)
            }
        }
    };
    var Jz = function(t) {
        this[jo] = t
    };
    Jz[br] = {
        destroy: function() {
            delete this[V$],
                delete this[U$]
        },
        _2k: function(t) {
            var i = new pB;
            return t[nd][uc](function(n) {
                    t[qC](n) && t[sd](n) && i[ir](n)
                },
                this),
                i
        },
        onstart: function(t, i) {
            this[U$] && this[Ru](i)
        },
        startdrag: function(t, i) {
            if (!t[r$]) {
                var n = t[xf]();
                if (!n || !i[Q$](n) || !i[qC](n)) return void this[Ru](i);
                t[r$] = !0,
                    this[U$] = n,
                    this[V$] = this._2k(i);
                var e = new Mh(i, Mh[J$], t, this[U$], this[V$][Nd]);
                return i[Z$](e) === !1 ? void this[Ru](i) : void i[xC](e)
            }
        },
        ondrag: function(t, i) {
            if (this[U$]) {
                O(t);
                var n = t.dx,
                    e = t.dy,
                    s = i[Sf];
                n /= s,
                    e /= s;
                var h = new Mh(i, Mh[K$], t, this[U$], this[V$][Nd]);
                i[tF](this[V$][Nd], n, e),
                    i[xC](h)
            }
        },
        enddrag: function(t, i) {
            if (this[U$]) {
                if (this[V$] && this[V$][qh]) {
                    if (t[Lm]) {
                        var n, e = i[aC](t),
                            s = e.x,
                            h = e.y;
                        i[iF](function(t) {
                                var i = t[za];
                                if (!this[V$][Po](i) && t[zu][Fa](s - t.x, h - t.y) && t._hn(s, h, 1)) {
                                    if (i instanceof MD[VC]) {
                                        if (!i[Fo]) return;
                                        for (var e = this[V$][qh]; e-->0;) {
                                            var r = this[V$][jr](e);
                                            if (r instanceof MD[_C] && r[nF](i)) return
                                        }
                                        return n = i,
                                            !1
                                    }
                                    return (i[Fo] || i._hw() && i[Np]) && (n = i),
                                        !1
                                }
                            },
                            this),
                        n && this[V$][uc](function(t) {
                                for (var i = t[Cc]; i;) {
                                    if (this[V$][Po](i)) return;
                                    i = i[Cc]
                                }
                                t[Cc] = n
                            },
                            this)
                    }
                    var r = new Mh(i, Mh[eF], t, this[U$], this[V$][Nd]);
                    i[xC](r)
                }
                this[Ru](i)
            }
        },
        onpinch: function(t, i) {
            this[U$] && this[lv](t, i)
        },
        step: 1,
        onkeydown: function(t, i) {
            if (Mi(t)) {
                var n, e;
                if (37 == t[Ym] ? n = -1 : 39 == t[Ym] ? n = 1 : 38 == t[Ym] ? e = -1 : 40 == t[Ym] && (e = 1), n || e) {
                    var s = this._2k(i)[Nd];
                    if (0 != s[qh]) {
                        T(t),
                            n = n || 0,
                            e = e || 0;
                        var h = this[sF] / i[Sf],
                            r = new Mh(i, Mh[eF], t, null, s);
                        i[tF](s, n * h, e * h),
                            i[xC](r)
                    }
                }
            }
        }
    };
    var Zz = function(t) {
        this[jo] = t
    };
    Zz[br] = {
        onkeydown: function(t, i) {
            Mi(t) || (37 == t[Ym] ? (this._5p(i, 1, 0), T(t)) : 39 == t[Ym] ? (this._5p(i, -1, 0), T(t)) : 38 == t[Ym] ? (this._5p(i, 0, 1), T(t)) : 40 == t[Ym] && (this._5p(i, 0, -1), T(t)))
        },
        _5p: function(t, i, n) {
            t._9m(i, n)
        },
        onstart: function(t, i) {
            this._kn && this[Ru](i)
        },
        _kn: !1,
        startdrag: function(t, i) {
            t[r$] || (t[r$] = !0, this._kn = !0, i[nO] = bD)
        },
        ondrag: function(t, i) {
            this._kn && (O(t), i[h_](t.dx || 0, t.dy || 0))
        },
        enddrag: function(t, i) {
            if (this._kn) {
                if (i[CO] !== !1) {
                    var n = t.vx,
                        e = t.vy; (Math[Ur](n) > .1 || Math[Ur](e) > .1) && i._9m(n, e)
                }
                this[Ru](i)
            }
        },
        onpinch: function(t, i) {
            this._kn = !0;
            var n = t[wv];
            if (n && 1 != n) {
                var e = i[fd](t[Eo]);
                i[PC](n, e.x, e.y)
            }
        },
        destroy: function(t) {
            this._kn = !1,
                t[nO] = null
        }
    },
        wh[br] = {
            onElementRemoved: function(t, i) {
                this[XO] && (t == this[XO] || I(t) && w(t, this.element)) && this[Ru](i)
            },
            onClear: function(t) {
                this[XO] && this[Ru](t)
            },
            destroy: function(t) {
                t[nO] = null,
                this[XO] && delete this[XO]._editting,
                    delete this[XO],
                    delete this._9r,
                    delete this._9g,
                    delete this._nfanEdit,
                    this._7d()
            },
            _7d: function() {
                this[hF] && (this[od][WO](this[hF]), delete this[hF], this[od][Wj]())
            },
            _ndv: function() {
                this[hF] && this[od][Po](this[hF]) || (this[hF] = this[od][VO](this[rF], this).id, this[od][Wj]())
            },
            _9r: null,
            _69: function(t) {
                this._9r = t,
                    this[Wj]()
            },
            _en: function(t, i, n, e) {
                t[Ux](),
                    t[dw](i, n, this[Td] / e, 0, 2 * Math.PI, !1),
                    t[i_] = 1 / e,
                    t[W_] = [],
                    t[Bg] = Ng,
                    t[Tg] = "rgba(255, 255, 0, 0.8)",
                    t[Ba](),
                    t[Da]()
            },
            _fv: function(t, i, n, e) {
                e ? t[Uc](i, n) : t[Qc](i, n)
            },
            drawLine: function(t, i) {
                if (this._9r && this._9r[qh]) {
                    t[Ig]();
                    var n = this[XO] instanceof bz;
                    n && (t[h_](this[XO].x, this[XO].y), this[XO][Ha] && t[Ha](this[XO][Ha]));
                    var e, s = [];
                    t[Ux](),
                        l(this._9r,
                            function(i) {
                                if (i[Ya] != ED[Mx]) for (var n = 0,
                                                              h = i[Yf]; n + 1 < h[qh];) {
                                    var r = h[n],
                                        f = h[n + 1],
                                        a = {
                                            x: r,
                                            y: f
                                        };
                                    s[Xh](a),
                                        this._fv(t, a.x, a.y, null == e),
                                        e = a,
                                        n += 2
                                }
                            },
                            this),
                        t[i_] = 1 / i,
                        t[W_] = [2 / i, 3 / i],
                        t[Bg] = fF,
                        t[Ba](),
                        l(s,
                            function(n) {
                                this._en(t, n.x, n.y, i)
                            },
                            this),
                        t[Gg]()
                }
            },
            invalidate: function() {
                this[od][Wj]()
            },
            _3s: function(t, i) {
                this[XO] = t,
                    t._editting = !0,
                    this._nfanEdit = !0,
                    this._69(i)
            },
            _6h: function(t, i) {
                if (i[q$](t)) {
                    var n = t[aF];
                    if (n && 0 != n[qh]) return n
                }
            },
            _ik: function(t, i) {
                t -= this[XO].x,
                    i -= this[XO].y;
                var n = {
                    x: t,
                    y: i
                };
                return this[XO][Ha] && Fs(n, -this[XO][Ha]),
                    n
            },
            ondblclick: function(t, i) {
                if (!i[xT]) return void(this[XO] && this[Ru](i));
                var n = t[xf]();
                if (!n || n == this[XO] || n._editting) return void this[Ru](i);
                var e = this._6h(n, i);
                return e ? (this._ndv(), void this._3s(n, e)) : void(this[XO] && this[Ru](i))
            },
            onstart: function(t, i) {
                if (!i[xT]) return void(this[XO] && this[Ru](i));
                if (!t[r$]) {
                    var n = t[xf]();
                    if (n == this[XO]) return void(this[XO] && this._ndv());
                    if (this[XO] && this._go(t, i)) return void(t[r$] = !0);
                    if (this[XO]) return void this[Ru](i);
                    if (n instanceof dz) {
                        var e = this._6h(n, i);
                        if (!e) return void(this[XO] && this[Ru](i));
                        this._ndv(),
                            this._3s(n, e)
                    }
                }
            },
            onrelease: function() {
                this[XO] && (this._nfanEdit = !0)
            },
            _9g: null,
            _go: function(t, i) {
                var n = i[aC](t);
                this[XO] instanceof bz && (n = this._ik(n.x, n.y));
                var e, s = i[Sf],
                    h = this[Td] / s;
                return l(this._9r,
                    function(t, i) {
                        for (var s = 0,
                                 r = t[Yf]; s + 1 < r[qh];) {
                            var f = r[s],
                                a = r[s + 1],
                                _ = SB(n.x, n.y, f, a);
                            if (h > _) return e = {
                                segment: t,
                                index: i,
                                pointIndex: s
                            },
                                !1;
                            s += 2
                        }
                    },
                    this),
                    e
            },
            startdrag: function(t, i) {
                if (this[XO] && this._nfanEdit && (this._9g = this._go(t, i), this._9g)) {
                    this._7d(),
                        t[r$] = !0;
                    var n = new Mh(i, Mh[_F], t, this[XO]);
                    n[cF] = this._9g,
                        i[xC](n)
                }
            },
            ondrag: function(t, i) {
                if (this[XO] && this._9g) {
                    var n = t.dx,
                        e = t.dy,
                        s = i[Sf];
                    if (n /= s, e /= s, this[XO][Ha]) {
                        var h = {
                            x: n,
                            y: e
                        };
                        Fs(h, -this[XO][Ha]),
                            n = h.x,
                            e = h.y
                    }
                    var r = this._9g[uF],
                        f = this._9g[oF];
                    r[Yf][f] += n,
                        r[Yf][f + 1] += e,
                        this[XO][ep]();
                    var a = new Mh(i, Mh[dF], t, this[XO]);
                    a[cF] = this._9g,
                        i[xC](a)
                }
            },
            enddrag: function(t, i) {
                if (this[XO] && this._9g) {
                    this._ndv();
                    var n = new Mh(i, Mh[lF], t, this[XO]);
                    n[cF] = this._9g,
                        i[xC](n)
                }
            }
        },
        mB[bF] = 1,
        mB[vF] = U(3724541951),
        mB[yF] = U(1430753245);
    var Kz = function(t) {
        this[jo] = t,
            this[od] = t._8g._topCanvas
    };
    Kz[br] = {
        onstart: function(t, i) {
            this._kn && this[Ru](i)
        },
        startdrag: function(t, i) {
            t[r$] || (t[r$] = !0, this._kn = i[aC](t), i[nO] = Ov, this._1fId = this[od][VO](this._1f, this).id)
        },
        ondrag: function(t, i) {
            this._kn && (O(t), this._end = i[aC](t), this[Wj]())
        },
        enddrag: function(t, i) {
            this._kn && (this._fb(), this[Ru](i))
        },
        onpinch: function(t, i) {
            this._kn && this[lv](t, i)
        },
        _1f: function(t, i) {
            t[Bg] = mB[vF],
                t[Tg] = mB[yF],
                t[i_] = mB[bF] / i;
            var n = this._kn.x,
                e = this._kn.y;
            t[Iy](n, e, this._end.x - n, this._end.y - e),
                t[Da](),
                t[Ba]()
        },
        invalidate: function() {
            return this[Op] ? void this[od][Wj]() : (this[Op] = !0, void m(this._fb, this, 100))
        },
        _fb: function() {
            if (this[Op] = !1, !this._kn) return void this[od][Wj]();
            var t = Math[Ia](this._kn.x, this._end.x),
                i = Math[Ia](this._kn.y, this._end.y),
                n = Math[Ur](this._kn.x - this._end.x),
                e = Math[Ur](this._kn.y - this._end.y);
            if (!n || !e) return void this[jo][nd][Pf]();
            var s, h = [],
                r = this[jo][Sf];
            this[jo][gF](function(f) {
                    f._hk && this[jo][hd](f[Y_]) && (s = f._fe, (fi(t, i, n, e, s.x + f._x, s.y + f._y, s[fa], s[aa]) || On(t, i, n, e, f, r)) && h[Xh](f[Y_]))
                },
                this),
                this[jo][nd][pr](h),
                this[od][Wj]()
        },
        destroy: function(t) {
            this._kn = null,
                t[nO] = null,
            this._1fId && (this[od][WO](this._1fId), delete this._1fId, this[od][Wj]())
        }
    };
    var Wz = Math.PI / 4;
    mh[br] = {
        _er: !1,
        _eq: !1,
        onElementRemoved: function(t, i) {
            this[XO] && (t == this[XO] || I(t) && w(t, this[XO])) && this[Ru](i)
        },
        onClear: function(t) {
            this[XO] && this[Ru](t)
        },
        ondblclick: function(t, i) {
            this[XO] && this[Ru](i)
        },
        destroy: function(t) {
            t[nO] = null,
                delete this[XO],
                delete this._nfj,
                delete this._nbody,
                delete this._9g,
                delete this._nfanEdit,
                delete this._jq,
                delete this._rotatePoint,
                delete this._eq,
                delete this._er,
                delete this._insets,
                this._7d()
        },
        _7d: function() {
            this._fvId && (this[od][WO](this._fvId), delete this._fvId, this[od][Wj]())
        },
        _ndv: function() {
            this._fvId && this[od][Po](this._fvId) || (this._fvId = this[od][VO](this._fv, this).id, this[od][Wj]())
        },
        _nfj: null,
        _jq: null,
        _8e: function(t) {
            this._nfj = t;
            var i = this._nfj.x,
                n = this._nfj.y,
                e = this._nfj[fa],
                s = this._nfj[aa];
            if (this._eq) {
                var h = [];
                h[Xh]({
                    x: i,
                    y: n,
                    p: OB[Rl],
                    cursor: xF,
                    rotate: 5 * Wz
                }),
                    h[Xh]({
                        x: i + e / 2,
                        y: n,
                        p: OB[Gl],
                        cursor: wF,
                        rotate: 6 * Wz
                    }),
                    h[Xh]({
                        x: i + e,
                        y: n,
                        p: OB[Xl],
                        cursor: Cd,
                        rotate: 7 * Wz
                    }),
                    h[Xh]({
                        x: i,
                        y: n + s / 2,
                        p: OB[zl],
                        cursor: mF,
                        rotate: 4 * Wz
                    }),
                    h[Xh]({
                        x: i + e,
                        y: n + s / 2,
                        p: OB[Wl],
                        cursor: mF,
                        rotate: 0
                    }),
                    h[Xh]({
                        x: i,
                        y: n + s,
                        p: OB[Ll],
                        cursor: Cd,
                        rotate: 3 * Wz
                    }),
                    h[Xh]({
                        x: i + e / 2,
                        y: n + s,
                        p: OB[Hl],
                        cursor: wF,
                        rotate: 2 * Wz
                    }),
                    h[Xh]({
                        x: i + e,
                        y: n + s,
                        p: OB[Vl],
                        cursor: xF,
                        rotate: Wz
                    }),
                    this._jq = h
            }
            this._rotatePoint = this._er ? {
                x: i + e / 2,
                y: n,
                cursor: vD
            }: null,
                this._nf9()
        },
        _en: function(t, i, n, e) {
            t[Ux]();
            var s = (this[Td] - 1) / e;
            t[Iy](i - s, n - s, 2 * s, 2 * s),
                t[i_] = 1 / e,
                t[W_] = [],
                t[Bg] = Ng,
                t[Tg] = "rgba(255, 255, 255, 0.8)",
                t[Ba](),
                t[Da]()
        },
        _5i: function(t, i, n, e, s, h) {
            s = s || this[Td],
                h = h || jF,
                t[Ux](),
                s /= e,
                t[dw](i, n, s, 0, 2 * Math.PI, !1),
                t[i_] = 1 / e,
                t[W_] = [],
                t[Bg] = Ng,
                t[Tg] = h,
                t[Ba](),
                t[Da]()
        },
        _ik: function(t, i) {
            t -= this[XO].x,
                i -= this[XO].y;
            var n = {
                x: t,
                y: i
            };
            return this[XO][Ha] && Fs(n, -this[XO][Ha]),
                n
        },
        _fv: function(t, i) {
            if (this._nfj) {
                if (t[Ig](), t[h_](this[XO].x, this[XO].y), this[XO][Ha] && t[Ha](this[XO][Ha]), this._rotatePoint) {
                    this._5i(t, 0, 0, i, 3, pF);
                    var n = this._rotatePoint.x,
                        e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t[Ux](),
                        t[Uc](n, this._rotatePoint.y),
                        t[Qc](n, e),
                        t[i_] = 1 / i,
                        t[Bg] = fF,
                        t[Ba](),
                        this._5i(t, n, e, i)
                }
                if (this._jq) {
                    var s = this._nfj.x,
                        h = this._nfj.y,
                        r = this._nfj[fa],
                        f = this._nfj[aa];
                    t[Ux](),
                        t[Iy](s, h, r, f),
                        t[i_] = 1 / i,
                        t[W_] = [2 / i, 3 / i],
                        t[Bg] = fF,
                        t[Ba](),
                        l(this._jq,
                            function(n) {
                                this._en(t, n.x, n.y, i)
                            },
                            this)
                }
                t[Gg]()
            }
        },
        _nf9: function() {
            this[od][Wj]()
        },
        _3s: function(t, i, n, e) {
            this[XO] = t,
                this._ndv();
            var s = i[mf](t);
            this._nbody = s[lI],
                this._eq = n,
                this._er = e,
                this._9s()
        },
        _9s: function() {
            var t = jh(this._nbody, this._nbody._j3),
                i = jh(this._nbody, this._nbody._8a);
            this._insets = new CB(t.y - i.y, t.x - i.x, i[Wr] - t[Wr], i[Vr] - t[Vr]),
                this._8e(i)
        },
        _ndx: function(t, i) {
            return (!t._hw() || !t[Np]) && i[kF](t)
        },
        _ndy: function(t, i) {
            return (!t._hw() || !t[Np]) && i[MF](t)
        },
        _nft: function(t, i) {
            return t instanceof lz && i[q$](t)
        },
        onstart: function(t, i) {
            if (!i[xT]) return void(this[XO] && this[Ru](i));
            if (!t[r$]) {
                var n = i[mf](t),
                    e = t[xf]();
                if (e != this[XO]) {
                    if (this[XO]) {
                        if (this._go(t, i)) return void(t[r$] = !0);
                        this[Ru](i)
                    }
                    if (e && !e._editting && this._nft(e, i)) {
                        var s = this._ndx(e, i, n),
                            h = this._ndy(e, i, n); (s || h) && this._3s(e, i, s, h)
                    }
                }
            }
        },
        onrelease: function(t, i) {
            this[XO] && (this._nfanEdit = !0, this._ndv(), i[MC](function() {
                    this._9s()
                },
                this))
        },
        _9g: null,
        _go: function(t, i) {
            var n = i[aC](t);
            n = this._ik(n.x, n.y);
            var e = i[Sf],
                s = this[Td] / e;
            if (this._rotatePoint) {
                var h = this._rotatePoint.x,
                    r = this._rotatePoint.y - this._rotateHandleLength / e;
                if (SB(n.x, n.y, h, r) < s) return this._rotatePoint
            }
            if (this._jq && this._jq[qh]) {
                var f;
                return l(this._jq,
                    function(t) {
                        return SB(n.x, n.y, t.x, t.y) < s ? (f = t, !1) : void 0
                    },
                    this),
                    f
            }
        },
        onmousemove: function(t, i) {
            if (this[XO]) {
                var n = this._go(t, i);
                if (!n) return void(i[nO] = null);
                if (n != this._rotatePoint && this[XO][Ha]) {
                    var e = n[Ha] + this[XO][Ha];
                    return void(i[nO] = ph(e))
                }
                i[nO] = n[nO]
            }
        },
        startdrag: function(t, i) {
            if (this[XO] && (this._7d(), this._nfanEdit && (this._9g = this._go(t, i), this._9g))) {
                if (t[r$] = !0, this._9g == this._rotatePoint) return this._9g[n$] = i[aC](t),
                    void(this._9g[Ha] = this[XO][Ha] || 0);
                var n = new Mh(i, Mh[EF], t, this[XO]);
                n[cF] = this._9g,
                    i[xC](n)
            }
        },
        _7m: function(t, i, n, e, s, h) {
            var r = this._nfj,
                f = r.x,
                a = r.y,
                _ = r[fa],
                c = r[aa];
            if (h) {
                var u = e != _;
                u ? s = e * c / _: e = s * _ / c
            }
            var o = t[wp]._fg,
                d = e / _,
                l = s / c,
                b = -f * d + i,
                v = -a * l + n;
            o[uc](function(t) {
                if (t[Ya] != ED[Mx]) {
                    var e = t[Yf];
                    if (e && e[qh]) for (var s = 0,
                                             h = e[qh]; h > s; s += 2) {
                        var r = e[s],
                            _ = e[s + 1];
                        e[s] = (r - f) * d + i - b,
                            e[s + 1] = (_ - a) * l + n - v
                    }
                }
            }),
                this._nfj[pr](i - b, n - v, e, s),
                t[NC](t.x + b, t.y + v),
                t[ep]()
        },
        _4h: function(t, i, n, e, s) {
            if (this[XO] instanceof bz) return this._7m(this[XO], t, i, n, e, s);
            var h = this._nbody instanceof $z;
            if (!h && s) {
                var r = this._nfj,
                    f = this._nbody[SF],
                    a = n != r[fa];
                a ? e = n * f[aa] / f[fa] : n = e * f[fa] / f[aa]
            }
            var _ = this[XO][bp],
                c = new IB(n - this._insets[yf] - this._insets[Vr], e - this._insets[gf] - this._insets[Wr]);
            if (c[fa] < 1 && (n = this._insets[yf] + this._insets[Vr] + 1, c[fa] = 1), c.height < 1 && (e = this._insets[gf] + this._insets[Wr] + 1, c[aa] = 1), h ? this[XO][Au](wz[sE], c) : this[XO][lp] = c, _) {
                var u = ai(_, n, e),
                    o = u.x + t - (this._nbody[Kp] || 0),
                    d = u.y + i - (this._nbody[tk] || 0);
                if (this._nfj[pr](t - o, i - d, n, e), this[XO].rotate) {
                    var u = Fs({
                            x: o,
                            y: d
                        },
                        this[XO][Ha]);
                    o = u.x,
                        d = u.y
                }
                this[XO].x += o,
                    this[XO].y += d
            } else {
                var o = this._nfj.x * n / this._nfj[fa] - t,
                    d = this._nfj.y * e / this._nfj[aa] - i;
                if (this._nfj[pr](t + o, i + d, n, e), this[XO][Ha]) {
                    var u = Fs({
                            x: o,
                            y: d
                        },
                        this[XO][Ha]);
                    o = u.x,
                        d = u.y
                }
                this[XO].x -= o,
                    this[XO].y -= d
            }
        },
        ondrag: function(t, i) {
            if (this[XO] && this._9g) {
                if (this._9g == this._rotatePoint) {
                    var n = i[aC](t),
                        e = ln(n.x, n.y, this[XO].x, this[XO].y, this._9g[n$].x, this._9g[n$].y, !0);
                    return e += this._9g[Ha] || 0,
                    t[Lm] && (e = Math[Aa](e / Math.PI * 4) * Math.PI / 4),
                        void(this[XO][Ha] = e % (2 * Math.PI))
                }
                var s = t.dx,
                    h = t.dy,
                    r = i[Sf];
                if (s /= r, h /= r, this[XO][Ha]) {
                    var n = {
                        x: s,
                        y: h
                    };
                    Fs(n, -this[XO][Ha]),
                        s = n.x,
                        h = n.y
                }
                var f = this._9g.p,
                    a = this._nfj,
                    _ = a.x,
                    c = a.y,
                    u = a[fa],
                    o = a[aa];
                f[Qr] == $B ? s >= u ? (_ += u, u = s - u || 1) : (_ += s, u -= s) : f[Qr] == AB && ( - s >= u ? (u = -s - u || 1, _ -= u) : u += s),
                    f[Jr] == NB ? h >= o ? (c += o, o = h - o || 1) : (c += h, o -= h) : f[Jr] == BB && ( - h >= o ? (o = -h - o || 1, c -= o) : o += h),
                    this._4h(_, c, u, o, t[Lm]);
                var d = new Mh(i, Mh[PF], t, this[XO]);
                d[cF] = this._9g,
                    i[xC](d)
            }
        },
        enddrag: function(t, i) {
            if (this[XO] && this._9g && this._9g != this._rotatePoint) {
                var n = new Mh(i, Mh[IF], t, this[XO]);
                n[cF] = this._9g,
                    i[xC](n)
            }
        }
    },
        MD[JO] = mh;
    var tL = function(t) {
        this[jo] = t
    };
    tL[br] = {
        onstart: function(t, i) {
            if (!t[r$]) {
                bB || fB || i[md](!0);
                var n = t[xf]();
                return n && !i[hd](n) && (n = null),
                    n && Mi(t) ? void i[FC](n) : void(n && i[nd][Q$](n) || (n ? (i[TF](n), i[CF](n)) : i[TF](null)))
            }
        },
        onkeydown: function(t, i) {
            return 27 == t[Ym] ? void i[AC]() : void(Mi(t) && 65 == t[Ym] && (i[OF](), T(t)))
        }
    };
    var iL = 0,
        nL = 15,
        eL = function(t) {
            this[jo] = t
        };
    eL[br] = {
        _ndn: {},
        _ndp: null,
        _ndq: function() {
            delete this._initTimer,
            this._ndn[za] && (this._ndp = i[ga](Ao), this._ndp[Uh] = $F, MD[FF](this._ndp, {
                "background-color": AF,
                overflow: Ho,
                "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
                color: zg,
                "pointer-events": Xo,
                border: NF,
                padding: qF,
                display: oO,
                position: Wo
            }), i[lI][qu](this._ndp), this._nf0(this[jo], this._ndn[za]))
        },
        _nf0: function(t, i) {
            var n = t[BF](i),
                e = Sd == i[DF];
            n && !e && (n = n[tf](/\n/g, RF)),
                e ? this._ndp[zF] = n || "": this._ndp[RC] = n || "";
            var s = this._ndn[LF][lf] + iL,
                h = this._ndn[LF][vf] + nL;
            kh(this._ndp, s, h),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
                this._deleteTimer = setTimeout(MD[GF](this, this._91), 3e3)
        },
        _91: function() {
            delete this._deleteTimer,
            this._ndp && this._ndp[Cj] && this._ndp[Cj][Xb](this._ndp),
                delete this._ndp,
                this._ndn = {}
        },
        _et: function(t, i, n, e) {
            return this._ndp ? void this._nf0(e, t) : void(this._initTimer = setTimeout(MD[GF](this, this._ndq), 1e3))
        },
        onstart: function(t, i) {
            this[Ru](i)
        },
        onmousemove: function(t, i) {
            if (i[YF]) {
                var n = t[xf]();
                if (this._ndn[LF] = t, this._ndn[za] != n && (this._ndn[za] = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
                    var e = i[BF](n);
                    e && this._et(n, e, t, i)
                }
            }
        },
        destroy: function() {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._ndp && this._91()
        }
    };
    var sL = function(t) {
        this[jo] = t
    };
    sL[br] = {
        onmousewheel: function(t, i) {
            if (i[HF] !== !1) {
                if (i._scaling) return void T(t);
                i._scaling = !0,
                    m(function() {
                            delete i._scaling
                        },
                        this, 100),
                hh(i, t, t[$f] > 0) !== !1 && T(t)
            }
        }
    };
    var hL = function(t) {
        this[jo] = t
    };
    hL[br] = {
        onclick: function(t, i) {
            hh(i, t, !Mi(t))
        }
    };
    var rL = function(t) {
        this[jo] = t
    };
    rL[br] = {
        onclick: function(t, i) {
            hh(i, t, Mi(t))
        }
    },
        N(Mh, zB),
        Mh[J$] = XF,
        Mh[K$] = WF,
        Mh[eF] = VF,
        Mh[gC] = UF,
        Mh[GC] = QF,
        Mh[_F] = JF,
        Mh[dF] = ZF,
        Mh[lF] = KF,
        Mh[EF] = tA,
        Mh[PF] = iA,
        Mh[IF] = nA,
        Mh[eA] = sA,
        Mh[hA] = rA,
        Mh[fA] = aA,
        Mh[_A] = cA,
        Mh[uA] = oA,
        Eh[br] = {
            _94: function(t) {
                if (this._interactionSupport) switch (t[Ad]) {
                    case JB[kb]:
                        this._interactionSupport._4v(t[za]);
                        break;
                    case JB[Mb]:
                        this._interactionSupport._7s(t[za])
                }
            },
            destroy: function() {
                delete this._kc,
                    delete this._4p,
                this._interactionSupport && (this._interactionSupport._ia(), delete this._interactionSupport)
            },
            _kc: null,
            _4p: null,
            defaultMode: null,
            _gb: function(t, i, n) {
                this._4p[t] = new ah(i, n),
                t == this[Bd] && this._interactionSupport._7p(i)
            },
            addCustomInteraction: function(t) {
                this._interactionSupport._6(t)
            },
            _mz: function(t) {
                var i = this._4p[t];
                return i ? i: fL[t]
            }
        },
        J(Eh[br], {
            defaultCursor: {
                get: function() {
                    return this[dA] ? this[dA][ld] : void 0
                }
            },
            currentMode: {
                get: function() {
                    return this._nfurrentMode
                },
                set: function(t) {
                    this._nfurrentMode != t && (this._interactionSupport || (this._interactionSupport = new uD(this._kc)), this._nfurrentMode = t, this[dA] = this._mz(this._nfurrentMode), this._kc[nO] = this[ld], this._interactionSupport._7p(this[dA] ? this[dA][lA](this._kc) : []))
                }
            }
        });
    var fL = {};
    mB[bA] = function(t, i, n) {
        var e = new ah(i, n);
        fL[t] = e
    },
        ED[vA] = yA,
        ED[Dd] = bd,
        ED[gA] = Md,
        ED.INTERACTION_MODE_ZOOMIN = xA,
        ED[wA] = mA,
        ED[jA] = pA,
        ED[kA] = MA,
        ED[EA] = SA,
        ED[PA] = IA,
        mB[bA](ED[vA], [tL, Zz, sL, Qz, Vz, eL]),
        mB[bA](ED[jA], [Uz, lh, tL, Zz, sL, Qz, eL]),
        mB[bA](ED[kA], [Uz, uh, tL, Zz, sL, Qz, eL]),
        mB[bA](ED[EA], [Uz, oh, tL, Zz, sL, Qz, eL]),
        mB[bA](ED[PA], [dh, tL, Zz, sL, Qz, eL]),
        mB[bA](ED[Dd], [Uz, mh, wh, tL, Jz, Zz, sL, Qz, Vz, eL]),
        mB[bA](ED[gA], [Uz, mh, wh, tL, Jz, Kz, Zz, sL, Qz, Vz, eL]),
        mB[bA](ED[TA], [sL, Qz, hL], oD),
        mB[bA](ED[wA], [sL, Qz, rL], dD),
        MD[CA] = Zz,
        MD[OA] = tL,
        MD[$A] = Jz,
        MD[FA] = sL,
        MD[AA] = Vz,
        MD[NA] = Qz,
        MD[qA] = eL,
        MD[BA] = Kz,
        MD[DA] = wh;
    var aL = function(t) {
        this[jo] = t
    };
    MD[RA] = aL,
        aL[br] = {
            getNodeBounds: function(t) {
                return this.graph[zA](t)
            },
            isLayoutable: function(t) {
                return t[LA] !== !1
            },
            getLayoutResult: function() {},
            updateLocations: function(t, i, n, e, s) {
                if (i === !0) {
                    if (this[GA] || (this[GA] = new AL), n && (this[GA][DO] = n), e && (this[GA][zO] = e), this[GA][YA] = t, s) {
                        var h = s,
                            r = this;
                        s = function() {
                            h.call(r, t)
                        }
                    }
                    return void this[GA][n$](s)
                }
                for (var f in t) {
                    var a = t[f],
                        _ = a[HA];
                    _[NC](a.x, a.y)
                }
                s && s[Bh](this, t)
            },
            _f4: function(t) {
                var i, n, e, s = null;
                t && (i = t[XA], s = t[Ou], n = t[DO], e = t[zO]);
                var h = this[WA](t);
                return h ? (this[VA](h, i, n, e, s), h) : !1
            },
            doLayout: function(t, i) {
                return this[jo] && i !== !0 ? void this[jo][MC](function() {
                        this._f4(t)
                    },
                    this) : this._f4(t)
            }
        };
    var _L = 11,
        cL = 12,
        uL = 13,
        oL = 21,
        dL = 22,
        lL = 23;
    ED[UA] = _L,
        ED[QA] = cL,
        ED[JA] = uL,
        ED[ZA] = oL,
        ED[KA] = dL,
        ED[tN] = lL;
    var bL = iN,
        vL = nN,
        yL = eN,
        gL = sN;
    ED[hN] = bL,
        ED[rN] = yL,
        ED[fN] = gL,
        ED[aN] = vL,
        MD[_N] = Sh;
    var xL = function(t) {
        this[jo] = t
    };
    xL[br] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: oL,
        layoutType: bL,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function(t) {
            if (this[jo]._8g._ndb) {
                var i = this[jo][mf](t);
                if (i) return i._fe
            }
            return t[Kg] && t[Kg][$a] ? {
                width: t[Kg][$a][fa],
                height: t[Kg][$a][aa]
            }: this[cN]
        },
        _nfu: function(t, i) {
            if (this[Rd](t)) {
                var n = this[uN](t),
                    e = t.id,
                    s = (t[oN], i ? this._9y[i.id] : this._ndo);
                this._9y[e] = new wL(t[dN] || this[dN], t[lN] || this[lN], t[bN] || this[bN], t[oN], s, t, n[fa], n[aa])
            }
        },
        _9y: null,
        _ndo: null,
        _kg: function() {
            this._9y = null,
                this._ndo = null
        },
        getLayoutResult: function(t) {
            var i, n, e, s, h = this[jo];
            t instanceof Object && (i = t.x, n = t.y, h = t[vN] || this[jo], e = t[$a], s = t[yN]),
                this._9y = {},
                this._ndo = new wL,
                this._ndo._mu(this[dN], this[lN], this[oN], this[bN]);
            var r = {},
                f = BL(h, this._nfu, this, !1, s);
            return f && (this._ndo._f4(i || 0, n || 0, r), e && e[pr](this._ndo.x, this._ndo.y, this._ndo[fa], this._ndo[aa])),
                this._kg(),
                r
        },
        doLayout: function(t, i) {
            if (E(t)) {
                var n = t,
                    e = 0;
                E(i) && (e = i),
                    t = {
                        x: n,
                        y: e
                    },
                    i = !0
            }
            return B(this, xL, gN, [t, i])
        }
    },
        N(xL, aL);
    var wL = function(t, i, n, e, s, h, r, f) {
        this._mn = t || 0,
            this._mq = i || 0,
            this[bN] = n,
            this[oN] = e,
            this[xN] = s,
        s && s._fz(this),
            this[HA] = h,
            this._e5 = r,
            this._nfq = f
    };
    wL[br] = {
        _mu: function(t, i, n, e) {
            this._mn = t,
                this._mq = i,
                this[oN] = n,
                this[bN] = e
        },
        _8c: function() {
            this._f3 = []
        },
        _mn: 0,
        _mq: 0,
        _f3: null,
        _e5: 0,
        _nfq: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fz: function(t) {
            this._f3 || (this._f3 = []),
                this._f3[Xh](t)
        },
        _nfd: function(t, i, n, e) {
            var s = new TB;
            return n(this._f3,
                function(n) {
                    n._4f(t, i),
                        s[ir](n),
                        e ? t += n[fa] + this._mn: i += n[aa] + this._mq
                },
                this),
                s
        },
        _86: function(t, i, n, e, s) {
            var h, r = e ? this._mn: this._mq,
                f = e ? this._mq: this._mn,
                a = e ? "width": aa,
                _ = e ? "height": fa,
                c = e ? "_e5": wN,
                u = e ? "_nfq": mN,
                o = e ? "hostDX": jN,
                d = e ? "hostDY": pN,
                b = new TB,
                v = 0,
                y = 0,
                g = [],
                x = 0,
                w = 0;
            n(this._f3,
                function(n) {
                    var s = w >= y;
                    n._inheritedParentChildrenDirection = s ? e ? cL: dL: e ? _L: oL,
                        n._4f(t, i),
                        s ? (g[Xh](n), v = Math[Ea](v, n[a]), y += n[_] + f) : (h || (h = []), h[Xh](n), x = Math[Ea](x, n[a]), w += n[_] + f)
                },
                this),
                y -= f,
                w -= f;
            var m = Math.max(y, w),
                j = r,
                p = 0;
            this[HA] && (s && (j += this[c] + r, m > this[u] ? this[d] = (m - this[u]) / 2 : p = (this[u] - m) / 2), this[o] = v + j / 2 - this[c] / 2);
            var k = 0,
                M = p;
            return l(g,
                function(t) {
                    e ? t[mg](v - t[a], M) : t[mg](M, v - t[a]),
                        M += f + t[_],
                        b[ir](t)
                },
                this),
                h ? (M = p, k = v + j, l(h,
                    function(t) {
                        e ? t[mg](k, M) : t[mg](M, k),
                            M += f + t[_],
                            b[ir](t)
                    },
                    this), b) : b
        },
        offset: function(t, i) {
            this.x += t,
                this.y += i,
                this[kN] += t,
                this[MN] += i,
                this._7x(t, i)
        },
        _nbb: function(t, i) {
            return 2 * this.cx - t - i - t
        },
        _nb9: function(t, i) {
            return 2 * this.cy - t - i - t
        },
        _mf: function(t) {
            if (this._f3 && 0 != this._f3[qh]) {
                if (t) return this[HA] && (this[kN] += this._nbb(this[kN], this._e5)),
                    void l(this._f3,
                        function(t) {
                            t[mg](this._nbb(t.x, t[fa]), 0)
                        },
                        this);
                this[HA] && (this[MN] += this._nb9(this[MN], this._nfq)),
                    l(this._f3,
                        function(t) {
                            t[mg](0, this._nb9(t.y, t[aa]))
                        },
                        this)
            }
        },
        _7x: function(t, i) {
            this._f3 && l(this._f3,
                function(n) {
                    n[mg](t, i)
                },
                this)
        },
        _4f: function(t, i) {
            return this.x = t || 0,
                this.y = i || 0,
                this._f3 && 0 != this._f3[qh] ? void this._2d(this.x, this.y, this[bN]) : void(this[HA] && (this[fa] = this._e5, this[aa] = this._nfq, this[kN] = this.x, this[MN] = this.y))
        },
        _7z: function(t) {
            this[HA] && (t[this[HA].id] = {
                node: this[HA],
                x: this[kN] + this._e5 / 2,
                y: this[MN] + this._nfq / 2,
                left: this[kN],
                top: this[MN],
                width: this._e5,
                height: this._nfq
            }),
            this._f3 && l(this._f3,
                function(i) {
                    i._7z(t)
                },
                this)
        },
        _f4: function(t, i, n) {
            this._4f(t, i),
                this._7z(n)
        },
        _2d: function(t, i, e) {
            var s, h = t,
                r = i; ! this[oN] && this[xN] && (this[oN] = this._inheritedParentChildrenDirection || this[xN][oN]);
            var f = this[oN],
                a = Sh(f);
            if (this[HA]) {
                s = f == uL || f == lL;
                var _ = Ph(f);
                s || (a ? t += this._e5 + this._mn: i += this._nfq + this._mq)
            }
            var c, u = this[HA] && this[HA][EN] ? v: l;
            if (e == vL) c = this._86(t, i, u, !a, s);
            else {
                var o;
                o = e == bL ? !a: e == yL,
                    c = this._nfd(t, i, u, o, s)
            }
            var d = 0,
                b = 0;
            c && !c[H_]() && (d = c[fa], b = c[aa], this[ir](c)),
            this[HA] && (this[kN] = h, this[MN] = r, this[pN] !== n || this[jN] !== n ? (this[kN] += this[pN] || 0, this[MN] += this[jN] || 0) : a ? this[MN] += b / 2 - this._nfq / 2 : this.nodeX += d / 2 - this._e5 / 2, this[Cl](this[kN], this[MN], this._e5, this._nfq), _ && this._mf(a))
        },
        node: null,
        uiBounds: null
    },
        N(wL, TB),
        Th[br] = {
            layoutDatas: null,
            isMovable: function(t) {
                return ! this[Hd][t.id]
            },
            _6u: !1,
            _49: function() {
                this._6u = !0,
                    this[jo]._1w[qd](this._nd1, this),
                    this[jo]._1j[qd](this._2s, this)
            },
            _27: function() {
                this._6u = !1,
                    this[jo]._1w[yb](this._nd1, this),
                    this[jo]._1j[yb](this._2s, this)
            },
            invalidateFlag: !0,
            invalidateLayoutDatas: function() {
                this[Op] = !0
            },
            resetLayoutDatas: function() {
                return this[Op] = !1,
                    this[SN] = Ih[Bh](this)
            },
            _2s: function(t) {
                Mh[J$] == t[Ad] ? (this[Hd] = {},
                    t[Nd][uc](function(t) {
                            this[Hd][t.id] = t
                        },
                        this)) : Mh[eF] == t[Ad] && (this[Hd] = {})
            },
            _nd1: function() {
                this[PN]()
            },
            isRunning: function() {
                return this[IN] && this[IN]._e8()
            },
            getLayoutResult: function() {
                this[TN](),
                    this[CN]();
                for (var t = this[ON](this[SN][$N] || 0, this[SN][FN] || 0), i = 0; t > i && this[sF](!1) !== !1; i++);
                var n = this[SN][AN];
                return this[NN](),
                    n
            },
            _lu: function() {
                return ! 1
            },
            step: function(t) {
                if (t === !1) return this._lu(this[qN]); (this[Op] || !this[SN]) && this[CN]();
                var i = this._lu(t),
                    n = this[SN][AN];
                for (var e in n) {
                    var s = n[e],
                        h = s[HA];
                    this[qC](h) ? h[NC](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
                }
                return i
            },
            onstop: function() {
                delete this[SN]
            },
            start: function(t) {
                if (this[BN]()) return ! 1;
                this._6u || this._49(),
                this._jdr || (this._jdr = L(this,
                    function(t) {
                        return this[sF](t)
                    })),
                    this[PN](),
                    this[IN] = new jD(this._jdr);
                var i = this;
                return this[IN]._kn(function() {
                    i[NN](),
                    t && t()
                }),
                    !0
            },
            stop: function() {
                this[IN] && (this[IN]._lr(), this[NN]())
            },
            getMaxIterations: function(t) {
                return Math[Ia](1e3, 3 * t + 10)
            },
            minEnergyFunction: function(t, i) {
                return 10 + Math[Ta](t + i, 1.4)
            },
            resetGraph: function() {
                this._6u || this._49(),
                    this[CN]()
            },
            destroy: function() {
                this[TN](),
                    this._27()
            }
        },
        N(Th, aL);
    var mL = function(t, i, n, e) {
        this[jo] = t,
        E(i) && (this[Ul] = i),
        E(n) && (this[DN] = n),
        E(e) && (this[RN] = e)
    };
    MD[zN] = mL;
    var jL = LN,
        pL = GN,
        kL = YN,
        ML = HN;
    ED[XN] = jL,
        ED[WN] = pL,
        ED[VN] = kL,
        ED[UN] = ML,
        mL[br] = {
            angleSpacing: jL,
            radiusMode: ML,
            gap: 4,
            radius: 50,
            startAngle: 0,
            _9y: null,
            _ndo: null,
            _kg: function() {
                this._9y = null,
                    this._ndo = null
            },
            getLayoutResult: function(t) {
                var i, n = 0,
                    e = 0,
                    s = this[jo];
                t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[vN] || this[jo], i = t[$a]),
                    this._9y = {},
                    this._ndo = new PL(this);
                var h = {},
                    r = DL(s, this._nfu, this);
                return r && (this._ndo._f3 && 1 == this._ndo._f3[qh] && (this._ndo = this._ndo._f3[0]), this._ndo._ed(!0), this._ndo._66(n, e, this[RN], h, i)),
                    this._kg(),
                    h
            },
            _nfu: function(t, i) {
                if (this[Rd](t)) {
                    var n = i ? this._9y[i.id] : this._ndo;
                    this._9y[t.id] = new PL(this, t, n)
                }
            },
            defaultSize: 40,
            getRadius: function() {
                return this[Ul]
            },
            getNodeSize: function(t) {
                if (this[jo]._8g._ndb) {
                    var i = this[jo][mf](t);
                    if (i) return (i._fe[fa] + i._fe[aa]) / 2
                }
                return this[cN]
            },
            getGap: function() {
                return this[DN]
            },
            _34: function(t, i, n) {
                return this[uN](t, i, n) + this[QN](t, i, n)
            }
        };
    var EL = function(t) {
            var i, n = this._f3[qh],
                e = 0,
                s = 0;
            if (l(this._f3,
                    function(t) {
                        var n = t._ed();
                        1 > n && (n = 1),
                            s += n,
                        n > e && (e = n, i = t)
                    },
                    this), n > 1) {
                var h = 0,
                    r = {},
                    f = s / n / 3;
                s = 0,
                    l(this._f3,
                        function(t) {
                            var i = t._m8;
                            f > i && (i = f),
                                r[t.id] = i,
                                s += i
                        },
                        this);
                var a = IL / s;
                l(this._f3,
                    function(i, n) {
                        var e = r[i.id],
                            s = e * a;
                        0 === n && (h = t ? -s / 2 : -s),
                            i._l0 = h + s / 2,
                            i._kv = s,
                            h += s
                    },
                    this)
            }
            return [e, i._kv]
        },
        SL = function(t) {
            var i = this._8x,
                n = 2 * Math.PI / i,
                e = 0,
                s = t ? 0 : i > 1 ? -n / 2 : 0;
            return l(this._f3,
                function(t) {
                    t._l0 = s % IL,
                        s += n,
                        t._kv = n;
                    var i = t._ed();
                    i > e && (e = i)
                },
                this),
                [e, n]
        },
        PL = function(t, i, n) {
            this[JN] = t,
            i && (this._m7 = i, this.id = i.id),
            n && (n._fz(this), n._m9 = !1, this._l2 = n._l2 + 1)
        },
        IL = 2 * Math.PI;
    PL[br] = {
        _kv: 0,
        _l0: 0,
        _jv: 0,
        _ec: 0,
        _nfb: 0,
        _l2: 0,
        _m9: !0,
        _m8: 0,
        _ft: 0,
        _f3: null,
        _m7: null,
        _fz: function(t) {
            this._f3 || (this._f3 = []),
                this._f3[Xh](t),
                t[Cc] = this
        },
        _g4: function(t) {
            if (this._l0 = (this._l0 + t) % IL, this._f3) {
                var i = this._f3[qh];
                if (1 == i) return void this._f3[0]._g4(this._l0);
                t = this._l0 + Math.PI,
                    l(this._f3,
                        function(i) {
                            i._g4(t)
                        },
                        this)
            }
        },
        _8x: 0,
        _6r: function(t) {
            return this._m7 && (this._ft = this[JN]._34(this._m7, this._l2, this._m9) / 2),
                this._f3 ? (this._ft, this._8x = this._f3[qh], this._8x <= 2 || this[JN][ZN] == pL ? SL[Bh](this, t) : EL[Bh](this, t)) : null
        },
        _ed: function(t) {
            var i = this._6r(t);
            if (!i) return this._m8 = this._ft;
            var n = i[0],
                e = i[1],
                s = this[JN][KN](this._m7, this._l2);
            if (s < this._ft && (s = this._ft), this._ec = s, this._ft + n > s && (s = this._ft + n), n && this._8x > 1 && e < Math.PI) {
                var h = n / Math[Xr](e / 2);
                h > s && (s = h)
            }
            return this._jv = s,
                this._m8 = s + n,
            this._m7 && this._f3 && this[JN][tq] == ML && l(this._f3,
                function(t) {
                    var i = t._m8;
                    1 == t._8x && (i /= 2);
                    var n = this._ft + i,
                        e = t._kv;
                    if (e && e < Math.PI) {
                        var s = Math[Xr](e / 2),
                            h = i / s;
                        h > i && (i = h)
                    }
                    n > i && (i = n),
                        t._nfb = i
                },
                this),
            (!this._m7 || t) && this._g4(0),
                this._m8
        },
        _66: function(t, i, n, e, s) {
            if (this._m7 && (e[this._m7.id] = {
                    x: t,
                    y: i,
                    node: this._m7
                },
                s && s[Cl](t - this._ft / 2, i - this._ft / 2, this._ft, this._ft)), this._f3) {
                if (!this._m7 && 1 == this._f3[qh]) return void this._f3[0]._66(t, i, n, e, s);
                n = n || 0;
                var h = this._jv,
                    r = this._ec;
                l(this._f3,
                    function(f) {
                        var a = h;
                        f._nfb && (a = Math[Ea](r, f._nfb));
                        var _ = f._l0 + n,
                            c = t + a * Math[Hr](_),
                            u = i + a * Math[Xr](_);
                        f._66(c, u, n, e, s)
                    },
                    this)
            }
        }
    },
        N(mL, aL);
    var TL = function() {
        q(this, TL, arguments)
    };
    N(TL, Ch);
    var CL = function(t, i) {
        this[iq] = t,
            this[nq] = i,
            t == i ? (this[qc] = !0, this._kl = t._k8) : this._kl = new pB,
            this._88 = [],
            this._fx = mB[eq]
    };
    mB[eq] = !0,
        CL[br] = {
            node1: null,
            node2: null,
            _kl: null,
            _fx: mB[eq],
            _88: null,
            _gv: null,
            agentEdge: null,
            _nbg: function(t, i, n) {
                this._kl[uc](function(e) {
                    return n && e[Wc] != n && e[Fc] != n ? void 0 : t[Bh](i, e)
                })
            },
            _6c: 0,
            _6g: 0,
            _i0: function(t, i) {
                return this._kl[ir](t) === !1 ? !1 : (i == this[iq] ? this._6c++:this._6g++, this._ndb ? void this._1b(t) : void(this._ndb = !0))
            },
            _nfr: function(t, i) {
                return this._kl[Yh](t) === !1 ? !1 : (i == this[iq] ? this._6c--:this._6g--, this._nf9BindableFlag = !0, this._6l = !0, void this._kl[uc](function(t) {
                        t._edgeBundleInvalidateFlag = !0,
                            t.__55 = !0
                    },
                    this))
            },
            _1b: function(t) {
                this._nf9BindableFlag = !0,
                    this._6l = !0,
                    t._edgeBundleInvalidateFlag = !0,
                    t.__55 = !0
            },
            _nf9: function() {
                this._6l || (this._6l = !0, this._kl[uc](function(t) {
                    t._edgeBundleInvalidateFlag = !0
                }))
            },
            isEmpty: function() {
                return this._kl[H_]()
            },
            isPositiveOrder: function(t) {
                return this[iq] == t[Wc] || this[iq] == t[Fc]
            },
            canBind: function(t) {
                return t && this._6l && this._fb(t),
                this._kl[qh] > 1 && this._88[qh] > 1
            },
            _i1: function(t) {
                return this._88[Wh](t)
            },
            getYOffset: function(t) {
                return this._gv[t.id]
            },
            _52: function(t) {
                if (!this[lT]()) return void(this._gv = {});
                var i = {},
                    n = this._88[qh];
                if (! (2 > n)) {
                    var e = 0,
                        s = this._88[0];
                    i[s.id] = 0;
                    for (var h = 1; n > h; h++) {
                        s = this._88[h];
                        var r = t[Lu](s, wz[cS]) || Bz[wz[cS]];
                        e += r,
                            i[s.id] = e
                    }
                    if (!this[qc]) for (var f = e / 2,
                                            h = 0; n > h; h++) s = this._88[h],
                        i[s.id] -= f;
                    this._gv = i
                }
            },
            _nbj: function(t) {
                return this._fx == t ? !1 : (this._fx = t, this._nf9(), !0)
            },
            reverseExpanded: function() {
                return this._nbj(!this._fx)
            },
            _1i: function() {
                this._nf9BindableFlag = !1,
                    this._88[qh] = 0;
                var t;
                this._kl[uc](function(i) {
                        if (i[dT]()) {
                            if (!this[vT](i)) return t || (t = []),
                                void t[Xh](i);
                            this._88[Xh](i)
                        }
                    },
                    this),
                t && (this._88 = t[Lh](this._88))
            },
            _dl: function(t) {
                return t == this[wT] || !this[lT]() || this._fx
            },
            _fb: function(t) {
                this._6l = !1,
                    this._kl[uc](function(t) {
                        t._edgeBundleInvalidateFlag = !1
                    }),
                this._nf9BindableFlag && this._1i();
                var i = this._fx,
                    n = this[lT](),
                    e = !n || i;
                l(this._88,
                    function(t) {
                        t._$w = !0,
                            t._hkInBundle = e,
                        e && (t.__55 = !0)
                    },
                    this),
                    e ? this[wT] = null: (this[wT] = this._88[0], this[wT]._hkInBundle = !0, this[wT].__55 = !0),
                e && this._52(t)
            }
        },
        J(CL[br], {
            bindableEdges: {
                get: function() {
                    return this._88
                }
            },
            edges: {
                get: function() {
                    return this._kl._j2
                }
            },
            expanded: {
                get: function() {
                    return this._fx
                },
                set: function(t) {
                    return this._fx == t ? !1 : (this._fx = t, void this._nf9())
                }
            }
        });
    var OL = function() {
            function t(t, i) {
                this[HA] = t,
                    this[lI] = i
            }
            function i() {
                this[sq] = [],
                    this[hq] = 0
            }
            var n = -1e6,
                e = .8;
            i[br] = {
                isEmpty: function() {
                    return 0 === this[hq]
                },
                push: function(i, n) {
                    var e = this[sq][this[hq]];
                    e ? (e[HA] = i, e[lI] = n) : this[sq][this[hq]] = new t(i, n),
                        ++this[hq]
                },
                pop: function() {
                    return this[hq] > 0 ? this[sq][--this[hq]] : void 0
                },
                reset: function() {
                    this[hq] = 0
                }
            };
            var s = [],
                h = new i,
                r = function() {
                    this[lI] = null,
                        this[rq] = [],
                        this[fq] = 0,
                        this[aq] = 0,
                        this[_q] = 0,
                        this[yf] = 0,
                        this[gf] = 0,
                        this[Wr] = 0,
                        this[Vr] = 0,
                        this[cq] = !1
                },
                f = [],
                a = 0,
                _ = function() {
                    var t;
                    return f[a] ? (t = f[a], t[rq][0] = null, t[rq][1] = null, t[rq][2] = null, t[rq][3] = null, t[lI] = null, t[fq] = t[aq] = t[_q] = 0, t[yf] = t[Vr] = t[gf] = t[Wr] = 0, t[cq] = !1) : (t = new r, f[a] = t),
                        ++a,
                        t
                },
                c = _(),
                u = function(t, i) {
                    var n = Math[Ur](t.x - i.x),
                        e = Math[Ur](t.y - i.y);
                    return 1e-8 > n && 1e-8 > e
                },
                o = function(t) {
                    for (h[uq](), h[Xh](c, t); ! h[H_]();) {
                        var i = h[pv](),
                            n = i[HA],
                            e = i[lI];
                        if (n[cq]) {
                            var s = e.x,
                                r = e.y;
                            n[fq] = n[fq] + e[fq],
                                n[aq] = n[aq] + e[fq] * s,
                                n[_q] = n[_q] + e[fq] * r;
                            var f = 0,
                                a = n[yf],
                                o = (n[Vr] + a) / 2,
                                d = n[gf],
                                l = (n[Wr] + d) / 2;
                            if (s > o) {
                                f += 1;
                                var b = a;
                                a = o,
                                    o += o - b
                            }
                            if (r > l) {
                                f += 2;
                                var v = d;
                                d = l,
                                    l += l - v
                            }
                            var y = n[rq][f];
                            y || (y = _(), y[yf] = a, y[gf] = d, y[Vr] = o, y[Wr] = l, n[rq][f] = y),
                                h[Xh](y, e)
                        } else if (n[lI]) {
                            var g = n[lI];
                            if (n[lI] = null, n[cq] = !0, u(g, e)) {
                                if (n[Vr] - n[yf] < 1e-8) return;
                                do {
                                    var x = Math[or](), w = (n[Vr] - n[yf]) * x, m = (n[Wr] - n[gf]) * x;
                                    g.x = n[yf] + w, g.y = n[gf] + m
                                } while ( u ( g , e ))
                            }
                            h[Xh](n, g),
                                h[Xh](n, e)
                        } else n[lI] = e
                    }
                },
                d = function(t) {
                    var i, h, r, f, a = s,
                        _ = 1,
                        u = 0,
                        o = 1;
                    for (a[0] = c; _;) {
                        var d = a[u],
                            l = d[lI];
                        _ -= 1,
                            u += 1,
                            l && l !== t ? (h = l.x - t.x, r = l.y - t.y, f = Math[Pa](h * h + r * r), 0 === f && (h = (Math[or]() - .5) / 50, r = (Math[or]() - .5) / 50, f = Math[Pa](h * h + r * r)), i = n * l[fq] * t[fq] / (f * f), -1e3 > i && (i = -1e3), i /= f, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[aq] / d[fq] - t.x, r = d[_q] / d[fq] - t.y, f = Math[Pa](h * h + r * r), 0 === f && (h = (Math[or]() - .5) / 50, r = (Math[or]() - .5) / 50, f = Math[Pa](h * h + r * r)), (d[Vr] - d[yf]) / f < e ? (i = n * d[fq] * t[fq] / (f * f), -1e3 > i && (i = -1e3), i /= f, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[rq][0] && (a[o] = d[rq][0], _ += 1, o += 1), d[rq][1] && (a[o] = d[rq][1], _ += 1, o += 1), d[rq][2] && (a[o] = d[rq][2], _ += 1, o += 1), d[rq][3] && (a[o] = d[rq][3], _ += 1, o += 1)))
                    }
                },
                l = function(t, i) {
                    n = i;
                    var e, s = Number[Ol],
                        h = Number[Ol],
                        r = Number[oq],
                        f = Number[oq],
                        u = t,
                        d = u[qh];
                    for (e = d; e--;) {
                        var l = u[e].x,
                            b = u[e].y;
                        s > l && (s = l),
                        l > r && (r = l),
                        h > b && (h = b),
                        b > f && (f = b)
                    }
                    var v = r - s,
                        y = f - h;
                    for (v > y ? f = h + v: r = s + y, a = 0, c = _(), c[yf] = s, c[Vr] = r, c[gf] = h, c[Wr] = f, e = d; e--;) o(u[e], c)
                };
            return {
                init: l,
                update: d
            }
        },
        $L = function(t) {
            t.fx -= t.x * this[dq],
                t.fy -= t.y * this[dq]
        },
        FL = function(t) {
            if (0 != t.k) {
                var i = this._d4,
                    n = t[Nc],
                    e = t.to,
                    s = e.x - n.x,
                    h = e.y - n.y,
                    r = s * s + h * h,
                    f = Math[Pa](r) || .1,
                    a = (f - i) * t.k * this[lq];
                a /= f;
                var _ = a * s,
                    c = a * h;
                e.fx -= _,
                    e.fy -= c,
                    n.fx += _,
                    n.fy += c
            }
        };
    Ch[br] = {
        appendNodeInfo: function(t, i) {
            i[fq] = t[bq] || 1,
                i.fx = 0,
                i.fy = 0,
                i.vx = 0,
                i.vy = 0
        },
        appendEdgeInfo: function(t, i) {
            i.k = t[vq] || 1
        },
        setMass: function(t, i) {
            t[bq] = i,
            this[SN] && this[SN][AN] && (t = this[SN][AN][t.id], t && (t[fq] = i))
        },
        setElasticity: function(t, i) {
            t[vq] = i,
            this[SN] && this[SN][tp] && (t = this[SN][tp][t.id], t && (t.k = i))
        },
        _d4: 50,
        _ie: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _lp: 1e3,
        _jp: function(t) {
            return this._lp + .3 * (t - this._lp)
        },
        _lu: function(t, i) {
            var n = (Date[Kf](), this[SN][AN]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[or]() - .5, s.y += Math[or]() - .5),
                    $L[Bh](this, s)
            }
            var h = this._nbodyForce;
            h || (h = this._nbodyForce = OL()),
                h[id](this[SN][yq], -this[gq] * this[gq] * this[gq]);
            for (var e in n) h[xq](n[e]);
            if (this[lq]) {
                var r = this[SN][tp];
                for (var e in r) FL[Bh](this, r[e])
            }
            return this._lw(t)
        },
        _lw: function(t) {
            var i = this[SN][wq],
                n = (this[SN][mq], this[SN][AN]),
                t = this[qN],
                e = 0,
                s = this._ie;
            for (var h in n) {
                var r = n[h],
                    f = r.fx / r[fq],
                    a = r.fy / r[fq],
                    _ = r.vx += f * t,
                    c = r.vy += a * t;
                r.x += _ * t,
                    r.y += c * t,
                i > e && (e += 2 * (_ * _ + c * c)),
                    r.fx = 0,
                    r.fy = 0,
                    r.vx *= s,
                    r.vy *= s
            }
            return this[SN][mq] = e,
            e >= i
        }
    },
        N(Ch, Th),
        MD[jq] = Ch;
    var AL = function(t) {
        this[YA] = t
    };
    AL[br] = {
        oldLocations: null,
        _ey: null,
        duration: 700,
        animationType: mD[BO],
        _7f: function(t) {
            if (this._ey = t, this[pq] = {},
                    t) for (var i in t) {
                var n = t[i],
                    e = n[HA];
                this[pq][i] = {
                    x: e.x,
                    y: e.y
                }
            }
        },
        setLocation: function(t, i, n) {
            t[NC](i, n)
        },
        forEach: function(t, i) {
            for (var n in this[YA]) {
                var e = this[pq][n],
                    s = this[YA][n];
                t[Bh](i, e, s)
            }
        },
        _jn: function(t) {
            this[uc](function(i, n) {
                    var e = n[HA],
                        s = i.x + (n.x - i.x) * t,
                        h = i.y + (n.y - i.y) * t;
                    this[NC](e, s, h)
                },
                this)
        },
        stop: function() {
            this._ndnimate && this._ndnimate._lr()
        },
        start: function(t) {
            this._ndnimate ? (this._ndnimate._lr(), this._ndnimate._i5 = this[DO], this._ndnimate._epType = this[zO], this._ndnimate._onfinish = this._onfinish) : this._ndnimate = new pD(this._jn, this, this[DO], this[zO]),
                this._ndnimate._kn(t)
        }
    },
        J(AL[br], {
            locations: {
                get: function() {
                    return this._ey
                },
                set: function(t) {
                    this._ey != t && this._7f(t)
                }
            }
        });
    var NL = function(t) {
            var i = new pB;
            return t[uc](function(t) {
                t instanceof lz && (t[kq]() || i[ir](t._dt || t))
            }),
                i
        },
        qL = function(t, i, n, e, s, h) {
            if (i instanceof ZB) return t(i, n, e, s, h),
                i;
            if (i instanceof Rz) {
                var r = new pB;
                i._kcModel[uc](function(t) {
                    return i[sd](t) ? t._hw() && t._fx && t[Ah]() ? void(t[rp] && (t[rp][Op] = !1)) : void r[ir](t) : void 0
                }),
                    i = r
            }
            var i = NL(i);
            return l(i,
                function(i) {
                    t(i, n, e, s, h)
                }),
                i
        },
        BL = function(t, i, n, e, s) {
            return qL(RL, t, i, n, e, s)
        },
        DL = function(t, i, n, e, s) {
            return qL(zL, t, i, n, e, s)
        };
    Je[br][Mq] = function(t, i, n, e) {
        BL(this, t, i, n, e)
    },
        Je[br][Eq] = function(t, i, n, e) {
            DL(this, t, i, n, e)
        };
    var RL = function(t, i, n, e, s) {
            function h(t, i, n, e, s, r, f, a) {
                t._marker = r,
                e || i[Bh](n, t, a, f),
                    Oh(t,
                        function(a) {
                            h(a, i, n, e, s, r, f + 1, t)
                        },
                        a, s, r),
                e && i[Bh](n, t, a, f)
            }
            h(t, i, n, e, s, {},
                0)
        },
        zL = function(t, i, n, e, s) {
            function h(t, i, n, e, s, r, f) {
                var a, _ = t[qh];
                t[uc](function(t, h) {
                    var c = t.v;
                    c._marker = r,
                    e || i[Bh](n, c, t._from, f, h, _),
                        Oh(c,
                            function(t) {
                                a || (a = []),
                                    t._marker = r,
                                    a[Xh]({
                                        v: t,
                                        _from: c
                                    })
                            },
                            c, s, r)
                }),
                a && h(a, i, n, e, s, r, f + 1),
                e && t[uc](function(t, e) {
                    i[Bh](n, t.v, t._from, f, e, _)
                })
            }
            h([{
                    v: t
                }], i, n, e, s, {},
                0)
        };
    MD[Sq] = U,
        MD[zr] = ti,
        MD[Gr] = function(t) {
            console[Gr](t)
        },
        MD[Lr] = ii,
        MD[Pq] = fB,
        MD[Iq] = rB,
        MD[Tq] = _B,
        MD[Cq] = cB,
        MD[Oq] = uB,
        MD[$q] = dB,
        MD[Fq] = oB,
        MD[Aq] = lB,
        MD[Nq] = Bz,
        MD[qq] = mB,
        MD[XC] = wz,
        MD[Bq] = ED,
        MD[Dq] = cR,
        MD[Rq] = Rz,
        MD[zq] = gz,
        MD[Lq] = Cz,
        MD[Gq] = rs,
        MD[u$] = hs,
        MD[Yq] = $z,
        MD[Hq] = Oz,
        MD[Xq] = vz,
        MD[Wq] = fR,
        MD[HI] = YD,
        MD[Vq] = Mh,
        MD[Fj] = oz,
        MD[_C] = lz,
        MD[VC] = dz,
        MD[Uq] = Je,
        MD[Qq] = CL,
        MD[Jq] = xL,
        MD[Er] = Zq;
    var LL = Kq;
    return MD[Xm] = tB,
        MD[Um] = iB,
        MD[Qm] = "Copyright © 2014 Qunee.com",
        MD[FF] = oi,
        MD[nB] = zz,
        ti = function() {},
        MD[Vm] = eB,
        MD
} (window, document);
