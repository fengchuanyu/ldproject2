// component/linda/index.js
Component({
  options: {
    styleIsolation: 'apply-shared',
    multipleSlots: true 
  },
  /**
   * 组件的属性列表
   */
  properties: {
    testnum:{
      type:Number,
      value:50
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapHandle(){
      this.triggerEvent("teshand",{n:500})
    }
  }
})
