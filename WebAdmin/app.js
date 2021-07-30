var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var brandsRouter = require('./routes/brands');
var productsRouter = require('./routes/products');
var membersRouter = require('./routes/members');

const session = require('express-session');

//mongo
const mongoose = require('mongoose');
require('./models/userModel');

var app = express();

//mongodb connect
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('>>> Database connected'))
.catch( (e) => console.log('>>> Database error', e))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');
hbs.registerHelper('soSanh', function (a, b, t){
  return a.toString() == b.toString();
})

hbs.registerHelper('getBrandImage', function (id, brands, t){
  let brand = brands.filter(item => item.id == id)[0];
  return brand.image;
})



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.JWT_SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}))

app.use('/', indexRouter);
app.use('/brands', brandsRouter);
app.use('/products', productsRouter);
app.use('/users', membersRouter);


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
