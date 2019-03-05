module.exports={
  GetAllTutor() {
    wx.request({
      url: 'http://192.168.2.229:8080/GetAllTutor',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "pageNum": 0,
        "pageSize": 5
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetTutorById() {
    wx.request({
      url: 'http://192.168.2.229:8080/GetTutorById',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": 2
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetTutorByWxId() {
    wx.request({
      url: 'http://192.168.2.229:8080/GetTutorByWxId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "wxId": "0"
      },
      success(res) {
        console.log(res);
      }
    })
  },
  UpdateTutorById() {
    wx.request({
      url: 'http://192.168.2.229:8080/UpdateTutorById',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": 1,
        "tutorName": "huanglei",
        "tutorDescription": "our Boss",
        "freeTimeList": [
          {
            "campus": "all",
            "beginTime": 2100,
            "endTime": 2230,
            "dayOfWeek": 0
          },
          {
            "campus": "all",
            "beginTime": 500,
            "endTime": 2230,
            "dayOfWeek": 0
          }
        ]
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetStudentById() {
    wx.request({
      url: 'http://192.168.2.229:8080/GetStudentById',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": 1
      },
      success(res) {
        console.log(res);
      }
    })
  },
  GetStudentByWxId() {
    wx.request({
      url: 'http://192.168.2.229:8080/GetStudentByWxId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "wxId": "2333"
      },
      success(res) {
        console.log(res);
      }
    })
  },
  UpdateStudentById() {
    wx.request({
      url: 'http://192.168.2.229:8080/UpdateStudentById',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "id": 2,
        "studentNumber": "wullala",
        "studentName": "tianchenjiang",
        "phone": "110",
        "email": "110@gmail.com",
        "wxId": "tcjnb!"
      },
      success(res) {
        console.log(res);
      }
    })
  },
  InsertAppointment() {
    wx.request({
      url: 'http://192.168.2.229:8080/InsertAppointment',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "tutorId": 1,
        "studentId": 2,
        "beginTime": 915,
        "endTime": 1055,
        "reservatingDate": "20190315"
      },
      success(res) {
        console.log(res);
      }
    })
  },
  SearchAppointmentByTutorId() {
    wx.request({
      url: 'http://192.168.2.229:8080/SearchAppointmentByTutorId',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "tutorId": 2,
        "pageNum": 0,
        "pageSize": 5
      },
      success(res) {
        console.log(res);
      }
    })
  },
  SearchActiveAppointmentByTutorId() {
    wx.request({
      url: 'http://192.168.2.229:8080/SearchActiveAppointmentByTutorId',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "tutorId": 2
      },
      success(res) {
        console.log(res);
      }
    })
  }
}