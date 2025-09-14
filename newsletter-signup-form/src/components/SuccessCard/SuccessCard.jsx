import React from "react";
import Button from "../UI/Button/Button";
import iconCheck from "../../assets/images/icon-success.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SuccessCard = ({ email, onDismiss }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid mx-auto bg-neutral-100 sm:rounded-xl px-4 pb-4 sm:px-[4rem] 
    sm:pb-[4rem] sm:drop-shadow-2xl max-w-[31.5rem] text-dark-slate-grey"
    >
      <img
        src={iconCheck}
        alt="success check icon"
        className="pb-[2.5rem] pt-[3rem]"
      />
      <p className="text-2xl sm:text-5xl font-bold pb-6">
        Thanks for subscribing!
      </p>
      <p className="pb-[6rem] sm:pb-[2.5rem]">
        A confirmation email has been sent to{" "}
        <span className="font-semibold">{email}</span> Please open it and click
        the button inside to confirm your subscription.
      </p>
      <Button
        onClick={() => {
          console.log("Dismiss clicked");
          onDismiss();
        }}
        className="self-end"
      >
        Dismiss message
      </Button>
    </motion.div>
  );
};

export default SuccessCard;
