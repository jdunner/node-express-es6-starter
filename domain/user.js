import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    roles:{
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy:{
        type: String,
        required: true
    }
});

export default mongoose.model('User', UserSchema);