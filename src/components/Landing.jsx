import React from "react";
import "../styles/Landing.css";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="nail_bg">
      <div className="social_media">
        <ul>
          <li>
            <a href="#">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <RiFacebookBoxFill />
            </a>
          </li>
          <li>
            <a href="#">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoTelegram />
            </a>
          </li>
        </ul>
      </div>
      <div className="landing_info_wrapper">
        <div className="landing_info">
          <h1>
            OBJEDNEJTE SE NA MANIKÚRU V PRAZE ONLINE 3 POBOČKY: SMÍCHOV,
            VINOHRADY A PANKRÁC
          </h1>
          <div className="same_button">
            <button herf="https://w151091.alteg.io/widgetJS">
              Online Booking
            </button>
          </div>
        </div>
        <div className="locations_wrapper">
          <ul className="locations">
            <li className="location">
              <div className="place">Smíchov</div>
              <div className="number">+420 720 985 636</div>
            </li>
            <li className="location">
              <div className="place">Vinohrady</div>
              <div className="number_one">+420 608 014 646</div>
            </li>
            <li className="location">
              <div className="place">Pankrác</div>
              <div className="number">+420 724 328 830</div>
            </li>
            <li className="location">
              <div className="place">Po - Ne</div>
              <div className="number">9:00-20:00</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
