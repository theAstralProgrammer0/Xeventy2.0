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

export default function LandingPage() {
  return (
    <div className="w-full bg-white-a700">
      <div>
        <div className="flex h-[1082px] flex-col gap-[74px] bg-{url(/images/img_header_hero.png)] bg-cover bg-no-repeat py-3 md:h-auto md:gap-[55px] sm:gap-[37px]">
          <Header />
          
          {/* landing intro section */}
          <LandingIntroSection />
        </div>

        {/* quick info section */}
        <QuickInfoSection />

        {/* video news section */}
        <VideoNewsSection />

        {/* introduction section */}
        <IntroductionSection />
        
        {/* services overview section */}
        <ServicesOverviewSection />

        {/* projects and socials section */}
        <ProjectsAndSocialsSection />

        {/* careers section */}
        <CareersSection />

        {/* contact us section */}
        <ContactUsSection />
        <div>
          {/* f a q section */}
          <FAQSection />
          <div className="relative mt-[-4px] bg-black-900_07 py-[30px] shadow-md sm:py-5">
            {/* logo row section */}
            <LogoRowSection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

