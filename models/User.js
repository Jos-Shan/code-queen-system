var mongoose = require('mongoose');

const dbPath = 'mongodb://localhost:27017/code-queen';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(dbPath, options);

const StudentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value =>{
            if(!validator.isEmail(value)){
                throw new Error ({error: 'Invalid email address'})
            }
        }
    },
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    children: { type: String, required: true, trim: true },
    numberofchildren: { type: Number, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    occupation: { type: String, required: true, trim: true },
    income: { type: String, required: true, trim: true },
    laptop: { type: String, required: true, trim: true },
    data: { type: String, required: true, trim: true },
    classes: { type: String, required: true, trim: true },
    opportunity: { type: String, required: true, trim: true },
    media: { type: String, required: true, trim: true  },
    course: { type: String, required: true, trim: true },
});

const Application = module.exports = mongoose.model("Application", StudentSchema);

app.post('/form', function(req, res){
var formInfo = req.body; //Get the parsed information
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
       if(err)
          res.render('show_message', {message: "Database error", type: "error"});
       else
          res.render('show_message', {
             message: "New person added", type: "success", form: personInfo});
    });
}
});


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

