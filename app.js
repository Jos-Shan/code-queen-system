var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoDBSession = require('connect-mongodb-session')(session);
var cors = require('cors');
var morgan = require('morgan');
require("dotenv").config();
var mongoose = require ('mongoose')
//const port = process.env.PORT
//require('./db/db')


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
var resetpasswordRouter = require('./routes/resetpassword');
var forgotpasswordRouter = require('./routes/forgotpassword');

var app = express();

mongoose.connect('mongodb://localhost:27017/code-queen-db', {useNewUrlParser: true, useUnifiedTopology: true})
require('./models/Studentmodel'); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
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
app.use('/resetpassword', resetpasswordRouter);
app.use('/forgotpassword', forgotpasswordRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// from anna
 /* app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    //store: store,
    cookie:{
      maxAge: 3 * 24 * 60 * 60,
      sameSite: true
    }
  })
  ); */

  //middleware for finding userId
  /*app.use((req,res,next) => {
    const {userId} = req.session
    if(userId) {
      res.locals.user = User.findOne(user => user.Id === userId)
    }
    next();
  })*/
  /*const isAuth = (req, res, next) => {
    if(req.session.isAuth){
      next()
    } else {
      res.redirect('/login')
    }
  }*/
  
    app.get('/', (req, res) => {
    // req.session.isAuth = true;
      /*console.log(req.session);
      console.log(req.session.id);*/
      res.render("homepage");
    });
     app.post('/logout', (req, res) => {
       req.session.destroy((error) =>{
         if(error) throw error;
         res.redirect('/homepage')
       });
     })
     //retrieving
     app.get('/form', function(req, res){
      Application.find(function(err, response){
          console.log(response);
       });
      });
    

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port 3000"));

module.exports = app;







  

