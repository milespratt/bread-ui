import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../";

import BadgeStyles from "./Badge.styles";

const types = {
  default: {
    fontColor: "#F4F4F5",
    backgroundColor: "#282C36",
  },
  info: { fontColor: "#E7F5FC", backgroundColor: "#027BC3" },
  success: { fontColor: "#E5FAF3", backgroundColor: "#12855F" },
  warn: { fontColor: "#FFF4DF", backgroundColor: "#CB8608" },
  critical: {
    fontColor: "#FFF0ED",
    backgroundColor: "#E32A22",
  },
};

function Badge(props) {
  return (
    <BadgeStyles
      backgroundColor={types[props.type].backgroundColor}
      fontColor={types[props.type].fontColor}
    >
      {(props.iconText || props.iconImage) && (
        <Avatar
          backgroundColor={types[props.type].fontColor}
          textColor={types[props.type].backgroundColor}
          text={props.iconText}
          image={props.iconImage}
          size="micro"
        />
      )}
      <span className="badge__text">{props.text}</span>
      {props.canRemove && (
        <button className="badge__remove">
          <span className="badge__remove__icon"></span>
        </button>
      )}
    </BadgeStyles>
  );
}

Badge.defaultProps = {
  backgroundColor: "#282C36",
  fontColor: "#F4F4F5",
  thumbnailAlt: "Badge Thumbnail",
  text: "Badge",
  canRemove: false,
  type: "default",
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  canRemove: PropTypes.bool,
  fontColor: PropTypes.string,
  iconText: PropTypes.string,
  iconImage: PropTypes.string,
  text: PropTypes.string,
};

export default Badge;
