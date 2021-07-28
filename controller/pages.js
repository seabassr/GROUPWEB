const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Apparel = require('../models/apparel');
const Vehicles = require('../models/vehicles');
const Equipment = require('../models/equipment');
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
    Apparel.find()
        .then(results =>{
            res.render('vehicles',
                {
                    products: results,
                    imgcategory: "ct2"
                }
            );
        })
});

router.get('/equipment', (req, res) => {
    Apparel.find()
        .then(results =>{
            res.render('equipment',
                {
                    products: results,
                    imgcategory: "ct3"
                }
            );
        })
});

router.get('/contactus', (req, res) => {
    res.render('contactus');
});

module.exports = router;