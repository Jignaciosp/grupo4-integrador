const db = require("../database/models");
const Producto = db.Producto;
const Op = db.Sequelize.Op;

//store se usa oara crear y guardar un nuevo recurso (como un comentario o producto).
// create se usa para mostrar el formulario de carga (por ejemplo --> productAdd)
//show se usa normalmente para mostrar un recurso (por ejmplo --> ver el detalle de un producto)
const productController = {

    index: function(req, res) {
        Producto.findAll()
        .then(productos => {
            return res.render("product", { productos }); 
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
                    include: ['usuario']
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
        if (!req.session.user) return res.redirect('/user/login');
        return res.render("productAdd");
    },

    store: (req, res) => {
    const { nombre, descripcion, imagen } = req.body;
    const imagenFinal = imagen && imagen !== "" ? "products/" + imagen : "products/default.jpg";

    db.Producto.create({
        nombre,
        descripcion,
        imagen: imagenFinal,
        usuarioId: req.session.user.id,
        createdAt: new Date()
    })
    .then(() => res.redirect('/user/profile/' + req.session.user.id))
    .catch(err => res.send("Error al crear producto: " + err));
}
};

module.exports = productController;
