const {sequelize} = require('./sequelize.index');

const {Restaurant, Menu, Item} = require("./relationship")

describe('Restaurant, Menu & Item', () => {
   
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Lubys', location: 'Dallas,Tx' })
        expect(restaurant.id).toBe(1)
    })

    test('has a location', async () => {
		const restaurant = await Restaurant.create({name: 'Madeas', location : "Everman,Tx"});
		expect(restaurant.location).toBe('Everman,Tx');
    })

    test('can create a Menu', async () => {
        const menu = await Menu.create({ name: 'Lubys', location: 'Dallas,Tx' })
        expect(menu.id).toBe(1)
    })

    test('has appertizers', async () => {
        const menu = await Menu.create({appetizers: 'Chicken Wings', beverage : "Sweet Tea"});
        expect(menu.beverage).toBe('Sweet Tea');
    })

    test('Item has a name', async () => {
        const item = await Item.create({name: 'Chicken Fried Chicken', price : 10});
        expect(item.name).toBe('Chicken Fried Chicken');
    })

    test('Item has a price', async () => {
        const item = await Item.create({ name: 'Chicken Fried Chicken', price: 10 })
        expect(item.price).toBe(10)
    })

    test('Menu has many appetizers & beverage choices', async () => {
        const menu = await Menu.create({appetizers: 'wings', beverage: 'Grape Soda' })

        const fried = await Item.create({name: 'Lemon Pepper Chicken', price:  15 })
        const baked = await Item.create({name: 'Mushroom Chicken', price: 12})
        const boiled = await Item.create({name: 'Chicken & Dumpling', price: 10})

        await menu.addItem(fried)
        await menu.addItem(baked)
        await menu.addItem(boiled)

        const items = await menu.getItems()

        expect(items.length).toBe(3)
		expect(items[0] instanceof Item).toBeTruthy

    })

       
    })