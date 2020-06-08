import React from "react";

const Message = ({ message, currentUser }) => {
  let { user, message: msg, timestamp } = message;

  timestamp =
    timestamp.length === 11
      ? timestamp.slice(0, 5) +
        " " +
        timestamp.slice(timestamp.length - 2, timestamp.length)
      : timestamp.slice(0, 4) +
        " " +
        timestamp.slice(timestamp.length - 2, timestamp.length);

  if (user === currentUser) {
    return (
      <div className="sent-message">
        <p className="message"> {msg} </p>
        <p className="timestamp"> {timestamp} </p>
      </div>
    );
  } else if (user === "admin") {
    return (
      <div className="admin-message">
        <p className="username"> {user}</p>
        <p className="message"> {msg} </p>
        <p className="timestamp"> {timestamp} </p>
      </div>
    );
  } else {
    return (
      <div className="received-message">
        <p className="username"> {user}</p>
        <p className="message"> {msg} </p>
        <p className="timestamp">{timestamp}</p>
      </div>
    );
  }
};

export default Message;
