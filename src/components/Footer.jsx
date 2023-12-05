import React from "react";
import "../styles/Footer.css";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_info">
        <img src="/images/Nail_House_logo_gold_2.svg" />
      </div>
      <div className="account_info">
        <div className="list">
          <ul>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#služby">Služby a ceny</a>
            </li>
            <li>
              <a href="#onas">O nás</a>
            </li>
            <li>
              <a href="#Kontakty">Kontakty</a>
            </li>
            <li>
              <a
                className="up_page"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                Nahuru
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="account_info">
        <h2>Opening Hours</h2>
        <p>Po - Ne</p>
        <p>9:00 - 20:00</p>
      </div>
      <div className="social_media_footer">
        <h2>Follow Us</h2>
        <div className="icons">
          <a href="">
            <div className="social_icon_fa">
              <FaFacebookF className="inside_icon" />
            </div>
          </a>
          <a href="">
            <div className="social_icon_in">
              <RiInstagramLine className="inside_icon" />
            </div>
          </a>
          <a href="">
            <div className="social_icon_wh">
              <FaWhatsapp className="inside_icon" />
            </div>
          </a>
          <a href="">
            <div className="social_icon_tel">
              <BiLogoTelegram className="inside_icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
