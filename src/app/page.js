import Footer from "@/components/Footer";
import CreateSection from "@/components/Landing/create-section/CreateSection";
import DreamSection from "@/components/Landing/dream-section/DreamSection";
import GridSection from "@/components/Landing/grid-section/GridSection";
import Hero from "@/components/Landing/Hero/Hero";
import WaitlistSection from "@/components/Landing/waitlist-section/WaitlistSection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="max-w-[1440px] relative mx-auto">
        <CreateSection />
        <GridSection />
        <DreamSection />
        <WaitlistSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
