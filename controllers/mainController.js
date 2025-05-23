const db = require('../database/models');
const Producto = db.Producto;

const mainController = {
    index: function (req, res) {
        Producto.findAll({
            include: [{ association: 'usuario' }]
        })
        .then(productos => {
            return res.render("index", { productos });
        })
        .catch(error => res.send(error));
    }
};
module.exports = mainController;


