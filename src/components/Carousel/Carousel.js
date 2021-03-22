import React from "react";
// import PropTypes from "prop-types";

import CarouselStyles from "./Carousel.styles";

import { Card } from "../";

function Carousel(props) {
  return (
    <CarouselStyles>
      {new Array(10).fill(undefined).map((e, i) => {
        return (
          <Card
            cardTitle="Card"
            iconText="CA"
            key={`card-${i}`}
            cardSections={[
              {
                header: { title: "Section Header" },
                content: ["This is a default card"],
              },
            ]}
          />
        );
      })}
    </CarouselStyles>
  );
}

Carousel.propTypes = {};

export default Carousel;
