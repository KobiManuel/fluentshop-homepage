import StardustGlow from "@/components/StardustGlow/StardustGlow";
import React, { useState, useEffect } from "react";
import banner from "@/../public/assets/images/hero-banner2.png";
import mobileBanner from "@/../public/assets/images/hero-banner-mobile.png";

import Image from "next/image";
import { Icon } from "@/components/Icon";

const InfiniteMarquee = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {children}
          {children} {/* Duplicate for seamless looping */}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 887);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  console.log(isMobileScreen);

  return (
    <>
      <section
        className="relative h-fit min-h-screen bg-cover bg-center bg-no-repeat pt-[96px]"
        style={{
          backgroundImage: "url('/assets/images/hero-linear_optimized.png')",
          backgroundPosition: isMobileScreen ? "center 200px" : "center top",
        }}
      >
        <div className="max-w-[1440px] mx-auto  h-full flex flex-col gap-16 items-center justify-center mt-[92px]">
          <StardustGlow />
          <header className="max-[887px]:px-4 flex flex-col gap-6 max-[887px]:gap-4  text-center text-fluentWhite font-gs">
            <h1 className="max-[887px]:!text-4xl max-[887px]:!leading-[44px] font-medium text-6xl !leading-[72px]">
              Setup your Shop with AI.{" "}
            </h1>
            <h6 className="max-[887px]:text-lg text-center text-xl font-normal text-light-grey-100 ">
              Create your store, add products and start selling in a few minutes
            </h6>
          </header>
          <Image
            src={isMobileScreen ? mobileBanner : banner}
            alt="banner-image"
            className=" object-contain w-[70%] max-[570px]:w-full max-[570px]:px-4"
          />
        </div>
        <div
          className="absolute bottom-0 w-full h-[100px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, #111111 100%)",
          }}
        />
      </section>
      <section className="max-w-[1440px] max-[887px]:px-4 mx-auto relative py-[96px] max-[887px]:pt-16 px-10 flex flex-col items-center justify-center gap-16">
        <Icon.ConcentricCircles className="max-[887px]:top-16 max-[887px]:translate-y-0 max-[437px]:w-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-180 transition-transform" />
        <div className="relative flex flex-col gap-6 text-center font-gs w-1/2 max-[887px]:w-full">
          <h3 className="max-[887px]:text-3xl relative font-medium text-5xl text-fluentWhite">
            Fluentshop is for creators, entrepreneurs, coaches, freelancers,
            self-starters.
            <Icon.Sparkle className="absolute top-0 right-0 max-[887px]:-top-4" />
            <Icon.Sparkle className="absolute bottom-0 left-0 max-[887px]:-top-4 " />
          </h3>
          <p className="max-[887px]:text-lg font-normal text-2xl text-light-grey-300">
            No more messy and endless workflows, if you can dream it, we can
            build it, and manage it for you.
          </p>
        </div>

        {/* Replace Icon.TrustedBusinesses with the marquee version */}
        <div className="w-full">
          <InfiniteMarquee>
            <Icon.TrustedBusinesses className="inline-flex mx-8" />
          </InfiniteMarquee>
        </div>
      </section>
    </>
  );
};

export default Hero;
