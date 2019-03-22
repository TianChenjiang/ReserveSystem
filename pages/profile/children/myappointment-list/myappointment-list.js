var app = getApp()
var Network = require('../../../../config/networkRequestService')

Page({
  data: {

    studentId: 4,
    pageNum: 0,
    pageSize: 5,
    nameKeyword: "",
    status: "All",

    resultList: null,

    searchBarValue: "",

    pageStatus: 'loading', // error, done
    tabs: ['全部', '预约中', '已失效'],
    types: ['ongoing', 'booking', 'borrowing'],
    currentType: 'ongoing', // 当前激活的选项卡类型
    orders: {
      // 进行中订单
      ongoing: [],
      // 预约中
      booking: [],
      // 借阅中
      borrowing: []
    },
    loadMoreStatus: {
      ongoing: 'hidding', // loading, nomore, hidding
      booking: 'hidding',
      borrowing: 'hidding'
    }
  },

  /**
   * 初始时加载所有类型订单/**
   * @listens <orderCanceled> <orderRenewed>
   * 事件在订单详情页(./children/order-detail)中被触发
   */
  onLoad: function () {

    var that = this;

    // 监听事件
    app.event.on('orderCanceled', this.onOrderCanceled)
    app.event.on('orderRenewed', this.onOrderRenewed)

    //获取登录的studentID所有的预约，并保存之data.appointmentList
    Network.SearchAppointmentByStudentIdAndNameAndStatus({
      "studentId": that.data.studentId,
      "status": that.data.status,
      "pageNum": that.data.pageNum,
      "pageSize": that.data.pageSize,
      "nameKeyword": that.data.nameKeyword
    }, function(res){
      console.log(res)
      that.setData({resultList: res.data.appointmentList});
      console.log(that.data.appointmentList)
    })

    this._loadPage()
  },

  onReloadPage: function () {
    this._loadPage()
  },

  /**
   * 滚动到底部时，根据订单类型，加载对应数据
   */
  onScrollToLower: function () {
    const type = this.data.currentType
    const orders = this.data.orders[type]
    const length = orders.length

    const loadMoreStatus = this.data.loadMoreStatus[type]
    if (loadMoreStatus !== 'hidding') return

    // 设置“加载中”
    let params = {}
    params[`loadMoreStatus.${type}`] = 'loading'
    this.setData(params)

    // 加载数据
    /*getOrdersByUserId(getUID(), type, length).then(res => {
      let params = {}
      params[`orders.${type}`] = orders.concat(res.data.orders)
      params[`loadMoreStatus.${type}`] = res.data.orders.length ? 'hidding' : 'nomore'
      this.setData(params)
    }).catch(() => this.setData({
      loadMoreStatus: {
        ongoing: 'hidding',
        booking: 'hidding',
        borrowing: 'hidding'
      }
    }))*/
  },

  onClickTabBar: function (e) {
    this.setData({currentType: this.data.types[e.detail.index]})
  },

  onCancel: function (e) {
    let id = e.currentTarget.id
    wx.showModal({
      title: '取消订单',
      content: '确定取消该订单？这项操作将无法撤销',
      success: res => {
        if (res.confirm) {
          wx.showLoading({ title: '取消中', mask: true })
          cancelOrderByOrderId(id).then(() => {
            wx.showToast({ title: '取消成功' })
            this._deleteOrderById(id)
          }).finally(() => wx.hideLoading())
        }
      }
    })
  },

  /**
   * 某个订单被取消，更新列表
   */
  onOrderCanceled: function (e) {
    this._deleteOrderById(e.order.id)
  },

  /**
   * 某个订单被续借，更新列表
   */
  onOrderRenewed: function (e) {
    const id = e.order.id
    const newOrder = e.order
    const { ongoing, borrowing } = this.data.orders
    this.setData({
      'orders.ongoing': ongoing.map(old => old.id == id ? newOrder : old),
      'orders.borrowing': borrowing.map(old => old.id == id ? newOrder : old)
    })
  },

  /**
   * 删除订单：从“全部(ongoing)”和“预约中(booking)”订单列表里同时删除
   */
  _deleteOrderById: function (id) {
    const { ongoing, booking } = this.data.orders
    this.setData({
      'orders.ongoing': ongoing.filter(e => e.id != id),
      'orders.booking': booking.filter(e => e.id != id)
    })
  },

  /**
   * 加载页面
   */
  _loadPage: function () {
    this.setData({pageStatus: 'loading'})
    Promise.all([
      getOrdersByUserId(getUID(), 'ongoing'),
      getOrdersByUserId(getUID(), 'booking'),
      getOrdersByUserId(getUID(), 'borrowing')
    ]).then(res => {
      this.setData({
        pageStatus: 'done',
        orders: {
          ongoing: res[0].data.orders,
          booking: res[1].data.orders,
          borrowing: res[2].data.orders
        }
      })
    }).catch(() => this.setData({pageStatus: 'error'}))
  },


  /**
   * 搜索栏部分，
   * @function onChange  搜索栏内容改变
   * @function onSearch  点击搜索事件 
   */
  onChange(e) {
    this.setData({
      searchBarValue: e.detail
    });
  },

  onSearch(event) {
    var that = this;
    if (this.data.searchBarValue) {
      resultList:;
      /*Network.InsertStudent({
        "studentNumber": 171250634,
        "studentName": "hbm",
        "phone": 110,
        "email": "10000@qq.com",
        "wxId": "PonyMa"
      }, function(res){
        console.log(res);
        that.setData({studentId: res.data.id})
      })*/
      /*Network.InsertAppointment({
        "tutorId": 1,
        "studentId": 4,
        "beginTime": 1200,
        "endTime": 1230,
        "reservatingDate": "20190401",
        "status": "Applying"
      }, function(res){
        console.log(res);
      })*/
      wx.showToast({
        title: '搜索：' + this.data.searchBarValue,
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

  /**
   * 显示的appointment列表点击事件
   * item: appointment, 点击的appointment
   */
  tap(event){
    var item = event.target.dataset.data;

    wx.navigateTo({
      url: '../myappointment-list/historical-appointment-card/historical-appointment-card?id=' + item.id,
    })
  }
})
