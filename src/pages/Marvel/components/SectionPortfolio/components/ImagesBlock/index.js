import { ReactSVG } from "react-svg";
import types from "prop-types";
import React from "react";

import viewIcon from "../../../../../../assets/SVG/View.svg";
import linkIcon from "../../../../../../assets/SVG/Link.svg";

export function ImagesBlock({ className, data }) {
  return (
    <div className={`${className}__images-block`}>
      {data.map(({ image, hoverTitle, hoversubtitle }, index) => {
        return (
          <div
            className={`${className}__images-block-item`}
            key={`1images${index}`}
          >
            <img src={image} alt="hero" key={`2images${index}`} />
            <div
              className={`${className}__hover-block`}
              key={`3images${index}`}
            >
              <div
                className={`${className}__hover-block-wrap`}
                key={`4images${index}`}
              >
                <div
                  className={`${className}__icons-block`}
                  key={`5images${index}`}
                >
                  <div
                    className={`${className}__icons-block--wrap`}
                    key={`6images${index}`}
                  >
                    <a
                      className={`${className}__icons-block--link`}
                      key={`7images${index}`}
                      href="3"
                    >
                      <ReactSVG src={linkIcon} />
                    </a>
                    <a
                      className={`${className}__icons-block--view`}
                      key={`8images${index}`}
                      href="3"
                    >
                      <ReactSVG src={viewIcon} />
                    </a>
                  </div>
                </div>
                <div
                  className={`${className}__hover-block-title`}
                  key={`9images${index}`}
                >
                  {hoverTitle}
                </div>
                <div
                  className={`${className}__hover-block-subtitle`}
                  key={`10images${index}`}
                >
                  {hoversubtitle}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImagesBlock;

ImagesBlock.propTypes = {
  className: types.string,
  data: types.string,
};

ImagesBlock.defaultProps = {};
