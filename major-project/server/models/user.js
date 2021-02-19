const Sequelize = require('sequelize');
const db = require('./db');

//User Model
const userModel = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: Sequelize.CHAR,
    email: Sequelize.CHAR,
    password: Sequelize.CHAR,
    address: Sequelize.CHAR,
    city: Sequelize.CHAR,
    phone: Sequelize.CHAR
});

module.exports = userModel;