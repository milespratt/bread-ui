import styled from "styled-components";

const InputStyles = styled.label`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 3px;
  text-transform: uppercase;
  font-weight: bold;
  align-items: center;
  position: relative;
  /* max-width: 300px; */

  .input__label {
    font-size: 0.8rem;
  }

  .input__error {
    color: #e32a22;
    position: absolute;
    bottom: -15px;
    font-size: 0.7rem;
  }

  input {
    border-radius: 0% !important;
    border: 2px solid ${(props) => (props.hasError ? "#E32A22" : "#282c36")};
    padding: 0px 5px;
    height: 30px;
    box-sizing: border-box;
    width: 100%auto;
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
  textarea {
    border-radius: 0% !important;
    border: 2px solid ${(props) => (props.hasError ? "#E32A22" : "#282c36")};
    padding: 3px;
    min-height: 50px;
    outline: none;
  }
  textarea:focus {
    outline: none;
    border: 2px solid #027bc3;
  }
`;

export default InputStyles;
