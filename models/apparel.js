const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    img: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('ct1product', productSchema);