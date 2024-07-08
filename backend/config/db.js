const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

function dbConnection() {
    const DB_URL = process.env.DB_URL;
    const options = {
        family : 4
    }
    mongoose.connect(DB_URL, options);

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.log("Error connecting to the database!");
    });

    db.once('open', (event) => {
        console.log("Connection to DB successful!");
    });

    return db;
}

module.exports = dbConnection;