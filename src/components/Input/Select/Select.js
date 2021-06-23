import React from "react";
// import PropTypes from "prop-types";

import SelectStyles from "./Select.styles";

function Select(props) {
  return (
    <SelectStyles defaultValue="none">
      <option hidden disabled value="none">
        --chose an option--
      </option>
      <option>Option 1</option>
      <option>Option 2</option>
    </SelectStyles>
  );
}

Select.propTypes = {};

export default Select;
