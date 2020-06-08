import React from "react";
import InputToolBar from "../components/InputToolBar";
import ChatHeader from "../components/ChatHeader";
import Messages from "../components/Messages";
import { messages } from "../messages";
import Container from "../components/Container";

const ChatScreen = (props) => {
  return (
    <Container>
      <div className="chat">
        <ChatHeader />
        <Messages messages={messages} currentUser="David" />
        <InputToolBar />
      </div>
    </Container>
  );
};

export default ChatScreen;
