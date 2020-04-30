import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "./styles.scss";

const HamburgerButton = ({ handleClick, className, isOpen }) => {
  const modify = classNames({
    " bicycle-hamburger-btn--open": isOpen,
  });

  return (
    <>
      <button
        className={`bicycle-hamburger-btn ${className}${modify}`}
        onClick={handleClick}
      >
        <p />
        <p />
        <p />
      </button>
      {isOpen && (
        <div
          className="bicycle-hamburger-btn--backdrop"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
  handleClick: types.func.isRequired,
  className: types.string,
  isOpen: types.bool,
};

HamburgerButton.defaultProps = {
  isOpen: false,
};
