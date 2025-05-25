const db = require("../database/models");
const bcrypt = require('bcryptjs');
const Usuario = db.Usuario;

const userController = {
    show: function (req, res) {
        if (req.session.user) return res.redirect("/user/profile");
        return res.render("register");
    },

    create: function (req, res) {
        const { username, email, password, dni, fechaNacimiento } = req.body;

        Usuario.findOne({ where: { email } })
            .then(existingUser => {
                if (existingUser) {
                    return res.send("Ya existe un usuario con ese email.");
                }

                const nuevoUsuario = {
                    email,
                    nombreUsuario: username,
                    contrasenia: bcrypt.hashSync(password, 10),
                    foto: req.file ? req.file.filename : "default-image.png",
                    dni,
                    fechaNacimiento
                };

                return Usuario.create(nuevoUsuario);
            })
            .then(user => {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nombreUsuario: user.nombreUsuario,
                    foto: user.foto
                };
                return res.redirect("/user/profile");
            })
            .catch(err => res.send("Error al registrar: " + err));
    },

    login: function (req, res) {
        if (req.session.user) return res.redirect("/user/profile");
        return res.render("login");
    },

    processLogin: function (req, res) {
        const { email, password } = req.body;
        const remember = req.body.remember === "on";

        Usuario.findOne({ where: { email } })
            .then(user => {
                if (!user) return res.send("El usuario no existe.");

                const passwordOk = bcrypt.compareSync(password, user.contrasenia);
                if (!passwordOk) return res.send("La contraseña es incorrecta.");

                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nombreUsuario: user.nombreUsuario,
                    foto: user.foto
                };

                if (remember) {
                    res.cookie("userEmail", user.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                }

                return res.redirect("/user/profile");
            })
            .catch(err => res.send("Error en login: " + err));
    },

    logout: function (req, res) {
        res.clearCookie("userEmail");
        req.session.destroy(() => res.redirect("/"));
    },

    profile: function (req, res) {
        if (!req.session.user) return res.redirect("/user/login");

        db.Usuario.findByPk(req.session.user.id, {
            include: [{ association: 'productos' }]
        })
        .then(usuario => {
            if (!usuario) return res.send("Usuario no encontrado");

            return res.render("profile", {
                usuario,
                productos: usuario.productos
            });
        })
        .catch(error => res.send("Error al cargar el perfil: " + error));
    },

    profilePublic: function (req, res) {
    const userId = req.params.id;

    db.Usuario.findByPk(userId, {
        include: [{ association: 'productos' }]
    })
    .then(usuario => {
        if (!usuario) return res.send("Usuario no encontrado");

        res.render("profile", {
            usuario,
            productos: usuario.productos
        });
    })
    .catch(error => res.send("Error al cargar el perfil público: " + error));
}
}

module.exports = userController;
