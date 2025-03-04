import { Text } from "../../components";
import React from "react";

export default function IntroductionSection() {
  return (
    <>
      {/* Introduction section */}
      <div className="mt-14 flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-11 pl-[76px] pr-14 md:px-5">
          <div className="flex self-end rounded-bl-lg rounded-br-lg rounded-tl-lg bg-green-a700_a5 p-3.5 shadow-lg">
            <Text
              size="text7xl"
              className="text-[19px] font-normal tracking-[1.08px] !text-gray-600 md:text-[18px] sm:text-[12px] xs:text-[12px]"
            >
              What is Xeventy2.0 all about?
            </Text>
          </div>
          <div className="flex w-[72%] justify-center rounded-bl-lg rounded-br-lg rounded-tr-lg bg-blue_gray-100 p-3.5 shadow-lg">
            <Text
              size="text7xl"
              className="text-[19px] font-normal leading-[32px] tracking-[1.08px] !text-gray-600 md:text-[18px] sm:text-[12px] xs:text-[12px]"
            >
              At&nbsp;
              <a href="#" className="inline text-blue-700 hover:underline">
                Xeventy2.0 Health Limited
              </a>
              , we empower you to advance healthcare. Whether you need
                robust data protection, cutting-edge analytics, or expert
                training, we are here to partner with you.&nbsp;
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

