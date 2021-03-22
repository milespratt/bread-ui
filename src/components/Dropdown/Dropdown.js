import React from "react";
// import PropTypes from "prop-types";

import DropdownStyles from "./Dropdown.styles";

function Dropdown(props) {
  return (
    <DropdownStyles>
      <option hidden disabled selected value>
        --chose an option--
      </option>
      <option>Option 1</option>
      <option>Option 2</option>
    </DropdownStyles>
  );
}

Dropdown.propTypes = {};

export default Dropdown;
