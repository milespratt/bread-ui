import styled from "styled-components";

const FieldsetStyles = styled.fieldset`
  border: 2px solid #282c36;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 15px;
  padding: 10px;
  .fieldset__legend {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default FieldsetStyles;
