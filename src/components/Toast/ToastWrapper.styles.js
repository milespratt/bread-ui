import styled from "styled-components";

const ToastWrapperStyles = styled.div`
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
