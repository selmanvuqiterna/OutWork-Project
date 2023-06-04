import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import "./employees.css";
import { useState,useEffect } from "react";


const Employees  =()=>{


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