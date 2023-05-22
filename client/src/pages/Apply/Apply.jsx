import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./apply.css";



const Apply  =()=>{
    return(
        <div className="body-aapply">
        <div className="navbar">
            <Navbar />
        </div>

        <div className="main-divApply">


            <div className="title-apply">
                <h1 id="title-apply">Apply</h1>
            </div>

            <div className="apply-form">
                <form action="" className="form">
                <input className="inputs-form"  type="text" placeholder="Full Name" />
                <input className="inputs-form"  type="text" placeholder="Location" />
                <input className="inputs-form" type="text" placeholder="Profession" />
                <textarea className="inputs-form" id="description-form" type="text" placeholder="Description"></textarea>
                <label htmlFor="" id="upload"> CV or Portfolio Link</label>
                <input className="inputs-form" id="file-upload" type="text" placeholder="CV or Portfolio Link" />
                <input className="inputs-form" type="text" placeholder="Worktype" />
                <input className="inputs-button" id="register-btn" type="submit" value={"Apply"}  />

                </form>
                
                    
                
                
          </div>
        </div>
    </div>
    
    )
}

export default Apply;
