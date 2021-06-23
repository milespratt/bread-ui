import React, { useState } from "react";
import PropTypes from "prop-types";

import InputSwitchStyles from "./InputSwitch.styles";

function InputSwitch(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <InputSwitchStyles
      // toggled={props.toggled}
      // onClick={() => props.toggle(!props.toggled)}
      toggled={toggled}
      onClick={() => setToggled(!toggled)}
    >
      <div className="input__switch__indicator"></div>
    </InputSwitchStyles>
  );
}

InputSwitch.defaultProps = {
  toggled: true,
  toggle: () => console.log("No toggle"),
};

InputSwitch.propTypes = {
  toggled: PropTypes.bool,
  toggle: PropTypes.func,
};

export default InputSwitch;
