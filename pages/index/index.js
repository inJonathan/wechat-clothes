var appData = require('../../data/database');

Page({
  data: {
    slides: appData.slides,
    indexAd: appData.indexAd
  },
  onLoad: function () {
    
    
  },
  catchTapCategory(e) {
    wx.navigateTo({
      url: `../category/category?cateName=${e.currentTarget.dataset.cateName}&cateId=${e.currentTarget.dataset.cateId}`
    })
  }
})
