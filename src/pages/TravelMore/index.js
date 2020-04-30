import React from "react";

import { TravelHero } from "./components/TravelHero";
import { TravelHeader } from "./components/TravelHeader";
import { TravelChoose } from "./components/TravelChoose";
import { TravelWorks } from "./components/TravelWorks";
import { TravelCountrys } from "./components/TravelCountrys";
import { TravelTestimonial } from "./components/TravelTestimonial";
import { TravelContact } from "./components/TravelContact";

export const TravelMore = () => {
  return (
    <div className="travel-more">
      <TravelHero />
      <TravelHeader />
      <TravelChoose />
      <TravelWorks />
      <TravelCountrys />
      <TravelTestimonial />
      <TravelContact />
    </div>
  );
};
