const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

// GET /api/users/me - Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;