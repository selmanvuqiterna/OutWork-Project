import { useEffect, useState } from "react";
import "./cards.css";
import axios from 'axios';


const Cards =()=>{

    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        const fetchAllEmployees = async()=>{
            try {
                const res = await  axios.get("http://localhost:8800/employees");
                setEmployees(res.data);
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllEmployees()
    } ,[])
    return(
        
        <div className="card-div">
            {employees.map(employees=>(
                <div className="cards" key={employees.id}>
                <h2 id="fullname">{employees.fullname}</h2>
                <h3 id="location">{employees.location}</h3>
                <h4 id="profession">{employees.profession}</h4>
                <p id="description">{employees.description}</p>
                <button id="cv-button"><a href="/" id="cv-link">Download CV/Resume</a></button>
                <p id="worktype">{employees.worktype}</p>
            </div>

            ))}
            

        
        </div>
    )
}



export default Cards;