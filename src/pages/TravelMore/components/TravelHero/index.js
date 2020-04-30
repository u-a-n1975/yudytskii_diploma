import { ReactSVG } from "react-svg";
import React from "react";
import { Link } from "react-scroll";

import "./../../../../styles/index.scss";
import "./styles.scss";

import viewIcon from "../../../../assets/SVG/View.svg";
import scrollDown from "../../../../assets/SVG/scrollDown.svg";

export const TravelHero = () => {
  return (
    <div className="travel-hero">
      <h1 className="travel-hero__title">bhromaon</h1>
      <h2 className="travel-hero__subtitle">safe travel anywhere</h2>
      <form className="travel-hero__search">
        <input
          className="travel-hero__search--input"
          type="text"
          placeholder="search your travel destination"
        ></input>
        <button className="travel-hero__search--button">
          <a className="travel-hero__search--icon" href="#">
            search
            <ReactSVG src={viewIcon} />
          </a>
        </button>
      </form>
      <p className="travel-hero__scroll">scroll down</p>
      <Link
        className="travel-hero__scroll--icon"
        to="travel-choose"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        <ReactSVG src={scrollDown} />
      </Link>
    </div>
  );
};
