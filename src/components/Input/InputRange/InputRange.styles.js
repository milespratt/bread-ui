import styled from "styled-components";

const InputRangeStyles = styled.input`
  border: none !important;
  -webkit-appearance: none;
  padding: 0 !important;
  cursor: pointer;
  height: 30px;
  box-sizing: border-box;
  margin: 0;

  &&:focus {
    outline: none;
  }

  + .range__value {
    font-size: 10px;
    position: absolute;
    transition: transform 200ms ease;
    color: #f4f4f5;
    pointer-events: none;
    bottom: 9px;
    left: 0px;
    text-align: center;
    width: 22px;
    transition: opacity 250ms ease;
    opacity: 0;
  }

  + .range__value * {
    /* margin: 0;
    padding: 0;
    text-align: center; */
  }

  &&:hover + .range__value,
  &&:focus + .range__value {
    /* transform: translateY(-25px); */
    opacity: 1;
  }

  &&::-webkit-slider-runnable-track {
    outline: none;
    height: 5px;
    background: #c9cacd;
  }

  &&::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    background: #282c36;
    margin-top: -9px;
    border: none;
    position: relative;
  }

  &&:hover::-webkit-slider-thumb:active {
    /* height: 20px;
    width: 20px;
    margin-top: -7px; */
  }

  &&:hover::-webkit-slider-thumb,
  &&:focus::-webkit-slider-thumb {
    background: #027bc3;
  }
`;

export default InputRangeStyles;
