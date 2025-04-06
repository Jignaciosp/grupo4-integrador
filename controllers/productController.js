
const {user, products} = require("../data/simulacion");


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
