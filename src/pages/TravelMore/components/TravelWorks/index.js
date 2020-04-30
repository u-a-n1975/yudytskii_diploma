import React from "react";

import "./../../../../styles/index.scss";
import "./styles.scss";

import worksImage from "../../../../assets/images/Travel/HowItWorks.png";

export const TravelWorks = () => {
  return (
    <div className="travel-works">
      <img className="travel-works__image" src={worksImage} alt="hero" />
    </div>
  );
};
