var adManager = {
	showInterstitial(){
		let curTime = new Date().getTime();
		
		if (curTime - adManager.lastTableAdShowTime < 31000)
		{
			console.log(1111111,"显示插屏 时间不够");
			return;
		}
		console.log(1111111,"显示插屏");
		adManager.lastTableAdShowTime = curTime;
		adManager.showAd(false);
	},
	showReward: function(succ, fail)
	{
		new Promise((ts,rs)=>{
			GC.showAd({
			  unitId: adManager.vedioId,
			  onSuccess: function (adCallbackResult) {
				  console.log("====onSuccess " + JSON.stringify(adCallbackResult))
				// 广告展示成功回调
			  },
			  onFailed: function (err) {
				// 广告展示失败回调
				// err.data = adCallbackResult
				console.log("====fail " + JSON.stringify(err.data));
				rs();
			  },

			  callback: function (adCallbackResult) {
				// 所有event都将回调
				console.log("====callback " + JSON.stringify(adCallbackResult))
				if (adCallbackResult && adCallbackResult["event"] != null && adCallbackResult["event"] == "closed")
				{
					var UNITID = "unitId";
					if (adCallbackResult[UNITID]!= null && adCallbackResult[UNITID] == adManager.vedioId)
					{
						console.log("视频关闭重新加载一个");
						adManager.loadAd(adManager.vedioId);
					}
				}
				else if (adCallbackResult && adCallbackResult["event"] != null && adCallbackResult["event"] == "reward")
				{
					console.log("奖励");
					ts();
				}
			  }
			})			
		}).then(()=>{
			console.log(1111111111,"成功");
			if (succ)
			{
				succ();
			}
		}).catch((err)=>{
			console.log(1111111111,"失败",err);
			if (fail)
			{
				fail();
			}
		})

	},
	showAd : function(isVedio)
	{
		console.log("===showAd " + isVedio);
		GC.showAd({
		  unitId: isVedio? adManager.vedioId: adManager.tableId,
		  onSuccess: function (adCallbackResult) {
			  console.log("====onSuccess " + JSON.stringify(adCallbackResult))
			// 广告展示成功回调
		  },
		  onFailed: function (err) {
			// 广告展示失败回调
			// err.data = adCallbackResult
			console.log("====fail " + JSON.stringify(err.data))
		  },

		  callback: function (adCallbackResult) {
			// 所有event都将回调
			console.log("====callback " + JSON.stringify(adCallbackResult))
			if (adCallbackResult && adCallbackResult["event"] != null && adCallbackResult["event"] == "closed")
			{
				var UNITID = "unitId";
				if (adCallbackResult[UNITID]!= null && adCallbackResult[UNITID] == adManager.vedioId)
				{
					console.log("视频关闭重新加载一个");
					adManager.loadAd(adManager.vedioId);
				}
				else if (adCallbackResult[UNITID]!= null && adCallbackResult[UNITID] == adManager.tableId)
				{
					console.log("插屏关闭重新加载一个");
					adManager.loadAd(adManager.tableId);
				}
			}
		  }
		})
	},
	getRandCount(min, max)
	{
		if (adManager.hasTableRandCount)
		{
			return adManager.tableRandomCount;
		}
		num = min;
		if (max)
		{
			num = Math.floor(Math.random() * (max - min)) + Math.floor(min);
		}
		if (num < 1)
		{
			num = 1;
		}
		console.log("==============getRandCount " + num + " min" + min + " max " + max);
		adManager.tableRandomCount = num;
		adManager.hasTableRandCount = true;
		return num;
	},
	showVedio: function()
	{
		console.log("=============showVedio");
		adManager.showAd(true);
	},
	initAd:function(tableId, vedioId)
	{
		adManager.tableId = tableId;
		adManager.vedioId = vedioId;
		adManager.loadAd(adManager.tableId);
		adManager.loadAd(adManager.vedioId);
	},
	loadAd:function(adId)
	{
		GC.loadAd({
		  unitId: adId
		})
		.then(adCallbackResult => {
		  // 广告加载成功回调
		  console.log("==== ad预加载 成功" + adCallbackResult)
		})
		.catch(err => {
		  // 广告加载失败回调
		  // err.data = adCallbackResult
		  console.log("==== ad预加载 失败" + err.data)
		})
	},
	hintOrient:function(isLandscape)
	{
		isLandscape = isLandscape || true;
		  if (window.orientation === 180 || window.orientation === 0) { 
				if (isLandscape)
				{
					alert("Please play the game on the horizontal screen");
				}
				return;
		  } 
		  if (window.orientation === 90 || window.orientation === -90 ){ 
			if (!isLandscape)
			{
				alert("Please play the game in portrait mode");
			}
			return;
		  }  
	},
	lastTableAdShowTime: -120000,
	tableId:"",
	vedioId:"",
};
