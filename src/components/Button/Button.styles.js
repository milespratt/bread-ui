import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  background: ${(props) => (props.secondary ? "none" : props.backgroundColor)};
  border: ${(props) =>
    props.secondary ? "none" : `2px solid ${props.fontColor}`};
  color: ${(props) => props.fontColor};
  font-weight: bold;
  padding: ${(props) => (props.secondary ? "0" : "10px")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;
  &&:hover,
  &&:active,
  &&:focus {
    color: ${(props) => (props.secondary ? "none" : props.backgroundColor)};
    background: ${(props) => (props.secondary ? "none" : props.fontColor)};
    text-decoration: ${(props) => (props.secondary ? "underline" : "none")};
  }
`;

export default ButtonStyles;
