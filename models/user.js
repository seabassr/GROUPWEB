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
    }
});

module.exports = mongoose.model('User', userSchema);