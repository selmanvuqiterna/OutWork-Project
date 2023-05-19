import "./Dashboard.css";
import Logo from "../../assets/logo-color-OW.png";
import { Link } from "react-router-dom";





const Dashboard =()=>{
    return(

        <div className="body-apply">
            <div className="navbar-dashboard">
             <div className="nav-div">
                <img className="element-nav" src={Logo} alt="logo" id="logo" />
                <Link className="home-c" to='/'>Home</Link>
                <Link className="home-c" to='/Dashboard'>Dashboard</Link>
             </div>
            </div>

            <div className="mainDiv">
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
                        <h3 className="cards-title" >Suggestions Dashboard</h3>
                        <Link to="/SuggestionDashboard">
                        <button className="button-card" >Go to Suggestions Dashboard</button>
                        </Link>
                    </div>

                </div>
                
            </div>




        </div>
    )
}



export default Dashboard;
