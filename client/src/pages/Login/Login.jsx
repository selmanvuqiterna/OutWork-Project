import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css"



const Login  =()=>{
    return(
        <div className="body">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="mainDiv">

              <h1 className="title">Login</h1>   

            </div>
        </div>
    
    )
}


export default Login;