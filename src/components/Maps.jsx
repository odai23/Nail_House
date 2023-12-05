import React from "react";
import "../styles/Maps.css";
import { FaPhoneVolume } from "react-icons/fa";

const Maps = () => {
  return (
    <div id="Kontakty" className="location_wrapper">
      <h1 className="title_kontakty">Kontakty</h1>
      <div className="contact_container">
        <div className="location">
          <h3>Smíchov</h3>
          <h4>
            <FaPhoneVolume />: 720 985 636
          </h4>
          <p>Address: Na Bělidle 625/28</p>
          <div className="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7700281981115!2d14.403926176187873!3d50.07186837152236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95cf5c97595b%3A0x5525c7f2e3b79ab4!2sNail%20House%20And%C4%9Bl!5e0!3m2!1sen!2scz!4v1701641527382!5m2!1sen!2scz"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="location">
          <h3>Vinohrady</h3>
          <h4>
            <FaPhoneVolume />: 608 014 646
          </h4>
          <p>Address: Blanická 591/1</p>
          <div className="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.619260967332!2d14.436322876188088!3d50.07469167152294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b952c7109944d%3A0x9fd58e257e9ca0d7!2sNail%20House%20Vinohrady!5e0!3m2!1sen!2scz!4v1701641405489!5m2!1sen!2scz"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="location">
          <h3>Pankrác</h3>
          <h4>
            <FaPhoneVolume />: 724 328 830
          </h4>
          <p>Address: Na Pankráci 1148/57</p>
          <div className="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.461844706809!2d14.42892047618702!3d50.05891177152008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9502e6e686b7%3A0x3766145433179e47!2sNailHouse%20Pankr%C3%A1c!5e0!3m2!1sen!2scz!4v1701641572656!5m2!1sen!2scz"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
