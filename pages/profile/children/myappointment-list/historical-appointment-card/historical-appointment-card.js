var Network=require('../../../../../config/networkRequestService');
Page({
    data:{
        tutorName: "",
        tutorId: 0,
        studentId: 0,
        beginTime: 0,
        endTime: 0,
        id: 0,
        reservatingDate: "20190315",
        status: "Applying",
        consequence: "等待导师回复",
        disabled: false,
        cancelButtonText: "取消预约"
    },

    onLoad: function(options){
        var that = this;
        //console.log(options.id);
        Network.GetAppointmentById(options.id, function(res){
            //console.log(res);
            var appointment = res.data.appointment;
            that.setData({
                tutorName: appointment.tutor.tutorName,
                studentId: appointment.student.id,
                tutorId: appointment.tutor.id,
                beginTime: appointment.beginTime,
                endTime: appointment.endTime,
                id: appointment.id,
                reservatingDate: appointment.reservatingDate,
                status: appointment.status
            })
            console.log(that.data);
            console.log(that.data.status)
            switch(that.data.status)
            {
            case "Applying":
                that.setData({consequence: "等待导师回复"});
                break;
            case "Active":
                that.setData({consequence: "已通过"});
                break;
            case "Refused":
                that.setData({consequence: "拒绝"});
                break;
            case "Completed":
                that.setData({consequence: "已完成"});
                break;
            case "Canceled":
                that.setData({consequence: "已取消", disabled: true, cancelButtonText: "已取消"});
                break;
            default:
                break;
            };
            console.log(that.data.cancelButtonText)
        });
        
    },

    cancel(event){
        var that = this;
        if(!that.data.disabled){
            console.log(that.data)
            console.log(that.data.reservatingDate)
            var id = event.target.dataset.id;
            console.log("取消预约")
            Network.UpdateAppointmentById({
                "id": id,
                "tutorId": that.data.tutorId,
                "studentId": that.data.studentId,
                "beginTime": that.data.beginTime,
                "endTime": that.data.endTime,
                "reservatingDate": that.data.reservatingDate,
                "status": "Canceled"
            }, function(res){
                console.log(res)
            })
        }
    }
})