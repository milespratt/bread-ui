import styled from "styled-components";

const ToastStyles = styled.div`
  background: ${(props) => props.backgroundColor};
  border: ${(props) => `2px solid ${props.fontColor}`};
  color: ${(props) => props.fontColor};
  display: flex;
  padding: 10px;
  align-items: center;
  .toast__text {
    margin-right: 20px;
  }
  .toast__controls {
  }
`;

export default ToastStyles;
