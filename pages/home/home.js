/*
最后修改
*/

Page({
  data: {
    value: '',

    /*
    *筛选部分，
    *按顺序从0编号
    *title：选项名
    *column：选项列表
    */
    title0:'所有校区',
    column0: ['所有校区','鼓楼校区','仙林校区'],
    title1:'时间范围',
    column1:['所有时间','今天上午','今天下午','今天晚上','明天上午'],
    title2:'默认排序',
    column2:['默认排序','时间顺序','拼音顺序','拼音倒序'],
    
    /*
    resultList为搜索结果
    */
    resultList:[{
      name:"hbm0",
      freeTime:"今天晚上"
    },{
      name:"hbm1",
      freeTime:"今天上午"
    },{
      name:"hbm2",
      freeTime:"明天上午"
    }, {
      name: "hbm3",
      freeTime: "今天晚上"
    }, {
      name: "hbm4",
      freeTime: "今天晚上"
    }, {
      name: "hbm5",
      freeTime: "今天上午"
    }, {
      name: "hbm6",
      freeTime: "明天上午"
    }, {
      name: "hbm7",
      freeTime: "今天晚上"
    },]
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
    else{
      wx.showToast({
        title: '请输入搜索内容',
        icon:'none'
      })
    }
  },


/*
*筛选栏部分
*对应编号
*tap——点击时调用
*onConfirm——点击确认时调用
*onChange——改变选项，未点确认时调用
*onCancel——点击取消时调用
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
    const { value, index } = event.detail;
    wx.showToast({
      title: `index: ${index}, value: ${value}`,
      icon:'none'
    });
    this.setData({title0:value});
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

  tap(event){
    wx.showToast({
      title: 'name: '+event.target.dataset.name,
      icon:'none'
    })
  }
});
