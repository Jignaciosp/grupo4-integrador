const userInfo = {name:'Brian Gomez'}

module.exports = {
    // Ejemplos
    detail: function(req, res) {
        res.render('product', { user: userInfo } );
    },
    add: function(req, res) {
        res.render('product-add', { user: userInfo } );
    },
    create: function(req, res) {
        res.redirect('/');
    }
};
