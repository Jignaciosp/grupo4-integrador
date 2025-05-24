const db = require("../database/models");
const Producto = db.Producto;
const Op = db.Sequelize.Op;

const productController = {

    index: function(req, res) {
        Producto.findAll()
        .then(productos => {
            return res.render("products", { productos }); 
        })
        .catch(error => res.send(error));
    },

    filtrarID: function(req, res) {
        let idProducto = req.params.id;

        db.Producto.findByPk(idProducto, {
            include: [
                { association: 'usuario' },
                {
                    association: 'comentarios',
                    include: ['usuario'] // Esto es CLAVE
                }
            ]
        })
    .then(producto => {
        if (!producto) return res.send("Producto no encontrado");

        return res.render("product", {
            detalle: [producto],
            infoComentarios: producto.comentarios || []
        });
    })
    .catch(error => res.send(error));
    },
    productAdd: function(req, res) {
    // si necesitás usuarios, cargalos
    db.Usuario.findAll()
    .then(usuarios => {
        return res.render("productAdd", {
            usuario: usuarios
        });
    })
    .catch(error => res.send(error));
}
}
module.exports = productController;
