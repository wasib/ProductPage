import React from "react";
import "../styles/SectionLeft.css";
import Fade from "react-reveal/Fade";

const SectionLeft = props => {
  return (
    <section className="section section-left">
      <Fade left>
        <div className="text">
          <h2 className="text-heading">{props.data.heading}</h2>
          <p className="text-info">{props.data.info}</p>
        </div>
      </Fade>
      <Fade right>
        <div className="image">
          <img src={require("../images/" + props.data.image)} alt />
        </div>
      </Fade>
    </section>
  );
};

export default SectionLeft;
