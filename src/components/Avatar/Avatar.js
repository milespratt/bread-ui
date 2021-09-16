import React from "react";
import PropTypes from "prop-types";
import AvatarStyles from "./Avatar.styles";

function Avatar(props) {
  return (
    <AvatarStyles
      size={props.size}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
    >
      {props.image ? (
        <img className="avatar__image" src={props.image} alt={props.alt} />
      ) : (
        <span className="avatar__text">{props.text}</span>
      )}
    </AvatarStyles>
  );
}

Avatar.defaultProps = {
  alt: "Avatar Image",
  backgroundColor: "#282C36",
  text: "AV",
  textColor: "#F4F4F5",
  size: "small",
  radius: false,
};

Avatar.propTypes = {
  alt: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["micro", "tiny", "small", "medium", "large"]),
  text: PropTypes.string,
  textColor: PropTypes.string,
  image: PropTypes.string,
};

export default Avatar;
