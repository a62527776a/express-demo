const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article = new Schema({
    title: String,
    author: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

exports.Article = mongoose.model('Article',article);