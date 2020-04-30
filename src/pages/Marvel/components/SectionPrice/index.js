import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { InfoBlock } from "../../../../components/InfoBlock";

import { priceData } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionPrice = () => {
  return (
    <div className="price">
      <ContentContainer>
        <TitleBlock
          className="price"
          title="pricing"
          subtitle="choose your plan"
          titleColor="primaryDarkYellow"
        />
        <InfoBlock className="price-cards" data={priceData} />
      </ContentContainer>
    </div>
  );
};
