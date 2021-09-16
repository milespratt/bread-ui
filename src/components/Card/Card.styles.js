import styled from "styled-components";

const CardStyles = styled.div`
  border: 2px solid #282c36;
  width: calc(100% - 2px);
  scroll-snap-align: center;
  // padding: 20px 0px;
  box-sizing: border-box;

  .card__header {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    padding: 0px 20px;
    margin-top: 20px;
    /* margin-bottom: 20px; */
  }

  .card__actions {
    justify-self: flex-end;
    display: flex;
    align-items: center;
  }

  .card__heading {
    display: flex;
    flex-direction: column;
  }

  .card__title {
    font-size: 1.2rem;
    font-weight: bold;
    white-space: nowrap;
  }
  .card__subtitle {
    font-weight: 300;
  }
  .card__section {
    padding: 20px 20px;
    display: grid;
    grid-template-areas:
      "header header"
      "content actions";
    grid-template-columns: 1fr, min-content;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid #282c36;
    position: relative;
  }
  .card__section:first-child {
    border: none;
    /* padding-top: 0px !important; */
  }
  .card__section--sub + .card__section--sub {
    padding: 20px 0px;
    margin: 0 20px;
  }

  .card__section__header {
    grid-area: header;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .card__section__title {
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  .card__section__content {
    // width: 100%;
    grid-area: content;
  }

  .card__section__actions {
    grid-area: actions;
    display: flex;
    grid-gap: 10px;
  }

  p {
    margin: 0;
  }

  .card__section--dim {
    background-color: #f4f4f5;
  }

  .card__footer {
    display: flex;
    grid-gap: 20px;
    justify-content: flex-end;
    padding: 0px 20px;
    padding-bottom: 20px;
  }
`;

export default CardStyles;
