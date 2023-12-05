import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="left_img">
        <img src="/images/img_info3.jpg" alt="nails" />
      </div>
      <div className="about_info">
        <div className="about_text">
          <h3>Wlecome to</h3>
          <h1>Nail House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            provident modi co consectetur adipisicing elit. Nemo provident modi
            co
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            provident modi co consectetur adipisicing elit. Nemo provident modi
            co
          </p>
        </div>
        <img  className="right_img" src="/images/img_info2.jpg" alt="nails" />
      </div>
    </div>
  );
};

export default About;
