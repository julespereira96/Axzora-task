import React from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
