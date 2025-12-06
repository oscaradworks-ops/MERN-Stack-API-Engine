// server.js

// ********************************************
// 1. MUST BE THE FIRST LINE to load environment variables!
require('dotenv').config();
// ********************************************

const express = require('express');
const connectDB = require('./db/connection'); // La función connectDB usa process.env.MONGODB_URI

const app = express();
const PORT = process.env.PORT || 5000; 

// 2. Now that the URI is available, connect to the database
connectDB();

// 3. Middleware setup (to parse JSON requests)
app.use(express.json());
// **********************************************
// 4. Import and use the Article Routes 
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes); // All routes start with /api/articles
// **********************************************

// 5. Basic Route (Test endpoint)
app.get('/', (req, res) => {
    res.send('BlogEngine API is running!');
});

// 6. Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});