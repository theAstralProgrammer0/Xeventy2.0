"use client";

import { Button, Text, Img } from "./..";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <header
      className={`
        ${className || ""} 
        w-full sticky top-0 z-50 
        transition-colors duration-500 ease-in-out
        ${scrolled ? "bg-white bg-opacity-80 shadow-md" : "bg-transparent"}
      `}
    >
      <div 
        className={`
          max-w-screen-xl
          mx-auto
          flex
          justify-between
          items-center
          px-4
          ${scrolled ? "h-[3%]" : "h-[80px]"}
      `}
      >
        <Img
          src="img_x2h_logo_new_removebg_preview.png"
          width={232}
          height={80}
          alt="X2hlogonew"
          className="h-[80px] object-contain"
        />

        {/* Desktop Navigation: visible only on screens wider than 1072px */}
        <ul className="hidden min-[1073px]:flex gap-[38px]">
          {["Services", "About Us", "Blog", "Training & Conference", "Products"].map(
            (item) => (
              <li key={item}>
                <Link href="#">
                  <Text size="text3xl" className="text-[17.23px] font-normal !text-gray-900">
                    {item}
                  </Text>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Navigation Toggle: visible only on screens 1072px and smaller */}
        <div className="flex min-[1073px]:hidden">
          <button onClick={toggleMobileNav} className="p-2 focus:outline-none">
            {mobileNavOpen ? (
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop "Get in touch" Button */}
        <div className="hidden min-[1073px]:block">
          <Button
            size="sm"
            shape="round"
            className="min-w-[198px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33.06px] font-merriweathersans sm:px-5"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <div className="min-[1073px]:hidden bg-white bg-opacity-90 shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {["Services", "About Us", "Blog", "Training & Conference", "Products"].map(
              (item) => (
                <li key={item}>
                  <Link href="#">
                    <Text size="text3xl" className="text-[17.23px] font-normal !text-gray-900">
                      {item}
                    </Text>
                  </Link>
                </li>
              )
            )}
            <li>
              <Button
                size="sm"
                shape="round"
                className="min-w-[198px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33.06px] font-merriweathersans sm:px-5"
              >
                Get in touch
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

