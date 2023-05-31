import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./postjob.css";

function PostJob() {
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
          <form action="" className="form">
            <input
              className="inputs-form"
              type="text"
              placeholder=" Category"
            />
            <input className="inputs-form" type="text" placeholder="Location" />
            <input
              className="inputs-form"
              type="text"
              placeholder="Company Name"
            />
            <input
              className="inputs-form"
              type="text"
              placeholder="Apply Link"
            />
            <input
              className="inputs-form"
              type="text"
              placeholder="Expiration Date"
            />
            <label htmlFor="" id="upload">
              {" "}
              Add Company Logo
            </label>
            <input
              className="inputs-form"
              id="file-upload"
              type="text"
              placeholder="Company Logo"
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
