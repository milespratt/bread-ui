import React, { useEffect } from "react";
import { useSpring } from "react-spring";
// import PropTypes from "prop-types";

import ModalStyles from "./Modal.styles";

import { Button, DismissButton } from "../";

function Modal(props) {
  const modalAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return function cleanup() {
      document.body.style.overflow = "unset";
    };
  });
  return (
    <ModalStyles style={modalAnimation}>
      <button
        className="modal__background"
        onClick={() => props.onDismiss()}
      ></button>
      <div className="modal__wrapper">
        <div className="modal__header">
          <span className="modal__title">{props.title}</span>
          <DismissButton onDismiss={props.onDismiss} />
        </div>
        <div className="modal__content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo eos
            aut voluptatum expedita laboriosam, corporis sapiente vero illum
            repellendus ex alias quisquam dicta ducimus in temporibus,
            necessitatibus eum magni voluptas.
          </p>
        </div>
        <div className="modal__footer">
          <Button text="Okay" />
        </div>
      </div>
    </ModalStyles>
  );
}

Modal.defaultProps = {
  title: "Modal",
  onDismiss: () => console.log("No modal dismiss handler!"),
};

Modal.propTypes = {};

export default Modal;
