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
  const [aplikimet, setAplikimet] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  function handleLargo(e, userId, shpalljaId) {
    e.preventDefault();
    try {
      axios
        .post(`http://localhost:8800/fshiAplikimet/${userId}/${shpalljaId}`)
        .then(() => {
          window.location.reload(); // Reload the page
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/merrAplikimet/${userId}`
        );
        // console.log("aplikimet:", aplikimet, typeof aplikimet);
        setAplikimet(res.data.data);
        console.log(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMsg(err.response.data.message);
        }
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
  if (errorMsg) {
    return (
      <div className="aplikimet">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container-aplikimet">
          <p className="aplikimet-header">Aplikimet per vende pune</p>

          <p style={{ marginTop: "10px", marginLeft: "40px" }}>{errorMsg}</p>
        </div>
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

        {aplikimet.map((aplikimi) => (
          <form action="" onSubmit={handleLargo}>
            <div className="puna-aplikimi" key={aplikimi.aplikimi_id}>
              <div className="aplikimi-titulli">
                <p className="titulli-aplikimi">{aplikimi.shpallje_titulli}</p>
                <p className="emri-kompanis-aplikimi">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: "7px" }}
                  />
                  {aplikimi.shpallje_emri_kompanisë}
                </p>
                <p className="shteti-aplikimi">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ marginRight: "7px" }}
                  />
                  {aplikimi.shpallje_shteti}
                </p>
              </div>

              <div className="aplikimi-largo">
                <button
                  className="aplikimi-fshije"
                  type="submit"
                  onClick={(e) => handleLargo(e, userId, aplikimi.shpallja_id)}
                >
                  Largo
                </button>
                <p className="aplikimi-data">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginRight: "7px" }}
                  />
                  {new Date(aplikimi.shpallje_data_skadimit).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
                <p className="aplikimi-lloji">{aplikimi.shpallje_lloji}</p>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Aplikimet;
