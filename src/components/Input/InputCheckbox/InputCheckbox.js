import React from "react";
// import PropTypes from "prop-types";

import InputCheckboxStyles from "./InputCheckbox.styles";

function InputCheckbox(props) {
  return (
    <InputCheckboxStyles>
      <>
        <input
          id={props.id}
          type="checkbox"
          // checked={props.checked}
          // onChange={props.onChange}
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
