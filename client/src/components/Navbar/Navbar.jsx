import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Logo from "../../assets/logo-no-background-OW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };

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
            <li className="nav-item" style={{ marginLeft: "100px" }}>
              <FontAwesomeIcon
                icon={faUser}
                className="login-icon nav-link"
                onClick={toggleModalLogin}
              />
              {modalLogin && (
                <div className="modal-login">
                 <div className="login-opsionet">
                    <p className="login-aplikimet">Menaxho Shpalljet</p>
                    <p className="login-aplikimet">Menaxho aplikimet</p>
                    <p className="login-aplikimet">Profili im</p>
                    <p className="login-aplikimet">Ç'kyçu</p>
                  </div>
                </div>
              )}
              <Link className="nav-link" to="/Login">
                <p style={{ display: "none" }}> Login </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </nav>
  );
};

export default Navbar;
