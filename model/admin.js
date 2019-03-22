const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

const admin = sequelize.define('admin', {
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
  password: {
    type: Sequelize.INTEGER(6)
  }
}, {freezeTableName: true})

module.exports = admin