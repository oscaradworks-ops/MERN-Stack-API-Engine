// models/Article.js

const mongoose = require('mongoose');

// Define the structure of the Article document
const ArticleSchema = new mongoose.Schema({
    // Article Title (Required and must be unique)
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true // Removes whitespace from both ends
    },
    // Main content of the article (Required)
    content: {
        type: String,
        required: true
    },
    // Status of the article (Draft or Published)
    status: {
        type: String,
        enum: ['Draft', 'Published'],
        default: 'Draft'
    },
    // Array of strings (tags for searching)
    tags: [
        {
            type: String
        }
    ],
    // Date of creation (Mongoose automatically handles creation time)
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    // Add two fields: createdAt and updatedAt timestamps
    timestamps: true 
});

// Create and export the Mongoose Model
const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;