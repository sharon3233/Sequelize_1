const {sequelize, DataTypes, Model} = require('./sequelize.index');


class Item extends Model {

    

}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Item
};