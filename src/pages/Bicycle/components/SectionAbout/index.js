import React from "react";

import { InfoBlock } from "../../../../components/InfoBlock";

import { aboutData } from "../../data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionAbout = () => {
  return (
    <div className="bicycle-about">
      <InfoBlock
        className="bicycle-about__title-block"
        maxWidth="1080"
        data={aboutData}
        symbols="--"
      />
    </div>
  );
};
