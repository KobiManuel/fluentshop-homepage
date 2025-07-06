"use client";
import { Icon } from "@/components/Icon";
import StardustGlow from "@/components/StardustGlow/StardustGlow";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import avatars from "@/../public/assets/images/dream-avatar.png";
import Toast from "@/components/Toast";

const WaitlistSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const decemberFirst = new Date(currentYear, 11, 1); // Month is 0-indexed, so 11 = December

      // If December 1st has already passed this year, target next year's December
      const targetDate =
        now > decemberFirst ? new Date(currentYear + 1, 11, 1) : decemberFirst;

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const handleSubmitFormspree = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) {
      setToastType("error");
      setToastTitle("Missing Email");
      setToastDescription("Please enter your email.");
      setShowToast(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xgvybnky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setToastType("success");
        setToastTitle("Success!");
        setToastDescription("Thanks for joining our waitlist!");
        setShowToast(true);
        e.target.reset();
      } else {
        setToastType("error");
        setToastTitle("Submission Failed");
        setToastDescription(
          "There was a problem submitting your email. Please try again."
        );
        setShowToast(true);
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setToastType("error");
      setToastTitle("Error");
      setToastDescription("Something went wrong. Please try again.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Toast
        isVisible={showToast}
        type={toastType}
        title={toastTitle}
        description={toastDescription}
        onClose={() => setShowToast(false)}
        duration={5000}
        position="top-right"
      />
      <section className="pt-[96px] max-[887px]:pt-16 max-[887px]:px-4 pb-16 px-10 max-[887px]:px-0 flex flex-col items-center justify-center gap-16 relative">
        <Icon.Looper3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-180 transition-transform" />

        <div className="h-full flex flex-col gap-16 items-center justify-center mt-[92px]">
          <StardustGlow />
          <header className="flex flex-col gap-6 max-[887px]:gap-4  text-fluentWhite font-gs w-[60%] max-[887px]:w-[90%] text-center">
            <h1 className="max-[887px]:text-3xl max-[887px]:!leading-[38px] w-fit  relative font-medium text-6xl !leading-[72px]">
              Be a Pioneer in the AI Marketplace Revolution{" "}
              <Icon.Sparkle className="absolute bottom-3 right-0 max-[887px]:top-0 max-[887px]:-right-6 " />
              <Icon.Sparkle className="absolute bottom-3 left-0 max-[887px]:top-0 max-[887px]:-left-6  " />
            </h1>
            <h6 className="text-xl max-[887px]:text-lg font-normal text-light-grey-100 ">
              Sign up now to get early access and be among the first to
              experience the future of selling.{" "}
            </h6>
          </header>
        </div>
        <div className="flex flex-col gap-6 max-[887px]:w-full">
          <form
            onSubmit={handleSubmitFormspree}
            style={{
              backdropFilter: "blur(40px)",
              boxShadow: `
                    inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
                    inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
                  `,
            }}
            className="w-[500px] max-[887px]:w-full h-16 rounded-[100px] max-[887px]:pl-2 max-[887px]:max-h-[60px]  flex relative p-[10px] pl-6 justify-between items-center bg-[#181818]"
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
              name="email"
              className="flex-1 font-gs font-medium text-base max-[887px]:text-sm max-[887px]:placeholder:text-sm placeholder:text-lg text-fluentWhite placeholder:text-light-grey-300 bg-transparent outline-none border-0"
              placeholder="Email"
              disabled={loading}
            />
            <button
              type="submit"
              style={{ boxShadow: "0px 5px 40px 0px rgba(197, 117, 249, 0.5)" }}
              className="max-[887px]:max-h-10 max-[887px]:text-sm w-[130.97px] max-[887px]:w-[120px]  bg-white rounded-[100px] py-[10px] px-[18px] font-gs text-base font-semibold text-black z-10 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="black"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="black"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </form>
          <div className="flex items-center gap-3 w-fit mx-auto max-[887px]:flex-col">
            <Image
              src={avatars}
              alt="/avatars"
              className="object-contain h-8 w-[128px]"
            />
            <p className=" font-gs text-xl font-normal text-light-grey-300 max-[887px]:text-sm">
              Join 500+ sellers on the waitlist
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-center">
            <button
              style={{
                boxShadow: "0px -5px 40px 0px rgba(197, 117, 249, 0.5)",
              }}
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
              className=" h-[86px] max-[887px]:w-full max-[887px]:max-w-full max-[887px]:!max-h-[72px] max-[887px]:!p-10 rounded-[100px]  flex relative p-[10px] pl-6 justify-between items-center bg-[#181818]"
            >
              <div
                className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(-135deg, black 0%, transparent 30%, transparent 100%, black 100%)",
                }}
              />
              <div className="px-10 max-[887px]:px-0 flex flex-col items-center font-gs relative">
                <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite max-[887px]:text-2xl">
                  {timeLeft.days}
                </p>
                <p className="font-normal text-lg text-light-grey-300 max-[887px]:text-sm">
                  Days
                </p>
                <div
                  className="absolute  w-[2px] h-10 right-0 max-[887px]:-right-4 top-1/2 -translate-y-1/2"
                  style={connectorStyle}
                />
              </div>
              <div className="px-10 max-[887px]:px-0 flex flex-col items-center font-gs relative">
                <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite max-[887px]:text-2xl">
                  {timeLeft.hours}
                </p>
                <p className="font-normal text-lg text-light-grey-300 max-[887px]:text-sm">
                  Hours
                </p>
                <div
                  className="absolute  w-[2px] h-10 right-0 max-[887px]:-right-4 top-1/2 -translate-y-1/2"
                  style={connectorStyle}
                />
              </div>
              <div className="px-10 max-[887px]:px-0 flex flex-col items-center font-gs relative">
                <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite max-[887px]:text-2xl">
                  {timeLeft.minutes}
                </p>
                <p className="font-normal text-lg text-light-grey-300 max-[887px]:text-sm">
                  Minutes
                </p>
                <div
                  className="absolute  w-[2px] h-10 right-0 max-[887px]:-right-4 top-1/2 -translate-y-1/2"
                  style={connectorStyle}
                />
              </div>
              <div className="px-10 max-[887px]:px-0 flex flex-col items-center font-gs">
                <p className="text-[30px] leading-[38px] font-semibold text-fluentWhite max-[887px]:text-2xl">
                  {timeLeft.seconds}
                </p>
                <p className="font-normal text-lg text-light-grey-300 max-[887px]:text-sm">
                  Seconds
                </p>
              </div>
            </div>
          </div>
          <p className="font-gs font-normal text-lg text-light-grey-300 max-[887px]:text-sm text-center w-[80%] mx-auto">
            Early sign-ups can claim their store name and get priority access to
            premium features.
          </p>
        </div>
      </section>
    </>
  );
};

export default WaitlistSection;
