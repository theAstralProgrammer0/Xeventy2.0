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

const accordionData = [
  { que: "How to reset my password?" },
  { que: "Do you offer international training?" },
  { que: "What is your return policy?" },
  { que: "How can I contact customer support?" },
];

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="relative z-[2] flex flex-col items-center bg-white-a700 py-[34px] sm:py-5">
        <div className="container-xs flex flex-col items-start gap-14 pl-[380px] pr-14 md:px-5 sm:gap-7">
          <Heading size="headings" as="h2" className="text-[27.11px] font-semibold md:text-[25px] sm:text-[23px]">
            Frequently Asked Questions
          </Heading>
          <Accordion preExpanded={[0]} className="flex w-[64%] flex-col gap-14">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                <div className="flex flex-1 flex-col items-center gap-3 rounded-md border-[0.56px] border-solid border-black-900_3f bg-white-a700 p-[18px]">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex w-[94%] flex-wrap items-start justify-between gap-5 md:w-full">
                              <Heading size="headingxs" as="h3" className="self-center text-[15.81px] font-semibold">
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
                        as="p"
                        className="w-[90%] text-[13.18px] font-normal leading-[15px] !text-black-900_01"
                      >
                        Our return policy allows you to return items within 30
                        days of purchase for a full refund. Itemns must be in
                        their original condition and oackaging. Still need help?
                        Contact us
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

