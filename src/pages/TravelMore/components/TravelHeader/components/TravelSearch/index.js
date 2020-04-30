import { ReactSVG } from "react-svg";
import React from "react";

import "./styles.scss";

import viewIcon from "../../../../../../assets/SVG/View.svg";

export const TravelSearch = () => {
  return (
    <div className="travel-search">
      <input
        className="travel-search__input"
        type="text"
        placeholder="search..."
      ></input>
      <button className="travel-search__button">
        <a className="travel-search__icon" href="1">
          <ReactSVG src={viewIcon} />
        </a>
      </button>
    </div>
  );
};
