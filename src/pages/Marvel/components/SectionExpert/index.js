import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { CardHover } from "./Components/CardHover";

import { cardsData, socialData } from "./data";
import { defaultSettings } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionExpert = () => {
  return (
    <div className="expert">
      <ContentContainer>
        <TitleBlock
          className="expert"
          title="expert"
          subtitle="meet our team"
        />
        <Slider {...defaultSettings} className={`expert__slider`}>
          {cardsData.map(({ cardImg, name, position }, index) => {
            return (
              <div className={`expert__card`} key={`1${index}`}>
                <div
                  className={`expert__card-image`}
                  key={`2${index}`}
                  style={{ overflow: "hidden" }}
                >
                  <>{cardImg}</>
                </div>
                <div className={`expert__card-title`} key={`3${index}`}>
                  <div className={`expert__card-name`} key={`5${index}`}>
                    {name}
                  </div>
                  <div className={`expert__card-position`} key={`6${index}`}>
                    {position}
                  </div>
                </div>
                <CardHover
                  cardsData={cardsData[index]}
                  socialData={socialData}
                />
              </div>
            );
          })}
        </Slider>
      </ContentContainer>
    </div>
  );
};
