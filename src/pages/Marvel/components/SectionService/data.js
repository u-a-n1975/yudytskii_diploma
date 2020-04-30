import { ReactSVG } from "react-svg";
import React from "react";

import excellentFeatures from "../../../../assets/SVG/Marvel/servise-cards/excellentFeatures.svg";
import parallaxEffect from "../../../../assets/SVG/Marvel/servise-cards/parallaxEffect.svg";
import simpleClean from "../../../../assets/SVG/Marvel/servise-cards/simpleClean.svg";
import support from "../../../../assets/SVG/Marvel/servise-cards/support.svg";

export const data = [
  {
    card: [
      {
        icon: <ReactSVG src={excellentFeatures} />,
        title: "excellent features",
        text: "Lorem ipsum doloar sit amet meconstur adipiscing.",
      },
    ],
  },
  {
    card: [
      {
        icon: <ReactSVG src={simpleClean} />,
        title: "simple & clean",
        text: "Lorem ipsum doloar sit amet meconstur adipiscing.",
      },
    ],
  },
  {
    card: [
      {
        icon: <ReactSVG src={parallaxEffect} />,
        title: "parallax effect",
        text: "Lorem ipsum doloar sit amet meconstur adipiscing.",
      },
    ],
  },
  {
    card: [
      {
        icon: <ReactSVG src={support} />,
        title: "24/7 support",
        text: "Lorem ipsum doloar sit amet meconstur adipiscing.",
      },
    ],
  },
];
