var express = require('express');//importo express 
var router = express.Router();
const productController = require('../controllers/productController');// delego la logica al controller correspondiente



router.get('/', productController.index);

router.get('/id/:id', productController.filtrarID);
router.get('/add', productController.productAdd);
router.post('/create', productController.store);



module.exports = router;//exporto el router para ser usado en app.js
