import React from "react";
// import PropTypes from "prop-types";

import ToastStyles from "./Toast.styles";

import { DismissButton } from "../";

const types = {
  default: {
    backgroundColor: "#F4F4F5",
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

function Toast(props) {
  return (
    <ToastStyles
      backgroundColor={types[props.type].backgroundColor}
      fontColor={types[props.type].fontColor}
    >
      <span className="toast__text">{props.text}</span>
      <div className="toast__controls">
        <DismissButton
          backgroundColor={types[props.type].backgroundColor}
          fontColor={types[props.type].fontColor}
          size="small"
          onDismiss={() => props.onDismiss(props.id)}
        />
      </div>
    </ToastStyles>
  );
}

Toast.defaultProps = {
  text: "Toast",
  type: "info",
  onDismiss: () => console.log("No toast dismiss handler!"),
};

Toast.propTypes = {};

export default Toast;
