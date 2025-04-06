module.exports = {
    // Ejemplos
    index: function(req, res) {
        let products = [
            { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', commentsCount: 3 },
            { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', commentsCount: 7 },
            // Ejemplo solo para ver que esta funcionando
        ];
        res.render('index', { title: 'Express', products });
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    search: function(req, res) {
        res.render('search-results');
    },
    productDetail: function(req, res) {
        res.render('product');
    }
};