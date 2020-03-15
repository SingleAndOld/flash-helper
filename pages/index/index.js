// index.js
//  获取应用实例
const app = getApp()

Page({
  onLoad() {
    // 测试调用云端函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2
      }
    })
      .then(res => {
        console.log('云端函数add调用的结果', res.result) // 3
      })
      .catch(console.error)
  }
})
