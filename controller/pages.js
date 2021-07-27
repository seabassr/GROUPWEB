const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const Contact = require('./models/contact');
const Apparel = require('../models/apparel');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/apparel', (req, res) =>{

    Apparel.find()
        .then(results =>{
            res.render('apparel',
                {
                    products: results,
                    imgcategory: "ct1"
                }
            );
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