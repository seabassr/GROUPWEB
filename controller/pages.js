const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const Contact = require('./models/contact');
const Clothing = require('../models/clothing');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/clothing', (req, res) =>{

    Clothing.find()
        .then(results =>{
            res.render('clothing', {products: results});
        })
    
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