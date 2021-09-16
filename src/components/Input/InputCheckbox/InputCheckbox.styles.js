import styled from "styled-components";

const InputCheckboxStyles = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-self: start;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 26px;
    width: 26px;
    border: 2px solid ${(props) => (props.hasError ? "#E32A22" : "#282c36")};
  }

  .checkmark:hover,
  input:focus ~ .checkmark {
    border: 2px solid #027bc3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    height: 22px;
    width: 22px;
    top: 2px;
    left: 2px;
    background-color: #282c36;
  }
`;

export default InputCheckboxStyles;
