const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const connectdb = require('./config/db');

// Configation
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection
connectdb();

// Rutes
app.get('/', (req, res) => {
    res.send('Task Manager Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});