import { Img, Text, Heading, AvatarStack } from "../../components";
import React from "react";

export default function AboutHeroSection() {
  return (
    <>
      {/* about hero section */}
      <div className="flex h-[340px] flex-col items-center md:h-auto">
        <div className="container-xs flex h-[340px] flex-col gap-[22px] md:h-auto md:px-5">
          <div className="flex h-[256px] items-center gap-4 px-4 md:h-auto md:flex-col">
            <Heading
              className="h-[256px] text-[70px] font-medium !text-colors2 md:text-[48px]"
            >
              <span className="text-colors2">
                <>
                  We build bridges
                  <br />
                  between&nbsp;
                </>
              </span>
              <span className="text-colors7">professionals</span>
              <span className="text-colors2">
                <>
                  <br />
                  and&nbsp;
                </>
              </span>
              <span className="text-colors8">patients</span>
            </Heading>
            <Text
              size="textxs"
              className="mb-1.5 h-[20px] text-[14px] font-normal !text-colors5"
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

