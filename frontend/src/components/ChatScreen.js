import React from "react";
import InputToolBar from "./InputToolBar";
import ChatHeader from "./ChatHeader";
import SideBar from "./SideBar";
import Messages from "./Messages";
import { messages } from "../messages";

const ChatScreen = (props) => {
  return (
    <div className="chat-screen">
      <SideBar />
      <div className="chat">
        <ChatHeader />
        <Messages messages={messages} currentUser="David" />
        <InputToolBar />
      </div>
    </div>
  );
};

export default ChatScreen;
