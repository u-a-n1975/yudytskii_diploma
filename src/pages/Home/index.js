import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="resume-project">
        <Link to="/resume"></Link>
      </div>

      <div className="marvel-project">
        <Link to="/marvel"></Link>
      </div>

      <div className="bicycle-project">
        <Link to="/Bicycle"></Link>
      </div>

      <div className="travel-project">
        <Link to="/TravelMore"></Link>
      </div>
    </div>
  );
};
