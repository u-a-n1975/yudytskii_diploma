import React from "react";

import "./styles.scss";

import { InfoBlock } from "../../components/InfoBlock";
import { resumeData } from "./data";
export const Resume = () => {
  return <InfoBlock className="resume" data={resumeData} />;
};
