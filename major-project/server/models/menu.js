const Sequelize = require('sequelize');
const db = require('./db');
const restaurantModel = require('./restaurant');

const menuModel = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    rest_id:{
        type: Sequelize.INTEGER,
        references:{
            model:'restaurantModel'
        }
    },
    email: Sequelize.CHAR,
    password: Sequelize.CHAR,
    address: Sequelize.CHAR,
    city: Sequelize.CHAR,
    phone: Sequelize.CHAR
});