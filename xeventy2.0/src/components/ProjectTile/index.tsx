import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  projectImage?: string;
  projectTitle?: React.ReactNode;
  projectDescription?: React.ReactNode;
}

export default function ProjectTile({
  projectImage = "img_tile_1_image.png",
  projectTitle = "Development of an interoperable EMR system for Nigerian hospitals.",
  projectDescription = "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full`}>
      <Img
        src={projectImage}
        width={370}
        height={342}
        alt="Image"
        className="h-[342px] w-full rounded-lg object-cover"
      />
      <Text
        size="textxl"
        className="mt-[18px] w-full !font-merriweather text-[14.68px] font-normal leading-6 !text-black-900_01"
      >
        {projectTitle}
      </Text>
      <Text size="texts" className="mt-2.5 w-[78%] text-[11.75px] font-normal leading-[22px] !text-black-900_01">
        {projectDescription}
      </Text>
    </div>
  );
}

