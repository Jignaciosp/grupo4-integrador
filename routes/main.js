var express = require('express'); //importo express 
var router = express.Router();
const mainController = require('../controllers/mainController'); // delego la logica al controller correspondiente

router.get('/', mainController.index);

router.get('/searchresults', mainController.searchResults);

module.exports = router; //exporto el router para ser usado en app.js