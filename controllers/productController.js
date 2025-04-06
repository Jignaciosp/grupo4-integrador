module.exports = {
    // Ejemplos
    detail: function(req, res) {
        res.render('product');
    },
    add: function(req, res) {
        res.render('product-add');
    },
    create: function(req, res) {
        res.redirect('/');
    }
};
