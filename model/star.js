const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')
const moment = require('moment')

const star = sequelize.define('star', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm')
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm')
    }
  }
},
{
  freezeTableName: true
})

module.exports = star