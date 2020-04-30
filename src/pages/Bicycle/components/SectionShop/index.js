import React from "react";

import { InfoBlock } from "../../../../components/InfoBlock";
import { Button } from "../../../../components/Button";

import { shopData } from "../../data";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionShop = () => {
  return (
    <div className="bicycle-shop">
      <InfoBlock className="images-block" data={shopData} />
      <div className="bicycle-shop__button--wrap">
        <Button
          className="bicycle-shop"
          src="#"
          minWidth="300"
          minHeight="50"
          bgColor="black"
          color="white"
          borderColor="white"
        >
          discover the shop
        </Button>
      </div>
    </div>
  );
};
