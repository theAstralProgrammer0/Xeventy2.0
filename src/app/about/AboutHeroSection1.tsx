import { Heading } from "../../components";
import React from "react";

export default function AboutHeroSection1() {
  return (
    <>
      {/* about hero section */}
      <div className="container-xs flex items-center md:h-auto">
        <div className="flex items-center justify-center md:h-auto md:px-5">
          <div className="border-t px-4 md:h-auto">
            <div className="mt-[2rem] flex items-center gap-8 md:h-auto md:flex-col">
              <Heading
                className="text-[70px] md:w-full !text-gray-700 font-medium md:text-[48px]"
              >
                Global leader in digital health innovation
              </Heading>
              <div className="w-[70%] md:w-full flex flex-col gap-[2rem] md:h-auto">
                <p
                  className="text-[18px] font-medium !text-black-900"
                >
                  Xeventy2.0 Health Limited is a leading digital health company
                  dedicated to transforming the healthcare landscape through
                  advanced technologies and innovative solutions.
                </p>
                <p
                  className="text-[20px] font-light !text-black-900"
                >
                  Our team of experts combines years of experience in
                  healthcare, data protection, and information technology to address modern
                  healthcare challenges. As a company registered with
                  Nigeria&apos;s CAC, we uphold the highest standards of
                  integrity, professionalism, and global best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
               
