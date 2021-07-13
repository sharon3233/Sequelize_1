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

    test('Restaurant has many menus', async () => {
        const menu = await Restaurant.create({name: 'Madeas', location: 'Everman,Tx' })

        const breakfast = await Menu.create({appetizers: 'French Toast roll ups', beverage: 'Apple Juice' })
        const brunch = await Menu.create({appetizers: "Kesh Bites", beverage: 'Apple Martini'})
        const lunch = await Menu.create({appetizers: 'Queso & Chips', beverage: 'Sweet Tea'})
        const dinner = await Menu.create({appetizers: 'Steak sticks', beverage: "Long Island"})

        await menu.addMenu(breakfast)
        await menu.addMenu(brunch)
        await menu.addMenu(lunch)
        await menu.addMenu(dinner)

        const menus = await menu.getMenus()

        expect(menus.length).toBe(4)
		expect(menus[0] instanceof Restaurant).toBeTruthy

    })

    test('Menu has Items under $20.00', async() => {
        const  breakfastPrices = await Menu.create({appetizers: "Breakfast", beverage: 'Juice'  })
        const  itemList = await Item.create({name:'Kesh', price: 15})
        
        
        await breakfastPrices.addItem(itemList)
        
        

        const item = await breakfastPrices.getItems()
        console.log(item[0],'prices')

        expect(item[0].price <= 20).toBe(true)
        

    })

       
    })