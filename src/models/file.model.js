import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FileSchema = new Schema({
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
});

export default FileSchema;
