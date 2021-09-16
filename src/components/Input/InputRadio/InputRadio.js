import React from "react";
// import PropTypes from "prop-types";

import InputRadioStyles from "./InputRadio.styles";

function InputRadio(props) {
  return (
    <InputRadioStyles hasError={props.error}>
      <>
        <input
          id={props.id}
          type="radio"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </>
    </InputRadioStyles>
  );
}

InputRadio.propTypes = {};

export default InputRadio;
