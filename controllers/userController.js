//fijarse si funciona
const db = require('../database/models');
const Usuario = db.Usuario;
const Producto = db.Producto;
const bcrypt = require('bcryptjs');

const userController = {

    register: (req, res) => {
        return res.render('register');
    },

    processRegister: (req, res) => {
        const { email, contrasenia, dni, fechaNacimiento } = req.body;

        // Validación mínima
        if (!email || contrasenia.length < 3) {
            return res.send('Email inválido o contraseña muy corta');
        }

        Usuario.findOne({ where: { email } })
        .then(usuarioExistente => {
            if (usuarioExistente) {
                return res.send("Este email ya está registrado.");
            }

            const nuevoUsuario = {
                email,
                contrasenia: bcrypt.hashSync(contrasenia, 10),
                foto: req.file ? req.file.filename : "default-image.png",
                dni,
                fechaNacimiento
            };

            return Usuario.create(nuevoUsuario);
        })
        .then(() => {
            return res.redirect('/login');
        })
        .catch(error => res.send(error));
    },

    login: (req, res) => {
        return res.render('login');
    },

    processLogin: (req, res) => {
        const { email, contrasenia } = req.body;

        Usuario.findOne({ where: { email } })
        .then(usuario => {
            if (!usuario) return res.send("Email no registrado");

            const match = bcrypt.compareSync(contrasenia, usuario.contrasenia);
            if (!match) return res.send("Contraseña incorrecta");

            // Guardar datos en sesión
            req.session.user = {
                id: usuario.id,
                email: usuario.email
            };

            return res.redirect('/profile');
        })
        .catch(error => res.send(error));
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },

    profile: (req, res) => {
        const idUsuario = req.session.user.id;

        Usuario.findByPk(idUsuario, {
            include: [{ model: Producto, as: 'productos' }]
        })
        .then(usuario => {
            return res.render('profile', {
                usuario,
                productos: usuario.productos
            });
        })
        .catch(error => res.send(error));
    }
};

module.exports = userController;
