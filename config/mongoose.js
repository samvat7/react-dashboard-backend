//Config: mongoose.js
const mongoose = require('mongoose');
const BlackCofferData = require('../models/BlackCofferData');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/blackcoffer', {useNewUrlParser: true, useUnifiedTopology: true});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of connection success)
db.once('open', function() {
    console.log("Connection Successful!");
});

module.exports = db;

