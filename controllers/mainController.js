const db = require('../database/models');
const Producto = db.Producto;
const Op = db.Sequelize.Op;
//store se usa oara crear y guardar un nuevo recurso (como un comentario o producto).
// create se usa para mostrar el formulario de carga (por ejemplo --> productAdd)
//show se usa normalmente para mostrar un recurso (por ejmplo --> ver el detalle de un producto)

const mainController = {
   index: function (req, res) {
    Producto.findAll({
        include: [
            { association: 'usuario' },
            { association: 'comentarios' } //  esto es clave para poder usar .comentarios.length
        ]
    })
    .then(productos => {
        return res.render("index", { productos });
    })
    .catch(error => res.send("Error al cargar productos: " + error));
}
,

    searchResults: function (req, res) {
        let query = req.query.q;
            if (!query) {
                query = "";
            }


        Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${query}%`
                }
            },
            include: ['usuario', 'comentarios']
        })
        .then(productos => {
            return res.render("search-results", {
                productos,
                query
            });
        })
        .catch(error => res.send(error));
    }
};

module.exports = mainController;

