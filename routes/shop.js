const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

const rootDir = require('../util/path');


router.get('/', (req, res, next)=>{
    res.render('shop');
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;