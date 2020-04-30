import Slider from "react-slick";
import React from "react";
import Collapsible from "react-collapsible";

import { ContentContainer } from "../../../../components/ContentContainer";
import { TitleBlock } from "../../../../components/TitleBlock";

import { defaultSettings } from "./data";
import { cardsPostData } from "./data";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./../../../../styles/index.scss";
import "./styles.scss";

export const SectionBlog = () => {
  function ReadMore({ text }) {
    return (
      <div className="blog__card--text">
        {text}
        <div className="blog__card--button">read more</div>
      </div>
    );
  }

  return (
    <div className="blog">
      <ContentContainer>
        <TitleBlock className="blog" title="news" subtitle="recent blog post" />

        <Slider {...defaultSettings} className="blog__slider">
          {cardsPostData.map(
            (
              {
                content,
                date,
                title,
                position,
                inLogo,
                namberComment,
                text,
                textPreviev,
              },
              index
            ) => {
              return (
                <div className="blog__card" key={index}>
                  <div className="blog__card--wrap">
                    <div className="blog__card--content">{content}</div>
                    <div className="blog__card--date">{date}</div>
                    <div className="blog__card--title">{title}</div>
                    <div className="blog__card--info">
                      {`${position} . ${inLogo} . ${namberComment} coment`}
                    </div>
                    <Collapsible
                      className="blog__card--collapsible"
                      trigger={<ReadMore text={textPreviev} />}
                    >
                      {text}
                    </Collapsible>
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </ContentContainer>
    </div>
  );
};
