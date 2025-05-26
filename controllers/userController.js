const db = require("../database/models");
const bcrypt = require('bcryptjs');
const Usuario = db.Usuario;
//store se usa oara crear y guardar un nuevo recurso (como un comentario o producto).
// create se usa para mostrar el formulario de carga (por ejemplo --> productAdd)
//show se usa normalmente para mostrar un recurso (por ejmplo --> ver el detalle de un producto)

const usersController = {
    show: function (req, res) {
        if (req.session.user) return res.redirect("/user/profile/" + req.session.user.id);
        return res.render("register");
    },

create: function(req, res) {
    const { username, email, password, dni, fechaNacimiento } = req.body;

    db.Usuario.findOne({ where: { email } })
        .then(existingUser => {
            if (existingUser) {
                return res.send("Ya existe un usuario con ese email.");
            }

            //  Acá tomamos el nombre del archivo si subieron una imagen, si no usamos default
            const foto = req.file ? req.file.filename : "default-image.png";

            let usuario = {
                nombreUsuario: username,
                email: email,
                contrasenia: bcrypt.hashSync(password, 10),
                dni,
                fechaNacimiento,
                foto // 
            };

            db.Usuario.create(usuario)
                .then(function(user) {
                    req.session.user = {
                        id: user.id,
                        nombreUsuario: user.nombreUsuario,
                        email: user.email,
                        foto: user.foto //
                    };
                    return res.redirect("/user/profile/" + user.id);
                })
                .catch(err => res.send("Error al crear el usuario: " + err));
        })
        .catch(err => res.send("Error al verificar el email: " + err));
},

    login: function (req, res) {
        if (req.session.user) return res.redirect("/user/profile/" + req.session.user.id); //corregido
        return res.render("login");
    },

    processLogin: function (req, res) {
        const { email, password } = req.body;
        const remember = req.body.remember === "on";

        Usuario.findOne({ where: { email } })
            .then(user => {
              if (!user) {
                    return res.render("login", {
                        error: "El email ingresado no está registrado."
                    });
                }

                const passwordOk = bcrypt.compareSync(password, user.contrasenia);
                if (!passwordOk) {
                    return res.render("login", {
                        error: "La contraseña ingresada es incorrecta."
                    });
                }

                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nombreUsuario: user.nombreUsuario,
                    foto: user.foto
                };

                if (remember) {
                    res.cookie("userEmail", user.email, {
                        maxAge: 1000 * 60 * 60 * 24 * 7
                    });
                }

                return res.redirect("/user/profile/" + user.id); // corregido
            })
            .catch(error => res.send("Error al iniciar sesión: " + error));
    },

    logout: function (req, res) {
        res.clearCookie("userEmail");
        req.session.destroy(() => res.redirect("/"));
    },

profile: function (req, res) {
    if (!req.session.user) return res.redirect("/user/login");

    db.Usuario.findByPk(req.session.user.id, {
        include: [
            {
                association: 'productos',
                include: ['comentarios'] //  Esto ya está perfecto
            }
        ]
    })
    .then(usuario => {
        if (!usuario) return res.send("Usuario no encontrado");

        // Contar total de comentarios recibidos
        const totalComentariosRecibidos = usuario.productos.reduce((acum, producto) => {
            return acum + (producto.comentarios?.length || 0);
        }, 0);

        return res.render("profile", {
            usuario,
            productos: usuario.productos,
            totalComentariosRecibidos // 👈 lo mandamos a la vista
        });
    })
    .catch(error => res.send("Error al cargar el perfil: " + error));
},


    profilePublic: function (req, res) {
    const userId = req.params.id;

    db.Usuario.findByPk(userId, {
        include: [
            {
                association: 'productos',
                include: ['comentarios']
            }
        ]
    })
    .then(usuario => {
        if (!usuario) return res.send("Usuario no encontrado");

        const totalComentariosRecibidos = {data:usuario.productos[0].comentarios.length}

        res.render("profile", {
            usuario,
            productos: usuario.productos,
            totalComentariosRecibidos // 
        });
    })
    .catch(error => res.send("Error al cargar el perfil público: " + error));
}
};

module.exports = usersController;
