"use client";

import { Img, Button, Input, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function NewsletterSubscription({
  className,
  headingText = "Subscribe to our newsletter and stay up to date",
  descriptionText = "Ask about Xeventy2.0 Health services, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help",
}: Props) {
  return (
    <div className={`${className || ""} flex justify-center items-center bg-black-900_33 py-[70px] md:py-5`}>
      <div className="container-xs flex items-center justify-center gap-5 px-14">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex">
            <Text
              className="w-[76%] md:w-full sm:w-full xs:w-full self-stretch text-[49.62px] sm:text-[32px] font-bold leading-[60px] !text-black-900_01 md:text-[45px] sm:text-[39px]"
            >
              {headingText}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-9">
            <Text
              size="text2xl"
              className="w-[76%] self-stretch text-[16.54px] md:text-[14px] font-normal leading-8 !text-black-900_01 md:w-full"
            >
              {descriptionText}
            </Text>
            <div className="flex w-[86%] sm:w-full xs:w-full items-end justify-center gap-3 md:w-full">
              <Input
                size="sm"
                name="emailinput_one"
                placeholder="Enter your email"
                className="h-[3em] flex-grow rounded-md px-3"
              />
              <Button
                className="w-[23%] h-[3em] rounded-lg px-2"
              >
                <Img
                  src="img_send_airplane_icon.svg"
                  width={30}
                  height={30}
                  className=""
                />
              </Button>
            </div>
          </div>
        </div>
        <Img
          src="img_frame_21.png"
          width={650}
          height={498}
          alt="image"
          className="h-auto w-[40%] object-contain sm:hidden rounded-lg"
        />
      </div>
    </div>
  );
}

