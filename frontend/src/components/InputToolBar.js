import React from "react";

const InputToolBar = (props) => {
  return (
    <div className="input-toolbar">
      <div className="input-box">
        <input className="input" placeholder="Type message..." />
      </div>
      <div className="icon-container"> w </div>
      <div className="icon-container"> s </div>
    </div>
  );
};

export default InputToolBar;
