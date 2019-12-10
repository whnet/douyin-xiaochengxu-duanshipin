// pages/voice/voice.js
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var THandle = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    times:0,//录音时长
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //type=1开始计时，=2结束计时
  start_tims(){
    let that = this
    if (THandle != null) {
      clearInterval(THandle)
      THandle = null
      that.setData({
        times: 0
      })
    }

    THandle = setInterval(() => {
      that.setData({
        times:that.data.times+1
      })
    }, 1000)
  },
  end_tims(){
    let that  = this
    clearInterval(THandle)
    THandle = null
    that.setData({
      times: 0
    })
  },
  //开始录音的时候
  start: function () {
    let that  = this
    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      wx.showToast({
        icon:'none',
        title: '开始录音',
      })
      that.start_tims()
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })

    recorderManager.onStop((res) => {
      that.end_tims()
      this.tempFilePath = res.tempFilePath;
      this.setData({
        voidurl: res.tempFilePath
      })
      wx.showToast({ icon: 'none', title: '停止录音' })

      console.log('停止录音', res.tempFilePath)
      const { tempFilePath } = res
    })
  },
  pause: function () {
    recorderManager.pause();
    recorderManager.onPause((res) => {
      wx.showToast({icon: 'none',title: '暂停录音'})
      console.log('暂停录音')

    })
  },
  resume: function () {
    recorderManager.resume();
    recorderManager.onStart(() => {
      wx.showToast({ icon: 'none', title: '重新开始录音' })

      console.log('重新开始录音')
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },
  //停止录音
  stop: function () {
    wx.showLoading({
      title: '保存中',
    })
    console.log('停止录音')


    recorderManager.stop();
   
  },
  
  //播放声音
  play: function () {
    

    // innerAudioContext.autoplay = true
    innerAudioContext.src = encodeURI(this.tempFilePath)
    // innerAudioContext.loop = true
    console.log('播放', innerAudioContext.src )
    wx.showToast({ icon: 'none', title: '播放' })

    innerAudioContext.play()

      innerAudioContext.onPlay((e) => {
        console.log('开始播放',e)
      })




    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  stopPlay(){
    innerAudioContext.stop((e)=>{
      console.log('暂停播放',e)

    })

  }
})