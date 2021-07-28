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
                    imgcategory: "ct1",
                    pageTitle: "Our Apparel"
                }
            );
        })
});

router.get('/apparel/:prodId', (req, res) => {
    Apparel.findById(req.params.prodId)
        .then( result => {
            res.render('product-details', {prod: result, prodCategory: "ct1"});
        })
        .catch(err => console.log(err));
})

router.get('/vehicles', (req, res) => {
    Vehicles.find()
        .then(results =>{
            res.render('vehicles',
                {
                    products: results,
                    imgcategory: "ct2",
                    pageTitle: "Vehicles"
                }
            );
        })
});

router.get('/vehicles/:prodId', (req, res) => {
    Vehicles.findById(req.params.prodId)
        .then( result => {
            res.render('product-details', {prod: result, prodCategory: "ct2"});
        })
        .catch(err => console.log(err));
})

router.get('/equipment', (req, res) => {
    Equipment.find()
        .then(results =>{
            res.render('equipment',
                {
                    products: results,
                    imgcategory: "ct3",
                    pageTitle: "Equipment"
                }
            );
        })
});

router.get('/equipment/:prodId', (req, res) => {
    Equipment.findById(req.params.prodId)
        .then( result => {
            res.render('product-details', {prod: result, prodCategory: "ct3"});
        })
        .catch(err => console.log(err));
})

router.get('/contactus', (req, res) => {
    res.render('contactus');
});

module.exports = router;