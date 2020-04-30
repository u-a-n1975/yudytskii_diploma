import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionContact = () => {
  return (
    <div className="contact">
      <ContentContainer>
        <TitleBlock
          className="contact"
          title="contact"
          titleColor="white"
          subtitle="send us message"
        />
        <div className="contact__form--wrap">
          <form className="contact__form" method="past" action="#">
            <input
              className="contact__form--first-name"
              tabIndex="1"
              type="text"
              name="firstName"
              required
              placeholder="First Name (Required)"
            />
            <input
              className="contact__form--last-name"
              tabIndex="2"
              type="text"
              name="lastName"
              required
              placeholder="Last Name (Required)"
            />
            <input
              className="contact__form--email"
              tabIndex="3"
              type="email"
              name="email"
              required
              placeholder="Email (Required)"
            />
            <input
              className="contact__form--sabject"
              tabIndex="4"
              type="text"
              name="sabject"
              placeholder="Sabject"
            />
            <textarea
              className="contact__form--your-message"
              tabIndex="5"
              type="textarea"
              rows="10"
              cols="auto"
              wrap="soft"
              name="your-message"
              placeholder="Type your message"
            />
            <input
              className="contact__form--button"
              tabIndex="6"
              type="submit"
              name="button"
              value="send"
            />
          </form>
        </div>
      </ContentContainer>
    </div>
  );
};
