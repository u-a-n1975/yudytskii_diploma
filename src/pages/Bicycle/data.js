import { ReactSVG } from "react-svg";
import React from "react";

import vintageBike from "../../assets/SVG/Bicycle/vintage-bike.svg";
import vintageOliva from "../../assets/SVG/Bicycle/vintage-oliva.svg";
import laBoriosa from "../../assets/SVG/Bicycle/la-boriosa.svg";
import retroBike from "../../assets/SVG/Bicycle/retro-bike.svg";
import twitter from "../../assets/SVG/Bicycle/social/tvitterIcon.svg";
import fasebook from "../../assets/SVG/Bicycle/social/fasebookIcon.svg";
import pinterest from "../../assets/SVG/Bicycle/social/pinterestIcon.svg";
import imageWork1 from "../../assets/images/Bicycle/work/01.jpg";
import imageWork2 from "../../assets/images/Bicycle/work/02.jpg";
import imageWork3 from "../../assets/images/Bicycle/work/03.jpg";
import imageWork4 from "../../assets/images/Bicycle/work/04.jpg";
import imageWork5 from "../../assets/images/Bicycle/work/05.jpg";
import imageWork6 from "../../assets/images/Bicycle/work/06.jpg";
import imageWork7 from "../../assets/images/Bicycle/work/07.jpg";
import howerWork1 from "../../assets/SVG/Bicycle/bicycle-conpany.svg";
import howerWork4 from "../../assets/SVG/Bicycle/Wintage.svg";
import howerWork5 from "../../assets/SVG/Bicycle/Bicycles.svg";
import imageShop1 from "../../assets/images/Bicycle/shop/01.jpg";
import imageShop2 from "../../assets/images/Bicycle/shop/02.jpg";
import imageShop3 from "../../assets/images/Bicycle/shop/03.jpg";
import imageShop4 from "../../assets/images/Bicycle/shop/04.jpg";
import imageShop5 from "../../assets/images/Bicycle/shop/05.jpg";
import imageShop6 from "../../assets/images/Bicycle/shop/06.jpg";
import imageShop7 from "../../assets/images/Bicycle/shop/07.jpg";
import imageShop8 from "../../assets/images/Bicycle/shop/08.jpg";

export const aboutData = [
  {
    icon: <ReactSVG src={vintageBike} />,
    title: "a new generation of vintage bike",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export const workData = [
  {
    image: <img alt="hero" src={imageWork1} />,
    hover: <ReactSVG src={howerWork1} />,
  },
  {
    titleBlock: [
      {
        icon: <ReactSVG src={vintageOliva} />,
        title: "vintage oliva",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      },
    ],
    image: <img alt="hero" src={imageWork2} />,
  },
  {
    titleBlock: [
      {
        icon: <ReactSVG src={laBoriosa} />,
        title: "la boriosa",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      },
    ],
    image: <img alt="hero" src={imageWork3} />,
  },
  {
    image: <img alt="hero" src={imageWork4} />,
    hover: <ReactSVG src={howerWork4} />,
  },
  {
    image: <img alt="hero" src={imageWork5} />,
    hover: <ReactSVG src={howerWork5} />,
  },
  {
    titleBlock: [
      {
        icon: <ReactSVG src={retroBike} />,
        title: "retro bike - m. hulot",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      },
    ],
    image: <img alt="hero" src={imageWork6} />,
  },
  {
    image: <img alt="hero" src={imageWork7} />,
  },
];

export const sliderData = [
  {
    titleBlock: [
      {
        icon: <ReactSVG src={twitter} />,
        title: [
          {
            title: "AOD New York  @aod  ",
            subtitle: "/ 35 min",
          },
        ],
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.",
      },
    ],
  },
  {
    titleBlock: [
      {
        icon: <ReactSVG src={fasebook} />,
        title: [
          {
            title: "AOD New York  @aod",
            subtitle: "/ 35 min",
          },
        ],
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.",
      },
    ],
  },
  {
    titleBlock: [
      {
        icon: <ReactSVG src={pinterest} />,
        title: [
          {
            title: "AOD New York  @aod  ",
            subtitle: "/ 35 min",
          },
        ],
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  },
];

export const defaultSettings = {
  dots: true,
  dotsClass: "slick-dots bicycle-info__slick-dots",
  arrows: false,
  infinite: true,
  speed: 500,
  initialSlide: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  centerMode: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        dots: false,
      },
    },
  ],
};

export const shopData = [
  {
    saddles: [
      {
        image1: <img alt="hero" src={imageShop1} />,
        image2: <img alt="hero" src={imageShop2} />,
        image3: <img alt="hero" src={imageShop3} />,
      },
    ],
  },
  {
    bikes: [
      {
        image1: <img alt="hero" src={imageShop4} />,
        image2: <img alt="hero" src={imageShop5} />,
      },
    ],
  },
  {
    shop: [
      {
        image1: <img alt="hero" src={imageShop6} />,
        image2: <img alt="hero" src={imageShop7} />,
        image3: <img alt="hero" src={imageShop8} />,
      },
    ],
  },
];

export const contactData = [
  {
    address: [
      {
        city: "AOD New York",
        street: "2250 Lexington Avenue ",
        email: "New York, NY 10035  - info@domain.com",
      },
    ],
  },
  {
    social: [
      {
        twitter: (
          <a href="https://www.tvitter.com/">
            <ReactSVG src={twitter} />
          </a>
        ),
      },
      {
        facebook: (
          <a href="https://facebook.com/">
            <ReactSVG src={fasebook} />
          </a>
        ),
      },
      {
        pinterest: (
          <a href="https://www.pinterest.com/">
            <ReactSVG src={pinterest} />
          </a>
        ),
      },
    ],
  },
];
