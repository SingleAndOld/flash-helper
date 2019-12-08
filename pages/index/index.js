//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isHidePage:true,
    say:'',
    bg:'',
    bgImg:[
      'https://6465-dev-wm8h8-1300819345.tcb.qcloud.la/morning.jpg?sign=1217533ca7bdecebd87d3aac87bc3dfd&t=1575801067',
      'https://6465-dev-wm8h8-1300819345.tcb.qcloud.la/afternoon.jpg?sign=feb4ccfaefae5b249a8f616a732141d4&t=1575801085',
      'https://6465-dev-wm8h8-1300819345.tcb.qcloud.la/background.jpg?sign=47572e7b60d996efdbe0b54a1e58bcec&t=1575298814'
    ],
    sayText:[
      'Good morning',
      'Good afternoon',
      'Good evening'
    ],
    flipObjs: [
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        // 初始翻牌
        isGo: false,
      },
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        isGo: false,
      },
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        isGo: false,
      },
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        isGo: false,
      },
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        isGo: false,
      },
      {
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        isGo: false,
      },
    ],// 定义牌板数组，用来存储6个Flipper翻板对象
    isGo:false,
    times:'',
  },

  onLoad: function () {
    
  },
  setTime(){
    // 开始计时
    this.data.times = setInterval(() => {
      this.getTime();
      // 获取当前时间
      let now = new Date();
      let flipObjs = [];
      let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss')
      let nextTimeStr = this.formatDate(now, 'hhiiss')
      for (let i = 0; i < this.data.flipObjs.length; i++) {
        // if (nowTimeStr[i] === nextTimeStr[i]) {
        //     continue
        // }
        flipObjs.push({
          frontText: 'number' + nowTimeStr[i],
          backText: 'number' + nextTimeStr[i],
          isGo: nowTimeStr[i] !== nextTimeStr[i],
        })
      }
      this.setData({
        isGo: true,
      }, () => {
        setTimeout(() => {
          //翻
          this.setData({
            flipObjs,
            isHidePage: false,
            isGo: false
          })
        }, 600)

      })
    }, 1000);
  },
  getTime(){
    let { sayText, bgImg} = this.data;
    let H = new Date().getHours();
    H = H < 10 ? '0' + H : H;
    let M = new Date().getMinutes();
    M = M < 10 ? '0' + M : M;
    let say = H < 12 ? sayText[0] : (H > 12 && H < 18 ? sayText[1] : sayText[2]) 
    let bg = H < 12 ? bgImg[0] : (H > 12 && H < 18 ? bgImg[1] : bgImg[2]) 
    this.setData({
      say,
      bg
    })
  },
  //正则格式化日期
  formatDate(date, dateFormat) {
    /* 单独格式化年份，根据y的字符数量输出年份
    * 例如：yyyy => 2019
            yy => 19
            y => 9
    */
    if (/ (y +) /.test(dateFormat)) {
      dateFormat = dateFormat.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 格式化月、日、时、分、秒
    let o = {
      'm+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'i+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(dateFormat)) {
        // 取出对应的值
        let str = o[k] + '';
        /* 根据设置的格式，输出对应的字符
        * 例如: 早上8时，hh => 08，h => 8
        * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
        * 例如: 下午15时，hh => 15, h => 15
        */
        dateFormat = dateFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return dateFormat;
  },
  //日期时间补零
  padLeftZero(str) {
    return ('00' + str).substr(str.length);
  },
  onShow(){
    this.setTime();
  },
  onHide(){
    clearInterval(this.data.times)
    this.setData({
      isHidePage: true
    })
  },
  onUnload(){
    clearInterval(this.data.times)
  }
  
})
