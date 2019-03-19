const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

// 参考文档：https://itbilu.com/nodejs/npm/V1PExztfb.html

const Example = sequelize.define('Example', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    unique: {
      msg: '已添加'
    }
  },
  age: Sequelize.INTEGER
}, {freezeTableName: true})

// Example.sync({force: true})
module.exports = Example