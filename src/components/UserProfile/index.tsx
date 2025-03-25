import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className: string;
  userImage: string;
  userName: React.ReactNode;
  userTitle: React.ReactNode;
}

export default function UserProfile({
  userImage = "img_ellipse_3.png",
  userName = "Raphael Akangbe",
  userTitle = "Founder & CEO",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center h-[202px] w-full md:h-auto gap-9`}>
      <Img
        src={userImage}
        width={202}
        height={202}
        alt="Raphael Akangbe"
        className="h-[202px] rounded-[100px] object-cover"
      />
      <div className="h-[70px]">
        <div className="flex h-[70px] flex-col items-start">
          <Heading
            size="text3xl"
            className="h-[48px] text-[32px] font-medium !text-colors2">
          >
            {userName}
          </Heading>
          <Text
            size="textxl"
            className="mt-[-6px] h-[30px] text-[24px] font-light !text-colors2"
          >
            {userTitle}
          </Text>
        </div>
      </div>
    </div>
  );
}

