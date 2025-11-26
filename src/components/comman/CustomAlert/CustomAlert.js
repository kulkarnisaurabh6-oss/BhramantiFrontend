import React from "react";
import "./CustomAlert.css";

export default function CustomAlert({ message, onClose }) {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p className="alert-message">{message}</p>
        <button className="alert-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}