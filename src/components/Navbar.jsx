import { useState } from "react";
import "../styles/Navbar.css";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const handleLogoHover = () => {
    setLogoHovered(!logoHovered);
  };

  return (
    <div>
      <nav id="home" className="navbar_container">
        <div className="logo">
          <a
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            href="#"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoHover}>
            <img
              src={
                logoHovered
                  ? "/images/Nail_House_logo_gold_1.svg"
                  : "/images/Nail_House_logo_blue.svg"
              }
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar_toggle" id="mobile_menu" onClick={handleClick}>
          {click ? (
            <FaTimes className="FaBars" />
          ) : (
            <CiMenuFries className="FaBars" />
          )}
        </div>

        <ul
          onClick={closeMenu}
          className={click ? "nav_list active" : "nav_list"}>
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
