const Sequelize = require('sequelize');
const db = require('./db');

const restaurantModel = db.define('restaurant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.CHAR,
    address: Sequelize.CHAR,
    city: Sequelize.CHAR,
    rating: Sequelize.INTEGER
});

module.exports=restaurantModel;