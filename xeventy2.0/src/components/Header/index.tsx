import { Button, Text, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Header = ({ ...props }: Props) {
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


