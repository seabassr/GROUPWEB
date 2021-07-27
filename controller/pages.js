const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('./models/contact');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
        .then(result => {
            res.render('submitContact');
        })
        .catch(err => console.log(err));
});

module.exports = router;