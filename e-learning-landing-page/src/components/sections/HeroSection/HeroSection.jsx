import React from "react";
import Button from "../../UI/Button";
import desktopHeroImg from "@assets/images/image-hero-desktop@2x.webp";
import tabletHeroImg from "@assets/images/image-hero-tablet@2x.webp";
import mobileHeroImg from "@assets/images/image-hero-mobile@2x.webp";

const HeroSection = () => {
  return (
    <section className="relative wrapper grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] py-[4rem]">
      <div className=" lg:py-[110px]">
        <h1 className="font-extrabold text-fs-1 pb-6">
          Maximize skill, minimize budget
        </h1>
        <p className="text-fs-5 ">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life <br /> you want.
        </p>
        <Button
          className="bg-gradient-pink text-white hover:opacity-[0.5] 
        transition-all duration-150 ease-in-out mt-[2.5rem] mb-[3rem]"
        >
          Get Started
        </Button>
      </div>

      <picture
        className="justify-self-center md:absolute md:right-0 
      md:translate-x-[42%] md:translate-y-[-22%] 
      md:-z-10 lg:translate-x-[43%] lg:translate-y-[-27%]"
      >
        <source
          srcset={desktopHeroImg}
          media="(width >= 1024px)"
          width="2092"
          height="1876"
        />

        <source
          srcset={tabletHeroImg}
          media="(width >= 768px)"
          width="695"
          height="723"
        />

        <img
          src={mobileHeroImg}
          alt="A woman with a mug and laptop"
          width="870"
          height="818"
        />
      </picture>
    </section>
  );
};

export default HeroSection;
