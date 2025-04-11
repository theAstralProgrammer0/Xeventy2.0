import { Text, Img, Button, Heading } from "../../components";
import Link from "next/link";
import React from "react";

export default function ContactUsSection() {
  return (
    <>
      {/* contact us section */}
      <div className="relative w-full h-[988px] mt-[3rem] md:h-auto">
        <Img
          src="person-office-work-day.jpg"
          alt="Background"
          className="absolute inset-0 h-full object-cover z-0"
          width={1920}
          height={1080}
        />
        <div className="relative flex flex-col items-center py-[130px] md:h-auto md:py-5 z-10">
          <div className="container-xs flex flex-col items-start gap-[34px] px-1 md:h-auto md:px-5">
            <Heading
              className="mx-4 w-[50%] md:w-full text-[70px] font-medium !text-white-a700 md:ml-0 md:text-[48px]"
            >
              <>
                Have a question?
                <br />
                Our team is happy to assist you
              </>
            </Heading>
            <Text
              size="textlg"
              className="mx-4 w-[40%] md:w-full text-[21px] font-normal md:ml-0"
            >
              Ask about Xeventy2.0 Health services, pricing implementation, or
              anything else. Our highly trained reps are standing by, ready to
              help.
            </Text>
            <div className="flex items-end gap-[34px] px-4 md:flex-col">
              <Button
                className="mt-[2rem] !text-white-a700 hover:!text-black-900 min-w-[198px] rounded-[10px] px-[32px] text-colors6 sm:px-5"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Text className="mb-3.5 text-[18px] font-normal">
                Or call +234 105-9064
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
