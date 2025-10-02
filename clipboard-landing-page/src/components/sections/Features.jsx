import React from "react";
import featureImg from "../../assets/images/image-computer.png";
import { features } from "../../../contents";

const Features = () => {
  return (
    <section className="grid py-[9.375rem]">
      <div className="wrapper text-center justify-self-center mb-[4.065rem] md:mb-[8rem]">
        <h2 className="font-normal text-fs-2 mb-4">
          Keep track of your snippets
        </h2>
        <p className="text-fs-4">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      <div className="wrapper wrapper-md relative grid grid-cols-1 gap-y-[3.5rem] md:grid-cols-[repeat(2,1fr)] md:items-center">
        <div className="">
          <img
            src={featureImg}
            alt="desktop computer screen"
            className="justify-self-center md:absolute md:left-0 md:translate-x-[-25%] 
            md:translate-y-[-42%] w-[312px] h-[238px] md:w-[512px] 
            md:h-[450px] lg:w-[752px] lg:h-[572px]"
          />
        </div>

        <ul
          className="space-y-[3rem] md:space-y-[2rem] lg:space-y-[3.5rem] md:pl-[2rem] lg:pl-[6.875rem] 
        justify-self-center text-center md:text-left"
        >
          {features.map((feature) => (
            <li key={feature.id}>
              <h3 className="font-normal text-fs-3 mb-2">{feature.title}</h3>
              <p className="text-fs-4">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
