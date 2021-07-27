const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const Contact = require('./models/contact');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/clothing', (req, res) => {
    res.render('clothing');
});

router.get('/vehicles', (req, res) => {
    res.render('vehicles');
});

router.get('/weapons', (req, res) => {
    res.render('weapons');
});

router.post('/contactus', (req, res) => {
    res.render('contactus');
});

module.exports = router;