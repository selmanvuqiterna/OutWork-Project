import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";



const AddUser =()=>{
    
        const [fullname, setFullname] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [personalNumber, setPersonalNumber] = useState('')
        const [privilege,setPrivilege] = useState('');
        const navigate = useNavigate(); 

        function handleSubmit(event) {
            event.preventDefault();
        
            if (!emailRegex.test(email)) {
              alert("Please enter a valid email address.");
            } else if (!passwordRegex.test(password)) {
              alert(
                "Password must contain at least one letter, one digit, and be at least 8 characters long."
              );
            } else if (!personalNumberRegex.test(personalNumber)) {
              alert(
                "Numri personal duhet te kete fiks 10 karaktere , dhe te kete vetem numra"
              );
            } else {
              axios
                .post("http://localhost:8800/create", {
                  fullname,
                  email,
                  password,
                  privilege,
                  personalNumber,
                })
                .then((res) => {
                  console.log(res);
                  navigate("/UserDashboard");
                })
                .catch((err) => console.log(err));
              alert("Added Successfully");
            }
          }
          const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          const personalNumberRegex = /^\d{10}$/;


   return(
       <div className="body-register">
           

           <div className="main-divRegister">


               <div className="title-register">
                   <h1>Add User</h1>
               </div>

               <div className="register-form">
                   <form action="" className="form" method="POST" onSubmit={handleSubmit} >
                   <input className="inputs-form"  type="text" placeholder="Full Name" name="fullname" onChange={e=> setFullname(e.target.value)} />
                   <input className="inputs-form"  type="text" placeholder="Email" name="email" onChange={e=> setEmail(e.target.value)} />
                   <input className="inputs-form" type="password" placeholder="Password" name="password" onChange={e=> setPassword(e.target.value)} />
                   <input className="inputs-form" type="number" placeholder="Personal Number" name="personalNumber" onChange={e=> setPersonalNumber(e.target.value)} />
                   
                   <select className="inputs-form" name="privilege" id="" onChange={e=> setPrivilege(e.target.value)}>
                    <option value="?">Zgjedhni Rolin</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
               </select>
                   <button className="inputs-button" id="register-btn" type="submit" value={"Add"} > Add</button>

                   </form>
            
                   
                       
                   
                   
             </div>
           </div>
       </div>
   
    )
}


export default AddUser;