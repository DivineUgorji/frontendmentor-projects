import React from "react";
import footerLogo from "../../assets/images/logo.svg";
import { footerLinks, socialLinks } from "../../../contents";

const Footer = () => {
  return (
    <footer className="bg-off-white py-[3.25rem] sm:py-[3rem]">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center">
        <div>
          <a href="#">
            <img
              src={footerLogo}
              alt="logo"
              className="w-[35px] h-[35px] text-strong-cyan"
            />
          </a>
        </div>
        <ul className="flex flex-col sm:flex-row gap-x-5 gap-y-6 justify-center items-center text-center py-6 sm:py-12">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.id}>
              <a href="#">
                <p className="text-dark-grayish-blue hover:text-strong-cyan">
                  {footerLink.link}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <a href="#">
                <img
                  src={socialLink.icon}
                  alt="social link"
                  className="text-dark-grayish-blue hover:text-strong-cyan"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
