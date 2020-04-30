import { ReactSVG } from "react-svg";
import React from "react";

import pinterestIcon from "../../../../assets/SVG/social/pinterestIcon.svg";
import linkedinIcon from "../../../../assets/SVG/social/linkedinIcon.svg";
import fasebookIcon from "../../../../assets/SVG/social/fasebookIcon.svg";
import tvitterIcon from "../../../../assets/SVG/social/tvitterIcon.svg";
import skypeIcon from "../../../../assets/SVG/social/skypeIcon.svg";

export const socialData = [
  {
    fasebook: (
      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
        <ReactSVG src={fasebookIcon} />
      </a>
    ),
    tvitter: (
      <a
        target="_blank"
        href="https://www.tvitter.com/"
        rel="noopener noreferrer"
      >
        <ReactSVG src={tvitterIcon} />
      </a>
    ),
    linkedin: (
      <a
        target="_blank"
        href="https://www.linkedin.com/"
        rel="noopener noreferrer"
      >
        <ReactSVG src={linkedinIcon} />
      </a>
    ),
    skype: (
      <a
        target="_blank"
        href="https://www.skype.com/"
        rel="noopener noreferrer"
      >
        <ReactSVG src={skypeIcon} />
      </a>
    ),
    pinterest: (
      <a
        target="_blank"
        href="https://www.pinterest.com/"
        rel="noopener noreferrer"
      >
        <ReactSVG src={pinterestIcon} />
      </a>
    ),
  },
];
