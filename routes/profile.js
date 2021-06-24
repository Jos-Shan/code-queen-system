var express = require('express');
var router = express.Router();
var User = require('../models/User'); 

//Get profile page
router.get('/', async(req, res) => {
  const user = await req.session.user;
  console.log(user);
  req.session.isAuth = true;
  console.log(req.session);
  //console.log(req.session.id);
  res.render('profile',{user :req.session.user});
  
});

/*POST for profile page*/



/* GET home page. 
router.get('/', function(req, res, next) {
  console.log(req.session)
  const user = req.user;
  //fetch from DB using user ID
  res.render('profile', { 
    name:"",
    email: "",
    age: "",
    cohort:"",
    facilitator: '',
    status:"",
    assessments: ''
  });
});*/




module.exports = router;