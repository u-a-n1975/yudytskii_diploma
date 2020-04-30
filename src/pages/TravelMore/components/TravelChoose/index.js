import React from "react";

import { Button } from "../../../../components/Button";
import { ContentContainer } from "../../../../components/ContentContainer";

import img1 from "../../../../assets/images/Travel/choose-Image1.png";
import img2 from "../../../../assets/images/Travel/choose-Image2.png";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const TravelChoose = () => {
  return (
    <div className="travel-choose">
      <ContentContainer className="travel-choose">
        <div className="travel-choose__info-block">
          <p className="travel-choose__info-block--title">why choose us</p>
          <p className="travel-choose__info-block--text">
            Tion and dislike men who are so beguiled and demoralized by desire
            by the charms of pleasure of the moment, so blinded by desire, that
            they cannot foresee
          </p>
          <p className="travel-choose__info-block--text">
            Ddislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that.
          </p>
          <Button
            className="travel"
            src="#"
            maxWidth="225"
            minHeight="60"
            color="white"
            borderColor="white"
          >
            <div className="travel__button--fon" />
            <div className="travel__button--fon" />
            <p>explore plasces</p>
          </Button>
        </div>
        <div className="travel-choose__image-block">
          <div className="travel-choose__image-block--item">
            <img src={img1} alt="hero" />
          </div>
          <div className="travel-choose__image-block--item">
            <img src={img2} alt="hero" />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
