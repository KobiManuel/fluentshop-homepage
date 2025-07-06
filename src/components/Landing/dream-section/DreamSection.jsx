import { Icon } from "@/components/Icon";
import React, { useEffect, useRef, useState } from "react";
import banner from "@/../public/assets/images/dream-banner.png";
import banner2 from "@/../public/assets/images/dream-banner2.png";
import banner3 from "@/../public/assets/images/dream-banner3.png";
import banner4 from "@/../public/assets/images/dream-banner4.png";
import banner5 from "@/../public/assets/images/dream-banner5.png";
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
          style={isActive ? iconStyle : {}}
          className=" shrink-0 w-10 h-10 rounded-[12px] flex items-center justify-center border border-dark-grey-300 relative"
        >
          <IconComponent className={isActive ? "*:stroke-fluentWhite" : ""} />
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

const MobileStepItem = ({
  icon: IconComponent,
  title,
  text,
  banner,
  isActive,
  iconStyle,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <div
          style={isActive ? iconStyle : {}}
          className=" shrink-0 w-10 h-10 rounded-[12px] flex items-center justify-center border border-dark-grey-300"
        >
          <IconComponent className={isActive ? "*:stroke-fluentWhite" : ""} />
        </div>
        <p
          className={`font-gs font-medium text-2xl leading-8 ${
            isActive ? "text-fluentWhite" : "text-light-grey-300"
          }`}
        >
          {title}
        </p>
      </div>
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
        className="px-6 py-8 rounded-[20px] flex flex-col gap-6 items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none"
          style={{
            background:
              "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
          }}
        />
        <h6 className="font-gs font-normal text-fluentWhite text-xl leading-[30px] text-center z-10">
          {text}
        </h6>
        <div className="relative w-full h-auto min-h-[200px]">
          <Image
            src={banner}
            alt={`banner-${title}`}
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

const DreamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState({
    step0: 100,
    step1: 0,
    step2: 0,
    step3: 0,
    step4: 0,
  });
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const timerRef = useRef(null);

  const stepContent = [
    {
      text: "Need a hand? Our AI helps with everything from product ideas to content creation in seconds",
      banner: banner,
    },
    {
      text: "Manage your entire store effortlessly with our intuitive dashboard and automated tools",
      banner: banner2,
    },
    {
      text: "Track your performance with detailed analytics and insights to grow your business",
      banner: banner3,
    },
    {
      text: "Create engaging content that converts with our powerful content creation tools",
      banner: banner4,
    },
    {
      text: "Connect with other creators, share ideas, and grow together in our community hub",
      banner: banner5,
    },
  ];

  const steps = [
    {
      icon: Icon.VoiceCircle,
      title: "AI-Powered Assistance",
      isActive: currentStep === 0,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
    {
      icon: Icon.Shop,
      title: "Effortless Store Management",
      isActive: currentStep === 1,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
    {
      icon: Icon.ChartSquare,
      title: "Sales Analytics",
      isActive: currentStep === 2,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
    {
      icon: Icon.Love,
      title: "Engaging Content Creation",
      isActive: currentStep === 3,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
    {
      icon: Icon.Smileys,
      title: "Creator's Hub",
      isActive: currentStep === 4,
      iconStyle: {
        background:
          "linear-gradient(225deg, #F9F7FD 0%, #C575F9 50%, #733AF8 100%)",
      },
    },
  ];

  // Intersection Observer for visibility (Desktop and Mobile)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start timer for desktop animation
          if (window.innerWidth > 887) {
            timerRef.current = setInterval(() => {
              setCurrentStep((prev) => {
                const nextStep = prev + 1;
                if (nextStep >= steps.length) {
                  clearInterval(timerRef.current);
                  return prev;
                }
                setProgress((prevProgress) => ({
                  ...prevProgress,
                  [`step${nextStep}`]: 100,
                }));
                return nextStep;
              });
            }, 3000); // Change step every 3 seconds
          }
        } else {
          setIsVisible(false);
          // Reset animation when section leaves view
          setCurrentStep(0);
          setProgress({
            step0: 100,
            step1: 0,
            step2: 0,
            step3: 0,
            step4: 0,
          });
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = containerRef.current?.querySelector(".min-h-screen");

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Mobile Intersection Observer for step activation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(
            entry.target.getAttribute("data-step-index")
          );
          setCurrentStep(stepIndex);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (mobileContainerRef.current && window.innerWidth <= 887) {
      const stepElements =
        mobileContainerRef.current.querySelectorAll("[data-step-index]");
      stepElements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="py-[96px] max-[887px]:py-16 max-[887px]:px-4 px-10 flex flex-col items-center justify-center gap-16"
      ref={containerRef}
    >
      <div className="flex flex-col items-center gap-6 text-center font-gs w-full max-[887px]:gap-0">
        <h3 className="font-medium text-5xl text-fluentWhite max-[887px]:text-3xl">
          Why Fluent?
        </h3>
        <h3 className="relative w-fit font-medium text-5xl text-fluentWhite max-[887px]:text-3xl">
          You can dream it, we can build it.
          <Icon.Sparkle className="absolute bottom-0 -right-10 max-[887px]:-right-4 max-[887px]:top-0" />
          <Icon.Sparkle className="absolute bottom-0 -left-10 max-[887px]:-left-4 max-[887px]:top-0" />
        </h3>
      </div>

      {/* Desktop Layout */}
      <div className="hidden max-[887px]:hidden min-[888px]:flex justify-between items-center w-full gap-10 min-h-screen max-h-screen">
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
          className="px-10 w-[60%] h-screen rounded-[40px] flex flex-col gap-16 items-center justify-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{
              background:
                "linear-gradient(-135deg, black 0%, transparent 30%, transparent 70%, black 100%)",
            }}
          />
          <h6
            className="font-gs font-normal text-fluentWhite text-3xl text-center transition-all duration-500 ease-in-out z-10"
            key={currentStep}
          >
            {stepContent[currentStep].text}
          </h6>
          <div className="relative w-[70%] h-auto min-h-[321px]">
            {stepContent.map((content, index) => (
              <Image
                key={index}
                src={content.banner}
                alt={`banner-${index + 1}`}
                className={`object-contain w-full absolute top-0 left-0 transition-all duration-700 ease-in-out ${
                  index === currentStep
                    ? "opacity-100 transform translate-x-0"
                    : index < currentStep
                    ? "opacity-0 transform -translate-x-full"
                    : "opacity-0 transform translate-x-full"
                }`}
                style={{
                  zIndex: index === currentStep ? 10 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="max-[887px]:flex min-[888px]:hidden flex-col gap-12 w-full"
        ref={mobileContainerRef}
      >
        {steps.map((step, index) => (
          <div key={index} data-step-index={index}>
            <MobileStepItem
              icon={step.icon}
              title={step.title}
              text={stepContent[index].text}
              banner={stepContent[index].banner}
              isActive={currentStep === index}
              iconStyle={step.iconStyle}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DreamSection;
