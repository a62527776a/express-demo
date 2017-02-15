const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    nickname: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

exports.Comment = mongoose.model('Comment',comment);