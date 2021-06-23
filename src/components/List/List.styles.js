import styled from "styled-components";

const ListStyles = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 70px;
  /* outline: 1px dashed red; */
  width: 100%;
  .list__item {
    padding-right: 20px;
    /* outline: 1px dashed green; */
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    cursor: pointer;
  }
  .list__item:hover {
    background-color: #f4f4f5;
  }
  .list__icon {
    margin-left: 20px;
  }
  .list__item__content {
    margin-left: 20px;
    grid-column: 2;
    display: flex;
    flex-direction: column;
  }
  .list__item__title {
  }
  .list__item__subtitle {
    margin-top: 5px;
    font-weight: 300;
    font-size: 0.8rem;
  }
  .list__item__controls {
  }
`;

export default ListStyles;
