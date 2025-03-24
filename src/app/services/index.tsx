"use client";
import Header from "../../components/Header";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import Footer from "../../components/Footer";
import { Heading, Text, Button, Img } from "../../components"; 
import React from "react";
import { TabList, Tab, Tabs } from "react-tabs";

// Define an array of tab data for better management and scalability
const tabData = [
  {
    label: "EMR & EHR",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_emr_ehr.jpg" // Update with your actual image path
            alt="EMR & EHR"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              EMR & EHR
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
            >
              Navigating healthcare documentation shouldn't be your biggest
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Data Protection",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_data_protection.jpg" // Update with your actual image path
            alt="Data Protection"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Data Protection
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Telehealth",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_telehealth.jpg" // Update with your actual image path
            alt="Telehealth"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Telehealth
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Advanced Training",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_advanced_training.jpg" // Update with your actual image path
            alt="Advanced Training"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Advanced Training
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Web3",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_web3.jpg" // Update with your actual image path
            alt="Web3"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              Web3
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "AI",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-10 md:flex-col">
          <Img
            src="img_ai.jpg" // Update with your actual image path
            alt="AI"
            width={440}
            height={410}
            className="rounded-lg h-[440px] md:h-auto object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[3rem] self-stretch">
            <Heading
              size="text11xl"
              className="text-[32px] font-medium md:text-[30px] sm:text-[28px]"
            >
              AI
            </Heading>
            <Text
              size="text5xl"
              className="w-[96%] text-[19px] font-normal leading-[33px] !text-black-900_01 md:w-full"
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
                  src="img_icon.svg"
                  width={24}
                  height={24}
                  alt="hire me icon"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="md:w-full min-w-[234px] gap-2.5 rounded-[10px] border-[0.94px] border-solid border-green-a700_a5 px-[33px] font-merriweather-sans sm:px-5"
            >
              Hire us
            </Button>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ServicesPage() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <div className="flex w-full flex-col gap-[30px] bg-white-a700">
      <Header />
      <div>
        <div className="flex flex-col items-center gap-8">
          <div className="container-xs md:px-5">
            <div>
              <div className="flex px-2">
                <Heading
                  size="text21xl"
                  className="text-[77px] md:text-[67px] sm:text-[57px] xs:text-[47px] font-medium"
                >
                  We strive to
                </Heading>
              </div>
              <div className="flex px-2">
                <Text
                  size="text14xl"
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
                        className="p-2 text-[21px] md:text-[16px] sm:text-[12px] font-light text-black-900_01 transition-all duration-300 hover:bg-blue-50 hover:text-blue-500 rounded"
                      >
                        {tab.label}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                {/* Render only the active tab content */}
                <div className="px-2 py-9 sm:py-5">
                  {tabData[activeTabIndex].content}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
}

