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
  { userImage: "dr_raphael_pfp.jpg", userName: "Raphael Akangbe", userTitle: "Founder & CEO" },
  { userImage: "ty_pfp.jpg", userName: "Temitayo Daisi-Oso", userTitle: "Chief Technology Officer" },
  { userImage: "dam_pfp.jpg", userName: "Adeoye Damilare", userTitle: "Director, Legal Unit" },
  { userImage: "anonym_pfp.png", userName: "Raphael Akangbe", userTitle: "Founder & CEO" }
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-white-a700">
      <Header />
      <div className="mt-6 flex flex-col items-center md:h-auto md:gap-[76px] sm:gap-[51px]">
        <div className="mb-[3rem] container-xs flex flex-col gap-3.5 md:h-auto">
          <AboutHeroSection />
        </div>
        <AboutTabSection />

        <AboutHeroSection1 />
        <div className="container-xs flex flex-col gap-[102px] px-4 md:h-auto md:gap-[76px] md:px-5 sm:gap-[51px]">
          <div className="flex self-end px-4 md:h-auto">
            <Heading className="mt-[3rem] pt-[3rem] border-t w-[448px] md:w-full text-[70px] !text-gray-700 font-medium md:text-[48px]">
              Meet our amazing team
            </Heading>
          </div>
          <div className="mx-[52px] grid grid-cols-2 justify-center gap-[90px] md:mx-0 md:grid-cols-1">
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

