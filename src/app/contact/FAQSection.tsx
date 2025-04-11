"use client";

import { Text, Img, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionQues = [
  { que: "What types of healthcare services can I access through Xeventy2.0?" },
  { que: "How secure is my personal and health information on your platform?" },
  { que: "How do I get started and use Xeventy2.0 services?" },
  { que: "Who is Xeventy2.0 meant for?" },
];

const accordionAns = [
  { ans: "Xeventy2.0 offers a range of convenient digital healthcare solutions designed to fit your lifestyle. Our core services include telehealth consultations (video or chat with licensed doctors and specialists), access to your Electronic Health Records (EHR/EMR) if managed through our system, remote patient monitoring options for chronic conditions, prescription refills (where legally permitted electronically), appointment booking for partner facilities, and access to health education resources. We aim to make managing your health simpler and more accessible." },
  { ans: "Protecting your privacy and data security is our highest priority. We employ robust security measures, including end-to-end encryption for consultations and data transmission, secure server infrastructure, and strict access controls. Our platform is designed to comply with the Nigeria Data Protection Regulation (NDPR) and other relevant data protection standards to ensure your sensitive health information is always kept confidential and secure." },
  { ans: "Getting started is easy! Simply download our mobile app (available on iOS and Android) or visit our website at x2h.com/landing. You'll need to create an account using your basic details. Depending on the service, you may need to complete identity verification. Once registered, you can browse available doctors or services, view your health records (if applicable), and book your first telehealth appointment or access other features right away. Our platform is designed to be user-friendly, but support is available if you need help." },
  { ans: "Bruh not the same our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition and packaging. Still need help? Contact us" },
];

export default function FAQSection() {
  return (
    <div className="flex flex-col bg-white-a700 py-[3rem] px-14 sm:py-5 gap-[3rem] md:px-5 sm:gap-7">
      <Heading size="headings" className="flex text-[27px] font-semibold md:text-[25px] sm:text-[23px]">
        Frequently Asked Questions
      </Heading>
      <Accordion preExpanded={[0]} className="flex w-[74%] flex-col gap-14">
        {accordionQues.map((d, i) => (
          <AccordionItem uuid={i} key={`expandablelisth${i}`}>
            <div className="flex flex-1 flex-col items-center gap-3 rounded-md border-[0.56px] border-solid border-black-900_3f bg-white-a700 p-[18px]">
              <AccordionItemHeading className="w-full">
                <AccordionItemButton>
                  <AccordionItemState>
                    {(props) => (
                      <>
                        <div className="flex w-[94%] flex-wrap items-start justify-between gap-5 md:w-full">
                          <Heading size="headingxs" className="self-center text-[15.81px] font-semibold">
                            {d.que}
                          </Heading>
                          {props?.expanded ? (
                            <Img
                              src="img_arrow_down.svg"
                              width={14}
                              height={14}
                              alt="Arrowdown"
                              className="h-[14px]"
                            />
                          ) : (
                            <Img
                              src="img_arrow_right.svg"
                              width={14}
                              height={14}
                              alt="Arrowright"
                              className="h-[14px]"
                            />
                          )}
                        </div>
                      </>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex w-[94%] justify-center md:w-full">
                  <Text
                    size="textlg"
                    className="w-[90%] text-[1rem] leading-[3rem] font-normal !text-black-900_01"
                  >
                    {accordionAns[i]?.ans}
                  </Text>
                </div>
              </AccordionItemPanel>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

