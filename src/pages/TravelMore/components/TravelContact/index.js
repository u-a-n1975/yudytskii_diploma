import React from "react";

import "./../../../../styles/index.scss";
import "./styles.scss";

import { InfoBlock } from "../../../../components/InfoBlock";

import { socialData } from "./data";

export const TravelContact = () => {
  return (
    <div className="travel-contact">
      <div className="travel-contact__title">bhromaon</div>
      <div className="travel-contact__subtitle">safe travel anywhere</div>
      <InfoBlock
        className="travel-contact__social-block"
        data={socialData}
        symbols="--"
      />
    </div>
  );
};
