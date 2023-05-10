import "./Modal.css";
import React from "react";
import { Link } from "react-router-dom";

const  Modal = ({closeModal}) =>{
    return(

        <div className="modalDiv" onMouseOut={() =>closeModal(false)}>

        <button className="cls-btn" onClick={() =>closeModal(false)}>Close</button>
                      
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
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



    )
}


export default Modal;