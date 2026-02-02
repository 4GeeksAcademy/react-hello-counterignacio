import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./secondsCounter.jsx";

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderApp() {
  root.render(<SecondsCounter seconds={seconds} />);
}

renderApp();

setInterval(() => {
  seconds++;
  renderApp();
}, 1000);