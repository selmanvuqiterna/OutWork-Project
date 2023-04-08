import React from "react";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";


const Register =()=>{
    return(
        <div className="body-register">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main-divRegister">


                <div className="title-register">
                    <h1>Register</h1>
                </div>

                <div className="register-form">
                    <form action="" className="form">
                    <input className="inputs-form"  type="text" placeholder="Full Name" />
                    <input className="inputs-form"  type="text" placeholder="Email" />
                    <input className="inputs-form" type="password" placeholder="Password" />
                    <input className="inputs-form" type="password" placeholder="Confirm Password" />
                    <input className="inputs-button" id="register-btn" type="submit" value={"Register"}  />

                    </form>
                    <div  id="already"><a href="/Login">Already have an account?</a></div>
                    
                        
                    
                    
              </div>
            </div>
        </div>
    )
}


export default Register;


