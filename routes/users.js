var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile', userController.profile);
router.get('/login', userController.loginForm);
router.get('/register', userController.registerForm);
router.get('/profile/edit', userController.editProfile);

module.exports = router;