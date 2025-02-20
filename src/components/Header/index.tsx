"use client";

import { Button, Text, Img } from "./..";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLDivElement>(null);

  // Update header state on scroll.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav if click occurs outside dropdown and toggle.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavOpen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          mobileToggleRef.current &&
          !mobileToggleRef.current.contains(event.target as Node)
        ) {
          setMobileNavOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen]);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  // Define navigation links with proper routes.
  const navLinksDesktop = [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Training", href: "/training" },
    { label: "Products", href: "/products" },
  ];

  // Mobile version: using "Training & Conference" for display but same route.
  const navLinksMobile = [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Training & Conference", href: "/training" },
    { label: "Products", href: "/products" },
  ];

  return (
    <header
      className={`
        ${className || ""}
        w-full sticky top-0 z-50 transition-all duration-500 ease-in-out
        ${scrolled ? "bg-green-100 bg-opacity-80 shadow-md py-1" : "bg-transparent py-4"}
      `}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center 
                      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <Img
          src="img_x2h_logo_new_removebg_preview.png"
          width={scrolled ? 200 : 232}
          height={scrolled ? 70 : 80}
          alt="X2hlogonew"
          className="object-contain transition-all duration-500 ease-in-out"
        />

        {/* Desktop Navigation (visible on laptop and desktop, i.e. ≥ 1366px) */}
        <ul className="hidden laptop:flex gap-8">
          {navLinksDesktop.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <Text
                  size="text3xl"
                  className="text-[17px] font-normal !text-gray-900 hover:!text-green-a700"
                >
                  {link.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button for Tablet and smaller (< 1366px) */}
        <div ref={mobileToggleRef} className="flex laptop:hidden">
          <button
            onClick={toggleMobileNav}
            className="p-2 transition-all duration-300 ease-in-out focus:outline-none"
          >
            {mobileNavOpen ? (
              <svg
                className="w-6 h-6 transition-all duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cancel Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transition-all duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hamburger Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* "Get in touch" Button visible on laptop and desktop (≥ 1366px) */}
        <div className="hidden laptop:block">
          <Button
            size="sm"
            shape="round"
            className="min-w-[198px] rounded-[10px] border border-green-a700 px-8"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown (Tablet and smaller) with smooth transition */}
      <div
        ref={dropdownRef}
        className={`laptop:hidden overflow-hidden transition-all duration-1000 ease-in-out bg-white bg-opacity-90 shadow-md ${
          mobileNavOpen
            ? "max-h-[500px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {navLinksMobile.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <Text
                  size="text3xl"
                  className="text-[17px] font-normal !text-gray-900 hover:!text-green-a700"
                >
                  {link.label}
                </Text>
              </Link>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              shape="round"
              className="min-w-[198px] rounded-[10px] border border-green-a700 px-8"
            >
              Get in touch
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

