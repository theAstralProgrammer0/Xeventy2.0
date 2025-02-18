import { Text } from "../../components";
import React from "react";

export default function IntroductionSection() {
  return (
    <>
      {/* Introduction section */}
      <div className="mt-14 flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-11 pl-[76px] pr-14 md:px-5">
          <div className="flex self-end rounded-tl-lg rounded-tr-[12px] bg-green-a700_a5 p-3.5 shadow-lg">
            <Text
              size="text7xl"
              as="p"
              className="text-[27.11px] font-normal tracking-[-1.08px] !text-gray-900 md:text-[25px] sm:text-[23px]"
            >
              What is Xeventy2.0 all about?
            </Text>
          </div>
          <div className="flex w-[72%] justify-center rounded-tl-lg rounded-tr-[12px] bg-blue_gray-100 p-3.5 shadow-lg md:w-full">
            <Text
              size="text7xl"
              as="p"
              className="w-[90%] text-[27.11px] font-normal leading-[47px] tracking-[-1.08px] !text-gray-900 md:text-[25px] sm:text-[23px]"
            >
              <span className="text-gray-900">At&nbsp;</span>
              <a href="#" className="inline text-blue-700 underline">
                Xeventy2.0 Health Limited
              </a>
              <span className="text-gray-900">
                , we empower you to advance healthcare.  Whether you need
                robust data protection, cutting-edge analytics, or expert
                training, we&apos;re here to partner with you.&nbsp;
              </span>
              <a href="#" className="inline text-blue-700 underline">
                Discover
              </a>
              <span className="text-gray-900">
                how our services, world-class conferences, and collaborative
                opportunities can help you build the future of healthcare. 
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

