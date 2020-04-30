import { ReactSVG } from "react-svg";
import React from "react";

import responsiveDesign from "../../../../assets/SVG/Marvel/2.About-Responsive_Design.svg";
import powerfulSecurity from "../../../../assets/SVG/Marvel/2.About-Powerful_Security.svg";
import awesomeFeatures from "../../../../assets/SVG/Marvel/2.About-Awesome_Features.svg";

export const data = [
  {
    row: [
      {
        icon: <ReactSVG src={responsiveDesign} />,
        title: "Responsive Design",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
  {
    row: [
      {
        icon: <ReactSVG src={awesomeFeatures} />,
        title: "Awesome Features",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
  {
    row: [
      {
        icon: <ReactSVG src={powerfulSecurity} />,
        title: "Powerful Security",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elitelquam. Fusce quis nulla tincidunt interdum magna vitae.",
      },
    ],
  },
];

export const impressiveNumbers = [
  {
    nomber: [
      {
        title: "7533",
        text: "Project Complate",
      },
    ],
  },
  {
    nomber: [
      {
        title: "4222",
        text: "On Going Project",
      },
    ],
  },
  {
    nomber: [
      {
        title: "6980 +",
        text: "Happy Client",
      },
    ],
  },
  {
    nomber: [
      {
        title: "100%",
        text: "Positive Feedback",
      },
    ],
  },
];
