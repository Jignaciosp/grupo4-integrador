module.exports = {
    // Ejemplos
    profile: function(req, res) {
        const userInfo = {name:'Brian Gomez'}
        res.render('profile', {user: userInfo});
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
        res.render('profile-edit');
    }    
};