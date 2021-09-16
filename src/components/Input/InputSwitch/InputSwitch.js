import React, { useState } from "react";
import PropTypes from "prop-types";

import InputSwitchStyles from "./InputSwitch.styles";

function InputSwitch(props) {
  const [active, setActive] = useState(props.active);
  return (
    <InputSwitchStyles
      id={props.id}
      active={active}
      onClick={() => setActive(!active)}
      name={props.name}
      hasError={props.error}
      type="button"
    >
      <div className="input__switch__indicator"></div>
    </InputSwitchStyles>
  );
}

InputSwitch.defaultProps = {
  toggled: true,
};

InputSwitch.propTypes = {
  active: PropTypes.bool,
};

export default InputSwitch;
