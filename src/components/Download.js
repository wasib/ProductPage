import React from "react";
import "../styles/SectionLeft.css";
import '../styles/Download.css'
import Fade from "react-reveal/Fade";

const SectionLeft = props => {
  return (
    <section className="section section-left">
      <Fade left>
        <div className="text">
          <h2 className="text-heading">Available for your smartphone.</h2>
          <p className="text-info">
            All the power of Iconosquare in your pocket. Schedule, publish and
            monitor your accounts with ease.
          </p>
          <div className="download-icons">
            <img src={require("../images/app-store.svg")} />
            <img src={require("../images/google-play.svg")} />
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="image">
          <img src={require("../images/smartphones.png")} alt />
        </div>
      </Fade>
    </section>
  );
};

export default SectionLeft;
