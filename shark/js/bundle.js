!function () {
		"use strict";
		class i {
			static init() {
				Laya.ClassUtils.regClass
			}
		}
		i.width = 750,
			i.height = 1334,
			i.scaleMode = "fixedwidth",
			i.screenMode = "none",
			i.alignV = "middle",
			i.alignH = "center",
			i.startScene = "DialogSettle.scene",
			i.sceneRoot = "",
			i.debug = !1,
			i.stat = !1,
			i.physicsDebug = !1,
			i.exportSceneToJson = !0,
			i.init();
		class e extends Laya.Scene {
			constructor(i) {
				if (super(), new.target === e) throw new Error("SceneBase class can not instantiate!");
				this.createView(i),
					this.width = Laya.stage.width,
					this.height = Laya.stage.height,
					window.panelAlapha || (window.panelAlapha = new Laya.Panel, Laya.stage.addChild(window.panelAlapha), window.panelAlapha.visible = !1, window.panelAlapha.bgColor = "#000000", window.panelAlapha.width = this.width, window.panelAlapha.height = this.height, window.panelAlapha.zOrder = 100),
					this.isShowBarnnerAd = !1,
					this.isCloseBrnnerAd = !0
			}
			onOpened() {
				window.panelAlapha.visible = !0,
					window.panelAlapha.alpha = 1;
				let i = new Laya.TimeLine;
				i.to(window.panelAlapha, {
					alpha: 0
				},
					200),
					i.on(Laya.Event.COMPLETE, this,
						function () {
							window.panelAlapha.visible = !1
						}),
					i.play(0, !1),
					this.isShowBarnnerAd && window.bannerEvent && window.bannerEvent.event("banner", ["show"])
			}
			openScene(i) {
				window.panelAlapha.visible = !0,
					window.panelAlapha.alpha = 0;
				let e = new Laya.TimeLine;
				e.to(window.panelAlapha, {
					alpha: 1
				},
					200),
					e.on(Laya.Event.COMPLETE, this,
						function () {
							window.sm.getScene(i, !0, !0)
						}),
					e.play(0, !1)
			}
			onClosed() {
				this.isCloseBrnnerAd && window.bannerEvent && window.bannerEvent.event("banner", ["hide"])
			}
		}
		class t {
			static getPrefs(i) {
				i = window.saveName + i;
				let e = Laya.LocalStorage.getItem(i);
				if (e && e < 10 && (e = null), e) try {
					e = JSON.parse(e)
				} catch (t) {
					try {
						e = Laya.LocalStorage.getJSON(i)
					} catch (i) {
						e = null
					}
				} else e = null;
				return e
			}
			static setPrefs(i, e) {
				i = window.saveName + i,
					Laya.LocalStorage.setItem(i, JSON.stringify(e))
			}
			static clearPrefs() {
				Laya.LocalStorage.clear()
			}
			static getFreeGoldNum() {
				let i = 0,
					e = new Date,
					t = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(),
					o = Laya.LocalStorage.getJSON(window.saveName + "FreeGold");
				return i = o && o.time == t ? o.getNum : 0,
					window.getFreeMoneyNum = i,
					i
			}
			static saveFreeGoldNum() {
				let i = new Date,
					e = {
						time: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
						getNum: window.getFreeMoneyNum
					};
				Laya.LocalStorage.setJSON(window.saveName + "FreeGold", e)
			}
			static getShareVideoNum() {
				let i = 0,
					e = new Date,
					t = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(),
					o = Laya.LocalStorage.getJSON(window.saveName + "ShareVideo");
				return i = o && o.time == t ? o.getNum : 0,
					window.getShareVideoNum = i,
					i
			}
			static saveShareVideoNum() {
				let i = new Date,
					e = {
						time: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
						getNum: window.getShareVideoNum
					};
				Laya.LocalStorage.setJSON(window.saveName + "ShareVideo", e)
			}
			static getRMSMusicData() {
				let i = Laya.LocalStorage.getItem(window.saveName + "Music");
				t.getMusicRes(i, !1)
			}
			static getMusicRes(i, e) {
				if (i) {
					try {
						let e = parseInt(i);
						if (e < 0 || e > 999) return
					} catch (i) {
						return
					}
					3 == i.length && (window.musicMenuID = "" + i[0], window.musicGameID = "" + i[1], window.musicReviveID = "" + i[2], e && Laya.LocalStorage.setItem(window.saveName + "Music", i))
				}
			}
			static getRmsGameTime() {
				window.firstGameTime = 0,
					window.signInDay = [];
				let i = Laya.LocalStorage.getItem(window.saveName + "FirstGameTime");
				if (!i || i.length < 10) {
					let i = new Date;
					window.firstGameTime = i.getTime(),
						window.signInDay = ["0", "0", "0", "0", "0", "0", "0"],
						t.saveRmsGameTime()
				} else {
					let e = i.split("|");
					window.firstGameTime = parseInt("" + e[7]);
					for (let i = 0; i < 7; i++) window.signInDay[i] = "" + e[i]
				}
				t.isSignInFinish()
			}
			static saveRmsGameTime() {
				let i = "";
				for (let e = 0; e < 7; e++) i += window.signInDay[e] + "|";
				i += window.firstGameTime,
					Laya.LocalStorage.setItem(window.saveName + "FirstGameTime", i)
			}
			static isSignInFinish() {
				if (window.firstGameTime) {
					let i = new Date,
						e = Math.ceil((window.firstGameTime - 60 * i.getTimezoneOffset() * 1e3) / 864e5),
						t = Math.ceil((i.getTime() - 60 * i.getTimezoneOffset() * 1e3) / 864e5),
						o = t - e + 1,
						s = (t - e) % 7,
						n = s >= 0 && window.signInDay[s] == "" + o;
					return window.isShowSignIn = !n,
						n
				}
				return window.isShowSignIn = !0,
					!1
			}
			static getRmsOffLineTime() {
				window.offLineTime = 0,
					window.isShowOffLineGold = !1;
				let i = Laya.LocalStorage.getItem(window.saveName + "OffLineTime"),
					e = (new Date).getTime();
				if (i && i.length > 5) try {
					window.offLineTime = parseInt(i)
				} catch (i) {
					window.offLineTime = 0
				}
				if (0 == window.offLineTime) window.offLineTime = e;
				else {
					let i = (e - window.offLineTime) / window.offLineRewardSpace;
					i >= 5 && (window.isShowOffLineGold = !0, window.offLineReWardGold = Math.floor(i * window.offLineRewardNum), window.offLineReWardGold > 60 && (window.offLineReWardGold = 60))
				}
				return t.saveRmsOffLineTime(),
					window.offLineTime
			}
			static saveRmsOffLineTime() {
				let i = "" + (new Date).getTime();
				Laya.LocalStorage.setItem(window.saveName + "OffLineTime", i)
			}
			static checknum(i) {
				var e = /^[A-Za-z0-9]*$/;
				if (e.test(i)) return i; {
					let t = i.length;
					for (let o = t - 1; o >= 0; o--) if (!e.test(i.charAt(o) + "")) {
						let e = i.substring(0, o) + "_";
						i = o != t - 1 ? e + i.substring(o + 1, t) : e
					}
					return i
				}
			}
			static utf16toEntities(i) {
				return i = i.replace(/[\ud800-\udbff][\udc00-\udfff]/g,
					function (i) {
						return 2 === i.length ? (1024 * (i.charCodeAt(0) - 55296) + 65536 + i.charCodeAt(1) - 56320, "") : i
					})
			}
			static setOppoBtnPos(i, e) {
				if (!window.isBtnRand && window.btnDelayTime && 3 == i.length && window.oppoAdData) return i[0].x = e[0].x,
					i[0].y = e[0].y,
					i[1].x = e[1].x,
					i[1].y = e[1].y,
					i[2].x = 0,
					i[2].y = e[3].y + Math.abs(e[2].y - e[0].y),
					i[0].visible = i[1].visible = !1,
					i[0].alpha = i[1].alpha = 0,
					void Laya.timer.once(window.btnDelayTime, this,
						function () {
							for (let e = 1; e >= 0; e--) {
								i[e].visible = !0;
								let t = new Laya.TimeLine;
								t.to(i[e], {
									alpha: 1
								},
									500),
									t.play(0, !1)
							}
						});
				let t = Math.random() < .5;
				window.btnRandNum >= 2 ? t = !1 : window.btnRandNum <= -2 && (t = !0),
					window.btnRandNum += t ? 1 : -1,
					2 == i.length ? window.oppoAdData ? window.isBtnRand && t ? (i[0].x = e[0].x, i[1].x = e[3].x) : (i[0].x = e[2].x, i[1].x = e[4].x) : i[0].x = e[1].x : 3 == i.length && (window.oppoAdData ? window.isBtnRand && t ? (i[0].x = e[0].x, i[0].y = e[0].y, i[1].x = e[2].x, i[1].y = e[2].y, i[2].x = e[4].x, i[2].y = e[4].y) : (i[0].x = e[1].x, i[0].y = e[1].y, i[1].x = e[2].x, i[1].y = e[2].y, i[2].x = e[3].x, i[2].y = e[3].y) : window.isBtnRand && t ? (i[0].x = e[0].x, i[0].y = e[0].y, i[1].x = e[1].x, i[1].y = e[1].y) : (i[0].x = e[1].x, i[0].y = e[1].y, i[1].x = e[0].x, i[1].y = e[0].y))
			}
			static onCloseOppoAd(i, e) {
				2 == i.length ? i[0].x = e[1].x : 3 == i.length && (i[0].x == e[0].x ? (i[1].x = e[1].x, i[1].y = e[1].y) : (i[1].x = e[0].x, i[1].y = e[0].y))
			}
			static distance(i, e, t, o) {
				let s = t - i,
					n = o - e;
				return Math.sqrt(s * s + n * n)
			}
			static getAngle(i, e, t, o) {
				if (i == t && e == o) return 0;
				let s = t - i,
					n = o - e,
					a = 180 * Math.atan(Math.abs(n / s)) / Math.PI;
				return a = s > 0 ? n > 0 ? a : 360 - a : n > 0 ? 180 - a : 180 + a
			}
			static pointInRect(i, e, t, o, s, n) {
				return !(i < t || e < o || i > t + s || e > o + n)
			}
			static setAction(i, e, t = !1, o = null, s = null, n = 1.05) {
				let a = new Laya.TimeLine;
				if (0 == i) a.to(e, {
					scaleX: n,
					scaleY: n
				},
					200),
					a.to(e, {
						scaleX: 1,
						scaleY: 1
					},
						200);
				else if (1 == i) a.to(e, {
					rotation: 10
				},
					100, null, 1e3),
					a.to(e, {
						rotation: -10
					},
						200),
					a.to(e, {
						rotation: 10
					},
						200),
					a.to(e, {
						rotation: 0
					},
						100);
				else if (2 == i) {
					let i = e.y;
					a.to(e, {
						y: i - 3
					},
						100),
						a.to(e, {
							y: i + 3
						},
							200),
						a.to(e, {
							y: i
						},
							100)
				} else 3 == i && a.to(e, {
					rotation: 360
				},
					2e3);
				return null != s && null != o && "function" == typeof o && a.on(Laya.Event.COMPLETE, s,
					function () {
						o()
					}),
					a.play(0, t),
					a
			}
			static setActionScale(i, e = 1.05, t = 200, o = !1, s = null, n = null) {
				let a = new Laya.TimeLine;
				return i.scaleX = i.scaleY = 1,
					a.to(i, {
						scaleX: e,
						scaleY: e
					},
						t),
					a.to(i, {
						scaleX: 1,
						scaleY: 1
					},
						t),
					null != n && null != s && "function" == typeof s && a.on(Laya.Event.COMPLETE, n,
						function () {
							s()
						}),
					a.play(0, o),
					a
			}
			static setDialogPopup(i, e = null, t = .5, o = null, s = 2e3) {
				null == e ? window.isCanControl = !0 : (window.isCanControl = !1, e.visible = !1, e.alpha = 0),
					i.scaleX = i.scaleY = t;
				let n = new Laya.TimeLine;
				n.to(i, {
					scaleX: 1.06,
					scaleY: 1.06
				},
					100),
					n.to(i, {
						scaleX: .96,
						scaleY: .96
					},
						100),
					n.to(i, {
						scaleX: 1.06,
						scaleY: 1.04
					},
						100),
					n.to(i, {
						scaleX: .98,
						scaleY: .98
					},
						100),
					n.to(i, {
						scaleX: 1,
						scaleY: 1
					},
						100),
					null != o ? n.on(Laya.Event.COMPLETE, this,
						function () {
							"function" == typeof o && o(!1)
						}) : null != e && n.on(Laya.Event.COMPLETE, this,
							function () {
								window.isCanControl = !0,
									Laya.timer.once(s, this,
										function () {
											e.visible = !0;
											let i = new Laya.TimeLine;
											i.to(e, {
												alpha: 1
											},
												500),
												i.play(0, !1)
										})
							}),
					n.play(0, !1)
			}
			static setDialogClose(i, e, t = 0, o = null) {
				let s = new Laya.TimeLine;
				s.to(i, {
					scaleX: .5,
					scaleY: .5
				},
					200, null, t),
					s.on(Laya.Event.COMPLETE, this,
						function () {
							window.isCanControl = !0,
								e.close(),
								"function" == typeof o && o(!1)
						}),
					s.play(0, !1)
			}
			static setBtnDelayShow(i, e = 0) {
				if (e <= 0) for (let e = i.length - 1; e >= 0; e--) i[e].visible = !0,
					i[e].alpha = 1;
				else {
					for (let e = i.length - 1; e >= 0; e--) i[e].visible = !1,
						i[e].alpha = 0;
					Laya.timer.once(e, this,
						function () {
							for (let e = i.length - 1; e >= 0; e--) {
								i[e].visible = !0;
								let t = new Laya.TimeLine;
								t.to(i[e], {
									alpha: 1
								},
									500),
									t.play(0, !1)
							}
						})
				}
			}
			static setStaticBtnEvent(i, e, t, o = null) {
				i.on(Laya.Event.CLICK, e, t, o),
					i.on(Laya.Event.MOUSE_DOWN, e,
						function () {
							window.playSound("button")
						})
			}
			static setButtonEvent(i, e, t, o = 1.05, s = 1.05, n = null) {
				i.on(Laya.Event.CLICK, e, t, n),
					i.on(Laya.Event.MOUSE_DOWN, e, onButtonDown, [i, o, s]),
					i.on(Laya.Event.MOUSE_UP, e, onButtonUp, [i]),
					i.on(Laya.Event.MOUSE_OUT, e, onButtonUp, [i])
			}
			static offButtonEvent(i, e, t) {
				i.off(Laya.Event.CLICK, e, t),
					i.off(Laya.Event.MOUSE_DOWN, e, onButtonDown),
					i.off(Laya.Event.MOUSE_UP, e, onButtonUp),
					i.off(Laya.Event.MOUSE_OUT, e, onButtonUp)
			}
			static randomInt(i, e) {
				return Math.floor(Math.random() * (e - i)) + i
			}
			static randomFloat(i, e) {
				return Math.random() * (e - i) + i
			}
			static randomVector3Float(i, e) {
				let t = randomFloat(i, e),
					o = randomFloat(i, e),
					s = randomFloat(i, e);
				return new Laya.Vector3(t, o, s)
			}
			static randomVector3Int(i, e) {
				let t = randomInt(i, upper),
					o = randomInt(i, upper),
					s = randomInt(i, upper);
				return new Laya.Vector3(t, o, s)
			}
			static getShowNum(i) {
				let e = "" + i;
				if (i >= 1e4) if (i < 1e8) {
					let t = "" + i / 1e4;
					e = t.charAt(3) + "" == "." ? t.substr(0, 3) + "w" : t.substr(0, 4) + "w"
				} else {
					let t = "" + i / 1e8;
					e = t.charAt(3) + "" == "." ? t.substr(0, 3) + "e" : t.substr(0, 4) + "e"
				}
				return e
			}
		}
		function onButtonDown(i, e, t) {
			window.playSound("button"),
				i.scaleX = i.scaleX * e,
				i.scaleY = i.scaleY * t
		}
		function onButtonUp(i) {
			i.scaleX = i.scaleX < 0 ? -1 : 1,
				i.scaleY = i.scaleY < 0 ? -1 : 1
		}
		let o;
		class s extends Laya.Sprite {
			constructor() {
				super(),
					o = this,
					"pc" != window.plat ? (this.plat = "tt" == window.plat ? "tt" : "qg", this.createCamera(), this.update()) : this.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#808080")
			}
			createCamera() {
				let i;
				window[this.plat].setKeepScreenOn({
					keepScreenOn: !0
				}),
					"tt" == this.plat ? (this.videoW = window.video.videoWidth, this.videoH = window.video.videoHeight, (i = new Laya.Texture2D(this.videoW, this.videoH, 1, !1, !1)).loadImageSource(window.video, !0), this.texture = new Laya.Texture(i), window.camera.setBeautifyParam(.4, .13, .13, .45)) : (this.videoW = window.video.width, this.videoH = window.video.height, i = new Laya.Texture2D(this.videoW, this.videoH, Laya.TextureFormat.R8G8B8A8, !1, !1), this.texture = new Laya.Texture(i)),
					this.scaleNum = Laya.stage.width / this.videoW,
					this.videoH * this.scaleNum < Laya.stage.height && (this.scaleNum = Laya.stage.height / this.videoH),
					o.scaleX = o.scaleY = this.scaleNum,
					this.x = this.addx = -(this.videoW * this.scaleNum - Laya.stage.width) / 2,
					this.y = this.addy = -(this.videoH * this.scaleNum - Laya.stage.height) / 2,
					this.updateCamera(),
					window.detector || (window.detector = window[this.plat].createFaceDetector(), window.detector.onMouthAh(i => {
						window.sceGame.onMouthOpen()
					}))
			}
			reSetCameraSize(i) {
				window.camera.resetSize(i).then(i => {
					0 == i.code && this.initSize()
				}).
					catch(i => { })
			}
			initSize() {
				let i;
				this.videoW = window.video.width,
					this.videoH = window.video.height,
					i = new Laya.Texture2D(this.videoW, this.videoH, Laya.TextureFormat.R8G8B8A8, !1, !1),
					this.texture = new Laya.Texture(i),
					this.scaleNum = Laya.stage.width / this.videoW,
					this.videoH * this.scaleNum < Laya.stage.height && (this.scaleNum = Laya.stage.height / this.videoH),
					o.scaleX = o.scaleY = this.scaleNum,
					this.x = this.addx = -(this.videoW * this.scaleNum - Laya.stage.width) / 2,
					this.y = this.addy = -(this.videoH * this.scaleNum - Laya.stage.height) / 2
			}
			update() {
				Laya.timer.loop(1e3 / 30, this, () => {
					this.updateCamera(),
						window.isOppoTest && window.sceGame.saveCameraImg(),
						this.runDetector()
				})
			}
			updateCamera() {
				window.video && ("tt" == window.plat ? this.texture.bitmap.loadImageSource(window.video, !0) : "op" == window.plat && this.texture.bitmap.setPixels(window.video.data))
			}
			runDetector() {
				window.detector && window.video && ("tt" == window.plat ? window.detector.detectFaces(window.video).then(i => {
					this.runGame(i)
				}).
					catch(i => {
						console.log(i)
					}) : "op" == window.plat && window.detector.detectFaces({
						data: window.video.data,
						width: this.videoW,
						height: this.videoH
					}).then(i => {
						this.runGame(i)
					}))
			}
			runGame(i) {
				let e = -1e4,
					o = 0,
					s = 0,
					n = 0,
					a = -1e3,
					w = -1e3;
				"tt" == window.plat ? i && i.length > 0 && (e = i[0].landmarks[0].locations[0].x, o = i[0].landmarks[0].locations[0].y, s = i[0].landmarks[0].locations[32].x, n = i[0].landmarks[0].locations[32].y, a = i[0].landmarks[5].locations[6].x + this.addx, w = i[0].landmarks[5].locations[6].y + this.addy) : "op" == window.plat && i && i.data && i.data[0] && i.data[0].point_x && (e = i.data[0].point_x[0], o = i.data[0].point_y[0], 137 == i.data[0].point_x.length ? (s = i.data[0].point_x[32], n = i.data[0].point_y[32], a = i.data[0].point_x[46], w = i.data[0].point_y[46]) : (s = i.data[0].point_x[12], n = i.data[0].point_y[12], a = i.data[0].point_x[29], w = i.data[0].point_y[29]));
				let d = 1e4 == e ? 445 : t.distance(e, o, s, n);
				window.sceGame.noseGuide.scaleX = d * this.scaleNum / 445,
					window.sceGame.noseGuide.scaleY = window.sceGame.noseGuide.scaleX,
					window.sceGame.onMoveLead(a * this.scaleNum + this.addx, w * this.scaleNum + this.addy)
			}
			removeFromGame() {
				Laya.timer.clearAll(this),
					window.camera && window.camera.destroy(),
					this.removeSelf(),
					this.destroy()
			}
		}
		class n extends Laya.Sprite {
			constructor(i, e) {
				super(),
					e.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
					e.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
					e.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
					e.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
					window.fishPoolBase = i,
					this.width = Laya.stage.width,
					this.height = Laya.stage.height
			}
			onMouseDown(i) {
				if (i && i.touches && 1 == i.touches.length && !this.isDown && !this.fishTouch && !window.isShowPoolHelp) {
					this.fishTouch = null,
						this.fishTarget = null,
						this.isDown = !0;
					for (let i = 0; i < window.fishsPool.length; i++) {
						let e = window.fishData[window.fishsPool[i].shapeId],
							t = window.fishsPool[i].x + (window.fishsPool[i].isLeft ? e.rx : -e.rw - e.rx),
							o = t + e.rw,
							s = window.fishsPool[i].y + e.ry,
							n = s + e.rh;
						if (Laya.stage.mouseX > t && Laya.stage.mouseX < o && Laya.stage.mouseY > s && Laya.stage.mouseY < n) return this.fishTouch = window.fishsPool[i],
							this.fishTouch.poolState = 1,
							this.fishTouch.zOrder = 1e4,
							window.gameState == window.GAME_STATE_MAIN && (window.sceMain.hideMainBtn(), window.sceMain.showFishPoolUi()),
							this.hideBtn(),
							void (this.fishTouch.shapeId == window.fishMaxLv && window.setTipStrAnimation("  『 Ultimate form 』  ", "#ffff00", "#ff0000", 0, this.fishTouch.x, this.fishTouch.y))
					}
				}
			}
			onMouseMove(i) {
				this.isDown && this.fishTouch && !window.isShowPoolHelp && (this.fishTouch.x = Laya.stage.mouseX, this.fishTouch.y = Laya.stage.mouseY)
			}
			onMouseUp(i) {
				if (this.isDown && !window.isShowPoolHelp) {
					if (this.isDown = !1, this.fishTouch && this.fishTarget && (this.fishTouch.shapeId >= window.fishMaxLv ? this.fishTarget = null : this.setFishSynthesisAction()), this.fishTouch && (this.fishTouch.poolState = 0, this.fishTouch.zOrder = 0, t.pointInRect(this.fishTouch.x, this.fishTouch.y, window.recoveryx, window.recoveryy, window.recoveryw, window.recoveryh))) {
						this.deleteFish(this.fishTouch);
						let i = this.fishTouch,
							e = new Laya.TimeLine,
							t = window.recoveryx + window.recoveryw / 2,
							o = window.recoveryy + window.recoveryh / 2;
						e.to(i, {
							rotation: 360,
							scaleX: 0,
							scaleY: 0,
							x: t,
							y: o
						},
							500),
							this.isRecoveryAction = !0,
							e.on(Laya.Event.COMPLETE, this,
								function () {
									i.recoveryPool();
									let e = Math.ceil(window.user.getFishPrice(i.shapeId) / 2);
									window.user.moneyChange(e),
										window.setTipStrAnimation(" Gold coin +" + e, "#ff0000", "#ffffff", 0, t, o - 24),
										this.isRecoveryAction = !1,
										this.showBtn()
								}),
							e.play(0, !1)
					}
					this.fishTarget && (this.fishTarget.poolState = 0, this.fishTarget.zOrder = 0),
						this.fishTouch = this.fishTarget = null,
						this.isRecoveryAction || this.showBtn()
				}
			}
			showBtn() {
				window.sceMain.fcBuyLv.value = window.buyFishLv;
				let i = t.getShowNum(window.user.getFishPrice(window.buyFishLv));
				window.sceMain.fcFishPrice.value = i,
					window.sceMain.fcFishPrice.scaleX = i.length >= 4 ? .6 : .8,
					window.sceMain.baseRecovery.visible = !1,
					window.sceMain.btnBuyFish.visible = !0;
				for (let i = 0; i < window.sceMain.btns.length; i++) window.sceMain.btns[i].mouseEnabled = !0
			}
			hideBtn() {
				window.sceMain.fcBuyLv.value = this.fishTouch.shapeId;
				let i = t.getShowNum(Math.ceil(window.user.getFishPrice(this.fishTouch.shapeId) / 2));
				window.sceMain.fcFishPrice.value = i,
					window.sceMain.fcFishPrice.scaleX = i.length >= 4 ? .6 : .8,
					window.sceMain.baseRecovery.visible = !0,
					window.sceMain.btnBuyFish.visible = !1;
				for (let i = 0; i < window.sceMain.btns.length; i++) window.sceMain.btns[i].mouseEnabled = !1
			}
			checkOverlapFish() {
				if (this.fishTouch && this.fishTouch.shapeId >= window.fishMaxLv) this.fishTarget = null;
				else if (this.fishTouch && (this.fishTarget && !this.isFishOverlap(this.fishTarget, this.fishTouch) && (this.fishTarget = null), !this.fishTarget)) for (let i = 0; i < window.fishsPool.length; i++) window.fishsPool[i] != this.fishTouch && (window.fishsPool[i].shapeId == this.fishTouch.shapeId && !this.fishTarget && this.isFishOverlap(window.fishsPool[i], this.fishTouch) ? (window.fishsPool[i].poolState = 1, window.fishsPool[i].zOrder = 9999, this.fishTarget = window.fishsPool[i]) : (window.fishsPool[i].poolState = 0, window.fishsPool[i].zOrder = 0))
			}
			isFishOverlap(i, e) {
				let t = window.fishData[i.shapeId],
					o = i.x + (i.isLeft ? t.rx : -t.rw - t.rx),
					s = o + t.rw,
					n = i.y + t.ry,
					a = n + t.rh;
				t = window.fishData[e.shapeId];
				let w = e.x + (e.isLeft ? t.rx : -t.rw - t.rx),
					d = w + t.rw,
					h = e.y + t.ry,
					r = h + t.rh;
				return !(o > d || s < w || n > r || a < h)
			}
			init() {
				this.isDown = !1,
					this.fishTouch = this.fishTarget = null;
				for (let i = 0; i < window.fishs.length; i++) for (let e = 1; e < window.fishs[i].length; e++) window.fishs[i][e].visible = !1,
					window.fishs[i][e].isInPool = !1,
					window.fishs[i][e].rotation = window.fishs[i][e].baseAction.rotation = 0;
				window.fishsPool = [];
				for (let i = 0; i < window.poolFishNum.length; i++) for (let e = 0; e < window.poolFishNum[i]; e++) this.addFish(i, 0, !1)
			}
			getFish(i) {
				for (let e = 1; e < window.fishs[i].length; e++) if (!window.fishs[i][e].isInPool) return window.fishs[i][e];
				return window.createFish(i)
			}
			setFishSynthesisAction() {
				let i = this.fishTouch,
					e = this.fishTarget;
				this.isShowNewFish = window.user.fishMaxLvChange(i.shapeId + 1),
					this.fishTouch = null,
					this.fishTarget = null,
					this.deleteFish(i, !1, !1),
					this.deleteFish(e, !1, !1);
				let t = (i.x + e.x) / 2,
					o = (i.y + e.y) / 2,
					s = new Laya.TimeLine;
				s.to(i, {
					x: e.x,
					y: e.y
				},
					200),
					s.to(i, {
						x: t,
						y: o
					},
						200, Laya.Ease.expoIn),
					s.play(0, !1);
				let n = new Laya.TimeLine;
				n.to(e, {
					x: i.x,
					y: i.y
				},
					200),
					n.to(e, {
						x: t,
						y: o
					},
						200, Laya.Ease.expoIn),
					n.on(Laya.Event.COMPLETE, this,
						function () {
							this.createBomb(i, e)
						}),
					n.play(0, !1)
			}
			addFish(i, e = 0, t = !0) {
				let o = this.getFish(i);
				return o.initPoolValue(e),
					window.fishsPool.push(o),
					0 != e && window.poolFishNum[i]++,
					window.user.updateFishNum(t),
					o
			}
			deleteFish(i, e = !0, t = !0) {
				for (let o = 0; o < window.fishsPool.length; o++) if (window.fishsPool[o] == i) return window.fishsPool.splice(o, 1),
					t && window.user.updateFishNum(e),
					window.poolFishNum[i.shapeId]--,
					void (window.poolFishNum[i.shapeId] < 0 && (window.poolFishNum[i.shapeId] = 0))
			}
			synthetiseFish(i, e) {
				let t = this.addFish(i.shapeId + 1, 2, !1);
				t.x = (i.x + e.x) / 2,
					t.y = (i.y + e.y) / 2,
					t.setPoolFishDir(i.isLeft),
					i.recoveryPool(),
					e.recoveryPool(),
					window.user.updateFishNum(),
					this.isShowNewFish && window.sm.getScene("newFish", !0)
			}
			run() {
				if (window.gameState == window.GAME_STATE_MAIN || window.gameState == window.GAME_STATE_POOL) {
					for (let i = 0; i < window.fishsPool.length; i++) window.fishsPool[i].runPool();
					this.checkOverlapFish()
				}
			}
			onBtnBuyFish() {
				if (window.isShowPoolHelp) return;
				let i = window.user.getFishPrice(window.buyFishLv),
					e = window.sceMain.baseBottom.x + window.sceMain.btnBuyFish.x,
					t = window.sceMain.baseBottom.y + window.sceMain.btnBuyFish.y - 70;
				window.user.data.money < i ? (window.sceMain.hideFishPoolUi(), window.gameState = window.GAME_STATE_POOL, window.playSound("error"), Laya.timer.once(200, this,
					function () {
						window.sm.getScene("freeGold", !0)
					})) : window.fishsPool.length >= window.user.getPoolFishNum(window.user.data.poolLv) ? (window.setTipStrAnimation(" 【Capacity is full】 ", "#ff0000", "#ffffff", 0, e, t), window.sceMain.setHand(window.sceMain.btnLvAdd, 60, 80)) : (window.user.moneyChange(- i, !1), this.addFish(window.buyFishLv, 1, !0))
			}
			createBomb(i, e, t = 100, o = 100) {
				Laya.timer.once(200, this,
					function () {
						this.synthetiseFish(i, e),
							window.playSound("salute")
					});
				let s = new Laya.Sprite;
				s.zOrder = 10001,
					window.fishPoolBase.addChild(s),
					s.pos((i.x + e.x) / 2, (i.y + e.y) / 2),
					Laya.timer.once(3e3, this,
						function () {
							s.removeSelf(),
								s.destroy()
						});
				for (let i = 0; i < t; i++) {
					let i = new Laya.Sprite;
					i.loadImage("res/bomb.png"),
						i.pivot(28, 28),
						i.scale(0, 0),
						s.addChild(i);
					let e = Math.random() * o * (Math.random() > .5 ? 1.5 : -1.5),
						t = Math.random() * o * (Math.random() > .5 ? 1.5 : -1.5),
						n = 200 + 80 * Math.random(),
						a = 1.5 + .2 * Math.random(),
						w = new Laya.TimeLine;
					w.to(i, {
						x: e,
						y: t,
						scaleX: a,
						scaleY: a
					},
						n, null, 50 * Math.random()),
						w.to(i, {
							scaleX: 0,
							scaleY: 0
						},
							n),
						w.play(0, !1)
				}
			}
		}
		class a extends Laya.Dialog {
			constructor(i) {
				if (super(), new.target === a) throw new Error("DialogBase class can not instantiate!");
				this.createView(i),
					this.width = Laya.stage.width,
					this.height = Laya.stage.height,
					this.panelBg && (this.panelBg.width = this.width, this.panelBg.height = this.height),
					this.center && (this.center.x = this.width / 2, this.center.y = this.height / 2),
					this.panelAlapha = new Laya.Panel,
					this.addChild(this.panelAlapha),
					this.panelAlapha.visible = !1,
					this.panelAlapha.bgColor = "#000000",
					this.panelAlapha.width = this.width,
					this.panelAlapha.height = this.height,
					this.popupEffect = null,
					this.closeEffect = null,
					this.isShowBarnnerAd = !1,
					this.isCloseBrnnerAd = !0,
					this.isShowMoreGameAd = !1,
					!window.isOpenAds && this.iconBtnVideoAd && (this.iconBtnVideoAd.skin = "res/iconVideo.png", this.iconBtnVideoAd.texture = "res/iconVideo.png")
			}
			onOpened() {
				this.isShowBarnnerAd && window.bannerEvent && window.bannerEvent.event("banner", ["show"]),
					this.isShowMoreGameAd && window.moreGameBannerEvent && window.moreGameBannerEvent.event("moreGameBanner", ["show"]),
					window.isRanderCamare = !1,
					window.isCanControl = !0
			}
			setAdHide() {
				this.isCloseBrnnerAd && window.bannerEvent && window.bannerEvent.event("banner", ["hide"]),
					this.isShowMoreGameAd && window.moreGameBannerEvent && window.moreGameBannerEvent.event("moreGameBanner", ["hide"])
			}
			setShowAction(i = null, e = 200) {
				if (this.center) {
					this.center.scaleX = this.center.scaleY = 0;
					let i = new Laya.TimeLine;
					i.to(this.center, {
						scaleX: 1,
						scaleY: 1
					},
						e, Laya.Ease.backOut),
						i.play(0, !1)
				}
				if (this.panelBg) {
					this.panelBg.alpha = 0;
					let i = new Laya.TimeLine;
					i.to(this.panelBg, {
						alpha: .6
					},
						e, Laya.Ease.expoIn),
						i.play(0, !1)
				}
				window.isCanControl = !1,
					Laya.timer.once(e, this,
						function () {
							"function" == typeof i && i(),
								window.isCanControl = !0
						})
			}
			setHideAction(i = null, e = 200) {
				if (this.center) {
					let i = new Laya.TimeLine;
					i.to(this.center, {
						scaleX: 0,
						scaleY: 0
					},
						e, Laya.Ease.backIn),
						i.play(0, !1)
				}
				if (this.panelBg) {
					let i = new Laya.TimeLine;
					i.to(this.panelBg, {
						alpha: 0
					},
						e, Laya.Ease.expoIn),
						i.play(0, !1)
				}
				Laya.timer.once(e, this,
					function () {
						"function" == typeof i && i(),
							this.close()
					})
			}
			onDisable() {
				this.setAdHide(),
					window.isRanderCamare = !0
			}
			openScene(i) {
				this.setAdHide(),
					this.panelAlapha.visible = !0,
					this.panelAlapha.alpha = 0;
				let e = new Laya.TimeLine;
				e.to(this.panelAlapha, {
					alpha: 1
				},
					200),
					e.on(Laya.Event.COMPLETE, this,
						function () {
							this.panelAlapha.visible = !1,
								this.close(),
								window.sm.getScene(i, !0, !0)
						}),
					e.play(0, !1)
			}
		}
		class w {
			constructor(i, e) {
				this.app = i,
					this.userTable = e
			}
			_post(i, e, t) {

			}
			_get(i, e, t) {

			}
			query(i, e, t, o) {
				"post" == t ? this._post("UserTable." + i + "&app=" + this.app + "&table=" + this.userTable, e, o) : "get" == t && this._get("UserTable." + i + "&app=" + this.app + "&table=" + this.userTable, e, o)
			}
			getGameSetting(i) {
				this._post("GameSetting.GetSetting", {
					appName: this.app
				},
					i)
			}
			userLogin(i, e) {
				this._post("User.Login", i, e)
			}
			sessionKey(i, e) {
				this._post("User.sessionKey", i, e)
			}
		}
		const d = {
			rank: {
				res: "DialogRank",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							t.setAction(0, this.imgBtnShowAd, !0),
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnClose, this,
								function () {
									this.setHideAction(() => {
										this.close()
									})
								}),
							this.listTopY = this.lstRank.y,
							this.listH = this.lstRank.height,
							this.listAddH = this.listTopY - this.baseOppoAd.y
					}
					onEnable() {
						window.nativeAdSceneId = 2
						let i = this.isShowBarnnerAd ? 100 : 300;
						window.isOV && (i = window.oppoAdData ? 0 : 300),
							this.lstRank.y = this.listTopY - (window.oppoAdData ? 0 : this.listAddH),
							this.lstRank.height = this.listH + (window.oppoAdData ? 0 : this.listAddH),
							window.sceMain.hideMainBtn(),
							window.sceMain.baseFishUiBottom.visible = !1,
							window.sceMain.baseFishUiTop.visible = !1,
							this.updateRank(),
							this.setShowAction()
					}
					updateRank() {

					}
					onDisable() {
						super.onDisable(),
							window.gameState == window.GAME_STATE_MAIN ? window.sceMain.showMainBtn() : window.sceMain.showFishPoolUi()
					}
					onCloseOppoAd(i) {
						this.lstRank.y = this.listTopY - this.listAddH,
							this.lstRank.height = this.listH + this.listAddH
					}
				}
			},
			pause: {
				res: "DialogPause",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnCancel, this,
								function () {

									this.setHideAction(function () {
										window.recordEvent.event("record", ["resume"]),
											window.gameState = window.GAME_STATE_GAME,
											window.playMusic("bgm1")
									})
								}),
							t.setButtonEvent(this.btnEnter, this,
								function () {

									window.recordEvent.event("record", ["stop"]),
										this.openScene("main")
								})
					}
					onEnable() {
						window.recordEvent.event("record", ["pause"]),
							window.gameState = window.GAME_STATE_PAUSE,
							this.setShowAction()
					}
				}
			},
			settle: {
				res: "DialogSettle",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.btns = [this.btnReStart, this.btnClose, this.btnShow],
							this.btnsPos = [{
								x: this.btnReStart.x,
								y: this.btnReStart.y
							},
							{
								x: this.bg.width - this.btnReStart.x,
								y: this.btnReStart.y
							},
							{
								x: this.btnClose.x,
								y: this.btnClose.y
							},
							{
								x: -this.btnShow.x,
								y: this.btnShow.y
							},
							{
								x: this.btnShow.x,
								y: this.btnShow.y
							}],
							this.bgNoAdY = -400,
							this.btnClose.x = this.bg.width - this.btnReStart.x, this.btnClose.y = this.btnReStart.y, this.bg.y = this.bgNoAdY,
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							this.count = 0,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && this.openScene("main")
								}),
							t.setButtonEvent(this.btnReStart, this,
								function () {
									window.isCanControl && this.setHideAction(function () {
										window.sceGame.initGame()
									})
								}),
							this.btnRecord.visible = !window.isOV,
							this.btnRecord.visible && (t.setButtonEvent(this.btnRecord, this,
								function () {
									window.setPlatformReward(2, 1)
								}), window.sceMain.setHand(this.imgBtnShare, this.imgBtnShare.width / 2 + 90, this.imgBtnShare.height / 2 + 25)),
							t.setAction(1, this.iconTitle, !0),
							this.bgY = this.bg.y,
							this.isFinishOnce = !0
					}
					onEnable() {
						window.recordEvent.event("record", ["stop"]),
							window.gameState = window.GAME_STATE_SETTLE,
							window.sceGame.baseGameOppoAd.visible = !1,
							this.bg.y = this.bgNoAdY,
							this.btnReStart.x = this.btnsPos[0].x,
							this.btnReStart.y = this.btnsPos[0].y,
							this.btnClose.x = this.btnsPos[1].x,
							this.btnClose.y = this.btnsPos[1].y,
							this.baseAd.visible = !1,
							this.baseAd1.visible = !1,
							this.bg.visible = !0,
							window.isVV ? (window.nativeAdSceneId = 18, this.baseAd.visible = !!window.oppoAdData, window.oppoAdData && (this.bgAd.alpha = 0, this.baseOppoAd.scaleX = this.baseOppoAd.scaleY = 0, Laya.timer.once(1500, this, () => {
								let i = new Laya.TimeLine;
								i.to(this.bgAd, {
									alpha: 1
								},
									200),
									i.play(0, !1);
								let e = new Laya.TimeLine;
								e.to(this.baseOppoAd, {
									scaleX: 1,
									scaleY: 1
								},
									200, Laya.Ease.backOut),
									e.play(0, !1),
									this.bg.visible = !1
							}))) : window.isOV && (window.nativeAdSceneId = 12, this.bg.y = this.bgY, this.baseAd1.visible = !0, this.baseOppoAd1.visible = !0, t.setOppoBtnPos(this.btns, this.btnsPos)),
							window.playGameNum++,
							window.playSound("success0"),
							window.isCanControl = !1,
							this.btnRecord.visible = !1,
							window.isOV || (window.recordShow ? (this.btnRecord.visible = !0, this.btnRecord.alpha = 1, window.actionHand.play(0, !0)) : Laya.timer.once(2e3, this,
								function () {
									if (window.recordShow) {
										this.btnRecord.visible = !0,
											this.btnRecord.alpha = 0,
											window.actionHand.play(0, !0);
										let i = new Laya.TimeLine;
										i.to(this.btnRecord, {
											alpha: 1
										},
											100),
											i.play(0, !1)
									}
								}.bind(this))),
							window.score > window.user.data.bestScore && (window.user.data.bestScore = window.score),
							this.fcScore.value = window.score,
							this.fcGold.value = t.getShowNum(window.rewardGoldNum),
							window.user.moneyChange(window.rewardGoldNum);
						let i = Math.floor(window.score / 10);
						i >= window.gameTitle.length && (i = window.gameTitle.length - 1),
							this.fcTitle.value = window.gameTitle[i],
							this.setShowAction(() => {
								let i = 500;
								Laya.timer.once(i, this,
									function () {
										window.salute(window.diaSettle, 30, 4 * Laya.stage.height / 7, 70)
									}),
									window.rewardGoldNum > 0 && (i += 500, Laya.timer.once(i, this, () => {
										window.showGoldAnimation("res/iconGold.png", 2 * window.rewardGoldNum, this.iconGold, this.iconGold, {
											scaleX: 1,
											scaleY: 1
										},
											() => {
												window.isCanControl = !0
											})
									})),
									i += 500,
									Laya.timer.once(i, this,
										function () {
											window.playMusic("bgm0")
										})
							})
					}
					onRecordSuccess() {
						this.btnRecord.visible = !1
					}
					onDisable() {
						super.onDisable(),
							this.isFinishOnce = !1,
							"op" == window.plat && window.platform.hideOppoBanner()
					}
					onCloseOppoAd(i) {
						i == this.btnCloseAd ? t.onCloseOppoAd(this.btns, this.btnsPos) : (this.baseAd.visible = !1, window.nativeAdSceneId = 12, this.bg.visible = !0, this.bg.y = this.bgY, this.baseAd1.visible = !0, this.baseOppoAd1.visible = !0, t.setOppoBtnPos(this.btns, this.btnsPos))
					}
				}
			},
			game: {
				res: "SceneGame",
				code: class extends e {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.baseOppoAd.y = this.height,
							this.moveInitVx = 2,
							this.moveAddVx = .2,
							this.moveMaxVx = 16,
							this.maxColumnNum = 2,
							window.maxTimeDragton = 15e3,
							window.timeSpaceSuper = 1e4,
							window.canReviveNum = 1,
							this.ylmNum = 0,
							this.isTry = !1,
							"pc" == window.plat && (this.testSp = new Laya.Sprite, this.addChild(this.testSp), window.gTest = this.testSp.graphics),
							window.saluteInit(),
							this.baseTime.x = this.width / 2,
							this.baseTime.y = this.height - 200,
							this.panelTouch.width = this.width,
							this.panelTouch.height = this.height,
							this.baseBg.x = window.leadInitX,
							this.baseBg.y = window.leadInitY,
							this.baseScene.y = -window.leadInitY / window.sceneScaleMin,
							this.warnTxtInX = this.width / 2,
							this.warnTxtOutX = this.width + this.width / 2 + 500,
							this.warnBigFishTxt.y = this.height / 2 - 260,
							this.warnRectInX = this.width / 2,
							this.warnRectOutX = -this.width / 2 - 500,
							this.warnRect.y = this.warnBigFishTxt.y,
							this.warnBg.height = this.height,
							this.baseFish.x = window.leadInitX,
							this.baseFish.y = window.leadInitY;
						for (let i = 0; i < window.fishs.length; i++) for (let e = 0; e < window.fishs[i].length; e++) 0 == e && (window.fishs[i][e].setFlip(), window.fishs[i][e].zOrder = window.fishs[i][e].zOrderInit = 1e3);
						this.createPP(),
							t.setButtonEvent(this.btnPause, this, this.onBtnShowPauseUI),
							this.btnBP.visible = window.isHaveBP,
							this.btnBP.visible && t.setButtonEvent(this.btnBP, this, this.onBtnFireBP),
							this.panelTouch.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
							this.panelTouch.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
							this.panelTouch.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
							this.panelTouch.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
							this.btnSkip.x = this.width - 70,
							this.btnSkip.y = this.height - 80,
							t.setButtonEvent(this.btnSkip, this,
								function () {
									this.openScene("main"),
										window.gameState = window.GAME_STATE_NULL,
										this.isGuideState = !1,
										window.user.data.isModel0First = !1,
										window.user.saveUserData()
								}),
							this.baseOppoTest.visible = window.isOppoTest,
							window.isOppoTest && (this.isSaveImage = !1, t.setButtonEvent(this.btnOppoTest, this,
								function () {
									this.onBtnSaveOppoImg()
								}), this.cameraSizeRG.selectHandler = new Laya.Handler(this,
									function (i) {
										window.cameraSzieIndex = i,
											this.reSetCameraSize(window.cameraSizes[window.cameraSzieIndex])
									})),
							Laya.stage.on("onAppShow", this, this.onAppShow),
							this.camera = !1,
							t.setAction(1, this.imgBtnShow, !0),
							this.createBombBP(),
							this.createPpBP(),
							this.createHXL(),
							this.createYuLei(),
							this.createColumns()
					}
					onBtnSaveOppoImg() {
						// if (!this.isSaveImage) {
						// 	if ("op" == window.plat) {
						// 		this.fs || (this.fs = qg.getFileSystemManager());
						// 		let i = (new Date).getTime();
						// 		this.dirPath = qg.env.USER_DATA_PATH + i,
						// 		this.fs.mkdirSync(this.dirPath, !1)
						// 	}
						// 	this.saveFrame = 0,
						// 	this.isSaveImage = !0,
						// 	this.btnOppoTest.label = "录制中...",
						// 	this.btnOppoTest.disabled = !0,
						// 	this.saveFrame = 0
						// }
					}
					saveCameraImg() {
						this.isSaveImage && (this.saveFrame++, "op" == window.plat && qg.saveImageTemp({
							data: new Uint8Array(window.video.data),
							width: window.video.width,
							height: window.video.height,
							fileType: "jpg",
							success: i => {
								this.fs.saveFile({
									tempFilePath: i.tempFilePath,
									filePath: this.dirPath + "/" + (new Date).getTime() + ".jpg",
									success: i => { },
									fail: i => { }
								})
							}
						}), this.saveFrame > 60 && (this.isSaveImage = !1, this.btnOppoTest.disabled = !1, this.btnOppoTest.label = "保存60帧图片"))
					}
					reSetCameraSize(i) {
						this.camera && this.camera.reSetCameraSize(i)
					}
					onBtnShowPauseUI() {
						window.gameState == GAME_STATE_GAME && (window.gameState = window.GAME_STATE_PAUSE, window.stopMusic(!0), window.sm.getScene("pause", !0))
					}
					onMouseDown(i) {
						window.isCanControlFish && window.gameState == window.GAME_STATE_GAME && 0 == window.gameModel && 0 == this.isDown && (this.isDown = !0, this.touchY = Laya.stage.mouseY, this.toY = this.fromY = window.lead.y)
					}
					onMouseMove(i) {
						if (window.isCanControlFish && window.gameState == window.GAME_STATE_GAME) if (0 == window.gameModel) {
							if (this.isDown) {
								let e = i.touches;
								e && 1 != e.length || (this.toY = this.fromY + Laya.stage.mouseY / this.baseFish.scaleX - this.touchY / this.baseFish.scaleX)
							}
						} else 1 == window.gameModel && "pc" == window.plat && this.onMoveLead(Laya.stage.mouseX, Laya.stage.mouseY)
					}
					onMouseUp(i) {
						window.isCanControlFish && window.gameState == window.GAME_STATE_GAME && 0 == window.gameModel && this.isDown && (this.isDown = !1)
					}
					onMoveLead(i, e) {
						window.isCanControlFish && i >= 0 && (this.toY = (e - window.leadInitY) / this.baseFish.scaleX),
							this.noseGuide.visible && (this.noseGuide.x = i, this.noseGuide.y = e, this.hintTxt.x = this.noseGuide.x, this.hintTxt.y = this.noseGuide.y - 320)
					}
					onMouthOpen() {
						1 != window.lead.actionId && window.lead.playAction(1)
					}
					onEnable() {
						this.initGame(),
							window.isOppoTest && (this.baseOppoTest.visible = 1 == window.gameModel),
							Laya.timer.loop(1e3 / 60, this, this.run)
					}
					initGame() {
						window.nativeAdSceneId = 7,
							0 == window.gameModel && (this.bg0.skin = this.bg2.skin = "res/bg0.jpg", this.bg1.skin = "res/bg1.jpg"),
							this.baseCamera.visible = 1 == window.gameModel,
							this.baseBg.visible = 0 == window.gameModel,
							this.baseScene.x = -window.leadInitX / window.sceneScaleMin,
							window.isCanControlFish = !0,
							this.baseCollisionIcon.visible = !1,
							this.baseHintYLM.visible = !1,
							this.fishStartShapeId = 1,
							window.isNowShowYLM = !1,
							window.isShowGSLDia = !1,
							window.score = 0,
							this.isCanMove = !0,
							window.reviveNum = window.canReviveNum,
							window.isSetLvState = !1,
							this.baseTime.visible = !1,
							this.fcScore.value = window.score,
							this.fcEatHintNum.visible = !1,
							this.eatFishReward = 0,
							window.rewardGoldNum = 0,
							this.eatFishRewardShow = 0;
						let i = 1;
						for (let e = 0; e < window.fishs.length; e++) for (let t = 0; t < window.fishs[e].length; t++) window.fishs[e][t].removeSelf(),
							this.baseFish.addChild(window.fishs[e][t]),
							t > 0 && (window.fishs[e][t].skeleton.scaleX = window.fishs[e][t].skeleton.scaleY = window.fishs[e][t].bodyScale, window.fishs[e][t].setRecovery(), window.fishs[e][t].zOrder = window.fishs[e][t].zOrderInit = i++);
						this.setLeadShape(window.user.data.fishMaxLv, !0),
							this.baseFish.scaleX = this.baseFish.scaleY = this.fishScaleTarget,
							this.setMapBounds(),
							this.baseBg.scaleX = this.baseBg.scaleY = this.bgScaleTarget,
							this.isDown = !1,
							this.moveNowVx = this.moveInitVx,
							this.toY = this.fromY = 0,
							window.gameState = GAME_STATE_GAME,
							this.runNum = 0,
							window.playMusic("bgm1"),
							this.baseWarn.visible = !1,
							this.isShowWarn = !0,
							this.difficultyLv = 0,
							this.baseGuide.visible = !1;
						for (let i = this.baseGuide.numChildren - 1; i >= 0; i--) this.baseGuide.getChildAt(i).visible = !1;
						window.user.data.isModel0First && 0 == window.gameModel && (this.isGuideState = !0, this.setGuideStep(0)),
							window.user.data.isModel1First && 1 == window.gameModel && (this.isGuideState = !0, this.setGuideStep(100)),
							this.isGuideState ? (this.btnBP.visible = !1, this.btnPause.visible = !1, this.baseOppoAd.visible = !1) : (window.isHaveBP && (this.btnBP.visible = !0), this.btnPause.visible = !0, this.btnPause.alpha = 1, this.baseOppoAd.visible = !1, 0 == window.gameModel && window.adGameShow && window.isShowTryKun && window.user.data.fishMaxLv < window.fishMaxLv ? (this.isTry = !0, window.sm.getScene("tryKun", !0)) : window.isHaveBP && window.isShowBP ? (this.isTry = !0, window.sm.getScene("try", !0)) : this.startRecord(!0)),
							this.btnSkip.visible = 0 == window.gameModel && this.isGuideState,
							this.haveNumBP = 0,
							this.updateBtnBP(),
							this.initBombBP(!1),
							window.baseBP.x = -300,
							window.baseBP.visible = !1,
							window.isShowBombBP = !1,
							this.initPpBP(),
							this.initHXL(),
							this.initYuLei(),
							this.actionFireBP && this.actionFireBP.pause(),
							this.initColumns(),
							this.isDragon = !1,
							window.isToGeSiLa = !1
					}
					startRecord(i = !0) {
						window.recordEvent.event("record", ["start"]),
							i && (this.stepReward = 0, Laya.timer.once(200, this,
								function () {
									this.setGoldRewardHint(0)
								}))
					}
					createCamera() {
						this.camera && (this.camera.removeSelf(), this.camera.destroy()),
							this.camera = new s,
							this.baseCamera.addChild(this.camera)
					}
					createNewNpcFish(i = !1) {
						if (window.gameState != window.GAME_STATE_GAME || this.isTry || this.isYLM) return;
						let e = window.lead.shapeId - 1,
							o = 100 * Math.random();
						if (i) e = window.lead.shapeId + 1;
						else {
							if (this.isDragon ? window.timeNow - this.timeDragonStart < window.maxTimeDragton - 5e3 && (o < 5 ? e = window.lead.shapeId + 3 : o < 15 ? e = window.lead.shapeId + 2 : o < 35 ? e = window.lead.shapeId + 1 : o < 65 && (e = window.lead.shapeId + 0)) : o < 2 ? window.score > 30 && !window.isShowBombBP && window.lead.shapeId + 2 <= window.fishMaxLv && (e = window.lead.shapeId + 2) : o < 12 ? window.score > 12 && !window.isShowBombBP && (e = window.lead.shapeId + 1 <= window.fishMaxLv ? window.lead.shapeId + 1 : window.lead.shapeId) : o < 18 && window.lead.shapeId - 2 >= 0 && (e = window.lead.shapeId - 2), e > window.lead.shapeId) {
								if (this.baseWarn.visible) e = window.lead.shapeId - 1;
								else {
									let i = 0;
									for (let e = 0; e < window.fishs.length; e++) for (let t = 1; t < window.fishs[e].length; t++) window.fishs[e][t].visible && window.fishs[e][t].isAlive && window.fishs[e][t].shapeId > window.lead.shapeId && i++;
									i >= this.difficultyLv && (e = window.lead.shapeId - 1)
								}
								this.isYuLei && (e = window.lead.shapeId - 1)
							}
							if (e > window.lead.shapeId && this.isShowWarn && !this.isDragon && !this.isYLM && !this.baseBP.visible && !window.lead.isSuperState && !this.isYuLei) return this.isShowWarn = !1,
								void this.showBigFishWarn()
						}
						e < 0 ? e = 0 : e > window.fishMaxLv && (e = window.fishMaxLv);
						for (let i = 1; i < window.fishs[e].length; i++) if (window.fishs[e][i].state == window.FISH_STATE_UN_USE) {
							window.fishs[e][i].state = window.FISH_STATE_SWIM,
								window.fishs[e][i].visible = !0,
								window.fishs[e][i].x = window.mapRightX + window.fishs[e][i].bodyW / 2 + 10;
							let o = window.mapBottomY - window.mapTopY,
								s = 1 == window.gameModel ? .25 * o : 200,
								n = 100 * Math.random();
							if (e >= window.lead.shapeId ? (window.fishs[e][i].vx = this.moveNowVx + t.randomFloat(2.5, 4), s = n < 10 ? s : 1 == window.gameModel ? .35 * o : .25 * o) : (window.fishs[e][i].vx = this.moveNowVx + t.randomFloat(4, 8), s = n < 10 ? s : 1 == window.gameModel ? .25 * o : .125 * o), 0 == window.gameModel && (window.fishs[e][i].vx += 2), window.fishs[e][i].y = window.mapTopY + t.randomInt(s, o - s), window.fishs[e][i].vx /= -this.baseFish.scaleX, window.fishs[e][i].vy = 0, window.fishs[e][i].isHaveAI = Math.random() > .7, window.fishs[e][i].initValue(!1), e == window.lead.shapeId && window.lead.shapeId == window.fishMaxLv) {
								let t = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
									o = new Laya.ColorFilter(t);
								window.fishs[e][i].skeleton.filters = [o],
									window.fishs[e][i].isSuperState = !0,
									window.fishs[e][i].haveEnergy = window.fishs[e][i].toNextLvNeedEnergy
							} else window.fishs[e][i].skeleton.filters = null,
								window.fishs[e][i].isSuperState = !1,
								window.fishs[e][i].haveEnergy = e >= window.lead.shapeId ? 0 : t.randomInt(0, window.fishs[e][i].toNextLvNeedEnergy);
							return (e > window.lead.shapeId || window.fishs[e][i].isSuperState) && !this.isDragon ? window.fishs[e][i].playHintAction() : window.fishs[e][i].pauseHintAction(),
								window.fishs[e][i].updateData(),
								window.fishs[e][i]
						}
					}
					setLeadShape(i, e = !1, t = !1) {
						e || !window.lead ? (window.fishs[i][0].x = 0, window.fishs[i][0].y = 0, window.fishs[i][0].rotation = 0) : (window.fishs[i][0].x = window.lead.x, window.fishs[i][0].y = window.lead.y, window.fishs[i][0].rotation = window.lead.rotation),
							window.lead && window.lead.setRecovery();
						let o = null;
						window.lead && window.lead.eatFish && (o = window.lead.eatFish),
							window.lead = window.fishs[i][0],
							window.lead.initValue(e),
							window.lead.visible = !0,
							o && (window.lead.eatFish = o),
							e ? this.cancelSuperState() : window.platform.reportAnalytics("lead_upgrade", {
								lv: "" + i
							}),
							0 != this.superColor && (this.setSuperColor(this.superColor), window.lead.isSuperState = !0);
						let s = t ? 1 : 200,
							n = t ? 100 : 200;
						this.fishScaleTarget = 1 / window.lead.fishScale,
							t ? (this.baseFish.scaleY = this.baseFish.scaleX = this.fishScaleTarget, this.setMapBounds()) : this.fishScaleAddNum = (this.fishScaleTarget - this.baseFish.scaleX) / s,
							this.bgScaleTarget = window.sceneScaleMin * (1 + (window.fishMaxLv - i) * window.sceneScaleAdd),
							this.bgScaleAddNum = (this.bgScaleTarget - this.baseBg.scaleX) / n
					}
					run() {
						if (this.runNum++, this.runBombBP(), this.runPpBP(), this.runHXL(), this.runColumn(), this.runDragon(), this.runYuLei(), !this.isTry || window.gameState == window.GAME_STATE_GAME || window.gameState == window.GAME_STATE_REVIVE || window.gameState == window.GAME_STATE_SETTLE) {
							if (this.isCanMove && (this.baseScene.x -= this.moveNowVx, this.baseScene.x < -3e3 - window.leadInitX && (this.baseScene.x += 3e3)), window.lead.isAlive ? (window.lead.y != this.toY && (!this.isGuideState || 0 != this.guideStep && 100 != this.guideStep || (this.setGuideStep(1001 + this.guideStep), Laya.timer.once(2e3, this,
								function () {
									1001 == this.guideStep ? this.setGuideStep(1) : 1101 == this.guideStep && this.setGuideStep(101)
								})), this.addy = (this.toY - window.lead.y) / 16, (this.addy > 2 || this.addy < -2) && this.setMovePP(window.lead.x, window.lead.y, Math.abs(this.addy), this.addy), this.addy >= -.05 && this.addy <= .05 ? window.lead.y = this.toY : window.lead.y += this.addy), window.lead.y < window.mapTopY && (this.toY = window.lead.y = window.mapTopY), window.lead.y > this.baseFish.y / this.baseFish.scaleX && (this.toY = window.lead.y = this.baseFish.y / this.baseFish.scaleX), this.isDragon ? (this.toRotation = (this.toY - window.lead.y) / 2e3 * 15, this.toRotation > 15 ? this.toRotation = 15 : this.toRotation < -15 && (this.toRotation = -15)) : (this.toRotation = (this.toY - window.lead.y) / 500 * 90, this.toRotation > 60 ? this.toRotation = 60 : this.toRotation < -60 && (this.toRotation = -60)), window.lead.rotation != this.toRotation && (this.addRotiton = (this.toRotation - window.lead.rotation) / 4, window.lead.rotation += this.addRotiton)) : window.lead.run(), this.isGuideState ? this.createGuideFish() : this.isDragon ? this.runNum % 10 == 0 && this.createNewNpcFish() : this.runNum % 15 == 0 && this.createNewNpcFish(), this.baseFish.scaleX != this.fishScaleTarget) {
								let i = this.fishScaleTarget - this.baseFish.scaleX;
								Math.abs(i) < Math.abs(this.fishScaleAddNum) ? this.baseFish.scaleX = this.fishScaleTarget : this.baseFish.scaleX += this.fishScaleAddNum,
									this.baseFish.scaleY = this.baseFish.scaleX,
									this.setMapBounds()
							}
							if (this.baseBg.scaleX != this.bgScaleTarget) {
								let i = this.bgScaleTarget - this.baseBg.scaleX;
								Math.abs(i) < Math.abs(this.bgScaleAddNum) ? this.baseBg.scaleX = this.bgScaleTarget : this.baseBg.scaleX += this.bgScaleAddNum,
									this.baseBg.scaleY = this.baseBg.scaleX
							}
							if (window.lead.isSuperState) if ((new Date).getTime() - this.timeSuperStart >= window.timeSpaceSuper) 1 == this.superColor ? this.setSuperStateCancel() : (this.superColor -= .05, this.superColor <= 0 ? this.cancelSuperState() : this.setSuperColor(this.superColor));
							else {
								let i = this.superColor - .2 * Math.floor(this.runNum % 15 / 5);
								this.color != i && this.setSuperColor(i)
							}
							for (let i = 0; i < window.fishs.length; i++) for (let e = 1; e < window.fishs[i].length; e++) window.fishs[i][e].run();
							let i = !0; (window.lead.isSuperState || window.isToGeSiLa || window.isShowBombBP || this.isTry || this.isYLM || this.isDragon || window.gameState == window.GAME_STATE_PAUSE || window.gameState == window.GAME_STATE_REVIVE || window.gameState == window.GAME_STATE_SETTLE) && (i = !1);
							let e = !1;
							for (let t = 0; t < window.fishs.length; t++) {
								for (let o = 1; o < window.fishs[t].length; o++) if (!this.isDragon && !this.isYLM && !window.lead.isSuperState && !window.isSetLvState && window.fishs[t][o] != window.lead && window.fishs[t][o].state == window.FISH_STATE_SWIM && window.fishs[t][o].visible && window.fishs[t][o].isAlive && window.fishs[t][o].x * this.baseFish.scaleX < this.width - 100 && (window.fishs[t][o].isSuperState || window.fishs[t][o].shapeId > window.lead.shapeId) && this.setBombFire(), i && this.checkIsCanEat(window.fishs[t][o], window.lead)) {
									window.fishs[t][o].eat(window.lead),
										e = !0,
										this.setToRevive("revive");
									break
								}
								if (e) break
							}
							if (!e && !this.isYLM && !window.isShowGSLDia && window.isCanControlFish && window.gameState != window.GAME_STATE_REVIVE && window.gameState != window.GAME_STATE_SETTLE) for (let i = 0; i < window.fishs.length; i++) for (let e = 1; e < window.fishs[i].length; e++) this.checkIsCanEat(window.lead, window.fishs[i][e]) && (window.platform.onVibrate(), this.updateScore(++window.score), window.lead.eat(window.fishs[i][e]), this.isGuideState && window.score > this.step2Score && 2 == this.guideStep && (this.guideStep = 3, Laya.timer.once(1e3, this,
								function () {
									this.setGuideStep(4)
								})))
						}
						this.runPP()
					}
					setToRevive(i) {
						this.baseWarn.visible = !1,
							window.baseBP.visible = !1,
							window.isShowBombBP = !1;
						for (let i = 0; i < window.numHXL; i++) window.ppHXL[i].visible && (window.ppHXL[i].state = 0, window.ppHXL[i].visible = !1);
						if (window.playSound("die"), window.platform.onVibrate("long"), "fail" == i) {
							this.isCanMove = !1,
								window.gameState = window.GAME_STATE_REVIVE,
								this.baseCollisionIcon.visible = !0,
								this.baseCollisionIcon.alpha = 1,
								this.baseCollisionIcon.scaleX = this.baseCollisionIcon.scaleY = 0,
								this.baseCollisionIcon.x = window.lead.x * this.baseFish.scaleX + window.leadInitX + 40,
								this.baseCollisionIcon.y = window.lead.y * this.baseFish.scaleX + window.leadInitY - 10;
							let i = new Laya.TimeLine;
							i.to(this.baseCollisionIcon, {
								scaleX: 2.5,
								scaleY: 2.5
							},
								100),
								i.to(this.baseCollisionIcon, {
									scaleX: 0,
									scaleY: 0,
									alpha: 0
								},
									200),
								i.play(),
								window.playSound("chestPoof1")
						}
						let e = new Laya.TimeLine;
						e.to(window.sceGame, {
							x: 10,
							y: -10
						},
							50),
							e.to(window.sceGame, {
								x: -10,
								y: 10
							},
								100),
							e.to(window.sceGame, {
								x: 10,
								y: 0
							},
								100),
							e.to(window.sceGame, {
								x: -10,
								y: 0
							},
								100),
							e.to(window.sceGame, {
								x: 10,
								y: 0
							},
								100),
							e.to(window.sceGame, {
								x: 0,
								y: 0
							},
								50),
							e.play(0, !1),
							this.isGuideState || (window.stopMusic(!0), window.isShowBombBP = !1, this.actionFireBP && this.actionFireBP.pause(), window.baseBP.visible = !1, window.isShowBombBP = !1, Laya.timer.once(1e3, this,
								function () {
									window.reviveNum > 0 ? (window.reviveNum--, window.sm.getScene(i, !0)) : window.sm.getScene("settle", !0)
								}))
					}
					checkIsCanEat(i, e) {
						if (!(i.visible && i.isAlive && e.visible && e.isAlive)) return !1;
						if (!this.isDragon) {
							if (e.isSuperState && e == window.lead) return !1;
							if (!i.isSuperState) if (i == window.lead) {
								if (i.shapeId < e.shapeId) return !1;
								if (e.isSuperState) return !1
							} else if (i.shapeId <= e.shapeId) return !1
						}
						let o = !1;
						if (i.isDragon) {
							let s = i.getMouthPos();
							o = t.distance(s.x, s.y, e.x, e.y) < s.r + e.bodyR
						} else o = t.distance(i.x, i.y, e.x, e.y) < i.mouthR + e.bodyR;
						if (o) {
							if (i.x == e.x && e.y == i.y) return !0;
							let o = t.getAngle(i.x, i.y, e.x, e.y),
								s = i.getEatAngle();
							if (o < 90 ? s > 270 && (s -= 360) : o > 270 && s < 90 && (s += 360), o > s - window.fishEatAngle / 2 && o < s + window.fishEatAngle / 2) return !0
						}
						return !1
					}
					setMapBounds() {
						window.mapTopY = -this.baseFish.y / this.baseFish.scaleX,
							window.mapBottomY = (this.height - this.baseFish.y) / this.baseFish.scaleX,
							window.mapLeftX = -window.leadInitX / this.baseFish.scaleX,
							window.mapRightX = (this.width - window.leadInitX) / this.baseFish.scaleX
					}
					createPP() {
						let i = new Laya.Sprite;
						this.addChild(i),
							i.zOrder = window.fishs[0][0].zOrder + 10,
							this.pps = [];
						for (let e = 0; e < 100; e++) {
							let e = new Laya.Sprite;
							i.addChild(e),
								e.loadImage("res/pp.png"),
								e.pivotX = 10,
								e.pivotY = 10,
								e.visible = !1;
							let t = {
								pp: e,
								vx: 0,
								vy: 0
							};
							this.pps.push(t)
						}
					}
					setMovePP(i, e, o, s) {
						i = i * this.baseFish.scaleX + window.leadInitX,
							e = e * this.baseFish.scaleX + window.leadInitY,
							(o *= this.baseFish.scaleX) > 20 ? o = 20 : o < -20 && (o = -20),
							(s *= this.baseFish.scaleX) > 20 ? s = 20 : s < -20 && (s = -20);
						for (let n = this.pps.length - 1; n >= 0; n--) if (0 == this.pps[n].pp.visible) {
							let a = this.pps[n].pp;
							a.visible = !0,
								a.alpha = 0,
								this.pps[n].vx = o,
								this.pps[n].vy = s,
								a.scaleX = a.scaleY = 0,
								a.x = -30 + t.randomFloat(i, i + 60),
								a.y = -30 + t.randomFloat(e, e + 60);
							let w = new Laya.TimeLine;
							w.to(a, {
								scaleX: 1,
								scaleY: 1,
								alpha: .8
							},
								100),
								w.to(a, {
									scaleX: 0,
									scaleY: 0,
									alpha: 0
								},
									200, null, 100),
								w.on(Laya.Event.COMPLETE, this,
									function () {
										a.visible = !1
									}),
								w.play(0, !1);
							break
						}
					}
					setEatPP(i, e, t = 60) {
						i = i * this.baseFish.scaleX + window.leadInitX,
							e = e * this.baseFish.scaleX + window.leadInitY;
						for (let o = this.pps.length - 1, s = 0; o >= 0 && s < this.pps.length / 4; o--) if (0 == this.pps[o].pp.visible) {
							let n = this.pps[o],
								a = n.pp;
							a.visible = !0,
								a.alpha = 0,
								a.pos(i, e),
								n.vx = 0,
								n.vy = 0,
								a.scaleX = a.scaleY = 0;
							let w = Math.random() * t * (Math.random() > .5 ? 1 : -1) + i,
								d = Math.random() * t * (Math.random() > .5 ? 1 : -1) + e,
								h = 150 + 50 * Math.random(),
								r = .9 + .2 * Math.random(),
								l = new Laya.TimeLine;
							l.to(a, {
								x: w,
								y: d,
								scaleX: r,
								scaleY: r,
								alpha: .8
							},
								h, null, 50 * Math.random()),
								l.on(Laya.Event.COMPLETE, this,
									function (i) {
										n.vy = 2 + 6 * Math.random();
										let e = new Laya.TimeLine;
										e.to(i, {
											scaleX: 0,
											scaleY: 0,
											alpha: 0
										},
											150 + 150 * Math.random(), null, 100 + 100 * Math.random()),
											e.on(Laya.Event.COMPLETE, this,
												function () {
													i.visible = !1
												}),
											e.play(0, !1)
									},
									[a]),
								l.play(0, !1),
								s++
						}
					}
					runPP() {
						for (let i = this.pps.length - 1; i >= 0; i--) 1 == this.pps[i].pp.visible && (this.pps[i].pp.x -= this.pps[i].vx, this.pps[i].pp.y -= this.pps[i].vy)
					}
					createBomb(i, e = !1, t = 0, o = 0, s = 100, n = 100) {
						let a = this.ylmNum + 1 - window.ylmStartNum,
							w = !e && window.isHaveYYLM && a >= 0 && a % window.ylmRateNum == 0;
						w && window.salute(Laya.stage, 30, 4 * Laya.stage.height / 7, 70),
							this.isYuLei || (this.baseWarn.visible = !1),
							window.baseBP.visible = !1,
							window.isShowBombBP = !1,
							Laya.timer.once(500, this,
								function () {
									if (window.isSetLvState = !1, !this.isYuLei) {
										this.setLeadShape(i % window.fishData.length, !1, e),
											window.playSound("success1"),
											Laya.timer.once(1e3, this,
												function () { }),
											this.isGuideState && 2 == this.guideStep && this.setGuideStep(3),
											this.difficultyLv < 3 && this.difficultyLv++;
										for (let i = 0; i < window.fishs.length; i++) for (let e = 1; e < window.fishs[i].length; e++) window.fishs[i][e].visible && window.fishs[i][e].pauseHintAction()
									}
								}),
							this.isGuideState || !window.isHaveYYLM || e || (w && Laya.timer.once(window.isShowDiaYLM ? 1500 : 2500, this,
								function () {
									this.isYuLei || (this.baseWarn.visible = !1),
										window.isShowDiaYLM ? (window.isShowDiaYLM = !1, window.playSound("chestPoof"), this.showHintYLM()) : this.startYLM()
								}), this.ylmNum++),
							t = window.lead.x * this.baseFish.scaleX + window.leadInitX,
							o = window.lead.y * this.baseFish.scaleX + window.leadInitY;
						let d = new Laya.Sprite;
						this.addChild(d),
							d.pos(t, o),
							Laya.timer.once(3e3, this,
								function () {
									d.removeSelf(),
										d.destroy()
								});
						for (let i = 0; i < s; i++) {
							let i = new Laya.Sprite;
							i.loadImage("res/bomb.png"),
								i.pivot(28, 28),
								i.scale(0, 0),
								d.addChild(i);
							let e = Math.random() * n * (Math.random() > .5 ? 1.5 : -1.5),
								t = Math.random() * n * (Math.random() > .5 ? 1.5 : -1.5),
								o = 200 + 80 * Math.random(),
								s = 1.5 + .2 * Math.random(),
								a = new Laya.TimeLine;
							a.to(i, {
								x: e,
								y: t,
								scaleX: s,
								scaleY: s
							},
								o, null, 50 * Math.random()),
								a.to(i, {
									scaleX: 0,
									scaleY: 0
								},
									o),
								a.play(0, !1)
						}
					}
					startYLM() {
						window.playMusic("bgm0"),
							this.isYLM = !0,
							this.setColumns(!1),
							this.baseColumn.visible = !1,
							this.baseHintYLM.visible = !0,
							this.baseHintYLM.scaleX = this.baseHintYLM.scaleY = 0;
						let i = new Laya.TimeLine;
						i.to(this.baseHintYLM, {
							scaleX: 1,
							scaleY: 1
						},
							200, Laya.Ease.backOut),
							i.to(this.baseHintYLM, {
								scaleX: 0,
								scaleY: 0
							},
								200, Laya.Ease.backIn, 3e3),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									this.baseHintYLM.visible = !1,
										this.baseColumn.visible = !0
								}),
							i.play(0, !1)
					}
					updateScore(i) {
						!this.isGuideState && this.eatFishTarget < 1e5 && (this.eatFishReward++, this.eatFishReward >= this.eatFishTarget ? (this.eatFishReward = 0, window.rewardGoldNum += this.targetGoldNum, this.setGoldRewardHint(this.stepReward + 1)) : this.setGoldRewardAction(this.eatFishTarget - this.eatFishReward)),
						window.score = i,
						this.fcScore.value = i,
						this.fcScore.scaleX = this.fcScore.scaleY = 1.5;
						let e = new Laya.TimeLine;
						e.to(this.fcScore, {
							scaleX: 2,
							scaleY: 2
						},
							50),
							e.to(this.fcScore, {
								scaleX: 1.5,
								scaleY: 1.5
							},
								50),
							e.play(0, !1),
							window.isShowBombBP || this.isYLM || this.isYuLei || this.isDragon || !(window.lead.shapeId > 1) || (this.addNumPpBP++, this.addNumPpBP % 16 == 7 && window.isHaveBP && this.createNewPpBP(), this.addNumPpBP % window.gslRate == window.gslRate - 1 && (this.addNumPpBP = 0, window.isHaveGSL && this.createNewHXL()));
						let t = !1;
						for (let i = 0; i < window.numHXL; i++) if (window.ppHXL[i].visible) {
							t = !0;
							break
						}
						if (window.lead.isSuperState || this.isDragon || this.isYuLei || window.isToGeSiLa || this.baseWarn.visible || t || this.isShowWarn || this.normalEatFishNum++, window.isHaveYuLei) {
							let i = 5,
								e = 15;
							if (this.normalEatFishNum >= i && !this.isYuLei && !this.baseWarn.visible) {
								let t = !1; (this.normalEatFishNum - i) % e == 0 && (t = !0),
									!t || this.isToGeSiLa || this.isDragon || (this.yuLeiContinueLv = 1, this.yuLeiContinueLv >= 4 ? this.yuLeiNumContinue = Math.random() < .5 ? 3 : 4 : this.yuLeiNumContinue = this.yuLeiContinueLv, this.isYuLei = !0, this.yuLei.y = -1e4, this.createNewYuLei())
							}
						}
					}
					setRevive() {
						window.playMusic("bgm1"),
							window.playSound("skill"),
							this.setLeadShape(window.lead.shapeId, !0),
							this.setSuperState(),
							window.lead.x = window.mapLeftX - window.lead.bodyW / 2 - 10;
						let i = new Laya.TimeLine;
						i.to(window.lead, {
							x: 0
						},
							500, Laya.Ease.expoOut),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									window.gameState = window.GAME_STATE_GAME
								}),
							i.play(0, !1),
							this.isDown = !1,
							this.toY = this.fromY = 0,
							0 == window.gameModel && window.adGameShow
					}
					setYlmRevive() {
						window.playMusic("bgm0"),
							window.playSound("skill"),
							this.setLeadShape(window.lead.shapeId, !0),
							window.lead.x = window.mapLeftX - window.lead.bodyW / 2 - 10;
						let i = new Laya.TimeLine;
						i.to(window.lead, {
							x: 0
						},
							500, Laya.Ease.expoOut),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									window.gameState = window.GAME_STATE_GAME,
										this.setColumns(!0)
								}),
							i.play(0, !1),
							this.isDown = !1,
							this.toY = this.fromY = 0,
							0 == window.gameModel && window.adGameShow
					}
					setSuperState() {
						window.lead.isSuperState = !0,
							this.timeSuperStart = (new Date).getTime(),
							this.superColor = 1,
							this.setSuperColor(1)
					}
					setSuperColor(i) {
						this.color = i;
						let e = [1, 0, 0, i, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
							t = new Laya.ColorFilter(e);
						window.lead.skeleton.filters = [t]
					}
					setSuperStateCancel() {
						this.superColor = .99,
							this.setSuperColor(.99)
					}
					cancelSuperState() {
						window.lead.isSuperState = !1,
							this.superColor = 0,
							window.lead.skeleton.filters = null
					}
					onDisable() {
						this.camera && (this.camera.removeFromGame(), this.camera = !1);
						for (let i = 0; i < window.fishs.length; i++) for (let e = 1; e < window.fishs[i].length; e++) window.fishs[i][e].setRecovery();
						this.actionFireBP && this.actionFireBP.pause(),
							Laya.timer.clearAll(this),
							Laya.loader.clearRes("res/bg0.jpg"),
							Laya.loader.clearRes("res/bg1.jpg"),
							this.bg0.skin = this.bg2.skin = this.bg1.skin = ""
					}
					setGuideStep(i) {
						if (this.isGuideState) if (this.guideStep = i, this.baseGuide.visible || (this.baseGuide.visible = !0), 0 == i) this.hintTxt.visible = !0,
							this.hintTxt.alpha = 1,
							this.hintTxt.scaleX = this.hintTxt.scaleY = 1,
							this.hintTxt.y = this.height / 2 - 350,
							this.txtHint.skin = "res/txtGuide0.png",
							this.model0Hint0.visible = !0,
							this.model0Hint0.y = this.height / 2,
							Laya.timer.once(1e3, this,
								function () {
									window.playSound("txt0")
								});
						else if (1 == this.guideStep) {
							let i = new Laya.TimeLine;
							i.to(this.model0Hint0, {
								alpha: 0
							},
								1e3),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										this.isGuideState && (this.showGuideTxt(1), Laya.timer.once(1e3, this,
											function () {
												this.isGuideState && (this.step2Score = window.score, this.guideStep = 2)
											}))
									}),
								i.play(0, !1)
						} else if (2 == this.guideStep);
						else if (3 == this.guideStep);
						else if (4 == this.guideStep) Laya.timer.once(500, this,
							function () {
								this.isGuideState && this.showGuideTxt(5)
							}),
							Laya.timer.once(2500, this,
								function () {
									this.guideStep = 5
								});
						else if (7 == this.guideStep) this.showGuideTxt(6),
							Laya.timer.once(2e3, this,
								function () {
									if (this.isGuideState) {
										this.setLeadShape(window.lead.shapeId, !0),
											window.lead.x = window.mapLeftX - window.lead.bodyW / 2 - 10;
										let i = new Laya.TimeLine;
										i.to(window.lead, {
											x: 0
										},
											500, Laya.Ease.expoOut),
											i.on(Laya.Event.COMPLETE, this,
												function () {
													this.showGuideTxt(5),
														Laya.timer.once(1e3, this,
															function () {
																this.guideStep = 5
															})
												}),
											i.play(0, !1),
											this.isDown = !1,
											this.toY = this.fromY = 0
									}
								});
						else if (10 == this.guideStep) this.hintTxt.height = 240,
							this.showGuideTxt(8, !1),
							window.playSound("success0"),
							Laya.timer.once(500, this,
								function () {
									window.salute(this, 30, 4 * Laya.stage.height / 7, 70)
								}),
							Laya.timer.once(3500, this,
								function () {
									this.isGuideState && (this.openScene("main"), window.gameState = window.GAME_STATE_NULL, this.isGuideState = !1, window.user.data.isModel0First = !1, window.user.saveUserData())
								});
						else if (100 == this.guideStep) Laya.timer.once(1e3, this,
							function () {
								window.playSound("txt100")
							}),
							this.noseGuide.visible = !0,
							this.noseGuide.y = this.height / 2,
							this.hintTxt.visible = !0,
							this.hintTxt.height = 116,
							this.hintTxt.scaleX = this.hintTxt.scaleY = 1,
							this.hintTxt.y = this.height / 2 - 350,
							this.txtHint.skin = "res/txtGuide100.png";
						else if (101 == this.guideStep) {
							let i = new Laya.TimeLine;
							i.to(this.noseGuide, {
								alpha: 0
							},
								1e3, null, 3e3),
								i.to(this.noseGuide, {
									alpha: 0
								},
									1e3),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										this.isGuideState = !1,
											window.user.data.isModel1First = !1,
											window.user.saveUserData(),
											this.startRecord(!0)
									}),
								i.play(0, !1);
							let e = new Laya.TimeLine;
							e.to(this.hintTxt, {
								alpha: 0
							},
								1e3, null, 3e3),
								e.play(0, !1),
								this.btnPause.visible = !0,
								this.btnPause.alpha = 0;
							let t = new Laya.TimeLine;
							t.to(this.btnPause, {
								alpha: 1
							},
								1e3, null, 3e3),
								t.play(0, !1)
						}
					}
					setGuideFinish(i) {
						i > window.lead.shapeId && (window.lead.isAlive ? this.setGuideStep(10) : this.setGuideStep(7))
					}
					showGuideTxt(i, e = !0) {
						let t = new Laya.TimeLine;
						t.to(this.hintTxt, {
							scaleX: 0,
							scaleY: 0
						},
							100, Laya.Ease.backIn),
							t.on(Laya.Event.COMPLETE, this,
								function () {
									e && window.playSound("txt" + i),
										this.txtHint.skin = "res/txtGuide" + i + ".png";
									let t = new Laya.TimeLine;
									t.to(this.hintTxt, {
										scaleX: 1,
										scaleY: 1
									},
										100, Laya.Ease.backOut),
										t.play(0, !1)
								}),
							t.play(0, !1)
					}
					createGuideFish() {
						if (window.gameState != window.GAME_STATE_GAME) return;
						let i = window.lead.shapeId - 1;
						if (1 == this.guideStep || 2 == this.guideStep || 5 == this.guideStep) {
							if (5 == this.guideStep) i = window.lead.shapeId + 2,
								this.guideStep = 6;
							else if ((1 == this.guideStep || 2 == this.guideStep) && this.runNum % 15 != 0) return;
							for (let e = 1; e < window.fishs[i].length; e++) if (window.fishs[i][e].state == window.FISH_STATE_UN_USE) {
								if (window.fishs[i][e].state = window.FISH_STATE_SWIM, window.fishs[i][e].visible = !0, 6 == this.guideStep) window.fishs[i][e].y = 0,
									window.fishs[i][e].vx = -(this.moveNowVx + 3) / this.baseFish.scaleX,
									window.fishs[i][e].isHaveAI = !1;
								else {
									let o = window.mapBottomY - window.mapTopY,
										s = Math.random() < .1 ? 200 : o / 8;
									window.fishs[i][e].y = window.mapTopY + t.randomInt(s, o - s),
										window.fishs[i][e].vx = -(this.moveNowVx + t.randomFloat(4, 8)) / this.baseFish.scaleX,
										window.fishs[i][e].isHaveAI = Math.random() > .7
								}
								window.fishs[i][e].y < this.height / 10 && (window.fishs[i][e].y += this.height / 10),
									window.fishs[i][e].y > this.height - this.height / 10 && (window.fishs[i][e].y -= this.height / 10),
									window.fishs[i][e].x = window.mapRightX + window.fishs[i][e].bodyW / 2 + 10,
									window.fishs[i][e].vy = 0,
									window.fishs[i][e].initValue(),
									window.fishs[i][e].skeleton.filters = null,
									window.fishs[i][e].isSuperState = !1,
									window.fishs[i][e].haveEnergy = 0,
									window.fishs[i][e].updateData();
								break
							}
						}
					}
					showBigFishWarn() {
						this.baseWarn.visible = !0,
							this.baseWarn.alpha = 1,
							this.warnYuLeiTxt.visible = !1,
							this.warnBigFishTxt.visible = !0,
							this.warnBigFishTxt.x = this.warnTxtOutX,
							this.warnBigFishTxt.scaleX = this.warnBigFishTxt.scaleY = 1,
							this.warnRect.visible = !0,
							this.warnRect.alpha = 1,
							this.warnRect.x = this.warnRectOutX,
							this.warnRect.y = this.warnBigFishTxt.y,
							this.warnRect.scaleX = this.warnRect.scaleY = 1,
							this.warnBg.width = 820,
							this.warnBg.alpha = 0,
							window.playSound("sou");
						let i = new Laya.TimeLine;
						i.to(this.warnRect, {
							x: this.warnRectInX
						},
							100, Laya.Ease.backOut),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									this.warnPlayNum = 0,
										this.playWarnAction()
								}),
							i.play(0, !1);
						let e = new Laya.TimeLine;
						e.to(this.warnBigFishTxt, {
							x: this.warnTxtInX
						},
							100, Laya.Ease.backOut),
							e.play(0, !1)
					}
					playWarnAction() {
						if (window.gameState != window.GAME_STATE_GAME && window.gameState != window.GAME_STATE_PAUSE) return void (this.baseWarn.visible = !1);
						let i = 0 == this.warnPlayNum ? 398 : 1e3,
							e = new Laya.TimeLine;
						e.to(this.warnBigFishTxt, {
							scaleX: 1.25,
							scaleY: 1.25
						},
							100, null, i),
							e.on(Laya.Event.COMPLETE, this,
								function () {
									window.gameState == window.GAME_STATE_GAME && !window.isAppHide && this.baseWarn.visible && window.playSound("warn");
									let i = new Laya.TimeLine;
									i.to(this.warnBg, {
										alpha: 1
									},
										50, null, 1e3),
										i.play(0, !1);
									let e = new Laya.TimeLine;
									e.to(this.warnBigFishTxt, {
										scaleX: 1,
										scaleY: 1
									},
										50, Laya.Ease.backOut),
										e.on(Laya.Event.COMPLETE, this,
											function () {
												if (this.warnPlayNum++, this.warnPlayNum >= 3) {
													window.gameState == window.GAME_STATE_GAME && !window.isAppHide && this.baseWarn.visible && window.playSound("warn");
													let i = new Laya.TimeLine;
													i.to(this.warnBg, {
														alpha: 0,
														width: 820
													},
														1e3),
														i.play(0, !1);
													let e = new Laya.TimeLine;
													e.to(this.baseWarn, {
														alpha: 0
													},
														1e3),
														e.on(Laya.Event.COMPLETE, this,
															function () {
																this.baseWarn.visible = !1,
																	this.isGuideState ? this.setGuideStep(4) : this.createNewNpcFish(!0)
															}),
														e.play(0, !1)
												} else {
													let i = new Laya.TimeLine;
													i.to(this.warnBg, {
														alpha: .5,
														width: 820
													},
														1e3),
														i.play(0, !1),
														this.playWarnAction()
												}
											}),
										e.play(0, !1)
								}),
							e.play(0, !1);
						let t = new Laya.TimeLine;
						t.to(this.warnBg, {
							alpha: 1,
							width: this.width
						},
							150, null, i),
							t.play(0, !1)
					}
					onAppShow() { }
					createBombBP() {
						this.isChangeBase = !1,
							window.baseBP = this.baseBP,
							window.baseBP.visible = !1,
							window.isShowBombBP = !1,
							window.baseBomb = this.baseBomb,
							window.bombs = [],
							window.isBombInitEnd = !1,
							window.isBombFireEnd = !0,
							window.bombNum = 100,
							window.bombSpceH = 5,
							window.bombId = window.bombNum - 1;
						for (let i = 0; i < window.bombNum; i++) {
							let e = new Laya.Sprite;
							e.loadImage("res/bomb2.png"),
								window.baseBomb.addChild(e),
								window.bombs.push(e),
								e.pivotX = 5,
								e.visible = !1,
								i % 4 < 2 && (e.zOrder = window.bombNum + i)
						}
						window.isBombInitEnd = !0,
							window.bombPaperNum = 100,
							window.bombPapers = [];
						for (let i = 0; i < window.bombPaperNum; i++) {
							let e = new Laya.Sprite;
							e.loadImage("res/paper" + i % 4 + ".png"),
								window.baseBomb.addChild(e),
								e.zOrder = 2 * window.bombNum + i,
								e.vx = 0,
								e.vy = 0,
								e.visible = !1,
								window.bombPapers.push(e)
						}
						this.actionHideBP = new Laya.TimeLine,
							this.actionHideBP.to(this.baseActionBP, {
								scaleX: 0,
								scaleY: 0
							},
								100),
							this.actionHideBP.on(Laya.Event.COMPLETE, this,
								function () {
									window.baseBP.visible = !1,
										window.isShowBombBP = !1
								})
					}
					setBaseBpAction() {
						window.baseBP.visible = !0,
							this.baseActionBP.scaleX = this.baseActionBP.scaleY = 0,
							this.startBombBP(),
							this.baseBomb.visible = !1,
							this.actionFireBP = new Laya.TimeLine,
							this.actionFireBP.to(this.baseActionBP, {
								scaleX: 1,
								scaleY: 1
							},
								100),
							this.actionFireBP.on(Laya.Event.COMPLETE, this,
								function () {
									this.baseBomb.visible = !0,
										this.baseBomb.scaleX = this.baseBomb.scaleY = 0;
									let i = new Laya.TimeLine;
									i.to(this.baseBomb, {
										scaleX: 1,
										scaleY: 1
									},
										100, Laya.Ease.backOut),
										i.on(Laya.Event.COMPLETE, this,
											function () {
												this.startBombBP()
											}),
										i.play(0, !1),
										window.baseBP.visible && window.playSound("bp")
								}),
							this.actionFireBP.play(0, !1)
					}
					setBombFire() {
						this.haveNumBP > 0 && !window.isShowBombBP && (this.useBP(), this.initBombBP(), window.isShowBombBP = !0, window.isSetHideBP = !1, this.setBaseBpAction())
					}
					initBombBP(i = !0) {
						this.isChangeBase || (this.isChangeBase = !0, window.baseBP.removeSelf(), this.baseFish.addChild(window.baseBP), window.baseBP.zOrder = window.lead.zOrder - 1);
						let e = !0,
							t = 0;
						for (let o = 0; o < window.bombNum; o++) window.bombs[o].state = 0,
							window.bombs[o].visible = i,
							window.bombs[o].x = 0,
							window.bombs[o].y = window.bombSpceH * t,
							window.bombs[o].vy = .5,
							window.bombs[o].rotation = e ? 35 + 10 * Math.random() : -35 - 10 * Math.random(),
							e = !e,
							o % 2 == 1 && t++;
						if (window.bombId = window.bombNum - 1, window.bombState = 0, window.isShowBombBP = !1, window.numBombBP = 0, window.isShowBombPaper = !1, window.numBombPaper = 0, !i) for (let i = 0; i < window.bombPaperNum; i++) window.bombPapers[i].visible = !1
					}
					runBombBP() {
						if (window.isBombInitEnd && window.baseBP.visible) {
							if (window.baseBP.x = window.lead.x, window.baseBP.y = window.lead.y, window.baseBP.scaleX = window.baseBP.scaleY = 1 / this.baseFish.scaleX, window.isShowBombBP) {
								1 == window.bombState && window.gameState == window.GAME_STATE_GAME && (window.bombId < 0 ? window.bombState = 0 : (this.runNum % 5 == 0 && (window.bombs[window.bombId].state = 1, window.bombId--), this.runNum % 100 == 0 && window.playSound("bp"))),
									window.numBombBP = 0;
								for (let i = 0; i < window.bombNum; i++) if (window.bombs[i].visible && window.numBombBP++, 1 == window.bombs[i].state) {
									window.bombs[i].vy += .5,
										window.bombs[i].y += window.bombs[i].vy;
									let e = 10;
									window.bombs[i].rotation > e ? (window.bombs[i].rotation -= 1, window.bombs[i].rotation <= e && (window.bombs[i].rotation = e, this.setBombBP(window.bombs[i]))) : window.bombs[i].rotation <= -e && (window.bombs[i].rotation += 1, window.bombs[i].rotation > -e && (window.bombs[i].rotation = -e, this.setBombBP(window.bombs[i])))
								}
								window.numBombBP <= 0 && !window.isSetHideBP && (window.isSetHideBP = !0, Laya.timer.once(1e3, this,
									function () {
										this.actionHideBP.play(0, !1),
											Laya.timer.once(500, this,
												function () {
													window.isShowBombBP = !1
												})
									}))
							}
							if (window.isShowBombPaper) {
								window.numBombPaper = 0;
								for (let i = 0; i < window.bombPaperNum; i++) window.bombPapers[i].visible && (window.numBombPaper++, window.bombPapers[i].x += window.bombPapers[i].vx, window.bombPapers[i].vx > 0 ? (window.bombPapers[i].vx -= .5, window.bombPapers[i].vx < 0 && (window.bombPapers[i].vx = 0)) : window.bombPapers[i].vx < 0 && (window.bombPapers[i].vx += .5, window.bombPapers[i].vx > 0 && (window.bombPapers[i].vx = 0)), window.bombPapers[i].y += window.bombPapers[i].vy, window.bombPapers[i].vy += .5, window.bombPapers[i].y > this.height && (window.bombPapers[i].visible = !1));
								0 != window.numBombPaper || window.isShowBombBP || (window.isShowBombPaper = !0)
							}
						}
					}
					startBombBP() {
						window.bombState = 1,
							window.isShowBombPaper = !0
					}
					setBombBP(i) {
						i.visible = !1,
							i.state = 2;
						let e = i.x,
							t = i.y,
							o = 0;
						for (let i = 0; i < window.bombPaperNum; i++) if (!window.bombPapers[i].visible) {
							window.bombPapers[i].visible = !0,
								window.bombPapers[i].x = e,
								window.bombPapers[i].y = t,
								window.bombPapers[i].rotation = 360 * Math.random();
							let s = 10 + 5 * Math.random();
							if (window.bombPapers[i].vx = s * Math.sin(window.bombPapers[i].rotation), window.bombPapers[i].vy = s * Math.cos(window.bombPapers[i].rotation), ++o >= 5) break
						}
					}
					onTry() {
						window.playSound("skill"),
							this.addBP(),
							window.setTipStrAnimation(" 获得一串鞭炮 ", "#ffff00", "#ff0000")
					}
					onTryKun(i) {
						window.playSound("skill"),
							window.setTipStrAnimation(" 『神鲲开局』 ", "#ffff00", "#ff0000"),
							this.fishStartShapeId = i,
							this.createBomb(i, !0)
					}
					onBtnFireBP() {

						this.isTry = !0,
							window.gameState = window.GAME_STATE_PAUSE,
							window.sm.getScene("try", !0)
					}
					addBP(i = !1) {
						this.haveNumBP++,
							i && this.setBombFire(),
							this.updateBtnBP()
					}
					useBP() {
						this.haveNumBP--,
							this.updateBtnBP()
					}
					updateBtnBP() {
						if (this.haveNumBP <= 0) {
							if (this.haveNumBP = 0, null == this.btnBP.filters) {
								let i = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0],
									e = new Laya.ColorFilter(i);
								this.btnBP.filters = [e]
							}
						} else null != this.btnBP.filters && (this.btnBP.filters = null);
						this.fcNumBP.value = this.haveNumBP
					}
					createPpBP() {
						window.ppBPs = [],
							window.numPpBP = 1;
						for (let i = 0; i < window.numPpBP; i++) {
							let i = new Laya.Sprite;
							this.basePpBP.addChild(i);
							let e = new Laya.Sprite;
							e.loadImage("res/iconBP.png"),
								i.addChild(e),
								e.pivotX = 50,
								e.pivotY = 42,
								e.x = e.y = 0,
								e.scaleX = e.scaleY = .7;
							let t = new Laya.Sprite;
							t.loadImage("res/guide1.png"),
								i.addChild(t),
								t.x = t.y = -42,
								i.scaleX = i.scaleY = 1,
								i.action = new Laya.TimeLine,
								i.action.to(i, {
									scaleX: 1.2,
									scaleY: 1.2
								},
									500),
								i.action.to(i, {
									scaleX: 1,
									scaleY: 1
								},
									500),
								i.actionHide = new Laya.TimeLine,
								i.actionHide.to(i, {
									scaleX: 3,
									scaleY: 3,
									alpha: 0
								},
									100),
								i.actionHide.on(Laya.Event.COMPLETE, this,
									function () {
										i.visible = !1,
											this.addBP(!this.isDragon && !this.isYLM),
											window.playSound("skill")
									}),
								window.ppBPs.push(i)
						}
					}
					initPpBP() {
						for (let i = 0; i < window.numPpBP; i++) window.ppBPs[i].visible = !1,
							window.ppBPs[i].action.pause(),
							window.ppBPs[i].state = 0;
						this.addNumPpBP = 0
					}
					createNewPpBP() {
						for (let i = 0; i < window.numPpBP; i++) if (0 == window.ppBPs[i].visible) {
							window.ppBPs[i].state = 0,
								window.ppBPs[i].visible = !0,
								window.ppBPs[i].alpha = 1,
								window.ppBPs[i].scaleX = window.ppBPs[i].scaleY = 1,
								window.ppBPs[i].x = this.width + 80,
								window.ppBPs[i].y = this.height / 4 + Math.random() * this.height / 2,
								window.ppBPs[i].action.play(0, !0);
							break
						}
					}
					runPpBP() {
						if (!window.lead.visible || !window.lead.isAlive) return;
						let i = window.lead.x * this.baseFish.scaleX + window.leadInitX,
							e = window.lead.y * this.baseFish.scaleX + window.leadInitY;
						for (let o = 0; o < window.numPpBP; o++) window.ppBPs[o].visible && 0 == window.ppBPs[o].state && (window.ppBPs[o].x -= (this.moveNowVx + 1) * this.baseBg.scaleX, window.ppBPs[o].x < -80 && (window.ppBPs[o].visible = !1, window.ppBPs[o].action.pause()), t.distance(i, e, window.ppBPs[o].x, window.ppBPs[o].y) < 92 && (window.ppBPs[o].state = 1, window.ppBPs[o].action.pause(), window.ppBPs[o].actionHide.play(0, !1)))
					}
					createHXL() {
						window.ppHXL = [],
							window.numHXL = 1;
						for (let i = 0; i < window.numHXL; i++) {
							let i = new Laya.Sprite;
							this.basePpBP.addChild(i);
							let e = new Laya.Sprite;
							e.loadImage("res/iconHXL.png"),
								e.pivotX = 124,
								e.pivotY = 124,
								i.addChild(e);
							let t = new Laya.Sprite;
							i.addChild(t),
								t.y = -155;
							let o = new Laya.Sprite;
							o.loadImage("res/iconHxlHint.png"),
								o.pivotX = 105,
								o.pivotY = 51,
								t.addChild(o);
							let s = new Laya.TimeLine;
							o.y = 0,
								s.to(o, {
									y: -30
								},
									500),
								s.to(o, {
									y: 0
								},
									500),
								s.play(0, !0),
								i.actionHide = new Laya.TimeLine,
								i.actionHide.to(i, {
									scaleX: 3,
									scaleY: 3,
									alpha: 0
								},
									100),
								i.actionHide.on(Laya.Event.COMPLETE, this,
									function () {
										i.visible = !1
									}),
								i.icon = e,
								window.ppHXL.push(i)
						}
					}
					initHXL() {
						for (let i = 0; i < window.numHXL; i++) window.ppHXL[i].visible = !1,
							window.ppHXL[i].state = 0
					}
					createNewHXL() {
						for (let i = 0; i < window.numHXL; i++) if (0 == window.ppHXL[i].visible) {
							window.ppHXL[i].state = 0,
								window.ppHXL[i].visible = !0,
								window.ppHXL[i].alpha = 1,
								window.ppHXL[i].scaleX = window.ppHXL[i].scaleY = 1,
								window.ppHXL[i].icon.rotation = -1 * t.randomFloat(30, 60),
								window.ppHXL[i].x = this.width + 80,
								window.ppHXL[i].y = this.height / 4 + Math.random() * this.height / 2;
							break
						}
					}
					runHXL() {
						if (!window.lead.visible || !window.lead.isAlive) return;
						let i = window.lead.x * this.baseFish.scaleX + window.leadInitX,
							e = window.lead.y * this.baseFish.scaleX + window.leadInitY;
						for (let o = 0; o < window.numHXL; o++) window.ppHXL[o].visible && 0 == window.ppHXL[o].state && (window.ppHXL[o].x -= (this.moveNowVx + 1) * this.baseBg.scaleX, window.ppHXL[o].x < -130 && (window.ppHXL[o].visible = !1), window.isSetLvState || window.isToGeSiLa || t.distance(i, e, window.ppHXL[o].x, window.ppHXL[o].y) < 170 && (window.ppHXL[o].state = 1, window.ppHXL[o].actionHide.play(0, !1), window.isToGeSiLa = !0, window.isCanControlFish = !1, this.createDragonPP(function () {
							window.sceGame.setDragenShape(window.gslShapeId),
								Laya.timer.once(300, window.sceGame,
									function () {
										window.playSound("geSiLa")
									}),
								window.isShowGSL ? (window.isShowGSL = !1, window.isShowGSLDia = !0, Laya.timer.once(500, window.sceGame,
									function () {
										window.sm.getScene("gsl", !0),
											window.salute(Laya.stage, 30, 4 * Laya.stage.height / 7, 70),
											window.playSound("success0")
									})) : window.sceGame.setDragon()
						})))
					}
					showHintYLM() {
						this.isYLM = !0,
							window.sm.getScene("ylm", !0)
					}
					createColumns() {
						this.columns = [],
							this.columnNum = 4;
						for (let i = 0; i < this.columnNum; i++) {
							let i = new Laya.Image("res/column.png");
							i.sizeGrid = "60,0,80,0",
								i.visible = !1,
								this.baseColumn.addChild(i),
								this.columns.push(i)
						}
						this.columnSpaceX = 0 == window.gameModel ? 700 : 800,
							this.columnW = 147,
							this.baseDoor.y = this.height,
							this.baseDoor.height = 3 * this.height / 4
					}
					initColumns() {
						this.isYLM = !1,
							this.baseColumn.visible = !1;
						for (let i = 0; i < this.columnNum; i++) this.columns[i].visible = !1;
						this.baseDoor.x = this.width + 1e3,
							this.baseDoor.visible = !1
					}
					setColumns(i = !0) {
						this.baseWarn.visible = !1,
							this.baseColumn.visible = !0,
							this.baseColumn.alpha = 1,
							this.clolumnV = (0 == window.gameModel ? 6 : 4) + window.lead.shapeId - (this.fishStartShapeId - 1),
							this.clolumnV > 10 && (this.clolumnV = 10),
							i || (window.reviveNum = window.canReviveNum),
							this.isTop = Math.random() < .5;
						for (let i = 0; i < this.columnNum; i++) this.columns[i].visible = !0,
							this.isTop ? (this.columns[i].scaleY = -1, this.columns[i].anchorY = 1, this.columns[i].y = 0, this.columns[i].height = this.height / 2 - 100) : (this.columns[i].scaleY = 1, this.columns[i].anchorY = 1, this.columns[i].y = this.height, this.columns[i].height = this.height / 2 - 100),
							this.columns[i].isTop = this.isTop,
							this.isTop = !this.isTop,
							this.columns[i].x = this.width + 500 + this.columnSpaceX * i,
							this.columns[i].state = 0;
						this.createColumnNum = this.columnNum,
							this.isCanCreateColumn = !0,
							this.baseDoor.x = this.width + 1e3,
							this.baseDoor.visible = !1,
							this.stateYLM = 0,
							this.targetColumnNum = this.maxColumnNum + window.lead.shapeId + (Math.random() > .5 ? 1 : 0) - (this.fishStartShapeId - 1),
							this.targetColumnNum > 15 && (this.targetColumnNum = 15 + (Math.random() > .5 ? 1 : 0))
					}
					hideFaiColumn() {
						let i = new Laya.TimeLine;
						i.to(this.baseColumn, {
							alpha: 0
						},
							100),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									this.baseColumn.visible = !1;
									for (let i = 0; i < this.columnNum; i++) this.columns[i].x = this.width + 500 + this.columnSpaceX * i,
										this.baseDoor.x = this.width + 1e3
								}),
							i.play(0, !1)
					}
					runColumn() {
						if (this.isYLM && this.baseColumn.visible && window.gameState == window.GAME_STATE_GAME) if (0 == this.stateYLM) {
							let i = window.lead.x * this.baseFish.scaleX + window.leadInitX,
								e = window.lead.y * this.baseFish.scaleX + window.leadInitY,
								t = window.fishBaseH - 20,
								o = 1e4,
								s = 0,
								n = 0,
								a = 0;
							for (let w = 0; w < this.columnNum; w++) this.isCanMove && (this.columns[w].x -= this.clolumnV),
								o = this.columns[w].x,
								a = this.columns[w].height - 40,
								n = 100,
								s = this.columns[w].y - a * (this.columns[w].isTop ? 0 : 1),
								this.isCollision(i, e, t, o, s, n, a) && window.gameState != window.GAME_STATE_REVIVE && this.setToRevive("fail"),
								this.columns[w].x < -this.columnW && (this.isCanCreateColumn ? (this.columns[w].x += this.columnNum * this.columnSpaceX, this.columns[w].height = this.height / 2 + 50 + (0 == window.gameModel ? 50 : 10) * Math.random(), window.gameState == window.GAME_STATE_GAME && this.createColumnNum++, this.createColumnNum >= this.targetColumnNum && (this.isCanCreateColumn = !1, this.createDoor())) : this.columns[w].visible = !1);
							this.baseDoor.visible && (this.isCanMove && (this.baseDoor.x -= this.clolumnV), o = this.baseDoor.x + 10, a = this.baseDoor.height, n = 100, s = this.baseDoor.y - a, this.isCollision(i, e, t, o, s, n, a) && window.gameState != window.GAME_STATE_REVIVE && this.setToRevive("fail"), o = o + this.rectCollision.x + 10, s += this.rectCollision.y, n = this.rectCollision.width, a = this.rectCollision.height, this.isCollision(i, e, t, o, s, n, a) && window.gameState != window.GAME_STATE_REVIVE && this.setToRevive("fail"), this.baseDoor.x < window.leadInitX - (this.baseDoor.width + 150) && window.isCanControlFish && window.gameState == window.GAME_STATE_GAME && (window.isCanControlFish = !1, this.isDown = !1, this.toY = 0), this.baseDoor.x < -(this.baseDoor.width + 150) && window.gameState == window.GAME_STATE_GAME && (this.stateYLM = 1))
						} else 1 == this.stateYLM && Math.abs(window.lead.y) < 200 && (this.stateYLM = 2, this.createDragonPP(function () {
							window.sceGame.setDragenShape(window.dragonShapeId),
								window.isShowDiaDragon ? (window.isShowDiaDragon = !1, Laya.timer.once(500, window.sceGame,
									function () {
										window.sceGame.baseColumn.visible = !1,
											window.sm.getScene("dragon", !0),
											window.salute(Laya.stage, 30, 4 * Laya.stage.height / 7, 70),
											window.playSound("success0")
									})) : (window.playMusic("bgm1"), window.sceGame.setDragon())
						}))
					}
					isCollision(i, e, t, o, s, n, a) {
						if (i > o && i < o + n && e > s && e < s + a) return !0;
						let w = i + t,
							d = e;
						return w > o && w < o + n && d > s && d < s + a || (d = e + t, (w = i) > o && w < o + n && d > s && d < s + a || (d = e - t, (w = i) > o && w < o + n && d > s && d < s + a))
					}
					createDoor() {
						let i = 0;
						for (let e = 0; e < this.columnNum; e++) this.columns[e].x > i && (i = this.columns[e].x);
						this.baseDoor.visible = !0,
							this.baseDoor.x = i + this.columnSpaceX + 200
					}
					setDragenShape(i) {
						this.isDragon = !0;
						let e = window.lead.shapeId;
						this.superShapeId = i,
							window.fishs[this.superShapeId][0].x = window.lead.x,
							window.fishs[this.superShapeId][0].y = window.lead.y,
							window.fishs[this.superShapeId][0].rotation = window.lead.rotation,
							window.lead && window.lead.setRecovery(),
							window.lead = window.fishs[this.superShapeId][0],
							window.lead.shapeId = this.superShapeId,
							window.lead.initValue(!0),
							window.lead.visible = !0,
							window.platform.reportAnalytics("lead_upgrade", {
								lv: "" + this.superShapeId
							}),
							0 != this.superColor && (this.setSuperColor(this.superColor), window.lead.isSuperState = !0),
							window.lead.shapeId = e
					}
					createDragonPP(i = null) {
						Laya.timer.once(300, this,
							function () {
								i && i()
							}),
							window.playSound("chestPoof");
						let e = window.lead.x * this.baseFish.scaleX + window.leadInitX,
							t = window.lead.y * this.baseFish.scaleX + window.leadInitY,
							o = new Laya.Sprite;
						this.addChild(o),
							o.pos(e, t),
							Laya.timer.once(3e3, this,
								function () {
									o.removeSelf(),
										o.destroy()
								});
						for (let i = 0; i < 100; i++) {
							let i = new Laya.Sprite;
							i.loadImage("res/bomb.png"),
								i.pivot(28, 28),
								i.scale(0, 0),
								o.addChild(i);
							let e = 200 * Math.random() * (Math.random() > .5 ? 1.5 : -1.5),
								t = 200 * Math.random() * (Math.random() > .5 ? 1.5 : -1.5),
								s = 200 + 80 * Math.random(),
								n = 3 + .2 * Math.random(),
								a = new Laya.TimeLine;
							a.to(i, {
								x: e,
								y: t,
								scaleX: n,
								scaleY: n
							},
								s, null, 100 * Math.random()),
								a.to(i, {
									scaleX: 0,
									scaleY: 0
								},
									s),
								a.play(0, !1)
						}
					}
					setDragon() {
						window.isCanControlFish = !0,
							this.isYLM = !1,
							this.isDragon = !0,
							this.timeDragonStart = window.timeNow,
							this.isRecoveryShape = !1,
							window.lead.playAction(0),
							this.fcTime.value = this.dragonTimeShow = this.dragonTimeTo = 15,
							this.fcTime.scaleX = this.fcTime.scaleY = .5,
							this.baseTime.visible = !0,
							this.baseTime.alpha = 0;
						let i = new Laya.TimeLine;
						i.to(this.baseTime, {
							alpha: 1
						},
							200),
							i.play(0, !1)
					}
					runDragon() {
						if (!this.isDragon) return;
						let i = window.timeNow - this.timeDragonStart;
						if (i > window.maxTimeDragton && !this.isRecoveryShape && (window.reviveNum = window.canReviveNum, this.isRecoveryShape = !0, this.createDragonPP(function () {
							window.sceGame.setLeadShape(window.lead.shapeId),
								window.sceGame.setSuperState(),
								window.sceGame.timeSuperStart -= window.timeSpaceSuper / 2,
								Laya.timer.once(200, this,
									function () {
										let i = new Laya.TimeLine;
										i.to(window.sceGame.baseTime, {
											alpha: 0
										},
											200),
											i.play(0, !1)
									}),
								Laya.timer.once(500, this,
									function () {
										window.sceGame.isDragon = !1,
											window.isToGeSiLa = !1,
											window.playMusic("bgm1")
									})
						})), this.baseTime.visible && (this.dragonTimeTo = Math.ceil((window.maxTimeDragton - i) / 1e3), this.dragonTimeShow != this.dragonTimeTo && this.dragonTimeTo >= 0)) {
							this.dragonTimeShow = this.dragonTimeTo,
								this.dragonTimeShow < 4 && this.dragonTimeShow;
							let i = new Laya.TimeLine;
							i.to(this.fcTime, {
								scaleX: .6,
								scaleY: .6
							},
								50),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										this.fcTime.value = this.dragonTimeShow;
										let i = new Laya.TimeLine;
										i.to(this.fcTime, {
											scaleX: .5,
											scaleY: .5
										},
											50),
											i.play(0, !1)
									}),
								i.play(0, !1)
						}
					}
					createYuLei() {
						this.yuLei = window.yuLei,
							this.yuLei.visible = !1,
							this.baseYuLei.addChild(this.yuLei)
					}
					initYuLei() {
						this.yuLei.visible = !1,
							this.isYuLei = !1,
							this.normalEatFishNum = 0,
							this.yuLeiNumContinue = 0,
							this.yuLeiContinueLv = 0,
							this.yuLeiPos = t.randomInt(0, 3)
					}
					createNewYuLei() {
						if (window.lead.isSuperState || window.isToGeSiLa || window.isShowBombBP || this.isTry || this.isYLM || this.isDragon || this.yuLeiNumContinue <= 0 || window.gameState != window.GAME_STATE_GAME || !window.isCanControlFish || !window.lead.visible || !window.lead.isAlive) return void (this.isYuLei = !1);
						let i = 0;
						do {
							i = t.randomInt(0, 3)
						} while (i == this.yuLeiPos);
						this.yuLeiPos = i,
							this.showYuLeiWarn()
					}
					fireYuLei() {
						!(window.lead.isSuperState || window.isToGeSiLa || window.isShowBombBP || this.isTry || this.isYLM || this.isDragon || this.yuLeiNumContinue <= 0 || window.gameState != window.GAME_STATE_GAME) && window.isCanControlFish && window.lead.visible && window.lead.isAlive ? (this.yuLeiNumContinue--, this.yuLei.x = this.width + 1e3, this.yuLei.y = this.warnRect.y, this.yuLei.visible = !0) : this.isYuLei = !1
					}
					runYuLei() {
						if (this.yuLei.visible) if (this.yuLei.x -= 30, this.yuLei.x < -500) this.yuLei.visible = !1,
							this.yuLeiNumContinue <= 0 && this.isYuLei ? (this.yuLei.visible = !1, this.isYuLei = !1) : this.createNewYuLei();
						else if (this.isYuLei) {
							let i = window.lead.x * this.baseFish.scaleX + window.leadInitX,
								e = window.lead.y * this.baseFish.scaleX + window.leadInitY,
								o = window.lead.bodyR * this.baseFish.scaleX,
								s = 115,
								n = 290,
								a = 248,
								w = !1;
							if (e > this.yuLei.y - s - o && e < this.yuLei.y + s + o && i > this.yuLei.x - n - o && i < this.yuLei.x + a + o ? w = !0 : t.distance(i, e, this.yuLei.x - n, this.yuLei.y) < o + s && (w = !0), w) {
								this.isYuLei = !1,
									this.yuLeiNumContinue = 0,
									this.isReviveYuLei = !0,
									this.setToRevive("fail"),
									this.baseWarn.visible = !0,
									this.baseWarn.alpha = 1,
									this.warnRect.visible = !1,
									this.warnBigFishTxt.visible = !1,
									this.warnYuLeiTxt.visible = !1,
									this.warnBg.visible = !0,
									this.warnBg.alpha = 0;
								let i = new Laya.TimeLine;
								i.to(this.warnBg, {
									alpha: 1
								},
									200, Laya.Ease.expoInOut),
									i.to(this.warnBg, {
										alpha: 0
									},
										500),
									i.on(Laya.Event.COMPLETE, this, () => {
										this.baseWarn.visible = !1
									}),
									i.play(0, !1);
								let e = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
									t = new Laya.ColorFilter(e);
								window.lead.skeleton.filters = [t]
							}
						}
					}
					setYuLeiRevive() {
						window.playMusic("bgm1"),
							window.playSound("skill"),
							this.setLeadShape(window.lead.shapeId, !0),
							this.setSuperState(),
							window.lead.x = window.mapLeftX - window.lead.bodyW / 2 - 10;
						let i = new Laya.TimeLine;
						i.to(window.lead, {
							x: 0
						},
							500, Laya.Ease.expoOut),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									window.gameState = window.GAME_STATE_GAME
								}),
							i.play(0, !1),
							this.isDown = !1,
							this.toY = this.fromY = 0,
							0 == window.gameModel && window.adGameShow
					}
					showYuLeiWarn() {
						if (this.baseWarn.visible || this.yuLei.visible) return;
						this.baseWarn.visible = !0,
							this.baseWarn.alpha = 1,
							this.warnRect.visible = !0,
							this.warnRect.alpha = 1,
							this.warnRect.x = this.warnRectOutX,
							this.warnRect.y = this.height / 3 * this.yuLeiPos + this.height / 6,
							this.warnRect.scaleX = this.warnRect.scaleY = 1,
							this.warnBigFishTxt.visible = !1,
							this.warnYuLeiTxt.visible = !0,
							this.warnYuLeiTxt.x = this.warnTxtOutX,
							this.warnYuLeiTxt.y = this.warnRect.y,
							this.warnYuLeiTxt.scaleX = this.warnYuLeiTxt.scaleY = 1,
							this.warnBg.width = 820,
							this.warnBg.alpha = 0,
							window.playSound("sou");
						let i = new Laya.TimeLine;
						i.to(this.warnRect, {
							x: this.warnRectInX
						},
							100, Laya.Ease.backOut),
							i.on(Laya.Event.COMPLETE, this,
								function () {
									this.warnPlayNum = 0,
										this.playYuLeiWarnAction()
								}),
							i.play(0, !1);
						let e = new Laya.TimeLine;
						e.to(this.warnYuLeiTxt, {
							x: this.warnTxtInX
						},
							100, Laya.Ease.backOut),
							e.play(0, !1)
					}
					playYuLeiWarnAction() {
						if (window.gameState != window.GAME_STATE_GAME && window.gameState != window.GAME_STATE_PAUSE) return void (this.baseWarn.visible = !1);
						let i = 0 == this.warnPlayNum ? 398 : 1e3,
							e = new Laya.TimeLine;
						e.to(this.warnYuLeiTxt, {
							scaleX: 1.25,
							scaleY: 1.25
						},
							100, null, i),
							e.on(Laya.Event.COMPLETE, this,
								function () {
									window.gameState == window.GAME_STATE_GAME && !window.isAppHide && this.baseWarn.visible && window.playSound("warn");
									let i = new Laya.TimeLine;
									i.to(this.warnBg, {
										alpha: 1
									},
										50, null, 1e3),
										i.play(0, !1);
									let e = new Laya.TimeLine;
									e.to(this.warnYuLeiTxt, {
										scaleX: 1,
										scaleY: 1
									},
										50, Laya.Ease.backOut),
										e.on(Laya.Event.COMPLETE, this,
											function () {
												if (this.warnPlayNum++, this.warnPlayNum >= 3) {
													window.gameState == window.GAME_STATE_GAME && !window.isAppHide && this.baseWarn.visible && window.playSound("warn");
													let i = new Laya.TimeLine;
													i.to(this.warnBg, {
														alpha: 0,
														width: 820
													},
														1e3),
														i.play(0, !1);
													let e = new Laya.TimeLine;
													e.to(this.baseWarn, {
														alpha: 0
													},
														1e3),
														e.on(Laya.Event.COMPLETE, this,
															function () {
																this.baseWarn.visible = !1,
																	this.fireYuLei()
															}),
														e.play(0, !1)
												} else {
													let i = new Laya.TimeLine;
													i.to(this.warnBg, {
														alpha: .5,
														width: 820
													},
														1e3),
														i.play(0, !1),
														this.playYuLeiWarnAction()
												}
											}),
										e.play(0, !1)
								}),
							e.play(0, !1);
						let t = new Laya.TimeLine;
						t.to(this.warnBg, {
							alpha: 1,
							width: this.width
						},
							150, null, i),
							t.play(0, !1)
					}
					setGoldRewardHint(i) {
						if (this.fcEatHintNum.alpha = 1, i <= 3) {
							this.stepReward = i;
							let e = window.user.data.fishMaxLv - 4 + i;
							if (e < 1 && (e = 1), this.targetGoldNum = window.fishData[e].money, this.eatFishTarget = 5 + 10 * i, this.eatFishReward = 0, this.fcEatHintNum.visible) {
								this.fcEatHintNum.scaleX = this.fcEatHintNum.scaleY = .5;
								let i = new Laya.TimeLine;
								i.to(this.fcEatHintNum, {
									scaleX: 10
								},
									50),
									i.on(Laya.Event.COMPLETE, this,
										function () {
											this.eatFishRewardShow += this.targetGoldNum,
												this.fcRewardGold.value = t.getShowNum(this.eatFishRewardShow),
												this.fcEatHintNum.value = this.eatFishTarget;
											let i = new Laya.TimeLine;
											i.to(this.fcEatHintNum, {
												scaleX: .5
											},
												50),
												i.play(0, !1)
										}),
									i.play(0, !1)
							} else {
								this.fcEatHintNum.visible = !0,
									this.eatFishRewardShow += this.targetGoldNum,
									this.fcRewardGold.value = t.getShowNum(this.eatFishRewardShow),
									this.fcEatHintNum.value = this.eatFishTarget,
									this.fcEatHintNum.scaleX = 10;
								let i = new Laya.TimeLine;
								i.to(this.fcEatHintNum, {
									scaleX: .5
								},
									100),
									i.play(0, !1)
							}
						} else {
							this.eatFishTarget = 1e5;
							let i = new Laya.TimeLine;
							i.to(this.fcEatHintNum, {
								scaleX: 10,
								alpha: 0
							},
								100),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										this.fcEatHintNum.visible = !1
									}),
								i.play(0, !1)
						}
					}
					setGoldRewardAction(i) {
						this.fcEatHintNum.scaleX = this.fcEatHintNum.scaleY = .5;
						let e = new Laya.TimeLine;
						e.to(this.fcEatHintNum, {
							scaleX: .6,
							scaleY: .6
						},
							100),
							e.to(this.fcEatHintNum, {
								scaleX: .5,
								scaleY: .5
							},
								50),
							e.on(Laya.Event.COMPLETE, this,
								function () {
									this.fcEatHintNum.value = i
								}),
							e.play(0, !1)
					}
					onCloseOppoAd(i) { }
				}
			},
			main: {
				res: "SceneMain",
				code: class extends e {
					constructor(i) {
						if (super(Laya.View.uiMap[i]), window.isTestFish = !1, window.isTestFish) {
							this.baseBottomY = 0;
							let i = function (i) {
								window.fishs[i][0].removeSelf(),
									this.baseTestFish.addChild(window.fishs[i][0]),
									window.fishs[i][0].setFlip(),
									window.fishs[i][0].visible = !0,
									this.spaceH = 240,
									window.fishs[i][0].x = this.width / 2,
									window.fishs[i][0].y = this.spaceH / 2 + this.spaceH * i - 0 * this.spaceH,
									i != window.dragonShapeId && i != window.gslShapeId || (window.fishs[i][0].y += this.spaceH, this.baseBottomY = window.fishs[i][0].y - this.height + 300),
									window.fishs[i][0].scaleX = window.fishs[i][0].scaleY = this.scaleTest / window.fishs[i][0].fishScale
							}.bind(this);
							this.scaleTest = 1;
							for (let e = 0; e < window.fishData.length; e++) i(e);
							this.isTestDown = !1;
							let e = function () {
								this.isTestDown = !0,
									this.testPy = this.baseTestFish.y,
									this.testDownY = Laya.stage.mouseY
							}.bind(this),
								o = function () {
									this.isTestDown = !1
								}.bind(this),
								s = function () {
									this.isTestDown && (this.baseTestFish.y = this.testPy + (Laya.stage.mouseY - this.testDownY), this.baseTestFish.y > 100 ? this.baseTestFish.y = 100 : this.baseTestFish.y < -this.baseBottomY && (this.baseTestFish.y = -this.baseBottomY))
								}.bind(this);
							this.panelTestFish.width = this.width,
								this.panelTestFish.height = this.height,
								this.panelTestFish.on(Laya.Event.MOUSE_DOWN, this, e),
								this.panelTestFish.on(Laya.Event.MOUSE_UP, this, o),
								this.panelTestFish.on(Laya.Event.MOUSE_OUT, this, o),
								this.panelTestFish.on(Laya.Event.MOUSE_MOVE, this, s),
								t.setButtonEvent(this.btnTestMove, this,
									function () {
										for (let i = 0; i < window.fishs.length; i++) window.fishs[i][0].playAction(0)
									}),
								t.setButtonEvent(this.btnTestChi, this,
									function () {
										for (let i = 0; i < window.fishs.length; i++) window.fishs[i][0].playAction(1)
									})
						} else this.panelTestFish.removeSelf();
						window.isOV && (t.setAction(0, this.iconAdHint, !0, null, null, 1.2), t.setAction(1, this.imgBtnShow, !0), this.baseOppoAdMain.y = this.height),
							this.isShowBarnnerAd = !0,
							this.bg.height = this.height,
							this.basePool.width = this.width,
							this.basePool.height = this.height,
							this.txtBtnClass.skin = "res/fnt_class" + (window.isOV && !window.isVV ? "" : "_1") + ".png",
							this.btnNotice.x = this.btnRank.x = this.btnMoreGame.x = 80,
							this.btnFishList.x = this.btnDesk.x = this.width - 80,
							this.baseAuthor.visible = !1,
							this.baseAuthor.width = this.width,
							this.baseAuthor.height = this.height,
							this.bgAuthor.y = this.height / 2,
							this.iconLoad.y = this.height / 2,
							window.baseHand = this.baseHand,
							window.actionHand = this.actionHand,
							this.baseFishUiBottom.visible = this.baseFishUiTop.visible = !1,
							this.baseOppoAdPool.visible = window.isOV,
							this.baseOppoAdPool.visible && (this.baseOppoAdPool.y = this.height),
							this.btns = [this.btnHome, this.btnLvAdd, this.btnBuyFish, this.btnShow1, this.btnRank, this.btnMoreGame, this.btnFishList, this.btnDesk],
							window.recoveryw = this.recoreyRect.width + 40,
							window.recoveryh = this.recoreyRect.height + 40,
							window.recoveryx = this.baseBottom.x + this.baseRecovery.x + this.recoreyRect.x - 20,
							t.setAction(2, this.iconLvAdd, !0),
							window.fishPoolToY = 120;
						let e = 750 / Laya.Browser.clientWidth;
						window.authorBtnX = (this.bgAuthor.x - this.bgAuthor.width / 2 + this.btnEnter.x - this.btnEnter.width / 2) / e,
							window.authorBtnY = (this.bgAuthor.y - this.bgAuthor.height / 2 + this.btnEnter.y - this.btnEnter.height / 2) / e,
							window.authorBtnW = this.btnEnter.width / e,
							window.authorBtnH = this.btnEnter.height / e,
							window.goldActionToX = this.baseValue.x + this.bgGold.x + this.iconGold.x,
							window.goldActionToY = this.baseValue.y + this.bgGold.y + this.iconGold.y,
							window.goldActionScaleX = this.iconGold.width / 179,
							window.goldActionScaleY = this.iconGold.height / 184,
							t.setButtonEvent(this.btnClass, this, this.onStartGame, 1.05, 1.05, [0]),
							this.btnPeople.visible = window.isOV && !window.isVV || "tt" == window.plat,
							this.btnPeople.visible && t.setButtonEvent(this.btnPeople, this, this.onStartGame, 1.05, 1.05, [1]),
							t.setButtonEvent(this.btnFishPool, this,
								function () {

									window.isShowPoolHelp = window.user.data.isFishPoolFirst,
										this.hideMainBtn(),
										this.showFishPoolUi()
								}),
							t.setButtonEvent(this.btnBuyFish, this,
								function () {
									window.fishPool.onBtnBuyFish()
								}),
							t.setButtonEvent(this.btnLvAdd, this,
								function () {
									if (window.isShowPoolHelp) return;
									let i = window.user.getPoolAddNeedMoney(window.user.data.poolLv);
									if (window.user.data.money < i) {
										let i = this.baseBottom.x + this.btnLvAdd.x,
											e = this.baseBottom.y + this.btnLvAdd.y - 70;
										window.playSound("error"),
											Laya.timer.once(200, this,
												function () {
													window.sm.getScene("freeGold", !0)
												}),
											window.sceMain.hideFishPoolUi(),
											window.gameState = window.GAME_STATE_POOL
									} else window.user.moneyChange(- i, !1),
										window.user.poolLvChange(window.user.data.poolLv + 1)
								}),
							t.setButtonEvent(this.btnHome, this,
								function () {
									window.isShowPoolHelp || (this.hideFishPoolUi(), this.showMainBtn())
								}),
							this.btnSetting.visible = !1,
							this.btnSetting.x = -1e3,
							this.btnSetting.y = 150,
							"op" == window.plat && t.setButtonEvent(this.btnSetting, this,
								function () {
									let i = -1;
									window.gameInfo.checkCameraAuthorize(function (e) {
										i = e;
										let t = -1;
										window.gameInfo.cameraAuthorize(function (e) {
											window.authorizeState = t = e,
												i != t && (1 == t ? window.showToast("【相机】已开启") : 2 == t && window.showToast("【相机】已关闭"))
										})
									})
								}),
							this.btnRank.visible && t.setButtonEvent(this.btnRank, this,
								function () {

									window.user.data.authorize ? window.sm.getScene("rank", !0) : "op" == window.plat ? (this.baseAuthor.visible = !0, this.bgAuthor.visible = !1, this.iconLoad.visible = !0, window.gameInfo.checkUserInfoAuthorize(function (i) {
										1 == i ? (window.sceMain.baseAuthor.visible = !1, window.sm.getScene("rank", !0, !0)) : (this.showAuthorHintUI(2), window.showToast("授权失败"))
									})) : "wx" == window.plat ? window.platform.getSetting(i => {
										1 == i ? window.sm.getScene("rank", !0) : (this.showAuthorHintUI(2), 2 == i && this.showAuthorizeBtn())
									}) : this.showAuthorHintUI(2)
								}),
							this.btnDesk.visible = !1,
							window.isOV && (t.setButtonEvent(this.btnDesk, this, this.createDesk), t.setAction(0, this.iconPoint, !0, null, null, 1.2), -1 != window.desktopState ? this.setDesktopIconState(1 == window.desktopState) : window.platform.getDesktopIconState(function (i) {
								window.sceMain.setDesktopIconState(i)
							})),
							t.setButtonEvent(this.btnNotice, this,
								function () {
									window.sm.getScene("notice", !0)
								}),
							t.setButtonEvent(this.btnFishList, this,
								function () {

									window.sm.getScene("fishs", !0)
								}),
							window.btnPortalAd = this.btnMoreGame,
							this.btnMoreGame.visible = window.miniGameShow && window.isOV && !window.isVV && window.isShowBtnPortalAd,
							this.btnMoreGame.visible && t.setButtonEvent(this.btnMoreGame, this,
								function () {
									"pc" == window.plat ? console.log("显示更多游戏") : "op" == window.plat && window.portalEvent.event("portal")
								}),
							t.setAction(1, this.iconHint, !0),
							t.setButtonEvent(this.btnEnter, this,
								function () {
									2 == this.authorType ? (this.bgAuthor.visible = !1, this.iconLoad.visible = !0, window.gameInfo.checkUserInfoAuthorize(function (i) {
										1 == i ? (window.sceMain.baseAuthor.visible = !1, window.sm.getScene("rank", !0, !0)) : (window.sceMain.bgAuthor.visible = !0, window.sceMain.iconLoad.visible = !1, window.showToast("授权失败"), 2 == i && this.showAuthorizeBtn())
									})) : 1 == this.authorType && (this.bgAuthor.visible = !1, this.iconLoad.visible = !0, "tt" == window.plat ? 0 == window.authorizeState ? window.gameInfo.cameraAuthorize(function (i) {
										1 == i ? window.sceMain.createCamera() : (window.sceMain.bgAuthor.visible = !0, window.sceMain.iconLoad.visible = !1, window.showToast("授权失败"))
									}) : window.gameInfo.openSetting("scope.camera",
										function (i) {
											1 == i ? (window.authorizeState = 1, window.sceMain.createCamera()) : (window.sceMain.bgAuthor.visible = !0, window.sceMain.iconLoad.visible = !1, window.showToast("授权失败"))
										}) : "op" == window.plat && (0 == window.authorizeState ? this.createCamera() : window.gameInfo.cameraAuthorize(function (i) {
											1 == i ? window.sceMain.createCamera() : (window.showToast("【相机】授权失败"), window.sceMain.baseAuthor.visible = !0, window.sceMain.bgAuthor.visible = !0, window.sceMain.iconLoad.visible = !1)
										})))
								}),
							t.setButtonEvent(this.btnCancel, this,
								function () {
									this.hideAuthorHintUI(),
										window.platform.showMoreGameBtn()
								}),
							this.btnTest.visible = window.isDebugModel,
							this.btnTest.visible && (this.btnTest.y = this.baseValue.y + 120, t.setButtonEvent(this.btnTest, this,
								function () {
									Laya.LocalStorage.clear(),
										window.setTipStrAnimation("存档已清除！", "#ff0000", "#ffffff")
								})),
							this.count = 0,
							this.count1 = 0,
							this.randStop = 0,
							this.ppX = 0,
							this.ppY = 0,
							window.playGameNum = 0,
							window.fishPool = new n(this.basePool, this.bg),
							this.isStartRun = !0
					}
					createDesk(i = !1) {
						window.playInterAd();
						window.platform.createDesktopIcon(function (i) {

						})
					}
					setDesktopIconState(i) {
						i ? (this.isShowDesktop = !1, this.btnDesk.visible = !1) : (this.isShowDesktop = !0, this.btnDesk.visible = !1)
					}
					setDesktopIconState(i) {
						i ? (this.isShowDesktop = !1, this.btnDesk.visible = !1) : (this.isShowDesktop = !0, this.btnDesk.visible = !1)
					}
					setHand(i, e, t) {
						window.baseHand.parent != i && (window.baseHand.removeSelf(), window.baseHand.x = e, window.baseHand.y = t, i.addChild(window.baseHand)),
							window.baseHand.visible = !0,
							window.baseHand.alpha = 1,
							window.actionHand.play(0, !0)
					}
					createCamera() {
						if ("pc" == window.plat) return window.sm.getScene("game", !1, !1).createCamera(),
							void window.sceMain.openScene("game");
						window.sceGame && window.sceGame.camera && window.sceGame.camera.removeFromGame(),
							window.camera && window.camera.destroy(),
							window.camera = window["tt" == window.plat ? "tt" : "qg"].createCamera(),
							window.sceMain.setSettingBtn(!0);
						let i = function (i) {
							window.video = i,
								window.sm.getScene("game", !1, !1).createCamera(),
								window.sceMain.openScene("game")
						},
							e = function (i) {
								window.sceGame && window.sceGame.camera && window.sceGame.camera.removeFromGame(),
									window.camera && window.camera.destroy(),
									window.authorizeState = 2,
									window.sceMain.showAuthorHintUI(1),
									window.showToast("【相机】授权失败")
							};
						"tt" == window.plat ? window.camera.start("front", !0).then(e => {
							i(e)
						}).
							catch(i => {
								e()
							}) : window.camera.start({
								previewSize: window.cameraSizes[window.cameraSzieIndex]
							}).then(e => {
								i(e)
							}).
								catch(i => {
									e()
								})
					}
					onStartGame(i) {

						window.gameModel = i,
							0 == i ? this.openScene("game") : window.gameInfo.checkCameraAuthorize(function (i) {
								window.authorizeState = i,
									window.sceMain.setSettingBtn(),
									1 == i ? window.sceMain.createCamera() : window.sceMain.showAuthorHintUI(1)
							})
					}
					showAuthorHintUI(i) {
						this.authorType = i,
							this.txtInfo0.visible = 2 == i,
							this.txtInfo1.visible = 1 == i,
							this.baseAuthor.visible = !0,
							this.bgAuthor.visible = !0,
							this.iconLoad.visible = !1,
							window.platform.hideMoreGameBtn()
					}
					showAuthorizeBtn() {
						window.btnAuthorize || window.platform.showAuthorizeBtn(function (i) {
							1 == i ? (window.sceMain.baseAuthor.visible = !1, window.sm.getScene("rank", !0, !0)) : (window.sceMain.bgAuthor.visible = !0, window.sceMain.iconLoad.visible = !1, window.showToast("授权失败"))
						})
					}
					hideAuthorHintUI() {
						this.baseAuthor.visible = !1,
							"wx" == window.plat && window.platform.hideAuthorizeBtn()
					}
					onEnable() {
						window.gameState = this.baseBtnMain.visible ? window.GAME_STATE_MAIN : window.GAME_STATE_POOL,
							window.nativeAdSceneId = this.baseBtnMain.visible ? 0 : 1,
							window.fishPool.init(),
							window.user.moneyChange(0, !1),
							window.user.poolLvChange(window.user.data.poolLv, !1),
							window.user.fishMaxLvChange(window.user.data.fishMaxLv, !1),
							this.bg.skin = "res/bgMenu.jpg",
							this.btnTopY = this.btnClass.y = this.height * (this.btnPeople.visible || window.isOV ? 4 : 5) / 7,
							this.reSetUI(),
							window.isCanControlFish = !0,
							window.isShowNotic ? (window.isShowNotic = !1, window.sm.getScene("notice", !0)) : window.playMusic("bgm0"),
							this.hideAuthorHintUI(),
							this.setSettingBtn(),
							this.createPP(),
							window.playGameNum >= window.hintDeskNum && window.platform.getDesktopIconState(function (i) {
								i || (window.sceMain.createDesk(!0), window.sceMain.setDesktopIconState(i))
							}),
							this.isStartRun && (this.isStartRun = !1, this.runNum = 0, Laya.timer.loop(1e3 / 60, this, this.run))
					}
					reSetUI() {
						let i = this.btnClass.y = this.btnTopY - (0 == window.bannerH ? 0 : 50),
							e = 140 + (this.btnPeople.visible ? 0 : 30);
						window.oppoAdData ? (i += e, this.btnFishPool.y = i, i += e, this.btnPeople.y = i, this.btnPeople.visible && (i += e), this.btnShow.y = -this.height + i) : (0 == window.bannerH && (e += 20), i += e, this.btnFishPool.y = i, this.btnPeople.visible && (i += e), this.btnPeople.y = i),
							this.baseOppoAdPool.visible ? this.baseBottom.y = this.baseFishUiBottom.y = this.height - 234 : this.baseBottom.y = this.baseFishUiBottom.y = this.height - window.bannerH - (0 == window.bannerH ? 200 : 130),
							window.recoveryy = this.baseBottom.y + this.baseRecovery.y + this.recoreyRect.y - 20,
							window.fishPoolBottomY = this.baseBottom.y + this.btnBuyFish.y - this.btnBuyFish.height / 2,
							this.btnRank.y = this.btnFishList.y = this.btnClass.y,
							this.btnDesk.y = this.btnMoreGame.y = this.btnPeople.y,
							this.btnNotice.y = this.btnRank.y - e,
							window.isShowNotic || (this.btnNotice.visible = !1),
							this.btnRank.visible = false,
							this.btnRank.visible || (this.btnNotice.visible ? this.btnNotice.y = this.btnRank.y : this.btnMoreGame.y = this.btnRank.y)
					}
					setSettingBtn(i = !1) {
						(1 == window.authorizeState || 2 == window.authorizeState || i) && (this.btnSetting.visible = !0)
					}
					onDisable() {
						window.platform.hideMoreGameBtn(),
							Laya.loader.clearRes("res/bgMenu.jpg"),
							this.bg.skin = ""
					}
					setPPXY() {
						let i = 100 * Math.random() % 10;
						i < 1 ? (this.ppX = this.btnClass.x, this.ppY = this.btnClass.y) : i < 2 ? (this.ppX = this.btnPeople.x, this.ppY = this.btnPeople.y) : i < 3 ? (this.ppX = 80, this.ppY = this.btnClass.y) : i < 4 ? (this.ppX = this.width - 80, this.ppY = this.btnClass.y) : i < 5 ? (this.ppX = 80, this.ppY = this.btnPeople.y) : i < 6 ? (this.ppX = this.width - 80, this.ppY = this.btnPeople.y) : (this.ppX = 50 + 1e3 * Math.random() % Laya.stage.width, this.ppY = Laya.stage.height / 5 * 4 + 1e3 * Math.random() % (Laya.stage.width / 5))
					}
					run() {
						window.isOV ? window.runOppoAd() : window.timeNow = (new Date).getTime(),
							window.gameState != window.GAME_STATE_MAIN && window.gameState != window.GAME_STATE_POOL || (++this.count > 60 && (this.count = 0, this.count1 = 0, this.randStop = 100 * Math.random() % 6, this.setPPXY()), this.count1 < 5 + this.randStop && this.count % 2 == 0 && (this.setMovePP(this.ppX, this.ppY, 20 * this.count1 - 100, 1), this.count1++), this.runPP()),
							window.fishPool.run()
					}
					createPP() {
						let i = new Laya.Sprite;
						this.addChild(i),
							i.zOrder = 10,
							this.pps = [];
						for (let e = 0; e < 200; e++) {
							let e = new Laya.Sprite;
							i.addChild(e),
								e.loadImage("res/pp.png"),
								e.pivotX = 10,
								e.pivotY = 10,
								e.visible = !1;
							let t = {
								pp: e,
								vx: 0,
								vy: 0
							};
							this.pps.push(t)
						}
					}
					setMovePP(i, e, t, o) {
						for (let t = this.pps.length - 1; t >= 0; t--) if (0 == this.pps[t].pp.visible) {
							let s = this.pps[t].pp;
							s.visible = !0,
								s.alpha = 0,
								this.pps[t].vx = 0,
								this.pps[t].vy = o,
								s.scaleX = s.scaleY = 1,
								s.x = i,
								s.y = e;
							let n = new Laya.TimeLine;
							n.to(s, {
								scaleX: 1,
								scaleY: 1,
								alpha: 1
							},
								100),
								n.to(s, {
									x: i - 50 + 100 * Math.random(),
									y: e - 30 + 60 * Math.random(),
									scaleX: 2,
									scaleY: 2
								},
									400),
								n.to(s, {
									y: 0,
									scaleX: 0,
									scaleY: 0,
									alpha: 0
								},
									2e3 + 2e3 * Math.random(), null, 100),
								n.on(Laya.Event.COMPLETE, this,
									function () {
										s.visible = !1
									}),
								n.play(0, !1);
							break
						}
					}
					runPP() {
						for (let i = this.pps.length - 1; i >= 0; i--) 1 == this.pps[i].pp.visible && (this.pps[i].pp.x -= this.pps[i].vx, this.pps[i].pp.y -= this.pps[i].vy)
					}
					createFishPP(i, e) {
						if (this.runNum % 2 == 0) for (let t = 0; t < 5; t++) for (let t = this.pps.length - 1; t >= 0; t--) if (0 == this.pps[t].pp.visible) {
							let o = this.pps[t].pp;
							o.visible = !0,
								o.alpha = 0,
								this.pps[t].vx = 0,
								this.pps[t].vy = 2 + 5 * Math.random(),
								o.scaleX = o.scaleY = 0;
							let s = 2 * (1.2 * Math.random() - .2);
							o.x = i + 100 * Math.random() - 50,
								o.y = e + 100 * Math.random() - 50;
							let n = new Laya.TimeLine;
							n.to(o, {
								scaleX: s,
								scaleY: s,
								alpha: 1
							},
								100),
								n.to(o, {
									scaleX: 0,
									scaleY: 0,
									alpha: 0
								},
									1e3 + 1e3 * Math.random(), null, 100),
								n.on(Laya.Event.COMPLETE, this,
									function () {
										o.visible = !1
									}),
								n.play(0, !1);
							break
						}
					}
					showMainBtn() {
						window.gameState = window.GAME_STATE_MAIN,
							window.nativeAdSceneId = 0,
							this.reSetUI(),
							this.baseBtnMain.visible = !0;
						let i = new Laya.TimeLine;
						i.to(this.baseBtnMain, {
							alpha: 1
						},
							200),
							i.play(0, !1)
					}
					hideMainBtn() {
						let i = new Laya.TimeLine;
						i.to(this.baseBtnMain, {
							alpha: 0
						},
							200),
							i.on(Laya.Event.COMPLETE, this, () => {
								this.baseBtnMain.visible = !1
							}),
							i.play(0, !1)
					}
					showFishPoolUi() {
						window.gameState = window.GAME_STATE_POOL,
							window.nativeAdSceneId = 1,
							this.baseFishUiBottom.visible = this.baseFishUiTop.visible = !0,
							this.baseFishUiBottom.alpha = this.baseFishUiTop.alpha = 0;
						let i = new Laya.TimeLine;
						i.to(this.baseFishUiBottom, {
							alpha: 1
						},
							200),
							i.play(0, !1);
						let e = new Laya.TimeLine;
						e.to(this.baseFishUiTop, {
							alpha: 1
						},
							200),
							e.play(0, !1),

							window.fishPool.showBtn(),
							window.isShowPoolHelp && Laya.timer.once(500, this,
								function () {
									window.sm.getScene("helpPool", !0)
								})
					}
					hideFishPoolUi() {
						window.gameState = window.GAME_STATE_MAIN;
						let i = new Laya.TimeLine;
						i.to(this.baseFishUiBottom, {
							alpha: 0
						},
							200),
							i.play(0, !1);
						let e = new Laya.TimeLine;
						e.to(this.baseFishUiTop, {
							alpha: 0
						},
							200),
							e.on(Laya.Event.COMPLETE, this, () => {
								this.baseFishUiBottom.visible = !1,
									this.baseFishUiTop.visible = !1
							}),
							e.play(0, !1),
							window.baseHand.visible = !1
					}
					onShowOppoMoreGame() {
						window.gameState == window.GAME_STATE_MAIN ? this.hideMainBtn() : window.gameState == window.GAME_STATE_POOL && (this.baseOppoAdPool.visible = !1)
					}
					onHideOppoMoreGame() {
						window.gameState == window.GAME_STATE_MAIN ? this.showMainBtn() : window.gameState == window.GAME_STATE_POOL && (this.baseOppoAdPool.visible = window.isOV)
					}
					onCloseOppoAd(i) { }
				}
			},
			try: {
				res: "DialogTry",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							t.setButtonEvent(this.btnTry, this,
								function () {
									window.isCanControl && window.setPlatformReward(0, 2)
								}),
							t.setAction(0, this.imgBtnShowAd, !0),
							this.bgY = this.bg.y
					}
					onEnable() {
						if (window.nativeAdSceneId = 10, window.sceGame.baseGameOppoAd.visible = !1, this.bg.y = window.oppoAdData ? this.bgY : -400, this.isTry = !1, window.isCanControl = !0, this.setShowAction(), window.isOV) if (oppoAdData) if (0 == window.btnDelayTime) this.btnTry.visible = this.btnClose.visible = !0,
							this.btnTry.alpha = this.btnClose.alpha = 1;
						else {
							this.btnTry.visible = this.btnClose.visible = !1,
								this.btnTry.alpha = this.btnClose.alpha = 0;
							let i = new Laya.TimeLine;
							i.to(this.btnTry, {
								alpha: 0
							},
								window.btnDelayTime),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										this.btnTry.visible = !0;
										let i = new Laya.TimeLine;
										i.to(this.btnTry, {
											alpha: 1
										},
											1e3),
											i.play(0, !1),
											this.btnClose.visible = !0;
										let e = new Laya.TimeLine;
										e.to(this.btnClose, {
											alpha: 1
										},
											1e3),
											e.play(0, !1)
									}),
								i.play(0, !1)
						} else this.btnTry.visible = this.btnClose.visible = !0,
							this.btnTry.alpha = this.btnClose.alpha = 1
					}
					onTryResult(i) {
						this.isTry = i,
							i && (window.isCanControl = !1, this.setHideAction())
					}
					onDisable() {
						super.onDisable(),
							this.isTry && window.sceGame.onTry(),
							window.sceGame.isTry = !1,
							window.gameState = window.GAME_STATE_GAME,
							window.nativeAdSceneId = 7,
							0 == window.gameModel && window.adGameShow && (window.sceGame.baseGameOppoAd.visible = !0),
							window.recordEvent.event("record", ["start"]),
							window.sceGame.startRecord(!0)
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			revive: {
				res: "DialogRevive",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && (this.setHideAction())
								}),
							t.setButtonEvent(this.btnRevive, this,
								function () {
									window.isCanControl && (window.stopMusic(!0), window.setPlatformReward(0, 0))
								}),
							t.setAction(0, this.imgBtnRevive, !0),
							this.bgH = this.bg.height,
							this.txtHelpY = this.txtHint.y,
							this.btnReviveX = this.btnRevive.x,
							this.btnReviveY = this.btnRevive.y,
							this.baseLeadX = this.baseLead.x,
							this.baseNpcX = this.baseNPC.x
					}
					onEnable() {
						window.nativeAdSceneId = 11,
							window.recordEvent.event("record", ["pause"]),
							window.sceGame.baseGameOppoAd.visible = !1,

							this.bg.height = this.bgH - (window.oppoAdData ? 0 : 120),
							this.txtHint.y = this.txtHelpY - (window.oppoAdData ? 0 : 135),
							this.btnRevive.y = this.btnReviveY - (window.oppoAdData ? 0 : 120),
							window.gameState = window.GAME_STATE_REVIVE,
							window.playMusic("bgm2"),
							this.isRevive = !1,
							this.baseLead.x = this.baseLeadX,
							this.baseNPC.x = this.baseNpcX;
						let i = window.lead.baseAction;
						if (i.removeSelf(), this.baseLead.addChild(i), i.scaleX = i.scaleY = window.sceGame.fishScaleTarget, i.alpha = 1, i.rotation = 0, window.lead.eatFish.skeleton.play(window.lead.eatFish.shapeId < 7 ? 1 : 0, !0), (i = window.lead.eatFish.baseAction).removeSelf(), this.baseNPC.addChild(i), i.scaleX = i.scaleY = window.sceGame.fishScaleTarget * window.fishScaleLvAdd, i.alpha = 1, i.rotation = 0, window.lead.shapeId == window.fishMaxLv) {
							let i = [1, 0, 0, .99, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
								e = new Laya.ColorFilter(i);
							window.lead.eatFish.skeleton.filters = [e]
						}
						this.setShowAction(),
							window.plat
					}
					onReviveResult(i) {
						if (this.isRevive = i, i) {
							window.isCanControl = !1;
							let i = new Laya.TimeLine;
							i.to(this.baseLead, {
								x: 680
							},
								500, Laya.Ease.expoIn),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										let i = window.lead.baseAction;
										i.removeSelf(),
											window.lead.addChild(i),
											i.scaleX = i.scaleY = 1,
											this.setHideAction()
									}),
								i.play(0, !1)
						}
					}
					onDisable() {
						super.onDisable(),
							window.lead.eatFish.skeleton.play(window.lead.eatFish.shapeId < 7 ? 0 : 1, !0);
						let i = window.lead.eatFish.baseAction;
						if (i.removeSelf(), window.lead.eatFish.addChild(i), i.scaleX = i.scaleY = 1, this.isRevive) window.nativeAdSceneId = 7,
							window.sceGame.setRevive(),
							window.recordEvent.event("record", ["resume"]),
							window.sceGame.baseGameOppoAd.visible = !0

						else {
							window.nativeAdSceneId = 12;
							let i = window.lead.baseAction;
							i.removeSelf(),
								window.lead.addChild(i),
								i.scaleX = i.scaleY = 1,
								window.sm.getScene("settle", !0),
								window.stopMusic(!0)
						}
						window.isCanControlFish = !0
					}
					onCloseOppoAd(i) {
						this.bg.height = this.bgH - 120,
							this.txtHint.y = this.txtHelpY - 135,
							this.btnRevive.y = this.btnReviveY - 120
					}
				}
			},
			ylm: {
				res: "DialogYLM",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							this.btnEnterX = this.btnEnter.x,
							this.bgY = this.bg.y
					}
					onEnable() {
						window.nativeAdSceneId = 15,
							window.playMusic("bgm0"),
							window.isNowShowYLM = !0,
							window.sceGame.baseGameOppoAd.visible = !1,

							this.btnEnter.x = window.oppoAdData ? this.btnEnterX : 320,
							this.bg.y = window.oppoAdData ? this.bgY : -400,
							window.isCanControl = !0;
						let i = window.lead.baseAction;
						i.removeSelf(),
							this.baseFish.addChild(i),
							i.scaleX = i.scaleY = window.sceGame.baseFish.scaleX,
							this.setShowAction()
					}
					onDisable() {
						super.onDisable(),
							window.nativeAdSceneId = 7,
							0 == window.gameModel && window.adGameShow && (window.sceGame.baseGameOppoAd.visible = !0);
						let i = window.lead.baseAction;
						i.removeSelf(),
							window.lead.addChild(i),
							i.scaleX = i.scaleY = 1,
							window.lead.x = window.lead.y = 0,
							window.sceGame.startYLM(),
							window.isCanControlFish = !0,
							window.isNowShowYLM = !1
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			fail: {
				res: "DialogFail",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							t.setButtonEvent(this.btnRevive, this,
								function () {
									window.isCanControl && (window.stopMusic(!0), window.setPlatformReward(0, 3))
								}),
							this.btns = [this.btnClose, this.btnRevive, this.btnShow],
							this.btnsPos = [{
								x: this.btnClose.x,
								y: this.btnClose.y
							},
							{
								x: this.bg.width - this.btnClose.x,
								y: this.btnClose.y
							},
							{
								x: this.btnRevive.x,
								y: this.btnRevive.y
							},
							{
								x: -this.btnShow.x,
								y: this.btnShow.y
							},
							{
								x: this.btnShow.x,
								y: this.btnShow.y
							}],
							t.setAction(0, this.txtHint, !0),
							this.GrayFilter = new Laya.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]),
							this.baseLeadX = this.baseLead.x,
							this.bgY = this.bg.y
					}
					onEnable() {
						window.nativeAdSceneId = 16,
							window.recordEvent.event("record", ["pause"]),
							window.sceGame.baseGameOppoAd.visible = !1,

							this.bg.y = window.oppoAdData ? this.bgY : -400,
							window.gameState = window.GAME_STATE_REVIVE,
							window.lead.skeleton.filters = null,
							this.baseLead.filters = [this.GrayFilter],
							window.playMusic("bgm2"),
							this.isRevive = !1,
							this.baseLead.x = this.baseLeadX,
							this.baseLead.rotation = 45;
						let i = window.lead.baseAction;
						i.removeSelf(),
							this.baseLead.addChild(i),
							i.scaleX = i.scaleY = window.sceGame.fishScaleTarget,
							i.alpha = 1,
							i.rotation = 0,
							window.lead.skeleton.paused(),
							this.setShowAction(function () {
								window.sceGame.hideFaiColumn()
							}),
							window.plat,
							t.setOppoBtnPos(this.btns, this.btnsPos)
					}
					onReviveResult(i) {
						if (this.isRevive = i, i) {
							window.isCanControl = !1,
								this.baseLead.filters = null;
							let i = new Laya.TimeLine;
							i.to(this.baseLead, {
								x: 680
							},
								500, Laya.Ease.expoIn),
								i.on(Laya.Event.COMPLETE, this,
									function () {
										let i = window.lead.baseAction;
										i.removeSelf(),
											window.lead.addChild(i),
											i.scaleX = i.scaleY = 1,
											window.lead.x = window.mapLeftX - window.lead.bodyW / 2 - 10,
											this.setHideAction()
									}),
								i.play(0, !1);
							let e = new Laya.TimeLine;
							e.to(this.baseLead, {
								rotation: 0
							},
								500),
								e.play(0, !1)
						}
					}
					onDisable() {
						if (super.onDisable(), window.sceGame.isCanMove = !0, this.isRevive) window.nativeAdSceneId = 7,
							this.isReviveYuLei ? window.sceGame.setYuLeiRevive() : window.sceGame.setYlmRevive(),
							window.recordEvent.event("record", ["resume"]),
							window.sceGame.baseGameOppoAd.visible = !0
						else {
							window.nativeAdSceneId = 12;
							let i = window.lead.baseAction;
							i.removeSelf(),
								window.lead.addChild(i),
								i.scaleX = i.scaleY = 1,
								window.lead.visible = !1,
								window.sm.getScene("settle", !0),
								window.stopMusic(!0)
						}
						window.sceGame.isReviveYuLei = !1,
							window.isCanControlFish = !0
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			dragon: {
				res: "DialogDragon",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							this.btnEnterX = this.btnEnter.x,
							this.bgY = this.bg.y
					}
					onEnable() {
						window.nativeAdSceneId = 14,
							window.playMusic("bgm1"),
							window.sceGame.baseGameOppoAd.visible = !1,

							this.btnEnter.x = window.oppoAdData ? this.btnEnterX : 320,
							this.bg.y = window.oppoAdData ? this.bgY : -400,
							window.isCanControl = !0,
							this.dragonOldBase = window.fishs[window.dragonShapeId][0].parent,
							this.dragonOldScale = window.fishs[window.dragonShapeId][0].scaleX,
							this.fishDragon = window.fishs[window.dragonShapeId][0];
						let i = this.fishDragon.baseAction;
						i.removeSelf(),
							this.baseDrage.addChild(i),
							this.baseDrage.scaleX = this.baseDrage.scaleY = .85 / this.fishDragon.fishScale,
							i.visible = !0,
							i.alpha = 1,
							i.rotation = 0,
							window.isCanControlFish = !1,
							this.fishDragon.skeleton.paused(),
							this.setShowAction()
					}
					onDisable() {
						super.onDisable(),
							window.nativeAdSceneId = 7,
							0 == window.gameModel && window.adGameShow && (window.sceGame.baseGameOppoAd.visible = !0);
						let i = this.fishDragon.baseAction;
						i.removeSelf(),
							this.fishDragon.addChild(i),
							window.sceGame.setDragon(),
							window.isCanControlFish = !0
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			notice: {
				res: "DialogNotice",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							this.baseOppoAd.y = this.height,
							t.setAction(1, this.imgBtnShow, !0)
					}
					onEnable() {
						window.nativeAdSceneId = 17,

							window.playMusic("bgm1"),
							window.isCanControl = !0,
							this.setShowAction(),
							window.sceMain.hideMainBtn()
					}
					onDisable() {
						super.onDisable(),
							window.isCanControlFish = !0,
							window.playMusic("bgm0"),
							window.gameState == window.GAME_STATE_MAIN ? window.sceMain.showMainBtn() : window.sceMain.showFishPoolUi()
					}
				}
			},
			tryKun: {
				res: "DialogTryKun",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && (this.onTryKunResult(!1))
								}),
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && (this.iconBtnVideoAd.visible ? window.setPlatformReward(0, 4) : this.onTryKunResult(!0))
								}),
							this.btns = [this.btnEnter, this.btnShow],
							this.btnsPos = [{
								x: this.btnEnter.x
							},
							{
								x: this.bg.width / 2
							},
							{
								x: this.bg.width - this.btnEnter.x
							},
							{
								x: this.btnShow.x
							},
							{
								x: -this.btnShow.x
							}],
							t.setAction(0, this.txtHint, !0),
							this.bgY = this.bg.y,
							this.iconBtnVideoAd.visible = window.isTryAd,
							this.txtBtnEnter.x = this.iconBtnVideoAd.visible ? 70 : 45
					}
					onEnable() {
						window.nativeAdSceneId = 8,
							window.sceGame.baseGameOppoAd.visible = !1,

							this.bg.y = window.oppoAdData ? this.bgY : -400,
							this.isTryKun = !1,
							window.isCanControl = !0,
							window.playMusic("bgm1");
						let i = window.user.data.fishMaxLv + 1;
						i < 7 && (i = 7);
						let e = i + 9;
						e > window.fishMaxLv && (e = window.fishMaxLv),
							this.fishIndex = t.randomInt(i, e + 1),
							this.fishTry = window.fishs[this.fishIndex][0];
						let o = this.fishTry.baseAction;
						o.removeSelf(),
							this.baseFish.addChild(o),
							this.baseFish.scaleX = this.baseFish.scaleY = 1.5 / this.fishTry.fishScale,
							o.alpha = 1,
							o.rotation = 0,
							this.setShowAction(),
							t.setOppoBtnPos(this.btns, this.btnsPos)
					}
					onTryKunResult(i) {
						this.isTryKun = i,
							window.isCanControl = !1,
							this.setHideAction()
					}
					onDisable() {
						super.onDisable();
						let i = this.fishTry.baseAction;
						i.removeSelf(),
							this.fishTry.addChild(i),
							this.isTryKun && window.sceGame.onTryKun(this.fishIndex),
							Laya.timer.once(2e3, this,
								function () {
									window.sceGame.isTry = !1
								}),
							window.gameState = window.GAME_STATE_GAME,
							window.nativeAdSceneId = 7,
							0 == window.gameModel && window.adGameShow && (window.sceGame.baseGameOppoAd.visible = !0),
							window.recordEvent.event("record", ["start"]),
							window.sceGame.startRecord(!0)
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			gsl: {
				res: "DialogGSL",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							t.setAction(1, this.imgBtnShowAd, !0),
							this.isShowBarnnerAd = !0,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && (this.setHideAction())
								}),
							this.bgH = this.bg.height,
							this.txtHelpY = this.txtHelp.y
					}
					onEnable() {
						window.nativeAdSceneId = 9,
							window.sceGame.baseGameOppoAd.visible = !1,

							this.bg.height = this.bgH - (window.oppoAdData ? 0 : 120),
							this.txtHelp.y = this.txtHelpY - (window.oppoAdData ? 0 : 120),
							window.isCanControl = !0,
							this.dragonOldBase = window.fishs[window.gslShapeId][0].parent,
							this.dragonOldScale = window.fishs[window.gslShapeId][0].scaleX,
							this.fishDragon = window.fishs[window.gslShapeId][0];
						let i = this.fishDragon.baseAction;
						i.removeSelf(),
							this.baseDrage.addChild(i),
							this.baseDrage.scaleX = this.baseDrage.scaleY = .6 / this.fishDragon.fishScale,
							i.visible = !0,
							i.alpha = 1,
							i.rotation = 0,
							window.isCanControlFish = !1,
							this.fishDragon.skeleton.play(0, !0),
							this.setShowAction()
					}
					onDisable() {
						super.onDisable(),
							window.nativeAdSceneId = 7,
							0 == window.gameModel && window.adGameShow && (window.sceGame.baseGameOppoAd.visible = !0);
						let i = this.fishDragon.baseAction;
						i.removeSelf(),
							this.fishDragon.addChild(i),
							window.sceGame.setDragon(),
							window.isCanControlFish = !0,
							window.isShowGSLDia = !1
					}
					onCloseOppoAd(i) {
						this.bg.height = this.bgH - 120,
							this.txtHelp.y = this.txtHelpY - 120
					}
				}
			},
			fishs: {
				res: "DialogFishs",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							t.setAction(1, this.imgBtnShowAd, !0),
							this.txtVersion.text = " ",
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnClose, this,
								function () {
									this.setHideAction(() => {
										this.close()
									})
								}),
							this.lstFish.renderHandler = new Laya.Handler(this, this.updateListCellUI);
						let e = new Laya.ColorFilter;
						e.setColor("#000000"),
							this.lockFilters = [e],
							this.fishTopY = this.lstFish.y,
							this.fishListH = this.lstFish.height,
							this.fishAddH = this.fishTopY - this.baseOppoAd.y
					}
					onEnable() {
						
						window.nativeAdSceneId = 3,

							window.isToStart = !1,
							this.lstFish.y = this.fishTopY - (window.oppoAdData ? 0 : this.fishAddH),
							this.lstFish.height = this.fishListH + (window.oppoAdData ? 0 : this.fishAddH),
							window.gameState == window.GAME_STATE_MAIN ? window.sceMain.hideMainBtn() : window.sceMain.baseFishUiBottom.visible = window.sceMain.baseFishUiTop.visible = !1,
							this.updateFishs(),
							window.user.moneyChange(0, !1),
							window.user.poolLvChange(window.user.data.poolLv, !1),
							window.user.fishMaxLvChange(window.user.data.fishMaxLv, !1),
							this.setShowAction()
					}
					updateListCellUI(i, e) {
						e++,
							i.getChildByName("btnBg").on(Laya.Event.CLICK, this, this.onBtnEnter, [e]);
						let t = i.getChildByName("baseFish");
						t.numChildren > 0 && t.removeChildAt(0),
							window.fishs[e][0].playAction(0);
						let o = window.fishs[e][0].skeleton;
						o.removeSelf(),
							t.addChild(o),
							t.scaleX = t.scaleY = e <= 6 ? 1 / window.fishs[e][0].fishScale * .8 : Math.abs(1 / o.scaleX),
							t.scaleX *= -window.fishs[e][0].scaleDirect,
							e > window.user.data.fishMaxLv ? (t.filters = this.lockFilters, o.paused()) : (t.filters = null, o.resume())
					}
					onBtnEnter(i) {
						window.isCanControl && (window.playSound("button"), window.fishData[i], i <= window.user.data.fishMaxLv && (window.user.data.money < window.user.getFishPrice(i) ? (window.setTipStrAnimation(" 【Not enough gold coins】 ", "#ff0000", "#ffffff"), window.playSound("error"), Laya.timer.once(200, this,
							function () {
								window.isFromFishs = !0,
									this.visible = !1,
									window.sm.getScene("freeGold", !0)
							})) : window.fishsPool.length >= window.user.getPoolFishNum(window.user.data.poolLv) ? (window.setTipStrAnimation(" 【鲲池容量已达上限】 ", "#ff0000", "#ffffff"), window.sceMain.setHand(window.sceMain.btnLvAdd, 60, 80)) : (window.user.moneyChange(- window.user.getFishPrice(i), !1), window.fishPool.addFish(i, 1, !0))))
					}
					updateFishs() {
						this.lstFish.dataSource = [];
						let i = [];
						for (let e = 1; e < window.fishData.length - 2; e++) {
							let o = {
								txtLv: {
									text: "Lv." + e
								},
								btnBg: {
									skin: "res/bgBtn1.png"
								},
								txtBtn: {
									skin: "",
									visible: !1
								},
								fcGold: {
									value: t.getShowNum(window.user.getFishPrice(e)),
									visible: !0
								}
							};
							e > window.user.data.fishMaxLv && (o.btnBg.skin = e == window.user.data.fishMaxLv ? "res/bgBtn0.png" : "res/bgBtn2.png", o.txtBtn.skin = e == window.user.data.fishMaxLv ? "res/txtFreeGet.png" : "res/txtLock.png", o.txtBtn.visible = !0, o.fcGold.visible = !1),
								i.push(o)
						}
						this.lstFish.dataSource = i
					}
					onDisable() {
						if (super.onDisable(), window.isToStart ? (window.sceMain.baseBtnMain.visible = !0, window.sceMain.baseBtnMain.alpha = 1) : window.gameState == window.GAME_STATE_MAIN ? window.sceMain.showMainBtn() : window.sceMain.showFishPoolUi(), !window.isToStart) for (let i = 1; i < window.fishData.length - 2; i++) {
							let e = window.fishs[i][0].skeleton;
							e.removeSelf(),
								e.resume(),
								window.fishs[i][0].baseAction.addChild(e)
						}
						window.isToStart = !1
					}
					onCloseOppoAd(i) {
						this.lstFish.y = this.fishTopY - this.fishAddH,
							this.lstFish.height = this.fishListH + this.fishAddH
					}
				}
			},
			newFish: {
				res: "DialogNewFish",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							t.setAction(1, this.imgBtnShowAd, !0),
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							t.setAction(3, this.light, !0),
							this.bgY = this.bg.y,
							this.bgH = this.bg.height,
							this.oppoAdH = this.oppoAdBg.height
					}
					onEnable() {
						window.isCanControl = !1,
							window.nativeAdSceneId = 5,


							window.sceMain.baseOppoAdPool.visible = !1,
							this.bg.y = this.bgY + (window.oppoAdData ? 0 : this.oppoAdH / 2),
							this.bg.height = this.bgH - (window.oppoAdData ? 0 : this.oppoAdH),
							window.playSound("success1");
						let i = window.fishData[window.user.data.fishMaxLv - 2].money;
						this.fcGold.value = t.getShowNum(i),
							window.user.moneyChange(i),
							Laya.timer.once(1e3, this, () => {
								window.showGoldAnimation("res/iconGold.png", i, this.iconGold, this.iconGold, {
									scaleX: 1,
									scaleY: 1
								},
									() => {
										window.isCanControl = !0
									})
							}),
							this.fish = window.fishs[window.user.data.fishMaxLv][0];
						let e = this.fish.baseAction;
						e.removeSelf(),
							this.baseFish.addChild(e),
							this.baseFish.scaleX = 2 / this.fish.fishScale * (window.user.data.fishMaxLv < 7 ? -1 : .9),
							this.baseFish.scaleY = Math.abs(this.baseFish.scaleX),
							e.alpha = 1,
							e.rotation = 0,
							e.visible = !0,
							this.setShowAction()
					}
					onDisable() {
						super.onDisable();
						let i = this.fish.baseAction;
						i.removeSelf(),
							this.fish.addChild(i),
							window.nativeAdSceneId = 1,
							window.sceMain.baseOppoAdPool.visible = window.isOV

					}
				}
			},
			freeGold: {
				res: "DialogFreeGold",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnClose, this,
								function () {
									window.isCanControl && this.onCloseUi()
								}),
							t.setButtonEvent(this.btnStart, this,
								function () {
									window.isCanControl && (this.setHideAction(() => {
										if (window.isFromFishs) {
											Laya.timer.once(2e3, this,
												function () {
													window.isToStart = !0,
														window.diaFishs.visible = !0,
														window.diaFishs.close()
												});
											for (let i = 1; i < window.fishData.length - 2; i++) {
												let e = window.fishs[i][0].skeleton;
												e.removeSelf(),
													e.resume(),
													window.fishs[i][0].baseAction.addChild(e)
											}
										} else window.sceMain.baseFishUiBottom.visible = window.sceMain.baseFishUiTop.visible = !0,
											window.sceMain.baseFishUiBottom.alpha = window.sceMain.baseFishUiTop.alpha = 1;
										window.sceMain.onStartGame(0)
									}))
								}),
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && window.setPlatformReward(0, 5, this.getGoldNum())
								}),
							this.btns = [this.btnStart, this.btnEnter, this.btnShow],
							this.btnsPos = [{
								x: this.btnStart.x,
								y: this.btnStart.y
							},
							{
								x: this.bg.width - this.btnStart.x,
								y: this.btnStart.y
							},
							{
								x: this.btnEnter.x,
								y: this.btnEnter.y
							},
							{
								x: -this.btnShow.x,
								y: this.btnShow.y
							},
							{
								x: this.btnShow.x,
								y: this.btnShow.y
							}],
							t.setAction(3, this.light, !0),
							this.bgY = this.bg.y
					}
					getGoldNum() {
						let i = window.fishData[window.user.data.fishMaxLv].money * window.freeGold[window.user.data.fishMaxLv] / 100;
						return Math.ceil(i)
					}
					onEnable() {
						window.nativeAdSceneId = 6,

							this.bg.y = window.oppoAdData ? this.bgY : -400,
							window.playSound("skill"),
							this.baseGoldTo.x = window.goldActionToX,
							this.baseGoldTo.y = window.goldActionToY,
							this.baseGoldTo.scaleX = window.goldActionScaleX,
							this.baseGoldTo.scaleY = window.goldActionScaleY,
							this.baseGoldFrom.x = this.center.x + this.bg.x - this.bg.width / 2 + this.baseGold.x,
							this.baseGoldFrom.y = this.center.y + this.bg.y + this.baseGold.y,
							t.setOppoBtnPos(this.btns, this.btnsPos),
							this.txtHintGold.text = (true ? "Watch video" : "分享微信群") + "，Receive " + t.getShowNum(this.getGoldNum()) + " Gold coin",
							this.setShowAction()
					}
					onFreeGoldResult(i) {
						window.isCanControl = !1,
							window.showGoldAnimation("res/iconGold2.png", i, this.baseGoldFrom, this.baseGoldTo, {
								scaleX: this.baseGoldTo.scaleX,
								scaleY: this.baseGoldTo.scaleY
							},
								() => {
									window.user.moneyChange(i),
										this.onCloseUi()
								})
					}
					onCloseUi() {
						window.isFromFishs ? window.diaFishs.visible = !0 : window.gameState == window.GAME_STATE_POOL && (window.sceMain.baseFishUiBottom.visible = window.sceMain.baseFishUiTop.visible = !0, window.sceMain.baseFishUiBottom.alpha = window.sceMain.baseFishUiTop.alpha = 1),
							this.setHideAction()
					}
					onDisable() {
						super.onDisable(),
							window.isCanControl = !0,
							window.isFromFishs ? window.nativeAdSceneId = 3 : window.gameState == window.GAME_STATE_MAIN ? window.sceMain.showMainBtn() : window.sceMain.showFishPoolUi(),
							window.isFromFishs = !1
					}
					onCloseOppoAd(i) {
						t.onCloseOppoAd(this.btns, this.btnsPos)
					}
				}
			},
			helpPool: {
				res: "DialogHelpPool",
				code: class extends a {
					constructor(i) {
						super(Laya.View.uiMap[i]),
							t.setAction(1, this.imgBtnShowAd, !0),
							this.isShowBarnnerAd = !0,
							this.isCloseBrnnerAd = !1,
							t.setButtonEvent(this.btnEnter, this,
								function () {
									window.isCanControl && this.setHideAction()
								}),
							this.bgH = this.bg.height,
							this.txtHelpInfoY = this.txtHelpInfo.y,
							this.fish0X = this.fish0.x,
							this.fish0Y = this.fish0.y,
							this.fish1X = this.fish1.x,
							this.fish1Y = this.fish1.y,
							this.handInitScale = 1.5,
							this.handInitX = this.baseHand.x,
							this.handInitY = this.baseHand.y,
							this.handToX = this.handInitX - 20,
							this.handToY = this.handInitY - 35,
							this.hand0.visible = !0,
							this.hand1.visible = !1,
							t.setAction(3, this.baseLight, !0)
					}
					onEnable() {
						window.nativeAdSceneId = 4,
							window.sceMain.baseOppoAdPool.visible = !1,
							this.bg.height = this.bgH - (window.oppoAdData ? 0 : 120),
							this.txtHelpInfo.y = this.txtHelpInfoY - (window.oppoAdData ? 0 : 130),
							window.isCanControl = !0,
							this.isActionRunning = !0,
							this.setHelpInit(200),
							this.fish2.visible = !1,
							window.isShowPoolHelp = !1,
							this.setShowAction()
					}
					setHelpInit(i) {
						this.txtHelpInfo.text = "",
							this.txtHelpInfo.visible = !1,
							this.fish0.visible = !0,
							this.fish0.alpha = 1,
							this.fish1.visible = !0,
							this.fish1.alpha = 1,
							this.fish0.x = this.fish0X,
							this.fish0.y = this.fish0Y,
							this.fish1.x = this.fish1X,
							this.fish1.y = this.fish1Y,
							this.baseHand.x = 118,
							this.baseHand.y = 128,
							this.baseHand.alpha = 0,
							this.baseHand.scaleX = this.baseHand.scaleY = this.handInitScale,
							this.baseLight.visible = !1,
							Laya.timer.once(i, this,
								function () {
									this.isActionRunning && this.setHelpStep(0)
								})
					}
					setHelpStep(i) {
						this.isActionRunning && (this.step = i, 0 == i ? this.setText(0, 200, () => {
							this.setHelpStep(1)
						}) : 1 == i ? (this.setText(1, 2e3), this.setHelpAction(0, 3e3), Laya.timer.once(3500, this, () => {
							this.setHelpStep(2)
						})) : 2 == i ? (this.setText(2, 1e3, () => {
							this.setHelpStep(3)
						}), this.setHelpAction(1, 1500)) : 3 == i && (this.setText(3, 2e3), this.setHelpAction(2, 3e3)))
					}
					setText(i, e = 0, t = null) {
						if (!this.isActionRunning) return;
						let o = [" Synthetic『 advanced fish 』 ", " ① Order small and medium fish,\ndon't let go ", " ② Drag the same little fish together", " ③ Let go of your finger"],
							s = new Laya.TimeLine;
						this.txtHelpInfo.visible ? (s.to(this.txtHelpInfo, {
							scaleX: 0,
							scaleY: 0
						},
							100, Laya.Ease.backIn, e), s.on(Laya.Event.COMPLETE, this, () => {
								this.txtHelpInfo.text = o[i];
								let e = new Laya.TimeLine;
								e.to(this.txtHelpInfo, {
									scaleX: 1,
									scaleY: 1
								},
									100, Laya.Ease.backOut, 100),
									e.on(Laya.Event.COMPLETE, this, () => {
										t && t()
									}),
									e.play(0, !1)
							})) : (this.txtHelpInfo.text = o[i], this.txtHelpInfo.visible = !0, this.txtHelpInfo.scaleX = this.txtHelpInfo.scaleY = 0, s.to(this.txtHelpInfo, {
								scaleX: 1,
								scaleY: 1
							},
								100, Laya.Ease.backOut, e), s.on(Laya.Event.COMPLETE, this, () => {
									t && t()
								})),
							s.play(0, !1)
					}
					setHelpAction(i, e = 0, t = null) {
						if (this.isActionRunning) if (0 == i) {
							let i = new Laya.TimeLine;
							i.to(this.baseHand, {
								x: this.handToX,
								y: this.handToY,
								scaleX: 1,
								scaleY: 1,
								alpha: 1
							},
								500, null, e),
								i.on(Laya.Event.COMPLETE, this, () => {
									this.hand0.visible = !0,
										this.hand1.visible = !1,
										t && t()
								}),
								i.play(0, !1)
						} else if (1 == i) {
							let i = new Laya.TimeLine;
							i.to(this.fish1, {
								x: 0
							},
								500, null, e),
								i.on(Laya.Event.COMPLETE, this, () => {
									t && t()
								}),
								i.play(0, !1)
						} else 2 == i && Laya.timer.once(e, this,
							function () {
								this.hand0.visible = !1,
									this.hand1.visible = !0,
									Laya.timer.once(350, this,
										function () {
											let i = new Laya.TimeLine;
											i.to(this.baseHand, {
												x: this.handInitX,
												y: this.handInitY,
												scaleX: this.handInitScale,
												scaleY: this.handInitScale,
												alpha: 0
											},
												200),
												i.on(Laya.Event.COMPLETE, this, () => {
													let i = this.fish0.x,
														e = this.fish1.x,
														t = (i + e) / 2,
														o = new Laya.TimeLine;
													o.to(this.fish0, {
														x: e
													},
														400),
														o.to(this.fish0, {
															x: t
														},
															200, Laya.Ease.expoInOut),
														o.play(0, !1);
													let s = new Laya.TimeLine;
													s.to(this.fish1, {
														x: i
													},
														400),
														s.to(this.fish1, {
															x: t
														},
															200, Laya.Ease.expoInOut),
														s.on(Laya.Event.COMPLETE, this, () => {
															this.createBomb(() => {
																this.fish0.visible = this.fish1.visible = !1,
																	this.fish2.alpha = 1,
																	this.fish2.visible = !0,
																	this.baseLight.visible = !0
															})
														}),
														s.play(0, !1)
												}),
												i.play(0, !1)
										})
							})
					}
					createBomb(i = null) {
						if (!this.isActionRunning) return;
						Laya.timer.once(300, this,
							function () {
								this.isActionRunning && i && i()
							}),
							Laya.timer.once(600, this,
								function () {
									this.isActionRunning && Laya.timer.once(3e3, this,
										function () {
											if (!this.isActionRunning) return;
											this.setHelpInit(100),
												this.fish0.visible = !0,
												this.fish0.alpha = 0,
												this.fish1.visible = !0,
												this.fish1.alpha = 0,
												this.fish2.visible = !0;
											let i = new Laya.TimeLine;
											i.to(this.fish2, {
												alpha: 0
											},
												200),
												i.on(Laya.Event.COMPLETE, this, () => {
													let i = new Laya.TimeLine;
													i.to(this.fish0, {
														alpha: 1
													},
														200),
														i.play(0, !1);
													let e = new Laya.TimeLine;
													e.to(this.fish1, {
														alpha: 1
													},
														200),
														e.play(0, !1)
												}),
												i.play(0, !1)
										})
								}),
							window.playSound("chestPoof");
						let e = this.baseBomb.x,
							t = this.baseBomb.y,
							o = new Laya.Sprite;
						this.baseHelp0.addChild(o),
							o.pos(e, t),
							Laya.timer.once(3e3, this,
								function () {
									o.removeSelf(),
										o.destroy()
								});
						for (let i = 0; i < 100; i++) {
							let i = new Laya.Sprite;
							i.loadImage("res/bomb.png"),
								i.pivot(28, 28),
								i.scale(0, 0),
								o.addChild(i);
							let e = 200 * Math.random() * (Math.random() > .5 ? 1.5 : -1.5),
								t = 200 * Math.random() * (Math.random() > .5 ? 1.5 : -1.5),
								s = 200 + 80 * Math.random(),
								n = 3 + .2 * Math.random(),
								a = new Laya.TimeLine;
							a.to(i, {
								x: e,
								y: t,
								scaleX: n,
								scaleY: n
							},
								s, null, 100 * Math.random()),
								a.to(i, {
									scaleX: 0,
									scaleY: 0
								},
									s),
								a.play(0, !1)
						}
					}
					onDisable() {
						super.onDisable(),
							window.nativeAdSceneId = 1,
							window.sceMain.baseOppoAdPool.visible = window.isOV,
							window.sceMain.reSetUI(),
							this.isActionRunning = !1,
							window.user.data.isFishPoolFirst = !1,
							window.user.saveUserData()

					}
					onCloseOppoAd(i) {
						this.bg.height = this.bgH - 120,
							this.txtHelpInfo.y = this.txtHelpInfoY - 130
					}
				}
			}
		};
		class h {
			constructor() {
				window.sceLoad = null,
					window.sceMain = null,
					window.sceGame = null,
					window.diaRank = null,
					window.diaPause = null,
					window.diaSettle = null,
					window.diaRevive = null,
					window.diaTry = null,
					window.diaYLM = null,
					window.diaFail = null,
					window.diaDragon = null,
					window.diaNotice = null,
					window.diaTryKun = null,
					window.diaGSL = null,
					window.diaFishs = null,
					window.diaNewFish = null,
					window.diaFreedGold = null,
					window.diaHelpPool = null,
					this.scenes = [{
						load: window.sceLoad
					}]
			}
			getScene(i, e = !1, t = !1) {
				for (let o in this.scenes) if (this.scenes[o][i]) return e && this.scenes[o][i].open(t),
					this.scenes[o][i];
				let o = new d[i].code(d[i].res),
					s = {};
				return s[i] = o,
					this.scenes.push(s),
					"rank" == i ? window.diaRank = o : "settle" == i ? window.diaSettle = o : "game" == i ? window.sceGame = o : "main" == i ? window.sceMain = o : "revive" == i ? window.diaRevive = o : "pause" == i ? window.diaPause = o : "try" == i ? window.diaTry = o : "lym" == i ? window.diaYLM = o : "fail" == i ? window.diaFail = o : "dragon" == i ? window.diaDragon = o : "notice" == i ? window.diaNotice = o : "tryKun" == i ? window.diaTryKun = o : "gsl" == i ? window.diaGSL = o : "fishs" == i ? window.diaFishs = o : "newFish" == i ? window.diaNewFish = o : "freeGold" == i ? window.diaFreeGold = o : "helpPool" == i && (window.diaHelpPool = o),
					e && o.open(t),
					o
			}
			getDialog(i, e = !1) {
				let t = this.getScene(i);
				return e && t.popup(!1),
					t
			}
		}
		let r,
			l;
		window.isDebugModel = !1,
			window.gmaeTopic = "大鱼吃小鱼",
			window.clipboardData = "",
			window.cutTemplateIds = [],
			window.isLimit = !0,
			window.adIdOppo = "268955",
			window.adIdVivo = "712373e91c384ae6b03499afc89579e0",
			window.adLoadTime = 60,
			window.adSpace = 40,
			window.adErroTime = 20,
			window.adGameShow = !1,
			window.miniGameShow = !1,
			window.hintDeskNum = 1,
			window.btnDelayTime = 0,
			window.isDubb = !0,
			window.isShowNotic = !1,
			window.isShowTryKun = !0,
			window.isHaveGSL = !0,
			window.isShowGSL = !0,
			window.gslRate = 18,
			window.isHaveBP = !0,
			window.isShowBP = !1,
			window.isHaveYYLM = !1,
			window.isShowDiaYLM = !1,
			window.isShowDiaDragon = !1,
			window.isHaveYuLei = !1,
			window.isHaveRankBtn = !0,
			window.ylmStartNum = 0,
			window.ylmRateNum = 1,
			window.isOppoTest = !1,
			window.isTryAd = !1,
			window.isBtnRand = !1,
			window.cameraSizes = [240, 320, 480, 720, 1080, 1440],
			window.cameraSzieIndex = 0,
			window.projectShowName = "大鱼吃小鱼",
			window.projectName = "fish",
			window.saveName = "fish10",
			window.saveVersion = "1.0.0",
			window.soundPath = "subpackages/sound/",
			window.shareImgPath = "shareImg/",
			window.shareTitleStrWX = "我的梦想是有一天能吞下一条鲲~|我的鱼生理想就是把你们统统都吃掉！|OMG！我的小鱼竟然进化了！？",
			window.shareTitleStr = "快来享用一顿海鲜盛宴吧！",
			window.shareDescStr = "快来享用一顿海鲜盛宴吧！",
			window.shareTopicStr = "大鱼吃小鱼 我的梦想是有一天能吞下一条鲲~|大鱼吃小鱼 我的鱼生理想就是把你们统统都吃掉！|大鱼吃小鱼 OMG！我的小鱼竟然进化了！？",
			window.shareVideoStr = "MG！我的小鱼竟然进化了！？",
			window.shareCutIdStr = "",
			window.shareImageUrl = "",
			window.shareTemplateId = "",
			window.shareQuety = "",
			window.isSetClipboardFinish = !1,
			window.getHttpData = function () {
				if (window.isOppoTest) return void (window.adLoadTime = 1e7);
				if (window.serversDataName = "setting", window.gameVersion = "v2.0.49", "wx" == window.plat ? (window.serversDataName = "setting1", window.gameVersion = "v1.0.7") : "tt" == window.plat ? (window.serversDataName = "setting", window.gameVersion = "v1.0.1") : "vv" == window.plat && (window.serversDataName = "setting", window.gameVersion = "v1.0.7"), window.gameVersion += "setting" == window.serversDataName ? ".a" : ".b", "pc" == window.plat) return window.isDebugModel = !0,
					window.adLoadTime = 0,
					window.adSpace = 10,
					window.adErroTime = 20,
					window.adGameShow = !0,
					window.miniGameShow = !0,
					window.hintDeskNum = 1,
					window.btnDelayTime = 0,
					window.isHaveGSL = !0,
					window.isShowGSL = !0,
					window.isHaveYYLM = !1,
					window.isHaveBP = !1,
					window.isShowNotic = !1,
					window.isShowTryKun = !0,
					window.isShowDiaYLM = !1,
					window.isShowDiaDragon = !1,
					window.ylmStartNum = 1,
					window.ylmRateNum = 2,
					window.gslRate = 18,
					window.isHaveYuLei = !1,
					window.isHaveRankBtn = !0,
					window.isOpenAds = !0,
					window.isTryAd = !0,
					void (window.isBtnRand = !1);
				let i = "vv";
				false ? i = "op" : Laya.Browser.onVVMiniGame ? i = "vv" : Laya.Browser.onTTMiniGame ? i = "tt" : Laya.Browser.onMiniGame && (i = "wx"),
					new w("fish_" + i, i).getGameSetting(function (i) {
						try {
							0;
							let e = JSON.parse(i);
							if ("object" == typeof e && e) {
								let i = JSON.parse(e.data[window.serversDataName]);
								i.hasOwnProperty("isDebug") && (window.isDebugModel = i.isDebug),
									i.hasOwnProperty("isLimit") && (window.isLimit = i.isLimit),
									("pc" == window.plat || window.isDebugModel) && (console.log("--------------------------------------------------------------------------------------------------------------------------------"), console.log(window.serversDataName + " -> " + JSON.stringify(i)), console.log("--------------------------------------------------------------------------------------------------------------------------------")),
									i.hasOwnProperty("adIdOppo") && (window.adIdOppo = i.adIdOppo),
									i.hasOwnProperty("adLoadTime") && (window.adLoadTime = parseInt(i.adLoadTime), 0 == window.adLoadTime && window.oppoAdLoad()),
									i.hasOwnProperty("adErroTime") && (window.adErroTime = parseInt(i.adErroTime)),
									i.hasOwnProperty("adSpace") && (window.adSpace = parseInt(i.adSpace)),
									i.hasOwnProperty("adGameShow") && (window.adGameShow = i.adGameShow),
									i.hasOwnProperty("miniGameShow") && (window.miniGameShow = i.miniGameShow),
									i.hasOwnProperty("hintDeskNum") && (window.hintDeskNum = parseInt(i.hintDeskNum)),
									i.hasOwnProperty("btnDelayTime") && (window.btnDelayTime = 1e3 * parseFloat(i.btnDelayTime)),
									i.hasOwnProperty("isDubb") && (window.isDubb = i.isDubb),
									i.hasOwnProperty("isShowTryKun") && (window.isShowTryKun = i.isShowTryKun),
									i.hasOwnProperty("isShowNotic") && (window.isShowNotic = i.isShowNotic),
									i.hasOwnProperty("isHaveGSL") && (window.isHaveGSL = i.isHaveGSL),
									i.hasOwnProperty("isShowGSL") && (window.isShowGSL = i.isShowGSL),
									i.hasOwnProperty("gslRate") && (window.gslRate = parseInt(i.gslRate)),
									i.hasOwnProperty("isHaveRankBtn") && (window.isHaveRankBtn = i.isHaveRankBtn),
									i.hasOwnProperty("isHaveYuLei") && (window.isHaveYuLei = i.isHaveYuLei),
									i.hasOwnProperty("isShowBP") && (window.isShowBP = i.isShowBP),
									i.hasOwnProperty("isHaveBP") && (window.isHaveBP = i.isHaveBP),
									i.hasOwnProperty("isHaveYYLM") && (window.isHaveYYLM = i.isHaveYYLM),
									i.hasOwnProperty("isShowYYLM") && (window.isShowDiaYLM = i.isShowYYLM),
									i.hasOwnProperty("isShowDragon") && (window.isShowDiaDragon = i.isShowDragon),
									i.hasOwnProperty("ylmStartNum") && (window.ylmStartNum = parseInt(i.ylmStartNum), window.ylmStartNum < 1 && (window.ylmStartNum = 1)),
									i.hasOwnProperty("ylmRateNum") && (window.ylmRateNum = parseInt(i.ylmRateNum), window.ylmRateNum < 1 && (window.ylmRateNum = 1)),
									i.hasOwnProperty("isTryAd") && (window.isTryAd = i.isTryAd),
									i.hasOwnProperty("isBtnRand") && (window.isBtnRand = i.isBtnRand),
									i.hasOwnProperty("jumpOutCheckTime") && (window.jumpOutCheckTime = 1e3 * parseFloat(i.jumpOutCheckTime)),
									i.hasOwnProperty("gmaeTopic") && (window.gmaeTopic = i.gmaeTopic),
									i.hasOwnProperty("password") && (window.clipboardData = i.password, window.isSetClipboardFinish && window.platform.setClipboardData(window.clipboardData)),
									i.hasOwnProperty("isOpenAds") && (window.isOpenAds = i.isOpenAds),
									i.hasOwnProperty("shareTitle") && (window.shareTitleStr = i.shareTitle),
									i.hasOwnProperty("shareDesc") && (window.shareDescStr = i.shareDesc),
									i.hasOwnProperty("shareTopic") && (window.shareTopicStr = i.shareTopic),
									i.hasOwnProperty("shareVideo") && (window.shareVideoStr = i.shareVideo),
									i.hasOwnProperty("shareCutId") && (window.shareCutIdStr = i.shareCutId),
									i.hasOwnProperty("shareImg") && (window.shareImageUrl = i.shareImg),
									i.hasOwnProperty("shareTid") && (window.shareTemplateId = i.shareTid),
									i.hasOwnProperty("shareQuety") && (window.shareQuety = i.shareQuety)
							}
						} catch (i) { }
					})
			},
			window.setReward = function (i, e, t) {
				if (window.isCanControl = !0, window.onSoundRecover(1), i) switch (e) {
					case 0:
						window.diaRevive.onReviveResult(!0);
						break;
					case 1:
						window.diaSettle.onRecordSuccess();
						break;
					case 2:
						window.diaTry.onTryResult(!0);
						break;
					case 3:
						window.diaFail.onReviveResult(!0);
						break;
					case 4:
						window.diaTryKun.onTryKunResult(!0);
						break;
					case 5:
						window.diaFreeGold.onFreeGoldResult(t)
				} else switch (e) {
					case 0:
						window.diaRevive.onReviveResult(!1)
				}
			},
			window.platformConfig = {
				wx: {
					AppID: "wxadc1dfa8c4589086",
					AppSecret: "b1069d82a2856e3b93797ef347d120fa",
					URL: "https://api.weixin.qq.com/sns/jscode2session",
					RewardedID: "adunit-667fb82c41e0d365",
					InterstitialID: "",
					GridAdID: "",
					BannerID: "adunit-b2a9e9001623fdb1",
					BannerW: 208
				},
				tt: {
					AppID: "ttd2c0a47d4dfac410",
					AppSecret: "d88494e15e6f7d3436f2a748370a000891bc2278",
					URL: "https://developer.toutiao.com/api/apps/jscode2session",
					RewardedID: "mfl7b1hecql35jb6fl",
					InterstitialID: "4l5kj2ki7hm20b73j1",
					BannerID: "1h71b4c4634d35ll5e",
					BannerW: 208
				},
				op: {
					AppID: "30434991",
					appSecret: "407674b794A2a2a4C43c6165823FE7Df",
					appKey: "496K06pGmZ0GOwckOSoOckO8c",
					pkgName: "com.oppo.dycxy.nearme.gamecenter",
					URL: "https://play.open.oppomobile.com/instant-game-open/userInfo",
					RewardedID: "268954",
					GamePortal: "282256",
					BannerID: "282257",
					BannerW: 380,
					width: 640,
					height: 320
				},
				vv: {
					AppID: "105485944",
					appKey: "b4fa5435a6dbf93e3424b2b85012c8a5",
					AppSecret: "30e30337edae6103d0460477689532b0",
					pkgName: "com.gzqy.dycxyzrb.vivominigame",
					URL: "https://quickgame.vivo.com.cn/api/quickgame/cp/account/userInfo",
					RewardedID: "cdf9b6f4e42a49f08f0a14dc0ae3228c",
					BannerID: "",
					BannerW: "",
					BannerH: 300,
					InterstitialID: "08b034382d8d4c978328a55544bf67fc",
					nativeID: ""
				},
				pc: {
					AppID: "ttafcbd97630ee4bce",
					AppSecret: "5aadb0c6a0c3b756644ea4c5b5311fa5d265a9c5 ",
					URL: "https://developer.toutiao.com/api/apps/jscode2session",
					RewardedID: "ff67konncancc6sxo5",
					InterstitialID: "2rbp95dsuf4l0kce6o",
					BannerID: "2mdrsgen1nk41dmfav",
					BannerW: 208
				}
			},
			window.gameTitle = ["小鱼新手", "小鱼达人", "鱼鱼小将", "精英鱼", "健将鱼", "宗师鱼", "王者鱼", "霸王鱼"],
			window.freeGold = [500, 500, 450, 405, 365, 328, 295, 266, 239, 215, 194, 174, 157, 141, 127, 114, 103, 93, 83, 75, 68, 61, 55, 49, 44, 40, 36, 32, 29, 26, 24, 23, 22, 21, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
			window.fishData = [{
				resPath: "subpackages/sk/yuqun.sk",
				name: "yuqun",
				skin: 0,
				w: 140,
				h: 50,
				scaleH: 70,
				br: 35,
				mx: -60,
				my: 10,
				mr: 68,
				en: 1,
				toNextEN: 10,
				money: 10,
				rx: -65,
				ry: -40,
				rw: 115,
				rh: 75,
				bw: 61
			},
			{
				resPath: "subpackages/sk/xiaochou.sk",
				name: "xiaochou",
				skin: 0,
				w: 310,
				h: 230,
				scaleH: 192,
				br: 150,
				mx: -75,
				my: 45,
				mr: 200,
				en: 2,
				toNextEN: 10,
				money: 20,
				rx: -65,
				ry: -40,
				rw: 115,
				rh: 75,
				bw: 61
			},
			{
				resPath: "subpackages/sk/hetunyu.sk",
				name: "hetun",
				skin: 0,
				w: 300,
				h: 230,
				scaleH: 200,
				br: 150,
				mx: -110,
				my: 15,
				mr: 200,
				en: 3,
				toNextEN: 20,
				money: 30,
				rx: -55,
				ry: -45,
				rw: 105,
				rh: 80,
				bw: 66
			},
			{
				resPath: "subpackages/sk/denglongyu.sk",
				name: "denglong",
				skin: 0,
				w: 380,
				h: 300,
				scaleH: 210,
				br: 145,
				mx: -30,
				my: 30,
				mr: 210,
				en: 4,
				toNextEN: 30,
				money: 40,
				rx: -60,
				ry: -40,
				rw: 125,
				rh: 85,
				bw: 78
			},
			{
				resPath: "subpackages/sk/shayu.sk",
				name: "shayu",
				skin: 0,
				w: 510,
				h: 300,
				scaleH: 240,
				br: 160,
				mx: -120,
				my: 30,
				mr: 310,
				en: 5,
				toNextEN: 40,
				money: 50,
				rx: -90,
				ry: -40,
				rw: 160,
				rh: 90,
				bw: 103
			},
			{
				resPath: "subpackages/sk/jinqiang.sk",
				name: "jinqiang",
				skin: 0,
				w: 620,
				h: 310,
				scaleH: 220,
				br: 165,
				mx: -30,
				my: 60,
				mr: 230,
				en: 6,
				toNextEN: 50,
				money: 60,
				rx: -85,
				ry: -20,
				rw: 190,
				rh: 70,
				bw: 145
			},
			{
				resPath: "subpackages/sk/hujing.sk",
				name: "yuqun",
				skin: 0,
				w: 690,
				h: 320,
				scaleH: 228,
				br: 170,
				mx: -160,
				my: 70,
				mr: 360,
				en: 1,
				toNextEN: 60,
				money: 10,
				rx: -120,
				ry: -30,
				rw: 210,
				rh: 80,
				bw: 135
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun01",
				skin: 1,
				w: 240,
				h: 130,
				scaleH: 60,
				br: 45,
				mx: -60,
				my: 0,
				mr: 90,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 175
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun02",
				skin: 2,
				w: 240,
				h: 130,
				scaleH: 60,
				br: 45,
				mx: -65,
				my: 0,
				mr: 90,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 200
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun04",
				skin: 4,
				w: 280,
				h: 120,
				scaleH: 48,
				br: 40,
				mx: -60,
				my: 10,
				mr: 85,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 220
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun03",
				skin: 3,
				w: 255,
				h: 130,
				scaleH: 55,
				br: 45,
				mx: -80,
				my: 10,
				mr: 90,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 218
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun05",
				skin: 5,
				w: 280,
				h: 130,
				scaleH: 80,
				br: 65,
				mx: -80,
				my: 20,
				mr: 140,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 240
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun06",
				skin: 6,
				w: 270,
				h: 130,
				scaleH: 60,
				br: 50,
				mx: -70,
				my: 0,
				mr: 110,
				en: 2,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 210
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun07",
				skin: 7,
				w: 240,
				h: 130,
				scaleH: 70,
				br: 60,
				mx: -70,
				my: 0,
				mr: 120,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 175
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun08",
				skin: 8,
				w: 240,
				h: 130,
				scaleH: 75,
				br: 65,
				mx: -80,
				my: 15,
				mr: 130,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 198
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun10",
				skin: 10,
				w: 290,
				h: 150,
				scaleH: 58,
				br: 50,
				mx: -75,
				my: 0,
				mr: 90,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 235
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun11",
				skin: 11,
				w: 280,
				h: 150,
				scaleH: 55,
				br: 55,
				mx: -70,
				my: 10,
				mr: 90,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 223
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun12",
				skin: 12,
				w: 260,
				h: 130,
				scaleH: 58,
				br: 55,
				mx: -70,
				my: 10,
				mr: 100,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 205
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun14",
				skin: 14,
				w: 310,
				h: 130,
				scaleH: 55,
				br: 50,
				mx: -70,
				my: 0,
				mr: 90,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 255
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun15",
				skin: 15,
				w: 270,
				h: 150,
				scaleH: 65,
				br: 60,
				mx: -70,
				my: 0,
				mr: 100,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 233
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun16",
				skin: 16,
				w: 230,
				h: 120,
				scaleH: 50,
				br: 50,
				mx: -70,
				my: 0,
				mr: 85,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 177
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun17",
				skin: 17,
				w: 255,
				h: 130,
				scaleH: 60,
				br: 55,
				mx: -70,
				my: 0,
				mr: 90,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 200
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun18",
				skin: 18,
				w: 255,
				h: 130,
				scaleH: 58,
				br: 55,
				mx: -70,
				my: 10,
				mr: 90,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 210
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun20",
				skin: 20,
				w: 300,
				h: 130,
				scaleH: 72,
				br: 70,
				mx: -70,
				my: 0,
				mr: 120,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 256
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun21",
				skin: 21,
				w: 320,
				h: 130,
				scaleH: 70,
				br: 70,
				mx: -70,
				my: 0,
				mr: 120,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 270
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun22",
				skin: 22,
				w: 300,
				h: 130,
				scaleH: 75,
				br: 80,
				mx: -70,
				my: 10,
				mr: 120,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 243
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun23",
				skin: 23,
				w: 320,
				h: 130,
				scaleH: 80,
				br: 80,
				mx: -70,
				my: 10,
				mr: 130,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 270
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun26",
				skin: 26,
				w: 300,
				h: 130,
				scaleH: 90,
				br: 100,
				mx: -80,
				my: 0,
				mr: 150,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 249
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun27",
				skin: 27,
				w: 350,
				h: 150,
				scaleH: 90,
				br: 100,
				mx: -80,
				my: 10,
				mr: 150,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 280
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun29",
				skin: 29,
				w: 320,
				h: 130,
				scaleH: 75,
				br: 80,
				mx: -80,
				my: 10,
				mr: 140,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 248
			},
			{
				resPath: "subpackages/sk/Kun.sk",
				name: "kun30",
				skin: 30,
				w: 280,
				h: 130,
				scaleH: 80,
				br: 90,
				mx: -80,
				my: 10,
				mr: 140,
				en: 7,
				toNextEN: 35,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 236
			},
			{
				resPath: "subpackages/sk/GeSiLa.sk",
				name: "geSiLa",
				skin: 0,
				w: 160,
				h: 170,
				scaleH: 50,
				br: 60,
				mx: 120,
				my: -80,
				mr: 80,
				en: 7,
				toNextEN: 240,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 248
			},
			{
				resPath: "subpackages/sk/long.sk",
				name: "dragon",
				skin: 0,
				w: 160,
				h: 170,
				scaleH: 50,
				br: 60,
				mx: 75,
				my: -75,
				mr: 80,
				en: 7,
				toNextEN: 240,
				money: 10,
				rx: -115,
				ry: -40,
				rw: 260,
				rh: 85,
				bw: 248
			}],
			window.GAME_STATE_LOAD = 0,
			window.GAME_STATE_MAIN = 1,
			window.GAME_STATE_GUIDE = 2,
			window.GAME_STATE_READY = 3,
			window.GAME_STATE_TRY = 4,
			window.GAME_STATE_GAME = 5,
			window.GAME_STATE_PAUSE = 6,
			window.GAME_STATE_REVIVE = 7,
			window.GAME_STATE_REWORD = 8,
			window.GAME_STATE_SETTLE = 9,
			window.GAME_STATE_NULL = 10,
			window.GAME_STATE_POOL = 11,
			window.FISH_STATE_UN_USE = 0,
			window.FISH_STATE_SWIM = 1,
			window.FISH_STATE_BE_EAT = 3;
		class c {
			constructor(i) {
				window.sysInfo = wx.getSystemInfoSync(),
					window.networkStatus || (window.networkStatus = {},
						this.getNetworkStatus(function (e) {
							window.networkStatus.networkType = e.networkType,
								window.networkStatus.isConnected = e.isConnected,
								Laya.timer.once(100, this,
									function () {
										"function" == typeof i && i()
									})
						}))
			}
			static Getinstance(i) {
				return null == r && (r = new c(i)),
					r
			}
			showAuthorizeBtn(i) {
				window.btnAuthorize = wx.createUserInfoButton({
					type: "text",
					text: "",
					style: {
						left: window.authorBtnX,
						top: window.authorBtnY,
						width: window.authorBtnW,
						height: window.authorBtnH
					},
					withCredentials: !1
				}),
					window.btnAuthorize.show(),
					window.btnAuthorize.onTap(function (e) {
						r.setUserInfo(i, e)
					})
			}
			getOpenId(i) {
				let e = window.platform.config[window.plat];
				wx.login({
					success(o) {
						if (o.code) {
							let s = new w,
								n = {
									url: e.URL,
									appid: e.AppID,
									secret: e.AppSecret,
									js_code: o.code,
									grant_type: "authorization_code"
								};
							s.userLogin(n,
								function (e) {
									let o = JSON.parse(e),
										s = JSON.parse(o.data);
									s.hasOwnProperty("openid") ? (window.userInfo.openid = s.openid, window.userInfo.authorize = !0, window.user.data.authorize = window.userInfo.authorize, window.user.data.openid = t.checknum(window.userInfo.openid + ""), window.user.data.name = window.userInfo.name, window.user.data.headUrl = window.userInfo.headUrl, window.user.data.gender = window.userInfo.gender, window.user.data.city = window.userInfo.city, "function" == typeof i && i(1), window.btnAuthorize && r.hideAuthorizeBtn()) : "function" == typeof i && i(0)
								})
						} else "function" == typeof i && i(0)
					},
					fail(e) {
						"function" == typeof i && i(0)
					}
				})
			}
			hideAuthorizeBtn() {
				window.btnAuthorize && (window.btnAuthorize.destroy(), window.btnAuthorize = null, window.isNeedShowAuthorizeBtn = !0)
			}
			setUserInfo(i, e) {
				e.userInfo ? (window.userInfo.name = e.userInfo.nickName, window.userInfo.gender = e.userInfo.gender, window.userInfo.city = e.userInfo.city, window.userInfo.headUrl = e.userInfo.avatarUrl, "" == window.userInfo.headUrl && (window.userInfo.headUrl = "res/head1.png"), "tt" == window.plat ? (window.userInfo.authorize = !0, "function" == typeof i && i(1)) : r.getOpenId(i)) : "function" == typeof i && i(0)
			}
			authorizeTT(i) {
				let e = window.platform.config[window.plat];
				wx.login({
					success(t) {
						t.code ? wx.request({
							url: e.URL,
							method: "GET",
							data: {
								appid: e.AppID,
								secret: e.AppSecret,
								code: t.code,
								anonymousCode: t.anonymousCode
							},
							success(e) {
								window.userInfo.openid = e.data.openid,
									window.userInfo.anonymousOpenid = e.data.anonymous_openid,
									tt.authorize({
										scope: "scope.userInfo",
										success(e) {
											"ok" == e.data["scope.userInfo"] ? wx.getUserInfo({
												lang: "zh_CN",
												success(e) {
													r.setUserInfo(i, e)
												},
												fail(e) {
													"function" == typeof i && i(!1)
												}
											}) : "function" == typeof i && i(!1)
										},
										fail(e) {
											window.userInfo.close = !0,
												"function" == typeof i && i(!0)
										}
									})
							},
							fail(e) {
								"function" == typeof i && i(!1)
							}
						}) : "function" == typeof i && i(!1)
					},
					fail(e) {
						"function" == typeof i && i(!1)
					}
				})
			}
			openSetting(i) {
				wx.openSetting({
					success(e) {
						e.reslut = "success",
							"function" == typeof i && i(e)
					},
					fail(e) {
						e.reslut = "fail",
							"function" == typeof i && i(e)
					}
				})
			}
			getSetting(i) {
				wx.getSetting({
					success(e) {
						e.authSetting["scope.userInfo"] ? r.getUserInfo(i) : "function" == typeof i && i(2)
					},
					fail(e) {
						e.reslut = "fail",
							"function" == typeof i && i(0)
					}
				})
			}
			getUserInfo(i) {
				wx.getUserInfo({
					success(e) {
						window.userInfo.name = e.userInfo.nickName,
							window.userInfo.gender = e.userInfo.gender,
							window.userInfo.city = e.userInfo.city,
							window.userInfo.headUrl = e.userInfo.avatarUrl,
							"" == window.userInfo.headUrl && (window.userInfo.headUrl = "res/head1.png"),
							r.getOpenId(i)
					},
					fail(e) {
						"function" == typeof i && i(0)
					}
				})
			}
			showShareMenu(i) {
				wx.showShareMenu({
					success(e) {

						i && i("success", e)
					},
					fail(e) {
						i && i("fail", e)
					},
					complete(e) {
						i && i("complete", e)
					}
				})
			}
			hideShareMenu(i) {
				wx.hideShareMenu({
					success(e) {
						i && i("success", e)
					},
					fail(e) {
						i && i("fail", e)
					},
					complete(e) {
						i && i("complete", e)
					}
				})
			}
			onShareAppMessage(i) {
				Laya.Browser.onMiniGame ? wx.aldOnShareAppMessage(i) : wx.onShareAppMessage(i)
			}
			offShareAppMessage(i) {
				wx.offShareAppMessage(i)
			}
			shareAppMessage(i, e) {
				let t = i;
				t && (t.success = function (i) {
					window.isShareFinish = !0,
						i.confirm || i.errMsg ? "function" == typeof e && e("confirm") : "function" == typeof e && e("cancel")
				},
					t.fail = function (i) {
						window.isShareFinish = !0,
							"function" == typeof e && e("fail")
					},
					Laya.Browser.onMiniGame ? wx.aldShareAppMessage(t) : wx.shareAppMessage(t), window.tt || "function" == typeof e && e("wx"))
			}
			getRewardedAD(i, e, t) {
				if (i.RewardedID) {
					if (window.networkStatus.isConnected) return wx.createRewardedVideoAd ? this.videoAD || (this.videoAD = wx.createRewardedVideoAd({
						adUnitId: i.RewardedID
					}), this.videoAD.onLoad(function () { }), this.videoAD.onError(function (i) {
						console.log("rewarded ad error----------"),
							console.log(i)
					}), this.videoAD.onClose(function (i) {
						i && i.isEnded || void 0 === i ? i.isEnded = !0 : i.isEnded = !1,
							i.errMsg = "ok",
							"function" == typeof t && t(i)
					})) : "function" == typeof t && t({
						errMsg: "notsupport"
					}),
						e.on("rewarde", this,
							function (i) {
								window.networkStatus.isConnected ? wx.createRewardedVideoAd ? ("show" != i && "showAgain" != i || ("tt" == window.plat && "Douyin" == window.sysInfo.appName && "ios" == window.sysInfo.platform && "function" == typeof t && t({
									errMsg: "notsupport"
								}), this.videoAD.show().
									catch(function (o) {
										"show" == i ? e.event("rewarde", ["load"]) : "showAgain" == i && "function" == typeof t && t({
											networking: !0,
											errMsg: "fail"
										})
									})), "load" == i && this.videoAD.load().then(function (i) {
										e.event("rewarde", ["showAgain"])
									}).
										catch(function (i) {
											"function" == typeof t && t({
												networking: !0,
												errMsg: "fail"
											})
										})) : "function" == typeof t && t({
											errMsg: "notsupport"
										}) : "function" == typeof t && t({
											networking: !1,
											errMsg: "fail"
										})
							}),
						this.videoAD;
					"function" == typeof t && t({
						networking: !1,
						errMsg: "fail"
					})
				}
			}
			getBannerAD(i, e) {
				if (!i.BannerID || !i.BannerW) return;
				window.isSupportBannerAd = !0;
				const {
					windowWidth: t,
					windowHeight: o
				} = wx.getSystemInfoSync();
				let s = parseInt(i.BannerW);
				t > o ? s > t / 2 && (s = t / 2) : s > t && (s = t);
				let n = wx.createBannerAd({
					adUnitId: i.BannerID,
					adIntervals: 30,
					style: {
						width: s,
						top: o - s / 16 * 9,
						left: (t - s) / 2
					}
				});
				n && (n.onLoad(function () { }), n.onResize(function (i) {
					n.style.top = o - i.height,
						n.style.left = (t - i.width) / 2;
					let e = t;
					e > o && (e = o);
					let s = Laya.stage.width / e;
					window.bannerH = i.height * s,
						window.sceMain && window.sceMain.reSetUI && window.sceMain.reSetUI()
				}), n.onError(function (i) {
					"1003" == i.errCode ? window.isSupportBannerAd = !1 : (console.log("bannerAd onError:"), console.log(i))
				}), e.on("banner", this,
					function (i) {
						window.networkStatus.isConnected && window.isSupportBannerAd && ("show" == i ? n.show() : "hide" == i ? n.hide() : "destroy" == i && n.destroy())
					}))
			}
			getMoreGameBanner(i, e) {
				if (!tt || !tt.createMoreGamesBanner) return;
				const {
					windowWidth: t,
					windowHeight: o
				} = wx.getSystemInfoSync();
				let s = tt.createMoreGamesBanner({
					style: {
						width: t,
						horizontalAlign: "center",
						verticalAlign: "bottom"
					},
					appLaunchOptions: []
				});
				s && (s.onResize(function (i) {
					s.style.top = o - i.height,
						s.style.left = (t - i.width) / 2
				}), e.on("moreGameBanner", this,
					function (i) {
						window.networkStatus.isConnected && window.isSupportBannerAd && ("show" == i ? s.show() : "hide" == i ? s.hide() : "destroy" == i && s.destroy())
					}))
			}
			getInterstitialAd(i, e) {
				i.InterstitialID && tt && tt.createInterstitialAd && (window.interstitialAd = null, e.on("interstitial", this,
					function (e) {
						window.networkStatus.isConnected && "show" == e && (window.interstitialAd && (window.interstitialAd.destroy(), window.interstitialAd = null), window.interstitialAd = tt.createInterstitialAd({
							adUnitId: i.InterstitialID
						}), window.interstitialAd.onError(function (i) {
							console.log("interstitialAd onError : ", i)
						}), window.interstitialAd.load().then(() => {
							window.interstitialAd.show()
						}).
							catch(i => {
								console.log("load interstitial erro : ", i)
							}))
					}))
			}
			loadSubpackage(i, e) {
				if (window.tt) {
					let i = {
						progress: 0,
						totalBytesWritten: 0,
						totalBytesExpectedToWrite: 100
					};
					Laya.timer.loop(10, this,
						function () {
							i.progress += 1,
								i.totalBytesWritten = i.progress,
								window.loading.event("loading", [i]),
								i.progress >= 100 && (i = {
									errMsg: "loadSubpackage:ok"
								},
									Laya.timer.clearAll(this), "function" == typeof e && e())
						})
				} else {
					wx.loadSubpackage({
						name: i,
						success: function (i) {
							i.mark = 1,
								i.progress = 100,
								"function" == typeof e && e(i)
						},
						fail: function (i) { }
					}).onProgressUpdate(function (i) {
						i.mark = 0,
							i.progress >= 100 && (i.progress = 99),
							"function" == typeof e && e(i)
					})
				}
			}
			onVibrate(i = "shot") {
				window.vibrateShort();
			}
			onShow(i) {
				wx.onShow(i)
			}
			onHide(i) {
				wx.onHide(i)
			}
			sendDataToDataContext(i) {
				wx.getOpenDataContext().postMessage(i)
			}
			sendUrlToDataContext(i, e) {
				switch (i) {
					case "json":
						Laya.MiniAdpter.sendJsonDataToDataContext(e);
						break;
					case "atlas":
						Laya.MiniAdpter.sendAtlasToOpenDataContext(e);
						break;
					case "pic":
						Laya.MiniAdpter.sendSinglePicToOpenDataContext(e)
				}
			}
			onGameRecorder(i, e) {
				if (!window.isHaveVideoShare || !tt.getGameRecorderManager) return;
				let t = tt.getGameRecorderManager(),
					o = 0,
					s = 0;
				t.onStart(function (i) {
					let t = (new Date).getTime();
					window.recordTimeStart = t,
						window.recordShow = !1,
						window.recordTimePause = 0,
						o = t,
						s = 0,
						i.startTime = o,
						i.state = "onStart",
						"function" == typeof e && e(i)
				}),
					t.onStop(function (i) {
						i.state = "onStop",
							i.dtTime = (new Date).getTime() - o - s,
							window.recordShow = i.dtTime > window.recordMinTime,
							window.recordTimeStart = 0,
							window.recordTimePause = 0,
							window.shareVideoFile = i.videoPath,
							"function" == typeof e && e(i),
							t.clipVideo({
								path: i.videoPath,
								timeRange: [15, 0],
								success(i) {
									window.recordData.videoPath = i.videoPath
								}
							})
					}),
					t.onPause(function (i) {
						s = (new Date).getTime(),
							i.state = "onPause",
							"function" == typeof e && e(i)
					}),
					t.onResume(function (i) {
						s = (new Date).getTime() - s,
							i.pauseTime = s,
							i.state = "onResume",
							"function" == typeof e && e(i)
					}),
					t.onError(function (i) {
						i.dtTime = 0,
							i.state = "onError",
							"function" == typeof e && e(i),
							o = 0,
							s = 0,
							window.recordTimeStart = 0,
							window.recordTimePause = 0,
							window.recordShow = !1
					}),
					window.recordTimeStart = 0,
					window.recordTimePause = 0,
					window.recordShow = !1,
					i.on("record", this,
						function (i) {
							if ("start" == i) {
								if ("onStop" == window.recordState) {
									let i = 100 + Math.floor(100 * Math.random());
									Laya.timer.once(i, this,
										function () {
											window.recordTimeStart = (new Date).getTime(),
												window.recordShow = !1,
												window.recordTimePause = 0,
												t.start({
													duration: 30,
													isMarkOpen: !1
												})
										})
								}
							} else "stop" == i ? "onPause" == window.recordState ? (window.recordEvent.event("record", ["resume"]), Laya.timer.once(200, this,
								function () {
									window.recordEvent.event("record", ["stop"])
								})) : "onStop" != window.recordState && (0 != window.recordTimeStart && (window.recordShow = (new Date).getTime() - window.recordTimeStart > window.recordMinTime, window.recordTimeStart = 0, window.recordTimePause = 0), t.stop()) : "pause" == i ? "onStart" == window.recordState && (window.recordTimePause = (new Date).getTime(), t.pause()) : "resume" == i && "onPause" == window.recordState && (0 != window.recordTimePause && (window.recordTimeStart -= (new Date).getTime() - window.recordTimePause, window.recordTimePause = 0), t.resume())
						})
			}
			getNetworkStatus(i) {
				wx.onNetworkStatusChange(function (e) {
					"function" == typeof i && i(e)
				}),
					wx.getNetworkType({
						success(e) {
							"none" == e.networkType || "offline" == e.networkType ? e.isConnected = !1 : e.isConnected = !0,
								"function" == typeof i && i(e)
						},
						fail(e) {
							"function" == typeof i && i(e)
						}
					})
			}
			getDesktopIconState(i) {
				"function" == typeof i && i(!0)
			}
			getSystemInfo(i) {
				wx.getSystemInfo({
					success(e) {
						"function" == typeof i && i(e)
					}
				})
			}
			getLaunchOptionsSync() {
				return wx.getLaunchOptionsSync()
			}
			reportAnalytics(i, e) {
				"tt" == window.plat ? tt.reportAnalytics(i, e) : window.plat
			}
			createMoreGameBtn(i) {
				if ("tt" == window.plat && "ios" != window.sysInfo.platform) {
					let s = ["tt3fc3497ea0e924bc", "ttc4deb2635bf4aa50", "ttc63eb083591b2750", "ttf9d68f6b66fcbc0b", "tt08c17e7c97eb834e", "tt3eb2480fa19877fb", "tt2def5b52b2c5a4ee", "tt8eaaf8171180099c", "tt3b5e4de3a474a39e", "tt6d131baef239f4b8"];
					for (var e = [], t = 0; t < s.length; t++) {
						var o = {
							query: "foo=bar&baz=qux",
							extraData: {}
						};
						o.appId = s[t],
							e.push(o)
					}
					window.platform.config[window.plat].AppID;
					window.moreGameBtn = tt.createMoreGamesButton({
						type: "text",
						text: "",
						style: {
							left: moreGameBtnX,
							top: moreGameBtnY,
							width: moreGameBtnW,
							height: moreGameBtnH,
							backgroundColor: "",
							borderWidth: 0
						},
						appLaunchOptions: e,
						onNavigateToMiniGame(i) {
							console.log("跳转其他小游戏", i)
						}
					}),
						window.moreGameBtn.hide(),
						window.moreGameBtn.onTap(() => {
							"function" == typeof i && i()
						})
				}
			}
			showMoreGameBtn() {
				window.moreGameBtn && "tt" == window.plat && "ios" != window.sysInfo.platform && window.moreGameBtn.show()
			}
			hideMoreGameBtn() {
				window.moreGameBtn && "tt" == window.plat && "ios" != window.sysInfo.platform && window.moreGameBtn.hide()
			}
			initRecommendationButton() { }
			showRecommendationButton() { }
			hideRecommendationButton() { }
			setClipboardData(i) { }
		}
		class p {
			constructor(i) {
				window.isDebug = !0,
					Laya.SoundManager.useAudioMusic = !1,
					this.isFinishAds = !0,
					this.isSuccessShare = !0,
					this.isShareVideo = !0,
					this.getSystemInfo(function (e) {
						window.sysInfo = e,
							Laya.timer.once(100, this,
								function () {
									"function" == typeof i && i()
								})
					})
			}
			static Getinstance(i) {
				return null == l && (l = new p(i)),
					l
			}
			authorizeTT(i) {
				Laya.timer.once(1e3, this,
					function () {
						window.userInfo = {
							close: !1,
							authorize: !0,
							anonymousOpenid: "",
							openid: "default",
							name: "小明",
							headUrl: "res/head.png",
							gender: 1,
							city: "广州"
						},
							"function" == typeof i && i(!0)
					})
			}
			openSetting(i) {
				console.log("调起客户端小程序设置界面");
				"function" == typeof i && i({
					reslut: "success",
					authSetting: {
						"scope.camera": !0,
						"scope.record": !0
					}
				})
			}
			showShareMenu(i) {
				"function" == typeof i && i()
			}
			hideShareMenu(i) {
				"function" == typeof i && i()
			}
			onShareAppMessage(i) {
				"function" == typeof i && i()
			}
			offShareAppMessage(i) {
				"function" == typeof i && i()
			}
			shareAppMessage(i, e) {
				"function" == typeof e && e("confirm")
			}
			showShareCanvas() { }
			jump(i, e, t, o) { }
			getRewardedAD(i, e, t) {
				return e.on("rewarde", this,
					function (i) {

						if ("show" == i) {
							let i = !0;
							"function" == typeof t && t({
								errMsg: "ok",
								isEnded: i
							})
						}
					}),
					this.videoAD
			}
			getBannerAD(i, e) { }
			getMoreGameBanner(i, e) { }
			getInterstitialAd(i, e) { }
			loadSubpackage(i, e) {
				let t = {
					progress: 0,
					totalBytesWritten: 0,
					totalBytesExpectedToWrite: 100
				};
				Laya.timer.loop(1, this,
					function () {
						t.progress += 5,
							t.totalBytesWritten = t.progress,
							t.progress >= 100 && (t.progress = 100, Laya.timer.clearAll(this)),
							"function" == typeof e && e(t)
					})
			}
			onVibrate(i = "shot") {window.vibrateShort() }
			onShow(i) {
				Laya.stage.on(Laya.Event.FOCUS, this,
					function () {
						i && i()
					})
			}
			onHide(i) {
				Laya.stage.on(Laya.Event.BLUR, this,
					function () {
						i && i()
					})
			}
			sendDataToDataContext(i) { }
			sendUrlToDataContext(i, e) {
				i
			}
			onGameRecorder(i, e) {
				window.recorderRes = {},
					window.onStopRecord = function (i) {
						window.recorderRes.state = "onStop",
							window.recorderRes.dtTime = (new Date).getTime() - window.recorderRes.startTime - window.recorderRes.pauseTime,
							window.recorderRes.videoPath = "file://aa.mp4",
							window.recordShow = window.recorderRes.dtTime > window.recordMinTime,
							window.recordTimeStart = 0,
							window.recordTimePause = 0,
							"function" == typeof e && e(window.recorderRes)
					},
					window.recordTimeStart = 0,
					window.recordTimePause = 0,
					window.recordShow = !1,
					i.on("record", this,
						function (i) {
							"start" == i && (console.log("-----------------开始录屏"), window.recordTimeStart = (new Date).getTime(), window.recordShow = !1, window.recordTimePause = 0, window.recorderRes.state = "onStart", window.recorderRes.startTime = (new Date).getTime(), window.recorderRes.pauseTime = 0, Laya.timer.once(1e4, this,
								function () {
									window.onStopRecord(!0)
								}), "function" == typeof e && e(window.recorderRes)),
								"stop" == i && (console.log("-----------------停止录屏"), 0 != window.recordTimeStart && (window.recordShow = (new Date).getTime() - window.recordTimeStart > window.recordMinTime, window.recordTimeStart = 0, window.recordTimePause = 0), window.onStopRecord(!1), Laya.timer.clearAll(this)),
								"pause" == i && (console.log("-----------------暂停录屏"), window.recordTimePause = (new Date).getTime(), window.recorderRes.state = "onPause", window.recorderRes.pauseTimePoint = (new Date).getTime(), "function" == typeof e && e(window.recorderRes)),
								"resume" == i && (console.log("-----------------继续录屏"), 0 != window.recordTimePause && (window.recordTimeStart -= (new Date).getTime() - window.recordTimePause, window.recordTimePause = 0), window.recorderRes.state = "onResume", window.recorderRes.pauseTime = window.recorderRes.pauseTime + (new Date).getTime() - window.recorderRes.pauseTimePoint, "function" == typeof e && e(window.recorderRes))
						})
			}
			getSystemInfo(i) {
				"function" == typeof i && i({
					appName: "Douyin",
					platform: "pc"
				})
			}
			getLaunchOptionsSync() {
				return {
					query: "",
					scene: "011014"
				}
			}
			reportAnalytics(i, e) { }
			createMoreGameBtn() { }
			showMoreGameBtn() { }
			hideMoreGameBtn() { }
			initRecommendationButton() { }
			showRecommendationButton() { }
			hideRecommendationButton() { }
			setClipboardData(i) { }
			createDesktopIcon(i) {
				"function" == typeof i && i(1)
			}
			getDesktopIconState(i) {
				Laya.timer.once(500, this,
					function () {
						"function" == typeof i && i(!1)
					})
			}
		}
		class u extends Laya.Sprite {
			constructor(i = 0) {
				super(),
					this.elementNum = 100,
					this.vMin = 5;
				this.vSpace = 40 - this.vMin,
					this.g = .8,
					this.vAngleMax = 20,
					this.radius = 30,
					this.name = "Salute",
					this.resNum = 8,
					this.elements = [];
				for (let e = this.elementNum - 1; e >= 0; e--) {
					let t = {
						body: null,
						vx: 0,
						vy: 0,
						vAngle: 0
					};
					t.body = new Laya.Sprite,
						this.addChild(t.body);
					let o = [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ["1", "5"], ["2", "6"], ["3", "7"], ["0", "4"], ["8", "9"], ["10", "11"], ["0", "4", "2", "6"], ["Gold"]];
					t.body.loadImage("res/liHua_" + o[i][e % o[i].length] + ".png");
					let s = t.body.getBounds();
					t.body.pivot(s.width / 2, s.height / 2),
						t.body.scaleX = 2,
						t.body.scaleY = 2,
						this.elements.push(t)
				}
				this.isRecovered = !1,
					this.timerRun = null
			}
			init1(i, e, t, o) {
				this.addv = 1,
					this.isRecovered = !1,
					i.addChild(this),
					this.zOrder = 1e5,
					this.x = e,
					this.y = t;
				for (let i = this.elementNum - 1; i >= 0; i--) {
					this.elements[i].body.x = 0,
						this.elements[i].body.y = 0,
						this.elements[i].body.rotation = 360 * Math.random();
					let e = 360 * Math.random() * (Math.PI / 180),
						t = this.vMin + Math.random() * this.vSpace;
					this.elements[i].vx = t * Math.cos(e),
						this.elements[i].vy = t * Math.sin(e),
						this.elements[i].addg = 0,
						this.elements[i].vAngleV = (t - this.vMin) / this.vSpace * this.vAngleMax
				}
				null != this.timerRun && Laya.timer.clearAll(this),
					this.timerRun = Laya.timer.frameLoop(1, this, this.run)
			}
			init(i, e, t, o) {
				this.addv = .995,
					this.elementNum = 50,
					this.vMin = 5;
				this.vSpace = 20 - this.vMin,
					this.g = .1,
					this.isRecovered = !1,
					i.addChild(this),
					this.zOrder = 1e5,
					this.x = e,
					this.y = t;
				for (let i = this.elementNum - 1; i >= 0; i--) {
					this.elements[i].body.x = 0,
						this.elements[i].body.y = 0,
						this.elements[i].body.rotation = 360 * Math.random();
					let e = (o - this.radius + Math.random() * (2 * this.radius)) * (Math.PI / 180),
						t = this.vMin + Math.random() * this.vSpace;
					this.elements[i].vx = t * Math.cos(e),
						this.elements[i].vy = t * Math.sin(e),
						this.elements[i].addg = 0,
						this.elements[i].vAngleV = (t - this.vMin) / this.vSpace * this.vAngleMax
				}
				null != this.timerRun && Laya.timer.clearAll(this),
					this.timerRun = Laya.timer.frameLoop(1, this, this.run)
			}
			run() {
				if (this.isRecovered) return;
				let i = !1;
				for (let e = this.elementNum - 1; e >= 0; e--) {
					this.elements[e].body.x += this.elements[e].vx,
						this.elements[e].body.y += this.elements[e].vy + this.elements[e].addg,
						this.elements[e].body.rotation += this.elements[e].vAngleV;
					let t = this.addv;
					this.elements[e].vx *= t,
						this.elements[e].vy *= t,
						this.elements[e].vAngleV *= t,
						this.elements[e].addg += this.g,
						0 == i && this.elements[e].body.y + this.y < Laya.stage.height + 20 && (i = !0)
				}
				0 == i && this.recoverSelf()
			}
			recoverSelf() {
				this.isRecovered || (this.isRecovered = !0, this.removeSelf(), Laya.timer.clearAll(this), this.timerRun = null, Laya.Pool.recover("Salute", this))
			}
		}
		function rotateRight(i, e) {
			return e >>> i | e << 32 - i
		}
		function choice(i, e, t) {
			return i & e ^ ~i & t
		}
		function majority(i, e, t) {
			return i & e ^ i & t ^ e & t
		}
		function sha256_Sigma0(i) {
			return rotateRight(2, i) ^ rotateRight(13, i) ^ rotateRight(22, i)
		}
		function sha256_expand(i, e) {
			return i[15 & e] += (rotateRight(17, t = i[e + 14 & 15]) ^ rotateRight(19, t) ^ t >>> 10) + i[e + 9 & 15] +
				function (i) {
					return rotateRight(7, i) ^ rotateRight(18, i) ^ i >>> 3
				}(i[e + 1 & 15]);
			var t
		}
		var m, f, b, y = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
			g = "0123456789abcdef";
		function safe_add(i, e) {
			var t = (65535 & i) + (65535 & e);
			return (i >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t
		}
		function sha256_transform() {
			var i, e, t, o, s, n, a, w, d, h, r, l = new Array(16);
			i = m[0],
				e = m[1],
				t = m[2],
				o = m[3],
				s = m[4],
				n = m[5],
				a = m[6],
				w = m[7];
			for (var c = 0; c < 16; c++) l[c] = b[3 + (c << 2)] | b[2 + (c << 2)] << 8 | b[1 + (c << 2)] << 16 | b[c << 2] << 24;
			for (var p = 0; p < 64; p++) d = w + (rotateRight(6, r = s) ^ rotateRight(11, r) ^ rotateRight(25, r)) + choice(s, n, a) + y[p],
				d += p < 16 ? l[p] : sha256_expand(l, p),
				h = sha256_Sigma0(i) + majority(i, e, t),
				w = a,
				a = n,
				n = s,
				s = safe_add(o, d),
				o = t,
				t = e,
				e = i,
				i = safe_add(d, h);
			m[0] += i,
				m[1] += e,
				m[2] += t,
				m[3] += o,
				m[4] += s,
				m[5] += n,
				m[6] += a,
				m[7] += w
		}
		function hex_sha256(i) {
			return m = new Array(8),
				f = new Array(2),
				b = new Array(64),
				f[0] = f[1] = 0,
				m[0] = 1779033703,
				m[1] = 3144134277,
				m[2] = 1013904242,
				m[3] = 2773480762,
				m[4] = 1359893119,
				m[5] = 2600822924,
				m[6] = 528734635,
				m[7] = 1541459225,
				function (i, e) {
					var t, o, s = 0;
					o = f[0] >> 3 & 63;
					var n = 63 & e;
					for ((f[0] += e << 3) < e << 3 && f[1]++, f[1] += e >> 29, t = 0; t + 63 < e; t += 64) {
						for (var a = o; a < 64; a++) b[a] = i.charCodeAt(s++);
						sha256_transform(),
							o = 0
					}
					for (a = 0; a < n; a++) b[a] = i.charCodeAt(s++)
				}(i, i.length),
				function () {
					var i = f[0] >> 3 & 63;
					if (b[i++] = 128, i <= 56) for (var e = i; e < 56; e++) b[e] = 0;
					else {
						for (e = i; e < 64; e++) b[e] = 0;
						for (sha256_transform(), e = 0; e < 56; e++) b[e] = 0
					}
					b[56] = f[1] >>> 24 & 255,
						b[57] = f[1] >>> 16 & 255,
						b[58] = f[1] >>> 8 & 255,
						b[59] = 255 & f[1],
						b[60] = f[0] >>> 24 & 255,
						b[61] = f[0] >>> 16 & 255,
						b[62] = f[0] >>> 8 & 255,
						b[63] = 255 & f[0],
						sha256_transform()
				}(),
				function () {
					for (var i = new String,
						e = 0; e < 8; e++) for (var t = 28; t >= 0; t -= 4) i += g.charAt(m[e] >>> t & 15);
					return i
				}()
		}
		let S,
			v;
		class L {
			constructor(i) {
				// window.sysInfo = qg.getSystemInfoSync(),
				window.networkStatus || (window.networkStatus = {},
					window.isCallBack = !1, this.getNetworkStatus(function (e) {
						window.networkStatus.networkType = e.networkType,
							window.networkStatus.isConnected = e.isConnected,
							window.isCallBack || (window.isCallBack = !0, Laya.timer.once(100, this,
								function () {
									"function" == typeof i && i()
								}))
					}))
			}
			static Getinstance(i) {
				return null == S && (S = new L(i)),
					S
			}
			getUserinfo(i) {
				// qg.login({
				// 	success: function(e) {
				// 		if (Laya.Browser.onQGMiniGame) S.setUserInfo(e, i);
				// 		else {
				// 			let t = e.data.token,
				// 			o = window.platform.config[window.plat],
				// 			s = 1 + Math.floor(9 * Math.random());
				// 			for (let i = 1; i < 32; i++) s += "" + Math.floor(10 * Math.random());
				// 			let n = new Map;
				// 			n.set("appKey", o.appKey),
				// 			n.set("appSecret", o.AppSecret),
				// 			n.set("nonce", s),
				// 			n.set("pkgName", o.pkgName),
				// 			n.set("timestamp", Laya.Browser.now()),
				// 			n.set("token", t);
				// 			let a = "";
				// 			n.forEach((i, e, t) =>{
				// 				a += e + "=" + i + "&"
				// 			});
				// 			let w = hex_sha256(a.substr(0, a.length - 1)).toUpperCase(),
				// 			d = o.URL + "?" + a + "signature=" + w;
				// 			qg.request({
				// 				url: d,
				// 				dataType: "json",
				// 				success: function(e) {
				// 					let t = e.data;
				// 					t.data.avatar = t.data.biggerAvatar,
				// 					t.data.avatar || (t.data.avatar = t.data.smallAvatar),
				// 					t.data.uid = t.data.openId,
				// 					t.data.sex = t.data.gender,
				// 					S.setUserInfo(t, i)
				// 				},
				// 				fail: function(e, t) {
				// 					console.log("-------qg.request fail", e),
				// 					"function" == typeof i && i(0)
				// 				}
				// 			})
				// 		}
				// 	},
				// 	fail: function(e) {
				// 		console.log("---------qg.login fail : ", e),
				// 		"function" == typeof i && i(0)
				// 	}
				// })
			}
			setUserInfo(i, e) {
				window.userInfo = {
					close: !1,
					authorize: !0,
					anonymousOpenid: "",
					openid: i.data.uid,
					name: i.data.nickName,
					headUrl: i.data.avatar,
					gender: i.data.sex,
					city: ""
				},
					window.user.data.authorize = window.userInfo.authorize,
					window.user.data.openid = t.checknum(window.userInfo.openid + ""),
					window.user.data.name = window.userInfo.name,
					window.user.data.headUrl = window.userInfo.headUrl,
					window.user.saveUserData(),
					"function" == typeof e && e(1)
			}
			openSetting(i) {
				// qg.openSetting({
				// 	success(e) {
				// 		e.reslut = "success",
				// 		"function" == typeof i && i(e)
				// 	},
				// 	fail(e) {
				// 		e.reslut = "fail",
				// 		"function" == typeof i && i(e)
				// 	}
				// })
			}
			getSetting(i) {
				// Laya.Browser.onQGMiniGame && qg.getSetting({
				// 	success(e) {
				// 		e.reslut = "success",
				// 		"function" == typeof i && i(e)
				// 	},
				// 	fail(e) {
				// 		e.reslut = "fail",
				// 		"function" == typeof i && i(e)
				// 	}
				// })
			}
			showShareMenu(i) { }
			hideShareMenu(i) {
				// qg.hideShareMenu({
				// 	success(e) {
				// 		i && i("success", e)
				// 	},
				// 	fail(e) {
				// 		i && i("fail", e)
				// 	},
				// 	complete(e) {
				// 		i && i("complete", e)
				// 	}
				// })
			}
			onShareAppMessage(i) { }
			offShareAppMessage(i) {
				// qg.offShareAppMessage(i)
			}
			shareAppMessage(i, e) {
				window.isShareFinish = !0,
					"function" == typeof e && e("confirm")
			}
			getRewardedAD(i, e, t) {
				if (!i.RewardedID) return;
				if (!window.networkStatus.isConnected) return void ("function" == typeof t && t({
					networking: !1,
					errMsg: "fail"
				}));
				let o = ("" + i.RewardedID).split("|"),
					s = o[Math.floor(Math.random() * o.length)],
					n = !1,
					a = !0;
				this.videoAD = qg.createRewardedVideoAd({
					posId: s
				}),
					void 0 === this.videoAD && (this.videoAD = qg.createRewardedVideoAd({
						adUnitId: s
					})),
					this.videoAD.onLoad(function () { }),
					this.videoAD.onError(function (i) {
						showDebugInfo("【视频广告】发生错误：", i),
							window.isVV && a || "function" == typeof t && t({
								networking: !0,
								errMsg: "fail"
							})
					}),
					this.videoAD.onClose(function (i) {
						i && i.isEnded || void 0 === i ? (i.isEnded = !0, i.errMsg = "ok") : (i.isEnded = !1, i.errMsg = "cancel"),
							"function" == typeof t && t(i)
					}),
					e.on("rewarde", this,
						function (i) {
							if (window.networkStatus.isConnected) {
								if ("show" == i) if (false) {
									showDebugInfo("第1次【拉取】视频广告..."),
										this.videoAD.load().then(() => {
											showDebugInfo("第1次【拉取】视频广告【成功】，立即【播放】"),
												this.videoAD.show().then(() => {
													showDebugInfo("第1次【播放】视频广告【成功】!!!")
												}).
													catch(e => {
														showDebugInfo("第1次【播放】视频广告【失败】，再次【拉取】...", e),
															i()
													})
										}).
											catch(e => {
												showDebugInfo("第1次【拉取】视频广告【失败】，再次【拉取】...", e),
													i(),
													"function" == typeof t && t({
														networking: !1,
														errMsg: "fail"
													})
											});
									let i = function () {
										showDebugInfo("第2次【拉取】视频广告..."),
											this.videoAD.load().then(() => {
												showDebugInfo("第2次【拉取】视频广告【成功】，立即【播放】"),
													this.videoAD.show().then(() => {
														showDebugInfo("第2次【播放】视频广告【成功】!!!")
													}).
														catch(i => {
															showDebugInfo("第2次【播放】视频广告【失败】，返回结果", i),
																"function" == typeof t && t({
																	networking: !1,
																	errMsg: "fail"
																})
														})
											}).
												catch(i => {
													showDebugInfo("第2次【拉取】视频广告【失败】，返回结果", i),
														"function" == typeof t && t({
															networking: !1,
															errMsg: "fail"
														})
												})
									}
								} else a ? (a = !1, this.videoAD.show()) : (0 == n && (n = !0, this.videoAD.onLoad(() => {
									this.videoAD.show()
								})), this.videoAD.load().
									catch(i => {
										"function" == typeof t && t({
											networking: !0,
											errMsg: "fail"
										})
									}))
							} else "function" == typeof t && t({
								networking: !1,
								errMsg: "fail"
							})
						})
			}
			getBannerAD(i, e, t) {
				let o = i.BannerID; !o || o.length <= 0 || (window.gameBannerAd = qg.createGameBannerAd({
					adUnitId: o
				}))
			}
			showOppoBanner() {
				window.gameBannerAd && window.gameBannerAd.show().then(function () {
					console.log("show success")
				}).
					catch(function (i) {
						console.log("show fail with:" + i.errCode + "," + i.errMsg)
					})
			}
			hideOppoBanner() {
				window.gameBannerAd && window.gameBannerAd.hide().then(function () {
					console.log("hide success")
				}).
					catch(function (i) {
						console.log("hide fail with:" + i.errCode + "," + i.errMsg)
					})
			}
			getGamePortalAD(i, e) {
				if (!i.GamePortal) return void console.log(i.GamePortal, "adID错误九宫格互推广告");
				if ("function" != typeof qg.createGamePortalAd) return;
				window.timeLoadPortalAd = (new Date).getTime() - 2e4,
					window.isShowBtnPortalAd = !0,
					window.isShowPortalHint = !1,
					window.btnPortalAd = null,
					window.isLoadPortalAdFinish = !1,
					window.portalErrorStr = " 暂未准备好，请稍后再试 ",
					window.portal = qg.createGamePortalAd({
						adUnitId: i.GamePortal
					}),
					window.loadPortalAd = function (i = !1) {
						if (!i) {
							if ((new Date).getTime() - window.timeLoadPortalAd < 1e3) return void window.setTipStrAnimation(window.portalErrorStr, "#ff0000", "#ffffff", 0, Laya.stage.width / 2, Laya.stage.height / 2 + 100)
						}
						window.timeLoadPortalAd = (new Date).getTime(),
							window.isShowPortalHint = !1,
							window.isLoadPortalAdFinish = !1,
							window.portal.load().then(function () { }).
								catch(function (i) {
									t(i)
								})
					},
					window.portal.onLoad(function () {
						window.isShowPortalHint = !1,
							window.isLoadPortalAdFinish = !0
					});
				let t = function (i) {
					window.isLoadPortalAdFinish = !0,
						"" + i.errCode == "1001" ? window.isShowPortalHint = !0 : (window.isShowBtnPortalAd = !1, window.btnPortalAd && (window.btnPortalAd.visible = !1))
				};
				window.portal.onClose(function () {
					window.sceMain && window.sceMain.onHideOppoMoreGame(),
						window.loadPortalAd(!0)
				}),
					window.loadPortalAd(!0),
					e.on("portal", this, i => {
						window.networkStatus.isConnected && qg.createGamePortalAd && (window.isShowPortalHint || !window.isLoadPortalAdFinish ? (window.setTipStrAnimation(window.portalErrorStr, "#ff0000", "#ffffff", 0, Laya.stage.width / 2, Laya.stage.height / 2 + 100), window.isShowPortalHint && window.loadPortalAd()) : window.portal.show().then(() => {
							window.portalErrorStr = " 操作频繁，请稍候再试 ",
								window.sceMain && window.sceMain.onShowOppoMoreGame()
						}).
							catch(function (i) { }))
					})
			}
			getMoreGameBanner(i, e) { }
			getInterstitialAd(i, e) {
				i.InterstitialID && qg && qg.createInterstitialAd && (window.interstitialAd = null, e.on("interstitial", this,
					function (e) {
						window.networkStatus.isConnected && "show" == e && (window.interstitialAd && (window.interstitialAd.destroy(), window.interstitialAd = null), window.interstitialAd = qg.createInterstitialAd({
							adUnitId: i.InterstitialID
						}), window.interstitialAd.onError(function (i) {
							console.log("interstitialAd onError : ", i)
						}), window.interstitialAd.load().then(() => {
							window.interstitialAd.show()
						}).
							catch(i => {
								console.log("load interstitial erro : ", i)
							}))
					}))
			}
			loadSubpackage(i, e) {
				qg.loadSubpackage({
					name: i,
					success: function (i) {
						i.progress = 100,
							"function" == typeof e && e(i)
					},
					fail: function (i) { }
				}).onProgressUpdate(function (i) {
					i.progress >= 100 && (i.progress = 98),
						"function" == typeof e && e(i)
				})
			}
			onVibrate(i = "shot") {
				window.vibrateShort()
			}
			onShow(i) {
				qg.onShow(i)
			}
			onHide(i) {
				qg.onHide(i)
			}
			sendDataToDataContext(i) {
				qg.getOpenDataContext().postMessage(i)
			}
			sendUrlToDataContext(i, e) {
				switch (i) {
					case "json":
						Laya.MiniAdpter.sendJsonDataToDataContext(e);
						break;
					case "atlas":
						Laya.MiniAdpter.sendAtlasToOpenDataContext(e);
						break;
					case "pic":
						Laya.MiniAdpter.sendSinglePicToOpenDataContext(e)
				}
			}
			onGameRecorder(i, e) { }
			getNetworkStatus(i) {
				qg.onNetworkStatusChange(function (e) {
					"function" == typeof i && i(e)
				}),
					qg.getNetworkType({
						success(e) {
							"none" == e.networkType || "offline" == e.networkType ? e.isConnected = !1 : e.isConnected = !0,
								"function" == typeof i && i(e)
						},
						fail(e) {
							"function" == typeof i && i(e)
						}
					})
			}
			getSystemInfo(i) {
				qg.getSystemInfo({
					success(e) {
						"function" == typeof i && i(e)
					}
				})
			}
			getLaunchOptionsSync() {
				return qg.getLaunchOptionsSync()
			}
			reportAnalytics(i, e) { }
			createMoreGameBtn(i) {
				if ("op" == window.plat && "ios" != window.sysInfo.platform) {
					let s = ["tt3fc3497ea0e924bc", "ttc4deb2635bf4aa50", "ttc63eb083591b2750", "ttf9d68f6b66fcbc0b", "tt08c17e7c97eb834e", "tt3eb2480fa19877fb", "tt2def5b52b2c5a4ee", "tt8eaaf8171180099c", "tt3b5e4de3a474a39e", "tt6d131baef239f4b8"];
					for (var e = [], t = 0; t < s.length; t++) {
						var o = {
							query: "foo=bar&baz=qux",
							extraData: {}
						};
						o.appId = s[t],
							e.push(o)
					}
					window.platform.config[window.plat].AppID;
					window.moreGameBtn = qg.createMoreGamesButton({
						type: "text",
						text: "",
						style: {
							left: moreGameBtnX,
							top: moreGameBtnY,
							width: moreGameBtnW,
							height: moreGameBtnH,
							backgroundColor: "",
							borderWidth: 0
						},
						appLaunchOptions: e,
						onNavigateToMiniGame(i) {
							console.log("跳转其他小游戏", i)
						}
					}),
						window.moreGameBtn.hide(),
						window.moreGameBtn.onTap(() => {
							"function" == typeof i && i()
						})
				}
			}
			showMoreGameBtn() { }
			hideMoreGameBtn() { }
			initRecommendationButton() { }
			showRecommendationButton() { }
			hideRecommendationButton() { }
			setClipboardData(i) {
				i && i.length > 0 && qg.setClipboardData({
					data: i,
					success(i) {
						qg.hideToast()
					},
					fail(i) {
						qg.hideToast()
					},
					complete(i) { }
				})
			}
			createDesktopIcon(i) {
				window.isDebugModel && console.log("创建【桌面图标】-----------开始"),
					qg.hasShortcutInstalled({
						success: function (e) {
							window.isDebugModel && (console.log("判断是否创建【桌面图标】success-----------"), console.log(e)),
								0 == e ? qg.installShortcut({
									success: function () {
										window.isDebugModel && console.log("创建【桌面图标】成功-----------"),
											"function" == typeof i && i(1)
									},
									fail: function (e) {
										window.isDebugModel && (console.log("创建【桌面图标】失败-----------"), console.log(e)),
											Laya.Browser.onVVMiniGame && e.indexOf("refuse") <= -1 ? "function" == typeof i && i(3) : "function" == typeof i && i(0)
									}
								}) : "function" == typeof i && i(2)
						},
						fail: function (e) {
							window.isDebugModel && (console.log("判断是否创建【桌面图标】fail-----------"), console.log(e)),
								"function" == typeof i && i(0)
						}
					})
			}
			getDesktopIconState(i) {
				qg.hasShortcutInstalled({
					success: function (e) {
						window.isDebugModel && (console.log("getDesktopIconState-------success"), console.log(e)),
							"function" == typeof i && i(e)
					},
					fail: function (e) {
						console.log("getDesktopIconState-------fail"),
							console.log(e),
							"function" == typeof i && i(!1)
					}
				})
			}
		}
		class A {
			constructor() {
				if (v) return v;
				if (v = this, UIConfig.closeDialogOnSide = !1, UIConfig.popupBgAlpha = 0, this.initApp(), this.initWindowFuction(), this.initPlatform(), window.platform.setClipboardData(window.clipboardData), window.isSetClipboardFinish = !0, !window.isOV && "wx" != window.plat && "pc" != window.plat && "tt" != window.plat) {
					let i = new Laya.HTMLDivElement;
					Laya.stage.addChild(i),
						i.x = Laya.stage.width + 1e3,
						i.style.font = "Impact",
						i.style.fontSize = 30;
					let e = "<span color='#e3d26a'>使用</span>";
					i.innerHTML = e
				}
			}
			initApp() {
				window.btnRandNum = 0
			}
			initPlatform() {
				window.bannerH = 0,
					window.userInfo = {
						close: !1,
						authorize: !1,
						anonymousOpenid: "",
						openid: "",
						name: "",
						headUrl: "",
						gender: "",
						city: ""
					},
					Laya.Browser.onMiniGame ? window.platform = c.Getinstance(this.initInterface) : Laya.Browser.onTTMiniGame ? window.platform = c.Getinstance(this.initInterface) : false || Laya.Browser.onVVMiniGame ? window.platform = L.Getinstance(this.initInterface) : window.platform = p.Getinstance(this.initInterface),
					window.platform.config = window.platformConfig
			}
			initWindowFuction() {
				Laya.stage.on("onSetAward", this, this.onSetAward),
					"undefined" == window.soundSize && (window.soundSize = 100),
					window.playSound = function (i, e = ".mp3") {
						if (1 != window.muted && window.soundSize > 0 && !window.isAppHide) try {
							Laya.SoundManager.playSound(window.soundPath + i + e)
						} catch (i) {
							console.log(i)
						}
					},
					"undefined" == window.musicSize && (window.musicSize = 100),
					window.musicName = null,
					window.mucisChannel = !1,
					window.playMusic = function (i, e = !1) {
						if (1 != window.muted && null != i && (0 != e || i != window.musicName) && window.musicSize > 0) try {
							window.mucisChannel = Laya.SoundManager.playMusic(window.soundPath + i + ".mp3"),
								window.musicName = i
						} catch (i) {
							console.log(i)
						}
					},
					window.stopMusic = function (i = !1) {
						i && (window.musicName = null),
							Laya.SoundManager.stopMusic(),
							window.mucisChannel = !1
					},
					window.stopAllSound = function () {
						Laya.SoundManager.stopAllSound(),
							window.mucisChannel = !1
					},
					window.isSoundPause = !1,
					window.onSoundPause = function () {
						window.isSoundPause || (window.isSoundPause = !0, window.stopMusic(), window.stopAllSound(), window.mucisChannel = !1)
					},
					window.onSoundRecover = function (i) {
						window.isSoundPause && (window.isSoundPause = !1, Laya.timer.once(500, this,
							function () {
								window.playMusic(window.musicName, !0)
							}))
					},
					window.getMusicTime = function () {
						return window.mucisChannel ? window.mucisChannel.position : 10
					},
					window.saluteInit = function () {
						window.saluteLeft = Laya.Pool.getItemByClass("Salute", u),
							window.saluteRight = Laya.Pool.getItemByClass("Salute", u)
					},
					window.salute = function (i, e, t, o, s = !0) {
						window.saluteLeft.init(i, -e, t, -o),
							window.saluteRight.init(i, Laya.stage.width + e, t, -180 + o),
							s && window.playSound("salute")
					},
					window.showGoldAnimation = function (i, e, t, o, s = {
						scaleX: 1,
						scaleY: 1
					},
						n = null) {
						Laya.timer.once(200, this, () => {
							window.playSound("res/icon_lottery.png" == i ? "skill" : "gold")
						}),
							e < 20 ? e = 20 : e > 50 && (e = 50);
						for (let n = 0; n < e; n++) {
							let e = new Laya.Image(i),
								a = isNaN(t.anchorX) ? 0 : t.anchorX,
								w = isNaN(t.anchorY) ? 0 : t.anchorY,
								d = (t.width * a + t.pivotX) * t.scaleX,
								h = (t.height * w + t.pivotY) * t.scaleY;
							e.pos(d, h),
								e.anchorX = .5,
								e.anchorY = .5,
								e.scale(0, 0),
								t.addChild(e);
							let r = new Laya.TimeLine,
								l = t.scaleX,
								c = t.scaleY,
								p = 100 * Math.random() * (Math.random() > .5 ? 1 : -1) / l + d,
								u = 100 * Math.random() * (Math.random() > .5 ? 1 : -1) / c + h;
							r.to(e, {
								x: p,
								y: u,
								scaleX: 1 / l,
								scaleY: 1 / c
							},
								400, Laya.Ease.expoOut, 0);
							let m = isNaN(o.anchorX) ? 0 : o.anchorX,
								f = isNaN(o.anchorY) ? 0 : o.anchorY;
							p = (o.width * m + o.pivotX) * o.scaleX,
								u = (o.height * f + o.pivotY) * o.scaleY;
							let b = o.localToGlobal({
								x: p,
								y: u
							},
								!0);
							b = t.globalToLocal(b),
								r.to(e, {
									x: b.x / l,
									y: b.y / c,
									scaleX: s.scaleX,
									scaleY: s.scaleY
								},
									500 + 10 * n, Laya.Ease.expoIn, 0),
								r.on(Laya.Event.COMPLETE, this,
									function () {
										e.destroy()
									}),
								r.play(0, !1)
						}
						if (null != n) {
							let i = 900 + 10 * (e + 1);
							Laya.timer.once(i, this,
								function () {
									n()
								})
						}
					},
					window.showDebugInfo = function (i, e = null) {
						(window.isDebugModel || "pc" == window.plat) && (e ? console.log(i, e) : console.log(i))
					},
					window.jumpOutCheckTime = 3e3,
					window.setJumpOutDelayCheck = function () {
						window.isCanControl = !1,
							window.isShowVideoAdHint = !0,
							Laya.timer.once(window.jumpOutCheckTime, this,
								function () {
									window.isShowVideoAdHint && (window.isShowVideoAdHint = !1, window.showJumpOutNoBack())
								})
					},
					window.showJumpOutNoBack = function () {
						if (window.isCanControl = !0, "wx" != window.plat && window.onSoundRecover(2), !window.baseJumpOutHint) {
							window.baseJumpOutHint = new Laya.Sprite,
								window.baseJumpOutHint.visible = !1,
								window.baseJumpOutHint.zOrder = 1e3,
								Laya.stage.addChild(window.baseJumpOutHint);
							let i = new Laya.Sprite;
							window.baseJumpOutHint.addChild(i);
							let e = 240,
								t = 80,
								o = 10;
							i.graphics.drawRect(o, 0, e - 2 * o, t, "#000000"),
								i.graphics.drawRect(0, o, e, t - 2 * o, "#000000"),
								i.graphics.drawCircle(o, o, o, "#000000"),
								i.graphics.drawCircle(e - o, o, o, "#000000"),
								i.graphics.drawCircle(o, t - o, o, "#000000"),
								i.graphics.drawCircle(e - o, t - o, o, "#000000"),
								i.alpha = .8,
								i.x = -e / 2,
								i.y = -t / 2,
								i.cacheAs = "bitmap",
								window.jumpOutHintTxt = new Laya.Label("暂无广告"),
								window.baseJumpOutHint.addChild(window.jumpOutHintTxt),
								window.jumpOutHintTxt.font = "Microsoft YaHei",
								window.jumpOutHintTxt.bold = !0,
								window.jumpOutHintTxt.fontSize = 40,
								window.jumpOutHintTxt.color = "#ffffff",
								window.jumpOutHintTxt.anchorX = .5,
								window.jumpOutHintTxt.anchorY = .5,
								window.jumpOutHintTxt.x = 0,
								window.jumpOutHintTxt.y = 5
						}
						let i = ["暂无广告", "分享失败", "暂无录屏"];
						window.jumpOutHintTxt.text != i[window.rewardType] && (window.jumpOutHintTxt.text = i[window.rewardType]),
							window.baseJumpOutHint.removeSelf(),
							window.baseJumpOutHint.visible = !0,
							Laya.stage.addChild(window.baseJumpOutHint);
						let e = Laya.stage.width / 2,
							t = Laya.stage.height / 2 - 150;
						window.baseJumpOutHint.x = e,
							window.baseJumpOutHint.y = t + 100,
							window.baseJumpOutHint.alpha = 0,
							window.baseJumpOutHint.scaleX = window.baseJumpOutHint.scaleY = 0,
							window.actionAdHint ? window.actionAdHint.pause() : (window.actionAdHint = new Laya.TimeLine, window.actionAdHint.to(window.baseJumpOutHint, {
								scaleX: 1,
								scaleY: 1,
								alpha: 1
							},
								100, Laya.Ease.backOut), window.actionAdHint.to(window.baseJumpOutHint, {
									y: t - 100,
									alpha: 0
								},
									1e3, null, 1e3), window.actionAdHint.on(Laya.Event.COMPLETE, this,
										function () {
											window.baseJumpOutHint.visible = !1
										})),
							window.actionAdHint.play(0, !1)
					},
					window.hideJumpOutNoBack = function () {
						window.isShowVideoAdHint = !1,
							window.isCanControl = !0,
							window.actionAdHint && window.actionAdHint.pause(),
							window.baseJumpOutHint && (window.baseJumpOutHint.visible = !1)
					},
					window.setTipStrAnimation = function (i, e = "#ff0000", t = "#ffffff", o = 0, s = Laya.stage.width / 2, n = Laya.stage.height / 2 - 100) {
						let a = new Laya.Label(i);
						Laya.stage.addChild(a);
						a.font = "Microsoft YaHei",
							a.bold = !0,
							a.fontSize = 40,
							n -= a.fontSize / 2,
							a.color = e,
							a.anchorX = .5,
							a.x = s,
							a.y = n + 160,
							a.stroke = 3,
							a.strokeColor = t,
							a.zOrder = 1e3;
						let w = new Laya.TimeLine;
						a.alpha = 0,
							w.to(a, {
								y: n,
								alpha: 1
							},
								200, Laya.Ease.expoOut, o),
							w.to(a, {
								y: n - 160,
								alpha: 0
							},
								600, null, 1500),
							w.on(Laya.Event.COMPLETE, this,
								function () {
									a.destroy()
								}),
							w.play(0, !1)
					},
					window.showToast = function (i) {
						Laya.timer.once(100, this,
							function () {
								"tt" == window.plat ? tt.showToast({
									title: i
								}) : "op" == window.plat ? qg.showToast({
									title: i
								}) : window.setTipStrAnimation(i)
							})
					},
					window.setPlatformReward = function (i, e, o = 0, s = null, n = null, a = null) {


						window.onSoundPause(),
							window.rewardType = i,
							window.rewardPoint = e,
							window.rewardData = o,
							window.iconShow = s,
							window.iconAds = n,
							window.iconShare = a;

						window.playVideoAd(res => {
							if (res) {
								window.rewardEvent.event("rewarde", ["show"])
							}
						})

						

					},
					window.setAdsToShare = function (i) {
						"wx" == window.plat ? window.setPlatformReward(1, window.rewardPoint, window.rewardData) : (window.setTipStrAnimation("暂无视频广告"), Laya.stage.event("onSetAward", [!1, !0]))
					},
					window.shareVideo = function (i) {
						if (!i || !i.videoPath || "" == i.videoPath) return window.setTipStrAnimation("录屏发布失败"),
							void Laya.stage.event("onSetAward", [!1]);
						if (i.dtTime < window.recordMinTime) return window.setTipStrAnimation("录屏时间过短，无法发布"),
							void Laya.stage.event("onSetAward", [!1]);
						window.isHaveVideoShare && (window.isShareFinish = !1);
						let e = window.shareTitleStr.split("|");
						"wx" == window.plat && (e = window.shareTitleStrWX.split("|"));
						let o = t.randomInt(0, e.length),
							s = e[o],
							n = window.shareDescStr.split("|"),
							a = n[o = t.randomInt(0, n.length)],
							w = window.shareTopicStr.split("|"),
							d = [w[t.randomInt(0, w.length)]],
							h = window.shareVideoStr.split("|"),
							r = h[o = t.randomInt(0, h.length)],
							l = !1;
						if (window.shareCutIdStr > 10) {
							let i = window.shareCutIdStr.split("|");
							l = i[o = t.randomInt(0, i.length)]
						}
						let c = null;
						c = "tt" == window.platform.plat && "Douyin" == window.sysInfo.appName && "ios" != window.sysInfo.platform && l ? {
							videoPath: i.videoPath,
							videoTopics: d,
							hashtag_list: d,
							video_title: r,
							cutTemplateId: l,
							withVideoId: !0
						} : {
							videoPath: i.videoPath,
							videoTopics: d,
							hashtag_list: d,
							video_title: r
						},
							window.platform.shareAppMessage({
								channel: "video",
								title: s,
								desc: a,
								imageUrl: window.shareImageUrl,
								templateId: window.shareTemplateId,
								query: window.shareQuety,
								extra: c
							},
								function (i) {
									"confirm" == i ? (window.setTipStrAnimation("发布录屏成功"), Laya.stage.event("onSetAward", [!0])) : (window.setTipStrAnimation("录屏发布失败"), Laya.stage.event("onSetAward", [!1]))
								})
					}
			}
			initInterface() {
				window.platform.initRecommendationButton(),
					window.recordEvent = new Laya.EventDispatcher,
					window.recordState = "onStop",
					window.isHaveVideoShare ? (window.recordMinTime = 5e3, window.recordData = {
						videoPath: "",
						dtTime: 0
					},
						window.platform.onGameRecorder(window.recordEvent,
							function (i) {
								window.recordState = i.state,
									window.isCanShareVideo = !1,
									"onStop" == i.state && (window.recordData = i, window.isCanShareVideo = i && i.dtTime > window.recordMinTime)
							})) : window.recordEvent.on("record", this, () => { }),
					window.rewardEvent = new Laya.EventDispatcher,
					window.platform.getRewardedAD(window.platform.config[window.plat], window.rewardEvent,
						function (i) {
							"notsupport" != i.errMsg ? "fail" == i.errMsg ? i.networking ? (window.setTipStrAnimation("暂无视频广告"), window.setAdsToShare(2)) : (window.setTipStrAnimation("暂无视频广告"), Laya.stage.event("onSetAward", [!1, !0])) : "cancel" == i.errMsg ? Laya.stage.event("onSetAward", [!1]) : i.isEnded ? Laya.stage.event("onSetAward", [!0]) : "ok" != i.errMsg ? "vv" == window.plat || "op" == window.plat ? window.setTipStrAnimation(i.errMsg) : window.setAdsToShare(5) : Laya.stage.event("onSetAward", [!1]) : window.setAdsToShare(1)
						}),
					window.bannerEvent = new Laya.EventDispatcher,
					Laya.timer.once(Laya.Browser.onBDMiniGame ? 6e3 : 10, window,
						function () {
							window.platform.getBannerAD(window.platform.config[window.plat], window.bannerEvent)
						}),
					"tt" == window.plat ? (window.moreGameBannerEvent = new Laya.EventDispatcher, Laya.timer.once(Laya.Browser.onBDMiniGame ? 6e3 : 10, window,
						function () {
							window.platform.getMoreGameBanner(window.platform.config[window.plat], window.moreGameBannerEvent)
						}), window.interstitialEvent = new Laya.EventDispatcher, window.platform.getInterstitialAd(window.platform.config[window.plat], window.interstitialEvent)) : "op" == window.plat ? (window.portalEvent = new Laya.EventDispatcher, window.platform.getGamePortalAD(window.platform.config[window.plat], window.portalEvent)) : window.plat,
					window.isAppHide = !1,
					window.platform.onShow(v.onShow, v.onHide),
					window.platform.onHide(v.onHide),
					window.shareStartTime = 0,
					window.isShareFinish = !0,
					window.platform.showShareMenu(function (i, e) { }),
					window.platform.onShareAppMessage(function () {
						let i = window.shareTitleStr.split("|");
						return "wx" == window.plat && (i = window.shareTitleStrWX.split("|")),
						{
							title: i[t.randomInt(0, i.length)],
							imageUrl: window.shareImgPath + "wxShare" + (1 + Math.floor(2 * Math.random())) + ".jpg"
						}
					})
			}
			onShow() {
				if (false && 110 == window.camera && (window.camera = window.qg.createCamera(), window.camera.start({
					previewSize: window.cameraSizes[window.cameraSzieIndex]
				}).then(i => {
					window.video = i
				}).
					catch(i => { })), window.isAppHide) {
					if (window.isAppHide = !1, window.onSoundRecover(3), 0 != window.shareStartTime) {
						let i = (new Date).getTime() - window.shareStartTime;
						Laya.stage.event("onSetAward", [i >= 3e3]),
							window.shareStartTime = 0,
							i < 3e3 && window.setTipStrAnimation("分享失败，分享到群领取奖励")
					}
					window.isShareFinish || (window.isShareFinish = !0, Laya.stage.event("onSetAward", [!1])),
						Laya.stage.event("onAppShow")
				}
			}
			onHide() {
				false && window.camera && (window.camera.destroy(), window.camera = 110),
					window.isAppHide || (window.isAppHide = !0, window.onSoundPause(), Laya.stage.event("onAppHide"))
			}
			onShareCallBack(i) {
				if ("wx" == i) {
					let i = new Date;
					window.shareStartTime = i.getTime()
				} else Laya.stage.event("onSetAward", ["confirm" == i])
			}
			onSetAward(i, e = !1) {
				if (0 == window.rewardType) {
					let e = i ? "1" : "0";
					window.platform.reportAnalytics("ads_close", {
						point: window.rewardPoint,
						is_finish: e
					})
				} else if (2 == window.rewardType && i) {
					let e = i ? "1" : "0";
					window.platform.reportAnalytics("share_video", {
						point: window.rewardPoint,
						is_finish: e
					})
				}
				window.onSoundRecover(4),
					window.hideJumpOutNoBack(),
					i ? window.setReward && window.setReward(!0, window.rewardPoint, window.rewardData) : (0 == window.rewardType && 0 == e && window.setTipStrAnimation("广告播放没有完成"), null != window.iconShow && (2 == window.rewardType ? null != window.iconAds && (window.iconShow.visible = !1, window.iconAds.visible = !0) : 0 == window.rewardType && null != window.iconAds && (window.iconAds.visible = !1, window.iconShare.visible = !0)), window.setReward && window.setReward(!1, window.rewardPoint, window.rewardData))
			}
			checkUserInfoAuthorize(i) {
				"pc" == window.plat ? this.getUserInfo(i) : "wx" == window.plat ? window.btnAuthorize || wx.openSetting({
					success(e) {
						e.authSetting["scope.userInfo"] ? window.platform.getSetting(i) : "function" == typeof callback && callback(2)
					},
					fail(i) {
						"function" == typeof callback && callback(0)
					}
				}) : "tt" == window.plat ? tt.getSetting({
					success(e) {
						e.authSetting.hasOwnProperty("scope.userInfo") ? window.platform.openSetting(function (e) {
							"success" == e.reslut && e.authSetting.hasOwnProperty("scope.userInfo") && e.authSetting["scope.userInfo"] ? window.gameInfo.getUserInfo(i) : "function" == typeof i && i(0)
						}) : window.gameInfo.getUserInfo(i)
					},
					fail(e) {
						"function" == typeof i && i(0)
					}
				}) : "op" != window.plat && "vv" != window.plat || window.platform.getUserinfo(i)
			}
			getUserInfo(i) {
				window.platform.authorizeTT(function (e) {
					e && !window.userInfo.close ? (window.user.data.authorize = window.userInfo.authorize, window.user.data.openid = t.checknum(window.userInfo.openid + ""), window.user.data.name = window.userInfo.name, window.user.data.headUrl = window.userInfo.headUrl, window.user.saveUserData(), "function" == typeof i && i(1)) : "function" == typeof i && i(0)
				})
			}
			checkCameraAuthorize(i) {
				"pc" != window.plat ? window.platform.getSetting(e => {
					"fail" != e.reslut ? "tt" == window.plat ? e && e.authSetting && e.authSetting.hasOwnProperty("scope.camera") ? e.authSetting["scope.camera"] ? "function" == typeof i && i(1) : "function" == typeof i && i(2) : "function" == typeof i && i(0) : "op" == window.plat && (e.authSetting.hasOwnProperty("camera") ? e.authSetting.camera ? "function" == typeof i && i(1) : "function" == typeof i && i(2) : "function" == typeof i && i(0)) : window.showToast("检测授权信息失败,请重试")
				}) : "function" == typeof i && i(1)
			}
			openSetting(i, e) {
				window.platform.openSetting(function (t) {
					"success" == t.reslut && t.authSetting.hasOwnProperty(i) && t.authSetting[i] ? "function" == typeof e && e(1) : "function" == typeof e && e(0)
				})
			}
			cameraAuthorize(i) {
				"pc" != window.plat ? "tt" == window.plat ? tt.authorize({
					scope: "scope.camera",
					success(e) {
						"ok" == e.data["scope.camera"] ? "function" == typeof i && i(1) : "function" == typeof i && i(0)
					},
					fail(e) {
						"function" == typeof i && i(0)
					}
				}) : "op" == window.plat && window.platform.openSetting(function (e) {
					"success" == e.reslut && e.authSetting.hasOwnProperty("camera") ? e.authSetting.camera ? "function" == typeof i && i(1) : "function" == typeof i && i(2) : "function" == typeof i && i(0)
				}) : "function" == typeof i && i(1)
			}
		}
		class T {
			constructor() {
				this.data = this.getUserData();
				this.data && 2 == this.data.version || (this.data = {
					version: 2,
					authorize: !1,
					openid: "default",
					name: "default",
					headUrl: "res/head.png",
					gender: 0,
					city: "未知",
					isFishPoolFirst: !0,
					isModel0First: !0,
					isModel1First: !0,
					money: 100,
					diamonds: 3,
					lottery: 5,
					bestScore: 0,
					fishMaxLv: 1,
					fishData: "1|4",
					poolLv: 1,
					music: 100,
					sound: 100,
					vibrate: 1
				}),
					"pc" == window.plat && (this.data.music = 100, this.data.sound = 100);
				let i = this.data.fishData.split("|");
				window.poolFishNum = [];
				for (let i = 0; i < window.fishData.length; i++) window.poolFishNum.push(0);
				for (let e = 0; e < i.length; e += 2) {
					let t = parseInt(i[e]),
						o = parseInt(i[e + 1]);
					window.poolFishNum[t] = o,
						t > this.data.fishMaxLv && (this.data.fishMaxLv = t)
				}
				window.isNewUser = this.data.isModel0First,
					window.soundSize = this.data.sound,
					window.musicSize = this.data.music
			}
			getUserData() {
				return t.getPrefs("UserData")
			}
			saveUserData() {
				this.data.sound = window.soundSize,
					this.data.music = window.musicSize,
					this.data.fishData = "0|0";
				for (let i = 1; i < window.poolFishNum.length; i++) window.poolFishNum[i] > 0 && (this.data.fishData += "|" + i + "|" + window.poolFishNum[i]);
				t.setPrefs("UserData", this.data)
			}
			getFishPrice(i) {
				let e = window.fishData[i].money * (1 + .1 * i);
				return Math.round(e)
			}
			moneyChange(i, e = !0) {
				this.data.money += i,
					this.data.money < 0 && (this.data.money = 0),
					window.sceMain && (window.sceMain.fcGold.value = this.data.money),
					window.diaFishs && (window.diaFishs.fcGold.value = this.data.money),
					e && this.saveUserData()
			}
			poolLvChange(i, e = !0) {
				i < this.data.poolLv || (this.data.poolLv = i, this.updateFishNum(!1), e && this.saveUserData())
			}
			getPoolFishNum(i) {
				return 5 + 5 * i
			}
			getPoolAddNeedMoney(i) {
				return 100 * i
			}
			fishMaxLvChange(i, e = !0) {
				let o = !1;
				if (i >= this.data.fishMaxLv && (i > this.data.fishMaxLv && (o = !0), window.user.data.fishMaxLv = i), window.buyFishLv = window.user.data.fishMaxLv - 2, window.buyFishLv < 1 && (window.buyFishLv = 1), window.sceMain) {
					window.sceMain.fcBuyLv.value = window.buyFishLv;
					let i = t.getShowNum(this.getFishPrice(window.buyFishLv));
					window.sceMain.fcFishPrice.value = i,
						window.sceMain.fcFishPrice.scaleX = i.length >= 4 ? .6 : .8
				}
				return e && this.saveUserData(),
					o
			}
			updateFishNum(i = !0) {
				window.sceMain && (window.sceMain.fcFish.value = window.fishsPool.length + "/" + this.getPoolFishNum(this.data.poolLv), window.sceMain.fcNextFishNum.value = this.getPoolFishNum(this.data.poolLv + 1), window.sceMain.fcAddLvGold.value = this.getPoolAddNeedMoney(this.data.poolLv)),
					window.diaFishs && (window.diaFishs.fcFish.value = window.fishsPool.length + "/" + this.getPoolFishNum(this.data.poolLv)),
					i && this.saveUserData()
			}
		}
		class M extends Laya.Sprite {
			constructor(i, e, o, s) {
				super(),
					this.shapeId = i,
					this.skeleton = e,
					this.name = s,
					this.energy = window.fishData[i].en,
					this.toNextLvNeedEnergy = window.fishData[i].toNextEN,
					this.vx = -1,
					this.scaleValue = 1,
					this.scaleDirect = 1,
					this.zOrderInit = 0,
					this.isAlive = !0,
					this.isHaveAI = !0,
					this.isDragon = i == window.dragonShapeId || i == window.gslShapeId,
					this.isGeSiLa = i == window.gslShapeId,
					window.eatSoundId = 0,
					this.fishScale = 1;
				for (let e = 0; e < i; e++) this.fishScale *= window.fishScaleLvAdd;
				this.scaleH = window.fishData[i].scaleH,
					this.bodyScale = window.fishBaseH / this.scaleH * this.fishScale,
					this.skeleton.scaleX = this.skeleton.scaleY = this.bodyScale,
					this.mouthX = window.fishData[this.shapeId].mx,
					this.mouthY = window.fishData[this.shapeId].my,
					this.mouthRotation = 180 * Math.atan(Math.abs(this.mouthY / this.mouthX)) / Math.PI,
					this.mouthY < 0 ? this.mouthRotation = 180 + this.mouthRotation : this.mouthY > 0 ? this.mouthRotation = 180 - this.mouthRotation : this.mouthRotation = 180,
					this.mouthBaseD = t.distance(0, 0, this.mouthX, this.mouthY),
					this.baseAction = new Laya.Sprite,
					this.addChild(this.baseAction),
					this.skeleton.showSkinByIndex(o),
					this.baseAction.addChild(this.skeleton),
					this.createWarnIcon(),
					this.visible = !1,
					this.playAction(0),
					this.skeleton.on(Laya.Event.STOPPED, this,
						function () {
							1 == this.actionId && (window.isTestFish || this.playAction(0))
						}),
					this.initValue(!0),
					this.state = window.FISH_STATE_UN_USE
			}
			createWarnIcon() {
				this.iconWarn || (this.iconWarn = new Laya.Sprite, this.addChild(this.iconWarn), this.iconWarn.loadImage("res/hintBigFish.png"), this.iconWarn.pivotX = 23, this.iconWarn.pivotY = 25, this.iconWarn.visible = !1, this.iconWarn.zOrder = 1e3)
			}
			initValue(i = !1) {
				this.state = window.FISH_STATE_SWIM,
					this.isAlive = !0,
					this.isSuperState = !1,
					this.rotation = 0,
					this.baseAction.scaleX = 1,
					this.baseAction.scaleY = 1,
					this.baseAction.rotation = 0,
					this.baseAction.alpha = 1,
					this.haveEnergy = 0,
					this.zOrder = this.zOrderInit,
					this.vy = this.vyTarget = 0,
					this.playAction(0),
					i && this.updateData()
			}
			setFlip() {
				this.skeleton.scaleX > 0 && (this.scaleDirect = -1, this.skeleton.scaleX *= -1, this.shapeId != window.gslShapeId && this.shapeId != window.dragonShapeId || (this.skeleton.scaleX *= -1), this.mouthRotation = 180 - this.mouthRotation),
					this.updateData()
			}
			updateData() {
				window.sceGame && this.isDragon ? this.bigScale = 1 / this.fishScale / window.sceGame.baseFish.scaleX : this.bigScale = 1 + (window.fishScaleLvAdd - 1) * this.haveEnergy / this.toNextLvNeedEnergy,
					this.scaleX = this.scaleY = this.bigScale,
					this.scaleValue = this.bodyScale * this.bigScale * this.scaleDirect,
					this.scaleAbs = Math.abs(this.scaleValue),
					this.bodyW = window.fishData[this.shapeId].w * this.scaleAbs,
					this.bodyH = window.fishData[this.shapeId].h * this.scaleAbs,
					this.bodyR = window.fishData[this.shapeId].br * this.scaleAbs,
					this.mouthX = window.fishData[this.shapeId].mx * this.scaleValue,
					this.mouthY = window.fishData[this.shapeId].my * this.scaleAbs,
					this.mouthR = window.fishData[this.shapeId].mr * this.scaleAbs,
					this.mouthD = this.mouthBaseD * this.scaleAbs,
					this.iconWarn && (this.iconWarn.x = 0, this.iconWarn.y = -35 * this.fishScale, this.iconWarn.scaleX = this.iconWarn.scaleY = this.fishScale)
			}
			playHintAction() {
				this.iconWarn && (this.iconWarn.visible = !0, this.actionHint || (this.actionHint = new Laya.TimeLine, this.actionHint.to(this.iconWarn, {
					scaleX: 1.2 * this.fishScale,
					scaleY: 1.2 * this.fishScale
				},
					200), this.actionHint.to(this.iconWarn, {
						scaleX: 1 * this.fishScale,
						scaleY: 1 * this.fishScale
					},
						200)), this.iconWarn.scaleX = this.iconWarn.scaleY = this.fishScale, this.actionHint.play(0, !0))
			}
			pauseHintAction() {
				this.iconWarn && (this.iconWarn.visible = !1, this.actionHint && this.actionHint.pause())
			}
			getMouthPos() {
				let i = (this.mouthRotation + this.rotation) * Math.PI / 180;
				return {
					x: this.x + this.mouthD * Math.cos(i),
					y: this.y + this.mouthD * Math.sin(i),
					r: this.mouthR
				}
			}
			eat(i) {
				this.playAction(1),
					i == window.lead && (this.vx *= 2, this.vy *= 2),
					i.beEat(this);
				let e = (this.mouthRotation + this.rotation) * Math.PI / 180;
				window.sceGame.setEatPP(this.x + this.mouthD * Math.cos(e), this.y + this.mouthD * Math.sin(e)),
					i.zOrder > this.zOrder && !this.isDragon && (i.zOrder = this.zOrder - 1),
					this.isDragon || window.isToGeSiLa || (this.haveEnergy += i.energy, this.haveEnergy >= this.toNextLvNeedEnergy && (this.haveEnergy = this.toNextLvNeedEnergy, window.lead.shapeId + 1 <= window.fishMaxLv && !window.isSetLvState && (window.isSetLvState = !0, Laya.timer.once(200, this,
						function () {
							window.lead.isAlive && window.sceGame.createBomb(window.lead.shapeId + 1)
						}))), this.updateData())
			}
			beEat(i) {
				this.state = window.FISH_STATE_BE_EAT,
					i.isDragon && (this.zOrder = i.zOrder + 1),
					this.eatFish = i,
					this.isAlive = !1;
				let e = Math.abs(i.rotation - this.rotation);
				e > 180 && (e = 360 - e);
				let t = (i.rotation + 180) % 360,
					o = Math.abs(t - this.rotation);
				o > 180 && (o = 360 - o);
				let s = (t = o < e ? t : i.rotation) - this.rotation;
				Math.abs(s) > 180 && (s = s > 0 ? s - 360 : s + 360);
				let n = new Laya.TimeLine;
				n.to(this.baseAction, {
					scaleX: 0,
					scaleY: 0,
					rotation: s
				},
					200),
					n.on(Laya.Event.COMPLETE, this,
						function () {
							this.setRecovery()
						}.bind(this)),
					n.play(0, !1)
			}
			getEatAngle() {
				return - 1 == this.scaleDirect ? this.rotation % 360 : (180 + this.rotation) % 360
			}
			playAction(i) {
				if (1 != i || window.isTestFish || window.playSound("eat0"), this.actionId = i, (this.shapeId >= 7 || this.isDragon) && !this.isGeSiLa) {
					let e = 0 == i ? 1 : 0;
					this.skeleton.play(e, 1 == e)
				} else this.skeleton.play(i, 0 == i)
			}
			setRecovery() {
				this.state = window.FISH_STATE_UN_USE,
					this.visible = !1,
					this.pauseHintAction(),
					null != this.skeleton.filters && (this.skeleton.filters = null)
			}
			run() {
				if (this.state != window.FISH_STATE_UN_USE) if (this.state == window.FISH_STATE_SWIM) this.runAI(),
					this.x += this.vx,
					(this.x < window.mapLeftX - this.bodyW / 2 - 10 || this.y < window.mapTopY - this.bodyH / 2 - 10 || this.y > window.mapBottomY + this.bodyH / 2 + 10) && (this.setRecovery(), window.sceGame.setGuideFinish(this.shapeId));
				else if (this.state == window.FISH_STATE_BE_EAT) {
					let i = (this.eatFish.mouthRotation + this.eatFish.rotation) * Math.PI / 180,
						e = this.eatFish.x + this.eatFish.mouthD * Math.cos(i),
						o = this.eatFish.y + this.eatFish.mouthD * Math.sin(i),
						s = 4,
						n = e - this.x;
					n > -1 && n < 1 ? this.x = e : this.x += n / s,
						(n = o - this.y) > -1 && n < 1 ? this.y = o : this.y += n / s,
						t.distance(e, o, this.x, this.y) < 2 && this.setRecovery()
				}
			}
			runAI() {
				let i = window.sceGame.yuLei.x,
					e = window.sceGame.yuLei.y,
					o = this.x * window.sceGame.baseFish.scaleX + window.leadInitX,
					s = this.y * window.sceGame.baseFish.scaleX + window.leadInitY;
				if (window.sceGame.isYuLei && window.sceGame.yuLei.visible && Math.abs(e - s) < 300 && o < i + 500) this.vyTarget = s > e ? 2.5 * -this.vx : -2.5 * -this.vx,
					this.isHaveAI = !0;
				else {
					if (!this.isHaveAI) {
						if (!window.isShowBombBP) return; (this.shapeId > window.lead.shapeId || this.shapeId == window.lead.shapeId && this.isSuperState) && (this.isHaveAI = !0)
					}
					if (this.x > window.lead.x) {
						let i = t.distance(this.x, this.y, window.lead.x, window.lead.y),
							e = this.shapeId < window.lead.shapeId ? 1e3 : 2e3;
						if (i < (e /= window.sceGame.baseFish.scaleX)) {
							let i = this.shapeId <= window.lead.shapeId ? .8 : .5;
							0 == window.gameModel && (i += .5),
								this.shapeId < window.lead.shapeId ? window.isShowBombBP ? this.vyTarget = this.y > window.lead.y ? -this.vx * -i : -this.vx * i : this.vyTarget = this.y > window.lead.y ? -this.vx * i : -this.vx * -i : (this.shapeId > window.lead.shapeId || this.shapeId == window.lead.shapeId && this.isSuperState) && (window.isShowBombBP ? this.vyTarget = this.y > window.lead.y ? -this.vx * i : -this.vx * -i : this.vyTarget = this.y > window.lead.y ? -this.vx * -i : -this.vx * i)
						} else i < e + 100 / window.sceGame.baseFish.scaleX && (this.vyTarget = 0)
					} else this.vyTarget = 0
				}
				if (this.vy != this.vyTarget) {
					let i = this.vyTarget - this.vy;
					Math.abs(i) < .1 ? this.vy = this.vyTarget : this.vy += i / 128
				}
				this.y += this.vy;
				let n = 180 * Math.atan(Math.abs(this.vy / this.vx)) / Math.PI;
				this.rotation = this.vy > 0 ? -n : n
			}
			initPoolValue(i = 0) {
				if (this.visible = !0, this.isInPool = !0, this.removeSelf(), window.fishPoolBase.addChild(this), this.skeleton.scaleX = this.skeleton.scaleY = 1 / this.bodyScale / this.fishScale, this.scaleX = this.scaleY = this.baseAction.scaleX = this.baseAction.scaleY = 1, this.skeleton.scaleX = this.skeleton.scaleY = 1, this.isLeft = Math.random() < .5, this.setPoolFishDir(this.isLeft), this.shapeId <= 6 ? this.skeleton.scaleX = this.skeleton.scaleY = .28 * 1.5 : this.skeleton.scaleX = this.skeleton.scaleY = 1.5, this.poolState = 0, 0 == i) this.x = Laya.stage.width / 6 + 4 * Laya.stage.width / 6 * Math.random(),
					this.y = Laya.stage.height / 6 + 4 * Laya.stage.height / 6 * Math.random(),
					window.fishsPool.length < 6 && (this.y = Laya.stage.height / 6 + 2 * Laya.stage.height / 6 * Math.random());
				else if (1 == i) {
					this.poolState = 10,
						window.playSound("water");
					let i = Laya.stage.width / 3 + 1 * Laya.stage.width / 3 * Math.random(),
						e = Laya.stage.height / 6 + 3 * Laya.stage.height / 6 * Math.random(),
						o = this.scaleX,
						s = this.scaleY,
						n = this.x = window.sceMain.baseBottom.x,
						a = this.y = window.sceMain.baseBottom.y - 20;
					this.scaleX = .5 * o,
						this.scaleY = .5 * s;
					let w = t.distance(n, a, i, e) / 100 * 50;
					this.removeSelf(),
						window.sceMain.baseFishUiTop.addChild(this);
					let d = new Laya.TimeLine;
					d.to(this, {
						y: a + 100,
						scaleX: 1.5 * o,
						scaleY: 1.5 * s
					},
						300),
						d.to(this, {
							x: i,
							y: e,
							scaleX: o,
							scaleY: s
						},
							w, Laya.Ease.expoOut),
						d.on(Laya.Event.COMPLETE, this, () => {
							this.poolState = 0,
								this.removeSelf(),
								window.sceMain.basePool.addChild(this)
						}),
						d.play(0, !1)
				} else this.x = Laya.stage.width / 6 + 4 * Laya.stage.width / 6 * Math.random(),
					this.y = Laya.stage.height / 6 + 4 * Laya.stage.height / 6 * Math.random();
				this.iconWarn && (this.iconWarn.visible = !1),
					this.playAction(0)
			}
			setPoolFishDir(i = !0) {
				this.isLeft = i,
					this.scaleX = this.isLeft ? 1 : -1,
					this.moveV = 1 + 2 * Math.random(),
					this.moveV *= -this.scaleX
			}
			recoveryPool() {
				this.visible = !1,
					this.isInPool = !1,
					this.removeSelf()
			}
			runPool() {
				if (0 == this.poolState) {
					this.x += this.moveV;
					let i = window.fishData[this.shapeId].bw;
					if (this.x < -i && this.isLeft || this.x > Laya.stage.width + i && !this.isLeft) {
						let e = !this.isLeft,
							t = this.y;
						this.recoveryPool(),
							this.initPoolValue(2),
							this.setPoolFishDir(e),
							this.y = t - 50 + 100 * Math.random(),
							this.y < window.fishPoolToY ? this.y += 60 : this.y > window.fishPoolBottomY && (this.y = window.fishPoolBottomY - (this.y - window.fishPoolBottomY)),
							this.isLeft ? this.x = Laya.stage.width + i : this.x = -i
					}
				} else 10 == this.poolState && window.sceMain.createFishPP(this.x, this.y)
			}
		}
		class I extends e {
			constructor() {
				window.plat,
					super(Laya.View.uiMap.SceneLoad),
					window.gameInfo = new A,
					window.user = new T,
					window.sm = new h,
					Laya.MouseManager.multiTouchEnabled = !1,
					window.fishData[0].money = 5,
					window.fishData[1].money = 6;
				for (let i = 2; i < window.fishData.length; i++) window.fishData[i].money = 1.7 * window.fishData[i - 1].money;
				for (let i = 2; i < window.fishData.length; i++) window.fishData[i].money = Math.round(window.fishData[i].money);
				window.leadInitX = 200,
					window.leadInitY = this.height / 2,
					window.fishMaxLv = window.fishData.length - 3,
					window.fishScaleLvAdd = 1.2,
					window.fishBaseH = 80,
					window.fishEatAngle = 90,
					window.sceneScaleAdd = .02,
					window.sceneScaleMin = this.height > 1334 ? this.height / 1334 : 1,
					window.sceneScaleLv1 = window.sceneScaleMin * (1 + (window.fishMaxLv - 1) * window.sceneScaleAdd),
					this.bg.height = this.height,
					this.bgBar.y = this.height - 300 * this.height / 1624,
					this.setBar(0),
					this.txtVersion.text = window.gameVersion + " ",
					this.txtVersion.y = this.height - 10,
					window.authorizeState = -1,
					window.gameInfo.checkCameraAuthorize(function (i) {
						window.authorizeState = i
					})
			}
			onEnable() {
				window.platform.reportAnalytics("in_load", {}),
					window.desktopState = -1,
					window.platform.getDesktopIconState(function (i) {
						window.desktopState = i ? 1 : 0
					}),
					this.setBar(0),
					this.barShowNum = 0,
					this.barTargetNum = window.aldIsNewPlayer ? 90 : 80,
					this.barAddV = window.aldIsNewPlayer ? .3 : 1,
					Laya.timer.once(100, this,
						function () {
							this.startLoad()
						}),
					false && Laya.timer.once(50, this,
						function () {
							qg.reportMonitor("game_scene", 0)
						})
			}
			startLoad() {
				this.timeGameLoadStart = (new Date).getTime(),
					Laya.timer.loop(1e3 / 60, this, this.run);
				let i = !1;
				window.platform.loadSubpackage("subpackages", e => {
					e.progress >= 100 && (e.progress = 100, 0 == i && (i = !0, this.loadAtlas()))
				})
			}
			setBar(i) {
				this.barValue = i,
					this.loadBar.width = 30 + 399 * i,
					this.txtBar.text = "Loading " + Math.floor(100 * i) + "%"
			}
			loadAtlas() {
				Laya.loader.load("./res/atlas/res.atlas", Laya.Handler.create(this,
					function () {
						this.loadYuLeiDragonBone()
					}))
			}
			loadYuLeiDragonBone() {
				let i = new Laya.Templet;
				i.on(Laya.Event.COMPLETE, this, () => {
					window.yuLei = i.buildArmature(0),
						window.yuLei.play(0, !0),
						window.yuLei.visible = !1,
						this.createFishBufferPool()
				}),
					i.loadAni("subpackages/sk/yuLei.sk")
			}
			createFishBufferPool() {
				window.createFish = (i => {
					let e = window.fishTemplet[i].buildArmature(0),
						t = new M(i, e, window.fishData[i].skin, window.fishData[i].name);
					return window.fishs[i].push(t),
						t
				});
				for (let i = 1; i < window.fishData.length; i++) window.fishData[i].en = window.fishData[i - 1].en + 1,
					window.fishData[i].toNextEN = window.fishData[i - 1].en * (10 + (i - 1) / 2 * 1);
				window.gslShapeId = window.fishData.length - 2,
					window.dragonShapeId = window.fishData.length - 1,
					window.fishs = [],
					window.fishTemplet = [],
					this.tmpletIndex = 0,
					this.loadFishSk()
			}
			loadFishSk() {
				this.templet = new Laya.Templet,
					this.templet.on(Laya.Event.COMPLETE, this,
						function () {
							window.fishTemplet.push(this.templet);
							let i = this.tmpletIndex == window.gslShapeId || this.tmpletIndex == window.dragonShapeId ? 1 : 23;
							window.fishs.push([]);
							for (let e = 0; e < i; e++) window.createFish(this.tmpletIndex);
							this.tmpletIndex++,
								this.tmpletIndex < window.fishData.length ? this.loadFishSk() : (this.barTargetNum = 100, this.barAddV = 2)
						}.bind(this)),
					this.templet.loadAni(window.fishData[this.tmpletIndex].resPath)
			}
			run() {
				if (this.barShowNum < this.barTargetNum) {
					this.barShowNum += this.barAddV,
						this.barShowNum > this.barTargetNum && (this.barShowNum = this.barTargetNum);
					let i = this.barShowNum / 100;
					this.barValue != i && this.setBar(i)
				} else 100 == this.barShowNum && (this.barShowNum++, this.setChangeScene());
				window.isOV && window.runOppoAd()
			}
			setChangeScene() {
				Laya.timer.clearAll(this);
				let i = "main";
				window.user.data.isModel0First ? (window.gameModel = 0, i = "game") : i = "main",
					window.plat,
					this.openScene(i)
			}
			onDisable() {
				Laya.loader.clearRes("res/bgLoad.jpg")
			}
		}
		new class {
			constructor() {
				window.Laya3D ? Laya3D.init(i.width, i.height) : Laya.init(i.width, i.height, Laya.WebGL),
					Laya.Physics && Laya.Physics.enable(),
					Laya.DebugPanel && Laya.DebugPanel.enable(),
					Laya.stage.scaleMode = i.scaleMode,
					Laya.stage.screenMode = i.screenMode,
					Laya.stage.alignV = i.alignV,
					Laya.stage.alignH = i.alignH,
					Laya.URL.exportSceneToJson = i.exportSceneToJson,
					(i.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
					i.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
					i.stat && Laya.Stat.show(),
					Laya.alertGlobalError(!0),
					Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION),
					console.log(Laya.version)
			}
			onVersionLoaded() {
				Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
			}
			onConfigLoaded() {
				window.timeGameAppStart = (new Date).getTime();
				let i = Laya.LocalStorage.getJSON(window.saveName + "isNew");
				window.aldIsNewPlayer = !i,
					window.aldIsNewStr = i ? "否" : "是",
					i = {
						isNew: 0
					},
					Laya.LocalStorage.setJSON(window.saveName + "isNew", i),
					Laya.loader.load([{
						url: "ui.json",
						type: Laya.Loader.JSON
					}], Laya.Handler.create(this, this.onUILoading))
			}
			onUILoading() {
				window.plat = "pc",
					window.isOpenAds = !1,
					window.isHaveVideoShare = !1,
					window.isHaveBanner = !1,
					window.isOV = !1,
					window.isVV = !1,
					window.isIos = !1;
				let i = 16,
					e = "",
					t = Laya.LocalStorage.getJSON(window.saveName + "UserId");
				Laya.loader.load(["res/bgLoad.jpg", "res/bgLoadBar.png", "res/loadBar.png"], null, Laya.Handler.create(this,
					function () {
						Laya.View.uiMap = Laya.Loader.getRes("ui.json"),
							window.sceLoad = new I,
							window.sceLoad.open()
					}))
			}
		}
	}();