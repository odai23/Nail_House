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
            <a href="https://www.instagram.com/nailhousecz/" target="_blank">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/nailhousecz" target="_blank">
              <RiFacebookBoxFill />
            </a>
          </li>
          <li>
            <a href="tel:+420 720 985 636" target="_blank">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="http://t.me/nailhousecz" target="_blank">
              <BiLogoTelegram />
            </a>
          </li>
        </ul>
      </div>
      <div className="landing_info_wrapper">
        <img className="nail_bottel" src="/images/bg_10.png" />
        <div className="landing_info">
          <h1>
            OBJEDNEJTE SE NA MANIKÚRU V PRAZE{" "}
            <span>ONLINE 3 POBOČKY: SMÍCHOV, VINOHRADY A PANKRÁC</span>
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
