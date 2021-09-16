import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./Input.styles";

// input components
import {
  Select,
  InputCheckbox,
  InputRadio,
  InputRange,
  InputSwitch,
  InputSearch,
  FileUpload,
  InputTextArea,
} from "./";

import { Button } from "../";

const placeholderText = {
  email: "you@email.com",
  password: "password",
  search: "search...",
  url: "https://...",
  tel: "555-867-5309",
};

function Input(props) {
  const inputID = props.id || props.label.replace(" ", "_").toLowerCase();
  const renderInputType = () => {
    switch (props.type) {
      case "button":
      case "reset":
      case "submit":
        return <Button {...props} text={"Submit"} />;
      case "range":
        return (
          <InputRange
            id={inputID}
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
          />
        );
      case "file":
        return (
          <FileUpload name={props.name} id={props.id} value={props.value} />
        );
      case "checkbox":
        return (
          <InputCheckbox
            id={inputID}
            value={props.value}
            checked={props.checked}
            onChange={props.onChange}
            name={props.name}
            error={props.error}
          />
        );
      case "radio":
        return (
          <InputRadio
            error={props.error}
            id={inputID}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        );
      case "select":
        return (
          <Select
            error={props.error}
            name={props.name}
            id={props.id}
            {...props}
            onChange={props.onChange}
          />
        );
      case "switch":
        return (
          <InputSwitch
            error={props.error}
            id={inputID}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
          />
        );
      case "textarea":
        return (
          <InputTextArea
            id={inputID}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
          />
        );
      case "search":
        return (
          <InputSearch
            id={inputID}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
          />
        );
      default:
        return (
          <input
            onChange={props.onChange}
            id={inputID}
            name={props.name}
            type={props.type}
            src={props.src}
            placeholder={props.placeholder || placeholderText[props.type]}
            value={props.value}
          />
        );
    }
  };
  return (
    <InputStyles hasError={props.error} htmlFor={inputID}>
      <span className="input__label">{props.label}</span>
      {renderInputType()}
      {props.error && <span className="input__error">{props.error}</span>}
    </InputStyles>
  );
}

Input.defaultProps = {
  // error: null,
  // type: "text",
  // label: "label",
  // name: "name",
  // id: "field_id",
  // onChange: () => console.log("No change handler!"),
};

Input.propTypes = {
  error: PropTypes.string,
  // id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
    "textarea",
    "time",
    "url",
    "week",
  ]).isRequired,
};

export default Input;
