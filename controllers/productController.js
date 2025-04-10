
const datos = require("../db/datos")

const productController= {
    index: function(req,res) {
        return res.render("product", {
            info: datos.productos
        })
    },


    filtrarID: function (req,res) {
        let IDbuscado= req.params.id;
        let productoFiltrado= datos.filtrarID(IDbuscado);


    return res.render("product",
        {
            detalle: productoFiltrado,
            comentarios: datos.comentarios
        })
    },
    productAdd: function(req, res){
        return res.render('productAdd', {
            productos: datos.productos,
            usuario: datos.usuarios
        })
    },




}


module.exports = productController;


