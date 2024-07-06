const express = require('express');
const categoryController = require('../controller/categoryController');
const router = express.Router();

router.post('/addcategory', categoryController.addCategory);
router.get('/getcategory', categoryController.getCategories);

module.exports = router;
