const express = require('express');

//CONTROLLERS
const { getRegistrations, createRegistrations, getRegistrationsById, updateRegistrations, deleteRegistrations } =  require('../controllers/registrations.controllers')

const registrationsRouter = express.Router();

registrationsRouter.get('/registrations',getRegistrations);
registrationsRouter.get('/registrations/:id',getRegistrationsById);
registrationsRouter.post('/registrations',createRegistrations);
registrationsRouter.patch('/registrations/:id',updateRegistrations);
registrationsRouter.delete('/registrations/:id',deleteRegistrations);

module.exports = {
    registrationsRouter   
};