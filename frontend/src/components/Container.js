import React, { useEffect } from "react";
import gsap from "gsap";

const Container = ({ children }) => {
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(".circle-1", {
      duration: 4,
      top: Math.floor(Math.random() * window.innerHeight),
      left: Math.floor(Math.random() * window.innerWidth),
      repeat: true,
      yoyo: true,
      repeatDelay: 0,
      onComplete: animation,
    }).to(".circle-2", {
      delay: -2,
      duration: 4,
      top: Math.floor(Math.random() * window.innerHeight),
      left: Math.floor(Math.random() * window.innerWidth),
      repeat: true,
      yoyo: true,
      repeatDelay: 0,
      onComplete: animation,
    });
  };

  useEffect(() => {
    // animation();
  }, []);

  return (
    <div className="container">
      {/* <div className="circle-1" />
      <div className="circle-2" /> */}
      <div className="content">{children}</div>
    </div>
  );
};
export default Container;
