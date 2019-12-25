# flash-helper
##  2019-12-04
- 新建小程序项目

## 2019-12-21
- 小程序增加云函数add
    1. 在根目录新建functions文件夹，
    2. 在project.config.json 中增加了字段 cloudfunctionRoot：'functions/' 
    3. app.js增加字段 cloud: true
    4. 对着functions目录，右键新增node.js云函数，填入云函数名字，本地终端进入该文件夹，npm install 初始化，右键上传云函数

- 增加eslint
    - 禁止使用尾空格，尾空行，尾逗号，尾分号

## 2019-12-25
- 发现实用的腾讯云开发者手册
    - [腾讯云开发者手册](https://cloud.tencent.com/developer/devdocs)