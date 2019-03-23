var url = 'http://localhost:8080/';

module.exports = {

  /**
   * 
   * @param {number} pageNum 
   * @param {number} pageSize 
   * @param {Function} successFunction Data: tutorList: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetAllTutor(pageNum, pageSize, successFunction) {
    wx.request({
      url: url + 'GetAllTutor',
      method: "POST",
      data: {
        "pageNum": pageNum,
        "pageSize": pageSize
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} id Data id
   * @param {Function} successFunction tutor: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetTutorById(id, successFunction) {
    wx.request({
      url: url + 'GetTutorById',
      method: "GET",
      data: {
        "id": id
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} WxID Data: wxId
   * @param {Function} successFunction Data: tutorList: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetTutorByWxId(WxID, successFunction) {
    wx.request({
      url: url + 'GetTutorByWxId',
      method: "GET",
      data: {
        "wxId": WxID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {data} Data Date: id, wxId, tutorName, tutorDescription, freeTimeList: {campus, beginTime, endTime, dayOfWeek}
   * @param {Function} successFunction 
   */
  UpdateTutorById(Data, successFunction) {
    wx.request({
      url: url + 'UpdateTutorById',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} ID Data: id
   * @param {Function} successFunction Data: id, wxId, studentNumber, studentName, phone, email
   */
  GetStudentById(ID, successFunction) {
    wx.request({
      url: url + 'GetStudentById',
      method: "GET",
      data: {
        "id": ID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} WxID Data: wxId
   * @param {Function} successFunction Data: id, wxId, studentNumber, studentName, phone, email
   */
  GetStudentByWxId(WxID, successFunction) {
    wx.request({
      url: url + 'GetStudentByWxId',
      method: "GET",
      data: {
        "wxId": WxID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: id, wxId, studentNumber, studentName, phone, email
   * @param {Function} successFunction Data: id
   */
  UpdateStudentById(Data, successFunction) {
    wx.request({
      url: url + 'UpdateStudentById',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: tutorId, studentId, beginTime, endTime, reservatingDate, status
   * @param {Function} successFunction Data: id, tutorId, studentId, beginTime, endTime, reservatingDate, status
   */
  InsertAppointment(Data, successFunction) {
    wx.request({
      url: url + 'InsertAppointment',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: {tutorId, nameKeyword, status, pageNum, pageSize}
   * @param {Function} successFunction appointmentList: {id, tutor: {id, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, student: {id, wxId, studentNumber, studentName, phone, email}, beginTime, endTime, reservatingDate, status} 
   */
  SearchAppointmentByTutorIdAndNameAndStatus(Data, successFunction) {
    wx.request({
      url: url + 'SearchAppointmentByTutorIdAndNameAndStatus',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} TutorID Tutor ID
   * @param {Function} successFunction appointmentList: {id, tutor: {id, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, student: {id, wxId, studentNumber, studentName, phone, email}, beginTime, endTime, reservatingDate, status}
   */
  SearchActiveAppointmentByTutorId(TutorID, successFunction) {
    wx.request({
      url: url + 'SearchActiveAppointmentByTutorId',
      method: "GET",
      data: {
        "tutorId": TutorID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: nameKeyword, freeTimeList: {campus, date, beginTime, endTime}, pageNum, pageSize
   * @param {Function} successFunction 
   */
  SearchTutorByNameAndFreeTime(Data, successFunction) {
    wx.request({
      url: url + 'SearchTutorByNameAndFreeTime',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },


  /**
   * 
   * @param {*} StuInfo Data: studentNumber, studentName, phone, email, wxId
   * @param {Function} successFunction checking if it is successful
   * @returns Data: id, wxId, studentNumber, studentName, phone, email
   */
  InsertStudent(StuInfo, successFunction) {
    wx.request({
      url: url + 'InsertStudent',
      method: "POST",
      data: StuInfo,
      success: successFunction
    })
  },

  /**
   * 
   * @param {number} Id Appointment ID
   * @param {Function} successFunction 
   * @returns Data: id, tutor: {id, tutorName, tutorDesciption, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, sutdent: {id, wxId, studentNumber, phone, email}, beginTime, endTime, reservatingDate, status
   */
  GetAppointmentById(Id, successFunction) {
    wx.request({
      url: url + 'GetAppointmentById',
      method: "GET",
      data: {"id": Id,},
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data {studentId, status, pageNum, pageSize, nameKeyword}
   * @param {Function} successFunction appointmentList: {id, tutor: {id, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, student: {id, wxId, studentNumber, studentName, phone, email}, beginTime, endTime, reservatingDate, status}
   */
  SearchAppointmentByStudentIdAndNameAndStatus(Data, successFunction){
    wx.request({
      url: url + 'SearchAppointmentByStudentIdAndNameAndStatus',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data {wxId, tutorName, tutorDescription, freeTimeList: {campus, dayOfWeek, beginTime, endTime}}
   * @param {Function} successFunction 
   */
  InsertTutor(Data, successFunction){
    wx.request({
      url: url + 'InsertTutor',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: {id, tutorId, studentId, beginTime, endTime, reservatingDate, status}
   * @param {Function} successFunction 
   */
  UpdateAppointmentById(Data, successFunction){
    wx.request({
      url: url + 'UpdateAppointmentById',
      method: "POST",
      data: Data,
      success: successFunction
    })
  }
}

