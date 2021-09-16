import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

import InputRangeStyles from "./InputRange.styles";

function InputRange(props) {
  const valueDisplay = useRef(null);
  const rangeInput = useRef(null);
  useEffect(() => {
    if (valueDisplay.current) {
      const percentOfValue = props.value / props.max;
      const left = percentOfValue * (rangeInput.current.clientWidth - 22);
      valueDisplay.current.style.left = `${left}px`;
    }
  }, [props.value, props.max]);
  return (
    <>
      <InputRangeStyles
        ref={rangeInput}
        value={props.value}
        id={props.id}
        type="range"
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        step={props.step}
        name={props.name}
      />
      <div ref={valueDisplay} className="range__value">
        <span>{props.value}</span>
      </div>
    </>
  );
}

InputRange.defaultProps = {
  min: 0,
  max: 50,
  step: 1,
};

InputRange.propTypes = {};

export default InputRange;
