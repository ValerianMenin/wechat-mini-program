//index.js

//imports
var util = require('../../utils/util.js')
var dict = require('dictionary.js')

//constants
const DEFAULT_LANGUAGE = "en"

//variables
var app = getApp()
var language = ''
var languages = ''
var textPage = ''


Page({
  // ============================
  // =========== data ===========
  // ============================
  data: {
    array: {},
    index: 0,
    userInfo: {},
    languageText: {},
    helloText: {},
    buttonRefreshText: 'change to french',
    buttonCalcText: {}
  },

  // ============================
  // ====== on load / init ======
  // ============================
  onLoad: function () {
    console.log('onLoad')
    console.log('setLanguage')
    //TODO if not default language was set --> get the system's language
    wx.getSystemInfo({
      success: function (res) { language = res.language }
    })
    console.log(language)

    console.log('get userInformation')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({ userInfo: userInfo })
    })

    console.log('get list of languages')
    languages = dict.getLanguages()

    console.log('set texts')//TODO create a function that will update all texts according to the selected language
    textPage = dict.getJson(language)
    that.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, array:languages })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })

    wx.getSavedFileList({
  success: function(res) {
    console.log("fileList:", res.fileList)
  }
})

    /*wx.makePhoneCall({
      phoneNumber: '0247404080',
      success: function(res) {console.log('phoning')}
    })*/
    /*wx.openLocation({
      latitude: 47.3239117, // 纬度，范围为-90~90，负数表示南纬
      longitude: 0.40593690000000004, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例
      name: 'Maison Valérian', // 位置名
      address: '11 Rue Anne de Bretagne, 37130 Langeais, France', // 地址的详细说明
      success: function(res) {console.log('getting the map')},
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })*/

  },

  //on ready
  onReady: function () {
    console.log('onReady')
  },

  // =============================
  // ====== event listenner ======
  // =============================
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
  bindPickerChange: function(e) {
    console.log('picker language', e.detail.value)
    this.setData({
      index: e.detail.value
    })

    //updateText
    language = dict.getEquivalence(languages[e.detail.value])
    textPage = dict.getJson(language)
    this.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
},

  updateText: function () {
    console.log('updateText')
    language = "fr_FR"
    textPage = dict.getJson(language)
    var that = this
    that.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, index: 1 })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
  }

})

//---------------------------------------------------


