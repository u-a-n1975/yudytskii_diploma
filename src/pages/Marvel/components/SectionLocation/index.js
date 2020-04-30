import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import { ContentContainer } from "../../../../components/ContentContainer";
import locateIcon from "../../../../assets/SVG/Locate-Icon.svg";
import CustomGoogleMap from "./Components/CustomGoogleMap";
import close from "../../../../assets/SVG/close.svg";
import { Modal } from "./Components/Modal";

import "./styles.scss";

export const SectionLocation = () => {
  const [modalOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalOpen);
  };

  return (
    <div className="location">
      <ContentContainer>
        <div
          className="location__title"
          onClick={(e) => {
            e.stopPropagation();
            toggleModalHandler();
          }}
        >
          Locate us on map
          <ReactSVG
            className="location__button"
            src={modalOpen ? close : locateIcon}
          />
        </div>
        {modalOpen && (
          <Modal
            classNamess="location"
            isOpen={modalOpen}
            onClose={toggleModalHandler}
          >
            <CustomGoogleMap mapWidth="1148px" />
          </Modal>
        )}
      </ContentContainer>
    </div>
  );
};
