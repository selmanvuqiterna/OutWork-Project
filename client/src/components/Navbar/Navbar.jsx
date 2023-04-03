import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar  = () =>{
return(

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">OutWork</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link className="nav-link" to='../../pages/Home/Home.jsx'>Home</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to='../../pages/Home/Home.jsx'>Employees</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to='../../pages/Home/Home.jsx'>Apply</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to='../../pages/Home/Home.jsx'>LogIn</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


);

}


export default Navbar;