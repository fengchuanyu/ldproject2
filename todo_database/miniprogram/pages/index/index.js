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
    todoList:[],
    orderType:0
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
    let thisOrder = this.data.orderType;
    let whereOjb = {}
    if(thisOrder==0){
      whereOjb = {}
    }else if(thisOrder==1){
      whereOjb = {
        done:true
      }
    }else if(thisOrder == 2){
      whereOjb = {
        done:false
      }
    }
    wx.showLoading({
      title: 'loading',
    })
    todoDB.where(whereOjb).get().then((res)=>{
      let thisList = [];
      thisList = res.data.map((item)=>{
        item.isCheck = false;
        return item;
      })
      this.setData({
        todoList:thisList
      })
      wx.hideLoading();
    })
  },
  //根据条件获取数据 
  getOrder(e){
    let thisOrder = e.currentTarget.dataset.order;
    this.setData({
      orderType:thisOrder
    })
    this.getTodoList()
  },
  //修改完成
  doneHandle(e){
    let thisId = e.currentTarget.dataset.id;
    let isDone = e.currentTarget.dataset.done;
    console.log(thisId)
    if(isDone){
      todoDB.doc(thisId).remove({
        success:(res)=>{
          console.log(res)
          this.getTodoList()
        }
      })
    }else{
      todoDB.doc(thisId).update({
        data:{
          done:true
        },
        success:(res)=>{
          console.log(res)
          this.getTodoList()
        }
      })
    }
    
  },
  //选中状态
  checkHandle(e){
    let thisId = e.currentTarget.dataset.id;
    let thisList= this.data.todoList;
    thisList = thisList.map((item)=>{
      if(item._id == thisId){
        item.isCheck = true;
      }
      return item;
    })
    this.setData({
      todoList:thisList
    })
  },
  //完成选中
  doneCheckHandle(){
    let thisIds = [];
    let thisList = this.data.todoList;
    thisList.map((item)=>{
      if(item.isCheck){
        thisIds.push(item._id)
      }
    })
    wx.cloud.callFunction({
      name:"todo_update2",
      data:{
        ids:thisIds
      }
    }).then((res)=>{
      console.log(res)
      this.getTodoList();
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