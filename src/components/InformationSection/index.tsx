import { Img, Button, Text } from "./..";
import React from "react";

interface Props {
  className: string;
  titleText: React.ReactNode;
  descriptionText: React.ReactNode;
  buttonText: string;
  imageSrc: string;
}

export default function InformationSection({
  titleText = "Understanding the EU Deforestation Regulation (EUDR)",
  descriptionText = "Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains...",
  buttonText = "Read article",
  imageSrc = "img_frame_21.png",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch p-12 md:p-5 border-black-900_01 border-tborder-solid flex-1 cursor-pointer container-xs hover:border-green-a700_a5 hover:border-[0.5px] hover:border-solid hover:shadow-xs`}
    >
      <div className="flex w-[88%] items-center justify-center md:w-full md:flex-col">
        <div className="flex w-[60%] flex-col items-start gap-[46px] md:w-full">
          <div className="flex flex-col items-start gap-7 self-stretch">
            <Text
              size="text12xl"
              className="w-[88%] text-[34px] font-normal leading-[41px] !text-black-900_01 md:w-full md:text-[32px] sm:text-[30px]"
            >
              {titleText}
            </Text>
            <Text
              className="w-[88%] text-[18px] font-normal leading-[21px] !text-black-900_01 md:w-full">
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
                className="h-[24px] w-[24px] object-contain"
              />
            }
            className="min-w-[276px] gap-2.5 rounded-[10px] border-[0.5px] border-solid border-green-a700_a5 px-[33px] font-merriweathersans sm:px-5"
          >
            {buttonText}
          </Button>
        </div>
        <Img
          src={imageSrc}
          width={380}
          height={380}
          alt="blog image"
          className="h-[380px] w-[34%] rounded-[16px] object-contain md:w-full"
        />
      </div>
    </div>
  );
}

