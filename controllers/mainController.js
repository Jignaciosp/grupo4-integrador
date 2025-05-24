const db = require('../database/models');
const Producto = db.Producto;
const Op = db.Sequelize.Op;

const mainController = {
    index: function (req, res) {
        Producto.findAll({
            include: [{ association: 'usuario' }]
        })
        .then(productos => {
            return res.render("index", { productos });
        })
        .catch(error => res.send(error));
    },

    searchResults: function (req, res) {
        const query = req.query.q || "";

        Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${query}%`
                }
            },
            include: ['usuario']
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

