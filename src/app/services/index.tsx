"use client";
import Header from "../../components/Header";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import Footer from "../../components/Footer";
import { Heading, Text, Button, Img } from "../../components"; 
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TabList, Tab, Tabs } from "react-tabs";
import FAQSection from "../contact/FAQSection";
import Link from "next/link";

const tabData = [
  {
    label: "EMR & EHR",
    slug: "emr-ehr",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="emr.jpg"
            alt="EMR & EHR"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              EMR & EHR
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Navigating healthcare documentation shouldn&apos;t be your biggest
              challenge. Our Electronic Medical Record (EMR) and Electronic
              Health Record (EHR) solutions streamline clinical workflows while
              ensuring comprehensive patient data management. Unlike clunky
              legacy systems, our intuitive platform reduces charting time by
              37%, increases billing accuracy, and seamlessly integrates with
              your existing tools. Hire us today to experience healthcare
              technology that works for you, not against you.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Data Protection",
    slug: "data-protection",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="data.jpg"
            alt="Data Protection"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Data Protection
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Protect your data with advanced security protocols and encryption
              to ensure compliance and safeguard your sensitive information.
              Our comprehensive cybersecurity framework goes beyond standard
              protection, implementing multi-layered defense mechanisms that
              shield your critical healthcare data from emerging digital
              threats. Unlike reactive security approaches, our proactive
              solutions anticipate potential vulnerabilities, providing peace
              of mind and maintaining the highest standards of patient
              confidentiality and regulatory compliance.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Telehealth",
    slug: "telehealth",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="telehealth.jpg"
            alt="Telehealth"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Telehealth
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Experience seamless virtual care with our Telehealth solutions,
              providing reliable and accessible healthcare from anywhere. Our
              platform transcends traditional telemedicine by offering
              intuitive, user-friendly interfaces that connect patients and
              healthcare providers with unprecedented ease and efficiency.
              Unlike fragmented remote care systems, our comprehensive solution
              ensures high-quality, secure video consultations, real-time
              health monitoring, and integrated patient records that transform
              how healthcare is delivered in the digital age.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Advanced Training",
    slug: "advanced-training",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="vr.jpg"
            alt="Advanced Training"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Advanced Training
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Upgrade your skills with our Advanced Training programs, designed
              to provide practical, hands-on learning experiences. Our
              cutting-edge curriculum goes beyond theoretical knowledge,
              immersing participants in real-world scenarios that develop
              critical professional competencies. Unlike traditional training
              methods, our adaptive learning platforms leverage interactive
              technologies, personalized coaching, and industry-leading
              expertise to ensure meaningful skill development that directly
              translates to workplace performance and innovation.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Web3",
    slug: "web3",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="web3.jpg"
            alt="Web3"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Web3
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Dive into the future with our Web3 solutions, bringing
              decentralized technologies and blockchain innovations to your
              business. Our comprehensive approach transforms traditional
              operational models by integrating next-generation blockchain
              capabilities that enhance transparency, security, and efficiency.
              Unlike conventional digital strategies, our Web3 solutions
              provide adaptive, scalable infrastructure that empowers
              businesses to leverage cutting-edge decentralized technologies
              and stay ahead in an increasingly digital marketplace.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "AI",
    slug: "ai",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="ai.jpg"
            alt="AI"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              AI
            </Heading>
            <Text
              
              className="w-[96%] text-[19px] font-normal leading-[3rem] !text-black-900_01 md:w-full"
            >
              Leverage the power of Artificial Intelligence to streamline
              operations, enhance decision-making, and drive innovation in your
              business. Our advanced AI solutions go beyond simple automation,
              creating intelligent systems that adapt and learn from complex
              business environments. Unlike traditional technological
              approaches, our AI-driven platforms provide nuanced, predictive
              insights that transform raw data into strategic advantages,
              enabling businesses to make more informed decisions and unlock
              unprecedented levels of operational efficiency.
            </Text>
            <Button
              rightIcon={
                <Img
                  src="hire_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              <Link href="/contact">
                Hire us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") ?? "";
  const defaultIndex = tabData.findIndex((t) => t.slug === tabParam);
  const [activeTabIndex, setActiveTabIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );
  
  useEffect(() => {
    if (tabParam) {
      const newIndex = tabData.findIndex((t) => t.slug === tabParam);
      if (newIndex >= 0) setActiveTabIndex(newIndex);
    }
  }, [tabParam]);
  

  return (
    <div className="flex w-full flex-col gap-[30px] bg-white-a700">
      <Header />
      <div>
        <div className="flex flex-col items-center gap-8">
          <div className="container-xs md:px-5">
            <div>
              <div className="flex px-2">
                <Heading
                  className="text-[77px] md:text-[67px] sm:text-[57px] xs:text-[47px] font-medium"
                >
                  We strive to
                </Heading>
              </div>
              <div className="flex px-2">
                <Text
                  
                  className="text-[38px] font-light !text-black-900_01 md:text-[30px] sm:text-[26px] xs:text-[20px]"
                >
                  Discover our expertise
                </Text>
              </div>
              <Tabs
                selectedIndex={activeTabIndex}
                onSelect={(index) => setActiveTabIndex(index)}
                className="mt-[22px] self-stretch"
                selectedTabClassName="!text-black-900_01 border-green-a700 border-b-2 border-solid"
              >
                <div className="mx-2 flex items-center justify-center md:mx-0 md:flex-col">
                  <TabList className="flex flex-1 flex-wrap gap-[52px] md:gap-5 md:self-stretch">
                    {tabData.map((tab, index) => (
                      <Tab
                        key={`tab-${index}`}
                        className="cursor-pointer p-2 text-[21px] md:text-[16px] sm:text-[12px] font-light text-black-900_01 transition-all duration-300 hover:bg-blue-50 hover:text-blue-500 rounded"
                      >
                        {tab.label}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                {/* Render only the active tab content */}
                <div className="px-2 py-9 sm:py-5 border-b border-thin">
                  {tabData[activeTabIndex].content}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <FAQSection />
        <div className="mt-[3rem]">
          <NewsletterSubscription />
        </div>
        <Footer />
      </div>
    </div>
  );
}

