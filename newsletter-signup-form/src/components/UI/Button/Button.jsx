import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <div>
      <motion.button
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 1.5 }}
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.01, ease: "easeOut" },
        }}
        whileTap={{ scale: 1.5, transition: { duration: 0.01 } }}
        className={`w-full flex flex-col items-center bg-dark-slate-grey hover:bg-linear-to-r from-bg-gradient to-grdient-two hover:drop-shadow-2xl transition-all duration-300 ease-in-out text-neutral-100 
          px-2 py-4 font-bold text-xs sm:font-semibold sm:text-lg rounded-xl  ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default Button;
