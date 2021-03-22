import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  color: ${(props) => props.fontColor};
  background: ${(props) => (props.secondary ? "none" : props.backgroundColor)};
  border: ${(props) =>
    props.secondary ? "none" : `2px solid ${props.fontColor}`};
  font-weight: bold;
  padding: ${(props) => (props.secondary ? "0" : "10px")};
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  &&:hover,
  &&:active,
  &&:focus {
    color: ${(props) => (props.secondary ? "none" : props.backgroundColor)};
    background: ${(props) => (props.secondary ? "none" : props.fontColor)};
    text-decoration: ${(props) => (props.secondary ? "underline" : "none")};
  }
`;

export default ButtonStyles;
