var mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    cohort: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    HTML: { type: Number, required: true, trim: true },
    CSS: { type: Number, required: true, trim: true },
    JavaScript: { type: Number, required: true, trim: true },
    Facilitator_rating: { type: String, required: true, trim: true },
    hackathon: { type: String, required: true, trim: true },
});

const Student = module.exports = mongoose.model("Student", schema);

//nesting the schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AssessmentsSchema = new Schema({
    HTML: { type: Number, required: true, trim: true },
    CSS: { type: Number, required: true, trim: true },
    JavaScript: { type: Number, required: true, trim: true },
    Facilitator_rating: { type: String, required: true, trim: true },
    hackathon: { type: String, required: true, trim: true },
    title: String,
    pages: Number
});

const StudentSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    cohort: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    assessment: [AssessmentsSchema]
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;



