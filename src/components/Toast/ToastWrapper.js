import React from "react";
import ToastWrapperStyles from "./ToastWrapper.styles";

import Toast from "./Toast";

export default function ToastWrapper(props) {
  function clearToast(id) {
    const newToasts = props.toasts.filter(
      (toastToFilter) => toastToFilter.id !== id
    );
    props.setToasts(newToasts);
  }
  return (
    <ToastWrapperStyles>
      {props.toasts.map((toast, i) => {
        return (
          <Toast
            onDismiss={clearToast}
            key={`${toast.text} ${toast.id}`}
            text={`${toast.text} ${toast.id}`}
            id={toast.id}
            type={toast.type}
          />
        );
      })}
    </ToastWrapperStyles>
  );
}
