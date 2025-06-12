import StardustGlow from "@/components/StardustGlow/StardustGlow";
import React from "react";
import banner from "@/../public/assets/images/hero-banner.png";
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
  return (
    <>
      <section
        className="relative h-fit min-h-screen bg-cover bg-center bg-no-repeat pt-[96px]"
        style={{
          backdropFilter: "blur(40px)",
          boxShadow: `
            inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
            inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
          `,
          background: `
  radial-gradient(ellipse 50% 100% at center 80%, 
    rgba(115, 58, 248, 0.2) 40%, 

    transparent 100%
  ),
  rgba(17, 17, 17, 0.24)
`,
        }}
        // style={{
        //   backgroundImage: "url('/assets/images/hero-linear.png')",
        //   backgroundPosition: "center top",
        // }}
      >
        <div className="h-full flex flex-col gap-16 items-center justify-center mt-[92px]">
          <StardustGlow />
          <header className="flex flex-col gap-6 text-center text-fluentWhite font-gs">
            <h1 className="font-medium text-6xl !leading-[72px]">
              Setup your Shop with AI.{" "}
            </h1>
            <h6 className="text-xl font-normal text-light-grey-100 ">
              Create your store, add products and start selling in a few minutes
            </h6>
          </header>
          <Image
            src={banner}
            alt="banner-image"
            className=" object-contain w-[70%]"
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
      <section className="relative py-[96px] px-10 flex flex-col items-center justify-center gap-16">
        <Icon.ConcentricCircles className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-180 transition-transform" />
        <div className="relative flex flex-col gap-6 text-center font-gs w-1/2">
          <h3 className=" font-medium text-5xl text-fluentWhite">
            Fluentshop is for creators, entrepreneurs, coaches, freelancers,
            self-starters.
          </h3>
          <p className="font-normal text-2xl text-light-grey-300">
            No more messy and endless workflows, if you can dream it, we can
            build it, and manage it for you.
          </p>
          <Icon.Sparkle className="absolute top-0 right-0" />

          <Icon.Sparkle className="absolute bottom-0 left-0" />
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
