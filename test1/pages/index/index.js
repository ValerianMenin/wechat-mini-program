//index.js
var util = require('../../utils/util.js')

//获取应用实例
var app = getApp()
var language = ''
var dictionaire = ['bonjour', 'hello', 'nihao', 'xin chao', 'guten tag']
Page({

  data: {
    motto: 'Hello World',
    userInfo: {},
    languageText: {},
    textDependingOnLanguage: dictionaire[0],
    buttonRefreshText: 'click to refresh',
    buttonCalcText: {}
  },

  //event listenner
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  buttonCalc: function () {
    console.log('navigateTo calc')
    wx.navigateTo({
      url: '../calc/calc'
    })
  },


  updateText: function () {
    console.log('updateText')
    this.setData({
      buttonCalcText: 'ert'
    })
  },

  //on load
  onLoad: function () {
    console.log('onLoad')

   /* Page.updateText();
    Page.updateText()
    Page.updateText
    Page.updatetext;

    updateText();
    updateText()
    updateText
    updateText;
*/

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })


    //get the system's language
    wx.getSystemInfo({
      success: function(res) {language = res.language}
    })
    that.setData({languageText: language})
    console.log(language)

    if (language == 'zh_CN'){
      that.setData({textDependingOnLanguage: dictionaire[2]})
    }
  },

  //on ready
  onReady: function(){
    console.log('onReady')
    this.setData({buttonCalcText: 'to calc'})


/*
    Page.updateText();
    Page.updateText()
    Page.updateText
    Page.updatetext;

    updateText();
    updateText()
    updateText
    updateText;
  */}

})/*,

function updateText() {
    console.log('updateText')
    this.setData({
      buttonCalcText: 'ert'
    })
}*/
