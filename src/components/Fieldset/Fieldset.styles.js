import styled from "styled-components";

const FieldsetStyles = styled.fieldset`
  border: 2px solid #282c36;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 25px;
  padding: 10px;
  padding-bottom: 25px;
  .fieldset__legend {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default FieldsetStyles;
