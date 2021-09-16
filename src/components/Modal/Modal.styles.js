import styled from "styled-components";

const ModalStyles = styled.div`
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 1000000;
  display: grid;

  .modal__background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
    top: 0;
    left: 0;
    position: fixed;
    z-index: -1;
  }

  .modal__wrapper {
    background-color: white;
    max-width: 800px;
    margin: 0 auto;
    align-self: end;
  }

  .modal__header {
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    font-weight: 300;
  }

  .modal__content {
    border-top: 1px solid #282c36;
    border-bottom: 1px solid #282c36;
    padding: 10px 20px;
  }

  .modal__footer {
    display: flex;
    grid-gap: 20px;
    justify-content: flex-end;
    padding: 20px;
  }

  @media (min-width: 800px) {
    .modal__wrapper {
      align-self: center;
    }
  }
`;

export default ModalStyles;
