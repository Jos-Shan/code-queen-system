import User from '../models/User'
import bcrypt from "bcryptjs";
require("dotenv").config();

//register  user
const createUser = async(req, res) => {
    const { firstname, lastname, username, email, password} = req.body;
    try{
      const user = new User({ firstname, lastname, username, email, password});
      await user.save();
     
     const token = await user.generateAuthToken();
     res.status(201).send({message: 'Your account has been created successfully', user, token});

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
    
  /*if(!user){
       return res.status(400).send({ error: true, message:"Unable to login. Invalid login credentials."});
   }*/
  //check password
  /* const isPasswordMatch = await bcrypt.compare(password, user.password);
   if(!isPasswordMatch){
    return res.status(400).send({ error: "Invalid login credentials."}); 
     
   }*/
   const token = await user.generateAuthToken();
   res.status(201).send({ message: "Logged in successfully", user, token });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
//making changes in routes
//Get Homepage
const homePage = (req, res) => {
 res.render('homepage');
}
//Get sign up from browser
const signupPage = (req, res) => {
  res.render('signup');
}
//Get login from browser
const loginPage = (req, res) => {
  res.render('login');
}
//Get login from browser
/*const loginPage = async (req, res) => {
  res.status(200).render('login');
}*/

// Get Student profile
const studentProfile = async (req, res) => {
  const user = await req.user;
  res.status(200).send({message: "Student Profile", user});
}
//Get Dashboard
const adminDashboard = async (req, res) => {
  const user = await req.user;
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

export { homePage, signupPage, createUser, 
 loginPage,
   loginUser, studentProfile, adminDashboard, fetchAllUsers}