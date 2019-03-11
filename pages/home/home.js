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
    serchBarValue: '',

    currentDate: new Date().getTime(),
    currentTargetDate: new Date(),
    beginDate: new Date(),
    endDate: new Date(),
    currentbeginDateSelected: new Date().getTime(),
    

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
    title1:'开始时间',
    column1:['所有时间','今天上午','今天下午','今天晚上','明天上午'],
    title2:'结束时间',
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
      serchBarValue: e.detail
    });
  },

  onSearch(event) {
    var that = this;
    //if (this.data.value) {
      this.searchTutorByNameAndFreeTime(function(res){
          that.setData({resultList: res.data.tutorList});
          console.log(res);
      })
      wx.showToast({
        title: '搜索：' + that.data.serchBarValue,
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


/**
 * 筛选栏部分
 * 对应编号
 * tap——点击时调用
 * onConfirm——点击确认时调用
 * onChange——改变选项，未点确认时调用
 * onCancel——点击取消时调用
 * onDateSelectChange——选择日期改变时调用
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

    this.searchTutorByNameAndFreeTime(function(res){
      that.setData({resultList: res.data.tutorList});
      console.log(res);
    });
    
    this.toggle('picker0');
  },

  onChange0(event){
    
  },

  onDateSelectChange(event){
    const {detail, currentTarget}=event;
    this.setData({currentTargetDate: new Date(detail)});
    console.log(this.data.currentTargetDate)
  },

  onConfirm1(event){
    var that = this;
    this.setData({
      dateSelected: that.getDateInFormat(that.data.currentTargetDate, "yyyyMMdd"),
      beginTimeSelected: that.getDateInFormat(that.data.currentTargetDate, "hhmm"),
      currentbeginDateSelected: that.data.currentTargetDate.getTime()
    });
    this.searchTutorByNameAndFreeTime(function(res){
      that.setData({resultList: res.data.tutorList});
      console.log(res);
    });
    console.log(this.data.currentDate);
    console.log(this.data.currentbeginDateSelected);
    this.toggle("picker1");
  },

  onConfirm2(event) {
    var that = this;
    this.setData({
      endTimeSelected: that.getDateInFormat(that.data.currentTargetDate, "hhmm")
    });
    this.searchTutorByNameAndFreeTime(function(res){
      that.setData({resultList: res.data.tutorList});
      console.log(res);
    });
    this.toggle("picker2");
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


  /**
   * 
   * @param {*} successFunction 
   */
  searchTutorByNameAndFreeTime(successFunction){
    var that = this;
    Network.SearchTutorByNameAndFreeTime({
      "nameKeyword": that.data.serchBarValue,
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
    }, successFunction)
  },

  getDateInFormat(date, fmt){
    var o = {
      "M+": date.getMonth()+1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "S": date.getMilliseconds(),
      "q+": Math.floor(date.getMonth()/3+1)
    }
    if(/(y+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4-RegExp.$1.length));
    }  
    for(var k in o){
      if(new RegExp("("+k+")").test(fmt)){
        fmt=fmt.replace(RegExp.$1, (RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)));
      }
    }
    console.log(fmt);
    return fmt;
  }
});