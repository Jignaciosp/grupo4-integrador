const userInfo = {name:'Brian Gomez'}

let productosUsuario = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', commentsCount: 3 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', commentsCount: 7 },
    // Ejemplo solo para ver que esta funcionando
];

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
