import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./employees.css";


const Employees  =()=>{
    return(
        <div className="body-employees">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="mainDiv">

              <h1 className="title">Employess</h1>   

            </div>
        </div>
    )
}


export default Employees;