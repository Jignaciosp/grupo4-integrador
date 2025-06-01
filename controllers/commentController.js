const db = require('../database/models')

const commentController = {
    store: function(req,res) {
        const {contenido, productId} = req.body;

        db.Comentario.create{
            comentario: contenido,
            createAT: new Date(),
            productId,
            usuarioId: req.session.user.id
        }
    }
}

module.exports = commentController