var Network=require('../../../../../config/networkRequestService');
Page({
    data:{
        beginTime: 0,
        endTime: 0,
        id: 0,
        reservatingDate: 20190315,
        status: "Applying"
    },

    onLoad: function(options){
        console.log(options.id);
        Network.GetAppointmentById(options.id, function(res){
            console.log(res);
        })
    }
})