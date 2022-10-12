const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const router = express.Router();

const productsController = require('../controllers/products')



router.use(bodyParser.urlencoded({extended: false}));

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)

module.exports = router;
