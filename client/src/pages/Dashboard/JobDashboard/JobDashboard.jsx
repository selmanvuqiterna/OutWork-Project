import React from "react-router-dom";
import "./JobD.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-black-OW.png";
import axios from "axios";
import { useState, useEffect } from "react";
import  userLogo from "../../../assets/userIcon.png"
import  employeeLogo from "../../../assets/employeeIcon.png"
import jobLogo from "../../../assets/jobIcon.png"
import adminLogo from "../../../assets/adminIcon.png"
import homeLogo from "../../../assets/homeIcon.png"

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

      <div className="mainDiv-d">



            <div className="left-sidebar">
                <div className="contents">

                    <Link className="link-side" to='/UserDashboard'>
                        <div className="navigations">
                            <img src={userLogo} className="img-dash" alt="" />
                            <h1 className="title-sidebar">User Dashboard</h1>
                        </div>
                    </Link>


                    <Link className="link-side" to='/EmployeesDashboard'>
                        <div className="navigations">
                            <img src={employeeLogo} className="img-dash" alt="" />
                            <h1 className="title-sidebar">Employee Dashboard</h1>
                        </div>
                    </Link>

                    <Link className="link-side" to='/JobDashboard'>
                        <div className="navigations">
                            <img src={jobLogo} className="img-dash" alt="" />
                            <h1 className="title-sidebar">Job Dashboard</h1>
                        </div>
                    </Link>

                    <Link className="link-side" to='/Admins'>
                        <div className="navigations" >
                            <img src={adminLogo} className="img-dash" alt="" />
                            <h1 className="title-sidebar">Admins</h1>
                        </div>
                    </Link>

                    <Link className="link-side" to='/'>
                        <div className="navigations">
                            <img src={homeLogo} className="img-dash" alt="" />
                            <h1 className="title-sidebar">Home</h1>
                        </div>
                    </Link>
                </div>



                <div className="table-div" >
                <Link to="/Shpallje">
          <button className="button-add">Add Jobs</button>
        </Link>

        <table className="dashboard-table">
          <thead className="table-header">
            <tr id="head-row">
              <th className="table-head">ID</th>
              <th className="table-head">Titulli</th>
              <th className="table-head">Emri Kompanise</th>
              <th className="table-head">Kategoria</th>
              <th className="table-head">Lloji</th>
              <th className="table-head">Data e skadimit</th>
              <th className="table-head">Rroga</th>
              <th className="table-head">Email</th>
              <th className="table-head">Shteti</th>
              <th className="table-head">Telefoni</th>
              <th className="table-head">Logo</th>
              <th className="table-head">Pershkrimi</th>
              <th className="table-head">Action</th>
            </tr>
          </thead>

          { <tbody>
            {jobs.map((data, i) => (
              <tr key={i}>
                <td className="table-data">{data.id}</td>
                <td className="table-data">{data.shpallje_titulli}</td>
                <td className="table-data">{data.shpallje_emri_kompanisë}</td>
                <td className="table-data">{data.shpallje_kategoria}</td>
                <td className="table-data">{data.shpallje_lloji}</td>
                <td className="table-data">{data.shpallje_data_skadimit}</td>
                <td className="table-data">{data.shpallje_rroga}</td>
                <td className="table-data">{data.shpallje_email}</td>
                <td className="table-data">{data.shpallje_shteti}</td>
                <td className="table-data">{data.shpallje_telefoni}</td>
                <td className="table-data">{data.shpallje_logo_kompanise}</td>
                <td className="table-data">{data.shpallje_pershkrimi}</td>
                <td className="table-data" id="action">
                   <button id="btn-up" >
                    <Link to={`/JobUpdate/${data.id}`} id="btn-up">
                      Update
                    </Link>
                  </button> 
                  <button id="btn-del" onClick={(e) => handleDelete(jobs.id)} >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> }
        </table>  
                </div>
                
            </div>


            </div>
      {/* <div className="table-div">
        <Link to="/Shpallje">
          <button className="button-add">Add Jobs</button>
        </Link>

        <table className="dashboard-table">
          <thead className="table-header">
            <tr id="head-row">
              <th className="table-head">ID</th>
              <th className="table-head">Titulli</th>
              <th className="table-head">Emri Kompanise</th>
              <th className="table-head">Kategoria</th>
              <th className="table-head">Lloji</th>
              <th className="table-head">Data e skadimit</th>
              <th className="table-head">Rroga</th>
              <th className="table-head">Email</th>
              <th className="table-head">Shteti</th>
              <th className="table-head">Telefoni</th>
              <th className="table-head">Logo</th>
              <th className="table-head">Pershkrimi</th>
              <th className="table-head">Action</th>
            </tr>
          </thead>

          { <tbody>
            {jobs.map((data, i) => (
              <tr key={i}>
                <td className="table-data">{data.id}</td>
                <td className="table-data">{data.shpallje_titulli}</td>
                <td className="table-data">{data.shpallje_emri_kompanisë}</td>
                <td className="table-data">{data.shpallje_kategoria}</td>
                <td className="table-data">{data.shpallje_lloji}</td>
                <td className="table-data">{data.shpallje_data_skadimit}</td>
                <td className="table-data">{data.shpallje_rroga}</td>
                <td className="table-data">{data.shpallje_email}</td>
                <td className="table-data">{data.shpallje_shteti}</td>
                <td className="table-data">{data.shpallje_telefoni}</td>
                <td className="table-data">{data.shpallje_logo_kompanise}</td>
                <td className="table-data">{data.shpallje_pershkrimi}</td>
                <td className="table-data" id="action">
                   <button id="btn-up">
                    <Link to={`/JobUpdate/${data.id}`} id="btn-up">
                      Update
                    </Link>
                  </button> 
                  <button id="btn-del" onClick={(e) => handleDelete(jobs.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> }
        </table>
      </div> */}
    </div>
  );
};

export default JobDashboard;
