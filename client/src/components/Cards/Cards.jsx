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
                <p id="fullname">Fullname: {employees.fullname}</p>
                <p id="location">Location: {employees.location}</p>
                <p id="profession">Profession: {employees.profession}</p>
                <p id="description">Descripiton: {employees.description}</p>
                <button id="cv-button"><a href={employees.resume} target="_blank" rel="noopener noreferrer" id="cv-link">Portfolio or CV/Resume</a></button>
                <p id="worktype">Worktype: {employees.worktype}</p>
            </div>

            ))}
            

        
        </div>
    )
}



export default Cards;