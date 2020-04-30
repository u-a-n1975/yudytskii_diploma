import { ReactSVG } from "react-svg";
import React from "react";

import portfolioCard01 from "../../../../assets/images/Marvel/6.Gallery_Img-1.png";
import portfolioCard02 from "../../../../assets/images/Marvel/6.Gallery_Img-2.png";
import portfolioCard03 from "../../../../assets/images/Marvel/6.Gallery_Img-3.png";
import portfolioCard04 from "../../../../assets/images/Marvel/6.Gallery_Img-4.png";
import portfolioCard05 from "../../../../assets/images/Marvel/6.Gallery_Img-5.png";
import portfolioCard06 from "../../../../assets/images/Marvel/6.Gallery_Img-6.png";
import portfolioCard07 from "../../../../assets/images/Marvel/6.Gallery_Img-7.png";
import portfolioCard08 from "../../../../assets/images/Marvel/6.Gallery_Img-8.png";
import portfolioCard13 from "../../../../assets/images/Marvel/8.corporate1.jpg";
import portfolioCard14 from "../../../../assets/images/Marvel/8.corporate2.jpg";
import portfolioCard15 from "../../../../assets/images/Marvel/photography1.jpg";
import portfolioCard16 from "../../../../assets/images/Marvel/photography2.jpg";
import portfolioCard09 from "../../../../assets/images/Marvel/8.branding1.jpg";
import portfolioCard10 from "../../../../assets/images/Marvel/8.branding2.jpg";
import portfolioCard11 from "../../../../assets/images/Marvel/8.business1.jpg";
import portfolioCard12 from "../../../../assets/images/Marvel/8.business2.jpg";
import allButtonIcon from "../../../../assets/SVG/Marvel/All-Button-Icon.svg";

export const portfolioCards = [
  {
    image: portfolioCard01,
    hoverTitle: "another slideshow -",
    hoversubtitle: "joy",
    type: "corporate",
  },
  {
    image: portfolioCard02,
    hoverTitle: "fullwidth slideshow -",
    hoversubtitle: "work",
    type: "corporate",
  },
  {
    image: portfolioCard03,
    hoverTitle: "more slideshow -",
    hoversubtitle: "fashion",
    type: "branding",
  },
  {
    image: portfolioCard10,
    hoverTitle: "fullwidth slideshow -",
    hoversubtitle: "work",
    type: "branding",
  },
  {
    image: portfolioCard15,
    hoverTitle: "fullwidth slideshow -",
    hoversubtitle: "work",
    type: "photography",
  },
  {
    image: portfolioCard04,
    hoverTitle: "other slideshow -",
    hoversubtitle: "design",
    type: "branding",
  },
  {
    image: portfolioCard05,
    hoverTitle: "more slideshow -",
    hoversubtitle: "extreme",
    type: "photography",
  },
  {
    image: portfolioCard06,
    hoverTitle: "more slideshow -",
    hoversubtitle: "study",
    type: "business",
  },
  {
    image: portfolioCard07,
    hoverTitle: "fullwidth slideshow -",
    hoversubtitle: "relaxation",
    type: "photography",
  },
  {
    image: portfolioCard08,
    hoverTitle: "another slideshow -",
    hoversubtitle: "sales",
    type: "business",
  },
  {
    image: portfolioCard09,
    hoverTitle: "another slideshow -",
    hoversubtitle: "joy",
    type: "branding",
  },
  {
    image: portfolioCard11,
    hoverTitle: "more slideshow -",
    hoversubtitle: "fashion",
    type: "business",
  },
  {
    image: portfolioCard13,
    hoverTitle: "another slideshow -",
    hoversubtitle: "sales",
    type: "corporate",
  },
  {
    image: portfolioCard12,
    hoverTitle: "other slideshow -",
    hoversubtitle: "design",
    type: "business",
  },
  {
    image: portfolioCard14,
    hoverTitle: "another slideshow -",
    hoversubtitle: "joy",
    type: "corporate",
  },
  {
    image: portfolioCard16,
    hoverTitle: "more slideshow -",
    hoversubtitle: "fashion",
    type: "photography",
  },
];

export const buttonsData = [
  { name: <ReactSVG src={allButtonIcon} /> },
  { name: "business" },
  { name: "corporate" },
  { name: "branding" },
  { name: "photography" },
];
