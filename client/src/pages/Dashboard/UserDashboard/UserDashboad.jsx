import "./UserD.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-color-OW.png";
import axios from 'axios';
import { useEffect, useState } from "react";



const UserDashboard = ()=>{


    const [user,setUser] = useState([]);



    useEffect(()=>{
        axios.get('http://localhost:8800/users')
        .then(res=> setUser(res.data))
        .catch(err=> console.log(err));
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:8800/users/' +id,)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
return(
    <div className="body-div-dashboard">
        <div className="navbar-dashboard">
             <div className="nav-div">
                <img className="element-nav" src={Logo} alt="logo" id="logo" />
                <Link className="home-c" to='/'>Home</Link>
                <Link className="home-c" to='/Dashboard'>Dashboard</Link>
             </div>
            </div>

            <div className="mainDiv-d">

                
                <div className="table-div">
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
                            <th className="table-head">Confirm Password</th>
                            <th className="table-head">Privilege</th>
                            <th className="table-head">Action</th>
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
                                    <td className="table-data">{data.confirmPassword}</td>
                                    <td className="table-data">{data.privilege}</td>
                                    <td className="table-data">
                                       <button id="btn-up"> <Link to={`/update/${data.id}`} id="btn-up" >Update</Link></button>
                                        <button id="btn-del" onClick={e => handleDelete(data.id)}>Delete</button>
                                    </td>
                                

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>


            </div>

            
    </div>
)

}






export default UserDashboard;