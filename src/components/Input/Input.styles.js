import styled from "styled-components";

const InputStyles = styled.label`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 3px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  align-items: center;

  .input__label {
  }

  input {
    border-radius: 0%;
    border: 2px solid #282c36;
    padding: 3px;
    min-height: 20px;
  }

  input[type="search"] {
    height: 30px;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input:focus:not([type="range"]):not([type="file"]):not([type="color"]) {
    outline: none;
    border: 2px solid #027bc3;
  }

  /* overrides */

  input[type="file"] {
    outline: none;
    border: none;
    padding: 0;
  }

  input[type="color"] {
    outline: none;
    border: none;
    padding: 0;
    background-color: none;
  }
`;

export default InputStyles;
