import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter.jsx";

window.onload = () => {
  let seconds = 0;

  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

  function renderCounter() {
    root.render(<SecondsCounter seconds={seconds} />);
  }

  renderCounter();

  setInterval(() => {
    seconds++;
    renderCounter();
  }, 1000);
};