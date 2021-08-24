import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About';
import ResetPassword from '../Pages/ResetPassword/ResetPassword'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword'
import StudentProfile from '../Pages/StudentProfile/StudentProfile'
import Progress from '../Pages/Progress/Progress';


const Routes = () => {
    return (
        <div>
      
            <Switch>
                <Route exact path ="/" component ={Home}/>
                <Route exact path ="/signup" component ={Signup}/>
                <Route exact path ="/login" component ={Login}/>
                <Route exact path ="/aboutus" component ={About}/>
                <Route exact path ="/studentprofile" component ={StudentProfile}/>
                <Route exact path ="/forgotpassword" component ={ForgotPassword}/>
                <Route exact path ="/resetpassword" component ={ResetPassword}/>
                <Route exact path ="/progress" component ={Progress}/>
            </Switch>
       
            
        </div>
    )
}

export default Routes
