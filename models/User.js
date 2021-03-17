var express = require('express');
var mongoose = require('mongoose');

const dbPath = 'mongodb://localhost:27017/code_queen';
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
