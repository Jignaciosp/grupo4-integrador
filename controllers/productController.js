const db = require("../database/models");
const Producto = db.Producto;
const Op = db.Sequelize.Op;

const productController = {

    index: function(req, res) {
        Producto.findAll()
        .then(productos => {
            return res.render("products", { productos }); // Vista: products.ejs
        })
        .catch(error => res.send(error));
    },

    detalle: function(req, res) {
        let idProducto = req.params.id;

        Producto.findByPk(idProducto, {
            include: ['usuario'] // si querés mostrar quién lo subió
        })
        .then(producto => {
            if (!producto) return res.send("Producto no encontrado");
            return res.render("detalleProducto", { producto }); // Vista: detalleProducto.ejs
        })
        .catch(error => res.send(error));
    },

    buscar: function(req, res) {
        let keyword = req.query.search;

        Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${keyword}%`
                }
            },
            include: ['usuario']
        })
        .then(productos => {
            return res.render("search-results", {
                productos,
                keyword
            });
        })
        .catch(error => res.send(error));
    }
};

module.exports = productController;
