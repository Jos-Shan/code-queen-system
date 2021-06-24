var express = require('express');
var router = express.Router();
var User = require('../models/User'); 
//Get login page
router.get('/', function(req, res) {
    res.render('login')
  });

  // POST for login
router.post('/', async(req, res) => {
    const { username, password } = req.body;
    //console.log({username, password});
    try{ 
    const user = await User.login(username , password);
     req.session.isAuth = true;
     req.session.user = user;
     //res.redirect('profile');
     if (user.role === "student"){
       res.redirect('profile');
     } else if(user.role === "admin"){
       res.redirect('dashboard');
     }
      
   } catch (error) {
     res.render('login', { errorMessage: "Error: Incorrect login credentials" });
     
     console.log(error);
   }
});

/* GET home page. 
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Josephine',
        appName: 'My Nice app'
    });
});

router.post('/', function (req, res, next)  {
    var loginData = req.body
    console.log("Data>>>>>",loginData)
    if(loginData.role==='Student'){
        res.render('student', loginData);
    }else if(loginData.role==='Staff/Facilitator'){
        res.render('staff', loginData);
    }
    res.render('index', loginData);
});*/

module.exports = router;