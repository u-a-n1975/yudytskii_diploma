import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { InfoBlock } from "../../../../components/InfoBlock";
import { Button } from "../../../../components/Button";

import { responsiveData } from "./responsiveData";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionResponsive = () => {
  return (
    <div className="responsive">
      <ContentContainer className="responsive">
        <TitleBlock
          className="responsive"
          maxWidth="560"
          title="responsive"
          subtitle="boost your website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etia fermentum vel libero eget interdum semper libero."
          align="left"
        />
        <InfoBlock
          className="responsive__info-block"
          data={responsiveData}
          symbols="--"
        />
        <Button
          className="responsive"
          src="#"
          maxWidth="127"
          minHeight="43"
          bgColor="white"
        >
          purchase
        </Button>
      </ContentContainer>
    </div>
  );
};
