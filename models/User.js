import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    username: {
        type: String,
        unique: true,
        required: 'Username is required'
    },
    password: {
        type: String,
        unique: true,
        required: 'Password is required'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
},
{
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
},
);

const User = mongoose.model('User', userSchema);

export default User;