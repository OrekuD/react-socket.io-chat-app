import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, currentUser }) => {
  return (
    <ScrollToBottom className="messages">
      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            currentUser={currentUser}
          />
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default Messages;
