import React from "react";
import logo from "../../assets/images/logo.svg";
import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <div className="">
      <img src={logo} alt="logo" />
      <h1 className="font-medium text-fs-1">
        A history of everything you copy
      </h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex gap-4 items-center">
        <Button className="bg-strong-cyan text-white">Download for IOS</Button>
        <Button className="bg-light-blue text-white">Download for Mac</Button>
      </div>
    </div>
  );
};

export default Hero;
