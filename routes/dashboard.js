var express = require('express');
var router = express.Router();
var User = require('../models/User'); 
//Get dashboard

/* router.get('/', async(req, res) => {
  const user = await req.session.user;
  console.log(user);
  req.session.isAuth = true;
  res.render('dashboard',{user :req.session.user});
}); */

//POST dashboard


router.get('/', function(req, res, next) {
  res.render('dashboard', { 
    title: 'Admin',
    appName:'The admin page' 
  });
});


module.exports = router;