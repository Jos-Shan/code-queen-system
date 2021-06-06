var mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    Name: { type: String, required: true },
    Sex: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    Phone: { type: String, required: true, trim: true },
    role:{
        type: String,
       default: "Admin",
        enum: ["Admin", "Facilitator"]
    },

});

const user = mongoose.model('user', usersSchema);

module.exports = user;


