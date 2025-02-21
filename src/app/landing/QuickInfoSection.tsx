import HealthExpertiseProfile from "../../components/HealthExpertiseProfile";
import React, { Suspense } from "react";

const healthExpertiseList = [
  {
    ribbonIconImage: "img_ribbon_icon.svg",
    experienceNumber: "32+",
    experienceDescription: "Years Health Expertise",
  },
  {
    ribbonIconImage: "img_favorite.svg",
    experienceNumber: "134M",
    experienceDescription: "Patients Reached Annually",
  },
  {
    ribbonIconImage: "img_stethoscope_icon.svg",
    experienceNumber: "100+",
    experienceDescription: " Medical Experts ",
  },
];

export default function QuickInfoSection() {
  return (
    <>
      {/* quick info section */}
      <div
        className="
          w-fill
          mt-4 
          flex justify-center 
          bg-black-900_01 
          py-[38px] sm:py-[28px] xs:py-[20px]   /* Reduced vertical padding on smaller screens */
          shadow-sm
        "
      >
        <div className="flex justify-center px-14 sm:px-5"> 
          <div className="flex w-full gap-[72px] sm:gap-8">
            {/* Removed md:flex-col to keep the row layout at all sizes */}
            <Suspense fallback={<div>Loading feed...</div>}>
              {healthExpertiseList.map((d, index) => (
                // You may also add responsive classes inside HealthExpertiseProfile to adjust icon and text sizes
                <HealthExpertiseProfile {...d} key={"listnumber" + index} className="w-[32%]" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

