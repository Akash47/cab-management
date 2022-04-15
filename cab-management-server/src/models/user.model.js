const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userName: {
        type: String,
    },
    aaycardNumber: {
        type: Number,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
});


module.exports = { User };