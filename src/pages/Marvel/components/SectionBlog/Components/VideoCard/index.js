import React, { memo } from "react";
import types from "prop-types";

import "./styles.scss";

function VideoCard(props) {
  const { title, url, ratio } = props;

  return (
    <div className="video-card">
      <div
        className={`video-card__video-wrapper video-card__video-wrapper-${ratio}`}
      >
        <iframe
          allowFullScreen="allowfullscreen"
          frameBorder="0"
          title={title}
          type="text/html"
          src={url}
        />
      </div>
    </div>
  );
}

export default memo(VideoCard);

VideoCard.propTypes = {
  viewMode: types.string,
  title: types.string,
  url: types.string,
  ratio: types.oneOf([
    "ratio_16x9",
    "ratio_14x9",
    "ratio_4x3",
    "ratio_264x193",
  ]),
};

VideoCard.defaultProps = {
  title: "-",
  ratio: "ratio_16x9",
};
