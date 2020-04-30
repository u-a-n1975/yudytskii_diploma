import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { InfoBlock } from "../../../../components/InfoBlock";

import { data } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionService = () => {
  return (
    <div className="service">
      <ContentContainer className="service">
        <div className="service__wrap">
          <TitleBlock
            className="service"
            title="service"
            subtitle="clean idea and unique design"
            align="left"
          />
          <InfoBlock className="info-block" data={data} />
        </div>
      </ContentContainer>
    </div>
  );
};
