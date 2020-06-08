import React, { useEffect } from "react";
import io from "socket.io-client";

import InputToolBar from "../components/InputToolBar";
import ChatHeader from "../components/ChatHeader";
import Messages from "../components/Messages";
import { messages } from "../messages";
import Container from "../components/Container";
import SideBar from "../components/SideBar";

let socket;
const ChatScreen = (props) => {
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    console.log(socket);
  });

  return (
    <Container>
      <SideBar />
      <div className="chat">
        <Messages messages={messages} currentUser="David" />
        <InputToolBar />
      </div>
    </Container>
  );
};

export default ChatScreen;
