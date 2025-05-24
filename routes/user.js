var express = require('express');//importo express 
var router = express.Router();
const userController = require('../controllers/userController');// delego la logica al controller correspondiente

router.get('/profile', userController.profile);

router.get('/login', userController.login);
router.post('/processLogin', usersController.processLogin);

router.get('/register', userController.show);
router.post('/register', usersController.create);


module.exports = router;//exporto el router para ser usado en app.js