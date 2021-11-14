const Sequelize = require('sequelize');
const path = 'mysql://root:admin@localhost:3307/lean_tech_db';
const sequelize = new Sequelize(path);
module.exports = sequelize;