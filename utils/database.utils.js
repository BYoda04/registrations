const { Sequelize,DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'pass123',
    port: 5432,
    database: 'registrations'
});

module.exports = {
    db,
    DataTypes
};