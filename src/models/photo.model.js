import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

export default PhotoSchema
