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
      res.send("Application saved to database");
   })
   .catch(err => {
      res.status(400).send("Unable to save to database")
   });
});


/* app.post('/Application', function(req, res){
    var formInfo = req.body; //Get the parsed information
    console.log(formInfo)
    if(!formInfo.email || !formInfo.firstname || !formInfo.lastname || !formInfo.phone || !formInfo.birthdate || !formInfo.city || !formInfo.status || !formInfo.children || !formInfo.numberofchildren || !formInfo.education || !formInfo.occupation || !formInfo.income || !formInfo.laptop || !formInfo.data || !formInfo.classes || !formInfo.opportunity || !formInfo.media || !formInfo.course){
        res.render('show_message', {
           message: "Sorry, you provided worng info", type: "error"});
        } else {
        var newApplication = new Application({
           email: formInfo.email,
           firstname: formInfo.firstname,
           lastname: formInfo.lastname,
           phone: formInfo.phone,
           birthdate: formInfo.birthdate,
           city: formInfo.city,
           status: formInfo.status,
           children: formInfo.children,
           numberofchildren: formInfo.numberofchildren,
           education: formInfo.education,
           occupation: formInfo.occupation,
           income: formInfo.income,
           laptop: formInfo.laptop,
           data: formInfo.data,
           classes: formInfo.classes,
           opportunity: formInfo.opportunity,
           media: formInfo.media,
           course: formInfo.course           
        });
          
        newApplication.save(function(err, Application){
           if(err) return handleError(err);
        }); 

    } 
    }); */
    
    
    //retrieving
    app.get('/form', function(req, res){
    Application.find(function(err, response){
        console.log(response);
     });
    });
    
     //updating
     app.put('/:id', function(req, res){
    Application.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.json({message: "Error in updating person with id " + req.params.id});
        res.json(response);
     });
    });
    
     //deleting
     app.delete('/:id', function(req, res){
    Application.findByIdAndRemove(req.params.id, function(err, response){
        if(err) res.json({message: "Error in deleting record id " + req.params.id});
        else res.json({message: "Person with id " + req.params.id + " removed."});
     });
    });
    
    

module.exports = router;

