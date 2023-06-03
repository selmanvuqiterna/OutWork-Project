import React from "react";
import "./JobCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import Home from "../../pages/Home/Home";
import { Link } from "react-router-dom";

function JobCards() {
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

  return (
    <div className="card-container">
      {jobs.map((jobs) => (
        <div class="cards-job">
          <img
            src={`http://localhost:8800/uploads/${jobs.shpallje_logo_kompanise}`}
            class="card-img-top"
            alt="No img Avaliable"
          />
          <div class="card-body">
            <h5 class="card-title">{jobs.job_category}</h5>
            <p class="card-text">Kompania: {jobs.shpallje_emri_kompanisë}</p>
            <p class="card-text">Vendi: {jobs.shpallje_shteti}</p>
            <p class="card-text">Skadon me: {jobs.shpallje_data_skadimit}</p>
            <Link to="/" target="_blank" rel="noopener noreferrer" class="btn">
              Apliko Ketu
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobCards;
