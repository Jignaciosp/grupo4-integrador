var express = require('express');//importo express 
var router = express.Router();
const productController = require('../controllers/productController');// delego la logica al controller correspondiente


function onlyLogged(req, res, next) {
    if (!req.session.user) return res.redirect('/user/login');
    next();
}

router.get('/', productController.index);

router.get('/id/:id', productController.filtrarID);
router.get('/add', onlyLogged, productController.productAdd);
router.post('/create', onlyLogged, productController.store);



module.exports = router;//exporto el router para ser usado en app.js
