import React from "react";
import banner1 from "../../../../public/assets/images/grid-image1.png";
import banner2 from "../../../../public/assets/images/grid-image2.png";
import banner3 from "../../../../public/assets/images/grid-image3.png";
import Image from "next/image";
import banner4 from "../../../../public/assets/images/grid-image4.png";
import banner5 from "../../../../public/assets/images/grid-image5.png";
import banner6 from "../../../../public/assets/images/grid-image6.png";
import banner7 from "../../../../public/assets/images/grid-image7.png";
import banner8 from "../../../../public/assets/images/grid-image8.png";
import banner9 from "../../../../public/assets/images/grid-image9.png";

const GridSection = () => {
  return (
    <section className="px-10 pb-[96px] flex items-center justify-between mt-[24.35px]">
      <div
        className="p-10 w-full rounded-[40px] relative flex justify-between items-end gap-5"
        style={{
          backdropFilter: "blur(40px)",
          boxShadow: `
      inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
      inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
    `,
        }}
      >
        <div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
          }}
        />
        <div className="flex flex-col gap-[24.35px] w-[35%] ">
          <div className="flex flex-col gap-3">
            <h6 className="font-gs font-medium text-[30px] leading-[38px] text-fluentWhite">
              Showcase your products like a pro!{" "}
            </h6>
            <p className="font-gs font-normal text-[20px] leading-[30px] text-light-grey-300">
              Showcase your products, and sell anywhere online
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <Image src={banner1} alt="/" className="object-contain w-1/2" />
            <div className="flex flex-col gap-5 w-1/2">
              <Image src={banner2} alt="/" className="object-contain" />
              <Image src={banner3} alt="/" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-between gap-5 items-end">
          <div className="flex flex-col gap-5">
            <Image src={banner4} alt="/" className="object-contain" />
            <Image src={banner5} alt="/" className="object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            <Image src={banner6} alt="/" className="object-contain" />
            <Image src={banner7} alt="/" className="object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            <Image src={banner8} alt="/" className="object-contain" />
            <Image src={banner9} alt="/" className="object-contain" />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default GridSection;
