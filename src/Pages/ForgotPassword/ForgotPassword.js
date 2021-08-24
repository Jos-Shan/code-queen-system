import React from 'react'
// import axios from 'axios'
import './ForgotPassword.css'
import useForm from '../Useform/Useform'
import validate from '../ValidateFormRules/ValidateFormRules'
 
const ForgotPassword = () => {
    const {values, errors,handleChange, handleSubmit,  } = useForm(forgotpass, validate);
  
  function forgotpass() {
    console.log('No errors, submit callback called!');
  }
    return (
        <div>
            <div class="logo"><img src="images/logo.png" alt="Code Queen logo"/></div>
            <div class="cover">
                <h1 class="title">Forgot your Password?</h1>
                <div class="container">
                    <form id="myform" method="POST" action="/forgotpassword" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            autofocus placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                             />
                              {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                        <div class="buttons">
                            <a href="login"><button class="back" type="button">Back</button></a>
                            <button class="submit" type="button" id="send-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
           
    )
}

export default ForgotPassword
