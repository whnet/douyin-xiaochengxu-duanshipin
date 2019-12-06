//index.js

Page({
  data: {
    videoSrc: 'http://q1m95c930.bkt.clouddn.com/1575610866084437.mp4',
    list: [
      'http://q1m95c930.bkt.clouddn.com/1575610866084437.mp4',
      'http://q1m95c930.bkt.clouddn.com/1575610871770934.mp4'
    ],
    src: ''

  },

  onReady: function () {
    this.setData({
      src: this.data.list[0]
    })
  },
  open(){
    wx.navigateTo({
      url: '/pages/video/video?id=0',
    })
  },
  open2() {
    wx.navigateTo({
      url: '/pages/video2/video2',
    })
  },
  bindchange(e){
    console.log('bindchange',e.detail.current)
    let i = e.detail.current
    this.setData({
      src: this.data.list[i]
    })
  },
  click(){
    wx.showModal({
      title: '提示',
      content: '你点击了购买按钮',
      showCancel:false
    })
  }

})


