//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    time:'',
    say:'',
    sayText:[
      'Good morning',
      'Good afternoon',
      'Good evening'
    ],
  },

  onLoad: function () {
    this.getTime();
  },
  getTime(){
    let { sayText} = this.data;
    let H = new Date().getHours();
    H = H < 10 ? '0' + H : H;
    let M = new Date().getMinutes();
    M = M < 10 ? '0' + M : M;
    let say = H < 12 ? sayText[0] : (H > 12 && H < 18 ? sayText[1] : sayText[2]) 
    let time = H+':'+M;
    this.setData({
      time,
      say
    })
  }
})
