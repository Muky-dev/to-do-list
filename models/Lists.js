import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    }
});

const List = mongoose.model('List', listSchema);

export default List;

