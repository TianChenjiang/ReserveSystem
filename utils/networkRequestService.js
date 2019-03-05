var url='http://192.168.2.229:8080/';

module.exports={
  GetAllTutor(pageNum,pageSize) {
    wx.request({
      url: url+'GetAllTutor',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "pageNum": pageNum,
        "pageSize": pageSize
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetTutorById(id) {
    wx.request({
      url: url+'GetTutorById',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": id
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetTutorByWxId(WxID) {
    wx.request({
      url: url+'GetTutorByWxId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "wxId": WxID
      },
      success(res) {
        console.log(res);
      }
    })
  },
  UpdateTutorById(Data) {
    wx.request({
      url: url+'UpdateTutorById',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: Data,
      success(res) {
        console.log(res);
      }
    })
  },
  GetStudentById(ID) {
    wx.request({
      url: url+'GetStudentById',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": ID
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetStudentByWxId(WxID) {
    wx.request({
      url: url+'GetStudentByWxId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "wxId": WxID
      },
      success(res) {
        console.log(res);
      }
    })
  },
  UpdateStudentById(Data) {
    wx.request({
      url: url+'UpdateStudentById',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: Data
    })
  },
  InsertAppointment(Data) {
    wx.request({
      url: url+'InsertAppointment',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: Data,
      success(res) {
        console.log(res);
      }
    })
  },
  SearchAppointmentByTutorId(Data) {
    wx.request({
      url: url+'SearchAppointmentByTutorId',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: Data,
      success(res) {
        console.log(res);
      }
    })
  },
  SearchActiveAppointmentByTutorId(TutorID) {
    wx.request({
      url: url+'SearchActiveAppointmentByTutorId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "tutorId": TutorID
      },
      success(res) {
        console.log(res);
      }
    })
  }
}