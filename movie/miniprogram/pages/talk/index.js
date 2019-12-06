import md5 from "../../utils/md5.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:"",
    talkList:[]
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
  getSign(data){
    //第一步 按key进行字典升序排序
    let keyList = Object.keys(data).sort();
    //第二步将列表N中的参数对按URL键值对的格式拼接成字符串
    let urlStr = "";
    keyList.map((item) => {
      urlStr += item + "=" + encodeURI(data[item]) + "&"
    })
    //第三步拼接app_key
    urlStr += "app_key=KP1ZkfEgqPg6D93q"
    //第四步对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
    urlStr = md5(urlStr).toUpperCase()

    return urlStr;
  },
  //发送聊天请求
  sendHandle(){
    let thisTalkList = this.data.talkList;
    let _this = this;
    let data = {
      app_id:"2125167716",
      time_stamp:this.getTimeStamp(),
      nonce_str:this.getNonceStr(),
      session:"10000",
      question:this.data.inpVal
    }
    data.sign = this.getSign(data)
    wx.request({
      url: 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',
      data,
      success(res){
        console.log(res);
        thisTalkList.push({
          answer: res.data.data.answer,
          question: _this.data.inpVal
        })
        _this.setData({
          talkList: thisTalkList
        })
      }
    })
  },
  //文本框输入事件
  inpHandle(e){
    this.setData({
      inpVal: e.detail.value
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