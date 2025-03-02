import { AvatarStack, Img, Text, Button } from "../../components";
import Link from "next/link";
import React from "react";

export default function LandingIntroSection() {
  return (
    <>
      {/* landing intro section */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="container-xs flex flex-col md:px-3">
          <Text
            size="text11xl"
            className="max-w-3xl !font-merriweather text-[47.59px] font-normal leading-tight tracking-wide !text-black-900 md:text-[38px] xs:text-[30px] mobile:text-[20px]"
          >
            <p className="text-black-900">Redefining&nbsp;
              <span className="text-green-a700">healthcare</span>
            </p>
            <p className="text-black-900">through innovative</p>
            <p className="text-black-900">technologies and</p>
            <p className="text-black-900">transformative&nbsp;
              <span className="text-blue-700">solutions</span>
            </p>
          </Text>
          <div className="mt-4 flex py-3.5">
            <Text
              size="text5xl"
              className="w-[50%] md:w-full text-[19.73px] sm:text-[15px] mobile:text-[12px] font-normal leading-relaxed !text-black-900_93"
            >
              We integrate cutting-edge technology, data-driven insights, and
              agile healthcare delivery to revolutionize patient care and
              empower providers globally.
            </Text>
          </div>
          <div className="mt-7 flex items-center gap-[38px] sm:gap-[28px]">
            <Button
              rightIcon={
                <Img
                  src="img_link_icon.png"
                  width={28}
                  height={28}
                  alt="Link Icon"
                  className="h-[28px] w-[28px] sm:h-[20px] sm:w-[20px] xs:h-[12px] xs:w-[12px] object-contain"
                />
              }
              className="sm:text-[15px] xs:text-[12px] min-w-[234px] sm:min-w-[128px] xs:min-w-[100px] sm:h-[48px] xs:h-[38px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33.06px] font-merriweathersans sm:px-5"
            >
              Learn more
            </Button>
            <Link href="https://dribbble.com" target="_blank" rel="noreferrer">
              <Text
                className=" w-contain text-[18.15px] whitespace-nowrap sm:text-[15px] sm:text-[12px] font-normal !text-gray-700 hover:underline"
              >
                Hiring consultants?
              </Text>
            </Link>
          </div>
          {/*<div className="mt-[38px] flex items-center gap-6 sm:gap-2">
            <Text
              size="textxl"
              className="text-[15px] xs:text-[12px] mobile:text-[10px] whitespace-nowrap font-normal !text-gray-700" 
            >
              Powered by the Xeventy2.0 health team
            </Text>
            <AvatarStack />
          </div> */}
        </div>
      </div>
    </>
  );
}

