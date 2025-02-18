import { AvatarStack, Img, Text, Button } from "../../components";
import Link from "next/link";
import React from "react";

export default function LandingIntroSection() {
  return (
    <>
      {/* landing intro section */}
      <div className="mb-[350px] flex flex-col items-center">
        <div className="container-xs flex flex-col md:px-5">
          <Text
            size="text11xl"
            className="w-[46%] !font-merriweather text-[47.59px] font-normal leading-[59px] tracking-[1.43px] !text-black-900 md:w-full md:text-[43px] sm:text-[37px]"
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
              className="w-[42%] text-[19.73px] font-normal leading-[27px] !text-black-900_93"
            >
              We integrate cutting-edge technology, data-driven insights, and
              agile healthcare delivery to revolutionize patient care and
              empower providers globally.
            </Text>
          </div>
          <div className="mt-7 flex items-center gap-[38px]">
            <Button
              rightIcon={
                <Img
                  src="img_link_icon.png"
                  width={28}
                  height={28}
                  alt="Link Icon"
                  className="h-[28px] w-[28px] object-contain"
                />
              }
              className="min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33.06px] font-merriweathersans sm:px-5"
            >
              Learn more
            </Button>
            <Link href="https://dribbble.com" target="_blank" rel="noreferrer">
              <Text
                className="text-[18.15px] font-normal !text-gray-700 hover:underline"
              >
                Hiring consultants?
              </Text>
            </Link>
          </div>
          <div className="mt-[38px] flex items-center gap-6 sm:flex-col">
            <Text
              size="textxl"
              className="mb-1.5 self-end text-[14.32px] font-normal !text-gray-700 sm:mb-0"
            >
              Powered by the Xeventy2.0 health team
            </Text>
            <AvatarStack />
          </div>
        </div>
      </div>
    </>
  );
}

