import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import { useState, useRef } from "react";
import { useEffect } from "react";
import emailjs from "emailjs-com";


const Contact = () => {

   const form = useRef();


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

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e37nh8c', 'template_2efx036', form.current, 'BLpae1ITEK70HI2EP')
      .then((result) => {
          console.log(result.text);
          alert("Your form was sent");
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="body-contact">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="contact-form">
            <h1 id="title-contact">Contact Us </h1>
          <form action="" id="form-contact" ref={form} onSubmit={sendEmail}>
            <input type="text"  name="user_fullname"  className="contact-input" placeholder="Fullname"/>
            <input type="email" name="user_email"  className="contact-input" placeholder="Email" />
            <textarea name="message" id="message"  cols="50" rows="10" placeholder="Description"></textarea>
            <button type="submit" id="btn-contact">Submit</button>
          </form>
        </div>

        <div className="location-div">
          <div className="map-location">
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.355942861958!2d21.146689127754584!3d42.65381200567829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef3f69baacb%3A0xf864a269cc75e908!2sDukagjini%20Residence!5e0!3m2!1sen!2s!4v1686672433262!5m2!1sen!2s" id="map" width="500" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
            <div className="location-text">
                <p>You can find us at Dukagjini Centre Prishtine, Kosova - Rr/St: Xhevdet Doda</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
