const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

const category = sequelize.define('category', {
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

module.exports = category