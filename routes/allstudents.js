var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Studentsmodel'); 

var app = express();

/* GET form page. */
router.get('/', function (req, res, next) {
   res.render('all-students')
}); 


router.post('/', function (req, res, next) {
   var newStudent = new Student(req.body);
   console.log("Data>>>>>",newStudent)
   newStudent.save()
   .then(data => {
      console.log(data)
      res.render('all-students', {message: "Student recorded"})
      
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to save student record")
   });
   
}); 

     //retrieving
    app.get('/all-students', function(req, res){
    Student.find(function(err, response){
        console.log(response);
     });
    });
    
     //updating
router.put('/:id', function(req, res) {
Student.findByIdAndUpdate(req.params.id, req.body)
   .then(student => {
      console.log(student)
      res.send("Updated successfully");
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to update database")
   });
}); 

    
     //deleting
router.delete('/:id', function(req, res){
Student.findByIdAndRemove(req.params.id, function(err, response){
        if(err) res.json({message: "Error in deleting record id " + req.params.id});
        else res.json({message: "Person with id " + req.params.id + " removed."});
     });
    });
    
    

module.exports = router;