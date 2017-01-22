var appData = require('../../data/database');

Page({
    data: {

    },
    onLoad: function (option) {

        for (let i = 0; i < appData.cases.length; i++) {

            if (appData.cases[i].articleId === parseInt(option.articleId)) {

                // // 设置页面标题
                wx.setNavigationBarTitle({ title: appData.cases[i].title });
                break;
            }
        }

    }
})
