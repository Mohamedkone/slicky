const mongoose = require('mongoose');
require('dotenv').config()

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;