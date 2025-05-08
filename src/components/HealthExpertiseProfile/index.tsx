import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  ribbonIconImage?: string;
  experienceNumber?: React.ReactNode;
  experienceDescription?: React.ReactNode;
}

export default function HealthExpertiseProfile({
  ribbonIconImage = "img_ribbion_icon.svg",
  experienceNumber = "32+",
  experienceDescription = "Years Health Expertise",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-1`} 
    >
      <Img
        src={ribbonIconImage}
        width={54}
        height={54}
        alt="ribbonIconImage"
        className="w-[44px] h-[44px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] xs:w-[18px] xs:h-[18px] mobile:w-[18px] mobile-h-[18px] object-contain"
      />
      <Heading
        className="laptop:text-[38px] tablet:text-[30px] md:text-[28px] xs:text-[18px] font-semibold !text-white-a700 font-sans"
      >
        {experienceNumber}
      </Heading>
      <Text
        size="text2xl"
        className="laptop:text-[12px] md:text-[9px] xs:text-[6px] font-normal !text-white-a700"
      >
        {experienceDescription}
      </Text>
    </div>
  );
}

