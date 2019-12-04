// miniprogram/pages/talk/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取时间戳
  getTimeStamp(){
    var timer = new Date();
    return(Date.parse(timer).toString().substr(0, 10));
  },
  //获取随机字符串
  getNonceStr(){
    var num = Math.random()
    return(num.toString(16).substr(2));
  },
  //获取sign 接口鉴权
  getSign(){

  },
  //发送聊天请求
  sendHandle(){
    let data = {
      app_id:"2125167716",
      time_stamp:this.getTimeStamp(),
      nonce_str:this.getNonceStr(),
      session:"10000",
      question:"你叫啥"
    }
    wx.request({
      url: 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',
    })
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

  }
})