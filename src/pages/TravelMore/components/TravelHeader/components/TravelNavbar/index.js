import React, { Fragment } from "react";
import { Link } from "react-scroll";
import types from "prop-types";

import "./styles.scss";

export function TravelNavbar({ links }) {
  return (
    <div className="travel-navbar">
      {links.map((link, index) => {
        return (
          <Fragment key={index}>
            <Link
              className="travel-navbar__item"
              activeClass="travel-navbar__item--active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              isDynamic={true}
            >
              <div className="travel-navbar__item-indicator"></div>
              {link.label}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

TravelNavbar.propTypes = {
  links: types.string.isRequired,
};

TravelNavbar.defaultProps = {};
