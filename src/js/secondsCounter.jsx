import React from "react";

const SecondsCounter = ({ seconds }) => {
  const secondsAsString = seconds.toString();
  const paddedSeconds = secondsAsString.padStart(6, "0");
  const digits = paddedSeconds.split("");
  return (
    <div className="counter-container">
      <div className="counter-box">⏱</div>
      {digits.map((digit, index) => (
        <div key={index} className="counter-box">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;