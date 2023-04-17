import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";


const Navbar  = () =>{

  const [openModal, setOpenModal] = useState(false);


return(
// 
    <nav className={"navbar active navbar-expand-lg bg-body-tertiary" }    >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">OutWork</a>
      <button onClick={() => {
          setOpenModal(true);
        }}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/Employees'>Employees</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/Apply'>Apply</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/Login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
    {openModal && <Modal closeModal={setOpenModal} />}

  </nav>
  


);

}


export default Navbar;