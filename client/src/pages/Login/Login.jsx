import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css"



const Login  =()=>{
    return(
        <div className="bodyLogin">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="mainDiv-login">

              <div className="title-login">
                    <h1>Login</h1>
              </div>

              <div className="login-form">
                    <form action="" className="form">
                    <input className="inputs-form"  type="text" placeholder="Email" />
                    <input className="inputs-form" type="password" placeholder="Password" />
                    <input className="inputs-button" type="submit" value={"Login"}  />
                    <div className="inputs-button"><a href="/Register" id="register-btn">Register</a></div>
                    </form>
              </div>

            </div>
        </div> 
    
    )
}


export default Login;