import React from 'react';
import "./UpdateUser.css";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UpdateUser() {
  
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [privilege,setPrivilege] = useState('');
    const {id} = useParams();
    const navigate = useNavigate(); 

    function handleSubmit(event){
       event.preventDefault();
       axios.put('http://localhost:8800/update/'+id, {fullname,email,password,confirmPassword,privilege})
       .then(res =>{
           console.log(res);
           navigate('/UserDashboard');
       }).catch(err => console.log(err))
    }


return(
   <div className="body-register">
       

       <div className="main-divRegister">


           <div className="title-updater">
               <h1>Update User</h1>
           </div>

           <div className="register-form">
               <form action="" className="form" method="POST" onSubmit={handleSubmit} >
               <input className="inputs-form"  type="text" placeholder="Full Name" name="fullname" onChange={e=> setFullname(e.target.value)} autoComplete='on' />
               <input className="inputs-form"  type="text" placeholder="Email" name="email" onChange={e=> setEmail(e.target.value)} />
               <input className="inputs-form" type="text" placeholder="Password" name="password" onChange={e=> setPassword(e.target.value)} />
               <input className="inputs-form" type="text" placeholder="Confirm Password" name="confirmPassword" onChange={e=> setConfirmPassword(e.target.value)} />
               <select className="inputs-form" name="privilege" id="" onChange={e=> setPrivilege(e.target.value)}>
                <option value="?">Zgjedhni Rolin</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
               </select>
               <button className="inputs-button" id="register-btn" type="submit" value={"Update"} >Update</button>
               <Link to="/UserDashboard" className="inputs-button" id="register-btn" value={"Back"} >Back</Link>

               </form>
        
               
                   
               
               
         </div>
       </div>
   </div>
)
}       

export default UpdateUser;