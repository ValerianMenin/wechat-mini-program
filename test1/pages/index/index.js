//index.js

//imports
var dict = require('dictionary.js')



//TODO fixe the require import problème
//https://github.com/cleverbotio/cleverbot.io.js
//https://docs.cleverbot.io/docs/getting-started-with-ruby
//
//var cleverbot = require('http://cdn.cleverbot.io/build/1.0/cleverbot.io.min.js')
//var cleverbot = require('cleverbot.io')
//var cleverbot = require("cleverbot.io")
//var cleverbotIO = require('../../utils/cleverbot.io.min')
//var bot = new cleverbotIO('kKqXUeJZVvehMCDs','i1ErtA0g4ZuiKCEG4pUSlnEo648D42dm');// la clé vient de https://cleverbot.io/keys et elle est correcte




//constants
const DEFAULT_LANGUAGE = "en"

//variables
var app = getApp()
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
      success: function (res) { app.globalData.language = res.language }
    })
    console.log(app.globalData.language)

    console.log('get userInformation')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({ userInfo: userInfo })
    })

    console.log('get list of languages')
    languages = dict.getLanguages()

    console.log('set texts')//TODO create a function that will update all texts according to the selected language
    textPage = dict.getJson(app.globalData.language)
    //console.log("textPage= ", textPage)
    that.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, array:languages })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })

    /*wx.getSavedFileList({
  success: function(res) {
    console.log("fileList:", res.fileList)
  }
})*/

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

    /*wx.request({
      //url: 'http://www.google.com/calendar/feeds/developer-calendar@google.com/public/full?alt=json',
      //url: 'http://www.google.com',
      //url: 'http://localhost:3000/message',
      url: 'http://localhost:3000/person',
      data: {
        //person: ''
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log("data=", res.data)
      },
      fail: function() {
        // fail
        console.log("fail to access", url)
      },
      complete: function() {
        // complete
      }
    }),

    wx.request({
      url: 'http://localhost:3000/person',
      data: {
        //person: ''
        'name': 'name'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(){
        // success
        console.log("success - POST")
      },
      fail: function() {
        // fail
        console.log("fail - POST")
      },
      complete: function() {
        // complete
      }
    })

    wx.request({
      url: 'http://localhost:3000/person',
      data: {
        //person: ''
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log("data=", res.data)
      },
      fail: function() {
        // fail
        console.log("fail to access", url)
      },
      complete: function() {
        // complete
      }
    })*/




   /* var sessionname = "wechat"
    var err = ""
    bot.setNick(sessionname)
    bot.create(function (err, sessionname) {
      // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

      // Woo, you initialized cleverbot.io.  Insert further code here
    });
    var question = "hi"
    var response = ""
    bot.ask(question, function (err, response) {
      console.log("question", question)
      console.log("response", response); // Will likely be: "Living in a lonely world"
    });*/

    
    
    /*wx.request({
      url: 'http://cleverbot.io/1.0/create',
      //url: 'http://cleverbot.io/1.0/ask',
      data: {
        //"user": "kKqXUeJZVvehMCDs",
        //"key": "i1ErtA0g4ZuiKCEG4pUSlnEo648D42dm",
        //"nick": "wechat"
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //header: {" content-type: application/x-www-form-urlencoded accept-encoding: gzip, deflate content-length: 70"}, // 设置请求的 header
      //header: {'content-type': 'application/x-www-form-urlencoded', 'content-length': 70},

      success: function(res){
        // success
        console.log("data=", res.data)
      },
      fail: function() {
        // fail
        console.log("fail to access", url)
      },
      complete: function() {
        // complete
      }
    })*/

 /*   wx.chooseWXPay({ timestamp: 0, // Pay the signature time stamp noncestr: ', package:' signature // pay a random string, // order details extended strings, see Appendix 5 of paySign: ', // payment signature, see Appendix 5 }); */

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
    app.globalData.language = dict.getEquivalence(languages[e.detail.value])
    textPage = dict.getJson(app.globalData.language)
    this.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
},

  updateText: function () {
    console.log('updateText')
    app.globalData.language = "fr_FR"
    textPage = dict.getJson(app.globalData.language)
    var that = this
    that.setData({ languageText: app.globalData.language, helloText: textPage.helloText, buttonCalcText: textPage.calcText, index: 1 })
    wx.setNavigationBarTitle({
      title: textPage.navigationBarTitleText,
      success: function (res) { }
    })
  }

})

//---------------------------------------------------

