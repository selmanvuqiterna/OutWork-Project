import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useState,useEffect } from "react";
import Modal from "../Modal/Modal";
import Logo from "../../assets/logo-no-background-OW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [login, setLogin] = useState(false);


  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

  

    useEffect(() => {
    axios
      .get("http://localhost:8800/login")
      .then((response) => {
        if (response.data.loggedIn) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  return (
    //
    <nav className={"navbar active navbar-expand-lg bg-body-tertiary"}>
      <div className="nav-container">
        <div className="logo-div">
          <Link to="/">
            {" "}
            <img src={Logo} alt="" id="logo" />
          </Link>
        </div>

        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Employees">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Apply">
                Apply
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Jobs">
                Jobs
              </Link>
            </li>

            {login ? (
            <li className="nav-item" style={{ marginLeft: "100px" }}>
              <FontAwesomeIcon
                icon={faUser}
                className="login-icon nav-link"
                onClick={toggleModalLogin}
                
              />
                {modalLogin && (
                <div className="modal-login">
                  <div className="login-opsionet">
                    <Link to="/Shpalljet" className="link-login">
                      <p className="login-aplikimet">Menaxho Shpalljet</p>
                    </Link>
                    <Link to="/Aplikimet" className="link-login">
                      <p className="login-aplikimet">Menaxho aplikimet</p>
                    </Link>
                    <Link to="/Profili" className="link-login">
                      <p className="login-aplikimet">Profili im</p>
                    </Link>
                    <p className="login-aplikimet">Ç'kyçu</p>
                  </div>
                </div>
                )}
                </li>):(
                   <li className="nav-item" style={{ marginLeft: "100px" }}>
                   <Link className="nav-link" to="/Login">
                     <p >Login</p>
                   </Link>
                 </li>
                )}
               
          </ul>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </nav>
  );
};

export default Navbar;
