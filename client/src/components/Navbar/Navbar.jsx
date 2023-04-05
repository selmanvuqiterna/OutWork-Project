import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";


const Navbar  = () =>{

  const [navbar, setNavbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const changeBg = () =>{
    if(window.scrollY >=80){
      setNavbar(true);

    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBg);

return(
// 
    <nav class={"navbar active navbar-expand-lg bg-body-tertiary" }    >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">OutWork</a>
      <button onClick={() => {
          setOpenModal(true);
        }}  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to='/Employees'>Employees</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to='/Apply'>Apply</Link>
          </li>
          <li class="nav-item">
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