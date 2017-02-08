var app = getApp();
let rotate = 0;
Page({
  onReady: function() {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  data: {
    name: '', // 歌曲名称
    musicUrl: '', // 歌曲链接地址
    picUrl: '', // 专辑图片地址
    page: '', // 网易云音乐的歌曲链接
    singer: '', //歌手名称
    input: '', // 输入框的内容
    transform: '', // 旋转动画属性
    rotateFlag: false, // 控制专辑图片旋转
  },
  // 专辑图片旋转函数
  myRotate: function() {
    rotate++;
    let transform = `transform:rotate(${rotate}deg);`;
    this.setData({
      transform,
    });
    const animation = setTimeout(() => {
      this.myRotate();
    }, 30);
    if (!this.data.rotateFlag) {
      clearTimeout(animation);
    };
  },
  // 控制专辑图片旋转
  toggleRotate: function() {
    if (this.data.rotateFlag) {
      this.pauseMusic();
      this.audioCtx.pause();
    } else {
      this.playMusic();
      this.audioCtx.play();
    }
  },
  // 播放音乐
  playMusic: function() {
    this.setData({
      rotateFlag: true,
    });
    this.myRotate();
  },
  // 暂停播放音乐
  pauseMusic: function() {
    this.setData({
      rotateFlag: false,
    });
  },
  // bindMusicNameInput监听用户输入
  bindMusicNameInput: function(e) {
    this.setData({
      input: e.detail.value,
    });
  },
  // bindSearch搜索按钮触发
  bindSearch: function(e) {
    this.getMusicInfos(this.data.input);
  },
  // getMusicInfos发送http请求
  getMusicInfos: function(musicname) {
    wx.request({
      method: 'POST',
      url: 'http://angryzhangzhe.cn:3000', //访问node端后台接口
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        musicname: musicname,
      },
      success: (res) => {
        const {
          name,
          picUrl,
          musicUrl,
          page,
          singer,
        } = res.data[0];
        this.setData({
          name,
          picUrl,
          musicUrl,
          page,
          singer,
        });
      },
      error: () => {
        console.log('err');
      }
    });
  },
  // onLoad为生命周期函数
  onLoad: function() {
    // 默认播放歌曲
    this.getMusicInfos('告白气球');
  }
})