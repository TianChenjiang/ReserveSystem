// pages/myAppointment/myAppointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultList: [{
      name: "hbm0",
      freeTime: "今天晚上"
    }, {
      name: "hbm0",
      freeTime: "今天上午"
    }, {
      name: "hbm0",
      freeTime: "明天上午"
    }, {
      name: "hbm0",
      freeTime: "今天晚上"
    }, {
      name: "hbm0",
      freeTime: "今天晚上"
    }, {
      name: "hbm0",
      freeTime: "今天上午"
    }, {
      name: "hbm0",
      freeTime: "明天上午"
    }, {
      name: "hbm0",
      freeTime: "今天晚上"
    },]

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

  },


  /*搜索栏
*onChange——输入发生变化时调用
*onSearch——点击搜索时调用
*/
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch(event) {
    if (this.data.value) {
      wx.showToast({
        title: '搜索：' + this.data.value,
        icon: 'none'
      });
    }
    else {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
    }
  },



  tap(event) {
    wx.showToast({
      title: 'name: ' + event.target.dataset.name,
      icon: 'none'
    })
  },
})