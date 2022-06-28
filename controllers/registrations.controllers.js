
const { Registrations } = require('../models/registrations.models');

 const getRegistrations = async (req,res)=>{
    try {
        const registrations = await Registrations.findAll();

        res.status(200).json({
            status: 'succes',
            registrations
        });
    } catch (error) {
        console.log(error);
    };
};

const getRegistrationsById = async (req,res)=>{
    try {
        const { id } = req.params;

        const registration = await Registrations.findOne({ where: { id } });

        if (!registration) {
            return res.status(404).json({
                status: 'error',
                message: 'user not found'
            });
            
        };

        res.status(200).json({
            status: 'success',
            registration
        });

    } catch (error) {
        console.log(error);
    }
};

const createRegistrations = async (req,res)=>{
    try {
        const { entranceTime } = req.body;

        const registration = await Registrations.create({
            entranceTime,
            status:"working"
        });

        res.status(201).json({
            status: 'succes',
            registration
        })
    } catch (error) {
        console.log(error);
    }
};

const updateRegistrations = async (req,res)=>{
    try {
        const { id } = req.params;
        const { exitTime } = req.body;

        const registration = await Registrations.findOne({ where: { id } });

        if (!registration) {
            res.status(404).json({
                status: 'error',
                message: 'user not exist'
            });
            
        };

        await registration.update({ 
         exitTime,
         status:"out"
        });

        return res.status(204).json({
            status: 'update'
        });

    } catch (error) {
        console.log(error);
    }
};

const deleteRegistrations = async (req,res)=>{
    try {
        const { id } = req.params;

        const registration = await Registrations.findOne({ where: { id } });

        if (!registration) {
            res.status(404).json({
                status: 'error',
                message: 'user not exist'
            });
            
        };

        await registration.update({ status:"deleted" });

        return res.status(204).json({
            status: 'delete'
        });

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getRegistrations,
    getRegistrationsById,
    createRegistrations,
    updateRegistrations,
    deleteRegistrations
};
