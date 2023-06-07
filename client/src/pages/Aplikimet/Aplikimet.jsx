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

const Aplikimet = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

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
            <p className="titulli-aplikimi">
              Praktikante ne Inxhinieri softuerike
            </p>
            <p className="emri-kompanis-aplikimi">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "7px" }} />
              PR CONSULTING SH.P.K
            </p>
            <p className="shteti-aplikimi">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "7px" }}
              />
              Kosovë
            </p>
          </div>

          <div className="aplikimi-largo">
            <button className="aplikimi-fshije">Largo</button>
            <p className="aplikimi-data">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "7px" }}
              />
              Apr 06, 2023
            </p>
            <p className="aplikimi-lloji">Full Time</p>
          </div>
        </div>

        <div className="puna-aplikimi">
          <div className="aplikimi-titulli">
            <p className="titulli-aplikimi">
              Praktikante ne Inxhinieri softuerike
            </p>
            <p className="emri-kompanis-aplikimi">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "7px" }} />
              PR CONSULTING SH.P.K
            </p>
            <p className="shteti-aplikimi">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "7px" }}
              />
              Kosovë
            </p>
          </div>

          <div className="aplikimi-largo">
            <button className="aplikimi-fshije">Largo</button>
            <p className="aplikimi-data">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "7px" }}
              />
              Apr 06, 2023
            </p>
            <p className="aplikimi-lloji">Full Time</p>
          </div>
        </div>

        <div className="puna-aplikimi">
          <div className="aplikimi-titulli">
            <p className="titulli-aplikimi">
              Praktikante ne Inxhinieri softuerike
            </p>
            <p className="emri-kompanis-aplikimi">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "7px" }} />
              PR CONSULTING SH.P.K
            </p>
            <p className="shteti-aplikimi">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "7px" }}
              />
              Kosovë
            </p>
          </div>

          <div className="aplikimi-largo">
            <button className="aplikimi-fshije">Largo</button>
            <p className="aplikimi-data">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "7px" }}
              />
              Apr 06, 2023
            </p>
            <p className="aplikimi-lloji">Full Time</p>
          </div>
        </div>

        <div className="puna-aplikimi">
          <div className="aplikimi-titulli">
            <p className="titulli-aplikimi">
              Praktikante ne Inxhinieri softuerike
            </p>
            <p className="emri-kompanis-aplikimi">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "7px" }} />
              PR CONSULTING SH.P.K
            </p>
            <p className="shteti-aplikimi">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: "7px" }}
              />
              Kosovë
            </p>
          </div>

          <div className="aplikimi-largo">
            <button className="aplikimi-fshije">Largo</button>
            <p className="aplikimi-data">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "7px" }}
              />
              Apr 06, 2023
            </p>
            <p className="aplikimi-lloji">Full Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplikimet;
