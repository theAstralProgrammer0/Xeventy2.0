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


interface NewsArticleType {
  id: number;
  title: string;
  author: string;
  timeline: string;
  article_url: string;
}

interface VideoNewsType {
  id: number;
  title: string;
  content_provider: string;
  youtube_url: string;
}

interface VideoNewsSectionProps {
  initialNewsArticles: NewsArticleType[];
  initialVideoNews: VideoNewsType;
}

export default function LandingPage({ initialNewsArticles, initialVideoNews }: VideoNewsSectionProps) {
  return (
    <div className="w-full bg-white-a700 relative">
      <Header />
      
      <div className="relative tablet:h-[60vh] md:h-[60vh] sm:h-[60vh] xs:h-[60vh] flex flex-col justify-center gap-[74px] px-3 py-3 md:gap-[55px] sm:gap-[37px]">
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
      <Footer />
    </div>
  );
}

