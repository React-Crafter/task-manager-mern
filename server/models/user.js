const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 2,
        maxlenght: 50
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlenght: 3,
        maxlenght: 20,
        match: /^[a-zA-Z0-9_]+$/,
        sparse: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving the user
userSchema.pre('save', async function() {
  // Only hash if password is modified (for future password change)
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

module.exports = mongoose.model('User', userSchema);