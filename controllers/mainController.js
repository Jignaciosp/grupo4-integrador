
const datos = require("../db/datos");
const mainController = {
    index: function (req, res) {
        return res.render("index", {
            productos: datos.productos,
        });
    },
    searchResults: function (req, res) {
        return res.render("search-results", {
            productos: datos.productos,
        });
    },


};


module.exports = mainController;


