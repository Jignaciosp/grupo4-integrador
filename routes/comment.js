const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


// Ruta POST para crear comentario
router.post('/create', commentController.store);

module.exports = router;
