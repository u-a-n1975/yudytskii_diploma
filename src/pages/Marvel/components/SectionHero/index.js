import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { Button } from "../../../../components/Button";

import { heroData } from "./heroData";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionHero = () => {
  const defaultSettings = {
    dots: true,
    dotsClass: "slick-dots hero__slick-dots",
    arrows: false,
    infinite: true,
    speed: 500,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero">
      <ContentContainer className="hero">
        <Slider {...defaultSettings} className="hero__slider">
          {heroData.map((props, index) => {
            return (
              <div className="hero__slide" key={`21hero${index}`} id={props.id}>
                <TitleBlock
                  className="hero-slide"
                  maxWidth="748"
                  title={props.firstTitle}
                  secondTitle={props.secondTitle}
                  description={props.description}
                  align="left"
                  titleColor="primaryMiddleGrey"
                />
                <Button
                  className="hero"
                  src={props.buttonLink}
                  maxWidth="180"
                  minHeight="55"
                  bgColor="white"
                  color="primaryDarkGrey"
                  borderColor="primaryDarkGrey"
                >
                  {props.buttonTitle}
                </Button>
              </div>
            );
          })}
        </Slider>
      </ContentContainer>
    </div>
  );
};
