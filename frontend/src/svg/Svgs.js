import React from "react";

export const ArrowRight = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
  >
    <path
      d="M21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72l-6-6z"
      fill={color}
    />
    <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
  </svg>
);
