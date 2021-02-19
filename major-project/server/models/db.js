const Sequelize = require('sequelize');
const mysql = require('mysql2');
const cors = require('cors');
const dbconf = require('./dbconf.json');
const bodyParser = require('body-parser');

const db = new Sequelize(
    dbconf.database,
    dbconf.user,
    dbconf.password, {
        dialect: 'mysql',
        logging: console.log,
        define: {
            timestamps: false,
            id: false
        }
    }
);

module.exports = db;
