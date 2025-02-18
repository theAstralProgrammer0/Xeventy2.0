import { Button, Img, Text } from "../../components";
import React from "react";

export default function CareersSection() {
  return (
    <>
      {/* careers section */}
      <div className="mt-[154px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[60px] px-14 md:px-5 sm:gap-[30px]">
          <div className="mr-1 flex flex-col items-center gap-6 md:mr-0">
            <Button
              color="black_900_01"
              size="xs"
              shape="round"
              className="min-w-[72px] rounded-[10px] px-1.5 font-merriweather tracking-[1.09px]"
            >
              Careers
            </Button>
            <Text
              size="text12xl"
              className="self-stretch text-center text-[49.62px] font-normal leading-[60px] !text-black-900_01 md:text-[45px] sm:text-[39px]"
            >
              Join us in creating a tech engaged healthcare system in Africa
            </Text>
            <Text
              size="text2xl"
              as="p"
              className="self-stretch text-center text-[16.54px] font-normal leading-8 !text-black-900_01"
            >
              At Xeventy2.0 Health Limited, we nurture talent and foster
              innovation to drive meaningful change in digital health.  Our
              collaborative, supportive       environment values diverse
              perspectives and encourages creativity, leading to cutting-edge
              solutions that improve access to care and patient outcomes
              worldwide.  Passionate about digital health and global impact?
              Explore our career opportunities and join our team shaping the
              future of healthcare.
            </Text>
          </div>
          <div className="relative h-[816px]">
            <Img
              src="img_pic3.png"
              width={436}
              height={652}
              alt="Picthree"
              className="absolute right-[-0.65px] top-[6%] m-auto h-[652px] w-[36%] rounded-[12px] object-contain"
            />
            <Img
              src="img_pic2.png"
              width={436}
              height={652}
              alt="Pictwo"
              className="absolute bottom-[0.65px] left-0 right-0 mx-auto h-[652px] w-[36%] rounded-[12px] object-contain"
            />
            <Img
              src="img_pic1.png"
              width={436}
              height={652}
              alt="Picone"
              className="absolute left-0 top-0 m-auto h-[652px] w-[36%] rounded-[12px] object-contain"
            />
          </div>
          <Button
            size="xl"
            rightIcon={
              <Img
                src="img_link_icon.png"
                width={28}
                height={28}
                alt="Link icon"
                className="mb-1 h-[28px] w-[28px] object-contain"
              />
            }
            className="ml-[172px] mr-[174px] gap-1.5 self-stretch rounded-[14px] px-[34px] md:mx-0 sm:px-5"
          >
            Explore careers
          </Button>
        </div>
      </div>
    </>
  );
}
           
