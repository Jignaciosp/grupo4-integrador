var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/create', productController.create);

module.exports = router;
