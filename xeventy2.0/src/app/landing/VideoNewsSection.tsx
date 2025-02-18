import { Text, Img } from "../../components";
import NewsArticle from "../../components/NewsArticle";
import Link from "next/link";
import React, { Suspense } from "react";

const newsList = [
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },  
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
  {
    articleTitle: "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work?",
    articleTimeline: "Just In",
    articleAuthor: "By Raphael Akangbe, PhD",
  },
]


export default function VideoNewsSection() {
  return (
    <>
      {/* video news section */}
      <div className="mt-4 flex justify-center">
        <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:px-5">
          <div className="flex flex-1 flex-col gap-8 self-center md:self-stretch">
            <Img
              src="img_vide.png"
              width={884}
              height={706}
              alt="Video"
              className="h-[706px] rounded-lg object-cover"
            />
            <div className="flex flex-col items-start gap-2.5">
              <Text
                size="text6xl"
                as="p"
                className="flex items-center justify-center rounded bg-black-900_01 px-1 text-[25px] font-normal tracking-[2.75px] md:text-[23px] sm:text-[21px]"
              >
                news
              </Text>
              <Link
                href="https://laspema.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-full leading-[45px] md:text-[31px] sm:text-[29px]"
              >
                <Text
                  size="text9xl"
                  as="p"
                  className="!font-merriweather text-[33.88px] font-normal tracking-[1.02px] !text-gray-900 underline"
                >
                  VR Training for telehealth healthcare delivery service in
                  Lagos, Nigeria
                </Text>
              </Link>
              <Text
                size="textlg"
                as="p"
                className="text-[13.55px] font-normal !text-black-900_01">
                By Raphael Akangbe, PhD
              </Text>
            </div>
          </div>
          <div className="flex w-[32%] flex-col items-end gap-2 md:w-full">
            <div className="flex flex-col items-center self-stretch">
              <Text
                size="textlg"
                as="p"
                className="relative z-[1] flex items-center justify-center rounded-tl-md rounded-tr-md bg-green-a700 text-[13.55px] font-normal !text-black-900_01"
              >
                LATEST NEWS
              </Text>
              <div className="relative mt-[-14px] self-stretch rounded-md border-[0.94px] border-solid border-black-900_3f p-10 shadow-xl sm:p-5">
                <div className="flex flex-col gap-8">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {newsList.map((d, index) => (
                      <NewsArticle {...d} key={"listprice" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <Link href="https://dribbble.com" target="_blank" rel="noreferrer">
              <Text
                size="textlg"
                as="p"
                className="text-[13.55px] font-normal !text-black-900_01 underline"
              >
                Get More News
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

