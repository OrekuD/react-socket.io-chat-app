import React from "react";
import "./App.scss";
import ChatScreen from "./routes/ChatScreen";
import Join from "./routes/Join";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={ChatScreen} />
    </BrowserRouter>
  );
}

export default App;
