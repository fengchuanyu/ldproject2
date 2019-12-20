// miniprogram/pages/up_img/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"",
    fileId:""
  },
  //选中图片
  chooseImg(){
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        this.setData({
          imgUrl:res.tempFilePaths[0]
        })
      },
    })
  },
  //上传图片
  upImg(){
    wx.showLoading({
      title: 'loading',
    })
    let str = Math.random().toString(16).substr(2);
    let fileExt = this.data.imgUrl.replace(/.+\./,"");
    //test.jpg test.test1.jpg
    wx.cloud.uploadFile({
      cloudPath: 'img/'+str+'.'+fileExt,
      filePath: this.data.imgUrl, 
      success: res => {
        this.setData({
          fileId:res.fileID
        })
        wx.hideLoading()
      },
    })
  },
  //下载图片
  downImg(){
    wx.cloud.downloadFile({
      fileID:this.data.fileId,
      success:(res)=>{
        console.log(res);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success:(res)=>{
            console.log(res)
          }
        })
      }
    })
  },
  //删除图片
  delImg(){
    wx.cloud.deleteFile({
      fileList:[this.data.fileId]
    }).then((res)=>{
      console.log(res);
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