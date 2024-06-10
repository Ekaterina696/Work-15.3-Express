const sequelize = require('../DB');
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
},
    {
        tableName: 'todos',
    },
);

module.exports = Todo;