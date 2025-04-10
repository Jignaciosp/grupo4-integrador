const datos = require("../db/datos");

module.exports = {
    // Ejemplos
    profile: function(req, res) {
        res.render('profile', {user, products});
    },
    loginForm: function(req, res) {
        res.render('login', {user});
    },
    registerForm: function(req, res) {
        res.render('register', {user} );
    },
    loginProcess: function(req, res) {
        
        res.redirect('/users/profile', {user} );
    },
    registerProcess: function(req, res) {
        
        res.redirect('/');
    },
    editProfile: function(req, res) {
        const userInfo = {name:'Brian Gomez'}
        res.render('profile-edit', {user} );
    }    
};