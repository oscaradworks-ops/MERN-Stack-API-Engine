// db/connection.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Mongoose options to prevent deprecation warnings
            serverApi: { version: '1', strict: true, deprecationErrors: true }
        });
        console.log('MongoDB connection established successfully.');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        // Exit process with failure
        process.exit(1); 
    }
};

module.exports = connectDB;