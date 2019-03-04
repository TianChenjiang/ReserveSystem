Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  appointment: function(e) {
    console.log('appointment')
    wx.navigateTo({
      url: 'pages/appointment/appointment',
    })
  }

})