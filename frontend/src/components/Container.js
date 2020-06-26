import React from "react";

const Container = ({ children }) => {
  const height = window.innerHeight;
  return <div className="container">{children}</div>;
};
export default Container;
