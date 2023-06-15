import React from 'react'
import "../UserDashboard/UserD.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-black-OW.png";
import axios from 'axios';
import { useEffect, useState } from "react";
import  userLogo from "../../../assets/userIcon.png"
import  employeeLogo from "../../../assets/employeeIcon.png"
import jobLogo from "../../../assets/jobIcon.png"
import adminLogo from "../../../assets/adminIcon.png"
import homeLogo from "../../../assets/homeIcon.png"


function Admins() {
    const [user,setUser] = useState([]);



        

    useEffect(()=>{
        axios.get('http://localhost:8800/admins')
        .then(res=> setUser(res.data))
        .catch(err=> console.log(err));
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:8800/admins/' +id,)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    
  return (
    <div className="body-div-dashboard">
        <div className="navbar-dashboard">
             <div className="nav-div">
                <img className="element-nav" src={Logo} alt="logo" id="logo" />
                <Link className="home-c" to='/'>Home</Link>
                <Link className="home-c" to='/Dashboard'>Dashboard</Link>
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
                <Link to='/AddUser'>
                <button className="button-add">Add Users</button>
                </Link>

                <table className="dashboard-table">
                    <thead className="table-header">
                        <tr id="head-row" >
                            <th className="table-head">ID</th>
                            <th className="table-head">Fullname</th>
                            <th className="table-head">Email</th>
                            <th className="table-head">Password</th>
                            <th className="table-head">Personal Number</th>
                            <th className="table-head">Privilege</th>
                            <th className="table-head" >Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((data, i) =>(
                                <tr key={i}>    
                                    <td className="table-data">{data.id}</td>
                                    <td className="table-data">{data.fullname}</td>
                                    <td className="table-data">{data.email}</td>
                                    <td className="table-data">{data.password}</td>
                                    <td className="table-data">{data.user_numri_personal}</td>
                                    <td className="table-data">{data.privilege}</td>
                                    <td className="table-data" id="action-td">
                                     <button   id="btn-up" className="btn-form"> <Link to={`/update/${data.id}`} id="btn-up" >Update</Link></button>
                                        <button id="btn-del" onClick={e => handleDelete(data.id)} className="btn-form">Delete</button>
                                    </td>
                                

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                
            </div>


            </div>

            
    </div>
  )
}

export default Admins