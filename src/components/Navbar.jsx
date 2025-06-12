import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute z-10 h-[92px] w-full py-6 px-10 flex items-center justify-between">
      <h6 className="text-white font-cg font-medium text-2xl">fluentshop.ai</h6>
      <button
        style={{ boxShadow: "0px 1px 2px 0px rgba(116, 116, 121, 0.05)" }}
        className="w-[131px] h-[44px] font-gs text-base text-black font-semibold rounded-[100px] bg-fluentWhite flex items-center justify-center border border-fluentWhite"
      >
        Join Waitlist
      </button>
    </nav>
  );
};

export default Navbar;
