const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController'); 


router.get('/register', usersController.show);
router.post('/newuser', usersController.create);

router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);


router.get('/logout', usersController.logout);

// primero la ruta sin parámetro
router.get('/profile', usersController.profile);

// luego la pública, con parámetro
router.get('/profile/:id', usersController.profilePublic);


module.exports = router;
