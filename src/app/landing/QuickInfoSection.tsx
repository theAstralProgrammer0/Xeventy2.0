import HealthExpertiseProfile from "../../components/HealthExpertiseProfile";
import React, { Suspense } from "react";

const healthExpertiseList = [
  { ribbonIconImage: "img_ribbon_icon.svg", experienceNumber: "32+", experienceDescription: "Years Health Expertise" },
  { ribbonIconImage: "img_favorite.svg", experienceNumber: "134M", experienceDescription: "Patients Reached Annually" },
  { ribbonIconImage: "img_stethoscope_icon.svg", experienceNumber: "100+", experienceDescription: " Medical Experts " },
];

export default function QuickInfoSection() {
  return (
    <>
      {/* quick info section */}
      <div className="mt-4 flex justify-center bg-black-900_01 py-[38px] shadow-sm sm:py-5">
        <div className="flex justify-center px-14 md:px-5">
          <div className="flex w-full gap-[72px] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {healthExpertiseList.map((d, index) => (
                <HealthExpertiseProfile {...d} key={"listnumber" + index} className="w-[32%]" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

