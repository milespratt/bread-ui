import React from "react";
import PropTypes from "prop-types";

import ButtonStyles from "./Button.styles";
import { Avatar } from "../";

const types = {
  default: {
    backgroundColor: "#F5F5F5",
    fontColor: "#282C36",
    text: "Default",
  },

  info: { backgroundColor: "#E7F5FC", fontColor: "#027BC3", text: "Info" },
  success: {
    backgroundColor: "#E5FAF3",
    fontColor: "#12855F",
    text: "Success",
  },
  warn: { backgroundColor: "#FFF4DF", fontColor: "#CB8608", text: "Warn" },
  critical: {
    backgroundColor: "#FFF0ED",
    fontColor: "#E32A22",
    text: "Critical",
  },
};

types.button = types.reset = types.submit = types.default;

function Button(props) {
  return (
    <ButtonStyles
      secondary={props.secondary}
      backgroundColor={types[props.type].backgroundColor}
      fontColor={types[props.type].fontColor}
      onClick={props.onClick}
    >
      {props.iconText && (
        <Avatar
          backgroundColor={types[props.type].fontColor}
          iconColor={types[props.type].backgroundColor}
          text={props.iconText}
          image={props.iconImage}
          size="tiny"
        />
      )}
      {!props.iconText && (props.text || types[props.type].text)}
    </ButtonStyles>
  );
}

Button.defaultProps = {
  type: "default",
  secondary: false,
  onClick: () => console.log("No click handler!"),
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Button;
