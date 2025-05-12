import { Button, Img, Text } from "../../components";
import HealthcareRecordComponent from "../../components/HealthcareRecordComponent";
import React, { Suspense } from "react";
import Link from "next/link";

const serviceList = [
  {
    headerText: "EMR and EHR",
    descriptionText: "Electronic Medical/Health Records digitize patient information, enabling seamless sharing between healthcare providers, improving care coordination, enhancing clinical decision-making, and reducing medical errors through comprehensive, accessible digital documentation.",
    imageSrc: "img_comp_1_image.png",
  },
  {
    headerText: "Data Protection",
    descriptionText: "Comprehensive safeguarding of sensitive information through encryption, access controls, and compliance protocols, preventing unauthorized access while ensuring business continuity, regulatory compliance, and maintaining stakeholder trust.",
    imageSrc: "img_comp_2_image.png",
  },
  {
    headerText: "Telehealth",
    descriptionText: "Remote healthcare delivery using digital technologies to connect patients with providers, enabling virtual consultations, remote monitoring, and timely care regardless of geographic barriers or mobility limitations.",
    imageSrc: "img_comp_3_image.png",
  },
  {
    headerText: "Advanced Training",
    descriptionText: "Specialized educational programs delivering cutting-edge knowledge and skills development through expert-led instruction, hands-on practice, and personalized learning pathways to enhance professional capabilities and career advancement.",
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
                width={100}
                height={100}
                alt="Link Icon"
                className="h-[20px] w-[20px] object-contain"
              />
            }
            className="min-w-[234px] gap-2.5 rounded-[10px] px-4 font-sans"
          >
            <Link href="/services">
              View more services
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

