//index.js
//获取应用实例
var app = getApp()
Page({
  onReady: function (e) {
  },
  data: {
    src: '',
    pic: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.request({
      method: 'POST',
      url: 'http://127.0.0.1:3000', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        url: 'http://s.music.163.com/search/get/?type=1&limit=1&s=%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83',
      },
      success: (res) => {
        // console.log(res.data.result.songs[0].audio);
        // const newsrc = res.data.result.songs[0].audio;
        // this.data.src = res.data.result.songs[0].audio;
        // console.log(this.data.src);
        console.log(res.data.result.songs[0].album.picUrl);
        this.setData({
          pic: res.data.result.songs[0].album.picUrl,
          src: res.data.result.songs[0].audio,
        });
      }
    })
  }
})
