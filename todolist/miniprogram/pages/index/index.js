// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList:[
      {
        id:101,
        title:"测试一",
        isCheck:false
      },
      {
        id: 102,
        title: "测试二",
        isCheck: false
      },
      {
        id: 103,
        title: "测试三",
        isCheck: false
      }
    ]
  },
  // 选中行
  checkHandle(e){
    let nowId = e.currentTarget.dataset.id;
    let nowList = this.data.todoList;
    nowList = nowList.map((item)=>{
      if(nowId == item.id){
        item.isCheck = !item.isCheck
        return item
      }
      return item;
    })
    this.setData({
      todoList: nowList
    })
  },
  //完成单行
  doneHandle(e){
    let nowId = e.currentTarget.dataset.id;
    let nowList = this.data.todoList;
    nowList = nowList.filter((item)=>{
      if(item.id != nowId){
        return item
      }
    })
    console.log(nowList);
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