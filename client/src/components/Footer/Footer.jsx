import React from "react";
import "./footer.css";
import Gjirafa from "../../assets/gjirafa.png";
import Kerkoj from "../../assets/kerkoj.png";
import Linked from "../../assets/linked.png";
import Upwork from "../../assets/upwork.png";


const Footer =()=>{
    return(
        <div id="footer-main">
            <h1 id="title-footer">Our Partners</h1>
            <img className="images" id="gjirafa" src={Gjirafa} alt="gjirafa"  />
            <img className="images" id="kerkoj" src={Kerkoj} alt="kerkoj"  />
            <img className="images" id="linked" src={Linked}   alt="linkedIn" />
            <img className="images" id="upwork" src={Upwork}  alt="upWork" />

        </div>

    )
}

export default Footer;
