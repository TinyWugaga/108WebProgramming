var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*sql setting*/
var mysql = require("mysql");
var $config = require('./lib/config.js');
var pool  = mysql.createPool($config.mysql);

/*router setting*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*pool of sql setting*/
app.use(function(req, res, next) {
    req.pool = pool;
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

module.exports = app;
