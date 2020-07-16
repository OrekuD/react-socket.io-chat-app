import React, { useEffect } from "react";
import "./App.scss";
import ChatScreen from "./routes/ChatScreen";
import Join from "./routes/Join";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    let viewportHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
      "--viewportHeight",
      `${viewportHeight}px`
    );
  });

  return (
    <BrowserRouter>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={ChatScreen} />
    </BrowserRouter>
  );
}

export default App;
