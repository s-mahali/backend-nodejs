const mongoose = require('mongoose');
require('dotenv').config();

//define the mongoDB connection url
//const mongoURL =  process.env.DB_LOCAL_URL;
const mongoURL =  process.env.DB_URL;

// connect to mongoDB
mongoose.connect(mongoURL);

// get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on('connected', function() {
     console.log(`Mongoose default connection open`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});


db.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});


//export the  database connection
module.exports = db;
