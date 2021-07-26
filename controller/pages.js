const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('./models/contact');
const Article = require('./models/article');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/experience', (req, res) => {
    res.render('experience');
});

router.get('/skills', (req, res) => {
    res.render('skills');
});

router.get('/education', (req, res) => {
    res.render('education');
});

router.get('/lifestyle', (req, res) => {
    res.render('lifestyle');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/article', (req, res) => {
    Article.find()
        .then(results => {
            res.render('article', {articles: results});
        })
        .catch(err => console.log(err));
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

router.post('/submitArticle', (req, res) => {
    const date = new Date().toLocaleString();

    const article = new Article ({
        title: req.body.title,
        date: date,
        content: req.body.content,
        name: req.body.name
    });

    Article.collection.insertOne(article)
        .then(result => {
            console.log('result');
        })
        .catch(err => console.log(err));

    Article.find()
        .then(results => {
            res.render('submitArticle', {articles: results});
        })
        .catch(err => console.log(err));
});

/* router.post('/submitContact', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const subject = req.body.subject;
    const comment = req.body.comment;

    const contact = new Contact(fname, lname, email, subject, comment);
    contact.save();

    res.render('submitContact', {contact: contact});
}); */

/* router.post('/submitArticle', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = new Date().toLocaleString();

    const article = new Article(title, date, content);
    article.save();

    const articles = article.findAll();

    res.render('submitArticle', {articles: articles});
}); */

module.exports = router;