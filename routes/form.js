const { application } = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Application = require('../models/Application'); 

var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form');
});

/*router.post('/', function (req, res, next)  {
   var formData = req.body
   console.log("Data>>>>>",formData)
   res.redirect('form');
}); */

router.post('/', function (req, res, next) {
   var newApplication = new Application(req.body);
   console.log("Data>>>>>",newApplication)
   newApplication.save()
   .then(data => {
      console.log(data)
      res.redirect('homepage');
     // res.send("Application saved to database");
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to save to database")
   });
   
}); 

     //retrieving
    app.get('/form', function(req, res){
    Application.find(function(err, response){
        console.log(response);
     });
    });
    
     //updating
router.put('/:id', function(req, res) {
Application.findByIdAndUpdate(req.params.id, req.body)
   .then(application => {
      console.log(application)
      res.send("Updated successfully");
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to update database")
   });
}); 

    
     //deleting
router.delete('/:id', function(req, res){
Application.findByIdAndRemove(req.params.id, function(err, response){
        if(err) res.json({message: "Error in deleting record id " + req.params.id});
        else res.json({message: "Person with id " + req.params.id + " removed."});
     });
    });
    
    

module.exports = router;

