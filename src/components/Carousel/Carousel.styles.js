import styled from "styled-components";

const CarouselStyles = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  .slide__track {
    overflow: hidden;
    width: 100%;
  }
  .slide__container {
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.slides}, ${1}fr)`};
    overflow: hidden;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  .carousel__control {
    position: absolute;
    z-index: 10;
    background: none;
    height: 100%;
    outline: none;
    border: none;
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
    color: white;
    width: 3rem;
  }
  .carousel__control--prev {
    left: 0;
    top: 0;
  }
  .carousel__control--next {
    right: 0;
    top: 0;
  }

  .carousel__control--prev:before,
  .carousel__control--next:before {
    position: absolute;
    content: "";
    border-left: 4px solid #f4f4f5;
    border-top: 4px solid #f4f4f5;
    transform: rotate(-45deg);
    height: 1rem;
    width: 1rem;
    left: calc(50% - 0.5rem);
    top: calc(50% - 0.5rem);
  }

  .carousel__control--next:before {
    transform: rotate(135deg);
    right: calc(50% - 0.5rem);
    left: unset;
  }

  .carousel__control--prev:hover:before,
  .carousel__control--next:hover:before {
    border-left: 4px solid #027bc3;
    border-top: 4px solid #027bc3;
  }
`;

export default CarouselStyles;
