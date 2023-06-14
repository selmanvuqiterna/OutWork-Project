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
import { useNavigate } from "react-router-dom";

const Job = () => {
  const { id } = useParams();

  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [userId, setUserId] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const navigate = useNavigate();

  //me i marr postet
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/job/${id}`);
        setJob(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const authorizedUserId = await handleAmIAuthorized();
      console.log("Authorized UserId:", authorizedUserId);

      if (authorizedUserId) {
        setUserId(authorizedUserId); // Set the userId state
        const response = await aplikimet(authorizedUserId); // Use await to wait for apliko to finish
        console.log(response);
      }
    } catch (error) {
      // console.error(error);
    }
  }

  const handleAmIAuthorized = async () => {
    try {
      const response = await axios.get("http://localhost:8800/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      // console.log(response.data);

      if (response.data.auth) {
        const userId = response.data.userId;
        return userId; // Return the userId
      } else {
        // console.log(response);
        navigate("/login");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const shpalljaId = { id };

  const aplikimet = async (userId) => {
    try {
      const response = await axios.post("http://localhost:8800/aplikimet", {
        shpalljaId: shpalljaId.id,
        userId,
      });

      // Handle the response here if needed
      // console.log(response.data);
      if (response.data === "!!!!!Keni aplikur nje herë") {
        setError(response.data);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      return { error: "!!!!!!!!Keni aplikuar nje here" };
    }
  };

  // const aplikimet = async (userId) => {
  //   axios.post("http://localhost:8800/aplikimet", {
  //     shpalljaId: shpalljaId.id,
  //     userId,
  //   });
  // };

  if (isLoading) {
    return (
      <div className="pre-loader">
        <div className="spinner"></div>
      </div>
    );
  }

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

            <form
              action=""
              className="form-post-job"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="shpallja-punekerkuesi">
                <h3 className="shpallje-h3">Kontakto me shpallesin</h3>
                <div className="margin-top">
                  <p className="shpallja-punedhenesi-p">Emri</p>
                  <input type="text" className="input-pune-kerkuesi" required />
                </div>
                <div className="margin-top">
                  <p className="shpallja-punedhenesi-p">E-mail</p>
                  <input type="text" className="input-pune-kerkuesi" required />
                </div>
                <div className="margin-top">
                  <p className="shpallja-punedhenesi-p">Numri i telefonit</p>
                  <input type="text" className="input-pune-kerkuesi" required />
                </div>
                <div className="margin-top">
                  <p className="shpallja-punedhenesi-p">Mesazhi</p>
                  <textarea
                    class="input-pune-kerkuesi-textarea"
                    required
                  ></textarea>
                </div>
                <button className="shpallje-apliko" type="submit">
                  Apliko
                </button>
                {error && (
                  <div className="error" style={{ color: "red" }}>
                    {error}
                  </div>
                )}
              </div>
            </form>
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
