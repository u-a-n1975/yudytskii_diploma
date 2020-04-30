import React, { useState } from "react";

import { TitleBlock } from "../../../../components/TitleBlock";
import { ImagesBlock } from "./components/ImagesBlock";
import { Button } from "../../../../components/Button";

import { portfolioCards, buttonsData } from "./data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionPortfolio = () => {
  const [currentCards, setCurrentCards] = useState(portfolioCards);

  const buttonClickHandler = (name) => {
    name !== buttonsData[0].name
      ? setCurrentCards(
          portfolioCards.filter((currentCard) => currentCard.type === name)
        )
      : setCurrentCards(portfolioCards.filter(() => true));
  };

  return (
    <div className="portfolio">
      <div className="portfolio__head">
        <TitleBlock
          className="portfolio"
          title="work"
          subtitle="our portfolio"
          titleColor="primaryDarkYellow"
        />
        <div className="portfolio__buttons-block">
          {buttonsData.map(({ name, type }, index) => {
            return (
              <Button
                buttonClickHandler={buttonClickHandler}
                className="portfolio"
                minHeight="35"
                color="black"
                borderColor="black"
                type={type}
                name={name}
                key={index}
              >
                {name}
              </Button>
            );
          })}
        </div>
      </div>
      <ImagesBlock className="portfolio" data={currentCards} />
    </div>
  );
};
