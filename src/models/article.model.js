import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    author: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
});

export default ArticleSchema;
