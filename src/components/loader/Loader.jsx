import React from "react";
import "./loader.css";

function Loader({ isFullScreen, small }) {
  return (
    <div
      className={
        "loader-container " +
        (isFullScreen ? "loader-full-screen" : "") +
        (small ? "loader-small" : "")
      }
    >
      <div className="loader"></div>
    </div>
  );
}

export { Loader };
