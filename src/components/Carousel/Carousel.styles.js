import styled from "styled-components";

const CarouselStyles = styled.div`
  /* display: grid;
  grid-template-columns: min-content 1fr min-content;
  .carousel__body { */
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 75%;
  grid-gap: 20px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  /* } */
`;

export default CarouselStyles;
