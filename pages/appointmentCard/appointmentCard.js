var Network=require('../../config/networkRequestService.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tutor 为点击的导师
    tutor_result: null,

    currentDate: new Date().getTime(),
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id);
    Network.GetTutorById(options.id, function(res){
      that.setData({tutor_result: res.data});
      console.log(res.data);
    })
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

  /**
   * 选择一个时间
   */
  chooseTime: function (event) {
    var that = this
    wx.showModal({
      title: '',
      content: '你确定选择' + ' ' + event.target.dataset.begintime.toString() + '-' + event.target.dataset.endtime + ' 这个时间段吗？',
      success: function(res){
        if (res.confirm){

          console.log('用户确定')
          console.log(that.data.currentDate + '哈哈')
          Network.InsertAppointment({
            "id": that.data.tutor_result.id,
            "tutorId": that.data.tutor_result,
            "studentId": 0, //TODO
            "beginTime": event.target.dataset.begintime,
            "endTime": event.target.dataset.endtime,
            "reservatingDate": that.data.currentDate,
            "status": "Applying"
          }, successFunction)
        }
        else if (res.cancel){
          console.log('用户取消')
        }
      }
    })
  },

  /**
   * 封装生成预约的函数
   */
   //Data Data: tutorId, studentId, beginTime, endTime, reservatingDate, status`
  insertAppointment: function(event){
    var that = this;
    

  },
  
  /**
   * 将Date变量格式化，
   * yyyy-MM-dd hh:mm:ss:S q 
   * 2019-03-11 20:13:00:00 1
   * 2019年3月11日 20时13分0秒0毫秒 一季度
   * @param {Date} date 输入Date类型变量
   * @param {string} fmt 格式
   */
  getDateInFormat(date, fmt) {
    var o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "S": date.getMilliseconds(),
      "q+": Math.floor(date.getMonth() / 3 + 1)
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    console.log(fmt);
    return fmt;
  }

// /**
//  * 生成预约
//  */
//   confirmAppointment: function() {
//     Network.InsertAppointment()
//   }
})