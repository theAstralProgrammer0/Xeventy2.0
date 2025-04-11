"use client";

import { Button, Img, Text, CheckBox, TextArea, Input, Heading } from "../../components";
import Link from "next/link";
import React from "react";

export default function ContactFormSection() {
  return (
    <>
      {/* contact form section */}
      <div className="flex flex-col items-center bg-black-900_3f p-14">
        <div className="container-xs flex flex-col items-center gap-[2rem] px-14 md:px-5">
          <div className="container-xs flex flex-col gap-9">
            <div className="flex flex-col items-start gap-1.5">
              <Heading
                className="text-[2rem] font-semibold"
              >
                We&apos;d love to help
              </Heading>
              <Text
                size="text9xl"
                className="!text-black-900 text-[1em] font-normal"
              >
                Reach out and we&apos;ll get in touch within 24 hours.
              </Text>
            </div>
            <div>
              <div className="flex flex-col gap-[2rem]">
                <div className="flex md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch">
                    <Text
                      size="textlg"
                      className="!text-black-900 text-[1rem] font-normal"
                    >
                      First name
                    </Text>
                    <Input
                      shape="round"
                      name="firstName"
                      className="w-[84%] rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                    />
                  </div>
                  <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                    <Text
                      size="textlg"
                      className="!text-black-900 text-[1rem] font-normal"
                    >
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
                  <Text
                    size="textlg"
                    className="!text-black-900 text-[1rem] font-normal"
                  >
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
                    <Text
                      size="textlg"
                      className="!text-black-900 text-[1rem] font-normal"
                    >
                      Team size
                    </Text>
                    <Input
                      shape="round"
                      name="teamsizeinput"
                      className="w-[84%] rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                    />
                  </div>
                  <div className="flex w-[46%] flex-col items-start gap-3 md:w-full">
                    <Text
                      size="textlg"
                      className="!text-black-900 text-[1rem] font-normal"
                    >
                      Location
                    </Text>
                    <Input
                      shape="round"
                      name="location"
                      className="self-stretch rounded-[10px] border-[0.85px] border-solid border-black-900_3f px-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <Text
                    size="textlg"
                    className="!text-black-900 text-[1rem] font-normal"
                  >
                    Message
                  </Text>
                  <TextArea
                    shape="round"
                    name="messageinput"
                    className="self-stretch rounded-[10px] !border-[0.85px] !border-black-900_3f px-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[0.5rem]">
              <CheckBox
                name="checkbox"
                label="You agree to our friendly"
                id="checkbox"
                className="gap-2 text-[1rem] text-gray-700"
              />
              <Link
                href="/landing"
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  size="textmd"
                  className="text-[1rem] !text-gray-700 underline"
                >
                  privacy policy
                </Text>
              </Link>
            </div>
          </div>
          <Button
            size="xl"
            shape="round"
            rightIcon={
              <Img
                src="img_send_airplane_icon.svg"
                width={30}
                height={30}
                alt="Send airplane icon"
                className="h-[30px] w-[30px] object-contain"
              />
            }
            className="min-w-[3rem] self-end gap-1 rounded-[10px] px-8 sm:px-5"
          >
            Send message
          </Button>
        </div>
      </div>
    </>
  );
}

