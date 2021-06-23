import React from "react";
// import PropTypes from "prop-types";

import LoadingIndicatorStyles from "./LoadingIndicator.styles";

function LoadingIndicator(props) {
  return (
    <LoadingIndicatorStyles>
      <div className="loader loader__one"></div>
      <div className="loader loader__two"></div>
      {/* <div className="loader loader__three"></div> */}
    </LoadingIndicatorStyles>
  );
}

LoadingIndicator.propTypes = {};

export default LoadingIndicator;
