import { Button, Text, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center ml-4 mr-[66px] gap-5 md:mx-0`}
    >
      <Img
        src="img_x2h_logo_new_removebg_preview.png"
        width={232}
        height={80}
        alt="X2hlogonew"
        className="h-[80px] w-[16%] object-contain md:w-full"
      />
      <div className="flex">
        <ul className="flex flex-wrap gap-[38px]">
          <li>
            <Link href="#">
              <Text size="text3xl" as="p" className="text-[17.23px] font-normal !text-gray-900">
                Services
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text size="text3xl" as="p" className="text-[17.23px] font-normal !text-gray-900">
                About Us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text size="text3xl" as="p" className="text-[17.23px] font-normal !text-gray-900">
                Blog
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text size="text3xl" as="p" className="text-[17.23px] font-normal !text-gray-900">
                Training & Conference
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text size="text3xl" as="p" className="text-[17.23px] font-normal !text-gray-900">
                Products
              </Text>
            </Link>
          </li>
        </ul>
      </div>
      <Button
        size="sm"
        shape="round"
        className="min-w-[198px] rounded-[10px] border-[1.13px] border-solid border-green-a700 px-[32.87px] sm:px-5"
      >
        Get in touch
      </Button>
    </header>
  );
}
