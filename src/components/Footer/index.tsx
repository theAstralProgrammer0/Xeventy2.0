"use client";
import { Text, Button, Input, Img } from "./..";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex justify-center bg-black-900_01 px-[18px] py-[3rem] md:py-5">
        <div className="container-xs flex justify-between gap-5 px-2.5 md:flex-col md:px-5">
          <div className="flex w-[38%] flex-col gap-1 self-center md:w-full">
            <Link href="/landing">
              <Text
                size="text12xl"
                className="pb-4"
              >
                Xeventy <span className="!text-green-a700_01">2.0</span>  
              </Text>
            </Link>
            <Text
              className="!font-montserrat text-[18.07px] font-normal leading-8"
            >
              At Xeventy2.0 Health Limited, we empower you to advance
              healthcare.  Whether you need robust data protection,
              cutting-edge analytics, or expert training, we're here to partner
              with you. Discover how our services, world-class conferences, and
              collaborative opportunities can help you build the future of
              healthcare. 
            </Text>
          </div>
          <div className="flex flex-col items-start gap-3 self-start md:w-full">
            <div>
              <Text
                size="text9xl"
                className="!font-montserrat text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
              >
                Services
              </Text>
            </div>
            <div className="flex md:flex-col items-start gap-5 md:gap-14">
              <Link href="/services">
                <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                  EMR & EHR
                </Text>
              </Link>
              <Link href="/services">
                <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                  Data Protection
                </Text>
              </Link>
              <Link href="/services">
                <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                  Telehealth
                </Text>
              </Link>
              <Link href="/services">
                <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                  VR Training
                </Text>
              </Link>
            </div>
            <div className="flex flex-col items-start gap-3 self-start md:w-full mt-11 md:mt-5">
              <div>
                <Text
                  size="text9xl"
                  className="!font-montserrat text-[27.11px] font-normal !text-green-a700_01 md:text-[25px] sm:text-[23px]"
                >
                  Follow us
                </Text>
              </div>
              <div className="flex md:flex-col items-start gap-14">
                <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                    Facebook
                  </Text>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                    Instagram
                  </Text>
                </Link>
                <Link href="https://linkedin.com/tdaisioso" target="_blank" rel="noreferrer">
                  <Text className="!font-montserrat text-[18.07px] hover:text-green-a700_01 font-normal">
                    LinkedIn
                  </Text>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Text className="!font-montserrat hover:text-green-a700_01 text-[18.07px] font-normal">
                    YouTube
                  </Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black-900_01 py-8 sm:py-5">
        <div className="container-xs flex items-center justify-between gap-5 px-2 md:flex-col md:px-5">
          <Text
            className="self-end text-[18.97px] font-normal tracking-[-0.76px] !text-green-a700_01"
          >
            © Copyright 2025. All Rights Reserved.
          </Text>
          <div className="flex w-[40%] flex-wrap justify-between gap-5 md:w-full">
            <Link href="/policy" target="_blank" rel="noreferrer" className="self-end">
              <Text
                className="text-[18.97px] hover:text-green-a700_01 font-normal tracking-[-0.76px]"
              >
                Privacy Policy
              </Text>
            </Link>
            <Link href="/contact" target="_blank" rel="noreferrer" className="self-end">
              <Text
                className="text-[18.97px] hover:text-green-a700_01 font-normal tracking-[-0.76px]"
              >
                Support
              </Text>
            </Link>
            <Link href="/blog" target="_blank" rel="noreferrer" className="self-end">
              <Text
                className="text-[18.97px] hover:text-green-a700_01 font-normal tracking-[-0.76px]"
              >
                Blog
              </Text>
            </Link>
            <Link href="/api" target="_blank" rel="noreferrer" className="self-end">
              <Text
                className="text-[18.97px] hover:text-green-a700_01 font-normal tracking-[-0.76px]"
              >
                API
              </Text>
            </Link>
            <Link href="/training" target="_blank" rel="noreferrer" className="self-end">
              <Text
                className="text-[18.97px] hover:text-green-a700_01 font-normal tracking-[-0.76px]"
              >
                Training
              </Text>
            </Link>
          </div>
          <Text
            className="text-[18.97px] font-normal tracking-[-0.76px]"
          >
            v1.0.3
          </Text>
        </div>
      </div>
    </footer>
  );
}
