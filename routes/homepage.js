var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('homepage', { 
    title: 'Admin' 
  });
});

module.exports = router;


