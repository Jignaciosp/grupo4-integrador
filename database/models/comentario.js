module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        comentario: {
            type: dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deleteAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });

        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "productId"
        });
    };

    return Comentario;
};
