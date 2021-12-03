const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(process.env.TABLE_NAME, process.env.TABLE_USERNAME, process.env.TABLE_PASSWORD, {
    host: process.env.TABLE_HOST,
    dialect: 'mysql',
    timezone: '-03:00',
})

module.exports = connection;