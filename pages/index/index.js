//index.js
//获取应用实例
var app = getApp()
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    this.audioCtx.play()
  },
  data: {
    src: 'http://m2.music.126.net/VNlfsboc6OfHRwc3HDWCww==/3265549547548433.mp3'
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
      url: 'http://s.music.163.com/search/get/?type=1&limit=1&s=%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.result.songs[0].audio);
      }
    })
  }
})
