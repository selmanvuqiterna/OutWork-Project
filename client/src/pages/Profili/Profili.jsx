import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./profili.css";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Logodefault from "../../assets/whitelogo.jpg";
import LinkedInPhoto from "../../assets/logogjirafa.jpg";

const Profili = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});

  //Merr te dhenat e profilit tuaj
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

  const [userPershkrimi, setUserPershkrimi] = useState("");
  const [userImage, setUserImage] = useState(null);

  const handleImageChange = (e) => {
    setUserImage(e.target.files[0]);
  };

  //Perditeso profilin:
  const updateProfile = async (e) => {
    e.preventDefault();
    // setLoading(true);

    var formData = new FormData();
    formData.append("photo", userImage);

    formData.append("userPershkrimi", userPershkrimi);

    const res = await axios.put(
      `http://localhost:8800/updateProdile/${userId}`,
      formData
    );
    console.log(res);

    // Reload the page
    window.location.reload();

    // console.log(res);
    // setTimeout(() => {
    //   setLoading(false);
    //   navigate("/Jobs");
    // }, 2000);
  };

  return (
    <div className="profili">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="break-line"></div>
      <form action="" encType="multipart/form-data" onSubmit={updateProfile}>
        <div className="container-profili" key={userData.id}>
          <div className="container-informacionet">
            <div
              // className="img-user-change"
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "3px solid black",
                backgroundColor: "white",
                width: "40%",
              }}
            >
              <label htmlFor="profile-image">
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                {userData.user_photo ? (
                  // <img src={userData.user_photo} alt="Profile" />
                  <img
                    src={`http://localhost:8800/uploadsImageProfili/${userData.user_photo}`}
                    alt="UserImage"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      marginLeft: "30px",
                      transform: "translateY(-20px)",
                    }}
                  />
                ) : (
                  <img
                    src={LinkedInPhoto}
                    alt="Profile"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      marginLeft: "30px",
                      transform: "translateY(-20px)",
                    }}
                  />
                )}
              </label>
              <span
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginTop: "5px",
                  marginLeft: "18px",
                  fontFamily: "italic",
                }}
              >
                Per ta përditësuar imazhin e profilit , prek foton lartë.
              </span>
            </div>
            <div className="informacionet-profili">
              <p className="profili-info-bold">Porfili</p>
              <p className="profili-info">
                Ky informacion do të shfaqet publikisht, ndaj kini kujdes se
                çfarë ndani.
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
              onChange={(e) => setUserPershkrimi(e.target.value)}
            >
              {userData.user_pershkrimi}
            </textarea>
            <p className="profili-info">
              Përshkrim i shkurtër për profilin tuaj.
            </p>
            <button
              className="profili-ruaj"
              type="submit"
              onSubmit={updateProfile}
            >
              Ruaj
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profili;
