//calc.js
//获取应用实例 = Get application examples
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数 = Event handler
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据 = Call the application instance method to get global data
    app.getUserInfo(function(userInfo){
      //更新数据 = update data
      that.setData({
        userInfo:userInfo
      })
    })
    wx.getSystemInfo({
      success: function(res) {
        // success
      }
    })
  }
})
