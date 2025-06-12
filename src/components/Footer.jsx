import React from "react";
import { Icon } from "./Icon";

const Footer = () => {
  return (
    <footer className="flex gap-16 flex-col pb-12 justify-center items-center">
      <div className=" px-10 flex justify-between items-center pb-6 border-b border-b-[#313132]">
        <p className=" text-sm font-normal text-fluentWhite">
          © 2025 fluentshop.ai . All rights reserved
        </p>
        <div className="flex gap-3 items-center">
          <button className="hover:opacity-50">
            <Icon.InstagramButton />
          </button>
          <button className="hover:opacity-50">
            <Icon.TwitterButton />
          </button>
        </div>
      </div>
      <Icon.FooterLogo />
    </footer>
  );
};

export default Footer;
