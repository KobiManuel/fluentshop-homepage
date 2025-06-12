import { Icon } from "@/components/Icon";
import StardustGlow from "@/components/StardustGlow/StardustGlow";
import Image from "next/image";
import React from "react";
import avatars from "@/../public/assets/images/dream-avatar.png";

const WaitlistSection = () => {
  const connectorStyle = {
    backdropFilter: "blur(40px)",
    background: `
          radial-gradient(ellipse 50% 50% at center, 
            rgba(254, 249, 255, 0.2) 0%,     
            transparent 100%
          ),
          rgba(17, 17, 17, 0.24)
        `,
  };
  return (
    <section className="pt-[96px] pb-16 px-10 flex flex-col items-center justify-center gap-16 relative">
      <Icon.Looper3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-180 transition-transform" />

      <div className="h-full flex flex-col gap-16 items-center justify-center mt-[92px]">
        <StardustGlow />
        <header className="flex flex-col gap-6  text-fluentWhite font-gs w-[60%] text-center">
          <h1 className="w-fit  relative font-medium text-6xl !leading-[72px]">
            Be a Pioneer in the AI Marketplace Revolution{" "}
            <Icon.Sparkle className="absolute bottom-3 right-0" />
            <Icon.Sparkle className="absolute bottom-3 left-0" />
          </h1>
          <h6 className="text-xl font-normal text-light-grey-100 ">
            Sign up now to get early access and be among the first to experience
            the future of selling.{" "}
          </h6>
        </header>
      </div>
      <div className="flex flex-col gap-6">
        <div
          style={{
            backdropFilter: "blur(40px)",
            boxShadow: `
                    inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
                    inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
                  `,
          }}
          className="w-[500px] h-16 rounded-[100px]  flex relative p-[10px] pl-6 justify-between items-center bg-[#181818]"
        >
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{
              background:
                "linear-gradient(-135deg, black 0%, transparent 30%, transparent 100%, black 100%)",
            }}
          />
          <input
            type="email"
            className="flex-1 font-gs font-medium text-base placeholder:text-lg text-fluentWhite text-light-grey-300 bg-transparent outline-none border-0"
            placeholder="Email"
          />
          <button
            style={{ boxShadow: "0px 5px 40px 0px rgba(197, 117, 249, 0.5)" }}
            className="bg-white rounded-[100px] py-[10px] px-[18px] font-gs text-base font-semibold text-black z-10"
          >
            Join Waitlist
          </button>
        </div>
        <div className="flex items-center gap-3 w-fit mx-auto">
          <Image
            src={avatars}
            alt="/avatars"
            className="object-contain h-8 w-[128px]"
          />
          <p className=" font-gs text-xl font-normal text-light-grey-300">
            Join 500+ sellers on the waitlist
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-center">
          <button
            style={{ boxShadow: "0px -5px 40px 0px rgba(197, 117, 249, 0.5)" }}
            className="bg-white w-fit rounded-[100px] h-[30px] px-[14px] font-gs text-xs leading-[18px] font-semibold text-black z-10 flex justify-center items-center gap-2"
          >
            <Icon.Clock /> Left until full release{" "}
          </button>
          <div
            style={{
              backdropFilter: "blur(40px)",
              boxShadow: `
                    inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
                    inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
                  `,
            }}
            className=" h-[86px] rounded-[100px]  flex relative p-[10px] pl-6 justify-between items-center bg-[#181818]"
          >
            <div
              className="absolute inset-0 rounded-[40px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(-135deg, black 0%, transparent 30%, transparent 100%, black 100%)",
              }}
            />
            <div className="px-10 flex flex-col items-center font-gs relative">
              <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite">
                527
              </p>
              <p className="font-normal text-lg text-light-grey-300">Days</p>
              <div
                className="absolute  w-[2px] h-10 right-0 top-1/2 -translate-y-1/2"
                style={connectorStyle}
              />
            </div>
            <div className="px-10 flex flex-col items-center font-gs relative">
              <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite">
                1
              </p>
              <p className="font-normal text-lg text-light-grey-300">Hour</p>
              <div
                className="absolute  w-[2px] h-10 right-0 top-1/2 -translate-y-1/2"
                style={connectorStyle}
              />
            </div>
            <div className="px-10 flex flex-col items-center font-gs relative">
              <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite">
                29
              </p>
              <p className="font-normal text-lg text-light-grey-300">Minutes</p>
              <div
                className="absolute  w-[2px] h-10 right-0 top-1/2 -translate-y-1/2"
                style={connectorStyle}
              />
            </div>
            <div className="px-10 flex flex-col items-center font-gs">
              <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite">
                20
              </p>
              <p className="font-normal text-lg text-light-grey-300">Seconds</p>
            </div>
          </div>
        </div>
        <p className="font-gs font-normal text-lg text-light-grey-300 text-center w-[80%] mx-auto">
          Early sign-ups can claim their store name and get priority access to
          premium features.
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
