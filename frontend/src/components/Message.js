import React from "react";

const Message = ({ message, currentUser }) => {
  if (message.user === currentUser) {
    return (
      <div className="sent-message">
        <p> {message.message} </p>
      </div>
    );
  } else {
    return (
      <div className="received-message">
        <p> {message.message} </p>
      </div>
    );
  }
};

export default Message;
