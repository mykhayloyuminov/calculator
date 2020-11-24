import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      <div className="numbers">{props.str}</div>
      <div className="equal">{props.equal}</div>
    </div>
  );
};

export default Display;
