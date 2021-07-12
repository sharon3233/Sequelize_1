const {sequelize, DataTypes, Model} = require('./sequelize.index');


class Menu extends Model {

    

}
Menu.init({
    appetizers: DataTypes.STRING,
    beverage: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};