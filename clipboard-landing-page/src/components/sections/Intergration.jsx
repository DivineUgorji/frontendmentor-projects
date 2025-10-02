import React from "react";
import { intergrations } from "../../../contents";

const Intergration = () => {
  return (
    <section className="wrapper pb-[9.375rem]">
      <div className=" grid place-content-center text-center">
        <h2 className="font-normal text-fs-2">Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
      </div>
      <ul className="flex flex-col md:flex-row gap-[2rem] text-center pt-[5.625rem] md:pt-[6.875rem]">
        {intergrations.map((intergration) => (
          <li key={intergration.id} className="flex flex-col items-center">
            <img src={intergration.icon} alt="" className="w-[44px] h-[40px]" />
            <h3 className="font-normal text-fs-3 pt-[2.5rem]">
              {intergration.title}
            </h3>
            <p className="pt-4">{intergration.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Intergration;
