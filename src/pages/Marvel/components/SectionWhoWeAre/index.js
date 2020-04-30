import { ReactSVG } from "react-svg";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { Button } from "../../../../components/Button";

import logo from "./../../../../assets/icons/0.Logo-Marvel.svg";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionWhoWeAre = () => {
  return (
    <div className="who-we-are">
      <ContentContainer>
        <ReactSVG className="who-we-are__logo" src={logo} />
        <TitleBlock
          className="who-we-are"
          maxWidth="753"
          title="who we are"
          description="Lorem ipsum dolor sit amet, consectetuer ux adipiscing elit, sed diam nonummy nibh and euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam."
          titleColor="white"
          textColor="white"
        />
        <div className="who-we-are__button-wrap">
          <Button
            className="who-we-are"
            src="#"
            maxWidth="226"
            minHeight="62"
            color="white"
            borderColor="white"
          >
            More info
          </Button>
          <Button
            className="who-we-are"
            src="#"
            maxWidth="226"
            minHeight="62"
            color="white"
            borderColor="white"
          >
            Join Expreance
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};
