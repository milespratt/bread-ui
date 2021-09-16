import styled from "styled-components";

const DismissButtonStyles = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.size === "large" ? "30px" : "16px")};
  width: ${(props) => (props.size === "large" ? "30px" : "16px")};
  justify-self: end;

  &&:hover {
    background-color: ${(props) => props.fontColor};
  }

  .dismiss__icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dismiss__icon:before,
  .dismiss__icon:after {
    content: "";
    position: absolute;
    width: ${(props) => (props.size === "large" ? "24px" : "12px")};
    height: ${(props) => (props.size === "large" ? "2px" : "2px")};
    background-color: ${(props) => props.fontColor};
  }
  &&:hover .dismiss__icon:before,
  &&:hover .dismiss__icon:after {
    background-color: ${(props) => props.backgroundColor};
  }

  .dismiss__icon:before {
    transform: rotate(135deg);
  }
  .dismiss__icon:after {
    transform: rotate(45deg);
  }
`;

export default DismissButtonStyles;
