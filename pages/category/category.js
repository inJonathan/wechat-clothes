var appData = require('../../data/database');

Page({
    data: {
        currentCases: []
    },
    onLoad: function (option) {
        let currentCases = [];

        appData.cases.forEach((i) => {
            if (i.cateId === parseInt(option.cateId)) {
                currentCases.push(i);
            }
        });

        this.setData({
            currentCases: currentCases
            // caseId: currentCases.caseId
        });

        // 设置页面标题
        wx.setNavigationBarTitle({ title: '男装定制 - ' + option.cateName });
    },
    bindTapCase(e) {
        wx.navigateTo({
            url: `../detail/detail?articleId=${e.currentTarget.dataset.articleId}`
        })
    }
})
