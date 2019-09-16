Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '王均',
    age: 18,
    employees: [
      {name:'小陈', no: '010'},
      {name:'周峰', no: '011'},
      {name:'玉涛', no: '012'},
      {name:'中伟', no: '013'}
      ],
    count: 0
  },

  handlerBtnClick(){
    this.setData({
      count: this.data.count + 2,
    });

    this.setData({
      count: this.data.count - 3
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})