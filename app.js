var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require ('mongoose')
// const port = process.env.PORT
// require('./db/db')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homepageRouter = require('./routes/homepage');
var cohortsRouter = require('./routes/cohorts');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var formRouter = require('./routes/form');
var dashboardRouter = require('./routes/dashboard');
var allstudentsRouter = require('./routes/allstudents');
var profileRouter = require('./routes/profile');
var alljobsRouter = require('./routes/alljobs');
var postjobRouter = require('./routes/postjob');
var registeruserRouter = require('./routes/registeruser');
var registermentorRouter = require('./routes/registermentor');

var app = express();

mongoose.connect('mongodb://localhost:27017/code-queen-db', {useNewUrlParser: true, useUnifiedTopology: true})
require('./models/Application'); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/homepage', homepageRouter);
app.use('/cohorts', cohortsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/form', formRouter);
app.use('/dashboard', dashboardRouter);
app.use('/all-students', allstudentsRouter);
app.use('/profile', profileRouter);
app.use('/all-jobs', alljobsRouter);
app.use('/post-job', postjobRouter);
app.use('/register-user', registeruserRouter);
app.use('/register-mentor', registermentorRouter);

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

