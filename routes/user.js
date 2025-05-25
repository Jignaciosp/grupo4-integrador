const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController'); 

router.get('/register', usersController.show);
router.post('/register', usersController.create);

router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);

router.get('/logout', usersController.logout);
router.get('/profile/:id', usersController.profile); // si usás profile

module.exports = router;
