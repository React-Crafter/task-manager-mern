const { json } = require('express');
const userModel = require('../models/user');
const JWT = require('jsonwebtoken');

// register function
const register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        // check dublicate
        const existingUsername = await userModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already taken'});
        }

        const existingEmail = await userModel.findOne({ email })
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already taken'});
        }

        // create a new user
        const user = new userModel({
            name,
            username,
            email,
            password
        })
        await user.save();

        // Create jwt token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.status(201).json({ token, user: { id: user._id, name, email } });
    } catch (err) {
        res.status(500).json({ mssage: 'Server site error' });
        console.error(err)
    }
}

// Login function
const login = async (req, res) => {
    try {
        const { identyfier, password } = req.body;

        // Check if identifier and password are provided.

        if (!identyfier || !password) {
            return res.status(400).json({ message: 'Please provide email/username and password' });
        }

        // Find the user
        const user = userModel.findOne({
            $or: [
                {email: identyfier},
                {password: identyfier}
            ]
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Checking if the password matches
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invlid credentials' });
        }

        // Create jwt token
        const token = JWT.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );

        // Success Response
        return res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
            }
        });
    } catch {
        console.error(err);
        res.status(500).json({ mssage: 'Server site error' });
    }
}

module.exports = { register, login };