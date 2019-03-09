/*
*最后修改
*by:nzy
*7PM,3.5
*/
var Network=require('../../config/networkRequestService.js');

Page({
  data: {
    /**
     * 搜索框输入值
     */
    value: '',

    campusSelected: 'all',
    dateSelected: '20190305',
    biginTimeSelected: 2130,
    endTimeSelected: 2200,
    orderSelected: 'all',

    /**
     * 筛选部分，
     * 按顺序从0编号
     * title：选项名
     * column：选项列表
     */
    title0:'所有校区',
    column0: ['所有校区','鼓楼校区','仙林校区'],
    title1:'时间范围',
    column1:['所有时间','今天上午','今天下午','今天晚上','明天上午'],
    title2:'默认排序',
    column2:['默认排序','时间顺序','拼音顺序','拼音倒序'],
    
    /**
     * resultList为搜索结果
     */
    resultList:null,
  },

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
  var that = this;
  //this.setData({resultList:Network.GetAllTutor(0,10).tutorList.content});
  Network.GetAllTutor(0,10,function(res){
      that.setData({resultList:res.data.tutorList});
      console.log(res);
  });
},

/**
 * 搜索栏
 * onChange——输入发生变化时调用
 * onSearch——点击搜索时调用
 */
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch(event) {
    var that = this;
    //if (this.data.value) {
      Network.SearchTutorByNameAndFreeTime({
        "nameKeyword": that.data.value,
        "freeTimeList": [
          {
            "campus": that.data.campusSelected,
            "date": that.data.dateSelected,
            "beginTime": that.data.biginTimeSelected,
            "endTime": that.data.endTimeSelected
          }
        ],
        "pageNum": 0,
        "pageSize": 5
      },function(res){
          that.setData({resultList: res.data.tutorList});
          console.log(res);
      })
      wx.showToast({
        title: '搜索：' + value,
        icon: 'none'
      });
    /*}
    else{
      wx.showToast({
        title: '请输入搜索内容',
        icon:'none'
      })

    }*/
  },


/*
* 筛选栏部分
* 对应编号
* tap——点击时调用
* onConfirm——点击确认时调用
* onChange——改变选项，未点确认时调用
* onCancel——点击取消时调用
*/
  toggle(type){
    this.setData({
      [type]:!this.data[type]
    });
  },

  tap0(){
    this.toggle('picker0');
  },

  tap1(){
    this.toggle('picker1');
  },

  tap2(){
    this.toggle('picker2');
  },

  onConfirm0(event){
    var that = this;
    const { value, index } = event.detail;
    var campus = "";
    wx.showToast({
      title: `index: ${index}, value: ${value}`,
      icon:'none'
    });
    switch(index)
    {
      case 0:
        campus="all";
        break;
      case 1:
        campus="gulou";
        break;
      case 2:
        campus="xianlin";
        break;
      default:

    };
    this.setData({
      title0: value,
      campusSelected: campus
    });

    Network.SearchTutorByNameAndFreeTime({
      "nameKeyword": that.data.value,
      "freeTimeList": [
        {
          "campus": that.data.campusSelected,
          "date": that.data.dateSelected,
          "beginTime": that.data.biginTimeSelected,
          "endTime": that.data.endTimeSelected
        }
      ],
      "pageNum": 0,
      "pageSize": 5
    }, function(res){
      that.setData({resultList: res.data.tutorList});
      console.log(res);
    });
    
    this.toggle('picker0');
  },

  onChange0(event){
    
  },

  onConfirm1(event){
    const { value, index } = event.detail;
    wx.showToast({
      title: `index: ${index}, value: ${value}`,
      icon: 'none'
    });
    this.setData({ title1: value });
    this.toggle('picker1');
  },

  onChange1(event) {

  },

  onConfirm2(event) {
    const { value, index } = event.detail;
    wx.showToast({
      title: `index: ${index}, value: ${value}`,
      icon: 'none'
    });
    this.setData({ title2: value });
    this.toggle('picker2');
  },

  onChange2(event) {

  },

  onCancel0(){
    this.toggle('picker0');
  },

  onCancel1() {
    this.toggle('picker1');
  },

  onCancel2() {
    this.toggle('picker2');
  },


  /**
   * 列表点击时间
   * @param {*} event 
   */
  tap(event){
    var item = event.target.dataset.data;
  

    wx.showToast({
      title: 'name: '+item.tutorName+'id:'+item.id,
      icon:'none'
    })
    wx.navigateTo({
      url: '../appointmentCard/appointmentCard?id=' + item.id,
    })
  },

  
});