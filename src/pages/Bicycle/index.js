import React from "react";

import { SectionInfoSlider } from "./components/SectionInfoSlider";
import { SectionContact } from "./components/SectionContact";
import { SectionAbout } from "./components/SectionAbout";
import { SectionWork } from "./components/SectionWork";
import { SectionShop } from "./components/SectionShop";
import { SectionHero } from "./components/SectionHero";
import { Header } from "./components/Header";

import "../../styles/index.scss";
import "./styles.scss";

export const Bicycle = () => {
  return (
    <div className="bicycle">
      <SectionHero />
      <Header />
      <SectionAbout />
      <SectionWork />
      <SectionInfoSlider />
      <SectionShop />
      <SectionContact />
    </div>
  );
};
