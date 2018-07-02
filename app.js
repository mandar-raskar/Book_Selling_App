var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var Request = require("request");
var fetchUrl = require("fetch").fetchUrl;
var fetch = require('node-fetch');
const request = require('request');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var port = 3007;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);

console.log('hiiiiiiiiii');

    // function s (req,res) {
    //     fetchUrl("localhost:3004/rpdetails", function (error, meta, body) {
    //           res.json(body);
    //     });
    // }

// fetch('https://api.openweathermap.org/data/2.5/weather?q=London')
//  .then(function(response){
//      return response.json();
//  })
//  .then(function(json){
//      console.log(json);
//  });


// catch 404 and forward to error handler


request('http://localhost:3004/locations', function(err, res, body) {  
    console.log(body);
})






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

app.listen(port);
module.exports = app;
