import { Text } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className: string;
  articleTitle: React.ReactNode;
  articleTimeline: React.ReactNode;
  articleAuthor: React.ReactNode;
  articleUrl: string;
}

export default function NewsArticle({
  articleTitle = "NAD Supplements Are the Latest Thing in Anti-Aging—Do They Work? ",
  articleTimeline = "Just In",
  articleAuthor = "By Raphael Akangbe, PhD",
  articleUrl = "https://researchgate.net",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col self-stretch gap-2 flex-1`}>
      <Link href={articleUrl} target="_blank" rel="noreferrer" className="w-full leading-[19px]">
        <Text
          size="text2xl"
          className="text-[16.38px] font-medium tracking-[0.49px] !text-black-900_01 hover:underline"
        >
          {articleTitle}
        </Text>
      </Link>
      <div className="flex items-center self-stretch">
        <Text size="textxs" className="text-[10.73px] font-normal !text-black-900_01">
          {articleTimeline}
        </Text>
        <div className="ml-2 h-[4px] w-[4px] rounded-sm bg-green-300" />
        <Text size="textxs" className="ml-2 text-[10.73px] font-normal !text-black-900_01">
          {articleAuthor}
        </Text>
      </div>
    </div>
  );
}

