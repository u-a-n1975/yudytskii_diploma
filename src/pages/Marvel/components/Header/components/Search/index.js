import { ReactSVG } from "react-svg";
import React from "react";

import "./styles.scss";

import viewIcon from "../../../../../../assets/SVG/View.svg";

export const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search..."
      ></input>
      <button className="search__button">
        <a className="search__icon" href="1">
          <ReactSVG src={viewIcon} />
        </a>
      </button>
    </div>
  );
};
