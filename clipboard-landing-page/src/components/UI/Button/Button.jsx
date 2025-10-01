import React, { Children } from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`w-full md:max-w-fit cursor-pointer lg:px-[50px] md:px-[36px] py-[13px] rounded-[28px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
