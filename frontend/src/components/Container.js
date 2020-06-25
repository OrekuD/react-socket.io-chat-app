import React from "react";

const Container = ({ children }) => {
  const height = window.innerHeight;
  return (
    <div className="container" style={{ height }}>
      {children}
    </div>
  );
};
export default Container;
