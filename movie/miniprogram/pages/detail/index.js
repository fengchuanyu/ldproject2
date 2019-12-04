// miniprogram/pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id)
  },

  getDetail(id){
    let _this = this;
    wx.request({
      url: 'http://m.maoyan.com/ajax/detailmovie',
      data:{
        movieId:id,
        optimus_uuid:" 603E7550166711EAA975994AB5AD82183CDF9CEBB7AB4DB89BD818CBE1E5D34C",
optimus_risk_level: 71,
optimus_code: 10
      },
      success(res){
        _this.setData({
          detailInfo: res.data.detailMovie
        })
      }
    })
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