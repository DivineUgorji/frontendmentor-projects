import React from "react";
import logo from "../../assets/images/logo.svg";
import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <section className="wrapper flex flex-col items-center text-center pt-[8rem]">
      <img src={logo} alt="logo" className="w-[125px] h-[125px]" />
      <h1 className="font-normal text-fs-1 pt-[3.5rem]">
        A history of everything you copy
      </h1>
      <p className="pt-4">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex flex-col md:flex-row justify-center w-full gap-4 items-center pt-[3rem]">
        <Button className="bg-strong-cyan text-white hover:opacity-75">
          Download for IOS
        </Button>
        <Button className="bg-light-blue text-white hover:opacity-75">
          Download for Mac
        </Button>
      </div>
    </section>
  );
};

export default Hero;
