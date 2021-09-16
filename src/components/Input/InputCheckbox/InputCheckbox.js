import React from "react";
// import PropTypes from "prop-types";

import InputCheckboxStyles from "./InputCheckbox.styles";

function InputCheckbox(props) {
  return (
    <InputCheckboxStyles hasError={props.error}>
      <>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.checked}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
        <span className="checkmark"></span>
      </>
    </InputCheckboxStyles>
  );
}

InputCheckbox.defaultProps = {
  checked: false,
};

InputCheckbox.propTypes = {};

export default InputCheckbox;
