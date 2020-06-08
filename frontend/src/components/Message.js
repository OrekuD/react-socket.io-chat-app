import React from "react";

const Message = ({ message, currentUser }) => {
  if (message.user === currentUser) {
    return (
      <div className="sent-message">
        <p className="message"> {message.message} </p>
      </div>
    );
  } else if (message.user === "admin") {
    return (
      <div className="admin-message">
        <p className="username"> {message.user}</p>
        <p className="message"> {message.message} </p>
      </div>
    );
  } else {
    return (
      <div className="received-message">
        <p className="username"> {message.user}</p>
        <p className="message"> {message.message} </p>
      </div>
    );
  }
};

export default Message;
