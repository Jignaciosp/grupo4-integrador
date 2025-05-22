module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        descripcion: {
            type: dataTypes.TEXT
        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(300)
        },
        nombre: {
            type: dataTypes.STRING(300)
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
        tableName: "productos",
        timestamps: true,
        underscored: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });

        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "productId"
        });
    };

    return Producto;
};
