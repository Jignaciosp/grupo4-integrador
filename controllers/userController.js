const userInfo = {name:'Brian Gomez'}

let productosUsuario = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', commentsCount: 3 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', commentsCount: 7 },
    // Ejemplo solo para ver que esta funcionando
];

module.exports = {
    // Ejemplos
    profile: function(req, res) {
        res.render('profile', {user: userInfo, products: productosUsuario});
    },
    loginForm: function(req, res) {
        res.render('login');
    },
    registerForm: function(req, res) {
        res.render('register');
    },
    loginProcess: function(req, res) {
        
        res.redirect('/users/profile');
    },
    registerProcess: function(req, res) {
        
        res.redirect('/');
    },
    editProfile: function(req, res) {
        const userInfo = {name:'Brian Gomez'}
        res.render('profile-edit', {user: userInfo});
    }    
};