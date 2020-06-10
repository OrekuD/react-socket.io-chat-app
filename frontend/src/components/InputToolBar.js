import React from "react";
import { PaperPlane, Pencil } from "../svg/Svgs";

const color = "#1da17e";
const InputToolBar = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="input-toolbar">
      <div className="input-box">
        <Pencil size="18px" color={color} />
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="input"
          placeholder="Type message..."
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
      <div className="icon-container" onClick={sendMessage}>
        <PaperPlane size="20px" color={color} />
      </div>
    </div>
  );
};

export default InputToolBar;
