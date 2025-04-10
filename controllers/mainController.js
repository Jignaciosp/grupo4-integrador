
const datos = require("../db/datos");


module.exports = {
    // Ejemplos
    index: function(req, res) {
        
        res.render('index', { title: 'Express', products , user, logeado: true });
    },
    login: function(req, res) {
        res.render('login', { user } );
    },
    register: function(req, res) {
        res.render('register', { user } );
    },
    search: function(req, res) {
        res.render('search-results', { user } );
    },
    productDetail: function(req, res) {
        res.render('product', { user } );
    }
};