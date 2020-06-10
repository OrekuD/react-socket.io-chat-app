import React from "react";

const Message = ({ message, currentUser }) => {
  let { user, text } = message;

  if (user.toLowerCase() === currentUser.toLowerCase()) {
    return (
      <div className="sent-message">
        <p className="message"> {text} </p>
      </div>
    );
  } else if (user === "admin") {
    return (
      <div className="admin-message">
        <p className="username"> {user}</p>
        <p className="message"> {text} </p>
      </div>
    );
  } else {
    return (
      <div className="received-message">
        <p className="username"> {user}</p>
        <p className="message"> {text} </p>
      </div>
    );
  }
};

export default Message;
