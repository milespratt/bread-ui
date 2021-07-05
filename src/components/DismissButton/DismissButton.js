import React from "react";
// import PropTypes from "prop-types";

import DismissButtonStyles from "./DismissButton.styles";

function DismissButton(props) {
  return (
    <DismissButtonStyles
      backgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
      size={props.size}
      onClick={() => props.onDismiss()}
    >
      <span className="dismiss__icon"></span>
    </DismissButtonStyles>
  );
}

DismissButton.defaultProps = {
  onDismiss: () => console.log("No dismiss handler!"),
  backgroundColor: "white",
  fontColor: "#282c36",
  size: "large",
};

DismissButton.propTypes = {};

export default DismissButton;
