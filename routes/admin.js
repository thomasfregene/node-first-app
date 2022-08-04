const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

// /admin/add-product => GET
router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../','views','add-product.html'))
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;