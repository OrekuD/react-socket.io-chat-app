import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";

import InputToolBar from "../components/InputToolBar";
import Messages from "../components/Messages";
import Container from "../components/Container";
import SideBar from "../components/SideBar";
import ChatHeader from "../components/ChatHeader";

let socket;
const ChatScreen = ({ location }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomDetails, setRoomDetails] = useState({});

  // const ENDPOINT = "localhost:5000";

  const ENDPOINT = "https://react-socket-io-chat-app.herokuapp.com/";

  useEffect(() => {
    socket = io(ENDPOINT);
    const { name, room } = queryString.parse(location.search);
    setUsername(name);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomDetails", (roomDetails) => setRoomDetails(roomDetails));
  }, [roomDetails]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <Container>
      <SideBar roomDetails={roomDetails} />
      <div className="chat">
        <div className="mobile-only-header">
          <ChatHeader roomDetails={roomDetails} />
        </div>
        <Messages messages={messages} currentUser={username} />
        <InputToolBar
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </Container>
  );
};

export default ChatScreen;
