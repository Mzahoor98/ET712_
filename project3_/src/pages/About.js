import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            At <span className="brand-name">ShoeCity</span>, we believe shoes are more than just footwear—they’re a statement of style, confidence, and individuality. Since our inception, we've curated a premium collection of <strong>Nike</strong>, <strong>Yeezy</strong>, and <strong>Air Jordan</strong> shoes to cater to sneaker enthusiasts and fashion lovers alike.
          </p>
          <p className="about-description">
            We are passionate about bringing you the latest and most iconic sneakers at unbeatable prices. Whether you’re a collector or looking for your next favorite pair, <span className="brand-name">ShoeCity</span> is your ultimate destination for style and comfort.
          </p>
          <p className="about-quote">
            <em>"Step into style, step into greatness."</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
