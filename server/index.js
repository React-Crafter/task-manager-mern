const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const connectdb = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');   // register & login

// Configation
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection creation
connectdb();

// Rutes
app.get('/', (req, res) => {
    res.send('Task Manager Backend is Running!');
});

app.use('/api/auth', authRoutes);   // Public routes: /api/auth/register, /api/auth/login

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});