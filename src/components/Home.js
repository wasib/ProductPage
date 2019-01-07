import React from "react";
import "../styles/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <section className="home-header">
          <span className="section-header-logo-img">
            <img src={require("../images/header background.svg")} alt />
          </span>
          <div className="home-header-text">aaa</div>
          <img
            src={require("../images/home_header.png")}
            alt
            className="home-header-img"
          />
        </section>

        <div className='template-logo-iconosquare'>
            
        </div>
      </div>
    );
  }
}
