import React from "react";
import Button from "../../UI/Button";
import logo from "../../../assets/images/logo-dark.svg";

const Header = () => {
  return (
    <header>
      <div className="wrapper flex justify-between items-center p-4 md:p-6">
        <img
          className="w-[4.9375rem] h-[1.25rem] md:w-[6.9375rem] md:h-[1.75rem]"
          src={logo}
          alt="logo"
        />
        <Button className="bg-blue-900 text-white hover:bg-blue-600">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
