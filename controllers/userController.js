const datos = require("../db/datos");
const userController = {
    login: function(req, res){
        return res.render('login', 
            {usuario: datos.usuarios, 
                productos: datos.productos,
        })
    },
    register: function (req, res) {
            return res.render('register', 
                {datos: datos.usuarios,
            })
    },
    profile: function(req, res){
        return res.render('profile', 
            {usuario: datos.usuarios, 
            productos:  datos.productos
        })
    },


};
module.exports = userController;