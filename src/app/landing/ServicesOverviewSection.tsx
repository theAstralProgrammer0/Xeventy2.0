import { Button, Img, Text } from "../../components";
import HealthcareRecordComponent from "../../components/HealthcareRecordComponent";
import React, { Suspense } from "react";

const serviceList = [
  {
    headerText: "EMR and EHR",
    descriptionText: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
    imageSrc: "img_comp_1_image.png",
  },
  {
    headerText: "Data Protection",
    descriptionText: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
    imageSrc: "img_comp_2_image.png",
  },
  {
    headerText: "Telehealth",
    descriptionText: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
    imageSrc: "img_comp_3_image.png",
  },
  {
    headerText: "Advanced Training",
    descriptionText: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
    imageSrc: "img_comp_4_image.png",
  },
];


export default function ServicesOverviewSection() {
  return (
    <>
      {/* services overview section */}
      <div className="mt-[86px] flex flex-col items-center gap-[18px]">
        <div className="flex flex-col items-center self-stretch">
          <div className="container-xs mt-4 flex flex-col items-center gap-5 px-14 md:px-5">
            <Button
              color="black_900_01"
              size="xs"
              
              className="min-w-[108px] rounded-[10px] px-1.5 font-merriweather tracking-[1.09px]"
            >
              Our Services
            </Button>
            <Text
              size="text13xl"
              
              className="!font-merriweather text-[56.47px] font-normal !text-black-900_01 md:text-[48px] sm:text-[42px]"
            >
              Bridging technology and patient care
            </Text>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center gap-5 px-5 sm:gap-7">
          <div className="grid cs2:grid-cols-1 xs:grid-cols-1 cs1:grid-cols-2 md:grid-cols-2 grid-cols-4 gap-5 w-full">
            <Suspense fallback={<div>Loading feed...</div>}>
              {serviceList.map((d, index) => (
                <HealthcareRecordComponent {...d} key={"listcomp1Header" + index} />
              ))}
            </Suspense>
          </div>
          <Button
            
            rightIcon={
              <Img
                src="img_link_icon.png"
                width={20}
                height={20}
                alt="Link Icon"
                className="h-[20px] w-[20px] object-contain"
              />
            }
            className="min-w-[234px] gap-2.5 rounded-[10px] px-4 font-sans"
          >
            View more services
          </Button>
        </div>
      </div>
    </>
  );
}

