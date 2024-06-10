const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('web_2024', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' */
});

module.exports = sequelize;