import React from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div style={{ fontSize: "40px", textAlign: "center" }}>
      Segundos: {seconds}
    </div>
  );
};

export default SecondsCounter;