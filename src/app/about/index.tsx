import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import AboutHeroSection from "./AboutHeroSection";
import AboutHeroSection1 from "./AboutHeroSection1";
import AboutTabSection from "./AboutTabSection";
import ContactUsSection from "./ContactUsSection";
import React, { Suspense } from "react";

const teamMembersGrid = [
  { userImage: "drRaphael.png", userName: "Raphael Akangbe", userTitle: "Founder & CEO" },
  { userImage: "drRaphael.png", userName: "Raphael Akangbe", userTitle: "Founder & CEO" },
  { userImage: "drRaphael.png", userName: "Raphael Akangbe", userTitle: "Founder & CEO" },
  { userImage: "drRaphael.png", userName: "Raphael Akangbe", userTitle: "Founder & CEO" }
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-white-a700">
      <Header />
      <div className="mt-6 flex flex-col items-center md:h-auto md:gap-[76px] sm:gap-[51px]">
        <div className="container-xs flex flex-col gap-3.5 md:h-auto">
          <AboutHeroSection />
          <AboutTabSection />
        </div>

        <AboutHeroSection1 />
        <div className="container-xs flex h-[864px] flex-col items-center gap-[102px] px-4 md:h-auto md:gap-[76px] md:px-5 sm:gap-[51px]">
          <div className="flex h-[254px] items-end px-4 md:h-auto">
            <Heading className="mt-[84px] h-[170px] text-[70px] font-medium md:text-[48px]">
              Meet our amazing team
            </Heading>
          </div>
          <div className="mx-[52px] grid h-[506px] grid-cols-2 justify-center gap-[90px] md:mx-0 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {teamMembersGrid.map((d, index) => (
                <UserProfile {...d} key={"about" + index} />
              ))}
            </Suspense>
          </div>
        </div>

        <ContactUsSection />
      </div>
      <Footer />
    </div>
  );
}

