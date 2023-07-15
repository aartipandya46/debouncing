import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ show }) {
  if (show)
    return ReactDOM.createPortal(
      <div>This is modal</div>,
      document.getElementById("modal")
    );
  else return null;
}
