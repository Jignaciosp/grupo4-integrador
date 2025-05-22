module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        foto: {
            type: dataTypes.STRING(300)
        },
        dni: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuarioId"
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuarioId"
        });
    };

    return Usuario;
};
