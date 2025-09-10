import React from "react";
import ToastIcon from "../../assets/images/icon-success-check.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Toast = ({ message, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:max-w-[30rem] 
    bg-grey-900 text-neutral-100 
    p-6 rounded-lg drop-shadow-lg"
      role="alert"
    >
      <div className="flex gap-2 pb-2">
        <img src={ToastIcon} alt="" />
        <p className="font-medium">{message}</p>
      </div>
      <p>
        Thanks <strong>{name}</strong> for completing the form. We’ll be in
        touch soon!
      </p>
    </motion.div>
  );
};

export default Toast;
