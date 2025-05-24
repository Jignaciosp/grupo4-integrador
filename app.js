var createError = require('http-errors');
var express = require('express'); //--> importo modulos
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/main'); // configuro enrutadores
var userRouter = require('./routes/user');// configuro enrutadores
var productRouter = require('./routes/product');// configuro enrutadores

var app = express(); //--> funcion de alto nivel.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//session
app.use(session({
  secret:"myapp",
  resave: false,
  saveUninitialized:true
}));


app.use('/', mainRouter);// configuro enrutadores
app.use('/user', userRouter);// configuro enrutadores
app.use('/product', productRouter);// configuro enrutadores


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
