// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"release-a38306"
})
const db = cloud.database()
const todoDB = db.collection("todos2_db");
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await todoDB.where({
      _id:_.in(event.ids)
    }).update({
      data:{
        done:true
      }
    })
  }catch(err){

  }
}