const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')

const Example = sequelize.define('Example', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
}, {freezeTableName: true})

// Example.sync({force: true})
module.exports = Example