var express = require('express');
var router = express.Router();

/* GET home page. */
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
});

module.exports = router;