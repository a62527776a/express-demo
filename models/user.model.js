const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    nickname: String,
    username: String,
    password: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

exports.User = mongoose.model('User',user);