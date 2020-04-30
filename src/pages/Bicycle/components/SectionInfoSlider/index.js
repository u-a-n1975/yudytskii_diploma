import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import { InfoBlock } from "../../../../components/InfoBlock";

import { sliderData, defaultSettings } from "../../data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionInfoSlider = () => {
  return (
    <div className="bicycle-info">
      <Slider {...defaultSettings} className="bicycle-info__slider">
        {sliderData.map(({ titleBlock }, index) => {
          return (
            <div key={index}>
              <InfoBlock
                className="bicycle-info__slide"
                data={titleBlock}
                symbols="--"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
