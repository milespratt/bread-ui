import React, { useState, useRef, useEffect } from "react";
// import PropTypes from "prop-types";

import useWindowSize from "./useWindowSize";

import CarouselStyles from "./Carousel.styles";
function Carousel(props) {
  const [slides, setSlides] = useState(props.children);
  const [sliding, setSliding] = useState(false);
  const { width } = useWindowSize();

  const showAllSlides = useRef(props.slidesOnScreen === props.children.length);

  // DOM refs
  const carousel = useRef(null);
  const slideTrack = useRef(null);
  const slideContainer = useRef(null);

  function slide(direction) {
    if (sliding) {
      return;
    }
    setSliding(true);

    if (direction === "prev") {
      const newSlides = [...slides];
      if (showAllSlides.current) {
        newSlides.unshift(slides[slides.length - 1]);
      } else {
        newSlides.unshift(newSlides.pop());
      }
      setSlides(newSlides);
      slideContainer.current.style.transition = "none";
      slideContainer.current.style.transform = `translate(-${
        slideContainer.current.clientWidth /
        (showAllSlides.current ? slides.length + 1 : slides.length)
      }px)`;

      setTimeout(() => {
        slideContainer.current.style.transition = "transform 200ms ease";
        slideContainer.current.style.transform = `translate(${0}px)`;
      }, 50);

      slideContainer.current.ontransitionend = () => {
        if (showAllSlides.current) {
          newSlides.pop();
          setSlides(newSlides);
        }
        setSliding(false);
      };
    }
    if (direction === "next") {
      console.log("next!");
      const newSlides = [...slides];
      if (showAllSlides.current) {
        newSlides.push(slides[0]);
      }
      setSlides(newSlides);

      setTimeout(() => {
        slideContainer.current.style.transition = "transform 200ms ease";
        slideContainer.current.style.transform = `translate(-${
          slideContainer.current.clientWidth /
          (showAllSlides.current ? slides.length + 1 : slides.length)
        }px)`;
      }, 50);
      slideContainer.current.ontransitionend = () => {
        if (showAllSlides.current) {
          newSlides.shift();
        } else {
          newSlides.push(newSlides.shift());
        }
        setSlides(newSlides);
        slideContainer.current.style.transition = "none";
        slideContainer.current.style.transform = `translate(${0}px)`;
        setSliding(false);
      };
    }
  }

  useEffect(() => {
    slideTrack.current.style.width = `100%`;
    const slideTrackWidth = slideTrack.current.clientWidth;
    slideTrack.current.style.width = `${slideTrackWidth}px`;

    slideContainer.current.style.width = `${
      slideTrackWidth *
      ((showAllSlides.current
        ? props.children.length + 1
        : props.children.length) /
        props.slidesOnScreen)
    }px`;
  }, [props.children, props.children.length, props.slidesOnScreen, width]);

  return (
    <CarouselStyles
      ref={carousel}
      slides={
        showAllSlides.current
          ? props.children.length + 1
          : props.children.length
      }
      slidesOnScreen={props.slidesOnScreen}
    >
      <button
        onClick={() => slide("prev")}
        className="carousel__control carousel__control--prev"
      ></button>
      <div className="slide__track" ref={slideTrack}>
        <div className="slide__container" ref={slideContainer}>
          {/* {slides.map((slide, i) => {
            return slide.content ( */}
          {slides.map((child, i) => {
            return (
              <div
                // style={{
                //   backgroundColor: slide.color,
                //   color: slide.background,
                // }}
                className="carousel__slide"
                key={`carousel-card-${i}`}
              >
                {/* {slide.content} */}
                {child}
              </div>
            );
          })}
          {/* );
          })} */}
        </div>
      </div>
      <button
        onClick={() => slide("next")}
        className="carousel__control carousel__control--next"
      ></button>
    </CarouselStyles>
  );
}

Carousel.propTypes = {};

export default Carousel;
