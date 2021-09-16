import styled from "styled-components";

const InputSwitchStyles = styled.button`
  padding: 0;
  background: none;
  /* background-color: ${(props) => (props.active ? "#027bc3" : "#c9cacd")}; */
  border: 2px solid ${(props) => (props.hasError ? "#E32A22" : "#282c36")};
  position: relative;
  height: 30px;
  width: 52px;
  cursor: pointer;
  .input__switch__indicator {
    height: 22px;
    width: 22px;
    /* background-color: #282c36; */
    background-color: ${(props) => (props.active ? "#282c36" : "#c9cacd")};
    position: absolute;
    top: 2px;
    left: ${(props) => (props.active ? "24px" : "2px")};
    /* opacity: ${(props) => (props.active ? "1" : "0.25")}; */
    transition: left 100ms ease, opacity 100ms ease, background-color 100ms ease;
  }
  &&:hover {
    border: 2px solid #027bc3;
  }
  &&:hover .input__switch__indicator {
    /* background-color: #027bc3; */
  }
  &&:focus {
    outline: none;
    border: 2px solid #027bc3;
  }
`;

export default InputSwitchStyles;
