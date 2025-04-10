
const datos = require("../db/datos")


module.exports = {
    // Ejemplos
    detail: function(req, res) {
        res.render('product', { user } );
    },
    add: function(req, res) {
        res.render('product-add', { user } );
    },
    create: function(req, res) {
        res.redirect('/');
    }
};
