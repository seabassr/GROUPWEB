const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    name: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Article', articleSchema);