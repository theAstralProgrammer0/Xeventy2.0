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
    <div {...props} className={`${props.className} flex items-center md:w-full gap-1.5`}>
      <Img
        src={ribbonIconImage}
        width={54}
        height={54}
        alt="ribbonIconImage"
        className="text-[48.79px] font-semibold !text-white-a700"
      />
      <Heading
        as="h1"
        className="text-[48.79px] font-semibold !text-white-a700"
      >
        {experienceNmber}
      </Heading>
      <Text
        size="text2xl"
        as="p"
        className="text-[16.26px] font-normal"
      >
        {experienceDescription}
      </Text>
    </div>
  );
}
