import { useState, useEffect, useRef } from "react";
import "../styles/Services.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Services = (props) => {
  const [isExpandedState, setIsExpandedState] = useState(false);
  const cardRef = useRef();

  const handleToggleExpand = () => {
    setIsExpandedState(!isExpandedState);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsExpandedState(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div id="služby">
      <div className="price_card" ref={cardRef}>
        <div className="service_tag" onClick={handleToggleExpand}>
          <h4 aria-expanded={isExpandedState} className="service_title">
            {props.title}
          </h4>
          <button className="service_icon" onClick={handleToggleExpand}>
            {isExpandedState ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        <div
          className="price_area"
          style={{ display: isExpandedState ? "block" : "none" }}>
          <ul className="price_list">
            <li>
              <div className="price_text">{props.text1}</div>
              <div className="price_price">
                {props.price1}
                <span>Kč</span>
              </div>
            </li>
            <li>
              <div className="price_text">{props.text2}</div>
              <div className="price_price">
                {props.price2}
                <span>Kč</span>
              </div>
            </li>
            {props.text3 && (
              <li>
                <div className="price_text">{props.text3}</div>
                <div className="price_price">
                  {props.price3}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {props.text4 && (
              <li>
                <div className="price_text">{props.text4}</div>
                <div className="price_price">
                  {props.price4}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {props.text5 && (
              <li>
                <div className="price_text">{props.text5}</div>
                <div className="price_price">
                  {props.price5}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {props.text5 && (
              <li>
                <div className="price_text">{props.text5}</div>
                <div className="price_price">
                  {props.price5}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {props.text6 && (
              <li>
                <div className="price_text">{props.text6}</div>
                <div className="price_price">
                  {props.price6}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {props.text7 && (
              <li>
                <div className="price_text">{props.text7}</div>
                <div className="price_price">
                  {props.price7}
                  <span>Kč</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
