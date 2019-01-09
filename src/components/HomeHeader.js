import React from "react";
import "../styles/HomeHeader.css";
import Fade from "react-reveal/Fade";

const HomeHeader = props => {
  return (
    <section className="home-header">
      <span className="section-header-logo-img">
        <img src={require("../images/header background.svg")} alt />
      </span>

      <Fade bottom>
        <div className="home-header-text">
          <h1>Uncover the secrets in your social media analytics</h1>
          <p>
            Connect and engage with your audience using industry-leading
            analytics and tools
          </p>
          <a className="home-header-button">Start 14 day Free Trial</a>
          <span> No credit card required </span>
        </div>

        <img
          src={require("../images/home_header.png")}
          alt
          className="home-header-img"
        />
      </Fade>
    </section>
  );
};

export default HomeHeader;
