import React from "react";
// import PropTypes from "prop-types";

import InputRadioStyles from "./InputRadio.styles";

function InputRadio(props) {
  return (
    <InputRadioStyles>
      <>
        <input
          id={props.id}
          type="radio"
          // checked={props.checked}
          // onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </>
    </InputRadioStyles>
  );
}

InputRadio.propTypes = {};

export default InputRadio;
