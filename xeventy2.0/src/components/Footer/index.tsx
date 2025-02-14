"use client";

import { Text, Button, Input } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Footer = ({ ...props }: Props) => {
  return (
    <footer {...props} className={`${props.className} flex flex-col mt-1`}>
      <div className="relative z-[3] flex items-start gap-[30px] self-stretch bg-black-900_01 px-[18px] py-[54px] md:flex-col md:py-5">
        <div className="mb-3 flex w-[52%] items-center justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[30%] flex-col items-start gap-2 md:w-full">
            <Text
              size="text7xl"
              as="p"
              className="text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
            >
              Services
            </Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link href="#" target="_blank">
                  <Text as="p" className="text-[18.07px] font-normal">
                    EMR & EHR
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Telemedicine
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Telehealth
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    VR & AR Training
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div classname="flex w-[30%] flex-col items-start gap-2 md:w-full">
            <Text
              size="text7xl"
              as="p"
              className="text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
            >
              Projects
            </Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Tech Conference
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Tech Conference
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Tech Conference
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Tech Conference
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div classname="flex w-[30%] flex-col items-start gap-2 md:w-full">
            <Text
              size="text7xl"
              as="p"
              className="text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
            >
              Socials
            </Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Facebook
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Instagram
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    LinkedIn
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    YouTube
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div classname="flex w-[30%] flex-col items-start gap-2 md:w-full">
            <Text
              size="text7xl"
              as="p"
              className="text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
            >
              Products
            </Text>
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Data Protection Tool
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Health Training Certificate
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Blockchain Tool
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="text-[18.07px] font-normal">
                    Python Course
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-[48%] flex-col items-center gap-11 self-center md:w-full">
            <Text
              size="text10xl"
              as="p"
              className="text-[34.64px] font-normal tracking-[-1.73px] !text-green-a700_01 md:text-[32px] sm:text-[30px]"
            >
              Sign up to our newsletter and stay up to date
            </Text>
            <div className="flex justify-center gap-4 self-stretch py-1.5 md:flex-col">
              <Input size="sm" shape="round name="emailinput_one" className="flex-grow rounded-lg px-3" />
              <Button
                color="blue_A700_e5"
                shape="round"
                className="min-w-[166px] rounded-[10px] ps-[34px] font-merriweathersans sm:px-5"
              >
                Notify me
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch bg-black-900_01 px-6 py-8 md:flex-col sm:p-5">
          <Text as="p" className="self-end text-[18.97px] font-normal tracking-[-0.76px] !text-green-a700_01">
            © Xeventy2.0 Health 2025
          </Text>
          <div className="flex w-[62%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[60%] flex-wrap justify-between gap-5 md:w-full">
              <Link href="#">
                <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
                  Privacy Policy
                </Text>
              </Link>
              <Link href="#">
                <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
                  Support
                </Text>
              </Link>
              <Link href="#">
                <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
                  Blog
                </Text>
              </Link>
              <Link href="#">
                <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
                  API
                </Text>
              </Link>
              <Link href="#">
                <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
                  Training
                </Text>
              </Link>
            </div>
            <Text as="p" className="text-[18.97px] font-normal tracking-[-0.76px]">
              v3.0.1
            </Text>
          </div>
        </div>
      </footer>
    );
}

