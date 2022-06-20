const express = require('express');
const { Sequelize,DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'pass123',
    port: 5432,
    database: 'registrations'
});

db.authenticate()
    .then(()=>console.log('db authenticated'))
    .catch(err=>console.log(err))

db.sync()
    .then(()=>console.log('db synced'))
    .catch(err=>console.log(err))

const Registrations = db.define('registrations', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const app = express();

app.use(express.json());

app.get('/registrations', async (req,res)=>{
    try {
        const registrations = await Registrations.findAll();

        res.status(200).json({
            status: 'succes',
            registrations
        });
    } catch (error) {
        console.log(err);
    };
});

app.listen(4000,()=>{
    console.log('express app running!!');
})