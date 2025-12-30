const JWT = require('jsonwebtoken');

// Protect routes - verify JWT token
const auth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(201).json({ message: 'No token, authorization denied' });
        }

        const token = authHeader.replace('Bearer ', '').trim();

        // Verify token
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = {id: decoded.id};

        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;