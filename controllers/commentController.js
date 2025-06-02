const db = require('../database/models');

//store se usa oara crear y guardar un nuevo recurso (como un comentario o producto).
// create se usa para mostrar el formulario de carga (por ejemplo --> productAdd)
//show se usa normalmente para mostrar un recurso (por ejmplo --> ver el detalle de un producto)
const commentController = {
    store: (req, res) => {
        const { contenido, productId } = req.body;
        

        db.Comentario.create({
            comentario: contenido, // usa el nombre que Sequelize espera
            createdAt: new Date(),
            productId,
            usuarioId: req.session.user.id
        })
        .then(() => res.redirect('/product/id/' + productId))
        .catch(error => res.send("Error al crear comentario: " + error));
    }
    
};


module.exports = commentController;
