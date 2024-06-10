const { Sequelize } = require('sequelize');


export const sequelize = new Sequelize('web_2024', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb', /* one of 'mysql' | 'mariadb' */
});
