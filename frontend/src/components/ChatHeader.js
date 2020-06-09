import React from "react";

const ChatHeader = ({ roomDetails }) => {
  return (
    <div className="chat-header">
      <div className="room-name">
        <div className="dot" />
        <h4> {roomDetails.room} </h4>
      </div>
      <a href="/" className="button">
        <p> leave </p>
      </a>
    </div>
  );
};

export default ChatHeader;
