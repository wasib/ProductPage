import React from "react";
import HomeHeader from "./HomeHeader";
import Section1 from "./Section1";
import "../styles/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HomeHeader />

        <div className="template-logo-iconosquare">
          <Section1 />
        </div>
      </div>
    );
  }
}
