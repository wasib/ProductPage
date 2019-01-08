import React from "react";
import "../styles/SectionRight.css";
import Fade from "react-reveal/Fade";

const SectionRight = props => {
  return (
    <section className="section section-right">
      <Fade left>
        <div className="image">
          <img src={require("../images/" + props.data.image)} alt />
        </div>
      </Fade>
      <Fade right>
        <div className="text">
          <h2 className="text-heading">{props.data.heading}</h2>
          <p className="text-info">{props.data.info}</p>
        </div>
      </Fade>
    </section>
  );
};

export default SectionRight;
