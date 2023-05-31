import "./Dashboard.css";
import Logo from "../../assets/logo-no-background-OW.png";
import { Link } from "react-router-dom";
import Image from "../../assets/ImageWorkers.png";





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
            

            <div className="mainDiv">
            <div>
                <img className="img-card"  src={Image} alt="" />
            </div>
                <div className="title-div">
                    <h1 className="title">Welcome to OutWork Dashboard</h1>
                </div>

                <div className="cards-div">

                    <div className="card">
                        <h3 className="cards-title"> Employees Dashboard</h3>
                        <Link to="/EmployeesDashboard">
                        <button className="button-card" >Go to Employee Dashboard</button>
                        </Link>
                    </div>

                    <div className="card">
                        <h3 className="cards-title">Users Dashboard</h3>
                        <Link to="/UserDashboard">
                        <button className="button-card" >Go to Users Dashboard</button>
                        </Link>
                    </div>

                    <div className="card">
                        <h3 className="cards-title" >Job Dashboard</h3>
                        <Link to="/JobDashboard">
                        <button className="button-card" >Go to Job Dashboard</button>
                        </Link>
                    </div>

                </div>
                
            </div>




        </div>
    )
}



export default Dashboard;
