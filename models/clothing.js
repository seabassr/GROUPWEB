const mongoose = require('mongoose');

var clothingSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model('Clothing', clothingSchema);