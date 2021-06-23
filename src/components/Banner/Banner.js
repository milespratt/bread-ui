import React from "react";
import PropTypes from "prop-types";
import { Avatar, Button } from "../";
import BannerStyles from "./Banner.styles";

const types = {
  default: {
    backgroundColor: "#F4F4F5",
    fontColor: "#282C36",
    icon: "De",
  },
  info: { backgroundColor: "#E7F5FC", fontColor: "#027BC3", icon: "In" },
  success: { backgroundColor: "#E5FAF3", fontColor: "#12855F", icon: "Su" },
  warn: { backgroundColor: "#FFF4DF", fontColor: "#CB8608", icon: "Wa" },
  critical: { backgroundColor: "#FFF0ED", fontColor: "#E32A22", icon: "Cr" },
};

function Banner(props) {
  return (
    <BannerStyles
      backgroundColor={types[props.type].backgroundColor}
      fontColor={types[props.type].fontColor}
    >
      <Avatar
        backgroundColor={types[props.type].fontColor}
        iconColor={types[props.type].backgroundColor}
        text={types[props.type].icon}
        size="micro"
      />
      <div className="banner__content">
        <span className="banner__title">{props.title}</span>
        <p className="banner__text">{props.text}</p>
        {(props.primary || props.secondary) && (
          <div className="banner__actions">
            {props.primary && <Button type={props.type} />}
            {props.primary && <Button secondary type={props.type} />}
          </div>
        )}
      </div>
      <button className="banner__dismiss" onClick={() => props.onDismiss()}>
        <span className="banner__dismiss__icon"></span>
      </button>
    </BannerStyles>
  );
}

Banner.defaultProps = {
  onDismiss: () => console.log("No banner dismiss handler!"),
  title: "Banner Title",
  text: "Banner Text",
  type: "default",
};

Banner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

export default Banner;
