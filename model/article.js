const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')
const moment = require('moment')

const article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING(255),
    unique: {
      msg: '已添加'
    }
  },
  author: Sequelize.STRING,
  desc: Sequelize.STRING,
  category: Sequelize.STRING,
  tag: Sequelize.STRING,
  content: Sequelize.TEXT,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
},
{
  freezeTableName: true
})

module.exports = article