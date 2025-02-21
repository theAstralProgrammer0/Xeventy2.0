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
      className={`${props.className} flex items-center gap-1.5`} // Removed md:w-full to keep layout consistent
    >
      <Img
        src={ribbonIconImage}
        width={54}
        height={54}
        alt="ribbonIconImage"
        // Set responsive width/height: 54px by default, 40px on medium screens, 32px on extra-small screens.
        className="w-[44px] h-[44px] md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] xs:w-[20px] xs:h-[20px] mobile:w-[20px] mobile-h-[20px] object-contain"
      />
      <Heading
        // Responsive font sizes: 48.79px default, 36px on md screens, 28px on xs screens.
        className="laptop:text-[28px] tablet:text-[22px] md:text-[20px] xs:text-[11px] font-semibold !text-white-a700"
      >
        {experienceNumber}
      </Heading>
      <Text
        size="text2xl"
        // Responsive text sizes: 16.26px default, 14px on md, 12px on xs; ensuring readability on smaller devices.
        className="laptop:text-[12px] md:text-[9px] xs:text-[6px] font-normal leading-tight !text-white-a700"
      >
        {experienceDescription}
      </Text>
    </div>
  );
}

