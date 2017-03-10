var appData = require('../../data/database');

Page({
    callus(e) {
        wx.makePhoneCall({
            phoneNumber: appData.phoneNumber
        })
    }
})