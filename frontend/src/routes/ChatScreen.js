import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";

import InputToolBar from "../components/InputToolBar";
// import ChatHeader from "../components/ChatHeader";
import Messages from "../components/Messages";
import { messages } from "../messages";
import Container from "../components/Container";
import SideBar from "../components/SideBar";

let socket;
const ChatScreen = ({ location }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    const { name, room } = queryString.parse(location.search);
    setRoom(room);
    setUsername(name);

    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

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
