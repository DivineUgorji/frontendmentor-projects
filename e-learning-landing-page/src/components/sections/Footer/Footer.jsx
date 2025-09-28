import React from "react";
import footerIcon from "@assets/images/logo-light.svg";
import Button from "../../UI/Button";

const Footer = () => {
  return (
    <footer className="bg-blue-900">
      <div className="wrapper py-6">
        <div className=" flex justify-between items-center">
          <img
            src={footerIcon}
            className="w-[4.9375rem] h-[1.25rem] md:w-[6.9375rem] md:h-[1.75rem]"
          />
          <Button className="bg-gradient-purple text-white hover:opacity-[0.75]">
            Get Started
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
