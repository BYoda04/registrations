const express = require('express');
const { registrationsRouter } = require('./routes/registrations.routes')
const { db } = require('./utils/database.utils');


db.authenticate()
    .then(()=>console.log('db authenticated'))
    .catch(err=>console.log(err))

db.sync()
    .then(()=>console.log('db synced'))
    .catch(err=>console.log(err))

//INIT EXPRESS APP
const app = express();

app.use(express.json());

app.use('/api/v1',registrationsRouter);

app.listen(4000,()=>{
    console.log('express app running!!');
})