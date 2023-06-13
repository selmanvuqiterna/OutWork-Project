import React from 'react'
import "./AddEmployees.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function UpdateEmployees() {
    const[fullname, setFullname] = useState('');
    const[location, setLocation] = useState('');
    const[profession, setProfession] = useState('');
    const[description, setDescription] = useState('');
    const[resume, setResume] = useState('');
    const[worktype, setWorktype] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();
 


    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8800/updateEmployees/'+id, {fullname,location,profession,description,worktype,resume})
        .then(res =>{
            console.log(res);
            navigate('/EmployeesDashboard');
        }).catch(err => console.log(err))
     }


  return (
    <div className="body-apply">

    <div className="main-divApply">
    <div className="title-apply">
        <h1>Update Employees</h1>
    </div>

    <div className="apply-form">
        <form action="" className="form" method="POST" onSubmit={handleSubmit}>
        <input className="inputs-form"  type="text" placeholder="Full Name"   name="fullname" onChange={e =>setFullname(e.target.value)} required />
        <input className="inputs-form"  type="text" placeholder="Location"   name="location"  onChange={e =>setLocation(e.target.value)} required />
        <input className="inputs-form" type="text" placeholder="Profession"  name="profession" onChange={e =>setProfession(e.target.value)} required/>
        <textarea className="inputs-form" id="description-form" type="text"   placeholder="Description" name="description" onChange={e =>setDescription(e.target.value)} required></textarea>
        <label   className="select-input" >Select Worktype:</label>
        <select name="worktype" className="select-input"  onChange={e =>setWorktype(e.target.value)} required >
            <option value="?">Zgjedhni nje opsion</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <label  id="upload"> CV or Portfolio Link</label>
                <input className="inputs-form" id="file-upload" type="text"  name="resume" onChange={e =>setResume(e.target.value)} required /> 
        <button className="inputs-button" type="submit" name="submit" id="register-btn" >Update</button>

        </form>
        
             
        
  </div>
    
    </div>
    

</div>
  )
}

export default UpdateEmployees