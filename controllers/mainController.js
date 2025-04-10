
const datos = require("../db/datos");
const mainController = {
    index: function (req, res) {
        return res.render("index", {
            productos: datos.productos,
        });
    },
    searchResults: function (req, res) {
        return res.render("search-results", {
            productos: datos.productos,
        });
    },


};


module.exports = mainController;


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