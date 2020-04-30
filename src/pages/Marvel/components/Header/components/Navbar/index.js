import React, { Fragment } from "react";
import { Link } from "react-scroll";
import types from "prop-types";

import "./styles.scss";

export function Navbar({ links }) {
  return (
    <div className="navbar">
      {links.map((link, index) => {
        return (
          <Fragment key={index}>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              isDynamic={true}
            >
              <div className="navbar__item-indicator"></div>
              {link.label}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

Navbar.propTypes = {
  links: types.string.isRequired,
};

Navbar.defaultProps = {};
