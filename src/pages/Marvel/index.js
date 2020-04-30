import React from "react";

import { SectionResponsive } from "./components/SectionResponsive";
import { SectionPortfolio } from "./components/SectionPortfolio";
import { SectionLocation } from "./components/SectionLocation";
import { SectionWhoWeAre } from "./components/SectionWhoWeAre";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionService } from "./components/SectionService";
import { SectionContact } from "./components/SectionContact";
import { SectionExpert } from "./components/SectionExpert";
import { SectionAction } from "./components/SectionAction";
import { SectionFooter } from "./components/SectionFooter";
import { SectionAbout } from "./components/SectionAbout";
import { SectionPrice } from "./components/SectionPrice";
import { SectionHero } from "./components/SectionHero";
import { SectionBlog } from "./components/SectionBlog";
import { Header } from "./components/Header";

export const Marvel = () => {
  return (
    <div className="marvel">
      <SectionHero />
      <Header />
      <SectionResponsive />
      <SectionWhoWeAre />
      <SectionAbout />
      <SectionExpert />
      <SectionPortfolio />
      <SectionFeatures />
      <SectionPrice />
      <SectionService />
      <SectionAction />
      <SectionBlog />
      <SectionContact />
      <SectionLocation />
      <SectionFooter />
    </div>
  );
};
