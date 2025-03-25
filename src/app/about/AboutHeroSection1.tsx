import { Text Heading } from "../../components";
import React from "react";

export default functionAboutHeroSection1() {
  return (
    <>
      {/* about hero section */}
      <div className="flex h-[254px] items-center md:h-auto">
        <div className="container-xs flex h-[254px] items-center justify-center md:h-auto md:px-5">
          <div className="h-[254px] px-4 md:h-auto">
            <div className="mt-7 flex h-[226px] items-center gap-8 md:h-auto md:flex-col">
              <Heading
                className="h-170px] text-[70px] font-medium md:text-[48px]"
              >
                Global leader in digital health innovation
              </Heading>
              <div className="flex h-[226px] flex-col gap-2.5 md:h-auto">
                <Text
                  className="h-[88px] text-[18px] font medium !text-colors2"
                >
                  Xeventy2.0 Health Limited is a leading digital health company
                  dedicated to transforming the healthcare landscape through
                  advanced technologies and innovative solutions.
                </Text>
                <Text
                  className="h-[128px] text-[18px] font-light !text-colors2"
                >
                  Our team of experts combines years of experience in
                  healthcare, data protection, and technology to address modern
                  healthcare challenges. As a company registered with
                  Nigeria&apos;s CAC, we uphold the highest standards of
                  integrity, professionalism, and global best practices.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
               
