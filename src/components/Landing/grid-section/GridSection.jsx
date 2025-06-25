"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import banner1 from "../../../../public/assets/images/grid-image1.png";
import banner2 from "../../../../public/assets/images/grid-image2.png";
import banner3 from "../../../../public/assets/images/grid-image3.png";
import banner4 from "../../../../public/assets/images/grid-image4.png";
import banner5 from "../../../../public/assets/images/grid-image5.png";
import banner6 from "../../../../public/assets/images/grid-image6.png";
import banner7 from "../../../../public/assets/images/grid-image7.png";
import banner8 from "../../../../public/assets/images/grid-image8.png";
import banner9 from "../../../../public/assets/images/grid-image9.png";

const GridSection = () => {
  const sectionRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            setIsVisible(true);
            if (!isAnimating) {
              triggerAnimation();
            }
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating]);

  const triggerAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Get current positions of all images
    const positions = imageRefs.current.map((imgRef) => {
      if (imgRef) {
        const rect = imgRef.getBoundingClientRect();
        return { x: rect.left, y: rect.top };
      }
      return { x: 0, y: 0 };
    });

    // Create a shuffled array of indices to determine new positions
    const shuffledIndices = [...Array(imageRefs.current.length).keys()];
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [
        shuffledIndices[j],
        shuffledIndices[i],
      ];
    }

    // Apply position swaps to each image
    imageRefs.current.forEach((imgRef, index) => {
      if (imgRef) {
        const currentPos = positions[index];
        const targetIndex = shuffledIndices[index];
        const targetPos = positions[targetIndex];

        // Calculate the translation needed to move to the target position
        const deltaX = targetPos.x - currentPos.x;
        const deltaY = targetPos.y - currentPos.y;
        const randomRotation = (Math.random() - 0.5) * 720; // More dramatic rotation

        imgRef.style.setProperty("--target-x", `${deltaX}px`);
        imgRef.style.setProperty("--target-y", `${deltaY}px`);
        imgRef.style.setProperty("--random-rotation", `${randomRotation}deg`);

        // Add animation class with staggered delay
        setTimeout(() => {
          imgRef.classList.add("animate-position-swap");
        }, index * 60);
      }
    });

    // Remove animation classes after completion
    setTimeout(() => {
      imageRefs.current.forEach((imgRef) => {
        if (imgRef) {
          imgRef.classList.remove("animate-position-swap");
        }
      });
      setIsAnimating(false);
    }, 6000);
  };

  const addImageRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  return (
    <>
      <style jsx>{`
        .animate-position-swap {
          animation: positionSwap 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
          z-index: 10;
        }

        @keyframes positionSwap {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateX(calc(var(--target-x, 0) * 0.3))
              translateY(calc(var(--target-y, 0) * 0.3))
              rotate(calc(var(--random-rotation, 0) * 0.5)) scale(1.05);
          }
          50% {
            transform: translateX(var(--target-x, 0))
              translateY(var(--target-y, 0)) rotate(0deg) scale(1.1);
          }
          75% {
            transform: translateX(calc(var(--target-x, 0) * 0.7))
              translateY(calc(var(--target-y, 0) * 0.7))
              rotate(calc(var(--random-rotation, 0) * -0.3)) scale(1.05);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
        }

        .image-container {
          position: relative;
          transition: all 0.9s ease;
        }

        .image-container img {
          transition: all 0.9s ease;
        }

        .status-indicator {
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: bold;
          z-index: 1000;
          transition: all 0.9s ease;
        }

        .status-visible {
          background: linear-gradient(45deg, #00ff88, #00ccff);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
        }

        .status-hidden {
          background: rgba(255, 255, 255, 0.9);
          color: #333;
        }
      `}</style>

      {/* Status Indicator */}
      {/* <div
        className={`status-indicator ${
          isVisible ? "status-visible" : "status-hidden"
        }`}
      >
        {isVisible
          ? "✨ Animating! (80%+ visible)"
          : "👁️ Section not 80% visible"}
      </div> */}

      <section
        ref={sectionRef}
        className="px-10 pb-[96px] max-[887px]:pb-16 max-[887px]:px-4 flex  items-center justify-between mt-[24.35px]"
      >
        <div
          className="p-10 max-[887px]:px-4 w-full rounded-[40px] relative flex max-[887px]:flex-col justify-between items-end gap-5"
          style={{
            backdropFilter: "blur(40px)",
            boxShadow: `
              inset 1px 1px 0 0 rgba(254, 249, 255, 0.2),
              inset -1px 0 0 0 rgba(254, 249, 255, 0.2)
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

          <div className="flex flex-col gap-[24.35px] w-[35%] max-[887px]:w-full">
            <div className="flex flex-col gap-3 z-10">
              <h6 className=" font-gs font-medium text-[30px] leading-[38px] text-white">
                Showcase your products like a pro!{" "}
              </h6>
              <p className="font-gs font-normal text-[20px] leading-[30px] text-gray-300">
                Showcase your products, and sell anywhere online
              </p>
            </div>

            <div className="flex gap-5 items-center">
              <div
                className="image-container w-1/2"
                ref={(el) => addImageRef(el, 0)}
              >
                <Image
                  src={banner1}
                  alt="Product showcase 1"
                  width={400}
                  height={300}
                  className="object-contain w-full"
                />
              </div>

              <div className="flex flex-col gap-5 w-1/2">
                <div
                  className="image-container"
                  ref={(el) => addImageRef(el, 1)}
                >
                  <Image
                    src={banner2}
                    alt="Product showcase 2"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div
                  className="image-container"
                  ref={(el) => addImageRef(el, 2)}
                >
                  <Image
                    src={banner3}
                    alt="Product showcase 3"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-between gap-5 items-end">
            <div className="flex flex-col gap-5">
              <div className="image-container" ref={(el) => addImageRef(el, 3)}>
                <Image
                  src={banner4}
                  alt="Product showcase 4"
                  width={250}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="image-container" ref={(el) => addImageRef(el, 4)}>
                <Image
                  src={banner5}
                  alt="Product showcase 5"
                  width={250}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="image-container" ref={(el) => addImageRef(el, 5)}>
                <Image
                  src={banner6}
                  alt="Product showcase 6"
                  width={250}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="image-container" ref={(el) => addImageRef(el, 6)}>
                <Image
                  src={banner7}
                  alt="Product showcase 7"
                  width={250}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="image-container" ref={(el) => addImageRef(el, 7)}>
                <Image
                  src={banner8}
                  alt="Product showcase 8"
                  width={250}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="image-container" ref={(el) => addImageRef(el, 8)}>
                <Image
                  src={banner9}
                  alt="Product showcase 9"
                  width={250}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridSection;
