import styled from "styled-components";

const BadgeStyles = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  min-width: 0;
  white-space: nowrap;
  grid-template-columns: minmax(0px, min-content) minmax(0px, min-content) min-max(
      0px,
      1fr
    );
  padding: 5px;
  align-items: center;
  .badge__icon,
  .badge__thumbnail {
    height: 20px;
    width: 20px;
  }
  .badge__icon {
    background-color: ${(props) => props.fontColor};
    color: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }

  .badge__thumbnail {
    object-fit: cover;
  }
  .badge__text {
    color: ${(props) => props.fontColor};
    font-size: 12px;
    font-weight: bold;
  }
  .badge__remove {
    background-color: ${(props) => props.fontColor};
    color: ${(props) => props.backgroundColor};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12px;
    width: 12px;
    justify-self: end;
    margin-left: 8px;
  }

  .badge__remove:hover {
    background-color: ${(props) => props.backgroundColor};
  }

  .badge__remove__icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge__remove__icon:before,
  .badge__remove__icon:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${(props) => props.backgroundColor};
  }
  .badge__remove:hover .badge__remove__icon:before,
  .badge__remove:hover .badge__remove__icon:after {
    background-color: ${(props) => props.fontColor};
  }

  .badge__remove__icon:before {
    transform: rotate(135deg);
  }
  .badge__remove__icon:after {
    transform: rotate(45deg);
  }
`;

export default BadgeStyles;
