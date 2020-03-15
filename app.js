// app.js
App({
  'cloud': true,
  onLaunch: function () {
    // 展示本地存储能力

    // 小程序端初始化
    wx.cloud.init({
      env: 'dev-wm8h8',
      traceUser: true
    })

  },
  globalData: {
    userInfo: null
  }
})