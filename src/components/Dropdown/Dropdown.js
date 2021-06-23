import React from "react";
// import PropTypes from "prop-types";

import DropdownStyles from "./Dropdown.styles";

function Dropdown(props) {
  return (
    <DropdownStyles>
      <span className="dropdown__title">Dropdown Title</span>
      <div className="dropdown__content">
        <ul className="dropdown__list">
          <li className="dropdown__item">Thing</li>
          <li className="dropdown__item">Thing</li>
          <li className="dropdown__item">Thing</li>
          <li className="dropdown__item">Thing</li>
        </ul>
      </div>
    </DropdownStyles>
  );
}

Dropdown.propTypes = {};

export default Dropdown;
