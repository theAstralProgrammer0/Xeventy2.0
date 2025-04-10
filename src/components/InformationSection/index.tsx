import Image from "next/image";
import { Img, Button, Text } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  titleText: React.ReactNode;
  descriptionText: React.ReactNode;
  imageSrc: string;
  article_url: string;
  amazon_url?: string;
}

export default function InformationSection({
  className = "",
  titleText = "Understanding the EU Deforestation Regulation (EUDR)",
  descriptionText = "Dive into the key aspects of EUDR and discover how businesses can comply with this groundbreaking regulation across entire sustainable supply chains...",
  imageSrc = "img_frame_21.png",
  article_url = "https://google.com",
  amazon_url = "https://amazon.com",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${className} p-4 flex justify-center items-center w-full`}
    >
      <Link
        href={article_url}
        target="_blank"
        className="flex p-5 w-11/12 items-center justify-between rounded-lg border border-gray-200 bg-white transition-colors hover:border-green-500 hover:bg-green-50 md:flex-col"
      >
        <div className="flex w-2/3 flex-col gap-4 md:w-full">
          <div className="flex flex-col gap-4">
            <Text className="text-3xl !text-black-900 font-semibold md:text-xl">
              {titleText}
            </Text>
            <Text className="text-lg !text-black-900 md:text-base">
              {descriptionText}
            </Text>
          </div>
          {/* Flex container for the two buttons */}
          <div className="mt-4 flex gap-12">
            <Button
              rightIcon={
                <Img
                  src="article.png"
                  width={24}
                  height={24}
                  alt="article icon"
                  className="h-6 w-6 object-cover"
                />
              }
              className="min-w-[140px] gap-2 rounded-lg border border-green-500 px-8 py-2 font-medium transition-colors hover:bg-green-500 !hover:text-white md:px-4 md:py-2"
            >
              Read article
            </Button>
            <Button
              onClick={() => window.open(amazon_url, "_blank")}
              rightIcon={
                <Img
                  src="amazon.svg.svg"
                  width={24}
                  height={24}
                  alt="amazon icon"
                  className="h-6 w-6 object-cover"
                />
              }
              className="min-w-[140px] gap-2 rounded-lg border bg-yellow-500 px-8 py-2 font-medium transition-colors hover:bg-yellow-500 hover:text-white md:px-4 md:py-2"
            >
              Buy on Amazon
            </Button>
          </div>
        </div>
        <Image
          src={imageSrc}
          width={380}
          height={380}
          alt="blog image"
          className="h-72 w-72 rounded-lg object-fit md:mt-4 md:w-full md:h-auto"
        />
      </Link>
    </div>
  );
}

