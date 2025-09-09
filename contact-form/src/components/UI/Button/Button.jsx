import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`w-full py-4 px-[18.5rem] font-bold rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
