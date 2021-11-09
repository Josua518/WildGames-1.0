const AdsConfig = {
	interstitialPlacementID: [""],
	limitInterstitials: 1,
	rewardedPlacementID: [""],
	limitRewars: 1
};
var Ads = {
	_preloadedInterstitial: null,
	loadedInterstitials: [],
	_preloadedRewardedVideo: null,
	loadedRewars: [],
	lastShowIntertitial: (new Date).getTime() + 15e3,
	_interstitialLevel: 0,
	_rewardedLevel: 0,
	showDebug: function() {},
	isSupport: function() {
		if ("undefined" == typeof GC) return ! 1;
		// var e = FBInstant.getSupportedAPIs();
		// return e || Ads.showDebug("not support ads"),
		// e.includes("getInterstitialAdAsync") && e.includes("getRewardedVideoAsync")
        // console.log('isSupport')
        return true;
	},
	currentInterstitialPlacementID: function() {
        // console.log("currentInterstitialPlacementID")
		// return AdsConfig.interstitialPlacementID[Ads._interstitialLevel]
	},
	preloadInterstitial: function(e, d) {
        console.log('preloadInterstitial')
		// if (d || (d = 0), Ads.loadedInterstitials.length >= AdsConfig.limitInterstitials || Ads._preloadedInterstitial) return ! 1;
		// Ads._interstitialLevel = d,
		// Ads.showDebug("Preload get inter"),
		// FBInstant.getInterstitialAdAsync(Ads.currentInterstitialPlacementID()).then(function(e) {
		// 	return Ads._preloadedInterstitial = e,
		// 	Ads._preloadedInterstitial.loadAsync()
		// }).then(function() {
		// 	Ads.showDebug("loaded inter"),
		// 	Ads.loadedInterstitials.push(Ads._preloadedInterstitial),
		// 	Ads._preloadedInterstitial = null,
		// 	"function" == typeof e && e()
		// }).
		// catch(function(d) {
		// 	Ads._interstitialLevel < AdsConfig.interstitialPlacementID.length - 1 && Ads.preloadInterstitial(e, Ads._interstitialLevel + 1),
		// 	Ads.showDebug("Interstitial failed to preload: " + d.message + " Level " + Ads._rewardedLevel)
		// })
	},
	canShowInterstitial: function() {
        return true;
		// var e = (new Date).getTime();
		// return !! (Ads.loadedInterstitials.length && Ads.lastShowIntertitial <= e)
    //    console.log('canShowInterstitial')
	},
	showInterstitial: function(e) {
        console.log("showInterstitial")
		// Ads.loadedInterstitials.length && (Ads.loadedInterstitials[0].showAsync().then(function() {
		// 	Ads.loadedInterstitials.length < AdsConfig.limitInterstitials && Ads.preloadInterstitial(),
		// 	"function" == typeof e && e()
		// }).
		// catch(function(e) {
		// 	Ads.loadedInterstitials.length < AdsConfig.limitInterstitials && Ads.preloadInterstitial(),
		// 	Ads.showDebug(e.message)
		// }), Ads.loadedInterstitials.splice(0, 1), Ads.lastShowIntertitial = (new Date).getTime() + 3e4)
        GC.showAd({
            unitId: ''
        }).then(adCallbackResult => {
            // 广告展示成功回调
            // 插页广告：成功展示，用户关闭后就意味着成功
            // 激励广告：成功展示，且激励视频播放完毕后，用户关闭三个动作组合才会回调成功，其他事件意味着失败
            console.log(adCallbackResult)
            e && e()
        })
        .catch(err => {
            e && e()
            // 非成功都将报错，回调此处
            // err.data = adCallbackResult
            console.log(err.data)
        })
	},
	currentRewardedPlacementID: function() {
        // console.log("currentRewardedPlacementID")
		// return AdsConfig.rewardedPlacementID[Ads._rewardedLevel]
	},
	preloadRewarded: function(e, d) {
        console.log("preloadRewarded")
		// if (d || (d = 0), Ads.loadedRewars.length >= AdsConfig.limitRewars || Ads._preloadedRewardedVideo) return ! 1;
		// Ads._preloadedRewardedVideo = null,
		// Ads._rewardedLevel = d,
		// FBInstant.getRewardedVideoAsync(Ads.currentRewardedPlacementID()).then(function(e) {
		// 	return Ads.showDebug("load Rewar"),
		// 	Ads._preloadedRewardedVideo = e,
		// 	Ads._preloadedRewardedVideo.loadAsync()
		// }).then(function() {
		// 	Ads.showDebug("loaded Rewar"),
		// 	Ads.loadedRewars.push(Ads._preloadedRewardedVideo),
		// 	Ads._preloadedRewardedVideo = null,
		// 	Ads._loadedRewardFailCallback = null,
		// 	"function" == typeof e && e(),
		// 	Ads._loadedRewardCallback && "function" == typeof Ads._loadedRewardCallback && (Ads._loadedRewardCallback(), Ads._loadedRewardCallback = null)
		// }).
		// catch(function(d) {
		// 	Ads._preloadedRewardedVideo = null,
		// 	Ads._rewardedLevel < AdsConfig.rewardedPlacementID.length - 1 ? Ads.preloadRewarded(e, Ads._rewardedLevel + 1) : Ads._loadedRewardFailCallback && "function" == typeof Ads._loadedRewardFailCallback && (Ads._loadedRewardFailCallback(), Ads._loadedRewardFailCallback = null),
		// 	Ads.showDebug("Reward failed to preload: " + d.message + " Level " + Ads._rewardedLevel)
		// })
	},
	isLoadingReward: function() {
        // console.log("isLoadingReward")
		// return Ads._preloadedRewardedVideo && null != Ads._preloadedRewardedVideo
	},
	hasReward: function() {
        // console.log("hasReward")
		return true
	},
	showRewarded: function(e, d) {
        console.log("showRewarded")
       
        GC.showAd({
            unitId: ''
        }).then(adCallbackResult => {
            e && e()
            // 广告展示成功回调
            // 插页广告：成功展示，用户关闭后就意味着成功
            // 激励广告：成功展示，且激励视频播放完毕后，用户关闭三个动作组合才会回调成功，其他事件意味着失败
            console.log(adCallbackResult)
        })
        .catch(err => {
            d && d()
            // 非成功都将报错，回调此处
            // err.data = adCallbackResult
            console.log(err.data)
        })
	}
};