import styled from "styled-components";

const FormStyles = styled.form`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 25px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  .form__loader {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 1;
    transition: all 250ms ease;
    pointer-events: all;
  }
  .form__loader--hidden {
opacity: 0;
pointer-events: none;
  }
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
