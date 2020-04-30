import React, { useState, useEffect } from "react";
import classNames from "classnames";

import { ContentContainer } from "../../../../components/ContentContainer";
import HamburgerButton from "./components/HamburgerButton";
import TravelAsideDrawer from "./components/TravelAsideDrawer";
import { TravelNavbar } from "./components/TravelNavbar";
import { TravelSearch } from "./components/TravelSearch";

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

export const TravelHeader = () => {
  const currentPosition = useCurrentPosition();

  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  const modify = classNames({
    " travel-header--on-scroll":
      currentPosition >= window.innerHeight - hedaerHeight,
  });

  return (
    <div className={`travel-header${modify}`}>
      <ContentContainer className="header">
        <div className="travel-header__content">
          <a className="travel-header__logo" href="/">
            <p>bhromaon</p>
          </a>

          <TravelNavbar links={navigationLinks} />

          <div className="travel-header__right-block">
            <HamburgerButton
              handleClick={handleToggleAside}
              className="travel-header__menu-btn-wrapper"
              isOpen={isAsideOpen}
            />
          </div>

          <TravelAsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
          <TravelSearch />
        </div>
      </ContentContainer>
    </div>
  );
};
