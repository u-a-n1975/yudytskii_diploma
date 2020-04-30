import { ReactSVG } from "react-svg";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { SocialBlock } from "../../../../components/SocialBlock";

import { socialData, phone, location } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionFooter = () => {
  return (
    <div className="footer">
      <div className="footer__head">
        <ContentContainer>
          <div className="footer__info-block">
            <ReactSVG className="footer__info-block--icon" src={phone.icon} />
            <div className="footer__info-block--text">{phone.text}</div>
          </div>
          <SocialBlock className="footer" socialData={socialData} />
          <div className="footer__info-block">
            <ReactSVG
              className="footer__info-block--icon"
              src={location.icon}
            />
            <div className="footer__info-block--text">{location.text}</div>
          </div>
        </ContentContainer>
      </div>
      <div className="footer__bottom">
        all rights reserved © themexpert 2020
      </div>
    </div>
  );
};
