import React from 'react';
// import axios from 'axios'
import './Signup.css'
import Header from '../../Components/Layout/Header';
import useForm from '../Useform/Useform';
import validate from '../ValidateFormRules/ValidateFormRules';

const Signup = () => {

    const {values, errors,handleChange, handleSubmit,  } = useForm(register, validate);
  
    function register() {
      console.log('No errors, submit callback called!');
    }
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [username,setUserName]= useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");

  // const [success, setSuccess] = useState(false);
  // const [errors, setErrors] = useState(false);
  // const [error, setError] = useState(false);

  // const [users, setUsers] = useState([]);

// const handleSubmit = (e) => {
//    e.preventDefault();
//    let errors={};
//    let letters = /^[A-Za-z]+$/;
//    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
//   if (!firstname) {
//    errors.firstname = 'Firstname is required';
//   }else if(!letters.test(firstname)){
//    errors.firstname='Name field requires only alphabet characters';
//   }if (!lastname) {
//    errors.lastname = 'Lastname is required';
//   }else if(!letters.test(lastname)){
//    errors.lastname='Name field requires only alphabet characters';
//   }
//   if (!username) {
//    errors.username = 'Username is required';
//   }else if(!letters.test(username)){
//    errors.username='Name field requires only alphabet characters';
//   }
//   if (!email) {
//   errors.email = 'Email address is required';
//   } else if (!filter.test(email)) {
//   errors.email = 'Email address is invalid';
//   }
//   if (!password) {
//   errors.password = 'Password is required';
//   } else if (password.length < 8) {
//   errors.password = 'Password must be 8 or more characters';
//   }
//   if (!confirmpassword) {
//    errors.confirmpassword = 'Password is required';
//   }else if(password!==confirmpassword){
//    errors.confirmpassword='Passwords do not match';
//   }
  
//   return errors;
  
// //    setErrors(validateinfo)
// };

//     const data = {
//       firstname,
//       lastname,
//       username,
//       email,
//       password,
//     };
//     axios
//       .post("/localhost:4000/User", data)
//       .then((res) => {
//         console.log(res);
//         setTimeout(()=>{
//             setSuccess(false)
//         }, 8000)
//         setSuccess(true);
       
//       })
//       .catch((err) => {
//         console.log(err);
//           setTimeout(()=>{
//               setError(false)
//           },8000)
//         setError(true);
        
//       });

//   useEffect(() => {
    
//     axios
//       .get("/localhost:4000/Users")
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


    return (
    <div>
        <Header/>
        <div className="logo">
            <img src="images/logo.png" alt="CodeQueen logo" />
        </div>
        {/* {success && (
            <div class="alert alert-success" role="alert">
                User successfully created
            </div>
        )} */}
        {/* {error && (
            <div class="alert alert-danger" role="alert">
                Error Encountered while registering user
            </div>
        )} */}
        <div className="form-space">
            <h2 className="title">Sign up</h2>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form-area">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="firstname"
                            placeholder="Firstname"
                            value={values.firstname}
                            onChange={handleChange}
                        />
                         {errors.firstname && (
                    <p className="error">{errors.firstname}</p>
                  )}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="lastname"
                            placeholder="Lastname"
                            value={values.lastname}
                            onChange={handleChange}
                        />
                         {errors.lastname && (<small>
                            <p className="error">{errors.lastname}</p>
                         </small>
                   
                  )}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && (
                    <p className="error">{errors.username}</p>
                  )}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            value={values.confirmpassword}
                            onChange={handleChange}
                        />
                        {errors.confirmpassword && (
                    <p className="error">{errors.confirmpassword}</p>
                  )}
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-block create-account"
                            id="register-btn"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>

    )
};

export default Signup
