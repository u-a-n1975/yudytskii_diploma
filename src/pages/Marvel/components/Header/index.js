import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import classNames from "classnames";

import { ContentContainer } from "../../../../components/ContentContainer";
import HamburgerButton from "./components/HamburgerButton";
import AsideDrawer from "./components/AsideDrawer";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";

import logo from "./../../../../assets/icons/0.Logo-Marvel.svg";
import { navigationLinks } from "./data";

import "./styles.scss";

const hedaerHeight = 80;

const useCurrentPosition = () => {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export const Header = () => {
  const currentPosition = useCurrentPosition();

  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  const modify = classNames({
    " header--on-scroll": currentPosition >= window.innerHeight - hedaerHeight,
  });

  return (
    <div className={`header${modify}`}>
      <ContentContainer className="header">
        <div className="header__content">
          <a className="header__logo" href="/">
            <ReactSVG src={logo} />
          </a>

          <Navbar links={navigationLinks} />

          <div className="header__right-block">
            <HamburgerButton
              handleClick={handleToggleAside}
              className="header__menu-btn-wrapper"
              isOpen={isAsideOpen}
            />
          </div>

          <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
          <Search />
        </div>
      </ContentContainer>
    </div>
  );
};
