const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: true},
    rating: {type: DataTypes.INTEGER, allowNull: true, defaultValue: 0},
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketItem = sequelize.define('basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ItemInfo = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER,}
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Type.hasMany(Item)
Item.belongsTo(Type)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(Rating)
Rating.belongsTo(Item)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(ItemInfo)
ItemInfo.belongsTo(Item)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})


module.exports = {
    User, Item, Basket, BasketItem, Type, Brand, ItemInfo, Rating, TypeBrand
}