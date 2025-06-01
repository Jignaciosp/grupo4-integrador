const db = require('../database/models')

const commentController = {
    store: function(req,res) {
        const {contenido, productId} = req.body;

        db.Comentario.create({
            comentario: contenido,
            createAT: new Date(),
            productId,
            usuarioId: req.session.user.id
        })
        .then(() => res.redirect('/product/id/' + productId))
        .catch(error => res.send("Error al crear comentario: " + errpr));
    }
}

module.exports = commentController