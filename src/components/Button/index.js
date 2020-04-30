import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "../../styles/index.scss";
import "./styles.scss";

export const Button = ({
  buttonClickHandler,
  borderRadius,
  borderColor,
  minHeight,
  className,
  maxWidth,
  minWidth,
  children,
  bgColor,
  color,
  name,
  type,
  src,
}) => {
  const modify = classNames({
    "button--border-radius": borderRadius,
    "notranslate material-icons": type,
    [`button--border-color-${borderColor}`]: borderColor,
    [`button--bg-color-${bgColor}`]: bgColor,
    [`button--color-${color}`]: color,
  });

  return (
    <a
      className={`button ${className}__button ${modify}`}
      href={src}
      translate="no"
      onClick={() => buttonClickHandler(name)}
      style={{
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        minHeight: `${minHeight}px`,
      }}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  className: types.string.isRequired,
  src: types.string,
  borderRadius: types.bool,
  minHeight: types.string,
  maxWidth: types.string,
  minWidth: types.string,
  children: types.any,
  borderColor: types.oneOf(["primaryDarkGrey", "white", "black"]),
  bgColor: types.oneOf(["white", "black", "primaryGrey"]),
  color: types.oneOf([
    "backgroundPrimary",
    "primaryDarkGrey",
    "primaryYellow",
    "white",
    "black",
  ]),
};

Button.defaultProps = {
  buttonClickHandler() {},
  maxWidth: "max-content",
};
