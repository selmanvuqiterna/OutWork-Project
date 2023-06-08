import React from "react";
import { useState, useEffect } from "react";
import "./aplikimet.css";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
const Aplikimet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const [aplikimet, setAplikimet] = useState({});

  // //me i marr postet
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/merrAplikimet/${userId}`
        );
        setAplikimet(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="pre-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="aplikimet">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="container-aplikimet"></div>
      <div className="container-aplikimet-pune">
        <p className="aplikimet-header">Aplikimet per vende pune</p>
        <p className="aplikimet-secondary">
          Aktualisht keni aplikuar në këto pozita pune
        </p>

        <div className="puna-aplikimi">
          <div className="aplikimi-titulli">
            <p className="titulli-aplikimi">{aplikimet.shpallje_titulli}</p>
            <p className="emri-kompanis-aplikimi">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "7px" }} />
              {aplikimet.shpallje_emri_kompanisë}
            </p>
            <p className="shteti-aplikimi">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "7px" }}
              />
              {aplikimet.shpallje_shteti}
            </p>
          </div>

          <div className="aplikimi-largo">
            <button className="aplikimi-fshije">Largo</button>
            <p className="aplikimi-data">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "7px" }}
              />
              {new Date(aplikimet.shpallje_data_skadimit).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </p>
            <p className="aplikimi-lloji">{aplikimet.shpallje_lloji}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplikimet;
