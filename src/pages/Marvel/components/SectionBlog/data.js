import { ReactSVG } from "react-svg";
import React from "react";

import VideoCard from "./Components/VideoCard";
import { CardSlider } from "./Components/CardSlider";

import arrowNext from "../../../../assets/SVG/ArrowNext.svg";
import arrowPrev from "../../../../assets/SVG/ArrowPrev.svg";

import imgPostCard1 from "../../../../assets/images/Marvel/11.Blog_Post-1.png";

import imgPostCard2 from "../../../../assets/images/Marvel/11.Blog_Post-2.png";
import portfolioCard01 from "../../../../assets/images/Marvel/6.Gallery_Img-1.png";
import portfolioCard02 from "../../../../assets/images/Marvel/6.Gallery_Img-2.png";
import portfolioCard03 from "../../../../assets/images/Marvel/6.Gallery_Img-3.png";
import portfolioCard04 from "../../../../assets/images/Marvel/6.Gallery_Img-4.png";
import portfolioCard05 from "../../../../assets/images/Marvel/6.Gallery_Img-5.png";
import portfolioCard06 from "../../../../assets/images/Marvel/6.Gallery_Img-6.png";
import portfolioCard07 from "../../../../assets/images/Marvel/6.Gallery_Img-7.png";
import portfolioCard08 from "../../../../assets/images/Marvel/6.Gallery_Img-8.png";

import imgPostCard4 from "../../../../assets/images/Marvel/11.Blog_Post-4.png";
import portfolioCard09 from "../../../../assets/images/Marvel/8.branding1.jpg";
import portfolioCard10 from "../../../../assets/images/Marvel/8.branding2.jpg";
import portfolioCard11 from "../../../../assets/images/Marvel/8.business1.jpg";
import portfolioCard12 from "../../../../assets/images/Marvel/8.business2.jpg";
import portfolioCard13 from "../../../../assets/images/Marvel/8.corporate1.jpg";
import portfolioCard14 from "../../../../assets/images/Marvel/8.corporate2.jpg";
import portfolioCard15 from "../../../../assets/images/Marvel/photography1.jpg";
import portfolioCard16 from "../../../../assets/images/Marvel/photography2.jpg";

const imegesPost2 = [
  imgPostCard2,
  portfolioCard01,
  portfolioCard02,
  portfolioCard03,
  portfolioCard04,
  portfolioCard05,
  portfolioCard06,
  portfolioCard07,
  portfolioCard08,
];

const imegesPost4 = [
  imgPostCard4,
  portfolioCard09,
  portfolioCard10,
  portfolioCard11,
  portfolioCard12,
  portfolioCard13,
  portfolioCard14,
  portfolioCard15,
  portfolioCard16,
];

export const cardsPostData = [
  {
    content: <img width="100%" height="100%" alt="hero" src={imgPostCard1} />,
    date: "27 march 2020",
    title: "single image post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <CardSlider>
        {imegesPost2.map((image, index) => {
          return <img height="193px" src={image} key={index} alt="hero" />;
        })}
      </CardSlider>
    ),
    date: "27 march 2020",
    title: "gallery image post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <VideoCard
        url={
          "https://www.youtube.com/embed/nwLMqAxNxKA?list=PLD-piGJ3Dtl0WEK67FD1bUGryqqaY_eU-"
        }
        height="193px"
        ratio="ratio_264x193"
      />
    ),
    date: "26 march 2020",
    title: "letest video post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: <img width="100%" height="100%" alt="hero" src={imgPostCard4} />,
    date: "25 march 2017",
    title: "second single image post",
    position: "photographer",
    inLogo: "in logo",
    namberComment: "7",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <img width="100%" height="100%" alt="hero" src={portfolioCard10} />
    ),
    date: "24 march 2020",
    title: "single image post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <CardSlider>
        {imegesPost4.map((image, index) => {
          return <img height="193px" src={image} key={index} alt="hero" />;
        })}
      </CardSlider>
    ),
    date: "23 march 2020",
    title: "gallery image post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <VideoCard
        url={"https://www.youtube.com/embed/L3wKzyIN1yk"}
        height="193px"
        ratio="ratio_264x193"
      />
    ),
    date: "20 march 2020",
    title: "letest video post",
    position: "by admin",
    inLogo: "in logo",
    namberComment: "1",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    content: (
      <img width="100%" height="100%" alt="hero" src={portfolioCard12} />
    ),
    date: "18 march 2020",
    title: "second single image post",
    position: "photographer",
    inLogo: "in logo",
    namberComment: "7",
    textPreviev:
      "Lorem Ipsum is simply dummy text of the rinting and typesette industry lorem Ipsum has ...",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
];

export const defaultSettings = {
  dotsClass: `slick-dots blog__slick-dots`,
  infinite: true,
  slidesToShow: 4,
  initialSlide: 2,
  slidesToScroll: 1,
  edgeFriction: 0.15,
  centerPadding: "0",
  nextArrow: <ReactSVG src={arrowNext} />,
  prevArrow: <ReactSVG src={arrowPrev} />,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
