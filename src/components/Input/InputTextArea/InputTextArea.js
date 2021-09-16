import React from "react";
// import PropTypes from "prop-types";

import InputTextAreaStyles from "./InputTextArea.styles";

function InputTextArea(props) {
  return (
    <InputTextAreaStyles
      name={props.name}
      onChange={props.onChange}
      id={props.id}
    />
  );
}

InputTextArea.propTypes = {};

export default InputTextArea;
