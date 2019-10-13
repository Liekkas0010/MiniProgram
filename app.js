App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    wx.getUserInfo({
      success: function(userData){
        console.log(userData);
      }
    });

    setTimeout(function(){
      // throw new Error();
    }, 3000);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  /**
   * 全局常量(供其他页面调取的各种数据))
   */
  globalData: {
    name: "我是全局名称",
    userNo: 10
  }
})
