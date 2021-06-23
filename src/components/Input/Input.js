import React, { useCallback } from "react";
import PropTypes from "prop-types";
import InputStyles from "./Input.styles";

// input components
import { Select, InputCheckbox, InputRadio, InputRange, InputSwitch } from "./";

import { Button } from "../";

function Input(props) {
  const renderInputType = useCallback(() => {
    switch (props.type) {
      case "button":
      case "reset":
      case "submit":
        return <Button {...props} text={"Submit"} />;
      case "range":
        return <InputRange />;
      case "checkbox":
        return <InputCheckbox id={props.for} onChange={props.onChange} />;
      case "radio":
        return <InputRadio id={props.for} onChange={props.onChange} />;
      case "select":
        return <Select {...props} />;
      case "switch":
        return <InputSwitch />;
      default:
        return (
          <input
            onChange={props.onChange}
            id={props.for}
            type={props.type}
            src={props.src}
          />
        );
    }
  }, [props]);
  return (
    <InputStyles htmlFor={props.for}>
      <span className="input__label">{props.label || props.type}</span>
      {renderInputType()}
    </InputStyles>
  );
}

Input.defaultProps = {
  type: "text",
  for: "input",
  onChange: () => console.log("No change handler!"),
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "select",
    "submit",
    "switch",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
};

export default Input;
