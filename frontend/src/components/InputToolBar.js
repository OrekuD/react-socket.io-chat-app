import React from "react";

const InputToolBar = ({ message, setMessage, sendMessage }) => {
  // const [text, setText] = useState("");

  // const send = (event) => {
  //   setMessage(text);
  //   sendMessage(event);
  //   setText("");
  // };

  return (
    <div className="input-toolbar">
      <div className="input-box">
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
        w
      </div>
      <div className="icon-container"> s </div>
    </div>
  );
};

export default InputToolBar;
