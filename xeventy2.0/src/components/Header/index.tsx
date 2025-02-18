"use client";

import { Button, Text, Img } from "./..";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        ${className ? className : ""} 
        w-full sticky top-0 z-50 
        bg-transparent 
        transition-colors duration-500 ease-in-out
        ${scrolled ? "bg-white bg-opacity-80 shadow-md" : ""}
      `}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        <Img
          src="img_x2h_logo_new_removebg_preview.png"
          width={232}
          height={80}
          alt="X2hlogonew"
          className="h-[80px] object-contain"
        />
        <ul className="flex gap-[38px]">
          <li>
            <Link href="#">
              <Text
                size="text3xl"
                
                className="text-[17.23px] font-normal !text-gray-900"
              >
                Services
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text
                size="text3xl"
                
                className="text-[17.23px] font-normal !text-gray-900"
              >
                About Us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text
                size="text3xl"
                
                className="text-[17.23px] font-normal !text-gray-900"
              >
                Blog
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text
                size="text3xl"
                
                className="text-[17.23px] font-normal !text-gray-900"
              >
                Training & Conference
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text
                size="text3xl"
                
                className="text-[17.23px] font-normal !text-gray-900"
              >
                Products
              </Text>
            </Link>
          </li>
        </ul>
        <Button
          size="sm"
          shape="round"
          className="min-w-[198px] rounded-[10px] border-[1.13px] border-solid border-green-a700 px-[32.87px] sm:px-5"
        >
          Get in touch
        </Button>
      </div>
    </header>
  );
}

