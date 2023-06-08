import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./profili.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Profili = () => {
  const { userId } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/merrUserData/${userId}`
        );

        setUserData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="profili">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="break-line"></div>

      <div className="container-profili" key={userData.id}>
        <div className="container-informacionet">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="profili-img"
            />
            <span
              style={{
                fontSize: "14px",
                color: "#666",
                marginTop: "5px",
                marginLeft: "18px",
                fontFamily: "italic",
              }}
            >
              Madhësia maksimale e imazhit: 5 MB
            </span>
          </div>
          <div className="informacionet-profili">
            <p className="profili-info-bold">Porfili</p>
            <p className="profili-info">
              Ky informacion do të shfaqet publikisht, ndaj kini kujdes se çfarë
              ndani.
            </p>
            <p className="profili-info-bold">Emri dhe Mbiemri</p>
            <p className="profili-info">{userData.fullname}</p>
            <p className="profili-info-bold">Numri personal</p>
            <p className="profili-info">{userData.user_numri_personal}</p>
          </div>
        </div>

        <div className="container-profili-about-me">
          <p className="profili-info">Në lidhje me</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="profili-text-area"
          ></textarea>
          <p className="profili-info">
            Përshkrim i shkurtër për profilin tuaj.
          </p>
          <button className="profili-ruaj">Ruaj</button>
        </div>
      </div>
    </div>
  );
};

export default Profili;
