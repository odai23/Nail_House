import React from "react";
import "../styles/Prices.css";

function Prices({
  title,
  index,
  text1,
  price1,
  text2,
  price2,
  text3,
  price3,
  text4,
  price4,
  text5,
  price5,
  text6,
  price6,
  text7,
  price7,
  isExpandedState,
  setIsExpandedState,
}) {
  const handleAccordionClick = () => {
    setIsExpandedState(index);
  };
  return (
    <>
      <div className="accordion-panel">
        <h2 id={`panel${index}-heading`} onClick={handleAccordionClick}>
          <button
            className="accordion-trigger"
            aria-controls={`panel${index}-heading`}
            aria-expanded={isExpandedState}>
            <span className="accordion-title" id={`panel${index}-title`}>
              {title}
            </span>
          </button>
        </h2>
        <div
          className="accordion-content"
          id={`panel${index}-content`}
          aria-labelledby={`panel${index}-heading`}
          aria-hidden={isExpandedState}>
          <ul className="price_list">
            <li>
              <div className="price_text">{text1}</div>
              <div className="price_price">
                {price1}
                <span>Kč</span>
              </div>
            </li>
            <li>
              <div className="price_text">{text2}</div>
              <div className="price_price">
                {price2}
                <span>Kč</span>
              </div>
            </li>
            {text3 && (
              <li>
                <div className="price_text">{text3}</div>
                <div className="price_price">
                  {price3}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {text4 && (
              <li>
                <div className="price_text">{text4}</div>
                <div className="price_price">
                  {price4}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {text5 && (
              <li>
                <div className="price_text">{text5}</div>
                <div className="price_price">
                  {price5}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {text5 && (
              <li>
                <div className="price_text">{text5}</div>
                <div className="price_price">
                  {price5}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {text6 && (
              <li>
                <div className="price_text">{text6}</div>
                <div className="price_price">
                  {price6}
                  <span>Kč</span>
                </div>
              </li>
            )}
            {text7 && (
              <li>
                <div className="price_text">{text7}</div>
                <div className="price_price">
                  {price7}
                  <span>Kč</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Prices;
