import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    nickname: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

export default CommentSchema