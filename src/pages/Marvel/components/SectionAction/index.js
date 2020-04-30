import React from "react";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";
import { Button } from "../../../../components/Button";

import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionAction = () => {
  return (
    <div className="action">
      <ContentContainer>
        <TitleBlock
          className="action"
          maxWidth="600"
          title="are you impressed by our work?"
          description="Durabitur commodo ras non urna mauris mollis auctor proin laoreet"
          textColor="white"
        />
        <div className="action__button-wrap">
          <Button
            className="action"
            src="#"
            maxWidth="170"
            minHeight="49"
            color="white"
            borderColor="white"
          >
            purchase now
          </Button>
          <Button
            className="action"
            src="#"
            maxWidth="170"
            minHeight="49"
            color="white"
            borderColor="white"
          >
            get in touch
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};
