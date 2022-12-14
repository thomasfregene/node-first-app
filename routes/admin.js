const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const router = express.Router();

const adminController = require('../controllers/admin')



router.use(bodyParser.urlencoded({extended: false}));

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)


module.exports = router;
