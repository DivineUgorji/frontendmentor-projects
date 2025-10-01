import React from "react";
import deviceImg from "../../assets/images/image-devices.png";

const AccessFeature = () => {
  return (
    <section className="wrapper flex flex-col items-center text-center md:pt-[9.375rem] pb-[9.375rem]">
      <div className="">
        <h2 className="font-normal text-fs-2">Access Clipboard Anywhere</h2>
        <p className="text-center pt-4">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div className="pt-[4rem] md:pt-[6.875rem]">
        <img
          src={deviceImg}
          alt="A phone slightly placed at the top of a laptop"
          className="w-[311px] h-[182px] md:w-[812px] md:h-auto"
        />
      </div>
    </section>
  );
};

export default AccessFeature;
