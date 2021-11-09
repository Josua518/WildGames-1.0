window.__require = function e(t, i, a) {
	function n(s, c) {
		if (!i[s]) {
			if (!t[s]) {
				var r = s.split("/");
				if (r = r[r.length - 1], !t[r]) {
					var l = "function" == typeof __require && __require;
					if (!c && l) return l(r, !0);
					if (o) return o(r, !0);
					throw new Error("Cannot find module '" + s + "'")
				}
				s = r
			}
			var h = i[s] = {
				exports: {}
			};
			t[s][0].call(h.exports,
			function(e) {
				return n(t[s][1][e] || e)
			},
			h, h.exports, e, t, i, a)
		}
		return i[s].exports
	}
	for (var o = "function" == typeof __require && __require,
	s = 0; s < a.length; s++) n(a[s]);
	return n
} ({
	AMAEvents: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f5fbbPYa2RMwZEU9hBVlv0g", "AMAEvents"),
		i.GetSongID = function() {
			var e = window.location.href,
			t = new URL(e);
			return t.searchParams.has("songID") ? t.searchParams.get("songID") : ""
		},
		i.ShowOtherGame = function(e) {
			var t = {
				type: "try_this_song_on_othergame",
				source: "AmaGame",
				data: {
					songId: e
				}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(t)) : console.log("ShowOtherGame: " + JSON.stringify(t))
		},
		i.ShowSongList = function() {
			console.log("ShowSongList:");
			var e = {
				type: "show_song_list",
				source: "AmaGame",
				data: {}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(e)) : console.log("ShowSongList: " + JSON.stringify(e))
		},
		i.ShowResultScreen = function(e, t, i, a) {
			var n = {
				type: "show_result_screen",
				source: "AmaGame",
				data: {
					score: e,
					notes: t,
					stage: i,
					star: a
				}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(n)) : console.log("ShowResultScreen: " + JSON.stringify(n))
		},
		i.ShowInterAds = function() {
			console.log("ShowResultAds:");
			var e = {
				type: "show_interstitials_ads",
				source: "AmaGame",
				data: {}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(e)) : console.log("ShowInterAds: " + JSON.stringify(e))
		},
		i.ShowRewardAds = function() {
			console.log("ShowRewardAds:");
			var e = {
				type: "show_reward_ads",
				source: "AmaGame",
				data: {}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(e)) : console.log("ShowRewardAds: " + JSON.stringify(e))
		},
		i.LogReact = function(e) {
			var t = {
				type: "log",
				source: "AmaGame",
				data: e
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(t)) : console.log("LogReact: " + JSON.stringify(t))
		},
		i.LoadingGameEnd = function() {
			var e = {
				type: "loading_game_end",
				source: "AmaGame",
				data: {}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(e)) : console.log("LoadingGameEnd: " + JSON.stringify(e))
		},
		i.ShowContinueScreen = function(e) {
			var t = {
				type: "show_continue_screen",
				source: "AmaGame",
				data: {
					score: e
				}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(t)) : console.log("ShowContinueScreen: " + JSON.stringify(t))
		},
		i.ShowTapToPlay = function() {
			console.log("ShowTapToPlay"),
			window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
				type: "show_taptoplay_screen",
				source: "AmaGame",
				data: {}
			}))
		},
		i.ReactDownloadSong = function(e) {
			var t = {
				type: "request_download_song",
				source: "AmaGame",
				data: {
					songID: e
				}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(t)) : console.log("ReactDownloadSong")
		},
		i.SendGameData = function(e, t, i) {
			var a = {
				type: "senddatawhenappbackground",
				source: "AmaGame",
				data: {
					score: e,
					notes: t,
					stage: i
				}
			};
			window.ReactNativeWebView ? window.ReactNativeWebView.postMessage(JSON.stringify(a)) : console.log("ShowResultScreen: " + JSON.stringify(a))
		},
		cc._RF.pop()
	},
	{}],
	ArrowTutorial: [function(e, t) {
		"use strict";
		cc._RF.push(t, "8afafCqmcBHaac+Bh5LhoL3", "ArrowTutorial"),
		cc.Class({
			extends: cc.Component,
			properties: {},
			onEnable: function() {
				cc.tween(this.node).repeat(1e3, cc.tween().to(.5, {
					position: cc.v3(0, 1.4, 0)
				}).to(.5, {
					position: cc.v3(0, .8, 0)
				})).start()
			}
		}),
		cc._RF.pop()
	},
	{}],
	AudioCtrl: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a60380Jj8RESo9yyI53WoPl", "AudioCtrl"),
		cc.Class({
			extends: cc.Component,
			properties: {
				timeLabel: {
				default:
					null,
					type: cc.Label
				},
				prePlay: !0,
				_audioTask: null,
				_audioID: null,
				_audioHowler: null
			},
			setAudioTask: function(e) {
				this._audioTask = e
			},
			preload: function(e, t, i, a) {
				var n = this;
				void 0 === t && (t = !1),
				void 0 === i && (i = function() {}),
				void 0 === a && (a = function() {}),
				this.resolveDelayMusic = !1,
				this._audioHowler && this._audioHowler.unload(),
				this._audioHowler = new Howl({
					src: [e],
					loop: t,
					preload: !0,
					html5: !0,
					mute: !0,
					format: ["mp3"],
					onload: function() {
						n.prePlay && setTimeout(function() {
							n._audioHowler.play()
						},
						50),
						i && i()
					},
					onloaderror: a,
					onplay: function() {
						n.prePlay && !n.resolveDelayMusic ? setTimeout(function() {
							n._audioHowler.pause(),
							n._audioHowler.seek(0),
							n._audioHowler.mute(!1),
							n.resolveDelayMusic = !0
						},
						50) : n.playMusicCallBack && n.playMusicCallBack()
					}
				})
			},
			playAudio: function(e, t) {
				return void 0 === e && (e = null),
				void 0 === t && (t = null),
				this.playMusicCallBack = e,
				cc.log("IS_USE_HOWLER"),
				void(null !== t ? this._audioHowler.play(t) : this._audioHowler.play())
			},
			stopAudio: function() {
				this._audioHowler.playing() && this._audioHowler.stop()
			},
			pauseAudio: function() {
				this._audioHowler.playing() && this._audioHowler.pause()
			},
			playing: function() {
				return this._audioHowler.playing()
			},
			resumeAudio: function(e) {
				this.playMusicCallBack = e,
				this._audioHowler.play()
			},
			stopAllAudio: function() {
				this.stopAudio()
			},
			pauseAllAudio: function() {
				this.pauseAudio()
			},
			resumeAllAudio: function() {
				this.resumeAudio()
			},
			updateUI: function() {},
			isPlaying: function() {
				if (null === this._audioID) return ! 1;
				var e = cc.audioEngine.getState(this._audioID);
				return cc.audioEngine.AudioState.PLAYING == e
			},
			SetTime: function(e) {
				this._audioHowler.seek(e)
			},
			CurrentTime: function() {
				var e = this._audioHowler.seek();
				return e >= 0 ? e: 0
			},
			DurationTime: function() {
				return this._audioHowler.duration()
			},
			SetSpeed: function(e) {
				this._audioHowler.rate(e)
			}
		}),
		cc._RF.pop()
	},
	{}],
	BallItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "49dd3ump9NGvZx2iErMmxZM", "BallItem"),
		cc.Class({
			extends: cc.Component,
			properties: {
				icon: cc.Node,
				border: cc.Node,
				activeBorder: cc.Node,
				lock: cc.Node,
				ShopManager: cc.Node
			},
			onLoad: function() {
				this.ShopManagerComponent = this.ShopManager.getComponent("ShopManager")
			},
			setValue: function(e, t, i, a, n, o, s) {
				void 0 === o && (o = !1),
				void 0 === s && (s = !1),
				this.index = e,
				this.unlock = o,
				this.active = s,
				this.icon.getComponent(cc.Sprite).spriteFrame = t,
				this.border.getComponent(cc.Sprite).spriteFrame = i,
				this.activeBorder.getComponent(cc.Sprite).spriteFrame = a,
				this.lock.getComponent(cc.Sprite).spriteFrame = n,
				s ? (this.activeBorder.active = !0, this.border.active = !1, this.lock.active = !1) : (this.activeBorder.active = !1, this.border.active = !0, this.lock.active = !o)
			},
			onClick: function() {
				this.ShopManagerComponent.onClickBall(this.index, this.unlock, this.active)
			}
		}),
		cc._RF.pop()
	},
	{}],
	BuyCoinPopup: [function(e, t) {
		"use strict";
		cc._RF.push(t, "452228lFN9PKIz2WGXUAlhn", "BuyCoinPopup");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				loading: cc.Node,
				ShopItems: cc.Node,
				ShopItem: cc.Node
			},
			start: function() {
				this.buidTreasure()
			},
			buidTreasure: function() {
				var e = this;
				this.coinProductIDs = [{
					productID: "Free",
					coin: 100,
					price: 0
				}],
				i.isFbPlatform() ? window.coinProductIDs ? this.buidTreasure2() : FBInstant.getSupportedAPIs().includes("payments.getCatalogAsync") ? i.getFBProducts(function() {
					e.buidTreasure2()
				}) : this.buidTreasure2() : (this.coinProductIDs.push({
					productID: 1,
					coin: 300,
					price: "$1",
					icon: "x2"
				}), this.coinProductIDs.push({
					productID: 2,
					coin: 800,
					price: "$2",
					icon: "x3"
				}), this.coinProductIDs.push({
					productID: 3,
					coin: 2e3,
					price: "$3",
					icon: "x3"
				}), this.buidTreasure2())
			},
			buidTreasure2: function() {
				for (var e = -60,
				t = 0; t < this.coinProductIDs.length; t++) {
					var i = cc.instantiate(this.ShopItem);
					i.parent = this.ShopItems,
					i.getComponent("ShopItem").setValue(this.coinProductIDs[t]),
					i.active = !0,
					i.y = e,
					e -= 250
				}
				this.loading.active = !1
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	Coin: [function(e, t) {
		"use strict";
		cc._RF.push(t, "94612zAnk9NaIgBSlfnXjx0", "Coin"),
		cc.Class({
			extends: cc.Component,
			properties: {
				mesh: cc.Node
			},
			update: function(e) {
				var t = this.mesh.eulerAngles;
				t.y += 320 * e,
				this.mesh.eulerAngles = t
			}
		}),
		cc._RF.pop()
	},
	{}],
	ContinueController: [function(e, t) {
		"use strict";
		cc._RF.push(t, "7ed3ekwh35APKZxYa5fG4AB", "ContinueController");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				circle: cc.Sprite,
				nothanks: cc.Node,
				endGame: cc.Node,
				btnGold: cc.Node,
				btnShare: cc.Node
			},
			onLoad: function() {
				this.gameController = cc.find("GameControler").getComponent("game")
			},
			onEnable: function() {
				if (this.btnShare.active = !1, this.btnGold.active = !0, this.nothanks.active = !1, this.circle.fillRange = 0, this.fillRangeTime = 0, i.isFbPlatform()) {
					i.GameData.playTutorial || i.setPlayTutorial(),
					this.gameController.count_colider,
					this.gameController.count_star,
					this.gameController.round,
					this.gameController.currentSong.path,
					this.gameController.currentLevelDesign;
					var e = i.getSongData(this.gameController.currentSong.acm_id),
					t = (e && e.score && e.score) > this.gameController.count_colider ? e.score: this.gameController.count_colider,
					a = (e && e.score && e.star) > this.gameController.count_star ? e.star: this.gameController.count_star,
					n = new XMLHttpRequest;
					n.open("POST", "https://sustaining-aboard-khaan.glitch.me/logScore", !0),
					n.setRequestHeader("Content-Type", "application/json"),
					n.send(JSON.stringify({
						pid: FBInstant.player.getID(),
						photo: FBInstant.player.getPhoto(),
						name: FBInstant.player.getName(),
						acm_id: this.gameController.currentSong.acm_id,
						score: t,
						star: a,
						round: this.gameController.round
					}))
				} else i.setPlayTutorial()
			},
			update: function(e) {
				this.fillRangeTime < 2 ? (this.fillRangeTime += e, this.circle.fillRange = this.fillRangeTime / 2) : this.fillRangeTime >= 2 && !this.nothanks.active && (this.circle.fillRange = 1, this.nothanks.active = !0)
			},
			showEndGame: function() {
				var e = this;
				this.gameController.playClickSound(),
				Ads.isSupport() && Ads.canShowInterstitial() ? Ads.showInterstitial(function() {
					e.node.active = !1,
					e.endGame.active = !0
				}) : (this.node.active = !1, this.endGame.active = !0)
			},
			continueGold: function() {
				var e = this;
				this.gameController.playClickSound(),
				Ads.isSupport() ? Ads.hasReward() ? Ads.showRewarded(function() {
					e.node.active = !1,
					e.gameController.reviveRound()
				},
				function() {
					e.node.active = !1,
					e.endGame.active = !0
				}) : this.gameController.showVideoNotAvailable(function() {
					e.node.active = !1,
					e.endGame.active = !0
				}) : (this.node.active = !1, this.gameController.reviveRound())
			},
			continueShare: function() {
				var e = this;
				this.gameController.playClickSound(),
				i.isFbPlatform() ? i.shareGame(function() {
					e.node.active = !1,
					e.gameController.reviveRound()
				}) : (this.node.active = !1, this.gameController.reviveRound())
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	CryptoJS: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2465dVy42RMGbP0H3ENCR9h", "CryptoJS"),
		i.__esModule = !0,
		i.CryptoJS = void 0;
		var a, n, o = o ||
		function(e) {
			var t = {},
			i = t.lib = {},
			a = function() {},
			n = i.Base = {
				extend: function(e) {
					a.prototype = this;
					var t = new a;
					return e && t.mixIn(e),
					t.hasOwnProperty("init") || (t.init = function() {
						t.$super.init.apply(this, arguments)
					}),
					t.init.prototype = t,
					t.$super = this,
					t
				},
				create: function() {
					var e = this.extend();
					return e.init.apply(e, arguments),
					e
				},
				init: function() {},
				mixIn: function(e) {
					for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
					e.hasOwnProperty("toString") && (this.toString = e.toString)
				},
				clone: function() {
					return this.init.prototype.extend(this)
				}
			},
			o = i.WordArray = n.extend({
				init: function(e, t) {
					e = this.words = e || [],
					this.sigBytes = null != t ? t: 4 * e.length
				},
				toString: function(e) {
					return (e || c).stringify(this)
				},
				concat: function(e) {
					var t = this.words,
					i = e.words,
					a = this.sigBytes;
					if (e = e.sigBytes, this.clamp(), a % 4) for (var n = 0; n < e; n++) t[a + n >>> 2] |= (i[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 24 - (a + n) % 4 * 8;
					else if (65535 < i.length) for (n = 0; n < e; n += 4) t[a + n >>> 2] = i[n >>> 2];
					else t.push.apply(t, i);
					return this.sigBytes += e,
					this
				},
				clamp: function() {
					var t = this.words,
					i = this.sigBytes;
					t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
					t.length = e.ceil(i / 4)
				},
				clone: function() {
					var e = n.clone.call(this);
					return e.words = this.words.slice(0),
					e
				},
				random: function(t) {
					for (var i = [], a = 0; a < t; a += 4) i.push(4294967296 * e.random() | 0);
					return new o.init(i, t)
				}
			}),
			s = t.enc = {},
			c = s.Hex = {
				stringify: function(e) {
					var t = e.words;
					e = e.sigBytes;
					for (var i = [], a = 0; a < e; a++) {
						var n = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
						i.push((n >>> 4).toString(16)),
						i.push((15 & n).toString(16))
					}
					return i.join("")
				},
				parse: function(e) {
					for (var t = e.length,
					i = [], a = 0; a < t; a += 2) i[a >>> 3] |= parseInt(e.substr(a, 2), 16) << 24 - a % 8 * 4;
					return new o.init(i, t / 2)
				}
			},
			r = s.Latin1 = {
				stringify: function(e) {
					var t = e.words;
					e = e.sigBytes;
					for (var i = [], a = 0; a < e; a++) i.push(String.fromCharCode(t[a >>> 2] >>> 24 - a % 4 * 8 & 255));
					return i.join("")
				},
				parse: function(e) {
					for (var t = e.length,
					i = [], a = 0; a < t; a++) i[a >>> 2] |= (255 & e.charCodeAt(a)) << 24 - a % 4 * 8;
					return new o.init(i, t)
				}
			},
			l = s.Utf8 = {
				stringify: function(e) {
					try {
						return decodeURIComponent(escape(r.stringify(e)))
					} catch(t) {
						throw Error("Malformed UTF-8 data")
					}
				},
				parse: function(e) {
					return r.parse(unescape(encodeURIComponent(e)))
				}
			},
			h = i.BufferedBlockAlgorithm = n.extend({
				reset: function() {
					this._data = new o.init,
					this._nDataBytes = 0
				},
				_append: function(e) {
					"string" == typeof e && (e = l.parse(e)),
					this._data.concat(e),
					this._nDataBytes += e.sigBytes
				},
				_process: function(t) {
					var i = this._data,
					a = i.words,
					n = i.sigBytes,
					s = this.blockSize,
					c = n / (4 * s);
					if (t = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * s, n = e.min(4 * t, n), t) {
						for (var r = 0; r < t; r += s) this._doProcessBlock(a, r);
						r = a.splice(0, t),
						i.sigBytes -= n
					}
					return new o.init(r, n)
				},
				clone: function() {
					var e = n.clone.call(this);
					return e._data = this._data.clone(),
					e
				},
				_minBufferSize: 0
			});
			i.Hasher = h.extend({
				cfg: n.extend(),
				init: function(e) {
					this.cfg = this.cfg.extend(e),
					this.reset()
				},
				reset: function() {
					h.reset.call(this),
					this._doReset()
				},
				update: function(e) {
					return this._append(e),
					this._process(),
					this
				},
				finalize: function(e) {
					return e && this._append(e),
					this._doFinalize()
				},
				blockSize: 16,
				_createHelper: function(e) {
					return function(t, i) {
						return new e.init(i).finalize(t)
					}
				},
				_createHmacHelper: function(e) {
					return function(t, i) {
						return new d.HMAC.init(e, i).finalize(t)
					}
				}
			});
			var d = t.algo = {};
			return t
		} (Math);
		i.CryptoJS = o,
		n = (a = o).lib.WordArray,
		a.enc.Base64 = {
			stringify: function(e) {
				var t = e.words,
				i = e.sigBytes,
				a = this._map;
				e.clamp(),
				e = [];
				for (var n = 0; n < i; n += 3) for (var o = (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, s = 0; 4 > s && n + .75 * s < i; s++) e.push(a.charAt(o >>> 6 * (3 - s) & 63));
				if (t = a.charAt(64)) for (; e.length % 4;) e.push(t);
				return e.join("")
			},
			parse: function(e) {
				var t = e.length,
				i = this._map; (a = i.charAt(64)) && -1 != (a = e.indexOf(a)) && (t = a);
				for (var a = [], o = 0, s = 0; s < t; s++) if (s % 4) {
					var c = i.indexOf(e.charAt(s - 1)) << s % 4 * 2,
					r = i.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
					a[o >>> 2] |= (c | r) << 24 - o % 4 * 8,
					o++
				}
				return n.create(a, o)
			},
			_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
		},
		function(e) {
			function t(e, t, i, a, n, o, s) {
				return ((e = e + (t & i | ~t & a) + n + s) << o | e >>> 32 - o) + t
			}
			function i(e, t, i, a, n, o, s) {
				return ((e = e + (t & a | i & ~a) + n + s) << o | e >>> 32 - o) + t
			}
			function a(e, t, i, a, n, o, s) {
				return ((e = e + (t ^ i ^ a) + n + s) << o | e >>> 32 - o) + t
			}
			function n(e, t, i, a, n, o, s) {
				return ((e = e + (i ^ (t | ~a)) + n + s) << o | e >>> 32 - o) + t
			}
			for (var s = o,
			c = (l = s.lib).WordArray, r = l.Hasher, l = s.algo, h = [], d = 0; 64 > d; d++) h[d] = 4294967296 * e.abs(e.sin(d + 1)) | 0;
			l = l.MD5 = r.extend({
				_doReset: function() {
					this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
				},
				_doProcessBlock: function(e, o) {
					for (var s = 0; 16 > s; s++) {
						var c = e[r = o + s];
						e[r] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
					}
					s = this._hash.words;
					var r = e[o + 0],
					l = (c = e[o + 1], e[o + 2]),
					d = e[o + 3],
					u = e[o + 4],
					p = e[o + 5],
					m = e[o + 6],
					g = e[o + 7],
					v = e[o + 8],
					f = e[o + 9],
					y = e[o + 10],
					S = e[o + 11],
					b = e[o + 12],
					w = e[o + 13],
					I = e[o + 14],
					C = e[o + 15],
					A = t(A = s[0], P = s[1], T = s[2], D = s[3], r, 7, h[0]),
					D = t(D, A, P, T, c, 12, h[1]),
					T = t(T, D, A, P, l, 17, h[2]),
					P = t(P, T, D, A, d, 22, h[3]);
					A = t(A, P, T, D, u, 7, h[4]),
					D = t(D, A, P, T, p, 12, h[5]),
					T = t(T, D, A, P, m, 17, h[6]),
					P = t(P, T, D, A, g, 22, h[7]),
					A = t(A, P, T, D, v, 7, h[8]),
					D = t(D, A, P, T, f, 12, h[9]),
					T = t(T, D, A, P, y, 17, h[10]),
					P = t(P, T, D, A, S, 22, h[11]),
					A = t(A, P, T, D, b, 7, h[12]),
					D = t(D, A, P, T, w, 12, h[13]),
					T = t(T, D, A, P, I, 17, h[14]),
					A = i(A, P = t(P, T, D, A, C, 22, h[15]), T, D, c, 5, h[16]),
					D = i(D, A, P, T, m, 9, h[17]),
					T = i(T, D, A, P, S, 14, h[18]),
					P = i(P, T, D, A, r, 20, h[19]),
					A = i(A, P, T, D, p, 5, h[20]),
					D = i(D, A, P, T, y, 9, h[21]),
					T = i(T, D, A, P, C, 14, h[22]),
					P = i(P, T, D, A, u, 20, h[23]),
					A = i(A, P, T, D, f, 5, h[24]),
					D = i(D, A, P, T, I, 9, h[25]),
					T = i(T, D, A, P, d, 14, h[26]),
					P = i(P, T, D, A, v, 20, h[27]),
					A = i(A, P, T, D, w, 5, h[28]),
					D = i(D, A, P, T, l, 9, h[29]),
					T = i(T, D, A, P, g, 14, h[30]),
					A = a(A, P = i(P, T, D, A, b, 20, h[31]), T, D, p, 4, h[32]),
					D = a(D, A, P, T, v, 11, h[33]),
					T = a(T, D, A, P, S, 16, h[34]),
					P = a(P, T, D, A, I, 23, h[35]),
					A = a(A, P, T, D, c, 4, h[36]),
					D = a(D, A, P, T, u, 11, h[37]),
					T = a(T, D, A, P, g, 16, h[38]),
					P = a(P, T, D, A, y, 23, h[39]),
					A = a(A, P, T, D, w, 4, h[40]),
					D = a(D, A, P, T, r, 11, h[41]),
					T = a(T, D, A, P, d, 16, h[42]),
					P = a(P, T, D, A, m, 23, h[43]),
					A = a(A, P, T, D, f, 4, h[44]),
					D = a(D, A, P, T, b, 11, h[45]),
					T = a(T, D, A, P, C, 16, h[46]),
					A = n(A, P = a(P, T, D, A, l, 23, h[47]), T, D, r, 6, h[48]),
					D = n(D, A, P, T, g, 10, h[49]),
					T = n(T, D, A, P, I, 15, h[50]),
					P = n(P, T, D, A, p, 21, h[51]),
					A = n(A, P, T, D, b, 6, h[52]),
					D = n(D, A, P, T, d, 10, h[53]),
					T = n(T, D, A, P, y, 15, h[54]),
					P = n(P, T, D, A, c, 21, h[55]),
					A = n(A, P, T, D, v, 6, h[56]),
					D = n(D, A, P, T, C, 10, h[57]),
					T = n(T, D, A, P, m, 15, h[58]),
					P = n(P, T, D, A, w, 21, h[59]),
					A = n(A, P, T, D, u, 6, h[60]),
					D = n(D, A, P, T, S, 10, h[61]),
					T = n(T, D, A, P, l, 15, h[62]),
					P = n(P, T, D, A, f, 21, h[63]),
					s[0] = s[0] + A | 0,
					s[1] = s[1] + P | 0,
					s[2] = s[2] + T | 0,
					s[3] = s[3] + D | 0
				},
				_doFinalize: function() {
					var t = this._data,
					i = t.words,
					a = 8 * this._nDataBytes,
					n = 8 * t.sigBytes;
					i[n >>> 5] |= 128 << 24 - n % 32;
					var o = e.floor(a / 4294967296);
					for (i[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), i[14 + (n + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (i.length + 1), this._process(), i = (t = this._hash).words, a = 0; 4 > a; a++) n = i[a],
					i[a] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
					return t
				},
				clone: function() {
					var e = r.clone.call(this);
					return e._hash = this._hash.clone(),
					e
				}
			}),
			s.MD5 = r._createHelper(l),
			s.HmacMD5 = r._createHmacHelper(l)
		} (Math),
		function() {
			var e, t = o,
			i = (e = t.lib).Base,
			a = e.WordArray,
			n = (e = t.algo).EvpKDF = i.extend({
				cfg: i.extend({
					keySize: 4,
					hasher: e.MD5,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e)
				},
				compute: function(e, t) {
					for (var i = (c = this.cfg).hasher.create(), n = a.create(), o = n.words, s = c.keySize, c = c.iterations; o.length < s;) {
						r && i.update(r);
						var r = i.update(e).finalize(t);
						i.reset();
						for (var l = 1; l < c; l++) r = i.finalize(r),
						i.reset();
						n.concat(r)
					}
					return n.sigBytes = 4 * s,
					n
				}
			});
			t.EvpKDF = function(e, t, i) {
				return n.create(i).compute(e, t)
			}
		} (),
		o.lib.Cipher ||
		function() {
			var e = (p = o).lib,
			t = e.Base,
			i = e.WordArray,
			a = e.BufferedBlockAlgorithm,
			n = p.enc.Base64,
			s = p.algo.EvpKDF,
			c = e.Cipher = a.extend({
				cfg: t.extend(),
				createEncryptor: function(e, t) {
					return this.create(this._ENC_XFORM_MODE, e, t)
				},
				createDecryptor: function(e, t) {
					return this.create(this._DEC_XFORM_MODE, e, t)
				},
				init: function(e, t, i) {
					this.cfg = this.cfg.extend(i),
					this._xformMode = e,
					this._key = t,
					this.reset()
				},
				reset: function() {
					a.reset.call(this),
					this._doReset()
				},
				process: function(e) {
					return this._append(e),
					this._process()
				},
				finalize: function(e) {
					return e && this._append(e),
					this._doFinalize()
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function(e) {
					return {
						encrypt: function(t, i, a) {
							return ("string" == typeof i ? m: u).encrypt(e, t, i, a)
						},
						decrypt: function(t, i, a) {
							return ("string" == typeof i ? m: u).decrypt(e, t, i, a)
						}
					}
				}
			});
			e.StreamCipher = c.extend({
				_doFinalize: function() {
					return this._process(!0)
				},
				blockSize: 1
			});
			var r = p.mode = {},
			l = function(e, t, i) {
				var a = this._iv;
				a ? this._iv = void 0 : a = this._prevBlock;
				for (var n = 0; n < i; n++) e[t + n] ^= a[n]
			},
			h = (e.BlockCipherMode = t.extend({
				createEncryptor: function(e, t) {
					return this.Encryptor.create(e, t)
				},
				createDecryptor: function(e, t) {
					return this.Decryptor.create(e, t)
				},
				init: function(e, t) {
					this._cipher = e,
					this._iv = t
				}
			})).extend();
			h.Encryptor = h.extend({
				processBlock: function(e, t) {
					var i = this._cipher,
					a = i.blockSize;
					l.call(this, e, t, a),
					i.encryptBlock(e, t),
					this._prevBlock = e.slice(t, t + a)
				}
			}),
			h.Decryptor = h.extend({
				processBlock: function(e, t) {
					var i = this._cipher,
					a = i.blockSize,
					n = e.slice(t, t + a);
					i.decryptBlock(e, t),
					l.call(this, e, t, a),
					this._prevBlock = n
				}
			}),
			r = r.CBC = h,
			h = (p.pad = {}).Pkcs7 = {
				pad: function(e, t) {
					for (var a, n = (a = (a = 4 * t) - e.sigBytes % a) << 24 | a << 16 | a << 8 | a, o = [], s = 0; s < a; s += 4) o.push(n);
					a = i.create(o, a),
					e.concat(a)
				},
				unpad: function(e) {
					e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
				}
			},
			e.BlockCipher = c.extend({
				cfg: c.cfg.extend({
					mode: r,
					padding: h
				}),
				reset: function() {
					c.reset.call(this);
					var e = (t = this.cfg).iv,
					t = t.mode;
					if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor;
					else i = t.createDecryptor,
					this._minBufferSize = 1;
					this._mode = i.call(t, this, e && e.words)
				},
				_doProcessBlock: function(e, t) {
					this._mode.processBlock(e, t)
				},
				_doFinalize: function() {
					var e = this.cfg.padding;
					if (this._xformMode == this._ENC_XFORM_MODE) {
						e.pad(this._data, this.blockSize);
						var t = this._process(!0)
					} else t = this._process(!0),
					e.unpad(t);
					return t
				},
				blockSize: 4
			});
			var d = e.CipherParams = t.extend({
				init: function(e) {
					this.mixIn(e)
				},
				toString: function(e) {
					return (e || this.formatter).stringify(this)
				}
			}),
			u = (r = (p.format = {}).OpenSSL = {
				stringify: function(e) {
					var t = e.ciphertext;
					return ((e = e.salt) ? i.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(n)
				},
				parse: function(e) {
					var t = (e = n.parse(e)).words;
					if (1398893684 == t[0] && 1701076831 == t[1]) {
						var a = i.create(t.slice(2, 4));
						t.splice(0, 4),
						e.sigBytes -= 16
					}
					return d.create({
						ciphertext: e,
						salt: a
					})
				}
			},
			e.SerializableCipher = t.extend({
				cfg: t.extend({
					format: r
				}),
				encrypt: function(e, t, i, a) {
					a = this.cfg.extend(a);
					var n = e.createEncryptor(i, a);
					return t = n.finalize(t),
					n = n.cfg,
					d.create({
						ciphertext: t,
						key: i,
						iv: n.iv,
						algorithm: e,
						mode: n.mode,
						padding: n.padding,
						blockSize: e.blockSize,
						formatter: a.format
					})
				},
				decrypt: function(e, t, i, a) {
					return a = this.cfg.extend(a),
					t = this._parse(t, a.format),
					e.createDecryptor(i, a).finalize(t.ciphertext)
				},
				_parse: function(e, t) {
					return "string" == typeof e ? t.parse(e, this) : e
				}
			})),
			p = (p.kdf = {}).OpenSSL = {
				execute: function(e, t, a, n) {
					return n || (n = i.random(8)),
					e = s.create({
						keySize: t + a
					}).compute(e, n),
					a = i.create(e.words.slice(t), 4 * a),
					e.sigBytes = 4 * t,
					d.create({
						key: e,
						iv: a,
						salt: n
					})
				}
			},
			m = e.PasswordBasedCipher = u.extend({
				cfg: u.cfg.extend({
					kdf: p
				}),
				encrypt: function(e, t, i, a) {
					return i = (a = this.cfg.extend(a)).kdf.execute(i, e.keySize, e.ivSize),
					a.iv = i.iv,
					(e = u.encrypt.call(this, e, t, i.key, a)).mixIn(i),
					e
				},
				decrypt: function(e, t, i, a) {
					return a = this.cfg.extend(a),
					t = this._parse(t, a.format),
					i = a.kdf.execute(i, e.keySize, e.ivSize, t.salt),
					a.iv = i.iv,
					u.decrypt.call(this, e, t, i.key, a)
				}
			})
		} (),
		function() {
			for (var e = o,
			t = e.lib.BlockCipher,
			i = e.algo,
			a = [], n = [], s = [], c = [], r = [], l = [], h = [], d = [], u = [], p = [], m = [], g = 0; 256 > g; g++) m[g] = 128 > g ? g << 1 : g << 1 ^ 283;
			var v = 0,
			f = 0;
			for (g = 0; 256 > g; g++) {
				var y = (y = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4) >>> 8 ^ 255 & y ^ 99;
				a[v] = y,
				n[y] = v;
				var S = m[v],
				b = m[S],
				w = m[b],
				I = 257 * m[y] ^ 16843008 * y;
				s[v] = I << 24 | I >>> 8,
				c[v] = I << 16 | I >>> 16,
				r[v] = I << 8 | I >>> 24,
				l[v] = I,
				I = 16843009 * w ^ 65537 * b ^ 257 * S ^ 16843008 * v,
				h[y] = I << 24 | I >>> 8,
				d[y] = I << 16 | I >>> 16,
				u[y] = I << 8 | I >>> 24,
				p[y] = I,
				v ? (v = S ^ m[m[m[w ^ S]]], f ^= m[m[f]]) : v = f = 1
			}
			var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
			i = i.AES = t.extend({
				_doReset: function() {
					for (var e = (i = this._key).words, t = i.sigBytes / 4, i = 4 * ((this._nRounds = t + 6) + 1), n = this._keySchedule = [], o = 0; o < i; o++) if (o < t) n[o] = e[o];
					else {
						var s = n[o - 1];
						o % t ? 6 < t && 4 == o % t && (s = a[s >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s]) : (s = a[(s = s << 8 | s >>> 24) >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s], s ^= C[o / t | 0] << 24),
						n[o] = n[o - t] ^ s
					}
					for (e = this._invKeySchedule = [], t = 0; t < i; t++) o = i - t,
					s = t % 4 ? n[o] : n[o - 4],
					e[t] = 4 > t || 4 >= o ? s: h[a[s >>> 24]] ^ d[a[s >>> 16 & 255]] ^ u[a[s >>> 8 & 255]] ^ p[a[255 & s]]
				},
				encryptBlock: function(e, t) {
					this._doCryptBlock(e, t, this._keySchedule, s, c, r, l, a)
				},
				decryptBlock: function(e, t) {
					var i = e[t + 1];
					e[t + 1] = e[t + 3],
					e[t + 3] = i,
					this._doCryptBlock(e, t, this._invKeySchedule, h, d, u, p, n),
					i = e[t + 1],
					e[t + 1] = e[t + 3],
					e[t + 3] = i
				},
				_doCryptBlock: function(e, t, i, a, n, o, s, c) {
					for (var r = this._nRounds,
					l = e[t] ^ i[0], h = e[t + 1] ^ i[1], d = e[t + 2] ^ i[2], u = e[t + 3] ^ i[3], p = 4, m = 1; m < r; m++) {
						var g = a[l >>> 24] ^ n[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & u] ^ i[p++],
						v = a[h >>> 24] ^ n[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & l] ^ i[p++],
						f = a[d >>> 24] ^ n[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & h] ^ i[p++];
						u = a[u >>> 24] ^ n[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & d] ^ i[p++],
						l = g,
						h = v,
						d = f
					}
					g = (c[l >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & u]) ^ i[p++],
					v = (c[h >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & l]) ^ i[p++],
					f = (c[d >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & h]) ^ i[p++],
					u = (c[u >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & d]) ^ i[p++],
					e[t] = g,
					e[t + 1] = v,
					e[t + 2] = f,
					e[t + 3] = u
				},
				keySize: 8
			}),
			e.AES = t._createHelper(i)
		} (),
		cc._RF.pop()
	},
	{}],
	DailyRewardController: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c79f2KRcA1AdapSb7pxiXb+", "DailyRewardController");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				days: [cc.Node]
			},
			onEnable: function() {
				for (var e = 0; e < this.days.length; e++) i.GameData.rewardDay > 5 && 4 == e ? this.days[e].getChildByName("bg").opacity = 255 : i.GameData.rewardDay != e + 1 || i.isClaimRewardDay() ? this.days[e].getChildByName("bg").opacity = 76 : this.days[e].getChildByName("bg").opacity = 255
			},
			claimDailyReward: function() {
				if (cc.find("HomeController").getComponent("HomeController").playClickSound(), i.GameData.claimRewardDay < i.GameData.rewardDay) {
					i.GameData.claimRewardDay = i.GameData.rewardDay,
					i.storeGameData("claimRewardDay", i.GameData.claimRewardDay);
					var e = i.getCoin();
					i.GameData.claimRewardDay > 5 ? e += 50 : e += 10 * parseInt(i.GameData.claimRewardDay),
					i.setCoin(e),
					cc.find("HomeController").getComponent("HomeController").lb_coin.getComponent(cc.Label).string = e.toString();
					var t = new Date;
					if (t.setHours(23, 59, 59, 999), i.GameData.lastRewardTime = t.getTime() + 86400, i.storeGameData("lastRewardTime", i.GameData.lastRewardTime), this.node.active = !1, i.isFbPlatform()) {
						var a = i.GameData.rewardDay + 1,
						n = new Date,
						o = 23 - n.getHours() + 10,
						s = 23 - n.getHours() + 23,
						c = new XMLHttpRequest;
						c.open("POST", "https://sustaining-aboard-khaan.glitch.me/logDailyReward", !0),
						c.setRequestHeader("Content-Type", "application/json"),
						c.send(JSON.stringify({
							playerId: FBInstant.player.getID(),
							hours: o,
							endHours: s,
							rewardDay: a > 5 ? 5 : a
						}))
					}
				} else this.node.active = !1
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	EndGameController: [function(e, t) {
		"use strict";
		cc._RF.push(t, "55e10JnsbNBH6eAX9QKGjOR", "EndGameController");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				songName: cc.Node,
				stars: cc.Node,
				starsActive: cc.Node,
				score: cc.Node,
				newRecord: cc.Node,
				bestScore: cc.Node,
				lbGold: cc.Node,
				btnReplay: cc.Node,
				btnHome: cc.Node,
				btnShare: cc.Node,
				unlockLevel: cc.Node,
				levelNumber: cc.Label,
				scorePanel: cc.Node,
				songs: cc.Node,
				songLists: cc.Node,
				nextSongItem: cc.Prefab
			},
			onLoad: function() {
				this.gameController = cc.find("GameControler").getComponent("game")
			},
			onEnable: function() {
				this.show()
			},
			show: function() {
				var e = this,
				t = i.getLastPlaySong(),
				a = i.getSongData(t.acm_id);
				if (this.scorePanel.y = -750, this.songName.active = !0, this.stars.active = !0, this.starsActive.active = !0, this.unlockLevel.active = !1, this.songName.getComponent(cc.Label).string = t.name, this.gameController.count_star > 0) this.stars.active = !0,
				this.starsActive.active = !0,
				this.starsActive.children[0].setScale(4),
				this.starsActive.children[0].opacity = 50,
				this.starsActive.children[1].setScale(4),
				this.starsActive.children[1].opacity = 50,
				this.starsActive.children[2].setScale(4),
				this.starsActive.children[2].opacity = 50,
				this.starsActive.children[0].active = !0,
				this.starsActive.children[1].active = !1,
				this.starsActive.children[2].active = !1,
				cc.tween(this.starsActive.children[0]).to(.5, {
					opacity: 255,
					scale: 1
				}).call(function() {
					e.node.getComponent(cc.AudioSource).play(),
					e.gameController.count_star > 1 && (e.starsActive.children[1].active = !0, cc.tween(e.starsActive.children[1]).to(.5, {
						opacity: 255,
						scale: 1
					}).call(function() {
						e.node.getComponent(cc.AudioSource).play(),
						e.gameController.count_star > 2 && (e.starsActive.children[2].active = !0, cc.tween(e.starsActive.children[2]).to(.5, {
							opacity: 255,
							scale: 1
						}).call(function() {
							e.node.getComponent(cc.AudioSource).play()
						}).start())
					}).start())
				}).start();
				else {
					this.starsActive.active = !1,
					this.stars.active = !0;
					for (var n = 0; n < this.stars.children.length; n++) this.stars.children[n].active = !0
				}
				if (this.score.getComponent(cc.Label).string = this.gameController.count_colider, a && a.score >= this.gameController.count_colider) {
					var o = i.isSupportLanguage() ? i.getI18n().t("endGame.bestScore") : "Best Score : ";
					this.bestScore.getComponent(cc.Label).string = o + a.score,
					this.bestScore.active = !0,
					this.newRecord.active = !1
				} else this.bestScore.active = !1,
				this.newRecord.active = !0;
				this.lbGold.getComponent(cc.Label).string = this.gameController.coin,
				this.node.active = !0;
				var s = i.getSongData(t.acm_id),
				c = s && s.score && s.score > this.gameController.count_colider ? s.score: this.gameController.count_colider,
				r = s && s.score && s.star > this.gameController.count_star ? s.star: this.gameController.count_star;
				i.setSongData(t.acm_id, {
					score: c,
					star: r
				});
				var l = parseInt(i.getScore() + this.gameController.count_colider);
				i.setScore(l);
				var h = parseInt(i.getCoin() + this.gameController.coin);
				i.setCoin(h),
				i.setLeaderBoardScore(l, h),
				this.songLists.removeAllChildren(!0);
				var d = this.gameController.getNextSongs();
				if (d.length) {
					for (var u = -100,
					p = 0; p < d.length; p++) {
						var m = d[p],
						g = cc.instantiate(this.nextSongItem);
						g.y = u,
						this.songLists.addChild(g),
						g.getComponent("NextSongItem").setData(m, d.data),
						u -= 210
					}
					1 == d.length ? this.songs.y = -220 : this.songs.y = -135,
					this.songs.active = !0
				} else this.songs.active = !1;
				i.isFbPlatform() && null != FBInstant.context.getID() && FBInstant.updateAsync({
					action: "CUSTOM",
					cta: "Play",
					image: "data:image/jpeg;base64,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",
					text: FBInstant.player.getName() + " just played DANCING ROAD for " + this.gameController.count_colider + " points. It's your turn!",
					template: "play_turn",
					strategy: "IMMEDIATE",
					notification: "NO_PUSH"
				}).then(function() {
					console.log("Message was sent successfully")
				})
			},
			gotoHome: function() {
				this.gameController.playClickSound(),
				this.gameController.node_loading.active = !0,
				this.gameController.node_loading.opacity = 255,
				this.scheduleOnce(function() {
					cc.director.loadScene("Home")
				},
				.2)
			},
			replayGame: function() {
				this.gameController.playClickSound(),
				this.gameController.resetRound(),
				this.node.active = !1
			},
			shareGame: function(e) {
				this.gameController.playClickSound(),
				i.isFbPlatform() ? i.shareGame(function() {
					window.shareGame = !0
				}) : "function" == typeof e && (window.shareGame = !0, e())
			},
			playWithFriend: function() {
				this.gameController.playClickSound(),
				i.isFbPlatform() && FBInstant.context.chooseAsync().then(function() {
					console.log("chooseContext", FBInstant.context.getID()),
					FBInstant.context.switchAsync(FBInstant.context.getID()).then(function() {
						console.log("switchcontext", FBInstant.context.getID())
					})
				})
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	GameLanguage: [function(e, t) {
		"use strict";
		cc._RF.push(t, "aa72bu/mCZO0q1ufaDzPKBa", "GameLanguage");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				loading_tut1: cc.Label,
				loading_tut2: cc.Label,
				loading_tut3: cc.Label,
				loading_wait: cc.Label,
				loading_slowConnect: cc.Label,
				loading_slowConnectDesc: cc.Label,
				tip: cc.Label,
				tptip_title: cc.Label,
				tptip_desc: cc.Label,
				ctn_second_chance: cc.Label,
				ctn_gold_lb: cc.Label,
				ctn_share_lb: cc.Label,
				ctn_nothanks: cc.Label,
				end_new_record: cc.Label,
				end_invite_friends: cc.Label,
				end_ull_title: cc.Label,
				end_ull_desc: cc.Label,
				end_new_songs_title: cc.Label,
				tutorial_tut1: cc.Label,
				tutorial_tut2: cc.Label,
				tutorial_tut3: cc.Label,
				tutorial_go: cc.Label
			},
			setupLanguage: function() {
				if (i.isSupportLanguage()) {
					var e = i.getI18n();
					this.loading_tut1.string = e.t("loading.tut1"),
					this.loading_tut2.string = e.t("loading.tut2"),
					this.loading_tut3.string = e.t("loading.tut3"),
					this.loading_wait.string = e.t("loading.wait"),
					this.tip.string = e.t("game.tip"),
					this.loading_slowConnect.string = e.t("loading.slowConnect"),
					this.loading_slowConnectDesc.string = e.t("loading.slowConnectDesc"),
					this.tptip_title.string = e.t("game.tryPlayTile"),
					this.tptip_desc.string = e.t("game.tryPlayDesc"),
					this.ctn_second_chance.string = e.t("continue.secondChance"),
					this.ctn_gold_lb.string = e.t("continue.tile"),
					this.ctn_share_lb.string = e.t("continue.tile"),
					this.ctn_nothanks.string = e.t("continue.noThanks"),
					this.end_new_record.string = e.t("endGame.newHightScore"),
					this.end_invite_friends.string = e.t("endGame.inviteFriends"),
					this.end_ull_title.string = e.t("endGame.unlockLevelTile"),
					this.end_ull_desc.string = e.t("endGame.unlockLevelDesc"),
					this.end_new_songs_title.string = e.t("endGame.unlockNewSongs"),
					this.tutorial_tut1.string = e.t("loading.tut1"),
					this.tutorial_tut2.string = e.t("loading.tut2"),
					this.tutorial_tut3.string = e.t("loading.tut4"),
					this.tutorial_go.string = e.t("loading.go")
				}
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	GoldEffect: [function(e, t) {
		"use strict";
		cc._RF.push(t, "4f09akFNqFE8YpS+foweLeR", "GoldEffect"),
		cc.Class({
			extends: cc.Component,
			properties: {
				toPos: cc.Node,
				seeds: 5
			},
			start: function() {
				if (this.total = 2 * this.seeds, this.startIndex = 0, this.seeds > 1) for (var e = 1; e < this.total; e++) cc.instantiate(this.node.children[0]).parent = this.node
			},
			playEffect: function(e, t) {
				var i = this;
				if (!this.toPosition) {
					var a = this.toPos.parent.convertToWorldSpaceAR(this.toPos.getPosition());
					this.toPosition = this.node.convertToNodeSpaceAR(a),
					this.pos2 = this.toPosition,
					this.pos1 = this.pos2.clone(),
					this.pos0 = cc.v2( - 150, 300),
					this.pos1.y = this.pos0.y - 100,
					this.pos1.x = this.pos2.x + 50
				}
				var n = 0;
				this.startIndex == this.seeds ? this.startIndex = 0 : this.startIndex = this.seeds,
				this.toIndex = this.startIndex + this.seeds;
				for (var o = function(e) {
					i.node.children[e].setPosition(i.pos0.clone()),
					i.node.children[e].setScale(1),
					i.scheduleOnce(function() {
						i.node.children[e].active = !0,
						cc.tween(i.node.children[e]).to(.35, {
							position: {
								value: i.toPosition.clone(),
								progress: function(e, t, a, n) {
									var o = e.lerp(t, n, a);
									return o.x = Math.pow(1 - n * n, 2) * i.pos0.x + 2 * (1 - n) * n * i.pos1.x + n * n * i.pos2.x,
									o
								}
							},
							scale: 1.7,
							opacity: 255
						}).call(function() {
							i.node.children[e].active = !1
						}).start(),
						e == i.toIndex - 1 && t()
					},
					n),
					n += .1
				},
				s = this.startIndex; s < this.toIndex; s++) o(s)
			}
		}),
		cc._RF.pop()
	},
	{}],
	Helper: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2264dt7mbJJdJjFUQxMQ9Rl", "Helper"),
		i.__esModule = !0,
		i.Helper = void 0;
		var a = e("./SongLists"),
		n = {
			API_URL: "https://sustaining-aboard-khaan.glitch.me/",
			isFbPlatform: function() {
				return "undefined" != typeof FBInstant
			},
			currentScene: null,
			_getGameData: !1,
			GameData: {
				score: 0,
				coin: 30,
				playTutorial: !1,
				lastPlaySong: null,
				theme: null,
				songListsCountry: "EN",
				playedSongs: [],
				songsData: {},
				createShortcut: !1,
				lastRewardTime: 0,
				rewardDay: 0,
				claimRewardDay: 0,
				showPopupTutorial: !1,
				showPopupTryPlay: !1,
				unlockBallIDs: [],
				unlockRoadIDs: [],
				ballID: -1,
				roadID: 1
			},
			storeGameData: function(e, t) {
				if (n.isFbPlatform()) {
					var i = {};
					i[e] = t,
					FBInstant.player.setDataAsync(i)
				} else localStorage.setItem("GameData", JSON.stringify(n.GameData))
			},
			getGameData: function(e) {
				if (n.isFbPlatform()) {
					var t = [];
					for (var i in n.GameData) n.GameData.hasOwnProperty(i) && t.push(i);
					FBInstant.player.getDataAsync(t).then(function(i) {
						if (Object.keys(i).length > 0 && i.constructor === Object) for (var a in i) i.hasOwnProperty(a) && (t.push(a), n.GameData[a] = i[a]);
						n.GameData.coin = parseInt(n.GameData.coin),
						n._getGameData = !0,
						n.setupLanguage(FBInstant.getLocale()),
						e(i)
					})
				} else {
					var a = localStorage.getItem("GameData");
					if ((a = a ? JSON.parse(a) : {}) && Object.keys(a).length > 0 && a.constructor === Object) for (var o in a) a.hasOwnProperty(o) && (n.GameData[o] = a[o]);
					n.GameData.coin = 30,
					n._getGameData = !0,
					n.setupLanguage("vi_VN"),
					e(a)
				}
			},
			getTheme: function() {
				return n.GameData.theme
			},
			setTheme: function(e) {
				n.GameData.theme = e,
				n.storeGameData("theme", e)
			},
			countOpenedSongs: function() {
				return n.GameData.playedSongs ? n.GameData.playedSongs.length: 0
			},
			addPlayedSongs: function(e) {
				n.GameData.playedSongs || (n.GameData.playedSongs = []),
				n.countOpenedSongs() < 6 && -1 == n.GameData.playedSongs.indexOf(e) && (n.GameData.playedSongs.push(e), n.storeGameData("playedSongs", n.GameData.playedSongs))
			},
			isPlayedSong: function(e) {
				return n.GameData.playedSongs && n.GameData.playedSongs.indexOf(e) > -1
			},
			getCurrentLevel: function() {
				if (n.GameData.playedSongs) {
					var e = n.GameData.playedSongs.length + 1;
					return e > 5 ? 5 : e
				}
				return 1
			},
			getLastPlaySong: function() {
				if (n.GameData.lastPlaySong) {
					for (var e = 0; e < a.SongLists.length; e++) if (a.SongLists[e].acm_id === n.GameData.lastPlaySong) return a.SongLists[e];
					return a.SongLists[0]
				}
				return a.SongLists[0]
			},
			setLastPlaySong: function(e) {
				n.GameData.lastPlaySong = e.acm_id,
				n.storeGameData("lastPlaySong", e.acm_id)
			},
			getBallID: function() {
				return n.GameData.ballID
			},
			setBallID: function(e) {
				n.GameData.ballID = e,
				n.storeGameData("ballID", e)
			},
			getUnlockBallIDs: function() {
				return n.GameData.unlockBallIDs ? n.GameData.unlockBallIDs: []
			},
			setUnlockBallID: function(e) {
				var t = n.getUnlockBallIDs(); - 1 == t.indexOf(e) && (t.push(e), n.storeGameData("unlockBallIDs", t))
			},
			isUnlockBallID: function(e) {
				return n.getUnlockBallIDs().indexOf(e) > -1
			},
			getRoadID: function() {
				return n.GameData.roadID
			},
			setRoadID: function(e) {
				n.GameData.roadID = e,
				n.storeGameData("roadID", e)
			},
			getUnlockRoadIDs: function() {
				return n.GameData.unlockRoadIDs ? n.GameData.unlockRoadIDs: []
			},
			setUnlockRoadID: function(e) {
				var t = n.getUnlockRoadIDs(); - 1 == t.indexOf(e) && (t.push(e), n.storeGameData("unlockRoadIDs", t))
			},
			isUnlockRoadID: function(e) {
				return n.getUnlockRoadIDs().indexOf(e) > -1
			},
			getSongListsCountry: function() {
				return n.GameData.songListsCountry
			},
			setSongListsCountry: function(e) {
				n.GameData.songListsCountry = e,
				n.storeGameData("songListsCountry", e)
			},
			getCoin: function() {
				return parseInt(n.GameData.coin)
			},
			setCoin: function(e) {
				n.GameData.coin = e,
				n.storeGameData("coin", e)
			},
			getScore: function() {
				return n.GameData.score
			},
			setScore: function(e) {
				n.GameData.score = e,
				n.storeGameData("score", e)
			},
			getSongData: function(e) {
				return n.GameData.songsData && n.GameData.songsData[e] ? n.GameData.songsData[e] : null
			},
			setSongData: function(e, t) {
				n.GameData.songsData || (n.GameData.songsData = {}),
				n.GameData.songsData[e] = t,
				n.storeGameData("songsData", n.GameData.songsData)
			},
			setLeaderBoardScore: function(e, t) {
				if (n.isFbPlatform()) if (FBInstant.context.getID()) {
					var i = FBInstant.context.getID();
					FBInstant.getLeaderboardAsync("test." + i).then(function(t) {
						return t.setScoreAsync(e),
						t
					}).
					catch(function(e) {
						console.log(e)
					})
				} else firebase.firestore().doc("leaderboard/" + FBInstant.player.getID()).set({
					name: FBInstant.player.getName(),
					score: e,
					coin: t,
					photo: FBInstant.player.getPhoto()
				}).then(function() {}).
				catch(function() {})
			},
			setPlayTutorial: function() {
				n.GameData.playTutorial = !0,
				n.storeGameData("playTutorial", n.GameData.playTutorial)
			},
			logEventGameLevel: function() {
				n.isFbPlatform() && (window.gameLevel || (window.gameLevel = 0), window.gameLevel++)
			},
			setCreatedShortcut: function() {
				n.GameData.createShortcut = !0,
				n.storeGameData("createShortcut", 1)
			},
			setlastRewardTimeAndRewardDay: function() {
				if (n.GameData.lastRewardTime && n.GameData.lastRewardTime > 0) {
					var e = new Date,
					t = new Date;
					t.setHours(0, 0, 0, 0);
					var i = new Date;
					if (i.setHours(23, 59, 59, 999), n.GameData.lastRewardTime > t.getTime() && n.GameData.lastRewardTime <= i.getTime()) n.GameData.claimRewardDay == n.GameData.rewardDay && (n.GameData.lastRewardTime = i.getTime() + 86400, n.storeGameData("lastRewardTime", n.GameData.lastRewardTime), n.GameData.rewardDay = n.GameData.rewardDay + 1, n.storeGameData("rewardDay", n.GameData.rewardDay));
					else if (e.getTime() > n.GameData.lastRewardTime) {
						n.GameData.lastRewardTime = i.getTime() + 86400,
						n.GameData.rewardDay = 0,
						n.GameData.claimRewardDay = 0,
						n.storeGameData("lastRewardTime", n.GameData.lastRewardTime),
						n.storeGameData("rewardDay", 0),
						n.storeGameData("claimRewardDay", 0);
						var a = new Date,
						o = 23 - a.getHours() + 10,
						s = 23 - a.getHours() + 23;
						if (n.isFbPlatform()) {
							var c = new XMLHttpRequest;
							c.open("POST", "https://sustaining-aboard-khaan.glitch.me/logDailyReward", !0),
							c.setRequestHeader("Content-Type", "application/json"),
							c.send(JSON.stringify({
								playerId: FBInstant.player.getID(),
								hours: o,
								endHours: s,
								rewardDay: 1
							}))
						}
					}
				} else {
					var r = new Date;
					r.setHours(23, 59, 59, 999),
					n.GameData.lastRewardTime = r.getTime() + 86400,
					n.storeGameData("lastRewardTime", n.GameData.lastRewardTime)
				}
			},
			isClaimRewardDay: function() {
				return n.GameData.claimRewardDay == n.GameData.rewardDay
			},
			shareGame: function(e) {
				FBInstant.shareAsync({
					intent: "SHARE",
					image: "data:image/webp;base64,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",
					text: "Follow the exciting notes!"
				}).then(function() {
					"function" == typeof e && e()
				})
			},
			_i18n: null,
			language: "en_US",
			supportLanguages: ["vi_VN", "es_ES", "pt_PT", "fr_FR", "de_DE", "id_ID", "it_IT", "tr_TR", "es_MX", "pt_BR", "ms_MY"],
			exactLanguages: [],
			isSupportLanguage: function() {
				return n.supportLanguages.indexOf(n.language) > -1
			},
			setupLanguage: function(t) {
				var i;
				void 0 === t && (t = "en_US"),
				n.supportLanguages.indexOf(t) > -1 && (n.language = t, n._i18n = e("LanguageData"), i = n.exactLanguages.indexOf(t) > -1 ? t: t.split("_")[0], n._i18n.init(i))
			},
			getI18n: function() {
				return n._i18n
			},
			getFBProducts: function(e) {
				n.isFbPlatform && !window.coinProductIDs && (window.coinProductIDs = [], FBInstant.payments.getCatalogAsync().then(function(t) {
					console.log(t);
					for (var i = 0; i < t.length; i++) window.coinProductIDs.push({
						productID: t[i].productID,
						coin: parseInt(t[i].description),
						price: t[i].price,
						icon: 0 == i ? "x2": "x3"
					});
					e && e()
				}).
				catch(function() {}))
			},
			sortBundleSprites: function(e, t) {
				for (var i = [], a = e.length / 2, n = function(a) {
					var n = "ball_" + t + "_" + a + "_f";
					i.push(e.find(function(e) {
						return e.name == n
					}));
					var o = "ball_" + t + "_" + a + "_l";
					i.push(e.find(function(e) {
						return e.name == o
					}))
				},
				o = 0; o < a; o++) n(o);
				return i
			},
			sortBundleMaterials: function(e, t) {
				for (var i = [], a = function(a) {
					var n = "BallMaterial" + t + "_" + a;
					i.push(e.find(function(e) {
						return e.name == n
					}))
				},
				n = 1; n <= e.length; n++) a(n);
				return i
			}
		};
		i.Helper = n,
		cc._RF.pop()
	},
	{
		"./SongLists": "SongLists",
		LanguageData: "LanguageData"
	}],
	HomeController: [function(e, t) {
		"use strict";
		cc._RF.push(t, "41c83rWIZJEcKRfnLiL0kx7", "HomeController");
		var i = e("./SongLists").SongLists,
		a = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				songListsScroll: cc.Node,
				item: cc.Prefab,
				songLists: cc.Node,
				content: cc.Node,
				view: cc.Node,
				loading: cc.Node,
				lastSongName: cc.Node,
				filterSprite: [cc.SpriteFrame],
				filterNode: [cc.Node],
				notificationPanel: cc.Node,
				notificationMsg: cc.Node,
				avatar: cc.Node,
				lb_coin: cc.Node,
				leaderBoard: cc.Node,
				safeArea: cc.Node,
				dailyReward: cc.Node,
				level: cc.Label,
				videoNotAvailable: cc.Node,
				videoLoading: cc.Node,
				shopPanel: cc.Node,
				buyCoinPopup: cc.Node,
				moreGamesPanel: cc.Node,
				bottomBtn: [cc.Node],
				buySound: cc.Node
			},
			start: function() {
				var e = this;
				a.currentScene = "Home",
				a._getGameData ? this.startLoad() : a.getGameData(function() {
					e.startLoad()
				})
			},
			startLoad: function() {
				var e = this;
				if (this.node.getComponent("HomeLanguage").setupLanguage(), a.isFbPlatform()) {
					var t = FBInstant.player.getPhoto();
					cc.assetManager.loadRemote(t, {
						type: "jpg"
					},
					function(t, i) {
						e.avatar && (e.avatar.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i))
					})
				} else cc.assetManager.loadRemote("https://gdata.inwavethemes.com/assets/dailyreward.png", {
					type: "jpg"
				},
				function(t, i) {
					e.avatar && (e.avatar.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i))
				});
				if (this.lb_coin.getComponent(cc.Label).string = a.getCoin().toString(), this.lastSongName.getComponent(cc.Label).string = a.getLastPlaySong().name, this.initSongLists(), this.level.string = "LV" + a.getCurrentLevel(), window._entryPointData = null, a.setlastRewardTimeAndRewardDay(), a.isClaimRewardDay() ? this.dailyReward.active = !1 : this.dailyReward.active = !0, a.isFbPlatform() && (a.GameData.createShortcut || FBInstant.canCreateShortcutAsync().then(function(e) {
					e && FBInstant.createShortcutAsync().then(function() {
						a.setCreatedShortcut()
					}).
					catch(function() {})
				})), a.isFbPlatform()) {
					var i = FBInstant.getSupportedAPIs().includes("payments.getCatalogAsync");
					console.log("canMakePurchases", i),
					i && a.getFBProducts(null)
				}
				Ads.isSupport() && Ads.preloadRewarded()
			},
			initSongLists: function() {
				var e = a.getSongListsCountry();
				"EN" === e ? (this.filterNode[0].getComponent(cc.Sprite).spriteFrame = this.filterSprite[0], this.filterNode[1].getComponent(cc.Sprite).spriteFrame = this.filterSprite[1]) : (this.filterNode[0].getComponent(cc.Sprite).spriteFrame = this.filterSprite[1], this.filterNode[1].getComponent(cc.Sprite).spriteFrame = this.filterSprite[0]),
				this.scrollView = this.songListsScroll.getComponent(cc.ScrollView),
				this.songItems = [],
				this.getSongLists(e);
				var t = 0;
				this.viewItems = 0;
				for (var i = 0; i < this.songItems.length; i++)(t += 300) <= this.view.height ? (this.songItems[i].opacity = 255, this.viewItems++) : this.songItems[i].opacity = 0;
				this.centerItem = Math.floor(this.viewItems / 2),
				this.halfItem = Math.ceil(this.viewItems / 2)
			},
			onScroll: function() {
				for (var e = this.content.y - 1400,
				t = Math.floor(e / 300), i = this.centerItem + t, a = 0; a < this.songItems.length; a++) a >= i - this.halfItem - 1 && a <= i + this.halfItem + 1 ? this.songItems[a].opacity = 255 : this.songItems[a].opacity = 0
			},
			getSongLists: function(e) {
				e || (e = "EN");
				var t = -100,
				n = -1,
				o = 1e3;
				if (this.songItems.length) for (var s = 0; s < this.songItems.length; s++) this.songItems[s].active = !1;
				for (var c = 0; c < i.length; c++) if (i[c].country === e) {
					n++,
					o += 300;
					var r = void 0;
					this.songItems[n] ? r = this.songItems[n] : (r = cc.instantiate(this.item), this.songItems.push(r), this.songLists.addChild(r)),
					r.active = !0,
					r.y = t,
					t -= 300;
					var l = r.getComponent("SongItem"),
					h = i[c],
					d = a.getSongData(h.acm_id);
					h.id = c,
					l.setData(n, h, d)
				}
				this.content.height = o
			},
			showSongListsVN: function() {
				this.playClickSound(),
				this.filterNode[0].getComponent(cc.Sprite).spriteFrame = this.filterSprite[1],
				this.filterNode[1].getComponent(cc.Sprite).spriteFrame = this.filterSprite[0],
				this.getSongLists("VN"),
				a.setSongListsCountry("VN")
			},
			showSongListsEN: function() {
				this.playClickSound(),
				this.filterNode[0].getComponent(cc.Sprite).spriteFrame = this.filterSprite[0],
				this.filterNode[1].getComponent(cc.Sprite).spriteFrame = this.filterSprite[1],
				this.getSongLists("EN"),
				a.setSongListsCountry("EN")
			},
			playLastSong: function() {
				this.playClickSound(),
				this.loading.active = !0,
				cc.director.loadScene("GamePlay")
			},
			openNotification: function(e) {
				this.safeArea.active = !1,
				e && (this.notificationMsg.getComponent(cc.Label).string = e),
				this.notificationPanel.active = !0
			},
			closeNotification: function() {
				this.playClickSound(),
				this.safeArea.active = !0,
				this.notificationPanel.active = !1
			},
			showLeaderBoard: function() {
				this.playClickSound(),
				this.leaderBoard.getComponent("LeaderBoard").leaderBoardId = null,
				this.leaderBoard.active = !0,
				this.songListsScroll.active = !1
			},
			playWithFriend: function() {
				this.playClickSound(),
				a.isFbPlatform() && FBInstant.context.chooseAsync().then(function() {
					FBInstant.context.switchAsync(FBInstant.context.getID()).then(function() {})
				})
			},
			playClickSound: function() {
				this.node.getComponent(cc.AudioSource).play()
			},
			playBuySound: function() {
				this.buySound.getComponent(cc.AudioSource).play()
			},
			showVideoNotAvailable: function(e) {
				void 0 === e && (e = null),
				this._closeNotAvailableCB = e,
				this.videoNotAvailable.active = !0
			},
			closeVideoNotAvailable: function() {
				this.playClickSound(),
				this.videoNotAvailable.active = !1,
				this._closeNotAvailableCB && (this._closeNotAvailableCB(), this._closeNotAvailableCB = null)
			},
			showBuyCoinPopup: function() {
				// this.playClickSound(),
				// this.buyCoinPopup.active = !0
			},
			closeBuyCoinPopup: function() {
				this.playClickSound(),
				this.buyCoinPopup.active = !1
			},
			onHomeTab: function() {
				this.playClickSound(),
				this.shopPanel.active = !1,
				this.songListsScroll.active = !0,
				this.bottomBtn[0].children[0].active = !0,
				this.bottomBtn[1].children[0].active = !1
			},
			onMoreGamesTab: function() {
				this.playClickSound(),
				this.moreGamesPanel.active ? this.moreGamesPanel.active = !1 : this.moreGamesPanel.active = !0
			},
			onShopTab: function() {
				this.playClickSound(),
				this.shopPanel.active = !0,
				this.bottomBtn[0].children[0].active = !1,
				this.bottomBtn[1].children[0].active = !0,
				this.songListsScroll.active = !1
			},
			switchGame: function() {
				this.playClickSound(),
				a.isFbPlatform() && FBInstant.switchGameAsync("599363810678199").
				catch(function() {})
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper",
		"./SongLists": "SongLists"
	}],
	HomeLanguage: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f9e13Q6pt1Js7SavpmyYHGn", "HomeLanguage");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				loading_tut1: cc.Label,
				loading_tut2: cc.Label,
				loading_tut3: cc.Label,
				loading_wait: cc.Label,
				lead_title: cc.Label,
				lead_global: cc.Label,
				lead_friend: cc.Label,
				daily_title: cc.Label,
				daily_desc: cc.Label,
				daily_day1: cc.Label,
				daily_day2: cc.Label,
				daily_day3: cc.Label,
				daily_day4: cc.Label,
				daily_day5: cc.Label,
				daily_claim: cc.Label,
				noti_title: cc.Label,
				noti_msg: cc.Label
			},
			setupLanguage: function() {
				if (i.isSupportLanguage()) {
					var e = i.getI18n();
					this.loading_tut1.string = e.t("loading.tut1"),
					this.loading_tut2.string = e.t("loading.tut2"),
					this.loading_tut3.string = e.t("loading.tut3"),
					this.loading_wait.string = e.t("loading.wait"),
					this.lead_title.string = e.t("lead.title"),
					this.lead_global.string = e.t("lead.global"),
					this.lead_friend.string = e.t("lead.friend"),
					this.daily_title.string = e.t("daily.title"),
					this.daily_desc.string = e.t("daily.desc"),
					this.daily_day1.string = e.t("daily.day1"),
					this.daily_day2.string = e.t("daily.day2"),
					this.daily_day3.string = e.t("daily.day3"),
					this.daily_day4.string = e.t("daily.day4"),
					this.daily_day5.string = e.t("daily.day5"),
					this.daily_claim.string = e.t("daily.claim"),
					this.noti_title.string = e.t("noti.title"),
					this.noti_msg.string = e.t("noti.notEnoughCoin")
				}
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	LanguageData: [function(e, t) {
		"use strict";
		cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
		var i = e("polyglot.min"),
		a = null;
		function n(e) {
			return window.i18n.languages[e]
		}
		function o(e) {
			e && (a ? a.replace(e) : a = new i({
				phrases: e,
				allowMissing: !0
			}))
		}
		window.i18n || (window.i18n = {
			languages: {},
			curLang: ""
		}),
		t.exports = {
			init: function(e) {
				if (e !== window.i18n.curLang) {
					var t = n(e) || {};
					window.i18n.curLang = e,
					o(t),
					this.inst = a
				}
			},
			t: function(e, t) {
				if (a) return a.t(e, t)
			},
			inst: a,
			updateSceneRenderers: function() {
				for (var e = cc.director.getScene().children, t = [], i = 0; i < e.length; ++i) {
					var a = e[i].getComponentsInChildren("LocalizedLabel");
					Array.prototype.push.apply(t, a)
				}
				for (var n = 0; n < t.length; ++n) {
					var o = t[n];
					o.node.active && o.updateLabel()
				}
				for (var s = [], c = 0; c < e.length; ++c) {
					var r = e[c].getComponentsInChildren("LocalizedSprite");
					Array.prototype.push.apply(s, r)
				}
				for (var l = 0; l < s.length; ++l) {
					var h = s[l];
					h.node.active && h.updateSprite(window.i18n.curLang)
				}
			}
		},
		cc._RF.pop()
	},
	{
		"polyglot.min": "polyglot.min"
	}],
	LeaderBoardItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "38397ZXhXtIl4fHIBg3u9oZ", "LeaderBoardItem"),
		cc.Class({
			extends: cc.Component,
			properties: {
				id: cc.Node,
				icon: cc.Node,
				userName: cc.Label,
				score: cc.Label,
				avatar: cc.Sprite
			},
			setData: function(e, t) {
				var i = this;
				if (this.id.getComponent(cc.Label).string = t.rank, e <= 2) {
					var a = this.icon.getComponent(cc.Sprite);
					0 == e ? (this.icon.active = !0, this.id.active = !1) : 1 == e ? (this.icon.active = !1, this.id.active = !0, cc.loader.loadRes("textures/medal_silver", cc.SpriteFrame,
					function(e, t) {
						a.spriteFrame = t,
						i.icon.active = !0,
						i.id.active = !1
					})) : 2 == e && (this.icon.active = !1, this.id.active = !0, cc.loader.loadRes("textures/medal_bronze", cc.SpriteFrame,
					function(e, t) {
						a.spriteFrame = t,
						i.icon.active = !0,
						i.id.active = !1
					}))
				} else this.icon.active = !1,
				this.id.active = !0;
				this.userName.string = t.name,
				this.score.string = "Score : " + t.score.toString(),
				t.photo && "" != t.photo && cc.assetManager.loadRemote(t.photo, {
					type: "png"
				},
				function(e, t) {
					i.avatar && (i.avatar.spriteFrame = new cc.SpriteFrame(t))
				})
			}
		}),
		cc._RF.pop()
	},
	{}],
	LeaderBoard: [function(e, t) {
		"use strict";
		cc._RF.push(t, "bd21er5L/ZCjqn3kbZ88Mnd", "LeaderBoard");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				loading: cc.Node,
				prefab_item: cc.Prefab,
				content: cc.Node,
				lb_me_score: cc.Label,
				filterSprite: [cc.SpriteFrame],
				filterNode: [cc.Sprite],
				safeArea: cc.Node
			},
			onLoad: function() {
				this.mainLeaderBoard = null,
				this.listMode = !0,
				this.lists = []
			},
			start: function() {
				this.youScoreStr = i.isSupportLanguage() ? i.getI18n().t("lead.yourscore") : "Your score : ",
				this.lb_me_score.string = this.youScoreStr + "0"
			},
			onEnable: function() {
				this.initData(),
				this.safeArea.active = !1
			},
			onDisable: function() {
				this.safeArea.active = !0
			},
			onClose: function() {
				var e = cc.find("HomeController").getComponent("HomeController");
				e.playClickSound(),
				e.songListsScroll.active = !0,
				this.node.active = !1
			},
			onShowGlobal: function() {
				cc.find("HomeController").getComponent("HomeController").playClickSound(),
				this.listMode = !0,
				this.filterNode[0].spriteFrame = this.filterSprite[0],
				this.filterNode[1].spriteFrame = this.filterSprite[1],
				this.initData()
			},
			onShowFriend: function() {
				cc.find("HomeController").getComponent("HomeController").playClickSound(),
				this.listMode = !1,
				this.filterNode[1].spriteFrame = this.filterSprite[0],
				this.filterNode[0].spriteFrame = this.filterSprite[1],
				this.initData()
			},
			initData: function() {
				var e = this;
				if (this.loading.active = !0, this.lists.length) for (var t = 0; t < this.lists.length; t++) this.lists[t].active = !1;
				if (i.isFbPlatform()) FBInstant.context.getID() ? FBInstant.getLeaderboardAsync("test." + FBInstant.context.getID()).then(function(t) {
					return e.mainLeaderBoard = t,
					e.mainLeaderBoard.getPlayerEntryAsync().then(function(t) {
						e.meData = {
							ID: t.getPlayer().getID(),
							name: t.getPlayer().getName(),
							photo: t.getPlayer().getPhoto(),
							score: t.getScore(),
							rank: t.getRank()
						}
					}),
					e.getListsData(),
					t
				}).then(function() {}).
				catch(function() {
					e.loading.active = !1,
					console.log('Leaderboard "All Friends" not found in app configuration')
				}) : (this.meData = {
					ID: FBInstant.player.getID(),
					name: FBInstant.player.getName(),
					photo: FBInstant.player.getPhoto(),
					score: i.getScore(),
					rank: 999
				},
				this.getListsData());
				else {
					var a = "https://scontent.fhan3-3.fna.fbcdn.net/v/t31.0-8/13147396_1030369587033985_7022880504160511385_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=bWlwOBn0W8oAX95Wbd8&_nc_ht=scontent.fhan3-3.fna&oh=12638ca861b243578f90595a4b9a61e2&oe=5F55E36C";
					this.meData = {
						ID: 100,
						name: "Current player",
						score: 100,
						rank: 1e4,
						photo: a
					},
					this.listsData = [{
						ID: 1,
						name: "Hoa Nguyen",
						rank: 1,
						score: 1e5,
						photo: a
					},
					{
						ID: 2,
						name: "NGuyen khac tiep",
						rank: 2,
						score: 1e5,
						photo: a
					}],
					this.scheduleOnce(function() {
						e.initLists()
					},
					2)
				}
			},
			initMe: function() {
				this.lb_me_score.string = this.youScoreStr + this.meData.score
			},
			getListsData: function() {
				var e = this;
				if (this.leaderBoardId) {
					var t = new XMLHttpRequest;
					t.responseType = "json",
					t.open("GET", "https://sustaining-aboard-khaan.glitch.me/leaderboard/" + this.leaderBoardId, !0),
					t.onload = function() {
						var i = t.response;
						if (e.listsData = [], i.length) {
							var a = 0;
							i.forEach(function(t) {
								a++;
								var i = {
									ID: t.pid,
									name: t.name,
									photo: t.photo,
									score: t.score,
									rank: a
								};
								e.listsData.push(i)
							}),
							e.initLists()
						}
					},
					t.send()
				} else if (i.isFbPlatform() && FBInstant.context.getID()) this.mainLeaderBoard.getEntriesAsync().then(function(t) {
					console.log(t);
					for (var i = [], a = 0; a < t.length; a++) {
						var n = {
							ID: t[a].getPlayer().getID(),
							name: t[a].getPlayer().getName(),
							photo: t[a].getPlayer().getPhoto(),
							score: t[a].getScore(),
							rank: t[a].getRank()
						};
						i.push(n)
					}
					e.listsData = i,
					e.initLists()
				});
				else if (window.leaderBoardItems) this.listsData = window.leaderBoardItems,
				this.initLists();
				else {
					var a = 0,
					n = !1;
					firebase.firestore().collection("leaderboard").orderBy("score", "desc").limit(10).get().then(function(t) {
						e.listsData = [],
						t.forEach(function(t) {
							a++;
							var i = t.data();
							e.meData.ID == t.id && (n = !0);
							var o = {
								ID: t.id,
								name: i.name,
								photo: i.photo,
								score: i.score,
								rank: a
							};
							e.listsData.push(o)
						}),
						n || e.listsData.push(e.meData),
						window.leaderBoardItems = e.listsData,
						e.initLists()
					}).
					catch(function(e) {
						console.log("Error getting documents: ", e)
					})
				}
			},
			initLists: function() {
				for (var e, t = -100,
				i = 0,
				a = 0; a < this.listsData.length; a++) this.lists[a] ? e = this.lists[a] : (e = cc.instantiate(this.prefab_item), this.lists.push(e), this.content.addChild(e)),
				e.y = t,
				e.active = !0,
				t -= 250,
				i += 250,
				e.getComponent("LeaderBoardItem").setData(a, this.listsData[a]);
				i += 250,
				this.content.height = i,
				this.loading.active = !1
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	LocalizedLabel: [function(e, t) {
		"use strict";
		cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
		var i = e("LanguageData");
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0,
				menu: "i18n/LocalizedLabel"
			},
			properties: {
				dataID: {
					get: function() {
						return this._dataID
					},
					set: function(e) {
						this._dataID !== e && (this._dataID = e, this.updateLabel())
					}
				},
				_dataID: ""
			},
			onLoad: function() {
				i.inst || i.init(),
				this.fetchRender()
			},
			fetchRender: function() {
				var e = this.getComponent(cc.Label);
				if (e) return this.label = e,
				void this.updateLabel()
			},
			updateLabel: function() {
				this.label ? i.t(this.dataID) && (this.label.string = i.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
			}
		}),
		cc._RF.pop()
	},
	{
		LanguageData: "LanguageData"
	}],
	LocalizedSprite: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
		var i = e("SpriteFrameSet");
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0,
				inspector: "packages://i18n/inspector/localized-sprite.js",
				menu: "i18n/LocalizedSprite"
			},
			properties: {
				spriteFrameSet: {
				default:
					[],
					type: i
				}
			},
			onLoad: function() {
				this.fetchRender()
			},
			fetchRender: function() {
				var e = this.getComponent(cc.Sprite);
				if (e) return this.sprite = e,
				void this.updateSprite(window.i18n.curLang)
			},
			getSpriteFrameByLang: function(e) {
				for (var t = 0; t < this.spriteFrameSet.length; ++t) if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame
			},
			updateSprite: function(e) {
				if (this.sprite) {
					var t = this.getSpriteFrameByLang(e); ! t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
					this.sprite.spriteFrame = t
				} else cc.error("Failed to update localized sprite, sprite component is invalid!")
			}
		}),
		cc._RF.pop()
	},
	{
		SpriteFrameSet: "SpriteFrameSet"
	}],
	NextSongItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "1802do5XcZCN6HXEbNjpat0", "NextSongItem");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				title: cc.Node,
				btnPlay: cc.Node,
				btnUnlock: cc.Node,
				btnUnlockAds: cc.Node,
				coinText: cc.Node
			},
			setData: function(e, t) {
				this.song = e,
				this.title.getComponent(cc.Label).string = e.name,
				t ? (this.btnPlay.active = !0, this.btnUnlock.active = !1, this.btnUnlockAds.active = !1, this.bg.opacity = 255) : "OPEN" === e.type ? (this.btnPlay.active = !0, this.btnUnlock.active = !1, this.btnUnlockAds.active = !1) : "VIDEO" === e.type ? (this.btnPlay.active = !1, this.btnUnlock.active = !1, this.btnUnlockAds.active = !0) : (this.btnPlay.active = !1, this.btnUnlock.active = !0, this.btnUnlockAds.active = !1, this.coinText.getComponent(cc.Label).string = e.coin)
			},
			playSong: function() {
				var e = cc.find("GameControler").getComponent("game");
				e.playClickSound();
				var t = this.song,
				a = t.songData;
				if ("OPEN" === t.type || a) i.setLastPlaySong(t),
				i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id),
				i.logEventGameLevel(),
				e.node_endGame.active = !1,
				e.resetRound();
				else if ("VIDEO" === t.type) Ads.isSupport() ? Ads.hasReward() ? (Ads.showRewarded(null,
				function() {
					"Home" != i.currentScene && cc.director.loadScene("Home")
				}), i.setLastPlaySong(t), i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id), e.node_endGame.active = !1, e.resetRound(), i.logEventGameLevel()) : Ads.isLoadingReward() ? (e.videoLoading.active = !0, Ads._loadedRewardCallback = function() {
					Ads.showRewarded(null,
					function() {
						"Home" != i.currentScene && cc.director.loadScene("Home")
					}),
					i.setLastPlaySong(t),
					i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id),
					e.videoLoading.false,
					e.node_endGame.active = !1,
					e.resetRound(),
					i.logEventGameLevel()
				},
				Ads._loadedRewardFailCallback = function() {
					e.videoNotAvailable.active = !0,
					e.videoLoading.active = !1
				}) : (e.videoLoading.active = !0, Ads._loadedRewardCallback = function() {
					Ads.showRewarded(null,
					function() {
						"Home" != i.currentScene && cc.director.loadScene("Home")
					}),
					i.setLastPlaySong(t),
					i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id),
					e.videoLoading.active = !1,
					e.node_endGame.active = !1,
					e.resetRound(),
					i.logEventGameLevel()
				},
				Ads._loadedRewardFailCallback = function() {
					e.videoNotAvailable.active = !0,
					e.videoLoading.active = !1
				},
				Ads.preloadRewarded()) : (i.setLastPlaySong(t), i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id), i.logEventGameLevel(), e.node_endGame.active = !1, e.resetRound());
				else {
					var n = i.getCoin() - parseInt(t.coin);
					i.setCoin(n),
					i.setLastPlaySong(t),
					i.getCurrentLevel() < 6 && !i.isPlayedSong(t.acm_id) && i.addPlayedSongs(t.acm_id),
					i.logEventGameLevel(),
					e.node_endGame.active = !1,
					e.resetRound()
				}
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	ProgressBar: [function(e, t) {
		"use strict";
		cc._RF.push(t, "8edaaJDmpVL24FDtGMHphx8", "ProgressBar"),
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {
				color_bg: cc.Color,
				color_fg: cc.Color,
				color_star: cc.Color
			},
			onLoad: function() {
				this.BG = this.node.getChildByName("BG"),
				this.FG = this.node.getChildByName("FG"),
				this.Circle = this.node.getChildByName("Circle"),
				this.Circle33 = this.node.getChildByName("Circle33"),
				this.Circle66 = this.node.getChildByName("Circle66"),
				this.Circle100 = this.node.getChildByName("Circle100"),
				this.countStar = -1
			},
			reset: function() {
				this.countStar = -1
			},
			updateProgressBar: function(e, t) {
				var i = 0;
				t > 0 && e > 0 && (i = e / t) > 1 && (i = 1);
				var a = this.node.height;
				this.FG.height = a * i;
				var n;
				return n = i < .33 ? 0 : i < .66 ? 1 : i < 1 ? 2 : 3,
				this.countStar >= n ? this.countStar: (this.countStar = n, this.countStar)
			}
		}),
		cc._RF.pop()
	},
	{}],
	RoadItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "37155ZFhDBJlrfyu/TIWD0w", "RoadItem"),
		cc.Class({
			extends: cc.Component,
			properties: {
				icon: cc.Node,
				border: cc.Node,
				activeBorder: cc.Node,
				lock: cc.Node,
				ShopManager: cc.Node
			},
			onLoad: function() {
				this.ShopManagerComponent = this.ShopManager.getComponent("ShopManager")
			},
			setValue: function(e, t, i, a, n, o, s) {
				void 0 === o && (o = !1),
				void 0 === s && (s = !1),
				this.index = e,
				this.unlock = o,
				this.active = s,
				this.icon.getComponent(cc.Sprite).spriteFrame = t,
				this.border.getComponent(cc.Sprite).spriteFrame = i,
				this.activeBorder.getComponent(cc.Sprite).spriteFrame = a,
				this.lock.getComponent(cc.Sprite).spriteFrame = n,
				s ? (this.activeBorder.active = !0, this.border.active = !1, this.lock.active = !1) : (this.activeBorder.active = !1, this.border.active = !0, this.lock.active = !o)
			},
			onClick: function() {
				this.ShopManagerComponent.onClickRoad(this.index, this.unlock, this.active)
			}
		}),
		cc._RF.pop()
	},
	{}],
	RotateCircle: [function(e, t) {
		"use strict";
		cc._RF.push(t, "2091cRra3pOnJigcrmhwRqV", "RotateCircle"),
		cc.Class({
			extends: cc.Component,
			properties: {
				speed: 100
			},
			update: function(e) {
				this.node.angle -= e * this.speed
			}
		}),
		cc._RF.pop()
	},
	{}],
	ShopItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9f8916ox19IgY0QwN0lCL5C", "ShopItem");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				adsBtn: cc.Node,
				buyBtn: cc.Node,
				icon: cc.Node,
				price: cc.Label,
				coin: cc.Label,
				icon2X: cc.SpriteFrame,
				icon3X: cc.SpriteFrame
			},
			setValue: function(e) {
				0 == e.price ? (this.adsBtn.active = !0, this.buyBtn.active = !1) : (this.adsBtn.active = !1, this.buyBtn.active = !0, this.price.string = e.price),
				"x2" == e.icon ? (this.icon.getComponent(cc.Sprite).spriteFrame = this.icon2X, this.icon.width = 118, this.icon.height = 73) : "x3" == e.icon && (this.icon.getComponent(cc.Sprite).spriteFrame = this.icon3X, this.icon.width = 145, this.icon.height = 75),
				this.coin.string = e.coin,
				this.product = e
			},
			onClick: function() {
				var e = this;
				0 == this.product.price ? Ads.isSupport() ? Ads.hasReward() ? Ads.showRewarded(function() {
					e.pruchaSuccess()
				}) : cc.find("HomeController").getComponent("HomeController").videoNotAvailable.active = !0 : this.pruchaSuccess() : i.isFbPlatform() ? FBInstant.payments.purchaseAsync({
					productID: this.product.id,
					developerPayload: "foobar"
				}).then(function() {
					this.pruchaSuccess()
				}).
				catch(function(e) {
					console.log("error", e)
				}) : this.pruchaSuccess()
			},
			pruchaSuccess: function() {
				var e = cc.find("HomeController").getComponent("HomeController");
				e.playBuySound(),
				e.buyCoinPopup.active = !1;
				var t = e.lb_coin.getComponent(cc.Label),
				a = i.getCoin();
				cc.tween({
					value: 0
				}).to(.5, {
					value: 1e3
				},
				{
					progress: function(e, i, n, o) {
						return t.string = a + Math.round(n),
						e + (i - e) * o
					}
				}).start(),
				a += this.product.coin,
				i.setCoin(a)
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	ShopManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "71eccJst1JKEZzGv/TCXHiS", "ShopManager");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				loading: cc.Node,
				showTreasureBtn: cc.Node,
				showBallsBtn: cc.Node,
				showRoadsBtn: cc.Node,
				ShopItem: cc.Node,
				ShopItems: cc.Node,
				BallItem: cc.Node,
				BallItems: cc.Node,
				RoadItem: cc.Node,
				RoadItems: cc.Node,
				Footer: cc.Node,
				SelectBtn: cc.Node,
				BuyBtn: cc.Node,
				BuyText: cc.Node,
				AdsBtn: cc.Node,
				SelectedBtn: cc.Node
			},
			start: function() {
				this.homeNode = cc.find("HomeController").getComponent("HomeController"),
				this.showBalls()
			},
			showBalls: function() {
				if (this.homeNode.playClickSound(), this.BallItems.active = !0, this.showBallsBtn.children[0].active = !1, this.showBallsBtn.children[1].active = !0, this.showRoadsBtn.children[0].active = !0, this.showRoadsBtn.children[1].active = !1, this.showTreasureBtn.children[0].active = !0, this.showTreasureBtn.children[1].active = !1, this.Footer.active = !1, this.ballItems) {
					var e = this.RoadItems.active ? this.RoadItems: this.ShopItems,
					t = e.getPosition();
					t.x = -2500;
					var i = this.BallItems.getPosition();
					this.BallItems.x = 2500,
					i.x = 0,
					this.BallItems.active = !0,
					cc.tween(this.BallItems).to(.2, {
						position: i
					}).start(),
					cc.tween(e).to(.2, {
						position: t
					}).call(function() {
						e.active = !1
					}).start()
				} else this.RoadItems.active = !1,
				this.ShopItems.active = !1,
				this.loading.active = !0,
				this.buildBalls()
			},
			buildBalls: function() {
				var e = this;
				this.ballIDs = [{
					id: -1,
					type: "FREE"
				},
				{
					id: 0,
					type: "ADS"
				},
				{
					id: 1,
					type: "COIN",
					coin: 100
				},
				{
					id: 2,
					type: "COIN",
					coin: 100
				},
				{
					id: 3,
					type: "ADS"
				},
				{
					id: 9,
					type: "ADS"
				},
				{
					id: 10,
					type: "ADS"
				},
				{
					id: 16,
					type: "ADS"
				}],
				this.ballItems = [],
				cc.assetManager.loadBundle("preview",
				function(t, a) {
					if (t) return console.error(t);
					a.loadDir("common", cc.SpriteFrame,
					function(t, n) {
						e.borderSpriteFrame = n.find(function(e) {
							return "border_ballitem" == e.name
						}),
						e.borderActiveSpriteFrame = n.find(function(e) {
							return "border_ballitem_active" == e.name
						}),
						e.borderLockSpriteFrame = n.find(function(e) {
							return "border_lock" == e.name
						}),
						a.loadDir("balls", cc.SpriteFrame,
						function(t, a) {
							e.ballSpriteFrames = a;
							for (var n = e.BallItem.y,
							o = function(t) {
								var a = e.ballIDs[t].id + 1;
								if (0 == t) e.BallItem.getComponent("BallItem").setValue(t, e.ballSpriteFrames.find(function(e) {
									return e.name == "ball_" + a
								}), e.borderSpriteFrame, e.borderActiveSpriteFrame, e.borderLockSpriteFrame, i.isUnlockBallID(e.ballIDs[t].id), i.getBallID() == e.ballIDs[t].id),
								e.BallItem.x = -360,
								e.BallItem.active = !0,
								e.ballItems.push(e.BallItem);
								else {
									var o = cc.instantiate(e.BallItem);
									o.parent = e.BallItems,
									o.getComponent("BallItem").setValue(t, e.ballSpriteFrames.find(function(e) {
										return e.name == "ball_" + a
									}), e.borderSpriteFrame, e.borderActiveSpriteFrame, e.borderLockSpriteFrame, i.isUnlockBallID(e.ballIDs[t].id), i.getBallID() == e.ballIDs[t].id),
									o.active = !0,
									t % 3 == 0 ? (o.x = -360, n -= 360) : o.x = t % 3 == 1 ? 0 : 360,
									o.y = n,
									e.ballItems.push(o)
								}
							},
							s = 0; s < e.ballIDs.length; s++) o(s);
							e.loading.active = !1
						})
					})
				})
			},
			showRoads: function() {
				if (this.homeNode.playClickSound(), this.showBallsBtn.children[0].active = !0, this.showBallsBtn.children[1].active = !1, this.RoadItems.active = !0, this.showRoadsBtn.children[0].active = !1, this.showRoadsBtn.children[1].active = !0, this.showTreasureBtn.children[0].active = !0, this.showTreasureBtn.children[1].active = !1, this.Footer.active = !1, this.roadItems) {
					var e = this.ShopItems.active ? this.ShopItems: this.BallItems,
					t = e.getPosition();
					t.x = -2500;
					var i = this.RoadItems.getPosition();
					this.RoadItems.x = 2500,
					i.x = 0,
					cc.tween(this.RoadItems).to(.2, {
						position: i
					}).start(),
					cc.tween(e).to(.2, {
						position: t
					}).call(function() {
						e.active = !1
					}).start()
				} else this.ShopItems.active = !1,
				this.BallItems.active = !1,
				this.loading.active = !0,
				this.buildRoads()
			},
			buildRoads: function() {
				var e = this;
				this.roadIDs = [{
					id: 1,
					type: "FREE"
				},
				{
					id: 2,
					type: "ADS"
				},
				{
					id: 5,
					type: "COIN",
					coin: 100
				},
				{
					id: 6,
					type: "COIN",
					coin: 100
				},
				{
					id: 10,
					type: "ADS"
				},
				{
					id: 11,
					type: "ADS"
				},
				{
					id: 12,
					type: "ADS"
				},
				{
					id: 13,
					type: "COIN",
					coin: 100
				},
				{
					id: 15,
					type: "ADS"
				},
				{
					id: 16,
					type: "ADS"
				}],
				this.roadItems = [],
				cc.assetManager.loadBundle("preview",
				function(t, a) {
					if (t) return console.error(t);
					a.loadDir("common", cc.SpriteFrame,
					function(t, n) {
						e.borderSpriteFrame = n.find(function(e) {
							return "border_ballitem" == e.name
						}),
						e.borderActiveSpriteFrame = n.find(function(e) {
							return "border_ballitem_active" == e.name
						}),
						e.borderLockSpriteFrame = n.find(function(e) {
							return "border_lock" == e.name
						}),
						a.loadDir("roads", cc.SpriteFrame,
						function(t, a) {
							e.roadSpriteFrames = a;
							for (var n = e.RoadItem.y,
							o = function(t) {
								var a = e.roadIDs[t].id;
								if (0 == t) e.RoadItem.getComponent("RoadItem").setValue(t, e.roadSpriteFrames.find(function(e) {
									return e.name == "road_buy_" + a
								}), e.borderSpriteFrame, e.borderActiveSpriteFrame, e.borderLockSpriteFrame, i.isUnlockRoadID(e.roadIDs[t].id), i.getRoadID() == e.roadIDs[t].id),
								e.RoadItem.x = -360,
								e.RoadItem.active = !0,
								e.roadItems.push(e.RoadItem);
								else {
									var o = cc.instantiate(e.RoadItem);
									o.parent = e.RoadItems,
									o.getComponent("RoadItem").setValue(t, e.roadSpriteFrames.find(function(e) {
										return e.name == "road_buy_" + a
									}), e.borderSpriteFrame, e.borderActiveSpriteFrame, e.borderLockSpriteFrame, i.isUnlockRoadID(e.roadIDs[t].id), i.getRoadID() == e.roadIDs[t].id),
									o.active = !0,
									t % 3 == 0 ? (o.x = -360, n -= 360) : o.x = t % 3 == 1 ? 0 : 360,
									o.y = n,
									e.roadItems.push(o)
								}
							},
							s = 0; s < e.roadIDs.length; s++) o(s);
							e.loading.active = !1
						})
					})
				})
			},
			showTreasure: function() {
                return;
				if (this.ShopItems.active = !0, this.showTreasureBtn.children[0].active = !1, this.showTreasureBtn.children[1].active = !0, this.showBallsBtn.children[0].active = !0, this.showBallsBtn.children[1].active = !1, this.showRoadsBtn.children[0].active = !0, this.showRoadsBtn.children[1].active = !1, this.Footer.active = !1, this.coinProductIDs) {
					this.homeNode.playClickSound();
					var e = this.BallItems.active ? this.BallItems: this.RoadItems,
					t = e.getPosition();
					t.x = -2500;
					var i = this.ShopItems.getPosition();
					this.ShopItems.x = 2500,
					i.x = 0,
					cc.tween(this.ShopItems).to(.2, {
						position: i
					}).start(),
					cc.tween(e).to(.2, {
						position: t
					}).call(function() {
						e.active = !1
					}).start()
				} else this.BallItems.active = !1,
				this.RoadItems.active = !1,
				this.loading.active = !0,
				this.buidTreasure()
			},
			buidTreasure: function() {
				var e = this;
				this.coinProductIDs = [{
					productID: "Free",
					coin: 100,
					price: 0
				}],
				i.isFbPlatform() ? window.coinProductIDs ? this.buidTreasure2() : FBInstant.getSupportedAPIs().includes("payments.getCatalogAsync") ? i.getFBProducts(function() {
					e.buidTreasure2()
				}) : this.buidTreasure2() : (this.coinProductIDs.push({
					productID: 1,
					coin: 300,
					price: "$1",
					icon: "x2"
				}), this.coinProductIDs.push({
					productID: 2,
					coin: 800,
					price: "$2",
					icon: "x3"
				}), this.coinProductIDs.push({
					productID: 3,
					coin: 2e3,
					price: "$3",
					icon: "x3"
				}), this.buidTreasure2())
			},
			buidTreasure2: function() {
				for (var e = this.ShopItem.y,
				t = 0; t < this.coinProductIDs.length; t++) if (0 == t) this.ShopItem.getComponent("ShopItem").setValue(this.coinProductIDs[t]),
				this.ShopItem.active = !0;
				else {
					var i = cc.instantiate(this.ShopItem);
					i.parent = this.ShopItems,
					i.getComponent("ShopItem").setValue(this.coinProductIDs[t]),
					i.active = !0,
					e -= 250,
					i.y = e
				}
				this.loading.active = !1
			},
			onClickBall: function(e, t, a) {
				this.homeNode.playClickSound();
				var n = this.ballIDs[e];
				a = i.getBallID() == n.id,
				t = i.isUnlockBallID(n.id),
				this.Footer.active = !0,
				a ? (this.SelectedBtn.active = !0, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !1) : t ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !0, this.BuyBtn.active = !1) : "ADS" == n.type ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !0, this.SelectBtn.active = !1, this.BuyBtn.active = !1) : "COIN" == n.type ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !0, this.BuyText.getComponent(cc.Label).string = n.coin) : (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !0, this.BuyBtn.active = !1);
				for (var o = 0; o < this.ballItems.length; o++) {
					var s = this.ballItems[o].getComponent("BallItem");
					o == e ? (s.border.active = !1, s.activeBorder.active = !0) : (s.activeBorder.active = !1, s.border.active = !0)
				}
				this._selectItem = {
					type: "ball",
					index: e,
					ball: n,
					unlock: t,
					active: a
				}
			},
			onClickRoad: function(e, t, a) {
				this.homeNode.playClickSound();
				var n = this.roadIDs[e];
				a = i.getRoadID() == n.id,
				t = i.isUnlockRoadID(n.id),
				this.Footer.active = !0,
				a ? (this.SelectedBtn.active = !0, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !1) : t ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !0, this.BuyBtn.active = !1) : "ADS" == n.type ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !0, this.SelectBtn.active = !1, this.BuyBtn.active = !1) : "COIN" == n.type ? (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !0, this.BuyText.getComponent(cc.Label).string = n.coin) : (this.SelectedBtn.active = !1, this.AdsBtn.active = !1, this.SelectBtn.active = !0, this.BuyBtn.active = !1);
				for (var o = 0; o < this.roadItems.length; o++) {
					var s = this.roadItems[o].getComponent("RoadItem");
					o == e ? (s.border.active = !1, s.activeBorder.active = !0) : (s.activeBorder.active = !1, s.border.active = !0)
				}
				this._selectItem = {
					type: "road",
					index: e,
					ball: n,
					unlock: t,
					active: a
				}
			},
			onSelect: function() {
				var e, t, a = this;
				if (this.homeNode.playClickSound(), "road" == this._selectItem.type ? (e = this.roadItems[this._selectItem.index].getComponent("RoadItem"), t = !0) : (e = this.ballItems[this._selectItem.index].getComponent("BallItem"), t = !1), !this._selectItem.active) if (this._selectItem.active.unlock) t ? i.setRoadID(this._selectItem.ball.id) : i.setBallID(this._selectItem.ball.id),
				this.SelectedBtn.active = !0,
				this.AdsBtn.active = !1,
				this.SelectBtn.active = !1,
				this.BuyBtn.active = !1;
				else if ("ADS" == this._selectItem.ball.type) Ads.isSupport() ? Ads.hasReward() ? Ads.showRewarded(function() {
					a.SelectedBtn.active = !0,
					a.AdsBtn.active = !1,
					a.SelectBtn.active = !1,
					a.BuyBtn.active = !1,
					e.lock.active = !1,
					t ? (i.setRoadID(a._selectItem.ball.id), i.setUnlockRoadID(a._selectItem.ball.id)) : (i.setBallID(a._selectItem.ball.id), i.setUnlockBallID(a._selectItem.ball.id))
				}) : cc.find("HomeController").getComponent("HomeController").videoNotAvailable.active = !0 : (this.SelectedBtn.active = !0, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !1, e.lock.active = !1, t ? (i.setRoadID(this._selectItem.ball.id), i.setUnlockRoadID(this._selectItem.ball.id)) : (i.setBallID(this._selectItem.ball.id), i.setUnlockBallID(this._selectItem.ball.id)));
				else if ("COIN" == this._selectItem.ball.type) {
					var n = cc.find("HomeController").getComponent("HomeController");
					if (i.getCoin() < this._selectItem.coin) n.buyCoinPopup.active = !1;
					else {
						var o = i.getCoin() - parseInt(this._selectItem.coin);
						i.setCoin(o),
						t ? (i.setRoadID(this._selectItem.ball.id), i.setUnlockRoadID(this._selectItem.ball.id)) : (i.setBallID(this._selectItem.ball.id), i.setUnlockBallID(this._selectItem.ball.id)),
						this.SelectedBtn.active = !0,
						this.AdsBtn.active = !1,
						this.SelectBtn.active = !1,
						this.BuyBtn.active = !1,
						e.lock.active = !1
					}
				} else "FREE" == this._selectItem.ball.type && (this.SelectedBtn.active = !0, this.AdsBtn.active = !1, this.SelectBtn.active = !1, this.BuyBtn.active = !1, e.lock.active = !1, t ? (i.setRoadID(this._selectItem.ball.id), i.setUnlockRoadID(this._selectItem.ball.id)) : (i.setBallID(this._selectItem.ball.id), i.setUnlockBallID(this._selectItem.ball.id)))
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	SongItem: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6338aHAB3dFk4APSLblFSMn", "SongItem");
		var i = e("./SongLists").SongLists,
		a = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				id: cc.Node,
				title: cc.Node,
				btnPlay: cc.Node,
				btnUnlock: cc.Node,
				btnUnlockAds: cc.Node,
				rating: cc.Node,
				ratingActive: cc.Node,
				coinText: cc.Node,
				bg: cc.Node,
				LabelHot: cc.Node,
				LabelNew: cc.Node,
				LabelXmas: cc.Node,
				LeaderBoardIcon: cc.Node
			},
			start: function() {},
			setData: function(e, t, i) {
				if (this.songId = t.id, this.title.getComponent(cc.Label).string = t.name, this.id.getComponent(cc.Label).string = e, i) {
					for (var a = 0; a < 3; a++) i.star && a < i.star ? (this.ratingActive.children[a].active = !0, this.rating.children[a].active = !1) : (this.ratingActive.children[a].active = !1, this.rating.children[a].active = !0);
					this.LeaderBoardIcon.active = !0
				} else {
					for (var n = 0; n < 3; n++) this.ratingActive.children[n].active = !1,
					this.rating.children[n].active = !0;
					this.LeaderBoardIcon.active = !1
				}
				i ? (this.btnPlay.active = !0, this.btnUnlock.active = !1, this.btnUnlockAds.active = !1, this.bg.opacity = 255) : "OPEN" === t.type ? (this.btnPlay.active = !0, this.btnUnlock.active = !1, this.btnUnlockAds.active = !1, this.bg.opacity = 255) : "VIDEO" === t.type ? (this.btnPlay.active = !1, this.btnUnlock.active = !1, this.btnUnlockAds.active = !0, this.bg.opacity = 120) : (this.btnPlay.active = !1, this.btnUnlock.active = !0, this.btnUnlockAds.active = !1, this.coinText.getComponent(cc.Label).string = t.coin, this.bg.opacity = 120),
				!t.label || "NEW" != t.label && "Hot" != t.label && "Xmas" != t.label ? (this.LabelHot.active = !1, this.LabelNew.active = !1, this.LabelXmas.active = !1) : "NEW" == t.label ? (this.LabelHot.active = !1, this.LabelXmas.active = !1, this.LabelNew.active = !0) : "Xmas" == t.label ? (this.LabelHot.active = !1, this.LabelXmas.active = !0, this.LabelNew.active = !1) : (this.LabelHot.active = !0, this.LabelXmas.active = !1, this.LabelNew.active = !1)
			},
			playSong: function() {
				var e = this,
				t = cc.find("HomeController").getComponent("HomeController");
				t.playClickSound();
				var n = i[this.songId],
				o = a.getSongData(n.acm_id);
				if ("OPEN" === n.type || o) a.setLastPlaySong(n),
				a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id),
				t.loading.active = !0,
				this.scheduleOnce(function() {
					cc.director.loadScene("GamePlay")
				},
				.1);
				else if ("VIDEO" === n.type) Ads.isSupport() ? Ads.hasReward() ? (Ads.showRewarded(null,
				function() {
					"Home" != a.currentScene && cc.director.loadScene("Home")
				}), a.setLastPlaySong(n), a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id), t.loading.active = !0, this.scheduleOnce(function() {
					cc.director.loadScene("GamePlay")
				},
				.1)) : Ads.isLoadingReward() ? (t.videoLoading.active = !0, Ads._loadedRewardCallback = function() {
					Ads.showRewarded(null,
					function() {
						"Home" != a.currentScene && cc.director.loadScene("Home")
					}),
					t.videoLoading.active = !1,
					a.setLastPlaySong(n),
					a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id),
					t.loading.active = !0,
					e.scheduleOnce(function() {
						cc.director.loadScene("GamePlay")
					},
					.1)
				},
				Ads._loadedRewardFailCallback = function() {
					t.videoNotAvailable.active = !0,
					t.videoLoading.active = !1
				}) : (t.videoLoading.active = !0, Ads._loadedRewardCallback = function() {
					Ads.showRewarded(null,
					function() {
						"Home" != a.currentScene && cc.director.loadScene("Home")
					}),
					t.videoLoading.active = !1,
					a.setLastPlaySong(n),
					a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id),
					t.loading.active = !0,
					e.scheduleOnce(function() {
						cc.director.loadScene("GamePlay")
					},
					.1)
				},
				Ads._loadedRewardFailCallback = function() {
					t.videoNotAvailable.active = !0,
					t.videoLoading.active = !1
				},
				Ads.preloadRewarded()) : (a.setLastPlaySong(n), a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id), t.loading.active = !0, this.scheduleOnce(function() {
					cc.director.loadScene("GamePlay")
				},
				.1));
				else if (a.getCoin() < n.coin) t.buyCoinPopup.active = !1;
				else {
					var s = a.getCoin() - parseInt(n.coin);
					a.setCoin(s),
					a.setLastPlaySong(n),
					t.loading.active = !0,
					this.scheduleOnce(function() {
						cc.director.loadScene("GamePlay")
					},
					.1),
					a.getCurrentLevel() < 6 && !a.isPlayedSong(n.acm_id) && a.addPlayedSongs(n.acm_id)
				}
				a.logEventGameLevel()
			},
			showLeaderBoard: function() {
				var e = cc.find("HomeController").getComponent("HomeController");
				e.playClickSound(),
				e.leaderBoard.getComponent("LeaderBoard").leaderBoardId = i[this.songId].acm_id,
				e.leaderBoard.active = !0
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper",
		"./SongLists": "SongLists"
	}],
	SongLists: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "fe604ent6ZLpoAOCzbUFMhS", "SongLists"),
		i.__esModule = !0,
		i.SongLists = void 0,
		i.SongLists = [{
			path: "Faded_Tutorial.mp3",
			name: "Faded!",
			bmp: 105,
			coin: 0,
			type: "OPEN",
			tags: "POPULAR; EDM",
			country: "EN",
			theme: 1,
			acm_id: 1558516483060
		},
		{
			path: "Alone_Marshmello.mp3",
			name: "Alone - Marshmello",
			bmp: 120,
			coin: 0,
			type: "OPEN",
			tags: "POPULAR; RapidJump; EDM; Vocal",
			country: "EN",
			theme: -1,
			acm_id: 1562317217062
		},
		{
			path: "Unity.mp3",
			name: "Unity - TheFatRat",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 1557465002349,
			label: "Hot"
		},
		{
			path: "JingleBells_JAMStudio.mp3",
			name: "Jingle Bells Rock",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20215,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "12DaysOfChristmas_XmasRemix.mp3",
			name: "12 Days Of Chirstmas",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20211,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "AChristmasDance_ArthurBenson.mp3",
			name: "A Christmas Dance",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20212,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "SleighRide_MajorLeagueWobs.mp3",
			name: "Sleigh Ride",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20217,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "despacito.mp3",
			name: "Despacito",
			coin: 25,
			type: "VIDEO",
			country: "EN",
			theme: -1,
			acm_id: 23,
			source: "bin"
		},
		{
			path: "playing-with-fire.mp3",
			name: "Playing With Fire",
			coin: 50,
			type: "COIN",
			country: "EN",
			theme: -1,
			acm_id: 25,
			source: "bin",
			label: "Hot"
		},
		{
			path: "dance-monkey.mp3",
			name: "Dance Monkey",
			coin: 25,
			type: "VIDEO",
			country: "EN",
			theme: -1,
			acm_id: 21,
			source: "bin"
		},
		{
			path: "dont-let-me-down.mp3",
			name: "Don't Let Me Down",
			coin: 25,
			type: "VIDEO",
			country: "EN",
			theme: -1,
			acm_id: 22,
			source: "bin",
			label: "Hot"
		},
		{
			path: "Funny-Zedd-Jasmine-Thompson.mp3",
			name: "Funny",
			bmp: 120,
			coin: 50,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 201,
			source: "raw"
		},
		{
			path: "InfinitePower-TheFatRat.mp3",
			name: "InfinitePower TheFatRat",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 202,
			source: "raw"
		},
		{
			path: "BigBadSanta_RoccoVanwell.mp3",
			name: "Big Bad Santa",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20213,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "FrostyTheSnowman_ManiacsRemix.mp3",
			name: "Frosty The Snowman",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20214,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "JoyToTheWorld_TrapRemix.mp3",
			name: "Joy To The World",
			bmp: 106,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM; RapidJump",
			country: "EN",
			theme: -1,
			acm_id: 20216,
			label: "Xmas",
			source: "raw"
		},
		{
			path: "PreludeVipEdit-TheFatRat.mp3",
			name: "Prelude TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 203,
			source: "raw"
		},
		{
			path: "Fly-Away-TheFatRat.mp3",
			name: "Fly Away TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 204,
			source: "raw"
		},
		{
			path: "Jackpot-TheFatRat.mp3",
			name: "Jackpot TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 205,
			source: "raw"
		},
		{
			path: "NeverBeAlone-TheFatRat.mp3",
			name: "NeverBeAlone TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 206,
			source: "raw"
		},
		{
			path: "Origin-TheFatRat.mp3",
			name: "Origin TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 207,
			source: "raw"
		},
		{
			path: "Singularity-TheFatRat.mp3",
			name: "Singularity TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 208,
			source: "raw"
		},
		{
			path: "TheFatRat-Windfall.mp3",
			name: "Windfall TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 209,
			source: "raw"
		},
		{
			path: "TheStorm-TheFatRat.mp3",
			name: "TheStorm TheFatRat",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 210,
			source: "raw"
		},
		{
			path: "TimeLapse-TheFatRat.mp3",
			name: "TimeLapse TheFatRat",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "",
			country: "EN",
			label: "NEW",
			acm_id: 211,
			source: "raw"
		},
		{
			path: "something-just-like-this.mp3",
			name: "Something Just Like This",
			coin: 25,
			type: "VIDEO",
			country: "EN",
			theme: -1,
			acm_id: 24,
			source: "bin"
		},
		{
			path: "love-scenario.mp3",
			name: "LOVE SCENARIO",
			coin: 15,
			type: "VIDEO",
			country: "EN",
			theme: -1,
			acm_id: 26,
			source: "bin"
		},
		{
			path: "LetItGo_cover.mp3",
			name: "Let It Go",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop; NEW; Xmas",
			theme: 15,
			country: "EN",
			acm_id: 1563880626384
		},
		{
			path: "BadGuy_CoverCut_BillieEilish.mp3",
			name: "bad guy",
			bmp: 140,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop; NEW",
			country: "EN",
			theme: -1,
			acm_id: 1574153472834,
			id: 4
		},
		{
			path: "Thunder_Cover_ImagineDragons.mp3",
			name: "Thunder",
			bmp: 140,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Rock; NEW",
			theme: -1,
			country: "EN",
			acm_id: 1574847483162,
			label: "Hot",
			filter: "0.3;0.1;0.1"
		},
		{
			path: "CheapThrillsV1_Sia.mp3",
			name: "Cheap Thrills",
			bmp: 150,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1565772270685
		},
		{
			path: "CrazyFrog_MCFioti_bpm150.mp3",
			name: "Axel F",
			bmp: 150,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM",
			country: "EN",
			theme: -1,
			acm_id: 1565346689302
		},
		{
			path: "AttentionVer1_CharliePuth.mp3",
			name: "Attention",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562298397440
		},
		{
			path: "BadRomanceP1_bpm150.mp3",
			name: "Bad Romance",
			bmp: 150,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop; Vocal",
			country: "EN",
			theme: -1,
			acm_id: 1563880675261
		},
		{
			path: "Chandelier_bpm180.mp3",
			name: "Chandelier",
			bmp: 180,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1563880692407
		},
		{
			path: "NewRulesP1.mp3",
			name: "New Rules",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			country: "EN",
			tags: "POPULAR; Pop",
			theme: -1,
			acm_id: 1562754584800
		},
		{
			path: "WeDontTalkAnymore.mp3",
			name: "We Don't Talk Anymore",
			bmp: 130,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop; Vocal",
			country: "EN",
			theme: -1,
			acm_id: 1563880621038
		},
		{
			path: "HowLongP1.mp3",
			name: "How Long",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1563880657156
		},
		{
			path: "CountingStarsP1_bpm122.mp3",
			name: "Counting Stars",
			bmp: 122,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1564546702534
		},
		{
			path: "BumBumTamTamRT_MCFioti.mp3",
			name: "Bum Bum Tam Tam",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM",
			country: "EN",
			theme: -1,
			acm_id: 1566182931570
		},
		{
			path: "CloseVer1_NickJonas.mp3",
			name: "Close",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1569921429331
		},
		{
			path: "Monody_TheFatRat_cut.mp3",
			name: "Monody - TheFatRat",
			bmp: 160,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM",
			country: "EN",
			label: "Hot",
			theme: -1,
			acm_id: 1558518567724
		},
		{
			path: "NoNoNoP1_TheFatRat_cut1.mp3",
			name: "No No No - TheFatRat",
			bmp: 148,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM",
			country: "EN",
			theme: -1,
			acm_id: 1558518894003
		},
		{
			path: "TheCalling_TheFatRat_cut.mp3",
			name: "The Calling - TheFatRat (ft. Laura Brehm)",
			bmp: 130,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR; EDM",
			country: "EN",
			theme: -1,
			acm_id: 1559026451341
		},
		{
			path: "NeverBeLikeYouP1.mp3",
			name: "Never Be Like You",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "POPULAR; Pop",
			country: "EN",
			theme: -1,
			acm_id: 1568965199164
		},
		{
			path: "TrapHipHop.mp3",
			name: "Trap Hip hop",
			bmp: 100,
			coin: 25,
			type: "VIDEO",
			tags: "EDM;Trap; Hip-hop",
			country: "EN",
			theme: -1,
			acm_id: 1560744321610
		},
		{
			path: "Jingle_Bells.mp3",
			name: "Jingle Bells",
			bmp: 150,
			coin: 25,
			type: "VIDEO",
			tags: "POPULAR;SEASON;EVENT;Xmas",
			theme: 15,
			country: "EN",
			acm_id: 1559034681937,
			label: "Xmas",
			flag: 11
		},
		{
			path: "DontBringMeDown.mp3",
			name: "Dont Bring Me Down",
			bmp: 130,
			coin: 25,
			type: "VIDEO",
			tags: "House; EDM",
			country: "EN",
			theme: -1,
			acm_id: 1560506345022
		},
		{
			path: "BeWithYou.mp3",
			name: "Be With You",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1561545194793
		},
		{
			path: "StickTogether.mp3",
			name: "Stick Together",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562574797833
		},
		{
			path: "ILoveU.mp3",
			name: "I Love U",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1561545437953
		},
		{
			path: "IfIWasYourGirlfriend.mp3",
			name: "If I Was Your Girlfriend",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562574971402
		},
		{
			path: "IAmBetterOff.mp3",
			name: "I Am Better Off",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562574807422
		},
		{
			path: "KobeSteak.mp3",
			name: "Kobe Steak",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562577134765
		},
		{
			path: "YouSetMyWorldOnFire.mp3",
			name: "You Set My World On Fire",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562655759115
		},
		{
			path: "LosingMyCool_bpm132.mp3",
			name: "Losing My Cool",
			bmp: 132,
			coin: 25,
			type: "VIDEO",
			tags: "Pop",
			country: "EN",
			theme: -1,
			acm_id: 1562655783141
		},
		{
			path: "\x1brnItUpCOERemix.mp3",
			name: "Turn It Up (COE Remix)",
			bmp: 120,
			coin: 50,
			type: "COIN",
			country: "EN",
			tags: "Pop",
			theme: -1,
			acm_id: 1554179396856
		},
		{
			path: "Het-Thuong-Can-Nho.mp3",
			name: "H\u1ebft Th\u01b0\u01a1ng C\u1ea1n Nh\u1edb",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 101,
			source: "raw"
		},
		{
			path: "HayTraoChoAnhSonTung.mp3",
			name: "H\xe3y Trao Cho Anh (P1)",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1572256593429,
			label: "Hot",
			flag: 10
		},
		{
			path: "HayTraoChoAnhSD.mp3",
			name: "H\xe3y Trao Cho Anh (P2)",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1572863890398,
			label: "Hot",
			flag: 10
		},
		{
			path: "ChayNgayDi_ST.mp3",
			name: "Ch\u1ea1y Ngay \u0110i",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1562665377179,
			label: "Hot",
			flag: 5
		},
		{
			path: "NangAmXaDan_ST.mp3",
			name: "N\u1eafng \u1ea4m Xa D\u1ea7n",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1562754579092,
			label: "Hot",
			flag: 2
		},
		{
			path: "EmCuaNgayHomQua_ST.mp3",
			name: "Em C\u1ee7a Ng\xe0y H\xf4m Qua",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1562671218779,
			flag: 2
		},
		{
			path: "KhongPhaiDangVuaDau_ST.mp3",
			name: "Kh\xf4ng Ph\u1ea3i D\u1ea1ng V\u1eeba \u0110\xe2u",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1562752898835,
			flag: 2
		},
		{
			path: "LaNguoiLuonYeuEm_ST.mp3",
			name: "L\xe0 Ng\u01b0\u1eddi Lu\xf4n Y\xeau Em",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "Son Tung Playlist",
			theme: 9,
			country: "VN",
			acm_id: 1562753533076,
			flag: 2
		},
		{
			path: "Yeu-Mot-Nguoi-Ton-Thuong-Nguyen-Huong.mp3",
			name: "Y\xeau M\u1ed9t Ng\u01b0\u1eddi T\u1ed5n Th\u01b0\u01a1ng",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 102,
			source: "raw"
		},
		{
			path: "NoiNayCoAnh_ST.mp3",
			name: "N\u01a1i N\xe0y C\xf3 Anh",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1562754573085,
			flag: 3
		},
		{
			path: "KhuonMatDangThuong_ST.mp3",
			name: "Khu\xf4n M\u1eb7t \u0110\xe1ng Th\u01b0\u01a1ng",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1562752898675,
			flag: 2
		},
		{
			path: "ThaiBinhMoHoiRoi_ST.mp3",
			name: "Th\xe1i B\xecnh M\u1ed3 H\xf4i R\u01a1i",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1563167062900,
			flag: 2
		},
		{
			path: "Neo-Dau-Ben-Que-Pham-Phuong-Thao.mp3",
			name: "Neo \u0110\u1eadu B\u1ebfn Qu\xea",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 106,
			source: "raw"
		},
		{
			path: "ConMuaNgangQua_ST.mp3",
			name: "C\u01a1n M\u01b0a Ngang Qua",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1562666833563,
			flag: 2
		},
		{
			path: "Tieng-Dan-Ta-Lu-Trang-Nhung.mp3",
			name: "Ti\u1ebfng \u0110\xe0n Ta L\u01b0",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 105,
			source: "raw"
		},
		{
			path: "BuongDoiTayNhauRa_ST.mp3",
			name: "Bu\xf4ng \u0110\xf4i Tay Nhau Ra",
			bmp: 120,
			coin: 25,
			type: "VIDEO",
			tags: "Son Tung Playlist",
			country: "VN",
			theme: 9,
			acm_id: 1562664598277,
			flag: 2
		},
		{
			path: "Dung-vi-em-la-bien-Anh-Tho.mp3",
			name: "\u0110\u1eebng V\xed Em L\xe0 Bi\u1ec3n",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 103,
			source: "raw"
		},
		{
			path: "Ho-Tren-Nui-Anh-Tho.mp3",
			name: "H\u1ed3 Tr\xean N\xfai",
			bmp: 120,
			coin: 50,
			type: "COIN",
			tags: "",
			country: "VN",
			label: "NEW",
			acm_id: 104,
			source: "raw"
		}],
		cc._RF.pop()
	},
	{}],
	SpriteFrameSet: [function(e, t) {
		"use strict";
		cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
		var i = cc.Class({
			name: "SpriteFrameSet",
			properties: {
				language: "",
				spriteFrame: cc.SpriteFrame
			}
		});
		t.exports = i,
		cc._RF.pop()
	},
	{}],
	ThemeManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "868bboWsX9InLkpfmrkB25j", "ThemeManager");
		var i = e("./Helper").Helper;
		cc.Class({
			extends: cc.Component,
			properties: {
				road_material: cc.Material,
				default_road: cc.Texture2D,
				skybox: cc.Node,
				sky_front: cc.Sprite,
				sky_back: cc.Sprite,
				sky_down: cc.Sprite,
				sky_left: cc.Sprite,
				sky_right: cc.Sprite,
				sky_up: cc.Sprite
			},
			onLoad: function() {},
			start: function() {},
			loadrandDomTheme: function(e) {
				var t = this;
				void 0 === e && (e = null),
				this.initTheme = !1;
				var a, n = [1, 3, 4, 7],
				o = i.getRoadID();
				cc.loader.loadRes("road/road_" + o, cc.Texture2D,
				function(e, i) {
					t.road_material.setProperty("diffuseTexture", i)
				}),
				2 == (a = window._entryPointData && window._entryPointData.theme ? parseInt(window._entryPointData.theme) + 1 : n[Math.floor(Math.random() * n.length)]) && (a = 7),
				cc.assetManager.loadBundle("theme" + a,
				function(i, n) {
					if (i) return console.error(i);
					for (var o = ["front", "back", "down", "left", "right", "up"], s = function(i) {
						n.load(a + "_" + o[i], cc.SpriteFrame,
						function(a, n) {
							t["sky_" + o[i]].spriteFrame = n,
							i == o.length - 1 && (console.log("loadedTheme"), e && e())
						})
					},
					c = 0; c < o.length; c++) s(c)
				})
			}
		}),
		cc._RF.pop()
	},
	{
		"./Helper": "Helper"
	}],
	game: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5fe8dcD2T1GlorW7CX1QlDa", "game");
		var i = e("./segments-texture"),
		a = e("./gen-obs"),
		n = e("./CryptoJS").CryptoJS,
		o = e("./Helper").Helper,
		s = e("./SongLists").SongLists,
		c = new cc.Color(0, 0, 0, 255),
		r = new cc.Color(255, 255, 255, 255);
		function l(e, t) {
			return Math.round(e + Math.random() * (t - e))
		}
		function h(e, t, i) {
			var a = new Date;
			a.setTime(a.getTime() + 864e5 * i);
			var n = "expires=" + a.toUTCString();
			document.cookie = e + "=" + t + ";" + n + ";path=/"
		}
		function d(e) {
			for (var t = e + "=",
			i = document.cookie.split(";"), a = 0; a < i.length; a++) {
				for (var n = i[a];
				" " == n.charAt(0);) n = n.substring(1);
				if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
			}
			return ""
		}
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {
				prefab_segment: cc.Prefab,
				prefab_obstacle: cc.Prefab,
				prefab_colorgate: cc.Prefab,
				prefab_gold: cc.Prefab,
				prefab_ballmove: cc.Prefab,
				roads_root: cc.Node,
				obs_root: cc.Node,
				camera: cc.Node,
				camera_background: cc.Node,
				player: cc.Node,
				lb_count: cc.Label,
				player_trail: cc.Node,
				player_fx: cc.Node,
				bt_reset: cc.Node,
				bt_reset_mid: cc.Node,
				bt_start: cc.Node,
				bt_nextsong: cc.Node,
				bt_nextlevel: cc.Node,
				lb_timegame: cc.Label,
				lb_namesong: cc.Label,
				lb_mid: cc.Node,
				lb_combo: cc.Node,
				lb_coin: cc.Node,
				node_loading: cc.Node,
				node_warningConnect: cc.Node,
				node_revive: cc.Node,
				node_tip: cc.Node,
				node_gate: cc.Node,
				gate_fx: cc.Node,
				node_wingame: cc.Node,
				node_endGame: cc.Node,
				node_continuePlay: cc.Node,
				node_progressbar: cc.Node,
				node_33: cc.Node,
				node_66: cc.Node,
				node_endless1: cc.Node,
				node_endless2: cc.Node,
				node_tutorial: cc.Node,
				node_tryPlayTip: cc.Node,
				dieAudio: cc.AudioSource,
				earGoldAudio: cc.AudioSource,
				earGoldAudio2: cc.AudioSource,
				videoNotAvailable: cc.Node,
				videoLoading: cc.Node,
				earGoldEffect: cc.Component
			},
			onLoad: function() {
				var e = this;
				o.currentScene = "GamePlay",
				o.isFbPlatform() && window.firstLoadScene && (window.firstLoadScene = !1),
				this.strings = {
					plus: "+",
					miss: "Miss",
					mesh: "mesh",
					block: "block",
					ball: "ball",
					ballMesh: "ballMesh",
					ball_move: "ball_move",
					color_gate: "color_gate",
					gold: "gold",
					shadow: "shadow",
					light: "light",
					finger: "finger",
					arrow_tutorial: "arrow_tutorial"
				},
				o._getGameData ? (this.node.getComponent("GameLanguage").setupLanguage(), this.startLoad(), Ads.isSupport() && (Ads.preloadRewarded(), Ads.preloadInterstitial())) : o.getGameData(function() {
					e.node.getComponent("GameLanguage").setupLanguage(),
					e.startLoad(),
					Ads.isSupport() && (Ads.preloadRewarded(), Ads.preloadInterstitial())
				})
			},
			startLoad: function() {
				var e = this;
				if (window._entryPointData && window._entryPointData.songId) {
					for (var t = parseInt(window._entryPointData.songId), i = 0; i < s.length; i++) if (s[i].acm_id == t) {
						this.currentSong = s[i],
						o.setLastPlaySong(s[i]);
						break
					}
				} else this.currentSong = o.getLastPlaySong(),
				this.currentSong || (this.currentSong = s[0], o.setLastPlaySong(this.currentSong));
				this.isTutorial = !o.GameData.playTutorial,
				this.node_warningConnect.active = !1,
				this.node_loading.active = !0,
				this.node_loading.opacity = 255,
				this.scheduleOnce(function() {
					e.node_loading.active && (e.node_warningConnect.active = !0)
				},
				17),
				this.node.getComponent("ThemeManager").loadrandDomTheme(function() {
					e.startLoad2()
				})
			},
			startLoad2: function() {
				a.ResetRandom(),
				this.camera && this.player && this.prefab_obstacle && this.obs_root && this.lb_count && (this.isLoading = !0, this.isRun = !1, this.initUI(), this.onLoad2())
			},
			onLoad2: function() {
				this.loadSongLocal()
			},
			loadSongLocal: function() {
				var e = this;
				this.lb_namesong.string = this.currentSong.name;
				var t;
				t = "bin" == this.currentSong.source ? "https://beat-hopper.firebaseapp.com/FacebookSongs/Musics/" + this.currentSong.path: "raw" == this.currentSong.source ? "https://beat-hopper.firebaseapp.com/FacebookSongs/Musics/" + this.currentSong.path: "https://beat-hopper.firebaseapp.com/Songs/MIDI/" + this.currentSong.path,
				this.isLoadAudio = !1,
				this.retryLoadAudio = !1,
				this._audioPlayer = this.node.getComponent("AudioCtrl"),
				this._audioPlayer.preload(t, !1,
				function() {
					cc.log("Load mp3 by HOWLER success"),
					e.isLoadAudio || (o.isFbPlatform(), e.isLoadAudio = !0, e.loadGameData())
				},
				function(t, i) {
					if (e.retryloadSongLocal(t, i), o.isFbPlatform()) {
						var a = {};
						a.path = e.currentSong.path,
						a.msg = i + t
					}
				})
			},
			retryloadSongLocal: function() {
				var e = this;
				if (this.isLoadAudio) return ! 1;
				this.retryLoadAudio = !0;
				var t = "https://gdata.inwavethemes.com/Musics/" + this.currentSong.path,
				i = new XMLHttpRequest;
				i.onload = function() {
					if (200 == i.status) {
						for (var t = new Uint8Array(i.response), a = t.length, n = new Array(a); a--;) n[a] = String.fromCharCode(t[a]);
						var o = n.join(""),
						s = "data:audio/mpeg;base64," + window.btoa(o);
						e._audioPlayer = e.node.getComponent("AudioCtrl"),
						e._audioPlayer.preload(s, !1,
						function() {
							e.isLoadAudio || (e.isLoadAudio = !0, e.loadGameData())
						},
						function() {})
					}
				},
				i.open("GET", t),
				i.responseType = "arraybuffer",
				i.send()
			},
			loadGameData: function() {
				var e = this;
				cc.loader.loadRes("data/game", cc.JsonAsset,
				function(t, i) {
					e.loadGameData2(i.json)
				})
			},
			loadGameData2: function(e) {
				e && e.width && (this.width = e.width, this.height = e.height, this.widthSegments = e.widthSegments, this.heightSegments = e.heightSegments, this.sizeBall = e.sizeBall, this.speed = e.speed, this.hillTop = e.hillTop, this.curveMax = e.curveMax, this.splineTimeUnit = e.splineTimeUnit, this.numSegmentInSpline = e.numSegmentInSpline, this.smoothCamBackground = e.smoothCamBackground, this.splineConfig = e.splineConfig, this.patterns = e.patterns, this.levelDesign = e.levelDesign, this.sizeBallHalf = .5 * this.sizeBall, this.widthHalf = .5 * this.width, this.widthLimitHalf = this.widthHalf - .8 * this.sizeBall, this.player.y = this.sizeBallHalf, this.player_mesh = this.player.getChildByName(this.strings.mesh), this.player_mesh.scaleX = this.sizeBall, this.player_mesh.scaleY = this.sizeBall, this.player_mesh.scaleZ = this.sizeBall, this.ballMesh = this.player_mesh.getChildByName(this.strings.ballMesh), this.ballMeshEulerAngles = this.ballMesh.eulerAngles, this.cameraChild = this.camera.getChildByName("camera"), this.charactorXaxis = 0, this.loadRoad())
			},
			loadRoad: function() {
				if (this.jsonRoad) this.loadRoad2(this.jsonRoad);
				else {
					var e = this;
					if ("bin" == this.currentSong.source) {
						var t = "https://gdata.inwavethemes.com/Midi/" + this.currentSong.path.replace(".mp3", ".bin");
						window.AmaSdk.fromUrl(t).then(function(e) {
							return e.json
						}).then(function(t) {
							e.loadRoad2(t)
						}).
						catch(function() {})
					} else if ("raw" == this.currentSong.source) {
						var i = "https://beat-hopper.firebaseapp.com/FacebookSongs/Midi/" + this.currentSong.path.replace(".mp3", ".json");
						cc.assetManager.loadRemote(i,
						function(t, i) {
							t || e.loadRoad2(i.json.notes)
						})
					} else {
						var a = "https://beat-hopper.firebaseapp.com/FacebookSongs/Midi/" + this.currentSong.path.replace(".mp3", ".txt");
						cc.assetManager.loadRemote(a,
						function(t, i) {
							if (t);
							else {
								var a = n.AES.decrypt(i.text, "-_zVWQcu_-7s;9dE").toString(n.enc.Utf8),
								o = JSON.parse(a);
								e.loadRoad2(o)
							}
						})
					}
				}
			},
			loadRoad2: function(e) {
				var t = this;
				a.GenObsDancerRoad.loadRoadWithMidi(this, e),
				this.ballID = o.getBallID(),
				-1 == this.ballID ? this.initRoad() : cc.assetManager.loadBundle("balls",
				function(e, i) {
					if (e) return console.error(e);
					i.loadDir("ball" + t.ballID, cc.SpriteFrame,
					function(e, a) {
						t.ballSpriteFrames = o.sortBundleSprites(a, t.ballID),
						t.ballID > 0 ? i.loadDir("ballMaterial" + t.ballID, cc.Material,
						function(e, i) {
							t.ballMaterials = o.sortBundleMaterials(i, t.ballID),
							t.initRoad()
						}) : t.initRoad()
					})
				})
			},
			initRoad: function() {
				var e = this;
				this._eulerAngles = cc.v3( - 20, 0, 0),
				this.p1 = cc.v3(),
				this.p2 = cc.v3(),
				this.p3 = cc.v3(),
				this.roads_root.removeAllChildren(!0),
				this.lastzIndex = cc.macro.MAX_ZINDEX,
				this.colorList || ( - 1 == this.ballID ? (this.colorList = [new cc.Color(169, 0, 255, 255), new cc.Color(255, 42, 0, 255), new cc.Color(86, 255, 0, 255), new cc.Color(0, 213, 255, 255)], this.colorGateList = this.colorList) : 0 == this.ballID ? (this.colorList = [new cc.Color(252, 20, 40, 255), new cc.Color(57, 219, 242, 255), new cc.Color(245, 223, 15, 255)], this.colorGateList = this.colorList) : 1 == this.ballID ? (this.colorList = [new cc.Color(169, 0, 255, 255), new cc.Color(57, 219, 242, 255), new cc.Color(245, 223, 15, 255)], this.colorGateList = this.colorList) : 2 == this.ballID || 3 == this.ballID ? (this.colorList = [new cc.Color(169, 0, 255, 255), new cc.Color(245, 223, 15, 255), new cc.Color(57, 219, 242, 255), new cc.Color(252, 20, 40, 255)], this.colorGateList = [new cc.Color(169, 0, 255, 255), new cc.Color(245, 223, 15, 255), new cc.Color(57, 219, 242, 255), new cc.Color(246, 50, 127, 255)]) : 10 != this.ballID && 16 != this.ballID && 9 != this.ballID || (this.colorList = [new cc.Color(169, 0, 255, 255), new cc.Color(245, 223, 15, 255), new cc.Color(57, 219, 242, 255), new cc.Color(246, 30, 90, 255)], this.colorGateList = [new cc.Color(169, 0, 255, 255), new cc.Color(248, 205, 0, 255), new cc.Color(0, 173, 241, 255), new cc.Color(255, 24, 209, 255)])),
				this.currentColor ? this.currentColor = (this.currentColor + 1) % this.colorList.length: this.currentColor = l(0, this.colorList.length - 1),
				this.currentPlayerColor = this.currentColor;
				for (var t = this.roads,
				a = i.Plane(this.widthSegments, this.heightSegments, {
					widthSegments: this.widthSegments,
					lengthSegments: this.heightSegments
				}), n = a.positions, s = 0; s < t.length; s++) {
					var c = t[s];
					c.active ? c.vertexes = a.getVertices(this.width, c.eCurve, c.eHill, c.fromZ, c.toZ) : c.eHill(1) < .2 * this.hillTop && (c.vertexes = a.getVertices(this.width, c.eCurve,
					function() {
						return 0
					},
					c.fromZ, c.toZ))
				}
				this.segments = [],
				this.iSegment = -1,
				this.obsWaitSpawn = [];
				for (var r = this.iSegment; r < t.length && r < 7; r++) {
					var h = cc.instantiate(this.prefab_segment);
					this.roads_root.addChild(h, t.length - r),
					h.name = "road_" + r,
					h.z = 0,
					this.lastzIndex--,
					h.zIndex = this.lastzIndex;
					var d = h.getComponent("segments-texture");
					d.obj = h,
					d.refRoad = r,
					d.width = this.width,
					d.height = this.height,
					d.widthSegments = this.widthSegments,
					d.heightSegments = this.heightSegments,
					d.refPos = a.refPos,
					d.initWithMesh(n, a),
					this.applyCurveAndHill(d),
					this.segments.push(d),
					this.applyObstacle(r)
				}
				if (this.nextTimeSpawn = 0, this.tutorialTime = this.roundTime / 3, this.time = 0, this.undyingTime = 0, this.round = 0, this.initObsCache(), this.spawnObs( - 1), this.playerX = 0, this.lastPlayerX = 0, this.playerXSmooth = 0, this.camXSmooth = 0, this.sensertive = .0325, this.songDuration = this._audioPlayer.DurationTime() - .1, this.songDuration > this.roundTime && (this.songDuration = this.roundTime - .1), this.initCombo(), this.revice_count = 0, this.revice_max = 3, this.clickStartRound = !1, this.player.z = 0, this.camera_background_Y = 0, this.currentSpeed = 1, this.updateZPlayer(this.player.z, !0), o.isFbPlatform() && FBInstant.onPause(function() {
					e.pauseGame()
				}), this.waitToStart = !0, this.waitToRevive = !1, this.isPauseGame = !1, this.isWaitToResumeGame = !1, !this.canvasOnTouch) {
					var u = cc.find("Canvas/UI");
					this.canvasOnTouch = u,
					u.on(cc.Node.EventType.TOUCH_START,
					function() {
						this.node_tutorial.active || this.isLoadAudio && (this.isLoading || (this.isWaitToResumeGame && (this.isWaitToResumeGame = !1, this.resumeGame()), this.isPauseGame || (this.waitToStart && (this.waitToStart = !1, this.startRound()), this.waitToRevive && (this.waitToRevive = !1, this.reviveRoundAccept()))))
					},
					this),
					u.on(cc.Node.EventType.TOUCH_MOVE,
					function(e) {
						if (this.isLoadAudio) {
							var t = e.touch.getLocation().x - e.touch.getPreviousLocation().x;
							this.isWinGame || this.dragX(t * this.sensertive * this.currentSpeed)
						}
					},
					this),
					u.on(cc.Node.EventType.TOUCH_END,
					function() {
						this._touchInput = !1
					},
					this),
					u.on(cc.Node.EventType.TOUCH_CANCEL,
					function() {
						this._touchInput = !1
					},
					this);
					var p = this;
					cc.game.on(cc.game.EVENT_HIDE,
					function() {
						cc.log("EVENT HIDE!"),
						p.pauseGame()
					}),
					cc.game.on(cc.game.EVENT_SHOW,
					function() {
						cc.log("EVENT SHOW!"),
						p.pauseGame()
					})
				}
				this.trailTexture || (this.trailTexture = this.player_trail.getComponent("trail-texture")),
				this.trailTexture.reset(cc.v3(this.player.x, this.player.y, this.player.z)),
				this.initColourBallMain(),
				this.applyColourBallMain(),
				this.updatePlayerJump(),
				this.initTipAni();
				var m = this.getPosInRoad(this.roadEnd);
				this.node_gate.x = m.x,
				this.node_gate.y = m.y,
				this.node_gate.z = m.z;
				var g = this.getPosInRoad(.33 * this.roundEnd);
				this.node_33.x = g.x,
				this.node_33.y = g.y,
				this.node_33.z = g.z;
				var v = this.getPosInRoad(.66 * this.roundEnd);
				this.node_66.x = v.x,
				this.node_66.y = v.y,
				this.node_66.z = v.z;
				var f = this.getPosInRoad(this.roundEnd);
				this.node_endless1.x = f.x,
				this.node_endless1.y = f.y,
				this.node_endless1.z = f.z;
				var y = this.getPosInRoad(2 * this.roundEnd);
				this.node_endless2.x = y.x,
				this.node_endless2.y = y.y,
				this.node_endless2.z = y.z,
				this.iSegment_check = 0,
				this.obs_list_check = null,
				this.isAudioPlayerPlay = !1,
				this.progressBar = this.node_progressbar.getComponent("ProgressBar"),
				this.progressBar.reset(),
				this.updateProgressBar(),
				this.node_loading.opacity = 255,
				this.node_loading.runAction(cc.sequence(cc.fadeTo(.3, 0), cc.callFunc(function() {
					e.node_loading.active = !1,
					e.isLoading = !1
				}))),
				this.isTutorial && !o.GameData.showPopupTutorial ? this.node_tutorial.active = !0 : this.node_tutorial.active = !1,
				this.node_warningConnect.active = !1
			},
			closeNodeTutorial: function() {
				this.playClickSound(),
				this.node_tutorial.active = !1,
				o.GameData.showPopupTutorial = 1,
				o.storeGameData("showPopupTutorial", 1)
			},
			closeTryPlayTip: function() {
				this.playClickSound(),
				this.node_tryPlayTip.active = !1,
				o.GameData.showPopupTryPlay = 1,
				o.storeGameData("showPopupTryPlay", 1)
			},
			getPosInRoad: function(e, t) {
				var i = Math.floor(e / this.height);
				i < 0 && (i = 0),
				i >= this.roads.length && (i = this.roads.length - 1);
				var a = e - i * this.height,
				n = this.roads[i],
				o = a / this.height;
				if (!t) return cc.v3(n.eCurve(o), n.eHill(o), e);
				t.x = n.eCurve(o),
				t.y = n.eHill(o),
				t.z = e
			},
			update: function(e) {
				if (!this.isPauseGame) if (this.node_tip.active && this.updateTip(e), this.isWinGame) this.updateWinGame(e);
				else if (this.segments && this.isRun) if (this.ballID > 0 && (this.ballMeshEulerAngles.z += 500 * e * this.currentSpeed, this.ballMesh.eulerAngles = this.ballMeshEulerAngles), this._totalTime = this.time * (this.round + 1), this._totalTime >= this.timeEnd - 1.2 && !this.playedWinGameFx && (this.playWinGameFx(), this.playedWinGameFx = !0), this._totalTime >= this.timeEnd) this.winGame();
				else {
					if (this.dt = e / .016, this.dt > 1 && (this.dt = 1), this.time += e * this.currentSpeed, this.round <= 1 && this.time.toFixed(1) == this.roundTimeToFix && !this.incSpeed && (this.time = 0, this.nextTimeSpawn = 0, this.undyingTime = 0, this.round++, this._audioPlayer.playAudio(null), this.incSpeed = !0, this.revice_max++), this.time > .2 && this.time < this.roundTime - 5) {
						var t = this._audioPlayer.CurrentTime(),
						i = t - this.time;
						t > 0 && Math.abs(i) >= .03 && (this.time = this.time + .05 * i)
					}
					this.lastPos = this.player.getPosition(),
					this.player.z = this.round * this.roundEnd + this.time * this.roadEnd / this.timeEnd,
					this.updateZPlayer(this.player.z, !1),
					this.time.toFixed(1) == this.songDuration.toFixed(1) && this.round <= 1 && this._audioPlayer.playing() && (this._audioPlayer.pauseAudio(), this._audioPlayer.SetTime(0), this.currentSpeed += .2, this._audioPlayer.SetSpeed(this.currentSpeed), this.incSpeed = !1),
					this.nextPos = this.player.getPosition(),
					this.updateBallMove(),
					this.checkObstacle(this.lastPos, this.nextPos),
					this.nextPos.y < this.lastPos.y && 0 == this.nextPos.y && this.beginJump(.7, .1),
					this.updateRenderRoad(),
					this.updateTrailTexture(),
					this.updateUI(),
					this.updatePlayerJump(),
					this.updateProgressBar()
				}
			},
			updateZPlayer: function(e) {
				this.getPosInRoad(e, this.p1),
				this.getPosInRoad(e + 50, this.p2),
				this.player.z = this.p1.z,
				this.playerXSmooth += .2 * (this.playerX - this.playerXSmooth),
				this.camXSmooth += .03 * (this.playerX - this.camXSmooth),
				this.player.x = this.p1.x + this.playerXSmooth,
				this.player.y = this.p1.y;
				var t = this.p2.x - this.p1.x;
				this.getPosInRoad(e - 80, this.p3),
				this.xDegrees = this.p1.x - this.p3.x,
				this.camera.x = this.p3 ? this.p3.x + this.camXSmooth: this.p1.x + this.camXSmooth,
				this.camera.y = this.player.y + 15,
				this.camera.z = this.player.z - 80,
				this.camera.eulerAngles = cc.v3( - 7, 180 + t, 0),
				this.camera_background_Y += t * this.smoothCamBackground,
				this._eulerAngles.y = 180 + this.camera_background_Y,
				this.camera_background.eulerAngles = this._eulerAngles
			},
			updateTrailTexture: function() {
				this.trailTexture.addTrail(cc.v3(this.player.x, this.player.y + this.player_mesh.y - this.sizeBallHalf, this.player.z), this.xDegrees / 4)
			},
			updateRenderRoad: function() {
				if (! (this.player.z <= this.height)) {
					var e = Math.floor(this.player.z / this.height) - 1;
					if (e > this.iSegment && this.segments && this.segments.length > 0) {
						e = this.iSegment + 1;
						var t = this.segments[0].refRoad + this.segments.length,
						i = this.segments.shift();
						i.refRoad = t,
						this.applyCurveAndHill(i),
						this.iSegment = e,
						this.segments.push(i),
						i.obj.zIndex = this.roads.length - t,
						this.applyObstacle(t)
					}
					this.spawnObs(1)
				}
			},
			dragX: function(e) {
				this.playerX -= e,
				this.playerX > this.widthLimitHalf ? this.playerX = this.widthLimitHalf: this.playerX < -this.widthLimitHalf && (this.playerX = -this.widthLimitHalf)
			},
			startRound: function() {
				var e = this;
				if (this.clickStartRound) return ! 1;
				this._audioPlayer.playAudio(function() {
					e.bt_start.active = !1,
					e.bt_nextsong.active = !1,
					e.node_tip.active = !1,
					e.node_tryPlayTip.active = !1,
					e.isRun = !0
				}),
				this.clickStartRound = !0
			},
			nextSong: function() {
				this.indexSong = (this.indexSong + 1) % this.songList.length,
				this.resetRound()
			},
			nextLevel: function() {
				this.openedSongs = (this.openedSongs + 1) % 5,
				this.bt_nextlevel.children[0].children[0].getComponent(cc.Label).string = "Next Level (" + this.openedSongs + ")",
				this.resetRound()
			},
			resetRound: function() {
				this.segments = null,
				this.roads = null,
				this.trailTexture && this.trailTexture.reset(cc.v3(this.player.x, this.player.y, this.player.z)),
				this._audioPlayer && this._audioPlayer.stopAudio(),
				this.bt_reset_mid.active = !1,
				this.startLoad()
			},
			pauseRound: function() {
				this.isRun = !1,
				this._audioPlayer.pauseAudio()
			},
			initUI: function() {
				this.lb_count.string = "",
				this.lb_coin.getComponent(cc.Label).string = "0",
				this.bt_reset.active = !1,
				this.bt_start.active = !1,
				this.node_revive.active = !1,
				this.node_wingame.active = !1,
				this.bt_nextlevel.active = !1
			},
			updateUI: function() {
				this.lb_count.string = this.count_colider
			},
			applyCurveAndHill: function(e) {
				var t = e.refRoad;
				if (t < 0) {
					var i = this.roads[0],
					a = this.height * t;
					e.applyCurveAndHillShort(i.eCurve, i.eHill, a, a + this.height)
				} else if (t >= this.roads.length) {
					var n = this.roads[this.roads.length - 1],
					o = this.height * t;
					e.applyCurveAndHillShort(n.eCurve, n.eHill, o, o + this.height, 1 + t - this.roads.length)
				} else {
					var s = this.roads[t];
					s.active ? e.applyVertices(s.vertexes) : s.eHill(1) < .2 * this.hillTop && e.applyVertices(s.vertexes)
				}
			},
			applyObstacle: function(e) {
				var t;
				if (! (e < 0 || e >= this.roads.length)) {
					var i = this.roads[e]; (t = this.obsWaitSpawn).push.apply(t, i.obs)
				}
			},
			spawnObs: function(e) {
				if (void 0 === e && (e = -1), !(0 == this.obsWaitSpawn.length || this.ingameObs.length >= 16)) {
					var t = e > 0;
					if (t) {
						if (this.time < this.nextTimeSpawn) return;
						this.nextTimeSpawn = this.time + .2
					}
					var i = this.obsWaitSpawn.length;
					e > 0 && (i = Math.min(i, e));
					for (var n = this.obsWaitSpawn.splice(0, i), o = this.colorList, s = this.obs_root, c = 0; c < n.length; c++) {
						var r = this.currentColor,
						h = n[c],
						d = h.line,
						u = h.obstascleType;
						if (u == a.OBS_TYPE.THREE_BALL) {
							if (t && this.cacheBall.length < 3) return;
							for (var p = 0; p < 3; p++) {
								var m = (3 + p - d) % 3;
								m = o.length + m + r;
								var g = o[m %= o.length],
								v = this.addBall(s, h, p, g, m);
								v && (v.obstascleType = u, v.indexColor = m)
							}
						} else if (u == a.OBS_TYPE.TWO_BALL) {
							if (t && this.cacheBall.length < 2) return;
							var f;
							f = 0 == d ? 0 === l(0, 1) ? 1 : 2 : 1 == d ? 0 === l(0, 1) ? 0 : 2 : 0 === l(0, 1) ? 0 : 1;
							var y = o[r],
							S = this.addBall(s, h, d, y, r);
							S && (S.obstascleType = a.OBS_TYPE.STATIC_REAL_BALL, S.indexColor = r);
							var b = (o.length + r + 1) % o.length,
							w = o[b],
							I = this.addBall(s, h, f, w, b);
							I && (I.obstascleType = a.OBS_TYPE.STATIC_FAKE_BALL, I.indexColor = b)
						} else if (u == a.OBS_TYPE.STATIC_FAKE_BALL) {
							if (t && this.cacheBall.length < 1) return;
							var C = (o.length + r + 1) % o.length,
							A = o[C],
							D = this.addBall(s, h, d, A, C);
							D && (D.obstascleType = u, D.indexColor = C)
						} else if (u == a.OBS_TYPE.STATIC_REAL_BALL) {
							if (t && this.cacheBall.length < 1) return;
							var T = o[r],
							P = this.addBall(s, h, d, T, r);
							P && (P.obstascleType = u, P.indexColor = r)
						} else if (u == a.OBS_TYPE.MOVE_REAL_BALL) {
							if (t && this.cacheBallMove.length < 1) return;
							var R = o[r],
							L = this.addBallMove(s, h, d, R, r);
							L && (L.obstascleType = u, L.indexColor = r)
						} else if (u == a.OBS_TYPE.MOVE_FAKE_BALL) {
							if (t && this.cacheBallMove.length < 1) return;
							var B = (o.length + r + 2) % o.length,
							N = (o[B], this.addBallMove(s, h, d, B));
							N && (N.obstascleType = u, N.indexColor = B)
						} else if (u == a.OBS_TYPE.COLOR_GATE) {
							if (t && this.cacheColorGate.length < 1) return;
							this.currentColor = (this.currentColor + 1) % o.length;
							var O = this.addColorGate(s, h, this.colorGateList[this.currentColor]);
							O.obstascleType = u,
							O.indexColor = this.currentColor
						} else if (u == a.OBS_TYPE.GOLD) {
							if (t && this.cacheGold.length < 1) return;
							this.addObsGold(s, h, d).obstascleType = u
						} else if (u == a.OBS_TYPE.GOLD_IN_BALL) {
							if (t && (this.cacheGold.length < 1 || this.cacheBall.length < 2)) return;
							this.addObsGold(s, h, 1).obstascleType = a.OBS_TYPE.GOLD;
							var x = (o.length + r + 2) % o.length,
							E = o[x],
							k = this.addBall(s, h, 0, E, x);
							k.obstascleType = a.OBS_TYPE.STATIC_FAKE_BALL,
							k.indexColor = x;
							var F = this.addBall(s, h, 2, E, x);
							F.obstascleType = a.OBS_TYPE.STATIC_FAKE_BALL,
							F.indexColor = x
						}
					}
				}
			},
			addBall: function(e, t, i, a, n) {
				var o = this.createBall(e);
				if (!o) return null;
				var s = t.pos ? t.pos.clone() : this.getPosInRoad(t.z);
				return 0 == i ? s.x += -this.widthLimitHalf + .15 * this.sizeBall: 2 == i && (s.x += this.widthLimitHalf - .15 * this.sizeBall),
				o.setPosition(s),
				this.applyColourBallSub(o.children[0], a, n),
				this.lastzIndex--,
				o.zIndex = this.lastzIndex,
				o
			},
			addObsGold: function(e, t, i) {
				var a = this.createGold(e),
				n = t.pos ? t.pos.clone() : this.getPosInRoad(t.z);
				return 0 == i ? n.x += -this.widthLimitHalf + .15 * this.sizeBall: 2 == i && (n.x += this.widthLimitHalf - .15 * this.sizeBall),
				a.setPosition(n),
				this.lastzIndex--,
				a.zIndex = this.lastzIndex,
				a
			},
			addColorGate: function(e, t, i) {
				var a = this.createColorGate(e),
				n = t.pos ? t.pos.clone() : this.getPosInRoad(t.z),
				o = a.eulerAngles;
				return o.y = t.angleDegY,
				a.eulerAngles = o,
				a.setPosition(n),
				-1 == this.ballID ? a.children[0].children[1].color = c.lerp(i, 220 / 255) : a.children[0].children[1].color = i,
				this.lastzIndex--,
				a.zIndex = this.lastzIndex,
				a
			},
			addBallMove: function(e, t, i, a, n) {
				var o = t.pos ? t.pos.clone() : this.getPosInRoad(t.z),
				s = this.widthHalf - this.sizeBall,
				c = o.x - s,
				r = o.x + s;
				0 == i ? o.x = c: 2 == i && (o.x = r);
				var l = this.createBallMove(e, c, r, o);
				return l ? (l.timeAppear = t.timeAppear, l.moveBallOffset = t.moveBallOffset, this.applyColourBallSub(l.children[0], a, n, !0), this.lastzIndex--, l.zIndex = this.lastzIndex, l) : null
			},
			checkObstacle: function(e, t) {
				var i = e.x,
				n = t.x;
				n < i && (i = t.x, n = e.x);
				for (var o = this.sizeBall,
				s = e.z - o,
				c = s - this.height,
				r = t.z + o,
				l = 0; l < this.ingameObs.length;) {
					var h = this.ingameObs[l];
					if (h.z > r) return;
					if (h.z < c) h.moveToCache();
					else {
						if (!h.hasCheckObstacle) if (h.z < s) h.hasCheckObstacle = !0;
						else {
							var d = h.name;
							if (d == this.strings.ball || d == this.strings.ball_move) if (h.x <= n + this.sizeBall && h.x >= i - this.sizeBall) {
								if (this.currentPlayerColor == h.indexColor) {
									h.moveToCache(),
									this.addPoint();
									continue
								}
								if (this.time > this.undyingTime) return h.moveToCache(),
								this.combo = 1,
								void this.lostGame()
							} else {
								var u = h.obstascleType;
								u != a.OBS_TYPE.STATIC_REAL_BALL && u != a.OBS_TYPE.MOVE_REAL_BALL || (h.hasCheckObstacle = !0, this.combo = 1, this.lb_combo.getComponent(cc.Label).string = this.strings.miss, this.lb_combo.opacity = 0, this.lb_combo.scaleX = this.lb_combo.scaleY = this.lb_combo.scaleZ = 1, cc.tween(this.lb_combo).to(.3, {
									scale: 1.2,
									opacity: 255
								}).then(cc.tween().delay(.5).to(.5, {
									opacity: 0
								})).start())
							} else if (d == this.strings.gold) {
								if (h.x <= n + this.sizeBall && h.x >= i - this.sizeBall) {
									this.addCoin(h),
									h.moveToCache();
									continue
								}
								h.hasCheckObstacle = !0,
								this.combo = 1,
								this.lb_combo.getComponent(cc.Label).string = this.strings.miss,
								this.lb_combo.opacity = 0,
								this.lb_combo.scaleX = this.lb_combo.scaleY = this.lb_combo.scaleZ = 1,
								cc.tween(this.lb_combo).to(.3, {
									scale: 1.2,
									opacity: 255
								}).then(cc.tween().delay(.5).to(.5, {
									opacity: 0
								})).start()
							} else d == this.strings.color_gate && (h.hasCheckObstacle = !0, this.currentPlayerColor = h.indexColor, this.applyColourBallMain(), this.beginJump())
						}
						l++
					}
				}
			},
			clearObstacleWhenRevive: function() {
				for (var e = this.player.z + 2 * this.sizeBall,
				t = this.ingameObs,
				i = 0; i < t.length; i++) {
					var a = t[i];
					if (a.z > e) return;
					var n = a.name;
					n != this.strings.ball && n != this.strings.ball_move && n != this.strings.gold || (a.moveToCache(), i--)
				}
			},
			applyColourBallMain: function() {
				var e = this.player_mesh,
				t = this.colorList[this.currentPlayerColor];
				this.applyColourBallSub(e, t, this.currentPlayerColor, !1, !0),
				this.trailTexture.applyColour(t)
			},
			applyColourBallSub: function(e, t, i, a, n) {
				if (this.ballID > 0 && n) {
					var o = e.getChildByName(this.strings.light);
					o.color = r.lerp(t, 100 / 255),
					o.opacity = 80,
					e.getChildByName(this.strings.ballMesh).getComponent(cc.MeshRenderer).setMaterial(0, this.ballMaterials[i]);
					var s = e.getChildByName(this.strings.shadow);
					s.color = c.lerp(t, 200 / 255),
					s.opacity = 100
				} else {
					var l = e.getChildByName(this.strings.ball);
					l.color = c.lerp(t, 200 / 255),
					l.opacity = 255;
					var h = e.getChildByName(this.strings.light),
					d = e.getChildByName(this.strings.shadow);
					d.color = c.lerp(t, 200 / 255),
					d.opacity = 100,
					-1 == this.ballID ? (l.color = c.lerp(t, 200 / 255), l.opacity = 255, h.color = r.lerp(t, 140 / 255), h.opacity = 110) : (l.color = r, l.opacity = 255, h.color = r.lerp(t, 100 / 255), h.opacity = 80, l.getComponent(cc.Sprite).spriteFrame = a ? this.ballSpriteFrames[2 * i + 1] : this.ballSpriteFrames[2 * i])
				}
			},
			initObsCache: function() {
				this.obs_root.removeAllChildren(!0),
				this.ingameObs = [],
				this.cacheBall = [],
				this.cacheBallMove = [],
				this.cacheColorGate = [],
				this.listBallMove = [],
				this.cacheGold = [],
				this.listGold = [];
				for (var e = this.obs_root,
				t = 0; t < 50; t++) this.createBallInit(e);
				for (var i = 0; i < 4; i++) this.createColorGateInit(e);
				for (var a = 0; a < 10; a++) this.createBallMoveInit(e);
				for (var n = 0; n < 10; n++) this.createGoldInit(e)
			},
			removeObjCache: function(e) {
				for (var t = 0; t < this.ingameObs.length; t++) if (this.ingameObs[t].zIndex === e.zIndex) return void this.ingameObs.splice(t, 1)
			},
			createBallInit: function(e) {
				var t = this,
				i = cc.instantiate(this.prefab_obstacle);
				i.name = this.strings.ball;
				var a = i.getChildByName(this.strings.mesh);
				return a.y = this.sizeBallHalf,
				a.scaleX = this.sizeBall,
				a.scaleY = this.sizeBall,
				a.scaleZ = this.sizeBall,
				i.moveToCache = function() {
					i.active = !1,
					t.cacheBall.push(i),
					t.removeObjCache(i)
				},
				e.addChild(i),
				i.active = !1,
				i.hasCheckObstacle = !0,
				this.cacheBall.push(i),
				i
			},
			createBall: function() {
				var e = null;
				return this.cacheBall.length > 0 && (e = this.cacheBall.shift()),
				e ? (e.active = !0, this.ingameObs.push(e), e.hasCheckObstacle = !1, e) : null
			},
			createColorGateInit: function(e) {
				var t = this,
				i = cc.instantiate(this.prefab_colorgate);
				return i.name = this.strings.color_gate,
				i.moveToCache = function() {
					i.active = !1,
					t.cacheColorGate.push(i),
					t.removeObjCache(i)
				},
				e.addChild(i),
				i.active = !1,
				i.hasCheckObstacle = !0,
				this.cacheColorGate.push(i),
				i
			},
			createColorGate: function(e, t) {
				var i = this,
				a = null;
				return this.cacheColorGate.length > 0 && (a = this.cacheColorGate.shift()),
				a ? a.active = !0 : ((a = cc.instantiate(this.prefab_colorgate)).name = this.strings.color_gate, a.moveToCache = function() {
					a.active = !1,
					i.cacheColorGate.push(a),
					i.removeObjCache(a)
				},
				e.addChild(a)),
				t ? (a.active = !1, this.cacheColorGate.push(a)) : this.ingameObs.push(a),
				a.hasCheckObstacle = !1,
				a
			},
			createBallMoveInit: function(e) {
				var t = this,
				i = cc.instantiate(this.prefab_ballmove);
				i.name = this.strings.ball_move;
				var a = i.getChildByName(this.strings.mesh);
				a.y = this.sizeBallHalf + .1,
				a.scaleX = this.sizeBall + .2,
				a.scaleY = this.sizeBall + .2,
				a.scaleZ = this.sizeBall + .2,
				i.moveToCache = function() {
					i.active = !1,
					t.cacheBallMove.push(i),
					t.removeObjCache(i);
					for (var e = 0; e < t.listBallMove.length; e++) if (t.listBallMove[e] === i) {
						t.listBallMove.splice(e, 1);
						break
					}
				},
				e.addChild(i),
				i.active = !1,
				i.hasCheckObstacle = !0,
				this.cacheBallMove.push(i)
			},
			createBallMove: function(e, t, i, a) {
				var n = null;
				return this.cacheBallMove.length > 0 && (n = this.cacheBallMove.shift()),
				n ? (n.active = !0, this.ingameObs.push(n), n.hasCheckObstacle = !1, n.setPosition(a), n.pFrom = t, n.pTo = i, n.pos = a, this.listBallMove.push(n), n) : null
			},
			createGoldInit: function(e) {
				var t = this,
				i = cc.instantiate(this.prefab_gold);
				i.name = this.strings.gold,
				i.moveToCache = function() {
					i.active = !1,
					t.cacheGold.push(i),
					t.removeObjCache(i);
					for (var e = 0; e < t.listGold.length; e++) if (t.listGold[e] === i) {
						t.listGold.splice(e, 1);
						break
					}
				},
				e.addChild(i),
				i.active = !1,
				i.hasCheckObstacle = !0,
				this.cacheGold.push(i)
			},
			createGold: function(e) {
				var t = this,
				i = null;
				if (this.cacheGold.length > 0 && (i = this.cacheGold.shift()), i) i.active = !0;
				else {
					var a = cc.instantiate(this.prefab_gold);
					a.name = this.strings.gold,
					a.moveToCache = function() {
						a.active = !1,
						t.cacheGold.push(a),
						t.removeObjCache(a);
						for (var e = 0; e < t.listGold.length; e++) if (t.listGold[e] === a) {
							t.listGold.splice(e, 1);
							break
						}
					},
					e.addChild(a),
					a.active = !1,
					a.hasCheckObstacle = !0
				}
				return this.ingameObs.push(i),
				i.hasCheckObstacle = !1,
				this.listGold.push(i),
				i
			},
			updateBallMove: function() {
				for (var e = 0; e < this.listBallMove.length; e++) {
					var t = (this.listBallMove[e].timeAppear - this.time) / 1.6; (t -= Math.floor(t)) < .5 ? t *= 2 : t = 1 - 2 * (t - .5);
					var i = this.listBallMove[e],
					a = i.pTo - i.pFrom,
					n = void 0; (n = this.listBallMove[e].moveBallOffset ? i.pTo - a * t: i.pFrom + a * t) > i.pTo && (n -= a),
					i.x = n
				}
			},
			beginJump: function(e, t) {
				void 0 === e && (e = 1.9),
				void 0 === t && (t = .5),
				this.player_mesh.jump_y && this.player_mesh.jump_y > 0 || (this.player_mesh.jump_y = 0, this.player_mesh.jump_VyMax = e, this.player_mesh.jump_VyA = t, this.player_mesh.jump_Vy = this.player_mesh.jump_VyMax, this.player_mesh.jump_Vy_Next = e / 2)
			},
			updatePlayerJump: function() {
				var e = this.player_mesh;
				e.jump_VyMax ? ((e.jump_Vy > 0 || e.jump_y > 0) && (e.jump_y += e.jump_Vy, e.jump_Vy -= e.jump_VyA * this.dt, e.jump_Vy < -e.jump_VyMax && (e.jump_Vy = -e.jump_VyMax), e.jump_y <= 0 && (e.jump_y = 0, e.jump_Vy_Next > 0 ? (e.jump_Vy = e.jump_Vy_Next, e.jump_Vy_Next = 0) : e.jump_Vy = 0)), e.y = this.sizeBallHalf + e.jump_y) : e.y = this.sizeBallHalf
			},
			initCombo: function() {
				if (this.coin = 0, this.count_colider = 0, this.count_star = 0, this.combo = 1, this.lb_mid.opacity = 0, this.lb_combo.opacity = 0, !this.strCombo) if (o.isSupportLanguage()) {
					var e = o.getI18n();
					this.strCombo = [e.t("game.combo.Good"), e.t("game.combo.Great"), e.t("game.combo.Awesome"), e.t("game.combo.Marvellous"), e.t("game.combo.Perfect"), e.t("game.combo.Incredible"), e.t("game.combo.Fantastic"), e.t("game.combo.Amazing"), e.t("game.combo.Outstanding"), e.t("game.combo.Excellent"), e.t("game.combo.Exciting"), e.t("game.combo.Brilliant")],
					this.strings.miss = e.t("game.miss")
				} else this.strCombo = ["Good", "Great", "Awesome", "Marvellous", "Perfect", "Incredible", "Fantastic", "Amazing", "Outstanding", "Excellent", "Exciting", "Brilliant"]
			},
			addPoint: function() {
				var e = this,
				t = this.combo > 20 ? 20 : this.combo;
				if (this.count_colider += t, cc.tween(this.lb_count.node).to(.07, {
					scale: 1.4
				}).to(.07, {
					scale: 1
				}).start(), this.combo += 1, this.applyLbMid(this.strings.plus + t), this.combo > 1 && (this.combo - 1) % 4 == 0) {
					var i = l(0, this.strCombo.length - 1);
					this.lb_combo.getComponent(cc.Label).string = this.strCombo[i],
					cc.tween(this.lb_combo).to(.2, {
						scale: 1.2,
						opacity: 255
					}).then(cc.tween().delay(.3).to(.2, {
						scale: 1,
						opacity: 0
					})).start()
				}
				this.player_fx.children.forEach(function(t) {
					var i = t.getComponent(cc.ParticleSystem3D);
					i.startColor.color = e.colorList[e.currentPlayerColor],
					i.stop(),
					i.play()
				})
			},
			addCoin: function() {
				var e = this;
				this.player_fx.children.forEach(function(t) {
					var i = t.getComponent(cc.ParticleSystem3D);
					i.startColor.color = e.colorList[e.currentPlayerColor],
					i.stop(),
					i.play()
				}),
				this.coin++,
				this.lb_coin.getComponent(cc.Label).string = this.coin
			},
			playWinGameFx: function() {
				this.node_gate.children.forEach(function(e) {
					e.getComponent(cc.ParticleSystem3D).play()
				})
			},
			winGame: function() {
				this.bt_reset.active = !1,
				this.isWinGame = !0,
				this.timeWinGameMax = 1.7,
				this.timeWinGame = this.timeWinGameMax
			},
			updateWinGame: function(e) {
				this.timeWinGame <= 0 || (this.time += e * this.currentSpeed, this.player.z = this.round * this.roundEnd + this.time * this.roadEnd / this.timeEnd, this.updateZPlayer(this.player.z, !1), this.updateBallMove(), this.updateRenderRoad(), this.timeWinGame -= e, this.timeWinGame <= 0 && (this.timeWinGame = 0, this.isWinGame = !1, this.player_trail.active = !1, this.pauseRound(), this.node_endGame.active = !0))
			},
			lostGame: function() {
				var e = this;
				this.dieAudio.play(),
				this.count_colider++;
				var t = this.colorList[this.currentPlayerColor];
				if (this.ballID > 0) this.ballMesh.active = !1;
				else {
					var i = this.player_mesh.getChildByName(this.strings.ball);
					i.color = t,
					i.opacity = 255,
					i.runAction(cc.fadeTo(1, 0))
				}
				this.player_mesh.getChildByName("nova_blue_2").children.forEach(function(e) {
					var t = e.getComponent(cc.ParticleSystem3D);
					t.stop(),
					t.play()
				});
				var a = this.player_mesh.getChildByName(this.strings.shadow),
				n = this.player_mesh.getChildByName(this.strings.light);
				a.active = !1,
				n.active = !1,
				this.player_trail.active = !1,
				this.pauseRound(),
				this.bt_reset.active = !1;
				var s = cc.delayTime(1),
				c = cc.callFunc(function() {
					o.getCoin() >= 10 && e.revice_count < e.revice_max ? e.node_continuePlay.active = !0 : e.node_endGame.active = !0
				},
				this);
				this.node.runAction(cc.sequence(s, c))
			},
			initColourBallMain: function() {
				this.player_mesh.getChildByName(this.strings.shadow).active = !0;
				var e = this.player_mesh.getChildByName(this.strings.ball);
				this.ballID > 0 ? (this.ballMesh.active = !0, e.active = !1) : (this.ballMesh.active = !1, e.active = !0, e.opacity = 255),
				this.player_mesh.getChildByName(this.strings.light).active = !0,
				this.player_trail.active = !0,
				e.stopAllActions()
			},
			reviveRound: function() {
				if (this._audioPlayer.pauseAudio(), this.node_revive.active = !1, this.applyColourBallMain(), this.playerX = 0, this.playerXSmooth = 0, this.camXSmooth = 0, this.updateZPlayer(this.player.z, !0), this.trailTexture.reset(cc.v3(this.player.x, this.player.y, this.player.z)), this.clearObstacleWhenRevive(), this.undyingTime = this.time + 4.8, this.waitToRevive = !0, this.ballID > 0) this.ballMesh.active = !0;
				else {
					var e = this.player_mesh.getChildByName(this.strings.ball);
					e.opacity = 0,
					e.runAction(cc.fadeTo(.2, 255))
				}
				this.player_mesh.getChildByName(this.strings.shadow).active = !0,
				this.player_mesh.getChildByName(this.strings.light).active = !0,
				this.player_trail.active = !0,
				this.node_tip.active = !0,
				this.clickreviveRound = !1
			},
			reviveRoundAccept: function() {
				var e = this;
				if (this.clickreviveRound) return ! 1;
				this._audioPlayer.resumeAudio(function() {
					e.revice_count++,
					e.bt_start.active = !1,
					e.bt_nextsong.active = !1,
					e.node_tip.active = !1,
					e.time = e._audioPlayer.CurrentTime(),
					e.isRun = !0,
					cc.tween(e.player_mesh).repeat(6, cc.tween().delay(.2).to(.2, {
						opacity: 0
					}).delay(.2).to(.2, {
						opacity: 255
					})).start()
				}),
				this.clickreviveRound = !0
			},
			applyLbMid: function(e) {
				this.lb_mid.getComponent(cc.Label).string = e,
				this.lb_mid.opacity = 0,
				this.lb_mid.scaleX = this.lb_mid.scaleY = this.lb_mid.scaleZ = 1,
				cc.tween(this.lb_mid).to(.3, {
					scale: 1.2,
					opacity: 255
				}).then(cc.tween().to(.5, {
					opacity: 0
				})).start()
			},
			initTipAni: function() {
				var e = this;
				if (this.node_tip.active = !0, this.dtAni = 0, !this.isInitTipAni) {
					this.isInitTipAni = !0;
					for (var t = function(t) {
						var i = e.node_tip.getChildByName("arrow_" + t);
						i.opacity = 0;
						var a = .7 * cc.winSize.width;
						t % 2 == 1 && (a = -a);
						var n = cc.v2(i.x, i.y),
						o = cc.v2(i.x + a, i.y),
						s = cc.spawn(cc.moveTo(.01, n), cc.fadeTo(.01, 0)),
						c = cc.spawn(cc.moveTo(.69, o), cc.fadeIn(.5)),
						r = cc.repeatForever(cc.sequence(s, c));
						if (t < 2) i.runAction(r);
						else {
							var l = cc.delayTime(.35 - .01),
							h = cc.callFunc(function() {
								i.runAction(r)
							},
							e);
							e.node.runAction(cc.sequence(l, h))
						}
					},
					i = 0; i < 4; i++) t(i)
				}
			},
			updateTip: function(e) {
				var t = this.node_tip.getChildByName(this.strings.finger);
				this.dtAni += e,
				t.x = Math.sin(this.dtAni) * cc.winSize.width * .3
			},
			loadAmaEvents: function() {
				this.AmaEvents || (this.AmaEvents = e("../libs/AMAEvents"));
				var t = this.AmaEvents;
				if (t) {
					this.addEvenHanderAmanote(),
					t.LoadingGameEnd();
					var i = t.GetSongID();
					"" == i || null == i ? (cc.log("ShowSongList"), t.ShowSongList()) : (cc.log("songID=" + i), this.songID = i, t.ReactDownloadSong(i))
				} else cc.log("Not found AmaEvents")
			},
			addEvenHanderAmanote: function() {
				if (!this.isAddEvenHanderAmanote) {
					this.isAddEvenHanderAmanote = !0;
					var e = this;
					document.addEventListener("show_song_list_result",
					function(t) {
						var i = JSON.parse(t.detail).songID;
						cc.log("songID=" + i),
						e.songID = i,
						e.AmaEvents.ReactDownloadSong(i)
					}),
					document.addEventListener("response_download_song",
					function(t) {
						e.onResponseDownloadSong(t)
					}),
					document.addEventListener("show_taptoplay_screen_action",
					function() {
						cc.log("show_taptoplay_screen_action")
					}),
					document.addEventListener("show_continue_screen_action",
					function(t) {
						var i = JSON.parse(t.detail).action;
						switch (cc.log("show_continue_screen_action action=" + i), i) {
						case "timeout":
							e.AmaEvents.ShowInterAds();
							break;
						case "continue":
							e.AmaEvents.ShowRewardAds()
						}
					}),
					document.addEventListener("show_result_screen_action",
					function(t) {
						var i = JSON.parse(t.detail).action;
						switch (cc.log("show_result_screen_result action=" + i), i) {
						case "songselect":
							e.node_loading.active = !0,
							e.node_loading.opacity = 255,
							e.AmaEvents.ShowSongList();
							break;
						case "retry":
							e.resetRound();
							break;
						case "tryothergame":
							e.AmaEvents.ShowOtherGame(e.songID)
						}
					}),
					document.addEventListener("onAdsRewardSuccess",
					function() {
						cc.log("onAdsRewardSuccess"),
						e.reviveRound()
					}),
					document.addEventListener("onAdsRewardFailed",
					function(t) {
						JSON.parse(t.detail),
						cc.log("onAdsRewardFailed !"),
						e.AmaShowResultScreen()
					}),
					document.addEventListener("onAdsInterstitialsSuccess",
					function() {
						cc.log("onAdsInterstitialsSuccess action="),
						e.AmaShowResultScreen()
					}),
					document.addEventListener("onAdsInterstitialsFailed",
					function() {
						cc.log("onAdsInterstitialsFailed action="),
						e.AmaShowResultScreen()
					}),
					document.addEventListener("OnAppBackground",
					function() {
						cc.log("OnAppBackground"),
						e.pauseGame()
					}),
					document.addEventListener("OnAppForeground",
					function() {
						cc.log("OnAppForeground"),
						e.pauseGame()
					}),
					document.addEventListener("onPauseGame",
					function() {
						cc.log("onPauseGame"),
						e.pauseGame()
					}),
					document.addEventListener("onResumeGame",
					function() {
						cc.log("onResumeGame"),
						e.pauseGame()
					})
				}
			},
			onResponseDownloadSong: function(e) {
				var t = JSON.parse(e.detail);
				cc.log("onResponseDownloadSong ", t);
				var i = d("openedSongIDs"),
				a = "" !== i ? i.split("|") : []; (a = a.filter(function(e) {
					return e && "" !== e
				})).length < 5 && -1 == a.indexOf(t.songData.songID) && h("openedSongIDs", i = "" !== i ? i + "|" + t.songData.songID: t.songData.songID, 365);
				var n = this;
				window.AmaSdk.fromUrl(t.levelUrl).then(function(e) {
					return e.json
				}).then(function(e) {
					n.jsonRoad = e;
					var i = n.songID;
					n.lb_namesong.string = i.replace("_", " "),
					n._audioUrl = t.mp3Url,
					n.isLoadAudio = !1,
					n._audioPlayer = n.node.getComponent("AudioCtrl"),
					n._audioPlayer.preload(n._audioUrl, !1,
					function() {
						cc.log("Load mp3 success"),
						n.isLoadAudio = !0,
						n.onLoad()
					},
					function(e) {
						cc.log("Can not load  audio : " + e)
					})
				})
			},
			updateDataRoad: function() {
				var e = this.songID,
				t = JSON.stringify(this.jsonRoad);
				if (e && t) {
					var i = new XMLHttpRequest,
					a = "https://rnfirebase-95107.firebaseio.com/" + e + ".json";
					i.onreadystatechange = function() {
						4 == i.readyState && i.status >= 200 && i.status < 400 && cc.log("Upload success json", a)
					},
					i.open("PUT", a, !0),
					i.send(t)
				}
			},
			AmaShowTapToPlay: function() {
				var e = this.AmaEvents;
				e && e.ShowTapToPlay()
			},
			AmaShowContinueScreen: function() {
				var e = this.AmaEvents;
				e && e.ShowContinueScreen()
			},
			AmaEndGame: function() {
				var e = this.AmaEvents;
				if (e) {
					this._audioPlayer.pauseAudio();
					var t = cc.delayTime(.1),
					i = cc.callFunc(function() {
						e.ShowInterAds()
					},
					this);
					this.node.runAction(cc.sequence(t, i))
				}
			},
			AmaShowResultScreen: function() {
				var e = this,
				t = this.AmaEvents;
				if (t) {
					this._audioPlayer.pauseAudio();
					var i = cc.delayTime(.1),
					a = cc.callFunc(function() {
						t.ShowResultScreen(e.count_colider, 0, 0, e.count_star)
					},
					this);
					this.node.runAction(cc.sequence(i, a))
				}
			},
			pauseGame: function() {
				this.isRun && (this.isWaitToResumeGame = !0, this.isPauseGame = !0, this._audioPlayer.pauseAudio(), this.node_tip.active = !0)
			},
			resumeGame: function() {
				var e = this;
				this._audioPlayer.resumeAudio(function() {
					e.node_tip.active = !1,
					e.time = e._audioPlayer.CurrentTime(),
					e.isPauseGame = !1
				})
			},
			updateProgressBar: function() {
				this.round < 1 && (this.count_star = this.progressBar.updateProgressBar(this.time + .1, this.roundTime))
			},
			playClickSound: function() {
				this.node.getComponent(cc.AudioSource).play()
			},
			getNextSongs: function() {
				for (var e = [], t = 999, i = o.getCoin(), a = 0; a < s.length && (s[a].acm_id == this.currentSong.acm_id ? t = a: a > t && s[a].country == this.currentSong.country && (("VIDEO" == s[a].type || "OPEN" == s[a].type) && !o.getSongData(s[a].acm_id) || "COIN" == s[a].type && s[a].coin <= i && !o.getSongData(s[a].acm_id)) && e.push(s[a]), !(e.length >= 1)); a++);
				if (e.length < 2) for (var n = 0; e.length <= 1 && n < s.length;) {
					var c = Math.floor(Math.random() * (t + 1)),
					r = s[c];
					r.country == this.currentSong.country && r.acm_id != this.currentSong.acm_id && o.getSongData(r.acm_id) && (r.songData = !0, e.push(r)),
					n++
				}
				return e
			},
			showVideoNotAvailable: function(e) {
				void 0 === e && (e = null),
				this._closeNotAvailableCB = e,
				this.videoNotAvailable.active = !0
			},
			closeVideoNotAvailable: function() {
				this.playClickSound(),
				this.videoNotAvailable.active = !1,
				this._closeNotAvailableCB && (this._closeNotAvailableCB(), this._closeNotAvailableCB = null)
			}
		}),
		cc._RF.pop()
	},
	{
		"../libs/AMAEvents": "AMAEvents",
		"./CryptoJS": "CryptoJS",
		"./Helper": "Helper",
		"./SongLists": "SongLists",
		"./gen-obs": "gen-obs",
		"./segments-texture": "segments-texture"
	}],
	"gen-obs": [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "02b7dtpPLxAuq4CZfR95kyd", "gen-obs"),
		i.__esModule = !0,
		i.ResetRandom = function() {},
		i.GenObsDancerRoad = i.OBS_TYPE = void 0;
		var a = e("./Helper");
		function n() {
			return (n = Object.assign ||
			function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var i = arguments[t];
					for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
				}
				return e
			}).apply(this, arguments)
		}
		var o = e("./segments-texture").EasingFunctions;
		function s(e, t) {
			return Math.floor(Math.random() * (t + 1)) + e
		}
		function c() {
			return 0 === Math.floor(2 * Math.random())
		}
		var r = {
			NON_BALL: 0,
			THREE_BALL: 1,
			COLOR_GATE: 2,
			BREAK: 3,
			STATIC_FAKE_BALL: 4,
			MOVE_FAKE_BALL: 5,
			FOUR_BALL: 6,
			TROLL_GATE: 7,
			STATIC_REAL_BALL: 8,
			MOVE_REAL_BALL: 9,
			MISTERY_BOX: 11,
			TWO_BALL: 12,
			GOLD: 13,
			GOLD_IN_BALL: 14
		};
		i.OBS_TYPE = r;
		var l = {
			loadRoadWithMidi: function(e, t) {
				var i = [];
				if ("bin" == e.currentSong.source) for (var o = 0; o < t.tracks.length; o++) {
					var l = t.tracks[o];
					i.push.apply(i, l.notes)
				} else for (var h = 0; h < t.length; h++) t[h].time = t[h].timeAppear,
				i.push(t[h]);
				var d = i[i.length - 1].time,
				u = [];
				if ("bin" == e.currentSong.source) for (var p = 0,
				m = 0; m < i.length - 1; m++) {
					var g = i[m]; ("D4" == g.name || "D5" == g.name) && g.time > 1 && g.time < d - .7 && g.time - p > .2 && (u.push(g), p = g.time)
				} else for (var v = 0,
				f = 0; f < i.length - 1; f++) {
					var y = i[f];
					y.time > 1 && y.time < d - .7 && y.time - v > .2 && (u.push(y), v = y.time)
				}
				var S = [],
				b = e.splineConfig.limitTimeBetweenSpline,
				w = e.splineConfig.limitTimeJump,
				I = .5 * e.splineConfig.timeJump,
				C = b,
				A = 0,
				D = [],
				T = {
					StartTime: 0,
					EndTime: 0,
					data: [],
					indexJump: 0
				};
				D.push(T);
				for (var P = 1; P < u.length; P++) {
					var R = u[P],
					L = u[P - 1],
					B = R.time - L.time,
					N = R.time - L.time,
					O = Math.abs(N - A);
					if (T.data.length > 2 && (N > 1e3 || O > 500) ? (T = {
						StartTime: R.time,
						EndTime: R.time,
						data: [R],
						indexJump: S.length
					},
					D.push(T)) : (T.data.push(R), T.EndTime = R.time), A = N, R.time > C && B > w) {
						var x = R.time - B / 2 - .2;
						S.push({
							StartTime: x - I,
							EndTime: x + I
						}),
						C = R.time + b
					}
				}
				for (var E = 0; E < D.length; E++) {
					for (var k = 0; k < D[E].data.length - 1; k++) D[E].data[k].duration = D[E].data[k + 1].time - D[E].data[k].time;
					E < D.length - 1 && (D[E].data[D[E].data.length - 1].duration = D[E + 1].data[0].time - D[E].data[D[E].data.length - 1].time)
				}
				var F = D[D.length - 1].data.length;
				D[D.length - 1].data[F - 1].duration = 5,
				e.roundTime = D[D.length - 1].data[F - 1].time + D[D.length - 1].data[F - 1].duration,
				e.roundTimeToFix = e.roundTime.toFixed(1);
				var G = e.levelDesign[0];
				if (a.Helper.getCurrentLevel() >= e.levelDesign.length) G = e.levelDesign[e.levelDesign.length - 1];
				else for (var H = 0; H < e.levelDesign.length; H++) if (a.Helper.getCurrentLevel() == e.levelDesign[H].lv) {
					G = e.levelDesign[H];
					break
				}
				e.currentLevelDesign = G.lv;
				var M = n({},
				G);
				M.levelOptions = [];
				for (var V = 0,
				z = 0,
				j = 0; j < G.levelOptions.length; j++) z < 100 && (M.levelOptions.push(n({},
				G.levelOptions[j])), M.levelOptions[M.levelOptions.length - 1].startTime = V, (z += G.levelOptions[j].percent) > 100 ? z = 100 : j === G.levelOptions.length - 1 && z < 100 && (z = 100), V = T.EndTime * z / 100, M.levelOptions[M.levelOptions.length - 1].endTime = V, M.levelOptions[M.levelOptions.length - 1].percent = z);
				for (var J = M.levelOptions[Math.floor(Math.random() * M.levelOptions.length)], U = 0, X = J.traps[0], Z = 0, q = 0, K = J.endTime, W = [], Y = s(0, 2), Q = W.length, _ = 0; _ <= 2; _++) for (var $ = 0; $ < D.length; $++) {
					var ee = D[$];
					if (ee.data && 0 != ee.data.length) {
						var te = M.timeSegments,
						ie = M.minCountObs,
						ae = ee.data,
						ne = ee.EndTime - ee.StartTime,
						oe = Math.floor(ne / te);
						oe <= 0 && (oe = 1);
						var se = Math.floor(ae.length / oe);
						se < ie && (se = ie);
						for (var ce = 0; ce < ae.length; ce++) {
							var re = ae[ce];
							re.time >= K && (++U >= M.levelOptions.length && (U = 0), X = (J = M.levelOptions[U]).traps[0], q = 0, K = J.endTime),
							ce > 0 && ae[ce - 1].duration >= M.timeWillChargeLine ? Y = ((Y += c() ? 1 : -1) + 3) % 3 : ce > 0 && ae[ce - 1].duration >= M.timeWillChargeLine2 && (Y = 0 == Y || 2 == Y ? 1 : c() ? 0 : 2);
							var le = W.length - Q;
							W.length > 0 && ce < ae.length - 1 && (0 == ce || le > se) ? (W.push({
								timeAppear: re.time,
								line: 1,
								round: _,
								obstascleType: r.COLOR_GATE
							}), Q = W.length, Y = s(0, 2)) : (W.push({
								timeAppear: re.time,
								round: _,
								line: Y,
								obstascleType: r[X.type],
								duration: re.duration
							}), ++q >= X.count && (++Z >= J.traps.length && (Z = 0), X = J.traps[Z], q = 0))
						}
					}
				}
				for (var he = !1,
				de = 0; de < W.length; de++) if (de < W.length - 4) {
					var ue = 0;
					if (W[de].duration <= .25) for (var pe = 1; pe <= 10; pe++) {
						var me = pe + de;
						if (! (me < W.length && W[me].duration <= .31)) break;
						ue++
					}
					if (ue >= 2) {
						he = !he;
						for (var ge = 0; ge <= ue; ge++) de + ge < W.length && (W[de + ge].obstascleType = r.MOVE_REAL_BALL, W[de + ge].moveBallOffset = he);
						de += ue + 1
					}
				}
				for (var ve = [], fe = 0; fe <= 2; fe++) {
					for (var ye = 0,
					Se = 0; Se < S.length; Se++) {
						var be = S[Se];
						ve.push({
							StartTime: ye,
							EndTime: be.StartTime,
							round: fe
						}),
						ye = be.EndTime
					}
					var we = W[W.length - 1].timeAppear + 5;
					we > ye && ve.push({
						StartTime: ye,
						EndTime: we,
						round: fe
					})
				}
				var Ie = {
					ListObstasclePos: W,
					ListSplineSettings: ve
				};
				this.loadRoadWithMidi2(e, Ie)
			},
			loadRoadWithMidi2: function(e, t) {
				var i = [];
				e.roads = i;
				var a = t.ListSplineSettings,
				n = t.ListObstasclePos;
				if (a && n) {
					var s = 0,
					r = 0,
					l = 0,
					h = e.splineTimeUnit,
					d = Math.floor(e.height * e.numSegmentInSpline / h);
					e.scaleTimeToDistance = d;
					for (var u = []; s < a.length; s++) {
						var p = a[s],
						m = (p.EndTime + p.round * e.roundTime) * d;
						if (s < a.length - 1) {
							var g = 2 * (a[s + 1].StartTime * d - m),
							v = m - g / 2;
							u.push({
								jumpLenght: g,
								jumpBegin: v,
								jumpEnd: v + g
							})
						}
						for (; l < m;) {
							var f = e.height,
							y = {
								index: i.length,
								curve: 0,
								eCurve: o.linear,
								hill: 0,
								eHill: o.linear,
								fromZ: l,
								toZ: l + f,
								name: s + "_" + i.length,
								obs: []
							};
							for (l += e.height, i.push(y); r < n.length;) {
								var S = n[r],
								b = (S.round * e.roundTime + S.timeAppear) * d;
								if (b > l) break;
								var w = (b - y.fromZ) / f;
								y.obs.push({
									z: b,
									mu: w,
									line: S.line,
									obstascleType: S.obstascleType,
									timeAppear: S.timeAppear,
									moveBallOffset: S.moveBallOffset
								}),
								r++
							}
						}
						e.roadEnd = m,
						e.timeEnd = 3 * p.EndTime
					}
					e.roundEnd = e.roadEnd / 3,
					function() {
						e.hillTop,
						c(),
						e.curveMax;
						for (var t = 0,
						a = 15,
						n = 0,
						s = 0,
						r = 0,
						l = function(l) {
							var h = i[l];
							if (h.eHill = function() {
								return 0
							},
							l >= a) {
								var d;
								d = ++r % 2 == 0 ? 0 : c() ? e.curveMax: -e.curveMax,
								n = s;
								var u = 20; (s += d) != n && (u = 80),
								t = a,
								a += u
							}
							var p = n,
							m = s,
							g = (l - t) / (a - t),
							v = (l - t + 1) / (a - t);
							h.eCurve = function(e) {
								var t = g + e * (v - g);
								return t = o.easeInOutCubic(t),
								p + (m - p) * t
							}
						},
						h = 0; h < i.length; h++) l(h)
					} ();
					for (var I = !1,
					C = 0; C < i.length; C++) {
						var A = i[C],
						D = A.eHill(0);
						if (A.eHill(1), A.active = !0, I) {
							if (0 == D) {
								A.active = !0,
								I = !1;
								continue
							}
							A.active = !1
						} else if (0 == A.obs.length && D > .7 * e.hillTop) {
							A.active = !1,
							I = !0;
							continue
						}
					}
					for (var T = 0; T < i.length; T++) for (var P = i[T], R = 0; R < P.obs.length; R++) {
						var L = P.eCurve(P.obs[R].mu);
						P.obs[R].pos = cc.v3(L, P.eHill(P.obs[R].mu), P.obs[R].z);
						var B = P.obs[R].mu + .015,
						N = P.eCurve(B);
						P.obs[R].angleDegY = 180 * (N - L) / Math.PI * .6
					}
				} else cc.log("Not find listSplineSettings")
			}
		};
		i.GenObsDancerRoad = l,
		cc._RF.pop()
	},
	{
		"./Helper": "Helper",
		"./segments-texture": "segments-texture"
	}],
	"mesh-texture": [function(e, t) {
		"use strict";
		cc._RF.push(t, "95a3dIihBlE1bM4psBuANTA", "mesh-texture");
		var i = cc.gfx;
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {
				speed: 50
			},
			start: function() {
				var e = new i.VertexFormat([{
					name: i.ATTR_POSITION,
					type: i.ATTR_TYPE_FLOAT32,
					num: 3
				},
				{
					name: i.ATTR_UV0,
					type: i.ATTR_TYPE_FLOAT32,
					num: 2
				},
				{
					name: i.ATTR_COLOR,
					type: i.ATTR_TYPE_UINT8,
					num: 4,
					normalize: !0
				}]),
				t = {
					type: "mesh",
					uvs: [0, 0, .5, 0, 1, 0, 0, .5, .5, .5, 1, .5, 0, 1, .5, 1, 1, 1],
					triangles: [0, 1, 3, 1, 4, 3, 1, 2, 4, 2, 5, 4, 3, 4, 6, 4, 7, 6, 4, 5, 7, 5, 8, 7],
					vertices: [ - 100, 100, 0, 100, 100, 100, -100, 0, 0, 0, 100, 0, -100, -100, 0, -100, 100, -100]
				},
				a = new cc.Mesh;
				a.init(e, t.vertices.length / 2, !0),
				this.mesh = a,
				this.vertexes = [];
				for (var n = 0; n < t.vertices.length; n++) this.vertexes.push(cc.v3(t.vertices[n], t.vertices[++n], 0));
				a.setVertices(i.ATTR_POSITION, this.vertexes),
				this.uvs = [];
				for (var o = 0; o < t.uvs.length; o++) this.uvs.push(cc.v2(t.uvs[o], t.uvs[++o]));
				a.setVertices(i.ATTR_UV0, this.uvs),
				a.setIndices(t.triangles),
				this.colours = [];
				for (var s = 0; s < t.vertices.length; s++) this.colours.push(cc.Color.YELLOW);
				a.setVertices(i.ATTR_COLOR, this.colours);
				var c = this.node.getComponent(cc.MeshRenderer);
				c || (c = this.node.addComponent(cc.MeshRenderer)),
				c.mesh = a,
				this.mesh = a
			},
			update: function(e) {
				var t = this.vertexes[0]; (t.y < -500 && this.speed < 0 || t.y > 500 && this.speed > 0) && (this.speed *= -1),
				t.y += e * this.speed,
				this.mesh.setVertices(i.ATTR_POSITION, this.vertexes)
			}
		}),
		cc._RF.pop()
	},
	{}],
	mesh: [function(e, t) {
		"use strict";
		cc._RF.push(t, "85b7cwUbltFwab1+S5HCilZ", "mesh");
		var i = cc.gfx;
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {},
			start: function() {
				this.lighten = 0,
				this.lightenDirection = 1,
				this.c1 = cc.color(),
				this.c2 = cc.color();
				var e = new i.VertexFormat([{
					name: i.ATTR_POSITION,
					type: i.ATTR_TYPE_FLOAT32,
					num: 3
				},
				{
					name: i.ATTR_COLOR,
					type: i.ATTR_TYPE_UINT8,
					num: 4,
					normalize: !0
				}]),
				t = new cc.Mesh;
				t.init(e, 8, !0),
				this.mesh = t,
				t.setVertices(i.ATTR_POSITION, [cc.v3( - 10, 10, 10), cc.v3( - 10, -10, 10), cc.v3(10, 10, 10), cc.v3(10, -10, 10), cc.v3( - 10, 10, -10), cc.v3( - 10, -10, -10), cc.v3(10, 10, -10), cc.v3(10, -10, -10)]),
				t._minPos = cc.v3( - 10, -10, -10),
				t._maxPos = cc.v3(10, 10, 10),
				this.updateColor(cc.Color.YELLOW, cc.Color.BLUE),
				t.setIndices([0, 1, 2, 1, 3, 2, 0, 6, 4, 0, 2, 6, 2, 7, 6, 2, 3, 7, 0, 5, 4, 0, 1, 5, 1, 7, 5, 1, 3, 7, 4, 5, 6, 5, 7, 6]);
				var a = this.node.getComponent(cc.MeshRenderer);
				a || (a = this.node.addComponent(cc.MeshRenderer)),
				a.mesh = t
			},
			updateColor: function(e, t) {
				this.mesh.setVertices(i.ATTR_COLOR, [e, e, e, e, t, t, t, t])
			},
			update: function() {}
		}),
		cc._RF.pop()
	},
	{}],
	"polyglot.min": [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min"),
		function(e, a) {
			"function" == typeof define && define.amd ? define([],
			function() {
				return a(e)
			}) : "object" == typeof i ? t.exports = a(e) : e.Polyglot = a(e)
		} (void 0,
		function(e) {
			function t(e) {
				e = e || {},
				this.phrases = {},
				this.extend(e.phrases || {}),
				this.currentLocale = e.locale || "en",
				this.allowMissing = !!e.allowMissing,
				this.warn = e.warn || r
			}
			function i(e) {
				var t, i, a, n = {};
				for (t in e) if (e.hasOwnProperty(t)) for (a in i = e[t]) n[i[a]] = t;
				return n
			}
			function a(e) {
				return e.replace(/^\s+|\s+$/g, "")
			}
			function n(e, t, i) {
				var n;
				return null != i && e ? a((n = e.split(h))[s(t, i)] || n[0]) : e
			}
			function o(e) {
				var t = i(u);
				return t[e] || t.en
			}
			function s(e, t) {
				return d[o(e)](t)
			}
			function c(e, t) {
				for (var i in t)"_" !== i && t.hasOwnProperty(i) && (e = e.replace(new RegExp("%\\{" + i + "\\}", "g"), t[i]));
				return e
			}
			function r(t) {
				e.console && e.console.warn && e.console.warn("WARNING: " + t)
			}
			function l(e) {
				var t = {};
				for (var i in e) t[i] = e[i];
				return t
			}
			t.VERSION = "0.4.3",
			t.prototype.locale = function(e) {
				return e && (this.currentLocale = e),
				this.currentLocale
			},
			t.prototype.extend = function(e, t) {
				var i;
				for (var a in e) e.hasOwnProperty(a) && (i = e[a], t && (a = t + "." + a), "object" == typeof i ? this.extend(i, a) : this.phrases[a] = i)
			},
			t.prototype.clear = function() {
				this.phrases = {}
			},
			t.prototype.replace = function(e) {
				this.clear(),
				this.extend(e)
			},
			t.prototype.t = function(e, t) {
				var i, a;
				return "number" == typeof(t = null == t ? {}: t) && (t = {
					smart_count: t
				}),
				"string" == typeof this.phrases[e] ? i = this.phrases[e] : "string" == typeof t._ ? i = t._: this.allowMissing ? i = e: (this.warn('Missing translation for key: "' + e + '"'), a = e),
				"string" == typeof i && (t = l(t), a = c(a = n(i, this.currentLocale, t.smart_count), t)),
				a
			},
			t.prototype.has = function(e) {
				return e in this.phrases
			};
			var h = "||||",
			d = {
				chinese: function() {
					return 0
				},
				german: function(e) {
					return 1 !== e ? 1 : 0
				},
				french: function(e) {
					return e > 1 ? 1 : 0
				},
				russian: function(e) {
					return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
				},
				czech: function(e) {
					return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
				},
				polish: function(e) {
					return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
				},
				icelandic: function(e) {
					return e % 10 != 1 || e % 100 == 11 ? 1 : 0
				}
			},
			u = {
				chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
				german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
				french: ["fr", "tl", "pt-br"],
				russian: ["hr", "ru"],
				czech: ["cs"],
				polish: ["pl"],
				icelandic: ["is"]
			};
			return t
		}),
		cc._RF.pop()
	},
	{}],
	"segments-texture": [function(e, t, i) {
		"use strict";
		function a() {
			return (a = Object.assign ||
			function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var i = arguments[t];
					for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
				}
				return e
			}).apply(this, arguments)
		}
		cc._RF.push(t, "4622aIw+QlM9ZX5Eog+BkEh", "segments-texture"),
		i.__esModule = !0,
		i.Plane = function(e, t, i) {
			void 0 === e && (e = 10),
			void 0 === t && (t = 10),
			void 0 === i && (i = {});
			for (var n = void 0 !== i.widthSegments ? i.widthSegments: 10, s = void 0 !== i.lengthSegments ? i.lengthSegments: 10, c = .5 * e, r = .5 * t, l = [], h = [], d = [], u = [], p = cc.v3( - c, 0, -r), m = cc.v3(c, 0, r), g = Math.sqrt(e * e + t * t), v = cc.v3( - c, 0, r), f = cc.v3(c, 0, r), y = cc.v3( - c, 0, -r), S = new Array(s), b = 0; b < s; b++) S[b] = new Array(n);
			for (var w = 0; w <= s; w++) for (var I = 0; I <= n; I++) {
				var C = I / n,
				A = w / s,
				D = v.lerp(f, C),
				T = v.lerp(y, A).sub(v),
				P = D.add(T);
				if (S[I][s - w] = l.length, l.push(cc.v3(P.x, P.y, P.z)), h.push(0, 1, 0), d.push(C, A), I < n && w < s) {
					var R = n + 1,
					L = I + w * R,
					B = I + (w + 1) * R,
					N = I + 1 + (w + 1) * R,
					O = I + 1 + w * R;
					u.push(L, O, B),
					u.push(O, N, B)
				}
			}
			return {
				positions: l,
				normals: h,
				uvs: d,
				indices: u,
				minPos: p,
				maxPos: m,
				boundingRadius: g,
				refPos: S,
				getVertices: function(e, t, i, c, r, h) {
					void 0 === t && (t = null),
					void 0 === i && (i = null),
					void 0 === c && (c = 0),
					void 0 === r && (r = 0),
					void 0 === h && (h = 0);
					for (var d = a({},
					l), u = e / 2, p = -u, m = 0; m <= s; m++) for (var g = m / s,
					v = i(g + h), f = t(g + h), y = 0; y <= n; y++) {
						var b = y / n,
						w = cc.v3();
						w.y = v,
						w.x = o.linearInterpolate(p, u, b) + f,
						w.z = o.linearInterpolate(c, r, g),
						w.fromZ = c,
						w.toZ = r,
						w.muY = g,
						d[S[y][m]] = w
					}
					return d
				}
			}
		},
		i.EasingFunctions = void 0;
		var n = cc.gfx,
		o = {
			linear: function(e) {
				return e
			},
			easeInQuad: function(e) {
				return e * e
			},
			easeOutQuad: function(e) {
				return e * (2 - e)
			},
			easeInOutQuad: function(e) {
				return e < .5 ? 2 * e * e: (4 - 2 * e) * e - 1
			},
			easeInCubic: function(e) {
				return e * e * e
			},
			easeOutCubic: function(e) {
				return--e * e * e + 1
			},
			easeInOutCubic: function(e) {
				return e < .5 ? 4 * e * e * e: (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
			},
			easeInQuart: function(e) {
				return e * e * e * e
			},
			easeInQuart2: function(e) {
				return e * e
			},
			easeOutQuart: function(e) {
				return 1 - --e * e * e * e
			},
			easeInOutQuart: function(e) {
				return e < .5 ? 8 * e * e * e * e: 1 - 8 * --e * e * e * e
			},
			easeInQuint: function(e) {
				return e * e * e * e * e
			},
			easeOutQuint: function(e) {
				return 1 + --e * e * e * e * e
			},
			easeInOutQuint: function(e) {
				return e < .5 ? 16 * e * e * e * e * e: 1 + 16 * --e * e * e * e * e
			},
			linearInterpolate: function(e, t, i) {
				return e * (1 - i) + t * i
			},
			cubicInterpolate: function(e, t, i, a, n) {
				var o = n * n,
				s = a - i - e + t;
				return s * n * o + (e - t - s) * o + (i - e) * n + t
			},
			cosineInterpolate: function(e, t, i) {
				var a = (1 - Math.cos(i * Math.PI)) / 2;
				return e * (1 - a) + t * a
			}
		};
		i.EasingFunctions = o,
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {
				speed: 50,
				move: 0
			},
			onLoad: function() {
				var e = this.node.getComponent(cc.MeshRenderer);
				e.mesh || (e.mesh = this.mesh)
			},
			initWithMesh: function(e, t) {
				this.vertexes = [].concat(e);
				var i = new n.VertexFormat([{
					name: n.ATTR_POSITION,
					type: n.ATTR_TYPE_FLOAT32,
					num: 3
				},
				{
					name: n.ATTR_UV0,
					type: n.ATTR_TYPE_FLOAT32,
					num: 2
				},
				{
					name: n.ATTR_NORMAL,
					type: n.ATTR_TYPE_FLOAT32,
					num: 3
				}]),
				a = new cc.Mesh;
				a.init(i, this.vertexes.length, !0),
				this.mesh = a,
				a.setVertices(n.ATTR_POSITION, this.vertexes),
				a.setVertices(n.ATTR_UV0, t.uvs),
				a.setVertices(n.ATTR_NORMAL, t.normals),
				a.setIndices(t.indices),
				this.mesh = a;
				var o = this.node.getComponent(cc.MeshRenderer);
				o.mesh || (o.mesh = this.mesh)
			},
			applyHill: function(e, t, i) {
				void 0 === e && (e = 0),
				void 0 === t && (t = 0);
				for (var a = 0; a <= this.heightSegments; a++) for (var n = a / this.heightSegments,
				s = o.linearInterpolate(e, t, i(n)), c = 0; c <= this.widthSegments; c++) this.vertexes[this.refPos[c][a]].y = s
			},
			applyCurve: function(e, t, i) {
				void 0 === e && (e = 0),
				void 0 === t && (t = 0);
				for (var a = this.width / 2,
				n = -a,
				s = 0; s <= this.heightSegments; s++) for (var c = s / this.heightSegments,
				r = o.linearInterpolate(e, t, i(c)), l = 0; l <= this.widthSegments; l++) {
					var h = l / this.widthSegments;
					this.vertexes[this.refPos[l][s]].x = o.linearInterpolate(n, a, h) + r
				}
			},
			applyCurveAndHill: function(e, t, i, a, s, c, r, l) {
				void 0 === e && (e = 0),
				void 0 === t && (t = 0),
				void 0 === i && (i = null),
				void 0 === a && (a = 0),
				void 0 === s && (s = 0),
				void 0 === c && (c = null),
				void 0 === r && (r = 0),
				void 0 === l && (l = 0);
				for (var h = this.width / 2,
				d = -h,
				u = 0; u <= this.heightSegments; u++) for (var p = u / this.heightSegments,
				m = o.linearInterpolate(a, s, c(p)), g = o.linearInterpolate(e, t, i(p)), v = 0; v <= this.widthSegments; v++) {
					var f = v / this.widthSegments,
					y = this.vertexes[this.refPos[v][u]];
					y.y = m,
					y.x = o.linearInterpolate(d, h, f) + g,
					y.z = o.linearInterpolate(r, l, p)
				}
				this.mesh.setVertices(n.ATTR_POSITION, this.vertexes)
			},
			applyCurveAndHillShort: function(e, t, i, a, s) {
				void 0 === e && (e = null),
				void 0 === t && (t = null),
				void 0 === i && (i = 0),
				void 0 === a && (a = 0),
				void 0 === s && (s = 0);
				for (var c = this.width / 2,
				r = -c,
				l = 0; l <= this.heightSegments; l++) for (var h = l / this.heightSegments,
				d = t(h + s), u = e(h + s), p = 0; p <= this.widthSegments; p++) {
					var m = p / this.widthSegments,
					g = this.vertexes[this.refPos[p][l]];
					g.y = d,
					g.x = o.linearInterpolate(r, c, m) + u,
					g.z = o.linearInterpolate(i, a, h)
				}
				this.mesh.setVertices(n.ATTR_POSITION, this.vertexes)
			},
			applyVertices: function(e) {
				for (var t = 0; t < this.vertexes.length; t++) this.vertexes[t] = e[t];
				this.mesh.setVertices(n.ATTR_POSITION, this.vertexes)
			},
			update: function() {}
		}),
		cc._RF.pop()
	},
	{}],
	"trail-texture": [function(e, t) {
		"use strict";
		cc._RF.push(t, "c5496es6UFA0YPrYiqir0iT", "trail-texture"),
		e("./segments-texture");
		var i = cc.gfx;
		function a(e, t, i) {
			void 0 === e && (e = 10),
			void 0 === t && (t = 10),
			void 0 === i && (i = {});
			for (var a = void 0 !== i.widthSegments ? i.widthSegments: 10, n = void 0 !== i.lengthSegments ? i.lengthSegments: 10, o = .5 * e, s = .5 * t, c = [], r = [], l = [], h = [], d = cc.v3( - o, 0, -s), u = cc.v3(o, 0, s), p = Math.sqrt(e * e + t * t), m = cc.v3( - o, 0, s), g = cc.v3(o, 0, s), v = cc.v3( - o, 0, -s), f = new Array(n), y = 0; y < n; y++) f[y] = new Array(a);
			for (var S = 0; S <= n; S++) for (var b = 0; b <= a; b++) {
				var w = b / a,
				I = S / n,
				C = m.lerp(g, w),
				A = m.lerp(v, I).sub(m),
				D = C.add(A);
				if (f[b][n - S] = c.length, c.push(cc.v3(D.x, D.y, D.z)), r.push(0, 1, 0), l.push(w, I), b < a && S < n) {
					var T = a + 1,
					P = b + S * T,
					R = b + (S + 1) * T,
					L = b + 1 + (S + 1) * T,
					B = b + 1 + S * T;
					h.push(P, B, R),
					h.push(B, L, R)
				}
			}
			return {
				positions: c,
				normals: r,
				uvs: l,
				indices: h,
				minPos: d,
				maxPos: u,
				boundingRadius: p,
				refPos: f
			}
		}
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0
			},
			properties: {},
			onLoad: function() {
				this.width = 1.8,
				this.height = 12,
				this.widthHalf = .5 * this.width,
				this.heightHalf = .5 * this.height,
				this.widthSegments = 1,
				this.heightSegments = 13,
				this.scaleEffectZ = .3,
				this.heightSegmentsIngame = 0,
				this.heightSegmentsIngame_Max = 3;
				var e = a(this.width, this.height, {
					widthSegments: this.widthSegments,
					lengthSegments: this.heightSegments
				});
				this.initWithMesh(e);
				for (var t = [], i = 0; i <= this.heightSegments; i++) t.push(cc.v3(0, 0, 0));
				this.segmentY = t
			},
			reset: function(e) {
				if (this.segmentY) {
					for (var t = 0; t < this.segmentY.length; t++) this.segmentY[t].x = e.x,
					this.segmentY[t].y = e.y,
					this.segmentY[t].z = e.z;
					this.heightSegmentsIngame = 0,
					this.applyVertices()
				}
			},
			initWithMesh: function(e) {
				this.vertexes = e.positions,
				this.refPos = e.refPos;
				var t = new i.VertexFormat([{
					name: i.ATTR_POSITION,
					type: i.ATTR_TYPE_FLOAT32,
					num: 3
				},
				{
					name: i.ATTR_UV0,
					type: i.ATTR_TYPE_FLOAT32,
					num: 2
				},
				{
					name: i.ATTR_NORMAL,
					type: i.ATTR_TYPE_FLOAT32,
					num: 3
				},
				{
					name: i.ATTR_COLOR,
					type: i.ATTR_TYPE_UINT8,
					num: 4,
					normalize: !0
				}]),
				a = new cc.Mesh;
				a.init(t, this.vertexes.length, !0),
				this.mesh = a,
				a.setVertices(i.ATTR_POSITION, this.vertexes),
				a.setVertices(i.ATTR_UV0, e.uvs),
				a.setVertices(i.ATTR_NORMAL, e.normals),
				a.setIndices(e.indices),
				this.colours = [];
				for (var n = new cc.Color(0, 255, 0, 150), o = new cc.Color(0, 0, 255, 100), s = 0; s < this.vertexes.length; s++) {
					var c = 1 - (this.vertexes[s].z + this.heightHalf) / this.height;
					this.colours.push(n.lerp(o, c))
				}
				a.setVertices(i.ATTR_COLOR, this.colours),
				this.mesh = a,
				this.node.getComponent(cc.MeshRenderer).mesh = this.mesh
			},
			addTrail: function(e, t) {
				if (this.segmentY) {
					var i = this.segmentY[this.segmentY.length - 1].z;
					e.z <= i || (this.segmentY.push(e), this.segmentY.shift(), this.applyVertices(t), this.heightSegmentsIngame < this.heightSegmentsIngame_Max && (this.heightSegmentsIngame += .1, this.coloursFrom && this.applyColour(this.coloursFrom)))
				}
			},
			applyVertices: function(e) {
				void 0 === e && (e = 0);
				for (var t = -this.width / 2,
				a = this.segmentY[this.segmentY.length - 1], n = 0; n <= this.heightSegments; n++) for (var o = this.segmentY[n], s = n / this.heightSegments, c = cc.misc.lerp(e, 0, s), r = 0; r <= this.widthSegments; r++) {
					var l = r / this.widthSegments,
					h = this.vertexes[this.refPos[r][n]];
					h.y = o.y;
					var d = o.x + .7 * (a.x - o.x);
					h.x = d + t + l * this.width - c,
					h.z = a.z - (this.heightSegments - n) * this.heightSegmentsIngame
				}
				this.mesh.setVertices(i.ATTR_POSITION, this.vertexes)
			},
			applyVerticesBackUp: function() {
				for (var e = -this.width / 2,
				t = this.segmentY[this.segmentY.length - 1], a = 0; a <= this.heightSegments; a++) for (var n = this.segmentY[a], o = 0; o <= this.widthSegments; o++) {
					var s = o / this.widthSegments,
					c = this.vertexes[this.refPos[o][a]];
					c.y = n.y,
					c.x = n.x + e + s * this.width,
					c.z = t.z - 3 * (this.heightSegments - a)
				}
				this.mesh.setVertices(i.ATTR_POSITION, this.vertexes)
			},
			update: function() {},
			applyColour: function(e) {
				this.coloursFrom = e;
				for (var t = this.heightSegmentsIngame / this.heightSegmentsIngame_Max,
				a = this.coloursFrom.clone().setA(200 * t), n = new cc.Color(0, 0, 100, 0), o = 0; o <= this.heightSegments; o++) for (var s = 0; s <= this.widthSegments; s++) {
					var c = 1 - o / this.heightSegments;
					this.colours[this.refPos[s][o]] = a.lerp(n, c)
				}
				this.mesh.setVertices(i.ATTR_COLOR, this.colours)
			}
		}),
		cc._RF.pop()
	},
	{
		"./segments-texture": "segments-texture"
	}]
},
{},
["AMAEvents", "ArrowTutorial", "AudioCtrl", "BallItem", "BuyCoinPopup", "Coin", "ContinueController", "CryptoJS", "DailyRewardController", "EndGameController", "GameLanguage", "GoldEffect", "Helper", "HomeController", "HomeLanguage", "LeaderBoard", "LeaderBoardItem", "NextSongItem", "ProgressBar", "RoadItem", "RotateCircle", "ShopItem", "ShopManager", "SongItem", "SongLists", "ThemeManager", "game", "gen-obs", "mesh-texture", "mesh", "segments-texture", "trail-texture", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min"]);