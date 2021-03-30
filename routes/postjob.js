var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post-job', { 
    title: 'Admin',
    appName:'The admin page' 
  });
});

module.exports = router;