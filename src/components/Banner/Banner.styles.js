import styled from "styled-components";

const BannerStyles = styled.div`
  border: 2px solid ${(props) => props.fontColor};
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding: 10px;
  grid-gap: 20px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor};

  .banner__title {
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: ${(props) => props.fontColor};
    white-space: nowrap;
  }

  .banner__text {
    color: ${(props) => props.fontColor};
  }

  .banner__actions {
    white-space: nowrap;
    display: flex;
    grid-gap: 10px;
  }

  .banner__dismiss {
    background-color: ${(props) => props.fontColor};
    color: ${(props) => props.backgroundColor};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    margin-left: 5px;
    // border-radius: 50%;
  }

  .banner__dismiss:hover {
    background-color: ${(props) => props.backgroundColor};
  }

  .banner__dismiss__icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner__dismiss__icon:before,
  .banner__dismiss__icon:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: ${(props) => props.backgroundColor};
  }

  .banner__dismiss:hover .banner__dismiss__icon:before,
  .banner__dismiss:hover .banner__dismiss__icon:after {
    background-color: ${(props) => props.fontColor};
  }

  .banner__dismiss__icon:before {
    transform: rotate(135deg);
  }
  .banner__dismiss__icon:after {
    transform: rotate(45deg);
  }
`;

export default BannerStyles;
