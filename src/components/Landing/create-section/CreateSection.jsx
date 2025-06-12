import React from "react";
import storeManagement from "@/../public/assets/images/store-management.png";
import Image from "next/image";
import businessInformation from "@/../public/assets/images/business-information.png";
import { Icon } from "@/components/Icon";

const CreateSection = () => {
  return (
    <section className="pt-[96px] px-10 flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-6 text-center font-gs w-1/2">
        <h3 className="relative w-fit font-medium text-5xl text-fluentWhite">
          Create. Sell. Shine.
          <Icon.Sparkle className="absolute top-0 -right-8" />
          <Icon.Sparkle className="absolute top-0 -left-8" />
        </h3>
        <p className="font-normal text-2xl text-light-grey-300">
          In a few minutes you can go from an idea to a live store.
        </p>
      </div>
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col gap-6 w-[60%]">
          <div
            style={{
              backdropFilter: "blur(40px)",
              boxShadow: `
              inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
              inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
            `,
              background: `
    radial-gradient(ellipse 50% 100% at top left, 
      rgba(115, 58, 248, 0.2) 0%, 

      transparent 100%
    ),
    rgba(17, 17, 17, 0.24)
  `,
            }}
            className="p-10 w-full rounded-[40px]  flex flex-col gap-8 items-center justify-center relative"
          >
            <div
              className="absolute inset-0 rounded-[40px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
              }}
            />
            <div className="flex flex-col gap-3">
              <h6 className="font-gs font-medium text-[30px] leading-[38px] text-fluentWhite">
                Your storefront, your spotlight!{" "}
              </h6>
              <p className="font-gs font-normal text-[20px] leading-[30px] text-light-grey-300">
                Set up your shop in minutes. no fuss, no stress. Just you, your
                products, and a sleek online store ready to roll!
              </p>
            </div>
            <Image
              src={businessInformation}
              alt="business-information"
              className="object-contain w-[90%] mx-auto"
            />
          </div>
          <div
            className="p-10 w-full rounded-[40px] h-[428.65px] flex flex-col gap-8 items-center justify-center relative"
            style={{
              backdropFilter: "blur(40px)",
              boxShadow: `
                inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
                inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
              `,
              background: `
      radial-gradient(ellipse 80% 100% at 400px 450px, 
        rgba(115, 58, 248, 0.2) 0%, 
        rgba(197, 117, 249, 0.1) 60%, 

        transparent 100%
      ),
      rgba(17, 17, 17, 0.24)
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
            <Icon.AiIconBlack />
            <Icon.SoundWave />
            <div className="flex flex-col gap-3">
              <h6 className="font-gs font-medium text-[30px] leading-[38px] text-fluentWhite">
                Our AI assistant, Irene, is always ready for you.
              </h6>
              <p className="font-gs font-normal text-[20px] leading-[30px] text-light-grey-300">
                Stuck on what to say? Need content ideas? Fluent’s AI has your
                back helping you market like a pro, anytime!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backdropFilter: "blur(40px)",
            boxShadow: `
                  inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
                  inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
                `,
            background: `
        radial-gradient(ellipse 50% 100% at top left, 
      rgba(254, 249, 255, 0.2) 0%,     
          transparent 100%
        ),
        rgba(17, 17, 17, 0.24)
      `,
          }}
          className="p-10 w-[40%] rounded-[40px]  flex flex-col gap-8 items-center relative "
        >
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{
              background:
                "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
            }}
          />
          <div className="flex flex-col gap-3">
            <h6 className="font-gs font-medium text-[30px] leading-[38px] text-fluentWhite">
              List & sell with ease!{" "}
            </h6>
            <p className="font-gs font-normal text-[20px] leading-[30px] text-light-grey-300">
              Add your products, customize your shop, and start selling. smooth,
              simple, and all yours!
            </p>
          </div>

          <Image
            src={storeManagement}
            alt="store-management"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateSection;
