import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./about.css";
import ad from "../../assets/outwork-ad.mp4";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const videoSource = ad;
  const showVideo = !!videoSource;

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
    <div className="body-about">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="content-text">
          <h3 className="header-primary">About us</h3>
          <div className="header-first">
            <span className="header-first-span">
              We build connections between employers
            </span>
            <span className="header-first-span">
              and employees and we are the best agency
            </span>
            <span className="header-first-span">
              for this job because it's our expertise
            </span>
          </div>
          <div className="header-second">
            <span className="header-second-span">
              We create connections between employers and employees by
            </span>
            <span className="header-second-span">
              using your information for this website we totally agree to keep
            </span>
            <span className="header-second-span">
              your data private and safe.
            </span>
          </div>
          <div className="header-second">
            <span className="header-second-span">
              From UpWork to LinkedIn, we team up with marketing
            </span>
            <span className="header-second-span">
              departments of large companies and startups to deliver
            </span>
            <span className="header-second-span">award-winning employees</span>
          </div>
          <Link to="/ContactUs">
            <button className="btn-about">Contact Us</button>
          </Link>
        </div>

        <div className="content-video">
          {showVideo ? (
            <video src={videoSource} controls className="video">
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Video cannot be displayed at the moment</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
