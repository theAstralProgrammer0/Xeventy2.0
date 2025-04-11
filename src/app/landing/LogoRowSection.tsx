"use client";

import { Img } from "../../components";
import React, { useEffect, useRef, useState } from "react";

const logos = [
  "img_logo_1.png",
  "img_logo_2.png",
  "img_logo_3.png",
  "img_logo_4.png",
];

export default function LogoRowSection() {
  const [dupCount, setDupCount] = useState(1);
  const [baseWidth, setBaseWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function calculateDuplication() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      
      // Create a temporary element to measure one sequence of logos
      const tempDiv = document.createElement("div");
      tempDiv.style.display = "flex";
      tempDiv.style.visibility = "hidden";
      tempDiv.style.position = "absolute";
      // Append each logo (simulate the same structure as in our component)
      logos.forEach((logo) => {
        const wrapper = document.createElement("div");
        wrapper.style.flexShrink = "0";
        // Tailwind's mx-8 is roughly 32px total horizontal margin
        wrapper.style.margin = "0 32px"; 
        const img = document.createElement("img");
        img.src = logo;
        img.width = 136;
        img.height = 136;
        wrapper.appendChild(img);
        tempDiv.appendChild(wrapper);
      });
      document.body.appendChild(tempDiv);
      const singleSequenceWidth = tempDiv.offsetWidth;
      document.body.removeChild(tempDiv);

      // Determine how many copies of the logo array are needed to cover the container
      const times = Math.ceil(containerWidth / singleSequenceWidth);
      setDupCount(times);
      setBaseWidth(singleSequenceWidth * times);
    }
    calculateDuplication();
    window.addEventListener("resize", calculateDuplication);
    return () => window.removeEventListener("resize", calculateDuplication);
  }, []);

  // Build the base sequence by duplicating logos enough times to fill the container.
  const baseSequence = [];
  for (let i = 0; i < dupCount; i++) {
    baseSequence.push(...logos);
  }
  // Duplicate the base sequence once more for seamless looping.
  const marqueeSequence = [...baseSequence, ...baseSequence];

  return (
    <div
      className="mt-[8em] relative overflow-hidden bg-black-900_07 py-6 shadow-md"
      ref={containerRef}
    >
      <div
        className="flex animate-marquee"
        ref={marqueeRef}
        style={{ "--base-width": `${baseWidth}px` } as React.CSSProperties}
      >
        {marqueeSequence.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Img
              src={logo}
              width={136}
              height={136}
              alt={`Logo ${index + 1}`}
              className="h-[136px] w-[136px] object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Translate by the exact width of the base sequence so that the duplicate 
               copy immediately follows with no gap. */
            transform: translateX(calc(-1 * var(--base-width)));
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

