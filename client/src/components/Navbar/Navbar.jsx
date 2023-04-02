import { Link } from "react-router-dom";



const Navbar  = () =>{
return(

    <nav className="nav-bar">
        <h1>OutWork</h1>


        <ul>
            <li><Link>Home</Link></li>
            <li><Link>Employees</Link></li>
            <li><Link>Apply</Link></li>
            <li><Link>Login</Link></li>
        </ul>
    </nav>


);

}