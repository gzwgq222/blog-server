const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

const tag = sequelize.define('tag', {
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
  }
}, {freezeTableName: true})

module.exports = tag