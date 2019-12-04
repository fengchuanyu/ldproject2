// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
    movieIds:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovies()
  },

  //获取首屏电影
  getMovies(){
    wx.showLoading({
      title: '加载中...',
    })
    let _this = this;
    wx.request({
      url: 'http://m.maoyan.com/ajax/movieOnInfoList',
      success(res) {
        wx.hideLoading()
        _this.setData({
          movieList: _this.fromatUrl(res.data.movieList),
          movieIds: res.data.movieIds
        })
      }
    })
  },
  //获取更多电影
  getMoreMovie(){
    let _this = this;
    let thisIds = this.data.movieIds;
    let idArr = thisIds.splice(0,10);
    let thisList = this.data.movieList;
    wx.request({
      data:{
        token:"",
        movieIds: idArr.join(",")
      },
      url: 'http://m.maoyan.com/ajax/moreComingList',
      success(res){
        let tempList = res.data.coming
        tempList = _this.fromatUrl(tempList);
        _this.setData({
          movieList: [...thisList, ...tempList],
          movieIds: thisIds
        })
      }
    })
  },
  //格式化图片地址
  fromatUrl(dataList){
    let thisList = [];
    thisList = dataList.map((item)=>{
      item.img = item.img.replace("/w.h/", "/128.180/");
      return item
    })
    return thisList;
  },
  //跳转详情页面
  goDetail(e){
    let thisId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/index?id=' + thisId,
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
    this.getMoreMovie()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})