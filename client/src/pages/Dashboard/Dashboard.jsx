import "./Dashboard.css";
import Logo from "../../assets/logo-black-OW.png";
import { Link } from "react-router-dom";

import  userLogo from "../../assets/userIcon.png"
import  employeeLogo from "../../assets/employeeIcon.png"
import jobLogo from "../../assets/jobIcon.png"
import adminLogo from "../../assets/adminIcon.png"
import homeLogo from "../../assets/homeIcon.png"



const Dashboard =()=>{
    
    return(

        <div className="body-dashboard">
            <div className="navbar-dashboard">
             <div className="nav-div">
                <img className="element-nav" src={Logo} alt="logo" id="logo" />
                <Link className="home-c" to='/'>Home</Link>
                <Link className="home-c" to='/Dashboard'>Dashboard</Link>
             </div>
            </div>
            

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
                        <div className="navigations">
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
                
            </div>




        </div>
    )
}



export default Dashboard;
