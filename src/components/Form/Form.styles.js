import styled from "styled-components";

const FormStyles = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 25px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  .form__header {
  }
  .form__heading {
    font-size: 2rem;
    margin: 0;
  }
  .form__description {
    border-top: 1px dashed #282c36;
    border-bottom: 1px dashed #282c36;
    margin: 0;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 300;
  }
`;

export default FormStyles;
