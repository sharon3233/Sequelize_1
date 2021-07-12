const {sequelize, DataTypes, Model} = require('sequelize');

const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');
const { Item } = require('./Item')


//Create our Association!
Restaurant.belongsTo(Menu) //adds a foreign key on the musician table, for the band they belong to
Menu.hasMany(Item) //gives us Sequelize magic methods

module.exports = { Restaurant, Menu, Item }; // make sure we export our models with the associations added!