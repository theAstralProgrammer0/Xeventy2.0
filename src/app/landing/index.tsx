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


export default function LandingPage({ initialNewsArticles, initialVideoNews }: { initialNewsArticles: any[], initialVideoNews: any }) {
  return (
    <div className="w-full bg-white-a700 relative">
      <Header />
      
      <div className="relative tablet:h-[75vh] md:h-[75vh] sm:h-[70vh] flex flex-col gap-[74px] px-3 py-3 md:gap-[55px] sm:gap-[37px]">
        <Image
          src="/images/img_header_hero.png" 
          alt="Background"
          className="absolute inset-y-0 right-0 w-auto h-full object-cover z-0 iPadPro:opacity-30"
          width={1920} 
          height={1080}
        />
        <div className="relative z-10 flex flex-col gap-[74px] px-4">
          <LandingIntroSection />
        </div>
      </div>

      <QuickInfoSection />
      <VideoNewsSection initialNewsArticles={initialNewsArticles} initialVideoNews={initialVideoNews} />
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

