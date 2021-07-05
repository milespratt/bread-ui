import styled from "styled-components";
import { animated } from "react-spring";

const ToastWrapperStyles = styled(animated.div)`
  position: fixed;
  top: 10px;
  left: 0;
  z-index: 1000;
  width: 100vw;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-items: center;
`;

export default ToastWrapperStyles;
