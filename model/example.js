const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

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