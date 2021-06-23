import styled from "styled-components";

const InputSwitchStyles = styled.button`
  padding: 0;
  background: none;
  /* background-color: ${(props) => (props.toggled ? "#027bc3" : "#c9cacd")}; */
  border: 2px solid #282c36;
  position: relative;
  height: 23px;
  width: 38px;
  cursor: pointer;
  .input__switch__indicator {
    height: 15px;
    width: 15px;
    /* background-color: #282c36; */
    background-color: ${(props) => (props.toggled ? "#282c36" : "#c9cacd")};
    position: absolute;
    top: 2px;
    left: ${(props) => (props.toggled ? "17px" : "2px")};
    /* opacity: ${(props) => (props.toggled ? "1" : "0.25")}; */
    transition: left 100ms ease, opacity 100ms ease, background-color 100ms ease;
  }
  &&:hover {
    border: 2px solid #027bc3;
  }
  &&:hover .input__switch__indicator {
    /* background-color: #027bc3; */
  }
`;

export default InputSwitchStyles;
