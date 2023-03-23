const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Item = sequelize.define('item', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
 },
 item_list: {
    type: Sequelize.STRING,
    allowNull: false
 },
 Description: {
    type: Sequelize.STRING,
    allowNull: false
 }
})

module.exports = Item;