const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();
const upload = require('../middleware/upload');

// router.post('/addproduct', upload.single('image'), productController.addProduct);
router.post('/addproduct', productController.addProduct);
router.get('/getproduct', productController.getProducts);
module.exports = router;
