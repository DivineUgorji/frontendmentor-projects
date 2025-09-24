import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`inline-block font-bold text-lg px-6 py-[10.5px] 
        md:px-8 md:py-4 cursor-pointer rounded-[28px]  hover:scale-110 hover:shadow-xl 
                   transition-all duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
