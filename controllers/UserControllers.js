import User from '../models/User'
import sendEmail from '../utils/email'
const crypto = require('crypto');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
require("dotenv").config();

//register  user
const createUser = async(req, res) => {
    const { firstname, lastname, username, email, password} = req.body;
    try{
      const user = new User({ firstname, lastname, username, email, password});
      await user.save();
      res.status(201).send({message: "signup successful", user});
     
    } catch (error) {
      res.status(400).send(error);
    }
   
};
//login a user
const loginUser = async(req, res) => {
   const { username, password } = req.body;
   //console.log({username, password});
   try{ 
   const user = await User.login(username , password);
   req.session.isAuth = true;
    res.status(201).send({message: "logged in successfully", user});
  
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
//forgot and reset password
const forgotPassword = async(req, res, next) => {
//1)get user based on posted Email

const user = await User.findOne({ email: req.body.email}); 
if(!user) {
  return next(new Error('There is no user with email address.',404));
}

//2)generate the random reset token
const resetToken = user.createPasswordResetToken();
await user.save({ validateBeforeSave: false});

//3)send it to user's email
const resetURL = `${req.protocol}://${req.get('host')}/resetpassword/${resetToken}`;
const message = `Forgot your password? submit a PATCH request with your new password and passwordConfirm to: ${resetURL}\n
If you didn't forget your password, please ignore this email`;

try{
await sendEmail({
  email: user.email,
  subject: 'Your password reset token( valid for 10 mins)',
  message
});
res.status(200).json({
  status: 'success',
  message: 'Token sent to Email!'
});
} catch(error) {
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save({validateBeforeSave: false});
  return next(new Error('There was an error sending the email. Try again later!'), 500);
}
}
const resetPassword = async(req, res, next) =>{
 //Get user based on the token
 const hashedToken = crypto
 .createHash('sha256')
 .update(req.params.token)
 .digest('hex');
 const user = await User.findOne({passwordResetToken : hashedToken, passwordResetExpires: {$gt: Date.now() }
});
 
 //If token has not expired, and there is user, new password
 if(!user) {
return next(new Error('Token is invalid or has expired', 400))
 }
 user.password = req.body.password;
 user.confirmPassword = req.body.confirmPassword;
 user.passwordResetToken = undefined;
 user.passwordResetExpires = undefined;
 await user.save();
 //Update changedPasswordAt property for the user
 //Log the user in 
  res.status(201).send({message: "success"});
 
}
//Get Homepage
const homePage = (req, res) => {
 res.render('homepage');
}
//Get cohorts page
const cohortsPage = (req, res) => {
  res.render('cohorts');
 }
//Get sign up from browser
const signupPage = (req, res) => {
  res.render('signup');
}
//Get login from browser
const loginPage = (req, res) => {
  res.render('login');
}
//Get forgotpassword
const forgotpasswordPage = (req, res) => {
  res.render('forgotpassword');
}
// Get resetpassword
const resetpasswordPage = async(req, res) => {
  const hashedToken = crypto
  .createHash('sha256')
  .update(req.params.token)
  .digest('hex');
  const user = await User.findOne({passwordResetToken : hashedToken, passwordResetExpires: {$gt: Date.now() }
}); 
res.render("resetpassword",{
  token: req.params.token
 });
 
}

// Get Student profile
const studentProfile = async (req, res) => {
  const user = await req.user;
  req.session.isAuth = true;
  console.log(req.session);
  res.render('profile');
}
//Get Dashboard
const adminDashboard = async (req, res) => {
  const user = await req.user;
 // req.session.isAuth = true;
 if(user.role !== "admin" && user.role !== "superadmin") {
    return res.status(401).send('Unauthorized')
  }
  return res.status(200).send({message: "Dashboard", user});
}
//Fetch all users
const fetchAllUsers = async (req, res) => {
  const users = await User.find({});
  const user = await req.user;
  if(user.role !== "admin" && user.role !== "superadmin") {
     return res.status(401).send('Unauthorized')
   }
   return res.status(200).send(users);  
}
//Update user
//Delete user

//logout 

export { homePage, cohortsPage,signupPage, createUser, 
 loginPage,
   loginUser, forgotpasswordPage, forgotPassword, resetpasswordPage, resetPassword, studentProfile, adminDashboard, fetchAllUsers}