const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Apparel = require('../models/apparel');
const Vehicles = require('../models/vehicles');
const Equipment = require('../models/equipment');
const Cart = require('../models/cart');
const { render } = require('ejs');
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
                    pageTitle: "Apparel"
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
    res.render('contactus',
        {
            pageTitle: "Contact Us"
        }
    );
});

router.post('/add-cart', (req, res) => {
    const itemId = req.body.id;
    const catId = req.body.catId;
    var prod = Apparel;
    var imgCategory = 'ct1';

    if (catId == 'ct2' ) {
        prod = Vehicles;
        imgCategory = 'ct2';
    }
    else if (catId == 'ct3') {
        prod = Equipment;
        imgCategory = 'ct3';
    }

    prod.findById(itemId)
        .then(result => {
            Cart.findOneAndUpdate({itemId: itemId}, {$inc: {quantity: 1}},
                function(err, doc) {
                    if(err) {
                        console.log("err");
                    }
                    if(doc == null) {
                        var item = {itemId: itemId, title: result.title, price: result.price, quantity: 1, img: result.img, category: imgCategory};
                        Cart.collection.insertOne(item);
                    }
            });
        })
        .catch(err => console.log(err));
});

router.get('/view-cart', (req, res) => {
    retrieveAllFromCart(res)
});

router.get('/shipping', (req, res) => {
    Cart.find()
        .then(results => {
            res.render('shipping', {products: results, pageTitle: 'Shipping'});
        })
        .catch(err => console.log(err));
});

router.post('/change-cart-quantity/:prodId', (req, res) => {
    var newProductQuantity = parseInt(req.body.newQuantity);
    const productitemId = req.body.itemId;

    // Server-side verification
    if( typeof newProductQuantity == 'number' && isNaN(newProductQuantity) == false ){
        
        newProductQuantity = Math.max( 1, newProductQuantity );
        newProductQuantity = Math.min( 999, newProductQuantity );

        Cart.findOneAndUpdate( {itemId: productitemId}, { $set: {quantity: newProductQuantity} } )
            .then(results => {
                retrieveAllFromCart(res);
            })
            .catch(err => console.log(err));
    
    }
    else{
        retrieveAllFromCart(res);
    }
});

router.get('/remove/:itemId', (req, res) => {
    Cart.findOneAndDelete({itemId: req.params.itemId},
        function(err, doc) {
            if(err) {
                console.log(err);
            }
            retrieveAllFromCart(res);
    });
});

router.post('/finalCheckout', (req, res) => {
    Cart.collection.drop();
        res.render('finalCheckout');
    });

function retrieveAllFromCart(res) {
    Cart.find()
        .then(results => {
            res.render('view-cart', {products: results, pageTitle: 'All Items in Cart'});
        })
        .catch(err => console.log(err));
}

module.exports = router;