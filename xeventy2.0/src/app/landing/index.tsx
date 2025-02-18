import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CareersSection from "./CareersSection";
import ContactUsSection from "./ContactUsSection";
import FAQSection from "./FAQSection";
import IntroductionSection from "./IntroductionSection";
import LandingIntroSection from "./LandingIntroSection";
import LogoRowSection from "./LogoRowSection";
import ProjectsAndSocialsSection from "./ProjectsAndSocialsSection";
import QuickInfoSection from "./QuickInfoSection";
import ServicesOverviewSection from "./ServicesOverviewSection";
import VideoNewsSection from "./VideoNewsSection";
import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="w-full bg-white-a700">
      <Header />
      
      <div className="relative h-[1082px] flex flex-col gap-[74px] px-3 py-3 md:h-auto md:gap-[55px] sm:gap-[37px]">
        <Image
          src="/images/img_header_hero.png" 
          alt="Background"
          className="absolute inset-y-0 right-0 w-auto h-full object-cover z-0 bg-gradient-to-l from-transparent to-black/50"
          width={1920} 
          height={1080}
        />
        <div className="relative z-10 flex flex-col gap-[74px]">
          <LandingIntroSection />
        </div>
      </div>

      <QuickInfoSection />
      <VideoNewsSection />
      <IntroductionSection />
      <ServicesOverviewSection />
      <ProjectsAndSocialsSection />
      <CareersSection />
      <ContactUsSection />
      <div>
        <FAQSection />
        <div className="relative mt-[-4px] bg-black-900_07 py-[30px] shadow-md sm:py-5">
          <LogoRowSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

