"use client";

import { Img, Text } from "./..";
import React, { useState } from "react";

interface Props {
  className?: string;
  headerText?: React.ReactNode;
  descriptionText?: string;
  imageSrc?: string;
}

const MAX_WORDS = 12;

export default function HealthCareRecordComponent({
  headerText = "EMR and EHR",
  descriptionText = "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  imageSrc = "img_comp_1_image.png",
  className = "",
  ...props
}: Props) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (text: string = ""): string => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= MAX_WORDS) {
      return text;
    }
    return words.slice(0, MAX_WORDS).join(" ") + "...";
  };

  const currentDescriptionText = typeof descriptionText === 'string' ? descriptionText : "";
  const shortDescription = getShortDescription(descriptionText);
  const canShowReadMore = typeof currentDescriptionText === 'string' && currentDescriptionText.split(" ").length > MAX_WORDS;


  return (
    <div
      {...props}
      className={`${className} xs:w-full rounded-md overflow-hidden flex flex-col shadow-md`}
    >
      <Img
        src={imageSrc}
        width={270}
        height={270}
        alt={typeof headerText === 'string' ? headerText : "Service Image"}
        className="w-full h-[270px] object-cover shrink-0"
      />

      <div className="bg-black-900_0a px-3 py-[22px] sm:py-5 flex flex-col items-center gap-3 flex-grow">
        <Text
          size="text2xl"
          className="!font-merriweather text-[17px] font-normal !text-blue-700 text-center"
        >
          {headerText}
        </Text>

        <div className="w-full">
          <Text
            size="texts"
            className="text-[12px] font-normal leading-[23px] !text-black-900_01 inline"
          >
            {isExpanded ? currentDescriptionText : shortDescription}
          </Text>
          {canShowReadMore && (
            <span
              onClick={toggleReadMore}
              className="text-[11px] font-normal !text-blue-700 cursor-pointer ml-1 hover:underline"
            >
              {isExpanded ? " Collapse" : " Read more"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

