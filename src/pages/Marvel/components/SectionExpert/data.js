import { ReactSVG } from "react-svg";
import React from "react";

import imgCard1 from "../../../../assets/images/Marvel/9.Team_Img-1.png";
import imgCard2 from "../../../../assets/images/Marvel/9.Team_Img-2.png";
import imgCard3 from "../../../../assets/images/Marvel/9.Team_Img-3.png";
import imgCard4 from "../../../../assets/images/Marvel/6.Gallery_Img-2.png";
import imgCard5 from "../../../../assets/images/Marvel/6.Gallery_Img-6.png";
import imgCard6 from "../../../../assets/images/Marvel/6.Gallery_Img-8.png";

import pinterestIcon from "../../../../assets/SVG/social/pinterestIcon.svg";
import linkedinIcon from "../../../../assets/SVG/social/linkedinIcon.svg";
import fasebookIcon from "../../../../assets/SVG/social/fasebookIcon.svg";
import tvitterIcon from "../../../../assets/SVG/social/tvitterIcon.svg";
import skypeIcon from "../../../../assets/SVG/social/skypeIcon.svg";
import appleIcon from "../../../../assets/SVG/social/appleIcon.svg";

import arrowNext from "../../../../assets/SVG/ArrowNext.svg";
import arrowPrev from "../../../../assets/SVG/ArrowPrev.svg";

export const cardsData = [
  {
    cardImg: <img height="100%" alt="hero" src={imgCard1} />,
    name: "robert willsom",
    position: "web developer",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard2} />,
    name: "michael clarke duncan",
    position: "web designer",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard3} />,
    name: "penélope cruz sánchez",
    position: "web promotion",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard4} />,
    name: "robert willsom",
    position: "web developer",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard5} />,
    name: "michael clarke duncan",
    position: "web designer",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
  {
    cardImg: <img height="100%" alt="hero" src={imgCard6} />,
    name: "penélope cruz sánchez",
    position: "web promotion",
    text:
      "Lorem ipsum dolor sit amet, nemore latine graecis id est, omnium latine eu per. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea. Has ne illud appetere fabellas, ne quaeque nominati mea.",
  },
];

export const socialData = [
  {
    link: "https://twitter.com/?lang=ru",
    icon: tvitterIcon,
  },
  {
    link: "https://www.linkedin.com/",
    icon: linkedinIcon,
  },
  {
    link: "https://facebook.com/",
    icon: fasebookIcon,
  },
  {
    link: "https://www.skype.com/",
    icon: skypeIcon,
  },
  {
    link: "https://www.pinterest.com/",
    icon: pinterestIcon,
  },
  {
    link: "https://www.apple.com/",
    icon: appleIcon,
  },
];

export const defaultSettings = {
  dots: true,
  dotsClass: `slick-dots expert__slick-dots`,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  initialSlide: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  nextArrow: <ReactSVG src={arrowNext} />,
  prevArrow: <ReactSVG src={arrowPrev} />,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
