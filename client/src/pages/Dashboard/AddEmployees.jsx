import "./AddEmployees.css";
import Navbar from "../../components/Navbar/Navbar"
import { useState } from "react";
import axios from "axios";





const AddEmployees =()=>{


    const [users, setUsers] = useState([]);
    const[fullname, setFullname] = useState('');
    const[location, setLocation] = useState('');
    const[profession, setProfession] = useState('');
    const[description, setDescription] = useState('');
    const[resume, setResume] = useState('');
    const[worktype, setWorktype] = useState('');
    const[privilege, setPrivilege] = useState('');
 
   



    

    
    

    const handleSubmit = () =>{

        axios.post("http//localhost:8800/create", {

            fullname:fullname,
            location:location,
            profession:profession,
            description:description,
            resume:resume,
            worktype:worktype,
            privilege:privilege
        }).then(() =>{
            setUsers([
                ...users,
                {
            fullname:fullname,
            location:location,
            profession:profession,
            description:description,
            resume:resume,
            worktype:worktype,
            privilege:privilege
                }
            ])
        })

 
    }
   

    return(
        <div className="body-apply">
            <div className="navbar">
            <Navbar />
            </div>

            <div className="main-divApply">
            <div className="title-apply">
                <h1>Add Employees</h1>
            </div>

            <div className="apply-form">
                <form action="" className="form" method="POST" >
                <input className="inputs-form"  type="text" placeholder="Full Name"   name="fullname" onChange={e =>setFullname(e.target.value)} />
                <input className="inputs-form"  type="text" placeholder="Location"   name="location"  onChange={e =>setLocation(e.target.value)} />
                <input className="inputs-form" type="text" placeholder="Profession"  name="profession" onChange={e =>setProfession(e.target.value)} />
                <textarea className="inputs-form" id="description-form" type="text"   placeholder="Description" name="description" onChange={e =>setDescription(e.target.value)}></textarea>
                <label   className="select-input" >Select Worktype:</label>
                <select name="worktype" className="select-input"  onChange={e =>setWorktype(e.target.value)} >
                    <option value="hybrid">Hybrid</option>
                    <option value="remote">Remote</option>
                    <option value="none">None</option>
                </select>
                <label   className="select-input">Select Privilege:</label>
                <select name="privilege" className="select-input "  onChange={e =>setPrivilege(e.target.value)} >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                
                <label  id="upload">Upload CV or Resume</label>
                <input className="inputs-form" id="file-upload" type="file"  name="resume" onChange={e =>setResume(e.target.value)} /> 
                <button className="inputs-button" type="submit" name="submit" id="register-btn" onSubmit={handleSubmit}w >Apply</button>

                </form>
                
                     
                
          </div>
            
            </div>
            

        </div>
    )
}



export default AddEmployees;