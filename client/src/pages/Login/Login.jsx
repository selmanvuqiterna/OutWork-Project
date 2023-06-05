import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8800/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          // console.log(response.data[0]);
        } else {
          setLoginStatus(response.data.email);
          navigate("/");
        }
      });
  }
  useEffect(() => {
    axios
      .get("http://localhost:8800/login")
      .then((response) => {
        if (response.data.loggedIn) {
          console.log("Logged in user:", response.data.user[0].fullname);
          setLoginStatus(response.data.user[0].fullname);
        } else {
          console.log("User not logged in");
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);
  

  return (
    <div className="bodyLogin">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="mainDiv-login">
        <div className="title-login">
          <h1>Login</h1>
        </div>

        <div className="login-form">
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              className="inputs-form"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              className="inputs-form"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
             {loginStatus && (
              <p className="error-login">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="error-icon"
                  style={{ marginRight: "5px" }}
                />
                {loginStatus}
              </p>
            )}
            
            <input className="inputs-button" type="submit" value={"Login"} />

            <div className="inputs-button">
              <a href="/Register" id="register-btn">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
