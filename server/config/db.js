const mongoose = require('mongoose');

// //connect to mongodb database
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected Successfully!');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // The app will close if it is not connected.
    }
}

module.exports = connectDB;