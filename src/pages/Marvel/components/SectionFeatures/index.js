import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { InfoBlock } from "../../../../components/InfoBlock";

import { featuresCards } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionFeatures = () => {
  return (
    <div className="features">
      <ContentContainer>
        <TitleBlock
          className="features"
          title="features"
          subtitle="we`re creative crafting with love"
        />
        <InfoBlock
          className="features__info-block"
          data={featuresCards}
          symbols="--"
        />
      </ContentContainer>
    </div>
  );
};
