const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./controller/pages');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRouter);

mongoose.connect('mongodb+srv://root:root@cluster0.ajp3f.mongodb.net/ShopDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        app.listen(5000, () => {
            console.log('MongoDB is connected and Express server is running...')
        });
    });