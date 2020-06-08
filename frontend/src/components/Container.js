import React from "react";

const Container = ({ children }) => (
  <div className="container">
    <div className="circle-1" />
    <div className="content">{children}</div>
  </div>
);
export default Container;
