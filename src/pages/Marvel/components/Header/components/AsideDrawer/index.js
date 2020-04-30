import { ReactSVG } from "react-svg";
import { Link } from "react-scroll";
import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "./styles.scss";

import navigation from "../../../../../../assets/SVG/Aside-Drawer/navigation.svg";

const AsideDrawer = ({ links, isOpen }) => {
  const modify = classNames({
    "aside--is-open": isOpen,
  });

  return (
    <aside className={`aside ${modify}`}>
      <div className={`aside__wrap ${!!modify ? `aside__wrap--is-open` : ``}`}>
        {links.map(({ label, to, icon }, index) => {
          return (
            <Link
              className="aside__item"
              key={`1aside${index}`}
              activeClass="aside__item--active"
              to={to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              isDynamic={true}
            >
              <ReactSVG
                src={navigation}
                className="aside__item--arrow"
                key={`2aside${index}`}
              />
              <div className="aside__item--wrap" key={`3aside${index}`}>
                <ReactSVG
                  src={icon}
                  className="aside__item--icon"
                  key={`4aside${index}`}
                />
                <div className="aside__item--lable" key={`6aside${index}`}>
                  {label}
                </div>
              </div>
              <ReactSVG
                src={navigation}
                className="aside__item--arrow"
                key={`7aside${index}`}
              />
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default AsideDrawer;

AsideDrawer.propTypes = {
  links: types.string.isRequired,
  isOpen: types.bool,
};

AsideDrawer.defaultProps = {
  isOpen: false,
};
