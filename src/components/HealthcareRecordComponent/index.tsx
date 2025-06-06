"use client";

import { Img, Text } from "./..";
import React, { useState, useRef, useEffect } from "react";

interface Props {
  className?: string;
  headerText?: React.ReactNode;
  descriptionText?: string;
  imageSrc?: string;
}

const MAX_WORDS = 12;

export default function HealthCareRecordComponent({
  headerText = "EMR and EHR",
  descriptionText =
    "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  imageSrc = "img_comp_1_image.png",
  ...props
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  // Scroll into view when expanding
  useEffect(() => {
    if (isExpanded && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isExpanded]);

  const getShortDescription = (text: string) => {
    const words = text.split(" ");
    if (words.length <= MAX_WORDS) return text;
    return words.slice(0, MAX_WORDS).join(" ") + "...";
  };

  const shortDescription = getShortDescription(descriptionText);
  const canShowReadMore = descriptionText.split(" ").length > MAX_WORDS;

  return (
    <div
      {...props}
      className={`${props.className} max-w-md w-full mx-auto relative flex flex-col items-center`}
      ref={containerRef}
    >
      {/* Image Section */}
      <div className="bg-black-900_0a py-3 rounded-lg">
        <div className="w-full">
          <Img
            src={imageSrc}
            width={2700}
            height={2700}
            alt="Record Image"
            className="!w-full h-[270px] mx-auto object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Card Section */}
        <div className="relative backdrop-blur-md rounded-lg p-6 flex flex-col items-center">
          <Text size="text2xl" className="!font-merriweather text-lg font-normal !text-blue-700 text-center">
            {headerText}
          </Text>
          <div className="mt-2 w-full">
            <Text
              size="texts"
              className={
                "text-sm font-normal leading-relaxed !text-black-900_01 block overflow-hidden transition-all duration-300" +
                (isExpanded ? "max-h-full" : "max-h-[1.5rem]")
              }
            >
              {isExpanded ? descriptionText : shortDescription}
            </Text>
            {canShowReadMore && (
              <button
                onClick={toggleReadMore}
                className="mt-1 text-xs font-normal !text-blue-700 hover:underline focus:outline-none"
              >
                {isExpanded ? "Collapse" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

