import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "./styles.scss";

export const ContentContainer = ({ maxWidth, className, children }) => {
  const modify = classNames(
    className
      ? `content-container ${className}__content-container`
      : `content-container`
  );

  return (
    <div
      className={`${modify}`}
      style={{ maxWidth: `${maxWidth * 1 + 16 * 2}px` }}
    >
      {children}
    </div>
  );
};

ContentContainer.propTypes = {
  children: types.node.isRequired,
  className: types.string,
  maxWidth: types.string,
};

ContentContainer.defaultProps = {
  maxWidth: "1148",
};
