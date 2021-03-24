import mongoose from "mongoose";
const validator = require('validator')
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
       required: true,
       lowercase: true,
       validate: value => {
           if(!validator.isEmail(value)){
               throw new Error({error: 'Invalid Email address'})
           }
       }
    },
    role:{
        type: String,
       default: "student",
        enum: ["student", "admin", "superadmin"]
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamps : true}
    );

userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')){
     user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_KEY );
    return token;
};

// static method to login user
userSchema.statics.login = async function(username, password) {
    const user = await this.findOne({ username });
    if (user) {
      const  isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return user;
      }
      throw Error('incorrect password'); 
    }
    throw Error('incorrect username');
    
  };

const User = mongoose.model('User', userSchema);
export default User;