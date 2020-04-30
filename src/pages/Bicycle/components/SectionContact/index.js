import { ReactSVG } from "react-svg";
import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { InfoBlock } from "../../../../components/InfoBlock";

import logo from "../../../../assets/SVG/Bicycle/Bicycle-Logo.svg";

import "./../../../../styles/index.scss";
import "./styles.scss";

import { contactData } from "../../data";

export const SectionContact = () => {
  return (
    <div className="bicycle-contact">
      <ReactSVG className="bicycle-contact__logo" src={logo} />
      <p>Stay on the saddle!</p>
      <form className="bicycle-contact__form" method="past" action="#">
        <input
          className="bicycle-contact__form--email"
          tabIndex="3"
          type="email"
          name="email"
          required
          placeholder="enter your email... "
        />
        <input
          className="bicycle-contact__form--button"
          tabIndex="6"
          type="submit"
          name="button"
          value="go"
        />
      </form>
      <div className="bicycle-contact__footer">
        <ContentContainer className="bicycle-contact" maxWidth="1080">
          <InfoBlock
            className="bicycle-contact__content"
            data={contactData}
            symbols="--"
          />
        </ContentContainer>
      </div>
    </div>
  );
};
