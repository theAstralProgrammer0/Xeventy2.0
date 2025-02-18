import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  headerText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  imageSrc?: string;
}

export default function HealthCareRecordComponent({
  headerText = "EMR and EHR",
  descriptionText = "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  imageSrc = "img_comp_1_image.png",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} h-[480px] w-[24%] md:w-full relative`}>
      <div className="absolute bottom-[0.35px] left-0 right-0 mx-auto flex-1 rounded-md bg-black-900_0a px-3.5 py-[22px] sm:py-5">
        <div className="mt-[242px] flex flex-col items-center gap-3">
          <Text size="text2xl" classname="!font-merriweather text-[16.94px] font-normal !text-blue-700">
            {headerText}
          </Text>
          <Text size="texts" className="w-full text-[11.86px] font-normal leading-[23px] !text-black-900_01">
            {descriptionText}
          </Text>
        </div>
      </div>
      <Img
        src={imageSrc}
        width={286}
        height={270}
        alt="Comp1image"
        className="absolute left-0 right-0 top-0 mx-auto h-[270px] flex-1 rounded-md object-cover"
      />
    </div>
  );
}

