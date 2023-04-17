import { useEffect, useState } from "react";
import "./cards.css";
import axios from 'axios';


const Cards =()=>{

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchAllUsers = async()=>{
            try {
                const res = await  axios.get("http://localhost:8800/users");
                setUsers(res.data);
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllUsers()
    } ,[])
    return(
        
        <div className="card-div">
            {users.map(users=>(
                <div className="cards" key={users.id}>
                <h2 id="fullname">{users.fullname}</h2>
                <h3 id="location">{users.location}</h3>
                <h4 id="profession">{users.profession}</h4>
                <p id="description">{users.description}</p>
                <button id="cv-button"><a href="/" id="cv-link">Download CV/Resume</a></button>
                <p id="worktype">{users.worktype}</p>
            </div>

            ))}
            

        
        </div>
    )
}



export default Cards;