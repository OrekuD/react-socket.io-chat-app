import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, currentUser }) => {
  return (
    <ScrollToBottom>
      <div className="messages">
        {messages.map((message) => (
          <Message message={message} currentUser={currentUser} />
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default Messages;
