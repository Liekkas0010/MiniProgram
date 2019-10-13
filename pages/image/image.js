// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },

  chooseImage(){
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imagePath: res.tempFilePaths[0]
        })
      },
    })
  }
})