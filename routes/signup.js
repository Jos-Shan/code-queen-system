var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

/* GET Signup page. */
router.get('/', function(req, res) {
  res.render('signup');
});

/*POST for signup*/
router.post('/', async(req, res) => {
  const { firstname, lastname, username, email, password} = req.body;
  try{
    const user = new User({ firstname ,lastname,username, email, password});
    await user.save();
    res.render('signup',{ successMessage: "Signup successful" });
  } catch (error) {
    
  }
 
});

module.exports = router;