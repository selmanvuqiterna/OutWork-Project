import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./postjob.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostJob() {

      const[category, setCategory] = useState('');
      const[location, setLocation] = useState('');
      const[company_name, setCompany_name] = useState('');
      const[company_source, setCompany_source] = useState('');
      const[expiration_date, setExpiration_date] = useState('');
      const[company_logo, setCompany_logo] = useState('');

      const navigate = useNavigate();


      function handleSubmit(event){
          event.preventDefault();
          axios.post('http://localhost:8800/krijoPune', {category,location,company_name,company_source,expiration_date,company_logo})
          .then(res=>{
            console.log(res)
            alert("Keni regjistruar punen me sukses")
            navigate('/Jobs')
          }).catch(err =>console.log(err))

      }

  return (
    <div className="body-aapply">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main-divApply">
        <div className="title-jobs">
          <h1 id="title-apply">Add Jobs</h1>
        </div>

        <div className="apply-form">
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
            onChange={e=>setCategory(e.target.value)}
              className="inputs-form"
              type="text"
              placeholder=" Category"
              name="category"
            
            />
            <input 
            className="inputs-form" 
            type="text" 
            placeholder="Location" 
            name="location" 
            onChange={e=>setLocation(e.target.value)} />

            <input
              onChange={e=>setCompany_name(e.target.value)}
              className="inputs-form"
              type="text"
              placeholder="Company Name"
              name="company_name"
            />
            <input
            onChange={e=>setCompany_source(e.target.value)}
              className="inputs-form"
              type="text"
              placeholder="Apply Link"
              name="company_source"
            />
            <input
            onChange={e=>setExpiration_date(e.target.value)}
              className="inputs-form"
              type="text"
              placeholder="Expiration Date"
              name="expiration_date"
            />
            <label htmlFor="" id="upload">
              {" "}
              Add Company Logo
            </label>
            <input
            onChange={e=>setCompany_logo(e.target.value)}
              className="inputs-form"
              id="file-upload"
              type="text"
              placeholder="Company Logo"
              name="company_logo"
            />

            <input
              className="inputs-button"
              id="register-btn"
              type="submit"
              value={"Add"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
