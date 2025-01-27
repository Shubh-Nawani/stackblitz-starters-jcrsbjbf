const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    
    username: {
        type: String,
        trim: true
    },

    message: {
        type: String,
        required: true
    },

    commentedAt: {
        type: Date,
        default: Date.now,

    }
})

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: true,
        minlength: 5
    },

    content: {
        type: String,
        required: true,
        minlength: 50
    },

    author: {
        type: String,
        minlength: 1
    },

    tags: {
        type: [String]
    },

    category: {
        type: String,
        default: "General"
    },

    likes: {
        type: [String]
    },

    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },

    comments: [commentsSchema]

    




 
})






module.exports = mongoose.model("blogSchema", blogSchema)
