import { Img, Button, Text } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className: string;
  titleText: React.ReactNode;
  descriptionText: React.ReactNode;
  imageSrc: string;
  article_url: string;
}

export default function InformationSection({
  titleText = "Understanding the EU Deforestation Regulation (EUDR)",
  descriptionText = "Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains...",
  imageSrc = "img_frame_21.png",
  article_url = "https://google.com",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} p-3 flex justify-center items-center self-stretch flex-1 container-xs`}
    >
      <Link href={article_url} className="flex p-5 w-[90%] items-center justify-evenly md:w-full md:flex-col hover:border-green-a700_a5 hover:border-[0.5px] hover:border-solid hover:shadow-xs">
        <div className="flex w-[60%] flex-col items-start gap-[2rem] md:w-full">
          <div className="flex flex-col items-start gap-[2rem] self-stretch">
            <Text
              className="text-[34px] font-normal !text-black-900_01 md:w-full md:text-[20px] sm:text-[18px]"
            >
              {titleText}
            </Text>
            <Text
              className="text-[18px] font-normal !text-black-900_01 md:w-full"
            >
              {descriptionText}
            </Text>
          </div>
          <Button
            rightIcon={
              <Img
                src="article.svg"
                width={24}
                height={24}
                alt="article icon"
                className="h-[24px] w-[24px] object-cover"
              />
            }
            className="mt-[1rem] min-w-[276px] gap-2.5 rounded-[10px] border-[0.5px] border-solid border-green-a700_a5 px-[33px] font-merriweathersans sm:px-5"
          >
            Read article 
          </Button>
        </div>
        <Img
          src={imageSrc}
          width={380}
          height={380}
          alt="blog image"
          className="h-[300px] w-[300px] rounded-[16px] object-cover md:w-full"
        />
      </Link>
    </div>
  );
}

