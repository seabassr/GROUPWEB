const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    addressInfo: {
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: Number
        }
    },
    cardInfo: {
        provider: { type: String },
        holder: { type: String },
        number: { type: String },
        month: { type: String },
        year: { type: String },
        cvv: { type: String }
    }
});

module.exports = mongoose.model('User', userSchema);