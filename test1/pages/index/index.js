//index.js

//imports
var util = require('../../utils/util.js')
var dict = require('dictionary.js')
<<<<<<< HEAD

//constants
const DEFAULT_LANGUAGE = "en"

//variables
var app = getApp()
//var language = ''
var languages = ''
var textPage = ''

=======

//variables
var app = getApp()
var language = ''
var languages = ''
var textPage = ''
>>>>>>> master

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
<<<<<<< HEAD
    //TODO if not default language was set --> get the system's language
    wx.getSystemInfo({
      success: function (res) { app.globalData.language = res.language }
    })
    console.log(app.globalData.language)
=======
    //get the system's language
    wx.getSystemInfo({
      success: function (res) { language = res.language }
    })
    console.log(language)
>>>>>>> master

    console.log('get userInformation')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({ userInfo: userInfo })
    })

    console.log('get list of languages')
    languages = dict.getLanguages()

<<<<<<< HEAD
    console.log('set texts')//TODO create a function that will update all texts according to the selected language
    textPage = dict.getJson(app.globalData.language)
    //console.log("textPage= ", textPage)
    that.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, array:languages })
=======
    console.log('set texts')//TODO create a function that will update all texts according to the system's language
    textPage = dict.getJson(language)

    that.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, array:languages })
>>>>>>> master
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })

<<<<<<< HEAD
    /*wx.getSavedFileList({
  success: function(res) {
    console.log("fileList:", res.fileList)
  }
})*/

=======
>>>>>>> master
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

<<<<<<< HEAD
    /*wx.request({
      url: 'http://www.google.com/calendar/feeds/developer-calendar@google.com/public/full?alt=json',
      //url: 'http://www.google.com',
      //url: 'http://localhost:3000/message',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log("data=", res.data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })*/
=======
>>>>>>> master
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
<<<<<<< HEAD
    app.globalData.language = dict.getEquivalence(languages[e.detail.value])
    textPage = dict.getJson(app.globalData.language)
    this.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText })
=======
    language = dict.getEquivalence(languages[e.detail.value])
    textPage = dict.getJson(language)
    this.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText })
>>>>>>> master
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
},

  updateText: function () {
    console.log('updateText')
<<<<<<< HEAD
    app.globalData.language = "fr_FR"
    textPage = dict.getJson(app.globalData.language)
    var that = this
    that.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, index: 1 })
=======
    language = "fr_FR"
    textPage = dict.getJson(language)
    var that = this
    that.setData({ languageText: language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, index: 1 })
>>>>>>> master
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
  }
<<<<<<< HEAD

})

//---------------------------------------------------


=======

})

//---------------------------------------------------


>>>>>>> master
