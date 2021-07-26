// Use a schema model
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

/* Class Model
const contacts = [];

class Contact {
    constructor(fname, lname, email, subject, comment) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.reason = reason;
        this.comment = comment;
    }

    save() {
        contacts.push(this);
    }
}

module.exports = Contact; */