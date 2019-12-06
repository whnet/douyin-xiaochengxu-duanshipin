var app = getApp();

Page({



  /**
  
    * 页面的初始数据
  
    */

  data: {

    playNum: 0,

    touchInfo: {},

  },



  /**
  
    * 生命周期函数--监听页面加载
  
    */

  onLoad: function (options) {

    var that = this;




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

  plaing: function (e) {



  },

  statisticPlay: function (e) {

    console.log(e);

  },

  touchStart: function (e) {

    var touchInfo = this.data.touchInfo;

    touchInfo.start = e.touches[0];

    this.setData({

      touchInfo: touchInfo

    })

  },

  touchEnd: function (e) {

    var touchInfo = this.data.touchInfo;

    touchInfo.end = e.changedTouches[0];

    this.setData({

      touchInfo: touchInfo

    })

    this.computer();

  },

  computer: function () {

    var that = this;

    var touchInfo = that.data.touchInfo;

    var playNum = that.data.playNum;

    if (touchInfo.start.pageY - touchInfo.end.pageY > 30) {

      ++playNum;

    }

    if (touchInfo.start.pageY - touchInfo.end.pageY < -30) {

      --playNum;

    }

    if (playNum < 0) {

      return;

    }

    if (that.data.playNum != playNum) {

      that.setData({

        playNum: playNum

      })

      that.changeVideo();

    }

  },

  changeVideo: function (callback) {

    this.videoContext = wx.createVideoContext('videPlay');

  },

})