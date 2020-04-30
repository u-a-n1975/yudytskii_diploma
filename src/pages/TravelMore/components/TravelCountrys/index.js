import React from "react";

import { Button } from "../../../../components/Button";
import { ContentContainer } from "../../../../components/ContentContainer";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const TravelCountrys = () => {
  return (
    <div className="travel-countrys">
      <ContentContainer className="travel-countrys">
        <div className="travel-countrys__info-block">
          <p className="travel-countrys__info-block--country">spain</p>
          <p className="travel-countrys__info-block--title">
            grand spain madrid
          </p>
          <p className="travel-countrys__info-block--text">
            But I must explain to you how all this mistaken idea of account to
            denouncing pleasure and praising pain was account born and I account
            will give you a complete account of the system
          </p>
          <Button
            className="travel"
            src="#"
            maxWidth="225"
            minHeight="60"
            color="white"
            borderColor="white"
          >
            <div className="travel__button--fon" />
            <div className="travel__button--fon" />
            <p>boock now</p>
          </Button>
        </div>
        <div className="travel-countrys__info-block">
          <p className="travel-countrys__info-block--country">italy</p>
          <p className="travel-countrys__info-block--title">grand italy rome</p>
          <p className="travel-countrys__info-block--text">
            But I must explain to you how all this mistaken idea of account to
            denouncing pleasure and praising pain was account born and I account
            will give you a complete account of the system
          </p>
          <Button
            className="travel"
            src="#"
            maxWidth="225"
            minHeight="60"
            color="white"
            borderColor="white"
          >
            <div className="travel__button--fon" />
            <div className="travel__button--fon" />
            <p>boock now</p>
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};
