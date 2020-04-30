import React from "react";

import { InfoBlock } from "../../../../components/InfoBlock";

import { workData } from "../../data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionWork = () => {
  return (
    <>
      <InfoBlock className="bicycle-work" data={workData} wrap={true} />
    </>
  );
};
