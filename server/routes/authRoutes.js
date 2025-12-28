const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register a new user (auto-login with token)
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user (supports email or username) and return token
// @access  Public
router.post('/login', login);

module.exports = router;