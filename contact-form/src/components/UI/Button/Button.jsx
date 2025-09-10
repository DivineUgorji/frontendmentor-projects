import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Button = ({ children, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.95 }}
      className={`block py-4 w-full font-bold rounded-xl cursor-pointer ${className}`}
    >
      <span> {children}</span>
    </motion.button>
  );
};

export default Button;
