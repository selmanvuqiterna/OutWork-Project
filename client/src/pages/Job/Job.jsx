import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./job.css";
import "typeface-roboto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/job/${id}`);
        setJob(res.data.data); // Assuming the job data is returned as res.data.data
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [id]);
  return (
    <div className="Job">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="job-container">
        <p
          className="go-back-jobs"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <Link className="go-back-jobs" to="/Jobs">
            &lt; Kthehu
          </Link>
        </p>
        <p
          className="job-container-header"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {job.shpallje_titulli}
        </p>

        <div className="job-content">
          <div className="job-description">
            <img
              src={`http://localhost:8800/uploads/${job.shpallje_logo_kompanise}`}
              alt=""
              className="job-description-image"
            />
            <div className="job-description-types">
              <p className="types">Lloji</p>
              <p className="types"> Kategoria</p>
              <p className="types">Shteti</p>
            </div>
            <div className="job-description-types-bold">
              <p className="types-bold">{job.shpallje_lloji}</p>
              <p className="types-bold">{job.shpallje_kategoria}</p>
              <p className="types-bold">{job.shpallje_shteti}</p>
            </div>
            <div className="job-description-detajet">
              <p className="types-bold">Detajet</p>
              <p className="types">Data e skadimit</p>
              <p className="types-semi-bold">
                {job.shpallje_data_skadimit &&
                  job.shpallje_data_skadimit.substring(0, 10)}
              </p>
            </div>

            <div className="job-pershkrimi">
              <div className="job-pershkrimi-label">
                <p className="types-bold">Pershkrimi</p>
              </div>
              <div className="job-pershkrimi-real">
                <div className="pershkrimi-real" style={{ marginLeft: "20px" }}>
                  <p className="types-bold">{job.shpallje_pershkrimi}</p>
                </div>
              </div>
            </div>

            <div className="job-pershkrimi">
              <p className="types-bold">Shperndaje</p>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2x"
                  style={{ marginLeft: "100px" }}
                />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  size="2x"
                  style={{ marginLeft: "10px" }}
                />
              </a>
            </div>
            <div className="job-pershkrimi-kontakt">
              <p className="types-bold">Kontakt</p>
              <div className="kontakt-info">
                <p className="types-bold">{job.shpallje_email}</p>
                <p className="types-bold">{job.shpallje_telefoni}</p>
                <p className="types-bold">{job.shpallje_shteti}</p>
              </div>
            </div>

            <div className="job-info-shtesë">
              <p className="info-type">
                Kjo shpallje eshte publikuar nga persona te trete ne platformen
                e Outwork.Outwork nuk mban asnje pergjegjesi ne lidhje me
                mirembajtjen e shpalljes ose vertetesine e saj.
              </p>
            </div>
          </div>

          <div className="job-dergo-shpallje">
            <div className="shpallja-punedhenesi">
              <p className="shpallja-punedhenesi-p">Emri</p>
              <p className="shpallja-punedhenesi-p-bold">
                {job.shpallje_email}
              </p>
              <p className="shpallja-punedhenesi-p">Numri kontaktues</p>
              <p className="shpallja-punedhenesi-p-bold">
                {job.shpallje_telefoni}
              </p>
              <p className="shpallja-punedhenesi-p">Vendndodhja</p>
              <p className="shpallja-punedhenesi-p-bold">
                {job.shpallje_shteti}
              </p>
            </div>

            <div className="shpallja-punekerkuesi">
              <h3 className="shpallje-h3">Kontakto me shpallesin</h3>
              <div className="margin-top">
                <p className="shpallja-punedhenesi-p">Emri</p>
                <input type="text" className="input-pune-kerkuesi" />
              </div>
              <div className="margin-top">
                <p className="shpallja-punedhenesi-p">E-mail</p>
                <input type="text" className="input-pune-kerkuesi" />
              </div>
              <div className="margin-top">
                <p className="shpallja-punedhenesi-p">Numri i telefonit</p>
                <input type="text" className="input-pune-kerkuesi" />
              </div>
              <div className="margin-top">
                <p className="shpallja-punedhenesi-p">Mesazhi</p>
                <textarea class="input-pune-kerkuesi-textarea"></textarea>
              </div>
              <button className="shpallje-apliko">Apliko</button>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Job;
