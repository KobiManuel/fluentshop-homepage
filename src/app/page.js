"use client";

import Footer from "@/components/Footer";
import CreateSection from "@/components/Landing/create-section/CreateSection";
import DreamSection from "@/components/Landing/dream-section/DreamSection";
import GridSection from "@/components/Landing/grid-section/GridSection";
import Hero from "@/components/Landing/Hero/Hero";
import WaitlistSection from "@/components/Landing/waitlist-section/WaitlistSection";
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";

const Home = () => {
  const joinWaitlistRef = useRef(null);

  const scrollToJoinWaitlist = () => {
    if (joinWaitlistRef.current) {
      joinWaitlistRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar scrollToJoinWaitlist={scrollToJoinWaitlist} />
      <Hero />

      <div className="max-w-[1440px] relative mx-auto overflow-x-hidden">
        <CreateSection />
        <GridSection />
        <DreamSection />
        <section ref={joinWaitlistRef}>
          <WaitlistSection />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
