// routes/articleRoutes.js

const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // Import the Article Model

// --- 1. CREATE an Article (POST /api/articles) ---
router.post('/', async (req, res) => {
    try {
        // Create a new article using data from the request body (req.body)
        const newArticle = new Article(req.body);
        const savedArticle = await newArticle.save();
        
        // Respond with the newly created article (Status 201: Created)
        res.status(201).json(savedArticle);
    } catch (err) {
        // Handle validation errors or duplicate key errors
        res.status(400).json({ message: err.message });
    }
});

// --- 2. READ ALL Articles (GET /api/articles) ---
router.get('/', async (req, res) => {
    try {
        // Find all articles and sort them by creation date descending
        const articles = await Article.find().sort({ createdAt: -1 });
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: 'Server error retrieving articles.' });
    }
});

// --- 3. READ ONE Article by ID (GET /api/articles/:id) ---
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        
        if (!article) {
            return res.status(404).json({ message: 'Article not found.' });
        }
        
        res.json(article);
    } catch (err) {
        // Handle invalid ID format (e.g., non-existent ID length)
        res.status(500).json({ message: 'Error retrieving article.' });
    }
});

// --- 4. UPDATE an Article by ID (PUT/PATCH /api/articles/:id) ---
router.put('/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        const updates = req.body;
        
        // Find the article by ID and update it.
        // { new: true } returns the updated document instead of the original one.
        // { runValidators: true } ensures Mongoose runs the schema validations on the update.
        const updatedArticle = await Article.findByIdAndUpdate(articleId, updates, {
            new: true,
            runValidators: true
        });

        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found for update.' });
        }
        
        res.json(updatedArticle); // Respond with the updated article
    } catch (err) {
        // Handle validation errors or incorrect data format
        res.status(400).json({ message: err.message });
    }
});

// --- 5. DELETE an Article by ID (DELETE /api/articles/:id) ---
router.delete('/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        
        // Find the article by ID and delete it
        const deletedArticle = await Article.findByIdAndDelete(articleId);

        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found for deletion.' });
        }

        // Respond with a success message 
        res.status(200).json({ message: 'Article deleted successfully.' });
        
    } catch (err) {
        // Handle issues like malformed ID format
        res.status(500).json({ message: 'Error deleting article.' });
    }
});

module.exports = router;