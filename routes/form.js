var express = require('express');
var router = express.Router();
var Application = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
    Application.find(function(err, User){
    res.render('form');
    });
});

router.post('', function (req, res, next)  {
    var formData = req.body
    console.log("Data>>>>", formData)
    res.redirect('/form')
});

module.exports = router;

