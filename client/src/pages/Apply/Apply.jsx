import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./apply.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Apply  =()=>{



    
    const[fullname, setFullname] = useState('');
    const[location, setLocation] = useState('');
    const[profession, setProfession] = useState('');
    const[description, setDescription] = useState('');
    const[resume, setResume] = useState('');
    const[worktype, setWorktype] = useState('');

    const navigate = useNavigate();
 
   



    

    
    

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8800/addEmployees', {fullname,location,profession,description,worktype,resume})
        .then(res =>{
            console.log(res);
            navigate('/Employees');
        }).catch(err => console.log(err))
     }




     const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="pre-loader">
        <div className="spinner"></div>
      </div>
    );
  }
   return(
    <div className="body-aapply">
        <div className="navbar">
            <Navbar />
        </div>

        <div className="main-divApply">
            <div className="title-apply">
                <h1 id="title-apply">Apply</h1>
            </div>

            <div className="apply-form">
                <form action="" className="form" method="POST" onSubmit={handleSubmit}>
                <input className="inputs-form"  type="text" placeholder="Full Name"   name="fullname" onChange={e =>setFullname(e.target.value)} required />
                <input className="inputs-form"  type="text" placeholder="Location"   name="location"  onChange={e =>setLocation(e.target.value)} required />
                <input className="inputs-form" type="text" placeholder="Profession"  name="profession" onChange={e =>setProfession(e.target.value)} required />
                <textarea className="inputs-form" id="description-form" type="text"   placeholder="Description" name="description" onChange={e =>setDescription(e.target.value)} required></textarea>
                <label   className="select-input" >Select Worktype:</label>
                <select name="worktype" className="select-input"  onChange={e =>setWorktype(e.target.value)} required >
                    <option value="?">Zgjedhni nje Opsion</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <label  id="upload"> CV or Portfolio Link</label>
                <input className="inputs-form" id="file-upload" type="text"  name="resume" onChange={e =>setResume(e.target.value)}  required/> 
                <button className="inputs-button" type="submit" name="submit" id="register-btn" >Add</button>

                </form>
                
                     
                
          </div>
            
            </div>
    </div>
   )
}

export default Apply;
