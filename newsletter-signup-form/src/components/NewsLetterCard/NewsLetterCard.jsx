import React, { useState } from "react";
import CardImg from "../../assets/images/illustration-sign-up-desktop.svg";
import CardImgMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../../assets/images/icon-list.svg";
import FormInput from "../UI/FormInput/FormInput";
import Button from "../UI/Button/Button";

const NewsLetterCard = ({ onSuccess }) => {
  const [error, setError] = useState("");
  const [formData, setForData] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData) {
      setError("Valid email required");
      return;
    }

    if (!emailPattern.test(formData)) {
      setError("Enter valid email");
      return;
    }
    console.log("before form is submitted");
    setError("");
    onSuccess(formData);

    console.log("form submitted", formData);
  }

  return (
    <div
      className="bg-neutral-100 max-w-[58rem] drop-shadow-lg 
    rounded-xl text-dark-slate-grey"
    >
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="px-6 py-[2.5rem] lg:px-[4rem] lg:pt-[6.125rem] ">
          <h2 className="text-2xl font-bold sm:text-5xl pb-6">Stay updated!</h2>
          <p className="pb-6 text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex gap-4 items-center pb-[0.625rem]">
            <img src={iconList} alt="list icon" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex gap-4 items-center pb-[0.625rem]">
            <img src={iconList} alt="list icon" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex gap-4 items-center pb-[0.625rem]">
            <img src={iconList} alt="list icon" />
            <p>And much more!</p>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="">
              <FormInput
                label="Email address"
                error={error}
                value={formData}
                onChange={(event) => {
                  setForData(event.target.value);
                }}
              />
            </div>
            <div className="pt-6">
              <Button type="submit">Subscribe to monthly newsletter</Button>
            </div>
          </form>
        </div>

        <div className="rounded-b-lg sm:py-6 sm:pr-6">
          <picture>
            <source srcSet={CardImg} media="(width >= 640px)"></source>
            <img
              src={CardImgMobile}
              alt="newsletter illustration"
              className="w-full"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterCard;
