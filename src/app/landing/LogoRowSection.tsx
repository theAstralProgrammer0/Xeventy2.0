"use client";

import { Img } from "../../components";
import React from "react";

const logos = [
  "img_logo_1.png",
  "img_logo_2.png",
  "img_logo_3.png",
  "img_logo_4.png",
];

export default function LogoRowSection() {
  return (
    <div className="relative overflow-hidden bg-black-900_07 py-6 shadow-md">
      {/* The marquee container; duplicate the logos for a seamless scroll */}
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
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
      {/* Custom keyframes for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Adjust this value to exactly match half of the total width
               of the scrolling content for a seamless loop. */
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

