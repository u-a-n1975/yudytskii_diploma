import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import Slider from "react-slick";

import arrowNext from "../../../../../../assets/SVG/ArrowNext.svg";
import arrowPrev from "../../../../../../assets/SVG/ArrowPrev.svg";

import "./styles.scss";

class CardSlider extends Component {
  render() {
    const defaultSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      nextArrow: <ReactSVG onClick={this.onClick} src={arrowNext} />,
      prevArrow: <ReactSVG onClick={this.onClick} src={arrowPrev} />,
    };

    return (
      <Slider {...defaultSettings} className="blog__card--slider">
        {this.props.children}
      </Slider>
    );
  }
}

export { CardSlider };
