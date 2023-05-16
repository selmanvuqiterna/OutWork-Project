import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import "./employees.css";


const Employees  =()=>{
    return(
        <div className="body-employees">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="main-div">
                <div className="search-div">
                   <input type="text" name="search" id="search-bar" placeholder="Search Employees"/>
                   <button id="search-btn" >Search</button>
                </div>

                <div className="cardss-div">
                <Cards />
                </div>
            </div>
        </div>
    )
}


export default Employees;