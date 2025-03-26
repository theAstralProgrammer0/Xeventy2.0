import { Img, Text, Heading, AvatarStack } from "../../components";
import React from "react";

export default function AboutHeroSection() {
  return (
    <>
      {/* about hero section */}
      <div className="flex flex-col items-center md:h-auto">
        <div className="container-xs flex flex-col gap-[22px] md:h-auto md:px-5">
          <div className="flex gap-4 px-2 md:h-auto md:flex-col">
            <Heading
              className="text-[70px] font-medium md:text-[48px]"
            >
              <span className="md:block text-black-900">
                <>
                  We build bridges
                  <br />
                  between&nbsp;
                </>
              </span>
              <span className="text-blue-700">professionals</span>
              <span className="text-colors2">
                <>
                  <br />
                  and&nbsp;
                </>
              </span>
              <span className="!text-green-a700">patients</span>
            </Heading>
            <Text className="self-end text-[18px] font-light !text-black-900">
              To deliver transformative digital health solutions that improve
              healthcare delivery, enhance patient outcomes, and set
              benchmarks for excellence in the industry.
            </Text>
          </div>
          <div className="flex items-center gap-[22px] p-2 md:h-auto">
            <Text
              size="textxs"
              className="mb-1.5 text-[14px] font-normal !text-black-900"
            >
              Trusted by millions
            </Text>
            <AvatarStack />
          </div>
        </div>
      </div>
    </>
  );
}

