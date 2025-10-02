import React from "react";
import { brandLogos } from "../../../contents";
import Button from "../UI/Button/Button";
const CustomerBrands = () => {
  return (
    <section className="wrapper">
      <ul
        className="flex flex-col md:flex-row gap-x-8 gap-y-16 
      justify-center items-center pb-[5.625rem] md:pb-[9.375rem]"
      >
        {brandLogos.map((brandLogos) => (
          <li key={brandLogos.id} className="">
            <img src={brandLogos.icon} alt={brandLogos.alt} className="" />
          </li>
        ))}
      </ul>
      <div className="grid place-content-center text-center pb-[5.625rem] md:pb-[9.375rem]">
        <h2 className="font-normal text-fs-2">Clipboard for iOS and Mac OS</h2>
        <p className="pt-4.5">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col md:flex-row gap-6 pt-[3rem]">
          <Button className="bg-strong-cyan hover:opacity-75">
            Download for iOS
          </Button>
          <Button className="bg-light-blue hover:opacity-75">
            Download for Mac
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerBrands;
