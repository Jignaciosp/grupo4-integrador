var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/create', productController.create);
///router.post('/create', productController.store) primera entrega es solo get

module.exports = router;
