import { Icon } from "@/components/Icon";
import React from "react";
import banner from "@/../public/assets/images/dream-banner.png";
import Image from "next/image";

const StepperItem = ({
  icon: IconComponent,
  title,
  isActive,
  isLast,
  iconStyle,
}) => {
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
    <div
      className={`flex flex-col items-start mb-10 ${!isLast && "mb-[41px]"}`}
    >
      <div className="flex gap-3 items-center">
        <div
          style={iconStyle}
          className="w-10 h-10 rounded-[12px] flex items-center justify-center border border-dark-grey-300 relative"
        >
          <IconComponent className={isActive ? "*:stroke-fluentWhite" : ""} />
          {/* Connector line positioned absolutely to center of icon */}
          {!isLast && (
            <div
              className="absolute top-[calc(100%+2px)] left-1/2 w-[2px] h-[41px] -translate-x-1/2"
              style={connectorStyle}
            />
          )}
        </div>
        <p
          className={`font-gs font-medium text-3xl ${
            isActive ? "text-fluentWhite" : "text-light-grey-300"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

const Stepper = ({ steps }) => {
  return (
    <div className="flex-1 flex flex-col">
      {steps.map((step, index) => (
        <StepperItem
          key={index}
          icon={step.icon}
          title={step.title}
          isActive={step.isActive}
          isLast={index === steps.length - 1}
          iconStyle={step.iconStyle}
        />
      ))}
    </div>
  );
};

const DreamSection = () => {
  const steps = [
    {
      icon: Icon.VoiceCircle,
      title: "AI-Powered Assistance",
      isActive: true,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
    {
      icon: Icon.Shop,
      title: "Effortless Store Management",
      isActive: false,
      iconStyle: {},
    },
    {
      icon: Icon.ChartSquare,
      title: "Sales Analytics",
      isActive: false,
      iconStyle: {},
    },
    {
      icon: Icon.Love,
      title: "Engaging Content Creation",
      isActive: false,
      iconStyle: {},
    },
    {
      icon: Icon.Smileys,
      title: "Creator's Hub",
      isActive: false,
      iconStyle: {},
    },
  ];

  return (
    <section className="py-[96px] px-10 flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-6 text-center font-gs w-full">
        <h3 className="font-medium text-5xl text-fluentWhite">Why Fluent?</h3>
        <h3 className="relative w-fit font-medium text-5xl text-fluentWhite">
          You can dream it, we can build it.
          <Icon.Sparkle className="absolute bottom-0 -right-10" />
          <Icon.Sparkle className="absolute bottom-0 -left-10" />
        </h3>
      </div>
      <div className="flex justify-between w-full gap-10">
        <Stepper steps={steps} />

        <div
          style={{
            backdropFilter: "blur(40px)",
            boxShadow: `
            inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
            inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
          `,
            background: `
  radial-gradient(ellipse 50% 100% at bottom right, 
    rgba(115, 58, 248, 0.2) 0%, 

    transparent 100%
  ),
  rgba(17, 17, 17, 0.24)
`,
          }}
          className="px-10 w-[60%] h-[750px] rounded-[40px]  flex flex-col gap-16 items-center justify-center relative"
        >
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{
              background:
                "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
            }}
          />
          <h6 className="font-gs font-normal text-fluentWhite text-3xl text-center">
            Need a hand? Our AI helps with everything from product ideas to
            content creation in seconds
          </h6>
          <Image src={banner} alt="banner" className="object-contain w-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
