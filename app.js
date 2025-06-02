var createError = require('http-errors');
var express = require('express'); //--> importo modulos
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//creo la variable session e importo el databse
const session = require('express-session');
const db = require('./database/models');

let mainRouter = require('./routes/main'); // configuro enrutadores
let userRouter = require('./routes/user');// configuro enrutadores
let productRouter = require('./routes/product');// configuro enrutadores
const commentRouter = require('./routes/comment')

var app = express(); //--> funcion de alto nivel.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//middleware de config de session
app.use(session({
    secret:"myapp",
    resave: false,
    saveUninitialized:true
}));
//verificar si esta bien
app.use(function(req, res, next) {
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    }

    if (req.cookies.userEmail) {
        db.Usuario.findOne({ where: { email: req.cookies.userEmail } })
            .then(user => {
                if (user) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nombreUsuario: user.nombreUsuario,
                    foto: user.foto
                };
                res.locals.user = req.session.user;
            }
            else {
                    res.locals.user = null;
                }
                return next();
            })
            .catch(err => {
                console.error("Error en middleware de autologin:", err);
                res.locals.user = null;
                return next();
            });
    } else {
        res.locals.user = null;
        return next();
    }
});


app.use('/', mainRouter);// configuro enrutadores
app.use('/user', userRouter);// configuro enrutadores
app.use('/product', productRouter);// configuro enrutadores
app.use('/comments', commentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
