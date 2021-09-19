import styled from "styled-components";

const CarouselStyles = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  /* grid-template-columns: min-content 1fr min-content; */
  grid-template-columns: 1fr;
  /* outline: 1px dashed orange; */
  /* background-color: orange; */
  /* box-sizing: border-box; */
  .slide__track {
    overflow: hidden;
    width: 100%;
  }
  .slide__container {
    align-items: center;
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.slides}, ${1}fr)`};
    overflow: hidden;
    grid-auto-flow: column;
    /* grid-gap: 10px; */
  }
  .carousel__slide {
    box-sizing: border-box;
    padding: 0 5px 0 5px;
  }
  .carousel__control {
    opacity: 0;
    position: relative;
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
    width: 5rem;
    /* outline: 1px dashed blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 500ms ease;
  }
  &&:hover .carousel__control,
  .carousel__control:hover {
    opacity: 1;
    transition-delay: 1s;
  }
  .carousel__control:hover {
    transition-delay: 0s !important;
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
    border-left: 4px solid #EAEAEC;
    border-top: 4px solid #EAEAEC;
    transform: rotate(-45deg);
    height: 1rem;
    width: 1rem;
    /* left: calc(50% - 0.25rem);
    top: calc(50% - 0.25rem); */
  }

  .carousel__control--next:before {
    transform: rotate(135deg);
    /* right: calc(50% - 0.5rem); */
    left: unset;
  }

  .carousel__control--prev:hover:before,
  .carousel__control--next:hover:before {
    border-left: 4px solid #027bc3;
    border-top: 4px solid #027bc3;
  }
`;

export default CarouselStyles;
