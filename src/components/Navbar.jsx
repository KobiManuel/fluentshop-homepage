import React from "react";

const Navbar = ({ scrollToJoinWaitlist }) => {
  return (
    <nav className="!max-w-[1440px] !mx-auto left-1/2 -translate-x-1/2  absolute z-10 h-[92px] w-full py-6 max-[887px]:px-4 px-10 flex items-center justify-between">
      <h6 className="max-[887px]:text-xl  text-white font-cg font-medium text-2xl">
        fluentshop
      </h6>
      <button
        onClick={scrollToJoinWaitlist}
        style={{ boxShadow: "0px 5px 40px 0px rgba(197, 117, 249, 0.5)" }}
        className="w-[131px] h-[44px] max-[887px]:w-[116px] max-[887px]:h-10 max-[887px]:text-sm cursor-pointer font-gs text-base text-black font-semibold rounded-[100px] bg-fluentWhite flex items-center justify-center border border-fluentWhite"
      >
        Join Waitlist
      </button>
    </nav>
  );
};

export default Navbar;
