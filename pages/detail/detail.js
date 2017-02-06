var appData = require('../../data/database');

Page({
    data: {
        
    },
    onLoad: function (option) {
        let articleInfo = null;
        // 拿到对应的文章信息
        appData.cases.forEach((i) => {
            if (i.articleId === parseInt(option.articleId)) {
                articleInfo = i;
            }
        });

        this.setData({
            headImgUrl: articleInfo.headImgUrl,
            title: articleInfo.title,
            detail: articleInfo.detail
        });

        for (let i = 0; i < appData.cases.length; i++) {
            if (appData.cases[i].articleId === parseInt(option.articleId)) {
                // 设置页面标题
                wx.setNavigationBarTitle({ title: appData.cases[i].title });
                break;
            }
        }

    }
})
