/* eslint-disable */
import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./jobs.css";
// import JobCards from "../../components/JobCards/JobCards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import "smoothscroll-polyfill";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);

  const postRef = useRef(null);

  const handleSearchClick = () => {
    postRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="body-jobs">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="container-body-content">
        <div className="container-header-serach-post">
          <div className="container-search">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <a
              className="container-header-search-post-link"
              onClick={handleSearchClick}
            >
              Kërko punë
            </a>
          </div>
          <div className="container-post" ref={postRef}>
            <Link to="/shpallje" className="container-header-search-post-link">
              <FontAwesomeIcon icon={faPlus} className="search-icon" />
              Post a job
            </Link>
          </div>
        </div>
        {jobs.map((jobs) => (
          <div className="container-jobs-cards" key={jobs.id}>
            <div className="container-job">
              <div className="job-img">
                <img
                  src={`http://localhost:8800/uploads/${jobs.shpallje_logo_kompanise}`}
                  alt="No img Avaliable"
                  className="job-img-style"
                />
              </div>
              <div className="job-details">
                <Link to={`/Shpallje/${jobs.id}`} className="link-job-id">
                  <h3 className="job-details-header">
                    {jobs.shpallje_titulli}
                  </h3>
                </Link>

                <div className="job-details-content">
                  <div className="job-details-content-3">
                    <p className="job-details-pershkrimi">
                      Kategoria: <strong>{jobs.shpallje_kategoria}</strong>
                    </p>
                    <p className="job-details-pershkrimi">
                      Shteti: <strong>{jobs.shpallje_shteti}</strong>
                    </p>
                    <p className="job-details-pershkrimi">
                      Kompania: <strong>{jobs.shpallje_emri_kompanisë}</strong>
                    </p>
                  </div>
                  <div className="job-details-content-6">
                    <p className="job-details-pershkrimi">
                      Burimi:{" "}
                      <strong>
                        <Link style={{ textDecoration: "none" }} to="/">
                          outwork.com
                        </Link>
                      </strong>
                    </p>
                    <p className="job-details-pershkrimi">
                      Data e skadimit:{" "}
                      <strong>
                        {jobs.shpallje_data_skadimit.substring(0, 10)}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
