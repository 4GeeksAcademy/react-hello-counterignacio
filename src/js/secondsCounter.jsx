import React from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "2rem" }}>{seconds}</div>
  );
};

export default SecondsCounter;