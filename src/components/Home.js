import React from "react";
import HomeHeader from "./HomeHeader";
import Section1 from "./Section1";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import { SectionData } from "../data/SectionData";
import Pricing from "./Pricing";
import Download from "./Download";
import "../styles/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HomeHeader />

        <div className="template-logo-iconosquare">
          <Section1 />
          <SectionLeft data={SectionData[0]} />
          <SectionRight data={SectionData[1]} />
          <SectionLeft data={SectionData[2]} />
          <SectionRight data={SectionData[3]} />
          <SectionLeft data={SectionData[4]} />
          <Pricing />
          <Download />
        </div>
      </div>
    );
  }
}
