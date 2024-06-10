const sequelize = require('../DB');

const User = require('../models/User');
const Todo = require('../models/Todo');

User.hasMany(Todo);
Todo.belongsTo(User);
Todo.hasMany(User);
User.belongsTo(Todo);

const init = async () => {
    await User.sync({alter: true});
    await Todo.sync({alter: true});
}

module.exports = { init, User, Todo };