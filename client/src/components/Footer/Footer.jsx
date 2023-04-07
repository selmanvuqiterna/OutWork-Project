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
            <img className="images" id="gjirafa" src={Gjirafa} alt="logos"  />
            <img className="images" id="kerkoj" src={Kerkoj} alt="logos"  />
            <img className="images" id="linked" src={Linked}   alt="logos" />
            <img className="images" id="upwork" src={Upwork}  alt="logos" />

        </div>

    )
}

export default Footer;