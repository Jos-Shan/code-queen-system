var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/usersmodel'); 

var app = express();

router.get('/', function (req, res, next) {
   res.render('register-user')
}); 


router.post('/', function (req, res, next) {
   var newuser = new user(req.body);
   console.log("Data>>>>>",newuser)
   newuser.save()
   .then(data => {
      console.log(data)
      res.render('register-user', {message: "New user added"})
      
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to save new user")
   });
   
}); 

     //retrieving
    app.get('/register-user', function(req, res){
    user.find(function(err, response){
        console.log(response);
     });
    });
    
     //updating
router.put('/:id', function(req, res) {
user.findByIdAndUpdate(req.params.id, req.body)
   .then(user => {
      console.log(user)
      res.send("Updated successfully");
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to update user")
   });
}); 

    
     //deleting
router.delete('/:id', function(req, res){
user.findByIdAndRemove(req.params.id, function(err, response){
        if(err) res.json({message: "Error in deleting record id " + req.params.id});
        else res.json({message: "Person with id " + req.params.id + " removed."});
     });
    });
    
    

module.exports = router;