import styled from "styled-components";

const InputRangeStyles = styled.input`
  border: none !important;
  -webkit-appearance: none;
  padding: 0 !important;
  cursor: pointer;

  &&::-webkit-slider-runnable-track {
    outline: none;
    height: 5px;
    background: #c9cacd;
  }

  &&::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background: #282c36;
    margin-top: -5px;
    border: none;
  }

  &&:hover::-webkit-slider-thumb:active {
    /* height: 20px;
    width: 20px;
    margin-top: -7px; */
  }

  &&:hover::-webkit-slider-thumb {
    background: #027bc3;
  }
`;

export default InputRangeStyles;
