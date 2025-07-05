import React from "react";
import { Icon } from "./Icon";

const Footer = () => {
  return (
    <footer className="flex w-full gap-16 flex-col pb-12 justify-center items-center max-[887px]:gap-0 max-[887px]:pb-0">
      <div className=" w-full px-10 flex max-[887px]:flex-col-reverse max-[887px]:gap-10 justify-between items-center pb-6 border-b border-b-[#313132]">
        <p className=" text-sm font-normal text-fluentWhite">
          © 2025 fluentshop . All rights reserved
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
      <div className="w-full">
        <Icon.FooterLogo className="w-full" />
      </div>
    </footer>
  );
};

export default Footer;
