import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

export default UserSchema
