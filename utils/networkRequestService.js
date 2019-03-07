var url='http://192.168.2.229:8080/';

module.exports={

  /**
   * 
   * @param {*} pageNum 
   * @param {*} pageSize 
   * @param {*} successFunction Data: tutorList: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetAllTutor(pageNum,pageSize,successFunction) {
    wx.request({
      url: url+'GetAllTutor',
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
   * @param {*} id Data id
   * @param {*} successFunction tutor: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetTutorById(id,successFunction) {
    wx.request({
      url: url+'GetTutorById',
      method: "GET",
      data: {
        "id": id
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} WxID Data: wxId
   * @param {*} successFunction Data: tutorList: {id, wxId, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}}
   */
  GetTutorByWxId(WxID,successFunction) {
    wx.request({
      url: url+'GetTutorByWxId',
      method: "GET",
      data: {
        "wxId": WxID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Date: id, wxId, tutorName, tutorDescription, freeTimeList: {campus, beginTime, endTime, dayOfWeek}
   * @param {*} successFunction 
   */
  UpdateTutorById(Data, successFunction) {
    wx.request({
      url: url+'UpdateTutorById',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} ID Data: id
   * @param {*} successFunction Data: id, wxId, studentNumber, studentName, phone, email
   */
  GetStudentById(ID,successFunction) {
    wx.request({
      url: url+'GetStudentById',
      method: "GET",
      data: {
        "id": ID
      },
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} WxID Data: wxId
   * @param {*} successFunction Data: id, wxId, studentNumber, studentName, phone, email
   */
  GetStudentByWxId(WxID,successFunction) {
    wx.request({
      url: url+'GetStudentByWxId',
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
   * @param {*} successFunction Data: id
   */
  UpdateStudentById(Data,successFunction) {
    wx.request({
      url: url+'UpdateStudentById',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: tutorId, studentId, beginTime, endTime, reservatingDate, status
   * @param {*} successFunction Data: id, tutorId, studentId, beginTime, endTime, reservatingDate, status
   */
  InsertAppointment(Data,successFunction) {
    wx.request({
      url: url+'InsertAppointment',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} Data Data: tutorId, pageNum, pageSize
   * @param {*} successFunction appointmentList: {id, tutor: {id, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, student: {id, wxId, studentNumber, studentName, phone, email}, beginTime, endTime, reservatingDate, status} 
   */
  SearchAppointmentByTutorId(Data,successFunction) {
    wx.request({
      url: url+'SearchAppointmentByTutorId',
      method: "POST",
      data: Data,
      success: successFunction
    })
  },

  /**
   * 
   * @param {*} TutorID Tutor ID
   * @param {*} successFunction appointmentList: {id, tutor: {id, tutorName, tutorDescription, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, student: {id, wxId, studentNumber, studentName, phone, email}, beginTime, endTime, reservatingDate, status}
   */
  SearchActiveAppointmentByTutorId(TutorID,successFunction) {
    wx.request({
      url: url+'SearchActiveAppointmentByTutorId',
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
   * @param {*} successFunction 
   */
  SearchTutorByNameAndFreeTime(Data,successFunction){
    wx.request({
      url: url+'SearchTutorByNameAndFreeTime',
      method:"POST",
      data:Data,
      success:successFunction
    })
  },
  
  
  /**
   * 
   * @param {*} StuInfo Data: studentNumber, studentName, phone, email, wxId
   * @param {*} successFunction checking if it is successful
   * @returns Data: id, wxId, studentNumber, studentName, phone, email
   */
  InsertStudent(StuInfo,successFunction){
    wx.request({
      url: url+'InsertStudent',
      method:"POST",
      data:StuInfo,
      success:successFunction
    })
  },
  
  /**
   * 
   * @param {*} Id Appointment ID
   * @param {*} successFunction 
   * @returns Data: id, tutor: {id, tutorName, tutorDesciption, freeTimeList: {id, campus, dayOfWeek, beginTime, endTime}, wxId}, sutdent: {id, wxId, studentNumber, phone, email}, beginTime, endTime, reservatingDate, status
   */
  GetAppointmentById(Id, successFunction){
    wx.request({
      url: url+'GetAppointmentById',
      method:"GET",
      data: Id,
      success:successFunction
    })
  }
}