import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-scroll";
import types from "prop-types";

import logo from "../../../../../../assets/SVG/Bicycle/Bicycle-Logo.svg";

import "./styles.scss";

export function Navbar({ links }) {
  const Item = ({ link }) => {
    return (
      <Link
        className="bicycle-navbar__item"
        activeClass="bicycle-navbar__item--active"
        to={link.to}
        href={link.href}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        {link.label}
      </Link>
    );
  };
  return (
    <>
      <a className="bicycle-navbar__logo--open" href="/">
        <ReactSVG src={logo} />
      </a>
      <div className="bicycle-navbar">
        <div className="bicycle-navbar__left-block">
          <Item link={links[0]} />.
          <Item link={links[1]} />
        </div>
        <a className="bicycle-navbar__logo" href="/">
          <ReactSVG src={logo} />
        </a>
        <div className="bicycle-navbar__right-block">
          <Item link={links[2]} />.
          <Item link={links[3]} />
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  links: types.string.isRequired,
};

Navbar.defaultProps = {};
