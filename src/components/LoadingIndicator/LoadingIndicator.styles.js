import styled, { keyframes } from "styled-components";

const loadOne = keyframes`
0% {
    transform: translate(0px) translateY(0px);
  }

  25% {
    opacity: 1;
    transform: translate(20px) translateY(0px);
  }

  50% {
    opacity: 1;
    transform: translate(20px) translateY(20px);
  }

  75% {
    opacity: 1;
    transform: translate(0px) translateY(20px);
  }

  100% {
    transform: translate(0px) translateY(0px);
  }
`;

const loadTwo = keyframes`
0% {
    transform: translate(0px) translateY(0px);
  }

  25% {
    transform: translate(-20px) translateY(0px);
  }

  50% {
    transform: translate(-20px) translateY(-20px);
  }

  75% {
    transform: translate(0px) translateY(-20px);
  }

  100% {
    transform: translate(0px) translateY(0px);
  }
`;

const LoadingIndicatorStyles = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  display: flex;
  .loader {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #282c36;
    border-radius: 0%;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
  .loader__one {
    animation-name: ${loadOne};
  }
  .loader__two {
    top: 20px;
    left: 20px;
    animation-name: ${loadTwo};
  }
`;

export default LoadingIndicatorStyles;
