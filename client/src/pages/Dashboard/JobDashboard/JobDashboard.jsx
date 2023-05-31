import React from "react-router-dom";
import "./JobD.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-no-background-OW.png";
import axios from "axios";
import { useState, useEffect } from "react";

const JobDashboard = () => {


  const [jobs, setJobs] = useState([])

    useEffect(()=>{
      const fetchAllJobs = async()=>{
        try{
          const res = await  axios.get("http://localhost:8800/jobs")
          setJobs(res.data)
  
        }catch(error){
          console.log(error)
        }
      }
      fetchAllJobs()
  
    },[])

    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:8800/jobs/' +id,)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }




  return (
    <div className="body-div-jobs">
      <div className="navbar-dashboard">
        <div className="nav-div">
          <img className="element-nav" src={Logo} alt="logo" id="logo" />
          <Link className="home-c" to="/">
            Home
          </Link>
          <Link className="home-c" to="/Dashboard">
            Dashboard
          </Link>
        </div>
      </div>
      <div className="table-div">
        <Link to="/Shpallje">
          <button className="button-add">Add Jobs</button>
        </Link>

        <table className="dashboard-table">
          <thead className="table-header">
            <tr id="head-row">
              <th className="table-head">ID</th>
              <th className="table-head">Category</th>
              <th className="table-head">Location</th>
              <th className="table-head">Company</th>
              <th className="table-head">Source</th>
              <th className="table-head">Expiration Date</th>
              <th className="table-head">Image</th>
              <th className="table-head">Action</th>
            </tr>
          </thead>

          { <tbody>
            {jobs.map((jobs, i) => (
              <tr key={i}>
                <td className="table-data">{jobs.id}</td>
                <td className="table-data">{jobs.job_category}</td>
                <td className="table-data">{jobs.job_location}</td>
                <td className="table-data">{jobs.job_company_name}</td>
                <td className="table-data">{jobs.job_source}</td>
                <td className="table-data">{jobs.job_date_expired}</td>
                <td className="table-data">{jobs.job_image}</td>
                <td className="table-data">
                  {/* <button id="btn-up">
                    {" "}
                    <Link to={`/update/${data.id}`} id="btn-up">
                      Update
                    </Link>
                  </button> */}
                  <button id="btn-del" onClick={(e) => handleDelete(jobs.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> }
        </table>
      </div>
    </div>
  );
};

export default JobDashboard;
