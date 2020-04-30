import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { InfoBlock } from "../../../../components/InfoBlock";
import { Button } from "../../../../components/Button";

import { impressiveNumbers, data } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionAbout = () => {
  return (
    <div className="about">
      <ContentContainer>
        <TitleBlock
          className="about"
          maxWidth="940"
          title="about"
          subtitle="this is the one page polo"
          description="Molestie ultricies quam. Donec at sem. Praesent pretium. Maorbi quis nulla vehicula felsd laoreet.     Sed ullamcorper arcu ente. Sed tempus tempor cild  Nulla vierra ultrices magnal Nam rutrum congue diam.do eiusmod tempor incididunt ut dolore magna aliqua. Utdi eni ad minim veniam, quis nostrud exercitationconsequat."
        />
        <div className="about__button-wrap">
          <Button
            className="about"
            src="#"
            maxWidth="226"
            minHeight="62"
            borderColor="black"
            bgColor="black"
            color="primaryYellow"
          >
            More info
          </Button>
          <Button
            className="about"
            src="#"
            maxWidth="226"
            minHeight="62"
            borderColor="black"
            bgColor="black"
            color="primaryYellow"
          >
            Join Expreance
          </Button>
        </div>
        <InfoBlock className="about__info-block" data={data} symbols="--" />
        <p className="about__impressive-numbers">
          here`re some impressive numbers about us
        </p>
        <InfoBlock className="about-numbers" data={impressiveNumbers} />
      </ContentContainer>
    </div>
  );
};
