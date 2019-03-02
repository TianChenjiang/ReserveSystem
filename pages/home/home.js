Page({
  data: {
    value: ''
  },

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

  
});
