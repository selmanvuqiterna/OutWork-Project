import React, { useState } from "react";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privilege] = useState("User");
  const [personalNumber, setPersonalNumber] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least one letter, one digit, and be at least 8 characters long."
      );
    } else if (!personalNumberRegex.test(personalNumber)) {
      alert(
        "Numri personal duhet te kete fiks 10 karaktere , dhe te kete vetem numra"
      );
    } else {
      axios
        .post("http://localhost:8800/create", {
          fullname,
          email,
          password,
          privilege,
          personalNumber,
        })
        .then((res) => {
          console.log(res);
          navigate("/Login");
        })
        .catch((err) => console.log(err));
      alert("Registered Successfully");
    }
  }
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const personalNumberRegex = /^\d{10}$/;

  return (
    <div className="bodyRegister">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main-divRegister">
        <div className="title-register">
          <h1>Register</h1>
        </div>

        <div className="register-form">
          <form
            action=""
            className="form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className="inputs-form"
              type="text"
              placeholder="Full Name"
              name="fullname"
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <input
              className="inputs-form"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="inputs-form"
              type="text"
              placeholder="Personal Number"
              name="personalnumber"
              onChange={(e) => setPersonalNumber(e.target.value)}
              required
            />

            <input
              className="inputs-form"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="inputs-button"
              id="register-btn"
              type="submit"
              value={"Register"}
            >
              {" "}
              Register
            </button>
          </form>
          <div id="already">
            <a href="/Login">Already have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
