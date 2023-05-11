import React, { useReducer, useState } from "react";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register =()=>{
         const [fullname, setFullname] = useState('');
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
         const [confirmPassword, setConfirmPassword] = useState('');
         const navigate = useNavigate(); 

         function handleSubmit(event){
            event.preventDefault();
            axios.post('http://localhost:8800/create', {fullname,email,password,confirmPassword})
            .then(res =>{
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err))
         }


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
                    <form action="" className="form" method="POST" onSubmit={handleSubmit} >
                    <input className="inputs-form"  type="text" placeholder="Full Name" name="fullname" onChange={e=> setFullname(e.target.value)} />
                    <input className="inputs-form"  type="text" placeholder="Email" name="email" onChange={e=> setEmail(e.target.value)} />
                    <input className="inputs-form" type="password" placeholder="Password" name="password" onChange={e=> setPassword(e.target.value)} />
                    <input className="inputs-form" type="password" placeholder="Confirm Password" name="confirmPassword" onChange={e=> setConfirmPassword(e.target.value)} />
                    <button className="inputs-button" id="register-btn" type="submit" value={"Register"} > Register</button>

                    </form>
                    <div  id="already"><a href="/Login">Already have an account?</a></div>
                    
                        
                    
                    
              </div>
            </div>
        </div>
    )
}


export default Register;


