const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    reason: {
        type: String
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model('Contact', contactSchema);