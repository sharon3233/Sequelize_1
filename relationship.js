const {sequelize, DataTypes, Model} = require('sequelize');

const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');
const { Item } = require('./Item')


//Create our Association!
Menu.belongsTo(Restaurant) //adds a foreign key on the musician table, for the band they belong to
Restaurant.hasMany(Menu) //gives us Sequelize magic methods

Item.belongsTo(Menu)
Menu.hasMany(Item)

module.exports = { Restaurant, Menu, Item }; // make sure we export our models with the associations added!