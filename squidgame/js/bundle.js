! function() {
    "use strict";
    class t extends Laya.Script {
        constructor() {
            super(), this.scaleTime = .6, this.stateNum = 1
        }
        onAwake() {
            this.stateNum = 1, this.owner.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmal), this.owner.on(Laya.Event.MOUSE_UP, this, this.scaleBig), this.owner.on(Laya.Event.MOUSE_OUT, this, this.scaleBig)
        }
        scaleBig() {
            Laya.Tween.to(this.owner, {
                scaleX: 1,
                scaleY: 1
            }, this.scaleTime)
        }
        scaleSmal() {
            Laya.Tween.to(this.owner, {
                scaleX: .9,
                scaleY: .9
            }, this.scaleTime)
        }
        onEnable() {}
        onDisable() {}
    }
    class e extends Laya.Script {
        constructor() {
            super(), this.scaleTime = .1, this.zoomScale = .9
        }
        onEnable() {
            this.button = this.owner, this.originScale = new Laya.Vector2(this.button.scaleX, this.button.scaleY), this.button.on(Laya.Event.MOUSE_DOWN, this, this.setScale), this.button.on(Laya.Event.MOUSE_UP, this, this.resetNormal), this.button.on(Laya.Event.MOUSE_OUT, this, this.resetNormal)
        }
        resetNormal() {
            Laya.Tween.clearAll(this.button), Laya.Tween.to(this.button, {
                scaleX: this.originScale.x,
                scaleY: this.originScale.y
            }, 1e3 * this.scaleTime)
        }
        setScale() {
            Laya.Tween.clearAll(this.button), Laya.Tween.to(this.button, {
                scaleX: this.originScale.x * this.zoomScale,
                scaleY: this.originScale.y * this.zoomScale
            }, 1e3 * this.scaleTime)
        }
    }
    var i = 0,
        a = 0,
        n = {},
        s = {},
        o = function(t, e) {
            var i = t[e];
            i && (delete t[e], Laya.timer.clear(null, i))
        };
    class r {
        constructor() {}
        static formatTen(t) {
            return (t > 9 ? "" : "0") + t
        }
        static formatHour(t, e = ":") {
            var i = r.formatTen,
                a = (t / 60 | 0) % 60,
                n = t % 60;
            return i(t / 3600 | 0) + e + i(a) + e + i(n)
        }
        static getDay(t) {
            return (t / 36e5 + 8) / 24 | 0
        }
        static isSameDay(t, e) {
            var i = r.getDay;
            return i(t) == i(e)
        }
        static setTimeout(t, e, a, ...s) {
            var o = ++i,
                r = n[o] = function() {
                    t.apply(e, s), delete n[o]
                };
            return Laya.timer.once(a, null, r), o
        }
        static clearTimeout(t) {
            o(n, t)
        }
        static setInterval(t, e, i, ...n) {
            var o = ++a,
                r = s[o] = function() {
                    t.apply(e, n)
                };
            return Laya.timer.loop(i, null, r), o
        }
        static clearInterval(t) {
            o(s, t)
        }
    }
    var h = Laya.Vector3;
    class l {
        constructor() {}
        static cloneArray(t) {
            let e = [];
            for (let i = 0; i < t.length; i++) e.push(t[i]);
            return e
        }
        static DistanceSquared(t, e, i, a) {
            let n = t - i,
                s = e - a;
            return n * n + s * s
        }
        static DistanceSquared3D(t, e) {
            return Laya.Vector3.distanceSquared(t, e)
        }
        static MapDistanceSquared(t, e) {
            let i = t.x - e.x,
                a = t.z - e.z;
            return i * i + a * a
        }
        static GetAngle(t, e) {
            if (0 == e) return t > 0 ? 0 : 180;
            let i = 180 * Math.atan(t / e) / Math.PI;
            return e < 0 && (i = t < 0 ? 180 + Math.abs(i) : 180 - Math.abs(i)), i = 90 - i
        }
        static parseInt(t) {
            if (null == t || "undefined" == t) return 0;
            let e = parseFloat(t);
            return e ? Math.floor(e) : 0
        }
        static isEmpty(t) {
            return void 0 === t || null == t || "" == t
        }
        static isEqual(t, e) {
            let i = t - e;
            return l.nearZero(i)
        }
        static nearZero(t) {
            return t >= -.001 && t <= .001
        }
        static equalVec(t, e) {
            return this.isEqual(t.x, e.x) && this.isEqual(t.y, e.y) && this.isEqual(t.z, e.z)
        }
        static vec3NearZero(t) {
            return this.nearZero(t.x) && this.nearZero(t.y) && this.nearZero(t.z)
        }
        static SmoothDamp(t, e, i, a, n = -1, s, o) {
            -1 == n && (n = Number.MAX_VALUE);
            let r = 2 / (a = Math.max(1e-4, a)),
                d = r * s,
                c = 1 / (1 + d + .48 * d * d + .235 * d * d * d);
            h.subtract(t, e, l._changeVec), e.cloneTo(l._originalTo);
            let u = n * a;
            l.ClampMagnitude(l._changeVec, u), h.subtract(t, l._changeVec, e), h.scale(l._changeVec, r, l._tmpVec), h.add(i, l._tmpVec, l._tmpVec), h.scale(l._tmpVec, s, l._tmpVec), h.scale(l._tmpVec, r, l._tmpVec2), h.subtract(i, l._tmpVec2, l._tmpVec2), h.scale(l._tmpVec2, c, i), h.add(l._changeVec, l._tmpVec, l._tmpVec), h.scale(l._tmpVec, c, l._tmpVec), h.add(e, l._tmpVec, o), h.subtract(l._originalTo, t, l._tmpVec), h.subtract(o, l._originalTo, l._tmpVec2), h.dot(l._tmpVec, l._tmpVec2) > 0 && (l._originalTo.cloneTo(o), h.subtract(o, l._originalTo, l._tmpVec), h.scale(l._tmpVec, 1 / s, i))
        }
        static ClampMagnitude(t, e) {
            h.scalarLengthSquared(t) > e * e && (h.normalize(t, t), h.scale(t, e, t))
        }
        static Range(t, e) {
            return t + Math.random() * (e - t)
        }
        static IntRange(t, e) {
            return Math.round(l.Range(t, e))
        }
        static DegToRad(t) {
            return t * Math.PI / 180
        }
        static RadToDeg(t) {
            return 180 * t / Math.PI
        }
        static getGravity(t, e) {
            return 2 * t / (e * e)
        }
        static RotatePos(t, e, i, a) {
            let n = l.DegToRad(i - 180),
                s = Math.cos(n),
                o = Math.sin(n),
                r = (t.x - e.x) * s + (t.z - e.z) * o + e.x,
                h = -(t.x - e.x) * o + (t.z - e.z) * s + e.z;
            a.setValue(r, 0, h)
        }
        static formatTimestamp(t) {
            let e, i, a, n, s, o, r;
            return i = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), n = Math.floor(t % 3600 % 60), e = (s = i >= 10 ? i.toString() : "0" + i) + ":" + (o = a >= 10 ? a.toString() : "0" + a) + ":" + (r = n >= 10 ? n.toString() : "0" + n)
        }
        static formatTime(t) {
            let e, i, a, n;
            return e = (i = Math.floor(t / 60)) + ":" + (n = (a = Math.floor(t % 60)) >= 10 ? a.toString() : "0" + a)
        }
        static formatNum(t) {
            let e = t.toString();
            return 1 == e.length ? e = "00" + t : 2 == e.length && (e = "0" + t), e
        }
        static log(...t) {
            let e = l.formatDate(new Date, "[hh:mm:ss.S]");
            t.forEach(t => {
                e += " " + JSON.stringify(t)
            }), console.log(e)
        }
        static formatDate(t, e) {
            let i = {
                "Y+": t.getFullYear(),
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let t in i) new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[t] : ("00" + i[t]).substr(("" + i[t]).length)));
            return e
        }
        static addRedPoint(t, e, i = 8, a = 1) {
            let n = t.getChildByName("redPoint");
            n ? n.visible = e : e && ((n = new Laya.Image("game/game_redPoint.png")).name = "redPoint", t.addChild(n), n.top = i, n.right = a)
        }
        static shuffle(t) {
            for (var e = t.length, i = 0; i < e - 1; i++) {
                var a = Math.floor(Math.random() * (e - i)),
                    n = t[a];
                t[a] = t[e - i - 1], t[e - i - 1] = n
            }
            return t
        }
        static getTodayDate() {
            let t = new Date;
            return t.getFullYear() + "_" + (t.getMonth() + 1) + "_" + t.getDate()
        }
        static mathSinCos(t, e) {
            return Math[t](e * Math.PI / 180)
        }
        static sin(t) {
            return l.mathSinCos("sin", t)
        }
        static cos(t) {
            return t % 180 == 90 ? 0 : l.mathSinCos("cos", t)
        }
        static initNativeFiles(t, e) {
            var i = [Laya.MiniAdpter, Laya.VVMiniAdapter],
                a = !1;
            for (let t in i) {
                let n = i[t];
                n && (n.AutoCacheDownFile = !0, n.nativefiles = e, a = !0)
            }
            if (a) {
                let i = Laya.MiniFileMgr;
                if (i) {
                    let a, n, s, o = t.length,
                        r = e.length;
                    i.isLocalNativeFile = function(i) {
                        if (s = 0 == i.indexOf(t) ? o : 0, "/" !== i[0])
                            for (a = 0; a < r; a++)
                                if (n = e[a], i.indexOf(n, s) == s && "/" == i[s + n.length]) return !0;
                        return !1
                    }
                }
                Laya.URL.basePath = Laya.URL._basePath = t
            }
        }
        static initCDNFiles(t, e) {
            var i = [Laya.MiniAdpter, Laya.VVMiniAdapter],
                a = !1;
            for (let t in i) i[t] && (a = !0);
            if (a) {
                let i, a, n = Laya.URL,
                    s = n.customFormat;
                n.customFormat = function(n) {
                    if (n = s(n), (a = n.indexOf("/")) > 0) {
                        i = n.substr(0, a);
                        for (let a in e)
                            if (e[a] === i) {
                                n = t + n;
                                break
                            }
                    }
                    return n
                }
            }
        }
        static memset(t, e) {
            return Array.apply(null, Array(t)).map(function(t, i) {
                return e
            })
        }
        static memset2(t, e) {
            return Array.apply(null, Array(t)).map(function(t, i) {
                return e(i)
            })
        }
        static randomInArray(t, e) {
            var i = t.length,
                a = i;
            if (i > 1 && null != e) {
                let n = t.indexOf(e);
                n > -1 && (i--, a = n)
            }
            var n = Math.random() * i | 0;
            return n >= a && n++, t[n]
        }
        static randomSort(t) {
            return t.sort(function(t, e) {
                return Math.random() - .5
            })
        }
        static rmSplice(t) {
            var e = t.length,
                i = Math.random() * e | 0;
            return t.splice(i, 1)[0]
        }
        static removeItem(t, e) {
            if (t)
                for (let i = 0, a = t.length; i < a; i++) e(t[i]) && (t.splice(i, 1), i--, a--)
        }
        static formatStringReg(t, e, i) {
            for (let a in i) {
                i[a];
                if (!t.test(e)) break;
                e = e.replace(t, i[a])
            }
            return e
        }
        static formatString(t, ...e) {
            return t = t.replace(/%%/g, "%"), l.formatStringReg(/%d|%s/i, t, e)
        }
        static drawRoundRect(t, e, i, a) {
            var n = [
                ["moveTo", a, 0],
                ["lineTo", e - a, 0],
                ["arcTo", e, 0, e, a, a],
                ["lineTo", e, i - a],
                ["arcTo", e, i, e - a, i, a],
                ["lineTo", a, i],
                ["arcTo", 0, i, 0, i - a, a],
                ["lineTo", 0, a],
                ["arcTo", 0, 0, a, 0, a]
            ];
            t.drawPath(0, 0, n, {
                fillStyle: "#0"
            })
        }
        static uiEnableCall(t, e, i, ...a) {
            if (t._getBit(Laya.Const.AWAKED)) e.apply(i, a);
            else {
                let n = t.onEnable;
                t.onEnable = function() {
                    n.call(t), t.onEnable = n, e.apply(i, a)
                }
            }
        }
        static getRes(t, e) {
            return new Promise(function(i) {
                let a = Laya.loader,
                    n = a.getRes(t);
                n ? i(n) : a.load(t, Laya.Handler.create(null, i), null, e)
            })
        }
        static multipleClick(t, e, i, a, n) {
            var s, o, h, l = 0;
            t.on(Laya.Event.CLICK, this, function() {
                (o = Date.now()) - s > i && (l = 0), s = o, ++l >= e && (l = 0, a && a.call(n)), r.clearTimeout(h), h = r.setTimeout(function() {
                    l = 0
                }, null, i)
            })
        }
        static copy(t) {
            var e;
            if ("object" == typeof t) {
                e = t instanceof Array ? [] : Object.create(null);
                for (let i in t) e[i] = l.copy(t[i])
            } else e = t;
            return e
        }
        static copyAttrs(t, e, i) {
            for (let a = 0, n = t.length; a < n; a++) {
                let n = t[a];
                e[n] = i[n]
            }
        }
        static globalToLocal(t, e, i) {
            var a = Laya.Point.TEMP;
            return a.setTo(e, i), t.globalToLocal(a), a
        }
        static getFormatBySecond3(t = 0) {
            var e = Math.floor(t / 3600),
                i = Math.floor((t - 3600 * e) / 60),
                a = Math.floor((t - 3600 * e) % 60);
            return (0 == i ? "00" : i < 10 ? "0" + i : "" + i) + ":" + (0 == a ? "00" : a < 10 ? "0" + a : "" + a)
        }
        static showTips(t, e = 36, i = 2e3) {
            let a, n = this._arrTips;
            if (null == n) {
                n = [];
                let t = new Laya.Box;
                Laya.stage.addChild(t), t.zOrder = this._tipsZOrder;
                for (let i = 0; i < 3; i++) {
                    let i = new Laya.Box;
                    i.anchorX = i.anchorY = .5, i.centerX = 0;
                    let s = new Laya.Box;
                    s.bgColor = "#000000", s.width = 800, s.height = 80, s.alpha = .7, i.addChild(s), a = new Laya.Text, i.addChild(a), a.fontSize = e, a.color = "#FFFFFF", a.width = 800, a.height = 50, a.y = 15, a.align = "center", a.valign = "middle", n.push(a), t.addChild(i), i.visible = !1
                }
                this._arrTips = n, t.width = 600, t.centerX = 0, t.centerY = -100
            }
            if (0 == n.length) return;
            (a = n.shift()).text = t, a.wordWrap = !0, a.color = "#FFFFFF";
            let s = i,
                o = a.parent;
            o.visible = !0, o.scale(.8, .8), o.alpha = 1, Laya.Tween.to(o, {
                scaleX: 1,
                scaleY: 1
            }, 200, Laya.Ease.backOut, Laya.Handler.create(this, function(t) {
                Laya.timer.once(s - 600, this, function() {
                    Laya.Tween.to(o, {
                        alpha: 0
                    }, 400, null, Laya.Handler.create(this, function() {
                        t.parent.visible = !1, n.push(t)
                    }))
                })
            }, [a]))
        }
    }
    l._originalTo = new h, l._changeVec = new h, l._tmpVec = new h, l._tmpVec2 = new h;
    class d {}
    d.RestScene = "res3d/Game/Conventional/Rest.ls", d.MainScene = "res3d/Game/Conventional/Game.ls", d.HomeScene = "res3d/Game/Conventional/Home.ls", d.ShopScene = "res3d/Game/Conventional/Shop.ls", d.Game2Scene = "res3d/Game/Conventional/Game2.ls", d.Game3Scene = "res3d/Game/Conventional/Game3.ls", d.Player = "res3d/Game/Conventional/Player.lh", d.Materials = "res3d/Game/Conventional/Materials.lh", d.Realtime_Shadow = !1, d.Enable_Fog = !1, d.Enable_Skybox = !1, d.GID = 100, d.PROGECT_NAME = "SurvivalParty", d.GAME_VERSION_NAME = "1.0.0";
    const c = {
        GameStart: "GameStatr",
        GameEnd: "GameEnd",
        CountDown: "CountDown",
        EnemyStart: "EnemyStart",
        RefreshGold: "RefreshGold"
    };
    var u = new Laya.EventDispatcher;
    class m extends Laya.Script {
        constructor() {
            super(...arguments), this.owner = null
        }
        onAwake() {
            this.camera = this.owner.getChildByName("Main Camera"), this.transform = this.owner.transform
        }
        setTarget(t) {
            this.target = t, this.transform.position = this.target.transform.position
        }
        setAngle(t) {
            this.owner.transform.localRotationEulerY = this.owner.transform.localRotationEulerY - t / 2
        }
        onLateUpdate() {
            this.target && (this.transform.position = this.target.transform.position)
        }
    }
    class p {
        static get ins() {
            return this._ins || (this._ins = new p), this._ins
        }
        init(t) {
            this.scene = t || new Laya.Scene3D, Laya.stage.addChild(this.scene), this.scene.zOrder = -1, this.light = this.scene.getChildByName("Directional Light");
            let e = this.scene.getChildByName("Camera");
            e && (this.cameraCtrl = e.addComponent(m)), this.initLight()
        }
        getPrefab(t) {
            return this.scene.getChildByName("Prefabs").getChildByName("danzhu").clone()
        }
        initLight() {
            var t = this.light;
            return d.Realtime_Shadow && (t.shadowMode = Laya.ShadowMode.Hard, t.shadowDistance = 16, t.shadowResolution = 512), t
        }
        initFog() {
            d.Enable_Fog && (this.scene.enableFog = !0, this.scene.fogColor = new Laya.Vector3(0, 0, .6), this.scene.fogStart = 10, this.scene.fogRange = 40)
        }
        initSkybox() {
            d.Enable_Skybox && Laya.Material.load("nativescene/Conventional/Assets/Resources/Mat/Sky.lmat", Laya.Handler.create(this, this.loadSkyMaterial))
        }
        loadSkyMaterial(t) {
            var e = this.cameraCtrl.camera.skyRenderer;
            e.mesh = Laya.SkyBox.instance, e.material = t
        }
    }
    p._ins = null;
    class g {
        static set coin(t) {
            this.setItem("COIN", t)
        }
        static get coin() {
            return this.getItem("COIN", 0)
        }
        static set power(t) {
            this.setItem("POWER", t)
        }
        static get power() {
            return this.getItem("POWER", 10)
        }
        static set powerTime(t) {
            this.setItem("POWERTIME", t)
        }
        static get powerTime() {
            return this.getItem("POWERTIME", 0)
        }
        static set maxLevel(t) {
            this.setItem("MAXLEVEL", t)
        }
        static get maxLevel() {
            return this.getItem("MAXLEVEL", 0)
        }
        static set signDay(t) {
            this.setItem("SIGNDAY", t)
        }
        static get signDay() {
            return this.getItem("SIGNDAY", 0)
        }
        static set signNum(t) {
            this.setItem("SIGNNUM", t)
        }
        static get signNum() {
            return this.getItem("SIGNNUM", 1)
        }
        static set skinInfo(t) {
            this.setItem("SKININFO", t)
        }
        static get skinInfo() {
            return this.getItem("SKININFO", {})
        }
        static set curSkinUsed(t) {
            this.setItem("CURSKINUSED", t)
        }
        static get curSkinUsed() {
            return this.getItem("CURSKINUSED", {})
        }
        static set musicPlay(t) {
            this.setItem("MUSIC", t)
        }
        static get musicPlay() {
            return this.getItem("MUSIC", !0)
        }
        static set soundPlay(t) {
            this.setItem("SOUND", t)
        }
        static get soundPlay() {
            return this.getItem("SOUND", !0)
        }
        static set vibrate(t) {
            this.setItem("VIBRATE", t)
        }
        static get vibrate() {
            return this.getItem("VIBRATE", !0)
        }
        static set isNewPlay(t) {
            this.setItem("NEWPLAY", t)
        }
        static get isNewPlay() {
            return this.getItem("NEWPLAY", !0)
        }
        static get useHeadSkin() {
            return this.getItem("USEHEADSKIN", 0)
        }
        static set useHeadSkin(t) {
            this.setItem("USEHEADSKIN", t)
        }
        static get numSkinHead() {
            return this.getItem("NUMSKINHEAD", 1)
        }
        static set numSkinHead(t) {
            this.setItem("NUMSKINHEAD", t)
        }
        static skinHeadIsLock(t) {
            return this.skinHeadArr[t]
        }
        static get skinHeadArr() {
            return this.getItem("HEADSKINARR", [!1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0])
        }
        static set skinHeadArr(t) {
            this.setItem("HEADSKINARR", t)
        }
        static skinIsUseHead(t) {
            return t == this.useHeadSkin
        }
        static addSkinHead(t, e = !0) {
            if (this.skinHeadIsLock(t)) {
                let i = this.skinHeadArr;
                i[t] = !1, this.skinHeadArr = i, this.numSkinHead++, e && (this.useHeadSkin = t)
            }
        }
        static get useCBSkin() {
            return this.getItem("USECBSKIN", 0)
        }
        static set useCBSkin(t) {
            this.setItem("USECBSKIN", t)
        }
        static get numSkinCB() {
            return this.getItem("NUMSKINCB", 1)
        }
        static set numSkinCB(t) {
            this.setItem("NUMSKINCB", t)
        }
        static skinCBIsLock(t) {
            return this.skinCBArr[t]
        }
        static get skinCBArr() {
            return this.getItem("CBSKINARR", [!1, !0, !0, !0])
        }
        static set skinCBArr(t) {
            this.setItem("CBSKINARR", t)
        }
        static skinIsUseCB(t) {
            return t == this.useCBSkin
        }
        static addSkinCB(t, e = !0) {
            if (this.skinCBIsLock(t)) {
                let i = this.skinCBArr;
                i[t] = !1, this.skinCBArr = i, this.numSkinCB++, e && (this.useCBSkin = t)
            }
        }
        static clearUserData() {
            Laya.LocalStorage.clear()
        }
        static get uid() {
            let t = this.getItem("UUID");
            if (null == t) {
                let t = Laya.Browser.now(),
                    e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        let i = (t + 16 * Math.random()) % 16 | 0;
                        return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16)
                    });
                this.getItem("UUID", e)
            }
            return t
        }
        static setItem(t, e) {
            let i = d.PROGECT_NAME.toString().toLocaleUpperCase();
            t = t.toString().toLocaleUpperCase(), Laya.LocalStorage.setItem(`${i}_${t}`, JSON.stringify(e))
        }
        static getItem(t, e = null) {
            let i = d.PROGECT_NAME.toString().toLocaleUpperCase();
            t = t.toString().toLocaleUpperCase();
            let a = Laya.LocalStorage.getItem(`${i}_${t}`);
            return null == a || "" === a || void 0 === a ? e : JSON.parse(a)
        }
    }
    class y {
        static init() {
            this._isInit = !0, y.autoStopMusic = !0, Laya.SoundManager.useAudioMusic = !1
        }
        static playSound(t, e = 1, i, a, n) {
            if (!this._isInit && y.init(), g.soundPlay) return void 0 === t || null == t || "" == t ? null : Laya.SoundManager.playSound(t, e, i, a, n)
        }
        static stopSound(t) {
            Laya.SoundManager.stopSound(t)
        }
        static stopAllSounds() {
            Laya.SoundManager.stopAllSound()
        }
        static playMusic(t, e = 0, i, a, n) {
            if (!this._isInit && y.init(), g.musicPlay) {
                if (void 0 === t || null == t || "" == t) return null;
                console.log(t), n && (Laya.SoundManager.playbackRate = n), Laya.SoundManager.playMusic(t, e, i, a)
            }
        }
        static stopMusic() {
            Laya.SoundManager.stopMusic()
        }
        static stopAll() {
            Laya.SoundManager.stopAll()
        }
        static setSoundVolume(t, e) {
            Laya.SoundManager.setSoundVolume(t, e)
        }
        static setMusicVolume(t) {
            Laya.SoundManager.setMusicVolume(t)
        }
        static set muted(t) {
            Laya.SoundManager.muted = t
        }
        static get muted() {
            return Laya.SoundManager.muted
        }
        static set soundMuted(t) {
            Laya.SoundManager.soundMuted = t
        }
        static get soundMuted() {
            return Laya.SoundManager.soundMuted
        }
        static set musicMuted(t) {
            Laya.SoundManager.musicMuted = t
        }
        static get musicMuted() {
            return Laya.SoundManager.musicMuted
        }
        static set autoStopMusic(t) {
            Laya.SoundManager.autoStopMusic = t
        }
        static get autoStopMusic() {
            return Laya.SoundManager.autoStopMusic
        }
    }
    y._musicChannel = null, y._isInit = !1;
    var _, v, w, f, I, S, b, C, A, L, N, k, E, x = Laya.View,
        P = Laya.Scene,
        B = Laya.ClassUtils.regClass;
    ! function(t) {
        class e extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Fail")
            }
        }
        t.FailUI = e, B("ui.FailUI", e);
        class i extends P {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("FreeCoin")
            }
        }
        t.FreeCoinUI = i, B("ui.FreeCoinUI", i);
        class a extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Game")
            }
        }
        t.GameUI = a, B("ui.GameUI", a);
        class n extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Home")
            }
        }
        t.HomeUI = n, B("ui.HomeUI", n);
        class s extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Load")
            }
        }
        t.LoadUI = s, B("ui.LoadUI", s);
        class o extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Loading")
            }
        }
        t.LoadingUI = o, B("ui.LoadingUI", o);
        class r extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Matching")
            }
        }
        t.MatchingUI = r, B("ui.MatchingUI", r);
        class h extends P {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("NativeInner")
            }
        }
        t.NativeInnerUI = h, B("ui.NativeInnerUI", h);
        class l extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Setting")
            }
        }
        t.SettingUI = l, B("ui.SettingUI", l);
        class d extends P {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Settle")
            }
        }
        t.SettleUI = d, B("ui.SettleUI", d);
        class c extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Shop")
            }
        }
        t.ShopUI = c, B("ui.ShopUI", c);
        class u extends P {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("VersionTips")
            }
        }
        t.VersionTipsUI = u, B("ui.VersionTipsUI", u);
        class m extends x {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("Win")
            }
        }
        t.WinUI = m, B("ui.WinUI", m)
    }(_ || (_ = {})),
    function(t) {
        ! function(t) {
            class e extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(e.uiView)
                }
            }
            e.uiView = {
                type: "View",
                props: {},
                compId: 2,
                child: [{
                    type: "Panel",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#000000",
                        alpha: .8
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        skin: "ads/add_icon/icon.png",
                        centerY: -190,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Button",
                    props: {
                        x: 570,
                        width: 100,
                        var: "btnClose",
                        stateNum: 1,
                        height: 100,
                        centerY: -490
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            y: 30,
                            x: 32,
                            skin: "ads/add_icon/btn_guanbi.png",
                            label: "label"
                        },
                        compId: 6
                    }, {
                        type: "Script",
                        props: {
                            runtime: "hs_ui/component/ButtonScale.ts"
                        },
                        compId: 12
                    }]
                }, {
                    type: "Button",
                    props: {
                        var: "btnAddIcon",
                        stateNum: 1,
                        skin: "ads/add_icon/btn_anniu_1.png",
                        centerX: 0,
                        bottom: 470
                    },
                    compId: 7,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "hs_ui/component/ButtonScale.ts"
                        },
                        compId: 11
                    }]
                }, {
                    type: "Button",
                    props: {
                        var: "btnWatchAd",
                        stateNum: 1,
                        skin: "ads/add_icon/btn_anniu_2.png",
                        centerX: 0,
                        bottom: 360
                    },
                    compId: 8,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "hs_ui/component/ButtonScale.ts"
                        },
                        compId: 10
                    }]
                }, {
                    type: "View",
                    props: {
                        width: 720,
                        var: "nativeInner",
                        height: 360,
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 9
                }],
                loadList: ["ads/add_icon/icon.png", "ads/add_icon/btn_guanbi.png", "ads/add_icon/btn_anniu_1.png", "ads/add_icon/btn_anniu_2.png"],
                loadList3D: []
            }, t.hs_ui_add_iconUI = e, B("ui.hs_ad.hs_ui_add_iconUI", e);
            class i extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView)
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    centerX: 0
                },
                compId: 2,
                child: [{
                    type: "Panel",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#000000",
                        alpha: .8
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        x: 74,
                        skin: "ads/watch_video/diban.png",
                        bottom: 450
                    },
                    compId: 4,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 10,
                            x: 216,
                            texture: "ads/watch_video/biaoti.png"
                        },
                        compId: 5
                    }, {
                        type: "Sprite",
                        props: {
                            y: 107,
                            x: 65,
                            texture: "ads/watch_video/wenzi_1.png"
                        },
                        compId: 7
                    }, {
                        type: "Sprite",
                        props: {
                            y: 160,
                            x: 170,
                            texture: "ads/watch_video/wenzi_2.png"
                        },
                        compId: 8
                    }, {
                        type: "Sprite",
                        props: {
                            y: 232,
                            x: 132,
                            texture: "ads/watch_video/jianglikuang.png"
                        },
                        compId: 9,
                        child: [{
                            type: "Sprite",
                            props: {
                                y: 0,
                                x: 0,
                                texture: "ads/watch_video/guang.png"
                            },
                            compId: 11
                        }, {
                            type: "Sprite",
                            props: {
                                y: 85.25,
                                x: 23.75,
                                texture: "ads/watch_video/jiangli.png"
                            },
                            compId: 10
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 553,
                            x: 138,
                            var: "btnWatchVideo",
                            stateNum: 1,
                            skin: "ads/watch_video/shipinanniu.png"
                        },
                        compId: 13,
                        child: [{
                            type: "Sprite",
                            props: {
                                y: 20,
                                x: 51,
                                texture: "ads/watch_video/shipinzi.png"
                            },
                            compId: 14
                        }, {
                            type: "Script",
                            props: {
                                runtime: "hs_ui/component/ButtonScale.ts"
                            },
                            compId: 18
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 10,
                            x: 492,
                            var: "btnClose",
                            stateNum: 1,
                            skin: "ads/watch_video/gunabi.png"
                        },
                        compId: 17
                    }]
                }, {
                    type: "View",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        var: "nativeInner",
                        scaleY: 1,
                        scaleX: 1,
                        height: 360,
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 15
                }, {
                    type: "Button",
                    props: {
                        x: 0,
                        visible: !1,
                        var: "btnWatchAd",
                        stateNum: 1,
                        skin: "res2d/image/btn_3.png",
                        scaleY: .7,
                        scaleX: .7,
                        centerX: 0,
                        bottom: 360,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 16
                }],
                loadList: ["ads/watch_video/diban.png", "ads/watch_video/biaoti.png", "ads/watch_video/wenzi_1.png", "ads/watch_video/wenzi_2.png", "ads/watch_video/jianglikuang.png", "ads/watch_video/guang.png", "ads/watch_video/jiangli.png", "ads/watch_video/shipinanniu.png", "ads/watch_video/shipinzi.png", "ads/watch_video/gunabi.png", "res2d/image/btn_3.png"],
                loadList3D: []
            }, t.hs_ui_watch_videoUI = i, B("ui.hs_ad.hs_ui_watch_videoUI", i);
            class a extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView)
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 1080,
                    scaleY: 1,
                    scaleX: 1,
                    mouseEnabled: !0,
                    height: 200
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "native_bg",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .6
                    },
                    compId: 29,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "ads/bg_banner_01.png",
                            scaleX: 2,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 61
                    }, {
                        type: "Box",
                        props: {
                            x: 64,
                            var: "box_big_banner",
                            centerY: 0
                        },
                        compId: 56,
                        child: [{
                            type: "Image",
                            props: {
                                x: 60,
                                width: 640,
                                scaleY: .4,
                                scaleX: .4,
                                name: "icon",
                                height: 320,
                                centerY: 0
                            },
                            compId: 52
                        }, {
                            type: "Text",
                            props: {
                                y: 24,
                                x: 338,
                                wordWrap: !1,
                                width: 400,
                                valign: "middle",
                                text: "Title",
                                overflow: "hidden",
                                name: "title",
                                height: 40,
                                fontSize: 28,
                                color: "#000000",
                                align: "center",
                                runtime: "Laya.Text"
                            },
                            compId: 54
                        }, {
                            type: "Text",
                            props: {
                                y: 74,
                                x: 339,
                                wordWrap: !1,
                                width: 400,
                                valign: "middle",
                                text: "Desic",
                                overflow: "hidden",
                                name: "desc",
                                height: 40,
                                fontSize: 20,
                                color: "#000000",
                                align: "center",
                                runtime: "Laya.Text"
                            },
                            compId: 55
                        }]
                    }, {
                        type: "Image",
                        props: {
                            x: 828,
                            var: "btn_click_check",
                            skin: "ads/bt_banner_01.png",
                            scaleY: .45,
                            scaleX: .45,
                            centerY: 0
                        },
                        compId: 36,
                        child: [{
                            type: "Text",
                            props: {
                                y: 42,
                                x: 88,
                                text: "Click to continue",
                                strokeColor: "#ffffff",
                                stroke: 2,
                                fontSize: 60,
                                color: "#ffffff",
                                runtime: "Laya.Text"
                            },
                            compId: 72
                        }]
                    }, {
                        type: "Image",
                        props: {
                            skin: "ads/bg_banner_02.png",
                            scaleY: -1,
                            right: 0,
                            bottom: 41
                        },
                        compId: 70,
                        child: [{
                            type: "Text",
                            props: {
                                y: 30,
                                x: 15.5,
                                text: "Ads",
                                scaleY: -1,
                                fontSize: 28,
                                color: "#ffffff",
                                runtime: "Laya.Text"
                            },
                            compId: 71
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        width: 100,
                        var: "icon_close",
                        top: 0,
                        mouseEnabled: !0,
                        left: 0,
                        height: 100
                    },
                    compId: 35,
                    child: [{
                        type: "Image",
                        props: {
                            skin: "ads/bt_banner_02.png",
                            scaleY: 1.3,
                            scaleX: 1.3,
                            mouseEnabled: !0,
                            centerY: -23,
                            centerX: -18
                        },
                        compId: 59
                    }]
                }],
                loadList: ["ads/bg_banner_01.png", "ads/bt_banner_01.png", "ads/bg_banner_02.png", "ads/bt_banner_02.png"],
                loadList3D: []
            }, t.ui_bannerUI = a, B("ui.hs_ad.ui_bannerUI", a);
            class n extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView)
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 720,
                    scaleY: 1,
                    scaleX: 1,
                    height: 370,
                    centerY: 0,
                    centerX: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "icon_video",
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 218,
                    child: [{
                        type: "Label",
                        props: {
                            wordWrap: !0,
                            var: "text_desc",
                            text: "text_desc",
                            right: 0,
                            overflow: "hidden",
                            left: 0,
                            height: 40,
                            fontSize: 24,
                            color: "#ffffff",
                            bottom: 30,
                            bold: !0,
                            align: "center"
                        },
                        compId: 227
                    }, {
                        type: "Sprite",
                        props: {
                            y: -9,
                            x: -9,
                            texture: "ads/img_title_bg2.png",
                            scaleY: .85,
                            scaleX: .85
                        },
                        compId: 219
                    }, {
                        type: "Image",
                        props: {
                            skin: "ads/img_ad_text2.png",
                            scaleY: .5,
                            scaleX: .5,
                            right: 0,
                            bottom: 0
                        },
                        compId: 220
                    }, {
                        type: "Text",
                        props: {
                            y: 0,
                            x: 0,
                            wordWrap: !1,
                            width: 260,
                            var: "txt_title",
                            valign: "middle",
                            text: "视频APP",
                            overflow: "hidden",
                            height: 65,
                            fontSize: 45,
                            color: "#ffffff",
                            align: "center",
                            runtime: "Laya.Text"
                        },
                        compId: 226
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 150,
                        var: "box_close",
                        top: -55,
                        right: -53,
                        height: 150
                    },
                    compId: 221,
                    child: [{
                        type: "Image",
                        props: {
                            skin: "ads/bt_chaping_02.png",
                            scaleY: .5,
                            scaleX: .5,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 238
                    }]
                }],
                loadList: ["ads/img_title_bg2.png", "ads/img_ad_text2.png", "ads/bt_chaping_02.png"],
                loadList3D: []
            }, t.ui_inner_interstitialUI = n, B("ui.hs_ad.ui_inner_interstitialUI", n);
            class s extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView)
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "block_bg",
                        top: 0,
                        skin: "ads/zz.png",
                        right: 0,
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 54
                }, {
                    type: "Image",
                    props: {
                        y: 160,
                        x: 0,
                        width: 720,
                        visible: !1,
                        var: "easy_click",
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        height: 960,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 74
                }, {
                    type: "Image",
                    props: {
                        width: 680,
                        height: 400,
                        centerY: 200,
                        centerX: 0
                    },
                    compId: 59,
                    child: [{
                        type: "Image",
                        props: {
                            var: "icon_video",
                            top: 0,
                            right: 0,
                            mouseThrough: !1,
                            mouseEnabled: !0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 38
                    }, {
                        type: "Image",
                        props: {
                            skin: "ads/bg_banner_02.png",
                            scaleY: -1,
                            right: 0,
                            name: "",
                            bottom: 42
                        },
                        compId: 45,
                        child: [{
                            type: "Text",
                            props: {
                                y: 31,
                                x: 18,
                                text: "广告",
                                scaleY: -1,
                                fontSize: 28,
                                color: "#ffffff",
                                runtime: "Laya.Text"
                            },
                            compId: 60
                        }]
                    }, {
                        type: "Text",
                        props: {
                            y: 238,
                            x: 40,
                            wordWrap: !1,
                            width: 600,
                            visible: !1,
                            var: "txt_title",
                            valign: "middle",
                            text: "标题",
                            overflow: "hidden",
                            name: "",
                            height: 60,
                            fontSize: 36,
                            color: "#000000",
                            align: "center",
                            runtime: "Laya.Text"
                        },
                        compId: 35
                    }, {
                        type: "Text",
                        props: {
                            y: 302,
                            x: 41,
                            wordWrap: !0,
                            width: 600,
                            visible: !1,
                            var: "text_desc",
                            valign: "top",
                            text: "描述",
                            height: 55,
                            fontSize: 25,
                            color: "#000000",
                            align: "center",
                            runtime: "Laya.Text"
                        },
                        compId: 37
                    }, {
                        type: "Image",
                        props: {
                            x: 340,
                            width: 300,
                            var: "btn_click_button",
                            top: -250,
                            skin: "ads/bt_chaping_01.png",
                            scaleY: 1,
                            scaleX: 1,
                            name: "",
                            height: 100,
                            centerX: 14,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 10,
                        child: [{
                            type: "Text",
                            props: {
                                y: 26,
                                x: 52,
                                text: "点击查看",
                                fontSize: 48,
                                color: "#ffffff",
                                bold: !0,
                                runtime: "Laya.Text"
                            },
                            compId: 62
                        }, {
                            type: "Script",
                            props: {
                                runtime: "hs_ui/component/ButtonScale.ts"
                            },
                            compId: 71
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 150,
                        var: "box_close",
                        height: 150,
                        centerY: 24,
                        centerX: 320
                    },
                    compId: 52,
                    child: [{
                        type: "Image",
                        props: {
                            skin: "ads/bt_banner_02.png",
                            rotation: 90,
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 56
                    }]
                }],
                loadList: ["ads/zz.png", "ads/bg_banner_02.png", "ads/bt_chaping_01.png", "ads/bt_banner_02.png"],
                loadList3D: []
            }, t.ui_interstitialUI = s, B("ui.hs_ad.ui_interstitialUI", s);
            class o extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView)
                }
            }
            o.uiView = {
                type: "View",
                props: {
                    width: 1920,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1080,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "block_bg",
                        top: 0,
                        skin: "ads/zz.png",
                        right: 0,
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 54
                }, {
                    type: "Image",
                    props: {
                        width: 932,
                        height: 828,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 59,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 932,
                            var: "click_box",
                            skin: "ads/bg_chaping_01.png",
                            sizeGrid: "11,13,15,9",
                            height: 828,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 72
                    }, {
                        type: "Image",
                        props: {
                            width: 886,
                            var: "icon_video",
                            mouseThrough: !1,
                            mouseEnabled: !0,
                            height: 443,
                            centerY: -172,
                            centerX: -1
                        },
                        compId: 38
                    }, {
                        type: "Sprite",
                        props: {
                            y: 828,
                            x: 851,
                            texture: "ads/bg_banner_02.png",
                            scaleX: -1,
                            rotation: 180,
                            name: ""
                        },
                        compId: 45
                    }, {
                        type: "Text",
                        props: {
                            y: 796,
                            x: 869,
                            text: "广告",
                            fontSize: 28,
                            color: "#ffffff",
                            runtime: "Laya.Text"
                        },
                        compId: 60
                    }, {
                        type: "Text",
                        props: {
                            y: 489,
                            x: 165,
                            wordWrap: !1,
                            width: 600,
                            var: "txt_title",
                            valign: "middle",
                            text: "标题",
                            overflow: "hidden",
                            name: "",
                            height: 78,
                            fontSize: 40,
                            color: "#000000",
                            align: "center",
                            runtime: "Laya.Text"
                        },
                        compId: 35
                    }, {
                        type: "Text",
                        props: {
                            y: 588,
                            x: 65,
                            wordWrap: !1,
                            width: 800,
                            var: "text_desc",
                            valign: "top",
                            text: "描述",
                            height: 50,
                            fontSize: 32,
                            color: "#000000",
                            align: "center",
                            runtime: "Laya.Text"
                        },
                        compId: 37
                    }, {
                        type: "Image",
                        props: {
                            y: 727,
                            width: 326,
                            var: "btn_click_button",
                            skin: "ads/bt_chaping_01.png",
                            scaleY: 1,
                            scaleX: 1,
                            name: "",
                            mouseThrough: !1,
                            mouseEnabled: !0,
                            height: 122,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 10,
                        child: [{
                            type: "Text",
                            props: {
                                y: 37,
                                x: 67,
                                text: "点击查看",
                                fontSize: 48,
                                color: "#ffffff",
                                bold: !0,
                                runtime: "Laya.Text"
                            },
                            compId: 62
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 150,
                        var: "box_close",
                        height: 150,
                        centerY: -482,
                        centerX: 450
                    },
                    compId: 52,
                    child: [{
                        type: "Image",
                        props: {
                            skin: "ads/bt_chaping_02.png",
                            centerY: 80,
                            centerX: 0
                        },
                        compId: 56
                    }]
                }],
                loadList: ["ads/zz.png", "ads/bg_chaping_01.png", "ads/bg_banner_02.png", "ads/bt_chaping_01.png", "ads/bt_chaping_02.png"],
                loadList3D: []
            }, t.ui_interstitial_hUI = o, B("ui.hs_ad.ui_interstitial_hUI", o);
            class r extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(r.uiView)
                }
            }
            r.uiView = {
                type: "View",
                props: {
                    width: 250,
                    height: 250,
                    centerY: 0,
                    centerX: 0
                },
                compId: 2,
                child: [{
                    type: "Box",
                    props: {
                        y: 125,
                        x: 125,
                        width: 250,
                        var: "game_box",
                        height: 250,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 16,
                    child: [{
                        type: "Image",
                        props: {
                            width: 250,
                            var: "game_icon",
                            height: 250,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 14
                    }, {
                        type: "Image",
                        props: {
                            y: 208,
                            x: 129,
                            skin: "ads/img_ad_text2.png",
                            scaleY: 1,
                            scaleX: 1
                        },
                        compId: 12
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 78,
                            var: "btn_close",
                            skin: "ads/img_close2.png",
                            scaleY: .8,
                            scaleX: .8,
                            height: 78,
                            centerY: -94,
                            centerX: -94
                        },
                        compId: 17
                    }]
                }],
                animations: [{
                    nodes: [{
                        target: 16,
                        keyframes: {
                            rotation: [{
                                value: -5,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 2
                            }, {
                                value: 10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 6
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 10
                            }, {
                                value: -5,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 14
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 16,
                                key: "rotation",
                                index: 16
                            }]
                        }
                    }],
                    name: "shake_ani",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: ["ads/img_ad_text2.png", "ads/img_close2.png"],
                loadList3D: []
            }, t.ui_native_iconUI = r, B("ui.hs_ad.ui_native_iconUI", r);
            class h extends x {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView)
                }
            }
            h.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 550,
                    height: 100,
                    centerY: 0,
                    centerX: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        x: 0,
                        width: 550,
                        var: "tips_box",
                        height: 100,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 56,
                    child: [{
                        type: "Image",
                        props: {
                            x: 0,
                            width: 500,
                            skin: "ads/zz.png",
                            sizeGrid: "30,39,40,30",
                            height: 100,
                            centerY: 0,
                            centerX: 0,
                            alpha: .9
                        },
                        compId: 57
                    }, {
                        type: "Label",
                        props: {
                            y: 33,
                            x: 14,
                            wordWrap: !0,
                            width: 500,
                            var: "lb_tips",
                            valign: "middle",
                            text: "The little brother of the program is working hard to build, so stay tuned",
                            fontSize: 35,
                            color: "#ffffff",
                            centerY: 0,
                            centerX: 0,
                            align: "center"
                        },
                        compId: 58
                    }]
                }],
                loadList: ["ads/zz.png"],
                loadList3D: []
            }, t.ui_toastUI = h, B("ui.hs_ad.ui_toastUI", h)
        }(t.hs_ad || (t.hs_ad = {}))
    }(_ || (_ = {}));
    class M extends _.hs_ad.ui_toastUI {
            constructor() {
                super()
            }
            show(t) {
                if (!this.parent) {
                    let t = 1e4;
                    Laya.stage.addChild(this), this.zOrder = t
                }
                this.on_show(t)
            }
            set_default_pos() {
                this.centerX = 0
            }
            set_style_pos(t, e) {}
            on_hide() {}
            on_show(t) {
                this.show_tips(t)
            }
            show_tips(t) {
                let e = this;
                this.centerY = 0, this.lb_tips.text = t, Laya.Tween.clearAll(this), this.tips_box.centerY = 0, Laya.Tween.to(this, {
                    centerY: -150
                }, 1500, null, Laya.Handler.create(this, () => {
                    e.hide()
                }))
            }
            hide() {
                this.parent && (this.removeSelf(), this.on_hide())
            }
        }! function(t) {
            t.PICKUP_GEM = "PICKUP_GEM", t.CHANGE_POSE = "CHANGE_POSE"
        }(v || (v = {})),
        function(t) {
            t[t.NO = 0] = "NO", t[t.JUMP = 1] = "JUMP", t[t.LOW = 2] = "LOW", t[t.SPIN = 3] = "SPIN"
        }(w || (w = {})),
        function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.WUYIFAN = 1] = "WUYIFAN", t[t.DIY = 2] = "DIY"
        }(f || (f = {})),
        function(t) {
            t.CHANGE_POWER = "CHANGE_POWER", t.CHANGE_COIN = "CHANGE_COIN", t.CHANGE_SKIN = "CHANGE_SKIN", t.GET_NEW_SKIN = "GET_NEW_SKIN", t.SHOW_BANNER = "SHOW_BANNER", t.HIDE_BANNER = "HIDE_BANNER", t.CHANGE_BANNER_HEIGHT = "CHANGE_BANNER_HEIGHT", t.AD_ERROR = "AD_ERROR", t.GAME_OVER = "GAME_OVER", t.LOAD_SUBPACKAGE_COMPLETE = "LOAD_SUBPACKAGE_COMPLETE", t.LOAD_SUBPACKAGE_PROGRESS = "LOAD_SUBPACKAGE_PROGRESS", t.OPEN_SETTING_VIEW = "OPEN_SETTING_VIEW", t.OPEN_SKIN_VIEW = "OPEN_SKIN_VIEW", t.OPEN_RESULT_VIEW = "OPEN_RESULT_VIEW", t.OPEN_PAUSE_VIEW = "OPEN_PAUSE_VIEW", t.OPEN_GAME_SCENE = "OPEN_GAME_SCENE", t.CLOSE_LOADING_VIEW = "CLOSE_LOADING_VIEW", t.CLOSE_SETTING_VIEW = "CLOSE_SETTING_VIEW", t.CLOSE_SKIN_VIEW = "CLOSE_SKIN_VIEW", t.CLOSE_RESULT_VIEW = "CLOSE_RESULT_VIEW", t.CLOSE_PAUSE_VIEW = "CLOSE_PAUSE_VIEW", t.CLOSE_WATCH_VIDEO = "CLOSE_WATCH_VIDEO"
        }(I || (I = {})),
        function(t) {
            t[t.NO = 0] = "NO", t[t.SHARE = 1] = "SHARE", t[t.VIDEO = 2] = "VIDEO"
        }(S || (S = {})),
        function(t) {
            t.GET = "GET", t.POST = "POST"
        }(b || (b = {})),
        function(t) {
            t[t.TIME_OUT = 0] = "TIME_OUT"
        }(C || (C = {})),
        function(t) {
            t[t.NO = 0] = "NO", t[t.LEFT_TOP = 1] = "LEFT_TOP", t[t.TOP_CENTER = 2] = "TOP_CENTER", t[t.RIGHT_TOP = 3] = "RIGHT_TOP", t[t.LEFT_BOTTOM = 4] = "LEFT_BOTTOM", t[t.BOTTOM_CENTER = 5] = "BOTTOM_CENTER", t[t.RIGHT_BOTTOM = 6] = "RIGHT_BOTTOM"
        }(A || (A = {})),
        function(t) {
            t[t.NO = 0] = "NO", t[t.HS = 1] = "HS", t[t.QL = 2] = "QL", t[t.YDHW = 3] = "YDHW"
        }(L || (L = {}));
    class T {
        static get IS_WEB_GAME() {
            let t = !0;
            for (let e in this)
                if (e.search(/IS_.*?_GAME$/i) >= 0 && (t = t && !this[e]), !t) return t;
            return t
        }
        static get PLATFORM_CODE() {
            let t = 0;
            return this.IS_WECHAT_GAME ? t = 1 : this.IS_QQ_GAME ? t = 2 : this.IS_OPPO_GAME ? t = 3 : this.IS_VIVO_GAME ? t = 4 : this.IS_BAIDU_GAME ? t = 5 : this.IS_BYTEDANCE_GAME ? t = 6 : this.IS_HUAWEI_GAME ? t = 7 : this.IS_MEIZU_GAME ? t = 8 : this.IS_UC_GAME && (t = 9), t
        }
    }
    T.BASE_URL = "https://gamesdata.hongshunet.com:8443/", T.IS_WECHAT_GAME = Laya.Browser.onMiniGame || void 0 !== window.wx, T.IS_QQ_GAME = Laya.Browser.onQQMiniGame || void 0 !== window.qq, T.IS_OPPO_GAME = Laya.Browser.onQGMiniGame || void 0 !== window.qg && "OPPO" == window.qg.getProvider(), T.IS_VIVO_GAME = Laya.Browser.onVVMiniGame || void 0 !== window.qg && "vivo" == window.qg.getProvider(), T.IS_BAIDU_GAME = Laya.Browser.onBDMiniGame || void 0 !== window.swan, T.IS_BYTEDANCE_GAME = Laya.Browser.onTTMiniGame || void 0 !== window.tt, T.IS_HUAWEI_GAME = Laya.Browser.onHWMiniGame, T.IS_MEIZU_GAME = void 0 !== window.mz_jsb, T.IS_UC_GAME = void 0 !== window.uc;
    class R extends T {}
    R.GID = 231, R.PROGECT_NAME = "SSGZ", R.GAME_VERSION_NAME = "6.0.1", R.APPID = "9766de537a645787efc662a349ebe63e", R.YM_APPID = "6114b1cae623447a331b0b11", R.SDK_TYPE = L.HS, R.TOTAL_LEVEL = 35, R.SOUND = {
        CLICK: "sounds/click.mp3",
        BG: "sounds/bgm.mp3",
        GEMPICK: "sounds/pick_gem.mp3",
        SUCC: "sounds/succ.mp3"
    }, R.subpackage = [{
        name: "res3d",
        priority: 0
    }, {
        name: "skin_mat",
        priority: 5
    }], R.SKIN_MAT = {
        SKIN1: {
            YF: "skin_mat/clothe1/IceSkate_BlueDress_01.png",
            PF: "skin_mat/skin/Face_AsianMakeup.png",
            XZ: "skin_mat/clothe1/IceSkate_Blades_00.png",
            TF: "skin_mat/hair/Hairstyle2_Brown.png"
        },
        SKIN2: {
            YF: "skin_mat/clothe2/IceSkate_PinkDress_01.png",
            PF: "skin_mat/skin/Face_AsianMakeup.png",
            XZ: "skin_mat/clothe2/IceSkate_Blades_Purple_00.png",
            TF: "skin_mat/hair/Hairstyle2_Blonde.png"
        },
        SKIN3: {
            YF: "skin_mat/clothe3/IceSkate_BlackSwan_01.png",
            PF: "skin_mat/skin/Face_AsianMakeup.png",
            XZ: "skin_mat/clothe3/IceSkate_Blades_Black00.png",
            TF: "skin_mat/hair/Hairstyle2_Brown.png"
        },
        SKIN4: {
            YF: "skin_mat/clothe4/IceSkate_FatGirl_01.png",
            PF: "skin_mat/skin/Face_AsianMakeup.png",
            XZ: "skin_mat/clothe4/IceSkate_Blades_Pink_00.png",
            TF: "skin_mat/hair/Hairstyle2_Blonde.png"
        },
        SKIN5: {
            YF: "skin_mat/clothe5/IceSkate_yellowDress_01.png",
            PF: "skin_mat/skin/Face_AsianMakeup.png",
            XZ: "skin_mat/clothe5/IceSkate_Blades_Yellow_00.png",
            TF: "skin_mat/hair/Hairstyle2_Brown.png"
        }
    };
    class D {
        static randomInt(t, e) {
            return Math.floor(this.random(t, e))
        }
        static random(t, e) {
            return t = Number(t), e = Number(e), NaN == t || NaN == e ? null : (t > e && (t = (e ^= t ^= e) ^ t), Math.random() * (e - t + 1) + t)
        }
        static formatTime(t) {
            let e = t % 60;
            return ("0" + Math.floor(t / 60)).slice(-2) + ":" + ("0" + e).slice(-2)
        }
        static getNetworkTime() {
            return new Promise((t, e) => {
                let i = new XMLHttpRequest;
                i.open("get", "/"), i.send(null), i.onreadystatechange = (() => {
                    if (2 === i.readyState) {
                        let e = i.getResponseHeader("Date");
                        t(e), i.abort()
                    }
                })
            })
        }
        static getDay(t) {
            let e = new Date(t),
                i = e.getFullYear(),
                a = e.getMonth() + 1,
                n = e.getDate();
            return Number(i + ("0" + a).slice(-2) + ("0" + n).slice(-2))
        }
        static clone(t) {
            let e = null;
            if (t instanceof Array) e = t.concat();
            else if (t instanceof Function) e = t;
            else {
                e = new Object;
                for (let i in t) {
                    let a = t[i];
                    e[i] = "object" == typeof a ? D.clone(a) : a
                }
            }
            return e
        }
        static emit(t, e) {
            null == this._notificationCenter && (this._notificationCenter = new Laya.EventDispatcher), this._notificationCenter.event(t, e)
        }
        static once(t, e, i) {
            this._notificationCenter && (-1 == this._eventNameList.indexOf(t) && this._eventNameList.push(t), this._notificationCenter.once(t, e, i))
        }
        static on(t, e, i) {
            this._notificationCenter && (-1 == this._eventNameList.indexOf(t) && this._eventNameList.push(t), this._notificationCenter.on(t, e, i))
        }
        static off(t, e, i, a) {
            this._notificationCenter && this._notificationCenter.off(t, e, i, a)
        }
        static offAll(t) {
            this._notificationCenter && this._notificationCenter.offAll(t)
        }
        static targetOff(t) {
            this._notificationCenter;
            for (let t of this._eventNameList) D.offAll(t);
            this._eventNameList = []
        }
        static isNumber(t) {
            if ("number" == typeof t) return !0;
            if ("string" != typeof t) return !1;
            if ("" == (t = t.replace(/\s+/g, ""))) return !1;
            if (isNaN(t)) return !1;
            return /^\d+(\.\d+)?$/.test(t)
        }
        static executePreFrame(t, e, i = 5) {
            return new Promise((a, n) => {
                let s = e,
                    o = () => {
                        let e = Laya.Browser.now();
                        for (let n = s.next();; n = s.next()) {
                            if (null == n || n.done) return void a(null);
                            if (Laya.Browser.now() - e > i) return void Laya.timer.frameOnce(1, t, () => {
                                o()
                            })
                        }
                    };
                o()
            })
        }
        static setItem(t, e) {
            let i = R.PROGECT_NAME.toString().toLocaleUpperCase();
            t = t.toString().toLocaleUpperCase(), Laya.LocalStorage.setItem(`${i}${R.PLATFORM_CODE}_${t}`, JSON.stringify(e))
        }
        static getItem(t, e = null) {
            let i = R.PROGECT_NAME.toString().toLocaleUpperCase();
            t = t.toString().toLocaleUpperCase();
            let a = Laya.LocalStorage.getItem(`${i}${R.PLATFORM_CODE}_${t}`);
            return null == a || "" === a || void 0 === a ? e : JSON.parse(a)
        }
        static findNode(t, e) {
            if (!t || void 0 === t || "string" != typeof t) return e && void 0 !== e && e instanceof Laya.Node ? e : null;
            e && void 0 !== e && e instanceof Laya.Node || (e = Laya.stage);
            let i = t.split("/"),
                a = null;
            for (let t of i) {
                if (!(a = e.getChildByName(t))) return null;
                e = a
            }
            return a
        }
        static color(t, e, i, a = 255) {
            return new Laya.Vector4(t / 255, e / 255, i / 255, a / 255)
        }
        static dirToAngle(t, e = !1) {
            return 0 == t.x && 0 == t.y ? 0 : e ? -Math.atan2(t.y, t.x) + Math.PI / 2 : 180 * -Math.atan2(t.y, t.x) / Math.PI + 90
        }
        static vecRotate(t, e, i = !1) {
            return i || (e *= Math.PI / 180), new Laya.Vector2(t.x * Math.cos(e) - t.y * Math.sin(e), t.x * Math.sin(e) + t.y * Math.cos(e))
        }
        static vec3Rotate(t, e) {
            let i = new Laya.Quaternion;
            Laya.Quaternion.createFromYawPitchRoll(e.y, e.x, e.z, i);
            let a = new Laya.Vector3;
            return Laya.Vector3.transformQuat(t, i, a), a
        }
        static vec3ToPoint(t, e) {
            let i = new Laya.Vector4;
            return t.viewport.project(e, t.projectionViewMatrix, i), new Laya.Point(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY)
        }
    }
    D._notificationCenter = new Laya.EventDispatcher, D._eventNameList = [],
        function(t) {
            t[t.banner = 0] = "banner", t[t.interstitial = 1] = "interstitial", t[t.inner_interstitial = 2] = "inner_interstitial", t[t.native_icon = 3] = "native_icon"
        }(N || (N = {})),
        function(t) {
            t[t.none = 0] = "none", t[t.need_show = 1] = "need_show", t[t.show = 2] = "show", t[t.click = 3] = "click"
        }(k || (k = {})),
        function(t) {
            t[t.NO = 0] = "NO", t[t.START = 1] = "START", t[t.STOP = 2] = "STOP", t[t.PAUSE = 3] = "PAUSE", t[t.RESUME = 4] = "RESUME"
        }(E || (E = {}));
    class G {
        constructor() {
            this.bannerAd = null, this.videoAd = null, this.interAd = null, this.bannerNode = null, this.innerInter = null, this.nativeInter = null, this.nativeIcon = null, this.portalAd = null, this._native_data_cache = [], this.isNeedShowBanner = !1, this.isGameCd = !1, this.isInitAd = !1, this.addIconNode = null, this.interShowTime = 0, this.gameRecorder = null, this.videoPath = null, this.gameRecorderState = E.NO, this.cur_show_ad_index = 0
        }
        static getInstance() {
            return null == this.instance && (this.instance = new G), this.instance
        }
        get_time() {
            return Laya.timer.currTimer
        }
        check_native_data_list_is_reprot(t) {
            if (t.length > 0)
                for (let e in t)
                    if (t[e].state == k.need_show) return !1;
            return !0
        }
        get_latest_native_data(t) {
            let e = [];
            for (let e in t)
                if (t[e].state == k.need_show) return t[e];
            return e.length > 0 ? e[D.randomInt(0, e.length - 1)] : t.length > 0 ? t[D.randomInt(0, t.length - 1)] : null
        }
        add_native_data(t) {
            for (let e in this._native_data_cache)
                if (this._native_data_cache[e].adId == t.adId) return;
            t.state = k.need_show, this._native_data_cache.push(t)
        }
        remove_native_data(t) {
            for (let e in this._native_data_cache)
                if (this._native_data_cache[e].adId == t.adId) return console.log("remove native_data:", t), void this._native_data_cache.splice(parseInt(e), 1)
        }
        is_limit_native_length(t) {
            let e = 0;
            for (let i in this._native_data_cache) this._native_data_cache[i].type == t && this._native_data_cache[i].state != k.click && ++e;
            return e >= 7
        }
        _setClickNative(t, e, i = null) {
            if (this.isGameCd || st.isShieldArea) return e && e(), console.log("%c[hs_game]广告CD中", "color: #33ccff");
            let a = 0;
            t == N.interstitial && this.innerInter && !this.innerInter.destroyed ? (i = i || st.adInfo.nativeInnerInstitialClickWarp, D.randomInt(1, 100) <= i && !this.innerInter.has_click_warp && (this.innerInter.click_adv_warp(), a = 500)) : t == N.banner && this.bannerNode && !this.bannerNode.destroyed && (i = i || st.adInfo.nativeBannerClickWarp, D.randomInt(1, 100) <= i && !this.bannerNode.has_click_warp && (this.bannerNode.click_adv_warp(), a = 500)), setTimeout(() => {
                e && e()
            }, a)
        }
        initAd() {}
        showBanner() {}
        hideBanner() {}
        showVideo(t) {
            window.playVideoAd(t)
            //t && t(false)
        }
        reportAdShow(t) {
            if (t && void 0 !== t) {
                t.ad && t.ad.reportAdShow({
                    adId: t.adId
                });
                for (let e in this._native_data_cache)
                    if (this._native_data_cache[e].adId == t.adId) {
                        this._native_data_cache[e].state = k.show;
                        break
                    }
            }
        }
        reportAdClick(t) {
            t && void 0 !== t && t.ad && t.ad.reportAdClick({
                adId: t.adId
            })
        }
        getLocalNativeData(t) {
            return this.cur_show_ad_index >= this._native_data_cache.length && (this.cur_show_ad_index = 0), this._native_data_cache[this.cur_show_ad_index++]
        }
        showInterstitialNative(t, e, i, a) {}
        hideInterstitialNative() {}
        showNativeInterstitial(t, e) {}
        hideNativeInterstitial() {}
        showNativeIcon(t) {}
        hideNativeIcon() {}
        platformVersion() {
            return R.IS_OPPO_GAME ? qg.getSystemInfoSync().platformVersion : R.IS_VIVO_GAME ? qg.getSystemInfoSync().platformVersionCode : 0
        }
        showAddDesktop(t) {}
        hasAddDesktop(t, e, i) {}
        addDesktop(t, e) {}
        createToast(t) {
            (null == this.toastView || this.toastView.destroyed) && (this.toastView = new M), this.toastView && this.toastView.show && this.toastView.show(t)
        }
        supportGameBox() {
            return !!R.IS_OPPO_GAME && this.platformVersion() >= 1076
        }
        showGamePortal(t, e, i = !0, a = "", n = 300) {}
        hideGamePortal() {}
        setClickInnerInterstitialBtn(t, e) {
            this._setClickNative(N.interstitial, t, e)
        }
        setClickNativeBanner(t, e) {
            this._setClickNative(N.banner, t, e)
        }
        clickNativeInnerInterstitial() {
            if (this.isGameCd) return console.log("%c[hs_game]广告CD中", "color: #33ccff");
            this.innerInter && this.innerInter.parent && this.innerInter.report_click()
        }
        autoClickNative() {
            if (this.isGameCd || st.isShieldArea) return console.log("%c[hs_game]广告CD中", "color: #33ccff");
            let t = this.getLocalNativeData(N.interstitial);
            null == t && (t = this.getLocalNativeData(N.banner)), null == t && (t = this.getLocalNativeData(N.inner_interstitial)), null == t && (t = this.getLocalNativeData(N.native_icon)), t && (this.reportAdShow(t), this.reportAdClick(t))
        }
        recorderStart() {}
        recorderStop() {}
        hasRecorderPath() {
            return null != this.videoPath
        }
        shareRecorder(t, e) {
            e && e()
        }
    }
    G.instance = null;
    class O extends _.hs_ad.ui_bannerUI {
        constructor() {
            super(), this.easy_click_model = !1, this.is_set_style = !1, this.show_count = 0, this.next_change_height_count = -1, this.next_change_scale_count = -1, this.timer_id = void 0, this.is_heighting = !1, this.has_click_warp = !1, this.icon_close.on(Laya.Event.CLICK, this, this.on_click_close), this.set_default_pos()
        }
        click_adv_warp() {
            this.report_click(), this.has_click_warp = !0
        }
        on_click_adv2() {
            this.report_click()
        }
        on_click_adv(t) {
            this.report_click()
        }
        on_click_close() {
            this.hide()
        }
        report_click() {
            this.native_data && (st.Ad().reportAdClick(this.native_data), this.update_view())
        }
        report_show() {
            this.native_data && st.Ad().reportAdShow(this.native_data)
        }
        show(t) {
            this.parent || (Laya.stage.addChild(this), this.zOrder = 1e6, this.on_show(t), this.auto_update_ad())
        }
        auto_update_ad() {
            st.adInfo.bannerUpdateTime > 0 && this.timer.loop(1e3 * st.adInfo.bannerUpdateTime, this, this.update_view)
        }
        update_view() {
            let t = st.Ad().getLocalNativeData(N.banner);
            t && this.parent && (this.native_data = t, this.refresh())
        }
        set_default_pos() {
            ("vertical" == Laya.stage.screenMode || Laya.stage.height >= Laya.stage.width) && (this.scaleX = this.scaleY = Laya.stage.width / this.width);
            let t = this.width * this.scaleX,
                e = this.height * this.scaleY;
            if (!this.is_set_style) {
                let e = (Laya.stage.width - t) / 2;
                this.x = e
            }
            let i = Laya.stage.height - e;
            this.y = i
        }
        resume_pos_and_scale() {
            this.is_set_style = !1, this.scaleX = this.scaleY = Laya.stage.width / this.width, this.set_default_pos()
        }
        on_hide() {
            this.easy_click_model ? this.native_bg.off(Laya.Event.MOUSE_OVER, this, this.on_click_adv2) : this.native_bg.off(Laya.Event.CLICK, this, this.on_click_adv), this.timer.clearAll(this)
        }
        on_show(t) {
            this.show_count++, this.easy_click_model ? this.native_bg.on(Laya.Event.MOUSE_OVER, this, this.on_click_adv2) : this.native_bg.on(Laya.Event.CLICK, this, this.on_click_adv), this.native_data = t || st.Ad().getLocalNativeData(N.banner), this.refresh()
        }
        refresh() {
            let t = this.box_big_banner,
                e = t.getChildByName("icon"),
                i = t.getChildByName("title"),
                a = t.getChildByName("desc"),
                n = this.native_data.imgUrlList;
            n.length <= 0 && (n = this.native_data.iconUrlList);
            let s = null;
            n.length > 0 && (s = n[0]), e.skin = s, i.text = this.native_data.title, a.text = this.native_data.desc, this.report_show()
        }
        hide() {
            this.parent && (this.removeSelf(), this.on_hide())
        }
    }
    class V extends _.hs_ad.ui_inner_interstitialUI {
        constructor() {
            super(), this.click_back = void 0, this.has_click_warp = !1, this.box_close.on(Laya.Event.CLICK, this, this.on_click_close), this.icon_video.on(Laya.Event.CLICK, this, this.on_click_adv), this.set_background_on_show()
        }
        on_click_adv(t) {
            this.report_click()
        }
        click_adv_warp() {
            this.report_click(), this.has_click_warp = !0
        }
        on_click_close() {
            this.hide()
        }
        report_click() {
            this.native_data ? (this.click_back && this.click_back(), st.Ad().reportAdClick(this.native_data), console.log("has clicked native inner interstitial"), this.update_view()) : console.log("ui_inner_interstitial report_click native_data is null!")
        }
        report_show() {
            this.native_data && st.Ad().reportAdShow(this.native_data)
        }
        show(t, e, i, a, n, s) {
            !this.parent && t && (this.native_data = e, this.show_back = a || void 0, this.hide_back = n || void 0, this.click_back = i || void 0, t.addChild(this), this.size(t.width, t.height), this.set_default_pos(t), this.on_show(), this.auto_update_ad())
        }
        auto_update_ad() {
            st.adInfo.bannerUpdateTime > 0 && this.timer.loop(1e3 * st.adInfo.bannerUpdateTime, this, this.update_view)
        }
        update_view() {
            let t = st.Ad().getLocalNativeData(N.interstitial);
            t && this.parent && (this.native_data = t, this.refresh())
        }
        set_default_pos(t) {
            t && (this.x = t.width / 2 - this.width * this.scaleX / 2, this.y = t.height / 2 - this.height * this.scaleY / 2)
        }
        set_style_pos(t, e) {}
        on_hide() {
            this.timer.clearAll(this)
        }
        on_show() {
            this.refresh(), this.show_back && this.show_back()
        }
        refresh() {
            let t = this.native_data.imgUrlList;
            t.length <= 0 && (t = this.native_data.iconUrlList);
            let e = null;
            t.length > 0 && (e = t[0]), this.icon_video.skin = e, this.txt_title.text = this.native_data.title, this.text_desc.text = this.native_data.desc, this.report_show()
        }
        hide() {
            this.parent && (this.removeSelf(), this.on_hide())
        }
        set_background_on_show() {}
        onDisable() {
            this.hide_back && this.hide_back(), this.hide_back = null
        }
        onDestroy() {
            this.hide_back && this.hide_back(), this.hide_back = null
        }
    }
    class U extends _.hs_ad.ui_native_iconUI {
        constructor() {
            super(), this.game_icon.on(Laya.Event.CLICK, this, this.on_click_adv), this.btn_close.on(Laya.Event.CLICK, this, this.on_click_close)
        }
        on_click_adv(t) {
            this.report_click()
        }
        on_click_close() {
            this.hide()
        }
        report_click() {
            if (this.native_data) {
                st.Ad().reportAdClick(this.native_data);
                let t = st.Ad().getLocalNativeData(N.native_icon);
                t && this.parent && this.report_click_update_view(t)
            }
        }
        report_show() {
            this.native_data && st.Ad().reportAdShow(this.native_data)
        }
        show(t, e) {
            this.parent || (this.native_data = e, !this.parent && t.addChild(this), this.on_show())
        }
        report_click_update_view(t) {
            this.parent && (this.native_data = t, this.refresh())
        }
        on_hide() {}
        on_show() {
            this.refresh()
        }
        refresh() {
            let t = this.native_data.imgUrlList;
            t.length <= 0 && (t = this.native_data.iconUrlList);
            let e = null;
            t.length > 0 && (e = t[0]), this.game_icon.skin = e, this.report_show()
        }
        hide() {
            this.parent && (this.removeSelf(), this.on_hide())
        }
        update_refresh() {
            this.timer.loop(2e4, this, () => {
                let t = st.Ad().getLocalNativeData(N.native_icon);
                this.native_data && this.parent && (this.native_data = t, this.on_show())
            })
        }
    }
    class H extends _.hs_ad.hs_ui_add_iconUI {
        constructor(t) {
            super(), this.on_succ = t
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.zOrder = 1e4
        }
        onEnable() {
            this.btnWatchAd.visible = !1, this.btnAddIcon.clickHandler = Laya.Handler.create(this, this.tapAddIcon, null, !1), this.btnClose.clickHandler = Laya.Handler.create(this, this.tapClose, null, !1), this.btnWatchAd.clickHandler = Laya.Handler.create(this, this.tapWatchAd, null, !1), this.showInterstitialNative()
        }
        show() {
            Laya.stage.addChild(this)
        }
        tapAddIcon() {
            st.Ad().addDesktop(() => {
                this.btnAddIcon.visible = !1, this.on_succ && this.on_succ()
            }, null)
        }
        tapClose() {
            this.destroy(), st.Ad().showBanner()
        }
        tapWatchAd() {
            st.Ad().clickNativeInnerInterstitial()
        }
        onDisable() {}
        showInterstitialNative() {
            this.btnWatchAd.visible = !1, this.btnWatchAd.clickHandler = Laya.Handler.create(this, () => {
                st.Ad().clickNativeInnerInterstitial()
            }), st.Ad().showInterstitialNative(this.nativeInner, () => {}, () => {
                this.btnWatchAd.visible = !0
            }, () => {
                this.btnWatchAd.visible = !1
            })
        }
    }
    class W extends _.hs_ad.hs_ui_watch_videoUI {
        constructor(t) {
            super(), this.videoComplete = t
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.zOrder = 1e4
        }
        onEnable() {
            this.btnWatchAd.visible = !1, this.btnClose.clickHandler = Laya.Handler.create(this, this.tapClose, null, !1), this.btnWatchAd.clickHandler = Laya.Handler.create(this, this.tapWatchAd, null, !1), this.btnWatchVideo.clickHandler = Laya.Handler.create(this, this.tapWatchVideo), this.showInterstitialNative()
        }
        tapWatchVideo() {
            this.videoComplete && this.videoComplete(), this.destroy()
        }
        tapClose() {
            this.destroy()
        }
        tapWatchAd() {
            st.Ad().clickNativeInnerInterstitial()
        }
        onDisable() {
            st.Ad().showBanner(), D.emit(I.CLOSE_WATCH_VIDEO)
        }
        showInterstitialNative() {
            this.btnWatchAd.visible = !1, this.btnWatchAd.clickHandler = Laya.Handler.create(this, () => {
                st.Ad().clickNativeInnerInterstitial()
            }), st.Ad().showInterstitialNative(this.nativeInner, () => {}, () => {
                this.btnWatchAd.visible = !0
            }, () => {
                this.btnWatchAd.visible = !1
            })
        }
    }
    class Y extends G {
        static getInstance() {
            return null == this.instance && (this.instance = new Y), this.instance
        }
        initAd() {
            this.isInitAd || (this.isInitAd = !0, this.isGameCd = st.adInfo.bannerDelay > 0, super.initAd(), this._gameCd(), this.initBanner(), this.initNormalBanner(), this.initVideo(), this.initNativeAd(), this.initGamePortal())
        }
        _gameCd() {
            setTimeout(() => {
                this.isGameCd = !1, this.isNeedShowBanner && this.showBanner()
            }, 1e3 * st.adInfo.bannerDelay)
        }
        initNormalBanner() {
            this.platformVersion() < 1051 || st.adInfo.adunit_banner.length <= 0 || (this.destroyNormalBanner(), this.bannerAd = qg.createBannerAd({
                adUnitId: st.adInfo.adunit_banner[0],
                style: {}
            }), this.bannerAd.onError(t => {
                console.error("[hs_game]normal banner error: ", JSON.stringify(t))
            }))
        }
        showNormalBanner() {
            null == this.bannerAd && this.initNormalBanner(), null != this.bannerAd && this.bannerAd.show().then(() => {
                console.log("%c[hs_game]normal banner show success", "color: #33ccff")
            })
        }
        hideNormalBanner() {
            this.bannerAd && this.bannerAd.hide()
        }
        destroyNormalBanner() {
            this.bannerAd && this.bannerAd.destroy()
        }
        initBanner() {}
        showBanner() {
            if (this.isGameCd) return this.isNeedShowBanner = !0, console.log("%c[hs_game]showBanner 广告CD中", "color: #33ccff");
            this.bannerNode && void 0 !== this.bannerNode && !this.bannerNode.destroyed && this.bannerNode.destroy();
            let t = this.getLocalNativeData(N.banner);
            null == t || void 0 === t ? this.showNormalBanner() : (this.bannerNode = new O, this.hideNormalBanner(), this.bannerNode.show(t))
        }
        hideBanner() {
            this.isNeedShowBanner = !1, this.bannerNode && (this.bannerNode.visible = !1), this.hideNormalBanner()
        }
        initVideo() {
            null != st.adInfo.adunit_video && (this.destroyVideo(), this.videoAd = qg.createRewardedVideoAd({
                posId: st.adInfo.adunit_video
            }), this.videoAd.onLoad(function() {
                console.log("%c[hs_game]video load succ", "color: #33ccff")
            }), this.videoAd.onError(function(t) {
                console.log("%c[hs_game]video error: " + JSON.stringify(t), "color: red")
            }), this.videoAd.onClose(t => {
                t && t.isEnded ? this.videocallback && this.videocallback(!0) : Laya.stage.addChild(new W(() => {
                    this.showVideo(this.videocallback)
                }))
            }))
        }
        showVideo(t) {
            // null == this.videoAd && this.initVideo(), null != this.videoAd ? (this.videocallback = t, this.videoAd.load().then(t => {
            //     this.videoAd.show().then(() => {}).catch(() => {
            //         this.createToast("暂无视频，请稍后再试")
            //     })
            // }).catch(() => {
            //     this.createToast("暂无视频，请稍后再试")
            // })) : t && t(!0)
            console.log(10)
            playVideo(t)
        }
        destroyVideo() {
            this.videoAd && (this.videoAd.offLoad(), this.videoAd.offError(), this.videoAd.offClose()), this.videoAd = null
        }
        create_ad(t) {
            let e = st.adInfo.adunit_native[t];
            if (console.log(t, "posId = ", e), void 0 === e || null == e || this.is_limit_native_length(t) || this.platformVersion() < 1051) return;
            let i = qg.createNativeAd({
                posId: e
            });
            i.load().then(e => {
                if (e && e.adList) {
                    let a = e.adList.pop();
                    a.ad = i, a.type = t, this.add_native_data(a), console.log("%c[hs_game]native data load succ:" + JSON.stringify(a), "color: #33ccff")
                }
            }).catch(t => {
                console.log("%c[hs_game]native data error: " + JSON.stringify(t), "color: red")
            })
        }
        initNativeAd() {
            this.create_ad(N.banner), this.create_ad(N.interstitial), this.create_ad(N.inner_interstitial), this.create_ad(N.native_icon), this.loop_get_native_data()
        }
        showInterstitialNative(t, e, i, a) {
            if (this.isGameCd) return this.showBanner(), a && a(), console.log("%c[hs_game]广告CD中", "color: #33ccff");
            if (st.isShieldArea) return this.showBanner(), void(a && a());
            this.hideInterstitialNative();
            let n = this.getLocalNativeData(N.interstitial);
            null == n || void 0 === n ? (this.showBanner(), a && a()) : (this.isNeedShowBanner = !1, this.innerInter = new V, this.innerInter.show(t, n, e, () => {
                this.hideBanner(), i && i()
            }, a))
        }
        hideInterstitialNative() {
            this.innerInter && void 0 !== this.innerInter && !this.innerInter.destroyed && this.innerInter.destroy()
        }
        showNativeIcon(t) {
            if (this.isGameCd) return console.log("%c[hs_game]showNativeIcon 广告CD中", "color: #33ccff");
            let e = N.native_icon,
                i = st.adInfo.adunit_native[e];
            i == st.adInfo.adunit_native[N.interstitial] ? e = N.interstitial : i == st.adInfo.adunit_native[N.banner] && (e = N.banner);
            let a = this.getLocalNativeData(e);
            if (null == a || void 0 === a) return console.log("%c[hs_game]showNativeIcon 暂无广告数据", "color: #33ccff");
            this.nativeIcon = new U, this.nativeIcon.show(t, a)
        }
        hideNativeIcon() {
            this.nativeIcon && void 0 !== this.nativeIcon && !this.nativeIcon.destroyed && this.nativeIcon.destroy()
        }
        loop_get_native_data() {
            let t = this._native_data_cache.length < 5 ? 1e3 * D.randomInt(15, 20) : 3e4;
            setTimeout(this.initNativeAd.bind(this), t)
        }
        initGamePortal() {
            this.supportGameBox() && st.adInfo.adunit_portal && (this.destroyGamePortal(), this.portalAd = qg.createGamePortalAd({
                adUnitId: st.adInfo.adunit_portal
            }), this.portalAd.onLoad(function() {
                console.log("%c[hs_game]game portal ad load succ", "color: #33ccff")
            }), this.portalAd.onClose(() => {
                this.showBanner(), this._game_portal_hide && this._game_portal_hide()
            }), this.portalAd.onError(function(t) {
                console.log("%c[hs_game]game portal ad error: " + JSON.stringify(t), "color: red")
            }))
        }
        showGamePortal(t, e, i = !0) {
            if (this.supportGameBox()) {
                if (this.portalAd || this.initGamePortal(), !this.portalAd) return this.createToast("Trying to load, please try again~");
                this._game_portal_hide = e, this.portalAd.load().then(() => {
                    this.portalAd.show().then(() => {
                        console.log("show success"), this.hideBanner(), t && t()
                    }).catch(t => {
                        console.error("showGamePortal show error:", t), e && e(), i && this.createToast("Trying to load, please try again~")
                    })
                }).catch(t => {
                    console.error("showGamePortal load error:", t), e && e(), i && this.createToast("Trying to load, please try again~")
                })
            }
        }
        destroyGamePortal() {
            this.portalAd && (this.portalAd.destroy(), this.portalAd = null)
        }
        initGameBanner() {
            qg.getSystemInfoSync().platformVersion >= 1076 && st.adInfo.adunit_game_banner && (this.destroyGameBanner(), this.gameBannerAd = qg.createGameBannerAd({
                adUnitId: st.adInfo.adunit_game_banner
            }), this.gameBannerAd.onLoad(function() {
                console.log("盒子横幅广告加载成功")
            }), this.gameBannerAd.onError(function(t) {
                console.log(t)
            }))
        }
        showGameBanner() {
            this.gameBannerAd || this.initGameBanner(), this.gameBannerAd && this.gameBannerAd.show().then(function() {
                console.log("show success")
            }).catch(function(t) {
                console.log("show fail with:" + t.errCode + "," + t.errMsg)
            })
        }
        hideGameBanner() {
            this.gameBannerAd && this.gameBannerAd.hide()
        }
        destroyGameBanner() {
            this.gameBannerAd && (this.gameBannerAd.destroy(), this.gameBannerAd = null)
        }
        showAddDesktop(t) {
            this.addIconNode && !this.addIconNode.destroyed || (this.addIconNode = new H(t), this.addIconNode.show())
        }
        hasAddDesktop(t, e, i) {
            this.platformVersion() >= 1044 ? qg.hasShortcutInstalled({
                success: i => {
                    console.log("%c[hs_game] hasShortcutInstalled " + (i ? "has add" : "can add"), "color: #33ccff"), 0 == i ? t && t() : e && e()
                },
                fail: t => {
                    console.error(`[hs_game] hasShortcutInstalled error: ${JSON.stringify(t)}`), i && i()
                },
                complete: function() {}
            }) : i && i()
        }
        addDesktop(t, e) {
            this.platformVersion() >= 1040 ? qg.installShortcut({
                success: () => {
                    setTimeout(() => {
                        this.hasAddDesktop(() => {
                            e && e()
                        }, () => {
                            t && t()
                        })
                    }, 1e3)
                },
                fail: t => {
                    console.error(`[hs_game] installShortcut error: ${JSON.stringify(t)}`), e && e()
                }
            }) : e && e()
        }
    }
    class F extends _.hs_ad.ui_interstitialUI {
        constructor() {
            super(), this.box_close.on(Laya.Event.CLICK, this, this.on_click_close), this.btn_click_button.on(Laya.Event.CLICK, this, this.on_click_adv), this.icon_video.on(Laya.Event.CLICK, this, this.on_click_adv), this.easy_click.on(Laya.Event.CLICK, this, this.on_click_adv2), this.set_background_on_show()
        }
        on_click_adv(t) {
            this.report_click()
        }
        on_click_adv2(t) {
            this.easy_click.visible = !1, this.has_easy_click = !0, this.report_click()
        }
        on_click_close() {
            !st.isShieldArea && st.adInfo.closeClickRto >= 0 && 100 * Math.random() <= st.adInfo.closeClickRto && !this.has_easy_click && (this.easy_click.visible = !1, this.report_click()), this.hide()
        }
        report_click() {
            if (this.native_data) {
                st.Ad().reportAdClick(this.native_data);
                let t = st.Ad().getLocalNativeData(N.inner_interstitial);
                t && this.parent && (this.native_data = t, this.refresh())
            }
        }
        report_show() {
            this.native_data && st.Ad().reportAdShow(this.native_data)
        }
        show(t, e, i) {
            if (!this.parent) {
                this.native_data = t;
                let a = 1e4;
                Laya.stage.addChild(this), this.zOrder = a, this.show_back = e, this.hide_back = i, this.on_show()
            }
        }
        set_default_pos() {}
        set_style_pos(t, e) {}
        on_hide() {}
        on_show() {
            this.refresh(), this.set_easy_click_size(), this.show_back && this.show_back()
        }
        refresh() {
            let t = this.native_data.imgUrlList;
            t.length <= 0 && (t = this.native_data.iconUrlList);
            let e = null;
            t.length > 0 && (e = t[0]), this.icon_video.skin = e, this.txt_title.text = this.native_data.title, this.text_desc.text = this.native_data.desc, this.report_show()
        }
        hide() {
            this.parent && (this.removeSelf(), this.on_hide())
        }
        set_background_on_show() {}
        set_easy_click_size() {
            this.easy_click.visible = !1, !st.isShieldArea && st.adInfo.forceClickRto >= 0 && 100 * Math.random() <= st.adInfo.forceClickRto && (st.adInfo.forceClickRto <= 30 ? "horizontal" == Laya.stage.screenMode ? (this.easy_click.height = Laya.stage.height, this.easy_click.width = 800) : (this.easy_click.width = Laya.stage.width, this.easy_click.height = 800) : st.adInfo.forceClickRto <= 60 ? "horizontal" == Laya.stage.screenMode ? (this.easy_click.height = Laya.stage.height, this.easy_click.width = 800 + (Laya.stage.width - 800) / 3) : (this.easy_click.width = Laya.stage.width, this.easy_click.height = 800 + (Laya.stage.height - 800) / 3) : (this.easy_click.height = Laya.stage.height, this.easy_click.width = Laya.stage.width), this.easy_click.visible = !0)
        }
        onDisable() {
            this.hide_back && this.hide_back(), this.hide_back = null
        }
        onDestroy() {
            this.hide_back && this.hide_back(), this.hide_back = null
        }
    }
    class X {
        static set coin(t) {
            D.setItem("COIN", t), D.emit(I.CHANGE_COIN)
        }
        static get coin() {
            return D.getItem("COIN", 0)
        }
        static set power(t) {
            D.setItem("POWER", t)
        }
        static get power() {
            return D.getItem("POWER", 10)
        }
        static set powerTime(t) {
            D.setItem("POWERTIME", t)
        }
        static get powerTime() {
            return D.getItem("POWERTIME", 0)
        }
        static set maxLevel(t) {
            D.setItem("MAXLEVEL", t)
        }
        static get maxLevel() {
            return D.getItem("MAXLEVEL", 0)
        }
        static set signDay(t) {
            D.setItem("SIGNDAY", t)
        }
        static get signDay() {
            return D.getItem("SIGNDAY", 0)
        }
        static set signNum(t) {
            D.setItem("SIGNNUM", t)
        }
        static get signNum() {
            return D.getItem("SIGNNUM", 0)
        }
        static set skinInfo(t) {
            D.setItem("SKININFO", t)
        }
        static get skinInfo() {
            return D.getItem("SKININFO", {})
        }
        static set curSkinUsed(t) {
            D.setItem("CURSKINUSED", t)
        }
        static get curSkinUsed() {
            return D.getItem("CURSKINUSED", null)
        }
        static set musicPlay(t) {
            D.setItem("MUSIC", t)
        }
        static get musicPlay() {
            return D.getItem("MUSIC", !0)
        }
        static set soundPlay(t) {
            D.setItem("SOUND", t)
        }
        static get soundPlay() {
            return D.getItem("SOUND", !0)
        }
        static set vibrate(t) {
            D.setItem("VIBRATE", t)
        }
        static get vibrate() {
            return D.getItem("VIBRATE", !0)
        }
        static set isNewPlay(t) {
            D.setItem("NEWPLAY", t)
        }
        static get isNewPlay() {
            return D.getItem("NEWPLAY", !0)
        }
        static get uid() {
            let t = D.getItem("UUID", null);
            if (null == t) {
                let t = (new Date).getTime(),
                    e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        let i = (t + 16 * Math.random()) % 16 | 0;
                        return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16)
                    });
                D.setItem("UUID", e)
            }
            return t
        }
    }
    class q extends X {
        static get skinCfg() {
            return {
                skin: [{
                    price: 0,
                    img: "1"
                }, {
                    price: 400,
                    img: "2"
                }, {
                    price: 500,
                    img: "3"
                }, {
                    price: 600,
                    img: "4"
                }, {
                    price: 600,
                    img: "5"
                }],
                pose: [{
                    price: 0,
                    img: "1"
                }, {
                    price: 400,
                    img: "2"
                }, {
                    price: 0,
                    img: "3"
                }, {
                    price: 500,
                    img: "4"
                }, {
                    price: 0,
                    img: "5"
                }, {
                    price: 600,
                    img: "6"
                }]
            }
        }
        static set unlockSkin(t) {
            D.setItem("UNLOCKSKIN", t)
        }
        static get unlockSkin() {
            return D.getItem("UNLOCKSKIN", {
                name: null,
                pro: 0,
                type: 1
            })
        }
    }
    q.selectLevel = 1;
    class K {
        static init() {
            this._isInit = !0, K.autoStopMusic = !0, Laya.SoundManager.useAudioMusic = !1
        }
        static playSound(t, e = 1, i, a, n) {
            if (!this._isInit && K.init(), q.soundPlay) return void 0 === t || null == t || "" == t ? null : Laya.SoundManager.playSound(t, e, i, a, n)
        }
        static stopSound(t) {
            Laya.SoundManager.stopSound(t)
        }
        static stopAllSounds() {
            Laya.SoundManager.stopAllSound()
        }
        static playMusic(t, e = 0, i, a) {
            if (!this._isInit && K.init(), q.musicPlay) return void 0 === t || null == t || "" == t ? null : void(this._musicChannel = Laya.SoundManager.playMusic(t, e, i, a))
        }
        static pauseMusic() {
            this._musicChannel && this._musicChannel.pause()
        }
        static resumeMusic() {
            this._musicChannel && this._musicChannel.resume()
        }
        static stopMusic() {
            Laya.SoundManager.stopMusic(), this._musicChannel = null
        }
        static stopAll() {
            Laya.SoundManager.stopAll()
        }
        static setSoundVolume(t, e) {
            Laya.SoundManager.setSoundVolume(t, e)
        }
        static setMusicVolume(t) {
            Laya.SoundManager.setMusicVolume(t)
        }
        static set muted(t) {
            Laya.SoundManager.muted = t
        }
        static get muted() {
            return Laya.SoundManager.muted
        }
        static set soundMuted(t) {
            Laya.SoundManager.soundMuted = t
        }
        static get soundMuted() {
            return Laya.SoundManager.soundMuted
        }
        static set musicMuted(t) {
            Laya.SoundManager.musicMuted = t
        }
        static get musicMuted() {
            return Laya.SoundManager.musicMuted
        }
        static set autoStopMusic(t) {
            Laya.SoundManager.autoStopMusic = t
        }
        static get autoStopMusic() {
            return Laya.SoundManager.autoStopMusic
        }
    }
    K._musicChannel = null, K._isInit = !1;
    class z extends G {
        static getInstance() {
            return null == this.instance && (this.instance = new z), this.instance
        }
        initAd() {
            this.isInitAd || (this.isInitAd = !0, super.initAd(), this.initBanner(), this.initNormalBanner(), this.initVideo(), this.initNativeAd())
        }
        initNormalBanner() {
            this.platformVersion() < 1031 || st.adInfo.adunit_banner.length <= 0 || (this.destroyNormalBanner(), this.bannerAd = qg.createBannerAd({
                adUnitId: st.adInfo.adunit_banner[0],
                style: {},
                adIntervals: Math.max(st.adInfo.bannerUpdateTime, 30)
            }), this.bannerAd.onError(t => {
                console.error("[hs_game]normal banner error: ", JSON.stringify(t)), t && 30002 == t.errCode && this.destroyNormalBanner()
            }))
        }
        showNormalBanner() {
            null == this.bannerAd && this.initNormalBanner(), null != this.bannerAd && this.bannerAd.show().then(() => {
                console.log("%c[hs_game]normal banner show success", "color: #33ccff")
            })
        }
        hideNormalBanner() {
            this.bannerAd && this.bannerAd.hide()
        }
        destroyNormalBanner() {
            this.bannerAd && this.bannerAd.destroy()
        }
        initBanner() {}
        showBanner() {
            this.bannerNode && void 0 !== this.bannerNode && !this.bannerNode.destroyed && this.bannerNode.destroy();
            let t = this.getLocalNativeData(N.banner);
            null == t || void 0 === t ? this.showNormalBanner() : (this.bannerNode = new O, this.bannerNode.show(t))
        }
        hideBanner() {
            this.bannerNode && (this.bannerNode.visible = !1), this.hideNormalBanner()
        }
        initVideo() {
            this.platformVersion() < 1041 || null == st.adInfo.adunit_video || (this.destroyVideo(), this.videoAd = qg.createRewardedVideoAd({
                posId: st.adInfo.adunit_video
            }), this.videoAd.onLoad(function() {
                console.log("激励视频加载成功")
            }), this.videoAd.onError(function(t) {
                D.emit(I.AD_ERROR, 0)
            }), this.videoAd.onClose(t => {
                K.setMusicVolume(1), K.setSoundVolume(1), t && t.isEnded && (console.log("正常播放结束，可以下发游戏奖励"), this.videocallback && this.videocallback(!0))
            }))
        }
        showVideo(t) {
            null == this.videoAd && this.initVideo(), null != this.videoAd ? (this.videocallback = t, this.videoAd.load().then(t => {
                this.videoAd.show().then(() => {
                    K.setMusicVolume(0), K.setSoundVolume(0)
                }).catch(() => {
                    this.createToast("No video, please try again later")
                })
            }).catch(() => {
                st.Ad().createToast("No video, please try again later")
            })) : t && t(!0)
        }
        destroyVideo() {
            this.videoAd && (this.videoAd.offLoad(), this.videoAd.offError(), this.videoAd.offClose()), this.videoAd = null
        }
        showInterstitial(t, e) {
            return this.platformVersion() < 1031 || null == st.adInfo.adunit_intestital ? e && e() : D.randomInt(1, 100) > st.adInfo.showInteNormalRto ? e && e() : (this.destroyNormalInter(), this.interAd = qg.createInterstitialAd({
                posId: st.adInfo.adunit_intestital
            }), this.interAd.onLoad(() => {
                console.log("插屏广告加载"), t && t()
            }), this.interAd.onError(t => {
                console.log("show inter err" + JSON.stringify(t))
            }), this.interAd.onClose(() => {
                e && e()
            }), void this.interAd.load().then(t => {
                this.interAd.show().then(() => {
                    this.hideBanner(), this.interShowTime = this.get_time()
                })
            }))
        }
        destroyNormalInter() {
            this.interAd && (this.videoAd.offLoad(), this.videoAd.offError()), this.interAd = null
        }
        create_ad(t) {
            return new Promise((e, i) => {
                let a = st.adInfo.adunit_native[t];
                if (console.log(t, "posId = ", a), void 0 === a || null == a || this.is_limit_native_length(t) || this.platformVersion() < 1053) return e(null);
                let n = qg.createNativeAd({
                        posId: a
                    }),
                    s = e => {
                        if (console.log("%c[hs_game]native data load:", "color: #33ccff"), e && e.adList) {
                            let i = e.adList.pop();
                            i.ad = n, i.type = t, this.add_native_data(i), console.log("%c[hs_game]native data load succ:" + JSON.stringify(i), "color: #33ccff"), n.offLoad(s)
                        }
                    };
                n.onLoad(s);
                let o = t => {
                    console.log("%c[hs_game]native data error: " + JSON.stringify(t), "color: red"), n.offError(o)
                };
                n.onError(o), n.load(), setTimeout(e, 1500)
            })
        }
        initNativeAd() {
            this.create_ad(N.banner).then(() => this.create_ad(N.native_icon)).then(() => this.create_ad(N.interstitial)).then(() => this.create_ad(N.inner_interstitial)).then(() => {
                this.loop_get_native_data()
            })
        }
        showInterstitialNative(t, e, i, a) {
            if (st.isShieldArea) return this.showBanner(), a && a();
            this.hideInterstitialNative();
            let n = this.getLocalNativeData(N.interstitial);
            null == n || void 0 === n ? (this.showBanner(), a && a()) : (this.innerInter = new V, this.innerInter.show(t, n, e, () => {
                this.hideBanner(), i && i()
            }, a))
        }
        hideInterstitialNative() {
            this.innerInter && void 0 !== this.innerInter && !this.innerInter.destroyed && this.innerInter.destroy()
        }
        showNativeInterstitial(t, e) {
            setTimeout(() => {
                this.hideNativeInterstitial();
                let i = this.getLocalNativeData(N.inner_interstitial);
                null == i || void 0 === i ? this.showInterstitial(t, e) : (this.nativeInter = new F, this.nativeInter.show(i, () => {
                    this.interShowTime = this.get_time(), this.hideBanner(), t && t()
                }, e))
            }, 1e3)
        }
        hideNativeInterstitial() {
            this.nativeInter && void 0 !== this.nativeInter && !this.nativeInter.destroyed && this.nativeInter.destroy()
        }
        showNativeIcon(t) {
            let e = N.native_icon,
                i = st.adInfo.adunit_native[e];
            i == st.adInfo.adunit_native[N.interstitial] ? e = N.interstitial : i == st.adInfo.adunit_native[N.banner] && (e = N.banner);
            let a = this.getLocalNativeData(e);
            if (null == a || void 0 === a) return console.log("%c[hs_game]showNativeIcon 暂无广告数据", "color: #33ccff");
            this.nativeIcon = new U, this.nativeIcon.show(t, a)
        }
        hideNativeIcon() {
            this.nativeIcon && void 0 !== this.nativeIcon && !this.nativeIcon.destroyed && this.nativeIcon.destroy()
        }
        loop_get_native_data() {
            let t = this._native_data_cache.length < 5 ? 1e3 * D.randomInt(15, 20) : 3e4;
            setTimeout(this.initNativeAd.bind(this), t)
        }
        initGamePortal(t, e, i = !0, a = "", n = 300) {
            console.log("initGamePortal marginTop = ", n), this.portalAd = qg.createBoxPortalAd({
                posId: st.adInfo.adunit_portal,
                image: a,
                marginTop: n
            }), this.portalAd.onError(s => {
                console.log("盒子九宫格广告加载失败", s), s && 30002 == s.errCode ? (this.destroyGamePortal(), this.initGamePortal(t, e, i, a, n), this.portalAd.show()) : i && this.createToast("Trying to load, please try again~")
            }), this.portalAd.onShow(e => {
                console.log("盒子九宫格广告展示", e), t && t(), this.hideBanner()
            }), this.portalAd.onClose(() => {
                this.showBanner(), e && e(), this.portalAd.isDestroyed || this.portalAd.show()
            })
        }
        showGamePortal(t, e, i = !0, a = "", n = 300) {
            qg.createBoxPortalAd && st.adInfo.adunit_portal ? (null == this.portalAd && (console.log("marginTop = ", n), this.initGamePortal(t, e, i, a, n)), this.portalAd.show().then(() => {
                console.log("portalAd button show success")
            })) : console.log("暂不支持互推盒子相关 API")
        }
        hideGamePortal() {
            this.portalAd && this.portalAd.hide()
        }
        destroyGamePortal() {
            this.portalAd && (this.portalAd.destroy(), this.portalAd = null)
        }
        showAddDesktop(t) {
            this.addIconNode && !this.addIconNode.destroyed || (this.addIconNode = new H(t), this.addIconNode.show())
        }
        hasAddDesktop(t, e, i) {
            this.platformVersion() >= 1041 ? qg.hasShortcutInstalled({
                success: i => {
                    i ? e && e() : t && t()
                },
                fail: () => {
                    i && i()
                }
            }) : (console.log("不支持添加桌面"), i && i())
        }
        addDesktop(t, e) {
            qg.installShortcut ? qg.installShortcut({
                success: () => {
                    setTimeout(() => {
                        this.hasAddDesktop(() => {
                            e && e()
                        }, () => {
                            t && t()
                        })
                    }, 1e3)
                },
                fail: () => {
                    e && e()
                }
            }) : e && e()
        }
    }
    class j extends G {
        constructor() {
            super(...arguments), this.bannerAd = null, this.videoAd = null, this.interAd = null, this.videocallback = null, this.interCloseFunc = null, this.bannerUpdateNum = 0, this.bannerTime = 0, this.isBannerShow = !1, this.customTime = 0, this.bannerStyle = {
                fixed: A.BOTTOM_CENTER,
                width: st.screenWidth,
                pos: {
                    x: 0,
                    y: 0
                }
            }
        }
        static getInstance() {
            return null == this.instance && (this.instance = new j), this.instance
        }
        initAd() {
            this._initBanner()
        }
        setBannerStyle(t) {
            "number" == typeof t.width && void 0 !== t.width && null != t.width && (this.bannerStyle.width = Math.max(Math.min(t.width, st.screenWidth), 300)), void 0 !== t.fixed && null != t.fixed && (this.bannerStyle.fixed = t.fixed), t.fixed == A.NO && void 0 !== t.pos && null != t.pos && (this.bannerStyle.pos = t.pos)
        }
        _initBanner() {
            if (st.adInfo.adunit_banner.length <= 0) return;
            let t = 0;
            st.adInfo.bannerUpdateNum > 0 && (t = Math.floor(this.bannerUpdateNum / st.adInfo.bannerUpdateNum) % st.adInfo.adunit_banner.length), this.destroyBanner(), this.bannerAd = wx.createBannerAd({
                adUnitId: st.adInfo.adunit_banner[t],
                style: {
                    left: this.bannerStyle.pos.x,
                    top: st.screenHeight,
                    width: this.bannerStyle.width
                }
            }), this.bannerAd.onError(t => {
                console.error("Banner广告错误", t)
            }), this.bannerAd.onLoad(() => {}), this.bannerAd.onResize(t => {
                if (this.bannerStyle.width = t.width, this.bannerStyle.fixed == A.LEFT_TOP) this.bannerStyle.pos = {
                    x: 0,
                    y: 0
                };
                else if (this.bannerStyle.fixed == A.TOP_CENTER) this.bannerStyle.pos = {
                    x: (st.screenWidth - this.bannerStyle.width) / 2,
                    y: 0
                };
                else if (this.bannerStyle.fixed == A.RIGHT_TOP) this.bannerStyle.pos = {
                    x: st.screenWidth - this.bannerStyle.width,
                    y: 0
                };
                else if (this.bannerStyle.fixed == A.LEFT_BOTTOM) this.bannerStyle.pos = {
                    x: 0,
                    y: st.screenHeight - t.height
                };
                else if (this.bannerStyle.fixed == A.BOTTOM_CENTER) this.bannerStyle.pos = {
                    x: (st.screenWidth - this.bannerStyle.width) / 2,
                    y: st.screenHeight - t.height
                };
                else if (this.bannerStyle.fixed == A.RIGHT_BOTTOM) this.bannerStyle.pos = {
                    x: st.screenWidth - this.bannerStyle.width,
                    y: st.screenHeight - t.height
                };
                else {
                    let e = Math.max(this.bannerStyle.pos.x / st.scale - this.bannerStyle.width / 2, 0);
                    e = Math.min(e, st.screenWidth - this.bannerStyle.width);
                    let i = Math.max(this.bannerStyle.pos.y / st.scale, 0);
                    i = Math.min(i, st.screenWidth - t.height), this.bannerStyle.pos = {
                        x: e,
                        y: i
                    }
                }
                this.bannerAd.style.left = this.bannerStyle.pos.x, this.bannerAd.style.top = this.bannerStyle.pos.y, st.bannerH = t.height * st.scale + (st.isPhoneX ? 70 : 0), D.emit(I.CHANGE_BANNER_HEIGHT, st.bannerH)
            }), (st.adInfo.bannerUpdateNum <= 0 || st.adInfo.bannerUpdateTime > 0) && (this.bannerTime = 0, Laya.timer.loop(1e3, this, this.resetBanner))
        }
        resetBanner() {
            this.isBannerShow && ++this.bannerTime >= st.adInfo.bannerUpdateTime && (this.destroyBanner(), this.showBanner())
        }
        showBanner() {
            (null == this.bannerAd || st.adInfo.bannerUpdateNum > 0 && this.bannerUpdateNum >= st.adInfo.bannerUpdateNum) && this._initBanner(), this.bannerAd && (this.isBannerShow = !0, this.bannerAd.show().then(() => {
                ++this.bannerUpdateNum, D.emit(I.SHOW_BANNER)
            }).catch(t => {
                this._initBanner(), this.bannerAd.show().then(() => {
                    ++this.bannerUpdateNum, D.emit(I.SHOW_BANNER)
                })
            }))
        }
        hideBanner() {
            this.bannerAd && this.bannerAd.hide(), this.isBannerShow = !1
        }
        destroyBanner() {
            this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null, Laya.timer.clear(this, this.resetBanner), this.isBannerShow = !1, this.bannerTime = 0
        }
        _initVideo() {
            null != st.adInfo.adunit_video && (this.destroyVideo(), this.videoAd = wx.createRewardedVideoAd({
                adUnitId: st.adInfo.adunit_video,
                multiton: !0
            }), this.videoAd.onLoad(() => {
                console.log("激励视频 广告加载成功")
            }), this.videoAd.onError(t => {
                console.error("激励视频 广告加载失败", t), D.emit(I.AD_ERROR, S.SHARE)
            }), this.videoAd.onClose(t => {
                t && t.isEnded || void 0 === t ? this.videocallback && this.videocallback(!0) : this.videocallback && this.videocallback(!1)
            }))
        }
        showVideo(t) {
            null == this.videoAd && this._initVideo(), this.videoAd ? (this.videocallback = t, this.videoAd.load().then(() => {
                this.videoAd.show().catch(t => {
                    console.log("激励视频 展示失败", t), this.videoAd.load().then(() => {
                        this.videoAd.show()
                    })
                })
            })) : t && t(!0)
        }
        destroyVideo() {
            this.videoAd && this.videoAd.destroy(), this.videoAd = null
        }
        _initInter() {
            null != st.adInfo.adunit_intestital && wx.createInterstitialAd && (this.interAd = wx.createInterstitialAd({
                adUnitId: st.adInfo.adunit_intestital
            }), this.interAd.onLoad(() => {
                console.log("插屏加载成功")
            }), this.interAd.onError(t => {
                console.log("插屏加载失败", t)
            }), this.interAd.onClose(() => {
                this.interCloseFunc && this.interCloseFunc()
            }))
        }
        destroyInter() {
            this.interAd && this.interAd.destroy()
        }
        _initCustomAd(t = 0, e = 0, i, a, n, s) {
            null != st.adInfo.adunit_custom && (this.customTime = 0, this.destroyCustom(), this.customAd = wx.createCustomAd({
                adUnitId: st.adInfo.adunit_custom,
                style: {
                    left: t / st.scale,
                    top: e / st.scale
                }
            }), this.customAd.onClose(() => {
                s && s(), this.destroyCustom()
            }), this.customAd.onHide(() => {
                n && n()
            }), Laya.timer.loop(1e3, this, this._changeCustom, [t, e, i, a, n, s]))
        }
        _changeCustom(t = 0, e = 0, i, a, n, s) {
            this.customAd && this.customAd.isShow() && ++this.customTime >= st.adInfo.customUpdateTime && (this.destroyCustom(), this.showCustom(t, e, i, a, n, s))
        }
        showCustom(t = 0, e = 0, i, a, n, s) {
            if (this.customAd && this.customAd.isShow()) return console.warn("原生广告已展示");
            null == this.customAd && this._initCustomAd(t, e, i, a, n, s), this.customAd.show().then(() => {
                console.log("原生模板广告显示"), i && i()
            }).catch(t => {
                console.error("原生模板广告", t), a && a()
            })
        }
        hideCustom() {
            this.customAd && this.customAd.hide()
        }
        destroyCustom() {
            this.customAd && this.customAd.destroy(), this.customAd = null, this.customTime = 0
        }
    }
    class J {
        static send(t, e = null, i = b.GET, a = 3e3) {
            return new Promise((n, s) => {
                let o = new XMLHttpRequest;
                o.onreadystatechange = (() => {
                    4 == o.readyState && (o.status >= 200 && o.status < 400 ? n(JSON.parse(o.responseText)) : s(o), o.abort())
                }), o.onerror = (t => {
                    console.log("request error", t)
                }), o.ontimeout = (() => {
                    s(C.TIME_OUT), o.abort()
                }), !e || "object" != typeof e || e.length || Array.isArray(e) || (e = JSON.stringify(e)), i == b.GET && e && (t += "?" + e, e = null), o.open(i, t, !0), o.timeout = a, i == b.POST && o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), o.send(e), console.log(`[hs_game]Request URL:${t}`), console.log(`[hs_game]Request Data:${e}`)
            })
        }
    }
    class Z {
        static subString(t, e = 10) {
            let i = Z.getLength(t),
                a = 0,
                n = 0,
                s = t.split("");
            for (n = 0; n < s.length; n++)
                if (s[n].charCodeAt(0) < 299) {
                    if (++a > e) {
                        a -= 1;
                        break
                    }
                } else if ((a += 2) > e) {
                a -= 2;
                break
            }
            return t.substr(0, n) + (i > e ? "..." : "")
        }
        static getLength(t) {
            let e = 0;
            for (let i = 0, a = new String(t).length; i < a; i++) {
                let a = t.charCodeAt(i);
                e += a >= 1 && a <= 126 || 65376 <= a && a <= 65439 ? 1 : 2
            }
            return e
        }
        static formatString(t, e = ",", i = 3) {
            let a = (t = t.toString()).length,
                n = t;
            for (let s = a - i; s > 0; s -= i) {
                n = t.substring(0, s) + e + t.substring(s), a = t.length, t = n
            }
            return n
        }
        static toArray(t, e = ";") {
            let i = [];
            return t.replace(" ", "").split(e).forEach(t => {
                null != t && void 0 !== t && "" != t && (isNaN(Number(t)) || (t = Number(t)), i.push(t))
            }), i
        }
        static trim(t) {
            return "string" != typeof t ? t : t.replace(/(^\s*)|(\s*$)/g, "")
        }
    }
    const Q = "TT_AppRt";
    var $;
    ! function(t) {
        class e {
            constructor(t) {
                this._value = t
            }
            get value() {
                return this._value
            }
            toString() {
                return "" + this.value
            }
        }
        t.Num = e;
        class i extends e {
            get value() {
                return Math.floor(this._value)
            }
            get javaSignature() {
                return "I"
            }
        }
        t.Int = i;
        class a extends e {
            get javaSignature() {
                return "F"
            }
        }
        t.Float = a;
        t.Bool = class {
            constructor(t) {
                this._value = t
            }
            get value() {
                return this._value
            }
            toString() {
                return "" + this.value
            }
            get javaSignature() {
                return "Z"
            }
        };
        class n {
            constructor(t) {
                this._value = t
            }
            get value() {
                return this._value
            }
            toString() {
                return "" + this.value
            }
            get javaSignature() {
                return "Ljava/lang/String;"
            }
        }
        t.Str = n;
        class s {
            constructor() {
                this.hexcase = 0, this.b64pad = ""
            }
            hex_md5(t) {
                return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
            }
            b64_md5(t) {
                return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
            }
            any_md5(t, e) {
                return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
            }
            hex_hmac_md5(t, e) {
                return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
            }
            b64_hmac_md5(t, e) {
                return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
            }
            any_hmac_md5(t, e, i) {
                return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), i)
            }
            rstr_md5(t) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
            }
            rstr_hmac_md5(t, e) {
                var i = this.rstr2binl(t);
                i.length > 16 && (i = this.binl_md5(i, 8 * t.length));
                for (var a = Array(16), n = Array(16), s = 0; s < 16; s++) a[s] = 909522486 ^ i[s], n[s] = 1549556828 ^ i[s];
                var o = this.binl_md5(a.concat(this.rstr2binl(e)), 512 + 8 * e.length);
                return this.binl2rstr(this.binl_md5(n.concat(o), 640))
            }
            rstr2hex(t) {
                try {
                    this.hexcase
                } catch (t) {
                    this.hexcase = 0
                }
                for (var e, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", n = 0; n < t.length; n++) e = t.charCodeAt(n), a += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
                return a
            }
            rstr2b64(t) {
                try {
                    this.b64pad
                } catch (t) {
                    this.b64pad = ""
                }
                for (var e = "", i = t.length, a = 0; a < i; a += 3)
                    for (var n = t.charCodeAt(a) << 16 | (a + 1 < i ? t.charCodeAt(a + 1) << 8 : 0) | (a + 2 < i ? t.charCodeAt(a + 2) : 0), s = 0; s < 4; s++) 8 * a + 6 * s > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - s) & 63);
                return e
            }
            rstr2any(t, e) {
                var i, a, n, s, o, r = e.length,
                    h = Array(Math.ceil(t.length / 2));
                for (i = 0; i < h.length; i++) h[i] = t.charCodeAt(2 * i) << 8 | t.charCodeAt(2 * i + 1);
                var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
                    d = Array(l);
                for (a = 0; a < l; a++) {
                    for (o = Array(), s = 0, i = 0; i < h.length; i++) s = (s << 16) + h[i], s -= (n = Math.floor(s / r)) * r, (o.length > 0 || n > 0) && (o[o.length] = n);
                    d[a] = s, h = o
                }
                var c = "";
                for (i = d.length - 1; i >= 0; i--) c += e.charAt(d[i]);
                return c
            }
            str2rstr_utf8(t) {
                for (var e, i, a = "", n = -1; ++n < t.length;) e = t.charCodeAt(n), i = n + 1 < t.length ? t.charCodeAt(n + 1) : 0, 55296 <= e && e <= 56319 && 56320 <= i && i <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & i), n++), e <= 127 ? a += String.fromCharCode(e) : e <= 2047 ? a += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? a += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (a += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
                return a
            }
            str2rstr_utf16le(t) {
                for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(255 & t.charCodeAt(i), t.charCodeAt(i) >>> 8 & 255);
                return e
            }
            str2rstr_utf16be(t) {
                for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(t.charCodeAt(i) >>> 8 & 255, 255 & t.charCodeAt(i));
                return e
            }
            rstr2binl(t) {
                for (var e = Array(t.length >> 2), i = 0; i < e.length; i++) e[i] = 0;
                for (i = 0; i < 8 * t.length; i += 8) e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
                return e
            }
            binl2rstr(t) {
                for (var e = "", i = 0; i < 32 * t.length; i += 8) e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
                return e
            }
            binl_md5(t, e) {
                t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                for (var i = 1732584193, a = -271733879, n = -1732584194, s = 271733878, o = 0; o < t.length; o += 16) {
                    var r = i,
                        h = a,
                        l = n,
                        d = s;
                    i = this.md5_ff(i, a, n, s, t[o + 0], 7, -680876936), s = this.md5_ff(s, i, a, n, t[o + 1], 12, -389564586), n = this.md5_ff(n, s, i, a, t[o + 2], 17, 606105819), a = this.md5_ff(a, n, s, i, t[o + 3], 22, -1044525330), i = this.md5_ff(i, a, n, s, t[o + 4], 7, -176418897), s = this.md5_ff(s, i, a, n, t[o + 5], 12, 1200080426), n = this.md5_ff(n, s, i, a, t[o + 6], 17, -1473231341), a = this.md5_ff(a, n, s, i, t[o + 7], 22, -45705983), i = this.md5_ff(i, a, n, s, t[o + 8], 7, 1770035416), s = this.md5_ff(s, i, a, n, t[o + 9], 12, -1958414417), n = this.md5_ff(n, s, i, a, t[o + 10], 17, -42063), a = this.md5_ff(a, n, s, i, t[o + 11], 22, -1990404162), i = this.md5_ff(i, a, n, s, t[o + 12], 7, 1804603682), s = this.md5_ff(s, i, a, n, t[o + 13], 12, -40341101), n = this.md5_ff(n, s, i, a, t[o + 14], 17, -1502002290), a = this.md5_ff(a, n, s, i, t[o + 15], 22, 1236535329), i = this.md5_gg(i, a, n, s, t[o + 1], 5, -165796510), s = this.md5_gg(s, i, a, n, t[o + 6], 9, -1069501632), n = this.md5_gg(n, s, i, a, t[o + 11], 14, 643717713), a = this.md5_gg(a, n, s, i, t[o + 0], 20, -373897302), i = this.md5_gg(i, a, n, s, t[o + 5], 5, -701558691), s = this.md5_gg(s, i, a, n, t[o + 10], 9, 38016083), n = this.md5_gg(n, s, i, a, t[o + 15], 14, -660478335), a = this.md5_gg(a, n, s, i, t[o + 4], 20, -405537848), i = this.md5_gg(i, a, n, s, t[o + 9], 5, 568446438), s = this.md5_gg(s, i, a, n, t[o + 14], 9, -1019803690), n = this.md5_gg(n, s, i, a, t[o + 3], 14, -187363961), a = this.md5_gg(a, n, s, i, t[o + 8], 20, 1163531501), i = this.md5_gg(i, a, n, s, t[o + 13], 5, -1444681467), s = this.md5_gg(s, i, a, n, t[o + 2], 9, -51403784), n = this.md5_gg(n, s, i, a, t[o + 7], 14, 1735328473), a = this.md5_gg(a, n, s, i, t[o + 12], 20, -1926607734), i = this.md5_hh(i, a, n, s, t[o + 5], 4, -378558), s = this.md5_hh(s, i, a, n, t[o + 8], 11, -2022574463), n = this.md5_hh(n, s, i, a, t[o + 11], 16, 1839030562), a = this.md5_hh(a, n, s, i, t[o + 14], 23, -35309556), i = this.md5_hh(i, a, n, s, t[o + 1], 4, -1530992060), s = this.md5_hh(s, i, a, n, t[o + 4], 11, 1272893353), n = this.md5_hh(n, s, i, a, t[o + 7], 16, -155497632), a = this.md5_hh(a, n, s, i, t[o + 10], 23, -1094730640), i = this.md5_hh(i, a, n, s, t[o + 13], 4, 681279174), s = this.md5_hh(s, i, a, n, t[o + 0], 11, -358537222), n = this.md5_hh(n, s, i, a, t[o + 3], 16, -722521979), a = this.md5_hh(a, n, s, i, t[o + 6], 23, 76029189), i = this.md5_hh(i, a, n, s, t[o + 9], 4, -640364487), s = this.md5_hh(s, i, a, n, t[o + 12], 11, -421815835), n = this.md5_hh(n, s, i, a, t[o + 15], 16, 530742520), a = this.md5_hh(a, n, s, i, t[o + 2], 23, -995338651), i = this.md5_ii(i, a, n, s, t[o + 0], 6, -198630844), s = this.md5_ii(s, i, a, n, t[o + 7], 10, 1126891415), n = this.md5_ii(n, s, i, a, t[o + 14], 15, -1416354905), a = this.md5_ii(a, n, s, i, t[o + 5], 21, -57434055), i = this.md5_ii(i, a, n, s, t[o + 12], 6, 1700485571), s = this.md5_ii(s, i, a, n, t[o + 3], 10, -1894986606), n = this.md5_ii(n, s, i, a, t[o + 10], 15, -1051523), a = this.md5_ii(a, n, s, i, t[o + 1], 21, -2054922799), i = this.md5_ii(i, a, n, s, t[o + 8], 6, 1873313359), s = this.md5_ii(s, i, a, n, t[o + 15], 10, -30611744), n = this.md5_ii(n, s, i, a, t[o + 6], 15, -1560198380), a = this.md5_ii(a, n, s, i, t[o + 13], 21, 1309151649), i = this.md5_ii(i, a, n, s, t[o + 4], 6, -145523070), s = this.md5_ii(s, i, a, n, t[o + 11], 10, -1120210379), n = this.md5_ii(n, s, i, a, t[o + 2], 15, 718787259), a = this.md5_ii(a, n, s, i, t[o + 9], 21, -343485551), i = this.safe_add(i, r), a = this.safe_add(a, h), n = this.safe_add(n, l), s = this.safe_add(s, d)
                }
                return [i, a, n, s]
            }
            md5_cmn(t, e, i, a, n, s) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(a, s)), n), i)
            }
            md5_ff(t, e, i, a, n, s, o) {
                return this.md5_cmn(e & i | ~e & a, t, e, n, s, o)
            }
            md5_gg(t, e, i, a, n, s, o) {
                return this.md5_cmn(e & a | i & ~a, t, e, n, s, o)
            }
            md5_hh(t, e, i, a, n, s, o) {
                return this.md5_cmn(e ^ i ^ a, t, e, n, s, o)
            }
            md5_ii(t, e, i, a, n, s, o) {
                return this.md5_cmn(i ^ (e | ~a), t, e, n, s, o)
            }
            safe_add(t, e) {
                var i = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
            }
            bit_rol(t, e) {
                return t << e | t >>> 32 - e
            }
        }
        t.MD5 = s;
        class o {
            static New() {
                let t = (new Date).getTime().toString(16);
                for (; t.length < 32;) t += Math.floor(16 * Math.random()).toString(16);
                return (new s).hex_md5(t)
            }
        }
        let r, h, l, d, c;
        t.Guid = o,
            function(t) {
                t[t.Unknown = 0] = "Unknown", t[t.Android = 1] = "Android", t[t.AppRt = 2] = "AppRt", t[t.Browser = 3] = "Browser"
            }(r = t.Platform || (t.Platform = {})),
            function(t) {
                t[t.Unknown = 0] = "Unknown", t[t.android = 1] = "android", t[t.oppoQG = 2] = "oppoQG", t[t.vivoQG = 3] = "vivoQG", t[t.wxGame = 4] = "wxGame", t[t.ttGame = 5] = "ttGame", t[t.qqGame = 6] = "qqGame", t[t.ucGame = 7] = "ucGame"
            }(h = t.Channel || (t.Channel = {})),
            function(t) {
                let e, i;
                ! function(t) {
                    let e;
                    ! function(t) {
                        t.CallbackResult = class {};
                        class e {}
                        t.CallbackParam = e;
                        t.NavigateToMiniGameParam = class extends e {}, t.NavigateToMiniGame = function(t) {
                            qg.navigateToMiniGame(t)
                        }
                    }(e = t.QG || (t.QG = {}))
                }(e = t.OPPO || (t.OPPO = {})),
                function(t) {
                    class e {}
                    t.NavigateToMiniProgramParam = class extends e {
                        constructor() {
                            super(...arguments), this.envVersion = "release"
                        }
                    }, t.NavigateToMiniProgram = function(t) {
                        wx.navigateToMiniProgram(t)
                    }
                }(i = t.WX || (t.WX = {}))
            }(l = t.Extern || (t.Extern = {})),
            function(t) {
                class e {
                    constructor(t, e = null) {
                        this._form = null, this._url = null, this._promise = null, this._resolve = null, this._error = null, this._text = null, this.guid = o.New(), this.logSend = !0, this.logError = !0, this.logText = !1, this._url = t, this._form = e, this._promise = new Promise(t => {
                            this._resolve = t
                        })
                    }
                    get logTag() {
                        return "WWW : " + this.guid + " ->"
                    }
                    get error() {
                        return this._error
                    }
                    LogError() {
                        this.logError && null != this.error && console.log(this.logTag, "error -> " + this.error)
                    }
                    get text() {
                        return this._text
                    }
                    LogText() {
                        this.logText && null != this.text && console.log(this.logTag, "text -> " + this.text)
                    }
                    Send(t = null, e = null) {
                        null == t && (t = "get");
                        let i = this._url,
                            a = null;
                        switch (e) {
                            case "form":
                                let t = Object.keys(this._form);
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    0 == e ? a = i + "=" + this._form[i] : a += "&" + i + "=" + this._form[i]
                                }
                                break;
                            case "json":
                                a = JSON.stringify(this._form)
                        }
                        switch (t) {
                            case "get":
                                null != a && (i += "?" + a)
                        }
                        this.logSend && console.log(this.logTag, i, "<" + t + ">", a); {
                            g.channel;
                            let e = new XMLHttpRequest;
                            switch (e.onreadystatechange = (() => {
                                    4 == e.readyState && (200 == e.status ? this._text = e.responseText : this._error = e.status + " - " + e.responseText, this._resolve(), this.LogError(), this.LogText())
                                }), e.open(t, i, !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t) {
                                case "get":
                                    e.send();
                                    break;
                                case "post":
                                    e.send(a)
                            }
                        }
                        return this._promise
                    }
                }
                let i;
                t.WWW = e,
                    function(t) {
                        let i = "https://log.reyun.com/receive/rest/";
                        async function Request(a, n) {
                            let s = new e(i + a, n);
                            s.logText = t.log, s.logSend = t.log, await s.Send("post", "json")
                        }
                        t.log = !0, t.Install = function(t, e, i) {
                            let a = {},
                                n = {};
                            n.deviceid = e, n.channelid = i, a.appid = t, a.context = n, Request("install", a)
                        }, t.Startup = function(t, e, i) {
                            let a = {},
                                n = {};
                            n.deviceid = e, n.channelid = i, a.appid = t, a.context = n, Request("startup", a)
                        }, t.Register = function(t, e, i, a) {
                            let n = {},
                                s = {};
                            s.deviceid = e, s.channelid = i, n.appid = t, n.context = s, n.who = a, Request("register", n)
                        }, t.Loggedin = function(t, e, i, a) {
                            let n = {},
                                s = {};
                            s.deviceid = e, s.channelid = i, n.appid = t, n.context = s, n.who = a, Request("loggedin", n)
                        }, t.Payment = function(t, e, i, a, n, s, o, r, h, l, d) {
                            let c = {},
                                u = {};
                            u.deviceid = e, u.channelid = i, c.appid = t, c.context = u, c.who = a, u.currencyAmount = n, u.currencytype = s, u.iapamount = o, u.iapname = r, u.paymenttype = h, u.transactionid = l, u.virtualcoinamount = d, Request("payment", c)
                        }, t.Economy = function(t, e, i, a, n, s, o) {
                            let r = {},
                                h = {};
                            h.deviceid = e, h.channelid = i, r.appid = t, r.context = h, r.who = a, h.itemamount = n, h.itemname = s, h.itemtotalprice = o, Request("economy", r)
                        }, t.Quest = function(t, e, i, a, n, s, o) {
                            let r = {},
                                h = {};
                            h.deviceid = e, h.channelid = i, r.appid = t, r.context = h, r.who = a, h.questid = n, h.queststatus = s, h.questtype = o, Request("quest", r)
                        }, t.Event = function(t, e, i, a, n) {
                            let s = {},
                                o = {};
                            o.deviceid = e, o.channelid = i, s.appid = t, s.context = o, s.who = a, s.what = n, Request("event", s)
                        }, t.Heartbeat = function(t, e, i, a) {
                            let n = {},
                                s = {};
                            s.deviceid = e, s.channelid = i, n.appid = t, n.context = s, n.who = a, Request("heartbeat", n)
                        }
                    }(i = t.ReYun || (t.ReYun = {}))
            }(d = t.Web || (t.Web = {})),
            function(t) {
                let e;
                ! function(t) {
                    class e {
                        constructor() {
                            this.log = !0
                        }
                    }

                    function GetData() {
                        let t = new e;
                        return t.appid = R.APPID, t.channelid = Q, t.who = g.deviceUniqueIdentifier, t
                    }

                    function Install(t) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Install(t.appid, g.deviceUniqueIdentifier, t.channelid)
                    }

                    function Startup(t) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Startup(t.appid, g.deviceUniqueIdentifier, t.channelid)
                    }

                    function Event(t, e) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Event(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who, e)
                    }

                    function Heartbeat(t) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Heartbeat(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who)
                    }
                    t.Data = e, t.Install = Install, t.Startup = Startup, t.Register = function(t) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Register(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who)
                    }, t.Loggedin = function(t) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Loggedin(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who)
                    }, t.Payment = function(t, e, i, a, n, s, o, r) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Payment(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who, e, i, a, n, s, o, r)
                    }, t.Economy = function(t, e, i, a) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Economy(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who, e, i, a)
                    }, t.Quest = function(t, e, i, a) {
                        null == t && (t = GetData()), d.ReYun.log = t.log, d.ReYun.Quest(t.appid, g.deviceUniqueIdentifier, t.channelid, t.who, e, i, a)
                    }, t.Event = Event, t.Heartbeat = Heartbeat, setTimeout(() => {
                        if (null == R.APPID || "" == R.APPID.replace(" ", "")) return;
                        Install(null), Startup(null), setInterval(() => Heartbeat(null), 3e5);
                        let t = 0,
                            e = [5, 10, 30, 60, 120];
                        for (let t = 1; t <= 12; t++) e.push(300 * t);
                        setInterval(() => {
                            t += 1, e.length > 0 && t >= e[0] && Event(null, "TimeEvent-" + e.shift())
                        }, 1e3)
                    }, 0)
                }(e = t.ReYun || (t.ReYun = {}))
            }(c = t.DevKit || (t.DevKit = {}));
        class u {
            constructor() {
                this.value = null, this.time = 0
            }
        }
        class m {
            static DeleteAll() {
                p.Clear()
            }
            static DeleteKey(t) {
                let e = [];
                for (let i of this.tags) e.push(i + t);
                for (let t of e) p.Set(t, null)
            }
            static GetString(t, e = null) {
                let i = this.Get(this.stringTag + t);
                return null == i && (i = e), i
            }
            static SetString(t, e) {
                this.Set(this.stringTag + t, new n(e).value)
            }
            static GetFloat(t, e = 0) {
                let i = this.Get(this.floatTag + t);
                return null == i && (i = e), i
            }
            static SetFloat(t, e) {
                this.Set(this.floatTag + t, new a(e).value)
            }
            static GetInt(t, e = 0) {
                let i = this.Get(this.intTag + t);
                return null == i && (i = e), i
            }
            static SetInt(t, e) {
                this.Set(this.intTag + t, new i(e).value)
            }
            static Set(t, e) {
                if (null != e) {
                    let i = new u;
                    i.value = e, i.time = Date.now();
                    let a = JSON.stringify(i);
                    p.Set(t, a)
                } else p.Set(t, null)
            }
            static Get(t) {
                return this.GetRaw(t).value
            }
            static GetRaw(t) {
                let e = null,
                    i = p.Get(t);
                return null == i || "" == i ? e = new u : "string" != typeof i || "{" != i.substring(0, 1) ? (e = new u).value = i : null == (e = JSON.parse(i)) ? (e = new u).value = i : null == e.value && (e.value = i), e
            }
            static HasKey(t) {
                for (let e of this.tags)
                    if (null != this.Get(e + t)) return !0;
                return !1
            }
            static get intTag() {
                return "int:"
            }
            static get floatTag() {
                return "float:"
            }
            static get stringTag() {
                return "string:"
            }
            static get tags() {
                let t = [];
                return t.push(this.intTag), t.push(this.floatTag), t.push(this.stringTag), t
            }
            static get keys() {
                let t = [];
                for (let e of p.keys)
                    for (let i of this.tags) - 1 != e.search(i) && t.push(e);
                return t
            }
        }
        t.PlayerPrefs = m;
        class p {
            static get keys() {
                return Object.keys(Laya.LocalStorage)
            }
            static Get(t) {
                if (null == t) return null;
                let e = Laya.LocalStorage.getItem(t);
                return "" == e ? null : e
            }
            static Set(t, e) {
                null != t && (null != e ? Laya.LocalStorage.setItem(t, e) : Laya.LocalStorage.removeItem(t))
            }
            static Clear() {
                Laya.LocalStorage.clear()
            }
        }
        t.LocalStorage = p;
        class g {
            static get deviceUniqueIdentifier() {
                let t = "SystemInfo.deviceUniqueIdentifier";
                if (m.HasKey(t)) return m.GetString(t);
                let e = o.New();
                return m.SetString(t, e), e
            }
            static get windowSize() {
                return {
                    width: Laya.stage.width,
                    height: Laya.stage.height
                }
            }
            static get platform() {
                switch (this.channel) {
                    case h.android:
                        return r.Android;
                    case h.oppoQG:
                    case h.vivoQG:
                    case h.ttGame:
                    case h.qqGame:
                    case h.wxGame:
                    case h.ucGame:
                        return r.AppRt
                }
                return r.Unknown
            }
            static get channel() {
                return void 0 !== typeof window.qg ? h.oppoQG : void 0 !== typeof window.wx ? h.wxGame : h.Unknown
            }
        }
        t.SystemInfo = g
    }($ || ($ = {}));
    var et = null;
    window.qg && (window.qg.uma = et), window.wx && (window.wx.uma = et), window.tt && (window.tt.uma = et), window.swan && (window.swan.uma = et), window.qq && (window.qq.uma = et);
    class it extends G {
        constructor() {
            super(...arguments), this.isSecond = !1
        }
        static getInstance() {
            return null == this.instance && (this.instance = new it), this.instance
        }
        initAd() {
            this.isInitAd || (this.isInitAd = !0, console.log("MZAd initad"), super.initAd(), this.initBanner(), this.initNormalBanner(), this.initVideo(), this.initNativeAd())
        }
        initNormalBanner() {
            if (!qg.createBannerAd || st.adInfo.adunit_banner.length <= 0) return;
            let t = Math.min(st.screenWidth, st.screenHeight);
            this.bannerAd = qg.createBannerAd({
                adUnitId: st.adInfo.adunit_banner[0],
                style: {
                    left: (st.screenWidth - t) / 2,
                    top: st.screenHeight - 200,
                    width: t,
                    height: 200
                },
                adIntervals: Math.min(st.adInfo.bannerUpdateTime, 30)
            }), this.bannerAd.onError(function(t) {
                console.log("%c[hs_game]normal banner error: " + JSON.stringify(t), "color: red")
            }.bind(this))
        }
        showNormalBanner() {
            null == this.bannerAd && this.initNormalBanner(), null != this.bannerAd && this.bannerAd.show()
        }
        hideNormalBanner() {
            this.bannerAd && this.bannerAd.hide()
        }
        destroyNormalBanner() {
            this.bannerAd && this.bannerAd.destroy && this.bannerAd.destroy()
        }
        initBanner() {}
        showBanner() {
            this.bannerNode && void 0 !== this.bannerNode && !this.bannerNode.destroyed && this.bannerNode.destroy();
            let t = this.getLocalNativeData(N.banner);
            null == t || void 0 === t ? this.showNormalBanner() : (this.hideNormalBanner(), this.bannerNode = new O, this.bannerNode.show(t))
        }
        hideBanner() {
            this.bannerNode && (this.bannerNode.visible = !1), this.hideNormalBanner()
        }
        initVideo() {
            qg.createRewardedVideoAd && null != st.adInfo.adunit_video && (this.destroyVideo(), this.videoAd = qg.createRewardedVideoAd({
                adUnitId: st.adInfo.adunit_video
            }), this.videoAd.onError(function(t) {
                console.log("%c[hs_game]video error: " + JSON.stringify(t), "color: red"), 1004 == t.errCode && this.createToast("暂无视频，请稍后再试")
            }.bind(this)), this.videoAd.onClose(function(t) {
                console.log(t), t && t.isEnded || void 0 === t ? (console.log("%c[hs_game]video close succ", "color: #33ccff"), this.videocallback && this.videocallback(!0), this.isSecond = !1) : (console.log("%c[hs_game]video closed: " + (this.isSecond ? "second" : "first"), "color: blue"), st.isShenHe || this.isSecond ? (this.isSecond = !1, this.videocallback && this.videocallback(!1)) : (this.isSecond = !0, this.showVideo(this.videocallback))), this.videoAd.load && this.videoAd.load()
            }.bind(this)), this.videoAd.onLoad(function(t) {
                console.log("%c[hs_game]video onLoad: " + JSON.stringify(t), "color: #33ccff")
            }), this.videoAd.load && this.videoAd.load())
        }
        showVideo(t) {
            null == this.videoAd && this.initVideo(), null != this.videoAd ? (this.videocallback = t, this.videoAd.load && this.videoAd.load(), setTimeout(() => {
                this.videoAd.show()
            }, 500)) : t && t(!0)
        }
        destroyVideo() {
            this.videoAd && (this.videoAd.offLoad(), this.videoAd.offError(), this.videoAd.offClose(), this.videoAd.destroy && this.videoAd.destroy()), this.videoAd = null
        }
        showInterstitial(t, e) {
            return qg.createInterstitialAd && null != st.adInfo.adunit_intestital ? D.randomInt(1, 100) > st.adInfo.showInteNormalRto ? e && e() : (this.destroyNormalInter(), this.interAd = qg.createInterstitialAd({
                adUnitId: st.adInfo.adunit_intestital
            }), this.interAd.onError(function(t) {
                console.log("show inter err" + JSON.stringify(t))
            }.bind(this)), this.interAd.onClose(function() {
                console.log("inter closed"), e && e()
            }.bind(this)), this.interAd.onLoad(function(e) {
                console.log("inter onLoad", e), this.hideBanner(), t && t()
            }.bind(this)), this.interAd.load && this.interAd.load(), void setTimeout(function() {
                this.interAd.show(), this.interShowTime = this.get_time()
            }.bind(this), 500)) : e && e()
        }
        destroyNormalInter() {
            this.interAd && (this.videoAd.offLoad(), this.videoAd.offError(), this.interAd.destroy && this.interAd.destroy()), this.interAd = null
        }
        create_ad(t) {
            return new Promise((e, i) => {
                let a = st.adInfo.adunit_native[t];
                if (console.log(t, "posId = ", a), void 0 === a || null == a || this.is_limit_native_length(t) || !qg.createNativeAd) return e(null);
                setTimeout(() => {
                    e(null)
                }, 1e3);
                let n = qg.createNativeAd({
                    adUnitId: a
                });
                n.onLoad(function on_load(e) {
                    if (console.log("%c[hs_game]native data load:", "color: #33ccff"), e && e.adList) {
                        let i = e.adList.pop();
                        i.ad = n, i.type = t, this.add_native_data(i), console.log("%c[hs_game]native data load succ:" + JSON.stringify(i), "color: #33ccff"), n.offLoad(on_load)
                    }
                }.bind(this)), n.onError(function on_error(t) {
                    console.log("%c[hs_game]native data error: " + JSON.stringify(t), "color: red"), n.offError(on_error)
                }.bind(this)), n.load()
            })
        }
        initNativeAd() {
            this.create_ad(N.banner).then(() => this.create_ad(N.native_icon)).then(() => this.create_ad(N.interstitial)).then(() => this.create_ad(N.inner_interstitial)), this.create_ad(N.interstitial), this.loop_get_native_data()
        }
        showInterstitialNative(t, e, i, a) {
            this.hideInterstitialNative();
            let n = this.getLocalNativeData(N.interstitial);
            null == n || void 0 === n ? (this.showBanner(), a && a()) : (this.innerInter = new V, this.innerInter.show(t, n, e, () => {
                this.hideBanner(), i && i()
            }, () => {
                this.showBanner(), a && a()
            }))
        }
        hideInterstitialNative() {
            this.innerInter && void 0 !== this.innerInter && !this.innerInter.destroyed && this.innerInter.destroy()
        }
        showNativeInterstitial(t, e) {
            if (this.get_time() - this.interShowTime <= 1e3 * st.adInfo.interTick) return e && e();
            setTimeout(() => {
                this.hideNativeInterstitial();
                let i = this.getLocalNativeData(N.inner_interstitial);
                if (null == i || void 0 === i) this.showInterstitial(t, e);
                else {
                    if (D.randomInt(1, 100) > st.adInfo.showInterRto) return;
                    this.nativeInter = new F, this.nativeInter.show(i, () => {
                        this.interShowTime = this.get_time(), this.hideBanner(), t && t()
                    }, e)
                }
            }, 1e3)
        }
        hideNativeInterstitial() {
            this.nativeInter && void 0 !== this.nativeInter && !this.nativeInter.destroyed && this.nativeInter.destroy()
        }
        showNativeIcon(t) {
            let e = N.native_icon,
                i = st.adInfo.adunit_native[e];
            i == st.adInfo.adunit_native[N.interstitial] ? e = N.interstitial : i == st.adInfo.adunit_native[N.banner] && (e = N.banner);
            let a = this.getLocalNativeData(e);
            if (null == a || void 0 === a) return console.log("%c[hs_game]showNativeIcon 暂无广告数据", "color: #33ccff");
            this.nativeIcon = new U, this.nativeIcon.show(t, a)
        }
        hideNativeIcon() {
            this.nativeIcon && void 0 !== this.nativeIcon && !this.nativeIcon.destroyed && this.nativeIcon.destroy()
        }
        loop_get_native_data() {
            let t = this._native_data_cache.length < 5 ? 1e3 * D.randomInt(15, 20) : 3e4;
            setTimeout(this.initNativeAd.bind(this), t)
        }
        showAddDesktop(t) {
            this.addIconNode && !this.addIconNode.destroyed || (this.addIconNode = new H(t), this.addIconNode.show())
        }
        hasAddDesktop(t, e, i) {
            qg.hasShortcutInstalled ? qg.hasShortcutInstalled({
                success: function(i) {
                    i ? e && e() : t && t()
                }.bind(this),
                fail: function() {
                    i && i()
                }.bind(this)
            }) : (console.log("不支持添加桌面"), i && i())
        }
        addDesktop(t, e) {
            qg.installShortcut ? qg.installShortcut({
                success: function() {
                    setTimeout(function() {
                        this.hasAddDesktop(function() {
                            e && e()
                        }.bind(this), function() {
                            t && t()
                        }.bind(this))
                    }.bind(this), 1e3)
                }.bind(this),
                fail: function() {
                    e && e()
                }.bind(this)
            }) : e && e()
        }
    }
    const at = {
        adunit_banner: "",
        adunit_native_banner: "",
        adunit_video: "",
        adunit_native: "",
        adunit_intestital: "",
        adunit_native_intestital: "",
        adunit_native_icon: "",
        adunit_portal: "",
        adunit_game_banner: ""
    };
    class nt {
        static initGame(t) {
            R.IS_WEB_GAME || et && et.init({
                appKey: R.YM_APPID,
                useOpenid: !1,
                debug: !0
            });
            let e = null;
            if (R.IS_WECHAT_GAME ? (wx.showShareMenu({
                    withShareTicket: !0,
                    menus: ["shareAppMessage", "shareTimeline"]
                }), wx.onShareAppMessage(() => ({
                    title: this.shareWord,
                    imageUrl: this.sharePath
                })), e = wx.getSystemInfoSync()) : R.IS_BYTEDANCE_GAME ? e = tt.getSystemInfoSync() : R.IS_BAIDU_GAME ? e = swan.getSystemInfoSync() : R.IS_BAIDU_GAME ? (qq.showShareMenu({
                    withShareTicket: !0
                }), qq.onShareAppMessage(() => ({
                    title: this.shareWord,
                    imageUrl: this.sharePath
                })), e = qq.getSystemInfoSync()) : R.IS_OPPO_GAME ? e = qg.getSystemInfoSync() : R.IS_VIVO_GAME ? e = qg.getSystemInfoSync() : R.IS_UC_GAME ? e = uc.getSystemInfoSync() : R.IS_MEIZU_GAME && (e = qg.getSystemInfoSync()), e && (this.screenWidth = e.screenWidth, this.screenHeight = e.screenHeight, Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH ? this.scale = this.screenWidth / Gt.width : Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT && (this.scale = this.screenHeight / Gt.height), this.isPhoneX = -1 != e.model.search("iPhone X") || -1 != e.model.search("iPhone 11")), this.loadLowerPhone(), this.parseData(at), R.SDK_TYPE == L.HS) {
                let e = `${R.BASE_URL}games/config/${R.GID}/${R.GAME_VERSION_NAME}`;
                J.send(e).then(e => {
                    console.log("remote datas:", JSON.stringify(e)), 0 == parseInt(e.result) && (this.parseData(e), this.Ad().initAd(), this.checkIP()), t && t()
                })
            }
        }
        static parseData(t) {
            if (t.isShenHe && (this.isShenHe = 1 == t.isShenHe), t.bannerUpdateTime && D.isNumber(t.bannerUpdateTime) && (this.adInfo.bannerUpdateTime = Number(t.bannerUpdateTime)), t.bannerUpdateNum && (this.adInfo.bannerUpdateNum = t.bannerUpdateNum), t.adunit_banner && "" != Z.trim(t.adunit_banner) && (this.adInfo.adunit_banner = Z.toArray(t.adunit_banner)), t.adunit_native_banner && "" != Z.trim(t.adunit_native_banner) && (this.adInfo.adunit_native[N.banner] = t.adunit_native_banner), t.adunit_intestital && "" != Z.trim(t.adunit_intestital) && (this.adInfo.adunit_intestital = Z.trim(t.adunit_intestital)), t.adunit_native_intestital && "" != Z.trim(t.adunit_native_intestital) && (this.adInfo.adunit_native[N.inner_interstitial] = t.adunit_native_intestital), t.adunit_appid && "" != Z.trim(t.adunit_appid) && (this.adInfo.adunit_appid = Z.trim(t.adunit_appid)), t.adunit_video && "" != Z.trim(t.adunit_video) && (this.adInfo.adunit_video = Z.trim(t.adunit_video)), t.adunit_native && "" != Z.trim(t.adunit_native) && (this.adInfo.adunit_native[N.interstitial] = t.adunit_native), t.adunit_native_icon && "" != Z.trim(t.adunit_native_icon) && (this.adInfo.adunit_native[N.native_icon] = Z.trim(t.adunit_native_icon)), t.share && (this.shareWord = Z.toArray(t.share)), t.sharePath && (this.sharePath = t.sharePath), t.bannerUpdateTime && !isNaN(t.bannerUpdateTime) && (this.adInfo.bannerUpdateTime = t.bannerUpdateTime), t.bannerDelay && D.isNumber(t.bannerDelay) && (this.adInfo.bannerDelay = Number(t.bannerDelay)), t.inte2 && (this.adInfo.showInterRto = t.inte2), t.inte1 && (this.adInfo.showInteNormalRto = t.inte1), t.forceclick && (this.adInfo.forceClickRto = t.forceclick), t.native_percent && (this.adInfo.closeClickRto = t.native_percent), t.intetick && (this.adInfo.interTick = t.intetick), t.of_oppo_sleep && (this.btnDelay = 1e3 * t.of_oppo_sleep), 101 == t.checkversion ? this.rewardType = S.SHARE : 102 == t.checkversion && (this.rewardType = S.VIDEO), t.recommedPath) {
                let e = Z.toArray(t.recommedPath);
                for (let t of e) this.recommedList.push({
                    appId: t
                })
            }
            t.cityList && (this.cityList = Z.toArray(t.cityList)), t.sceneList && (this.sceneList = Z.toArray(t.sceneList)), t.toggleReward && (this.toggleReward = 1 == t.toggleReward), t.toggleFuhuo && (this.adInfo.nativeInnerInstitialClickWarp = t.native_inner_institial_click_warp), t.toggleTiShi && (this.toggleTiShi = t.toggleTiShi), t.native_banner_click_warp && (this.adInfo.nativeBannerClickWarp = t.native_banner_click_warp), t.adunit_portal && "" != Z.trim(t.adunit_portal) && (this.adInfo.adunit_portal = Z.trim(t.adunit_portal)), t.adunit_game_banner && "" != Z.trim(t.adunit_game_banner) && (this.adInfo.adunit_game_banner = Z.trim(t.adunit_game_banner)), t.show_game_portal && (this.adInfo.showGamePortal = 1 == t.show_game_portal), t.auto_click_native_time && (this.adInfo.autoClickNativeTime = 1e3 * t.auto_click_native_time), t.ZJManwc && (this.warpRto.ZJManwc = t.ZJManwc), t.YXZanwc && (this.warpRto.YXZanwc = t.YXZanwc), t.GQYanwc && (this.warpRto.GQYanwc = t.GQYanwc), t.GQYanwc2 && (this.warpRto.GQYanwc2 = t.GQYanwc2), t.GQYanwc3 && (this.warpRto.GQYanwc3 = t.GQYanwc3), t.GQYanwc4 && (this.warpRto.GQYanwc4 = t.GQYanwc4), t.PFSYYanwc && (this.warpRto.PFSYYanwc = t.PFSYYanwc), t.WZwc && (this.warpRto.WZwc = t.WZwc), t.WZwc2 && (this.warpRto.WZwc2 = t.WZwc2), t.WZwc3 && (this.warpRto.WZwc3 = t.WZwc3), t.WZwc4 && (this.warpRto.WZwc4 = t.WZwc4), t.WZwc5 && (this.warpRto.WZwc5 = t.WZwc5), t.WZwc6 && (this.warpRto.WZwc6 = t.WZwc6), t.WZwc7 && (this.warpRto.WZwc7 = t.WZwc7), t.WZwc8 && (this.warpRto.WZwc8 = t.WZwc8), console.log(JSON.stringify(this.adInfo)), console.log(JSON.stringify(this.warpRto))
        }
        static Ad() {
            if (R.IS_WECHAT_GAME) return j.getInstance();
            if (R.IS_OPPO_GAME) {
                if (R.SDK_TYPE == L.QL);
                else if (R.SDK_TYPE != L.YDHW) return Y.getInstance()
            } else if (R.IS_VIVO_GAME) {
                if (R.SDK_TYPE == L.QL);
                else if (R.SDK_TYPE != L.YDHW) return z.getInstance()
            } else {
                if (!R.IS_MEIZU_GAME) return G.getInstance();
                if (R.SDK_TYPE == L.QL);
                else if (R.SDK_TYPE != L.YDHW) return it.getInstance()
            }
        }
        static shareGame(t) {
            if (R.IS_WECHAT_GAME) {
                wx.shareAppMessage({
                    title: this.shareWord[0],
                    imageUrl: this.sharePath
                });
                let e = (new Date).getTime(),
                    i = a => {
                        (new Date).getTime() - e >= 3e3 ? t && t(!0) : wx.showModal({
                            title: "提示",
                            content: "该群已分享过,请换个群",
                            showCancel: !0,
                            cancelText: "取消",
                            cancelColor: "#000",
                            confirmText: "去分享",
                            confirmColor: "#08f",
                            success: e => {
                                e.confirm ? this.shareGame(t) : e.cancel && t && t(!1)
                            }
                        }), wx.offShow(i)
                    };
                wx.onShow(i)
            } else R.IS_QQ_GAME ? qq.shareAppMessage({
                title: this.shareWord[0],
                imageUrl: this.sharePath,
                query: "",
                success: () => {
                    t && t(!0)
                },
                fail: () => {
                    t && t(!1)
                }
            }) : R.IS_UC_GAME && uc.shareAppMessage()
        }
        static sendEvent(t, e = null) {
            R.IS_WECHAT_GAME && wx.uma && wx.uma.trackEvent(t, e), null != R.APPID && "" != R.APPID.replace(" ", "") && $.DevKit.ReYun.Event(null, t)
        }
        static levelStart(t) {
            R.IS_WECHAT_GAME || (R.IS_OPPO_GAME || R.IS_VIVO_GAME) && et && et.stage.onStart({
                stageId: String(t),
                stageName: `第${t}关`
            }), null != R.APPID && "" != R.APPID.replace(" ", "") && $.DevKit.ReYun.Event(null, `第${t}关开始`)
        }
        static levelEnd(t, e = !1) {
            R.IS_WECHAT_GAME || (R.IS_OPPO_GAME || R.IS_VIVO_GAME) && et && et.stage.onEnd({
                stageId: String(t),
                stageName: `第${t}关`,
                event: e ? "complete" : "fail"
            }), null != R.APPID && "" != R.APPID.replace(" ", "") && $.DevKit.ReYun.Event(null, `第${t}关结束-${e?"完成":"失败"}`)
        }
        static vibrate(t = !1) {
            q.vibrate && (R.IS_WECHAT_GAME ? wx.vibrateShort && !t ? wx.vibrateShort() : wx.vibrateLong() : R.IS_OPPO_GAME || R.IS_VIVO_GAME ? qg.vibrateShort && !t ? qg.vibrateShort({}) : qg.vibrateLong({}) : R.IS_QQ_GAME ? qq.vibrateShort && !t ? qq.vibrateShort({}) : qq.vibrateLong({}) : R.IS_BYTEDANCE_GAME && (tt.vibrateShort && !t ? tt.vibrateShort({}) : tt.vibrateLong({})))
        }
        static checkIP() {
            J.send("https://gamesdata.hongshunet.com:8443/games/config/ipAddress").then(t => {
                0 === parseInt(t.status) && (!t.data || !t.data.city || -1 == this.cityList.indexOf(t.data.region) && -1 == this.cityList.indexOf(t.data.city) || (this.isShieldArea = !0))
            })
        }
        static loadLowerPhone() {
            R.IS_OPPO_GAME || R.IS_VIVO_GAME ? (this.lowerPhoneType = 4, Laya.loader.load("json/lower_phone.json", Laya.Handler.create(this, t => {
                let e = qg.getSystemInfoSync().model;
                for (let i of t)
                    if (i.phone_name == e) {
                        i.price < 700 ? this.lowerPhoneType = 1 : i.price < 1e3 ? this.lowerPhoneType = 2 : i.price < 1500 ? this.lowerPhoneType = 3 : this.lowerPhoneType = 4;
                        break
                    }
            }))) : this.lowerPhoneType = 4
        }
        static initAdGame(t) {
            this.screenWidth = Gt.width, this.screenHeight = Gt.height;
            let e = null;
            R.IS_OPPO_GAME || R.IS_VIVO_GAME ? e = qg.getSystemInfoSync() : R.IS_WECHAT_GAME && (e = wx.getSystemInfoSync()), e && (this.screenWidth = e.screenWidth, this.screenHeight = e.screenHeight, Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH ? this.scale = this.screenWidth / Gt.width : Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT && (this.scale = this.screenHeight / Gt.height), this.isPhoneX = -1 != e.model.search("iPhone X") || -1 != e.model.search("iPhone 11")), this.adInfo.adunit_native[N.banner] = "397883", this.adInfo.adunit_native[N.native_icon] = "397885", this.adInfo.adunit_native[N.interstitial] = "397887", this.adInfo.adunit_video = "397878", this.Ad().initAd(), t && t()
        }
    }
    nt.bannerH = 140, nt.rewardType = S.NO, nt.scale = 1, nt.screenWidth = 0, nt.screenHeight = 0, nt.isPhoneX = !1, nt.toggleReward = 0, nt.toggleTiShi = !1, nt.userInfo = {
        uid: "",
        openid: "",
        avatarUrl: "",
        nickName: ""
    }, nt.btnDelay = 0, nt.adInfo = {
        adunit_banner: [],
        adunit_native: [],
        adunit_intestital: null,
        adunit_video: null,
        adunit_custom: null,
        adunit_appid: null,
        adunit_portal: null,
        adunit_game_banner: null,
        showGamePortal: !0,
        bannerUpdateTime: 10,
        bannerUpdateNum: 0,
        customUpdateTime: 30,
        bannerDelay: 0,
        showInterRto: 100,
        showInteNormalRto: 100,
        forceClickRto: -1,
        nativeInnerInstitialClickWarp: -1,
        nativeBannerClickWarp: -1,
        interTick: 0,
        closeClickRto: -1,
        autoClickNativeTime: 0
    }, nt.warpRto = {
        ZJManwc: 0,
        YXZanwc: 0,
        GQYanwc: 0,
        GQYanwc2: 0,
        GQYanwc3: 0,
        GQYanwc4: 0,
        PFSYYanwc: 0,
        WZwc: 0,
        WZwc2: 0,
        WZwc3: 0,
        WZwc4: 0,
        WZwc5: 0,
        WZwc6: 0,
        WZwc7: 0,
        WZwc8: 0
    }, nt.recBtnInfo = {
        SPDC: !1,
        MLKG: !1,
        XFDD: !1,
        CBL: !1,
        HYRWGD: !1,
        RMTJ: !1,
        BKYX: !1,
        JRXY: !1,
        RMPH: !1,
        JSY: !1,
        GDYX: !1,
        DL: !1,
        BXKG: !1
    }, nt.isShenHe = !1, nt.isShieldArea = !1, nt.isShieldScene = !1, nt.shareWord = [], nt.sharePath = "http://block-wechat.oss-cn-hangzhou.aliyuncs.com/share/qiuqiu.jpg", nt.cityList = ["北京", "上海", "广州", "深圳", "成都"], nt.sceneList = [], nt.lowerPhoneType = 4, nt.recommedList = [];
    class st extends nt {
        static pauseGame() {
            this.isPauseGame = !0, Laya.updateTimer.pause(), Laya.physicsTimer.pause()
        }
        static resumeGame() {
            this.isPauseGame = !1, Laya.updateTimer.resume(), Laya.physicsTimer.resume()
        }
    }
    var ot, rt, ht, lt;
    st.switchList = {
            YSGG: !0,
            CKXQ: !0,
            adUpdateTime: 25,
            KSYXYS: [1, 1],
            btnDelay: 0,
            XYGYS: [1, 1]
        }, st.lowerPhoneType = 4, st.showNativeInterPro = 100, st.showNativeInterDelay = 0, st.firstShowHomeView = !0,
        function(t) {
            t[t.NONE = 0] = "NONE", t.Idle = "daiji", t.Run = "run", t.JumpStart = "jump1", t.Jumping = "jump2", t.JumpEnd = "jump2", t.Die1 = "die1", t.Die2 = "die2", t.Die3 = "die3", t.Die4 = "die4"
        }(ot || (ot = {})),
        function(t) {
            t[t.Idle = 0] = "Idle", t[t.Run = 1] = "Run", t[t.Jump = 2] = "Jump", t[t.Fall = 3] = "Fall", t[t.Die = 4] = "Die", t[t.Win = 5] = "Win"
        }(rt || (rt = {}));
    class dt extends Laya.Script3D {
        constructor() {
            super(...arguments), this.owner = null, this.rankID = 0, this.speed = .014, this.jumpspeed = .02, this.gravity = .03, this.angle = 0, this.dir = new Laya.Point(0, 0), this.animState = ot.NONE, this.canmove = !1, this.minX = -100, this.maxX = 100, this.maxY = 100, this.minY = -100, this.isWin = !1, this.jumpindex = 0
        }
        onAwake() {
            u.on(c.GameStart, this, this.onGameStart), u.on(c.GameEnd, this, this.onGameEnd), this.animator = this.owner.getComponent(Laya.Animator), this.isWin = !1, this.cibanskins = this.owner.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("cbskin"), this.headskins = this.owner.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End")
        }
        onDestroy() {
            super.onDestroy(), u.offAllCaller(this), console.log("角色被删除")
        }
        onGameStart() {
            this.canmove = !0
        }
        onGameEnd() {}
        getTopPos() {
            return new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y + .211, this.owner.transform.position.z)
        }
        changeState(t, e) {
            if (this.curState != t && this.curState != rt.Die) {
                switch (this.curState == rt.Run && 0 == this.rankID && y.stopSound("audio/foot.mp3"), t) {
                    case rt.Idle:
                        this.toIdle();
                        break;
                    case rt.Run:
                        0 == this.rankID && y.playSound("audio/foot.mp3", 0), this.toRun();
                        break;
                    case rt.Die:
                        this.toDie();
                        break;
                    case rt.Jump:
                        this.toJump();
                        break;
                    case rt.Fall:
                        this.toFall();
                        break;
                    case rt.Win:
                        this.toWin()
                }
                this.curState = t
            }
        }
        isCurState(t) {
            return this.curState == t
        }
        toIdle() {
            this.animator.play(ot.Idle)
        }
        toJump() {
            this.animator.play(ot.JumpStart), this.jumpindex = 0
        }
        toFall() {
            this.animator.play(ot.JumpEnd)
        }
        toDie() {
            y.playSound("audio/gun.mp3"), 0 == this.rankID && st.vibrate();
            let t = l.IntRange(0, 3);
            0 == t ? this.animator.play(ot.Die1) : 1 == t ? this.animator.play(ot.Die3) : 2 == t ? this.animator.play(ot.Die3) : 3 == t && this.animator.play(ot.Die4)
        }
        toRun() {
            this.animator.play(ot.Run)
        }
        toWin() {
            this.animator.play(ot.Idle), this.owner.transform.localPosition.y = 0, this.isWin = !0
        }
        setAnimState(t, e = !1) {
            this.animState != t && (this.animState = t, e ? this.animator.crossFade(t, .06) : this.animator.play(t))
        }
        changeArea(t, e, i, a) {
            this.minX = t, this.maxX = e, this.minY = i, this.maxY = a
        }
        setMoveDir(t) {
            if (null != this.owner && !this.isCurState(rt.Die))
                if (this.dir = t, 0 == this.dir.x && 0 == this.dir.y) {
                    if (this.isCurState(rt.Jump) || this.isCurState(rt.Fall)) return;
                    this.changeState(rt.Idle)
                } else {
                    let t = p.ins.cameraCtrl.transform.rotationEuler.y,
                        e = this.owner.transform.rotationEuler,
                        i = 180 * Math.atan2(this.dir.x, this.dir.y) / Math.PI;
                    if (0 == this.rankID && (i += t), i < 0 && (i += 360), i = Math.round(i), e.setValue(0, i, 0), this.owner.transform.rotationEuler = e, this.isCurState(rt.Jump) || this.isCurState(rt.Fall)) return;
                    this.changeState(rt.Run)
                }
        }
        onUpdate() {
            if (Rt.ins.isRunning && !this.isCurState(rt.Die) && this.canmove) switch (this.curState) {
                case rt.Run:
                    this.move();
                    break;
                case rt.Jump:
                    this.jump();
                    break;
                case rt.Fall:
                    this.fall()
            }
        }
        move() {
            this.dir.x, this.speed, this.dir.y, this.speed;
            this.owner.transform.translate(new Laya.Vector3(0, 0, this.speed), !0), this.owner.transform.rotate(new Laya.Vector3(0, 0, 0), !0), this.owner.transform.localPosition.x > this.maxX && (this.owner.transform.localPosition.x = this.maxX), this.owner.transform.localPosition.x < this.minX && (this.owner.transform.localPosition.x = this.minX), this.owner.transform.localPosition.z > this.maxY && (this.owner.transform.localPosition.z = this.maxY), this.owner.transform.localPosition.z < this.minY && (this.owner.transform.localPosition.z = this.minY)
        }
        jump() {
            0 != this.dir.x && 0 != this.dir.y && this.move(), this.owner.transform.localPositionY += this.jumpspeed, this.jumpindex > 24 && this.changeState(rt.Fall), this.jumpindex++
        }
        fall() {
            0 != this.dir.x && 0 != this.dir.y && this.move();
            this.owner.transform.localPositionY -= this.jumpspeed, this.owner.transform.localPositionY <= 0 && (this.owner.transform.localPositionY = 0, this.changeState(rt.Idle))
        }
        setHeadSkin(t) {
            for (let t = 0; t < this.headskins.numChildren; t++) this.headskins.getChildAt(t).active = !1;
            this.headskins.getChildAt(t).active = !0
        }
        setCibanSkin(t) {
            for (let t = 0; t < this.cibanskins.numChildren; t++) this.cibanskins.getChildAt(t).active = !1;
            this.cibanskins.getChildAt(t).active = !0
        }
    }
    class ct extends dt {
        constructor() {
            super(...arguments), this.ismoving = !1, this.israndrun = !1, this.randdir = new Laya.Vector2(0, 0)
        }
        onAwake() {
            super.onAwake(), this.ismoving = !1
        }
        onGameStart() {
            super.onGameStart(), this.speed = .016
        }
        onUpdate() {
            if (this.ismoving)
                if (this.israndrun) this.setMoveDir(this.randdir);
                else {
                    let t = l.Range(.5, 1);
                    0 == l.IntRange(0, 1) ? this.setMoveDir(new Laya.Vector2(1, t)) : this.setMoveDir(new Laya.Vector2(-1, t))
                }
            else this.setMoveDir(new Laya.Vector2(0, 0));
            super.onUpdate()
        }
        startRandrun() {
            this.israndrun = !0, this.ismoving = !0;
            let t = l.IntRange(1e3, 4e3);
            Laya.timer.once(t, this, () => {
                this.randdir = new Laya.Vector2(l.Range(-1, 1), l.Range(-1, 1)), this.startRandrun()
            })
        }
        startRandjump() {
            let t = l.IntRange(3e3, 6e3);
            Laya.timer.once(t, this, () => {
                this.changeState(rt.Jump), this.startRandjump()
            })
        }
        startRandDie(t, e, i) {
            let a = l.IntRange(t, e);
            Laya.timer.once(a, this, () => {
                this.changeState(rt.Die), i()
            })
        }
        cleanRand() {
            this.randdir = new Laya.Vector2(0, 1), Laya.timer.clearAll(this)
        }
        cleanTimer() {
            Laya.timer.clearAll(this)
        }
        onDestroy() {
            super.onDestroy(), Laya.timer.clearAll(this)
        }
    }
    class ut extends Laya.Script3D {
        constructor() {
            super(), this.speed = .06, this.length = 8, this.curlength = 0, this.start = !1, this.owner = null
        }
        onAwake() {}
        init(t, e, i) {
            this.gameplay = Rt.ins.gamePlay, this.bulletid = t, this.dir = e, this.speed = i;
            let a = this.owner.transform.rotationEuler,
                n = 180 * Math.atan2(e.x, e.z) / Math.PI;
            n < 0 && (n += 360), n = Math.round(n), a.setValue(0, n, 0), this.owner.transform.rotationEuler = a, this.owner.transform.localRotationEulerY += 180, this.start = !0, this.curlength = 0, Laya.timer.clearAll(this), Laya.timer.frameLoop(1, this, this.myupdate)
        }
        myupdate() {
            if (this.start) {
                var t = 15 * this.speed;
                this.owner.transform.translate(new Laya.Vector3(0, 0, -t), !0);
                for (let t = 0; t < this.gameplay.players.length; t++) {
                    if (l.DistanceSquared3D(this.gameplay.players[t].getTopPos(), this.owner.transform.position) < .002) {
                        this.gameplay.gameplayerDie(this.gameplay.players[t]), this.backPool();
                        break
                    }
                }
                this.curlength += t, this.curlength >= this.length && this.backPool()
            }
        }
        onDestroy() {
            Laya.timer.clearAll(this)
        }
        backPool() {
            Laya.timer.clearAll(this), mt.backPoolObject(this.owner)
        }
    }
    class mt {
        static initObj(t, e) {
            let i = [];
            for (let a = 0; a < e; a++) {
                let e = this.getPoolObject(t);
                i.push(e)
            }
            for (let t = 0; t < e; t++) this.backPoolObject(i[t])
        }
        static getPoolObject(t) {
            let e = Laya.Pool.getItem(t);
            return null == e && "bullet" == t && (e = p.ins.getPrefab("danzhu")).addComponent(ut), e
        }
        static backPoolObject(t) {
            t.parent && t.parent.removeChild(t), Laya.Pool.recover(t.name, t)
        }
    }
    class pt extends Laya.Script3D {
        constructor() {
            super(...arguments), this.cdtime = 1500, this.timeindex = 0, this.owner = null, this.firestart = !1
        }
        onAwake() {
            u.on(c.EnemyStart, this, this.enemystart), this.firepos = this.owner.getChildByName("point"), this.animator = this.owner.getComponent(Laya.Animator)
        }
        init(t, e) {
            this.gameplay = t, this.firestart = !1, this.eid = e
        }
        onDestroy() {
            Laya.timer.clearAll(this), u.off(c.EnemyStart, this, this.enemystart)
        }
        enemystart() {
            1 == this.eid ? (this.timeindex = this.cdtime, this.firestart = !0) : 2 == this.eid ? Laya.timer.once(6e3, this, () => {
                this.timeindex = this.cdtime, this.firestart = !0
            }) : 3 == this.eid && Laya.timer.once(12e3, this, () => {
                this.timeindex = this.cdtime, this.firestart = !0
            })
        }
        onUpdate() {
            this.firestart && this.onFire()
        }
        onFire() {
            if (this.timeindex += Laya.timer.delta, this.timeindex > this.cdtime) {
                this.animator.play("fight", 0, 0), this.timeindex = 0;
                let t, e = new Laya.Vector3,
                    i = this.gameplay.getTarget();
                if (!i || i.isWin) return;
                t = new Laya.Vector3(i.owner.transform.position.x + l.Range(-.2, .2), i.owner.transform.position.y, i.owner.transform.position.z), e = new Laya.Vector3(t.x - this.firepos.transform.position.x, 0, t.z - this.firepos.transform.position.z), this.owner.transform.lookAt(t, new Laya.Vector3(0, 1, 0), !0), this.owner.transform.localRotationEulerY += 180;
                let a = mt.getPoolObject("bullet");
                Rt.ins.scene.addChild(a), a.transform.position = this.firepos.transform.position, a.getComponent(ut).init(0, e, .006)
            }
        }
    }
    class gt extends dt {
        onAwake() {
            super.onAwake()
        }
    }
    class yt extends Laya.Script3D {
        constructor() {
            super(...arguments), this.playersAlive = 0, this.playersAliveMax = 0, this.gameplayid = 0, this.winnum = 1
        }
        init() {
            this.players = []
        }
        gameStart() {}
        gameOver() {}
        playerWin() {}
        playerDie() {}
        onUpdate() {}
    }
    class _t extends _.FailUI {
        constructor() {
            super(), this.rewardCount = 10, this.money = 0
        }
        onAwake() {
            g.maxLevel = 1, Rt.ins.gameView.cleanTimers(), this.normalButton.on(Laya.Event.CLICK, this, this.onClickStart), this.adButton.on(Laya.Event.CLICK, this, this.onClickAd), this.rewardBtn.on(Laya.Event.CLICK, this, this.getReward), this.closeBtn.on(Laya.Event.CLICK, this, this.onClose), this.backHomeBtn.on(Laya.Event.CLICK, this, this.backHome), this.rebirthBtn.on(Laya.Event.CLICK, this, this.rebirth), 1 != Rt.ins.gamePlay.gameplayid && (this.money = 100 + 2 * (50 - Rt.ins.gamePlay.winnum)), this.coin.value = "" + this.money, this.coinNum.value = "" + this.rewardCount, this.normalButton.visible = !(Rt.ins.gamePlay.gameplayid >= 2), this.adButton.visible = !(Rt.ins.gamePlay.gameplayid >= 2), this.backHomeBtn.visible = Rt.ins.gamePlay.gameplayid >= 2, this.rebirthBtn.visible = Rt.ins.gamePlay.gameplayid >= 2, this.nativeInnerPanel.visible = !1, this.timerOnce(1e3 * st.showNativeInterDelay, this, () => {
                this.nativeInnerPanel.visible = !0, this.showNativeInner()
            })
        }
        onClickStart() {
            y.playSound("audio/button.mp3"), g.coin += this.money, this.close(), Rt.ins.cleanScene(() => {
                //window.playInterAd();
                Rt.ins.initHomeScene(), Et.openView(Et.Home)
            })
        }
        onClickAd() {
            y.playSound("audio/button.mp3"), st.Ad().showVideo(t => {
                
                t && (g.coin += 2 * this.money, this.close(), Rt.ins.cleanScene(() => {
                    Rt.ins.initHomeScene(), Et.openView(Et.Home)
                }))
            })
        }
        getReward() {
            y.playSound("audio/button.mp3"), g.coin += this.rewardCount, this.nativeInnerPanel.visible = !1
        }
        onClose() {
            
            y.playSound("audio/button.mp3"), this.nativeInnerPanel.visible = !1
        }
        showNativeInner() {
            if (st.Ad().getLocalNativeData(N.interstitial)) {
                let t = () => {
                        st.Ad().hideBanner()
                    },
                    e = () => {
                        this.timerOnce(15e3, this, () => {
                            st.Ad().showBanner()
                        })
                    };
                st.Ad().showInterstitialNative(this.nativeView, null, t, e)
            }
        }
        backHome() {
            this.close(), Rt.ins.cleanScene(() => {
                window.playInterAd();
                Rt.ins.initHomeScene(), Et.openView(Et.Home)
            })
        }
        rebirth() {
            st.Ad().showVideo(t => {
                t && (this.close(), Rt.ins.cleanScene(() => {
                    Rt.ins.initRestScene()
                }))
            })
        }
    }
    class vt extends _.FreeCoinUI {
        constructor() {
            super(...arguments), this.rewardCoin = 100
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.closeBtn.on(Laya.Event.CLICK, this, this.onClose), this.getCoinBtn.on(Laya.Event.CLICK, this, this.getCoin), this.cancelBtn.on(Laya.Event.CLICK, this, this.onClose), this.coinCount.value = this.rewardCoin + ""
        }
        onClose() {
            y.playSound("audio/button.mp3"), Et.removeView(Et.FreeCoin)
        }
        getCoin() {
            y.playSound("audio/button.mp3"), st.Ad().showVideo(t => {
                t && (g.coin += this.rewardCoin, u.event(c.RefreshGold), Et.removeView(Et.FreeCoin))
            })
        }
        onDisable() {}
    }! function(t) {
        t[t.ENABLE = 1] = "ENABLE", t[t.DISABLE = 2] = "DISABLE", t[t.MOVE = 3] = "MOVE"
    }(ht || (ht = {}));
    class wt {
        constructor(t, e, i) {
            this.joyOffset = .5, this.isEnableJoy = !1, this.joyCenter = t, this.joyCenterSprite = this.joyCenter, this.joyRedis = i, this.joyBackGround = e, this.joyBackGround.on(Laya.Event.MOUSE_DOWN, this, this.onEnableJoy), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onDisableJoy), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onDisableJoy), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMoveingJoy), Laya.timer.frameLoop(1, this, this.Update), this.JoyHandlerArray = []
        }
        AddJoyEvent(t, e, i, a) {
            if (null == e) return !1;
            this.JoyHandlerArray.forEach(t => {
                if (t.table == a) return !1
            });
            let n = Laya.Handler.create(t, e);
            n.once = !1;
            let s = {
                callback: n,
                type: i,
                table: a
            };
            return this.JoyHandlerArray.push(s), !0
        }
        ClearJoyEventWithTable(t) {
            for (var e = this.JoyHandlerArray.length; e >= 0; e++) this.JoyHandlerArray[e].table
        }
        runHandler(t, e) {
            this.JoyHandlerArray.forEach(i => {
                i.type == t && i.callback.runWith(e)
            })
        }
        onEnableJoy(t) {
            this.isEnableJoy || (this.touchId = t.touchId, this.isEnableJoy = !0, this.joyOffset = .5, this.touchPostion = new Laya.Point(t.stageX, t.stageY), this.joyBackGround.globalToLocal(this.touchPostion), this.runHandler(ht.ENABLE))
        }
        onMoveingJoy(t) {
            this.isEnableJoy && this.touchId == t.touchId && null != this.touchId && (this.joyOffset = .75, this.touchPostion = new Laya.Point(t.stageX, t.stageY), this.joyBackGround.globalToLocal(this.touchPostion))
        }
        onDisableJoy(t) {
            this.isEnableJoy && this.touchId == t.touchId && null != this.touchId && (this.runHandler(ht.MOVE, {
                horizontal: 0,
                vertical: 0,
                intensity: 0
            }), this.runHandler(ht.DISABLE), this.isEnableJoy = !1)
        }
        Update() {
            if (!this.isEnableJoy) return this.joyCenterSprite.x = Laya.MathUtil.lerp(this.joyCenterSprite.x, this.joyBackGround.width / 2, .5), void(this.joyCenterSprite.y = Laya.MathUtil.lerp(this.joyCenterSprite.y, this.joyBackGround.height / 2, .5));
            this.moveJoy()
        }
        moveJoy() {
            let t = Math.sqrt(Math.pow(this.touchPostion.x - this.joyBackGround.width / 2, 2) + Math.pow(this.touchPostion.y - this.joyBackGround.height / 2, 2)),
                e = new Laya.Point(this.touchPostion.x - this.joyBackGround.width / 2, this.touchPostion.y - this.joyBackGround.height / 2);
            e.normalize(), t > this.joyRedis ? (t = this.joyRedis, e.x *= this.joyRedis, e.y *= this.joyRedis) : (e.x *= t, e.y *= t), this.runHandler(ht.MOVE, {
                horizontal: e.x / (1 * this.joyRedis),
                vertical: -e.y / (1 * this.joyRedis),
                intensity: t / (1 * this.joyRedis)
            }), e.x += this.joyBackGround.width / 2, e.y += this.joyBackGround.height / 2, this.joyCenterSprite.x = Laya.MathUtil.lerp(this.joyCenterSprite.x, e.x, this.joyOffset), this.joyCenterSprite.y = Laya.MathUtil.lerp(this.joyCenterSprite.y, e.y, this.joyOffset)
        }
    }
    class ft extends _.GameUI {
        constructor() {
            super(), this.counttime = 90, this.headname = ["Jo Zang", "吳晨晞", "Huang Zhou", "Jude Lee", "May Zhu", "Vivi Van", "Xinhui Deng", "บุษกร พระเอี้ยง", "Patrice Ortega", "กิ๊ก หมี", "Tz Liao", "Yeah Lee", "Shin Lu", "Ken Lee", "李鎮東", "Art Dacha", "Thuy Tuty", "โย บุญสูง", "ปุ๊ ไชยา", "曾志坚", "Simon Huang", "Hermes Lai", "Ngọc Đá"], this.oldstatex = 0, this.cameratcok = !1
        }
        onAwake() {
            super.onAwake(), this.initControl(), 0 == Rt.ins.gamePlay.gameplayid ? 0 == Rt.ins.resttime ? (this.wait.visible = !0, this.counttime = 15, this.addfun()) : (this.wait2.visible = !0, this.counttime = 15, this.waitnum.value = "" + Rt.ins.playersAlive) : 1 == Rt.ins.gamePlay.gameplayid ? (this.info1.visible = !0, Laya.timer.once(3e3, this, () => {
                this.info1.visible = !1
            }), this.game.visible = !0, this.counttime = 120, this.numLabel.value = "" + Rt.ins.gamePlay.playersAliveMax, this.timeOut()) : 2 == Rt.ins.gamePlay.gameplayid ? (this.info2.visible = !0, Laya.timer.once(3e3, this, () => {
                this.info2.visible = !1
            }), this.game.visible = !0, this.counttime = 60, this.numLabel.value = "" + Rt.ins.gamePlay.playersAliveMax, this.hideInput(), this.startCountDown()) : 3 == Rt.ins.gamePlay.gameplayid && (this.info3.visible = !0, Laya.timer.once(3e3, this, () => {
                this.info3.visible = !1
            }), this.game.visible = !0, this.counttime = 120, this.topbg.visible = !1, this.numLabel.value = "" + Rt.ins.gamePlay.playersAliveMax, this.timeOut()), st.Ad().showBanner()
        }
        addfun() {
            let t = l.IntRange(500, 1e3);
            Laya.timer.once(t, this, () => {
                this.addItem(), this.addfun()
            })
        }
        initControl() {
            this.joyController = new wt(this.JoyControl, this.JoyBg, 100), this.joyController.AddJoyEvent(this, this.Joymove, ht.MOVE, "MOVE"), this.skillButton.on(Laya.Event.CLICK, this, () => {
                !Rt.ins.playerCtrl || Rt.ins.playerCtrl.isCurState(rt.Jump) || Rt.ins.playerCtrl.isCurState(rt.Fall) || Rt.ins.playerCtrl.changeState(rt.Jump)
            }), this.cameratouch.on(Laya.Event.MOUSE_MOVE, this, t => {
                if (this.cameratcok) {
                    let e = t.stageX;
                    p.ins.cameraCtrl.setAngle(e - this.oldstatex), this.oldstatex = e
                }
            }), this.cameratouch.on(Laya.Event.MOUSE_DOWN, this, t => {
                this.cameratcok = !0, this.oldstatex = t.stageX
            }), this.cameratouch.on(Laya.Event.MOUSE_UP, this, t => {
                this.cameratcok = !1
            })
        }
        Joymove(t) {
            Rt.ins.isGamming && Rt.ins.playerCtrl && Rt.ins.playerCtrl.setMoveDir(new Laya.Vector2(-t.horizontal, t.vertical))
        }
        startCountDown() {
            this.timeLabel.text = l.getFormatBySecond3(this.counttime), Laya.timer.loop(1e3, this, () => {
                if (this.counttime = this.counttime - 1, this.timeLabel.text = l.getFormatBySecond3(this.counttime), this.counttime <= 0) return Rt.ins.changePhase(lt.Over), void Laya.timer.clearAll(this)
            })
        }
        startCountDown0() {
            0 == Rt.ins.resttime ? (this.waittime.text = l.getFormatBySecond3(this.counttime), Laya.timer.loop(1e3, this, () => {
                if (this.counttime = this.counttime - 1, this.waittime.text = l.getFormatBySecond3(this.counttime), this.counttime <= 0) return Laya.timer.clearAll(this), Et.removeView(ft), void Rt.ins.cleanScene(() => {
                    0 == Rt.ins.resttime ? Rt.ins.initScene() : 1 == Rt.ins.resttime && Rt.ins.initScene2()
                })
            })) : (this.wait2time.text = l.getFormatBySecond3(this.counttime), Laya.timer.loop(1e3, this, () => {
                if (this.counttime = this.counttime - 1, this.wait2time.text = l.getFormatBySecond3(this.counttime), this.counttime <= 0) return Laya.timer.clearAll(this), Et.removeView(ft), void Rt.ins.cleanScene(() => {
                    0 == Rt.ins.resttime ? Rt.ins.initScene() : 1 == Rt.ins.resttime ? Rt.ins.initScene2() : 2 == Rt.ins.resttime && Rt.ins.initScene3()
                })
            }))
        }
        close() {
            super.close(), Laya.timer.clearAll(this)
        }
        addItem() {
            this.item.visible = !0, this.item.alpha = 1;
            let t = l.IntRange(1, 30);
            this.icon.skin = "res2d/head/" + t + ".png";
            let e = l.IntRange(0, this.headname.length - 1);
            this.pname.text = this.headname[e];
            let i = () => {
                this.item.alpha -= .01, 0 == this.item.alpha && Laya.timer.clear(this, i)
            };
            Laya.timer.clear(this, i), Laya.timer.loop(1, this, i)
        }
        timeOut() {
            let t = 7;
            this.timeAnim(t - 4), Laya.timer.loop(1e3, this.imgTime, () => {
                --t >= 4 && this.timeAnim(t - 4), 4 == t && Laya.timer.once(500, this.imgTime, () => {
                    this.imgTime.visible = !1, u.event(c.GameStart), Rt.ins.gamePlay.gameStart()
                }), 0 == t && Laya.timer.clearAll(this.imgTime)
            })
        }
        timeAnim(t) {
            this.imgTime.visible = !0, this.imgTime.skin = "res2d/game/img_main_time" + t + ".png", this.imgTime.scaleX = 1.2, this.imgTime.scaleY = 1.2, Laya.Tween.to(this.imgTime, {
                scaleX: 2.6,
                scaleY: 2.6
            }, 150, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgTime, {
                    scaleX: 1,
                    scaleY: 1
                }, 300, Laya.Ease.linearNone)
            }))
        }
        onClosed() {
            Laya.timer.clearAll(this)
        }
        cleanTimers() {
            Laya.timer.clearAll(this)
        }
        hideInput() {
            this.skillButton.visible = !1, this.cameratouch.visible = !1, this.JoyBg.visible = !1, this.JoyControl.visible = !1
        }
        showInput() {
            this.skillButton.visible = !0, this.cameratouch.visible = !0, this.JoyBg.visible = !0, this.JoyControl.visible = !0
        }
        showWinRank(t, e) {
            this.winrank.visible = !0, this.rank.value = t, this.nextButton.offAll(Laya.Event.CLICK), this.nextButton.on(Laya.Event.CLICK, this, t => {
                y.playSound("audio/button.mp3"), e()
            })
        }
    }
    class It extends _.HomeUI {
        constructor() {
            super()
        }
        onAwake() {
            u.on(c.RefreshGold, this, this.updateCoin), this.startButton.on(Laya.Event.CLICK, this, this.onClickStart),
            // console.log(this)
            // this.settingButton.visible =this.shopButton.visible =this.addButton.visible =this.startButton.visible = this.coin.parent.visible = false;
             this.settingButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), Et.openView(Et.Setting)
            }), this.shopButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), Et.openView(Et.Shop)
            }), this.addButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), Et.openView(Et.FreeCoin)
            }), this.coin.value = "" + g.coin, st.Ad().showBanner(), Rt.ins.rest(), 
            this.showNativeIcon(), !st.firstShowHomeView && this.showNativeInner(), 
            st.firstShowHomeView = !1, 0 == g.maxLevel && (this.Info.visible = !0, this.Info.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), this.Info.visible = !1
            }))
        }
        onClosed() {
            super.onClosed(), u.off(c.RefreshGold, this, this.updateCoin)
        }
        updateCoin() {
            this.coin.value = "" + g.coin
        }
        onClickStart() {
            Rt.ins.cleanHomeScene(), Rt.ins.initRestScene(), this.close()
        }
        showNativeIcon() {
            st.Ad().getLocalNativeData(N.native_icon) && st.Ad().showNativeIcon(this.nativeIcon)
        }
        showNativeInner() {
            100 * Math.random() <= st.showNativeInterPro && Et.openView(Et.NativeInner)
        }
    }
    class St extends _.LoadingUI {
        constructor() {
            super(), this.maxLength = 0
        }
        onAwake() {
            console.log("ssssss"), this.maxLength = this.imgBar.width, this.imgBar.width = 0;
            let t = new _.LoadUI;
            console.log(t)
            this.stage.addChild(t), t.zOrder = -2;
            Rt.ins.loadRes(() => {
                console.log("游戏资源加载完成"), this.imgBar.width = this.maxLength, r.setTimeout(() => {
                    this.intoStart()
                }, this, 100)
            }, t => {
                let e = .2 + .8 * t;
                this.imgBar.width < this.maxLength * e && (this.imgBar.width = this.maxLength * e)
            }), st.initAdGame(() => {
                this.loadGameConfigData()
            })
        }
        intoStart() {
            Et.removeView(Et.Loading), Rt.ins.initHomeScene(), Et.openView(Et.Home), st.firstShowHomeView = !0
        }
        loadGameConfigData() {
            const t = new XMLHttpRequest;
            t.open("POST", "https://ga.gametdd.com/adCtrl/agd/conf", !0), t.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            const e = JSON.stringify({
                id: "61616f5a1d39b10b458077fd"
            });
            t.send(e), t.onload = function() {
                if (200 == t.status) {
                    const e = JSON.parse(t.responseText);
                    if (console.log(e), e.data) {
                        let t = e.data;
                        t.p1 && (st.showNativeInterDelay = Number(t.p1)), t.p2 && (st.showNativeInterPro = Number(t.p2))
                    }
                } else console.error("请求api失败!" + t.status)
            }
        }
    }
    class bt extends _.MatchingUI {
        constructor() {
            super()
        }
        onAwake() {
            Laya.timer.once(2e3, this, () => {
                Rt.ins.initRestScene(), this.close()
            })
        }
    }
    class Ct extends _.NativeInnerUI {
        constructor() {
            super(...arguments), this.rewardCount = 10
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.closeBtn.on(Laya.Event.CLICK, this, this.onClose), this.rewardBtn.on(Laya.Event.CLICK, this, this.getReward), this.coinNum.value = this.rewardCount + "", st.Ad().hideBanner(), this.showNativeInner()
        }
        onDisable() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onClose), this.rewardBtn.off(Laya.Event.CLICK, this, this.getReward), st.Ad().showBanner()
        }
        onClose() {
            y.playSound("audio/button.mp3"), Et.removeView(Et.NativeInner)
        }
        getReward() {
            y.playSound("audio/button.mp3"), g.coin += this.rewardCount, Et.removeView(Et.NativeInner)
        }
        showNativeInner() {
            if (st.Ad().getLocalNativeData(N.interstitial)) {
                let t = () => {
                        st.Ad().hideBanner()
                    },
                    e = () => {};
                st.Ad().showInterstitialNative(this.nativeView, null, t, e)
            }
        }
    }
    class At extends _.SettingUI {
        constructor() {
            super()
        }
        onAwake() {
            this.closeButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), Et.removeView(Et.Setting)
            }), g.musicPlay ? (this.mopen.visible = !0, this.mclose.visible = !1) : (this.mopen.visible = !1, this.mclose.visible = !0), this.musicButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), g.musicPlay ? (this.mclose.visible = !0, this.mopen.visible = !1, g.musicPlay = !1, g.musicPlay || y.stopMusic()) : (this.mclose.visible = !1, this.mopen.visible = !0, g.musicPlay = !0, g.musicPlay || y.stopMusic())
            }), g.soundPlay ? (this.sopen.visible = !0, this.sclose.visible = !1) : (this.sopen.visible = !1, this.sclose.visible = !0), this.soundButton.on(Laya.Event.CLICK, this, () => {
                g.soundPlay ? (this.sclose.visible = !0, this.sopen.visible = !1, g.soundPlay = !1, y.playSound("audio/button.mp3")) : (this.sclose.visible = !1, this.sopen.visible = !0, g.soundPlay = !0, y.playSound("audio/button.mp3"))
            }), g.vibrate ? (this.vopen.visible = !0, this.vclose.visible = !1) : (this.vclose.visible = !0, this.vopen.visible = !1), this.vibrateButton.on(Laya.Event.CLICK, this, () => {
                g.vibrate ? (this.vclose.visible = !0, this.vopen.visible = !1, g.vibrate = !1, y.playSound("audio/button.mp3")) : (this.vclose.visible = !1, this.vopen.visible = !0, g.vibrate = !0, y.playSound("audio/button.mp3"))
            }), st.Ad().showBanner()
        }
        closeView() {
            console.log("Finsh---界面关闭"), this.close()
        }
    }
    class Lt extends _.ShopUI {
        constructor() {
            super(...arguments), this.freeCoinCount = 100, this.SkinInfo1 = [{
                cost: 0,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }, {
                cost: 600,
                type: 0
            }], this.SkinInfo2 = [{
                cost: 0,
                type: 0
            }, {
                cost: 800,
                type: 0
            }, {
                cost: 800,
                type: 0
            }, {
                cost: 800,
                type: 0
            }], this.pageindex = 0
        }
        onAwake() {
            this.closeButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), this.close()
            }), this.addButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), Et.openView(Et.FreeCoin)
            }), this.mzButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), 0 != this.pageindex && (this.pageindex = 0, this.updateButton(), this.updatePange())
            }), this.cbButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), 1 != this.pageindex && (this.pageindex = 1, this.updateButton(), this.updatePange())
            }), this.adButton.on(Laya.Event.CLICK, this, () => {
                y.playSound("audio/button.mp3"), st.Ad().showVideo(t => {
                    t && (g.coin += this.freeCoinCount, u.event(c.RefreshGold))
                })
            }), u.on(c.RefreshGold, this, this.updatecoin), this.bg = this.getChildByName("bg"), this.list1.scrollBar.showButtons = !1, this.list1.scrollBar.scaleBar = !1, this.updatecoin(), this.updateButton(), this.updatePange(), this.init3D()
        }
        updatePange() {
            0 == this.pageindex ? (this.list2.visible = !1, this.list1.visible = !0, this.list1.renderHandler = new Laya.Handler(this, this.renderList1), this.list1.array = this.SkinInfo1) : 1 == this.pageindex && (this.list1.visible = !1, this.list2.visible = !0, this.list2.renderHandler = new Laya.Handler(this, this.renderList2), this.list2.array = this.SkinInfo2, this.list2.vScrollBarSkin = "")
        }
        renderList1(t, e) {
            this.SkinInfo1[e];
            let i = g.skinHeadIsLock(e),
                a = g.skinIsUseHead(e),
                n = t.getChildByName("state1");
            n.visible = !1;
            let s = t.getChildByName("state2");
            if (s.visible = !1, t.getChildByName("skinimg").skin = "res2d/shop/head/" + e + ".png", t.getChildByName("select").visible = !!a, i) {
                let t;
                0 == this.SkinInfo1[e].type ? ((t = n).visible = !0, t.getChildByName("money").value = this.SkinInfo1[e].cost) : (t = s).visible = !0
            }
            t.offAll(Laya.Event.CLICK), t.on(Laya.Event.CLICK, t, () => {
                if (y.playSound("audio/button.mp3"), i)
                    if (0 == this.SkinInfo1[e].type)
                        if (console.log(g.coin + "      " + this.SkinInfo1[e].cost), g.coin >= this.SkinInfo1[e].cost) {
                            let t = g.coin - this.SkinInfo1[e].cost;
                            g.coin = t, u.event(c.RefreshGold), g.addSkinHead(e, !0), this.list1.refresh(), g.useHeadSkin = e, this.updatecoin(), l.showTips("Successful purchase"), this.updateModel()
                        } else l.showTips("Not enough gold coins, go play the game");
                else u.event(c.RefreshGold);
                else g.useHeadSkin = e, this.list1.refresh(), this.updateModel()
            })
        }
        renderList2(t, e) {
            this.SkinInfo2[e];
            let i = g.skinCBIsLock(e),
                a = g.skinIsUseCB(e),
                n = t.getChildByName("state1");
            n.visible = !1;
            let s = t.getChildByName("state2");
            if (s.visible = !1, t.getChildByName("skinimg").skin = "res2d/shop/ciban/" + e + ".png", t.getChildByName("select").visible = !!a, i) {
                let t;
                0 == this.SkinInfo2[e].type ? ((t = n).visible = !0, t.getChildByName("money").value = this.SkinInfo2[e].cost) : (t = s).visible = !0
            }
            t.offAll(Laya.Event.CLICK), t.on(Laya.Event.CLICK, t, () => {
                if (y.playSound("audio/button.mp3"), i) {
                    if (0 == this.SkinInfo2[e].type)
                        if (console.log(g.coin + "      " + this.SkinInfo2[e].cost), g.coin >= this.SkinInfo2[e].cost) {
                            let t = g.coin - this.SkinInfo2[e].cost;
                            g.coin = t, u.event(c.RefreshGold), g.addSkinCB(e, !0), this.list2.refresh(), g.useCBSkin = e, this.updatecoin(), l.showTips("Successful purchase"), this.updateModel()
                        } else l.showTips("Not enough gold coins, go play the game")
                } else g.useCBSkin = e, this.list2.refresh(), this.updateModel()
            })
        }
        updateButton() {
            if (0 == this.pageindex) {
                this.mzButton.getChildByName("select").visible = !0, this.cbButton.getChildByName("select").visible = !1
            } else if (1 == this.pageindex) {
                this.mzButton.getChildByName("select").visible = !1, this.cbButton.getChildByName("select").visible = !0
            }
        }
        updatecoin() {
            this.coin.value = g.coin + "", this.rewardCoin.value = this.freeCoinCount + ""
        }
        init3D() {
            this.playerbox.width;
            let t = this.playerbox.height;
            this.shopscene = Laya.loader.getRes(d.ShopScene), this.playerbox.addChild(this.shopscene), this.shopscene.getChildByName("Camera").viewport = new Laya.Viewport(0, this.height - t - this.bg.bottom - this.bg.height + 60, st.screenWidth, t * st.scale), this.playerctrl = this.shopscene.getChildByName("Player").addComponent(gt), this.updateModel()
        }
        updateModel() {
            this.playerctrl.setHeadSkin(g.useHeadSkin), this.playerctrl.setCibanSkin(g.useCBSkin)
        }
        onClosed() {
            super.onClosed()
        }
    }
    class Nt extends _.VersionTipsUI {
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.closeBtn.on(Laya.Event.CLICK, this, this.onClose)
        }
        onDisable() {}
        onClose() {
            Et.removeView(Et.VersionTips)
        }
    }
    class kt extends _.WinUI {
        constructor() {
            super(), this.angle = [122, 167, 224, 289, 378, 441, 499, 550], this.multiple = [2, 3, 4, 5, 4, 3, 2], this.isClockwise = !1, this.rewardCount = 10, this.money = 100, this.pointMaxTime = 1500
        }
        onAwake() {
            Rt.ins.gameView.cleanTimers(), this.normalButton.on(Laya.Event.CLICK, this, this.onClickStart), this.coin.value = "" + this.money, this.coinNum.value = "" + this.rewardCount, this.adButton.on(Laya.Event.CLICK, this, this.onClickAd), this.rewardBtn.on(Laya.Event.CLICK, this, this.getReward), this.closeBtn.on(Laya.Event.CLICK, this, this.onClose), this.nativeInnerPanel.visible = !1, this.timerOnce(1e3 * st.showNativeInterDelay, this, () => {
                this.nativeInnerPanel.visible = !0, this.showNativeInner()
            })
        }
        onClickStart() {
            //window.playInterAd();
            y.playSound("audio/button.mp3"), g.coin += 100, this.close(), Rt.ins.cleanScene(() => {
                Rt.ins.initHomeScene(), Et.openView(Et.Home)
            })
        }
        onClickAd() {
            y.playSound("audio/button.mp3"), st.Ad().showVideo(t => {
                t && (g.coin += 200, this.close(), Rt.ins.cleanScene(() => {
                    Rt.ins.initHomeScene(), Et.openView(Et.Home)
                }))
            })
        }
        getReward() {
            y.playSound("audio/button.mp3"), g.coin += this.rewardCount, this.nativeInnerPanel.visible = !1, Rt.ins.gamePlay.gameplayid >= 3 && Et.openView(Et.VersionTips)
        }
        onClose() {
            window.playInterAd();
            y.playSound("audio/button.mp3"), this.nativeInnerPanel.visible = !1, Rt.ins.gamePlay.gameplayid >= 3 && Et.openView(Et.VersionTips)
        }
        showNativeInner() {
            if (st.Ad().getLocalNativeData(N.interstitial)) {
                let t = () => {
                        st.Ad().hideBanner()
                    },
                    e = () => {
                        this.timerOnce(15e3, this, () => {
                            st.Ad().showBanner()
                        })
                    };
                st.Ad().showInterstitialNative(this.nativeView, null, t, e)
            }
        }
    }
    class Et {
        static openView(t, e = !1) {
            if (this.Stage || (this.Stage = Laya.stage), !e && this.Stage.getChildByName(t)) return void console.error("重复创建view----" + t);
            let i = null;
            switch (t) {
                case this.Loading:
                    (i = new St).name = this.Loading, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Home:
                    (i = new It).name = this.Home, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Game:
                    (i = new ft).name = this.Game, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Matching:
                    (i = new bt).name = this.Matching, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Win:
                    (i = new kt).name = this.Win, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Fail:
                    (i = new _t).name = this.Fail, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Setting:
                    (i = new At).name = this.Setting, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.NativeInner:
                    (i = new Ct).name = this.NativeInner, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.VersionTips:
                    (i = new Nt).name = this.VersionTips, i.zOrder = 11, this.Stage.addChild(i);
                    break;
                case this.Shop:
                    (i = new Lt).name = this.Shop, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.FreeCoin:
                    (i = new vt).name = this.FreeCoin, i.zOrder = 10, this.Stage.addChild(i);
                    break;
                case this.Settle:
                    (i = new Dt).name = this.Settle, i.zOrder = 10, this.Stage.addChild(i)
            }
            return i
        }
        static getView(t) {
            this.Stage || (this.Stage = Laya.stage);
            let e = this.Stage.getChildByName(t);
            return e || null
        }
        static removeView(t) {
            this.Stage || (this.Stage = Laya.stage);
            let e = this.Stage.getChildByName(t);
            return e && (e.closeView && e.closeView(), e.close()), null
        }
    }
    Et.Loading = "Loading", Et.Home = "Home", Et.Game = "Game", Et.Guid = "Guid", Et.Signin = "Signin", Et.Fail = "Fail", Et.Win = "Win", Et.Setting = "Setting", Et.Shop = "Shop", Et.TrySkin = "TrySkin", Et.Matching = "Matching", Et.NativeInner = "NativeInner", Et.VersionTips = "VersionTips", Et.FreeCoin = "FreeCoin", Et.Settle = "Settle", Et.Stage = null;
    class xt extends yt {
        constructor() {
            super(...arguments), this.iscanmove = !0
        }
        init() {
            super.init(), mt.initObj("bullet", 6), this.gameplayid = 3, this.playersAliveMax = Rt.ins.playersAlive, this.playersAlive = this.playersAliveMax, this.initPlayer(), this.initAIPlayer(), u.event(c.GameStart), this.iscanmove = !0, this.enemy1 = Rt.ins.scene.getChildByName("enemy1"), this.enemy2 = Rt.ins.scene.getChildByName("enemy2"), this.enemy3 = Rt.ins.scene.getChildByName("enemy3"), this.e1ctrl = this.enemy1.addComponent(pt), this.e2ctrl = this.enemy2.addComponent(pt), this.e3ctrl = this.enemy3.addComponent(pt), this.e1ctrl.init(this, 1), this.e2ctrl.init(this, 2), this.e3ctrl.init(this, 3)
        }
        gameStart() {
            u.event(c.EnemyStart)
        }
        gameOver() {}
        playerWin() {
            Rt.ins.wincoin += 100, Rt.ins.playersAlive = this.playersAlive, Rt.ins.resttime = 3, Laya.timer.once(1e3, this, () => {
                Laya.timer.clearAll(this), y.stopAll(), Et.removeView(Et.Game), Rt.ins.cleanScene(() => {
                    Rt.ins.initRestScene(), Et.openView(Et.Settle)
                })
            })
        }
        playerDie() {}
        gameplayerDie(t) {
            t.changeState(rt.Die);
            let e = this.players.indexOf(t);
            this.players.splice(e, 1), this.playersAlive -= 1, Rt.ins.gameView.numLabel.value = "" + this.playersAlive, 0 == t.rankID ? Laya.timer.once(2e3, this, () => {
                this.e1ctrl.firestart = !1, this.e2ctrl.firestart = !1, this.e3ctrl.firestart = !1, Laya.timer.clearAll(this), y.stopAll(), Et.openView(Et.Fail)
            }) : 1 == this.players.length && 0 == this.players[0].rankID && (this.e1ctrl.firestart = !1, this.e2ctrl.firestart = !1, this.e3ctrl.firestart = !1, Rt.ins.resttime = 3, Laya.timer.once(2e3, this, () => {
                Laya.timer.clearAll(this), y.stopAll(), Et.openView(Et.Win)
            }))
        }
        initPlayer() {
            let t = Laya.loader.getRes(d.Player).clone();
            Rt.ins.scene.addChild(t), Rt.ins.playerCtrl = t.addComponent(gt), t.transform.localPositionZ = l.Range(-.5, 0), p.ins.cameraCtrl.setTarget(t), Rt.ins.playerCtrl.rankID = 0, this.players.push(Rt.ins.playerCtrl), Rt.ins.playerCtrl.setHeadSkin(g.useHeadSkin), Rt.ins.playerCtrl.setCibanSkin(g.useCBSkin), Rt.ins.playerCtrl.changeArea(-1.4, 1.4, -1.4, 1.4)
        }
        initAIPlayer() {
            this.addNumAi(15)
        }
        addNumAi(t) {
            for (let e = 0; e < t; e++) {
                let t = Laya.loader.getRes(d.Player).clone(),
                    e = t.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End").getChildByName("skin0");
                e.active = !0, e.meshRenderer.material = Rt.ins.materials[l.IntRange(0, 16)], Rt.ins.scene.addChild(t);
                let i = t.addComponent(ct);
                t.transform.localPositionX = l.Range(-1.4, 1.4), t.transform.localPositionZ = l.Range(-1.4, 1.4), this.players.push(i), i.rankID = xt.nameid++, i.canmove = !0, i.startRandrun(), i.startRandjump(), i.changeArea(-1.4, 1.4, -1.4, 1.4)
            }
        }
        onDestroy() {
            Laya.timer.clearAll(this)
        }
        getTarget() {
            let t = l.IntRange(0, this.players.length - 1);
            return this.players[t]
        }
    }
    xt.nameid = 1;
    class Pt extends Laya.Script3D {
        constructor() {
            super(...arguments), this.isPinIn = !1, this.owner = null, this.isfirstin = !1, this.isdown = !1, this.initok = !1, this.curstate = 0, this.checkoknum = 0, this.oldstatex = 0, this.oldstatey = 0
        }
        init(t) {
            this.gameplay = t, this.checkoknum = 0;
            let e = this.owner.getChildByName("Target");
            this.pinMaterial = e.meshRenderer.material, this.somoke = this.owner.getChildByName("Smoke"), this.pinOut(), this.initInput(), this.delatpos = new Laya.Vector2(0, 0), this.isfirstin = !1, this.isdown = !1, this.initok = !0
        }
        pinOut() {
            this.isPinIn = !1, this.somoke.active = !1, this.owner.transform.localPositionY = .01, this.changePinState(0)
        }
        pingIn() {
            this.isPinIn = !0, this.owner.transform.localPositionY = 0, this.isfirstin || (this.gameplay.dashlines.active = !1)
        }
        changePinState(t) {
            this.curstate != t && (0 == t ? (Laya.timer.clear(this, this.breakFun), this.pinMaterial.albedoColor = new Laya.Vector4(1, 1, 1, .5)) : 1 == t ? (Laya.timer.clear(this, this.breakFun), this.pinMaterial.albedoColor = new Laya.Vector4(0, 1, 0, .5)) : 2 == t && (st.vibrate(), this.pinMaterial.albedoColor = new Laya.Vector4(1, 0, 0, .5), Laya.timer.once(600, this, this.breakFun)), this.curstate = t)
        }
        breakFun() {
            if (this.cleanInput(), this.targetOver) {
                this.gameplay.fullCandy.active = !1;
                let t = this.targetOver.name.split("_"),
                    e = t[t.length - 1],
                    i = this.gameplay.fullCandy.parent.getChildByName("Candy").getChildByName("Outside_Candy_" + e);
                i.transform.localPositionX += l.Range(-5, 5), i.transform.localPositionZ += l.Range(-5, 5);
                let a = this.gameplay.fullCandy.parent.getChildByName("Candy").getChildByName("İnside_Candy_" + e);
                a.transform.localPositionX += l.Range(-5, 5), a.transform.localPositionZ += l.Range(-5, 5)
            }
            Laya.timer.once(1e3, this, () => {
                this.gameplay.gameOver()
            })
        }
        onDestroy() {
            this.initok = !1, this.cleanInput(), Laya.timer.clearAll(this), this.owner.destroy(!0)
        }
        onTriggerEnter(t) {
            if (this.initok) {
                t.owner;
                "Quad" == t.owner.name || "OkQuad" == t.owner.name ? (this.targetQuad = t.owner, "Quad" == t.owner.name && this.changeQuade()) : this.targetOver = t.owner
            }
        }
        onTriggerExit(t) {
            if (this.initok) {
                t.owner;
                t.owner == this.targetQuad && (this.targetQuad = null)
            }
        }
        onUpdate() {
            this.isPinIn && (null != this.targetQuad ? (this.somoke.active = !0, this.changePinState(1)) : (this.somoke.active = !1, this.changePinState(2)))
        }
        changeQuade() {
            this.targetQuad.name = "OkQuad", this.targetQuad.meshRenderer.enable = !1, this.checkoknum++, this.checkoknum >= this.gameplay.collidernums && (this.gameplay.fullCandy.parent.getChildByName("Candy").active = !1, this.owner.active = !1, Rt.ins.playerCtrl.isWin = !0, this.gameplay.playerOk())
        }
        initInput() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.touchDown), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.touchMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.touchUp)
        }
        cleanInput() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.touchDown), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.touchMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.touchUp)
        }
        touchDown(t) {
            this.isdown = !0, this.pingIn(), this.oldstatex = t.stageX, this.oldstatey = t.stageY
        }
        touchMove(t) {
            if (this.isdown) {
                let e = t.stageX,
                    i = t.stageY;
                this.owner.transform.localPositionX -= 3e-4 * (e - this.oldstatex), this.owner.transform.localPositionZ -= 3e-4 * (i - this.oldstatey), this.oldstatex = e, this.oldstatey = i
            }
        }
        touchUp(t) {
            this.pinOut()
        }
    }
    class Bt extends yt {
        constructor() {
            super(...arguments), this.iscanmove = !0, this.endnum = 0
        }
        init() {
            super.init(), this.gameplayid = 2, this.playersAliveMax = Rt.ins.playersAlive, this.playersAlive = this.playersAliveMax;
            let t = l.IntRange(10, 20);
            this.diepeople = this.playersAlive - t, Bt.nameid = 1, this.initPlayer(), this.initAIPlayer(), u.event(c.GameStart), this.iscanmove = !0;
            let e = l.IntRange(1, 4);
            this.miniGameObj = Rt.ins.scene.getChildByName("MiniGame");
            let i = this.miniGameObj.getChildByName("Plane").getChildByName("Candy").getChildByName("Candy_Container").getChildByName("" + e);
            i.active = !0, this.fullCandy = i.getChildByName("Full_Candy"), this.dashlines = i.getChildByName("Candy").getChildByName("DashLines"), this.colidernode = this.miniGameObj.getChildByName("Plane").getChildByName("Candy").getChildByName("Colliders").getChildByName("" + e), this.colidernode.active = !0, this.collidernums = this.colidernode.numChildren;
            let a = this.miniGameObj.getChildByName("Plane").getChildByName("PinController");
            this.pinctrl = a.addComponent(Pt), this.pinctrl.init(this), 1 == e ? a.transform.localPosition = new Laya.Vector3(0, 0, -.03072) : 2 == e ? a.transform.localPosition = new Laya.Vector3(0, 0, -.02771) : 3 == e ? a.transform.localPosition = new Laya.Vector3(0, 0, -.02161) : 4 == e && (a.transform.localPosition = new Laya.Vector3(0, 0, -.03148)), this.winnum = 1, this.endnum = t
        }
        gameStart() {}
        gameOver() {
            this.miniGameObj.active = !1, Rt.ins.playerCtrl.changeState(rt.Die), Laya.timer.once(2e3, this, () => {
                this.playerDie()
            })
        }
        playerWin() {
            Rt.ins.wincoin += 100, Rt.ins.playersAlive = this.playersAlive, Rt.ins.resttime = 2, Laya.timer.once(1e3, this, () => {
                Laya.timer.clearAll(this), y.stopAll(), Et.removeView(Et.Game), Rt.ins.cleanScene(() => {
                    Rt.ins.initRestScene(), Et.openView(Et.Settle)
                })
            })
        }
        playerOk() {
            Laya.timer.once(2e3, this, () => {
                for (let t = this.diepeople; t < this.players.length; t++) {
                    let e = this.players[t];
                    if (0 == e.rankID) continue;
                    let i = e;
                    i.startRandrun(), i.startRandjump()
                }
                this.miniGameObj.active = !1, Rt.ins.gameView.showInput();
                let t = l.IntRange(35, 45);
                Rt.ins.gameView.counttime < t ? this.winnum = 1 : (this.winnum += t - Rt.ins.gameView.counttime, this.winnum > this.endnum && (this.winnum = this.endnum)), Rt.ins.gameView.showWinRank(this.winnum, () => {
                    this.playerWin()
                })
            })
        }
        playerDie() {
            Laya.timer.once(1e3, this, () => {
                for (let t = 0; t < this.players.length; t++) {
                    let e = this.players[t];
                    0 != e.rankID && e.cleanTimer()
                }
                Laya.timer.clearAll(this), y.stopAll(), Et.openView(Et.Fail)
            })
        }
        onUpdate() {}
        initPlayer() {
            let t = Laya.loader.getRes(d.Player).clone();
            Rt.ins.scene.addChild(t), Rt.ins.playerCtrl = t.addComponent(gt), p.ins.cameraCtrl.setTarget(t), Rt.ins.playerCtrl.rankID = 0, this.players.push(Rt.ins.playerCtrl), Rt.ins.playerCtrl.setHeadSkin(g.useHeadSkin), Rt.ins.playerCtrl.setCibanSkin(g.useCBSkin), Rt.ins.playerCtrl.changeArea(-2.735, 2.735, -3.2, 3.2)
        }
        initAIPlayer() {
            this.addNumAi(this.playersAlive)
        }
        addNumAi(t) {
            for (let e = 0; e < t; e++) {
                let t = Laya.loader.getRes(d.Player).clone(),
                    i = t.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End").getChildByName("skin0");
                i.active = !0, i.meshRenderer.material = Rt.ins.materials[l.IntRange(0, 16)], Rt.ins.scene.addChild(t);
                let a = t.addComponent(ct);
                t.transform.localPositionX = l.Range(-2.735, 2.735), t.transform.localPositionZ = l.Range(-3.2, 3.2), t.transform.localPositionZ > 0 && t.transform.localPositionZ < .3 && (t.transform.localPositionZ = -.2 - l.Range(0, 1)), this.players.push(a), a.rankID = Bt.nameid++, a.changeArea(-2.735, 2.735, -3.2, 3.2), e < this.diepeople && a.startRandDie(5e3, 58e3, () => {
                    this.playersAlive -= 1, Rt.ins.gameView.numLabel.value = "" + this.playersAlive
                })
            }
        }
        onDestroy() {
            this.colidernode.destroy(!0), this.pinctrl.destroy(), Laya.timer.clearAll(this)
        }
    }
    Bt.nameid = 1;
    class Mt extends yt {
        constructor() {
            super(...arguments), this.iscanmove = !0, this.playersnum = 50
        }
        init() {
            super.init(), this.gameplayid = 0, this.initPlayer(), 0 == Rt.ins.resttime ? (this.addAis(), this.playersnum = 50) : 1 == Rt.ins.resttime ? this.playersnum = Rt.ins.playersAlive : 1 == Rt.ins.resttime && (this.playersnum = Rt.ins.playersAlive), this.initAis(), Rt.ins.changePhase(lt.InGame), Mt.nameid = 1, u.event(c.GameStart);
            let t = () => {
                Rt.ins.gameView.waittime && (Laya.timer.clear(this, t), Rt.ins.gameView.startCountDown0())
            };
            Laya.timer.loop(1, this, t)
        }
        gameStart() {}
        gameOver() {}
        playerWin() {}
        playerDie() {}
        onUpdate() {}
        initPlayer() {
            let t = Laya.loader.getRes(d.Player).clone();
            Rt.ins.scene.addChild(t), Rt.ins.playerCtrl = t.addComponent(gt), t.transform.localPositionX = l.Range(-3.65, 3.65), t.transform.localPositionZ = l.Range(-3.9, 3.9), p.ins.cameraCtrl.setTarget(t), Rt.ins.playerCtrl.rankID = 0, Rt.ins.playerCtrl.changeArea(-3.72, 3.72, -4, 4), this.players.push(Rt.ins.playerCtrl), Rt.ins.playerCtrl.setHeadSkin(g.useHeadSkin), Rt.ins.playerCtrl.setCibanSkin(g.useCBSkin)
        }
        initAis() {
            this.addNumAi(this.playersnum)
        }
        addAis() {
            let t = l.IntRange(500, 2e3);
            Laya.timer.once(t, this, () => {
                this.addNumAi(l.IntRange(2, 4)), this.addAis()
            })
        }
        addNumAi(t) {
            for (let e = 0; e < t; e++) {
                let t = Laya.loader.getRes(d.Player).clone(),
                    e = t.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End").getChildByName("skin0");
                e.active = !0, e.meshRenderer.material = Rt.ins.materials[l.IntRange(0, 16)], Rt.ins.scene.addChild(t);
                let i = t.addComponent(ct);
                t.transform.localPositionX = l.Range(-3.65, 3.65), t.transform.localPositionZ = l.Range(-3.9, 3.9), this.players.push(i), i.rankID = Mt.nameid++, i.canmove = !0, i.startRandrun(), i.startRandjump(), i.changeArea(-3.72, 3.72, -4, 4)
            }
        }
        onDestroy() {
            Laya.timer.clearAll(this)
        }
    }
    Mt.nameid = 1;
    class Tt extends yt {
        constructor() {
            super(...arguments), this.iscanmove = !0, this.diepeople = 40, this.soundtime = 1
        }
        init() {
            super.init(), this.gameplayid = 1, this.playersAliveMax = 100, this.playersAlive = this.playersAliveMax, this.boss = Rt.ins.scene.getChildByName("map").getChildByName("boss"), this.bossAnimator = this.boss.getComponent(Laya.Animator), Tt.nameid = 1, this.initPlayer(), this.initAIPlayer(), this.soundtime = 1, this.diepeople = 40, this.winnum = 0
        }
        gameStart() {
            for (let t = 0; t < this.players.length; t++) {
                let e = this.players[t];
                0 != e.rankID && e.cleanRand()
            }
            u.event(c.GameStart), this.iscanmove = !0, this.oneTime(), Rt.ins.gameView.startCountDown(), this.aiMoveing()
        }
        gameOver() {}
        playerWin() {
            Rt.ins.playersAlive = this.playersAlive, Rt.ins.resttime = 1;
            Rt.ins.wincoin += 100, Laya.timer.once(1e3, this, () => {
                Laya.timer.clearAll(this), y.stopAll(), Et.removeView(Et.Game), Rt.ins.cleanScene(() => {
                    Rt.ins.initRestScene(), Et.openView(Et.Settle)
                })
            })
        }
        playerDie() {
            Laya.timer.once(1e3, this, () => {
                Laya.timer.clearAll(this), y.stopAll(), Et.openView(Et.Fail)
            })
        }
        onUpdate() {
            if (Rt.ins.isCurPhase(lt.InGame))
                for (let t = 0; t < this.players.length; t++) {
                    let e = this.players[t];
                    if (!e.isWin && !e.isCurState(rt.Die)) {
                        if (this.iscanmove || (e.isCurState(rt.Run) || e.isCurState(rt.Jump) || e.isCurState(rt.Fall)) && (e.changeState(rt.Die), 0 == e.rankID && this.playerDie(), this.playersAlive--, Rt.ins.gameView.numLabel.value = "" + this.playersAlive), e.owner.transform.localPositionZ > 41.762 && !e.isCurState(rt.Win))
                            if (e.changeState(rt.Win), this.winnum++, e.changeArea(-7.2, 6.8, 41.762, 45), 0 == e.rankID) Rt.ins.gameView.showWinRank(this.winnum, () => {
                                this.playerWin()
                            });
                            else {
                                let t = e;
                                t.startRandrun(), t.startRandjump()
                            } Rt.ins.gameView.counttime <= 1 && (e.isCurState(rt.Win) || e.changeState(rt.Die))
                    }
                }
        }
        initPlayer() {
            let t = Laya.loader.getRes(d.Player).clone();
            Rt.ins.scene.addChild(t), Rt.ins.playerCtrl = t.addComponent(gt), t.transform.localPositionZ = l.Range(-.5, 0), p.ins.cameraCtrl.setTarget(t), Rt.ins.playerCtrl.rankID = 0, Rt.ins.playerCtrl.speed -= .001, this.players.push(Rt.ins.playerCtrl), Rt.ins.playerCtrl.setHeadSkin(g.useHeadSkin), Rt.ins.playerCtrl.setCibanSkin(g.useCBSkin)
        }
        initAIPlayer() {
            for (let t = 0; t < 30; t++) {
                let e = Laya.loader.getRes(d.Player).clone();
                Rt.ins.scene.addChild(e);
                let i = e.addComponent(ct);
                e.transform.localPositionX -= 0 - .16 * (t + 1), e.transform.localPositionZ = l.Range(-.5, 0), i.rankID = Tt.nameid++, this.players.push(i);
                let a = e.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End").getChildByName("skin0");
                a.active = !0, a.meshRenderer.material = Rt.ins.materials[l.IntRange(0, 16)], i.startRandrun()
            }
            for (let t = 0; t < 30; t++) {
                let e = Laya.loader.getRes(d.Player).clone();
                Rt.ins.scene.addChild(e);
                let i = e.addComponent(ct);
                e.transform.localPositionX += 0 - .16 * (t + 1), e.transform.localPositionZ = l.Range(-.5, 0), i.rankID = Tt.nameid++, this.players.push(i);
                let a = e.getChildByName("renwu:Hips").getChildByName("renwu:Spine").getChildByName("renwu:Spine1").getChildByName("renwu:Spine2").getChildByName("renwu:Neck").getChildByName("renwu:Head").getChildByName("renwu:HeadTop_End").getChildByName("skin0");
                a.active = !0, a.meshRenderer.material = Rt.ins.materials[l.IntRange(0, 16)], i.startRandrun()
            }
        }
        aiMoveing() {
            let t = !1;
            for (let e = 0; e < this.players.length; e++) {
                let i = this.players[e];
                if (i.isCurState(rt.Die) || i.isWin || (t = !0), 0 == i.rankID || i.isCurState(rt.Die) || i.isWin) continue;
                let a = i,
                    n = l.IntRange(0, 2e3);
                l.IntRange(0, 100) > 97 && (n = 5e3), Laya.timer.once(n, this, () => {
                    a.ismoving = !0
                })
            }
            t || (console.log("================="), Rt.ins.gameView.cleanTimers(), this.playerWin())
        }
        aiStop() {
            for (let t = 0; t < this.players.length; t++) {
                let e = this.players[t];
                if (0 == e.rankID || e.isCurState(rt.Die) || e.isWin) continue;
                let i = e,
                    a = l.IntRange(0, 2e3);
                l.IntRange(0, 100) > 97 && (a = 5e3), Laya.timer.once(a, this, () => {
                    i.ismoving = !1, i.setMoveDir(new Laya.Vector2(0, 0))
                })
            }
        }
        oneTime() {
            this.iscanmove = !0, y.playMusic("audio/smd.mp3", 1, null, null, this.soundtime), Laya.timer.once(5e3 / this.soundtime, this, () => {
                console.log("播放完了"), this.soundtime += .04, this.soundtime > 1.6 && (this.soundtime = 1.6), this.bossAnimator.play("urn round1"), Laya.timer.once(400, this, () => {
                    if (this.iscanmove = !1, this.diepeople > 0) {
                        y.playSound("audio/gun.mp3");
                        let t = l.IntRange(3, 6);
                        this.diepeople -= t, this.playersAlive -= t, Rt.ins.gameView.numLabel.value = "" + this.playersAlive
                    }
                }), Laya.timer.once(2800, this, () => {
                    this.bossAnimator.play("turn round2"), this.iscanmove = !0, this.aiMoveing();
                    let t = l.IntRange(1300, 1800);
                    Laya.timer.once(t, this, () => {
                        this.oneTime()
                    })
                })
            }), Laya.timer.once(3e3 / this.soundtime, this, () => {
                this.aiStop()
            })
        }
        onDestroy() {
            Laya.timer.clearAll(this)
        }
    }
    Tt.nameid = 1,
        function(t) {
            t[t.None = 0] = "None", t[t.Prepare = 1] = "Prepare", t[t.InGame = 2] = "InGame", t[t.Over = 3] = "Over", t[t.Pause = 4] = "Pause"
        }(lt || (lt = {}));
    class Rt {
        constructor() {
            this._curPhase = lt.None, this.resttime = 0, this.playersAlive = 100, this.wincoin = 0
        }
        static get ins() {
            return this._ins || (this._ins = new Rt), this._ins
        }
        rest() {
            this.wincoin = 0, this.resttime = 0, this.playersAlive = 100
        }
        loadRes(t, e) {
            let i = [{
                url: d.MainScene,
                clas: Laya.Scene3D
            }, {
                url: d.RestScene,
                clas: Laya.Scene3D
            }, {
                url: d.HomeScene,
                clas: Laya.Scene3D
            }, {
                url: d.Game2Scene,
                clas: Laya.Scene3D
            }, {
                url: d.Game3Scene,
                clas: Laya.Scene3D
            }, {
                url: d.ShopScene,
                clas: Laya.Scene3D
            }];
            i.push({
                url: d.Player,
                clas: Laya.Sprite3D
            }, {
                url: d.Materials,
                clas: Laya.MeshSprite3D
            }), Laya.loader.create(i, Laya.Handler.create(this, () => {
                t && t();
                let e = Laya.loader.getRes(d.Materials);
                this.materials = e.meshRenderer.materials
            }), Laya.Handler.create(this, t => {
                e && e(t)
            }, null, !1))
        }
        initHomeScene() {
            this.scene = Laya.loader.getRes(d.HomeScene), Laya.stage.addChild(this.scene), this.scene.zOrder = -1
        }
        cleanHomeScene() {
            this.scene.destroy(!0), this.scene = null
        }
        initRestScene() {
            this.scene = Laya.loader.getRes(d.RestScene), p.ins.init(this.scene), this.gamePlay = this.scene.addComponent(Mt), this.gamePlay.init(), this.gameView = Et.openView(Et.Game)
        }
        cleanScene(t) {
            y.stopAll(), this.scene.destroy(!0), Laya.Resource.destroyUnusedResources(), this.gamePlay = null, this.changePhase(lt.None), Et.removeView(Et.Game), Rt.ins.loadRes(() => {
                t()
            }, null)
        }
        initScene() {
            this.scene = Laya.loader.getRes(d.MainScene), p.ins.init(this.scene), this.gamePlay = this.scene.addComponent(Tt), this.gamePlay.init(), this.changePhase(lt.InGame), this.gameView = Et.openView(Et.Game)
        }
        initScene2() {
            this.scene = Laya.loader.getRes(d.Game2Scene), p.ins.init(this.scene), this.gamePlay = this.scene.addComponent(Bt), this.gamePlay.init(), this.changePhase(lt.InGame), this.gameView = Et.openView(Et.Game)
        }
        initScene3() {
            this.scene = Laya.loader.getRes(d.Game3Scene), p.ins.init(this.scene), this.gamePlay = this.scene.addComponent(xt), this.gamePlay.init(), this.changePhase(lt.InGame), this.gameView = Et.openView(Et.Game)
        }
        launchGame() {
            Et.removeView(Et.Home), this.addEvents(), this.gameView = Et.openView(Et.Game), this.changePhase(lt.InGame)
        }
        addEvents() {}
        changePhase(t, e = null) {
            if (this._curPhase != t) {
                switch (t) {
                    case lt.Prepare:
                        this.onPreStartGame();
                        break;
                    case lt.InGame:
                        //window.playInterAd()
                        this.onStartGame();
                        break;
                    case lt.Over:
                        Laya.timer.once(500, this, this.onGameOver, [e])
                }
                console.log(this._curPhase + " 切换到 " + t), this._curPhase = t
            }
        }
        isCurPhase(t) {
            return this._curPhase == t
        }
        isGamming() {
            return this._curPhase == lt.InGame
        }
        onPreStartGame() {
           
            this.changePhase(lt.InGame)
        }
        onStartGame() {}
        onGameOver() {
            1 == this.gamePlay.gameplayid ? this.playerCtrl.isWin || this.gamePlay.playerDie() : 2 == this.gamePlay.gameplayid && (this.playerCtrl.isWin ? this.gamePlay.playerWin() : this.gamePlay.gameOver())
        }
        resetScene() {}
        get isRunning() {
            return this._curPhase == lt.InGame
        }
    }
    Rt._ins = null;
    class Dt extends _.SettleUI {
        constructor() {
            super(...arguments), this.coinCount = 0
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.closeBtn.on(Laya.Event.CLICK, this, this.cancel), this.cancelBtn.on(Laya.Event.CLICK, this, this.cancel), this.doubleCoinBtn.on(Laya.Event.CLICK, this, this.getDoubleCoin), Laya.timer.pause(), this.init(), Et.openView(Et.NativeInner)
        }
        init() {
            this.coinCount = Rt.ins.wincoin, this.rewardCoin.value = Rt.ins.wincoin + ""
        }
        cancel() {
            y.playSound("audio/button.mp3"), g.coin += this.coinCount, Et.removeView(Et.Settle), Laya.timer.resume()
        }
        getDoubleCoin() {
            y.playSound("audio/button.mp3"), st.Ad().showVideo(t => {
                t && (g.coin += 2 * this.coinCount, Et.removeView(Et.Settle), Laya.timer.resume())
            })
        }
        onDisable() {}
    }
    class Gt {
        constructor() {}
        static init() {
            var i = Laya.ClassUtils.regClass;
            i("component/ScaleButton.ts", t), i("hs_ui/component/ButtonScale.ts", e), i("view/SettleView.ts", Dt)
        }
    }
    Gt.width = 720, Gt.height = 1280, Gt.scaleMode = "fixedwidth", Gt.screenMode = "none", Gt.alignV = "middle", Gt.alignH = "center", Gt.startScene = "hs_ad/ui_inner_interstitial.scene", Gt.sceneRoot = "", Gt.debug = !1, Gt.stat = !1, Gt.physicsDebug = !1, Gt.exportSceneToJson = !0, Gt.init();
    new class {
        constructor() {
            console.log(Laya.version)
            window.Laya3D ? Laya3D.init(Gt.width, Gt.height, null, Laya.Handler.create(this, this.initMain)) : (Laya.init(Gt.width, Gt.height, Laya.WebGL), this.initMain())
        }
        initMain() {
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = Gt.scaleMode, Laya.stage.screenMode = Gt.screenMode, Laya.stage.alignV = Gt.alignV, Laya.stage.alignH = Gt.alignH, Laya.URL.exportSceneToJson = Gt.exportSceneToJson, (Gt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), Gt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Gt.stat && Laya.Stat.show(), Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            Et.openView(Et.Loading)
        }
    }
}();