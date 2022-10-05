const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.use(bodyParser.urlencoded({extended: false}));

// /admin/add-product => GET
router.get('/add-product', (req, res, next)=>{
    res.render('add-product',{pageTitle:'Add Product', path:'/admin/add-product'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title})
    res.redirect('/');
})

exports.routes = router;
exports.products = products;
