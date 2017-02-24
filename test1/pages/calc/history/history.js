Page({
  data:{
    logs:[]
  },
  onLoad:function(options){
    console.log('onLoad - history')
    var logs = wx.getStorageSync('calclogs');
    this.setData({"logs":logs});
  }
})