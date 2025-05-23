const db = require('../database/models');
const Producto = db.Producto;
const Usuario = db.Usuario;

const productController = {

    index: function(req, res) {
        Producto.findAll({
            include: ['usuario']
        })
        .then(productos => {
            return res.render("product", {
                info: productos
            });
        })
        .catch(error => res.send(error));
    },

    filtrarID: function (req, res) {
        let IDbuscado = req.params.id;

        Producto.findByPk(IDbuscado, {
            include: ['usuario', 'comentarios'] // opcional si vas a mostrar comentarios
        })
        .then(producto => {
            if (!producto) return res.send("Producto no encontrado");

            return res.render("product", {
                detalle: producto,
                infoComentarios: producto.comentarios || [] // opcional
            });
        })
        .catch(error => res.send(error));
    },

    productAdd: function(req, res) {
        return res.render('productAdd');
    }
};

module.exports = productController;


