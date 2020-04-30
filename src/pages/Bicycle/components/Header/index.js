import React, { useState } from "react";

import HamburgerButton from "./components/HamburgerButton";
import AsideDrawer from "./components/AsideDrawer";
import { Navbar } from "./components/Navbar";

import { navigationLinks } from "./data";

import "./styles.scss";
import { ContentContainer } from "../../../../components/ContentContainer";

export const Header = () => {
  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  return (
    <div className={`bicycle-header`}>
      <ContentContainer className="bicycle-header">
        <Navbar links={navigationLinks} />

        <HamburgerButton
          handleClick={handleToggleAside}
          className="bicycle-header__menu-btn-wrapper"
          isOpen={isAsideOpen}
        />

        <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
      </ContentContainer>
    </div>
  );
};
