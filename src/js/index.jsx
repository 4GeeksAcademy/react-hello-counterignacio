import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter.jsx";

let seconds = 0;

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

setInterval(() => {
  seconds++;
  root.render(<SecondsCounter seconds={seconds} />);
}, 1000);