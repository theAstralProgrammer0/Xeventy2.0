"use client";

import { Button, Img, Text, TextArea, Input, Heading } from "../../components";
import Link from "next/link";
import React from "react";

export default function ContactUsSection() {
  return (
    <>
      {/* contact us section */}
      <div className="relative z-[4] mt-[118px]">
        <div className="flex justify-center bg-white-a700 py-[46px] md:py-5">
          <div className="container-xs flex justify-center px-14 md:px-5">
            <div className="flex w-[70%] flex-col gap-9 md:w-full">
              <div className="flex flex-col items-start gap-1.5">
                <Heading
                  size="headingmd"
                  className="text-[40.66px] font-semibold md:text-[38px] sm:text-[36px]"
                >
                  We&apos;d love to help
                </Heading>
                <Text
                  size="text7xl"
                  className="text-[27.11px] font-normal !text-black-900_01 md:text-[25px] sm:text-[23px]"
                >
                  Reach out and we&apos;ll get in touch within 24 hours.
                </Text>
              </div>
              <div>
                <div className="flex flex-col gap-[34px]">
                  <div className="flex md:flex-col">
                    <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch">
                      <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                        First name
                      </Text>
                      <Input
                        shape="round"
                        name="firstName"
                        className="w-[84%] rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                      />
                    </div>
                    <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                      <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                        Last name
                      </Text>
                      <Input
                        shape="round"
                        name="lastName"
                        className="self-stretch rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                      Email
                    </Text>
                    <Input
                      shape="round"
                      name="email"
                      className="self-stretch rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                    />
                  </div>
                  <div className="flex md:flex-col">
                    <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch">
                      <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                        Team size
                      </Text>
                      <Input
                        shape="round"
                        name="teamsizeinput"
                        className="w-[84%] rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                      />
                    </div>
                    <div className="flex w-[46%] flex-col items-start gap-3 md:w-full">
                      <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                        Location
                      </Text>
                      <Input
                        shape="round"
                        name="location"
                        className="self-stretch rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2.5">
                    <Text size="textlg"  className="text-[13.55px] font-normal !text-black-900_01">
                      Message
                    </Text>
                    <TextArea
                      name="messageinput"
                      className="self-stretch rounded-[10px] !border-[0.85px] !border-solid border-black-900_3f px-3"
                    />
                  </div>
                  <div className="flex">
                    <div className="h-[18px] w-[18px] rounded-[3px] bg-blue_gray-100" />
                    <Text
                      size="textmd"
                      
                      className="ml-2 text-[12.71px] font-normal !text-gray-700">
                      You agree to our friendly
                    </Text>
                    <Link href="https://give-aid.vercel.app/" target="_blank" rel="noreferrer" className="ml-2">
                      <Text size="textmd"  className="text-[12.71px] font-normal !text-gray-700 underline">
                        privacy policy
                      </Text>
                    </Link>
                  </div>
                  <Button
                    size="lg"
                    shape="round"
                    rightIcon={
                      <Img
                        src="img_send_airplane_icon.svg"
                        width={30}
                        height={30}
                        alt="Send Airplane Icon"
                        className="h-[30px] w-[30px] object-contain"
                      />
                    }
                    className="gap-1 self-stretch rounded-[12px] px-[34px] sm:px-5"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

