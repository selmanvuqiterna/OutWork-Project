import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

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
        if (!response.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
          navigate("/");
        }
      });
  }

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
            {loginStatus === false && (
              <p className="error-login">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="error-icon"
                  style={{ marginRight: "5px" }}
                />
                Wrong email/password combination!
                {loginStatus}
              </p>
            )}

            <input
              className="inputs-button"
              type="submit"
              value={"Login"}
              onClick={handleSubmit}
            />

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
