const mongoose = require('mongoose');

//define the mongoDB connection url
const mongoURL =  'mongodb://127.0.0.1:27017/mydb'; 

// connect to mongoDB
mongoose.connect(mongoURL);

// get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on('connected', function() {
     console.log(`Mongoose default connection open to ${mongoURL}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});


db.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});


//export the  database connection
module.exports = db;
