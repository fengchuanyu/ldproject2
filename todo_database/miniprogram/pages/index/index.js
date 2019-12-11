const db = wx.cloud.database({
  env:"release-a38306"
})
const todoDB = db.collection("todos2_db");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:"",
    todoList:[]
  },


  //获取文本框内容
  inpHandle(e){
    let thisVal = e.detail.value;
    this.setData({
      inpVal:thisVal
    })
  },
  //向数据库添加代办事项
  addHandle(){
    todoDB.add({
      data:{
        title:this.data.inpVal,
        done:false
      }
    }).then((res)=>{
      this.getTodoList();
      this.setData({
        inpVal:""
      })
    })
  },
  //获取数据库中待办事项
  getTodoList(){
    wx.showLoading({
      title: 'loading',
    })
    todoDB.get().then((res)=>{
      this.setData({
        todoList:res.data
      })
      wx.hideLoading();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodoList();
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