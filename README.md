
## 博客 node server

[koa-generator](https://github.com/17koa/koa-generator) 构建项目

koa + koa-router + mysql2 + sequelize

```
 "scripts": {
    "start": "node bin/www",
    "dev": "./node_modules/.bin/nodemon bin/www",
    "prd": "pm2 start bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
从 package.json 可以看出 dev 命令当项目文件有变化的时候会自动编译，start 则需要每次手动重启

运行

```
yarn dev

localhost:3000
```



### 实现功能
* [x] 登录
* [x] 分页
* [x] 查询 
* [x] 标签列表
* [x] 分类列表
* [x] 收藏列表
* [x] 文章列表
* [x] 发布文章时间轴 
* [x] 文章访问次数统计 
* [ ] 后台适配移动端
* [ ] 后台对访问文章次数进行可视化
* [ ] 评论功能

###  Logs

|时间|事件|
|:---|:---|
|2019/03/30|开发完毕 部署上线|

### Links

* [koa](https://koa.bootcss.com/)
* [sequelizejs 英文](http://docs.sequelizejs.com/)
* [sequelizejs 中文](https://itbilu.com/nodejs/npm/VkYIaRPz-.html)
* [sequelize-docs-Zh-CN](https://github.com/demopark/sequelize-docs-Zh-CN)


初尝 koa+mysql，错误之处还望斧正

喜欢或对你有帮助，欢迎右上角 star