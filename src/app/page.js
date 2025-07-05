"use client";

import Footer from "@/components/Footer";
import CreateSection from "@/components/Landing/create-section/CreateSection";
import DreamSection from "@/components/Landing/dream-section/DreamSection";
import GridSection from "@/components/Landing/grid-section/GridSection";
import Hero from "@/components/Landing/Hero/Hero";
import WaitlistSection from "@/components/Landing/waitlist-section/WaitlistSection";
import Navbar from "@/components/Navbar";
import React, { useRef, useEffect, useState } from "react";

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "-50px 0px", // Trigger slightly before element comes into view
      }
    );

    // Get all sections to observe
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
};

// Animation wrapper component
const AnimatedSection = ({
  children,
  id,
  animation = "fade-up",
  delay = 0,
  className = "",
}) => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has(id);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
      case "fade-down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8";
      case "fade-left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8";
      case "fade-right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-8";
      case "scale-up":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      id={id}
      data-animate
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

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

      <AnimatedSection id="hero" animation="fade-in">
        <Hero />
      </AnimatedSection>

      <div className="max-w-[1440px] relative mx-auto overflow-x-hidden">
        <AnimatedSection id="create-section" animation="fade-up" delay={100}>
          <CreateSection />
        </AnimatedSection>

        <AnimatedSection id="grid-section" animation="fade-up" delay={200}>
          <GridSection />
        </AnimatedSection>

        <AnimatedSection id="dream-section" animation="fade-up" delay={300}>
          <DreamSection />
        </AnimatedSection>

        <AnimatedSection id="waitlist-section" animation="scale-up" delay={400}>
          <section ref={joinWaitlistRef}>
            <WaitlistSection />
          </section>
        </AnimatedSection>

        <AnimatedSection id="footer" animation="fade-up" delay={500}>
          <Footer />
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;
