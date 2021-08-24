import axios from 'axios'
import React, {useState,useEffect} from 'react'
import Header from '../../Components/Layout/Header'
// import API from './helpers/api'
import './Login.css'
import useForm from '../Useform/Useform'
import validate from '../ValidateFormRules/ValidateFormRules'
import { Link } from 'react-router-dom'

const Login = () => {
  const {values, errors,handleChange, handleSubmit,  } = useForm(login, validate);
  
  function login() {
    console.log('No errors, submit callback called!');
  }
//     const [username, setUserName] = useState("")
//     const [password, setPassword] = useState("")
//     const [message, setMessage] = useState("");
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(false);
//     const [errors,setErrors]= useState({})

    

//   const handleSubmit = (e) => {
//     e.preventDefault();
//  let letters = /^[A-Za-z]+$/;
// let errors={};
// if (username) {
//   errors.username = 'Username is required';
// }else if(!letters.test(username)){
//   errors.username='Name field requires only alphabet characters';
// }
// if (password) {
//   errors.password = 'Password is required';
// } else if (password.length < 8) {
//   errors.password = 'Password must be 8 or more characters';
// }else
// 	{				                            
// 		   alert("Thank You! You have successfully logged in.");
// 		   // Redirecting to the studentprofile page. 
// 		   window.location = "studentprofile.html"; 
// 	}
//     const data = { username, password };
//     axios.post("/auth/login", data)
//       .then((res) => {
//         console.log("Login Response Data ====>", res)
//         setSuccess(true);
//         if (res.data.token) {
//           localStorage.setItem("user", JSON.stringify(res.data));
//         }
//         setTimeout(() => {
//           setSuccess(false);
//         }, 3000)
//       })
//       .catch((err) => {
//         setError(true);
//         setTimeout(() => {
//           setError(false);
//         }, 3000)
//         console.log(err.message);
//       });
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//   };

//   const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
//   };
  
  
    return (
        <div>
            <Header/>
            <div className="logo">
                <img
                    src="images/logo.png"
                    alt="CodeQueen logo"
                />
            </div>
            <div className="big-one">
                <h1 className="form-title">Login</h1>
                {/* {success && (
                 <div class="alert alert-success" role="alert">
                    Successfuly Logged on
                 </div> )}
                      
                {error && (
                 <div class="alert alert-danger" role="alert">
                   Login Failed
                    </div> )} */}

                <div className="container">
                    <form action="/login" className="form" onSubmit={handleSubmit} noValidate id="loginform" method="POST">
                        <div className="form-input-group">
                            <input
                                type="text"
                                className="form-input"
                                id="loginUsername"
                                name="username"
                                autofocus
                                placeholder="Username"
                                value={values.username}
                                onChange={handleChange}
                                required
                            />
                            {errors.username && (<p className="error">{errors.username}</p>)}
                        </div>
                        <div className="form-input-group">
                            <input
                                type="password"
                                className="form-input"
                                id="security"
                                name="password"
                                autofocus
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                required
                            />
                             {errors.password && (<p className="error">{errors.password}</p>)}
                        </div>
                        <div className="forgotpass">
                            {" "}
                            <Link to= "/forgotpassword" className="ml-auto mb-0 text-md">
                                Forgot Password?
                            </Link>
                        </div>
                        <button type="submit" className="form-button">
                            Submit
                        </button>
                        <p className="form-text">
                            Don't have an account?{" "}
                            <Link id="form-link" to="/signup">
                                Sign Up Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
