var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);

router.get('/id/:id', productController.filtrarID);
router.get('/add', productController.productAdd);


module.exports = router;


module.exports = router;
